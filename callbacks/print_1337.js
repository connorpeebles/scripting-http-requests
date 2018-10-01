var getHTML = require("../http-functions");

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/1337.html"
};

function print1337(html) {
  var dictionary = {a: "4", e: "3", l: "1", o: "0", s: "5", t: "7", ck: "x", er: "0r", you: "j00"};
  var splitStr = html.split("");
  for (var i = 0; i < splitStr.length; i++) {
    var char = splitStr[i];
    if (char in dictionary) {
      splitStr[i] = dictionary[char];
    }
  }
  console.log(splitStr.join(""));
}

getHTML(requestOptions, print1337);