
// when strike - it will add the next two points on top +10
// when spares - it will add the next point on top +10
// when spare/strike in last frame, they can roll for bonus
describe('BowlingScore', function() {
	var bowlingScore;
	beforeEach(function(){
		bowlingScore = new BowlingScore();
	});

	describe('numberOfPins', function(){
		it('understands the number user feeds in for pins knocked', function(){
			expect(bowlingScore.numberOfPins(5)).toEqual(5);
		});

	});

	describe('numberKeeper', function(){
		it('stores the number of pins knocked in an array ', function(){
			bowlingScore.numberOfPins(5);
			bowlingScore.numberKeeper();
			bowlingScore.numberOfPins(4);
			expect(bowlingScore.numberKeeper()).toEqual([5, 4])
		});

	});


	


	// describe('#normalScore', function(){
	// 	it('calculates the score outside of strike and spare', function(){
	//
	//
	// 	});
	//
	// });



});
