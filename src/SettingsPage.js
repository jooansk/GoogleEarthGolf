import { SettingsItem } from '/src/SettingsItem.js';
import { SettingsButton } from '/src/SettingsButton.js';

class SettingsPage {
  constructor(callbacks) {
	 this.name = "golfSettings";
	var mySettings = localStorage.getItem(this.name);
	if(!mySettings)
	{
		mySettings = {clubs:[{name:'DR',distance:300},{name:'3W',distance:265},{name:'5W',distance:245},{name:'I3',distance:235},{name:'I4',distance:225},{name:'I5',distance:215},{name:'I6',distance:195},{name:'I7',distance:180},{name:'I8',distance:165},{name:'I9',distance:150},{name:'PW',distance:135},{name:'50',distance:120},{name:'SW',distance:105},{name:'LW',distance:90}],speed:'mph',distance:'meters',key:'-',assetId:'-'};
		localStorage.setItem(this.name,JSON.stringify(mySettings));
	}
	else
	{
		mySettings = JSON.parse(mySettings);
		console.log(mySettings);
	}
	
	this.settings = mySettings;
	  
	var div = document.createElement('div');
	div.setAttribute('style',`position:absolute;top:0px;left:0px;width:${window.innerWidth}px;height:${window.innerHeight}px;background-color:white;border-width:10px;border:solid;border-color:#002920;background-image:url(BackgorundImage.png);`);
	
	var div1 = document.createElement('div');
	div1.setAttribute('style',`position:absolute;top:${window.innerHeight*2/5}px;left:150px;width:${window.innerWidth/6}px;height:${window.innerWidth/6}px;background-image:url(Preferences_256.png);background-repeat: no-repeat;background-size:100% 100%;`);
	
	var h1 = document.createElement('h1');
	
	h1.innerHTML = 'Settings';
	h1.setAttribute('style',`position:absolute;top:200px;left:170px;font-family:ABBvoice;color:white;font-size:55px;`);
	
	div.appendChild(h1);
	
	
	
	div.appendChild(div1);
	document.body.appendChild(div);
	this.div = div;
	this.div1 = div1;
	
	var callbacks = callbacks;
	this.items = [];
	this.items.push(new SettingsItem('top','left',550,200,this.div,'Distance unit',mySettings.distance,callbacks,this.items.length,["meters","yards"]));
	this.items.push(new SettingsItem('top','left',550,300,this.div,'Speed unit',mySettings.speed,callbacks,this.items.length,["mph"]));
	this.items.push(new SettingsItem('top','left',550,400,this.div,'Cesium auth key',mySettings.key,callbacks,this.items.length));
	this.items.push(new SettingsItem('top','left',550,500,this.div,'Asset id',mySettings.assetId,callbacks,this.items.length));
	this.items.push(new SettingsButton('bottom','right',200,100,this.div,'Select course',callbacks[2],this.items.length));
	
  }
  
  resize()
  {
	this.div.setAttribute('style',`position:absolute;top:0px;left:0px;width:${window.innerWidth}px;height:${window.innerHeight}px;background-color:white;border-width:10px;border:solid;border-color:#002920;background-image:url(BackgorundImage.png);`);
	this.div1.setAttribute('style',`position:absolute;top:${window.innerHeight*2/5}px;left:150px;width:${window.innerWidth/6}px;height:${window.innerWidth/6}px;background-image:url(Preferences_256.png);background-repeat: no-repeat;background-size:100% 100%;`);
  }
  
  
  getSettings()
  {
	  return this.settings;
  }
  
  open(id)
  {
	  console.log(id);
	  this.items[id].showBackground();
  }
  
  close(id)
  {
	  var value = this.items[id].returnValue();
	  switch(value.id)
	  {
		  case 0:
			this.settings.distance = value.value;
			break;
		case 1:
			this.settings.speed = value.value;
			break;
		case 2:
			this.settings.key = value.value;
			break;
		case 3:
			this.settings.assetId = value.value;
			break;
	  }
	  localStorage.setItem(this.name,JSON.stringify(this.settings));
  }
  
  buttonClick(id)
  {
	  if(this.items[id].buttonClick())
	  {
		  document.body.removeChild(this.div);
		  return true;
	  }
	  else
	  {
		  return false;
	  }
  }
  
}


export { SettingsPage };