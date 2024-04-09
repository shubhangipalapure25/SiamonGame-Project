let gameSeq=[];
let userSeq=[];
let gameStart=false;
let level=0;
let h2 = document.querySelector("h2");

let buttons=["red","green","yellow","purple"];

document.addEventListener("keypress", function (){
    if(gameStart== false){
        
        gameStart = true;
        levelUp();
       
    }

});


function btnFlash(btn){
btn.classList.add('flash');

setTimeout(()=>{
btn.classList.remove('flash');
},250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomInd=Math.floor(Math.random()*4);
    let randomColor=buttons[randomInd];
   
    gameSeq.push(randomColor);
   console.log(gameSeq);
    let btn= document.querySelector(`.${randomColor}`);
    btnFlash(btn);
}

function reStartGame(){
    gameStart=false;
    level=0;
     gameSeq=[];
     userSeq=[];
}
function check(indx){
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelUp,1000);  
        }
       
    }
    else{ 
      
       h2.innerText=`Game Over,Your Score was ${level}.\nPress any key to start Game`;
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(() => {
        document.querySelector("body").style.backgroundColor="white";
       },150);
    //    setTimeout(reStartGame,2000);
    reStartGame();
    }
}   

function userPress(){
// console.log(this);
let btn = this;
btnFlash(btn);

let btncolor = this.getAttribute("id") ;

userSeq.push(btncolor);
// console.log("user sequence",userSeq);
check(userSeq.length-1);
//levelUp()
}

let btns= document.querySelectorAll(".btns");
for(btn of btns){
    btn.addEventListener("click",userPress)
}