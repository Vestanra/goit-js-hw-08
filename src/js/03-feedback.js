import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

const KEY_FORM = "feedback-form-state";

let localStorageData = JSON.parse(localStorage.getItem(KEY_FORM)) ?? {};

fillLocalStorageData();
function fillLocalStorageData() {
    if (localStorageData.email) {
        inputEl.value = localStorageData.email;
    } if (localStorageData.message) {
        textareaEl.value = localStorageData.message;
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
    if (inputEl.value.trim().length === 0 || textareaEl.value.trim().length === 0) {
        alert('fill out the form')
        return
    } else {
        console.log(localStorageData);
        localStorageData.email = '';
        localStorageData.message = '';
        event.currentTarget.reset();
        localStorage.removeItem(KEY_FORM);
    };  
};
