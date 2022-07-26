const menuList = document.querySelectorAll('.tab__navigation > div');
const contentBoxList = document.querySelectorAll('.tab__contents > div');
const menuListLength = menuList.length;
const menuListArr = [];

for (i = 0; i < menuListLength; i++) {
  menuListArr.push(menuList[i].innerText);
}

for (i = 0; i < menuListLength; i++) {
  menuList[i].addEventListener('click', function(event) {
    let selectedTab = document.querySelector('.tab_active');
    let selectedContent = document.querySelector('.tab__content_active');
    if (selectedTab.innerText != event.target.innerText) {
      selectedTab.classList.remove('tab_active');
      selectedContent.classList.remove('tab__content_active');
      event.target.classList.add('tab_active');
      let k = menuListArr.indexOf(event.target.innerText);  
      contentBoxList[k].classList.add('tab__content_active');
      return;
    }
  });
} 