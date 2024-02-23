let msg = document.querySelector("#msg")
let userScorePara = document.querySelector("#user-score")
let computerScorePara = document.querySelector("#computer-score");
let tm = document.querySelector("#tm");
let dm = document.querySelector("#dm");

let userScore = 0;
let computerScore = 0;
let count=0;
let drawMatch=0;

let choices = document.querySelectorAll(".option");
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
  const userChoice = choice.getAttribute("id");
  playGame(userChoice);
  count++;
  tm.innerText = count;
});
});

const playGame = (userChoice)=>{
  console.log("users choice is",userChoice);
  const compChoice = getCompChoice();
  console.log("comp choice is",compChoice);
  if (userChoice === compChoice){
    drawGame();
  } 
  else {
    let userWin = true;
    if(userChoice === "rock"){ //paper& scissors
     userWin = compChoice === "paper" ? false:true;

    } else if (userChoice === "paper"){//rock &scissors
      userWin = compChoice === "scissors"? false:true;
    }else {//scissors only for user left to choose
      //comp can have :- rock / paper
     userWin = compChoice === "rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice); //IDK??????
  }
}

const getCompChoice =()=>{
  const options = ["rock","paper","scissors"];
  const randomI = Math.floor(Math.random()*3);
  return options[randomI];
}
const drawGame=()=>{
  msg.innerText= "This Match Was Draw!";
  msg.style.backgroundColor = "black";
  drawMatch++;
  dm.innerText = drawMatch;
}
const showWinner=(userWin,userChoice,compChoice)=>{
  if (userWin){
    userScore++
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor = "green";
  }else{
    computerScore++
    computerScorePara.innerText = computerScore;
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
  
}