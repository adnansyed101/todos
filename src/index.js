const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const filterInput = document.querySelector("#filter");
const clearTasksBtn = document.querySelector(".clear-tasks");

class Task {
  constructor(task) {
    this.task = task;
  }
}

// UI function class
class UI {
  // Add task
  static addTask(task) {
    // create li
    const li = document.createElement("li");
    li.classList = "collection-item";
    li.appendChild(document.createTextNode(task));
    // create link
    const link = document.createElement("a");
    link.classList = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append link to li
    li.appendChild(link);
    // append link to task list
    taskList.appendChild(li);
  }

  //   Clear task
  static clearTaskInput() {
    taskInput.value = "";
  }

  //   Remove task
  static removeTask(target) {
    if (confirm("Are you sure?")) {
      if (target.classList.contains("delete-item")) {
        target.parentElement.remove();
      }
    }
  }

  //   Clear Task
  static clearTasks() {
    if (confirm("Are you sure?")) {
      taskList.innerHTML = "";
    }
  }

  //   Filter task
  static filterTask() {
    const text = filterInput.value.toLowerCase();
    document.querySelectorAll(".collection-item").forEach(function (task) {
      let item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = "block";
      } else {
        task.style.display = "none";
      }
    });
  }

  //   display tasks
  static displayTasks() {
    const tasks = Store.getTasks();

    tasks.forEach(function (task) {
      UI.addTask(task);
    });
  }
}

// Store class
class Store {
  static getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    return tasks;
  }

  //   add tasks from LS
  static addTasks(task) {
    const tasks = Store.getTasks();

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  //   Remove Tasks From LS
  static removeTasks(target) {
    const tasks = Store.getTasks();
    tasks.forEach(function (task, index) {
      if (target.textContent === task) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  //   Clear LS
  static clearLs() {
    localStorage.clear();
  }
}

// window event
window.addEventListener("DOMContentLoaded", function () {
  UI.displayTasks();
});

// Add Task event
form.addEventListener("submit", function (e) {
  const task = taskInput.value;

  if (taskInput.value === "") {
    alert("Please Insert Task.");
  } else {
    // Add task
    UI.addTask(task);

    // Store to ls
    Store.addTasks(task);

    // Clear task
    UI.clearTaskInput();
  }

  e.preventDefault();
});

// Remove Task Event
taskList.addEventListener("click", function (e) {
  UI.removeTask(e.target.parentElement);

  Store.removeTasks(e.target.parentElement.parentElement);
});

// Clear tasks Event
clearTasksBtn.addEventListener("click", function () {
  UI.clearTasks();

  Store.clearLs();
});

// filter task
filterInput.addEventListener("keyup", function () {
  UI.filterTask();
});
