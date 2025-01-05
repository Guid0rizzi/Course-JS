//concatenando arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, "Leonardo", [7, 8, 9]);
console.log(a3);
console.log("------------------------------------------------------------");
const a4 = [1, 2, 3];
const a5 = [4, 5, 6];
const a6 = [...a4, ...a5, "Leonardo", ...[7, 8, 9]]; //spread operator
console.log(a6);
