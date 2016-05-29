/* js for index.html */

$( document ).ready(function(){
	$('#page1').on('click', function(){
			$('.my-des').hide();
			$('.my-skills').show();	
	});
	$('#page2').on('click', function(){
			$('.my-skills').hide();
			$('.my-project').show();	
	});
});