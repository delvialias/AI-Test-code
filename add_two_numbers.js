// Simple program to add three numbers in JavaScript

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter first number: ', (first) => {
  rl.question('Enter second number: ', (second) => {
    rl.question('Enter third number: ', (third) => {
      const num1 = parseFloat(first);
      const num2 = parseFloat(second);
      const num3 = parseFloat(third);
      const sum = num1 + num2 + num3;
      console.log(`The sum is: ${sum}`);
      rl.close();
    });
  });
}); 