'use strict'

describe('Game', function(){
	var game;
	var mockJoke;
	var jokes;
	var joke;
	var happyClown;
	var arrayOfJokes = [{"content":"the chicken did not cross the road", "laugh":-5}];

	beforeEach(function(){
		happyClown = jasmine.createSpyObj('happyClown', ['getHappyStatus','getHappyClown']);
		happyClown.getHappyClown.and.returnValue(this);
		happyClown.getHappyStatus.and.returnValue(10);
		game = new Game(happyClown);
		mockJoke = jasmine.createSpyObj('joke', ['getDescription']);
		mockJoke.getDescription.and.returnValue('begin to laugh');
	});

	it('should store jokes', function(){
		game.addJoke(mockJoke);
		expect(game.getJokes().length).toEqual(5);
	});

	it('should upload jokes', function(){
		console.log(arrayOfJokes);
		game.uploadJokes(arryOfJokes);
		firstGameJoke = game.getJokes()[0];
		expect(firstGameJoke.getDescription()).toEqual(arrayOfJokes[0].content)
	});

	it('should store a happyclown', function () {
		happyClown = game.getHappyClown();
		expect(happyClown.getHappyStatus()).toEqual(10);
	});

	it('can access stored jokes description', function(){
		game.addJoke(mockJoke);
		jokes = game.getJokes();
		joke = jokes[4];
		expect(joke.getDescription()).toEqual('begin to laugh');
	});

});
