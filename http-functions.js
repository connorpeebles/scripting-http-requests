var https = require("https");

module.exports = function getHTML(options, callback) {

  https.get(options, function(response) {

    response.setEncoding("utf8");

    var bufferedStr = "";

    response.on("data", function(data) {
      bufferedStr += data;
    });

    response.on("end", function() {
      callback(bufferedStr);
    });

  });
};