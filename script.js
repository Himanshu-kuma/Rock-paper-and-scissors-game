let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice")
let userScorepara = document.querySelector("#user-score")
let comScorepara = document.querySelector("#com-score")
const msg = document.querySelector("#msg")

const makecomChoice = () => {
  const options = ["rock","paper","scissors"]
  const random = Math.floor(Math.random() * 3)
  return options[random];
}
const draw = () => {
  msg.innerText = "Math was draw."
  msg.style.backgroundColor = "yellow"
  msg.style.color = "black"
}
const showWinner = (userWin,userChoice,comChoice) => {
  if(userWin){
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You Win Yay!! Your ${userChoice} Beats ${comChoice}`
    msg.style.backgroundColor = "green"
  } else{
    comScore++;
    comScorepara.innerText = comScore;
    msg.innerText = `You Lose. ${comChoice} Beats  Your ${userChoice}`
    msg.style.backgroundColor = "red"
  }
}

const playgame = (userChoice) => {
  const comChoice = makecomChoice();
  
  if( userChoice === comChoice){
    draw();
  } else {
    let userWin = true;
    if(userChoice === "rock"){
      userWin = comChoice === "paper" ? false:true
    } else if(userChoice === "paper"){
      userWin = comChoice === "scissors" ? false:true
    } else {
      userWin = comChoice === "rock" ? false:true
    }
    showWinner(userWin,userChoice,comChoice);
  }
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
    playgame(userChoice)
  })
  
});