'use strict'

describe('Game', function(){
	var game;
	var mockJoke;
	var jokes;
	var joke;

	beforeEach(function(){
		game = new Game();
		mockJoke = jasmine.createSpyObj('joke', ['getDescription']);
		mockJoke.getDescription.and.returnValue('begin to laugh');
	});

	it('should store jokes',function(){
		game.addJoke(mockJoke);
		expect(game.getJokes().length).toEqual(1);
	});

	it('can access stored jokes description',function(){
		game.addJoke(mockJoke);
		jokes = game.getJokes();
		joke = jokes[0];
		expect(joke.getDescription()).toEqual('begin to laugh');
	});

});
