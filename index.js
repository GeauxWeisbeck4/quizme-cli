import readline from "node:readline/promises";

const rl = readline.createInterface({
  terminal: true,
  input: process.stdin,
  output: process.stdout,
});

const answer = await rl.question("What is your name?");

console.log(`Your name is ${answer}`);

rl.close();

const answer2 = await rl.qustion("Where do you live?")

console.log(`You live in ${answer2}.`);

rl.close();

// const flags = [];

// process.argv.forEach((arg) => {
//   if(/^-/.test(arg)) {
//     flags.push(arg.replaceAll("-", ""));
//   }
// });

// console.log(flags);

// if(flags.includes("a") || flags.includes("add")) {
//   console.log("add some values");
// } else {
//   console.log("Do some work");
// }

// console.log(process.argv)