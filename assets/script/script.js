let  figure = document.getElementById('bloc');
//console.log(figure);
let leftPosition = 0;

function moveFigure(timestamp){
  leftPosition += 2;
  figure.style.left = leftPosition + 'px';  //  The position of the animation is updated in the CSS with the left property

  requestAnimationFrame(moveFigure); // the reauestAnimation...function is called...to execute the movFigure function again.
}
moveFigure(); // the moveFigure function is called to initialize the animation