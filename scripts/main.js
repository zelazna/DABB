function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var raf;

    function createBall(x, y, color) {
        var ball = {};
        ball.x = x;
        ball.y = y;
        ball.vx = 5;
        ball.vy = 2;
        ball.radius = 25;
        ball.color = color;
        ball.draw = function () {
            ctx.beginPath();
            ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fillStyle = ball.color;
            ctx.fill();
        };
        return ball;
    }

    var redBall = createBall(50, 0, "red");
    var blueBall = createBall(120, 0, "blue");
    var pinkBall = createBall(250, 0, "pink");


    //function animateBall(ball) {
    //    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //    ball.draw();
    //    ball.x += ball.vx;
    //    ball.y += ball.vy;
    //    raf = window.requestAnimationFrame(draw);
    //}

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redBall.draw();
        redBall.y += redBall.vy;
        blueBall.draw();
        blueBall.y += redBall.vy;
        pinkBall.draw();
        pinkBall.y += redBall.vy;

        raf = window.requestAnimationFrame(draw);
    }

    window.requestAnimationFrame(draw);
}