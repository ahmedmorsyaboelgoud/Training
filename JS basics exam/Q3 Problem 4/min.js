var arr=[100 , 200 , 1 ,300 ,600 ,400 , 500]
var min=0

for(var i =0 ; i < arr.length ; i++){
    if(arr[i] < arr[min]){
        min=i
    }
   
}
console.log (`the minimum numbers is ${arr[min]} `)

