const imageElms = document.querySelectorAll(".slider__item");
const dotElms = document.querySelectorAll(".slider__dot");
const leftBtn = document.querySelector(".slider__arrow_prev");
const rightBtn = document.querySelector(".slider__arrow_next");

function slider() {
  let index = 0;
  let array = Array.from(imageElms);
  let dots = Array.from(dotElms);

  function loadItem(arr) {
    let position = arr.findIndex((item) => item.classList.contains('slider__item_active'));
    console.log(position);
    arr[position].classList.remove('slider__item_active');
    dots[position].classList.remove('slider__dot_active');
    arr[index].classList.add("slider__item_active");
    dots[index].classList.add("slider__dot_active");
  }
  function resetIndex() {
    if (index === array.length) {
      index = 0;
    }
    if (index < 0) {
      index = array.length - 1;
    }
    loadItem(array);
  }
  rightBtn.onclick = function () {
    index++;
    resetIndex();
    loadItem(array);
  }
  leftBtn.onclick = function () {
    index--;
    resetIndex();
    loadItem(array);
  };
  dots.forEach((item, idx) => {
    item.onclick = function () {
      index = idx;
      loadItem(array);
    };
  });
}
slider();