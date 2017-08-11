$(document).ready(function () {
  $(".click").click(function () {
    $(this).css({
      "background-color": "orange",
      "font-size": "40px"
    });
  });

  $(".dblclick").dblclick(function () {
    $(this).css({
      "background-color": "green",
      "font-size": "40px"
    });
  });


  $(".mouseenter").mouseenter(function () {
    $(this).css({
      "background-color": "orange",
      "font-size": "40px"
    });
  });

  $(".mouseleave").mouseleave(function () {
    $(this).css({
      "background-color": "green",
      "font-size": "40px"
    });
  });

  $(document).keydown(function () {
    $(".keypress").css({
      "background-color": "orange",
      "font-size": "40px"
    });
  });

  $(window).resize(function () {
    $(".resize").css({
      "background-color": "green",
      "font-size": "40px"
    });
  });

});
