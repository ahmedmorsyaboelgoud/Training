var arr = [{ id: 1, username: 'fred' }, 
  { id: 2, username: 'bill'}, 
  {id: 3 , username: 'john'},
  { id: 4, username: 'ted' }
];

function userExists(username) {
    if(username=='john'){
        return true
    }
    else{
        return false
    }
}
console.log(userExists('ahmed')); 
