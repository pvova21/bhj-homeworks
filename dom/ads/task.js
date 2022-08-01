const blurb = document.querySelectorAll('span.rotator > .rotator__case');
let textColor = blurb[0].getAttribute('data-color'); 
blurb[0].setAttribute('style', "color: " + textColor);
let flag = true;

function blurbToggle() {
  if (flag) {
    flag = false;
    let element;
    const currentTextBlock = document.querySelector('.rotator__case_active');
    const nextTextBlock = currentTextBlock.nextElementSibling;
    nextTextBlock ? element = nextTextBlock : element = blurb[0];
    timeOut = element.getAttribute('data-speed');    
    currentTextBlock.classList.remove('rotator__case_active');
    textColor = element.getAttribute('data-color');
    element.classList.add('rotator__case_active');
    element.setAttribute('style', "color: " + textColor);
    const delayResponse = setTimeout(() => {
      flag = true;
    }, timeOut);
  }
}

const timer1 = setInterval(() => blurbToggle(), 1);