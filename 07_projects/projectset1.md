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

