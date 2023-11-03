const popup = document.querySelector(".popup");
const editPopupButton = document.querySelector(".profile__edit-button");
const closePopupButton = document.querySelector(".popup__close-icon");
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__form-input_name"); 
const inputAbout = document.querySelector(".popup__form-input_about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__job");

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

function openPopup(popup) {
    popup.classList.add("popup_opened");
}
  
  function closePopup(popup) {
    popup.classList.remove("popup_opened");
}
  
const popupProductForm = document.querySelector(".popup_product-form");
const buttonOpenProductForm = document.querySelector(".profile__add-button");
  buttonOpenProductForm.addEventListener("click", () => {
    openPopup(popupProductForm);
});
function handleImageFormSubmit(evt) {
    evt.preventDefault();
    inputTitle.textContent = cardTitle.value;
    inputImage.src = cardImage.value;
    popup.classList.remove("popup_opened");
}
form.addEventListener("submit", handleImageFormSubmit);
  
const addPopupButton = document.querySelector(".profile__add-button");
const inputTitle = document.querySelector(".popup__form-input_title"); 
const inputImage = document.querySelector(".popup__form-input_image");
const cardTitle = document.querySelector(".elements__card-name");
const cardImage = document.querySelector(".elements__card-img");

function addCard (cardData) {
    const templateCard = document.querySelector("#template-card");
    const cardElement = templateCard.content.cloneNode(true);

    const nameElement = cardElement.querySelector(".elements__card-name");
    nameElement.textContent = cardData.name;

    const imageElement = cardElement.querySelector(".elements__card-img");
    imageElement.src = cardData.src;
    imageElement.alt = cardData.name;

    const cardList = document.querySelector(".elements__card");
    cardList.append(cardElement);

}

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
      name: "Parque Nacional da Vanoise ",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      image: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    }
];

initialCards.forEach(addCard);