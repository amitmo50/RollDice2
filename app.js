

document.querySelector('.btn-press').addEventListener('click', () =>{
    let randomNumberOne = Math.floor(Math.random() * 6 + 1);
    let randomNumberTwo = Math.floor(Math.random() * 6 + 1);
    const diceOne = document.querySelector('.dice-one');
    const diceTwo = document.querySelector('.dice-two');

    diceOne.src = `images/dice${randomNumberOne}.png`;
    diceTwo.src = `images/dice${randomNumberTwo}.png`;
    endGame(randomNumberOne, randomNumberTwo);

});


endGame = (diceNumebrOne, diceNumberTwo) =>{
    const headTitle = document.querySelector('#title');
    console.log('Yes');
    if(diceNumebrOne === diceNumberTwo){
        headTitle.textContent = 'Draw!';
    }else if(diceNumebrOne > diceNumberTwo){
        headTitle.textContent = '🚩Player 1 Wins!';
    }else if(diceNumebrOne < diceNumberTwo){
        headTitle.textContent = 'Player 2 Wins! 🚩';
    }
}