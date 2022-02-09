const prompt = require('prompt-sync')();
const pinCode = 1234

let digits = Number(prompt("Enter a 4 digit Pin: " ))

if (digits === pinCode){
    console.log("Success")
}else if (digits !== pinCode){
    console.log("Failure")
}
