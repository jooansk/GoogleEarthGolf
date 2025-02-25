class GsProApiEmulator {
  constructor(ip,port,callback,shotReceived) {
		this.ip = ip;
		this.port = port;
		this.state = 0;
		this.connected = false;
		this.callback = callback;
		this.shotReceived = shotReceived;
		this.timeout;
		this.msgReceived = false;
		this.connect();
		this.lastShotIdReceived = -1;
  }
  
	connect()
	{
		this.msgReceived = false;
		this.ws = new WebSocket(`ws://${this.ip}:${this.port}`);
			
		this.ws.onmessage = (evt) => {
			var received_msg = evt.data;
			var jsonData = JSON.parse(received_msg);
			this.connected = true;
			this.msgReceived = true;
			switch(this.state)
			{
				case 0:
					{
						this.sendAck(202,"Ready");
						this.state++
						break;
					}
					
				case 1:
					{
						//sendAck(202,"Ready");
						break;
					}
				case 2:
					{
						break;
					}
			}
			
			if(this.lastShotIdReceived != jsonData.ShotNumber)
			{
				this.sendAck(200,"Ball Data received");
				if(this.lastShotIdReceived != -1)
				{
					this.shotReceived(jsonData.BallData.Speed,jsonData.BallData.VLA,jsonData.BallData.HLA,jsonData.BallData.BackSpin,jsonData.BallData.SideSpin);		
				}
				this.lastShotIdReceived = jsonData.ShotNumber;				
			}
			
		}
		
		
		this.ws.onclose = (evt) => {
			console.log("Ws comm closed! Trying to reconnect");
			this.connected = false;
			this.connect();
		}
		
		this.ws.onopen = (evt) => {
			this.connected = true;
			this.callback();
			console.log("Connected to bridge wrapper.");
			setTimeout(() => {
				if(!this.msgReceived)
				{
					this.sendAck(202,"Ready");
				}
			},1000);
		}
			
		this.ws.onerror = (evt) => {
			this.connected = false;
			this.ws.close();
		}
	}
  
	sendAck(code,message)
	{
		if(this.connected)
		{
			this.ws.send("{\"Code\": "+code+",\"Message\":\""+message+"\"}");
		}
		else
		{
			console.warn("Bridge wrapper (Python script?) is not running..");
		}
	}

	sendPlayer(handed,club,distance)
	{
		if(this.connected)
		{
			this.ws.send(`{
				"Code": 201,
				"Message": "GSPro Player Information",
				"Player": {
					"Handed": "${handed}",
					"Club": "${club}",
					"DistanceToTarget":${distance},
				}
			}`);
		}
		else
		{
			console.warn("Bridge wrapper (Python script?) is not running..");
		}
	}
 }
 
 
export { GsProApiEmulator };