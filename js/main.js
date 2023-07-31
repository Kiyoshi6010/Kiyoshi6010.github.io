const zoom = document.querySelectorAll(".zoom");

zoom.forEach(function (value) {
value.addEventListener("click", () => {
value.classList.toggle("in");
});
});