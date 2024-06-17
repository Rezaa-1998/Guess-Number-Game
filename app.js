const computer = Math.floor(Math.random() * 101);
console.log(`computer selected : ${computer}`);
let numberOfGuess = 5;

const Validation = (value) => {
  if (isNaN(value) || value == "") {
    return `Enter a valid Number \nYou have ${numberOfGuess} more chances`;
  }
  if (value % 1 !== 0) {
    return `Enter a Integer \nYou have ${numberOfGuess} more chances`;
  }
  if (value < 0 || value > 100) {
    return `Enter a  Number Between 0 and 100\nYou have ${numberOfGuess} more chances`;
  }
  if (value == null) {
    return "lose";
  }
};

const checkGuess = (player) => {
  numberOfGuess--;
  if (numberOfGuess == 0) {
    play();
    return;
  }
  if (+player === computer) {
    alert("You win 🎈");
    return;
  } else if (player > computer) {
    alert(`Enter a Lower Number \nYou have ${numberOfGuess} more chances`);
    play();
  } else {
    alert(`Enter a higher Number \nYou have ${numberOfGuess} more chances`);
    play();
  }
};
const play = () => {
  if (numberOfGuess < 1) {
    alert("Game over 💔");
    return;
  }
  let player = prompt("Enter a number between 0 and 100");
  console.log(`You selected : ${player}`);

  if (Validation(player) == "lose") {
    alert("Game over 💔");
    return;
  } else if (Validation(player)) {
    alert(Validation(player));
    play();
  } else {
    checkGuess(player);
  }
};

play();
