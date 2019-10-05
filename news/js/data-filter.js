(function() {
  const years = document.querySelector('.main-years'),
        year1 = years.querySelector('#year-1'),
        year2 = years.querySelector('#year-2'),
        year3 = years.querySelector('#year-3'),
        newsSections = document.querySelectorAll('.news-content');

  years.addEventListener('click', function(evt) {
    if(evt.target.id == 'year-1') {
      year1.classList.add('main-year-checked');
      year2.classList.remove('main-year-checked');
      year3.classList.remove('main-year-checked');
      for (let i = 0; i < newsSections.length; i++) {
          newsSections[i].style.display = 'flex';
      }
      newsSections[4].style.display = 'none';
    }

    if(evt.target.id == 'year-2') {
      year1.classList.remove('main-year-checked');
      year2.classList.add('main-year-checked');
      year3.classList.remove('main-year-checked');
      for (let i = 0; i < newsSections.length; i++) {
          newsSections[i].style.display = 'none';
      }
      newsSections[4].style.display = 'flex';
    }

    if(evt.target.id == 'year-3') {
      year1.classList.remove('main-year-checked');
      year2.classList.remove('main-year-checked');
      year3.classList.add('main-year-checked');
      for (let i = 0; i < newsSections.length; i++) {
        newsSections[i].style.display = 'none';
      }
    }
  });
})();