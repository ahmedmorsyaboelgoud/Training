let num1 = Number(prompt("Enter first number"))
let eq = prompt("Enter one of ( + , - , * , / )")
let num2 = Number(prompt("Enter second number"))

if(eq=="+"){
    console.log(num1+num2)
}
else if(eq=="-"){
    console.log(num1-num2)
}
else if(eq=="*"){
    console.log(num1*num2)
}
else if(eq=="/"){
    console.log(num1/num2)
}