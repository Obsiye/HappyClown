
$(document).ready(function(){
	var happyClown = new HappyClown();
	var game = new Game(happyClown);
	var clown;

	function displayClownHappyStatus(game) {
		clown = game.getHappyClown();
		
		$('#happyStatus').text(clown.getHappyStatus());

	}
	
	displayClownHappyStatus(game);
		
});
