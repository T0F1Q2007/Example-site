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