let userscore =0;
let compscore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const option=["rock","paper","scissor"];
    const ranIndx=Math.floor(Math.random()*3);
    return option[ranIndx];
}

const playGame=(userchoice)=>{
    // computer choice
    const compchoice=genCompChoice();
    console.log("your choice is ",userchoice);
    console.log("Computer choice is ",compchoice);

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice)
    });

});