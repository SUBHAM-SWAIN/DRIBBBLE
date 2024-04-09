let profilepic = document.querySelector(".image");
let inputfile = document.querySelector("#input-file");
let nextbtn = document.querySelector("#next-btn");
let locations = document.querySelector("#location");


inputfile.onchange = function () {
  let url = URL.createObjectURL(inputfile.files[0]);
  profilepic.src = url;
};

nextbtn.addEventListener("click", () => {
  if (locations.value === "") {
    alert("enter location");
  } else {
    location.replace("/content.html");
  }
});





