import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super(popupSelector);
    this._submitCallback = submitCallback;
  }

  open(card) {
      this._card = card;
      super.open();
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._card).then(() => {
        this.close();
      });
    });
  }
}