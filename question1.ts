function reverse(str: string) {
  let str1: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // Reverse a string
    str1 += str[i];
  }
  return str1;
}
console.log(reverse("Bestpeers"));
export default reverse;
//Output : sreeptseB
