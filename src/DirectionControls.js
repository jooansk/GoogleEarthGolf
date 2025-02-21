class DirectionControls {
  constructor(top,left,x,y,text,callback,id) {

	var div = document.createElement('div');
	div.setAttribute('style',`position:absolute;${top}:${y}px;${left}:${x}px;width:60px;height:25px;`);
	div.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="15mm"
   height="40mm"
   viewBox="0 0 15 40"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="arrow.svg"
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
     inkscape:zoom="1.8855977"
     inkscape:cx="-36.328005"
     inkscape:cy="115.87838"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.278864;stroke-opacity:1"
       d="M 14.859801,39.616266 V 0.41828183 L 0.17423166,19.998212 Z"
       id="path1"
       sodipodi:nodetypes="cccc" />
  </g>
</svg>`;

	document.body.appendChild(div);
	
	
	var div1 = document.createElement('div');
	div1.setAttribute('style',`position:absolute;${top}:${y}px;left:${window.innerWidth-100}px;width:60px;height:25px;`);
	div1.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="15mm"
   height="40mm"
   viewBox="0 0 15 40"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="arrow.svg"
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
     inkscape:zoom="1.8855977"
     inkscape:cx="-36.328005"
     inkscape:cy="115.87838"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.278864;stroke-opacity:1"
       d=" M 0 0 L 0,39.616266 V 14.41828183 L 0.17423166,19.998212 Z"
       id="path1"
       sodipodi:nodetypes="cccc" />
  </g>
</svg>`;


	document.body.appendChild(div1);
	

  }
  
  
  buttonClick()
  {
	  return true;
  }
  
}

export { DirectionControls };
