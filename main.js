let cvs = document.getElementById("canvas")
cvs.height = 1000
cvs.width = 1800;


var ctx = cvs.getContext("2d");
ctx.strokeStyle = "red" //画笔的颜色
ctx.lineWidth = 2 //画笔的粗细

var active = false;

var last;
cvs.onmousedown = function (event) {
    active = true;
    var X1 = event.offsetX
    var Y1 = event.offsetY
    last = [X1, Y1]
}

cvs.onmouseup = function () {
    active = false;
}


cvs.onmousemove = function (event) {
    if (active) {
        drawLine(last[0], last[1], event.offsetX, event.offsetY)
        last = [event.offsetX, event.offsetY]
    }
}

cvs.onmouseover = function () {
    active = false;
}

// 画线
drawLine = function (X1, Y1, X2, Y2) {
    ctx.beginPath();
    ctx.moveTo(X1, Y1);
    ctx.lineTo(X2, Y2);
    ctx.stroke();
    ctx.lineCap = "round"
}

//笔粗细选择
var bh = document.getElementById("brush")
bh.onclick = function () {
    var bhimg = document.getElementById("brush1")
    bhimg.classList.add("big")
    document.getElementById("_brush").classList.add("vi")
}