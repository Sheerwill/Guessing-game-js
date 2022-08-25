// program data:
var number = Math.floor(Math.random() * 100);
var guess;
var limit = 5;
var won =  false;
var guesses = [];

for (x = 1; x <= limit; x++){
    // prompt user for their guess
    do{
        guess = parseInt(prompt("Guess a number"));
    } while (isNaN(guess));
    

    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    }
    // if incorrect: add number to guesses array
    
    else if (x > 1){
        won = isPreviousGuess();         
        if(won){
            do{                    
                guess = parseInt(prompt("Please Guess a number."));
                won = isPreviousGuess();
            } while ((won) || isNaN(guess)); 

            guesses[x] = guess;
            alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - x));

        }
        else{
            guesses[x] = guess;
            alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - x));
        }
        
    }
    else{
        guesses[x] = guess;
        alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - x));
    }        
}


// if the user ran out of tries, let them know the game is over
if(!won){
    document.write("Sorry, you ran out of tries. Game over. \nThe correct answer is " + number);
}

function isPreviousGuess(){
    for(i = 1; i < guesses.length; i++){
        if(guesses[i] == guess){
            return true;
        }
    }return false;
    
}
