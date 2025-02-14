// group Anagrams 
// input:["eat", "tea", "tan", "ate", "nat", "bat"]
// output:[["eat","tea","ate"],["tan","nat"],["bat"]]
function groupAnagrams(words){
    let map = new Map() ;
    for ( let word of words)    {
        let sorted = word.split('') .sort() .join('');
        if(!map.has (sorted)){
            map.set (sorted,[]);
        }
        map .get (sorted) .push(word);
    }
    return Array.from(map.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));