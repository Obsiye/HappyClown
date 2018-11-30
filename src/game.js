'use strict'

function Game(happyClown){
	this.jokes = [new Joke(-1, 'the chicken did not cross the road'),
		new Joke(1, 'an eye for an eye but not before an e. hehe.'),
		new Joke(2, 'just laugh please'),
		new Joke(5, 'ha')
	];
	this.name;

}


Game.prototype.getJokes = function(joke){
   return this.jokes;
}

Game.prototype.getHappyClown = function (happyClown){
	return this.happyClown;
}

Game.prototype.addJoke = function(joke){
    this.jokes.push(joke);
}



function Greeter(){
	this.name;

	function setName(name){
		this.name = name;
	}

	function getName(){

	}

}
