var ratioWrapper = document.querySelector('#ratio-wrapper');
var regionWrapper = document.querySelector('#region-radio-wrapper');
var productWrapper = document.querySelector('#product-radio-wrapper');

function generateCheckBox(wrapper, arr) {
    //生成全选checkbox的html，给一个自定义属性表示为全选checkbox，比如checkbox - type="all"
    var a = '<input type="checkbox" id="all" >全选</input>'
    var checkboxHtml = a;
    for (var i = 0; i < arr.length; i++) {//遍历参数对象 
        checkboxHtml += '<input type="checkbox" id="item" value="' + arr[i].value + '">' + arr[i].text + '</input>';
    }
    wrapper.innerHTML = checkboxHtml;


    wrapper.onclick = function (e) {
        var checkedflag = 0;
        var checkAll = document.querySelector("#" + e.path[1].id + " input[id='all']");
        var items = document.querySelectorAll("#" + e.path[1].id + " input[id='item']");//当前点击复选框所在组的所有复选框
        if (e.target.type == 'checkbox') {//是checkbox
            //读取自定义属性
            if (e.target.id == 'all') {//全选
                //做全选对应的逻辑
                for (var i = 0; i < items.length; i++) {
                    items[i].checked = true;
                }
            }
            for (var i = 0; i < items.length; i++) {
                if (items[i].checked == true) {
                    checkedflag++;
                }
            }

            if (e.target.id == 'item') {
                //做子选项对应的逻辑
                if (checkedflag == 3) {
                    checkAll.checked = true;
                }
                if (checkedflag < 3) {
                    checkAll.checked = false;
                }
                if (checkedflag == 0) {
                    checkedflag = 1;
                    e.target.checked = true;
                }
            }
        }
    }
}

// 对象或数组自己根据喜好实现均可
generateCheckBox(regionWrapper, [{
    value: "华东",
    text: "华东"
}, {
    value: "华北",
    text: "华北"
}, {
    value: "华南",
    text: "华南"
}]);

generateCheckBox(productWrapper, [{
    value: "手机",
    text: "手机"
}, {
    value: "笔记本",
    text: "笔记本"
}, {
    value: "智能音箱",
    text: "智能音箱"
}]);

