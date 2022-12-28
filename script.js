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

let play = true;
let players = ['circle', 'cross'];
let playerWhoPlay = players[0];
let array = {
    'circle': [],
    'cross': []
};
$('.sign').addClass(playerWhoPlay)

$('.game-box').click(function () {
    if (play && $(this).hasClass("empty-box")) {
        $('.sign').removeClass(playerWhoPlay);
        $(this).removeClass("empty-box").addClass(playerWhoPlay + "-box").append("<div class=" + playerWhoPlay + "></div>");;
        let value = $(this).data('value');
        array[playerWhoPlay].push(value);
        checkCombination(array[playerWhoPlay]);
        (playerWhoPlay = [players[1], players[1] = playerWhoPlay][0]);
        $('.sign').addClass(playerWhoPlay);
    }
})

function checkCombination(arrayToCheck) {
    for (let i = 0; i < combination.length; i++) {
        let isMatch = combination[i].every(element =>
            arrayToCheck.includes(element));
        if (isMatch) {
            $('.sign').removeClass(playerWhoPlay);
            $('.isOver').html('Game over ! Player ' + playerWhoPlay + ' win !')
            play = false;
            break;
        }
    }
}