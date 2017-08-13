$(document).ready(function(){
	var images = ["images/pic_1.jpg", "images/pic_2.jpg", "images/pic_3.jpg"];
	var imgIndex = 0;
	
	$('img').after('<span class="caption">Photo Gallary</span>');
	
	$('.next').click(function(){
		if(imgIndex<(images.length-1)){
			imgIndex++;
		}else{
			imgIndex=0;
		}
		
		$('img').attr('src', images[imgIndex]);
	});
	
	$('.prev').click(function(){
		if(imgIndex==0){
			imgIndex = (images.length-1);
		}else{
			imgIndex--;
		}
		
		$('img').attr('src', images[imgIndex]);
	});
	
	$('img').click(function(){
		var el = '<div class="image_box"><span>X</span><img src="'+images[imgIndex]+'"></div>';
		$('body').append(el);
	
		$('.image_box span').click(function(){
			$('.image_box').remove();
		});
	});
	
});