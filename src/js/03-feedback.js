import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const KEY_FORM = "feedback-form-state";
let localStorageData = {};

fillLocalStorageData();
function fillLocalStorageData() {
    const storageData = JSON.parse(localStorage.getItem(KEY_FORM));
    if (storageData) {
        inputEl.value = storageData.email;
        textareaEl.value = storageData.message;
    }
}

formEl.addEventListener('input', throttle(saveFormData, 500));
function saveFormData(event) {
    localStorageData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(localStorageData));
}


formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    console.log(localStorageData);
    event.currentTarget.reset();
    localStorage.removeItem(KEY_FORM);
};

