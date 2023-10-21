let editPopupButton = document.querySelector(".profile__edit-button");
let closePopupButton = document.querySelector(".popup__close-icon");
let popup = document.querySelector(".popup");
let saveButton = document.querySelector(".popup__button-submit");

editPopupButton.addEventListener("click", function () {
    popup.classList.add("active")
});

closePopupButton.addEventListener("click", function() {
    popup.classList.remove("active")
});

let form = document.querySelector("popup__form-input",
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector(".popup__form-input_name");
    let jobInput = document.querySelector(".popup__form-input_about");
    popup.style.display = "none";
});

form.addEventListener('submit', handleProfileFormSubmit); 