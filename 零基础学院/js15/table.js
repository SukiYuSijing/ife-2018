

function getTable(a, b) {//渲染新的表格
    //根据select选项获取数据
    // console.log(a.length,b.length);
    var data = [];
    for (var i = 0; i < sourceData.length; i++) {
        for (var j = 0; j < a.length; j++) {
            for (var k = 0; k < b.length; k++) {
                if (sourceData[i].region == a[j].value && sourceData[i].product == b[k].value) {
                    data.push(sourceData[i])
                }
            }
        }
    }
    console.log(data);
    tableWrapper.innerHTML = '';//置空表格

    //输出表头：商品、地区、1月、2月、…… 12月
    var table = document.createElement('table');
    var tableHead = ['商品', '地区', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    var tr = document.createElement('tr');
    console.log(a.length, b.length);
    if (a.length == 1 && b.length > 1) {
        tableHead = ['地区', '商品', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    }
    for (var i = 0; i < tableHead.length; i++) {
        var th = document.createElement('th');
        th.innerHTML = tableHead[i];
        tr.appendChild(th);
    }
    table.appendChild(tr);

    if (a.length == 1 && b.length == 1) {
        for (var i = 1; i < data.length; i++) {
            var row = table.insertRow();
            row.insertCell(0).innerHTML = data[i].product;
            row.insertCell(1).innerHTML = data[i].region;
            for (var j = 0; j < data[i].sale.length; j++) {
                row.insertCell(j + 2).innerHTML = data[i].sale[j];
            }
        }
        tableWrapper.appendChild(table);
    }
    if (a.length == 1 && b.length > 1) {
        var row = table.insertRow();
        var aaa = row.insertCell(0);
        aaa.innerHTML = data[0].region;
        aaa.setAttribute("rowspan", b.length);
        row.insertCell(1).innerHTML = data[0].product;
        for (var j = 0; j < data[0].sale.length; j++) {
            row.insertCell(j + 2).innerHTML = data[0].sale[j];
        }
        for (var i = 1; i < data.length; i++) {
            let row = table.insertRow();
            // row.insertCell(0).innerHTML = data[i].region;
            row.insertCell(0).innerHTML = data[i].product;
            for (var j = 0; j < data[i].sale.length; j++) {
                row.insertCell(j + 1).innerHTML = data[i].sale[j];
            }
        }
        tableWrapper.appendChild(table);
    }
    if (a.length > 1 && b.length == 1) {
        var row = table.insertRow();
        var aaa = row.insertCell(0);
        aaa.innerHTML = data[0].product;
        aaa.setAttribute("rowspan", a.length);
        row.insertCell(1).innerHTML = data[0].region;
        for (var j = 0; j < data[0].sale.length; j++) {
            row.insertCell(j + 2).innerHTML = data[0].sale[j];
        }
        for (var i = 1; i < data.length; i++) {
            let row = table.insertRow();
            // row.insertCell(0).innerHTML = data[i].region;
            row.insertCell(0).innerHTML = data[i].region;
            for (var j = 0; j < data[i].sale.length; j++) {
                row.insertCell(j + 1).innerHTML = data[i].sale[j];
            }
        }
        tableWrapper.appendChild(table);
    }
    if (a.length > 1 && b.length > 1) {
        for (let i in data) {
            var tr = table.insertRow();
            for (let j in data[i]) {
                if (j == 'product' && !(i % a.length)) {
                    var td = tr.insertCell();
                    td.setAttribute('rowspan', a.length);
                    td.appendChild(document.createTextNode(data[i][j]));
                }
                if (j == 'region') {
                    var td = tr.insertCell();
                    td.appendChild(document.createTextNode(data[i][j]));
                }
                if (j == 'sale') {
                    for (let k in data[i][j]) {
                        var td = tr.insertCell();
                        td.appendChild(document.createTextNode(data[i][j][k]));
                    }
                }
            }
        }
        tableWrapper.appendChild(table);
    }
}