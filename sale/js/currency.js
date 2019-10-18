(function() {
  const currencies = document.querySelector('.filter-item-align'),
        currency = document.querySelectorAll('.filter-currency');
  currencies.addEventListener('click', function(evt) {
    switch (evt.target.id) {
      case 'currency-1': {
        currency[0].textContent = '₽';
        break;
      }

      case 'currency-2': {
        currency[0].textContent = '€';
        break;
      }

      case 'currency-3': {
        currency[0].textContent = '$';
        break;
      }
    }
  });
})();