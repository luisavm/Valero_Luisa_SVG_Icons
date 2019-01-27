(() => {

	// var allIcons = document.querySelectorAll('.addCatIcon');

	function logMyId()
	{
	console.log(this.id);
	// debugger;
	}

	// Relaxed message
	var catIcons = document.querySelector('#catIcon1');
	catIcons.addEventListener("click", function(){
	alert("Cat is relaxed");
	})

	// Playful message
	var catIcons = document.querySelector('#catIcon2');
	catIcons.addEventListener("click", function(){
	alert("Cat is playful");
	})

	// Happiness message
	var catIcons = document.querySelector('#catIcon3');
	catIcons.addEventListener("click", function(){
	alert("Cat is happy");
	})

	// Glad message
	var catIcons = document.querySelector('#catIcon4');
	catIcons.addEventListener("click", function(){
	alert("Cat is glad");
	})

	// Comfortable message
	var catIcons = document.querySelector('#catIcon5');
	catIcons.addEventListener("click", function(){
	alert("Cat is comfortable");
	})

	// Worried message
	var catIcons = document.querySelector('#catIcon6');
	catIcons.addEventListener("click", function(){
	alert("Cat is worried");
	})

	// Bored message
	var catIcons = document.querySelector('#catIcon7');
	catIcons.addEventListener("click", function(){
	alert("Cat is bored");
	})

	//Sad message
	var catIcons = document.querySelector('#catIcon8');
	catIcons.addEventListener("click", function(){
	alert("Cat is sad");
	})

	//Terrified message
	var catIcons = document.querySelector('#catIcon9');
	catIcons.addEventListener("click", function(){
	alert("Cat is terrified");
	})

	// Frightened message
	var catIcons = document.querySelector('#catIcon10');
	catIcons.addEventListener("click", function(){
	alert("Cat is frightened");
	})

	// allIcons.forEach(currentIcon => currentIcon.addEventListener("click", logMyId));
})();
