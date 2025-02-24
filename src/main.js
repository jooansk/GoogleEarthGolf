import {
	WGS84_ELLIPSOID,
	CAMERA_FRAME,
	GeoUtils,
	GlobeControls,
	CameraTransitionManager,
	TilesRenderer,
} from '3d-tiles-renderer';
import * as jki from '3d-tiles-renderer';
import {
	TilesFadePlugin,
	UpdateOnChangePlugin,
	TileCompressionPlugin,
	UnloadTilesPlugin,
	GLTFExtensionsPlugin,
	BatchedTilesPlugin,
	CesiumIonAuthPlugin,
	DebugTilesPlugin,
	ImplicitTilingPlugin,
} from '3d-tiles-renderer/plugins';
import {
	Scene,
	DirectionalLight,
	AmbientLight,
	WebGLRenderer,
	PerspectiveCamera,
	CameraHelper,
	Box3,
	Raycaster,
	Vector2,
	Vector3,
	Mesh,
	CylinderGeometry,
	MeshBasicMaterial,
	Group,
	TorusGeometry,
	OrthographicCamera,
	BoxGeometry,
	Sphere,
	MathUtils,
	Matrix4,
	Quaternion,
	LineBasicMaterial,
	BufferGeometry,
	Line,
	SphereGeometry,
	DoubleSide,
	ExtrudeGeometry,
	ShapeGeometry,
	Shape,
	TextureLoader,
	RepeatWrapping,
	CanvasTexture,
} from 'three';
import { FlyOrbitControls } from '/src/controls/FlyOrbitControls.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { ConvexGeometry } from 'three/addons/geometries/ConvexGeometry.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';
import * as GeometryUtils from 'three/addons/utils/GeometryUtils.js';
import { Line2 } from 'three/addons/lines/Line2.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DataTile } from '/src/dataTile.js';
import { Clubs } from '/src/Clubs.js';
import { Minimap } from '/src/Minimap.js';
import { GsProApiEmulator} from '/src/GsProApiEmulator.js';
import { SqShot } from '/src/SqShot.js';
import { SettingsPage } from '/src/SettingsPage.js';
import { CoursePage } from '/src/CoursePage.js';
import { HoleSelection } from '/src/HoleSelection.js';
import { DirectionControls } from '/src/DirectionControls.js';

const NONE = 0;
const ALL_HITS = 1;
const FIRST_HIT_ONLY = 2;

const hashUrl = window.location.hash.replace( /^#/, '' );
let camera, controls, scene, renderer, tiles, cameraHelper,labelRenderer;
let thirdPersonCamera, thirdPersonRenderer, thirdPersonControls;
let secondRenderer, secondCameraHelper, secondControls, secondCamera;
let orthoCamera, orthoCameraHelper;
let box, sphere;
let offsetParent, geospatialRotationParent;
let statsContainer, stats;
let shotRaycaster;
let shotShadowRaycaster;
let transition, myClubs,settings;
let prevDistance = 0;
let simulationComplete = true;
let minimapRaycaster;
let cameraDir;
let shotTargetDir;
var intervalTimer = null;

// Animation
let step = 0;
var disableZoom = true;
var start;
var end;
var tempPoints = [];
var ballspeed = new DataTile("BALL SPEED","bs",5,100);
var carry = new DataTile("CARRY","carry",5,195);
var backspin = new DataTile("BACK SPIN","bs1",5,290);
var sidespin = new DataTile("SIDE SPIN","ss",5,385);
var hla = new DataTile("HLA","hla",5,480);
var vla = new DataTile("VLA","vla",5,575);
var dla = new DataTile("DLA","dla",5,670);
var directionCtrl = new DirectionControls('top','left',170,window.innerHeight/2,"modifyTargetDirection");
var shotAnimation = false;

window["modifyTargetDirection"] = function(dir)
{
	try{
		var increment = 0;
		if(dir == 0)
		{
			increment = 1*Math.PI/180;
		}
		else
		{
			increment = -1*Math.PI/180;
		}
		modifyTargetAngle(increment);
	}
	catch(e)
	{
		// don't care
	}
}

var selectedHole = -1;
window["highlightHole"] = function(id)
{
	try{
	if(groupPreviewCourse)
	{
		for(var i = 0; i < groupPreviewCourse.children.length; ++i)
		{
			groupPreviewCourse.children[i].material.color.r = 0;
			groupPreviewCourse.children[i].material.color.g = 0;
			groupPreviewCourse.children[i].material.color.b = 0;
		}
		groupPreviewCourse.children[id-1].material.color.r = 1;
		groupPreviewCourse.children[id-1].material.color.g = 0;
		groupPreviewCourse.children[id-1].material.color.b = 0;
		
	}
	}
	catch(e)
	{
		//wait
	}
}
var initialRun = [];
for(var i = 0; i < 19; ++i)
{
	initialRun.push(true);
}
window["updateHoleNumber"] = function(id,twoTimes=true)
{
	try{
		groupPreviewCourse.visible = false;
	}
	catch(e)
	{
		// continue
	}
	holeSelection.update(id);
	selectedHole = id;
	moveToHole(false);
	if(initialRun[selectedHole])
	{
		initialRun[selectedHole] = false;
		setTimeout(()=>{updateHoleNumber(selectedHole,false);},2000);
	}
}
var holeSelection = new HoleSelection(window.innerWidth/2-1038/2,0,"updateHoleNumber","highlightHole");
//var minimap = new Minimap(250,350,10,100,"/pinecrest.jpg");
window["myShot"] = new SqShot();

window["myMarker"] = null;
window["drawingContext"]  = null;





window["myfunction"] = function()
{
	console.log("ws data!");
}

window["takeAshot"] = function(bs1,va,ha,bs,ss)
{
	console.log("take a shot!");
	window["myShot"] = new SqShot(bs1,va,ha,bs,ss);
	ballspeed.setValue(parseFloat(bs1).toFixed(1));
	vla.setValue(parseFloat(va).toFixed(2));
	hla.setValue(parseFloat(ha).toFixed(2));
	backspin.setValue(bs);
	sidespin.setValue(ss);
	addTrajectory();
	simulationComplete = false;
}
var emulator = new GsProApiEmulator('127.0.0.1','8989',myfunction,takeAshot);

window.addEventListener('beforeunload', function(e) {
  emulator.sendAck(203,"Goodbye");
  
});


window["showClubs"] = function()
{
	myClubs.showClubs();
}

function getClubDistance(club)
{
	var clubs = settings.getSettings().clubs;
	var distance = 300;
	for(var i = 0; i < clubs.length; ++i)
	{
		if(clubs[i].name == club)
		{
			distance = clubs[i].distance;
			break;
		}
	}
	return distance;
}

function getBestClubName(distance)
{
	var clubs = settings.getSettings().clubs;
	var difference = 300;
	var bestIndex = 0;
	for(var i = 0; i < clubs.length; ++i)
	{
		if(Math.abs(distance-clubs[i].distance) < difference)
		{
			difference = Math.abs(distance-clubs[i].distance);
			bestIndex = i;
		}
	}
	return clubs[bestIndex].name;
}

window["clubSelected"] = function(club)
{
	myClubs.setClub(club);
	var distance = getClubDistance(club);

	emulator.sendPlayer('RH',club,distance);
	
}


const params = {

	orthographic: false,

	enableCacheDisplay: false,
	enableRendererStats: false,
	useBatchedMesh: Boolean( new URLSearchParams( window.location.hash.replace( /^#/, '' ) ).get( 'batched' ) ),
	errorTarget: 40,

	enableUpdate: true,
	raycast: DebugTilesPlugin.ColorModes.NONE,
	optimizeRaycast: true,
	enableCacheDisplay: false,
	enableRendererStats: false,

	errorThreshold: 60,
	maxDepth: 15,
	displayActiveTiles: false,
	resolutionScale: 1.0,
	showThirdPerson: false,
	showSecondView: false,
	reload: reinstantiateTiles,

};


window["goToCoursePage"] = function(id)
{
	if(settings.buttonClick(id))
	{
		window["coursePage"] = new CoursePage('courses.json','selectCourse');
	}
}

window["selectCourse"] = function(course)
{
	coursePage.remove();
	init(course);
	animate();
}
/*
init();
animate();
*/

settings = new SettingsPage(["openSettings","closeSettings","goToCoursePage"]);

function reinstantiateTiles() {
	if(!settings)
	{
		setTimeout(reinstantiateTiles,1000);
		return;
	}
	if ( tiles ) {

		scene.remove( tiles.group );
		tiles.dispose();
		tiles = null;

	}
		
	const dracoLoader = new DRACOLoader();
	dracoLoader.setDecoderPath( 'https://unpkg.com/three@0.153.0/examples/jsm/libs/draco/gltf/' );

	const ktx2loader = new KTX2Loader();
	ktx2loader.setTranscoderPath( 'https://unpkg.com/three@0.153.0/examples/jsm/libs/basis/' );
	ktx2loader.detectSupport( renderer );

	tiles = new TilesRenderer();
	tiles.registerPlugin( new CesiumIonAuthPlugin( { apiToken: settings.getSettings().key, assetId: settings.getSettings().assetId, autoRefreshToken: true } ) );
	tiles.registerPlugin( new TileCompressionPlugin() );
	tiles.registerPlugin( new UpdateOnChangePlugin() );
	tiles.registerPlugin( new UnloadTilesPlugin() );
	tiles.registerPlugin( new TilesFadePlugin() );
	tiles.registerPlugin( new GLTFExtensionsPlugin( {
		rtc: true,
		dracoLoader: dracoLoader,
		ktxLoader: ktx2loader,
	} ) );

	if ( params.useBatchedMesh ) {

		tiles.registerPlugin( new BatchedTilesPlugin( {
			renderer,
			discardOriginalContent: false,
			instanceCount: 250,
		} ) );

	}

	tiles.group.rotation.x = - Math.PI / 2;
	scene.add( tiles.group );

	tiles.setResolutionFromRenderer( transition.camera, renderer );
	tiles.setCamera( transition.camera );

	controls.setTilesRenderer( tiles );
	
	
	setTimeout(()=>{
		if(myScene.children[1].children.length == 0)
		{
			if(!alert("Unfortunately it seems that you haven't provided sufficient Cesium ION key. Head to https://cesium.com/learn/ to gain api key."))
			{
				window.location.reload();
			}
		}
	}
	,5000);
	

}


var shotPosition;
var shotOrientation;
var shotPositionTarget;


var myLat,myLon;
var distanceToTarget;
var maxCourseHeight = -1;

function init(course) {
	
	distanceToTarget = new Vector3();
	
	fetch(course)
		.then(r => r.text())
		.then(text => {
			document.getElementById('courseInfo').innerHTML += text;
			const target = document.getElementById('courseInfo');
			window["mySvg"] = target.getElementsByTagName('svg')[0];
			var split = mySvg.getAttribute('position').split(':');
			let tempPos = {lat:parseFloat(split[0]),lon:parseFloat(split[1])};
			tiles.setLatLonToYUp(tempPos.lat*Math.PI/180,tempPos.lon*Math.PI/180);
			
			myLat = tempPos.lat;
			myLon = tempPos.lon;
			const elements = mySvg.querySelectorAll('[inkscape\\:label]');

			// Filter elements where the inkscape:label attribute starts with "Hole"
			const filteredElements = Array.from(elements).filter(element => {
				const label = element.getAttribute('inkscape:label');
				return label && label.startsWith('Hole');
			
			});
			// Initialize variables to track the combined bounding box
			let minX = Infinity;
			let minY = Infinity;
			let maxX = -Infinity;
			let maxY = -Infinity;

			// Iterate through the filtered elements
			filteredElements.forEach(element => {
				let bbox;
				if (element instanceof SVGGraphicsElement) {
					// For SVG elements, use getBBox()
					bbox = element.getBBox();
				} else {
					// For HTML elements, use getBoundingClientRect()
					bbox = element.getBoundingClientRect();
				}

				// Update the combined bounding box
				minX = Math.min(minX, bbox.x);
				minY = Math.min(minY, bbox.y);
				maxX = Math.max(maxX, bbox.x + bbox.width);
				maxY = Math.max(maxY, bbox.y + bbox.height);
			});

			// Calculate the combined bounding box
			const combinedBBox = {
				x: minX,
				y: minY,
				width: maxX - minX,
				height: maxY - minY
			};
							
			window["myElements"] = filteredElements;
			
			setTimeout(()=>{
				var tempRaycast = new Raycaster();
				var dir = new Vector3(0,-1,0);
				
				window["groupPreviewCourse"] = new Group();
				for(var i = 1; i < myElements.length; ++i)
				{
					// get hole points
					var dSplit = myElements[i].children[myElements[i].children.length-1].getAttribute('d').split(' ');
					var points = [];
					for(var j = 1; j < dSplit.length; ++j)
					{
						var pointSplit = dSplit[j].split(',');
						var startPoint = new Vector3(-parseFloat(pointSplit[1]),1000,parseFloat(pointSplit[0]));
						tempRaycast.set(startPoint,dir);
						startPoint.y = getHeight(tempRaycast)+1;
						if(startPoint.y > maxCourseHeight)
						{
							maxCourseHeight = startPoint.y;
						}
						points.push(startPoint);
					}
					const geometry1 = new BufferGeometry().setFromPoints(points);
					const material1 = new LineBasicMaterial( { color: 0x00ff00 } );
					const line1 = new Line(geometry1, material1);
					line1.userData["holeData"] = JSON.stringify(points);
					groupPreviewCourse.add(line1);
					//target.set(parseFloat(commaSplit[1])*(-1),myControls.pivotPoint.y+10,parseFloat(commaSplit[0]));
					
				}
				
				scene.add(groupPreviewCourse);
			},3000);
				
				
				window["gWidth"] = parseFloat(mySvg.getAttribute('width'));
				window["gHeight"] = parseFloat(mySvg.getAttribute('height'));
				setCamera();
				
		})
		.catch(console.error.bind(console));
	
	
	shotTargetDir = new Vector3();
	// renderer
	renderer = new WebGLRenderer( { antialias: true } );
	renderer.setClearColor( 0x151c1f );
	document.body.appendChild( renderer.domElement );
	

	
	shotPosition = new Vector3();
	shotOrientation = new Quaternion();
	shotPositionTarget = new Vector3();
	
	
	
	
	renderer.domElement.addEventListener('dblclick',moveToHole);
	renderer.domElement.addEventListener('click',()=>{
		try{
			if(myShotGroup.position.distanceTo(myControls.pivotPoint) > 30)
			{
				setTarget(myControls.pivotPoint.x,myControls.pivotPoint.z);
			}
		}
		catch(e)
		{
			//no worries
		}
	});
	renderer.domElement.addEventListener('mousedown',(event)=>{
		console.log(event);
	});


	// scene
	scene = new Scene();
	
	window["myScene"] = scene;

	// camera and transition set up
	transition = new CameraTransitionManager(
		new PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 160000000 ),
		new OrthographicCamera( - 1, 1, 1, - 1, 1, 160000000 ),
	);
	/*
	transition.perspectiveCamera.position.set( 4800000, 2570000, 14720000 );
	transition.perspectiveCamera.lookAt( 0, 0, 0 );
	*/
	transition.autoSync = false;

	transition.addEventListener( 'camera-change', ( { camera, prevCamera } ) => {

		tiles.deleteCamera( prevCamera );
		tiles.setCamera( camera );
		controls.setCamera( camera );

	} );
	
	
	
	minimapRaycaster = new Raycaster();
	cameraDir = new Vector3();
	
	
	window["myTransition"] = transition;
	
	// disable adjusting the orthographic camera position for zoom since globe controls will do this
	transition.orthographicPositionalZoom = false;

	
	const loader = new GLTFLoader();
	loader.load(
		// resource URL
		'marker.glb',
		// called when the resource is loaded
		function ( gltf ) {
			window["myMarker"] = gltf.scene.children[0];
		},
	);
	// controls
	controls = new GlobeControls( scene, transition.camera, renderer.domElement, null );
	controls.enableDamping = true;
	
	window["myControls"] = controls;

    const sky = new Sky();
	sky.scale.setScalar( 450000000 );
	window["mySky"] = sky;
	const phi = MathUtils.degToRad( 90 );
	const theta = MathUtils.degToRad( -180 );
	const sunPosition = new Vector3().setFromSphericalCoords( 1, phi, theta );
	shotRaycaster = new Raycaster();
	shotShadowRaycaster = new Raycaster();
	sky.material.uniforms.sunPosition.value = sunPosition;

	scene.add( sky );
	// initialize tiles
	reinstantiateTiles();

	onWindowResize();
	window.addEventListener( 'resize', onWindowResize, false );

	myClubs = new Clubs("DLA","test",5,765,"showClubs","clubSelected");
 

}


function moveToHole(ïsDblClick=true,modifyCamera=true)
{
	let startPos = new Vector3();
	startPos.set(myTransition.camera.position.x,myTransition.camera.position.y,myTransition.camera.position.z);
	var holeFound = true;
	var holeIndex = 0;
	if(selectedHole == -1)
	{
		updateHoleNumber(1,false);
	}
	
	holeIndex = selectedHole;
	var points = JSON.parse( groupPreviewCourse.children[holeIndex-1].userData.holeData);
	var tempRaycaster = new Raycaster();
	var dir = new Vector3(0,-1,0);
	for(var i = 0; i < points.length; ++i)
	{
		var tempPoint = new Vector3(points[i].x,points[i].y+100,points[i].z);
		tempRaycaster.set(tempPoint,dir);
		points[i].y = getHeight(tempRaycaster);
	}
	if(modifyCamera)
	{
		if(ïsDblClick)
		{
			myTransition.camera.position.set(myControls.pivotPoint.x,myControls.pivotPoint.y+10,myControls.pivotPoint.z);
		}
		else
		{
			myTransition.camera.position.set(points[0].x+20,points[0].y+20,points[0].z+20);
			myControls.pivotPoint.set(points[0].x,points[0].y,points[0].z);
		}
		let target = new Vector3();
		if(holeFound)
		{
			if(points.length > 2)
			{
				if(myTransition.camera.position.distanceTo(points[points.length-1]) < 220)
				{
					target.set(points[points.length-1].x,points[points.length-1].y+10,points[points.length-1].z);
				}
				else
				{
					if(points.length > 3)
					{
						if(myTransition.camera.position.distanceTo(points[points.length-2]) > myTransition.camera.position.distanceTo(points[points.length-3]))
						{
							target.set(points[points.length-3].x,points[points.length-3].y+10,points[points.length-3].z);
						}
						else
						{
							target.set(points[points.length-2].x,points[points.length-2].y+10,points[points.length-2].z);
						}
					}
					else
					{
						target.set(points[points.length-2].x,points[points.length-2].y+10,points[points.length-2].z);
					}
				}
			}
			else
			{
				target.set(points[1].x,points[1].y+10,points[1].z);
			}
			myTransition.camera.lookAt(target);
			var test = new Vector3();
			test.set(myTransition.camera.position.x-target.x,myTransition.camera.position.y-target.y,myTransition.camera.position.z-target.z);
			test.normalize();
			//myTransition.camera.position.set(myControls.pivotPoint.x+test.x*10,myControls.pivotPoint.y+test.y*10,myControls.pivotPoint.z+test.z*10);
			if(ïsDblClick)
			{
				myTransition.camera.position.set(myControls.pivotPoint.x+test.x*10,myControls.pivotPoint.y+test.y*10,myControls.pivotPoint.z+test.z*10);
			}
			else
			{
				myTransition.camera.position.set(points[0].x+test.x*10,points[0].y+test.y*10,points[0].z+test.z*10);
			}
			
			drawShot();
			shotTargetDir.set(test.x,test.y,test.z);
			setTarget(target.x,target.z);
			shotPosition.set(myTransition.camera.position.x,myTransition.camera.position.y,myTransition.camera.position.z);
			shotPositionTarget.set(points[1].x,points[1].y+10,points[1].z);
			if(drawingContext != null)
			{
				setMarker(target.x,target.y,target.z);
			}
			else
			{
				addMarker(target.x,target.y,target.z);
			}
		}
	}
	else
	{
		let target = new Vector3();
		target.set(points[points.length-1].x,points[points.length-1].y+10,points[points.length-1].z);
		setTarget(target.x,target.z);
		if(drawingContext != null)
		{
			setMarker(target.x,target.y,target.z);
		}
		else
		{
			addMarker(target.x,target.y,target.z);
		}
	}
}


window["openSettings"] = function(id)
{
	settings.open(id);
}

window["closeSettings"] = function(id)
{
	settings.close(id);
}

window["getCameraWorld"] = function()
{
	var ret = new Vector3();
	myTransition.camera.getWorldDirection(ret);
	console.log(ret);
}

window["addMarker"] = function(x,y,z)
{
	myMarker.position.set(x,y,z);
	//myMarker.lookAt(myTransition.camera.position);
	window["myMaterial"] = new MeshBasicMaterial();
	var c = document.createElement('canvas');
	c.setAttribute('style','display:block;width:300px;height:200px;pointer-events: none;');
	c.setAttribute('id','myMarkerTexture');
	
	document.body.appendChild(c);
	
	drawingContext = c.getContext( '2d' );
	// draw white background

	drawingContext.fillStyle = '#FF0000';
	drawingContext.fillRect( 0, 0, 512, 512 );

	// set canvas as material.map (this could be done to any map, bump, displacement etc.)

	myMaterial.map = new CanvasTexture( c );
	
	myMarker.material = myMaterial;
	
	scene.add(myMarker);
	
	setMarker(x,y,z);
}
window["setMarker"] = function(x,y,z,redo=false)
{
	
	myMaterial.map.needsUpdate = true;
	var tempRaycaster = new Raycaster();
	var dir = new Vector3(0,-1,0);
	var temp = new Vector3(x,y+10,z);
	tempRaycaster.set(temp,dir);
	const intersects = tempRaycaster.intersectObjects( scene.children, false );
	if ( intersects.length > 0 ) {
		myMarker.position.set(x,intersects[0].point.y,z);

	} else {
		myMarker.position.set(x,y,z);
	}
	drawingContext.clearRect(0, 0, 300, 200)
	
	myBall.getWorldPosition(distanceToTarget);
	
	
	drawingContext.fillStyle = '#002920';
	drawingContext.fillRect( 0, 0, 300, 150 );
	drawingContext.fillStyle = '#ffffff';
	drawingContext.fillRect( 7.5, 5, 285, 140 );
	drawingContext.strokeStyle = '#1f1f1f';
	drawingContext.fillStyle = '#1f1f1f';
	drawingContext.fillRect( 40, 60, 220, 5 );
	
	var heightDiff = myMarker.position.y - distanceToTarget.y;

	if(heightDiff < 0)
	{
		drawingContext.fillStyle = '#002920';
		drawingContext.beginPath();
		drawingContext.moveTo(45, 50);
		drawingContext.lineTo(95,50);
		drawingContext.lineTo(70, 30);
		drawingContext.lineTo(45, 50);
		drawingContext.closePath();
		drawingContext.fill();
		heightDiff *= (-1);
	}
	else
	{
		drawingContext.fillStyle = '#ff0000';
		drawingContext.beginPath();
		drawingContext.moveTo(70, 50);
		drawingContext.lineTo(45,30);
		drawingContext.lineTo(95, 30);
		drawingContext.lineTo(70, 50);
		drawingContext.closePath();
		drawingContext.fill();
	}
	
	drawingContext.scale(1, -1);
	drawingContext.font = "bold 38px serif";
	drawingContext.fillStyle = '#000000';
	
	var distanceUnit = settings.getSettings().distance;
	var heightDifference = distanceUnit == 'meters' ? parseFloat(heightDiff).toFixed(1) : parseFloat(heightDiff*1.0936133).toFixed(1);
	
	drawingContext.fillText(`${heightDifference} ${distanceUnit}`, 100, -30);

	drawingContext.font = "bold 48px serif";
	var v4 = new Vector2(myMarker.position.x,myMarker.position.z);
	var v5 = new Vector2(distanceToTarget.x,distanceToTarget.z);
	
	var distToTarget = distanceUnit == 'meters' ? v4.distanceTo(v5) : v4.distanceTo(v5)*1.0936133;
	if(!redo)
	{
		clubSelected(getBestClubName(distanceUnit == 'yards' ? distToTarget : distToTarget*1.0936133));
	}
	//var text = `${distanceToTarget.distanceTo(myMarker.position)*1.0936133} yards`;
	drawingContext.fillText(`${parseFloat(distToTarget).toFixed(1)}  ${distanceUnit}`, 40, -80);
	// need to flag the map as needing updating.

	if(myShotGroup)
	{
		
		const v1 = new Vector3(myTransition.camera.position.x-myMarker.position.x,myTransition.camera.position.z-myMarker.position.z,0);
		const v2 = new Vector3(0,-1,0);
		
		// Calculate the smallest angle between the two vectors (in radians)
		const angle = v1.angleTo(v2);

		// Calculate the cross product to determine the direction
		const cross = new Vector3();
		cross.crossVectors(v1, v2);

		// Determine the sign of the angle using the cross product and the dot product
		const dot = v1.dot(v2);
		const sign = cross.z > 0 ? 1 : -1; // Assuming you're working in 2D (z-axis is up)

		// Adjust the angle to be in the range [0, 360) degrees
		let fullAngle;
		if (sign > 0) {
			fullAngle = angle; // Counterclockwise
		} else {
			fullAngle = (2 * Math.PI) - angle; // Clockwise
		}
	
		
		myMarker.rotation.z = Math.PI - fullAngle;
		let scale = myTransition.camera.position.distanceTo(myMarker.position) / 20;
		myMarker.scale.set(scale,scale,scale);
	}
	if(!redo)
	{
		myMarker.material.map.needsUpdate = true;
		setMarker(x,y,z,true);
	}
}

window["setCamera"] = function()
{
	
	const camera = transition.camera;
	let bbox = myElements[0].getBBox();
	camera.position.set(-bbox.y-bbox.height/2,1000,bbox.x+bbox.width/2);
	let cameraTarget = new Vector3(-bbox.y-bbox.height/2,0,bbox.x+bbox.width/2);
	
	camera.lookAt(cameraTarget);
	camera.rotateZ(-Math.PI/2);
	// have to force the heigth with a delay - without some maps don't work..
	setTimeout(() => {
		myTransition.camera.position.y = 1000;
	},1000);
}


window["test"] = function(value)
{
	if(value)
	{
		emulator.sendAck(202,"Ready");
	}
	else
	{
		emulator.sendAck(203,"adsf");
	}
}

function onWindowResize() {

	const { perspectiveCamera, orthographicCamera } = transition;
	const aspect = window.innerWidth / window.innerHeight;

	perspectiveCamera.aspect = aspect;
	perspectiveCamera.updateProjectionMatrix();

	orthographicCamera.left = - orthographicCamera.top * aspect;
	orthographicCamera.right = - orthographicCamera.left;
	orthographicCamera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setPixelRatio( window.devicePixelRatio );
	if(settings)
	{
		settings.resize();
	}

}

function getHeight(raycaster)
{
	const intersects = raycaster.intersectObjects( scene.children, false );
	if ( intersects.length > 0 ) {

		return intersects[0].point.y;

	} else {
		return 0;
	}
}

function getPoint(raycaster)
{
	const intersects = raycaster.intersectObjects( scene.children, false );
	if ( intersects.length > 0 ) {

		return intersects[0].point;

	} else {
		return new Vector3();
	}
}

window["shadowBallLinePoints"] = [];
window["drawShot"] = function()
{
	try{
	if(myShotGroup != null)
	{
		myShotGroup.parent.remove(myShotGroup);
	}
	}
	catch(e)
	{
		// no worries
	}
	
	shadowBallLinePoints = [];
	const group = new Group();
    // Create trajectory line
    const points = myShot.points.map(p => new Vector3(p.x, p.z, p.y)); // Swap y and z for js coordinate system
    const geometry = new BufferGeometry().setFromPoints(points);
	const material = new LineBasicMaterial( {

					color: 0xff0000,
					linewidth: 5,} );
    const line = new Line(geometry, material);
	line.scale.x = 1;
	line.scale.y = 1;
	line.scale.z = 1;
	line.geometry.setDrawRange( 0, 1 );

	line.geometry.setDrawRange( 0, 0 );
    group.add(line);
	//scene.add(line1);
	window["myLine"] = line;
	//const positionAttribute = line.geometry.getAttribute( 'position' );
	

    // Add golf ball
    const ballGeometry = new SphereGeometry(0.1, 32, 32);
    const ballMaterial = new MeshBasicMaterial({ color: 0xffffff });
    const ball = new Mesh(ballGeometry, ballMaterial);
	window["myBall"] = ball;
    group.add(ball);
	
	group.position.set(myControls.pivotPoint.x,myControls.pivotPoint.y+0.1/2,myControls.pivotPoint.z);
	window["myShotGroup"] = group;
	//group.rotation.y = Math.PI;
	scene.add(group);

}

window["addTrajectory"] = function()
{
	
	    // Create trajectory line
    const points = myShot.points.map(p => new Vector3(p.x, p.z, p.y)); // Swap y and z for js coordinate system
    const geometry = new BufferGeometry().setFromPoints(points);
	const material = new LineBasicMaterial( { color: 0xff0000 } );
    const line = new Line(geometry, material);
	line.scale.x = 1;
	line.scale.y = 1;
	line.scale.z = 1;
	line.geometry.setDrawRange( 0, 1 );

    myShotGroup.add(line);
	//scene.add(line1);
	window["myLine"] = line;
}

window["setTarget"] = function(x,z)
{

	const v1 = new Vector3(myShotGroup.position.x-x,myShotGroup.position.z-z,0);
	v1.normalize();
	const v2 = new Vector3(0,-1,0);
	
	// Calculate the smallest angle between the two vectors (in radians)
	const angle = v1.angleTo(v2);

	// Calculate the cross product to determine the direction
	const cross = new Vector3();
	cross.crossVectors(v1, v2);

	// Determine the sign of the angle using the cross product and the dot product
	const dot = v1.dot(v2);
	const sign = cross.z > 0 ? 1 : -1; // Assuming you're working in 2D (z-axis is up)

	// Adjust the angle to be in the range [0, 360) degrees
	let fullAngle;
	if (sign > 0) {
		fullAngle = angle; // Counterclockwise
	} else {
		fullAngle = (2 * Math.PI) - angle; // Clockwise
	}
	
	myShotGroup.rotation.y = fullAngle;
	
	try{
		if(myTargetLine)
		{
			myShotGroup.remove(myTargetLine);
		}
	}
	catch(e)
	{
		// no worries
	}
	
	var points = [];
	
	points.push(new Vector3());
	//points[0].copy(myShotGroup.position);
	
	var v4 = new Vector2(x,z);
	var v5 = new Vector2(myShotGroup.position.x,myShotGroup.position.z);
	
	
	points.push(new Vector3());
	points[1].set(0,v4.distanceTo(v5)/20,v4.distanceTo(v5)/10);
	const geometry = new BufferGeometry().setFromPoints(points);
	const material = new LineBasicMaterial( { color: 0x002920 } );
    const line = new Line(geometry, material);
	line.scale.x = 1;
	line.scale.y = 1;
	line.scale.z = 1;

    myShotGroup.add(line);
	//scene.add(line1);
	window["myTargetLine"] = line;
	
}

function modifyTargetAngle(increment)
{
	myShotGroup.rotation.y += (increment);

}


window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 49) {
	   drawShot();
   }
   else if(key == 50)
   {
		setTarget(myControls.pivotPoint.x,myControls.pivotPoint.z);
   }
   else if(key == 51)
   {
		simulationComplete = false;
   }
}



function animate() {


	if(!simulationComplete && (intervalTimer == null))
	  {
			startShot();
	  }
	  
	  if(myMarker)
	  {
		const v1 = new Vector3(myTransition.camera.position.x-myMarker.position.x,myTransition.camera.position.z-myMarker.position.z,0);
		const v2 = new Vector3(0,-1,0);

		// Calculate the smallest angle between the two vectors (in radians)
		const angle = v1.angleTo(v2);

		// Calculate the cross product to determine the direction
		const cross = new Vector3();
		cross.crossVectors(v1, v2);

		// Determine the sign of the angle using the cross product and the dot product
		const dot = v1.dot(v2);
		const sign = cross.z > 0 ? 1 : -1; // Assuming you're working in 2D (z-axis is up)

		// Adjust the angle to be in the range [0, 360) degrees
		let fullAngle;
		if (sign > 0) {
		fullAngle = angle; // Counterclockwise
		} else {
		fullAngle = (2 * Math.PI) - angle; // Clockwise
		}


		myMarker.rotation.z = Math.PI - fullAngle;
		let scale = myTransition.camera.position.distanceTo(myMarker.position) / 20;
		myMarker.scale.set(scale,scale,scale);
		  
	  }


	renderer.setClearColor( 0x000000, 0 );	
	requestAnimationFrame( animate );

	if ( ! tiles ) return;

	controls.enabled = !shotAnimation;
	controls.update();
	transition.update();

	// update options
	const camera = transition.camera;
	tiles.setResolutionFromRenderer( camera, renderer );
	tiles.setCamera( camera );

	// update tiles
	camera.updateMatrixWorld();
	tiles.errorTarget = params.errorTarget;
	tiles.update();
	
	renderer.render( scene, camera );
}

function startShot()
{
	shotAnimation = true;
	start = Date.now();
	const point = myShot.points[step];
	myBall.position.set(point.x*1, point.z*1, point.y*1); // Swap y and z
	var prevBallPosition = new Vector3();
	var ballPosition = new Vector3();
	var shadowDir = new Vector3(0,-1,0);
	myBall.getWorldPosition(prevBallPosition);
	shotPosition.set(myTransition.camera.position.x,myTransition.camera.position.y,myTransition.camera.position.z);
	shotOrientation.copy(myTransition.camera.quaternion);
	var isYards = settings.getSettings().distance == 'yards';
	intervalTimer = setInterval(function(){
	step += 1;
  // Move the ball along the trajectory
  if ((step < myShot.points.length) && !simulationComplete) {
	  
	const point = myShot.points[step];
	myLine.geometry.setDrawRange( 0, step+1 );
	myBall.position.set(point.x*1, point.z*1, point.y*1); // Swap y and z
	
	myBall.getWorldPosition(ballPosition);
	var shotDirection = new Vector3(ballPosition.x-prevBallPosition.x,ballPosition.y-prevBallPosition.y,ballPosition.z-prevBallPosition.z);
	
	myTransition.camera.position.x += shotDirection.x;
	myTransition.camera.position.y += shotDirection.y;
	myTransition.camera.position.z += shotDirection.z;
	shotDirection.normalize();
	const points = [];
	points.push( new Vector3( ballPosition.x, ballPosition.y, ballPosition.z ) );
	points.push( new Vector3( ballPosition.x+15*shotDirection.x,ballPosition.y+shotDirection.y*15, ballPosition.z+shotDirection.z*15 ) );
	carry.setValue(isYards ? parseFloat(myShot.carryArray[step]*1.0936133).toFixed(0) : parseFloat(myShot.carryArray[step]).toFixed(0));
	shotRaycaster.set( ballPosition, shotDirection);
	
	prevBallPosition.copy(ballPosition);
	shotRaycaster.firstHitOnly = true;
	
	myTransition.camera.lookAt(ballPosition);
	const intersects = shotRaycaster.intersectObjects( scene.children, false );
	if ( intersects.length > 0 ) {

		if(intersects[0].distance >= prevDistance || intersects[0].distance > 1)
		{
			/*
			console.log(intersects);
			console.log(shotDirection.angleTo(intersects[0].face.normal)*180/Math.PI,' is approach angle');
			
			const geometry = new BoxGeometry( 0.4, 1.7, 0.4 ); 
			const material = new MeshBasicMaterial( {color: 0x00ff00} ); 
			const cube = new Mesh( geometry, material );
			cube.position.set(intersects[0].point.x,intersects[0].point.y,intersects[0].point.z);
			//group.rotation.set(myTransition.camera.rotation._x,myTransition.camera.rotation._y,myTransition.camera.rotation._z);
			//group.rotation.setFromQuaternion(myQuat);

			scene.add(cube);
			*/
			
			prevDistance = intersects[0].distance;
		}
		else
		{
			var tempHeight = ballPosition.y;
			ballPosition.y += 2;
			shotRaycaster.set( prevBallPosition, shotDirection);
			ballPosition = getPoint(shotRaycaster);
			var temp = new Vector3();
			//myBall.position.subVectors(myBall.parent.position,ballPosition);//+0.05;
			//myBall.position.addVectors(temp,myBall.parent.position);
			myBall.position.y += ballPosition.y-prevBallPosition.y+ 0.05;
			//myBall.position.x += ballPosition.x-prevBallPosition.x;
			//myBall.position.z += ballPosition.z-prevBallPosition.z;
			shotAnimation = false;
			end = Date.now();
			console.log(`Execution time: ${end - start} ms`);
			clearInterval(intervalTimer);
			simulationComplete = true;
			intervalTimer = null;
			step = 0;
			prevDistance = 0;
			emulator.sendAck(202,"Ready");
			const pointObj = mySvg.createSVGPoint();
			pointObj.x = ballPosition.z;
			pointObj.y = -ballPosition.x;
			 myElements[selectedHole].children[1]; // <-- green object
			var isPointInFill = myElements[selectedHole].children[myElements[selectedHole].children.length-2].isPointInFill(pointObj);
			console.log("Did you hit the green? " + isPointInFill);
			
			if(!(settings.getSettings().continueShots == 'yes'))
			{
				setTimeout(() => {
					myTransition.camera.position.copy(shotPosition);
					myTransition.camera.quaternion.copy(shotOrientation);
				},1000);
			}
			else
			{
				setTimeout(()=>{
					if(isPointInFill)
					{
						setTimeout(()=>{
							selectedHole++;
							if(selectedHole > 18)
							{
								selectedHole = 1;
							}
							myLine.geometry.setDrawRange( 0, 1 );
							myShotGroup.position.copy(ballPosition);
							myBall.position.set(0,0,0);
							updateHoleNumber(selectedHole);
							myTransition.camera.lookAt(myMarker.position);
						},1500);
					}
					else
					{
						myLine.geometry.setDrawRange( 0, 1 );
						myShotGroup.position.copy(ballPosition);
						myBall.position.set(0,0,0);
						moveToHole(false,false);
						myTransition.camera.lookAt(myMarker.position);
						
					}
				},300);
			}
		}

	} else {
		console.log("no intersectsions found!");
	}
	
	//console.log(shotDirection.angleTo(y_up)*180/Math.PI,);
	dla.setValue(parseFloat(90-shotDirection.angleTo(shadowDir)*180/Math.PI).toFixed(1));

	
  }
  else
  {
	end = Date.now();
	console.log(`Execution time: ${end - start} ms`);
	const point = myShot.points[myShot.points.length-1];
	clearInterval(intervalTimer);
	simulationComplete = true;
	intervalTimer = null;
	step = 0;
	prevDistance = Infinity;
	emulator.sendAck(202,"Ready");
	shotAnimation = false;
  }
  },10);
}