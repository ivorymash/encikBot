var glob = require("glob")
fs = require('fs');

function search(str) {
var searchName = str;
var bruh = glob.sync("data/villagers/" + searchName + ".json"); //glob is very nice
bruh = bruh.toString(bruh);
console.log(bruh);

var content = fs.readFileSync(bruh);
var jsonContent = JSON.parse(content);
var output = ">>> ";
output += jsonContent.name + "\n";
output += jsonContent.species + "\n";
output += jsonContent.birthday + "\n";
output += jsonContent.games.nh.personality + "\n";
return output
};

exports.search = search;