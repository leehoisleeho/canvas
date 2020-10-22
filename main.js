let cvs = document.getElementById("canvas")
cvs.height = 700
cvs.width = 1080;


var ctx = cvs.getContext("2d");
ctx.strokeStyle = "red" //画笔的颜色
ctx.lineWidth = 10 //画笔的粗细

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

cvs.onmouseout = function () {
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