function BowlingScore() {
	this.set_pins = [];
};

BowlingScore.prototype = {
	numberOfPins: function(number){
		this.number = number;
		return this.number;
	},

	numberKeeper: function(){
		this.set_pins.push(this.number);
		return this.set_pins;
	}



};
