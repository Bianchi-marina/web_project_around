export default class Popup {
    constructor(popupElement) {
      this._popup = popupElement;
      this._closeButton = this._popup.querySelector(".popup__close-icon");
      this._handleEscClose = this._handleEscClose.bind(this);
      this._handleOverlayClick = this._handleOverlayClick.bind(this);
    }
  
    _handleEscClose(event) {
      if (event.key === "Escape") {
        this.close();
      }
    }
  
    _handleOverlayClick(event) {
      if (event.target === this._popup) {
        this.close();
      }
    }
  
    setEventListeners() {
      this._closeButton.addEventListener("click", () => {
        this.close();
      });
    
      this._popup.addEventListener("click", this._handleOverlayClick);
    }
  
    open() {
      this._popup.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }
}
  