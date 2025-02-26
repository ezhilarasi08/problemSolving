// Count the Occurrences of Each Character in a String
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
function eachCount(s){
    let count={};
    
    for (let char of s){
        count[char]=(count[char] || 0)+1;
    }
    return count;
} 
console.log(eachCount("hello"));