$(document).ready(function () {
  $(".remove").click(function () {
    $(".box").remove();
  });
  $(".empty").click(function () {
    $(".box").empty();
  });

  $('.reset').click(function () {
    location.reload();
  });
});
