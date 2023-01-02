function forms() {
  const forms = document.querySelectorAll("form");
  const inputs = document.querySelectorAll(".modal input");
  const cancelBtns = document.querySelectorAll(".cancel-btn");

  cancelBtns.forEach((btn) => {
    btn.addEventListener("click", clearInput);
  });

  forms.forEach((form) => {
    form.addEventListener("submit", clearInput);
  });

  function clearInput() {
    inputs.forEach((input) => {
      input.value = "";
    });
  }
}

export default forms;
