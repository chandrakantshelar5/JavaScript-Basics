var userwin = 0;
var computerwin = 0;
var round = 0;

function getRandom() {
  var rannum = Math.floor(Math.random() * 4);
  if (rannum == 1) {
    return "rock";
  } else if (rannum == 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function fun(user) {
  var comp = getRandom();
  round++;

  if (user == "rock") {
    if (comp == "paper") {
      console.log("User- " + user + " Computer- " + comp + " Computer Win.");
      computerwin++;
    } else if (comp == "scissor") {
      console.log("User- " + user + " Computer- " + comp + " User Win.");
      userwin++;
    } else {
      console.log("User- " + user + " Computer- " + comp + " Round Tie.");
    }
  }

  if (user == "paper") {
    if (comp == "rock") {
      console.log("User- " + user + " Computer- " + comp + " User Win.");
      userwin++;
    } else if (comp == "scissor") {
      console.log("User- " + user + " Computer- " + comp + " Computer Win.");
      computerwin++;
    } else {
      console.log("User- " + user + " Computer- " + comp + " Round Tie.");
    }
  }

  if (user == "scissor") {
    if (comp == "paper") {
      console.log("User- " + user + " Computer- " + comp + " User Win.");
      userwin++;
    } else if (comp == "rock") {
      console.log("User- " + user + " Computer- " + comp + " Computer Win.");
      computerwin++;
    } else {
      console.log("User- " + user + " Computer- " + comp + " Round Tie.");
    }
  }

  if (round == 5) {
    if (userwin > computerwin) {
      console.log("Game Finished. User Win By " + userwin + ":" + computerwin);
    } else if (userwin < computerwin) {
      console.log("Game Finished. User Win By " + computerwin + ":" + userwin);
    } else {
      console.log("Game Tie. No One Win.");
    }
    round = 0;
    computerwin = 0;
    userwin = 0;
  }
}
