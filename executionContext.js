var name = "haris";
var ig = "@haritssr";

function newIg(ig) {
  console.log(arguments);
  console.log(typeof arguments);
  var url = "https:/instagram.com/";
  return url + ig;
}

console.log(newIg("@people", "@people2"));
