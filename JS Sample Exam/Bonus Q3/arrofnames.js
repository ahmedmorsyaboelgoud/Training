var arr = [{ id: 1, username: 'fred' }, 
  { id: 2, username: 'bill'}, 
  {id: 3 , username: 'john'},
  { id: 4, username: 'ted' }
];

function userExists(username) {
    return arr.some(function(ex) {
        return ex.username === username;
    }); 
}

console.log(userExists('john')); 
