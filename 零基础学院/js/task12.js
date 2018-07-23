
var radios1 = document.querySelectorAll(".part1 input[type='radio']");
var nums1 = document.querySelectorAll(".part1 input[type='text']");
var result1 = document.querySelector(".part1 #result");
var buttons1 = document.querySelectorAll(".part1 button");

function isnum(value) {
    var re = new RegExp(" ");
    if (isNaN(value) == false && value != '') {
        if (!re.test(value)) {
            return true;
        }
    }
}

buttons1[0].onclick = function () {
    result1.innerHTML = "";
    for (var i = 0; i < radios1.length; i++) {
        if (radios1[i].checked) {
            if (isnum(nums1[i].value)) {
                result1.innerHTML = radios1[i].value + "是数字！"
            } else {
                result1.innerHTML = radios1[i].value + "不是数字！"
            }

        }
    }
}

buttons1[1].onclick = function () {
    if (isnum(nums1[0].value) && isnum(nums1[1].value)) {
        result1.innerHTML = parseFloat(nums1[0].value).toFixed(parseFloat(nums1[1].value));
    } else {
        result1.innerHTML = "请正确输入两个数值！";
    }
}

buttons1[2].onclick = function () {
    result1.innerHTML = "";
    for (var i = 0; i < radios1.length; i++) {
        if (radios1[i].checked) {
            if (isnum(nums1[i].value)) {
                result1.innerHTML = Math.abs(parseFloat(nums1[i].value));
            } else {
                result1.innerHTML = radios1[i].value + "不是数字！"
            }
        }
    }
}

buttons1[3].onclick = function () {
    result1.innerHTML = "";
    for (var i = 0; i < radios1.length; i++) {
        if (radios1[i].checked) {
            if (isnum(nums1[i].value)) {
                result1.innerHTML = Math.ceil(parseFloat(nums1[i].value));
            } else {
                result1.innerHTML = radios1[i].value + "不是数字！"
            }
        }
    }
}

buttons1[4].onclick = function () {
    result1.innerHTML = "";
    for (var i = 0; i < radios1.length; i++) {
        if (radios1[i].checked) {
            if (isnum(nums1[i].value)) {
                result1.innerHTML = Math.floor(parseFloat(nums1[i].value));
            } else {
                result1.innerHTML = radios1[i].value + "不是数字！"
            }
        }
    }
}

buttons1[5].onclick = function () {
    result1.innerHTML = "";
    for (var i = 0; i < radios1.length; i++) {
        if (radios1[i].checked) {
            if (isnum(nums1[i].value)) {
                result1.innerHTML = Math.round(parseFloat(nums1[i].value));
            } else {
                result1.innerHTML = radios1[i].value + "不是数字！"
            }
        }
    }
}

buttons1[6].onclick = function () {
    if (isnum(nums1[0].value) && isnum(nums1[1].value)) {
        result1.innerHTML = Math.max(parseFloat(nums1[0].value), (parseFloat(nums1[1].value)));
    } else {
        result1.innerHTML = "请正确输入两个数值！";
    }
}

buttons1[7].onclick = function () {
    if (isnum(nums1[0].value) && isnum(nums1[1].value)) {
        result1.innerHTML = Math.min(parseFloat(nums1[0].value), (parseFloat(nums1[1].value)));
    } else {
        result1.innerHTML = "请正确输入两个数值！";
    }
}

// --------------------------------------part2---------------------------------------
var radios2 = document.querySelectorAll(".part2 input[type='radio']");
var strings2 = document.querySelectorAll(".part2 textarea");
var nums2 = document.querySelectorAll(".part2 input[type='number']");
var result2 = document.querySelector(".part2 #result");
var buttons2 = document.querySelectorAll(".part2 button");

buttons2[0].onclick = function () {
    result2.innerHTML = "";
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            result2.innerHTML = strings2[i].value.length;
        }
    }
}

buttons2[1].onclick = function () {
    result2.innerHTML = "";
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            result2.innerHTML = strings2[i].value[2];
        }
    }
}

buttons2[2].onclick = function () {
    result2.innerHTML = "";
    result2.innerHTML = strings2[0].value + strings2[1].value;
}

buttons2[3].onclick = function () {
    result2.innerHTML = "";
    result2.innerHTML = strings2[0].value.indexOf(strings2[1].value);
}

buttons2[4].onclick = function () {
    result2.innerHTML = "";
    result2.innerHTML = strings2[1].value.lastIndexOf(strings2[0].value);
}

buttons2[5].onclick = function () {
    result2.innerHTML = "";
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            result2.innerHTML = strings2[i].value.slice(nums2[0].value, nums2[1].value);
        }
    }
}

buttons2[6].onclick = function () {
    result2.innerHTML = "";
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            result2.innerHTML = strings2[i].value.split("\n").length;
        }
    }
}

buttons2[7].onclick = function () {
    result2.innerHTML = "";
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            result2.innerHTML = strings2[i].value.substr(nums2[0].value, nums2[1].value);
        }
    }
}

buttons2[8].onclick = function () {
    result2.innerHTML = "";
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            result2.innerHTML = strings2[i].value.toUpperCase();
        }
    }
}

buttons2[9].onclick = function () {
    result2.innerHTML = "";
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            result2.innerHTML = strings2[i].value.toLowerCase();
        }
    }
}

buttons2[10].onclick = function () {
    result2.innerHTML = "";
    for (var i = 0; i < radios2.length; i++) {
        if (radios2[i].checked) {
            result2.innerHTML = strings2[i].value.split(/\s+/).join('');
        }
    }
}

buttons2[11].onclick = function () {
    var temp = strings2[0].value
    strings2[0].value = strings2[1].value;
    strings2[1].value = temp;

}

// --------------------------------------part3---------------------------------------
/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
console.log("练习3")

function diyTrim(str) {
    var result = '';

    result = str.trim();
    return result;
}



// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
function removeRepetition(str) {
    var result = "";
    var a = str.length;
    for (var i = 0; i < a ; i++) {
        if (str[0] == str[1]) {
        } else {
            result=result+str[0];            
        }
        str = str.slice(1, a)
    }

    return result;
}

// 测试用例
console.log(removeRepetition("aaa")); // ->a
console.log(removeRepetition("abbba")); // ->aba
console.log(removeRepetition("aabbaabb")); // ->abab
console.log(removeRepetition("")); // ->
console.log(removeRepetition("abc")); // ->abc

// --------------------------------------part4---------------------------------------

var tree = {
    "id": 0,
    "name": "root",
    "left": {
        "id": 1,
        "name": "Simon",
        "left": {
            "id": 3,
            "name": "Carl",
            "left": {
                "id": 7,
                "name": "Lee",
                "left": {
                    "id": 11,
                    "name": "Fate"
                }
            },
            "right": {
                "id": 8,
                "name": "Annie",
                "left": {
                    "id": 12,
                    "name": "Saber"
                }
            }
        },
        "right": {
            "id": 4,
            "name": "Tony",
            "left": {
                "id": 9,
                "name": "Candy"
            }
        }
    },
    "right": {
        "id": 2,
        "name": "right",
        "left": {
            "id": 5,
            "name": "Carl",
        },
        "right": {
            "id": 6,
            "name": "Carl",
            "right": {
                "id": 10,
                "name": "Kai"
            }        
        }
    }
}

// 假设id和name均不会重复，根据输入name找到对应的id
function findIdByName(name) {

}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {

}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {

}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {

}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {

}