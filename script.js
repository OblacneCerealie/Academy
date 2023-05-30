//var message;
//message = Hello! I am an alert box!!; //mozem pisat poznamky

//alert(message);
//var user = "Surja" , age="29", message="Hello!", alive= true
//var a ="moje" + "meno" ;
//alert(a) ;
//var a ="3" + "4" ;
//alert(a) ;
//var c= 5;
//var d=6;
//alert(c==d) ;
//varxx= confirm-potvrdit, prompt
//hey
//function addTextNode(text) {
//var newtext = document.createTextNode(text),
    //p1 = document.getElementById("p1");
    //p1.appendChild(newtext);
//}
//function getNumber () {
//var a1 = document.getElementById('a')
//var b1 = document.getElementById('b')
//var c1 = document.getElementById('c')
//var a = Number (a1.value)
//var b = Number (b1.value)
//var c = a+b
//c1.innerHTML = c ;
//}
//function pause() {
//    clearInterval (slideInterval);

//}
//pauseButton.addEventListener("click", pause);
document.addEventListener("DOMContentLoaded", function() {
var slides = document.querySelectorAll("#slides li")
var currentSlide = 0;
var slideInterval = setInterval (nextSlide, 2000);
var isPaused = false;


function nextSlide (){
if (!isPaused){
    slides[currentSlide].className ="slide";
    currentSlide = (currentSlide+1)%slides.length;
    slides [currentSlide].className = "showing";}

}
function plusOneSlide (){
    slides[currentSlide].className ="slide";
    currentSlide = (currentSlide+1)%slides.length;
    slides [currentSlide].className = "showing";}

function minusOneSlide (){
    slides[currentSlide].className ="slide";
    currentSlide = (currentSlide-1)%slides.length;
    slides [currentSlide].className = "showing";}

function fourthSlide (){
    slides[currentSlide].className ="slide";
    currentSlide = (currentSlide=4)%slides.length;
    slides [currentSlide].className = "showing";}
function mySlide (){
    var userSlide = document.getElementById("a") 
    slides[currentSlide].className ="slide";
    currentSlide = userSlide
    slides [currentSlide].className = "showing";}
function pauseSlideshow (){
    isPaused = !isPaused
}
var pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", pauseSlideshow);
var forwardButton = document.getElementById("forward");
pauseButton.addEventListener("click", plusOneSlide);
var backwardButton = document.getElementById("backward");
pauseButton.addEventListener("click", minusOneSlide);
var fourthButton = document.getElementById("fourth");
pauseButton.addEventListener("click", fourthSlide);
var myButton = document.getElementById("a");
pauseButton.addEventListener("click", mySlide);
});