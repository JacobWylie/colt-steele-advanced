$('button').click(function() {
	$.getJSON('https://random.cat/meow') 
	.done(function(data) {
		$('img').attr('src', data.file);
	})
	.fail(function() {
		console.log('AJAX request failed');
	})
})
