import img from './sky.jpg';
console.log(img);

var dom = `<img src='${img}' />`;
window.onload = function () {
  document.getElementById('main').innerHTML = dom;
}

