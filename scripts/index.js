import Card from "./Card.js";
import  FormValidator  from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForms.js";


const popupFormAdd = document.querySelector(".popup__form_add");
// const popupImage = document.querySelector(".popup_image");
const popupElement = document.querySelector(".popup_image");
const imageElement = popupElement.querySelector(".popup__img-zoom");
const captionElement = popupElement.querySelector(".popup__description");

const popupWithImage = new PopupWithImage(popupElement, imageElement, captionElement);


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

  const imageElement = elementCard.querySelector(".elements__card-img");
  
  imageElement.addEventListener("click", () => {
    popupWithImage.open(card.image, card.name);
  });

  return elementCard;
}

initialCards.forEach((card) => {
  addCard(card);
});
// function addCard(card) {
//   const newCard = new Card(card, "#template-card");
//   const elementCard = document.querySelector(".elements__card");

//   elementCard.prepend(newCard.generateCard());

//   const imageElement = elementCard.querySelector(".elements__card-img");
//   imageElement.src = card.image;
//   imageElement.alt = card.name;

//   imageElement.addEventListener("click", () => {
//     const popupZoom = document.querySelector(".popup__img-zoom");
//     popupZoom.src = card.image;
//     const popupDescription = document.querySelector(".popup__description");
//     popupDescription.textContent = card.name;
//     popupImage.classList.add("popup_opened");
//   });

//   const closeZoom = document.querySelector(".popup__close-zoom");
//   closeZoom.addEventListener("click", () => {
//     popupImage.classList.remove("popup_opened");
//   })

//   return elementCard;
// }

// initialCards.forEach((card) => {
//   addCard(card);
// });


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

// popupFormAdd.addEventListener("submit", handleCardFormSubmit);


// const formConfig = {
//   formSelector: ".popup__form",
//   inputSelector: ".popup__form-input",
//   submitButtonSelector: ".popup__button-submit",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

// const formProfile = document.querySelector(".popup__form");
// const formValidatorProfile = new FormValidator(formConfig, formProfile);
// formValidatorProfile.enableValidation();

// const formAdd = document.querySelector(".popup__form_add");
// const formValidatorAdd = new FormValidator(formConfig, formAdd);
// formValidatorAdd.enableValidation();

const popupAdd = document.querySelector(".popup-add");
const popup = document.querySelector(".popup");

const formAdd = document.querySelector(".popup__form_add");
const formProfile = document.querySelector(".popup__form");
const formConfig = {
  formSelector: ".popup__form_add",
  inputSelector: ".popup__form-input",
  submitButtonSelector: ".popup__button-submit",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const formValidatorAdd = new FormValidator(formConfig, formAdd);
formValidatorAdd.enableValidation();

const formValidatorProfile = new FormValidator(formConfig, formProfile);
formValidatorProfile.enableValidation();

const popupWithFormAdd = new PopupWithForm(popupAdd, handleCardFormSubmit);
const popupWithFormProfile = new PopupWithForm(popup,handleCardFormSubmit);


popupFormAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  formValidatorAdd.disableSubmitButton();
  popupWithFormAdd.open();
});


popupWithFormProfile.addEventListener("submit", (evt) => {
  evt.preventDefault();
  formValidatorProfile.disableSubmitButton();
  popupWithFormProfile.open();
});



