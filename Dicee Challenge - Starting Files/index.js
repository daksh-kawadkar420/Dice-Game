// // Random Number for image 1

// var randomNumber1 = Math.random();
// var finalRandomNumber1 = Math.floor(randomNumber1 * 6)+1;

// document.querySelector('.img1').setAttribute('src', '/images/dice' + finalRandomNumber1 + '.png');


// // Random Number for image 2

// var randomNumber2 = Math.random();
// var finalRandomNumber2 = Math.floor(randomNumber2 * 6)+1;

// document.querySelector('.img2').setAttribute('src', '/images/dice' + finalRandomNumber2 + '.png');


// For checking which is greater

// if(finalRandomNumber1 > finalRandomNumber2) {
//     document.querySelector('h1').innerHTML = 'Player 1 Wins..';
// } else if (finalRandomNumber1 < finalRandomNumber2) {
//     document.querySelector('h1').innerHTML = 'Player 2 Wins..';
// } else {
//     document.querySelector('h1').innerHTML = 'Match TIED..';   
// }


function resetAll() {
    document.querySelector('h1').innerHTML = "Let's Play";
    document.querySelectorAll('img')[0].setAttribute('src', '/images/dice6.png');
    document.querySelectorAll('img')[1].setAttribute('src', '/images/dice6.png');
}

function playGame() {
    // For image-1 Generating Random Number
    
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomImage1 = '/images/dice' + randomNumber1 +'.png';
    document.querySelector('.img1').setAttribute('src', randomImage1);

    // For image-2 Generating Random Number
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImage2 = '/images/dice' + randomNumber2 + '.png';
    document.querySelector('.img2').setAttribute('src', randomImage2);

    // For validating who is the winner

    if(randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = 'Player 1 Wins!!!';
    } else if(randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = 'Player 2 Wins!!!';
    } else {
        document.querySelector('h1').innerHTML = 'Match TIED!!!';
    }
}