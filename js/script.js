const eleBtnPlay = document.querySelector('#play');
const level = document.querySelector('#difficolta');
const containerGame = document.querySelector('#container-campo-minato')

const eleBtnRePlay = document.querySelector('#re-play');   
const eleResult = document.querySelector('.container-result-game')
const eleWinLose = document.querySelector('#win-lose')
const eleParagrph = document.querySelector('#result-game')

const arrDifficolta = [100, 81, 49]
let arrBomb = []
const numeroBombe = 16    
let score 

eleBtnPlay.addEventListener('click', game);
eleBtnRePlay.addEventListener('click', game);

function game (){
    arrBomb = []
    score = 0
    containerGame.innerHTML = ''
    eleResult.classList.remove('win', 'lose')

    createGrid();
    createBomb();
	console.log('bombe', arrBomb.sort((a,b)=>a-b));
};

//funzione che crea celle in base alla difficoltà
function createGrid() {

    const numBoxRow = Math.sqrt(arrDifficolta[level.value])

    for (let i = 1; i <= arrDifficolta[level.value]; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${numBoxRow})`
        square.style.height = `calc(100% / ${numBoxRow})`
        square.innerHTML = i;
        containerGame.append(square);

        square.addEventListener('click', clickSquare)
    }
}

// funzione del click sulla cella con controlli
function clickSquare() {
    let numeroCella = parseInt(this.innerHTML)
    const squareGood = arrDifficolta[level.value] - numeroBombe
    const squaresAll = document.querySelectorAll('.square');

    if (arrBomb.includes(numeroCella)) {

        for (i = 0; i < squaresAll.length; i++) {

            squaresAll[i].removeEventListener('click', clickSquare)

            if (arrBomb.includes(parseInt(squaresAll[i].innerHTML))) {
                squaresAll[i].classList.add('bomb')
            }
        }

        eleResult.classList.add('lose')
        eleWinLose.innerHTML = 'YOU LOSE'
        eleParagrph.innerHTML = `il tuo punteggio è ${score}`

    } else {

        this.classList.add('color-cell')
        score++
    }    

    if (squareGood == score) {
        eleResult.classList.add('win')
        eleWinLose.innerHTML = 'YOU WIN'
        eleParagrph.innerHTML = `Il tuo punteggio è il massimo per questa difficoltà ${score}`
    }

    this.removeEventListener('click', clickSquare)
}

// funzione crea numeri casuali
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// funzione che crea una lista di bombe sempre diversa
function createBomb() {
    for (let i = 0; arrBomb.length < numeroBombe; i++) {
        let random = getRandomInteger(1, arrDifficolta[level.value]);

        if (!arrBomb.includes(random)) {
            arrBomb.push(random)
        }
    }
    return arrBomb
}