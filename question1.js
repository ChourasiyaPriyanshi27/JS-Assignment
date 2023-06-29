function reverse(str) {
  let str1 = "";
  for (let i = str.length - 1; i >= 0; i--) {
    // Reverse a string
    str1 += str[i];
  }
  return str1;
}
console.log(reverse("Bestpeers"));
//Output : sreeptseB
