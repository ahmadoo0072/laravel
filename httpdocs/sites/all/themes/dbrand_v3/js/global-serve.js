! function(e, t) {
    function n(e) {
        var t = e.length,
            n = de.type(e);
        return de.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = ke[e] = {};
        return de.each(e.match(pe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (de.acceptData(e)) {
            var o, s, a = de.expando,
                l = e.nodeType,
                u = l ? de.cache : e,
                c = l ? e[a] : e[a] && a;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[a] = ne.pop() || de.guid++ : a), u[c] || (u[c] = l ? {} : {
                toJSON: de.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = de.extend(u[c], n) : u[c].data = de.extend(u[c].data, n)), s = u[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[de.camelCase(n)] = r), "string" == typeof n ? (o = s[n], null == o && (o = s[de.camelCase(n)])) : o = s, o
        }
    }

    function o(e, t, n) {
        if (de.acceptData(e)) {
            var r, i, o = e.nodeType,
                s = o ? de.cache : e,
                l = o ? e[de.expando] : de.expando;
            if (s[l]) {
                if (t && (r = n ? s[l] : s[l].data)) {
                    de.isArray(t) ? t = t.concat(de.map(t, de.camelCase)) : t in r ? t = [t] : (t = de.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !a(r) : !de.isEmptyObject(r)) return
                }(n || (delete s[l].data, a(s[l]))) && (o ? de.cleanData([e], !0) : de.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }

    function s(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Ne, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : De.test(r) ? de.parseJSON(r) : r
                } catch (o) {}
                de.data(e, n, r)
            } else r = t
        }
        return r
    }

    function a(e) {
        var t;
        for (t in e)
            if (("data" !== t || !de.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function d(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (de.isFunction(t)) return de.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return de.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (qe.test(t)) return de.filter(t, e, n);
            t = de.filter(t, e)
        }
        return de.grep(e, function(e) {
            return de.inArray(e, t) >= 0 !== n
        })
    }

    function p(e) {
        var t = Ue.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        return de.nodeName(e, "table") && de.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function m(e) {
        return e.type = (null !== de.find.attr(e, "type")) + "/" + e.type, e
    }

    function g(e) {
        var t = ot.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function v(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) de._data(n, "globalEval", !t || de._data(t[r], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && de.hasData(e)) {
            var n, r, i, o = de._data(e),
                s = de._data(t, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (r = 0, i = a[n].length; i > r; r++) de.event.add(t, n, a[n][r])
            }
            s.data && (s.data = de.extend({}, s.data))
        }
    }

    function b(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !de.support.noCloneEvent && t[de.expando]) {
                i = de._data(t);
                for (r in i.events) de.removeEvent(t, r, i.handle);
                t.removeAttribute(de.expando)
            }
            "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), de.support.html5Clone && e.innerHTML && !de.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function _(e, n) {
        var r, i, o = 0,
            s = typeof e.getElementsByTagName !== J ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== J ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || de.nodeName(i, n) ? s.push(i) : de.merge(s, _(i, n));
        return n === t || n && de.nodeName(e, n) ? de.merge([e], s) : s
    }

    function x(e) {
        nt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ct.length; i--;)
            if (t = Ct[i] + n, t in e) return t;
        return r
    }

    function S(e, t) {
        return e = t || e, "none" === de.css(e, "display") || !de.contains(e.ownerDocument, e)
    }

    function T(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = de._data(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && S(r) && (o[s] = de._data(r, "olddisplay", N(r.nodeName)))) : o[s] || (i = S(r), (n && "none" !== n || !i) && de._data(r, "olddisplay", i ? n : de.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function C(e, t, n) {
        var r = yt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += de.css(e, n + Tt[o], !0, i)), r ? ("content" === n && (s -= de.css(e, "padding" + Tt[o], !0, i)), "margin" !== n && (s -= de.css(e, "border" + Tt[o] + "Width", !0, i))) : (s += de.css(e, "padding" + Tt[o], !0, i), "padding" !== n && (s += de.css(e, "border" + Tt[o] + "Width", !0, i)));
        return s
    }

    function D(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = dt(e),
            s = de.support.boxSizing && "border-box" === de.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = ft(e, t, o), (0 > i || null == i) && (i = e.style[t]), bt.test(i)) return i;
            r = s && (de.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function N(e) {
        var t = G,
            n = xt[e];
        return n || (n = E(e, t), "none" !== n && n || (ct = (ct || de("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = E(e, t), ct.detach()), xt[e] = n), n
    }

    function E(e, t) {
        var n = de(t.createElement(e)).appendTo(t.body),
            r = de.css(n[0], "display");
        return n.remove(), r
    }

    function A(e, t, n, r) {
        var i;
        if (de.isArray(t)) de.each(t, function(t, i) {
            n || Dt.test(e) ? r(e, i) : A(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== de.type(t)) r(e, t);
        else
            for (i in t) A(e + "[" + i + "]", t[i], n, r)
    }

    function P(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(pe) || [];
            if (de.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function j(e, t, n, r) {
        function i(a) {
            var l;
            return o[a] = !0, de.each(e[a] || [], function(e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            s = e === Wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function I(e, n) {
        var r, i, o = de.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && de.extend(!0, e, r), e
    }

    function M(e, n, r) {
        for (var i, o, s, a, l = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (a in l)
                if (l[a] && l[a].test(o)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in r) s = u[0];
        else {
            for (a in r) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    s = a;
                    break
                }
                i || (i = a)
            }
            s = s || i
        }
        return s ? (s !== u[0] && u.unshift(s), r[s]) : void 0
    }

    function H(e, t, n, r) {
        var i, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (i in u)
                    if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (d) {
                    return {
                        state: "parsererror",
                        error: s ? d : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function O() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function L() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function B() {
        return setTimeout(function() {
            Zt = t
        }), Zt = de.now()
    }

    function z(e, t, n) {
        for (var r, i = (sn[t] || []).concat(sn["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function F(e, t, n) {
        var r, i, o = 0,
            s = on.length,
            a = de.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) return !1;
                for (var t = Zt || B(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: de.extend({}, t),
                opts: de.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zt || B(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = de.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (R(c, u.opts.specialEasing); s > o; o++)
            if (r = on[o].call(u, e, c, u.opts)) return r;
        return de.map(c, z, u), de.isFunction(u.opts.start) && u.opts.start.call(e, u), de.fx.timer(de.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function R(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = de.camelCase(n), i = t[r], o = e[n], de.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = de.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function q(e, t, n) {
        var r, i, o, s, a, l, u = this,
            c = {},
            d = e.style,
            f = e.nodeType && S(e),
            p = de._data(e, "fxshow");
        n.queue || (a = de._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, de.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === de.css(e, "display") && "none" === de.css(e, "float") && (de.support.inlineBlockNeedsLayout && "inline" !== N(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", de.support.shrinkWrapBlocks || u.always(function() {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;
                c[r] = p && p[r] || de.style(e, r)
            }
        if (!de.isEmptyObject(c)) {
            p ? "hidden" in p && (f = p.hidden) : p = de._data(e, "fxshow", {}), o && (p.hidden = !f), f ? de(e).show() : u.done(function() {
                de(e).hide()
            }), u.done(function() {
                var t;
                de._removeData(e, "fxshow");
                for (t in c) de.style(e, t, c[t])
            });
            for (r in c) s = z(f ? p[r] : 0, r, u), r in p || (p[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function W(e, t, n, r, i) {
        return new W.prototype.init(e, t, n, r, i)
    }

    function Q(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Tt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function X(e) {
        return de.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var U, V, J = typeof t,
        Y = e.location,
        G = e.document,
        K = G.documentElement,
        Z = e.jQuery,
        ee = e.$,
        te = {},
        ne = [],
        re = "1.10.2",
        ie = ne.concat,
        oe = ne.push,
        se = ne.slice,
        ae = ne.indexOf,
        le = te.toString,
        ue = te.hasOwnProperty,
        ce = re.trim,
        de = function(e, t) {
            return new de.fn.init(e, t, V)
        },
        fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        pe = /\S+/g,
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ge = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ve = /^[\],:{}\s]*$/,
        ye = /(?:^|:|,)(?:\s*\[)+/g,
        be = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        _e = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        xe = /^-ms-/,
        we = /-([\da-z])/gi,
        Se = function(e, t) {
            return t.toUpperCase()
        },
        Te = function(e) {
            (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Ce(), de.ready())
        },
        Ce = function() {
            G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Te, !1), e.removeEventListener("load", Te, !1)) : (G.detachEvent("onreadystatechange", Te), e.detachEvent("onload", Te))
        };
    de.fn = de.prototype = {
            jquery: re,
            constructor: de,
            init: function(e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof de ? n[0] : n, de.merge(this, de.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), ge.test(i[1]) && de.isPlainObject(n))
                            for (i in n) de.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (o = G.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = G, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : de.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), de.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function() {
                return se.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e) {
                var t = de.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return de.each(this, e, t)
            },
            ready: function(e) {
                return de.ready.promise().done(e), this
            },
            slice: function() {
                return this.pushStack(se.apply(this, arguments))
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
            map: function(e) {
                return this.pushStack(de.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: oe,
            sort: [].sort,
            splice: [].splice
        }, de.fn.init.prototype = de.fn, de.extend = de.fn.extend = function() {
            var e, n, r, i, o, s, a = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || de.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                if (null != (o = arguments[l]))
                    for (i in o) e = a[i], r = o[i], a !== r && (c && r && (de.isPlainObject(r) || (n = de.isArray(r))) ? (n ? (n = !1, s = e && de.isArray(e) ? e : []) : s = e && de.isPlainObject(e) ? e : {}, a[i] = de.extend(c, s, r)) : r !== t && (a[i] = r));
            return a
        }, de.extend({
            expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""),
            noConflict: function(t) {
                return e.$ === de && (e.$ = ee), t && e.jQuery === de && (e.jQuery = Z), de
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? de.readyWait++ : de.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--de.readyWait : !de.isReady) {
                    if (!G.body) return setTimeout(de.ready);
                    de.isReady = !0, e !== !0 && --de.readyWait > 0 || (U.resolveWith(G, [de]), de.fn.trigger && de(G).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === de.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === de.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? te[le.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                var n;
                if (!e || "object" !== de.type(e) || e.nodeType || de.isWindow(e)) return !1;
                try {
                    if (e.constructor && !ue.call(e, "constructor") && !ue.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (r) {
                    return !1
                }
                if (de.support.ownLast)
                    for (n in e) return ue.call(e, n);
                for (n in e);
                return n === t || ue.call(e, n)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || G;
                var r = ge.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = de.buildFragment([e], t, i), i && de(i).remove(), de.merge([], r.childNodes))
            },
            parseJSON: function(t) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = de.trim(t), t && ve.test(t.replace(be, "@").replace(_e, "]").replace(ye, ""))) ? new Function("return " + t)() : void de.error("Invalid JSON: " + t)
            },
            parseXML: function(n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (o) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || de.error("Invalid XML: " + n), r
            },
            noop: function() {},
            globalEval: function(t) {
                t && de.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(xe, "ms-").replace(we, Se)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, r) {
                var i, o = 0,
                    s = e.length,
                    a = n(e);
                if (r) {
                    if (a)
                        for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.apply(e[o], r), i === !1) break
                } else if (a)
                    for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]), i === !1) break; return e
            },
            trim: ce && !ce.call("\ufeff ") ? function(e) {
                return null == e ? "" : ce.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(he, "")
            },
            makeArray: function(e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? de.merge(r, "string" == typeof e ? [e] : e) : oe.call(r, e)), r
            },
            inArray: function(e, t, n) {
                var r;
                if (t) {
                    if (ae) return ae.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function(e, t, n) {
                var r, i = [],
                    o = 0,
                    s = e.length;
                for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function(e, t, r) {
                var i, o = 0,
                    s = e.length,
                    a = n(e),
                    l = [];
                if (a)
                    for (; s > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i);
                else
                    for (o in e) i = t(e[o], o, r), null != i && (l[l.length] = i);
                return ie.apply([], l)
            },
            guid: 1,
            proxy: function(e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n], n = e, e = o), de.isFunction(e) ? (r = se.call(arguments, 2), i = function() {
                    return e.apply(n || this, r.concat(se.call(arguments)))
                }, i.guid = e.guid = e.guid || de.guid++, i) : t
            },
            access: function(e, n, r, i, o, s, a) {
                var l = 0,
                    u = e.length,
                    c = null == r;
                if ("object" === de.type(r)) {
                    o = !0;
                    for (l in r) de.access(e, n, l, r[l], !0, s, a)
                } else if (i !== t && (o = !0, de.isFunction(i) || (a = !0), c && (a ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                        return c.call(de(e), n)
                    })), n))
                    for (; u > l; l++) n(e[l], r, a ? i : i.call(e[l], l, n(e[l], r)));
                return o ? e : c ? n.call(e) : u ? n(e[0], r) : s
            },
            now: function() {
                return (new Date).getTime()
            },
            swap: function(e, t, n, r) {
                var i, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = s[o];
                return i
            }
        }), de.ready.promise = function(t) {
            if (!U)
                if (U = de.Deferred(), "complete" === G.readyState) setTimeout(de.ready);
                else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Te, !1), e.addEventListener("load", Te, !1);
            else {
                G.attachEvent("onreadystatechange", Te), e.attachEvent("onload", Te);
                var n = !1;
                try {
                    n = null == e.frameElement && G.documentElement
                } catch (r) {}
                n && n.doScroll && ! function i() {
                    if (!de.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        Ce(), de.ready()
                    }
                }()
            }
            return U.promise(t)
        }, de.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            te["[object " + t + "]"] = t.toLowerCase()
        }), V = de(G),
        function(e, t) {
            function n(e, t, n, r) {
                var i, o, s, a, l, u, c, d, h, m;
                if ((t ? t.ownerDocument || t : F) !== j && P(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (M && !r) {
                    if (i = _e.exec(e))
                        if (s = i[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && B(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (i[2]) return te.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = i[3]) && S.getElementsByClassName && t.getElementsByClassName) return te.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (S.qsa && (!H || !H.test(e))) {
                        if (d = c = z, h = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (u = f(e), (c = t.getAttribute("id")) ? d = c.replace(Se, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + p(u[l]);
                            h = he.test(e) && t.parentNode || t, m = u.join(",")
                        }
                        if (m) try {
                            return te.apply(n, h.querySelectorAll(m)), n
                        } catch (g) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return x(e.replace(ce, "$1"), t, n, r)
            }

            function r() {
                function e(n, r) {
                    return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[z] = !0, e
            }

            function o(e) {
                var t = j.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function s(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) C.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function l(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function(t) {
                    return t = +t, i(function(n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function d() {}

            function f(e, t) {
                var r, i, o, s, a, l, u, c = Q[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, l = [], u = C.preFilter; a;) {
                    (!r || (i = fe.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = pe.exec(a)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ce, " ")
                    }), a = a.slice(r.length));
                    for (s in C.filter) !(i = ye[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                    if (!r) break
                }
                return t ? a.length : a ? n.error(e) : Q(e, l).slice(0)
            }

            function p(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function h(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = q++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function(t, n, s) {
                    var a, l, u, c = R + " " + o;
                    if (s) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (u = t[z] || (t[z] = {}), (l = u[r]) && l[0] === c) {
                                    if ((a = l[1]) === !0 || a === T) return a === !0
                                } else if (l = u[r] = [c], l[1] = e(t, n, s) || T, l[1] === !0) return !0
                }
            }

            function m(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function g(e, t, n, r, i) {
                for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), u && t.push(a));
                return s
            }

            function v(e, t, n, r, o, s) {
                return r && !r[z] && (r = v(r)), o && !o[z] && (o = v(o, s)), i(function(i, s, a, l) {
                    var u, c, d, f = [],
                        p = [],
                        h = s.length,
                        m = i || _(t || "*", a.nodeType ? [a] : a, []),
                        v = !e || !i && t ? m : g(m, f, e, a, l),
                        y = n ? o || (i ? e : h || r) ? [] : s : v;
                    if (n && n(v, y, a, l), r)
                        for (u = g(y, p), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (y[p[c]] = !(v[p[c]] = d));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = y.length; c--;)(d = y[c]) && u.push(v[c] = d);
                                o(null, y = [], u, l)
                            }
                            for (c = y.length; c--;)(d = y[c]) && (u = o ? re.call(i, d) : f[c]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else y = g(y === s ? y.splice(h, y.length) : y), o ? o(null, s, y, l) : te.apply(s, y)
                })
            }

            function y(e) {
                for (var t, n, r, i = e.length, o = C.relative[e[0].type], s = o || C.relative[" "], a = o ? 1 : 0, l = h(function(e) {
                        return e === t
                    }, s, !0), u = h(function(e) {
                        return re.call(t, e) > -1
                    }, s, !0), c = [function(e, n, r) {
                        return !o && (r || n !== E) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                    }]; i > a; a++)
                    if (n = C.relative[e[a].type]) c = [h(m(c), n)];
                    else {
                        if (n = C.filter[e[a].type].apply(null, e[a].matches), n[z]) {
                            for (r = ++a; i > r && !C.relative[e[r].type]; r++);
                            return v(a > 1 && m(c), a > 1 && p(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ce, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                        }
                        c.push(n)
                    }
                return m(c)
            }

            function b(e, t) {
                var r = 0,
                    o = t.length > 0,
                    s = e.length > 0,
                    a = function(i, a, l, u, c) {
                        var d, f, p, h = [],
                            m = 0,
                            v = "0",
                            y = i && [],
                            b = null != c,
                            _ = E,
                            x = i || s && C.find.TAG("*", c && a.parentNode || a),
                            w = R += null == _ ? 1 : Math.random() || .1;
                        for (b && (E = a !== j && a, T = r); null != (d = x[v]); v++) {
                            if (s && d) {
                                for (f = 0; p = e[f++];)
                                    if (p(d, a, l)) {
                                        u.push(d);
                                        break
                                    }
                                b && (R = w, T = ++r)
                            }
                            o && ((d = !p && d) && m--, i && y.push(d))
                        }
                        if (m += v, o && v !== m) {
                            for (f = 0; p = t[f++];) p(y, h, a, l);
                            if (i) {
                                if (m > 0)
                                    for (; v--;) y[v] || h[v] || (h[v] = Z.call(u));
                                h = g(h)
                            }
                            te.apply(u, h), b && !i && h.length > 0 && m + t.length > 1 && n.uniqueSort(u)
                        }
                        return b && (R = w, E = _), y
                    };
                return o ? i(a) : a
            }

            function _(e, t, r) {
                for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
                return r
            }

            function x(e, t, n, r) {
                var i, o, s, a, l, u = f(e);
                if (!r && 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && S.getById && 9 === t.nodeType && M && C.relative[o[1].type]) {
                        if (t = (C.find.ID(s.matches[0].replace(Te, Ce), t) || [])[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = ye.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !C.relative[a = s.type]);)
                        if ((l = C.find[a]) && (r = l(s.matches[0].replace(Te, Ce), he.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(i, 1), e = r.length && p(o), !e) return te.apply(n, r), n;
                            break
                        }
                }
                return N(e, u)(r, t, !M, n, he.test(e)), n
            }
            var w, S, T, C, k, D, N, E, A, P, j, I, M, H, O, L, B, z = "sizzle" + -new Date,
                F = e.document,
                R = 0,
                q = 0,
                W = r(),
                Q = r(),
                X = r(),
                U = !1,
                V = function(e, t) {
                    return e === t ? (U = !0, 0) : 0
                },
                J = typeof t,
                Y = 1 << 31,
                G = {}.hasOwnProperty,
                K = [],
                Z = K.pop,
                ee = K.push,
                te = K.push,
                ne = K.slice,
                re = K.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                oe = "[\\x20\\t\\r\\n\\f]",
                se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ae = se.replace("w", "w#"),
                le = "\\[" + oe + "*(" + se + ")" + oe + "*(?:([*^$|!~]?=)" + oe + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ae + ")|)|)" + oe + "*\\]",
                ue = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + le.replace(3, 8) + ")*)|.*)\\)|)",
                ce = new RegExp("^" + oe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + oe + "+$", "g"),
                fe = new RegExp("^" + oe + "*," + oe + "*"),
                pe = new RegExp("^" + oe + "*([>+~]|" + oe + ")" + oe + "*"),
                he = new RegExp(oe + "*[+~]"),
                me = new RegExp("=" + oe + "*([^\\]'\"]*)" + oe + "*\\]", "g"),
                ge = new RegExp(ue),
                ve = new RegExp("^" + ae + "$"),
                ye = {
                    ID: new RegExp("^#(" + se + ")"),
                    CLASS: new RegExp("^\\.(" + se + ")"),
                    TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + le),
                    PSEUDO: new RegExp("^" + ue),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + oe + "*(even|odd|(([+-]|)(\\d*)n|)" + oe + "*(?:([+-]|)" + oe + "*(\\d+)|))" + oe + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ie + ")$", "i"),
                    needsContext: new RegExp("^" + oe + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + oe + "*((?:-\\d)?\\d*)" + oe + "*\\)|)(?=[^-]|$)", "i")
                },
                be = /^[^{]+\{\s*\[native \w/,
                _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                xe = /^(?:input|select|textarea|button)$/i,
                we = /^h\d$/i,
                Se = /'|\\/g,
                Te = new RegExp("\\\\([\\da-f]{1,6}" + oe + "?|(" + oe + ")|.)", "ig"),
                Ce = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                };
            try {
                te.apply(K = ne.call(F.childNodes), F.childNodes), K[F.childNodes.length].nodeType
            } catch (ke) {
                te = {
                    apply: K.length ? function(e, t) {
                        ee.apply(e, ne.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            D = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, S = n.support = {}, P = n.setDocument = function(e) {
                var t = e ? e.ownerDocument || e : F,
                    n = t.defaultView;
                return t !== j && 9 === t.nodeType && t.documentElement ? (j = t, I = t.documentElement, M = !D(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function() {
                    P()
                }), S.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), S.getElementsByTagName = o(function(e) {
                    return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                }), S.getElementsByClassName = o(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), S.getById = o(function(e) {
                    return I.appendChild(e).id = z, !t.getElementsByName || !t.getElementsByName(z).length
                }), S.getById ? (C.find.ID = function(e, t) {
                    if (typeof t.getElementById !== J && M) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function(e) {
                    var t = e.replace(Te, Ce);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete C.find.ID, C.filter.ID = function(e) {
                    var t = e.replace(Te, Ce);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = S.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== J ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, C.find.CLASS = S.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== J && M ? t.getElementsByClassName(e) : void 0
                }, O = [], H = [], (S.qsa = be.test(t.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || H.push("\\[" + oe + "*(?:value|" + ie + ")"), e.querySelectorAll(":checked").length || H.push(":checked")
                }), o(function(e) {
                    var n = t.createElement("input");
                    n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && H.push("[*^$]=" + oe + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), H.push(",.*:")
                })), (S.matchesSelector = be.test(L = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(e) {
                    S.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), O.push("!=", ue)
                }), H = H.length && new RegExp(H.join("|")), O = O.length && new RegExp(O.join("|")), B = be.test(I.contains) || I.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, V = I.compareDocumentPosition ? function(e, n) {
                    if (e === n) return U = !0, 0;
                    var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                    return r ? 1 & r || !S.sortDetached && n.compareDocumentPosition(e) === r ? e === t || B(F, e) ? -1 : n === t || B(F, n) ? 1 : A ? re.call(A, e) - re.call(A, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, n) {
                    var r, i = 0,
                        o = e.parentNode,
                        s = n.parentNode,
                        l = [e],
                        u = [n];
                    if (e === n) return U = !0, 0;
                    if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : A ? re.call(A, e) - re.call(A, n) : 0;
                    if (o === s) return a(e, n);
                    for (r = e; r = r.parentNode;) l.unshift(r);
                    for (r = n; r = r.parentNode;) u.unshift(r);
                    for (; l[i] === u[i];) i++;
                    return i ? a(l[i], u[i]) : l[i] === F ? -1 : u[i] === F ? 1 : 0
                }, t) : j
            }, n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== j && P(e), t = t.replace(me, "='$1']"), S.matchesSelector && M && (!O || !O.test(t)) && (!H || !H.test(t))) try {
                    var r = L.call(e, t);
                    if (r || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return n(t, j, null, [e]).length > 0
            }, n.contains = function(e, t) {
                return (e.ownerDocument || e) !== j && P(e), B(e, t)
            }, n.attr = function(e, n) {
                (e.ownerDocument || e) !== j && P(e);
                var r = C.attrHandle[n.toLowerCase()],
                    i = r && G.call(C.attrHandle, n.toLowerCase()) ? r(e, n, !M) : t;
                return i === t ? S.attributes || !M ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
            }, n.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, n.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (U = !S.detectDuplicates, A = !S.sortStable && e.slice(0), e.sort(V), U) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            }, k = n.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += k(t);
                return n
            }, C = n.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ye,
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
                        return e[1] = e[1].replace(Te, Ce), e[3] = (e[4] || e[5] || "").replace(Te, Ce), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return ye.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && ge.test(r) && (n = f(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(Te, Ce).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + oe + ")" + e + "(" + oe + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, r) {
                        return function(i) {
                            var o = n.attr(i, e);
                            return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, d, f, p, h, m = o !== s ? "nextSibling" : "previousSibling",
                                g = t.parentNode,
                                v = a && t.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = m = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && y) {
                                    for (c = g[z] || (g[z] = {}), u = c[e] || [], p = u[0] === R && u[1], f = u[0] === R && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++f && d === t) {
                                            c[e] = [R, p, f];
                                            break
                                        }
                                } else if (y && (u = (t[z] || (t[z] = {}))[e]) && u[0] === R) f = u[1];
                                else
                                    for (;
                                        (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[z] || (d[z] = {}))[e] = [R, f]), d !== t)););
                                return f -= i, f === r || f % r === 0 && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return o[z] ? o(t) : o.length > 1 ? (r = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, n) {
                            for (var r, i = o(e, t), s = i.length; s--;) r = re.call(e, i[s]), e[r] = !(n[r] = i[s])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            r = N(e.replace(ce, "$1"));
                        return r[z] ? i(function(e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return ve.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Te, Ce).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = M ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === I
                    },
                    focus: function(e) {
                        return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !C.pseudos.empty(e)
                    },
                    header: function(e) {
                        return we.test(e.nodeName)
                    },
                    input: function(e) {
                        return xe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[w] = l(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[w] = u(w);
            d.prototype = C.filters = C.pseudos, C.setFilters = new d, N = n.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = X[e + " "];
                if (!o) {
                    for (t || (t = f(e)), n = t.length; n--;) o = y(t[n]), o[z] ? r.push(o) : i.push(o);
                    o = X(e, b(i, r))
                }
                return o
            }, S.sortStable = z.split("").sort(V).join("") === z, S.detectDuplicates = U, P(), S.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(j.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), S.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || s("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || s(ie, function(e, t, n) {
                var r;
                return n ? void 0 : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
            }), de.find = n, de.expr = n.selectors, de.expr[":"] = de.expr.pseudos, de.unique = n.uniqueSort, de.text = n.getText, de.isXMLDoc = n.isXML, de.contains = n.contains
        }(e);
    var ke = {};
    de.Callbacks = function(e) {
        e = "string" == typeof e ? ke[e] || r(e) : de.extend({}, e);
        var n, i, o, s, a, l, u = [],
            c = !e.once && [],
            d = function(t) {
                for (i = e.memory && t, o = !0, a = l || 0, l = 0, s = u.length, n = !0; u && s > a; a++)
                    if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                n = !1, u && (c ? c.length && d(c.shift()) : i ? u = [] : f.disable())
            },
            f = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        ! function r(t) {
                            de.each(t, function(t, n) {
                                var i = de.type(n);
                                "function" === i ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), n ? s = u.length : i && (l = t, d(i))
                    }
                    return this
                },
                remove: function() {
                    return u && de.each(arguments, function(e, t) {
                        for (var r;
                            (r = de.inArray(t, u, r)) > -1;) u.splice(r, 1), n && (s >= r && s--, a >= r && a--)
                    }), this
                },
                has: function(e) {
                    return e ? de.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], s = 0, this
                },
                disable: function() {
                    return u = c = i = t, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return c = t, i || f.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return !u || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : d(t)), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, de.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", de.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", de.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", de.Callbacks("memory")]
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
                        return de.Deferred(function(n) {
                            de.each(t, function(t, o) {
                                var s = o[0],
                                    a = de.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && de.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? de.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, de.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = se.call(arguments),
                r = n.length,
                i = 1 !== r || e && de.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : de.Deferred(),
                s = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? se.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                a, l, u;
            if (r > 1)
                for (a = new Array(r), l = new Array(r), u = new Array(r); r > t; t++) n[t] && de.isFunction(n[t].promise) ? n[t].promise().done(s(t, u, n)).fail(o.reject).progress(s(t, l, a)) : --i;
            return i || o.resolveWith(u, n), o.promise()
        }
    }), de.support = function(t) {
        var n, r, i, o, s, a, l, u, c, d = G.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = G.createElement("select"), a = o.appendChild(G.createElement("option")), i = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = a.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled;
        try {
            delete d.test
        } catch (f) {
            t.deleteExpando = !1
        }
        i = G.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), s = G.createDocumentFragment(), s.appendChild(i), t.appendChecked = i.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || d.attributes[l].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (c in de(t)) break;
        return t.ownLast = "0" !== c, de(function() {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = G.getElementsByTagName("body")[0];
            s && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = d.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", de.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(G.createElement("div")), r.style.cssText = d.style.cssText = o, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== J && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = d = i = r = null)
        }), n = o = s = a = r = i = null, t
    }({});
    var De = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        Ne = /([A-Z])/g;
    de.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? de.cache[e[de.expando]] : e[de.expando], !!e && !a(e)
        },
        data: function(e, t, n) {
            return i(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && de.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), de.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (o = de.data(l), 1 === l.nodeType && !de._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; a < r.length; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = de.camelCase(i.slice(5)), s(l, i, o[i]));
                    de._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                de.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                de.data(this, e, n)
            }) : l ? s(l, e, de.data(l, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                de.removeData(this, e)
            })
        }
    }), de.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = de._data(e, t), n && (!r || de.isArray(n) ? r = de._data(e, t, de.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = de.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = de._queueHooks(e, t),
                s = function() {
                    de.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return de._data(e, n) || de._data(e, n, {
                empty: de.Callbacks("once memory").add(function() {
                    de._removeData(e, t + "queue"), de._removeData(e, n)
                })
            })
        }
    }), de.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? de.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = de.queue(this, e, n);
                de._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && de.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                de.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = de.fx ? de.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = de.Deferred(),
                s = this,
                a = this.length,
                l = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) r = de._data(s[a], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var Ee, Ae, Pe = /[\t\r\n\f]/g,
        je = /\r/g,
        Ie = /^(?:input|select|textarea|button|object)$/i,
        Me = /^(?:a|area)$/i,
        He = /^(?:checked|selected)$/i,
        Oe = de.support.getSetAttribute,
        Le = de.support.input;
    de.fn.extend({
        attr: function(e, t) {
            return de.access(this, de.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                de.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return de.access(this, de.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = de.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                l = "string" == typeof e && e;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(pe) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pe, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = de.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(pe) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pe, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? de.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : de.isFunction(e) ? this.each(function(n) {
                de(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = de(this), o = e.match(pe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === J || "boolean" === n) && (this.className && de._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : de._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pe, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = de.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, de(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : de.isArray(o) && (o = de.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = de.valHooks[this.type] || de.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = de.valHooks[o.type] || de.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(je, "") : null == n ? "" : n)
            }
        }
    }), de.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = de.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++)
                        if (n = r[l], (n.selected || l === i) && (de.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !de.nodeName(n.parentNode, "optgroup"))) {
                            if (t = de(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = de.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = de.inArray(de(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === J ? de.prop(e, n, r) : (1 === s && de.isXMLDoc(e) || (n = n.toLowerCase(), i = de.attrHooks[n] || (de.expr.match.bool.test(n) ? Ae : Ee)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = de.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : void de.removeAttr(e, n))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(pe);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = de.propFix[n] || n, de.expr.match.bool.test(n) ? Le && Oe || !He.test(n) ? e[r] = !1 : e[de.camelCase("default-" + n)] = e[r] = !1 : de.attr(e, n, ""), e.removeAttribute(Oe ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!de.support.radioValue && "radio" === t && de.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !de.isXMLDoc(e), s && (n = de.propFix[n] || n, o = de.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = de.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ie.test(e.nodeName) || Me.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), Ae = {
        set: function(e, t, n) {
            return t === !1 ? de.removeAttr(e, n) : Le && Oe || !He.test(n) ? e.setAttribute(!Oe && de.propFix[n] || n, n) : e[de.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, de.each(de.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = de.expr.attrHandle[n] || de.find.attr;
        de.expr.attrHandle[n] = Le && Oe || !He.test(n) ? function(e, n, i) {
            var o = de.expr.attrHandle[n],
                s = i ? t : (de.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return de.expr.attrHandle[n] = o, s
        } : function(e, n, r) {
            return r ? t : e[de.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), Le && Oe || (de.attrHooks.value = {
        set: function(e, t, n) {
            return de.nodeName(e, "input") ? void(e.defaultValue = t) : Ee && Ee.set(e, t, n)
        }
    }), Oe || (Ee = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, de.expr.attrHandle.id = de.expr.attrHandle.name = de.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, de.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: Ee.set
    }, de.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Ee.set(e, "" === t ? !1 : t, n)
        }
    }, de.each(["width", "height"], function(e, t) {
        de.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), de.support.hrefNormalized || de.each(["href", "src"], function(e, t) {
        de.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), de.support.style || (de.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), de.support.optSelected || (de.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), de.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        de.propFix[this.toLowerCase()] = this
    }), de.support.enctype || (de.propFix.enctype = "encoding"), de.each(["radio", "checkbox"], function() {
        de.valHooks[this] = {
            set: function(e, t) {
                return de.isArray(t) ? e.checked = de.inArray(de(e).val(), t) >= 0 : void 0
            }
        }, de.support.checkOn || (de.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Be = /^(?:input|select|textarea)$/i,
        ze = /^key/,
        Fe = /^(?:mouse|contextmenu)|click/,
        $e = /^(?:focusinfocus|focusoutblur)$/,
        Re = /^([^.]*)(?:\.(.+)|)$/;
    de.event = {
        global: {},
        add: function(e, n, r, i, o) {
            var s, a, l, u, c, d, f, p, h, m, g, v = de._data(e);
            if (v) {
                for (r.handler && (u = r, r = u.handler, o = u.selector), r.guid || (r.guid = de.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                        return typeof de === J || e && de.event.triggered === e.type ? t : de.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = e), n = (n || "").match(pe) || [""], l = n.length; l--;) s = Re.exec(n[l]) || [], h = g = s[1], m = (s[2] || "").split(".").sort(), h && (c = de.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = de.event.special[h] || {}, f = de.extend({
                    type: h,
                    origType: g,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && de.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, u), (p = a[h]) || (p = a[h] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? p.splice(p.delegateCount++, 0, f) : p.push(f), de.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, l, u, c, d, f, p, h, m, g = de.hasData(e) && de._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(pe) || [""], u = t.length; u--;)
                    if (a = Re.exec(t[u]) || [], p = m = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (d = de.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) s = f[o], !i && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (f.splice(o, 1), s.selector && f.delegateCount--, d.remove && d.remove.call(e, s));
                        l && !f.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || de.removeEvent(e, p, g.handle), delete c[p])
                    } else
                        for (p in c) de.event.remove(e, p + t[u], n, r, !0);
                de.isEmptyObject(c) && (delete g.handle, de._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, a, l, u, c, d, f, p = [i || G],
                h = ue.call(n, "type") ? n.type : n,
                m = ue.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = d = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !$e.test(h + de.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), a = h.indexOf(":") < 0 && "on" + h, n = n[de.expando] ? n : new de.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : de.makeArray(r, [n]), c = de.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !de.isWindow(i)) {
                    for (u = c.delegateType || h, $e.test(u + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;
                    d === (i.ownerDocument || G) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (f = 0;
                    (l = p[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? u : c.bindType || h, s = (de._data(l, "events") || {})[n.type] && de._data(l, "handle"), s && s.apply(l, r), s = a && l[a], s && de.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), r) === !1) && de.acceptData(i) && a && i[h] && !de.isWindow(i)) {
                    d = i[a], d && (i[a] = null), de.event.triggered = h;
                    try {
                        i[h]()
                    } catch (g) {}
                    de.event.triggered = t, d && (i[a] = d)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = de.event.fix(e);
            var n, r, i, o, s, a = [],
                l = se.call(arguments),
                u = (de._data(this, "events") || {})[e.type] || [],
                c = de.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = de.event.handlers.call(this, e, u), n = 0;
                    (o = a[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, s = 0;
                        (i = o.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((de.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, s, a = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], s = 0; l > s; s++) i = n[s], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? de(r, this).index(u) >= 0 : de.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return l < n.length && a.push({
                elem: this,
                handlers: n.slice(l)
            }), a
        },
        fix: function(e) {
            if (e[de.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Fe.test(i) ? this.mouseHooks : ze.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new de.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
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
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || G, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return de.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return de.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = de.extend(new de.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? de.event.trigger(i, null, t) : de.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, de.removeEvent = G.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === J && (e[r] = null), e.detachEvent(r, n))
    }, de.Event = function(e, t) {
        return this instanceof de.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, t && de.extend(this, t), this.timeStamp = e && e.timeStamp || de.now(), void(this[de.expando] = !0)) : new de.Event(e, t)
    }, de.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, de.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        de.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !de.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), de.support.submitBubbles || (de.event.special.submit = {
        setup: function() {
            return de.nodeName(this, "form") ? !1 : void de.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = de.nodeName(n, "input") || de.nodeName(n, "button") ? n.form : t;
                r && !de._data(r, "submitBubbles") && (de.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), de._data(r, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && de.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return de.nodeName(this, "form") ? !1 : void de.event.remove(this, "._submit")
        }
    }), de.support.changeBubbles || (de.event.special.change = {
        setup: function() {
            return Be.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (de.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), de.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), de.event.simulate("change", this, e, !0)
            })), !1) : void de.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Be.test(t.nodeName) && !de._data(t, "changeBubbles") && (de.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || de.event.simulate("change", this.parentNode, e, !0)
                }), de._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return de.event.remove(this, "._change"), !Be.test(this.nodeName)
        }
    }), de.support.focusinBubbles || de.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                de.event.simulate(t, e.target, de.event.fix(e), !0)
            };
        de.event.special[t] = {
            setup: function() {
                0 === n++ && G.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && G.removeEventListener(e, r, !0)
            }
        }
    }), de.fn.extend({
        on: function(e, n, r, i, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) this.on(s, n, r, e[s], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = u;
            else if (!i) return this;
            return 1 === o && (a = i, i = function(e) {
                return de().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = de.guid++)), this.each(function() {
                de.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, de(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = u), this.each(function() {
                de.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                de.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? de.event.trigger(e, t, n, !0) : void 0
        }
    });
    var qe = /^.[^:#\[\.,]*$/,
        We = /^(?:parents|prev(?:Until|All))/,
        Qe = de.expr.match.needsContext,
        Xe = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    de.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(de(e).filter(function() {
                for (t = 0; i > t; t++)
                    if (de.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) de.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? de.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = de(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (de.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(f(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(f(this, e || [], !1))
        },
        is: function(e) {
            return !!f(this, "string" == typeof e && Qe.test(e) ? de(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = Qe.test(e) || "string" != typeof e ? de(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && de.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? de.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? de.inArray(this[0], de(e)) : de.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? de(e, t) : de.makeArray(e && e.nodeType ? [e] : e),
                r = de.merge(this.get(), n);
            return this.pushStack(de.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), de.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return de.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de.dir(e, "parentNode", n)
        },
        next: function(e) {
            return d(e, "nextSibling")
        },
        prev: function(e) {
            return d(e, "previousSibling")
        },
        nextAll: function(e) {
            return de.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return de.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return de.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return de.sibling(e.firstChild)
        },
        contents: function(e) {
            return de.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : de.merge([], e.childNodes)
        }
    }, function(e, t) {
        de.fn[e] = function(n, r) {
            var i = de.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = de.filter(r, i)), this.length > 1 && (Xe[e] || (i = de.unique(i)), We.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), de.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? de.find.matchesSelector(r, e) ? [r] : [] : de.find.matches(e, de.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !de(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ve = / jQuery\d+="(?:null|\d+)"/g,
        Je = new RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
        Ye = /^\s+/,
        Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ke = /<([\w:]+)/,
        Ze = /<tbody/i,
        et = /<|&#?\w+;/,
        tt = /<(?:script|style|link)/i,
        nt = /^(?:checkbox|radio)$/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^$|\/(?:java|ecma)script/i,
        ot = /^true\/(.*)/,
        st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: de.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        lt = p(G),
        ut = lt.appendChild(G.createElement("div"));
    at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, de.fn.extend({
        text: function(e) {
            return de.access(this, function(e) {
                return e === t ? de.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
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
            for (var n, r = e ? de.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || de.cleanData(_(n)), n.parentNode && (t && de.contains(n.ownerDocument, n) && v(_(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && de.cleanData(_(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && de.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return de.clone(this, e, t)
            })
        },
        html: function(e) {
            return de.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ve, "") : t;
                if ("string" == typeof e && !tt.test(e) && (de.support.htmlSerialize || !Je.test(e)) && (de.support.leadingWhitespace || !Ye.test(e)) && !at[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ge, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (de.cleanData(_(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = de.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), de(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = ie.apply([], e);
            var r, i, o, s, a, l, u = 0,
                c = this.length,
                d = this,
                f = c - 1,
                p = e[0],
                h = de.isFunction(p);
            if (h || !(1 >= c || "string" != typeof p || de.support.checkClone) && rt.test(p)) return this.each(function(r) {
                var i = d.eq(r);
                h && (e[0] = p.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = de.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (s = de.map(_(l, "script"), m), o = s.length; c > u; u++) i = l, u !== f && (i = de.clone(i, !0, !0), o && de.merge(s, _(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (a = s[s.length - 1].ownerDocument, de.map(s, g), u = 0; o > u; u++) i = s[u], it.test(i.type || "") && !de._data(i, "globalEval") && de.contains(a, i) && (i.src ? de._evalUrl(i.src) : de.globalEval((i.text || i.textContent || i.innerHTML || "").replace(st, "")));
                l = r = null
            }
            return this
        }
    }), de.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        de.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = de(e), s = o.length - 1; s >= r; r++) n = r === s ? this : this.clone(!0), de(o[r])[t](n), oe.apply(i, n.get());
            return this.pushStack(i)
        }
    }), de.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a, l = de.contains(e.ownerDocument, e);
            if (de.support.html5Clone || de.isXMLDoc(e) || !Je.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(o = ut.firstChild)), !(de.support.noCloneEvent && de.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || de.isXMLDoc(e)))
                for (r = _(o), a = _(e), s = 0; null != (i = a[s]); ++s) r[s] && b(i, r[s]);
            if (t)
                if (n)
                    for (a = a || _(e), r = r || _(o), s = 0; null != (i = a[s]); s++) y(i, r[s]);
                else y(e, o);
            return r = _(o, "script"), r.length > 0 && v(r, !l && _(e, "script")), r = a = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, l, u, c, d = e.length, f = p(t), h = [], m = 0; d > m; m++)
                if (o = e[m], o || 0 === o)
                    if ("object" === de.type(o)) de.merge(h, o.nodeType ? [o] : o);
                    else if (et.test(o)) {
                for (a = a || f.appendChild(t.createElement("div")), l = (Ke.exec(o) || ["", ""])[1].toLowerCase(), c = at[l] || at._default, a.innerHTML = c[1] + o.replace(Ge, "<$1></$2>") + c[2], i = c[0]; i--;) a = a.lastChild;
                if (!de.support.leadingWhitespace && Ye.test(o) && h.push(t.createTextNode(Ye.exec(o)[0])), !de.support.tbody)
                    for (o = "table" !== l || Ze.test(o) ? "<table>" !== c[1] || Ze.test(o) ? 0 : a : a.firstChild, i = o && o.childNodes.length; i--;) de.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (de.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = f.lastChild
            } else h.push(t.createTextNode(o));
            for (a && f.removeChild(a), de.support.appendChecked || de.grep(_(h, "input"), x), m = 0; o = h[m++];)
                if ((!r || -1 === de.inArray(o, r)) && (s = de.contains(o.ownerDocument, o), a = _(f.appendChild(o), "script"), s && v(a), n))
                    for (i = 0; o = a[i++];) it.test(o.type || "") && n.push(o);
            return a = null, f
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, s = 0, a = de.expando, l = de.cache, u = de.support.deleteExpando, c = de.event.special; null != (n = e[s]); s++)
                if ((t || de.acceptData(n)) && (i = n[a], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? de.event.remove(n, r) : de.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[a] : typeof n.removeAttribute !== J ? n.removeAttribute(a) : n[a] = null, ne.push(i))
                }
        },
        _evalUrl: function(e) {
            return de.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), de.fn.extend({
        wrapAll: function(e) {
            if (de.isFunction(e)) return this.each(function(t) {
                de(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = de(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return de.isFunction(e) ? this.each(function(t) {
                de(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = de(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = de.isFunction(e);
            return this.each(function(n) {
                de(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                de.nodeName(this, "body") || de(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var ct, dt, ft, pt = /alpha\([^)]*\)/i,
        ht = /opacity\s*=\s*([^)]*)/,
        mt = /^(top|right|bottom|left)$/,
        gt = /^(none|table(?!-c[ea]).+)/,
        vt = /^margin/,
        yt = new RegExp("^(" + fe + ")(.*)$", "i"),
        bt = new RegExp("^(" + fe + ")(?!px)[a-z%]+$", "i"),
        _t = new RegExp("^([+-])=(" + fe + ")", "i"),
        xt = {
            BODY: "block"
        },
        wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        St = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Tt = ["Top", "Right", "Bottom", "Left"],
        Ct = ["Webkit", "O", "Moz", "ms"];
    de.fn.extend({
        css: function(e, n) {
            return de.access(this, function(e, n, r) {
                var i, o, s = {},
                    a = 0;
                if (de.isArray(n)) {
                    for (o = dt(e), i = n.length; i > a; a++) s[n[a]] = de.css(e, n[a], !1, o);
                    return s
                }
                return r !== t ? de.style(e, n, r) : de.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                S(this) ? de(this).show() : de(this).hide()
            })
        }
    }), de.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = ft(e, "opacity");
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
            "float": de.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, l = de.camelCase(n),
                    u = e.style;
                if (n = de.cssProps[l] || (de.cssProps[l] = w(u, l)), a = de.cssHooks[n] || de.cssHooks[l], r === t) return a && "get" in a && (o = a.get(e, !1, i)) !== t ? o : u[n];
                if (s = typeof r, "string" === s && (o = _t.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(de.css(e, n)), s = "number"), !(null == r || "number" === s && isNaN(r) || ("number" !== s || de.cssNumber[l] || (r += "px"), de.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (r = a.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, s, a, l = de.camelCase(n);
            return n = de.cssProps[l] || (de.cssProps[l] = w(e.style, l)), a = de.cssHooks[n] || de.cssHooks[l], a && "get" in a && (s = a.get(e, !0, r)), s === t && (s = ft(e, n, i)), "normal" === s && n in St && (s = St[n]), "" === r || r ? (o = parseFloat(s), r === !0 || de.isNumeric(o) ? o || 0 : s) : s
        }
    }), e.getComputedStyle ? (dt = function(t) {
        return e.getComputedStyle(t, null)
    }, ft = function(e, n, r) {
        var i, o, s, a = r || dt(e),
            l = a ? a.getPropertyValue(n) || a[n] : t,
            u = e.style;
        return a && ("" !== l || de.contains(e.ownerDocument, e) || (l = de.style(e, n)), bt.test(l) && vt.test(n) && (i = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = i, u.minWidth = o, u.maxWidth = s)), l
    }) : G.documentElement.currentStyle && (dt = function(e) {
        return e.currentStyle
    }, ft = function(e, n, r) {
        var i, o, s, a = r || dt(e),
            l = a ? a[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), bt.test(l) && !mt.test(n) && (i = u.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, s && (o.left = s)), "" === l ? "auto" : l
    }), de.each(["height", "width"], function(e, t) {
        de.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && gt.test(de.css(e, "display")) ? de.swap(e, wt, function() {
                    return D(e, t, r)
                }) : D(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && dt(e);
                return C(e, n, r ? k(e, t, r, de.support.boxSizing && "border-box" === de.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), de.support.opacity || (de.cssHooks.opacity = {
        get: function(e, t) {
            return ht.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = de.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === de.trim(o.replace(pt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pt.test(o) ? o.replace(pt, i) : o + " " + i)
        }
    }), de(function() {
        de.support.reliableMarginRight || (de.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? de.swap(e, {
                    display: "inline-block"
                }, ft, [e, "marginRight"]) : void 0
            }
        }), !de.support.pixelPosition && de.fn.position && de.each(["top", "left"], function(e, t) {
            de.cssHooks[t] = {
                get: function(e, n) {
                    return n ? (n = ft(e, t), bt.test(n) ? de(e).position()[t] + "px" : n) : void 0
                }
            }
        })
    }), de.expr && de.expr.filters && (de.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !de.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || de.css(e, "display"))
    }, de.expr.filters.visible = function(e) {
        return !de.expr.filters.hidden(e)
    }), de.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        de.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Tt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, vt.test(e) || (de.cssHooks[e + t].set = C)
    });
    var kt = /%20/g,
        Dt = /\[\]$/,
        Nt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    de.fn.extend({
        serialize: function() {
            return de.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = de.prop(this, "elements");
                return e ? de.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !de(this).is(":disabled") && At.test(this.nodeName) && !Et.test(e) && (this.checked || !nt.test(e))
            }).map(function(e, t) {
                var n = de(this).val();
                return null == n ? null : de.isArray(n) ? de.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Nt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Nt, "\r\n")
                }
            }).get()
        }
    }), de.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = de.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = de.ajaxSettings && de.ajaxSettings.traditional), de.isArray(e) || e.jquery && !de.isPlainObject(e)) de.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) A(r, e[r], n, o);
        return i.join("&").replace(kt, "+")
    }, de.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        de.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), de.fn.extend({
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
    var Pt, jt, It = de.now(),
        Mt = /\?/,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Lt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        zt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        $t = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Rt = de.fn.load,
        qt = {},
        Wt = {},
        Qt = "*/".concat("*");
    try {
        jt = Y.href
    } catch (Xt) {
        jt = G.createElement("a"), jt.href = "", jt = jt.href
    }
    Pt = $t.exec(jt.toLowerCase()) || [], de.fn.load = function(e, n, r) {
        if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
        var i, o, s, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), de.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && de.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, a.html(i ? de("<div>").append(de.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            a.each(r, o || [e.responseText, t, e])
        }), this
    }, de.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        de.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), de.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jt,
            type: "GET",
            isLocal: Bt.test(Pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qt,
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
                "text json": de.parseJSON,
                "text xml": de.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? I(I(e, de.ajaxSettings), t) : I(de.ajaxSettings, e)
        },
        ajaxPrefilter: P(qt),
        ajaxTransport: P(Wt),
        ajax: function(e, n) {
            function r(e, n, r, i) {
                var o, d, y, b, x, S = n;
                2 !== _ && (_ = 2, l && clearTimeout(l), c = t, a = i || "", w.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = M(f, w, r)), b = H(f, b, w, o), o ? (f.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (de.lastModified[s] = x), x = w.getResponseHeader("etag"), x && (de.etag[s] = x)), 204 === e || "HEAD" === f.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, d = b.data, y = b.error, o = !y)) : (y = S, (e || !S) && (S = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || S) + "", o ? m.resolveWith(p, [d, S, w]) : m.rejectWith(p, [w, S, y]), w.statusCode(v), v = t, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, f, o ? d : y]), g.fireWith(p, [w, S]), u && (h.trigger("ajaxComplete", [w, f]), --de.active || de.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, s, a, l, u, c, d, f = de.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? de(p) : de.event,
                m = de.Deferred(),
                g = de.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                _ = 0,
                x = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === _) {
                            if (!d)
                                for (d = {}; t = Lt.exec(a);) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === _ ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return _ || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return _ || (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > _)
                                for (t in e) v[t] = [v[t], e[t]];
                            else w.always(e[w.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || jt) + "").replace(Ht, "").replace(Ft, Pt[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = de.trim(f.dataType || "*").toLowerCase().match(pe) || [""], null == f.crossDomain && (i = $t.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Pt[1] && i[2] === Pt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = de.param(f.data, f.traditional)), j(qt, f, n, w), 2 === _) return w;
            u = f.global, u && 0 === de.active++ && de.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !zt.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (Mt.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = Ot.test(s) ? s.replace(Ot, "$1_=" + It++) : s + (Mt.test(s) ? "&" : "?") + "_=" + It++)), f.ifModified && (de.lastModified[s] && w.setRequestHeader("If-Modified-Since", de.lastModified[s]), de.etag[s] && w.setRequestHeader("If-None-Match", de.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Qt + "; q=0.01" : "") : f.accepts["*"]);
            for (o in f.headers) w.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === _)) return w.abort();
            x = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[o](f[o]);
            if (c = j(Wt, f, n, w)) {
                w.readyState = 1, u && h.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (l = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    _ = 1, c.send(y, r)
                } catch (S) {
                    if (!(2 > _)) throw S;
                    r(-1, S)
                }
            } else r(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return de.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return de.get(e, t, n, "script")
        }
    }), de.each(["get", "post"], function(e, n) {
        de[n] = function(e, r, i, o) {
            return de.isFunction(r) && (o = o || i, i = r, r = t), de.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), de.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return de.globalEval(e), e
            }
        }
    }), de.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), de.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = G.head || de("head")[0] || G.documentElement;
            return {
                send: function(t, i) {
                    n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Ut = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    de.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ut.pop() || de.expando + "_" + It++;
            return this[e] = !0, e
        }
    }), de.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, s, a, l = n.jsonp !== !1 && (Vt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = de.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Vt, "$1" + o) : n.jsonp !== !1 && (n.url += (Mt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return a || de.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = e[o], e[o] = function() {
            a = arguments
        }, i.always(function() {
            e[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, Ut.push(o)), a && de.isFunction(s) && s(a[0]), a = s = t
        }), "script") : void 0
    });
    var Jt, Yt, Gt = 0,
        Kt = e.ActiveXObject && function() {
            var e;
            for (e in Jt) Jt[e](t, !0)
        };
    de.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && O() || L()
    } : O, Yt = de.ajaxSettings.xhr(), de.support.cors = !!Yt && "withCredentials" in Yt, Yt = de.support.ajax = !!Yt, Yt && de.ajaxTransport(function(n) {
        if (!n.crossDomain || de.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i) l.setRequestHeader(a, i[a])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var a, u, c, d;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, s && (l.onreadystatechange = de.noop, Kt && delete Jt[s]), i) 4 !== l.readyState && l.abort();
                                else {
                                    d = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                }
                        } catch (p) {
                            i || o(-1, p)
                        }
                        d && o(a, c, d, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (s = ++Gt, Kt && (Jt || (Jt = {}, de(e).unload(Kt)), Jt[s] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zt, en, tn = /^(?:toggle|show|hide)$/,
        nn = new RegExp("^(?:([+-])=|)(" + fe + ")([a-z%]*)$", "i"),
        rn = /queueHooks$/,
        on = [q],
        sn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = nn.exec(t),
                    o = i && i[3] || (de.cssNumber[e] ? "" : "px"),
                    s = (de.cssNumber[e] || "px" !== o && +r) && nn.exec(de.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, de.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --l)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    de.Animation = de.extend(F, {
        tweener: function(e, t) {
            de.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], sn[n] = sn[n] || [], sn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? on.unshift(e) : on.push(e)
        }
    }), de.Tween = W, W.prototype = {
        constructor: W,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (de.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = W.propHooks[this.prop];
            return e && e.get ? e.get(this) : W.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = W.propHooks[this.prop];
            return this.options.duration ? this.pos = t = de.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : W.propHooks._default.set(this), this
        }
    }, W.prototype.init.prototype = W.prototype, W.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = de.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                de.fx.step[e.prop] ? de.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[de.cssProps[e.prop]] || de.cssHooks[e.prop]) ? de.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, de.each(["toggle", "show", "hide"], function(e, t) {
        var n = de.fn[t];
        de.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Q(t, !0), e, r, i)
        }
    }), de.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = de.isEmptyObject(e),
                o = de.speed(t, n, r),
                s = function() {
                    var t = F(this, de.extend({}, e), o);
                    (i || de._data(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = de.timers,
                    s = de._data(this);
                if (n) s[n] && s[n].stop && i(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && rn.test(n) && i(s[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && de.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = de._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = de.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, de.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), de.each({
        slideDown: Q("show"),
        slideUp: Q("hide"),
        slideToggle: Q("toggle"),
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
        de.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), de.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? de.extend({}, e) : {
            complete: n || !n && t || de.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !de.isFunction(t) && t
        };
        return r.duration = de.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in de.fx.speeds ? de.fx.speeds[r.duration] : de.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            de.isFunction(r.old) && r.old.call(this), r.queue && de.dequeue(this, r.queue)
        }, r
    }, de.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, de.timers = [], de.fx = W.prototype.init, de.fx.tick = function() {
        var e, n = de.timers,
            r = 0;
        for (Zt = de.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || de.fx.stop(), Zt = t
    }, de.fx.timer = function(e) {
        e() && de.timers.push(e) && de.fx.start()
    }, de.fx.interval = 13, de.fx.start = function() {
        en || (en = setInterval(de.fx.tick, de.fx.interval))
    }, de.fx.stop = function() {
        clearInterval(en), en = null
    }, de.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, de.fx.step = {}, de.expr && de.expr.filters && (de.expr.filters.animated = function(e) {
        return de.grep(de.timers, function(t) {
            return e === t.elem
        }).length
    }), de.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            de.offset.setOffset(this, e, t)
        });
        var n, r, i = {
                top: 0,
                left: 0
            },
            o = this[0],
            s = o && o.ownerDocument;
        if (s) return n = s.documentElement, de.contains(n, o) ? (typeof o.getBoundingClientRect !== J && (i = o.getBoundingClientRect()), r = X(s), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, de.offset = {
        setOffset: function(e, t, n) {
            var r = de.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = de(e),
                o = i.offset(),
                s = de.css(e, "top"),
                a = de.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && de.inArray("auto", [s, a]) > -1,
                u = {},
                c = {},
                d, f;
            l ? (c = i.position(), d = c.top, f = c.left) : (d = parseFloat(s) || 0, f = parseFloat(a) || 0), de.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + d), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, de.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === de.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), de.nodeName(e[0], "html") || (n = e.offset()), n.top += de.css(e[0], "borderTopWidth", !0), n.left += de.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - de.css(r, "marginTop", !0),
                    left: t.left - n.left - de.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || K; e && !de.nodeName(e, "html") && "static" === de.css(e, "position");) e = e.offsetParent;
                return e || K
            })
        }
    }), de.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        de.fn[e] = function(i) {
            return de.access(this, function(e, i, o) {
                var s = X(e);
                return o === t ? s ? n in s ? s[n] : s.document.documentElement[i] : e[i] : void(s ? s.scrollTo(r ? de(s).scrollLeft() : o, r ? o : de(s).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), de.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        de.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            de.fn[i] = function(i, o) {
                var s = arguments.length && (r || "boolean" != typeof i),
                    a = r || (i === !0 || o === !0 ? "margin" : "border");
                return de.access(this, function(n, r, i) {
                    var o;
                    return de.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? de.css(n, r, a) : de.style(n, r, i, a)
                }, n, s ? i : t, s, null)
            }
        })
    }), de.fn.size = function() {
        return this.length
    }, de.fn.andSelf = de.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = de : (e.jQuery = e.$ = de, "function" == typeof define && define.amd && define("jquery", [], function() {
        return de
    }))
}(window);
var Drupal = Drupal || {
    settings: {},
    behaviors: {},
    locale: {}
};
jQuery.noConflict(),
    function($) {
        var e = $.fn.init;
        $.fn.init = function(t, n, r) {
            if (t && "string" == typeof t) {
                var i = t.indexOf("#");
                if (i >= 0) {
                    var o = t.indexOf("<");
                    if (o > i) throw "Syntax error, unrecognized expression: " + t
                }
            }
            return e.call(this, t, n, r)
        }, $.fn.init.prototype = e.prototype, Drupal.attachBehaviors = function(e, t) {
            e = e || document, t = t || Drupal.settings, $.each(Drupal.behaviors, function() {
                $.isFunction(this.attach) && this.attach(e, t)
            })
        }, Drupal.detachBehaviors = function(e, t, n) {
            e = e || document, t = t || Drupal.settings, n = n || "unload", $.each(Drupal.behaviors, function() {
                $.isFunction(this.detach) && this.detach(e, t, n)
            })
        }, Drupal.checkPlain = function(e) {
            var t, n, r = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
            e = String(e);
            for (t in r) r.hasOwnProperty(t) && (n = new RegExp(t, "g"), e = e.replace(n, r[t]));
            return e
        }, Drupal.formatString = function(e, t) {
            for (var n in t) {
                switch (n.charAt(0)) {
                    case "@":
                        t[n] = Drupal.checkPlain(t[n]);
                        break;
                    case "!":
                        break;
                    case "%":
                    default:
                        t[n] = Drupal.theme("placeholder", t[n])
                }
                e = e.replace(n, t[n])
            }
            return e
        }, Drupal.t = function(e, t, n) {
            return n = n || {}, n.context = n.context || "", Drupal.locale.strings && Drupal.locale.strings[n.context] && Drupal.locale.strings[n.context][e] && (e = Drupal.locale.strings[n.context][e]), t && (e = Drupal.formatString(e, t)), e
        }, Drupal.formatPlural = function(e, t, n, r, i) {
            var r = r || {};
            r["@count"] = e;
            var o = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(r["@count"]) : 1 == r["@count"] ? 0 : 1;
            return 0 == o ? Drupal.t(t, r, i) : 1 == o ? Drupal.t(n, r, i) : (r["@count[" + o + "]"] = r["@count"], delete r["@count"], Drupal.t(n.replace("@count", "@count[" + o + "]"), r, i))
        }, Drupal.theme = function(e) {
            var t = Array.prototype.slice.apply(arguments, [1]);
            return (Drupal.theme[e] || Drupal.theme.prototype[e]).apply(this, t)
        }, Drupal.freezeHeight = function() {
            Drupal.unfreezeHeight(), $('<div id="freeze-height"></div>').css({
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "1px",
                height: $("body").css("height")
            }).appendTo("body")
        }, Drupal.unfreezeHeight = function() {
            $("#freeze-height").remove()
        }, Drupal.encodePath = function(e, t) {
            return t = t || location.href, encodeURIComponent(e).replace(/%2F/g, "/")
        }, Drupal.getSelection = function(e) {
            if ("number" != typeof e.selectionStart && document.selection) {
                var t = document.selection.createRange(),
                    n = t.duplicate();
                n.moveToElementText(e), n.setEndPoint("EndToEnd", t);
                var r = n.text.length - t.text.length,
                    i = r + t.text.length;
                return {
                    start: r,
                    end: i
                }
            }
            return {
                start: e.selectionStart,
                end: e.selectionEnd
            }
        }, Drupal.ajaxError = function(e, t) {
            var n, r, i, o, s, a;
            n = e.status ? "\n" + Drupal.t("An AJAX HTTP error occurred.") + "\n" + Drupal.t("HTTP Result Code: !status", {
                "!status": e.status
            }) : "\n" + Drupal.t("An AJAX HTTP request terminated abnormally."), n += "\n" + Drupal.t("Debugging information follows."), i = "\n" + Drupal.t("Path: !uri", {
                "!uri": t
            }), r = "";
            try {
                r = "\n" + Drupal.t("StatusText: !statusText", {
                    "!statusText": $.trim(e.statusText)
                })
            } catch (l) {}
            o = "";
            try {
                o = "\n" + Drupal.t("ResponseText: !responseText", {
                    "!responseText": $.trim(e.responseText)
                })
            } catch (l) {}
            return o = o.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, ""), o = o.replace(/[\n]+\s+/g, "\n"), s = 0 == e.status ? "\n" + Drupal.t("ReadyState: !readyState", {
                "!readyState": e.readyState
            }) : "", a = n + i + r + o + s
        }, $("html").addClass("js"), document.cookie = "has_js=1; path=/", $(function() {
            if (void 0 === jQuery.support.positionFixed) {
                var e = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
                jQuery.support.positionFixed = 10 === e[0].offsetTop, e.remove()
            }
        }), $(function() {
            Drupal.attachBehaviors(document, Drupal.settings)
        }), Drupal.theme.prototype = {
            placeholder: function(e) {
                return '<em class="placeholder">' + Drupal.checkPlain(e) + "</em>"
            }
        }
    }(jQuery),
    function($) {
        $.fn.drupalGetSummary = function() {
            var e = this.data("summaryCallback");
            return this[0] && e ? $.trim(e(this[0])) : ""
        }, $.fn.drupalSetSummary = function(e) {
            var t = this;
            if ("function" != typeof e) {
                var n = e;
                e = function() {
                    return n
                }
            }
            return this.data("summaryCallback", e).unbind("formUpdated.summary").bind("formUpdated.summary", function() {
                t.trigger("summaryUpdated")
            }).trigger("summaryUpdated")
        }, Drupal.behaviors.formUpdated = {
            attach: function(e) {
                var t = "change.formUpdated click.formUpdated blur.formUpdated keyup.formUpdated";
                $(e).find(":input").andSelf().filter(":input").unbind(t).bind(t, function() {
                    $(this).trigger("formUpdated")
                })
            }
        }, Drupal.behaviors.fillUserInfoFromCookie = {
            attach: function(e, t) {
                $("form.user-info-from-cookie").once("user-info-from-cookie", function() {
                    var e = this;
                    $.each(["name", "mail", "homepage"], function() {
                        var t = $("[name=" + this + "]", e),
                            n = $.cookie("Drupal.visitor." + this);
                        t.length && n && t.val(n)
                    })
                })
            }
        }
    }(jQuery),
    function($) {
        Drupal.ajax = Drupal.ajax || {}, Drupal.behaviors.AJAX = {
            attach: function(e, t) {
                for (var n in t.ajax)
                    if (!$("#" + n + ".ajax-processed").length) {
                        var r = t.ajax[n];
                        "undefined" == typeof r.selector && (r.selector = "#" + n), $(r.selector).each(function() {
                            r.element = this, Drupal.ajax[n] = new Drupal.ajax(n, this, r)
                        }), $("#" + n).addClass("ajax-processed")
                    }
                $(".use-ajax:not(.ajax-processed)").addClass("ajax-processed").each(function() {
                    var e = {};
                    e.progress = {
                        type: "throbber"
                    }, $(this).attr("href") && (e.url = $(this).attr("href"), e.event = "click");
                    var t = $(this).attr("id");
                    Drupal.ajax[t] = new Drupal.ajax(t, this, e)
                }), $(".use-ajax-submit:not(.ajax-processed)").addClass("ajax-processed").each(function() {
                    var e = {};
                    e.url = $(this.form).attr("action"), e.setClick = !0, e.event = "click", e.progress = {
                        type: "throbber"
                    };
                    var t = $(this).attr("id");
                    Drupal.ajax[t] = new Drupal.ajax(t, this, e)
                })
            }
        }, Drupal.ajax = function(e, t, n) {
            var r = {
                url: "system/ajax",
                event: "mousedown",
                keypress: !0,
                selector: "#" + e,
                effect: "none",
                speed: "none",
                method: "replaceWith",
                progress: {
                    type: "throbber",
                    message: Drupal.t("Please wait...")
                },
                submit: {
                    js: !0
                }
            };
            $.extend(this, r, n), this.element = t, this.element_settings = n, this.url = n.url.replace(/\/nojs(\/|$|\?|&|#)/g, "/ajax$1"), this.wrapper = "#" + n.wrapper, this.element.form && (this.form = $(this.element.form));
            var i = this;
            i.options = {
                url: i.url,
                data: i.submit,
                beforeSerialize: function(e, t) {
                    return i.beforeSerialize(e, t)
                },
                beforeSubmit: function(e, t, n) {
                    return i.ajaxing = !0, i.beforeSubmit(e, t, n)
                },
                beforeSend: function(e, t) {
                    return i.ajaxing = !0, i.beforeSend(e, t)
                },
                success: function(e, t) {
                    return "string" == typeof e && (e = $.parseJSON(e)), i.success(e, t)
                },
                complete: function(e, t) {
                    return i.ajaxing = !1, "error" == t || "parsererror" == t ? i.error(e, i.url) : void 0
                },
                dataType: "json",
                type: "POST"
            }, $(i.element).bind(n.event, function(e) {
                return i.eventResponse(this, e)
            }), n.keypress && $(i.element).keypress(function(e) {
                return i.keypressResponse(this, e)
            }), n.prevent && $(i.element).bind(n.prevent, !1)
        }, Drupal.ajax.prototype.keypressResponse = function(e, t) {
            var n = this;
            return 13 == t.which || 32 == t.which && "text" != e.type && "textarea" != e.type ? ($(n.element_settings.element).trigger(n.element_settings.event), !1) : void 0
        }, Drupal.ajax.prototype.eventResponse = function(e, t) {
            var n = this;
            if (n.ajaxing) return !1;
            try {
                n.form ? (n.setClick && (e.form.clk = e), n.form.ajaxSubmit(n.options)) : (n.beforeSerialize(n.element, n.options), $.ajax(n.options))
            } catch (r) {
                n.ajaxing = !1, alert("An error occurred while attempting to process " + n.options.url + ": " + r.message)
            }
            return "undefined" == typeof e.type || "checkbox" != e.type && "radio" != e.type ? !1 : !0
        }, Drupal.ajax.prototype.beforeSerialize = function(e, t) {
            if (this.form) {
                var n = this.settings || Drupal.settings;
                Drupal.detachBehaviors(this.form, n, "serialize")
            }
            t.data["ajax_html_ids[]"] = [], $("[id]").each(function() {
                t.data["ajax_html_ids[]"].push(this.id)
            }), t.data["ajax_page_state[theme]"] = Drupal.settings.ajaxPageState.theme, t.data["ajax_page_state[theme_token]"] = Drupal.settings.ajaxPageState.theme_token;
            for (var r in Drupal.settings.ajaxPageState.css) t.data["ajax_page_state[css][" + r + "]"] = 1;
            for (var r in Drupal.settings.ajaxPageState.js) t.data["ajax_page_state[js][" + r + "]"] = 1
        }, Drupal.ajax.prototype.beforeSubmit = function(e, t, n) {}, Drupal.ajax.prototype.beforeSend = function(xmlhttprequest, options) {
            if (this.form) {
                options.extraData = options.extraData || {}, options.extraData.ajax_iframe_upload = "1";
                var v = $.fieldValue(this.element);
                null !== v && (options.extraData[this.element.name] = v)
            }
            if ($(this.element).addClass("progress-disabled").attr("disabled", !0), "bar" == this.progress.type) {
                var progressBar = new Drupal.progressBar("ajax-progress-" + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
                this.progress.message && progressBar.setProgress(-1, this.progress.message), this.progress.url && progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500), this.progress.element = $(progressBar.element).addClass("ajax-progress ajax-progress-bar"), this.progress.object = progressBar, $(this.element).after(this.progress.element)
            } else "throbber" == this.progress.type && (this.progress.element = $('<div class="ajax-progress ajax-progress-throbber"><div class="throbber">&nbsp;</div></div>'), this.progress.message && $(".throbber", this.progress.element).after('<div class="message">' + this.progress.message + "</div>"), $(this.element).after(this.progress.element))
        }, Drupal.ajax.prototype.success = function(e, t) {
            this.progress.element && $(this.progress.element).remove(), this.progress.object && this.progress.object.stopMonitoring(), $(this.element).removeClass("progress-disabled").removeAttr("disabled"), Drupal.freezeHeight();
            for (var n in e) e.hasOwnProperty(n) && e[n].command && this.commands[e[n].command] && this.commands[e[n].command](this, e[n], t);
            if (this.form) {
                var r = this.settings || Drupal.settings;
                Drupal.attachBehaviors(this.form, r)
            }
            Drupal.unfreezeHeight(), this.settings = null
        }, Drupal.ajax.prototype.getEffect = function(e) {
            var t = e.effect || this.effect,
                n = e.speed || this.speed,
                r = {};
            return "none" == t ? (r.showEffect = "show", r.hideEffect = "hide", r.showSpeed = "") : "fade" == t ? (r.showEffect = "fadeIn", r.hideEffect = "fadeOut", r.showSpeed = n) : (r.showEffect = t + "Toggle", r.hideEffect = t + "Toggle", r.showSpeed = n), r
        }, Drupal.ajax.prototype.error = function(e, t) {
            if (alert(Drupal.ajaxError(e, t)), this.progress.element && $(this.progress.element).remove(), this.progress.object && this.progress.object.stopMonitoring(), $(this.wrapper).show(), $(this.element).removeClass("progress-disabled").removeAttr("disabled"), this.form) {
                var n = e.settings || this.settings || Drupal.settings;
                Drupal.attachBehaviors(this.form, n)
            }
        }, Drupal.ajax.prototype.commands = {
            insert: function(e, t, n) {
                var r = $(t.selector ? t.selector : e.wrapper),
                    i = t.method || e.method,
                    o = e.getEffect(t),
                    s = $("<div></div>").html(t.data),
                    a = s.contents();
                switch ((1 != a.length || 1 != a.get(0).nodeType) && (a = s), i) {
                    case "html":
                    case "replaceWith":
                    case "replaceAll":
                    case "empty":
                    case "remove":
                        var l = t.settings || e.settings || Drupal.settings;
                        Drupal.detachBehaviors(r, l)
                }
                if (r[i](a), "show" != o.showEffect && a.hide(), $(".ajax-new-content", a).length > 0 ? ($(".ajax-new-content", a).hide(), a.show(), $(".ajax-new-content", a)[o.showEffect](o.showSpeed)) : "show" != o.showEffect && a[o.showEffect](o.showSpeed), a.parents("html").length > 0) {
                    var l = t.settings || e.settings || Drupal.settings;
                    Drupal.attachBehaviors(a, l)
                }
            },
            remove: function(e, t, n) {
                var r = t.settings || e.settings || Drupal.settings;
                Drupal.detachBehaviors($(t.selector), r), $(t.selector).remove()
            },
            changed: function(e, t, n) {
                $(t.selector).hasClass("ajax-changed") || ($(t.selector).addClass("ajax-changed"), t.asterisk && $(t.selector).find(t.asterisk).append(' <span class="ajax-changed">*</span> '))
            },
            alert: function(e, t, n) {
                alert(t.text, t.title)
            },
            css: function(e, t, n) {
                $(t.selector).css(t.argument)
            },
            settings: function(e, t, n) {
                t.merge ? $.extend(!0, Drupal.settings, t.settings) : e.settings = t.settings
            },
            data: function(e, t, n) {
                $(t.selector).data(t.name, t.value)
            },
            invoke: function(e, t, n) {
                var r = $(t.selector);
                r[t.method].apply(r, t.arguments)
            },
            restripe: function(e, t, n) {
                $("> tbody > tr:visible, > tr:visible", $(t.selector)).removeClass("odd even").filter(":even").addClass("odd").end().filter(":odd").addClass("even")
            },
            updateBuildId: function(e, t, n) {
                $('input[name="form_build_id"][value="' + t.old + '"]').val(t["new"])
            }
        }
    }(jQuery),
    function($) {
        Drupal.behaviors.password = {
            attach: function(e, t) {
                var n = t.password;
                $("input.password-field", e).once("password", function() {
                    var e = $(this),
                        r = $(this).parent(),
                        i = $(this).parent().parent();
                    r.addClass("password-parent"), $("input.password-confirm", i).parent().prepend('<div class="password-confirm">' + n.confirmTitle + " <span></span></div>").addClass("confirm-parent");
                    var o = $("input.password-confirm", i),
                        s = $("div.password-confirm", i),
                        a = $("span", s),
                        l = '<div class="password-strength"><div class="password-strength-text" aria-live="assertive"></div><div class="password-strength-title">' + n.strengthTitle + '</div><div class="password-indicator"><div class="indicator"></div></div></div>';
                    $(o).parent().after('<div class="password-suggestions description"></div>'), $(r).prepend(l);
                    var u = $("div.password-suggestions", i).hide(),
                        c = function() {
                            var n = Drupal.evaluatePasswordStrength(e.val(), t.password);
                            u.html() != n.message && u.html(n.message), 100 == n.strength ? u.hide() : u.show(), $(r).find(".indicator").css("width", n.strength + "%"), $(r).find(".password-strength-text").html(n.indicatorText), d()
                        },
                        d = function() {
                            if (o.val()) {
                                var t = e.val() === o.val();
                                s.css({
                                    visibility: "visible"
                                }), this.confirmClass && a.removeClass(this.confirmClass);
                                var r = t ? "ok" : "error";
                                a.html(n["confirm" + (t ? "Success" : "Failure")]).addClass(r), this.confirmClass = r
                            } else s.css({
                                visibility: "hidden"
                            })
                        };
                    e.keyup(c).focus(c).blur(c), o.keyup(d).blur(d)
                })
            }
        }, Drupal.evaluatePasswordStrength = function(e, t) {
            var n = 0,
                r = 100,
                i = [],
                o = /[a-z]+/.test(e),
                s = /[A-Z]+/.test(e),
                a = /[0-9]+/.test(e),
                l = /[^a-zA-Z0-9]+/.test(e),
                u = $("input.username"),
                c = u.length > 0 ? u.val() : t.username;
            switch (e.length < 6 && (i.push(t.tooShort), r -= 5 * (6 - e.length) + 30), o || (i.push(t.addLowerCase), n++), s || (i.push(t.addUpperCase), n++), a || (i.push(t.addNumbers), n++), l || (i.push(t.addPunctuation), n++), n) {
                case 1:
                    r -= 12.5;
                    break;
                case 2:
                    r -= 25;
                    break;
                case 3:
                    r -= 40;
                    break;
                case 4:
                    r -= 40
            }
            return "" !== e && e.toLowerCase() === c.toLowerCase() && (i.push(t.sameAsUsername), r = 5), 60 > r ? indicatorText = t.weak : 70 > r ? indicatorText = t.fair : 80 > r ? indicatorText = t.good : 100 >= r && (indicatorText = t.strong), i = t.hasWeaknesses + "<ul><li>" + i.join("</li><li>") + "</li></ul>", {
                strength: r,
                message: i,
                indicatorText: indicatorText
            }
        }, Drupal.behaviors.fieldUserRegistration = {
            attach: function(e, t) {
                var n = $("form#field-ui-field-edit-form input#edit-instance-settings-user-register-form");
                n.length && $("input#edit-instance-required", e).once("user-register-form-checkbox", function() {
                    $(this).bind("change", function(e) {
                        $(this).attr("checked") && n.attr("checked", !0)
                    })
                })
            }
        }
    }(jQuery),
    function($) {
        function e(e, t) {
            return "undefined" == typeof e ? t : "undefined" == typeof t ? e : e && t
        }

        function t(e, t) {
            return t && "undefined" != typeof e ? !e : e
        }

        function n(e, t) {
            return e === t ? "undefined" == typeof e ? e : !0 : "undefined" == typeof e || "undefined" == typeof t
        }
        var r = Drupal.states = {
            postponed: []
        };
        Drupal.behaviors.states = {
            attach: function(e, t) {
                var n = $(e);
                for (var i in t.states)
                    for (var o in t.states[i]) new r.Dependent({
                        element: n.find(i),
                        state: r.State.sanitize(o),
                        constraints: t.states[i][o]
                    });
                for (; r.postponed.length;) r.postponed.shift()()
            }
        }, r.Dependent = function(e) {
            $.extend(this, {
                values: {},
                oldValue: null
            }, e), this.dependees = this.getDependees();
            for (var t in this.dependees) this.initializeDependee(t, this.dependees[t])
        }, r.Dependent.comparisons = {
            RegExp: function(e, t) {
                return e.test(t)
            },
            Function: function(e, t) {
                return e(t)
            },
            Number: function(e, t) {
                return "string" == typeof t ? n(e.toString(), t) : n(e, t)
            }
        }, r.Dependent.prototype = {
            initializeDependee: function(e, t) {
                var n;
                this.values[e] = {};
                for (var i in t)
                    if (t.hasOwnProperty(i)) {
                        if (n = t[i], -1 === $.inArray(n, t)) continue;
                        n = r.State.sanitize(n), this.values[e][n.name] = null, $(e).bind("state:" + n, $.proxy(function(t) {
                            this.update(e, n, t.value)
                        }, this)), new r.Trigger({
                            selector: e,
                            state: n
                        })
                    }
            },
            compare: function(e, t, i) {
                var o = this.values[t][i.name];
                return e.constructor.name in r.Dependent.comparisons ? r.Dependent.comparisons[e.constructor.name](e, o) : n(e, o)
            },
            update: function(e, t, n) {
                n !== this.values[e][t.name] && (this.values[e][t.name] = n, this.reevaluate())
            },
            reevaluate: function() {
                var e = this.verifyConstraints(this.constraints);
                e !== this.oldValue && (this.oldValue = e, e = t(e, this.state.invert), this.element.trigger({
                    type: "state:" + this.state,
                    value: e,
                    trigger: !0
                }))
            },
            verifyConstraints: function(t, n) {
                var r;
                if ($.isArray(t)) {
                    for (var i = -1 === $.inArray("xor", t), o = 0, s = t.length; s > o; o++)
                        if ("xor" != t[o]) {
                            var a = this.checkConstraints(t[o], n, o);
                            if (a && (i || r)) return i;
                            r = r || a
                        }
                } else if ($.isPlainObject(t))
                    for (var l in t)
                        if (t.hasOwnProperty(l) && (r = e(r, this.checkConstraints(t[l], n, l)), r === !1)) return !1;
                return r
            },
            checkConstraints: function(e, n, i) {
                return "string" != typeof i || /[0-9]/.test(i[0]) ? i = null : "undefined" == typeof n && (n = i, i = null), null !== i ? (i = r.State.sanitize(i), t(this.compare(e, n, i), i.invert)) : this.verifyConstraints(e, n)
            },
            getDependees: function() {
                var e = {},
                    t = this.compare;
                return this.compare = function(t, n, r) {
                    (e[n] || (e[n] = [])).push(r.name)
                }, this.verifyConstraints(this.constraints), this.compare = t, e
            }
        }, r.Trigger = function(e) {
            $.extend(this, e), this.state in r.Trigger.states && (this.element = $(this.selector), this.element.data("trigger:" + this.state) || this.initialize())
        }, r.Trigger.prototype = {
            initialize: function() {
                var e = r.Trigger.states[this.state];
                if ("function" == typeof e) e.call(window, this.element);
                else
                    for (var t in e) e.hasOwnProperty(t) && this.defaultTrigger(t, e[t]);
                this.element.data("trigger:" + this.state, !0)
            },
            defaultTrigger: function(e, t) {
                var n = t.call(this.element);
                this.element.bind(e, $.proxy(function(e) {
                    var r = t.call(this.element, e);
                    n !== r && (this.element.trigger({
                        type: "state:" + this.state,
                        value: r,
                        oldValue: n
                    }), n = r)
                }, this)), r.postponed.push($.proxy(function() {
                    this.element.trigger({
                        type: "state:" + this.state,
                        value: n,
                        oldValue: null
                    })
                }, this))
            }
        }, r.Trigger.states = {
            empty: {
                keyup: function() {
                    return "" == this.val()
                }
            },
            checked: {
                change: function() {
                    return this.is(":checked")
                }
            },
            value: {
                keyup: function() {
                    return this.length > 1 ? this.filter(":checked").val() || !1 : this.val()
                },
                change: function() {
                    return this.length > 1 ? this.filter(":checked").val() || !1 : this.val()
                }
            },
            collapsed: {
                collapsed: function(e) {
                    return "undefined" != typeof e && "value" in e ? e.value : this.is(".collapsed")
                }
            }
        }, r.State = function(e) {
            for (this.pristine = this.name = e;;) {
                for (;
                    "!" == this.name.charAt(0);) this.name = this.name.substring(1), this.invert = !this.invert;
                if (!(this.name in r.State.aliases)) break;
                this.name = r.State.aliases[this.name]
            }
        }, r.State.sanitize = function(e) {
            return e instanceof r.State ? e : new r.State(e)
        }, r.State.aliases = {
            enabled: "!disabled",
            invisible: "!visible",
            invalid: "!valid",
            untouched: "!touched",
            optional: "!required",
            filled: "!empty",
            unchecked: "!checked",
            irrelevant: "!relevant",
            expanded: "!collapsed",
            readwrite: "!readonly"
        }, r.State.prototype = {
            invert: !1,
            toString: function() {
                return this.name
            }
        }, $(document).bind("state:disabled", function(e) {
            e.trigger && $(e.target).attr("disabled", e.value).closest(".form-item, .form-submit, .form-wrapper").toggleClass("form-disabled", e.value).find("select, input, textarea").attr("disabled", e.value)
        }), $(document).bind("state:required", function(e) {
            e.trigger && (e.value ? $(e.target).closest(".form-item, .form-wrapper").find("label").append('<span class="form-required">*</span>') : $(e.target).closest(".form-item, .form-wrapper").find("label .form-required").remove())
        }), $(document).bind("state:visible", function(e) {
            e.trigger && $(e.target).closest(".form-item, .form-submit, .form-wrapper").toggle(e.value)
        }), $(document).bind("state:checked", function(e) {
            e.trigger && $(e.target).attr("checked", e.value)
        }), $(document).bind("state:collapsed", function(e) {
            e.trigger && $(e.target).is(".collapsed") !== e.value && $("> legend a", e.target).click()
        })
    }(jQuery), window.Modernizr = function(e, t, n) {
        function r(e) {
            g.cssText = e
        }

        function i(e, t) {
            return r(b.join(e + ";") + (t || ""))
        }

        function o(e, t) {
            return typeof e === t
        }

        function s(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!s(i, "-") && g[i] !== n) return "pfx" == t ? i : !0
            }
            return !1
        }

        function l(e, t, r) {
            for (var i in e) {
                var s = t[e[i]];
                if (s !== n) return r === !1 ? e[i] : o(s, "function") ? s.bind(r || t) : s
            }
            return !1
        }

        function u(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                i = (e + " " + x.join(r + " ") + r).split(" ");
            return o(t, "string") || o(t, "undefined") ? a(i, t) : (i = (e + " " + w.join(r + " ") + r).split(" "), l(i, t, n))
        }
        var c = "2.8.3",
            d = {},
            f = !0,
            p = t.documentElement,
            h = "modernizr",
            m = t.createElement(h),
            g = m.style,
            v, y = {}.toString,
            b = " -webkit- -moz- -o- -ms- ".split(" "),
            _ = "Webkit Moz O ms",
            x = _.split(" "),
            w = _.toLowerCase().split(" "),
            S = {
                svg: "http://www.w3.org/2000/svg"
            },
            T = {},
            C = {},
            k = {},
            D = [],
            N = D.slice,
            E, A = function(e, n, r, i) {
                var o, s, a, l, u = t.createElement("div"),
                    c = t.body,
                    d = c || t.createElement("body");
                if (parseInt(r, 10))
                    for (; r--;) a = t.createElement("div"), a.id = i ? i[r] : h + (r + 1), u.appendChild(a);
                return o = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), u.id = h, (c ? u : d).innerHTML += o, d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = p.style.overflow, p.style.overflow = "hidden", p.appendChild(d)), s = n(u, e), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), p.style.overflow = l), !!s
            },
            P = {}.hasOwnProperty,
            j;
        j = o(P, "undefined") || o(P.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return P.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function M(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = N.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var o = new i,
                            s = t.apply(o, n.concat(N.call(arguments)));
                        return Object(s) === s ? s : o
                    }
                    return t.apply(e, n.concat(N.call(arguments)))
                };
            return r
        }), T.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : A(["@media (", b.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        }, T.boxshadow = function() {
            return u("boxShadow")
        }, T.csstransforms = function() {
            return !!u("transform")
        }, T.csstransitions = function() {
            return u("transition")
        }, T.svg = function() {
            return !!t.createElementNS && !!t.createElementNS(S.svg, "svg").createSVGRect
        };
        for (var I in T) j(T, I) && (E = I.toLowerCase(), d[E] = T[I](), D.push((d[E] ? "" : "no-") + E));
        return d.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) j(e, r) && d.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), d[e] !== n) return d;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof f && f && (p.className += " " + (t ? "" : "no-") + e), d[e] = t
                }
                return d
            }, r(""), m = v = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function i(e) {
                    var t = g[e[h]];
                    return t || (t = {}, m++, e[h] = m, g[m] = t), t
                }

                function o(e, n, r) {
                    if (n || (n = t), v) return n.createElement(e);
                    r || (r = i(n));
                    var o;
                    return o = r.cache[e] ? r.cache[e].cloneNode() : f.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || d.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
                }

                function s(e, n) {
                    if (e || (e = t), v) return e.createDocumentFragment();
                    n = n || i(e);
                    for (var o = n.frag.cloneNode(), s = 0, a = r(), l = a.length; l > s; s++) o.createElement(a[s]);
                    return o
                }

                function a(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? o(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function l(e) {
                    e || (e = t);
                    var r = i(e);
                    return !y.shivCSS || p || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), v || a(e, r), e
                }
                var u = "3.7.0",
                    c = e.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p, h = "_html5shiv",
                    m = 0,
                    g = {},
                    v;
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", p = "hidden" in e, v = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        p = !0, v = !0
                    }
                }();
                var y = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: u,
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: v,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: s
                };
                e.html5 = y, l(t)
            }(this, t), d._version = c, d._prefixes = b, d._domPrefixes = w, d._cssomPrefixes = x, d.testProp = function(e) {
                return a([e])
            }, d.testAllProps = u, d.testStyles = A, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + D.join(" ") : ""), d
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == h.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function o() {}

        function s(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function a() {
            var e = m.shift();
            g = 1, e ? e.t ? f(function() {
                ("c" == e.t ? D.injectCss : D.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), a()) : g = 0
        }

        function l(e, n, r, i, o, l, u) {
            function c(t) {
                if (!h && s(d.readyState) && (_.r = h = 1, !g && a(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && f(function() {
                        b.removeChild(d)
                    }, 50);
                    for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
                }
            }
            var u = u || D.errorTimeout,
                d = t.createElement(e),
                h = 0,
                v = 0,
                _ = {
                    t: r,
                    s: n,
                    e: o,
                    a: l,
                    x: u
                };
            1 === T[n] && (v = 1, T[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                c.call(this, v)
            }, m.splice(i, 0, _), "img" != e && (v || 2 === T[n] ? (b.insertBefore(d, y ? null : p), f(c, u)) : T[n].push(d))
        }

        function u(e, t, n, r, o) {
            return g = 0, t = t || "j", i(e) ? l("c" == t ? x : _, e, t, this.i++, n, r, o) : (m.splice(this.i++, 0, e), 1 == m.length && a()), this
        }

        function c() {
            var e = D;
            return e.loader = {
                load: u,
                i: 0
            }, e
        }
        var d = t.documentElement,
            f = e.setTimeout,
            p = t.getElementsByTagName("script")[0],
            h = {}.toString,
            m = [],
            g = 0,
            v = "MozAppearance" in d.style,
            y = v && !!t.createRange().compareNode,
            b = y ? d : p.parentNode,
            d = e.opera && "[object Opera]" == h.call(e.opera),
            d = !!t.attachEvent && !d,
            _ = v ? "object" : d ? "script" : "img",
            x = d ? "script" : _,
            w = Array.isArray || function(e) {
                return "[object Array]" == h.call(e)
            },
            S = [],
            T = {},
            C = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            },
            k, D;
        D = function(e) {
            function t(e) {
                var e = e.split("!"),
                    t = S.length,
                    n = e.pop(),
                    r = e.length,
                    n = {
                        url: n,
                        origUrl: n,
                        prefixes: e
                    },
                    i, o, s;
                for (o = 0; r > o; o++) s = e[o].split("="), (i = C[s.shift()]) && (n = i(n, s));
                for (o = 0; t > o; o++) n = S[o](n);
                return n
            }

            function s(e, i, o, s, a) {
                var l = t(e),
                    u = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (i && (i = r(i) ? i : i[e] || i[s] || i[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, i, o, s, a) : (T[l.url] ? l.noexec = !0 : T[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (r(i) || r(u)) && o.load(function() {
                    c(), i && i(l.origUrl, a, s), u && u(l.origUrl, a, s), T[l.url] = 2
                })))
            }

            function a(e, t) {
                function n(e, n) {
                    if (e) {
                        if (i(e)) n || (u = function() {
                            var e = [].slice.call(arguments);
                            c.apply(this, e), d()
                        }), s(e, u, t, 0, a);
                        else if (Object(e) === e)
                            for (p in f = function() {
                                    var t = 0,
                                        n;
                                    for (n in e) e.hasOwnProperty(n) && t++;
                                    return t
                                }(), e) e.hasOwnProperty(p) && (!n && !--f && (r(u) ? u = function() {
                                var e = [].slice.call(arguments);
                                c.apply(this, e), d()
                            } : u[p] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), d()
                                }
                            }(c[p])), s(e[p], u, t, p, a))
                    } else !n && d()
                }
                var a = !!e.test,
                    l = e.load || e.both,
                    u = e.callback || o,
                    c = u,
                    d = e.complete || o,
                    f, p;
                n(a ? e.yep : e.nope, !!l), l && n(l)
            }
            var l, u, d = this.yepnope.loader;
            if (i(e)) s(e, 0, d, 0);
            else if (w(e))
                for (l = 0; l < e.length; l++) u = e[l], i(u) ? s(u, 0, d, 0) : w(u) ? D(u) : Object(u) === u && a(u, d);
            else Object(e) === e && a(e, d)
        }, D.addPrefix = function(e, t) {
            C[e] = t
        }, D.addFilter = function(e) {
            S.push(e)
        }, D.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", k = function() {
            t.removeEventListener("DOMContentLoaded", k, 0), t.readyState = "complete"
        }, 0)), e.yepnope = c(), e.yepnope.executeStack = a, e.yepnope.injectJs = function(e, n, r, i, l, u) {
            var c = t.createElement("script"),
                d, h, i = i || D.errorTimeout;
            c.src = e;
            for (h in r) c.setAttribute(h, r[h]);
            n = u ? a : n || o, c.onreadystatechange = c.onload = function() {
                !d && s(c.readyState) && (d = 1, n(), c.onload = c.onreadystatechange = null)
            }, f(function() {
                d || (d = 1, n(1))
            }, i), l ? c.onload() : p.parentNode.insertBefore(c, p)
        }, e.yepnope.injectCss = function(e, n, r, i, s, l) {
            var i = t.createElement("link"),
                u, n = l ? a : n || o;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (u in r) i.setAttribute(u, r[u]);
            s || (p.parentNode.insertBefore(i, p), f(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(e) {
        "use strict";
        "object" == typeof exports ? e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function($) {
        "use strict";
        var e = function(e) {
            if (e = e || "once", "string" != typeof e) throw new Error("The jQuery Once id parameter must be a string");
            return e
        };
        $.fn.once = function(t) {
            var n = "jquery-once-" + e(t);
            return this.filter(function() {
                return $(this).data(n) !== !0
            }).data(n, !0)
        }, $.fn.removeOnce = function(t) {
            return this.findOnce(t).removeData("jquery-once-" + e(t))
        }, $.fn.findOnce = function(t) {
            var n = "jquery-once-" + e(t);
            return this.filter(function() {
                return $(this).data(n) === !0
            })
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function($) {
        function e(e) {
            return s.raw ? e : encodeURIComponent(e)
        }

        function t(e) {
            return s.raw ? e : decodeURIComponent(e)
        }

        function n(t) {
            return e(s.json ? JSON.stringify(t) : String(t))
        }

        function r(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(o, " ")), s.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function i(e, t) {
            var n = s.raw ? e : r(e);
            return $.isFunction(t) ? t(n) : n
        }
        var o = /\+/g,
            s = $.cookie = function(r, o, a) {
                if (void 0 !== o && !$.isFunction(o)) {
                    if (a = $.extend({}, s.defaults, a), "number" == typeof a.expires) {
                        var l = a.expires,
                            u = a.expires = new Date;
                        u.setTime(+u + 864e5 * l)
                    }
                    return document.cookie = [e(r), "=", n(o), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
                }
                for (var c = r ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, p = d.length; p > f; f++) {
                    var h = d[f].split("="),
                        m = t(h.shift()),
                        g = h.join("=");
                    if (r && r === m) {
                        c = i(g, o);
                        break
                    }
                    r || void 0 === (g = i(g)) || (c[m] = g)
                }
                return c
            };
        s.defaults = {}, $.removeCookie = function(e, t) {
            return void 0 === $.cookie(e) ? !1 : ($.cookie(e, "", $.extend({}, t, {
                expires: -1
            })), !$.cookie(e))
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
    }(function($) {
        "use strict";

        function e(e) {
            var t = e.data;
            e.isDefaultPrevented() || (e.preventDefault(), $(e.target).ajaxSubmit(t))
        }

        function t(e) {
            var t = e.target,
                n = $(t);
            if (!n.is("[type=submit],[type=image]")) {
                var r = n.closest("[type=submit]");
                if (0 === r.length) return;
                t = r[0]
            }
            var i = this;
            if (i.clk = t, "image" == t.type)
                if (void 0 !== e.offsetX) i.clk_x = e.offsetX, i.clk_y = e.offsetY;
                else if ("function" == typeof $.fn.offset) {
                var o = n.offset();
                i.clk_x = e.pageX - o.left, i.clk_y = e.pageY - o.top
            } else i.clk_x = e.pageX - t.offsetLeft, i.clk_y = e.pageY - t.offsetTop;
            setTimeout(function() {
                i.clk = i.clk_x = i.clk_y = null
            }, 100)
        }

        function n() {
            if ($.fn.ajaxSubmit.debug) {
                var e = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)
            }
        }
        var r = {};
        r.fileapi = void 0 !== $("<input type='file'/>").get(0).files, r.formdata = void 0 !== window.FormData;
        var i = !!$.fn.prop;
        $.fn.attr2 = function() {
            if (!i) return this.attr.apply(this, arguments);
            var e = this.prop.apply(this, arguments);
            return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
        }, $.fn.ajaxSubmit = function(e) {
            function t(t) {
                var n = $.param(t, e.traditional).split("&"),
                    r = n.length,
                    i = [],
                    o, s;
                for (o = 0; r > o; o++) n[o] = n[o].replace(/\+/g, " "), s = n[o].split("="), i.push([decodeURIComponent(s[0]), decodeURIComponent(s[1])]);
                return i
            }

            function o(n) {
                for (var r = new FormData, i = 0; i < n.length; i++) r.append(n[i].name, n[i].value);
                if (e.extraData) {
                    var o = t(e.extraData);
                    for (i = 0; i < o.length; i++) o[i] && r.append(o[i][0], o[i][1])
                }
                e.data = null;
                var s = $.extend(!0, {}, $.ajaxSettings, e, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: a || "POST"
                });
                e.uploadProgress && (s.xhr = function() {
                    var t = $.ajaxSettings.xhr();
                    return t.upload && t.upload.addEventListener("progress", function(t) {
                        var n = 0,
                            r = t.loaded || t.position,
                            i = t.total;
                        t.lengthComputable && (n = Math.ceil(r / i * 100)), e.uploadProgress(t, r, i, n)
                    }, !1), t
                }), s.data = null;
                var l = s.beforeSend;
                return s.beforeSend = function(t, n) {
                    e.formData ? n.data = e.formData : n.data = r, l && l.call(this, t, n)
                }, $.ajax(s)
            }

            function s(t) {
                function r(e) {
                    var t = null;
                    try {
                        e.contentWindow && (t = e.contentWindow.document)
                    } catch (r) {
                        n("cannot get iframe.contentWindow document: " + r)
                    }
                    if (t) return t;
                    try {
                        t = e.contentDocument ? e.contentDocument : e.document
                    } catch (r) {
                        n("cannot get iframe.contentDocument: " + r), t = e.document
                    }
                    return t
                }

                function o() {
                    function e() {
                        try {
                            var t = r(v).readyState;
                            n("state = " + t), t && "uninitialized" == t.toLowerCase() && setTimeout(e, 50)
                        } catch (i) {
                            n("Server abort: ", i, " (", i.name, ")"), s(C), w && clearTimeout(w), w = void 0
                        }
                    }
                    var t = c.attr2("target"),
                        i = c.attr2("action");
                    l.setAttribute("target", m), (!a || /post/i.test(a)) && l.setAttribute("method", "POST"), i != f.url && l.setAttribute("action", f.url), f.skipEncodingOverride || a && !/post/i.test(a) || c.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), f.timeout && (w = setTimeout(function() {
                        x = !0, s(T)
                    }, f.timeout));
                    var o = [];
                    try {
                        if (f.extraData)
                            for (var u in f.extraData) f.extraData.hasOwnProperty(u) && ($.isPlainObject(f.extraData[u]) && f.extraData[u].hasOwnProperty("name") && f.extraData[u].hasOwnProperty("value") ? o.push($('<input type="hidden" name="' + f.extraData[u].name + '">').val(f.extraData[u].value).appendTo(l)[0]) : o.push($('<input type="hidden" name="' + u + '">').val(f.extraData[u]).appendTo(l)[0]));
                        f.iframeTarget || g.appendTo("body"), v.attachEvent ? v.attachEvent("onload", s) : v.addEventListener("load", s, !1), setTimeout(e, 15);
                        try {
                            l.submit()
                        } catch (d) {
                            var p = document.createElement("form").submit;
                            p.apply(l)
                        }
                    } finally {
                        l.setAttribute("action", i), t ? l.setAttribute("target", t) : c.removeAttr("target"), $(o).remove()
                    }
                }

                function s(e) {
                    if (!y.aborted && !P) {
                        if (E = r(v), E || (n("cannot access response document"), e = C), e === T && y) return y.abort("timeout"), void S.reject(y, "timeout");
                        if (e == C && y) return y.abort("server abort"), void S.reject(y, "error", "server abort");
                        if (E && E.location.href != f.iframeSrc || x) {
                            v.detachEvent ? v.detachEvent("onload", s) : v.removeEventListener("load", s, !1);
                            var t = "success",
                                i;
                            try {
                                if (x) throw "timeout";
                                var o = "xml" == f.dataType || E.XMLDocument || $.isXMLDoc(E);
                                if (n("isXml=" + o), !o && window.opera && (null === E.body || !E.body.innerHTML) && --A) return n("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                                var a = E.body ? E.body : E.documentElement;
                                y.responseText = a ? a.innerHTML : null, y.responseXML = E.XMLDocument ? E.XMLDocument : E, o && (f.dataType = "xml"), y.getResponseHeader = function(e) {
                                    var t = {
                                        "content-type": f.dataType
                                    };
                                    return t[e.toLowerCase()]
                                }, a && (y.status = Number(a.getAttribute("status")) || y.status, y.statusText = a.getAttribute("statusText") || y.statusText);
                                var l = (f.dataType || "").toLowerCase(),
                                    u = /(json|script|text)/.test(l);
                                if (u || f.textarea) {
                                    var c = E.getElementsByTagName("textarea")[0];
                                    if (c) y.responseText = c.value, y.status = Number(c.getAttribute("status")) || y.status, y.statusText = c.getAttribute("statusText") || y.statusText;
                                    else if (u) {
                                        var d = E.getElementsByTagName("pre")[0],
                                            p = E.getElementsByTagName("body")[0];
                                        d ? y.responseText = d.textContent ? d.textContent : d.innerText : p && (y.responseText = p.textContent ? p.textContent : p.innerText)
                                    }
                                } else "xml" == l && !y.responseXML && y.responseText && (y.responseXML = j(y.responseText));
                                try {
                                    N = M(y, l, f)
                                } catch (m) {
                                    t = "parsererror", y.error = i = m || t
                                }
                            } catch (m) {
                                n("error caught: ", m), t = "error", y.error = i = m || t
                            }
                            y.aborted && (n("upload aborted"), t = null), y.status && (t = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"), "success" === t ? (f.success && f.success.call(f.context, N, "success", y), S.resolve(y.responseText, "success", y), h && $.event.trigger("ajaxSuccess", [y, f])) : t && (void 0 === i && (i = y.statusText), f.error && f.error.call(f.context, y, t, i), S.reject(y, "error", i), h && $.event.trigger("ajaxError", [y, f, i])), h && $.event.trigger("ajaxComplete", [y, f]), h && !--$.active && $.event.trigger("ajaxStop"), f.complete && f.complete.call(f.context, y, t), P = !0, f.timeout && clearTimeout(w), setTimeout(function() {
                                f.iframeTarget ? g.attr("src", f.iframeSrc) : g.remove(), y.responseXML = null
                            }, 100)
                        }
                    }
                }
                var l = c[0],
                    u, d, f, h, m, g, v, y, b, _, x, w, S = $.Deferred();
                if (S.abort = function(e) {
                        y.abort(e)
                    }, t)
                    for (d = 0; d < p.length; d++) u = $(p[d]), i ? u.prop("disabled", !1) : u.removeAttr("disabled");
                if (f = $.extend(!0, {}, $.ajaxSettings, e), f.context = f.context || f, m = "jqFormIO" + (new Date).getTime(), f.iframeTarget ? (g = $(f.iframeTarget), _ = g.attr2("name"), _ ? m = _ : g.attr2("name", m)) : (g = $('<iframe name="' + m + '" src="' + f.iframeSrc + '" />'), g.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), v = g[0], y = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(e) {
                            var t = "timeout" === e ? "timeout" : "aborted";
                            n("aborting upload... " + t), this.aborted = 1;
                            try {
                                v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
                            } catch (r) {}
                            g.attr("src", f.iframeSrc), y.error = t, f.error && f.error.call(f.context, y, t, e), h && $.event.trigger("ajaxError", [y, f, t]), f.complete && f.complete.call(f.context, y, t)
                        }
                    }, h = f.global, h && 0 === $.active++ && $.event.trigger("ajaxStart"), h && $.event.trigger("ajaxSend", [y, f]), f.beforeSend && f.beforeSend.call(f.context, y, f) === !1) return f.global && $.active--, S.reject(), S;
                if (y.aborted) return S.reject(), S;
                b = l.clk, b && (_ = b.name, _ && !b.disabled && (f.extraData = f.extraData || {}, f.extraData[_] = b.value, "image" == b.type && (f.extraData[_ + ".x"] = l.clk_x, f.extraData[_ + ".y"] = l.clk_y)));
                var T = 1,
                    C = 2,
                    k = $("meta[name=csrf-token]").attr("content"),
                    D = $("meta[name=csrf-param]").attr("content");
                D && k && (f.extraData = f.extraData || {}, f.extraData[D] = k), f.forceSync ? o() : setTimeout(o, 10);
                var N, E, A = 50,
                    P, j = $.parseXML || function(e, t) {
                        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                    },
                    I = $.parseJSON || function(e) {
                        return window.eval("(" + e + ")")
                    },
                    M = function(e, t, n) {
                        var r = e.getResponseHeader("content-type") || "",
                            i = "xml" === t || !t && r.indexOf("xml") >= 0,
                            o = i ? e.responseXML : e.responseText;
                        return i && "parsererror" === o.documentElement.nodeName && $.error && $.error("parsererror"), n && n.dataFilter && (o = n.dataFilter(o, t)), "string" == typeof o && ("json" === t || !t && r.indexOf("json") >= 0 ? o = I(o) : ("script" === t || !t && r.indexOf("javascript") >= 0) && $.globalEval(o)), o
                    };
                return S
            }
            if (!this.length) return n("ajaxSubmit: skipping submit process - no element selected"), this;
            var a, l, u, c = this;
            "function" == typeof e ? e = {
                success: e
            } : void 0 === e && (e = {}), a = e.type || this.attr2("method"), l = e.url || this.attr2("action"), u = "string" == typeof l ? $.trim(l) : "", u = u || window.location.href || "", u && (u = (u.match(/^([^#]+)/) || [])[1]), e = $.extend(!0, {
                url: u,
                success: $.ajaxSettings.success,
                type: a || $.ajaxSettings.type,
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, e);
            var d = {};
            if (this.trigger("form-pre-serialize", [this, e, d]), d.veto) return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (e.beforeSerialize && e.beforeSerialize(this, e) === !1) return n("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var f = e.traditional;
            void 0 === f && (f = $.ajaxSettings.traditional);
            var p = [],
                h, m = this.formToArray(e.semantic, p);
            if (e.data && (e.extraData = e.data, h = $.param(e.data, f)), e.beforeSubmit && e.beforeSubmit(m, this, e) === !1) return n("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [m, this, e, d]), d.veto) return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var g = $.param(m, f);
            h && (g = g ? g + "&" + h : h), "GET" == e.type.toUpperCase() ? (e.url += (e.url.indexOf("?") >= 0 ? "&" : "?") + g, e.data = null) : e.data = g;
            var v = [];
            if (e.resetForm && v.push(function() {
                    c.resetForm()
                }), e.clearForm && v.push(function() {
                    c.clearForm(e.includeHidden)
                }), !e.dataType && e.target) {
                var y = e.success || function() {};
                v.push(function(t) {
                    var n = e.replaceTarget ? "replaceWith" : "html";
                    $(e.target)[n](t).each(y, arguments)
                })
            } else e.success && v.push(e.success);
            if (e.success = function(t, n, r) {
                    for (var i = e.context || this, o = 0, s = v.length; s > o; o++) v[o].apply(i, [t, n, r || c, c])
                }, e.error) {
                var b = e.error;
                e.error = function(t, n, r) {
                    var i = e.context || this;
                    b.apply(i, [t, n, r, c])
                }
            }
            if (e.complete) {
                var _ = e.complete;
                e.complete = function(t, n) {
                    var r = e.context || this;
                    _.apply(r, [t, n, c])
                }
            }
            var x = $("input[type=file]:enabled", this).filter(function() {
                    return "" !== $(this).val()
                }),
                w = x.length > 0,
                S = "multipart/form-data",
                T = c.attr("enctype") == S || c.attr("encoding") == S,
                C = r.fileapi && r.formdata;
            n("fileAPI :" + C);
            var k = (w || T) && !C,
                D;
            e.iframe !== !1 && (e.iframe || k) ? e.closeKeepAlive ? $.get(e.closeKeepAlive, function() {
                D = s(m)
            }) : D = s(m) : D = (w || T) && C ? o(m) : $.ajax(e), c.removeData("jqxhr").data("jqxhr", D);
            for (var N = 0; N < p.length; N++) p[N] = null;
            return this.trigger("form-submit-notify", [this, e]), this
        }, $.fn.ajaxForm = function(r) {
            if (r = r || {}, r.delegation = r.delegation && $.isFunction($.fn.on), !r.delegation && 0 === this.length) {
                var i = {
                    s: this.selector,
                    c: this.context
                };
                return !$.isReady && i.s ? (n("DOM not ready, queuing ajaxForm"), $(function() {
                    $(i.s, i.c).ajaxForm(r)
                }), this) : (n("terminating; zero elements found by selector" + ($.isReady ? "" : " (DOM not ready)")), this)
            }
            return r.delegation ? ($(document).off("submit.form-plugin", this.selector, e).off("click.form-plugin", this.selector, t).on("submit.form-plugin", this.selector, r, e).on("click.form-plugin", this.selector, r, t), this) : this.ajaxFormUnbind().bind("submit.form-plugin", r, e).bind("click.form-plugin", r, t)
        }, $.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, $.fn.formToArray = function(e, t) {
            var n = [];
            if (0 === this.length) return n;
            var i = this[0],
                o = e ? i.getElementsByTagName("*") : i.elements;
            if (!o) return n;
            var s, a, l, u, c, d, f;
            for (s = 0, d = o.length; d > s; s++)
                if (c = o[s], l = c.name, l && !c.disabled)
                    if (e && i.clk && "image" == c.type) i.clk == c && (n.push({
                        name: l,
                        value: $(c).val(),
                        type: c.type
                    }), n.push({
                        name: l + ".x",
                        value: i.clk_x
                    }, {
                        name: l + ".y",
                        value: i.clk_y
                    }));
                    else if (u = $.fieldValue(c, !0), u && u.constructor == Array)
                for (t && t.push(c), a = 0, f = u.length; f > a; a++) n.push({
                    name: l,
                    value: u[a]
                });
            else if (r.fileapi && "file" == c.type) {
                t && t.push(c);
                var p = c.files;
                if (p.length)
                    for (a = 0; a < p.length; a++) n.push({
                        name: l,
                        value: p[a],
                        type: c.type
                    });
                else n.push({
                    name: l,
                    value: "",
                    type: c.type
                })
            } else null !== u && "undefined" != typeof u && (t && t.push(c), n.push({
                name: l,
                value: u,
                type: c.type,
                required: c.required
            }));
            if (!e && i.clk) {
                var h = $(i.clk),
                    m = h[0];
                l = m.name, l && !m.disabled && "image" == m.type && (n.push({
                    name: l,
                    value: h.val()
                }), n.push({
                    name: l + ".x",
                    value: i.clk_x
                }, {
                    name: l + ".y",
                    value: i.clk_y
                }))
            }
            return n
        }, $.fn.formSerialize = function(e) {
            return $.param(this.formToArray(e))
        }, $.fn.fieldSerialize = function(e) {
            var t = [];
            return this.each(function() {
                var n = this.name;
                if (n) {
                    var r = $.fieldValue(this, e);
                    if (r && r.constructor == Array)
                        for (var i = 0, o = r.length; o > i; i++) t.push({
                            name: n,
                            value: r[i]
                        });
                    else null !== r && "undefined" != typeof r && t.push({
                        name: this.name,
                        value: r
                    })
                }
            }), $.param(t)
        }, $.fn.fieldValue = function(e) {
            for (var t = [], n = 0, r = this.length; r > n; n++) {
                var i = this[n],
                    o = $.fieldValue(i, e);
                null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? $.merge(t, o) : t.push(o))
            }
            return t
        }, $.fieldValue = function(e, t) {
            var n = e.name,
                r = e.type,
                i = e.tagName.toLowerCase();
            if (void 0 === t && (t = !0), t && (!n || e.disabled || "reset" == r || "button" == r || ("checkbox" == r || "radio" == r) && !e.checked || ("submit" == r || "image" == r) && e.form && e.form.clk != e || "select" == i && -1 == e.selectedIndex)) return null;
            if ("select" == i) {
                var o = e.selectedIndex;
                if (0 > o) return null;
                for (var s = [], a = e.options, l = "select-one" == r, u = l ? o + 1 : a.length, c = l ? o : 0; u > c; c++) {
                    var d = a[c];
                    if (d.selected) {
                        var f = d.value;
                        if (f || (f = d.attributes && d.attributes.value && !d.attributes.value.specified ? d.text : d.value), l) return f;
                        s.push(f)
                    }
                }
                return s
            }
            return $(e).val()
        }, $.fn.clearForm = function(e) {
            return this.each(function() {
                $("input,select,textarea", this).clearFields(e)
            })
        }, $.fn.clearFields = $.fn.clearInputs = function(e) {
            var t = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var n = this.type,
                    r = this.tagName.toLowerCase();
                t.test(n) || "textarea" == r ? this.value = "" : "checkbox" == n || "radio" == n ? this.checked = !1 : "select" == r ? this.selectedIndex = -1 : "file" == n ? /MSIE/.test(navigator.userAgent) ? $(this).replaceWith($(this).clone(!0)) : $(this).val("") : e && (e === !0 && /hidden/.test(n) || "string" == typeof e && $(this).is(e)) && (this.value = "")
            })
        }, $.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, $.fn.enable = function(e) {
            return void 0 === e && (e = !0), this.each(function() {
                this.disabled = !e
            })
        }, $.fn.selected = function(e) {
            return void 0 === e && (e = !0), this.each(function() {
                var t = this.type;
                if ("checkbox" == t || "radio" == t) this.checked = e;
                else if ("option" == this.tagName.toLowerCase()) {
                    var n = $(this).parent("select");
                    e && n[0] && "select-one" == n[0].type && n.find("option").selected(!1), this.selected = e
                }
            })
        }, $.fn.ajaxSubmit.debug = !1
    }), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(e, t, n, r, i) {
            return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
        },
        easeInQuad: function(e, t, n, r, i) {
            return r * (t /= i) * t + n
        },
        easeOutQuad: function(e, t, n, r, i) {
            return -r * (t /= i) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, r, i) {
            return r * (t /= i) * t * t + n
        },
        easeOutCubic: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, r, i) {
            return -r * ((t = t / i - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, r, i) {
            return r * (t /= i) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, r, i) {
            return r * ((t = t / i - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, r, i) {
            return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
        },
        easeOutSine: function(e, t, n, r, i) {
            return r * Math.sin(t / i * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, r, i) {
            return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
        },
        easeInExpo: function(e, t, n, r, i) {
            return 0 == t ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
        },
        easeOutExpo: function(e, t, n, r, i) {
            return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
        },
        easeInOutExpo: function(e, t, n, r, i) {
            return 0 == t ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, r, i) {
            return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, r, i) {
            return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, r, i) {
            return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, r, i) {
            var o = 1.70158,
                s = 0,
                a = r;
            if (0 == t) return n;
            if (1 == (t /= i)) return n + r;
            if (s || (s = .3 * i), a < Math.abs(r)) {
                a = r;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(r / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s)) + n
        },
        easeOutElastic: function(e, t, n, r, i) {
            var o = 1.70158,
                s = 0,
                a = r;
            if (0 == t) return n;
            if (1 == (t /= i)) return n + r;
            if (s || (s = .3 * i), a < Math.abs(r)) {
                a = r;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(r / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * i - o) * (2 * Math.PI) / s) + r + n
        },
        easeInOutElastic: function(e, t, n, r, i) {
            var o = 1.70158,
                s = 0,
                a = r;
            if (0 == t) return n;
            if (2 == (t /= i / 2)) return n + r;
            if (s || (s = i * (.3 * 1.5)), a < Math.abs(r)) {
                a = r;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(r / a);
            return 1 > t ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s)) + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - o) * (2 * Math.PI) / s) * .5 + r + n
        },
        easeInBack: function(e, t, n, r, i, o) {
            return void 0 == o && (o = 1.70158), r * (t /= i) * t * ((o + 1) * t - o) + n
        },
        easeOutBack: function(e, t, n, r, i, o) {
            return void 0 == o && (o = 1.70158), r * ((t = t / i - 1) * t * ((o + 1) * t + o) + 1) + n
        },
        easeInOutBack: function(e, t, n, r, i, o) {
            return void 0 == o && (o = 1.70158), (t /= i / 2) < 1 ? r / 2 * (t * t * (((o *= 1.525) + 1) * t - o)) + n : r / 2 * ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
        },
        easeInBounce: function(e, t, n, r, i) {
            return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
        },
        easeOutBounce: function(e, t, n, r, i) {
            return (t /= i) < 1 / 2.75 ? r * (7.5625 * t * t) + n : 2 / 2.75 > t ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(e, t, n, r, i) {
            return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, r, i) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, r, i) + .5 * r + n
        }
    }),
    function($, e, t, n) {
        "use strict";
        var r = {
                minHeight: 0,
                elements: [],
                percentage: !0,
                userTiming: !0,
                pixelDepth: !0,
                nonInteraction: !0
            },
            i = $(e),
            o = [],
            s = 0,
            a, l, u;
        $.scrollDepth = function(n) {
            function c(e, t, r, i) {
                u ? (dataLayer.push({
                    event: "ScrollDistance",
                    eventCategory: "Scroll Depth",
                    eventAction: e,
                    eventLabel: t,
                    eventValue: 1,
                    eventNonInteraction: n.nonInteraction
                }), n.pixelDepth && arguments.length > 2 && r > s && (s = r, dataLayer.push({
                    event: "ScrollDistance",
                    eventCategory: "Scroll Depth",
                    eventAction: "Pixel Depth",
                    eventLabel: h(r),
                    eventValue: 1,
                    eventNonInteraction: n.nonInteraction
                })), n.userTiming && arguments.length > 3 && dataLayer.push({
                    event: "ScrollTiming",
                    eventCategory: "Scroll Depth",
                    eventAction: e,
                    eventLabel: t,
                    eventTiming: i
                })) : (a && (ga("send", "event", "Scroll Depth", e, t, 1, {
                    nonInteraction: n.nonInteraction ? 1 : 0
                }), n.pixelDepth && arguments.length > 2 && r > s && (s = r, ga("send", "event", "Scroll Depth", "Pixel Depth", h(r), 1, {
                    nonInteraction: n.nonInteraction ? 1 : 0
                })), n.userTiming && arguments.length > 3 && ga("send", "timing", "Scroll Depth", e, i, t)), l && (_gaq.push(["_trackEvent", "Scroll Depth", e, t, 1, n.nonInteraction]), n.pixelDepth && arguments.length > 2 && r > s && (s = r, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", h(r), 1, n.nonInteraction])), n.userTiming && arguments.length > 3 && _gaq.push(["_trackTiming", "Scroll Depth", e, i, t, 100])))
            }

            function d(e) {
                return {
                    "25%": parseInt(.25 * e, 10),
                    "50%": parseInt(.5 * e, 10),
                    "75%": parseInt(.75 * e, 10),
                    "100%": e - 5
                }
            }

            function f(e, t, n) {
                $.each(e, function(e, r) {
                    -1 === $.inArray(e, o) && t >= r && (c("Percentage", e, t, n), o.push(e))
                })
            }

            function p(e, t, n) {
                $.each(e, function(e, r) {
                    -1 === $.inArray(r, o) && $(r).length && t >= $(r).offset().top && (c("Elements", r, t, n), o.push(r))
                })
            }

            function h(e) {
                return (250 * Math.floor(e / 250)).toString()
            }

            function m(e, t) {
                var n, r, i, o = null,
                    s = 0,
                    a = function() {
                        s = new Date, o = null, i = e.apply(n, r)
                    };
                return function() {
                    var l = new Date;
                    s || (s = l);
                    var u = t - (l - s);
                    return n = this, r = arguments, 0 >= u ? (clearTimeout(o), o = null, s = l, i = e.apply(n, r)) : o || (o = setTimeout(a, u)), i
                }
            }
            var g = +new Date;
            n = $.extend({}, r, n), $(t).height() < n.minHeight || ("function" == typeof ga && (a = !0), "undefined" != typeof _gaq && "function" == typeof _gaq.push && (l = !0), "undefined" != typeof dataLayer && "function" == typeof dataLayer.push && (u = !0), n.percentage ? c("Percentage", "Baseline") : n.elements && c("Elements", "Baseline"), i.on("scroll.scrollDepth", m(function() {
                var r = $(t).height(),
                    s = e.innerHeight ? e.innerHeight : i.height(),
                    a = i.scrollTop() + s,
                    l = d(r),
                    u = +new Date - g;
                return o.length >= 4 + n.elements.length ? void i.off("scroll.scrollDepth") : (n.elements && p(n.elements, a, u), void(n.percentage && f(l, a, u)))
            }, 500)))
        }
    }(jQuery, window, document),
    function($) {
        "use strict";

        function e(e, t) {
            function n(e, t) {
                return '<div style="' + (i._isMove ? "" : e !== i.currSlideId ? i._opacityCSS : "z-index:0;") + '" class="rsSlide ' + (t || "") + '"></div>'
            }
            var r, i = this,
                o = window.navigator,
                s = o.userAgent.toLowerCase();
            i.uid = $.rsModules.uid++, i.ns = ".rs" + i.uid;
            var a = document.createElement("div").style,
                l = ["webkit", "Moz", "ms", "O"],
                u = "",
                c = 0,
                d;
            for (r = 0; r < l.length; r++) d = l[r], !u && d + "Transform" in a && (u = d), d = d.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[d + "RequestAnimationFrame"], window.cancelAnimationFrame = window[d + "CancelAnimationFrame"] || window[d + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                var n = (new Date).getTime(),
                    r = Math.max(0, 16 - (n - c)),
                    i = window.setTimeout(function() {
                        e(n + r)
                    }, r);
                return c = n + r, i
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            }), i.isIPAD = s.match(/(ipad)/), i.isIOS = i.isIPAD || s.match(/(iphone|ipod)/);
            var f = function(e) {
                    var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                p = f(s),
                h = {};
            if (p.browser && (h[p.browser] = !0, h.version = p.version), h.chrome && (h.webkit = !0), i._browser = h, i.isAndroid = s.indexOf("android") > -1, i.slider = $(e), i.ev = $(i), i._doc = $(document), i.st = $.extend({}, $.fn.royalSlider.defaults, t), i._currAnimSpeed = i.st.transitionSpeed, i._minPosOffset = 0, i.st.allowCSS3 && (!h.webkit || i.st.allowCSS3OnWebkit)) {
                var m = u + (u ? "T" : "t");
                i._useCSS3Transitions = m + "ransform" in a && m + "ransition" in a, i._useCSS3Transitions && (i._use3dTransform = u + (u ? "P" : "p") + "erspective" in a)
            }
            u = u.toLowerCase(), i._vendorPref = "-" + u + "-", i._slidesHorizontal = "vertical" === i.st.slidesOrientation ? !1 : !0, i._reorderProp = i._slidesHorizontal ? "left" : "top", i._sizeProp = i._slidesHorizontal ? "width" : "height", i._prevNavItemId = -1, i._isMove = "fade" === i.st.transitionType ? !1 : !0, i._isMove || (i.st.sliderDrag = !1, i._fadeZIndex = 10), i._opacityCSS = "z-index:0; display:none; opacity:0;", i._newSlideId = 0, i._sPosition = 0, i._nextSlidePos = 0, $.each($.rsModules, function(e, t) {
                "uid" !== e && t.call(i)
            }), i.slides = [], i._idCount = 0;
            var g, v = i.st.slides ? $(i.st.slides) : i.slider.children().detach();
            v.each(function() {
                i._parseNode(this, !0)
            }), i.st.randomizeSlides && i.slides.sort(function() {
                return .5 - Math.random()
            }), i.numSlides = i.slides.length, i._refreshNumPreloadImages(), i.st.startSlideId ? i.st.startSlideId > i.numSlides - 1 && (i.st.startSlideId = i.numSlides - 1) : i.st.startSlideId = 0, i._newSlideId = i.staticSlideId = i.currSlideId = i._realId = i.st.startSlideId, i.currSlide = i.slides[i.currSlideId], i._accelerationPos = 0, i.pointerMultitouch = !1, i.slider.addClass((i._slidesHorizontal ? "rsHor" : "rsVer") + (i._isMove ? "" : " rsFade"));
            var y = '<div class="rsOverflow"><div class="rsContainer">';
            i.slidesSpacing = i.st.slidesSpacing, i._slideSize = (i._slidesHorizontal ? i.slider.width() : i.slider.height()) + i.st.slidesSpacing, i._preload = Boolean(i._numPreloadImages > 0), i.numSlides <= 1 && (i._loop = !1);
            var b = i._loop && i._isMove ? 2 === i.numSlides ? 1 : 2 : 0;
            for (i._loopHelpers = b, i._maxImages = i.numSlides < 6 ? i.numSlides : 6, i._currBlockIndex = 0, i._idOffset = 0, i.slidesJQ = [], r = 0; r < i.numSlides; r++) i.slidesJQ.push($(n(r)));
            i._sliderOverflow = y = $(y + "</div></div>");
            var _ = function() {
                    i.st.sliderDrag && (i._hasDrag = !0, h.msie || h.opera ? i._grabCursor = i._grabbingCursor = "move" : h.mozilla ? (i._grabCursor = "-moz-grab", i._grabbingCursor = "-moz-grabbing") : h.webkit && -1 != o.platform.indexOf("Mac") && (i._grabCursor = "-webkit-grab", i._grabbingCursor = "-webkit-grabbing"), i._setGrabCursor())
                },
                x = i.ns,
                w = function(e, t, n, r, o) {
                    i._downEvent = e + t + x, i._moveEvent = e + n + x, i._upEvent = e + r + x, o && (i._cancelEvent = e + o + x)
                },
                S = o.pointerEnabled;
            i.pointerEnabled = S || o.msPointerEnabled, i.pointerEnabled ? (i.hasTouch = !1, i._lastItemFriction = .2, i.pointerMultitouch = Boolean(o[(S ? "m" : "msM") + "axTouchPoints"] > 1), S ? w("pointer", "down", "move", "up", "cancel") : w("MSPointer", "Down", "Move", "Up", "Cancel")) : (i.isIOS ? i._downEvent = i._moveEvent = i._upEvent = i._cancelEvent = "" : w("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (i.hasTouch = !0, i._downEvent += " touchstart" + x, i._moveEvent += " touchmove" + x, i._upEvent += " touchend" + x, i._cancelEvent += " touchcancel" + x, i._lastItemFriction = .5, i.st.sliderTouch && (i._hasDrag = !0)) : (i.hasTouch = !1, i._lastItemFriction = .2)), _(), i.slider.html(y), i._controlsContainer = i.st.controlsInside ? i._sliderOverflow : i.slider, i._slidesContainer = i._sliderOverflow.children(".rsContainer"), i.pointerEnabled && i._slidesContainer.css((S ? "" : "-ms-") + "touch-action", i._slidesHorizontal ? "pan-y" : "pan-x"), i._preloader = $('<div class="rsPreloader"></div>');
            var T = i._slidesContainer.children(".rsSlide");
            if (i._currHolder = i.slidesJQ[i.currSlideId], i._selectedSlideHolder = 0, i._useCSS3Transitions)
                if (i._TP = "transition-property", i._TD = "transition-duration", i._TTF = "transition-timing-function", i._yProp = i._xProp = i._vendorPref + "transform", i._use3dTransform ? (h.webkit && !h.chrome && i.slider.addClass("rsWebkit3d"), i._tPref1 = "translate3d(", i._tPref2 = "px, ", i._tPref3 = "px, 0px)") : (i._tPref1 = "translate(", i._tPref2 = "px, ", i._tPref3 = "px)"), i._isMove) i._slidesContainer[i._vendorPref + i._TP] = i._vendorPref + "transform";
                else {
                    var C = {};
                    C[i._vendorPref + i._TP] = "opacity", C[i._vendorPref + i._TD] = i.st.transitionSpeed + "ms", C[i._vendorPref + i._TTF] = i.st.css3easeInOut, T.css(C)
                } else i._xProp = "left", i._yProp = "top";
            var k;
            if ($(window).on("resize" + i.ns, function() {
                    k && clearTimeout(k), k = setTimeout(function() {
                        i.updateSliderSize()
                    }, 50)
                }), i.ev.trigger("rsAfterPropsSetup"), i.updateSliderSize(), i.st.keyboardNavEnabled && i._bindKeyboardNav(), i.st.arrowsNavHideOnTouch && (i.hasTouch || i.pointerMultitouch) && (i.st.arrowsNav = !1), i.st.arrowsNav) {
                var D = "rsArrow",
                    N = i._controlsContainer;
                if ($('<div class="' + D + " " + D + 'Left"><div class="' + D + 'Icn"></div></div><div class="' + D + " " + D + 'Right"><div class="' + D + 'Icn"></div></div>').appendTo(N), i._arrowLeft = N.children("." + D + "Left").click(function(e) {
                        e.preventDefault(), i.prev()
                    }), i._arrowRight = N.children("." + D + "Right").click(function(e) {
                        e.preventDefault(), i.next()
                    }), i.st.arrowsNavAutoHide && !i.hasTouch) {
                    i._arrowLeft.addClass("rsHidden"), i._arrowRight.addClass("rsHidden");
                    var E = N;
                    E.one("mousemove.arrowshover", function() {
                        i._arrowLeft.removeClass("rsHidden"), i._arrowRight.removeClass("rsHidden")
                    }), E.hover(function() {
                        i._arrowsAutoHideLocked || (i._arrowLeft.removeClass("rsHidden"), i._arrowRight.removeClass("rsHidden"))
                    }, function() {
                        i._arrowsAutoHideLocked || (i._arrowLeft.addClass("rsHidden"), i._arrowRight.addClass("rsHidden"))
                    })
                }
                i.ev.on("rsOnUpdateNav", function() {
                    i._updateArrowsNav()
                }), i._updateArrowsNav()
            }
            i.hasTouch && i.st.sliderTouch || !i.hasTouch && i.st.sliderDrag ? i._slidesContainer.on(i._downEvent, function(e) {
                i._onDragStart(e)
            }) : i.dragSuccess = !1;
            var A = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
            i._slidesContainer.click(function(e) {
                if (!i.dragSuccess) {
                    var t = $(e.target),
                        n = t.attr("class");
                    if (-1 !== $.inArray(n, A) && i.toggleVideo()) return !1;
                    if (i.st.navigateByClick && !i._blockActions) {
                        if ($(e.target).closest(".rsNoDrag", i._currHolder).length) return !0;
                        i._mouseNext(e)
                    }
                    i.ev.trigger("rsSlideClick", e)
                }
            }).on("click.rs", "a", function(e) {
                return i.dragSuccess ? !1 : (i._blockActions = !0, void setTimeout(function() {
                    i._blockActions = !1
                }, 3))
            }), i.ev.trigger("rsAfterInit")
        }
        $.rsModules || ($.rsModules = {
            uid: 0
        }), e.prototype = {
            constructor: e,
            _mouseNext: function(e) {
                var t = this,
                    n = e[t._slidesHorizontal ? "pageX" : "pageY"] - t._sliderOffset;
                n >= t._nextSlidePos ? t.next() : 0 > n && t.prev()
            },
            _refreshNumPreloadImages: function() {
                var e = this,
                    t;
                t = e.st.numImagesToPreload, e._loop = e.st.loop, e._loop && (2 === e.numSlides ? (e._loop = !1, e.st.loopRewind = !0) : e.numSlides < 2 && (e.st.loopRewind = e._loop = !1)), e._loop && t > 0 && (e.numSlides <= 4 ? t = 1 : e.st.numImagesToPreload > (e.numSlides - 1) / 2 && (t = Math.floor((e.numSlides - 1) / 2))), e._numPreloadImages = t
            },
            _parseNode: function(e, t) {
                function n(e, t) {
                    if (t ? a.images.push(e.attr(t)) : a.images.push(e.text()), u) {
                        u = !1, a.caption = "src" === t ? e.attr("alt") : e.contents(), a.image = a.images[0], a.videoURL = e.attr("data-rsVideo");
                        var n = e.attr("data-rsw"),
                            i = e.attr("data-rsh");
                        "undefined" != typeof n && n !== !1 && "undefined" != typeof i && i !== !1 ? (a.iW = parseInt(n, 10), a.iH = parseInt(i, 10)) : r.st.imgWidth && r.st.imgHeight && (a.iW = r.st.imgWidth, a.iH = r.st.imgHeight)
                    }
                }
                var r = this,
                    i, o, s, a = {},
                    l, u = !0;
                return e = $(e), r._currContent = e, r.ev.trigger("rsBeforeParseNode", [e, a]), a.stopParsing ? void 0 : (e = r._currContent, a.id = r._idCount, a.contentAdded = !1, r._idCount++, a.images = [], a.isBig = !1, a.hasCover || (e.hasClass("rsImg") ? (l = e, i = !0) : (l = e.find(".rsImg"), l.length && (i = !0)), i ? (a.bigImage = l.eq(0).attr("data-rsBigImg"), l.each(function() {
                    var e = $(this);
                    e.is("a") ? n(e, "href") : e.is("img") ? n(e, "src") : n(e)
                })) : e.is("img") && (e.addClass("rsImg rsMainSlideImage"), n(e, "src"))), l = e.find(".rsCaption"), l.length && (a.caption = l.remove()), a.content = e, r.ev.trigger("rsAfterParseNode", [e, a]), t && r.slides.push(a), 0 === a.images.length && (a.isLoaded = !0, a.isRendered = !1, a.isLoading = !1, a.images = null), a)
            },
            _bindKeyboardNav: function() {
                var e = this,
                    t, n, r = function(t) {
                        37 === t ? e.prev() : 39 === t && e.next()
                    };
                e._doc.on("keydown" + e.ns, function(i) {
                    if (!e.st.keyboardNavEnabled) return !0;
                    if (!(e._isDragging || (n = i.keyCode, 37 !== n && 39 !== n || t))) {
                        if (document.activeElement && /(INPUT|SELECT|TEXTAREA)/i.test(document.activeElement.tagName)) return !0;
                        e.isFullscreen && i.preventDefault(), r(n), t = setInterval(function() {
                            r(n)
                        }, 700)
                    }
                }).on("keyup" + e.ns, function(e) {
                    t && (clearInterval(t), t = null)
                })
            },
            goTo: function(e, t) {
                var n = this;
                e !== n.currSlideId && n._moveTo(e, n.st.transitionSpeed, !0, !t)
            },
            destroy: function(e) {
                var t = this;
                t.ev.trigger("rsBeforeDestroy"), t._doc.off("keydown" + t.ns + " keyup" + t.ns + " " + t._moveEvent + " " + t._upEvent),
                    t._slidesContainer.off(t._downEvent + " click"), t.slider.data("royalSlider", null), $.removeData(t.slider, "royalSlider"), $(window).off("resize" + t.ns), t.loadingTimeout && clearTimeout(t.loadingTimeout), e && t.slider.remove(), t.slides = null, t.slider = null, t.ev = null
            },
            _updateBlocksContent: function(e, t) {
                function n(t, n, o) {
                    t.isAdded ? (r(n, t), i(n, t)) : (o || (o = s.slidesJQ[n]), t.holder ? o = t.holder : (o = s.slidesJQ[n] = $(o), t.holder = o), t.appendOnLoaded = !1, i(n, t, o), r(n, t), s._addBlockToContainer(t, o, e), t.isAdded = !0)
                }

                function r(t, n) {
                    n.contentAdded || (s.setItemHtml(n, e), e || (n.contentAdded = !0))
                }

                function i(e, t, n) {
                    s._isMove && (n || (n = s.slidesJQ[e]), n.css(s._reorderProp, (e + s._idOffset + v) * s._slideSize))
                }

                function o(e) {
                    var t = !1;
                    if (h) {
                        if (e > m - 1) return o(e - m);
                        if (0 > e) return o(m + e)
                    }
                    return e
                }
                var s = this,
                    a, l, u, c, d, f, p, h = s._loop,
                    m = s.numSlides;
                if (!isNaN(t)) return o(t);
                var g = s.currSlideId,
                    v, y = e ? Math.abs(s._prevSlideId - s.currSlideId) >= s.numSlides - 1 ? 0 : 1 : s._numPreloadImages,
                    b = Math.min(2, y),
                    _ = !1,
                    x = !1,
                    w;
                for (l = g; g + 1 + b > l; l++)
                    if (w = o(l), a = s.slides[w], a && (!a.isAdded || !a.positionSet)) {
                        _ = !0;
                        break
                    }
                for (l = g - 1; l > g - 1 - b; l--)
                    if (w = o(l), a = s.slides[w], a && (!a.isAdded || !a.positionSet)) {
                        x = !0;
                        break
                    }
                if (_)
                    for (l = g; g + y + 1 > l; l++) w = o(l), v = Math.floor((s._realId - (g - l)) / s.numSlides) * s.numSlides, a = s.slides[w], a && n(a, w);
                if (x)
                    for (l = g - 1; l > g - 1 - y; l--) w = o(l), v = Math.floor((s._realId - (g - l)) / m) * m, a = s.slides[w], a && n(a, w);
                if (!e) {
                    var S = g,
                        T = y,
                        C = o(g - y),
                        k = o(g + y),
                        D = C > k ? 0 : C;
                    for (l = 0; m > l; l++) C > k && l > C - 1 || (D > l || l > k) && (a = s.slides[l], a && a.holder && (a.holder.detach(), a.isAdded = !1))
                }
            },
            setItemHtml: function(e, t) {
                var n = this,
                    r = function() {
                        if (!e.images) return e.isRendered = !0, e.isLoaded = !0, e.isLoading = !1, void a(!0);
                        if (!e.isLoading) {
                            var t, r;
                            e.content.hasClass("rsImg") ? (t = e.content, r = !0) : t = e.content.find(".rsImg:not(img)"), t && !t.is("img") && t.each(function() {
                                var t = $(this),
                                    n = '<img class="rsImg" src="' + (t.is("a") ? t.attr("href") : t.text()) + '" />';
                                r ? e.content = $(n) : t.replaceWith(n)
                            }), t = r ? e.content : e.content.find("img.rsImg"), u(), t.eq(0).addClass("rsMainSlideImage"), e.iW && e.iH && (e.isLoaded || n._resizeImage(e), a()), e.isLoading = !0;
                            var o, s = "load.rs error.rs";
                            if (e.isBig) $("<img />").on(s, function(e) {
                                $(this).off(s), i([this], !0)
                            }).attr("src", e.image);
                            else {
                                e.loaded = [], e.numStartedLoad = 0;
                                for (var l = function(t) {
                                        $(this).off(s), e.loaded.push(this), e.loaded.length === e.numStartedLoad && i(e.loaded, !1)
                                    }, c = 0; c < e.images.length; c++) {
                                    var d = $("<img />");
                                    e.numStartedLoad++, d.on("load.rs error.rs", l).attr("src", e.images[c])
                                }
                            }
                        }
                    },
                    i = function(t, n) {
                        if (t.length) {
                            var r = t[0],
                                i = r.src;
                            if (n !== e.isBig) {
                                var s = e.holder.children();
                                return void(s && s.length > 1 && c())
                            }
                            if (e.iW && e.iH) return void o();
                            if (e.iW = r.width, e.iH = r.height, e.iW && e.iH) return void o();
                            var a = new Image;
                            a.onload = function() {
                                a.width ? (e.iW = a.width, e.iH = a.height, o()) : setTimeout(function() {
                                    a.width && (e.iW = a.width, e.iH = a.height), o()
                                }, 1e3)
                            }, a.src = r.src
                        } else o()
                    },
                    o = function() {
                        e.isLoaded = !0, e.isLoading = !1, a(), c(), l()
                    },
                    s = function() {
                        return !n._isMove && e.images && e.iW && e.iH ? void r() : (e.holder.isWaiting = !0, u(), void(e.holder.slideId = -99))
                    },
                    a = function() {
                        if (!e.isAppended && n.ev) {
                            var r = n.st.visibleNearby,
                                i = e.id - n._newSlideId;
                            if (!t && !e.appendOnLoaded && n.st.fadeinLoadedSlide && (0 === i || (r || n._isAnimating || n._isDragging) && (-1 === i || 1 === i))) {
                                var o = {
                                    visibility: "visible",
                                    opacity: 0
                                };
                                o[n._vendorPref + "transition"] = "opacity 400ms ease-in-out", e.content.css(o), setTimeout(function() {
                                    e.content.css("opacity", 1)
                                }, 16)
                            }
                            e.holder.find(".rsPreloader").length ? e.holder.append(e.content) : e.holder.html(e.content), e.isAppended = !0, e.isLoaded && (n._resizeImage(e), l()), e.sizeReady || (e.sizeReady = !0, setTimeout(function() {
                                n.ev.trigger("rsMaybeSizeReady", e)
                            }, 100))
                        }
                    },
                    l = function() {
                        !e.loadedTriggered && n.ev && (e.isLoaded = e.loadedTriggered = !0, e.holder.trigger("rsAfterContentSet"), n.ev.trigger("rsAfterContentSet", e))
                    },
                    u = function() {
                        n.st.usePreloader && e.holder.html(n._preloader.clone())
                    },
                    c = function(t) {
                        if (n.st.usePreloader) {
                            var r = e.holder.find(".rsPreloader");
                            r.length && r.remove()
                        }
                    };
                return e.isLoaded ? void a() : void(t ? s() : r())
            },
            _addBlockToContainer: function(e, t, n) {
                var r = this,
                    i = e.holder,
                    o = e.id - r._newSlideId,
                    s = !1;
                r._slidesContainer.append(i), e.appendOnLoaded = !1
            },
            _onDragStart: function(e, t) {
                var n = this,
                    r, i, o = "touchstart" === e.type;
                if (n._isTouchGesture = o, n.ev.trigger("rsDragStart"), $(e.target).closest(".rsNoDrag", n._currHolder).length) return n.dragSuccess = !1, !0;
                if (t || n._isAnimating && (n._wasAnimating = !0, n._stopAnimation()), n.dragSuccess = !1, n._isDragging) return void(o && (n._multipleTouches = !0));
                if (o && (n._multipleTouches = !1), n._setGrabbingCursor(), o) {
                    var s = e.originalEvent.touches;
                    if (!(s && s.length > 0)) return;
                    r = s[0], s.length > 1 && (n._multipleTouches = !0)
                } else e.preventDefault(), r = e, n.pointerEnabled && (r = r.originalEvent);
                n._isDragging = !0, n._doc.on(n._moveEvent, function(e) {
                    n._onDragMove(e, t)
                }).on(n._upEvent, function(e) {
                    n._onDragRelease(e, t)
                }), n._currMoveAxis = "", n._hasMoved = !1, n._pageX = r.pageX, n._pageY = r.pageY, n._startPagePos = n._accelerationPos = (t ? n._thumbsHorizontal : n._slidesHorizontal) ? r.pageX : r.pageY, n._horDir = 0, n._verDir = 0, n._currRenderPosition = t ? n._thumbsPosition : n._sPosition, n._startTime = (new Date).getTime(), o && n._sliderOverflow.on(n._cancelEvent, function(e) {
                    n._onDragRelease(e, t)
                })
            },
            _renderMovement: function(e, t) {
                var n = this;
                if (n._checkedAxis) {
                    var r = n._renderMoveTime,
                        i = e.pageX - n._pageX,
                        o = e.pageY - n._pageY,
                        s = n._currRenderPosition + i,
                        a = n._currRenderPosition + o,
                        l = t ? n._thumbsHorizontal : n._slidesHorizontal,
                        u = l ? s : a,
                        c = n._currMoveAxis;
                    n._hasMoved = !0, n._pageX = e.pageX, n._pageY = e.pageY, "x" === c && 0 !== i ? n._horDir = i > 0 ? 1 : -1 : "y" === c && 0 !== o && (n._verDir = o > 0 ? 1 : -1);
                    var d = l ? n._pageX : n._pageY,
                        f = l ? i : o;
                    t ? u > n._thumbsMinPosition ? u = n._currRenderPosition + f * n._lastItemFriction : u < n._thumbsMaxPosition && (u = n._currRenderPosition + f * n._lastItemFriction) : n._loop || (n.currSlideId <= 0 && d - n._startPagePos > 0 && (u = n._currRenderPosition + f * n._lastItemFriction), n.currSlideId >= n.numSlides - 1 && d - n._startPagePos < 0 && (u = n._currRenderPosition + f * n._lastItemFriction)), n._currRenderPosition = u, r - n._startTime > 200 && (n._startTime = r, n._accelerationPos = d), t ? n._setThumbsPosition(n._currRenderPosition) : n._isMove && n._setPosition(n._currRenderPosition)
                }
            },
            _onDragMove: function(e, t) {
                var n = this,
                    r, i = "touchmove" === e.type;
                if (!n._isTouchGesture || i) {
                    if (i) {
                        if (n._lockAxis) return;
                        var o = e.originalEvent.touches;
                        if (!o) return;
                        if (o.length > 1) return;
                        r = o[0]
                    } else r = e, n.pointerEnabled && (r = r.originalEvent);
                    if (n._hasMoved || (n._useCSS3Transitions && (t ? n._thumbsContainer : n._slidesContainer).css(n._vendorPref + n._TD, "0s"), function l() {
                            n._isDragging && (n._animFrame = requestAnimationFrame(l), n._renderMoveEvent && n._renderMovement(n._renderMoveEvent, t))
                        }()), n._checkedAxis) e.preventDefault(), n._renderMoveTime = (new Date).getTime(), n._renderMoveEvent = r;
                    else {
                        var s = t ? n._thumbsHorizontal : n._slidesHorizontal,
                            a = Math.abs(r.pageX - n._pageX) - Math.abs(r.pageY - n._pageY) - (s ? -7 : 7);
                        if (a > 7) {
                            if (s) e.preventDefault(), n._currMoveAxis = "x";
                            else if (i) return void n._completeGesture(e);
                            n._checkedAxis = !0
                        } else if (-7 > a) {
                            if (s) {
                                if (i) return void n._completeGesture(e)
                            } else e.preventDefault(), n._currMoveAxis = "y";
                            n._checkedAxis = !0
                        }
                    }
                }
            },
            _completeGesture: function(e, t) {
                var n = this;
                n._lockAxis = !0, n._hasMoved = n._isDragging = !1, n._onDragRelease(e)
            },
            _onDragRelease: function(e, t) {
                function n(e) {
                    return 100 > e ? 100 : e > 500 ? 500 : e
                }

                function r(e, r) {
                    (i._isMove || t) && (u = (-i._realId - i._idOffset) * i._slideSize, c = Math.abs(i._sPosition - u), i._currAnimSpeed = c / r, e && (i._currAnimSpeed += 250), i._currAnimSpeed = n(i._currAnimSpeed), i._animateTo(u, !1))
                }
                var i = this,
                    o, s, a, l, u, c, d, f, p = e.type.indexOf("touch") > -1;
                if (!i._isTouchGesture || p) {
                    if (i._isTouchGesture = !1, i.ev.trigger("rsDragRelease"), i._renderMoveEvent = null, i._isDragging = !1, i._lockAxis = !1, i._checkedAxis = !1, i._renderMoveTime = 0, cancelAnimationFrame(i._animFrame), i._hasMoved && (t ? i._setThumbsPosition(i._currRenderPosition) : i._isMove && i._setPosition(i._currRenderPosition)), i._doc.off(i._moveEvent).off(i._upEvent), p && i._sliderOverflow.off(i._cancelEvent), i._setGrabCursor(), !i._hasMoved && !i._multipleTouches && t && i._thumbsEnabled) {
                        var h = $(e.target).closest(".rsNavItem");
                        return void(h.length && i.goTo(h.index()))
                    }
                    var m = t ? i._thumbsHorizontal : i._slidesHorizontal;
                    if (!i._hasMoved || "y" === i._currMoveAxis && m || "x" === i._currMoveAxis && !m) {
                        if (t || !i._wasAnimating) return i._wasAnimating = !1, void(i.dragSuccess = !1);
                        if (i._wasAnimating = !1, i.st.navigateByClick) return i._mouseNext(i.pointerEnabled ? e.originalEvent : e), void(i.dragSuccess = !0);
                        i.dragSuccess = !0
                    } else i.dragSuccess = !0;
                    i._wasAnimating = !1, i._currMoveAxis = "";
                    var g = i.st.minSlideOffset,
                        v = p ? e.originalEvent.changedTouches[0] : i.pointerEnabled ? e.originalEvent : e,
                        y = m ? v.pageX : v.pageY,
                        b = i._startPagePos,
                        _ = i._accelerationPos,
                        x = i.currSlideId,
                        w = i.numSlides,
                        S = m ? i._horDir : i._verDir,
                        T = i._loop,
                        C = !1,
                        k = 0;
                    if (o = Math.abs(y - b), s = y - _, a = (new Date).getTime() - i._startTime, l = Math.abs(s) / a, 0 === S || 1 >= w) return void r(!0, l);
                    if (!T && !t)
                        if (0 >= x) {
                            if (S > 0) return void r(!0, l)
                        } else if (x >= w - 1 && 0 > S) return void r(!0, l);
                    if (t) {
                        u = i._thumbsPosition;
                        var D;
                        if (u > i._thumbsMinPosition) u = i._thumbsMinPosition;
                        else if (u < i._thumbsMaxPosition) u = i._thumbsMaxPosition;
                        else {
                            var N = .003,
                                E = l * l / (2 * N),
                                A = -i._thumbsPosition,
                                P = i._thumbsContainerSize - i._thumbsViewportSize + i._thumbsPosition;
                            if (s > 0 && E > A ? (A += i._thumbsViewportSize / (15 / (E / l * N)), l = l * A / E, E = A) : 0 > s && E > P && (P += i._thumbsViewportSize / (15 / (E / l * N)), l = l * P / E, E = P), D = Math.max(Math.round(l / N), 50), u += E * (0 > s ? -1 : 1), u > i._thumbsMinPosition) return void i._animateThumbsTo(u, D, !0, i._thumbsMinPosition, 200);
                            if (u < i._thumbsMaxPosition) return void i._animateThumbsTo(u, D, !0, i._thumbsMaxPosition, 200)
                        }
                        i._animateThumbsTo(u, D, !0)
                    } else {
                        var j = function(e) {
                            var t = Math.floor(e / i._slideSize),
                                n = e - t * i._slideSize;
                            return n > g && t++, t
                        };
                        if (y > b + g) {
                            if (0 > S) return void r(!1, l);
                            var I = j(y - b);
                            i._moveTo(i.currSlideId - I, n(Math.abs(i._sPosition - (-i._realId - i._idOffset + I) * i._slideSize) / l), C, !0, !0)
                        } else if (b - g > y) {
                            if (S > 0) return void r(!1, l);
                            var I = j(b - y);
                            i._moveTo(i.currSlideId + I, n(Math.abs(i._sPosition - (-i._realId - i._idOffset - I) * i._slideSize) / l), C, !0, !0)
                        } else r(!1, l)
                    }
                }
            },
            _setPosition: function(e) {
                var t = this;
                e = t._sPosition = e, t._useCSS3Transitions ? t._slidesContainer.css(t._xProp, t._tPref1 + (t._slidesHorizontal ? e + t._tPref2 + 0 : 0 + t._tPref2 + e) + t._tPref3) : t._slidesContainer.css(t._slidesHorizontal ? t._xProp : t._yProp, e)
            },
            updateSliderSize: function(e) {
                var t = this,
                    n, r;
                if (t.slider) {
                    if (t.st.autoScaleSlider) {
                        var i = t.st.autoScaleSliderWidth,
                            o = t.st.autoScaleSliderHeight;
                        t.st.autoScaleHeight ? (n = t.slider.width(), n != t.width && (t.slider.css("height", n * (o / i)), n = t.slider.width()), r = t.slider.height()) : (r = t.slider.height(), r != t.height && (t.slider.css("width", r * (i / o)), r = t.slider.height()), n = t.slider.width())
                    } else n = t.slider.width(), r = t.slider.height();
                    if (e || n != t.width || r != t.height) {
                        t.width = n, t.height = r, t._wrapWidth = n, t._wrapHeight = r, t.ev.trigger("rsBeforeSizeSet"), t.ev.trigger("rsAfterSizePropSet"), t._sliderOverflow.css({
                            width: t._wrapWidth,
                            height: t._wrapHeight
                        }), t._slideSize = (t._slidesHorizontal ? t._wrapWidth : t._wrapHeight) + t.st.slidesSpacing, t._imagePadding = t.st.imageScalePadding;
                        var s, a, l, u;
                        for (l = 0; l < t.slides.length; l++) s = t.slides[l], s.positionSet = !1, s && s.images && s.isLoaded && (s.isRendered = !1, t._resizeImage(s));
                        if (t._cloneHolders)
                            for (l = 0; l < t._cloneHolders.length; l++) s = t._cloneHolders[l], s.holder.css(t._reorderProp, (s.id + t._idOffset) * t._slideSize);
                        t._updateBlocksContent(), t._isMove && (t._useCSS3Transitions && t._slidesContainer.css(t._vendorPref + "transition-duration", "0s"), t._setPosition((-t._realId - t._idOffset) * t._slideSize)), t.ev.trigger("rsOnUpdateNav")
                    }
                    t._sliderOffset = t._sliderOverflow.offset(), t._sliderOffset = t._sliderOffset[t._reorderProp]
                }
            },
            appendSlide: function(e, t) {
                var n = this,
                    r = n._parseNode(e);
                (isNaN(t) || t > n.numSlides) && (t = n.numSlides), n.slides.splice(t, 0, r), n.slidesJQ.splice(t, 0, $('<div style="' + (n._isMove ? "position:absolute;" : n._opacityCSS) + '" class="rsSlide"></div>')), t <= n.currSlideId && n.currSlideId++, n.ev.trigger("rsOnAppendSlide", [r, t]), n._refreshSlides(t), t === n.currSlideId && n.ev.trigger("rsAfterSlideChange")
            },
            removeSlide: function(e) {
                var t = this,
                    n = t.slides[e];
                n && (n.holder && n.holder.remove(), e < t.currSlideId && t.currSlideId--, t.slides.splice(e, 1), t.slidesJQ.splice(e, 1), t.ev.trigger("rsOnRemoveSlide", [e]), t._refreshSlides(e), e === t.currSlideId && t.ev.trigger("rsAfterSlideChange"))
            },
            _refreshSlides: function(e) {
                var t = this,
                    n = t.numSlides,
                    r = t._realId <= 0 ? 0 : Math.floor(t._realId / n);
                t.numSlides = t.slides.length, 0 === t.numSlides ? (t.currSlideId = t._idOffset = t._realId = 0, t.currSlide = t._oldHolder = null) : t._realId = r * t.numSlides + t.currSlideId;
                for (var i = 0; i < t.numSlides; i++) t.slides[i].id = i;
                t.currSlide = t.slides[t.currSlideId], t._currHolder = t.slidesJQ[t.currSlideId], t.currSlideId >= t.numSlides ? t.goTo(t.numSlides - 1) : t.currSlideId < 0 && t.goTo(0), t._refreshNumPreloadImages(), t._isMove && t._slidesContainer.css(t._vendorPref + t._TD, "0ms"), t._refreshSlidesTimeout && clearTimeout(t._refreshSlidesTimeout), t._refreshSlidesTimeout = setTimeout(function() {
                    t._isMove && t._setPosition((-t._realId - t._idOffset) * t._slideSize), t._updateBlocksContent(), t._isMove || t._currHolder.css({
                        display: "block",
                        opacity: 1
                    })
                }, 14), t.ev.trigger("rsOnUpdateNav")
            },
            _setGrabCursor: function() {
                var e = this;
                e._hasDrag && e._isMove && (e._grabCursor ? e._sliderOverflow.css("cursor", e._grabCursor) : (e._sliderOverflow.removeClass("grabbing-cursor"), e._sliderOverflow.addClass("grab-cursor")))
            },
            _setGrabbingCursor: function() {
                var e = this;
                e._hasDrag && e._isMove && (e._grabbingCursor ? e._sliderOverflow.css("cursor", e._grabbingCursor) : (e._sliderOverflow.removeClass("grab-cursor"), e._sliderOverflow.addClass("grabbing-cursor")))
            },
            next: function(e) {
                var t = this;
                t._moveTo("next", t.st.transitionSpeed, !0, !e)
            },
            prev: function(e) {
                var t = this;
                t._moveTo("prev", t.st.transitionSpeed, !0, !e)
            },
            _moveTo: function(e, t, n, r, i) {
                function o(e) {
                    return 0 > e ? e = s.numSlides + e : e > s.numSlides - 1 && (e -= s.numSlides), e !== s.currSlideId ? !1 : !0
                }
                var s = this,
                    a, l, u, c;
                if (s.ev.trigger("rsBeforeMove", [e, r]), c = "next" === e ? s.currSlideId + 1 : "prev" === e ? s.currSlideId - 1 : e = parseInt(e, 10), !s._loop) {
                    if (0 > c) return void s._doBackAndForthAnim("left", !r);
                    if (c >= s.numSlides) return void s._doBackAndForthAnim("right", !r)
                }
                s._isAnimating && (s._stopAnimation(!0), n = !1), l = c - s.currSlideId, s._prevSlideId = s.currSlideId;
                var d = s.currSlideId,
                    f = s.currSlideId + l,
                    p = s._realId,
                    h, m;
                s._loop ? (f = s._updateBlocksContent(!1, f), p += l) : p = f, s._newSlideId = f, s._oldHolder = s.slidesJQ[s.currSlideId], s._realId = p, s.currSlideId = s._newSlideId, s.currSlide = s.slides[s.currSlideId], s._currHolder = s.slidesJQ[s.currSlideId];
                var g = s.st.slidesDiff,
                    v = Boolean(l > 0),
                    y = Math.abs(l),
                    b = Math.floor(d / s._numPreloadImages),
                    _ = Math.floor((d + (v ? g : -g)) / s._numPreloadImages),
                    x = v ? Math.max(b, _) : Math.min(b, _),
                    w = x * s._numPreloadImages + (v ? s._numPreloadImages - 1 : 0);
                w > s.numSlides - 1 ? w = s.numSlides - 1 : 0 > w && (w = 0);
                var S = v ? w - d : d - w;
                if (S > s._numPreloadImages && (S = s._numPreloadImages), y > S + g)
                    for (s._idOffset += (y - (S + g)) * (v ? -1 : 1), t = 1.4 * t, u = 0; u < s.numSlides; u++) s.slides[u].positionSet = !1;
                s._currAnimSpeed = t, s._updateBlocksContent(!0), i || (m = !0), a = (-p - s._idOffset) * s._slideSize, m ? setTimeout(function() {
                    s._isWorking = !1, s._animateTo(a, e, !1, n), s.ev.trigger("rsOnUpdateNav")
                }, 0) : (s._animateTo(a, e, !1, n), s.ev.trigger("rsOnUpdateNav"))
            },
            _updateArrowsNav: function() {
                var e = this,
                    t = "rsArrowDisabled";
                if (e.st.arrowsNav) {
                    if (e.numSlides <= 1) return e._arrowLeft.css("display", "none"), void e._arrowRight.css("display", "none");
                    e._arrowLeft.css("display", "block"), e._arrowRight.css("display", "block"), e._loop || e.st.loopRewind || (0 === e.currSlideId ? e._arrowLeft.addClass(t) : e._arrowLeft.removeClass(t), e.currSlideId === e.numSlides - 1 ? e._arrowRight.addClass(t) : e._arrowRight.removeClass(t))
                }
            },
            _animateTo: function(e, t, n, r, i) {
                function o() {
                    var e;
                    l && (e = l.data("rsTimeout"), e && (l !== u && l.css({
                        opacity: 0,
                        display: "none",
                        zIndex: 0
                    }), clearTimeout(e), l.data("rsTimeout", ""))), e = u.data("rsTimeout"), e && (clearTimeout(e), u.data("rsTimeout", ""))
                }
                var s = this,
                    a, l, u, c = {};
                if (isNaN(s._currAnimSpeed) && (s._currAnimSpeed = 400), s._sPosition = s._currRenderPosition = e, s.ev.trigger("rsBeforeAnimStart"), s._useCSS3Transitions)
                    if (s._isMove) {
                        s._currAnimSpeed = parseInt(s._currAnimSpeed, 10);
                        var d = s._vendorPref + s._TD,
                            f = s._vendorPref + s._TTF;
                        c[d] = s._currAnimSpeed + "ms", c[f] = r ? $.rsCSS3Easing[s.st.easeInOut] : $.rsCSS3Easing[s.st.easeOut], s._slidesContainer.css(c), r || !s.hasTouch ? setTimeout(function() {
                            s._setPosition(e)
                        }, 5) : s._setPosition(e)
                    } else s._currAnimSpeed = s.st.transitionSpeed, l = s._oldHolder, u = s._currHolder, u.data("rsTimeout") && u.css("opacity", 0), o(), l && l.data("rsTimeout", setTimeout(function() {
                        c[s._vendorPref + s._TD] = "0ms", c.zIndex = 0, c.display = "none", l.data("rsTimeout", ""), l.css(c), setTimeout(function() {
                            l.css("opacity", 0)
                        }, 16)
                    }, s._currAnimSpeed + 60)), c.display = "block", c.zIndex = s._fadeZIndex, c.opacity = 0, c[s._vendorPref + s._TD] = "0ms", c[s._vendorPref + s._TTF] = $.rsCSS3Easing[s.st.easeInOut], u.css(c), u.data("rsTimeout", setTimeout(function() {
                        u.css(s._vendorPref + s._TD, s._currAnimSpeed + "ms"), u.data("rsTimeout", setTimeout(function() {
                            u.css("opacity", 1), u.data("rsTimeout", "")
                        }, 20))
                    }, 20));
                else s._isMove ? (c[s._slidesHorizontal ? s._xProp : s._yProp] = e + "px", s._slidesContainer.animate(c, s._currAnimSpeed, r ? s.st.easeInOut : s.st.easeOut)) : (l = s._oldHolder, u = s._currHolder, u.stop(!0, !0).css({
                    opacity: 0,
                    display: "block",
                    zIndex: s._fadeZIndex
                }), s._currAnimSpeed = s.st.transitionSpeed, u.animate({
                    opacity: 1
                }, s._currAnimSpeed, s.st.easeInOut), o(), l && l.data("rsTimeout", setTimeout(function() {
                    l.stop(!0, !0).css({
                        opacity: 0,
                        display: "none",
                        zIndex: 0
                    })
                }, s._currAnimSpeed + 60)));
                s._isAnimating = !0, s.loadingTimeout && clearTimeout(s.loadingTimeout), i ? s.loadingTimeout = setTimeout(function() {
                    s.loadingTimeout = null, i.call()
                }, s._currAnimSpeed + 60) : s.loadingTimeout = setTimeout(function() {
                    s.loadingTimeout = null, s._animationComplete(t)
                }, s._currAnimSpeed + 60)
            },
            _stopAnimation: function(e) {
                var t = this;
                if (t._isAnimating = !1, clearTimeout(t.loadingTimeout), t._isMove)
                    if (t._useCSS3Transitions) {
                        if (!e) {
                            var n = t._sPosition,
                                r = t._currRenderPosition = t._getTransformProp();
                            t._slidesContainer.css(t._vendorPref + t._TD, "0ms"), n !== r && t._setPosition(r)
                        }
                    } else t._slidesContainer.stop(!0), t._sPosition = parseInt(t._slidesContainer.css(t._slidesHorizontal ? t._xProp : t._yProp), 10);
                else t._fadeZIndex > 20 ? t._fadeZIndex = 10 : t._fadeZIndex++
            },
            _getTransformProp: function() {
                var e = this,
                    t = window.getComputedStyle(e._slidesContainer.get(0), null).getPropertyValue(e._vendorPref + "transform"),
                    n = t.replace(/^matrix\(/i, "").split(/, |\)$/g),
                    r = 0 === n[0].indexOf("matrix3d");
                return parseInt(n[e._slidesHorizontal ? r ? 12 : 4 : r ? 13 : 5], 10)
            },
            _getCSS3Prop: function(e, t) {
                var n = this;
                return n._useCSS3Transitions ? n._tPref1 + (t ? e + n._tPref2 + 0 : 0 + n._tPref2 + e) + n._tPref3 : e
            },
            _animationComplete: function(e) {
                var t = this;
                t._isMove || (t._currHolder.css("z-index", 0), t._fadeZIndex = 10), t._isAnimating = !1, t.staticSlideId = t.currSlideId, t._updateBlocksContent(), t._slidesMoved = !1, t.ev.trigger("rsAfterSlideChange")
            },
            _doBackAndForthAnim: function(e, t) {
                var n = this,
                    r = (-n._realId - n._idOffset) * n._slideSize;
                if (0 !== n.numSlides && !n._isAnimating) {
                    if (n.st.loopRewind) return void n.goTo("left" === e ? n.numSlides - 1 : 0, t);
                    if (n._isMove) {
                        n._currAnimSpeed = 200;
                        var i = function() {
                                n._isAnimating = !1
                            },
                            o = function() {
                                n._isAnimating = !1, n._animateTo(r, "", !1, !0, i)
                            };
                        n._animateTo(r + ("left" === e ? 30 : -30), "", !1, !0, o)
                    }
                }
            },
            _resizeImage: function(e, t) {
                var n = !0;
                if (!e.isRendered) {
                    var r = e.content,
                        i = "rsMainSlideImage",
                        o, s = this,
                        a = $.isFunction(s.st.imageAlignCenter) ? s.st.imageAlignCenter(e) : s.st.imageAlignCenter,
                        l = $.isFunction(s.st.imageScaleMode) ? s.st.imageScaleMode(e) : s.st.imageScaleMode,
                        u, c;
                    if (e.videoURL && (i = "rsVideoContainer", "fill" !== l ? o = !0 : (u = r, u.hasClass(i) || (u = u.find("." + i)), u.css({
                            width: "100%",
                            height: "100%"
                        }), i = "rsMainSlideImage")), r.hasClass(i) || (n = !1, r = r.find("." + i)), r) {
                        var d = e.iW,
                            f = e.iH;
                        if (e.isRendered = !0, "none" !== l || a) {
                            c = "fill" !== l ? s._imagePadding : 0;
                            var p = s._wrapWidth - 2 * c,
                                h = s._wrapHeight - 2 * c,
                                m, g, v, y, b, _ = {};
                            "fit-if-smaller" === l && (d > p || f > h) && (l = "fit"), "fill" === l || "fit" === l ? (m = p / d, g = h / f, v = "fill" == l ? m > g ? m : g : "fit" == l ? g > m ? m : g : 1, y = Math.ceil(d * v, 10), b = Math.ceil(f * v, 10)) : (y = d, b = f), "none" !== l && (_.width = y, _.height = b, o && r.find(".rsImg").css({
                                width: "100%",
                                height: "100%"
                            })), a && (_.marginLeft = Math.floor((p - y) / 2) + c, _.marginTop = Math.floor((h - b) / 2) + c), r.css(_)
                        }
                    }
                }
            }
        }, $.rsProto = e.prototype, $.fn.royalSlider = function(t) {
            var n = arguments;
            return this.each(function() {
                var r = $(this);
                if ("object" != typeof t && t) {
                    var i = r.data("royalSlider");
                    if (i && i[t]) return i[t].apply(i, Array.prototype.slice.call(n, 1))
                } else r.data("royalSlider") || r.data("royalSlider", new e(r, t))
            })
        }, $.fn.royalSlider.defaults = {
            slidesSpacing: 8,
            startSlideId: 0,
            loop: !1,
            loopRewind: !1,
            numImagesToPreload: 4,
            fadeinLoadedSlide: !0,
            slidesOrientation: "horizontal",
            transitionType: "move",
            transitionSpeed: 600,
            controlNavigation: "bullets",
            controlsInside: !0,
            arrowsNav: !0,
            arrowsNavAutoHide: !0,
            navigateByClick: !0,
            randomizeSlides: !1,
            sliderDrag: !0,
            sliderTouch: !0,
            keyboardNavEnabled: !1,
            fadeInAfterLoaded: !0,
            allowCSS3: !0,
            allowCSS3OnWebkit: !0,
            addActiveClass: !1,
            autoHeight: !1,
            easeOut: "easeOutSine",
            easeInOut: "easeInOutSine",
            minSlideOffset: 10,
            imageScaleMode: "fit-if-smaller",
            imageAlignCenter: !0,
            imageScalePadding: 4,
            usePreloader: !0,
            autoScaleSlider: !1,
            autoScaleSliderWidth: 800,
            autoScaleSliderHeight: 400,
            autoScaleHeight: !0,
            arrowsNavHideOnTouch: !1,
            globalCaption: !1,
            slidesDiff: 2
        }, $.rsCSS3Easing = {
            easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
            easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
        }, $.extend(jQuery.easing, {
            easeInOutSine: function(e, t, n, r, i) {
                return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
            },
            easeOutSine: function(e, t, n, r, i) {
                return r * Math.sin(t / i * (Math.PI / 2)) + n
            },
            easeOutCubic: function(e, t, n, r, i) {
                return r * ((t = t / i - 1) * t * t + 1) + n
            }
        })
    }(jQuery, window),
    function($) {
        "use strict";
        $.rsProto._initActiveClass = function() {
            var e, t = this,
                n = "rsActiveSlide";
            t.st.addActiveClass && t.ev.on("rsOnUpdateNav", function() {
                e && clearTimeout(e), e = setTimeout(function() {
                    t._oldHolder && t._oldHolder.removeClass(n), t._currHolder && t._currHolder.addClass(n), e = null
                }, 50)
            })
        }, $.rsModules.activeClass = $.rsProto._initActiveClass
    }(jQuery),
    function($) {
        "use strict";
        $.extend($.rsProto, {
            _initAutoplay: function() {
                var e = this,
                    t;
                e._autoPlayDefaults = {
                    enabled: !1,
                    stopAtAction: !0,
                    pauseOnHover: !0,
                    delay: 2e3
                }, !e.st.autoPlay && e.st.autoplay && (e.st.autoPlay = e.st.autoplay), e.st.autoPlay = $.extend({}, e._autoPlayDefaults, e.st.autoPlay), e.st.autoPlay.enabled && (e.ev.on("rsBeforeParseNode", function(e, n, r) {
                    n = $(n), t = n.attr("data-rsDelay"), t && (r.customDelay = parseInt(t, 10))
                }), e.ev.one("rsAfterInit", function() {
                    e._setupAutoPlay()
                }), e.ev.on("rsBeforeDestroy", function() {
                    e.stopAutoPlay(), e.slider.off("mouseenter mouseleave"), $(window).off("blur" + e.ns + " focus" + e.ns)
                }))
            },
            _setupAutoPlay: function() {
                var e = this;
                e.startAutoPlay(), e.ev.on("rsAfterContentSet", function(t, n) {
                    e._isDragging || e._isAnimating || !e._autoPlayEnabled || n !== e.currSlide || e._play()
                }), e.ev.on("rsDragRelease", function() {
                    e._autoPlayEnabled && e._autoPlayPaused && (e._autoPlayPaused = !1, e._play())
                }), e.ev.on("rsAfterSlideChange", function() {
                    e._autoPlayEnabled && e._autoPlayPaused && (e._autoPlayPaused = !1, e.currSlide.isLoaded && e._play())
                }), e.ev.on("rsDragStart", function() {
                    e._autoPlayEnabled && (e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._autoPlayPaused = !0, e._pause()))
                }), e.ev.on("rsBeforeMove", function(t, n, r) {
                    e._autoPlayEnabled && (r && e.st.autoPlay.stopAtAction ? e.stopAutoPlay() : (e._autoPlayPaused = !0, e._pause()))
                }), e._pausedByVideo = !1, e.ev.on("rsVideoStop", function() {
                    e._autoPlayEnabled && (e._pausedByVideo = !1, e._play())
                }), e.ev.on("rsVideoPlay", function() {
                    e._autoPlayEnabled && (e._autoPlayPaused = !1, e._pause(), e._pausedByVideo = !0)
                }), $(window).on("blur" + e.ns, function() {
                    e._autoPlayEnabled && (e._autoPlayPaused = !0, e._pause())
                }).on("focus" + e.ns, function() {
                    e._autoPlayEnabled && e._autoPlayPaused && (e._autoPlayPaused = !1, e._play())
                }), e.st.autoPlay.pauseOnHover && (e._pausedByHover = !1, e.slider.hover(function() {
                    e._autoPlayEnabled && (e._autoPlayPaused = !1, e._pause(), e._pausedByHover = !0)
                }, function() {
                    e._autoPlayEnabled && (e._pausedByHover = !1, e._play())
                }))
            },
            toggleAutoPlay: function() {
                var e = this;
                e._autoPlayEnabled ? e.stopAutoPlay() : e.startAutoPlay()
            },
            startAutoPlay: function() {
                var e = this;
                e._autoPlayEnabled = !0, e.currSlide.isLoaded && e._play()
            },
            stopAutoPlay: function() {
                var e = this;
                e._pausedByVideo = e._pausedByHover = e._autoPlayPaused = e._autoPlayEnabled = !1, e._pause()
            },
            _play: function() {
                var e = this;
                e._pausedByHover || e._pausedByVideo || (e._autoPlayRunning = !0, e._autoPlayTimeout && clearTimeout(e._autoPlayTimeout), e._autoPlayTimeout = setTimeout(function() {
                    var t;
                    e._loop || e.st.loopRewind || (t = !0, e.st.loopRewind = !0), e.next(!0), t && (t = !1, e.st.loopRewind = !1)
                }, e.currSlide.customDelay ? e.currSlide.customDelay : e.st.autoPlay.delay))
            },
            _pause: function() {
                var e = this;
                e._pausedByHover || e._pausedByVideo || (e._autoPlayRunning = !1, e._autoPlayTimeout && (clearTimeout(e._autoPlayTimeout), e._autoPlayTimeout = null))
            }
        }), $.rsModules.autoplay = $.rsProto._initAutoplay
    }(jQuery),
    function($) {
        "use strict";
        $.extend($.rsProto, {
            _initBullets: function() {
                var e = this;
                if ("bullets" === e.st.controlNavigation) {
                    var t = '<div class="rsNavItem rsBullet"><span></span></div>';
                    e.ev.one("rsAfterPropsSetup", function() {
                        e._controlNavEnabled = !0, e.slider.addClass("rsWithBullets");
                        for (var n = '<div class="rsNav rsBullets">', r = 0; r < e.numSlides; r++) n += t;
                        e._controlNav = n = $(n + "</div>"), e._controlNavItems = n.appendTo(e.slider).children(), e._controlNav.on("click.rs", ".rsNavItem", function(t) {
                            e._thumbsDrag || e.goTo($(this).index())
                        })
                    }), e.ev.on("rsOnAppendSlide", function(n, r, i) {
                        i >= e.numSlides ? e._controlNav.append(t) : e._controlNavItems.eq(i).before(t), e._controlNavItems = e._controlNav.children()
                    }), e.ev.on("rsOnRemoveSlide", function(t, n) {
                        var r = e._controlNavItems.eq(n);
                        r && r.length && (r.remove(), e._controlNavItems = e._controlNav.children())
                    }), e.ev.on("rsOnUpdateNav", function() {
                        var t = e.currSlideId,
                            n, r;
                        e._prevNavItem && e._prevNavItem.removeClass("rsNavSelected"), n = e._controlNavItems.eq(t), n.addClass("rsNavSelected"), e._prevNavItem = n
                    })
                }
            }
        }), $.rsModules.bullets = $.rsProto._initBullets
    }(jQuery),
    function($) {
        "use strict";
        $.extend($.rsProto, {
            _initDeeplinking: function() {
                var e = this,
                    t, n, r;
                if (e._hashDefaults = {
                        enabled: !1,
                        change: !1,
                        prefix: ""
                    }, e.st.deeplinking = $.extend({}, e._hashDefaults, e.st.deeplinking), e.st.deeplinking.enabled) {
                    var i = e.st.deeplinking.change,
                        o = e.st.deeplinking.prefix,
                        s = "#" + o,
                        a = function() {
                            var e = window.location.hash;
                            return e && e.indexOf(o) > 0 && (e = parseInt(e.substring(s.length), 10), e >= 0) ? e - 1 : -1
                        },
                        l = a(); - 1 !== l && (e.st.startSlideId = l), i && ($(window).on("hashchange" + e.ns, function(n) {
                        if (!t) {
                            var r = a();
                            if (0 > r) return;
                            r > e.numSlides - 1 && (r = e.numSlides - 1), e.goTo(r)
                        }
                    }), e.ev.on("rsBeforeAnimStart", function() {
                        n && clearTimeout(n), r && clearTimeout(r)
                    }), e.ev.on("rsAfterSlideChange", function() {
                        n && clearTimeout(n), r && clearTimeout(r), r = setTimeout(function() {
                            t = !0, window.location.replace(("" + window.location).split("#")[0] + s + (e.currSlideId + 1)), n = setTimeout(function() {
                                t = !1, n = null
                            }, 60)
                        }, 400)
                    })), e.ev.on("rsBeforeDestroy", function() {
                        r = null, n = null, i && $(window).off("hashchange" + e.ns)
                    })
                }
            }
        }), $.rsModules.deeplinking = $.rsProto._initDeeplinking
    }(jQuery),
    function($, e, t) {
        "$:nomunge";

        function n(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var r = "hashchange",
            i = document,
            o, s = $.event.special,
            a = i.documentMode,
            l = "on" + r in e && (a === t || a > 7);
        $.fn[r] = function(e) {
            return e ? this.bind(r, e) : this.trigger(r)
        }, $.fn[r].delay = 50, s[r] = $.extend(s[r], {
            setup: function() {
                return l ? !1 : void $(o.start)
            },
            teardown: function() {
                return l ? !1 : void $(o.stop)
            }
        }), o = function() {
            function o() {
                var t = n(),
                    i = f(u);
                t !== u ? (d(u = t, i), $(e).trigger(r)) : i !== u && (location.href = location.href.replace(/#.*/, "") + i), a = setTimeout(o, $.fn[r].delay)
            }
            var s = {},
                a, u = n(),
                c = function(e) {
                    return e
                },
                d = c,
                f = c;
            return s.start = function() {
                a || o()
            }, s.stop = function() {
                a && clearTimeout(a), a = t
            }, e.attachEvent && !e.addEventListener && !l && function() {
                var e, t;
                s.start = function() {
                    e || (t = $.fn[r].src, t = t && t + n(), e = $('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        t || d(n()), o()
                    }).attr("src", t || "javascript:0").insertAfter("body")[0].contentWindow, i.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (e.document.title = i.title)
                        } catch (t) {}
                    })
                }, s.stop = c, f = function() {
                    return n(e.location.href)
                }, d = function(t, n) {
                    var o = e.document,
                        s = $.fn[r].domain;
                    t !== n && (o.title = i.title, o.open(), s && o.write('<script>document.domain="' + s + '"</script>'), o.close(), e.location.hash = t)
                }
            }(), s
        }()
    }(jQuery, this),
    function($) {
        "use strict";
        $.rsProto._initVisibleNearby = function() {
            var e = this;
            e.st.visibleNearby && e.st.visibleNearby.enabled && (e._vnDefaults = {
                enabled: !0,
                centerArea: .6,
                center: !0,
                breakpoint: 0,
                breakpointCenterArea: .8,
                hiddenOverflow: !0,
                navigateByCenterClick: !1
            }, e.st.visibleNearby = $.extend({}, e._vnDefaults, e.st.visibleNearby), e.ev.one("rsAfterPropsSetup", function() {
                e._sliderVisibleNearbyWrap = e._sliderOverflow.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent(), e.st.visibleNearby.hiddenOverflow || e._sliderVisibleNearbyWrap.css("overflow", "visible"), e._controlsContainer = e.st.controlsInside ? e._sliderVisibleNearbyWrap : e.slider
            }), e.ev.on("rsAfterSizePropSet", function() {
                var t, n = e.st.visibleNearby;
                t = n.breakpoint && e.width < n.breakpoint ? n.breakpointCenterArea : n.centerArea, e._slidesHorizontal ? (e._wrapWidth = e._wrapWidth * t, e._sliderVisibleNearbyWrap.css({
                    height: e._wrapHeight,
                    width: e._wrapWidth / t
                }), e._minPosOffset = e._wrapWidth * (1 - t) / 2 / t) : (e._wrapHeight = e._wrapHeight * t, e._sliderVisibleNearbyWrap.css({
                    height: e._wrapHeight / t,
                    width: e._wrapWidth
                }), e._minPosOffset = e._wrapHeight * (1 - t) / 2 / t), n.navigateByCenterClick || (e._nextSlidePos = e._slidesHorizontal ? e._wrapWidth : e._wrapHeight), n.center && e._sliderOverflow.css("margin-" + (e._slidesHorizontal ? "left" : "top"), e._minPosOffset)
            }))
        }, $.rsModules.visibleNearby = $.rsProto._initVisibleNearby
    }(jQuery);
var globalMethods = function($) {
    var e = {};
    e.missionNative = {
        _regexClass: function(e, t) {
            return t && (e += "\\S*"), new RegExp("(?:^|\\s)" + e + "(?!\\S)", "g")
        },
        isArray: function(e) {
            return Array.isArray(e)
        },
        inArray: function(e, t) {
            return e.indexOf(t) > -1
        },
        isNodeList: function(e) {
            return "undefined" != typeof e.length && (0 === e.length || "undefined" != typeof e[0] && "undefined" != typeof e[e.length - 1])
        },
        hasClass: function(t, n) {
            var r = e.missionNative._regexClass(n);
            return r.test(t.className)
        },
        addClass: function(t, n) {
            if (null !== t)
                if (e.missionNative.isNodeList(t))
                    for (var r = 0; r < t.length; r++) e.missionNative.addClass(t[r], n);
                else e.missionNative.hasClass(t, n) || (t.className += " " + n)
        },
        removeClass: function(t, n, r) {
            if (null !== t)
                if (e.missionNative.isNodeList(t))
                    for (var i = 0; i < t.length; i++) e.missionNative.removeClass(t[i], n);
                else {
                    var o = e.missionNative._regexClass(n, r);
                    t.className = t.className.replace(o, "")
                }
        },
        setClass: function(t, n, r) {
            r ? e.missionNative.addClass(t, n) : e.missionNative.removeClass(t, n)
        },
        setAttribute: function(t, n, r) {
            if (e.missionNative.isNodeList(t))
                for (var i = 0; i < t.length; i++) e.missionNative.setAttribute(t[i], n, r);
            else t[n] = r
        },
        empty: function(e) {
            for (; e.hasChildNodes();) e.removeChild(e.firstChild)
        },
        textContent: function(t, n) {
            if (e.missionNative.isNodeList(t))
                for (var r = 0; r < t.length; r++) e.missionNative.textContent(t[r], n);
            else t.textContent = n
        },
        innerHTML: function(t, n, r) {
            if (null !== t) {
                var i;
                if (e.missionNative.isNodeList(t))
                    for (i = 0; i < t.length; i++) e.missionNative.innerHTML(t[i], n, r);
                else {
                    var o = document.createElement("div");
                    o.innerHTML = n;
                    var s = o.childNodes.length;
                    for ("append" !== r && "prepend" !== r && e.missionNative.empty(t), i = 0; s > i; i++) t.appendChild(o.childNodes[0])
                }
            }
        },
        outerHTML: function(e, t) {
            var n = e.parentNode,
                r = document.createElement("div");
            if ("undefined" != typeof t && "" !== t) return r.innerHTML = t, t = r.childNodes[0], n.replaceChild(t, e), t;
            var i = e.cloneNode(!0);
            return r.appendChild(i), r.innerHTML
        },
        reflow: function(e) {
            e.offsetWidth = e.offsetWidth
        },
        slideTransition: function(t, n, r, i) {
            var o;
            if (e.missionNative.isNodeList(t))
                for (o = 0; o < t.length; o++) e.missionNative.slideTransition(t[o], n, r, i);
            else {
                "undefined" == typeof i && (i = {});
                var s = !n,
                    a = t.clientHeight,
                    l = n ? t.scrollHeight : 0;
                if (i.elaborateHeight)
                    for (l = 0, o = 0; o < t.children.length; o++) l += t.children[o].clientHeight;
                if ("undefined" == typeof a) return void(i.verbose && e.log("Slide Element: Failed to fetch height of element (" + t + ")", "warning"));
                if (a === l) return void(i.verbose && e.log("Slide Element: Element target height and current height are identical"));
                s && (t.style.height = a + "px", e.missionNative.reflow(t)), t.style.height = l + "px", setTimeout(e.missionNative._slideTransitionTimeoutFn, r, t)
            }
        },
        _slideTransitionTimeoutFn: function(e) {
            e.style.removeProperty ? e.style.removeProperty("height") : e.style.removeAttribute("height")
        },
        parentalClassControl: function(t, n, r, i) {
            var o;
            if ("AND" === i) o = !0;
            else {
                if ("OR" !== i) return;
                o = !1
            }
            for (var s, a = n.length - 1; a >= 0; a--) {
                if (s = e.missionNative.hasClass(n[a], r),
                    "AND" === i && !s) {
                    o = !1;
                    break
                }
                if ("OR" === i && s) {
                    o = !0;
                    break
                }
            }
            if (o) {
                if (e.missionNative.hasClass(t, r)) return null;
                e.missionNative.addClass(t, r)
            } else {
                if (!e.missionNative.hasClass(t, r)) return null;
                e.missionNative.removeClass(t, r)
            }
            return o
        },
        templating: function(e, t) {
            var n, r, i, o;
            for (n in t) r = "\\[\\[" + n + "\\]\\]", i = t[n], o = new RegExp(r, "g"), e = e.replace(o, i);
            return e
        },
        setCookie: function(e, t, n, r) {
            null === t && (t = ""), "boolean" == typeof t && (t = t ? 1 : 0), "undefined" != typeof n && n || (n = 7), "undefined" == typeof r && (r = "");
            var i = new Date;
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
            var o = "expires=" + i.toUTCString();
            r = "path=/" + r, document.cookie = e + "=" + t + "; " + o + "; " + r
        },
        getCookie: function(e, t) {
            for (var n = e + "=", r = document.cookie.split(";"), i, o = 0; o < r.length; o++)
                if (i = r[o].trim(), i.substring(0, e.length) === e) return t ? !0 : i.substring(n.length);
            return t ? !1 : void 0
        },
        issetCookie: function(t) {
            return e.missionNative.getCookie(t, !0)
        },
        checkCookie: function(t, n) {
            var r = e.missionNative.getCookie(t);
            return r === n
        },
        countObjectKeys: function(e) {
            return Object.keys(e).length
        },
        hasParent: function(t, n) {
            if (e.missionNative.isNodeList(n)) {
                for (var r = !1, i = 0; i < n.length && !(r = e.missionNative.hasParent(t, n[i])); i++);
                return r
            }
            for (var o = t || !1, s = n; o && o !== s;) o = o.parentNode || !1;
            return o !== !1
        },
        toIntAttempt: function(e) {
            return "string" != typeof e || isNaN(e) ? e : parseInt(e)
        },
        getElementValue: function(t, n) {
            var r = t.defaultValue ? t.defaultValue : t.value ? t.value : 0;
            return n || (r = e.missionNative.toIntAttempt(r)), r
        },
        nodeListToArray: function(e, t) {
            var n, r;
            if ("object" != typeof t) {
                for (t = [], n = e.length; n--; t.unshift(e[n]));
                return t
            }
            for (n = 0, r = e.length; r > n; t.push(e[n++]));
        },
        nextInList: function(t, n, r) {
            if ("number" == typeof t) t = e.missionNative.list(t);
            else if ("number" != typeof t.length) {
                if ("object" != typeof t) return void e.log("nextInList: Supplied list element is invalid.", "warning");
                t = Object.keys(t), "number" == typeof n && (n = n.toString())
            }
            "number" != typeof r && (r = 1);
            var i = t.length,
                o = t.indexOf(n);
            if (0 > o) return t[0];
            0 > r && (r = i + r % i);
            var s = (o + r) % i,
                a = t[s];
            return a
        },
        list: function(e) {
            e = Math.round(e);
            for (var t = []; e > 0;) t[--e] = e;
            return t
        },
        btnActivation: function(t, n, r) {
            if (e.missionNative.isNodeList(t))
                for (var i = 0; i < t.length; i++) e.missionNative.btnActivation(t[i], n, r);
            else {
                var o = r ? "readonly" : "disabled",
                    s = r ? t.readonly : t.disabled;
                n && s ? t.removeAttribute(o) : n || s || t.setAttribute(o, !0)
            }
        },
        getScrollState: function(e, t) {
            "number" != typeof t && (t = 1);
            var n = e.clientHeight ? e.clientHeight : e.offsetHeight,
                r = e.scrollHeight,
                i = r - n - t,
                o = e.scrollTop,
                s = 0 + t,
                a = !1;
            return r > n && (a = s >= o ? "top" : o >= i ? "bottom" : "middle"), a
        },
        argumentsArray: function(e) {
            for (var t = [], n = 0; n < e.length; n++) t.push(e[n]);
            return t
        },
        roundDown: function(e, t) {
            var n = Math.pow(10, t);
            return Math.floor(e * n) / n
        }
    }, e.log = function(e, t) {
        if ("object" == typeof console) {
            var n = "log";
            switch (t) {
                case "warn":
                case "warning":
                    n = "warn";
                    break;
                case "err":
                case "error":
                    n = "error";
                    break;
                case "info":
                    n = "info"
            }
            console[n](e)
        }
    }, e.globalElements = {
        $document: $(document),
        $window: $(window)
    }, e.popup = {
        count: 0,
        bodyClass: void 0,
        open: function(t) {
            this.count++, this.bodyClass = t, e.globalElements.$body.addClass("popup").addClass("popup--" + t), e.globalElements.$pageOverlayElement.on("click", e.popup.back)
        },
        back: function(t, n, r) {
            void 0 === n && t.data ? (r = t.data.preventDefault, n = t.data.condition) : void 0 === n && (n = !0), n && (r && t.preventDefault(), "" === e.popup.hashHandeling.prevHash ? window.history.back() : window.location.hash = "")
        },
        close: function() {
            this.count = 0, e.globalElements.$body.removeClass("popup").removeClass("popup--" + this.bodyClass), e.globalElements.$pageOverlayElement.off("click", e.popup.back)
        },
        hashHandeling: {
            count: 0,
            currentHash: void 0,
            prevHash: void 0,
            delay: 16,
            hashes: {},
            hashResets: [],
            add: function(e, t, n) {
                this.hashes[e] = t, this.hashResets[this.count] = n, this.count++
            },
            hashDo: function(t) {
                if (this.prevHash = this.currentHash, this.currentHash = window.location.hash, t) {
                    e.popup.close();
                    for (var n = 0; n < e.popup.hashHandeling.count; n++) e.popup.hashHandeling.hashResets[n]()
                }
                for (var r in this.hashes)
                    if (r === this.currentHash) {
                        e.popup.open(r.substr(1)), e.popup.hashHandeling.hashes[r]();
                        break
                    }
            }
        }
    }, e.lazyTarget = function(e) {
        e.preventDefault()
    }, e.egoisticTarget = function(e) {
        e.stopPropagation()
    }, e.scrollToMe = function(t, n, r, i) {
        var o = t.offsetTop;
        if ("number" != typeof n && (n = 0), "up" === r || "down" === r) {
            var s = e.globalElements.$body.scrollTop();
            if ("up" === r && o >= s || "down" === r && s >= o) return
        }
        "undefined" == typeof i && (i = "easeOutQuint"), e.globalElements.$htmlbody.animate({
            scrollTop: o
        }, n, i)
    }, e.priceFormat = function(e, t) {
        return isNaN(t) && (t = e % 100 === 0 ? 0 : 2), "$" + (e / 100).toFixed(t)
    }, e.quantityControl = {
        Controller: function(e) {
            var t = e.method,
                n = e.fallback,
                r = 1,
                i = 256;
            return void 0 !== e.min && (r = e.min), void 0 !== e.max && (i = e.max),
                function(e) {
                    var o = e.target,
                        s = parseInt(o.value);
                    isNaN(s) || r > s ? o.value = n(e) : (s > i && (s = i, o.value = s), t(e, s))
                }
        },
        Updater: function() {
            return function(t) {
                this.total += t;
                var n = e.priceFormat(this.total);
                e.missionNative.innerHTML(this.elements.total, n)
            }
        }
    }, e.inputControl = {
        Controller: function(t) {
            var n = t.method,
                r = t.fallback,
                i = "default",
                o, s = !1,
                a = !1;
            return t.handler && (i = t.handler), t.length && (o = t.length), t.isRequired && (s = t.isRequired), t.blur && (a = t.blur),
                function(t) {
                    var l = t.target,
                        u = l.value,
                        c, d, f = !1;
                    c = e.inputControl.handlers[i](u, o), s && !c ? (d = r(t), f = !0) : d = c, d !== u && (l.value = d), a && l.blur(), n(t, d, f)
                }
        },
        handlers: {
            "default": function(e, t) {
                return e.replace(/–/g, "-").replace(/[^\w\s-]/g, "").replace(/\s(?=\s)/g, "").trim().substr(0, t)
            },
            humanPunct: function(e, t) {
                return e.replace(/–/g, "-").replace(/[^\w\s-()\[\]!?.:;'"&+\/]/g, "").replace(/\s(?=\s)/g, "").trim().substr(0, t)
            }
        }
    }, e.lazyActions = {
        elements: {
            $submits: $(".form-submit, .btn--submit, .btn-disguise"),
            $disguisedSubmitInputs: $(".btn-disguised")
        },
        triggers: {
            buttonLazify: function(t) {
                var n = $(this);
                if ("undefined" == typeof this.dataset.neverLazy) return "undefined" != typeof this.dataset.lazified ? void t.preventDefault() : (this.dataset.lazified = "", "INPUT" === this.tagName ? (this.className += " btn-wip", n.before(Drupal.theme("dbrandV3InputThrobber", this.id))) : (this.className += " btn-wip interact-wip", n.prepend(Drupal.theme("dbrandV3Throbber"))), n.on("click", e.lazyActions.triggers.buttonDeny), n.parents("form").length > 0 && void 0 !== n.parents("form")[0].dataset.lazified ? void t.preventDefault() : void 0)
            },
            buttonDeny: function(t) {
                t.preventDefault();
                var n = t.currentTarget;
                e.missionNative.removeClass(n, "btn-denied"), e.missionNative.reflow(n), e.missionNative.addClass(n, "btn-denied")
            },
            formLazify: function(t) {
                var n = $(this);
                return void 0 !== this.dataset.lazified ? void t.preventDefault() : (this.dataset.lazified = "", this.className += " form-wip", n.find("a, input, button").off("click", e.lazyActions.triggers.buttonDeny), void n.find("a, input, button").on("click", e.lazyActions.triggers.buttonDeny))
            }
        },
        noScrollOnFocus: function(e) {
            e.on("focus", function() {
                e.on("mousewheel.disableScroll", function(e) {
                    e.preventDefault()
                })
            }), e.on("blur", function() {
                e.off("mousewheel.disableScroll")
            })
        },
        lazifyButton: function(t) {
            var n = $(t);
            e.missionNative.addClass(t, "btn-wip"), "INPUT" === t.tagName ? n.before(Drupal.theme("dbrandV3InputThrobber", t.id)) : (e.missionNative.addClass(t, "interact-wip"), n.prepend(Drupal.theme("dbrandV3Throbber")))
        },
        releaseButton: function(t) {
            if (e.missionNative.isNodeList(t))
                for (var n = 0; n < t.length; n++) e.lazyActions.releaseButton(t[n]);
            else e.missionNative.removeClass(t, "btn-wip"), "INPUT" === t.tagName ? t.parentNode.removeChild(t.previousElementSibling) : (e.missionNative.removeClass(t, "interact-wip"), t.removeChild(t.firstChild))
        },
        init: function() {
            this.elements.$submits.on("click", this.triggers.buttonLazify), this.elements.$disguisedSubmitInputs.off("click", this.triggers.buttonLazify), e.globalElements.$forms.submit(this.triggers.formLazify)
        }
    }, e.keyCodes = {
        up: 38,
        down: 40,
        space: 32,
        enter: 13,
        esc: 27
    }, e.keyNames = {
        38: "up",
        40: "down",
        32: "space",
        13: "enter",
        27: "esc"
    }, e.preventParentScrolling = function(e, n, o) {
        e instanceof $ || (e = $(e)), n && e.on("wheel", t), o && (e.on("touchstart", r), e.on("touchmove", i))
    };
    var t = function(e) {
            var t = e.originalEvent.deltaY;
            o(e, t)
        },
        n = null,
        r = function(e) {
            var t = e.originalEvent.touches[0].clientY;
            n = t
        },
        i = function(e) {
            var t = e.originalEvent.touches[0].clientY,
                r = n - t;
            n = t, e.originalEvent.cancelable && o(e, r)
        },
        o = function(t, n, r) {
            var i = t.currentTarget,
                o = e.missionNative.getScrollState(i, r);
            o && (0 > n && "top" === o || n > 0 && "bottom" === o) && (t.preventDefault(), t.stopPropagation())
        };
    return window.addEventListener("hashchange", function() {
        e.popup.hashHandeling.hashDo(!0)
    }), e.globalElements.$window.load(function() {
        e.popup.hashHandeling.hashDo(!1)
    }), e.globalElements.$document.keydown(function(t) {
        27 === t.keyCode && e.popup.count > 0 && e.popup.back(t, !0, !1)
    }), e._inits = function() {
        e.globalElements.$body = $("body"), e.globalElements.$htmlbody = $("html,body"), e.globalElements.$pageOverlayElement = $("#page-overlay"), e.globalElements.$forms = $("form"), e.lazyActions.init()
    }, e
}(jQuery);
jQuery(document).ready(globalMethods._inits), jQuery(document).ready(function() {
        jQuery.scrollDepth({
            pixelDepth: !1
        })
    }), jQuery(document).ready(function($) {
        function e() {
            l || (s.off("mouseenter", t).addClass("active").removeClass("semi"), a.addClass("active"), l = !0)
        }

        function t() {
            "default" === s.css("cursor") && (window.location.hash = u)
        }

        function n() {
            l && (s.removeClass("active"), a.removeClass("active"), l = !1)
        }

        function r() {
            l || (s.addClass("semi"), a.removeClass("active"), s.on("mouseenter", t))
        }

        function i() {
            s.removeClass("semi")
        }
        var o = window.globalMethods,
            s = $("#nav-vertical-wrapper"),
            a = $("#btn-menu-toggle"),
            l = !1,
            u = a.attr("href");
        a.mouseenter(function() {
            r()
        }).mouseleave(function() {
            setTimeout(function() {
                i()
            }, 34)
        }), a.click(function(e) {
            l && o.popup.back(e, l, !0)
        }), o.popup.hashHandeling.add(u, e, n)
    }), jQuery(document).ready(function($) {
        function e() {
            return $(".l-region--resources .block__title.active")
        }
        var t = {},
            n = document.querySelector(".block--newsletter form.mailchimp-lists-user-subscribe-form-newsletter-users");
        null !== n && (t.newsletter = {
            users: {
                elements: {
                    checkbox: n.querySelector(".form-checkbox"),
                    submit: n.querySelector(".form-submit")
                }
            }
        }, null !== t.newsletter.users.elements.checkbox && (t.newsletter.users.elements.checkbox.checked = !0, t.newsletter.users.elements.submit.value = "Sign Up"));
        var r = $(".l-region--resources .block__title"),
            i = 120;
        r.click(function() {
            "pointer" === $(this).css("cursor") && ($(this).hasClass("active") ? $(this).removeClass("active").next(".list").slideUp(i) : (e().removeClass("active").next(".list").slideUp(i), $(this).addClass("active").next(".list").slideDown(i)))
        })
    }),
    function($) {
        Drupal.ajax.prototype.beforeSend = function(xmlhttprequest, options) {
            if (this.form) {
                options.extraData = options.extraData || {}, options.extraData.ajax_iframe_upload = "1";
                var v = $.fieldValue(this.element);
                null !== v && (options.extraData[this.element.name] = v)
            }
            var thisElement = $(this.element);
            if (thisElement.addClass("progress-disabled").attr("disabled", !0).parent().addClass("interact-wip"), "bar" == this.progress.type) {
                var progressBar = new Drupal.progressBar("interact-progress-" + this.element.id, eval(this.progress.update_callback), this.progress.method, eval(this.progress.error_callback));
                this.progress.message && progressBar.setProgress(-1, this.progress.message), this.progress.url && progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500), this.progress.element = $(progressBar.element).addClass("interact-progress interact-progress-bar"), this.progress.object = progressBar, thisElement.before(this.progress.element)
            } else "throbber" == this.progress.type && (this.progress.element = $(Drupal.theme("dbrandV3Throbber")), thisElement.is("button") ? thisElement.prepend(this.progress.element) : thisElement.next().is("label") ? thisElement.next().append(this.progress.element) : thisElement.before(this.progress.element))
        }, Drupal.ajax.prototype.success = function(e, t) {
            this.progress.element && $(this.progress.element).remove(), this.progress.object && this.progress.object.stopMonitoring(), $(this.element).removeClass("progress-disabled").removeAttr("disabled").parent().removeClass("interact-wip"), Drupal.freezeHeight();
            for (var n in e) e.hasOwnProperty(n) && e[n].command && this.commands[e[n].command] && this.commands[e[n].command](this, e[n], t);
            if (this.form) {
                var r = this.settings || Drupal.settings;
                Drupal.attachBehaviors(this.form, r)
            }
            Drupal.unfreezeHeight(), this.settings = null
        }, Drupal.ajax.prototype.error = function(e, t) {
            if (alert(Drupal.ajaxError(e, t)), this.progress.element && $(this.progress.element).remove(), this.progress.object && this.progress.object.stopMonitoring(), $(this.wrapper).show(), $(this.element).removeClass("progress-disabled").removeAttr("disabled").parent().removeClass("interact-wip"), this.form) {
                var n = e.settings || this.settings || Drupal.settings;
                Drupal.attachBehaviors(this.form, n)
            }
        }
    }(jQuery),
    function($) {
        Drupal.behaviors.password = {
            attach: function(e, t) {
                var n = t.password;
                $("input.password-field", e).once("password", function() {
                    var e = $(this),
                        r = $(this).parent(),
                        i = $(this).parent().parent().parent();
                    r.addClass("password-parent"), $("input.password-confirm", i).parent().append('<div class="description password-confirm-info">' + n.confirmTitle + ' <span class="password-confirm-text"></span></div>').addClass("confirm-parent");
                    var o = $("input.password-confirm", i),
                        s = $("div.password-confirm-info", i),
                        a = $("span.password-confirm-text", s),
                        l = '<div class="form-input-sibling password-indicator"><div class="indicator"></div></div><div class="description password-strength-info"><span class="password-strength-title">' + n.strengthTitle + ' </span><span class="password-strength-text" aria-live="assertive"></span></div>';
                    r.append(l);
                    var u = $("div.indicator", i),
                        c = $("div.password-strength-info", i),
                        d = $("span.password-strength-text", c);
                    $(o).parent().after('<div class="description password-suggestions"></div>');
                    var f = $("div.password-suggestions", i),
                        p = function() {
                            var n = e.val(),
                                r = Drupal.evaluatePasswordStrength(n, t.password);
                            f.html() !== r.message && f.html(r.message), 100 !== r.strength && n ? f.removeClass("hidden") : f.addClass("hidden"), u.css("width", r.strength + "%"), d.html(r.indicatorText), h()
                        },
                        h = function() {
                            var t = e.val() === o.val();
                            this.confirmClass && a.removeClass(this.confirmClass);
                            var r = t ? "ok" : "error";
                            a.html(n["confirm" + (t ? "Success" : "Failure")]).addClass(r), this.confirmClass = r
                        };
                    e.keyup(p).focus(p).blur(p), o.keyup(h).blur(h), p()
                })
            }
        }
    }(jQuery),
    function($) {
        $(document).bind("state:slideTransitionWithParental", function(e) {
            if (e.trigger) {
                var t = $(e.target).closest(".form-item, .form-submit, .form-wrapper"),
                    n = t.parent().children(),
                    r = t.parent().closest(".form-item, .form-submit, .form-wrapper")[0],
                    i = t[0],
                    o = e.value,
                    s = 200;
                o ? i.dataset.state = "true" : i.dataset.state = "false";
                var a = function(e, t) {
                    t ? globalMethods.missionNative.addClass(e, "active") : globalMethods.missionNative.removeClass(e, "active")
                };
                setTimeout(function() {
                    for (var e = globalMethods.missionNative.hasClass(r, "active"), t = !1, l = !1, u = !1, c = n.length - 1; c >= 0; c--)
                        if ("true" === n[c].dataset.state) {
                            t = !0;
                            break
                        }
                    t !== e && (l = !0), l === !0 && o === !1 && (u = !0), u ? (globalMethods.missionNative.slideTransition(r, t, s), a(r, t), setTimeout(function() {
                        a(i, o)
                    }, s)) : l ? (a(i, o), globalMethods.missionNative.slideTransition(r, t, s), a(r, t)) : a(i, o)
                }, 1)
            }
        })
    }(jQuery),
    function() {
        Drupal.theme.prototype.dbrandV3Throbber = function(e) {
            return e = e ? '<div class="message"><span class="inner">Accessing</span></div>' : "", '<div class="interact-progress interact-progress-throbber"><div class="inner"><div class="throbber"><div class="inner">&nbsp;</div></div>' + e + "</div></div>"
        }, Drupal.theme.prototype.dbrandV3InputThrobber = function(e) {
            return e = e ? ' id="interact-input--' + e + '"' : "", "<div" + e + ' class="interact-wip interact-input">' + Drupal.theme("dbrandV3Throbber") + "</div>"
        }
    }(jQuery), jQuery(document).ready(function($) {
        var e = document.getElementsByClassName("l-messages");
        if (0 !== e.length) {
            var t = {
                transitionSpeed: 200,
                classes: {},
                elements: {
                    messagesWrappers: e,
                    messages: []
                },
                categories: [],
                _init: function() {
                    for (var n = 0, r = e.length - 1; r >= 0; r--)
                        for (var i = e[r].getElementsByClassName("message"), o = i.length - 1; o >= 0; o--) {
                            var s = i[o];
                            t.elements.messages[n] = new t.classes.Message(n, s), n++
                        }
                }
            };
            t.classes.Message = function n(e, t) {
                this.id = e, this.el = t, this._init()
            }, t.classes.Message.prototype._init = function() {
                if (this.dismissEl = $(this.el.getElementsByClassName("message-dismiss")[0]), this.dismissEl.on("click", {
                        id: this.id
                    }, t.classes.Message.triggers.dismiss), "undefined" != typeof this.el.dataset.statusmessageSlidein) {
                    var e = this.el.dataset.statusmessageSlidein,
                        n = this.el;
                    setTimeout(function() {
                        globalMethods.missionNative.slideTransition(n, !0, t.transitionSpeed), globalMethods.missionNative.removeClass(n, "dismissed")
                    }, e)
                }
            }, t.classes.Message.prototype.dismiss = function() {
                globalMethods.missionNative.slideTransition(this.el, !1, t.transitionSpeed), this.el.className += " dismissed"
            }, t.classes.Message.triggers = {
                dismiss: function(e) {
                    e.preventDefault();
                    var n = t.elements.messages[e.data.id];
                    n.dismiss()
                }
            }, t._init()
        }
    }), jQuery(document).ready(function($) {
        var e = window.globalMethods,
            t = document.getElementById("l-tabs");
        if (null !== t) {
            var n = {
                elements: {
                    tabs: t.getElementsByClassName("tabs-wrapper")
                },
                transitionSpeed: 200,
                triggers: {},
                classes: {},
                init: function() {
                    for (var e = this.elements.tabs.length - 1; e >= 0; e--) this.elements.tabs[e] = new this.classes.Tabs(e)
                }
            };
            n.classes.Tabs = function r(e) {
                this.tabsID = e, this._init()
            }, n.classes.Tabs.prototype._init = function() {
                var e = n.elements.tabs[this.tabsID];
                this.elements = {
                    self: e,
                    $self: $(e),
                    list: e.getElementsByClassName("tabs")[0],
                    active: e.getElementsByClassName("active")[0]
                }, this.isOpen = !1, this.elements.$toggler = $('<a href="" class="tab--toggler">' + this.elements.active.childNodes[0].innerHTML + "</a>"), this.elements.$self.prepend(this.elements.$toggler), this.elements.self.className += " tabs-wrapper--toggle", this.elements.$toggler.on("click", {
                    Tabs: this
                }, this.triggers.toggle)
            }, n.classes.Tabs.prototype.open = function() {
                this.isOpen !== !0 && (this.isOpen = !0, e.missionNative.slideTransition(this.elements.list, !0, n.transitionSpeed), this.elements.self.className += " open", e.globalElements.$body.on("click", {
                    Tabs: this
                }, this.triggers.toggle), this.elements.$self.on("click", e.egoisticTarget))
            }, n.classes.Tabs.prototype.close = function() {
                this.isOpen !== !1 && (this.isOpen = !1, e.missionNative.slideTransition(this.elements.list, !1, n.transitionSpeed), e.missionNative.removeClass(this.elements.self, "open"), e.globalElements.$body.off("click", this.triggers.toggle))
            }, n.classes.Tabs.prototype.toggle = function() {
                this.isOpen === !1 ? this.open() : this.close()
            }, n.classes.Tabs.prototype.triggers = {
                toggle: function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = e.data.Tabs;
                    "pointer" === t.elements.$toggler.css("cursor") && t.toggle()
                }
            }, n.init()
        }
    }), jQuery(document).ready(function($) {
        "use strict";
        var e = window.globalMethods,
            t = document.getElementById("pli");
        if (null !== t) {
            var n = {
                    pli: t,
                    input: document.getElementById("pli-finder-input"),
                    deviceList: document.getElementById("pli-device-list")
                },
                r = {
                    input: $(n.input)
                },
                i = window.pli_feed,
                o = [],
                s = {},
                a = function c(e, t) {
                    this.id = e, this.data = t, this.el = document.getElementById("pli-device--" + e), this.is_active = !0
                };
            a.prototype.show = function() {
                this.is_active || (e.missionNative.removeClass(this.el, "hidden"), this.is_active = !0)
            }, a.prototype.hide = function() {
                this.is_active && (e.missionNative.addClass(this.el, "hidden"), this.is_active = !1)
            }, a.prototype.matchesData = function(e) {
                return -1 !== this.data.title.indexOf(e) || -1 !== this.data.manufacturer.indexOf(e) || -1 !== this.data.category.indexOf(e) || -1 !== this.data.title_alt.indexOf(e)
            };
            var l = function d(e) {
                this.id = e, this.el = document.getElementById("pli-device-group--" + e), this.is_active = !0
            };
            l.prototype.show = function() {
                this.is_active || (e.missionNative.removeClass(this.el, "hidden"), this.is_active = !0)
            }, l.prototype.hide = function() {
                this.is_active && (e.missionNative.addClass(this.el, "hidden"), this.is_active = !1)
            };
            var u = function() {
                var t = "",
                    r = !1,
                    i = !1,
                    a = function(t) {
                        r !== t && (e.missionNative.setClass(n.pli, "pli-mode--search", t), r = t)
                    },
                    l = function(t) {
                        i !== t && (e.missionNative.setClass(n.pli, "pli-mode--search--empty", t), i = t)
                    };
                return function(e) {
                    if (e !== t) {
                        if ("" === e) a(!1), l(!1);
                        else {
                            var n = !0;
                            a(!0);
                            var r, i, u, c = {};
                            for (r = o.length - 1; r >= 0; r--) i = o[r], i.matchesData(e) ? (i.show(), n = !1, u = i.data.group, c[u] !== !0 && (c[u] = !0)) : i.hide();
                            var d;
                            for (u in s) d = s[u], c[u] === !0 ? d.show() : d.hide();
                            l(n)
                        }
                        t = e
                    }
                }
            }();
            r.input.on("input", function(e) {
                    var t = e.target.value.toLowerCase();
                    u(t)
                }), $(document.getElementById("pli-finder-cancel")).on("click", function() {
                    n.input.value = "", u("")
                }), r.input.on("keydown", function(t) {
                    var r = t.keyCode || t.which,
                        i = e.keyNames[r];
                    switch (i) {
                        case "enter":
                        case "esc":
                            if (n.input.blur(), "" !== n.input.value) {
                                var o = n.deviceList.querySelector(".pli-device-itm:not(.hidden) .pli-device-link");
                                o.focus()
                            }
                            t.preventDefault()
                    }
                }),
                function() {
                    var e, t, r;
                    for (e in i) t = i[e], o.push(new a(e, t)), r = t.group, "undefined" == typeof s[r] && (s[r] = new l(r));
                    "" !== n.input.value && u(n.input.value)
                }()
        }
    }), jQuery(document).ready(function($) {
        var e = window.globalMethods,
            t = {
                init: function() {
                    this.ajaxInit(), e.globalElements.$document.ajaxSuccess(t.ajaxInit)
                },
                ajaxInit: function() {
                    for (var t = document.getElementsByClassName("form-number--noscroll"), n = t.length - 1; n >= 0; n--) {
                        var r = $(t[n]);
                        e.lazyActions.noScrollOnFocus(r)
                    }
                }
            };
        t.init()
    }), jQuery(document).ready(function($) {
        var e = window.globalMethods,
            t = {
                scrollSpeed_default: 240,
                elements: {
                    $hashScrolls: $(".hash-scroll")
                },
                init: function() {
                    this.elements.$hashScrolls.on("click", this.triggers.hashScroll)
                },
                triggers: {
                    hashScroll: function(n) {
                        n.preventDefault();
                        var r = n.target,
                            i = t.scrollSpeed_default,
                            o = r.hash,
                            s = document.querySelector(o);
                        null !== s && ("undefined" != typeof r.dataset.hashSpeed && (i = parseInt(r.dataset.hashSpeed)), e.scrollToMe(s, i))
                    }
                }
            };
        t.init()
    }), jQuery(document).ready(function($) {
        var e = {
            scrollSpeed_default: 240,
            elements: {
                $radios: $("input.checkbox-label-toggle")
            },
            _init: function() {
                this.elements.$radios.on("click", this.triggers.radioLabelToggle);
                for (var e = this.elements.$radios.length - 1; e >= 0; e--) this.f.updateLabel(this.elements.$radios[e])
            },
            f: {
                updateLabel: function(e) {
                    var t = e.checked ? e.dataset.checkboxLabelOn : e.dataset.checkboxLabelOff,
                        n = e.checked ? e.dataset.checkboxLabelOff : e.dataset.checkboxLabelOn,
                        r = e.nextElementSibling,
                        i = r.innerHTML,
                        o;
                    if (i === n) o = t;
                    else {
                        var s = new RegExp(n + "(?=<|$)");
                        o = i.replace(s, t)
                    }
                    globalMethods.missionNative.innerHTML(r, o)
                }
            },
            triggers: {
                radioLabelToggle: function(t) {
                    var n = t.target;
                    e.f.updateLabel(n)
                }
            }
        };
        e._init()
    }), jQuery(document).ready(function($) {
        var e = window.globalMethods,
            t = {
                elements: {
                    $setOnClick: $("[data-cookie-setonclick]"),
                    hideIfSet: document.querySelectorAll("[data-cookie-hideifset]")
                },
                init: function() {
                    this.elements.$setOnClick.on("click", this.triggers.setOnClick), this.hideIfSet()
                },
                triggers: {
                    setOnClick: function(t) {
                        var n = t.target.dataset.cookieSetonclick,
                            r = t.target.dataset.cookieSetonclickExp;
                        e.missionNative.setCookie(n, !0, r)
                    }
                },
                hideIfSet: function() {
                    if (this.elements.hideIfSet.length > 0)
                        for (var t = this.elements.hideIfSet.length - 1; t >= 0; t--) {
                            var n = this.elements.hideIfSet[t],
                                r = n.dataset.cookieHideifset;
                            e.missionNative.getCookie(r) && (n.style.display = "none")
                        }
                }
            };
        t.init()
    });