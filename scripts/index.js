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

function addCard(cardData) {
  const templateCard = document.querySelector("#template-card");
  const cardElement = templateCard.content.cloneNode(true);

  const nameElement = cardElement.querySelector(".elements__card-name");
  nameElement.textContent = cardData.name;
  
  const imageElement = cardElement.querySelector(".elements__card-img");
  imageElement.src = cardData.image;
  imageElement.alt = cardData.name;

  const popupImage = document.querySelector(".popup_image");

  imageElement.addEventListener("click", () => {
    const popupZoom = document.querySelector(".popup__img_zoom");
    popupZoom.src = cardData.image;
    const popupDescription = document.querySelector(".popup__description");
    popupDescription.textContent = cardData.name;
    popupImage.classList.add("popup_opened");
  });
  
  const closeZoom = document.querySelector(".popup_close-zoom");
  closeZoom.addEventListener("click", () => {
    popupImage.classList.remove("popup_opened");
  })

  const cardList = document.querySelector(".elements__card");
  cardList.prepend(cardElement);

  const trashButton = document.querySelector(".elements__button-trash");
  trashButton.addEventListener("click", () => {
    const removeElement = trashButton.closest(".elements__li");
    removeElement.remove();
  });

  const likeButton = document.querySelector(".elements__button-like");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("elements__button-like_click");
  });
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

const addPopupButton = document.querySelector(".profile__add-button");
const cardName = document.querySelector(".elements__card-name");
const cardImage = document.querySelector(".elements__card-img");
const inputImage = document.querySelector(".popup__form-input_link");
const popupAdd = document.querySelector(".popup__add");
const closePopupAddButton = document.querySelector(".popup_close");

addPopupButton.addEventListener("click", () => {
  popupAdd.classList.add("popup_opened");
  inputName.value = "";
  inputImage.value = "";
});

closePopupAddButton.addEventListener("click", function() {
  popupAdd.classList.remove("popup_opened");
});


const formAdd = document.querySelector(".popup__form_add");

formAdd.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const card = {
    name: inputName.value,
    image: inputImage.value,
  };

  addCard(card);
  popupAdd.classList.remove("popup_opened");
});