// const arr = [3, 6, 1, 66, 45, 22]
// const a=arr.length;
// console.log(a)
// for(let i=0;i<arr.length;i++)
// {
//  if(arr[i]%2!==0){
//     return arr[i];
//  }
// }
const numbers = [3, 6, 1, 66, 45, 22];
const odds = numbers.filter((num) => num % 2 !== 0);
console.log(odds);