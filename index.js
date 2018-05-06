function dwarfRollCall(dwarves) {
  let dwarvesArray = [];
  for (let i = 0; i < dwarves.length; i++) {
  dwarvesArray.push(`${i + 1}. ${dwarves[i]}`);
}
 return dwarvesArray.join(' ');
}

function summonCaptainPlanet(planeteerCalls){
  let planeteerArray = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    planeteerArray.push(`${i.toUpperCase}!`)
  }
  return planeteerArray;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese(foods) {
   let iHazCheese = ["cheddar"]
    for (let i = 0; i < foods.length; i++) {
      for (let j = 0; j < iHazCheese.length; j++) {
        if (foods[i] === iHazCheese[j]) {
          return foods[i];
      } 
    }
  } 
  return 'no cheese!' 
}