var myHeading = document.querySelector('h1');
myHeading.textContent= 'Hello World!'

var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');

	if(mySrc === 'images/iu.jpg')
	{
		myImage.setAttribute ('src', 'images/ui.jpg');
	} else {
		myImage.setAttribute ('src', 'images/iu,jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your viking name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Odin"s ravens have endowed your with their might, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');

	myHeading.textContent = 'Odin"s ravens have endowed your with their might, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}