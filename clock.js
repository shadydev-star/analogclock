let hr = document.querySelector('#hour');  // Use '#' for id selector
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');

function displayTime() {
  let date = new Date();

  let hh = date.getHours();
  let mn = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mn / 2;
  let mRotation = 6 * mn;
  let sRotation = 6 * ss;

  if (hr && min && sec) {  // Ensure elements exist before modifying
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
  }
}

setInterval(displayTime, 1000);
