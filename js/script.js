$(document).ready(function() {

$(window).scroll(function(){
    if(this.scrollY > 10){
    }else{
    }
});
 });

 var text = '"Unleash your creativity with Embedded Systems in Embedathon"';
 var index = 0;
 function typeWriter() {
     if (index < text.length) {
         document.getElementById("typewriter").innerHTML += text.charAt(index);
         index++;
         setTimeout(typeWriter, 50);
     }
 }
 typeWriter();