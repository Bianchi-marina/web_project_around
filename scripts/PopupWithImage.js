import Popup from "./Popup.js";

class PopupWithImage extends Popup {
    constructor(popupElement, imageElement, captionElement) {
      super(popupElement);
      this._imageElement = imageElement;
      this._captionElement = captionElement;
    }
  
    open(imageUrl, imageCaption) {
      super.open();
      this._imageElement.src = imageUrl;
      this._imageElement.alt = imageCaption;
      this._captionElement.textContent = imageCaption;
    }
  }
  
  export default PopupWithImage;