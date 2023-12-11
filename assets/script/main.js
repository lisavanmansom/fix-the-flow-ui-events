let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// Button feedback
let feedback = document.querySelector('a:nth-of-type(15)')
let body = document.querySelector('body')

feedback.addEventListener("mouseover", hovered, false);
feedback.addEventListener("mouseout", hoveredOut, false);

function hovered (e) {
  console.log("Hovered!");
  body.classList.add('background')
  feedforward.classList.add('background')
  buttondrie.classList.add('background')
  interaction.classList.add('background')
  userflow.classList.add('background')
  eventbutton.classList.add('background')
  design.classList.add('background')
  frontend.classList.add('background')
  wireflow.classList.add('background')
}

function hoveredOut(e) {
  console.log("Hovered Away!");
  body.classList.remove('background')
  feedforward.classList.remove('background')
  buttondrie.classList.remove('background')
  interaction.classList.remove('background')
  userflow.classList.remove('background')
  eventbutton.classList.remove('background')
  design.classList.remove('background')
  frontend.classList.remove('background')
  wireflow.classList.remove('background')
}

// Button feedforward
let feedforward = document.querySelector('a:nth-of-type(16)')

feedforward.addEventListener("mousedown", mousePressed, false);
feedforward.addEventListener("mouseup", mouseReleased, false);
feedforward.addEventListener("click", mouseClicked, false);

function mousePressed(e) {
  console.log("Mouse is down!");
  feedforward.classList.add('background')
}

function mouseReleased(e) {
  console.log("Mouse is up!");

}

function mouseClicked(e) {
  console.log("Mouse is clicked!");
  feedforward.classList.toggle('buttonrotate')
}

// Button feedforward
let buttondrie = document.querySelector('a:nth-of-type(3)')

buttondrie.addEventListener('dblclick', function (){
  buttondrie.classList.add('hide')
})

// Button userflow
let userflow = document.querySelector('a:nth-of-type(13)')

document.addEventListener('keydown', scale)

function scale(e){
if(e.key == "q") {
userflow.classList.add('userflow-button')
}}

  // Button events
let eventbutton = document.querySelector('a:nth-of-type(11)')

eventbutton.addEventListener('click', skewtoggle)

function skewtoggle () {
  eventbutton.classList.add('skew-button')
}

// Button design

let design = document.querySelector('a:nth-of-type(2)')

document.addEventListener('keydown', matrix)

function matrix(e){
if(e.key == "z") {
design.classList.add('matrix-button')
}}

// Button frontend

let frontend = document.querySelector('a:nth-of-type(1)')

frontend.addEventListener('mouseup', function (){
  frontend.classList.add('frontend-button')
})

let wireflow = document.querySelector('a:nth-of-type(14)')

wireflow.addEventListener("mousedown", mousePressed, false);
wireflow.addEventListener("mouseup", mouseReleased, false);
wireflow.addEventListener("click", mouseClicked, false);

function mousePressed(e) {
  console.log("Mouse is down!");
  wireflow.classList.add('background')
}

function mouseReleased(e) {
  console.log("Mouse is up!");
  wireflow.classList.remove('background')
}


