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
//创建一系列options
createOptions("year-select", 0, 32, "20", true);
createOptions("month-select", 1, 12, "", false);
createOptions("day-select", 1, 31, "", false);
createOptions("hour-select", 0, 23, "", true);
createOptions("minute-select", 0, 59, "", true);
createOptions("second-select", 0, 59, "", true);

//当用户改变任意一项输入时，调整月份的天数
var sel = document.getElementById("selectors");
sel.onchange = function (e) {
    var monthVal = document.getElementById("month-select").value;
    var yearVal = document.getElementById("year-select").value;
    var dayNum;
    var mon31 = "1,3,5,7,8,10,12";
    var mon30 = "4,6,9,11";
    var mon28 = "2";
    //根据用户输入的值判断是哪个月份
    //需要排除选择天数本身的情况
    if (e.target.id == "year-select" || e.target.id == "month-select") {
        if (mon28.indexOf(monthVal) !== -1) {
            dayNum = 28;
            if (isLeap(Number(yearVal))) {
                dayNum = 29;
            }
        } else if (mon30.indexOf(monthVal) !== -1) {
            dayNum = 30;
        } else if (mon31.indexOf(monthVal) !== -1) {
            dayNum = 31;
        }
        //修复用户体验方面的小bug（会重新归零
        var dayVal = document.getElementById("day-select").value;
        //移除现在的天数
        removeOptions("day-select");
        //创建新的天数
        createOptions("day-select", 1, dayNum, "", false);
        var options = document.getElementById("day-select").childNodes;
        //把用户之前选中的数字更改为默认值
        for (var i = 0; i < options.length; i++) {
            if (options[i].value == dayVal) {
                options[i].selected = "selected";
            }
        }
    }
}

//得到用户输入的值，进行计算，并将结果展示出来
function displayResult() {
    //得到用户输入的值
    var year = Number(document.getElementById("year-select").value);
    var month = Number(document.getElementById("month-select").value);
    var day = Number(document.getElementById("day-select").value);
    var hour = Number(document.getElementById("hour-select").value);
    var min = Number(document.getElementById("minute-select").value);
    var sec = Number(document.getElementById("second-select").value);
    var dateNow = new Date();
    var dateSel = new Date();
    //将用户输入的值转化为Date对象
    //注意转化为Date对象时，month是以0到11为准的
    dateSel.setFullYear(year, month - 1, day);
    dateSel.setHours(hour, min, sec);
    //得到相差值
    var result = dateDiffer(dateNow, dateSel);
    //将需要展示的结果格式进行包装
    //得到星期几
    var weekday = toWeekday(dateSel);
    //补齐时分秒的位数
    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);
    //需要改变的文字内容
    var text = "";
    if (dateNow >= dateSel) {
        text = "已经过去";
    } else if (dateNow < dateSel) {
        text = "还有";
    }
    //将结果放在result-wrapper中
    document.getElementById("result-wrapper").innerHTML = "现在距离 " + year + "年" + month + "月" + day + "日星期" + weekday + " " + hour + ":" + min + ":" + sec + " " + text + result[0] + "天" + result[1] + "小时" + result[2] + "分" + result[3] + "秒";
}

setInterval("displayResult()", 1000);


//创建选择项
function createOptions(id, begin, end, front, bool) {
    var sel = document.getElementById(id);
    for (var i = begin; i <= end; i++) {
        var option = document.createElement("option");
        if (bool) {
            if (i < 10) {
                i = "0" + i;
            }
        }
        option.value = front + i;
        option.innerHTML = front + i;
        sel.appendChild(option);
    }
}
//清空选择项
//这里有个用户体验方面的bug...更换月份或者年份时，用户之前选择的天数会重新归零
function removeOptions(id) {
    var sel = document.getElementById(id);
    var children = sel.childNodes;
    for (var i = children.length - 1; i >= 0; i--) {
        sel.removeChild(children[i]);
    }
}

//判断是否为闰年
function isLeap(year) {
    if (year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

//两个日期之差，返回数组
function dateDiffer(dateNow, dateSel) {
    dateNow = dateNow.getTime();
    dateSel = dateSel.getTime();
    var differ = Math.abs(dateNow - dateSel);
    var dayAmount = 24 * 60 * 60 * 1000;
    var day = Math.floor(differ / dayAmount);
    var hourAmount = 60 * 60 * 1000;
    var hourDiffer = differ - day * dayAmount;
    var hour = Math.floor(hourDiffer / hourAmount);
    var minAmount = 60 * 1000;
    var minDiffer = hourDiffer - hour * hourAmount;
    var min = Math.floor(minDiffer / minAmount);
    var secAmout = 1000;
    var secDiffer = minDiffer - min * minAmount;
    var sec = Math.floor(secDiffer / secAmout);
    return [day, hour, min, sec];
}

//根据日期返回星期几
function toWeekday(date) {
    var date = date.getDay();
    //从日到六
    var weekdays = ["日", "一", "二", "三", "四", "五", "六"];
    return weekdays[date];
}

//位数补齐
function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}