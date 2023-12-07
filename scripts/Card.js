//deve conter o código da classe Card.

//class Card
//card = img/text/ icons(like/trash)/ (zoom (popup))
//metodos de like / trash / generateCard
export default class Card {
  constructor(cardData, cardTemplate) {
    this._name = cardData.name;
    this._image = cardData.image;
    this._cardTemplate = cardTemplate;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector("#template-card")
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

  _setEventListeners() {
    this._element.addEventListener("click", () => {
      this.handleOpenPopup();
    });

    closePopupButton.addEventListener("click", () => {
      this.handleClosePopup();
    });

    const trashButton = this._element
    .querySelector(".elements__button-trash");

    trashButton.addEventListener("click", () => {
    const removeElement = trashButton.closest(".elements__li");
    removeElement.remove();
    });

    const likeButton = this._element
    .querySelector(".elements__button-like");
  
    likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("elements__button-like_click");
    });
  }
}

initialCards.forEach((item) => {
  const card = new Card (item, "#template-card");
  const cardElement = card.generateCard();
  popupElement.prepend(cardElement);
});

// const imageElement = cardElement.querySelector(".elements__card-img");
// imageElement.src = cardData.image;
// imageElement.alt = cardData.name;

// imageElement.addEventListener("click", () => {
//   const popupZoom = document.querySelector(".popup__img-zoom");
//   popupZoom.src = cardData.image;
//   const popupDescription = document.querySelector(".popup__description");
//   popupDescription.textContent = cardData.name;
//   popupImage.classList.add("popup_opened");
// });

// const closeZoom = document.querySelector(".popup__close-zoom");
// closeZoom.addEventListener("click", () => {
//   popupImage.classList.remove("popup_opened");
// })

