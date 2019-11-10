//TODO: gets user information from form instead of user test array.

//test array
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

//test user
var userTest = {
	name: 'david',
	photo:
		'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg',
	scores: [1, 1, 4, 4, 3, 1, 2, 4, 4, 1]
};

// take an array and total up each element
function total(sum, element) {
	return (sum += element);
}

var userScore = userTest.scores.reduce(total); // used to get total user's score

// totals friends score and added to scoreTotal array
var scoreTotal = [];

function scoreTotaler() {
	for (let i = 0; i < friends.length; i++) {
		var score = friends[i].scores;
		scoreTotal.push(score.reduce(total));
	}
}

//finds the difference between two numbers
function difference(num1, num2) {
	return Math.abs(num1 - num2);
}

// substracts each friends' scores with user score
var diff = [];

function diffFunct() {
	scoreTotaler();

	for (let i = 0; i < friends.length; i++) {
		var differ = difference(scoreTotal[i], userScore);
		diff.push(differ);
	}
}

// take an array in finds the lowest number
function lowestNum(arr) {
	return Math.min(...arr); // three periods are needed to use Math.min() with an array
}

// compares the lowest score difference between friend and user
function friendMatch() {
	diffFunct();

	var minimize = lowestNum(diff);

	for (let i = 0; i < friends.length; i++) {
		if (diff[i] === minimize) {
			var matched = friends[i].name;
			console.log(matched);
		}
	}
}

friendMatch();
