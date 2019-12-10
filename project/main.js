//Game

//Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 620;

let background = {
    background1: document.getElementById('background1'),
    background2: document.getElementById('background2'),
    background3: document.getElementById('background3'),
    background4: document.getElementById('background4'),
    background5: document.getElementById('background5'),
    background6: document.getElementById('background6'),
    background7: document.getElementById('background7'),
    background8: document.getElementById('background8'),
    background9: document.getElementById('background9'),
    background10: document.getElementById('background10'),
    background11: document.getElementById('background11'),
    background12: document.getElementById('background12'),
    background13: document.getElementById('background13'),
    background14: document.getElementById('background14'),
    background15: document.getElementById('background15'),
    background: 1,
}

let player = {
    x: 10,
    y: 580,
    w: 84,
    h: 84,
    x_velocity: 0, // move x
    y_velocity: 0, //move y 
}

let controller = {
    left: false,
    right: false,
    up: false,

    //Function named keyboard
    keyboard: function (event) {

        let key_state = (event.type == "keydown")

        switch (event.keyCode) {
            case 65: // left key
                controller.left = key_state;
                break;
            case 87: // up key
                controller.up = key_state;
                break;
            case 68: // right key
                controller.right = key_state;
                break;
            case 32: // right key
                controller.attack = key_state;
                break;
        }
    }
};

// 84 x 84
let spriteSheetImg = document.getElementById('sprite-sheet');

requestAnimationFrame(draw)

function draw() {
    //Logic
    //
        //
            //

    // KEYBOARD CONTROLS
    player.x += player.x_velocity;
    player.y += player.y_velocity;

    if (controller.up && player.jumping == false) {
        player.y_velocity -= 20;
        player.jumping = true;
    }
    if (controller.left) {
        player.x_velocity -= 0.6;
    }
    if (controller.right) {
        player.x_velocity += 0.6;
    }
    
    //Attacking and knock back
    if (controller.right && controller.attack){
         if (enemy1.x == player.x + 20) {
            enemy1.x += 105;
        } if (enemy1.x2 == player.x + 20) {
            enemy1.x += 105;
        }
    }
    if (controller.left && controller.attack){
        if (enemy1.x == player.x + 20) {
            enemy1.x -= 105;
        }
        if (enemy1.x2 == player.x + 20) {
            enemy1.x -= 105;
        }
    }
    //Gravity
    player.y_velocity += 1.5;

    //Friction
    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;

    if (background.background == 1){
        //Landing
        if (player.y > 400) {
            player.y = 400;
            player.speed_y = 0;
            player.jumping = false;
        }
    }

    //so the player doesnt leave page
    if (player.x < -30) {
        player.x = -30;
    } else if (player.x > 815) { // if player goes past right boundary
        background.background = 2;
        player.x = 10
    }

    //ENEMY AI very simple
    if (enemy1.alive){
        if (player.x + 25 <= enemy1.x) {
            enemy1.x -= 3;
        }
        if (player.x + 25 <= enemy1.x2) {
            enemy1.x2 -= 2.5;
        }
        if (player.x + 25 >= enemy1.x) {
            enemy1.x += 3;
        }
        if (player.x + 25 >= enemy1.x2) {
            enemy1.x2 += 2.5;
        }
    }
    //Making player ide if touch enemy
    if (player.x + 20 == enemy1.x ) {
        background.background = 0;
    }
    if (player.x + 20 == enemy1.x2 ) {
        background.background = 0;
    }


    //Switching stages
    if (background.background == 2){
        background.background1 = null;
        background.background2 = null;
        background.background3 = null;
        background.background4 = null;
    } 
    if (background.background == 0){
        background.background1 = null;
        background.background2 = null;
        background.background3 = null;
        background.background4 = null;
        background.background5 = null;
        background.background6 = null;
        background.background7 = null;
        background.background8 = null;
        background.background9 = null;
        background.background10 = null;
        background.background11 = null;
        background.background12 = null;
        background.background13 = null;
        background.background14 = null;
        background.background15 = null;
    }
    ///
        ///
            ///
    //Clearing the page
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    //DRAWING STUFF
    ///
        ///
            ///
    
    //ground 
    ctx.fillStyle = "marron";
    ctx.fillRect(0, 540, 800, 4);

    //death screen
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 620);
    ctx.font = "30px Arial";
    ctx.fillStyle= "maroon";
    ctx.fillText("Its been a good, hasn't it", 400, 310);
    
    //Second Background
     ctx.drawImage(background.background5, 0, -700, 1300, 1320);
     ctx.drawImage(background.background6, 0, -700, 1300, 1320);
     ctx.drawImage(background.background7, 0, -700, 1300, 1320);
     ctx.drawImage(background.background8, 0, -700, 1300, 1320);
     ctx.drawImage(background.background9, 0, -700, 1300, 1320);
    ctx.drawImage(background.background10, 0, -700, 1300, 1320);     
    ctx.drawImage(background.background11, 0, -700, 1300, 1320);
    ctx.drawImage(background.background12, 0, -700, 1300, 1320);
    ctx.drawImage(background.background13, 0, -700, 1300, 1320);
    ctx.drawImage(background.background14, 0, -700, 1300, 1320);
    ctx.drawImage(background.background15, 0, -700, 1300, 1320);
    
    //First Background
    ctx.drawImage(background.background1, 0, 0, 800, 620);
    ctx.drawImage(background.background4, 0, 0, 800, 620);
    ctx.drawImage(background.background3, 0, 0, 800, 620);
    ctx.drawImage(background.background2, 0, 0, 800, 620);

    //Draw Enemy
    ctx.drawImage(enemy1.enemy2, enemy1.sX, enemy1.sY, 16, 24, enemy1.x, enemy1.y, 32, 48)
    //Draw Enemy 2
    ctx.drawImage(enemy1.enemy2, enemy1.sX, enemy1.sY, 16, 24, enemy1.x2, enemy1.y2, 32, 48);
    
    //Spritesheet and player
    ctx.drawImage(spriteSheetImg, spriteX, spriteY, 84, 84, player.x, player.y, player.w, player.h);
    
    
    
    


    requestAnimationFrame(draw)
};


document.addEventListener("keydown", controller.keyboard);
document.addEventListener('keyup', controller.keyboard);

let spriteY = 0;
let spriteX = 0;

setInterval(animateSprite, 150);

function animateSprite() {
    if (controller.right && !controller.attack){
        spriteX += 84;
        spriteY = 168;
        if (spriteX >  168) {
            spriteX = 0;
        }
    }
    
}

setInterval(animateSprite2, 150);

function animateSprite2() {
    if (controller.left && !controller.attack){
        spriteX -= 84;
        spriteY = 168;
        if (spriteX < 336){
            spriteX = 84 * 6;
        }
    }
}

setInterval(animateSprite3, 60);

function animateSprite3() {
    if (controller.attack && controller.left){
        spriteY = 336;
        spriteX -= 84;
        if (spriteX < 336){
            spriteX = 84 * 6;
        }
    }
}

setInterval(animateSprite4, 60);

function animateSprite4() {
    if (controller.attack && controller.right){
        spriteY = 336;
        spriteX += 84;
        if (spriteX >  168) {
            spriteX = 0;
        }
    }

}

setInterval(animateSprite5, 160);

function animateSprite5() {
    if (!controller.right && !controller.left && !controller.attack){
        spriteY = 0;
        spriteX += 84;
        if (spriteX > 256){
            spriteX = 0;
        }
    }    
}

setInterval(animateSprite6, 160);

function animateSprite6() {
    if (enemy1.alive){
        enemy1.sY = 24;
        enemy1.sX += 16;
        if (enemy1.sX >= 48){
            enemy1.sX = 0;
        }
    }
}

let enemy1 = {
    enemy2 : document.getElementById('enemy1'),
    x: 700,
    y: 430,
    sX: 0,
    sY: 0,
    x2: 500,
    y2: 430,
    //16 x 24
    alive: true,
}
