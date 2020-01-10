// Mario Kart simulator
'use strict';

//Global Variables
let numShell = 0;
let numBanana = 0;
let numStar = 0;
let numBulletBill = 0;
let numGoldenMushroom = 0;
let n = 0;



let resultsEl = document.getElementById('results');

//Event Listener
document.getElementById('mainImg').addEventListener('click', simulate);
document.getElementById('btn1').addEventListener('click', simulate2);
document.getElementById('btn2').addEventListener('click', simulate3);
document.getElementById('input-btn').addEventListener('click', simulate4);

//Event Function
function simulate() {
    //Generate a random number
    let randNum = Math.random();
    //Simulate Results
    if (randNum < 0.85) {
        //Simulate Item- What type
        let randBox = Math.random();

        if(randBox < 0.25) {
            console.log("Banana")
            numBanana++;
            document.getElementById('span1').innerHTML = numBanana;
            resultsEl.innerHTML += '<img src="images/banana.jpg">'
        } else if (randBox < 0.5) {
            console.log("Shell");
            numShell++;
            document.getElementById('span2').innerHTML = numShell;
            resultsEl.innerHTML += '<img src="images/green_shell.jpg">'
        } else if (randBox < 0.65) {
            console.log("mushroom");
            numGoldenMushroom++;
            document.getElementById('span4').innerHTML = numGoldenMushroom;
            resultsEl.innerHTML += '<img src="images/goldenmushroom.jpg">'
        } else if (randNum<0.80) {
            console.log("Star");
            numStar++;
            document.getElementById('span3').innerHTML = numStar;
            resultsEl.innerHTML += '<img src="images/star.jpg">'
        }
        }   else  {
            //Catch Junk
            console.log('bulletbill');
            numBulletBill++;
            document.getElementById('span5').innerHTML = numBulletBill
            resultsEl.innerHTML += '<img src ="images/bullet_bill.jpg">';
        } 
}


//FIVE TIMES
function simulate2() {
    //Simulate Multiple Times
    for (let n = 0; n < 5;n++) {
    simulate();
}
}
//Until Bullet Bill
function simulate3() {
    // Until ten Bullet Bills
    while (numBulletBill < 10) {
        simulate();
    
}
}
function simulate4() {
    let numUser = document.getElementById('input1').value;
    //simulate User's Input
    for ( let n = 0; n < numUser;n++){ 
            simulate();
            console.log (numUser)
        
    }
}
