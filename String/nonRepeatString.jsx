// First non repeating Character
// input:character;
// output:h;
function nonRepeat (s){
    let charCount ={};
    for(let char of s){
        charCount[char]=(charCount[char]||0)+1;
    }
     for(let char of s){
         if(charCount[char]===1) return char;
     }
      return -1;
}
console.log(nonRepeat("character"));