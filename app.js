newGame();
//console.log(secretNumber);

function newGame(){
    //Estive pegando o segundo child da classe "container__botao", pois desse modo não seria necessário coletar pelo seu ID.
    // newGameBtn = document.getElementById('reiniciar').removeAttribute('disabled');
    limitNumber = 10;
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
        showText('h1','Correct!');
        let messagAttempt = `You find the secret number in ${numAttempts} trie${plural}`;
        showText('p',messagAttempt);
        document.querySelector('.container__botao:nth-child(2)').removeAttribute('disabled');

    }else{
        if (randomAttempt > secretNumber) {
            showText('p','The secret number is smaller :(');
        }else{
            showText('p','The secret number is bigger :(');            
        }
        numAttempts++;
        eraseNum();
    };
};

function genRandomNumber(){
    let choosenNumber = parseInt(Math.random() * limitNumber + 1);
    let listSortNumbers = [];
    let qtElementsInList = listSortNumbers.length;

/* Tópico de limpeza de array "listSortNumbers" se por acaso a função "genRandomNumber" não estivesse declarada na função "newGame". Pois do modo que está, toda vez que o jogo for iniciado, a array irá iniciar como nova (sem manter os resultados anteriores).

    if (qtElementsInList == choosenNumber) {
        return listSortNumbers = [];
    }
*/
    if (listSortNumbers.includes(choosenNumber)){
        return genRandomNumber();
    } else {
        listSortNumbers.push(choosenNumber);
        console.log(listSortNumbers);
        return choosenNumber;
    };
};

function eraseNum(){
    randomAttempt = document.querySelector('input');
    randomAttempt.value = '';
};


