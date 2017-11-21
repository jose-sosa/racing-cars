//js



var raceStart = document.querySelector("#startrace");


var car1 = document.querySelector("#racer1");


var car2 = document.querySelector("#racer2");
var inc = 10;



raceStart.addEventListener("click",function(event){

  event.preventDefault();

  car2.classList.add("caranim2");


  car1.style.bottom = ((inc + "%"));

  inc = inc + 3;


});

if ()






  //
  // statistics1.textContent = "FIGHTER. GUN. TWO-SHOTS";
  // statistics2.textContent = "GRAPPLER. FISTS. CHOCKEHOLD";
