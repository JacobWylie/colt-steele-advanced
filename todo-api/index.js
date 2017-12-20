const express      = require('express'),
	  app          = express(),
	  bodyParser   = require('body-parser'),
	  port 	       = process.env.PORT || 3000;

const todoRoutes   = require('./routes/todos');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
	res.send('Hello World');
})

app.use('/api/todos', todoRoutes);

app.get('*', (req, res) => {
	res.send('Wrong turn');
})



app.listen(port, () => {
	console.log(`App is running on port ${port}`);
})