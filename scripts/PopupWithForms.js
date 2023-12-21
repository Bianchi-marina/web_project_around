import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupElement, formSubmit) {
    super(popupElement);
    this._formSubmit = formSubmit;
    this._formElement = this._popup.querySelector(".popup__form");
  }

  _getInputValues() {
    const inputValues = {};
    const inputList = this._formElement.querySelectorAll(".popup__form-input");

    inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._formSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}

export default PopupWithForm;
