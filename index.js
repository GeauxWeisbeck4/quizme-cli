import inquirer from "inquirer";
import fs from "node:fs/promise"

const flags = [];
process.argv.forEach((arg) => {
  if(/^-/.test(arg)) {
    flags.push(arg.replaceAll("-", ""));
  }
});

if(flags.includes("a") || flags.includes("add")) {
  addQuestion();
} else {
  askQuestion();
}

async function askQuestion() {
  const data = await fs.readFile("./data.json");
  const parsedData = JSON.parse(data.toString());

  const { question, answer } = parsedData[0]

  const answers = await inquirer.prompt([
    { type: "input", name: "pyramid", message: question}
  ]);

  if (answers.pyramid === answer) {
    console.log("That's right!");
  } else {
    console.log("Not this time!");
  }
}

// const rl = readline.createInterface({
//   terminal: true,
//   input: process.stdin,
//   output: process.stdout,
// });





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