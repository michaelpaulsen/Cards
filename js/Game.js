$(document).ready(function () {
	var debug = true;
	var discard = [];
	var trys = 0;
	var suits = ["s", "h", "c", "d",/**"Joker"*/];
	var value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K",/**"Joker"*/];
//	var Game = function(){
	var Player = function () {
		this.card = [];
	};
	var player1 = new Player();
	var aintibug = function(data){
		if(debug){
			console.log(data);
			console.log("mike inc.")
		}
	};
		var isPlaying = false;
		var times = 0;
			/*main*/
     			while (player1.card.length < 3) {
			var randCard = Math.floor(Math.random() * value.length);
			var randSuit = Math.floor(Math.random() * suits.length);
			//var card = suits[randSuit] + value[randCard];
			if (!player1.card.includes(suits[randSuit]) && !player1.card.includes(value[randCard])) {
				player1.card.push(suits[randSuit] + value[randCard]);
				/*display line*/
				$("#inercards").append("card" + player1.card.length + ": " + suits[randSuit] + value[randCard] + " <br />");
				times++;
		  	}
			}
     			/*top card*/
			var topCardPicked =false;
			if (times === 3) { 
				while(!topCardPicked) {	
					var randTopCard = Math.floor(Math.random() * value.length);
					var randTopSuit = Math.floor(Math.random() * value.length);
					if(suits[randTopSuit] != undefined && value[randTopCard] != undefined){
					if(!player1.card.includes(suits[randTopSuit]) && !player1.card.includes(value[randTopCard])){
						discard.push( suits[randTopSuit] + value [randTopCard]);
						$("#inercards").append("top card:" + discard[discard.length - 1] + "<br>");
						topCardPicked = true;
					}
				}
			};
	    	}
		//};

					
        /*star a new game*/
	var startGame= function(){  
		game = new Game();
		game.isPlaying = true;
		if(game.isPlaying){
			document.getElementById("startGame").Button.setEnabled(false);
			console.log(game.isPlaying)
		}
	}
	/*end game*/
	var giveUp = function(){
		location.reload();
	}
	/*new game*/
	var newGame = function(){
		location.reload();
		newGame();
		//console.error("this buttion dose nothing")
	}
	document.getElementById("startGame").addEventListener("click",startGame);
	document.getElementById("end").addEventListener("click",giveUp);
	document.getElementById("newGame").addEventListener("click",newGame);
	/*debug*/
	aintibug(player1.card +"\n" + discard + "\n" + discard.length + "\n" + discard );

})