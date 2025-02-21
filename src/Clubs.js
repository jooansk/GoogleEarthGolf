class Clubs {
  constructor(name,id,x,y,callback,setCallback) {
    this.id = id;
    this.nameValue = name;
	this.x = x;
	this.y = y;
	this.callback = callback;
	this.setCallback = setCallback;
	var div = document.createElement('div')
	div.setAttribute('style',`position:absolute;top:${y}px;left:${x}px;width:${40}px;height:${25}px`);
	div.setAttribute('id',`myClubs`);
	div.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="40mm"
   height="25mm"
   viewBox="0 0 40 24.999999"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="Clubs.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="false"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="1.4378367"
     inkscape:cx="133.1862"
     inkscape:cy="232.64116"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer14" /><defs
     id="defs1"><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4" /><rect
       x="78.590286"
       y="18.77821"
       width="56.334633"
       height="54.248161"
       id="rect3" /><rect
       x="78.938034"
       y="19.4737"
       width="53.900417"
       height="54.943653"
       id="rect2" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-1" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-9" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-8" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-9" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-4" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-96" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-96-5" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-96-1" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-96-6" /></defs><g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1" /><g
     inkscape:groupmode="layer"
     id="layer2"
     inkscape:label="Layer 2" /><g
     inkscape:groupmode="layer"
     id="layer3"
     inkscape:label="Layer 3" /><g
     inkscape:groupmode="layer"
     id="layer4"
     inkscape:label="Layer 4" /><g
     inkscape:groupmode="layer"
     id="layer5"
     inkscape:label="Layer 5"
     transform="translate(-9.260417,107.65841)" /><g
     inkscape:groupmode="layer"
     id="layer6"
     inkscape:label="Layer 6"
     transform="translate(-8.8924161,30.562502)" /><g
     inkscape:groupmode="layer"
     id="layer7"
     inkscape:label="Layer 7"
     transform="translate(-9.260417,56.062502)" /><g
     inkscape:groupmode="layer"
     id="layer8"
     inkscape:label="Layer 8"
     transform="translate(-9.260417,81.851411)" /><g
     inkscape:groupmode="layer"
     id="layer9"
     inkscape:label="Layer 9"
     transform="translate(90.222918,13.916322)" /><g
     inkscape:groupmode="layer"
     id="layer10"
     inkscape:label="Layer 10"
     transform="translate(90.222918,39.331322)" /><g
     inkscape:groupmode="layer"
     id="layer11"
     inkscape:label="Layer 11"
     transform="translate(90.222918,64.831322)" /><g
     inkscape:groupmode="layer"
     id="layer12"
     inkscape:label="Layer 12"
     transform="translate(57.15,-25.000003)" /><g
     inkscape:groupmode="layer"
     id="layer13"
     inkscape:label="Layer 13"
     transform="translate(57.15,-50.538003)" /><g
     inkscape:groupmode="layer"
     id="layer14"
     inkscape:label="Layer 14"
     transform="translate(57.15,-76.200003)" onclick="${this.callback}()"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1-7-1"
       width="39.022999"
       height="24.023449"
       x="-56.661724"
       y="76.688278"
       onmouseover="" /><image
       width="15"
       height="12.766837"
       preserveAspectRatio="none"
       xlink:href="public/W_s2.png"
       id="image1-1-6-9-2-8-6"
       x="-54.498692"
       y="79.948944" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-53.285689,78.684204)"
       id="text3-4-8-2-3-8-5"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan1">Dr</tspan></text></g></svg>`;


	document.body.appendChild(div);
  }

	showClubs()
	{
		var div = document.getElementById('myClubs');
		div.setAttribute('style',`position:absolute;top:${this.y-7*82.5}px;left:${this.x}px;width:${40}px;height:${25}px`);
		div.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg style="background-color:rgb(0,49,32);"
   width="80.367996mm"
   height="178.69099mm"
   viewBox="0 0 80.367996 178.69099"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="Clubs.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
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
     inkscape:zoom="1.0167041"
     inkscape:cx="143.10949"
     inkscape:cy="302.44789"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer14" /><defs
     id="defs1"><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4" /><rect
       x="78.590286"
       y="18.77821"
       width="56.334633"
       height="54.248161"
       id="rect3" /><rect
       x="78.938034"
       y="19.4737"
       width="53.900417"
       height="54.943653"
       id="rect2" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-1" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-9" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-8" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-9" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-4" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-96" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-96-5" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-96-1" /><rect
       x="72.330887"
       y="21.212423"
       width="79.285774"
       height="54.595909"
       id="rect4-2-2-6-4-96-6" /></defs><g onclick="${this.setCallback}('I3')"
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1"
       width="39.023449"
       height="24.023449"
       x="0.4882755"
       y="77.679443" /><image
       width="8.2020836"
       height="20.637501"
       preserveAspectRatio="none"
       xlink:href="public/I3_s.png"
       id="image1"
       x="4.3074436"
       y="79.283966" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-2.7602241,79.491355)"
       id="text3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4);fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan3">3 iron</tspan></text></g><g  onclick="${this.setCallback}('I4')"
     inkscape:groupmode="layer"
     id="layer2"
     inkscape:label="Layer 2"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6"
       width="39.023449"
       height="24.023449"
       x="0.4882755"
       y="103.26446" /><image
       width="8.2020836"
       height="20.778612"
       preserveAspectRatio="none"
       xlink:href="public/I4_s.png"
       id="image1-1"
       x="4.3074436"
       y="104.86898" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-2.7602241,105.07637)"
       id="text3-4"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan4">4 iron</tspan></text></g><g onclick="${this.setCallback}('I5')"
     inkscape:groupmode="layer"
     id="layer3"
     inkscape:label="Layer 3"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1"
       width="39.023449"
       height="24.023449"
       x="0.4882755"
       y="128.67943" /><image
       width="8.2020836"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I5_s.png"
       id="image1-1-6"
       x="4.3074436"
       y="130.28395" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-2.7602241,130.49136)"
       id="text3-4-8"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan5">5 iron</tspan></text></g><g onclick="${this.setCallback}('I6')"
     inkscape:groupmode="layer"
     id="layer4"
     inkscape:label="Layer 4"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8"
       width="39.023449"
       height="24.023449"
       x="0.4882755"
       y="154.17943" /><image
       width="8.6991796"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I6_s.png"
       id="image1-1-6-9"
       x="4.3074436"
       y="155.78395" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-2.7602241,155.99136)"
       id="text3-4-8-2"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan6">6 iron</tspan></text></g><g onclick="${this.setCallback}('PW')"
     inkscape:groupmode="layer"
     id="layer5"
     inkscape:label="Layer 5"
     transform="translate(-9.260417,107.65841)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1"
       width="39.023418"
       height="24.023449"
       x="50.116722"
       y="-29.979136" /><image
       width="11.878128"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I10_s.png"
       id="image1-1-6-9-2"
       x="53.199825"
       y="-28.374613" /><text
       xml:space="preserve"
       transform="matrix(0.26458313,0,0,0.26458333,49.812456,-28.167219)"
       id="text3-4-8-2-3"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan7">PW</tspan></text></g><g onclick="${this.setCallback}('I7')"
     inkscape:groupmode="layer"
     id="layer6"
     inkscape:label="Layer 6"
     transform="translate(-8.8924161,30.562502)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-8"
       width="39.023418"
       height="24.023449"
       x="49.748692"
       y="-30.074226" /><image
       width="9.3267565"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I7_s.png"
       id="image1-1-6-9-7"
       x="53.567848"
       y="-28.469704" /><text
       xml:space="preserve"
       transform="matrix(0.26458313,0,0,0.26458333,46.500194,-28.262294)"
       id="text3-4-8-2-4"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-1);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan8">7 iron</tspan></text></g><g onclick="${this.setCallback}('I8')"
     inkscape:groupmode="layer"
     id="layer7"
     inkscape:label="Layer 7"
     transform="translate(-9.260417,56.062502)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-19"
       width="39.023418"
       height="24.023449"
       x="50.116722"
       y="-29.979136" /><image
       width="10.181254"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I8_s.png"
       id="image1-1-6-9-8"
       x="53.935879"
       y="-28.374613" /><text
       xml:space="preserve"
       transform="matrix(0.26458313,0,0,0.26458333,46.868221,-28.167219)"
       id="text3-4-8-2-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-9);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan9">8 iron</tspan></text></g><g onclick="${this.setCallback}('I9')"
     inkscape:groupmode="layer"
     id="layer8"
     inkscape:label="Layer 8"
     transform="translate(-9.260417,81.851411)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-0"
       width="39.023418"
       height="24.023449"
       x="50.116722"
       y="-29.979136" /><image
       width="11.150897"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I9_s.png"
       id="image1-1-6-9-24"
       x="52.831795"
       y="-28.374613" /><text
       xml:space="preserve"
       transform="matrix(0.26458313,0,0,0.26458333,46.868221,-28.167219)"
       id="text3-4-8-2-8"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-8);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan10">9 iron</tspan></text></g><g onclick="${this.setCallback}('50')"
     inkscape:groupmode="layer"
     id="layer9"
     inkscape:label="Layer 9"
     transform="translate(90.222918,13.916322)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1-0"
       width="39.023418"
       height="24.023449"
       x="-49.366615"
       y="89.347954" /><image
       width="11.878128"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I10_s.png"
       id="image1-1-6-9-2-6"
       x="-46.283508"
       y="90.952484" /><text
       xml:space="preserve"
       transform="matrix(0.26458313,0,0,0.26458333,-49.670878,91.159868)"
       id="text3-4-8-2-3-1"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-9);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan11">50</tspan></text></g><g onclick="${this.setCallback}('SW')"
     inkscape:groupmode="layer"
     id="layer10"
     inkscape:label="Layer 10"
     transform="translate(90.222918,39.331322)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1-6"
       width="39.023418"
       height="24.023449"
       x="-49.366615"
       y="89.347954" /><image
       width="11.878128"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I10_s.png"
       id="image1-1-6-9-2-0"
       x="-46.283508"
       y="90.952484" /><text
       xml:space="preserve"
       transform="matrix(0.26458313,0,0,0.26458333,-49.670878,91.159868)"
       id="text3-4-8-2-3-6"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-4);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan12">SW</tspan></text></g><g onclick="${this.setCallback}('LW')"
     inkscape:groupmode="layer"
     id="layer11"
     inkscape:label="Layer 11"
     transform="translate(90.222918,64.831322)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1-7"
       width="39.023418"
       height="24.023449"
       x="-49.366615"
       y="89.347954" /><image
       width="11.878128"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I10_s.png"
       id="image1-1-6-9-2-8"
       x="-46.283508"
       y="90.952484" /><text
       xml:space="preserve"
       transform="matrix(0.26458313,0,0,0.26458333,-49.670878,91.159868)"
       id="text3-4-8-2-3-8"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan13">LW</tspan></text></g><g onclick="${this.setCallback}('5W')"
     inkscape:groupmode="layer"
     id="layer12"
     inkscape:label="Layer 12"
     transform="translate(57.15,-25.000003)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1-7-8"
       width="39.023449"
       height="24.023449"
       x="-56.661724"
       y="76.872292" /><image
       width="11.503717"
       height="6.8783607"
       preserveAspectRatio="none"
       xlink:href="public/W_s2.png"
       id="image1-1-6-9-2-8-4"
       x="-51.002407"
       y="84.73333" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-56.965987,78.500189)"
       id="text3-4-8-2-3-8-0"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-5);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan14">5W</tspan></text></g><g onclick="${this.setCallback}('3W')"
     inkscape:groupmode="layer"
     id="layer13"
     inkscape:label="Layer 13"
     transform="translate(57.15,-50.538003)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1-7-4"
       width="39.023449"
       height="24.023449"
       x="-56.661724"
       y="76.688278" /><image
       width="15"
       height="7.5165281"
       preserveAspectRatio="none"
       xlink:href="public/W_s2_D.png"
       id="image1-1-6-9-2-8-2"
       x="-53.946648"
       y="84.365303" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-56.965987,78.500189)"
       id="text3-4-8-2-3-8-09"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-1);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan15">3W</tspan></text></g><g onclick="${this.setCallback}('DR')"
     inkscape:groupmode="layer"
     id="layer14"
     inkscape:label="Layer 14"
     transform="translate(57.15,-76.200003)" onclick="clubSetFunction"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1-7-1"
       width="39.022999"
       height="24.023449"
       x="-56.661724"
       y="76.688278"
       onmouseover="" /><image
       width="15"
       height="12.766837"
       preserveAspectRatio="none"
       xlink:href="public/W_s2.png"
       id="image1-1-6-9-2-8-6"
       x="-54.498692"
       y="79.948944" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-56.965987,78.500189)"
       id="text3-4-8-2-3-8-5"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan16">Dr</tspan></text></g></svg>
`;
	}
	
	setClub(club)
	{
		var div = document.getElementById('myClubs');
		div.setAttribute('style',`position:absolute;top:${this.y}px;left:${this.x}px;width:${40}px;height:${25}px`);
		var tempStr = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!-- Created with Inkscape (http://www.inkscape.org/) -->

<svg
   width="40mm"
   height="25mm"
   viewBox="0 0 40 24.999999"
   version="1.1"
   id="svg1"
   xml:space="preserve"
   inkscape:version="1.4 (86a8ad7, 2024-10-11)"
   sodipodi:docname="Clubs.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:xlink="http://www.w3.org/1999/xlink"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><sodipodi:namedview
     id="namedview1"
     pagecolor="#ffffff"
     bordercolor="#000000"
     borderopacity="0.25"
     inkscape:showpageshadow="2"
     inkscape:pageopacity="0.0"
     inkscape:pagecheckerboard="false"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     inkscape:zoom="1.4378367"
     inkscape:cx="133.1862"
     inkscape:cy="232.64116"
     inkscape:window-width="1920"
     inkscape:window-height="1009"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer14" /><g onclick="${this.callback}()"
     inkscape:groupmode="layer"
     id="layer14"
     inkscape:label="Layer 14"
     transform="translate(57.15,-76.200003)"><rect
       style="fill:#002920;fill-opacity:0.75;stroke:#000000;stroke-width:0.976551;stroke-dasharray:none"
       id="rect1-6-1-8-1-7-1"
       width="39.022999"
       height="24.023449"
       x="-56.661724"
       y="76.688278"
       onmouseover="" />`;
		switch(club)
		{
			case 'DR':
			{
				tempStr += `<image
					   width="15"
					   height="12.766837"
					   preserveAspectRatio="none" xlink:href="public/W_s2.png" id="image1-1-6-9-2-8-6"
					   x="-54.498692"
					   y="79.948944" /><text
					   xml:space="preserve"
					   transform="matrix(0.26458333,0,0,0.26458333,-53.285689,78.684204)"
					   id="text3-4-8-2-3-8-5"
					   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
						 x="72.330078"
						 y="45.970196"
						 id="tspan1">Dr</tspan></text></g></svg>`;
				break;
			}
			case '3W':
			{
				tempStr += `<image
					   width="15"
					   height="7.5165281"
					   preserveAspectRatio="none"
					   xlink:href="public/W_s2_D.png"
					   x="-54.498692"
					   y="84.948944" /><text
					   xml:space="preserve"
					   transform="matrix(0.26458333,0,0,0.26458333,-53.285689,78.684204)"
					   id="text3-4-8-2-3-8-5"
					   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
						 x="72.330078"
						 y="45.970196"
						 id="tspan1">3W</tspan></text></g></svg>`;
				break;
			}
			case '5W':
			{
				tempStr += `<image
       width="11.503717"
       height="6.8783607"
       preserveAspectRatio="none"
       xlink:href="public/W_s2.png"
       id="image1-1-6-9-2-8-4"
       x="-51.002407"
       y="84.73333" /><text
       xml:space="preserve"
       transform="matrix(0.26458333,0,0,0.26458333,-56.965987,78.500189)"
       id="text3-4-8-2-3-8-0"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-5);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
         x="72.330078"
         y="45.970196"
         id="tspan14">5W</tspan></text></g></svg>`;
				break;
			}
			
			case 'PW':
			{
				tempStr += `<image
       width="11.878128"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I10_s.png"
       x="-53.498692"
		y="79.948944"
       
        /><text
	   xml:space="preserve"
	   transform="matrix(0.26458333,0,0,0.26458333,-53.285689,78.684204)"
	   id="text3-4-8-2-3-8-5"
	   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
		x="59.330078"
		 y="48.970196"
         id="tspan7">PW</tspan></text></g>`;
				break;
			}
			
			case '50':
			{
				tempStr += `<image
       width="11.878128"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I10_s.png"
      x="-53.498692"
		y="79.948944"
       
        /><text
	   xml:space="preserve"
	   transform="matrix(0.26458333,0,0,0.26458333,-53.285689,78.684204)"
	   id="text3-4-8-2-3-8-5"
	   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
		 x="59.330078"
		 y="48.970196"
         id="tspan11">50</tspan></text></g>`;
				break;
			}
			case 'SW':
			{
				tempStr += `<image
       width="11.878128"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I10_s.png"
       x="-53.498692"
		y="79.948944"
       
        /><text
	   xml:space="preserve"
	   transform="matrix(0.26458333,0,0,0.26458333,-53.285689,78.684204)"
	   id="text3-4-8-2-3-8-5"
	   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
		 x="59.330078"
		 y="48.970196"
         id="tspan11">SW</tspan></text></g>`;
				break;
			}
			case 'LW':
			{
				tempStr += `<image
       width="11.878128"
       height="19.63529"
       preserveAspectRatio="none"
       xlink:href="public/I10_s.png"
       x="-53.498692"
		y="79.948944"
       
        /><text
	   xml:space="preserve"
	   transform="matrix(0.26458333,0,0,0.26458333,-53.285689,78.684204)"
	   id="text3-4-8-2-3-8-5"
	   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
		x="59.330078"
		 y="48.970196"
         id="tspan11">LW</tspan></text></g>`;
				break;
			}
			
			default:
			{
				tempStr += `<image
      width="9.3267565"
       height="17.63529"
       preserveAspectRatio="none"
       xlink:href="public/${club}_s.png"
	  x="-53.498692"
		y="79.948944"
       
        /><text
	   xml:space="preserve"
	   transform="matrix(0.26458333,0,0,0.26458333,-53.285689,78.684204)"
	   id="text3-4-8-2-3-8-5"
	   style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:29.3333px;font-family:ABBvoice;-inkscape-font-specification:ABBvoice;text-align:start;writing-mode:lr-tb;direction:ltr;white-space:pre;shape-inside:url(#rect4-2-2-6-4-96-6);display:inline;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:3.77953;stroke-dasharray:none;stroke-opacity:1"><tspan
		 x="49.330078"
		 y="48.970196"
		 id="tspan1">${club.at(1)} iron</tspan></text></g></svg>`;
		 break;
			}
		}
		div.innerHTML = tempStr;
	}

	

}

export { Clubs };
