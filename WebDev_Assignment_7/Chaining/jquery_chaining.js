$(document).ready(function () {
  $(".animate").click(function () {
    $(".box").animate({
      left: '50%',
      marginLeft: "-150px",
      fontSize: "30px",
      opacity: '1'
    }, 2000, function () {
      $(".text").animate({
        right: "150px"
      });
      // chining the method 
      $(".box").slideUp(2000).slideDown(2000).css({
        "background-color": "orange"
      });
    });
  });

  $(".reset").click(function () {
    $(".text").animate({
      right: "-100%"
    }, 2000, function () {
      $(".box").animate({
        left: '-100%',
        marginLeft: "0px",
        fontSize: "16px",
        opacity: '0'
      }).css("background-color", "crimson");
    });
  });

  $(".stop").click(function () {
    $(".box").stop();
    $(".text").stop();
  });
});
