function findVowels(str) 
 {
     const vowels = str.match(/[aeiouAEIOU]/g); 
      return vowels ? vowels : " ";
 }
 
 console.log(findVowels("Hello")); 
 

// let s = "welcome"
// let c, i
// for (i=0; i<=s.length-1; i++){
//   c = s[i]  
//   if (c=="a"|| c=="e" || c=="i" || c=="o" || c=="u" ||
//   c=="A"|| c=="E"|| c=="I" || c=="O" || c=="U"){
//   console.log(c)
//   }
// }