function Bowling() {
	// this.game_score = [];
	this.set_score = [];
	this.game_score = [];
};

Bowling.prototype = {
	playRoundOne: function() {
		var pinsKnocked = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		this.result = pinsKnocked[Math.floor(Math.random() * pinsKnocked.length)];
		this.addSetScore();
		return this.result;
	},

	playRoundTwo: function() {
		if(this.result === 10) {
			this.result = 0;
		} else {
			this.roundTwoPins = [];
			for (var i = 1; i <= (10-this.result); i++) {
			this.roundTwoPins.push(i);
			this.result = this.roundTwoPins[Math.floor(Math.random() * this.roundTwoPins.length)];
			}
		};
		this.addSetScore();
		this.gameScore();
		this.resetSetScore();
		return this.result;
	},

	addSetScore: function(){
		this.set_score.push(this.result);
		return this.set_score;
	},

	gameScore: function(){
		this.game_score.push(this.set_score);
		return this.game_score;
	},

	resetSetScore: function() {
		this.set_score = [];
	}
};

// game = new Bowling();
// console.log(game.playRoundOne());
// console.log(game.playRoundTwo());
//
// console.log(game.set_score);
// game.addSetScore();
// console.log(game.set_score);
