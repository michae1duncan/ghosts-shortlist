/*! Storymaps-Shortlist - v2.0.1 - 2016-09-16, 09:20:19 AM - This application is released under the Apache License V2.0 by Esri http://www.esri.com/ - https://github.com/Esri/map-series-storytelling-template-js */
function FastClick(e) {
    "use strict";
    var t, n = this;
    this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = e;
    if (!e || !e.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(n, arguments)
    }, this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(n, arguments)
    }, this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(n, arguments)
    }, this.onTouchMove = function() {
        return FastClick.prototype.onTouchMove.apply(n, arguments)
    }, this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(n, arguments)
    }, this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(n, arguments)
    };
    if (FastClick.notNeeded(e)) return;
    this.deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, n, r) {
        var i = Node.prototype.removeEventListener;
        t === "click" ? i.call(e, t, n.hijacked || n, r) : i.call(e, t, n, r)
    }, e.addEventListener = function(t, n, r) {
        var i = Node.prototype.addEventListener;
        t === "click" ? i.call(e, t, n.hijacked || (n.hijacked = function(e) {
            e.propagationStopped || n(e)
        }), r) : i.call(e, t, n, r)
    }), typeof e.onclick == "function" && (t = e.onclick, e.addEventListener("click", function(e) {
        t(e)
    }, !1), e.onclick = null)
}
define("lib-build/css", [], function() {
    if (typeof window == "undefined") return {
        load: function(e, t, n) {
            n()
        }
    };
    var e = document.getElementsByTagName("head")[0],
        t = window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)/) || 0,
        n = !1,
        r = !0;
    t[1] || t[7] ? n = parseInt(t[1]) < 6 || parseInt(t[7]) <= 9 : t[2] ? r = !1 : t[4] && (n = parseInt(t[4]) < 18);
    var i = {};
    i.pluginBuilder = "./css-builder";
    var s, o = function() {
            s = document.createElement("style"), e.appendChild(s)
        },
        u = function(e, t) {
            o();
            var n = s.styleSheet || s.sheet;
            if (n && n.addImport) n.addImport(e), s.onload = t;
            else {
                s.textContent = '@import "' + e + '";';
                var r = setInterval(function() {
                    try {
                        s.sheet.cssRules, clearInterval(r), t()
                    } catch (e) {}
                }, 10)
            }
        },
        a = function(t, n) {
            var i = document.createElement("link");
            i.type = "text/css", i.rel = "stylesheet";
            if (r) i.onload = function() {
                i.onload = function() {}, setTimeout(n, 7)
            };
            else var s = setInterval(function() {
                for (var e = 0; e < document.styleSheets.length; e++) {
                    var t = document.styleSheets[e];
                    if (t.href == i.href) return clearInterval(s), n()
                }
            }, 10);
            i.href = t, e.appendChild(i)
        };
    return i.normalize = function(e, t) {
        return e.substr(e.length - 4, 4) == ".css" && (e = e.substr(0, e.length - 4)), t(e)
    }, i.load = function(e, t, r, i) {
        (n ? u : a)(t.toUrl(e + ".css"), r)
    }, i
}), define("lib-build/css!lib-app/bootstrap/css/bootstrap.min", [], function() {}), define("lib-build/css!storymaps/common/ui/Modal", [], function() {}), define("lib-build/css!storymaps/common/Core", [], function() {}), ! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function y(e) {
        var t = e.length,
            n = p.type(e);
        return "function" === n || p.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    function x(e, t, n) {
        if (p.isFunction(t)) return p.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return p.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (S.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return p.inArray(e, t) >= 0 !== n
        })
    }

    function O(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function D(e) {
        var t = _[e] = {};
        return p.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", B, !1), e.removeEventListener("load", B, !1)) : (N.detachEvent("onreadystatechange", B), e.detachEvent("onload", B))
    }

    function B() {
        (N.addEventListener || "load" === event.type || "complete" === N.readyState) && (H(), p.ready())
    }

    function R(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(q, "-$1").toLowerCase();
            if (n = e.getAttribute(r), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n
                } catch (i) {}
                p.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function U(e) {
        var t;
        for (t in e)
            if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function z(e, t, r, i) {
        if (p.acceptData(e)) {
            var s, o, u = p.expando,
                a = e.nodeType,
                f = a ? p.cache : e,
                l = a ? e[u] : e[u] && u;
            if (l && f[l] && (i || f[l].data) || void 0 !== r || "string" != typeof t) return l || (l = a ? e[u] = n.pop() || p.guid++ : u), f[l] || (f[l] = a ? {} : {
                toJSON: p.noop
            }), ("object" == typeof t || "function" == typeof t) && (i ? f[l] = p.extend(f[l], t) : f[l].data = p.extend(f[l].data, t)), o = f[l], i || (o.data || (o.data = {}), o = o.data), void 0 !== r && (o[p.camelCase(t)] = r), "string" == typeof t ? (s = o[t], null == s && (s = o[p.camelCase(t)])) : s = o, s
        }
    }

    function W(e, t, n) {
        if (p.acceptData(e)) {
            var r, i, s = e.nodeType,
                o = s ? p.cache : e,
                u = s ? e[p.expando] : p.expando;
            if (o[u]) {
                if (t && (r = n ? o[u] : o[u].data)) {
                    p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) delete r[t[i]];
                    if (n ? !U(r) : !p.isEmptyObject(r)) return
                }(n || (delete o[u].data, U(o[u]))) && (s ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[u] : o[u] = null)
            }
        }
    }

    function tt() {
        return !0
    }

    function nt() {
        return !1
    }

    function rt() {
        try {
            return N.activeElement
        } catch (e) {}
    }

    function it(e) {
        var t = st.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Et(e, t) {
        var n, r, i = 0,
            s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, Et(r, t));
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], s) : s
    }

    function St(e) {
        K.test(e.type) && (e.defaultChecked = e.checked)
    }

    function xt(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Tt(e) {
        return e.type = (null !== p.find.attr(e, "type")) + "/" + e.type, e
    }

    function Nt(e) {
        var t = mt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ct(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
    }

    function kt(e, t) {
        if (1 === t.nodeType && p.hasData(e)) {
            var n, r, i, s = p._data(e),
                o = p._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; i > r; r++) p.event.add(t, n, u[n][r])
            }
            o.data && (o.data = p.extend({}, o.data))
        }
    }

    function Lt(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !c.noCloneEvent && t[p.expando]) {
                i = p._data(t);
                for (r in i.events) p.removeEvent(t, r, i.handle);
                t.removeAttribute(p.expando)
            }
            "script" === n && t.text !== e.text ? (Tt(t).text = e.text, Nt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && K.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function Mt(t, n) {
        var r = p(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : p.css(r[0], "display");
        return r.detach(), i
    }

    function _t(e) {
        var t = N,
            n = Ot[e];
        return n || (n = Mt(e, t), "none" !== n && n || (At = (At || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (At[0].contentWindow || At[0].contentDocument).document, t.write(), t.close(), n = Mt(e, t), At.detach()), Ot[e] = n), n
    }

    function Ft(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function $t(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Vt.length;
        while (i--)
            if (t = Vt[i] + n, t in e) return t;
        return r
    }

    function Jt(e, t) {
        for (var n, r, i, s = [], o = 0, u = e.length; u > o; o++) r = e[o], r.style && (s[o] = p._data(r, "olddisplay"), n = r.style.display, t ? (s[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && $(r) && (s[o] = p._data(r, "olddisplay", _t(r.nodeName)))) : s[o] || (i = $(r), (n && "none" !== n || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
        for (o = 0; u > o; o++) r = e[o], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? s[o] || "" : "none"));
        return e
    }

    function Kt(e, t, n) {
        var r = Ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Qt(e, t, n, r, i) {
        for (var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += p.css(e, n + V[s], !0, i)), r ? ("content" === n && (o -= p.css(e, "padding" + V[s], !0, i)), "margin" !== n && (o -= p.css(e, "border" + V[s] + "Width", !0, i))) : (o += p.css(e, "padding" + V[s], !0, i), "padding" !== n && (o += p.css(e, "border" + V[s] + "Width", !0, i)));
        return o
    }

    function Gt(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = Ht(e),
            o = c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, s);
        if (0 >= i || null == i) {
            if (i = Bt(e, t, s), (0 > i || null == i) && (i = e.style[t]), Pt.test(i)) return i;
            r = o && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function Yt(e, t, n, r, i) {
        return new Yt.prototype.init(e, t, n, r, i)
    }

    function un() {
        return setTimeout(function() {
            Zt = void 0
        }), Zt = p.now()
    }

    function an(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = V[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function fn(e, t, n) {
        for (var r, i = (on[t] || []).concat(on["*"]), s = 0, o = i.length; o > s; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function ln(e, t, n) {
        var r, i, s, o, u, a, f, l, h = this,
            d = {},
            v = e.style,
            m = e.nodeType && $(e),
            g = p._data(e, "fxshow");
        n.queue || (u = p._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--, p.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = p.css(e, "display"), l = _t(e.nodeName), "none" === f && (f = l), "inline" === f && "none" === p.css(e, "float") && (c.inlineBlockNeedsLayout && "inline" !== l ? v.zoom = 1 : v.display = "inline-block")), n.overflow && (v.overflow = "hidden", c.shrinkWrapBlocks() || h.always(function() {
            v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tn.exec(i)) {
                if (delete t[r], s = s || "toggle" === i, i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r]) continue;
                    m = !0
                }
                d[r] = g && g[r] || p.style(e, r)
            }
        if (!p.isEmptyObject(d)) {
            g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), s && (g.hidden = !m), m ? p(e).show() : h.done(function() {
                p(e).hide()
            }), h.done(function() {
                var t;
                p._removeData(e, "fxshow");
                for (t in d) p.style(e, t, d[t])
            });
            for (r in d) o = fn(m ? g[r] : 0, r, h), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function cn(e, t) {
        var n, r, i, s, o;
        for (n in e)
            if (r = p.camelCase(n), i = t[r], s = e[n], p.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = p.cssHooks[r], o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
    }

    function hn(e, t, n) {
        var r, i, s = 0,
            o = sn.length,
            u = p.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                for (var t = Zt || un(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, s = 1 - r, o = 0, a = f.tweens.length; a > o; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), 1 > s && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zt || un(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        for (cn(l, f.opts.specialEasing); o > s; s++)
            if (r = sn[s].call(f, e, l, f.opts)) return r;
        return p.map(l, fn, f), p.isFunction(f.opts.start) && f.opts.start.call(e, f), p.fx.timer(p.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function In(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(M) || [];
            if (p.isFunction(n))
                while (r = s[i++]) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, p.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                return "string" != typeof f || s || i[f] ? s ? !(a = f) : void 0 : (t.dataTypes.unshift(f), o(f), !1)
            }), a
        }
        var i = {},
            s = e === Bn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Rn(e, t) {
        var n, r, i = p.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && p.extend(!0, e, n), e
    }

    function Un(e, t, n) {
        var r, i, s, o, u = e.contents,
            a = e.dataTypes;
        while ("*" === a[0]) a.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0
    }

    function zn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s)
            if (e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift())
                if ("*" === s) s = a;
                else if ("*" !== a && a !== s) {
            if (o = f[a + " " + s] || f["* " + s], !o)
                for (i in f)
                    if (u = i.split(" "), u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]])) {
                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                        break
                    }
            if (o !== !0)
                if (o && e["throws"]) t = o(t);
                else try {
                    t = o(t)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: o ? c : "No conversion from " + a + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Kn(e, t, n, r) {
        var i;
        if (p.isArray(t)) p.each(t, function(t, i) {
            n || Xn.test(e) ? r(e, i) : Kn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== p.type(t)) r(e, t);
        else
            for (i in t) Kn(e + "[" + i + "]", t[i], n, r)
    }

    function Zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function er() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function sr(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var n = [],
        r = n.slice,
        i = n.concat,
        s = n.push,
        o = n.indexOf,
        u = {},
        a = u.toString,
        f = u.hasOwnProperty,
        l = "".trim,
        c = {},
        h = "1.11.0",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        v = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function(e, t) {
            return t.toUpperCase()
        };
    p.fn = p.prototype = {
        jquery: h,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {},
            u = 1,
            a = arguments.length,
            f = !1;
        for ("boolean" == typeof o && (f = o, o = arguments[u] || {}, u++), "object" == typeof o || p.isFunction(o) || (o = {}), u === a && (o = this, u--); a > u; u++)
            if (null != (i = arguments[u]))
                for (r in i) e = o[r], n = i[r], o !== n && (f && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, o[r] = p.extend(f, s, n)) : void 0 !== n && (o[r] = n));
        return o
    }, p.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === p.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e)) return !1;
            try {
                if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (c.ownLast)
                for (t in e) return f.call(e, t);
            for (t in e);
            return void 0 === t || f.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? u[a.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(v, "ms-").replace(m, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = y(e);
            if (n) {
                if (o) {
                    for (; s > i; i++)
                        if (r = t.apply(e[i], n), r === !1) break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n), r === !1) break
            } else if (o) {
                for (; s > i; i++)
                    if (r = t.call(e[i], i, e[i]), r === !1) break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]), r === !1) break; return e
        },
        trim: l && !l.call("﻿ ") ? function(e) {
            return null == e ? "" : l.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (y(Object(e)) ? p.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (o) return o.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = +t.length,
                r = 0,
                i = e.length;
            while (n > r) e[i++] = t[r++];
            if (n !== n)
                while (void 0 !== t[r]) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, s = 0,
                o = e.length,
                u = y(e),
                a = [];
            if (u)
                for (; o > s; s++) r = t(e[s], s, n), null != r && a.push(r);
            else
                for (s in e) r = t(e[s], s, n), null != r && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, s;
            return "string" == typeof t && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }, i.guid = e.guid = e.guid || p.guid++, i) : void 0
        },
        now: function() {
            return +(new Date)
        },
        support: c
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        function rt(e, t, r, i) {
            var s, o, u, a, f, h, v, m, w, E;
            if ((t ? t.ownerDocument || t : b) !== c && l(t), t = t || c, r = r || [], !e || "string" != typeof e) return r;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (p && !i) {
                if (s = G.exec(e))
                    if (u = s[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(u), !o || !o.parentNode) return r;
                            if (o.id === u) return r.push(o), r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) return r.push(o), r
                    } else {
                        if (s[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                        if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(u)), r
                    }
                if (n.qsa && (!d || !d.test(e))) {
                    if (m = v = y, w = t, E = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        h = dt(e), (v = t.getAttribute("id")) ? m = v.replace(Z, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = h.length;
                        while (f--) h[f] = m + vt(h[f]);
                        w = Y.test(e) && ht(t.parentNode) || t, E = h.join(",")
                    }
                    if (E) try {
                        return _.apply(r, w.querySelectorAll(E)), r
                    } catch (S) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return xt(e.replace(R, "$1"), t, r, i)
        }

        function it() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function st(e) {
            return e[y] = !0, e
        }

        function ot(e) {
            var t = c.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ut(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function at(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || k) - (~e.sourceIndex || k);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ht(e) {
            return e && typeof e.getElementsByTagName !== C && e
        }

        function pt() {}

        function dt(e, t) {
            var n, i, s, o, u, a, f, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                (!n || (i = U.exec(u))) && (i && (u = u.slice(i[0].length) || u), a.push(s = [])), n = !1, (i = z.exec(u)) && (n = i.shift(), s.push({
                    value: n,
                    type: i[0].replace(R, " ")
                }), u = u.slice(n.length));
                for (o in r.filter) !(i = $[o].exec(u)) || f[o] && !(i = f[o](i)) || (n = i.shift(), s.push({
                    value: n,
                    type: o,
                    matches: i
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
        }

        function vt(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r
        }

        function mt(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                s = E++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (1 === t.nodeType || i) return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [w, s];
                if (o) {
                    while (t = t[r])
                        if ((1 === t.nodeType || i) && e(t, n, o)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || i) {
                            if (a = t[y] || (t[y] = {}), (u = a[r]) && u[0] === w && u[1] === s) return f[2] = u[2];
                            if (a[r] = f, f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function yt(e, t, n, r, i) {
            for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)(s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
            return o
        }

        function bt(e, t, n, r, i, s) {
            return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, s)), st(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || St(t || "*", u.nodeType ? [u] : u, []),
                    m = !e || !s && t ? v : yt(v, h, e, u, a),
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                if (n && n(m, g, u, a), r) {
                    f = yt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)(c = f[l]) && (g[p[l]] = !(m[p[l]] = c))
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = yt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }

        function wt(e) {
            for (var t, n, i, s = e.length, o = r.relative[e[0].type], a = o || r.relative[" "], f = o ? 1 : 0, l = mt(function(e) {
                    return e === t
                }, a, !0), c = mt(function(e) {
                    return P.call(t, e) > -1
                }, a, !0), h = [function(e, n, r) {
                    return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }]; s > f; f++)
                if (n = r.relative[e[f].type]) h = [mt(gt(h), n)];
                else {
                    if (n = r.filter[e[f].type].apply(null, e[f].matches), n[y]) {
                        for (i = ++f; s > i; i++)
                            if (r.relative[e[i].type]) break;
                        return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
                            value: " " === e[f - 2].type ? "*" : ""
                        })).replace(R, "$1"), n, i > f && wt(e.slice(f, i)), s > i && wt(e = e.slice(i)), s > i && vt(e))
                    }
                    h.push(n)
                }
            return gt(h)
        }

        function Et(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function(s, o, a, f, l) {
                    var h, p, d, v = 0,
                        m = "0",
                        g = s && [],
                        y = [],
                        b = u,
                        E = s || i && r.find.TAG("*", l),
                        S = w += null == b ? 1 : Math.random() || .1,
                        x = E.length;
                    for (l && (u = o !== c && o); m !== x && null != (h = E[m]); m++) {
                        if (i && h) {
                            p = 0;
                            while (d = e[p++])
                                if (d(h, o, a)) {
                                    f.push(h);
                                    break
                                }
                            l && (w = S)
                        }
                        n && ((h = !d && h) && v--, s && g.push(h))
                    }
                    if (v += m, n && m !== v) {
                        p = 0;
                        while (d = t[p++]) d(g, y, o, a);
                        if (s) {
                            if (v > 0)
                                while (m--) g[m] || y[m] || (y[m] = O.call(f));
                            y = yt(y)
                        }
                        _.apply(f, y), l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f)
                    }
                    return l && (w = S, u = b), g
                };
            return n ? st(s) : s
        }

        function St(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) rt(e, t[r], n);
            return n
        }

        function xt(e, t, i, s) {
            var u, a, f, l, c, h = dt(e);
            if (!s && 1 === h.length) {
                if (a = h[0] = h[0].slice(0), a.length > 2 && "ID" === (f = a[0]).type && n.getById && 9 === t.nodeType && p && r.relative[a[1].type]) {
                    if (t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0], !t) return i;
                    e = e.slice(a.shift().value.length)
                }
                u = $.needsContext.test(e) ? 0 : a.length;
                while (u--) {
                    if (f = a[u], r.relative[l = f.type]) break;
                    if ((c = r.find[l]) && (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t))) {
                        if (a.splice(u, 1), e = s.length && vt(a), !e) return _.apply(i, s), i;
                        break
                    }
                }
            }
            return o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t), i
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
            b = e.document,
            w = 0,
            E = 0,
            S = it(),
            x = it(),
            T = it(),
            N = function(e, t) {
                return e === t && (f = !0), 0
            },
            C = "undefined",
            k = 1 << 31,
            L = {}.hasOwnProperty,
            A = [],
            O = A.pop,
            M = A.push,
            _ = A.push,
            D = A.slice,
            P = A.indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (this[t] === e) return t;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = j.replace("w", "w#"),
            I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
            q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
            R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            U = new RegExp("^" + B + "*," + B + "*"),
            z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            X = new RegExp(q),
            V = new RegExp("^" + F + "$"),
            $ = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            Z = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            _.apply(A = D.call(b.childNodes), b.childNodes), A[b.childNodes.length].nodeType
        } catch (nt) {
            _ = {
                apply: A.length ? function(e, t) {
                    M.apply(e, D.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = rt.support = {}, s = rt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, l = rt.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e : b,
                o = i.defaultView;
            return i !== c && 9 === i.nodeType && i.documentElement ? (c = i, h = i.documentElement, p = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                l()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                l()
            })), n.attributes = ot(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ot(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), n.getById = ot(function(e) {
                return h.appendChild(e).id = y, !i.getElementsByName || !i.getElementsByName(y).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== C && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== C ? t.getElementsByTagName(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = s[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== C && p ? t.getElementsByClassName(e) : void 0
            }, v = [], d = [], (n.qsa = Q.test(i.querySelectorAll)) && (ot(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + H + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && d.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            })), (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = d.length && new RegExp(d.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), g = t || Q.test(h.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && 1 === r.nodeType && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, N = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === b && g(b, e) ? -1 : t === i || t.ownerDocument === b && g(b, t) ? 1 : a ? P.call(a, e) - P.call(a, t) : 0 : 4 & r ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    l = [t];
                if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
                if (s === o) return at(e, t);
                n = e;
                while (n = n.parentNode) u.unshift(n);
                n = t;
                while (n = n.parentNode) l.unshift(n);
                while (u[r] === l[r]) r++;
                return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
            }, i) : c
        }, rt.matches = function(e, t) {
            return rt(e, null, null, t)
        }, rt.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== c && l(e), t = t.replace(W, "='$1']"), !(!n.matchesSelector || !p || v && v.test(t) || d && d.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (i) {}
            return rt(t, c, null, [e]).length > 0
        }, rt.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, rt.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : void 0;
            return void 0 !== s ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, rt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, rt.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                s = 0;
            if (f = !n.detectDuplicates, a = !n.sortStable && e.slice(0), e.sort(N), f) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            return a = null, e
        }, i = rt.getText = function(e) {
            var t, n = "",
                r = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else
                while (t = e[r++]) n += i(t);
            return n
        }, r = rt.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || rt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && rt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && X.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(et, tt).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = rt.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = "nth" !== e.slice(0, 3),
                        o = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            b = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                                    d = v = "only" === e && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [o ? m.firstChild : m.lastChild], o && b) {
                                l = m[y] || (m[y] = {}), f = l[e] || [], p = f[0] === w && f[1], h = f[0] === w && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (1 === c.nodeType && ++h && c === t) {
                                        l[e] = [w, p, h];
                                        break
                                    }
                            } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++h && (b && ((c[y] || (c[y] = {}))[e] = [w, h]), c === t)) break; return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var r, s = i(e, t),
                            o = s.length;
                        while (o--) r = P.call(e, s[o]), e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [],
                        n = [],
                        r = o(e.replace(R, "$1"));
                    return r[y] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)(s = o[u]) && (e[u] = !(t[u] = s))
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: st(function(e) {
                    return function(t) {
                        return rt(e, t).length > 0
                    }
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function(e) {
                    return V.test(e || "") || rt.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: ct(function() {
                    return [0]
                }),
                last: ct(function(e, t) {
                    return [t - 1]
                }),
                eq: ct(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ct(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: ct(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: ct(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ct(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ft(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = lt(t);
        return pt.prototype = r.filters = r.pseudos, r.setFilters = new pt, o = rt.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = T[e + " "];
            if (!s) {
                t || (t = dt(e)), n = t.length;
                while (n--) s = wt(t[n]), s[y] ? r.push(s) : i.push(s);
                s = T(e, Et(i, r))
            }
            return s
        }, n.sortStable = y.split("").sort(N).join("") === y, n.detectDuplicates = !!f, l(), n.sortDetached = ot(function(e) {
            return 1 & e.compareDocumentPosition(c.createElement("div"))
        }), ot(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ot(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ut("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ot(function(e) {
            return null == e.getAttribute("disabled")
        }) || ut(H, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), rt
    }(e);
    p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
    var w = p.expr.match.needsContext,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^.[^:#\[\.,]*$/;
    p.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, p.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (p.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) p.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T, N = e.document,
        C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = p.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0)), E.test(n[1]) && p.isPlainObject(t))
                        for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (r = N.getElementById(n[2]), r && r.parentNode) {
                    if (r.id !== n[2]) return T.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = N, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? "undefined" != typeof T.ready ? T.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
        };
    k.prototype = p.fn, T = p(N);
    var L = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.extend({
        dir: function(e, t, n) {
            var r = [],
                i = e[t];
            while (i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !p(i).is(n))) 1 === i.nodeType && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), p.fn.extend({
        has: function(e) {
            var t, n = p(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (p.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, s = [], o = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && p.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? p.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p.dir(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(n, r) {
            var i = p.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = p.filter(r, i)), this.length > 1 && (A[e] || (i = p.unique(i)), L.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var M = /\S+/g,
        _ = {};
    p.Callbacks = function(e) {
        e = "string" == typeof e ? _[e] || D(e) : p.extend({}, e);
        var t, n, r, i, s, o, u = [],
            a = !e.once && [],
            f = function(c) {
                for (n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0; u && i > s; s++)
                    if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
            },
            l = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        ! function s(t) {
                            p.each(t, function(t, n) {
                                var r = p.type(n);
                                "function" === r ? e.unique && l.has(n) || u.push(n) : n && n.length && "string" !== r && s(n)
                            })
                        }(arguments), t ? i = u.length : n && (o = r, f(n))
                    }
                    return this
                },
                remove: function() {
                    return u && p.each(arguments, function(e, n) {
                        var r;
                        while ((r = p.inArray(n, u, r)) > -1) u.splice(r, 1), t && (i >= r && i--, s >= r && s--)
                    }), this
                },
                has: function(e) {
                    return e ? p.inArray(e, u) > -1 : !!u && !!u.length
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = a = n = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = void 0, n || l.disable(), this
                },
                locked: function() {
                    return !a
                },
                fireWith: function(e, n) {
                    return !u || r && !a || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, p.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, s) {
                                var o = p.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, p.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[1 ^ e][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = r.call(arguments),
                i = n.length,
                s = 1 !== i || e && p.isFunction(e.promise) ? i : 0,
                o = 1 === s ? e : p.Deferred(),
                u = function(e, t, n) {
                    return function(i) {
                        t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                    }
                },
                a, f, l;
            if (i > 1)
                for (a = new Array(i), f = new Array(i), l = new Array(i); i > t; t++) n[t] && p.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s;
            return s || o.resolveWith(l, n), o.promise()
        }
    });
    var P;
    p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--p.readyWait : !p.isReady) {
                if (!N.body) return setTimeout(p.ready);
                p.isReady = !0, e !== !0 && --p.readyWait > 0 || (P.resolveWith(N, [p]), p.fn.trigger && p(N).trigger("ready").off("ready"))
            }
        }
    }), p.ready.promise = function(t) {
        if (!P)
            if (P = p.Deferred(), "complete" === N.readyState) setTimeout(p.ready);
            else if (N.addEventListener) N.addEventListener("DOMContentLoaded", B, !1), e.addEventListener("load", B, !1);
        else {
            N.attachEvent("onreadystatechange", B), e.attachEvent("onload", B);
            var n = !1;
            try {
                n = null == e.frameElement && N.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!p.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    H(), p.ready()
                }
            }()
        }
        return P.promise(t)
    };
    var j = "undefined",
        F;
    for (F in p(c)) break;
    c.ownLast = "0" !== F, c.inlineBlockNeedsLayout = !1, p(function() {
            var e, t, n = N.getElementsByTagName("body")[0];
            n && (e = N.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = N.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== j && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (c.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
        }),
        function() {
            var e = N.createElement("div");
            if (null == c.deleteExpando) {
                c.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    c.deleteExpando = !1
                }
            }
            e = null
        }(), p.acceptData = function(e) {
            var t = p.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /([A-Z])/g;
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !!e && !U(e)
        },
        data: function(e, t, n) {
            return z(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return z(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0],
                o = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (i = p.data(s), 1 === s.nodeType && !p._data(s, "parsedAttrs"))) {
                    n = o.length;
                    while (n--) r = o[n].name, 0 === r.indexOf("data-") && (r = p.camelCase(r.slice(5)), R(s, r, i[r]));
                    p._data(s, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : s ? R(s, e, p.data(s, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }), p.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = p._queueHooks(e, t),
                o = function() {
                    p.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(e, t + "queue"), p._removeData(e, n)
                })
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = p.Deferred(),
                s = this,
                o = this.length,
                u = function() {
                    --r || i.resolveWith(s, [s])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (o--) n = p._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        V = ["Top", "Right", "Bottom", "Left"],
        $ = function(e, t) {
            return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        },
        J = p.access = function(e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = null == n;
            if ("object" === p.type(n)) {
                i = !0;
                for (u in n) p.access(e, t, u, n[u], !0, s, o)
            } else if (void 0 !== r && (i = !0, p.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                    return f.call(p(e), n)
                })), t))
                for (; a > u; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        },
        K = /^(?:checkbox|radio)$/i;
    ! function() {
        var e = N.createDocumentFragment(),
            t = N.createElement("div"),
            n = N.createElement("input");
        if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", c.leadingWhitespace = 3 === t.firstChild.nodeType, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), c.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                c.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == c.deleteExpando) {
            c.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                c.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function() {
        var t, n, r = N.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Q = /^(?:input|select|textarea)$/i,
        G = /^key/,
        Y = /^(?:mouse|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/,
        et = /^([^.]*)(?:\.(.+)|)$/;
    p.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p._data(e);
            if (g) {
                n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = p.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function(e) {
                    return typeof p === j || e && p.event.triggered === e.type ? void 0 : p.event.dispatch.apply(l.elem, arguments)
                }, l.elem = e), t = (t || "").match(M) || [""], u = t.length;
                while (u--) s = et.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort(), d && (f = p.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = p.event.special[d] || {}, c = p.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && p.expr.match.needsContext.test(i),
                    namespace: v.join(".")
                }, a), (h = o[d]) || (h = o[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, r, v, l) !== !1 || (e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l))), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), p.event.global[d] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p.hasData(e) && p._data(e);
            if (g && (l = g.events)) {
                t = (t || "").match(M) || [""], f = t.length;
                while (f--)
                    if (u = et.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort(), d) {
                        c = p.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, h = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                        while (s--) o = h[s], !i && m !== o.origType || n && n.guid !== o.guid || u && !u.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !h.length && (c.teardown && c.teardown.call(e, v, g.handle) !== !1 || p.removeEvent(e, d, g.handle), delete l[d])
                    } else
                        for (d in l) p.event.remove(e, d + t[f], n, r, !0);
                p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var s, o, u, a, l, c, h, d = [r || N],
                v = f.call(t, "type") ? t.type : t,
                m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (u = c = r = r || N, 3 !== r.nodeType && 8 !== r.nodeType && !Z.test(v + p.event.triggered) && (v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : p.makeArray(n, [t]), l = p.event.special[v] || {}, i || !l.trigger || l.trigger.apply(r, n) !== !1)) {
                if (!i && !l.noBubble && !p.isWindow(r)) {
                    for (a = l.delegateType || v, Z.test(a + v) || (u = u.parentNode); u; u = u.parentNode) d.push(u), c = u;
                    c === (r.ownerDocument || N) && d.push(c.defaultView || c.parentWindow || e)
                }
                h = 0;
                while ((u = d[h++]) && !t.isPropagationStopped()) t.type = h > 1 ? a : l.bindType || v, s = (p._data(u, "events") || {})[t.type] && p._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && p.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
                if (t.type = v, !i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && p.acceptData(r) && o && r[v] && !p.isWindow(r)) {
                    c = r[o], c && (r[o] = null), p.event.triggered = v;
                    try {
                        r[v]()
                    } catch (g) {}
                    p.event.triggered = void 0, c && (r[o] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, i, s, o, u = [],
                a = r.call(arguments),
                f = (p._data(this, "events") || {})[e.type] || [],
                l = p.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                u = p.event.handlers.call(this, e, f), t = 0;
                while ((s = u[t++]) && !e.isPropagationStopped()) {
                    e.currentTarget = s.elem, o = 0;
                    while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()))
                }
                return l.postDispatch && l.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || "click" !== e.type))
                for (; a != this; a = a.parentNode || this)
                    if (1 === a.nodeType && (a.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], s = 0; u > s; s++) r = t[s], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? p(n, this).index(a) >= 0 : p.find(n, this, null, [a]).length), i[n] && i.push(r);
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new p.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || N), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button,
                    o = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== rt() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === rt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return p.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, p.removeEvent = N.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n))
    }, p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? tt : nt) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        isDefaultPrevented: nt,
        isPropagationStopped: nt,
        isImmediatePropagationStopped: nt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = tt, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = tt, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                return (!i || i !== r && !p.contains(r, i)) && (e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), c.submitBubbles || (p.event.special.submit = {
        setup: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : void 0;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return p.nodeName(this, "form") ? !1 : void p.event.remove(this, "._submit")
        }
    }), c.changeBubbles || (p.event.special.change = {
        setup: function() {
            return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (p.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), p.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
            })), !1) : void p.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }), c.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t);
                i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t) - 1;
                i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
            }
        }
    }), p.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = nt;
            else if (!r) return this;
            return 1 === i && (o = r, r = function(e) {
                return p().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = p.guid++)), this.each(function() {
                p.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = nt), this.each(function() {
                p.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? p.event.trigger(e, t, n, !0) : void 0
        }
    });
    var st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ot = / jQuery\d+="(?:null|\d+)"/g,
        ut = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
        at = /^\s+/,
        ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lt = /<([\w:]+)/,
        ct = /<tbody/i,
        ht = /<|&#?\w+;/,
        pt = /<(?:script|style|link)/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        vt = /^$|\/(?:java|ecma)script/i,
        mt = /^true\/(.*)/,
        gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        bt = it(N),
        wt = bt.appendChild(N.createElement("div"));
    yt.optgroup = yt.option, yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, p.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = p.contains(e.ownerDocument, e);
            if (c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (wt.innerHTML = e.outerHTML, wt.removeChild(s = wt.firstChild)), !(c.noCloneEvent && c.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (r = Et(s), u = Et(e), o = 0; null != (i = u[o]); ++o) r[o] && Lt(i, r[o]);
            if (t)
                if (n)
                    for (u = u || Et(e), r = r || Et(s), o = 0; null != (i = u[o]); o++) kt(i, r[o]);
                else kt(e, s);
            return r = Et(s, "script"), r.length > 0 && Ct(r, !a && Et(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            for (var i, s, o, u, a, f, l, h = e.length, d = it(t), v = [], m = 0; h > m; m++)
                if (s = e[m], s || 0 === s)
                    if ("object" === p.type(s)) p.merge(v, s.nodeType ? [s] : s);
                    else if (ht.test(s)) {
                u = u || d.appendChild(t.createElement("div")), a = (lt.exec(s) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2], i = l[0];
                while (i--) u = u.lastChild;
                if (!c.leadingWhitespace && at.test(s) && v.push(t.createTextNode(at.exec(s)[0])), !c.tbody) {
                    s = "table" !== a || ct.test(s) ? "<table>" !== l[1] || ct.test(s) ? 0 : u : u.firstChild, i = s && s.childNodes.length;
                    while (i--) p.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                }
                p.merge(v, u.childNodes), u.textContent = "";
                while (u.firstChild) u.removeChild(u.firstChild);
                u = d.lastChild
            } else v.push(t.createTextNode(s));
            u && d.removeChild(u), c.appendChecked || p.grep(Et(v, "input"), St), m = 0;
            while (s = v[m++])
                if ((!r || -1 === p.inArray(s, r)) && (o = p.contains(s.ownerDocument, s), u = Et(d.appendChild(s), "script"), o && Ct(u), n)) {
                    i = 0;
                    while (s = u[i++]) vt.test(s.type || "") && n.push(s)
                }
            return u = null, d
        },
        cleanData: function(e, t) {
            for (var r, i, s, o, u = 0, a = p.expando, f = p.cache, l = c.deleteExpando, h = p.event.special; null != (r = e[u]); u++)
                if ((t || p.acceptData(r)) && (s = r[a], o = s && f[s])) {
                    if (o.events)
                        for (i in o.events) h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
                    f[s] && (delete f[s], l ? delete r[a] : typeof r.removeAttribute !== j ? r.removeAttribute(a) : r[a] = null, n.push(s))
                }
        }
    }), p.fn.extend({
        text: function(e) {
            return J(this, function(e) {
                return void 0 === e ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? p.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || p.cleanData(Et(n)), n.parentNode && (t && p.contains(n.ownerDocument, n) && Ct(Et(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                1 === e.nodeType && p.cleanData(Et(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return J(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ot, "") : void 0;
                if (!("string" != typeof e || pt.test(e) || !c.htmlSerialize && ut.test(e) || !c.leadingWhitespace && at.test(e) || yt[(lt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(ft, "<$1></$2>");
                    try {
                        for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (p.cleanData(Et(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, p.cleanData(Et(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, s, o, u, a, f = 0,
                l = this.length,
                h = this,
                d = l - 1,
                v = e[0],
                m = p.isFunction(v);
            if (m || l > 1 && "string" == typeof v && !c.checkClone && dt.test(v)) return this.each(function(n) {
                var r = h.eq(n);
                m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l && (a = p.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = p.map(Et(a, "script"), Tt), s = o.length; l > f; f++) r = a, f !== d && (r = p.clone(r, !0, !0), s && p.merge(o, Et(r, "script"))), t.call(this[f], r, f);
                if (s)
                    for (u = o[o.length - 1].ownerDocument, p.map(o, Nt), f = 0; s > f; f++) r = o[f], vt.test(r.type || "") && !p._data(r, "globalEval") && p.contains(u, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(gt, "")));
                a = n = null
            }
            return this
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = p(e), u = o.length - 1; u >= r; r++) n = r === u ? this : this.clone(!0), p(o[r])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var At, Ot = {};
    ! function() {
        var e, t, n = N.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(e.style.opacity), c.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, c.shrinkWrapBlocks = function() {
            var e, n, i, s;
            if (null == t) {
                if (e = N.getElementsByTagName("body")[0], !e) return;
                s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = N.createElement("div"), i = N.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== j && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth), e.removeChild(n), e = n = i = null
            }
            return t
        }
    }();
    var Dt = /^margin/,
        Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        Ht, Bt, jt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Ht = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }, Bt = function(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Ht(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || p.contains(e.ownerDocument, e) || (o = p.style(e, t)), Pt.test(o) && Dt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), void 0 === o ? o : o + ""
    }) : N.documentElement.currentStyle && (Ht = function(e) {
        return e.currentStyle
    }, Bt = function(e, t, n) {
        var r, i, s, o, u = e.style;
        return n = n || Ht(e), o = n ? n[t] : void 0, null == o && u && u[t] && (o = u[t]), Pt.test(o) && !jt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), void 0 === o ? o : o + "" || "auto"
    }), ! function() {
        function l() {
            var t, n, u = N.getElementsByTagName("body")[0];
            u && (t = N.createElement("div"), n = N.createElement("div"), t.style.cssText = a, u.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", p.swap(u, null != u.style.zoom ? {
                zoom: 1
            } : {}, function() {
                r = 4 === n.offsetWidth
            }), i = !0, s = !1, o = !0, e.getComputedStyle && (s = "1%" !== (e.getComputedStyle(n, null) || {}).top, i = "4px" === (e.getComputedStyle(n, null) || {
                width: "4px"
            }).width), u.removeChild(t), n = u = null)
        }
        var t, n, r, i, s, o, u = N.createElement("div"),
            a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
            f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = u.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(t.style.opacity), c.cssFloat = !!t.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = "content-box" === u.style.backgroundClip, t = u = null, p.extend(c, {
            reliableHiddenOffsets: function() {
                if (null != n) return n;
                var e, t, r, i = N.createElement("div"),
                    s = N.getElementsByTagName("body")[0];
                if (s) return i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = N.createElement("div"), e.style.cssText = a, s.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", r = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", n = r && 0 === t[0].offsetHeight, s.removeChild(e), i = s = null, n
            },
            boxSizing: function() {
                return null == r && l(), r
            },
            boxSizingReliable: function() {
                return null == i && l(), i
            },
            pixelPosition: function() {
                return null == s && l(), s
            },
            reliableMarginRight: function() {
                var t, n, r, i;
                if (null == o && e.getComputedStyle) {
                    if (t = N.getElementsByTagName("body")[0], !t) return;
                    n = N.createElement("div"), r = N.createElement("div"), n.style.cssText = a, t.appendChild(n).appendChild(r), i = r.appendChild(N.createElement("div")), i.style.cssText = r.style.cssText = f, i.style.marginRight = i.style.width = "0", r.style.width = "1px", o = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(n)
                }
                return o
            }
        })
    }(), p.swap = function(e, t, n, r) {
        var i, s, o = {};
        for (s in t) o[s] = e.style[s], e.style[s] = t[s];
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i
    };
    var It = /alpha\([^)]*\)/i,
        qt = /opacity\s*=\s*([^)]*)/,
        Rt = /^(none|table(?!-c[ea]).+)/,
        Ut = new RegExp("^(" + X + ")(.*)$", "i"),
        zt = new RegExp("^([+-])=(" + X + ")", "i"),
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Vt = ["Webkit", "O", "Moz", "ms"];
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Bt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, s, o, u = p.camelCase(t),
                    a = e.style;
                if (t = p.cssProps[u] || (p.cssProps[u] = $t(a, u)), o = p.cssHooks[t] || p.cssHooks[u], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : a[t];
                if (s = typeof n, "string" === s && (i = zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), s = "number"), null != n && n === n && ("number" !== s || p.cssNumber[u] || (n += "px"), c.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (a[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, r))))) try {
                    a[t] = "", a[t] = n
                } catch (f) {}
            }
        },
        css: function(e, t, n, r) {
            var i, s, o, u = p.camelCase(t);
            return t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u)), o = p.cssHooks[t] || p.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), void 0 === s && (s = Bt(e, t, r)), "normal" === s && t in Xt && (s = Xt[t]), "" === n || n ? (i = parseFloat(s), n === !0 || p.isNumeric(i) ? i || 0 : s) : s
        }
    }), p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && Rt.test(p.css(e, "display")) ? p.swap(e, Wt, function() {
                    return Gt(e, t, r)
                }) : Gt(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && Ht(e);
                return Kt(e, n, r ? Qt(e, t, r, c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), c.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return qt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === p.trim(s.replace(It, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = It.test(s) ? s.replace(It, i) : s + " " + i)
        }
    }), p.cssHooks.marginRight = Ft(c.reliableMarginRight, function(e, t) {
        return t ? p.swap(e, {
            display: "inline-block"
        }, Bt, [e, "marginRight"]) : void 0
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + V[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Dt.test(e) || (p.cssHooks[e + t].set = Kt)
    }), p.fn.extend({
        css: function(e, t) {
            return J(this, function(e, t, n) {
                var r, i, s = {},
                    o = 0;
                if (p.isArray(t)) {
                    for (r = Ht(e), i = t.length; i > o; o++) s[t[o]] = p.css(e, t[o], !1, r);
                    return s
                }
                return void 0 !== n ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Jt(this, !0)
        },
        hide: function() {
            return Jt(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = Yt, Yt.prototype = {
        constructor: Yt,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yt.propHooks[this.prop];
            return this.pos = t = this.options.duration ? p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, p.fx = Yt.prototype.init, p.fx.step = {};
    var Zt, en, tn = /^(?:toggle|show|hide)$/,
        nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        rn = /queueHooks$/,
        sn = [ln],
        on = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = nn.exec(t),
                    s = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                    o = (p.cssNumber[e] || "px" !== s && +r) && nn.exec(p.css(n.elem, e)),
                    u = 1,
                    a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o = +r || 1;
                    do u = u || ".5", o /= u, p.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && 1 !== u && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    p.Animation = p.extend(hn, {
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, r = 0, i = e.length; i > r; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? sn.unshift(e) : sn.push(e)
            }
        }), p.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            return r.duration = p.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue)
            }, r
        }, p.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter($).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = p.isEmptyObject(e),
                    s = p.speed(t, n, r),
                    o = function() {
                        var t = hn(this, p.extend({}, e), s);
                        (i || p._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        s = p.timers,
                        o = p._data(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
                    for (i = s.length; i--;) s[i].elem !== this || null != e && s[i].queue !== e || (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                    (t || !n) && p.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = p._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        s = p.timers,
                        o = r ? r.length : 0;
                    for (n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), p.each(["toggle", "show", "hide"], function(e, t) {
            var n = p.fn[t];
            p.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(an(t, !0), e, r, i)
            }
        }), p.each({
            slideDown: an("show"),
            slideUp: an("hide"),
            slideToggle: an("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            p.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), p.timers = [], p.fx.tick = function() {
            var e, t = p.timers,
                n = 0;
            for (Zt = p.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || p.fx.stop(), Zt = void 0
        }, p.fx.timer = function(e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            en || (en = setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            clearInterval(en), en = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(e, t) {
            return e = p.fx ? p.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i = N.createElement("div");
            i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], n = N.createElement("select"), r = n.appendChild(N.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", c.getSetAttribute = "t" !== i.className, c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = "/a" === e.getAttribute("href"), c.checkOn = !!t.value, c.optSelected = r.selected, c.enctype = !!N.createElement("form").enctype, n.disabled = !0, c.optDisabled = !r.disabled, t = N.createElement("input"), t.setAttribute("value", ""), c.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), c.radioValue = "t" === t.value, e = t = n = r = i = null
        }();
    var pn = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (arguments.length) return r = p.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, p(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            });
            if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(pn, "") : null == n ? "" : n)
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, s = "select-one" === e.type || 0 > i, o = s ? null : [], u = s ? i + 1 : r.length, a = 0 > i ? u : s ? i : 0; u > a; a++)
                        if (n = r[a], !(!n.selected && a !== i || (c.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && p.nodeName(n.parentNode, "optgroup"))) {
                            if (t = p(n).val(), s) return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        s = p.makeArray(t),
                        o = i.length;
                    while (o--)
                        if (r = i[o], p.inArray(p.valHooks.option.get(r), s) >= 0) try {
                            r.selected = n = !0
                        } catch (u) {
                            r.scrollHeight
                        } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
            }
        }, c.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var dn, vn, mn = p.expr.attrHandle,
        gn = /^(?:checked|selected)$/i,
        yn = c.getSetAttribute,
        bn = c.input;
    p.fn.extend({
        attr: function(e, t) {
            return J(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === j ? p.prop(e, t, n) : (1 === s && p.isXMLDoc(e) || (t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = p.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void p.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(M);
            if (s && 1 === e.nodeType)
                while (n = s[i++]) r = p.propFix[n] || n, p.expr.match.bool.test(n) ? bn && yn || !gn.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""), e.removeAttribute(yn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), vn = {
        set: function(e, t, n) {
            return t === !1 ? p.removeAttr(e, n) : bn && yn || !gn.test(n) ? e.setAttribute(!yn && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mn[t] || p.find.attr;
        mn[t] = bn && yn || !gn.test(t) ? function(e, t, r) {
            var i, s;
            return r || (s = mn[t], mn[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, mn[t] = s), i
        } : function(e, t, n) {
            return n ? void 0 : e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), bn && yn || (p.attrHooks.value = {
        set: function(e, t, n) {
            return p.nodeName(e, "input") ? void(e.defaultValue = t) : dn && dn.set(e, t, n)
        }
    }), yn || (dn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, mn.id = mn.name = mn.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }, p.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: dn.set
    }, p.attrHooks.contenteditable = {
        set: function(e, t, n) {
            dn.set(e, "" === t ? !1 : t, n)
        }
    }, p.each(["width", "height"], function(e, t) {
        p.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), c.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wn = /^(?:input|select|textarea|button|object)$/i,
        En = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return J(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {}
            })
        }
    }), p.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !p.isXMLDoc(e), s && (t = p.propFix[t] || t, i = p.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), c.hrefNormalized || p.each(["href", "src"], function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), c.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }), c.enctype || (p.propFix.enctype = "encoding");
    var Sn = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (f)
                for (t = (e || "").match(M) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ")) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = p.trim(r), n.className !== o && (n.className = o)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = 0 === arguments.length || "string" == typeof e && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (f)
                for (t = (e || "").match(M) || []; a > u; u++)
                    if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Sn, " ") : "")) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        o = e ? p.trim(r) : "", n.className !== o && (n.className = o)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(n) {
                p(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function() {
                if ("string" === n) {
                    var t, r = 0,
                        i = p(this),
                        s = e.match(M) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else(n === j || "boolean" === n) && (this.className && p._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : p._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var xn = p.now(),
        Tn = /\?/,
        Nn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = p.trim(t + "");
        return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !s - !i, "")
        })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || p.error("Invalid XML: " + t), n
    };
    var Cn, kn, Ln = /#.*$/,
        An = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        Dn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hn = {},
        Bn = {},
        jn = "*/".concat("*");
    try {
        kn = location.href
    } catch (Fn) {
        kn = N.createElement("a"), kn.href = "", kn = kn.href
    }
    Cn = Pn.exec(kn.toLowerCase()) || [], p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kn,
            type: "GET",
            isLocal: Mn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e)
        },
        ajaxPrefilter: In(Hn),
        ajaxTransport: In(Bn),
        ajax: function(e, t) {
            function x(e, t, n, r) {
                var f, g, y, w, S, x = t;
                2 !== b && (b = 2, o && clearTimeout(o), a = void 0, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && 300 > e || 304 === e, n && (w = Un(l, E, n)), w = zn(l, w, E, f), f ? (l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (p.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (p.etag[i] = S)), 204 === e || "HEAD" === l.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y)) : (y = x, (e || !x) && (x = "error", 0 > e && (e = 0))), E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = void 0, u && h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (h.trigger("ajaxComplete", [E, l]), --p.active || p.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, r, i, s, o, u, a, f, l = p.ajaxSetup({}, t),
                c = l.context || l,
                h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
                d = p.Deferred(),
                v = p.Callbacks("once memory"),
                m = l.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!f) {
                                f = {};
                                while (t = On.exec(s)) f[t[1].toLowerCase()] = t[2]
                            }
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (l.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) m[t] = [m[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return a && a.abort(t), x(0, t), this
                    }
                };
            if (d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || kn) + "").replace(Ln, "").replace(Dn, Cn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = p.trim(l.dataType || "*").toLowerCase().match(M) || [""], null == l.crossDomain && (n = Pn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Cn[1] && n[2] === Cn[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = p.param(l.data, l.traditional)), qn(Hn, l, t, E), 2 === b) return E;
            u = l.global, u && 0 === p.active++ && p.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !_n.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (Tn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = An.test(i) ? i.replace(An, "$1_=" + xn++) : i + (Tn.test(i) ? "&" : "?") + "_=" + xn++)), l.ifModified && (p.lastModified[i] && E.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && E.setRequestHeader("If-None-Match", p.etag[i])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + jn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
            if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && 2 !== b) {
                w = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) E[r](l[r]);
                if (a = qn(Bn, l, t, E)) {
                    E.readyState = 1, u && h.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
                        E.abort("timeout")
                    }, l.timeout));
                    try {
                        b = 1, a.send(g, x)
                    } catch (S) {
                        if (!(2 > b)) throw S;
                        x(-1, S)
                    }
                } else x(-1, "No Transport");
                return E
            }
            return E.abort()
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], function(e, t) {
        p[t] = function(e, n, r, i) {
            return p.isFunction(n) && (i = i || r, r = n, n = void 0), p.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return this.each(p.isFunction(e) ? function(t) {
                p(this).wrapInner(e.call(this, t))
            } : function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && "none" === (e.style && e.style.display || p.css(e, "display"))
    }, p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var Wn = /%20/g,
        Xn = /\[\]$/,
        Vn = /\r?\n/g,
        $n = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    p.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Kn(n, e[n], t, i);
        return r.join("&").replace(Wn, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !$n.test(e) && (this.checked || !K.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return null == n ? null : p.isArray(n) ? p.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Vn, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zn() || er()
    } : Zn;
    var Qn = 0,
        Gn = {},
        Yn = p.ajaxSettings.xhr();
    e.ActiveXObject && p(e).on("unload", function() {
        for (var e in Gn) Gn[e](void 0, !0)
    }), c.cors = !!Yn && "withCredentials" in Yn, Yn = c.ajax = !!Yn, Yn && p.ajaxTransport(function(e) {
        if (!e.crossDomain || c.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, s = e.xhr(),
                        o = ++Qn;
                    if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null), t = function(n, i) {
                        var u, a, f;
                        if (t && (i || 4 === s.readyState))
                            if (delete Gn[o], t = void 0, s.onreadystatechange = p.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                f = {}, u = s.status, "string" == typeof s.responseText && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }
                                u || !e.isLocal || e.crossDomain ? 1223 === u && (u = 204) : u = f.text ? 200 : 404
                            }
                        f && r(u, a, f, s.getAllResponseHeaders())
                    }, e.async ? 4 === s.readyState ? setTimeout(t) : s.onreadystatechange = Gn[o] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), p.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = N.head || p("head")[0] || N.documentElement;
            return {
                send: function(r, i) {
                    t = N.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || p.expando + "_" + xn++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && (nr.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        return u || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Tn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || p.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), o && p.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), p.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || N;
        var r = E.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r.childNodes))
    };
    var rr = p.fn.load;
    p.fn.load = function(e, t, n) {
        if ("string" != typeof e && rr) return rr.apply(this, arguments);
        var r, i, s, o = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), p.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (s = "POST"), o.length > 0 && p.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    }, p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    p.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = p.css(e, "position"),
                c = p(e),
                h = {};
            "static" === l && (e.style.position = "relative"), u = c.offset(), s = p.css(e, "top"), a = p.css(e, "left"), f = ("absolute" === l || "fixed" === l) && p.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), p.isFunction(t) && (t = t.call(e, n, u)), null != t.top && (h.top = t.top - u.top + o), null != t.left && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                s = i && i.ownerDocument;
            if (s) return t = s.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect !== j && (r = i.getBoundingClientRect()), n = sr(s), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === p.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - p.css(r, "marginTop", !0),
                    left: t.left - n.left - p.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || ir;
                while (e && !p.nodeName(e, "html") && "static" === p.css(e, "position")) e = e.offsetParent;
                return e || ir
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function(r) {
            return J(this, function(e, r, i) {
                var s = sr(e);
                return void 0 === i ? s ? t in s ? s[t] : s.document.documentElement[r] : e[r] : void(s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }), p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Ft(c.pixelPosition, function(e, n) {
            return n ? (n = Bt(e, t), Pt.test(n) ? p(e).position()[t] + "px" : n) : void 0
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            p.fn[r] = function(r, i) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return J(this, function(t, n, r) {
                    var i;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? p.css(t, n, o) : p.style(t, n, r, o)
                }, t, s ? r : void 0, s, null)
            }
        })
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var or = e.jQuery,
        ur = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = ur), t && e.jQuery === p && (e.jQuery = or), p
    }, typeof t === j && (e.jQuery = e.$ = p), p
}), define("lib-app/jquery", function() {}), define("storymaps/common/utils/Polyfills", [], function() {
    return {
        apply: function() {
            typeof String.prototype.trim != "function" && (String.prototype.trim = function() {
                    return this.replace(/^\s+|\s+$/g, "")
                }), Date.now || (Date.now = function() {
                    return (new Date).valueOf()
                }), Object.keys = Object.keys || function(e, t, n) {
                    n = [];
                    for (t in e) n.hasOwnProperty.call(e, t) && n.push(t);
                    return n
                },
                function() {
                    function n(e) {
                        this.message = e
                    }
                    var e = typeof exports != "undefined" ? exports : this,
                        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    n.prototype = new Error, n.prototype.name = "InvalidCharacterError", e.btoa || (e.btoa = function(e) {
                        var r = String(e);
                        for (var i, s, o = 0, u = t, a = ""; r.charAt(o | 0) || (u = "=", o % 1); a += u.charAt(63 & i >> 8 - o % 1 * 8)) {
                            s = r.charCodeAt(o += .75);
                            if (s > 255) throw new n("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                            i = i << 8 | s
                        }
                        return a
                    }), e.atob || (e.atob = function(e) {
                        var r = String(e).replace(/=+$/, "");
                        if (r.length % 4 == 1) throw new n("'atob' failed: The string to be decoded is not correctly encoded.");
                        for (var i = 0, s, o, u = 0, a = ""; o = r.charAt(u++); ~o && (s = i % 4 ? s * 64 + o : o, i++ % 4) ? a += String.fromCharCode(255 & s >> (-2 * i & 6)) : 0) o = t.indexOf(o);
                        return a
                    })
                }()
        }
    }
}), define("storymaps/common/utils/SocialSharing", ["dojo/Deferred", "esri/urlUtils"], function(e, t) {
    return {
        shareFacebook: function(e, t, n, r) {
            var i = this.cleanURL(r || document.location.href);
            window.open("http://www.facebook.com/sharer/sharer.php?u=" + i, "", "toolbar=0,status=0,width=626,height=436")
        },
        shareTwitter: function(e, t) {
            var n = "text=" + encodeURIComponent(e || "") + "&url=" + this.cleanURL(t || document.location.href) + "&related=EsriStoryMaps" + "&hashtags=storymap";
            window.open("https://twitter.com/intent/tweet?" + n, "", "toolbar=0,status=0,width=626,height=436")
        },
        requestBitly: function(t) {
            var n = ["http://api.bitly.com/v3/shorten?callback=?", "https://api-ssl.bitly.com/v3/shorten?callback=?"],
                r = location.protocol == "http:" ? n[0] : n[1],
                i = t || document.location.href,
                s = new e;
            return $.getJSON(r, {
                format: "json",
                apiKey: app.cfg.HEADER_SOCIAL.bitly.key,
                login: app.cfg.HEADER_SOCIAL.bitly.login,
                longUrl: i
            }, function(e) {
                !e || !e || !e.data.url ? s.reject() : s.resolve(e.data.url)
            }), s
        },
        cleanURL: function(e, n) {
            var r = t.urlToObject(e),
                i = r.path;
            return r.query && (delete r.query.edit, delete r.query.locale, delete r.query.folderId, delete r.query.webmap, delete r.query.autoplay, $.each(Object.keys(r.query), function(e, t) {
                e === 0 ? i += "?" : i += "&", r.query[t] !== undefined && r.query[t] !== "" ? i += t + "=" + r.query[t] : i += t
            })), n ? i : encodeURIComponent(i)
        }
    }
}), define("storymaps/common/utils/CommonHelper", ["dojo/cookie", "dojo/has", "dojo/Deferred", "dojo/DeferredList", "./SocialSharing", "esri/request", "esri/dijit/Search", "esri/tasks/locator", "esri/urlUtils", "esri/arcgis/utils", "esri/geometry/webMercatorUtils", "esri/geometry/Point", "esri/geometry/Extent", "esri/geometry/Polygon", "esri/layers/ArcGISDynamicMapServiceLayer", "esri/layers/ArcGISTiledMapServiceLayer", "esri/layers/OpenStreetMapLayer"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m) {
    return {
        isMobile: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/IEMobile/i)
        },
        switchToBuilder: function() {
            document.location.search.match(/appid/) ? document.location = i.cleanURL(document.location.protocol + "//" + document.location.host + document.location.pathname + document.location.search, !0) + "&edit" + document.location.hash : document.location.search.slice(-1) == "?" ? document.location = i.cleanURL(document.location.protocol + "//" + document.location.host + document.location.pathname, !0) + "?edit" + document.location.hash : document.location = i.cleanURL(document.location.protocol + "//" + document.location.host + document.location.pathname, !0) + "?edit" + document.location.hash
        },
        isArcGISHosted: function() {
            return /(\/)([a-zA-Z0-9]+(\/))*(apps\/|home\/)([a-zA-Z0-9\-\_]+\/)/.test(document.location.pathname)
        },
        browserSupportHistory: function() {
            return !!window.history && !!history.pushState
        },
        getUrlParams: function() {
            var e = a.urlToObject(document.location.search).query;
            return e ? e : !this.browserSupportHistory() && !e ? a.urlToObject(document.location.hash).query || {} : {}
        },
        getWebmapID: function(e) {
            var t = this.getUrlParams();
            if (app.indexCfg && app.indexCfg.webmap) return app.indexCfg.webmap;
            if (this.isArcGISHosted() || !e) return t.webmap;
            if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) return t.webmap
        },
        getAppID: function(e) {
            var t = this.getUrlParams();
            if (app.indexCfg && app.indexCfg.appid) return app.indexCfg.appid;
            if (this.isArcGISHosted() || !e) return t.appid;
            if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) return t.appid
        },
        getGraphicsLayerByName: function(e, t) {
            var n;
            for (var r = 0; r < e.graphicsLayerIds.length; r++) {
                n = e.getLayer(e.graphicsLayerIds[r]);
                if (n.name == t) return n
            }
            return null
        },
        getWebMapExtentFromItem: function(e) {
            if (!e.extent || e.extent.length != 2) return null;
            var t = l.geographicToWebMercator(new c(e.extent[0][0], e.extent[0][1])),
                n = l.geographicToWebMercator(new c(e.extent[1][0], e.extent[1][1]));
            return new h({
                xmax: n.x,
                xmin: t.x,
                ymax: n.y,
                ymin: t.y,
                spatialReference: {
                    wkid: 102100
                }
            })
        },
        serializeExtentToItem: function(e) {
            if (!e || !e.spatialReference) return null;
            var t = e.spatialReference.wkid == 4326 ? e : l.webMercatorToGeographic(e);
            return [
                [Math.round(t.xmin * 1e4) / 1e4, Math.round(t.ymin * 1e4) / 1e4],
                [Math.round(t.xmax * 1e4) / 1e4, Math.round(t.ymax * 1e4) / 1e4]
            ]
        },
        serializedExtentEquals: function(e, t) {
            return e && t && e.length == t.length && e.length == 2 && e[0][0] == t[0][0] && e[0][1] == t[0][1] && e[1][0] == t[1][0] && e[1][1] == t[1][1]
        },
        cloneLayer: function(e) {
            return e.url && e.url.match(/virtualearth\./) ? new v("http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer") : e instanceof v ? new v(e.url) : e instanceof d ? new d(e.url) : e.id == "OpenStreetMap" ? new m : new v("http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer")
        },
        extentToPolygon: function(e) {
            var t = new p(e.spatialReference);
            return t.addRing([
                [e.xmin, e.ymin],
                [e.xmin, e.ymax],
                [e.xmax, e.ymax],
                [e.xmax, e.ymin],
                [e.xmin, e.ymin]
            ]), t
        },
        getFirstLevelWhereExtentFit: function(e, t) {
            var n = t.width,
                r = t.height,
                i = t._params.lods;
            if (!i) return -1;
            for (var s = i.length - 1; s >= 0; s--)
                if (n * t._params.lods[s].resolution > e.getWidth() && r * t._params.lods[s].resolution > e.getHeight()) return s;
            return -1
        },
        getPortalUser: function() {
            var t = e("esri_auth");
            if (!t) return;
            t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'));
            if (t.urlKey && t.customBaseUrl && (t.urlKey + "." + t.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) return;
            return t ? t.email : null
        },
        getPortalRole: function() {
            var t = e("esri_auth");
            if (!t) return;
            t = JSON.parse(t.replace('"ssl":undefined', '"ssl":""'));
            if (t.urlKey && t.customBaseUrl && (t.urlKey + "." + t.customBaseUrl).toLowerCase() != document.location.hostname.toLowerCase()) return;
            return t ? t.role : null
        },
        getAppViewModeURL: function() {
            return document.location.protocol + "//" + document.location.host + document.location.pathname + "?appid=" + app.data.getWebAppItem().id
        },
        getWebmapViewerLinkFromSharingURL: function(e) {
            var t = e.split("/sharing/")[0];
            return t + "/home/webmap/viewer.html"
        },
        getPortalURL: function() {
            return f.arcgisUrl.split("/sharing/")[0]
        },
        getItemURL: function(e) {
            return this.getPortalURL() + "/home/item.html?id=" + e
        },
        getMyContentURL: function() {
            return this.getPortalURL() + "/home/content.html"
        },
        getMyStoriesURL: function() {
            return app.isPortal ? this.getPortalURL() + "/apps/MyStories/" : "//storymaps.arcgis.com/en/my-stories/"
        },
        browserSupportAttachementUsingFileReader: function() {
            return !!window.FileReader && !!window.FormData && !!this.browserSupportCanvas() && !!window.Blob
        },
        browserSupportCanvas: function() {
            var e = document.createElement("canvas");
            return !!e.getContext && !!e.getContext("2d")
        },
        browserSupportFileReaderBinaryString: function() {
            if (!window.FileReader) return !1;
            var e = new window.FileReader;
            return "readAsArrayBuffer" in e
        },
        getBinaryStringFromArrayBuffer: function(e) {
            var t = new Uint8Array(e),
                n = "";
            for (var r = 0; r < t.length; r++) n += String.fromCharCode(t[r]);
            return n
        },
        addCSSRule: function(e, n, r) {
            var i = "head";
            if (t("ie") <= 8) return;
            r && (i = r.contents().find("head"));
            if (n) {
                var s = $(i).find("#" + n).eq(0);
                if (s.length) {
                    s.html(e);
                    return
                }
            }
            $("<style>").prop("type", "text/css").attr("id", n).html(e).appendTo(i)
        },
        hex2rgba: function(e, t) {
            if (!e || e === "") return "";
            var n = e.replace("#", "").match(/../g),
                r = [],
                i;
            for (i in n) r.push(parseInt(n[i], 16));
            return r.push(t), "rgba(" + r.join() + ")"
        },
        prependURLHTTP: function(e) {
            return !e || e === "" || e.match(/^mailto:/) ? e : /^(https?:\/\/)|^(\/\/)/i.test(e) ? e : "http://" + e
        },
        convertURLHTTPS: function(e) {
            return !e || e === "" || e.match(/^mailto:/) ? e : (e = e.replace(/http:\/\//, "https://"), e = e.replace(/^\/\//, "https://"), /^(https:\/\/)/i.test(e) ? e : "https://" + e)
        },
        convertURLHTTP: function(e) {
            return !e || e === "" || e.match(/^mailto:/) ? e : (e = e.replace(/https:\/\//, "http://"), e = e.replace(/^\/\//, "http://"), /^(http:\/\/)/i.test(e) ? e : "http://" + e)
        },
        checkImageURL: function(e) {
            return e && e.match(/((\.png)|(\.jp(e)?g))$/i)
        },
        createGeocoder: function(e) {
            var t = new n;
            if (!e || !e.map || !e.domNode) return t.resolve(), t;
            if (!app.cfg.HELPER_SERVICES.geocode) return t.resolve(), t;
            var i = [];
            $.each(app.cfg.HELPER_SERVICES.geocode, function(e, t) {
                var n = s({
                    url: t.url,
                    content: {
                        f: "json"
                    },
                    handleAs: "json",
                    callbackParamName: "callback"
                });
                i.push(n)
            });
            var a = new r(i);
            return a.then(function(n) {
                var r = [];
                $.each(n, function(e, t) {
                    if (!t[0]) return;
                    if (!t[1] || !t[1].singleLineAddressField) return;
                    var n = {};
                    n.singleLineFieldName = t[1].singleLineAddressField.name;
                    var i = new u(app.cfg.HELPER_SERVICES.geocode[e].url);
                    n.name = app.cfg.HELPER_SERVICES.geocode[e].name ? app.cfg.HELPER_SERVICES.geocode[e].name : t[1].name, n.locator = i, r.push(n)
                });
                if (r.length) {
                    var i = new o({
                            map: e.map,
                            sources: [],
                            allPlaceholder: e.placeHolder,
                            enableButtonMode: e.enableButtonMode
                        }, e.domNode),
                        s = i.get("sources");
                    $.each(r, function(e, t) {
                        s.push(t)
                    }), i.set("sources", s), i.startup(), t.resolve(i)
                }
            }), t
        },
        debounce: function(e, t, n) {
            var r;
            return function() {
                var i = this,
                    s = arguments;
                clearTimeout(r), r = setTimeout(function() {
                    r = null, n || e.apply(i, s)
                }, t), n && !r && e.apply(i, s)
            }
        },
        findDifferences: function(e, t) {
            var n = [],
                r = ["this"];
            return function(e, t) {
                if (e.constructor == Array)
                    if (!t || t.constructor != Array || t.length != e.length) n.push({
                        Property: r.join(""),
                        ObjectA: e,
                        ObjectB: t
                    });
                    else
                        for (var i = 0; i < e.length; i++) r.push("[" + i.toString() + "]"), arguments.callee(e[i], t[i]), r.pop();
                else if (e.constructor == Object || e.constructor != Number && e.constructor != String && e.constructor != Date && e.constructor != RegExp && e.constructor != Function && e.constructor != Boolean)
                    for (var s in e) r.push("." + s), t[s] ? e[s] && e[s].constructor != Function && arguments.callee(e[s], t[s]) : n.push({
                        Property: r.join(""),
                        ObjectA: e[s],
                        ObjectB: null
                    }), r.pop();
                else e.constructor != Function && e != t && n.push({
                    Property: r.join(""),
                    ObjectA: e,
                    ObjectB: t
                })
            }(e, t), n
        }
    }
}), define("storymaps/common/builder/PortalVersionTest", ["esri/arcgis/utils", "dojo/Deferred"], function(e, t) {
    function n() {
        return e.arcgisUrl.split("/sharing/")[0]
    }
    return {
        run: function() {
            var e = new t,
                r = null;
            app.portal.hasMyStories = null;
            var i = new Image,
                s = app.isProduction ? n() + "/apps/" : "../";
            return i.src = s + "MyStories/assets/my-stories-portal-detector.png", i.onload = function() {
                app.portal.hasMyStories = !0, r && clearTimeout(r), e.resolve()
            }, i.onerror = i.onabort = function() {
                app.portal.hasMyStories = !1, r && clearTimeout(r), e.reject()
            }, r = setTimeout(function() {
                e.reject()
            }, 2e3), e
        }
    }
}), define("storymaps/common/builder/MyStoriesWrapper", ["./PortalVersionTest", "esri/IdentityManager", "storymaps/common/utils/CommonHelper", "dojo/topic"], function(e, t, n, r) {
    function i() {
        e.run().then(function() {
            app.isProduction && !f() ? s() : o()
        }, s)
    }

    function s() {
        $(".check-story").hide()
    }

    function o() {
        window.myStoriesInit = u, r.publish("MYSTORIES_SCAN", "start");
        var e = "../MyStories/index.html?fromBuilder";
        e += "&locale=" + dojo.locale, setTimeout(function() {
            $("#my-stories-frame").attr("src", e)
        }, 1e3)
    }

    function u() {
        var e = $("#my-stories-frame")[0].contentWindow;
        if (!e || !e.init || !e.check || !e.share) {
            console.error("Failed to load My Stories");
            return
        }
        if (!app.data.getStoryLength()) {
            console.log("Skipping the initialization of My Stories until the story has content");
            return
        }
        app.mystories = {
            init: e.init,
            check: e.check,
            share: e.share,
            isChecking: !1,
            hasCheckErrors: !1,
            hasScanErrors: !1
        }, app.mystories.init(app.isInBuilder ? t.toJson() : null, app.isDirectCreationFirstSave || app.isGalleryCreation ? null : app.data.getWebAppItem(), app.cfg.TPL_ID, app.isPortal, function(e, t, n) {
            r.publish("MY-STORIES-EDIT-MEDIA", {
                index: e,
                type: t,
                actionId: n
            })
        }, function(e) {
            r.publish("MY-STORIES-EDIT-MAP", {
                id: e
            })
        }, function() {
            app.mystories.hasCheckErrors = !1, r.publish("MY-STORIES-REFRESH")
        }, function(e) {
            e = e || {
                completed: !1,
                ignoreAllIssues: !1
            }, app.mystories.hasCheckErrors = !e.ignoreAllIssues, app.mystories.forcedIgnoreIssues = e.ignoreAllIssues, r.publish("MY-STORIES-REFRESH")
        }).then(a, function() {
            console.error("Failed to initialize My Stories")
        })
    }

    function a() {
        if (!app.mystories) return;
        if (!app.mystories.init) {
            u();
            return
        }
        app.mystories.isChecking = !0, app.mystories.hasCheckErrors = !1, r.publish("MYSTORIES_SCAN", "start"), app.mystories.check(app.data.getWebAppData().get()).then(function(e) {
            e = e || {
                ignoreAllIssues: !1
            }, app.mystories.isChecking = !1, app.mystories.hasCheckErrors = !1, app.mystories.forcedIgnoreIssues = e.ignoreAllIssues, r.publish("MYSTORIES_SCAN", "success"), $("#sharePopup").is(":visible") && app.builder.openSharePopup()
        }, function(e) {
            e = e || {
                completed: !1,
                ignoreAllIssues: !1
            }, app.mystories.isChecking = !1, app.mystories.hasCheckErrors = !0, app.mystories.forcedIgnoreIssues = e.ignoreAllIssues, r.publish("MYSTORIES_SCAN", "error"), $("#sharePopup").is(":visible") && app.builder.openSharePopup()
        })
    }

    function f() {
        var e = n.getPortalURL().split("//").slice(-1)[0],
            t = e.split("."),
            r = document.location.host,
            i = r.split(".");
        return e == r || e.split("/").length > 1 && e.split("/")[0] == r ? !0 : i.length < 3 ? r == e : i.slice(1).join(".") == t.slice(-2).join(".")
    }
    return {
        loadMyStories: i,
        scanStory: a,
        myStoriesIsSameDomain: f
    }
}), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case "button":
        case "select":
        case "textarea":
            if (e.disabled) return !0;
            break;
        case "input":
            if (this.deviceIsIOS && e.type === "file" || e.disabled) return !0;
            break;
        case "label":
        case "video":
            return !0
    }
    return /\bneedsclick\b/.test(e.className)
}, FastClick.prototype.needsFocus = function(e) {
    "use strict";
    switch (e.nodeName.toLowerCase()) {
        case "textarea":
            return !0;
        case "select":
            return !this.deviceIsAndroid;
        case "input":
            switch (e.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
            }
            return !e.disabled && !e.readOnly;
        default:
            return /\bneedsfocus\b/.test(e.className)
    }
}, FastClick.prototype.sendClick = function(e, t) {
    "use strict";
    var n, r;
    document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
}, FastClick.prototype.determineEventType = function(e) {
    "use strict";
    return this.deviceIsAndroid && e.tagName.toLowerCase() === "select" ? "mousedown" : "click"
}, FastClick.prototype.focus = function(e) {
    "use strict";
    var t;
    this.deviceIsIOS && e.setSelectionRange && e.type.indexOf("date") !== 0 && e.type !== "time" ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
}, FastClick.prototype.updateScrollParent = function(e) {
    "use strict";
    var t, n;
    t = e.fastClickScrollParent;
    if (!t || !t.contains(e)) {
        n = e;
        do {
            if (n.scrollHeight > n.offsetHeight) {
                t = n, e.fastClickScrollParent = n;
                break
            }
            n = n.parentElement
        } while (n)
    }
    t && (t.fastClickLastScrollTop = t.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
    "use strict";
    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
}, FastClick.prototype.onTouchStart = function(e) {
    "use strict";
    var t, n, r;
    if (e.targetTouches.length > 1) return !0;
    t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0];
    if (this.deviceIsIOS) {
        r = window.getSelection();
        if (r.rangeCount && !r.isCollapsed) return !0;
        if (!this.deviceIsIOS4) {
            if (n.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
            this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
        }
    }
    return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(e) {
    "use strict";
    var t = e.changedTouches[0],
        n = this.touchBoundary;
    return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n ? !0 : !1
}, FastClick.prototype.onTouchMove = function(e) {
    "use strict";
    if (!this.trackingClick) return !0;
    if (this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) this.trackingClick = !1, this.targetElement = null;
    return !0
}, FastClick.prototype.findControl = function(e) {
    "use strict";
    return e.control !== undefined ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(e) {
    "use strict";
    var t, n, r, i, s, o = this.targetElement;
    if (!this.trackingClick) return !0;
    if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
    this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (s = e.changedTouches[0], o = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || o, o.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = o.tagName.toLowerCase();
    if (r === "label") {
        t = this.findControl(o);
        if (t) {
            this.focus(o);
            if (this.deviceIsAndroid) return !1;
            o = t
        }
    } else if (this.needsFocus(o)) {
        if (e.timeStamp - n > 100 || this.deviceIsIOS && window.top !== window && r === "input") return this.targetElement = null, !1;
        this.focus(o);
        if (!this.deviceIsIOS4 || r !== "select") this.targetElement = null, e.preventDefault();
        return !1
    }
    if (this.deviceIsIOS && !this.deviceIsIOS4) {
        i = o.fastClickScrollParent;
        if (i && i.fastClickLastScrollTop !== i.scrollTop) return !0
    }
    return this.needsClick(o) || (e.preventDefault(), this.sendClick(o, e)), !1
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick = !1, this.targetElement = null
}, FastClick.prototype.onMouse = function(e) {
    "use strict";
    return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable ? !this.needsClick(this.targetElement) || this.cancelNextClick ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0 : !0
}, FastClick.prototype.onClick = function(e) {
    "use strict";
    var t;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : e.target.type === "submit" && e.detail === 0 ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var e = this.layer;
    this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(e) {
    "use strict";
    var t, n;
    if (typeof window.ontouchstart == "undefined") return !0;
    n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
    if (n) {
        if (!FastClick.prototype.deviceIsAndroid) return !0;
        t = document.querySelector("meta[name=viewport]");
        if (t) {
            if (t.content.indexOf("user-scalable=no") !== -1) return !0;
            if (n > 31 && window.innerWidth <= window.screen.width) return !0
        }
    }
    return e.style.msTouchAction === "none" ? !0 : !1
}, FastClick.attach = function(e) {
    "use strict";
    return new FastClick(e)
}, typeof define != "undefined" && define.amd ? define("lib-app/jquery.fastClick", [], function() {
    "use strict";
    return FastClick
}) : typeof module != "undefined" && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick;
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(i).remove(), e(s).each(function() {
            var r = e(this),
                i = t(r),
                s = {
                    relatedTarget: this
                };
            i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(i[0], n.target) || (i.trigger(n = e.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function r(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new o(this)), "string" == typeof t && r[t].call(n)
        })
    }
    var i = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.5", o.prototype.toggle = function(r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var s = t(i),
                o = s.hasClass("open");
            if (n(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var u = {
                    relatedTarget: this
                };
                if (s.trigger(r = e.Event("show.bs.dropdown", u)), r.isDefaultPrevented()) return;
                i.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", u)
            }
            return !1
        }
    }, o.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var r = e(this);
            if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                var i = t(r),
                    o = i.hasClass("open");
                if (!o && 27 != n.which || o && 27 == n.which) return 27 == n.which && i.find(s).trigger("focus"), r.trigger("click");
                var u = " li:not(.disabled):visible a",
                    a = i.find(".dropdown-menu" + u);
                if (a.length) {
                    var f = a.index(n.target);
                    38 == n.which && f > 0 && f--, 40 == n.which && f < a.length - 1 && f++, ~f || (f = 0), a.eq(f).trigger("focus")
                }
            }
        }
    };
    var u = e.fn.dropdown;
    e.fn.dropdown = r, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = u, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(e) {
    "use strict";

    function t(t, r) {
        return this.each(function() {
            var s = e(this),
                u = s.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, s.data(), "object" == typeof t && t);
            u || s.data("bs.modal", u = new n(this, a)), "string" == typeof t ? u[t](r) : a.show && u.show(r)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var r = this,
            s = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var s = e.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), s && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
            var u = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            s ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(u)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var r = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = e.support.transition && s;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            o ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var u = function() {
                r.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : u()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var r = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = r, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var r = e(this),
            i = r.attr("href"),
            s = e(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(i) && i
            }, s.data(), r.data());
        r.is("a") && n.preventDefault(), s.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        }), t.call(s, o, this)
    })
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var r = e(this),
                s = r.data("bs.tooltip"),
                o = "object" == typeof t && t;
            (s || !/destroy|hide/.test(t)) && (s || r.data("bs.tooltip", s = new n(this, o)), "string" == typeof t && s[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, r) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), s = i.length; s--;) {
            var o = i[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != o) {
                var u = "hover" == o ? "mouseenter" : "focusin",
                    a = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var r = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !r) return;
            var s = this,
                o = this.tip(),
                u = this.getUID(this.type);
            this.setContent(), o.attr("id", u), this.$element.attr("aria-describedby", u), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                f = /\s?auto?\s?/i,
                l = f.test(a);
            l && (a = a.replace(f, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = o[0].offsetWidth,
                p = o[0].offsetHeight;
            if (l) {
                var d = a,
                    v = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > v.bottom ? "top" : "top" == a && c.top - p < v.top ? "bottom" : "right" == a && c.right + h > v.width ? "left" : "left" == a && c.left - h < v.left ? "right" : a, o.removeClass(d).addClass(a)
            }
            var m = this.getCalculatedOffset(a, c, h, p);
            this.applyPlacement(m, a);
            var g = function() {
                var e = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == e && s.leave(s)
            };
            e.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            s = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            u = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(u) && (u = 0), t.top += o, t.left += u, e.offset.setOffset(r[0], e.extend({
            using: function(e) {
                r.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), r.addClass("in");
        var a = r[0].offsetWidth,
            f = r[0].offsetHeight;
        "top" == n && f != s && (t.top = t.top + s - f);
        var l = this.getViewportAdjustedDelta(n, t, a, f);
        l.left ? t.left += l.left : t.top += l.top;
        var c = /top|bottom/.test(n),
            h = c ? 2 * l.left - i + a : 2 * l.top - s + f,
            p = c ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(h, r[0][p], c)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function r() {
            "in" != s.hoverState && o.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), t && t()
        }
        var s = this,
            o = e(this.$tip),
            u = e.Event("hide.bs." + this.type);
        return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            r = "BODY" == n.tagName,
            i = n.getBoundingClientRect();
        null == i.width && (i = e.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var s = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            o = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            u = r ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, i, o, u, s)
    }, n.prototype.getCalculatedOffset = function(e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var u = t.top - s - o.scroll,
                a = t.top + s - o.scroll + r;
            u < o.top ? i.top = o.top - u : a > o.top + o.height && (i.top = o.top + o.height - a)
        } else {
            var f = t.left - s,
                l = t.left + s + n;
            f < o.left ? i.left = o.left - f : l > o.right && (i.left = o.left + o.width - l)
        }
        return i
    }, n.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, n.prototype.getUID = function(e) {
        do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && (n = e(t.currentTarget).data("bs." + this.type), n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null
        })
    };
    var r = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = r, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var r = e(this),
                s = r.data("bs.popover"),
                o = "object" == typeof t && t;
            (s || !/destroy|hide/.test(t)) && (s || r.data("bs.popover", s = new n(this, o)), "string" == typeof t && s[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var r = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = r, this
    }
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new n(this)), "string" == typeof t && i[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a"),
                s = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = e.Event("show.bs.tab", {
                    relatedTarget: i[0]
                });
            if (i.trigger(s), t.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var u = e(r);
                this.activate(t.closest("li"), n), this.activate(u, u.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, r, i) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), u ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
        }
        var o = r.find("> .active"),
            u = i && e.support.transition && (o.length && o.hasClass("fade") || !!r.find("> .fade").length);
        o.length && u ? o.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), o.removeClass("in")
    };
    var r = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = r, this
    };
    var i = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), + function(e) {
    "use strict";

    function t(t) {
        var n, r = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(r)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.collapse"),
                s = e.extend({}, r.DEFAULTS, n.data(), "object" == typeof t && t);
            !i && s.toggle && /show|hide/.test(t) && (s.toggle = !1), i || n.data("bs.collapse", i = new r(this, s)), "string" == typeof t && i[t]()
        })
    }
    var r = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, r.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    r.VERSION = "3.3.5", r.TRANSITION_DURATION = 350, r.DEFAULTS = {
        toggle: !0
    }, r.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, r.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(i && i.length && (t = i.data("bs.collapse"), t && t.transitioning))) {
                var s = e.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    i && i.length && (n.call(i, "hide"), t || i.data("bs.collapse", null));
                    var u = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[u](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return a.call(this);
                    var f = e.camelCase(["scroll", u].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(a, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[u](this.$element[0][f])
                }
            }
        }
    }, r.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var i = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return e.support.transition ? void this.$element[n](0).one("bsTransitionEnd", e.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
            }
        }
    }, r.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, r.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, r) {
            var i = e(r);
            this.addAriaAndCollapsedClass(t(i), i)
        }, this)).end()
    }, r.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var i = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = r, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = i, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(r) {
        var i = e(this);
        i.attr("data-target") || r.preventDefault();
        var s = t(i),
            o = s.data("bs.collapse"),
            u = o ? "toggle" : i.data();
        n.call(s, u)
    })
}(jQuery), + function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            r = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), define("lib-app/bootstrap/js/bootstrap.min", function() {}), typeof JSON != "object" && (JSON = {}),
    function() {
        "use strict";

        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function quote(e) {
            return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                var t = meta[e];
                return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, r, i, s, o = gap,
                u, a = t[e];
            a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
            switch (typeof a) {
                case "string":
                    return quote(a);
                case "number":
                    return isFinite(a) ? String(a) : "null";
                case "boolean":
                case "null":
                    return String(a);
                case "object":
                    if (!a) return "null";
                    gap += indent, u = [];
                    if (Object.prototype.toString.apply(a) === "[object Array]") {
                        s = a.length;
                        for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                        return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                    }
                    if (rep && typeof rep == "object") {
                        s = rep.length;
                        for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                    } else
                        for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                    return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
            }
        }
        typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
            return this.valueOf()
        });
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
            var r;
            gap = "", indent = "";
            if (typeof n == "number")
                for (r = 0; r < n; r += 1) indent += " ";
            else typeof n == "string" && (indent = n);
            rep = t;
            if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
                "": e
            });
            throw new Error("JSON.stringify")
        }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var n, r, i = e[t];
                if (i && typeof i == "object")
                    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                return reviver.call(e, t, i)
            }
            var j;
            text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(e, t) {
        "use strict";
        var n = e.History = e.History || {};
        if (typeof n.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
        n.Adapter = {
            handlers: {},
            _uid: 1,
            uid: function(e) {
                return e._uid || (e._uid = n.Adapter._uid++)
            },
            bind: function(e, t, r) {
                var i = n.Adapter.uid(e);
                n.Adapter.handlers[i] = n.Adapter.handlers[i] || {}, n.Adapter.handlers[i][t] = n.Adapter.handlers[i][t] || [], n.Adapter.handlers[i][t].push(r), e["on" + t] = function(e, t) {
                    return function(r) {
                        n.Adapter.trigger(e, t, r)
                    }
                }(e, t)
            },
            trigger: function(e, t, r) {
                r = r || {};
                var i = n.Adapter.uid(e),
                    s, o;
                n.Adapter.handlers[i] = n.Adapter.handlers[i] || {}, n.Adapter.handlers[i][t] = n.Adapter.handlers[i][t] || [];
                for (s = 0, o = n.Adapter.handlers[i][t].length; s < o; ++s) n.Adapter.handlers[i][t][s].apply(this, [r])
            },
            extractEventData: function(e, n) {
                var r = n && n[e] || t;
                return r
            },
            onDomLoad: function(t) {
                var n = e.setTimeout(function() {
                    t()
                }, 2e3);
                e.onload = function() {
                    clearTimeout(n), t()
                }
            }
        }, typeof n.init != "undefined" && n.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.document,
            r = e.setTimeout || r,
            i = e.clearTimeout || i,
            s = e.setInterval || s,
            o = e.History = e.History || {};
        if (typeof o.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
        o.initHtml4 = function() {
            if (typeof o.initHtml4.initialized != "undefined") return !1;
            o.initHtml4.initialized = !0, o.enabled = !0, o.savedHashes = [], o.isLastHash = function(e) {
                var t = o.getHashByIndex(),
                    n;
                return n = e === t, n
            }, o.isHashEqual = function(e, t) {
                return e = encodeURIComponent(e).replace(/%25/g, "%"), t = encodeURIComponent(t).replace(/%25/g, "%"), e === t
            }, o.saveHash = function(e) {
                return o.isLastHash(e) ? !1 : (o.savedHashes.push(e), !0)
            }, o.getHashByIndex = function(e) {
                var t = null;
                return typeof e == "undefined" ? t = o.savedHashes[o.savedHashes.length - 1] : e < 0 ? t = o.savedHashes[o.savedHashes.length + e] : t = o.savedHashes[e], t
            }, o.discardedHashes = {}, o.discardedStates = {}, o.discardState = function(e, t, n) {
                var r = o.getHashByState(e),
                    i;
                return i = {
                    discardedState: e,
                    backState: n,
                    forwardState: t
                }, o.discardedStates[r] = i, !0
            }, o.discardHash = function(e, t, n) {
                var r = {
                    discardedHash: e,
                    backState: n,
                    forwardState: t
                };
                return o.discardedHashes[e] = r, !0
            }, o.discardedState = function(e) {
                var t = o.getHashByState(e),
                    n;
                return n = o.discardedStates[t] || !1, n
            }, o.discardedHash = function(e) {
                var t = o.discardedHashes[e] || !1;
                return t
            }, o.recycleState = function(e) {
                var t = o.getHashByState(e);
                return o.discardedState(e) && delete o.discardedStates[t], !0
            }, o.emulated.hashChange && (o.hashChangeInit = function() {
                o.checkerFunction = null;
                var t = "",
                    r, i, u, a, f = Boolean(o.getHash());
                return o.isInternetExplorer() ? (r = "historyjs-iframe", i = n.createElement("iframe"), i.setAttribute("id", r), i.setAttribute("src", "#"), i.style.display = "none", n.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), u = "", a = !1, o.checkerFunction = function() {
                    if (a) return !1;
                    a = !0;
                    var n = o.getHash(),
                        r = o.getHash(i.contentWindow.document);
                    return n !== t ? (t = n, r !== n && (u = r = n, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = o.escapeHash(n)), o.Adapter.trigger(e, "hashchange")) : r !== u && (u = r, f && r === "" ? o.back() : o.setHash(r, !1)), a = !1, !0
                }) : o.checkerFunction = function() {
                    var n = o.getHash() || "";
                    return n !== t && (t = n, o.Adapter.trigger(e, "hashchange")), !0
                }, o.intervalList.push(s(o.checkerFunction, o.options.hashChangeInterval)), !0
            }, o.Adapter.onDomLoad(o.hashChangeInit)), o.emulated.pushState && (o.onHashChange = function(t) {
                var n = t && t.newURL || o.getLocationHref(),
                    r = o.getHashByUrl(n),
                    i = null,
                    s = null,
                    u = null,
                    a;
                return o.isLastHash(r) ? (o.busy(!1), !1) : (o.doubleCheckComplete(), o.saveHash(r), r && o.isTraditionalAnchor(r) ? (o.Adapter.trigger(e, "anchorchange"), o.busy(!1), !1) : (i = o.extractState(o.getFullUrl(r || o.getLocationHref()), !0), o.isLastSavedState(i) ? (o.busy(!1), !1) : (s = o.getHashByState(i), a = o.discardedState(i), a ? (o.getHashByIndex(-2) === o.getHashByState(a.forwardState) ? o.back(!1) : o.forward(!1), !1) : (o.pushState(i.data, i.title, encodeURI(i.url), !1), !0))))
            }, o.Adapter.bind(e, "hashchange", o.onHashChange), o.pushState = function(t, n, r, i) {
                r = encodeURI(r).replace(/%25/g, "%");
                if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                o.busy(!0);
                var s = o.createStateObject(t, n, r),
                    u = o.getHashByState(s),
                    a = o.getState(!1),
                    f = o.getHashByState(a),
                    l = o.getHash(),
                    c = o.expectedStateId == s.id;
                return o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), u === f ? (o.busy(!1), !1) : (o.saveState(s), c || o.Adapter.trigger(e, "statechange"), !o.isHashEqual(u, l) && !o.isHashEqual(u, o.getShortUrl(o.getLocationHref())) && o.setHash(u, !1), o.busy(!1), !0)
            }, o.replaceState = function(t, n, r, i) {
                r = encodeURI(r).replace(/%25/g, "%");
                if (o.getHashByUrl(r)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");
                if (i !== !1 && o.busy()) return o.pushQueue({
                    scope: o,
                    callback: o.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                o.busy(!0);
                var s = o.createStateObject(t, n, r),
                    u = o.getHashByState(s),
                    a = o.getState(!1),
                    f = o.getHashByState(a),
                    l = o.getStateByIndex(-2);
                return o.discardState(a, s, l), u === f ? (o.storeState(s), o.expectedStateId = s.id, o.recycleState(s), o.setTitle(s), o.saveState(s), o.Adapter.trigger(e, "statechange"), o.busy(!1)) : o.pushState(s.data, s.title, s.url, !1), !0
            }), o.emulated.pushState && o.getHash() && !o.emulated.hashChange && o.Adapter.onDomLoad(function() {
                o.Adapter.trigger(e, "hashchange")
            })
        }, typeof o.init != "undefined" && o.init()
    }(window),
    function(e, t) {
        "use strict";
        var n = e.console || t,
            r = e.document,
            i = e.navigator,
            s = !1,
            o = e.setTimeout,
            u = e.clearTimeout,
            a = e.setInterval,
            f = e.clearInterval,
            l = e.JSON,
            c = e.alert,
            h = e.History = e.History || {},
            p = e.history;
        try {
            s = e.sessionStorage, s.setItem("TEST", "1"), s.removeItem("TEST")
        } catch (d) {
            s = !1
        }
        l.stringify = l.stringify || l.encode, l.parse = l.parse || l.decode;
        if (typeof h.init != "undefined") throw new Error("History.js Core has already been loaded...");
        h.init = function(e) {
            return typeof h.Adapter == "undefined" ? !1 : (typeof h.initCore != "undefined" && h.initCore(), typeof h.initHtml4 != "undefined" && h.initHtml4(), !0)
        }, h.initCore = function(d) {
            if (typeof h.initCore.initialized != "undefined") return !1;
            h.initCore.initialized = !0, h.options = h.options || {}, h.options.hashChangeInterval = h.options.hashChangeInterval || 100, h.options.safariPollInterval = h.options.safariPollInterval || 500, h.options.doubleCheckInterval = h.options.doubleCheckInterval || 500, h.options.disableSuid = h.options.disableSuid || !1, h.options.storeInterval = h.options.storeInterval || 1e3, h.options.busyDelay = h.options.busyDelay || 250, h.options.debug = h.options.debug || !1, h.options.initialTitle = h.options.initialTitle || r.title, h.options.html4Mode = h.options.html4Mode || !1, h.options.delayInit = h.options.delayInit || !1, h.intervalList = [], h.clearAllIntervals = function() {
                var e, t = h.intervalList;
                if (typeof t != "undefined" && t !== null) {
                    for (e = 0; e < t.length; e++) f(t[e]);
                    h.intervalList = null
                }
            }, h.debug = function() {
                (h.options.debug || !1) && h.log.apply(h, arguments)
            }, h.log = function() {
                var e = typeof n != "undefined" && typeof n.log != "undefined" && typeof n.log.apply != "undefined",
                    t = r.getElementById("log"),
                    i, s, o, u, a;
                e ? (u = Array.prototype.slice.call(arguments), i = u.shift(), typeof n.debug != "undefined" ? n.debug.apply(n, [i, u]) : n.log.apply(n, [i, u])) : i = "\n" + arguments[0] + "\n";
                for (s = 1, o = arguments.length; s < o; ++s) {
                    a = arguments[s];
                    if (typeof a == "object" && typeof l != "undefined") try {
                        a = l.stringify(a)
                    } catch (f) {}
                    i += "\n" + a + "\n"
                }
                return t ? (t.value += i + "\n-----\n", t.scrollTop = t.scrollHeight - t.clientHeight) : e || c(i), !0
            }, h.getInternetExplorerMajorVersion = function() {
                var e = h.getInternetExplorerMajorVersion.cached = typeof h.getInternetExplorerMajorVersion.cached != "undefined" ? h.getInternetExplorerMajorVersion.cached : function() {
                    var e = 3,
                        t = r.createElement("div"),
                        n = t.getElementsByTagName("i");
                    while ((t.innerHTML = "<!--[if gt IE " + ++e + "]><i></i><![endif]-->") && n[0]);
                    return e > 4 ? e : !1
                }();
                return e
            }, h.isInternetExplorer = function() {
                var e = h.isInternetExplorer.cached = typeof h.isInternetExplorer.cached != "undefined" ? h.isInternetExplorer.cached : Boolean(h.getInternetExplorerMajorVersion());
                return e
            }, h.options.html4Mode ? h.emulated = {
                pushState: !0,
                hashChange: !0
            } : h.emulated = {
                pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(i.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(i.userAgent)),
                hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8)
            }, h.enabled = !h.emulated.pushState, h.bugs = {
                setHash: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                safariPoll: Boolean(!h.emulated.pushState && i.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(i.userAgent)),
                ieDoubleCheck: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 8),
                hashEscape: Boolean(h.isInternetExplorer() && h.getInternetExplorerMajorVersion() < 7)
            }, h.isEmptyObject = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) return !1;
                return !0
            }, h.cloneObject = function(e) {
                var t, n;
                return e ? (t = l.stringify(e), n = l.parse(t)) : n = {}, n
            }, h.getRootUrl = function() {
                var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);
                if (r.location.port || !1) e += ":" + r.location.port;
                return e += "/", e
            }, h.getBaseHref = function() {
                var e = r.getElementsByTagName("base"),
                    t = null,
                    n = "";
                return e.length === 1 && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), n = n.replace(/\/+$/, ""), n && (n += "/"), n
            }, h.getBaseUrl = function() {
                var e = h.getBaseHref() || h.getBasePageUrl() || h.getRootUrl();
                return e
            }, h.getPageUrl = function() {
                var e = h.getState(!1, !1),
                    t = (e || {}).url || h.getLocationHref(),
                    n;
                return n = t.replace(/\/+$/, "").replace(/[^\/]+$/, function(e, t, n) {
                    return /\./.test(e) ? e : e + "/"
                }), n
            }, h.getBasePageUrl = function() {
                var e = h.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function(e, t, n) {
                    return /[^\/]$/.test(e) ? "" : e
                }).replace(/\/+$/, "") + "/";
                return e
            }, h.getFullUrl = function(e, t) {
                var n = e,
                    r = e.substring(0, 1);
                return t = typeof t == "undefined" ? !0 : t, /[a-z]+\:\/\//.test(e) || (r === "/" ? n = h.getRootUrl() + e.replace(/^\/+/, "") : r === "#" ? n = h.getPageUrl().replace(/#.*/, "") + e : r === "?" ? n = h.getPageUrl().replace(/[\?#].*/, "") + e : t ? n = h.getBaseUrl() + e.replace(/^(\.\/)+/, "") : n = h.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "")
            }, h.getShortUrl = function(e) {
                var t = e,
                    n = h.getBaseUrl(),
                    r = h.getRootUrl();
                return h.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), h.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), t
            }, h.getLocationHref = function(e) {
                return e = e || r, e.URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : e.URL.indexOf("#") == -1 && e.location.href.indexOf("#") != -1 ? e.location.href : e.URL || e.location.href
            }, h.store = {}, h.idToState = h.idToState || {}, h.stateToId = h.stateToId || {}, h.urlToId = h.urlToId || {}, h.storedStates = h.storedStates || [], h.savedStates = h.savedStates || [], h.normalizeStore = function() {
                h.store.idToState = h.store.idToState || {}, h.store.urlToId = h.store.urlToId || {}, h.store.stateToId = h.store.stateToId || {}
            }, h.getState = function(e, t) {
                typeof e == "undefined" && (e = !0), typeof t == "undefined" && (t = !0);
                var n = h.getLastSavedState();
                return !n && t && (n = h.createStateObject()), e && (n = h.cloneObject(n), n.url = n.cleanUrl || n.url), n
            }, h.getIdByState = function(e) {
                var t = h.extractId(e.url),
                    n;
                if (!t) {
                    n = h.getStateString(e);
                    if (typeof h.stateToId[n] != "undefined") t = h.stateToId[n];
                    else if (typeof h.store.stateToId[n] != "undefined") t = h.store.stateToId[n];
                    else {
                        for (;;) {
                            t = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                            if (typeof h.idToState[t] == "undefined" && typeof h.store.idToState[t] == "undefined") break
                        }
                        h.stateToId[n] = t, h.idToState[t] = e
                    }
                }
                return t
            }, h.normalizeState = function(e) {
                var t, n;
                if (!e || typeof e != "object") e = {};
                if (typeof e.normalized != "undefined") return e;
                if (!e.data || typeof e.data != "object") e.data = {};
                return t = {}, t.normalized = !0, t.title = e.title || "", t.url = h.getFullUrl(e.url ? e.url : h.getLocationHref()), t.hash = h.getShortUrl(t.url), t.data = h.cloneObject(e.data), t.id = h.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !h.isEmptyObject(t.data), (t.title || n) && h.options.disableSuid !== !0 && (t.hash = h.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = h.getFullUrl(t.hash), (h.emulated.pushState || h.bugs.safariPoll) && h.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t
            }, h.createStateObject = function(e, t, n) {
                var r = {
                    data: e,
                    title: t,
                    url: n
                };
                return r = h.normalizeState(r), r
            }, h.getStateById = function(e) {
                e = String(e);
                var n = h.idToState[e] || h.store.idToState[e] || t;
                return n
            }, h.getStateString = function(e) {
                var t, n, r;
                return t = h.normalizeState(e), n = {
                    data: t.data,
                    title: e.title,
                    url: e.url
                }, r = l.stringify(n), r
            }, h.getStateId = function(e) {
                var t, n;
                return t = h.normalizeState(e), n = t.id, n
            }, h.getHashByState = function(e) {
                var t, n;
                return t = h.normalizeState(e), n = t.hash, n
            }, h.extractId = function(e) {
                var t, n, r, i;
                return e.indexOf("#") != -1 ? i = e.split("#")[0] : i = e, n = /(.*)\&_suid=([0-9]+)$/.exec(i), r = n ? n[1] || e : e, t = n ? String(n[2] || "") : "", t || !1
            }, h.isTraditionalAnchor = function(e) {
                var t = !/[\/\?\.]/.test(e);
                return t
            }, h.extractState = function(e, t) {
                var n = null,
                    r, i;
                return t = t || !1, r = h.extractId(e), r && (n = h.getStateById(r)), n || (i = h.getFullUrl(e), r = h.getIdByUrl(i) || !1, r && (n = h.getStateById(r)), !n && t && !h.isTraditionalAnchor(e) && (n = h.createStateObject(null, null, i))), n
            }, h.getIdByUrl = function(e) {
                var n = h.urlToId[e] || h.store.urlToId[e] || t;
                return n
            }, h.getLastSavedState = function() {
                return h.savedStates[h.savedStates.length - 1] || t
            }, h.getLastStoredState = function() {
                return h.storedStates[h.storedStates.length - 1] || t
            }, h.hasUrlDuplicate = function(e) {
                var t = !1,
                    n;
                return n = h.extractState(e.url), t = n && n.id !== e.id, t
            }, h.storeState = function(e) {
                return h.urlToId[e.url] = e.id, h.storedStates.push(h.cloneObject(e)), e
            }, h.isLastSavedState = function(e) {
                var t = !1,
                    n, r, i;
                return h.savedStates.length && (n = e.id, r = h.getLastSavedState(), i = r.id, t = n === i), t
            }, h.saveState = function(e) {
                return h.isLastSavedState(e) ? !1 : (h.savedStates.push(h.cloneObject(e)), !0)
            }, h.getStateByIndex = function(e) {
                var t = null;
                return typeof e == "undefined" ? t = h.savedStates[h.savedStates.length - 1] : e < 0 ? t = h.savedStates[h.savedStates.length + e] : t = h.savedStates[e], t
            }, h.getCurrentIndex = function() {
                var e = null;
                return h.savedStates.length < 1 ? e = 0 : e = h.savedStates.length - 1, e
            }, h.getHash = function(e) {
                var t = h.getLocationHref(e),
                    n;
                return n = h.getHashByUrl(t), n
            }, h.unescapeHash = function(e) {
                var t = h.normalizeHash(e);
                return t = decodeURIComponent(t), t
            }, h.normalizeHash = function(e) {
                var t = e.replace(/[^#]*#/, "").replace(/#.*/, "");
                return t
            }, h.setHash = function(e, t) {
                var n, i;
                return t !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.setHash,
                    args: arguments,
                    queue: t
                }), !1) : (h.busy(!0), n = h.extractState(e, !0), n && !h.emulated.pushState ? h.pushState(n.data, n.title, n.url, !1) : h.getHash() !== e && (h.bugs.setHash ? (i = h.getPageUrl(), h.pushState(null, null, i + "#" + e, !1)) : r.location.hash = e), h)
            }, h.escapeHash = function(t) {
                var n = h.normalizeHash(t);
                return n = e.encodeURIComponent(n), h.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n
            }, h.getHashByUrl = function(e) {
                var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return t = h.unescapeHash(t), t
            }, h.setTitle = function(e) {
                var t = e.title,
                    n;
                t || (n = h.getStateByIndex(0), n && n.url === e.url && (t = n.title || h.options.initialTitle));
                try {
                    r.getElementsByTagName("title")[0].innerHTML = t.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch (i) {}
                return r.title = t, h
            }, h.queues = [], h.busy = function(e) {
                typeof e != "undefined" ? h.busy.flag = e : typeof h.busy.flag == "undefined" && (h.busy.flag = !1);
                if (!h.busy.flag) {
                    u(h.busy.timeout);
                    var t = function() {
                        var e, n, r;
                        if (h.busy.flag) return;
                        for (e = h.queues.length - 1; e >= 0; --e) {
                            n = h.queues[e];
                            if (n.length === 0) continue;
                            r = n.shift(), h.fireQueueItem(r), h.busy.timeout = o(t, h.options.busyDelay)
                        }
                    };
                    h.busy.timeout = o(t, h.options.busyDelay)
                }
                return h.busy.flag
            }, h.busy.flag = !1, h.fireQueueItem = function(e) {
                return e.callback.apply(e.scope || h, e.args || [])
            }, h.pushQueue = function(e) {
                return h.queues[e.queue || 0] = h.queues[e.queue || 0] || [], h.queues[e.queue || 0].push(e), h
            }, h.queue = function(e, t) {
                return typeof e == "function" && (e = {
                    callback: e
                }), typeof t != "undefined" && (e.queue = t), h.busy() ? h.pushQueue(e) : h.fireQueueItem(e), h
            }, h.clearQueue = function() {
                return h.busy.flag = !1, h.queues = [], h
            }, h.stateChanged = !1, h.doubleChecker = !1, h.doubleCheckComplete = function() {
                return h.stateChanged = !0, h.doubleCheckClear(), h
            }, h.doubleCheckClear = function() {
                return h.doubleChecker && (u(h.doubleChecker), h.doubleChecker = !1), h
            }, h.doubleCheck = function(e) {
                return h.stateChanged = !1, h.doubleCheckClear(), h.bugs.ieDoubleCheck && (h.doubleChecker = o(function() {
                    return h.doubleCheckClear(), h.stateChanged || e(), !0
                }, h.options.doubleCheckInterval)), h
            }, h.safariStatePoll = function() {
                var t = h.extractState(h.getLocationHref()),
                    n;
                if (!h.isLastSavedState(t)) return n = t, n || (n = h.createStateObject()), h.Adapter.trigger(e, "popstate"), h;
                return
            }, h.back = function(e) {
                return e !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.back,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.back(!1)
                }), p.go(-1), !0)
            }, h.forward = function(e) {
                return e !== !1 && h.busy() ? (h.pushQueue({
                    scope: h,
                    callback: h.forward,
                    args: arguments,
                    queue: e
                }), !1) : (h.busy(!0), h.doubleCheck(function() {
                    h.forward(!1)
                }), p.go(1), !0)
            }, h.go = function(e, t) {
                var n;
                if (e > 0)
                    for (n = 1; n <= e; ++n) h.forward(t);
                else {
                    if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    for (n = -1; n >= e; --n) h.back(t)
                }
                return h
            };
            if (h.emulated.pushState) {
                var v = function() {};
                h.pushState = h.pushState || v, h.replaceState = h.replaceState || v
            } else h.onPopState = function(t, n) {
                var r = !1,
                    i = !1,
                    s, o;
                return h.doubleCheckComplete(), s = h.getHash(), s ? (o = h.extractState(s || h.getLocationHref(), !0), o ? h.replaceState(o.data, o.title, o.url, !1) : (h.Adapter.trigger(e, "anchorchange"), h.busy(!1)), h.expectedStateId = !1, !1) : (r = h.Adapter.extractEventData("state", t, n) || !1, r ? i = h.getStateById(r) : h.expectedStateId ? i = h.getStateById(h.expectedStateId) : i = h.extractState(h.getLocationHref()), i || (i = h.createStateObject(null, null, h.getLocationHref())), h.expectedStateId = !1, h.isLastSavedState(i) ? (h.busy(!1), !1) : (h.storeState(i), h.saveState(i), h.setTitle(i), h.Adapter.trigger(e, "statechange"), h.busy(!1), !0))
            }, h.Adapter.bind(e, "popstate", h.onPopState), h.pushState = function(t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.pushState,
                    args: arguments,
                    queue: i
                }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.pushState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            }, h.replaceState = function(t, n, r, i) {
                if (h.getHashByUrl(r) && h.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (i !== !1 && h.busy()) return h.pushQueue({
                    scope: h,
                    callback: h.replaceState,
                    args: arguments,
                    queue: i
                }), !1;
                h.busy(!0);
                var s = h.createStateObject(t, n, r);
                return h.isLastSavedState(s) ? h.busy(!1) : (h.storeState(s), h.expectedStateId = s.id, p.replaceState(s.id, s.title, s.url), h.Adapter.trigger(e, "popstate")), !0
            };
            if (s) {
                try {
                    h.store = l.parse(s.getItem("History.store")) || {}
                } catch (m) {
                    h.store = {}
                }
                h.normalizeStore()
            } else h.store = {}, h.normalizeStore();
            h.Adapter.bind(e, "unload", h.clearAllIntervals), h.saveState(h.storeState(h.extractState(h.getLocationHref(), !0))), s && (h.onUnload = function() {
                var e, t, n;
                try {
                    e = l.parse(s.getItem("History.store")) || {}
                } catch (r) {
                    e = {}
                }
                e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};
                for (t in h.idToState) {
                    if (!h.idToState.hasOwnProperty(t)) continue;
                    e.idToState[t] = h.idToState[t]
                }
                for (t in h.urlToId) {
                    if (!h.urlToId.hasOwnProperty(t)) continue;
                    e.urlToId[t] = h.urlToId[t]
                }
                for (t in h.stateToId) {
                    if (!h.stateToId.hasOwnProperty(t)) continue;
                    e.stateToId[t] = h.stateToId[t]
                }
                h.store = e, h.normalizeStore(), n = l.stringify(e);
                try {
                    s.setItem("History.store", n)
                } catch (i) {
                    if (i.code !== DOMException.QUOTA_EXCEEDED_ERR) throw i;
                    s.length && (s.removeItem("History.store"), s.setItem("History.store", n))
                }
            }, h.intervalList.push(a(h.onUnload, h.options.storeInterval)), h.Adapter.bind(e, "beforeunload", h.onUnload), h.Adapter.bind(e, "unload", h.onUnload));
            if (!h.emulated.pushState) {
                h.bugs.safariPoll && h.intervalList.push(a(h.safariStatePoll, h.options.safariPollInterval));
                if (i.vendor === "Apple Computer, Inc." || (i.appCodeName || "") === "Mozilla") h.Adapter.bind(e, "hashchange", function() {
                    h.Adapter.trigger(e, "popstate")
                }), h.getHash() && h.Adapter.onDomLoad(function() {
                    h.Adapter.trigger(e, "hashchange")
                })
            }
        }, (!h.options || !h.options.delayInit) && h.init()
    }(window), define("lib-app/history.min", function() {}), define("storymaps/common/Core", ["lib-build/css!lib-app/bootstrap/css/bootstrap.min", "lib-build/css!storymaps/common/ui/Modal.css", "lib-build/css!./Core", "lib-app/jquery", "./utils/Polyfills", "esri/map", "esri/arcgis/Portal", "esri/arcgis/utils", "./utils/CommonHelper", "esri/urlUtils", "./builder/MyStoriesWrapper", "dojo/has", "esri/IdentityManager", "esri/arcgis/OAuthInfo", "esri/config", "esri/tasks/GeometryService", "esri/request", "dojo/topic", "dojo/on", "dojo/_base/lang", "dojo/_base/array", "dojo/_base/kernel", "dojo/Deferred", "dojo/DeferredList", "dojo/query", "lib-app/jquery.fastClick", "lib-app/bootstrap/js/bootstrap.min", "lib-app/history.min"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N) {
        function A(e, t) {
            var n = !1,
                r = !1;
            console.log("common.core.Core - init", t), k = e, app.userCanEdit = !1, rt(), t != null && (n = L.fromScratch != null || L.fromscratch != null, r = L.fromGallery != null), !a.browserSupportHistory() && (n || r) && L.ieredirected == null && (window.location = document.location.protocol + "//" + document.location.host + document.location.pathname + "#" + document.location.search + "&ieredirected"), a.isArcGISHosted() ? app.indexCfg = {} : it() || (app.indexCfg = {
                proxyurl: app.indexCfg.proxyurl,
                sharingurl: app.indexCfg.sharingurl,
                username: app.indexCfg.username,
                password: app.indexCfg.password,
                oAuthAppId: app.indexCfg.oAuthAppId
            });
            if (!k.checkConfigFileIsOK()) {
                q("invalidConfig");
                return
            }
            document.title = app.cfg.TPL_NAME, c("touch") && $("body").addClass("hasTouch"), N.prototype._needsClick = N.prototype.needsClick, N.prototype.needsClick = function(e) {
                return $(e).parents(".esriPopup").length ? !0 : N.prototype._needsClick.call(this, e)
            }, N.attach(document.body), window != window.top && $("body").addClass("isEmbed"), b.mixin(app, {
                map: null,
                maps: {},
                portal: null,
                builder: t,
                isDirectCreation: n,
                isGalleryCreation: r,
                isDirectCreationFirstSave: n,
                isLoading: !0,
                loadingTimeout: null,
                ui: {}
            }), app.appCfg.useStandardHeader && require(["storymaps/common/ui/header/Desktop"], function(e) {
                app.ui.headerDesktop = new e($("#headerDesktop"), app.isInBuilder)
            });
            if (!k.init(this)) return;
            !it() && app.indexCfg.username && app.indexCfg.password && y(h, "dialog-create", function() {
                y(h.dialog, "show", function() {
                    h.dialog.txtUser_.set("value", app.indexCfg.username), h.dialog.txtPwd_.set("value", app.indexCfg.password), h.dialog.btnSubmit_.onClick()
                })
            }), et();
            if (!app.indexCfg.sharingurl) {
                var i = document.location.pathname.indexOf("/apps/");
                i == -1 && (i = document.location.pathname.indexOf("/home/"));
                if (i != -1) {
                    var s = location.pathname.substr(0, i);
                    app.indexCfg.sharingurl = "//" + location.host + s + "/sharing/content/items", app.indexCfg.proxyurl = "//" + location.host + s + "/sharing/proxy"
                } else app.indexCfg.sharingurl = app.cfg.DEFAULT_SHARING_URL
            }
            app.indexCfg.sharingurl.match(/^http/) ? u.arcgisUrl = app.indexCfg.sharingurl : u.arcgisUrl = location.protocol + app.indexCfg.sharingurl, app.indexCfg.proxyurl || (app.indexCfg.proxyurl = app.cfg.DEFAULT_PROXY_URL), d.defaults.io.proxyUrl = location.protocol + app.indexCfg.proxyurl, h && h.setProtocolErrorHandler(function() {
                return !0
            }), app.isInBuilder && app.cfg.CORS_SERVER && $.each(app.cfg.CORS_SERVER, function(e, t) {
                d.defaults.io.corsEnabledServers.push(t)
            }), app.cfg.PROXY_RULES && app.cfg.PROXY_RULES.length && $.each(app.cfg.PROXY_RULES, function(e, t) {
                t && t.urlPrefix && t.proxyUrl && f.addProxyRule(t)
            }), d.defaults.io.timeout = app.isInBuilder ? app.cfg.TIMEOUT_BUILDER_REQUEST : app.cfg.TIMEOUT_VIEWER_REQUEST, $.fn.modal.Constructor.prototype.enforceFocus = function() {}, k.initLocalization(), $(window).resize(V), $("form").bind("keydown", function(e) {
                if (e.keyCode == 13) return !1
            }), y(h, "dialog-create", K), g.subscribe("CORE_UPDATE_UI", W), g.subscribe("CORE_RESIZE", V), g.subscribe("CORE_UPDATE_EXTENT", U), app.portal = new o.Portal(app.indexCfg.sharingurl.split("/sharing/")[0]), app.portal.on("load", function(e) {
                app.isPortal = !!e.isPortal, st();
                if (app.indexCfg.oAuthAppId) {
                    var n = new p({
                        appId: app.indexCfg.oAuthAppId,
                        popup: !1,
                        portalUrl: "https:" + app.indexCfg.sharingurl.split("/sharing/")[0]
                    });
                    h.registerOAuthInfos([n]), h.checkSignInStatus(n.portalUrl).then(function() {
                        t ? D().then(O) : D().then(O)
                    }, function() {
                        h.getCredential(n.portalUrl)
                    })
                } else O()
            })
        }

        function O() {
            console.log("common.core.Core - initStep2");
            var e = a.getAppID(it()),
                t = a.getWebmapID(it()),
                n = app.appCfg ? !!app.appCfg.supportWebmapPreviewAGOL : !0;
            if (e) {
                M(e);
                return
            }
            var r = a.getUrlParams().insights;
            if (app.isDirectCreation && r) {
                if (!r.match(/^[a-fA-F0-9]{32}$/)) {
                    q("appLoadingFail");
                    return
                }
                D().then(function() {
                    j(), app.isInitializing = !1, app.data.setStoryStorage("WEBAPP"), u.getItem(r).then(function(e) {
                        if (!e) {
                            q("appLoadingFail");
                            return
                        }
                        var t = e.item;
                        if (!t.url) {
                            q("appLoadingFail");
                            return
                        }
                        app.data.getWebAppData().setTitle(t.title + " - story");
                        var n = location.protocol + app.indexCfg.sharingurl.split("/sharing/")[0] + "/apps/insights/#/embed/" + r;
                        app.data.addStorySection({
                            title: t.title,
                            creaDate: Date.now(),
                            status: "PUBLISHED",
                            media: {
                                type: "webpage",
                                webpage: {
                                    url: n,
                                    display: "stretch",
                                    unload: !1
                                }
                            },
                            description: t.description
                        }), app.data.getWebAppData().setLayout({
                            id: "tab"
                        }), app.data.getWebAppData().setLayoutOptions({
                            description: !0,
                            legend: "panel",
                            panel: {
                                position: "right",
                                size: "medium"
                            },
                            panelMapOverlap: !1
                        }), app.data.setCurrentSectionIndex(0), g.publish("story-update-entries"), g.publish("BUILDER_INCREMENT_COUNTER", 1), F(), g.publish("CORE_UPDATE_UI"), I()
                    }, function() {
                        q("appLoadingFail")
                    })
                });
                return
            }
            var i = a.getUrlParams().webmap;
            if (app.isDirectCreation && (t || i)) {
                D().then(function() {
                    j(), a.getUrlParams().source == "opendata" && (app.isDirectCreationOpenData = !0), app.isInitializing = !1, app.data.setStoryStorage("WEBAPP");
                    var e = (t || i).split(","),
                        n = [];
                    $.each(e, function(e, t) {
                        if (!t.match(/^[a-fA-F0-9]{32}$/)) return;
                        if (app.data.getStoryLength() >= app.cfg.MAX_NB_ENTRIES) return;
                        var r = {
                            title: "",
                            creaDate: Date.now(),
                            status: "PUBLISHED",
                            media: {
                                type: "webmap",
                                webmap: {
                                    id: t,
                                    extent: null,
                                    layers: null,
                                    popup: null,
                                    legend: {
                                        enable: !1,
                                        openByDefault: !1
                                    }
                                }
                            },
                            description: ""
                        };
                        n.push(r), app.data.addStorySection(r)
                    }), app.data.getWebAppData().setLayout({
                        id: "tab"
                    }), app.data.getWebAppData().setDefaultLayoutOptions(), app.data.getWebAppData().setMapOptions({
                        mapsSync: !1
                    });
                    var r = 0,
                        s = n.length,
                        o = g.subscribe("story-loaded-map", function(e) {
                            if (!app.maps[e.id]) console.log("Could not load web map with id:", e.id), s--;
                            else {
                                var t = app.maps[e.id].response.itemInfo.item;
                                $.each(n, function(n, i) {
                                    i.media.webmap.id == e.id && (n === 0 && app.data.getWebAppData().setTitle(t.title), i.title = t.title, i.description = t.description, app.data.editSection(n, i), r++)
                                })
                            }
                            r == s && (o.remove(), F(), g.publish("CORE_UPDATE_UI"), g.publish("story-update-entries"), I())
                        });
                    app.data.setCurrentSectionIndex(0), g.publish("story-update-entries"), g.publish("BUILDER_INCREMENT_COUNTER", 1), app.ui.mainStage.preloadAllMaps(!0)
                });
                return
            }
            if (t && !n) {
                a.isArcGISHosted() ? B() : P(t);
                return
            }
            if (app.isDirectCreation && it() && !a.getPortalUser() && !app.portal.getPortalUser()) {
                Y();
                return
            }
            if (app.isDirectCreation) {
                D().then(function() {
                    j(), k.startFromScratch(), F()
                });
                return
            }
            a.isArcGISHosted() ? B() : L.appid && (!app.indexCfg.authorizedOwners || !app.indexCfg.authorizedOwners[0]) ? q("unspecifiedConfigOwner") : app.isProduction ? q("invalidConfigNoApp") : q("invalidConfigNoAppDev")
        }

        function M(e) {
            console.log("common.core.Core - loadWebMappingApp - appId:", e);
            var t = L.forceLogin !== undefined;
            t || app.isInBuilder ? D().then(function() {
                _(e)
            }, function() {
                q("notAuthorized")
            }) : _(e)
        }

        function _(e) {
            u.getItem(e).then(function(e) {
                if (!e) {
                    q("appLoadingFail");
                    return
                }
                var t = e.item,
                    n = e.itemData;
                app.data.setWebAppItem(t), app.data.getWebAppData().set(n), app.userCanEdit = app.data.userIsAppOwner(), !app.isInBuilder && !app.userCanEdit && (document.__defineGetter__ ? (document.__defineGetter__("cookie", function() {
                    return ""
                }), document.__defineSetter__("cookie", function() {})) : Object.defineProperty(document, "cookie", {
                    get: function() {
                        return ""
                    },
                    set: function() {
                        return !0
                    }
                }));
                if (app.indexCfg.authorizedOwners && app.indexCfg.authorizedOwners.length > 0 && app.indexCfg.authorizedOwners[0]) {
                    var r = t.owner,
                        i = !1;
                    r && (i = $.inArray(r, app.indexCfg.authorizedOwners) != -1), !i && app.indexCfg.authorizedOwners[0] == "*" && (i = !0), i || $.each(app.indexCfg.authorizedOwners, function(e, n) {
                        var r = n.match(/^\[(.*)\]$/);
                        r && t.orgId == r[1] && (i = !0)
                    });
                    if (!i) {
                        q("invalidConfigOwner");
                        return
                    }
                }
                if (t && t.appProxies) {
                    var s = w.map(t.appProxies, function(e) {
                        return {
                            url: e.sourceUrl,
                            mixin: {
                                url: e.proxyUrl
                            }
                        }
                    });
                    app.data.setAppProxies(s)
                }
                if (app.isInBuilder && it() && !app.userCanEdit) {
                    q("notAuthorized");
                    return
                }
                k.webAppConfigLoaded();
                var o = app.appCfg ? !!app.appCfg.useWebmapInApp : !0,
                    u = app.data.getWebAppData().getWebmap() || a.getWebmapID(it());
                u && o && app.data.getWebAppData().isBlank() || app.isGalleryCreation ? (k.startFromScratch(), j()) : u && o ? P(u) : !o || !u && o ? (j(), k.loadWebmapFromData()) : a.getPortalUser() || !it() && app.data.getWebAppData().isBlank() ? Z() : app.data.getWebAppData().isBlank() ? q("appLoadingFail") : P(app.data.getWebAppData().getViews()[0].cfg.webmap.id)
            }, function(e) {
                e && e.httpCode == 400 ? q("invalidApp") : e && e.httpCode == 403 ? q("notAuthorized") : q("appLoadingFail")
            })
        }

        function D() {
            var e = new S;
            return y(h, "dialog-create", Q), app.portal.signIn().then(function() {
                if (app.isInBuilder && !app.data.checkUserItemPrivileges()) {
                    q("notAuthorizedBuilder");
                    return
                }
                app.userCanEdit = app.data.userIsAppOwner(), st(), e.resolve()
            }, function() {
                e.reject()
            }), e
        }

        function P(e) {
            k.loadFirstWebmap(e).then(b.hitch(this, function(e) {
                H(e)
            }), b.hitch(this, function() {
                q("createMap")
            }))
        }

        function H(e) {
            console.log("common.core.Core - webMapInitCallback"), app.maps[e.itemInfo.item.id] = k.getMapConfig(e), app.map = e.map, app.data.setWebMap(e.itemInfo), app.map.disableKeyboardNavigation(), j(), k.firstWebmapLoaded()
        }

        function B() {
            window.location = app.isPortal && app.cfg.HELP_URL_PORTAL ? app.cfg.HELP_URL_PORTAL : app.cfg.HELP_URL
        }

        function j() {
            var e = app.indexCfg.title || app.data.getWebAppData().getTitle(),
                t = app.indexCfg.subtitle || app.data.getWebAppData().getSubtitle(),
                n = app.data.getWebAppData().getColors();
            app.ui.headerDesktop && app.ui.headerDesktop.init(!app.isInBuilder && (app.cfg.EMBED || L.embed || L.embed === ""), e, t, X(), n, J(), app.appCfg.headerCompactByDefault), app.appCfg.useAppTitleAsPageTitle && (document.title = e ? $("<div>" + e + "</div>").text() : app.cfg.TPL_NAME)
        }

        function F() {
            console.log("common.core.Core - initApp"), V(), location.hash && a.browserSupportHistory() && (location.hash = "map"), window.onhashchange = function() {
                k.prepareMobileViewSwitch(), k.onHashChange()
            }, k.appInitComplete(), app.builder && app.builder.appInitComplete(), (app.isInBuilder || app.userCanEdit) && c("ie") != 9 && !L.preview && (c("ff") && $(".builderShare #my-stories-frame").remove(), (c("ff") || !app.isInBuilder) && $("body").append('<div id="my-stories-hidden-container"><iframe id="my-stories-frame"></iframe></div>'), l.loadMyStories()), document.location.pathname.match(/\/apps\/[a-zA-Z]+\/$/) && document.location.search.match(/^\?appid=/) && (!c("ie") || c("ie") >= 10) && History.replaceState({}, "", "index.html" + document.location.search + document.location.hash);
            var e = document.location.search;
            e && (e = e.replace("&preview", ""), e != document.location.search && window.history.replaceState({}, "", "index.html" + e + document.location.hash))
        }

        function I() {
            app.isLoading = !1, $("#headerDesktop").removeAttr("aria-hidden"), $("#loadingIndicator, #loadingMessage").addClass("fadeOut").fadeOut(400), $("#loadingOverlay").fadeOut(800)
        }

        function q(e, t, n) {
            var r = i18n.viewer.errors[e];
            tt(), $("#loadingIndicator").hide(), r = r.replace(/%TPL_NAME%/g, app.cfg.TPL_NAME), e == "notAuthorized" && app.indexCfg.oAuthAppId && (r += '<div><button class="btn btn-sm btn-default" onclick="esri.id.destroyCredentials(); window.location.reload();">' + i18n.viewer.errors.signOut + "</button></div>"), e == "appLoadingFail" ? $("#loadingMessage").html('<div id="loadingRetry"> <button type="button" class="btn btn-naked btn-sm" onclick="document.location.reload()">' + i18n.viewer.loading.failButton + " </button>" + "</div>").hide().fadeIn(1200, function() {
                $("#loadingMessage").addClass("loaded")
            }) : $("#loadingMessage").hide(), c("ie") == 8 && ($("#fatalError-icon").css({
                filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='_resources/icons/warning-icon.png', sizingMethod='scale')",
                backgroundPosition: "2px 3px",
                width: 78
            }), $("#fatalError-msg").css({
                paddingLeft: 5
            })), $("#fatalError .error-msg").html(r), n || $("#fatalError").show()
        }

        function R(e) {
            $("#fatalError .error-msg").html(i18n.viewer.errors[e])
        }

        function U(e, t) {
            t = t || app.map;
            if (!e || !e.spatialReference || !t || !t.extent.spatialReference || !t.spatialReference) {
                var n = new S;
                return n.resolve(), n
            }
            var r = app.appCfg.mapExtentFit ? app.appCfg.mapExtentFit : !1;
            if (t.spatialReference.wkid == e.spatialReference.wkid) return t.setExtent(k.getLayoutExtent(e, !1), r);
            var i = new S;
            return d.defaults.geometryService.project([e], t.spatialReference, function(e) {
                if (!e || !e[0]) return;
                t.setExtent(k.getLayoutExtent(e[0], !1), r), i.resolve()
            }), i
        }

        function z(e, t) {
            e ? app.map.spatialReference.wkid != 102100 && app.map.spatialReference.wkid != 4326 ? d.defaults.geometryService.project([t], app.map.spatialReference, function(e) {
                if (!e || !e[0]) return;
                app.map.extent.contains(e[0]) || app.map.centerAt(e[0])
            }) : app.map.extent.contains(t) || app.map.centerAt(t) : ($(".mainMediaContainer.active .mapLocationMsg").html(i18n.viewer.locatorFromCommon.error), $(".mainMediaContainer.active .mapLocationError").fadeIn(), setTimeout(function() {
                $(".mainMediaContainer.active .mapLocationError").fadeOut()
            }, 5e3))
        }

        function W() {
            console.log("common.core.Core - updateUI");
            var e = app.data.getWebAppData().getColors();
            app.ui.headerDesktop && (app.ui.headerDesktop.setTitleAndSubtitle(app.data.getWebAppData().getTitle() || (app.data.getWebMap() ? app.data.getWebMap().item.title : ""), app.data.getWebAppData().getSubtitle() || (app.data.getWebMap() ? app.data.getWebMap().item.snippet : "")), app.ui.headerDesktop.update(X(), e, app.appCfg.headerCompactByDefault)), k.updateUI(), V()
        }

        function X(e) {
            return {
                logoURL: app.data.getWebAppData().getLogoURL(e && e.useMobileLogo),
                logoTarget: app.data.getWebAppData().getLogoTarget(),
                linkText: app.data.getWebAppData().getHeaderLinkText(),
                linkURL: app.data.getWebAppData().getHeaderLinkURL(),
                socialBtn: app.data.getWebAppData().getSocial(),
                compactSize: app.data.getWebAppData().getHeaderCompactSize()
            }
        }

        function V() {
            var e = $("body").width(),
                t = $("body").height(),
                n = 0,
                r = 0,
                i = L.forceDesktop !== undefined || app.indexCfg.forceDesktop,
                s = L.forceMobile !== undefined || app.indexCfg.forceMobile,
                o = e <= 768 || s,
                u = $(".centerLink").length ? $(".centerLink").hasClass("current") : !0;
            i && (o = !1), o ? $("body").addClass("mobile-view") : $("body").removeClass("mobile-view"), $(".mainViewAboveMap, .mainViewBelowMap").each(function(e, t) {
                var r = $(t);
                n += r.is(":visible") ? r.outerHeight() : 0
            }), $(".mainViewSideMap").each(function(e, t) {
                var n = $(t);
                r += n.is(":visible") ? n.outerWidth() : 0
            }), app.ui.headerDesktop && app.ui.headerDesktop.resize(e), app.initScreenIsOpen && ($("#header").css("display", o ? "none" : "block"), $("#fatalError").css("display", o ? "block" : "none")), app.initScreenIsOpen || $("#contentPanel").height(t - n), k.resize({
                isMobileView: o,
                isOnMobileMapView: u,
                width: e,
                height: t - n
            }), app.isInBuilder && app.builder.resize({
                isMobileView: o
            });
            if (app.map && (!o || o && u)) try {
                app.map.resize(!!app.appCfg.mapsImmediateResize)
            } catch (a) {}
            o ? $(".mapContainer .esriControlsBR > div").first().removeClass("logo-med").addClass("logo-sm") : $(".mapContainer .esriControlsBR > div").first().removeClass("logo-sm").addClass("logo-med")
        }

        function J() {
            return !app.isInBuilder && (!it() && !!a.getAppID(it()) || it() && app.userCanEdit) && (L.preview === undefined || L.preview == "false")
        }

        function K() {
            $(".esriSignInDialog td label").siblings("br").css("display", "none"), $(".esriSignInDialog .dijitDialogPaneContentArea div:nth(1)").css("display", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("padding", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("margin-bottom", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("border", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-border-radius", "0px"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-webkit-box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitInputInner").css("-moz-box-shadow", "none"), $(".esriSignInDialog .dijitReset.dijitValidationContainer").css("display", "none"), $(".esriSignInDialog .esriErrorMsg").css("margin-top", "10px"), $(".esriSignInDialog").find(".dijitDialogTitleBar").find(".dijitDialogTitle").first().html(i18n.viewer.signin.title), h._arcgisUrl && ($(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().css("display", "none"), $(".esriSignInDialog").find(".dijitDialogPaneContentArea:first-child").find(":first-child").first().after("<div id='dijitDialogPaneContentAreaLoginText'>" + i18n.viewer.signin.explainViewer.replace("%PORTAL_LINK%", "<a href='http://" + h._arcgisUrl + "' title='" + h._arcgisUrl + "' target='_blank'>" + h._arcgisUrl + "</a>") + "</div>"))
        }

        function Q() {
            h._arcgisUrl && $(".esriSignInDialog").find("#dijitDialogPaneContentAreaLoginText").html(i18n.viewer.signin.explainBuilder.replace("%PORTAL_LINK%", "<a href='http://" + h._arcgisUrl + "' title='" + h._arcgisUrl + "' target='_blank'>" + h._arcgisUrl + "</a>"))
        }

        function G() {
            $("#header").css("display", "inherit"), $(".mobileView").css("display", "inherit"), $("#fatalError").css("display", "none"), $("#loadingOverlay").css("top", "0px"), et(), V()
        }

        function Y() {
            window.location = u.arcgisUrl.split("/sharing/")[0] + "/home/signin.html?returnUrl=" + encodeURIComponent(document.location.href)
        }

        function Z() {
            window.location = document.location.href + "&fromGallery"
        }

        function et() {
            app.loadingTimeout = setTimeout(nt, app.cfg.TIMEOUT_VIEWER_LOAD)
        }

        function tt() {
            typeof app != "undefined" && app.loadingTimeout && (clearTimeout(app.loadingTimeout), app.loadingTimeout = null)
        }

        function nt() {
            if (h && h.dialog && h.dialog._alreadyInitialized && !h.loadingTimeoutAlreadyFired) {
                clearTimeout(app.loadingTimeout), et(), h._busy || (h.loadingTimeoutAlreadyFired = !0);
                return
            }
            $("#loadingMessage").html('<div class="mainMessage">' + i18n.viewer.loading.long + "<br />" + i18n.viewer.loading.long2 + "</div>").fadeIn("slow", function() {
                $("#loadingMessage").addClass("loaded")
            })
        }

        function rt() {
            document.documentElement.lang = E.locale, T("#fatalError .error-title")[0].innerHTML = i18n.viewer.errors.boxTitle
        }

        function it() {
            return C.environment != ["TPL", "ENV", "DEV"].join("_")
        }

        function st() {
            console.log("common.core.Core - parsePortalConfig");
            if (!app.portal) return;
            !app.cfg.HELPER_SERVICES.geocode.length && app.portal.helperServices && app.portal.helperServices.geocode && app.portal.helperServices.geocode.length && app.portal.helperServices.geocode[0].url && $.each(app.portal.helperServices.geocode, function(e, t) {
                app.cfg.HELPER_SERVICES.geocode.push(t)
            });
            var e;
            app.cfg.HELPER_SERVICES.geometry && app.cfg.HELPER_SERVICES.geometry.url ? e = app.cfg.HELPER_SERVICES.geometry.url : app.portal.helperServices.geometry && app.portal.helperServices.geometry.url && (e = app.portal.helperServices.geometry.url), d.defaults.geometryService = new v(e), !app.cfg.BING_MAPS_KEY && app.portal.bingKey && (app.cfg.BING_MAPS_KEY = app.portal.bingKey), app.portal.isPortal && app.cfg && app.cfg.AUTHORIZED_IMPORT_SOURCE && (app.cfg.AUTHORIZED_IMPORT_SOURCE.featureService = !1), app.isPortal = !!app.portal.isPortal;
            if (app.isPortal && app.portal.helpBase && app.portal.portalHostname && !app.cfg.HELP_URL_PORTAL.match("^//")) {
                var t = app.portal.portalHostname.split("/")[0];
                app.cfg.HELP_URL_PORTAL = "//" + t + app.portal.helpBase + app.cfg.HELP_URL_PORTAL
            }
        }

        function ot() {
            var e = "notConfiguredMobile";
            tt(), app.isInitializing = !0, app.initScreenIsOpen = !0, c("touch") && a.isMobile() && (window.innerHeight > window.innerWidth ? window.innerHeight > 768 && (e = "notConfiguredMobile2") : window.innerWidth > 768 && (e = "notConfiguredMobile2")), q(e, null, !0), setTimeout(V, 50)
        }

        function ut() {
            $("#initPopup").modal("hide"), app.initScreenIsOpen = !1
        }

        function at() {
            R("notConfiguredDesktop"), $("#loadingOverlay").css("top", "0px"), $("#header").css("display", "inherit"), $("#fatalError").css("display", "block"), app.initScreenIsOpen = !1, V()
        }
        var C = {
                environment: "TPL_ENV_PRODUCTION"
            },
            k = null,
            L = a.getUrlParams();
        return i.apply(), {
            init: A,
            isProd: it,
            appInitComplete: F,
            displayApp: I,
            loadWebMap: P,
            handleWindowResize: V,
            hasSwitchBuilderButton: J,
            initPopupPrepare: ot,
            initPopupComplete: ut,
            initPopupFail: at,
            setMapExtent: U,
            zoomToDeviceLocation: z,
            getHeaderUserCfg: X,
            cleanLoadingTimeout: tt,
            initError: q,
            prepareAppForWebmapReload: G,
            replaceInitErrorMessage: R,
            portalLogin: D
        }
    }), define("lib-build/css!storymaps/common/ui/header/Desktop", [], function() {}), define("text", {}), define("lib-build/tpl", {
        load: function(e) {
            throw new Error("Dynamic load not allowed: " + e)
        }
    }), define("lib-build/tpl!storymaps/common/ui/share/ShareDialog", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="modal-dialog">\r\n	<div class="modal-content">\r\n		<div class="modal-logo"></div>\r\n		<div class="modal-header">\r\n			<h4 class="modal-title"></h4>\r\n		</div>\r\n\r\n		<div class="modal-body">\r\n			<div class="social-container">\r\n				<i class="shareIcon blackHover share_facebook icon-facebook-squared"></i>\r\n				<i class="shareIcon blackHover share_twitter icon-twitter"></i>\r\n			</div>\r\n			\r\n			<div class="share-url-panel"></div>\r\n			\r\n			<div class="embed-title"></div>\r\n			<div class="share-embed-panel"></div>\r\n			\r\n			<div class="checkbox autoplay-container">\r\n				<label>\r\n					<input type="checkbox" class="autoplay-checkbox" value="autoplay" />\r\n					<span class="autoplay-label"></span>\r\n				</label>\r\n				<a href="#" class="help autoplay-help" data-toggle="tooltip">\r\n					<img src="resources/tpl/builder/icons/builder-help.png" style="vertical-align: -5px;"/>\r\n				</a>\r\n				<span class="autoplay-notification"></span>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="modal-footer">\r\n			<button type="button" class="btn btnCancel btn-naked btn-close" data-dismiss="modal"></button>\r\n		</div>\r\n	</div>\r\n</div>';
            return __p
        }
    }), define("lib-build/css!storymaps/common/ui/share/ShareDialog", [], function() {}), define("lib-build/tpl!storymaps/common/ui/share/ShareURLPanel", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="share-url-container">\r\n	<span class="share-btn share-clipboard"></span>\r\n	<input type="text" class="form-control bitlylink" readonly="true"/>\r\n	<a class="btn btn-primary btn-bitlylink-open" target="_blank"></a>\r\n	<div class="share-status-wrapper"><span class="share-status"></span></div>\r\n</div>';
            return __p
        }
    }), define("lib-build/css!storymaps/common/ui/share/ShareURLPanel", [], function() {}),
    function(e, t) {
        "use strict";
        var n = e,
            r = n.document,
            i = n.navigator,
            s = n.setTimeout,
            o = n.encodeURIComponent,
            u = n.ActiveXObject,
            a = n.Error,
            f = n.Number.parseInt || n.parseInt,
            l = n.Number.parseFloat || n.parseFloat,
            c = n.Number.isNaN || n.isNaN,
            h = n.Math.round,
            p = n.Date.now,
            d = n.Object.keys,
            v = n.Object.defineProperty,
            m = n.Object.prototype.hasOwnProperty,
            g = n.Array.prototype.slice,
            y = function(e) {
                return g.call(e, 0)
            },
            b = function() {
                var e, n, r, i, s, o, u = y(arguments),
                    a = u[0] || {};
                for (e = 1, n = u.length; e < n; e++)
                    if ((r = u[e]) != null)
                        for (i in r) m.call(r, i) && (s = a[i], o = r[i], a !== o && o !== t && (a[i] = o));
                return a
            },
            w = function(e) {
                var t, n, r, i;
                if (typeof e != "object" || e == null) t = e;
                else if (typeof e.length == "number") {
                    t = [];
                    for (n = 0, r = e.length; n < r; n++) m.call(e, n) && (t[n] = w(e[n]))
                } else {
                    t = {};
                    for (i in e) m.call(e, i) && (t[i] = w(e[i]))
                }
                return t
            },
            E = function(e, t) {
                var n = {};
                for (var r = 0, i = t.length; r < i; r++) t[r] in e && (n[t[r]] = e[t[r]]);
                return n
            },
            S = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) === -1 && (n[r] = e[r]);
                return n
            },
            x = function(e) {
                if (e)
                    for (var t in e) m.call(e, t) && delete e[t];
                return e
            },
            T = function(e, t) {
                if (e && e.nodeType === 1 && e.ownerDocument && t && (t.nodeType === 1 && t.ownerDocument && t.ownerDocument === e.ownerDocument || t.nodeType === 9 && !t.ownerDocument && t === e.ownerDocument))
                    do {
                        if (e === t) return !0;
                        e = e.parentNode
                    } while (e);
                return !1
            },
            N = function(e) {
                var t;
                return typeof e == "string" && e && (t = e.split("#")[0].split("?")[0], t = e.slice(0, e.lastIndexOf("/") + 1)), t
            },
            C = function(e) {
                var t, n;
                return typeof e == "string" && e && (n = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] ? t = n[1] : (n = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), n && n[1] && (t = n[1]))), t
            },
            k = function() {
                var e, t;
                try {
                    throw new a
                } catch (n) {
                    t = n
                }
                return t && (e = t.sourceURL || t.fileName || C(t.stack)), e
            },
            L = function() {
                var e, n, i;
                if (r.currentScript && (e = r.currentScript.src)) return e;
                n = r.getElementsByTagName("script");
                if (n.length === 1) return n[0].src || t;
                if ("readyState" in n[0])
                    for (i = n.length; i--;)
                        if (n[i].readyState === "interactive" && (e = n[i].src)) return e;
                return r.readyState === "loading" && (e = n[n.length - 1].src) ? e : (e = k()) ? e : t
            },
            A = function() {
                var e, n, i, s = r.getElementsByTagName("script");
                for (e = s.length; e--;) {
                    if (!(i = s[e].src)) {
                        n = null;
                        break
                    }
                    i = N(i);
                    if (n == null) n = i;
                    else if (n !== i) {
                        n = null;
                        break
                    }
                }
                return n || t
            },
            O = function() {
                var e = N(L()) || A() || "";
                return e + "ZeroClipboard.swf"
            },
            M = {
                bridge: null,
                version: "0.0.0",
                pluginType: "unknown",
                disabled: null,
                outdated: null,
                unavailable: null,
                deactivated: null,
                overdue: null,
                ready: null
            },
            _ = "11.0.0",
            D = {},
            P, H = {},
            B = null,
            j = {
                ready: "Flash communication is established",
                error: {
                    "flash-disabled": "Flash is disabled or not installed",
                    "flash-outdated": "Flash is too outdated to support ZeroClipboard",
                    "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
                    "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate",
                    "flash-overdue": "Flash communication was established but NOT within the acceptable time limit"
                }
            },
            F = {
                swfPath: O(),
                trustedDomains: e.location.host ? [e.location.host] : [],
                cacheBust: !0,
                forceEnhancedClipboard: !1,
                flashLoadTimeout: 3e4,
                autoActivate: !0,
                bubbleEvents: !0,
                containerId: "global-zeroclipboard-html-bridge",
                containerClass: "global-zeroclipboard-container",
                swfObjectId: "global-zeroclipboard-flash-bridge",
                hoverClass: "zeroclipboard-is-hover",
                activeClass: "zeroclipboard-is-active",
                forceHandCursor: !1,
                title: null,
                zIndex: 999999999
            },
            I = function(e) {
                if (typeof e == "object" && e !== null)
                    for (var t in e)
                        if (m.call(e, t))
                            if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(t)) F[t] = e[t];
                            else if (M.bridge == null)
                    if (t === "containerId" || t === "swfObjectId") {
                        if (!et(e[t])) throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                        F[t] = e[t]
                    } else F[t] = e[t];
                if (typeof e == "string" && e) {
                    if (m.call(F, e)) return F[e];
                    return
                }
                return w(F)
            },
            q = function() {
                return {
                    browser: E(i, ["userAgent", "platform", "appName"]),
                    flash: S(M, ["bridge"]),
                    zeroclipboard: {
                        version: At.version,
                        config: At.config()
                    }
                }
            },
            R = function() {
                return !!(M.disabled || M.outdated || M.unavailable || M.deactivated)
            },
            U = function(e, t) {
                var n, r, i, s = {};
                if (typeof e == "string" && e) i = e.toLowerCase().split(/\s+/);
                else if (typeof e == "object" && e && typeof t == "undefined")
                    for (n in e) m.call(e, n) && typeof n == "string" && n && typeof e[n] == "function" && At.on(n, e[n]);
                if (i && i.length) {
                    for (n = 0, r = i.length; n < r; n++) e = i[n].replace(/^on/, ""), s[e] = !0, D[e] || (D[e] = []), D[e].push(t);
                    s.ready && M.ready && At.emit({
                        type: "ready"
                    });
                    if (s.error) {
                        var o = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                        for (n = 0, r = o.length; n < r; n++)
                            if (M[o[n]] === !0) {
                                At.emit({
                                    type: "error",
                                    name: "flash-" + o[n]
                                });
                                break
                            }
                    }
                }
                return At
            },
            z = function(e, t) {
                var n, r, i, s, o;
                if (arguments.length === 0) s = d(D);
                else if (typeof e == "string" && e) s = e.split(/\s+/);
                else if (typeof e == "object" && e && typeof t == "undefined")
                    for (n in e) m.call(e, n) && typeof n == "string" && n && typeof e[n] == "function" && At.off(n, e[n]);
                if (s && s.length)
                    for (n = 0, r = s.length; n < r; n++) {
                        e = s[n].toLowerCase().replace(/^on/, ""), o = D[e];
                        if (o && o.length)
                            if (t) {
                                i = o.indexOf(t);
                                while (i !== -1) o.splice(i, 1), i = o.indexOf(t, i)
                            } else o.length = 0
                    }
                return At
            },
            W = function(e) {
                var t;
                return typeof e == "string" && e ? t = w(D[e]) || null : t = w(D), t
            },
            X = function(e) {
                var t, n, r;
                e = tt(e);
                if (!e) return;
                if (ut(e)) return;
                return e.type === "ready" && M.overdue === !0 ? At.emit({
                    type: "error",
                    name: "flash-overdue"
                }) : (t = b({}, e), ot.call(this, t), e.type === "copy" && (r = pt(H), n = r.data, B = r.formatMap), n)
            },
            V = function() {
                typeof M.ready != "boolean" && (M.ready = !1);
                if (!At.isFlashUnusable() && M.bridge === null) {
                    var e = F.flashLoadTimeout;
                    typeof e == "number" && e >= 0 && s(function() {
                        typeof M.deactivated != "boolean" && (M.deactivated = !0), M.deactivated === !0 && At.emit({
                            type: "error",
                            name: "flash-deactivated"
                        })
                    }, e), M.overdue = !1, ct()
                }
            },
            $ = function() {
                At.clearData(), At.blur(), At.emit("destroy"), ht(), At.off()
            },
            J = function(e, t) {
                var n;
                if (typeof e == "object" && e && typeof t == "undefined") n = e, At.clearData();
                else {
                    if (typeof e != "string" || !e) return;
                    n = {}, n[e] = t
                }
                for (var r in n) typeof r == "string" && r && m.call(n, r) && typeof n[r] == "string" && n[r] && (H[r] = n[r])
            },
            K = function(e) {
                typeof e == "undefined" ? (x(H), B = null) : typeof e == "string" && m.call(H, e) && delete H[e]
            },
            Q = function(e) {
                if (typeof e == "undefined") return w(H);
                if (typeof e == "string" && m.call(H, e)) return H[e]
            },
            G = function(e) {
                if (!e || e.nodeType !== 1) return;
                P && (Et(P, F.activeClass), P !== e && Et(P, F.hoverClass)), P = e, wt(e, F.hoverClass);
                var t = e.getAttribute("title") || F.title;
                if (typeof t == "string" && t) {
                    var n = lt(M.bridge);
                    n && n.setAttribute("title", t)
                }
                var r = F.forceHandCursor === !0 || St(e, "cursor") === "pointer";
                Ct(r), Nt()
            },
            Y = function() {
                var e = lt(M.bridge);
                e && (e.removeAttribute("title"), e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.top = "1px"), P && (Et(P, F.hoverClass), Et(P, F.activeClass), P = null)
            },
            Z = function() {
                return P || null
            },
            et = function(e) {
                return typeof e == "string" && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
            },
            tt = function(e) {
                var t;
                typeof e == "string" && e ? (t = e, e = {}) : typeof e == "object" && e && typeof e.type == "string" && e.type && (t = e.type);
                if (!t) return;
                b(e, {
                    type: t.toLowerCase(),
                    target: e.target || P || null,
                    relatedTarget: e.relatedTarget || null,
                    currentTarget: M && M.bridge || null,
                    timeStamp: e.timeStamp || p() || null
                });
                var n = j[e.type];
                return e.type === "error" && e.name && n && (n = n[e.name]), n && (e.message = n), e.type === "ready" && b(e, {
                    target: null,
                    version: M.version
                }), e.type === "error" && (/^flash-(disabled|outdated|unavailable|deactivated|overdue)$/.test(e.name) && b(e, {
                    target: null,
                    minimumVersion: _
                }), /^flash-(outdated|unavailable|deactivated|overdue)$/.test(e.name) && b(e, {
                    version: M.version
                })), e.type === "copy" && (e.clipboardData = {
                    setData: At.setData,
                    clearData: At.clearData
                }), e.type === "aftercopy" && (e = dt(e, B)), e.target && !e.relatedTarget && (e.relatedTarget = nt(e.target)), e = rt(e), e
            },
            nt = function(e) {
                var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
                return t ? r.getElementById(t) : null
            },
            rt = function(e) {
                if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
                    var i = e.target,
                        s = e.type === "_mouseover" && e.relatedTarget ? e.relatedTarget : t,
                        o = e.type === "_mouseout" && e.relatedTarget ? e.relatedTarget : t,
                        u = Tt(i),
                        a = n.screenLeft || n.screenX || 0,
                        f = n.screenTop || n.screenY || 0,
                        l = r.body.scrollLeft + r.documentElement.scrollLeft,
                        c = r.body.scrollTop + r.documentElement.scrollTop,
                        h = u.left + (typeof e._stageX == "number" ? e._stageX : 0),
                        p = u.top + (typeof e._stageY == "number" ? e._stageY : 0),
                        d = h - l,
                        v = p - c,
                        m = a + d,
                        g = f + v,
                        y = typeof e.movementX == "number" ? e.movementX : 0,
                        w = typeof e.movementY == "number" ? e.movementY : 0;
                    delete e._stageX, delete e._stageY, b(e, {
                        srcElement: i,
                        fromElement: s,
                        toElement: o,
                        screenX: m,
                        screenY: g,
                        pageX: h,
                        pageY: p,
                        clientX: d,
                        clientY: v,
                        x: d,
                        y: v,
                        movementX: y,
                        movementY: w,
                        offsetX: 0,
                        offsetY: 0,
                        layerX: 0,
                        layerY: 0
                    })
                }
                return e
            },
            it = function(e) {
                var t = e && typeof e.type == "string" && e.type || "";
                return !/^(?:(?:before)?copy|destroy)$/.test(t)
            },
            st = function(e, t, n, r) {
                r ? s(function() {
                    e.apply(t, n)
                }, 0) : e.apply(t, n)
            },
            ot = function(e) {
                if (typeof e != "object" || !e || !e.type) return;
                var t = it(e),
                    r = D["*"] || [],
                    i = D[e.type] || [],
                    s = r.concat(i);
                if (s && s.length) {
                    var o, u, a, f, l, c = this;
                    for (o = 0, u = s.length; o < u; o++) a = s[o], f = c, typeof a == "string" && typeof n[a] == "function" && (a = n[a]), typeof a == "object" && a && typeof a.handleEvent == "function" && (f = a, a = a.handleEvent), typeof a == "function" && (l = b({}, e), st(a, f, [l], t))
                }
                return this
            },
            ut = function(e) {
                var t = e.target || P || null,
                    n = e._source === "swf";
                delete e._source;
                var r = ["flash-disabled", "flash-outdated", "flash-unavailable", "flash-deactivated", "flash-overdue"];
                switch (e.type) {
                    case "error":
                        r.indexOf(e.name) !== -1 && b(M, {
                            disabled: e.name === "flash-disabled",
                            outdated: e.name === "flash-outdated",
                            unavailable: e.name === "flash-unavailable",
                            deactivated: e.name === "flash-deactivated",
                            overdue: e.name === "flash-overdue",
                            ready: !1
                        });
                        break;
                    case "ready":
                        var i = M.deactivated === !0;
                        b(M, {
                            disabled: !1,
                            outdated: !1,
                            unavailable: !1,
                            deactivated: !1,
                            overdue: i,
                            ready: !i
                        });
                        break;
                    case "copy":
                        var s, o, u = e.relatedTarget;
                        !H["text/html"] && !H["text/plain"] && u && (o = u.value || u.outerHTML || u.innerHTML) && (s = u.value || u.textContent || u.innerText) ? (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", s), o !== s && e.clipboardData.setData("text/html", o)) : !H["text/plain"] && e.target && (s = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(), e.clipboardData.setData("text/plain", s));
                        break;
                    case "aftercopy":
                        At.clearData(), t && t !== bt() && t.focus && t.focus();
                        break;
                    case "_mouseover":
                        At.focus(t), F.bubbleEvents === !0 && n && (t && t !== e.relatedTarget && !T(e.relatedTarget, t) && at(b({}, e, {
                            type: "mouseenter",
                            bubbles: !1,
                            cancelable: !1
                        })), at(b({}, e, {
                            type: "mouseover"
                        })));
                        break;
                    case "_mouseout":
                        At.blur(), F.bubbleEvents === !0 && n && (t && t !== e.relatedTarget && !T(e.relatedTarget, t) && at(b({}, e, {
                            type: "mouseleave",
                            bubbles: !1,
                            cancelable: !1
                        })), at(b({}, e, {
                            type: "mouseout"
                        })));
                        break;
                    case "_mousedown":
                        wt(t, F.activeClass), F.bubbleEvents === !0 && n && at(b({}, e, {
                            type: e.type.slice(1)
                        }));
                        break;
                    case "_mouseup":
                        Et(t, F.activeClass), F.bubbleEvents === !0 && n && at(b({}, e, {
                            type: e.type.slice(1)
                        }));
                        break;
                    case "_click":
                    case "_mousemove":
                        F.bubbleEvents === !0 && n && at(b({}, e, {
                            type: e.type.slice(1)
                        }))
                }
                if (/^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) return !0
            },
            at = function(e) {
                if (!e || typeof e.type != "string" || !e) return;
                var t, i = e.target || null,
                    s = i && i.ownerDocument || r,
                    o = {
                        view: s.defaultView || n,
                        canBubble: !0,
                        cancelable: !0,
                        detail: e.type === "click" ? 1 : 0,
                        button: typeof e.which == "number" ? e.which - 1 : typeof e.button == "number" ? e.button : s.createEvent ? 0 : 1
                    },
                    u = b(o, e);
                if (!i) return;
                s.createEvent && i.dispatchEvent && (u = [u.type, u.canBubble, u.cancelable, u.view, u.detail, u.screenX, u.screenY, u.clientX, u.clientY, u.ctrlKey, u.altKey, u.shiftKey, u.metaKey, u.button, u.relatedTarget], t = s.createEvent("MouseEvents"), t.initMouseEvent && (t.initMouseEvent.apply(t, u), t._source = "js", i.dispatchEvent(t)))
            },
            ft = function() {
                var e = r.createElement("div");
                return e.id = F.containerId, e.className = F.containerClass, e.style.position = "absolute", e.style.left = "0px", e.style.top = "-9999px", e.style.width = "1px", e.style.height = "1px", e.style.zIndex = "" + kt(F.zIndex), e
            },
            lt = function(e) {
                var t = e && e.parentNode;
                while (t && t.nodeName === "OBJECT" && t.parentNode) t = t.parentNode;
                return t || null
            },
            ct = function() {
                var e, t = M.bridge,
                    i = lt(t);
                if (!t) {
                    var s = yt(n.location.host, F),
                        o = s === "never" ? "none" : "all",
                        u = mt(F),
                        a = F.swfPath + vt(F.swfPath, F);
                    i = ft();
                    var f = r.createElement("div");
                    i.appendChild(f), r.body.appendChild(i);
                    var l = r.createElement("div"),
                        c = M.pluginType === "activex";
                    l.innerHTML = '<object id="' + F.swfObjectId + '" name="' + F.swfObjectId + '" ' + 'width="100%" height="100%" ' + (c ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + a + '"') + ">" + (c ? '<param name="movie" value="' + a + '"/>' : "") + '<param name="allowScriptAccess" value="' + s + '"/>' + '<param name="allowNetworking" value="' + o + '"/>' + '<param name="menu" value="false"/>' + '<param name="wmode" value="transparent"/>' + '<param name="flashvars" value="' + u + '"/>' + "</object>", t = l.firstChild, l = null, t.ZeroClipboard = At, i.replaceChild(t, f)
                }
                return t || (t = r[F.swfObjectId], t && (e = t.length) && (t = t[e - 1]), !t && i && (t = i.firstChild)), M.bridge = t || null, t
            },
            ht = function() {
                var e = M.bridge;
                if (e) {
                    var t = lt(e);
                    t && (M.pluginType === "activex" && "readyState" in e ? (e.style.display = "none", function n() {
                        if (e.readyState === 4) {
                            for (var r in e) typeof e[r] == "function" && (e[r] = null);
                            e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t)
                        } else s(n, 10)
                    }()) : (e.parentNode && e.parentNode.removeChild(e), t.parentNode && t.parentNode.removeChild(t))), M.ready = null, M.bridge = null, M.deactivated = null
                }
            },
            pt = function(e) {
                var t = {},
                    n = {};
                if (typeof e != "object" || !e) return;
                for (var r in e)
                    if (r && m.call(e, r) && typeof e[r] == "string" && e[r]) switch (r.toLowerCase()) {
                        case "text/plain":
                        case "text":
                        case "air:text":
                        case "flash:text":
                            t.text = e[r], n.text = r;
                            break;
                        case "text/html":
                        case "html":
                        case "air:html":
                        case "flash:html":
                            t.html = e[r], n.html = r;
                            break;
                        case "application/rtf":
                        case "text/rtf":
                        case "rtf":
                        case "richtext":
                        case "air:rtf":
                        case "flash:rtf":
                            t.rtf = e[r], n.rtf = r;
                            break;
                        default:
                    }
                    return {
                        data: t,
                        formatMap: n
                    }
            },
            dt = function(e, t) {
                if (typeof e != "object" || !e || typeof t != "object" || !t) return e;
                var n = {};
                for (var r in e)
                    if (m.call(e, r)) {
                        if (r !== "success" && r !== "data") {
                            n[r] = e[r];
                            continue
                        }
                        n[r] = {};
                        var i = e[r];
                        for (var s in i) s && m.call(i, s) && m.call(t, s) && (n[r][t[s]] = i[s])
                    }
                return n
            },
            vt = function(e, t) {
                var n = t == null || t && t.cacheBust === !0;
                return n ? (e.indexOf("?") === -1 ? "?" : "&") + "noCache=" + p() : ""
            },
            mt = function(e) {
                var t, r, i, s, u = "",
                    a = [];
                e.trustedDomains && (typeof e.trustedDomains == "string" ? s = [e.trustedDomains] : typeof e.trustedDomains == "object" && "length" in e.trustedDomains && (s = e.trustedDomains));
                if (s && s.length)
                    for (t = 0, r = s.length; t < r; t++)
                        if (m.call(s, t) && s[t] && typeof s[t] == "string") {
                            i = gt(s[t]);
                            if (!i) continue;
                            if (i === "*") {
                                a.length = 0, a.push(i);
                                break
                            }
                            a.push.apply(a, [i, "//" + i, n.location.protocol + "//" + i])
                        }
                return a.length && (u += "trustedOrigins=" + o(a.join(","))), e.forceEnhancedClipboard === !0 && (u += (u ? "&" : "") + "forceEnhancedClipboard=true"), typeof e.swfObjectId == "string" && e.swfObjectId && (u += (u ? "&" : "") + "swfObjectId=" + o(e.swfObjectId)), u
            },
            gt = function(e) {
                if (e == null || e === "") return null;
                e = e.replace(/^\s+|\s+$/g, "");
                if (e === "") return null;
                var t = e.indexOf("//");
                e = t === -1 ? e : e.slice(t + 2);
                var n = e.indexOf("/");
                return e = n === -1 ? e : t === -1 || n === 0 ? null : e.slice(0, n), e && e.slice(-4).toLowerCase() === ".swf" ? null : e || null
            },
            yt = function() {
                var e = function(e) {
                    var t, n, r, i = [];
                    typeof e == "string" && (e = [e]);
                    if (typeof e != "object" || !e || typeof e.length != "number") return i;
                    for (t = 0, n = e.length; t < n; t++)
                        if (m.call(e, t) && (r = gt(e[t]))) {
                            if (r === "*") {
                                i.length = 0, i.push("*");
                                break
                            }
                            i.indexOf(r) === -1 && i.push(r)
                        }
                    return i
                };
                return function(t, n) {
                    var r = gt(n.swfPath);
                    r === null && (r = t);
                    var i = e(n.trustedDomains),
                        s = i.length;
                    if (s > 0) {
                        if (s === 1 && i[0] === "*") return "always";
                        if (i.indexOf(t) !== -1) return s === 1 && t === r ? "sameDomain" : "always"
                    }
                    return "never"
                }
            }(),
            bt = function() {
                try {
                    return r.activeElement
                } catch (e) {
                    return null
                }
            },
            wt = function(e, t) {
                if (!e || e.nodeType !== 1) return e;
                if (e.classList) return e.classList.contains(t) || e.classList.add(t), e;
                if (t && typeof t == "string") {
                    var n = (t || "").split(/\s+/);
                    if (e.nodeType === 1)
                        if (!e.className) e.className = t;
                        else {
                            var r = " " + e.className + " ",
                                i = e.className;
                            for (var s = 0, o = n.length; s < o; s++) r.indexOf(" " + n[s] + " ") < 0 && (i += " " + n[s]);
                            e.className = i.replace(/^\s+|\s+$/g, "")
                        }
                }
                return e
            },
            Et = function(e, t) {
                if (!e || e.nodeType !== 1) return e;
                if (e.classList) return e.classList.contains(t) && e.classList.remove(t), e;
                if (typeof t == "string" && t) {
                    var n = t.split(/\s+/);
                    if (e.nodeType === 1 && e.className) {
                        var r = (" " + e.className + " ").replace(/[\n\t]/g, " ");
                        for (var i = 0, s = n.length; i < s; i++) r = r.replace(" " + n[i] + " ", " ");
                        e.className = r.replace(/^\s+|\s+$/g, "")
                    }
                }
                return e
            },
            St = function(e, t) {
                var r = n.getComputedStyle(e, null).getPropertyValue(t);
                return t !== "cursor" || !!r && r !== "auto" || e.nodeName !== "A" ? r : "pointer"
            },
            xt = function() {
                var e, t, n, i = 1;
                return typeof r.body.getBoundingClientRect == "function" && (e = r.body.getBoundingClientRect(), t = e.right - e.left, n = r.body.offsetWidth, i = h(t / n * 100) / 100), i
            },
            Tt = function(e) {
                var t = {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                };
                if (e.getBoundingClientRect) {
                    var i = e.getBoundingClientRect(),
                        s, o, u;
                    "pageXOffset" in n && "pageYOffset" in n ? (s = n.pageXOffset, o = n.pageYOffset) : (u = xt(), s = h(r.documentElement.scrollLeft / u), o = h(r.documentElement.scrollTop / u));
                    var a = r.documentElement.clientLeft || 0,
                        f = r.documentElement.clientTop || 0;
                    t.left = i.left + s - a, t.top = i.top + o - f, t.width = "width" in i ? i.width : i.right - i.left, t.height = "height" in i ? i.height : i.bottom - i.top
                }
                return t
            },
            Nt = function() {
                var e;
                if (P && (e = lt(M.bridge))) {
                    var t = Tt(P);
                    b(e.style, {
                        width: t.width + "px",
                        height: t.height + "px",
                        top: t.top + "px",
                        left: t.left + "px",
                        zIndex: "" + kt(F.zIndex)
                    })
                }
            },
            Ct = function(e) {
                M.ready === !0 && (M.bridge && typeof M.bridge.setHandCursor == "function" ? M.bridge.setHandCursor(e) : M.ready = !1)
            },
            kt = function(e) {
                if (/^(?:auto|inherit)$/.test(e)) return e;
                var t;
                return typeof e == "number" && !c(e) ? t = e : typeof e == "string" && (t = kt(f(e, 10))), typeof t == "number" ? t : "auto"
            },
            Lt = function(e) {
                function f(e) {
                    var t = e.match(/[\d]+/g);
                    return t.length = 3, t.join(".")
                }

                function c(e) {
                    return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || e.slice(-13) === "chrome.plugin")
                }

                function h(e) {
                    e && (s = !0, e.version && (a = f(e.version)), !a && e.description && (a = f(e.description)), e.filename && (u = c(e.filename)))
                }
                var t, n, r, s = !1,
                    o = !1,
                    u = !1,
                    a = "";
                if (i.plugins && i.plugins.length) t = i.plugins["Shockwave Flash"], h(t), i.plugins["Shockwave Flash 2.0"] && (s = !0, a = "2.0.0.11");
                else if (i.mimeTypes && i.mimeTypes.length) r = i.mimeTypes["application/x-shockwave-flash"], t = r && r.enabledPlugin, h(t);
                else if (typeof e != "undefined") {
                    o = !0;
                    try {
                        n = new e("ShockwaveFlash.ShockwaveFlash.7"), s = !0, a = f(n.GetVariable("$version"))
                    } catch (p) {
                        try {
                            n = new e("ShockwaveFlash.ShockwaveFlash.6"), s = !0, a = "6.0.21"
                        } catch (d) {
                            try {
                                n = new e("ShockwaveFlash.ShockwaveFlash"), s = !0, a = f(n.GetVariable("$version"))
                            } catch (v) {
                                o = !1
                            }
                        }
                    }
                }
                M.disabled = s !== !0, M.outdated = a && l(a) < l(_), M.version = a || "0.0.0", M.pluginType = u ? "pepper" : o ? "activex" : s ? "netscape" : "unknown"
            };
        Lt(u);
        var At = function() {
            if (!(this instanceof At)) return new At;
            typeof At._createClient == "function" && At._createClient.apply(this, y(arguments))
        };
        try {
            v(At, "version", {
                value: "2.1.3",
                writable: !1,
                configurable: !0,
                enumerable: !0
            })
        } catch (Ot) {}
        At.config = function() {
            return I.apply(this, y(arguments))
        }, At.state = function() {
            return q.apply(this, y(arguments))
        }, At.isFlashUnusable = function() {
            return R.apply(this, y(arguments))
        }, At.on = function() {
            return U.apply(this, y(arguments))
        }, At.off = function() {
            return z.apply(this, y(arguments))
        }, At.handlers = function() {
            return W.apply(this, y(arguments))
        }, At.emit = function() {
            return X.apply(this, y(arguments))
        }, At.create = function() {
            return V.apply(this, y(arguments))
        }, At.destroy = function() {
            return $.apply(this, y(arguments))
        }, At.setData = function() {
            return J.apply(this, y(arguments))
        }, At.clearData = function() {
            return K.apply(this, y(arguments))
        }, At.getData = function() {
            return Q.apply(this, y(arguments))
        }, At.focus = At.activate = function() {
            return G.apply(this, y(arguments))
        }, At.blur = At.deactivate = function() {
            return Y.apply(this, y(arguments))
        }, At.activeElement = function() {
            return Z.apply(this, y(arguments))
        };
        var Mt = 0,
            _t = {},
            Dt = 0,
            Pt = {},
            Ht = {};
        b(F, {
            autoActivate: !0
        });
        var Bt = function(e) {
                var t = this;
                t.id = "" + Mt++, _t[t.id] = {
                    instance: t,
                    elements: [],
                    handlers: {}
                }, e && t.clip(e), At.on("*", function(e) {
                    return t.emit(e)
                }), At.on("destroy", function() {
                    t.destroy()
                }), At.create()
            },
            jt = function(e, t) {
                var n, r, i, s = {},
                    o = _t[this.id] && _t[this.id].handlers;
                if (typeof e == "string" && e) i = e.toLowerCase().split(/\s+/);
                else if (typeof e == "object" && e && typeof t == "undefined")
                    for (n in e) m.call(e, n) && typeof n == "string" && n && typeof e[n] == "function" && this.on(n, e[n]);
                if (i && i.length) {
                    for (n = 0, r = i.length; n < r; n++) e = i[n].replace(/^on/, ""), s[e] = !0, o[e] || (o[e] = []), o[e].push(t);
                    s.ready && M.ready && this.emit({
                        type: "ready",
                        client: this
                    });
                    if (s.error) {
                        var u = ["disabled", "outdated", "unavailable", "deactivated", "overdue"];
                        for (n = 0, r = u.length; n < r; n++)
                            if (M[u[n]]) {
                                this.emit({
                                    type: "error",
                                    name: "flash-" + u[n],
                                    client: this
                                });
                                break
                            }
                    }
                }
                return this
            },
            Ft = function(e, t) {
                var n, r, i, s, o, u = _t[this.id] && _t[this.id].handlers;
                if (arguments.length === 0) s = d(u);
                else if (typeof e == "string" && e) s = e.split(/\s+/);
                else if (typeof e == "object" && e && typeof t == "undefined")
                    for (n in e) m.call(e, n) && typeof n == "string" && n && typeof e[n] == "function" && this.off(n, e[n]);
                if (s && s.length)
                    for (n = 0, r = s.length; n < r; n++) {
                        e = s[n].toLowerCase().replace(/^on/, ""), o = u[e];
                        if (o && o.length)
                            if (t) {
                                i = o.indexOf(t);
                                while (i !== -1) o.splice(i, 1), i = o.indexOf(t, i)
                            } else o.length = 0
                    }
                return this
            },
            It = function(e) {
                var t = null,
                    n = _t[this.id] && _t[this.id].handlers;
                return n && (typeof e == "string" && e ? t = n[e] ? n[e].slice(0) : [] : t = w(n)), t
            },
            qt = function(e) {
                if (Xt.call(this, e)) {
                    typeof e == "object" && e && typeof e.type == "string" && e.type && (e = b({}, e));
                    var t = b({}, tt(e), {
                        client: this
                    });
                    Vt.call(this, t)
                }
                return this
            },
            Rt = function(e) {
                e = $t(e);
                for (var t = 0; t < e.length; t++)
                    if (m.call(e, t) && e[t] && e[t].nodeType === 1) {
                        e[t].zcClippingId ? Pt[e[t].zcClippingId].indexOf(this.id) === -1 && Pt[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Dt++, Pt[e[t].zcClippingId] = [this.id], F.autoActivate === !0 && Jt(e[t]));
                        var n = _t[this.id] && _t[this.id].elements;
                        n.indexOf(e[t]) === -1 && n.push(e[t])
                    }
                return this
            },
            Ut = function(e) {
                var t = _t[this.id];
                if (!t) return this;
                var n = t.elements,
                    r;
                typeof e == "undefined" ? e = n.slice(0) : e = $t(e);
                for (var i = e.length; i--;)
                    if (m.call(e, i) && e[i] && e[i].nodeType === 1) {
                        r = 0;
                        while ((r = n.indexOf(e[i], r)) !== -1) n.splice(r, 1);
                        var s = Pt[e[i].zcClippingId];
                        if (s) {
                            r = 0;
                            while ((r = s.indexOf(this.id, r)) !== -1) s.splice(r, 1);
                            s.length === 0 && (F.autoActivate === !0 && Kt(e[i]), delete e[i].zcClippingId)
                        }
                    }
                return this
            },
            zt = function() {
                var e = _t[this.id];
                return e && e.elements ? e.elements.slice(0) : []
            },
            Wt = function() {
                this.unclip(), this.off(), delete _t[this.id]
            },
            Xt = function(e) {
                if (!e || !e.type) return !1;
                if (e.client && e.client !== this) return !1;
                var t = _t[this.id] && _t[this.id].elements,
                    n = !!t && t.length > 0,
                    r = !e.target || n && t.indexOf(e.target) !== -1,
                    i = e.relatedTarget && n && t.indexOf(e.relatedTarget) !== -1,
                    s = e.client && e.client === this;
                return r || i || s ? !0 : !1
            },
            Vt = function(e) {
                if (typeof e != "object" || !e || !e.type) return;
                var t = it(e),
                    r = _t[this.id] && _t[this.id].handlers["*"] || [],
                    i = _t[this.id] && _t[this.id].handlers[e.type] || [],
                    s = r.concat(i);
                if (s && s.length) {
                    var o, u, a, f, l, c = this;
                    for (o = 0, u = s.length; o < u; o++) a = s[o], f = c, typeof a == "string" && typeof n[a] == "function" && (a = n[a]), typeof a == "object" && a && typeof a.handleEvent == "function" && (f = a, a = a.handleEvent), typeof a == "function" && (l = b({}, e), st(a, f, [l], t))
                }
                return this
            },
            $t = function(e) {
                return typeof e == "string" && (e = []), typeof e.length != "number" ? [e] : e
            },
            Jt = function(e) {
                if (!e || e.nodeType !== 1) return;
                var t = function(e) {
                        if (!e && !(e = n.event)) return;
                        e._source !== "js" && (e.stopImmediatePropagation(), e.preventDefault()), delete e._source
                    },
                    r = function(r) {
                        if (!r && !(r = n.event)) return;
                        t(r), At.focus(e)
                    };
                e.addEventListener("mouseover", r, !1), e.addEventListener("mouseout", t, !1), e.addEventListener("mouseenter", t, !1), e.addEventListener("mouseleave", t, !1), e.addEventListener("mousemove", t, !1), Ht[e.zcClippingId] = {
                    mouseover: r,
                    mouseout: t,
                    mouseenter: t,
                    mouseleave: t,
                    mousemove: t
                }
            },
            Kt = function(e) {
                if (!e || e.nodeType !== 1) return;
                var t = Ht[e.zcClippingId];
                if (typeof t != "object" || !t) return;
                var n, r, i = ["move", "leave", "enter", "out", "over"];
                for (var s = 0, o = i.length; s < o; s++) n = "mouse" + i[s], r = t[n], typeof r == "function" && e.removeEventListener(n, r, !1);
                delete Ht[e.zcClippingId]
            };
        At._createClient = function() {
            Bt.apply(this, y(arguments))
        }, At.prototype.on = function() {
            return jt.apply(this, y(arguments))
        }, At.prototype.off = function() {
            return Ft.apply(this, y(arguments))
        }, At.prototype.handlers = function() {
            return It.apply(this, y(arguments))
        }, At.prototype.emit = function() {
            return qt.apply(this, y(arguments))
        }, At.prototype.clip = function() {
            return Rt.apply(this, y(arguments))
        }, At.prototype.unclip = function() {
            return Ut.apply(this, y(arguments))
        }, At.prototype.elements = function() {
            return zt.apply(this, y(arguments))
        }, At.prototype.destroy = function() {
            return Wt.apply(this, y(arguments))
        }, At.prototype.setText = function(e) {
            return At.setData("text/plain", e), this
        }, At.prototype.setHtml = function(e) {
            return At.setData("text/html", e), this
        }, At.prototype.setRichText = function(e) {
            return At.setData("application/rtf", e), this
        }, At.prototype.setData = function() {
            return At.setData.apply(this, y(arguments)), this
        }, At.prototype.clearData = function() {
            return At.clearData.apply(this, y(arguments)), this
        }, At.prototype.getData = function() {
            return At.getData.apply(this, y(arguments))
        }, typeof define == "function" && define.amd ? define("lib-app/ZeroClipboard/ZeroClipboard.min", [], function() {
            return At
        }) : typeof module == "object" && module && typeof module.exports == "object" && module.exports ? module.exports = At : e.ZeroClipboard = At
    }(function() {
        return this || window
    }()), define("lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font", [], function() {}), define("storymaps/common/ui/share/ShareURLPanel", ["lib-build/tpl!./ShareURLPanel", "lib-build/css!./ShareURLPanel", "../../utils/SocialSharing", "dojo/has", "lib-app/ZeroClipboard/ZeroClipboard.min", "lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font.css"], function(e, t, n, r, i) {
        return function(s) {
            function a(e, t) {
                o.val(e), s.find(".btn-bitlylink-open").attr("href", e), n.requestBitly(e).then(function(e) {
                    o.val(e), (t === undefined || t === !0) && o.select()
                }), i.config({
                    swfPath: (app.isProduction ? "resources/lib/" : "lib-app") + "/ZeroClipboard/ZeroClipboard.swf"
                });
                var r = new i(s.find(".share-btn"));
                r.on("copy", function(e) {
                    var t = e.clipboardData;
                    t.setData("text/plain", s.find(".bitlylink").val()), s.find(".share-btn").removeClass("share-clipboard").addClass("share-ok"), s.find(".share-status").show(), s.find(".bitlylink")[0].selectionStart = s.find(".bitlylink")[0].selectionEnd = -1, s.find(".bitlylink").focus(), setTimeout(function() {
                        s.find(".share-btn").addClass("share-clipboard").removeClass("share-ok"), s.find(".share-status").hide()
                    }, 2e3)
                })
            }

            function f() {
                s.find(".bitlylink").click(function() {
                    this.setSelectionRange(0, this.value.length)
                })
            }
            s.append(e({}));
            var o = s.find(".bitlylink"),
                u = null;
            f(), this.present = function(e, t) {
                u = n.cleanURL(e, !0), a(u, t), s.find(".btn-bitlylink-open").html(i18n.viewer.shareFromCommon.open), s.find(".share-url-container").toggleClass("touch", !!r("touch")), s.find(".share-btn").attr("title", i18n.viewer.shareFromCommon.copy), s.find(".share-status").html(i18n.viewer.shareFromCommon.copied)
            }, this.focus = function() {
                o.select()
            }, this.setAutoplay = function(e) {
                var t = u;
                e && (t += t.match(/\?/) ? "&" : "?", t += "autoplay"), a(t)
            }
        }
    }), define("lib-build/tpl!storymaps/common/ui/share/ShareEmbedPanel", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="share-embed-container">\r\n	<div class="embed-explain"></div>\r\n\r\n	<div class="share-embed-wrapper">\r\n		<div class="share-btn share-clipboard"></div>	\r\n		<textarea class="form-control embedTextarea" readonly="true"></textarea>\r\n	</div>\r\n	<div class="share-status-wrapper"><span class="share-status"></span></div>\r\n	\r\n	<div>\r\n		<span class="embed-lbl-size"></span>\r\n		<div class="btn-group">\r\n			<button class="btn btn-default btn-sm dropdown-toggle" type="button" data-toggle="dropdown">\r\n				<span class="embed-sizes-btn"></span>&nbsp;<span class="caret"></span>\r\n			</button>\r\n			<ul class="dropdown-menu embed-sizes" role="menu"></ul>\r\n		</div>\r\n	</div>\r\n</div>\r\n';
            return __p
        }
    }), define("lib-build/css!storymaps/common/ui/share/ShareEmbedPanel", [], function() {}), define("storymaps/common/ui/share/ShareEmbedPanel", ["lib-build/tpl!./ShareEmbedPanel", "lib-build/css!./ShareEmbedPanel", "dojo/has", "lib-app/ZeroClipboard/ZeroClipboard.min", "lib-build/css!storymaps/common/_resources/font/builder-share/css/share-font.css"], function(e, t, n, r) {
        return function(i) {
            function f() {
                $.each(o, function(e, t) {
                    i.find(".embed-sizes").append('<li><a data-width="' + t.width + '" data-height="' + t.height + '">' + t.width + " / " + t.height + "</a></li>")
                }), i.find(".embed-sizes a").click(function() {
                    var e = $(this);
                    e.parents(".btn-group").find(".embed-sizes-btn").text(e.text()), l(e.data("width"), e.data("height"))
                })
            }

            function l(e, t) {
                i.find(".embedTextarea").val(s.replace("%URL%", u).replace("%WIDTH%", e).replace("%HEIGHT%", t)), r.config({
                    swfPath: (app.isProduction ? "resources/lib/" : "lib-app") + "/ZeroClipboard/ZeroClipboard.swf"
                });
                var n = new r(i.find(".share-btn"));
                n.on("copy", function(e) {
                    var t = e.clipboardData;
                    t.setData("text/plain", i.find(".embedTextarea").val()), i.find(".share-btn").removeClass("share-clipboard").addClass("share-ok"), i.find(".share-status").show(), i.find(".embedTextarea")[0].selectionStart = i.find(".embedTextarea")[0].selectionEnd = -1, i.find(".bitlylink").focus(), setTimeout(function() {
                        i.find(".share-btn").addClass("share-clipboard").removeClass("share-ok"), i.find(".share-status").hide()
                    }, 2e3)
                })
            }

            function c() {
                i.find(".embedTextarea").click(function() {
                    this.setSelectionRange(0, this.value.length)
                })
            }
            var s = '<iframe width="%WIDTH%" height="%HEIGHT%" src="%URL%" frameborder="0" scrolling="no"></iframe>',
                o = [{
                    width: "100%",
                    height: "800px"
                }, {
                    width: "100%",
                    height: "640px"
                }, {
                    width: "800px",
                    height: "600px"
                }, {
                    width: "640px",
                    height: "480px"
                }],
                u = null,
                a = null;
            i.append(e({})), f(), c(), this.present = function(e) {
                a = e, u = e, i.find(".embed-explain").html(i18n.viewer.shareFromCommon.embedExplain), i.find(".embed-lbl-size").html(i18n.viewer.shareFromCommon.size), i.find(".embed-sizes a").eq(0).click(), i.find(".share-embed-wrapper").toggleClass("touch", !!n("touch")), i.find(".share-clipboard").attr("title", i18n.viewer.shareFromCommon.copy), i.find(".share-status").html(i18n.viewer.shareFromCommon.copied)
            }, this.setAutoplay = function(e) {
                var t = a;
                e && (t += t.match(/\?/) ? "&" : "?", t += "autoplay"), u = t, i.find(".embed-sizes a").eq(0).click()
            }
        }
    }), define("storymaps/common/ui/share/ShareDialog", ["lib-build/tpl!./ShareDialog", "lib-build/css!./ShareDialog", "./ShareURLPanel", "./ShareEmbedPanel", "../../utils/SocialSharing"], function(e, t, n, r, i) {
        return function(s) {
            function a(e) {
                var t = $("<div>" + app.data.getWebAppData().getTitle() + "</div>").text();
                s.find(".share_facebook").toggle(e.facebook), e.facebook && s.find(".share_facebook").off("click").click(function() {
                    i.shareFacebook("", "", null, $(this).data("url"))
                }), s.find(".share_twitter").toggle(e.twitter), e.twitter && s.find(".share_twitter").off("click").click(function() {
                    i.shareTwitter(t, $(this).data("url"))
                })
            }
            s.append(e({}));
            var o = new n(s.find(".share-url-panel")),
                u = new r(s.find(".share-embed-panel"));
            s.on("shown.bs.modal", function() {
                o.focus()
            }), s.find(".autoplay-checkbox").change(function() {
                o.setAutoplay(!!this.checked), u.setAutoplay(!!this.checked), s.find(".autoplay-notification").html(i18n.viewer.shareFromCommon.linksupdated).fadeIn(), setTimeout(function() {
                    s.find(".autoplay-notification").fadeOut()
                }, 1e3)
            }), this.present = function(e, t) {
                t = t || {
                    facebook: !1,
                    twitter: !1
                }, s.find(".social-container").toggle(t.facebook || t.twitter), a(t), o.present(e), u.present(e), s.find(".modal-title").html(i18n.viewer.headerFromCommon.share), s.find(".embed-title").html(i18n.viewer.shareFromCommon.embed), s.find(".btn-close").html(i18n.viewer.common.close), s.find(".autoplay-label").html(i18n.viewer.shareFromCommon.autoplayLabel), s.find(".autoplay-help").tooltip({
                    title: i18n.viewer.shareFromCommon.autoplayExplain1 + "<br /><br />" + i18n.viewer.shareFromCommon.autoplayExplain2,
                    html: !0
                }), s.find(".autoplay-checkbox").prop("checked", !1), s.modal({
                    keyboard: !0
                }), app.appCfg.disableAutoPlay && s.find(".autoplay-container").hide()
            }
        }
    }), define("storymaps/common/utils/HeaderHelper", ["./SocialSharing", "../ui/share/ShareDialog"], function(e, t) {
        function r(e) {
            e.find(".linkContainer").parent().length && e.find(".linkContainer").css("width", (e.find(".logoContainer").position() || {
                left: 186
            }).left - e.find(".linkContainer").parent().position().left - e.find(".shareBtns").outerWidth() - ($(".logoContainer").width() > 1 ? 14 : 4))
        }
        var n = new t($("#shareDialog"));
        return {
            setLogo: function(e, t, n) {
                !t.logoURL || t.logoURL == "NO_LOGO" ? (e.find(".logoImg").hide(), r(e)) : (e.find(".logoLink").css("cursor", t.logoTarget ? "pointer" : "default"), t.logoTarget && e.find(".logoLink").attr("href", t.logoTarget), r(e), e.find(".logoImg")[0].onload = function() {
                    r(e), n && typeof n == "function" && n()
                }, e.find(".logoImg")[0].onerror = function() {
                    r(e)
                }, e.find(".logoImg").attr("src", t.logoURL).show())
            },
            setLink: function(e, t) {
                t.linkURL && t.linkText ? e.find(".linkContainer").html('<a href="' + t.linkURL + '" class="link" target="_blank" tabindex="-1">' + t.linkText + "</a>") : e.find(".linkContainer").html(t.linkText)
            },
            setSocial: function(e, t) {
                var n = app.cfg.HEADER_SOCIAL,
                    r = t.socialBtn,
                    i = n && n.facebook && (!r || r.facebook),
                    s = n && n.twitter && (!r || r.twitter),
                    o = n && n.bitly && n.bitly.enable && n.bitly.login && n.bitly.key && (!r || r.bitly);
                e.find(".share_facebook").toggleClass("active", i), e.find(".share_twitter").toggleClass("active", s), e.find(".share_bitly").toggleClass("active", o), e.find(".share-all").data("share-facebook", i).data("share-twitter", s).toggleClass("active", i || s || o)
            },
            toggleSocialBtnAppSharing: function(e, t) {
                t && e.find(".shareIcon").attr("title", ""), e.find(".shareIcon").toggleClass("disabled", !!t).tooltip(t ? {
                    title: i18n.commonCore ? i18n.commonCore.builderPanel.tooltipNotShared : "",
                    container: "body"
                } : "destroy")
            },
            disableSocialBtnAppSharingAutoplay: function(e, t) {
                e.find(".shareIcon").attr("title", ""), e.find(".shareIcon").toggleClass("disabled", !0).tooltip({
                    title: i18n.viewer.headerFromCommon.tooltipAutoplayDisabled,
                    container: "body",
                    placement: t ? t : "bottom"
                })
            },
            initEvents: function(t) {
                t.find(".share_facebook").off("click").click(function() {
                    if ($(this).hasClass("disabled")) return;
                    var t = $("<div>" + (app.data.getWebAppData().getTitle() || "") + "</div>").text(),
                        n = $("<div>" + (app.data.getWebAppData().getSubtitle() || "") + "</div>").text();
                    e.shareFacebook(t, n, null, $(this).data("url"))
                }), t.find(".share_twitter").off("click").click(function() {
                    if ($(this).hasClass("disabled")) return;
                    var t = $("<div>" + (app.data.getWebAppData().getTitle() || "") + "</div>").text();
                    e.shareTwitter(t, $(this).data("url"))
                }), t.find(".share_bitly").off("click").click(function() {
                    if ($(this).hasClass("disabled")) return;
                    var t = $(this).data("url") || document.location.href;
                    n.present(e.cleanURL(t, !0))
                }), t.find(".share-all").off("click").click(function() {
                    if ($(this).hasClass("disabled")) return;
                    var t = $(this).data("url") || document.location.href;
                    n.present(e.cleanURL(t, !0), {
                        facebook: !!$(this).data("share-facebook"),
                        twitter: !!$(this).data("share-twitter")
                    })
                }), t.find(".shareIcon, .share-all").off("keypress").keypress(function(e) {
                    if (e.which == 13) return $(this).click(), !1
                }), t.find(".share_facebook").attr("title", i18n.viewer.headerFromCommon.facebookTooltip), t.find(".share_twitter").attr("title", i18n.viewer.headerFromCommon.twitterTooltip), t.find(".share_bitly").attr("title", i18n.viewer.headerFromCommon.bitlyTooltip), $(window).resize(function() {
                    r(t)
                })
            }
        }
    }), define("lib-build/css!storymaps/common/builder/InlineFieldEdit", [], function() {}), define("storymaps/common/builder/InlineFieldEdit", ["lib-build/css!./InlineFieldEdit", "dojo/has"], function(e, t) {
        return function(n, r, i) {
            function o(e, t, n) {
                if (!e || !t || !n) return;
                typeof r == "function" && r(), s = n, t.parent().parent().addClass("isEditing"), t.hide(), e.hide(), n.val(t.html()), n.show(), n.select()
            }

            function u(e) {
                if (!e || !e.get(0)) return;
                s = null;
                var n = e.get(0).value,
                    r = e.parent().find(".text_edit_label"),
                    o = e.parent().find(".text_edit_icon"),
                    u = r.parent().first();
                n === "" && (n = i18n.commonCore.inlineFieldEdit.editMe), n = n.replace(/<\/?script>/g, ""), r.parent().parent().removeClass("isEditing"), r.html(n), r.show(), e.hide(), o.css("display", "inline-block"), t("ios") && document.activeElement.blur(), typeof i == "function" && i(u, n)
            }
            var s = null;
            n.find(".text_edit_icon").click(function() {
                o($(this), $(this).parent().find(".text_edit_label"), $(this).parent().find(".text_edit_input"))
            }), n.find(".text_edit_label").click(function() {
                o($(this).parent().find(".text_edit_icon"), $(this), $(this).parent().find(".text_edit_input"))
            }), n.find(".text_edit_input").blur(function() {
                u($(this))
            }), t("ios") && $("body").bind("touchstart", function(e) {
                s && e.target != s.get(0) && u(s)
            }), n.find(".text_edit_input").keypress(function(e) {
                var t = e.keyCode ? e.keyCode : e.which;
                t == "13" && u($(this))
            })
        }
    }), define("storymaps/common/ui/header/Desktop", ["lib-build/css!./Desktop", "../../utils/HeaderHelper", "../../builder/InlineFieldEdit", "../../utils/CommonHelper", "dojo/has", "dojo/topic"], function(e, t, n, r, i, s) {
        return function(o, u) {
            function f() {
                $("#headerDesktop .subtitle:visible").length ? $("#headerDesktop .subtitle")[0].focus() : $("#headerDesktop .title")[0].focus()
            }

            function l(e) {
                o.css("background-color", e.header), o.find(".textArea").css("color", e.headerTitle), o.find(".rightArea").css("color", e.headerText)
            }

            function c(e, n) {
                var r = e.compactSize === undefined ? n : e.compactSize;
                t.setLogo(o, e, a.resize), t.setLink(o, e), t.setSocial(o, e), t.initEvents(o, "bottom"), o.toggleClass("compact", r), r && (o.find(".rightArea").hide(), setTimeout(function() {
                    o.find(".rightArea").show()
                }, 0))
            }

            function h() {
                return o.find(".check-story").hide(), !o.find(".check-story").is(":visible") && !o.find(".share-story").is(":visible") && o.find(".error-status").removeClass("enabled"), a.resize(), !1
            }

            function p() {
                return o.find(".share-story").hide(), !o.find(".check-story").is(":visible") && !o.find(".share-story").is(":visible") && o.find(".error-status").removeClass("enabled"), a.resize(), !1
            }

            function d(e) {
                var t = o.find(".check-story"),
                    n = $('<span aria-hidden="true" class="check-story-close">×</span>'),
                    s = $('<span aria-hidden="true" class="check-story-close">×</span>');
                t.off("click").removeClass("forceEvent").show(), n.click(h), s.click(p), e == "start" ? t.html('<span class="small-loader"></span>' + i18n.viewer.headerFromCommon.checking).append(n).css("cursor", "default") : e == "error" ? t.html(i18n.viewer.headerFromCommon.fix).append(n).css("cursor", "pointer").click(r.switchToBuilder).removeClass("btn-warning").addClass("btn-danger") : t.html(i18n.viewer.headerFromCommon.noerrors).append(n).removeClass("btn-warning").addClass("btn-success"), (i("ff") || i("ie") || i("trident") == 7) && e != "error" && t.click(h).addClass("forceEvent"), o.find(".share-story").html(i18n.viewer.headerFromCommon.notshared).append(s).toggle(app.data.getWebAppItem().access == "private" || app.data.getWebAppItem().access == "shared")
            }

            function v() {}

            function m(e, t) {
                setTimeout(function() {
                    s.publish("HEADER_EDITED", {
                        src: $(e).attr("class").split(" ")[0],
                        value: t
                    }), $(e).removeClass("error")
                }, i("ios") || i("ie") >= 10 ? 700 : 0), app.builder.hideSaveConfirmation()
            }
            var a = this;
            this.init = function(e, t, a, f, h, p, g) {
                l(h);
                if (e) {
                    o.addClass("hideDesktop");
                    return
                }
                u && (o.addClass("isBuilder"), t = "<div class='text_edit_label'>" + (t || i18n.commonCore.inlineFieldEdit.editMe) + "</div>", t += "<div class='text_edit_icon' title='" + i18n.commonCore.header.title.replace("%TPL_NAME%", app.cfg.TPL_NAME) + "'></div>", t += "<textarea rows='1' class='text_edit_input form-control' type='text' spellcheck='true'></textarea>", a = "<span class='text_edit_label'>" + (a || i18n.commonCore.inlineFieldEdit.editMe) + "</span>", a += "<div class='text_edit_icon' title='" + i18n.commonCore.header.subtitle.replace("%TPL_NAME%", app.cfg.TPL_NAME) + "'></div>", a += "<textarea rows='3' class='text_edit_input form-control' type='text' spellcheck='true'></textarea>"), o.find(".title").html(t), o.find(".subtitle").html(a), u && new n(o, v, m);
                if (!u && !a) {
                    var y = f.compactSize === undefined ? g : f.compactSize;
                    y || (o.find(".title").css({
                        paddingTop: 30,
                        height: 90
                    }), o.find(".subtitle").css("height", 32).attr("tabindex", "-1"))
                }
                p && (o.find(".switchBuilder").html('<span class="glyphicon glyphicon-cog"></span>' + i18n.viewer.headerFromCommon.builderButton + '<span aria-hidden="true" class="switch-builder-close">×</span>').click(r.switchToBuilder).show(), i("ff") || i("ie") || i("trident") == 7 ? o.find(".switch-builder-close").hide() : o.find(".switch-builder-close").click(function() {
                    return o.find(".switchBuilder").hide(), $(window).resize(), !1
                })), !app.isInBuilder && app.userCanEdit && i("ie") != 9 && !r.getUrlParams().preview && (o.find(".error-status").addClass("enabled"), s.subscribe("MYSTORIES_SCAN", d), d("start")), c(f, g)
            }, this.resize = function(e) {
                e || (e = $(document).width());
                var t = Math.max(o.find(".logoImg").outerWidth() + 50, o.find(".rightArea").outerWidth() + 20);
                o.find(".textArea").width(e - t - 15)
            }, this.update = function(e, t, n) {
                l(t), c(e, n)
            }, this.getTitle = function() {
                return u ? o.find(".title .text_edit_label").html() : o.find(".title").html()
            }, this.getSubtitle = function() {
                return u ? o.find(".subtitle .text_edit_label").html() : o.find(".subtitle").html()
            }, this.setTitleAndSubtitle = function(e, t) {
                var n = u ? i18n.commonCore.inlineFieldEdit.editMe : "";
                o.find(".title" + (u ? " .text_edit_label" : "")).html(e || n), o.find(".subtitle" + (u ? " .text_edit_label" : "")).html(t || n)
            }, this.toggleSocialBtnAppSharing = function(e) {
                t.toggleSocialBtnAppSharing(o, e)
            }, this.focus = function(e) {
                !e || e.area == "social" ? ($("#headerDesktop .shareIcon").attr("tabindex", "0"), $("#headerDesktop .linkContainer a").length ? $("#headerDesktop .linkContainer a").attr("tabindex", "0")[0].focus() : $("#headerDesktop .linkContainer").length ? $("#headerDesktop .linkContainer").attr("tabindex", "0")[0].focus() : $("#headerDesktop .shareIcon:visible").length ? $("#headerDesktop .shareIcon")[0].focus() : f()) : f()
            }, this.enableAutoplay = function() {
                t.disableSocialBtnAppSharingAutoplay(o)
            }, this.setTitleError = function() {
                o.find(".title").addClass("error")
            }, this.initLocalization = function() {}
        }
    }), define("lib-build/css!storymaps/tpl/core/MainView", [], function() {}), define("storymaps/tpl/core/Config", [], function() {
        var e = "resources/tpl/viewer/icons/esri-logo-white.png",
            t = "http://www.esri.com",
            n = "A story map",
            r = "http://storymaps.arcgis.com";
        return app.appCfg = {
            supportWebmapPreviewAGOL: !1,
            webmapStory: !0,
            createWebmap: !0,
            useWebmapInApp: !0,
            useStandardHeader: !0,
            useAppTitleAsPageTitle: !0,
            headerCompactOpt: !0,
            headerCompactByDefault: !1,
            mapsImmediateResize: !0,
            mapCommandLargerTouch: !1,
            mediaPickerDisableVideo: !0,
            mediaPickerDisableWebPage: !0,
            mediaPickerSkipConfigure: !0,
            mediaPickerConfigureForceMode: "shortlist",
            disableAutoPlay: !0,
            noAppTitleInitScreen: !0,
            mapExtentFit: !0
        }, {
            checkConfigFileIsOK: function() {
                return app.cfg.HEADER_LOGO_URL = e, app.cfg.HEADER_LOGO_TARGET = t, app.cfg.HEADER_LINK_TEXT = n, app.cfg.HEADER_LINK_URL = r, app.cfg && app.cfg.HEADER_LOGO_URL !== undefined && app.cfg.HEADER_LOGO_TARGET !== undefined && app.cfg.HEADER_LINK_TEXT !== undefined && app.cfg.HEADER_LINK_URL !== undefined && app.cfg.HEADER_SOCIAL && app.cfg.TIMEOUT_VIEWER_LOAD && app.cfg.TIMEOUT_VIEWER_REQUEST && app.cfg.TIMEOUT_BUILDER_REQUEST && app.cfg.HELP_URL && app.cfg.HELP_URL_PORTAL && app.cfg.TPL_NAME && app.cfg.WEBAPP_TAG && app.cfg.WEBAPP_KEYWORD_GENERIC && app.cfg.WEBAPP_KEYWORD_APP && app.cfg.AUTHORIZED_IMPORT_SOURCE && app.cfg.FLICKR_API_KEY && app.cfg.FACEBOOK_APP_ID && app.cfg.YOUTUBE_DISABLE_ON_PORTAL !== undefined && app.cfg.YOUTUBE_API_KEY && app.cfg.CORS_SERVER && app.cfg.DEFAULT_SHARING_URL && app.cfg.DEFAULT_PROXY_URL
            }
        }
    }), define("storymaps/tpl/core/WebApplicationData", ["dojo/_base/lang"], function(e) {
        var t = {},
            n = {
                values: {
                    tabs: []
                }
            };
        return {
            set: function(r) {
                t = e.clone(r);
                if (!r || !r.values) return;
                n = r
            },
            get: function() {
                var t = e.clone(n);
                return t.values.template = t.values.template || {}, t.values.template = {
                    name: t.values.template.name || app.cfg.TPL_NAME,
                    createdWith: t.values.template.createdWith || app.version,
                    editedWith: app.version
                }, t
            },
            getOriginalData: function() {
                return t
            },
            isBlank: function() {
                return Object.keys(n.values).length <= 2
            },
            getBlank: function() {
                return {
                    values: {
                        webmap: t.values.webmap
                    }
                }
            },
            getSourceWebmap: function() {
                return t && t.values ? t.values.webmap : null
            },
            cleanWebAppAfterInitialization: function() {
                return !1
            },
            restoreOriginalData: function() {
                this.set(t)
            },
            updateAfterSave: function() {
                t = e.clone(n)
            },
            getTemplateVersion: function() {
                return n.values.template ? n.values.template.editedWith : null
            },
            getTemplateCreation: function() {
                return n.values.template ? n.values.template.creaedWith : null
            },
            getDoNotWarnTitle: function() {
                return n.values.doNotWarnTitle || !1
            },
            setDoNotWarnTitle: function(e) {
                n.values.doNotWarnTitle = e
            },
            getWebmap: function() {
                return n.values.webmap
            },
            setWebmap: function(e) {
                n.values.webmap = e
            },
            getResponse: function() {
                return n.values.response
            },
            setResponse: function(e) {
                n.values.response = e
            },
            getOriginalWebmap: function() {
                return n.values.originalWebmap
            },
            setOriginalWebmap: function(e) {
                n.values.originalWebmap = e
            },
            getMapExtent: function() {
                return n.values.mapExtent
            },
            setMapExtent: function(e) {
                n.values.mapExtent = e
            },
            getTitle: function() {
                return n.values.title
            },
            setTitle: function(e) {
                n.values.title = e
            },
            getSubtitle: function() {
                return n.values.subtitle
            },
            setSubtitle: function(e) {
                n.values.subtitle = e
            },
            getSettings: function() {
                return n.values.settings || {}
            },
            getLayoutId: function() {
                return "shortlist-classic"
            },
            getLayers: function() {
                return n.values.layers
            },
            setLayers: function(e) {
                n.values.layers || (n.values.layers = []), n.values.layers.push(e)
            },
            getShortlistLayerId: function() {
                return n.values.shortlistLayerId
            },
            setShortlistLayerId: function(e) {
                n.values.shortlistLayerId = e
            },
            getTabs: function() {
                return n.values.tabs
            },
            setTabs: function(e) {
                n.values.tabs = e
            },
            clearLayers: function() {
                n.values.layers = []
            },
            reverseContentLayers: function() {
                n.values.contentLayers.reverse()
            },
            getSupportLayers: function() {
                return n.values.supportLayers
            },
            setSupportLayers: function(e) {
                n.values.supportLayers || (n.values.supportLayers = []), n.values.supportLayers.push(e)
            },
            getStoryTestPanel: function() {
                return n.values.testPanel
            },
            setStoryTestPanel: function(e) {
                n.values.testPanel = e
            },
            getLocateBtn: function() {
                return !0
            },
            getGeneralOptions: function() {
                var t = e.clone(this.getSettings().generalOptions) || {};
                return t
            },
            setGeneralOptions: function(e) {
                n.values.settings = n.values.settings || {}, n.values.settings.generalOptions = e
            },
            setDefaultGeneralOptions: function() {
                this.setGeneralOptions({
                    extentMode: "default",
                    numberedIcons: !1,
                    filterByExtent: !0,
                    bookmarks: !1,
                    bookmarksAlias: "Zoom"
                })
            },
            getMapOptions: function() {
                var t = e.clone(this.getSettings().mapOptions) || {};
                return t
            },
            setMapOptions: function(e) {
                n.values.settings = n.values.settings || {}, n.values.settings.mapOptions = e
            },
            setDefaultMapOptions: function() {
                this.setMapOptions({
                    locateBtn: !1,
                    geocoder: !1,
                    bookmarks: !1
                })
            },
            getLayoutOptions: function() {
                var t = e.clone(this.getSettings().layoutOptions) || {};
                return t
            },
            setLayoutOptions: function(e) {
                n.values.settings = n.values.settings || {}, n.values.settings.layoutOptions = e
            },
            setDefaultLayoutOptions: function() {
                this.setLayoutOptions({
                    description: !0
                })
            },
            getColors: function() {
                return {}
            },
            getHeader: function() {
                return this.getSettings().header || {}
            },
            setHeader: function(e) {
                n.values.settings = n.values.settings || {}, n.values.settings.header = e
            },
            getHeaderLinkText: function() {
                return this.getHeader().linkText === undefined ? app.cfg.HEADER_LINK_TEXT : this.getHeader().linkText
            },
            getHeaderLinkURL: function() {
                return this.getHeader().linkURL === undefined ? app.cfg.HEADER_LINK_URL : this.getHeader().linkURL
            },
            getLogoURL: function(e) {
                var t = this.getHeader().logoURL ? this.getHeader().logoURL : app.cfg.HEADER_LOGO_URL;
                return t == app.cfg.HEADER_LOGO_URL && this.getColors() && (e ? this.getColors().esriLogoMobile == "white" && (t = "resources/tpl/viewer/icons/esri-logo-white.png") : this.getColors().esriLogo == "white" && (t = "resources/tpl/viewer/icons/esri-logo-white.png")), t
            },
            getLogoTarget: function() {
                return !this.getHeader().logoURL || this.getHeader().logoURL == app.cfg.HEADER_LOGO_URL ? app.cfg.HEADER_LOGO_TARGET : this.getHeader().logoTarget
            },
            getSocial: function() {
                return this.getHeader().social
            },
            getHeaderCompactSize: function() {
                return this.getHeader().compactSize
            }
        }
    }), define("storymaps/tpl/core/Data", ["./WebApplicationData", "storymaps/common/utils/CommonHelper"], function(e, t) {
        return function() {
            var r = null,
                i = null,
                s = null,
                o = null,
                u = {},
                a = null;
            this.getWebMap = function() {
                return r
            }, this.setWebMap = function(e) {
                r = e
            }, this.getShortlistLayerId = function() {
                return o
            }, this.setShortlistLayerId = function(e) {
                o = e
            }, this.getWebAppItem = function() {
                return i || {}
            }, this.setWebAppItem = function(e) {
                i = e
            }, this.getResponse = function() {
                return s
            }, this.setResponse = function(e) {
                s = e
            }, this.getWebAppData = function() {
                return e
            }, this.updateAfterSave = function() {
                e.updateAfterSave()
            }, this.userIsAppOwner = function() {
                var e = app.portal ? app.portal.getPortalUser() : null;
                return e && e.username == this.getWebAppItem().owner || t.getPortalUser() != null && t.getPortalUser() == this.getWebAppItem().owner || e && e.privileges && $.inArray("portal:admin:updateItems", e.privileges) > -1 || this.getWebAppItem().itemControl == "admin" || this.getWebAppItem().itemControl == "update"
            }, this.userIsOrgaPublisher = function() {
                var e = app.portal ? app.portal.getPortalUser() : null;
                return e && e.orgId && (e.role == "org_admin" || e.role == "org_publisher")
            }, this.checkUserItemPrivileges = function() {
                var e = app.portal ? app.portal.getPortalUser() : null;
                return e && !e.orgId && !e.privileges || e && e.privileges && $.inArray("portal:user:createItem", e.privileges) > -1
            }, this.isOrga = function() {
                return !app.portal || !app.portal.getPortalUser() ? !1 : !!app.portal.getPortalUser().orgId
            }, this.getAppProxies = function() {
                return a
            }, this.setAppProxies = function(e) {
                a = e
            }, this.debug = function() {}, this.getStory = function() {
                return u
            }, this.setStory = function(e, t, n, r) {
                e in u || (u[e] = {
                    title: "",
                    id: e,
                    color: null,
                    extent: null
                }), t && (u[e].title = t), n && (u[e].color = n), r && (u[e].extent = r)
            }, this.clearStory = function() {
                u = {}
            }, this.getStoryByIndex = function(e) {
                return u[e]
            }, this.getStoryLength = function() {
                return app.data.getShortlistLayerId() && app.map.getLayer(app.data.getShortlistLayerId()) && app.map.getLayer(app.data.getShortlistLayerId()).graphics.length ? !!app.map.getLayer(app.data.getShortlistLayerId()).graphics.length : 0
            }, this.storyReadyToScan = function() {
                return !app.isGalleryCreation || app.data.getWebMap().item.id
            }
        }
    }), define("storymaps/tpl/core/Helper", [], function() {
        return function() {
            this.isMobile = function() {
                var e = navigator.userAgent.match(/Android/i) ? !0 : !1,
                    t = navigator.userAgent.match(/BlackBerry/i) ? !0 : !1,
                    n = navigator.userAgent.match(/iPhone|iPad|iPod/i) ? !0 : !1,
                    r = navigator.userAgent.match(/IEMobile/i) ? !0 : !1;
                return e || t || n || r
            }, this.isIE = function() {
                return navigator.appVersion.indexOf("MSIE") > -1 || navigator.userAgent.match(/Trident.*rv\:11\./)
            }, this.isIE8 = function() {
                return parseInt(navigator.userAgent.toLowerCase().split("msie")[1]) < 9
            }, this.prependURLHTTP = function(e) {
                return !e || e === "" || e.match(/^mailto:/) ? e : /^(https?:\/\/)|^(\/\/)/i.test(e) ? e : "http://" + e
            }
        }
    }), define("lib-build/tpl!storymaps/tpl/ui/desktop/TestPanel", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="userInput"></div>';
            return __p
        }
    }), define("lib-build/css!storymaps/tpl/ui/desktop/TestPanel", [], function() {}), define("lib-build/css!storymaps/tpl/ui/desktop/Common", [], function() {}), define("storymaps/tpl/ui/desktop/TestPanel", ["lib-build/tpl!./TestPanel", "lib-build/css!./TestPanel", "lib-build/css!./Common"], function(e) {
        return function(n, r, i) {
            function s() {
                n.find(".userInput").attr("contenteditable", "true")
            }

            function o() {
                r && n.find(".userInput").blur(function() {
                    i($(this).html())
                })
            }
            this.init = function(t) {
                t = t || {}, n.html(e({})), n.show(), r && s(), o()
            }, this.update = function(e) {
                e = e || {}, n.find(".userInput").html(e.data)
            }, this.resize = function() {}, this.showEntryIndex = function() {}, this.destroy = function() {}
        }
    }), define("lib-build/tpl!storymaps/tpl/ui/desktop/TilePanel", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div id="paneLeft">\r\n	<ul id="myList" class="tilelist"></ul>\r\n	<div class="noFeature">\r\n		<span class="noFeatureText">\r\n			None of these places are in your current map extent.\r\n			Zoom out to see places.\r\n		</span>\r\n	</div>\r\n</div>\r\n';
            return __p
        }
    }), define("lib-build/css!storymaps/tpl/ui/desktop/TilePanel", [], function() {}), define("storymaps/tpl/ui/desktop/TilePanel", ["esri/geometry/screenUtils", "../../core/Helper", "lib-build/tpl!./TilePanel", "lib-build/css!./TilePanel", "../../core/WebApplicationData"], function(e, t, n) {
        return function(r, i, s) {
            var o = this,
                u = i,
                a = new t;
            this.tileClick = !0, $(document).bind("cbox_complete", function() {
                $(".details .rightDiv").height($(".details").height() - $(".detailsTitle").height() - 20)
            }), this.init = function() {
                $(r).prepend(n({})), $("#mainStagePanel").width($("#contentPanel").width() - $("#paneLeft").width()), $("#mainStagePanel").css({
                    left: $("#paneLeft").width()
                })
            }, this.resize = function(e) {
                $("#paneLeft").width(e), $(".tilelist").width(e)
            }, this.createTab = function(e, t) {
                $("#tabs").append('<div class="tab" tabindex="0">' + t.title + "</div>")
            }, this.setTabClick = function() {
                $.each($(".entry"), function(e) {
                    $(this).click(function() {
                        u.selected = null, u.activateLayer(e), $(".detailContainer").hide(), app.mapTips && app.mapTips.clean()
                    })
                })
            }, this.clearTilePanel = function() {
                $("#myList").empty()
            }, this.buildTilePanel = function() {
                o.clearTilePanel();
                var e, t, n, r, i, u, a = !1;
                if (!app.layerCurrent || !app.layerCurrent.graphics || !app.layerCurrent.graphics.length) return;
                app.layerCurrent.graphics[0].attributes.number && app.layerCurrent.graphics.sort(function(e, t) {
                    return parseInt(e.attributes.number) - parseInt(t.attributes.number)
                }), $.each(app.layerCurrent.graphics, function(o, f) {
                    app.map.extent.contains(f.geometry) ? (e = "block", a = !0) : app.data.getWebAppData().getGeneralOptions().filterByExtent && !app.isInBuilder && (e = "none"), t = $('<li tabindex="0" id="item' + f.attributes.shortlist_id + '" style="display:' + e + '">'), n = $('<div class="tileImage"></div>'), f.attributes.thumb_url ? ($(n).css("background-image", "url(" + f.attributes.thumb_url + ")"), $(n).find("i").hide()) : f.attributes.pic_url ? ($(n).css("background-image", "url(" + f.attributes.pic_url + ")"), $(n).find("i").hide()) : $(n).append('<i class=" fa fa-camera" aria-hidden="true"></i>'), r = $('<div class="footer"></div>');
                    var l = f.attributes.name || "Place Name";
                    u = $('<div class="blurb">' + l + "</div>"), s.getGeneralOptions().numberedIcons && (f.attributes.number < 100 ? i = $('<div class="num" style="background-color:' + app.layerCurrent.color + '">' + f.attributes.number + "</div>") : (i = $('<div class="num longNum" style="background-color:' + app.layerCurrent.color + '">' + f.attributes.number + "</div>"), u = $('<div class="blurb longNumBlurb">' + f.attributes.name + "</div>")), $(r).append(i)), $(r).append(u), $(t).append(r), $(t).data("shortlist-id", f.attributes.shortlist_id), app.ui.mobileFeatureList.buildList(o, f, t), $(t).append(n), app.isInBuilder && (f.attributes.locationSet ? $(t).addClass("located") : $(t).find(".tileImage").append('<div class="unlocated" style="outline: none;"></div>')), $("#myList").append(t)
                }), o.setTileEvents(), $("ul.tilelist").animate({
                    scrollTop: 0
                }, {
                    duration: 200
                }), !a && app.data.getWebAppData().getGeneralOptions().filterByExtent && !app.isInBuilder ? $(".noFeature").css("display", "block") : $(".noFeature").css("display", "none"), s.getGeneralOptions().numberedIcons || $("ul.tilelist .blurb").addClass("unNumBlurb")
            }, this.findTile = function(e) {
                return $.grep($(r).find($("ul.tilelist li")), function(t) {
                    return t.id == "item" + e
                })[0]
            }, this.findMobileTile = function(e) {
                return $.grep($("ul.mobileTileList li"), function(t) {
                    return t.id == "item" + e
                })[0]
            }, this.setTileEvents = function() {
                console.log("SET TILE EVENTS"), $("ul.tilelist li").mouseover(o.tile_onMouseOver), $("ul.tilelist li").mouseout(o.tile_onMouseOut), $("ul.tilelist li").click(o.tile_onClick)
            }, this.refreshList = function() {
                var e, t, n = !1;
                app.layerCurrent && app.layerCurrent.graphics.length && setTimeout(function() {
                    $.each(app.layerCurrent.graphics, function(r, i) {
                        e = o.findTile(i.attributes.shortlist_id), t = o.findMobileTile(i.attributes.shortlist_id), app.data.getWebAppData().getGeneralOptions().filterByExtent && !app.isInBuilder && (app.map.extent.contains(i.geometry) ? ($(e).css("display") == "none" && $(e).stop().fadeIn(), n = !0) : $(e).css("display") != "none" && $(e).stop().fadeOut(1e3))
                    }), !n && app.data.getWebAppData().getGeneralOptions().filterByExtent && !app.isInBuilder ? $(".noFeature").css("display", "block") : $(".noFeature").css("display", "none")
                }, 100)
            }, this.initSortable = function() {
                $("#myList").sortable({
                    update: function() {
                        app.addFeatureBar.updateNumber()
                    }
                }), $("#myList").addClass("organize")
            }, this.destroySortable = function() {
                $("#myList").sortable("destroy"), $("#myList").css("background-color", "#C7C7C7"), $("body").removeClass("organizeFeatures"), $("#myList").removeClass("organize")
            }, this.tile_onMouseOver = function() {
                var e = this,
                    t = $.grep(app.layerCurrent.graphics, function(t) {
                        return t.attributes.shortlist_id == $(e).data("shortlist-id")
                    });
                t[0].symbol.setWidth(app.cfg.lutIconSpecs.medium.getWidth()), t[0].symbol.setHeight(app.cfg.lutIconSpecs.medium.getHeight()), t[0].symbol.setOffset(app.cfg.lutIconSpecs.medium.getOffsetX(), app.cfg.lutIconSpecs.medium.getOffsetY()), t[0].draw(), a.isIE() || u.moveGraphicToFront(t[0]), u.buildMapHoverTips(t[0].attributes.name, t[0])
            }, this.tile_onMouseOut = function() {
                if (u.selected != null) {
                    var e = parseInt($(this).attr("id").substring(4));
                    if (u.selected.attributes.shortlist_id == e) return
                }
                var t = this,
                    n = $.grep(app.layerCurrent.graphics, function(e) {
                        return e.attributes.shortlist_id == $(t).data("shortlist-id")
                    });
                n[0].symbol.setWidth(app.cfg.lutIconSpecs.tiny.getWidth()), n[0].symbol.setHeight(app.cfg.lutIconSpecs.tiny.getHeight()), n[0].symbol.setOffset(app.cfg.lutIconSpecs.tiny.getOffsetX(), app.cfg.lutIconSpecs.tiny.getOffsetY()), n[0].draw(), app.mapTips && app.mapTips.clean(!0)
            }, this.tile_onClick = function(e) {
                if ($("body").hasClass("organizeFeatures")) return;
                e.which == 1 || e.which == 2 || e.which == 3 ? o.tileClick = !0 : o.tileClick = !1;
                var t = $(this).data("shortlist-id");
                u.preSelection(), u.selected = $.grep(app.layerCurrent.graphics, function(e) {
                    return e.attributes.shortlist_id == t
                })[0], u.postSelection(), $("#mobileTitlePage").css("display", "none"), u.themeSelected || app.ui.mobileFeatureList.selectTheme(0), u.themeSelected = !0
            }
        }
    }), define("lib-build/tpl!storymaps/tpl/ui/desktop/DetailPanel", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="detailContainer swiper-container">\r\n	<button type="button" class=\'detailClose ion-android-close\' style=""></button>\r\n	<div class="detail-btn-container detail-btn-left">\r\n		<div class="detail-btn ion-chevron-left" style="outline: none;"></div>\r\n	</div>\r\n	<div class="detail-btn-container detail-btn-right">\r\n		<div class="detail-btn ion-chevron-right" style="outline: none;"></div>\r\n	</div>\r\n	<div class="detailView swiper-wrapper"></div>\r\n</div>\r\n';
            return __p
        }
    }), define("lib-build/tpl!storymaps/tpl/ui/desktop/DetailSlide", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += "<div class='swiper-slide'>\r\n	<div class='detailHeader'>\r\n		<div class=\"detailFeatureNum\" ></div>\r\n		<div class='detailFeatureTitle'></div>\r\n	</div>\r\n	<div class=\"detailTextContainer\">\r\n		<div class=\"detailPictureDiv\">\r\n			<img>\r\n		</div>\r\n		<div class='description detailFeatureDesc'></div>\r\n		<div class=\"website\"></div>\r\n	</div>\r\n</div>\r\n";
            return __p
        }
    }), define("lib-build/css!storymaps/tpl/ui/desktop/DetailPanel", [], function() {}), define("storymaps/tpl/ui/desktop/DetailPanel", ["../../core/Helper", "lib-build/tpl!./DetailPanel", "lib-build/tpl!./DetailSlide", "lib-build/css!./DetailPanel"], function(e, t, n) {
        return function(i, s, o, u, a) {
            function b() {
                var e = $(".entry.active").index();
                e < 0 && (e = 0), setTimeout(function() {
                    $(".detailContainer").show(), v[e].slideNext(), v[e].slidePrev(), c.resize(), $(".detailContainer").hide()
                }, 0)
            }

            function w() {
                i.find(".userInput").attr("contenteditable", "true")
            }

            function E() {
                s && i.find(".userInput").blur(function() {
                    o($(this).html())
                })
            }
            var f = u,
                l, c = this,
                h = new e,
                p = 0,
                d = !1,
                v = [],
                m = {},
                g = !1,
                y = a;
            c.loaded = !1, c.viewed = !1, this.init = function(e) {
                e = e || {}, $(i).show(), s && w(), E()
            }, this.buildFeatureViews = function() {
                var e = $(".entry.active").index();
                e < 0 && (e = 0);
                var n = [],
                    r = app.map.getLayer(app.data.getShortlistLayerId());
                $.each(r.graphics, function(e, t) {
                    if (!n[t.attributes.tab_id]) {
                        var r = {
                            title: "tab " + (n.length + 1),
                            features: []
                        };
                        n.push(r)
                    }
                }), $.each(r.graphics, function(e, t) {
                    t.attributes.locationSet && t.attributes.pic_url && t.attributes.name && t.attributes.name != "Unnamed Place" && n[t.attributes.tab_id].features.push(t)
                }), d || $.each(n, function(e) {
                    if (e === 0) $(i).prepend(t({}));
                    else {
                        var n = $(i).find(" .detailContainer")[e - 1];
                        $(n).after(t({}))
                    }
                    var r = $(".detailView")[e];
                    $(r).attr("id", "detailView" + e), v[e] = {}, m[String(e)] = []
                }), d = !0;
                if (m[String(e)].length) return;
                $(".detailContainer").css("z-index", "0");
                var s = $(".detailContainer")[e];
                $(s).css("z-index", "99"), p = 0, c.buildSlides(n)
            }, this.buildSlides = function(e) {
                c.loaded = !1, l = e;
                var t = $(".entry.active").index();
                t < 0 && (t = 0);
                var r = l[t],
                    s = r.features,
                    o = app.cfg.COLOR_ORDER.split(",");
                for (; p < s.length; p++) {
                    var u = $(".detailContainer")[t];
                    i.find("#detailView" + t).append(n());
                    var a = $(u).find(".swiper-slide")[p],
                        d = s[p].attributes,
                        y = d.name,
                        w = d.description,
                        E = d.pic_url,
                        S = h.prependURLHTTP(d.website);
                    app.data.getWebAppData().getGeneralOptions().numberedIcons ? ($(a).find(".detailFeatureNum").css("background-color", app.data.getStory()[t].color), $(a).find(".detailFeatureNum").text(d.number)) : ($(a).find(".detailFeatureNum").hide(), $(a).find(".detailFeatureTitle").addClass("notNumbered")), y && $(a).find(".detailFeatureTitle").html(y), E && $(a).find("img").attr("src", E), w && $(a).find(".description").html(w), S && ($(a).find(".website").append("<a href=" + S + ' target="_blank" >More info</a>'), $(".website").show()), $(a).data("shortlist-id", d.shortlist_id), $("#detailView" + t).append(a), m[String(t)].push(a);
                    if (p % 10 === 0 && p + 1 < s.length) return setTimeout(function() {
                        p++, c.buildSlides(e)
                    }, 0), !1;
                    if (p + 1 == s.length) {
                        var x = new Swiper($(".detailContainer")[t], {
                            speed: 0,
                            setWrapperSize: !0,
                            lazyLoading: !0,
                            lazyLoadingInPrevNext: !0
                        });
                        v[t] = x, x.init(), x.update(), x.on("onSlideChangeEnd", function(e) {
                            g || f.preSelection();
                            var t = $(".entry.active").index();
                            t < 0 && (t = 0);
                            if (c.viewed) {
                                var n = x.slides[x.activeIndex],
                                    r = $(n).data("shortlist-id"),
                                    i = $.grep(app.layerCurrent.graphics, function(e) {
                                        return e.attributes.shortlist_id == r
                                    })[0];
                                f.selected = i, (!app.map.extent.contains(f.selected.geometry) && !app.data.getWebAppData().getGeneralOptions().filterByExtent || app.isInBuilder) && app.map.centerAt(f.selected.geometry)
                            }
                            setTimeout(function() {
                                f.buildMapTips()
                            }, 0);
                            if ($(".showOnce").length) {
                                var s = $(".showOnce")[0];
                                $(s).hasClass("swiper-slide-active") || ($(".swiper-slide").removeClass("showOnce"), v[t].removeSlide(v[t].previousIndex), v[t].update())
                            }
                            v[t].slides.length == 1 ? $(".detail-btn-container").hide() : $(".detail-btn-container").show(), c.resize(), x.update(), $(".esriPopup").hide()
                        }), i.find(".detail-btn-left").mouseover(function() {
                            $(".detail-btn-left").css("opacity", 1), $(".detail-btn-right").css("opacity", .8)
                        }), i.find(".detail-btn-right").mouseover(function() {
                            $(".detail-btn-right").css("opacity", 1), $(".detail-btn-left").css("opacity", .8)
                        }), i.find(".detail-btn-left").mouseout(function() {
                            $(".detail-btn-left").css("opacity", .8)
                        }), i.find(".detail-btn-right").mouseout(function() {
                            $(".detail-btn-right").css("opacity", .8)
                        }), i.find(".detailClose").click(function() {
                            i.find(".detailContainer").hide(), app.ui.mobileIntro.screenSize == "small" && app.ui.mobileFeatureList.showMobileList(), f.unselect()
                        }), i.find($(".detail-btn-left")[t]).click(function() {
                            v[t].activeIndex === 0 ? v[t].slideTo(v[t].slides.length - 1, 0) : v[t].slidePrev()
                        }), i.find($(".detail-btn-right")[t]).click(function() {
                            v[t].activeIndex == v[t].slides.length - 1 ? v[t].slideTo(0, 0) : v[t].slideNext()
                        });
                        var T = app.data.getStory()[t].color;
                        $("#detailView" + t).find(".detailHeader").css("border-top-color", T), i.find(".detailPictureDiv img").click(function() {
                            v[t].activeIndex == v[t].slides.length - 1 ? v[t].slideTo(0, 0) : v[t].slideNext()
                        }), c.refreshSlides(), v[t].update(), b(), c.resize()
                    }
                }
                c.loaded = !0, c.viewed = !1
            }, this.showDetails = function(e) {
                c.resize();
                if (e == null) return;
                var t = $(".entry.active").index();
                t < 0 && (t = 0);
                var n = $(".detailContainer")[t];
                $(n).show(), $("#mobilePaneList").css("visibility", "hidden");
                var r;
                $.each($("#detailView" + t).find($(".swiper-slide")), function(t, n) {
                    parseInt($(n).data("shortlist-id")) == e.attributes.shortlist_id && (r = t)
                }), y.getGeneralOptions().numberedIcons || $(".detailFeatureTitle").addClass("notNumbered"), r > -1 && setTimeout(function() {
                    v[t].slideTo(r, 0), $(n).css("z-index", 99)
                }, 0), v[t].slides.length == 1 ? $(".detail-btn-container").hide() : $(".detail-btn-container").show(), v[t].update();
                if ($(".swiper-slide-active img").width() === 0) {
                    var i = $(".swiper-slide-active img")[0],
                        s = $(i).attr("data-src");
                    $(i).attr("src", s)
                }
                c.viewed = !0
            }, this.refreshSlides = function() {
                g = !0;
                _slidesRefreshing = true;
                if (!app.data.getWebAppData().getGeneralOptions().filterByExtent && !app.isInBuilder) {
                  _slidesRefreshing = false;
                  return;
                }
                var e = $(".entry.active").index();
                e < 0 && (e = 0), $(".detailContainer").css("z-index", "0");
                var t = $(".detailContainer")[e];
                $(t).css("z-index", "99");
                if (!l) return;
                var n = l[e],
                    r = n.features,
                    i = null;
                v[e].removeAllSlides(), $.each(r, function(t, n) {
                    app.map.extent.contains(n.geometry) && $.each(m[String(e)], function(t, r) {
                        parseInt($(r).data("shortlist-id")) == n.attributes.shortlist_id && (v[e].appendSlide($(r)[0]), f.selected && parseInt($(r).data("shortlist-id")) == f.selected.attributes.shortlist_id && (i = parseInt(t)))
                    }), f.selected && !app.map.extent.contains(f.selected.geometry) && $.each(m[String(e)], function(t, n) {
                        parseInt($(n).data("shortlist-id")) == f.selected.attributes.shortlist_id && (v[e].appendSlide($(n)[0]), $(n).addClass("showOnce"))
                    })
                }), f.selected && $.each($("#detailView" + e).find($(".swiper-slide")), function(e, t) {
                    parseInt($(t).data("shortlist-id")) == f.selected.attributes.shortlist_id && (i = parseInt(e))
                }), v[e].update(), i != null && v[e].slideTo(i, 0), v[e].slides.length == 1 ? $(".detail-btn-container").hide() : $(".detail-btn-container").show(), g = !1
            }, this.update = function(e) {
                e = e || {}, i.find(".detailContainer").html(e.data)
            }, this.resize = function() {
                setTimeout(function() {
                    var e = 40;
                    app.ui.mobileIntro.screenSize == "small" && ($("#paneLeft").css("height", $("#contentPanel").height() - $("#map").height() + 10), $("#paneLeft").css("width", "100%"), $("#paneLeft").css({
                        top: $("#map").height() - 10
                    }), e = 20);
                    var t = $(".entry.active").index(),
                        n;
                    t < 0 && (t = 0);
                    if (!$.isEmptyObject(v[t])) {
                        var r = v[t];
                        n = r.slides[r.activeIndex]
                    }
                    $(n).height($("#paneLeft").outerHeight() - 5);
                    var i = $(n).find(".detailHeader").outerHeight();
                    $(".detailTextContainer").height($("#paneLeft").outerHeight() - i - e + "px"), $(".detailPictureDiv img").css("max-width", $("#paneLeft").outerWidth());
                    var s = $("#paneLeft").outerHeight() - i - 60 < $("#paneLeft").outerHeight() * .6 ? $("#paneLeft").outerHeight() - i - 60 : $("#paneLeft").outerHeight() * .6;
                    //ORIGINAL CODE
                    //$(".detailPictureDiv img").css("max-height", parseInt(s) + "px"), $(".detailContainer").width($("#paneLeft").outerWidth()), $(".detailContainer").height($("#paneLeft").outerHeight())
                    //CUSTOM CODE
                    // this is where we set the max-height for the images in left pane
                    $(".detailPictureDiv img").css("max-height", "initial"), $(".detailContainer").width($("#paneLeft").outerWidth()), $(".detailContainer").height($("#paneLeft").outerHeight())
                }, 0)
            }, this.showEntryIndex = function() {}, this.destroy = function() {}
        }
    }), define("lib-build/tpl!storymaps/tpl/ui/desktop/NavBar", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="nav-bar">\r\n	<div class="entries">\r\n		<ul class="nav nav-tabs">\r\n			<!--\r\n				tabs and the more button are injected here\r\n			-->\r\n		</ul>\r\n	</div>\r\n	<div class="builder-content-panel inline">\r\n		<span class="builder-content-panel-group builder-edit btn btn-sm btn-default">\r\n			<div class="builder-btn"></div>\r\n			<div class="builder-lbl"></div>\r\n		</span>\r\n\r\n		<span class="builder-content-panel-group builder-add btn btn-sm btn-default">\r\n			<div class="builder-btn"></div>\r\n			<div class="builder-lbl"></div>\r\n		</span>\r\n		<span class="builder-content-panel-group builder-organize btn btn-sm btn-default">\r\n			<div class="builder-btn"></div>\r\n			<div class="builder-lbl"></div>\r\n		</span>\r\n	</div>\r\n	<div class="builder-mask"></div>\r\n	<div id="bookmarksCon">\r\n		<div id="bookmarksButton"></div>\r\n		<div id="bookmarksToggle"> <!--tabindex="0"-->\r\n			<span id="bookmarksTogText"></span>\r\n		</div>\r\n		<div id="bookmarksDiv"></div>\r\n	</div>\r\n</div>\r\n';
            return __p
        }
    }), define("lib-build/css!storymaps/tpl/ui/desktop/NavBar", [], function() {}), define("lib-build/tpl!storymaps/tpl/ui/desktop/NavBarEntry", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<li class="entry ' + ((__t = optHtmlClass) == null ? "" : __t) + '" data-title="' + ((__t = tooltip) == null ? "" : __t) + '">\r\n	<a class="entryLbl" tabindex="0">' + ((__t = value) == null ? "" : __t) + "</a>\r\n</li>\r\n";
            return __p
        }
    }), define("lib-build/tpl!storymaps/tpl/ui/desktop/NavBarEntryMore", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<li class="dropdown pull-right"> <!-- tabindex="0" -->\r\n	<a class="dropdown-toggle" data-toggle="dropdown">\r\n		<span class="glyphicon glyphicon-th-list"></span> <span class="caret"></span>\r\n	</a>\r\n	<ul class="dropdown-menu">\r\n		<!--\r\n			tabs are injected here a second time\r\n			that way they are just toggled and not moved around\r\n		-->\r\n		' + ((__t = entries) == null ? "" : __t) + "\r\n	</ul>\r\n</li>\r\n";
            return __p
        }
    }), define("storymaps/tpl/ui/desktop/NavBar", ["lib-build/tpl!./NavBar", "lib-build/css!./NavBar", "lib-build/tpl!./NavBarEntry", "lib-build/tpl!./NavBarEntryMore", "storymaps/common/utils/CommonHelper", "esri/graphicsUtils", "esri/layers/GraphicsLayer", "esri/geometry/webMercatorUtils", "esri/geometry/Extent", "dojo/topic", "dojo/has"], function(e, t, n, r, i, s, o, u, a, f, l) {
        return function(s, o, u, a) {
            function v(e, t) {
                c = c || [], m(e), $(".nav-bar").addClass("isTab");
                var i = c.length,
                    o = "";
                $.each(c, function(e, t) {
                    var r = t.title;
                    o += n({
                        value: r,
                        tooltip: "",
                        optHtmlClass: ""
                    })
                }), s.find(".nav-tabs").html(o + r({
                    entries: o
                })), s.find(".entry").click(g), s.find(".entryLbl").on("keydown", function(e) {
                    if (e.keyCode === 9) return f.publish("story-tab-navigation", {
                        from: "nav",
                        direction: e.shiftKey ? "backward" : "forward"
                    }), !1
                }), s.find(".entryLbl").eq(0).focus(function() {
                    !$(this).data("mouseDown") && !$(this).parent(".entry").hasClass("active") && $(this).parent(".entry").click()
                }).mousedown(function() {
                    $(this).data("mouseDown", !0)
                }).mouseup(function() {
                    $(this).removeData("mouseDown")
                }), $("#nav-bar").show(), app.isInBuilder && app.addFeatureBar.updateLocatedFeatures(t), l.resize()
            }

            function m(e) {
                s.css("background-color", e.header), i.addCSSRule(".nav-bar .nav > .entry .entryLbl, 					.nav-bar .dropdown-toggle { 						color: " + e.tabText + "; 						background-color: " + e.tab + " !important; 					}", "NavBarTab"), i.addCSSRule(".nav-bar .entry.active > .entryLbl, 					.nav-bar .dropdown.active .dropdown-toggle { 						color: " + e.tabTextActive + "; 						background-color: " + e.tabActive + " !important; 					}", "NavBarActive"), i.addCSSRule(".nav-bar .dropdown:not(.active):hover .dropdown-toggle, 					.nav-bar li:not(.active) .entryLbl:hover { 						color: " + e.tabTextHover + "; 						background-color: " + e.tabHover + " !important; 					}", "NavBarHover"), i.addCSSRule(".nav-bar .dropdown-menu, 					.nav-bar .dropdown-menu .entryLbl { 						color: " + e.tabText + " !important; 						background-color: " + e.header + " !important; 					}", "NavBarMore")
            }

            function g() {
                if ($("body").hasClass("organizeFeatures")) return;
                var e = $(this).index();
                u(e), app.isInBuilder && (app.addFeatureBar.updateLocatedFeatures(), app.addFeatureBar.exitOrganizeMode())
            }

            function y() {
                s.find(".builder-content-panel").css("display", "inline-block"), s.find(".builder-edit").off("click").click(b).find(".builder-lbl").html("Edit Tab"), s.find(".builder-add").off("click").click(l.onClickAdd).find(".builder-lbl").html("Add tab")
            }

            function b() {
                if ($("body").hasClass("organizeFeatures")) return;
                app.builder.openEditPopup({
                    entryIndex: l.getEntryIndex()
                })
            }

            function w(e, t, n) {
                return e.hasOwnProperty(t) && e[t] === n
            }

            function E() {}
            var l = this,
                c = null,
                h = null,
                p = a,
                d = null;
            s.html(e({})), this.init = function(e, t, n, r) {
                c = e, h = null, d = r, v(n, t), this.showEntryIndex(t), c.length == 1 && app.ui.navBar.disableOrganize(), E(), o && y()
            }, this.update = function(e) {
                v(e), this.showEntryIndex(h)
            }, this.resize = function() {
                s.find(".nav-tabs > li").addClass("visible"), s.find(".nav-tabs .dropdown").removeClass("visible"), s.find(".nav-tabs .dropdown-menu li").removeClass("visible");
                var e = 0,
                    t = 0,
                    n = !1,
                    r = s.find(".nav-tabs > li:not(.dropdown)"),
                    i = s.find("li.dropdown").outerWidth(),
                    o = s.width() - s.find(".builder-content-panel:visible").outerWidth() - 30 - 4;
                r.each(function() {
                    t++, e += $(this).outerWidth();
                    if (e > o || e + i > o && t < r.length) n = !0, $(this).removeClass("visible"), s.find(".nav-tabs .dropdown-menu li").eq($(this).index()).addClass("visible")
                });
                var u = s.find(".nav-tabs > .entry.active"),
                    a = s.find(".nav-tabs .dropdown-menu li.active");
                u.length && !u.hasClass("visible") ? (u.removeClass("active"), s.find(".nav-tabs .dropdown-menu li").eq(u.index()).addClass("active"), s.find(".nav-tabs > .dropdown").addClass("active")) : a.length && !a.hasClass("visible") && (a.removeClass("active"), s.find(".nav-tabs > .entry").eq(a.index()).addClass("active"), s.find(".nav-tabs > .dropdown").removeClass("active")), n && s.find(".nav-tabs .dropdown").addClass("visible")
            }, this.showEntryIndex = function(e) {
                var t = s.find(".nav-tabs > .entry.visible").length;
                s.find("li").removeClass("active"), e < t ? (s.find(".entry").eq(e).addClass("active"), app.isLoading || (s.find(".entry").eq(e).find(".entryLbl").focus(), s.find(".dropdown").hasClass("open") && s.find(".dropdown-toggle").click())) : (s.find(".dropdown").addClass("active"), s.find(".dropdown .entry").eq(e).addClass("active"), app.isLoading || (s.find(".dropdown").hasClass("open") || s.find(".dropdown-toggle").click(), s.find(".dropdown .entry").eq(e).focus())), app.isInBuilder && setTimeout(function() {
                    l.resize()
                }, 50), h = e
            }, this.getEntryIndex = function() {
                return h
            }, this.destroy = function() {
                s.hide()
            }, this.bookmarksLoaded = !1, this.initBookmarks = function() {
                var e = app.data.getResponse() ? app.data.getResponse().itemInfo.itemData.bookmarks : app.maps[app.data.getWebAppData().getWebmap()].response.itemInfo.itemData.bookmarks;
                e.length && app.data.getWebAppData().getGeneralOptions().bookmarks && ($("#bookmarksCon").show(), $("#bookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25BC;"), $("#mobileBookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25BC;"), $("#bookmarksToggle").addClass("closed"), $("#mobileBookmarksToggle").addClass("closed"), $("#bookmarksToggle").click(function() {
                    $("#bookmarksDiv").css("display") == "none" ? ($("#bookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25B2;"), $("#bookmarksDiv").css("display", "inline-block"), $("#bookmarksToggle").removeClass("closed"), $("#bookmarksToggle").addClass("open")) : ($("#bookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25BC;"), $("#bookmarksDiv").css("display", "none"), $("#bookmarksToggle").removeClass("open"), $("#bookmarksToggle").addClass("closed")), $("#mobileBookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25BC;")
                }), $("#mobileBookmarksToggle").click(function() {
                    $("#mobileBookmarksDiv").css("display") == "none" ? ($("#mobileBookmarksDiv").css("display", "inline-block"), $("#mobileBookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25B2;"), $("#mobileBookmarksToggle").removeClass("closed"), $("#mobileBookmarksToggle").addClass("open")) : ($("#mobileBookmarksDiv").css("display", "none"), $("#mobileBookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25BC;"), $("#mobileBookmarksToggle").removeClass("open"), $("#mobileBookmarksToggle").addClass("closed"))
                }), $.each(e, function(e, t) {
                    $("#bookmarksDiv").append("<p><a tabindex='0'>" + t.name + "</a></p>"), $("#mobileBookmarksDiv").append("<p><a>" + t.name + "</a></p>")
                }), $("#bookmarksDiv a").click(function() {
                    var t = $(this).html(),
                        n = new esri.geometry.Extent($.grep(e, function(e) {
                            return e.name == t
                        })[0].extent);
                    app.map.setExtent(n), $("#bookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25BC;"), $("#bookmarksDiv").css("display", "none"), $("#bookmarksToggle").removeClass("open"), $("#bookmarksToggle").addClass("closed")
                }), $("#mobileBookmarksDiv a").click(function() {
                    var t = $(this).html(),
                        n = new esri.geometry.Extent($.grep(e, function(e) {
                            return e.name == t
                        })[0].extent);
                    app.map.setExtent(n), $("#mobileBookmarksTogText").html(app.data.getWebAppData().getGeneralOptions().bookmarksAlias + " &#x25BC;"), $("#mobileBookmarksToggle").removeClass("open"), $("#mobileBookmarksToggle").addClass("closed"), $("#mobileBookmarksDiv").css("display", "none")
                })), l.bookmarksLoaded = !0
            }, this.hideBookmarks = function() {
                $("#bookmarksCon").hide()
            }, this.showBookmarks = function() {
                $("#bookmarksCon").show()
            }, this.updateBookmarksAlias = function(e) {
                $("#bookmarksTogText").html(e + " &#x25BC;"), $("#mobileBookmarksTogText").html(e + " &#x25BC;")
            }, this.disableOrganize = function() {
                s.find(".builder-organize").attr("disabled", !0), s.find(".builder-organize").addClass("disabled"), $.each(s.find(".builder-organize").children(), function(e, t) {
                    $(t).addClass("disabled")
                })
            }, this.enableOrganize = function() {
                s.find(".builder-organize").attr("disabled", !1), s.find(".builder-organize").removeClass("disabled"), $.each(s.find(".builder-organize").children(), function(e, t) {
                    $(t).removeClass("disabled")
                })
            }, this.onClickAdd = function(e, t) {
                if ($("body").hasClass("organizeFeatures")) return;
                app.detailPanelBuilder.hideSearch();
                var n = s.find(".nav-tabs .entry.visible").length,
                    r = app.data.getWebAppData().getGeneralOptions().extentMode == "customHome" ? app.data.getWebAppData().getMapExtent() : null,
                    i = {
                        id: n,
                        title: t ? t : "Tab " + (n + 1),
                        features: [],
                        extent: r
                    };
                w(c, "id", n) || (c[n] = i);
                var o = app.cfg.COLOR_ORDER.split(","),
                    a = $.grep(app.cfg.COLOR_SCHEMES, function(e) {
                        return e.name == o[n]
                    });
                i.color = a, $("#paneLeft").css("border-top-color", a[0].color), app.ui.tilePanel.clearTilePanel();
                var h = {
                    header: "#444",
                    tabText: "#d8d8d8",
                    tab: "#666",
                    tabTextActive: "#fff",
                    tabActive: a[0].color,
                    tabTextHover: "#fff",
                    tabHover: "#666"
                };
                app.isGalleryCreation && app.data.getStory()[0].title && (c[0].title = app.data.getStory()[0].title), l.init(c, s.find(".nav-tabs .entry.visible").length, h, d);
                var p = app.map.getLayer(app.data.getShortlistLayerId());
                $.each(p.graphics, function(e, t) {
                    t.hide()
                });
                var v = new esri.layers.GraphicsLayer,
                    m = a[0].color;
                v.color = m, app.layerCurrent = v, app.detailPanelBuilder.addDetailPanelSwiper(n), app.addFeatureBar.exitOrganizeMode(), app.data.setStory(n, i.title, m, r), u(n), l.enableOrganize(), d.getTitle() && f.publish("BUILDER_INCREMENT_COUNTER")
            }
        }
    }), define("storymaps/tpl/ui/desktop/MultiTips", ["dojo/dom-style", "dojo/dom-construct", "dojo/_base/lang", "dojo/on", "dojo/_base/array", "dojo/query", "dojo/dom", "dojo/has"], function(e, t, n, r, i, s, o, u) {
        return function(f) {
            function p(e) {
                l = n.mixin({
                    pointArray: [],
                    map: null,
                    attributeLabelField: "",
                    content: "",
                    selected: !1,
                    zoomToPoints: !1,
                    backgroundColor: "#000000",
                    borderColor: "#000000",
                    pointerColor: "#000000",
                    textColor: "#ffffff",
                    minWidth: "",
                    labelDirection: "auto",
                    offsetTop: 8,
                    offsetSide: 3,
                    offsetBottom: 8,
                    mapAuthorizedMinWidth: -1,
                    mapAuthorizedWidth: -1,
                    mapAuthorizedHeight: -1,
                    visible: !0
                }, e), e.mapAuthorizedWidth == -1 && (l.mapAuthorizedWidth = l.map.width), e.mapAuthorizedHeight == -1 && (l.mapAuthorizedHeight = l.map.height), d(e.map.container)
            }

            function d(n, o) {
                v();
                var u = r(l.map, "zoom-start", function() {
                        y()
                    }),
                    a = r(l.map, "zoom-end", function(e) {
                        c || m(e.extent, !0)
                    }),
                    f = r(l.map, "pan", function(e) {
                        if (!e || !e.delta.x && !e.delta.y) return;
                        c || g(e.extent, e.delta)
                    }),
                    p = r(l.map, "extent-change", function(e) {
                        if (e && e.delta && e.delta.x === 0 && e.delta.y === 0) return;
                        c || m(e.extent, !0)
                    });
                o && (l.visible = !0), l.selected && (l.pointArray.push(l.selected), l.pointArray.reverse(), l.selected.geometry.x == l.pointArray[1].geometry.x && l.selected.geometry.y == l.pointArray[1].geometry.y && l.pointArray.splice(1, 1)), i.forEach(l.pointArray, function(r, i) {
                    t.place("<div id='arrow" + i + "' class='mtArrow'></div><div id='multiTip" + i + "' class='multiTip'></div>", n, "last"), s("#multiTip" + i)[0].innerHTML = i === 0 && l.selected ? l.selected.attributes.name : l.content;
                    var o = $("#multiTip" + i),
                        u = $("#arrow" + i);
                    i === 0 && l.selected ? $(o).addClass("selected") : null, i === 0 && l.selected ? $(u).addClass("selected") : null, e.set("multiTip" + i, {
                        backgroundColor: i === 0 && l.selected ? app.cfg.SELECTED_POPUP_BACKGROUND_COLOR : l.backgroundColor,
                        borderColor: i === 0 && l.selected ? app.cfg.SELECTED_POPUP_BORDER_COLOR : l.borderColor,
                        color: l.textColor,
                        padding: "5px",
                        position: "absolute"
                    }), l.minWidth && e.set("multiTip" + i, "minWidth", l.minWidth + "px"), e.set("arrow" + i, {
                        pointerColor: i === 0 && l.selected ? app.cfg.SELECTED_POPUP_ARROW_COLOR : l.pointerColor,
                        position: "absolute",
                        width: "0px",
                        height: "0px"
                    });
                    if (l.map.extent.contains(r.geometry)) {
                        var a = l.map.toScreen(r.geometry);
                        E(a, i, l)
                    }
                }), h = [u, a, f, p]
            }

            function v(e) {
                c = !1, i.forEach(h, function(e) {
                    e.remove()
                }), e ? (s(".multiTip").forEach(function(e) {
                    $(e).remove()
                }), s(".mtArrow").forEach(function(e) {
                    $(e).remove()
                }), c = !0) : (s(".multiTip").forEach(function(e) {
                    $(e).hasClass("selected") || $(e).remove()
                }), s(".mtArrow").forEach(function(e) {
                    $(e).hasClass("selected") || $(e).remove()
                }))
            }

            function m(e, t) {
                i.forEach(l.pointArray, function(n, r) {
                    e.contains(n.geometry) && (w(r) || t) ? E(l.map.toScreen(n.geometry), r, l) : b(r)
                })
            }

            function g(e, t) {
                i.forEach(l.pointArray, function(n, r) {
                    if (e.contains(n.geometry)) {
                        var i = l.map.toScreen(n.geometry);
                        i.x += t.x, i.y += t.y, E(i, r, l)
                    } else b(r)
                })
            }

            function y() {
                s(".multiTip, .mtArrow").forEach(function(e) {
                    $(e).hasClass("selected") || (e.style.display = "none")
                })
            }

            function b(t) {
                if (!o.byId("multiTip" + t)) return;
                if (e.get(o.byId("multiTip" + t), "display") == "none") return;
                e.set(o.byId("multiTip" + t), "display", "none"), e.set(o.byId("arrow" + t), "display", "none")
            }

            function w(t) {
                if (o.byId("multiTip" + t)) return e.get(o.byId("multiTip" + t), "display") == "block"
            }

            function E(t, n, r) {
                if (!o.byId("multiTip" + n)) return;
                if (t.x > r.mapAuthorizedWidth || t.y > r.mapAuthorizedHeight) {
                    b(n);
                    return
                }
                var i = n === 0 && r.selected ? 44 : r.offsetTop;
                if (u("ie") > 0 || /Trident\/7\./.test(navigator.userAgent)) i += 10;
                var s = e.get("multiTip" + n, "width"),
                    a = e.get("multiTip" + n, "height");
                u("ie") == 8 && (s -= 7, a -= 14);
                if (!s || !a) e.set(o.byId("multiTip" + n), "display", r.visible ? "block" : "none"), e.set(o.byId("arrow" + n), "display", r.visible ? "block" : "none"), s = e.get("multiTip" + n, "width"), a = e.get("multiTip" + n, "height");
                r.minWidth && s < r.minWidth && (s = r.minWidth);
                if (r.labelDirection != "auto") r.labelDirection == "left" ? N(t, n, r, s, a) : r.labelDirection == "right" ? T(t, n, r, s, a) : r.labelDirection == "down" ? S(t, n, r, s, a) : x(t, n, r, s, a, i);
                else if (t.x < s / 2 + 25 + r.offsetSide + r.topLeftNotAuthorizedArea[0] && t.y < r.topLeftNotAuthorizedArea[1] + a) {
                    if (t.y < a - 15 || t.x < 35 + r.topLeftNotAuthorizedArea[0] && t.y < r.topLeftNotAuthorizedArea[1]) {
                        b(n);
                        return
                    }
                    T(t, n, r, s, a)
                } else if (t.x < s / 2 + 25 + r.offsetSide) {
                    if (t.y < a - 15 || t.y > r.mapAuthorizedHeight - a / 2 - 10) {
                        b(n);
                        return
                    }
                    T(t, n, r, s, a)
                } else if (t.x > r.mapAuthorizedWidth - s / 2 - 10) {
                    if (t.y < a - 15 || t.y > r.mapAuthorizedHeight - a / 2 - 10) {
                        b(n);
                        return
                    }
                    N(t, n, r, s, a)
                } else if (t.x < r.mapAuthorizedMinWidth + s / 2) {
                    if (t.y < a - 15 || t.y > r.mapAuthorizedHeight - a / 2 - 10 || t.x < r.mapAuthorizedMinWidth) {
                        b(n);
                        return
                    }
                    T(t, n, r, s, a)
                } else t.y > a + 25 + i ? x(t, n, r, s, a, i) : S(t, n, r, s, a);
                e.set(o.byId("multiTip" + n), "display", r.visible ? "block" : "none"), e.set(o.byId("arrow" + n), "display", r.visible ? "block" : "none")
            }

            function S(t, n, r, i) {
                e.set("multiTip" + n, {
                    top: t.y + 3 + r.offsetBottom + "px",
                    left: t.x - i / 2 - 5 + "px"
                }), e.set("arrow" + n, {
                    left: t.x - 10 + "px",
                    top: t.y + r.offsetBottom - 5 + "px",
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderBottom: "10px solid",
                    borderBottomColor: n === 0 && r.selected ? app.cfg.SELECTED_POPUP_ARROW_COLOR : r.pointerColor,
                    borderTop: "none"
                })
            }

            function x(t, n, r, i, s, o) {
                e.set("multiTip" + n, {
                    top: t.y - s - 10 - o + "px",
                    left: t.x - i / 2 + 0 + "px"
                });
                if (u("ie") > 0 || /Trident\/7\./.test(navigator.userAgent)) o -= 10;
                e.set("arrow" + n, {
                    left: t.x - 10 + "px",
                    top: t.y - 10 - o + "px",
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "10px solid",
                    borderTopColor: n === 0 && r.selected ? app.cfg.SELECTED_POPUP_ARROW_COLOR : r.pointerColor,
                    borderBottom: "none"
                })
            }

            function T(t, n, r, i, s) {
                var o = n === 0 && r.selected ? 5 : 0;
                e.set("multiTip" + n, {
                    top: t.y - 22 - o - (s - 10) / 2 + "px",
                    left: t.x + 17 + r.offsetSide + "px"
                }), e.set("arrow" + n, {
                    left: t.x + 8 + r.offsetSide + "px",
                    top: t.y - 26 - o + "px",
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderRight: "10px solid",
                    borderRightColor: n === 0 && r.selected ? app.cfg.SELECTED_POPUP_ARROW_COLOR : r.pointerColor,
                    borderLeft: "none"
                })
            }

            function N(t, n, r, i, s) {
                var o = n === 0 && r.selected ? 5 : 0;
                e.set("multiTip" + n, {
                    top: t.y - 22 - o - (s - 10) / 2 + "px",
                    left: t.x - 18 - i - r.offsetSide + "px"
                }), e.set("arrow" + n, {
                    left: t.x - 18 - r.offsetSide + "px",
                    top: t.y - 26 - o + "px",
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: "10px solid",
                    borderLeftColor: n === 0 && r.selected ? app.cfg.SELECTED_POPUP_ARROW_COLOR : r.pointerColor,
                    borderRight: "none"
                })
            }
            var l = null,
                c = !1,
                h = [];
            p(f), this.current = function() {
                return l.pointArray
            }, this.clean = function(e) {
                l = null, v(e)
            }, this.hide = function() {
                c = !0, y()
            }, this.show = function() {
                if (!l) return;
                c = !1, l.visible = !0, m(l.map.extent, !0)
            }
        }
    }), define("lib-build/tpl!storymaps/tpl/ui/mobile/MobileIntro", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div id="mobileIntro"></div>\r\n';
            return __p
        }
    }), define("lib-build/css!storymaps/tpl/ui/mobile/MobileIntro", [], function() {}), define("storymaps/tpl/ui/mobile/MobileIntro", ["lib-build/tpl!./MobileIntro", "lib-build/css!./MobileIntro", "dojo/on"], function(e) {
        return function(n, r, i, s) {
            function a() {
                app.map.on("click", function() {
                    $("#mobileIntro").css("display", "none")
                })
            }
            var o = s,
                u = this;
            this.screenSize = "desktop", this.init = function() {
                $(n).prepend(e({}))
            }, this.hide = function() {
                $("#mobileIntro").hide()
            }, this.setTitle = function() {
                var e = app.data.getWebAppData().getTitle(),
                    t = app.data.getWebAppData().getSubtitle();
                $("#mobileIntro").append('<div class="mobileTitle">' + e + "</div>"), $("#mobileIntro").append('<div class="mobileSnippet"></div>'), t && $(".mobileSnippet").html(t), a()
            }, this.fillList = function(e, t, n) {
                e === 0 && $("#mobileIntro").append('<ul id="mobileThemeList" style=" height: 80px; line-height: 80px;" class="mobileTileList introList">');
                var r = $('<li class="mobileTitleThemes">').append('<span style="width: 100%;margin-left: 30px; margin-right: 30px; vertical-align: middle; line-height: 20px; display: inline-block;">' + t.title + "</span>");
                r.on("click", function() {
                    u.selectMobileTheme(e)
                }), e === 0 && $(r).css("border-width", "2px 0px 1px 0px"), e == n.length - 1 && $(r).css("border-width", "1px 0px 2px 0px"), $("#mobileThemeList").append(r)
            }, this.resizeMobileElements = function() {
                u.screenSize == "desktop" && !o.selected && app.ui.mobileFeatureList.showMobileList();
                var e = $(window).height() * .48 - 20;
                $("#map").css("height", e), $("#map").css({
                    top: 0
                }), $("#mainStagePanel").css({
                    left: 0
                }), $("#mainStagePanel").css("width", "100%"), $("#map").css("width", "100%"), $("#mainStagePanel").height($("#map").height()), $("#paneLeft").css("height", "52%").css("height", "+=20px"), $("#paneLeft").css("top", "52%").css("top", "-=20px"), $("#mobileThemeBar").css("top", "48%").css("top", $("#mobileThemeBar").position().top - 20 + "px");
                var t = $(".mobileThemeTitle").length;
                $("#mobileThemeBarSlider").width($(window).width() * t), $("#returnHiddenBar").css("width", "100%").css("width", "-=80px"), $("#mobilePaneList").css("height", "52%").css("height", "-=20px"), $(".mobileTileList.blurb").css("width", "100%").css("width", "-=125px"), u.screenSize = "small", setTimeout(function() {}, 0)
            }, this.selectMobileTheme = function(e) {
                e !== 0 && o.activateLayer(e), $("#contentPanel").css("display", "block"), $("#mobileIntro").css("display", "none"), $(window).resize(), app.ui.mobileFeatureList.selectTheme(e), o.themeSelected = !0
            }
        }
    }), define("lib-build/css!storymaps/tpl/ui/mobile/MobileFeatureList", [], function() {}), define("lib-build/css!lib-app/Swiper/swiper.min", [], function() {}),
    function() {
        "use strict";

        function o(e) {
            e.fn.swiper = function(n) {
                var r;
                return e(this).each(function() {
                    var e = new t(this, n);
                    r || (r = e)
                }), r
            }
        }
        var e, t = function(r, i) {
            function d(e) {
                return Math.floor(e)
            }

            function v() {
                h.autoplayTimeoutId = setTimeout(function() {
                    h.params.loop ? (h.fixLoop(), h._slideNext(), h.emit("onAutoplay", h)) : h.isEnd ? i.autoplayStopOnLast ? h.stopAutoplay() : (h._slideTo(0), h.emit("onAutoplay", h)) : (h._slideNext(), h.emit("onAutoplay", h))
                }, h.params.autoplay)
            }

            function g(t, n) {
                var r = e(t.target);
                if (!r.is(n))
                    if (typeof n == "string") r = r.parents(n);
                    else if (n.nodeType) {
                    var i;
                    return r.parents().each(function(e, t) {
                        t === n && (i = n)
                    }), i ? n : undefined
                }
                return r.length === 0 ? undefined : r[0]
            }

            function D(e, t) {
                t = t || {};
                var n = window.MutationObserver || window.WebkitMutationObserver,
                    r = new n(function(e) {
                        e.forEach(function(e) {
                            h.onResize(!0), h.emit("onObserverUpdate", h, e)
                        })
                    });
                r.observe(e, {
                    attributes: typeof t.attributes == "undefined" ? !0 : t.attributes,
                    childList: typeof t.childList == "undefined" ? !0 : t.childList,
                    characterData: typeof t.characterData == "undefined" ? !0 : t.characterData
                }), h.observers.push(r)
            }

            function P(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!h.params.allowSwipeToNext && (h.isHorizontal() && t === 39 || !h.isHorizontal() && t === 40)) return !1;
                if (!h.params.allowSwipeToPrev && (h.isHorizontal() && t === 37 || !h.isHorizontal() && t === 38)) return !1;
                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === "input" || document.activeElement.nodeName.toLowerCase() === "textarea")) return;
                if (t === 37 || t === 39 || t === 38 || t === 40) {
                    var n = !1;
                    if (h.container.parents(".swiper-slide").length > 0 && h.container.parents(".swiper-slide-active").length === 0) return;
                    var r = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        i = window.innerWidth,
                        s = window.innerHeight,
                        o = h.container.offset();
                    h.rtl && (o.left = o.left - h.container[0].scrollLeft);
                    var u = [
                        [o.left, o.top],
                        [o.left + h.width, o.top],
                        [o.left, o.top + h.height],
                        [o.left + h.width, o.top + h.height]
                    ];
                    for (var a = 0; a < u.length; a++) {
                        var f = u[a];
                        f[0] >= r.left && f[0] <= r.left + i && f[1] >= r.top && f[1] <= r.top + s && (n = !0)
                    }
                    if (!n) return
                }
                if (h.isHorizontal()) {
                    if (t === 37 || t === 39) e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                    (t === 39 && !h.rtl || t === 37 && h.rtl) && h.slideNext(), (t === 37 && !h.rtl || t === 39 && h.rtl) && h.slidePrev()
                } else {
                    if (t === 38 || t === 40) e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                    t === 40 && h.slideNext(), t === 38 && h.slidePrev()
                }
            }

            function B(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = h.mousewheel.event,
                    n = 0,
                    r = h.rtl ? -1 : 1;
                if (t === "mousewheel")
                    if (h.params.mousewheelForceToAxis)
                        if (h.isHorizontal()) {
                            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                            n = e.wheelDeltaX * r
                        } else {
                            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                            n = e.wheelDeltaY
                        } else n = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * r : -e.wheelDeltaY;
                else if (t === "DOMMouseScroll") n = -e.detail;
                else if (t === "wheel")
                    if (h.params.mousewheelForceToAxis)
                        if (h.isHorizontal()) {
                            if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                            n = -e.deltaX * r
                        } else {
                            if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                            n = -e.deltaY
                        } else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * r : -e.deltaY;
                if (n === 0) return;
                h.params.mousewheelInvert && (n = -n);
                if (!h.params.freeMode) {
                    if ((new window.Date).getTime() - h.mousewheel.lastScrollTime > 60)
                        if (n < 0) {
                            if ((!h.isEnd || h.params.loop) && !h.animating) h.slideNext();
                            else if (h.params.mousewheelReleaseOnEdges) return !0
                        } else if ((!h.isBeginning || h.params.loop) && !h.animating) h.slidePrev();
                    else if (h.params.mousewheelReleaseOnEdges) return !0;
                    h.mousewheel.lastScrollTime = (new window.Date).getTime()
                } else {
                    var i = h.getWrapperTranslate() + n * h.params.mousewheelSensitivity,
                        s = h.isBeginning,
                        o = h.isEnd;
                    i >= h.minTranslate() && (i = h.minTranslate()), i <= h.maxTranslate() && (i = h.maxTranslate()), h.setWrapperTransition(0), h.setWrapperTranslate(i), h.updateProgress(), h.updateActiveIndex(), (!s && h.isBeginning || !o && h.isEnd) && h.updateClasses(), h.params.freeModeSticky ? (clearTimeout(h.mousewheel.timeout), h.mousewheel.timeout = setTimeout(function() {
                        h.slideReset()
                    }, 300)) : h.params.lazyLoading && h.lazy && h.lazy.load();
                    if (i === 0 || i === h.maxTranslate()) return
                }
                return h.params.autoplay && h.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }

            function j(t, n) {
                t = e(t);
                var r, i, s, o = h.rtl ? -1 : 1;
                r = t.attr("data-swiper-parallax") || "0", i = t.attr("data-swiper-parallax-x"), s = t.attr("data-swiper-parallax-y"), i || s ? (i = i || "0", s = s || "0") : h.isHorizontal() ? (i = r, s = "0") : (s = r, i = "0"), i.indexOf("%") >= 0 ? i = parseInt(i, 10) * n * o + "%" : i = i * n * o + "px", s.indexOf("%") >= 0 ? s = parseInt(s, 10) * n + "%" : s = s * n + "px", t.transform("translate3d(" + i + ", " + s + ",0px)")
            }

            function q(e) {
                return e.indexOf("on") !== 0 && (e[0] !== e[0].toUpperCase() ? e = "on" + e[0].toUpperCase() + e.substring(1) : e = "on" + e), e
            }
            if (this instanceof t) {
                var s = {
                        direction: "horizontal",
                        touchEventsTarget: "container",
                        initialSlide: 0,
                        speed: 300,
                        autoplay: !1,
                        autoplayDisableOnInteraction: !0,
                        autoplayStopOnLast: !1,
                        iOSEdgeSwipeDetection: !1,
                        iOSEdgeSwipeThreshold: 20,
                        freeMode: !1,
                        freeModeMomentum: !0,
                        freeModeMomentumRatio: 1,
                        freeModeMomentumBounce: !0,
                        freeModeMomentumBounceRatio: 1,
                        freeModeSticky: !1,
                        freeModeMinimumVelocity: .02,
                        autoHeight: !1,
                        setWrapperSize: !1,
                        virtualTranslate: !1,
                        effect: "slide",
                        coverflow: {
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: !0
                        },
                        flip: {
                            slideShadows: !0,
                            limitRotation: !0
                        },
                        cube: {
                            slideShadows: !0,
                            shadow: !0,
                            shadowOffset: 20,
                            shadowScale: .94
                        },
                        fade: {
                            crossFade: !1
                        },
                        parallax: !1,
                        scrollbar: null,
                        scrollbarHide: !0,
                        scrollbarDraggable: !1,
                        scrollbarSnapOnRelease: !1,
                        keyboardControl: !1,
                        mousewheelControl: !1,
                        mousewheelReleaseOnEdges: !1,
                        mousewheelInvert: !1,
                        mousewheelForceToAxis: !1,
                        mousewheelSensitivity: 1,
                        hashnav: !1,
                        breakpoints: undefined,
                        spaceBetween: 0,
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerColumnFill: "column",
                        slidesPerGroup: 1,
                        centeredSlides: !1,
                        slidesOffsetBefore: 0,
                        slidesOffsetAfter: 0,
                        roundLengths: !1,
                        touchRatio: 1,
                        touchAngle: 45,
                        simulateTouch: !0,
                        shortSwipes: !0,
                        longSwipes: !0,
                        longSwipesRatio: .5,
                        longSwipesMs: 300,
                        followFinger: !0,
                        onlyExternal: !1,
                        threshold: 0,
                        touchMoveStopPropagation: !0,
                        uniqueNavElements: !0,
                        pagination: null,
                        paginationElement: "span",
                        paginationClickable: !1,
                        paginationHide: !1,
                        paginationBulletRender: null,
                        paginationProgressRender: null,
                        paginationFractionRender: null,
                        paginationCustomRender: null,
                        paginationType: "bullets",
                        resistance: !0,
                        resistanceRatio: .85,
                        nextButton: null,
                        prevButton: null,
                        watchSlidesProgress: !1,
                        watchSlidesVisibility: !1,
                        grabCursor: !1,
                        preventClicks: !0,
                        preventClicksPropagation: !0,
                        slideToClickedSlide: !1,
                        lazyLoading: !1,
                        lazyLoadingInPrevNext: !1,
                        lazyLoadingInPrevNextAmount: 1,
                        lazyLoadingOnTransitionStart: !1,
                        preloadImages: !0,
                        updateOnImagesReady: !0,
                        loop: !1,
                        loopAdditionalSlides: 0,
                        loopedSlides: null,
                        control: undefined,
                        controlInverse: !1,
                        controlBy: "slide",
                        allowSwipeToPrev: !0,
                        allowSwipeToNext: !0,
                        swipeHandler: null,
                        noSwiping: !0,
                        noSwipingClass: "swiper-no-swiping",
                        slideClass: "swiper-slide",
                        slideActiveClass: "swiper-slide-active",
                        slideVisibleClass: "swiper-slide-visible",
                        slideDuplicateClass: "swiper-slide-duplicate",
                        slideNextClass: "swiper-slide-next",
                        slidePrevClass: "swiper-slide-prev",
                        wrapperClass: "swiper-wrapper",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet-active",
                        buttonDisabledClass: "swiper-button-disabled",
                        paginationCurrentClass: "swiper-pagination-current",
                        paginationTotalClass: "swiper-pagination-total",
                        paginationHiddenClass: "swiper-pagination-hidden",
                        paginationProgressbarClass: "swiper-pagination-progressbar",
                        observer: !1,
                        observeParents: !1,
                        a11y: !1,
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        runCallbacksOnInit: !0
                    },
                    o = i && i.virtualTranslate;
                i = i || {};
                var u = {};
                for (var a in i)
                    if (typeof i[a] == "object" && i[a] !== null && !(i[a].nodeType || i[a] === window || i[a] === document || typeof n != "undefined" && i[a] instanceof n || typeof jQuery != "undefined" && i[a] instanceof jQuery)) {
                        u[a] = {};
                        for (var f in i[a]) u[a][f] = i[a][f]
                    } else u[a] = i[a];
                for (var l in s)
                    if (typeof i[l] == "undefined") i[l] = s[l];
                    else if (typeof i[l] == "object")
                    for (var c in s[l]) typeof i[l][c] == "undefined" && (i[l][c] = s[l][c]);
                var h = this;
                h.params = i, h.originalParams = u, h.classNames = [], typeof e != "undefined" && typeof n != "undefined" && (e = n);
                if (typeof e == "undefined") {
                    typeof n == "undefined" ? e = window.Dom7 || window.Zepto || window.jQuery : e = n;
                    if (!e) return
                }
                h.$ = e, h.currentBreakpoint = undefined, h.getActiveBreakpoint = function() {
                    if (!h.params.breakpoints) return !1;
                    var e = !1,
                        t = [],
                        n;
                    for (n in h.params.breakpoints) h.params.breakpoints.hasOwnProperty(n) && t.push(n);
                    t.sort(function(e, t) {
                        return parseInt(e, 10) > parseInt(t, 10)
                    });
                    for (var r = 0; r < t.length; r++) n = t[r], n >= window.innerWidth && !e && (e = n);
                    return e || "max"
                }, h.setBreakpoint = function() {
                    var e = h.getActiveBreakpoint();
                    if (e && h.currentBreakpoint !== e) {
                        var t = e in h.params.breakpoints ? h.params.breakpoints[e] : h.originalParams,
                            n = h.params.loop && t.slidesPerView !== h.params.slidesPerView;
                        for (var r in t) h.params[r] = t[r];
                        h.currentBreakpoint = e, n && h.destroyLoop && h.reLoop(!0)
                    }
                }, h.params.breakpoints && h.setBreakpoint(), h.container = e(r);
                if (h.container.length === 0) return;
                if (h.container.length > 1) {
                    var p = [];
                    return h.container.each(function() {
                        var e = this;
                        p.push(new t(this, i))
                    }), p
                }
                h.container[0].swiper = h, h.container.data("swiper", h), h.classNames.push("swiper-container-" + h.params.direction), h.params.freeMode && h.classNames.push("swiper-container-free-mode"), h.support.flexbox || (h.classNames.push("swiper-container-no-flexbox"), h.params.slidesPerColumn = 1), h.params.autoHeight && h.classNames.push("swiper-container-autoheight");
                if (h.params.parallax || h.params.watchSlidesVisibility) h.params.watchSlidesProgress = !0;
                ["cube", "coverflow", "flip"].indexOf(h.params.effect) >= 0 && (h.support.transforms3d ? (h.params.watchSlidesProgress = !0, h.classNames.push("swiper-container-3d")) : h.params.effect = "slide"), h.params.effect !== "slide" && h.classNames.push("swiper-container-" + h.params.effect), h.params.effect === "cube" && (h.params.resistanceRatio = 0, h.params.slidesPerView = 1, h.params.slidesPerColumn = 1, h.params.slidesPerGroup = 1, h.params.centeredSlides = !1, h.params.spaceBetween = 0, h.params.virtualTranslate = !0, h.params.setWrapperSize = !1);
                if (h.params.effect === "fade" || h.params.effect === "flip") h.params.slidesPerView = 1, h.params.slidesPerColumn = 1, h.params.slidesPerGroup = 1, h.params.watchSlidesProgress = !0, h.params.spaceBetween = 0, h.params.setWrapperSize = !1, typeof o == "undefined" && (h.params.virtualTranslate = !0);
                h.params.grabCursor && h.support.touch && (h.params.grabCursor = !1), h.wrapper = h.container.children("." + h.params.wrapperClass), h.params.pagination && (h.paginationContainer = e(h.params.pagination), h.params.uniqueNavElements && typeof h.params.pagination == "string" && h.paginationContainer.length > 1 && h.container.find(h.params.pagination).length === 1 && (h.paginationContainer = h.container.find(h.params.pagination)), h.params.paginationType === "bullets" && h.params.paginationClickable ? h.paginationContainer.addClass("swiper-pagination-clickable") : h.params.paginationClickable = !1, h.paginationContainer.addClass("swiper-pagination-" + h.params.paginationType));
                if (h.params.nextButton || h.params.prevButton) h.params.nextButton && (h.nextButton = e(h.params.nextButton), h.params.uniqueNavElements && typeof h.params.nextButton == "string" && h.nextButton.length > 1 && h.container.find(h.params.nextButton).length === 1 && (h.nextButton = h.container.find(h.params.nextButton))), h.params.prevButton && (h.prevButton = e(h.params.prevButton), h.params.uniqueNavElements && typeof h.params.prevButton == "string" && h.prevButton.length > 1 && h.container.find(h.params.prevButton).length === 1 && (h.prevButton = h.container.find(h.params.prevButton)));
                h.isHorizontal = function() {
                    return h.params.direction === "horizontal"
                }, h.rtl = h.isHorizontal() && (h.container[0].dir.toLowerCase() === "rtl" || h.container.css("direction") === "rtl"), h.rtl && h.classNames.push("swiper-container-rtl"), h.rtl && (h.wrongRTL = h.wrapper.css("display") === "-webkit-box"), h.params.slidesPerColumn > 1 && h.classNames.push("swiper-container-multirow"), h.device.android && h.classNames.push("swiper-container-android"), h.container.addClass(h.classNames.join(" ")), h.translate = 0, h.progress = 0, h.velocity = 0, h.lockSwipeToNext = function() {
                    h.params.allowSwipeToNext = !1
                }, h.lockSwipeToPrev = function() {
                    h.params.allowSwipeToPrev = !1
                }, h.lockSwipes = function() {
                    h.params.allowSwipeToNext = h.params.allowSwipeToPrev = !1
                }, h.unlockSwipeToNext = function() {
                    h.params.allowSwipeToNext = !0
                }, h.unlockSwipeToPrev = function() {
                    h.params.allowSwipeToPrev = !0
                }, h.unlockSwipes = function() {
                    h.params.allowSwipeToNext = h.params.allowSwipeToPrev = !0
                }, h.params.grabCursor && (h.container[0].style.cursor = "move", h.container[0].style.cursor = "-webkit-grab", h.container[0].style.cursor = "-moz-grab", h.container[0].style.cursor = "grab"), h.imagesToLoad = [], h.imagesLoaded = 0, h.loadImage = function(e, t, n, r, i) {
                    function o() {
                        i && i()
                    }
                    var s;
                    !e.complete || !r ? t ? (s = new window.Image, s.onload = o, s.onerror = o, n && (s.srcset = n), t && (s.src = t)) : o() : o()
                }, h.preloadImages = function() {
                    function e() {
                        if (typeof h == "undefined" || h === null) return;
                        h.imagesLoaded !== undefined && h.imagesLoaded++, h.imagesLoaded === h.imagesToLoad.length && (h.params.updateOnImagesReady && h.update(), h.emit("onImagesReady", h))
                    }
                    h.imagesToLoad = h.container.find("img");
                    for (var t = 0; t < h.imagesToLoad.length; t++) h.loadImage(h.imagesToLoad[t], h.imagesToLoad[t].currentSrc || h.imagesToLoad[t].getAttribute("src"), h.imagesToLoad[t].srcset || h.imagesToLoad[t].getAttribute("srcset"), !0, e)
                }, h.autoplayTimeoutId = undefined, h.autoplaying = !1, h.autoplayPaused = !1, h.startAutoplay = function() {
                    if (typeof h.autoplayTimeoutId != "undefined") return !1;
                    if (!h.params.autoplay) return !1;
                    if (h.autoplaying) return !1;
                    h.autoplaying = !0, h.emit("onAutoplayStart", h), v()
                }, h.stopAutoplay = function(e) {
                    if (!h.autoplayTimeoutId) return;
                    h.autoplayTimeoutId && clearTimeout(h.autoplayTimeoutId), h.autoplaying = !1, h.autoplayTimeoutId = undefined, h.emit("onAutoplayStop", h)
                }, h.pauseAutoplay = function(e) {
                    if (h.autoplayPaused) return;
                    h.autoplayTimeoutId && clearTimeout(h.autoplayTimeoutId), h.autoplayPaused = !0, e === 0 ? (h.autoplayPaused = !1, v()) : h.wrapper.transitionEnd(function() {
                        if (!h) return;
                        h.autoplayPaused = !1, h.autoplaying ? v() : h.stopAutoplay()
                    })
                }, h.minTranslate = function() {
                    return -h.snapGrid[0]
                }, h.maxTranslate = function() {
                    return -h.snapGrid[h.snapGrid.length - 1]
                }, h.updateAutoHeight = function() {
                    var e = h.slides.eq(h.activeIndex)[0];
                    if (typeof e != "undefined") {
                        var t = e.offsetHeight;
                        t && h.wrapper.css("height", t + "px")
                    }
                }, h.updateContainerSize = function() {
                    var e, t;
                    typeof h.params.width != "undefined" ? e = h.params.width : e = h.container[0].clientWidth, typeof h.params.height != "undefined" ? t = h.params.height : t = h.container[0].clientHeight;
                    if (e === 0 && h.isHorizontal() || t === 0 && !h.isHorizontal()) return;
                    e = e - parseInt(h.container.css("padding-left"), 10) - parseInt(h.container.css("padding-right"), 10), t = t - parseInt(h.container.css("padding-top"), 10) - parseInt(h.container.css("padding-bottom"), 10), h.width = e, h.height = t, h.size = h.isHorizontal() ? h.width : h.height
                }, h.updateSlidesSize = function() {
                    h.slides = h.wrapper.children("." + h.params.slideClass), h.snapGrid = [], h.slidesGrid = [], h.slidesSizesGrid = [];
                    var e = h.params.spaceBetween,
                        t = -h.params.slidesOffsetBefore,
                        n, r = 0,
                        i = 0;
                    if (typeof h.size == "undefined") return;
                    typeof e == "string" && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * h.size), h.virtualSize = -e, h.rtl ? h.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : h.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var s;
                    h.params.slidesPerColumn > 1 && (Math.floor(h.slides.length / h.params.slidesPerColumn) === h.slides.length / h.params.slidesPerColumn ? s = h.slides.length : s = Math.ceil(h.slides.length / h.params.slidesPerColumn) * h.params.slidesPerColumn, h.params.slidesPerView !== "auto" && h.params.slidesPerColumnFill === "row" && (s = Math.max(s, h.params.slidesPerView * h.params.slidesPerColumn)));
                    var o, u = h.params.slidesPerColumn,
                        a = s / u,
                        f = a - (h.params.slidesPerColumn * a - h.slides.length);
                    for (n = 0; n < h.slides.length; n++) {
                        o = 0;
                        var l = h.slides.eq(n);
                        if (h.params.slidesPerColumn > 1) {
                            var c, p, v;
                            h.params.slidesPerColumnFill === "column" ? (p = Math.floor(n / u), v = n - p * u, (p > f || p === f && v === u - 1) && ++v >= u && (v = 0, p++), c = p + v * s / u, l.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (v = Math.floor(n / a), p = n - v * a), l.css({
                                "margin-top": v !== 0 && h.params.spaceBetween && h.params.spaceBetween + "px"
                            }).attr("data-swiper-column", p).attr("data-swiper-row", v)
                        }
                        if (l.css("display") === "none") continue;
                        h.params.slidesPerView === "auto" ? (o = h.isHorizontal() ? l.outerWidth(!0) : l.outerHeight(!0), h.params.roundLengths && (o = d(o))) : (o = (h.size - (h.params.slidesPerView - 1) * e) / h.params.slidesPerView, h.params.roundLengths && (o = d(o)), h.isHorizontal() ? h.slides[n].style.width = o + "px" : h.slides[n].style.height = o + "px"), h.slides[n].swiperSlideSize = o, h.slidesSizesGrid.push(o), h.params.centeredSlides ? (t = t + o / 2 + r / 2 + e, n === 0 && (t = t - h.size / 2 - e), Math.abs(t) < .001 && (t = 0), i % h.params.slidesPerGroup === 0 && h.snapGrid.push(t), h.slidesGrid.push(t)) : (i % h.params.slidesPerGroup === 0 && h.snapGrid.push(t), h.slidesGrid.push(t), t = t + o + e), h.virtualSize += o + e, r = o, i++
                    }
                    h.virtualSize = Math.max(h.virtualSize, h.size) + h.params.slidesOffsetAfter;
                    var m;
                    h.rtl && h.wrongRTL && (h.params.effect === "slide" || h.params.effect === "coverflow") && h.wrapper.css({
                        width: h.virtualSize + h.params.spaceBetween + "px"
                    });
                    if (!h.support.flexbox || h.params.setWrapperSize) h.isHorizontal() ? h.wrapper.css({
                        width: h.virtualSize + h.params.spaceBetween + "px"
                    }) : h.wrapper.css({
                        height: h.virtualSize + h.params.spaceBetween + "px"
                    });
                    if (h.params.slidesPerColumn > 1) {
                        h.virtualSize = (o + h.params.spaceBetween) * s, h.virtualSize = Math.ceil(h.virtualSize / h.params.slidesPerColumn) - h.params.spaceBetween, h.wrapper.css({
                            width: h.virtualSize + h.params.spaceBetween + "px"
                        });
                        if (h.params.centeredSlides) {
                            m = [];
                            for (n = 0; n < h.snapGrid.length; n++) h.snapGrid[n] < h.virtualSize + h.snapGrid[0] && m.push(h.snapGrid[n]);
                            h.snapGrid = m
                        }
                    }
                    if (!h.params.centeredSlides) {
                        m = [];
                        for (n = 0; n < h.snapGrid.length; n++) h.snapGrid[n] <= h.virtualSize - h.size && m.push(h.snapGrid[n]);
                        h.snapGrid = m, Math.floor(h.virtualSize - h.size) - Math.floor(h.snapGrid[h.snapGrid.length - 1]) > 1 && h.snapGrid.push(h.virtualSize - h.size)
                    }
                    h.snapGrid.length === 0 && (h.snapGrid = [0]), h.params.spaceBetween !== 0 && (h.isHorizontal() ? h.rtl ? h.slides.css({
                        marginLeft: e + "px"
                    }) : h.slides.css({
                        marginRight: e + "px"
                    }) : h.slides.css({
                        marginBottom: e + "px"
                    })), h.params.watchSlidesProgress && h.updateSlidesOffset()
                }, h.updateSlidesOffset = function() {
                    for (var e = 0; e < h.slides.length; e++) h.slides[e].swiperSlideOffset = h.isHorizontal() ? h.slides[e].offsetLeft : h.slides[e].offsetTop
                }, h.updateSlidesProgress = function(e) {
                    typeof e == "undefined" && (e = h.translate || 0);
                    if (h.slides.length === 0) return;
                    typeof h.slides[0].swiperSlideOffset == "undefined" && h.updateSlidesOffset();
                    var t = -e;
                    h.rtl && (t = e), h.slides.removeClass(h.params.slideVisibleClass);
                    for (var n = 0; n < h.slides.length; n++) {
                        var r = h.slides[n],
                            i = (t - r.swiperSlideOffset) / (r.swiperSlideSize + h.params.spaceBetween);
                        if (h.params.watchSlidesVisibility) {
                            var s = -(t - r.swiperSlideOffset),
                                o = s + h.slidesSizesGrid[n],
                                u = s >= 0 && s < h.size || o > 0 && o <= h.size || s <= 0 && o >= h.size;
                            u && h.slides.eq(n).addClass(h.params.slideVisibleClass)
                        }
                        r.progress = h.rtl ? -i : i
                    }
                }, h.updateProgress = function(e) {
                    typeof e == "undefined" && (e = h.translate || 0);
                    var t = h.maxTranslate() - h.minTranslate(),
                        n = h.isBeginning,
                        r = h.isEnd;
                    t === 0 ? (h.progress = 0, h.isBeginning = h.isEnd = !0) : (h.progress = (e - h.minTranslate()) / t, h.isBeginning = h.progress <= 0, h.isEnd = h.progress >= 1), h.isBeginning && !n && h.emit("onReachBeginning", h), h.isEnd && !r && h.emit("onReachEnd", h), h.params.watchSlidesProgress && h.updateSlidesProgress(e), h.emit("onProgress", h, h.progress)
                }, h.updateActiveIndex = function() {
                    var e = h.rtl ? h.translate : -h.translate,
                        t, n, r;
                    for (n = 0; n < h.slidesGrid.length; n++) typeof h.slidesGrid[n + 1] != "undefined" ? e >= h.slidesGrid[n] && e < h.slidesGrid[n + 1] - (h.slidesGrid[n + 1] - h.slidesGrid[n]) / 2 ? t = n : e >= h.slidesGrid[n] && e < h.slidesGrid[n + 1] && (t = n + 1) : e >= h.slidesGrid[n] && (t = n);
                    if (t < 0 || typeof t == "undefined") t = 0;
                    r = Math.floor(t / h.params.slidesPerGroup), r >= h.snapGrid.length && (r = h.snapGrid.length - 1);
                    if (t === h.activeIndex) return;
                    h.snapIndex = r, h.previousIndex = h.activeIndex, h.activeIndex = t, h.updateClasses()
                }, h.updateClasses = function() {
                    h.slides.removeClass(h.params.slideActiveClass + " " + h.params.slideNextClass + " " + h.params.slidePrevClass);
                    var t = h.slides.eq(h.activeIndex);
                    t.addClass(h.params.slideActiveClass);
                    var n = t.next("." + h.params.slideClass).addClass(h.params.slideNextClass);
                    h.params.loop && n.length === 0 && h.slides.eq(0).addClass(h.params.slideNextClass);
                    var r = t.prev("." + h.params.slideClass).addClass(h.params.slidePrevClass);
                    h.params.loop && r.length === 0 && h.slides.eq(-1).addClass(h.params.slidePrevClass);
                    if (h.paginationContainer && h.paginationContainer.length > 0) {
                        var i, s = h.params.loop ? Math.ceil((h.slides.length - h.loopedSlides * 2) / h.params.slidesPerGroup) : h.snapGrid.length;
                        h.params.loop ? (i = Math.ceil((h.activeIndex - h.loopedSlides) / h.params.slidesPerGroup), i > h.slides.length - 1 - h.loopedSlides * 2 && (i -= h.slides.length - h.loopedSlides * 2), i > s - 1 && (i -= s), i < 0 && h.params.paginationType !== "bullets" && (i = s + i)) : typeof h.snapIndex != "undefined" ? i = h.snapIndex : i = h.activeIndex || 0, h.params.paginationType === "bullets" && h.bullets && h.bullets.length > 0 && (h.bullets.removeClass(h.params.bulletActiveClass), h.paginationContainer.length > 1 ? h.bullets.each(function() {
                            e(this).index() === i && e(this).addClass(h.params.bulletActiveClass)
                        }) : h.bullets.eq(i).addClass(h.params.bulletActiveClass)), h.params.paginationType === "fraction" && (h.paginationContainer.find("." + h.params.paginationCurrentClass).text(i + 1), h.paginationContainer.find("." + h.params.paginationTotalClass).text(s));
                        if (h.params.paginationType === "progress") {
                            var o = (i + 1) / s,
                                u = o,
                                a = 1;
                            h.isHorizontal() || (a = o, u = 1), h.paginationContainer.find("." + h.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + u + ") scaleY(" + a + ")").transition(h.params.speed)
                        }
                        h.params.paginationType === "custom" && h.params.paginationCustomRender && (h.paginationContainer.html(h.params.paginationCustomRender(h, i + 1, s)), h.emit("onPaginationRendered", h, h.paginationContainer[0]))
                    }
                    h.params.loop || (h.params.prevButton && h.prevButton && h.prevButton.length > 0 && (h.isBeginning ? (h.prevButton.addClass(h.params.buttonDisabledClass), h.params.a11y && h.a11y && h.a11y.disable(h.prevButton)) : (h.prevButton.removeClass(h.params.buttonDisabledClass), h.params.a11y && h.a11y && h.a11y.enable(h.prevButton))), h.params.nextButton && h.nextButton && h.nextButton.length > 0 && (h.isEnd ? (h.nextButton.addClass(h.params.buttonDisabledClass), h.params.a11y && h.a11y && h.a11y.disable(h.nextButton)) : (h.nextButton.removeClass(h.params.buttonDisabledClass), h.params.a11y && h.a11y && h.a11y.enable(h.nextButton))))
                }, h.updatePagination = function() {
                    if (!h.params.pagination) return;
                    if (h.paginationContainer && h.paginationContainer.length > 0) {
                        var e = "";
                        if (h.params.paginationType === "bullets") {
                            var t = h.params.loop ? Math.ceil((h.slides.length - h.loopedSlides * 2) / h.params.slidesPerGroup) : h.snapGrid.length;
                            for (var n = 0; n < t; n++) h.params.paginationBulletRender ? e += h.params.paginationBulletRender(n, h.params.bulletClass) : e += "<" + h.params.paginationElement + ' class="' + h.params.bulletClass + '"></' + h.params.paginationElement + ">";
                            h.paginationContainer.html(e), h.bullets = h.paginationContainer.find("." + h.params.bulletClass), h.params.paginationClickable && h.params.a11y && h.a11y && h.a11y.initPagination()
                        }
                        h.params.paginationType === "fraction" && (h.params.paginationFractionRender ? e = h.params.paginationFractionRender(h, h.params.paginationCurrentClass, h.params.paginationTotalClass) : e = '<span class="' + h.params.paginationCurrentClass + '"></span>' + " / " + '<span class="' + h.params.paginationTotalClass + '"></span>', h.paginationContainer.html(e)), h.params.paginationType === "progress" && (h.params.paginationProgressRender ? e = h.params.paginationProgressRender(h, h.params.paginationProgressbarClass) : e = '<span class="' + h.params.paginationProgressbarClass + '"></span>', h.paginationContainer.html(e)), h.params.paginationType !== "custom" && h.emit("onPaginationRendered", h, h.paginationContainer[0])
                    }
                }, h.update = function(e) {
                    function t() {
                        r = Math.min(Math.max(h.translate, h.maxTranslate()), h.minTranslate()), h.setWrapperTranslate(r), h.updateActiveIndex(), h.updateClasses()
                    }
                    h.updateContainerSize(), h.updateSlidesSize(), h.updateProgress(), h.updatePagination(), h.updateClasses(), h.params.scrollbar && h.scrollbar && h.scrollbar.set();
                    if (e) {
                        var n, r;
                        h.controller && h.controller.spline && (h.controller.spline = undefined), h.params.freeMode ? (t(), h.params.autoHeight && h.updateAutoHeight()) : ((h.params.slidesPerView === "auto" || h.params.slidesPerView > 1) && h.isEnd && !h.params.centeredSlides ? n = h.slideTo(h.slides.length - 1, 0, !1, !0) : n = h.slideTo(h.activeIndex, 0, !1, !0), n || t())
                    } else h.params.autoHeight && h.updateAutoHeight()
                }, h.onResize = function(e) {
                    h.params.breakpoints && h.setBreakpoint();
                    var t = h.params.allowSwipeToPrev,
                        n = h.params.allowSwipeToNext;
                    h.params.allowSwipeToPrev = h.params.allowSwipeToNext = !0, h.updateContainerSize(), h.updateSlidesSize(), (h.params.slidesPerView === "auto" || h.params.freeMode || e) && h.updatePagination(), h.params.scrollbar && h.scrollbar && h.scrollbar.set(), h.controller && h.controller.spline && (h.controller.spline = undefined);
                    var r = !1;
                    if (h.params.freeMode) {
                        var i = Math.min(Math.max(h.translate, h.maxTranslate()), h.minTranslate());
                        h.setWrapperTranslate(i), h.updateActiveIndex(), h.updateClasses(), h.params.autoHeight && h.updateAutoHeight()
                    } else h.updateClasses(), (h.params.slidesPerView === "auto" || h.params.slidesPerView > 1) && h.isEnd && !h.params.centeredSlides ? r = h.slideTo(h.slides.length - 1, 0, !1, !0) : r = h.slideTo(h.activeIndex, 0, !1, !0);
                    h.params.lazyLoading && !r && h.lazy && h.lazy.load(), h.params.allowSwipeToPrev = t, h.params.allowSwipeToNext = n
                };
                var m = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? m = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), h.touchEvents = {
                    start: h.support.touch || !h.params.simulateTouch ? "touchstart" : m[0],
                    move: h.support.touch || !h.params.simulateTouch ? "touchmove" : m[1],
                    end: h.support.touch || !h.params.simulateTouch ? "touchend" : m[2]
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && (h.params.touchEventsTarget === "container" ? h.container : h.wrapper).addClass("swiper-wp8-" + h.params.direction), h.initEvents = function(e) {
                    var t = e ? "off" : "on",
                        n = e ? "removeEventListener" : "addEventListener",
                        r = h.params.touchEventsTarget === "container" ? h.container[0] : h.wrapper[0],
                        s = h.support.touch ? r : document,
                        o = h.params.nested ? !0 : !1;
                    h.browser.ie ? (r[n](h.touchEvents.start, h.onTouchStart, !1), s[n](h.touchEvents.move, h.onTouchMove, o), s[n](h.touchEvents.end, h.onTouchEnd, !1)) : (h.support.touch && (r[n](h.touchEvents.start, h.onTouchStart, !1), r[n](h.touchEvents.move, h.onTouchMove, o), r[n](h.touchEvents.end, h.onTouchEnd, !1)), i.simulateTouch && !h.device.ios && !h.device.android && (r[n]("mousedown", h.onTouchStart, !1), document[n]("mousemove", h.onTouchMove, o), document[n]("mouseup", h.onTouchEnd, !1))), window[n]("resize", h.onResize), h.params.nextButton && h.nextButton && h.nextButton.length > 0 && (h.nextButton[t]("click", h.onClickNext), h.params.a11y && h.a11y && h.nextButton[t]("keydown", h.a11y.onEnterKey)), h.params.prevButton && h.prevButton && h.prevButton.length > 0 && (h.prevButton[t]("click", h.onClickPrev), h.params.a11y && h.a11y && h.prevButton[t]("keydown", h.a11y.onEnterKey)), h.params.pagination && h.params.paginationClickable && (h.paginationContainer[t]("click", "." + h.params.bulletClass, h.onClickIndex), h.params.a11y && h.a11y && h.paginationContainer[t]("keydown", "." + h.params.bulletClass, h.a11y.onEnterKey)), (h.params.preventClicks || h.params.preventClicksPropagation) && r[n]("click", h.preventClicks, !0)
                }, h.attachEvents = function() {
                    h.initEvents()
                }, h.detachEvents = function() {
                    h.initEvents(!0)
                }, h.allowClick = !0, h.preventClicks = function(e) {
                    h.allowClick || (h.params.preventClicks && e.preventDefault(), h.params.preventClicksPropagation && h.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, h.onClickNext = function(e) {
                    e.preventDefault();
                    if (h.isEnd && !h.params.loop) return;
                    h.slideNext()
                }, h.onClickPrev = function(e) {
                    e.preventDefault();
                    if (h.isBeginning && !h.params.loop) return;
                    h.slidePrev()
                }, h.onClickIndex = function(t) {
                    t.preventDefault();
                    var n = e(this).index() * h.params.slidesPerGroup;
                    h.params.loop && (n += h.loopedSlides), h.slideTo(n)
                }, h.updateClickedSlide = function(t) {
                    var n = g(t, "." + h.params.slideClass),
                        r = !1;
                    if (n)
                        for (var i = 0; i < h.slides.length; i++) h.slides[i] === n && (r = !0);
                    if (!n || !r) {
                        h.clickedSlide = undefined, h.clickedIndex = undefined;
                        return
                    }
                    h.clickedSlide = n, h.clickedIndex = e(n).index();
                    if (h.params.slideToClickedSlide && h.clickedIndex !== undefined && h.clickedIndex !== h.activeIndex) {
                        var s = h.clickedIndex,
                            o, u;
                        if (h.params.loop) {
                            if (h.animating) return;
                            o = e(h.clickedSlide).attr("data-swiper-slide-index"), h.params.centeredSlides ? s < h.loopedSlides - h.params.slidesPerView / 2 || s > h.slides.length - h.loopedSlides + h.params.slidesPerView / 2 ? (h.fixLoop(), s = h.wrapper.children("." + h.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                h.slideTo(s)
                            }, 0)) : h.slideTo(s) : s > h.slides.length - h.params.slidesPerView ? (h.fixLoop(), s = h.wrapper.children("." + h.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                                h.slideTo(s)
                            }, 0)) : h.slideTo(s)
                        } else h.slideTo(s)
                    }
                };
                var y, b, w, E, S, x, T, N, C = "input, select, textarea, button",
                    k = Date.now(),
                    L, A = [],
                    O;
                h.animating = !1, h.touches = {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                };
                var M, _;
                h.onTouchStart = function(t) {
                    t.originalEvent && (t = t.originalEvent), M = t.type === "touchstart";
                    if (!M && "which" in t && t.which === 3) return;
                    if (h.params.noSwiping && g(t, "." + h.params.noSwipingClass)) {
                        h.allowClick = !0;
                        return
                    }
                    if (h.params.swipeHandler && !g(t, h.params.swipeHandler)) return;
                    var n = h.touches.currentX = t.type === "touchstart" ? t.targetTouches[0].pageX : t.pageX,
                        r = h.touches.currentY = t.type === "touchstart" ? t.targetTouches[0].pageY : t.pageY;
                    if (h.device.ios && h.params.iOSEdgeSwipeDetection && n <= h.params.iOSEdgeSwipeThreshold) return;
                    y = !0, b = !1, w = !0, S = undefined, _ = undefined, h.touches.startX = n, h.touches.startY = r, E = Date.now(), h.allowClick = !0, h.updateContainerSize(), h.swipeDirection = undefined, h.params.threshold > 0 && (N = !1);
                    if (t.type !== "touchstart") {
                        var i = !0;
                        e(t.target).is(C) && (i = !1), document.activeElement && e(document.activeElement).is(C) && document.activeElement.blur(), i && t.preventDefault()
                    }
                    h.emit("onTouchStart", h, t)
                }, h.onTouchMove = function(t) {
                    t.originalEvent && (t = t.originalEvent);
                    if (M && t.type === "mousemove") return;
                    if (t.preventedByNestedSwiper) {
                        h.touches.startX = t.type === "touchmove" ? t.targetTouches[0].pageX : t.pageX, h.touches.startY = t.type === "touchmove" ? t.targetTouches[0].pageY : t.pageY;
                        return
                    }
                    if (h.params.onlyExternal) {
                        h.allowClick = !1, y && (h.touches.startX = h.touches.currentX = t.type === "touchmove" ? t.targetTouches[0].pageX : t.pageX, h.touches.startY = h.touches.currentY = t.type === "touchmove" ? t.targetTouches[0].pageY : t.pageY, E = Date.now());
                        return
                    }
                    if (M && document.activeElement && t.target === document.activeElement && e(t.target).is(C)) {
                        b = !0, h.allowClick = !1;
                        return
                    }
                    w && h.emit("onTouchMove", h, t);
                    if (t.targetTouches && t.targetTouches.length > 1) return;
                    h.touches.currentX = t.type === "touchmove" ? t.targetTouches[0].pageX : t.pageX, h.touches.currentY = t.type === "touchmove" ? t.targetTouches[0].pageY : t.pageY;
                    if (typeof S == "undefined") {
                        var n = Math.atan2(Math.abs(h.touches.currentY - h.touches.startY), Math.abs(h.touches.currentX - h.touches.startX)) * 180 / Math.PI;
                        S = h.isHorizontal() ? n > h.params.touchAngle : 90 - n > h.params.touchAngle
                    }
                    S && h.emit("onTouchMoveOpposite", h, t), typeof _ == "undefined" && h.browser.ieTouch && (h.touches.currentX !== h.touches.startX || h.touches.currentY !== h.touches.startY) && (_ = !0);
                    if (!y) return;
                    if (S) {
                        y = !1;
                        return
                    }
                    if (!_ && h.browser.ieTouch) return;
                    h.allowClick = !1, h.emit("onSliderMove", h, t), t.preventDefault(), h.params.touchMoveStopPropagation && !h.params.nested && t.stopPropagation(), b || (i.loop && h.fixLoop(), T = h.getWrapperTranslate(), h.setWrapperTransition(0), h.animating && h.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), h.params.autoplay && h.autoplaying && (h.params.autoplayDisableOnInteraction ? h.stopAutoplay() : h.pauseAutoplay()), O = !1, h.params.grabCursor && (h.container[0].style.cursor = "move", h.container[0].style.cursor = "-webkit-grabbing", h.container[0].style.cursor = "-moz-grabbin", h.container[0].style.cursor = "grabbing")), b = !0;
                    var r = h.touches.diff = h.isHorizontal() ? h.touches.currentX - h.touches.startX : h.touches.currentY - h.touches.startY;
                    r *= h.params.touchRatio, h.rtl && (r = -r), h.swipeDirection = r > 0 ? "prev" : "next", x = r + T;
                    var s = !0;
                    r > 0 && x > h.minTranslate() ? (s = !1, h.params.resistance && (x = h.minTranslate() - 1 + Math.pow(-h.minTranslate() + T + r, h.params.resistanceRatio))) : r < 0 && x < h.maxTranslate() && (s = !1, h.params.resistance && (x = h.maxTranslate() + 1 - Math.pow(h.maxTranslate() - T - r, h.params.resistanceRatio))), s && (t.preventedByNestedSwiper = !0), !h.params.allowSwipeToNext && h.swipeDirection === "next" && x < T && (x = T), !h.params.allowSwipeToPrev && h.swipeDirection === "prev" && x > T && (x = T);
                    if (!h.params.followFinger) return;
                    if (h.params.threshold > 0) {
                        if (!(Math.abs(r) > h.params.threshold || N)) {
                            x = T;
                            return
                        }
                        if (!N) {
                            N = !0, h.touches.startX = h.touches.currentX, h.touches.startY = h.touches.currentY, x = T, h.touches.diff = h.isHorizontal() ? h.touches.currentX - h.touches.startX : h.touches.currentY - h.touches.startY;
                            return
                        }
                    }(h.params.freeMode || h.params.watchSlidesProgress) && h.updateActiveIndex(), h.params.freeMode && (A.length === 0 && A.push({
                        position: h.touches[h.isHorizontal() ? "startX" : "startY"],
                        time: E
                    }), A.push({
                        position: h.touches[h.isHorizontal() ? "currentX" : "currentY"],
                        time: (new window.Date).getTime()
                    })), h.updateProgress(x), h.setWrapperTranslate(x)
                }, h.onTouchEnd = function(t) {
                    t.originalEvent && (t = t.originalEvent), w && h.emit("onTouchEnd", h, t), w = !1;
                    if (!y) return;
                    h.params.grabCursor && b && y && (h.container[0].style.cursor = "move", h.container[0].style.cursor = "-webkit-grab", h.container[0].style.cursor = "-moz-grab", h.container[0].style.cursor = "grab");
                    var n = Date.now(),
                        r = n - E;
                    h.allowClick && (h.updateClickedSlide(t), h.emit("onTap", h, t), r < 300 && n - k > 300 && (L && clearTimeout(L), L = setTimeout(function() {
                        if (!h) return;
                        h.params.paginationHide && h.paginationContainer.length > 0 && !e(t.target).hasClass(h.params.bulletClass) && h.paginationContainer.toggleClass(h.params.paginationHiddenClass), h.emit("onClick", h, t)
                    }, 300)), r < 300 && n - k < 300 && (L && clearTimeout(L), h.emit("onDoubleTap", h, t))), k = Date.now(), setTimeout(function() {
                        h && (h.allowClick = !0)
                    }, 0);
                    if (!y || !b || !h.swipeDirection || h.touches.diff === 0 || x === T) {
                        y = b = !1;
                        return
                    }
                    y = b = !1;
                    var i;
                    h.params.followFinger ? i = h.rtl ? h.translate : -h.translate : i = -x;
                    if (h.params.freeMode) {
                        if (i < -h.minTranslate()) {
                            h.slideTo(h.activeIndex);
                            return
                        }
                        if (i > -h.maxTranslate()) {
                            h.slides.length < h.snapGrid.length ? h.slideTo(h.snapGrid.length - 1) : h.slideTo(h.slides.length - 1);
                            return
                        }
                        if (h.params.freeModeMomentum) {
                            if (A.length > 1) {
                                var s = A.pop(),
                                    o = A.pop(),
                                    u = s.position - o.position,
                                    a = s.time - o.time;
                                h.velocity = u / a, h.velocity = h.velocity / 2, Math.abs(h.velocity) < h.params.freeModeMinimumVelocity && (h.velocity = 0);
                                if (a > 150 || (new window.Date).getTime() - s.time > 300) h.velocity = 0
                            } else h.velocity = 0;
                            A.length = 0;
                            var f = 1e3 * h.params.freeModeMomentumRatio,
                                l = h.velocity * f,
                                c = h.translate + l;
                            h.rtl && (c = -c);
                            var p = !1,
                                d, v = Math.abs(h.velocity) * 20 * h.params.freeModeMomentumBounceRatio;
                            if (c < h.maxTranslate()) h.params.freeModeMomentumBounce ? (c + h.maxTranslate() < -v && (c = h.maxTranslate() - v), d = h.maxTranslate(), p = !0, O = !0) : c = h.maxTranslate();
                            else if (c > h.minTranslate()) h.params.freeModeMomentumBounce ? (c - h.minTranslate() > v && (c = h.minTranslate() + v), d = h.minTranslate(), p = !0, O = !0) : c = h.minTranslate();
                            else if (h.params.freeModeSticky) {
                                var m = 0,
                                    g;
                                for (m = 0; m < h.snapGrid.length; m += 1)
                                    if (h.snapGrid[m] > -c) {
                                        g = m;
                                        break
                                    }
                                Math.abs(h.snapGrid[g] - c) < Math.abs(h.snapGrid[g - 1] - c) || h.swipeDirection === "next" ? c = h.snapGrid[g] : c = h.snapGrid[g - 1], h.rtl || (c = -c)
                            }
                            if (h.velocity !== 0) h.rtl ? f = Math.abs((-c - h.translate) / h.velocity) : f = Math.abs((c - h.translate) / h.velocity);
                            else if (h.params.freeModeSticky) {
                                h.slideReset();
                                return
                            }
                            h.params.freeModeMomentumBounce && p ? (h.updateProgress(d), h.setWrapperTransition(f), h.setWrapperTranslate(c), h.onTransitionStart(), h.animating = !0, h.wrapper.transitionEnd(function() {
                                if (!h || !O) return;
                                h.emit("onMomentumBounce", h), h.setWrapperTransition(h.params.speed), h.setWrapperTranslate(d), h.wrapper.transitionEnd(function() {
                                    if (!h) return;
                                    h.onTransitionEnd()
                                })
                            })) : h.velocity ? (h.updateProgress(c), h.setWrapperTransition(f), h.setWrapperTranslate(c), h.onTransitionStart(), h.animating || (h.animating = !0, h.wrapper.transitionEnd(function() {
                                if (!h) return;
                                h.onTransitionEnd()
                            }))) : h.updateProgress(c), h.updateActiveIndex()
                        }
                        if (!h.params.freeModeMomentum || r >= h.params.longSwipesMs) h.updateProgress(), h.updateActiveIndex();
                        return
                    }
                    var S, N = 0,
                        C = h.slidesSizesGrid[0];
                    for (S = 0; S < h.slidesGrid.length; S += h.params.slidesPerGroup) typeof h.slidesGrid[S + h.params.slidesPerGroup] != "undefined" ? i >= h.slidesGrid[S] && i < h.slidesGrid[S + h.params.slidesPerGroup] && (N = S, C = h.slidesGrid[S + h.params.slidesPerGroup] - h.slidesGrid[S]) : i >= h.slidesGrid[S] && (N = S, C = h.slidesGrid[h.slidesGrid.length - 1] - h.slidesGrid[h.slidesGrid.length - 2]);
                    var M = (i - h.slidesGrid[N]) / C;
                    if (r > h.params.longSwipesMs) {
                        if (!h.params.longSwipes) {
                            h.slideTo(h.activeIndex);
                            return
                        }
                        h.swipeDirection === "next" && (M >= h.params.longSwipesRatio ? h.slideTo(N + h.params.slidesPerGroup) : h.slideTo(N)), h.swipeDirection === "prev" && (M > 1 - h.params.longSwipesRatio ? h.slideTo(N + h.params.slidesPerGroup) : h.slideTo(N))
                    } else {
                        if (!h.params.shortSwipes) {
                            h.slideTo(h.activeIndex);
                            return
                        }
                        h.swipeDirection === "next" && h.slideTo(N + h.params.slidesPerGroup), h.swipeDirection === "prev" && h.slideTo(N)
                    }
                }, h._slideTo = function(e, t) {
                    return h.slideTo(e, t, !0, !0)
                }, h.slideTo = function(e, t, n, r) {
                    typeof n == "undefined" && (n = !0), typeof e == "undefined" && (e = 0), e < 0 && (e = 0), h.snapIndex = Math.floor(e / h.params.slidesPerGroup), h.snapIndex >= h.snapGrid.length && (h.snapIndex = h.snapGrid.length - 1);
                    var i = -h.snapGrid[h.snapIndex];
                    h.params.autoplay && h.autoplaying && (r || !h.params.autoplayDisableOnInteraction ? h.pauseAutoplay(t) : h.stopAutoplay()), h.updateProgress(i);
                    for (var s = 0; s < h.slidesGrid.length; s++) - Math.floor(i * 100) >= Math.floor(h.slidesGrid[s] * 100) && (e = s);
                    return !h.params.allowSwipeToNext && i < h.translate && i < h.minTranslate() ? !1 : !h.params.allowSwipeToPrev && i > h.translate && i > h.maxTranslate() && (h.activeIndex || 0) !== e ? !1 : (typeof t == "undefined" && (t = h.params.speed), h.previousIndex = h.activeIndex || 0, h.activeIndex = e, h.rtl && -i === h.translate || !h.rtl && i === h.translate ? (h.params.autoHeight && h.updateAutoHeight(), h.updateClasses(), h.params.effect !== "slide" && h.setWrapperTranslate(i), !1) : (h.updateClasses(), h.onTransitionStart(n), t === 0 ? (h.setWrapperTranslate(i), h.setWrapperTransition(0), h.onTransitionEnd(n)) : (h.setWrapperTranslate(i), h.setWrapperTransition(t), h.animating || (h.animating = !0, h.wrapper.transitionEnd(function() {
                        if (!h) return;
                        h.onTransitionEnd(n)
                    }))), !0))
                }, h.onTransitionStart = function(e) {
                    typeof e == "undefined" && (e = !0), h.params.autoHeight && h.updateAutoHeight(), h.lazy && h.lazy.onTransitionStart(), e && (h.emit("onTransitionStart", h), h.activeIndex !== h.previousIndex && (h.emit("onSlideChangeStart", h), h.activeIndex > h.previousIndex ? h.emit("onSlideNextStart", h) : h.emit("onSlidePrevStart", h)))
                }, h.onTransitionEnd = function(e) {
                    h.animating = !1, h.setWrapperTransition(0), typeof e == "undefined" && (e = !0), h.lazy && h.lazy.onTransitionEnd(), e && (h.emit("onTransitionEnd", h), h.activeIndex !== h.previousIndex && (h.emit("onSlideChangeEnd", h), h.activeIndex > h.previousIndex ? h.emit("onSlideNextEnd", h) : h.emit("onSlidePrevEnd", h))), h.params.hashnav && h.hashnav && h.hashnav.setHash()
                }, h.slideNext = function(e, t, n) {
                    if (h.params.loop) {
                        if (h.animating) return !1;
                        h.fixLoop();
                        var r = h.container[0].clientLeft;
                        return h.slideTo(h.activeIndex + h.params.slidesPerGroup, t, e, n)
                    }
                    return h.slideTo(h.activeIndex + h.params.slidesPerGroup, t, e, n)
                }, h._slideNext = function(e) {
                    return h.slideNext(!0, e, !0)
                }, h.slidePrev = function(e, t, n) {
                    if (h.params.loop) {
                        if (h.animating) return !1;
                        h.fixLoop();
                        var r = h.container[0].clientLeft;
                        return h.slideTo(h.activeIndex - 1, t, e, n)
                    }
                    return h.slideTo(h.activeIndex - 1, t, e, n)
                }, h._slidePrev = function(e) {
                    return h.slidePrev(!0, e, !0)
                }, h.slideReset = function(e, t, n) {
                    return h.slideTo(h.activeIndex, t, e)
                }, h.setWrapperTransition = function(e, t) {
                    h.wrapper.transition(e), h.params.effect !== "slide" && h.effects[h.params.effect] && h.effects[h.params.effect].setTransition(e), h.params.parallax && h.parallax && h.parallax.setTransition(e), h.params.scrollbar && h.scrollbar && h.scrollbar.setTransition(e), h.params.control && h.controller && h.controller.setTransition(e, t), h.emit("onSetTransition", h, e)
                }, h.setWrapperTranslate = function(e, t, n) {
                    var r = 0,
                        i = 0,
                        s = 0;
                    h.isHorizontal() ? r = h.rtl ? -e : e : i = e, h.params.roundLengths && (r = d(r), i = d(i)), h.params.virtualTranslate || (h.support.transforms3d ? h.wrapper.transform("translate3d(" + r + "px, " + i + "px, " + s + "px)") : h.wrapper.transform("translate(" + r + "px, " + i + "px)")), h.translate = h.isHorizontal() ? r : i;
                    var o, u = h.maxTranslate() - h.minTranslate();
                    u === 0 ? o = 0 : o = (e - h.minTranslate()) / u, o !== h.progress && h.updateProgress(e), t && h.updateActiveIndex(), h.params.effect !== "slide" && h.effects[h.params.effect] && h.effects[h.params.effect].setTranslate(h.translate), h.params.parallax && h.parallax && h.parallax.setTranslate(h.translate), h.params.scrollbar && h.scrollbar && h.scrollbar.setTranslate(h.translate), h.params.control && h.controller && h.controller.setTranslate(h.translate, n), h.emit("onSetTranslate", h, h.translate)
                }, h.getTranslate = function(e, t) {
                    var n, r, i, s;
                    return typeof t == "undefined" && (t = "x"), h.params.virtualTranslate ? h.rtl ? -h.translate : h.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
                        return e.replace(",", ".")
                    }).join(", ")), s = new window.WebKitCSSMatrix(r === "none" ? "" : r)) : (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), t === "x" && (window.WebKitCSSMatrix ? r = s.m41 : n.length === 16 ? r = parseFloat(n[12]) : r = parseFloat(n[4])), t === "y" && (window.WebKitCSSMatrix ? r = s.m42 : n.length === 16 ? r = parseFloat(n[13]) : r = parseFloat(n[5])), h.rtl && r && (r = -r), r || 0)
                }, h.getWrapperTranslate = function(e) {
                    return typeof e == "undefined" && (e = h.isHorizontal() ? "x" : "y"), h.getTranslate(h.wrapper[0], e)
                }, h.observers = [], h.initObservers = function() {
                    if (h.params.observeParents) {
                        var e = h.container.parents();
                        for (var t = 0; t < e.length; t++) D(e[t])
                    }
                    D(h.container[0], {
                        childList: !1
                    }), D(h.wrapper[0], {
                        attributes: !1
                    })
                }, h.disconnectObservers = function() {
                    for (var e = 0; e < h.observers.length; e++) h.observers[e].disconnect();
                    h.observers = []
                }, h.createLoop = function() {
                    h.wrapper.children("." + h.params.slideClass + "." + h.params.slideDuplicateClass).remove();
                    var t = h.wrapper.children("." + h.params.slideClass);
                    h.params.slidesPerView === "auto" && !h.params.loopedSlides && (h.params.loopedSlides = t.length), h.loopedSlides = parseInt(h.params.loopedSlides || h.params.slidesPerView, 10), h.loopedSlides = h.loopedSlides + h.params.loopAdditionalSlides, h.loopedSlides > t.length && (h.loopedSlides = t.length);
                    var n = [],
                        r = [],
                        i;
                    t.each(function(i, s) {
                        var o = e(this);
                        i < h.loopedSlides && r.push(s), i < t.length && i >= t.length - h.loopedSlides && n.push(s), o.attr("data-swiper-slide-index", i)
                    });
                    for (i = 0; i < r.length; i++) h.wrapper.append(e(r[i].cloneNode(!0)).addClass(h.params.slideDuplicateClass));
                    for (i = n.length - 1; i >= 0; i--) h.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(h.params.slideDuplicateClass))
                }, h.destroyLoop = function() {
                    h.wrapper.children("." + h.params.slideClass + "." + h.params.slideDuplicateClass).remove(), h.slides.removeAttr("data-swiper-slide-index")
                }, h.reLoop = function(e) {
                    var t = h.activeIndex - h.loopedSlides;
                    h.destroyLoop(), h.createLoop(), h.updateSlidesSize(), e && h.slideTo(t + h.loopedSlides, 0, !1)
                }, h.fixLoop = function() {
                    var e;
                    if (h.activeIndex < h.loopedSlides) e = h.slides.length - h.loopedSlides * 3 + h.activeIndex, e += h.loopedSlides, h.slideTo(e, 0, !1, !0);
                    else if (h.params.slidesPerView === "auto" && h.activeIndex >= h.loopedSlides * 2 || h.activeIndex > h.slides.length - h.params.slidesPerView * 2) e = -h.slides.length + h.activeIndex + h.loopedSlides, e += h.loopedSlides, h.slideTo(e, 0, !1, !0)
                }, h.appendSlide = function(e) {
                    h.params.loop && h.destroyLoop();
                    if (typeof e == "object" && e.length)
                        for (var t = 0; t < e.length; t++) e[t] && h.wrapper.append(e[t]);
                    else h.wrapper.append(e);
                    h.params.loop && h.createLoop(), (!h.params.observer || !h.support.observer) && h.update(!0)
                }, h.prependSlide = function(e) {
                    h.params.loop && h.destroyLoop();
                    var t = h.activeIndex + 1;
                    if (typeof e == "object" && e.length) {
                        for (var n = 0; n < e.length; n++) e[n] && h.wrapper.prepend(e[n]);
                        t = h.activeIndex + e.length
                    } else h.wrapper.prepend(e);
                    h.params.loop && h.createLoop(), (!h.params.observer || !h.support.observer) && h.update(!0), h.slideTo(t, 0, !1)
                }, h.removeSlide = function(e) {
                    h.params.loop && (h.destroyLoop(), h.slides = h.wrapper.children("." + h.params.slideClass));
                    var t = h.activeIndex,
                        n;
                    if (typeof e == "object" && e.length) {
                        for (var r = 0; r < e.length; r++) n = e[r], h.slides[n] && h.slides.eq(n).remove(), n < t && t--;
                        t = Math.max(t, 0)
                    } else n = e, h.slides[n] && h.slides.eq(n).remove(), n < t && t--, t = Math.max(t, 0);
                    h.params.loop && h.createLoop(), (!h.params.observer || !h.support.observer) && h.update(!0), h.params.loop ? h.slideTo(t + h.loopedSlides, 0, !1) : h.slideTo(t, 0, !1)
                }, h.removeAllSlides = function() {
                    var e = [];
                    for (var t = 0; t < h.slides.length; t++) e.push(t);
                    h.removeSlide(e)
                }, h.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < h.slides.length; e++) {
                                var t = h.slides.eq(e),
                                    n = t[0].swiperSlideOffset,
                                    r = -n;
                                h.params.virtualTranslate || (r -= h.translate);
                                var i = 0;
                                h.isHorizontal() || (i = r, r = 0);
                                var s = h.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                t.css({
                                    opacity: s
                                }).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            h.slides.transition(e);
                            if (h.params.virtualTranslate && e !== 0) {
                                var t = !1;
                                h.slides.transitionEnd(function() {
                                    if (t) return;
                                    if (!h) return;
                                    t = !0, h.animating = !1;
                                    var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
                                    for (var n = 0; n < e.length; n++) h.wrapper.trigger(e[n])
                                })
                            }
                        }
                    },
                    flip: {
                        setTranslate: function() {
                            for (var t = 0; t < h.slides.length; t++) {
                                var n = h.slides.eq(t),
                                    r = n[0].progress;
                                h.params.flip.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                                var i = n[0].swiperSlideOffset,
                                    s = -180 * r,
                                    o = s,
                                    u = 0,
                                    a = -i,
                                    f = 0;
                                h.isHorizontal() ? h.rtl && (o = -o) : (f = a, a = 0, u = -o, o = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + h.slides.length;
                                if (h.params.flip.slideShadows) {
                                    var l = h.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                        c = h.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                    l.length === 0 && (l = e('<div class="swiper-slide-shadow-' + (h.isHorizontal() ? "left" : "top") + '"></div>'), n.append(l)), c.length === 0 && (c = e('<div class="swiper-slide-shadow-' + (h.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(c)), l.length && (l[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                                }
                                n.transform("translate3d(" + a + "px, " + f + "px, 0px) rotateX(" + u + "deg) rotateY(" + o + "deg)")
                            }
                        },
                        setTransition: function(t) {
                            h.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t);
                            if (h.params.virtualTranslate && t !== 0) {
                                var n = !1;
                                h.slides.eq(h.activeIndex).transitionEnd(function() {
                                    if (n) return;
                                    if (!h) return;
                                    if (!e(this).hasClass(h.params.slideActiveClass)) return;
                                    n = !0, h.animating = !1;
                                    var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];
                                    for (var r = 0; r < t.length; r++) h.wrapper.trigger(t[r])
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var t = 0,
                                n;
                            h.params.cube.shadow && (h.isHorizontal() ? (n = h.wrapper.find(".swiper-cube-shadow"), n.length === 0 && (n = e('<div class="swiper-cube-shadow"></div>'), h.wrapper.append(n)), n.css({
                                height: h.width + "px"
                            })) : (n = h.container.find(".swiper-cube-shadow"), n.length === 0 && (n = e('<div class="swiper-cube-shadow"></div>'), h.container.append(n))));
                            for (var r = 0; r < h.slides.length; r++) {
                                var i = h.slides.eq(r),
                                    s = r * 90,
                                    o = Math.floor(s / 360);
                                h.rtl && (s = -s, o = Math.floor(-s / 360));
                                var u = Math.max(Math.min(i[0].progress, 1), -1),
                                    a = 0,
                                    f = 0,
                                    l = 0;
                                r % 4 === 0 ? (a = -o * 4 * h.size, l = 0) : (r - 1) % 4 === 0 ? (a = 0, l = -o * 4 * h.size) : (r - 2) % 4 === 0 ? (a = h.size + o * 4 * h.size, l = h.size) : (r - 3) % 4 === 0 && (a = -h.size, l = 3 * h.size + h.size * 4 * o), h.rtl && (a = -a), h.isHorizontal() || (f = a, a = 0);
                                var c = "rotateX(" + (h.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (h.isHorizontal() ? s : 0) + "deg) translate3d(" + a + "px, " + f + "px, " + l + "px)";
                                u <= 1 && u > -1 && (t = r * 90 + u * 90, h.rtl && (t = -r * 90 - u * 90)), i.transform(c);
                                if (h.params.cube.slideShadows) {
                                    var p = h.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                        d = h.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    p.length === 0 && (p = e('<div class="swiper-slide-shadow-' + (h.isHorizontal() ? "left" : "top") + '"></div>'), i.append(p)), d.length === 0 && (d = e('<div class="swiper-slide-shadow-' + (h.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(d)), p.length && (p[0].style.opacity = Math.max(-u, 0)), d.length && (d[0].style.opacity = Math.max(u, 0))
                                }
                            }
                            h.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + h.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + h.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + h.size / 2 + "px",
                                "transform-origin": "50% 50% -" + h.size / 2 + "px"
                            });
                            if (h.params.cube.shadow)
                                if (h.isHorizontal()) n.transform("translate3d(0px, " + (h.width / 2 + h.params.cube.shadowOffset) + "px, " + -h.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + h.params.cube.shadowScale + ")");
                                else {
                                    var v = Math.abs(t) - Math.floor(Math.abs(t) / 90) * 90,
                                        m = 1.5 - (Math.sin(v * 2 * Math.PI / 360) / 2 + Math.cos(v * 2 * Math.PI / 360) / 2),
                                        g = h.params.cube.shadowScale,
                                        y = h.params.cube.shadowScale / m,
                                        b = h.params.cube.shadowOffset;
                                    n.transform("scale3d(" + g + ", 1, " + y + ") translate3d(0px, " + (h.height / 2 + b) + "px, " + -h.height / 2 / y + "px) rotateX(-90deg)")
                                }
                            var w = h.isSafari || h.isUiWebView ? -h.size / 2 : 0;
                            h.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (h.isHorizontal() ? 0 : t) + "deg) rotateY(" + (h.isHorizontal() ? -t : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), h.params.cube.shadow && !h.isHorizontal() && h.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            var t = h.translate,
                                n = h.isHorizontal() ? -t + h.width / 2 : -t + h.height / 2,
                                r = h.isHorizontal() ? h.params.coverflow.rotate : -h.params.coverflow.rotate,
                                i = h.params.coverflow.depth;
                            for (var s = 0, o = h.slides.length; s < o; s++) {
                                var u = h.slides.eq(s),
                                    a = h.slidesSizesGrid[s],
                                    f = u[0].swiperSlideOffset,
                                    l = (n - f - a / 2) / a * h.params.coverflow.modifier,
                                    c = h.isHorizontal() ? r * l : 0,
                                    p = h.isHorizontal() ? 0 : r * l,
                                    d = -i * Math.abs(l),
                                    v = h.isHorizontal() ? 0 : h.params.coverflow.stretch * l,
                                    m = h.isHorizontal() ? h.params.coverflow.stretch * l : 0;
                                Math.abs(m) < .001 && (m = 0), Math.abs(v) < .001 && (v = 0), Math.abs(d) < .001 && (d = 0), Math.abs(c) < .001 && (c = 0), Math.abs(p) < .001 && (p = 0);
                                var g = "translate3d(" + m + "px," + v + "px," + d + "px)  rotateX(" + p + "deg) rotateY(" + c + "deg)";
                                u.transform(g), u[0].style.zIndex = -Math.abs(Math.round(l)) + 1;
                                if (h.params.coverflow.slideShadows) {
                                    var y = h.isHorizontal() ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"),
                                        b = h.isHorizontal() ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
                                    y.length === 0 && (y = e('<div class="swiper-slide-shadow-' + (h.isHorizontal() ? "left" : "top") + '"></div>'), u.append(y)), b.length === 0 && (b = e('<div class="swiper-slide-shadow-' + (h.isHorizontal() ? "right" : "bottom") + '"></div>'), u.append(b)), y.length && (y[0].style.opacity = l > 0 ? l : 0), b.length && (b[0].style.opacity = -l > 0 ? -l : 0)
                                }
                            }
                            if (h.browser.ie) {
                                var w = h.wrapper[0].style;
                                w.perspectiveOrigin = n + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            h.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, h.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(t, n) {
                        if (typeof t == "undefined") return;
                        typeof n == "undefined" && (n = !0);
                        if (h.slides.length === 0) return;
                        var r = h.slides.eq(t),
                            i = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                        r.hasClass("swiper-lazy") && !r.hasClass("swiper-lazy-loaded") && !r.hasClass("swiper-lazy-loading") && (i = i.add(r[0]));
                        if (i.length === 0) return;
                        i.each(function() {
                            var t = e(this);
                            t.addClass("swiper-lazy-loading");
                            var i = t.attr("data-background"),
                                s = t.attr("data-src"),
                                o = t.attr("data-srcset");
                            h.loadImage(t[0], s || i, o, !1, function() {
                                i ? (t.css("background-image", 'url("' + i + '")'), t.removeAttr("data-background")) : (o && (t.attr("srcset", o), t.removeAttr("data-srcset")), s && (t.attr("src", s), t.removeAttr("data-src"))), t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove();
                                if (h.params.loop && n) {
                                    var e = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(h.params.slideDuplicateClass)) {
                                        var u = h.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + h.params.slideDuplicateClass + ")");
                                        h.lazy.loadImageInSlide(u.index(), !1)
                                    } else {
                                        var a = h.wrapper.children("." + h.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        h.lazy.loadImageInSlide(a.index(), !1)
                                    }
                                }
                                h.emit("onLazyImageReady", h, r[0], t[0])
                            }), h.emit("onLazyImageLoad", h, r[0], t[0])
                        })
                    },
                    load: function() {
                        var t;
                        if (h.params.watchSlidesVisibility) h.wrapper.children("." + h.params.slideVisibleClass).each(function() {
                            h.lazy.loadImageInSlide(e(this).index())
                        });
                        else if (h.params.slidesPerView > 1)
                            for (t = h.activeIndex; t < h.activeIndex + h.params.slidesPerView; t++) h.slides[t] && h.lazy.loadImageInSlide(t);
                        else h.lazy.loadImageInSlide(h.activeIndex);
                        if (h.params.lazyLoadingInPrevNext)
                            if (h.params.slidesPerView > 1 || h.params.lazyLoadingInPrevNextAmount && h.params.lazyLoadingInPrevNextAmount > 1) {
                                var n = h.params.lazyLoadingInPrevNextAmount,
                                    r = h.params.slidesPerView,
                                    i = Math.min(h.activeIndex + r + Math.max(n, r), h.slides.length),
                                    s = Math.max(h.activeIndex - Math.max(r, n), 0);
                                for (t = h.activeIndex + h.params.slidesPerView; t < i; t++) h.slides[t] && h.lazy.loadImageInSlide(t);
                                for (t = s; t < h.activeIndex; t++) h.slides[t] && h.lazy.loadImageInSlide(t)
                            } else {
                                var o = h.wrapper.children("." + h.params.slideNextClass);
                                o.length > 0 && h.lazy.loadImageInSlide(o.index());
                                var u = h.wrapper.children("." + h.params.slidePrevClass);
                                u.length > 0 && h.lazy.loadImageInSlide(u.index())
                            }
                    },
                    onTransitionStart: function() {
                        h.params.lazyLoading && (h.params.lazyLoadingOnTransitionStart || !h.params.lazyLoadingOnTransitionStart && !h.lazy.initialImageLoaded) && h.lazy.load()
                    },
                    onTransitionEnd: function() {
                        h.params.lazyLoading && !h.params.lazyLoadingOnTransitionStart && h.lazy.load()
                    }
                }, h.scrollbar = {
                    isTouched: !1,
                    setDragPosition: function(e) {
                        var t = h.scrollbar,
                            n = 0,
                            r = 0,
                            i, s = h.isHorizontal() ? e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].pageX : e.pageX || e.clientX : e.type === "touchstart" || e.type === "touchmove" ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                            o = s - t.track.offset()[h.isHorizontal() ? "left" : "top"] - t.dragSize / 2,
                            u = -h.minTranslate() * t.moveDivider,
                            a = -h.maxTranslate() * t.moveDivider;
                        o < u ? o = u : o > a && (o = a), o = -o / t.moveDivider, h.updateProgress(o), h.setWrapperTranslate(o, !0)
                    },
                    dragStart: function(e) {
                        var t = h.scrollbar;
                        t.isTouched = !0, e.preventDefault(), e.stopPropagation(), t.setDragPosition(e), clearTimeout(t.dragTimeout), t.track.transition(0), h.params.scrollbarHide && t.track.css("opacity", 1), h.wrapper.transition(100), t.drag.transition(100), h.emit("onScrollbarDragStart", h)
                    },
                    dragMove: function(e) {
                        var t = h.scrollbar;
                        if (!t.isTouched) return;
                        e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), h.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), h.emit("onScrollbarDragMove", h)
                    },
                    dragEnd: function(e) {
                        var t = h.scrollbar;
                        if (!t.isTouched) return;
                        t.isTouched = !1, h.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                            t.track.css("opacity", 0), t.track.transition(400)
                        }, 1e3)), h.emit("onScrollbarDragEnd", h), h.params.scrollbarSnapOnRelease && h.slideReset()
                    },
                    enableDraggable: function() {
                        var t = h.scrollbar,
                            n = h.support.touch ? t.track : document;
                        e(t.track).on(h.touchEvents.start, t.dragStart), e(n).on(h.touchEvents.move, t.dragMove), e(n).on(h.touchEvents.end, t.dragEnd)
                    },
                    disableDraggable: function() {
                        var t = h.scrollbar,
                            n = h.support.touch ? t.track : document;
                        e(t.track).off(h.touchEvents.start, t.dragStart), e(n).off(h.touchEvents.move, t.dragMove), e(n).off(h.touchEvents.end, t.dragEnd)
                    },
                    set: function() {
                        if (!h.params.scrollbar) return;
                        var t = h.scrollbar;
                        t.track = e(h.params.scrollbar), h.params.uniqueNavElements && typeof h.params.scrollbar == "string" && t.track.length > 1 && h.container.find(h.params.scrollbar).length === 1 && (t.track = h.container.find(h.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), t.drag.length === 0 && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = h.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = h.size / h.virtualSize, t.moveDivider = t.divider * (t.trackSize / h.size), t.dragSize = t.trackSize * t.divider, h.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", h.params.scrollbarHide && (t.track[0].style.opacity = 0)
                    },
                    setTranslate: function() {
                        if (!h.params.scrollbar) return;
                        var e, t = h.scrollbar,
                            n = h.translate || 0,
                            r, i = t.dragSize;
                        r = (t.trackSize - t.dragSize) * h.progress, h.rtl && h.isHorizontal() ? (r = -r, r > 0 ? (i = t.dragSize - r, r = 0) : -r + t.dragSize > t.trackSize && (i = t.trackSize + r)) : r < 0 ? (i = t.dragSize + r, r = 0) : r + t.dragSize > t.trackSize && (i = t.trackSize - r), h.isHorizontal() ? (h.support.transforms3d ? t.drag.transform("translate3d(" + r + "px, 0, 0)") : t.drag.transform("translateX(" + r + "px)"), t.drag[0].style.width = i + "px") : (h.support.transforms3d ? t.drag.transform("translate3d(0px, " + r + "px, 0)") : t.drag.transform("translateY(" + r + "px)"), t.drag[0].style.height = i + "px"), h.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0, t.track.transition(400)
                        }, 1e3))
                    },
                    setTransition: function(e) {
                        if (!h.params.scrollbar) return;
                        h.scrollbar.drag.transition(e)
                    }
                }, h.controller = {
                    LinearSpline: function(e, t) {
                        this.x = e, this.y = t, this.lastIndex = e.length - 1;
                        var n, r, i = this.x.length;
                        this.interpolate = function(e) {
                            return e ? (r = s(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                        };
                        var s = function() {
                            var e, t, n;
                            return function(r, i) {
                                t = -1, e = r.length;
                                while (e - t > 1) r[n = e + t >> 1] <= i ? t = n : e = n;
                                return e
                            }
                        }()
                    },
                    getInterpolateFunction: function(e) {
                        h.controller.spline || (h.controller.spline = h.params.loop ? new h.controller.LinearSpline(h.slidesGrid, e.slidesGrid) : new h.controller.LinearSpline(h.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, n) {
                        function o(t) {
                            e = t.rtl && t.params.direction === "horizontal" ? -h.translate : h.translate, h.params.controlBy === "slide" && (h.controller.getInterpolateFunction(t), s = -h.controller.spline.interpolate(-e));
                            if (!s || h.params.controlBy === "container") i = (t.maxTranslate() - t.minTranslate()) / (h.maxTranslate() - h.minTranslate()), s = (e - h.minTranslate()) * i + t.minTranslate();
                            h.params.controlInverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setWrapperTranslate(s, !1, h), t.updateActiveIndex()
                        }
                        var r = h.params.control,
                            i, s;
                        if (h.isArray(r))
                            for (var u = 0; u < r.length; u++) r[u] !== n && r[u] instanceof t && o(r[u]);
                        else r instanceof t && n !== r && o(r)
                    },
                    setTransition: function(e, n) {
                        function s(t) {
                            t.setWrapperTransition(e, h), e !== 0 && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                                if (!r) return;
                                t.params.loop && h.params.controlBy === "slide" && t.fixLoop(), t.onTransitionEnd()
                            }))
                        }
                        var r = h.params.control,
                            i;
                        if (h.isArray(r))
                            for (i = 0; i < r.length; i++) r[i] !== n && r[i] instanceof t && s(r[i]);
                        else r instanceof t && n !== r && s(r)
                    }
                }, h.hashnav = {
                    init: function() {
                        if (!h.params.hashnav) return;
                        h.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (!e) return;
                        var t = 0;
                        for (var n = 0, r = h.slides.length; n < r; n++) {
                            var i = h.slides.eq(n),
                                s = i.attr("data-hash");
                            if (s === e && !i.hasClass(h.params.slideDuplicateClass)) {
                                var o = i.index();
                                h.slideTo(o, t, h.params.runCallbacksOnInit, !0)
                            }
                        }
                    },
                    setHash: function() {
                        if (!h.hashnav.initialized || !h.params.hashnav) return;
                        document.location.hash = h.slides.eq(h.activeIndex).attr("data-hash") || ""
                    }
                }, h.disableKeyboardControl = function() {
                    h.params.keyboardControl = !1, e(document).off("keydown", P)
                }, h.enableKeyboardControl = function() {
                    h.params.keyboardControl = !0, e(document).on("keydown", P)
                }, h.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                };
                if (h.params.mousewheelControl) {
                    try {
                        new window.WheelEvent("wheel"), h.mousewheel.event = "wheel"
                    } catch (H) {
                        if (window.WheelEvent || h.container[0] && "wheel" in h.container[0]) h.mousewheel.event = "wheel"
                    }!h.mousewheel.event && window.WheelEvent, !h.mousewheel.event && document.onmousewheel !== undefined && (h.mousewheel.event = "mousewheel"), h.mousewheel.event || (h.mousewheel.event = "DOMMouseScroll")
                }
                h.disableMousewheelControl = function() {
                    return h.mousewheel.event ? (h.container.off(h.mousewheel.event, B), !0) : !1
                }, h.enableMousewheelControl = function() {
                    return h.mousewheel.event ? (h.container.on(h.mousewheel.event, B), !0) : !1
                }, h.parallax = {
                    setTranslate: function() {
                        h.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            j(this, h.progress)
                        }), h.slides.each(function() {
                            var t = e(this);
                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var e = Math.min(Math.max(t[0].progress, -1), 1);
                                j(this, e)
                            })
                        })
                    },
                    setTransition: function(t) {
                        typeof t == "undefined" && (t = h.params.speed), h.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var n = e(this),
                                r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || t;
                            t === 0 && (r = 0), n.transition(r)
                        })
                    }
                }, h._plugins = [];
                for (var F in h.plugins) {
                    var I = h.plugins[F](h, h.params[F]);
                    I && h._plugins.push(I)
                }
                return h.callPlugins = function(e) {
                    for (var t = 0; t < h._plugins.length; t++) e in h._plugins[t] && h._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, h.emitterEventListeners = {}, h.emit = function(e) {
                    h.params[e] && h.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var t;
                    if (h.emitterEventListeners[e])
                        for (t = 0; t < h.emitterEventListeners[e].length; t++) h.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    h.callPlugins && h.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }, h.on = function(e, t) {
                    return e = q(e), h.emitterEventListeners[e] || (h.emitterEventListeners[e] = []), h.emitterEventListeners[e].push(t), h
                }, h.off = function(e, t) {
                    var n;
                    e = q(e);
                    if (typeof t == "undefined") return h.emitterEventListeners[e] = [], h;
                    if (!h.emitterEventListeners[e] || h.emitterEventListeners[e].length === 0) return;
                    for (n = 0; n < h.emitterEventListeners[e].length; n++) h.emitterEventListeners[e][n] === t && h.emitterEventListeners[e].splice(n, 1);
                    return h
                }, h.once = function(e, t) {
                    e = q(e);
                    var n = function() {
                        t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), h.off(e, n)
                    };
                    return h.on(e, n), h
                }, h.a11y = {
                    makeFocusable: function(e) {
                        return e.attr("tabIndex", "0"), e
                    },
                    addRole: function(e, t) {
                        return e.attr("role", t), e
                    },
                    addLabel: function(e, t) {
                        return e.attr("aria-label", t), e
                    },
                    disable: function(e) {
                        return e.attr("aria-disabled", !0), e
                    },
                    enable: function(e) {
                        return e.attr("aria-disabled", !1), e
                    },
                    onEnterKey: function(t) {
                        if (t.keyCode !== 13) return;
                        e(t.target).is(h.params.nextButton) ? (h.onClickNext(t), h.isEnd ? h.a11y.notify(h.params.lastSlideMessage) : h.a11y.notify(h.params.nextSlideMessage)) : e(t.target).is(h.params.prevButton) && (h.onClickPrev(t), h.isBeginning ? h.a11y.notify(h.params.firstSlideMessage) : h.a11y.notify(h.params.prevSlideMessage)), e(t.target).is("." + h.params.bulletClass) && e(t.target)[0].click()
                    },
                    liveRegion: e('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                    notify: function(e) {
                        var t = h.a11y.liveRegion;
                        if (t.length === 0) return;
                        t.html(""), t.html(e)
                    },
                    init: function() {
                        h.params.nextButton && h.nextButton && h.nextButton.length > 0 && (h.a11y.makeFocusable(h.nextButton), h.a11y.addRole(h.nextButton, "button"), h.a11y.addLabel(h.nextButton, h.params.nextSlideMessage)), h.params.prevButton && h.prevButton && h.prevButton.length > 0 && (h.a11y.makeFocusable(h.prevButton), h.a11y.addRole(h.prevButton, "button"), h.a11y.addLabel(h.prevButton, h.params.prevSlideMessage)), e(h.container).append(h.a11y.liveRegion)
                    },
                    initPagination: function() {
                        h.params.pagination && h.params.paginationClickable && h.bullets && h.bullets.length && h.bullets.each(function() {
                            var t = e(this);
                            h.a11y.makeFocusable(t), h.a11y.addRole(t, "button"), h.a11y.addLabel(t, h.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                        })
                    },
                    destroy: function() {
                        h.a11y.liveRegion && h.a11y.liveRegion.length > 0 && h.a11y.liveRegion.remove()
                    }
                }, h.init = function() {
                    h.params.loop && h.createLoop(), h.updateContainerSize(), h.updateSlidesSize(), h.updatePagination(), h.params.scrollbar && h.scrollbar && (h.scrollbar.set(), h.params.scrollbarDraggable && h.scrollbar.enableDraggable()), h.params.effect !== "slide" && h.effects[h.params.effect] && (h.params.loop || h.updateProgress(), h.effects[h.params.effect].setTranslate()), h.params.loop ? h.slideTo(h.params.initialSlide + h.loopedSlides, 0, h.params.runCallbacksOnInit) : (h.slideTo(h.params.initialSlide, 0, h.params.runCallbacksOnInit), h.params.initialSlide === 0 && (h.parallax && h.params.parallax && h.parallax.setTranslate(), h.lazy && h.params.lazyLoading && (h.lazy.load(), h.lazy.initialImageLoaded = !0))), h.attachEvents(), h.params.observer && h.support.observer && h.initObservers(), h.params.preloadImages && !h.params.lazyLoading && h.preloadImages(), h.params.autoplay && h.startAutoplay(), h.params.keyboardControl && h.enableKeyboardControl && h.enableKeyboardControl(), h.params.mousewheelControl && h.enableMousewheelControl && h.enableMousewheelControl(), h.params.hashnav && h.hashnav && h.hashnav.init(), h.params.a11y && h.a11y && h.a11y.init(), h.emit("onInit", h)
                }, h.cleanupStyles = function() {
                    h.container.removeClass(h.classNames.join(" ")).removeAttr("style"), h.wrapper.removeAttr("style"), h.slides && h.slides.length && h.slides.removeClass([h.params.slideVisibleClass, h.params.slideActiveClass, h.params.slideNextClass, h.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), h.paginationContainer && h.paginationContainer.length && h.paginationContainer.removeClass(h.params.paginationHiddenClass), h.bullets && h.bullets.length && h.bullets.removeClass(h.params.bulletActiveClass), h.params.prevButton && e(h.params.prevButton).removeClass(h.params.buttonDisabledClass), h.params.nextButton && e(h.params.nextButton).removeClass(h.params.buttonDisabledClass), h.params.scrollbar && h.scrollbar && (h.scrollbar.track && h.scrollbar.track.length && h.scrollbar.track.removeAttr("style"), h.scrollbar.drag && h.scrollbar.drag.length && h.scrollbar.drag.removeAttr("style"))
                }, h.destroy = function(e, t) {
                    h.detachEvents(), h.stopAutoplay(), h.params.scrollbar && h.scrollbar && h.params.scrollbarDraggable && h.scrollbar.disableDraggable(), h.params.loop && h.destroyLoop(), t && h.cleanupStyles(), h.disconnectObservers(), h.params.keyboardControl && h.disableKeyboardControl && h.disableKeyboardControl(), h.params.mousewheelControl && h.disableMousewheelControl && h.disableMousewheelControl(), h.params.a11y && h.a11y && h.a11y.destroy(), h.emit("onDestroy"), e !== !1 && (h = null)
                }, h.init(), h
            }
            return new t(r, i)
        };
        t.prototype = {
            isSafari: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isArray: function(e) {
                return Object.prototype.toString.apply(e) === "[object Array]"
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
            },
            device: function() {
                var e = navigator.userAgent,
                    t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                    n = e.match(/(iPad).*OS\s([\d_]+)/),
                    r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                    i = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
                return {
                    ios: n || i || r,
                    android: t
                }
            }(),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
                }(),
                flexbox: function() {
                    var e = document.createElement("div").style,
                        t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                    for (var n = 0; n < t.length; n++)
                        if (t[n] in e) return !0
                }(),
                observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window
                }()
            },
            plugins: {}
        };
        var n = function() {
                var e = function(e) {
                        var t = this,
                            n = 0;
                        for (n = 0; n < e.length; n++) t[n] = e[n];
                        return t.length = e.length, this
                    },
                    t = function(t, n) {
                        var r = [],
                            i = 0;
                        if (t && !n && t instanceof e) return t;
                        if (t)
                            if (typeof t == "string") {
                                var s, o, u = t.trim();
                                if (u.indexOf("<") >= 0 && u.indexOf(">") >= 0) {
                                    var a = "div";
                                    u.indexOf("<li") === 0 && (a = "ul"), u.indexOf("<tr") === 0 && (a = "tbody");
                                    if (u.indexOf("<td") === 0 || u.indexOf("<th") === 0) a = "tr";
                                    u.indexOf("<tbody") === 0 && (a = "table"), u.indexOf("<option") === 0 && (a = "select"), o = document.createElement(a), o.innerHTML = t;
                                    for (i = 0; i < o.childNodes.length; i++) r.push(o.childNodes[i])
                                } else {
                                    !n && t[0] === "#" && !t.match(/[ .<>:~]/) ? s = [document.getElementById(t.split("#")[1])] : s = (n || document).querySelectorAll(t);
                                    for (i = 0; i < s.length; i++) s[i] && r.push(s[i])
                                }
                            } else if (t.nodeType || t === window || t === document) r.push(t);
                        else if (t.length > 0 && t[0].nodeType)
                            for (i = 0; i < t.length; i++) r.push(t[i]);
                        return new e(r)
                    };
                return e.prototype = {
                    addClass: function(e) {
                        if (typeof e == "undefined") return this;
                        var t = e.split(" ");
                        for (var n = 0; n < t.length; n++)
                            for (var r = 0; r < this.length; r++) this[r].classList.add(t[n]);
                        return this
                    },
                    removeClass: function(e) {
                        var t = e.split(" ");
                        for (var n = 0; n < t.length; n++)
                            for (var r = 0; r < this.length; r++) this[r].classList.remove(t[n]);
                        return this
                    },
                    hasClass: function(e) {
                        return this[0] ? this[0].classList.contains(e) : !1
                    },
                    toggleClass: function(e) {
                        var t = e.split(" ");
                        for (var n = 0; n < t.length; n++)
                            for (var r = 0; r < this.length; r++) this[r].classList.toggle(t[n]);
                        return this
                    },
                    attr: function(e, t) {
                        if (arguments.length === 1 && typeof e == "string") return this[0] ? this[0].getAttribute(e) : undefined;
                        for (var n = 0; n < this.length; n++)
                            if (arguments.length === 2) this[n].setAttribute(e, t);
                            else
                                for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
                        return this
                    },
                    removeAttr: function(e) {
                        for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                        return this
                    },
                    data: function(e, t) {
                        if (typeof t == "undefined") {
                            if (this[0]) {
                                var n = this[0].getAttribute("data-" + e);
                                return n ? n : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : undefined
                            }
                            return undefined
                        }
                        for (var r = 0; r < this.length; r++) {
                            var i = this[r];
                            i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t
                        }
                        return this
                    },
                    transform: function(e) {
                        for (var t = 0; t < this.length; t++) {
                            var n = this[t].style;
                            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                        }
                        return this
                    },
                    transition: function(e) {
                        typeof e != "string" && (e += "ms");
                        for (var t = 0; t < this.length; t++) {
                            var n = this[t].style;
                            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                        }
                        return this
                    },
                    on: function(e, n, r, i) {
                        function s(e) {
                            var i = e.target;
                            if (t(i).is(n)) r.call(i, e);
                            else {
                                var s = t(i).parents();
                                for (var o = 0; o < s.length; o++) t(s[o]).is(n) && r.call(s[o], e)
                            }
                        }
                        var o = e.split(" "),
                            u, a;
                        for (u = 0; u < this.length; u++)
                            if (typeof n == "function" || n === !1) {
                                typeof n == "function" && (r = arguments[1], i = arguments[2] || !1);
                                for (a = 0; a < o.length; a++) this[u].addEventListener(o[a], r, i)
                            } else
                                for (a = 0; a < o.length; a++) this[u].dom7LiveListeners || (this[u].dom7LiveListeners = []), this[u].dom7LiveListeners.push({
                                    listener: r,
                                    liveListener: s
                                }), this[u].addEventListener(o[a], s, i);
                        return this
                    },
                    off: function(e, t, n, r) {
                        var i = e.split(" ");
                        for (var s = 0; s < i.length; s++)
                            for (var o = 0; o < this.length; o++)
                                if (typeof t == "function" || t === !1) typeof t == "function" && (n = arguments[1], r = arguments[2] || !1), this[o].removeEventListener(i[s], n, r);
                                else if (this[o].dom7LiveListeners)
                            for (var u = 0; u < this[o].dom7LiveListeners.length; u++) this[o].dom7LiveListeners[u].listener === n && this[o].removeEventListener(i[s], this[o].dom7LiveListeners[u].liveListener, r);
                        return this
                    },
                    once: function(e, t, n, r) {
                        function s(o) {
                            n(o), i.off(e, t, s, r)
                        }
                        var i = this;
                        typeof t == "function" && (t = !1, n = arguments[1], r = arguments[2]), i.on(e, t, s, r)
                    },
                    trigger: function(e, t) {
                        for (var n = 0; n < this.length; n++) {
                            var r;
                            try {
                                r = new window.CustomEvent(e, {
                                    detail: t,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (i) {
                                r = document.createEvent("Event"), r.initEvent(e, !0, !0), r.detail = t
                            }
                            this[n].dispatchEvent(r)
                        }
                        return this
                    },
                    transitionEnd: function(e) {
                        function s(r) {
                            if (r.target !== this) return;
                            e.call(this, r);
                            for (n = 0; n < t.length; n++) i.off(t[n], s)
                        }
                        var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                            n, r, i = this;
                        if (e)
                            for (n = 0; n < t.length; n++) i.on(t[n], s);
                        return this
                    },
                    width: function() {
                        return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                    },
                    outerWidth: function(e) {
                        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                    },
                    height: function() {
                        return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                    },
                    outerHeight: function(e) {
                        return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                    },
                    offset: function() {
                        if (this.length > 0) {
                            var e = this[0],
                                t = e.getBoundingClientRect(),
                                n = document.body,
                                r = e.clientTop || n.clientTop || 0,
                                i = e.clientLeft || n.clientLeft || 0,
                                s = window.pageYOffset || e.scrollTop,
                                o = window.pageXOffset || e.scrollLeft;
                            return {
                                top: t.top + s - r,
                                left: t.left + o - i
                            }
                        }
                        return null
                    },
                    css: function(e, t) {
                        var n;
                        if (arguments.length === 1) {
                            if (typeof e != "string") {
                                for (n = 0; n < this.length; n++)
                                    for (var r in e) this[n].style[r] = e[r];
                                return this
                            }
                            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                        }
                        if (arguments.length === 2 && typeof e == "string") {
                            for (n = 0; n < this.length; n++) this[n].style[e] = t;
                            return this
                        }
                        return this
                    },
                    each: function(e) {
                        for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                        return this
                    },
                    html: function(e) {
                        if (typeof e == "undefined") return this[0] ? this[0].innerHTML : undefined;
                        for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                        return this
                    },
                    text: function(e) {
                        if (typeof e == "undefined") return this[0] ? this[0].textContent.trim() : null;
                        for (var t = 0; t < this.length; t++) this[t].textContent = e;
                        return this
                    },
                    is: function(n) {
                        if (!this[0]) return !1;
                        var r, i;
                        if (typeof n == "string") {
                            var s = this[0];
                            if (s === document) return n === document;
                            if (s === window) return n === window;
                            if (s.matches) return s.matches(n);
                            if (s.webkitMatchesSelector) return s.webkitMatchesSelector(n);
                            if (s.mozMatchesSelector) return s.mozMatchesSelector(n);
                            if (s.msMatchesSelector) return s.msMatchesSelector(n);
                            r = t(n);
                            for (i = 0; i < r.length; i++)
                                if (r[i] === this[0]) return !0;
                            return !1
                        }
                        if (n === document) return this[0] === document;
                        if (n === window) return this[0] === window;
                        if (n.nodeType || n instanceof e) {
                            r = n.nodeType ? [n] : n;
                            for (i = 0; i < r.length; i++)
                                if (r[i] === this[0]) return !0;
                            return !1
                        }
                        return !1
                    },
                    index: function() {
                        if (this[0]) {
                            var e = this[0],
                                t = 0;
                            while ((e = e.previousSibling) !== null) e.nodeType === 1 && t++;
                            return t
                        }
                        return undefined
                    },
                    eq: function(t) {
                        if (typeof t == "undefined") return this;
                        var n = this.length,
                            r;
                        return t > n - 1 ? new e([]) : t < 0 ? (r = n + t, r < 0 ? new e([]) : new e([this[r]])) : new e([this[t]])
                    },
                    append: function(t) {
                        var n, r;
                        for (n = 0; n < this.length; n++)
                            if (typeof t == "string") {
                                var i = document.createElement("div");
                                i.innerHTML = t;
                                while (i.firstChild) this[n].appendChild(i.firstChild)
                            } else if (t instanceof e)
                            for (r = 0; r < t.length; r++) this[n].appendChild(t[r]);
                        else this[n].appendChild(t);
                        return this
                    },
                    prepend: function(t) {
                        var n, r;
                        for (n = 0; n < this.length; n++)
                            if (typeof t == "string") {
                                var i = document.createElement("div");
                                i.innerHTML = t;
                                for (r = i.childNodes.length - 1; r >= 0; r--) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                            } else if (t instanceof e)
                            for (r = 0; r < t.length; r++) this[n].insertBefore(t[r], this[n].childNodes[0]);
                        else this[n].insertBefore(t, this[n].childNodes[0]);
                        return this
                    },
                    insertBefore: function(e) {
                        var n = t(e);
                        for (var r = 0; r < this.length; r++)
                            if (n.length === 1) n[0].parentNode.insertBefore(this[r], n[0]);
                            else if (n.length > 1)
                            for (var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i])
                    },
                    insertAfter: function(e) {
                        var n = t(e);
                        for (var r = 0; r < this.length; r++)
                            if (n.length === 1) n[0].parentNode.insertBefore(this[r], n[0].nextSibling);
                            else if (n.length > 1)
                            for (var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i].nextSibling)
                    },
                    next: function(n) {
                        return this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? new e([this[0].nextElementSibling]) : new e([]) : this[0].nextElementSibling ? new e([this[0].nextElementSibling]) : new e([]) : new e([])
                    },
                    nextAll: function(n) {
                        var r = [],
                            i = this[0];
                        if (!i) return new e([]);
                        while (i.nextElementSibling) {
                            var s = i.nextElementSibling;
                            n ? t(s).is(n) && r.push(s) : r.push(s), i = s
                        }
                        return new e(r)
                    },
                    prev: function(n) {
                        return this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? new e([this[0].previousElementSibling]) : new e([]) : this[0].previousElementSibling ? new e([this[0].previousElementSibling]) : new e([]) : new e([])
                    },
                    prevAll: function(n) {
                        var r = [],
                            i = this[0];
                        if (!i) return new e([]);
                        while (i.previousElementSibling) {
                            var s = i.previousElementSibling;
                            n ? t(s).is(n) && r.push(s) : r.push(s), i = s
                        }
                        return new e(r)
                    },
                    parent: function(e) {
                        var n = [];
                        for (var r = 0; r < this.length; r++) e ? t(this[r].parentNode).is(e) && n.push(this[r].parentNode) : n.push(this[r].parentNode);
                        return t(t.unique(n))
                    },
                    parents: function(e) {
                        var n = [];
                        for (var r = 0; r < this.length; r++) {
                            var i = this[r].parentNode;
                            while (i) e ? t(i).is(e) && n.push(i) : n.push(i), i = i.parentNode
                        }
                        return t(t.unique(n))
                    },
                    find: function(t) {
                        var n = [];
                        for (var r = 0; r < this.length; r++) {
                            var i = this[r].querySelectorAll(t);
                            for (var s = 0; s < i.length; s++) n.push(i[s])
                        }
                        return new e(n)
                    },
                    children: function(n) {
                        var r = [];
                        for (var i = 0; i < this.length; i++) {
                            var s = this[i].childNodes;
                            for (var o = 0; o < s.length; o++) n ? s[o].nodeType === 1 && t(s[o]).is(n) && r.push(s[o]) : s[o].nodeType === 1 && r.push(s[o])
                        }
                        return new e(t.unique(r))
                    },
                    remove: function() {
                        for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                        return this
                    },
                    add: function() {
                        var e = this,
                            n, r;
                        for (n = 0; n < arguments.length; n++) {
                            var i = t(arguments[n]);
                            for (r = 0; r < i.length; r++) e[e.length] = i[r], e.length++
                        }
                        return e
                    }
                }, t.fn = e.prototype, t.unique = function(e) {
                    var t = [];
                    for (var n = 0; n < e.length; n++) t.indexOf(e[n]) === -1 && t.push(e[n]);
                    return t
                }, t
            }(),
            r = ["jQuery", "Zepto", "Dom7"];
        for (var i = 0; i < r.length; i++) window[r[i]] && o(window[r[i]]);
        var s;
        typeof n == "undefined" ? s = window.Dom7 || window.Zepto || window.jQuery : s = n, s && ("transitionEnd" in s.fn || (s.fn.transitionEnd = function(e) {
            function s(r) {
                if (r.target !== this) return;
                e.call(this, r);
                for (n = 0; n < t.length; n++) i.off(t[n], s)
            }
            var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                n, r, i = this;
            if (e)
                for (n = 0; n < t.length; n++) i.on(t[n], s);
            return this
        }), "transform" in s.fn || (s.fn.transform = function(e) {
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
            }
            return this
        }), "transition" in s.fn || (s.fn.transition = function(e) {
            typeof e != "string" && (e += "ms");
            for (var t = 0; t < this.length; t++) {
                var n = this[t].style;
                n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
            }
            return this
        })), window.Swiper = t
    }(), typeof module != "undefined" ? module.exports = window.Swiper : typeof define == "function" && define.amd && define("lib-app/Swiper/swiper", [], function() {
        "use strict";
        return window.Swiper
    }), define("storymaps/tpl/ui/mobile/MobileFeatureList", ["lib-build/css!./MobileFeatureList", "lib-build/css!lib-app/Swiper/swiper.min", "lib-app/Swiper/swiper"], function() {
        return function(t, n, r, i) {
            function f() {
                $("#navThemeRight").on("click", function() {
                    u.slideNext()
                }), $("#navThemeLeft").on("click", function() {
                    u.slidePrev()
                })
            }

            function l(e) {
                e === 0 && u.slides.length > 1 ? ($("#navThemeLeft").css("display", "none"), $("#navThemeRight").css("display", "block")) : e == u.slides.length - 1 ? ($("#navThemeRight").css("display", "none"), $("#navThemeLeft").css("display", "block")) : ($("#navThemeLeft").css("display", "block"), $("#navThemeRight").css("display", "block"))
            }

            function c(e) {
                return $.grep($("ul.mobileTileList li"), function(t, n) {
                    return t.id == "item" + e
                })[0]
            }
            var s = i,
                o = !0,
                u = null,
                a = $("#mobileThemeBarSlider");
            app.scrollList, this.init = function() {
                u = new Swiper("#mobileThemeSliderContainer", {
                    speed: 0,
                    direction: "horizontal"
                }), u.on("onSlideChangeEnd", function(e) {
                    $("#mobileThemeBar").css("visibility") == "visible" && s.activateLayer(u.activeIndex), l(u.activeIndex), $("#mobileThemeBar").css("background-color", app.layerCurrent.color)
                }), f()
            }, this.addTheme = function(e, t) {
                var n = '<div class="mobileThemeTitle swiper-slide"><p style="margin-top: 7px;">' + e.title + "</p></div>";
                $(a).append(n), u.update(), t && ($("#mobileThemeBar .swiper-container").css("display", "none"), $("#navThemeLeft").css("display", "none"), $("#navThemeRight").css("display", "none"))
            }, this.showMobileList = function() {
                $("#mobileFeature").css("visibility", "hidden"), $("#mobileSupportedLayersView").css("visibility", "hidden"), $("#mobileThemeBarSlider").css("display", "block"), $("#mobilePaneList").css("visibility", "visible"), $("#returnIcon").css("display", "none"), $("#returnHiddenBar").css("display", "none"), $("#centerMapIconContainer").css("display", "none"), $("#navThemeLeft").css("visibility", "visible"), $("#navThemeRight").css("visibility", "visible"), s.selected && (s.selected.symbol.setWidth(app.cfg.lutIconSpecs.tiny.getWidth()), s.selected.symbol.setHeight(app.cfg.lutIconSpecs.tiny.getHeight()), s.selected.symbol.setOffset(app.cfg.lutIconSpecs.tiny.getOffsetX(), app.cfg.lutIconSpecs.tiny.getOffsetY()), s.selected.draw()), s.selected = null, app.mapTips && app.mapTips.clean(!0), $(".detailContainer").hide(), u.update()
            }, this.selectTheme = function(e) {
                o ? u.slideTo(e, 0) : (u.slideTo(e, 0), $("#mobileTitlePage").css("display", "none")), o = !1, $("#mobileThemeBar").css("background-color", app.layerCurrent.color), l(e)
            }, this.buildList = function(e, t, n) {
                e === 0 && $("#mobileList").empty();
                var r = $(n).clone();
                $(r).data("shortlist-id", t.attributes.shortlist_id);
                var i = t.attributes.thumb_url ? t.attributes.thumb_url : t.attributes.pic_url,
                    s = $('<div style="height: 75px; margin-bottom: 8px;"><img src="' + i + '"></div>');
                $(r).append(s), $("#mobilePaneList ul.mobileTileList li").on("tap", app.ui.tilePanel.tile_onClick), $("#mobilePaneList ul.mobileTileList li").on("click", app.ui.tilePanel.tile_onClick), $("#mobileList").append(r)
            }, this.setColor = function() {
                if (app.isInBuilder) return;
                $("#mobileThemeBar").css("background-color", app.layerCurrent.color)
            }, this.refreshMobileList = function() {
                var e, t = !1;
                app.layerCurrent && app.layerCurrent.graphics.length && setTimeout(function() {
                    $.each(app.layerCurrent.graphics, function(n, r) {
                        e = c(r.attributes.shortlist_id), app.map.extent.contains(r.geometry) ? ($(e).css("display") == "none" && $(e).css("display", "block"), t = !0) : $(e).css("display") != "none" && $(e).css("display", "none")
                    }), $("#mobilePaneList").scrollTop(0), t ? $(".noFeature").css("display", "none") : $(".noFeature").css("display", "block")
                }, 100)
            }
        }
    }), define("lib-build/css!storymaps/common/mapcontrols/command/MapCommand", [], function() {}), define("storymaps/common/mapcontrols/command/MapCommand", ["lib-build/css!./MapCommand", "dojo/has", "esri/geometry/Point", "dojo/on", "esri/symbols/PictureMarkerSymbol", "esri/layers/GraphicsLayer", "esri/graphic", "esri/config"], function(e, t, n, r, i, s, o, u) {
        return function(a, f, l, c) {
            function m(e) {
                if (e) $(a.container).find(".mapCommandHomeBtn").addClass("loading"), h = Date.now();
                else {
                    var t = Date.now() - h,
                        n = 0;
                    t < 450 && (n = 450 - t), setTimeout(function() {
                        $(a.container).find(".mapCommandHomeBtn").removeClass("loading"), h = 0
                    }, n)
                }
            }

            function g() {
                console.log("getDeviceLocation");
                var e = 1e4,
                    t = !1;
                setTimeout(function() {
                    t || $(a.container).find(".mapCommandLocation").addClass("loading")
                }, 300), navigator.geolocation.getCurrentPosition(function(e) {
                    t = !0, $(a.container).find(".mapCommandLocation").removeClass("loading");
                    var r = new n(e.coords.longitude, e.coords.latitude);
                    l && typeof l == "function" && l(!0, r, e);
                    if (a.spatialReference.wkid != 102100 && a.spatialReference.wkid != 4326) {
                        u.defaults.geometryService.project([r], a.spatialReference, function(e) {
                            if (!e || !e[0]) return;
                            y(e[0])
                        });
                        return
                    }
                    y(r)
                }, function(e) {
                    t = !0, b(e)
                }, {
                    enableHighAccuracy: !0,
                    maximumAge: 12e4,
                    timeout: e
                }), setTimeout(function() {
                    t || b()
                }, e)
            }

            function y(e) {
                v.clear(), v.add(new o(e, d)), setTimeout(function() {
                    $("#locateLayer_layer image").fadeOut({
                        duration: 800
                    })
                }, 1e4)
            }

            function b(e) {
                console.log("getDeviceLocationError", e), $(a.container).find(".mapCommandLocation").removeClass("loading"), l(!1, null)
            }
            var h = 0,
                p = $('<div class="esriSimpleSliderIncrementButton"><div class="mapCommandHomeBtn"></div></div>'),
                d = new i("resources/common/icons/mapcommand-location-marker.png", 21, 21),
                v = new s({
                    id: "locateLayer"
                });
            p.click(function() {
                if (h !== 0 && $("body").hasClass("mobile-view")) return;
                f && typeof f == "function" ? f(a._params.extent) : a.setExtent(a._params.extent)
            }), $(a.container).find(".esriSimpleSlider div:nth-child(1)").after(p), r(a, "update-start", function() {
                h === 0 && m(!0)
            }), r(a, "update-end", function() {
                m(!1)
            }), this.setMobile = function(e) {
                $(".esriSimpleSlider, .mapCommandHomeBtn", a.container).toggleClass("touch", !!e)
            }, this.destroy = function() {
                $(a.container).find(".esriSimpleSliderIncrementButton").remove(), $(a.container).find(".mapCommandLocation").remove()
            }, this.startLoading = function() {
                m(!0)
            }, this.stopLoading = function() {
                m(!1)
            }, this.enableLocationButton = function(e) {
                $(a.container).toggleClass("has-locator", e), $(".mapCommandLocation", a.container).toggleClass("hidden", !e)
            }, navigator && navigator.geolocation && ($(".esriSimpleSlider", a.container).after('<div class="esriSimpleSlider esriSimpleSliderVertical mapCommandLocation"></div>'), $(".mapCommandLocation", a.container).click(g), this.enableLocationButton(c), a.addLayer(v)), this.setMobile(app.appCfg.mapCommandLargerTouch || app.appCfg.mapCommandLargerTouch === undefined && t("touch"))
        }
    }), define("lib-build/tpl!storymaps/common/mapcontrols/legend/Legend", [], function() {
        return function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) __p += '<div class="legendContainer mapControls">\r\n	<div class="titleBtn">\r\n		<span class="collapseBtn">\r\n			<div class="glyphicon glyphicon-chevron-down"></div>\r\n			<div class="glyphicon glyphicon-chevron-up"></div>\r\n		</span>\r\n		' + ((__t = title) == null ? "" : __t) + '\r\n	</div>\r\n	\r\n	<div class="content">\r\n		<div class="legendDijitContainer"></div>\r\n		', isInBuilder && (__p += '\r\n			<div class="settingsGear glyphicon glyphicon-wrench"></div>\r\n			<div class="settingsOverlay">\r\n				<div class="settings-title">' + ((__t = settings) == null ? "" : __t) + '</div>\r\n				<div class="settings-content">\r\n					<!-- Open by default -->\r\n					<div class="checkbox">\r\n						<label>\r\n							<input type="checkbox" class="expandStartup" />\r\n							' + ((__t = openDefault) == null ? "" : __t) + "\r\n						</label>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		"), __p += "\r\n	</div>\r\n</div>";
            return __p
        }
    }), define("lib-build/css!storymaps/common/mapcontrols/legend/Legend", [], function() {}), define("lib-build/css!storymaps/common/mapcontrols/Common", [], function() {}), define("storymaps/common/mapcontrols/legend/Legend", ["lib-build/tpl!./Legend", "lib-build/css!./Legend", "lib-build/css!../Common", "storymaps/common/utils/CommonHelper", "esri/dijit/Legend", "esri/arcgis/utils", "dojo/topic"], function(e, t, n, r, i, s, o) {
        return function(n, u, a) {
            function d() {
                h.find(".legendDijitContainer").html('<div class="legendDijit"></div>'), l = new i({
                    map: n.map,
                    layerInfos: s.getLegendLayers(n)
                }, h.find(".legendDijit")[0]), l.startup()
            }

            function v() {
                l && l.destroy(), l = null
            }

            function m() {
                h.find(".legendContainer").toggleClass("collapsed"), h.find(".settingsOverlay").hide()
            }

            function g() {
                h.find(".titleBtn").click(m), h.find(".settingsGear").click(function() {
                    h.find(".settingsOverlay").is(":visible") ? h.off("mouseleave") : h.mouseleave(function() {
                        h.find(".settingsOverlay").toggle(), h.off("mouseleave"), h.find(".content").removeClass("settingsOpen")
                    }), h.find(".settingsOverlay").toggle(), h.find(".content").toggleClass("settingsOpen")
                }), h.find(".expandStartup").change(y), f.updatePlacementSettings(a)
            }

            function y() {
                c.openByDefault = h.find(".expandStartup").prop("checked"), o.publish("BUILDER_INCREMENT_COUNTER", 1)
            }
            var f = this,
                l = null,
                c = null,
                h = a.container,
                p = {
                    isInBuilder: u,
                    title: i18n.viewer.legendFromCommon.title
                };
            u && (p.settings = i18n.commonMapControls.common.settings, p.openDefault = i18n.commonMapControls.common.openDefault), h.html(e(p)), this.toggle = function(e) {
                h.toggle(!!e), e && !l ? d() : e || v()
            }, this.toggleExpanded = function(e) {
                h.find(".legendContainer").toggleClass("collapsed", !e)
            }, this.setColors = function(e) {
                h.find(".legendContainer").css({
                    backgroundColor: e.dotNav || e.mapControls,
                    color: e.text
                }), h.find(".titleBtn").css("color", e.softText), h.find(".settingsGear, .collapseBtn").css("color", e.softBtn), r.addCSSRule(".mainMediaContainer .legendContainer ::-webkit-scrollbar-thumb { background-color:" + e.header + "; }", "MapControlLegendDropdownScrollbar")
            }, this.updatePlacementSettings = function(e) {
                h.find(".legendContainer").toggleClass("isInlined", e.mode == "panel"), e.container[0] != h[0] && (e.container.html(h.find(".legendContainer")), h = e.container)
            }, this.setSettings = function(e) {
                c = e, h.find(".expandStartup").prop("checked", c.openByDefault)
            }, g()
        }
    }), define("lib-build/tpl!storymaps/common/mapcontrols/overview/Overview", [], function() {
        return function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) __p += '<div class="overviewContainer mapControls">\r\n	<div class="titleBtn">\r\n		<span class="collapseBtn">\r\n			<div class="glyphicon glyphicon-chevron-down"></div>\r\n			<div class="glyphicon glyphicon-chevron-up"></div>\r\n		</span>\r\n		' + ((__t = title) == null ? "" : __t) + '\r\n	</div>\r\n	\r\n	<div class="content">\r\n		<div class="overviewMapContainer">\r\n			<!-- Map is injected here -->\r\n		</div>\r\n		', isInBuilder && (__p += '\r\n			<div class="settingsGear glyphicon glyphicon-wrench"></div>\r\n			<div class="settingsOverlay">\r\n				<div class="settings-title">' + ((__t = settings) == null ? "" : __t) + '</div>\r\n				<div class="settings-content">\r\n					<!-- Open by default -->\r\n					<div class="checkbox">\r\n						<label>\r\n							<input type="checkbox" class="expandStartup" />\r\n							' + ((__t = openDefault) == null ? "" : __t) + '\r\n						</label>\r\n					</div>\r\n					\r\n					<!-- Basemap -->\r\n					<div class="btn-group dropup basemap-dropdown">\r\n						<button type="button" class="btn btn-default btn-sm dropdown-toggle basemapBtn" data-toggle="dropdown">\r\n							' + ((__t = basemapGalleryBtnLabel) == null ? "" : __t) + ' <span class="caret"></span>\r\n						</button>\r\n						<ul class="dropdown-menu basemaps dropdown-menu-form pull-right" role="menu"></ul>\r\n					</div>\r\n					<div id="basemapGallery"></div>\r\n			\r\n					<!-- Expand factor -->\r\n					<div class="spinnerLabel">\r\n						<label for="expandFactorSpinner">' + ((__t = expandFactorLabel) == null ? "" : __t) + '</label>\r\n						<a class="locateBtnHelp" data-original-title="" title="">\r\n							<img src="resources/tpl/builder/icons/builder-help.png" style="vertical-align: -5px;">\r\n						</a>\r\n					</div>\r\n					\r\n					<div class="input-group expandFactorSpinner">\r\n						<input type="text" class="form-control input-small input-xs" id="expandFactorSpinner" value="2">\r\n						<div class="input-group-btn-vertical">\r\n							<button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-chevron-up"></i></button>\r\n							<button class="btn btn-default btn-xs"><i class="glyphicon glyphicon-chevron-down"></i></button>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		'), __p += "\r\n	</div>\r\n</div>";
            return __p
        }
    }), define("lib-build/css!storymaps/common/mapcontrols/overview/Overview", [], function() {}), define("storymaps/common/mapcontrols/overview/Overview", ["lib-build/tpl!./Overview", "lib-build/css!./Overview", "lib-build/css!../Common", "esri/dijit/OverviewMap", "esri/dijit/BasemapGallery", "esri/layers/ArcGISTiledMapServiceLayer", "esri/arcgis/utils", "dojo/Deferred", "dojo/dom", "dojo/on", "dojo/topic"], function(e, t, n, r, i, s, o, u, a, f, l) {
        return function(n, i, s) {
            function c(e) {
                i.find(".overviewMapContainer").html('<div class="overviewMap"></div>'), o = new r({
                    map: n,
                    visible: !0,
                    color: "transparent",
                    opacity: 1
                }, i.find(".overviewMap")[0]), o.startup();
                var t = e ? e.dotNav || e.header : a;
                t && i.find(".ovwHighlight").css("border", "3px solid " + t)
            }

            function h() {
                o && o.destroy(), o = null
            }

            function p() {
                i.find(".overviewContainer").toggleClass("collapsed"), i.find(".settingsOverlay").hide()
            }

            function d() {
                i.find(".titleBtn").click(p), i.find(".settingsGear").click(function() {
                    i.find(".settingsOverlay").is(":visible") ? i.off("mouseleave") : i.mouseleave(function() {
                        i.find(".settingsOverlay").toggle(), i.off("mouseleave")
                    }), i.find(".settingsOverlay").toggle()
                }), i.find(".expandStartup").change(v)
            }

            function v() {
                u.openByDefault = i.find(".expandStartup").prop("checked"), l.publish("BUILDER_INCREMENT_COUNTER", 1)
            }
            var o = null,
                u = null,
                a = null,
                f = {
                    isInBuilder: s,
                    title: i18n.viewer.overviewFromCommon.title,
                    overlayHeader: "",
                    basemapGalleryBtnLabel: "",
                    expandFactorLabel: ""
                };
            s && (f.settings = i18n.commonMapControls.common.settings, f.openDefault = i18n.commonMapControls.common.openDefault, f.basemapGalleryBtnLabel = i18n.commonMapControls.overview.basemapGalleryBtnLabel, f.expandFactorLabel = i18n.commonMapControls.overview.expandFactorLabel), i.append(e(f)), this.toggle = function(e, t) {
                i.toggle(!!e), e && !o ? c(t) : e || h()
            }, this.toggleExpanded = function(e) {
                i.find(".overviewContainer").toggleClass("collapsed", !e)
            }, this.setColors = function(e) {
                a = e.dotNav || e.mapControls, i.find(".overviewContainer").css({
                    backgroundColor: a,
                    color: e.text
                }), i.find(".titleBtn").css("color", e.softText), i.find(".settingsGear, .collapseBtn").css("color", e.softBtn), i.find(".ovwHighlight").css("border", "3px solid " + a)
            }, this.setSettings = function(e) {
                u = e, i.find(".expandStartup").prop("checked", u.openByDefault)
            }, d()
        }
    }), define("lib-build/tpl!storymaps/common/mapcontrols/geocoder/Geocoder", [], function() {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="geocoderBtn">\r\n	<div class="geocoderContainer"></div>\r\n</div>';
            return __p
        }
    }), define("lib-build/css!storymaps/common/mapcontrols/geocoder/Geocoder", [], function() {}), define("storymaps/common/mapcontrols/geocoder/Geocoder", ["lib-build/tpl!./Geocoder", "lib-build/css!./Geocoder", "../../utils/CommonHelper"], function(e, t, n) {
        return function(r, i, s) {
            function a() {
                $(r.container).find(".esriSimpleSlider").last().after(e({})), o.toggle(s)
            }
            var o = this,
                u = null;
            this.toggle = function(e) {
                var t = $(r.container).find(".geocoderBtn");
                u || n.createGeocoder({
                    map: r,
                    domNode: t.find(".geocoderContainer")[0],
                    enableButtonMode: !0
                }).then(function(e) {
                    u = e, t.find(".esriGeocoderContainer input, .esriGeocoderSearch").attr("tabindex", "-1")
                }), $(r.container).toggleClass("has-geocoder", e), t.toggle(e)
            }, a()
        }
    }), define("lib-build/css!storymaps/common/utils/SocialSharing", [], function() {}), define("lib-build/css!storymaps/common/ui/loadingIndicator/LoadingIndicator", [], function() {}), define("lib-build/css!storymaps/tpl/ui/Common", [], function() {}), define("lib-build/css!storymaps/tpl/ui/mobile/Common", [], function() {}), define("lib-build/css!storymaps/tpl/ui/Responsive", [], function() {}), define("lib-build/css!storymaps/tpl/ui/desktop/MultiTips", [], function() {}), define("storymaps/tpl/core/MainView", ["lib-build/css!./MainView", "./Config", "./Data", "./WebApplicationData", "./Helper", "../ui/desktop/TestPanel", "../ui/desktop/TilePanel", "../ui/desktop/DetailPanel", "../ui/desktop/NavBar", "../ui/desktop/MultiTips", "../ui/mobile/MobileIntro", "../ui/mobile/MobileFeatureList", "storymaps/common/mapcontrols/command/MapCommand", "storymaps/common/mapcontrols/legend/Legend", "storymaps/common/mapcontrols/overview/Overview", "storymaps/common/mapcontrols/geocoder/Geocoder", "lib-build/css!storymaps/common/ui/Modal.css", "lib-build/css!storymaps/common/utils/SocialSharing.css", "lib-build/css!storymaps/common/ui/loadingIndicator/LoadingIndicator.css", "storymaps/common/utils/CommonHelper", "dojo/has", "dojo/topic", "dojo/on", "dojo/dom", "dojo/DeferredList", "dojo/_base/lang", "esri/arcgis/utils", "esri/geometry/Point", "esri/geometry/screenUtils", "esri/geometry/Extent", "esri/SpatialReference", "lib-build/css!../ui/Common", "lib-build/css!../ui/mobile/Common", "lib-build/css!../ui/Responsive", "lib-build/css!../ui/desktop/MultiTips"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O) {
        return function(s) {
            function T() {
                app.data.getWebAppData().getGeneralOptions().bookmarks && app.maps[app.data.getWebAppData().getWebmap()].response.itemInfo.itemData.bookmarks && app.maps[app.data.getWebAppData().getWebmap()].response.itemInfo.itemData.bookmarks.length && app.ui.navBar.initBookmarks(), app.data.getWebAppData().getWebmap() && (app.mapItem = app.maps[app.data.getWebAppData().getWebmap()].response.itemInfo);
                if (!app.map) return;
                setTimeout(function() {
                    if (app.data.getWebAppData().getTabs() && app.data.getWebAppData().getTabs()[0] && app.data.getWebAppData().getTabs()[0].extent) {
                        var e = new A(app.data.getWebAppData().getTabs()[0].extent);
                        setTimeout(function() {
                            app.map.setExtent(e, !0)
                        }, 500)
                    } else app.isDirectCreationFirstSave ? app.map.centerAndZoom([0, 0], 3) : setTimeout(function() {
                        app.map.setExtent(app.map._params.extent, !0)
                    }, 500);
                    app.map.on("extent-change", function() {
                        setTimeout(function() {
                            app.data.getWebAppData().getGeneralOptions().filterByExtent && !app.isInBuilder ? (app.ui.tilePanel.refreshList(), app.ui.mobileFeatureList.refreshMobileList(), app.ui.detailPanel.loaded && (app.ui.detailPanel.refreshSlides(), v.selected && setTimeout(function() {
                                app.ui.detailPanel.loaded && app.ui.detailPanel.showDetails(v.selected)
                            }, 0))) : app.ui.detailPanel.loaded && v.selected && setTimeout(function() {
                                app.ui.detailPanel.loaded && app.ui.detailPanel.showDetails(v.selected)
                            }, 0)
                        }, 0)
                    }), app.isDirectCreation || setTimeout(function() {
                        p.displayApp()
                    }, 500)
                }, 750), app.ui.mobileIntro.setTitle(), r.getTabs() && $.each(r.getTabs(), function(e, t) {
                    app.data.setStory(e, t.title, t.color, t.extent)
                });
                var e = $.grep(app.map.graphicsLayerIds, function(e) {
                    return e.split("_").slice(0, -1).join("_") == r.getShortlistLayerId() ? e : e == r.getShortlistLayerId() ? e : !1
                });
                app.data.setShortlistLayerId(e[0]), app.map || setTimeout(function() {}, 500), app.map.loaded ? k() : app.map.on("load", function() {
                    k()
                }), s && s.storyDataReady()
            }

            function k() {
                app.map.resize(), app.map.on("click", function(e) {
                    app.mapTips && (e.graphic ? v.selected && (v.selected.hidden = !1) : (app.mapTips.clean(!0), v.selected && !app.isInBuilder && (v.selected.hidden = !0)))
                });
                var e = [];
                $.each(r.getTabs(), function(t, n) {
                    e.push({
                        features: [],
                        title: n.title,
                        color: n.color,
                        extent: n.extent
                    })
                });
                var t = app.map.getLayer(app.data.getWebAppData().getShortlistLayerId()) ? app.data.getWebAppData().getShortlistLayerId() : app.data.getWebAppData().getShortlistLayerId() + "_0";
                app.data.getWebAppData().setShortlistLayerId(t);
                var n = app.map.getLayer(app.data.getWebAppData().getShortlistLayerId());
                $.each(n.graphics, function(t, n) {
                    n.attributes.locationSet && n.attributes.name && n.attributes.name != "Unnamed Place" && n.attributes.pic_url && !app.isInBuilder ? e[n.attributes.tab_id].features.push(n) : app.isInBuilder && e[n.attributes.tab_id].features.push(n)
                }), n.on("mouse-over", v.layer_onMouseOver), n.on("mouse-out", v.layer_onMouseOut), n.on("click", v.layer_onClick);
                var i = [];
                $.each(app.map.graphicsLayerIds, function(e, t) {
                    t !== n.id && i.push(app.map.getLayer(t))
                }), $.each(i, function(e, t) {
                    t.on("click", j)
                });
                if (e.length > 1 || app.isInBuilder && !app.isDirectCreationFirstSave) {
                    $("#divStrip").height("35px"), $.each(e, function(t, n) {
                        app.ui.tilePanel.createTab(t, n), app.ui.mobileIntro.fillList(t, n, e), app.ui.mobileFeatureList.addTheme(n);
                        var r = app.cfg.COLOR_ORDER.split(","),
                            i = $.grep(app.cfg.COLOR_SCHEMES, function(e) {
                                return e.name.toLowerCase() == $.trim(r[t].toLowerCase())
                            })[0],
                            s = n.color || i.color;
                        v.buildLayer(n.features.sort(z), s);
                        if (app.isInBuilder) {
                            app.data.setStory(t, n.title, i.color, n.extent);
                            var o = N.clone(app.data.getStory());
                            $.each(o, function(e, t) {
                                t.title = n.title, t.color = s
                            }), app.detailPanelBuilder.addDetailPanelSwiper(t)
                        }
                        app.data.setStory(t, n.title, n.color)
                    });
                    if (!app.isDirectCreationFirstSave) {
                        var s = {
                                header: "#444",
                                tabText: "#d8d8d8",
                                tab: "#666",
                                tabTextActive: "#fff",
                                tabActive: "#999",
                                tabTextHover: "#fff",
                                tabHover: "#666"
                            },
                            o = 0;
                        app.ui.navBar.init(e, o, s, r), app.ui.tilePanel.setTabClick()
                    }
                } else {
                    if (e.length < 1) return !1;
                    $.each(e, function(e, t) {
                        app.ui.tilePanel.createTab(e, t), app.ui.mobileFeatureList.addTheme(t);
                        var n = app.cfg.COLOR_ORDER.split(","),
                            r = $.grep(app.cfg.COLOR_SCHEMES, function(t) {
                                return t.name.toLowerCase() == $.trim(n[e].toLowerCase())
                            })[0],
                            i = t.color || r.color;
                        v.buildLayer(t.features.sort(z), i);
                        if (app.isInBuilder) {
                            app.data.setStory(e, t.title, r.color);
                            var s = N.clone(app.data.getStory());
                            $.each(s, function(e, n) {
                                n.title = t.title, n.color = i
                            }), app.detailPanelBuilder.addDetailPanelSwiper(e)
                        }
                    }), $(".tab").css("display", "none"), $("#mobileIntro").append("<br><hr></hr>"), $("#mobileIntro").append('<ul id="mobileThemeList" class="mobileTileList">');
                    var u = $('<li class="mobileTitleTheme" onclick="app.ui.mobileIntro.selectMobileTheme(0)">').append('<div class="startButton"> Start </div>');
                    $("#mobileThemeList").append(u), $("#navThemeLeft").addClass("hideButtons"), $("#navThemeRight").addClass("hideButtons"), $("#nav-bar").show(), $("#nav-bar .entries").hide(), $("#bookmarksCon").css({
                        top: 0
                    })
                }
                p.handleWindowResize(), v.activateLayer(0), app.isInBuilder && app.detailPanelBuilder.buildSlides(), $(".entryLbl").css("outline-style", "none"), $("#zoomToggle").css("visibility", "visible"), $("#whiteOut").fadeOut("slow"), $("body").width() > 768 ? ($("#paneLeft").height($("#contentPanel").height() - $("#tabs").height()), $("#paneLeft").css("top", $("#divStrip").height()), $("#map").height($("#contentPanel").height()), $("#map").css("top", 0), $(".tilelist").height($("#paneLeft").height() - 25)) : app.ui.mobileIntro.resizeMobileElements(), p.appInitComplete(r), $("body").on("mousedown", "*", function(e) {
                    ($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none" && ($(this).css("outline", "none").on("blur", function() {
                        $(this).off("blur").css("outline", "")
                    }), $(this).parents("#bookmarksToggle").length && $(this).parents("#bookmarksToggle").css("outline", "none").on("blur", function() {
                        $(this).off("blur").css("outline", "")
                    }))
                }), app.map.disableKeyboardNavigation(), $("body").keypress(function(e) {
                    e.which == 13 && $(document.activeElement).click(), e.which == 43 && (app.map.setLevel(app.map.getLevel() + 1), $("#zoomIn").focus(), v.hideBookmarks()), e.which == 45 && (app.map.setLevel(app.map.getLevel() - 1), $("#zoomOut").focus(), v.hideBookmarks())
                }), app.map.reorderLayer(app.data.getWebAppData().getShortlistLayerId(), app.map.graphicsLayerIds.length - 1)
            }

            function M() {
                if (v.selected.symbol.width == app.cfg.lutIconSpecs.large.getWidth()) return;
                v.selected.symbol.setWidth(app.cfg.lutIconSpecs.large.getWidth()), v.selected.symbol.setHeight(app.cfg.lutIconSpecs.large.getHeight()), v.selected.symbol.setOffset(app.cfg.lutIconSpecs.large.getOffsetX(), app.cfg.lutIconSpecs.large.getOffsetY()), v.selected.draw(), setTimeout(function() {
                    try {
                        v.selected.getShape().moveToFront();
                        //CUSTOM CODE
                        // this centers and zooms when each point is selecter or the left pane is swiped
                        app.map.centerAndZoom(v.selected.geometry, 19);

                    } catch (e) {
                        console.log("problem with 'moveToFront()'...")
                    }
                }, 10)
            }

            function _(e, t) {
                var n = t * 4,
                    r = e.data;
                return [r[n], r[n + 1], r[n + 2], r[n + 3]]
            }

            function D(e) {
                var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                e = e.replace(t, function(e, t, n, r) {
                    return t + t + n + n + r + r
                });
                var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return n ? {
                    r: parseInt(n[1], 16),
                    g: parseInt(n[2], 16),
                    b: parseInt(n[3], 16)
                } : null
            }

            function P(e, t, n) {
                var r = (new esri.symbol.PictureMarkerSymbol(t.toDataURL(), n.getWidth(), n.getHeight())).setOffset(n.getOffsetX(), n.getOffsetY());
                return r
            }

            function H(e) {
                if (d.isMobile()) return;
                app.map.setMapCursor("pointer");
                var t = e.graphic,
                    n = {};
                n.geometry = L.toMapPoint(app.map.extent, app.map.width, app.map.height, e.screenPoint), v.buildMapSupportHoverTips(t.attributes.name, n)
            }

            function B() {
                if (d.isMobile()) return;
                app.map.setMapCursor("default"), app.mapTips.clean()
            }

            function j(e) {
                v.selected = null, $("#mobileTitlePage").css("display", "none");
                var t = $(".esriPopup")[0];
                if (app.ui.mobileIntro.screenSize != "small") app.map.infoWindow.on("set-features", function() {
                    $(t).show()
                }), app.mapTips && app.mapTips.clean();
                else {
                    $(t).hide();
                    var n = e.graphic,
                        r = {};
                    r.geometry = L.toMapPoint(app.map.extent, app.map.width, app.map.height, e.screenPoint), v.buildMapSupportHoverTips(n.attributes.name, r)
                }
            }

            function F() {
                var e = [],
                    t = [];
                $.each(app.map.graphicsLayerIds, function(t, n) {
                    e.push(app.map.getLayer(n))
                });
                var n = {
                    bookmarks: !1,
                    bookmarksAlias: "Zoom",
                    extentMode: "customHome",
                    filterByExtent: !0,
                    numberedIcons: !1
                };
                app.data.getWebAppData().setGeneralOptions(n), $.each(app.map.layerIds, function(t, n) {
                    var r = app.maps[app.data.getWebAppData().getWebmap()].response.itemInfo.itemData.baseMap.baseMapLayers,
                        i = $.grep(r, function(e) {
                            return e.id == n
                        });
                    i[0] || e.push(app.map.getLayer(n))
                });
                var i = [],
                    o = [],
                    u, a = null,
                    f;
                $.each(e, function(e, n) {
                    n.layerType ? f = n.layerType : f = n.type, n.geometryType == "esriGeometryPoint" && n.id.toLowerCase().indexOf("mapnotes") == -1 && t.push(n), n.url && (f === "ArcGISFeatureLayer" || f === "Feature Layer") && !n.id.match(/^csv_/) && (u = !0, a = n, i.push(n.url), o.push(e))
                });
                var l = app.data.getWebMap().item.extent,
                    c = new A(l[0][0], l[0][1], l[1][0], l[1][1], new O({
                        wkid: 4326
                    }));
                app.map.setExtent(c, !0), app.map._params.extent = new A(JSON.parse(JSON.stringify(app.map.extent.toJson()))), app.data.getWebAppData().setMapExtent(c), $(".builder-share").css("pointer-events", "none").css("cursor", "default").css("opacity", "0.5");
                if (!t.length) {
                    var h = {};
                    s.initPopupComplete(h), app.detailPanelBuilder.init(app.ui.mainView, s), app.data.getWebAppData().setTitle(app.data.getResponse().itemInfo.item.title), app.data.getWebAppData().setSubtitle(app.data.getResponse().itemInfo.item.description), app.ui.headerDesktop.setTitleAndSubtitle(app.data.getWebAppData().getTitle(), app.data.getWebAppData().getSubtitle());
                    if (app.data.getResponse().itemInfo.itemData.bookmarks && app.data.getResponse().itemInfo.itemData.bookmarks.length) {
                        var d = {
                            extentMode: "default",
                            numberedIcons: !1,
                            filterByExtent: !0,
                            bookmarks: !0,
                            bookmarksAlias: "Zoom"
                        };
                        app.data.getWebAppData().setGeneralOptions(d), app.ui.navBar.initBookmarks()
                    }
                    p.appInitComplete(r)
                } else $.each(t, function(t, n) {
                    var r = e.indexOf(n);
                    e.splice(r, 1)
                }), s.openMigrationPopup(t, e), $("#loadingIndicator").hide(), clearTimeout(app.loadingTimeout), app.loadingTimeout = null
            }

            function I() {
                if (!r.isBlank()) p.appInitComplete(r);
                else if (app.isInBuilder && app.data.getWebAppData().getWebmap()) {
                    var e = v.loadWebmap(app.data.getWebAppData().getWebmap(), "map");
                    e.then(function(t) {
                        app.data.setResponse(t), app.maps[t.itemInfo.item.id] = v.getMapConfig(t), app.map = e.results[0].map, app.data.setWebMap(e.results[0].itemInfo), s.updateUI(), F()
                    }), p.isProd() ? s.showInitPopup() : p.portalLogin().then()
                }
                if (s && !app.data.getWebAppData().getWebmap()) {
                    var e = v.loadWebmap(s.buildWebMap(), "map");
                    e.then(function(t) {
                        app.data.setResponse(t), app.map = e.results[0].map, app.data.setWebMap(e.results[0].itemInfo), app.maps[t.itemInfo.item.id] = v.getMapConfig(t), s.updateUI(), p.appInitComplete(r), s.storyDataReady(), p.displayApp()
                    })
                }
            }

            function q(e) {
                var t = {
                    objectIdField: "__OBJECTID",
                    geometryType: "esriGeometryPoint",
                    drawingInfo: {
                        renderer: {
                            type: "simple",
                            symbol: {
                                type: "esriPMS",
                                url: "http://static.arcgis.com/images/Symbols/Shapes/GreenDiamondLargeB.png",
                                width: 15,
                                height: 15
                            }
                        }
                    },
                    fields: e
                };
                return t
            }

            function R(e) {
                return e.url ? e.featureCollection.featureSet : e.featureCollection.layers[0].featureSet
            }

            function U(e) {
                return e.url ? e.id : e.id
            }

            function z(e, t) {
                var n = e.attributes.number || e.attributes.shortlist_id,
                    r = t.attributes.number || t.attributes.shortlist_id;
                return n < r ? -1 : n > r ? 1 : 0
            }

            function W() {
                E.publish("CORE_UPDATE_EXTENT", new A(app.data.getWebAppData().getMapExtent()))
            }
            var p = null,
                d = new i,
                v = this,
                m = !1,
                g, y, S, x = 0;
            this.init = function(e) {
                p = e;
                if (app.isInBuilder && w("ie") && w("ie") < 10) return i18n.viewer.errors.noBuilderIE = i18n.viewer.errors.noBuilderIE.replace("%VERSION%", 10).replace("%UPGRADE%", i18n.viewer.errors.upgradeBrowser), p.initError("noBuilderIE"), !1;
                if (w("ie") && w("ie") <= 8) return i18n.viewer.errors.noViewerIE = i18n.viewer.errors.noViewerIE.replace("%VERSION%", 9).replace("%UPGRADE%", i18n.viewer.errors.upgradeBrowser), p.initError("noViewerIE"), !1;
                app.data = new n, S = document.createElement("canvas"), g = S.getContext("2d"), y = new Image, y.src = app.cfg.ICON_SRC, y.onload = function() {
                    g.drawImage(y, 0, 0), g.font = S.width / 2 + "pt Calibri"
                }, v.themeSelected = !1, app.ui.mainView = this, app.ui.tilePanel = new o($("#contentPanel"), v, r, app.isInBuilder), setTimeout(function() {
                    app.ui.detailPanel = new u($("#paneLeft"), app.isInBuilder, r, v, r), app.ui.detailPanel.init()
                }, 100), app.ui.navBar = new a($("#nav-bar"), app.isInBuilder, v.activateLayer, s), app.ui.tilePanel.init(), app.ui.mobileIntro = new l($("body"), app.isInBuilder, function() {}, v), app.ui.mobileFeatureList = new c($("#contentPanel"), app.isInBuilder, function() {}, v), app.ui.mobileIntro.init(), app.ui.mobileFeatureList.init();
                var t = {},
                    i = esri.urlToObject(document.location.href).query;
                return i && $.each(i, function(e, n) {
                    t[e.toLowerCase()] = n
                }), $("body").on("mousedown", "*", function(e) {
                    ($(this).is(":focus") || $(this).is(e.target)) && $(this).css("outline-style") == "none" && $(this).css("outline", "none").on("blur", function() {
                        $(this).off("blur").css("outline", "")
                    })
                }), !0
            }, this.webAppConfigLoaded = function() {
                app.isGalleryCreation = !app.data.getWebAppData().getOriginalData() || !Object.keys(app.data.getWebAppData().getOriginalData().values).length
            }, this.loadFirstWebmap = function(e) {
                return this.loadWebmap(e, $("#map")[0])
            }, this.loadWebmapFromData = function() {
                T()
            }, this.loadWebmap = function(e, t, n) {
                console.log("tpl.core.MainView - loadWebMap - webmapId:", e);
                var r = new esri.dijit.Popup({
                    highlight: !1
                }, dojo.create("div"));
                return C.createMap(e, t, {
                    mapOptions: {
                        slider: !0,
                        autoResize: !1,
                        showAttribution: !0,
                        infoWindow: r,
                        extent: n,
                        wrapAround180: !1
                    },
                    usePopupManager: !0,
                    bingMapsKey: app.cfg.BING_MAPS_KEY,
                    editable: !1,
                    layerMixins: app.data.getAppProxies()
                })
            }, this.firstWebmapLoaded = function() {
                T()
            }, this.startFromScratch = function() {
                I()
            }, this.getMapConfig = function(e) {
                return {
                    response: e,
                    mapCommand: new h(e.map, W, p.zoomToDeviceLocation, app.data.getWebAppData().getLocateBtn())
                }
            }, this.activateLayer = function(e) {
                var t = [],
                    n = app.map.getLayer(app.data.getShortlistLayerId());
                $.each(n.graphics, function(n, r) {
                    r.attributes.tab_id == e ? app.isInBuilder && r.attributes.locationSet || r.attributes.locationSet && r.attributes.name && r.attributes.name != "Unnamed Place" && r.attributes.pic_url ? (r.show(), t.push(r)) : (app.isInBuilder && t.push(r), r.hide()) : r.hide()
                });
                var i = new esri.layers.GraphicsLayer;
                i.graphics = t;
                var s = app.data.getStory()[e].color;
                i.color = s, app.layerCurrent = i, app.layerCurrent.color = app.data.getStory()[e].color, n.redraw(), app.ui.mobileFeatureList.setColor(), app.mapTips && app.mapTips.clean(!0), v.preSelection(), v.selected = null, v.postSelection();
                if (!$.isEmptyObject(app.cfg.TAB_SPECIFIC_SUPPORT_LAYERS)) {
                    var o = r.getSupportLayers(),
                        u = "tab" + String(e + 1),
                        a = app.cfg.TAB_SPECIFIC_SUPPORT_LAYERS[u];
                    $.each(o, function(e, t) {
                        a && a.indexOf(t.name) > -1 ? t.setVisibility(!0) : t.setVisibility(!1)
                    })
                }
                $(".detailContainer").hide(), app.ui.tilePanel.buildTilePanel(), app.ui.navBar.showEntryIndex(e), b.addCSSRule(".nav-bar .entry.active > .entryLbl, 					.nav-bar .dropdown.active .dropdown-toggle { 						background-color: " + app.data.getStory()[e].color + " !important; 					}", "NavBarActive"), $("#paneLeft").css("border-top-color", app.data.getStory()[e].color), $(".detailHeader").css("border-top-color", app.data.getStory()[e].color);
                var f = e === 0 ? 500 : 100;
                setTimeout(function() {
                    app.isInBuilder || app.ui.detailPanel.buildFeatureViews()
                }, f), app.isInBuilder && app.addFeatureBar.updateLocatedFeatures()
            }, this.unselect = function() {
                v.preSelection(), v.selected = null, v.postSelection();
            }, this.preSelection = function() {
                v.selected && v.selected.symbol && v.selected.symbol.setWidth && (v.selected.symbol.setWidth(app.cfg.lutIconSpecs.tiny.getWidth()), v.selected.symbol.setHeight(app.cfg.lutIconSpecs.tiny.getHeight()), v.selected.symbol.setOffset(app.cfg.lutIconSpecs.tiny.getOffsetX(), app.cfg.lutIconSpecs.tiny.getOffsetY()), v.selected.draw(), app.mapTips && app.mapTips.clean(!0))
            }, this.postSelection = function() {
                if (v.selected == null) app.map.infoWindow.hide();
                else {

                // ORIGINAL CODE
                    if (!v.selected.attributes.locationSet && !app.isInBuilder) return;
                    !app.map.extent.contains(v.selected.geometry) && v.selected.attributes.locationSet && app.map.centerAt(v.selected.geometry), setTimeout(function() {
                        v.buildMapTips()
                    }, 250), app.isInBuilder ? app.detailPanelBuilder.showSlide(v.selected.attributes.shortlist_id) : app.ui.detailPanel.showDetails(v.selected), app.ui.mobileIntro.hide(), app.ui.mobileFeatureList.setColor()

                //CUSTOM  CENTER AT CODE
                  // app.map.centerAndZoom(v.selected.geometry, 19), setTimeout(function() {
                  //     v.buildMapTips()
                  // }, 250), app.isInBuilder ? app.detailPanelBuilder.showSlide(v.selected.attributes.shortlist_id) : app.ui.detailPanel.showDetails(v.selected), app.ui.mobileIntro.hide(), app.ui.mobileFeatureList.setColor()

                }
            }, this.buildMapTips = function(e) {
                setTimeout(function() {
                    if (!v.selected || !v.selected.attributes || v.selected.hidden || !v.selected.attributes.locationSet) {
                        app.mapTips && app.mapTips.clean(!0);
                        return
                    }
                    if (app.mapTips && !app.map.extent.contains(v.selected.geometry) && app.data.getWebAppData().getGeneralOptions().filterByExtent && !app.isInBuilder) {
                        app.mapTips.clean(!0);
                        return
                    }
                    if ($("body").hasClass("mobile-view")) {
                        app.mapTips && app.mapTips.clean(!0), v.selected && M();
                        return
                    }
                    e && app.mapTips.clean(!0), v.selected.attributes.name || (v.selected.attributes.name = "Unnamed Place");
                    var t = e ? e : v.selected.attributes.name;
                    app.mapTips = new f({
                        map: app.map,
                        content: t,
                        selected: v.selected && v.selected.hidden !== !0 ? v.selected : null,
                        pointArray: [v.selected],
                        labelDirection: "auto",
                        backgroundColor: app.cfg.SELECTED_POPUP_BACKGROUND_COLOR,
                        borderColor: app.cfg.SELECTED_POPUP_BORDER_COLOR,
                        pointerColor: app.cfg.SELECTED_POPUP_ARROW_COLOR,
                        textColor: "#ffffff",
                        offsetTop: 44,
                        topLeftNotAuthorizedArea: [40, 180],
                        mapAuthorizedMinWidth: -1,
                        mapAuthorizedWidth: -1,
                        mapAuthorizedHeight: -1,
                        visible: !0
                    }), M()
                }, 100)
            }, this.buildMapHoverTips = function(e, t) {
                if (app.mapTips && ($("body").hasClass("mobile-view") || !t.attributes.locationSet)) {
                    app.mapTips.clean(!0);
                    return
                }
                var n = t == v.selected ? 44 : 33;
                t.attributes.name || (t.attributes.name = "Unnamed Place"), app.mapTips = new f({
                    map: app.map,
                    content: e,
                    selected: v.selected && v.selected.hidden !== !0 ? v.selected : null,
                    pointArray: [t],
                    labelDirection: "auto",
                    backgroundColor: app.cfg.POPUP_BACKGROUND_COLOR,
                    borderColor: app.cfg.POPUP_BORDER_COLOR,
                    pointerColor: app.cfg.POPUP_ARROW_COLOR,
                    textColor: "#ffffff",
                    offsetTop: n,
                    topLeftNotAuthorizedArea: [40, 180],
                    mapAuthorizedMinWidth: -1,
                    mapAuthorizedWidth: -1,
                    mapAuthorizedHeight: -1,
                    visible: !0
                })
            }, this.buildMapSupportHoverTips = function(e, t) {
                if (app.mapTips && $("body").hasClass("mobile-view")) {
                    app.mapTips.clean(!0);
                    return
                }
                app.mapTips = new f({
                    map: app.map,
                    content: e,
                    selected: v.selected && v.selected.hidden !== !0 ? v.selected : null,
                    pointArray: [t],
                    labelDirection: "auto",
                    backgroundColor: app.cfg.POPUP_BACKGROUND_COLOR,
                    borderColor: app.cfg.POPUP_BORDER_COLOR,
                    pointerColor: app.cfg.POPUP_ARROW_COLOR,
                    textColor: "#ffffff",
                    offsetTop: 5,
                    topLeftNotAuthorizedArea: [40, 180],
                    mapAuthorizedMinWidth: -1,
                    mapAuthorizedWidth: -1,
                    mapAuthorizedHeight: -1,
                    visible: !0
                })
            }, this.moveGraphicToFront = function(e) {
                var t = e.getDojoShape();
                t && t.moveToFront()
            }, this.buildLayer = function(e, t) {
                var n = app.cfg.lutIconSpecs.tiny,
                    i;
                $.each(e, function(e, s) {
                    var o = document.createElement("canvas");
                    o.width = y.width, o.height = y.height;
                    var u = o.getContext("2d");
                    u.font = "bold " + o.width / 2.9 + "pt Calibri", u.drawImage(S, 0, 0);
                    var a = t;
                    if (!i) {
                        var f = u.getImageData(0, 0, S.width, S.height),
                            l = _(f, 4804);
                        if (l[0] != D(a).r && l[1] != D(a).g && l[1] != D(a).b) {
                            for (var c = 0; c < f.data.length; c += 4) f.data[c] == l[0] && f.data[c + 1] == l[1] && f.data[c + 2] == l[2] && (f.data[c] = D(a).r, f.data[c + 1] = D(a).g, f.data[c + 2] = D(a).b);
                            u.putImageData(f, 0, 0)
                        }
                        i = f
                    }
                    e > 0 && u.putImageData(i, 0, 0);
                    if (r.getGeneralOptions().numberedIcons) {
                        var h = s.attributes.number;
                        u.textAlign = "center", u.fillStyle = "white", u.fillText(h, o.width / 3.2, o.height / 2)
                    }
                    s.setSymbol(P(e, o, n))
                })
            }, this.layer_onClick = function(e) {
                if ($("body").hasClass("pickLocation")) return;
                m = !0, v.preSelection(), v.selected = null, v.selected = e.graphic, v.postSelection(), $("#mobileTitlePage").css("display", "none");
                var t = $(".esriPopup");
                $(t).hide(), setTimeout(function() {
                    m = !1
                }, 500), v.themeSelected || app.ui.mobileFeatureList.selectTheme(0), v.themeSelected = !0
            }, this.layer_onMouseOver = function(e) {
                if (m || $("body").hasClass("pickLocation")) return;
                if (d.isMobile()) return;
                app.map.setMapCursor("pointer");
                var t = e.graphic,
                    n = app.map.toScreen(t.geometry);
                if (t == v.selected && v.selected.hidden !== !0 && $("#header").css("display") == "block") return;
                if (t != v.selected || v.selected.hidden !== !0) t.symbol.setWidth(app.cfg.lutIconSpecs.medium.getWidth()), t.symbol.setHeight(app.cfg.lutIconSpecs.medium.getHeight()), t.symbol.setOffset(app.cfg.lutIconSpecs.medium.getOffsetX(), app.cfg.lutIconSpecs.medium.getOffsetY()), t.draw(), d.isIE() || v.moveGraphicToFront(t);
                v.buildMapHoverTips(t.attributes.name, t)
            }, this.layer_onMouseOut = function(e) {
                if ($("body").hasClass("pickLocation")) return;
                if (d.isMobile()) return;
                app.map.setMapCursor("default");
                var t = e.graphic;
                t != v.selected && (t.symbol.setWidth(app.cfg.lutIconSpecs.tiny.getWidth()), t.symbol.setHeight(app.cfg.lutIconSpecs.tiny.getHeight()), t.symbol.setOffset(app.cfg.lutIconSpecs.tiny.getOffsetX(), app.cfg.lutIconSpecs.tiny.getOffsetY()), t.draw()), app.mapTips && app.mapTips.clean()
            }, this.updateUI = function() {}, this.resize = function(e) {
                app.isInBuilder && (app.initScreenIsOpen = !0);
                if (!e.isMobileView) {
                    app.isInBuilder && $("#mobileBuilderOverlay").css("display") == "block" && app.addFeatureBar.loaded && $("#mobileBuilderOverlay").attr("style", "display: none !important"), app.ui.mobileIntro.screenSize = "desktop", $("#navThemeLeft").css("visibility", "hidden"), $("#navThemeRight").css("visibility", "hidden"), $("#mobileBookmarksCon").hide();
                    var t = $("body").height(),
                        n = 0;
                    $(".mainViewAboveMap, .mainViewBelowMap").each(function(e, t) {
                        var r = $(t);
                        n += r.is(":visible") ? r.outerHeight() : 0
                    }), $("#contentPanel").height(t - n), $("#paneLeft").height($("#contentPanel").height() - $("#tabs").height());
                    var r = app.data.getWebAppData().getHeader().compactSize ? "60px" : "200px";
                    //below with 20, this is where we set the padding height for the paneLeft column
                    $("#header").height(r), $(".tilelist").height($("#paneLeft").height() - (app.isInBuilder ? 70 : 48)), $(".tilelist").css("top", app.isInBuilder ? 60 : 20), $("#paneLeft .noFeature").width($("#paneLeft").width()), $("#paneLeft").width() == app.cfg.LEFT_PANE_WIDTH_TWO_COLUMN ? $("#paneLeft .noFeatureText").css("margin-left", "50px") : $("#paneLeft .noFeatureText").css("margin-left", "150px"), $("#map").height(e.height), $("#map").css("top", 0), app.ui.navBar.resize(), e.width <= app.cfg.TWO_COLUMN_THRESHOLD || e.width <= 1024 && e.height <= 768 ? (setTimeout(function() {
                        $("#mainStagePanel").width(e.width - (app.cfg.LEFT_PANE_WIDTH_TWO_COLUMN + 16)), $("#mainStagePanel").css("left", app.cfg.LEFT_PANE_WIDTH_TWO_COLUMN + 16), app.map && app.map.resize(), v.selected && !app.map.extent.contains(v.selected.geometry) && app.mapTips.clean(!0)
                    }, 0), app.ui.tilePanel.resize(app.cfg.LEFT_PANE_WIDTH_TWO_COLUMN), app.isInBuilder ? app.detailPanelBuilder.resize() : app.ui.detailPanel.resize()) : e.width <= app.cfg.THREE_COLUMN_THRESHOLD && e.width >= app.cfg.TWO_COLUMN_THRESHOLD ? (setTimeout(function() {
                        $("#mainStagePanel").width(e.width - (app.cfg.LEFT_PANE_WIDTH_THREE_COLUMN + 16)), $("#mainStagePanel").css("left", app.cfg.LEFT_PANE_WIDTH_THREE_COLUMN + 16), app.map && app.map.resize()
                    }, 0), app.ui.tilePanel.resize(app.cfg.LEFT_PANE_WIDTH_THREE_COLUMN), app.isInBuilder ? app.detailPanelBuilder.resize() : app.ui.detailPanel.resize()) : (setTimeout(function() {
                        $("#mainStagePanel").width(e.width - (app.cfg.LEFT_PANE_WIDTH_FOUR_COLUMN + 16)), $("#mainStagePanel").css("left", app.cfg.LEFT_PANE_WIDTH_FOUR_COLUMN + 16), app.map && app.map.resize()
                    }, 0), app.ui.tilePanel.resize(app.cfg.LEFT_PANE_WIDTH_FOUR_COLUMN), app.isInBuilder ? app.detailPanelBuilder.resize() : app.ui.detailPanel.resize())
                } else app.isInBuilder && $("#mobileBuilderOverlay").attr("style", "display: block !important"), app.ui.mobileIntro.resizeMobileElements(), app.cfg.BOOKMARKS && $("#mobileBookmarksCon").show(), $("#header").height("0"), app.mapTips && app.mapTips.hide(), (x < 2 || $("#mobileIntro").css("display") == "block") && W();
                x++
            }, this.setMapExtent = function(e, t) {
                return p.setMapExtent(e, t)
            }, this.getLayoutExtent = function(e) {
                return e
            }, this.checkConfigFileIsOK = function() {
                return t.checkConfigFileIsOK()
            }, this.appInitComplete = function() {
                this.updateUI(), p.cleanLoadingTimeout(), $(window).resize();
                var e = app.data.getWebAppData().isBlank() || app.data.getWebAppItem().access == "private";
                app.ui.headerDesktop && app.ui.headerDesktop.toggleSocialBtnAppSharing(e), E.publish("tpl-ready")
            }, this.onHashChange = function() {}, this.prepareMobileViewSwitch = function() {}, this.initLocalization = function() {}
        }
    }), require(["storymaps/common/Core", "storymaps/common/ui/header/Desktop", "storymaps/tpl/core/MainView"], function() {}), define("storymaps/tpl/BuildConfigViewer", function() {});
