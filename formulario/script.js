function formulario() {
  const form = document.getElementById("formulario");
  form.classList.add("show");
}

const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", () => {
  const form = document.getElementById("formulario");
  form.classList.remove("show");
});