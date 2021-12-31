const arr1 = [];
function writeCards(names,event) {
  for(let i = 0; i < names.length; i++) {
    arr1.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`); 
   debugger;
  }
  return arr1;
}
function countDown(num) {
  let i = num;
  while (i>=0){
    console.log(i--);
  }
}
countDown(10)