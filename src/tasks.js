function tasks() {
  const taskForm = document.querySelector("#task");
  const taskInput = document.querySelector("#task input");
  const tasksTable = document.querySelector(".tasks");

  taskForm.addEventListener("submit", (e) => {
    tasksTable.innerHTML += `
    <tr>
    <td>${taskInput.value}</td>
    <td><input type="date" /></td>
    <td><i class="fa-solid fa-trash"></i></td>
    </tr>`;
    e.preventDefault();
  });

  tasksTable.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
      e.target.parentElement.parentElement.remove();
    }
  });
}

export default tasks;
