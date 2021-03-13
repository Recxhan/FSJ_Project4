/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phraseUl = document.querySelector('#phrase ul');
const startBtn = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const qwerty = document.querySelectorAll('#qwerty button');
const heading = overlay.querySelector('#game-over-message');
const heartImage = document.querySelectorAll('.tries img')
let game;

startBtn.addEventListener('click', () => {
    game = new Game();
    game.startGame();
})

qwerty.forEach(letter => {
    letter.addEventListener('click', (e) => {
        game.handleInteraction(e.target);
    })
})