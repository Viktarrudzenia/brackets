module.exports = function check(str, bracketsConfig) {

  // Init what I must shield if find in bracketsConfig
  let needShield = '.^$*+-?()[]{}\|';
  // Init how much I will parse str (max)
  let amount = str.length / 2;
  let result = true;
  let lettersForRegExp = '';

  // Make letters for RegExp which i will search

  for (let i = 0; i < bracketsConfig.length; i++) {
    if (i > 0) {
      lettersForRegExp += '|';
    }
    for (let j = 0; j < 2; j++) {
      if (needShield.indexOf(bracketsConfig[i][j]) !== -1) {
        lettersForRegExp = lettersForRegExp + "\\" + bracketsConfig[i][j];
      } else {
        lettersForRegExp += bracketsConfig[i][j];
      }
    }
  }

  // Init regExp for search

  let regExp = new RegExp(lettersForRegExp);

  // Search coincidence and replace them with '' === (delete)

  for (let i = 0; i <= amount; i++) {
    result = str.replace(regExp, "");
    str = result;
  }
  if (result.length == 0) {
    return true;
  } else {
    return false;
  }
}
