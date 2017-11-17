//Dynamic Gallery function
		
function dynamic_gallery( id, sliderVal )
{
	var p = 0;
	var temp = [];
	var disp = []; 
	
	//loop for the lenght of the images that are fetched from the database
	sliderVal = sliderVal/100;
	
	for(i=0; i < image.length; i++)
	{
		val = patval[i]*sliderVal + colval[i]*(1-sliderVal);
		
		if (val < sliderVal+0.3 && val > sliderVal-0.3)
  			{
			temp.push(i);//put all the values that fit the expression in this variable
			}
	}
	
	//loop through the array to get image filenames and change them.
	for(i = 0; i < temp.length; i++)
	{		
		p = temp[i];
		disp.push(image[p]);
		concan = 'img'+i;
		document.getElementById(concan).src = 'img/' + disp[i];
	}
}