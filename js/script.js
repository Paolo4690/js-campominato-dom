const eleBtnPlay = document.querySelector('#play');
const eleBtnRePlay = document.querySelector('#re-play');
const eleOptDifficolta = document.querySelector('#difficolta');
const eleContainer = document.querySelector('#container-campo-minato')
const eleContainerResult = document.querySelector('.container-result-game')
const eleResult = document.querySelector('.container-result-game')
const eleWinLose = document.querySelector('#win-lose')
const eleParagrph = document.querySelector('#result-game')
const arrDifficolta =[100, 81, 49]

let arrBomb =[]
eleBtnPlay.addEventListener('click', createGrid)
eleBtnRePlay.addEventListener('click', createGrid)




// FUNZIONE CREA CELLE + (CREA BOMBE IN ARRAY) 
function createGrid() {
    eleContainer.innerHTML = ''
    eleResult.classList.remove('lose', 'win')
    let z = 0
    const numBoxRow = Math.sqrt(arrDifficolta[eleOptDifficolta.value])

    createBomb()

    for (let i = 1; i <= arrDifficolta[eleOptDifficolta.value]; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${numBoxRow})`
        square.style.height = `calc(100% / ${numBoxRow})`
        square.innerHTML = i;
        eleContainer.append(square);
        square.addEventListener('click', function() {// FUNZIONE COLORE CELLA
            if (arrBomb.includes(i)) {
                this.style.backgroundColor = 'red'
                eleContainerResult.classList.add('lose')
                eleWinLose.innerHTML = 'YOU LOSE'
                eleParagrph.innerHTML = `il tuo punteggio è ${z}`
                
            } else{
                this.classList.add('color-cell')
                z++
            }

        })
    }
}


// FUNZIONE CREA BOMBE IN ARRAY 
function createBomb() {
    arrBomb = [1]
    // for (let i = 0; arrBomb.length < 16; i++) {
    //     let random = Math.floor(Math.random() * (arrDifficolta[eleOptDifficolta.value] - 1) + 1);

    //     if (!arrBomb.includes(random)) {
    //         arrBomb.push(random)
    //     }
    // }
    console.log(arrBomb)
}
//  FINE FUNZIONE CREA BOMBE IN ARRAY 