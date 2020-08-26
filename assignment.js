//assignment-2 feet to mile
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(25500);
console.log(result);

 //assignment-2 wood calculator
 function woodCalculator(chair, table, bed){
     var chair = chair * 6;
     var table = table * 1;
     var bed = bed * 1;
     var totalWood = chair + table + bed;
     return totalWood;
 }
 var woodResult = woodCalculator(3, 6, 7);
 console.log(woodResult);


 //assignment-3 brickCalculator

function brickCalculator(floor){  
var feet = 1000;
    if(floor <= 10){
      var step1 = feet * 15 * floor;
      return step1;
    }
    else if(floor >= 11 && floor <= 20){
      var step2 = feet * 12 * floor;
      return step2;
    }
  
    else if(floor >= 21){
      var step3 = feet * 10 * floor;
      return step3;
    }
  }
  var result = brickCalculator(10);
  console.log(result);

  //assignment-4 tinyFriend
  function tinyFriend(names){
    var nextName = names[0];

    for(var i = 0; i < names.length; i++){
        var currentName = names[i];
        if (nextName.length > currentName.length){
          nextName = currentName;
        }
    }
    return nextName;
}

var smallName = tinyFriend(['rohim', 'korim', 'sharmin', 'rony', 'roy']);
console.log(smallName);
   
