$("document").ready(function(){
	let s = 1;
	setInterval(function(){
		if (s == 1) {
			document.getElementById("slide1").style.display = "none";
			document.getElementById("slide2").style.display = "block";
			s = 2;
		}
		else{
			document.getElementById("slide2").style.display = "none";
			document.getElementById("slide1").style.display = "block";
			s = 1;
		}
	}, 1000);
})
