let userscore = 0;
let compscore = 0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawgame = () => {
    msg.innerText = "game was draw.play again";
    msg.style.backgroundColor = "#081b31";
};
const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userchoice) => {
    console.log("user choice=",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice === compchoice){
        //draw game
        drawgame(); 
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin=compchoice === "paper" ? false :true;
        }else if(userchoice === "paper"){
            userwin=compchoice === "scissors" ? false : true;
        }else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});