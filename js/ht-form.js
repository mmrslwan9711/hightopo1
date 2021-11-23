! function(d, E, r) {
    "use strict";
    var p = "ht",
        $ = p + ".widget.",
        g = d[p],
        A = g.Color,
        Y = g.widget,
        y = A.widgetBorder,
        b = A.widgetBackground,
        q = A.widgetIconBorder,
        S = A.transparent,
        C = A.background,
        l = A.highlight,
        T = g.Default,
        B = T.def,
        z = T.widgetRowHeight,
        f = T.removeHTML,
        M = T.drawText,
        n = T.getTextSize,
        O = T.isLeftButton,
        Z = T.getWindowInfo,
        V = T.getImage,
        R = T.drawCenterImage,
        e = T.preventDefault,
        c = T.getLogicalPoint,
        h = T.labelFont,
        G = T.labelColor,
        Q = T.labelSelectColor,
        m = T.widgetIndent,
        u = T.startDragging,
        W = T.createElement,
        o = T.getClientPoint,
        N = T.scrollBarInteractiveSize,
        L = T.getInternal(),
        K = L.addEventListener,
        J = L.removeEventListener,
        _ = (L.createView, L.createDiv),
        F = L.createCanvas,
        H = L.createImage,
        w = L.setCanvas,
        k = L.initContext,
        X = L.translateAndScale,
        x = L.isString,
        i = L.drawBorder,
        U = L.getImageWidth,
        j = L.getImageHeight,
        I = L.fillRect,
        s = L.layout,
        D = L.addMethod,
        t = L.isH,
        v = T.isTouchable,
        a = T.isTouchEvent,
        P = Math.round,
        Vb = "readonly",
        Dq = v ? "touchstart" : "mousedown",
        hl = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        Ed = function(h) {
            var K = h.touches[0];
            return K ? K : h.changedTouches[0]
        },
        Kb = function(U, m) {
            return U.querySelector(m)
        },
        yg = function(v, m) {
            var w = T.getLogicalPoint(m, v._canvas || v._view);
            return w.x >= 0 && w.y >= 0 && w.x <= v.getWidth() && w.y <= v.getHeight()
        };
    D(T, {
        textFieldFont: h,
        textFieldColor: G,
        textFieldBorderColor: y,
        textAreaFont: h,
        textAreaColor: G,
        textAreaBorderColor: y,
        radioButtonLabelFont: h,
        radioButtonLabelColor: G,
        radioButtonPressBackground: y,
        checkBoxLabelFont: h,
        checkBoxLabelColor: G,
        checkBoxPressBackground: y,
        buttonLabelFont: h,
        buttonLabelColor: G,
        buttonLabelSelectColor: Q,
        buttonBackground: b,
        buttonBorderColor: y,
        buttonSelectBackground: l,
        sliderBackground: A.widgetIconBackground,
        sliderLeftBackground: A.widgetIconHighlight,
        sliderThickness: 3,
        sliderPadding: 4,
        sliderButton: H(14, 14, {
            type: "circle",
            rect: [0, 0, 14, 14],
            borderWidth: 1,
            borderColor: q,
            gradient: "linear.northeast",
            gradientColor: A.widgetIconGradient,
            background: b
        }),
        comboBoxMaxHeight: -1,
        comboBoxLabelFont: h,
        comboBoxLabelColor: G,
        comboBoxLabelSelectColor: Q,
        comboBoxShadowColor: S,
        comboBoxBorderColor: y,
        comboBoxBackground: C,
        comboBoxSelectBackground: l,
        comboBoxDropDownIcon: H(12, 16, {
            type: "shape",
            points: [1, 5, 6, 11, 11, 5],
            borderWidth: 2,
            borderColor: q
        }),
        imageBorderColor: r,
        imageBackground: r,
        formPaneLabelColor: G,
        formPaneLabelFont: h,
        formPaneLabelAlign: "left",
        formPaneLabelVAlign: "middle",
        formPaneHPadding: 8,
        formPaneVPadding: 8,
        formPaneLabelHPadding: 2,
        formPaneLabelVPadding: 0,
        formPaneHGap: 6,
        formPaneVGap: 6
    }, !0);
    var ll = function(U, m) {
        var b = this;
        (b._view = L.createView(null, b)).appendChild(b._element = W(U, m)), b.setHeight(z), b.setWidth(80), b.iv()
    };
    B(ll, E, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["toolTip"],
        onPropertyChanged: function() {
            this.iv()
        },
        getToolTip: function() {
            return this._toolTip || this.getText()
        },
        getElement: function() {
            return this._element
        },
        getText: function() {
            return this._element.value
        },
        setText: function(L) {
            this._element.value = L
        },
        getValue: function() {
            return this.getText()
        },
        setValue: function(q) {
            this.setText(q)
        },
        getColor: function() {
            return this._element.style.color
        },
        setColor: function(f) {
            this._element.style.color = f
        },
        getBackground: function() {
            return this._element.style.background
        },
        setBackground: function(d) {
            this._element.style.background = d
        },
        getBorder: function() {
            return this._element.style.border
        },
        setBorder: function(T) {
            this._element.style.border = T
        },
        getFont: function() {
            return this._element.style.font
        },
        setFont: function(w) {
            this._element.style.font = w
        },
        isEditable: function() {
            return !this._element.hasAttribute(Vb)
        },
        setEditable: function(j) {
            var s = this._element;
            j ? s.removeAttribute(Vb) : s.setAttribute(Vb, !0)
        },
        validateImpl: function() {
            var T = this;
            s(T._element, 0, 0, T.getWidth(), T.getHeight())
        },
        setFocus: function() {
            return T.setFocus(this._element), this.fireViewEvent("focus"), !0
        }
    }), Y.TextField = function() {
        Y.TextField.superClass.constructor.call(this, "input", T.textFieldBorderColor), this.setColor(T.textFieldLabelColor), this.setFont(T.textFieldLabelFont)
    }, B($ + "TextField", ll, {
        getType: function() {
            return this._element.getAttribute("type")
        },
        setType: function(a) {
            var O = this._element,
                M = T.numberListener;
            O.setAttribute("type", a), J(O, "keydown", M, !1), "number" === a && K(O, "keydown", M, !1)
        }
    }), Y.TextArea = function() {
        Y.TextArea.superClass.constructor.call(this, "textarea", T.textAreaBorderColor), this.setColor(T.textAreaLabelColor), this.setFont(T.textAreaLabelFont)
    }, B($ + "TextArea", ll, {}), Y.Button = function() {
        var x = this,
            j = x._view = L.createView(null, x);
        x.setHeight(z), x.setWidth(80), x._canvas = F(j), new Wn(x), x.iv()
    }, B($ + "Button", E, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["groupId", "label", "icon", "iconColor", "orientation", "toolTip", "labelFont", "labelColor", "labelSelectColor", "borderColor", "background", "selectBackground", "togglable", "selected", "pressed", "clickable"],
        _clickable: !0,
        _togglable: !1,
        _selected: !1,
        _pressed: !1,
        _orientation: "h",
        _labelFont: T.buttonLabelFont,
        _labelColor: T.buttonLabelColor,
        _labelSelectColor: T.buttonLabelSelectColor,
        _borderColor: T.buttonBorderColor,
        _background: T.buttonBackground,
        _selectBackground: T.buttonSelectBackground,
        onClicked: function() {},
        onSelectedChanged: function() {},
        getValue: function() {
            return this.isSelected()
        },
        setValue: function(p) {
            this.setSelected(p)
        },
        onValueChanged: function() {},
        onPropertyChanged: function(H) {
            var P = this,
                w = P._view.parentNode;
            P.iv(), "selected" === H.property && (null != P.getGroupId() && w && w.handleGroupSelectedChanged && w.handleGroupSelectedChanged(P), P.onSelectedChanged(), P.onValueChanged(H.oldValue, H.newValue))
        },
        getToolTip: function() {
            return this._toolTip || this._label
        },
        getCurrentBackground: function() {
            return this._pressed || this._selected ? this._selectBackground : this._background
        },
        getCurrentBorderColor: function() {
            return this._borderColor
        },
        validateImpl: function() {
            var b = this,
                W = b._canvas,
                H = b.getWidth(),
                Z = b.getHeight(),
                v = b._pressed || b._selected,
                S = b.getCurrentBackground();
            w(W, H, Z);
            var D = k(W);
            X(D, 0, 0, 1), D.clearRect(0, 0, H, Z), S && I(D, 0, 0, H, Z, S), i(D, b.getCurrentBorderColor(), 0, 0, H, Z);
            var O = b.getIconColor(),
                A = V(b._icon, O),
                N = U(A),
                y = j(A),
                J = b._label,
                T = b.getLabelFont(),
                P = v ? b._labelSelectColor : b._labelColor,
                K = null == J ? hl : n(T, J),
                l = K.width,
                q = K.height;
            t(b) ? (N && R(D, A, H / 2 - (N + l) / 2 + N / 2, Z / 2, b, b, O), l && M(D, J, T, P, H / 2 - (N + l) / 2 + N, 0, l, Z, "center")) : (N && R(D, A, H / 2, Z / 2 - (y + q) / 2 + y / 2, b, b, O), l && M(D, J, T, P, H / 2 - l / 2, Z / 2 - (y + q) / 2 + y, l, q, "center")), D.restore()
        }
    });
    var Wn = Y.ButtonInteractor = function(k) {
        this.button = k, this.addListeners()
    };
    B($ + "ButtonInteractor", E, {
        ms_listener: 1,
        getView: function() {
            return this.button._view
        },
        handle_mousedown: function(e) {
            O(e) && this.handle_touchstart(e)
        },
        handleWindowMouseMove: function(Q) {
            this.handleWindowTouchMove(Q)
        },
        handleWindowMouseUp: function(e) {
            this.handleWindowTouchEnd(e)
        },
        handle_touchstart: function(K) {
            e(K), this.button.setFocus(K) && this.button.isClickable() && (u(this, K), this.button.setPressed(!0))
        },
        handleWindowTouchMove: function() {},
        handleWindowTouchEnd: function(K) {
            var W = this,
                V = W.button;
            V.setPressed(!1), yg(V, K) && (V.isTogglable() && (null != V.getGroupId() ? V.setSelected(!0) : V.setSelected(!V.isSelected())), V.onClicked(K))
        }
    });
    var th = function() {
        var d = this,
            m = d._view = L.createView(null, d);
        d.setHeight(z), d.setWidth(80), d._canvas = F(m), new uk(d), d.iv()
    };
    B(th, E, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["label", "labelFont", "labelColor", "toolTip", "icon", "iconColor", "selected", "pressed", "pressBackground", "padding"],
        _padding: 0,
        _selected: !1,
        _pressed: !1,
        onClicked: function() {},
        onSelectedChanged: function() {},
        onValueChanged: function() {},
        getValue: function() {
            return this.isSelected()
        },
        setValue: function(n) {
            this.setSelected(n)
        },
        onPropertyChanged: function(h) {
            var f = this;
            f.iv(), "selected" === h.property && (f.onSelectedChanged(), f.onValueChanged(h.oldvalue, h.newValue))
        },
        getToolTip: function() {
            return this._toolTip || this._label
        },
        validateImpl: function() {
            var e = this,
                h = e._canvas,
                K = e.getWidth(),
                $ = e.getHeight(),
                W = e.getCheckIcon;
            w(h, K, $);
            var l = k(h);
            X(l, 0, 0, 1), l.clearRect(0, 0, K, $);
            var Z = e._padding,
                J = e._iconColor,
                L = V(W ? e.getCheckIcon() : e.getRadioIcon()),
                Q = U(L),
                o = j(L);
            e._pressed && (l.fillStyle = e._pressBackground, l.beginPath(), W ? l.rect(Z, $ / 2 - o / 2, Q, o) : l.arc(Z + Q / 2, $ / 2, Math.min(Q, o) / 2, 0, 2 * Math.PI, !0), l.fill()), R(l, L, Z + Q / 2, $ / 2, e, e), Z += Q + 1, L = V(e.getIcon(), J), Q = U(L), R(l, L, Z + Q / 2, $ / 2, e, e, J), Z += Q, M(l, e._label, e._labelFont, e._labelColor, Z, 0, 0, $), l.restore()
        }
    });
    var uk = function(K) {
        this.c = K, this.addListeners()
    };
    B(uk, E, {
        ms_listener: 1,
        getView: function() {
            return this.c._view
        },
        handle_mousedown: function(I) {
            O(I) && this.handle_touchstart(I)
        },
        handleWindowMouseMove: function(p) {
            this.handleWindowTouchMove(p)
        },
        handleWindowMouseUp: function(Y) {
            this.handleWindowTouchEnd(Y)
        },
        handle_touchstart: function(o) {
            e(o), this.c.setFocus(o) && (u(this, o), this.c.setPressed(!0))
        },
        handleWindowTouchMove: function() {},
        handleWindowTouchEnd: function(E) {
            var H = this,
                z = H.c;
            z.setPressed(!1), yg(z, E) && (z.handleClick(E), z.onClicked(E))
        }
    }), Y.CheckBox = function() {
        Y.CheckBox.superClass.constructor.call(this)
    }, B($ + "CheckBox", th, {
        _labelFont: T.checkBoxLabelFont,
        _labelColor: T.checkBoxLabelColor,
        _pressBackground: T.checkBoxPressBackground,
        getCheckIcon: function() {
            return this._selected ? "check" : "uncheck"
        },
        handleClick: function() {
            this.setSelected(!this.isSelected())
        }
    }), Y.RadioButton = function() {
        Y.RadioButton.superClass.constructor.call(this)
    }, B($ + "RadioButton", th, {
        ms_ac: ["groupId"],
        _pressBackground: T.radioButtonPressBackground,
        _labelFont: T.radioButtonLabelFont,
        _labelColor: T.radioButtonLabelColor,
        getRadioIcon: function() {
            return this._selected ? "radioOn" : "radioOff"
        },
        onPropertyChanged: function(w) {
            var d = this,
                r = d._view.parentNode;
            d.iv(), null != d.getGroupId() && "selected" === w.property && (r && r.handleGroupSelectedChanged && r.handleGroupSelectedChanged(d), d.onSelectedChanged(), d.onValueChanged(w.oldValue, w.newValue))
        },
        handleClick: function() {
            this.setSelected(!0)
        }
    }), Y.Slider = function() {
        var E = this,
            e = E._view = L.createView(null, E);
        E.setHeight(z), E.setWidth(80), E._canvas = F(e), new Nm(E), E.iv(), E.enableToolTip()
    }, B($ + "Slider", E, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["value", "min", "max", "step", "button", "toolTip", "instant", "thickness", "padding", "background", "leftBackground"],
        _min: 0,
        _max: 100,
        _value: 50,
        _step: r,
        _instant: !0,
        _button: T.sliderButton,
        _thickness: T.sliderThickness,
        _padding: T.sliderPadding,
        _background: T.sliderBackground,
        _leftBackground: T.sliderLeftBackground,
        onPropertyChanged: function(_) {
            var A = this,
                P = _.property;
            ("min" === P || "max" === P || "step" === P) && A.setValue(A._value), A.iv()
        },
        adjustValue: function(N) {
            null == N && (N = 0);
            var J = this,
                x = J._min,
                f = J._max,
                Z = J._step;
            return x > N && (N = x), N > f && (N = f), Z > 0 && (N = Math.floor((N - x) / Z + 1e-6) * Z + x), N
        },
        getToolTip: function() {
            return this._toolTip || this._value
        },
        getValue: function() {
            return this._value
        },
        setValue: function(F) {
            var m = this,
                P = m._value;
            F = m.adjustValue(F), P !== F && (m._value = F, m.fp("value", P, F), m.onValueChanged(P, F))
        },
        onValueChanged: function() {},
        onBeginValueChanged: function() {},
        onEndValueChanged: function() {},
        drawBackground: function(J, j, F, h, W) {
            I(J, j, F, h, W, this.getBackground())
        },
        drawLeftBackground: function(m, f, F, A, s) {
            var Q = this.getLeftBackground();
            Q && I(m, f, F, A, s, Q)
        },
        drawButton: function(Q, h, E, $, A) {
            R(Q, V(this._button), h + $ / 2, E + A / 2, this, this)
        },
        getButtonWidth: function() {
            var $ = V(this._button);
            return $ ? $.width : 0
        },
        validateImpl: function() {
            var S = this,
                n = S._canvas,
                A = S._min,
                b = S._max,
                H = S._value,
                Y = S._padding,
                q = S._thickness,
                v = S.getWidth(),
                I = S.getHeight(),
                V = S.getButtonWidth(),
                E = (I - q) / 2,
                i = V / 2 + (H - A) / (b - A) * (v - 2 * Y - V);
            w(n, v, I);
            var r = k(n);
            X(r, 0, 0, 1), r.clearRect(0, 0, v, I), S.drawBackground(r, Y, E, v - 2 * Y, q), S.drawLeftBackground(r, Y, E, i, q), S.drawButton(r, Y + i - V / 2, 0, V, I), r.restore()
        }
    });
    var Nm = function(r) {
        this.slider = r, this.addListeners()
    };
    B(Nm, E, {
        ms_listener: 1,
        getView: function() {
            return this.slider._view
        },
        handle_mousedown: function(b) {
            O(b) && this.handle_touchstart(b)
        },
        handleWindowMouseMove: function(y) {
            this.handleWindowTouchMove(y)
        },
        handleWindowMouseUp: function(a) {
            this.handleWindowTouchEnd(a)
        },
        setValue: function(m) {
            var z = this.slider,
                x = z.getPadding() + z.getButtonWidth() / 2,
                I = z.getMin();
            z.setValue(I + (c(m, z._canvas).x - x) / (z.getWidth() - 2 * x) * (z.getMax() - I))
        },
        handle_touchstart: function(f) {
            var d = this;
            e(f), d.slider.setFocus(f) && (d.slider.onBeginValueChanged(), d.setValue(f), u(d, f), T.showToolTip(f, d.slider.getToolTip(f), d.slider))
        },
        handleWindowTouchMove: function(O) {
            this.setValue(O), T.showToolTip(O, this.slider.getToolTip(O), self.slider)
        },
        handleWindowTouchEnd: function(U) {
            this.setValue(U), this.slider.onEndValueChanged(), T.hideToolTip()
        }
    }), Y.ComboBox = function() {
        var k = this,
            C = k._view = L.createView(null, k),
            R = k._listView = new Y.ListView,
            I = k._canvas = F(C),
            r = R._view,
            X = R.sm();
        k.setHeight(z), k.setWidth(80), X.setSelectionMode("single"), R.drawRow = function(l, a, K, r, f, V, o) {
            k.drawRow(l, a, K, r, f, V, o)
        }, C.style.display = "inline-block", L.setBorder(C, T.comboBoxBorderColor), r.style.boxShadow = "0px 0px 10px " + T.comboBoxShadowColor, null != T.baseZIndex && (r.style.zIndex = parseInt(T.baseZIndex) + 1 + ""), K(r, "mousemove", function(P) {
            X.ss(R.getDataAt(P))
        }, !1), K(r, "keydown", function(y) {
            if (L.isEnter(y)) {
                var m = X.ld();
                m && (k.setValue(m.value), k.close())
            }
            L.isEsc(y) && k.close()
        }, !1), K(C, "keydown", function(c) {
            (L.isDown(c) || L.isUp(c)) && k.open()
        }, !1), R.onDataClicked = function(O) {
            k.setValue(O.value), k.close()
        }, K(C, Dq, function(Y) {
            if (O(Y)) {
                var o = Y.target;
                (o === I || o === C) && (e(Y), k.toggle())
            }
        }, !1), k._handleWindowClick = function(I) {
            if (O(I)) {
                var h = I.target;
                h === k._input || r.contains(h) || h === C || (k._input ? k.setInputValue(k._input) : k.close())
            }
        }, k.iv()
    }, T.def($ + "ComboBox", E, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["dropDownIcon", "dropDownWidth", "dropDownBackground", "toolTip", "strict", "indent", "background", "labelFont", "labelColor", "labelSelectColor", "maxHeight", "selectBackground", "value", "values", "labels", "icons", "editable"],
        _strict: !0,
        _editable: !1,
        _maxHeight: T.comboBoxMaxHeight,
        _labelFont: T.comboBoxLabelFont,
        _labelColor: T.comboBoxLabelColor,
        _labelSelectColor: T.comboBoxLabelSelectColor,
        _background: T.comboBoxBackground,
        _dropDownWidth: r,
        _dropDownIcon: T.comboBoxDropDownIcon,
        _dropDownBackground: T.comboBoxBackground,
        _selectBackground: T.comboBoxSelectBackground,
        _indent: m,
        getInput: function() {
            return this._input
        },
        getListView: function() {
            return this._listView
        },
        onPropertyChanged: function(t) {
            this.iv(), "value" === t.property && this.onValueChanged(t.oldValue, t.newValue)
        },
        onValueChanged: function() {},
        getToolTip: function() {
            return this._toolTip || this.toLabel(this._value)
        },
        getLabelColor: function(P, y) {
            return y ? this._labelSelectColor : this._labelColor
        },
        isEqual: function(i, U) {
            return this._strict ? i === U : i == U
        },
        toLabel: function(q) {
            var J = this,
                E = J.getValues(),
                D = J.getLabels();
            if (D && E && D.length === E.length)
                for (var f = 0; f < E.length; f++)
                    if (J.isEqual(E[f], q)) return D[f];
            return null == q ? "" : q + ""
        },
        toIcon: function(p) {
            var N = this,
                M = N.getValues(),
                r = N.getIcons();
            if (r && M && r.length === M.length)
                for (var n = 0; n < M.length; n++)
                    if (N.isEqual(M[n], p)) return r[n];
            return null
        },
        drawValue: function(m, s, W, r, L, k, C) {
            var v = this,
                J = v._indent,
                h = v.toLabel(s),
                B = V(v.toIcon(s));
            B && (R(m, B, r + J / 2, L + C / 2), r += J), h && M(m, h, v.getLabelFont(s, W), v.getLabelColor(s, W), r, L, 0, C)
        },
        drawRow: function(A, $, H, Y, k, z, y) {
            var d = this,
                B = $.value,
                X = d._indent;
            H && I(A, Y, k, z, y, d._selectBackground), d.drawValue(A, B, H, Y, k, z - X, y)
        },
        validateImpl: function() {
            var a = this,
                W = a._canvas,
                t = a._indent,
                U = a.getWidth(),
                c = a.getHeight(),
                H = U - t,
                r = a._background || "";
            a._view.style.background = r, a._listView._view.style.background = a._dropDownBackground, w(W, U, c);
            var n = k(W);
            X(n, 0, 0, 1), n.clearRect(0, 0, U, c), R(n, V(a._dropDownIcon), U - 10, c / 2, a, a), n.beginPath(), n.rect(0, 0, H, c), n.clip(), a.drawValue(n, a._value, !1, 0, 0, H, c), n.restore()
        },
        isOpened: function() {
            return !!this._listView._view.parentNode
        },
        open: function() {
            var r = this,
                C = r._listView,
                V = C.dm(),
                R = r.getValues() || [],
                D = R.length;
            if (!r.isOpened()) {
                V.clear();
                for (var N = 0; D > N; N++) {
                    var y = new g.Data,
                        o = R[N];
                    y.setName(r.toLabel(o)), y.value = o, V.add(y), r.isEqual(o, r._value) && V.sm().ss(y)
                }
                var h = Z(),
                    $ = h.left,
                    U = h.top,
                    j = h.height,
                    i = r._view.getBoundingClientRect(),
                    M = i.left + $,
                    l = i.top + U,
                    I = i.height,
                    F = r.getIndent(),
                    B = r.getWidth(),
                    H = r.getHeight(),
                    S = M + 1,
                    X = l + I,
                    n = r.getDropDownWidth() || B,
                    Q = D * H;
                if (r._maxHeight > 0 && (Q = Math.min(Q, r._maxHeight)), C.setRowHeight(H), X + Q > U + j && (l - U > U + j - l - I ? (Q = Math.min(Q, l - U), X = l - Q) : Q = U + j - X), r._editable) {
                    var u = r._input = T.createElement("input", r.getSelectBackground(), r.getLabelFont(), r.toLabel(r._value));
                    u.className = "ht-widget-combobox-input", g.Default.appendToScreen(u), s(u, M, l + 1, B - F, H), K(u, "keydown", function(E) {
                        L.isEnter(E) ? r.setInputValue(u) : L.isEsc(E) && r.close()
                    }, !1), r.onInputCreated(u)
                }
                C.getView().className = "ht-widget-combobox-popup", g.Default.appendToScreen(C.getView()), s(C, S, X, n, Q), C.setFocus(), g.Default.callLater(function() {
                    K(d, Dq, r._handleWindowClick, !0)
                }), r.onOpened && r.onOpened(), L.closePopup(r)
            }
        },
        onInputCreated: function() {},
        setInputValue: function(s) {
            var y = this,
                I = y.getLabels(),
                J = y.getValues(),
                D = s.value;
            if (I)
                for (var X = 0; X < I.length; X++) D === I[X] && (D = J[X]);
            "string" == typeof D && J && J.length && "number" == typeof J[0] && (D = parseFloat(D)), y.setValue(D), y.close()
        },
        close: function() {
            var G = this;
            G.isOpened() && (f(G._listView._view), G._input && (f(G._input), delete G._input), J(d, Dq, G._handleWindowClick, !0), G.onClosed && G.onClosed(), T.popup === G && delete T.popup), G.setFocus()
        },
        toggle: function() {
            var N = this;
            N.isOpened() ? N.close() : N.open()
        }
    }), Y.BaseDropDownTemplate = function(s) {
        this._master = s
    }, T.def($ + "BaseDropDownTemplate", E, {
        ms_ac: ["master"],
        getView: function() {},
        onOpened: function() {},
        onClosed: function() {},
        getValue: function() {},
        getWidth: function() {},
        getHeight: function() {}
    }), Y.MultiComboBox = function() {
        var k = this,
            p = k._view = L.createView(null, k),
            R = k._canvas = F(p);
        k.setHeight(z), k.setWidth(80), p.style.display = "inline-block", L.setBorder(p, T.comboBoxBorderColor), K(p, "keydown", function(e) {
            (L.isDown(e) || L.isUp(e)) && k.open()
        }, !1), K(p, Dq, function(I) {
            if (O(I)) {
                var K = I.target;
                (K === R || K === p) && (e(I), k.toggle())
            }
        }, !1), k._handleWindowClick = function(E) {
            if (O(E)) {
                var J = E.target,
                    g = k._dropDownComponentInstanceView;
                J === k._input || J === p || g && g.contains(J) || k.close(!0)
            }
        }, k.iv()
    }, T.def($ + "MultiComboBox", E, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["dropDownIcon", "toolTip", "background", "labelFont", "labelColor", "value", "editable", "indent", "dropDownComponent"],
        _editable: !1,
        _background: T.comboBoxBackground,
        _dropDownIcon: T.comboBoxDropDownIcon,
        _indent: m,
        _labelFont: T.comboBoxLabelFont,
        _labelColor: T.comboBoxLabelColor,
        onPropertyChanged: function(U) {
            var x = this;
            x.iv(), "value" === U.property && x.onValueChanged(U.oldValue, U.newValue)
        },
        onValueChanged: function() {},
        getDropDownComponentInstance: function() {
            return this._dropDownComponentInstance
        },
        getToolTip: function() {
            return this._toolTip
        },
        validateImpl: function() {
            var P = this,
                y = P._canvas,
                b = P._indent,
                M = P.getWidth(),
                m = P.getHeight(),
                L = M - b,
                $ = P._background || "";
            P._view.style.background = $, w(y, M, m);
            var A = k(y);
            X(A, 0, 0, 1), A.clearRect(0, 0, M, m), R(A, V(P._dropDownIcon), M - 10, m / 2, P, P), A.beginPath(), A.rect(0, 0, L, m), A.clip(), this.drawValue(A, 0, 0, L, m), P._input && P._input.value !== P._value && (P._input.value = null == P._value ? "" : P._value), A.restore()
        },
        drawValue: function(R, G, W, Z, c) {
            M(R, this._value, this.getLabelFont(), this.getLabelColor(), G + 1, W, 0, c)
        },
        isOpened: function() {
            var U = this,
                k = U._dropDownComponentInstanceView;
            return !!k
        },
        open: function() {
            var O = this;
            if (!O.isOpened()) {
                var X = T.getClass(O._dropDownComponent),
                    t = O._dropDownComponentInstance = new X(O),
                    e = O._dropDownComponentInstanceView = t.getView(),
                    n = Z(),
                    c = n.left,
                    $ = n.top,
                    v = O._view.getBoundingClientRect(),
                    A = v.left + c,
                    x = v.top + $,
                    B = O.getIndent(),
                    p = O.getWidth(),
                    V = O.getHeight();
                if (t.beforeOpen && t.beforeOpen(O._value), O._editable) {
                    var J = O._input = T.createElement("input", T.comboBoxSelectBackground, O.getLabelFont(), O._value);
                    g.Default.appendToScreen(J), s(J, A, x + 1, p - B, V), K(J, "keydown", function(t) {
                        L.isEnter(t) ? (O.setValue(J.value), O.close(!0)) : L.isEsc(t) && O.close(!0)
                    }, !1), O.onInputCreated(J)
                }
                e.style.boxShadow = "0px 0px 10px " + T.toolTipShadowColor, e.style.position = "absolute", null != T.baseZIndex && (e.style.zIndex = parseInt(T.baseZIndex) + 1 + ""), g.Default.appendToScreen(e), g.Default.setFocus(e), this.layoutDropDown(), t.onOpened && t.onOpened(O._value), g.Default.callLater(function() {
                    K(d, Dq, O._handleWindowClick, !0)
                }), O.onOpened && O.onOpened(), L.closePopup(O), O.fireViewEvent("open")
            }
        },
        layoutDropDown: function() {
            var t = this,
                X = t._dropDownComponentInstance,
                m = Z(),
                T = m.left,
                h = m.top,
                c = m.width,
                C = m.height,
                j = t._view.getBoundingClientRect(),
                n = j.left + T,
                w = j.top + h,
                P = j.height,
                L = t.getWidth(),
                D = n,
                l = w + P,
                W = X.getWidth() || L,
                K = X.getHeight();
            l + K > h + C && w - h > h + C - w - P && (l = w - K), D + W > T + c && (D -= D + W - T - c), s(X, D, l, W, K)
        },
        onInputCreated: function() {},
        close: function(O) {
            var Y = this;
            if (Y.isOpened()) {
                O || Y.setValue(Y._dropDownComponentInstance.getValue());
                var W = Y._dropDownComponentInstance,
                    C = Y._dropDownComponentInstanceView;
                W.onClosed && W.onClosed(), f(C), delete Y._dropDownComponentInstanceView, delete Y._dropDownComponentInstance, Y._input && (f(Y._input), delete Y._input), J(d, Dq, Y._handleWindowClick, !0), Y.onClosed && Y.onClosed(), T.popup === Y && delete T.popup, Y.fireViewEvent("close")
            }
            Y.setFocus()
        },
        toggle: function() {
            var K = this;
            K.isOpened() ? K.close() : K.open()
        }
    }), Y.Image = function() {
        var O = this,
            B = O._view = L.createView(null, O);
        B.onmousedown = e, O.setHeight(z), O.setWidth(80), O._canvas = F(B), new Od(O), O.iv()
    }, B($ + "Image", E, {
        ms_v: 1,
        ms_fire: 1,
        ms_tip: 1,
        ms_ac: ["icon", "iconColor", "stretch", "toolTip", "borderColor", "background"],
        _borderColor: T.imageBorderColor,
        _background: T.imageBackground,
        _stretch: "centerUniform",
        onClicked: function() {},
        onPropertyChanged: function() {
            this.iv()
        },
        validateImpl: function() {
            var Y = this,
                P = Y._canvas,
                q = Y.getWidth(),
                J = Y.getHeight(),
                b = Y._iconColor,
                O = V(Y._icon, b),
                H = Y._background;
            w(P, q, J);
            var c = k(P);
            X(c, 0, 0, 1), c.clearRect(0, 0, q, J), H && I(c, 0, 0, q, J, H), this.drawImage(c, O, 0, 0, q, J, b), i(c, Y._borderColor, 0, 0, q, J), c.restore()
        },
        drawImage: function(V, I, j, A, D, $, R) {
            I && T.drawStretchImage(V, I, this._stretch, j, A, D, $, null, this, R)
        }
    });
    var Od = function(l) {
        this.image = l, this.addListeners()
    };
    B(Od, E, {
        ms_listener: 1,
        getView: function() {
            return this.image._view
        },
        handle_mousedown: function(Q) {
            O(Q) && this.handle_touchstart(Q)
        },
        handleWindowMouseMove: function(M) {
            this.handleWindowTouchMove(M)
        },
        handleWindowMouseUp: function(_) {
            this.handleWindowTouchEnd(_)
        },
        handle_touchstart: function(L) {
            e(L), u(this, L)
        },
        handleWindowTouchMove: function() {},
        handleWindowTouchEnd: function(h) {
            var b = this,
                Q = b.image;
            yg(Q, h) && Q.onClicked(h)
        }
    });
    var Ee = "data:image/png;base64,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",
        Xg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAEACAIAAABdw+MhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALBJREFUeNrs2sEJgDAQRNGJBPuvV5R4FAuYnF4aeGRv+9mx0n0zOQEAAAAAAAAAAAAAAABsAsbK0/3Bk6MLXO1WAQAAAAAAAAAAAAAAAOBLCUn3bGCWWwgAAAAAAAAAAAAAAACA36Z/rzKw7vKIcgEAAAAAAAAAAAAAAADYBIzyzUBmuYUAAAAAAAAAAAAAAAAA2AmM8s1AZrmFAAAAAAAAAAAAAAAAAPht+uWU8AowAGyEi9doBGciAAAAAElFTkSuQmCC",
        ye = "data:image/png;base64,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",
        Ej = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA6SURBVChTY/iPCk6DwRkYoKv0sWPHjiIBBohyCADKQVXBAIr0kSNHoMIwwAC1BAyApkGFYYAS6f//AVzgDAPz1XkAAAAAAElFTkSuQmCC",
        Cj = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAANUlEQVR42myNsQ0AMAzC8P9Hu0sjpU3YkLFADWBmIInqQsgDAar8kCY6zDtYzfUzte5ROQMAeFAiAMRBE+oAAAAASUVORK5CYII=",
        re = function() {
            var U = document.createElement("canvas");
            return function(H) {
                var y = U.getContext("2d"),
                    O = y.createLinearGradient(0, 0, 0, 1);
                try {
                    return O.addColorStop(0, H), !0
                } catch (A) {
                    return !1
                }
            }
        }();
    Y.ColorPicker = function() {
        var q = this;
        Y.ColorPicker.superClass.constructor.call(q), q.setEditable(!0), q.setDropDownComponent(Y.ColorPickerTemp)
    }, B($ + "ColorPicker", Y.MultiComboBox, {
        ms_ac: ["instant", "clearButtonVisible", "paletteColors"],
        _clearButtonVisible: !0,
        setValue: function(M) {
            var a = this;
            if (M !== r) {
                if ("" !== M && null !== M && !re(M)) return a.handleErrorValue(M), void 0;
                var S = a._value;
                a._value = M, a.fp("value", S, M)
            }
        },
        handleErrorValue: function() {},
        drawValue: function(K, E, x, L, e) {
            this._value && (K.beginPath(), K.rect(E + 2, x + 2, 20, e - 4), K.fillStyle = this._value, K.fill()), M(K, this._value, this.getLabelFont(), this.getLabelColor(), E + 23, x, 0, e)
        }
    }), Y.ColorPickerTemp = function(H) {
        var B = this,
            O = "px",
            F = B._view = L.createView(null, B),
            P = B.$10o = document.createElement("div"),
            p = B.$12o = _(),
            o = B._paletteColorsDiv = _(),
            S = P.style;
        B._h = 360, B._s = 100, B._v = 100, F.className = "colorPickerPopup ht-widget-colorpicker-popup", F.style.position = "absolute", F.style.background = g.Color.background || "white", Y.ColorPickerTemp.superClass.constructor.call(B, H);
        var q = '<div style="border: 1px solid rgba(0, 0, 0, 0); position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px; background: url(' + Ej + ') repeat;"></div>                      <div class= "preview" style="border: 1px solid black; position: absolute; width: 40px; height: 20px; top: 5px; left: 5px; bottom: 5px;"></div>                      <div style="margin-left: 50px; color: ' + T.labelColor + ";font: " + T.labelFont + '; line-height: 30px;" >                             <span>R:</span><input class="color_R" style="width: 28px;" type="' + (v ? "number" : "text") + '">                             <span>G:</span><input class="color_G" style="width: 28px" type="' + (v ? "number" : "text") + '">                             <span>B:</span><input class="color_B" style="width: 28px" type="' + (v ? "number" : "text") + '">                             <span>A:</span><input class="color_A" style="width: 28px" value="1" type="' + (v ? "number" : "text") + '">                      </div>',
            u = '<div>        <div class="satval" style="position: absolute;cursor:crosshair;margin-left:5px;top: 6px;border:1px solid black;width:128px;height:128px;background-image: url(' + Ee + ');background-color: red;background-size:contain;">            <div class="satval_pointer" style="position:absolute;left: 124px; top: -3px;width: 7px; height: 7px;background-image: url(' + Cj + ')"></div>        </div>        <div class="hue_picker" style="position:absolute;width: 46px; height: 140px;left: 152px;top:0;">            <div class="hue_image" style="border: 1px solid black;position:absolute;left:7px;top:6px;width:30px; height:128px; background: url(' + Xg + ');background-size:contain;"></div>            <div class="hue_pointer" style="position:absolute;top:1px;left:0;width:46px; height:12px; background: url(' + ye + ')"></div>        </div>        <div style="position: absolute; left: 210px;top:6px;">        <input type="button" value="&#10003" class="color_ok" style="color: ' + T.labelColor + '"><br><br>        <input type="button" value="&#10005" class="color_clear" style="color: ' + T.labelColor + '">        </div>        </div>';
        S.font = T.labelFont, S.height = 30 + O, S.lineHeight = 30 + O, S.position = "relative", S.whiteSpace = "nowrap", P.innerHTML = q, p.innerHTML = u;
        var E = H.getPaletteColors(),
            n = B.calculatePaletteWidth();
        if (E && E.length > 0)
            for (var N = 0; N < E.length; N++)
                for (var h = 0; h < E[N].length; h++) {
                    var A = E[N][h],
                        z = _();
                    z.style.left = 5 + h * (n + 5) + "px", z.style.background = A, z.style.width = n + "px", z.style.height = n + "px", z.style.top = 5 + N * (n + 5) + "px", z.style.border = "1px solid black", z.style.boxSizing = "border-box", z.className = "colorPalette", z._color = A, o.appendChild(z)
                }
        o.style.top = "166px", F.appendChild(P), F.appendChild(p), F.appendChild(o), K(F, "click", function(k) {
            var o = k.target,
                x = o.className;
            if ("color_ok" === x) B.$13o = B.$9o(), H.close(!1, k);
            else if ("color_clear" === x) B.$13o = null, H.close();
            else if (["color_R", "color_G", "color_B", "color_A"].indexOf(x) >= 0) o.select(!1, k);
            else if ("colorPalette" === x) {
                var L = o._color;
                B.$13o = L, H.close(!1, k)
            }
        });
        var d = function(k) {
            var C, r = k.target,
                c = r.className,
                Z = !1;
            ["color_R", "color_G", "color_B"].indexOf(c) >= 0 ? (C = parseInt(r.value), r.value = C >= 0 && 255 >= C ? parseInt(r.value) : 0, Z = !0) : "color_A" === c && (C = parseFloat(r.value), r.value = C >= 0 && 1 >= C ? parseFloat(r.value) : 0, Z = !0), Z && B.updateInputChange()
        };
        K(F, "keydown", function(x) {
            var r = x.target,
                F = r.className;
            ["color_R", "color_G", "color_B", "color_A", "color_ok", "color_clear"].indexOf(F) >= 0 && 13 == x.keyCode && (d(x), B.$13o = B.$9o(), H.close())
        }), new Ol(B), K(F, "change", d), K(F, "mousedown", function(u) {
            e(u)
        });
        var k = Kb(F, ".color_clear");
        H._clearButtonVisible || (k.style.display = "none"), g.Default.onElementCreated && (g.Default.onElementCreated(F.querySelector("input.color_R")), g.Default.onElementCreated(F.querySelector("input.color_G")), g.Default.onElementCreated(F.querySelector("input.color_B")), g.Default.onElementCreated(F.querySelector("input.color_A")), g.Default.onElementCreated(F.querySelector(".color_ok")), g.Default.onElementCreated(F.querySelector(".color_clear"))), g.Default.onWidgetColorPickerCreated && g.Default.onWidgetColorPickerCreated(this)
    }, B(Y.ColorPickerTemp, Y.BaseDropDownTemplate, {
        updateInputChange: function() {
            var i = this,
                o = i._view,
                X = i.$9o();
            o.querySelector(".preview").style.backgroundColor = X;
            var w = g.Default.toColorData(X);
            if (w) {
                var W = (4 === w.length ? w[3] / 255 : 1, i.$5o(w[0] / 255, w[1] / 255, w[2] / 255)),
                    F = Kb(o, ".satval_pointer");
                i._h = P(360 * W.h), i._s = P(100 * W.s), i._v = P(100 * W.v), F.style.left = 127 * W.s - 3 + "px", F.style.top = 127 - 127 * W.v - 3 + "px", Kb(o, ".hue_pointer").style.top = 128 - 127 * W.h + "px";
                var z = i.$2o(i._h / 360, 1, 1);
                o.querySelector(".satval").style.backgroundColor = i.$4o(z.r, z.g, z.b, !0)
            }
            i._master._instant && i._master.setValue(i.$9o())
        },
        $6o: function(f) {
            var F = this,
                T = F._view,
                l = F._master,
                n = F._h,
                Y = F._s,
                i = F._v,
                V = F.$2o(n / 360, Y / 100, i / 100),
                u = V.r,
                j = V.g,
                E = V.b;
            f || (T.querySelector("input.color_R").value = P(255 * u), T.querySelector("input.color_G").value = P(255 * j), T.querySelector("input.color_B").value = P(255 * E));
            var O = F.$9o();
            T.querySelector(".preview").style.backgroundColor = O;
            var v = F.$2o(n / 360, 1, 1);
            T.querySelector(".satval").style.backgroundColor = F.$4o(v.r, v.g, v.b, !0), !f && l._instant && l.setValue(O)
        },
        $5o: function(S, O, L) {
            var M, x, P = Math.max(Math.max(S, O), L),
                Q = Math.min(Math.min(S, O), L),
                t = P;
            if (Q == P) M = 0, x = 0;
            else {
                var y = P - Q;
                x = y / P, M = S == P ? (O - L) / y : O == P ? 2 + (L - S) / y : 4 + (S - O) / y, M /= 6, 0 > M && (M += 1), M > 1 && (M -= 1)
            }
            return {
                h: M,
                s: x,
                v: t
            }
        },
        $4o: function(q, t, i, B) {
            return q = P(255 * q), t = P(255 * t), i = P(255 * i), B == r && (B = !0), q = q.toString(16), 1 == q.length && (q = "0" + q), t = t.toString(16), 1 == t.length && (t = "0" + t), i = i.toString(16), 1 == i.length && (i = "0" + i), ((B ? "#" : "") + q + t + i).toUpperCase()
        },
        $3o: function(F, f, X) {
            X == r && (X = null), "#" == F.substr(0, 1) && (F = F.substr(1));
            var h, D, T;
            if (3 == F.length) h = F.substr(0, 1), h += h, D = F.substr(1, 1), D += D, T = F.substr(2, 1), T += T;
            else {
                if (6 != F.length) return X;
                h = F.substr(0, 2), D = F.substr(2, 2), T = F.substr(4, 2)
            }
            return h = parseInt(h, 16), D = parseInt(D, 16), T = parseInt(T, 16), isNaN(h) || isNaN(D) || isNaN(T) ? X : f ? {
                r: h,
                g: D,
                b: T
            } : {
                r: h / 255,
                g: D / 255,
                b: T / 255
            }
        },
        $2o: function(w, Z, Y) {
            var d, j, m;
            if (0 == Y) d = 0, j = 0, m = 0;
            else {
                var c = Math.floor(6 * w),
                    l = 6 * w - c,
                    h = Y * (1 - Z),
                    M = Y * (1 - Z * l),
                    Q = Y * (1 - Z * (1 - l));
                switch (c) {
                    case 1:
                        d = M, j = Y, m = h;
                        break;
                    case 2:
                        d = h, j = Y, m = Q;
                        break;
                    case 3:
                        d = h, j = M, m = Y;
                        break;
                    case 4:
                        d = Q, j = h, m = Y;
                        break;
                    case 5:
                        d = Y, j = h, m = M;
                        break;
                    case 6:
                    case 0:
                        d = Y, j = Q, m = h
                }
            }
            return {
                r: d,
                g: j,
                b: m
            }
        },
        $9o: function() {
            var R = this._view,
                b = Kb(R, "input.color_R").value,
                Y = Kb(R, "input.color_G").value,
                a = Kb(R, "input.color_B").value,
                q = Kb(R, "input.color_A").value || 1;
            return "" === b || "" === Y || "" === a || "" === q ? r : 1 == q ? "rgb(" + b + "," + Y + "," + a + ")" : "rgba(" + b + "," + Y + "," + a + "," + q + ")"
        },
        getView: function() {
            return this._view
        },
        onOpened: function(K) {
            if (K) {
                var _, N = this,
                    k = N._view;
                if (k.querySelector(".preview").style.backgroundColor = K, _ = g.Default.isString(K) && K.indexOf("rgba") >= 0 ? K.replace(/[\s*|rgba|\(\)]/g, "").split(",").map(function(t, f) {
                        return 3 === f ? 255 * parseFloat(t) : parseInt(t)
                    }) : g.Default.toColorData(K)) {
                    var u = 4 === _.length ? _[3] / 255 : 1,
                        p = N.$5o(_[0] / 255, _[1] / 255, _[2] / 255),
                        n = Kb(k, ".satval_pointer");
                    Kb(k, "input.color_R").value = _[0], Kb(k, "input.color_G").value = _[1], Kb(k, "input.color_B").value = _[2], Kb(k, "input.color_A").value = u.toFixed(2), N._h = P(360 * p.h), N._s = P(100 * p.s), N._v = P(100 * p.v), n.style.left = 127 * p.s - 3 + "px", n.style.top = 127 - 127 * p.v - 3 + "px", Kb(k, ".hue_pointer").style.top = 128 - 127 * p.h + "px", N.$6o(!0)
                }
            }
        },
        onClosed: function() {},
        getValue: function() {
            return this.$13o
        },
        calculatePaletteWidth: function() {
            var k = this,
                l = (k._view, k._master),
                x = l.getPaletteColors();
            if (x && x.length > 0) {
                var g = k.getWidth(),
                    a = x[0].length,
                    y = (g - 5 - 5 - 5 * (a - 1)) / a;
                return y
            }
        },
        getHeight: function() {
            var K = this,
                O = (K._view, K._master),
                B = O.getPaletteColors(),
                m = 170,
                J = K.calculatePaletteWidth();
            return J > 0 && (m += B.length * (J + 5)), m
        },
        getWidth: function() {
            return 252
        }
    });
    var Ol = function(p) {
        this.$8o = p, this.setUp()
    };
    B(Ol, E, {
        ms_listener: 1,
        getView: function() {
            return this.$8o._view
        },
        setUp: function() {
            this.addListeners()
        },
        tearDown: function() {
            this.removeListeners(), this.clear()
        },
        clear: function() {
            delete this.$7o
        },
        handle_touchstart: function(Y) {
            var J = this,
                U = Y.target,
                v = J.$8o,
                o = J.getView(),
                k = Kb(o, ".hue_picker"),
                l = Kb(o, ".satval");
            k.contains(U) ? (J.$7o = 1, J.$1o(Y, 1)) : l.contains(U) && (J.$7o = 2, J.$1o(Y, 2)), J.$7o && T.isDoubleClick(Y) && (v.$13o = v.$9o(), v._master.close())
        },
        $1o: function(i, $) {
            T.preventDefault(i);
            var u, O, E, f = this,
                l = f.$8o,
                V = f.getView(),
                M = Kb(V, ".hue_picker"),
                J = Kb(V, ".satval");
            if (i = a(i) ? Ed(i) : i, 1 === $) {
                u = M.getBoundingClientRect(), E = i.clientY - u.top, E -= 7, 0 > E && (E = 0), E > 127 && (E = 127), Kb(V, ".hue_pointer").style.top = E + 1 + "px";
                var Y = E;
                Y = P(360 - Y * (360 / 127)), l._h = Y, l.$6o()
            } else if (2 === $) {
                u = J.getBoundingClientRect(), O = i.clientX - u.left - 1, E = i.clientY - u.top - 1, 0 > O && (O = 0), O > 127 && (O = 127), 0 > E && (E = 0), E > 127 && (E = 127), l._s = P(100 * O / 127), l._v = P(100 - 100 * E / 127);
                var d = Kb(V, ".satval_pointer");
                d.style.left = O - 3 + "px", d.style.top = E - 3 + "px", l.$6o()
            }
        },
        handle_mousedown: function(x) {
            this.handle_touchstart(x)
        },
        handle_mouseup: function(i) {
            this.handle_touchend(i)
        },
        handle_touchend: function(j) {
            var d = this;
            d.clear(j)
        },
        handle_mousemove: function(B) {
            this.handle_touchmove(B)
        },
        handle_touchmove: function(w) {
            var z = this;
            z.$7o && T.startDragging(z, w)
        },
        handleWindowMouseUp: function(W) {
            this.handleWindowTouchEnd(W)
        },
        handleWindowTouchEnd: function(j) {
            var c = this;
            c.clear(j)
        },
        handleWindowMouseMove: function(c) {
            this.handleWindowTouchMove(c)
        },
        handleWindowTouchMove: function(P) {
            var t = this,
                w = t.$7o;
            w && t.$1o(P, w)
        }
    }), Y.FormPane = function(E) {
        var k = this,
            p = k._view = L.createView(1, k);
        E || (k._canvas = F(p));
        var s = k._contentDiv = _(r, p),
            x = s.style;
        x.overflow = "hidden", x.left = "0px", x.right = "0px", x.top = "0px", x.bottom = "0px", k._79O = _(r, p), k._rows = [], k._itemMap = {}, k.iv(), s.handleGroupSelectedChanged = function(d) {
            if (d.isSelected()) {
                var V = d.getGroupId();
                null != V && k._rows.forEach(function(T) {
                    var G = T.items;
                    G && G.forEach(function(X) {
                        if (X) {
                            var _ = X.element;
                            _ && _ !== d && _.setSelected && _.getGroupId && _.getGroupId() === V && _.setSelected(!1)
                        }
                    })
                })
            }
        }, new _i(k)
    }, B($ + "FormPane", E, {
        ms_v: 1,
        ms_fire: 1,
        ms_txy: 1,
        ms_lp: 1,
        ms_vs: 1,
        ms_hs: 1,
        ms_value: 1,
        ms_ac: ["labelColor", "labelFont", "labelAlign", "labelVAlign", "vPadding", "hPadding", "labelHPadding", "labelVPadding", "hGap", "vGap", "rows", "rowHeight", "scrollBarColor", "scrollBarSize", "autoHideScrollBar"],
        _29I: hl,
        _91I: 0,
        _59I: 0,
        _labelColor: T.formPaneLabelColor,
        _labelFont: T.formPaneLabelFont,
        _labelAlign: T.formPaneLabelAlign,
        _labelVAlign: T.formPaneLabelVAlign,
        _hPadding: T.formPaneHPadding,
        _vPadding: T.formPaneVPadding,
        _labelHPadding: T.formPaneLabelHPadding,
        _labelVPadding: T.formPaneLabelVPadding,
        _hGap: T.formPaneHGap,
        _vGap: T.formPaneVGap,
        _rowHeight: T.widgetRowHeight,
        _scrollBarColor: T.scrollBarColor,
        _scrollBarSize: T.scrollBarSize,
        _autoHideScrollBar: T.autoHideScrollBar,
        getScrollWidth: function() {
            return this._91I
        },
        getScrollHeight: function() {
            return this._59I
        },
        onPropertyChanged: function(H) {
            var L = this,
                j = H.property;
            L.iv(), "translateX" === j ? L._42o() : "translateY" === j && L._43o()
        },
        adjustTranslateX: function(G) {
            var D = this.getWidth() - this._91I;
            return D > G && (G = D), G > 0 ? 0 : Math.round(G)
        },
        setTranslateX: function(U) {
            var F = this;
            U = F.adjustTranslateX(U);
            var q = F._65O;
            F._65O = U, F._contentDiv.scrollLeft = -U, F.fp("translateX", q, U)
        },
        adjustTranslateY: function(e) {
            var q = this.getHeight() - this._59I;
            return q > e && (e = q), e > 0 ? 0 : Math.round(e)
        },
        setTranslateY: function(a) {
            var Y = this;
            a = Y.adjustTranslateY(a);
            var Q = Y._66O;
            Y._66O = a, Y._contentDiv.scrollTop = -a, Y.fp("translateY", Q, a)
        },
        setPadding: function(h) {
            this.setVPadding(h), this.setHPadding(h)
        },
        getLabelFont: function(N) {
            return N && N.font ? N.font : this._labelFont
        },
        getLabelColor: function(l) {
            return l && l.color ? l.color : this._labelColor
        },
        getLabelAlign: function(l) {
            return l && l.align ? l.align : this._labelAlign
        },
        getLabelVAlign: function(k) {
            return k && k.vAlign ? k.vAlign : this._labelVAlign
        },
        getRowBorderColor: function(y) {
            return y ? y.borderColor : null
        },
        getRowBackground: function(r) {
            return r ? r.background : null
        },
        getItemBorderColor: function(r) {
            return r ? r.borderColor : null
        },
        getItemBackground: function(i) {
            return i ? i.background : null
        },
        getItemById: function(W) {
            return this._itemMap[W]
        },
        getViewById: function(k) {
            var e = this.getItemById(k);
            return e ? e.element : null
        },
        getItemView: function(w) {
            if (w) {
                var f = w.element;
                if (f) {
                    if (f.tagName) return f;
                    if (f.getView) return f.getView()
                }
            }
            return null
        },
        updateItemElement: function(l, $) {
            var w = this,
                v = w.getItemById(l);
            if (v) {
                var s = w.getItemView(v);
                s && s.parentNode && s.parentNode.removeChild(s), v.element = $, s = w.getItemView(v), s && (s.style.position = "absolute", w._contentDiv.appendChild(s)), w.iv()
            }
        },
        addRow: function(B, N, G, O) {
            var K = this;
            if (B) {
                for (var E = 0; E < B.length; E++) {
                    var Q = B[E];
                    Q && ((Q.tagName || Q.getView) && (B[E] = {
                        element: Q
                    }), L.initItemElement(Q), null != Q.id && (K._itemMap[Q.id] = Q))
                }
                B.forEach(function(l) {
                    var O = K.getItemView(l);
                    O && (O.style.position = "absolute", K._contentDiv.appendChild(O))
                })
            }
            var R = O || {};
            return R.items = B, R.widths = N, R.height = G, null == R.index ? K._rows.push(R) : K._rows.splice(R.index, 0, R), K.iv(), R
        },
        removeRows: function(C) {
            if (C) {
                var u = this,
                    t = [];
                C.forEach(function(g) {
                    g.items && g.items.forEach(function(q) {
                        var Y = u.getItemView(q);
                        Y && Y.parentNode && Y.parentNode.removeChild(Y), q && null != q.id && delete u._itemMap[q.id]
                    })
                }), u._rows.forEach(function(W) {
                    C.indexOf(W) < 0 && t.push(W)
                }), u._rows = t, u.iv()
            }
        },
        removeRow: function(e) {
            var p;
            p = e && "object" == typeof e ? [e] : [this._rows[e]], this.removeRows(p)
        },
        clear: function() {
            for (var u = this, W = u._view, U = this._contentDiv; U.firstChild;) U.removeChild(U.firstChild);
            for (; W.firstChild;) W.removeChild(W.firstChild);
            u._canvas && W.appendChild(u._canvas), W.appendChild(U), W.appendChild(u._79O), u._rows = [], u._itemMap = {}, u.iv()
        },
        validateImpl: function() {
            var F, Z, Q, D, R, V, Y = this,
                o = Y._canvas,
                y = Y._rowHeight,
                u = Y.getWidth(),
                H = Y.getHeight(),
                p = Y._hPadding,
                $ = Y._vPadding,
                t = Y._vGap,
                b = Y.ty(),
                e = Y.tx(),
                W = u - 2 * p,
                O = H - 2 * $,
                l = Y._rows,
                v = l.length,
                n = 0,
                m = O - (v - 1) * t;
            for (Y._29I = {
                    x: -e,
                    y: -b,
                    width: u,
                    height: H
                }, o && (w(o, u, H), V = k(o), X(V, 0, 0, 1), V.clearRect(0, 0, u, H)), Q = 0; v > Q; Q++) D = l[Q], R = D.height, null == R ? m -= y : x(R) ? (F = R.split("+"), Z = parseFloat(F[0]), Z > 1 ? m -= Z : n += Z, Z = parseFloat(F[1]), Z > 1 ? m -= Z : n += Z) : R > 1 ? m -= R : n += R;
            0 > m ? (Y._59I = H - m - $, m = 0) : Y._59I = H;
            var A = $ + b,
                d = u;
            for (Q = 0; v > Q; Q++) {
                D = l[Q], R = D.height, null == R ? R = y : x(R) ? (F = R.split("+"), Z = parseFloat(F[0]), R = Z > 1 ? Z : Z / n * m, Z = parseFloat(F[1]), R += Z > 1 ? Z : Z / n * m) : 1 >= R && (R = R / n * m);
                var z = p + e;
                if (V) {
                    var r = Y.getRowBorderColor(D),
                        a = Y.getRowBackground(D);
                    a && I(V, z, A, W, R, a), r && i(V, r, z, A, W, R)
                }
                var T = Y.validateRow(V, u, D.items, D.widths, z, A, W, R) - p;
                T > d && (d = T), A += R + t
            }
            V && V.restore(), Y._91I = d, Y._92I(), Y._93I(), Y.tx(Y.tx()), Y.ty(Y.ty())
        },
        validateRow: function(d, L, u, _, k, f, r, E) {
            if (!u) return 0;
            var o, Z, z, Q, N, T = this,
                F = L,
                U = T._hGap,
                P = u.length,
                V = 0,
                A = r - (P - 1) * U;
            for (z = 0; P > z; z++) Q = _[z], x(Q) ? (o = Q.split("+"), Z = parseFloat(o[0]), Z > 1 ? A -= Z : V += Z, Z = parseFloat(o[1]), Z > 1 ? A -= Z : V += Z) : Q > 1 ? A -= Q : V += Q;
            for (0 > A && (F -= A, A = 0), z = 0; P > z; z++) {
                if (N = u[z], Q = _[z], x(Q) ? (o = Q.split("+"), Z = parseFloat(o[0]), Q = Z > 1 ? Z : Z / V * A, Z = parseFloat(o[1]), Q += Z > 1 ? Z : Z / V * A) : 1 >= Q && (Q = Q / V * A), N) {
                    if (d) {
                        var l = T.getItemBorderColor(N),
                            q = T.getItemBackground(N);
                        q && I(d, k, f, Q, E, q), l && i(d, l, k, f, Q, E)
                    }
                    T.validateItem(d, N, k, f, Q, E)
                }
                k += Q + U
            }
            return F
        },
        validateItem: function(l, I, G, r, a, H) {
            var P, p = this,
                K = I.element;
            if (K && !x(K)) {
                var X = p.tx(),
                    O = p.ty();
                G -= X, r -= O;
                var F = I._layoutRect;
                F && F.width === a && F.height === H && F.x === G && F.y === r ? K.invalidate && K.invalidate() : (s(K, G, r, a, H), I._layoutRect = {
                    x: G,
                    y: r,
                    width: a,
                    height: H
                })
            } else l && (x(I) ? P = I : x(I.element) && (P = I.element), P && (l.save(), l.beginPath(), l.rect(G, r, a, H), l.clip(), M(l, P, p.getLabelFont(I), p.getLabelColor(I), G + p._labelHPadding, r - p._labelVPadding, a - 2 * p._labelHPadding, H - 2 * p._labelVPadding, p.getLabelAlign(I), p.getLabelVAlign(I)), l.restore()))
        }
    });
    var _i = function(i) {
        this.f = i, this.addListeners()
    };
    B(_i, E, {
        ms_listener: 1,
        getView: function() {
            return this.f._view
        },
        handle_mousedown: function(C) {
            O(C) && this.handle_touchstart(C)
        },
        handleWindowMouseMove: function(a) {
            this.handleWindowTouchMove(a)
        },
        handleWindowMouseUp: function(B) {
            this.handleWindowTouchEnd(B)
        },
        handle_touchstart: function(M) {
            var b, l = this,
                q = l.f,
                i = M.target;
            l.isV(M) ? b = "v" : l.isH(M) ? b = "h" : (i === l.getView() || i === q._contentDiv || q._79O.contains(i) || i === q._canvas) && (b = "p"), (l.s = b) && (l.cp = o(M), l.tx = q.tx(), l.ty = q.ty(), e(M), u(l, M))
        },
        handle_mousemove: function(i) {
            var N = this,
                B = N.f;
            N.isV(i) && B._43o(), N.isH(i) && B._42o()
        },
        handleWindowTouchMove: function(J) {
            var u = this,
                D = u.f,
                Q = u.s,
                q = u.tx,
                $ = u.ty,
                t = u.cp,
                g = o(J),
                R = D._29I;
            "p" === Q ? D.setTranslate(q + g.x - t.x, $ + g.y - t.y) : "v" === Q ? D.ty($ + (t.y - g.y) * D._59I / R.height) : "h" === Q && D.tx(q + (t.x - g.x) * D._91I / R.width)
        },
        handleWindowTouchEnd: function() {},
        handle_mousewheel: function(H) {
            this.h(H, H.wheelDelta / 40, H.wheelDelta !== H.wheelDeltaX)
        },
        handle_DOMMouseScroll: function(k) {
            this.h(k, -k.detail, 1)
        },
        h: function(V, b, j) {
            var J = this.f;
            e(V), L.closePopup(), j && J._41o() ? J.translate(0, 10 * b) : J._40o() && J.translate(10 * b, 0)
        },
        isV: function(f) {
            var I = this.f,
                _ = I._29I;
            return I._41o() && _.x + _.width - I.lp(f).x < N
        },
        isH: function(q) {
            var E = this.f,
                w = E._29I;
            return E._40o() && w.y + w.height - E.lp(q).y < N
        }
    })
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object);