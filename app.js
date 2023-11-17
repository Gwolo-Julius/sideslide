const container = document.querySelector(".container");
const closeBtn = document.querySelector(".close_btn");
const menuToggle = document.querySelector(".menu");
const modalElement = document.querySelector(".modal");

closeBtn.addEventListener("click", closeFn);
menuToggle.addEventListener("click", openFn);
modalElement.addEventListener("click", closeFn);

function closeFn() {
  modalElement.classList.add("modal_toggle");
  container.classList.add("close");
}
function openFn() {
  modalElement.classList.remove("modal_toggle");
  container.classList.remove("close");
}
