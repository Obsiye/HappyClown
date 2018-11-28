'use strict'

function Joke(laughAmount, description){
    this.laughAmount = laughAmount;
    this.description = description;
    Joke.jokes = [];

    function all(){
        Joke.jokes.push(this);
    }
    all();
};

Joke.prototype.getLaughAmount = function(){
    return this.laughAmount;
}

Joke.all = function() {
    return Joke.jokes;
}
