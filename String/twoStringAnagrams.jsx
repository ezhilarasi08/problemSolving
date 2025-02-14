//two String  Anagrams 
// input:("listen", "silent")
// output:true
function twoAnagrams(s1,s2){
    return s1.split('').sort().join('')===s2.split('').sort().join('');
    
}
console.log(twoAnagrams("listen","silent"));