export default class Card {
  constructor(dataCard,  templateSelector, popupWithImage) {
    // this._api = api;
    this._link = dataCard.link;
    this._name = dataCard.name;
    //adicionei um this._likes>>>>>>>>>>>>>>>>
    // this._likes = dataCard.likes || [];
    this._templateSelector = templateSelector;
    this._popupWithImage = popupWithImage;
    // this._id = dataCard._id; // >>>>>>>>>>>>ID do cartão
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#template-card")
      .content.querySelector(".elements__li")
      .cloneNode(true);

    return cardElement;
  }
  // //atualizar contagem de like>>>>>>>>>>>>>>>>>>>>>>
  // _updateLikesCount() {
  //   const likesCountElement = this._element.querySelector(".elements__like-count");
  //   likesCountElement.textContent = this._likes.length;
  // }

  setCardId(cardId) {
    this._id = cardId;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".elements__card-img").src = this._link;
    this._element.querySelector(".elements__card-name").alt = this._name;
    this._element.querySelector(".elements__card-name").textContent = this._name;

    //contagem de likes>>>>>>>>>>>>>>>>>>>>>
    // this._updateLikesCount();

    return this._element;
  }

  _like() {
    const likeButton = this._element.querySelector(".elements__button-like");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("elements__button-like_click");
      this._updateLikeStatus();
    });
  }

  //  //status>>>>>>>>>>>>>>>>>>>>>
  // _updateLikeStatus() {
  //   const likeButton = this._element.querySelector(".elements__button-like");

  //   if (likeButton.classList.contains("elements__button-like_click")) {
  //     this._api.likeCard(this._id)
  //       .then(updatedCard => {
  //         this._likes = updatedCard.likes;
  //         this._updateLikesCount();
  //       })
  //       .catch(err => console.error(err));
  //   } else {
  //     this._api.unlikeCard(this._id)
  //       .then(updatedCard => {
  //         this._likes = updatedCard.likes;
  //         this._updateLikesCount();
  //       })
  //       .catch(err => console.error(err));
  //   }
  // }

  _trash() {
    const trashButton = this._element
    .querySelector(".elements__trash");
    trashButton.addEventListener("click", () => {
      const elementRemove = trashButton.closest(".elements__li");
      elementRemove.remove();
    });
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