function findVowels(str: string) {
  const vowels: string[] | null = str.match(/[aeiouAEIOU]/g); // Find Vowels in a String
  return vowels ? vowels : " ";
}
console.log(findVowels("Hello"));
export default findVowels;
// Output: ['e','o']
