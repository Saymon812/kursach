$(document).ready(function() {
	$('.header__head').removeClass('header__head_hidden').addClass('bounceInDown');
	$('.header__arrow').click(function(){
		var pos = $('section#resume').offset().top;
		$('body').animate({
			scrollTop: pos,
		},
			1000);
	});

	wayPoint();

	$(window).scroll(function() {
		wayPoint();
	});

});

function wayPoint() {
	var posSkills = skills.getBoundingClientRect();
		if(posSkills.top <= 400) {
			$('.skills-card').removeClass('header__head_hidden').addClass('fadeInLeft')
		}
}