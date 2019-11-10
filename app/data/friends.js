var friends = [
	{
		name: 'Ahmed',
		photo:
			'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
		scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
	},
	{
		name: 'bob',
		photo:
			'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
		scores: [2, 1, 3, 4, 4, 1, 2, 1, 4, 1]
	},
	{
		name: 'steve',
		photo:
			'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
		scores: [1, 1, 4, 4, 3, 1, 2, 4, 4, 1]
	}
];

var user = {
	name: 'david',
	photo:
		'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
	scores: [1, 1, 4, 4, 3, 1, 2, 4, 4, 1]
};

function total(a, b) {
	return (a += b);
}

function difference(a, b) {
	return Math.abs(a - b);
}

function min() {
	return Math.min(...diff);
}

var userScore = user.scores.reduce(total);

var scoreTotal = [];

function scoreTotaler() {
	for (let i = 0; i < friends.length; i++) {
		scoreTotal.push(friends[i].scores.reduce(total));
	}
}

var diff = [];
function diffFunct() {
	scoreTotaler();

	for (let i = 0; i < friends.length; i++) {
		var differ = difference(scoreTotal[i], userScore);
		diff.push(differ);
	}
}

function minimizer() {
	diffFunct();

	var minimize = min();

	for (let i = 0; i < friends.length; i++) {
		if (diff[i] === minimize) {
			var matched = friends[i].name;
			console.log(matched);
		}
	}
}

minimizer();
