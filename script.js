'use strict';

// let secretNumber = Math.floor(Math.random() * 20) + 1


// const guess = document.querySelector(".guess").textContent

// let score = 20

// document.querySelector(".check").addEventListener('click', function(){
//     const guess = Number(document.querySelector(".guess").value)
    
//     // When there is no number
//     if (!guess){
//         document.querySelector(".message").textContent = "⛔️ No number entered"
    
//     // When they guessed it correct
//     }else if (guess === secretNumber){
//         document.querySelector(".message").textContent = "Correct Number!!!"
//         document.querySelector(".number").textContent = secretNumber

//         document.querySelector(".number").style.width = '30rem'
//         document.querySelector("body").style.backgroundColor = '#60b347'
//     }
//     // When the guess is too high
//     else if(guess > secretNumber){
//         if (score > 1){
//             document.querySelector(".message").textContent = "📈 Too high!"
//             score -=1
//             document.querySelector(".score").textContent = score
//         }else{
//             document.querySelector(".message").textContent = "Game over! You lost the game"
//             document.querySelector(".score").textContent = 0
//         }
//     // When the guess is too low   
//     }else if (guess < secretNumber){
//         if (score > 1){
//             document.querySelector(".message").textContent = "📉 Too low!"
//             score -=1
//             document.querySelector(".score").textContent = score
//         }else {
//             document.querySelector(".message").textContent = "Game over! You lost the game"
//             document.querySelector(".score").textContent = 0
//         }
        
//     }
// })

// document.querySelector(".again").addEventListener('click', function(){
//     score = 20;
//     document.querySelector(".score").textContent = score
//     document.querySelector(".number").textContent = "?"
//     document.querySelector(".number").style.width = '15rem'
//     document.querySelector("body").style.backgroundColor = '#222'
//     document.querySelector(".guess").value = ""
//     document.querySelector(".message").textContent = "Start guessing..."
//     secretNumber = Math.floor(Math.random() * 20) + 1


// })

// let secretNumber = Math.floor(Math.random() * 20) + 1


// const guess = document.querySelector(".guess").textContent

// let score = 20

// document.querySelector(".check").addEventListener('click', function(){
//     const guess = Number(document.querySelector(".guess").value)
    
//     // When there is no number
//     if (!guess){
//         document.querySelector(".message").textContent = "⛔️ No number entered"
    
//     // When they guessed it correct
//     }else if (guess === secretNumber){
//         document.querySelector(".message").textContent = "Correct Number!!!"
//         document.querySelector(".number").textContent = secretNumber
//         document.querySelector(".number").style.width = '30rem'
//         document.querySelector("body").style.backgroundColor = '#60b347'
//     }

//     //When the guess is wrong
//     else if(guess !== secretNumber){
//         if (score > 1){
//             document.querySelector(".message").textContent = 
//             guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
//             score -=1
//             document.querySelector(".score").textContent = score
//         }else{
//             document.querySelector(".message").textContent = "Game over! You lost the game"
//             document.querySelector(".score").textContent = 0
//         }}
//     })

// document.querySelector(".again").addEventListener('click', function(){
//     score = 20;
//     document.querySelector(".score").textContent = score
//     document.querySelector(".number").textContent = "?"
//     document.querySelector(".number").style.width = '15rem'
//     document.querySelector("body").style.backgroundColor = '#222'
//     document.querySelector(".guess").value = ""
//     document.querySelector(".message").textContent = "Start guessing..."
//     secretNumber = Math.floor(Math.random() * 20) + 1


// })

// function removeChar(str){
//     return str.slice(1,-1)
   
//    };

