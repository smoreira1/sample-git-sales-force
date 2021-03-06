/*! @sentry/browser 4.1.1 (3fd9e95) | https://github.com/getsentry/sentry-javascript */
const Sentry = function (t) {
    "use strict";
    var e = function (t, n) {
        return (e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, n)
    };

    function n(t, n) {
        function r() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
    }
    var r = function () {
        return (r = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    };

    function o(t, e, n, r) {
        return new(n || (n = Promise))(function (o, i) {
            function a(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                t.done ? o(t.value) : new n(function (e) {
                    e(t.value)
                }).then(a, u)
            }
            c((r = r.apply(t, e || [])).next())
        })
    }

    function i(t, e) {
        var n, r, o, i, a = {
            label: 0,
            sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function u(i) {
            return function (u) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function a(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                r && !r.done && (n = i.return) && n.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }

    function u() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
        return t
    }
    var c = "undefined" != typeof SecureWindow ? SecureWindow : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function s(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function l(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var f = l(function (t, e) {
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function (t) {
                t.Fatal = "fatal", t.Error = "error", t.Warning = "warning", t.Log = "log", t.Info = "info", t.Debug = "debug", t.Critical = "critical"
            }(e.Severity || (e.Severity = {})),
            function (t) {
                t.fromString = function (e) {
                    switch (e) {
                        case "debug":
                            return t.Debug;
                        case "info":
                            return t.Info;
                        case "warn":
                        case "warning":
                            return t.Warning;
                        case "error":
                            return t.Error;
                        case "fatal":
                            return t.Fatal;
                        case "critical":
                            return t.Critical;
                        case "log":
                        default:
                            return t.Log
                    }
                }
            }(e.Severity || (e.Severity = {})),
            function (t) {
                t.Unknown = "unknown", t.Skipped = "skipped", t.Success = "success", t.RateLimit = "rate_limit", t.Invalid = "invalid", t.Failed = "failed"
            }(e.Status || (e.Status = {})),
            function (t) {
                t.fromHttpCode = function (e) {
                    return e >= 200 && e < 300 ? t.Success : 429 === e ? t.RateLimit : e >= 400 && e < 500 ? t.Invalid : e >= 500 ? t.Failed : t.Unknown
                }
            }(e.Status || (e.Status = {}))
    });
    s(f);
    var p = f.Severity,
        h = f.Status,
        d = l(function (t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isError = function (t) {
                switch (Object.prototype.toString.call(t)) {
                    case "[object Error]":
                    case "[object Exception]":
                    case "[object DOMException]":
                        return !0;
                    default:
                        return t instanceof Error
                }
            }, e.isErrorEvent = function (t) {
                return "[object ErrorEvent]" === Object.prototype.toString.call(t)
            }, e.isDOMError = function (t) {
                return "[object DOMError]" === Object.prototype.toString.call(t)
            }, e.isDOMException = function (t) {
                return "[object DOMException]" === Object.prototype.toString.call(t)
            }, e.isUndefined = function (t) {
                return void 0 === t
            }, e.isFunction = function (t) {
                return "function" == typeof t
            }, e.isString = function (t) {
                return "[object String]" === Object.prototype.toString.call(t)
            }, e.isArray = function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, e.isPlainObject = function (t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }, e.isRegExp = function (t) {
                return "[object RegExp]" === Object.prototype.toString.call(t)
            }, e.isNaN = function (t) {
                return t != t
            }
        });
    s(d);
    var v = d.isError,
        y = d.isErrorEvent,
        g = d.isDOMError,
        b = d.isDOMException,
        m = d.isUndefined,
        _ = d.isFunction,
        w = d.isString,
        E = (d.isArray, d.isPlainObject),
        x = (d.isRegExp, d.isNaN, l(function (t, e) {
            function n() {
                return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
            }

            function r() {
                return n() ? c : "undefined" != typeof SecureWindow ? SecureWindow : "undefined" != typeof self ? self : {}
            }

            function o(t) {
                var e, n, r, o, i, a = [];
                if (!t || !t.tagName) return "";
                if (a.push(t.tagName.toLowerCase()), t.id && a.push("#" + t.id), (e = t.className) && d.isString(e))
                    for (n = e.split(/\s+/), i = 0; i < n.length; i++) a.push("." + n[i]);
                var u = ["type", "name", "title", "alt"];
                for (i = 0; i < u.length; i++) r = u[i], (o = t.getAttribute(r)) && a.push("[" + r + '="' + o + '"]');
                return a.join("")
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isNodeEnv = n, e.getGlobalObject = r, e.uuid4 = function () {
                var t = r(),
                    e = t.crypto || t.msCrypto;
                if (void 0 !== e && e.getRandomValues) {
                    var n = new Uint16Array(8);
                    e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                    var o = function (t) {
                        for (var e = t.toString(16); e.length < 4;) e = "0" + e;
                        return e
                    };
                    return o(n[0]) + o(n[1]) + o(n[2]) + o(n[3]) + o(n[4]) + o(n[5]) + o(n[6]) + o(n[7])
                }
                return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var e = 16 * Math.random() | 0;
                    return ("x" === t ? e : 3 & e | 8).toString(16)
                })
            }, e.htmlTreeAsString = function (t) {
                for (var e, n = t, r = [], i = 0, a = 0, u = " > ".length; n && i++ < 5 && !("html" === (e = o(n)) || i > 1 && a + r.length * u + e.length >= 80);) r.push(e), a += e.length, n = n.parentNode;
                return r.reverse().join(" > ")
            }, e.htmlElementAsString = o, e.parseUrl = function (t) {
                if (!t) return {};
                var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                var n = e[6] || "",
                    r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    relative: e[5] + n + r
                }
            }, e.getEventDescription = function (t) {
                if (t.message) return t.message;
                if (t.exception && t.exception.values && t.exception.values[0]) {
                    var e = t.exception.values[0];
                    return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
                }
                return t.event_id || "<unknown>"
            }
        }));
    s(x);
    x.isNodeEnv;
    var S = x.getGlobalObject,
        k = (x.uuid4, x.htmlTreeAsString),
        O = (x.htmlElementAsString, x.parseUrl),
        j = x.getEventDescription,
        T = l(function (t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = x.getGlobalObject(),
                r = new(function () {
                    function t() {
                        this.console = n.console, this.disabled = !0
                    }
                    return t.prototype.disable = function () {
                        this.disabled = !0
                    }, t.prototype.enable = function () {
                        this.disabled = !1
                    }, t.prototype.log = function (t) {
                        this.disabled || this.console.log("Sentry Logger [Log]: " + t)
                    }, t.prototype.warn = function (t) {
                        this.disabled || this.console.warn("Sentry Logger [Warn]: " + t)
                    }, t.prototype.error = function (t) {
                        this.disabled || this.console.error("Sentry Logger [Error]: " + t)
                    }, t
                }());
            e.logger = r
        });
    s(T);
    T.logger;
    var P = l(function (t, e) {
        var n = c && c.__values || function (t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator],
                n = 0;
            return e ? e.call(t) : {
                next: function () {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    }
                }
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = "[NaN]",
            o = "[undefined]";

        function i() {
            var t = [],
                e = [];
            return function (n, i) {
                var a = i;
                if (d.isNaN(i) ? a = r : d.isUndefined(i) && (a = o), t.length > 0) {
                    var u = t.indexOf(this); - 1 !== u ? (t.splice(u + 1), e.splice(u, 1 / 0, n)) : (t.push(this), e.push(n)), -1 !== t.indexOf(a) && (a = function (n, r) {
                        return t[0] === r ? "[Circular ~]" : "[Circular ~." + e.slice(0, t.indexOf(r)).join(".") + "]"
                    }.call(this, n, a))
                } else t.push(a);
                return a instanceof Error ? function (t) {
                    var e = {
                        message: t.message,
                        name: t.name,
                        stack: t.stack
                    };
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }(a) : a
            }
        }

        function a(t, e) {
            return e === r ? NaN : e !== o ? e : void 0
        }

        function u(t) {
            return JSON.stringify(t, i())
        }

        function s(t) {
            return JSON.parse(t, a)
        }
        e.serialize = u, e.deserialize = s, e.clone = function (t) {
            return s(u(t))
        }, e.fill = function (t, e, n) {
            if (e in t && !t[e].__sentry__) {
                var r = t[e],
                    o = n(r);
                o.__sentry__ = !0, o.__sentry_original__ = r, o.__sentry_wrapped__ = o, t[e] = o
            }
        }, e.urlEncode = function (t) {
            return Object.keys(t).map(function (e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }).join("&")
        };
        var l = 3,
            f = 51200,
            p = 40;

        function h(t) {
            return function (t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(t))
        }

        function v(t) {
            if ("string" == typeof t) return t.length <= 40 ? t : t.substr(0, 39) + "…";
            if ("number" == typeof t || "boolean" == typeof t || void 0 === t) return t;
            if (d.isNaN(t)) return "[NaN]";
            if (d.isUndefined(t)) return "[undefined]";
            var e = Object.prototype.toString.call(t);
            if ("[object Object]" === e) return "[Object]";
            if ("[object Array]" === e) return "[Array]";
            if ("[object Function]" === e) {
                var n = t.name;
                return n ? "[Function: " + n + "]" : "[Function]"
            }
            return t
        }

        function y(t, e) {
            if (0 === e) return v(t);
            if (d.isPlainObject(t)) {
                var n = {},
                    r = t;
                return Object.keys(r).forEach(function (t) {
                    n[t] = y(r[t], e - 1)
                }), n
            }
            return Array.isArray(t) ? t.map(function (t) {
                return y(t, e - 1)
            }) : v(t)
        }
        e.serializeObject = y, e.limitObjectDepthToSize = function t(e, n, r) {
            void 0 === n && (n = l), void 0 === r && (r = f);
            var o = y(e, n);
            return h(u(o)) > r ? t(e, n - 1) : o
        }, e.serializeKeysToEventMessage = function (t, e) {
            if (void 0 === e && (e = p), !t.length) return "[object has no keys]";
            if (t[0].length >= e) return t[0];
            for (var n = t.length; n > 0; n--) {
                var r = t.slice(0, n).join(", ");
                if (!(r.length > e)) return n === t.length ? r : r + "…"
            }
            return ""
        }, e.assign = function (t) {
            for (var e, r, o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            if (null === t || void 0 === t) throw new TypeError("Cannot convert undefined or null to object");
            var a = Object(t);
            try {
                for (var u = n(o), c = u.next(); !c.done; c = u.next()) {
                    var s = c.value;
                    if (null !== s)
                        for (var l in s) Object.prototype.hasOwnProperty.call(s, l) && (a[l] = s[l])
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    c && !c.done && (r = u.return) && r.call(u)
                } finally {
                    if (e) throw e.error
                }
            }
            return a
        }
    });
    s(P);
    var M = P.serialize,
        F = P.deserialize,
        I = (P.clone, P.fill),
        R = (P.urlEncode, P.serializeObject),
        C = P.limitObjectDepthToSize,
        D = P.serializeKeysToEventMessage,
        B = (P.assign, l(function (t, e) {
            var n = c && c.__assign || function () {
                    return (n = Object.assign || function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                r = c && c.__awaiter || function (t, e, n, r) {
                    return new(n || (n = Promise))(function (o, i) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? o(t.value) : new n(function (e) {
                                e(t.value)
                            }).then(a, u)
                        }
                        c((r = r.apply(t, e || [])).next())
                    })
                },
                o = c && c.__generator || function (t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function u(i) {
                        return function (u) {
                            return function (i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                },
                i = c && c.__values || function (t) {
                    var e = "function" == typeof Symbol && t[Symbol.iterator],
                        n = 0;
                    return e ? e.call(t) : {
                        next: function () {
                            return t && n >= t.length && (t = void 0), {
                                value: t && t[n++],
                                done: !t
                            }
                        }
                    }
                },
                a = c && c.__read || function (t, e) {
                    var n = "function" == typeof Symbol && t[Symbol.iterator];
                    if (!n) return t;
                    var r, o, i = n.call(t),
                        a = [];
                    try {
                        for (;
                            (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                    } catch (t) {
                        o = {
                            error: t
                        }
                    } finally {
                        try {
                            r && !r.done && (n = i.return) && n.call(i)
                        } finally {
                            if (o) throw o.error
                        }
                    }
                    return a
                },
                u = c && c.__spread || function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
                    return t
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = function () {
                function t() {
                    this.notifyingListeners = !1, this.scopeListeners = [], this.eventProcessors = [], this.breadcrumbs = [], this.user = {}, this.tags = {}, this.extra = {}
                }
                return t.prototype.addScopeListener = function (t) {
                    this.scopeListeners.push(t)
                }, t.prototype.addEventProcessor = function (t) {
                    return this.eventProcessors.push(t), this
                }, t.prototype.notifyScopeListeners = function () {
                    var t = this;
                    this.notifyingListeners || (this.notifyingListeners = !0, setTimeout(function () {
                        t.scopeListeners.forEach(function (e) {
                            e(t)
                        }), t.notifyingListeners = !1
                    }, 0))
                }, t.prototype.notifyEventProcessors = function (t, e) {
                    return r(this, void 0, void 0, function () {
                        var r, a, u, c, s, l, f;
                        return o(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    u = t, o.label = 1;
                                case 1:
                                    o.trys.push([1, 8, 9, 10]), c = i(this.eventProcessors), s = c.next(), o.label = 2;
                                case 2:
                                    if (s.done) return [3, 7];
                                    l = s.value, o.label = 3;
                                case 3:
                                    return o.trys.push([3, 5, , 6]), [4, l(n({}, u), e)];
                                case 4:
                                    return null === (u = o.sent()) ? [2, null] : [3, 6];
                                case 5:
                                    return o.sent(), [3, 6];
                                case 6:
                                    return s = c.next(), [3, 2];
                                case 7:
                                    return [3, 10];
                                case 8:
                                    return f = o.sent(), r = {
                                        error: f
                                    }, [3, 10];
                                case 9:
                                    try {
                                        s && !s.done && (a = c.return) && a.call(c)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                    return [7];
                                case 10:
                                    return [2, u]
                            }
                        })
                    })
                }, t.prototype.setUser = function (t) {
                    return this.user = t, this.notifyScopeListeners(), this
                }, t.prototype.setTag = function (t, e) {
                    var r;
                    return this.tags = n({}, this.tags, ((r = {})[t] = e, r)), this.notifyScopeListeners(), this
                }, t.prototype.setExtra = function (t, e) {
                    var r;
                    return this.extra = n({}, this.extra, ((r = {})[t] = e, r)), this.notifyScopeListeners(), this
                }, t.prototype.setFingerprint = function (t) {
                    return this.fingerprint = t, this.notifyScopeListeners(), this
                }, t.prototype.setLevel = function (t) {
                    return this.level = t, this.notifyScopeListeners(), this
                }, t.clone = function (e) {
                    var n = new t;
                    return P.assign(n, e, {
                        scopeListeners: []
                    }), e && (n.extra = P.assign(e.extra), n.tags = P.assign(e.tags), n.breadcrumbs = u(e.breadcrumbs), n.eventProcessors = u(e.eventProcessors)), n
                }, t.prototype.getTags = function () {
                    return this.tags
                }, t.prototype.getExtra = function () {
                    return this.extra
                }, t.prototype.getUser = function () {
                    return this.user
                }, t.prototype.getFingerprint = function () {
                    return this.fingerprint
                }, t.prototype.getBreadcrumbs = function () {
                    return this.breadcrumbs
                }, t.prototype.getLevel = function () {
                    return this.level
                }, t.prototype.clear = function () {
                    this.breadcrumbs = [], this.tags = {}, this.extra = {}, this.user = {}, this.level = void 0, this.fingerprint = void 0, this.notifyScopeListeners()
                }, t.prototype.addBreadcrumb = function (t, e) {
                    this.breadcrumbs = void 0 !== e && e >= 0 ? u(this.breadcrumbs, [t]).slice(-e) : u(this.breadcrumbs, [t]), this.notifyScopeListeners()
                }, t.prototype.applyToEvent = function (t, e, i) {
                    return r(this, void 0, void 0, function () {
                        return o(this, function (r) {
                            return this.extra && Object.keys(this.extra).length && (t.extra = n({}, this.extra, t.extra)), this.tags && Object.keys(this.tags).length && (t.tags = n({}, this.tags, t.tags)), this.user && Object.keys(this.user).length && (t.user = n({}, this.user, t.user)), this.fingerprint && void 0 === t.fingerprint && (t.fingerprint = this.fingerprint), this.level && (t.level = this.level), (!t.breadcrumbs || 0 === t.breadcrumbs.length) && this.breadcrumbs.length > 0 && (t.breadcrumbs = void 0 !== i && i >= 0 ? this.breadcrumbs.slice(-i) : this.breadcrumbs), [2, this.notifyEventProcessors(t, e)]
                        })
                    })
                }, t
            }();
            e.Scope = s
        }));
    s(B);
    B.Scope;
    var A = l(function (t, e) {
        var n = c && c.__assign || function () {
                return (n = Object.assign || function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            r = c && c.__read || function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            o = c && c.__spread || function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(r(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.API_VERSION = 3;
        var i = function () {
            function t(t, n, r) {
                void 0 === n && (n = new B.Scope), void 0 === r && (r = e.API_VERSION), this.version = r, this.stack = [], this.stack.push({
                    client: t,
                    scope: n
                })
            }
            return t.prototype.invokeClient = function (t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var i = this.getStackTop();
                i && i.client && i.client[t] && (e = i.client)[t].apply(e, o(n, [i.scope]))
            }, t.prototype.invokeClientAsync = function (t) {
                for (var e, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                var i = this.getStackTop();
                i && i.client && i.client[t] && (e = i.client)[t].apply(e, o(n, [i.scope])).catch(function (t) {
                    console.error(t)
                })
            }, t.prototype.isOlderThan = function (t) {
                return this.version < t
            }, t.prototype.bindClient = function (t) {
                var e = this.getStackTop();
                e.client = t, e && e.scope && t && e.scope.addScopeListener(function (e) {
                    if (t.getBackend) try {
                        t.getBackend().storeScope(e)
                    } catch (t) {}
                })
            }, t.prototype.pushScope = function () {
                var t = this.getStack(),
                    e = t.length > 0 ? t[t.length - 1].scope : void 0,
                    n = B.Scope.clone(e);
                return this.getStack().push({
                    client: this.getClient(),
                    scope: n
                }), n
            }, t.prototype.popScope = function () {
                return void 0 !== this.getStack().pop()
            }, t.prototype.withScope = function (t) {
                var e = this.pushScope();
                try {
                    t(e)
                } finally {
                    this.popScope()
                }
            }, t.prototype.getClient = function () {
                return this.getStackTop().client
            }, t.prototype.getScope = function () {
                return this.getStackTop().scope
            }, t.prototype.getStack = function () {
                return this.stack
            }, t.prototype.getStackTop = function () {
                return this.stack[this.stack.length - 1]
            }, t.prototype.captureException = function (t, e) {
                var r = this._lastEventId = x.uuid4();
                return this.invokeClientAsync("captureException", t, n({}, e, {
                    event_id: r
                })), r
            }, t.prototype.captureMessage = function (t, e, r) {
                var o = this._lastEventId = x.uuid4();
                return this.invokeClientAsync("captureMessage", t, e, n({}, r, {
                    event_id: o
                })), o
            }, t.prototype.captureEvent = function (t, e) {
                var r = this._lastEventId = x.uuid4();
                return this.invokeClientAsync("captureEvent", t, n({}, e, {
                    event_id: r
                })), r
            }, t.prototype.lastEventId = function () {
                return this._lastEventId
            }, t.prototype.addBreadcrumb = function (t, e) {
                this.invokeClient("addBreadcrumb", t, n({}, e))
            }, t.prototype.configureScope = function (t) {
                var e = this.getStackTop();
                e.scope && e.client && t(e.scope)
            }, t.prototype.run = function (t) {
                var e = u(this);
                try {
                    t(this)
                } finally {
                    u(e)
                }
            }, t
        }();

        function a() {
            var t = x.getGlobalObject();
            return t.__SENTRY__ = t.__SENTRY__ || {
                hub: void 0
            }, t.__SENTRY__
        }

        function u(t) {
            var e = a(),
                n = e.hub;
            return e.hub = t, n
        }
        e.Hub = i, e.getMainCarrier = a, e.makeMain = u, e.getCurrentHub = function () {
            var t = a();
            t.hub && !t.hub.isOlderThan(e.API_VERSION) || (t.hub = new i);
            var n = null;
            try {
                n = process.domain
            } catch (t) {}
            if (!n) return t.hub;
            var r = n.__SENTRY__;
            if (r || (n.__SENTRY__ = r = {}), !r.hub) {
                var o = t.hub.getStackTop();
                r.hub = o ? new i(o.client, B.Scope.clone(o.scope)) : new i
            }
            return r.hub
        }, e.getHubFromCarrier = function (t) {
            return t && t.__SENTRY__ && t.__SENTRY__.hub ? t.__SENTRY__.hub : (t.__SENTRY__ = {}, t.__SENTRY__.hub = new i, t.__SENTRY__.hub)
        }
    });
    s(A);
    A.API_VERSION, A.Hub, A.getMainCarrier, A.makeMain, A.getCurrentHub, A.getHubFromCarrier;
    var L = l(function (t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Scope = B.Scope, e.getCurrentHub = A.getCurrentHub, e.getHubFromCarrier = A.getHubFromCarrier, e.Hub = A.Hub
    });
    s(L);
    L.Scope, L.getCurrentHub, L.getHubFromCarrier, L.Hub;
    var U = l(function (t, e) {
        var n = c && c.__read || function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            r = c && c.__spread || function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
                return t
            };

        function o(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            var o = L.getCurrentHub();
            if (o && o[t]) return o[t].apply(o, r(e));
            throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.captureException = function (t) {
            var e;
            try {
                throw new Error("Sentry syntheticException")
            } catch (t) {
                e = t
            }
            return o("captureException", t, {
                originalException: t,
                syntheticException: e
            })
        }, e.captureMessage = function (t, e) {
            var n;
            try {
                throw new Error(t)
            } catch (t) {
                n = t
            }
            return o("captureMessage", t, e, {
                originalException: t,
                syntheticException: n
            })
        }, e.captureEvent = function (t) {
            return o("captureEvent", t)
        }, e.addBreadcrumb = function (t) {
            o("addBreadcrumb", t)
        }, e.configureScope = function (t) {
            o("configureScope", t)
        }, e.withScope = function (t) {
            o("withScope", t)
        }, e._callOnClient = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            o.apply(void 0, r(["invokeClient", t], e))
        }
    });
    s(U);
    U.captureException, U.captureMessage, U.captureEvent, U.addBreadcrumb, U.configureScope, U.withScope, U._callOnClient;
    var N = l(function (t, e) {
        var n, r = c && c.__extends || (n = function (t, e) {
            return (n = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (t, e) {
                    t.__proto__ = e
                } || function (t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
        }, function (t, e) {
            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function (t) {
            function e(e) {
                var n = this.constructor,
                    r = t.call(this, e) || this;
                return r.message = e, r.name = n.prototype.constructor.name, Object.setPrototypeOf(r, n.prototype), r
            }
            return r(e, t), e
        }(Error);
        e.SentryError = o
    });
    s(N);
    N.SentryError;
    var H = l(function (t, e) {
        var n = c && c.__read || function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            r = c && c.__values || function (t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function () {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/,
            i = function () {
                function t(t) {
                    "string" == typeof t ? this.fromString(t) : this.fromComponents(t), this.validate()
                }
                return t.prototype.toString = function (t) {
                    void 0 === t && (t = !1);
                    var e = this,
                        n = e.host,
                        r = e.path,
                        o = e.pass,
                        i = e.port,
                        a = e.projectId;
                    return e.protocol + "://" + e.user + (t && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r ? r + "/" : r) + a
                }, t.prototype.fromString = function (t) {
                    var e = o.exec(t);
                    if (!e) throw new N.SentryError("Invalid Dsn");
                    var r = n(e.slice(1), 6),
                        i = r[0],
                        a = r[1],
                        u = r[2],
                        c = void 0 === u ? "" : u,
                        s = r[3],
                        l = r[4],
                        f = void 0 === l ? "" : l,
                        p = "",
                        h = r[5],
                        d = h.split("/");
                    d.length > 1 && (p = d.slice(0, -1).join("/"), h = d.pop()), P.assign(this, {
                        host: s,
                        pass: c,
                        path: p,
                        projectId: h,
                        port: f,
                        protocol: i,
                        user: a
                    })
                }, t.prototype.fromComponents = function (t) {
                    this.protocol = t.protocol, this.user = t.user, this.pass = t.pass || "", this.host = t.host, this.port = t.port || "", this.path = t.path || "", this.projectId = t.projectId
                }, t.prototype.validate = function () {
                    var t, e;
                    try {
                        for (var n = r(["protocol", "user", "host", "projectId"]), o = n.next(); !o.done; o = n.next()) {
                            var i = o.value;
                            if (!this[i]) throw new N.SentryError("Invalid Dsn: Missing " + i)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (e = n.return) && e.call(n)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    if ("http" !== this.protocol && "https" !== this.protocol) throw new N.SentryError('Invalid Dsn: Unsupported protocol "' + this.protocol + '"');
                    if (this.port && d.isNaN(parseInt(this.port, 10))) throw new N.SentryError('Invalid Dsn: Invalid port number "' + this.port + '"')
                }, t
            }();
        e.Dsn = i
    });
    s(H);
    H.Dsn;
    var G = l(function (t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function () {
            function t(t) {
                this.dsn = t, this.dsnObject = new H.Dsn(t)
            }
            return t.prototype.getDsn = function () {
                return this.dsnObject
            }, t.prototype.getStoreEndpoint = function () {
                return "" + this.getBaseUrl() + this.getStoreEndpointPath()
            }, t.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
                var t = {
                    sentry_key: this.dsnObject.user,
                    sentry_version: "7"
                };
                return this.getStoreEndpoint() + "?" + P.urlEncode(t)
            }, t.prototype.getBaseUrl = function () {
                var t = this.dsnObject,
                    e = t.protocol ? t.protocol + ":" : "",
                    n = t.port ? ":" + t.port : "";
                return e + "//" + t.host + n
            }, t.prototype.getStoreEndpointPath = function () {
                var t = this.dsnObject;
                return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
            }, t.prototype.getRequestHeaders = function (t, e) {
                var n = this.dsnObject,
                    r = ["Sentry sentry_version=7"];
                return r.push("sentry_timestamp=" + (new Date).getTime()), r.push("sentry_client=" + t + "/" + e), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                    "Content-Type": "application/json",
                    "X-Sentry-Auth": r.join(", ")
                }
            }, t.prototype.getReportDialogEndpoint = function (t) {
                void 0 === t && (t = {});
                var e = this.dsnObject,
                    n = this.getBaseUrl() + (e.path ? "/" + e.path : "") + "/api/embed/error-page/",
                    r = [];
                for (var o in r.push("dsn=" + e.toString()), t)
                    if ("user" === o) {
                        if (!t.user) continue;
                        t.user.name && r.push("name=" + encodeURIComponent(t.user.name)), t.user.email && r.push("email=" + encodeURIComponent(t.user.email))
                    } else r.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
                return r.length ? n + "?" + r.join("&") : n
            }, t
        }();
        e.API = n
    });
    s(G);
    G.API;
    var $ = l(function (t, e) {
        var n = c && c.__awaiter || function (t, e, n, r) {
                return new(n || (n = Promise))(function (o, i) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        t.done ? o(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            r = c && c.__generator || function (t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function u(i) {
                    return function (u) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.forget = function (t) {
            t.catch(function (t) {
                console.error(t)
            })
        }, e.filterAsync = function (t, e, o) {
            return n(this, void 0, void 0, function () {
                var n;
                return r(this, function (r) {
                    switch (r.label) {
                        case 0:
                            return [4, Promise.all(t.map(e, o))];
                        case 1:
                            return n = r.sent(), [2, t.filter(function (t, e) {
                                return n[e]
                            })]
                    }
                })
            })
        }
    });
    s($);
    $.forget, $.filterAsync;
    var q = l(function (t, e) {
        var n = c && c.__values || function (t) {
            var e = "function" == typeof Symbol && t[Symbol.iterator],
                n = 0;
            return e ? e.call(t) : {
                next: function () {
                    return t && n >= t.length && (t = void 0), {
                        value: t && t[n++],
                        done: !t
                    }
                }
            }
        };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.truncate = function (t, e) {
            return void 0 === e && (e = 0), 0 !== e && d.isString(t) ? t.length <= e ? t : t.substr(0, e) + "…" : t
        }, e.snipLine = function (t, e) {
            var n = t,
                r = n.length;
            if (r <= 150) return n;
            e > r && (e = r);
            var o = Math.max(e - 60, 0);
            o < 5 && (o = 0);
            var i = Math.min(o + 140, r);
            return i > r - 5 && (i = r), i === r && (o = Math.max(i - 140, 0)), n = n.slice(o, i), o > 0 && (n = "'{snip} " + n), i < r && (n += " {snip}"), n
        }, e.safeJoin = function (t, e) {
            var r, o;
            if (!Array.isArray(t)) return "";
            var i = [];
            try {
                for (var a = n(t), u = a.next(); !u.done; u = a.next()) {
                    var c = u.value;
                    try {
                        i.push(String(c))
                    } catch (t) {
                        i.push("[value cannot be serialized]")
                    }
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (o = a.return) && o.call(a)
                } finally {
                    if (r) throw r.error
                }
            }
            return i.join(e)
        }, e.includes = function (t, e) {
            return !(e.length > t.length) && -1 !== t.indexOf(e)
        }
    });
    s(q);
    q.truncate, q.snipLine;
    var V = q.safeJoin,
        z = q.includes,
        W = l(function (t, e) {
            var n = c && c.__assign || function () {
                    return (n = Object.assign || function (t) {
                        for (var e, n = 1, r = arguments.length; n < r; n++)
                            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                        return t
                    }).apply(this, arguments)
                },
                r = c && c.__awaiter || function (t, e, n, r) {
                    return new(n || (n = Promise))(function (o, i) {
                        function a(t) {
                            try {
                                c(r.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            try {
                                c(r.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function c(t) {
                            t.done ? o(t.value) : new n(function (e) {
                                e(t.value)
                            }).then(a, u)
                        }
                        c((r = r.apply(t, e || [])).next())
                    })
                },
                o = c && c.__generator || function (t, e) {
                    var n, r, o, i, a = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return i = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                        return this
                    }), i;

                    function u(i) {
                        return function (u) {
                            return function (i) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                a.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && a.label < o[1]) {
                                                a.label = o[1], o = i;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(i);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    i = e.call(t, a)
                                } catch (t) {
                                    i = [6, t], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    }
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function () {
                function t(t, e) {
                    this.backend = new t(e), this.options = e, e.dsn && (this.dsn = new H.Dsn(e.dsn))
                }
                return t.prototype.install = function () {
                    if (!this.isEnabled()) return this.installed = !1;
                    var t = this.getBackend();
                    return !this.installed && t.install && t.install(), this.installed = !0
                }, t.prototype.buffer = function (t) {
                    return r(this, void 0, void 0, function () {
                        return o(this, function (e) {
                            return [2, this.getBackend().getBuffer().add(t)]
                        })
                    })
                }, t.prototype.captureException = function (t, e, n) {
                    return r(this, void 0, void 0, function () {
                        var i = this;
                        return o(this, function (a) {
                            return [2, this.buffer(r(i, void 0, void 0, function () {
                                var r;
                                return o(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, this.getBackend().eventFromException(t, e)];
                                        case 1:
                                            return r = o.sent(), [2, this.captureEvent(r, e, n)]
                                    }
                                })
                            }))]
                        })
                    })
                }, t.prototype.captureMessage = function (t, e, n, i) {
                    return r(this, void 0, void 0, function () {
                        var a = this;
                        return o(this, function (u) {
                            return [2, this.buffer(r(a, void 0, void 0, function () {
                                var r;
                                return o(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return [4, this.getBackend().eventFromMessage(t, e, n)];
                                        case 1:
                                            return r = o.sent(), [2, this.captureEvent(r, n, i)]
                                    }
                                })
                            }))]
                        })
                    })
                }, t.prototype.captureEvent = function (t, e, n) {
                    return r(this, void 0, void 0, function () {
                        var i = this;
                        return o(this, function (a) {
                            return [2, this.buffer(r(i, void 0, void 0, function () {
                                var i = this;
                                return o(this, function (a) {
                                    return [2, this.processEvent(t, function (t) {
                                        return r(i, void 0, void 0, function () {
                                            return o(this, function (e) {
                                                return [2, this.getBackend().sendEvent(t)]
                                            })
                                        })
                                    }, e, n)]
                                })
                            }))]
                        })
                    })
                }, t.prototype.addBreadcrumb = function (t, e, i) {
                    return r(this, void 0, void 0, function () {
                        var a, u, c, s, l, f, p, h;
                        return o(this, function (d) {
                            switch (d.label) {
                                case 0:
                                    return a = this.getOptions(), u = a.beforeBreadcrumb, c = a.maxBreadcrumbs, (s = void 0 === c ? 30 : c) <= 0 ? [2] : (l = (new Date).getTime() / 1e3, f = n({
                                        timestamp: l
                                    }, t), u ? [4, function (t) {
                                        return r(this, void 0, void 0, function () {
                                            var e, n, r, i;
                                            return o(this, function (o) {
                                                switch (o.label) {
                                                    case 0:
                                                        return e = x.getGlobalObject(), n = ["debug", "info", "warn", "error", "log"], "console" in e ? (r = e.console, n.forEach(function (t) {
                                                            t in e.console && r[t].__sentry__ && (r[t] = r[t].__sentry_original__)
                                                        }), [4, t()]) : [2, t()];
                                                    case 1:
                                                        return i = o.sent(), n.forEach(function (t) {
                                                            t in e.console && r[t].__sentry__ && (r[t] = r[t].__sentry_wrapped__)
                                                        }), [2, i]
                                                }
                                            })
                                        })
                                    }(function () {
                                        return u(f, e)
                                    })] : [3, 2]);
                                case 1:
                                    return h = d.sent(), [3, 3];
                                case 2:
                                    h = f, d.label = 3;
                                case 3:
                                    return null === (p = h) ? [2] : [4, this.getBackend().storeBreadcrumb(p)];
                                case 4:
                                    return d.sent() && i && i.addBreadcrumb(p, Math.min(s, 100)), [2]
                            }
                        })
                    })
                }, t.prototype.getDsn = function () {
                    return this.dsn
                }, t.prototype.getOptions = function () {
                    return this.options
                }, t.prototype.getBackend = function () {
                    return this.backend
                }, t.prototype.isEnabled = function () {
                    return !1 !== this.getOptions().enabled && void 0 !== this.dsn
                }, t.prototype.prepareEvent = function (t, e, i) {
                    return r(this, void 0, void 0, function () {
                        var r, a, u, c, s, l, f, p, h;
                        return o(this, function (o) {
                            return r = this.getOptions(), a = r.environment, u = r.maxBreadcrumbs, c = void 0 === u ? 30 : u, s = r.release, l = r.dist, void 0 === (f = n({}, t)).environment && void 0 !== a && (f.environment = a), void 0 === f.release && void 0 !== s && (f.release = s), void 0 === f.dist && void 0 !== l && (f.dist = l), f.message && (f.message = q.truncate(f.message, 250)), (p = f.exception && f.exception.values && f.exception.values[0]) && p.value && (p.value = q.truncate(p.value, 250)), (h = f.request) && h.url && (h.url = q.truncate(h.url, 250)), void 0 === f.event_id && (f.event_id = x.uuid4()), e ? [2, e.applyToEvent(f, i, Math.min(c, 100))] : [2, f]
                        })
                    })
                }, t.prototype.processEvent = function (t, e, n, i) {
                    return r(this, void 0, void 0, function () {
                        var r, a, u, c, s, l, p;
                        return o(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return this.isEnabled() ? (r = this.getOptions(), a = r.beforeSend, "number" == typeof (u = r.sampleRate) && Math.random() > u ? [2, {
                                        status: f.Status.Skipped
                                    }] : [4, this.prepareEvent(t, i, n)]) : [2, {
                                        status: f.Status.Skipped
                                    }];
                                case 1:
                                    if (null === (c = o.sent())) return [2, {
                                        status: f.Status.Skipped
                                    }];
                                    s = c, o.label = 2;
                                case 2:
                                    return o.trys.push([2, 5, , 6]), n && n.data && !0 === n.data.__sentry__ || !a ? [3, 4] : [4, a(c, n)];
                                case 3:
                                    void 0 === (s = o.sent()) && T.logger.error("`beforeSend` method has to return `null` or a valid event"), o.label = 4;
                                case 4:
                                    return [3, 6];
                                case 5:
                                    return l = o.sent(), $.forget(this.captureException(l, {
                                        data: {
                                            __sentry__: !0
                                        },
                                        originalException: l
                                    })), [2, {
                                        reason: "Event processing in beforeSend method threw an exception",
                                        status: f.Status.Invalid
                                    }];
                                case 6:
                                    return null === s ? [2, {
                                        reason: "Event dropped due to being discarded by beforeSend method",
                                        status: f.Status.Skipped
                                    }] : [4, e(s)];
                                case 7:
                                    return (p = o.sent()).event = s, p.status, f.Status.RateLimit, [2, p]
                            }
                        })
                    })
                }, t.prototype.close = function (t) {
                    return r(this, void 0, void 0, function () {
                        return o(this, function (e) {
                            return [2, this.getBackend().getBuffer().drain(t)]
                        })
                    })
                }, t
            }();
            e.BaseClient = i
        });
    s(W);
    W.BaseClient;
    var X = l(function (t, e) {
        var n = c && c.__awaiter || function (t, e, n, r) {
                return new(n || (n = Promise))(function (o, i) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        t.done ? o(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            r = c && c.__generator || function (t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function u(i) {
                    return function (u) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t() {
                this.buffer = []
            }
            return t.prototype.add = function (t) {
                return n(this, void 0, void 0, function () {
                    var e = this;
                    return r(this, function (o) {
                        return -1 === this.buffer.indexOf(t) && this.buffer.push(t), t.then(function () {
                            return n(e, void 0, void 0, function () {
                                return r(this, function (e) {
                                    return [2, this.remove(t)]
                                })
                            })
                        }).catch(function () {
                            return n(e, void 0, void 0, function () {
                                return r(this, function (e) {
                                    return [2, this.remove(t)]
                                })
                            })
                        }), [2, t]
                    })
                })
            }, t.prototype.remove = function (t) {
                return n(this, void 0, void 0, function () {
                    return r(this, function (e) {
                        return [2, this.buffer.splice(this.buffer.indexOf(t), 1)[0]]
                    })
                })
            }, t.prototype.length = function () {
                return this.buffer.length
            }, t.prototype.drain = function (t) {
                return n(this, void 0, void 0, function () {
                    var e = this;
                    return r(this, function (n) {
                        return [2, new Promise(function (n) {
                            var r = setTimeout(function () {
                                t && t > 0 && n(!1)
                            }, t);
                            Promise.all(e.buffer).then(function () {
                                clearTimeout(r), n(!0)
                            }).catch(function () {
                                n(!0)
                            })
                        })]
                    })
                })
            }, t
        }();
        e.RequestBuffer = o
    });
    s(X);
    X.RequestBuffer;
    var K = l(function (t, e) {
        var n = c && c.__awaiter || function (t, e, n, r) {
                return new(n || (n = Promise))(function (o, i) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        t.done ? o(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            r = c && c.__generator || function (t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function u(i) {
                    return function (u) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t(t) {
                this.buffer = new X.RequestBuffer, this.options = t, this.options.dsn || T.logger.warn("No DSN provided, backend will not do anything.")
            }
            return t.prototype.eventFromException = function (t, e) {
                return n(this, void 0, void 0, function () {
                    return r(this, function (t) {
                        throw new N.SentryError("Backend has to implement `eventFromException` method")
                    })
                })
            }, t.prototype.eventFromMessage = function (t, e, o) {
                return n(this, void 0, void 0, function () {
                    return r(this, function (t) {
                        throw new N.SentryError("Backend has to implement `eventFromMessage` method")
                    })
                })
            }, t.prototype.sendEvent = function (t) {
                return n(this, void 0, void 0, function () {
                    return r(this, function (t) {
                        throw new N.SentryError("Backend has to implement `sendEvent` method")
                    })
                })
            }, t.prototype.storeBreadcrumb = function (t) {
                return !0
            }, t.prototype.storeScope = function (t) {}, t.prototype.getBuffer = function () {
                return this.buffer
            }, t
        }();
        e.BaseBackend = o
    });
    s(K);
    K.BaseBackend;
    var Y = l(function (t, e) {
        Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            function (t) {
                t[t.None = 0] = "None", t[t.Error = 1] = "Error", t[t.Debug = 2] = "Debug", t[t.Verbose = 3] = "Verbose"
            }(e.LogLevel || (e.LogLevel = {}))
    });
    s(Y);
    Y.LogLevel;
    var J = l(function (t, e) {
        var n = c && c.__read || function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            r = c && c.__spread || function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.initAndBind = function (t, e, n) {
            if (void 0 === n && (n = []), e.debug && T.logger.enable(), !L.getCurrentHub().getClient()) {
                var o = new t(e);
                o.install(), L.getCurrentHub().bindClient(o);
                var i = !1 === e.defaultIntegrations ? [] : r(n);
                if (Array.isArray(e.integrations)) {
                    var a = e.integrations.map(function (t) {
                        return t.name
                    });
                    i = r(i.filter(function (t) {
                        return -1 === a.indexOf(t.name)
                    }), e.integrations)
                } else "function" == typeof e.integrations && (i = e.integrations(i));
                Array.isArray(i) && i.forEach(function (t) {
                    t.install(e), T.logger.log("Integration installed: " + t.name)
                })
            }
        }
    });
    s(J);
    J.initAndBind;
    var Z = l(function (t, e) {
        var n = c && c.__awaiter || function (t, e, n, r) {
                return new(n || (n = Promise))(function (o, i) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        t.done ? o(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            r = c && c.__generator || function (t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function u(i) {
                    return function (u) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t() {
                this.name = "Dedupe"
            }
            return t.prototype.install = function () {
                var t = this;
                U.configureScope(function (e) {
                    e.addEventProcessor(function (e) {
                        return n(t, void 0, void 0, function () {
                            return r(this, function (t) {
                                try {
                                    if (this.shouldDropEvent(e, this.previousEvent)) return [2, null]
                                } catch (t) {
                                    return [2, this.previousEvent = e]
                                }
                                return [2, this.previousEvent = e]
                            })
                        })
                    })
                })
            }, t.prototype.shouldDropEvent = function (t, e) {
                return !!e && (this.isSameMessageEvent(t, e) ? (T.logger.warn("Event dropped due to being a duplicate of previous event (same message).\nEvent: " + x.getEventDescription(t)), !0) : !!this.isSameExceptionEvent(t, e) && (T.logger.warn("Event dropped due to being a duplicate of previous event (same exception).\nEvent: " + x.getEventDescription(t)), !0))
            }, t.prototype.isSameMessageEvent = function (t, e) {
                var n = t.message,
                    r = e.message;
                return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this.isSameFingerprint(t, e) && !!this.isSameStacktrace(t, e))))
            }, t.prototype.getFramesFromEvent = function (t) {
                var e = t.exception;
                if (!e) return t.stacktrace ? t.stacktrace.frames : void 0;
                try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                }
            }, t.prototype.isSameStacktrace = function (t, e) {
                var n = this.getFramesFromEvent(t),
                    r = this.getFramesFromEvent(e);
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                if (n = n, (r = r).length !== n.length) return !1;
                for (var o = 0; o < r.length; o++) {
                    var i = r[o],
                        a = n[o];
                    if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function) return !1
                }
                return !0
            }, t.prototype.getExceptionFromEvent = function (t) {
                return t.exception && t.exception.values && t.exception.values[0]
            }, t.prototype.isSameExceptionEvent = function (t, e) {
                var n = this.getExceptionFromEvent(e),
                    r = this.getExceptionFromEvent(t);
                return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this.isSameFingerprint(t, e) && !!this.isSameStacktrace(t, e)))
            }, t.prototype.isSameFingerprint = function (t, e) {
                var n = t.fingerprint,
                    r = e.fingerprint;
                if (!n && !r) return !0;
                if (n && !r || !n && r) return !1;
                n = n, r = r;
                try {
                    return !(n.join("") !== r.join(""))
                } catch (t) {
                    return !1
                }
            }, t
        }();
        e.Dedupe = o
    });
    s(Z);
    Z.Dedupe;
    var Q = l(function (t, e) {
        var n;
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = function () {
            function t() {
                this.name = "FunctionToString"
            }
            return t.prototype.install = function () {
                n = Function.prototype.toString, Function.prototype.toString = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var r = this.__sentry__ ? this.__sentry_original__ : this;
                    return n.apply(r, t)
                }
            }, t
        }();
        e.FunctionToString = r
    });
    s(Q);
    Q.FunctionToString;
    var tt = l(function (t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function () {
            function t() {
                this.name = "SDKInformation"
            }
            return t.prototype.install = function () {
                T.logger.warn("SDKInformation Integration is deprecated and can be safely removed. It's functionality has been merged into the SDK's core.")
            }, t
        }();
        e.SDKInformation = n
    });
    s(tt);
    tt.SDKInformation;
    var et = l(function (t, e) {
        var n = c && c.__awaiter || function (t, e, n, r) {
                return new(n || (n = Promise))(function (o, i) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        t.done ? o(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            r = c && c.__generator || function (t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function u(i) {
                    return function (u) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            },
            o = c && c.__read || function (t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            },
            i = c && c.__spread || function () {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(o(arguments[e]));
                return t
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            u = function () {
                function t() {
                    this.ignoreErrors = a, this.name = "InboundFilters"
                }
                return t.prototype.install = function (t) {
                    var e = this;
                    void 0 === t && (t = {}), this.configureOptions(t), U.configureScope(function (t) {
                        t.addEventProcessor(function (t) {
                            return n(e, void 0, void 0, function () {
                                return r(this, function (e) {
                                    return this.shouldDropEvent(t) ? [2, null] : [2, t]
                                })
                            })
                        })
                    })
                }, t.prototype.shouldDropEvent = function (t) {
                    return this.isIgnoredError(t) ? (T.logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + x.getEventDescription(t)), !0) : this.isBlacklistedUrl(t) ? (T.logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + x.getEventDescription(t) + ".\nUrl: " + this.getEventFilterUrl(t)), !0) : !this.isWhitelistedUrl(t) && (T.logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + x.getEventDescription(t) + ".\nUrl: " + this.getEventFilterUrl(t)), !0)
                }, t.prototype.isIgnoredError = function (t) {
                    var e = this;
                    return !!this.ignoreErrors && this.getPossibleEventMessages(t).some(function (t) {
                        return e.ignoreErrors.some(function (n) {
                            return e.isMatchingPattern(t, n)
                        })
                    })
                }, t.prototype.isBlacklistedUrl = function (t) {
                    var e = this;
                    if (!this.blacklistUrls) return !1;
                    var n = this.getEventFilterUrl(t);
                    return !!n && this.blacklistUrls.some(function (t) {
                        return e.isMatchingPattern(n, t)
                    })
                }, t.prototype.isWhitelistedUrl = function (t) {
                    var e = this;
                    if (!this.whitelistUrls) return !0;
                    var n = this.getEventFilterUrl(t);
                    return !n || this.whitelistUrls.some(function (t) {
                        return e.isMatchingPattern(n, t)
                    })
                }, t.prototype.isMatchingPattern = function (t, e) {
                    return d.isRegExp(e) ? e.test(t) : "string" == typeof e && q.includes(t, e)
                }, t.prototype.configureOptions = function (t) {
                    t.ignoreErrors && (this.ignoreErrors = i(a, t.ignoreErrors)), t.blacklistUrls && (this.blacklistUrls = i(t.blacklistUrls)), t.whitelistUrls && (this.whitelistUrls = i(t.whitelistUrls))
                }, t.prototype.getPossibleEventMessages = function (t) {
                    if (t.message) return [t.message];
                    if (!t.exception) return [];
                    try {
                        var e = t.exception.values[0],
                            n = e.type,
                            r = e.value;
                        return ["" + r, n + ": " + r]
                    } catch (e) {
                        return T.logger.error("Cannot extract message for event " + x.getEventDescription(t)), []
                    }
                }, t.prototype.getEventFilterUrl = function (t) {
                    try {
                        return t.stacktrace ? t.stacktrace.frames[0].filename : t.exception ? t.exception.values[0].stacktrace.frames[0].filename : null
                    } catch (e) {
                        return T.logger.error("Cannot extract url for event " + x.getEventDescription(t)), null
                    }
                }, t
            }();
        e.InboundFilters = u
    });
    s(et);
    et.InboundFilters;
    var nt = l(function (t, e) {
        var n = c && c.__assign || function () {
                return (n = Object.assign || function (t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            },
            r = c && c.__awaiter || function (t, e, n, r) {
                return new(n || (n = Promise))(function (o, i) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        t.done ? o(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            o = c && c.__generator || function (t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function u(i) {
                    return function (u) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function () {
            function t(t) {
                this.name = "Debug", this.options = n({
                    debugger: !1,
                    stringify: !1
                }, t)
            }
            return t.prototype.install = function () {
                var t = this;
                U.configureScope(function (e) {
                    e.addEventProcessor(function (e, n) {
                        return r(t, void 0, void 0, function () {
                            return o(this, function (t) {
                                return this.options.debugger, this.options.stringify ? (console.log(JSON.stringify(e, null, 2)), n && console.log(JSON.stringify(n, null, 2))) : (console.log(e), n && console.log(n)), [2, e]
                            })
                        })
                    })
                })
            }, t
        }();
        e.Debug = i
    });
    s(nt);
    nt.Debug;
    var rt = l(function (t, e) {
        function n(t, e) {
            for (var n = 0, r = t.length - 1; r >= 0; r--) {
                var o = t[r];
                "." === o ? t.splice(r, 1) : ".." === o ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
            }
            if (e)
                for (; n--; n) t.unshift("..");
            return t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

        function o(t) {
            var e = r.exec(t);
            return e ? e.slice(1) : []
        }

        function i() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            for (var r = "", o = !1, i = t.length - 1; i >= -1 && !o; i--) {
                var a = i >= 0 ? t[i] : "/";
                a && (r = a + "/" + r, o = "/" === a.charAt(0))
            }
            return r = n(r.split("/").filter(function (t) {
                return !!t
            }), !o).join("/"), (o ? "/" : "") + r || "."
        }

        function a(t) {
            for (var e = 0; e < t.length && "" === t[e]; e++);
            for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
            return e > n ? [] : t.slice(e, n - e + 1)
        }

        function u(t) {
            var e = c(t),
                r = "/" === t.substr(-1),
                o = n(t.split("/").filter(function (t) {
                    return !!t
                }), !e).join("/");
            return o || e || (o = "."), o && r && (o += "/"), (e ? "/" : "") + o
        }

        function c(t) {
            return "/" === t.charAt(0)
        }
        e.resolve = i, e.relative = function (t, e) {
            t = i(t).substr(1), e = i(e).substr(1);
            for (var n = a(t.split("/")), r = a(e.split("/")), o = Math.min(n.length, r.length), u = o, c = 0; c < o; c++)
                if (n[c] !== r[c]) {
                    u = c;
                    break
                } var s = [];
            for (c = u; c < n.length; c++) s.push("..");
            return (s = s.concat(r.slice(u))).join("/")
        }, e.normalize = u, e.isAbsolute = c, e.join = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return u(t.join("/"))
        }, e.dirname = function (t) {
            var e = o(t),
                n = e[0],
                r = e[1];
            return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
        }, e.basename = function (t, e) {
            var n = o(t)[2];
            return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
        }
    });
    s(rt);
    rt.resolve, rt.relative, rt.normalize, rt.isAbsolute, rt.join, rt.dirname, rt.basename;
    var ot = l(function (t, e) {
        var n = c && c.__awaiter || function (t, e, n, r) {
                return new(n || (n = Promise))(function (o, i) {
                    function a(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        t.done ? o(t.value) : new n(function (e) {
                            e(t.value)
                        }).then(a, u)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            r = c && c.__generator || function (t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function u(i) {
                    return function (u) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = function () {
            function t(t) {
                void 0 === t && (t = {});
                var e = this;
                this.name = "RewriteFrames", this.iteratee = function (t) {
                    return n(e, void 0, void 0, function () {
                        var e;
                        return r(this, function (n) {
                            return t.filename && t.filename.startsWith("/") && (e = this.root ? rt.relative(this.root, t.filename) : rt.basename(t.filename), t.filename = "app:///" + e), [2, t]
                        })
                    })
                }, t.root && (this.root = t.root), t.iteratee && (this.iteratee = t.iteratee)
            }
            return t.prototype.install = function () {
                var t = this;
                L.getCurrentHub().configureScope(function (e) {
                    e.addEventProcessor(function (e) {
                        return n(t, void 0, void 0, function () {
                            return r(this, function (t) {
                                return [2, this.process(e)]
                            })
                        })
                    })
                })
            }, t.prototype.process = function (t) {
                return n(this, void 0, void 0, function () {
                    var e, n, o, i, a, u, c;
                    return r(this, function (r) {
                        switch (r.label) {
                            case 0:
                                if (!(e = this.getFramesFromEvent(t))) return [3, 4];
                                for (o in n = [], e) n.push(o);
                                i = 0, r.label = 1;
                            case 1:
                                return i < n.length ? (a = n[i], u = e, c = a, [4, this.iteratee(e[a])]) : [3, 4];
                            case 2:
                                u[c] = r.sent(), r.label = 3;
                            case 3:
                                return i++, [3, 1];
                            case 4:
                                return [2, t]
                        }
                    })
                })
            }, t.prototype.getFramesFromEvent = function (t) {
                var e = t.exception;
                if (!e) return t.stacktrace ? t.stacktrace.frames : void 0;
                try {
                    return e.values[0].stacktrace.frames
                } catch (t) {
                    return
                }
            }, t
        }();
        e.RewriteFrames = o
    });
    s(ot);
    ot.RewriteFrames;
    var it = l(function (t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Dedupe = Z.Dedupe, e.FunctionToString = Q.FunctionToString, e.SDKInformation = tt.SDKInformation, e.InboundFilters = et.InboundFilters, e.Debug = nt.Debug, e.RewriteFrames = ot.RewriteFrames
    });
    s(it);
    it.Dedupe, it.FunctionToString, it.SDKInformation, it.InboundFilters, it.Debug, it.RewriteFrames;
    var at = l(function (t, e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.logger = T.logger, e.addBreadcrumb = U.addBreadcrumb, e.captureException = U.captureException, e.captureEvent = U.captureEvent, e.captureMessage = U.captureMessage, e.configureScope = U.configureScope, e.withScope = U.withScope, e.getCurrentHub = L.getCurrentHub, e.Hub = L.Hub, e.getHubFromCarrier = L.getHubFromCarrier, e.Scope = L.Scope, e.API = G.API, e.BaseClient = W.BaseClient, e.BaseBackend = K.BaseBackend, e.Dsn = H.Dsn, e.SentryError = N.SentryError, e.RequestBuffer = X.RequestBuffer, e.LogLevel = Y.LogLevel, e.initAndBind = J.initAndBind, e.Integrations = it
    });
    s(at);
    var ut = at.logger,
        ct = at.addBreadcrumb,
        st = at.captureException,
        lt = at.captureEvent,
        ft = at.captureMessage,
        pt = at.configureScope,
        ht = at.withScope,
        dt = at.getCurrentHub,
        vt = at.Hub,
        yt = at.getHubFromCarrier,
        gt = at.Scope,
        bt = at.API,
        mt = at.BaseClient,
        _t = at.BaseBackend,
        wt = (at.Dsn, at.SentryError),
        Et = (at.RequestBuffer, at.LogLevel, at.initAndBind),
        xt = at.Integrations,
        St = l(function (t, e) {
            function n() {
                if (!("fetch" in x.getGlobalObject())) return !1;
                try {
                    return new Headers, new Request(""), new Response, !0
                } catch (t) {
                    return !1
                }
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.supportsErrorEvent = function () {
                try {
                    return new ErrorEvent(""), !0
                } catch (t) {
                    return !1
                }
            }, e.supportsDOMError = function () {
                try {
                    return new DOMError(""), !0
                } catch (t) {
                    return !1
                }
            }, e.supportsDOMException = function () {
                try {
                    return new DOMException(""), !0
                } catch (t) {
                    return !1
                }
            }, e.supportsFetch = n, e.supportsNativeFetch = function () {
                return !!n() && -1 !== x.getGlobalObject().fetch.toString().indexOf("native")
            }, e.supportsBeacon = function () {
                var t = x.getGlobalObject();
                return "navigator" in t && "sendBeacon" in t.navigator
            }, e.supportsReportingObserver = function () {
                return "ReportingObserver" in x.getGlobalObject()
            }, e.supportsReferrerPolicy = function () {
                if (!n()) return !1;
                try {
                    return new Request("pickleRick", {
                        referrerPolicy: "origin"
                    }), !0
                } catch (t) {
                    return !1
                }
            }, e.supportsHistory = function () {
                var t = x.getGlobalObject(),
                    e = t.chrome,
                    n = e && e.app && e.app.runtime,
                    r = "history" in t && !!t.history.pushState && !!t.history.replaceState;
                return !n && r
            }
        });
    s(St);
    St.supportsErrorEvent, St.supportsDOMError, St.supportsDOMException;
    var kt = St.supportsFetch,
        Ot = St.supportsNativeFetch,
        jt = St.supportsBeacon,
        Tt = St.supportsReportingObserver,
        Pt = St.supportsReferrerPolicy,
        Mt = St.supportsHistory;

    function Ft(t, e) {
        var n = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
    }

    function It(t, e, n, r, o, i) {
        return Ft((a = Ft(Ft(e, t), Ft(r, i))) << (u = o) | a >>> 32 - u, n);
        var a, u
    }

    function Rt(t, e, n, r, o, i, a) {
        return It(e & n | ~e & r, t, e, o, i, a)
    }

    function Ct(t, e, n, r, o, i, a) {
        return It(e & r | n & ~r, t, e, o, i, a)
    }

    function Dt(t, e, n, r, o, i, a) {
        return It(e ^ n ^ r, t, e, o, i, a)
    }

    function Bt(t, e, n, r, o, i, a) {
        return It(n ^ (e | ~r), t, e, o, i, a)
    }

    function At(t, e) {
        var n, r, o, i, a;
        t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
        var u = 1732584193,
            c = -271733879,
            s = -1732584194,
            l = 271733878;
        for (n = 0; n < t.length; n += 16) r = u, o = c, i = s, a = l, c = Bt(c = Bt(c = Bt(c = Bt(c = Dt(c = Dt(c = Dt(c = Dt(c = Ct(c = Ct(c = Ct(c = Ct(c = Rt(c = Rt(c = Rt(c = Rt(c, s = Rt(s, l = Rt(l, u = Rt(u, c, s, l, t[n], 7, -680876936), c, s, t[n + 1], 12, -389564586), u, c, t[n + 2], 17, 606105819), l, u, t[n + 3], 22, -1044525330), s = Rt(s, l = Rt(l, u = Rt(u, c, s, l, t[n + 4], 7, -176418897), c, s, t[n + 5], 12, 1200080426), u, c, t[n + 6], 17, -1473231341), l, u, t[n + 7], 22, -45705983), s = Rt(s, l = Rt(l, u = Rt(u, c, s, l, t[n + 8], 7, 1770035416), c, s, t[n + 9], 12, -1958414417), u, c, t[n + 10], 17, -42063), l, u, t[n + 11], 22, -1990404162), s = Rt(s, l = Rt(l, u = Rt(u, c, s, l, t[n + 12], 7, 1804603682), c, s, t[n + 13], 12, -40341101), u, c, t[n + 14], 17, -1502002290), l, u, t[n + 15], 22, 1236535329), s = Ct(s, l = Ct(l, u = Ct(u, c, s, l, t[n + 1], 5, -165796510), c, s, t[n + 6], 9, -1069501632), u, c, t[n + 11], 14, 643717713), l, u, t[n], 20, -373897302), s = Ct(s, l = Ct(l, u = Ct(u, c, s, l, t[n + 5], 5, -701558691), c, s, t[n + 10], 9, 38016083), u, c, t[n + 15], 14, -660478335), l, u, t[n + 4], 20, -405537848), s = Ct(s, l = Ct(l, u = Ct(u, c, s, l, t[n + 9], 5, 568446438), c, s, t[n + 14], 9, -1019803690), u, c, t[n + 3], 14, -187363961), l, u, t[n + 8], 20, 1163531501), s = Ct(s, l = Ct(l, u = Ct(u, c, s, l, t[n + 13], 5, -1444681467), c, s, t[n + 2], 9, -51403784), u, c, t[n + 7], 14, 1735328473), l, u, t[n + 12], 20, -1926607734), s = Dt(s, l = Dt(l, u = Dt(u, c, s, l, t[n + 5], 4, -378558), c, s, t[n + 8], 11, -2022574463), u, c, t[n + 11], 16, 1839030562), l, u, t[n + 14], 23, -35309556), s = Dt(s, l = Dt(l, u = Dt(u, c, s, l, t[n + 1], 4, -1530992060), c, s, t[n + 4], 11, 1272893353), u, c, t[n + 7], 16, -155497632), l, u, t[n + 10], 23, -1094730640), s = Dt(s, l = Dt(l, u = Dt(u, c, s, l, t[n + 13], 4, 681279174), c, s, t[n], 11, -358537222), u, c, t[n + 3], 16, -722521979), l, u, t[n + 6], 23, 76029189), s = Dt(s, l = Dt(l, u = Dt(u, c, s, l, t[n + 9], 4, -640364487), c, s, t[n + 12], 11, -421815835), u, c, t[n + 15], 16, 530742520), l, u, t[n + 2], 23, -995338651), s = Bt(s, l = Bt(l, u = Bt(u, c, s, l, t[n], 6, -198630844), c, s, t[n + 7], 10, 1126891415), u, c, t[n + 14], 15, -1416354905), l, u, t[n + 5], 21, -57434055), s = Bt(s, l = Bt(l, u = Bt(u, c, s, l, t[n + 12], 6, 1700485571), c, s, t[n + 3], 10, -1894986606), u, c, t[n + 10], 15, -1051523), l, u, t[n + 1], 21, -2054922799), s = Bt(s, l = Bt(l, u = Bt(u, c, s, l, t[n + 8], 6, 1873313359), c, s, t[n + 15], 10, -30611744), u, c, t[n + 6], 15, -1560198380), l, u, t[n + 13], 21, 1309151649), s = Bt(s, l = Bt(l, u = Bt(u, c, s, l, t[n + 4], 6, -145523070), c, s, t[n + 11], 10, -1120210379), u, c, t[n + 2], 15, 718787259), l, u, t[n + 9], 21, -343485551), u = Ft(u, r), c = Ft(c, o), s = Ft(s, i), l = Ft(l, a);
        return [u, c, s, l]
    }

    function Lt(t) {
        var e, n = "",
            r = 32 * t.length;
        for (e = 0; e < r; e += 8) n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
        return n
    }

    function Ut(t) {
        var e, n = [];
        for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) n[e] = 0;
        var r = 8 * t.length;
        for (e = 0; e < r; e += 8) n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        return n
    }

    function Nt(t) {
        var e, n, r = "";
        for (n = 0; n < t.length; n += 1) e = t.charCodeAt(n), r += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
        return r
    }

    function Ht(t) {
        return unescape(encodeURIComponent(t))
    }

    function Gt(t) {
        return function (t) {
            return Lt(At(Ut(t), 8 * t.length))
        }(Ht(t))
    }

    function $t(t, e) {
        return function (t, e) {
            var n, r, o = Ut(t),
                i = [],
                a = [];
            for (i[15] = a[15] = void 0, o.length > 16 && (o = At(o, 8 * t.length)), n = 0; n < 16; n += 1) i[n] = 909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
            return r = At(i.concat(Ut(e)), 512 + 8 * e.length), Lt(At(a.concat(r), 640))
        }(Ht(t), Ht(e))
    }

    function qt(t, e, n) {
        return e ? n ? $t(e, t) : Nt($t(e, t)) : n ? Gt(t) : Nt(Gt(t))
    }
    var Vt = S(),
        zt = {
            wrap: function () {
                return function () {}
            },
            report: !1,
            collectWindowErrors: !1,
            computeStackTrace: !1,
            remoteFetching: !1,
            linesOfContext: !1,
            extendToAsynchronousCallbacks: !1
        },
        Wt = [].slice,
        Xt = "?",
        Kt = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;

    function Yt(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function Jt() {
        return "undefined" == typeof SecureDocument || null == SecureDocument.location ? "" : SecureDocument.location.href
    }
    zt.wrap = function (t) {
        return function () {
            try {
                return t.apply(this, arguments)
            } catch (t) {
                throw zt.report(t), t
            }
        }
    }, zt.report = function () {
        var t, e, n, o, i = [],
            a = null,
            u = null;

        function c(t, e, n) {
            var r = null;
            if (!e || zt.collectWindowErrors) {
                for (var o in i)
                    if (Yt(i, o)) try {
                        i[o](t, e, n)
                    } catch (t) {
                        r = t
                    }
                if (r) throw r
            }
        }

        function s(e, n, o, i, a) {
            var s = null;
            if (a = y(a) ? a.error : a, e = y(e) ? e.message : e, u) zt.computeStackTrace.augmentStackTraceWithInitialElement(u, n, o, e), f();
            else if (a && v(a))(s = zt.computeStackTrace(a)).mechanism = "onerror", c(s, !0, a);
            else {
                var l, p = {
                        url: n,
                        line: o,
                        column: i
                    },
                    h = e;
                if ("[object String]" === {}.toString.call(e)) {
                    var d = e.match(Kt);
                    d && (l = d[1], h = d[2])
                }
                p.func = zt.computeStackTrace.guessFunctionName(p.url, p.line), p.context = zt.computeStackTrace.gatherContext(p.url, p.line), c(s = {
                    name: l,
                    message: h,
                    mode: "onerror",
                    mechanism: "onerror",
                    stack: [r({}, p, {
                        url: p.url || Jt()
                    })]
                }, !0, null)
            }
            return !!t && t.apply(this, arguments)
        }

        function l(t) {
            var e = t && (t.detail ? t.detail.reason : t.reason) || t,
                n = zt.computeStackTrace(e);
            n.mechanism = "onunhandledrejection", c(n, !0, e)
        }

        function f() {
            var t = u,
                e = a;
            u = null, a = null, c(t, !1, e)
        }

        function p(t) {
            if (u) {
                if (a === t) return;
                f()
            }
            var e = zt.computeStackTrace(t);
            throw u = e, a = t, setTimeout(function () {
                a === t && f()
            }, e.incomplete ? 2e3 : 0), t
        }
        return p.subscribe = function (t) {
            i.push(t)
        }, p.unsubscribe = function (r) {
            for (var a = i.length - 1; a >= 0; --a) i[a] === r && i.splice(a, 1);
            0 === i.length && (e && (Vt.onerror = t, e = !1), o && (Vt.onerror = n, o = !1))
        }, p.installGlobalHandler = function () {
            !0 !== e && (t = Vt.onerror, Vt.onerror = s, e = !0)
        }, p.installGlobalUnhandledRejectionHandler = function () {
            !0 !== o && (n = Vt.onunhandledrejection, Vt.onunhandledrejection = l, o = !0)
        }, p
    }(), zt.computeStackTrace = function () {
        var t = !1,
            e = {};

        function n(t) {
            if ("string" != typeof t) return [];
            if (!Yt(e, t)) {
                var n = "",
                    r = "";
                try {
                    r = Vt.SecureDocument.domain
                } catch (t) {}
                var o = /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(t);
                o && o[2] === r && (n = function (t) {
                    if (!zt.remoteFetching) return "";
                    try {
                        var e = function () {
                            try {
                                return new Vt.XMLHttpRequest
                            } catch (t) {
                                return new Vt.ActiveXObject("Microsoft.XMLHTTP")
                            }
                        }();
                        return e.open("GET", t, !1), e.send(""), e.responseText
                    } catch (t) {
                        return ""
                    }
                }(t)), e[t] = n ? n.split("\n") : []
            }
            return e[t]
        }

        function r(t, e) {
            var r, o = /function ([^(]*)\(([^)]*)\)/,
                i = /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,
                a = "",
                u = n(t);
            if (!u.length) return Xt;
            for (var c = 0; c < 10; ++c)
                if (a = u[e - c] + a, !m(a)) {
                    if (r = i.exec(a)) return r[1];
                    if (r = o.exec(a)) return r[1]
                } return Xt
        }

        function o(t, e) {
            var r = n(t);
            if (!r.length) return null;
            var o = [],
                i = Math.floor(zt.linesOfContext / 2),
                a = i + zt.linesOfContext % 2,
                u = Math.max(0, e - i - 1),
                c = Math.min(r.length, e + a - 1);
            e -= 1;
            for (var s = u; s < c; ++s) m(r[s]) || o.push(r[s]);
            return o.length > 0 ? o : null
        }

        function i(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&")
        }

        function a(t) {
            return i(t).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+")
        }

        function u(t, e) {
            for (var r, o, i = 0, a = e.length; i < a; ++i)
                if ((r = n(e[i])).length && (r = r.join("\n"), o = t.exec(r))) return {
                    url: e[i],
                    line: r.substring(0, o.index).split("\n").length,
                    column: o.index - r.lastIndexOf("\n", o.index) - 1
                };
            return null
        }

        function c(t, e, r) {
            var o, a = n(e),
                u = new RegExp("\\b" + i(t) + "\\b");
            return r -= 1, a && a.length > r && (o = u.exec(a[r])) ? o.index : null
        }

        function s(t) {
            if (!m(Vt && Vt.SecureDocument)) {
                for (var e, n, r, o, c = [Jt()], s = Vt.SecureDocument.getElementsByTagName("script"), l = "" + t, f = 0; f < s.length; ++f) {
                    var p = s[f];
                    p.src && c.push(p.src)
                }
                if (r = /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)) {
                    var h = r[1] ? "\\s+" + r[1] : "",
                        d = r[2].split(",").join("\\s*,\\s*");
                    e = i(r[3]).replace(/;$/, ";?"), n = new RegExp("function" + h + "\\s*\\(\\s*" + d + "\\s*\\)\\s*{\\s*" + e + "\\s*}")
                } else n = new RegExp(i(l).replace(/\s+/g, "\\s+"));
                if (o = u(n, c)) return o;
                if (r = /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l)) {
                    var v = r[1];
                    if (e = a(r[2]), o = u(n = new RegExp("on" + v + "=[\\'\"]\\s*" + e + "\\s*[\\'\"]", "i"), c[0])) return o;
                    if (o = u(n = new RegExp(e), c)) return o
                }
                return null
            }
        }

        function l(t) {
            if (!t.stack) return null;
            for (var e, n, i, a = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, f = /\((\S*)(?::(\d+))(?::(\d+))\)/, p = t.stack.split("\n"), h = [], d = /^(.*) is undefined$/.exec(t.message), v = 0, y = p.length; v < y; ++v) {
                if (n = a.exec(p[v])) {
                    var g = n[2] && 0 === n[2].indexOf("native");
                    n[2] && 0 === n[2].indexOf("eval") && (e = f.exec(n[2])) && (n[2] = e[1]), i = {
                        url: g ? null : n[2],
                        func: n[1] || Xt,
                        args: g ? [n[2]] : [],
                        line: n[3] ? +n[3] : null,
                        column: n[4] ? +n[4] : null
                    }
                } else if (n = s.exec(p[v])) i = {
                    url: n[2],
                    func: n[1] || Xt,
                    args: [],
                    line: +n[3],
                    column: n[4] ? +n[4] : null
                };
                else {
                    if (!(n = u.exec(p[v]))) continue;
                    n[3] && n[3].indexOf(" > eval") > -1 && (e = l.exec(n[3])) ? n[3] = e[1] : 0 !== v || n[5] || m(t.columnNumber) || (h[0].column = t.columnNumber + 1), i = {
                        url: n[3],
                        func: n[1] || Xt,
                        args: n[2] ? n[2].split(",") : [],
                        line: n[4] ? +n[4] : null,
                        column: n[5] ? +n[5] : null
                    }
                }
                if (!i.func && i.line && (i.func = r(i.url, i.line)), zt.remoteFetching && i.url && "blob:" === i.url.substr(0, 5)) {
                    var b = new XMLHttpRequest;
                    if (b.open("GET", i.url, !1), b.send(""), 200 === b.status) {
                        var _ = b.responseText || "",
                            w = (_ = _.slice(-300)).match(/\/\/# sourceMappingURL=(.*)$/);
                        if (w) {
                            var E = w[1];
                            "~" === E.charAt(0) && (E = ("undefined" == typeof SecureDocument || null == SecureDocument.location ? "" : SecureDocument.location.origin ? SecureDocument.location.origin : SecureDocument.location.protocol + "//" + SecureDocument.location.hostname + (SecureDocument.location.port ? ":" + SecureDocument.location.port : "")) + E.slice(1)), i.url = E.slice(0, -4)
                        }
                    }
                }
                i.context = i.line ? o(i.url, i.line) : null, h.push(i)
            }
            return h.length ? (h[0] && h[0].line && !h[0].column && d && (h[0].column = c(d[1], h[0].url, h[0].line)), {
                mode: "stack",
                name: t.name,
                message: t.message,
                stack: h
            }) : null
        }

        function f(t, e, n, i) {
            var a = {
                url: e,
                line: n
            };
            if (a.url && a.line) {
                t.incomplete = !1, a.func || (a.func = r(a.url, a.line)), a.context || (a.context = o(a.url, a.line));
                var u = / '([^']+)' /.exec(i);
                if (u && (a.column = c(u[1], a.url, a.line)), t.stack.length > 0 && t.stack[0].url === a.url) {
                    if (t.stack[0].line === a.line) return !1;
                    if (!t.stack[0].line && t.stack[0].func === a.func) return t.stack[0].line = a.line, t.stack[0].context = a.context, !1
                }
                return t.stack.unshift(a), t.partial = !0, !0
            }
            return t.incomplete = !0, !1
        }

        function p(t, e) {
            for (var n, o, i, a = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, u = [], l = {}, d = !1, v = p.caller; v && !d; v = v.caller)
                if (v !== h && v !== zt.report) {
                    if (o = {
                            url: null,
                            func: Xt,
                            args: [],
                            line: null,
                            column: null
                        }, v.name ? o.func = v.name : (n = a.exec(v.toString())) && (o.func = n[1]), void 0 === o.func) try {
                        o.func = n.input.substring(0, n.input.indexOf("{"))
                    } catch (t) {}
                    if (i = s(v)) {
                        o.url = i.url, o.line = i.line, o.func === Xt && (o.func = r(o.url, o.line));
                        var y = / '([^']+)' /.exec(t.message || t.description);
                        y && (o.column = c(y[1], i.url, i.line))
                    }
                    l["" + v] ? d = !0 : l["" + v] = !0, u.push(o)
                } e && u.splice(0, e);
            var g = {
                mode: "callers",
                name: t.name,
                message: t.message,
                stack: u
            };
            return f(g, t.sourceURL || t.fileName, t.line || t.lineNumber, t.message || t.description), g
        }

        function h(e, i) {
            var c = null;
            i = null == i ? 0 : +i;
            try {
                if (c = function (t) {
                        var e = t.stacktrace;
                        if (e) {
                            for (var n, i = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, a = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, u = e.split("\n"), c = [], s = 0; s < u.length; s += 2) {
                                var l = null;
                                if ((n = i.exec(u[s])) ? l = {
                                        url: n[2],
                                        line: +n[1],
                                        column: null,
                                        func: n[3],
                                        args: []
                                    } : (n = a.exec(u[s])) && (l = {
                                        url: n[6],
                                        line: +n[1],
                                        column: +n[2],
                                        func: n[3] || n[4],
                                        args: n[5] ? n[5].split(",") : []
                                    }), l) {
                                    if (!l.func && l.line && (l.func = r(l.url, l.line)), l.line) try {
                                        l.context = o(l.url, l.line)
                                    } catch (t) {}
                                    l.context || (l.context = [u[s + 1]]), c.push(l)
                                }
                            }
                            return c.length ? {
                                mode: "stacktrace",
                                name: t.name,
                                message: t.message,
                                stack: c
                            } : null
                        }
                    }(e)) return c
            } catch (e) {
                if (t) throw e
            }
            try {
                if (c = l(e)) return c
            } catch (e) {
                if (t) throw e
            }
            try {
                if (c = function (t) {
                        var e = t.message.split("\n");
                        if (e.length < 4) return null;
                        var i, c = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                            s = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                            l = /^\s*Line (\d+) of function script\s*$/i,
                            f = [],
                            p = Vt && Vt.SecureDocument && Vt.SecureDocument.getElementsByTagName("script"),
                            h = [];
                        for (var d in p) Yt(p, d) && !p[d].src && h.push(p[d]);
                        for (var v = 2; v < e.length; v += 2) {
                            var y = null;
                            if (i = c.exec(e[v])) y = {
                                url: i[2],
                                func: i[3],
                                args: [],
                                line: +i[1],
                                column: null
                            };
                            else if (i = s.exec(e[v])) {
                                y = {
                                    url: i[3],
                                    func: i[4],
                                    args: [],
                                    line: +i[1],
                                    column: null
                                };
                                var g = +i[1],
                                    b = h[i[2] - 1];
                                if (b) {
                                    var m = n(y.url);
                                    if (m) {
                                        var _ = (m = m.join("\n")).indexOf(b.innerText);
                                        _ >= 0 && (y.line = g + m.substring(0, _).split("\n").length)
                                    }
                                }
                            } else if (i = l.exec(e[v])) {
                                var w = Jt().replace(/#.*$/, ""),
                                    E = u(new RegExp(a(e[v + 1])), [w]);
                                y = {
                                    url: w,
                                    func: "",
                                    args: [],
                                    line: E ? E.line : i[1],
                                    column: null
                                }
                            }
                            if (y) {
                                y.func || (y.func = r(y.url, y.line));
                                var x = o(y.url, y.line),
                                    S = x ? x[Math.floor(x.length / 2)] : null;
                                x && S.replace(/^\s*/, "") === e[v + 1].replace(/^\s*/, "") ? y.context = x : y.context = [e[v + 1]], f.push(y)
                            }
                        }
                        return f.length ? {
                            mode: "multiline",
                            name: t.name,
                            message: e[0],
                            stack: f
                        } : null
                    }(e)) return c
            } catch (e) {
                if (t) throw e
            }
            try {
                if (c = p(e, i + 1)) return c
            } catch (e) {
                if (t) throw e
            }
            return {
                name: e.name,
                message: e.message,
                mode: "failed"
            }
        }
        return h.augmentStackTraceWithInitialElement = f, h.computeStackTraceFromStackProp = l, h.guessFunctionName = r, h.gatherContext = o, h.ofCaller = function (t) {
            t = 1 + (null == t ? 0 : +t);
            try {
                throw new Error
            } catch (e) {
                return h(e, t + 1)
            }
        }, h.getSource = n, h
    }(), zt.extendToAsynchronousCallbacks = function () {
        var t = function (t) {
            var e = Vt[t];
            Vt[t] = function () {
                var t = Wt.call(arguments),
                    n = t[0];
                return "function" == typeof n && (t[0] = zt.wrap(n)), e.apply ? e.apply(this, t) : e(t[0], t[1])
            }
        };
        t("setTimeout"), t("setInterval")
    }, zt.remoteFetching = !1, zt.collectWindowErrors = !0, zt.linesOfContext = 11;
    var Zt = zt.report.subscribe,
        Qt = zt.report.installGlobalHandler,
        te = zt.report.installGlobalUnhandledRejectionHandler,
        ee = zt.computeStackTrace,
        ne = 50;

    function re(t) {
        var e = {
            stacktrace: {
                frames: ie(t.stack)
            },
            type: t.name,
            value: t.message
        };
        return void 0 === e.type && "" === e.value && (e.value = "Unrecoverable error caught"), e
    }

    function oe(t) {
        return {
            exception: {
                values: [re(t)]
            }
        }
    }

    function ie(t) {
        if (!t || !t.length) return [];
        var e = t,
            n = e[0].func || "";
        return (z(n, "captureMessage") || z(n, "captureException")) && (e = e.slice(1)), e.map(function (t) {
            return {
                colno: t.column,
                filename: t.url || e[0].url,
                function: t.func || "?",
                in_app: !0,
                lineno: t.line
            }
        }).slice(0, ne).reverse()
    }
    var ae, ue, ce = function () {
            function t(t) {
                this.options = t, this.url = new bt(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
            }
            return t.prototype.captureEvent = function (t) {
                return o(this, void 0, void 0, function () {
                    return i(this, function (t) {
                        throw new wt("Transport Class has to implement `captureEvent` method")
                    })
                })
            }, t
        }(),
        se = S(),
        le = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.captureEvent = function (t) {
                return o(this, void 0, void 0, function () {
                    var e, n;
                    return i(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return e = {
                                    body: M(t),
                                    method: "POST",
                                    referrerPolicy: Pt() ? "origin" : ""
                                }, [4, se.fetch(this.url, e)];
                            case 1:
                                return n = r.sent(), [2, {
                                    status: h.fromHttpCode(n.status)
                                }]
                        }
                    })
                })
            }, e
        }(ce),
        fe = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.captureEvent = function (t) {
                return o(this, void 0, void 0, function () {
                    var e = this;
                    return i(this, function (n) {
                        return [2, new Promise(function (n, r) {
                            var o = new XMLHttpRequest;
                            o.onreadystatechange = function () {
                                4 === o.readyState && (200 === o.status && n({
                                    status: h.fromHttpCode(o.status)
                                }), r(o))
                            }, o.open("POST", e.url), o.send(M(t))
                        })]
                    })
                })
            }, e
        }(ce),
        pe = S(),
        he = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.captureEvent = function (t) {
                return o(this, void 0, void 0, function () {
                    var e;
                    return i(this, function (n) {
                        return e = M(t), [2, {
                            status: pe.navigator.sendBeacon(this.url, e) ? h.Success : h.Failed
                        }]
                    })
                })
            }, e
        }(ce),
        de = Object.freeze({
            BaseTransport: ce,
            FetchTransport: le,
            XHRTransport: fe,
            BeaconTransport: he
        }),
        ve = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.install = function () {
                if (!this.options.dsn) throw new wt("Invariant exception: install() must not be called when disabled");
                return Error.stackTraceLimit = 50, !0
            }, e.prototype.eventFromException = function (t, e) {
                return o(this, void 0, void 0, function () {
                    var n, o, a, u;
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return y(t) && t.error ? (t = (u = t).error, n = oe(ee(t)), [3, 7]) : [3, 1];
                            case 1:
                                return g(t) || b(t) ? (o = (u = t).name || (g(u) ? "DOMError" : "DOMException"), a = u.message ? o + ": " + u.message : o, [4, this.eventFromMessage(a, void 0, e)]) : [3, 3];
                            case 2:
                                return n = i.sent(), [3, 7];
                            case 3:
                                return v(t) ? (n = oe(ee(t)), [3, 7]) : [3, 4];
                            case 4:
                                return E(t) && e && e.syntheticException ? (n = function (t, e) {
                                    var n = Object.keys(t).sort(),
                                        r = {
                                            extra: {
                                                __serialized__: C(t)
                                            },
                                            fingerprint: [qt(n.join(""))],
                                            message: "Non-Error exception captured with keys: " + D(n)
                                        };
                                    if (e) {
                                        var o = ie(ee(e).stack);
                                        r.stacktrace = {
                                            frames: o
                                        }
                                    }
                                    return r
                                }(u = t, e.syntheticException), [3, 7]) : [3, 5];
                            case 5:
                                return u = t, [4, this.eventFromMessage(u, void 0, e)];
                            case 6:
                                n = i.sent(), i.label = 7;
                            case 7:
                                return [2, n = r({}, n, {
                                    event_id: e && e.event_id,
                                    exception: r({}, n.exception, {
                                        mechanism: {
                                            handled: !0,
                                            type: "generic"
                                        }
                                    })
                                })]
                        }
                    })
                })
            }, e.prototype.eventFromMessage = function (t, e, n) {
                return void 0 === e && (e = p.Info), o(this, void 0, void 0, function () {
                    var r, o, a;
                    return i(this, function (i) {
                        return r = {
                            event_id: n && n.event_id,
                            fingerprint: [t],
                            level: e,
                            message: t
                        }, this.options.attachStacktrace && n && n.syntheticException && (o = ee(n.syntheticException), a = ie(o.stack), r.stacktrace = {
                            frames: a
                        }), [2, r]
                    })
                })
            }, e.prototype.sendEvent = function (t) {
                return o(this, void 0, void 0, function () {
                    var e;
                    return i(this, function (n) {
                        return this.options.dsn ? (this.transport || (e = this.options.transportOptions ? this.options.transportOptions : {
                            dsn: this.options.dsn
                        }, this.options.transport ? this.transport = new this.options.transport({
                            dsn: this.options.dsn
                        }) : jt() ? this.transport = new he(e) : kt() ? this.transport = new le(e) : this.transport = new fe(e)), [2, this.transport.captureEvent(t)]) : (ut.warn("Event has been skipped because no Dsn is configured."), [2, {
                            status: h.Skipped,
                            reason: "Event has been skipped because no Dsn is configured."
                        }])
                    })
                })
            }, e
        }(_t),
        ye = "sentry.javascript.browser",
        ge = function (t) {
            function e(e) {
                return t.call(this, ve, e) || this
            }
            return n(e, t), e.prototype.prepareEvent = function (e, n, a) {
                return o(this, void 0, void 0, function () {
                    return i(this, function (o) {
                        return e.platform = e.platform || "javascript", e.sdk = r({}, e.sdk, {
                            name: ye,
                            packages: u(e.sdk && e.sdk.packages || [], [{
                                name: "npm:@sentry/browser",
                                version: "4.1.1"
                            }]),
                            version: "4.1.1"
                        }), [2, t.prototype.prepareEvent.call(this, e, n, a)]
                    })
                })
            }, e.prototype.showReportDialog = function (t) {
                void 0 === t && (t = {});
                var e = S().SecureDocument;
                if (e) {
                    var n = t.dsn || this.getDsn();
                    if (!t.eventId) throw new wt("Missing `eventId` option in showReportDialog call");
                    if (!n) throw new wt("Missing `Dsn` option in showReportDialog call");
                    var r = e.createElement("script");
                    r.async = !0, r.src = new bt(n).getReportDialogEndpoint(t), (e.head || e.body).appendChild(r)
                }
            }, e
        }(mt),
        be = 1e3,
        me = 0;

    function _e(t, e, n) {
        if (void 0 === e && (e = {}), !_(t)) return t;
        try {
            if (t.__sentry__) return t;
            if (t.__sentry_wrapped__) return t.__sentry_wrapped__
        } catch (e) {
            return t
        }
        var a = function () {
            var a = this;
            n && _(n) && n.apply(this, arguments);
            var u = Array.prototype.slice.call(arguments);
            try {
                var c = u.map(function (t) {
                    return _e(t, e)
                });
                return t.handleEvent ? t.handleEvent.apply(this, c) : t.apply(this, c)
            } catch (t) {
                throw me += 1, setTimeout(function () {
                    me -= 1
                }), ht(function (n) {
                    return o(a, void 0, void 0, function () {
                        var a = this;
                        return i(this, function (c) {
                            return n.addEventProcessor(function (t) {
                                return o(a, void 0, void 0, function () {
                                    var n;
                                    return i(this, function (o) {
                                        return n = r({}, t), e.mechanism && (n.exception = n.exception || {}, n.exception.mechanism = e.mechanism), n.extra = r({}, n.extra, {
                                            arguments: R(u, 2)
                                        }), [2, n]
                                    })
                                })
                            }), dt().captureException(t, {
                                originalException: t
                            }), [2]
                        })
                    })
                }), t
            }
        };
        try {
            for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && (a[u] = t[u])
        } catch (t) {}
        return a.prototype = t.prototype, t.__sentry_wrapped__ = a, a.__sentry__ = !0, a.__sentry_original__ = t, a
    }

    function we(t) {
        return function (e) {
            if (ae = void 0, ue !== e) {
                var n;
                ue = e;
                try {
                    n = k(e.target)
                } catch (t) {
                    n = "<unknown>"
                }
                dt().addBreadcrumb({
                    category: "ui." + t,
                    message: n
                }, {
                    event: e,
                    name: t
                })
            }
        }
    }

    function Ee() {
        return function (t) {
            var e;
            try {
                e = t.target
            } catch (t) {
                return
            }
            var n = e && e.tagName;
            n && ("INPUT" === n || "TEXTAREA" === n || e.isContentEditable) && (ae || we("input")(t), clearTimeout(ae), ae = setTimeout(function () {
                ae = void 0
            }, be))
        }
    }
    var xe, Se = function () {
            function t(t) {
                this.name = "GlobalHandlers", this.options = r({
                    onerror: !0,
                    onunhandledrejection: !0
                }, t)
            }
            return t.prototype.install = function () {
                var t = this;
                Zt(function (e, n, r) {
                    me > 0 || dt().captureEvent(t.eventFromGlobalHandler(e), {
                        originalException: r,
                        data: {
                            stack: e
                        }
                    })
                }), this.options.onerror && (ut.log("Global Handler attached: onerror"), Qt()), this.options.onunhandledrejection && (ut.log("Global Handler attached: onunhandledrejection"), te())
            }, t.prototype.eventFromGlobalHandler = function (t) {
                var e = oe(t);
                return r({}, e, {
                    exception: r({}, e.exception, {
                        mechanism: {
                            data: {
                                mode: t.mode
                            },
                            handled: !1,
                            type: t.mechanism
                        }
                    })
                })
            }, t
        }(),
        ke = function () {
            function t() {
                this.ignoreOnError = 0, this.name = "TryCatch"
            }
            return t.prototype.wrapTimeFunction = function (t) {
                return function () {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var r = e[0];
                    return e[0] = _e(r, {
                        mechanism: {
                            data: {
                                function: t.name || "<anonymous>"
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }), t.apply(this, e)
                }
            }, t.prototype.wrapRAF = function (t) {
                return function (e) {
                    return t(_e(e, {
                        mechanism: {
                            data: {
                                function: "requestAnimationFrame",
                                handler: t && t.name || "<anonymous>"
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                }
            }, t.prototype.wrapEventTarget = function (t) {
                var e = S(),
                    n = e[t] && e[t].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (I(n, "addEventListener", function (e) {
                    return function (n, r, o) {
                        try {
                            r.handleEvent = _e(r.handleEvent.bind(r), {
                                mechanism: {
                                    data: {
                                        function: "handleEvent",
                                        handler: r && r.name || "<anonymous>",
                                        target: t
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            })
                        } catch (t) {}
                        var i, a, u;
                        return "EventTarget" !== t && "Node" !== t || (a = we("click"), u = Ee(), i = function (t) {
                            if (t) {
                                var e;
                                try {
                                    e = t.type
                                } catch (t) {
                                    return
                                }
                                return "click" === e ? a(t) : "keypress" === e ? u(t) : void 0
                            }
                        }), e.call(this, n, _e(r, {
                            mechanism: {
                                data: {
                                    function: "addEventListener",
                                    handler: r && r.name || "<anonymous>",
                                    target: t
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }, i), o)
                    }
                }), I(n, "removeEventListener", function (t) {
                    return function (e, n, r) {
                        var o = n;
                        try {
                            o = o && (o.__sentry_wrapped__ || o)
                        } catch (t) {}
                        return t.call(this, e, o, r)
                    }
                }))
            }, t.prototype.install = function () {
                this.ignoreOnError = this.ignoreOnError;
                var t = S();
                I(t, "setTimeout", this.wrapTimeFunction.bind(this)), I(t, "setInterval", this.wrapTimeFunction.bind(this)), I(t, "requestAnimationFrame", this.wrapRAF.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload", "SecureWindow"].forEach(this.wrapEventTarget.bind(this))
            }, t
        }(),
        Oe = S();

    function je(t) {
        try {
            var e = F(t);
            dt().addBreadcrumb({
                category: "sentry",
                event_id: e.event_id,
                level: e.level || p.fromString("error"),
                message: j(e)
            }, {
                event: e
            })
        } catch (t) {
            ut.error("Error while adding sentry type breadcrumb")
        }
    }
    var Te, Pe = function () {
            function t(t) {
                this.name = "Breadcrumbs", this.options = r({
                    beacon: !0,
                    console: !0,
                    dom: !0,
                    fetch: !0,
                    history: !0,
                    sentry: !0,
                    xhr: !0
                }, t)
            }
            return t.prototype.instrumentBeacon = function (t) {
                jt() && I(Oe.navigator, "sendBeacon", function (e) {
                    return function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var o = n[0],
                            i = n[1],
                            a = e.apply(this, n);
                        if (t.filterUrl && z(o, t.filterUrl)) return je(i), a;
                        var u = {
                            category: "beacon",
                            data: i,
                            type: "http"
                        };
                        return a || (u.level = p.Error), dt().addBreadcrumb(u, {
                            input: n,
                            result: a
                        }), a
                    }
                })
            }, t.prototype.instrumentConsole = function () {
                "console" in Oe && ["debug", "info", "warn", "error", "log"].forEach(function (t) {
                    t in Oe.console && I(Oe.console, t, function (e) {
                        return function () {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var o = {
                                category: "console",
                                data: {
                                    extra: {
                                        arguments: n.slice(1)
                                    },
                                    logger: "console"
                                },
                                level: p.fromString(t),
                                message: V(n, " ")
                            };
                            "assert" === t && !1 === n[0] && (o.message = "Assertion failed: " + (V(n.slice(1), " ") || "console.assert"), o.data.extra.arguments = n.slice(1)), dt().addBreadcrumb(o, {
                                input: n,
                                level: t
                            }), e && e.apply(Oe.console, n)
                        }
                    })
                })
            }, t.prototype.instrumentDOM = function () {
                "SecureDocument" in Oe && (Oe.SecureDocument.addEventListener("click", we("click"), !1), Oe.SecureDocument.addEventListener("keypress", Ee(), !1))
            }, t.prototype.instrumentFetch = function (t) {
                Ot() && I(Oe, "fetch", function (e) {
                    return function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var o, i = n[0],
                            a = "GET";
                        if ("string" == typeof i ? o = i : "Request" in Oe && i instanceof Request ? (o = i.url, i.method && (a = i.method)) : o = String(i), n[1] && n[1].method && (a = n[1].method), t.filterUrl && z(o, t.filterUrl)) return "POST" === a && n[1] && n[1].body && je(n[1].body), e.apply(Oe, n);
                        var u = {
                            method: a,
                            url: o
                        };
                        return e.apply(Oe, n).then(function (t) {
                            return u.status_code = t.status, dt().addBreadcrumb({
                                category: "fetch",
                                data: u,
                                type: "http"
                            }, {
                                input: n,
                                response: t
                            }), t
                        }).catch(function (t) {
                            throw dt().addBreadcrumb({
                                category: "fetch",
                                data: u,
                                level: p.Error,
                                type: "http"
                            }, {
                                error: t,
                                input: n
                            }), t
                        })
                    }
                })
            }, t.prototype.instrumentHistory = function () {
                var t = this;
                if (Mt()) {
                    var e = function (t, e) {
                            var n = O(Oe.location.href),
                                r = O(e),
                                o = O(t);
                            o.path || (o = n), xe = e, n.protocol === r.protocol && n.host === r.host && (e = r.relative), n.protocol === o.protocol && n.host === o.host && (t = o.relative), dt().addBreadcrumb({
                                category: "navigation",
                                data: {
                                    from: t,
                                    to: e
                                }
                            })
                        },
                        n = Oe.onpopstate;
                    Oe.onpopstate = function () {
                        for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                        var i = Oe.location.href;
                        if (e(xe, i), n) return n.apply(t, r)
                    }, I(Oe.history, "pushState", r), I(Oe.history, "replaceState", r)
                }

                function r(t) {
                    return function () {
                        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                        var o = n.length > 2 ? n[2] : void 0;
                        return o && e(xe, String(o)), t.apply(this, n)
                    }
                }
            }, t.prototype.instrumentXHR = function (t) {
                if ("XMLHttpRequest" in Oe) {
                    var e = XMLHttpRequest.prototype;
                    I(e, "open", function (e) {
                        return function () {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            var o = n[1];
                            return this.__sentry_xhr__ = {
                                method: n[0],
                                url: n[1]
                            }, w(o) && t.filterUrl && z(o, t.filterUrl) && (this.__sentry_own_request__ = !0), e.apply(this, n)
                        }
                    }), I(e, "send", function (t) {
                        return function () {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = this;

                            function o() {
                                if (4 === r.readyState) {
                                    if (r.__sentry_own_request__) return;
                                    try {
                                        r.__sentry_xhr__ && (r.__sentry_xhr__.status_code = r.status)
                                    } catch (t) {}
                                    dt().addBreadcrumb({
                                        category: "xhr",
                                        data: r.__sentry_xhr__,
                                        type: "http"
                                    }, {
                                        xhr: r
                                    })
                                }
                            }
                            return r.__sentry_own_request__ && je(e[0]), ["onload", "onerror", "onprogress"].forEach(function (t) {
                                ! function (t, e) {
                                    t in e && _(e[t]) && I(e, t, function (e) {
                                        return _e(e, {
                                            mechanism: {
                                                data: {
                                                    function: t,
                                                    handler: e && e.name || "<anonymous>"
                                                },
                                                handled: !0,
                                                type: "instrument"
                                            }
                                        })
                                    })
                                }(t, r)
                            }), "onreadystatechange" in r && _(r.onreadystatechange) ? I(r, "onreadystatechange", function (t) {
                                return _e(t, {
                                    mechanism: {
                                        data: {
                                            function: "onreadystatechange",
                                            handler: t && t.name || "<anonymous>"
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }, o)
                            }) : r.onreadystatechange = o, t.apply(this, e)
                        }
                    })
                }
            }, t.prototype.install = function (t) {
                void 0 === t && (t = {});
                var e = t.dsn && new bt(t.dsn).getStoreEndpoint();
                this.options.console && this.instrumentConsole(), this.options.dom && this.instrumentDOM(), this.options.xhr && this.instrumentXHR({
                    filterUrl: e
                }), this.options.fetch && this.instrumentFetch({
                    filterUrl: e
                }), this.options.beacon && this.instrumentBeacon({
                    filterUrl: e
                }), this.options.history && this.instrumentHistory()
            }, t
        }(),
        Me = "cause",
        Fe = 5,
        Ie = function () {
            function t(t) {
                void 0 === t && (t = {}), this.name = "LinkedErrors", this.key = t.key || Me, this.limit = t.limit || Fe
            }
            return t.prototype.install = function () {
                var t = this;
                pt(function (e) {
                    return e.addEventProcessor(t.handler.bind(t))
                })
            }, t.prototype.handler = function (t, e) {
                if (!(t.exception && t.exception.values && e && e.originalException instanceof Error)) return t;
                var n = this.walkErrorTree(e.originalException, this.key);
                return t.exception.values = u(t.exception.values, n), t
            }, t.prototype.walkErrorTree = function (t, e, n) {
                if (void 0 === n && (n = []), !(t[e] instanceof Error) || n.length >= this.limit) return n;
                var r = re(ee(t[e]));
                return this.walkErrorTree(t[e], e, u(n, [r]))
            }, t
        }();
    ! function (t) {
        t.Crash = "crash", t.Deprecation = "deprecation", t.Intervention = "intervention"
    }(Te || (Te = {}));
    var Re = function () {
            function t(t) {
                void 0 === t && (t = {
                    types: [Te.Crash, Te.Deprecation, Te.Intervention]
                }), this.options = t, this.name = "ReportingObserver"
            }
            return t.prototype.install = function () {
                Tt() && new(S().ReportingObserver)(this.handler.bind(this), {
                    buffered: !0,
                    types: this.options.types
                }).observe()
            }, t.prototype.handler = function (t) {
                var e, n, r = function (t) {
                    ht(function (e) {
                        e.setExtra("url", t.url);
                        var n = "ReportingObserver [" + t.type + "]",
                            r = "No details available";
                        if (t.body) {
                            var o, i = {};
                            for (var a in t.body) i[a] = t.body[a];
                            if (e.setExtra("body", i), t.type === Te.Crash) r = [(o = t.body).crashId || "", o.reason || ""].join(" ").trim() || r;
                            else r = (o = t.body).message || r
                        }
                        ft(n + ": " + r)
                    })
                };
                try {
                    for (var o = function (t) {
                            var e = "function" == typeof Symbol && t[Symbol.iterator],
                                n = 0;
                            return e ? e.call(t) : {
                                next: function () {
                                    return t && n >= t.length && (t = void 0), {
                                        value: t && t[n++],
                                        done: !t
                                    }
                                }
                            }
                        }(t), i = o.next(); !i.done; i = o.next()) {
                        r(i.value)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, t
        }(),
        Ce = S(),
        De = function () {
            function t() {
                this.name = "UserAgent"
            }
            return t.prototype.install = function () {
                var t = this;
                pt(function (e) {
                    e.addEventProcessor(function (e) {
                        return o(t, void 0, void 0, function () {
                            var t;
                            return i(this, function (n) {
                                return Ce.navigator && Ce.location ? ((t = e.request || {}).url = t.url || Ce.location.href, t.headers = t.headers || {}, t.headers["User-Agent"] = Ce.navigator.userAgent, [2, r({}, e, {
                                    request: t
                                })]) : [2, e]
                            })
                        })
                    })
                })
            }, t
        }(),
        Be = function () {
            function t(t) {
                void 0 === t && (t = {}), this.name = "Ember", this.Ember = t.Ember || S().Ember
            }
            return t.prototype.install = function () {
                var t = this;
                if (this.Ember) {
                    var e = this.Ember.onerror;
                    this.Ember.onerror = function (n) {
                        ht(function (e) {
                            t.addIntegrationToSdkInfo(e), dt().captureException(n, {
                                originalException: n
                            })
                        }), "function" == typeof e && e.call(t.Ember, n)
                    }, this.Ember.RSVP.on("error", function (e) {
                        var n = dt().pushScope();
                        e instanceof Error ? (n.setExtra("context", "Unhandled Promise error detected"), t.addIntegrationToSdkInfo(n), dt().captureException(e, {
                            originalException: e
                        })) : (n.setExtra("reason", e), t.addIntegrationToSdkInfo(n), ft("Unhandled Promise error detected")), dt().popScope()
                    })
                }
            }, t.prototype.addIntegrationToSdkInfo = function (t) {
                var e = this;
                t.addEventProcessor(function (t) {
                    return o(e, void 0, void 0, function () {
                        var e;
                        return i(this, function (n) {
                            return t.sdk && (e = t.sdk.integrations || [], t.sdk = r({}, t.sdk, {
                                integrations: u(e, ["ember"])
                            })), [2, t]
                        })
                    })
                })
            }, t
        }(),
        Ae = function () {
            function t(t) {
                void 0 === t && (t = {}), this.name = "Vue", this.Vue = t.Vue || S().Vue
            }
            return t.prototype.formatComponentName = function (t) {
                if (t.$root === t) return "root instance";
                var e = t._isVue ? t.$options.name || t.$options._componentTag : t.name;
                return (e ? "component <" + e + ">" : "anonymous component") + (t._isVue && t.$options.__file ? " at " + t.$options.__file : "")
            }, t.prototype.install = function () {
                var t = this;
                if (this.Vue && this.Vue.config) {
                    var e = this.Vue.config.errorHandler;
                    this.Vue.config.errorHandler = function (n, a, c) {
                        var s = {};
                        E(a) && (s.componentName = t.formatComponentName(a), s.propsData = a.$options.propsData), m(c) || (s.lifecycleHook = c), ht(function (e) {
                            Object.keys(s).forEach(function (t) {
                                e.setExtra(t, s[t])
                            }), e.addEventProcessor(function (e) {
                                return o(t, void 0, void 0, function () {
                                    var t;
                                    return i(this, function (n) {
                                        return e.sdk && (t = e.sdk.integrations || [], e.sdk = r({}, e.sdk, {
                                            integrations: u(t, ["vue"])
                                        })), [2, e]
                                    })
                                })
                            }), dt().captureException(n, {
                                originalException: n
                            })
                        }), "function" == typeof e && e.call(t.Vue, n, a, c)
                    }
                }
            }, t
        }(),
        Le = Object.freeze({
            GlobalHandlers: Se,
            TryCatch: ke,
            Breadcrumbs: Pe,
            LinkedErrors: Ie,
            ReportingObserver: Re,
            UserAgent: De,
            Ember: Be,
            Vue: Ae
        }),
        Ue = [new xt.Dedupe, new xt.InboundFilters, new xt.FunctionToString, new ke, new Pe, new Se, new Re, new Ie, new De];
    var Ne = r({}, xt, Le);
    return t.Integrations = Ne, t.Transports = de, t.Severity = p, t.Status = h, t.addBreadcrumb = ct, t.captureException = st, t.captureEvent = lt, t.captureMessage = ft, t.configureScope = pt, t.withScope = ht, t.getHubFromCarrier = yt, t.getCurrentHub = dt, t.Hub = vt, t.Scope = gt, t.BrowserBackend = ve, t.BrowserClient = ge, t.defaultIntegrations = Ue, t.forceLoad = function () {}, t.init = function (t) {
        Et(ge, t, Ue)
    }, t.lastEventId = function () {
        return dt().lastEventId()
    }, t.onLoad = function (t) {
        t()
    }, t.showReportDialog = function (t) {
        void 0 === t && (t = {}), t.eventId || (t.eventId = dt().lastEventId()), dt().getClient().showReportDialog(t)
    }, t.SDK_NAME = ye, t.SDK_VERSION = "4.1.1", t
}({});
//# sourceMappingURL=bundle.min.js.map