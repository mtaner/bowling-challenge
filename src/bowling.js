function Bowling() {
	this.set_pins = [];
	this.score = [];
};

Bowling.prototype = {
	numberOfPins: function(number){
		this.number = number;
		if(this.number === 10) {
			return this.number = 0
		};
		this.numberKeeper();
		return this.number;
	},

	numberKeeper: function(){
		this.set_pins.push(this.number);
		return this.set_pins;
	},

	setScoreCalculator: function(){
		this.setScore = this.set_pins[0] + this.set_pins[1];
		if(this.setScore === 10) {
			this.setScore = 0
			this.resetSetScore();
		}
		return this.setScore;
	},

	setScoreStrike: function() {
		this.setScore = 10 + this.setScore;
	},

	setScoreSpare: function() {
		this.setScore = 10 + this.set_pins[0];
	},

	resetSetScore: function() {
		this.set_pins = [];
	},

	scoreKeeper: function() {
		var score = this.setScore;
		this.score.push(score);
		return this.score;
	}


};
