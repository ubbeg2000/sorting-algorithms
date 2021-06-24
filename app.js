// Elements
const arrayContainer = document.getElementById("array-container");

// Label
const arrayLengthLabel = document.getElementById('array-length-label')
const sortDelayLabel = document.getElementById('sort-delay-label')

// Inputs
const arrayLengthInput = document.getElementById("array-length");
const sortingDelayInput = document.getElementById("sort-delay");
const sortingAlgorithmInput = document.getElementById("sort-algorithm");

// Buttons
const generateButton = document.getElementById("generate-button");
const sortButton = document.getElementById("sort-button");

// Generated Element
const arrayBar = document.createElement("div");

// Variables
var delay = 30;

// Functions
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + +1;
}

function generateArray(len) {
  arrayContainer.innerHTML = "";
  var string = "";
  for (let i = 0; i < len; i++) {
    var value = getRandomInt(len);
    var height = (value / len) * 100;
    string += `<div class="array-bar" value="${value}" style="height: ${height}%; width: 800px;"></div>`;
  }
  arrayContainer.innerHTML += string;
}

function bubbleSort() {
  var array = document.getElementsByClassName('array-bar')
  var sortArray = [];
  for (el of array) {
    sortArray.push({
      value: +el.getAttribute("value"),
      style: el.getAttribute("style"),
    });
  }

  while (true) {
    let sorted = true;
    setInterval(() => {
      for (let i = 1; i < sortArray.length; i++) {
        setTimeout(() => {
          if (+sortArray[i - 1].value > +sortArray[i].value) {
            let value_temp = sortArray[i - 1].value;
            let style_temp = sortArray[i - 1].style;
            let temp = sortArray[i - 1];

            array[i - 1].setAttribute("value", sortArray[i].value);
            array[i - 1].setAttribute("style", sortArray[i].style);
            sortArray[i - 1] = sortArray[i];

            array[i].setAttribute("value", value_temp);
            array[i].setAttribute("style", style_temp);
            sortArray[i] = temp;

            sorted = false;
          }
        }, i * globalThis.delay);
      }
    }, globalThis.delay);
    if (sorted) {
      break;
    }
  }
}

arrayLengthInput.addEventListener("input", () => {
  arrayLengthLabel.innerText = `Array Length ( ${arrayLengthInput.value} )`
  generateArray(+arrayLengthInput.value);
});

generateButton.addEventListener("click", () => {
  generateArray(+arrayLengthInput.value);
});

sortingDelayInput.addEventListener("input", () => {
  sortDelayLabel.innerText = `Sorting Delay ( ${sortingDelayInput.value}ms )`
  this.delay = sortingDelayInput.value;
});

window.onload = function() {
  arrayLengthLabel.innerText = `Array Length ( 50 )`
  sortDelayLabel.innerText = `Sorting Delay ( 50ms )`
  generateArray(50)
}
