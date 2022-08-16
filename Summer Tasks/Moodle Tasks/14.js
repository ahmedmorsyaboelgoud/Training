let x = Number(prompt("Input the number"))
let sum=1 
for(var i=x ; i > 1;i--){
sum*=i
}
console.log("The factorial of "+ x +" is: "+ sum)