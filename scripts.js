$(function(){

// Zmiana CSS elementów przez jQuery

  // $('span').each(function(index, element) {
  // 	if (index % 2 == 0) {
  // 		$(element).css('color', 'red');
  // 	}
  // });

  	$('span:even').css('color', 'red');

// Dodanie nowego elementu za pomocą jQuery

  	$('p').each(function(index, element) {
  	var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
  	$(element).append(button)
 	});


// Dodanie event handlerów

	$('button').click(function() {
	alert($(this).attr('data-tmp'))
	});


})
