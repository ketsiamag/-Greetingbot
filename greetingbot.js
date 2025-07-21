const readline = require('readline');

//  real-time input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let botName = "teacherBot";
let botLocation = "the universe";
let favoriteSubject = "Computer Science";

console.log("Hi there!");
console.log("I am excited to talk to you.");
console.log("Allow me to introduce myself.");
console.log("My name is " + botName + ".");
console.log("I live in " + botLocation + ".");
console.log("My favorite subject is " + favoriteSubject + ".");

rl.setPrompt("Ask me something or type 'bye' to exit: ");
rl.prompt();

rl.on('line', function (input) {
  const message = input.toLowerCase();

  // Respond to keywords
  if (message.includes("name")) {
    console.log("You can call me " + botName + ", or Professor Bot if you're feeling formal.");
  } else if (message.includes("location")) {
    console.log("I currently reside in " + botLocation + ".");
  } else if (message.includes("subject")) {
    console.log("My favorite subject is " + favoriteSubject + "!");
  } else if (message.includes("nickname")) {
    console.log("My nickname is awesomeTeacherBot, but I still go by " + botName + ".");
  } else if (message.includes("bye") || message.includes("exit")) {
    console.log("Well, it was nice talking to you. Have a great day!");
    rl.close();
  } else {
    console.log("Hmm... I didn't quite understand that. Try asking about my name, location, or subject.");
  }

  rl.prompt();
});
