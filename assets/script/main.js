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
}

function hoveredOut(e) {
  console.log("Hovered Away!");
  body.classList.remove('background')
  feedforward.classList.remove('background')
  buttondrie.classList.remove('background')
  interaction.classList.remove('background')
}

// Button feedforward
let feedforward = document.querySelector('a:nth-of-type(16)')

feedforward.addEventListener("mousedown", mousePressed, false);
feedforward.addEventListener("mouseup", mouseReleased, false);
feedforward.addEventListener("click", mouseClicked, false);

function mousePressed(e) {
  console.log("Mouse is down!");
}

function mouseReleased(e) {
  console.log("Mouse is up!");
}

function mouseClicked(e) {
  console.log("Mouse is clicked!");
  feedforward.classList.add('buttonrotate')
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





