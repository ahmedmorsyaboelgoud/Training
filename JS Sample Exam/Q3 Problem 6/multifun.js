function getvalue(){
    var fname =prompt()
    var lname=prompt()
    var age=prompt()

    return{
        'FirstName' : fname ,
        'LastName ': lname,
        'Age' : age
    };

}
console.log(getvalue())