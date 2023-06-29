let count: number = 0;
let number: number = 2;
while (count < 10) {
  let isPrime: boolean = true;
  for (let i = 2; i < number; i++) {
    // Determine 1st 10 Prime no.
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(number);
    count++;
  }
  number++;
}
export default { count, number };
// Output : 2,3,5,7,11,13,17,19,23,29
