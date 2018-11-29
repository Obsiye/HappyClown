'use strict'

function Joke(laughAmount, description){
    this.laughAmount = laughAmount;
    this.description = description;
}

Joke.prototype.getLaughAmount = function(){
    return this.laughAmount;
}

Joke.prototype.getDescription = function(){
    return this.description;
}
