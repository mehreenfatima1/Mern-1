process.stdin.on('data', handleUserInput)
console.log('Welcome to the rock, paper, or scissors game. Type "rock", "paper", or "scissors" to play the game. If you are not in the mood to play, then type "exit" to exit.')

function handleUserInput(data) {
    const playerChoice = data.toString().trim().toLowerCase();

    if (playerChoice === 'exit') {
        console.log('Exiting...')
        process.exit()
    } else if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        //Here I want to show the callback hell
        playGame(playerChoice, function () {
            setTimeout(function (){printScoreCard(function(){
                setTimeout(function(){exitOrContinue()},2000)
            })
            },3000);
        });
    } else {
        console.log('Invalid input. Please type "rock", "paper", or "scissors" or "exit" to exit.');
    }
}

let playerScore = 0
let computerScore = 0
function playGame(playerChoice, callback) {
    let computerChoice = Math.random() < 0.33 ? "rock" :
        Math.random() < 0.66 ? "paper" : "scissors";

    if (playerChoice === computerChoice) {
        console.log(`You chose ${playerChoice}\nComputer chose ${computerChoice}. It's a tie.`);
    } else if (
        (playerChoice === 'rock' && computerChoice === "scissors") ||
        (playerChoice === 'scissors' && computerChoice === "paper") ||
        (playerChoice === 'paper' && computerChoice === "rock")
    ) {
        console.log(`You chose ${playerChoice}\nComputer chose ${computerChoice}. You won!`);
        playerScore++;
    } else {
        console.log(`You chose ${playerChoice}\nComputer chose ${computerChoice}. You lose.`);
        computerScore++;
    }

    callback()
}

function printScoreCard(callback) {
    console.log(`Score Card\nPlayer: ${playerScore}\nComputer: ${computerScore}`)
    callback()
}

function exitOrContinue(){
    console.log(`If you want to exit type exit or if you want to continue than type rock,paper or scissors`)
}









