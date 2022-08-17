setTimeout(function(){
    setTimeout(function(){
        console.log(1);
        setTimeout(function(){
            console.log(2);
        },500)

    },1000 ) 
},2000 )
console.log(0)
