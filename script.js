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

let rule = ['AI', 'human'];
let isPlayingAgainst = rule[0];
let play = true;
let players = ['circle', 'cross'];
let playerWhoPlay = players[0];
let array = {
    'circle': [],
    'cross': []
};
$('.sign').addClass(playerWhoPlay);

function AIorHuman() {
    if (isPlayingAgainst === 'AI') {
        isPlayingAgainst = rule[1];
        $('.rule').html('YOU vs ME')
    } else {
        isPlayingAgainst = rule[0];
        $('.rule').html('AI vs ME')
    }
}

$('.game-box').click(function () {
    $('.rule').prop('disabled', true);
    if (play && $(this).hasClass("empty-box") && isPlayingAgainst === 'human') {
        $('.sign').removeClass(playerWhoPlay);
        playGame($(this));
        (playerWhoPlay = [players[1], players[1] = playerWhoPlay][0]);
        $('.sign').addClass(playerWhoPlay);
    }
    if (play && $(this).hasClass("empty-box") && isPlayingAgainst === 'AI') {
        console.log('oui')
        playGame($(this));
    }
})

function playGame(div) {
    div.removeClass("empty-box").addClass(playerWhoPlay + "-box").append("<div class=" + playerWhoPlay + "></div>");;
    let value = div.data('value');
    array[playerWhoPlay].push(value);
    checkCombination(array[playerWhoPlay]);
}

function checkCombination(arrayToCheck) {
    for (let i = 0; i < combination.length; i++) {
        let isMatch = combination[i].every(element =>
            arrayToCheck.includes(element));
        if (isMatch) {
            $('.isOver').html('Game over ! Player ' + playerWhoPlay + ' win !').css('visibility', "visible");
            play = false;
            break;
        }
    }
}
