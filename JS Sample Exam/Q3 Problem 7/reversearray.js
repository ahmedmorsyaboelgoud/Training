function reverse(x){
    var y =new Array
    for(var i =x.length-1 ; i >= 0 ; i--){
        y.push(x[i])
    }
    return y ;
}

var arr = [1,2,3,4]
console.log(reverse(arr))