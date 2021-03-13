/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game{
    constructor(){
        this.missed = 0;
        this.phrases = [
            new Phrase('Phrase One'),
            new Phrase('Phrase Two'),
            new Phrase('Phrase Three'),
            new Phrase('Phrase Four'),
            new Phrase('Phrase Five')
        ];
        this.activePhrase = null;
    }
    


/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase(){
        const ramdomPhrase = this.phrases[Math.floor( Math.random() * this.phrases.length)];
        return ramdomPhrase
    }

/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame(){
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(button){
        button.disabled = true;
        if(!this.activePhrase.checkLetter(button)){
            button.classList.add('wrong');
            this.removeLife()
        } else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(button)
            if(this.checkForWin()){
                this.gameOver(this.checkForWin())
            }
        }
    }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin(){
        const result = document.getElementsByClassName('hide');
        return result.length === 0 ? true : false;
    }

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife(){
        this.missed++;
        if(this.missed < 5){
            const heartImage = document.querySelector('img[src="images/liveHeart.png"]');
            heartImage.setAttribute('src', 'images/lostHeart.png');
        } else {
            this.gameOver()
        }
    }

/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon){
        overlay.style.display = 'flex';
        startBtn.textContent = "Play One More Time";
        phraseUl.innerHTML = '';
        for(let i = 0; i < heartImage.length; i++){
            heartImage[i].setAttribute('src', 'images/liveHeart.png');
        }
        // heartImage.forEach(image => {
        //     image.setAttribute('src', 'images/liveHeart.png');
        // });
        qwerty.forEach(letter => {
            letter.disabled = false;
            letter.className = 'key';
        });
        if(gameWon){
            overlay.className = 'win';
            heading.textContent = 'Congrats, you won!'
        } else {
            overlay.className = 'lose';
            heading.textContent = 'Sorry, you lost.'
        }
    }
}