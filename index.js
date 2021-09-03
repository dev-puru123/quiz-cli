var readlineSync = require("readline-sync");
console.log("Do You Know Me Quiz");

var userName = readlineSync.question("Enter your Name Please\n");

console.log("Welcome " + userName.toUpperCase() + " to Do You Know Puru Quiz");

console.log(
  "\nThere Are Total Of Five Questions...." +
    "\nFor Each Correct Answer, You Will Get 10 Points...." +
    "\nFor Each Wrong Answer 5 Point Will Be Deducted....."
);
console.log("\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n");

var question_obj = [
  {
    question: "Where Do I Live?\n",
    answer: "Kanpur",
  },

  {
    question: "What's My Age?\n",

    answer: "25",
  },

  {
    question: "In Which City Is My College?\n",
    answer: "Allahabad",
  },

  {
    question: "What Is My Favourite Food?\n",
    answer: "Chicken Biryani",
  },

  {
    question: "What Is My Favourite Fruit?\n",
    answer: "Mango",
  },
];

var score = 0;

function PlayGame(question, answer) {
  var userAnswer = readlineSync.question(question);
  // console.log(userAnswer);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\nYou Are Right");
    score = score + 10;
    console.log("Your Current Score : " + score);
    console.log("\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n");
  } else {
    console.log("\nYou are Wrong");
    score = score - 5;
    console.log("Your Current Score : " + score);
    console.log("\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n");
  }
}

var j = 1;
for (var i = 0; i < question_obj.length; i++) {
  console.log("Question Number- " + j++ + "\n");
  PlayGame(question_obj[i].question, question_obj[i].answer);
}

console.log( "Your Final Score Is " + score + "\n Thank You For Taking The Quiz");

if (score === 50) {
  console.log("You Know Puru Very Well");
}
if (score < 0) {
  console.log("Sorry..retry");
}
