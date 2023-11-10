newGame();
console.log(secretNumber);

function newGame(){
    //Estive pegando o segundo child da classe "container__botao", pois desse modo não seria necessário coletar pelo seu ID.
    // newGameBtn = document.getElementById('reiniciar').removeAttribute('disabled');
    secretNumber = genRandomNumber();
    eraseNum();
    numAttempts = 1;
    initialMessage();
    document.querySelector('.container__botao:nth-child(2)').setAttribute('disabled', 'true');
};

function showText(tag, text) {
    let contentText = document.querySelector(tag);
    contentText.innerHTML = text;
}

function initialMessage(){
    showText('h1', 'Game of secret number');
    showText('p', 'Choose a number between 1 and 10.');
};

function checkAttempt() {
    let plural = numAttempts > 1 ? "s" : "";
    randomAttempt = document.querySelector('input').value;
    if (randomAttempt == secretNumber) {
        showText('h1','Você acertou!');
        let messagAttempt = `Adivinhou o número secreto com ${numAttempts} tentativa${plural}`;
        showText('p',messagAttempt);
        document.querySelector('.container__botao:nth-child(2)').removeAttribute('disabled');

    }else{
        if (randomAttempt > secretNumber) {
            showText('p','O número secreto é menor :(');
        }else{
            showText('p','O número secreto é maior :(');            
        }
        numAttempts++;
        eraseNum();
    };
};

function genRandomNumber(){
    return parseInt(Math.random() * 10 + 1);
};

function eraseNum(){
    randomAttempt = document.querySelector('input');
    randomAttempt.value = '';
};


