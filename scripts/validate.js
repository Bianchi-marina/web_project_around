const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__form-input_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__form-error_visible");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__form-input_error");
  errorElement.classList.remove("popup__form-error_visible");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_disabled");
  } else {
    buttonElement.classList.remove("popup__button_disabled");
  }
};

const setEventListeners = (formElement) => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  const buttonElement = formElement.querySelector(".popup__button-submit");
  
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  });

  toggleButtonState(formList, buttonElement);
};

const enableValidation = () => {
  const formElement = document.querySelector(".popup__form");
  const inputList = formElement.querySelectorAll(".popup__form-input");

  inputList.forEach((input) => {
    input.addEventListener("inpur", (evt) => {
      checkInputValidity(evt.target);
      setEventListeners(formElement);
    });
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__form-input_error",
  errorClass: "popup__form-error_visible",
  fieldsetSelector: ".popup__form-set",
});