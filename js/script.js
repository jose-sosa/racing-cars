//js



var raceStart = document.querySelector("#startrace");


var car1 = document.querySelector("#racer1");


var car2 = document.querySelector("#racer2");

var announceWinner = document.querySelector("#announcement");

var inc = 10;


raceStart.addEventListener("click",function(event){

  event.preventDefault();

  var d = new Date();
  var n = d.getSeconds();
  console.log(n);


  car2.classList.add("caranim2");


  car1.style.bottom = ((inc + "%"));

  inc = inc + 3;

  setTimeout(function() { if ( inc > 70 ){
      announceWinner.textContent = "PLAYER 1 WINS";
    } else if ( inc < 70 ) {
        announceWinner.textContent = "COMPUTER WINS";
    }} ,3000);
});





  //
  // statistics1.textContent = "FIGHTER. GUN. TWO-SHOTS";
  // statistics2.textContent = "GRAPPLER. FISTS. CHOCKEHOLD";
