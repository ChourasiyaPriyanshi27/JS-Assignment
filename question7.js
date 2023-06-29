function findVowels(str) {
  const vowels = str.match(/[aeiouAEIOU]/g);
  return vowels ? vowels : " ";
}
console.log(findVowels("Hello"));
// Output:
