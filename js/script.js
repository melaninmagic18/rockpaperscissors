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
});
 
 var userChoice = "";
 var computerChoice = "";
 var winner = "";
 
