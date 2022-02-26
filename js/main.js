var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elResultPeople = document.querySelector(".people")
var elResultBycicle = document.querySelector(".bycicle")
var elResultCar = document.querySelector(".car")
var elResultAirplane = document.querySelector(".airplane")



function timepeople(people){
    elForm.addEventListener("submit" , function(event){
        event.preventDefault();

     var elInputVal = elInput.value;

     return elResultPeople.textContent = Math.round(elInputVal / people) + " soat"
  })
}

function timebycicle(bycicle){
  elForm.addEventListener("submit" , function(event){
      event.preventDefault();

   var elInputVal = elInput.value;

   return elResultBycicle.textContent = Math.round(elInputVal / bycicle) + " soat"
})
}

function timecar(car){
  elForm.addEventListener("submit" , function(event){
      event.preventDefault();

   var elInputVal = elInput.value;

   return elResultCar.textContent = Math.round(elInputVal / car) + " soat"
})
}

function timeairplane(airplane){
  elForm.addEventListener("submit" , function(event){
      event.preventDefault();

   var elInputVal = elInput.value;

   return elResultAirplane.textContent = Math.round(elInputVal / airplane) + " soat"
})
}

    
console.log(timepeople(3.6));
console.log(timebycicle(20.1));
console.log(timecar(70));
console.log(timeairplane(800));
