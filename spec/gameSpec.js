'use strict'

describe('Game', function(){
	var game;
	var mockJoke;

	beforeEach(function(){
		game = new Game();
		mockJoke = jasmine.createSpyObj('joke', ['getLaughAmount']);
	});

	it('should store jokes',function(){
		game.addJoke(mockJoke);
		expect(game.getJokes().length).toEqual(1);
	});

});
