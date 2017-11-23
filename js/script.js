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

  setTimeout(function(){location.reload();},5000)

});

//============================================================================




class CreditCard {


  constructor(cN,rT,rE,bB,bBM,yB){
    this.cardName = cN;
    this.rateTravel = rT;
    this.rateEverything = rE;
    this.bigBonus = bB;
    this.bigBonusMinimum = bBM;
    this.yearlyBudget = yB;
    this.travelSpent;
    this.everythingSpent;
    this.maximumRate = Math.max(this.rateTravel,this.rateEverything);

    }

  yearlyReturn (moneySpent) {

    if (moneySpent< this.bigBonus){
      var ret= moneySpent*rateEverything;
      return(ret);
    } else {
      var ret= this.bigBonusMinimum + moneySpent*this.rateEverything;
      return(ret);
    }

 }
}



card1 = new CreditCard("AMEX",.03,.01,0,0,1400);
card2 = new CreditCard("DISCOVER",0,.02,100,500,1400);
card3 = new CreditCard("BOFA",.01,.01,200,1400,300);



var maxTravelRate = Number( Math.max(card1.rateTravel,card2.rateTravel,card3.rateTravel) );


var maxEverythingRate = Number( Math.max(card1.rateEverything,card2.rateEverything,card3.rateEverything) );



var maxRate = Math.max(maxTravelRate,maxEverythingRate);










var totalYearlyBudget = 2000;
var yearlyTravelBudget;
var yearlyEverthingBudget;
var travelSpent;
var everythingSpent;






var worthIt;

function bonusWorthIt (card){
  if (card.yearlyBudget < card.bigBonusMinimum) {
      worthIt=false;
      return(worthIt);
      }
    else if (card.bigBonusMinimum * maxRate < ( (card.bigBonusMinimum * card.rateEverything) + card.bigBonus ) ) {
      worthIt =true;
      return(worthIt);
      }
    else{
    worthIt=false;
    return(worthIt);
    }
}

bonusWorthIt(card1);
bonusWorthIt(card2);
bonusWorthIt(card3);

console.log(bonusWorthIt(card1));
console.log(bonusWorthIt(card2));
console.log(bonusWorthIt(card3));
console.log(card3.maximumRate);


function allocate(card){

    if (bonusWorthIt(card) == false){
      if(card.maximumRate == maxRate){
        card.yearlyBudget = totalYearlyBudget;
        console.log( ("You should spend $" + card.yearlyBudget + " on " + card.cardName ) );
        return(card.yearlyBudget);
      } else{
        card.yearlyBudget = 0;
        console.log( ("You should spend $" + card.yearlyBudget + " on " + card.cardName ) );
        return(card.yearlyBudget);
      }

    }

    else {
      console.log("fubar");

      if (card.maximumRate == maxRate){
        card.yearlyBudget = totalYearlyBudget;
        console.log( ("You should spend $" + card.yearlyBudget + " on " + card.cardName ) );
        return(card.yearlyBudget);
      } else{
          card.yearlyBudget = card.bigBonusMinimum;
          totalYearlyBudget = Number(totalYearlyBudget - card.bigBonusMinimum );
          console.log( ("You should spend $" + card.yearlyBudget + " on " + card.cardName ) );
          return(card.yearlyBudget);

        }
      }

}


console.log(allocate(card1));
console.log(allocate(card2));
console.log(allocate(card3));
