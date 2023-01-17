import styles from "./styles.css";
import modal from "./modal";
import { taskForm, tasksTable, cancelBtn } from "./variables";
import changeTabs from "./changeTab";

modal();
changeTabs();

taskForm.addEventListener("submit", (e) => {
  tasksTable.innerHTML += `
      <tr>
      <td>${taskInput.value}</td>
      <td><input type="date" /></td>
      <td><i class="fa-solid fa-trash"></i></td>
      </tr>`;
  taskInput.value = "";
  e.preventDefault();
});

tasksTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

cancelBtn.addEventListener("click", () => (taskInput.value = ""));
