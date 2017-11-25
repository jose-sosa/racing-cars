//js



var raceStart = document.querySelector("#startrace");


var car1 = document.querySelector("#racer1");


var car2 = document.querySelector("#racer2");

var announceWinner = document.querySelector("#announcement");

var submitInfo = document.querySelector("#submit-information");

var submitLayout = document.querySelector("#divlay");

var racePlat = document.querySelector("#race-plat");

var velInput = document.querySelector("#velocity-input");

var accInput = document.querySelector("#acceleration-input");

var takInput = document.querySelector("#takeoff-input");

var playerColor = document.getElementsByName('playercolor');

var compColor = document.getElementsByName('compcolor');

var difficulty = document.getElementsByName('difficulty');

var inc = 10;

var incByDifficulty;


submitInfo.addEventListener("click",function(event){

    event.preventDefault();



    var pcol;
    var ccol;
    var diff;

    for (var i = 0, length = playerColor.length; i < length; i++){
       if (playerColor[i].checked)
       {
         pcol = playerColor[i].value;
         console.log(pcol);
        break;
       }
    }

    for (var i = 0, length = compColor.length; i < length; i++){
       if (compColor[i].checked)
       {
         ccol = compColor[i].value;
        console.log(ccol);
        break;
       }
    }

    for (var i = 0, length = difficulty.length; i < length; i++){
       if (difficulty[i].checked)
       {
         diff = difficulty[i].value;
        console.log(diff);
        break;
       }
    }

    if (diff == "easy"){
      incByDifficulty= 3.5;
    }else if (diff == "medium") {
      incByDifficulty= 2.5;
    } else{
      incByDifficulty= 1.7;
    }

    if (diff == "easy"){
      incByDifficulty= 3.5;
    }else if (diff == "medium") {
      incByDifficulty= 2.5;
    } else if (diff == "hard"){
      incByDifficulty= 1.7;
    }else{
      incByDifficulty=.5;
    }
    

      console.log("fubar");
      submitLayout.classList.add("hidden");
      racePlat.classList.remove("hidden");
      car1.classList.add(pcol);
      console.log(car1);
      car2.classList.add(ccol);
      console.log(car2);


      // console.log(total);
      // alert("Attributes Must Equate to 10");
      // location.reload();


});




raceStart.addEventListener("click",function(event){

  event.preventDefault();


  car2.classList.add("caranim2");


  car1.style.bottom = ((inc + "%"));

  inc+= incByDifficulty;

  console.log(incByDifficulty);


  setTimeout(function() { if ( inc > 70 ){
      announceWinner.textContent = "PLAYER 1 WINS";
    } else if ( inc < 70 ) {
        announceWinner.textContent = "COMPUTER WINS";
    }
      announceWinner.classList.remove("hidden");
    } ,3000);

  setTimeout(function(){location.reload();},5000)

});

//============================================================================
