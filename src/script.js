"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing our css
require("./style.css");
// Getting our elements
var textBox = document.getElementsByClassName("text-Box")[0];
var searchBtn = document.getElementsByClassName("search-Icon")[0];
// Our function
var toggleActiveClass = function () {
    textBox.classList.toggle("active");
};
// Our event listener
searchBtn.addEventListener("click", toggleActiveClass);
