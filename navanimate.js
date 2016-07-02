// Adicionando classe para a animação da navbar
$(function(){
   $(window).scroll(function(){
       var topscroll = $(window).scrollTop();
       
       if (scroll > 587) {
           $('#navbar').removeClass("navbar-default").addClass("navbar-style");
       }
       else {
           $('#navbar').removeClass("navbar-style").addClass("navbar-default");
       }
   }); 
});

// Adicionando aumento e diminuição do "height"

$(function(){
    $(window).scroll(function(){
        var top = document.getElementById('header');
        var down = window.pageYOffset;
        
        if(down > 587) {
            top.style.height = "70px";
        }
        else{
            top.style.height = "150px";
        }
    });
});