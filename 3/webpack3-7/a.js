import img1 from './sky.jpg';
console.log(img1);

var dom1 = `<img src='${img1}' />`;
window.onload = function () {
  document.getElementById('img1').innerHTML = dom1;
}

