import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForms.js";  
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  formAdd,
  formProfileElement,
  openFormButton,
  inputName,
  inputAbout,
  openAddButton,
  selectors,
} from "../components/utils.js";
import Api from "../components/API.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_08",
  headers: {
    authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5",
    "Content-Type": "application/json",
  }
});

const popupSelector = ".popup_image";
const imageElement = document.querySelector(".popup__img-zoom");
const captionElement = document.querySelector(".popup__description");
const popupWithImage = new PopupWithImage(popupSelector, imageElement, captionElement, () => handleImageClick());
popupWithImage.setEventListeners();

api.getInitialCards()
  .then((initialCards) => {
        const cardSection = new Section({
          items: initialCards,
          renderer: (item) => {
            const newCard = new Card(item, "#template-card", popupWithImage);
          const cardElement = newCard.generateCard(); 
          cardSection.addItem(cardElement);
        },
      },
      ".elements__card"
    );
    cardSection.render();
  })
  .catch((err) => {
    console.log(err); 
  });

api.addCard({
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
})
  .then((newCard) => {
    console.log("Novo cartão adicionado:", newCard);
  })
  .catch((err) => {
    console.log(err);
  });


const userInfo = new UserInfo(selectors);

const popupProfile = new PopupWithForm({
  popupSelector: ".popup",
  submitCallback: ({ name , about }) =>
  {
    userInfo.setUserInfo(name, about);
  },
});
popupProfile.setEventListeners();

openFormButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  popupProfile.open();
});

const popupAddForm = new PopupWithForm({
  popupSelector: ".popup-add",
  submitCallback: () => {
    const dataCard = {
      name: document.querySelector(".popup__form-input_title").value,
      image: document.querySelector(".popup__form-input_link").value,
    };
    const newCard = new Card(dataCard, "#template-card", popupWithImage);
    const cardElement = newCard.generateCard();
    document.querySelector(".elements__card").prepend(cardElement);
  },
});
popupAddForm.setEventListeners();
openAddButton.addEventListener("click", () => {
  popupAddForm.open();
});

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

const formValidatorProfile = new FormValidator(formConfig, formProfileElement); 
formValidatorProfile.enableValidation();