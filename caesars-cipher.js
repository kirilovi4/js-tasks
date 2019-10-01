function rot13(str) { 
    let rot13AlphStr = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    let engAlphStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let newStr = str.slice();
    let newStrArr = newStr.split('');
    for(let key in newStrArr){
      if(rot13AlphStr.includes(newStrArr[key])){
        newStrArr[key] = engAlphStr[rot13AlphStr.indexOf(newStrArr[key])];
      }
    }
    newStr = newStrArr.join(''); 
    return newStr;
  }