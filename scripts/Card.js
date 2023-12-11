export default class Card {
  constructor(dataCard,  templateSelector) {
    this._image = dataCard.image;
    this._name = dataCard.name;
    this._templateSelector = templateSelector;

  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#template-card")
      .content.querySelector(".elements__cards")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._like();
    this._trash();
    this._element.querySelector(".elements__card-img").src = this._image;
    this._element.querySelector(".elements__card-name").alt = this._name;
    this._element.querySelector(".elements__card-name").textContent = this._name;

    return this._element;
  }

  _openPopupImg() {
    document.querySelector(".popup_image").classList.add("popup__opened");
    const imageElement = document.querySelector(".popup__img-zoom");
    imageElement.src = this._image;
    imageElement.alt = this._name;
    const textElement = document.querySelector(".popup__description");
    textElement.textContent = this._name;
  }

  _closePopupImg() {
    document.querySelector(".popup_image").classList.remove("popup__opened");
  }

  _like() {
    const likeButton = this._element
    .querySelector(".elements__button-like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("elements__button-like_click");
    });
  }

  _trash() {
    const trashButton = this._element
    .querySelector(".elements__trash");
    trashButton.addEventListener("click", () => {
      const elementRemove = trashButton.closest(".elements__card");
      elementRemove.remove();
    });
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__card-img")
      .addEventListener("click", () => {
        this._openPopupImg();
      });

    document.querySelector(".popup__close-zoom").addEventListener("click", () => {
      this._closePopupImg();
    });
  }
}