(function () {
  let buttonAdaptive = document.querySelector('.header-menu-mobile'),
      menu = document.querySelector('.header-menu-nav');
      count = 0;
  buttonAdaptive.addEventListener('click', showMenu);

  function showMenu() {
    buttonAdaptive.style.transform = 'rotate(90deg)';
    if (count==1) {
      menu.style.top = -500 + 'px';
      count=0;
      buttonAdaptive.style.transform = 'rotate(0deg)';
    } else {
      menu.style.top = 0 + 'px';
      count++;
    }
  };
})();
