import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import * as utils from './utils.js';

const cardTemplateSelector = '#template-card';

const cardData = [
  {
    name: 'Vale de Yosemite',
    image: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
  },
  {
    name: 'Lago Louise',
    image: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
  },
  {
    name: 'Montanhas Carecas',
    image: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg',
  },
  {
    name: 'Latemar',
    image: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg',
  },
  {
    name: 'Parque Nacional da Vanoise',
    image: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg',
  },
  {
    name: 'Lago di Braies',
    image: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg',
  }
];

cardData.forEach((item) => {
  const card = new Card(item, cardTemplateSelector);
  const cardElement = card.generateCard();
  document.querySelector('.elements__card').append(cardElement);
});

const formValidatorConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__button-submit',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const formElement = document.querySelector('.popup__form');
const formValidator = new FormValidator(formValidatorConfig, formElement);
formValidator.enableValidation();

const modalElements = document.querySelectorAll('.popup, .popup-add, .popup_image');
modalElements.forEach((modal) => {
  utils.addEscCloseListener(modal);
  utils.addButtonCloseListener(modal, '.popup__close');
});