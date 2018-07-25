
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
    for (var i = 0; i < a; i++) {
        if (str[0] == str[1]) {
        } else {
            result = result + str[0];
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
    var find = function (tree) {
        if (!tree) {
            return;
        }
        if (tree.name == name) {
            return tree.id
        }
        return find(tree.left) || find(tree.right)
    }
    return find(tree);
}

// 假设id和name均不会重复，根据输入id找到对应的name
function findNameById(id) {
    var find = function (tree) {
        if (!tree) {
            return;
        }
        if (tree.id == id) {
            return tree.name
        }
        return find(tree.left) || find(tree.right)
    }
    return find(tree);
}

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
function getListWithDLR() {
    var find = function (tree) {
        if (tree) {
            console.log(tree.name);
            find(tree.left);
            find(tree.right);
        }
    }
    find(tree);
}

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
function getListWithLDR() {
    var find = function (tree) {
        if (tree) {
            find(tree.left);
            console.log(tree.name);
            find(tree.right);
        }
    }
    find(tree);
}

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
function getListWithLRD() {
    var find = function (tree) {
        if (tree) {
            find(tree.left);
            find(tree.right);
            console.log(tree.name);
        }
    }
    find(tree);
}


console.log('\n\n练习四 \n\n');
console.log('\n根据name找到对应的id：');
console.log('name:root, id:' + findIdByName('root'));
console.log('name:Lee, id:' + findIdByName('Lee'));
console.log('name:Kai, id:' + findIdByName('Kai'));
console.log('\n根据id找到对应的name：');
console.log('id:1, name:' + findNameById(1));
console.log('id:8, name:' + findNameById(8));
console.log('id:5, name:' + findNameById(5));
console.log('\n所有名字前序遍历：');
getListWithDLR();
console.log('\n所有名字中序遍历：');
getListWithLDR();
console.log('\n所有名字后序遍历：');
getListWithLRD();



// --------------------------------------part5---------------------------------------
console.log('\n\n练习五');
var queue = ["apple", "pear"];
var buttons5 = document.querySelectorAll(".part5 button");
var result5 = document.querySelector(".part5 p");
var input5 = document.querySelector(".part5 input");

var tmp = queue.slice(0);
tmp.reverse();
console.log(tmp);
result5.innerHTML = "队列为 :" + tmp.join("->").toString();
buttons5[0].onclick = function () {
    if (input5.value !== '') {
        tmp.unshift(input5.value);
        result5.innerHTML = "队列为 :" + tmp.join("->").toString();
    } else {
        result5.innerHTML = "输入不能为空！"
    }
}

buttons5[1].onclick = function () {
    if (tmp.length !== 0) {
        tmp.pop();
        result5.innerHTML = "队列为 :" + tmp.join("->").toString();
    } else {
        result5.innerHTML = "队列空！"
    }
}

buttons5[2].onclick = function () {
    if (tmp.length !== 0) {
        result5.innerHTML = "队头为 :" + tmp[tmp.length - 1].toString();
    } else {
        result5.innerHTML = "队列空！"
    }
}

buttons5[3].onclick = function () {
    if (tmp.length !== 0) {
        result5.innerHTML = "队列为不空";
    } else {
        result5.innerHTML = "队列空！"
    }
}


// --------------------------------------part6---------------------------------------
console.log('\n\n练习六');
var queue = ["apple", "pear"];
var buttons6 = document.querySelectorAll(".part6 button");
var result6 = document.querySelector(".part6 p");
var input6 = document.querySelector(".part6 input");

var tmp2 = queue.slice(0);
console.log(tmp2);
result6.innerHTML = "队列为 :" + tmp2.join("<-").toString();
buttons6[0].onclick = function () {
    if (input6.value !== '') {
        tmp2.push(input6.value);
        result6.innerHTML = "队列为 :" + tmp2.join("<-").toString();
    } else {
        result6.innerHTML = "输入不能为空！"
    }
}

buttons6[1].onclick = function () {
    if (tmp2.length !== 0) {
        tmp2.shift();
        result6.innerHTML = "队列为 :" + tmp2.join("<-").toString();
    } else {
        result6.innerHTML = "队列空！"
    }
}

buttons6[2].onclick = function () {
    if (tmp2.length !== 0) {
        result6.innerHTML = "队头为 :" + tmp2[0].toString();
    } else {
        result6.innerHTML = "队列空！"
    }
}

buttons6[3].onclick = function () {
    if (tmp2.length !== 0) {
        result6.innerHTML = "队列为不空";
    } else {
        result6.innerHTML = "队列空！"
    }
}

// --------------------------------------part7---------------------------------------
console.log('\n\n练习七');
var stack = ["apple", "pear"];
var buttons7 = document.querySelectorAll(".part7 button");
var result7 = document.querySelector(".part7 p");
var input7 = document.querySelector(".part7 input");

var tmp3 = stack.slice(0);
console.log(tmp3);
result7.innerHTML = "栈为 :" + tmp3.join("->").toString();
buttons7[0].onclick = function () {
    if (input7.value !== '') {
        tmp3.push(input7.value);
        result7.innerHTML = "栈为 :" + tmp3.join("->").toString();
        console.log(tmp3.toString());
    } else {
        result7.innerHTML = "输入不能为空！"
    }
}

buttons7[1].onclick = function () {
    if (tmp3.length !== 0) {
        tmp3.pop();
        result7.innerHTML = "栈为 :" + tmp3.join("->").toString();
        console.log(tmp3.toString());
    } else {
        result7.innerHTML = "栈空！"
    }
}

buttons7[2].onclick = function () {
    if (tmp3.length !== 0) {
        result7.innerHTML = "栈顶为 :" + tmp3[tmp3.length - 1].toString();
        console.log(tmp3.toString());
    } else {
        result7.innerHTML = "栈空！"
    }
}

buttons7[3].onclick = function () {
    if (tmp3.length !== 0) {
        result7.innerHTML = "栈为不空";
    } else {
        result7.innerHTML = "栈空！"
    }
}


// --------------------------------------part8---------------------------------------
console.log('\n\n练习八');
var stack = ["apple", "pear"];
var buttons8 = document.querySelectorAll(".part8 button");
var result8 = document.querySelector(".part8 p");
var input8 = document.querySelector(".part8 input");

var tmp4 = stack.slice(0);
tmp4.reverse();
console.log(tmp4);
result8.innerHTML = "栈为 :" + tmp4.join("<-").toString();
buttons8[0].onclick = function () {
    if (input8.value !== '') {
        tmp4.unshift(input8.value);
        result8.innerHTML = "栈为 :" + tmp4.join("<-").toString();
        console.log(tmp4.toString());
    } else {
        result8.innerHTML = "输入不能为空！"
    }
}

buttons8[1].onclick = function () {
    if (tmp4.length !== 0) {
        tmp4.shift();
        result8.innerHTML = "栈为 :" + tmp4.join("<-").toString();
        console.log(tmp4.toString());
    } else {
        result8.innerHTML = "栈空！"
    }
}

buttons8[2].onclick = function () {
    if (tmp4.length !== 0) {
        result8.innerHTML = "栈顶为 :" + tmp4[0].toString();
        console.log(tmp4.toString());
    } else {
        result8.innerHTML = "栈空！"
    }
}

buttons8[3].onclick = function () {
    if (tmp4.length !== 0) {
        result8.innerHTML = "栈为不空";
    } else {
        result8.innerHTML = "栈空！"
    }
}


// --------------------------------------part9---------------------------------------
console.log('\n\n练习九');
var arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
var arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
var arr3 = [[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
var arr4 = [
    {
        id: 1,
        name: 'candy',
        value: 40
    }, {
        id: 2,
        name: 'Simon',
        value: 50
    }, {
        id: 3,
        name: 'Tony',
        value: 45
    }, {
        id: 4,
        name: 'Annie',
        value: 60
    }
];

console.log('arr1:' + arr1.sort(function compareNum(a,b){return a-b}));
console.log('arr1:' + arr1.sort(function compareNum(a,b){return b-a}));
console.log('arr2(a-z):' + arr2.sort());
console.log('arr2(z-a):' + arr2.reverse());
console.log( arr3.sort(function aaa(a,b){return b[1]-a[1]}));
console.log(arr4.sort(function bbb(a,b){return a.value-b.value}));

// --------------------------------------part10---------------------------------------
console.log('\n\n练习十');
var scoreObject = {
    "Tony": {
        "Math": 95,
        "English": 79,
        "Music": 68
    }, 
    "Simon": {
        "Math": 100,
        "English": 95,
        "Music": 98
    }, 
    "Annie": {
        "Math": 54,
        "English": 65,
        "Music": 88
    }
}
var menuArr = [
    [1, "Area1", -1],
    [2, "Area2", -1],
    [3, "Area1-1", 1],
    [4, "Area1-2", 1],
    [5, "Area2-1", 2],
    [6, "Area2-2", 2],
    [7, "Area1-2-3", 4],
    [8, "Area2-2-1", 6],
];

var obj2arr=[];
for(i in scoreObject){
    var items=[];
    items.push(i);
    for(j in scoreObject[i]){
        items.push(scoreObject[i][j]);
    }
    obj2arr.push(items);
}
console.log(obj2arr);

var arr2obj={};
