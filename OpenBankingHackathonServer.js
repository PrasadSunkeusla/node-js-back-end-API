const express = require('express')
const app = express()
const port = 3000


var obj = '{ "Meta": { "TotalPages": 1  }, "Links": { "Self": "/accounts/" },"Data": {"Account": { "Account": [ { "SecondaryIdentification": "YHGT56915473", "SchemeName": "sortCodeAccountNumber", "Identification": "CV67BN56349812", "Name": "Dave Gracia" }  ], "AccountId": "00111111111","Currency": "GBP", "Nickname": "Dave"  } }}'


app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


app.get('/accounts/:AccountID', (req, res) => res.send(obj))

var server = app.listen(8000, '0.0.0.0', function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});


//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
