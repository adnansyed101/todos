/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIpO1xuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbGxlY3Rpb25cIik7XG5jb25zdCBmaWx0ZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyXCIpO1xuY29uc3QgY2xlYXJUYXNrc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xlYXItdGFza3NcIik7XG5cbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0YXNrKSB7XG4gICAgdGhpcy50YXNrID0gdGFzaztcbiAgfVxufVxuXG4vLyBVSSBmdW5jdGlvbiBjbGFzc1xuY2xhc3MgVUkge1xuICAvLyBBZGQgdGFza1xuICBzdGF0aWMgYWRkVGFzayh0YXNrKSB7XG4gICAgLy8gY3JlYXRlIGxpXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuY2xhc3NMaXN0ID0gXCJjb2xsZWN0aW9uLWl0ZW1cIjtcbiAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0YXNrKSk7XG4gICAgLy8gY3JlYXRlIGxpbmtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgbGluay5jbGFzc0xpc3QgPSBcImRlbGV0ZS1pdGVtIHNlY29uZGFyeS1jb250ZW50XCI7XG4gICAgbGluay5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYSBmYS1yZW1vdmVcIj48L2k+JztcbiAgICAvLyBhcHBlbmQgbGluayB0byBsaVxuICAgIGxpLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIC8vIGFwcGVuZCBsaW5rIHRvIHRhc2sgbGlzdFxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuXG4gIC8vICAgQ2xlYXIgdGFza1xuICBzdGF0aWMgY2xlYXJUYXNrSW5wdXQoKSB7XG4gICAgdGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIC8vICAgUmVtb3ZlIHRhc2tcbiAgc3RhdGljIHJlbW92ZVRhc2sodGFyZ2V0KSB7XG4gICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImRlbGV0ZS1pdGVtXCIpKSB7XG4gICAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICAgQ2xlYXIgVGFza1xuICBzdGF0aWMgY2xlYXJUYXNrcygpIHtcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gICBGaWx0ZXIgdGFza1xuICBzdGF0aWMgZmlsdGVyVGFzaygpIHtcbiAgICBjb25zdCB0ZXh0ID0gZmlsdGVySW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbGxlY3Rpb24taXRlbVwiKS5mb3JFYWNoKGZ1bmN0aW9uICh0YXNrKSB7XG4gICAgICBsZXQgaXRlbSA9IHRhc2suZmlyc3RDaGlsZC50ZXh0Q29udGVudDtcbiAgICAgIGlmIChpdGVtLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0ZXh0KSAhPSAtMSkge1xuICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vICAgZGlzcGxheSB0YXNrc1xuICBzdGF0aWMgZGlzcGxheVRhc2tzKCkge1xuICAgIGNvbnN0IHRhc2tzID0gU3RvcmUuZ2V0VGFza3MoKTtcblxuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2spIHtcbiAgICAgIFVJLmFkZFRhc2sodGFzayk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gU3RvcmUgY2xhc3NcbmNsYXNzIFN0b3JlIHtcbiAgc3RhdGljIGdldFRhc2tzKCkge1xuICAgIGxldCB0YXNrcztcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSA9PT0gbnVsbCkge1xuICAgICAgdGFza3MgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vICAgYWRkIHRhc2tzIGZyb20gTFNcbiAgc3RhdGljIGFkZFRhc2tzKHRhc2spIHtcbiAgICBjb25zdCB0YXNrcyA9IFN0b3JlLmdldFRhc2tzKCk7XG5cbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9XG5cbiAgLy8gICBSZW1vdmUgVGFza3MgRnJvbSBMU1xuICBzdGF0aWMgcmVtb3ZlVGFza3ModGFyZ2V0KSB7XG4gICAgY29uc3QgdGFza3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAgIHRhc2tzLmZvckVhY2goZnVuY3Rpb24gKHRhc2ssIGluZGV4KSB7XG4gICAgICBpZiAodGFyZ2V0LnRleHRDb250ZW50ID09PSB0YXNrKSB7XG4gICAgICAgIHRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9XG5cbiAgLy8gICBDbGVhciBMU1xuICBzdGF0aWMgY2xlYXJMcygpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfVxufVxuXG4vLyB3aW5kb3cgZXZlbnRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIFVJLmRpc3BsYXlUYXNrcygpO1xufSk7XG5cbi8vIEFkZCBUYXNrIGV2ZW50XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgY29uc3QgdGFzayA9IHRhc2tJbnB1dC52YWx1ZTtcblxuICBpZiAodGFza0lucHV0LnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgSW5zZXJ0IFRhc2suXCIpO1xuICB9IGVsc2Uge1xuICAgIC8vIEFkZCB0YXNrXG4gICAgVUkuYWRkVGFzayh0YXNrKTtcblxuICAgIC8vIFN0b3JlIHRvIGxzXG4gICAgU3RvcmUuYWRkVGFza3ModGFzayk7XG5cbiAgICAvLyBDbGVhciB0YXNrXG4gICAgVUkuY2xlYXJUYXNrSW5wdXQoKTtcbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4vLyBSZW1vdmUgVGFzayBFdmVudFxudGFza0xpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gIFVJLnJlbW92ZVRhc2soZS50YXJnZXQucGFyZW50RWxlbWVudCk7XG5cbiAgU3RvcmUucmVtb3ZlVGFza3MoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbn0pO1xuXG4vLyBDbGVhciB0YXNrcyBFdmVudFxuY2xlYXJUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBVSS5jbGVhclRhc2tzKCk7XG5cbiAgU3RvcmUuY2xlYXJMcygpO1xufSk7XG5cbi8vIGZpbHRlciB0YXNrXG5maWx0ZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24gKCkge1xuICBVSS5maWx0ZXJUYXNrKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==