//Final Project

//Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 620;

let hitbox = {
    boxx : 0,
    boxy : 0,
    boxw : 18,
    boxh : 40,
    enemyx : 0,
    enemyy : 0,
    enemyw : 10,
    enemyh : 10, 
    enemyx2 : 0,
    enemyy2 : 0,
    enemyw2 : 10,
    enemyh2 : 10, 
    color1 : "black",
    color2 : "black",
    color3 : "black",
}

let spriteY = 0;
let spriteX = 0;

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
    background16: document.getElementById('background16'),
    background17: document.getElementById('background17'),
    background18: document.getElementById('background18'),
    background19: document.getElementById('background19'),
    background20: document.getElementById('background20'),
    background21: document.getElementById('background21'),
    background22: document.getElementById('background22'),
    background23: document.getElementById('background23'),
    background: 1,
}

let player = {
    x: 10,
    y: 580,
    w: 84,
    h: 84,
    x_velocity: 0, // move x
    y_velocity: 0, //move y 
    alive : true,
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
    
    
    console.log(player.x + 20)
    //Gravity
    player.y_velocity += 1.5;

    //Friction
    player.x_velocity *= 0.9;
    player.y_velocity *= 0.9;

    if (background.background == 1){
        //Landing
        if (player.y > 400) {
            player.y = 400;
            player.jumping = false;
        }
    }
    if (background.background == 2){
        //Landing
        if (player.y > 428) {
            player.y = 428;
            player.jumping = false;
        }
    }
    if (background.background == 3){
        //Landing
        if (player.y > 428) {
            player.y = 428;
            player.jumping = false;
        }
    }
    if (background.background == 4){
        //Landing
        if (player.y > 358) {
            player.y = 358;
            player.jumping = false;
        }
    }
    if (background.background == 5){
        //Landing
        if (player.y > 458) {
            player.y = 458;
            player.jumping = false;
        }
    }

    //Stages and stuff
    if (player.x < -30 && background.background == 1) {
        player.x = -30;
        enemy1.alive1 = true;
        enemy1.alive2 = true;
    } else if (player.x > 770 && background.background == 1) {
        background.background = 2;
        player.x = 10
        enemy1.alive1 = true;
        enemy1.alive2 = true;
    } else if (background.background == 2 && player.x > 760 ) {
        player.x = 10;
        background.background = 3;
        enemy1.alive1 = true;
        enemy1.alive2 = true;
    } else if (background.background == 2 && player.x < -20) {
        background.background = 1;
        player.x = 760;
        enemy1.alive1 = true;
        enemy1.alive2 = true;
    } else if (background.background == 3 && player.x > 760 ) {
        player.x = 10;
        enemy1.alive1 = true;
        enemy1.alive2 = true;
        background.background = 5;
    } else if (background.background == 3 && player.x < -20) {
        background.background = 2;
        player.x = 760;
        enemy1.alive1 = true;
        enemy1.alive2 = true;
    } else if (background.background == 5 && player.x < -20) {
        background.background = 3;
        player.x = 760;
        enemy1.alive1 = true;
        enemy1.alive2 = true;
    } else if (background.background == 5 && player.x > 760 ) {
        player.x = 10;
        enemy1.alive1 = true;
        enemy1.alive2 = true;
        background.background = 6;
    }



    //Where the enemy is 
    if (background.background == 1 && enemy1.alive1 == true) {
        enemy1.y = 430;
    } else if (background.background == 2 && enemy1.alive1 && enemy1.alive1 == true) {
        enemy1.y = 460;
    } else if (background.background == 3 && enemy1.alive1 && enemy1.alive1 == true) {
        enemy1.y = 460;
    } else if (background.background == 5 && enemy1.alive1 && enemy1.alive1 == true) {
        enemy1.y = 490;
    }
    if (background.background == 1 && enemy1.alive2 && enemy1.alive2 == true) {
        enemy1.y2 = 430;
    } else if (background.background == 2 && enemy1.alive2 && enemy1.alive2 == true) {
        enemy1.y2 = 460;
    } else if (background.background == 3 && enemy1.alive2 && enemy1.alive2 == true) {
        enemy1.y2 = 460;
    } else if (background.background == 5 && enemy1.alive2 && enemy1.alive2 == true) {
        enemy1.y2 = 490;
    }


    //ENEMY AI very simple
    if (background.background == 1) {
        if (enemy1.x  || enemy1.x2 != player.x + 25){
            if (enemy1.alive1) {
                if (player.x + 25 < enemy1.x) {
                    enemy1.x -= 2.5;
                }
                if (player.x + 25 > enemy1.x) {
                    enemy1.x += 2.5;
                }
            }
            if (enemy1.alive1) {
                if (player.x + 25 < enemy1.x2) {
                    enemy1.x2 -= 2.8;
                }
                if (player.x + 25 > enemy1.x2) {
                    enemy1.x2 += 2.8;
                }
            }
        }
    }
    if (background.background == 2) {
        if (enemy1.x  || enemy1.x2 != player.x + 25){
            if (enemy1.alive1) {
                if (player.x + 25 < enemy1.x) {
                    enemy1.x -= 2.8;
                }
                if (player.x + 25 > enemy1.x) {
                    enemy1.x += 2.8;
                }
            }
            if (enemy1.alive1) {
                if (player.x + 25 < enemy1.x2) {
                    enemy1.x2 -= 3;
                }
                if (player.x + 25 > enemy1.x2) {
                    enemy1.x2 += 3;
                }
            }
        }
    }
    if (background.background == 3) {
        if (enemy1.x  || enemy1.x2 != player.x + 25){
            if (enemy1.alive1) {
                if (player.x + 25 < enemy1.x) {
                    enemy1.x -= 3.2;
                }
                if (player.x + 25 > enemy1.x) {
                    enemy1.x += 3.2;
                }
            }
            if (enemy1.alive1) {
                if (player.x + 25 < enemy1.x2) {
                    enemy1.x2 -= 3;
                }
                if (player.x + 25 > enemy1.x2) {
                    enemy1.x2 += 3;
                }
            }
        }
    }
    if (background.background == 5) {
        if (enemy1.x  || enemy1.x2 != player.x + 25){
            if (enemy1.alive1) {
                if (player.x + 25 < enemy1.x) {
                    enemy1.x -= 3.2;
                }
                if (player.x + 25 > enemy1.x) {
                    enemy1.x += 3.2;
                }
            }
            if (enemy1.alive1) {
                if (player.x + 25 < enemy1.x2) {
                    enemy1.x2 -= 3.5;
                }
                if (player.x + 25 > enemy1.x2) {
                    enemy1.x2 += 3.5;
                }
            }
        }
    }
    //hitboxes follow their respective owner
    hitbox.boxx = player.x + 31;
    hitbox.boxy = player.y + 20;
    hitbox.enemyx = enemy1.x + 10;
    hitbox.enemyy = enemy1.y + 10;
    hitbox.enemyx2 = enemy1.x2 + 10;
    hitbox.enemyy2 = enemy1.y2 + 10;


    //Hitbox detection
    if (hitbox.boxx < hitbox.enemyx + hitbox.enemyh && hitbox.boxx + hitbox.boxw > hitbox.enemyx && hitbox.boxy < hitbox.enemyy + hitbox.enemyh && hitbox.boxy + hitbox.boxh > hitbox.enemyy && !controller.attack) {
        hitbox.color1 = "green";
        hitbox.color2 = "green";
        player.x -= 50;
        player.alive = false
    }  else {
        hitbox.color1 = "black";
        hitbox.color2 = "black";
        player.alive = true
    }
    if (hitbox.boxx < hitbox.enemyx2 + hitbox.enemyh2 && hitbox.boxx + hitbox.boxw > hitbox.enemyx2 && hitbox.boxy < hitbox.enemyy2 + hitbox.enemyh2 && hitbox.boxy + hitbox.boxh > hitbox.enemyy2 && !controller.attack) {
        hitbox.color1 = "green";
        hitbox.color3 = "green";
        player.x -= 50;
        player.alive = false
    }  else {
        hitbox.color1 = "black";
        hitbox.color3 = "black";
        player.alive = true
    }

    //Player Attacking
    if (hitbox.boxx < hitbox.enemyx + hitbox.enemyh && hitbox.boxx + hitbox.boxw > hitbox.enemyx && hitbox.boxy < hitbox.enemyy + hitbox.enemyh && hitbox.boxy + hitbox.boxh > hitbox.enemyy && controller.attack) { 
        enemy1.alive1 = false;
    }  
    if (hitbox.boxx < hitbox.enemyx2 + hitbox.enemyh2 && hitbox.boxx + hitbox.boxw > hitbox.enemyx2 && hitbox.boxy < hitbox.enemyy2 + hitbox.enemyh2 && hitbox.boxy + hitbox.boxh > hitbox.enemyy2 && controller.attack) { 
        enemy1.alive2 = false;
    }  

    if (enemy1.alive1 == false) {
        enemy1.enemyy = 101010;
    }
    if (enemy1.alive2 == false) {
        enemy1.enemyy2 = 101010;
    }
    if (player.alive == false) {
        background.background = 4;
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


    //Making a player hit box
    ctx.fillStyle = hitbox.color1;
    ctx.fillRect(hitbox.boxx, hitbox.boxy, hitbox.boxw, hitbox.boxh)
    //hitbox for enemy1
    ctx.fillStyle = hitbox.color2;
    ctx.fillRect(hitbox.enemyx, hitbox.enemyy, hitbox.enemyw, hitbox.enemyh)
    //hitbox for enemy2
    ctx.fillStyle = hitbox.color3
    ctx.fillRect(hitbox.enemyx2, hitbox.enemyy2, hitbox.enemyw2, hitbox.enemyh2)
    //18 and 40

    //death screen
    if (background.background == 4) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 800, 620);
        ctx.font = "30px Arial";
        ctx.fillStyle= "maroon";
        ctx.fillText("Its been good, hasn't it :/", 400, 310);
    }
    if (background.background == 6) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 800, 620);
        ctx.font = "30px Arial";
        ctx.fillStyle = "gray"
        ctx.fillText("Good game", 100, 310)
    }

    if (background.background == 5) {
        ctx.drawImage(background.background21, 0, 0, 900, 620);
        ctx.drawImage(background.background22, 0, 0, 900, 620);
        ctx.drawImage(background.background23, 0, 0, 900, 620);
    }

    if (background.background == 3){
        //Third Background
        ctx.drawImage(background.background16, 0, 0, 900, 620);
        ctx.drawImage(background.background17, 0, 0, 900, 620);
        ctx.drawImage(background.background18, 0, 0, 900, 620);
        ctx.drawImage(background.background19, 0, 0, 900, 620);
        ctx.drawImage(background.background20, 0, 0, 900, 620);
        }

    if (background.background == 2){
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
        }
    if (background.background == 1) {
        //First Background
        ctx.drawImage(background.background1, 0, 0, 800, 620);
        ctx.drawImage(background.background4, 0, 0, 800, 620);
        ctx.drawImage(background.background3, 0, 0, 800, 620);
        ctx.drawImage(background.background2, 0, 0, 800, 620);
    }
    //Draw Enemy
    ctx.drawImage(enemy1.enemy2, enemy1.sX, enemy1.sY, 16, 24, enemy1.x, enemy1.y, enemy1.w, enemy1.h)
    

    //Draw Enemy 2
    ctx.drawImage(enemy1.enemy2, enemy1.sX2, enemy1.sY2, 16, 24, enemy1.x2, enemy1.y2, enemy1.w, enemy1.h);
    
    
    //Spritesheet and player
    ctx.drawImage(spriteSheetImg, spriteX, spriteY, 84, 84, player.x, player.y, player.w, player.h);
    
    
    
    


    requestAnimationFrame(draw)
};


document.addEventListener("keydown", controller.keyboard);
document.addEventListener('keyup', controller.keyboard);


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
    if (enemy1.alive1){
        enemy1.sY = 24;
        enemy1.sX += 16;
        if (enemy1.sX >= 48){
            enemy1.sX = 0;
        }
    }
}

setInterval(animateSprite7, 160);

function animateSprite7() {
    if (enemy1.alive2){
        enemy1.sY2 = 24;
        enemy1.sX2 += 16;
        if (enemy1.sX2 >= 48){
            enemy1.sX2 = 0;
        }
    }
}


let enemy1 = {
    enemy2 : document.getElementById('enemy1'),
    x: 700,
    y: 430,
    sX: 0,
    sY: 0,
    sX2: 0,
    sY2: 0,
    x2: 500,
    y2: 430,
    w: 32,
    w2: 32,
    h: 48,
    h2: 48,
    //16 x 24
    alive1: true,
    alive2 : true,
    health1 : 100,
    health2 : 100,
}
