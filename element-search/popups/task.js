let closePopup = document.querySelectorAll('.modal__close');
let modalMain = document.getElementById('modal_main');

let modalSuccess = document.getElementById('modal_success');
let showSuccess = document.querySelector('.show-success');

for (let i = 0; closePopup.length > i; i++) {
  closePopup[i].onclick = () => {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
  }
}

showSuccess.onclick = () => {
  modalSuccess.className = 'modal modal_active';
  modalMain.className = 'modal';
} 