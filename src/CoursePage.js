
class CoursePage {
  constructor(courses,callback) {
	 this.callback = callback;
	 var that = this;
	fetch(courses)
		.then(r => r.text())
		.then(text => {
			
			var courseData = JSON.parse(text);
			console.log(courseData);
			
			var div = document.createElement('div');
			div.setAttribute('style',`position:absolute;top:0px;left:0px;width:${window.innerWidth}px;height:${window.innerHeight}px;background-color:white;border-width:10px;border:solid;border-color:#002920;background-image:url(BackgorundImage.png);`);
			
			var div1 = document.createElement('div');
			div1.setAttribute('style',`position:absolute;top:${window.innerHeight*2/5}px;left:150px;width:${window.innerWidth/3.5}px;height:${window.innerWidth/5}px;background-image:url(course.png);background-repeat: no-repeat;background-size:100% 100%;`);
			
			var h1 = document.createElement('h1');
			
			h1.innerHTML = 'Select course';
			h1.setAttribute('style',`position:absolute;top:200px;left:170px;font-family:ABBvoice;color:white;font-size:55px;`);
			
			div.appendChild(h1);
			var mainDiv = document.createElement('div');
			mainDiv.setAttribute('style',`display: grid;row-gap: 20px;position:absolute;top:200px;left:${window.innerWidth/2}px;width:${window.innerWidth/2-100}px;grid-template-columns: auto auto auto;height:600px;`);
			for(var i = 0; i < courseData.courses.length; ++i)
			{
				var tempDiv = document.createElement('div');
				tempDiv.setAttribute('onclick',`${that.callback}("${courseData.courses[i].description}")`);
				var elem = document.createElement("img");
				var header = document.createElement('h3');
				header.setAttribute('style','color:white;');
				header.innerHTML = courseData.courses[i].name;
				elem.setAttribute("src", courseData.courses[i].image);
				elem.setAttribute("alt", courseData.courses[i].name);
				elem.setAttribute('style','height:200;max-width: 200px;');
				tempDiv.setAttribute('width','300');
				tempDiv.setAttribute('height','300');
				tempDiv.setAttribute('style','text-align:center;');
				tempDiv.setAttribute('onMouseOver',"this.style.backgroundColor='rgba(0,41,32,0.1)'");
				tempDiv.setAttribute('onMouseOut',"this.style.backgroundColor='rgba(125,125,125,0)'");
				tempDiv.appendChild(header);
				tempDiv.appendChild(elem);
				mainDiv.appendChild(tempDiv);
			}
			
			
			div.appendChild(mainDiv);
			div.appendChild(div1);
			that.div = div;
			document.body.appendChild(div);
			
			
		})
		.catch(console.error.bind(console));
	
  }
  
  
  remove()
  {
	document.body.removeChild(this.div);
  }
  
}


export { CoursePage };