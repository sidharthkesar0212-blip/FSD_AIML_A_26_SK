const a = [1,2,3,4,5];
console.log(a.filter(x => (x % 2 == 0)));
const c = a.map(i => i*i);
console.log("Squares = " + c);
