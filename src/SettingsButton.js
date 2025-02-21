class SettingsButton {
  constructor(top,left,x,y,parent,text,callback,id) {

	var div = document.createElement('div');
	div.setAttribute('style',`position:absolute;${top}:${y}px;${left}:${x}px;width:60px;height:25px;`);
	div.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg onMouseOver="this.style.backgroundColor='rgba(0,41,32,0.1)'" onMouseOut="this.style.backgroundColor='rgba(125,125,125,0)'" onclick="${callback}(${id})"
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
     inkscape:current-layer="svg1" /><defs
     id="defs1"><rect
       x="13.214296"
       y="9.7368498"
       width="176.62781"
       height="27.819571"
       id="rect3" /><rect
       x="13.909785"
       y="45.90229"
       width="175.06808"
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
       style="font-size:24px;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect2);display:inline;fill:none;stroke:none;stroke-width:0.997795;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
       transform="matrix(0.26458333,0,0,0.26458333,2.0818906,-3.7734267)"><tspan
         x="13.910156"
         y="67.739203"
         id="tspan3"><tspan
           style="fill:#ffffff"
           id="tspan1">${text}</tspan></tspan></text></g></svg>
`;

	parent.appendChild(div);

  }
  
  
  buttonClick()
  {
	  return true;
  }
  
}

export { SettingsButton };