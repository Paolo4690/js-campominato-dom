const eleBtnPlay = document.querySelector('#play');
const eleOptDifficolta = document.querySelector('#difficolta');
const eleContainer = document.querySelector('#container-campo-minato')
const arrDifficolta =[100, 81, 49]

eleBtnPlay.addEventListener('click', createGrid)

function createGrid() {
    eleContainer.innerHTML = ''
    const numBoxRow = Math.sqrt(arrDifficolta[eleOptDifficolta.value])

    for (let i = 1; i <= arrDifficolta[eleOptDifficolta.value]; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${numBoxRow})`
        square.style.height = `calc(100% / ${numBoxRow})`
        square.innerHTML = i;
        eleContainer.append(square);
        square.addEventListener('click', function() {
            this.classList.add('color-cell')
        })
    }
}