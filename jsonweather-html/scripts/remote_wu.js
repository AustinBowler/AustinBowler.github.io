// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
	status.text('Getting Location...');
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function (position) {
		var lat = position.coords.latitude;
		var long = position.coords.longitude;

		// Call the getData function, send the lat and long
		getData(lat, long);

	  });
	} else {
	  status.text("Your browser doesn't support Geolocation or it is not enabled!");
	}

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
	  $.ajax({
		  url : "api.wunderground.com/api/f9c031aefbc23152/geolookup/conditions/q/" + lat + "," + long + ".json"
		  ,dataType : "jsonp"
		  ,success : function(data) {
			  console.log(data);
			  var city = data['location']['city'];
			  var state = data['location']['state'];
			  var temp = data['current_observation']['temp_f'];
			  var feel = data['current_observation']['feelslike_f'];
			  var summary = data['current_observation']['weather'];
			  var icon = data['current_observation']['icon_url'];
			  var precip = data['current_observation']['precip_today_in'];
			  var cur_location = $('#cityDisplay');
			  var cur_temp = $('#currentTemp');
			  var feelslike = $('#feelslike');
			  var cur_sum = $('#summary');
			  var cur_precip = $('#precip')
			  $("title").prepend(city + ", " + state + " | ");
			  cur_location.html(city + ", " + state);
			  cur_temp.html(temp + "ºF");
			  feelslike.html("Feels Like: " + feel + "ºF");
			  cur_sum.html(summary);
			  cur_precip.html("Today's Precipitation: " + precip + "in.")
			  $("#icon").attr("src", icon);
			  $("#cover").fadeOut(250);
		  }
	  });

  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
	return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});
