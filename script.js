'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;	
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
	  displayMessage('⛔ No number!');

    // when player wins
  } else if (guess === secretNumber) {
	//   document.querySelector('.message').textContent = '🎉 Correct Number';
	  displayMessage('🎉 Correct Number');
	  document.querySelector('.number').textContent = secretNumber;
	  document.querySelector('body').style.backgroundColor = '#60b347';
	  document.querySelector('.number').style.width = '30rem';

	  if (score > highscore) {
		  highscore = score;
		  document.querySelector('.highscore').textContent = highscore;

	  }

    // when guess is wrong
  } else if (guess !== secretNumber) {
	if (score > 1) {
		// document.querySelector('.message').textContent = (guess > secretNumber)? '📈 Too high' : '📉 Too Low' ;
		displayMessage((guess > secretNumber) ? '📈 Too high' : '📉 Too Low');
		score--;
		document.querySelector('.score').textContent = score;
	  } else {
		document.querySelector('.message').textContent = '💥 You Lost the game!';
		document.querySelector('.score').textContent = 0;
	  }
	  
    // when guess is too high  
  }/* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});



document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	console.log(secretNumber);
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = '';
	document.querySelector('.score').textContent = score;
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	// document.querySelector('.message').textContent = 'Start guessing...';
	displayMessage('Start guessing...');

});
