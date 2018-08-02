var tableWrapper = document.querySelector("#table-wrapper");
var ratioWrapper = document.querySelector('#ratio-wrapper');

var itemChecked = function (wrapper) {
    var items = wrapper.querySelectorAll('input[id="item"]');
    var checkedItems = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].checked) {
            checkedItems.push(items[i]);
        }
    }
    // console.log(checkedItems.length);
    return checkedItems;
}

ratioWrapper.onchange = function (e) {
    //渲染新的表格(根据ratio选项获取数据)
    var a = itemChecked(regionWrapper);
    var b = itemChecked(productWrapper);
    getTable(a, b);
}