const cookie = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
let k = Number(clicker__counter.textContent);
function changeSizes() {
  k++;
  if (cookie.width === 200) {
    cookie.width = cookie.width + 20;
    clicker__counter.textContent = k;
  } else {
    cookie.width = 200;
    clicker__counter.textContent = k;
  }
}

cookie.onclick = changeSizes;