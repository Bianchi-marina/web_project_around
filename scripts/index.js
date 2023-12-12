import Card from "./Card.js";
import  FormValidator  from "./FormValidator.js";

const popupFormAdd = document.querySelector(".popup__form_add");


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
    name: "Parque Nacional da Vanoise",
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  }
];

function addCard(card) {
  const newCard = new Card(card, "#template-card");
  const elementCard = document.querySelector(".elements__card");

  elementCard.prepend(newCard.generateCard());

  return elementCard;
}

initialCards.forEach((card) => {
  addCard(card);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const popupAdd = document.querySelector(".popup-add");
  const inputTitle = document.querySelector(".popup__form-input_title");
  const inputImage = document.querySelector(".popup__form-input_link");
  const card = {
    name: inputTitle.value,
    image: inputImage.value,
  };
  addCard(card);
  popupAdd.classList.remove("popup_opened");
}

popupFormAdd.addEventListener("submit", handleCardFormSubmit);

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formProfile = document.querySelector(".popup__form");
const formValidatorProfile = new FormValidator(formConfig, formProfile);
formValidatorProfile.enableValidation();

const formAdd = document.querySelector(".popup__form_add");
const formValidatorAdd = new FormValidator(formConfig, formAdd);
formValidatorAdd.enableValidation();

