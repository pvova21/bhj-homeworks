const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.responseType = 'json';

xhr.addEventListener('readystatechange', function () {
  if (xhr.readyState === xhr.DONE) {
    let resp = xhr.response;
    pollTitle.innerText = resp.data.title;
    resp.data.answers.forEach((item) => {
      let button = document.createElement("button");
      button.classList.add("poll__answer");
      button.innerText = item;
      pollAnswers.appendChild(button);
    });
    document.querySelectorAll('.poll__answer').forEach((button) => {
      button.addEventListener('click', function (e) {
        alert("Спасибо, ваш голос засчитан!");
      })
    })
  }
})

xhr.send()
