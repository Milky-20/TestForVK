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
