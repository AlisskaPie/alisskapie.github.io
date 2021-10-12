document.querySelector('html').onclick = function () {
    alert('Ouch! Stop poking me!');
}
let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/View_35.jpg') {
        myImage.setAttribute('src', 'images/View_36.jpg');
        alert('How about to click click again, ha?')
    } else {
        myImage.setAttribute('src', 'images/View_35.jpg');
        alert('Click click again!')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Drinks are cool, ' + myName + ' the Drinkster';
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Drinks are cool, ' + storedName + ' the Drinkster';
}
myButton.onclick = function () {
    setUserName();
}