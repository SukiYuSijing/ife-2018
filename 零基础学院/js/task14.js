console.log("练习一：")
var postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];

var input = document.querySelector("#email-input");
var ul = document.querySelector("#email-sug-wrapper");

ul.onclick = function (e) {
    input.value = e.target.innerHTML;
    ul.style.display = 'none';
}

document.onkeyup = function (e) {
    console.log(e.code == 'ArrowUp');
    if (!(e.code == 'Enter' || e.code == 'ArrowUp' || e.code == 'ArrowDown')) resetChoose();
    else {
        console.log(e.code);
        var chooseLi = document.querySelector(".selected");
        var lis = document.querySelectorAll("li");
        console.log(typeof lis)
        chooseLi.removeAttribute("class");
        if (e.code == 'ArrowUp') {
            if (chooseLi != lis[0]) {
                lis[lis.find(chooseLi) - 1].setAttribute("class", "selected");
            } else {
                lis[lis.length - 1].setAttribute("class", "selected");
            }
        }
        if (e.code == 'ArrowDown') {
            if (chooseLi != lis[lis.length - 1]) {
                lis[lis.find(chooseLi) + 1].setAttribute("class", "selected");
            } else {
                lis[0].setAttribute("class", "selected");
            }
        }
        if (e.code == 'Enter') {
            input.value = chooseLi.innerHTML;
            ul.style.display = 'none';
        }
    }
    input.value = getInput();
    addPoints();
    hidePoints();
    // console.log(getInput());
}

// document.onkeydown = function (e) {
//     var chooseLi = document.querySelector(".selected");
//     var lis = document.querySelectorAll("li");
//     chooseLi.removeAttribute("class");
//     if (e.code == 'ArrowUp') {
//         if (chooseLi != lis[0]) {
//             lis[lis.indexOf(chooseLi) - 1].setAttribute("class", "selected");
//         } else {
//             lis[lis.length - 1].setAttribute("class", "selected");
//         }
//     }
//     if (e.code == 'ArrowDown') {
//         if (chooseLi != lis[lis.length - 1]) {
//             lis[lis.indexOf(chooseLi) + 1].setAttribute("class", "selected");
//         } else {
//             lis[0].setAttribute("class", "selected");
//         }
//     }
//     if (e.code == 'Enter') {
//         input.value = chooseLi.innerHTML;
//         hidePoints();
//     }
// }

function resetChoose() {
    var chooseLi = document.querySelector(".selected");
    if (chooseLi != document.querySelector("li:first-child")) {
        chooseLi.removeAttribute("class");
        document.querySelector("li:first-child").setAttribute("class", "selected");
    }
}

function getInput() {
    //拿到input输入框的输入内容trim后返回 
    return input.value.trim();
}

function getPoints() {
    //获取用户输入
    var a = getInput()
    var b = [];
    var a1 = a.split('@')[0];
    var a2 = a.split('@')[1];
    for (var i = 0; i < postfixList.length; i++) {
        if (a2 == undefined) {
            b.push(a1 + '@' + postfixList[i]);
        } else {
            if (postfixList[i].indexOf(a2) == 0) {
                b.push(a1 + '@' + postfixList[i]);
            }
        }
    }
    return b;
}

function addPoints() {
    //获取生成提示框中的提示内容 将内容添加到email-sug-wrapper中
    var a = getPoints();
    ul.innerHTML = '';
    for (var i = 0; i < a.length; i++) {
        if (i == 0) ul.innerHTML += '<li class="selected">' + a[i] + '</li>';
        else ul.innerHTML += '<li>' + a[i] + '</li>';
    }
}

function hidePoints() {
    ul.style.display = 'block';
    if (input.value.length == 0) {
        ul.style.display = 'none';
    } else {
        ul.style.display = 'block';
    }
}

// function 隐藏提示框() {
//     做具体隐藏提示框的操作
// }

// function 显示提示框() {
//     做具体显示提示框的操作
// }