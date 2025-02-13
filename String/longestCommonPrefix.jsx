// longest common prefix:
function longestPrefix(strs){
    if(!strs.length) return " ";
    let prefix=strs[0];
    for(i=0;i<strs.length;i++){
        while(strs[i].indexOf(prefix) !==0){
            prefix = prefix.slice(0,-1);
            if(!prefix) return "";
        }
    }
    return prefix;
}
 console.log(longestPrefix(["common","comma","commest"]));
