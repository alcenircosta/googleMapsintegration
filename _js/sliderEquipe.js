$(function(){
// Funcao que irá apresentar os slides da equipe Nosso Time
var delay = 3000;
var curIndex = 0;
var ant;

initSlider();
autoPlay();
function initSlider(){
	ant = $('.sobre-autor').length;
	var sizeContainer = 100 * ant;
	var sizeBoxSingle = 100/ ant;
	$('.sobre-autor').css('width',sizeBoxSingle+'%');
	$('.scrollWraper').css('width',sizeContainer+'%');
	for(var i = 0; i < ant; i++){
		if(i == 0){
			$('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>')
		}else{
			$('.slider-bullets').append('<span></sapn>');
		}
	}
}

function autoPlay(){
	setInterval(function(){
		curIndex++;
		if(curIndex == ant){
			curIndex = 0;
			goToSlider(curIndex);
		}else{
			goToSlider(curIndex);
		}
	},delay);
}

function goToSlider(curIndex){
var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.sobre-autor').offset().left;
	$('.slider-bullets span').css('background-color','rgb(200,200,200)');
	$('.slider-bullets span').eq(curIndex).css('background-color','rgb(170,170,170)');
	$('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
}
$(window).resize(function(){
var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.sobre-autor').offset().left;

	$('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});	
})
})