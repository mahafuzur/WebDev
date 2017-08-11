$(document).ready(function () {

  $(".injectHtml").click(function () {
    var text = $("#userInput").val();
    $("#output").html(text);
  });

  $(".injectText").click(function () {
    var text = $("#userInput").val();
    $("#output").text(text);
  });
  $(".reset").click(function () {
    location.reload();
  });
});
