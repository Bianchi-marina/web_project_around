let editPopupButton = document.querySelector(".profile__edit-button");
let closePopupButton = document.querySelector(".popup__close-icon");
let popup = document.querySelector(".popup");

editPopupButton.addEventListener("click", function () {
    popup.classList.add("popup_opened")
});

closePopupButton.addEventListener("click", function() {
    popup.classList.remove("popup_opened")
});

let formElement = document.querySelector("popup__form-input", function() {

});

// Vamos encontrar o formulário no DOM
// let formElement = // Use o método querySelector()

// Em seguida vem o handler do submit
// ainda não vai enviar para lugar nenhum

// Observe que o nome da função começa com um verbo
// e descreve exatamente o que a função faz
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector(".popup__form-input_name");
    let jobInput = document.querySelector(".popup__form-input_about");

    // Pegue os valores de cada campo do valor da propriedade correspondente

    // Selecione os elementos aos quais os valores dos campos serão inseridos

    // Insira novos valores usando a
    // propriedade textContent
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit
formElement.addEventListener('submit', handleProfileFormSubmit); 