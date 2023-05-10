const buttonsClear = document.getElementById('buttonsClear');

buttonsSend.onclick = function (event) {
event.preventDefault();

let user = {
    tower: document.getElementById('tower').value,
    floor: document.getElementById('floor').value,
    room: document.getElementById('room').value,
    data: document.querySelector('.container-date-time').value,
    comments: document.getElementById('container-comment-text').value,
}
let userJson = JSON.stringify(user);
console.log(userJson);
}

const textarea = document.querySelector('container-comment-text');
const button = document.querySelector('buttonsClear');

buttonsClear.addEventListener('click', function(){
    document.getElementById("data").value = '';
    document.getElementById("container-comment-text").value = '';
    document.getElementById("tower").value = '';
    document.getElementById("floor").value = '';
    document.getElementById("room").value = '';
  })