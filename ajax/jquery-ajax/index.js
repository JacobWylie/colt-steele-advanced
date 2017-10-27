$('button').click(function() {
	$.getJSON('https://random.cat/meow', function(data) {
		$('img').attr('src', data.file);
	})
})
