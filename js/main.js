(() => {
	var catIcons = document.querySelector('#catIcon1');

	var allIcons = document.querySelectorAll('.addCatIcon');

	function logMyId() {
	console.log(this.id);
	debugger;
	}

	catIcons.addEventListener("click", logMyId);

	allIcons.forEach(currentIcon => currentIcon.addEventListener("click", logMyId));
})();
