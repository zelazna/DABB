function start() {
    $(document).ready(function () {

        var canvas = $("#canvas")[0];
        var ctx = canvas.getContext("2d");
        var w = $("#canvas").width();
        var h = $("#canvas").height();
        var cw = 20;
        //var allRedArray;
        var red_array;
        var blue_array;

        create_red();
        function create_red() {
            var length = 3;
            red_array = [];
            for (var i = 0; i < length; i++) {
                red_array[i] = [{x: 3, y: 0}];
            }
        }

        create_blue();
        function create_blue() {
            var length = 1;
            blue_array = [];
            for (var i = length - 1; i >= 0; i--) {
                blue_array.push({x: 8, y: -3});
            }
        }

        //--CRÉATION DES TARGET

        function create_target(coordX, coordY) {
            var length = 1;
            var target_array = [];
            for (var i = length - 1; i >= 0; i--) {
                target_array.push({x: coordX, y: coordY});
            }
            return target_array;
        }

        var blue_target_array = create_target(8, 27);
        var red_target_array = create_target(3, 27);

        paint();
        function paint() {
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = "black";
            ctx.strokeRect(0, 0, w, h);
            limit();
        }

        function paintRed() {
            var ny = red_array[0][0].y;
            ny++;
            var tailR = red_array[0].pop();
            tailR.y = ny;
            red_array[0].unshift(tailR);

            for (var i = 0; i < red_array.length; i++) {
                var c = red_array[0][0];
                ctx.fillStyle = "red";
                ctx.fillRect(c.x * cw, c.y * cw, cw, cw);
                ctx.strokeStyle = "white";
                ctx.strokeRect(c.x * cw, c.y * cw, cw, cw);
            }
            for (var i = 0; i < red_target_array.length; i++) {
                var c = red_target_array[i];
                ctx.fillStyle = "pink";
                ctx.fillRect(c.x * cw, c.y * cw, cw, cw);
                ctx.strokeStyle = "white";
                ctx.strokeRect(c.x * cw, c.y * cw, cw, cw);
            }
        }

        function paintBlue() {
            var by = blue_array[0].y;
            by++;
            var tailB = blue_array.pop();
            tailB.y = by;
            blue_array.unshift(tailB);

            for (var i = 0; i < blue_array.length; i++) {
                var c = blue_array[i];
                ctx.fillStyle = "blue";
                ctx.fillRect(c.x * cw, c.y * cw, cw, cw);
                ctx.strokeStyle = "white";
                ctx.strokeRect(c.x * cw, c.y * cw, cw, cw);
            }

            for (var i = 0; i < blue_target_array.length; i++) {
                var c = blue_target_array[i];
                ctx.fillStyle = "deepblue";
                ctx.fillRect(c.x * cw, c.y * cw, cw, cw);
                ctx.strokeStyle = "white";
                ctx.strokeRect(c.x * cw, c.y * cw, cw, cw);
            }
        }

        function fivePoint() {
            game.score += 5;
            $(".score").text(game.score);
            red_array.shift();
        }

        function tenPoint() {
            game.score += 10;
            $(".score").text(game.score);
            red_array.shift();
        }

        function limit() {
            var nx = red_array[0].x;
            var ny = red_array[0].y;
            var ryLimit = red_target_array[0].y + 1;
            if (ny == ryLimit) {
                red_array.shift();

            }

        }

        //function song() {
        //    create_red();
        //    setTimeout(create_red, 2000);
        //
        //}

        $(document).keydown(function (e) {
            //check event for the red
            var red_nx = red_array[0][0].x;
            var red_ny = red_array[0][0].y;
            var red_rx = red_target_array[0].x;
            var red_ry = red_target_array[0].y;
            var red_ryMin = red_target_array[0].y - 1;
            //var ryMax = target_array[0].y + 1;
            var left_key = e.which;
            if (left_key == "37" && (red_nx == red_rx && red_ny == red_ry)) tenPoint();
            else if (left_key == "37" && (red_nx == red_rx && red_ny == red_ryMin)) fivePoint();

            //check event for the blue
            var blue_nx = blue_array[0].x;
            var blue_ny = blue_array[0].y;
            var blue_rx = blue_target_array[0].x;
            var blue_ry = blue_target_array[0].y;
            var blue_ryMin = blue_target_array[0].y - 1;
            //var ryMax = blue_target_array[0].y + 1;
            var right_key = e.which;
            if (right_key == "39" && (blue_nx == blue_rx && blue_ny == blue_ry)) tenPoint();
            else if (right_key == "39" && (blue_nx == blue_rx && blue_ny == blue_ryMin)) fivePoint();
        });

        var globalLoop = 100;
        var globalLoop2 = 3200;
        var game_loop = setInterval(paint, globalLoop);
        var createRed = setInterval(create_red, globalLoop2);
        var red_loop = setInterval(paintRed, globalLoop);
        var createBlue = setInterval(create_blue, globalLoop2);
        var blue_loop = setInterval(paintBlue, globalLoop);

        game.stop = function () {
            window.clearInterval(game_loop);
            window.clearInterval(createRed);
            window.clearInterval(red_loop);
            window.clearInterval(createBlue);
            window.clearInterval(blue_loop);
        }
    })
}

game = {};
game.score = 0;

var button = $("button");
button.click(function () {
    if (button.hasClass("start")) {
        start();
        button.attr("class", "stop");
        button.text("Stop");
    } else {
        game.stop();
        button.attr("class", "start");
        button.text("start");
    }
});
