let greeting;
let destination;
let tip;
let farewell;

function scuberGreetingForFeet(someValue){
 if (someValue <= 400){
  greeting = "This one is on me!"
 }
 else if (someValue > 2500){
  greeting = "No can do."
}
else if (someValue > 2000){
    greeting = "I will gladly take your thirty bucks."
}
else if (someValue > 400){
      greeting = "That will be twenty bucks."
}
return greeting;
}

function ternaryCheckCity(destination){
  let response = (destination === "NYC") ? "Ok, sounds good." : "No go.";
  return response;
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      farewell = "Thank you so much.";
      break;
    case 'not as generous':
      farewell = "Thank you.";
      break;
    default:
      farewell = "Bye.";
  }
  return farewell;
}