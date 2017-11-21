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

var inc = 10;



submitInfo.addEventListener("click",function(event){

    event.preventDefault();

    var vel = Number(velInput.value);
    var acc = Number(accInput.value);
    var tak = Number(takInput.value);
    var total = vel + acc + tak;
    console.log(vel);
    console.log(acc);
    console.log(tak);
    var pcol;
    var ccol;

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


    if ( total == 10 ){
      console.log("fubar");
      submitLayout.classList.add("hidden");
      racePlat.classList.remove("hidden");
      car1.classList.add(pcol);
      console.log(car1);
      car2.classList.add(ccol);
      console.log(car2);


    }else{
      console.log(total);
      alert("Attributes Must Equate to 10");
      location.reload();
    }

});




raceStart.addEventListener("click",function(event){

  event.preventDefault();

  var vel = Number(velInput.value);
  var acc = Number(accInput.value);
  var tak = Number(takInput.value);
  var total = vel + acc + tak;

  var pcol;
  var ccol;

  var d = new Date();
  var n = d.getSeconds();
  console.log(n);


  car2.classList.add("caranim2");


  car1.style.bottom = ((inc + "%"));

  inc = inc + (.3*vel) + (.3*acc) + (.2*tak);


  setTimeout(function() { if ( inc > 70 ){
      announceWinner.textContent = "PLAYER 1 WINS";
    } else if ( inc < 70 ) {
        announceWinner.textContent = "COMPUTER WINS";
    }
      announceWinner.classList.remove("hidden");
    } ,3000);

});
