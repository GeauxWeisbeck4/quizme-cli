// import fs from "fs";

// const contents = fs.readFileSync("./data.json");
// console.log(JSON.parse(contents.toString()));

// // Common callback pattern - nonblocking
// fs.readFile("./data.son", (error, contents) => {
//   if (error) {
//     console.log(error);
//     process.exit(1);
//   }
//   console.log(JSON.parse(contents.toString()))
// })
import fs from "fs/promises";

try {
  const contents = await fs.readFile("./data.json");
  console.log(JSON.parse(contents.toString()));
} catch (error) {
  console.log(error);
  process.exit(1);
}
