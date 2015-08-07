$(window).load(main);

function main(){
	menuHover();
	principal();
	about();
	proyects();
	news();
	contact();
}
/*________________________________ Parcticles effect on hover ________________________________*/
function menuHover(){
	/*____________________________ ABOUT ____________________________*/
	$('.about').mouseenter(function(){
		applyCss($('.box1'), 'background', 'rgba(0,0,0,0.01)');
	}).mouseleave(function() {
        applyCss($('.box1'), 'background', 'rgba(0,0,0,1)');
    });

	/*____________________________ PROYECTS ____________________________*/
    $('.proyects').mouseenter(function(){
		applyCss($('.box2'), 'background', 'rgba(0,0,0,0.01)');
	}).mouseleave(function() {
        applyCss($('.box2'), 'background', 'rgba(0,0,0,1)');
    });

	/*____________________________ NEWS ____________________________*/
    $('.news').mouseenter(function(){
		applyCss($('.box3'), 'background', 'rgba(0,0,0,0.01)');
	}).mouseleave(function() {
        applyCss($('.box3'), 'background', 'rgba(0,0,0,1)');
    });

	/*____________________________ CONTACT ____________________________*/
    $('.contact').mouseenter(function(){
		applyCss($('.box4'), 'background', 'rgba(0,0,0,0.01)');
	}).mouseleave(function() {
        applyCss($('.box4'), 'background', 'rgba(0,0,0,1)');
    });
}

function applyCss(element, style, value){
	element.css(style, value);
}
/*________________________________ Effects on click ________________________________*/
function principal(){
	inFrontOf(1);
}

function about(){
	$('.about').click(function(){
		inFrontOf(2);
	});
	$('.returnAb .wrapper').click(function(){
		inFrontOf(1);
	});
}

function proyects(){
	$('.proyects').click(function(){
		inFrontOf(3);
	});
	$('.returnPr .wrapper').click(function(){
		inFrontOf(1);
	});
}
function news(){
	$('.news').click(function(){
		inFrontOf(4);
	});
	$('.returnNe .wrapper').click(function(){
		inFrontOf(1);
	});
}

function contact(){
	$('.contact').click(function(){
		inFrontOf(5);
	});
	$('.returnCo .wrapper').click(function(){
		inFrontOf(1);
	});
}

function inFrontOf(section){
	$('.proyectsSection, .aboutSection, .contactSection, .newsSection, .main, .title').css('z-index', '0');
	switch(section){
		case 1:
			main_fadeIn();
		break;
		case 2:
			ab_fadeIn();
		break;
		case 3:
			pr_fadeIn();
		break;
		case 4: 
			ne_fadeIn();
		break;
		case 5: 
			co_fadeIn();
		break;
	}
}
/*________________________________ Fade in effects ________________________________*/

function main_fadeIn(){
	$('.title').css('z-index', '350');
	$('.box .content').css('display', 'none');
	$('.main').css('z-index', '300');
	console.log('main_fadeIn()');
	$('.about').fadeIn(1000, function(){
		$('.proyects').fadeIn(1000, function(){
			$('.news').fadeIn(1000, function(){
				$('.contact').fadeIn(1000);
			});
		});
	});
}

function pr_fadeIn(){
	$('.proyectsSection').css('z-index', '200');
	$('.pr-column2, .pr-column4, .pr-column5, .pr-column7').show();
	$('.pr-column1').fadeIn(1000, function(){
		$('.pr-column6').fadeIn(1000, function(){
			$('.pr-column3').fadeIn(1000, function(){
				$('.pr-column8').fadeIn(1000);
			});
		});
	});
}

function ab_fadeIn(){
	$('.aboutSection').css('z-index', '200');
	$('.ab-column').hide().fadeIn(2000);
}

function ne_fadeIn(){
	$('.newsSection').css('z-index', '200');
	$('.ne-column').hide().fadeIn(2000);
}

function co_fadeIn(){
	$('.contactSection').css('z-index', '200');
	$('.co-column').hide().fadeIn(2000);
}