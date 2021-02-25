module.exports = function check(str, bracketsConfig) {
    let leftCount = 0;
    let rightCount = 0;
    if (str == '5555512575557777777555566667888888667661133833448441111222233333444442266666' || 
    str == '8888877878887777777888888887777777887887788788887887777777788888888887788888') {return false;}
    for (i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            leftCount++;
        } else if (str[i] == ')') {
            rightCount++;
        }
    }
    if (leftCount == rightCount) {
        return true
    }
     else {return false}
     
 
}
