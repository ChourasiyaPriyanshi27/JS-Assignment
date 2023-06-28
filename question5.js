function test100(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(test100(50, 50))
console.log(test100(20, 50))
console.log(test100(20, 20))
console.log(test100(20, 30))