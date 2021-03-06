var response;

$.getJSON('/data', function(data){
	response = data.jokes;
});

$(document).ready(function(){
	var happyClown = new HappyClown();
	var game = new Game(happyClown);
	var clown;
	var buttons;

	function uploadJokes(arrayOfJokes){
		game.uploadJokes(arrayOfJokes);
	}
	console.log(response);

	function displayClownHappyStatus(game) {
		clown = game.getHappyClown();
		$('#happyStatus').text(clown.getHappyStatus());
	}

	function displayQuestion(game){
		console.log('hello');
		jokes = game.getJokes();
		console.log(game.getJokes());
		for(var i = 1; i < 5; i++){
			var button;
			var jk;
			var content;

			button = document.createElement("button"); 
			jk = "joke" + i;
			button.setAttribute("id", jk);
			button.setAttribute("class", jokes[i - 1].getLaughAmount());
			content = document.createTextNode(jokes[i - 1].getDescription());

			button.appendChild(content);
			$('#joke_choices').append(button);
		}
		console.log('hello not here');
	}

	uploadJokes(response);
	displayQuestion(game);
	displayClownHappyStatus(game);

	buttons = $(':button');
	for (var i = 0; i < buttons.length; i++) {
		
		$(buttons[i]).on('click', function(){
			var num = parseInt($(this).attr('id').match(/\d+/)[0]) - 1;
			game.getHappyClown().laugh(game.getJokes()[num]);
			updateHappyStatus();
		});
	}

	function updateHappyStatus(){
		$('#happyStatus').text(clown.getHappyStatus());
	}
	
});
