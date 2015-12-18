$(document).ready(function(){

  /*$(window).on("scroll", function(){
    if ($(this).scrollTop() > 60 ){
      $(".navbar-transparent").css({"background-color":"rgba(0, 0, 0, 0.8)", "color":"white"});
      $(".navbar-transparent .navbar-brand,.navbar-transparent .navbar-nav > li > a").css("color","white");
  }
  else{
    $(".navbar-transparent").css("background-color","transparent");
    $(".navbar-transparent .navbar-brand,.navbar-transparent .navbar-nav > li > a").css("color","black");
  }

  });*/

  $(function(){
    $(window).scroll(function(e){
      if ($(this).scrollTop() > 0) {
        $(".navbar").css({
          "background": "rgba(0, 0, 0, 0.7)",
          "box-shadow": "0 0 2px black"
        });
      }
      else {
        $(".navbar").css({
          "background": "transparent",
           "box-shadow": "0 0 0px transparent"
        });
      }
    });
  })

  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

})
