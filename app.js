let userscore =0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const uscore=document.querySelector("#user-score");
const cscore=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        uscore.innerText=userscore;
        msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
        // console.log("You Wins");
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        cscore.innerText=compscore;
        msg.innerText=`You Lost! ${compchoice} beats  your ${userchoice}`;
        // console.log("Computer Wins");
        msg.style.backgroundColor="red";
    }
}

const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const ranIndx=Math.floor(Math.random()*3);
    return option[ranIndx];
}

const playGame=(userchoice)=>{
    // computer choice
    const compchoice=genCompChoice();
    // console.log("your choice is ",userchoice);
    // console.log("Computer choice is ",compchoice);

    if(userchoice === compchoice){
        msg.innerText="Game was Draw, Play Again";
        // console.log("Its a Draw");
        msg.style.backgroundColor="rebeccapurple";

    }

    else{
        let userwin=true;
        if(userchoice=="rock"){
            // remaining choise --paper,scissor
            userwin=compchoice==="paper" ? false:true;
        }
        else if(userchoice==="paper"){
            //remaining choice -- rock,scissor
            userwin= compchoice === "scissor" ? false:true;
        }
        else{
            //remaining choice -- rock,paper
            userwin= compchoice === "rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    };
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice)
    });

});