$(document).on('ready', function(){
	widthString = $(window).width();
	console.log(widthString);
	width = parseInt(widthString);
	if(width < 600){
		$("img.img-responsive").removeClass( "espacio-hor-img" ).addClass( "espacio-hor-img-chico" );;
		console.log("ancho menor 740");
	}
})