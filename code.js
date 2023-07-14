const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890@#!$%";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}
var counterElement = document.getElementById("logns");
var logns = localStorage.getItem("logns") || 0;
counterElement.innerHTML = logns;
localStorage.setItem("logns", ++logns);
window.onload = function() {
    alert("This's a tutorial site. All rights reserved 2023©");
};
function checkInput(event) {
  if (event.keyCode === 13) {
    var input = document.getElementById("input").value;
    if (input === "wallet") {
      var button = document.getElementById("myButton");
      button.href = "https://bit.ly/mywalled";
      button.style.display = "block";
    }
    else if (input === "music1") {
      var button = document.getElementById("myButton");
      button.href = "images/music1.mp3";
      button.style.display = "block";
    }
    else{
      alert("Unautohorized!")
    }
  }
}
document.cookie = "Cookie=chocolate";
var date = new Date();
date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
var expires = "expires=" + date.toUTCString();

document.cookie = "Cookie=chocolate; " + expires;
