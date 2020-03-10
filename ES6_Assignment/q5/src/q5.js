// import {log} from './calc_area.js';

let circle_block = document.getElementById('circle-block');
let rect_block = document.getElementById('rect-block');
let cylinder_block = document.getElementById('cylinder-block');
const PI = 3.1428;


function showCircle() {
  circle_block.style.display = 'block';
  rect_block.style.display = 'none';
  cylinder_block.style.display = 'none';

}

function showRectangle() {
  circle_block.style.display = 'none';
  rect_block.style.display = 'block';
  cylinder_block.style.display = 'none';
}

function showCylinder() {
  circle_block.style.display = 'none';
  rect_block.style.display = 'none';
  cylinder_block.style.display = 'block';
}


//---To be imported---------(using import export)

function calcCircle() {
  let radius = parseFloat(document.getElementById('radius').value);
  if (radius < 0) {
    alert('Negative values not allowed');
  }
  else if(radius>=0) {
    let area = PI * radius * radius;
    alert(`Area of Circle: ${area} units`);
  }
}

function calcRectangle() {
  let length = parseFloat(document.getElementById('length').value);
  let breadth = parseFloat(document.getElementById('breadth').value);
  if (length < 0 || breadth < 0) {
    alert('Negative values not allowed');
  }
  else if(length >= 0 && breadth >= 0) {
    let area = length * breadth;
    alert(`Area of Rectangle: ${area} units`);
  }
}

function calcCylinder() {
  let radiusCylinder = parseFloat(document.getElementById('radiusCylinder').value);
  let height = parseFloat(document.getElementById('height').value);

  if (radiusCylinder < 0 || height < 0) {
    alert('Negative values not allowed');
  }
  else if(radiusCylinder >= 0 && height >= 0) {
    let area = 2 * PI * radiusCylinder * (radiusCylinder + height);
    alert(`Area of Cylinder: ${area} units`);
  }
}