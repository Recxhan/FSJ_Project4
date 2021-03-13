/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Varibales
const phraseUl = document.querySelector('#phrase ul');
const startBtn = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelectorAll('#qwerty button');
const heading = overlay.querySelector('#game-over-message');
const heartImage = document.querySelectorAll('.tries img')
let game;

// Game Start
startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

// qwerty(mouth click)
qwerty.forEach(letter => {
    letter.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
})

// qwerty(keyboard)
document.addEventListener('keyup', (e) => {
    for(let i = 0; i < qwerty.length; i++){
        if(qwerty[i].textContent === e.key.toLowerCase() && !qwerty[i].disabled){
            game.handleInteraction(qwerty[i])
        }
    }
})