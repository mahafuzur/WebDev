$(document).ready(function(){
  $(".animate").click(function(){
		$(".box").animate({
			left:'50%',
			marginLeft: "-150px",
			fontSize: "30px",
			opacity:'1'
			},2000, function(){
				$(".text").animate({
					right: "150px"
				});
			});
  });
	
	$(".reset").click(function(){
		$(".text").animate({
			right: "-100%"
		}, 2000, function(){
			$(".box").animate({
				left:'-100%',
				marginLeft: "0px",
				fontSize: "16px",
				opacity:'0'
			});
		});
	});
});