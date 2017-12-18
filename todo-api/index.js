const express = require('express'),
	  app     = express(),
	  port 	  = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World');
})

app.get('*', (req, res) => {
	res.send('Wrong turn');
})

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
})