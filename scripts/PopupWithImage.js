import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageElement, captionElement, handleImageClick) {
    super(popupSelector);
    this._imageElement = imageElement;
    this._captionElement = captionElement;
    this._handleImageClick = handleImageClick;
  }

  open(image, caption) {
    super.open();
    this._imageElement.src = image;
    this._captionElement.textContent = caption;
  }

  setEventListeners() {
    super.setEventListeners();
    this._imageElement.addEventListener("click", () => {
      this._handleImageClick();
    });
  }
}
