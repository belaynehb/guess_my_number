let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No value entered';

    // When guess correctly
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🎉 Correct number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high' : '📉 Too low';
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost';
      document.querySelector('.score').textContent = 0;
    }
  }
  //  //When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// ======================================================

// let secretNumber = Math.trunc(Math.random()*20 +1)
// document.querySelector('.number').textContent = '?'

// let score = document.querySelector('.score').textContent

// document.querySelector('.check').addEventListener('click', function(){
//     const guess = Number(document.querySelector('.guess').value)
//     let score = document.querySelector('.score').textContent
//     if (!guess){
//         document.querySelector('.message').textContent = '⛔️ Enter a number'
//     }else if (guess > secretNumber){
//         document.querySelector('.message').textContent = '📈 Too high'
//         score -=1
//         document.querySelector('.score').textContent = score

//     }else if (guess < secretNumber){
//         document.querySelector('.message').textContent = '📉 Too low'
//         score -=1
//         document.querySelector('.score').textContent = score

//     }else if (guess === secretNumber){
//         document.querySelector('.message').textContent = 'You Win! You guessed it correct'
//         document.querySelector('.number').textContent = secretNumber
//         document.body.style.background = '#60b347'
//         document.querySelector('.number').style.width = '45rem'
//         }
// })

// document.querySelector('.again').addEventListener('click', function(){
//     secretNumber = Math.trunc(Math.random()*20 +1)
//     document.body.style.background = '#222'
//     document.querySelector('.message').textContent = 'Start guessing...'
//     document.querySelector('.number').style.width = '15rem'
//     document.querySelector('.score').textContent = 20
//     document.querySelector('.number').textContent = '?'
//     document.querySelector('.guess').value = ''

// })
