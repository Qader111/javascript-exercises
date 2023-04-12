const removeFromArray = function(myArray, ...args) {
    for (let x =0; x<args.length; x++){
        const spliting = myArray.indexOf(args[x]);
        if(spliting !== -1){
        myArray.splice(spliting, 1);
        }
    }
    return myArray


};

// Do not edit below this line
module.exports = removeFromArray;
