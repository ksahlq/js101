function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(
  rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")
);

// ( rps ( rps("rock", "paper") = "paper" , rps("rock, "scissors") )= "rock" , "rock" )
//  rps( rps("paper", "rock" , "rock" )
//  rps ("paper", rock) = "paper"