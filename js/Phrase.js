/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase()
    }

/**
* Display phrase on game board
*/    
    addPhraseToDisplay(){
        for(let i = 0; i < this.phrase.length; i++){
            const li = document.createElement('LI');
            li.textContent = this.phrase[i];
            phraseUl.appendChild(li);
            if(this.phrase[i] === ' '){
                li.className = "space"
            } else {
                li.className = "hide letter";
                li.classList.add(li.textContent)
            }
        }
    }

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(guess){
       if(this.phrase.includes(guess.textContent)){
           return true
       } else {
           return false
       }
    }

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(guess){
        const letterOnBoard = document.querySelectorAll('.hide');
        letterOnBoard.forEach(letter => {
            if(letter.classList.contains(guess.textContent)){
                letter.classList.replace('hide', 'show')
            }
        });
    }
}