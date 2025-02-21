class HoleSelection {
  constructor(x,y,callback,highlight) {
		var div = document.createElement('div')
		
		this.highlight = highlight;
		div.setAttribute('style',`position:absolute;top:${y}px;left:${x}px;width:25px;height:25px`);
		div.setAttribute('id',`myHoleSelection`);
		
		div.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="274.577mm"
   height="15mm"
   viewBox="0 0 274.57699 15"
   version="1.1"
   id="svg1"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="holeSelection.svg"
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
     inkscape:zoom="0.50835204"
     inkscape:cx="376.70745"
     inkscape:cy="152.45341"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs1">
    <rect
       x="10.819274"
       y="0.73767775"
       width="44.752453"
       height="54.588154"
       id="rect4" />
    <rect
       x="16.22891"
       y="11.065167"
       width="36.14621"
       height="35.16264"
       id="rect3" />
    <rect
       x="22.376226"
       y="12.048737"
       width="35.654427"
       height="38.851028"
       id="rect2" />
  </defs>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(1);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(1)"id="hole_1">
    <rect    style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect1"
       width="13.5273"
       height="14.772025"
       x="0.11398769"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="3.887789"
       y="11.400627"
       id="text5"
       transform="scale(1.0088866,0.99119169)"><tspan
         sodipodi:role="line"
         id="tspan5"
         style="stroke-width:0.262679"
         x="3.887789"
         y="11.400627">1</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(2);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(2)"id="hole_2">
    <rect   style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect6"
       width="13.5273"
       height="14.772025"
       x="14.113988"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="17.764471"
       y="11.400627"
       id="text6"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan6"
         style="stroke-width:0.262679"
         x="17.764471"
         y="11.400627">2</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(3);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(3)"id="hole_3">
    <rect   style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect7"
       width="13.5273"
       height="14.772025"
       x="28.113987"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="31.641153"
       y="11.400627"
       id="text7"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan7"
         style="stroke-width:0.262679"
         x="31.641153"
         y="11.400627">3</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(4);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(4)"id="hole_4">
    <rect    style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect8"
       width="13.5273"
       height="14.772025"
       x="42.142155"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="45.545757"
       y="11.400627"
       id="text8"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan8"
         style="stroke-width:0.262679"
         x="45.545757"
         y="11.400627">4</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(5);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(5)"id="hole_5">
    <rect    style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect9"
       width="13.5273"
       height="14.772025"
       x="56.142155"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="59.42244"
       y="11.400627"
       id="text9"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan9"
         style="stroke-width:0.262679"
         x="59.42244"
         y="11.400627">5</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(6);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(6)"id="hole_6">
    <rect   style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect10"
       width="13.5273"
       height="14.772025"
       x="70.142151"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="73.299126"
       y="11.400627"
       id="text10"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan10"
         style="stroke-width:0.262679"
         x="73.299126"
         y="11.400627">6</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(7);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(7)"id="hole_7">
    <rect    style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect11"
       width="13.5273"
       height="14.772025"
       x="84.208786"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="87.241852"
       y="11.400627"
       id="text11"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan11"
         style="stroke-width:0.262679"
         x="87.241852"
         y="11.400627">7</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(8);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(8)"id="hole_8">
    <rect    style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect12"
       width="13.5273"
       height="14.772025"
       x="98.208786"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="101.11853"
       y="11.400627"
       id="text12"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan12"
         style="stroke-width:0.262679"
         x="101.11853"
         y="11.400627">8</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(9);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(9)"id="hole_9"> 
    <rect     style="stroke:#000000;stroke-width:0.227975;stroke-opacity:1"
       id="rect13"
       width="13.5273"
       height="14.772025"
       x="112.20879"
       y="0.11398769" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="114.99522"
       y="11.400627"
       id="text13"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan13"
         style="stroke-width:0.262679"
         x="114.99522"
         y="11.400627">9</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(10);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(10)"id="hole_10"> 
    <rect    style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect14"
       width="15.900463"
       height="14.752995"
       x="126.24647"
       y="0.12350293" />
    <text 
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="126.56537"
       y="11.400628"
       id="text14"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan14"
         style="stroke-width:0.262679"
         x="126.56537"
         y="11.400628">10</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(11);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(11)"id="hole_11"> 
    <rect   style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect16"
       width="15.900463"
       height="14.752995"
       x="142.8078"
       y="0.12350293" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="143.49672"
       y="11.400628"
       id="text16"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan16"
         style="stroke-width:0.262679"
         x="143.49672"
         y="11.400628">11</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(12);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(12)"id="hole_12"> 
    <rect   style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect17"
       width="15.900463"
       height="14.752995"
       x="159.36914"
       y="0.12350293" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="159.3963"
       y="11.400628"
       id="text17"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan17"
         style="stroke-width:0.262679"
         x="159.3963"
         y="11.400628">12</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(13);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(13)"id="hole_13"> 
    <rect    style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect18"
       width="15.900463"
       height="14.752995"
       x="175.74648"
       y="0.12350293" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="175.62936"
       y="11.400628"
       id="text18"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan18"
         style="stroke-width:0.262679"
         x="175.62936"
         y="11.400628">13</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(14);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(14)" id="hole_14"> 
    <rect  style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect19"
       width="15.900463"
       height="14.752995"
       x="192.3078"
       y="0.12350293" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="192.04483"
       y="11.400628"
       id="text19"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan19"
         style="stroke-width:0.262679"
         x="192.04483"
         y="11.400628">14</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(15);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(15)" id="hole_15"> 
    <rect     style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect20"
       width="15.900463"
       height="14.752995"
       x="208.86914"
       y="0.12350293" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="208.4603"
       y="11.400628"
       id="text20"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan20"
         style="stroke-width:0.262679"
         x="208.4603"
         y="11.400628">15</tspan></text></g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(16);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(16)" id="hole_16"> 
    <rect    style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect21"
       width="15.900463"
       height="14.752995"
       x="225.4305"
       y="0.12350293" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="224.87575"
       y="11.400628"
       id="text21"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan21"
         style="stroke-width:0.262679"
         x="224.87575"
         y="11.400628">16</tspan></text>
		</g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(17);" style="fill:rgba(0,41,32,0.75);" onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(17)"id="hole_17"> 
    <rect style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect22"
       width="15.900463"
       height="14.752995"
       x="241.99182"
       y="0.12350293" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="241.29121"
       y="11.400628"
       id="text22"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan22"
         style="stroke-width:0.262679"
         x="241.29121"
         y="11.400628">17</tspan></text>
		 </g><g onMouseOver="this.style.fill='rgba(125,125,125,0.1)'; ${highlight}(18);" style="fill:rgba(0,41,32,0.75);"  onMouseOut="this.style.fill='rgba(0,41,32,0.75)'" onclick="${callback}(18)" id="hole_18"> 
    <rect 
       style="stroke:#000000;stroke-width:0.247005;stroke-opacity:1"
       id="rect23"
       width="15.900463"
       height="14.752995"
       x="258.55316"
       y="0.12350293" />
    <text
       xml:space="preserve"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:11.8893px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:#ffffff;stroke-width:0.262678;stroke-opacity:1"
       x="257.70667"
       y="11.400628"
       id="text23"
       transform="scale(1.0088866,0.99119168)"><tspan
         sodipodi:role="line"
         id="tspan23"
         style="stroke-width:0.262679"
         x="257.70667"
         y="11.400628">18</tspan></text></g>
  </g>
</svg>
`;
		
		document.body.appendChild(div);
		this.div = div;
	}
	
	update(id)
	{
		for(var i = 1; i <= 18; ++i)
		{
			var group = document.getElementById('hole_'+i);
			group.setAttribute('onmouseover',`this.style.fill='rgba(125,125,125,0.1)'; ${this.highlight}(${i});`);
			group.setAttribute('onmouseout',"this.style.fill='rgba(0,41,32,0.75)'");
			group.setAttribute('style','fill:rgba(0,41,32,0.75');
		}
		var g = document.getElementById('hole_'+id);
		g.style.fill = 'rgba(125,255,125,0.4)'
		g.setAttribute('onmouseover','');
		g.setAttribute('onmouseout','');
	}
}

export { HoleSelection };