let popup = document.querySelector(".popup");
let editPopupButton = document.querySelector(".profile__edit-button");
let closePopupButton = document.querySelector(".popup__close-icon");
let form = document.querySelector(".popup__form");
let inputName = document.querySelector(".popup__form-input_name"); 
let inputAbout = document.querySelector(".popup__form-input_about");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__job");

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
