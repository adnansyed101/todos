// modal selectors
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
// change tab selectors
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
// task selectors
const taskForm = document.querySelector("#task");
const taskInput = taskForm.querySelector("input");
const tasksTable = document.querySelector(".tasks");
const cancelBtn = document.querySelector(".cancel-btn");

export {
  openModalButtons,
  closeModalButtons,
  overlay,
  tabs,
  tabContents,
  taskForm,
  taskInput,
  tasksTable,
  cancelBtn,
};
