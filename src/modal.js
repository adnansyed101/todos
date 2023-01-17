import { openModalButtons, closeModalButtons, overlay } from "./variables";

function modal() {
  openModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  function openModal(modal) {
    if (modal === null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }

  overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
      closeModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      closeModal(modal);
    });
  });

  function closeModal(modal) {
    if (modal === null) return;
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

export default modal;
