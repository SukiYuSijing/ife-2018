function darBar(data) {//绘制一个柱状图(柱状图数据) {
    var gragh = document.querySelector("#bar-graph");
    //定义好柱状图绘制区域的高度，宽度，轴的高度，宽度
    var graghHeight = 300;
    var graghWidth = 700;
    var padding = 25;
    const axisHeight = graghHeight - padding;
    const axisWidth = graghWidth - padding;
    //定义好每一个柱子的宽度及柱子的间隔宽度
    const barGap = 12;
    const barWidth = (axisWidth - barGap * 13) / 12;
    //定义好柱子颜色，轴的颜色
    const barColor = "#27a1ea";
    const aixsColor = "#000";

    barGraph.setAttribute("width", graphWidth);
    barGraph.setAttribute("height", graphHeight);

    //拿到柱状图中的最大值Max
    var dataMax = Math.max(...data)
    //根据Max和你用来绘制柱状图图像区域的高度，进行一个数据和像素的折算比例
    var rate = dataMax / (axisHeight - padding);

    //绘制横轴及纵轴
    let barHtml = [];
    barHtml.push("<line x1=" + padding + " y1=0 x2=" + padding + " y2=" + axisHeight + " stroke=" + axisColor + " stroke-width='2'/>");
    barHtml.push("<line x1=" + padding + " y1=0 x2=" + axisWidth + " x2=" + axisWidth + " y2=0 stroke=" + axisColor + " stroke-width='2'>");

    for (let i = 0; i < data.length; i++) {//遍历数据 {
        //计算将要绘制柱子的高度和位置
        
        //绘制每一个柱子
    }
}