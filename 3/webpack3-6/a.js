import img1 from './sky.jpg';
import img2 from './chrome.png';
console.log(img1);
console.log(img2);

var dom1 = `<img src='${img1}' />`;
var dom2 = `<img src='${img2}' />`;

window.onload = function () {
  document.getElementById('img1').innerHTML = dom1;
  document.getElementById('img2').innerHTML = dom2;
}

