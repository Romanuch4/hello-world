(function() {
  const filterRooms = document.querySelector('.filter-rooms'),
        filterRoomsItem = document.querySelectorAll('.filter-rooms-item');

  filterRooms.addEventListener('click', function (evt) {
    switch (evt.toElement.textContent) {
      case '1': {
        filterRoomsItem[0].style.backgroundColor = '#8E85B7';
        filterRoomsItem[1].style.backgroundColor = '#EAEAEA';
        filterRoomsItem[2].style.backgroundColor = '#EAEAEA';
        filterRoomsItem[3].style.backgroundColor = '#EAEAEA';
        break;
      }

      case '2': {
        filterRoomsItem[1].style.backgroundColor = '#8E85B7';
        filterRoomsItem[0].style.backgroundColor = '#EAEAEA';
        filterRoomsItem[2].style.backgroundColor = '#EAEAEA';
        filterRoomsItem[3].style.backgroundColor = '#EAEAEA';
        break;
      }

      case '3': {
        filterRoomsItem[2].style.backgroundColor = '#8E85B7';
        filterRoomsItem[0].style.backgroundColor = '#EAEAEA';
        filterRoomsItem[1].style.backgroundColor = '#EAEAEA';
        filterRoomsItem[3].style.backgroundColor = '#EAEAEA';
        break;
      }

      case '4+': {
        filterRoomsItem[3].style.backgroundColor = '#8E85B7';
        filterRoomsItem[0].style.backgroundColor = '#EAEAEA';
        filterRoomsItem[1].style.backgroundColor = '#EAEAEA';
        filterRoomsItem[2].style.backgroundColor = '#EAEAEA';
        break;
      }
    }
  });
 })();