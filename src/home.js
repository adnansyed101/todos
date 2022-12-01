function active() {
  const sidebarBtns = document.querySelectorAll("ul .btn");

  sidebarBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("active")) {
        btn.classList.add("active");
      }
      btn.classList.remove("active");
      console.log("hello world");
    });
  });
  console.log("hello world");
}

export { active };
