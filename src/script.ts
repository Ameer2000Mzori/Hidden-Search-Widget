// getting our elements
const textBox = document.querySelector(".text-Box") as HTMLElement;
const searchBtn = document.querySelector(".search-Icon") as HTMLElement;
// our global varibales

// our functions
const openHandler = (): void => {
  console.log("hallo world");
  if (!textBox.classList.contains("active")) {
    textBox.classList.add("active");
  } else if (textBox.classList.contains("active")) {
    textBox.classList.remove("active");
  }
};

// our event lisnters
searchBtn.addEventListener("click", openHandler);
