import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email');
const message = document.querySelector('textarea[name="message');
const DATA_FROM_STORAGE = 'feedback-form-state';
 
form.addEventListener('input', throttle(e => {
    const objectToSave = { email: email.value, message: message.value };
    localStorage.setItem(DATA_FROM_STORAGE, JSON.stringify(objectToSave))
}, 500))

form.addEventListener('submit', e => {
    e.preventDefault();
    if (email.value === ' ' || message.value === ' ') {
        return alert('Заповніть всі поля');
    }
    console.log({ email: email.value, message: message.value });
    form.reset();
    localStorage.removeItem(DATA_FROM_STORAGE);
})

const load = key => {
  try {
    const serializedState = localStorage.getItem(key); 
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(DATA_FROM_STORAGE);

if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;
}


