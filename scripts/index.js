import Card from "./Card.js";
import  FormValidator  from "./FormValidator.js";

const forms = document.querySelector(".popup__form");

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
  const cardInstance = new Card(card, "#template-card");
  const cardsContainer = document.querySelector(".elements__card");

  cardsContainer.prepend(cardInstance.generateCard());

  return cardInstance;
}

initialCards.forEach((card) => {
  addCard(card);
});

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const inputTitle = document.querySelector(".popup__form-input_title");
  const inputImage = document.querySelector(".popup__form-input_link");
  const popupAdd = document.querySelector(".popup__form_add");
  const card = {
    name: inputTitle.value,
    link: inputImage.value,
  };
  addCard(card);
  popupAdd.classList.remove("popup_opened");
  document.querySelector(".popup__form_add").reset();
}
forms.addEventListener("submit", handleCardFormSubmit);

const formList = Array.from(document.querySelectorAll(".popup__form"));
formList.forEach((formElement) => {
  const formValidator = new FormValidator(
    {
      formSelector: ".popup__form",
      inputSelector: ".popup__form-input",
      submitButtonSelector: ".popup__button-submit",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__error_visible",
    },
    formElement
  );

  formValidator.enableValidation();
});