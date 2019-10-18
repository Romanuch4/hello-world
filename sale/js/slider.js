(function() {
  const moveLeft = document.querySelector('.main-img-content-left'),
        container = document.querySelector('.main-img-container'),
        moveRight = document.querySelector('.main-img-content-right');
  let counter = 0;

  moveLeft.addEventListener('click', function() {
    if(counter == 0) {
      counter = - 300;
      container.style.left = counter + '%';
    } else {
      counter+=100;
      container.style.left = counter + '%';
    }
  });

  moveRight.addEventListener('click', function() {
    if(counter == -300) {
      counter = 0;
      container.style.left = counter + '%';
    } else {
      counter-=100;
      container.style.left = counter + '%';
    }
  });
})();