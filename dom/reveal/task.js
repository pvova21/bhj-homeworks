const banners = document.querySelectorAll('.reveal');
const viewPortSize = window.innerHeight;

window.addEventListener('scroll', function() {
  for (let item of banners) {
    const ads = {tob, bottom} = item.getBoundingClientRect(); 
      if ((viewPortSize - ads.top - 100 >= 0) && (ads.bottom - 400 <= 0)) { 
    item.classList.add('reveal_active');
      }
      else {
    item.classList.remove('reveal_active');
    }
  }
});