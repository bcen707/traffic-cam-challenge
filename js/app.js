// Billy Cen
// Info 343


// List of Seattle Traffic Cameras
// http://data.seattle.gov/resource/65fc-btcc.json

"use strict";

//put your code here to create the map, fetch the list of traffic cameras
//and add them as markers on the map
//when a user clicks on a marker, you should pan the map so that the marker
//is at the center, and open an InfoWindow that displays the latest camera
//image
//you should also write the code to filter the set of markers when the user
//types a search phrase into the search box

function onReady() {

	var infoWin = new google.maps.InfoWindow();

	var mapOptions = {
		center: {lat: 47.6, lng: -122.3},
		zoom: 12
	}

	var mapElem = document.getElementById('map');
	var map = new google.maps.Map(mapElem, mapOptions);

	var position;

	var marker;


	$.getJSON('http://data.seattle.gov/resource/65fc-btcc.json')
		.done(function(coordinates) {
			for (var index = 0; index < coordinates.length; index++) {
				var targetLat = parseFloat(coordinates[index].location.latitude);
				var targetLng = parseFloat(coordinates[index].location.longitude);
				position = {lat: targetLat, lng: targetLng};
				marker = new google.maps.Marker({
					position: position,
					map: map
				})
			} // for loop
		}) //.done


		// if request fails
		/*
		.fail(function(error)) {
			alert("Failed to get JSON.")
		}) 

		.always(function() {
	

		})
		*/


		google.maps.event.addListener(marker, 'click', markerClick)


} //onReady


function markerClick() {
	map.panTo(this.getPosition());
	infoWin.open(map, this);
}

$(onReady);















