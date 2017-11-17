// JavaScript Document

function init(data)
	{	
		for (i=0; i<50; i++)
		{
			image[i] = data[i].img;
		}
	
	
		for (i=0; i<50; i++)
		{
			patval[i] = data[i].pattern;
		}
	
	
		for (i=0; i<50; i++)
		{
			colval[i] = data[i].color;
		}
	
		console.log(image);
		var sliderVal=50;
		sliderVal = sliderVal/100;
	
		var p = 0;
		var temp = [];
		var disp = []; 
	
	
		for(i=1; i < image.length; i++)
		{
			val = patval[i]*sliderVal + colval[i]*(1-sliderVal);
			console.log(val);
			if (val < sliderVal+0.4 && val > sliderVal-0.4)
  				{
				temp.push(i);//put all the values that fit the expression in this variable
				}
		}
		console.log(temp);
		//loop through the array to get image filenames and change them.
		for(i = 0; i < temp.length; i++)
		{		
			p = temp[i];
			disp.push(image[p]);
			concan = 'img'+i;
			document.getElementById(concan).src = 'img/' + disp[i];
			
			if (concan=='img0')
  				{
				document.getElementById('main-img').src = 'img/' + disp[i];//put all the values that fit the expression in this variable
				}
		}
	document.getElementById("customize").value="50";
	}