class SettingsItem {
  constructor(top,left,x,y,parent,text,value,callbacks,id,options) {
	  this.x = x;
	  this.y = y;
	  this.options = options;
	  this.id = id;
	  var div = document.createElement('div');
	  this.value = value;
	  this.top = top;
	  this.left = left;
	  div.setAttribute('style',`position:absolute;top:${y}px;left:${x}px;width:60px;height:25px;`);
	this.parent = parent;
	this.background =  document.createElement('div');
	var setValue =  document.createElement('div');
	setValue.setAttribute('style',`position:absolute;top:0px;left:${window.innerWidth-400}px;width:400px;height:${window.innerHeight}px;background-color:rgba(0,0,0,0.5);`);
	
	var h3 = document.createElement('h3');
	h3.setAttribute('style','color:white;position:relative;top:50px;font-size:40px;left:30px;');
	h3.innerHTML = text;
	if(options)
	{
		var selection = document.createElement('select');
		selection.setAttribute('id','newValue_'+id);
		for(var i = 0; i < options.length; ++i)
		{
			var option = document.createElement('option');
			option.setAttribute('value',options[i]);
			option.innerHTML = options[i];
			if(this.value == options[i])
			{
				option.setAttribute('selected','selected');
			}
			selection.appendChild(option);
		}
		
		selection.setAttribute('style',`position:relative;top:150px;left:30px;width:100px;`);
		
		setValue.appendChild(selection);
		
	}
	else
	{
		var selection = document.createElement('input');
		selection.setAttribute('type','text');
		selection.setAttribute('id','newValue_'+id);
		selection.setAttribute('style',`position:relative;top:150px;left:30px;width:100px;`);
		selection.value = this.value;
		setValue.appendChild(selection);
	}
	setValue.appendChild(h3);
	
	var h3 = document.createElement('h3');
	h3.setAttribute('style','color:white;position:relative;top:50px;font-size:40px;left:30px;');
	h3.innerHTML = text;
	
	var closeButton = document.createElement('div')
	closeButton.setAttribute('style',`position:relative;top:${window.innerHeight-230}px;left:150px;width:${40}px;height:${25}px`);
	closeButton.setAttribute('id',`tile_${id}`);
	closeButton.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg onclick="${callbacks[1]}(${id})"
   width="40mm"
   height="25mm"
   viewBox="0 0 40 25"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="Item.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showguides="true"
     inkscape:zoom="2.8756734"
     inkscape:cx="5.0422972"
     inkscape:cy="83.632585"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1">
    <rect
       x="22.951145"
       y="7.650382"
       width="125.88356"
       height="39.642887"
       id="rect4" />
    <rect
       x="20.169189"
       y="9.0413609"
       width="129.36101"
       height="23.646635"
       id="rect3" />
    <rect
       x="17.387232"
       y="12.518807"
       width="123.79709"
       height="20.169189"
       id="rect2" />
    <inkscape:path-effect
       effect="fillet_chamfer"
       id="path-effect1"
       is_visible="true"
       lpeversion="1"
       nodesatellites_param="F,0,0,1,0,0.45822668,0,1 @ F,0,0,1,0,0.44827683,0,1 @ F,0,0,1,0,0,0,1 @ F,0,0,1,0,0,0,1"
       radius="0"
       unit="px"
       method="auto"
       mode="F"
       chamfer_steps="1"
       flexible="false"
       use_knot_distance="true"
       apply_no_radius="true"
       apply_with_radius="true"
       only_selected="false"
       hide_knots="false" />
  </defs>
  <g
     inkscape:label="Item"
     inkscape:groupmode="layer"
     id="layer1"
     transform="matrix(1.0055634,0,0,0.99990134,-0.11126907,0.17887498)">
    <rect
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:ultra-condensed;font-size:18.6667px;font-family:Playbill;-inkscape-font-specification:'Playbill Ultra-Condensed';text-align:center;writing-mode:lr-tb;direction:ltr;text-anchor:middle;white-space:pre;shape-inside:url(#rect3);shape-padding:0.312012;fill:#002920;fill-opacity:0.85;stroke:#000000;stroke-width:0.965882;stroke-miterlimit:14.7;stroke-dasharray:none;stroke-opacity:1"
       id="rect5"
       width="38.812813"
       height="24.036585"
       x="0.59359437"
       y="0.30404815" />
    <text
       xml:space="preserve"
       transform="matrix(0.29488416,0,0,0.2740162,-5.2379873,12.396987)"
       id="itemText"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:ultra-condensed;font-size:13.6667px;font-family:Playbill;-inkscape-font-specification:'Playbill Ultra-Condensed';text-align:center;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect3);shape-padding:0.312012;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.51181;stroke-dasharray:none;stroke-opacity:1;font-stretch:normal;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;"
       x="220%"
       y="90%" dominant-baseline="middle"  text-anchor="middle"
       inkscape:label="itemText"></text>
    <text
       xml:space="preserve"
       transform="matrix(0.29488416,0,0,0.2740162,-5.2379873,12.396987)"       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:40px;line-height:0.85;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:center;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4);shape-padding:0;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.88976;stroke-miterlimit:14.7;stroke-dasharray:none;stroke-opacity:1"
       inkscape:label="itemValue" dominant-baseline="middle"  text-anchor="middle" x="220%"
       y="90%" >CLOSE</text>
  </g>
</svg>
`;

setValue.appendChild(closeButton);
	
	
	
	
	this.background.setAttribute('style',`position:absolute;top:0px;left:0px;width:${window.innerWidth}px;height:${window.innerHeight}px;background-color:white;background-color:rgb(0,0,0,0.5);`);
	  this.background.appendChild(setValue);
	  div.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
	onMouseOver="this.style.backgroundColor='rgba(0,41,32,0.1)'" onMouseOut="this.style.backgroundColor='rgba(125,125,125,0)'" onclick="${callbacks[0]}(${id})"
   width="60mm"
   height="25mm"
   viewBox="0 0 60 25"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="SettingsItem.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="0"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="2.0334082"
     inkscape:cx="50.407981"
     inkscape:cy="-2.2130333"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" /><defs
     id="defs1"><rect
       x="13.214296"
       y="9.7368498"
       width="136.62781"
       height="27.819571"
       id="rect3" /><rect
       x="13.909785"
       y="45.90229"
       width="135.06808"
       height="30.397823"
       id="rect2" /></defs><g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"><path
       style="fill:none;stroke:#ffffff;stroke-width:0.264999;stroke-dasharray:1.58999;stroke-dashoffset:0;stroke-opacity:1"
       d="M 2.3421269,22.640559 55.430336,22.770678"
       id="path1" /><path
       style="fill:none;stroke:#ffffff;stroke-width:0.264;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       d="M 55.826867,11.881094 56.849797,12.426284 55.829418,12.968644"
       id="path2"
       sodipodi:nodetypes="ccc" /><text
       xml:space="preserve"
       id="text2"
       style="font-size:24px;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect2);fill:none;stroke:none;stroke-width:0.997795;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       transform="matrix(0.26458333,0,0,0.26458333,-1.6915361,-0.13011816)"><tspan
         x="13.910156"
         y="67.739203"
         id="tspan4"><tspan
           style="fill:#ffffff"
            id="changeValue_${this.id}">${this.value}</tspan></tspan></text><text
       xml:space="preserve"
       id="text3"
       style="font-size:21.3333px;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect3);fill:none;stroke:#ffffff;stroke-width:0.997795;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       transform="matrix(0.26458333,0,0,0.26458333,-1.4312998,0)"><tspan
         x="13.214844"
         y="29.146839"
         id="tspan6"><tspan
           style="-inkscape-font-specification:sans-serif;fill:#ffffff;stroke:none"
           id="tspan5">${text}</tspan></tspan></text></g></svg>
`;
	  parent.appendChild(div);
	  
	  
  }
  
  
  showBackground()
  {
	  this.parent.appendChild(this.background);
  }
  
  
  returnValue()
  {
	this.value = document.getElementById('newValue_'+this.id).value;
	  document.getElementById('changeValue_'+this.id).innerHTML = this.value;
	this.parent.removeChild(this.background);
	return {id:this.id,value:this.value};
  }	
  

}

export { SettingsItem };