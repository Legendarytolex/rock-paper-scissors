function getComputerChoice () {
    var list = ["rock", "paper", "scissors"];
    return list[Math.floor((Math.random()*list.length))];

} 
let computerChoice = getComputerChoice();
console.log(computerChoice);


/*function playGame(playerChoice,computerChoice ){
    
return;
}
*/
let playerChoice = prompt("Enter your choice, rock, paper or scissors");
console.log(playerChoice);
  
function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "rock" ){
     alert("tie"); 
    }   
    else if (playerChoice == "scissors" && computerChoice == "scissors")
    {alert("tie"); 
    }  
    else if (playerChoice == "paper" && computerChoice == "paper")
    {
    alert("tie");
    }   
    else if(playerChoice == "rock" && computerChoice == "paper") 
    {
        alert("you lose, Paper covers rock");
    }
    else if (playerChoice == "rock" && computerChoice == "scissors")
    {
        alert("you win, Rock crushes scissors");
    }
    else if (playerChoice == "scissors" && computerChoice == "rock")
    {
        alert("you lose, Rock crushes scissors");
    }   
    else if (playerChoice == "scissors" && computerChoice =="paper")
    {
        alert("you win, Scissors cut paper");
    }
    else if (playerChoice== "paper" && computerChoice =="rock")
    {
        alert("you win, Paper covers rock");
    }
    else if(playerChoice == "paper" && computerChoice == "scissors")
    {
        alert("you lose, Scissors cut paper")
    }
    else {
        alert("wrong input");
    }
}
console.log(playRound(playerChoice, getComputerChoice));
