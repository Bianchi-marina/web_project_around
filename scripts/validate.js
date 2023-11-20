const checkInputValidity = (input, formElement, config) => {
  const isInputValid = input.checkValidity();
  const errorElement = formElement.querySelectorAll(`.${input.id}-error`);
  if (!isInputValid) {
    input.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = "";
  } else {
    input.classList.add(config.inputErrorClass);
    errorElement.classList.add(config.errorClass);
    errorElement.textContent = input.validationMessage;
  }
}

const checkFormValidity = (formElement, config) => {
  const isFormValid = formElement.checkValidity();
  const submitElement = formElement.querySelector(config.submitButtonSelector);
  if (isFormValid) {
    submitElement.classList.remove(config.inactiveButtonClass);
  } else {
    submitElement.classList.add(config.inactiveButtonClass);
  }
}

const enableValidation = (config) => {
  const formElement = document.querySelector(config.formSelector);
  const inputList = formElement.querySelectorAll(config.inputSelector);
  
  inputList.forEach((input) => { 
    input.addEventListener("input", (evt) => {
      checkInputValidity(evt.target, config);
      checkFormValidity(formElement, config);
    });

  });
}
  
enableValidation();

enableValidation({
     formSelector: ".popup__form",
     inputSelector: ".popup__form-input",
     submitButtonSelector: ".popup__button-submit",
     inactiveButtonClass: "popup__button-submit_disabled",
     inputErrorClass: "popup__form-input_error",
     errorClass: "popup__error_visible",
}); 
