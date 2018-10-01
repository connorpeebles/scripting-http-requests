var https = require("https");

function getAndPrintHTML(options) {

  https.get(options, function(response) {

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

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step3.html"
};

getAndPrintHTML(requestOptions);