const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.send("<center><h1>HELLO, WORLD!</h1><h2> To use calculator go to /calculator.</h2><h3>To calculate BMI go to /bmi. To convert F to C go to /ftoc.</h3><h1>Have a nice day /aboutMe</h1></center>")
});

//Home button page route from /aboutMe

app.get("/aboutMe", function(require, respond){
  respond.sendFile(__dirname + "/aboutMe.html");
});

app.post("/aboutMe", function(require, respond){
  respond.redirect("/");
});

// to calculale

app.get("/calculator", function(require, respond){
  respond.sendFile(__dirname + "/calculator.html");
});
app.post("/add", function(require, respond){


  var num1 = Number(require.body.num1);
  var num2 = Number(require.body.num2);
  var result = num1 + num2;

  respond.send("<h1><center>The result of the calculation is " + result + ".</center></h1>");
});

app.get("/calculator", function(require, respond){
  respond.sendFile(__dirname + "/calculator.html");
});
app.post("/subtract", function(require, respond){

  var num3 = Number(require.body.num3);
  var num4 = Number(require.body.num4);
  var result = num3 - num4;


    respond.send("<h1><center>The result of the calculation is " + result + ".</center></h1>");
  });


  app.get("/calculator", function(require, respond){
    respond.sendFile(__dirname + "/calculator.html");
  });
  app.post("/multiply", function(require, respond){


  var num5 = Number(require.body.num5);
  var num6 = Number(require.body.num6);

  var result = num5 * num6;


    respond.send("<h1><center>The result of the calculation is " + result + ".</center></h1>");
  });


  app.get("/calculator", function(require, respond){
    respond.sendFile(__dirname + "/calculator.html");
  });
  app.post("/divide", function(require, respond){


  var num7 = Number(require.body.num7);
  var num8 = Number(require.body.num8);

  var result = num7 / num8;


  respond.send("<h1><center>The result of the calculation is " + result + ".</center></h1>");
});


//BMI calculator

app.get("/bmi", function(require, respond){
  respond.sendFile(__dirname + "/bmi.html");
});


app.post("/bmi", function(require, respond){

  var weight = parseFloat(require.body.weight);
  var height = parseFloat(require.body.height);

  var bmi = Math.floor(weight / (height * height));

  respond.send("<h1><center>Your BMI is " + bmi + ".</center></h1>");
//       if (bmi <= 18 || bmi >= 25) {
// document.querySelector("h1").innerHTML = "Healthy BMI is between 18 and 25.";
// }

});

// Farenghate to Celsius converter

app.get("/ftoc", function(require, respond){
  respond.sendFile(__dirname + "/ftoc.html");
});


app.post("/ftoc", function toCelsius(require, respond) {
  fahrenheit = Number(require.body.fahrenheit);
    result = Math.floor((5/9) * (fahrenheit-32));

  respond.send("<h1><center>" + fahrenheit +  " Fahrenheit equals to " + result + " Celsius.</center></h1>");
});




app.listen(3000 || process.env.Port, function() {
  console.log("Server started on port 3000.")
});
