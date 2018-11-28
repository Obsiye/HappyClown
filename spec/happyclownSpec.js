'use strict';

describe('HappyClown', function(){

	var happyClown;
	var mockJoke;

	beforeEach(function(){
		happyClown = new HappyClown();

		mockJoke = jasmine.createSpyObj('joke', ['getLaughAmount']);

		mockJoke.getLaughAmount.and.returnValue(10);

	});

  it('should return the default happinness status value of the clown', function(){
		expect(happyClown.getHappyStatus()).toEqual(10);
	});
	
	describe('clown laughs', function(){
		it('should increase happy status of clown', function() {
			happyClown.laugh(mockJoke);
			expect(happyClown.getHappyStatus()).toEqual(20);
		});
	});

});
