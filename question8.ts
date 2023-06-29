const numbers: Array<number> = [3, 6, 1, 66, 45, 22];
const odds: Array<number> = numbers.filter((num) => num % 2 !== 0); // Find Odd Numbers
console.log(odds);
export default { numbers, odds };
// Output : [3,1,45]
