$(document).ready(function() {
    $(document).keydown(function(key) {

        switch(parseInt(key.which,10)) {
			case 65:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			case 83:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
			case 87:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			case 68:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			default:
				break;
		}
		var m=$('img').position();
		if((m.left===128 || m.left===136) && m.top===78)
		{
		    alert("Ganaste!");
            $('div').css('background-color','green');
		}


	});
});
