$(function(){
	// Funcao para dar scroll ate o menu selecionado sem atualizar a pagina
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;
		$('html,body').animate({'scrollTop':offSetTop});
		return false;
	})
})