var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/app'));
app.use('/js', express.static(__dirname + '/bower_components'));

app.listen(3000);
console.log('Server is running…');