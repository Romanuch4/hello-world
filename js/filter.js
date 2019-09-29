(function() {
  const showResults = document.querySelector('.build-offer'),
        filterResert = document.querySelector('.filter-resert'),
        checkBoxes = document.querySelectorAll('.check option'),
        currency = document.querySelector('.filter-item-align'),
        currency1 = document.querySelector('.currency-1'),
        currency2 = document.querySelector('.currency-2'),
        currency3 = document.querySelector('.currency-3'),
        filterInputs = document.querySelectorAll('.filter-item'),
        filterFinish = document.querySelector('.filter-check'),
        filterFinishPoint = document.querySelector('.filter-check-point');

  //Выбор: с отделкой?
  let count = 0;
  filterFinish.addEventListener('click', function() {
    if(count>0) {
      filterFinishPoint.classList.remove('filter-check-point1');
      filterFinish.style.opacity = 1;
      count = 0;
    } else {
      filterFinish.style.opacity = 0.6;
      filterFinishPoint.classList.add('filter-check-point1');
      count++;
    }
  });

  //Выбор валюты
  currency.addEventListener('click', function(evt) {
    if(evt.target.id == 'currency-1') {
      currency1.classList.add('filter-checked');
      currency2.classList.remove('filter-checked');
      currency3.classList.remove('filter-checked');
    }  

    else if(evt.target.id == 'currency-2') {
      currency1.classList.remove('filter-checked');
      currency2.classList.add('filter-checked');
      currency3.classList.remove('filter-checked');
    }

    else if(evt.target.id == 'currency-3') {
      currency1.classList.remove('filter-checked');
      currency2.classList.remove('filter-checked');
      currency3.classList.add('filter-checked');
    }
  });

})();