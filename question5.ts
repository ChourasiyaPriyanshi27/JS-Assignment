function test100(x: number, y: number) {
  return x + y < 100 ? true : false; //  Find out sum of values is less than 100
}
console.log(test100(50, 50));
console.log(test100(20, 50));
console.log(test100(20, 20));
console.log(test100(20, 30));
export default test100;
// Output : false , true , true , true
