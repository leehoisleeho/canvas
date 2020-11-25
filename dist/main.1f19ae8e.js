// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var cvs = document.getElementById("canvas");
cvs.height = 1000;
cvs.width = 1800;
var ctx = cvs.getContext("2d");
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "red";
ctx.strokeStyle = ""; //画笔的颜色

ctx.lineWidth = 10; //画笔的粗细

var active = false;
var last;

cvs.onmousedown = function (event) {
  active = true;
  var X1 = event.offsetX;
  var Y1 = event.offsetY;
  last = [X1, Y1];
};

cvs.onmouseup = function () {
  active = false;
};

cvs.onmousemove = function (event) {
  if (active) {
    drawLine(last[0], last[1], event.offsetX, event.offsetY);
    last = [event.offsetX, event.offsetY];
  }
};

cvs.onmouseover = function () {
  active = false;
}; // 画线


drawLine = function drawLine(X1, Y1, X2, Y2) {
  ctx.beginPath();
  ctx.moveTo(X1, Y1);
  ctx.lineTo(X2, Y2);
  ctx.stroke();
  ctx.lineCap = "round";
}; //


var last_color;
var last_lineWidth;
var last_lineWidth1;
canvas.style.cursor = "url('./img/brush2.cur' ),auto"; //笔粗细选择

var bh = document.getElementById("brush");
var bhimg = document.getElementById("brush1");

bh.onclick = function () {
  if (ctx.strokeStyle === "#ffffff") {
    last_lineWidth1 = ctx.lineWidth;
    console.log(last_lineWidth1);
    ctx.strokeStyle = last_color;
    ctx.lineWidth = last_lineWidth;
    canvas.style.cursor = "url('./img/brush2.cur' ),auto";
  }

  var hasClass = document.getElementById("brush1").classList.contains("big");

  if (hasClass) {
    document.getElementById("_brush").classList.remove("vi");
    bhimg.classList.remove("big");
    document.getElementById("_color").classList.remove("vi");
    climg.classList.remove("big");
    document.getElementById("_rubbe").classList.remove("vi");
    climg.classList.remove("big");
  } else {
    bhimg.classList.add("big");
    document.getElementById("_brush").classList.add("vi");
    document.getElementById("_color").classList.remove("vi");
    climg.classList.remove("big");
    document.getElementById("_rubbe").classList.remove("vi");
    ruimg.classList.remove("big");
  }
};

var _px_2 = document.getElementById("_px_2");

_px_2.onclick = function () {
  document.getElementById("hengxian1").classList.add("henxian_vi");
  document.getElementById("hengxian2").classList.remove("henxian_vi");
  document.getElementById("hengxian3").classList.remove("henxian_vi");
  document.getElementById("hengxian4").classList.remove("henxian_vi");
  ctx.lineWidth = 10;
};

var _px_4 = document.getElementById("_px_4");

_px_4.onclick = function () {
  document.getElementById("hengxian2").classList.add("henxian_vi");
  document.getElementById("hengxian1").classList.remove("henxian_vi");
  document.getElementById("hengxian3").classList.remove("henxian_vi");
  document.getElementById("hengxian4").classList.remove("henxian_vi");
  ctx.lineWidth = 15;
};

var _px_6 = document.getElementById("_px_6");

_px_6.onclick = function () {
  document.getElementById("hengxian3").classList.add("henxian_vi");
  document.getElementById("hengxian2").classList.remove("henxian_vi");
  document.getElementById("hengxian1").classList.remove("henxian_vi");
  document.getElementById("hengxian4").classList.remove("henxian_vi");
  ctx.lineWidth = 20;
};

var _px_8 = document.getElementById("_px_8");

_px_8.onclick = function () {
  document.getElementById("hengxian4").classList.add("henxian_vi");
  document.getElementById("hengxian2").classList.remove("henxian_vi");
  document.getElementById("hengxian3").classList.remove("henxian_vi");
  document.getElementById("hengxian1").classList.remove("henxian_vi");
  ctx.lineWidth = 25;
}; //画笔颜色选择


var cl = document.getElementById("color");
var climg = document.getElementById("color1");

cl.onclick = function () {
  var hasClass = document.getElementById("color1").classList.contains("big");

  if (hasClass) {
    document.getElementById("_color").classList.remove("vi");
    climg.classList.remove("big");
    document.getElementById("_brush").classList.remove("vi");
    bhimg.classList.remove("big");
    document.getElementById("_rubbe").classList.remove("vi");
    climg.classList.remove("big");
  } else {
    climg.classList.add("big");
    document.getElementById("_color").classList.add("vi");
    document.getElementById("_brush").classList.remove("vi");
    bhimg.classList.remove("big");
    document.getElementById("_rubbe").classList.remove("vi");
    ruimg.classList.remove("big");
  }
};

var _color_01_1 = document.getElementById("_color_01_1");

var _color_01_2 = document.getElementById("_color_01_2");

var _color_01_3 = document.getElementById("_color_01_3");

var _color_01_4 = document.getElementById("_color_01_4");

var _color_01_5 = document.getElementById("_color_01_5");

_color_01_1.onclick = function () {
  _color_01_1.classList.add("colorbig");

  _color_01_2.classList.remove("colorbig");

  _color_01_3.classList.remove("colorbig");

  _color_01_4.classList.remove("colorbig");

  _color_01_5.classList.remove("colorbig");

  ctx.strokeStyle = " rgb(26, 26, 26)";
  px_2.style.background = "rgb(26, 26, 26)";
  px_4.style.background = "rgb(26, 26, 26)";
  px_6.style.background = "rgb(26, 26, 26)";
  px_8.style.background = "rgb(26, 26, 26)";
};

_color_01_2.onclick = function () {
  _color_01_2.classList.add("colorbig");

  _color_01_1.classList.remove("colorbig");

  _color_01_3.classList.remove("colorbig");

  _color_01_4.classList.remove("colorbig");

  _color_01_5.classList.remove("colorbig");

  ctx.strokeStyle = " #34A853";
  px_2.style.background = "#34A853";
  px_4.style.background = "#34A853";
  px_6.style.background = "#34A853";
  px_8.style.background = "#34A853";
};

_color_01_3.onclick = function () {
  _color_01_3.classList.add("colorbig");

  _color_01_2.classList.remove("colorbig");

  _color_01_1.classList.remove("colorbig");

  _color_01_4.classList.remove("colorbig");

  _color_01_5.classList.remove("colorbig");

  ctx.strokeStyle = " #4285F4";
  px_2.style.background = "#4285F4";
  px_4.style.background = "#4285F4";
  px_6.style.background = "#4285F4";
  px_8.style.background = "#4285F4";
};

_color_01_4.onclick = function () {
  _color_01_4.classList.add("colorbig");

  _color_01_2.classList.remove("colorbig");

  _color_01_3.classList.remove("colorbig");

  _color_01_1.classList.remove("colorbig");

  _color_01_5.classList.remove("colorbig");

  ctx.strokeStyle = "#EA4335";
  px_2.style.background = "#EA4335";
  px_4.style.background = "#EA4335";
  px_6.style.background = "#EA4335";
  px_8.style.background = "#EA4335";
};

_color_01_5.onclick = function () {
  _color_01_5.classList.add("colorbig");

  _color_01_2.classList.remove("colorbig");

  _color_01_3.classList.remove("colorbig");

  _color_01_4.classList.remove("colorbig");

  _color_01_1.classList.remove("colorbig");

  ctx.strokeStyle = "#FBBC05";
  px_2.style.background = "#FBBC05";
  px_4.style.background = "#FBBC05";
  px_6.style.background = "#FBBC05";
  px_8.style.background = "#FBBC05";
}; //橡皮大小选择


var ru = document.getElementById("rubbe");
var ruimg = document.getElementById("rubbe1");

ru.onclick = function () {
  var xxx = ctx.strokeStyle; // console.log(xxx)

  if (xxx === "#ffffff") {
    console.log("是橡皮");
  } else {
    console.log("不是橡皮");
    last_color = ctx.strokeStyle;
    last_lineWidth = ctx.lineWidth;
    ctx.lineWidth = last_lineWidth1;
    canvas.style.cursor = "url('./img/rubber.cur' ),auto";
  } // console.log(last_color)


  ctx.strokeStyle = "white";
  var hasClass = document.getElementById("rubbe1").classList.contains("big");

  if (hasClass) {
    document.getElementById("_rubbe").classList.remove("vi");
    ruimg.classList.remove("big");
    document.getElementById("_color").classList.remove("vi");
    climg.classList.remove("big");
    document.getElementById("_brush").classList.remove("vi");
    bhimg.classList.remove("big");
  } else {
    ruimg.classList.add("big");
    document.getElementById("_rubbe").classList.add("vi");
    document.getElementById("_color").classList.remove("vi");
    climg.classList.remove("big");
    document.getElementById("_brush").classList.remove("vi");
    bhimg.classList.remove("big");
  }
};

var _rubbe_2 = document.getElementById("_rubbe_2");

var _rubbe_4 = document.getElementById("_rubbe_4");

var _rubbe_6 = document.getElementById("_rubbe_6");

var _rubbe_8 = document.getElementById("_rubbe_8");

_rubbe_2.onclick = function () {
  document.getElementById("rubbehengxian1").classList.add("rubbehenxian_vi");
  document.getElementById("rubbehengxian2").classList.remove("rubbehenxian_vi");
  document.getElementById("rubbehengxian3").classList.remove("rubbehenxian_vi");
  document.getElementById("rubbehengxian4").classList.remove("rubbehenxian_vi");
  ctx.lineWidth = "10px";
  ctx.strokeStyle = "white";
};

_rubbe_4.onclick = function () {
  document.getElementById("rubbehengxian2").classList.add("rubbehenxian_vi");
  document.getElementById("rubbehengxian1").classList.remove("rubbehenxian_vi");
  document.getElementById("rubbehengxian3").classList.remove("rubbehenxian_vi");
  document.getElementById("rubbehengxian4").classList.remove("rubbehenxian_vi");
  ctx.lineWidth = 15;
  ctx.strokeStyle = "white";
};

_rubbe_6.onclick = function () {
  document.getElementById("rubbehengxian3").classList.add("rubbehenxian_vi");
  document.getElementById("rubbehengxian2").classList.remove("rubbehenxian_vi");
  document.getElementById("rubbehengxian1").classList.remove("rubbehenxian_vi");
  document.getElementById("rubbehengxian4").classList.remove("rubbehenxian_vi");
  ctx.lineWidth = 20;
  ctx.strokeStyle = "white";
};

_rubbe_8.onclick = function () {
  document.getElementById("rubbehengxian4").classList.add("rubbehenxian_vi");
  document.getElementById("rubbehengxian2").classList.remove("rubbehenxian_vi");
  document.getElementById("rubbehengxian3").classList.remove("rubbehenxian_vi");
  document.getElementById("rubbehengxian1").classList.remove("rubbehenxian_vi");
  ctx.lineWidth = 25;
  ctx.strokeStyle = "white";
};

var xxxx = document.getElementById("xxxx");
console.log(xxxx);

xxxx.onclick = function () {
  location.reload();
};

var yyyy = document.getElementById("yyyy");

yyyy.onclick = function () {
  // var image = cvs.toDataURL("image/png").replace("image/png", "image/octet-stream");
  // window.location.href = image;
  var a = document.createElement("a");
  a.href = cvs.toDataURL();
  a.download = "我的画板";
  a.click();
};
},{}],"../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49727" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map