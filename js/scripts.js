// EASTERN CONFERENCE
document.getElementById("east").addEventListener("click", getEast);

function getEast() {
	var x = [
		'Atlanta Hawks',
		'Boston Celtics',
		'Brooklyn Nets',
		'Charlotte Hornets',
		'Chicago Bulls',
		'Cleveland Cavaliers',
		'Detroit Pistons',
		'Indiana Pacers',
		'Miami Heat',
		'Milwaukee Bucks',
		'New York Knicks',
		'Orlando Magic',
		'Philadelphia 76ers',
		'Toronto Raptors'
	];

	var rand = x[Math.floor(Math.random() * x.length)];

	document.getElementById("east").innerHTML = rand;

	return rand;

}

// disable button after click
function myEast() {
    document.getElementById("east").disabled = true;
}

// WESTERN CONFERENCE
document.getElementById("west").addEventListener("click", getWest);

function getWest() {
	var y = [
		'Dallas Mavericks',
		'Denver Nuggets',
		'Golden State Warriors',
		'Houston Rockets',
		'Los Angeles Clippers',
		'Los Angeles Lakers',
		'Memphis Grizzlies',
		'Minnesota Timberwolves',
		'New Orleans Pelicans',
		'Oklahoma City Thunder',
		'Phoenix Suns',
		'Portland Trail Blazers',
		'Sacramento Kings',
		'San Antonio Spurs'
	];

	var rand = y[Math.floor(Math.random() * y.length)];

	document.getElementById("west").innerHTML = rand;

	return rand;
}

// disable button after click
function myWest() {
    document.getElementById("west").disabled = true;
}

// make the championship button available


// CHAMPION
document.getElementById("champ").addEventListener("click", getChamp);

// select champ from the two conference winners
function getChamp(){
	var z = [
		getEast,
		getWest
	];

	var rand = z[Math.floor(Math.random() * z.length)]();

	document.getElementById("champ").innerHTML = rand;
}

// disable button after click
function myChamp() {
    document.getElementById("champ").disabled = true;
}

// show "Good Luck"
function luck() {
	document.getElementById('luck').style.display = "block";
}
