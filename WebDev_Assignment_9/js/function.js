$(document).ready(function () {

  /* menu click event */

  $('.menu li').click(function () {
    $(this).children("ul").slideToggle();
  });

  $('.menu li ul').parent('li').children('a').append(' <i class="fa fa-angle-down" aria-hidden="true"></i>');

  $('.toggle_menu').click(function () {
    $('.menu').slideToggle();
  });

  $(window).resize(function () {
    var screenSize = $(window).width();
    if (screenSize > 799) {
      $(".menu").show();
    } else {
      $(".menu").hide();
    }
  });






  var link = $('.scrol_to_top');

  $(window).scroll(function () {
    if ($('body').scrollTop() > 200) {
      link.css({
        "bottom": "20px"
      });
      /* adding fixed class in menu */
      $('.header').addClass('fixed');
    } else {
      link.css({
        "bottom": "-9999px"
      });
      /* remove fixed class in menu */
      $('.header').removeClass('fixed');
    }
  });

  link.click(function () {
    $("body").animate({
      scrollTop: 0
    }, 1000);
  });



});
