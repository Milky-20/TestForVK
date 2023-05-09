// const form = document.getElementById('container-forma');
// const tower = form.querySelector('[name="tower"]'),
// floor = form.querySelector('[name="floor"]'), 
// room = form.querySelector('[name="room"]'), 
// data = form.querySelector('[name="data"]'),
// comments = form.querySelector('[name="comments"]'); 

// form.addEventListener('submit', getFormValue);

// function getFormValue(event) {
//     event.preventDefault();
// }
// const object = {
//     tower: tower.value,
//     floor: floor.value,
//     room: room.value,
//     data: data.checked,
//     comments: comments.value
// };
// console.log(object);

// const form = document.getElementById('container-forma');
// form.addEventListener('submit', handleFormSubmit)

// function handleFormSubmit(event) {
//     // Просим форму не отправлять данные самостоятельно
//     event.preventDefault()
//     console.log('Отправка!')
//   }

buttonsSend.onclick = function (event) {
event.preventDefault();

let user = {
    tower: document.getElementById('tower').value,
    floor: document.getElementById('floor').value,
    room: document.getElementById('room').value,
    data: document.getElementById('data').value,
    comments: document.getElementById('comments').innerText,
}
let userJson = JSON.stringify(user);
console.log(userJson);
}
