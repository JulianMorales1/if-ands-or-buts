const prompt = require('prompt-sync')();

let TotalBill = Number(prompt("How much is the bill?: "))
let Person1 = Number(prompt("How much did person 1 pay?: "))
let Person2 = Number(prompt("How much did person 2 pay?: "))

let Half = TotalBill/2

if(Person1 === Person2){
    console.log("They paid evenly")
}else if (Person1 >= Person2){
    console.log("Person" + " " + "2" + " " + "owes" + " " + "Person" + " " + "1" + " " + (TotalBill/2 - Person2) + " " + "dollar")
}else if (Person2 >= Person1){
    console.log("Person" + " " + "1" + " " + "owes" + " " + "Person" + " " + "2" + " " + (TotalBill/2 - Person1) + " " + "dollar")
}
