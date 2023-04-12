const repeatString = function(word, times) {
    if(times<0){
        return "ERROR";
    }
    let x=0;
    let og = ""
    while(x<times){
        og = og + word;
        x++;
    }
    return og;

};

// Do not edit below this line
module.exports = repeatString;
