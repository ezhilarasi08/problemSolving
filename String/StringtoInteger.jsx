function atoi(s){
    let trimmed = s.trim();
    let match=trimmed.match(/^[-+]?\d+/);
    if(!match) return 0;
     let num = parseInt(match[0],10);
    return Math.max(Math.min(num,2**31-1),-(2**31));
}
console.log(atoi("  4687aex"))