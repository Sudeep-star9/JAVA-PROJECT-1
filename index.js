window.addEventListener('keydown',keydown)
let KeyCode=document.querySelector('.key-code');
let KeyEvent=document.querySelector('#event');
let EventLocation=document.querySelector('#location');
let EventWhich=document.querySelector('#which');
let EventCode=document.querySelector('#code');


function keydown(event){
KeyCode.innerHTML=event.keyCode;
KeyEvent.innerHTML=event.key;
EventLocation.innerHTML=event.location;
EventWhich.innerHTML=event.which;
EventCode.innerHTML=event.code;
console.log(event);
} 

