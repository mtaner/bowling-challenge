
// when strike - it will add the next two points on top +10
// when spares - it will add the next point on top +10
// when spare/strike in last frame, they can roll for bonus
describe('BowlingScore', function() {
	var game;
	beforeEach(function(){
		game = new Bowling();
	});

	describe('#numberOfPins', function(){
		it('understands the number user feeds in for pins knocked', function(){
			expect(game.numberOfPins(5)).toEqual(5);
		});

	});

	describe('#numberKeeper', function(){
		it('stores the number of pins knocked in an array ', function(){
			game.numberOfPins(5);
			game.numberOfPins(4);
			expect(game.set_pins).toEqual([5, 4])
		});

	});

	describe('#setScoreCalculator', function(){
		it('calculates the score of a set', function(){
			game.set_pins = [4,5]
			expect(game.setScoreCalculator()).toEqual(9)
		});


	});

	describe('#setScoreStrike', function() {

		it('adds 10 the next set score', function(){
			game.numberOfPins(10);
			game.numberOfPins(5);
			game.numberOfPins(4);
			game.setScoreCalculator();
			game.setScoreStrike();
			expect(game.setScore).toEqual(19);
		});

		it('adds the total score to previous score after first set', function() {
			this.score = [9]
			game.numberOfPins(10);
			game.numberOfPins(5);
			game.numberOfPins(4);
			game.setScoreCalculator();
			game.setScoreStrike();
			expect(game.setScore).toE
		});
	});


	describe('#setScoreSpare', function() {
		it('adds 10 to the next set\'s first score' , function() {
			game.numberOfPins(6);
			game.numberOfPins(4);
			game.setScoreCalculator();
			game.numberOfPins(4);
			game.setScoreSpare();
			expect(game.setScore).toEqual(14);
		});


	});

	describe('#resetSetScore', function(){
		it('deletes the set_pins array after it is passed to the calculator', function() {
			game.set_pins = [4,5];
			game.resetSetScore();
			expect(game.set_pins).toEqual([]);

		});

	});

	describe('#scoreKeeper', function(){
		it('keeps the score of each set', function() {
			game.set_pins = [4,5];
			game.setScoreCalculator();
			expect(game.scoreKeeper()).toEqual([9]);
		});

	});



});
