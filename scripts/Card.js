export class Card {
  constructor(cardData, cardTemplateSelector) {
    this._name = cardData.name;
    this._image = cardData.image;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__card-img").src = this._image;
    this._element.querySelector(".elements__card-name").textContent = this._name;
    this._element.querySelector(".elements__card-img").alt = this._name;
    this._setEventListeners();
    return this._element;
  }

  _handleOpenPopup() {
    const popupImage = this._element.querySelector(".popup_image");
    popupImage.classList.add("popup_opened");

    const imageElement = this._element.querySelector(".popup__img-zoom");
    imageElement.src = this._image;
    imageElement.alt = this._name;

    const textElement = this._element.querySelector(".popup__description");
    textElement.textContent = this._name;
  }

  _handleClosePopup() {
    const popupImage = this._element.querySelector(".popup_image");
    popupImage.classList.remove("popup_opened");
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this._handleOpenPopup();
    });

    const closePopupAddButton = this._element.querySelector(".popup__close-zoom");
    closePopupAddButton.addEventListener("click", () => {
      this._handleClosePopup();
    });

    const trashButton = this._element.querySelector(".elements__button-trash");
    trashButton.addEventListener("click", () => {
      const removeElement = trashButton.closest(".elements__li");
      removeElement.remove();
    });

    const likeButton = this._element.querySelector(".elements__button-like");
    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("elements__button-like_click");
    });
  }
}
