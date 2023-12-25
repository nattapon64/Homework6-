let counterId = 0;

function updateCounter(counter, count) {
  counter.querySelector('.count').textContent = count;
}

function increment(event) {
  const step = parseInt(event.target.dataset.step);
  const counter = event.target.parentElement;
  const count = parseInt(counter.querySelector('.count').textContent) + step;
  updateCounter(counter, count);
}

function decrement(event) {
  const step = parseInt(event.target.dataset.step);
  const counter = event.target.parentElement;
  const count = parseInt(counter.querySelector('.count').textContent);
  if (count >= step) {
    updateCounter(counter, count - step);
  }
}

function clear(event) {
  const counter = event.target.parentElement;
  updateCounter(counter, 0);
}

function removeCounter(event) {
  const counter = event.target.parentElement;
  counter.parentNode.removeChild(counter);
}

function addCounter() {
  const container = document.getElementById('counterContainer');
  const step = parseInt(document.getElementById('stepInput').value);
  const newCounter = document.createElement('div');
  newCounter.classList.add('counter');
  newCounter.innerHTML = `
    <h1 class="count">0</h1>
    <button class="increment" data-step="${step}">+</button>
    <button class="decrement" data-step="${step}">-</button>
    <button class="clear">C</button>
    <button class="remove">Remove</button>
  `;
  newCounter.querySelector('.increment').addEventListener('click', increment);
  newCounter.querySelector('.decrement').addEventListener('click', decrement);
  newCounter.querySelector('.clear').addEventListener('click', clear);
  newCounter.querySelector('.remove').addEventListener('click', removeCounter);
  
  // Move newly added counter to the bottom
  container.appendChild(newCounter);
//   container.appendChild(document.createElement('hr')); // Add horizontal line for separation
}

document.getElementById('addCounter').addEventListener('click', addCounter);
