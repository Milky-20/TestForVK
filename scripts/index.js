const buttonsClear = document.getElementById('buttonsClear');

buttonsSend.onclick = function (event) {
event.preventDefault();

let user = {
    tower: document.getElementById('tower').value,
    floor: document.getElementById('floor').value,
    room: document.getElementById('room').value,
    data: document.getElementById('data').value,
    comments: document.getElementById('comments').value,
}
let userJson = JSON.stringify(user);
console.log(userJson);
}

const textarea = document.querySelector('container-comment-text');
const button = document.querySelector('buttonsClear');

buttonsClear.addEventListener('click', () => {
    const formData = new FormData();
    form.formData = formData;
  });
