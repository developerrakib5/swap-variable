// 
// let first = 5;
// let second = 7;
// console.log(first,second);

// first = second;
// second = first;
// console.log(first, second);

// =================================================> Javascript Temp <============================================
// Approach Number-01
// let first = 5;
// let second = 7;
// console.log(first, second);
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);


// =================================================> Javascript Desturcturing <============================================
// Approach Number-02
let first = 5;
let second = 7;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
