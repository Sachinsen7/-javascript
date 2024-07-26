# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-whv7zt?file=01_colorChanger%2Findex.html)

## Solution Code

## Project1

```javascript
console.log("Sachin")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
  });
});



```


## Project 2 Solution

```Javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.textContent = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.textContent = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`;

    let message;
    //Added Preferences!

    if (bmi < 18.5) {
      message = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = 'Overweight';
    } else if (bmi >= 30) {
      message = 'Above Normal Height';
    } else {
      message = 'Error';
    }

    //Display the result
    results.textContent = `Your BMI is ${bmi}. ${message}`;
  }
});


```

## Project 3 Solution

```Javascript
// const clock = document.querySelector('clock');
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString);
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```


## Project 4 Solution


```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const HiorLow = document.querySelector('.HiorLow');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over, Ramdom number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  HiorLow.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ''; //clean
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame">Start a new Game</h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}



```