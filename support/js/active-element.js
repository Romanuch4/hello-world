(function() {
  const filterRooms = document.querySelector('.main-rooms'),
        filterRoomsItem = document.querySelectorAll('.main-rooms-item'),
        filterRepair = document.querySelector('.main-repair'),
        filterRepairItem = document.querySelectorAll('.main-repair-item');

  const addOnClick = (block, elements) => {
    block.addEventListener('click', function (evt) {
      switch (evt.target.dataset.name) {
        case '1': {
          elements[0].style.backgroundColor = '#8E85B7';
          elements[1].style.backgroundColor = '#EAEAEA';
          elements[2].style.backgroundColor = '#EAEAEA';
          elements[3].style.backgroundColor = '#EAEAEA';
          break;
        }
  
        case '2': {
          elements[1].style.backgroundColor = '#8E85B7';
          elements[0].style.backgroundColor = '#EAEAEA';
          elements[2].style.backgroundColor = '#EAEAEA';
          elements[3].style.backgroundColor = '#EAEAEA';
          break;
        }
  
        case '3': {
          elements[2].style.backgroundColor = '#8E85B7';
          elements[0].style.backgroundColor = '#EAEAEA';
          elements[1].style.backgroundColor = '#EAEAEA';
          elements[3].style.backgroundColor = '#EAEAEA';
          break;
        }
  
        case '4': {
          elements[3].style.backgroundColor = '#8E85B7';
          elements[0].style.backgroundColor = '#EAEAEA';
          elements[1].style.backgroundColor = '#EAEAEA';
          elements[2].style.backgroundColor = '#EAEAEA';
          break;
        }
      }
    });
  };

  addOnClick(filterRooms, filterRoomsItem);
  addOnClick(filterRepair, filterRepairItem);

 })();