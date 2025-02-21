class DataTile {
  constructor(name,id,x,y) {
    this.id = id;
    this.nameValue = name;
    this.name = 'datatile';
	var div = document.createElement('div')
	div.setAttribute('style',`position:absolute;top:${y}px;left:${x}px;width:${40}px;height:${25}px`);
	div.setAttribute('id',`tile_${id}`);
	div.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
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
       inkscape:label="itemText">${this.nameValue}</text>
    <text
       xml:space="preserve"
       transform="matrix(0.26311949,0,0,0.26460944,-2.2683047,3.0416854)"       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:40px;line-height:0.85;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:center;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4);shape-padding:0;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.88976;stroke-miterlimit:14.7;stroke-dasharray:none;stroke-opacity:1"
       inkscape:label="itemValue" dominant-baseline="middle"  text-anchor="middle" x="220%"
       y="90%" id="${this.id}_itemValue">---</text>
  </g>
</svg>
`;
	document.body.appendChild(div);
  }


  setValue(value)
  {
	  document.getElementById(this.id+"_itemValue").innerHTML = value;
  }
}

export { DataTile };
