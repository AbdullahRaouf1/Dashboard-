// Auto Progress Bar
let percent = document.querySelectorAll(".progg span");
percent.forEach(function (el) {
  if (el.style.width >= "0%" && el.style.width < "20%") {
    el.className = "bg-red";
  } else if (el.style.width >= "20%" && el.style.width < "40%") {
    el.className = "bg-orange";
  } else if (el.style.width >= "40%" && el.style.width < "60%") {
    el.className = "bg-purple";
  } else if (el.style.width >= "60%" && el.style.width < "80%") {
    el.className = "bg-blue";
  } else {
    el.className = "bg-green";
  }
});
//Random Nums
let nums = document.querySelectorAll(".auto-num");
let persons = document.querySelectorAll(".auto-person span");
let friend = document.querySelectorAll(".auto-friend");
let project = document.querySelectorAll(".auto-project");
let article = document.querySelectorAll(".auto-article");
let extention = document.querySelectorAll(".card-img img");
let size = document.querySelectorAll(".auto-sm-num");
let date = document.querySelectorAll(".auto-date");

nums.forEach((el) => {
  el.innerHTML = "$" + Math.floor(Math.random() * 2600);
});
persons.forEach((el) => {
  el.innerHTML = Math.floor(Math.random() * 2600);
});
project.forEach((el) => {
  el.innerHTML = Math.floor(Math.random() * 50) + " Projects";
});
friend.forEach((el) => {
  el.innerHTML = Math.floor(Math.random() * 100) + " Friends";
});
article.forEach((el) => {
  el.innerHTML = Math.floor(Math.random() * 100) + " Articles";
});
//Random Image
var myPix = new Array(
  "./images/pdf.svg",
  "./images/avi.svg",
  "./images/dll.svg",
  "./images/eps.svg",
  "./images/png.svg",
  "./images/zip.svg",
  "./images/psd.svg"
);
extention.forEach(function (el) {
  var randomNum = Math.floor(Math.random() * myPix.length);
  el.src = myPix[randomNum];
});

size.forEach((el) => {
  el.innerHTML = (Math.random() * (9 - 1 + 1) + 1).toFixed(1) + "MB";
});
date.forEach((el) => {
  el.innerHTML =
    Math.floor(Math.random() * (30 - 1 + 1) + 1)  +
    "/" +
    Math.floor(Math.random() * (12 - 1 + 1) + 1) +
    "/" +
    Math.floor(Math.random() * (2023 - 2020 + 1) + 2020);
});
