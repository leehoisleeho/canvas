let cvs = document.getElementById("canvas")
cvs.height = 720
cvs.width = 1280


var ctx = cvs.getContext("2d");
ctx.fillStyle = "white"; //设置canvas背景颜色
ctx.fillRect(0, 0, canvas.width, canvas.height); //填充canvas
ctx.strokeStyle = "" //画笔的颜色
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

//
var last_color
var last_lineWidth
var last_lineWidth1
canvas.style.cursor = "url('./img/brush2.cur' ),auto"
//笔粗细选择
var bh = document.getElementById("brush")
var bhimg = document.getElementById("brush1")
bh.onclick = function () {
    if (ctx.strokeStyle === "#ffffff") {
        last_lineWidth1 = ctx.lineWidth
        console.log(last_lineWidth1)
        ctx.strokeStyle = last_color
        ctx.lineWidth = last_lineWidth
        canvas.style.cursor = "url('./img/brush2.cur' ),auto"
    }

    var hasClass = document.getElementById("brush1").classList.contains("big")
    if (hasClass) {
        document.getElementById("_brush").classList.remove("vi")
        bhimg.classList.remove("big")
        document.getElementById("_color").classList.remove("vi")
        climg.classList.remove("big")
        document.getElementById("_rubbe").classList.remove("vi")
        climg.classList.remove("big")
    } else {
        bhimg.classList.add("big")
        document.getElementById("_brush").classList.add("vi")
        document.getElementById("_color").classList.remove("vi")
        climg.classList.remove("big")
        document.getElementById("_rubbe").classList.remove("vi")
        ruimg.classList.remove("big")
    }
}

var _px_2 = document.getElementById("_px_2")
_px_2.onclick = function () {
    document.getElementById("hengxian1").classList.add("henxian_vi")
    document.getElementById("hengxian2").classList.remove("henxian_vi")
    document.getElementById("hengxian3").classList.remove("henxian_vi")
    document.getElementById("hengxian4").classList.remove("henxian_vi")
    ctx.lineWidth = 10
}

var _px_4 = document.getElementById("_px_4")
_px_4.onclick = function () {
    document.getElementById("hengxian2").classList.add("henxian_vi")
    document.getElementById("hengxian1").classList.remove("henxian_vi")
    document.getElementById("hengxian3").classList.remove("henxian_vi")
    document.getElementById("hengxian4").classList.remove("henxian_vi")
    ctx.lineWidth = 15
}

var _px_6 = document.getElementById("_px_6")
_px_6.onclick = function () {
    document.getElementById("hengxian3").classList.add("henxian_vi")
    document.getElementById("hengxian2").classList.remove("henxian_vi")
    document.getElementById("hengxian1").classList.remove("henxian_vi")
    document.getElementById("hengxian4").classList.remove("henxian_vi")
    ctx.lineWidth = 20
}

var _px_8 = document.getElementById("_px_8")
_px_8.onclick = function () {
    document.getElementById("hengxian4").classList.add("henxian_vi")
    document.getElementById("hengxian2").classList.remove("henxian_vi")
    document.getElementById("hengxian3").classList.remove("henxian_vi")
    document.getElementById("hengxian1").classList.remove("henxian_vi")
    ctx.lineWidth = 25
}

//画笔颜色选择
var cl = document.getElementById("color")
var climg = document.getElementById("color1")
cl.onclick = function () {
    var hasClass = document.getElementById("color1").classList.contains("big")
    if (hasClass) {
        document.getElementById("_color").classList.remove("vi")
        climg.classList.remove("big")
        document.getElementById("_brush").classList.remove("vi")
        bhimg.classList.remove("big")
        document.getElementById("_rubbe").classList.remove("vi")
        climg.classList.remove("big")
    } else {
        climg.classList.add("big")
        document.getElementById("_color").classList.add("vi")
        document.getElementById("_brush").classList.remove("vi")
        bhimg.classList.remove("big")
        document.getElementById("_rubbe").classList.remove("vi")
        ruimg.classList.remove("big")
    }
}

var _color_01_1 = document.getElementById("_color_01_1")
var _color_01_2 = document.getElementById("_color_01_2")
var _color_01_3 = document.getElementById("_color_01_3")
var _color_01_4 = document.getElementById("_color_01_4")
var _color_01_5 = document.getElementById("_color_01_5")
_color_01_1.onclick = function () {
    _color_01_1.classList.add("colorbig")
    _color_01_2.classList.remove("colorbig")
    _color_01_3.classList.remove("colorbig")
    _color_01_4.classList.remove("colorbig")
    _color_01_5.classList.remove("colorbig")
    ctx.strokeStyle = " rgb(26, 26, 26)"
    px_2.style.background = "rgb(26, 26, 26)"
    px_4.style.background = "rgb(26, 26, 26)"
    px_6.style.background = "rgb(26, 26, 26)"
    px_8.style.background = "rgb(26, 26, 26)"
}

_color_01_2.onclick = function () {
    _color_01_2.classList.add("colorbig")
    _color_01_1.classList.remove("colorbig")
    _color_01_3.classList.remove("colorbig")
    _color_01_4.classList.remove("colorbig")
    _color_01_5.classList.remove("colorbig")
    ctx.strokeStyle = " #34A853"
    px_2.style.background = "#34A853"
    px_4.style.background = "#34A853"
    px_6.style.background = "#34A853"
    px_8.style.background = "#34A853"
}

_color_01_3.onclick = function () {
    _color_01_3.classList.add("colorbig")
    _color_01_2.classList.remove("colorbig")
    _color_01_1.classList.remove("colorbig")
    _color_01_4.classList.remove("colorbig")
    _color_01_5.classList.remove("colorbig")
    ctx.strokeStyle = " #4285F4"
    px_2.style.background = "#4285F4"
    px_4.style.background = "#4285F4"
    px_6.style.background = "#4285F4"
    px_8.style.background = "#4285F4"
}

_color_01_4.onclick = function () {
    _color_01_4.classList.add("colorbig")
    _color_01_2.classList.remove("colorbig")
    _color_01_3.classList.remove("colorbig")
    _color_01_1.classList.remove("colorbig")
    _color_01_5.classList.remove("colorbig")
    ctx.strokeStyle = "#EA4335"
    px_2.style.background = "#EA4335"
    px_4.style.background = "#EA4335"
    px_6.style.background = "#EA4335"
    px_8.style.background = "#EA4335"
}

_color_01_5.onclick = function () {
    _color_01_5.classList.add("colorbig")
    _color_01_2.classList.remove("colorbig")
    _color_01_3.classList.remove("colorbig")
    _color_01_4.classList.remove("colorbig")
    _color_01_1.classList.remove("colorbig")
    ctx.strokeStyle = "#FBBC05"
    px_2.style.background = "#FBBC05"
    px_4.style.background = "#FBBC05"
    px_6.style.background = "#FBBC05"
    px_8.style.background = "#FBBC05"
}


//橡皮大小选择
var ru = document.getElementById("rubbe")
var ruimg = document.getElementById("rubbe1")
ru.onclick = function () {
    var xxx = ctx.strokeStyle
    // console.log(xxx)
    if (xxx === "#ffffff") {
        console.log("是橡皮")
    } else {
        console.log("不是橡皮")
        last_color = ctx.strokeStyle
        last_lineWidth = ctx.lineWidth
        ctx.lineWidth = last_lineWidth1
        canvas.style.cursor = "url('./img/rubber.cur' ),auto"
    }
    // console.log(last_color)

    ctx.strokeStyle = "white"
    var hasClass = document.getElementById("rubbe1").classList.contains("big")
    if (hasClass) {
        document.getElementById("_rubbe").classList.remove("vi")
        ruimg.classList.remove("big")
        document.getElementById("_color").classList.remove("vi")
        climg.classList.remove("big")
        document.getElementById("_brush").classList.remove("vi")
        bhimg.classList.remove("big")
    } else {
        ruimg.classList.add("big")
        document.getElementById("_rubbe").classList.add("vi")
        document.getElementById("_color").classList.remove("vi")
        climg.classList.remove("big")
        document.getElementById("_brush").classList.remove("vi")
        bhimg.classList.remove("big")
    }
}

var _rubbe_2 = document.getElementById("_rubbe_2")
var _rubbe_4 = document.getElementById("_rubbe_4")
var _rubbe_6 = document.getElementById("_rubbe_6")
var _rubbe_8 = document.getElementById("_rubbe_8")
_rubbe_2.onclick = function () {
    document.getElementById("rubbehengxian1").classList.add("rubbehenxian_vi")
    document.getElementById("rubbehengxian2").classList.remove("rubbehenxian_vi")
    document.getElementById("rubbehengxian3").classList.remove("rubbehenxian_vi")
    document.getElementById("rubbehengxian4").classList.remove("rubbehenxian_vi")
    ctx.lineWidth = "10px"
    ctx.strokeStyle = "white"
}

_rubbe_4.onclick = function () {
    document.getElementById("rubbehengxian2").classList.add("rubbehenxian_vi")
    document.getElementById("rubbehengxian1").classList.remove("rubbehenxian_vi")
    document.getElementById("rubbehengxian3").classList.remove("rubbehenxian_vi")
    document.getElementById("rubbehengxian4").classList.remove("rubbehenxian_vi")
    ctx.lineWidth = 15
    ctx.strokeStyle = "white"

}

_rubbe_6.onclick = function () {
    document.getElementById("rubbehengxian3").classList.add("rubbehenxian_vi")
    document.getElementById("rubbehengxian2").classList.remove("rubbehenxian_vi")
    document.getElementById("rubbehengxian1").classList.remove("rubbehenxian_vi")
    document.getElementById("rubbehengxian4").classList.remove("rubbehenxian_vi")
    ctx.lineWidth = 20
    ctx.strokeStyle = "white"
}

_rubbe_8.onclick = function () {
    document.getElementById("rubbehengxian4").classList.add("rubbehenxian_vi")
    document.getElementById("rubbehengxian2").classList.remove("rubbehenxian_vi")
    document.getElementById("rubbehengxian3").classList.remove("rubbehenxian_vi")
    document.getElementById("rubbehengxian1").classList.remove("rubbehenxian_vi")
    ctx.lineWidth = 25
    ctx.strokeStyle = "white"
}

var xxxx = document.getElementById("xxxx")
console.log(xxxx)
xxxx.onclick = function () {
    location.reload();
}

var yyyy = document.getElementById("yyyy")
yyyy.onclick = function () {
    // var image = cvs.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // window.location.href = image;
    var a = document.createElement("a");
    a.href = cvs.toDataURL();
    a.download = "我的画板";
    a.click();
}



