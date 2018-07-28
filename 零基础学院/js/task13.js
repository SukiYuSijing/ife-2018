console.log("练习一：")
function Go() {
    str = "Go ";
}

function GoSteps() {
    if (arguments[0] == undefined) arguments[0] = 1;
    if (isNaN(arguments[0]) !== true) {
        for (var i = 0; i < Math.floor(arguments[0]); i++) {
            Go();
        }
        console.log(str + i + " 次");
    } else {
        console.log("Go 0 次");
    }
}

GoSteps(10); // Go 10次
GoSteps(1); // Go 1次
GoSteps(); // Go 1次，认为缺少参数时，默认参数为1
GoSteps(0);  // 0次
GoSteps(-1);  // 0次
GoSteps(1.4);  // Go 1次
GoSteps(1.6);  // Go 1次
GoSteps(-1);  // 0次
GoSteps(true);  // Go 1次
GoSteps(false);  // 0次
GoSteps("Test");  // 0次
GoSteps(NaN);  // 0次
GoSteps(null);  // 0次

// --------------------------------------------------------------------
console.log("\n\n练习二/三：")
function start() {

    var date = new Date();
    var year = date.getUTCFullYear()
    var month = getMonth(date)
    var day = date.getUTCDate()
    var dayOfWeek1 = getDay1(date);
    var dayOfWeek2 = getDay2(date);
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var apm = getAPm(hour);

    hour = add0(hour);
    min = add0(min);
    sec = add0(sec);
    function formatTime1() {
        var time = year + '年' + month + '月' + day + '日' + dayOfWeek1 + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }
    function formatTime2() {
        var time = year + '-' + month + '-' + day + ' ' + dayOfWeek2 + ' ' + hour + ':' + min + ':' + sec + ' ' + apm;
        return time;
    }
    document.querySelector(".clock1").innerHTML = formatTime1();
    document.querySelector(".clock2").innerHTML = formatTime2();
}

function getDay1(date) {
    var x;
    switch (date.getUTCDay()) {
        case 1:
            x = '星期一';
            break;
        case 2:
            x = '星期二';
            break;
        case 3:
            x = '星期三';
            break;
        case 4:
            x = '星期四';
            break;
        case 5:
            x = '星期五';
            break;
        case 6:
            x = '星期六';
            break;
        case 7:
            x = '星期天';
            break;
    }
    return x;

}

function getDay2(date) {
    var x;
    switch (date.getUTCDay()) {
        case 1:
            x = 'Monday';
            break;
        case 2:
            x = 'Tuesday';
            break;
        case 3:
            x = 'Wednesday';
            break;
        case 4:
            x = 'Thursday';
            break;
        case 5:
            x = 'Friday';
            break;
        case 6:
            x = 'Saturday';
            break;
        case 7:
            x = 'Sunday';
            break;
    }
    return x;

}

function getMonth(date) {
    return date.getUTCMonth() + 1;
}

function add0(n) {
    if (n < 10) return '0' + n;
    else return n;
}

function getAPm(n) {
    if (n < 12) return 'AM';
    else return 'PM';
}


setInterval("start()", 1000);

// --------------------------------------------------------------------
console.log("\n\n练习四：")
var year1 = document.querySelector("#year-select");
var month1 = document.querySelector("#month-select");
var day1 = document.querySelector("#day-select");
var hour1 = document.querySelector("#hour-select");
var minite1 = document.querySelector("#minite-select");
var second1 = document.querySelector("#second-select");

for (var i = 2001; i < 2033; i++) {
    year1.innerHTML += '<option value="' + i + '">' + i + '</option>\n';
}
for (var i = 2; i < 13; i++) {
    month1.innerHTML += '<option value="' + i + '">' + i + '</option>\n';
}
for (var i = 2; i < 32; i++) {
    day1.innerHTML += '<option value="' + i + '">' + i + '</option>\n';
}
for (var i = 1; i < 24; i++) {
    if (i < 10) {
        hour1.innerHTML += '<option value="0' + i + '">0' + i + '</option>\n';
    } else hour1.innerHTML += '<option value="' + i + '">' + i + '</option>\n';
}
for (var i = 1; i < 60; i++) {
    minite1.innerHTML += '<option value="' + i + '">' + i + '</option>\n';
    second1.innerHTML += '<option value="' + i + '">' + i + '</option>\n'
}


var selects = document.querySelectorAll('.part4 select');
var results = document.querySelectorAll("#result-wrapper span");


for (var i = 0; i < selects.length; i++) {
    if (i < 3) {
        results[i].innerHTML = selects[i].querySelector("option[selected='selected']").value;
        selects[i].onchange = function () {
            var index = this.selectedIndex; // 选中索引
            var value = this.options[index].value; // 选中值
            results[i].innerHTML = value;
        }
    } else {
        results[i + 1].innerHTML = selects[i].querySelector("option[selected='selected']").value;
        selects[i].onchange = function () {
            var index = this.selectedIndex; // 选中索引
            var value = this.options[index].value; // 选中值
            results[i+1].innerHTML = value;
        }
    }
    // results[i].innerHTML=selects[i]
}


