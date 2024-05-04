#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellow("\n \t\t Code With Areeba - Word Counter"));
console.log("=".repeat(60));

let user_ans = await inquirer.prompt({
    type: "input",
    name: "Words",
    message: "Please Enter your sentence",
})

let word_count = user_ans.Words.trim().split(" ").length
console.log("=".repeat(60));

console.log(chalk.bold("- Sentence Words"));
console.log(user_ans);

console.log(chalk.bold(`\n - Your Sentence Has ${chalk.bold.redBright(word_count)} Words.`));
console.log("=".repeat(60));