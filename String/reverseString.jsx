// Input: "hello"
// Output: "olleh"
function reverseString (s){
    let result='';
    for(let i =s.length -1;i>=0;i--){
        result += s[i];
    }
    return result;
}
console.log(reverseString("hello"));
