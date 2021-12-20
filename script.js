const userInput = document.getElementById('userInput');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const remaining = document.getElementById('remaining');

let num = [Math.floor(Math.random() * 100)];

let guesses = 1;

// display message if the guess is too low or too high

btn.addEventListener('click', function() {

    let userInput = document.getElementById('userInput').value;
    if (userInput == num) {
        displayMessage(`You guessed right! your number was <b>${num}</b>!`);
        displayRemaining();
    } else if (userInput < num) {
        displayMessage(`You guessed too low! Try again`);
        displayRemaining();
    } else if (userInput > num) {
        displayMessage(`You guessed too high! Try again`);
        displayRemaining();
    }
    if (!userInput) {
        output.innerHTML = `Enter a number please!`;
    }
    if (userInput) {
        document.getElementById('userInput').value = '';
    }

    //Check to see if game is over

    if (guesses === 11) {
        displayRemaining();
        displayMessage(`Game Over! Number was ${num}!`);
        endGame();
    }
});

// user can use ENTER key too!

userInput.addEventListener('keypress', function(event) {

    if (event.keyCode == 13) {

        let userInput = document.getElementById('userInput').value;
        if (userInput == num) {
            displayMessage(`You guessed right! your number was <b>${num}</b>!`);
            displayRemaining();
            endGame();
        } else if (userInput < num) {
            displayMessage(`You guessed too low! Try again`);
            displayRemaining();
        } else if (userInput > num) {
            displayMessage(`You guessed too high! Try again`);
            displayRemaining();
        }
        if (!userInput) {
            output.innerHTML = `Enter a number please!`;
        }
        if (userInput) {
            document.getElementById('userInput').value = '';
        }

        //Check to see if game is over

        if (guesses === 11) {
            displayRemaining();
            displayMessage(`Game Over! Number was ${num}!`);
            endGame();
        }
    }
});

// display remaining guesses function

function displayRemaining() {
    if (guesses < 11) guesses++;
    remaining.innerHTML = `${11 - guesses}`;
}

// display message function

function displayMessage(message) {
    output.innerHTML = message;
}

// end game function

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    newGame();
}

// new game function

function newGame() {
    const restartBtn = document.getElementById('btnR');
    restartBtn.style.display = 'inline-block';
    btn.style.display = 'none';
    restartBtn.addEventListener('click', function() {
        num = [Math.floor(Math.random() * 100)];
        guesses = 1;
        output.innerHTML = '';
        remaining.innerHTML = `${11 - guesses}`;
        userInput.removeAttribute('disabled');
        btn.style.display = 'inline-block';
        restartBtn.style.display = 'none';
    });
}