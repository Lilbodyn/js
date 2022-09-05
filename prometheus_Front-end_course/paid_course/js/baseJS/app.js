/* function getName() {
    return prompt('Enter name', '')
}

function greet() {
    const userName = getName();
    console.log('Hello, ', userName)
}
greet(); */

const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('message');

function printMessage() {
    console.log(messageInput.value);
  }

function addListener() {
    clickableBtn.addEventListener('click', function() {
        console.log(messageInput.value);
      });
}

addListenerBtn.addEventListener('click', addListener);