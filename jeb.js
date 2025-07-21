const display = document.getElementById('display');

function append(char) {
  if (display.innerText === '0' || display.innerText === 'Error') {
    display.innerText = char;
  } else {
    display.innerText += char;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function calculate() {
  try {
    let result = eval(display.innerText.replace('%', '/100'));
    display.innerText = result;
  } catch (e) {
    display.innerText = 'Error';
  }
}
