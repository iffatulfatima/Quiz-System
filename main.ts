#! usr/bin/env node

import { chalkStderr } from "chalk";
import inquirer from "inquirer";

// console.log("Welcome to the Science Quiz!");
// console.log("Please answer the following questions to the best of your ability.");

const user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What's your name?"
    },
]);

console.log("Please answer the following questions to the best of your ability.");
console.log("Let's start the quiz!");


const quiz: {
    question_1: number;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is the atomic number of C?",
        choices: ["6", ".7", ".8", ".9"]   // 6
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.Which of the following gas is reduced in the reduction process",
        choices: ["Oxygen", "Helium", "Nitrogen", "Hydrogen"]   // Hydrogen
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.Acid turns blue litmus paper into which color?",
        choices: ["Blue", "Red", "Orange", "Green"]   // Red
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.Which of the following enzymes is not present in the human stomach?",
        choices: ["Trypsin", "Mucus", "Hcl", "Pepsin"]   // Trypsin
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.Which of the following gland is present in the human mouth? ",
        choices: ["Adrenal", "Piturity", "Gonads", "Salivary"]   // Salivary
    },
]);

let score: number = 5;

switch(quiz.question_1) {
    case 7:
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1. Incorrect!");
}

switch(quiz.question_2) {
    case "Hydrogen":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2. Incorrect!");
}

switch(quiz.question_3) {
    case "Red":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3. Incorrect!");
}

switch(quiz.question_4) {
    case "Trypsin":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4. Incorrect!");
}

switch(quiz.question_5) {
    case "salivary":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5. Incorrect!");
}

console.log("Thank you for taking the quiz!");


