// importing our css
import "./style.css";

// Getting our elements
var textBox = document.getElementsByClassName("text-Box")[0] as HTMLElement;
var searchBtn = document.getElementsByClassName(
  "search-Icon"
)[0] as HTMLElement;

// Our function
var toggleActiveClass = (): void => {
  textBox.classList.toggle("active");
};

// Our event listener
searchBtn.addEventListener("click", toggleActiveClass);
