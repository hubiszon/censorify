var censoredWords = ["sad", "bad", "mad"];
var customCensoredWords = [];
function censor (inStr) {
	for (idx in censoredWords) {
		inStr = inStr.replace(censoredWords[idx], "****");
	}
	for (idc in customCensoredWords) {
		inStr = inStr.replace(customCensoredWords[idx], "****");
	}
	return inStr;
}
function addCensoredWords(word) {
	customCensoredWords.push(word);
}
function getCensoredWords() {
	return censoredWords.concat(customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWords = addCensoredWords;
exports.getCensoredWords = getCensoredWords;