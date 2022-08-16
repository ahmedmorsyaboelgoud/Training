let num1 = Number(prompt())
let num2 = Number(prompt())

if(num1 < 0 && num2 > 0){
console.log("Number1 is negative & Number2 is positive")
}
else if(num1 > 0 && num2 < 0){
console.log("Number1 is positive & Number2 is negative")
}
else if(num1 > 0 && num2 > 0){
console.log("Both are positive")
}
else{
    console.log("Both are negative")
}