let Name = document.querySelector("#name");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let creatAccountBtn = document.querySelector("#create-account-btn");
let alertMsg = document.querySelector("li");
let alerticon = document.querySelector("#alerticon");
let check = document.querySelector("#box");

let count = 1;

check.addEventListener("click", () => {
  count++;
});

let nameArr = ["Subham"];
let userNameArr = ["subham"];
let passwordArr = ["subham@789"];
let emailArr = ["subham123@gmail.com"];

let pushAll = (name, userName, email, password) => {
  nameArr.push(name);
  userNameArr.push(userName);
  emailArr.push(email);
  passwordArr.push(password);
};
let chakeUserName = (username) => {
  let isTrue = true;
  for (let i of userNameArr) {
    if (username === i) {
      userName.classList.add("wrong");
      alertMsg.classList.add("alert");
      alertMsg.classList.remove("hide");
      alerticon.classList.add("alerticon");
      alerticon.classList.remove("hideicon");

      isTrue = false;
    }
  }
  return isTrue;
};

creatAccountBtn.addEventListener("click", () => {
  if (
    Name.value === "" ||
    userName.value === "" ||
    email.value === "" ||
    password.value === ""
  ) {
    alert("something is not filled");
  } else if (chakeUserName(userName.value)) {
    if (count % 2 == 0) {
      pushAll(Name.value, userName.value, email.value, password.value);

      location.replace("/profile.html");
    } else {
      alert("select check box");
    }
  } else {
  }
});
