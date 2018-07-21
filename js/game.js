// Draw board
var html = '<table border="1"><tr>';
for (let i = 0; i < 9; i++) {
	if (i%3 === 0 && i !== 0) {
		html += '</tr><tr>'
	}
	html += '<td id="'+i+'" style="padding: 20px;"> </td>';
}
html += '</tr></table>';
document.getElementById("tictactoe").innerHTML = html;

// Game logic
for (let i = 0; i < 9; i++) {
	document.getElementById(i).addEventListener('click', function() {
		if (playerTurn('X') && document.getElementById(i).innerHTML !== 'O' && !gameEnds()) {
			document.getElementById(i).innerHTML = 'X';
			if (wins('X')) {
				document.getElementById('win').innerHTML = 'Player X wins';
			}
		} else if (playerTurn('O') && document.getElementById(i).innerHTML !== 'X' && !gameEnds()) {
			document.getElementById(i).innerHTML = 'O';
			if (wins('O')) {
				document.getElementById('win').innerHTML = 'Player O wins';
			}
		} else if (gameEnds()) {
			clearBoard();
		}
	});
}

/**
 * Determines if it's a player's turn
 * 
 * @param string
 * @return boolean
 */
function playerTurn(player) {
	var isPlayerTurn = false;
	if (player === 'X' && totalMoves() % 2 === 0) {
		isPlayerTurn = true;
	} else if (player === 'O' && totalMoves() % 2 === 1) {
		isPlayerTurn = true;
	}
	return isPlayerTurn;
}

/**
 * Get total number of moves made
 * 
 * @return int
 */
function totalMoves() {
	var filled = 0;
	for (let i = 0; i < 9; i++) {
		if (document.getElementById(i).textContent === 'X' || document.getElementById(i).textContent === 'O') {
			filled++;
		}
	}
	return filled;
}

/**
 * Determines if game ends
 * 
 * @return boolean
 */
function gameEnds() {
	var gameEnds = false;
	if (document.getElementById('win').textContent !== '' || totalMoves() === 9) {
		gameEnds = true;
	}
	return gameEnds;
}

/**
 * Determines if a player wins
 * 
 * @param string
 * @return boolean
 */
function wins(player) {
	var wins = false;
	for (let i = 0; i < 3; i++) {
		if (document.getElementById(0+i*3).textContent === player && 
			document.getElementById(1+i*3).textContent === player && 
			document.getElementById(2+i*3).textContent === player) {
			wins = true;
			break;
		} 
		if (document.getElementById(0+i).textContent === player && 
			document.getElementById(3+i).textContent === player && 
			document.getElementById(6+i).textContent === player) {
			wins = true;
		break;
		}
	}
	if (document.getElementById(0).textContent === player && 
		document.getElementById(4).textContent === player && 
		document.getElementById(8).textContent === player) {
		wins = true;
	}
	if (document.getElementById(2).textContent === player && 
		document.getElementById(4).textContent === player && 
		document.getElementById(6).textContent === player) {
		wins = true;
	}
	return wins;
}

/**
 * Clear board
 */
function clearBoard() {
	for (let i = 0; i < 9; i++) {
		document.getElementById(i).innerHTML = '';
	}
	document.getElementById('win').innerHTML = '';
}

