const eleBtnPlay = document.querySelector('#play');
const eleBtnRePlay = document.querySelector('#re-play');
const eleOptDifficolta = document.querySelector('#difficolta');
const eleContainer = document.querySelector('#container-campo-minato')

const arrDifficolta =[100, 81, 49]

let arrBomb =[]
eleBtnPlay.addEventListener('click', createGrid)
eleBtnRePlay.addEventListener('click', createGrid)




// FUNZIONE CREA CELLE + (CREA BOMBE IN ARRAY) 
function createGrid() {
    const eleContainerResult = document.querySelector('.container-result-game')
    const eleResult = document.querySelector('.container-result-game')
    const eleWinLose = document.querySelector('#win-lose')
    const eleParagrph = document.querySelector('#result-game')
    
    eleContainer.innerHTML = ''
    eleResult.classList.remove('lose', 'win')
    const numBoxRow = Math.sqrt(arrDifficolta[eleOptDifficolta.value])
    let z = 0
    let conteggio = []
    let stopClick = true
    createBomb()

    for (let i = 1; i <= arrDifficolta[eleOptDifficolta.value]; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${numBoxRow})`
        square.style.height = `calc(100% / ${numBoxRow})`
        square.innerHTML = i;
        eleContainer.append(square);
        if (stopClick) {
            square.addEventListener('click', function() {// FUNZIONE COLORE CELLA
                if (arrBomb.includes(i)) {
                    this.style.backgroundColor = 'red'
                    eleContainerResult.classList.add('lose')
                    eleWinLose.innerHTML = 'YOU LOSE'
                    eleParagrph.innerHTML = `il tuo punteggio è ${z}`  
                    stopClick = false  
                    console.log(stopClick)            
                } else{
                    if (this.classList.contains('color-cell') == false) { //CONTROLLO SE HAI GIA CLICCATO LA CELLA
                        this.classList.add('color-cell')
                        conteggio.push(z)   // CODICE PER IL CONTEGGIO SE HAI VINTO FINO A RIGA 60
                        z++                
                        if (conteggio.length == 84 && eleOptDifficolta.value == 0) {
                            eleContainerResult.classList.add('win')
                            eleWinLose.innerHTML = 'YOU WIN'
                            eleParagrph.innerHTML = `il tuo punteggio è 84, il massimo per la difficoltà scelta`   
                            stopClick = false              
                        } else if (conteggio.length == 65 && eleOptDifficolta.value == 1) {
                            eleContainerResult.classList.add('win')
                            eleWinLose.innerHTML = 'YOU WIN'
                            eleParagrph.innerHTML = `il tuo punteggio è 65, il massimo per la difficoltà scelta`   
                            stopClick = false              
                        } else if (conteggio.length == 33 && eleOptDifficolta.value == 2) {
                            eleContainerResult.classList.add('win')
                            eleWinLose.innerHTML = 'YOU WIN'
                            eleParagrph.innerHTML = `il tuo punteggio è 33, il massimo per la difficoltà scelta`   
                            stopClick = false              
                        }// FINE CODICE PER IL CONTEGGIO  SE HAI VINTO
                    }
                }

            });
        }
    }



}


// FUNZIONE CONTEGGIO CLASSI (COLORCELL )


// FUNZIONE CREA BOMBE IN ARRAY 
function createBomb() {
    arrBomb = []
    for (let i = 0; arrBomb.length < 16; i++) {
        let random = Math.floor(Math.random() * (arrDifficolta[eleOptDifficolta.value] - 1) + 1);

        if (!arrBomb.includes(random)) {
            arrBomb.push(random)
        }
    }
    console.log(arrBomb)
}
//  FINE FUNZIONE CREA BOMBE IN ARRAY 