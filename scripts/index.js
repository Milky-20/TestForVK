const form = document.getElementById('container-forma');

form.addEventListener('submit', callbackFunction);

function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    console.log(myFormData);
}

const formDataObj = {};
myFormData.forEach((value, key) => (formDataObj[key] = value));
