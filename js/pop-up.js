/*Calling*/
(function() {
  let call = document.querySelector('.header-menu-call'),
      closePopUp = document.querySelectorAll('.call-close');
  window.popUp = document.querySelector('.call');

  call.addEventListener('click', function () {
    popUp.classList.add('fadeInDown');
    popUp.style.display = 'flex';
  });

  for (let i = 0; i < closePopUp.length; i++) {
    closePopUp[i].addEventListener('click', function () {
      window.popUp.style.display = 'none';
      window.popUpThanks.style.display = 'none';
    });
  }
})();

/*Thanks to call*/
(function() {
 let sendButton = document.querySelector('.call-submit'),
    comeBack = document.querySelector('.thanks-comeback');
    window.popUpThanks = document.querySelector('.call1');
    sendButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      window.popUp.style.display = 'none';
      popUpThanks.style.display = 'flex';
    });

    comeBack.addEventListener('click', function () {
      window.popUpThanks.style.display = 'none';
    })
})();
