// JavaScript Document
$(document).ready(function(){
    $("#toggle-nav").click(function(){
		
		if ($("#drop-nav").hasClass('hidden-xs hidden-sm'))
		{
			$('#drop-nav').animate({height: '130px'});
			$("#drop-nav").removeClass('hidden-xs hidden-sm');
		}
		else
		{
			$('#drop-nav').animate({height: '0px'});
			$("#drop-nav").addClass('hidden-xs hidden-sm');
		}
		
    });

});

$(document).ready(function(){
	var t = 0;

var slider = function()
	{
		if (t == 3)
			{
				t = 0
			}
		$('.slider-container').eq(t-1).addClass('hidden');
		$('.slider-container').eq(t).removeClass('hidden');
		t++;
	}

setInterval(slider, 3000)
});