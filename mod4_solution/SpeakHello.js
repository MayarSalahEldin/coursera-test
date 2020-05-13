const helloSpeaker = {
	speakWord: 'Hello',	
};

(function () {
	helloSpeaker.speak = function (userName) {
		return (helloSpeaker.speakWord + " " + userName);
	}
}());
