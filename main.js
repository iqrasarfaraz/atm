#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000; //Dollar
let mypin = 3311; //mypin
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number",
});
//12345 === 3311 = false
if (pinAnswer.pin === mypin)
    console.log("your pin code is correct!!!");
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "please select options",
        type: "list",
        choices: ["withdraw", "Fast cash", "check balance"],
    },
]);
//if user select widraw
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "please inter your amount",
            type: "number",
        },
    ]);
    if (amountAns.amount <= myBalance) {
        let balance = myBalance - amountAns.amount;
        console.log(`your remaning balance is ${balance}`);
    }
    else {
        console.log(`you have insufficient balance`);
    }
}
else if (operationAns.operation === "Fast cash") {
    let FastcashAns = await inquirer.prompt([
        {
            name: "amount",
            type: "list",
            choices: ["1000", "2000", "2500", "3000"],
        },
    ]);
    if (FastcashAns.amount <= myBalance) {
        let balance = myBalance - FastcashAns.amount;
        console.log(`The remaining balance is ${balance}`);
    }
    else {
        console.log(`you have Insufficient balance`);
    }
}
else if (operationAns.operation === "check balance") {
    console.log(myBalance);
}
else {
    console.log("your pin code is incorrect");
}
