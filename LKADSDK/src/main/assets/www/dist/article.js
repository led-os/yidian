!function (e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {i: o, l: !1, exports: {}};
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: o})
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 147)
}([function (e, t, n) {
    "use strict";
    t.__esModule = !0, t["default"] = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0;
    var r = n(36), i = o(r);
    t["default"] = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, i["default"])(t)) && "function" != typeof t ? e : t
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0;
    var r = n(98), i = o(r), a = n(102), s = o(a), c = n(36), d = o(c);
    t["default"] = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, d["default"])(t)));
        e.prototype = (0, s["default"])(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (i["default"] ? (0, i["default"])(e, t) : e.__proto__ = t)
    }
}, function (e, t) {
    e.exports = preact
}, function (e, t) {
    var n = e.exports = {version: "2.6.5"};
    "number" == typeof __e && (__e = n)
}, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (e, t, n) {
    var o = n(43)("wks"), r = n(29), i = n(5).Symbol, a = "function" == typeof i, s = e.exports = function (e) {
        return o[e] || (o[e] = a && i[e] || (a ? i : r)("Symbol." + e))
    };
    s.store = o
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = {
        API_URI: "http://a1.go2yd.com/Website",
        API_URI_S3RD: "http://api-small-3rd.go2yd.com/Website",
        API_URI_S3RD_TEST: "http://api-small-3rd.test.go2yd.com/Website"
    };
    t["default"] = o
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function r() {
        return !("undefined" != typeof container && container || H)
    }

    function i(e) {
        var t = $('<iframe class="iframe-scheme" style="width:1px;height:1px;position:absolute;left:-1000em;"></iframe>');
        t.attr("src", e), $("body").append(t), setTimeout(function () {
            $(".iframe-scheme").remove()
        }, 1e3)
    }

    function a(e) {
        if ("undefined" != typeof container && container && container.changeOrientation) container.showCommentsInHeader(e); else {
            var t = "yidian-article://article?t=showCommentsInHeader&count=" + e;
            i(t)
        }
    }

    function s(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
        return new j["default"](function (t, o) {
            if (H) return void t(null);
            var a = "a" + Math.random().toFixed(5).substr(2);
            if (window[a] = function (e, n) {
                H && console.dir(n), e ? o(e) : t("object" === ("undefined" == typeof n ? "undefined" : (0, B["default"])(n)) ? n : "success" === n ? n : "string" == typeof n ? JSON.parse(n) : n), delete window[a]
            }, "undefined" != typeof container && container && container[e]) {
                var s;
                (s = container)[e].apply(s, n.concat([a]))
            } else r() ? (W++, i("yidian-article://article?t=" + e + (n.length ? n[0] : "") + "&rid=" + W + "&callback=" + a + "&ttl=0")) : t(null)
        })
    }

    function c(e) {
        G.app_info = e
    }

    function d(e, t) {
        if (0 === e.indexOf("http")) return "thirdparty" === t ? {
            category: "thirdparty",
            paraList: e
        } : {category: "external", paraList: e};
        var n = e.split("?"), o = n[1] || "", r = n[0], i = r.split("/"), a = i[i.length - 1];
        return "picture_gallery" == t && (o += "&ctype=picture_gallery"), {category: a, paraList: o}
    }

    function l(e) {
        var t = "&impid=" + e.impid + "&_searchid=" + e._searchid + "&_isRelatedNews=" + e._isRelatedNews + "&_srcDocId=" + e._srcDocId + "&pageid=" + e.pageid + "&channel_from_id=" + e.channelFromId + "&log_field=" + ((0, F.getParameterByName)("log_field") || "") + "&appid=" + ((0, F.getParameterByName)("appid") || "") + "&utk=" + ((0, F.getParameterByName)("utk") || "") + "&s=" + ((0, F.getParameterByName)("s") || "") + "&debug=" + (H || "");
        if (e.mtype) {
            if (3 == e.mtype) return f(e.url, "external");
            if (!e.url) return f("/hybrid_developer/main/article?docid=" + e.docid + t, e.ctype);
            "picture_gallery" == e.ctype ? (e.url = e.url + "&yidian_fs=1", f(e.url, "thirdparty", !0)) : (e.url.indexOf("?") > 0 ? e.url += "&yidian-docid=" + e.docid + t : e.url += "?yidian-docid=" + e.docid + t, f(e.url, "thirdparty"))
        } else e.url && e.url.indexOf("yidianzixun.com") < 0 && (t += "&showorigin=true"), f("/hybrid_developer/main/article?docid=" + e.docid + t, e.ctype)
    }

    function u(e, t, n) {
        "undefined" != typeof container && container && container.openUri ? container.openUri(e, t, !!n) : i("yidian-article://article?t=openUri&type=" + e + "&params=" + encodeURIComponent(t) + "&isGallery=" + !!n)
    }

    function f(e, t, n) {
        if (H) return void (window.location.href = e);
        var o = d(e, t);
        "video" === t || "video_live" === t ? u("video", o.paraList, !1) : "picture_gallery" === t ? u("gallery", o.paraList, !0) : u(o.category, o.paraList, !!n)
    }

    function p(e) {
        if (e && $(e) && $(e).length) {
            var t = $(document.body).scrollTop() || $(window).scrollTop(), n = $(e).offset().top, o = $(e).height();
            return t <= n + o
        }
    }

    function m(e) {
        if (e && $(e) && $(e).length) {
            var t = $(document.body).scrollTop() || $(window).scrollTop(), n = $(e).offset().top, o = $(e).height(),
                r = $(window).height();
            return t >= n - r && t <= n + o
        }
    }

    function h(e, t, n) {
        e = e || "", t = t || "", n = n || "", "object" === ("undefined" == typeof container ? "undefined" : (0, B["default"])(container)) && container.setArticleHeader ? container.setArticleHeader(e, t, n) : i("yidian-article://article?t=set_article_header&title=" + encodeURIComponent(e) + "&background=" + encodeURIComponent(t) + "&logo=" + encodeURIComponent(n))
    }

    function _(e) {
        "undefined" != typeof container && container && container.set3rdAppInfo ? container.set3rdAppInfo(e) : i("yidian-article://article?t=set3rdAppInfo&appInfo=" + encodeURIComponent(e))
    }

    function g() {
        "undefined" != typeof container && container && container.close ? container.close() : i("yidian-article://article?t=close_webview")
    }

    function y(e) {
        if ("undefined" != typeof container && container && container.changeOrientation) container.changeOrientation(e); else {
            var t = "yidian-article://article?t=changeOrientation&usingPortrait=" + e;
            i(t)
        }
    }

    function v() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return s.apply(void 0, ["getCurrentBrightness"].concat(t))
    }

    function w(e) {
        if ("undefined" != typeof container && container && container.setCurrentBrightness) container.setCurrentBrightness(e); else {
            var t = "yidian-article://article?t=setCurrentBrightness&percent=" + e;
            i(t)
        }
    }

    function b() {
        "undefined" != typeof container && container && container.webViewReloadUrl ? container.webViewReloadUrl() : location && location.reload && location.reload()
    }

    function x() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return s.apply(void 0, ["getCurrentVolume"].concat(t))
    }

    function C(e) {
        if ("undefined" != typeof container && container && container.setCurrentVolume) container.setCurrentVolume(e); else {
            var t = "yidian-article://article?t=setCurrentVolume&percent=" + e;
            i(t)
        }
    }

    function I(e) {
        "undefined" != typeof container && container && container.showToast && container.showToast(e)
    }

    function S(e) {
        if ("undefined" != typeof container && container && container.thirdPartyAdListener) container.thirdPartyAdListener(e); else {
            var t = "yidian-article://article?t=thirdPartyAdListener&thirdPartyUrls=" + encodeURIComponent((0, P["default"])(e));
            i(t)
        }
    }

    function M(e, t, n, o) {
        "undefined" != typeof container && container && container.reserveH5Ad ? container.reserveH5Ad(e, t, n, o) : i("yidian-article://article?t=reserveH5Ad&viewId=" + t + "&name=" + n + "&phone=" + o + "&adCard=" + encodeURIComponent(e))
    }

    function N(e, t) {
        "undefined" != typeof container && container && container.openH5Ad ? container.openH5Ad(e, t) : i("yidian-article://article?t=openH5Ad&viewId=" + t + "&adCard=" + encodeURIComponent(e))
    }

    function k(e, t) {
        "undefined" != typeof container && container && container.deeplink ? container.deeplink(e, t) : i("yidian-article://article?t=deeplink&url=" + encodeURIComponent(t) + "&scheme_url=" + encodeURIComponent(e))
    }

    t.__esModule = !0, t.getClientInfo = t.isDebug = void 0;
    var L = n(35), P = o(L), O = n(72), T = o(O), R = n(73), E = o(R), A = n(36), B = o(A), D = n(34), j = o(D);
    t.getClientInfo = function () {
        var e = (0, E["default"])(T["default"].mark(function t() {
            var e, n, o, r, i = arguments;
            return T["default"].wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (!H) {
                            t.next = 3;
                            break
                        }
                        return G = {
                            version: "1.0.6",
                            api_ver: "010000",
                            net_type: "wifi",
                            androidVersion: "8.0.0",
                            device: "gemini",
                            screenHeight: 1920,
                            screenWidth: 1080,
                            mac: "B0:E2:35:C8:E3:53",
                            imei: "1e4a1b03d1b6cd8a174a826f76e009f4",
                            app_info: {config: {related_news_num: 4, need_comment: "yes"}}
                        }, t.abrupt("return", G);
                    case 3:
                        if (!G) {
                            t.next = 7;
                            break
                        }
                        return t.abrupt("return", G);
                    case 7:
                        for (e = i.length, n = Array(e), o = 0; o < e; o++) n[o] = i[o];
                        return t.next = 10, s.apply(void 0, ["getClientInfo"].concat(n));
                    case 10:
                        return r = t.sent, r && r.app_info && (r.app_info = JSON.parse(r.app_info)), G = r || {}, t.abrupt("return", G);
                    case 14:
                    case"end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function () {
            return e.apply(this, arguments)
        }
    }();
    t.isIOS = r, t.showCommentsInHeader = a, t.promisify = s, t.updateClientInfoWithAppInfo = c, t.openArticle = l, t.redirect = f, t.checkElemIsInView = p, t.checkElemIsInView2 = m, t.toggleArticleTitle = h, t.set3rdAppInfo = _, t.close = g, t.changeOrientation = y, t.getCurrentBrightness = v, t.setCurrentBrightness = w, t.reloadPage = b, t.getCurrentVolume = x, t.setCurrentVolume = C, t.showToast = I, t.sendThirdPartyMonitorLog = S, t.reserveH5Ad = M, t.openH5Ad = N, t.deeplink = k;
    var F = n(18), V = (n(12), n(7)), U = o(V), W = (U["default"].API_URI, 0),
        H = t.isDebug = (0, F.getParameterByName)("debug"), G = void 0
}, function (e, t, n) {
    var o = n(5), r = n(4), i = n(22), a = n(14), s = n(17), c = "prototype", d = function (e, t, n) {
        var l, u, f, p = e & d.F, m = e & d.G, h = e & d.S, _ = e & d.P, g = e & d.B, y = e & d.W,
            v = m ? r : r[t] || (r[t] = {}), w = v[c], b = m ? o : h ? o[t] : (o[t] || {})[c];
        m && (n = t);
        for (l in n) u = !p && b && void 0 !== b[l], u && s(v, l) || (f = u ? b[l] : n[l], v[l] = m && "function" != typeof b[l] ? n[l] : g && u ? i(f, o) : y && b[l] == f ? function (e) {
            var t = function (t, n, o) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, n)
                    }
                    return new e(t, n, o)
                }
                return e.apply(this, arguments)
            };
            return t[c] = e[c], t
        }(f) : _ && "function" == typeof f ? i(Function.call, f) : f, _ && ((v.virtual || (v.virtual = {}))[l] = f, e & d.R && w && !w[l] && a(w, l, f)))
    };
    d.F = 1, d.G = 2, d.S = 4, d.P = 8, d.B = 16, d.W = 32, d.U = 64, d.R = 128, e.exports = d
}, function (e, t, n) {
    var o = n(11);
    e.exports = function (e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e
    }
}, function (e, t) {
    e.exports = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function r(e, t) {
        var n = new m["default"](function (t, n) {
            var o = setTimeout(function () {
                clearTimeout(o), n({status: "failed"})
            }, e)
        });
        return m["default"].race([t, n])
    }

    function i(e, t) {
        return t = "true" === e.debug ? t.replace("http://a1.go2yd.com", "http://a3.go2yd.com") : t.replace("http://a3.go2yd.com", "http://a1.go2yd.com")
    }

    function a(e) {
        return h.isDebug && (e += e.indexOf("?") < 0 ? "?" : "&", e += "version=010000&cv=1.0.6"), "/hybrid_mini/req?url=" + encodeURIComponent(e) + "&sid=zKhxcvqd6zN7-jvqjSptgg"
    }

    function s(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return r(5e3, (0, h.getClientInfo)().then(function (n) {
            return n && (0, f["default"])(n).length && !h.isDebug ? (e = i(n, e), (0, h.isIOS)() ? (0, h.promisify)("http_req", "&url=" + encodeURIComponent(e) + "&method=get&needClientParams=" + !t.noNeedClientParams + (t.isCommentsRequest ? "&isCommentsRequest=true" : "")) : (0, h.promisify)("get", e, t.isCommentsRequest)) : fetch(a(e), {method: "GET"}).then(function (e) {
                return e.json()
            })
        }))
    }

    function c(e, t, n, o) {
        return r(5e3, (0, h.getClientInfo)().then(function (r) {
            return r && (0, f["default"])(r).length && !h.isDebug ? (e = i(r, e), (0, h.isIOS)() ? (0, h.promisify)("http_req", "&url=" + encodeURIComponent(e) + "&method=post&data=" + encodeURIComponent((0, l["default"])(t)) + "&needSDKAuth=" + n + "&needClientParams=" + o) : (0, h.promisify)("post", e, (0, l["default"])(t), n)) : fetch(a(e), {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: (0, l["default"])({data: t})
            }).then(function (e) {
                return e.json()
            })
        }))
    }

    t.__esModule = !0;
    var d = n(35), l = o(d), u = n(105), f = o(u), p = n(34), m = o(p);
    t.getJSON = s, t.standardPost = c, n(124);
    var h = n(8)
}, function (e, t, n) {
    "use strict";

    function o(e) {
        var t = e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
        return t && {
            href: e,
            protocol: t[1],
            host: t[2],
            hostname: t[3],
            port: t[4],
            pathname: t[5],
            search: t[6],
            hash: t[7]
        }
    }

    function r(e, t) {
        if (/corpimage.php/.test(e)) return e.replace(/(type=\w+_)\d+x\d+/i, "$1" + (t || "324x216"));
        if (/http:\/\/i[1-3]?\.go2yd\.com/.test(e)) return "https:" === location.protocol && (e = e.replace("http:", "https:")), e;
        var n = o(e);
        return n && n.host.indexOf("go2yd") < 0 ? e : "https:" === location.protocol ? "https://i1.go2yd.com/image/" + encodeURIComponent(e) + "?type=thumbnail_" + (t || "324x216") : "http://i1.go2yd.com/image/" + encodeURIComponent(e) + "?type=thumbnail_" + (t || "324x216")
    }

    function i(e, t) {
        var n, o, r, i, a;
        t = t || new Date, o = {
            "y+": t.getFullYear(),
            "M+": t.getMonth() + 1,
            "d+": t.getDate(),
            E: t.getDay(),
            "h+": t.getHours(),
            "m+": t.getMinutes(),
            "s+": t.getSeconds()
        };
        for (i in o) a = o[i], r = new RegExp(i), e.match(r) && (n = e.match(r)[0], (a + "").length < n.length && (a = "0" + a), e = e.replace(n, a));
        return e
    }

    function a(e, t) {
        var n = new Date(e);
        if ("cndd" === t) {
            var o = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], r = i("E", n);
            return o[r]
        }
        return i(t, n)
    }

    function s(e) {
        var t, n, o;
        return e = e || 0, o = Math.floor(e % 60) < 10 ? "0" + Math.floor(e % 60) : Math.floor(e % 60), n = Math.floor(e / 60 % 60) < 10 ? "0" + Math.floor(e / 60 % 60) : Math.floor(e / 60 % 60), t = Math.floor(e / 3600), (t ? t + ":" : "") + (n + ":" + o)
    }

    function c(e) {
        if (e < 1e3) return e;
        if (e >= 1e3 && e < 1e4) {
            var t = String(e);
            return t.slice(0, 1) + "," + t.slice(1)
        }
        return parseFloat(e / 1e4).toFixed(1) + "万"
    }

    t.__esModule = !0, t.formatImgUrl = r, t.formatLogDate = i, t.formatDateInFormat = a, t.formatDuration = s, t.formatNumber = c
}, function (e, t, n) {
    var o = n(15), r = n(28);
    e.exports = n(16) ? function (e, t, n) {
        return o.f(e, t, r(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }
}, function (e, t, n) {
    var o = n(10), r = n(53), i = n(40), a = Object.defineProperty;
    t.f = n(16) ? Object.defineProperty : function (e, t, n) {
        if (o(e), t = i(t, !0), o(n), r) try {
            return a(e, t, n)
        } catch (s) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e
    }
}, function (e, t, n) {
    e.exports = !n(19)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
        return n.call(e, t)
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
        return t && decodeURIComponent(t[1].replace(/\+/g, " "))
    }

    t.__esModule = !0, t.getParameterByName = o
}, function (e, t) {
    e.exports = function (e) {
        try {
            return !!e()
        } catch (t) {
            return !0
        }
    }
}, function (e, t, n) {
    var o = n(56), r = n(38);
    e.exports = function (e) {
        return o(r(e))
    }
}, function (e, t) {
    e.exports = !0
}, function (e, t, n) {
    var o = n(27);
    e.exports = function (e, t, n) {
        if (o(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, o) {
                    return e.call(t, n, o)
                };
            case 3:
                return function (n, o, r) {
                    return e.call(t, n, o, r)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var o = n(55), r = n(44);
    e.exports = Object.keys || function (e) {
        return o(e, r)
    }
}, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
        return n.call(e).slice(8, -1)
    }
}, function (e, t) {
    e.exports = {
        hide: "utils__hide___336sw",
        invisible: "utils__invisible___34vQg",
        clearfix: "utils__clearfix___2kYC_",
        "bottom-1px": "utils__bottom-1px___PLyJT",
        "plus-v-round": "utils__plus-v-round___1NyXo",
        "plus-v-round-1": "utils__plus-v-round-1___t1N9O",
        "plus-v-round-2": "utils__plus-v-round-2___3ONpl",
        "plus-v-round-3": "utils__plus-v-round-3___3hr02",
        "plus-v-round-4": "utils__plus-v-round-4___2ldII"
    }
}, function (e, t) {
    e.exports = function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }
}, function (e, t) {
    var n = 0, o = Math.random();
    e.exports = function (e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36))
    }
}, function (e, t, n) {
    var o = n(15).f, r = n(17), i = n(6)("toStringTag");
    e.exports = function (e, t, n) {
        e && !r(e = n ? e : e.prototype, i) && o(e, i, {configurable: !0, value: t})
    }
}, function (e, t) {
    t.f = {}.propertyIsEnumerable
}, function (e, t) {
    e.exports = {
        "news-comments": "comments__news-comments___22ZhL",
        title: "comments__title___1O4iZ",
        comment: "comments__comment___352k0",
        "comment-header": "comments__comment-header___Fjucj",
        "profile-wrap": "comments__profile-wrap___-m02l",
        img: "comments__img___1-JTQ",
        info: "comments__info___14foY",
        name: "comments__name___30f0F",
        like: "comments__like___338yx",
        "comment-info": "comments__comment-info___z5aMc",
        "comment-content": "comments__comment-content___3yqNj",
        date: "comments__date___q_BNt",
        "comment-replies": "comments__comment-replies___wZJED",
        reply: "comments__reply___343W_",
        "reply-comment": "comments__reply-comment___3hOj7",
        "reply-to": "comments__reply-to___3e9Oz",
        "reply-to-name": "comments__reply-to-name___hKUjm",
        toggleMoreReplies: "comments__toggleMoreReplies___3QCMF",
        toggleIcon: "comments__toggleIcon___1rbwK",
        toggleUp: "comments__toggleUp___1ZsOk",
        "video-comments": "comments__video-comments___1t6ig",
        "comment-num": "comments__comment-num___2jsR-",
        noCommentsContainer: "comments__noCommentsContainer___30Ogq",
        noComments: "comments__noComments___i2PiQ"
    }
}, function (e, t, n) {
    "use strict";
    var o = function (e) {
        return (e > 9 ? "" : "0") + e
    }, r = function (e) {
        var t, n, r, i, a, s, c;
        return "string" != typeof e || e.indexOf(" ") === -1 && e.indexOf("T") === -1 ? e = new Date(e) : (e = e.indexOf(" ") !== -1 ? e.split(" ") : e.split("T"), t = e[0].split("-"), a = e[1].split(":"), e = new Date(t[0], t[1] - 1, t[2], a[0], a[1], a[2])), isNaN(e.getTime()) ? "" : (i = new Date, s = new Date(i.getFullYear(), i.getMonth(), i.getDate()), t = (e - s) / 864e5, c = o(e.getMonth() + 1) + "-" + o(e.getDate()) + " " + o(e.getHours()) + ":" + o(e.getMinutes()), t >= 0 && (n = (i - e) / 36e5, n < 1 ? (r = (i - e) / 6e4, c = r >= 1 ? Math.floor(r) + "分钟前" : "刚刚") : c = Math.floor(n) + "小时前"), c)
    };
    e.exports = {formatDate: r}
}, function (e, t, n) {
    e.exports = {"default": n(109), __esModule: !0}
}, function (e, t, n) {
    e.exports = {"default": n(77), __esModule: !0}
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0;
    var r = n(78), i = o(r), a = n(89), s = o(a),
        c = "function" == typeof s["default"] && "symbol" == typeof i["default"] ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : typeof e
        };
    t["default"] = "function" == typeof s["default"] && "symbol" === c(i["default"]) ? function (e) {
        return "undefined" == typeof e ? "undefined" : c(e)
    } : function (e) {
        return e && "function" == typeof s["default"] && e.constructor === s["default"] && e !== s["default"].prototype ? "symbol" : "undefined" == typeof e ? "undefined" : c(e)
    }
}, function (e, t) {
    var n = Math.ceil, o = Math.floor;
    e.exports = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }
}, function (e, t, n) {
    var o = n(11), r = n(5).document, i = o(r) && o(r.createElement);
    e.exports = function (e) {
        return i ? r.createElement(e) : {}
    }
}, function (e, t, n) {
    var o = n(11);
    e.exports = function (e, t) {
        if (!o(e)) return e;
        var n, r;
        if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
        if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
        if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (e, t, n) {
    var o = n(10), r = n(82), i = n(44), a = n(42)("IE_PROTO"), s = function () {
    }, c = "prototype", d = function () {
        var e, t = n(39)("iframe"), o = i.length, r = "<", a = ">";
        for (t.style.display = "none", n(58).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(r + "script" + a + "document.F=Object" + r + "/script" + a), e.close(), d = e.F; o--;) delete d[c][i[o]];
        return d()
    };
    e.exports = Object.create || function (e, t) {
        var n;
        return null !== e ? (s[c] = o(e), n = new s, s[c] = null, n[a] = e) : n = d(), void 0 === t ? n : r(n, t)
    }
}, function (e, t, n) {
    var o = n(43)("keys"), r = n(29);
    e.exports = function (e) {
        return o[e] || (o[e] = r(e))
    }
}, function (e, t, n) {
    var o = n(4), r = n(5), i = "__core-js_shared__", a = r[i] || (r[i] = {});
    (e.exports = function (e, t) {
        return a[e] || (a[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: o.version,
        mode: n(21) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (e, t, n) {
    var o = n(38);
    e.exports = function (e) {
        return Object(o(e))
    }
}, function (e, t, n) {
    t.f = n(6)
}, function (e, t, n) {
    var o = n(5), r = n(4), i = n(21), a = n(46), s = n(15).f;
    e.exports = function (e) {
        var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
        "_" == e.charAt(0) || e in t || s(t, e, {value: a.f(e)})
    }
}, function (e, t) {
    t.f = Object.getOwnPropertySymbols
}, function (e, t, n) {
    "use strict";

    function o(e) {
        var t, n;
        this.promise = new e(function (e, o) {
            if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = o
        }), this.resolve = r(t), this.reject = r(n)
    }

    var r = n(27);
    e.exports.f = function (e) {
        return new o(e)
    }
}, function (e, t) {
    e.exports = {
        "yidian-img-alt": "yidian__yidian-img-alt___Vd3Df",
        "yidian-ico": "yidian__yidian-ico___1aX1v",
        "yidian-media": "yidian__yidian-media___1cBJG",
        "yidian-gallery": "yidian__yidian-gallery___1Yq2-"
    }
}, function (e, t, n) {
    "use strict";
    var o = n(80)(!0);
    n(52)(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = o(t, n), this._i += e.length, {value: e, done: !1})
    })
}, function (e, t, n) {
    "use strict";
    var o = n(21), r = n(9), i = n(54), a = n(14), s = n(23), c = n(81), d = n(30), l = n(85), u = n(6)("iterator"),
        f = !([].keys && "next" in [].keys()), p = "@@iterator", m = "keys", h = "values", _ = function () {
            return this
        };
    e.exports = function (e, t, n, g, y, v, w) {
        c(n, t, g);
        var b, x, C, I = function (e) {
                if (!f && e in k) return k[e];
                switch (e) {
                    case m:
                        return function () {
                            return new n(this, e)
                        };
                    case h:
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }, S = t + " Iterator", M = y == h, N = !1, k = e.prototype, L = k[u] || k[p] || y && k[y], P = L || I(y),
            O = y ? M ? I("entries") : P : void 0, T = "Array" == t ? k.entries || L : L;
        if (T && (C = l(T.call(new e)), C !== Object.prototype && C.next && (d(C, S, !0), o || "function" == typeof C[u] || a(C, u, _))), M && L && L.name !== h && (N = !0, P = function () {
            return L.call(this)
        }), o && !w || !f && !N && k[u] || a(k, u, P), s[t] = P, s[S] = _, y) if (b = {
            values: M ? P : I(h),
            keys: v ? P : I(m),
            entries: O
        }, w) for (x in b) x in k || i(k, x, b[x]); else r(r.P + r.F * (f || N), t, b);
        return b
    }
}, function (e, t, n) {
    e.exports = !n(16) && !n(19)(function () {
        return 7 != Object.defineProperty(n(39)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (e, t, n) {
    e.exports = n(14)
}, function (e, t, n) {
    var o = n(17), r = n(20), i = n(83)(!1), a = n(42)("IE_PROTO");
    e.exports = function (e, t) {
        var n, s = r(e), c = 0, d = [];
        for (n in s) n != a && o(s, n) && d.push(n);
        for (; t.length > c;) o(s, n = t[c++]) && (~i(d, n) || d.push(n));
        return d
    }
}, function (e, t, n) {
    var o = n(25);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
        return "String" == o(e) ? e.split("") : Object(e)
    }
}, function (e, t, n) {
    var o = n(37), r = Math.min;
    e.exports = function (e) {
        return e > 0 ? r(o(e), 9007199254740991) : 0
    }
}, function (e, t, n) {
    var o = n(5).document;
    e.exports = o && o.documentElement
}, function (e, t, n) {
    n(86);
    for (var o = n(5), r = n(14), i = n(23), a = n(6)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < s.length; c++) {
        var d = s[c], l = o[d], u = l && l.prototype;
        u && !u[a] && r(u, a, d), i[d] = i.Array
    }
}, function (e, t, n) {
    var o = n(55), r = n(44).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
        return o(e, r)
    }
}, function (e, t, n) {
    var o = n(31), r = n(28), i = n(20), a = n(40), s = n(17), c = n(53), d = Object.getOwnPropertyDescriptor;
    t.f = n(16) ? d : function (e, t) {
        if (e = i(e), t = a(t, !0), c) try {
            return d(e, t)
        } catch (n) {
        }
        if (s(e, t)) return r(!o.f.call(e, t), e[t])
    }
}, function (e, t) {
}, function (e, t, n) {
    var o = n(25), r = n(6)("toStringTag"), i = "Arguments" == o(function () {
        return arguments
    }()), a = function (e, t) {
        try {
            return e[t]
        } catch (n) {
        }
    };
    e.exports = function (e) {
        var t, n, s;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = a(t = Object(e), r)) ? n : i ? o(t) : "Object" == (s = o(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
}, function (e, t, n) {
    var o = n(10), r = n(27), i = n(6)("species");
    e.exports = function (e, t) {
        var n, a = o(e).constructor;
        return void 0 === a || void 0 == (n = o(a)[i]) ? t : r(n)
    }
}, function (e, t, n) {
    var o, r, i, a = n(22), s = n(116), c = n(58), d = n(39), l = n(5), u = l.process, f = l.setImmediate,
        p = l.clearImmediate, m = l.MessageChannel, h = l.Dispatch, _ = 0, g = {}, y = "onreadystatechange",
        v = function () {
            var e = +this;
            if (g.hasOwnProperty(e)) {
                var t = g[e];
                delete g[e], t()
            }
        }, w = function (e) {
            v.call(e.data)
        };
    f && p || (f = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return g[++_] = function () {
            s("function" == typeof e ? e : Function(e), t)
        }, o(_), _
    }, p = function (e) {
        delete g[e]
    }, "process" == n(25)(u) ? o = function (e) {
        u.nextTick(a(v, e, 1))
    } : h && h.now ? o = function (e) {
        h.now(a(v, e, 1))
    } : m ? (r = new m, i = r.port2, r.port1.onmessage = w, o = a(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (o = function (e) {
        l.postMessage(e + "", "*")
    }, l.addEventListener("message", w, !1)) : o = y in d("script") ? function (e) {
        c.appendChild(d("script"))[y] = function () {
            c.removeChild(this), v.call(e)
        }
    } : function (e) {
        setTimeout(a(v, e, 1), 0)
    }), e.exports = {set: f, clear: p}
}, function (e, t) {
    e.exports = function (e) {
        try {
            return {e: !1, v: e()}
        } catch (t) {
            return {e: !0, v: t}
        }
    }
}, function (e, t, n) {
    var o = n(10), r = n(11), i = n(49);
    e.exports = function (e, t) {
        if (o(e), r(t) && t.constructor === e) return t;
        var n = i.f(e), a = n.resolve;
        return a(t), n.promise
    }
}, function (e, t, n) {
    var o, r;
    !function (i, a) {
        o = a, r = "function" == typeof o ? o.call(t, n, t, e) : o, !(void 0 !== r && (e.exports = r))
    }(window, function () {
        "use strict";

        function e(e) {
            var t = parseFloat(e), n = e.indexOf("%") == -1 && !isNaN(t);
            return n && t
        }

        function t() {
        }

        function n() {
            for (var e = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, t = 0; t < d; t++) {
                var n = c[t];
                e[n] = 0
            }
            return e
        }

        function o(e) {
            var t = getComputedStyle(e);
            return t || s("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
        }

        function r() {
            if (!l) {
                l = !0;
                var t = document.createElement("div");
                t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(t);
                var r = o(t);
                a = 200 == Math.round(e(r.width)), i.isBoxSizeOuter = a, n.removeChild(t)
            }
        }

        function i(t) {
            if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var i = o(t);
                if ("none" == i.display) return n();
                var s = {};
                s.width = t.offsetWidth, s.height = t.offsetHeight;
                for (var l = s.isBorderBox = "border-box" == i.boxSizing, u = 0; u < d; u++) {
                    var f = c[u], p = i[f], m = parseFloat(p);
                    s[f] = isNaN(m) ? 0 : m
                }
                var h = s.paddingLeft + s.paddingRight, _ = s.paddingTop + s.paddingBottom,
                    g = s.marginLeft + s.marginRight, y = s.marginTop + s.marginBottom,
                    v = s.borderLeftWidth + s.borderRightWidth, w = s.borderTopWidth + s.borderBottomWidth, b = l && a,
                    x = e(i.width);
                x !== !1 && (s.width = x + (b ? 0 : h + v));
                var C = e(i.height);
                return C !== !1 && (s.height = C + (b ? 0 : _ + w)), s.innerWidth = s.width - (h + v), s.innerHeight = s.height - (_ + w), s.outerWidth = s.width + g, s.outerHeight = s.height + y, s
            }
        }

        var a, s = "undefined" == typeof console ? t : function (e) {
                console.error(e)
            },
            c = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            d = c.length, l = !1;
        return i
    })
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    function r() {
        return new p["default"](function (e, t) {
            (0, v.getJSON)(C + "/config/systime-sync").then(function (t) {
                if (t && t.systime) {
                    var n = 1e3 * t.systime - Date.now();
                    e(n)
                } else e(0)
            })
        })
    }

    function i() {
        return S = S || r(), S.then(function (e) {
            var t = new Date(Date.now() + e), n = (0, b.formatLogDate)("yyyy-MM-dd hh:mm:ss", t);
            return n
        })
    }

    function a(e) {
        _({
            action_method: "CLICK_DOC",
            action_source: {page: "PageWapDocument", card: "CardWapDocument"},
            entity: {ctype: e.ctype, doc_id: e.docid}
        })
    }

    function s(e, t, n, o) {
        var r = L(e, t, n, o.appid);
        (0, v.standardPost)(I + "/ads/upload-lingxi-log?utk=" + (o.utk || "") + "&platform=" + ("0" == n.platform ? 0 : 1) + "&version=" + (n.version || "") + "&internal_appid=" + (o.appid || ""), r, !0)
    }

    t.__esModule = !0, t.sendExposeRelatedLog = t.sendClickRelatedLog = t.sendClickDocLog = void 0;
    var c = n(72), d = o(c), l = n(73), u = o(l), f = n(34), p = o(f), m = function () {
        var e = (0, u["default"])(d["default"].mark(function t(e) {
            var n;
            return d["default"].wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, (0, x.getClientInfo)();
                    case 2:
                        return n = t.sent, e.log_up = e.log_up || {}, e.log_up.appid = e.log_up.appid || n && n.appid || "", e.log_up.bundle_version = n && n.version || "", e.log_up.device_name = n && n.device_name || "", e.log_up.device_id = n && n.device_id || "", t.abrupt("return", (0, v.standardPost)(I + "/proxy/real-time-log-for-web?internal_appid=" + ((0, w.getParameterByName)("appid") || ""), e));
                    case 9:
                    case"end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function (t) {
            return e.apply(this, arguments)
        }
    }(), h = (t.sendClickDocLog = function () {
        var e = (0, u["default"])(d["default"].mark(function t(e) {
            var n, o;
            return d["default"].wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, i();
                    case 2:
                        n = t.sent, o = {
                            log_field: (0, w.getParameterByName)("log_field") || {},
                            log_up: {
                                appid: (0, w.getParameterByName)("appid") || "",
                                subType: e.is_video ? "play" : "clickDoc",
                                timeElapsed: -1,
                                docid: e.docid,
                                ctype: e.ctype,
                                date: n
                            }
                        }, m(o);
                    case 5:
                    case"end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function (t) {
            return e.apply(this, arguments)
        }
    }(), t.sendClickRelatedLog = function () {
        var e = (0, u["default"])(d["default"].mark(function t(e) {
            var n, o;
            return d["default"].wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, i();
                    case 2:
                        n = t.sent, o = {
                            log_field: (0, w.getParameterByName)("log_field") || {},
                            log_up: {
                                docid: e.docid,
                                appid: (0, w.getParameterByName)("appid") || "",
                                subType: e.is_video ? "play" : "clickDoc",
                                mashtype: e.is_video ? "video-rel" : "news-rel",
                                timeElapsed: -1,
                                actionSrc: e.is_video ? "relatedVideos" : "relatedNews",
                                pageid: e.pageid || "",
                                ctype: e.ctype,
                                factor: "keyword",
                                impid: e.impid || "",
                                date: n
                            }
                        }, m(o);
                    case 5:
                    case"end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function (t) {
            return e.apply(this, arguments)
        }
    }(), t.sendExposeRelatedLog = function () {
        var e = (0, u["default"])(d["default"].mark(function t(e) {
            var n, o, r;
            return d["default"].wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, i();
                    case 2:
                        for (n = t.sent, o = {
                            log_field: (0, w.getParameterByName)("log_field") || {},
                            log_up: {
                                appid: (0, w.getParameterByName)("appid") || "",
                                subType: "expose",
                                actionSrc: e[0].is_video ? "relatedVideos" : "relatedNews",
                                mashtype: e[0].is_video ? "video-rel" : "news-rel",
                                date: n,
                                doc: []
                            }
                        }, r = 0; r < e.length; r++) o.log_up.doc.push({
                            impid: e[r].impid,
                            pageid: e[r].pageid,
                            docids: [{docid: e[r].docid, ctype: e[r].ctype, factor: "keyword"}]
                        });
                        m(o);
                    case 6:
                    case"end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function (t) {
            return e.apply(this, arguments)
        }
    }(), function () {
        var e = (0, u["default"])(d["default"].mark(function t() {
            var e, n;
            return d["default"].wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return t.next = 2, (0, x.getClientInfo)();
                    case 2:
                        return e = t.sent, n = {
                            log_version: 1,
                            browser_user_agent: navigator.userAgent,
                            browser_type: "",
                            action_timestamp_ms: Date.now(),
                            uid: {wuid: N, refer_uid: (0, w.getParameterByName)("utk") || "", bucket_id: 0},
                            app_meta: {
                                build_number: e && e.version || "",
                                platform: e && "0" == e.platform ? "IOS" : "Android",
                                app_id: (0, w.getParameterByName)("appid") || "",
                                bundle_version: e && e.version || "",
                                device_name: e && e.device_name || "",
                                device_id: e && e.device_id || ""
                            },
                            refer_social: "",
                            ui_method: "UI_CLICK",
                            context: {refer_url: document.referrer}
                        }, t.abrupt("return", n);
                    case 5:
                    case"end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function () {
            return e.apply(this, arguments)
        }
    }()), _ = function () {
        var e = (0, u["default"])(d["default"].mark(function t(e) {
            var n, o, r;
            return d["default"].wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        return e = e || {}, t.next = 3, h();
                    case 3:
                        n = t.sent, o = $.extend(!0, {}, n, e), r = "http://rl.go2yd.com/web_raw?utk=" + ((0, w.getParameterByName)("utk") || ""), (0, v.standardPost)(r, o);
                    case 7:
                    case"end":
                        return t.stop()
                }
            }, t, this)
        }));
        return function (t) {
            return e.apply(this, arguments)
        }
    }();
    t.sendClickNewsOfflineLog = a, t.sendAdLog = s;
    var g = n(7), y = o(g), v = n(12), w = n(18), b = n(13), x = n(8), C = y["default"].API_URI,
        I = y["default"].API_URI_S3RD, S = void 0, M = document.cookie.match(/(^|;\s*)wuid=([^;$]*)/),
        N = M && M[2] || "", k = function () {
            var e, t, n;
            for (n = "", e = t = 1; t <= 20; e = ++t) n += Math.floor(16 * Math.random()).toString(16);
            return n += (new Date).getTime().toString(16), n.toUpperCase()
        }, L = function (e, t, n, o) {
            var r = {
                version: n.version,
                appid: o,
                platform: "0" == n.platform ? 0 : 1,
                event: e,
                net: n.net_type,
                action: "/Ext/ads/upload-lingxi-log",
                imei: n.imei,
                imei1: n.imei1,
                mac: n.mac,
                region: n.region,
                cv: n.version,
                pos: t.position || 0,
                aid: t.aid || 0,
                adsfrom: t.adsfrom || "",
                dspname: t.dspname || "",
                eid: t.eid || "",
                userid: n.userid,
                ex: t.ex || "",
                url: t.url || "",
                expire_time: t.expireTime || 0,
                template: t.template || "",
                tid: t.tid || "",
                viewmonitor_urls: t.viewMonitorUrls,
                clickmonitor_urls: t.clickMonitorUrls,
                uuid: k(),
                "3rd_ad_version": 1
            };
            return r
        }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = o(l), f = n(3), p = n(12), m = n(32),
        h = o(m), _ = u["default"].API_URI_S3RD, g = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.state = {
                    replies: n.replies || [],
                    showAll: !1
                }, o.loadingMoreReplies = !1, o.toggleExpandReplies = o.toggleExpandReplies.bind(o), o
            }

            return (0, d["default"])(t, e), t.prototype.getMoreReplies = function (e) {
                var t = this;
                if (!t.loadingMoreReplies) {
                    var n = _ + "/contents/comment-replies?comment_id=" + encodeURIComponent(e) + "&count=100";
                    "https://doris.yidianzixun.com/home/q/get_more_replies_s3rd?comment_id=" + encodeURIComponent(e);
                    (0, p.getJSON)(n).then(function (e) {
                        e && e.comment && e.comment.replies.length ? (t.loadingMoreReplies = !1, t.setState({
                            replies: e.comment.replies,
                            showAll: !0
                        })) : t.loadingMoreReplies = !1
                    }, function (e) {
                        t.loadingMoreReplies = !1
                    })
                }
            }, t.prototype.toggleExpandReplies = function () {
                var e = this;
                e.state.showAll ? e.setState({showAll: !1}) : e.props.total == e.state.replies.length ? e.setState({showAll: !0}) : (e.getMoreReplies(e.props.comment_id), e.loadingMoreReplies = !0)
            }, t.prototype.render = function (e, t) {
                var n = e.comment_id, o = e.total, r = t.replies, i = t.showAll, a = {}, s = r.map(function (e, t) {
                    a[e.reply_id] = e.nickname;
                    var o = "：";
                    e.reply_to != n && (o = (0, f.h)("span", null, (0, f.h)("span", {"class": h["default"]["reply-to"]}, " 回复 "), (0, f.h)("span", {"class": h["default"]["reply-to-name"]}, " ", a[e.reply_to], "：")));
                    var r = !i && t >= 3 ? "none" : "";
                    return (0, f.h)("div", {
                        "class": h["default"].reply,
                        key: t,
                        style: {display: r}
                    }, (0, f.h)("span", {"class": h["default"]["reply-name"]}, e.nickname || "一点资讯网友"), o, (0, f.h)("span", {"class": h["default"]["reply-comment"]}, e.comment))
                }), c = (0, f.h)("div", {"class": h["default"]["comment-replies"]}, s, o > 3 && !i && (0, f.h)("div", {
                    "class": h["default"].toggleMoreReplies,
                    onClick: this.toggleExpandReplies
                }, "展开全部", o, "条回复", (0, f.h)("span", {"class": h["default"].toggleIcon})), o > 3 && i && (0, f.h)("div", {
                    "class": h["default"].toggleMoreReplies,
                    onClick: this.toggleExpandReplies
                }, "收起回复", (0, f.h)("span", {"class": h["default"].toggleIcon + " " + h["default"].toggleUp})));
                return c
            }, t
        }(f.Component);
    t["default"] = g
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(154), f = o(u), p = (n(33), n(13)),
        m = function (e) {
            function t(n) {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
            }

            return (0, d["default"])(t, e), t.prototype.render = function (e) {
                var t = f["default"].infos + (e.style && e.style.infos ? " " + e.style.infos : "");
                return (0, l.h)("div", {"class": t}, e.playtimes && (0, l.h)("div", null, "播放量：", (0, p.formatNumber)(e.doc.play_times || e.doc.play_count)), !e.playtimes && (0, l.h)("div", null, (0, l.h)("span", {"class": f["default"].source}, e.doc.source)))
            }, t
        }(l.Component);
    t["default"] = m
}, function (e, t, n) {
    e.exports = n(125)
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0;
    var r = n(34), i = o(r);
    t["default"] = function (e) {
        return function () {
            var t = e.apply(this, arguments);
            return new i["default"](function (e, n) {
                function o(r, a) {
                    try {
                        var s = t[r](a), c = s.value
                    } catch (d) {
                        return void n(d)
                    }
                    return s.done ? void e(c) : i["default"].resolve(c).then(function (e) {
                        o("next", e)
                    }, function (e) {
                        o("throw", e)
                    })
                }

                return o("next")
            })
        }
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(75), i = o(r), a = n(0), s = o(a), c = n(1), d = o(c), l = n(2), u = o(l), f = n(3), p = n(8),
        m = function (e) {
            function t(n) {
                return (0, s["default"])(this, t), (0, d["default"])(this, e.call(this, n))
            }

            return (0, u["default"])(t, e), t.prototype.componentDidMount = function () {
                if (Hammer && !(0, p.isIOS)()) {
                    var e = this.props.container ? this.props.container : this.container, t = new Hammer(e, {});
                    t.on("panend", function (e) {
                        e.deltaX > 80 && Math.abs(e.deltaY) < 80 && (0, p.close)()
                    })
                }
            }, t.prototype.render = function (e, t) {
                var n = this;
                return e.container ? e.children[0] : (0, f.h)("div", (0, i["default"])({
                    ref: function (e) {
                        return n.container = e
                    }
                }, e))
            }, t
        }(f.Component);
    t["default"] = m
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0;
    var r = n(129), i = o(r);
    t["default"] = i["default"] || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = o(l), f = n(3), p = n(12), m = n(13),
        h = (n(18), n(68)), _ = (o(h), n(32)), g = o(_), y = n(134), v = o(y), w = n(136), b = o(w), x = n(137),
        C = o(x), I = u["default"].API_URI_S3RD, S = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.state = {
                    comments: [],
                    newCommentStartIndex: 0,
                    loadMoreStatus: "",
                    showNoComments: !1
                }, o.handleLoadFail = o.handleLoadFail.bind(o), o
            }

            return (0, d["default"])(t, e), t.prototype.componentDidMount = function () {
                this.getComments()
            }, t.prototype.componentWillReceiveProps = function (e) {
                this.props.doc && this.props.doc.docid && this.props.doc.docid != e.doc.docid && (this.state.total = "", this.state.comments = [], this.state.newCommentStartIndex = 0, this.props.doc = e.doc, this.getComments())
            }, t.prototype.getComments = function (e) {
                var t = this, n = 10;
                this.setState({
                    loadMoreStatus: "loading",
                    showNoComments: !1
                }), (0, p.getJSON)(I + "/contents/comments?docid=" + this.props.doc.docid + "&count=" + n + (e ? "&last_comment_id=" + e : ""), {isCommentsRequest: !0}).then(function (o) {
                    return o && "failed" != o.status ? (e ? t.setState({comments: t.state.comments.concat(o.comments)}) : t.setState({
                        comments: t.props.doc && "video" == t.props.doc.content_type ? o.comments : o.hot_comments.concat(o.comments),
                        newCommentStartIndex: o.hot_comments.length,
                        total: (0, m.formatNumber)(o.total) + "条"
                    }), void (e && o.comments.length < n ? t.setState({loadMoreStatus: "loadMoreFailed"}) : e || 0 !== o.comments.length ? t.setState({loadMoreStatus: "loadMoreSuccess"}) : t.setState({showNoComments: !0}))) : void t.handleLoadFail(e)
                }, function (n) {
                    t.handleLoadFail(e)
                })
            }, t.prototype.handleLoadFail = function (e) {
                e ? this.setState({loadMoreStatus: "loadMoreFailed"}) : this.setState({showNoComments: !0})
            }, t.prototype.render = function (e, t) {
                var n = e.container, o = e.doc, r = t.comments, i = t.showNoComments, a = t.total, s = t.loadMoreStatus,
                    c = t.newCommentStartIndex, d = r[r.length - 1] || {}, l = "video" == o.content_type;
                return (0, f.h)("div", {
                    "class": l ? g["default"]["video-comments"] : g["default"]["news-comments"],
                    id: "comments"
                }, l && (0, f.h)("div", {"class": g["default"].title}, (0, f.h)("span", null, "评论"), (0, f.h)("span", {"class": g["default"]["comment-num"]}, a || "")), !l && i && (0, f.h)("div", {"class": g["default"].title}, "最新评论"), i && (0, f.h)("div", {"class": g["default"].noCommentsContainer}, (0, f.h)("div", {"class": g["default"].noComments})), !i && (n && l || !l) && (0, f.h)(v["default"], {
                    loadMoreStatus: s,
                    loadMoreCallBack: this.getComments.bind(this, d.comment_id),
                    loadMoreContainer: n
                }, (0, f.h)("div", null, !l && (0, f.h)(b["default"], {
                    comments: r,
                    newCommentStartIndex: c
                }), l && (0, f.h)(C["default"], {comments: r}))))
            }, t
        }(f.Component);
    t["default"] = S
}, function (e, t, n) {
    var o = n(4), r = o.JSON || (o.JSON = {stringify: JSON.stringify});
    e.exports = function (e) {
        return r.stringify.apply(r, arguments)
    }
}, function (e, t, n) {
    e.exports = {"default": n(79), __esModule: !0}
}, function (e, t, n) {
    n(51), n(59), e.exports = n(46).f("iterator")
}, function (e, t, n) {
    var o = n(37), r = n(38);
    e.exports = function (e) {
        return function (t, n) {
            var i, a, s = String(r(t)), c = o(n), d = s.length;
            return c < 0 || c >= d ? e ? "" : void 0 : (i = s.charCodeAt(c), i < 55296 || i > 56319 || c + 1 === d || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : (i - 55296 << 10) + (a - 56320) + 65536)
        }
    }
}, function (e, t, n) {
    "use strict";
    var o = n(41), r = n(28), i = n(30), a = {};
    n(14)(a, n(6)("iterator"), function () {
        return this
    }), e.exports = function (e, t, n) {
        e.prototype = o(a, {next: r(1, n)}), i(e, t + " Iterator")
    }
}, function (e, t, n) {
    var o = n(15), r = n(10), i = n(24);
    e.exports = n(16) ? Object.defineProperties : function (e, t) {
        r(e);
        for (var n, a = i(t), s = a.length, c = 0; s > c;) o.f(e, n = a[c++], t[n]);
        return e
    }
}, function (e, t, n) {
    var o = n(20), r = n(57), i = n(84);
    e.exports = function (e) {
        return function (t, n, a) {
            var s, c = o(t), d = r(c.length), l = i(a, d);
            if (e && n != n) {
                for (; d > l;) if (s = c[l++], s != s) return !0
            } else for (; d > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
            return !e && -1
        }
    }
}, function (e, t, n) {
    var o = n(37), r = Math.max, i = Math.min;
    e.exports = function (e, t) {
        return e = o(e), e < 0 ? r(e + t, 0) : i(e, t)
    }
}, function (e, t, n) {
    var o = n(17), r = n(45), i = n(42)("IE_PROTO"), a = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
        return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
    }
}, function (e, t, n) {
    "use strict";
    var o = n(87), r = n(88), i = n(23), a = n(20);
    e.exports = n(52)(Array, "Array", function (e, t) {
        this._t = a(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]])
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function (e, t) {
    e.exports = function () {
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return {value: t, done: !!e}
    }
}, function (e, t, n) {
    e.exports = {"default": n(90), __esModule: !0}
}, function (e, t, n) {
    n(91), n(62), n(96), n(97), e.exports = n(4).Symbol
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(17), i = n(16), a = n(9), s = n(54), c = n(92).KEY, d = n(19), l = n(43), u = n(30), f = n(29),
        p = n(6), m = n(46), h = n(47), _ = n(93), g = n(94), y = n(10), v = n(11), w = n(20), b = n(40), x = n(28),
        C = n(41), I = n(95), S = n(61), M = n(15), N = n(24), k = S.f, L = M.f, P = I.f, O = o.Symbol, T = o.JSON,
        R = T && T.stringify, E = "prototype", A = p("_hidden"), B = p("toPrimitive"), D = {}.propertyIsEnumerable,
        j = l("symbol-registry"), F = l("symbols"), V = l("op-symbols"), U = Object[E], W = "function" == typeof O,
        H = o.QObject, $ = !H || !H[E] || !H[E].findChild, G = i && d(function () {
            return 7 != C(L({}, "a", {
                get: function () {
                    return L(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (e, t, n) {
            var o = k(U, t);
            o && delete U[t], L(e, t, n), o && e !== U && L(U, t, o)
        } : L, z = function (e) {
            var t = F[e] = C(O[E]);
            return t._k = e, t
        }, q = W && "symbol" == typeof O.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof O
        }, J = function (e, t, n) {
            return e === U && J(V, t, n), y(e), t = b(t, !0), y(n), r(F, t) ? (n.enumerable ? (r(e, A) && e[A][t] && (e[A][t] = !1), n = C(n, {enumerable: x(0, !1)})) : (r(e, A) || L(e, A, x(1, {})), e[A][t] = !0), G(e, t, n)) : L(e, t, n)
        }, Y = function (e, t) {
            y(e);
            for (var n, o = _(t = w(t)), r = 0, i = o.length; i > r;) J(e, n = o[r++], t[n]);
            return e
        }, K = function (e, t) {
            return void 0 === t ? C(e) : Y(C(e), t)
        }, Q = function (e) {
            var t = D.call(this, e = b(e, !0));
            return !(this === U && r(F, e) && !r(V, e)) && (!(t || !r(this, e) || !r(F, e) || r(this, A) && this[A][e]) || t)
        }, Z = function (e, t) {
            if (e = w(e), t = b(t, !0), e !== U || !r(F, t) || r(V, t)) {
                var n = k(e, t);
                return !n || !r(F, t) || r(e, A) && e[A][t] || (n.enumerable = !0), n
            }
        }, X = function (e) {
            for (var t, n = P(w(e)), o = [], i = 0; n.length > i;) r(F, t = n[i++]) || t == A || t == c || o.push(t);
            return o
        }, ee = function (e) {
            for (var t, n = e === U, o = P(n ? V : w(e)), i = [], a = 0; o.length > a;) !r(F, t = o[a++]) || n && !r(U, t) || i.push(F[t]);
            return i
        };
    W || (O = function () {
        if (this instanceof O) throw TypeError("Symbol is not a constructor!");
        var e = f(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
            this === U && t.call(V, n), r(this, A) && r(this[A], e) && (this[A][e] = !1), G(this, e, x(1, n))
        };
        return i && $ && G(U, e, {configurable: !0, set: t}), z(e)
    }, s(O[E], "toString", function () {
        return this._k
    }), S.f = Z, M.f = J, n(60).f = I.f = X, n(31).f = Q, n(48).f = ee, i && !n(21) && s(U, "propertyIsEnumerable", Q, !0), m.f = function (e) {
        return z(p(e))
    }), a(a.G + a.W + a.F * !W, {Symbol: O});
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) p(te[ne++]);
    for (var oe = N(p.store), re = 0; oe.length > re;) h(oe[re++]);
    a(a.S + a.F * !W, "Symbol", {
        "for": function (e) {
            return r(j, e += "") ? j[e] : j[e] = O(e)
        }, keyFor: function (e) {
            if (!q(e)) throw TypeError(e + " is not a symbol!");
            for (var t in j) if (j[t] === e) return t
        }, useSetter: function () {
            $ = !0
        }, useSimple: function () {
            $ = !1
        }
    }), a(a.S + a.F * !W, "Object", {
        create: K,
        defineProperty: J,
        defineProperties: Y,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: X,
        getOwnPropertySymbols: ee
    }), T && a(a.S + a.F * (!W || d(function () {
        var e = O();
        return "[null]" != R([e]) || "{}" != R({a: e}) || "{}" != R(Object(e))
    })), "JSON", {
        stringify: function (e) {
            for (var t, n, o = [e], r = 1; arguments.length > r;) o.push(arguments[r++]);
            if (n = t = o[1], (v(t) || void 0 !== e) && !q(e)) return g(t) || (t = function (e, t) {
                if ("function" == typeof n && (t = n.call(this, e, t)), !q(t)) return t
            }), o[1] = t, R.apply(T, o)
        }
    }), O[E][B] || n(14)(O[E], B, O[E].valueOf), u(O, "Symbol"), u(Math, "Math", !0), u(o.JSON, "JSON", !0)
}, function (e, t, n) {
    var o = n(29)("meta"), r = n(11), i = n(17), a = n(15).f, s = 0, c = Object.isExtensible || function () {
        return !0
    }, d = !n(19)(function () {
        return c(Object.preventExtensions({}))
    }), l = function (e) {
        a(e, o, {value: {i: "O" + ++s, w: {}}})
    }, u = function (e, t) {
        if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
        if (!i(e, o)) {
            if (!c(e)) return "F";
            if (!t) return "E";
            l(e)
        }
        return e[o].i
    }, f = function (e, t) {
        if (!i(e, o)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            l(e)
        }
        return e[o].w
    }, p = function (e) {
        return d && m.NEED && c(e) && !i(e, o) && l(e), e
    }, m = e.exports = {KEY: o, NEED: !1, fastKey: u, getWeak: f, onFreeze: p}
}, function (e, t, n) {
    var o = n(24), r = n(48), i = n(31);
    e.exports = function (e) {
        var t = o(e), n = r.f;
        if (n) for (var a, s = n(e), c = i.f, d = 0; s.length > d;) c.call(e, a = s[d++]) && t.push(a);
        return t
    }
}, function (e, t, n) {
    var o = n(25);
    e.exports = Array.isArray || function (e) {
        return "Array" == o(e)
    }
}, function (e, t, n) {
    var o = n(20), r = n(60).f, i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function (e) {
            try {
                return r(e)
            } catch (t) {
                return a.slice()
            }
        };
    e.exports.f = function (e) {
        return a && "[object Window]" == i.call(e) ? s(e) : r(o(e))
    }
}, function (e, t, n) {
    n(47)("asyncIterator")
}, function (e, t, n) {
    n(47)("observable")
}, function (e, t, n) {
    e.exports = {"default": n(99), __esModule: !0}
}, function (e, t, n) {
    n(100), e.exports = n(4).Object.setPrototypeOf
}, function (e, t, n) {
    var o = n(9);
    o(o.S, "Object", {setPrototypeOf: n(101).set})
}, function (e, t, n) {
    var o = n(11), r = n(10), i = function (e, t) {
        if (r(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, o) {
            try {
                o = n(22)(Function.call, n(61).f(Object.prototype, "__proto__").set, 2), o(e, []), t = !(e instanceof Array)
            } catch (r) {
                t = !0
            }
            return function (e, n) {
                return i(e, n), t ? e.__proto__ = n : o(e, n), e
            }
        }({}, !1) : void 0), check: i
    }
}, function (e, t, n) {
    e.exports = {"default": n(103), __esModule: !0}
}, function (e, t, n) {
    n(104);
    var o = n(4).Object;
    e.exports = function (e, t) {
        return o.create(e, t)
    }
}, function (e, t, n) {
    var o = n(9);
    o(o.S, "Object", {create: n(41)})
}, function (e, t, n) {
    e.exports = {"default": n(106), __esModule: !0}
}, function (e, t, n) {
    n(107), e.exports = n(4).Object.keys
}, function (e, t, n) {
    var o = n(45), r = n(24);
    n(108)("keys", function () {
        return function (e) {
            return r(o(e))
        }
    })
}, function (e, t, n) {
    var o = n(9), r = n(4), i = n(19);
    e.exports = function (e, t) {
        var n = (r.Object || {})[e] || Object[e], a = {};
        a[e] = t(n), o(o.S + o.F * i(function () {
            n(1)
        }), "Object", a)
    }
}, function (e, t, n) {
    n(62), n(51), n(59), n(110), n(122), n(123), e.exports = n(4).Promise
}, function (e, t, n) {
    "use strict";
    var o, r, i, a, s = n(21), c = n(5), d = n(22), l = n(63), u = n(9), f = n(11), p = n(27), m = n(111), h = n(112),
        _ = n(64), g = n(65).set, y = n(117)(), v = n(49), w = n(66), b = n(118), x = n(67), C = "Promise",
        I = c.TypeError, S = c.process, M = S && S.versions, N = M && M.v8 || "", k = c[C], L = "process" == l(S),
        P = function () {
        }, O = r = v.f, T = !!function () {
            try {
                var e = k.resolve(1), t = (e.constructor = {})[n(6)("species")] = function (e) {
                    e(P, P)
                };
                return (L || "function" == typeof PromiseRejectionEvent) && e.then(P) instanceof t && 0 !== N.indexOf("6.6") && b.indexOf("Chrome/66") === -1
            } catch (o) {
            }
        }(), R = function (e) {
            var t;
            return !(!f(e) || "function" != typeof (t = e.then)) && t
        }, E = function (e, t) {
            if (!e._n) {
                e._n = !0;
                var n = e._c;
                y(function () {
                    for (var o = e._v, r = 1 == e._s, i = 0, a = function (t) {
                        var n, i, a, s = r ? t.ok : t.fail, c = t.resolve, d = t.reject, l = t.domain;
                        try {
                            s ? (r || (2 == e._h && D(e), e._h = 1), s === !0 ? n = o : (l && l.enter(), n = s(o), l && (l.exit(), a = !0)), n === t.promise ? d(I("Promise-chain cycle")) : (i = R(n)) ? i.call(n, c, d) : c(n)) : d(o)
                        } catch (u) {
                            l && !a && l.exit(), d(u)
                        }
                    }; n.length > i;) a(n[i++]);
                    e._c = [], e._n = !1, t && !e._h && A(e)
                })
            }
        }, A = function (e) {
            g.call(c, function () {
                var t, n, o, r = e._v, i = B(e);
                if (i && (t = w(function () {
                    L ? S.emit("unhandledRejection", r, e) : (n = c.onunhandledrejection) ? n({
                        promise: e,
                        reason: r
                    }) : (o = c.console) && o.error && o.error("Unhandled promise rejection", r)
                }), e._h = L || B(e) ? 2 : 1), e._a = void 0, i && t.e) throw t.v
            })
        }, B = function (e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        }, D = function (e) {
            g.call(c, function () {
                var t;
                L ? S.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({promise: e, reason: e._v})
            })
        }, j = function (e) {
            var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), E(t, !0))
        }, F = function (e) {
            var t, n = this;
            if (!n._d) {
                n._d = !0, n = n._w || n;
                try {
                    if (n === e) throw I("Promise can't be resolved itself");
                    (t = R(e)) ? y(function () {
                        var o = {_w: n, _d: !1};
                        try {
                            t.call(e, d(F, o, 1), d(j, o, 1))
                        } catch (r) {
                            j.call(o, r)
                        }
                    }) : (n._v = e, n._s = 1, E(n, !1))
                } catch (o) {
                    j.call({_w: n, _d: !1}, o)
                }
            }
        };
    T || (k = function (e) {
        m(this, k, C, "_h"), p(e), o.call(this);
        try {
            e(d(F, this, 1), d(j, this, 1))
        } catch (t) {
            j.call(this, t)
        }
    }, o = function (e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }, o.prototype = n(119)(k.prototype, {
        then: function (e, t) {
            var n = O(_(this, k));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = L ? S.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && E(this, !1), n.promise
        }, "catch": function (e) {
            return this.then(void 0, e)
        }
    }), i = function () {
        var e = new o;
        this.promise = e, this.resolve = d(F, e, 1), this.reject = d(j, e, 1)
    }, v.f = O = function (e) {
        return e === k || e === a ? new i(e) : r(e)
    }), u(u.G + u.W + u.F * !T, {Promise: k}), n(30)(k, C), n(120)(C), a = n(4)[C], u(u.S + u.F * !T, C, {
        reject: function (e) {
            var t = O(this), n = t.reject;
            return n(e), t.promise
        }
    }), u(u.S + u.F * (s || !T), C, {
        resolve: function (e) {
            return x(s && this === a ? k : this, e)
        }
    }), u(u.S + u.F * !(T && n(121)(function (e) {
        k.all(e)["catch"](P)
    })), C, {
        all: function (e) {
            var t = this, n = O(t), o = n.resolve, r = n.reject, i = w(function () {
                var n = [], i = 0, a = 1;
                h(e, !1, function (e) {
                    var s = i++, c = !1;
                    n.push(void 0), a++, t.resolve(e).then(function (e) {
                        c || (c = !0, n[s] = e, --a || o(n))
                    }, r)
                }), --a || o(n)
            });
            return i.e && r(i.v), n.promise
        }, race: function (e) {
            var t = this, n = O(t), o = n.reject, r = w(function () {
                h(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, o)
                })
            });
            return r.e && o(r.v), n.promise
        }
    })
}, function (e, t) {
    e.exports = function (e, t, n, o) {
        if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!");
        return e
    }
}, function (e, t, n) {
    var o = n(22), r = n(113), i = n(114), a = n(10), s = n(57), c = n(115), d = {}, l = {},
        t = e.exports = function (e, t, n, u, f) {
            var p, m, h, _, g = f ? function () {
                return e
            } : c(e), y = o(n, u, t ? 2 : 1), v = 0;
            if ("function" != typeof g) throw TypeError(e + " is not iterable!");
            if (i(g)) {
                for (p = s(e.length); p > v; v++) if (_ = t ? y(a(m = e[v])[0], m[1]) : y(e[v]), _ === d || _ === l) return _
            } else for (h = g.call(e); !(m = h.next()).done;) if (_ = r(h, y, m.value, t), _ === d || _ === l) return _
        };
    t.BREAK = d, t.RETURN = l
}, function (e, t, n) {
    var o = n(10);
    e.exports = function (e, t, n, r) {
        try {
            return r ? t(o(n)[0], n[1]) : t(n)
        } catch (i) {
            var a = e["return"];
            throw void 0 !== a && o(a.call(e)), i
        }
    }
}, function (e, t, n) {
    var o = n(23), r = n(6)("iterator"), i = Array.prototype;
    e.exports = function (e) {
        return void 0 !== e && (o.Array === e || i[r] === e)
    }
}, function (e, t, n) {
    var o = n(63), r = n(6)("iterator"), i = n(23);
    e.exports = n(4).getIteratorMethod = function (e) {
        if (void 0 != e) return e[r] || e["@@iterator"] || i[o(e)]
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        var o = void 0 === n;
        switch (t.length) {
            case 0:
                return o ? e() : e.call(n);
            case 1:
                return o ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
        }
        return e.apply(n, t)
    }
}, function (e, t, n) {
    var o = n(5), r = n(65).set, i = o.MutationObserver || o.WebKitMutationObserver, a = o.process, s = o.Promise,
        c = "process" == n(25)(a);
    e.exports = function () {
        var e, t, n, d = function () {
            var o, r;
            for (c && (o = a.domain) && o.exit(); e;) {
                r = e.fn, e = e.next;
                try {
                    r()
                } catch (i) {
                    throw e ? n() : t = void 0, i
                }
            }
            t = void 0, o && o.enter()
        };
        if (c) n = function () {
            a.nextTick(d)
        }; else if (!i || o.navigator && o.navigator.standalone) if (s && s.resolve) {
            var l = s.resolve(void 0);
            n = function () {
                l.then(d)
            }
        } else n = function () {
            r.call(o, d)
        }; else {
            var u = !0, f = document.createTextNode("");
            new i(d).observe(f, {characterData: !0}), n = function () {
                f.data = u = !u
            }
        }
        return function (o) {
            var r = {fn: o, next: void 0};
            t && (t.next = r), e || (e = r, n()), t = r
        }
    }
}, function (e, t, n) {
    var o = n(5), r = o.navigator;
    e.exports = r && r.userAgent || ""
}, function (e, t, n) {
    var o = n(14);
    e.exports = function (e, t, n) {
        for (var r in t) n && e[r] ? e[r] = t[r] : o(e, r, t[r]);
        return e
    }
}, function (e, t, n) {
    "use strict";
    var o = n(5), r = n(4), i = n(15), a = n(16), s = n(6)("species");
    e.exports = function (e) {
        var t = "function" == typeof r[e] ? r[e] : o[e];
        a && t && !t[s] && i.f(t, s, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (e, t, n) {
    var o = n(6)("iterator"), r = !1;
    try {
        var i = [7][o]();
        i["return"] = function () {
            r = !0
        }, Array.from(i, function () {
            throw 2
        })
    } catch (a) {
    }
    e.exports = function (e, t) {
        if (!t && !r) return !1;
        var n = !1;
        try {
            var i = [7], a = i[o]();
            a.next = function () {
                return {done: n = !0}
            }, i[o] = function () {
                return a
            }, e(i)
        } catch (s) {
        }
        return n
    }
}, function (e, t, n) {
    "use strict";
    var o = n(9), r = n(4), i = n(5), a = n(64), s = n(67);
    o(o.P + o.R, "Promise", {
        "finally": function (e) {
            var t = a(this, r.Promise || i.Promise), n = "function" == typeof e;
            return this.then(n ? function (n) {
                return s(t, e()).then(function () {
                    return n
                })
            } : e, n ? function (n) {
                return s(t, e()).then(function () {
                    throw n
                })
            } : e)
        }
    })
}, function (e, t, n) {
    "use strict";
    var o = n(9), r = n(49), i = n(66);
    o(o.S, "Promise", {
        "try": function (e) {
            var t = r.f(this), n = i(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    })
}, function (e, t) {
    e.exports = fetch
}, function (e, t, n) {
    var o = function () {
            return this
        }() || Function("return this")(),
        r = o.regeneratorRuntime && Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime") >= 0,
        i = r && o.regeneratorRuntime;
    if (o.regeneratorRuntime = void 0, e.exports = n(126), r) o.regeneratorRuntime = i; else try {
        delete o.regeneratorRuntime
    } catch (a) {
        o.regeneratorRuntime = void 0
    }
}, function (e, t) {
    !function (t) {
        "use strict";

        function n(e, t, n, o) {
            var i = t && t.prototype instanceof r ? t : r, a = Object.create(i.prototype), s = new p(o || []);
            return a._invoke = d(e, n, s), a
        }

        function o(e, t, n) {
            try {
                return {type: "normal", arg: e.call(t, n)}
            } catch (o) {
                return {type: "throw", arg: o}
            }
        }

        function r() {
        }

        function i() {
        }

        function a() {
        }

        function s(e) {
            ["next", "throw", "return"].forEach(function (t) {
                e[t] = function (e) {
                    return this._invoke(t, e)
                }
            })
        }

        function c(e) {
            function t(n, r, i, a) {
                var s = o(e[n], e, r);
                if ("throw" !== s.type) {
                    var c = s.arg, d = c.value;
                    return d && "object" == typeof d && y.call(d, "__await") ? Promise.resolve(d.__await).then(function (e) {
                        t("next", e, i, a)
                    }, function (e) {
                        t("throw", e, i, a)
                    }) : Promise.resolve(d).then(function (e) {
                        c.value = e, i(c)
                    }, a)
                }
                a(s.arg)
            }

            function n(e, n) {
                function o() {
                    return new Promise(function (o, r) {
                        t(e, n, o, r)
                    })
                }

                return r = r ? r.then(o, o) : o()
            }

            var r;
            this._invoke = n
        }

        function d(e, t, n) {
            var r = S;
            return function (i, a) {
                if (r === N) throw new Error("Generator is already running");
                if (r === k) {
                    if ("throw" === i) throw a;
                    return h()
                }
                for (n.method = i, n.arg = a; ;) {
                    var s = n.delegate;
                    if (s) {
                        var c = l(s, n);
                        if (c) {
                            if (c === L) continue;
                            return c
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                        if (r === S) throw r = k, n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    r = N;
                    var d = o(e, t, n);
                    if ("normal" === d.type) {
                        if (r = n.done ? k : M, d.arg === L) continue;
                        return {value: d.arg, done: n.done}
                    }
                    "throw" === d.type && (r = k, n.method = "throw", n.arg = d.arg)
                }
            }
        }

        function l(e, t) {
            var n = e.iterator[t.method];
            if (n === _) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator["return"] && (t.method = "return", t.arg = _, l(e, t), "throw" === t.method)) return L;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return L
            }
            var r = o(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, L;
            var i = r.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = _), t.delegate = null, L) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, L)
        }

        function u(e) {
            var t = {tryLoc: e[0]};
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function f(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function p(e) {
            this.tryEntries = [{tryLoc: "root"}], e.forEach(u, this), this.reset(!0)
        }

        function m(e) {
            if (e) {
                var t = e[w];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1, o = function r() {
                        for (; ++n < e.length;) if (y.call(e, n)) return r.value = e[n], r.done = !1, r;
                        return r.value = _, r.done = !0, r
                    };
                    return o.next = o
                }
            }
            return {next: h}
        }

        function h() {
            return {value: _, done: !0}
        }

        var _, g = Object.prototype, y = g.hasOwnProperty, v = "function" == typeof Symbol ? Symbol : {},
            w = v.iterator || "@@iterator", b = v.asyncIterator || "@@asyncIterator",
            x = v.toStringTag || "@@toStringTag", C = "object" == typeof e, I = t.regeneratorRuntime;
        if (I) return void (C && (e.exports = I));
        I = t.regeneratorRuntime = C ? e.exports : {}, I.wrap = n;
        var S = "suspendedStart", M = "suspendedYield", N = "executing", k = "completed", L = {}, P = {};
        P[w] = function () {
            return this
        };
        var O = Object.getPrototypeOf, T = O && O(O(m([])));
        T && T !== g && y.call(T, w) && (P = T);
        var R = a.prototype = r.prototype = Object.create(P);
        i.prototype = R.constructor = a, a.constructor = i, a[x] = i.displayName = "GeneratorFunction", I.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === i || "GeneratorFunction" === (t.displayName || t.name))
        }, I.mark = function (e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, a) : (e.__proto__ = a, x in e || (e[x] = "GeneratorFunction")), e.prototype = Object.create(R), e
        }, I.awrap = function (e) {
            return {__await: e}
        }, s(c.prototype), c.prototype[b] = function () {
            return this
        }, I.AsyncIterator = c, I.async = function (e, t, o, r) {
            var i = new c(n(e, t, o, r));
            return I.isGeneratorFunction(t) ? i : i.next().then(function (e) {
                return e.done ? e.value : i.next()
            })
        }, s(R), R[x] = "Generator", R[w] = function () {
            return this
        }, R.toString = function () {
            return "[object Generator]"
        }, I.keys = function (e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(), function o() {
                for (; t.length;) {
                    var n = t.pop();
                    if (n in e) return o.value = n, o.done = !1, o
                }
                return o.done = !0, o
            }
        }, I.values = m, p.prototype = {
            constructor: p, reset: function (e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = _, this.done = !1, this.delegate = null, this.method = "next", this.arg = _, this.tryEntries.forEach(f), !e) for (var t in this) "t" === t.charAt(0) && y.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = _)
            }, stop: function () {
                this.done = !0;
                var e = this.tryEntries[0], t = e.completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            }, dispatchException: function (e) {
                function t(t, o) {
                    return i.type = "throw", i.arg = e, n.next = t, o && (n.method = "next", n.arg = _), !!o
                }

                if (this.done) throw e;
                for (var n = this, o = this.tryEntries.length - 1; o >= 0; --o) {
                    var r = this.tryEntries[o], i = r.completion;
                    if ("root" === r.tryLoc) return t("end");
                    if (r.tryLoc <= this.prev) {
                        var a = y.call(r, "catchLoc"), s = y.call(r, "finallyLoc");
                        if (a && s) {
                            if (this.prev < r.catchLoc) return t(r.catchLoc, !0);
                            if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                        } else if (a) {
                            if (this.prev < r.catchLoc) return t(r.catchLoc, !0)
                        } else {
                            if (!s) throw new Error("try statement without catch or finally");
                            if (this.prev < r.finallyLoc) return t(r.finallyLoc)
                        }
                    }
                }
            }, abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && y.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var r = o;
                        break
                    }
                }
                r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                var i = r ? r.completion : {};
                return i.type = e, i.arg = t, r ? (this.method = "next", this.next = r.finallyLoc, L) : this.complete(i)
            }, complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), L
            }, finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), f(n), L
                }
            }, "catch": function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var o = n.completion;
                        if ("throw" === o.type) {
                            var r = o.arg;
                            f(n)
                        }
                        return r
                    }
                }
                throw new Error("illegal catch attempt")
            }, delegateYield: function (e, t, n) {
                return this.delegate = {
                    iterator: m(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = _), L
            }
        }
    }(function () {
        return this
    }() || Function("return this")())
}, function (e, t) {
}, function (e, t) {
    e.exports = {
        container: "article__container___1EqmE",
        contentEmpty: "article__contentEmpty___1WM_M",
        showOrigin: "article__showOrigin___1tuZU",
        relatedChannel: "article__relatedChannel___Ij8V8",
        header: "article__header___odGRk",
        "a-info": "article__a-info___V0wms",
        "source-normal": "article__source-normal___3lJDk",
        "a-title": "article__a-title___1OX2U",
        "wemedia-box": "article__wemedia-box___hs3vk",
        "wemedia-info": "article__wemedia-info___3ku5b",
        "wemedia-logo": "article__wemedia-logo___9894d",
        "wemedia-profile": "article__wemedia-profile___2pGlw",
        "wemedia-name": "article__wemedia-name___3LvKA",
        name: "article__name___3Gilu",
        "wemedia-copyright": "article__wemedia-copyright___1RiCv",
        "wemedia-summary": "article__wemedia-summary___bPYSw",
        "full-height": "article__full-height___1Mwge",
        "yd-source-wrapper": "article__yd-source-wrapper___zzImY",
        "yd-source": "article__yd-source___1Efu_"
    }
}, function (e, t, n) {
    e.exports = {"default": n(130), __esModule: !0}
}, function (e, t, n) {
    n(131), e.exports = n(4).Object.assign
}, function (e, t, n) {
    var o = n(9);
    o(o.S + o.F, "Object", {assign: n(132)})
}, function (e, t, n) {
    "use strict";
    var o = n(24), r = n(48), i = n(31), a = n(45), s = n(56), c = Object.assign;
    e.exports = !c || n(19)(function () {
        var e = {}, t = {}, n = Symbol(), o = "abcdefghijklmnopqrst";
        return e[n] = 7, o.split("").forEach(function (e) {
            t[e] = e
        }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != o
    }) ? function (e, t) {
        for (var n = a(e), c = arguments.length, d = 1, l = r.f, u = i.f; c > d;) for (var f, p = s(arguments[d++]), m = l ? o(p).concat(l(p)) : o(p), h = m.length, _ = 0; h > _;) u.call(p, f = m[_++]) && (n[f] = p[f]);
        return n
    } : c
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(151), u = o(l), f = n(3), p = function (e) {
        function t(n) {
            return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
        }

        return (0, d["default"])(t, e), t.prototype.render = function (e, t) {
            return e.loading ? (0, f.h)("div", {className: u["default"].loadingBox, style: e.style}) : e.children[0]
        }, t
    }(f.Component);
    t["default"] = p
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(135), f = o(u), p = function (e) {
        function t(n) {
            (0, i["default"])(this, t);
            var o = (0, s["default"])(this, e.call(this, n));
            return o.scroll = o.scroll.bind(o), o.loadMoreContainer = o.props.loadMoreContainer || window, o
        }

        return (0, d["default"])(t, e), t.prototype.componentDidMount = function () {
            this.loadMoreContainer.addEventListener("scroll", this.scroll, !1)
        }, t.prototype.componentWillUnmount = function () {
            this.loadMoreContainer.removeEventListener("scroll", this.scroll, !1)
        }, t.prototype.scroll = function () {
            var e = this, t = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                n = document.body.clientHeight, o = document.body.scrollHeight;
            e.props.loadMoreContainer && (t = e.loadMoreContainer.scrollTop, n = e.loadMoreContainer.clientHeight, o = e.loadMoreContainer.scrollHeight), o - t - n < 30 && "loadMoreSuccess" == e.props.loadMoreStatus && e.props.loadMoreCallBack()
        }, t.prototype.render = function (e, t) {
            var n = "";
            switch (e.loadMoreStatus) {
                case"loading":
                    n = "正在加载中...";
                    break;
                case"loadMoreFailed":
                    n = "已加载全部内容";
                    break;
                default:
                    n = ""
            }
            return (0, l.h)("div", {"class": f["default"].loadMoreWrapper}, e.children[0], (0, l.h)("div", {"class": f["default"].bottomLoading}, n))
        }, t
    }(l.Component);
    t["default"] = p
}, function (e, t) {
    e.exports = {loadMoreWrapper: "LoadMore__loadMoreWrapper___16yaE", bottomLoading: "LoadMore__bottomLoading___3wlxJ"}
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = (o(l),
        n(3)), f = n(32), p = o(f), m = n(33), h = n(13), _ = n(70), g = o(_), y = function (e) {
        function t(n) {
            return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
        }

        return (0, d["default"])(t, e), t.prototype.render = function (e) {
            var t = e.comments, n = e.newCommentStartIndex;
            return (0, u.h)("div", null, t.map(function (e, t) {
                var o = this;
                return (0, u.h)("div", {
                    "class": p["default"].comment,
                    key: t
                }, 0 == t && 0 != n && (0, u.h)("div", {"class": p["default"].title}, "热门评论"), t == n && (0, u.h)("div", {"class": p["default"].title}, "最新评论"), (0, u.h)("div", {"class": p["default"]["comment-header"]}, (0, u.h)("div", {"class": p["default"]["profile-wrap"]}, e.profile && (0, u.h)("img", {
                    "class": p["default"].img,
                    src: (0, h.formatImgUrl)(e.profile, "108x108"),
                    ref: function (e) {
                        return o["img" + t] = e
                    },
                    onError: function () {
                        return o["img" + t].style.display = "none"
                    }
                })), (0, u.h)("div", {"class": p["default"].info}, (0, u.h)("span", {"class": p["default"].name}, e.nickname), !!e.like && (0, u.h)("div", {"class": p["default"].like}, e.like))), (0, u.h)("div", {"class": p["default"]["comment-info"]}, (0, u.h)("div", {"class": p["default"]["comment-content"]}, e.comment), (0, u.h)("div", {"class": p["default"].date}, (0, m.formatDate)(e.createAt)), e.replies && !!e.replies.length && (0, u.h)(g["default"], {
                    replies: e.replies,
                    comment_id: e.comment_id,
                    total: e.reply_n
                })))
            }, this))
        }, t
    }(u.Component);
    t["default"] = y
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = (o(l), n(3)), f = n(32), p = o(f),
        m = n(26), h = o(m), _ = n(33), g = n(13), y = n(70), v = o(y), w = function (e) {
            function t(n) {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
            }

            return (0, d["default"])(t, e), t.prototype.render = function (e) {
                var t = e.comments;
                return (0, u.h)("div", null, t.map(function (e, t) {
                    var n = this;
                    return (0, u.h)("div", {
                        "class": p["default"].comment + " " + h["default"]["bottom-1px"],
                        key: t
                    }, (0, u.h)("div", {"class": p["default"]["comment-header"]}, (0, u.h)("div", {"class": p["default"]["profile-wrap"]}, e.profile && (0, u.h)("img", {
                        "class": p["default"].img,
                        src: (0, g.formatImgUrl)(e.profile, "108x108"),
                        ref: function (e) {
                            return n["img" + t] = e
                        },
                        onError: function () {
                            return n["img" + t].style.display = "none"
                        }
                    })), (0, u.h)("div", {"class": p["default"].info}, (0, u.h)("div", {"class": p["default"].name}, e.nickname), (0, u.h)("div", {"class": p["default"].date}, (0, _.formatDate)(e.createAt))), !!e.like && (0, u.h)("div", {"class": p["default"].like}, e.like)), (0, u.h)("div", {"class": p["default"]["comment-info"]}, (0, u.h)("div", {"class": p["default"]["comment-content"]}, e.comment), e.replies && !!e.replies.length && (0, u.h)(v["default"], {
                        replies: e.replies,
                        comment_id: e.comment_id,
                        total: e.reply_n
                    })))
                }, this))
            }, t
        }(u.Component);
    t["default"] = w
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(35), i = o(r), a = n(0), s = o(a), c = n(1), d = o(c), l = n(2), u = o(l), f = n(143), p = o(f), m = n(3),
        h = n(8), _ = n(69), g = n(18), y = (n(12), n(7)), v = (o(y), n(144)), w = o(v), b = n(139), x = o(b),
        C = n(145), I = o(C), S = function (e) {
            function t(n) {
                (0, s["default"])(this, t);
                var o = (0, d["default"])(this, e.call(this, n));
                return o.goToAds = o.goToAds.bind(o), o.lastAdVisibility = !1, o.onPhoneNumChange = o.onPhoneNumChange.bind(o), o.onNameChange = o.onNameChange.bind(o), o.submitForm = o.submitForm.bind(o), o.sendLog = o.sendLog.bind(o), o.scrollListener = o.scrollListener.bind(o), o.sendThirdPartyClickLog = o.sendThirdPartyClickLog.bind(o), o.sendThirdPartyViewLog = o.sendThirdPartyViewLog.bind(o), o.adsEnterTime = 0, o.view1sTimer, o.state = {
                    name: "",
                    phoneNumber: "",
                    nameError: !1,
                    phoneNumberError: !1,
                    phoneNumberPlaceholder: "请填写电话号码",
                    namePlaceholder: "请填写姓名"
                }, o
            }

            return (0, u["default"])(t, e), t.prototype.componentDidMount = function () {
                var e = this.props.scrollNode || window;
                e.addEventListener("scroll", this.scrollListener)
            }, t.prototype.componentDidUnmount = function () {
                var e = this.props.scrollNode || window;
                e.removeEventListener("scroll", this.scrollListener)
            }, t.prototype.scrollListener = function () {
                var e = this, t = (0, h.checkElemIsInView2)(".yidian-ads-wrapper-" + this.props.ad.position);
                this.lastAdVisibility != t && (t ? (this.adsEnterTime = (new Date).getTime(), this.sendLog("view"), this.view1sTimer = setTimeout(function () {
                    e.sendLog("view_1s")
                }, 1e3)) : (this.adsEnterTime = 0, clearTimeout(this.view1sTimer)), this.lastAdVisibility = t)
            }, t.prototype.sendLog = function (e) {
                var t = this;
                (0, h.getClientInfo)().then(function (n) {
                    "view" == e ? t.sendThirdPartyViewLog() : "click" == e && (t.adsEnterTime && (new Date).getTime() - t.adsEnterTime < 1e3 && (clearTimeout(t.view1sTimer), t.sendLog("view_1s")), t.sendThirdPartyClickLog()), (0, _.sendAdLog)(e, t.props.ad, n || {}, {
                        appid: (0, g.getParameterByName)("appid"),
                        utk: (0, g.getParameterByName)("utk")
                    })
                })
            }, t.prototype.sendThirdPartyViewLog = function () {
                (0, h.sendThirdPartyMonitorLog)(this.props.ad.viewMonitorUrls)
            }, t.prototype.sendThirdPartyClickLog = function () {
                (0, h.sendThirdPartyMonitorLog)(this.props.ad.clickMonitorUrls)
            }, t.prototype.goToAds = function () {
                this.sendLog("click"), (0, h.openH5Ad)((0, i["default"])(this.props.ad), this.adsEnterTime)
            }, t.prototype.submitForm = function () {
                var e = this.state.name, t = this.state.phoneNumber, n = /^\d+$/;
                11 === t.length && n.test(t) ? this.setState({phoneNumberError: !1}) : this.setState({
                    phoneNumber: "",
                    phoneNumberError: !0,
                    phoneNumberPlaceholder: "请填写11位数字"
                });
                var o = /[\u4e00-\u9fa5]/g;
                e.length < 2 || e.length > 20 || 0 !== e.replace(o, "").length ? this.setState({
                    name: "",
                    nameError: !0,
                    namePlaceholder: "请填写2-20个汉字"
                }) : this.setState({nameError: !1}), 11 !== t.length || !n.test(t) || e.length < 2 || e.length > 20 || 0 !== e.replace(o, "").length || (0, h.reserveH5Ad)((0, i["default"])(this.props.ad), this.adsEnterTime, e, t)
            }, t.prototype.onPhoneNumChange = function (e) {
                this.setState({phoneNumber: e.target.value})
            }, t.prototype.onNameChange = function (e) {
                this.setState({name: e.target.value})
            }, t.prototype.render = function (e, t) {
                var n = this.props.ad;
                if (n) return 0 !== n.source.indexOf("广告") && (n.source = "广告 " + n.source), "103" == n.template ? (0, m.h)("div", {
                    style: e.style,
                    "class": "yidian-ads-wrapper-" + e.ad.position,
                    onClick: this.goToAds
                }, (0, m.h)(I["default"], {doc: n})) : "104" == n.template ? (0, m.h)("div", {
                    style: e.style,
                    "class": "yidian-ads-wrapper-" + e.ad.position,
                    onClick: this.goToAds
                }, (0, m.h)(x["default"], {
                    doc: n,
                    imgLeft: e.imgLeft,
                    customStyle: e.customStyle,
                    size: e.size
                })) : "140" == n.template ? (0, m.h)("div", {
                    style: e.style,
                    "class": "yidian-ads-wrapper-" + e.ad.position,
                    onClick: this.goToAds
                }, (0, m.h)(w["default"], {doc: n})) : "116" == n.template ? (0, m.h)("div", {
                    style: e.style,
                    "class": "yidian-ads-wrapper-" + e.ad.position + " " + p["default"]["h5-ad"]
                }, (0, m.h)("div", {
                    "class": p["default"]["h5-img-ad"],
                    "data-adurl": n.url,
                    "data-adid": n.aid,
                    "data-deeplinkurl": n.deepLinkUrl || "",
                    onClick: this.goToAds
                }, (0, m.h)("div", {"class": p["default"]["ad-title"]}, n.title || ""), (0, m.h)("img", {
                    "class": p["default"]["ad-img"],
                    src: n.image
                }), (0, m.h)("div", {"class": p["default"]["ad-note"]}, "广告")), (0, m.h)("div", {"class": p["default"]["ad-form"]}, (0, m.h)("span", {"class": this.state.nameError ? p["default"].error : ""}, (0, m.h)("input", {
                    placeholder: this.state.namePlaceholder,
                    "class": p["default"]["ad-input-name"],
                    onChange: this.onNameChange,
                    value: this.state.name
                })), (0, m.h)("span", {"class": this.state.phoneNumberError ? p["default"].error : ""}, (0, m.h)("input", {
                    placeholder: this.state.phoneNumberPlaceholder,
                    "class": p["default"]["ad-input-phone"],
                    onChange: this.onPhoneNumChange,
                    value: this.state.phoneNumber
                })), (0, m.h)("button", {
                    "class": p["default"]["h5-ad-submit-btn"],
                    type: "button",
                    onClick: this.submitForm
                }, "报名"))) : void 0
            }, t
        }(m.Component);
    t["default"] = S
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(26), f = o(u), p = n(50), m = o(p),
        h = n(155), _ = o(h), g = n(13), y = n(71), v = o(y), w = function (e) {
            function t(n) {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
            }

            return (0, d["default"])(t, e), t.prototype.render = function (e) {
                var t = this, n = e.customStyle || _["default"];
                return (0, l.h)("div", {"class": n.doc + (e.borderBottom ? " " + f["default"]["bottom-1px"] : "")}, (0, l.h)("div", {"class": n.smallImg + (e.imgLeft ? " " + n.imgLeft + " " : " ") + m["default"]["yidian-img-alt"]}, (0, l.h)("img", {
                    src: (0, g.formatImgUrl)(e.doc.image || e.doc.image_urls && e.doc.image_urls[0], e.size),
                    ref: function (e) {
                        return t.img = e
                    },
                    onError: function () {
                        return t.img.style.display = "none"
                    }
                }), "video" == e.doc.content_type && (0, l.h)("div", {"class": n.playBtn}), e.doc.duration && (0, l.h)("div", {"class": n.duration}, (0, g.formatDuration)(e.doc.duration)), e.doc.gallery_items && (0, l.h)("div", {"class": n.nums}, e.doc.gallery_items.length, "张")), (0, l.h)("div", {
                    style: e.style,
                    "class": n.title
                }, e.doc.title), !e.noInfo && (0, l.h)(v["default"], {
                    noComments: e.noComments,
                    playtimes: e.playtimes,
                    doc: e.doc,
                    style: {infos: n.infos}
                }))
            }, t
        }(l.Component);
    t["default"] = w
}, function (e, t) {
    e.exports = {
        galleryHeader: "gallery__galleryHeader___2c0if",
        "a-title": "gallery__a-title___1iNW_",
        "a-info": "gallery__a-info___1T9aO",
        "wemedia-logo": "gallery__wemedia-logo___1Pdog",
        "wm-copyright": "gallery__wm-copyright___1S25H",
        "wm-name": "gallery__wm-name___1eB9M",
        "yidian-source-normal": "gallery__yidian-source-normal___294IV",
        "yidian-source": "gallery__yidian-source___2fw7t",
        relatedNewscontainer: "gallery__relatedNewscontainer___1TCCg",
        title: "gallery__title___3aF32",
        twoImageRow: "gallery__twoImageRow___2cjIV",
        oneImageRow: "gallery__oneImageRow___3M8pS"
    }
}, function (e, t, n) {
    "use strict";

    function o(e, t) {
        return (" " + e.className + " ").indexOf(" " + t + " ") > -1
    }

    function r(e, t) {
        var n = 0;
        return function () {
            var o = (new Date).getTime();
            o - n >= (t || 100) && (e.apply(this, arguments), n = o)
        }
    }

    function i(e, t) {
        var n = e.className, o = "" != n ? " " : "", r = n + o + t;
        e.className = r
    }

    function a(e, t) {
        var n = " " + e.className + " ";
        n = n.replace(/(\s+)/gi, " ");
        var o = n.replace(" " + t + " ", " ");
        o = o.replace(/(^\s+)|(\s+$)/g, ""), e.className = o
    }

    function s(e, t) {
        var n = document.createElement("div");
        n.innerHTML = e, t.appendChild(n.firstChild)
    }

    function c(e, t) {
        var n = document.createElement("div");
        n.innerHTML = e, t.parentNode.replaceChild(n.firstChild, t)
    }

    function d(e, t) {
        var n = void 0;
        document.createEvent ? (n = document.createEvent("HTMLEvents"), n.initEvent(e, !0, !0)) : (n = document.createEventObject(), n.eventType = e), n.eventName = e, document.createEvent ? t.dispatchEvent(n) : t.fireEvent("on" + n.eventType, n)
    }

    function l(e, t) {
        var n = document.createElement("link");
        n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", e), n.onreadystatechange = function () {
            if ("loaded" === n.readyState || "complete" === n.readyState) return t()
        }, document.getElementsByTagName("head")[0].appendChild(n)
    }

    function u(e, t) {
        var n = document.createElement("script");
        return n.type = "text/javascript", n.onload = t, n.onreadystatechange = function () {
            if ("loaded" === n.readyState || "complete" === n.readyState) return t()
        }, document.getElementsByTagName("head")[0].appendChild(n), n.src = e
    }

    t.__esModule = !0, t.hasClass = o, t.throttle = r, t.addClass = i, t.removeClass = a, t.append = s, t.replaceWith = c, t.trigger = d, t.loadStyleSheet = l, t.loadScript = u
}, function (e, t) {
    e.exports = {
        content: "Video__content___1ISxB",
        "scroll-wrap": "Video__scroll-wrap___2myUn",
        "video-info": "Video__video-info___1xh9U",
        arrow: "Video__arrow___1gGsl",
        "arrow-down": "Video__arrow-down___1_B1N",
        "arrow-up": "Video__arrow-up___mww30",
        title: "Video__title___2w2Jv",
        desc: "Video__desc___3-3kI",
        tags: "Video__tags___2SoTX",
        tag: "Video__tag___38Toq",
        "wemedia-info": "Video__wemedia-info___2bgpv",
        "media-pic": "Video__media-pic___1fEYS",
        "media-name": "Video__media-name___2Br8J",
        "recommend-videos-wrapper": "Video__recommend-videos-wrapper___1A1zj",
        "section-title": "Video__section-title___3ygtq",
        "video-wrapper": "Video__video-wrapper___396zW",
        "yd-source-wrapper": "Video__yd-source-wrapper___1guwT",
        "yd-source": "Video__yd-source___1ttzi"
    }
}, function (e, t) {
    e.exports = {
        "h5-ad": "ads__h5-ad___2jPmv",
        "ad-img": "ads__ad-img___2yQyq",
        "h5-img-ad": "ads__h5-img-ad___321lm",
        "ad-title": "ads__ad-title___2IjGB",
        "ad-note": "ads__ad-note___qyHpD",
        "ad-form": "ads__ad-form___Qov-m",
        error: "ads__error___336Vv"
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(26), f = o(u), p = n(50), m = o(p),
        h = n(153), _ = o(h), g = n(13), y = n(71), v = o(y), w = function (e) {
            function t(n) {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
            }

            return (0, d["default"])(t, e), t.prototype.render = function (e) {
                var t = this, n = e.doc.image_urls, o = [];
                return n.length >= 3 ? o = n.slice(0, 3) : e.doc.gallery_items && (o = e.doc.gallery_items.slice(0, 3).map(function (e) {
                    return e.img
                })), (0, l.h)("div", {"class": _["default"].doc + " " + f["default"]["bottom-1px"]}, (0, l.h)("div", {
                    style: e.style,
                    "class": _["default"].title
                }, e.doc.title), (0, l.h)("div", {"class": _["default"].multiWrap}, o.map(function (e, n) {
                    return (0, l.h)("div", {"class": _["default"].multiImg + " " + m["default"]["yidian-img-alt"]}, (0, l.h)("img", {
                        src: (0, g.formatImgUrl)(e),
                        ref: function (e) {
                            return t["img" + n] = e
                        },
                        onError: function () {
                            return t["img" + n].style.display = "none"
                        }
                    }))
                }), e.doc.gallery_items && (0, l.h)("div", {"class": _["default"].nums}, e.doc.gallery_items.length, "张")), !e.noInfo && (0, l.h)(v["default"], {doc: e.doc}))
            }, t
        }(l.Component);
    t["default"] = w
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(26), f = o(u), p = n(50), m = o(p),
        h = n(156), _ = o(h), g = n(13), y = n(71), v = o(y), w = function (e) {
            function t(n) {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
            }

            return (0, d["default"])(t, e), t.prototype.render = function (e) {
                var t = this;
                return (0, l.h)("div", {"class": _["default"].doc + " " + f["default"]["bottom-1px"]}, (0, l.h)("div", {
                    style: e.style,
                    "class": _["default"].title
                }, e.doc.title), e.doc.image && (0, l.h)("div", {"class": _["default"].cover + " " + m["default"]["yidian-img-alt"]}, (0, l.h)("img", {
                    src: (0, g.formatImgUrl)(e.doc.image, "990x495"),
                    ref: function (e) {
                        return t.img = e
                    },
                    onError: function () {
                        return t.img.style.display = "none"
                    }
                }), "video" == e.doc.content_type && (0, l.h)("div", {"class": _["default"].playBtn}), e.doc.duration && (0, l.h)("div", {"class": _["default"].duration}, (0, g.formatDuration)(e.doc.duration))), !e.noInfo && (0, l.h)(v["default"], {doc: e.doc}))
            }, t
        }(l.Component);
    t["default"] = w
}, function (e, t) {
    e.exports = {
        doc: "RecommendVideo__doc___1tFxN",
        title: "RecommendVideo__title___2j9UQ",
        smallImg: "RecommendVideo__smallImg___1G_Bl",
        playBtn: "RecommendVideo__playBtn___3_b4F",
        duration: "RecommendVideo__duration___3ba_L",
        nums: "RecommendVideo__nums___2GFm8",
        imgLeft: "RecommendVideo__imgLeft___2eShf"
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    var r = n(35), i = o(r), a = n(0), s = o(a), c = n(1), d = o(c), l = n(2), u = o(l), f = n(7), p = o(f), m = n(3),
        h = n(12), _ = n(68), g = (o(_), n(127)), y = (o(g), n(148)), v = (o(y), n(128)), w = o(v), b = (n(13), n(141)),
        x = n(8), C = n(18), I = n(69), S = n(149), M = o(S), N = n(157), k = o(N), L = n(166), P = o(L), O = n(76),
        T = o(O), R = n(133), E = o(R), A = n(171), B = o(A), D = n(74), j = o(D), F = n(173), V = p["default"].API_URI,
        U = p["default"].API_URI_S3RD, W = (0, C.getParameterByName)("docid"), H = (0, C.getParameterByName)("ctype"),
        G = (0, C.getParameterByName)("impid") && "undefined" != (0, C.getParameterByName)("impid") ? (0, C.getParameterByName)("impid") : "",
        z = (0, C.getParameterByName)("_searchid") && "undefined" != (0, C.getParameterByName)("_searchid") ? (0, C.getParameterByName)("_searchid") : "",
        q = (0, C.getParameterByName)("channel_from_id") && "undefined" != (0, C.getParameterByName)("channel_from_id") ? (0, C.getParameterByName)("channel_from_id") : "",
        J = (0, C.getParameterByName)("_isRelatedNews") && "undefined" != (0, C.getParameterByName)("_isRelatedNews") ? (0, C.getParameterByName)("_isRelatedNews") : "",
        Y = (0, C.getParameterByName)("_srcDocId") && "undefined" != (0, C.getParameterByName)("_srcDocId") ? (0, C.getParameterByName)("_srcDocId") : "",
        K = (0, C.getParameterByName)("pageid") && "undefined" != (0, C.getParameterByName)("pageid") ? (0, C.getParameterByName)("pageid") : "",
        Q = function (e) {
            function t(n) {
                function o(e) {
                    (0, h.getJSON)(U + "/contents/comments?docid=" + W + "&count=1").then(function (t) {
                        "picture_gallery" === e.state.doc.ctype && e.needComment ? (0, x.showCommentsInHeader)(t.total || 0) : e.commentCount = t.total || 0
                    }), (0, h.getJSON)(V + "/contents/content?docid=" + W + "&content_type=full&highlight=true&related_docs=true&version=999999&bottom_channels=true&bottom_comments=true&related_wemedia=true", {noNeedClientParams: !0}).then(function (t) {
                        if (101 == t.code || 102 == t.code) e.setState({error: "not_found", loading: !1}); else {
                            var o = t.documents[0];
                            location.hash = encodeURIComponent(o.title)
                            e.assignDoc(o), e.setState({
                                doc: o,
                                loading: !!o && "slides" == o.content_type,
                                error: null
                            }), e.sendLog(o);
                            try {
                                e.needComment = "no" !== n.clientInfo.app_info.config.need_comment
                            } catch (r) {
                            }
                            e.needComment && "picture_gallery" === o.ctype && null != e.commentCount && (0, x.showCommentsInHeader)(e.commentCount)
                        }
                    }, function (t) {
                        e.setState({loading: !1, error: "no_network"})
                    })
                }

                (0, s["default"])(this, t);
                var r = (0, d["default"])(this, e.call(this, n));
                "picture_gallery" === H && $("body").addClass("is_gallery"), r.duration = 0, r.currentTime = (new Date).getTime(), r.state = {
                    doc: "",
                    loading: !0,
                    docid: W,
                    error: null,
                    webviewStatus: ""
                }, r.hideLoader = r.hideLoader.bind(r), r.showLoader = r.showLoader.bind(r), r.computeDuration = r.computeDuration.bind(r), r.assignDoc = r.assignDoc.bind(r), r.renderNextDocCallBack = r.renderNextDocCallBack.bind(r);
                var a = r;
                return r.commentCount = null, r.needComment = !0, n.clientInfo && n.clientInfo.app_info || (0, C.getParameterByName)("debug") ? o(a) : (0, h.getJSON)(U + "/user/get3rd-info").then(function (e) {
                    "success" == e.status && ((0, x.set3rdAppInfo)((0, i["default"])(e.app_info)), (0, x.updateClientInfoWithAppInfo)(e.app_info), n.clientInfo.app_info = e.app_info, o(a))
                }), r
            }

            return (0, u["default"])(t, e), t.prototype.renderNextDocCallBack = function (e) {
                this.computeDuration(), e._isRelatedNews = !0, e._srcDocId = this.state.doc.docid, e.pageid = this.state.doc.docid, this.setState({
                    doc: e,
                    docid: e.docid
                }), this.sendLog(e), this.handleScroll()
            }, t.prototype.handleScroll = function () {
                var e = $(".scroll-wrap")[0];
                e && (e.scrollTop = 0, $(".related-video").removeClass("js-realtimelog-sended"))
            }, t.prototype.componentWillMount = function () {
                var e = this;
                window.yidian = window.yidian || {}, window.yidian.HB_share = function () {
                    container && container.shareDoc && container.shareDoc((0, i["default"])(e.state.doc))
                }, window.yidian.HB_onWebviewPause = function () {
                    e.duration += (new Date).getTime() - e.currentTime, e.setState({webviewStatus: "pause"})
                }, window.yidian.HB_onWebviewResume = function () {
                    e.currentTime = (new Date).getTime(), e.setState({webviewStatus: "resume"}), (0, b.trigger)("scroll", window)
                }, window.yidian.HB_onWebviewDestory = function () {
                    e.computeDuration()
                }
            }, t.prototype.computeDuration = function () {
                this.duration += (new Date).getTime() - this.currentTime, this.duration = 0, this.currentTime = (new Date).getTime()
            }, t.prototype.componentWillUnmount = function () {
                window.yidian.HB_share = null, window.yidian.HB_onWebviewPause = null, window.yidian.HB_onWebviewResume = null, window.yidian.HB_onWebviewDestory = null
            }, t.prototype.hideLoader = function () {
                this.setState({loading: !1})
            }, t.prototype.showLoader = function () {
                this.setState({loading: !0})
            }, t.prototype.assignDoc = function (e) {
                F(e, {
                    impid: G,
                    _searchid: z,
                    _isRelatedNews: J,
                    _srcDocId: Y,
                    pageid: K,
                    is_video: !("video" != e.ctype && "video_live" != e.ctype || !e.video_url)
                })
            }, t.prototype.sendLog = function (e) {
                J || e._isRelatedNews ? (0, I.sendClickRelatedLog)(e) : (0, I.sendClickDocLog)(e), (0, I.sendClickNewsOfflineLog)(e)
            }, t.prototype.render = function (e, t) {
                var n = t.doc, o = "video" == n.content_type, r = void 0;
                if (n) r = (0, m.h)("div", {"class": o ? w["default"]["full-height"] : ""}, "slides" == n.content_type && (0, m.h)(P["default"], {
                    channelFromId: q,
                    showLoader: this.showLoader,
                    hideLoader: this.hideLoader,
                    doc: n
                }), "video" == n.content_type && (0, m.h)(M["default"], {
                    channelFromId: q,
                    doc: n,
                    renderNextDocCallBack: this.renderNextDocCallBack,
                    webviewStatus: t.webviewStatus,
                    clientInfo: e.clientInfo
                }), ("picture" == n.content_type || "news" == n.content_type || "joke" == n.content_type || "duanneirong" == n.content_type) && !(0, x.isIOS)() && (0, m.h)(j["default"], null, "undefined" == typeof n.ttype && (0, m.h)(k["default"], {
                    clientInfo: e.clientInfo,
                    channelFromId: q,
                    doc: n
                })), ("picture" == n.content_type || "news" == n.content_type || "joke" == n.content_type || "duanneirong" == n.content_type) && (0, x.isIOS)() && (0, m.h)("div", null, "undefined" == typeof n.ttype && (0, m.h)(k["default"], {
                    clientInfo: e.clientInfo,
                    channelFromId: q,
                    doc: n
                })), this.needComment && "slides" !== n.content_type && "video" !== n.content_type && (0, m.h)(j["default"], null, (0, m.h)(T["default"], {doc: t.doc}))); else if (t.error) {
                    var i = void 0;
                    "no_network" == t.error && (i = "网络开了小差，请点击重试"), "not_found" == t.error && (i = "您所查看的内容已被删除"), r = (0, m.h)(B["default"], {
                        imageClass: t.error,
                        errorMessage: i
                    })
                }
                return (0, m.h)("div", {"class": w["default"].container + (o ? " " + w["default"]["full-height"] : "")}, r, (0, m.h)(E["default"], {loading: t.loading}))
            }, t
        }(m.Component);
    (0, x.getClientInfo)().then(function (e) {
        (0, m.render)((0, m.h)(Q, {clientInfo: e}), document.body)
    })
}, function (e, t) {
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = o(l), f = n(3), p = n(12),
        m = (n(8), n(13)), h = (n(18), n(69)), _ = n(150), g = o(_), y = n(74), v = o(y), w = n(133), b = (o(w), n(76)),
        x = o(b), C = n(152), I = o(C), S = n(142), M = o(S), N = n(146), k = (o(N), u["default"].API_URI_S3RD),
        L = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.state = {
                    recommend_videos: [],
                    showDesc: !1,
                    loading: !0,
                    scrollContainer: null
                }, o.num = 0, o.displayDesc = o.displayDesc.bind(o), o.docsFilter = o.docsFilter.bind(o), o.renderArticle = o.renderArticle.bind(o), o.needComment = !0, o.props.clientInfo && o.props.clientInfo.app_info && o.props.clientInfo.app_info.config && "no" === o.props.clientInfo.app_info.config.need_comment && (o.needComment = !1), window.document.body.style.overflow = "hidden", o
            }

            return (0, d["default"])(t, e), t.prototype.componentWillUnmount = function () {
                $(".scroll-wrap").off("scroll", this.checkExpose)
            }, t.prototype.componentDidMount = function () {
                this.getRecommendVideos(this.props.doc && this.props.doc.docid), $(".scroll-wrap").on("scroll", this.checkExpose), this.setState({scrollContainer: this.container})
            }, t.prototype.componentWillReceiveProps = function (e) {
                this.props.doc && this.props.doc.docid && this.props.doc.docid != e.doc.docid && this.getRecommendVideos(e.doc.docid)
            }, t.prototype.getRecommendVideos = function (e) {
                var t = this, n = [], o = this.props.clientInfo,
                    r = o && o.app_info && o.app_info.config && o.app_info.config.related_news_num || 0;
                0 != r && (t.num = r, t.setState({loading: !0}), (0, p.getJSON)(k + "/contents/recommend-videos?docids=" + e + "&num=" + r).then(function (o) {
                    o.recommend_videos && o.recommend_videos.length && (n = t.docsFilter(o.recommend_videos, e)), t.setState({
                        recommend_videos: n,
                        loading: !1
                    }), setTimeout(function () {
                        $(".scroll-wrap").trigger("scroll")
                    }, 100)
                }, function (e) {
                    t.setState({recommend_videos: n, loading: !1})
                }))
            }, t.prototype.docsFilter = function (e, t) {
                var n = this;
                return e = e || [], e = e.filter(function (e) {
                    return !(!e.title || !e.docid) && (e.pageid = e.pageid || t, e._srcDocId = t, e.channelFromId = n.props.channelFromId, e._isRelatedNews = !0, e._actionSrc = "relatedVideos", e.is_video = !0, !0)
                })
            }, t.prototype.renderArticle = function (e) {
                this.props.renderNextDocCallBack(e)
            }, t.prototype.displayDesc = function () {
                this.setState({showDesc: !this.state.showDesc})
            }, t.prototype.checkExpose = function () {
                $(".related-video").each(function () {
                    var e = this.getBoundingClientRect();
                    e.top >= 0 && e.bottom <= $(window).height() && ($(this).hasClass("js-realtimelog-sended") || ($(this).addClass("js-realtimelog-sended"), (0, h.sendExposeRelatedLog)([{
                        ctype: $(this).attr("data-ctype"),
                        docid: $(this).attr("data-docid"),
                        impid: $(this).attr("data-impid"),
                        pageid: $(this).attr("data-pageid"),
                        is_video: !0
                    }])))
                })
            }, t.prototype.render = function (e, t) {
                var n = this, o = e.doc, r = e.renderNextDocCallBack, i = e.webviewStatus, a = t.recommend_videos,
                    s = t.showDesc, c = (t.loading, t.scrollContainer),
                    d = o.related_wemedia && o.related_wemedia.media_pic && (0, m.formatImgUrl)(o.related_wemedia.media_pic, "80x80"),
                    l = {background: "url(" + d + ") center center no-repeat", backgroundSize: "cover"},
                    u = (0, f.h)("div", null, (0, f.h)("div", {"class": M["default"]["video-info"]}, o.description && (0, f.h)("div", {
                        "class": M["default"].arrow + " " + (s ? M["default"]["arrow-up"] : M["default"]["arrow-down"]),
                        onClick: this.displayDesc
                    }), (0, f.h)("h2", {
                        "class": M["default"].title,
                        style: {paddingRight: o.description ? ".22rem" : ""}
                    }, o.title), s && (0, f.h)("p", {"class": M["default"].desc}, o.description), o.related_wemedia && (0, f.h)("div", {"class": M["default"]["wemedia-info"]}, (0, f.h)("div", {
                        "class": M["default"]["media-pic"],
                        style: l
                    }), (0, f.h)("div", {"class": M["default"]["media-name"]}, o.related_wemedia.media_name)), (0, f.h)("div", {"class": M["default"]["yd-source-wrapper"]}, (0, f.h)("div", {"class": M["default"]["yd-source"]}, "此网页由一点资讯提供"))), (0, f.h)(I["default"], {
                        renderArticle: this.renderArticle,
                        recommend_videos: a,
                        docid: o.docid,
                        num: this.num
                    }), this.needComment && (0, f.h)(x["default"], {doc: o, container: c}));
                return (0, f.h)("div", {"class": M["default"].content}, (0, f.h)(g["default"], {
                    actionSource: "videoPlayer",
                    playType: "inpage",
                    "class": M["default"]["video-wrapper"],
                    doc: o,
                    renderNextDocCallBack: r,
                    nextDoc: a[0],
                    webviewStatus: i,
                    onBack: !0,
                    progressCtrl: !0,
                    fullscreen: !0
                }), (0, f.h)(v["default"], {style: {height: "100%"}}, (0, f.h)("div", {
                    id: "scrollable-node",
                    "class": M["default"]["scroll-wrap"] + " scroll-wrap",
                    ref: function (e) {
                        return n.container = e
                    }
                }, u)))
            }, t
        }(f.Component);
    t["default"] = L
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(8), f = n(13);
    window.players = window.players || {};
    var p = function (e) {
        function t(n) {
            (0, i["default"])(this, t);
            var o = (0, s["default"])(this, e.call(this, n));
            return o.state = {}, o
        }

        return (0, d["default"])(t, e), t.prototype.componentDidMount = function () {
            var e = this;
            e.player = new window.YidianVideo({
                container: e.container,
                progressCtrl: e.props.progressCtrl,
                fullscreen: e.props.fullscreen,
                autoToggleFullscreen: !0,
                video: e.getVideoFromDoc(e.props.doc),
                nextVideo: e.getVideoFromDoc(e.props.nextDoc),
                cancelPlayNext: !0,
                errorText: "视频出错了，请点击重试",
                onBack: null,
                onToggleFullscreen: function (e) {
                    (0, u.changeOrientation)(e), u.isIOS && setTimeout(function () {
                        $(window).trigger("resize")
                    }, 500)
                },
                onPlayNext: function () {
                    e.props.renderNextDocCallBack(e.props.nextDoc)
                },
                onFirstPlay: function () {
                },
                onManualPlayNext: function () {
                },
                onAutoPlayNext: function () {
                },
                onShowLight: function () {
                    (0, u.getCurrentBrightness)().then(function (t) {
                        e.player.getCurrentLight(t)
                    })
                },
                onShowVolume: function () {
                    (0, u.getCurrentVolume)().then(function (t) {
                        e.player.getCurrentVolume(t)
                    })
                },
                onChangeLight: function (e) {
                    (0, u.setCurrentBrightness)(e)
                },
                onChangeVolume: function (e) {
                    (0, u.setCurrentVolume)(e)
                }
            }), "undefined" == typeof this.props.startPlay && e.playByNetworkCondition(), window.yidian = window.yidian || {}, window.yidian.HB_onWifiChange = function (t) {
                e.player.toggleWifi(t)
            }, window.players[e.props.doc.docid] = e.player
        }, t.prototype.playByNetworkCondition = function () {
            var e = this;
            (0, u.getClientInfo)().then(function (t) {
                console.log("clientInfo=", t), t && "wifi" == t.net_type ? e.player.play() : e.player.toggleWifi(!1)
            })
        }, t.prototype.componentWillUnmount = function () {
            window.yidian.HB_onWifiChange = null, delete players[this.props.doc.docid]
        }, t.prototype.componentWillReceiveProps = function (e) {
            if (e.doc && e.doc != this.props.doc && e.doc.docid != this.player.options.video.id) {
                var t = this.getVideoFromDoc(e.doc);
                this.player.switchVideo(t)
            }
            if (e.startPlay != this.props.startPlay) if (e.startPlay) this.playByNetworkCondition(); else {
                var n = this;
                setTimeout(function () {
                    n.player.pause()
                }, 0)
            }
            e.nextDoc && e.nextDoc != this.props.nextDoc && this.player.updateNextVideo(this.getVideoFromDoc(e.nextDoc)), "pause" == e.webviewStatus ? this.player.webviewPause() : "resume" == e.webviewStatus && this.player.webviewResume()
        }, t.prototype.getVideoFromDoc = function (e) {
            if (e) return {
                id: e.docid,
                title: e.title,
                src: e.video_url,
                poster: (0, f.formatImgUrl)(e.image, "396x222")
            }
        }, t.prototype.render = function (e, t) {
            var n = this;
            e.doc;
            return (0, l.h)("div", {
                "class": this.props["class"], style: this.props.styles, ref: function (e) {
                    return n.container = e
                }
            })
        }, t
    }(l.Component);
    t["default"] = p
}, function (e, t) {
    e.exports = {loadingBox: "spinner__loadingBox___3OTgQ"}
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(7), f = o(u), p = n(12), m = n(8),
        h = n(26), _ = (o(h), n(142)), g = o(_), y = n(133), v = (o(y), n(18)), w = n(138), b = o(w), x = n(139),
        C = o(x), I = n(146), S = o(I), M = (f["default"].API_URI_S3RD, function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.state = {articleAd: [], relatedNewsAds: []}, o.getAds = o.getAds.bind(o), o.getAds(), o
            }

            return (0, d["default"])(t, e), t.prototype.componentDidMount = function () {
                this.scrollNode = document.querySelector("#scrollable-node")
            }, t.prototype.componentWillReceiveProps = function (e) {
                this.props.docid && this.props.docid != e.docid && this.getAds(e.docid)
            }, t.prototype.getAds = function () {
                var e = this;
                (0, m.getClientInfo)().then(function (t) {
                    var n = {
                        clientInfo: {
                            userInfo: {
                                ip: "",
                                appVersion: t.version || "",
                                region: t.region || "",
                                cityCode: t.cityCode || "",
                                longitude: t.longitude || "",
                                latitude: t.latitude || "",
                                "3rd_ad_version": "1.0"
                            },
                            deviceInfo: {
                                screenHeight: t.screenHeight || "",
                                screenWidth: t.screenWidth || "",
                                device: t.device || "",
                                androidVersion: t.androidVersion || "",
                                network: t.net_type || ""
                            }
                        }
                    };
                    (0, m.isIOS)() ? (n.clientInfo.deviceInfo.iosVersion = t.iosVersion || "", n.clientInfo.deviceInfo.screenDensity = t.screenDensity || "", n.clientInfo.deviceInfo.screenResolution = t.screenResolution || "", n.clientInfo.userInfo.ifa = t.ifa || "") : (n.clientInfo.deviceInfo.androidVersion = t.androidVersion || "", n.clientInfo.userInfo.mac = t.mac || "", n.clientInfo.userInfo.imei = t.imei || "", n.clientInfo.userInfo.language = t.language || "", n.clientInfo.userInfo.serviceProvider = t.serviceProvider || ""), (0, p.standardPost)(f["default"].API_URI_S3RD + "/contents/recommend-ads?docid=" + (0, v.getParameterByName)("docid") + "&utk=" + (0, v.getParameterByName)("utk") + "&net=" + t.net_type + "&platform=" + ("0" == t.platform ? 0 : 1) + "&version=" + t.api_ver + "&appid=" + (0, v.getParameterByName)("appid") + "&position=0,213,216", n, !1, !1).then(function (t) {
                        var n = [];
                        t && t.ads && (n = t.ads), n.sort(function (e, t) {
                            return parseInt(e.position) - parseInt(t.position)
                        }), e.setState({
                            articleAd: n.filter(function (e) {
                                return 0 == e.position
                            }), relatedNewsAds: n.filter(function (e) {
                                return 0 !== e.position
                            })
                        })
                    })
                })
            }, t.prototype.render = function (e, t) {
                var n = e.recommend_videos, o = e.renderArticle, r = e.num, i = t.articleAd, a = t.relatedNewsAds,
                    s = [].slice.call(n);
                return a.forEach(function (e, t) {
                    e.position && e.position > 210 && s.splice(e.position - 211, 0, e)
                }), s = s.slice(0, r), s.length ? (0, l.h)("div", null, i[0] && (0, l.h)(b["default"], {
                    ad: i[0],
                    scrollNode: this.scrollNode
                }), (0, l.h)("div", {
                    "class": g["default"]["recommend-videos-wrapper"],
                    style: {minHeight: "2rem"}
                }, (0, l.h)("div", {"class": g["default"]["section-title"]}, "精彩推荐"), s.map(function (e) {
                    return "advertisement" == e.ctype || e.aid ? (0, l.h)(b["default"], {
                        ad: e,
                        imgLeft: !0,
                        customStyle: S["default"],
                        size: "396x222",
                        scrollNode: this.scrollNode
                    }) : (0, l.h)("div", {
                        "class": g["default"]["recommend-video"] + " related-video",
                        onClick: function () {
                            return o(e)
                        },
                        "data-pageid": e.pageid,
                        "data-impid": e.impid,
                        "data-docid": e.docid,
                        "data-ctype": e.ctype
                    }, (0, l.h)(C["default"], {
                        doc: e,
                        imgLeft: !0,
                        playtimes: !0,
                        customStyle: S["default"],
                        size: "396x222"
                    }))
                }, this))) : void 0
            }, t
        }(l.Component));
    t["default"] = M
}, function (e, t) {
    e.exports = {
        doc: "MultiImagesComponent__doc___ztOa0",
        title: "MultiImagesComponent__title___2pLIn",
        multiWrap: "MultiImagesComponent__multiWrap___1_R9T",
        multiImg: "MultiImagesComponent__multiImg___1KQNN",
        nums: "MultiImagesComponent__nums___X5047"
    }
}, function (e, t) {
    e.exports = {
        infos: "InfosComponent__infos___-uyBF",
        source: "InfosComponent__source___3YSea",
        tag: "InfosComponent__tag___1XwBE"
    }
}, function (e, t) {
    e.exports = {
        doc: "OneImageComponent__doc___1EK3R",
        title: "OneImageComponent__title___3PZGq",
        imgLeft: "OneImageComponent__imgLeft___2Jp6d",
        smallImg: "OneImageComponent__smallImg___1qJ4f",
        playBtn: "OneImageComponent__playBtn___11hnP",
        duration: "OneImageComponent__duration____3wUf",
        nums: "OneImageComponent__nums___CavkZ",
        infos: "OneImageComponent__infos___34Doe"
    }
}, function (e, t) {
    e.exports = {
        doc: "OneBigImageComponent__doc___3L5jC",
        title: "OneBigImageComponent__title___nj2j5",
        cover: "OneBigImageComponent__cover___1Zm0O",
        playBtn: "OneBigImageComponent__playBtn___2v_x3",
        duration: "OneBigImageComponent__duration___3hx6F"
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = (o(l),
            n(3)), f = (n(12), n(68)), p = o(f), m = n(128), h = o(m), _ = n(50), g = o(_), y = n(26), v = o(y),
        w = (n(13), n(33), n(141)), b = n(8), x = n(18), C = n(158), I = o(C), S = n(159), M = o(S),
        N = "this.parentNode.setAttribute('data-src', this.src);this.parentNode.classList.add('img-error');this.parentNode.innerHTML = '<p>图片加载失败，请点击重新加载</p>';",
        k = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                o.netType = "wifi";
                return o.scrollListener = o.scrollListener.bind(o), o.openOrigin = o.openOrigin.bind(o), o.lastShowTitle = !1, o
            }

            return (0, d["default"])(t, e), t.prototype.componentDidMount = function () {
                window.addEventListener("scroll", this.scrollListener), $("body").on("click", ".no_image", this.noImageClickListener), $("body").on("click", ".img-wrap", this.imgClickListener), $("body").on("click", ".img-error", this.errorImageClickListener), $("body").on("click", ".show-big-img", this.showBigImageButtonClickListener), $("body").on("click", ".a-content a", this.openPage), (0, w.trigger)("scroll", window), this.showBigImageButton()
            }, t.prototype.componentWillUnmount = function () {
                window.removeEventListener("scroll", this.scrollListener)
            }, t.prototype.shouldComponentUpdate = function (e, t) {
                return !1
            }, t.prototype.openPage = function (e) {
                var t = e.currentTarget.href;
                if (t) {
                    var n = t.split("/");
                    if ("article" == n[1]) {
                        n[2]
                    }
                }
                e.preventDefault()
            }, t.prototype.showBigImageButton = function () {
                var e = $("body").find(".small-img");
                if (e.length) {
                    var t = '<div class="show-big-img"><span class=' + g["default"]["yidian-ico"] + ">&#xe604;</span>显示全部大图</div>";
                    e.eq(0).before(t)
                }
            }, t.prototype.showBigImageButtonClickListener = function () {
                var e = $(this), t = [];
                $("body").find(".small-img").each(function () {
                    var e = $(this), n = e.attr("data-width"), o = e.attr("data-height"), r = e.find("img"),
                        i = e.attr("data-imgid");
                    e.hasClass("gif-wrap") ? r.length && r.attr("src", e.attr("data-thumbnailsrc")) : r.length && r.attr("src", e.attr("data-src")), e.css({
                        width: n + "px",
                        height: "auto" === o ? "auto" : o + "px"
                    }), e.removeClass("small-img"), i && t.push(i)
                }), e.hide()
            }, t.prototype.errorImageClickListener = function () {
                var e = $(this), t = e.attr("data-src"), n = parseInt(e.css("width"), 10),
                    o = (parseInt(e.css("height"), 10), '<img src="' + t + '" style="width:' + n + "px; height:" + e.css("height") + 'px;" onerror="' + N + '">');
                e.html(o), e.removeClass("img-error")
            }, t.prototype.imgClickListener = function () {
                var e = this, t = (0, w.hasClass)(e, "gif-wrap"),
                    n = ((0, p["default"])(e).width, (0, p["default"])(e).height, e.getElementsByTagName("img")[0]),
                    o = e.getAttribute("data-src"), r = e.getElementsByClassName("gif-play")[0];
                if ((t || e.getAttribute("data-loaded")) && !(0, w.hasClass)(e, "img-error")) {
                    if ((0, w.hasClass)(e, "small-img")) {
                        var i = e.getAttribute("data-width"), a = e.getAttribute("data-height");
                        e.getAttribute("data-imgid");
                        return t && (r.style.display = "none"), e.style.width = i + "px", e.style.height = a + "px", n && n.setAttribute("src", o), (0, w.removeClass)(e, "small-img"), void ($(".small-img").length || $(".show-big-img").hide())
                    }
                    if (t && r && "block" === r.style.display || "" === r.style.display) {
                        var s = '<img src="' + o + '" onerror="' + N + '"/>';
                        r.style.display = "none", (0, w.replaceWith)(s, n)
                    } else {
                        var c = (n.attr("src").match(/\/image\/(\w+)/) || [])[1];
                        doc.image_urls && doc.image_urls.indexOf && doc.image_urls.indexOf(decodeURIComponent(c)) || 0;
                        if (!c) return
                    }
                }
            }, t.prototype.noImageClickListener = function () {
                var e = $(this),
                    t = "<img src=" + e.attr("data-src") + " width=" + e.attr("data-width") + " height=" + e.attr("data-height") + "/>";
                e.replaceWith(t)
            }, t.prototype.scrollListener = function () {
                this.lazyLoadImg(), this.toggleTitle()
            }, t.prototype.toggleTitle = function () {
                var e = !(0, b.checkElemIsInView)(".article-title");
                this.lastShowTitle != e && ((0, b.toggleArticleTitle)(e ? this.props.doc.title : ""), this.lastShowTitle = e)
            }, t.prototype.lazyLoadImg = function () {
                for (var e = document.documentElement.clientHeight || window.innerHeight, t = document.getElementsByClassName("img-wrap"), n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = (0, w.hasClass)(o, "small-img") ? o.getAttribute("data-smallsrc") : o.getAttribute("data-src"),
                        i = (0, w.hasClass)(o, "gif-wrap"), a = o.getElementsByClassName("gif-play")[0],
                        s = o.getAttribute("data-thumbnailsrc");
                    if (2 * e - o.getBoundingClientRect().top > 0 && !i && !o.getAttribute("data-loaded")) {
                        var c = '<img style="width:100%" src="' + r + '" onerror="' + N + '"/>';
                        (0, w.append)(c, o), o.setAttribute("data-loaded", "1")
                    }
                    i && a && (o.getBoundingClientRect().top > 0 && e - o.getBoundingClientRect().top > (0, p["default"])(o).height / 2 || o.getBoundingClientRect().top < 0 && -o.getBoundingClientRect().top < (0, p["default"])(o).height / 2 ? "block" !== a.style.display && "" !== a.style.display || "wifi" !== this.netType || (0, w.trigger)("click", o) : "none" === a.style.display && (a.style.display = "", o.getElementsByTagName("img")[0].src = s))
                }
            }, t.prototype.parseContent = function (e, t) {
                var n = this, o = "only_wifis",
                    r = document.getElementsByTagName("html")[0].getBoundingClientRect().width || screen.width || 360,
                    i = 0, a = 0, s = "only_wifi" === o && "wifi" !== this.netType || "never" === o,
                    c = "smart" === o && ("2g" === this.netType || "3g" === this.netType);
                if (t) {
                    var d = e || "i1.go2yd.com", l = t.content.match(/\<img.*?src=\".*?\".*?\>/gi) || [], u = r - 30;
                    return r >= 768 && (u = r - 120), l.forEach(function (e) {
                        var o, r = !!e.match(/animated/), l = e.match(/width=\"(\d+)\"/),
                            f = e.match(/height=\"(\d+)\"/), p = (e.match(/src=\S*url=([^\"]+)/) || [])[1];
                        l && l.length > 1 ? (i = parseInt(l[1], 10), l = i < u ? i : u, a = parseInt(f[1], 10), f = Math.round(l * a / i)) : (l = u, f = "auto");
                        var m = [], h = "";
                        if (h = p ? "http://" + d + "/image/" + encodeURIComponent(p) + "?net=" + ("wifi" === n.netType ? "wifi" : "3g") : ((e.match(/src=(\S*)/) || [])[1] || "").replace(/"/g, ""), r && (o = h + ("auto" !== l && "auto" !== f ? "&type=thumbnail_" + 2 * l + "x" + 2 * f : "")), s) m.push('<div class="no_image" data-src=' + h + " data-height=" + f + " data-width=" + l + ">[点击查看图片]</div>"); else if (c) {
                            var _, g = 120;
                            if (_ = "auto" !== l && "auto" !== f ? Math.round(g * f / l) : "auto", r) {
                                var y = h + ("auto" !== g && "auto" !== _ ? "&type=thumbnail_" + 2 * g + "x" + 2 * _ : "");
                                m.push('<div class="img-wrap gif-wrap small-img" style="width:' + g + "px; height:" + ("auto" === _ ? "auto" : _ + "px") + '" data-src="' + h + '" data-thumbnailsrc="' + o + '" data-smallsrc="' + y + '" data-width="' + l + '" data-height="' + f + '">'), m.push('<img src="' + y + '" onerror="' + N + '"/>'), m.push('<div class="gif-play"><i class="play-ico"></i>播放GIF</div>'), m.push("</div>")
                            } else {
                                var v = h + ("auto" !== g && "auto" !== _ ? "&type=thumbnail_" + 2 * g + "x" + 2 * _ : "");
                                m.push('<div class="img-wrap small-img" style="width:' + g + "px; height:" + ("auto" === _ ? "auto" : _ + "px") + '" data-src="' + h + '" data-smallsrc="' + v + '" data-width="' + l + '" data-height="' + f + '" data-imgid="' + p + '">'), m.push("</div>")
                            }
                        } else r ? (m.push('<div class="img-wrap gif-wrap" style="width:' + l + "px; height:" + ("auto" === f ? "auto" : f + "px") + '" data-src="' + h + '" data-thumbnailsrc="' + o + '">'), m.push('<img src="' + o + '" onerror="' + N + '"/>'), m.push('<div class="gif-play"><i class="play-ico"></i>播放GIF</div>'), m.push("</div>")) : (m.push('<div class="img-wrap" style="width:' + l + "px; height:" + ("auto" === f ? "auto" : f + "px") + '" data-src="' + h + '">'), m.push("</div>"));
                        t.content = t.content.replace(e, m.join(""))
                    }), t.related_wemedia && t.related_wemedia.id, t.content = t.content.replace('id="imedia-article"', 'id="imedia-article-mini"'), t.content
                }
            }, t.prototype.openOrigin = function (e) {
                e && (0, b.redirect)(e, "external")
            }, t.prototype.render = function (e, t) {
                var n = this, o = e.doc, r = e.channelFromId, i = e.clientInfo,
                    a = "a-content" + (o && "joke" == o.content_type ? " joke-content" : "");
                return (0, u.h)("div", null, "news" == o.content_type && (0, u.h)(I["default"], {doc: o}), !o.title && (0, u.h)("div", {className: h["default"].contentEmpty}, (0, u.h)("div", null, (0, u.h)("img", {src: "../img/common/load_failed.png"})), (0, u.h)("div", null, "出错了！文章没有找到哦~")), o.title && (0, u.h)("div", {
                    className: a,
                    dangerouslySetInnerHTML: {__html: this.parseContent(null, o)}
                }), (0, x.getParameterByName)("showorigin") && (0, u.h)("div", {className: h["default"].showOrigin}, (0, u.h)("a", {
                    onClick: function () {
                        return n.openOrigin(o.url)
                    }
                }, "查看原文")), (0, u.h)("div", {"class": h["default"]["yd-source-wrapper"] + " " + v["default"]["bottom-1px"]}, (0, u.h)("div", {"class": h["default"]["yd-source"]}, "此网页由一点资讯提供")), (0, u.h)(M["default"], {
                    doc: o,
                    clientInfo: i,
                    channelFromId: r
                }))
            }, t
        }(u.Component);
    t["default"] = k
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(33), f = n(128), p = o(f),
        m = n(50), h = o(m), _ = n(26), g = o(_), y = (n(8), function (e) {
            function t(n) {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
            }

            return (0, d["default"])(t, e), t.prototype.render = function () {
                var e = this.props, t = e.doc, n = (e.info, t.related_wemedia && t.related_wemedia.id),
                    o = (t.related_wemedia && t.related_wemedia.channel_id, void 0);
                return o = n ? (0, l.h)("div", {"class": p["default"]["wemedia-box"]}, (0, l.h)("div", {"class": p["default"]["wemedia-logo"]}, (0, l.h)("img", {src: t.related_wemedia.media_pic}), !!t.related_wemedia.plus_v && (0, l.h)("span", {"class": g["default"]["plus-v-round"] + " " + g["default"]["plus-v-round-" + t.related_wemedia.plus_v]})), (0, l.h)("div", {"class": p["default"]["wemedia-profile"]}, (0, l.h)("div", {"class": p["default"]["wemedia-name"]}, (0, l.h)("span", {"class": p["default"].name}, t.source), (0, l.h)("span", {"class": h["default"]["yidian-media"] + " " + h["default"]["yidian-ico"]}, "")), (0, l.h)("div", {"class": p["default"]["wemedia-info"]}, (0, l.h)("span", {"class": p["default"]["wemedia-copyright"]}), (0, l.h)("div", {"class": p["default"]["wemedia-date"]}, (0, u.formatDate)(t.date)), (0, l.h)("div", {"class": p["default"]["wemedia-summary"]}, t.related_wemedia.media_summary)))) : (0, l.h)("div", {"class": p["default"]["a-info"]}, (0, l.h)("span", {"class": p["default"].date}, (0, u.formatDate)(t.date))), (0, l.h)("div", {"class": p["default"].header}, (0, l.h)("div", {"class": p["default"]["a-title"] + " article-title"}, t.title), o)
            }, t
        }(l.Component));
    t["default"] = y
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(143), u = o(l), f = n(3), p = n(8), m = n(12),
        h = n(7), _ = o(h), g = n(18), y = n(138), v = o(y), w = n(160), b = o(w), x = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n)), r = o;
                o.state = {articleAd: [], relatedNewsAds: []};
                var a = n.clientInfo, c = {
                    clientInfo: {
                        userInfo: {
                            ip: "",
                            appVersion: a.version || "",
                            region: a.region || "",
                            cityCode: a.cityCode || "",
                            longitude: a.longitude || "",
                            latitude: a.latitude || "",
                            "3rd_ad_version": "1.0"
                        },
                        deviceInfo: {
                            screenHeight: a.screenHeight || "",
                            screenWidth: a.screenWidth || "",
                            device: a.device || "",
                            androidVersion: a.androidVersion || "",
                            network: a.net_type || ""
                        }
                    }
                };
                return (0, p.isIOS)() ? (c.clientInfo.deviceInfo.iosVersion = a.iosVersion || "", c.clientInfo.deviceInfo.screenDensity = a.screenDensity || "", c.clientInfo.deviceInfo.screenResolution = a.screenResolution || "", c.clientInfo.userInfo.ifa = a.ifa || "") : (c.clientInfo.deviceInfo.androidVersion = a.androidVersion || "", c.clientInfo.userInfo.mac = a.mac || "", c.clientInfo.userInfo.imei = a.imei || "", c.clientInfo.userInfo.language = a.language || "", c.clientInfo.userInfo.serviceProvider = a.serviceProvider || ""), (0, m.standardPost)(_["default"].API_URI_S3RD + "/contents/recommend-ads?docid=" + (0, g.getParameterByName)("docid") + "&utk=" + (0, g.getParameterByName)("utk") + "&net=" + a.net_type + "&platform=" + ("0" == a.platform ? 0 : 1) + "&version=" + a.api_ver + "&appid=" + (0, g.getParameterByName)("appid") + "&position=0,213,216", c, !1, !1).then(function (e) {
                    var t = [];
                    e && e.ads && (t = e.ads), t.sort(function (e, t) {
                        return parseInt(e.position) - parseInt(t.position)
                    }), r.setState({
                        articleAd: t.filter(function (e) {
                            return 0 == e.position
                        }), relatedNewsAds: t.filter(function (e) {
                            return 0 !== e.position
                        })
                    })
                }), o
            }

            return (0, d["default"])(t, e), t.prototype.render = function (e, t) {
                var n = (u["default"]["back-btn"] + (e.isRound ? " " + u["default"].round : "") + " " + (e.isWhite ? u["default"].white : u["default"].gray), e.doc);
                return (0, f.h)("div", null, t.articleAd[0] && (0, f.h)(v["default"], {
                    style: {"padding-top": ".15rem 0 0"},
                    ad: t.articleAd[0]
                }), "news" == n.content_type && n.docid && (0, f.h)(b["default"], {
                    docId: n.docid,
                    channelFromId: e.channelFromId,
                    clientInfo: e.clientInfo,
                    ads: this.state.relatedNewsAds
                }))
            }, t
        }(f.Component);
    t["default"] = x
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = o(l), f = n(3), p = n(12), m = n(69),
        h = n(161), _ = o(h), g = n(26), y = (o(g), n(8)), v = n(138), w = o(v), b = n(162), x = o(b), C = n(18),
        I = u["default"].API_URI_S3RD, S = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.state = {docs: [], num: 0}, o.docsFilter = o.docsFilter.bind(o), o
            }

            return (0, d["default"])(t, e), t.prototype.componentWillMount = function () {
                window.addEventListener("scroll", this.checkExpose)
            }, t.prototype.componentWillUnmount = function () {
                window.removeEventListener("scroll", this.checkExpose)
            }, t.prototype.componentDidMount = function () {
                var e = this, t = this.props.clientInfo,
                    n = t && t.app_info && t.app_info.config && t.app_info.config.related_news_num || 0;
                if (0 != n) {
                    this.setState({num: n});
                    var o = I + "/contents/recommend-news?docids=" + e.props.docId + "&num=" + n + "&appid=" + (0, C.getParameterByName)("appid");
                    "https://doris.yidianzixun.com/home/q/recommend_news_s3rd?docid=" + e.props.docId;
                    (0, p.getJSON)(o).then(function (t) {
                        if (t && t.recommend_news && t.recommend_news.length) {
                            var n = e.docsFilter(t.recommend_news);
                            e.setState({docs: n})
                        }
                    }, function (e) {
                    })
                }
            }, t.prototype.checkExpose = function () {
                $(".related-news").each(function () {
                    var e = this.getBoundingClientRect();
                    e.top >= 0 && e.bottom <= $(window).height() && ($(this).hasClass("js-realtimelog-sended") || ($(this).addClass("js-realtimelog-sended"), (0, m.sendExposeRelatedLog)([{
                        ctype: $(this).attr("data-ctype"),
                        docid: $(this).attr("data-docid"),
                        impid: $(this).attr("data-impid"),
                        pageid: $(this).attr("data-pageid"),
                        is_video: !1
                    }])))
                })
            }, t.prototype.docsFilter = function (e) {
                var t = this;
                return e = e || [], e = e.filter(function (e) {
                    return !(!e.title || !e.docid || void 0 != e.ttype) && (e.ctype = e.ctype || "news", e.pageid = e.pageid || t.props.docId, e.channelFromId = t.props.channelFromId, e._srcDocId = t.props.docId, e._isRelatedNews = !0, e._actionSrc = "relatedNews", e.is_video = !1, !0)
                })
            }, t.prototype.openArticle = function (e) {
                (0, y.openArticle)(e)
            }, t.prototype.render = function (e, t) {
                var n = t.docs || [], o = t.num || 0, r = e.ads;
                if (0 !== n.length) {
                    var i = [].slice.call(n);
                    return r.forEach(function (e, t) {
                        e.position && e.position > 210 && i.splice(e.position - 211, 0, e)
                    }), i = i.slice(0, o), (0, f.h)("div", {"class": _["default"].container}, i.length > 0 && (0, f.h)("div", {"class": _["default"].label}, "相关新闻"), i.map(function (e) {
                        return "advertisement" == e.ctype || e.aid ? (0, f.h)(w["default"], {ad: e}) : (0, f.h)(x["default"], {
                            openArticle: this.openArticle,
                            doc: e,
                            isRelatednews: !0,
                            borderBottom: !0,
                            size: "330x222"
                        })
                    }, this))
                }
            }, t
        }(f.Component);
    t["default"] = S
}, function (e, t) {
    e.exports = {container: "relatednews__container___Wv9sN", label: "relatednews__label___2Z-db"}
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(75), i = o(r), a = n(163), s = o(a), c = n(0), d = o(c), l = n(1), u = o(l), f = n(2), p = o(f), m = n(3),
        h = n(164), _ = o(h), g = n(139), y = o(g), v = n(145), w = o(v), b = n(144), x = o(b), C = function (e) {
            function t(n) {
                (0, d["default"])(this, t);
                var o = (0, u["default"])(this, e.call(this, n)), r = o.props.doc, i = null;
                return i = 3 == r.dtype && r.image_urls && r.image_urls.length >= 3 || r.gallery_items && r.gallery_items.length >= 3 ? "multi" : 2 == r.dtype && (r.image || r.image_urls && r.image_urls.length > 0) ? "big" : r.image || r.image_urls && r.image_urls.length > 0 ? "small" : "no-img", o.state = {dtype: i}, o
            }

            return (0, p["default"])(t, e), t.prototype.shouldComponentUpdate = function (e, t) {
                return !this.props.doc || !e.doc || this.props.doc.docid !== e.doc.docid
            }, t.prototype.render = function (e, t) {
                var n = this, o = e.doc, r = (e.isFromNewsList, e.isRelatednews),
                    a = (0, s["default"])(e, ["doc", "isFromNewsList", "isRelatednews"]);
                return r ? (0, m.h)("div", {
                    onClick: function () {
                        return n.props.openArticle(o)
                    },
                    "class": "related-news",
                    "data-pageid": o.pageid,
                    "data-impid": o.impid,
                    "data-docid": o.docid,
                    "data-ctype": o.ctype
                }, (0, m.h)(y["default"], (0, i["default"])({doc: o}, a))) : (0, m.h)("div", {
                    onClick: function () {
                        return n.props.openArticle(o)
                    }, "data-pageid": o.pageid, "data-impid": o.impid, "data-docid": o.docid
                }, "no-img" == t.dtype && (0, m.h)(_["default"], (0, i["default"])({doc: o}, a)), "small" == t.dtype && (0, m.h)(y["default"], (0, i["default"])({doc: o}, a)), "big" == t.dtype && (0, m.h)(w["default"], (0, i["default"])({doc: o}, a)), "multi" == t.dtype && (0, m.h)(x["default"], (0, i["default"])({doc: o}, a)))
            }, t
        }(m.Component);
    t["default"] = C
}, function (e, t, n) {
    "use strict";
    t.__esModule = !0, t["default"] = function (e, t) {
        var n = {};
        for (var o in e) t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
        return n
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = n(26), f = o(u), p = n(165), m = o(p),
        h = n(71), _ = o(h), g = function (e) {
            function t(n) {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
            }

            return (0, d["default"])(t, e), t.prototype.render = function (e) {
                return (0, l.h)("div", {"class": m["default"].doc + " " + f["default"]["bottom-1px"]}, (0, l.h)("div", {
                    style: e.style,
                    "class": m["default"].title
                }, e.doc.title), !e.noInfo && (0, l.h)(_["default"], {doc: e.doc}))
            }, t
        }(l.Component);
    t["default"] = g
}, function (e, t) {
    e.exports = {doc: "NoImageComponent__doc___1vU-4", title: "NoImageComponent__title___2xn9A"}
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = o(l), f = n(3), p = (n(12), n(140)),
        m = (o(p), n(167)), h = (o(m), n(170)), _ = o(h), g = n(8), y = (u["default"].API_URI, "i1.go2yd.com"),
        v = document.getElementsByTagName("html")[0].getBoundingClientRect().width || screen.width || 360,
        w = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.netType = "wifi", o.docsFilter = o.docsFilter.bind(o), o.imageArray = o.extractImage(n.doc.content, n.doc.gallery_items, n.doc.related_docs), o
            }

            return (0, d["default"])(t, e), t.prototype.extractImage = function (e, t, n) {
                var o = [], r = this, i = e.match(/\<img.*?src=\".*?\".*?\>/gi) || [], a = v;
                return v >= 768 && (a = v - 120), i.forEach(function (e, n) {
                    var s, c = (!!e.match(/animated/), e.match(/width=\"(\d+)\"/)), d = e.match(/height=\"(\d+)\"/),
                        l = (e.match(/src=\S*url=([^\"]+)/) || [])[1], u = 0, f = 0;
                    c && c.length > 1 ? (u = parseFloat(c[1]), c = u < a ? u : a, f = parseFloat(d[1]), d = (c * f / u).toFixed(3)) : (c = a, d = "auto"), s = l ? "http://" + y + "/image/" + encodeURIComponent(l) + "?net=" + ("wifi" === r.netType ? "wifi" : "3g") : ((e.match(/src=(\S*)/) || [])[1] || "").replace(/"/g, ""), o.push({
                        w: c,
                        h: "auto" === d ? "auto" : d,
                        src: s,
                        title: "<p>" + (n + 1) + "/" + i.length + " &nbsp;&nbsp;" + t[n].desc + "</p>"
                    })
                }), n && n.length >= 5 && o.push({html: "<div id='related-gallery'></div>"}), o
            }, t.prototype.componentDidMount = function () {
                var e = this, t = document.querySelectorAll(".pswp")[0], n = (e.imageArray.length - 1, {
                    index: 0,
                    maxSpreadZoom: 3,
                    spacing: 0,
                    history: !1,
                    pinchToClose: !1,
                    arrowKeys: !1,
                    escKey: !1,
                    focus: !1,
                    tapToClose: !1,
                    loop: !1,
                    scaleMode: "fit",
                    errorMsg: '<div class="pswp__error-msg" onclick="reloadImage()">图片加载失败，请检查网络后重试</div>',
                    closeOnVerticalDrag: !0,
                    tapToToggleControls: !0,
                    closeOnScroll: !1,
                    preload: [3, 5],
                    isClickableElement: function (e) {
                        return "related-gallery" === e.id
                    },
                    addCaptionHTMLFn: function (e, t, n) {
                        return !e.html && (t.children[0].innerHTML = e.title, !0)
                    }
                }), o = new PhotoSwipe(t, PhotoSwipeUI_Default, this.imageArray, n);
                o.init(), o.listen("imageLoadComplete", function (t, n) {
                    e.props.hideLoader && e.props.hideLoader()
                }), o.listen("afterChange", function (t, n) {
                    o.currItem.html && (0, f.render)((0, f.h)(_["default"], {
                        galleryRef: o,
                        hideLoader: e.props.hideLoader,
                        showLoader: e.props.showLoader,
                        docs: e.docsFilter(e.props.doc.related_docs),
                        docid: e.props.doc.docid
                    }), document.querySelector("#related-gallery"))
                }), o.listen("close", function () {
                    (0, g.close)()
                }), window.reloadImage = function () {
                    return
                }
            }, t.prototype.docsFilter = function (e) {
                var t = this;
                return e = e || [], e = e.filter(function (e) {
                    return !(!e.title || !e.docid) && (e.pageid = e.pageid || t.props.doc.docid, e.channelFromId = t.props.channelFromId, e._srcDocId = t.props.doc.docid, e._isRelatedNews = !0, e._actionSrc = "relatedNews", e.is_video = !1, !0)
                })
            }, t.prototype.render = function (e, t) {
                return (0, f.h)("div", null, (0, f.h)("div", {
                    "class": "pswp",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-hidden": "true"
                }, (0, f.h)("div", {"class": "pswp__bg"}), (0, f.h)("div", {"class": "pswp__scroll-wrap"}, (0, f.h)("div", {"class": "pswp__container"}, (0, f.h)("div", {"class": "pswp__item"}), (0, f.h)("div", {"class": "pswp__item"}), (0, f.h)("div", {"class": "pswp__item"})), (0, f.h)("div", {"class": "pswp__ui pswp__ui--hidden"}, (0, f.h)("div", {"class": "pswp__top-bar"}, (0, f.h)("div", {"class": "pswp__counter"}), (0, f.h)("div", {"class": "pswp__preloader"})), (0, f.h)("div", {"class": "pswp__caption"}, (0, f.h)("div", {"class": "pswp__caption__center"}))))))
            }, t
        }(f.Component);
    t["default"] = w
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(3), u = (n(33), n(168)), f = o(u), p = n(140),
        m = o(p), h = n(50), _ = o(h), g = n(8), y = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.goToChannel = o.goToChannel.bind(o), o
            }

            return (0, d["default"])(t, e), t.prototype.goToChannel = function (e) {
                e && (0, g.redirect)("/hybrid_developer/main/wemedia?channel_id=" + e + "&searchentry=search_doc_wemedia")
            }, t.prototype.render = function () {
                var e = this, t = this.props, n = t.doc, o = (t.info, n.related_wemedia), r = o && o.id,
                    i = o && o.channel_id;
                return (0, l.h)("div", {"class": m["default"].galleryHeader}, (0, l.h)(f["default"], {
                    isWhite: !0,
                    style: {top: "50%", transform: "translate(0, -50%)", webkitTransform: "translate(0, -50%)"}
                }), (0, l.h)("div", {"class": m["default"]["a-info"]}, r && (0, l.h)("a", {
                    href: "javascript:void(0)",
                    onClick: function () {
                        return e.goToChannel(i)
                    },
                    "class": m["default"]["yidian-source"]
                }, (0, l.h)("img", {
                    "class": m["default"]["wemedia-logo"],
                    src: n.related_wemedia.media_pic
                }), (0, l.h)("span", {"class": m["default"]["wm-name"]}, n.source), (0, l.h)("span", {
                    "class": _["default"]["yidian-media"] + " " + _["default"]["yidian-ico"],
                    style: {fontSize: ".16rem", marginLeft: ".05rem"}
                }, "")), !r && (0, l.h)("span", {"class": m["default"]["yidian-source-normal"]}, n.source)))
            }, t
        }(l.Component);
    t["default"] = y
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(169), u = o(l), f = n(3), p = n(8),
        m = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.onClickHandler = o.onClickHandler.bind(o), o
            }

            return (0, d["default"])(t, e), t.prototype.onClickHandler = function () {
                this.props.onClick ? this.props.onClick() && (0, p.close)() : (0, p.close)()
            }, t.prototype.render = function (e, t) {
                var n = u["default"]["back-btn"] + (e.isRound ? " " + u["default"].round : "") + " " + (e.isWhite ? u["default"].white : u["default"].gray);
                return (0, f.h)("span", {onClick: this.onClickHandler, "class": n, style: e.style})
            }, t
        }(f.Component);
    t["default"] = m
}, function (e, t) {
    e.exports = {
        "back-btn": "backButton__back-btn___263R5",
        white: "backButton__white___VUUo0",
        gray: "backButton__gray___1yvzP",
        round: "backButton__round___2_ekM"
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(7), u = o(l), f = n(3), p = (n(12), n(140)),
        m = o(p), h = n(71), _ = (o(h), n(8)), g = n(69), y = (u["default"].API_URI, "i1.go2yd.com"),
        v = document.getElementsByTagName("html")[0].getBoundingClientRect().width || screen.width || 360,
        w = function (e) {
            function t(n) {
                (0, i["default"])(this, t);
                var o = (0, s["default"])(this, e.call(this, n));
                return o.goToGallery = o.goToGallery.bind(o), o
            }

            return (0, d["default"])(t, e), t.prototype.componentDidMount = function () {
                var e = this.props.docs;
                this.props.showLoader(), e.length && (0, g.sendExposeRelatedLog)(e)
            }, t.prototype.goToGallery = function (e, t) {
                var n = this;
                e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), setTimeout(function (e) {
                    var t = n.props.galleryRef;
                    t.zoomTo(1, {x: t.viewportSize.x / 2, y: t.viewportSize.y / 2}, 2e3, !1, function () {
                    })
                }, 0), (0, _.openArticle)(t)
            }, t.prototype.getImageUrl = function (e, t, n) {
                t = t || v;
                var o = t * n;
                return "http://" + y + "/image/" + e + "?type=jpeg_" + parseInt(t) + "x" + parseInt(o)
            }, t.prototype.getImageAspectRation = function (e) {
                var t = e.image;
                t.indexOf("/") && (t = e.image.split("/").pop());
                var n = e.img_scores[t];
                return n && n.h && n.w, .65
            }, t.prototype.render = function (e, t) {
                var n = this, o = this.props.docs || [];
                return (0, f.h)("div", {"class": m["default"].relatedNewscontainer}, (0, f.h)("div", {"class": m["default"].twoImageRow}, (0, f.h)("div", {
                    onClick: function (e) {
                        return n.goToGallery(e, o[0])
                    }
                }, (0, f.h)("img", {
                    onError: this.props.hideLoader,
                    src: this.getImageUrl(o[0].image, v, this.getImageAspectRation(o[0]))
                }), (0, f.h)("div", {"class": m["default"].title}, (0, f.h)("p", null, o[0].title))), (0, f.h)("div", {
                    onClick: function (e) {
                        return n.goToGallery(e, o[1])
                    }
                }, (0, f.h)("img", {
                    onError: this.props.hideLoader,
                    src: this.getImageUrl(o[1].image, v, this.getImageAspectRation(o[1]))
                }), (0, f.h)("div", {"class": m["default"].title}, (0, f.h)("p", null, o[1].title)))), (0, f.h)("div", {"class": m["default"].oneImageRow}, (0, f.h)("div", {
                    onClick: function (e) {
                        return n.goToGallery(e, o[2])
                    }
                }, (0, f.h)("img", {
                    onLoad: this.props.hideLoader,
                    onError: this.props.hideLoader,
                    src: this.getImageUrl(o[2].image, 2 * v, this.getImageAspectRation(o[2]))
                }), (0, f.h)("div", {"class": m["default"].title}, (0, f.h)("p", null, o[2].title)))), (0, f.h)("div", {"class": m["default"].twoImageRow}, (0, f.h)("div", {
                    onClick: function (e) {
                        return n.goToGallery(e, o[3])
                    }
                }, (0, f.h)("img", {
                    onError: this.props.hideLoader,
                    src: this.getImageUrl(o[3].image, v, this.getImageAspectRation(o[3]))
                }), (0, f.h)("div", {"class": m["default"].title}, (0, f.h)("p", null, o[3].title))), (0, f.h)("div", {
                    onClick: function (e) {
                        return n.goToGallery(e, o[4])
                    }
                }, (0, f.h)("img", {
                    onError: this.props.hideLoader,
                    src: this.getImageUrl(o[4].image, v, this.getImageAspectRation(o[4]))
                }), (0, f.h)("div", {"class": m["default"].title}, (0, f.h)("p", null, o[4].title)))))
            }, t
        }(f.Component);
    t["default"] = w
}, function (e, t, n) {
    "use strict";

    function o(e) {
        return e && e.__esModule ? e : {"default": e}
    }

    t.__esModule = !0, t["default"] = void 0;
    var r = n(0), i = o(r), a = n(1), s = o(a), c = n(2), d = o(c), l = n(172), u = o(l), f = n(3), p = n(8),
        m = function (e) {
            function t(n) {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.call(this, n))
            }

            return (0, d["default"])(t, e), t.prototype.render = function (e, t) {
                return (0, f.h)("div", {
                    onClick: function (e) {
                        return (0, p.reloadPage)()
                    }, "class": u["default"].fail
                }, (0, f.h)("div", {"class": u["default"].img + " " + u["default"][e.imageClass || "no_network"]}), (0, f.h)("div", {"class": u["default"]["error-msg"]}, e.errorMessage || "加载失败，请点击重试"))
            }, t
        }(f.Component);
    t["default"] = m
}, function (e, t) {
    e.exports = {
        fail: "error__fail___Vbunw",
        "error-msg": "error__error-msg___2Dq7p",
        img: "error__img___24lf-",
        not_found: "error__not_found___3YlOI",
        no_network: "error__no_network___1y5Cs",
        no_content: "error__no_content___1RAcn"
    }
}, function (e, t, n) {
    "use strict";

    function o(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }

    function r() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            var o = Object.getOwnPropertyNames(t).map(function (e) {
                return t[e]
            });
            if ("0123456789" !== o.join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (i) {
            return !1
        }
    }

    var i = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable;
    e.exports = r() ? Object.assign : function (e, t) {
        for (var n, r, c = o(e), d = 1; d < arguments.length; d++) {
            n = Object(arguments[d]);
            for (var l in n) a.call(n, l) && (c[l] = n[l]);
            if (i) {
                r = i(n);
                for (var u = 0; u < r.length; u++) s.call(n, r[u]) && (c[r[u]] = n[r[u]])
            }
        }
        return c
    }
}]);