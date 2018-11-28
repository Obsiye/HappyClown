'use strict'

describe('Joke', function(){

	var description;
	var joke;

	beforeEach(function(){
		description = 'knock knock. who\'s there? Candice. Candice who? Candice door open, or what?';
		joke = new Joke(10,description);
	});

	it('should have a laugh_amount value',function(){
		expect(joke.getLaughAmount()).toEqual(10);
	});

});
