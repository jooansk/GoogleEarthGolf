class Minimap {
  constructor(width,height,offsetX,offsetY,background) {
		this.width = width;
		this.height = height;
		this.offsetY = offsetY;
		this.offsetX = offsetX;
		this.background = background
		var div = document.createElement('div')
		
		
		div.setAttribute('style',`position:absolute;top:${window.innerHeight-this.height-offsetY}px;left:${window.innerWidth-this.width-offsetX}px;width:${this.width}px;height:${this.height}px;background-color:white;border-width:10px;border:solid;background-image:url("${background}");`);
		div.setAttribute('id',`myMinimap`);
		
		document.body.appendChild(div);
		this.div = div;
	}
	
	update(x,y,width,height)
	{
		this.div.setAttribute('style',`position:absolute;top:${window.innerHeight-this.height-this.offsetY}px;left:${window.innerWidth-this.width-this.offsetX}px;width:${this.width}px;height:${this.height}px;background-color:white;border-width:10px;border:solid;background-image:url("${this.background}");background-position:${x*10}px ${y*10}px;background-size: ${width*10}px ${height*10}px`);
	}
}

export { Minimap };