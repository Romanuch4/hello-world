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
     input1 = document.querySelector('#name'),
     input2 = document.querySelector('#number'),
     comeBack = document.querySelector('.thanks-comeback');
     window.popUpThanks = document.querySelector('.call1');
     sendButton.addEventListener('click', function (evt) {
      evt.preventDefault();
        if(input1.value == '' || input2.value == '') {
          alert('Отправка невозможна(Введите нужные значения)');
        } else {
          window.popUp.style.display = 'none';
          window.popUpThanks.style.display = 'flex';
        }
    });

    comeBack.addEventListener('click', function () {
      window.popUpThanks.style.display = 'none';
    })
})();
