'use strict'

function Game(happyClown){
	this.jokes = [];
	this.happyClown = happyClown;
	this.name;

}


Game.prototype.getJokes = function(){
   return this.jokes;
}

Game.prototype.getHappyClown = function (){
	return this.happyClown;
}

Game.prototype.addJoke = function(joke){
    this.jokes.push(joke);
}

Game.prototype.uploadJokes = function(arrayOfJokes){
	for(var index in arrayOfJokes){
		var joke = arrayOfJokes[index];
		this.jokes.push(new Joke(joke.laugh, joke.content))
	}
}