const num = [11,22,33,44,55,66,77,88,99];
console.log("num =", num);
const even = num.filter((i)=> (i%2 == 0));
console.log("Even = ", even);
const square = num.map((i)=> (i*i));
sonsole.log("Square = ", square);
const sum = square.reduce((a,b) => a+b);
