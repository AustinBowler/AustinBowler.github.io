$(document).ready(function () {
	var jsonURL = "testimagejson.json";
	$.getJSON(jsonURL, function (json)
			  {
		var imgList= "";

		$.each(json.products, function () {
			imgList += '<p><img src= "' + this.imgPath + '"></p>';
		});

		$('#dvProdList').append(imgList);
	});
});
