(function() {
  const slider = document.querySelector('.best-slides'),
        left = document.querySelector('.best-left'),
        right = document.querySelector('.best-right');
  let start = 0;

  if(screen.width < 1000) {
    left.addEventListener('click', function() {
      if(start==0) {
        start=-2000;
        slider.style.left = start + 'px';
      }
      else {
        start+=400;
        slider.style.left = start + 'px';
      }
    });
  
    right.addEventListener('click', function() {
      if(start==-2000) {
        start = 0;
        slider.style.left = start + 'px';
      }
      else {
        start-=400;
        slider.style.left = start + 'px';
      }
    });
  }

  else if(screen.width < 1400) {
    left.addEventListener('click', function() {
      if(start==0) {
        start=-1600;
        slider.style.left = start + 'px';
      }
      else {
        start+=400;
        slider.style.left = start + 'px';
      }
    });
  
    right.addEventListener('click', function() {
      if(start==-1600) {
        start = 0;
        slider.style.left = start + 'px';
      }
      else {
        start-=400;
        slider.style.left = start + 'px';
      }
    });
  } 
  
  else {
    left.addEventListener('click', function() {
      if(start==0) {
        start=-1200;
        slider.style.left = start + 'px';
      }
      else {
        start+=400;
        slider.style.left = start + 'px';
      }
    });
  
    right.addEventListener('click', function() {
      if(start==-1200) {
        start = 0;
        slider.style.left = start + 'px';
      }
      else {
        start-=400;
        slider.style.left = start + 'px';
      }
    });
  }

})();