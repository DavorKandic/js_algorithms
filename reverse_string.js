/ Create a function that reverses a string


function reverse_string(str) {
  // check input
  if (!str || str.length < 2 || typeof str != 'string')
  {
    return "Invalid input";
  }
  arr = str.split("");
  rev = "";
  for (let i=arr.length-1; i>=0; i--)
  {
    rev += arr[i];
  }
  return rev;
}


let reversed = reverse_string("I am Chewbuckah!");

console.log(reversed);
