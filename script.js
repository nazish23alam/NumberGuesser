let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

function compareGuesses(humanGuess, computerGuess, targetNumber) {
	const humanOffBy = getAbsoluteDistance(targetNumber, humanGuess);
	const computerOffBy = getAbsoluteDistance(targetNumber, computerGuess);
	return (humanOffBy <= computerOffBy);
}

function updateScore(winner) {
	if (winner === 'human') {
		humanScore++;
	} else if (winner === 'computer') {
		computerScore++;
	}
}

const advanceRound = () => currentRoundNumber++;

const getAbsoluteDistance = (value1, value2) => Math.abs(value1 - value2);