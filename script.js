const combination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3]
];
let playerWhoPlay = ['circle', 'cross'];
const allDiv = document.querySelectorAll('.game-box');

allDiv.forEach(function (div) {
    div.addEventListener('click', function () {
        let valeur = this.dataset.value;
        console.log(valeur, this.id);
        addClass('cross', this)
    })
})

function addClass(newClass, div) {
    const newDiv = document.createElement('div');
    newDiv.classList.add(newClass);
    div.appendChild(newDiv);
}

