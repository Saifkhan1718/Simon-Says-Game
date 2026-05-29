let gameseq = [];
let userseq = [];

let started = false;
let level =0;
let btn = ["firstcolor","secondcolor","thirdcolor","fourthcolor"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started== false){
        started =true;

        levelup();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup (){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`; 
    let randomidx = Math.floor(Math.random()*4);
    let randomcolor = btn[randomidx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    // console.log(randomidx);
    // console.log(randomcolor);
    // console.log(randombtn);
    gameseq.push(randomcolor);
    gameFlash(randombtn);
}

function checkans (idx){
    
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length-1 == gameseq.length-1){
            setTimeout(levelup,1000);
        }
    }
    else
        {
        h2.innerHTML = `game over ,Your Score  is <b>${level}</b> <br>press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset(); 
    }
}

function btnpress (){
    let btn = this;
    userFlash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset() {
    started = false;
    userseq = [];
    gameseq = [];
    level =0;
}