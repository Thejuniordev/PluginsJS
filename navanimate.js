$(function(){
   $(window).scroll(function(){
       var topscroll = $(window).scrollTop();
       
       if (scroll > 100) {
           $('#navbar').removeClass("navbar-default").addClass("navbar-style");
       }
       else {
           $('#navbar').removeClass("navbar-style").addClass("navbar-default");
       }
   }); 
});