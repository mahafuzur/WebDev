$(document).ready(function () {
  $(".animate").click(function () {
    $(".box").animate({
      left: '50%',
      marginLeft: "-150px",
      fontSize: "30px",
      opacity: '1'
    }, 2000, function () {
      $(".text").text("Animation Complete, I came from callback function");
    });
  });

});
