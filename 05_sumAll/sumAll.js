const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'ERROR';
    }
    if (num1 < 0|| num2 < 0 ){
        return "ERROR";
    }
    let answer = 0;
    let higher = num2; 
    let lower = num1;
    if(num2 < num1){
        higher = num1; 
        lower = num2; 
    }

    for(let x = lower; x<=higher; x++){
        answer = answer + x;

    }
    return answer;


};

// Do not edit below this line
module.exports = sumAll;
