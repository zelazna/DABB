// GAME LOOP
//@TODO programmer la game loop()
$(function () {
    $("button").on("click", init);
    $(".score").html = game.score;

});

// VARIABLES GLOBALES

var countElements = 1;
var game = {};
game.score = 0;

var $canvas = $('.canvas');
function create(color, left) {
    var $cube = $('<div></div>');
    $cube.addClass("cube");
    $cube.addClass(color);
    $cube.addClass("elem" + countElements);
    $cube.css("left", left);
    $canvas.append($cube);
    countElements++;
}

function animate() {
    $('.cube').animate({
        top: 500,
        opacity: 1
    }, 2000);
    //@TODO enchainer et supprimer les carrés apres
    //$('.cube').remove();
}

function init() {
    create("red", 40);
    create("blue", 120);
    animate();
}

function fivePoint() {
    game.score += 5;
    $(".score").text(game.score);
}

function tenPoint() {
    game.score += 10;
    $(".score").text(game.score);
}

$(document).keydown(function (e) {
    //check event for the red
    var redOffset = $('.red').offset();
    var redX = parseInt(redOffset.left);
    var redY = parseInt(redOffset.top);
    console.log("red:" + redY + "" + redY);
    var redTargetOffset = $('.redtarget').offset();
    var redTargetX = parseInt(redTargetOffset.left);
    var redTargetY = parseInt(redTargetOffset.top);
    console.log("redtarget:" + redTargetY + "" + redTargetX);
    console.log(redX);
    console.log(redY);
    if (e.which == "37") {
        if (redX == redTargetX) {
            tenPoint();
            //@TODO faire les condition de la fonction fivepoints()
        // }else if (){
        //     fivePoint();
        }
    }
    var blueOffset = $('.blue').offset();
    var blueX = parseInt(blueOffset.left);
    var blueY = parseInt(blueOffset.top);
    console.log("blue:" + blueY + "" + blueY);
    var blueTargetOffset = $('.bluetarget').offset();
    var blueTargetX = parseInt(blueTargetOffset.left);
    var blueTargetY = parseInt(blueTargetOffset.top);
    console.log("bluetarget:" + blueTargetY + "" + blueTargetX);
    console.log(blueX);
    console.log(blueY);
    if (e.which == "39") {
        if (blueX == blueTargetX) {
            tenPoint();
            //@TODO faire les condition de la fonction fivepoints()
        // }else if (){
        //     fivePoint();
        }
    }

    //var red_rx = red_target_array[0].x;
    //var red_ry = red_target_array[0].y;
    // var red_ryMin = red_target_array[0].y - 1;
    // var left_key = e.which;
    // if (left_key == "37" && (redX == red_rx && redY == red_ry)) tenPoint();
    // else if (left_key == "37" && (redX == red_rx && redY == red_ryMin)) fivePoint();

    //check event for the blue
    // var blue_nx = blue_array[0].x;
    // var blue_ny = blue_array[0].y;

    // var blue_ryMin = blue_target_array[0].y - 1;
    // var right_key = e.which;
    // if (right_key == "39" && (blue_nx == blue_rx && blue_ny == blue_ry)) tenPoint();
    // else if (right_key == "39" && (blue_nx == blue_rx && blue_ny == blue_ryMin)) fivePoint();
});