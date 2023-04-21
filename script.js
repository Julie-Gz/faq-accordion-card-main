"use strict"
//Variables
const container = document.querySelectorAll(".question-container");
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

//Function
for(let i=0; i<container.length; i++){
    container[i].addEventListener("click", function(){
        this.classList.toggle("active");
        
    })
}
