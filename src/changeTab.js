function changeTab(evt, state) {
  let tabContent = document.getElementsByClassName("tabContent");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  const tablinks = document.getElementsByClassName("btn");

  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(state).style.display = "block";
  evt.currentTarget.className += " active";
}



export { changeTab };
