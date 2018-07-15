var express = require('express');
var app = express();

app.get("/", function(req, res) {
    res.send("Hi There, welcome to my assignment");
});

app.get("/speak/:animals", function(req, res) {
    var animals = req.params.animals;
    
    switch ( animals ) {
        case "dog":
            res.send("The dog says 'Woof Woof'");
        case "pig":
            res.send("The pig says 'Oink'");
        case "cow":
            res.send("The cow says 'Moo'");
    }
});

app.get("/repeat/:word/:times", function(req, res) {
    var word = req.params.word;
    var times = parseInt(req.params.times);

    if( isNaN( times ) ) {
        res.redirect("/garbage");
        return;
    }

    var resultStr= "";
    for( var i = 0; i < times; i++ ) {
        resultStr = resultStr + " " + word; 
    }
    res.send(resultStr);
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
    console.log("Server has started!!!");
})