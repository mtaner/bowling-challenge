// need a play function that will return a random number upto 10.
// when strike - it will add the next two points on top +10
// when spares - it will add the next point on top +10
// when spare/strike in last frame, they can roll for bonus
describe('Bowling', function() {
	var game;
	beforeEach(function(){
		game = new Bowling();
	});

	describe('#play', function(){
		it('returns a random number for pins hit', function(){
			spyOn(Math, 'floor').and.returnValue(4);
			expect(game.play()).toEqual(5)
		});
	});

	
});
