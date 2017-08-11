$(document).ready(function(){
  $(".slide_up").click(function(){
    $(".one").slideUp(2000);
  });
  $(".slide_down").click(function(){
    $(".one").slideDown(2000);
  });
	
	
	$(".toggle").click(function(){
		$(".two").slideToggle(2000, function(){
			if($(".toggle").text() === "Slide Up"){
				$(".toggle").text("Slide Down");
				$(".hint").show(1000);
			}else{
				$(".toggle").text("Slide Up");
				$(".hint").hide(1000);
			}
		})
	})
});