function init(){
//add your javascrip between these two lines of code
    function myEventFunction() {
		var text = document.getElementById('entryinput').value;
		alert('Michael Yelich: ' + text);
		document.getElementById('textoutput').innerHTML = text;
	}
	var entrybutton = document.getElementById('entrybutton')
	entrybutton.addEventListener('click', myEventFunction);
    
}
window.addEventListener('load', init);