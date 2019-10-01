function telephoneCheck(str) {
    let newStr = str.slice();
    let newStrArr = newStr.split('');
    let reNum = /[0-9)(]/;
    let regExpFull = /[^0-9\s)(-]/;
    if(regExpFull.test(newStr)){
      return false;
    }else { 
    newStrArr = newStrArr.filter(function(item){
      if(reNum.test(item)) return item;
    });
    let isCorrect;
      if(newStrArr.length === 11 && newStr[0] === '1' || 
        newStrArr.length === 10 || newStrArr.length === 13 && newArrStr[1] === '('
        && newArrStr[5] === ')' && newStr[0] === '1' || newStrArr.length === 12 && 
        newArrStr[0] === '(' && newArrStr[4] === ')'){ 
        isCorrect = true;
      }else isCorrect = false;
      return isCorrect;
    }
  }