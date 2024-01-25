export default class Card {
  constructor(dataCard,  templateSelector, popupWithImage, handleDeleteClick,  handleAddLike,
    handleRemoveLike) {
    this._link = dataCard.link;
    this._name = dataCard.name;
    this._data = dataCard;
    this.owner = dataCard.owner._id;
    this._cardId = dataCard._id;
    this._templateSelector = templateSelector;
    this._popupWithImage = popupWithImage;
    this._handleDeleteClick = handleDeleteClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#template-card")
      .content.querySelector(".elements__li")
      .cloneNode(true);

    return cardElement;
  }
  
  removeElement() {
    this._element.remove();
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".elements__card-img").src = this._link;
    this._element.querySelector(".elements__card-name").alt = this._name;
    this._element.querySelector(".elements__card-name").textContent = this._name;

    const trashDeleteOwner = () => {
      const myId = "7555a63afa45f53ca9c0cefa";
      if (this.owner === myId) {
        this._element
          .querySelector(".elements__trash")
          .classList.add("elements__trash_hidden");
        return true;
      }
    };
    trashDeleteOwner();
    
    return this._element;
  }

  _like() {
    const likeButton = this._element.querySelector(".elements__button-like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("elements__button-like_click");
    });
  }

  _trash() {
    const trashButton = this._element
    .querySelector(".elements__trash");
    trashButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  _updatedLike(card) {
    const likeButton = document.querySelector("elements__button-like");
    const likeCount = document.querySelector("elements__like-count");
    likeCount.textContent = card.likes.length;

  }


  _setEventListeners() {
    this._like();
    this._trash();
    this._element.querySelector(".elements__card-img").addEventListener("click", () => {
      this._handleImageClick();
    });
  }

  _handleImageClick() {
    this._popupWithImage.open(this._link, this._name);
  }
}