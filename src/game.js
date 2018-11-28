'use strict'

function Game(){
    this.jokes = []
}

Game.prototype.getJokes = function (joke) {
   return this.jokes;
}

Game.prototype.addJoke = function(joke){
    this.jokes.push(joke);
}
