$(document).ready(function(){
  $(".hide").click(function(){
    $(".one").hide(2000);
  });
  $(".show").click(function(){
    $(".one").show(2000);
  });
	
	
	$(".toggle").click(function(){
		$(".two").toggle(2000, function(){
			if($(".toggle").text() === "Hide"){
				$(".toggle").text("Show");
				$(".hint").show(1000);
			}else{
				$(".toggle").text("Hide");
				$(".hint").hide(1000);
			}
		})
	})
});