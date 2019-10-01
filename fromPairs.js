function fromPairs(arr){
    newArray = [];
    newArray = newArray.concat(arr);
    let obj = {};
    for(let key in newArray){
      obj[newArray[key][0]] = newArray[key][1];
    }
    return obj;
  }