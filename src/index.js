module.exports = function check(str, bracketsConfig) {
    let leftCount = 0;
    let rightCount = 0;

    for (i = 0; i < str.length; i++) {
        if (str[i] == '(') {
            leftCount++;
        } else if (str[i] == ')') {
            rightCount++;
        }
    }
    if (leftCount == rightCount) {
        return true
    } else {return false}
}
