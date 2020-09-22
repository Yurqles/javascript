//Make it Snow

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
initGraphics(800, 600)

//Snowflakes
let snowflakes = []
for (let n = 0; n < 50; n++) {
    snowflakes.push([Math.randomInt(0, cnv.width), Math.randomInt(0, cnv.height), ('white')])
}

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    // Drawing
    ctx.clearRect(0, 0, cnv.width, cnv.height);

    //Draw Snowflake
    for (let i = 0; i < snowflakes.length; i++) {
        //Move Snowflakes
        snowflakes[i][0] += Math.randomInt(-2, 2);
        snowflakes[i][1] += Math.randomInt(-5, -1);

        //Draw Snowflake
        ctx.strokeStyle = snowflakes[i][2];
        ctx.line (snowflakes[i][0], snowflakes[i][1]);
    }
    

    // Request another Animation Frame
    requestAnimationFrame(draw);
}







