// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOw

$('#shoot').click(function() {
    
       
    userChoice = $('#input').val();
    $('#userChoice').text(userChoice);
    var randomNumber = Math.random();
    
    console.log(randomNumber);
    
    if (randomNumber >.66666) {
        computerChoice = "rock";
    }
    else if (randomNumber >.33333 && randomNumber <.66666) {
         computerChoice = "paper";
        
    }
    else if (randomNumber <.33333){
        computerChoice = "scissors";
    }
    
    
    if (computerChoice === "rock" && userChoice === "rock") {
        winner = "Tie";
    }
    
    else if (computerChoice === "paper" && userChoice === "rock") {
        winner = "computer";
    }
    
    else if (userChoice === "rock" && computerChoice === "scissors") {
        winner = "computer";
    }
    
    else if (userChoice === "paper" && computerChoice === "rock") {
        winner ="user";
    }
    
    else if (userChoice === "paper" && computerChoice === "paper") {
        winner ="Tie";
    }
    
    else if  (userChoice === "paper" && computerChoice === "scissors") {
        winner="computer";
    }
    
    else if (userChoice ==="scissors" && computerChoice === "rock") {
        winner="computer";
    }
    
    else if (userChoice === "scissors" && computerChoice === "paper") {
        winner ="user";
    }
    
    else if (userChoice === "scissors" && computerChoice ==="scissors") {
        winner= "Tie"; 
    }
    
    
    $("#result").text(winner);
    $("#input").text("");
    $("#computerChoice").text(computerChoice);
});
 
 var userChoice = "";
 var computerChoice = "";
 var winner = "";
 
