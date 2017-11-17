//Search function
function search(imgsrc){
		console.log(imgsrc);
        var file=imgsrc.substring(imgsrc.lastIndexOf("/")+1,imgsrc.length);
		console.log(file);
		$.post('http://ec2-54-217-184-143.eu-west-1.compute.amazonaws.com/static', { img : file, "database" : "wallpapers" }, function(data) {
  		console.log(data);
		data = jQuery.parseJSON( data );

		init(data);
		});
	}