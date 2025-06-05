let boxes=document.querySelectorAll(".box");
let resetbtn= document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let count=0;


let turnO=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];
const resetgame=()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            box.classList.add("o-style");
            turnO=false
        }else{
            box.innerText="X";
             box.classList.add("x-style");
            turnO=true
        }
        box.disabled= true;
        count++;
        checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const checkWinner=()=>{
    for ( let pattern of winPatterns){
       let pos1Val= boxes[pattern[0]].innerText;
       let pos2Val= boxes[pattern[1]].innerText;
       let pos3Val= boxes[pattern[2]] .innerText;
       if  (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("winner",pos1Val)
        showWinner(pos1Val);
        disableBoxes();
       }
    }
    if (count === 9) {
        msg.innerText = `It's a Draw! `;
        msgcontainer.classList.remove("hide");
    }
};

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);