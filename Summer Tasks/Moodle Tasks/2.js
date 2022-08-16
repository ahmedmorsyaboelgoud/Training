for(var i=1 ; i <= 100 ; i++){

if(i % 5==0 && i % 7==0){
    console.log("Fizz Buzz")
}
else if(i & 5==0){
    console.log("Fizz")
}
else if(i % 7){
    console.log("Buzz")
}
else{
    console.log(i)
}

}