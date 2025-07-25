const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const botName = "teacherBot";
const botNickname = "Professor Bot";
const botWishName = "coolTBot";
const botLocation = "the universe";
const favoriteSubject = "Computer Science";

console.log("Hi there!");
console.log("I am excited to talk to you.");
console.log("Allow me to introduce myself.");
console.log(`My name is ${botName}.`);
console.log(`I live in ${botLocation}.`);
console.log(`My favorite subject is ${favoriteSubject}.`);

rl.setPrompt("Ask me something, do some math (like '2 + 2'), or type 'bye' to exit: ");
rl.prompt();

rl.on('line', (input) => {
  const message = input.toLowerCase().trim();

  if (message.includes("bye") || message.includes("exit")) {
    console.log("Well, it was nice talking to you. Have a great day!");
    rl.close();
    return;
  }


  const mathRegex = /^([-+]?[0-9]*\.?[0-9]+)\s*([+\-*/])\s*([-+]?[0-9]*\.?[0-9]+)$/;
  const mathMatch = message.match(mathRegex);
  
  if (mathMatch) {
    const num1 = parseFloat(mathMatch[1]);
    const operator = mathMatch[2];
    const num2 = parseFloat(mathMatch[3]);
    
    try {
      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            throw new Error("Division by zero is not allowed!");
          }
          result = num1 / num2;
          break;
        default:
          result = "Unknown operator";
      }
      console.log(`Math result: ${num1} ${operator} ${num2} = ${result}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  } else if (message.includes("nickname")) {
    console.log(`My nickname is ${botNickname}, but I secretly wish people called me ${botWishName}.`);
  } else if (message.includes("name") && !message.includes("nickname")) {
    console.log(`My name is ${botName}.`);
  } else if (message.includes("location") || message.includes("live")) {
    console.log(`I currently reside in ${botLocation}.`);
  } else if (message.includes("subject") || message.includes("favorite")) {
    console.log(`My favorite subject is ${favoriteSubject}!`);
  } else {
    console.log(`You can call me ${botName}, or ${botNickname} if you're feeling formal.`);
    console.log(`You can also ask me to do math operations like "5 + 3" or "10 / 2"`);
  }

  rl.prompt();
});
