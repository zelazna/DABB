// GAME LOOP

$(function () {
    $("button").on("click", init);
    $(".score").html = game.score;
});

// VARIABLES GLOBALES

//@TODO ajouter les 2 touches manquantes

var red_timing = [1100, 2500, 3700, 4200, 5300, 6000];
var blue_timing = [1900, 2200, 4000, 5200, 7300, 8000];
//var countElements = 1;
var game = {};
game.score = 0;
var count = 0;
var $canvas = $('.canvas');

// FONCTIONS

function createRed() {
    var $cubeRed = $('<div></div>');
    $cubeRed.addClass("cube");
    $cubeRed.addClass("red");
    $cubeRed.css("left", 30);
    $canvas.append($cubeRed);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');

}


function createBlue() {
    var $cubeBlue = $('<div></div>');
    $cubeBlue.addClass("cube");
    $cubeBlue.addClass("blue");
    $cubeBlue.css("left", 105);
    $canvas.append($cubeBlue);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 3000, 'linear');
}

function init() {

    for (var i = 0; i < red_timing.length; i++) {
        setTimeout(createRed, red_timing[i]);

    }

    for (var j = 0; j < blue_timing.length; j++) {
        setTimeout(createBlue, blue_timing[j]);
    }


}

// function fivePoint() {
//     game.score += 5;
//     $(".score").text(game.score);
//     console.log("5pts");
// }

function tenPoint() {
    game.score += 10;
    $(".score").text(game.score);
    console.log("10pts");
}


// FONCTIONS RELATIVES AUX BOUTONS EST EVENTS

//@TODO factoriser la fonction

$(document).keydown(function (e) {
    //check event for the red
    event.stopPropagation();
    if (e.which == "37") {
        // redTargetY = 372
        $('.red').each(function () {
            var $red = $(this);
            var redPosition = $red.position();
            var redY = parseInt(redPosition.top);
            var redTargetposition = $('.redtarget').position();
            var redTargetY = parseInt(redTargetposition.top);
            if (redY >= redTargetY - 30 && redY <= redTargetY + 30) {
                tenPoint().delay(300);
                // } else if (redY >= redTargetY - 70 && redY <= redTargetY + 70) {
                //     fivePoint();
            }
        })
    }
    if (e.which == "39") {
        // blueTargetY = 372
        $('.blue').each(function () {
            var $blue = $(this);
            var bluePosition = $blue.position();
            var blueY = parseInt(bluePosition.top);
            var blueTargetPosition = $('.bluetarget').position();
            var blueTargetY = parseInt(blueTargetPosition.top);
            if (blueY >= blueTargetY - 30 && blueY <= blueTargetY + 30) {
                tenPoint();
                // } else if (blueY >= blueTargetY - 70 && blueY <= blueTargetY + 70) {
                //     fivePoint();
            }
        })
    }
});

// effet sur les "touches"

$(document).keydown(function (e) {
    if (e.which == 37) {
        e.preventDefault();
        $(".redtarget").animate({opacity: 'toggle'}, "fast").delay(100).fadeIn(200);
    } else if (e.which == 39) {
        e.preventDefault();
        $(".bluetarget").animate({opacity: 'toggle'}, "fast").delay(100).fadeIn(200);
    }
});
