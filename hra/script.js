$(document).ready(function(){
    let arena = $("#arena");
    let playerDom = $("#player");
    let computerDom = $("#computer");
    let ballDOm = $("#ball");
    let userScore = $("#user-score");
    let computerScore = $("#computer-score");
    let gameOver = $("#gameover");


    let Ball = function(element){
        this.x  = arena.innerWidth()/2;
        this.y= arena.innerHeight() /2 ;

        
        
        
        this.radius = 25;

        
    }

}) 
