// const str="Bestpeers";
// let str2 = "";
// let i;

// for(i=str.length-1 ; i>=0;i--){
//     str2 += str[i]
// }
// console.log(str2);
function reverse(str){
let str1 = "";
 
for(let i=str.length-1;i>=0;i--){
    str1 += str[i];
 }
 return str1;
}
 console.log(reverse("Bestpeers"))
