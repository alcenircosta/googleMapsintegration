window.onload = function(){
	// Funcao para renderizar o mapa na parte de contato
	var map;
	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(-7.11532,-34.861),
			scrollwhell:false,
			zoom:8,
			MapTypeId:google.maps.MapTypeId.SATELLITE
		}
		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}
	function addMarker(lat,long,icon,content,click){
		var latLng = {'lat':lat,'lng':long};
		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});
		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});
		if(click == true){
			google.maps.event.addListener(marker,'click',function(){
				infoWindow.open(map,marker);
			});
		}else{
			infoWindow.open(map,marker);
		}
	}
	initialize();
}