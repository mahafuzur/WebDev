$(document).ready(function () {
  $(".increaseFontSize").click(function () {
    $(".font").css("font-size", "50px");
  });
  $(".decreaseFontSize").click(function () {
    $(".font").css("font-size", "5px");
  });
  $(".bgGreen").click(function () {
    if ($(".font").css("background-color") === "rgb(220, 20, 60)") {
      $(".font").css("background-color", "rgb(0, 128, 0)");
    } else {
      $(".font").css("background-color", "rgb(220, 20, 60)");
    }
  });
});
