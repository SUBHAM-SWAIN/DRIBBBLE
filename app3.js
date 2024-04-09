let menuicon = document.querySelector("#menuicon");
let menubox = document.querySelector("#menu");
menuicon.addEventListener("click", () => {
    menubox.classList.remove("hidden");
    console.log("clicked");
  });
  
  menubox.addEventListener("click", () => {
    menubox.classList.add("hidden");
  });