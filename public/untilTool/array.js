//用来处理字符串

/** 将一些指定的字符串格式或者数字数组转化为数字数组的一个操作 */
function toNumberArray(arg) {
    let result = [],
        tmp;
    if (typeof arg == 'string') {
        //尝试将其转化为数字
        tmp = Number(arg)
        if (isNaN(tmp)) {
            // 零时数字字符串
            let nStr = '';
            // 循环剥离不属于数字的部分,顺便分割数字
            for (var i = 0; i <= arg.length; i++) {
                let tmpStr = arg[i]
                if (!isNaN(Number(tmpStr)) || arg[i] == '.') {
                    nStr += tmpStr;
                } else {
                    if (nStr.length > 0) {
                        result.push(Number(nStr))
                    }
                    nStr = ''
                }
            }
        } else {
            result = [tmp]
        }

    } else if (typeof arg == 'number') {
        result = [arg]
    } else if (typeof arg == 'array') {
        console.log('------')
        result = toNumberArray(arg.join('-'));
    } else {
        result = toNumberArray(arg.toString());
    }
    return result
}
/** 数组去重 */
function ArrayUniq() {

}
/** 数组排序 */
function sort(arr) {

}

module.exports = {
    toNumberArray,
}