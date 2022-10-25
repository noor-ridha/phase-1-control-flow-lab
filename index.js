function scuberGreetingForFeet(ride){
  // Write your code here!
  let result;
  if (ride<= 400) {
    result="This one is on me!"
    return result;
  } else if(ride>400 && ride<2000) {
    result="That will be twenty bucks."
    return result;
  } else if (ride>2000 && ride<2500) {
    result="I will gladly take your thirty bucks."
    return result;
  } else {
    result="No can do."
    return result;
  }
}



function ternaryCheckCity(city){
  // Write your code here!

return ( city === "NYC" ? 'Ok, sounds good.': 'No go.');

}
ternaryCheckCity(city);


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return "Thank you so much.";
      break;
      case "not as generous":
        return "Thank you.";
        break;
        default:
          return "Bye."
  }
}