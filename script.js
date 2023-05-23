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
document.addEventListener("DOMContentLoaded", function() {
var slides = document.querySelectorAll("#slides li")
var currentSlide = 0;
var slideInterval = setInterval (nextSlide, 2000);

function nextSlide (){
    slides[currentSlide].className ="slide";
    currentSlide = (currentSlide+1)%slides.length;
    slides [currentSlide].className = "showing";

}
});