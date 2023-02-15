import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea')
form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onInputSubmit,500));
const DATA_FROM_STORAGE = 'feedback-form-state';
function onFormSubmit(event) {
    event.preventDefault();
   localStorage.removeItem(DATA_FROM_STORAGE);
    event.target.reset();

    const formData = new FormData(event.currentTarget.value);
    formData.forEach((value, name) => {
        console.log('onFormSubmit => name' , name);
        console.log('onFormSubmit => name' , value);
    })
}


function onInputSubmit(event) {
    const message = event.currentTarget.value;
    localStorage.setItem(DATA_FROM_STORAGE, message);
}
function loadData() {
    const savedMessage = localStorage.getItem(DATA_FROM_STORAGE);
    if (savedMessage) {
        textarea.value = savedMessage;
    }
  }

loadData();

