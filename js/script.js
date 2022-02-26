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