"use strict";

var _calc_area = require("./calc_area.js");

var circle_block = document.getElementById('circle-block');
var rect_block = document.getElementById('rect-block');
var cylinder_block = document.getElementById('cylinder-block');

function showCircle() {
  circle_block.style.display = 'block';
  rect_block.style.display = 'none';
  cylinder_block.style.display = 'none';
  (0, _calc_area.log)();
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