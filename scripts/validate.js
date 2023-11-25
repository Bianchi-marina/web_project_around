const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__error_visible");
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
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_disabled");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("popup__button_disabled");
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

const resetFormState = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__form-input"));
  const buttonElement = formElement.querySelector(".popup__button-submit");

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
    inputElement.value = "";
    toggleButtonState(inputList, buttonElement);
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (
        !hasInvalidInput(
          Array.from(formElement.querySelectorAll("popup__form-input"))
        )
      ) {
        resetFormState(formElement);
      }
    });
    formElement.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") {
        if (
          hasInvalidInput(
            Array.from(formElement.querySelectorAll(".popup__form-input"))
          )
        ) {
          evt.preventDefault();
        }
      }
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(".popup__set")
    );

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});