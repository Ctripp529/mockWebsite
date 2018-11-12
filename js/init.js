(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function(){
  $('.collapsible').collapsible();
  $(".dropdown-trigger").dropdown({
    hover: true,
    coverTrigger: false
  });
  $('.modal').modal();
  $("#modal1").modal('open');
  
});

    