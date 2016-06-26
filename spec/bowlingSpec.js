// need a play function that will return a random number upto 10.
// when strike - it will add the next two points on top +10
// when spares - it will add the next point on top +10
// when spare/strike in last frame, they can roll for bonus
describe('Bowling', function() {
	var game;
	beforeEach(function(){
		game = new Bowling();
	});

	describe('#playRoundOne', function(){
		it('returns a random number for pins hit', function(){
			spyOn(Math, 'floor').and.returnValue(4);
			expect(game.playRoundOne()).toEqual(5);
		});
	});

	describe('#playRoundTwo', function() {
		it('allows the return of a random number that is left over from play round one', function() {
			spyOn(Math, 'floor').and.returnValue(4);
			game.playRoundOne();
			game.playRoundTwo();
			expect(game.roundTwoPins).toEqual([1,2,3,4,5])
		});

		it('returns a random number from the roundTwoPins array', function(){
			spyOn(Math, 'floor').and.returnValue(3);
			game.playRoundOne();
			spyOn(Math, 'floor').and.returnValue(4);
			expect(game.playRoundTwo()).toEqual(5);
		});

		it('returns 0 when player strikes', function(){
			spyOn(Math, 'floor').and.returnValue(9)
			game.playRoundOne();
			expect(game.playRoundTwo()).toEqual(0);
		});


	});

	describe("#resetSetScore", function(){
		it('empties set_score array after round two', function(){
			game.playRoundOne();
			game.playRoundTwo();
			expect(game.set_score).toEqual([])
		});
	});

	describe('#addSetScore', function() {
		it('keep scores for round 1 and 2 for every set of the game', function(){
			spyOn(Math, 'floor').and.returnValue(4);
			game.playRoundOne();
			expect(game.set_score).toEqual([5]);
		});

	});


	describe('#gameScore', function() {
		it('stores the set scores', function() {
			game.playRoundOne();
			game.playRoundTwo();
			expect(game.game_score.length).toBe(1)
		});


	})



	// describe('#setOfGame'), function() {
	// 	it('knows the which set player is in', function(){
	//
	//
	// 	});
	//
	// };


});
