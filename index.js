import { ENTRANTS } from './entrants_list.js';

const rollEl = document.querySelector(".roll");
const rollAgainEl = document.querySelector(".roll-again");
const namesEl = document.querySelector(".names");
const winnerEl = document.querySelector(".winner");

function randomName() {
  const rand = Math.floor(Math.random() * ENTRANTS.length);
  const name = ENTRANTS[rand];
  namesEl.innerText = name;
}

function rollClick() {
  rollEl.classList.add("hide");
  rollAgainEl.classList.add("hide");
  winnerEl.classList.add("hide");
  namesEl.classList.remove("hide");

  var intervalId = window.setInterval(function(){
    console.log("test");
    randomName();
    namesEl.classList.add("hide");
    winnerEl.classList.remove("hide");
    rollAgainEl.classList.remove("hide");
  
    const winner = namesEl.innerText;
    winnerEl.innerText = winner;
    winnerEl.innerHTML = `<span>And the winner is...</span><br>${winner}`;
  }, 100);

  var keyEvent = function (e) {
    console.log(e.which);
    if (e.which == 32) {
        clearInterval(intervalId);
        console.log(stop)
    }
  };
  window.addEventListener('keypress', keyEvent);

}
window.rollClick = rollClick;