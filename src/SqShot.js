class SqShot {
  constructor(bs=170,ver_angle=19,hor_angle=-3,backspin=2500,sidespin=-1000) {
		this.points = [];
		this.hangtime = 0; // seconds
		this.carry = 0; // meters
		this.carryArray = [];
		this.Tfar = 70; // (Farenheit)
		this.elevft = 0; //elevation in (ft)
		this.vwind = 0; // (mph) 

		/*Alan M. Nathan:
		angle of wind wrt the y axis (runs from -180 to +180)
		0 => out to CF
		45 => out to RF pole
		-45 => out to LF pole
		180 => in from CF
		*/

		this.phiwind = 0; //
		this.hwind = 0; // (ft)
		
		this.newShot(bs,ver_angle,hor_angle,backspin,sidespin);

	}
	
	updateParameters(F_temp,elevft,vwind,phiwind,hwind)
	{
		this.Tfar = F_temp;
		this.elevft = elevft;
		this.vwind = vwind;
		this.phiwind = phiwind;
		this.hwind = hwind;
	}
	
	newShot(bs,ver_angle,hor_angle,backspin,sidespin) {
		this.points = [];
		this.hangtime = 0; // seconds
		this.carry = 0; // meters
		this.carryArray = [];
		// trajectory calculated from this excel file
		// https://baseball.physics.illinois.edu/trajectory-calculator-golf.html
		// have fun


		// CONSTANTS
		/*
		Drag and Lift Model:
		Cd=CdL for Re<=0.5e5
		Cd=CdL+(CdL-CdH)*(Re*1e-5-1)/0.5 for Re>0.5 and Re<1.0
		Cd=CdH for Re>=1.0e5

		Cl=coeff1*S+coeff2*S^2 for S<=0.3 and =0.305 for S>0.3
		S=radius*spin/v
		*/
		var CdS = 0.18;
		var CdL = 0.5;
		var CdH = 0.2;
		var coeff1 = 1.99;
		var coeff2 = -3.25;

		var mass = 1.62; // (oz)
		var circ = 5.277; // (inch)

		var x0 = 0;
		var y0 = 0;
		var z0 = 0;
		var ballspeed = bs;
		var theta = ver_angle; // vla (angle)
		var phi = hor_angle; // hla (angle)
		var wb = backspin; // (rpm)
		var ws = sidespin; // (rpm)
		var dt = 0.01; 

		
		var RH = 50;
		var barometriPressureInHg = 29.92; //(Hg)


		var PI = function(){return Math.PI};
		var EXP = Math.exp;
		var COS = Math.cos;
		var SIN = Math.sin;
		var SQRT = Math.sqrt;
		var ATAN2 = Math.atan2;
		var beta = 0.0001217;
		var v0 = ballspeed*1.467;
		var v0x = 1.467*ballspeed*COS(theta*PI()/180)*SIN(phi*PI()/180);
		var v0y = 1.467*ballspeed*COS(theta*PI()/180)*COS(phi*PI()/180);
		var v0z = 1.467*ballspeed*SIN(theta*PI()/180);
		var wx = (wb*COS(phi*PI()/180)-ws*SIN(theta*PI()/180)*SIN(phi*PI()/180))*PI()/30;
		var wy = (-wb*SIN(phi*PI()/180)-ws*SIN(theta*PI()/180)*COS(phi*PI()/180))*PI()/30;
		var wz = (ws*COS(theta*PI()/180))*PI()/30;
		var omega = SQRT(wb**2+ws**2)*PI()/30;
		var romega = (circ/2/PI())*omega/12;
		var temp = (5/9)*(this.Tfar-32);
		var elev = this.elevft/3.2808;
		var vxw = this.vwind*1.467*SIN(this.phiwind*PI()/180);
		var vyw = this.vwind*1.467*COS(this.phiwind*PI()/180);
		var SVP = 4.5841*EXP((18.687-temp/234.5)*temp/(257.14+temp));
		var barometricPressure  = barometriPressureInHg*1000/39.37;
		var rho_kgs = 1.2929*(273/(temp+273)*(barometricPressure*Math.exp(-beta*elev)-0.3783*RH*SVP/100)/760);
		var rho_lbs = rho_kgs*0.06261;
		var Re_100 = rho_kgs*44.7*(circ/(PI()*39.37))*(temp+273.16+120)/(0.000001512*(temp+273.16)**1.5);
		var c0 = 0.07182*rho_lbs*(5.125/mass)*(circ/9.125)**2;
		var _const = c0;


		//simulation time 
		var t = 0.01;
		var x = x0;
		var y = y0;
		var z = z0;
		var r = SQRT(x**2+y**2)/3;
		var vx = v0x;
		var vy = v0y;
		var vz = v0z;
		var v = SQRT(vx**2+vy**2+vz**2);
		var vmph = v/1.467;
		var tau = 1/(0.00002*v/(circ/(2*PI()*12)));
		var rw = romega*EXP(-t/tau);
		var w_perp = 0;
		var vw = z>=this.hwind ? SQRT((vx-vxw)**2+(vy-vyw)**2+vz**2) : v;
		var vwmph = vw/1.467;
		var Rexe_5 = (vwmph/100)*Re_100*0.00001;

		var S = (rw/vw);
		var Cd = (Rexe_5<=CdL ? 0.5 : Rexe_5<1 ? CdL-(CdL-CdH)*(Rexe_5-0.5)/0.5 : CdH)+CdS*S;

		var Cl = (S <=0.3 ? coeff1*S+coeff2*S**2 : 0.305);
		var vxw = (z>=this.hwind ? vxw : 0);
		var vyw = (z>=this.hwind ? vyw : 0); 
		var adragx = -_const*Cd*vw*(vx-vxw);
		var adragy = -_const*Cd*vw*(vy-vyw);
		var adragz = -_const*Cd*vw*vz;
		var w_perp = 1;
		var aMagx = _const*(Cl/omega)*vw*(wy*vz-wz*(vy-vyw))/w_perp;
		var aMagy = _const*(Cl/omega)*vw*(wz*(vx-vxw)-wx*vz)/w_perp; 
		var aMagz = _const*(Cl/omega)*vw*(wx*(vy-vyw)-wy*(vx-vxw))/w_perp;
		var ax = adragx+aMagx;
		var ay = adragy+aMagy;
		var az = adragz+aMagz-32.174;

		var iterations = 0;
		while(iterations < 1500)
		{
			x += vx*dt+0.5*ax*dt**2;
			y += vy*dt+0.5*ay*dt**2;
			z += vz*dt+0.5*az*dt**2;

			r = SQRT(x**2+y**2)/3;
			this.carryArray.push(r);
			//phi = ATAN2(y,x)*180/PI();
			vx += ax*dt;
			vy += ay*dt;
			vz += az*dt;
			v = SQRT(vx**2+vy**2+vz**2);
			vmph = v/1.467;
			tau = 1/(0.00002*v/(circ/(2*PI()*12)));
			rw = romega*EXP(-t/tau);
			vw = z>=this.hwind ? SQRT((vx-vxw)**2+(vy-vyw)**2+vz**2) : v;
			vwmph = vw/1.467;
			Rexe_5 = (vwmph/100)*Re_100*0.00001;
			S = (rw/vw);
			Cd = (Rexe_5<=CdL ? 0.5 : Rexe_5<1 ? CdL-(CdL-CdH)*(Rexe_5-0.5)/0.5 : CdH)+CdS*S;
			Cl = (S <=0.3 ? coeff1*S+coeff2*S**2 : 0.305);

			vxw = (z>=this.hwind ? vxw : 0);
			vyw = (z>=this.hwind ? vyw : 0); 
			adragx = -_const*Cd*vw*(vx-vxw);
			adragy = -_const*Cd*vw*(vy-vyw);
			adragz = -_const*Cd*vw*vz;
			w_perp = 1;
			aMagx = _const*(Cl/omega)*vw*(wy*vz-wz*(vy-vyw))/w_perp;
			aMagy = _const*(Cl/omega)*vw*(wz*(vx-vxw)-wx*vz)/w_perp; 
			aMagz = _const*(Cl/omega)*vw*(wx*(vy-vyw)-wy*(vx-vxw))/w_perp;
			ax = adragx+aMagx;
			ay = adragy+aMagy;
			az = adragz+aMagz-32.174;

			iterations++;

			// convert feet to meter
			this.points.push({x:x*0.3048,y:y*0.3048,z:z*0.3048});

		}

		this.hangtime = iterations*0.01; 
		this.carry = 0.9144*r; // meters
		//console.log("Carry distance: " + parseFloat(r).toFixed(2) + " yards hangtime: " + iterations*0.01 + " s");
	}
}

export { SqShot };
