var x, y, z, a1, btnAgain;

x = document.getElementById("portland");
y = document.getElementById("golden");
z = document.getElementById("none");

a1 = document.getElementById("submit");
btnAgain = document.getElementById("voteAgain");

var arr = [x,y,z];

var portNum = 0;
var goldNum = 0;
var noNum = 0;

a1.addEventListener("click", function(a){
	arr.forEach(function(a) {
		if(a.checked){
			if(a.value == "Portland"){
				portNum += 1;
				document.getElementById("portlandNum").innerHTML = "Portland: " + portNum + " votes";
			}
			else if(a.value == "Golden State"){
				goldNum += 1;
				document.getElementById("goldenStateNum").innerHTML = "Golden State: " + goldNum + " votes";
			}
			else if(a.value == "Too close to call"){
				noNum += 1;
				document.getElementById("close").innerHTML = "Too close to call: " + noNum + " votes";
			}
		}
	});

	var hide = document.querySelector(".main");
	var show = document.querySelector(".total");

	show.style.display = "block";
	hide.style.display = "none";
});

btnAgain.addEventListener("click", function(){
	var show = document.querySelector(".main");
	var hide = document.querySelector(".total");

	show.style.display = "block";
	hide.style.display = "none";
})
