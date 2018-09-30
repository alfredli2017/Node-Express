/*

exports.getFortune = function() {
	var index = Math.floor(Math.random() * fortunes.length);
	return fortunes[index];
}
*/

var fortunes = [
   "one",
   "two",
   "three",
   "four",
   "five",
   "six",
   "seven"
];

module.exports = {
	getFortune : function() {
		var index = Math.floor(Math.random() * fortunes.length);
		return fortunes[index];
	}
}
