document.addEventListener("DOMContentLoaded", function() {

	var currentPlayer = "X";
	var gameState = "start";
	var c = ['-','-','-','-','-','-','-','-','-']; // cell contents

	function updateGameState(cell) {
		var cellNumber = cell.id - 1;
		c[cellNumber] = cell.innerHTML;

		if (c[0]===c[1]&&c[1]===c[2]&&c[0]!=='-'||
			c[3]===c[4]&&c[4]===c[5]&&c[3]!=='-'||
			c[6]===c[7]&&c[7]===c[8]&&c[6]!=='-'||
			c[0]===c[3]&&c[3]===c[6]&&c[0]!=='-'||
			c[1]===c[4]&&c[4]===c[7]&&c[1]!=='-'||
			c[2]===c[5]&&c[5]===c[8]&&c[2]!=='-'||
			c[0]===c[4]&&c[4]===c[8]&&c[0]!=='-'||
			c[2]===c[4]&&c[4]===c[6]&&c[2]!=='-') {
			document.getElementById('turn').innerHTML = "Game over";
			alert("Player " + cell.innerHTML + " wins!");
			gameState = "end";
		} else if (c.indexOf('-')===-1) {
			document.getElementById('turn').innerHTML = "Game over";
			alert("It's a draw!");
			gameState = "end";
		} else {
			document.getElementById('turn').innerHTML = "It is " + currentPlayer + "'s turn";
			if (currentPlayer==="X") {
				document.getElementById('turn').style.color = '#c0392b';
			} else {
				document.getElementById('turn').style.color = '#2980b9';
			}		
		}
	}

	function updateCell(cell) {
		if (gameState==="start") {
			gameState = "running";
			clearButton.innerHTML = "Clear board";
		}
		if (cell.innerHTML==="" && gameState==="running") {
			if (currentPlayer=="X") {
				cell.innerHTML = "X";
				cell.className = cell.className + " X";
				currentPlayer = "O";
			} else {
				cell.innerHTML = "O";
				cell.className = cell.className + " O";
				currentPlayer = "X";
			}
			return "valid move";
		}
	}

	var cells = document.getElementsByClassName('cell');

	for (i=0;i<9;i++) {	
		cells[i].addEventListener("click", function() {
			if (updateCell(this)==="valid move") {
				updateGameState(this);
			}
		});
	}

	var clearButton = document.getElementById('clear');
	
	clearButton.addEventListener("click", function() {

		if (gameState==="start") {
			if (currentPlayer==="X") {
				currentPlayer = "O";
				document.getElementById('turn').style.color = '#2980b9';
			} else {
				currentPlayer = "X";
				document.getElementById('turn').style.color = '#c0392b';
			}
			document.getElementById('turn').innerHTML = "It is " + currentPlayer + "'s turn";
		} else {
			for (i=0;i<9;i++) {
				cells[i].innerHTML = "";
				cells[i].className = "cell";
			}
			c = ['-','-','-','-','-','-','-','-','-'];
			clearButton.innerHTML = "Change player";
			gameState = "start";
			currentPlayer = 'X';
			document.getElementById('turn').innerHTML = "It is " + currentPlayer + "'s turn";
			if (currentPlayer==="X") {
				document.getElementById('turn').style.color = '#c0392b';
			} else {
				document.getElementById('turn').style.color = '#2980b9';
			}
			clearButton.innerHTML = "Change player";
		}
	});

})