export const openModal = (modalElement) => {
    modalElement.classList.add("popup_opened");
};
  
export const closeModal = (modalElement) => {
    modalElement.classList.remove("popup_opened");
};
  
export const addEscCloseListener = (modalElement) => {
    const escCloseHandler = (event) => {
      if (event.key === 'Escape') {
        closeModal(modalElement);
        document.removeEventListener('keydown', escCloseHandler);
      }
    };
  
    document.addEventListener('keydown', escCloseHandler);
};

export const addButtonCloseListener = (modalElement, closeButtonSelector) => {
    const closeButton = modalElement.querySelector(closeButtonSelector);
  
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closeModal(modalElement);
      });
    }
};
  