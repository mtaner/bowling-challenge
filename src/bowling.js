function Bowling() {
	this.set_pins = [];
	this.score = [];
};

Bowling.prototype = {
	numberOfPins: function(number){
		this.number = number;
		return this.number;
	},

	numberKeeper: function(){
		this.set_pins.push(this.number);
		return this.set_pins;
	},

	setScoreCalculator: function(){
		if(this.set_pins[0] === 10) {
			this.setScoreStrike();
		} else {
			this.setScore = this.set_pins[0] + this.set_pins[1];
		};
		this.resetSetScore();
		return this.setScore;
	},

	setScoreStrike: function() {
		if(this.setScore) {
			this.setScore = 10 + this.setScore;
		} else {
			this.setScore = undefined
		};
	},

	setScoreSpare: function() {



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
