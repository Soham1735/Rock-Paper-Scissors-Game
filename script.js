let userscore=0;
let compscore=0;
let msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score")
const compscorepara=document.querySelector("#comp-score")

const drawGame=()=>{
    console.log("The game is Draw")
    msg.innerHTML="The Game was Draw Play Again"
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerHTML=userscore;
        msg.innerHTML=`You Win! ${userChoice} beats ${compchoice}`
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerHTML=compscore
        msg.innerHTML=`You Lose ${compchoice} beats ${userChoice}`
        msg.style.backgroundColor="red";
    }
}
const genComputerChoice=()=>{
    const options =["rock","paper","scissors"]
    const ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx]
}
const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compchoice=genComputerChoice();
    console.log("computer choice =",compchoice)

   if(userChoice==compchoice){
    drawGame();
   }else{
    userwin=true;
    if(userChoice==="rock"){
        userwin=compchoice==="paper" ? false :true;
    }else if(userChoice==="paper"){
        userwin=compchoice==="scissors" ?false :true;
    }else{
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compchoice)
   }

    
}


const choices=document.querySelectorAll(".choice")
choices.forEach((choice)=>{
   
    console.log(choice)
    choice.addEventListener("click",()=>{
         const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    })
})
