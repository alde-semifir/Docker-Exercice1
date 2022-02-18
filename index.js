let express = require('express');
let util = require('util');
let app = express();
app.get('/', function(req, res){
    res.setHeader('Content-Type', 'text/plain');
    res.end(util.format('%s - %s\n', new Date, 'Requête reçue'));
});
app.listen(3333)