const reverseString = function(str) {
    let answer = "";
    for(let x = str.length -1; x>=0; x--){
        answer = answer + str[x];
    } 
    return answer;


};

// Do not edit below this line
module.exports = reverseString;
