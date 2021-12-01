let js = "amazing";
// if (js === "amazing") alert("Javascript is FUN!");
console.log(40 + 8 + 28 - 10);

let markWeight = 95;
let markHeight = 1.88;

let johnWeight = 85;
let johnHeight = 1.76;
let johnBMI = johnWeight / johnHeight ** 2;
let markBMI = markWeight / markHeight ** 2;

console.log(markBMI, johnBMI);

// console.log (markHigherBMI)

let markHIGHERBMI = markBMI > johnBMI;
console.log(markHIGHERBMI);

if (markHIGHERBMI) {
  console.log(`"Mark's BMI${markBMI} is higher than John's BMI ${johnBMI} !"`);
} else {
  console.log(`"John's BMI ${johnBMI} is higher than Mark's BMI ${markBMI} !"`);
}

/*
 There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
 . Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

let dolphineTeamScores = [97, 112, 101];
let koalasTeamScores = [109, 95, 106];

let dolphineAvg =
  dolphineTeamScores.reduce(function (a, b) {
    return a + b;
  }) / dolphineTeamScores.length;

console.log(dolphineAvg);

let koalasAvg =
  koalasTeamScores.reduce(function (a, b) {
    return a + b;
  }) / koalasTeamScores.length;

console.log(koalasAvg);

if (koalasAvg > dolphineAvg && koalasAvg >= 100) {
  console.log(`Koalas has won with ${koalasAvg}!`);
} else if (dolphineAvg > koalasAvg && koalasAvg >= 100) {
  console.log(`Dolphine has won with ${dolphineAvg}`);
} else if (koalasAvg && dolphineAvg < 100) {
  console.log(`No one has Won`);
} else {
  console.log(
    `It is a draw with dolphine and Koalas scoring ${koalasAvg} ${dolphineAvg}`
  );
}

/*
Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �
 */

let bill = [275, 40, 430];
for (let i = 0; i < bill.length; i++) {
  
  let tip =
    bill[i] >= 50 && bill[i] <= 300 ? bill[i] * (15 / 100) : bill[i] * (20 / 100);
  let totalPaid = bill[i] - tip;

  console.log(`The bill was £${bill[i]} and tip was £${tip} so total paid was £${totalPaid}`);
}

/*
JavaScript Fundamentals – Part 2
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
*/ 

// BOLEAON FALSEY / TRUESY

// Falsey values when converted to a booleon : undefined, 0, '', NAN, NULL

// To check
// console.log(booleon(undefined)) => false
// console.log(booleon('Mike'))  => true

// Usage:
let money = 0;
if(money) {
	console.log(`Don't spend it all`)
} else {
	console.log(`You should get a job!`)
}


//FUNCTIONS   => fUNCTIONS IN FUNCTIONS.

function cutFruitPieces(apples){
  return apples * 4;
}

function fruitProcessor(apples, oranges){
  const applesJuice = cutFruitPieces(apples);
  const orangeJuice = cutFruitPieces(oranges);

  const juice =`You can only get ${applesJuice} classes og apple juice and ${orangeJuice} glasses of orange juice`;
  return juice

}
console.log(fruitProcessor(7,9));


// ARRAYS

const names = new Array("Jon", "James", "Allan", 'craig');
console.log(names)

const jonas = {
	job: 'teacher',
	home: 'london',
	age: 45,
	film: 'shawshanks',
  friends:['Peter', 'Mike', 'Peter']
};

console.log(jonas.job);
const questionHim = prompt('what are you interested in?')
console.log(jonas[questionHim])