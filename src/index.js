module.exports = function check(str, bracketsConfig) {
     let newarr = str.split('');
     let configBrackets = bracketsConfig;
     for (let i = 0; i < newarr.length; i++) {
         for (let j = 0; j < configBrackets.length; j++) {
             if (newarr[i] === configBrackets[j][0] && newarr[i + 1] === configBrackets[j][1]) {
                 newarr.splice(i, 2);
                 if (newarr.length == 0) {
                     return true;
                 }
                 i = -1;
             }
         }
     }
     return false;
}
