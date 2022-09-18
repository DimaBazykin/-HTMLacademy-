const loginLink = document.querySelector(".contact-button");
const loginPopup = document.querySelector(".modal-form");
const formClose = document.querySelector(".modal-form .modal-close");
const loginform = document.querySelector(".form-name input");
const emailform = document.querySelector(".form-email input");
const map = document.querySelector(".map-small");
const modalmap = document.querySelector(".modal-map");
const mapClose = modalmap.querySelector(".modal-close");

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  loginform.focus();
});

loginPopup.addEventListener("submit", function (evt) {
  if (!loginform.value || !emailform.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("login", loginform.value);
  }
});

loginPopup.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (loginPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      loginPopup.classList.remove("modal-show");
    }
  }
});

formClose.addEventListener("click", function (evt){
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
});

map.addEventListener("click", function (evt){
  evt.preventDefault();
  modalmap.classList.add("modal-show");
});

modalmap.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalmap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalmap.classList.remove("modal-show");
    }
  }
});

mapClose.addEventListener("click", function (evt){
  evt.preventDefault();
  modalmap.classList.remove("modal-show");
});
