import inquirer from "inquirer";

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
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "live",
      message: "Where do you live?",
      choices: ["Raleigh", "Bozeman", "Helena", "Lincoln"]
    },
  ]);

  console.log(`Your name is ${answers.name}`);
  console.log(`You live in ${answers.live}.`);
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