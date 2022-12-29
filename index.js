import readline from "node:readline";

const rl = readline.createInterface({
  terminal: true,
  input: process.stdin,
  output: process.stdout,
});

console.log("What is your name?");

let inmput = "";

rl.input.on("keypress", (event, rl) => {
  console.log(event, rl)
})

console.log(process.argv);

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