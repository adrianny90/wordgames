const player = process.argv[2].toLowerCase();
//console.log(player);
const bag = ["rock", "scissors", "paper"];
const randomIndex = Math.floor(Math.random() * bag.length);
const computer = bag[randomIndex];
//console.log(computer);
if (player === computer) {
  console.log(
    `You chose ${player} computer chose ${computer}. There is a draw.`
  );
} else {
  if (player === "rock") {
    switch (computer) {
      case "paper":
        console.log(
          `You chose ${player} computer chose ${computer}. You lose...`
        );
        break;
      case "scissors":
        console.log(`You chose ${player} computer chose ${computer}. You win!`);
        break;
    }
  } else if (player === "paper") {
    switch (computer) {
      case "scissors":
        console.log(
          `You chose ${player} computer chose ${computer}. You lose...`
        );
        break;
      case "rock":
        console.log(`You chose ${player} computer chose ${computer}. You win!`);
        break;
    }
  } else {
    //player scissors
    switch (computer) {
      case "rock":
        console.log(
          `You chose ${player} computer chose ${computer}. You lose...`
        );
        break;
      case "paper":
        console.log(`You chose ${player} computer chose ${computer}. You win!`);
        break;
    }
  }
}
