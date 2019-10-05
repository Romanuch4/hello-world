(function() {
  const tabs = document.querySelectorAll('.main-tabs'),
        content = document.querySelector('.main-categories-filter');

  for(let i = 0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', function(evt) {
      switch(evt.target.className) {
        case 'main-tab main-tab-1': {
          content.style.left = `0%`;
          break;
        }
  
        case 'main-tab main-tab-2': {
          content.style.left = `-100%`;
          break;
        }
  
        case 'main-tab main-tab-3': {
          content.style.left = `-200%`;
          break;
        }
  
        case 'main-tab main-tab-4': {
          content.style.left = `-300%`;
          break;
        }
  
        case 'main-tab main-tab-5': {
          content.style.left = `-400%`;
          break;
        }
  
        case 'main-tab main-tab-6': {
          content.style.left = `-500%`;
          break;
        }
      }
    });
  }
})()