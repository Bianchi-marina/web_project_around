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

///>>>>>>>>>>>criarção da section com initial cards>>>>>>>>>>>>>>>
const cardSection = new Section({
  renderer: (cardData) => {
    const newCard = new Card(cardData, "#template-card", popupWithImage);
    cardSection.addItem(newCard.generateCard());
  },
}, ".elements__card");

api.getInitialCards()
  .then((result) => {
    cardSection.render(result);
  })
  .catch((err) => {
    console.log(err);
  });

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

//>>>>>>>>>>>>>>>>>>>>>>>>>>>New card>>>>>>>>>>>>>>>>>.......
const popupAddForm = new PopupWithForm({
  popupSelector: ".popup-add",
  submitCallback: () => {
    const cardData = {
      name: document.querySelector(".popup__form-input_title").value,
      link: document.querySelector(".popup__form-input_link").value,
    };

    api.createNewCard(cardData)
    .then(() => {
      return api.getInitialCards();
    })
    .then((updatedData) => {
      cardSection.render(updatedData);
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

// // >>>>>>>>>>>criar logica do popup EDIT AVATAR PROFILE>>>>>>>>>>>>>>>>>>
// const editAvatar = new PopupWithForm({
//   popupSelector: ".popup-edit",
//   submitCallback: () => {
//     api.editAvatar({
//       avatarUrl: document.querySelector(".profile__edit-avatar-img").value,
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   },
// });
// editAvatar.setEventListeners();
// const openEditAvatarPopup = document.querySelector(".profile__edit-avatar-img");
// openEditAvatarPopup.addEventListener("click", () => {
// editAvatar.open();
// });


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

