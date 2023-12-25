let choices=document.querySelectorAll(".choice");
choices.forEach(choice => {
     choice.addEventListener("click",()=>{
       id= choice.getAttribute("id");
        playGame(id);
     })
});
let yourScore=document.getElementById("yourScore");
let compScore=document.getElementById("compScore");
 let player=false;

function playGame(userChoice){
    compChoice=getCompChoice();
    if(userChoice == compChoice)
    {
        result="Game is draw!";
    }
    else if(userChoice == "rock")
    {

       if(compChoice == "paper")
      {
        result ="you lose!Your rock lost with paper";
        player=false;
      }else{
       result= "you won!Your rock won with scissors";
       player=true;
      }
    }
    else if(userChoice == "paper")
    {
      if(compChoice == "rock")
      {
        result= "you won!Your paper won with rock"
        player=true;
      }
     else{
      result="you lose!Your paper lose with scissors";
      player=false;
     } 
      

    }
    else if(userChoice == "scissors")
    {
        if(compChoice == "rock"){
          result= "you lose!Your scissors lose with rock";
          player=false;
        }
          else
          {
            result="you won!Your scissors won with paper";
            player=true;
          }
          
      

    }
    getWinner(result);
}
let msg=document.getElementById("message");
function getWinner(result){
    msg.innerText=result;
    getChangeColor(result);
}

function getCompChoice(){
    arr=["rock","paper","scissors"];
    randomNum=Math.floor(Math.random()*3);
    return arr[randomNum];
}
 function getChangeColor(result){
         if(player == true && result !== "Game is draw!")
         {
              msg.style.backgroundColor="green";
              yourScore.innerHTML++;
              
         }
        else if(player == false && result !== "Game is draw!")
         {
              msg.style.backgroundColor="orange";
              compScore.innerHTML++;
    
         }
         if(result == "Game is draw!"){
            msg.style.backgroundColor="black";
         }
 }