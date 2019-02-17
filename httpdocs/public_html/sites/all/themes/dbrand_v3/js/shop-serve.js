jQuery(document).ready(function($) {
    function e(t, o, n) {
        if ("undefined" != typeof w.data.option_index[t][o] || void 0 === o) {
            switch ("_none" === o && (o = void 0), C[t] = o, C.product = m(), t) {
                case "texture":
                    var a = !1,
                        r = f(C.product);
                    if (o && (C.kit && G.kits[C.kit] || G.add(), !C.textures[C.coverage])) {
                        C.textures[C.coverage] = {
                            qt: G.quantityDefault,
                            suboptions: C.coverages_suboptions[C.coverage]
                        };
                        var u = w.f.sub.clone(C.coverages_suboptions[C.coverage]);
                        G.kits[C.kit].add(C.coverage, o, u), a = !0
                    }
                    if (C.textures[C.coverage] && (C.textures[C.coverage].id = o), i(), b(), C.kit && !a && G.kits[C.kit].coverages[C.coverage] && G.kits[C.kit].coverages[C.coverage].updateTexture(C.texture), w.f.sub.cutouts.previewSync({
                            texture: o
                        }), n) break;
                    k() && x.popup.back(void 0, V, !1);
                    for (var c = r.linked_siblings.length - 1; c >= 0; c--) {
                        var d = r.linked_siblings[c];
                        if ("undefined" == typeof C.textures[d]) {
                            var p = C.coverage;
                            C.coverage = d, e("texture", o, !0), C.coverage = p
                        }
                    }
                    break;
                case "coverage":
                    if (C.texture = C.textures[o] ? C.textures[o].id : void 0, n) break;
                    v("texture", void 0, !0), k() && h(), x.missionNative.inArray(["nexus-5", "nexus-5x", "nexus-6", "nexus-6p"], w.data.device) && ("colored-x" === w.data.option_index.coverage[o].machine ? (x.missionNative.slideTransition(j[0], !1, 200), j.addClass("inactive")) : (x.missionNative.slideTransition(j[0], !0, 200), j.removeClass("inactive"))), ("ipad-pro-97" === w.data.device || "ipad-pro-129" === w.data.device) && ("pencil" === w.data.option_index.coverage[o].machine ? (x.missionNative.slideTransition(j[0], !1, 200), j.addClass("inactive")) : (x.missionNative.slideTransition(j[0], !0, 200), j.removeClass("inactive")));
                    break;
                case "version":
                case "variation":
                    if (n) break;
                    s(), C.kit && (G.kits[C.kit][t] = o)
            }
            w.dynamics.updateAll()
        }
    }

    function t(e, t, i, o) {
        if ("undefined" != typeof w.data.setup.suboptions[e][t].options[i]) {
            if ("function" == typeof w.f.sub[e].correct) {
                var n = w.f.sub[e].correct(t, i, o);
                t = n.group, i = n.key
            }
            var s = w.data.setup.suboptions[e][t].coverage;
            C.coverages_suboptions[s][e][t] = i, C.kit && G.kits[C.kit].coverages[s] && (G.kits[C.kit].coverages[s].suboptions[e][t] = i), w.f.sub[e]["do"](t, i)
        }
    }

    function i() {
        var e = C.texture,
            t = C.coverage,
            i = C.version,
            n = C.variation,
            s, a = w.elements.preview.targets[t];
        if (e)
            for (s = a.length - 1; s >= 0; s--) o(a[s], {
                texture: e,
                coverage: t,
                version: i,
                variation: n
            });
        else
            for (w.elements.option_groups.coverage.length > 0 && t === w.elements.option_groups.coverage.filter(":checked")[0].defaultValue && w.elements.option_groups.texture.prop("checked", !1), delete C.textures[t], s = a.length - 1; s >= 0; s--) o(a[s])
    }

    function o(e, t) {
        "undefined" == typeof t && (t = {});
        var i = "undefined" != typeof t.coverage ? t.coverage : e.dataset.ppvTarget,
            o = "undefined" != typeof t.version ? t.version : C.version,
            s = "undefined" != typeof t.variation ? t.variation : C.variation,
            a = t.texture;
        if ("undefined" == typeof a && (a = "undefined" != typeof C.textures[i] ? C.textures[i].id : C.texture), !a) return void(e.style.backgroundImage = "none");
        var r = e.dataset.ppvTargetParent,
            u = e.dataset.ppvTargetSub,
            d = e.dataset.ppvTargetSubGroup,
            p, l = r + "--" + w.data.option_index.coverage[i].machine,
            v, m, f;
        "undefined" != typeof u && (p = w.f.sub.get_key(u, d), w.f.sub.validate_key(u, p) && (l += w.f.sub.get_path_addendum(u, d, p))), v = c(e, o, s) + l + "/", m = w.data.option_index.texture[a].machine, f = e.dataset.ppvFormat, v = v + m + "." + f, C.coverage && "colored-x" === w.data.option_index.coverage[C.coverage].machine && (v = c(e, o, s) + l + "." + f), C.coverage && "pencil" === w.data.option_index.coverage[C.coverage].machine && (v = c(e, o, s) + l + "--special." + f);
        var g = w.temp["throber-count--" + a],
            h, y;
        if ("undefined" == typeof g) {
            w.temp["throber-count--" + a] = 1;
            var b = $(_.theme("dbrandV3Throbber"));
            w.temp["$throbber--" + a] = b, k() ? (h = B, y = h.parent()) : (h = w.elements.option_buttons.texture[a], y = h.parent().parent()), w.temp["$throbberWrapper--" + a] = y, h.before(b), y.addClass("interact-wip")
        } else w.temp["throber-count--" + a]++;
        var x = new Image;
        x.src = v, $(x).load({
            url: v,
            coverage: i,
            texture: a,
            target: e
        }, n)
    }

    function n(e) {
        var t = e.data.url,
            i = e.data.texture,
            o = e.data.target,
            n = w.temp["throber-count--" + i],
            s = w.temp["$throbber--" + i],
            a = w.temp["$throbberWrapper--" + i];
        1 === n ? (s.remove(), a.removeClass("interact-wip"), delete w.temp["throber-count--" + i], delete w.temp["$throbber--" + i], delete w.temp["$throbberWrapper--" + i]) : w.temp["throber-count--" + i]--, o.style.backgroundImage = "url('" + t + "')"
    }

    function s() {
        var e = C.coverage,
            t = C.texture,
            o;
        for (o in C.textures) C.coverage = o, C.texture = C.textures[o].id, i();
        C.coverage = e, C.texture = t, a()
    }

    function a() {
        for (var e = w.elements.preview.objects, t = e.length - 1; t >= 0; t--) r(e[t])
    }

    function r(e) {
        var t = c(e, C.version, C.variation),
            i = !1,
            o = e.dataset.ppvObj,
            n = e.dataset.ppvObjSub,
            s = e.dataset.ppvObjSubGroup,
            a = e.dataset.ppvFormat,
            r;
        if (("undefined" == typeof i || "false" === i) && (i = !1), "undefined" != typeof n) {
            var d = w.f.sub.get_key(n, s);
            w.f.sub.validate_key(n, d) ? o += w.f.sub.get_path_addendum(n, s, d) : i = !0
        }
        t = t + o + "." + a, i ? e.style.backgroundImage = "none" : (r = new Image, r.src = t, $(r).load({
            url: t,
            object: e
        }, u))
    }

    function u(e) {
        var t = e.data.object,
            i = e.data.url;
        t.style.backgroundImage = "url('" + i + "')"
    }

    function c(e, t, i) {
        var o = w.data.ppv_path;
        if ("undefined" != typeof e.dataset.ppvCommon && "" === e.dataset.ppvCommon) o += "common/";
        else {
            var n, s = 0;
            for (n in w.data.option_index.version) s++;
            s > 1 && (o += w.data.option_index.version[t].machine + "/"), "undefined" != typeof w.data.option_index.variation && "undefined" != typeof i && (o += w.data.option_index.variation[i].machine + "/")
        }
        return o
    }

    function d() {
        var e = [],
            t = 0,
            i, o, n, s, a;
        for (i in G.kits) {
            o = G.kits[i], e[t] = {
                title: o.title,
                custom: !0,
                products: {}
            };
            for (n in o.coverages) s = o.coverages[n], a = m({
                version: o.version,
                coverage: n
            }), e[t].products[a] = {
                texture: parseInt(s.texture),
                qt: s.qt,
                suboptions: s.suboptions
            };
            t++
        }
        e = JSON.stringify(e), w.elements.jsonSelectionInput.value = e
    }

    function p() {
        l()
    }

    function l() {
        var t = C.coverage;
        C.kit = void 0, C.texture = void 0;
        for (var i in C.textures) C.coverage = i, e("texture", void 0, !0);
        C.coverage = t, e("texture", void 0, !0)
    }

    function v(e, t, i) {
        "undefined" == typeof t && (t = C[e]);
        var o;
        o = t ? w.elements.option_buttons[e][t] : w.elements.option_groups[e].filter(":checked"), i ? (o.prop("checked", t ? !0 : !1), "texture" === e && b()) : o.trigger("click")
    }

    function m(e) {
        "undefined" == typeof e && (e = {});
        var t = e.version,
            i = e.coverage;
        "undefined" == typeof t && (t = C.version), "undefined" == typeof i && (i = C.coverage);
        var o = w.data.product_ids_categorized[t][i].toString();
        return o
    }

    function f(e) {
        var t;
        return t = "number" != typeof e && isNaN(parseInt(e)) ? m(e) : e, w.data.products[t]
    }

    function g() {
        V || (Q.html(w.data.option_index.coverage[C.coverage].human), B.addClass("active"), O.addClass("active"), V = !0)
    }

    function h() {
        window.location.hash = F
    }

    function y() {
        V && (B.removeClass("active"), O.removeClass("active"), V = !1)
    }

    function b(e, t) {
        var i = !0;
        "string" != typeof e ? (e = C.coverage, t = C.texture) : e !== C.coverage && (i = !1), t ? (i && j.addClass("selected"), w.elements.option_buttons.coverage[e].addClass("hasSelection")) : (i && j.removeClass("selected"), w.elements.option_buttons.coverage[e].removeClass("hasSelection"))
    }

    function k() {
        return C.coverage && "colored-x" === w.data.option_index.coverage[C.coverage].machine ? !1 : C.coverage && "pencil" === w.data.option_index.coverage[C.coverage].machine ? !1 : "default" === B.css("cursor") ? !1 : !0
    }
    var x = window.globalMethods,
        _ = window.Drupal;
    if (null !== document.getElementById("pui-options")) {
        var w = {
                elements: {
                    form: document.getElementById("pui-form"),
                    options_all: $("#pui-form [data-pui-option]"),
                    option_groups: {
                        versions: $("#pui-form [data-pui-option=version]"),
                        coverage: $("#pui-form [data-pui-option=coverage]"),
                        texture: $("#pui-form [data-pui-option=texture]")
                    },
                    option_buttons: {},
                    suboptions_all: $("#pui-form [data-pui-suboption]"),
                    suboptions_buttons: {
                        cutouts: {}
                    },
                    preview_options: {
                        variations: $("#pui-form [data-pui-option=variation]")
                    },
                    jsonSelectionInput: document.querySelector("input#pui-json-selection"),
                    preview_block: document.getElementById("pui-preview-elements"),
                    preview: {
                        objects: [],
                        targets: {},
                        cutouts: {},
                        targets_sub_cutouts: {}
                    }
                },
                triggers: {
                    optionDo: function(t) {
                        var i = t.target.dataset.puiOption,
                            o = t.target.defaultValue;
                        e(i, o)
                    },
                    suboptionDo: function(e) {
                        var i = e.target.dataset.puiSuboption,
                            o = e.target.dataset.puiSuboptionGroup,
                            n = e.target.defaultValue,
                            s = e.target;
                        t(i, o, n, s)
                    },
                    previewSelection: function(e) {
                        var t = e.target.dataset.ppvTargetArea,
                            i = w.elements.option_buttons.coverage[t];
                        i.trigger("click")
                    }
                },
                f: {
                    sub: {
                        cutouts: {}
                    }
                },
                data: window.pui_data,
                dynamics: {},
                temp: {}
            },
            C = {
                version: void 0,
                coverage: void 0,
                texture: void 0,
                textures: {},
                variation: void 0,
                kit: void 0,
                coverages_suboptions: {}
            };
        w.elements.preview.objects = w.elements.preview_block.querySelectorAll("[data-ppv-obj]");
        for (var S in w.data.option_index.coverage) w.elements.preview.targets[S] = w.elements.preview_block.querySelectorAll('[data-ppv-target="' + S + '"]');
        var D, K;
        for (var T in w.data.option_index) {
            D = w.data.option_index[T], w.elements.option_buttons[T] = {};
            for (K in D) w.elements.option_buttons[T][K] = $('#pui-form [data-pui-option="' + T + '"][value="' + K + '"]')
        }
        var q, N, I, A;
        for (q in w.data.setup.suboptions)
            for (N in w.data.setup.suboptions[q]) {
                switch (I = w.data.setup.suboptions[q][N], w.elements.preview[q][N] = w.elements.preview_block.querySelectorAll('[data-ppv-obj-sub="' + q + '"][data-ppv-obj-sub-group="' + N + '"]'), q) {
                    case "cutouts":
                        if ("checkboxes" === I.selection_type) w.elements.suboptions_buttons.cutouts[N] = $('#pui-form [data-pui-suboption="cutouts"][data-pui-suboption-group="' + N + '"]');
                        else {
                            w.elements.suboptions_buttons.cutouts[N] = {};
                            for (K in I.options) w.elements.suboptions_buttons.cutouts[N][K] = $('#pui-form [data-pui-suboption="cutouts"][data-pui-suboption-group="' + N + '"][value="' + K + '"]')
                        }
                }
                "undefined" == typeof C.coverages_suboptions[I.coverage] && (C.coverages_suboptions[I.coverage] = {}), "undefined" == typeof C.coverages_suboptions[I.coverage][q] && (C.coverages_suboptions[I.coverage][q] = {}), C.coverages_suboptions[I.coverage][q][N] = I["default"], A = w.elements.preview_block.querySelectorAll('[data-ppv-target-sub-group="' + N + '"]'), A.length > 0 && (w.elements.preview["targets_sub_" + q][N] = A)
            }
        w.elements.options_all.on("click", w.triggers.optionDo), w.elements.suboptions_all.on("click", w.triggers.suboptionDo);
        for (K in w.data.option_defaults) C[K] = w.data.option_defaults[K];
        $("#pui-ppv [data-ppv-target-area]").on("click", w.triggers.previewSelection), w.dynamics.updateAll = function() {
            for (var e in this) "function" == typeof this[e].updateAll && this[e].updateAll()
        }, w.dynamics.AutoDetail = function(e) {
            switch (this.element = e, this.original = e.innerHTML, this.replacements = e.dataset.puiDetail, this.fallback = "", this.mode = "", this.range = "inner", "undefined" != typeof e.dataset.puiDetailFallback && (this.fallback = e.dataset.puiDetailFallback), "undefined" != typeof e.dataset.puiDetailMode && (this.mode = e.dataset.puiDetailMode), e.dataset.puiDetailRange) {
                case "outer":
                    this.range = "outer", this.original = x.missionNative.outerHTML(e)
            }
        }, w.dynamics.AutoDetail.prototype.update = function() {
            var e = this.replacements.split("."),
                t = e[0],
                i, o, n, s, a;
            switch (e.shift(), t) {
                case "product":
                    s = f();
                    break;
                default:
                    o = C[t], s = w.data.option_index[t][o]
            }
            for (n = s, i = 0; i < e.length && "undefined" != typeof n; i++) n = n[e[i]];
            switch ("undefined" == typeof n && (n = this.fallback), this.mode) {
                case "regex":
                    a = {}, a[this.replacements] = n, n = x.missionNative.templating(this.original, a)
            }
            switch (this.range) {
                case "outer":
                    this.element = x.missionNative.outerHTML(this.element, n);
                    break;
                case "inner":
                    x.missionNative.innerHTML(this.element, n)
            }
        }, w.dynamics.AutoDetail.add = function(e) {
            var t = new this(e);
            this.instances.push(t)
        }, w.dynamics.AutoDetail.updateAll = function() {
            for (var e = this.instances, t = e.length - 1; t >= 0; t--) e[t].update()
        }, w.dynamics.AutoDetail.instances = [];
        var M, E;
        for (w.temp.autoDetails = document.querySelectorAll("[data-pui-detail]"), E = 0; E < w.temp.autoDetails.length; E++) M = w.temp.autoDetails[E], w.dynamics.AutoDetail.add(M);
        delete w.temp.autoDetails, w.dynamics.Dependency = function(e, t) {
            this.id = e, this.elements = {
                wrapper: document.querySelector("#" + e)
            }, this.dependencies = t.dependencies, this.isActive = "boolean" == typeof t.isActive ? t.isActive : !1, this.behavior = "undefined" != typeof t.behavior ? t.behavior : "classySlide", this.transitionSpeed = "undefined" != typeof t.transitionSpeed ? t.transitionSpeed : 200, this.scrollToMe = "undefined" != typeof t.scrollToMe ? t.scrollToMe : !1, "undefined" != typeof t.dismiss && (this.elements.$dismiss = $("#" + e + " #" + t.dismiss), this.elements.$dismiss.on("click", {
                id: e
            }, this.constructor.triggers.dismiss))
        }, w.dynamics.Dependency.prototype.update = function() {
            var e = this.isActive,
                t = this.validate();
            t && !e ? this.open() : !t && e && this.close()
        }, w.dynamics.Dependency.prototype.validate = function() {
            var e, t, i, o, n;
            for (e in this.dependencies) {
                t = this.dependencies[e], ("string" == typeof t || "number" == typeof t) && (t = {
                    0: t
                }), n = !1;
                e: for (o in t) switch (i = t[o].toString(), e) {
                    case "dependencyDismissed":
                        "undefined" == typeof this.constructor.instances[i] && (n = !0);
                        break;
                    default:
                        if (C[e] === i || "undefined" != typeof w.data.option_index[e] && w.data.option_index[e][C[e]].machine === i) {
                            n = !0;
                            break e
                        }
                }
                if (n === !1) return !1
            }
            return !0
        }, w.dynamics.Dependency.prototype.open = function() {
            if (!this.isActive) {
                switch (this.isActive = !0, this.behavior) {
                    case "classySlide":
                        x.missionNative.slideTransition(this.elements.wrapper, !0, this.transitionSpeed), x.missionNative.addClass(this.elements.wrapper, "active")
                }
                this.scrollToMe && x.scrollToMe(this.elements.wrapper, this.transitionSpeed, this.scrollToMe)
            }
        }, w.dynamics.Dependency.prototype.close = function() {
            if (this.isActive) switch (this.isActive = !1, this.behavior) {
                case "classySlide":
                    x.missionNative.slideTransition(this.elements.wrapper, !1, this.transitionSpeed), x.missionNative.removeClass(this.elements.wrapper, "active")
            }
        }, w.dynamics.Dependency.add = function(e, t) {
            var i = new this(e, t);
            this.instances[e] = i
        }, w.dynamics.Dependency.prototype.dismiss = function() {
            this.close(), delete this.constructor.instances[this.id], setTimeout(this.constructor.updateAll, this.transitionSpeed)
        }, w.dynamics.Dependency.updateAll = function() {
            var e = w.dynamics.Dependency.instances;
            for (var t in e) e[t].update()
        }, w.dynamics.Dependency.instances = {}, w.dynamics.Dependency.triggers = {
            dismiss: function(e) {
                e.preventDefault();
                var t = e.data.id;
                w.dynamics.Dependency.instances[t].dismiss()
            }
        };
        var H;
        for (H in w.data.dependencies) w.dynamics.Dependency.add(H, w.data.dependencies[H]);
        var j = $("#pui-options-group--texture"),
            B = $("#pui-texture-menu-toggler"),
            L = $("#pui-texture-remove"),
            O = $("#pui-texture-menu"),
            Q = $("#form-radios-dynamic-title"),
            P = $("#pui-texture-menu-close"),
            V = !1,
            F = B.attr("href");
        B.click(function(e) {
            V && x.popup.back(e, V, !0)
        }), L.click(function(t) {
            t.preventDefault(), e("texture", void 0)
        }), P.click(function(e) {
            V && x.popup.back(e, V, !0)
        }), w.f.sub.clone = function(e) {
            if ("undefined" != typeof e) {
                var t = {},
                    i, o;
                for (i in e) {
                    t[i] = {};
                    for (o in e[i]) t[i][o] = e[i][o]
                }
                return t
            }
        }, w.f.sub.select = function(e) {
            if ("undefined" != typeof e) {
                var t;
                for (t in e) this[t].select(e[t])
            }
        }, w.f.sub.previewSync = function() {
            var e, t, i, o;
            for (e in C.textures) {
                t = C.textures[e].id, i = C.textures[e].suboptions;
                for (o in i) "function" == typeof this[o].previewSync && this[o].previewSync({
                    coverage: e,
                    texture: t
                })
            }
        }, w.f.sub.get_key = function(e, t) {
            return w.f.sub[e].get_key(t)
        }, w.f.sub.validate_key = function(e, t) {
            return w.f.sub[e].validate_key(t)
        }, w.f.sub.get_path_addendum = function(e, t, i) {
            return w.f.sub[e].get_path_addendum(t, i)
        }, w.f.sub.cutouts.correct = function(e, t, i) {
            var o = w.data.setup.suboptions.cutouts[e];
            if ("checkboxes" === o.selection_type && !i.checked)
                for (var n in o.options)
                    if (t !== n) {
                        t = n;
                        break
                    }
            return {
                group: e,
                key: t
            }
        }, w.f.sub.cutouts["do"] = function(t, i) {
            if (this.updatePreview(t, i), "rainbox" === t) {
                var o = this.validate_key(i);
                o ? e("texture", 43) : e("texture", void 0)
            }
            if ("specialpencil" === t) {
                var o = this.validate_key(i);
                o ? e("texture", 43) : e("texture", void 0)
            }
        }, w.f.sub.cutouts.updatePreview = function(e, t) {
            var i = w.elements.preview.cutouts[e],
                n = !this.validate_key(t),
                s, a, u = w.elements.preview.targets_sub_cutouts[e],
                c;
            s = n ? "" : t;
            for (var d = i.length - 1; d >= 0; d--) a = i[d], r(a);
            if ("undefined" != typeof u)
                for (var p = u.length - 1; p >= 0; p--) c = u[p], o(c)
        }, w.f.sub.cutouts.previewSync = function(e) {
            "undefined" == typeof e.coverage && (e.coverage = C.coverage), "undefined" == typeof e.texture && (e.texture = C.texture);
            var t = f(e).data.cutouts,
                i = e.texture,
                o, n, s, a, r;
            if ("undefined" != typeof t)
                for (a = t.length - 1; a >= 0; a--)
                    for (o = t[a], n = w.elements.preview.cutouts[o], r = n.length - 1; r >= 0; r--) s = n[r], i ? x.missionNative.addClass(s, "active") : x.missionNative.removeClass(s, "active")
        }, w.f.sub.cutouts.select = function(e) {
            var t, i, o, n, s, a;
            for (i in e) o = e[i], t = w.data.setup.suboptions.cutouts[i], "checkboxes" === t.selection_type ? (n = w.elements.suboptions_buttons.cutouts[i], s = n[0].checked, a = o === n[0].defaultValue, (a && !s || !a && s) && n.trigger("click")) : (n = w.elements.suboptions_buttons.cutouts[i][o], s = n[0].checked, s || n.trigger("click"))
        }, w.f.sub.cutouts.get_key = function(e) {
            var t = w.data.setup.suboptions.cutouts[e],
                i, o, n;
            if ("checkboxes" === t.selection_type) i = w.elements.suboptions_buttons.cutouts[e][0];
            else
                for (n in t.options)
                    if (i = w.elements.suboptions_buttons.cutouts[e][n][0], i.checked) break;
            o = i.defaultValue;
            var s = w.f.sub[q].correct(e, o, i);
            return o = s.key
        }, w.f.sub.cutouts.validate_key = function(e) {
            return e && "_none" !== e
        }, w.f.sub.cutouts.get_path_addendum = function(e, t) {
            return "undefined" == typeof t && (t = w.f.get_key("cutouts", e)), this.validate_key(t) ? "--cutout--" + e + "--" + t : !1
        };
        var G = {
            classes: {},
            kits: {},
            total: 0,
            transitionSpeed: 200,
            quantityDefault: 1,
            elements: {
                wrapper: $("#pui-kits"),
                list: document.getElementById("pui-kits-target--list"),
                total: document.getElementById("pui-kits-target--total"),
                add: $("#pui-new-kit--top, #pui-new-kit--bottom"),
                submit: $("#pui-add-to-cart--top, #pui-add-to-cart--bottom"),
                toform: $("#pui-kits-input--toform")
            },
            add: function() {
                var e = (this.classes.Kit.nextID++).toString();
                this.kits[e] = new this.classes.Kit(e)
            },
            triggers: {
                triggerRemoveCoverage: function(t) {
                    t.preventDefault();
                    var i = t.target.dataset.puiKit,
                        o = t.target.dataset.puiKitCov;
                    if (i === C.kit)
                        if (o === C.coverage) e("texture", void 0);
                        else {
                            var n = C.coverage,
                                s = C.texture;
                            C.coverage = o, e("texture", void 0, !0, !0), C.coverage = n, C.texture = s
                        } else G.kits[i].coverages[o].remove()
                },
                triggerAssign: function(e) {
                    e.preventDefault(), p(), G.classes.Kit.deselectCurrent(), x.scrollToMe(w.elements.form, G.transitionSpeed, "up")
                },
                triggerKitSelection: function(e) {
                    e.preventDefault();
                    var t = e.data.kit;
                    x.scrollToMe(w.elements.form, G.transitionSpeed, "up"), t !== C.kit && G.kits[t].select()
                }
            },
            timeOuts: {
                removeItem: function(e) {
                    x.missionNative.empty(e), x.missionNative.removeClass(e, "deleted"), e.style.height = "0px"
                }
            }
        };
        G.classes.Kit = function R(e) {
            this.id = e, this.title = "", this.version = C.version, this.variation = C.variation, this.total = 0, this.coverages = {}, this.coveragesCount = 0, this.elements = {}, this._init()
        }, G.classes.Kit.count = 0, G.classes.Kit.nextID = 0, G.classes.Kit.currentKit = "", G.classes.Kit.prototype._init = function() {
            0 === this.constructor.count && G.elements.wrapper.removeClass("noKits");
            var e = this.id,
                t = [],
                i, o = "",
                n = "Kit " + ++this.constructor.count,
                s = "pui-kit-" + e,
                a, r, u, c;
            for (var d in w.data.option_index.coverage) a = w.data.option_index.coverage[d].machine, r = s + "--cov-" + a, i = w.data.option_index.coverage[d].index, u = w.data.templates.kits_row, c = {
                elementIDCoverage: r
            }, t[i] = x.missionNative.templating(u, c);
            o = t.join(""), u = w.data.templates.kits_entry, c = {
                elementIDBase: s,
                defaultName: n,
                kitID: e,
                rowsHTML: o
            }, u = x.missionNative.templating(u, c), x.missionNative.innerHTML(G.elements.list, u, "append"), this.elements.row = $("#" + s), this.elements.title = document.getElementById(s + "-input--title"), this.elements.titleTarget = document.getElementById(s + "-target--title"), this.elements.total = document.getElementById(s + "-target--total"), this.elements.quantityInc = $("#" + s + "-input--qt-inc"), this.elements.quantityDec = $("#" + s + "-input--qt-dec"), this.elements.edit = $("#" + s + "-input--edit"), this.elements.row[0].style.height = "auto", this.select(!0), this.alterTotal = new x.quantityControl.Updater, this.elements.title.onchange = G.inputControl, this.elements.edit.on("click", {
                kit: e
            }, G.triggers.triggerKitSelection), this.elements.quantityInc.on("click", {
                kit: e,
                step: 1
            }, this._initEvent_alterQantity), this.elements.quantityDec.on("click", {
                kit: e,
                step: -1
            }, this._initEvent_alterQantity)
        }, G.classes.Kit.prototype._initEvent_alterQantity = function(e) {
            e.preventDefault();
            var t = e.data.kit,
                i = e.data.step,
                o;
            for (var n in G.kits[t].coverages) o = G.kits[t].coverages[n], o.elements.quantity.value = o.qt + i, G.quantityControl({
                target: G.kits[t].coverages[n].elements.quantity
            })
        }, G.classes.Kit.prototype.rename = function(e, t, i) {
            this.title = t ? "" : e, x.missionNative.innerHTML(this.elements.titleTarget, e), i || (this.elements.title.value = e)
        }, G.classes.Kit.prototype.add = function(e, t, i) {
            this.coverages[e] = new G.classes.Coverage(this, e, t, i)
        }, G.classes.Kit.prototype.remove = function() {
            var e = this.elements.row[0];
            e.className += " deleted", e.style.height = e.scrollHeight + "px", setTimeout(function() {
                G.timeOuts.removeItem(e)
            }, G.transitionSpeed), this.id === C.kit && (C.kit = void 0), this.id === this.constructor.currentKit && (this.constructor.currentKit = ""), delete G.kits[this.id], this.constructor.count--, this.constructor.resetNames(), 0 === this.constructor.count && (G.elements.wrapper.addClass("noKits"), setTimeout(function() {
                x.missionNative.empty(G.elements.list)
            }, 2 * G.transitionSpeed), this.constructor.nextID = 0)
        }, G.classes.Kit.prototype.select = function(t) {
            if (this.constructor.deselectCurrent(), this.constructor.currentKit = this.id, this.elements.row.addClass("active"), C.kit = this.id, !t) {
                p(), C.kit = this.id;
                var i, o, n;
                for (var s in this.coverages) i = this.coverages[s].texture, o = this.coverages[s].qt, n = this.coverages[s].suboptions, C.textures[s] = {
                    id: i,
                    qt: o,
                    suboptions: n
                }, b(s, i), s === C.coverage && e("coverage", s, !0), w.f.sub.select(n);
                v("version", this.version), v("variation", this.variation), v("texture", void 0, !0), w.f.sub.previewSync()
            }
        }, G.classes.Kit.prototype.deselect = function() {
            this.elements.row.removeClass("active")
        }, G.classes.Kit.resetNames = function(e, t, i) {
            var o = 1;
            for (var n in G.kits) {
                if (i && n === t) return "Kit " + o;
                i || t && n !== t || (e || !G.kits[n].title) && G.kits[n].rename("Kit " + o, !0), o++
            }
        }, G.classes.Kit.deselectCurrent = function() {
            var e = this.currentKit;
            e && (G.kits[e].deselect(), this.currentKit = "", C.kit = void 0)
        }, G.classes.Coverage = function U(e, t, i, o) {
            this.Kit = e, this.id = t, this.texture = i;
            var n = w.data.option_index.coverage[t].machine;
            this.elements = {
                wrapper: document.getElementById("pui-kit-" + e.id + "--cov-" + n)
            }, this.qt = 0, this.total = 0, this.suboptions = o, this._init()
        }, G.classes.Coverage.prototype._init = function() {
            var e = this.Kit.id,
                t = this.id,
                i = this.texture,
                o = "pui-kit-" + e + "--cov-" + t,
                n = G.quantityDefault,
                s, a;
            this.elements.wrapper.style.height = "auto", s = w.data.templates.kits_coverage_entry, a = {
                coverageHuman: w.data.option_index.coverage[t].human,
                textureHuman: w.data.option_index.texture[i].human,
                priceFormatted: x.priceFormat(f().price * n),
                elementIDBase: o,
                kitID: e,
                coverage: t
            }, "colored-x" === w.data.option_index.coverage[this.id].machine && (a.textureHuman = "Limited Edition"), "pencil" === w.data.option_index.coverage[this.id].machine && (a.textureHuman = "#2 Pencil"), s = x.missionNative.templating(s, a), x.missionNative.innerHTML(this.elements.wrapper, s), this.elements.texture = document.getElementById(o + "-target--texture"), this.elements.quantity = document.getElementById(o + "-input--quantity"), this.elements.total = document.getElementById(o + "-target--total"), this.elements.remove = $("#" + o + "-input--delete"), this.Kit.coveragesCount++, this.alterTotal = new x.quantityControl.Updater, this.updateQuantity(n), this.elements.quantity.onchange = G.quantityControl, this.elements.remove.on("click", G.triggers.triggerRemoveCoverage)
        }, G.classes.Coverage.prototype.updateTexture = function(e) {
            e ? e !== this.texture && (this.texture = e, x.missionNative.innerHTML(this.elements.texture, w.data.option_index.texture[e].human), "colored-x" === w.data.option_index.coverage[this.id].machine && x.missionNative.innerHTML(this.elements.texture, "Limited Edition"), "pencil" === w.data.option_index.coverage[this.id].machine && x.missionNative.innerHTML(this.elements.texture, "#2 Pencil")) : this.remove()
        }, G.classes.Coverage.prototype.updateSuboption = function(e, t) {
            "undefined" != typeof this.suboptions[e] && (this.suboptions[e] = t)
        }, G.classes.Coverage.prototype.updateQuantity = function(e, t) {
            var i = f({
                    version: this.Kit.version,
                    coverage: this.id
                }).price * e,
                o = i - this.total;
            t || (this.elements.quantity.value = e), this.qt = e, this.alterTotal(o), this.Kit.alterTotal(o), G.alterTotal(o)
        }, G.classes.Coverage.prototype.remove = function() {
            this.updateQuantity(0), delete this.Kit.coverages[this.id], this.Kit.coveragesCount--;
            var e = this.elements.wrapper;
            0 === this.Kit.coveragesCount ? this.Kit.remove() : (e.className += " deleted", e.style.height = e.scrollHeight + "px", setTimeout(function() {
                G.timeOuts.removeItem(e)
            }, G.transitionSpeed))
        }, G.alterTotal = new x.quantityControl.Updater, G.quantityControl = new x.quantityControl.Controller({
            method: function(e, t) {
                var i = e.target.dataset.puiKit,
                    o = e.target.dataset.puiKitCov;
                i === C.kit && (C.textures[o].qt = t), G.kits[i].coverages[o].updateQuantity(t, !0)
            },
            fallback: function(e) {
                var t = e.target.dataset.puiKit,
                    i = e.target.dataset.puiKitCov;
                return G.kits[t].coverages[i].qt
            },
            min: 1,
            max: 256
        }), G.inputControl = new x.inputControl.Controller({
            method: function(e, t, i) {
                var o = e.target.dataset.puiKit;
                G.kits[o].rename(t, i, !0)
            },
            fallback: function(e) {
                var t = e.target.dataset.puiKit;
                return G.classes.Kit.resetNames(!1, t, !0)
            },
            handler: "humanPunct",
            isRequired: !0,
            blur: !0
        }), G.elements.add.on("click", G.triggers.triggerAssign), G.elements.submit.on("click", d), G.elements.toform.on("click", function(e) {
            e.preventDefault(), x.scrollToMe(w.elements.form, G.transitionSpeed)
        }), w.temp.selectChecked = function(t, i) {
            var o = i.dataset.puiOption,
                n = i.defaultValue;
            C[o] !== n && e(o, n)
        }, w.elements.options_all.filter(":checked").each(w.temp.selectChecked), w.temp.selectChecked = function(e, i) {
            if ("radio" !== i.type || i.checked) {
                var o = i.dataset.puiSuboption,
                    n = i.dataset.puiSuboptionGroup,
                    s = i.defaultValue;
                t(o, n, s, i)
            }
        }, w.elements.suboptions_all.each(w.temp.selectChecked), delete w.temp.selectChecked, x.popup.hashHandeling.add(F, g, y)
    }
}), jQuery(document).ready(function($) {
    null !== document.getElementById("ppv-gallery") && $("#ppv-gallery").royalSlider({
        imageScalePadding: 0,
        slidesSpacing: 0,
        minSlideOffset: 0,
        autoScaleSlider: !1,
        imageScaleMode: "none",
        controlNavigation: "bullets",
        arrowsNav: !0,
        arrowsNavAutoHide: !0,
        startSlideId: 0,
        loop: !1,
        transitionType: "move",
        controlsInside: !0,
        keyboardNavEnabled: !1,
        autoPlay: !0
    })
});