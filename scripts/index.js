const popup = document.querySelector(".popup");
const editPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-icon");
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__form-input_name"); 
const inputAbout = document.querySelector(".popup__form-input_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__job");
const addPopupButton = document.querySelector(".profile__add-button");
const cardName = document.querySelector(".elements__card-name");
const inputTitle = document.querySelector(".popup__form-input_title");
const cardImage = document.querySelector(".elements__card-img");
const inputImage = document.querySelector(".popup__form-input_link");
const popupAdd = document.querySelector(".popup-add");
const closePopupAddButton = document.querySelector(".popup__close");
const popupImage = document.querySelector(".popup_image");

editPopupButton.addEventListener("click", function () {
    popup.classList.add("popup_opened");
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
});

closePopupButton.addEventListener("click", function() {
    popup.classList.remove("popup_opened")
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popup.classList.remove("popup_opened");
}
  
form.addEventListener("submit", handleProfileFormSubmit);

addPopupButton.addEventListener("click", () => {
  popupAdd.classList.add("popup_opened");
  inputTitle.value = "";
  inputImage.value = "";
});

closePopupAddButton.addEventListener("click", function() {
  popupAdd.classList.remove("popup_opened");
});


const formAdd = document.querySelector(".popup__form_add");

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector(".popup__form-input_title");
  const inputImage = document.querySelector(".popup__form-input_link");

  const cardData = {
    name: inputTitle.value,
    image: inputImage.value,
  };
  
  addCard(cardData);
  popupAdd.classList.remove("popup_opened");
} 

formAdd.addEventListener("submit", handleCardFormSubmit);

const closePopups = (event) => {
  if (event.key === 'Escape') {
    popup.classList.remove("popup_opened");
    popupImage.classList.remove("popup_opened");
    popupAdd.classList.remove("popup_opened");
  } 
  event.target.removeEventListener('keydown', closePopups);

  if (event.target) {
    event.target.classList.remove("popup_opened");
  }
  event.target.removeEventListener('click', closePopups);
}

document.addEventListener('keydown', closePopups);
document.addEventListener('click', closePopups);


const initialCards = [
    {
      name: "Vale de Yosemite",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    },
    {
      name: "Lago Louise",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    },
    {
      name: "Montanhas Carecas",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
    },
    {
      name: "Latemar",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
    },
    {
      name: "Parque Nacional da Vanoise ",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    }
];

const popupElement = document.querySelector(".elements__card");
const popupZoom = document.querySelector(".popup__img-zoom");

function handleOpenPopup() {
  popupImage.classList.add("popup_opened");
  const imageElement = document.querySelector(".popup__img-zoom");
  imageElement.src = this._image;
  imageElement.alt = this._name;
  const textElement = document.querySelector(".popup__description");
  textElement.textContent = this._name;
}

function handleClosePopup() {
  popupImage.classList.remove("popup_opened");
}

import Card from "./Card.js";

//As classes Card e FormValidator devem ser exportadas de seus arquivos correspondentes,
// e então você deve importá-las e implementá-las dentro do index.js.
//Certifique-se de que os arquivos JS estejam conectados ao index.html como módulos.