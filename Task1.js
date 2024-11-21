const inputString = "The journey of life Is not defined by the destination, but by the experiences and growth along the way.";
const vowels ="aeiouAEIOU";

 let newInputString = inputString.split(' ');
//  console.log(newInputString);
 let filtered = newInputString.filter(word =>vowels.includes(word[0])).join(' ')
 
 filtered = filtered.split(' ')
 console.log(filtered)
 