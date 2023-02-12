const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);
const buttonElement = formElement.querySelector('.form__add-button');
const showInputError = (element, errorMessage) => {
    element.classList.add('form__input_type_error');
    formError.textContent = errorMessage;
    formError.classList.add('form__input-error_active');
};
const hideInputError = (element) => {
    element.classList.remove('form__input_type_error');
    formError.classList.remove('form__input-error_active');
    formError.textContent = '';
};
const toggleButtonState = () => {
    if (!formInput.validity.valid) {
        buttonElement.classList.add('form__add-button_disabled');
        buttonElement.setAttribute('disabled', 'disabled');
    } else {
        buttonElement.classList.remove('form__add-button_disabled');
        buttonElement.removeAttribute('disabled', 'disabled');
    }
};
const isValid = () => {
    if (!formInput.validity.valid) {
        showInputError(formInput, formInput.validationMessage);
        toggleButtonState();
    } else {
        hideInputError(formInput);
        toggleButtonState();
    }
};
formInput.addEventListener('input', isValid);