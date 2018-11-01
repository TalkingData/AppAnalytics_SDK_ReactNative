export function isNum(nubmer) {
    let re = /^[+-]?\d+(\.\d+)?$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/
    return re.test(nubmer);
}

export function isNaturalNum(nubmer) {
    var re = /^[+]?\d+(\.\d+)?$/; //判断字符串是否为数字 //判断正整数 /^[1-9]+[0-9]*]*$/
    if (re.test(nubmer)) {
        return true;
    }else{
        return false;
    }
}

export function isNumType(nubmer) {
    if (typeof(nubmer) !== "number") {
        return false;
    }else{
        return true;
    }
}