function Bowling () {
};

Bowling.prototype = {
	play: function() {
		var pinsKnocked = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		var result = pinsKnocked[Math.floor(Math.random() * pinsKnocked.length)];
		return result;
	}
};
