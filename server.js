const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('app/public'));

require('./app/routing/apiRoutes.js')(app);

require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
	console.log('Server listening on http://localhost:' + PORT);
});
