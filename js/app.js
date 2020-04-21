//Selects all divs with square class, mole class, and time-left id, storing in const (immutable) variables
const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');

let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent;

//Randomly selects square on grid
function randomSquare() {
  //Arrow function removes any mole class from divs so there are no divs left with styling on the board
  square.forEach(className => {
    className.classList.remove('mole');
  })

  //Defines random position on grid to place mole - multiply by number of squares on grid
  //Math.floor rounds down to nearest integer
  let randomPosition = square[Math.floor(Math.random() * 9)];
  //Once random position is selected, mole class is added
  randomPosition.classList.add('mole');

  //Assigns id of randomPosition to hitPosition
  hitPosition = randomPosition.id
}

square.forEach(id => {
  //Refers to when we hit the mouse on an element (square on the grid)
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  })
})

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

//Count down as game is played. Once it reaches 0, game over and score is displayed
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if(currentTime === 0){
    clearInterval(timerId);
    alert('Game Over! Final score: ' + result);
  }
}

let timerId = setInterval(countDown, 1000);