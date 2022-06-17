function day() {
    var element = document.body;
    element.classList.add("day-mode");
    element.classList.remove("dark-mode");
    element.classList.remove("blue-mode");
}
function dark() {
    var element = document.body;
    element.classList.add("dark-mode");
    element.classList.remove("day-mode");
    element.classList.remove("blue-mode");
}
function blue() {
    var element = document.body;
    element.classList.add("blue-mode");
    element.classList.remove("dark-mode");
    element.classList.remove("day-mode");
}