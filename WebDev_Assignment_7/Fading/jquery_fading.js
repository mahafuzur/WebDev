$(document).ready(function(){
  $(".fade_in").click(function(){
    $(".one").fadeIn(2000);
  });
  $(".fade_out").click(function(){
    $(".one").fadeOut(2000);
  });
	
	
	$(".toggle").click(function(){
		$(".two").fadeToggle(2000, function(){
			if($(".toggle").text() === "Fade Out"){
				$(".toggle").text("Fade In");
				$(".hint").show(1000);
			}else{
				$(".toggle").text("Fade Out");
				$(".hint").hide(1000);
			}
		})
	});
	
	
	$(".fade_to").click(function(){
    $(".three").fadeTo(2000, 0.3);
  });
	
});