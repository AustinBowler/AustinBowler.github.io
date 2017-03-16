jQuery(document).ready(function ($) {
	$.ajax({
		url: "weather.json",
		dataType: "json",
		success: function (data) {
			console.log(data);
			var location = data['Franklin']['City'];
			var temp_f = data['Franklin']['High'];
			console.log("Current temperature in " + location + " is: " + temp_f);
			var cur_location = $("#cur_location");
			var temp = $("#temp");
			var message = $("#message");

			cur_location.text(location);
			temp.text(temp_f);
			message.text("Current temperature in " + location + " is: " + temp_f);
		}
	});
});
