'use strict'

function Game(){
	this.jokes = [new Joke(1, 'the chicken did not cross the road'),
		new Joke(1, 'an eye for an eye but not before an e'),
		new Joke(10, 'just laugh clown'),
		new Joke(30, 'ha')
	]
}

Game.prototype.getJokes = function (joke) {
   return this.jokes;
}

Game.prototype.addJoke = function(joke){
    this.jokes.push(joke);
}
