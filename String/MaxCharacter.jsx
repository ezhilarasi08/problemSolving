function maxCharacter(s){
    let charCount={};
    let maxChar='',maxCount=0;
    for(let char of s){
        charCount[char]=(charCount[char]||0)+1;
        if(charCount[char]>maxCount){
            maxCount=charCount[char];
            maxChar=char;
        }
    }
    return maxChar;
}
console.log(maxCharacter("mommy"));