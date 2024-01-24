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
import Api from "../components/Api.js";

//>>>>>>>>> instancia api >>>>>>>>>>>>
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_ptbr_08",
  headers: {
    authorization: "55ee091e-fdde-4068-8e71-e71a57ad15b5",
    "Content-Type": "application/json"
  }
});

const popupSelector = ".popup_image";
const imageElement = document.querySelector(".popup__img-zoom");
const captionElement = document.querySelector(".popup__description");
const popupWithImage = new PopupWithImage(popupSelector, imageElement, captionElement, () => handleImageClick());
popupWithImage.setEventListeners();

//>>>>>>>>>>> infos cards iniciais >>>>>>>>>>
const cardSection = new Section({
  renderer: () => {
    api.getInitialCards()
      .then((result) => {
        const initialCardsFromServer = result;
        cardSection.render(initialCardsFromServer.map(cardData => {
          const newCard = new Card(cardData, "#template-card", popupWithImage);
          // newCard.setCardId(result._id); //>>>>>>>>>> ID do cartão criado
          // newCard._updateLikeStatus(); //>>>>>>>>>>estado de like inicial
          return newCard.generateCard();
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  },
}, ".elements__card");

//>>>>>>>>>>> infos user me >>>>>>>>>>>>>>>>>>>
  const userInfo = new UserInfo(selectors);

  api.getUserInformation()
    .then((result) => {
      const userInformationFromServer = result;
  
      userInfo.setUserInfo(userInformationFromServer.name, userInformationFromServer.about);
    })
    .catch((err) => {
      console.log(err); 
    });

//>>>>>>>>>>> edit profile name e about - colocar na formprofile >>>>>>>>>>>>>>>
const popupProfile = new PopupWithForm({
  popupSelector: ".popup",
  submitCallback: ({ name , about }) =>
  { 
    api.editProfile({ name, about })
      .then((result) => {
        console.log(result);
        userInfo.setUserInfo(name, about);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupProfile.setEventListeners();

openFormButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  popupProfile.open();
});

//>>>>>>>. create a new card = form Add >>>>>>>>>>>>>>>>>>>>>>>>>
const popupAddForm = new PopupWithForm({
  popupSelector: ".popup-add",
  submitCallback: () => {
    api.createNewCard({
      name: document.querySelector(".popup__form-input_title").value,
      link: document.querySelector(".popup__form-input_link").value,
    })
      .then((result) => {
        console.log(result);

        const newCard = new Card(result, "#template-card", popupWithImage);
        // newCard.setCardId(result._id); //>>>>>>>>>> ID do cartão criado
        // newCard._updateLikeStatus(); //>>>>>>>>>>estado de like inicial

        const cardElement = newCard.generateCard();
        document.querySelector(".elements__card").prepend(cardElement);

        popupAddForm.close();
      })
      .catch((err) => {
        console.log(err);
      });
  },
});
popupAddForm.setEventListeners();
openAddButton.addEventListener("click", () => {
  popupAddForm.open();
});

// >>>>>>>>>>>criar logica do popup EDIT AVATAR PROFILE>>>>>>>>>>>>>>>>>>
const editAvatar = new PopupWithForm({
  popupSelector: ".popup-edit",
  submitCallback: () => {
    api.editAvatar({
      avatarUrl: document.querySelector(".profile__edit-avatar-img").value,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  },
});
editAvatar.setEventListeners();
const openEditAvatarPopup = document.querySelector(".profile__edit-avatar-img");
openEditAvatarPopup.addEventListener("click", () => {
editAvatar.open();
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

