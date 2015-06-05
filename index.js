var express = require('express');
var app = express();
var json = {
            "Name":"Entrust",
            "Group":"DataCaed",
            "Address":{
                        "Country":"Canada",
                        "Province":"Ontario",
                        "City":"Ottawa"
                        }
            };

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.json(json);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
