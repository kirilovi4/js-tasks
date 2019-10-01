function palindrome(str) {
    let newStr = str.slice();
    let re = /[A-Za-z0-9]/;
    let strArr = newStr.split('');
    strArr = strArr.filter(function(item){
      if(re.test(item)) return item;
    });
    newStr = strArr.join('');
    newStr = newStr.toLowerCase();
    strArr = newStr.split('');
    let reverseStrArr = [];
    for(let i = strArr.length - 1; i >= 0; i--){
      reverseStrArr.push(strArr[i]);
    }
    let reverseStr = reverseStrArr.join('');
    let equally;
    if(reverseStr.trim() === newStr.trim()){
      equally = true;
    } else equally = false;
    return equally;
  }