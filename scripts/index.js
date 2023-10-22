let popup = document.querySelector(".popup");
let editPopupButton = document.querySelector(".profile__edit-button");
let closePopupButton = document.querySelector(".popup__close-icon");

editPopupButton.addEventListener("click", function () {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
});

closePopupButton.addEventListener("click", function() {
    popup.classList.remove("popup_opened")
});

let form = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__form-input_name"); 
let aboutInput = document.querySelector(".popup__form-input_about");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__job");

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popup.classList.remove("popup_opened");
  }
  
  form.addEventListener("submit", handleProfileFormSubmit);
