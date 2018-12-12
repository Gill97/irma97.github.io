var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image_1.jpg') {
      myImage.setAttribute ('src','images/image_2.jpg');
    } else {
      myImage.setAttribute ('src','images/image_1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Привет, что зашёл, пользователь ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Привет, что зашёл, пользователь' + storedName;
}

myButton.onclick = function() {
  setUserName();
}