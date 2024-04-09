let options1 = document.querySelector("#option1");
let checkbox1 = document.querySelector("#box1");
let options2 = document.querySelector("#option2");
let checkbox2 = document.querySelector("#box2");
let options3 = document.querySelector("#option3");
let checkbox3 = document.querySelector("#box3");
let finishBtn = document.querySelector("#finish");
let option1isSelect = 1;
let option2isSelect = 1;
let option3isSelect = 1;

options1.addEventListener("click", () => {
  option1isSelect++;
  if (option1isSelect % 2 == 0) {
    console.log("option1");
    options1.classList.add("selected");
    checkbox1.classList.add("checked");
    console.log(option1isSelect);
  } else {
    options1.classList.remove("selected");
    checkbox1.classList.remove("checked");
  }
});
options2.addEventListener("click", () => {
  option2isSelect++;
  if (option2isSelect % 2 == 0) {
    console.log("option2");
    options2.classList.add("selected");
    checkbox2.classList.add("checked");
  } else {
    options2.classList.remove("selected");
    checkbox2.classList.remove("checked");
  }
});
options3.addEventListener("click", () => {
  option3isSelect++;
  if (option3isSelect % 2 == 0) {
    console.log("option3");
    options3.classList.add("selected");
    checkbox3.classList.add("checked");
  } else {
    options3.classList.remove("selected");
    checkbox3.classList.remove("checked");
  }
});

finishBtn.addEventListener("click", () => {
  if (
    option1isSelect % 2 == 0 ||
    option2isSelect % 2 == 0 ||
    option3isSelect % 2 == 0
  ) {
    location.replace("/lastpage.html");
  }
});
