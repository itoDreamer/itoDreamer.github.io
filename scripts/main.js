// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cap.jpg') {
      myImage.setAttribute('src', 'images/cap2.jpg');
    } else {
      myImage.setAttribute('src', 'images/cap.jpg');
    }
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if (!myName || myName === null) {
  	setUserName();
  } else {
  	localStorage.setItem('name', myName);
  	myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}

// function setUserName() {
//   let myName = prompt('请输入你的名字。');
//   if(!myName || myName === null) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', myName);
//     myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
//   }
// }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
	setUserName();
}



// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');    
// } else {
//   alert('但是巧克力才是我的最爱呀……');    
// }

// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// document.querySelector('body').onclick = function() {
//     alert('别戳我，我怕疼。');
// }

// alert(multiply(4, 7));
// multiply(20, 20);
// multiply(0.5, 3);