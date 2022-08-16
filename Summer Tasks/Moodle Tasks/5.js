let num1 = Number(prompt("Enter the first num"))
let num2 = Number(prompt("Enter the second num"))
let sum = num1+num2
if(num1==50 && num2!=50 && sum!=50){
console.log("True")
}
else if(num1!=50 && num2==50 && sum!=50){
console.log("True")
}
else if(num1!=50 && num2!=50 && sum==50){
    console.log("True")
}
else{
    console.log("False")
}
