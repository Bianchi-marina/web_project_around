const formElement = document.querySelector(".popup__form");
const formInput = formElement.querySelector(".popup__form-input");
const formError = formElement.querySelector(`.${formInput.id}-error`);


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__form-input_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__form-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__form-input_error");
  errorElement.classList.remove("popup__form-error_active");
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
    buttonElement.classList.add("popup__button-submit_disabled");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("popup__button-submit_disabled");
    buttonElement.removeAttribute("disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__form-input"));
  const buttonElement = formElement.querySelector(".popup__button-submit");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () =>  {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    formList.forEach((formElement) => {
      setEventListeners(formElement);
    });
  });
};

enableValidation();


// enableValidation({
//      formSelector: ".popup__form",
//      inputSelector: ".popup__form-input",
//      submitButtonSelector: ".popup__button-submit",
//      inactiveButtonClass: "popup__button-submit_disabled",
//      inputErrorClass: "popup__form-input_error",
//      errorClass: "popup__error_visible",
// }); 
