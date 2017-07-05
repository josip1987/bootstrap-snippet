// carousel stop na hover

$(document).ready(function() {
  $('#quote-carousel').carousel({
    pauseOnHover: true,
    interval: 3000,
  });
});


// search overlay

$(document).ready(function(){
	$('.search-icon').on('click', function(event) {                    
		$('#search').addClass('open');
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});            
});

// scroll to top arrow

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        
        $('#return-to-top').fadeIn(100);   
    } else {
        $('#return-to-top').fadeOut(100);  
    }
});

$('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                      
    }, 300);
});	

// optional hover za dropdown

/*$('.dropdown').hover(function(){ 
  $('.dropdown-toggle', this).trigger('click'); 
});
*/
