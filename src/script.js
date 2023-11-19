// getting our elements
var textBox = document.querySelector(".text-Box");
var searchBtn = document.querySelector(".search-Icon");
// our global varibales
// our functions
var openHandler = function () {
    console.log("hallo world");
    if (!textBox.classList.contains("active")) {
        textBox.classList.add("active");
    }
    else if (textBox.classList.contains("active")) {
        textBox.classList.remove("active");
    }
};
// our event lisnters
searchBtn.addEventListener("click", openHandler);
