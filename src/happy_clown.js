'use strict'

function HappyClown(){
  this.happyStatus = 10;
}

HappyClown.prototype.getHappyStatus = function(){
  return this.happyStatus;
}

HappyClown.prototype.laugh = function (joke) {
  this.happyStatus += joke.getLaughAmount();;
}
