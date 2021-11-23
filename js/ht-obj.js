! function(O, D, G) {
    "use strict";

    function d() {
        var m = [],
            K = [];
        return function() {
            return 0 === arguments.length ? K.join("") + U.apply(String, m) : (m.length + arguments.length > 1024 && (K.push(U.apply(String, m)), m.length = 0), Array.prototype.push.apply(m, arguments), void 0)
        }
    }

    function a(R, v, Q, K, O) {
        var l, o, s = 8 * O - K - 1,
            P = (1 << s) - 1,
            r = P >> 1,
            c = -7,
            E = Q ? O - 1 : 0,
            k = Q ? -1 : 1,
            $ = R[v + E];
        for (E += k, l = $ & (1 << -c) - 1, $ >>= -c, c += s; c > 0; l = 256 * l + R[v + E], E += k, c -= 8);
        for (o = l & (1 << -c) - 1, l >>= -c, c += K; c > 0; o = 256 * o + R[v + E], E += k, c -= 8);
        if (0 === l) l = 1 - r;
        else {
            if (l === P) return o ? 0 / 0 : 1 / 0 * ($ ? -1 : 1);
            o += Math.pow(2, K), l -= r
        }
        return ($ ? -1 : 1) * o * Math.pow(2, l - K)
    }
    var t = "ht",
        o = O[t],
        F = null,
        L = Math,
        E = L.abs,
        z = L.max,
        b = Number.MAX_VALUE,
        B = o.Default,
        $ = B.getInternal(),
        h = B.clone,
        m = $.vec3TransformMat4,
        K = [0, 0],
        J = $.appendArray,
        A = function() {
            function M(R, M, B, D) {
                if (R) {
                    var h = R[D];
                    if (h) {
                        B.ignoreColor || (M.color = h.kd), !B.ignoreTransparent && h.d > 0 && h.d < 1 && (M.transparent = !0, M.opacity = h.d);
                        var Z;
                        if (!B.ignoreImage && (Z = h.map_kd)) {
                            Z = Z.split(" ");
                            for (var E = -1, L = 0; L < Z.length; L++) "-o" === Z[L] ? (M.uvOffset = [parseFloat(Z[L + 1]), parseFloat(Z[L + 2])], L += 3, E = L) : "-s" === Z[L] && (M.uvScale = [parseFloat(Z[L + 1]), parseFloat(Z[L + 2])], L += 3, E = L);
                            M.image = (B.prefix || "") + Z.splice(E + 1).join(" ")
                        }
                    }
                }
            }
            var f = /v( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,
                O = /vt( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,
                k = /vn( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)( +[\d|\.|\+|\-|e|E]+| nan)/,
                Z = /^[og]\s*(.+)?/,
                T = function(V, X) {
                    return X = parseInt(X), X >= 0 ? V[X - 1] : V[X + V.length]
                },
                L = function(Y, b, t, j, z) {
                    if (Y.lvs) {
                        var y = T(b, j),
                            B = T(b, z),
                            G = t.matrix,
                            d = Y.lvs;
                        G ? (J(d, m(h(y), G)), J(d, m(h(B), G))) : (J(d, y), J(d, B))
                    }
                },
                I = function(x, W, r, A, C, F) {
                    if (x.vs) {
                        var S = T(W, A),
                            z = T(W, C),
                            M = T(W, F),
                            w = r.matrix,
                            f = x.vs;
                        if (r.flipFace) {
                            var L = z;
                            z = M, M = L
                        }
                        w ? (J(f, m(h(S), w)), J(f, m(h(z), w)), J(f, m(h(M), w))) : (J(f, S), J(f, z), J(f, M))
                    }
                },
                D = function(s, Y, n, H, t, g) {
                    if (s.vs) {
                        var f = n.flipY,
                            o = H === G ? K : T(Y, H),
                            R = t === G ? K : T(Y, t),
                            Q = g === G ? K : T(Y, g);
                        if (n.flipFace) {
                            var m = R;
                            R = Q, Q = m
                        }
                        s.uv.push(o[0], f ? 1 - o[1] : o[1], R[0], f ? 1 - R[1] : R[1], Q[0], f ? 1 - Q[1] : Q[1])
                    }
                },
                y = function(c, H, y, D, Z, Y) {
                    if (c.vs) {
                        var V = T(H, D),
                            i = T(H, Z),
                            k = T(H, Y),
                            z = y.normalMatrix,
                            s = c.ns;
                        if (y.flipFace) {
                            var t = i;
                            i = k, k = t
                        }
                        z ? (J(s, m(h(V), z)), J(s, m(h(i), z)), J(s, m(h(k), z))) : (J(s, V), J(s, i), J(s, k))
                    }
                },
                U = function(H, O, t, F) {
                    for (var n = F.length - 1, A = 0; n > A; ++A) L(H, O, t, F[A], F[A + 1]);
                    L(H, O, t, F[n], F[0])
                },
                e = function(o, u, P, s, k, S, J, a) {
                    var H = s && s.length && a;
                    S[3] === G ? (I(o, u, k, S[0], S[1], S[2]), J ? D(o, P, k, J[0], J[1], J[2]) : o.uv && o.uv.length && D(o, P, k), H && y(o, s, k, a[0], a[1], a[2])) : (I(o, u, k, S[0], S[1], S[3]), I(o, u, k, S[1], S[2], S[3]), J ? (D(o, P, k, J[0], J[1], J[3]), D(o, P, k, J[1], J[2], J[3])) : o.uv && o.uv.length && (D(o, P, k), D(o, P, k)), H && (y(o, s, k, a[0], a[1], a[3]), y(o, s, k, a[1], a[2], a[3])))
                },
                u = function(y, c, d, H) {
                    var l, L, s, V, $, F, Q, I, Y = b,
                        w = b,
                        O = b,
                        _ = -b,
                        G = -b,
                        u = -b;
                    for (l in y)
                        for (F = y[l].vs, I = F.length, L = 0; I > L; L += 3) s = F[L + 0], V = F[L + 1], $ = F[L + 2], Y > s && (Y = s), w > V && (w = V), O > $ && (O = $), s > _ && (_ = s), V > G && (G = V), $ > u && (u = $);
                    var e;
                    if (d) {
                        var v = Y + (_ - Y) / 2,
                            B = w + (G - w) / 2,
                            M = O + (u - O) / 2;
                        for (l in y) {
                            for (F = y[l].vs, I = F.length, L = 0; I > L; L += 3) F[L + 0] -= v, F[L + 1] -= B, F[L + 2] -= M;
                            if (Q = y[l].lvs)
                                for (I = Q.length, L = 0; I > L; L += 3) Q[L + 0] -= v, Q[L + 1] -= B, Q[L + 2] -= M
                        }
                        e = [v, B, M]
                    }
                    var h, J, W;
                    d ? (h = _ - Y, J = G - w, W = u - O) : (h = 2 * z(E(Y), E(_)), J = 2 * z(E(w), E(G)), W = 2 * z(E(O), E(u))), 0 === h && (h = Math.min(J, W) / 1e3 || .001), 0 === J && (J = Math.min(h, W) / 1e3 || .001), 0 === W && (W = Math.min(h, J) / 1e3 || .001), H.rawS3 = [h, J, W];
                    for (l in y) {
                        if (F = y[l].vs, Q = y[l].lvs, c) {
                            for (I = F.length, L = 0; I > L; L += 3) h && (F[L + 0] /= h), J && (F[L + 1] /= J), W && (F[L + 2] /= W);
                            if (Q)
                                for (I = Q.length, L = 0; I > L; L += 3) h && (Q[L + 0] /= h), J && (Q[L + 1] /= J), W && (Q[L + 2] /= W);
                            var m = y[l].ns;
                            if (m) {
                                I = m.length;
                                var C = new o.Math.Vector3;
                                for (L = 0; I > L; L += 3) C.set(m[L + 0] * h, m[L + 1] * J, m[L + 2] * W).normalize(), m[L + 0] = C.x, m[L + 1] = C.y, m[L + 2] = C.z
                            }
                        }
                        y[l].rawS3 = H.rawS3, e && (y[l].center = e)
                    }
                };
            return function(K, h, i) {
                if (!K) return F;
                ($.isString(h) || h instanceof ArrayBuffer) && (h = R(h)), i || (i = {}), i.flipY == F && (i.flipY = !0), (i.s3 || i.r3 || i.t3 || i.mat) && (i.matrix = $.createWorldMatrix(i.mat, i.s3, i.r3, i.rotationMode, i.t3));
                var x, H, Q, G, w = o.Style["wf.loadQuadWireframe"],
                    L = [],
                    m = [],
                    T = i.ignoreNormal ? F : [],
                    s = i.reverseFlipMtls,
                    J = {
                        vs: [],
                        uv: [],
                        ns: T ? [] : F
                    },
                    y = {
                        htdefault: J
                    },
                    W = new P(K),
                    p = "",
                    E = "";
                for (T && i.matrix && (i.normalMatrix = $.createNormalMatrix(i.matrix)); null != (H = W.stepNext());)
                    if (H = H.trim(), 0 !== H.length && "#" !== H.charAt(0))
                        if (H.indexOf("\\") !== H.length - 1) {
                            if (p && (H = p + H, p = ""), H.indexOf("#QNAN0") >= 0 && (H = H.replace(/#QNAN0/gi, "0")), Q = f.exec(H)) L.push([parseFloat(Q[1]), parseFloat(Q[2]), parseFloat(Q[3])]);
                            else if (Q = O.exec(H)) m.push([parseFloat(Q[1]), parseFloat(Q[2])]);
                            else if (T && (Q = k.exec(H))) i.flipFace ? T.push([parseFloat(-Q[1]), parseFloat(-Q[2]), parseFloat(-Q[3])]) : T.push([parseFloat(Q[1]), parseFloat(Q[2]), parseFloat(Q[3])]);
                            else if ("f" === H[0]) {
                                var C = H.split(/\s+/);
                                if (C.length < 4) continue;
                                var b, x, I, l = [],
                                    v = [],
                                    d = [];
                                for (x = 1, I = C.length; I > x; x++) b = C[x].split("/"), l.push(parseInt(b[0], 10)), b.length > 1 && b[1].length > 0 && d.push(parseInt(b[1], 10)), b.length > 2 && b[2].length > 0 && v.push(parseInt(b[2], 10));
                                for (x = 0, I = l.length - 2; I > x; x++) e(J, L, m, T, i, [l[0], l[x + 1], l[x + 2]], d.length ? [d[0], d[x + 1], d[x + 2]] : F, v.length ? [v[0], v[x + 1], v[x + 2]] : F);
                                w && U(J, L, i, l)
                            } else if (i.part && null !== (Q = Z.exec(H))) E = (" " + Q[0].substr(1).trim()).substr(1);
                            else if (/^usemtl /.test(H)) {
                                var c = H.substring(7).trim();
                                c.split(" ").forEach(function(r) {
                                    var H = i.part ? E + "_" + r : r;
                                    (J = y[H]) || (J = y[H] = {
                                        name: H,
                                        vs: [],
                                        uv: [],
                                        ns: T ? [] : F,
                                        lvs: w ? [] : F
                                    }, i.ignoreMtls && i.ignoreMtls.indexOf(r) >= 0 && delete J.vs, (i.reverseFlip || "*" === s || s && s.indexOf(r) >= 0) && (J.reverseFlip = !0), M(h, J, i, r))
                                })
                            }
                        } else p += H.substring(0, H.length - 1);
                var z = [];
                for (var q in y) {
                    var g = y[q].vs;
                    if (g && 0 !== g.length) {
                        var N = y[q].uv;
                        if (N)
                            for (var V = 2 * g.length / 3 - N.length; V-- > 0;) N.push(0)
                    } else z.push(q)
                }
                z.forEach(function(v) {
                    delete y[v]
                }), u(y, i.cube, i.center, i);
                var Y = i.shape3d;
                if (Y) {
                    var a = [];
                    for (var G in y) {
                        var J = y[G];
                        a.rawS3 = J.rawS3, J.center && (a.center = J.center), a.push(J)
                    }
                    B.setShape3dModel(Y, a)
                }
                return y
            }
        }(),
        R = function(B) {
            var j = {};
            if (B)
                for (var L, I, F, m, V, J, q = new P(B), n = /\s+/; null != (I = q.stepNext());) I = I.trim(), 0 !== I.length && "#" !== I.charAt(0) && (F = I.indexOf(" "), m = (F ? I.substring(0, F) : I).toLowerCase(), V = (F ? I.substring(F + 1) : "").trim(), "newmtl" === m ? j[V] = L = {
                    name: V
                } : L && ("ka" === m || "kd" === m || "ks" === m ? (J = V.split(n, 3), L[m] = [parseFloat(J[0]), parseFloat(J[1]), parseFloat(J[2]), 1]) : L[m] = "ns" === m || "d" === m ? parseFloat(V) : V));
            return j
        },
        P = function(G) {
            var t = this;
            if (G instanceof ArrayBuffer) {
                t.isBuffer = !0;
                var f = 0,
                    Q = new Uint8Array(G),
                    C = Q.length,
                    N = Q.length;
                t.stepNext = function() {
                    for (var i, I, m = f; C > f;)
                        if (i = Q[f], I = i >> 4, 12 === I || 13 == I) f += 2;
                        else if (14 === I) f += 3;
                    else if (f++, 10 === i) return String.fromCharCode.apply(null, Q.subarray(m, f));
                    return f > m ? String.fromCharCode.apply(null, Q.subarray(m, f)) : null
                }
            } else {
                t.isBuffer = !1;
                var n = G.split("\n"),
                    X = 0,
                    N = n.length;
                t.stepNext = function() {
                    return N > X ? n[X++] : null
                }
            }
        };
    P.prototype = {}, P.prototype.constructor = P, $.addMethod(B, {
        loadObj: function(u, v, x) {
            x = x || {};
            var n = !1;
            /(MSIE |Trident\/|Edge\/)/.test(O.navigator.userAgent) && (n = !0);
            var i = function(T) {
                var X, r = x.finishFunc,
                    s = x.shape3d,
                    G = T ? A(T[0], T[1], x) : null;
                if (G) {
                    if (s) X = B.getShape3dModel(s);
                    else {
                        X = [];
                        for (var v in G) {
                            var o = G[v];
                            X.rawS3 = o.rawS3, X.push(o)
                        }
                    }
                    r && r(G, X, X.rawS3)
                } else r && r(null)
            };
            if (n) {
                x.responseType = "arraybuffer";
                var V = function(E) {
                    B.xhrLoad(u, function(n) {
                        i([n, E])
                    }, x)
                };
                v ? B.xhrLoad(v, function(_) {
                    V(_)
                }, x) : V()
            } else B.xhrLoad(v ? [u, v] : [u], i, x)
        },
        parseObj: function(G, O, z) {
            return A(G, O, z)
        }
    });
    var x = o.ByteBuffer = function(Z, q, l) {
            if ("undefined" == typeof Z && (Z = x.DEFAULT_CAPACITY), "undefined" == typeof q && (q = x.DEFAULT_ENDIAN), "undefined" == typeof l && (l = x.DEFAULT_NOASSERT), !l) {
                if (Z = 0 | Z, 0 > Z) throw RangeError("Illegal capacity");
                q = !!q, l = !!l
            }
            this.buffer = 0 === Z ? n : new ArrayBuffer(Z), this.view = 0 === Z ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this.limit = Z, this.littleEndian = q, this.noAssert = l, this.bufferId = 0
        },
        n = new ArrayBuffer(0);
    D.defineProperties(x.prototype, {
        offset: {
            get: function() {
                return this._offset
            },
            set: function(S) {
                this._offset = S, S && S >= this.limit && this.trySwitchNextBuffer()
            }
        }
    }), x.LITTLE_ENDIAN = !0, x.BIG_ENDIAN = !1, x.DEFAULT_CAPACITY = 16, x.DEFAULT_ENDIAN = x.BIG_ENDIAN, x.DEFAULT_NOASSERT = !1, x.METRICS_BYTES = "b";
    var U = String.fromCharCode,
        Y = x.prototype;
    Y.trySwitchNextBuffer = function() {
        var P = this.buffers[++this.bufferId];
        P && (this.buffer = P, this.limit = P.byteLength, this.offset = 0, this.view = P.byteLength > 0 ? new Uint8Array(P) : null)
    }, Y.readUint8 = function(n) {
        var f = "undefined" == typeof n;
        if (f && (n = this.offset), !this.noAssert) {
            if ("number" != typeof n || 0 !== n % 1) throw TypeError("Illegal offset: " + n + " (not an integer)");
            if (n >>>= 0, 0 > n || n + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+" + 1 + ") <= " + this.buffer.byteLength)
        }
        var K = this.view[n];
        return f && (this.offset += 1), K
    }, Y.readUint16 = function(Y) {
        var V = "undefined" == typeof Y;
        if (V && (Y = this.offset), !this.noAssert) {
            if ("number" != typeof Y || 0 !== Y % 1) throw TypeError("Illegal offset: " + Y + " (not an integer)");
            if (Y >>>= 0, 0 > Y || Y + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + Y + " (+" + 2 + ") <= " + this.buffer.byteLength)
        }
        var d = 0;
        return this.littleEndian ? (d = this.view[Y], d |= this.view[Y + 1] << 8) : (d = this.view[Y] << 8, d |= this.view[Y + 1]), V && (this.offset += 2), d
    }, Y.readUint24 = function(J) {
        var i = "undefined" == typeof J;
        if (i && (J = this.offset), !this.noAssert) {
            if ("number" != typeof J || 0 !== J % 1) throw TypeError("Illegal offset: " + J + " (not an integer)");
            if (J >>>= 0, 0 > J || J + 3 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + J + " (+" + 4 + ") <= " + this.buffer.byteLength)
        }
        var o = 0;
        return this.littleEndian ? (o = this.view[J + 2] << 16, o |= this.view[J + 1] << 8, o |= this.view[J]) : (o = this.view[J + 1] << 8, o |= this.view[J + 2], o += this.view[J] << 16 >>> 0), o |= 0, i && (this.offset += 3), o
    }, Y.readUint32 = function(O) {
        var b = "undefined" == typeof O;
        if (b && (O = this.offset), !this.noAssert) {
            if ("number" != typeof O || 0 !== O % 1) throw TypeError("Illegal offset: " + O + " (not an integer)");
            if (O >>>= 0, 0 > O || O + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + O + " (+" + 4 + ") <= " + this.buffer.byteLength)
        }
        var k = 0;
        return this.littleEndian ? (k = this.view[O + 2] << 16, k |= this.view[O + 1] << 8, k |= this.view[O], k += this.view[O + 3] << 24 >>> 0) : (k = this.view[O + 1] << 16, k |= this.view[O + 2] << 8, k |= this.view[O + 3], k += this.view[O] << 24 >>> 0), b && (this.offset += 4), k
    }, Y.readFloat32 = function(s) {
        var J = "undefined" == typeof s;
        if (J && (s = this.offset), !this.noAssert) {
            if ("number" != typeof s || 0 !== s % 1) throw TypeError("Illegal offset: " + s + " (not an integer)");
            if (s >>>= 0, 0 > s || s + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + s + " (+" + 4 + ") <= " + this.buffer.byteLength)
        }
        var A = a(this.view, s, this.littleEndian, 23, 4);
        return J && (this.offset += 4), A
    };
    var T = function() {
        var P = {};
        return P.MAX_CODEPOINT = 1114111, P.decodeUTF8 = function(Z, U) {
            for (var w, J, _, G, u = function(d) {
                    d = d.slice(0, d.indexOf(null));
                    var W = Error(d.toString());
                    throw W.name = "TruncatedError", W.bytes = d, W
                }; null !== (w = Z());)
                if (0 === (128 & w)) U(w);
                else if (192 === (224 & w)) null === (J = Z()) && u([w, J]), U((31 & w) << 6 | 63 & J);
            else if (224 === (240 & w))(null === (J = Z()) || null === (_ = Z())) && u([w, J, _]), U((15 & w) << 12 | (63 & J) << 6 | 63 & _);
            else {
                if (240 !== (248 & w)) throw RangeError("Illegal starting byte: " + w);
                (null === (J = Z()) || null === (_ = Z()) || null === (G = Z())) && u([w, J, _, G]), U((7 & w) << 18 | (63 & J) << 12 | (63 & _) << 6 | 63 & G)
            }
        }, P.UTF16toUTF8 = function(X, S) {
            for (var l, U = null;;) {
                if (null === (l = null !== U ? U : X())) break;
                l >= 55296 && 57343 >= l && null !== (U = X()) && U >= 56320 && 57343 >= U ? (S(1024 * (l - 55296) + U - 56320 + 65536), U = null) : S(l)
            }
            null !== U && S(U)
        }, P.UTF8toUTF16 = function(j, X) {
            var g = null;
            for ("number" == typeof j && (g = j, j = function() {
                    return null
                }); null !== g || null !== (g = j());) 65535 >= g ? X(g) : (g -= 65536, X((g >> 10) + 55296), X(g % 1024 + 56320)), g = null
        }, P.decodeUTF8toUTF16 = function(c, D) {
            P.decodeUTF8(c, function(m) {
                P.UTF8toUTF16(m, D)
            })
        }, P.calculateCodePoint = function(t) {
            return 128 > t ? 1 : 2048 > t ? 2 : 65536 > t ? 3 : 4
        }, P.calculateUTF8 = function(m) {
            for (var i, g = 0; null !== (i = m());) g += 128 > i ? 1 : 2048 > i ? 2 : 65536 > i ? 3 : 4;
            return g
        }, P.calculateUTF16asUTF8 = function(q) {
            var _ = 0,
                e = 0;
            return P.UTF16toUTF8(q, function(E) {
                ++_, e += 128 > E ? 1 : 2048 > E ? 2 : 65536 > E ? 3 : 4
            }), [_, e]
        }, P
    }();
    Y.readString = function(m, c, S) {
        "number" == typeof c && (S = c, c = G);
        var i = "undefined" == typeof S;
        if (i && (S = this.offset), "undefined" == typeof c && (c = x.METRICS_CHARS), !this.noAssert) {
            if ("number" != typeof m || 0 !== m % 1) throw TypeError("Illegal length: " + m + " (not an integer)");
            if (m |= 0, "number" != typeof S || 0 !== S % 1) throw TypeError("Illegal offset: " + S + " (not an integer)");
            if (S >>>= 0, 0 > S || S + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + S + " (+" + 0 + ") <= " + this.buffer.byteLength)
        }
        var H, f = 0,
            Q = S;
        if (c === x.METRICS_CHARS) {
            if (H = d(), T.decodeUTF8(function() {
                    return m > f && S < this.limit ? this.view[S++] : null
                }.bind(this), function(t) {
                    ++f, T.UTF8toUTF16(t, H)
                }), f !== m) throw RangeError("Illegal range: Truncated data, " + f + " == " + m);
            return i ? (this.offset = S, H()) : {
                string: H(),
                length: S - Q
            }
        }
        if (c === x.METRICS_BYTES) {
            if (!this.noAssert) {
                if ("number" != typeof S || 0 !== S % 1) throw TypeError("Illegal offset: " + S + " (not an integer)");
                if (S >>>= 0, 0 > S || S + m > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + S + " (+" + m + ") <= " + this.buffer.byteLength)
            }
            var J = S + m;
            if (T.decodeUTF8toUTF16(function() {
                    return J > S ? this.view[S++] : null
                }.bind(this), H = d(), this.noAssert), S !== J) throw RangeError("Illegal range: Truncated data, " + S + " == " + J);
            return i ? (this.offset = S, H()) : {
                string: H(),
                length: S - Q
            }
        }
        throw TypeError("Unsupported metrics: " + c)
    };
    var q = function(O) {
            if (O.length) {
                for (var o = 0; o < O.length; o++)
                    if (!O[o]) return;
                var l = O[0],
                    Y = new x(0);
                Y.buffer = l, Y.limit = l.byteLength, Y.view = l.byteLength > 0 ? new Uint8Array(l) : null, Y.buffers = O;
                var T = [],
                    G = Y.readUint8(10);
                return I(T, Y), X(T, Y), e(T, Y, G), T
            }
        },
        I = function(L, G) {
            G.offset += 19
        },
        X = function(e, r) {
            var $ = r.readUint8();
            1 & $ && (e.center = Z(r)), 2 & $ && (e.rawS3 = Z(r))
        },
        Q = function(o) {
            return [o.readFloat32(), o.readFloat32()]
        },
        Z = function(z) {
            return [z.readFloat32(), z.readFloat32(), z.readFloat32()]
        },
        S = function(E) {
            var Q = E.readUint32();
            return E.readString(Q, x.METRICS_BYTES)
        },
        e = function(W, p, o) {
            for (var r = ((o || 0) << 8) + p.readUint8(), O = 0; r > O; O++) W.push(i(p))
        },
        i = function(J) {
            var y = {},
                T = J.readUint32(),
                w = 0,
                O = T & 1 << w++,
                V = T & 1 << w++,
                u = T & 1 << w++,
                M = T & 1 << w++,
                o = T & 1 << w++,
                K = T & 1 << w++,
                f = T & 1 << w++,
                g = T & 1 << w++,
                B = T & 1 << w++,
                z = T & 1 << w++,
                e = T & 1 << w++,
                s = T & 1 << w++;
            return (O || V) && _(y, J, 3, "vs", "lvs"), u && _(y, J, 2, "uv"), M && _(y, J, 3, "ns"), o && (y.name = S(J)), K && (y.color = Z(J)), f && (y.transparent = !!J.readUint8()), g && (y.opacity = J.readFloat32()), B && (y.uvoffset = Q(J)), z && (y.uvScale = Z(J)), e && (y.image = S(J)), s && (y.reverseFlip = !!J.readUint8()), y
        },
        l = 16383,
        v = function(U) {
            var m = U.readUint16(),
                O = 16384 & m,
                B = 32768 & m,
                M = (m & l) / l,
                p = 0;
            return B && (p = U.readUint16()), (O ? 1 : -1) * (p + M)
        },
        p = function(Q) {
            var S = Q.readUint32(),
                $ = S & 1 << 30,
                W = S & 1 << 29,
                t = S & 1 << 28,
                P = 16383,
                b = (16383 & S >> 14) / P,
                e = (16383 & S) / P,
                c = Math.sqrt(1 - b * b - e * e) || 0;
            return [b * ($ ? 1 : -1), e * (W ? 1 : -1), c * (t ? 1 : -1)]
        },
        _ = function(i, W, $, P, j) {
            var w = W.readUint32();
            W.readUint8();
            var f, Y, z, r = W.readUint32(),
                N = W.readUint32(),
                O = [];
            if ("uv" === P)
                for (f = 0; w > f; f++) Y = v(W), z = v(W), O.push([Y, z]);
            else if ("ns" === P)
                for (f = 0; w > f; f++) O.push(p(W));
            else
                for (var f = 0; w > f; f++) O.push(Z(W));
            var M;
            M = 256 > w ? "readUint8" : 65536 > w ? "readUint16" : 16777216 > w ? "readUint24" : "readUint32";
            var B, h, C;
            if (r)
                for (B = i[P] = [], f = 0; r > f; f++) h = W[M](), C = O[h], "uv" === P ? B.push(C[0], C[1]) : B.push(C[0], C[1], C[2]);
            if (N)
                for (B = i[j] = [], f = 0; N > f; f++) h = W[M](), C = O[h], B.push(C[0], C[1], C[2])
        };
    B.getInternal().addMethod(B, {
        loadBin: function(h, u) {
            u = u || {};
            var R = function(S) {
                    var t, b = u.finishFunc,
                        N = u.shape3d,
                        j = q(S);
                    if (j) {
                        if (N) t = B.getShape3dModel(N);
                        else {
                            t = [];
                            for (var d in j) {
                                var z = j[d];
                                t.rawS3 = z.rawS3, t.push(z)
                            }
                        }
                        b && b(j, t, t.rawS3)
                    } else b && b(null)
                },
                c = function(S) {
                    var W = u.finishFunc;
                    if (!S) return W && W(null), void 0;
                    if (S.byteLength < 50) {
                        var H = new Uint8Array(S),
                            X = H[9];
                        if (X > 1) {
                            for (var Q = [], E = h.substr(0, h.length - 4), a = 1; X > a; a++) Q.push(E + a + ".bin");
                            return B.xhrLoad(Q, function(f) {
                                f.splice(0, 0, S), R(f)
                            }, u), void 0
                        }
                    }
                    R([S])
                };
            u.responseType = "arraybuffer", B.xhrLoad(h, function(O) {
                c(O)
            }, u)
        },
        parseBin: function(d) {
            return q([d])
        }
    })
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : (0, eval)("this"), Object);