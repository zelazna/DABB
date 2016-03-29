// GAME LOOP

$(function () {
    $("button").on("click", init);
    $(".score").html = game.score;
});

// VARIABLES GLOBALES

var red_timing = [0, 700, 1400, 2100, 2800, 4200, 4600];
var blue_timing = [3200, 4400];
var yellow_timing = [3400, 4800, 5600];
var green_timing = [3600, 6200];
var game = {};
game.score = 0;
var count = 0;
var $canvas = $('.canvas');

// FONCTIONS

function createRed() {
    var $cubeRed = $('<div></div>');
    $cubeRed.addClass("cube");
    $cubeRed.addClass("red");
    $cubeRed.css("left", 32);
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
    $cubeBlue.css("left", 103);
    $canvas.append($cubeBlue);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');
}

function createYellow() {
    var $cubeYellow = $('<div></div>');
    $cubeYellow.addClass("cube");
    $cubeYellow.addClass("yellow");
    $cubeYellow.css("left", 178);
    $canvas.append($cubeYellow);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');
}

function createGreen() {
    var $cubeYellow = $('<div></div>');
    $cubeYellow.addClass("cube");
    $cubeYellow.addClass("green");
    $cubeYellow.css("left", 250);
    $canvas.append($cubeYellow);
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000, 'linear');
}

var migos = document.getElementById("migos");
function playMigos() {
    migos.play();
}

function pauseMigos() {
    migos.pause();
}


function init() {
    setTimeout(playMigos, 1450);
    for (var i = 0; i < red_timing.length; i++) {
        setTimeout(createRed, red_timing[i]);

    }
    for (var j = 0; j < blue_timing.length; j++) {
        setTimeout(createBlue, blue_timing[j]);
    }
    for (var k = 0; k < yellow_timing.length; k++) {
        setTimeout(createYellow, yellow_timing[k]);

    }
    for (var l = 0; l < green_timing.length; l++) {
        setTimeout(createGreen, green_timing[l]);
    }
    setTimeout(pauseMigos, 7850);
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
    //parametre a modifier pour l'attribution des points/remove
    var accuracy = 30;
    //check event for the red
    event.stopPropagation();
    if (e.which == "65") {
        // redTargetY = 372
        $('.red').each(function () {
            var $red = $(this);
            var redPosition = $red.position();
            var redY = parseInt(redPosition.top);
            var redTargetposition = $('.redtarget').position();
            var redTargetY = parseInt(redTargetposition.top);
            if (redY >= redTargetY - accuracy && redY <= redTargetY + accuracy) {
                tenPoint();
                $red.remove();
                // } else if (redY >= redTargetY - 70 && redY <= redTargetY + 70) {
                //     fivePoint();
            }
        })
    }
    if (e.which == "90") {
        // blueTargetY = 372
        $('.blue').each(function () {
            var $blue = $(this);
            var bluePosition = $blue.position();
            var blueY = parseInt(bluePosition.top);
            var blueTargetPosition = $('.bluetarget').position();
            var blueTargetY = parseInt(blueTargetPosition.top);
            if (blueY >= blueTargetY - accuracy && blueY <= blueTargetY + accuracy) {
                tenPoint();
                $blue.remove();
                // } else if (blueY >= blueTargetY - 70 && blueY <= blueTargetY + 70) {
                //     fivePoint();
            }
        })
    }
    if (e.which == "69") {
        // blueTargetY = 372
        $('.yellow').each(function () {
            var $yellow = $(this);
            var yellowPosition = $yellow.position();
            var yellowY = parseInt(yellowPosition.top);
            var yellowTargetPosition = $('.yellowtarget').position();
            var yellowTargetY = parseInt(yellowTargetPosition.top);
            if (yellowY >= yellowTargetY - accuracy && yellowY <= yellowTargetY + accuracy) {
                tenPoint();
                $yellow.remove();
                // } else if (blueY >= blueTargetY - 70 && blueY <= blueTargetY + 70) {
                //     fivePoint();
            }
        })
    }
    if (e.which == "82") {
        // blueTargetY = 372
        $('.green').each(function () {
            var $green = $(this);
            var greenPosition = $green.position();
            var greenY = parseInt(greenPosition.top);
            var greenTargetPosition = $('.greentarget').position();
            var greenTargetY = parseInt(greenTargetPosition.top);
            if (greenY >= greenTargetY - accuracy && greenY <= greenTargetY + accuracy) {
                tenPoint();
                $green.remove();
                // } else if (blueY >= blueTargetY - 70 && blueY <= blueTargetY + 70) {
                //     fivePoint();
            }
        })
    }
});

// effet sur les "touches"

$(document).keydown(function (e) {
    if (e.which == 65) {
        e.preventDefault();
        $(".redtarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    } else if (e.which == 90) {
        e.preventDefault();
        $(".bluetarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    } else if (e.which == 69) {
        e.preventDefault();
        $(".yellowtarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    } else if (e.which == 82) {
        e.preventDefault();
        $(".greentarget").animate({opacity: 'toggle'}, "fast").delay(10).fadeIn(10);
    }
});
