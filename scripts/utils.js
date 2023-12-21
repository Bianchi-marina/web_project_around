import Popup from "./Popup.js";

const popupElement = document.querySelector(".popup");
const popup = new Popup(popupElement);
popup.setEventListeners();

const popupElementAdd = document.querySelector(".popup-add");
const popupAdd = new Popup(popupElementAdd);
popupAdd.setEventListeners();

const editPopupButton = document.querySelector(".profile__edit-button");
const profileForm = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__form-input_name"); 
const inputAbout = document.querySelector(".popup__form-input_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__job");
const inputTitle = document.querySelector(".popup__form-input_title");
const inputImage = document.querySelector(".popup__form-input_link");
const addLink = document.querySelector(".elements__card-img");
const addName = document.querySelector(".elements__card-name");


editPopupButton.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popup.open();
});

profileForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popup.close();
});

const addPopupButton = document.querySelector(".profile__add-button");
addPopupButton.addEventListener("click", () => {
  inputTitle.value = addName.textContent;
  inputImage.value =  addLink.scr;
  popupAdd.open();
});

const addForm = document.querySelector(".popup__form_add");

addForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addName.textContent = inputTitle.value ;
  addLink.scr = inputImage.value;
  popup.close();
});


// const popup = document.querySelector(".popup");
// const editPopupButton = document.querySelector(".profile__edit-button");
// const closePopupButton = document.querySelector(".popup__close-icon");
// const profileForm = document.querySelector(".popup__form");
// const inputName = document.querySelector(".popup__form-input_name"); 
// const inputAbout = document.querySelector(".popup__form-input_about");
// const profileName = document.querySelector(".profile__name");
// const profileAbout = document.querySelector(".profile__job");
// const addPopupButton = document.querySelector(".profile__add-button");
// const cardName = document.querySelector(".elements__card-name");
// const inputTitle = document.querySelector(".popup__form-input_title");
// const cardImage = document.querySelector(".elements__card-img");
// const inputImage = document.querySelector(".popup__form-input_link");
// const popupAdd = document.querySelector(".popup-add");
// const closePopupAddButton = document.querySelector(".popup__close");
// const popupImage = document.querySelector(".popup_image");
// const closeImage = popupImage.querySelector(".popup__close-zoom");
// const popupFormAdd = document.querySelector(".popup__form_add");

// editPopupButton.addEventListener("click", function () {
//   popup.classList.add("popup_opened");
//   inputName.value = profileName.textContent;
//   inputAbout.value = profileAbout.textContent;
// });

// closePopupButton.addEventListener("click", function() {
//   popup.classList.remove("popup_opened")
// });

// profileForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   profileName.textContent = inputName.value;
//   profileAbout.textContent = inputAbout.value;
//   popup.classList.remove("popup_opened");
// });

// addPopupButton.addEventListener("click", () => {
//   inputTitle.value = "";
//   inputImage.value = "";
//   popupAdd.classList.add("popup_opened");
// });

// closePopupAddButton.addEventListener("click", () => {
//   popupAdd.classList.remove("popup_opened");
// });


// document.addEventListener("keydown", function escapePopup(evt) {
//   if (evt.key === "Escape") {
//     popup.classList.remove("popup_opened");
//     popupAdd.classList.remove("popup_opened");
//     popupImage.classList.remove("popup_opened");
//   }
//   evt.target.removeEventListener("keydown", escapePopup);
// });

// function onClick(evt) {
//   evt.target.classList.remove("popup_opened");
// }
// popup.addEventListener("click", onClick);
// popupImage.addEventListener("click", onClick);
// popupAdd.addEventListener("click", onClick);





