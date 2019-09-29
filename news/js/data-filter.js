(function() {
  const years = document.querySelector('.main-years'),
        year1 = years.querySelector('#year-1'),
        year2 = years.querySelector('#year-2'),
        year3 = years.querySelector('#year-3');

  years.addEventListener('click', function(evt) {
    if(evt.target.id == 'year-1') {
      year1.classList.add('main-year-checked');
      year2.classList.remove('main-year-checked');
      year3.classList.remove('main-year-checked');
    }

    if(evt.target.id == 'year-2') {
      year1.classList.remove('main-year-checked');
      year2.classList.add('main-year-checked');
      year3.classList.remove('main-year-checked');
    }

    if(evt.target.id == 'year-3') {
      year1.classList.remove('main-year-checked');
      year2.classList.remove('main-year-checked');
      year3.classList.add('main-year-checked');
    }
  });
})();