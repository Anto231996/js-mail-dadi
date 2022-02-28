// -- DADI -- //
let userNumberRandom = Math.floor(Math.random() * 6) + 1;
console.log(userNumberRandom)
let botNumberRandom = Math.floor(Math.random() * 6) + 1;
console.log(botNumberRandom)

if(userNumberRandom > botNumberRandom) 
console.log('YouWin!');
else if (userNumberRandom < botNumberRandom) 
console.log('YouLose!');
else 
console.log('Draw!');

// -- EMAIL -- //
const agreeEmails = ["abc@gmail.com", "antoniopagano996@gmail.com",  "abc@gmail.com", "abc@gmail.com", "abc@gmail.com", "abc@gmail.com", "abc@gmail.com"]

let userEmail = prompt("Inserisci email");

let isRegistered = false;

for ( let i = 0 ; i < agreeEmails.length ; i++ ){
    if( agreeEmails[i] == userEmail ){
       isRegistered = true;
    }
}

if (isRegistered){ 
    console.log("l'utente e' registrato");
} else {
    console.log("l'utente non e' registrato");
}