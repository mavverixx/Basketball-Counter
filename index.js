let homeScore = document.getElementById("numberScreenHome")
let awayScore = document.getElementById("numberScreenGuest")
homeScore.textContent = 0
let count = 0

function plusOneHome(){
    console.log("home 1 works") 
    count += 1; // you are telling this function that when ever it is invoked it must add 1
    homeScore.textContent = count; // the then you are telling it to take this seperate calculation and replace it with where homeScore.textContet is in the program.
} 

function plusTwoHome(){
    console.log("HOME 2 works")
    count += 2;
    homeScore.textContent = count; 
}

function plusThreeHome(){
    console.log("HOME 3 works")
    count += 3;
    homeScore.textContent = count; 
}

function minusOneGuest(){
    console.log("Guest 1 works")
    count += 1;
    awayScore.textContent = count;  
}
function minusTwoGuest(){
    console.log("Guest 2 works") 
    count += 2;
    awayScore.textContent = count;
}
function minusThreeGuest(){
    console.log("Guest 3 works")
    count += 3;
    awayScore.textContent = count; 
}
function newGame(){
    console.log("New game start")
    count = 0
    awayScore.textContent = count;
    homeScore.textContent = count;
}