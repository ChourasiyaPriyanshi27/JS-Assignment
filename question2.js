function leapyear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0; // Determine leap year
}
console.log(leapyear(2016));
console.log(leapyear(2020));
console.log(leapyear(2023));
console.log(leapyear(2001));
  // Output :