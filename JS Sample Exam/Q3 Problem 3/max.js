var arr=[100 , 200 , 300 ,600 ,400 , 500]
var largest=0

for(var i =0 ; i < arr.length ; i++){
    if(arr[i] > arr[largest]){
        largest=i
    }
   
}
console.log (`the largest numbers is ${arr[largest]} it's index =  ${largest}`)

