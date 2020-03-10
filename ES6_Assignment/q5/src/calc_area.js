export function log() {
  console.log('hello');
}


function calcCircle(radius) {
  if (radius < 0) {
    alert('Negative values not allowed');
  }
  else if (radius >= 0) {
    let area = PI * radius * radius;
    alert(`Area of Circle: ${area} units`);
  }
}

function calcRectangle(length, breadth) {
  if (length < 0 || breadth < 0) {
    alert('Negative values not allowed');
  }
  else if (length >= 0 && breadth >= 0) {
    let area = length * breadth;
    alert(`Area of Rectangle: ${area} units`);
  }
}

function calcCylinder(radiusCylinder, height) {
  if (radiusCylinder < 0 || height < 0) {
    alert('Negative values not allowed');
  }
  else if (radiusCylinder >= 0 && height >= 0) {
    let area = 2 * PI * radiusCylinder * (radiusCylinder + height);
    alert(`Area of Cylinder: ${area} units`);
  }
}