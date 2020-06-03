$(document).ready(function(){

  "use strict";

  var navBar = $('.uppernav .navbar');
  $(window).scroll(()=>{
    if($(this).scrollTop() > 10){
      $(navBar).addClass('fixed-navbar');
    }else{
      $(navBar).removeClass('fixed-navbar');
    }
  })



})