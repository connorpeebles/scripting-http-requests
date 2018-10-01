var https = require("https");

function getAndPrintHTML () {

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

  https.get(requestOptions, function(response) {

    response.setEncoding("utf8");

    var bufferedStr = "";

    response.on("data", function(data) {
      bufferedStr += data;
    });

    response.on("end", function() {
      console.log(bufferedStr);
    });

  });
}

getAndPrintHTML();