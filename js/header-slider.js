(function () {
  let slider = document.querySelector('.build-items'),
      buildLeft = document.querySelector('.build-left'),
      buildRight = document.querySelector('.build-right'),
      start = 0;

  buildLeft.addEventListener('click', function() {
    if (start==0) {
      start = -400;
      slider.style.left = start + '%';
      return true;
    }
    else {
      start+=100;
      slider.style.left = start + '%';
    }
  });

  buildRight.addEventListener('click', function() {
    if (start==-400) {
      start = 0;
      slider.style.left = start + '%';
      return true;
    }
    else {
      start+=-100;
      slider.style.left = start + '%';
    }
  });
})();

//Conditions slider

(function () {
  let slider = document.querySelector('.conditions-content'),
      buildLeft = document.querySelector('.conditions-left'),
      buildRight = document.querySelector('.conditions-right'),
      start = 0;

  buildLeft.addEventListener('click', function() {
    if (start==0) {
      start = -400;
      slider.style.left = start + '%';
      return true;
    }
    else {
      start+=100;
      slider.style.left = start + '%';
    }
  });

  buildRight.addEventListener('click', function() {
    if (start==-400) {
      start = 0;
      slider.style.left = start + '%';
      return true;
    }
    else {
      start+=-100;
      slider.style.left = start + '%';
    }
  });
})();
