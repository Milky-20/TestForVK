const form = document.getElementById('container-forma');
const tower = form.querySelector('[name="tower"]'),
floor = form.querySelector('[name="floor"]'), 
room = form.querySelector('[name="room"]'), 
data = form.querySelector('[name="data"]'),
comments = form.querySelector('[name="comments"]'); 

form.addEventListener('submit', getFormValue);

function getFormValue(event) {
    event.preventDefault();
}
const object = {
    tower: tower.value,
    floor: floor.value,
    room: room.value,
    data: data.checked,
    comments: comments.value
};
console.log(object);

// const form = document.getElementById('container-forma');
// form.addEventListener('submit', handleFormSubmit)

// function serializeForm(formNode) {
//     console.log(formNode.elements)
//   }
  
//   function handleFormSubmit(event) {
//     event.preventDefault()
//     serializeForm(form)
//   }