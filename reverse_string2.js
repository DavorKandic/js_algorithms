//Create a function that reverses a string
//Another version



function reverse2(str) {
   return str.split("").reverse().join("");
}

s = "Hakuna matata!";

console.log(reverse2(s));