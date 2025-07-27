import * as A from "react";
import We, { useState as _e, useEffect as me, useReducer as Cb, useDebugValue as Eb, useContext as Le, createContext as at, useCallback as ce, useRef as Ie, createElement as mi, useMemo as Vt, forwardRef as Pi, useImperativeHandle as Tb, useLayoutEffect as $c, useId as Vc, useInsertionEffect as jp, Children as Mb, isValidElement as Pb, Fragment as Uc, Component as Ab } from "react";
import * as Dp from "react-dom";
import Ob from "react-dom";
const ye = {
  primary: "scxl:text-indigo-500",
  primaryHover: "hover:scxl:text-indigo-600",
  primaryLight: "scxl:text-indigo-300",
  background: "scxl:bg-white",
  cardBackground: "scxl:bg-white",
  inputBackground: "scxl:bg-white",
  border: "scxl:border-gray-200",
  inputBorder: "scxl:border-indigo-500",
  inputBorderFocus: "focus:scxl:border-indigo-600",
  textPrimary: "scxl:text-gray-900",
  textSecondary: "scxl:text-gray-500",
  textMuted: "scxl:text-gray-400",
  success: "scxl:text-emerald-500",
  successLight: "scxl:bg-emerald-100",
  error: "scxl:text-red-500",
  errorLight: "scxl:bg-red-200",
  warning: "scxl:text-amber-500",
  warningLight: "scxl:bg-amber-100",
  userBubble: "scxl:bg-indigo-500",
  userBubbleText: "scxl:text-white",
  botBubble: "scxl:bg-gray-100",
  botBubbleText: "scxl:text-gray-900",
  connected: "scxl:bg-emerald-500",
  connecting: "scxl:bg-indigo-500",
  disconnected: "scxl:bg-red-500",
  ready: "scxl:bg-emerald-500"
}, Rb = {
  sm: {
    container: "scxl:max-w-md",
    text: "scxl:text-sm",
    padding: "scxl:p-3",
    button: "scxl:px-3 scxl:py-1.5 scxl:text-xs",
    input: "scxl:p-3 scxl:text-sm",
    title: "scxl:text-lg"
  },
  md: {
    container: "scxl:max-w-2xl",
    text: "scxl:text-base",
    padding: "scxl:p-4",
    button: "scxl:px-4 scxl:py-2 scxl:text-sm",
    input: "scxl:p-4 scxl:text-sm",
    title: "scxl:text-xl"
  },
  lg: {
    container: "scxl:max-w-4xl",
    text: "scxl:text-lg",
    padding: "scxl:p-6",
    button: "scxl:px-6 scxl:py-3 scxl:text-base",
    input: "scxl:p-6 scxl:text-base",
    title: "scxl:text-2xl"
  }
}, Lb = (e = {}) => {
  const t = { ...ye, ...e };
  return {
    primary: t.primary || ye.primary,
    primaryHover: t.primaryHover || ye.primaryHover,
    primaryLight: t.primaryLight || ye.primaryLight,
    background: t.background || ye.background,
    cardBackground: t.cardBackground || ye.cardBackground,
    inputBackground: t.inputBackground || ye.inputBackground,
    border: t.border || ye.border,
    inputBorder: t.inputBorder || ye.inputBorder,
    inputBorderFocus: t.inputBorderFocus || ye.inputBorderFocus,
    textPrimary: t.textPrimary || ye.textPrimary,
    textSecondary: t.textSecondary || ye.textSecondary,
    textMuted: t.textMuted || ye.textMuted,
    success: t.success || ye.success,
    successLight: t.successLight || ye.successLight,
    error: t.error || ye.error,
    errorLight: t.errorLight || ye.errorLight,
    warning: t.warning || ye.warning,
    warningLight: t.warningLight || ye.warningLight,
    userBubble: t.userBubble || ye.userBubble,
    userBubbleText: t.userBubbleText || ye.userBubbleText,
    botBubble: t.botBubble || ye.botBubble,
    botBubbleText: t.botBubbleText || ye.botBubbleText,
    connected: t.connected || ye.connected,
    connecting: t.connecting || ye.connecting,
    disconnected: t.disconnected || ye.disconnected,
    ready: t.ready || ye.ready
  };
}, jb = (e = "md") => Rb[e], Db = {
  title: "Voice Chat",
  subtitle: "Connect to start your conversation",
  connectButton: "Connect",
  disconnectButton: "Disconnect",
  inputPlaceholder: "Ask anything...",
  voiceTooltip: "Switch to voice mode",
  textTooltip: "Switch to text mode",
  loadingText: "Initializing...",
  errorTitle: "Connection Error",
  botReadyText: "Bot Ready",
  connectedText: "Connected",
  connectingText: "Connecting..."
};
function Ib(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ui = { exports: {} }, Xr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fu;
function Nb() {
  if (fu) return Xr;
  fu = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, s) {
    var o = null;
    if (s !== void 0 && (o = "" + s), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      s = {};
      for (var a in i)
        a !== "key" && (s[a] = i[a]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return Xr.Fragment = t, Xr.jsx = n, Xr.jsxs = n, Xr;
}
var Qr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hu;
function Fb() {
  return hu || (hu = 1, process.env.NODE_ENV !== "production" && function() {
    function e(N) {
      if (N == null) return null;
      if (typeof N == "function")
        return N.$$typeof === L ? null : N.displayName || N.name || null;
      if (typeof N == "string") return N;
      switch (N) {
        case y:
          return "Fragment";
        case w:
          return "Profiler";
        case b:
          return "StrictMode";
        case _:
          return "Suspense";
        case O:
          return "SuspenseList";
        case R:
          return "Activity";
      }
      if (typeof N == "object")
        switch (typeof N.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), N.$$typeof) {
          case g:
            return "Portal";
          case C:
            return (N.displayName || "Context") + ".Provider";
          case M:
            return (N._context.displayName || "Context") + ".Consumer";
          case S:
            var ee = N.render;
            return N = N.displayName, N || (N = ee.displayName || ee.name || "", N = N !== "" ? "ForwardRef(" + N + ")" : "ForwardRef"), N;
          case k:
            return ee = N.displayName || null, ee !== null ? ee : e(N.type) || "Memo";
          case P:
            ee = N._payload, N = N._init;
            try {
              return e(N(ee));
            } catch {
            }
        }
      return null;
    }
    function t(N) {
      return "" + N;
    }
    function n(N) {
      try {
        t(N);
        var ee = !1;
      } catch {
        ee = !0;
      }
      if (ee) {
        ee = console;
        var fe = ee.error, d = typeof Symbol == "function" && Symbol.toStringTag && N[Symbol.toStringTag] || N.constructor.name || "Object";
        return fe.call(
          ee,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), t(N);
      }
    }
    function r(N) {
      if (N === y) return "<>";
      if (typeof N == "object" && N !== null && N.$$typeof === P)
        return "<...>";
      try {
        var ee = e(N);
        return ee ? "<" + ee + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var N = I.A;
      return N === null ? null : N.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function o(N) {
      if (V.call(N, "key")) {
        var ee = Object.getOwnPropertyDescriptor(N, "key").get;
        if (ee && ee.isReactWarning) return !1;
      }
      return N.key !== void 0;
    }
    function a(N, ee) {
      function fe() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ee
        ));
      }
      fe.isReactWarning = !0, Object.defineProperty(N, "key", {
        get: fe,
        configurable: !0
      });
    }
    function c() {
      var N = e(this.type);
      return Y[N] || (Y[N] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), N = this.props.ref, N !== void 0 ? N : null;
    }
    function l(N, ee, fe, d, v, m, E, T) {
      return fe = m.ref, N = {
        $$typeof: p,
        type: N,
        key: ee,
        props: m,
        _owner: v
      }, (fe !== void 0 ? fe : null) !== null ? Object.defineProperty(N, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(N, "ref", { enumerable: !1, value: null }), N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(N, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(N, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.defineProperty(N, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    }
    function u(N, ee, fe, d, v, m, E, T) {
      var j = ee.children;
      if (j !== void 0)
        if (d)
          if (q(j)) {
            for (d = 0; d < j.length; d++)
              f(j[d]);
            Object.freeze && Object.freeze(j);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(j);
      if (V.call(ee, "key")) {
        j = e(N);
        var U = Object.keys(ee).filter(function(G) {
          return G !== "key";
        });
        d = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", te[j + d] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          j,
          U,
          j
        ), te[j + d] = !0);
      }
      if (j = null, fe !== void 0 && (n(fe), j = "" + fe), o(ee) && (n(ee.key), j = "" + ee.key), "key" in ee) {
        fe = {};
        for (var z in ee)
          z !== "key" && (fe[z] = ee[z]);
      } else fe = ee;
      return j && a(
        fe,
        typeof N == "function" ? N.displayName || N.name || "Unknown" : N
      ), l(
        N,
        j,
        m,
        v,
        i(),
        fe,
        E,
        T
      );
    }
    function f(N) {
      typeof N == "object" && N !== null && N.$$typeof === p && N._store && (N._store.validated = 1);
    }
    var h = We, p = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), C = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), L = Symbol.for("react.client.reference"), I = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, q = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(N) {
        return N();
      }
    };
    var H, Y = {}, W = h["react-stack-bottom-frame"].bind(
      h,
      s
    )(), D = $(r(s)), te = {};
    Qr.Fragment = y, Qr.jsx = function(N, ee, fe, d, v) {
      var m = 1e4 > I.recentlyCreatedOwnerStacks++;
      return u(
        N,
        ee,
        fe,
        !1,
        d,
        v,
        m ? Error("react-stack-top-frame") : W,
        m ? $(r(N)) : D
      );
    }, Qr.jsxs = function(N, ee, fe, d, v) {
      var m = 1e4 > I.recentlyCreatedOwnerStacks++;
      return u(
        N,
        ee,
        fe,
        !0,
        d,
        v,
        m ? Error("react-stack-top-frame") : W,
        m ? $(r(N)) : D
      );
    };
  }()), Qr;
}
var pu;
function Bb() {
  return pu || (pu = 1, process.env.NODE_ENV === "production" ? Ui.exports = Nb() : Ui.exports = Fb()), Ui.exports;
}
var x = Bb();
const jR = ({
  text: e,
  speed: t = 20,
  // default speed: 20ms per character (configurable via ChatUI props)
  onComplete: n
}) => {
  const [r, i] = _e(""), [s, o] = _e(0), [a, c] = _e("");
  return me(() => {
    c(e), i(""), o(0);
  }, [e]), me(() => {
    if (s >= a.length) {
      n?.();
      return;
    }
    const l = setTimeout(() => {
      i((u) => u + a[s]), o((u) => u + 1);
    }, t);
    return () => clearTimeout(l);
  }, [s, a, t, n]), /* @__PURE__ */ x.jsx("span", { children: r });
};
function Ip(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Ip(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Ce() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ip(e)) && (r && (r += " "), r += t);
  return r;
}
var zi = { exports: {} }, mu;
function $b() {
  if (mu) return zi.exports;
  mu = 1;
  var e = typeof Reflect == "object" ? Reflect : null, t = e && typeof e.apply == "function" ? e.apply : function(_, O, k) {
    return Function.prototype.apply.call(_, O, k);
  }, n;
  e && typeof e.ownKeys == "function" ? n = e.ownKeys : Object.getOwnPropertySymbols ? n = function(_) {
    return Object.getOwnPropertyNames(_).concat(Object.getOwnPropertySymbols(_));
  } : n = function(_) {
    return Object.getOwnPropertyNames(_);
  };
  function r(S) {
    console && console.warn && console.warn(S);
  }
  var i = Number.isNaN || function(_) {
    return _ !== _;
  };
  function s() {
    s.init.call(this);
  }
  zi.exports = s, zi.exports.once = w, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
  var o = 10;
  function a(S) {
    if (typeof S != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof S);
  }
  Object.defineProperty(s, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
      return o;
    },
    set: function(S) {
      if (typeof S != "number" || S < 0 || i(S))
        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + S + ".");
      o = S;
    }
  }), s.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  }, s.prototype.setMaxListeners = function(_) {
    if (typeof _ != "number" || _ < 0 || i(_))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + _ + ".");
    return this._maxListeners = _, this;
  };
  function c(S) {
    return S._maxListeners === void 0 ? s.defaultMaxListeners : S._maxListeners;
  }
  s.prototype.getMaxListeners = function() {
    return c(this);
  }, s.prototype.emit = function(_) {
    for (var O = [], k = 1; k < arguments.length; k++) O.push(arguments[k]);
    var P = _ === "error", R = this._events;
    if (R !== void 0)
      P = P && R.error === void 0;
    else if (!P)
      return !1;
    if (P) {
      var L;
      if (O.length > 0 && (L = O[0]), L instanceof Error)
        throw L;
      var I = new Error("Unhandled error." + (L ? " (" + L.message + ")" : ""));
      throw I.context = L, I;
    }
    var V = R[_];
    if (V === void 0)
      return !1;
    if (typeof V == "function")
      t(V, this, O);
    else
      for (var q = V.length, $ = g(V, q), k = 0; k < q; ++k)
        t($[k], this, O);
    return !0;
  };
  function l(S, _, O, k) {
    var P, R, L;
    if (a(O), R = S._events, R === void 0 ? (R = S._events = /* @__PURE__ */ Object.create(null), S._eventsCount = 0) : (R.newListener !== void 0 && (S.emit(
      "newListener",
      _,
      O.listener ? O.listener : O
    ), R = S._events), L = R[_]), L === void 0)
      L = R[_] = O, ++S._eventsCount;
    else if (typeof L == "function" ? L = R[_] = k ? [O, L] : [L, O] : k ? L.unshift(O) : L.push(O), P = c(S), P > 0 && L.length > P && !L.warned) {
      L.warned = !0;
      var I = new Error("Possible EventEmitter memory leak detected. " + L.length + " " + String(_) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      I.name = "MaxListenersExceededWarning", I.emitter = S, I.type = _, I.count = L.length, r(I);
    }
    return S;
  }
  s.prototype.addListener = function(_, O) {
    return l(this, _, O, !1);
  }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(_, O) {
    return l(this, _, O, !0);
  };
  function u() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function f(S, _, O) {
    var k = { fired: !1, wrapFn: void 0, target: S, type: _, listener: O }, P = u.bind(k);
    return P.listener = O, k.wrapFn = P, P;
  }
  s.prototype.once = function(_, O) {
    return a(O), this.on(_, f(this, _, O)), this;
  }, s.prototype.prependOnceListener = function(_, O) {
    return a(O), this.prependListener(_, f(this, _, O)), this;
  }, s.prototype.removeListener = function(_, O) {
    var k, P, R, L, I;
    if (a(O), P = this._events, P === void 0)
      return this;
    if (k = P[_], k === void 0)
      return this;
    if (k === O || k.listener === O)
      --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete P[_], P.removeListener && this.emit("removeListener", _, k.listener || O));
    else if (typeof k != "function") {
      for (R = -1, L = k.length - 1; L >= 0; L--)
        if (k[L] === O || k[L].listener === O) {
          I = k[L].listener, R = L;
          break;
        }
      if (R < 0)
        return this;
      R === 0 ? k.shift() : y(k, R), k.length === 1 && (P[_] = k[0]), P.removeListener !== void 0 && this.emit("removeListener", _, I || O);
    }
    return this;
  }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(_) {
    var O, k, P;
    if (k = this._events, k === void 0)
      return this;
    if (k.removeListener === void 0)
      return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : k[_] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete k[_]), this;
    if (arguments.length === 0) {
      var R = Object.keys(k), L;
      for (P = 0; P < R.length; ++P)
        L = R[P], L !== "removeListener" && this.removeAllListeners(L);
      return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
    }
    if (O = k[_], typeof O == "function")
      this.removeListener(_, O);
    else if (O !== void 0)
      for (P = O.length - 1; P >= 0; P--)
        this.removeListener(_, O[P]);
    return this;
  };
  function h(S, _, O) {
    var k = S._events;
    if (k === void 0)
      return [];
    var P = k[_];
    return P === void 0 ? [] : typeof P == "function" ? O ? [P.listener || P] : [P] : O ? b(P) : g(P, P.length);
  }
  s.prototype.listeners = function(_) {
    return h(this, _, !0);
  }, s.prototype.rawListeners = function(_) {
    return h(this, _, !1);
  }, s.listenerCount = function(S, _) {
    return typeof S.listenerCount == "function" ? S.listenerCount(_) : p.call(S, _);
  }, s.prototype.listenerCount = p;
  function p(S) {
    var _ = this._events;
    if (_ !== void 0) {
      var O = _[S];
      if (typeof O == "function")
        return 1;
      if (O !== void 0)
        return O.length;
    }
    return 0;
  }
  s.prototype.eventNames = function() {
    return this._eventsCount > 0 ? n(this._events) : [];
  };
  function g(S, _) {
    for (var O = new Array(_), k = 0; k < _; ++k)
      O[k] = S[k];
    return O;
  }
  function y(S, _) {
    for (; _ + 1 < S.length; _++)
      S[_] = S[_ + 1];
    S.pop();
  }
  function b(S) {
    for (var _ = new Array(S.length), O = 0; O < _.length; ++O)
      _[O] = S[O].listener || S[O];
    return _;
  }
  function w(S, _) {
    return new Promise(function(O, k) {
      function P(L) {
        S.removeListener(_, R), k(L);
      }
      function R() {
        typeof S.removeListener == "function" && S.removeListener("error", P), O([].slice.call(arguments));
      }
      C(S, _, R, { once: !0 }), _ !== "error" && M(S, P, { once: !0 });
    });
  }
  function M(S, _, O) {
    typeof S.on == "function" && C(S, "error", _, O);
  }
  function C(S, _, O, k) {
    if (typeof S.on == "function")
      k.once ? S.once(_, O) : S.on(_, O);
    else if (typeof S.addEventListener == "function")
      S.addEventListener(_, function P(R) {
        k.once && S.removeEventListener(_, P), O(R);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof S);
  }
  return zi.exports;
}
var Vb = $b();
const Ub = /* @__PURE__ */ Ib(Vb);
var Ue = [];
for (var To = 0; To < 256; ++To)
  Ue.push((To + 256).toString(16).slice(1));
function zb(e, t = 0) {
  return (Ue[e[t + 0]] + Ue[e[t + 1]] + Ue[e[t + 2]] + Ue[e[t + 3]] + "-" + Ue[e[t + 4]] + Ue[e[t + 5]] + "-" + Ue[e[t + 6]] + Ue[e[t + 7]] + "-" + Ue[e[t + 8]] + Ue[e[t + 9]] + "-" + Ue[e[t + 10]] + Ue[e[t + 11]] + Ue[e[t + 12]] + Ue[e[t + 13]] + Ue[e[t + 14]] + Ue[e[t + 15]]).toLowerCase();
}
var Wi, Wb = new Uint8Array(16);
function qb() {
  if (!Wi && (Wi = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Wi))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Wi(Wb);
}
var Hb = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const gu = {
  randomUUID: Hb
};
function Gb(e, t, n) {
  if (gu.randomUUID && !t && !e)
    return gu.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || qb)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    n = n || 0;
    for (var i = 0; i < 16; ++i)
      t[n + i] = r[i];
    return t;
  }
  return zb(r);
}
const Jb = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, Np = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, Pe = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
}, Ye = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, cn = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
class F {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(t, n) {
    const r = n.match(t);
    return r && r.length > 0 && r[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(t, n) {
    const r = n.match(t);
    return r && r.length > 1 && r[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(t, n, r) {
    if (t.test(n))
      return r;
  }
  static getWindowsVersionName(t) {
    switch (t) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(t) {
    const n = t.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), n[0] === 10)
      switch (n[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(t) {
    const n = t.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), !(n[0] === 1 && n[1] < 5)) {
      if (n[0] === 1 && n[1] < 6) return "Cupcake";
      if (n[0] === 1 && n[1] >= 6) return "Donut";
      if (n[0] === 2 && n[1] < 2) return "Eclair";
      if (n[0] === 2 && n[1] === 2) return "Froyo";
      if (n[0] === 2 && n[1] > 2) return "Gingerbread";
      if (n[0] === 3) return "Honeycomb";
      if (n[0] === 4 && n[1] < 1) return "Ice Cream Sandwich";
      if (n[0] === 4 && n[1] < 4) return "Jelly Bean";
      if (n[0] === 4 && n[1] >= 4) return "KitKat";
      if (n[0] === 5) return "Lollipop";
      if (n[0] === 6) return "Marshmallow";
      if (n[0] === 7) return "Nougat";
      if (n[0] === 8) return "Oreo";
      if (n[0] === 9) return "Pie";
    }
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(t) {
    return t.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(t, n, r = !1) {
    const i = F.getVersionPrecision(t), s = F.getVersionPrecision(n);
    let o = Math.max(i, s), a = 0;
    const c = F.map([t, n], (l) => {
      const u = o - F.getVersionPrecision(l), f = l + new Array(u + 1).join(".0");
      return F.map(f.split("."), (h) => new Array(20 - h.length).join("0") + h).reverse();
    });
    for (r && (a = o - Math.min(i, s)), o -= 1; o >= a; ) {
      if (c[0][o] > c[1][o])
        return 1;
      if (c[0][o] === c[1][o]) {
        if (o === a)
          return 0;
        o -= 1;
      } else if (c[0][o] < c[1][o])
        return -1;
    }
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(t, n) {
    const r = [];
    let i;
    if (Array.prototype.map)
      return Array.prototype.map.call(t, n);
    for (i = 0; i < t.length; i += 1)
      r.push(n(t[i]));
    return r;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(t, n) {
    let r, i;
    if (Array.prototype.find)
      return Array.prototype.find.call(t, n);
    for (r = 0, i = t.length; r < i; r += 1) {
      const s = t[r];
      if (n(s, r))
        return s;
    }
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(t, ...n) {
    const r = t;
    let i, s;
    if (Object.assign)
      return Object.assign(t, ...n);
    for (i = 0, s = n.length; i < s; i += 1) {
      const o = n[i];
      typeof o == "object" && o !== null && Object.keys(o).forEach((c) => {
        r[c] = o[c];
      });
    }
    return t;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(t) {
    return Jb[t];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(t) {
    return Np[t] || "";
  }
}
const be = /version\/(\d+(\.?_?\d+)+)/i, Kb = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(e) {
      const t = {
        name: "Googlebot"
      }, n = F.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(e) {
      const t = {
        name: "Opera"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(e) {
      const t = {
        name: "Opera"
      }, n = F.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(e) {
      const t = {
        name: "Samsung Internet for Android"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/Whale/i],
    describe(e) {
      const t = {
        name: "NAVER Whale Browser"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(e) {
      const t = {
        name: "MZ Browser"
      }, n = F.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/focus/i],
    describe(e) {
      const t = {
        name: "Focus"
      }, n = F.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/swing/i],
    describe(e) {
      const t = {
        name: "Swing"
      }, n = F.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/coast/i],
    describe(e) {
      const t = {
        name: "Opera Coast"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(e) {
      const t = {
        name: "Opera Touch"
      }, n = F.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/yabrowser/i],
    describe(e) {
      const t = {
        name: "Yandex Browser"
      }, n = F.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(e) {
      const t = {
        name: "UC Browser"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(e) {
      const t = {
        name: "Maxthon"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/epiphany/i],
    describe(e) {
      const t = {
        name: "Epiphany"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/puffin/i],
    describe(e) {
      const t = {
        name: "Puffin"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/sleipnir/i],
    describe(e) {
      const t = {
        name: "Sleipnir"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/k-meleon/i],
    describe(e) {
      const t = {
        name: "K-Meleon"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/micromessenger/i],
    describe(e) {
      const t = {
        name: "WeChat"
      }, n = F.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(e) {
      const t = {
        name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
      }, n = F.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/msie|trident/i],
    describe(e) {
      const t = {
        name: "Internet Explorer"
      }, n = F.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/\sedg\//i],
    describe(e) {
      const t = {
        name: "Microsoft Edge"
      }, n = F.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(e) {
      const t = {
        name: "Microsoft Edge"
      }, n = F.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/vivaldi/i],
    describe(e) {
      const t = {
        name: "Vivaldi"
      }, n = F.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/seamonkey/i],
    describe(e) {
      const t = {
        name: "SeaMonkey"
      }, n = F.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/sailfish/i],
    describe(e) {
      const t = {
        name: "Sailfish"
      }, n = F.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/silk/i],
    describe(e) {
      const t = {
        name: "Amazon Silk"
      }, n = F.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/phantom/i],
    describe(e) {
      const t = {
        name: "PhantomJS"
      }, n = F.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/slimerjs/i],
    describe(e) {
      const t = {
        name: "SlimerJS"
      }, n = F.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = {
        name: "BlackBerry"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = {
        name: "WebOS Browser"
      }, n = F.getFirstMatch(be, e) || F.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/bada/i],
    describe(e) {
      const t = {
        name: "Bada"
      }, n = F.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/tizen/i],
    describe(e) {
      const t = {
        name: "Tizen"
      }, n = F.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/qupzilla/i],
    describe(e) {
      const t = {
        name: "QupZilla"
      }, n = F.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(e) {
      const t = {
        name: "Firefox"
      }, n = F.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/electron/i],
    describe(e) {
      const t = {
        name: "Electron"
      }, n = F.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(e) {
      const t = {
        name: "Miui"
      }, n = F.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/chromium/i],
    describe(e) {
      const t = {
        name: "Chromium"
      }, n = F.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(e) {
      const t = {
        name: "Chrome"
      }, n = F.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  {
    test: [/GSA/i],
    describe(e) {
      const t = {
        name: "Google Search"
      }, n = F.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Android Browser */
  {
    test(e) {
      const t = !e.test(/like android/i), n = e.test(/android/i);
      return t && n;
    },
    describe(e) {
      const t = {
        name: "Android Browser"
      }, n = F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(e) {
      const t = {
        name: "PlayStation 4"
      }, n = F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(e) {
      const t = {
        name: "Safari"
      }, n = F.getFirstMatch(be, e);
      return n && (t.version = n), t;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(e) {
      const t = /^(.*)\/(.*) /, n = /^(.*)\/(.*)[ \t]\((.*)/, i = e.search("\\(") !== -1 ? n : t;
      return {
        name: F.getFirstMatch(i, e),
        version: F.getSecondMatch(i, e)
      };
    }
  }
], Yb = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(e) {
      const t = F.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
      return {
        name: Ye.Roku,
        version: t
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(e) {
      const t = F.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
      return {
        name: Ye.WindowsPhone,
        version: t
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(e) {
      const t = F.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), n = F.getWindowsVersionName(t);
      return {
        name: Ye.Windows,
        version: t,
        versionName: n
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(e) {
      const t = {
        name: Ye.iOS
      }, n = F.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
      return n && (t.version = n), t;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(e) {
      const t = F.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), n = F.getMacOSVersionName(t), r = {
        name: Ye.MacOS,
        version: t
      };
      return n && (r.versionName = n), r;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(e) {
      const t = F.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
      return {
        name: Ye.iOS,
        version: t
      };
    }
  },
  /* Android */
  {
    test(e) {
      const t = !e.test(/like android/i), n = e.test(/android/i);
      return t && n;
    },
    describe(e) {
      const t = F.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), n = F.getAndroidVersionName(t), r = {
        name: Ye.Android,
        version: t
      };
      return n && (r.versionName = n), r;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(e) {
      const t = F.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), n = {
        name: Ye.WebOS
      };
      return t && t.length && (n.version = t), n;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(e) {
      const t = F.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || F.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || F.getFirstMatch(/\bbb(\d+)/i, e);
      return {
        name: Ye.BlackBerry,
        version: t
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(e) {
      const t = F.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
      return {
        name: Ye.Bada,
        version: t
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(e) {
      const t = F.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: Ye.Tizen,
        version: t
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: Ye.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: Ye.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(e) {
      const t = F.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
      return {
        name: Ye.PlayStation4,
        version: t
      };
    }
  }
], Xb = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(e) {
      const t = F.getFirstMatch(/(can-l01)/i, e) && "Nova", n = {
        type: Pe.mobile,
        vendor: "Huawei"
      };
      return t && (n.model = t), n;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: Pe.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: Pe.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: Pe.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: Pe.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: Pe.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: Pe.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(e) {
      const t = e.test(/ipod|iphone/i), n = e.test(/like (ipod|iphone)/i);
      return t && !n;
    },
    describe(e) {
      const t = F.getFirstMatch(/(ipod|iphone)/i, e);
      return {
        type: Pe.mobile,
        vendor: "Apple",
        model: t
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: Pe.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: Pe.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(e) {
      return e.getBrowserName(!0) === "blackberry";
    },
    describe() {
      return {
        type: Pe.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(e) {
      return e.getBrowserName(!0) === "bada";
    },
    describe() {
      return {
        type: Pe.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(e) {
      return e.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: Pe.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(e) {
      const t = Number(String(e.getOSVersion()).split(".")[0]);
      return e.getOSName(!0) === "android" && t >= 3;
    },
    describe() {
      return {
        type: Pe.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(e) {
      return e.getOSName(!0) === "android";
    },
    describe() {
      return {
        type: Pe.mobile
      };
    }
  },
  /* desktop */
  {
    test(e) {
      return e.getOSName(!0) === "macos";
    },
    describe() {
      return {
        type: Pe.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(e) {
      return e.getOSName(!0) === "windows";
    },
    describe() {
      return {
        type: Pe.desktop
      };
    }
  },
  /* Linux */
  {
    test(e) {
      return e.getOSName(!0) === "linux";
    },
    describe() {
      return {
        type: Pe.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(e) {
      return e.getOSName(!0) === "playstation 4";
    },
    describe() {
      return {
        type: Pe.tv
      };
    }
  },
  /* Roku */
  {
    test(e) {
      return e.getOSName(!0) === "roku";
    },
    describe() {
      return {
        type: Pe.tv
      };
    }
  }
], Qb = [
  /* EdgeHTML */
  {
    test(e) {
      return e.getBrowserName(!0) === "microsoft edge";
    },
    describe(e) {
      if (/\sedg\//i.test(e))
        return {
          name: cn.Blink
        };
      const n = F.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
      return {
        name: cn.EdgeHTML,
        version: n
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(e) {
      const t = {
        name: cn.Trident
      }, n = F.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Presto */
  {
    test(e) {
      return e.test(/presto/i);
    },
    describe(e) {
      const t = {
        name: cn.Presto
      }, n = F.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Gecko */
  {
    test(e) {
      const t = e.test(/gecko/i), n = e.test(/like gecko/i);
      return t && !n;
    },
    describe(e) {
      const t = {
        name: cn.Gecko
      }, n = F.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: cn.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(e) {
      const t = {
        name: cn.WebKit
      }, n = F.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
      return n && (t.version = n), t;
    }
  }
];
class vu {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(t, n = !1) {
    if (t == null || t === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = t, this.parsedResult = {}, n !== !0 && this.parse();
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(t) {
    return t.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const t = F.find(Kb, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(t) {
    return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const t = F.find(Yb, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(t) {
    const { name: n } = this.getOS();
    return t ? String(n).toLowerCase() || "" : n || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(t = !1) {
    const { type: n } = this.getPlatform();
    return t ? String(n).toLowerCase() || "" : n || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const t = F.find(Xb, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(t) {
    return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const t = F.find(Qb, (n) => {
      if (typeof n.test == "function")
        return n.test(this);
      if (n.test instanceof Array)
        return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return F.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(t) {
    const n = {};
    let r = 0;
    const i = {};
    let s = 0;
    if (Object.keys(t).forEach((a) => {
      const c = t[a];
      typeof c == "string" ? (i[a] = c, s += 1) : typeof c == "object" && (n[a] = c, r += 1);
    }), r > 0) {
      const a = Object.keys(n), c = F.find(a, (u) => this.isOS(u));
      if (c) {
        const u = this.satisfies(n[c]);
        if (u !== void 0)
          return u;
      }
      const l = F.find(
        a,
        (u) => this.isPlatform(u)
      );
      if (l) {
        const u = this.satisfies(n[l]);
        if (u !== void 0)
          return u;
      }
    }
    if (s > 0) {
      const a = Object.keys(i), c = F.find(a, (l) => this.isBrowser(l, !0));
      if (c !== void 0)
        return this.compareVersion(i[c]);
    }
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(t, n = !1) {
    const r = this.getBrowserName().toLowerCase();
    let i = t.toLowerCase();
    const s = F.getBrowserTypeByAlias(i);
    return n && s && (i = s.toLowerCase()), i === r;
  }
  compareVersion(t) {
    let n = [0], r = t, i = !1;
    const s = this.getBrowserVersion();
    if (typeof s == "string")
      return t[0] === ">" || t[0] === "<" ? (r = t.substr(1), t[1] === "=" ? (i = !0, r = t.substr(2)) : n = [], t[0] === ">" ? n.push(1) : n.push(-1)) : t[0] === "=" ? r = t.substr(1) : t[0] === "~" && (i = !0, r = t.substr(1)), n.indexOf(
        F.compareVersions(s, r, i)
      ) > -1;
  }
  isOS(t) {
    return this.getOSName(!0) === String(t).toLowerCase();
  }
  isPlatform(t) {
    return this.getPlatformType(!0) === String(t).toLowerCase();
  }
  isEngine(t) {
    return this.getEngineName(!0) === String(t).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(t, n = !1) {
    return this.isBrowser(t, n) || this.isOS(t) || this.isPlatform(t);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(t = []) {
    return t.some((n) => this.is(n));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class Zb {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(t, n = !1) {
    if (typeof t != "string")
      throw new Error("UserAgent should be a string");
    return new vu(t, n);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(t) {
    return new vu(t).getResult();
  }
  static get BROWSER_MAP() {
    return Np;
  }
  static get ENGINE_MAP() {
    return cn;
  }
  static get OS_MAP() {
    return Ye;
  }
  static get PLATFORMS_MAP() {
    return Pe;
  }
}
function Sn(e, t) {
  return Object.keys(t).forEach(function(n) {
    n === "default" || n === "__esModule" || Object.prototype.hasOwnProperty.call(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), e;
}
function ew(e) {
  return e && e.__esModule ? e.default : e;
}
function Be(e, t, n, r) {
  Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
}
var Zs = {}, Fp = {};
Be(Fp, "PipecatClient", () => Dr);
var _r = {};
_r = JSON.parse('{"name":"@pipecat-ai/client-js","version":"1.0.0","license":"BSD-2-Clause","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","source":"index.ts","repository":{"type":"git","url":"git+https://github.com/pipecat-ai/pipecat-client-web.git"},"files":["dist","package.json","README.md"],"scripts":{"build":"jest --silent --passWithNoTests && parcel build --no-cache","dev":"parcel watch","lint":"eslint . --report-unused-disable-directives --max-warnings 0","test":"jest"},"jest":{"preset":"ts-jest","testEnvironment":"jsdom"},"devDependencies":{"@jest/globals":"^29.7.0","@types/clone-deep":"^4.0.4","@types/jest":"^29.5.12","@types/uuid":"^10.0.0","eslint":"^9.11.1","eslint-config-prettier":"^9.1.0","eslint-plugin-simple-import-sort":"^12.1.1","jest":"^29.7.0","jest-environment-jsdom":"^30.0.2","ts-jest":"^29.2.5"},"dependencies":{"@types/events":"^3.0.3","bowser":"^2.11.0","clone-deep":"^4.0.1","events":"^3.3.0","typed-emitter":"^2.1.0","uuid":"^10.0.0"}}');
var eo = {}, tw = {}, Qn = {};
Be(Qn, "RTVIError", () => Ct);
Be(Qn, "ConnectionTimeoutError", () => nw);
Be(Qn, "StartBotError", () => Ra);
Be(Qn, "TransportStartError", () => Bp);
Be(Qn, "BotNotReadyError", () => $p);
Be(Qn, "UnsupportedFeatureError", () => rw);
class Ct extends Error {
  constructor(t, n) {
    super(t), this.status = n;
  }
}
class nw extends Ct {
  constructor(t) {
    super(t ?? "Bot did not enter ready state within the specified timeout period.");
  }
}
class Ra extends Ct {
  constructor(t, n) {
    super(t ?? "Failed to connect / invalid auth bundle from base url", n ?? 500), this.error = "invalid-request-error";
  }
}
class Bp extends Ct {
  constructor(t) {
    super(t ?? "Unable to connect to transport");
  }
}
class $p extends Ct {
  constructor(t) {
    super(t ?? "Attempt to call action on transport when not in 'ready' state.");
  }
}
class rw extends Ct {
  constructor(t, n, r) {
    let i = `${t} not supported${r ? `: ${r}` : ""}`;
    n && (i = `${n} does not support ${t}${r ? `: ${r}` : ""}`), super(i), this.feature = t;
  }
}
var Vp = {};
Be(Vp, "RTVIEvent", () => X);
var X;
(function(e) {
  e.Connected = "connected", e.Disconnected = "disconnected", e.TransportStateChanged = "transportStateChanged", e.BotConnected = "botConnected", e.BotReady = "botReady", e.BotDisconnected = "botDisconnected", e.Error = "error", e.ServerMessage = "serverMessage", e.ServerResponse = "serverResponse", e.MessageError = "messageError", e.Metrics = "metrics", e.BotStartedSpeaking = "botStartedSpeaking", e.BotStoppedSpeaking = "botStoppedSpeaking", e.UserStartedSpeaking = "userStartedSpeaking", e.UserStoppedSpeaking = "userStoppedSpeaking", e.UserTranscript = "userTranscript", e.BotTranscript = "botTranscript", e.BotLlmText = "botLlmText", e.BotLlmStarted = "botLlmStarted", e.BotLlmStopped = "botLlmStopped", e.LLMFunctionCall = "llmFunctionCall", e.BotLlmSearchResponse = "botLlmSearchResponse", e.BotTtsText = "botTtsText", e.BotTtsStarted = "botTtsStarted", e.BotTtsStopped = "botTtsStopped", e.ParticipantConnected = "participantConnected", e.ParticipantLeft = "participantLeft", e.TrackStarted = "trackStarted", e.TrackStopped = "trackStopped", e.ScreenTrackStarted = "screenTrackStarted", e.ScreenTrackStopped = "screenTrackStopped", e.ScreenShareError = "screenShareError", e.LocalAudioLevel = "localAudioLevel", e.RemoteAudioLevel = "remoteAudioLevel", e.AvailableCamsUpdated = "availableCamsUpdated", e.AvailableMicsUpdated = "availableMicsUpdated", e.AvailableSpeakersUpdated = "availableSpeakersUpdated", e.CamUpdated = "camUpdated", e.MicUpdated = "micUpdated", e.SpeakerUpdated = "speakerUpdated";
})(X || (X = {}));
var jr = {};
Be(jr, "RTVI_PROTOCOL_VERSION", () => Up);
Be(jr, "RTVI_MESSAGE_LABEL", () => zp);
Be(jr, "RTVIMessageType", () => ue);
Be(jr, "setAboutClient", () => zc);
Be(jr, "RTVIMessage", () => Et);
const Up = "1.0.0", zp = "rtvi-ai";
var ue;
(function(e) {
  e.CLIENT_READY = "client-ready", e.DISCONNECT_BOT = "disconnect-bot", e.CLIENT_MESSAGE = "client-message", e.APPEND_TO_CONTEXT = "append-to-context", e.BOT_READY = "bot-ready", e.ERROR = "error", e.METRICS = "metrics", e.SERVER_MESSAGE = "server-message", e.SERVER_RESPONSE = "server-response", e.ERROR_RESPONSE = "error-response", e.APPEND_TO_CONTEXT_RESULT = "append-to-context-result", e.USER_TRANSCRIPTION = "user-transcription", e.BOT_TRANSCRIPTION = "bot-transcription", e.USER_STARTED_SPEAKING = "user-started-speaking", e.USER_STOPPED_SPEAKING = "user-stopped-speaking", e.BOT_STARTED_SPEAKING = "bot-started-speaking", e.BOT_STOPPED_SPEAKING = "bot-stopped-speaking", e.USER_LLM_TEXT = "user-llm-text", e.BOT_LLM_TEXT = "bot-llm-text", e.BOT_LLM_STARTED = "bot-llm-started", e.BOT_LLM_STOPPED = "bot-llm-stopped", e.LLM_FUNCTION_CALL = "llm-function-call", e.LLM_FUNCTION_CALL_RESULT = "llm-function-call-result", e.BOT_LLM_SEARCH_RESPONSE = "bot-llm-search-response", e.BOT_TTS_TEXT = "bot-tts-text", e.BOT_TTS_STARTED = "bot-tts-started", e.BOT_TTS_STOPPED = "bot-tts-stopped";
})(ue || (ue = {}));
let ii;
function zc(e) {
  ii ? ii = {
    ...ii,
    ...e
  } : ii = e;
}
class Et {
  constructor(t, n, r) {
    this.label = zp, this.type = t, this.data = n, this.id = r || Gb().slice(0, 8);
  }
  // Outbound message types
  static clientReady() {
    return new Et(ue.CLIENT_READY, {
      version: Up,
      about: ii || {
        library: _r.name,
        library_version: _r.version
      }
    });
  }
  static disconnectBot() {
    return new Et(ue.DISCONNECT_BOT, {});
  }
  static error(t, n = !1) {
    return new Et(ue.ERROR, {
      message: t,
      fatal: n
    });
  }
}
Sn(eo, tw);
Sn(eo, Qn);
Sn(eo, Vp);
Sn(eo, jr);
function to(e, t, n) {
  const r = n.value;
  return n.value = function(...i) {
    if (this.state === "ready") return r.apply(this, i);
    throw new $p(`Attempt to call ${t.toString()} when transport not in ready state. Await connect() first.`);
  }, n;
}
var Wp = {};
Be(Wp, "MessageDispatcher", () => qp);
var Wc = {};
Be(Wc, "LogLevel", () => pn);
Be(Wc, "logger", () => Z);
var pn;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.ERROR = 1] = "ERROR", e[e.WARN = 2] = "WARN", e[e.INFO = 3] = "INFO", e[e.DEBUG = 4] = "DEBUG";
})(pn || (pn = {}));
class ar {
  constructor() {
    this.level = pn.DEBUG;
  }
  static getInstance() {
    return ar.instance || (ar.instance = new ar()), ar.instance;
  }
  setLevel(t) {
    this.level = t;
  }
  debug(...t) {
    this.level >= pn.DEBUG && console.debug(...t);
  }
  info(...t) {
    this.level >= pn.INFO && console.info(...t);
  }
  warn(...t) {
    this.level >= pn.WARN && console.warn(...t);
  }
  error(...t) {
    this.level >= pn.ERROR && console.error(...t);
  }
}
const Z = ar.getInstance();
class qp {
  constructor(t) {
    this._queue = new Array(), this._gcInterval = void 0, this._queue = [], this._sendMethod = t;
  }
  disconnect() {
    this.clearQueue(), clearInterval(this._gcInterval), this._gcInterval = void 0;
  }
  dispatch(t, n = ue.CLIENT_MESSAGE, r = 1e4) {
    this._gcInterval || (this._gcInterval = setInterval(() => {
      this._gc();
    }, 2e3));
    const i = new Et(n, t), s = new Promise((o, a) => {
      this._queue.push({
        message: i,
        timestamp: Date.now(),
        timeout: r,
        resolve: o,
        reject: a
      });
    });
    Z.debug("[MessageDispatcher] dispatch", i);
    try {
      this._sendMethod(i);
    } catch (o) {
      return Z.error("[MessageDispatcher] Error sending message", o), Promise.reject(o);
    }
    return this._gc(), s;
  }
  clearQueue() {
    this._queue = [];
  }
  _resolveReject(t, n = !0) {
    const r = this._queue.find((i) => i.message.id === t.id);
    return r && (n ? (Z.debug("[MessageDispatcher] Resolve", t), r.resolve(t)) : (Z.debug("[MessageDispatcher] Reject", t), r.reject(t)), this._queue = this._queue.filter((i) => i.message.id !== t.id), Z.debug("[MessageDispatcher] Queue", this._queue)), t;
  }
  resolve(t) {
    return this._resolveReject(t, !0);
  }
  reject(t) {
    return this._resolveReject(t, !1);
  }
  _gc() {
    const t = [];
    this._queue = this._queue.filter((n) => {
      const r = Date.now() - n.timestamp < n.timeout;
      return r || t.push(n), r;
    }), t.forEach((n) => {
      n.message.type === ue.CLIENT_MESSAGE && n.reject(new Et(ue.ERROR_RESPONSE, {
        error: "Timed out waiting for response",
        msgType: n.message.data.t,
        data: n.message.data.d,
        fatal: !1
      }));
    }), Z.debug("[MessageDispatcher] GC", this._queue);
  }
}
function iw(e) {
  return typeof e == "object" && e !== null && Object.keys(e).includes("endpoint") ? typeof e.endpoint == "string" : !1;
}
async function sw(e, t) {
  t || (t = new AbortController());
  let n;
  return new Promise((r, i) => {
    (async () => (e.timeout && (n = setTimeout(async () => {
      t.abort(), i(new Error("Timed out"));
    }, e.timeout)), Z.debug(`[Pipecat Client] Fetching connection params from ${e.endpoint}`), fetch(e.endpoint, {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
        ...Object.fromEntries((e.headers ?? new Headers()).entries())
      }),
      body: JSON.stringify(e.requestData),
      signal: t?.signal
    }).then((s) => {
      if (Z.debug(`[Pipecat Client] Received response from ${e.endpoint}`, s), !s.ok) throw s;
      s.json().then((o) => r(o));
    }).catch((s) => {
      Z.error(`[Pipecat Client] Error fetching connection params: ${s}`), s instanceof Response ? s.json().then((o) => {
        i(new Ra(o.info ?? o.detail ?? s.statusText, s.status));
      }) : i(new Ra());
    }).finally(() => {
      n && clearTimeout(n);
    })))();
  });
}
var qc = {};
Be(qc, "Transport", () => Hp);
Be(qc, "TransportWrapper", () => Gp);
class Hp {
  constructor() {
    this._state = "disconnected";
  }
  /**
   * Establishes a connection with the remote server. This is the main entry
   * point for the transport to start sending and receiving media and messages.
   * This is called from PipecatClient.connect() and should not be called directly.
   * @param connectParams - This type will ultimately be defned by the transport
   * implementation. It is used to pass connection parameters to the transport.
   */
  connect(t) {
    this._abortController = new AbortController();
    let n = t;
    try {
      n = this._validateConnectionParams(t);
    } catch (r) {
      throw new Ct(`Invalid connection params: ${r.message}. Please check your connection params and try again.`);
    }
    return this._connect(n);
  }
  /**
   * Disconnects the transport from the remote server. This is called from
   * PipecatClient.disconnect() and should not be called directly.
   */
  disconnect() {
    return this._abortController && this._abortController.abort(), this._disconnect();
  }
}
class Gp {
  constructor(t) {
    this._transport = t, this._proxy = new Proxy(this._transport, {
      get: (n, r, i) => {
        if (typeof n[r] == "function") {
          let s;
          switch (String(r)) {
            // Disable methods that modify the lifecycle of the call. These operations
            // should be performed via the Pipecat client in order to keep state in sync.
            case "initialize":
              s = "Direct calls to initialize() are disabled and used internally by the PipecatClient.";
              break;
            case "initDevices":
              s = "Direct calls to initDevices() are disabled. Please use the PipecatClient.initDevices() wrapper or let PipecatClient.connect() call it for you.";
              break;
            case "sendReadyMessage":
              s = "Direct calls to sendReadyMessage() are disabled and used internally by the PipecatClient.";
              break;
            case "connect":
              s = "Direct calls to connect() are disabled. Please use the PipecatClient.connect() wrapper.";
              break;
            case "disconnect":
              s = "Direct calls to disconnect() are disabled. Please use the PipecatClient.disconnect() wrapper.";
              break;
          }
          return s ? () => {
            throw new Error(s);
          } : (...o) => n[r](...o);
        }
        return Reflect.get(n, r, i);
      }
    });
  }
  get proxy() {
    return this._proxy;
  }
}
function ow() {
  let e = {
    library: _r.name,
    library_version: _r.version,
    platform_details: {}
  }, t = null;
  if (window?.navigator?.userAgent) try {
    t = Zb.parse(window.navigator.userAgent);
  } catch {
  }
  return t?.browser?.name && (e.platform_details.browser = t.browser.name), t?.browser?.name === "Safari" && !t.browser.version ? e.platform_details.browser_version = "Web View" : t?.browser?.version && (e.platform_details.browser_version = t.browser.version), t?.platform?.type && (e.platform_details.platform_type = t.platform.type), t?.engine?.name && (e.platform_details.engine = t.engine.name), t?.os && (e.platform = t.os.name, e.platform_version = t.os.version), e;
}
var no = function(e, t, n, r) {
  var i = arguments.length, s = i < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(e, t, n, r);
  else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
  return i > 3 && s && Object.defineProperty(t, n, s), s;
};
class aw extends Ub {
}
class Dr extends aw {
  constructor(t) {
    super(), this._functionCallCallbacks = {}, zc(ow()), this._transport = t.transport, this._transportWrapper = new Gp(this._transport);
    const n = {
      ...t.callbacks,
      onMessageError: (r) => {
        t?.callbacks?.onMessageError?.(r), this.emit(X.MessageError, r);
      },
      onError: (r) => {
        t?.callbacks?.onError?.(r);
        try {
          this.emit(X.Error, r);
        } catch {
          Z.debug("Could not emit error", r);
        }
        r.data?.fatal && (Z.error("Fatal error reported. Disconnecting..."), this.disconnect());
      },
      onConnected: () => {
        t?.callbacks?.onConnected?.(), this.emit(X.Connected);
      },
      onDisconnected: () => {
        t?.callbacks?.onDisconnected?.(), this.emit(X.Disconnected);
      },
      onTransportStateChanged: (r) => {
        t?.callbacks?.onTransportStateChanged?.(r), this.emit(X.TransportStateChanged, r);
      },
      onParticipantJoined: (r) => {
        t?.callbacks?.onParticipantJoined?.(r), this.emit(X.ParticipantConnected, r);
      },
      onParticipantLeft: (r) => {
        t?.callbacks?.onParticipantLeft?.(r), this.emit(X.ParticipantLeft, r);
      },
      onTrackStarted: (r, i) => {
        t?.callbacks?.onTrackStarted?.(r, i), this.emit(X.TrackStarted, r, i);
      },
      onTrackStopped: (r, i) => {
        t?.callbacks?.onTrackStopped?.(r, i), this.emit(X.TrackStopped, r, i);
      },
      onScreenTrackStarted: (r, i) => {
        t?.callbacks?.onScreenTrackStarted?.(r, i), this.emit(X.ScreenTrackStarted, r, i);
      },
      onScreenTrackStopped: (r, i) => {
        t?.callbacks?.onScreenTrackStopped?.(r, i), this.emit(X.ScreenTrackStopped, r, i);
      },
      onScreenShareError: (r) => {
        t?.callbacks?.onScreenShareError?.(r), this.emit(X.ScreenShareError, r);
      },
      onAvailableCamsUpdated: (r) => {
        t?.callbacks?.onAvailableCamsUpdated?.(r), this.emit(X.AvailableCamsUpdated, r);
      },
      onAvailableMicsUpdated: (r) => {
        t?.callbacks?.onAvailableMicsUpdated?.(r), this.emit(X.AvailableMicsUpdated, r);
      },
      onAvailableSpeakersUpdated: (r) => {
        t?.callbacks?.onAvailableSpeakersUpdated?.(r), this.emit(X.AvailableSpeakersUpdated, r);
      },
      onCamUpdated: (r) => {
        t?.callbacks?.onCamUpdated?.(r), this.emit(X.CamUpdated, r);
      },
      onMicUpdated: (r) => {
        t?.callbacks?.onMicUpdated?.(r), this.emit(X.MicUpdated, r);
      },
      onSpeakerUpdated: (r) => {
        t?.callbacks?.onSpeakerUpdated?.(r), this.emit(X.SpeakerUpdated, r);
      },
      onBotConnected: (r) => {
        t?.callbacks?.onBotConnected?.(r), this.emit(X.BotConnected, r);
      },
      onBotReady: (r) => {
        t?.callbacks?.onBotReady?.(r), this.emit(X.BotReady, r);
      },
      onBotDisconnected: (r) => {
        t?.callbacks?.onBotDisconnected?.(r), this.emit(X.BotDisconnected, r);
      },
      onBotStartedSpeaking: () => {
        t?.callbacks?.onBotStartedSpeaking?.(), this.emit(X.BotStartedSpeaking);
      },
      onBotStoppedSpeaking: () => {
        t?.callbacks?.onBotStoppedSpeaking?.(), this.emit(X.BotStoppedSpeaking);
      },
      onRemoteAudioLevel: (r, i) => {
        t?.callbacks?.onRemoteAudioLevel?.(r, i), this.emit(X.RemoteAudioLevel, r, i);
      },
      onUserStartedSpeaking: () => {
        t?.callbacks?.onUserStartedSpeaking?.(), this.emit(X.UserStartedSpeaking);
      },
      onUserStoppedSpeaking: () => {
        t?.callbacks?.onUserStoppedSpeaking?.(), this.emit(X.UserStoppedSpeaking);
      },
      onLocalAudioLevel: (r) => {
        t?.callbacks?.onLocalAudioLevel?.(r), this.emit(X.LocalAudioLevel, r);
      },
      onUserTranscript: (r) => {
        t?.callbacks?.onUserTranscript?.(r), this.emit(X.UserTranscript, r);
      },
      onBotTranscript: (r) => {
        t?.callbacks?.onBotTranscript?.(r), this.emit(X.BotTranscript, r);
      },
      onBotLlmText: (r) => {
        t?.callbacks?.onBotLlmText?.(r), this.emit(X.BotLlmText, r);
      },
      onBotLlmStarted: () => {
        t?.callbacks?.onBotLlmStarted?.(), this.emit(X.BotLlmStarted);
      },
      onBotLlmStopped: () => {
        t?.callbacks?.onBotLlmStopped?.(), this.emit(X.BotLlmStopped);
      },
      onBotTtsText: (r) => {
        t?.callbacks?.onBotTtsText?.(r), this.emit(X.BotTtsText, r);
      },
      onBotTtsStarted: () => {
        t?.callbacks?.onBotTtsStarted?.(), this.emit(X.BotTtsStarted);
      },
      onBotTtsStopped: () => {
        t?.callbacks?.onBotTtsStopped?.(), this.emit(X.BotTtsStopped);
      }
    };
    this._options = {
      ...t,
      callbacks: n,
      enableMic: t.enableMic ?? !0,
      enableCam: t.enableCam ?? !1,
      enableScreenShare: t.enableScreenShare ?? !1
    }, this._initialize(), Z.debug("[Pipecat Client] Initialized", this.version);
  }
  setLogLevel(t) {
    Z.setLevel(t);
  }
  // ------ Transport methods
  /**
   * Initialize local media devices
   */
  async initDevices() {
    Z.debug("[Pipecat Client] Initializing devices..."), await this._transport.initDevices();
  }
  /**
   * The `connect` function establishes a transport session and awaits a
   * bot-ready signal, handling various connection states and errors.
   * @param {TransportConnectionParams | ConnectionEndpoint} [connectParams] -
   * The `connectParams` parameter in the `connect` method can be either of type
   * `TransportConnectionParams` or `ConnectionEndpoint`. It is used to provide
   * connection parameters for establishing a transport session. If
   * `connectParams` is of type `ConnectionEndpoint`, the method will go through
   * an authentication process
   * @returns The `connect` method returns a Promise that resolves to an unknown value.
   */
  async connect(t) {
    if ([
      "authenticating",
      "connecting",
      "connected",
      "ready"
    ].includes(this._transport.state)) throw new Ct("Voice client has already been started. Please call disconnect() before starting again.");
    return new Promise((n, r) => {
      (async () => {
        this._startResolve = n, this._transport.state === "disconnected" && await this._transport.initDevices();
        try {
          let i;
          if (t)
            if (iw(t)) {
              if (this._transport.state = "authenticating", this._abortController = new AbortController(), i = await sw(t, this._abortController), this._abortController?.signal.aborted) return;
              this._transport.state = "authenticated";
            } else i = t;
          await this._transport.connect(i), await this._transport.sendReadyMessage();
        } catch (i) {
          this.disconnect(), r(i);
          return;
        }
      })();
    });
  }
  /**
   * Disconnect the voice client from the transport
   * Reset / reinitialize transport and abort any pending requests
   */
  async disconnect() {
    await this._transport.disconnect(), this._messageDispatcher.disconnect();
  }
  /**
   * The _initialize function performs internal set up of the transport and
   * message dispatcher.
   */
  _initialize() {
    this._transport.initialize(this._options, this.handleMessage.bind(this)), this._messageDispatcher = new qp(this._transport.sendMessage.bind(this._transport));
  }
  /**
   * Get the current state of the transport
   */
  get connected() {
    return [
      "connected",
      "ready"
    ].includes(this._transport.state);
  }
  get transport() {
    return this._transportWrapper.proxy;
  }
  get state() {
    return this._transport.state;
  }
  get version() {
    return (/* @__PURE__ */ ew(_r)).version;
  }
  // ------ Device methods
  async getAllMics() {
    return await this._transport.getAllMics();
  }
  async getAllCams() {
    return await this._transport.getAllCams();
  }
  async getAllSpeakers() {
    return await this._transport.getAllSpeakers();
  }
  get selectedMic() {
    return this._transport.selectedMic;
  }
  get selectedCam() {
    return this._transport.selectedCam;
  }
  get selectedSpeaker() {
    return this._transport.selectedSpeaker;
  }
  updateMic(t) {
    this._transport.updateMic(t);
  }
  updateCam(t) {
    this._transport.updateCam(t);
  }
  updateSpeaker(t) {
    this._transport.updateSpeaker(t);
  }
  enableMic(t) {
    this._transport.enableMic(t);
  }
  get isMicEnabled() {
    return this._transport.isMicEnabled;
  }
  enableCam(t) {
    this._transport.enableCam(t);
  }
  get isCamEnabled() {
    return this._transport.isCamEnabled;
  }
  tracks() {
    return this._transport.tracks();
  }
  enableScreenShare(t) {
    return this._transport.enableScreenShare(t);
  }
  get isSharingScreen() {
    return this._transport.isSharingScreen;
  }
  // ------ Messages
  /**
   * Directly send a message to the bot via the transport.
   * Do not await a response.
   * @param msgType - a string representing the message type
   * @param data - a dictionary of data to send with the message
   */
  sendClientMessage(t, n) {
    this._transport.sendMessage(new Et(ue.CLIENT_MESSAGE, {
      t,
      d: n
    }));
  }
  /**
   * Directly send a message to the bot via the transport.
   * Wait for and return the response.
   * @param msgType - a string representing the message type
   * @param data - a dictionary of data to send with the message
   * @param timeout - optional timeout in milliseconds for the response
   */
  async sendClientRequest(t, n, r) {
    const i = {
      t,
      d: n
    };
    return (await this._messageDispatcher.dispatch(i, ue.CLIENT_MESSAGE, r)).data.d;
  }
  registerFunctionCallHandler(t, n) {
    this._functionCallCallbacks[t] = n;
  }
  async appendToContext(t) {
    return !!(await this._messageDispatcher.dispatch({
      role: t.role,
      content: t.content,
      run_immediately: t.run_immediately
    }, ue.APPEND_TO_CONTEXT)).data.result;
  }
  /**
   * Disconnects the bot, but keeps the session alive
   */
  disconnectBot() {
    this._transport.sendMessage(new Et(ue.DISCONNECT_BOT, {}));
  }
  handleMessage(t) {
    switch (Z.debug("[RTVI Message]", t), t.type) {
      case ue.BOT_READY: {
        const n = t.data, r = n.version ? n.version.split(".").map(Number) : [
          0,
          0,
          0
        ];
        Z.debug(`[Pipecat Client] Bot is ready. Version: ${n.version}`), r[0] < 1 && Z.warn("[Pipecat Client] Bot version is less than 1.0.0, which may not be compatible with this client."), this._startResolve?.(t.data), this._options.callbacks?.onBotReady?.(t.data);
        break;
      }
      case ue.ERROR:
        this._options.callbacks?.onError?.(t);
        break;
      case ue.SERVER_RESPONSE:
        this._messageDispatcher.resolve(t);
        break;
      case ue.ERROR_RESPONSE: {
        const n = this._messageDispatcher.reject(t);
        this._options.callbacks?.onMessageError?.(n);
        break;
      }
      case ue.USER_STARTED_SPEAKING:
        this._options.callbacks?.onUserStartedSpeaking?.();
        break;
      case ue.USER_STOPPED_SPEAKING:
        this._options.callbacks?.onUserStoppedSpeaking?.();
        break;
      case ue.BOT_STARTED_SPEAKING:
        this._options.callbacks?.onBotStartedSpeaking?.();
        break;
      case ue.BOT_STOPPED_SPEAKING:
        this._options.callbacks?.onBotStoppedSpeaking?.();
        break;
      case ue.USER_TRANSCRIPTION: {
        const n = t.data;
        this._options.callbacks?.onUserTranscript?.(n);
        break;
      }
      case ue.BOT_TRANSCRIPTION:
        this._options.callbacks?.onBotTranscript?.(t.data);
        break;
      case ue.BOT_LLM_TEXT:
        this._options.callbacks?.onBotLlmText?.(t.data);
        break;
      case ue.BOT_LLM_STARTED:
        this._options.callbacks?.onBotLlmStarted?.();
        break;
      case ue.BOT_LLM_STOPPED:
        this._options.callbacks?.onBotLlmStopped?.();
        break;
      case ue.BOT_TTS_TEXT:
        this._options.callbacks?.onBotTtsText?.(t.data);
        break;
      case ue.BOT_TTS_STARTED:
        this._options.callbacks?.onBotTtsStarted?.();
        break;
      case ue.BOT_TTS_STOPPED:
        this._options.callbacks?.onBotTtsStopped?.();
        break;
      case ue.METRICS:
        this._options.callbacks?.onMetrics?.(t.data), this.emit(X.Metrics, t.data);
        break;
      case ue.APPEND_TO_CONTEXT_RESULT:
      case ue.SERVER_MESSAGE:
        this._options.callbacks?.onServerMessage?.(t.data), this.emit(X.ServerMessage, t.data);
        break;
      case ue.LLM_FUNCTION_CALL: {
        const n = t.data, r = this._functionCallCallbacks[n.function_name];
        if (r) {
          const i = {
            functionName: n.function_name,
            arguments: n.args
          };
          r(i).then((s) => {
            this._transport.sendMessage(new Et(ue.LLM_FUNCTION_CALL_RESULT, {
              function_name: n.function_name,
              tool_call_id: n.tool_call_id,
              arguments: n.args,
              result: s
            }));
          });
        }
        break;
      }
      case ue.BOT_LLM_SEARCH_RESPONSE: {
        const n = t.data;
        this._options.callbacks?.onBotLlmSearchResponse?.(n), this.emit(X.BotLlmSearchResponse, n);
        break;
      }
      default:
        Z.debug("[Pipecat Client] Unrecognized message type", t.type);
        break;
    }
  }
}
no([
  to
], Dr.prototype, "sendClientMessage", null);
no([
  to
], Dr.prototype, "sendClientRequest", null);
no([
  to
], Dr.prototype, "appendToContext", null);
no([
  to
], Dr.prototype, "disconnectBot", null);
Sn(Zs, Fp);
Sn(Zs, Wp);
Sn(Zs, Wc);
Sn(Zs, qc);
const si = {}, yu = (e, t) => e.unstable_is ? e.unstable_is(t) : t === e, bu = (e) => "init" in e, Mo = (e) => !!e.write, wu = (e) => "v" in e || "e" in e, qi = (e) => {
  if ("e" in e)
    throw e.e;
  if ((si ? "production" : void 0) !== "production" && !("v" in e))
    throw new Error("[Bug] atom state is not initialized");
  return e.v;
}, Rs = /* @__PURE__ */ new WeakMap(), xu = (e) => {
  var t;
  return Ls(e) && !!((t = Rs.get(e)) != null && t[0]);
}, cw = (e) => {
  const t = Rs.get(e);
  t?.[0] && (t[0] = !1, t[1].forEach((n) => n()));
}, Jp = (e, t) => {
  let n = Rs.get(e);
  if (!n) {
    n = [!0, /* @__PURE__ */ new Set()], Rs.set(e, n);
    const r = () => {
      n[0] = !1;
    };
    e.then(r, r);
  }
  n[1].add(t);
}, Ls = (e) => typeof e?.then == "function", Kp = (e, t, n) => {
  n.p.has(e) || (n.p.add(e), t.then(
    () => {
      n.p.delete(e);
    },
    () => {
      n.p.delete(e);
    }
  ));
}, Po = (e, t, n) => {
  const r = n(e), i = "v" in r, s = r.v;
  if (Ls(t))
    for (const o of r.d.keys())
      Kp(e, t, n(o));
  r.v = t, delete r.e, (!i || !Object.is(s, r.v)) && (++r.n, Ls(s) && cw(s));
}, Su = (e, t, n) => {
  var r;
  const i = /* @__PURE__ */ new Set();
  for (const s of ((r = n.get(e)) == null ? void 0 : r.t) || [])
    n.has(s) && i.add(s);
  for (const s of t.p)
    i.add(s);
  return i;
}, lw = () => {
  const e = /* @__PURE__ */ new Set(), t = () => {
    e.forEach((n) => n());
  };
  return t.add = (n) => (e.add(n), () => {
    e.delete(n);
  }), t;
}, Ao = () => {
  const e = {}, t = /* @__PURE__ */ new WeakMap(), n = (r) => {
    var i, s;
    (i = t.get(e)) == null || i.forEach((o) => o(r)), (s = t.get(r)) == null || s.forEach((o) => o());
  };
  return n.add = (r, i) => {
    const s = r || e, o = (t.has(s) ? t : t.set(s, /* @__PURE__ */ new Set())).get(s);
    return o.add(i), () => {
      o?.delete(i), o.size || t.delete(s);
    };
  }, n;
}, uw = (e) => (e.c || (e.c = Ao()), e.m || (e.m = Ao()), e.u || (e.u = Ao()), e.f || (e.f = lw()), e), dw = Symbol(), fw = (e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), o = {}, a = (h, ...p) => h.read(...p), c = (h, ...p) => h.write(...p), l = (h, p) => {
  var g;
  return (g = h.unstable_onInit) == null ? void 0 : g.call(h, p);
}, u = (h, p) => {
  var g;
  return (g = h.onMount) == null ? void 0 : g.call(h, p);
}, ...f) => {
  const h = f[0] || ((k) => {
    if ((si ? "production" : void 0) !== "production" && !k)
      throw new Error("Atom is undefined or null");
    let P = e.get(k);
    return P || (P = { d: /* @__PURE__ */ new Map(), p: /* @__PURE__ */ new Set(), n: 0 }, e.set(k, P), l?.(k, O)), P;
  }), p = f[1] || (() => {
    const k = [], P = (R) => {
      try {
        R();
      } catch (L) {
        k.push(L);
      }
    };
    do {
      o.f && P(o.f);
      const R = /* @__PURE__ */ new Set(), L = R.add.bind(R);
      r.forEach((I) => {
        var V;
        return (V = t.get(I)) == null ? void 0 : V.l.forEach(L);
      }), r.clear(), s.forEach(L), s.clear(), i.forEach(L), i.clear(), R.forEach(P), r.size && g();
    } while (r.size || s.size || i.size);
    if (k.length)
      throw new AggregateError(k);
  }), g = f[2] || (() => {
    const k = [], P = /* @__PURE__ */ new WeakSet(), R = /* @__PURE__ */ new WeakSet(), L = Array.from(r);
    for (; L.length; ) {
      const I = L[L.length - 1], V = h(I);
      if (R.has(I)) {
        L.pop();
        continue;
      }
      if (P.has(I)) {
        if (n.get(I) === V.n)
          k.push([I, V]);
        else if ((si ? "production" : void 0) !== "production" && n.has(I))
          throw new Error("[Bug] invalidated atom exists");
        R.add(I), L.pop();
        continue;
      }
      P.add(I);
      for (const q of Su(I, V, t))
        P.has(q) || L.push(q);
    }
    for (let I = k.length - 1; I >= 0; --I) {
      const [V, q] = k[I];
      let $ = !1;
      for (const H of q.d.keys())
        if (H !== V && r.has(H)) {
          $ = !0;
          break;
        }
      $ && (y(V), M(V)), n.delete(V);
    }
  }), y = f[3] || ((k) => {
    var P;
    const R = h(k);
    if (wu(R) && (t.has(k) && n.get(k) !== R.n || Array.from(R.d).every(
      ([W, D]) => (
        // Recursively, read the atom state of the dependency, and
        // check if the atom epoch number is unchanged
        y(W).n === D
      )
    )))
      return R;
    R.d.clear();
    let L = !0;
    const I = () => {
      t.has(k) && (M(k), g(), p());
    }, V = (W) => {
      var D;
      if (yu(k, W)) {
        const N = h(W);
        if (!wu(N))
          if (bu(W))
            Po(W, W.init, h);
          else
            throw new Error("no atom init");
        return qi(N);
      }
      const te = y(W);
      try {
        return qi(te);
      } finally {
        R.d.set(W, te.n), xu(R.v) && Kp(k, R.v, te), (D = t.get(W)) == null || D.t.add(k), L || I();
      }
    };
    let q, $;
    const H = {
      get signal() {
        return q || (q = new AbortController()), q.signal;
      },
      get setSelf() {
        return (si ? "production" : void 0) !== "production" && !Mo(k) && console.warn("setSelf function cannot be used with read-only atom"), !$ && Mo(k) && ($ = (...W) => {
          if ((si ? "production" : void 0) !== "production" && L && console.warn("setSelf function cannot be called in sync"), !L)
            try {
              return w(k, ...W);
            } finally {
              g(), p();
            }
        }), $;
      }
    }, Y = R.n;
    try {
      const W = a(k, V, H);
      return Po(k, W, h), Ls(W) && (Jp(W, () => q?.abort()), W.then(
        I,
        I
      )), R;
    } catch (W) {
      return delete R.v, R.e = W, ++R.n, R;
    } finally {
      L = !1, Y !== R.n && n.get(k) === Y && (n.set(k, R.n), r.add(k), (P = o.c) == null || P.call(o, k));
    }
  }), b = f[4] || ((k) => {
    const P = [k];
    for (; P.length; ) {
      const R = P.pop(), L = h(R);
      for (const I of Su(R, L, t)) {
        const V = h(I);
        n.set(I, V.n), P.push(I);
      }
    }
  }), w = f[5] || ((k, ...P) => {
    let R = !0;
    const L = (V) => qi(y(V)), I = (V, ...q) => {
      var $;
      const H = h(V);
      try {
        if (yu(k, V)) {
          if (!bu(V))
            throw new Error("atom not writable");
          const Y = H.n, W = q[0];
          Po(V, W, h), M(V), Y !== H.n && (r.add(V), ($ = o.c) == null || $.call(o, V), b(V));
          return;
        } else
          return w(V, ...q);
      } finally {
        R || (g(), p());
      }
    };
    try {
      return c(k, L, I, ...P);
    } finally {
      R = !1;
    }
  }), M = f[6] || ((k) => {
    var P;
    const R = h(k), L = t.get(k);
    if (L && !xu(R.v)) {
      for (const [I, V] of R.d)
        if (!L.d.has(I)) {
          const q = h(I);
          C(I).t.add(k), L.d.add(I), V !== q.n && (r.add(I), (P = o.c) == null || P.call(o, I), b(I));
        }
      for (const I of L.d || [])
        if (!R.d.has(I)) {
          L.d.delete(I);
          const V = S(I);
          V?.t.delete(k);
        }
    }
  }), C = f[7] || ((k) => {
    var P;
    const R = h(k);
    let L = t.get(k);
    if (!L) {
      y(k);
      for (const I of R.d.keys())
        C(I).t.add(k);
      if (L = {
        l: /* @__PURE__ */ new Set(),
        d: new Set(R.d.keys()),
        t: /* @__PURE__ */ new Set()
      }, t.set(k, L), (P = o.m) == null || P.call(o, k), Mo(k)) {
        const I = () => {
          let V = !0;
          const q = (...$) => {
            try {
              return w(k, ...$);
            } finally {
              V || (g(), p());
            }
          };
          try {
            const $ = u(k, q);
            $ && (L.u = () => {
              V = !0;
              try {
                $();
              } finally {
                V = !1;
              }
            });
          } finally {
            V = !1;
          }
        };
        i.add(I);
      }
    }
    return L;
  }), S = f[8] || ((k) => {
    var P;
    const R = h(k);
    let L = t.get(k);
    if (L && !L.l.size && !Array.from(L.t).some((I) => {
      var V;
      return (V = t.get(I)) == null ? void 0 : V.d.has(k);
    })) {
      L.u && s.add(L.u), L = void 0, t.delete(k), (P = o.u) == null || P.call(o, k);
      for (const I of R.d.keys()) {
        const V = S(I);
        V?.t.delete(k);
      }
      return;
    }
    return L;
  }), _ = [
    // store state
    e,
    t,
    n,
    r,
    i,
    s,
    o,
    // atom interceptors
    a,
    c,
    l,
    u,
    // building-block functions
    h,
    p,
    g,
    y,
    b,
    w,
    M,
    C,
    S
  ], O = {
    get: (k) => qi(y(k)),
    set: (k, ...P) => {
      try {
        return w(k, ...P);
      } finally {
        g(), p();
      }
    },
    sub: (k, P) => {
      const L = C(k).l;
      return L.add(P), p(), () => {
        L.delete(P), S(k), p();
      };
    }
  };
  return Object.defineProperty(O, dw, { value: _ }), O;
}, Yp = fw, hw = uw, _u = Jp, Hc = {};
let pw = 0;
function ct(e, t) {
  const n = `atom${++pw}`, r = {
    toString() {
      return (Hc ? "production" : void 0) !== "production" && this.debugLabel ? n + ":" + this.debugLabel : n;
    }
  };
  return typeof e == "function" ? r.read = e : (r.init = e, r.read = mw, r.write = gw), t && (r.write = t), r;
}
function mw(e) {
  return e(this);
}
function gw(e, t, n) {
  return t(
    this,
    typeof n == "function" ? n(e(this)) : n
  );
}
const vw = () => {
  let e = 0;
  const t = hw({}), n = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap(), i = Yp(
    n,
    r,
    void 0,
    void 0,
    void 0,
    void 0,
    t,
    void 0,
    (a, c, l, ...u) => e ? l(a, ...u) : a.write(c, l, ...u)
  ), s = /* @__PURE__ */ new Set();
  return t.m.add(void 0, (a) => {
    s.add(a);
    const c = n.get(a);
    c.m = r.get(a);
  }), t.u.add(void 0, (a) => {
    s.delete(a);
    const c = n.get(a);
    delete c.m;
  }), Object.assign(i, {
    // store dev methods (these are tentative and subject to change without notice)
    dev4_get_internal_weak_map: () => (console.log("Deprecated: Use devstore from the devtools library"), n),
    dev4_get_mounted_atoms: () => s,
    dev4_restore_atoms: (a) => {
      const c = {
        read: () => null,
        write: (l, u) => {
          ++e;
          try {
            for (const [f, h] of a)
              "init" in f && u(f, h);
          } finally {
            --e;
          }
        }
      };
      i.set(c);
    }
  });
};
function Gc() {
  return (Hc ? "production" : void 0) !== "production" ? vw() : Yp();
}
let Zr;
function yw() {
  return Zr || (Zr = Gc(), (Hc ? "production" : void 0) !== "production" && (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = Zr), globalThis.__JOTAI_DEFAULT_STORE__ !== Zr && console.warn(
    "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
  ))), Zr;
}
const bw = {}, Xp = at(
  void 0
);
function Qp(e) {
  const t = Le(Xp);
  return e?.store || t || yw();
}
function ww({
  children: e,
  store: t
}) {
  const n = Ie(void 0);
  return !t && !n.current && (n.current = Gc()), mi(
    Xp.Provider,
    {
      value: t || n.current
    },
    e
  );
}
const La = (e) => typeof e?.then == "function", ja = (e) => {
  e.status || (e.status = "pending", e.then(
    (t) => {
      e.status = "fulfilled", e.value = t;
    },
    (t) => {
      e.status = "rejected", e.reason = t;
    }
  ));
}, xw = We.use || // A shim for older React versions
((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (ja(e), e);
}), Oo = /* @__PURE__ */ new WeakMap(), ku = (e, t) => {
  let n = Oo.get(e);
  return n || (n = new Promise((r, i) => {
    let s = e;
    const o = (l) => (u) => {
      s === l && r(u);
    }, a = (l) => (u) => {
      s === l && i(u);
    }, c = () => {
      try {
        const l = t();
        La(l) ? (Oo.set(l, n), s = l, l.then(o(l), a(l)), _u(l, c)) : r(l);
      } catch (l) {
        i(l);
      }
    };
    e.then(o(e), a(e)), _u(e, c);
  }), Oo.set(e, n)), n;
};
function Dn(e, t) {
  const { delay: n, unstable_promiseStatus: r = !We.use } = t || {}, i = Qp(t), [[s, o, a], c] = Cb(
    (u) => {
      const f = i.get(e);
      return Object.is(u[0], f) && u[1] === i && u[2] === e ? u : [f, i, e];
    },
    void 0,
    () => [i.get(e), i, e]
  );
  let l = s;
  if ((o !== i || a !== e) && (c(), l = i.get(e)), me(() => {
    const u = i.sub(e, () => {
      if (r)
        try {
          const f = i.get(e);
          La(f) && ja(
            ku(f, () => i.get(e))
          );
        } catch {
        }
      if (typeof n == "number") {
        setTimeout(c, n);
        return;
      }
      c();
    });
    return c(), u;
  }, [i, e, n, r]), Eb(l), La(l)) {
    const u = ku(l, () => i.get(e));
    return r && ja(u), xw(u);
  }
  return l;
}
function Sw(e, t) {
  const n = Qp(t);
  return ce(
    (...i) => {
      if ((bw ? "production" : void 0) !== "production" && !("write" in e))
        throw new Error("not writable atom");
      return n.set(e, ...i);
    },
    [n, e]
  );
}
const _w = {};
function kw(e, t) {
  let n = null;
  const r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set(), s = (a) => {
    let c;
    if (t === void 0)
      c = r.get(a);
    else
      for (const [u, f] of r)
        if (t(u, a)) {
          c = f;
          break;
        }
    if (c !== void 0)
      if (n?.(c[1], a))
        s.remove(a);
      else
        return c[0];
    const l = e(a);
    return r.set(a, [l, Date.now()]), o("CREATE", a, l), l;
  }, o = (a, c, l) => {
    for (const u of i)
      u({ type: a, param: c, atom: l });
  };
  return s.unstable_listen = (a) => (i.add(a), () => {
    i.delete(a);
  }), s.getParams = () => r.keys(), s.remove = (a) => {
    if (t === void 0) {
      if (!r.has(a)) return;
      const [c] = r.get(a);
      r.delete(a), o("REMOVE", a, c);
    } else
      for (const [c, [l]] of r)
        if (t(c, a)) {
          r.delete(c), o("REMOVE", c, l);
          break;
        }
  }, s.setShouldRemove = (a) => {
    if (n = a, !!n)
      for (const [c, [l, u]] of r)
        n(u, c) && (r.delete(c), o("REMOVE", c, l));
  }, s;
}
const Cw = (e) => typeof e?.then == "function";
function Ew(e = () => {
  try {
    return window.localStorage;
  } catch (n) {
    (_w ? "production" : void 0) !== "production" && typeof window < "u" && console.warn(n);
    return;
  }
}, t) {
  var n;
  let r, i;
  const s = {
    getItem: (c, l) => {
      var u, f;
      const h = (g) => {
        if (g = g || "", r !== g) {
          try {
            i = JSON.parse(g, t?.reviver);
          } catch {
            return l;
          }
          r = g;
        }
        return i;
      }, p = (f = (u = e()) == null ? void 0 : u.getItem(c)) != null ? f : null;
      return Cw(p) ? p.then(h) : h(p);
    },
    setItem: (c, l) => {
      var u;
      return (u = e()) == null ? void 0 : u.setItem(
        c,
        JSON.stringify(l, void 0)
      );
    },
    removeItem: (c) => {
      var l;
      return (l = e()) == null ? void 0 : l.removeItem(c);
    }
  }, o = (c) => (l, u, f) => c(l, (h) => {
    let p;
    try {
      p = JSON.parse(h || "");
    } catch {
      p = f;
    }
    u(p);
  });
  let a;
  try {
    a = (n = e()) == null ? void 0 : n.subscribe;
  } catch {
  }
  return !a && typeof window < "u" && typeof window.addEventListener == "function" && window.Storage && (a = (c, l) => {
    if (!(e() instanceof window.Storage))
      return () => {
      };
    const u = (f) => {
      f.storageArea === e() && f.key === c && l(f.newValue);
    };
    return window.addEventListener("storage", u), () => {
      window.removeEventListener("storage", u);
    };
  }), a && (s.subscribe = o(a)), s;
}
Ew();
function ln(e, t) {
  const n = Vt(
    () => ct(null, (r, i, ...s) => e(r, i, ...s)),
    [e]
  );
  return Sw(n, t);
}
var Da = {};
Da = JSON.parse(`{"name":"@pipecat-ai/client-react","version":"1.0.1","license":"BSD-2-Clause","main":"dist/index.js","module":"dist/index.module.js","types":"dist/index.d.ts","source":"src/index.ts","repository":{"type":"git","url":"git+https://github.com/pipecat-ai/pipecat-client-web.git"},"files":["dist","package.json","README.md"],"scripts":{"build":"parcel build --no-cache","dev":"parcel watch","lint":"eslint . --report-unused-disable-directives --max-warnings 0 --ignore-pattern 'dist/'"},"devDependencies":{"@pipecat-ai/client-js":"*","@types/react":"^18.3.3","@types/react-dom":"^18.3.0","@typescript-eslint/eslint-plugin":"^8.32.0","eslint":"^9.11.1","eslint-config-prettier":"^9.1.0","eslint-plugin-react-hooks":"^5.2.0","eslint-plugin-simple-import-sort":"^12.1.1","parcel":"^2.12.0","react":"^18.3.1","react-dom":"^18.3.1","typescript":"^5.2.2"},"peerDependencies":{"@pipecat-ai/client-js":"*","react":">=18","react-dom":">=18"},"dependencies":{"jotai":"^2.9.0"}}`);
const Zp = /* @__PURE__ */ at({
  on: () => {
  },
  off: () => {
  }
}), qe = (e, t) => {
  const { on: n, off: r } = Le(Zp);
  me(() => (n(e, t), () => {
    r(e, t);
  }), [
    e,
    t,
    n,
    r
  ]);
}, Tw = /* @__PURE__ */ at({
  enableCam: () => {
    throw new Error("PipecatClientCamStateContext: enableCam() called outside of provider");
  },
  isCamEnabled: !1
}), em = /* @__PURE__ */ at({
  enableMic: () => {
    throw new Error("PipecatClientMicStateContext: enableMic() called outside of provider");
  },
  isMicEnabled: !1
}), tm = /* @__PURE__ */ at("disconnected"), Mw = ({ children: e }) => {
  const t = ro(), [n, r] = _e(!1), [i, s] = _e(!1), [o, a] = _e("disconnected");
  qe(X.TransportStateChanged, (u) => {
    a(u), u === "initialized" && t && (r(t.isCamEnabled ?? !1), s(t.isMicEnabled ?? !1));
  });
  const c = ce((u) => {
    r(u), t?.enableCam?.(u);
  }, [
    t
  ]), l = ce((u) => {
    s(u), t?.enableMic?.(u);
  }, [
    t
  ]);
  return x.jsx(tm.Provider, {
    value: o,
    children: x.jsx(Tw.Provider, {
      value: {
        enableCam: c,
        isCamEnabled: n
      },
      children: x.jsx(em.Provider, {
        value: {
          enableMic: l,
          isMicEnabled: i
        },
        children: e
      })
    })
  });
}, Pw = Gc(), nm = /* @__PURE__ */ at({}), rm = ({ children: e, client: t, jotaiStore: n = Pw }) => {
  me(() => {
    zc({
      library: Da.name,
      library_version: Da.version
    });
  }, []);
  const r = Ie({});
  me(() => {
    if (!t) return;
    const o = Object.values(X).filter((c) => isNaN(Number(c))), a = {};
    return o.forEach((c) => {
      const l = (...u) => {
        const f = r.current[c];
        f && f.forEach((h) => {
          h(...u);
        });
      };
      a[c] = l, t.on(c, l);
    }), () => {
      o.forEach((c) => {
        t.off(c, a[c]);
      });
    };
  }, [
    t
  ]);
  const i = ce((o, a) => {
    r.current[o] || (r.current[o] = /* @__PURE__ */ new Set()), r.current[o].add(a);
  }, []), s = ce((o, a) => {
    r.current[o]?.delete(a);
  }, []);
  return x.jsx(ww, {
    store: n,
    children: x.jsx(nm.Provider, {
      value: {
        client: t
      },
      children: x.jsx(Zp.Provider, {
        value: {
          on: i,
          off: s
        },
        children: x.jsx(Mw, {
          children: e
        })
      })
    })
  });
};
rm.displayName = "PipecatClientProvider";
const ro = () => {
  const { client: e } = Le(nm);
  return e;
}, Aw = ct(null), Ow = ct(null), Rw = ct(null), Lw = ct(null), jw = ct(null), Dw = ct(null), Cu = kw(({ local: e, trackType: t }) => {
  if (e) switch (t) {
    case "audio":
      return Aw;
    case "screenAudio":
      return Rw;
    case "screenVideo":
      return Lw;
    case "video":
      return Ow;
  }
  return t === "audio" ? jw : Dw;
}), Jc = (e, t) => {
  const n = ro(), r = Dn(Cu({
    local: t === "local",
    trackType: e
  })), i = ln(ce((s, o, a, c, l) => {
    const u = Cu({
      local: l,
      trackType: c
    });
    s(u)?.id !== a.id && o(u, a);
  }, []));
  return qe(X.TrackStarted, ce((s, o) => {
    i(s, s.kind, !!o?.local);
  }, [
    i
  ])), qe(X.ScreenTrackStarted, ce((s, o) => {
    const a = s.kind === "audio" ? "screenAudio" : "screenVideo";
    i(s, a, !!o?.local);
  }, [
    i
  ])), me(() => {
    if (!n) return;
    const o = n.tracks()?.[t]?.[e];
    o && i(o, e, t === "local");
  }, [
    t,
    e,
    i,
    n
  ]), r;
}, im = () => {
  const e = Ie(null), t = Jc("audio", "bot");
  return me(() => {
    !e.current || !t || e.current.srcObject && e.current.srcObject.getAudioTracks()[0].id === t.id || (e.current.srcObject = new MediaStream([
      t
    ]));
  }, [
    t
  ]), qe(X.SpeakerUpdated, ce((n) => {
    e.current && typeof e.current.setSinkId == "function" && e.current.setSinkId(n.deviceId);
  }, [])), x.jsx(x.Fragment, {
    children: x.jsx("audio", {
      ref: e,
      autoPlay: !0
    })
  });
};
im.displayName = "PipecatClientAudio";
const Iw = () => Le(em), Nw = ({ onMicEnabledChanged: e, disabled: t = !1, children: n }) => {
  const { enableMic: r, isMicEnabled: i } = Iw(), s = ce(() => {
    if (t) return;
    const o = !i;
    r(o), e?.(o);
  }, [
    t,
    r,
    i,
    e
  ]);
  return x.jsx(x.Fragment, {
    children: n({
      isMicEnabled: i,
      onClick: s,
      disabled: t
    })
  });
};
function Fw(...e) {
  return ce(
    (t) => {
      for (let n = 0; n < e.length; n++) {
        const r = e[n];
        typeof r == "function" ? r(t) : r && typeof r == "object" && (r.current = t);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
var Bw = Fw;
const $w = /* @__PURE__ */ Pi(function({ participant: t = "local", fit: n = "contain", mirror: r, onResize: i, style: s = {}, trackType: o = "video", ...a }, c) {
  const l = Jc(o, t), u = Ie(null), f = Bw(u, c);
  return me(function() {
    const p = u.current;
    if (!p) return;
    const g = () => {
      const C = p.play();
      C !== void 0 && C.then(() => {
        p.controls = !1;
      }).catch((S) => {
        p.controls = !0, console.warn("Failed to play video", S);
      });
    }, y = () => {
      p.paused && g();
    }, b = () => {
      p.style.transform = "scale(1)";
    }, w = () => {
      p.style.transform = "", setTimeout(() => {
        p.paused && g();
      }, 100);
    }, M = () => {
      document.visibilityState !== "hidden" && p.paused && g();
    };
    return p.addEventListener("canplay", y), p.addEventListener("enterpictureinpicture", b), p.addEventListener("leavepictureinpicture", w), document.addEventListener("visibilitychange", M), () => {
      p.removeEventListener("canplay", y), p.removeEventListener("enterpictureinpicture", b), p.removeEventListener("leavepictureinpicture", w), document.removeEventListener("visibilitychange", M);
    };
  }, []), me(function() {
    const p = u.current;
    if (!(!p || !l))
      return p.srcObject = new MediaStream([
        l
      ]), p.load(), () => {
        p.srcObject = null, p.load();
      };
  }, [
    l,
    l?.id
  ]), me(function() {
    const p = u.current;
    if (!i || !p) return;
    let g;
    function y() {
      g && cancelAnimationFrame(g), g = requestAnimationFrame(() => {
        const b = u.current;
        if (!b || document.hidden) return;
        const w = b.videoWidth, M = b.videoHeight;
        w && M && i?.({
          aspectRatio: w / M,
          height: M,
          width: w
        });
      });
    }
    return y(), p.addEventListener("loadedmetadata", y), p.addEventListener("resize", y), () => {
      g && cancelAnimationFrame(g), p.removeEventListener("loadedmetadata", y), p.removeEventListener("resize", y);
    };
  }, [
    i
  ]), x.jsx("video", {
    autoPlay: !0,
    muted: !0,
    playsInline: !0,
    ref: f,
    style: {
      objectFit: n,
      transform: r ? "scale(-1, 1)" : "",
      ...s
    },
    ...a
  });
});
$w.displayName = "PipecatClientVideo";
const Ro = ct([]), Lo = ct([]), jo = ct([]), Do = ct({}), Io = ct({}), No = ct({}), Vw = () => {
  const e = ro(), t = Dn(Lo), n = Dn(Ro), r = Dn(jo), i = Dn(Io), s = Dn(Do), o = Dn(No), a = ln(ce(async (f, h) => {
    if (!e) return;
    const p = await e.getAllCams(), g = await e.getAllMics(), y = await e.getAllSpeakers();
    h(Lo, p), h(Ro, g), h(jo, y), h(Io, e.selectedCam), h(Do, e.selectedMic), h(No, e.selectedSpeaker);
  }, [
    e
  ]));
  me(() => {
    a();
  }, [
    a
  ]), qe(X.AvailableCamsUpdated, ln(ce((f, h, p) => {
    h(Lo, p);
  }, []))), qe(X.AvailableMicsUpdated, ln(ce((f, h, p) => {
    h(Ro, p);
  }, []))), qe(X.AvailableSpeakersUpdated, ln(ce((f, h, p) => {
    h(jo, p);
  }, []))), qe(X.CamUpdated, ln(ce((f, h, p) => {
    h(Io, p);
  }, []))), qe(X.MicUpdated, ln(ce((f, h, p) => {
    h(Do, p);
  }, []))), qe(X.SpeakerUpdated, ln(ce((f, h, p) => {
    h(No, p);
  }, [])));
  const c = ce((f) => {
    e?.updateCam(f);
  }, [
    e
  ]), l = ce((f) => {
    e?.updateMic(f);
  }, [
    e
  ]), u = ce((f) => {
    e?.updateSpeaker(f);
  }, [
    e
  ]);
  return {
    availableCams: t,
    availableMics: n,
    availableSpeakers: r,
    selectedCam: i,
    selectedMic: s,
    selectedSpeaker: o,
    updateCam: c,
    updateMic: l,
    updateSpeaker: u
  };
}, sm = () => Le(tm), om = /* @__PURE__ */ We.memo(({ backgroundColor: e = "transparent", barColor: t = "black", barCount: n = 5, barGap: r = 12, barLineCap: i = "round", barMaxHeight: s = 120, barOrigin: o = "center", barWidth: a = 30, participantType: c }) => {
  const l = Ie(null), u = Jc("audio", c);
  return me(() => {
    if (!l.current) return;
    const f = n * a + (n - 1) * r, h = s, p = l.current, g = 2, y = () => {
      p.width = f * g, p.height = h * g, p.style.width = `${f}px`, p.style.height = `${h}px`, b.lineCap = i, b.scale(g, g);
    }, b = p.getContext("2d");
    if (y(), !u) return;
    const w = new AudioContext(), M = w.createMediaStreamSource(new MediaStream([
      u
    ])), C = w.createAnalyser();
    C.fftSize = 1024, M.connect(C);
    const S = new Uint8Array(C.frequencyBinCount);
    b.lineCap = i;
    const _ = Array.from({
      length: n
    }, (L, I) => {
      const V = n > 20 ? 200 : 80, q = 1e4, $ = 2595 * Math.log10(1 + V / 700), Y = (2595 * Math.log10(1 + q / 700) - $) / n, W = $ + I * Y, D = 700 * (Math.pow(10, W / 2595) - 1), te = 700 * (Math.pow(10, (W + Y) / 2595) - 1);
      return {
        startFreq: D,
        endFreq: te,
        smoothValue: 0
      };
    }), O = (L) => {
      const I = w.sampleRate / 2;
      return Math.round(L / I * (C.frequencyBinCount - 1));
    };
    function k() {
      C.getByteFrequencyData(S), b.clearRect(0, 0, p.width / g, p.height / g), b.fillStyle = e, b.fillRect(0, 0, p.width / g, p.height / g);
      let L = !1;
      const I = _.length * a + (_.length - 1) * r, V = (p.width / g - I) / 2, q = a / 2;
      _.forEach(($, H) => {
        const Y = O($.startFreq), W = O($.endFreq), D = S.slice(Y, W), te = D.reduce((T, j) => T + j, 0) / D.length, N = 0.2;
        te < 1 ? $.smoothValue = Math.max($.smoothValue - N * 5, 0) : ($.smoothValue = $.smoothValue + (te - $.smoothValue) * N, L = !0);
        const ee = V + H * (a + r), d = Math.max(0, Math.min($.smoothValue / 255 * s, s));
        let v, m;
        const E = p.height / g;
        switch (o) {
          case "top":
            v = q, m = Math.min(q + d, E - q);
            break;
          case "bottom":
            m = E - q, v = Math.max(m - d, q);
            break;
          case "center":
          default:
            v = Math.max(E / 2 - d / 2, q), m = Math.min(E / 2 + d / 2, E - q);
            break;
        }
        $.smoothValue > 0 ? (b.beginPath(), b.moveTo(ee + a / 2, v), b.lineTo(ee + a / 2, m), b.lineWidth = a, b.strokeStyle = t, b.stroke()) : P(q, t, ee, v);
      }), L || R(q, t), requestAnimationFrame(k);
    }
    function P(L, I, V, q) {
      switch (i) {
        case "square":
          b.fillStyle = I, b.fillRect(V + a / 2 - L, q - L, L * 2, L * 2);
          break;
        case "round":
        default:
          b.beginPath(), b.arc(V + a / 2, q, L, 0, 2 * Math.PI), b.fillStyle = I, b.fill(), b.closePath();
          break;
      }
    }
    function R(L, I) {
      const V = _.length * a + (_.length - 1) * r, q = (p.width / g - V) / 2, $ = p.height / g;
      let H;
      switch (o) {
        case "top":
          H = L;
          break;
        case "bottom":
          H = $ - L;
          break;
        case "center":
        default:
          H = $ / 2;
          break;
      }
      _.forEach((Y, W) => {
        const D = q + W * (a + r);
        P(L, I, D, H);
      });
    }
    return k(), window.addEventListener("resize", y), () => {
      w.close(), window.removeEventListener("resize", y);
    };
  }, [
    e,
    t,
    n,
    r,
    i,
    s,
    o,
    a,
    u
  ]), x.jsx("canvas", {
    ref: l,
    style: {
      display: "block",
      width: "100%",
      height: "100%"
    }
  });
});
om.displayName = "VoiceVisualizer";
var Uw = "1.3.8";
function am(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function zw(e, t, n) {
  return (1 - n) * e + n * t;
}
function Ww(e, t, n, r) {
  return zw(e, t, 1 - Math.exp(-n * r));
}
function qw(e, t) {
  return (e % t + t) % t;
}
var Hw = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  // These are instanciated in the fromTo method
  lerp;
  duration;
  easing;
  onUpdate;
  /**
   * Advance the animation by the given delta time
   *
   * @param deltaTime - The time in seconds to advance the animation
   */
  advance(e) {
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += e;
      const n = am(0, this.currentTime / this.duration, 1);
      t = n >= 1;
      const r = t ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * r;
    } else this.lerp ? (this.value = Ww(this.value, this.to, this.lerp * 60, e), Math.round(this.value) === this.to && (this.value = this.to, t = !0)) : (this.value = this.to, t = !0);
    t && this.stop(), this.onUpdate?.(this.value, t);
  }
  /** Stop the animation */
  stop() {
    this.isRunning = !1;
  }
  /**
   * Set up the animation from a starting value to an ending value
   * with optional parameters for lerping, duration, easing, and onUpdate callback
   *
   * @param from - The starting value
   * @param to - The ending value
   * @param options - Options for the animation
   */
  fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: s, onUpdate: o }) {
    this.from = this.value = e, this.to = t, this.lerp = n, this.duration = r, this.easing = i, this.currentTime = 0, this.isRunning = !0, s?.(), this.onUpdate = o;
  }
};
function Gw(e, t) {
  let n;
  return function(...r) {
    let i = this;
    clearTimeout(n), n = setTimeout(() => {
      n = void 0, e.apply(i, r);
    }, t);
  };
}
var Jw = class {
  constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
    this.wrapper = e, this.content = t, n && (this.debouncedResize = Gw(this.resize, r), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
  }
  width = 0;
  height = 0;
  scrollHeight = 0;
  scrollWidth = 0;
  // These are instanciated in the constructor as they need information from the options
  debouncedResize;
  wrapperResizeObserver;
  contentResizeObserver;
  destroy() {
    this.wrapperResizeObserver?.disconnect(), this.contentResizeObserver?.disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize, !1);
  }
  resize = () => {
    this.onWrapperResize(), this.onContentResize();
  };
  onWrapperResize = () => {
    this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight);
  };
  onContentResize = () => {
    this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth);
  };
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height
    };
  }
}, cm = class {
  events = {};
  /**
   * Emit an event with the given data
   * @param event Event name
   * @param args Data to pass to the event handlers
   */
  emit(e, ...t) {
    let n = this.events[e] || [];
    for (let r = 0, i = n.length; r < i; r++)
      n[r]?.(...t);
  }
  /**
   * Add a callback to the event
   * @param event Event name
   * @param cb Callback function
   * @returns Unsubscribe function
   */
  on(e, t) {
    return this.events[e]?.push(t) || (this.events[e] = [t]), () => {
      this.events[e] = this.events[e]?.filter((n) => t !== n);
    };
  }
  /**
   * Remove a callback from the event
   * @param event Event name
   * @param callback Callback function
   */
  off(e, t) {
    this.events[e] = this.events[e]?.filter((n) => t !== n);
  }
  /**
   * Remove all event listeners and clean up
   */
  destroy() {
    this.events = {};
  }
}, Eu = 100 / 6, rn = { passive: !1 }, Kw = class {
  constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
    this.element = e, this.options = t, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, rn), this.element.addEventListener(
      "touchstart",
      this.onTouchStart,
      rn
    ), this.element.addEventListener(
      "touchmove",
      this.onTouchMove,
      rn
    ), this.element.addEventListener("touchend", this.onTouchEnd, rn);
  }
  touchStart = {
    x: 0,
    y: 0
  };
  lastDelta = {
    x: 0,
    y: 0
  };
  window = {
    width: 0,
    height: 0
  };
  emitter = new cm();
  /**
   * Add an event listener for the given event and callback
   *
   * @param event Event name
   * @param callback Callback function
   */
  on(e, t) {
    return this.emitter.on(e, t);
  }
  /** Remove all event listeners and clean up */
  destroy() {
    this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, rn), this.element.removeEventListener(
      "touchstart",
      this.onTouchStart,
      rn
    ), this.element.removeEventListener(
      "touchmove",
      this.onTouchMove,
      rn
    ), this.element.removeEventListener(
      "touchend",
      this.onTouchEnd,
      rn
    );
  }
  /**
   * Event handler for 'touchstart' event
   *
   * @param event Touch event
   */
  onTouchStart = (e) => {
    const { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
    this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
      x: 0,
      y: 0
    }, this.emitter.emit("scroll", {
      deltaX: 0,
      deltaY: 0,
      event: e
    });
  };
  /** Event handler for 'touchmove' event */
  onTouchMove = (e) => {
    const { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e, r = -(t - this.touchStart.x) * this.options.touchMultiplier, i = -(n - this.touchStart.y) * this.options.touchMultiplier;
    this.touchStart.x = t, this.touchStart.y = n, this.lastDelta = {
      x: r,
      y: i
    }, this.emitter.emit("scroll", {
      deltaX: r,
      deltaY: i,
      event: e
    });
  };
  onTouchEnd = (e) => {
    this.emitter.emit("scroll", {
      deltaX: this.lastDelta.x,
      deltaY: this.lastDelta.y,
      event: e
    });
  };
  /** Event handler for 'wheel' event */
  onWheel = (e) => {
    let { deltaX: t, deltaY: n, deltaMode: r } = e;
    const i = r === 1 ? Eu : r === 2 ? this.window.width : 1, s = r === 1 ? Eu : r === 2 ? this.window.height : 1;
    t *= i, n *= s, t *= this.options.wheelMultiplier, n *= this.options.wheelMultiplier, this.emitter.emit("scroll", { deltaX: t, deltaY: n, event: e });
  };
  onWindowResize = () => {
    this.window = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  };
}, Tu = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)), Yw = class {
  _isScrolling = !1;
  // true when scroll is animating
  _isStopped = !1;
  // true if user should not be able to scroll - enable/disable programmatically
  _isLocked = !1;
  // same as isStopped but enabled/disabled when scroll reaches target
  _preventNextNativeScrollEvent = !1;
  _resetVelocityTimeout = null;
  __rafID = null;
  /**
   * Whether or not the user is touching the screen
   */
  isTouching;
  /**
   * The time in ms since the lenis instance was created
   */
  time = 0;
  /**
   * User data that will be forwarded through the scroll event
   *
   * @example
   * lenis.scrollTo(100, {
   *   userData: {
   *     foo: 'bar'
   *   }
   * })
   */
  userData = {};
  /**
   * The last velocity of the scroll
   */
  lastVelocity = 0;
  /**
   * The current velocity of the scroll
   */
  velocity = 0;
  /**
   * The direction of the scroll
   */
  direction = 0;
  /**
   * The options passed to the lenis instance
   */
  options;
  /**
   * The target scroll value
   */
  targetScroll;
  /**
   * The animated scroll value
   */
  animatedScroll;
  // These are instanciated here as they don't need information from the options
  animate = new Hw();
  emitter = new cm();
  // These are instanciated in the constructor as they need information from the options
  dimensions;
  // This is not private because it's used in the Snap class
  virtualScroll;
  constructor({
    wrapper: e = window,
    content: t = document.documentElement,
    eventsTarget: n = e,
    smoothWheel: r = !0,
    syncTouch: i = !1,
    syncTouchLerp: s = 0.075,
    touchInertiaExponent: o = 1.7,
    duration: a,
    // in seconds
    easing: c,
    lerp: l = 0.1,
    infinite: u = !1,
    orientation: f = "vertical",
    // vertical, horizontal
    gestureOrientation: h = "vertical",
    // vertical, horizontal, both
    touchMultiplier: p = 1,
    wheelMultiplier: g = 1,
    autoResize: y = !0,
    prevent: b,
    virtualScroll: w,
    overscroll: M = !0,
    autoRaf: C = !1,
    anchors: S = !1,
    autoToggle: _ = !1,
    // https://caniuse.com/?search=transition-behavior
    allowNestedScroll: O = !1,
    __experimental__naiveDimensions: k = !1
  } = {}) {
    window.lenisVersion = Uw, (!e || e === document.documentElement) && (e = window), typeof a == "number" && typeof c != "function" ? c = Tu : typeof c == "function" && typeof a != "number" && (a = 1), this.options = {
      wrapper: e,
      content: t,
      eventsTarget: n,
      smoothWheel: r,
      syncTouch: i,
      syncTouchLerp: s,
      touchInertiaExponent: o,
      duration: a,
      easing: c,
      lerp: l,
      infinite: u,
      gestureOrientation: h,
      orientation: f,
      touchMultiplier: p,
      wheelMultiplier: g,
      autoResize: y,
      prevent: b,
      virtualScroll: w,
      overscroll: M,
      autoRaf: C,
      anchors: S,
      autoToggle: _,
      allowNestedScroll: O,
      __experimental__naiveDimensions: k
    }, this.dimensions = new Jw(e, t, { autoResize: y }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), this.options.anchors && this.options.wrapper === window && this.options.wrapper.addEventListener(
      "click",
      this.onClick,
      !1
    ), this.options.wrapper.addEventListener(
      "pointerdown",
      this.onPointerDown,
      !1
    ), this.virtualScroll = new Kw(n, {
      touchMultiplier: p,
      wheelMultiplier: g
    }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && this.rootElement.addEventListener("transitionend", this.onTransitionEnd, {
      passive: !0
    }), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf));
  }
  /**
   * Destroy the lenis instance, remove all event listeners and clean up the class name
   */
  destroy() {
    this.emitter.destroy(), this.options.wrapper.removeEventListener(
      "scroll",
      this.onNativeScroll,
      !1
    ), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
      capture: !0
    }), this.options.wrapper.removeEventListener(
      "pointerdown",
      this.onPointerDown,
      !1
    ), this.options.anchors && this.options.wrapper === window && this.options.wrapper.removeEventListener(
      "click",
      this.onClick,
      !1
    ), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this.__rafID && cancelAnimationFrame(this.__rafID);
  }
  on(e, t) {
    return this.emitter.on(e, t);
  }
  off(e, t) {
    return this.emitter.off(e, t);
  }
  onScrollEnd = (e) => {
    e instanceof CustomEvent || (this.isScrolling === "smooth" || this.isScrolling === !1) && e.stopPropagation();
  };
  dispatchScrollendEvent = () => {
    this.options.wrapper.dispatchEvent(
      new CustomEvent("scrollend", {
        bubbles: this.options.wrapper === window,
        // cancelable: false,
        detail: {
          lenisScrollEnd: !0
        }
      })
    );
  };
  onTransitionEnd = (e) => {
    if (e.propertyName.includes("overflow")) {
      const t = this.isHorizontal ? "overflow-x" : "overflow-y", n = getComputedStyle(this.rootElement)[t];
      ["hidden", "clip"].includes(n) ? this.internalStop() : this.internalStart();
    }
  };
  setScroll(e) {
    this.isHorizontal ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" }) : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
  }
  onClick = (e) => {
    const n = e.composedPath().find(
      (r) => r instanceof HTMLAnchorElement && (r.getAttribute("href")?.startsWith("#") || r.getAttribute("href")?.startsWith("/#") || r.getAttribute("href")?.startsWith("./#"))
    );
    if (n) {
      const r = n.getAttribute("href");
      if (r) {
        const i = typeof this.options.anchors == "object" && this.options.anchors ? this.options.anchors : void 0;
        let s = `#${r.split("#")[1]}`;
        ["#", "/#", "./#", "#top", "/#top", "./#top"].includes(r) && (s = 0), this.scrollTo(s, i);
      }
    }
  };
  onPointerDown = (e) => {
    e.button === 1 && this.reset();
  };
  onVirtualScroll = (e) => {
    if (typeof this.options.virtualScroll == "function" && this.options.virtualScroll(e) === !1)
      return;
    const { deltaX: t, deltaY: n, event: r } = e;
    if (this.emitter.emit("virtual-scroll", { deltaX: t, deltaY: n, event: r }), r.ctrlKey || r.lenisStopPropagation) return;
    const i = r.type.includes("touch"), s = r.type.includes("wheel");
    this.isTouching = r.type === "touchstart" || r.type === "touchmove";
    const o = t === 0 && n === 0;
    if (this.options.syncTouch && i && r.type === "touchstart" && o && !this.isStopped && !this.isLocked) {
      this.reset();
      return;
    }
    const c = this.options.gestureOrientation === "vertical" && n === 0 || this.options.gestureOrientation === "horizontal" && t === 0;
    if (o || c)
      return;
    let l = r.composedPath();
    l = l.slice(0, l.indexOf(this.rootElement));
    const u = this.options.prevent;
    if (l.find(
      (b) => b instanceof HTMLElement && (typeof u == "function" && u?.(b) || b.hasAttribute?.("data-lenis-prevent") || i && b.hasAttribute?.("data-lenis-prevent-touch") || s && b.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.checkNestedScroll(b, { deltaX: t, deltaY: n }))
    ))
      return;
    if (this.isStopped || this.isLocked) {
      r.cancelable && r.preventDefault();
      return;
    }
    if (!(this.options.syncTouch && i || this.options.smoothWheel && s)) {
      this.isScrolling = "native", this.animate.stop(), r.lenisStopPropagation = !0;
      return;
    }
    let h = n;
    this.options.gestureOrientation === "both" ? h = Math.abs(n) > Math.abs(t) ? n : t : this.options.gestureOrientation === "horizontal" && (h = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && n > 0 || this.animatedScroll === this.limit && n < 0)) && (r.lenisStopPropagation = !0), r.cancelable && r.preventDefault();
    const p = i && this.options.syncTouch, y = i && r.type === "touchend";
    y && (h = Math.sign(this.velocity) * Math.pow(Math.abs(this.velocity), this.options.touchInertiaExponent)), this.scrollTo(this.targetScroll + h, {
      programmatic: !1,
      ...p ? {
        lerp: y ? this.options.syncTouchLerp : 1
        // immediate: !hasTouchInertia,
      } : {
        lerp: this.options.lerp,
        duration: this.options.duration,
        easing: this.options.easing
      }
    });
  };
  /**
   * Force lenis to recalculate the dimensions
   */
  resize() {
    this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  onNativeScroll = () => {
    if (this._resetVelocityTimeout !== null && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
      this._preventNextNativeScrollEvent = !1;
      return;
    }
    if (this.isScrolling === !1 || this.isScrolling === "native") {
      const e = this.animatedScroll;
      this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(
        this.animatedScroll - e
      ), this.isStopped || (this.isScrolling = "native"), this.emit(), this.velocity !== 0 && (this._resetVelocityTimeout = setTimeout(() => {
        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit();
      }, 400));
    }
  };
  reset() {
    this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop();
  }
  /**
   * Start lenis scroll after it has been stopped
   */
  start() {
    if (this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.removeProperty("overflow");
        return;
      }
      this.internalStart();
    }
  }
  internalStart() {
    this.isStopped && (this.reset(), this.isStopped = !1, this.emit());
  }
  /**
   * Stop lenis scroll
   */
  stop() {
    if (!this.isStopped) {
      if (this.options.autoToggle) {
        this.rootElement.style.setProperty("overflow", "clip");
        return;
      }
      this.internalStop();
    }
  }
  internalStop() {
    this.isStopped || (this.reset(), this.isStopped = !0, this.emit());
  }
  /**
   * RequestAnimationFrame for lenis
   *
   * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
   */
  raf = (e) => {
    const t = e - (this.time || e);
    this.time = e, this.animate.advance(t * 1e-3), this.options.autoRaf && (this.__rafID = requestAnimationFrame(this.raf));
  };
  /**
   * Scroll to a target value
   *
   * @param target The target value to scroll to
   * @param options The options for the scroll
   *
   * @example
   * lenis.scrollTo(100, {
   *   offset: 100,
   *   duration: 1,
   *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
   *   lerp: 0.1,
   *   onStart: () => {
   *     console.log('onStart')
   *   },
   *   onComplete: () => {
   *     console.log('onComplete')
   *   },
   * })
   */
  scrollTo(e, {
    offset: t = 0,
    immediate: n = !1,
    lock: r = !1,
    duration: i = this.options.duration,
    easing: s = this.options.easing,
    lerp: o = this.options.lerp,
    onStart: a,
    onComplete: c,
    force: l = !1,
    // scroll even if stopped
    programmatic: u = !0,
    // called from outside of the class
    userData: f
  } = {}) {
    if (!((this.isStopped || this.isLocked) && !l)) {
      if (typeof e == "string" && ["top", "left", "start"].includes(e))
        e = 0;
      else if (typeof e == "string" && ["bottom", "right", "end"].includes(e))
        e = this.limit;
      else {
        let h;
        if (typeof e == "string" ? h = document.querySelector(e) : e instanceof HTMLElement && e?.nodeType && (h = e), h) {
          if (this.options.wrapper !== window) {
            const g = this.rootElement.getBoundingClientRect();
            t -= this.isHorizontal ? g.left : g.top;
          }
          const p = h.getBoundingClientRect();
          e = (this.isHorizontal ? p.left : p.top) + this.animatedScroll;
        }
      }
      if (typeof e == "number") {
        if (e += t, e = Math.round(e), this.options.infinite) {
          if (u) {
            this.targetScroll = this.animatedScroll = this.scroll;
            const h = e - this.animatedScroll;
            h > this.limit / 2 ? e = e - this.limit : h < -this.limit / 2 && (e = e + this.limit);
          }
        } else
          e = am(0, e, this.limit);
        if (e === this.targetScroll) {
          a?.(this), c?.(this);
          return;
        }
        if (this.userData = f ?? {}, n) {
          this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), c?.(this), this.userData = {}, requestAnimationFrame(() => {
            this.dispatchScrollendEvent();
          });
          return;
        }
        u || (this.targetScroll = e), typeof i == "number" && typeof s != "function" ? s = Tu : typeof s == "function" && typeof i != "number" && (i = 1), this.animate.fromTo(this.animatedScroll, e, {
          duration: i,
          easing: s,
          lerp: o,
          onStart: () => {
            r && (this.isLocked = !0), this.isScrolling = "smooth", a?.(this);
          },
          onUpdate: (h, p) => {
            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = h - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = h, this.setScroll(this.scroll), u && (this.targetScroll = h), p || this.emit(), p && (this.reset(), this.emit(), c?.(this), this.userData = {}, requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            }), this.preventNextNativeScrollEvent());
          }
        });
      }
    }
  }
  preventNextNativeScrollEvent() {
    this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
      this._preventNextNativeScrollEvent = !1;
    });
  }
  checkNestedScroll(e, { deltaX: t, deltaY: n }) {
    const r = Date.now(), i = e._lenis ??= {};
    let s, o, a, c, l, u, f, h;
    const p = this.options.gestureOrientation;
    if (r - (i.time ?? 0) > 2e3) {
      i.time = Date.now();
      const _ = window.getComputedStyle(e);
      i.computedStyle = _;
      const O = _.overflowX, k = _.overflowY;
      if (s = ["auto", "overlay", "scroll"].includes(O), o = ["auto", "overlay", "scroll"].includes(k), i.hasOverflowX = s, i.hasOverflowY = o, !s && !o || p === "vertical" && !o || p === "horizontal" && !s) return !1;
      l = e.scrollWidth, u = e.scrollHeight, f = e.clientWidth, h = e.clientHeight, a = l > f, c = u > h, i.isScrollableX = a, i.isScrollableY = c, i.scrollWidth = l, i.scrollHeight = u, i.clientWidth = f, i.clientHeight = h;
    } else
      a = i.isScrollableX, c = i.isScrollableY, s = i.hasOverflowX, o = i.hasOverflowY, l = i.scrollWidth, u = i.scrollHeight, f = i.clientWidth, h = i.clientHeight;
    if (!s && !o || !a && !c || p === "vertical" && (!o || !c) || p === "horizontal" && (!s || !a))
      return !1;
    let g;
    if (p === "horizontal")
      g = "x";
    else if (p === "vertical")
      g = "y";
    else {
      const _ = t !== 0, O = n !== 0;
      _ && s && a && (g = "x"), O && o && c && (g = "y");
    }
    if (!g) return !1;
    let y, b, w, M, C;
    if (g === "x")
      y = e.scrollLeft, b = l - f, w = t, M = s, C = a;
    else if (g === "y")
      y = e.scrollTop, b = u - h, w = n, M = o, C = c;
    else
      return !1;
    return (w > 0 ? y < b : y > 0) && M && C;
  }
  /**
   * The root element on which lenis is instanced
   */
  get rootElement() {
    return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
  }
  /**
   * The limit which is the maximum scroll value
   */
  get limit() {
    return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  /**
   * Whether or not the scroll is horizontal
   */
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  /**
   * The actual scroll value
   */
  get actualScroll() {
    const e = this.options.wrapper;
    return this.isHorizontal ? e.scrollX ?? e.scrollLeft : e.scrollY ?? e.scrollTop;
  }
  /**
   * The current scroll value
   */
  get scroll() {
    return this.options.infinite ? qw(this.animatedScroll, this.limit) : this.animatedScroll;
  }
  /**
   * The progress of the scroll relative to the limit
   */
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  /**
   * Current scroll state
   */
  get isScrolling() {
    return this._isScrolling;
  }
  set isScrolling(e) {
    this._isScrolling !== e && (this._isScrolling = e, this.updateClassName());
  }
  /**
   * Check if lenis is stopped
   */
  get isStopped() {
    return this._isStopped;
  }
  set isStopped(e) {
    this._isStopped !== e && (this._isStopped = e, this.updateClassName());
  }
  /**
   * Check if lenis is locked
   */
  get isLocked() {
    return this._isLocked;
  }
  set isLocked(e) {
    this._isLocked !== e && (this._isLocked = e, this.updateClassName());
  }
  /**
   * Check if lenis is smooth scrolling
   */
  get isSmooth() {
    return this.isScrolling === "smooth";
  }
  /**
   * The class name applied to the wrapper element
   */
  get className() {
    let e = "lenis";
    return this.options.autoToggle && (e += " lenis-autoToggle"), this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), this.isScrolling === "smooth" && (e += " lenis-smooth"), e;
  }
  updateClassName() {
    this.cleanUpClassName(), this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
  }
  cleanUpClassName() {
    this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
  }
}, Xw = class {
  constructor(e) {
    this.state = e;
  }
  listeners = [];
  set(e) {
    this.state = e;
    for (let t of this.listeners)
      t(this.state);
  }
  subscribe(e) {
    return this.listeners = [...this.listeners, e], () => {
      this.listeners = this.listeners.filter((t) => t !== e);
    };
  }
  get() {
    return this.state;
  }
}, Qw = at(null), Mu = new Xw(null), Hi = Pi(
  ({
    children: e,
    root: t = !1,
    options: n = {},
    className: r,
    autoRaf: i = !0,
    style: s,
    props: o
  }, a) => {
    const c = Ie(null), l = Ie(null), [u, f] = _e(void 0);
    Tb(
      a,
      () => ({
        wrapper: c.current,
        content: l.current,
        lenis: u
      }),
      [u]
    ), me(() => {
      const y = new Yw({
        ...n,
        ...!t && {
          wrapper: c.current,
          content: l.current
        },
        autoRaf: n?.autoRaf ?? i
        // this is to avoid breaking the autoRaf prop if it's still used (require breaking change)
      });
      return f(y), () => {
        y.destroy(), f(void 0);
      };
    }, [t, JSON.stringify(n)]);
    const h = Ie([]), p = ce(
      (y, b) => {
        h.current.push({ callback: y, priority: b }), h.current.sort((w, M) => w.priority - M.priority);
      },
      []
    ), g = ce(
      (y) => {
        h.current = h.current.filter(
          (b) => b.callback !== y
        );
      },
      []
    );
    return me(() => {
      if (t && u)
        return Mu.set({ lenis: u, addCallback: p, removeCallback: g }), () => Mu.set(null);
    }, [t, u, p, g]), me(() => {
      if (!u) return;
      const y = (b) => {
        for (let w = 0; w < h.current.length; w++)
          h.current[w]?.callback(b);
      };
      return u.on("scroll", y), () => {
        u.off("scroll", y);
      };
    }, [u]), /* @__PURE__ */ x.jsx(
      Qw.Provider,
      {
        value: { lenis: u, addCallback: p, removeCallback: g },
        children: t ? e : /* @__PURE__ */ x.jsx("div", { ref: c, className: r, style: s, ...o, children: /* @__PURE__ */ x.jsx("div", { ref: l, children: e }) })
      }
    );
  }
);
const Kc = at({});
function Yc(e) {
  const t = Ie(null);
  return t.current === null && (t.current = e()), t.current;
}
const Xc = typeof window < "u", lm = Xc ? $c : me, io = /* @__PURE__ */ at(null);
function Qc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Zc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Yt = (e, t, n) => n > t ? t : n < e ? e : n;
function Ia(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let Ir = () => {
}, Xt = () => {
};
process.env.NODE_ENV !== "production" && (Ir = (e, t, n) => {
  !e && typeof console < "u" && console.warn(Ia(t, n));
}, Xt = (e, t, n) => {
  if (!e)
    throw new Error(Ia(t, n));
});
const Qt = {}, um = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function dm(e) {
  return typeof e == "object" && e !== null;
}
const fm = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function el(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const gt = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Zw = (e, t) => (n) => t(e(n)), Ai = (...e) => e.reduce(Zw), gi = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class tl {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Qc(this.subscriptions, t), () => Zc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Tt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, Ft = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function hm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Pu = /* @__PURE__ */ new Set();
function nl(e, t, n) {
  e || Pu.has(t) || (console.warn(Ia(t, n)), Pu.add(t));
}
const pm = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ex = 1e-7, tx = 12;
function nx(e, t, n, r, i) {
  let s, o, a = 0;
  do
    o = t + (n - t) / 2, s = pm(o, r, i) - e, s > 0 ? n = o : t = o;
  while (Math.abs(s) > ex && ++a < tx);
  return o;
}
function Oi(e, t, n, r) {
  if (e === t && n === r)
    return gt;
  const i = (s) => nx(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : pm(i(s), t, r);
}
const mm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, gm = (e) => (t) => 1 - e(1 - t), vm = /* @__PURE__ */ Oi(0.33, 1.53, 0.69, 0.99), rl = /* @__PURE__ */ gm(vm), ym = /* @__PURE__ */ mm(rl), bm = (e) => (e *= 2) < 1 ? 0.5 * rl(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), il = (e) => 1 - Math.sin(Math.acos(e)), wm = gm(il), xm = mm(il), rx = /* @__PURE__ */ Oi(0.42, 0, 1, 1), ix = /* @__PURE__ */ Oi(0, 0, 0.58, 1), Sm = /* @__PURE__ */ Oi(0.42, 0, 0.58, 1), sx = (e) => Array.isArray(e) && typeof e[0] != "number", _m = (e) => Array.isArray(e) && typeof e[0] == "number", Au = {
  linear: gt,
  easeIn: rx,
  easeInOut: Sm,
  easeOut: ix,
  circIn: il,
  circInOut: xm,
  circOut: wm,
  backIn: rl,
  backInOut: ym,
  backOut: vm,
  anticipate: bm
}, ox = (e) => typeof e == "string", Ou = (e) => {
  if (_m(e)) {
    Xt(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, r, i] = e;
    return Oi(t, n, r, i);
  } else if (ox(e))
    return Xt(Au[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Au[e];
  return e;
}, Gi = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function ax(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, s = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function c(u) {
    o.has(u) && (l.schedule(u), e()), u(a);
  }
  const l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, f = !1, h = !1) => {
      const g = h && i ? n : r;
      return f && o.add(u), g.has(u) || g.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      r.delete(u), o.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (a = u, i) {
        s = !0;
        return;
      }
      i = !0, [n, r] = [r, n], n.forEach(c), n.clear(), i = !1, s && (s = !1, l.process(u));
    }
  };
  return l;
}
const cx = 40;
function km(e, t) {
  let n = !1, r = !0;
  const i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, o = Gi.reduce((C, S) => (C[S] = ax(s), C), {}), { setup: a, read: c, resolveKeyframes: l, preUpdate: u, update: f, preRender: h, render: p, postRender: g } = o, y = () => {
    const C = Qt.useManualTiming ? i.timestamp : performance.now();
    n = !1, Qt.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(C - i.timestamp, cx), 1)), i.timestamp = C, i.isProcessing = !0, a.process(i), c.process(i), l.process(i), u.process(i), f.process(i), h.process(i), p.process(i), g.process(i), i.isProcessing = !1, n && t && (r = !1, e(y));
  }, b = () => {
    n = !0, r = !0, i.isProcessing || e(y);
  };
  return { schedule: Gi.reduce((C, S) => {
    const _ = o[S];
    return C[S] = (O, k = !1, P = !1) => (n || b(), _.schedule(O, k, P)), C;
  }, {}), cancel: (C) => {
    for (let S = 0; S < Gi.length; S++)
      o[Gi[S]].cancel(C);
  }, state: i, steps: o };
}
const { schedule: ke, cancel: Zt, state: ze, steps: Fo } = /* @__PURE__ */ km(typeof requestAnimationFrame < "u" ? requestAnimationFrame : gt, !0);
let ws;
function lx() {
  ws = void 0;
}
const nt = {
  now: () => (ws === void 0 && nt.set(ze.isProcessing || Qt.useManualTiming ? ze.timestamp : performance.now()), ws),
  set: (e) => {
    ws = e, queueMicrotask(lx);
  }
}, Cm = (e) => (t) => typeof t == "string" && t.startsWith(e), sl = /* @__PURE__ */ Cm("--"), ux = /* @__PURE__ */ Cm("var(--"), ol = (e) => ux(e) ? dx.test(e.split("/*")[0].trim()) : !1, dx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Nr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, vi = {
  ...Nr,
  transform: (e) => Yt(0, 1, e)
}, Ji = {
  ...Nr,
  default: 1
}, li = (e) => Math.round(e * 1e5) / 1e5, al = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function fx(e) {
  return e == null;
}
const hx = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, cl = (e, t) => (n) => !!(typeof n == "string" && hx.test(n) && n.startsWith(e) || t && !fx(n) && Object.prototype.hasOwnProperty.call(n, t)), Em = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [i, s, o, a] = r.match(al);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(s),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, px = (e) => Yt(0, 255, e), Bo = {
  ...Nr,
  transform: (e) => Math.round(px(e))
}, Fn = {
  test: /* @__PURE__ */ cl("rgb", "red"),
  parse: /* @__PURE__ */ Em("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Bo.transform(e) + ", " + Bo.transform(t) + ", " + Bo.transform(n) + ", " + li(vi.transform(r)) + ")"
};
function mx(e) {
  let t = "", n = "", r = "", i = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: i ? parseInt(i, 16) / 255 : 1
  };
}
const Na = {
  test: /* @__PURE__ */ cl("#"),
  parse: mx,
  transform: Fn.transform
}, Ri = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), un = /* @__PURE__ */ Ri("deg"), Bt = /* @__PURE__ */ Ri("%"), ne = /* @__PURE__ */ Ri("px"), gx = /* @__PURE__ */ Ri("vh"), vx = /* @__PURE__ */ Ri("vw"), Ru = {
  ...Bt,
  parse: (e) => Bt.parse(e) / 100,
  transform: (e) => Bt.transform(e * 100)
}, cr = {
  test: /* @__PURE__ */ cl("hsl", "hue"),
  parse: /* @__PURE__ */ Em("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Bt.transform(li(t)) + ", " + Bt.transform(li(n)) + ", " + li(vi.transform(r)) + ")"
}, je = {
  test: (e) => Fn.test(e) || Na.test(e) || cr.test(e),
  parse: (e) => Fn.test(e) ? Fn.parse(e) : cr.test(e) ? cr.parse(e) : Na.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Fn.transform(e) : cr.transform(e),
  getAnimatableNone: (e) => {
    const t = je.parse(e);
    return t.alpha = 0, je.transform(t);
  }
}, yx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function bx(e) {
  return isNaN(e) && typeof e == "string" && (e.match(al)?.length || 0) + (e.match(yx)?.length || 0) > 0;
}
const Tm = "number", Mm = "color", wx = "var", xx = "var(", Lu = "${}", Sx = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function yi(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, i = [];
  let s = 0;
  const a = t.replace(Sx, (c) => (je.test(c) ? (r.color.push(s), i.push(Mm), n.push(je.parse(c))) : c.startsWith(xx) ? (r.var.push(s), i.push(wx), n.push(c)) : (r.number.push(s), i.push(Tm), n.push(parseFloat(c))), ++s, Lu)).split(Lu);
  return { values: n, split: a, indexes: r, types: i };
}
function Pm(e) {
  return yi(e).values;
}
function Am(e) {
  const { split: t, types: n } = yi(e), r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (s += t[o], i[o] !== void 0) {
        const a = n[o];
        a === Tm ? s += li(i[o]) : a === Mm ? s += je.transform(i[o]) : s += i[o];
      }
    return s;
  };
}
const _x = (e) => typeof e == "number" ? 0 : je.test(e) ? je.getAnimatableNone(e) : e;
function kx(e) {
  const t = Pm(e);
  return Am(e)(t.map(_x));
}
const gn = {
  test: bx,
  parse: Pm,
  createTransformer: Am,
  getAnimatableNone: kx
};
function $o(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Cx({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let i = 0, s = 0, o = 0;
  if (!t)
    i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - a;
    i = $o(c, a, e + 1 / 3), s = $o(c, a, e), o = $o(c, a, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function js(e, t) {
  return (n) => n > 0 ? t : e;
}
const Me = (e, t, n) => e + (t - e) * n, Vo = (e, t, n) => {
  const r = e * e, i = n * (t * t - r) + r;
  return i < 0 ? 0 : Math.sqrt(i);
}, Ex = [Na, Fn, cr], Tx = (e) => Ex.find((t) => t.test(e));
function ju(e) {
  const t = Tx(e);
  if (Ir(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === cr && (n = Cx(n)), n;
}
const Du = (e, t) => {
  const n = ju(e), r = ju(t);
  if (!n || !r)
    return js(e, t);
  const i = { ...n };
  return (s) => (i.red = Vo(n.red, r.red, s), i.green = Vo(n.green, r.green, s), i.blue = Vo(n.blue, r.blue, s), i.alpha = Me(n.alpha, r.alpha, s), Fn.transform(i));
}, Fa = /* @__PURE__ */ new Set(["none", "hidden"]);
function Mx(e, t) {
  return Fa.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function Px(e, t) {
  return (n) => Me(e, t, n);
}
function ll(e) {
  return typeof e == "number" ? Px : typeof e == "string" ? ol(e) ? js : je.test(e) ? Du : Rx : Array.isArray(e) ? Om : typeof e == "object" ? je.test(e) ? Du : Ax : js;
}
function Om(e, t) {
  const n = [...e], r = n.length, i = e.map((s, o) => ll(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++)
      n[o] = i[o](s);
    return n;
  };
}
function Ax(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = ll(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r)
      n[s] = r[s](i);
    return n;
  };
}
function Ox(e, t) {
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i], o = e.indexes[s][r[s]], a = e.values[o] ?? 0;
    n[i] = a, r[s]++;
  }
  return n;
}
const Rx = (e, t) => {
  const n = gn.createTransformer(t), r = yi(e), i = yi(t);
  return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Fa.has(e) && !i.values.length || Fa.has(t) && !r.values.length ? Mx(e, t) : Ai(Om(Ox(r, i), i.values), n) : (Ir(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), js(e, t));
};
function Rm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Me(e, t, n) : ll(e)(e, t);
}
const Lx = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => ke.update(t, n),
    stop: () => Zt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ze.isProcessing ? ze.timestamp : nt.now()
  };
}, Lm = (e, t, n = 10) => {
  let r = "";
  const i = Math.max(Math.round(t / n), 2);
  for (let s = 0; s < i; s++)
    r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Ds = 2e4;
function ul(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ds; )
    t += n, r = e.next(t);
  return t >= Ds ? 1 / 0 : t;
}
function jx(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), i = Math.min(ul(r), Ds);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: /* @__PURE__ */ Ft(i)
  };
}
const Dx = 5;
function jm(e, t, n) {
  const r = Math.max(t - Dx, 0);
  return hm(n - e(r), t - r);
}
const Ee = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, Uo = 1e-3;
function Ix({ duration: e = Ee.duration, bounce: t = Ee.bounce, velocity: n = Ee.velocity, mass: r = Ee.mass }) {
  let i, s;
  Ir(e <= /* @__PURE__ */ Tt(Ee.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let o = 1 - t;
  o = Yt(Ee.minDamping, Ee.maxDamping, o), e = Yt(Ee.minDuration, Ee.maxDuration, /* @__PURE__ */ Ft(e)), o < 1 ? (i = (l) => {
    const u = l * o, f = u * e, h = u - n, p = Ba(l, o), g = Math.exp(-f);
    return Uo - h / p * g;
  }, s = (l) => {
    const f = l * o * e, h = f * n + n, p = Math.pow(o, 2) * Math.pow(l, 2) * e, g = Math.exp(-f), y = Ba(Math.pow(l, 2), o);
    return (-i(l) + Uo > 0 ? -1 : 1) * ((h - p) * g) / y;
  }) : (i = (l) => {
    const u = Math.exp(-l * e), f = (l - n) * e + 1;
    return -Uo + u * f;
  }, s = (l) => {
    const u = Math.exp(-l * e), f = (n - l) * (e * e);
    return u * f;
  });
  const a = 5 / e, c = Fx(i, s, a);
  if (e = /* @__PURE__ */ Tt(e), isNaN(c))
    return {
      stiffness: Ee.stiffness,
      damping: Ee.damping,
      duration: e
    };
  {
    const l = Math.pow(c, 2) * r;
    return {
      stiffness: l,
      damping: o * 2 * Math.sqrt(r * l),
      duration: e
    };
  }
}
const Nx = 12;
function Fx(e, t, n) {
  let r = n;
  for (let i = 1; i < Nx; i++)
    r = r - e(r) / t(r);
  return r;
}
function Ba(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Bx = ["duration", "bounce"], $x = ["stiffness", "damping", "mass"];
function Iu(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Vx(e) {
  let t = {
    velocity: Ee.velocity,
    stiffness: Ee.stiffness,
    damping: Ee.damping,
    mass: Ee.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Iu(e, $x) && Iu(e, Bx))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, s = 2 * Yt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = {
        ...t,
        mass: Ee.mass,
        stiffness: i,
        damping: s
      };
    } else {
      const n = Ix(e);
      t = {
        ...t,
        ...n,
        mass: Ee.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Is(e = Ee.visualDuration, t = Ee.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: s }, { stiffness: c, damping: l, mass: u, duration: f, velocity: h, isResolvedFromDuration: p } = Vx({
    ...n,
    velocity: -/* @__PURE__ */ Ft(n.velocity || 0)
  }), g = h || 0, y = l / (2 * Math.sqrt(c * u)), b = o - s, w = /* @__PURE__ */ Ft(Math.sqrt(c / u)), M = Math.abs(b) < 5;
  r || (r = M ? Ee.restSpeed.granular : Ee.restSpeed.default), i || (i = M ? Ee.restDelta.granular : Ee.restDelta.default);
  let C;
  if (y < 1) {
    const _ = Ba(w, y);
    C = (O) => {
      const k = Math.exp(-y * w * O);
      return o - k * ((g + y * w * b) / _ * Math.sin(_ * O) + b * Math.cos(_ * O));
    };
  } else if (y === 1)
    C = (_) => o - Math.exp(-w * _) * (b + (g + w * b) * _);
  else {
    const _ = w * Math.sqrt(y * y - 1);
    C = (O) => {
      const k = Math.exp(-y * w * O), P = Math.min(_ * O, 300);
      return o - k * ((g + y * w * b) * Math.sinh(P) + _ * b * Math.cosh(P)) / _;
    };
  }
  const S = {
    calculatedDuration: p && f || null,
    next: (_) => {
      const O = C(_);
      if (p)
        a.done = _ >= f;
      else {
        let k = _ === 0 ? g : 0;
        y < 1 && (k = _ === 0 ? /* @__PURE__ */ Tt(g) : jm(C, _, O));
        const P = Math.abs(k) <= r, R = Math.abs(o - O) <= i;
        a.done = P && R;
      }
      return a.value = a.done ? o : O, a;
    },
    toString: () => {
      const _ = Math.min(ul(S), Ds), O = Lm((k) => S.next(_ * k).value, _, 30);
      return _ + "ms " + O;
    },
    toTransition: () => {
    }
  };
  return S;
}
Is.applyToOptions = (e) => {
  const t = jx(e, 100, Is);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ Tt(t.duration), e.type = "keyframes", e;
};
function $a({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: s = 500, modifyTarget: o, min: a, max: c, restDelta: l = 0.5, restSpeed: u }) {
  const f = e[0], h = {
    done: !1,
    value: f
  }, p = (P) => a !== void 0 && P < a || c !== void 0 && P > c, g = (P) => a === void 0 ? c : c === void 0 || Math.abs(a - P) < Math.abs(c - P) ? a : c;
  let y = n * t;
  const b = f + y, w = o === void 0 ? b : o(b);
  w !== b && (y = w - f);
  const M = (P) => -y * Math.exp(-P / r), C = (P) => w + M(P), S = (P) => {
    const R = M(P), L = C(P);
    h.done = Math.abs(R) <= l, h.value = h.done ? w : L;
  };
  let _, O;
  const k = (P) => {
    p(h.value) && (_ = P, O = Is({
      keyframes: [h.value, g(h.value)],
      velocity: jm(C, P, h.value),
      // TODO: This should be passing * 1000
      damping: i,
      stiffness: s,
      restDelta: l,
      restSpeed: u
    }));
  };
  return k(0), {
    calculatedDuration: null,
    next: (P) => {
      let R = !1;
      return !O && _ === void 0 && (R = !0, S(P), k(P)), _ !== void 0 && P >= _ ? O.next(P - _) : (!R && S(P), h);
    }
  };
}
function Ux(e, t, n) {
  const r = [], i = n || Qt.mix || Rm, s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[o] || gt : t;
      a = Ai(c, a);
    }
    r.push(a);
  }
  return r;
}
function zx(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if (Xt(s === t.length, "Both input and output ranges must be the same length", "range-length"), s === 1)
    return () => t[0];
  if (s === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Ux(t, r, i), c = a.length, l = (u) => {
    if (o && u < e[0])
      return t[0];
    let f = 0;
    if (c > 1)
      for (; f < e.length - 2 && !(u < e[f + 1]); f++)
        ;
    const h = /* @__PURE__ */ gi(e[f], e[f + 1], u);
    return a[f](h);
  };
  return n ? (u) => l(Yt(e[0], e[s - 1], u)) : l;
}
function Wx(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = /* @__PURE__ */ gi(0, t, r);
    e.push(Me(n, 1, i));
  }
}
function qx(e) {
  const t = [0];
  return Wx(t, e.length - 1), t;
}
function Hx(e, t) {
  return e.map((n) => n * t);
}
function Gx(e, t) {
  return e.map(() => t || Sm).splice(0, e.length - 1);
}
function lr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const i = sx(r) ? r.map(Ou) : Ou(r), s = {
    done: !1,
    value: t[0]
  }, o = Hx(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : qx(t),
    e
  ), a = zx(o, t, {
    ease: Array.isArray(i) ? i : Gx(t, i)
  });
  return {
    calculatedDuration: e,
    next: (c) => (s.value = a(c), s.done = c >= e, s)
  };
}
const Jx = (e) => e !== null;
function dl(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(Jx), a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const Kx = {
  decay: $a,
  inertia: $a,
  tween: lr,
  keyframes: lr,
  spring: Is
};
function Dm(e) {
  typeof e.type == "string" && (e.type = Kx[e.type]);
}
class fl {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Yx = (e) => e / 100;
class hl extends fl {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      const { motionValue: n } = this.options;
      n && n.updatedAt !== nt.now() && this.tick(nt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Dm(t);
    const { type: n = lr, repeat: r = 0, repeatDelay: i = 0, repeatType: s, velocity: o = 0 } = t;
    let { keyframes: a } = t;
    const c = n || lr;
    process.env.NODE_ENV !== "production" && c !== lr && Xt(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), c !== lr && typeof a[0] != "number" && (this.mixKeyframes = Ai(Yx, Rm(a[0], a[1])), a = [0, 100]);
    const l = c({ ...t, keyframes: a });
    s === "mirror" && (this.mirroredGenerator = c({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -o
    })), l.calculatedDuration === null && (l.calculatedDuration = ul(l));
    const { calculatedDuration: u } = l;
    this.calculatedDuration = u, this.resolvedDuration = u + i, this.totalDuration = this.resolvedDuration * (r + 1) - i, this.generator = l;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: c } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: l = 0, keyframes: u, repeat: f, repeatType: h, repeatDelay: p, type: g, onUpdate: y, finalKeyframe: b } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const w = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1), M = this.playbackSpeed >= 0 ? w < 0 : w > i;
    this.currentTime = Math.max(w, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = i);
    let C = this.currentTime, S = r;
    if (f) {
      const P = Math.min(this.currentTime, i) / a;
      let R = Math.floor(P), L = P % 1;
      !L && P >= 1 && (L = 1), L === 1 && R--, R = Math.min(R, f + 1), !!(R % 2) && (h === "reverse" ? (L = 1 - L, p && (L -= p / a)) : h === "mirror" && (S = o)), C = Yt(0, 1, L) * a;
    }
    const _ = M ? { done: !1, value: u[0] } : S.next(C);
    s && (_.value = s(_.value));
    let { done: O } = _;
    !M && c !== null && (O = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
    const k = this.holdTime === null && (this.state === "finished" || this.state === "running" && O);
    return k && g !== $a && (_.value = dl(u, this.options, b, this.speed)), y && y(_.value), k && this.finish(), _;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ Ft(this.calculatedDuration);
  }
  get time() {
    return /* @__PURE__ */ Ft(this.currentTime);
  }
  set time(t) {
    t = /* @__PURE__ */ Tt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(nt.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ Ft(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: t = Lx, startTime: n } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(nt.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this);
  }
}
function Xx(e) {
  for (let t = 1; t < e.length; t++)
    e[t] ?? (e[t] = e[t - 1]);
}
const Bn = (e) => e * 180 / Math.PI, Va = (e) => {
  const t = Bn(Math.atan2(e[1], e[0]));
  return Ua(t);
}, Qx = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Va,
  rotateZ: Va,
  skewX: (e) => Bn(Math.atan(e[1])),
  skewY: (e) => Bn(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Ua = (e) => (e = e % 360, e < 0 && (e += 360), e), Nu = Va, Fu = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Bu = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Zx = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Fu,
  scaleY: Bu,
  scale: (e) => (Fu(e) + Bu(e)) / 2,
  rotateX: (e) => Ua(Bn(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Ua(Bn(Math.atan2(-e[2], e[0]))),
  rotateZ: Nu,
  rotate: Nu,
  skewX: (e) => Bn(Math.atan(e[4])),
  skewY: (e) => Bn(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function za(e) {
  return e.includes("scale") ? 1 : 0;
}
function Wa(e, t) {
  if (!e || e === "none")
    return za(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n)
    r = Zx, i = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = Qx, i = a;
  }
  if (!i)
    return za(t);
  const s = r[t], o = i[1].split(",").map(tS);
  return typeof s == "function" ? s(o) : o[s];
}
const eS = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Wa(n, t);
};
function tS(e) {
  return parseFloat(e.trim());
}
const Fr = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Br = new Set(Fr), $u = (e) => e === Nr || e === ne, nS = /* @__PURE__ */ new Set(["x", "y", "z"]), rS = Fr.filter((e) => !nS.has(e));
function iS(e) {
  const t = [];
  return rS.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Vn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Wa(t, "x"),
  y: (e, { transform: t }) => Wa(t, "y")
};
Vn.translateX = Vn.x;
Vn.translateY = Vn.y;
const Un = /* @__PURE__ */ new Set();
let qa = !1, Ha = !1, Ga = !1;
function Im() {
  if (Ha) {
    const e = Array.from(Un).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const i = iS(r);
      i.length && (n.set(r, i), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const i = n.get(r);
      i && i.forEach(([s, o]) => {
        r.getValue(s)?.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Ha = !1, qa = !1, Un.forEach((e) => e.complete(Ga)), Un.clear();
}
function Nm() {
  Un.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Ha = !0);
  });
}
function sS() {
  Ga = !0, Nm(), Im(), Ga = !1;
}
class pl {
  constructor(t, n, r, i, s, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = i, this.element = s, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Un.add(this), qa || (qa = !0, ke.read(Nm), ke.resolveKeyframes(Im))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: i } = this;
    if (t[0] === null) {
      const s = i?.get(), o = t[t.length - 1];
      if (s !== void 0)
        t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]);
    }
    Xx(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), Un.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Un.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const oS = (e) => e.startsWith("--");
function aS(e, t, n) {
  oS(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const cS = /* @__PURE__ */ el(() => window.ScrollTimeline !== void 0), lS = {};
function uS(e, t) {
  const n = /* @__PURE__ */ el(e);
  return () => lS[t] ?? n();
}
const Fm = /* @__PURE__ */ uS(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), oi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Vu = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ oi([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ oi([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ oi([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ oi([0.33, 1.53, 0.69, 0.99])
};
function Bm(e, t) {
  if (e)
    return typeof e == "function" ? Fm() ? Lm(e, t) : "ease-out" : _m(e) ? oi(e) : Array.isArray(e) ? e.map((n) => Bm(n, t) || Vu.easeOut) : Vu[e];
}
function dS(e, t, n, { delay: r = 0, duration: i = 300, repeat: s = 0, repeatType: o = "loop", ease: a = "easeOut", times: c } = {}, l = void 0) {
  const u = {
    [t]: n
  };
  c && (u.offset = c);
  const f = Bm(a, i);
  Array.isArray(f) && (u.easing = f);
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  return l && (h.pseudoElement = l), e.animate(u, h);
}
function $m(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function fS({ type: e, ...t }) {
  return $m(e) && Fm() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class hS extends fl {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: o = !1, finalKeyframe: a, onComplete: c } = t;
    this.isPseudoElement = !!s, this.allowFlatten = o, this.options = t, Xt(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const l = fS(t);
    this.animation = dS(n, r, i, l, s), l.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !s) {
        const u = dl(i, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(u) : aS(n, r, u), this.animation.cancel();
      }
      c?.(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const t = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Ft(Number(t));
  }
  get time() {
    return /* @__PURE__ */ Ft(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ Tt(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, t && cS() ? (this.animation.timeline = t, gt) : n(this);
  }
}
const Vm = {
  anticipate: bm,
  backInOut: ym,
  circInOut: xm
};
function pS(e) {
  return e in Vm;
}
function mS(e) {
  typeof e.ease == "string" && pS(e.ease) && (e.ease = Vm[e.ease]);
}
const Uu = 10;
class gS extends hS {
  constructor(t) {
    mS(t), Dm(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    const { motionValue: n, onUpdate: r, onComplete: i, element: s, ...o } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new hl({
      ...o,
      autoplay: !1
    }), c = /* @__PURE__ */ Tt(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(c - Uu).value, a.sample(c).value, Uu), a.stop();
  }
}
const zu = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(gn.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function vS(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function yS(e, t, n, r) {
  const i = e[0];
  if (i === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], o = zu(i, t), a = zu(s, t);
  return Ir(o === a, `You are trying to animate ${t} from "${i}" to "${s}". "${o ? s : i}" is not an animatable value.`, "value-not-animatable"), !o || !a ? !1 : vS(e) || (n === "spring" || $m(n)) && r;
}
const bS = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), wS = /* @__PURE__ */ el(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function xS(e) {
  const { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: o } = e;
  if (!(t?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: c, transformTemplate: l } = t.owner.getProps();
  return wS() && n && bS.has(n) && (n !== "transform" || !l) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !c && !r && i !== "mirror" && s !== 0 && o !== "inertia";
}
const SS = 40;
class _S extends fl {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: i = 0, repeatDelay: s = 0, repeatType: o = "loop", keyframes: a, name: c, motionValue: l, element: u, ...f }) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = nt.now();
    const h = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: i,
      repeatDelay: s,
      repeatType: o,
      name: c,
      motionValue: l,
      element: u,
      ...f
    }, p = u?.KeyframeResolver || pl;
    this.keyframeResolver = new p(a, (g, y, b) => this.onKeyframesResolved(g, y, h, !b), c, l, u), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const { name: s, type: o, velocity: a, delay: c, isHandoff: l, onUpdate: u } = r;
    this.resolvedAt = nt.now(), yS(t, s, o, a) || ((Qt.instantAnimations || !c) && u?.(dl(t, r, n)), t[0] = t[t.length - 1], r.duration = 0, r.repeat = 0);
    const h = {
      startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > SS ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, p = !l && xS(h) ? new gS({
      ...h,
      element: h.motionValue.owner.current
    }) : new hl(h);
    p.finished.then(() => this.notifyFinished()).catch(gt), this.pendingTimeline && (this.stopTimeline = p.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = p;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), sS()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
const kS = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function CS(e) {
  const t = kS.exec(e);
  if (!t)
    return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
const ES = 4;
function Um(e, t, n = 1) {
  Xt(n <= ES, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, i] = CS(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return um(o) ? parseFloat(o) : o;
  }
  return ol(i) ? Um(i, t, n + 1) : i;
}
function ml(e, t) {
  return e?.[t] ?? e?.default ?? e;
}
const zm = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Fr
]), TS = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Wm = (e) => (t) => t.test(e), qm = [Nr, ne, Bt, un, vx, gx, TS], Wu = (e) => qm.find(Wm(e));
function MS(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || fm(e) : !0;
}
const PS = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function AS(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(al) || [];
  if (!r)
    return e;
  const i = n.replace(r, "");
  let s = PS.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const OS = /\b([a-z-]*)\(.*?\)/gu, Ja = {
  ...gn,
  getAnimatableNone: (e) => {
    const t = e.match(OS);
    return t ? t.map(AS).join(" ") : e;
  }
}, qu = {
  ...Nr,
  transform: Math.round
}, RS = {
  rotate: un,
  rotateX: un,
  rotateY: un,
  rotateZ: un,
  scale: Ji,
  scaleX: Ji,
  scaleY: Ji,
  scaleZ: Ji,
  skew: un,
  skewX: un,
  skewY: un,
  distance: ne,
  translateX: ne,
  translateY: ne,
  translateZ: ne,
  x: ne,
  y: ne,
  z: ne,
  perspective: ne,
  transformPerspective: ne,
  opacity: vi,
  originX: Ru,
  originY: Ru,
  originZ: ne
}, gl = {
  // Border props
  borderWidth: ne,
  borderTopWidth: ne,
  borderRightWidth: ne,
  borderBottomWidth: ne,
  borderLeftWidth: ne,
  borderRadius: ne,
  radius: ne,
  borderTopLeftRadius: ne,
  borderTopRightRadius: ne,
  borderBottomRightRadius: ne,
  borderBottomLeftRadius: ne,
  // Positioning props
  width: ne,
  maxWidth: ne,
  height: ne,
  maxHeight: ne,
  top: ne,
  right: ne,
  bottom: ne,
  left: ne,
  // Spacing props
  padding: ne,
  paddingTop: ne,
  paddingRight: ne,
  paddingBottom: ne,
  paddingLeft: ne,
  margin: ne,
  marginTop: ne,
  marginRight: ne,
  marginBottom: ne,
  marginLeft: ne,
  // Misc
  backgroundPositionX: ne,
  backgroundPositionY: ne,
  ...RS,
  zIndex: qu,
  // SVG
  fillOpacity: vi,
  strokeOpacity: vi,
  numOctaves: qu
}, LS = {
  ...gl,
  // Color props
  color: je,
  backgroundColor: je,
  outlineColor: je,
  fill: je,
  stroke: je,
  // Border props
  borderColor: je,
  borderTopColor: je,
  borderRightColor: je,
  borderBottomColor: je,
  borderLeftColor: je,
  filter: Ja,
  WebkitFilter: Ja
}, Hm = (e) => LS[e];
function Gm(e, t) {
  let n = Hm(e);
  return n !== Ja && (n = gn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const jS = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function DS(e, t, n) {
  let r = 0, i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !jS.has(s) && yi(s).values.length && (i = e[r]), r++;
  }
  if (i && n)
    for (const s of t)
      e[s] = Gm(n, i);
}
class IS extends pl {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let l = t[c];
      if (typeof l == "string" && (l = l.trim(), ol(l))) {
        const u = Um(l, n.current);
        u !== void 0 && (t[c] = u), c === t.length - 1 && (this.finalKeyframe = l);
      }
    }
    if (this.resolveNoneKeyframes(), !zm.has(r) || t.length !== 2)
      return;
    const [i, s] = t, o = Wu(i), a = Wu(s);
    if (o !== a)
      if ($u(o) && $u(a))
        for (let c = 0; c < t.length; c++) {
          const l = t[c];
          typeof l == "string" && (t[c] = parseFloat(l));
        }
      else Vn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let i = 0; i < t.length; i++)
      (t[i] === null || MS(t[i])) && r.push(i);
    r.length && DS(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Vn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1, o = r[s];
    r[s] = Vn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), this.removedTransforms?.length && this.removedTransforms.forEach(([a, c]) => {
      t.getValue(a).set(c);
    }), this.resolveNoneKeyframes();
  }
}
function NS(e, t, n) {
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const i = n?.[e] ?? r.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const Jm = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function Km(e) {
  return dm(e) && "offsetHeight" in e;
}
const Hu = 30, FS = (e) => !isNaN(parseFloat(e));
class BS {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, i = !0) => {
      const s = nt.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
      i && this.events.renderRequest?.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = nt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = FS(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && nl(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new tl());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ke.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = nt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Hu)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Hu);
    return hm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function kr(e, t) {
  return new BS(e, t);
}
const { schedule: vl } = /* @__PURE__ */ km(queueMicrotask, !1), St = {
  x: !1,
  y: !1
};
function Ym() {
  return St.x || St.y;
}
function $S(e) {
  return e === "x" || e === "y" ? St[e] ? null : (St[e] = !0, () => {
    St[e] = !1;
  }) : St.x || St.y ? null : (St.x = St.y = !0, () => {
    St.x = St.y = !1;
  });
}
function Xm(e, t) {
  const n = NS(e), r = new AbortController(), i = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, i, () => r.abort()];
}
function Gu(e) {
  return !(e.pointerType === "touch" || Ym());
}
function VS(e, t, n = {}) {
  const [r, i, s] = Xm(e, n), o = (a) => {
    if (!Gu(a))
      return;
    const { target: c } = a, l = t(c, a);
    if (typeof l != "function" || !c)
      return;
    const u = (f) => {
      Gu(f) && (l(f), c.removeEventListener("pointerleave", u));
    };
    c.addEventListener("pointerleave", u, i);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", o, i);
  }), s;
}
const Qm = (e, t) => t ? e === t ? !0 : Qm(e, t.parentElement) : !1, yl = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, US = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function zS(e) {
  return US.has(e.tagName) || e.tabIndex !== -1;
}
const xs = /* @__PURE__ */ new WeakSet();
function Ju(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function zo(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const WS = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Ju(() => {
    if (xs.has(n))
      return;
    zo(n, "down");
    const i = Ju(() => {
      zo(n, "up");
    }), s = () => zo(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ku(e) {
  return yl(e) && !Ym();
}
function qS(e, t, n = {}) {
  const [r, i, s] = Xm(e, n), o = (a) => {
    const c = a.currentTarget;
    if (!Ku(a))
      return;
    xs.add(c);
    const l = t(c, a), u = (p, g) => {
      window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", h), xs.has(c) && xs.delete(c), Ku(p) && typeof l == "function" && l(p, { success: g });
    }, f = (p) => {
      u(p, c === window || c === document || n.useGlobalTarget || Qm(c, p.target));
    }, h = (p) => {
      u(p, !1);
    };
    window.addEventListener("pointerup", f, i), window.addEventListener("pointercancel", h, i);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i), Km(a) && (a.addEventListener("focus", (l) => WS(l, i)), !zS(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), s;
}
function Zm(e) {
  return dm(e) && "ownerSVGElement" in e;
}
function HS(e) {
  return Zm(e) && e.tagName === "svg";
}
const Ge = (e) => !!(e && e.getVelocity), GS = [...qm, je, gn], JS = (e) => GS.find(Wm(e)), bl = at({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
class KS extends A.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, i = Km(r) && r.offsetWidth || 0, s = this.props.sizeRef.current;
      s.height = n.offsetHeight || 0, s.width = n.offsetWidth || 0, s.top = n.offsetTop, s.left = n.offsetLeft, s.right = i - s.width - s.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function YS({ children: e, isPresent: t, anchorX: n, root: r }) {
  const i = Vc(), s = Ie(null), o = Ie({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = Le(bl);
  return jp(() => {
    const { width: c, height: l, top: u, left: f, right: h } = o.current;
    if (t || !s.current || !c || !l)
      return;
    const p = n === "left" ? `left: ${f}` : `right: ${h}`;
    s.current.dataset.motionPopId = i;
    const g = document.createElement("style");
    a && (g.nonce = a);
    const y = r ?? document.head;
    return y.appendChild(g), g.sheet && g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${l}px !important;
            ${p}px !important;
            top: ${u}px !important;
          }
        `), () => {
      y.contains(g) && y.removeChild(g);
    };
  }, [t]), x.jsx(KS, { isPresent: t, childRef: s, sizeRef: o, children: A.cloneElement(e, { ref: s }) });
}
const XS = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o, anchorX: a, root: c }) => {
  const l = Yc(QS), u = Vc();
  let f = !0, h = Vt(() => (f = !1, {
    id: u,
    initial: t,
    isPresent: n,
    custom: i,
    onExitComplete: (p) => {
      l.set(p, !0);
      for (const g of l.values())
        if (!g)
          return;
      r && r();
    },
    register: (p) => (l.set(p, !1), () => l.delete(p))
  }), [n, l, r]);
  return s && f && (h = { ...h }), Vt(() => {
    l.forEach((p, g) => l.set(g, !1));
  }, [n]), A.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), o === "popLayout" && (e = x.jsx(YS, { isPresent: n, anchorX: a, root: c, children: e })), x.jsx(io.Provider, { value: h, children: e });
};
function QS() {
  return /* @__PURE__ */ new Map();
}
function eg(e = !0) {
  const t = Le(io);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t, s = Vc();
  me(() => {
    if (e)
      return i(s);
  }, [e]);
  const o = ce(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Ki = (e) => e.key || "";
function Yu(e) {
  const t = [];
  return Mb.forEach(e, (n) => {
    Pb(n) && t.push(n);
  }), t;
}
const ZS = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: s = "sync", propagate: o = !1, anchorX: a = "left", root: c }) => {
  const [l, u] = eg(o), f = Vt(() => Yu(e), [e]), h = o && !l ? [] : f.map(Ki), p = Ie(!0), g = Ie(f), y = Yc(() => /* @__PURE__ */ new Map()), [b, w] = _e(f), [M, C] = _e(f);
  lm(() => {
    p.current = !1, g.current = f;
    for (let O = 0; O < M.length; O++) {
      const k = Ki(M[O]);
      h.includes(k) ? y.delete(k) : y.get(k) !== !0 && y.set(k, !1);
    }
  }, [M, h.length, h.join("-")]);
  const S = [];
  if (f !== b) {
    let O = [...f];
    for (let k = 0; k < M.length; k++) {
      const P = M[k], R = Ki(P);
      h.includes(R) || (O.splice(k, 0, P), S.push(P));
    }
    return s === "wait" && S.length && (O = S), C(Yu(O)), w(f), null;
  }
  process.env.NODE_ENV !== "production" && s === "wait" && M.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: _ } = Le(Kc);
  return x.jsx(x.Fragment, { children: M.map((O) => {
    const k = Ki(O), P = o && !l ? !1 : f === M || h.includes(k), R = () => {
      if (y.has(k))
        y.set(k, !0);
      else
        return;
      let L = !0;
      y.forEach((I) => {
        I || (L = !1);
      }), L && (_?.(), C(g.current), o && u?.(), r && r());
    };
    return x.jsx(XS, { isPresent: P, initial: !p.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: i, mode: s, root: c, onExitComplete: P ? void 0 : R, anchorX: a, children: O }, k);
  }) });
}, tg = at({ strict: !1 }), Xu = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Cr = {};
for (const e in Xu)
  Cr[e] = {
    isEnabled: (t) => Xu[e].some((n) => !!t[n])
  };
function e0(e) {
  for (const t in e)
    Cr[t] = {
      ...Cr[t],
      ...e[t]
    };
}
const t0 = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Ns(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || t0.has(e);
}
let ng = (e) => !Ns(e);
function n0(e) {
  typeof e == "function" && (ng = (t) => t.startsWith("on") ? !Ns(t) : e(t));
}
try {
  n0(require("@emotion/is-prop-valid").default);
} catch {
}
function r0(e, t, n) {
  const r = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (ng(i) || n === !0 && Ns(i) || !t && !Ns(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
  return r;
}
const so = /* @__PURE__ */ at({});
function oo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function bi(e) {
  return typeof e == "string" || Array.isArray(e);
}
const wl = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], xl = ["initial", ...wl];
function ao(e) {
  return oo(e.animate) || xl.some((t) => bi(e[t]));
}
function rg(e) {
  return !!(ao(e) || e.variants);
}
function i0(e, t) {
  if (ao(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || bi(n) ? n : void 0,
      animate: bi(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function s0(e) {
  const { initial: t, animate: n } = i0(e, Le(so));
  return Vt(() => ({ initial: t, animate: n }), [Qu(t), Qu(n)]);
}
function Qu(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const wi = {};
function o0(e) {
  for (const t in e)
    wi[t] = e[t], sl(t) && (wi[t].isCSSVariable = !0);
}
function ig(e, { layout: t, layoutId: n }) {
  return Br.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!wi[e] || e === "opacity");
}
const a0 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, c0 = Fr.length;
function l0(e, t, n) {
  let r = "", i = !0;
  for (let s = 0; s < c0; s++) {
    const o = Fr[s], a = e[o];
    if (a === void 0)
      continue;
    let c = !0;
    if (typeof a == "number" ? c = a === (o.startsWith("scale") ? 1 : 0) : c = parseFloat(a) === 0, !c || n) {
      const l = Jm(a, gl[o]);
      if (!c) {
        i = !1;
        const u = a0[o] || o;
        r += `${u}(${l}) `;
      }
      n && (t[o] = l);
    }
  }
  return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
function Sl(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1, a = !1;
  for (const c in t) {
    const l = t[c];
    if (Br.has(c)) {
      o = !0;
      continue;
    } else if (sl(c)) {
      i[c] = l;
      continue;
    } else {
      const u = Jm(l, gl[c]);
      c.startsWith("origin") ? (a = !0, s[c] = u) : r[c] = u;
    }
  }
  if (t.transform || (o || n ? r.transform = l0(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: c = "50%", originY: l = "50%", originZ: u = 0 } = s;
    r.transformOrigin = `${c} ${l} ${u}`;
  }
}
const _l = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function sg(e, t, n) {
  for (const r in t)
    !Ge(t[r]) && !ig(r, n) && (e[r] = t[r]);
}
function u0({ transformTemplate: e }, t) {
  return Vt(() => {
    const n = _l();
    return Sl(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function d0(e, t) {
  const n = e.style || {}, r = {};
  return sg(r, n, e), Object.assign(r, u0(e, t)), r;
}
function f0(e, t) {
  const n = {}, r = d0(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const h0 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, p0 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function m0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? h0 : p0;
  e[s.offset] = ne.transform(-r);
  const o = ne.transform(t), a = ne.transform(n);
  e[s.array] = `${o} ${a}`;
}
function og(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: s = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, c, l, u) {
  if (Sl(e, a, l), c) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: f, style: h } = e;
  f.transform && (h.transform = f.transform, delete f.transform), (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), h.transform && (h.transformBox = u?.transformBox ?? "fill-box", delete f.transformBox), t !== void 0 && (f.x = t), n !== void 0 && (f.y = n), r !== void 0 && (f.scale = r), i !== void 0 && m0(f, i, s, o, !1);
}
const ag = () => ({
  ..._l(),
  attrs: {}
}), cg = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function g0(e, t, n, r) {
  const i = Vt(() => {
    const s = ag();
    return og(s, t, cg(r), e.transformTemplate, e.style), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    sg(s, e.style, e), i.style = { ...s, ...i.style };
  }
  return i;
}
const v0 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function kl(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(v0.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function y0(e, t, n, { latestValues: r }, i, s = !1) {
  const a = (kl(e) ? g0 : f0)(t, r, i, e), c = r0(t, typeof e == "string", s), l = e !== Uc ? { ...c, ...a, ref: n } : {}, { children: u } = t, f = Vt(() => Ge(u) ? u.get() : u, [u]);
  return mi(e, {
    ...l,
    children: f
  });
}
function Zu(e) {
  const t = [{}, {}];
  return e?.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Cl(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Zu(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [i, s] = Zu(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function Ss(e) {
  return Ge(e) ? e.get() : e;
}
function b0({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return {
    latestValues: w0(n, r, i, e),
    renderState: t()
  };
}
function w0(e, t, n, r) {
  const i = {}, s = r(e, {});
  for (const h in s)
    i[h] = Ss(s[h]);
  let { initial: o, animate: a } = e;
  const c = ao(e), l = rg(e);
  t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const f = u ? a : o;
  if (f && typeof f != "boolean" && !oo(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let p = 0; p < h.length; p++) {
      const g = Cl(e, h[p]);
      if (g) {
        const { transitionEnd: y, transition: b, ...w } = g;
        for (const M in w) {
          let C = w[M];
          if (Array.isArray(C)) {
            const S = u ? C.length - 1 : 0;
            C = C[S];
          }
          C !== null && (i[M] = C);
        }
        for (const M in y)
          i[M] = y[M];
      }
    }
  }
  return i;
}
const lg = (e) => (t, n) => {
  const r = Le(so), i = Le(io), s = () => b0(e, t, r, i);
  return n ? s() : Yc(s);
};
function El(e, t, n) {
  const { style: r } = e, i = {};
  for (const s in r)
    (Ge(r[s]) || t.style && Ge(t.style[s]) || ig(s, e) || n?.getValue(s)?.liveStyle !== void 0) && (i[s] = r[s]);
  return i;
}
const x0 = /* @__PURE__ */ lg({
  scrapeMotionValuesFromProps: El,
  createRenderState: _l
});
function ug(e, t, n) {
  const r = El(e, t, n);
  for (const i in e)
    if (Ge(e[i]) || Ge(t[i])) {
      const s = Fr.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
      r[s] = e[i];
    }
  return r;
}
const S0 = /* @__PURE__ */ lg({
  scrapeMotionValuesFromProps: ug,
  createRenderState: ag
}), _0 = Symbol.for("motionComponentSymbol");
function ur(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function k0(e, t, n) {
  return ce(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : ur(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
const Tl = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), C0 = "framerAppearId", dg = "data-" + Tl(C0), fg = at({});
function E0(e, t, n, r, i) {
  const { visualElement: s } = Le(so), o = Le(tg), a = Le(io), c = Le(bl).reducedMotion, l = Ie(null);
  r = r || o.renderer, !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: s,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const u = l.current, f = Le(fg);
  u && !u.projection && i && (u.type === "html" || u.type === "svg") && T0(l.current, n, i, f);
  const h = Ie(!1);
  jp(() => {
    u && h.current && u.update(n, a);
  });
  const p = n[dg], g = Ie(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
  return lm(() => {
    u && (h.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), u.scheduleRenderMicrotask(), g.current && u.animationState && u.animationState.animateChanges());
  }), me(() => {
    u && (!g.current && u.animationState && u.animationState.animateChanges(), g.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(p);
    }), g.current = !1));
  }), u;
}
function T0(e, t, n, r) {
  const { layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: c, layoutRoot: l, layoutCrossfade: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : hg(e.parent)), e.projection.setOptions({
    layoutId: i,
    layout: s,
    alwaysMeasureLayout: !!o || a && ur(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    crossfade: u,
    layoutScroll: c,
    layoutRoot: l
  });
}
function hg(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : hg(e.parent);
}
function Wo(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && e0(n);
  const i = kl(e) ? S0 : x0;
  function s(a, c) {
    let l;
    const u = {
      ...Le(bl),
      ...a,
      layoutId: M0(a)
    }, { isStatic: f } = u, h = s0(a), p = i(a, f);
    if (!f && Xc) {
      P0(u, n);
      const g = A0(u);
      l = g.MeasureLayout, h.visualElement = E0(e, p, u, r, g.ProjectionNode);
    }
    return x.jsxs(so.Provider, { value: h, children: [l && h.visualElement ? x.jsx(l, { visualElement: h.visualElement, ...u }) : null, y0(e, a, k0(p, h.visualElement, c), p, f, t)] });
  }
  s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const o = Pi(s);
  return o[_0] = e, o;
}
function M0({ layoutId: e }) {
  const t = Le(Kc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function P0(e, t) {
  const n = Le(tg).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Ir(!1, r, "lazy-strict-mode") : Xt(!1, r, "lazy-strict-mode");
  }
}
function A0(e) {
  const { drag: t, layout: n } = Cr;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function O0(e, t) {
  if (typeof Proxy > "u")
    return Wo;
  const n = /* @__PURE__ */ new Map(), r = (s, o) => Wo(s, o, e, t), i = (s, o) => (process.env.NODE_ENV !== "production" && nl(!1, "motion() is deprecated. Use motion.create() instead."), r(s, o));
  return new Proxy(i, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, Wo(o, void 0, e, t)), n.get(o))
  });
}
function pg({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function R0({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function L0(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function qo(e) {
  return e === void 0 || e === 1;
}
function Ka({ scale: e, scaleX: t, scaleY: n }) {
  return !qo(e) || !qo(t) || !qo(n);
}
function In(e) {
  return Ka(e) || mg(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function mg(e) {
  return ed(e.x) || ed(e.y);
}
function ed(e) {
  return e && e !== "0%";
}
function Fs(e, t, n) {
  const r = e - n, i = t * r;
  return n + i;
}
function td(e, t, n, r, i) {
  return i !== void 0 && (e = Fs(e, i, r)), Fs(e, n, r) + t;
}
function Ya(e, t = 0, n = 1, r, i) {
  e.min = td(e.min, t, n, r, i), e.max = td(e.max, t, n, r, i);
}
function gg(e, { x: t, y: n }) {
  Ya(e.x, t.translate, t.scale, t.originPoint), Ya(e.y, n.translate, n.scale, n.originPoint);
}
const nd = 0.999999999999, rd = 1.0000000000001;
function j0(e, t, n, r = !1) {
  const i = n.length;
  if (!i)
    return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    s = n[a], o = s.projectionDelta;
    const { visualElement: c } = s.options;
    c && c.props.style && c.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && fr(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, gg(e, o)), r && In(s.latestValues) && fr(e, s.latestValues));
  }
  t.x < rd && t.x > nd && (t.x = 1), t.y < rd && t.y > nd && (t.y = 1);
}
function dr(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function id(e, t, n, r, i = 0.5) {
  const s = Me(e.min, e.max, i);
  Ya(e, t, n, s, r);
}
function fr(e, t) {
  id(e.x, t.x, t.scaleX, t.scale, t.originX), id(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function vg(e, t) {
  return pg(L0(e.getBoundingClientRect(), t));
}
function D0(e, t, n) {
  const r = vg(e, n), { scroll: i } = t;
  return i && (dr(r.x, i.offset.x), dr(r.y, i.offset.y)), r;
}
const sd = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), hr = () => ({
  x: sd(),
  y: sd()
}), od = () => ({ min: 0, max: 0 }), Oe = () => ({
  x: od(),
  y: od()
}), Xa = { current: null }, yg = { current: !1 };
function I0() {
  if (yg.current = !0, !!Xc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xa.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Xa.current = !1;
}
const N0 = /* @__PURE__ */ new WeakMap();
function F0(e, t, n) {
  for (const r in t) {
    const i = t[r], s = n[r];
    if (Ge(i))
      e.addValue(r, i);
    else if (Ge(s))
      e.addValue(r, kr(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, kr(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const ad = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class B0 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = pl, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const h = nt.now();
      this.renderScheduledAt < h && (this.renderScheduledAt = h, ke.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: l } = o;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = l, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = a, this.blockInitialAnimation = !!s, this.isControllingVariants = ao(n), this.isVariantNode = rg(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in f) {
      const p = f[h];
      c[h] !== void 0 && Ge(p) && p.set(c[h], !1);
    }
  }
  mount(t) {
    this.current = t, N0.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), yg.current || I0(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xa.current, process.env.NODE_ENV !== "production" && nl(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    this.projection && this.projection.unmount(), Zt(this.notifyUpdate), Zt(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Br.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && ke.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      i(), s(), o && o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Cr) {
      const n = Cr[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: i } = n;
      if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Oe();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < ad.length; r++) {
      const i = ad[r];
      this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
      const s = "on" + i, o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    this.prevMotionValues = F0(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = kr(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (um(r) || fm(r)) ? r = parseFloat(r) : !JS(r) && gn.test(n) && (r = Gm(t, n)), this.setBaseTarget(t, Ge(r) ? r.get() : r)), Ge(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = Cl(this.props, n, this.presenceContext?.custom);
      s && (r = s[t]);
    }
    if (n && r !== void 0)
      return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Ge(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new tl()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    vl.render(this.render);
  }
}
class bg extends B0 {
  constructor() {
    super(...arguments), this.KeyframeResolver = IS;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ge(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function wg(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let o;
  for (o in t)
    s[o] = t[o];
  i?.applyProjectionStyles(s, r);
  for (o in n)
    s.setProperty(o, n[o]);
}
function $0(e) {
  return window.getComputedStyle(e);
}
class V0 extends bg {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = wg;
  }
  readValueFromInstance(t, n) {
    if (Br.has(n))
      return this.projection?.isProjecting ? za(n) : eS(t, n);
    {
      const r = $0(t), i = (sl(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return vg(t, n);
  }
  build(t, n, r) {
    Sl(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return El(t, n, r);
  }
}
const xg = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function U0(e, t, n, r) {
  wg(e, t, void 0, r);
  for (const i in t.attrs)
    e.setAttribute(xg.has(i) ? i : Tl(i), t.attrs[i]);
}
class z0 extends bg {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Oe;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Br.has(n)) {
      const r = Hm(n);
      return r && r.default || 0;
    }
    return n = xg.has(n) ? n : Tl(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return ug(t, n, r);
  }
  build(t, n, r) {
    og(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    U0(t, n, r, i);
  }
  mount(t) {
    this.isSVGTag = cg(t.tagName), super.mount(t);
  }
}
const W0 = (e, t) => kl(e) ? new z0(t) : new V0(t, {
  allowProjection: e !== Uc
});
function xi(e, t, n) {
  const r = e.getProps();
  return Cl(r, t, n !== void 0 ? n : r.custom, e);
}
const Qa = (e) => Array.isArray(e);
function q0(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, kr(n));
}
function H0(e) {
  return Qa(e) ? e[e.length - 1] || 0 : e;
}
function G0(e, t) {
  const n = xi(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = H0(s[o]);
    q0(e, o, a);
  }
}
function J0(e) {
  return !!(Ge(e) && e.add);
}
function Za(e, t) {
  const n = e.getValue("willChange");
  if (J0(n))
    return n.add(t);
  if (!n && Qt.WillChange) {
    const r = new Qt.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Sg(e) {
  return e.props[dg];
}
const K0 = (e) => e !== null;
function Y0(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(K0), s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[s];
}
const X0 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Q0 = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Z0 = {
  type: "keyframes",
  duration: 0.8
}, e_ = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, t_ = (e, { keyframes: t }) => t.length > 2 ? Z0 : Br.has(e) ? e.startsWith("scale") ? Q0(t[1]) : X0 : e_;
function n_({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: c, elapsed: l, ...u }) {
  return !!Object.keys(u).length;
}
const Ml = (e, t, n, r = {}, i, s) => (o) => {
  const a = ml(r, e) || {}, c = a.delay || r.delay || 0;
  let { elapsed: l = 0 } = r;
  l = l - /* @__PURE__ */ Tt(c);
  const u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -l,
    onUpdate: (h) => {
      t.set(h), a.onUpdate && a.onUpdate(h);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: s ? void 0 : i
  };
  n_(a) || Object.assign(u, t_(e, u)), u.duration && (u.duration = /* @__PURE__ */ Tt(u.duration)), u.repeatDelay && (u.repeatDelay = /* @__PURE__ */ Tt(u.repeatDelay)), u.from !== void 0 && (u.keyframes[0] = u.from);
  let f = !1;
  if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (f = !0)), (Qt.instantAnimations || Qt.skipAnimations) && (f = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !a.type && !a.ease, f && !s && t.get() !== void 0) {
    const h = Y0(u.keyframes, a);
    if (h !== void 0) {
      ke.update(() => {
        u.onUpdate(h), u.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new hl(u) : new _S(u);
};
function r_({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function _g(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (s = r);
  const c = [], l = i && e.animationState && e.animationState.getState()[i];
  for (const u in a) {
    const f = e.getValue(u, e.latestValues[u] ?? null), h = a[u];
    if (h === void 0 || l && r_(l, u))
      continue;
    const p = {
      delay: n,
      ...ml(s || {}, u)
    }, g = f.get();
    if (g !== void 0 && !f.isAnimating && !Array.isArray(h) && h === g && !p.velocity)
      continue;
    let y = !1;
    if (window.MotionHandoffAnimation) {
      const w = Sg(e);
      if (w) {
        const M = window.MotionHandoffAnimation(w, u, ke);
        M !== null && (p.startTime = M, y = !0);
      }
    }
    Za(e, u), f.start(Ml(u, f, h, e.shouldReduceMotion && zm.has(u) ? { type: !1 } : p, e, y));
    const b = f.animation;
    b && c.push(b);
  }
  return o && Promise.all(c).then(() => {
    ke.update(() => {
      o && G0(e, o);
    });
  }), c;
}
function ec(e, t, n = {}) {
  const r = xi(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(_g(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (c = 0) => {
    const { delayChildren: l = 0, staggerChildren: u, staggerDirection: f } = i;
    return i_(e, t, c, l, u, f, n);
  } : () => Promise.resolve(), { when: a } = i;
  if (a) {
    const [c, l] = a === "beforeChildren" ? [s, o] : [o, s];
    return c().then(() => l());
  } else
    return Promise.all([s(), o(n.delay)]);
}
function i_(e, t, n = 0, r = 0, i = 0, s = 1, o) {
  const a = [], c = e.variantChildren.size, l = (c - 1) * i, u = typeof r == "function", f = u ? (h) => r(h, c) : (
    // Support deprecated staggerChildren
    s === 1 ? (h = 0) => h * i : (h = 0) => l - h * i
  );
  return Array.from(e.variantChildren).sort(s_).forEach((h, p) => {
    h.notify("AnimationStart", t), a.push(ec(h, t, {
      ...o,
      delay: n + (u ? 0 : r) + f(p)
    }).then(() => h.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function s_(e, t) {
  return e.sortNodePosition(t);
}
function o_(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => ec(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string")
    r = ec(e, t, n);
  else {
    const i = typeof t == "function" ? xi(e, t, n.custom) : t;
    r = Promise.all(_g(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function kg(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const a_ = xl.length;
function Cg(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Cg(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < a_; n++) {
    const r = xl[n], i = e.props[r];
    (bi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const c_ = [...wl].reverse(), l_ = wl.length;
function u_(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => o_(e, n, r)));
}
function d_(e) {
  let t = u_(e), n = cd(), r = !0;
  const i = (c) => (l, u) => {
    const f = xi(e, u, c === "exit" ? e.presenceContext?.custom : void 0);
    if (f) {
      const { transition: h, transitionEnd: p, ...g } = f;
      l = { ...l, ...g, ...p };
    }
    return l;
  };
  function s(c) {
    t = c(e);
  }
  function o(c) {
    const { props: l } = e, u = Cg(e.parent) || {}, f = [], h = /* @__PURE__ */ new Set();
    let p = {}, g = 1 / 0;
    for (let b = 0; b < l_; b++) {
      const w = c_[b], M = n[w], C = l[w] !== void 0 ? l[w] : u[w], S = bi(C), _ = w === c ? M.isActive : null;
      _ === !1 && (g = b);
      let O = C === u[w] && C !== l[w] && S;
      if (O && r && e.manuallyAnimateOnMount && (O = !1), M.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !M.isActive && _ === null || // If we didn't and don't have any defined prop for this animation type
      !C && !M.prevProp || // Or if the prop doesn't define an animation
      oo(C) || typeof C == "boolean")
        continue;
      const k = f_(M.prevProp, C);
      let P = k || // If we're making this variant active, we want to always make it active
      w === c && M.isActive && !O && S || // If we removed a higher-priority variant (i is in reverse order)
      b > g && S, R = !1;
      const L = Array.isArray(C) ? C : [C];
      let I = L.reduce(i(w), {});
      _ === !1 && (I = {});
      const { prevResolvedValues: V = {} } = M, q = {
        ...V,
        ...I
      }, $ = (W) => {
        P = !0, h.has(W) && (R = !0, h.delete(W)), M.needsAnimating[W] = !0;
        const D = e.getValue(W);
        D && (D.liveStyle = !1);
      };
      for (const W in q) {
        const D = I[W], te = V[W];
        if (p.hasOwnProperty(W))
          continue;
        let N = !1;
        Qa(D) && Qa(te) ? N = !kg(D, te) : N = D !== te, N ? D != null ? $(W) : h.add(W) : D !== void 0 && h.has(W) ? $(W) : M.protectedKeys[W] = !0;
      }
      M.prevProp = C, M.prevResolvedValues = I, M.isActive && (p = { ...p, ...I }), r && e.blockInitialAnimation && (P = !1), P && (!(O && k) || R) && f.push(...L.map((W) => ({
        animation: W,
        options: { type: w }
      })));
    }
    if (h.size) {
      const b = {};
      if (typeof l.initial != "boolean") {
        const w = xi(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
        w && w.transition && (b.transition = w.transition);
      }
      h.forEach((w) => {
        const M = e.getBaseTarget(w), C = e.getValue(w);
        C && (C.liveStyle = !0), b[w] = M ?? null;
      }), f.push({ animation: b });
    }
    let y = !!f.length;
    return r && (l.initial === !1 || l.initial === l.animate) && !e.manuallyAnimateOnMount && (y = !1), r = !1, y ? t(f) : Promise.resolve();
  }
  function a(c, l) {
    if (n[c].isActive === l)
      return Promise.resolve();
    e.variantChildren?.forEach((f) => f.animationState?.setActive(c, l)), n[c].isActive = l;
    const u = o(c);
    for (const f in n)
      n[f].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = cd(), r = !0;
    }
  };
}
function f_(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !kg(t, e) : !1;
}
function Tn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function cd() {
  return {
    animate: Tn(!0),
    whileInView: Tn(),
    whileHover: Tn(),
    whileTap: Tn(),
    whileDrag: Tn(),
    whileFocus: Tn(),
    exit: Tn()
  };
}
class _n {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class h_ extends _n {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = d_(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    oo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let p_ = 0;
class m_ extends _n {
  constructor() {
    super(...arguments), this.id = p_++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const g_ = {
  animation: {
    Feature: h_
  },
  exit: {
    Feature: m_
  }
};
function Si(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Li(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const v_ = (e) => (t) => yl(t) && e(t, Li(t));
function ui(e, t, n, r) {
  return Si(e, t, v_(n), r);
}
const Eg = 1e-4, y_ = 1 - Eg, b_ = 1 + Eg, Tg = 0.01, w_ = 0 - Tg, x_ = 0 + Tg;
function et(e) {
  return e.max - e.min;
}
function S_(e, t, n) {
  return Math.abs(e - t) <= n;
}
function ld(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Me(t.min, t.max, e.origin), e.scale = et(n) / et(t), e.translate = Me(n.min, n.max, e.origin) - e.originPoint, (e.scale >= y_ && e.scale <= b_ || isNaN(e.scale)) && (e.scale = 1), (e.translate >= w_ && e.translate <= x_ || isNaN(e.translate)) && (e.translate = 0);
}
function di(e, t, n, r) {
  ld(e.x, t.x, n.x, r ? r.originX : void 0), ld(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ud(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + et(t);
}
function __(e, t, n) {
  ud(e.x, t.x, n.x), ud(e.y, t.y, n.y);
}
function dd(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + et(t);
}
function fi(e, t, n) {
  dd(e.x, t.x, n.x), dd(e.y, t.y, n.y);
}
function ht(e) {
  return [e("x"), e("y")];
}
const Mg = ({ current: e }) => e ? e.ownerDocument.defaultView : null, fd = (e, t) => Math.abs(e - t);
function k_(e, t) {
  const n = fd(e.x, t.x), r = fd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Pg {
  constructor(t, n, { transformPagePoint: r, contextWindow: i = window, dragSnapToOrigin: s = !1, distanceThreshold: o = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Go(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, g = k_(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!p && !g)
        return;
      const { point: y } = h, { timestamp: b } = ze;
      this.history.push({ ...y, timestamp: b });
      const { onStart: w, onMove: M } = this.handlers;
      p || (w && w(this.lastMoveEvent, h), this.startEvent = this.lastMoveEvent), M && M(this.lastMoveEvent, h);
    }, this.handlePointerMove = (h, p) => {
      this.lastMoveEvent = h, this.lastMoveEventInfo = Ho(p, this.transformPagePoint), ke.update(this.updatePoint, !0);
    }, this.handlePointerUp = (h, p) => {
      this.end();
      const { onEnd: g, onSessionEnd: y, resumeAnimation: b } = this.handlers;
      if (this.dragSnapToOrigin && b && b(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = Go(h.type === "pointercancel" ? this.lastMoveEventInfo : Ho(p, this.transformPagePoint), this.history);
      this.startEvent && g && g(h, w), y && y(h, w);
    }, !yl(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = i || window;
    const a = Li(t), c = Ho(a, this.transformPagePoint), { point: l } = c, { timestamp: u } = ze;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: f } = n;
    f && f(t, Go(c, this.history)), this.removeListeners = Ai(ui(this.contextWindow, "pointermove", this.handlePointerMove), ui(this.contextWindow, "pointerup", this.handlePointerUp), ui(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Zt(this.updatePoint);
  }
}
function Ho(e, t) {
  return t ? { point: t(e.point) } : e;
}
function hd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Go({ point: e }, t) {
  return {
    point: e,
    delta: hd(e, Ag(t)),
    offset: hd(e, C_(t)),
    velocity: E_(t, 0.1)
  };
}
function C_(e) {
  return e[0];
}
function Ag(e) {
  return e[e.length - 1];
}
function E_(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const i = Ag(e);
  for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ Tt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = /* @__PURE__ */ Ft(i.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (i.x - r.x) / s,
    y: (i.y - r.y) / s
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function T_(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Me(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Me(n, e, r.max) : Math.min(e, n)), e;
}
function pd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function M_(e, { top: t, left: n, bottom: r, right: i }) {
  return {
    x: pd(e.x, n, i),
    y: pd(e.y, t, r)
  };
}
function md(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function P_(e, t) {
  return {
    x: md(e.x, t.x),
    y: md(e.y, t.y)
  };
}
function A_(e, t) {
  let n = 0.5;
  const r = et(e), i = et(t);
  return i > r ? n = /* @__PURE__ */ gi(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ gi(e.min, e.max - i, t.min)), Yt(0, 1, n);
}
function O_(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const tc = 0.35;
function R_(e = tc) {
  return e === !1 ? e = 0 : e === !0 && (e = tc), {
    x: gd(e, "left", "right"),
    y: gd(e, "top", "bottom")
  };
}
function gd(e, t, n) {
  return {
    min: vd(e, t),
    max: vd(e, n)
  };
}
function vd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const L_ = /* @__PURE__ */ new WeakMap();
class j_ {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Oe(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1)
      return;
    const s = (f) => {
      const { dragSnapToOrigin: h } = this.getProps();
      h ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Li(f).point);
    }, o = (f, h) => {
      const { drag: p, dragPropagation: g, onDragStart: y } = this.getProps();
      if (p && !g && (this.openDragLock && this.openDragLock(), this.openDragLock = $S(p), !this.openDragLock))
        return;
      this.latestPointerEvent = f, this.latestPanInfo = h, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), ht((w) => {
        let M = this.getAxisMotionValue(w).get() || 0;
        if (Bt.test(M)) {
          const { projection: C } = this.visualElement;
          if (C && C.layout) {
            const S = C.layout.layoutBox[w];
            S && (M = et(S) * (parseFloat(M) / 100));
          }
        }
        this.originPoint[w] = M;
      }), y && ke.postRender(() => y(f, h)), Za(this.visualElement, "transform");
      const { animationState: b } = this.visualElement;
      b && b.setActive("whileDrag", !0);
    }, a = (f, h) => {
      this.latestPointerEvent = f, this.latestPanInfo = h;
      const { dragPropagation: p, dragDirectionLock: g, onDirectionLock: y, onDrag: b } = this.getProps();
      if (!p && !this.openDragLock)
        return;
      const { offset: w } = h;
      if (g && this.currentDirection === null) {
        this.currentDirection = D_(w), this.currentDirection !== null && y && y(this.currentDirection);
        return;
      }
      this.updateAxis("x", h.point, w), this.updateAxis("y", h.point, w), this.visualElement.render(), b && b(f, h);
    }, c = (f, h) => {
      this.latestPointerEvent = f, this.latestPanInfo = h, this.stop(f, h), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, l = () => ht((f) => this.getAnimationState(f) === "paused" && this.getAxisMotionValue(f).animation?.play()), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Pg(t, {
      onSessionStart: s,
      onStart: o,
      onMove: a,
      onSessionEnd: c,
      resumeAnimation: l
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      distanceThreshold: r,
      contextWindow: Mg(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, i = n || this.latestPanInfo, s = this.isDragging;
    if (this.cancel(), !s || !i || !r)
      return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && ke.postRender(() => a(r, i));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Yi(t, i, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = T_(o, this.constraints[t], this.elastic[t])), s.set(o);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, i = this.constraints;
    t && ur(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = M_(r.layoutBox, t) : this.constraints = !1, this.elastic = R_(n), i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && ht((s) => {
      this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = O_(r.layoutBox[s], this.constraints[s]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ur(t))
      return !1;
    const r = t.current;
    Xt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: i } = this.visualElement;
    if (!i || !i.layout)
      return !1;
    const s = D0(r, i.root, this.visualElement.getTransformPagePoint());
    let o = P_(i.layout.layoutBox, s);
    if (n) {
      const a = n(R0(o));
      this.hasMutatedConstraints = !!a, a && (o = pg(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), c = this.constraints || {}, l = ht((u) => {
      if (!Yi(u, n, this.currentDirection))
        return;
      let f = c && c[u] || {};
      o && (f = { min: 0, max: 0 });
      const h = i ? 200 : 1e6, p = i ? 40 : 1e7, g = {
        type: "inertia",
        velocity: r ? t[u] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(u, g);
    });
    return Promise.all(l).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Za(this.visualElement, t), r.start(Ml(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    ht((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ht((t) => this.getAxisMotionValue(t).animation?.pause());
  }
  getAnimationState(t) {
    return this.getAxisMotionValue(t).animation?.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), i = r[n];
    return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    ht((n) => {
      const { drag: r } = this.getProps();
      if (!Yi(n, r, this.currentDirection))
        return;
      const { projection: i } = this.visualElement, s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - Me(o, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!ur(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ht((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const c = a.get();
        i[o] = A_({ min: c, max: c }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), ht((o) => {
      if (!Yi(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: c, max: l } = this.constraints[o];
      a.set(Me(c, l, i[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    L_.set(this.visualElement, this);
    const t = this.visualElement.current, n = ui(t, "pointerdown", (c) => {
      const { drag: l, dragListener: u = !0 } = this.getProps();
      l && u && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      ur(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: i } = this.visualElement, s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), ke.read(r);
    const o = Si(window, "resize", () => this.scalePositionWithinConstraints()), a = i.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: l }) => {
      this.isDragging && l && (ht((u) => {
        const f = this.getAxisMotionValue(u);
        f && (this.originPoint[u] += c[u].translate, f.set(f.get() + c[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: i = !1, dragConstraints: s = !1, dragElastic: o = tc, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function Yi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function D_(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class I_ extends _n {
  constructor(t) {
    super(t), this.removeGroupControls = gt, this.removeListeners = gt, this.controls = new j_(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || gt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const yd = (e) => (t, n) => {
  e && ke.postRender(() => e(t, n));
};
class N_ extends _n {
  constructor() {
    super(...arguments), this.removePointerDownListener = gt;
  }
  onPointerDown(t) {
    this.session = new Pg(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Mg(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i } = this.node.getProps();
    return {
      onSessionStart: yd(t),
      onStart: yd(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && ke.postRender(() => i(s, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = ui(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const _s = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function bd(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ei = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ne.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = bd(e, t.target.x), r = bd(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, F_ = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, i = gn.parse(e);
    if (i.length > 5)
      return r;
    const s = gn.createTransformer(e), o = typeof i[0] != "number" ? 1 : 0, a = n.x.scale * t.x, c = n.y.scale * t.y;
    i[0 + o] /= a, i[1 + o] /= c;
    const l = Me(a, c, 0.5);
    return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), s(i);
  }
};
let wd = !1;
class B_ extends Ab {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i } = this.props, { projection: s } = t;
    o0($_), s && (n.group && n.group.add(s), r && r.register && i && r.register(s), wd && s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), _s.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: i, isPresent: s } = this.props, { projection: o } = r;
    return o && (o.isPresent = s, wd = !0, i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? o.promote() : o.relegate() || ke.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), vl.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: i } = t;
    i && (i.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(i), r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Og(e) {
  const [t, n] = eg(), r = Le(Kc);
  return x.jsx(B_, { ...e, layoutGroup: r, switchLayoutGroup: Le(fg), isPresent: t, safeToRemove: n });
}
const $_ = {
  borderRadius: {
    ...ei,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ei,
  borderTopRightRadius: ei,
  borderBottomLeftRadius: ei,
  borderBottomRightRadius: ei,
  boxShadow: F_
};
function V_(e, t, n) {
  const r = Ge(e) ? e : kr(e);
  return r.start(Ml("", r, t, n)), r.animation;
}
const U_ = (e, t) => e.depth - t.depth;
class z_ {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Qc(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Zc(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(U_), this.isDirty = !1, this.children.forEach(t);
  }
}
function W_(e, t) {
  const n = nt.now(), r = ({ timestamp: i }) => {
    const s = i - n;
    s >= t && (Zt(r), e(s - t));
  };
  return ke.setup(r, !0), () => Zt(r);
}
const Rg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], q_ = Rg.length, xd = (e) => typeof e == "string" ? parseFloat(e) : e, Sd = (e) => typeof e == "number" || ne.test(e);
function H_(e, t, n, r, i, s) {
  i ? (e.opacity = Me(0, n.opacity ?? 1, G_(r)), e.opacityExit = Me(t.opacity ?? 1, 0, J_(r))) : s && (e.opacity = Me(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < q_; o++) {
    const a = `border${Rg[o]}Radius`;
    let c = _d(t, a), l = _d(n, a);
    if (c === void 0 && l === void 0)
      continue;
    c || (c = 0), l || (l = 0), c === 0 || l === 0 || Sd(c) === Sd(l) ? (e[a] = Math.max(Me(xd(c), xd(l), r), 0), (Bt.test(l) || Bt.test(c)) && (e[a] += "%")) : e[a] = l;
  }
  (t.rotate || n.rotate) && (e.rotate = Me(t.rotate || 0, n.rotate || 0, r));
}
function _d(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const G_ = /* @__PURE__ */ Lg(0, 0.5, wm), J_ = /* @__PURE__ */ Lg(0.5, 0.95, gt);
function Lg(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ gi(e, t, r));
}
function kd(e, t) {
  e.min = t.min, e.max = t.max;
}
function ft(e, t) {
  kd(e.x, t.x), kd(e.y, t.y);
}
function Cd(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Ed(e, t, n, r, i) {
  return e -= t, e = Fs(e, 1 / n, r), i !== void 0 && (e = Fs(e, 1 / i, r)), e;
}
function K_(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (Bt.test(t) && (t = parseFloat(t), t = Me(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = Me(s.min, s.max, r);
  e === s && (a -= t), e.min = Ed(e.min, t, n, a, i), e.max = Ed(e.max, t, n, a, i);
}
function Td(e, t, [n, r, i], s, o) {
  K_(e, t[n], t[r], t[i], t.scale, s, o);
}
const Y_ = ["x", "scaleX", "originX"], X_ = ["y", "scaleY", "originY"];
function Md(e, t, n, r) {
  Td(e.x, t, Y_, n ? n.x : void 0, r ? r.x : void 0), Td(e.y, t, X_, n ? n.y : void 0, r ? r.y : void 0);
}
function Pd(e) {
  return e.translate === 0 && e.scale === 1;
}
function jg(e) {
  return Pd(e.x) && Pd(e.y);
}
function Ad(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Q_(e, t) {
  return Ad(e.x, t.x) && Ad(e.y, t.y);
}
function Od(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Dg(e, t) {
  return Od(e.x, t.x) && Od(e.y, t.y);
}
function Rd(e) {
  return et(e.x) / et(e.y);
}
function Ld(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Z_ {
  constructor() {
    this.members = [];
  }
  add(t) {
    Qc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Zc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0)
      return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ek(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x, s = e.y.translate / t.y, o = n?.z || 0;
  if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: l, rotate: u, rotateX: f, rotateY: h, skewX: p, skewY: g } = n;
    l && (r = `perspective(${l}px) ${r}`), u && (r += `rotate(${u}deg) `), f && (r += `rotateX(${f}deg) `), h && (r += `rotateY(${h}deg) `), p && (r += `skewX(${p}deg) `), g && (r += `skewY(${g}deg) `);
  }
  const a = e.x.scale * t.x, c = e.y.scale * t.y;
  return (a !== 1 || c !== 1) && (r += `scale(${a}, ${c})`), r || "none";
}
const Jo = ["", "X", "Y", "Z"], tk = 1e3;
let nk = 0;
function Ko(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Ig(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Sg(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ke, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Ig(r);
}
function Ng({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
  return class {
    constructor(o = {}, a = t?.()) {
      this.id = nk++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(sk), this.nodes.forEach(lk), this.nodes.forEach(uk), this.nodes.forEach(ok);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new z_());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new tl()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const c = this.eventHandlers.get(o);
      c && c.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o) {
      if (this.instance)
        return;
      this.isSVG = Zm(o) && !HS(o), this.instance = o;
      const { layoutId: a, layout: c, visualElement: l } = this.options;
      if (l && !l.current && l.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (c || a) && (this.isLayoutDirty = !0), e) {
        let u, f = 0;
        const h = () => this.root.updateBlockedByResize = !1;
        ke.read(() => {
          f = window.innerWidth;
        }), e(o, () => {
          const p = window.innerWidth;
          p !== f && (f = p, this.root.updateBlockedByResize = !0, u && u(), u = W_(h, 250), _s.hasAnimatedSinceResize && (_s.hasAnimatedSinceResize = !1, this.nodes.forEach(Id)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && l && (a || c) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: f, hasRelativeLayoutChanged: h, layout: p }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const g = this.options.transition || l.getDefaultTransition() || mk, { onLayoutAnimationStart: y, onLayoutAnimationComplete: b } = l.getProps(), w = !this.targetLayout || !Dg(this.targetLayout, p), M = !f && h;
        if (this.options.layoutRoot || this.resumeFrom || M || f && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const C = {
            ...ml(g, "layout"),
            onPlay: y,
            onComplete: b
          };
          (l.shouldReduceMotion || this.options.layoutRoot) && (C.delay = 0, C.type = !1), this.startAnimation(C), this.setAnimationOrigin(u, M);
        } else
          f || Id(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = p;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Zt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(dk), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Ig(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: c } = this.options;
      if (a === void 0 && !c)
        return;
      const l = this.getTransformTemplate();
      this.prevTransformTemplateValue = l ? l(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(jd);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Dd);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(ck), this.nodes.forEach(rk), this.nodes.forEach(ik)) : this.nodes.forEach(Dd), this.clearAllSnapshots();
      const a = nt.now();
      ze.delta = Yt(0, 1e3 / 60, a - ze.timestamp), ze.timestamp = a, ze.isProcessing = !0, Fo.update.process(ze), Fo.preRender.process(ze), Fo.render.process(ze), ze.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, vl.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(ak), this.sharedNodes.forEach(fk);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ke.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ke.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !et(this.snapshot.measuredBox.x) && !et(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Oe(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!i)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !jg(this.projectionDelta), c = this.getTransformTemplate(), l = c ? c(this.latestValues, "") : void 0, u = l !== this.prevTransformTemplateValue;
      o && this.instance && (a || In(this.latestValues) || u) && (i(this.instance, l), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let c = this.removeElementScroll(a);
      return o && (c = this.removeTransform(c)), gk(c), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: o } = this.options;
      if (!o)
        return Oe();
      const a = o.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(vk))) {
        const { scroll: l } = this.root;
        l && (dr(a.x, l.offset.x), dr(a.y, l.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      const a = Oe();
      if (ft(a, o), this.scroll?.wasRoot)
        return a;
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c], { scroll: u, options: f } = l;
        l !== this.root && u && f.layoutScroll && (u.wasRoot && ft(a, o), dr(a.x, u.offset.x), dr(a.y, u.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const c = Oe();
      ft(c, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        !a && u.options.layoutScroll && u.scroll && u !== u.root && fr(c, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), In(u.latestValues) && fr(c, u.latestValues);
      }
      return In(this.latestValues) && fr(c, this.latestValues), c;
    }
    removeTransform(o) {
      const a = Oe();
      ft(a, o);
      for (let c = 0; c < this.path.length; c++) {
        const l = this.path[c];
        if (!l.instance || !In(l.latestValues))
          continue;
        Ka(l.latestValues) && l.updateSnapshot();
        const u = Oe(), f = l.measurePageBox();
        ft(u, f), Md(a, l.latestValues, l.snapshot ? l.snapshot.layoutBox : void 0, u);
      }
      return In(this.latestValues) && Md(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ze.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== a;
      if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: u, layoutId: f } = this.options;
      if (!(!this.layout || !(u || f))) {
        if (this.resolvedRelativeTargetAt = ze.timestamp, !this.targetDelta && !this.relativeTarget) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), fi(this.relativeTargetOrigin, this.layout.layoutBox, h.layout.layoutBox), ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Oe(), this.targetWithTransforms = Oe()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), __(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ft(this.target, this.layout.layoutBox), gg(this.target, this.targetDelta)) : ft(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const h = this.getClosestProjectingParent();
          h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? (this.relativeParent = h, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), fi(this.relativeTargetOrigin, this.target, h.target), ft(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ka(this.parent.latestValues) || mg(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      const o = this.getLead(), a = !!this.resumingFrom || this !== o;
      let c = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (c = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ze.timestamp && (c = !1), c)
        return;
      const { layout: l, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(l || u))
        return;
      ft(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, h = this.treeScale.y;
      j0(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = Oe());
      const { target: p } = o;
      if (!p) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Cd(this.prevProjectionDelta.x, this.projectionDelta.x), Cd(this.prevProjectionDelta.y, this.projectionDelta.y)), di(this.projectionDelta, this.layoutCorrected, p, this.latestValues), (this.treeScale.x !== f || this.treeScale.y !== h || !Ld(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ld(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      if (this.options.visualElement?.scheduleRender(), o) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = hr(), this.projectionDelta = hr(), this.projectionDeltaWithTransform = hr();
    }
    setAnimationOrigin(o, a = !1) {
      const c = this.snapshot, l = c ? c.latestValues : {}, u = { ...this.latestValues }, f = hr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const h = Oe(), p = c ? c.source : void 0, g = this.layout ? this.layout.source : void 0, y = p !== g, b = this.getStack(), w = !b || b.members.length <= 1, M = !!(y && !w && this.options.crossfade === !0 && !this.path.some(pk));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (S) => {
        const _ = S / 1e3;
        Nd(f.x, o.x, _), Nd(f.y, o.y, _), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (fi(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), hk(this.relativeTarget, this.relativeTargetOrigin, h, _), C && Q_(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = Oe()), ft(C, this.relativeTarget)), y && (this.animationValues = u, H_(u, l, this.latestValues, _, M, w)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = _;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Zt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ke.update(() => {
        _s.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = kr(0)), this.currentAnimation = V_(this.motionValue, [0, 1e3], {
          ...o,
          velocity: 0,
          isSync: !0,
          onUpdate: (a) => {
            this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
          },
          onStop: () => {
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(tk), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: c, layout: l, latestValues: u } = o;
      if (!(!a || !c || !l)) {
        if (this !== o && this.layout && l && Fg(this.options.animationType, this.layout.layoutBox, l.layoutBox)) {
          c = this.target || Oe();
          const f = et(this.layout.layoutBox.x);
          c.x.min = o.target.x.min, c.x.max = c.x.min + f;
          const h = et(this.layout.layoutBox.y);
          c.y.min = o.target.y.min, c.y.max = c.y.min + h;
        }
        ft(a, c), fr(a, u), di(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Z_()), this.sharedNodes.get(o).add(a);
      const l = a.options.initialPromotionConfig;
      a.promote({
        transition: l ? l.transition : void 0,
        preserveFollowOpacity: l && l.shouldPreserveFollowOpacity ? l.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: o } = this.options;
      return o ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: c } = {}) {
      const l = this.getStack();
      l && l.promote(this, c), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: c } = o;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (a = !0), !a)
        return;
      const l = {};
      c.z && Ko("z", o, l, this.animationValues);
      for (let u = 0; u < Jo.length; u++)
        Ko(`rotate${Jo[u]}`, o, l, this.animationValues), Ko(`skew${Jo[u]}`, o, l, this.animationValues);
      o.render();
      for (const u in l)
        o.setStaticValue(u, l[u]), this.animationValues && (this.animationValues[u] = l[u]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const c = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = Ss(a?.pointerEvents) || "", o.transform = c ? c(this.latestValues, "") : "none";
        return;
      }
      const l = this.getLead();
      if (!this.projectionDelta || !this.layout || !l.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = Ss(a?.pointerEvents) || ""), this.hasProjected && !In(this.latestValues) && (o.transform = c ? c({}, "") : "none", this.hasProjected = !1);
        return;
      }
      o.visibility = "";
      const u = l.animationValues || l.latestValues;
      this.applyTransformsToTarget();
      let f = ek(this.projectionDeltaWithTransform, this.treeScale, u);
      c && (f = c(u, f)), o.transform = f;
      const { x: h, y: p } = this.projectionDelta;
      o.transformOrigin = `${h.origin * 100}% ${p.origin * 100}% 0`, l.animationValues ? o.opacity = l === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : o.opacity = l === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
      for (const g in wi) {
        if (u[g] === void 0)
          continue;
        const { correct: y, applyTo: b, isCSSVariable: w } = wi[g], M = f === "none" ? u[g] : y(u[g], l);
        if (b) {
          const C = b.length;
          for (let S = 0; S < C; S++)
            o[b[S]] = M;
        } else
          w ? this.options.visualElement.renderState.vars[g] = M : o[g] = M;
      }
      this.options.layoutId && (o.pointerEvents = l === this ? Ss(a?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => o.currentAnimation?.stop()), this.root.nodes.forEach(jd), this.root.sharedNodes.clear();
    }
  };
}
function rk(e) {
  e.updateLayout();
}
function ik(e) {
  const t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, s = t.source !== e.layout.source;
    i === "size" ? ht((u) => {
      const f = s ? t.measuredBox[u] : t.layoutBox[u], h = et(f);
      f.min = n[u].min, f.max = f.min + h;
    }) : Fg(i, t.layoutBox, n) && ht((u) => {
      const f = s ? t.measuredBox[u] : t.layoutBox[u], h = et(n[u]);
      f.max = f.min + h, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + h);
    });
    const o = hr();
    di(o, n, t.layoutBox);
    const a = hr();
    s ? di(a, e.applyTransform(r, !0), t.measuredBox) : di(a, n, t.layoutBox);
    const c = !jg(o);
    let l = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: f, layout: h } = u;
        if (f && h) {
          const p = Oe();
          fi(p, t.layoutBox, f.layoutBox);
          const g = Oe();
          fi(g, n, h.layoutBox), Dg(p, g) || (l = !0), u.options.layoutRoot && (e.relativeTarget = g, e.relativeTargetOrigin = p, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: t,
      delta: a,
      layoutDelta: o,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: l
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function sk(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function ok(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function ak(e) {
  e.clearSnapshot();
}
function jd(e) {
  e.clearMeasurements();
}
function Dd(e) {
  e.isLayoutDirty = !1;
}
function ck(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Id(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function lk(e) {
  e.resolveTargetDelta();
}
function uk(e) {
  e.calcProjection();
}
function dk(e) {
  e.resetSkewAndRotation();
}
function fk(e) {
  e.removeLeadSnapshot();
}
function Nd(e, t, n) {
  e.translate = Me(t.translate, 0, n), e.scale = Me(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Fd(e, t, n, r) {
  e.min = Me(t.min, n.min, r), e.max = Me(t.max, n.max, r);
}
function hk(e, t, n, r) {
  Fd(e.x, t.x, n.x, r), Fd(e.y, t.y, n.y, r);
}
function pk(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const mk = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Bd = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), $d = Bd("applewebkit/") && !Bd("chrome/") ? Math.round : gt;
function Vd(e) {
  e.min = $d(e.min), e.max = $d(e.max);
}
function gk(e) {
  Vd(e.x), Vd(e.y);
}
function Fg(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !S_(Rd(t), Rd(n), 0.2);
}
function vk(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
const yk = Ng({
  attachResizeListener: (e, t) => Si(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Yo = {
  current: void 0
}, Bg = Ng({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Yo.current) {
      const e = new yk({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Yo.current = e;
    }
    return Yo.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), bk = {
  pan: {
    Feature: N_
  },
  drag: {
    Feature: I_,
    ProjectionNode: Bg,
    MeasureLayout: Og
  }
};
function Ud(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n, s = r[i];
  s && ke.postRender(() => s(t, Li(t)));
}
class wk extends _n {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = VS(t, (n, r) => (Ud(this.node, r, "Start"), (i) => Ud(this.node, i, "End"))));
  }
  unmount() {
  }
}
class xk extends _n {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ai(Si(this.node.current, "focus", () => this.onFocus()), Si(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function zd(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n), s = r[i];
  s && ke.postRender(() => s(t, Li(t)));
}
class Sk extends _n {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = qS(t, (n, r) => (zd(this.node, r, "Start"), (i, { success: s }) => zd(this.node, i, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const nc = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), _k = (e) => {
  const t = nc.get(e.target);
  t && t(e);
}, kk = (e) => {
  e.forEach(_k);
};
function Ck({ root: e, ...t }) {
  const n = e || document;
  Xo.has(n) || Xo.set(n, {});
  const r = Xo.get(n), i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(kk, { root: e, ...t })), r[i];
}
function Ek(e, t, n) {
  const r = Ck(t);
  return nc.set(e, n), r.observe(e), () => {
    nc.delete(e), r.unobserve(e);
  };
}
const Tk = {
  some: 0,
  all: 1
};
class Mk extends _n {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: i = "some", once: s } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof i == "number" ? i : Tk[i]
    }, a = (c) => {
      const { isIntersecting: l } = c;
      if (this.isInView === l || (this.isInView = l, s && !l && this.hasEnteredView))
        return;
      l && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", l);
      const { onViewportEnter: u, onViewportLeave: f } = this.node.getProps(), h = l ? u : f;
      h && h(c);
    };
    return Ek(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Pk(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Pk({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ak = {
  inView: {
    Feature: Mk
  },
  tap: {
    Feature: Sk
  },
  focus: {
    Feature: xk
  },
  hover: {
    Feature: wk
  }
}, Ok = {
  layout: {
    ProjectionNode: Bg,
    MeasureLayout: Og
  }
}, Rk = {
  ...g_,
  ...Ak,
  ...bk,
  ...Ok
}, Wd = /* @__PURE__ */ O0(Rk, W0);
class Lk {
  state = {
    messages: [],
    isLoading: !1,
    lastUpdated: (/* @__PURE__ */ new Date()).toISOString()
  };
  listeners = /* @__PURE__ */ new Set();
  storageKey = "scxl_conversation_state";
  // private useSessionStorage = true; // true = clears on browser close, false = persists forever
  constructor() {
    this.clearStorageOnStart();
  }
  // Clear storage on app start for fresh sessions
  clearStorageOnStart() {
    try {
      localStorage.removeItem(this.storageKey), sessionStorage.removeItem(this.storageKey);
    } catch (t) {
      console.warn("Failed to clear conversation storage:", t);
    }
  }
  // Load from sessionStorage (clears when browser closes)
  // private loadFromSessionStorage() {
  //   try {
  //     const stored = sessionStorage.getItem(this.storageKey);
  //     if (stored) {
  //       const parsedState = JSON.parse(stored);
  //       // Ensure all messages have the isFresh property (backward compatibility)
  //       if (parsedState.messages) {
  //         parsedState.messages = parsedState.messages.map((msg: any) => ({
  //           ...msg,
  //           isFresh: msg.isFresh ?? false, // Default to false for existing messages
  //         }));
  //       }
  //       this.state = {
  //         ...this.state,
  //         ...parsedState,
  //       };
  //     }
  //   } catch (error) {
  //     console.warn('Failed to load conversation from sessionStorage:', error);
  //   }
  // }
  // Subscribe to state changes
  subscribe(t) {
    return this.listeners.add(t), () => {
      this.listeners.delete(t);
    };
  }
  // Notify all listeners of state changes
  notify() {
    this.state.lastUpdated = (/* @__PURE__ */ new Date()).toISOString(), this.saveToStorage(), this.listeners.forEach((t) => t());
  }
  // Get current state
  getState() {
    return { ...this.state };
  }
  // Get all messages
  getMessages() {
    return [...this.state.messages];
  }
  // Add a new message
  addMessage(t) {
    const n = {
      ...t,
      id: this.generateId(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    return this.state.messages.push(n), this.notify(), n;
  }
  // Update an existing message
  updateMessage(t, n) {
    const r = this.state.messages.findIndex((i) => i.id === t);
    return r !== -1 ? (this.state.messages[r] = {
      ...this.state.messages[r],
      ...n,
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    }, this.notify(), this.state.messages[r]) : null;
  }
  // Update or add message by role and content matching
  updateOrAddMessage(t, n, r) {
    const i = (/* @__PURE__ */ new Date()).toISOString();
    if (t === "assistant") {
      let s = -1;
      for (let o = this.state.messages.length - 1; o >= 0; o--)
        if (this.state.messages[o].role === "assistant" && !this.state.messages[o].final) {
          s = o;
          break;
        }
      if (s !== -1) {
        const o = this.state.messages[s];
        return this.state.messages[s] = {
          ...o,
          content: o.content + n,
          final: r,
          updatedAt: i
        }, this.notify(), this.state.messages[s];
      }
    }
    return this.addMessage({ role: t, content: n, final: r });
  }
  // Clear all messages
  clearMessages() {
    this.state.messages = [], this.notify();
  }
  // Set loading state
  setLoading(t) {
    this.state.isLoading = t, this.notify();
  }
  // Remove messages older than specified time
  cleanupOldMessages(t = 24) {
    const n = /* @__PURE__ */ new Date();
    n.setHours(n.getHours() - t), this.state.messages = this.state.messages.filter(
      (r) => new Date(r.createdAt) > n
    ), this.notify();
  }
  // Find message by ID
  findMessage(t) {
    return this.state.messages.find((n) => n.id === t);
  }
  // Get merged messages (combine consecutive messages from same role within time threshold)
  getMergedMessages(t = 3e4) {
    const n = [];
    for (let r = 0; r < this.state.messages.length; r++) {
      const i = this.state.messages[r], s = n[n.length - 1], o = s ? Math.abs(
        new Date(i.createdAt).getTime() - new Date(s.createdAt).getTime()
      ) : 1 / 0;
      s && s.role === i.role && o < t ? n[n.length - 1] = {
        ...s,
        content: `${s.content} ${i.content}`,
        updatedAt: i.updatedAt || i.createdAt,
        final: i.final !== !1
      } : n.push({ ...i });
    }
    return n;
  }
  // Save to localStorage
  saveToStorage() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
    } catch (t) {
      console.warn("Failed to save conversation to localStorage:", t);
    }
  }
  // Load from localStorage
  // private loadFromStorage() {
  //   try {
  //     const stored = localStorage.getItem(this.storageKey);
  //     if (stored) {
  //       const parsedState = JSON.parse(stored);
  //       // Ensure all messages have the isFresh property (backward compatibility)
  //       if (parsedState.messages) {
  //         parsedState.messages = parsedState.messages.map((msg: any) => ({
  //           ...msg,
  //           isFresh: msg.isFresh ?? false, // Default to false for existing messages
  //         }));
  //       }
  //       this.state = {
  //         ...this.state,
  //         ...parsedState,
  //       };
  //     }
  //   } catch (error) {
  //     console.warn('Failed to load conversation from localStorage:', error);
  //   }
  // }
  // Mark all messages as not fresh (disable typewriter for all)
  markAllMessagesAsStale() {
    this.state.messages = this.state.messages.map((t) => ({
      ...t,
      isFresh: !1
    })), this.notify();
  }
  // Mark a specific message as fresh (enable typewriter)
  markMessageAsFresh(t) {
    const n = this.state.messages.findIndex((r) => r.id === t);
    n !== -1 && (this.state.messages = this.state.messages.map((r) => ({
      ...r,
      isFresh: !1
    })), this.state.messages[n] = {
      ...this.state.messages[n],
      isFresh: !0
    }, this.notify());
  }
  // Mark the latest assistant message as fresh
  markLatestAssistantAsFresh() {
    const t = this.state.messages.slice().reverse().findIndex(
      (n) => n.role === "assistant"
    );
    if (t !== -1) {
      const n = this.state.messages.length - 1 - t, r = this.state.messages[n].id;
      this.markMessageAsFresh(r);
    }
  }
  // Generate unique ID
  generateId() {
    return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}
const ge = new Lk(), $g = ({ onMessageAdded: e } = {}) => {
  const [t, n] = _e(ge.getState());
  me(() => ge.subscribe(() => {
    n(ge.getState());
  }), []), qe(X.Connected, () => {
    ge.clearMessages();
  }), qe(X.BotLlmStarted, () => {
    const c = ge.getMessages().slice().reverse().find((l) => l.role === "assistant");
    if (!c || c.content) {
      const l = ge.addMessage({
        role: "assistant",
        content: "",
        final: !1,
        isFresh: !0
      });
      ge.markMessageAsFresh(l.id), e?.(l);
    } else
      ge.markMessageAsFresh(c.id);
  }), qe(X.BotLlmText, (a) => {
    const l = ge.getMessages().slice().reverse().find((u) => u.role === "assistant");
    if (l && !l.final) {
      const u = ge.updateMessage(l.id, {
        content: l.content + a.text
      });
      u && e?.(u);
    } else {
      const u = ge.addMessage({
        role: "assistant",
        content: a.text,
        final: !1
      });
      e?.(u);
    }
  }), qe(X.BotLlmStopped, () => {
    const a = ge.getMessages(), c = a.slice().reverse().find((l) => l.role === "assistant");
    if (c)
      if (c.content) {
        const l = ge.updateMessage(c.id, {
          final: !0
        });
        l && e?.(l);
      } else {
        const l = a.findIndex((u) => u.id === c.id);
        if (l !== -1) {
          const u = [...a];
          u.splice(l, 1), ge.clearMessages(), u.forEach((f) => ge.addMessage(f));
        }
      }
  }), qe(X.UserStartedSpeaking, () => {
    const c = ge.getMessages().slice().reverse().find((l) => l.role === "user");
    if (!c || c.content) {
      const l = ge.addMessage({
        role: "user",
        content: "",
        final: !1
      });
      e?.(l);
    }
  }), qe(X.UserTranscript, (a) => {
    const l = ge.getMessages().slice().reverse().find((u) => u.role === "user" && !u.final);
    if (l) {
      const u = ge.updateMessage(l.id, {
        content: a.text,
        final: a.final
      });
      u && e?.(u);
    } else {
      const u = ge.addMessage({
        role: "user",
        content: a.text,
        final: a.final
      });
      e?.(u);
    }
  }), qe(X.UserStoppedSpeaking, () => {
    setTimeout(() => {
      const a = ge.getMessages(), c = a.slice().reverse().find((l) => l.role === "user");
      if (c && !c.content) {
        const l = a.findIndex((u) => u.id === c.id);
        if (l !== -1) {
          const u = [...a];
          u.splice(l, 1), ge.clearMessages(), u.forEach((f) => ge.addMessage(f));
        }
      }
    }, 5e3);
  });
  const r = (a) => {
    const c = ge.addMessage({
      role: "user",
      content: a,
      final: !0
    });
    return e?.(c), c;
  }, i = (a) => {
    const c = ge.addMessage({
      role: "assistant",
      content: a,
      final: !0
    });
    return e?.(c), c;
  }, s = () => {
    ge.clearMessages();
  }, o = (a) => {
    ge.setLoading(a);
  };
  return {
    messages: ge.getMergedMessages(),
    isLoading: t.isLoading,
    lastUpdated: t.lastUpdated,
    addUserMessage: r,
    addAssistantMessage: i,
    clearMessages: s,
    setLoading: o
  };
}, Pl = "-", jk = (e) => {
  const t = Ik(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Pl);
      return a[0] === "" && a.length !== 1 && a.shift(), Vg(a, t) || Dk(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const c = n[o] || [];
      return a && r[o] ? [...c, ...r[o]] : c;
    }
  };
}, Vg = (e, t) => {
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), i = r ? Vg(e.slice(1), r) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const s = e.join(Pl);
  return t.validators.find(({
    validator: o
  }) => o(s))?.classGroupId;
}, qd = /^\[(.+)\]$/, Dk = (e) => {
  if (qd.test(e)) {
    const t = qd.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Ik = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in n)
    rc(n[i], r, i, t);
  return r;
}, rc = (e, t, n, r) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? t : Hd(t, i);
      s.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (Nk(i)) {
        rc(i(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([s, o]) => {
      rc(o, Hd(t, s), n, r);
    });
  });
}, Hd = (e, t) => {
  let n = e;
  return t.split(Pl).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Nk = (e) => e.isThemeGetter, Fk = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (s, o) => {
    n.set(s, o), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let o = n.get(s);
      if (o !== void 0)
        return o;
      if ((o = r.get(s)) !== void 0)
        return i(s, o), o;
    },
    set(s, o) {
      n.has(s) ? n.set(s, o) : i(s, o);
    }
  };
}, ic = "!", sc = ":", Bk = sc.length, $k = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (i) => {
    const s = [];
    let o = 0, a = 0, c = 0, l;
    for (let g = 0; g < i.length; g++) {
      let y = i[g];
      if (o === 0 && a === 0) {
        if (y === sc) {
          s.push(i.slice(c, g)), c = g + Bk;
          continue;
        }
        if (y === "/") {
          l = g;
          continue;
        }
      }
      y === "[" ? o++ : y === "]" ? o-- : y === "(" ? a++ : y === ")" && a--;
    }
    const u = s.length === 0 ? i : i.substring(c), f = Vk(u), h = f !== u, p = l && l > c ? l - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: p
    };
  };
  if (t) {
    const i = t + sc, s = r;
    r = (o) => o.startsWith(i) ? s(o.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const i = r;
    r = (s) => n({
      className: s,
      parseClassName: i
    });
  }
  return r;
}, Vk = (e) => e.endsWith(ic) ? e.substring(0, e.length - 1) : e.startsWith(ic) ? e.substring(1) : e, Uk = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const i = [];
    let s = [];
    return r.forEach((o) => {
      o[0] === "[" || t[o] ? (i.push(...s.sort(), o), s = []) : s.push(o);
    }), i.push(...s.sort()), i;
  };
}, zk = (e) => ({
  cache: Fk(e.cacheSize),
  parseClassName: $k(e),
  sortModifiers: Uk(e),
  ...jk(e)
}), Wk = /\s+/, qk = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: i,
    sortModifiers: s
  } = t, o = [], a = e.trim().split(Wk);
  let c = "";
  for (let l = a.length - 1; l >= 0; l -= 1) {
    const u = a[l], {
      isExternal: f,
      modifiers: h,
      hasImportantModifier: p,
      baseClassName: g,
      maybePostfixModifierPosition: y
    } = n(u);
    if (f) {
      c = u + (c.length > 0 ? " " + c : c);
      continue;
    }
    let b = !!y, w = r(b ? g.substring(0, y) : g);
    if (!w) {
      if (!b) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (w = r(g), !w) {
        c = u + (c.length > 0 ? " " + c : c);
        continue;
      }
      b = !1;
    }
    const M = s(h).join(":"), C = p ? M + ic : M, S = C + w;
    if (o.includes(S))
      continue;
    o.push(S);
    const _ = i(w, b);
    for (let O = 0; O < _.length; ++O) {
      const k = _[O];
      o.push(C + k);
    }
    c = u + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function Hk() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ug(t)) && (r && (r += " "), r += n);
  return r;
}
const Ug = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ug(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Gk(e, ...t) {
  let n, r, i, s = o;
  function o(c) {
    const l = t.reduce((u, f) => f(u), e());
    return n = zk(l), r = n.cache.get, i = n.cache.set, s = a, a(c);
  }
  function a(c) {
    const l = r(c);
    if (l)
      return l;
    const u = qk(c, n);
    return i(c, u), u;
  }
  return function() {
    return s(Hk.apply(null, arguments));
  };
}
const De = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, zg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Wg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Jk = /^\d+\/\d+$/, Kk = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Yk = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xk = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Qk = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Zk = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, nr = (e) => Jk.test(e), ae = (e) => !!e && !Number.isNaN(Number(e)), sn = (e) => !!e && Number.isInteger(Number(e)), Qo = (e) => e.endsWith("%") && ae(e.slice(0, -1)), Wt = (e) => Kk.test(e), eC = () => !0, tC = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Yk.test(e) && !Xk.test(e)
), qg = () => !1, nC = (e) => Qk.test(e), rC = (e) => Zk.test(e), iC = (e) => !J(e) && !K(e), sC = (e) => $r(e, Jg, qg), J = (e) => zg.test(e), Mn = (e) => $r(e, Kg, tC), Zo = (e) => $r(e, uC, ae), Gd = (e) => $r(e, Hg, qg), oC = (e) => $r(e, Gg, rC), Xi = (e) => $r(e, Yg, nC), K = (e) => Wg.test(e), ti = (e) => Vr(e, Kg), aC = (e) => Vr(e, dC), Jd = (e) => Vr(e, Hg), cC = (e) => Vr(e, Jg), lC = (e) => Vr(e, Gg), Qi = (e) => Vr(e, Yg, !0), $r = (e, t, n) => {
  const r = zg.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Vr = (e, t, n = !1) => {
  const r = Wg.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, Hg = (e) => e === "position" || e === "percentage", Gg = (e) => e === "image" || e === "url", Jg = (e) => e === "length" || e === "size" || e === "bg-size", Kg = (e) => e === "length", uC = (e) => e === "number", dC = (e) => e === "family-name", Yg = (e) => e === "shadow", fC = () => {
  const e = De("color"), t = De("font"), n = De("text"), r = De("font-weight"), i = De("tracking"), s = De("leading"), o = De("breakpoint"), a = De("container"), c = De("spacing"), l = De("radius"), u = De("shadow"), f = De("inset-shadow"), h = De("text-shadow"), p = De("drop-shadow"), g = De("blur"), y = De("perspective"), b = De("aspect"), w = De("ease"), M = De("animate"), C = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], S = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], _ = () => [...S(), K, J], O = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], P = () => [K, J, c], R = () => [nr, "full", "auto", ...P()], L = () => [sn, "none", "subgrid", K, J], I = () => ["auto", {
    span: ["full", sn, K, J]
  }, sn, K, J], V = () => [sn, "auto", K, J], q = () => ["auto", "min", "max", "fr", K, J], $ = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], H = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Y = () => ["auto", ...P()], W = () => [nr, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...P()], D = () => [e, K, J], te = () => [...S(), Jd, Gd, {
    position: [K, J]
  }], N = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], ee = () => ["auto", "cover", "contain", cC, sC, {
    size: [K, J]
  }], fe = () => [Qo, ti, Mn], d = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    l,
    K,
    J
  ], v = () => ["", ae, ti, Mn], m = () => ["solid", "dashed", "dotted", "double"], E = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], T = () => [ae, Qo, Jd, Gd], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    g,
    K,
    J
  ], U = () => ["none", ae, K, J], z = () => ["none", ae, K, J], G = () => [ae, K, J], ie = () => [nr, "full", ...P()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Wt],
      breakpoint: [Wt],
      color: [eC],
      container: [Wt],
      "drop-shadow": [Wt],
      ease: ["in", "out", "in-out"],
      font: [iC],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Wt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Wt],
      shadow: [Wt],
      spacing: ["px", ae],
      text: [Wt],
      "text-shadow": [Wt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", nr, J, K, b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ae, J, K, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": C()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": C()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: _()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: O()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": O()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": O()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: R()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": R()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": R()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: R()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: R()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: R()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: R()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: R()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: R()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [sn, "auto", K, J]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [nr, "full", "auto", a, ...P()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ae, nr, "auto", "initial", "none", J]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ae, K, J]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ae, K, J]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [sn, "first", "last", "none", K, J]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": L()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: I()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": V()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": V()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": L()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: I()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": V()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": V()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": q()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": q()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: P()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": P()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": P()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...$(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...H(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...H()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...$()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...H(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": $()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...H(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...H()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: P()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: P()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: P()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: P()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: P()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: P()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: P()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: P()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: P()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Y()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Y()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Y()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Y()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Y()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Y()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Y()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Y()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Y()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": P()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": P()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: W()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...W()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...W()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...W()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...W()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...W()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...W()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ti, Mn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, K, Zo]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Qo, J]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [aC, J, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [i, K, J]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ae, "none", K, Zo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...P()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", K, J]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", K, J]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...m(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ae, "from-font", "auto", K, Mn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ae, "auto", K, J]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: P()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", K, J]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", K, J]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: te()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: N()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ee()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, sn, K, J],
          radial: ["", K, J],
          conic: [sn, K, J]
        }, lC, oC]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: fe()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: fe()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: fe()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: d()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": d()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": d()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": d()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": d()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": d()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": d()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": d()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": d()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": d()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": d()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": d()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": d()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": d()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": d()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: v()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": v()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": v()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": v()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": v()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": v()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": v()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": v()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": v()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": v()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": v()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...m(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...m(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: D()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...m(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ae, K, J]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ae, ti, Mn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: D()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          u,
          Qi,
          Xi
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", f, Qi, Xi]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: v()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ae, Mn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": v()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": D()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Qi, Xi]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ae, K, J]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...E(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": E()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ae]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": T()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": T()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": T()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": T()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": T()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": T()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": T()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": T()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": T()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": T()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": T()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": T()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": T()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": T()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
      }],
      "mask-image-radial": [{
        "mask-radial": [K, J]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": T()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": T()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": S()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ae]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": T()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": T()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: te()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: N()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: ee()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", K, J]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          K,
          J
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: j()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ae, K, J]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ae, K, J]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          p,
          Qi,
          Xi
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ae, K, J]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ae, K, J]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ae, K, J]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ae, K, J]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ae, K, J]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          K,
          J
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": j()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ae, K, J]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ae, K, J]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ae, K, J]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ae, K, J]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ae, K, J]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ae, K, J]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ae, K, J]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ae, K, J]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": P()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": P()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": P()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", K, J]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ae, "initial", K, J]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", w, K, J]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ae, K, J]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", M, K, J]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [y, K, J]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": _()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: U()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": U()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": U()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": U()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: z()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": z()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": z()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": z()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: G()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": G()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": G()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [K, J, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: _()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: ie()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ie()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ie()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ie()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: D()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: D()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", K, J]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", K, J]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ae, ti, Mn, Zo]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, hC = /* @__PURE__ */ Gk(fC);
function Re(...e) {
  return hC(Ce(e));
}
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), mC = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Kd = (e) => {
  const t = mC(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Xg = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), gC = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var vC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yC = Pi(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: o,
    ...a
  }, c) => mi(
    "svg",
    {
      ref: c,
      ...vC,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Xg("lucide", i),
      ...!s && !gC(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...o.map(([l, u]) => mi(l, u)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = (e, t) => {
  const n = Pi(
    ({ className: r, ...i }, s) => mi(yC, {
      ref: s,
      iconNode: t,
      className: Xg(
        `lucide-${pC(Kd(e))}`,
        `lucide-${e}`,
        r
      ),
      ...i
    })
  );
  return n.displayName = Kd(e), n;
};
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bC = [
  ["path", { d: "M2 10v3", key: "1fnikh" }],
  ["path", { d: "M6 6v11", key: "11sgs0" }],
  ["path", { d: "M10 3v18", key: "yhl04a" }],
  ["path", { d: "M14 8v7", key: "3a1oy3" }],
  ["path", { d: "M18 5v13", key: "123xd1" }],
  ["path", { d: "M22 10v3", key: "154ddg" }]
], Qg = nn("audio-lines", bC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wC = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ea = nn("check", wC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xC = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], SC = nn("chevron-down", xC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _C = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], kC = nn("circle", _C);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const CC = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
], EC = nn("copy", CC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const TC = [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
], MC = nn("mic-off", TC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PC = [
  ["path", { d: "M12 19v3", key: "npa21l" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["rect", { x: "9", y: "2", width: "6", height: "13", rx: "3", key: "s6n7sd" }]
], AC = nn("mic", PC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const OC = [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",
      key: "m61m77"
    }
  ]
], RC = nn("thumbs-down", OC);
/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LC = [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",
      key: "emmmcr"
    }
  ]
], jC = nn("thumbs-up", LC);
function Te(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e?.(i), n === !1 || !i.defaultPrevented)
      return t?.(i);
  };
}
function Yd(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Zg(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const s = Yd(i, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : Yd(e[i], null);
        }
      };
  };
}
function Je(...e) {
  return A.useCallback(Zg(...e), e);
}
function Zn(e, t = []) {
  let n = [];
  function r(s, o) {
    const a = A.createContext(o), c = n.length;
    n = [...n, o];
    const l = (f) => {
      const { scope: h, children: p, ...g } = f, y = h?.[e]?.[c] || a, b = A.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ x.jsx(y.Provider, { value: b, children: p });
    };
    l.displayName = s + "Provider";
    function u(f, h) {
      const p = h?.[e]?.[c] || a, g = A.useContext(p);
      if (g) return g;
      if (o !== void 0) return o;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [l, u];
  }
  const i = () => {
    const s = n.map((o) => A.createContext(o));
    return function(a) {
      const c = a?.[e] || s;
      return A.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: c } }),
        [a, c]
      );
    };
  };
  return i.scopeName = e, [r, DC(i, ...t)];
}
function DC(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(s) {
      const o = r.reduce((a, { useScope: c, scopeName: l }) => {
        const f = c(s)[`__scope${l}`];
        return { ...a, ...f };
      }, {});
      return A.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
// @__NO_SIDE_EFFECTS__
function _i(e) {
  const t = /* @__PURE__ */ NC(e), n = A.forwardRef((r, i) => {
    const { children: s, ...o } = r, a = A.Children.toArray(s), c = a.find(BC);
    if (c) {
      const l = c.props.children, u = a.map((f) => f === c ? A.Children.count(l) > 1 ? A.Children.only(null) : A.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ x.jsx(t, { ...o, ref: i, children: A.isValidElement(l) ? A.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ x.jsx(t, { ...o, ref: i, children: s });
  });
  return n.displayName = `${e}.Slot`, n;
}
var IC = /* @__PURE__ */ _i("Slot");
// @__NO_SIDE_EFFECTS__
function NC(e) {
  const t = A.forwardRef((n, r) => {
    const { children: i, ...s } = n;
    if (A.isValidElement(i)) {
      const o = VC(i), a = $C(s, i.props);
      return i.type !== A.Fragment && (a.ref = r ? Zg(r, o) : o), A.cloneElement(i, a);
    }
    return A.Children.count(i) > 1 ? A.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ev = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function FC(e) {
  const t = ({ children: n }) => /* @__PURE__ */ x.jsx(x.Fragment, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = ev, t;
}
function BC(e) {
  return A.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ev;
}
function $C(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r], s = t[r];
    /^on[A-Z]/.test(r) ? i && s ? n[r] = (...a) => {
      const c = s(...a);
      return i(...a), c;
    } : i && (n[r] = i) : r === "style" ? n[r] = { ...i, ...s } : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function VC(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var UC = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], $e = UC.reduce((e, t) => {
  const n = /* @__PURE__ */ _i(`Primitive.${t}`), r = A.forwardRef((i, s) => {
    const { asChild: o, ...a } = i, c = o ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ x.jsx(c, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function zC(e, t) {
  e && Dp.flushSync(() => e.dispatchEvent(t));
}
function Hn(e) {
  const t = A.useRef(e);
  return A.useEffect(() => {
    t.current = e;
  }), A.useMemo(() => (...n) => t.current?.(...n), []);
}
function WC(e, t = globalThis?.document) {
  const n = Hn(e);
  A.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var qC = "DismissableLayer", oc = "dismissableLayer.update", HC = "dismissableLayer.pointerDownOutside", GC = "dismissableLayer.focusOutside", Xd, tv = A.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Al = A.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: i,
      onFocusOutside: s,
      onInteractOutside: o,
      onDismiss: a,
      ...c
    } = e, l = A.useContext(tv), [u, f] = A.useState(null), h = u?.ownerDocument ?? globalThis?.document, [, p] = A.useState({}), g = Je(t, (k) => f(k)), y = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = y.indexOf(b), M = u ? y.indexOf(u) : -1, C = l.layersWithOutsidePointerEventsDisabled.size > 0, S = M >= w, _ = YC((k) => {
      const P = k.target, R = [...l.branches].some((L) => L.contains(P));
      !S || R || (i?.(k), o?.(k), k.defaultPrevented || a?.());
    }, h), O = XC((k) => {
      const P = k.target;
      [...l.branches].some((L) => L.contains(P)) || (s?.(k), o?.(k), k.defaultPrevented || a?.());
    }, h);
    return WC((k) => {
      M === l.layers.size - 1 && (r?.(k), !k.defaultPrevented && a && (k.preventDefault(), a()));
    }, h), A.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Xd = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Qd(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Xd);
        };
    }, [u, h, n, l]), A.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Qd());
    }, [u, l]), A.useEffect(() => {
      const k = () => p({});
      return document.addEventListener(oc, k), () => document.removeEventListener(oc, k);
    }, []), /* @__PURE__ */ x.jsx(
      $e.div,
      {
        ...c,
        ref: g,
        style: {
          pointerEvents: C ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Te(e.onFocusCapture, O.onFocusCapture),
        onBlurCapture: Te(e.onBlurCapture, O.onBlurCapture),
        onPointerDownCapture: Te(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
Al.displayName = qC;
var JC = "DismissableLayerBranch", KC = A.forwardRef((e, t) => {
  const n = A.useContext(tv), r = A.useRef(null), i = Je(t, r);
  return A.useEffect(() => {
    const s = r.current;
    if (s)
      return n.branches.add(s), () => {
        n.branches.delete(s);
      };
  }, [n.branches]), /* @__PURE__ */ x.jsx($e.div, { ...e, ref: i });
});
KC.displayName = JC;
function YC(e, t = globalThis?.document) {
  const n = Hn(e), r = A.useRef(!1), i = A.useRef(() => {
  });
  return A.useEffect(() => {
    const s = (a) => {
      if (a.target && !r.current) {
        let c = function() {
          nv(
            HC,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = c, t.addEventListener("click", i.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", i.current);
      r.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", s), t.removeEventListener("click", i.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function XC(e, t = globalThis?.document) {
  const n = Hn(e), r = A.useRef(!1);
  return A.useEffect(() => {
    const i = (s) => {
      s.target && !r.current && nv(GC, n, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Qd() {
  const e = new CustomEvent(oc);
  document.dispatchEvent(e);
}
function nv(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? zC(i, s) : i.dispatchEvent(s);
}
var vn = globalThis?.document ? A.useLayoutEffect : () => {
}, QC = A[" useId ".trim().toString()] || (() => {
}), ZC = 0;
function Ol(e) {
  const [t, n] = A.useState(QC());
  return vn(() => {
    n((r) => r ?? String(ZC++));
  }, [e]), t ? `radix-${t}` : "";
}
const eE = ["top", "right", "bottom", "left"], yn = Math.min, it = Math.max, Bs = Math.round, Zi = Math.floor, $t = (e) => ({
  x: e,
  y: e
}), tE = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, nE = {
  start: "end",
  end: "start"
};
function ac(e, t, n) {
  return it(e, yn(t, n));
}
function en(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tn(e) {
  return e.split("-")[0];
}
function Ur(e) {
  return e.split("-")[1];
}
function Rl(e) {
  return e === "x" ? "y" : "x";
}
function Ll(e) {
  return e === "y" ? "height" : "width";
}
const rE = /* @__PURE__ */ new Set(["top", "bottom"]);
function Nt(e) {
  return rE.has(tn(e)) ? "y" : "x";
}
function jl(e) {
  return Rl(Nt(e));
}
function iE(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ur(e), i = jl(e), s = Ll(i);
  let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (o = $s(o)), [o, $s(o)];
}
function sE(e) {
  const t = $s(e);
  return [cc(e), t, cc(t)];
}
function cc(e) {
  return e.replace(/start|end/g, (t) => nE[t]);
}
const Zd = ["left", "right"], ef = ["right", "left"], oE = ["top", "bottom"], aE = ["bottom", "top"];
function cE(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? ef : Zd : t ? Zd : ef;
    case "left":
    case "right":
      return t ? oE : aE;
    default:
      return [];
  }
}
function lE(e, t, n, r) {
  const i = Ur(e);
  let s = cE(tn(e), n === "start", r);
  return i && (s = s.map((o) => o + "-" + i), t && (s = s.concat(s.map(cc)))), s;
}
function $s(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tE[t]);
}
function uE(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function rv(e) {
  return typeof e != "number" ? uE(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Vs(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function tf(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const s = Nt(t), o = jl(t), a = Ll(o), c = tn(t), l = s === "y", u = r.x + r.width / 2 - i.width / 2, f = r.y + r.height / 2 - i.height / 2, h = r[a] / 2 - i[a] / 2;
  let p;
  switch (c) {
    case "top":
      p = {
        x: u,
        y: r.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      p = {
        x: r.x - i.width,
        y: f
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (Ur(t)) {
    case "start":
      p[o] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      p[o] += h * (n && l ? -1 : 1);
      break;
  }
  return p;
}
const dE = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: s = [],
    platform: o
  } = n, a = s.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let l = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: f
  } = tf(l, r, c), h = r, p = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: b,
      fn: w
    } = a[y], {
      x: M,
      y: C,
      data: S,
      reset: _
    } = await w({
      x: u,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: i,
      middlewareData: p,
      rects: l,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = M ?? u, f = C ?? f, p = {
      ...p,
      [b]: {
        ...p[b],
        ...S
      }
    }, _ && g <= 50 && (g++, typeof _ == "object" && (_.placement && (h = _.placement), _.rects && (l = _.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : _.rects), {
      x: u,
      y: f
    } = tf(l, h, c)), y = -1);
  }
  return {
    x: u,
    y: f,
    placement: h,
    strategy: i,
    middlewareData: p
  };
};
async function ki(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: s,
    rects: o,
    elements: a,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: p = 0
  } = en(t, e), g = rv(p), b = a[h ? f === "floating" ? "reference" : "floating" : f], w = Vs(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(b))) == null || n ? b : b.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), M = f === "floating" ? {
    x: r,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), S = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Vs(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: M,
    offsetParent: C,
    strategy: c
  }) : M);
  return {
    top: (w.top - _.top + g.top) / S.y,
    bottom: (_.bottom - w.bottom + g.bottom) / S.y,
    left: (w.left - _.left + g.left) / S.x,
    right: (_.right - w.right + g.right) / S.x
  };
}
const fE = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: s,
      platform: o,
      elements: a,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = en(e, t) || {};
    if (l == null)
      return {};
    const f = rv(u), h = {
      x: n,
      y: r
    }, p = jl(i), g = Ll(p), y = await o.getDimensions(l), b = p === "y", w = b ? "top" : "left", M = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", S = s.reference[g] + s.reference[p] - h[p] - s.floating[g], _ = h[p] - s.reference[p], O = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let k = O ? O[C] : 0;
    (!k || !await (o.isElement == null ? void 0 : o.isElement(O))) && (k = a.floating[C] || s.floating[g]);
    const P = S / 2 - _ / 2, R = k / 2 - y[g] / 2 - 1, L = yn(f[w], R), I = yn(f[M], R), V = L, q = k - y[g] - I, $ = k / 2 - y[g] / 2 + P, H = ac(V, $, q), Y = !c.arrow && Ur(i) != null && $ !== H && s.reference[g] / 2 - ($ < V ? L : I) - y[g] / 2 < 0, W = Y ? $ < V ? $ - V : $ - q : 0;
    return {
      [p]: h[p] + W,
      data: {
        [p]: H,
        centerOffset: $ - H - W,
        ...Y && {
          alignmentOffset: W
        }
      },
      reset: Y
    };
  }
}), hE = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        middlewareData: s,
        rects: o,
        initialPlacement: a,
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: y = !0,
        ...b
      } = en(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const w = tn(i), M = Nt(a), C = tn(a) === a, S = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), _ = h || (C || !y ? [$s(a)] : sE(a)), O = g !== "none";
      !h && O && _.push(...lE(a, y, g, S));
      const k = [a, ..._], P = await ki(t, b), R = [];
      let L = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (u && R.push(P[w]), f) {
        const $ = iE(i, o, S);
        R.push(P[$[0]], P[$[1]]);
      }
      if (L = [...L, {
        placement: i,
        overflows: R
      }], !R.every(($) => $ <= 0)) {
        var I, V;
        const $ = (((I = s.flip) == null ? void 0 : I.index) || 0) + 1, H = k[$];
        if (H && (!(f === "alignment" ? M !== Nt(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        L.every((D) => D.overflows[0] > 0 && Nt(D.placement) === M)))
          return {
            data: {
              index: $,
              overflows: L
            },
            reset: {
              placement: H
            }
          };
        let Y = (V = L.filter((W) => W.overflows[0] <= 0).sort((W, D) => W.overflows[1] - D.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!Y)
          switch (p) {
            case "bestFit": {
              var q;
              const W = (q = L.filter((D) => {
                if (O) {
                  const te = Nt(D.placement);
                  return te === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  te === "y";
                }
                return !0;
              }).map((D) => [D.placement, D.overflows.filter((te) => te > 0).reduce((te, N) => te + N, 0)]).sort((D, te) => D[1] - te[1])[0]) == null ? void 0 : q[0];
              W && (Y = W);
              break;
            }
            case "initialPlacement":
              Y = a;
              break;
          }
        if (i !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
function nf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function rf(e) {
  return eE.some((t) => e[t] >= 0);
}
const pE = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = en(e, t);
      switch (r) {
        case "referenceHidden": {
          const s = await ki(t, {
            ...i,
            elementContext: "reference"
          }), o = nf(s, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: rf(o)
            }
          };
        }
        case "escaped": {
          const s = await ki(t, {
            ...i,
            altBoundary: !0
          }), o = nf(s, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: rf(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, iv = /* @__PURE__ */ new Set(["left", "top"]);
async function mE(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = tn(n), a = Ur(n), c = Nt(n) === "y", l = iv.has(o) ? -1 : 1, u = s && c ? -1 : 1, f = en(t, e);
  let {
    mainAxis: h,
    crossAxis: p,
    alignmentAxis: g
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof g == "number" && (p = a === "end" ? g * -1 : g), c ? {
    x: p * u,
    y: h * l
  } : {
    x: h * l,
    y: p * u
  };
}
const gE = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: i,
        y: s,
        placement: o,
        middlewareData: a
      } = t, c = await mE(t, e);
      return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: i + c.x,
        y: s + c.y,
        data: {
          ...c,
          placement: o
        }
      };
    }
  };
}, vE = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: s = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (b) => {
            let {
              x: w,
              y: M
            } = b;
            return {
              x: w,
              y: M
            };
          }
        },
        ...c
      } = en(e, t), l = {
        x: n,
        y: r
      }, u = await ki(t, c), f = Nt(tn(i)), h = Rl(f);
      let p = l[h], g = l[f];
      if (s) {
        const b = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", M = p + u[b], C = p - u[w];
        p = ac(M, p, C);
      }
      if (o) {
        const b = f === "y" ? "top" : "left", w = f === "y" ? "bottom" : "right", M = g + u[b], C = g - u[w];
        g = ac(M, g, C);
      }
      const y = a.fn({
        ...t,
        [h]: p,
        [f]: g
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [h]: s,
            [f]: o
          }
        }
      };
    }
  };
}, yE = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: i,
        rects: s,
        middlewareData: o
      } = t, {
        offset: a = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = en(e, t), u = {
        x: n,
        y: r
      }, f = Nt(i), h = Rl(f);
      let p = u[h], g = u[f];
      const y = en(a, t), b = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (c) {
        const C = h === "y" ? "height" : "width", S = s.reference[h] - s.floating[C] + b.mainAxis, _ = s.reference[h] + s.reference[C] - b.mainAxis;
        p < S ? p = S : p > _ && (p = _);
      }
      if (l) {
        var w, M;
        const C = h === "y" ? "width" : "height", S = iv.has(tn(i)), _ = s.reference[f] - s.floating[C] + (S && ((w = o.offset) == null ? void 0 : w[f]) || 0) + (S ? 0 : b.crossAxis), O = s.reference[f] + s.reference[C] + (S ? 0 : ((M = o.offset) == null ? void 0 : M[f]) || 0) - (S ? b.crossAxis : 0);
        g < _ ? g = _ : g > O && (g = O);
      }
      return {
        [h]: p,
        [f]: g
      };
    }
  };
}, bE = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        rects: s,
        platform: o,
        elements: a
      } = t, {
        apply: c = () => {
        },
        ...l
      } = en(e, t), u = await ki(t, l), f = tn(i), h = Ur(i), p = Nt(i) === "y", {
        width: g,
        height: y
      } = s.floating;
      let b, w;
      f === "top" || f === "bottom" ? (b = f, w = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (w = f, b = h === "end" ? "top" : "bottom");
      const M = y - u.top - u.bottom, C = g - u.left - u.right, S = yn(y - u[b], M), _ = yn(g - u[w], C), O = !t.middlewareData.shift;
      let k = S, P = _;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = C), (r = t.middlewareData.shift) != null && r.enabled.y && (k = M), O && !h) {
        const L = it(u.left, 0), I = it(u.right, 0), V = it(u.top, 0), q = it(u.bottom, 0);
        p ? P = g - 2 * (L !== 0 || I !== 0 ? L + I : it(u.left, u.right)) : k = y - 2 * (V !== 0 || q !== 0 ? V + q : it(u.top, u.bottom));
      }
      await c({
        ...t,
        availableWidth: P,
        availableHeight: k
      });
      const R = await o.getDimensions(a.floating);
      return g !== R.width || y !== R.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function co() {
  return typeof window < "u";
}
function zr(e) {
  return sv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ot(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function zt(e) {
  var t;
  return (t = (sv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function sv(e) {
  return co() ? e instanceof Node || e instanceof ot(e).Node : !1;
}
function Pt(e) {
  return co() ? e instanceof Element || e instanceof ot(e).Element : !1;
}
function Ut(e) {
  return co() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1;
}
function sf(e) {
  return !co() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot;
}
const wE = /* @__PURE__ */ new Set(["inline", "contents"]);
function ji(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !wE.has(i);
}
const xE = /* @__PURE__ */ new Set(["table", "td", "th"]);
function SE(e) {
  return xE.has(zr(e));
}
const _E = [":popover-open", ":modal"];
function lo(e) {
  return _E.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const kE = ["transform", "translate", "scale", "rotate", "perspective"], CE = ["transform", "translate", "scale", "rotate", "perspective", "filter"], EE = ["paint", "layout", "strict", "content"];
function Dl(e) {
  const t = Il(), n = Pt(e) ? At(e) : e;
  return kE.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || CE.some((r) => (n.willChange || "").includes(r)) || EE.some((r) => (n.contain || "").includes(r));
}
function TE(e) {
  let t = bn(e);
  for (; Ut(t) && !Er(t); ) {
    if (Dl(t))
      return t;
    if (lo(t))
      return null;
    t = bn(t);
  }
  return null;
}
function Il() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const ME = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Er(e) {
  return ME.has(zr(e));
}
function At(e) {
  return ot(e).getComputedStyle(e);
}
function uo(e) {
  return Pt(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function bn(e) {
  if (zr(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    sf(e) && e.host || // Fallback.
    zt(e)
  );
  return sf(t) ? t.host : t;
}
function ov(e) {
  const t = bn(e);
  return Er(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ut(t) && ji(t) ? t : ov(t);
}
function Ci(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = ov(e), s = i === ((r = e.ownerDocument) == null ? void 0 : r.body), o = ot(i);
  if (s) {
    const a = lc(o);
    return t.concat(o, o.visualViewport || [], ji(i) ? i : [], a && n ? Ci(a) : []);
  }
  return t.concat(i, Ci(i, [], n));
}
function lc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function av(e) {
  const t = At(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = Ut(e), s = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, a = Bs(n) !== s || Bs(r) !== o;
  return a && (n = s, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function Nl(e) {
  return Pt(e) ? e : e.contextElement;
}
function mr(e) {
  const t = Nl(e);
  if (!Ut(t))
    return $t(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: s
  } = av(t);
  let o = (s ? Bs(n.width) : n.width) / r, a = (s ? Bs(n.height) : n.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const PE = /* @__PURE__ */ $t(0);
function cv(e) {
  const t = ot(e);
  return !Il() || !t.visualViewport ? PE : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function AE(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== ot(e) ? !1 : t;
}
function Gn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), s = Nl(e);
  let o = $t(1);
  t && (r ? Pt(r) && (o = mr(r)) : o = mr(e));
  const a = AE(s, n, r) ? cv(s) : $t(0);
  let c = (i.left + a.x) / o.x, l = (i.top + a.y) / o.y, u = i.width / o.x, f = i.height / o.y;
  if (s) {
    const h = ot(s), p = r && Pt(r) ? ot(r) : r;
    let g = h, y = lc(g);
    for (; y && r && p !== g; ) {
      const b = mr(y), w = y.getBoundingClientRect(), M = At(y), C = w.left + (y.clientLeft + parseFloat(M.paddingLeft)) * b.x, S = w.top + (y.clientTop + parseFloat(M.paddingTop)) * b.y;
      c *= b.x, l *= b.y, u *= b.x, f *= b.y, c += C, l += S, g = ot(y), y = lc(g);
    }
  }
  return Vs({
    width: u,
    height: f,
    x: c,
    y: l
  });
}
function Fl(e, t) {
  const n = uo(e).scrollLeft;
  return t ? t.left + n : Gn(zt(e)).left + n;
}
function lv(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    Fl(e, r)
  )), s = r.top + t.scrollTop;
  return {
    x: i,
    y: s
  };
}
function OE(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const s = i === "fixed", o = zt(r), a = t ? lo(t.floating) : !1;
  if (r === o || a && s)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = $t(1);
  const u = $t(0), f = Ut(r);
  if ((f || !f && !s) && ((zr(r) !== "body" || ji(o)) && (c = uo(r)), Ut(r))) {
    const p = Gn(r);
    l = mr(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  const h = o && !f && !s ? lv(o, c, !0) : $t(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x + h.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y + h.y
  };
}
function RE(e) {
  return Array.from(e.getClientRects());
}
function LE(e) {
  const t = zt(e), n = uo(e), r = e.ownerDocument.body, i = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Fl(e);
  const a = -n.scrollTop;
  return At(r).direction === "rtl" && (o += it(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: s,
    x: o,
    y: a
  };
}
function jE(e, t) {
  const n = ot(e), r = zt(e), i = n.visualViewport;
  let s = r.clientWidth, o = r.clientHeight, a = 0, c = 0;
  if (i) {
    s = i.width, o = i.height;
    const l = Il();
    (!l || l && t === "fixed") && (a = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: s,
    height: o,
    x: a,
    y: c
  };
}
const DE = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function IE(e, t) {
  const n = Gn(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, s = Ut(e) ? mr(e) : $t(1), o = e.clientWidth * s.x, a = e.clientHeight * s.y, c = i * s.x, l = r * s.y;
  return {
    width: o,
    height: a,
    x: c,
    y: l
  };
}
function of(e, t, n) {
  let r;
  if (t === "viewport")
    r = jE(e, n);
  else if (t === "document")
    r = LE(zt(e));
  else if (Pt(t))
    r = IE(t, n);
  else {
    const i = cv(e);
    r = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Vs(r);
}
function uv(e, t) {
  const n = bn(e);
  return n === t || !Pt(n) || Er(n) ? !1 : At(n).position === "fixed" || uv(n, t);
}
function NE(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ci(e, [], !1).filter((a) => Pt(a) && zr(a) !== "body"), i = null;
  const s = At(e).position === "fixed";
  let o = s ? bn(e) : e;
  for (; Pt(o) && !Er(o); ) {
    const a = At(o), c = Dl(o);
    !c && a.position === "fixed" && (i = null), (s ? !c && !i : !c && a.position === "static" && !!i && DE.has(i.position) || ji(o) && !c && uv(e, o)) ? r = r.filter((u) => u !== o) : i = a, o = bn(o);
  }
  return t.set(e, r), r;
}
function FE(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const o = [...n === "clippingAncestors" ? lo(t) ? [] : NE(t, this._c) : [].concat(n), r], a = o[0], c = o.reduce((l, u) => {
    const f = of(t, u, i);
    return l.top = it(f.top, l.top), l.right = yn(f.right, l.right), l.bottom = yn(f.bottom, l.bottom), l.left = it(f.left, l.left), l;
  }, of(t, a, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function BE(e) {
  const {
    width: t,
    height: n
  } = av(e);
  return {
    width: t,
    height: n
  };
}
function $E(e, t, n) {
  const r = Ut(t), i = zt(t), s = n === "fixed", o = Gn(e, !0, s, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = $t(0);
  function l() {
    c.x = Fl(i);
  }
  if (r || !r && !s)
    if ((zr(t) !== "body" || ji(i)) && (a = uo(t)), r) {
      const p = Gn(t, !0, s, t);
      c.x = p.x + t.clientLeft, c.y = p.y + t.clientTop;
    } else i && l();
  s && !r && i && l();
  const u = i && !r && !s ? lv(i, a) : $t(0), f = o.left + a.scrollLeft - c.x - u.x, h = o.top + a.scrollTop - c.y - u.y;
  return {
    x: f,
    y: h,
    width: o.width,
    height: o.height
  };
}
function ta(e) {
  return At(e).position === "static";
}
function af(e, t) {
  if (!Ut(e) || At(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return zt(e) === n && (n = n.ownerDocument.body), n;
}
function dv(e, t) {
  const n = ot(e);
  if (lo(e))
    return n;
  if (!Ut(e)) {
    let i = bn(e);
    for (; i && !Er(i); ) {
      if (Pt(i) && !ta(i))
        return i;
      i = bn(i);
    }
    return n;
  }
  let r = af(e, t);
  for (; r && SE(r) && ta(r); )
    r = af(r, t);
  return r && Er(r) && ta(r) && !Dl(r) ? n : r || TE(e) || n;
}
const VE = async function(e) {
  const t = this.getOffsetParent || dv, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: $E(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function UE(e) {
  return At(e).direction === "rtl";
}
const zE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: OE,
  getDocumentElement: zt,
  getClippingRect: FE,
  getOffsetParent: dv,
  getElementRects: VE,
  getClientRects: RE,
  getDimensions: BE,
  getScale: mr,
  isElement: Pt,
  isRTL: UE
};
function fv(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function WE(e, t) {
  let n = null, r;
  const i = zt(e);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function o(a, c) {
    a === void 0 && (a = !1), c === void 0 && (c = 1), s();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: f,
      width: h,
      height: p
    } = l;
    if (a || t(), !h || !p)
      return;
    const g = Zi(f), y = Zi(i.clientWidth - (u + h)), b = Zi(i.clientHeight - (f + p)), w = Zi(u), C = {
      rootMargin: -g + "px " + -y + "px " + -b + "px " + -w + "px",
      threshold: it(0, yn(1, c)) || 1
    };
    let S = !0;
    function _(O) {
      const k = O[0].intersectionRatio;
      if (k !== c) {
        if (!S)
          return o();
        k ? o(!1, k) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      k === 1 && !fv(l, e.getBoundingClientRect()) && o(), S = !1;
    }
    try {
      n = new IntersectionObserver(_, {
        ...C,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(_, C);
    }
    n.observe(e);
  }
  return o(!0), s;
}
function qE(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: s = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Nl(e), u = i || s ? [...l ? Ci(l) : [], ...Ci(t)] : [];
  u.forEach((w) => {
    i && w.addEventListener("scroll", n, {
      passive: !0
    }), s && w.addEventListener("resize", n);
  });
  const f = l && a ? WE(l, n) : null;
  let h = -1, p = null;
  o && (p = new ResizeObserver((w) => {
    let [M] = w;
    M && M.target === l && p && (p.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var C;
      (C = p) == null || C.observe(t);
    })), n();
  }), l && !c && p.observe(l), p.observe(t));
  let g, y = c ? Gn(e) : null;
  c && b();
  function b() {
    const w = Gn(e);
    y && !fv(y, w) && n(), y = w, g = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    u.forEach((M) => {
      i && M.removeEventListener("scroll", n), s && M.removeEventListener("resize", n);
    }), f?.(), (w = p) == null || w.disconnect(), p = null, c && cancelAnimationFrame(g);
  };
}
const HE = gE, GE = vE, JE = hE, KE = bE, YE = pE, cf = fE, XE = yE, QE = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: zE,
    ...n
  }, s = {
    ...i.platform,
    _c: r
  };
  return dE(e, t, {
    ...i,
    platform: s
  });
};
var ZE = typeof document < "u", eT = function() {
}, ks = ZE ? $c : eT;
function Us(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Us(e[r], t[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const s = i[r];
      if (!(s === "_owner" && e.$$typeof) && !Us(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function hv(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function lf(e, t) {
  const n = hv(e);
  return Math.round(t * n) / n;
}
function na(e) {
  const t = A.useRef(e);
  return ks(() => {
    t.current = e;
  }), t;
}
function tT(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: i,
    elements: {
      reference: s,
      floating: o
    } = {},
    transform: a = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, f] = A.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, p] = A.useState(r);
  Us(h, r) || p(r);
  const [g, y] = A.useState(null), [b, w] = A.useState(null), M = A.useCallback((D) => {
    D !== O.current && (O.current = D, y(D));
  }, []), C = A.useCallback((D) => {
    D !== k.current && (k.current = D, w(D));
  }, []), S = s || g, _ = o || b, O = A.useRef(null), k = A.useRef(null), P = A.useRef(u), R = c != null, L = na(c), I = na(i), V = na(l), q = A.useCallback(() => {
    if (!O.current || !k.current)
      return;
    const D = {
      placement: t,
      strategy: n,
      middleware: h
    };
    I.current && (D.platform = I.current), QE(O.current, k.current, D).then((te) => {
      const N = {
        ...te,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: V.current !== !1
      };
      $.current && !Us(P.current, N) && (P.current = N, Dp.flushSync(() => {
        f(N);
      }));
    });
  }, [h, t, n, I, V]);
  ks(() => {
    l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f((D) => ({
      ...D,
      isPositioned: !1
    })));
  }, [l]);
  const $ = A.useRef(!1);
  ks(() => ($.current = !0, () => {
    $.current = !1;
  }), []), ks(() => {
    if (S && (O.current = S), _ && (k.current = _), S && _) {
      if (L.current)
        return L.current(S, _, q);
      q();
    }
  }, [S, _, q, L, R]);
  const H = A.useMemo(() => ({
    reference: O,
    floating: k,
    setReference: M,
    setFloating: C
  }), [M, C]), Y = A.useMemo(() => ({
    reference: S,
    floating: _
  }), [S, _]), W = A.useMemo(() => {
    const D = {
      position: n,
      left: 0,
      top: 0
    };
    if (!Y.floating)
      return D;
    const te = lf(Y.floating, u.x), N = lf(Y.floating, u.y);
    return a ? {
      ...D,
      transform: "translate(" + te + "px, " + N + "px)",
      ...hv(Y.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: te,
      top: N
    };
  }, [n, a, Y.floating, u.x, u.y]);
  return A.useMemo(() => ({
    ...u,
    update: q,
    refs: H,
    elements: Y,
    floatingStyles: W
  }), [u, q, H, Y, W]);
}
const nT = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: i
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? cf({
        element: r.current,
        padding: i
      }).fn(n) : {} : r ? cf({
        element: r,
        padding: i
      }).fn(n) : {};
    }
  };
}, rT = (e, t) => ({
  ...HE(e),
  options: [e, t]
}), iT = (e, t) => ({
  ...GE(e),
  options: [e, t]
}), sT = (e, t) => ({
  ...XE(e),
  options: [e, t]
}), oT = (e, t) => ({
  ...JE(e),
  options: [e, t]
}), aT = (e, t) => ({
  ...KE(e),
  options: [e, t]
}), cT = (e, t) => ({
  ...YE(e),
  options: [e, t]
}), lT = (e, t) => ({
  ...nT(e),
  options: [e, t]
});
var uT = "Arrow", pv = A.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: i = 5, ...s } = e;
  return /* @__PURE__ */ x.jsx(
    $e.svg,
    {
      ...s,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ x.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
pv.displayName = uT;
var dT = pv;
function mv(e) {
  const [t, n] = A.useState(void 0);
  return vn(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const s = i[0];
        let o, a;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          o = l.inlineSize, a = l.blockSize;
        } else
          o = e.offsetWidth, a = e.offsetHeight;
        n({ width: o, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Bl = "Popper", [gv, fo] = Zn(Bl), [fT, vv] = gv(Bl), yv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, i] = A.useState(null);
  return /* @__PURE__ */ x.jsx(fT, { scope: t, anchor: r, onAnchorChange: i, children: n });
};
yv.displayName = Bl;
var bv = "PopperAnchor", wv = A.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e, s = vv(bv, n), o = A.useRef(null), a = Je(t, o);
    return A.useEffect(() => {
      s.onAnchorChange(r?.current || o.current);
    }), r ? null : /* @__PURE__ */ x.jsx($e.div, { ...i, ref: a });
  }
);
wv.displayName = bv;
var $l = "PopperContent", [hT, pT] = gv($l), xv = A.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: i = 0,
      align: s = "center",
      alignOffset: o = 0,
      arrowPadding: a = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: p = "optimized",
      onPlaced: g,
      ...y
    } = e, b = vv($l, n), [w, M] = A.useState(null), C = Je(t, (T) => M(T)), [S, _] = A.useState(null), O = mv(S), k = O?.width ?? 0, P = O?.height ?? 0, R = r + (s !== "center" ? "-" + s : ""), L = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, I = Array.isArray(l) ? l : [l], V = I.length > 0, q = {
      padding: L,
      boundary: I.filter(gT),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: $, floatingStyles: H, placement: Y, isPositioned: W, middlewareData: D } = tT({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: R,
      whileElementsMounted: (...T) => qE(...T, {
        animationFrame: p === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        rT({ mainAxis: i + P, alignmentAxis: o }),
        c && iT({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? sT() : void 0,
          ...q
        }),
        c && oT({ ...q }),
        aT({
          ...q,
          apply: ({ elements: T, rects: j, availableWidth: U, availableHeight: z }) => {
            const { width: G, height: ie } = j.reference, oe = T.floating.style;
            oe.setProperty("--radix-popper-available-width", `${U}px`), oe.setProperty("--radix-popper-available-height", `${z}px`), oe.setProperty("--radix-popper-anchor-width", `${G}px`), oe.setProperty("--radix-popper-anchor-height", `${ie}px`);
          }
        }),
        S && lT({ element: S, padding: a }),
        vT({ arrowWidth: k, arrowHeight: P }),
        h && cT({ strategy: "referenceHidden", ...q })
      ]
    }), [te, N] = kv(Y), ee = Hn(g);
    vn(() => {
      W && ee?.();
    }, [W, ee]);
    const fe = D.arrow?.x, d = D.arrow?.y, v = D.arrow?.centerOffset !== 0, [m, E] = A.useState();
    return vn(() => {
      w && E(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ x.jsx(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: W ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: m,
          "--radix-popper-transform-origin": [
            D.transformOrigin?.x,
            D.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...D.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ x.jsx(
          hT,
          {
            scope: n,
            placedSide: te,
            onArrowChange: _,
            arrowX: fe,
            arrowY: d,
            shouldHideArrow: v,
            children: /* @__PURE__ */ x.jsx(
              $e.div,
              {
                "data-side": te,
                "data-align": N,
                ...y,
                ref: C,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
xv.displayName = $l;
var Sv = "PopperArrow", mT = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, _v = A.forwardRef(function(t, n) {
  const { __scopePopper: r, ...i } = t, s = pT(Sv, r), o = mT[s.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ x.jsx(
      "span",
      {
        ref: s.onArrowChange,
        style: {
          position: "absolute",
          left: s.arrowX,
          top: s.arrowY,
          [o]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[s.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[s.placedSide],
          visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ x.jsx(
          dT,
          {
            ...i,
            ref: n,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
_v.displayName = Sv;
function gT(e) {
  return e !== null;
}
var vT = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: i } = t, o = i.arrow?.centerOffset !== 0, a = o ? 0 : e.arrowWidth, c = o ? 0 : e.arrowHeight, [l, u] = kv(n), f = { start: "0%", center: "50%", end: "100%" }[u], h = (i.arrow?.x ?? 0) + a / 2, p = (i.arrow?.y ?? 0) + c / 2;
    let g = "", y = "";
    return l === "bottom" ? (g = o ? f : `${h}px`, y = `${-c}px`) : l === "top" ? (g = o ? f : `${h}px`, y = `${r.floating.height + c}px`) : l === "right" ? (g = `${-c}px`, y = o ? f : `${p}px`) : l === "left" && (g = `${r.floating.width + c}px`, y = o ? f : `${p}px`), { data: { x: g, y } };
  }
});
function kv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Cv = yv, Vl = wv, Ev = xv, Tv = _v, yT = "Portal", Ul = A.forwardRef((e, t) => {
  const { container: n, ...r } = e, [i, s] = A.useState(!1);
  vn(() => s(!0), []);
  const o = n || i && globalThis?.document?.body;
  return o ? Ob.createPortal(/* @__PURE__ */ x.jsx($e.div, { ...r, ref: t }), o) : null;
});
Ul.displayName = yT;
function bT(e, t) {
  return A.useReducer((n, r) => t[n][r] ?? n, e);
}
var Wr = (e) => {
  const { present: t, children: n } = e, r = wT(t), i = typeof n == "function" ? n({ present: r.isPresent }) : A.Children.only(n), s = Je(r.ref, xT(i));
  return typeof n == "function" || r.isPresent ? A.cloneElement(i, { ref: s }) : null;
};
Wr.displayName = "Presence";
function wT(e) {
  const [t, n] = A.useState(), r = A.useRef(null), i = A.useRef(e), s = A.useRef("none"), o = e ? "mounted" : "unmounted", [a, c] = bT(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return A.useEffect(() => {
    const l = es(r.current);
    s.current = a === "mounted" ? l : "none";
  }, [a]), vn(() => {
    const l = r.current, u = i.current;
    if (u !== e) {
      const h = s.current, p = es(l);
      e ? c("MOUNT") : p === "none" || l?.display === "none" ? c("UNMOUNT") : c(u && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, c]), vn(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, f = (p) => {
        const y = es(r.current).includes(p.animationName);
        if (p.target === t && y && (c("ANIMATION_END"), !i.current)) {
          const b = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = b);
          });
        }
      }, h = (p) => {
        p.target === t && (s.current = es(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: A.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function es(e) {
  return e?.animationName || "none";
}
function xT(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ST = A[" useInsertionEffect ".trim().toString()] || vn;
function ho({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [i, s, o] = _T({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, c = a ? e : i;
  {
    const u = A.useRef(e !== void 0);
    A.useEffect(() => {
      const f = u.current;
      f !== a && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = a;
    }, [a, r]);
  }
  const l = A.useCallback(
    (u) => {
      if (a) {
        const f = kT(u) ? u(e) : u;
        f !== e && o.current?.(f);
      } else
        s(u);
    },
    [a, e, s, o]
  );
  return [c, l];
}
function _T({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = A.useState(e), i = A.useRef(n), s = A.useRef(t);
  return ST(() => {
    s.current = t;
  }, [t]), A.useEffect(() => {
    i.current !== n && (s.current?.(n), i.current = n);
  }, [n, i]), [n, r, s];
}
function kT(e) {
  return typeof e == "function";
}
var CT = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), ET = "VisuallyHidden", Mv = A.forwardRef(
  (e, t) => /* @__PURE__ */ x.jsx(
    $e.span,
    {
      ...e,
      ref: t,
      style: { ...CT, ...e.style }
    }
  )
);
Mv.displayName = ET;
var TT = Mv, [po, IR] = Zn("Tooltip", [
  fo
]), mo = fo(), Pv = "TooltipProvider", MT = 700, uc = "tooltip.open", [PT, zl] = po(Pv), Av = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = MT,
    skipDelayDuration: r = 300,
    disableHoverableContent: i = !1,
    children: s
  } = e, o = A.useRef(!0), a = A.useRef(!1), c = A.useRef(0);
  return A.useEffect(() => {
    const l = c.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ x.jsx(
    PT,
    {
      scope: t,
      isOpenDelayedRef: o,
      delayDuration: n,
      onOpen: A.useCallback(() => {
        window.clearTimeout(c.current), o.current = !1;
      }, []),
      onClose: A.useCallback(() => {
        window.clearTimeout(c.current), c.current = window.setTimeout(
          () => o.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: a,
      onPointerInTransitChange: A.useCallback((l) => {
        a.current = l;
      }, []),
      disableHoverableContent: i,
      children: s
    }
  );
};
Av.displayName = Pv;
var Ei = "Tooltip", [AT, Di] = po(Ei), Ov = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    disableHoverableContent: o,
    delayDuration: a
  } = e, c = zl(Ei, e.__scopeTooltip), l = mo(t), [u, f] = A.useState(null), h = Ol(), p = A.useRef(0), g = o ?? c.disableHoverableContent, y = a ?? c.delayDuration, b = A.useRef(!1), [w, M] = ho({
    prop: r,
    defaultProp: i ?? !1,
    onChange: (k) => {
      k ? (c.onOpen(), document.dispatchEvent(new CustomEvent(uc))) : c.onClose(), s?.(k);
    },
    caller: Ei
  }), C = A.useMemo(() => w ? b.current ? "delayed-open" : "instant-open" : "closed", [w]), S = A.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, b.current = !1, M(!0);
  }, [M]), _ = A.useCallback(() => {
    window.clearTimeout(p.current), p.current = 0, M(!1);
  }, [M]), O = A.useCallback(() => {
    window.clearTimeout(p.current), p.current = window.setTimeout(() => {
      b.current = !0, M(!0), p.current = 0;
    }, y);
  }, [y, M]);
  return A.useEffect(() => () => {
    p.current && (window.clearTimeout(p.current), p.current = 0);
  }, []), /* @__PURE__ */ x.jsx(Cv, { ...l, children: /* @__PURE__ */ x.jsx(
    AT,
    {
      scope: t,
      contentId: h,
      open: w,
      stateAttribute: C,
      trigger: u,
      onTriggerChange: f,
      onTriggerEnter: A.useCallback(() => {
        c.isOpenDelayedRef.current ? O() : S();
      }, [c.isOpenDelayedRef, O, S]),
      onTriggerLeave: A.useCallback(() => {
        g ? _() : (window.clearTimeout(p.current), p.current = 0);
      }, [_, g]),
      onOpen: S,
      onClose: _,
      disableHoverableContent: g,
      children: n
    }
  ) });
};
Ov.displayName = Ei;
var dc = "TooltipTrigger", Rv = A.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, i = Di(dc, n), s = zl(dc, n), o = mo(n), a = A.useRef(null), c = Je(t, a, i.onTriggerChange), l = A.useRef(!1), u = A.useRef(!1), f = A.useCallback(() => l.current = !1, []);
    return A.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ x.jsx(Vl, { asChild: !0, ...o, children: /* @__PURE__ */ x.jsx(
      $e.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...r,
        ref: c,
        onPointerMove: Te(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !u.current && !s.isPointerInTransitRef.current && (i.onTriggerEnter(), u.current = !0);
        }),
        onPointerLeave: Te(e.onPointerLeave, () => {
          i.onTriggerLeave(), u.current = !1;
        }),
        onPointerDown: Te(e.onPointerDown, () => {
          i.open && i.onClose(), l.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: Te(e.onFocus, () => {
          l.current || i.onOpen();
        }),
        onBlur: Te(e.onBlur, i.onClose),
        onClick: Te(e.onClick, i.onClose)
      }
    ) });
  }
);
Rv.displayName = dc;
var Wl = "TooltipPortal", [OT, RT] = po(Wl, {
  forceMount: void 0
}), Lv = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, s = Di(Wl, t);
  return /* @__PURE__ */ x.jsx(OT, { scope: t, forceMount: n, children: /* @__PURE__ */ x.jsx(Wr, { present: n || s.open, children: /* @__PURE__ */ x.jsx(Ul, { asChild: !0, container: i, children: r }) }) });
};
Lv.displayName = Wl;
var Tr = "TooltipContent", jv = A.forwardRef(
  (e, t) => {
    const n = RT(Tr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...s } = e, o = Di(Tr, e.__scopeTooltip);
    return /* @__PURE__ */ x.jsx(Wr, { present: r || o.open, children: o.disableHoverableContent ? /* @__PURE__ */ x.jsx(Dv, { side: i, ...s, ref: t }) : /* @__PURE__ */ x.jsx(LT, { side: i, ...s, ref: t }) });
  }
), LT = A.forwardRef((e, t) => {
  const n = Di(Tr, e.__scopeTooltip), r = zl(Tr, e.__scopeTooltip), i = A.useRef(null), s = Je(t, i), [o, a] = A.useState(null), { trigger: c, onClose: l } = n, u = i.current, { onPointerInTransitChange: f } = r, h = A.useCallback(() => {
    a(null), f(!1);
  }, [f]), p = A.useCallback(
    (g, y) => {
      const b = g.currentTarget, w = { x: g.clientX, y: g.clientY }, M = NT(w, b.getBoundingClientRect()), C = FT(w, M), S = BT(y.getBoundingClientRect()), _ = VT([...C, ...S]);
      a(_), f(!0);
    },
    [f]
  );
  return A.useEffect(() => () => h(), [h]), A.useEffect(() => {
    if (c && u) {
      const g = (b) => p(b, u), y = (b) => p(b, c);
      return c.addEventListener("pointerleave", g), u.addEventListener("pointerleave", y), () => {
        c.removeEventListener("pointerleave", g), u.removeEventListener("pointerleave", y);
      };
    }
  }, [c, u, p, h]), A.useEffect(() => {
    if (o) {
      const g = (y) => {
        const b = y.target, w = { x: y.clientX, y: y.clientY }, M = c?.contains(b) || u?.contains(b), C = !$T(w, o);
        M ? h() : C && (h(), l());
      };
      return document.addEventListener("pointermove", g), () => document.removeEventListener("pointermove", g);
    }
  }, [c, u, o, l, h]), /* @__PURE__ */ x.jsx(Dv, { ...e, ref: s });
}), [jT, DT] = po(Ei, { isInside: !1 }), IT = /* @__PURE__ */ FC("TooltipContent"), Dv = A.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": i,
      onEscapeKeyDown: s,
      onPointerDownOutside: o,
      ...a
    } = e, c = Di(Tr, n), l = mo(n), { onClose: u } = c;
    return A.useEffect(() => (document.addEventListener(uc, u), () => document.removeEventListener(uc, u)), [u]), A.useEffect(() => {
      if (c.trigger) {
        const f = (h) => {
          h.target?.contains(c.trigger) && u();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [c.trigger, u]), /* @__PURE__ */ x.jsx(
      Al,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: u,
        children: /* @__PURE__ */ x.jsxs(
          Ev,
          {
            "data-state": c.stateAttribute,
            ...l,
            ...a,
            ref: t,
            style: {
              ...a.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ x.jsx(IT, { children: r }),
              /* @__PURE__ */ x.jsx(jT, { scope: n, isInside: !0, children: /* @__PURE__ */ x.jsx(TT, { id: c.contentId, role: "tooltip", children: i || r }) })
            ]
          }
        )
      }
    );
  }
);
jv.displayName = Tr;
var Iv = "TooltipArrow", Nv = A.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, i = mo(n);
    return DT(
      Iv,
      n
    ).isInside ? null : /* @__PURE__ */ x.jsx(Tv, { ...i, ...r, ref: t });
  }
);
Nv.displayName = Iv;
function NT(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), s = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, s)) {
    case s:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function FT(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function BT(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r }
  ];
}
function $T(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
    const a = t[s], c = t[o], l = a.x, u = a.y, f = c.x, h = c.y;
    u > r != h > r && n < (f - l) * (r - u) / (h - u) + l && (i = !i);
  }
  return i;
}
function VT(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), UT(t);
}
function UT(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2; ) {
      const s = t[t.length - 1], o = t[t.length - 2];
      if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2; ) {
      const s = n[n.length - 1], o = n[n.length - 2];
      if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var zT = Av, WT = Ov, qT = Rv, HT = Lv, GT = jv, JT = Nv;
function Fv({
  delayDuration: e = 0,
  ...t
}) {
  return /* @__PURE__ */ x.jsx(
    zT,
    {
      "data-slot": "tooltip-provider",
      delayDuration: e,
      ...t
    }
  );
}
function gr({
  ...e
}) {
  return /* @__PURE__ */ x.jsx(Fv, { children: /* @__PURE__ */ x.jsx(WT, { "data-slot": "tooltip", ...e }) });
}
function vr({
  ...e
}) {
  return /* @__PURE__ */ x.jsx(qT, { "data-slot": "tooltip-trigger", ...e });
}
function yr({
  className: e,
  sideOffset: t = 0,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ x.jsx(HT, { children: /* @__PURE__ */ x.jsxs(
    GT,
    {
      "data-slot": "tooltip-content",
      sideOffset: t,
      className: Re(
        "scxl:bg-indigo-500 scxl:text-white scxl:animate-in scxl:fade-in-0 scxl:zoom-in-95 data-[state=closed]:scxl:animate-out data-[state=closed]:scxl:fade-out-0 data-[state=closed]:scxl:zoom-out-95 data-[side=bottom]:scxl:slide-in-from-top-2 data-[side=left]:scxl:slide-in-from-right-2 data-[side=right]:scxl:slide-in-from-left-2 data-[side=top]:scxl:slide-in-from-bottom-2 scxl:z-50 scxl:w-fit scxl:origin-(--radix-tooltip-content-transform-origin) scxl:rounded-md scxl:px-3 scxl:py-1.5 scxl:text-xs scxl:text-balance",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ x.jsx(JT, { className: "scxl:bg-indigo-500 scxl:fill-indigo-500 scxl:z-50 scxl:size-2.5 scxl:translate-y-[calc(-50%_-_2px)] scxl:rotate-45 scxl:rounded-[2px]" })
      ]
    }
  ) });
}
const KT = ({
  rawContent: e,
  className: t = "",
  typewriterEffect: n = !0,
  timeStamp: r,
  typewriterSpeed: i = 20,
  disableTypewriter: s = !1
}) => {
  const [o, a] = _e(""), [c, l] = _e(0), [u, f] = _e("idle"), [h, p] = _e("idle"), [g, y] = _e(!1), b = ce((k) => k ? k.replace(/^data:\s*/gm, "").replace(/\[DONE\]/g, "").replace(/^event:\s*\w+\s*$/gm, "").replace(/role=['"]assistant['"][^}]*content=['"]([^'"]*)['"]/g, "$1").replace(/role='assistant'\s+content='/g, "").replace(/role="assistant"\s+content="/g, "").replace(/\s+tool_calls=\[\]/g, "").replace(/'\s+tool_calls=\[\]$/g, "").replace(/"\s+tool_calls=\[\]$/g, "").replace(/content=['"]([^'"]*)['"][^}]*/g, "$1").replace(/content='([^']*)'/g, "$1").replace(/content="([^"]*)"/g, "$1").replace(/\{"content":\s*"([^"]*)"[^}]*\}/g, "$1").replace(/\{"delta":\s*\{"content":\s*"([^"]*)"[^}]*\}[^}]*\}/g, "$1").replace(/delta:\s*\{[^}]*content[^}]*:\s*['"]([^'"]*)['"]/g, "$1").replace(/None$/gm, "").replace(/null$/gm, "").replace(/undefined$/gm, "").replace(/\\n/g, `
`).replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\\\/g, "\\").replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/^\s+/gm, "").replace(/\s+$/gm, "").trim() : "", []), w = ce((k) => b(k).replace(/[ \t]+/g, " ").replace(/\n\s+/g, `
`).replace(/\s+\n/g, `
`).replace(/\n{3,}/g, `

`).trim(), [b]), M = ce(() => {
    f("liked"), setTimeout(() => f("idle"), 2e3);
  }, []), C = ce(() => {
    f("disliked"), setTimeout(() => f("idle"), 2e3);
  }, []), S = ce(async () => {
    try {
      const k = w(e);
      await navigator.clipboard.writeText(k), p("copied"), setTimeout(() => p("idle"), 2e3);
    } catch (k) {
      console.error("Failed to copy text: ", k);
      const P = document.createElement("textarea");
      P.value = w(e), document.body.appendChild(P), P.select();
      try {
        document.execCommand("copy"), p("copied"), setTimeout(() => p("idle"), 2e3);
      } catch (R) {
        console.error("Fallback copy failed:", R);
      }
      document.body.removeChild(P);
    }
  }, [e, w]);
  me(() => {
    if (!n || s) {
      const P = w(e);
      a(P), y(!0);
      return;
    }
    const k = w(e);
    if (c < k.length) {
      const P = setTimeout(() => {
        a((R) => R + k.charAt(c)), l((R) => R + 1);
      }, i);
      return () => clearTimeout(P);
    } else k.length > 0 && c >= k.length && setTimeout(() => y(!0), 200);
  }, [e, c, n, i, w, s]), me(() => {
    const k = w(e);
    if (s) {
      a(k), y(!0);
      return;
    }
    (o === "" || !k.startsWith(o)) && (l(0), a(""), y(!1), f("idle"), p("idle"));
  }, [e, s, w]);
  const _ = ce((k) => k.split(/(\*\*.*?\*\*|\*.*?\*|_.*?_|`.*?`|~~.*?~~)/g).map((R, L) => R.startsWith("**") && R.endsWith("**") ? /* @__PURE__ */ x.jsx("strong", { className: "scxl:font-bold scxl:text-gray-900", children: R.slice(2, -2) }, L) : R.startsWith("~~") && R.endsWith("~~") ? /* @__PURE__ */ x.jsx("del", { className: "scxl:line-through scxl:text-gray-600", children: R.slice(2, -2) }, L) : R.startsWith("*") && R.endsWith("*") && !R.startsWith("**") || R.startsWith("_") && R.endsWith("_") ? /* @__PURE__ */ x.jsx("em", { className: "scxl:italic scxl:text-gray-800", children: R.slice(1, -1) }, L) : R.startsWith("`") && R.endsWith("`") ? /* @__PURE__ */ x.jsx(
    "code",
    {
      className: "scxl:px-1.5 scxl:py-0.5 scxl:bg-gray-100 scxl:text-gray-800 scxl:rounded scxl:text-sm scxl:font-mono scxl:border",
      children: R.slice(1, -1)
    },
    L
  ) : /* @__PURE__ */ x.jsx("span", { children: R }, L)), []), O = ce((k) => k.split(/\n\n+/).filter((R) => R.trim()).map((R, L) => {
    const I = R.trim().split(`
`);
    if (I.length === 1 && I[0].startsWith("#")) {
      const $ = I[0].replace(/^#+\s*/, ""), H = Math.min((I[0].match(/^#+/) || [""])[0].length, 6), Y = `h${H}`, W = {
        1: "scxl:text-3xl scxl:font-bold scxl:text-gray-900 scxl:mt-8 scxl:mb-4",
        2: "scxl:text-2xl scxl:font-bold scxl:text-gray-900 scxl:mt-6 scxl:mb-3",
        3: "scxl:text-xl scxl:font-semibold scxl:text-gray-900 scxl:mt-5 scxl:mb-3",
        4: "scxl:text-lg scxl:font-semibold scxl:text-gray-800 scxl:mt-4 scxl:mb-2",
        5: "scxl:text-base scxl:font-semibold scxl:text-gray-800 scxl:mt-3 scxl:mb-2",
        6: "scxl:text-sm scxl:font-semibold scxl:text-gray-700 scxl:mt-2 scxl:mb-2"
      };
      return /* @__PURE__ */ x.jsx(
        Y,
        {
          className: W[H],
          children: _($)
        },
        L
      );
    }
    if (I[0].startsWith("```") && I[I.length - 1] === "```") {
      const $ = I[0].replace("```", "").trim(), H = I.slice(1, -1).join(`
`);
      return /* @__PURE__ */ x.jsxs("div", { className: "scxl:my-6 scxl:relative", children: [
        $ && /* @__PURE__ */ x.jsx("div", { className: "scxl:text-xs scxl:text-gray-500 scxl:mb-1 scxl:font-mono", children: $ }),
        /* @__PURE__ */ x.jsx("pre", { className: "scxl:p-4 scxl:bg-gray-50 scxl:rounded-lg scxl:overflow-x-auto scxl:border", children: /* @__PURE__ */ x.jsx("code", { className: "scxl:text-sm scxl:font-mono scxl:text-gray-800", children: H }) })
      ] }, L);
    }
    if (I.every(
      ($) => $.trim() === "" || /^\d+\./.test($.trim())
    ) && I.some(($) => /^\d+\./.test($.trim()))) {
      const $ = I.filter((H) => /^\d+\./.test(H.trim())).map((H) => H.replace(/^\d+\.\s*/, "").trim());
      return /* @__PURE__ */ x.jsx("ol", { className: "scxl:my-6 scxl:ml-6 scxl:list-decimal scxl:space-y-2", children: $.map((H, Y) => /* @__PURE__ */ x.jsx("li", { className: "scxl:text-gray-700 scxl:leading-relaxed scxl:pl-2", children: _(H) }, Y)) }, L);
    }
    if (I.every(
      ($) => $.trim() === "" || /^[-•*+]/.test($.trim())
    ) && I.some(($) => /^[-•*+]/.test($.trim()))) {
      const $ = I.filter((H) => /^[-•*+]/.test(H.trim())).map((H) => H.replace(/^[-•*+]\s*/, "").trim());
      return /* @__PURE__ */ x.jsx("ul", { className: "scxl:my-6 scxl:ml-6 scxl:list-disc scxl:space-y-2", children: $.map((H, Y) => /* @__PURE__ */ x.jsx("li", { className: "scxl:text-gray-700 scxl:leading-relaxed scxl:pl-2", children: _(H) }, Y)) }, L);
    }
    if (I.every(($) => $.trim() === "" || $.startsWith(">"))) {
      const $ = I.filter((H) => H.startsWith(">")).map((H) => H.replace(/^>\s*/, "")).join(" ");
      return /* @__PURE__ */ x.jsx(
        "blockquote",
        {
          className: "scxl:my-6 scxl:pl-4 scxl:border-l-4 scxl:border-indigo-200 scxl:bg-indigo-50 scxl:py-3 scxl:pr-4 scxl:rounded-r",
          children: /* @__PURE__ */ x.jsx("p", { className: "scxl:text-gray-700 scxl:italic scxl:leading-relaxed", children: _($) })
        },
        L
      );
    }
    return /* @__PURE__ */ x.jsx(
      "div",
      {
        className: "scxl:my-2 scxl:text-gray-700 scxl:leading-relaxed",
        children: I.map(($, H) => /* @__PURE__ */ x.jsxs(We.Fragment, { children: [
          H > 0 && /* @__PURE__ */ x.jsx("br", {}),
          /* @__PURE__ */ x.jsx("span", { className: "scxl:block", children: _($) })
        ] }, H))
      },
      L
    );
  }), [_]);
  return !e || !b(e) ? /* @__PURE__ */ x.jsx("div", { className: `scxl:flex scxl:items-center scxl:space-x-2 scxl:text-gray-500 ${t}`, children: /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:space-x-1", children: [
    /* @__PURE__ */ x.jsx("div", { className: "scxl:w-2 scxl:h-2 scxl:rounded-full scxl:bg-gray-400 scxl:animate-bounce" }),
    /* @__PURE__ */ x.jsx("div", { className: "scxl:w-2 scxl:h-2 scxl:rounded-full scxl:bg-gray-400 scxl:animate-bounce scxl:delay-200" }),
    /* @__PURE__ */ x.jsx("div", { className: "scxl:w-2 scxl:h-2 scxl:rounded-full scxl:bg-gray-400 scxl:animate-bounce scxl:delay-400" })
  ] }) }) : /* @__PURE__ */ x.jsx(Fv, { children: /* @__PURE__ */ x.jsxs(
    Wd.div,
    {
      className: `scxl:prose scxl:prose-lg scxl:max-w-none ${t}`,
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 },
      children: [
        /* @__PURE__ */ x.jsx("div", { className: "scxl:space-y-1", children: O(o) }),
        /* @__PURE__ */ x.jsx(ZS, { children: g && /* @__PURE__ */ x.jsxs(
          Wd.div,
          {
            className: "scxl:flex scxl:items-center scxl:justify-between",
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.2, delay: 0.2 },
            children: [
              /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:items-center scxl:gap-2", children: [
                /* @__PURE__ */ x.jsxs(gr, { children: [
                  /* @__PURE__ */ x.jsx(vr, { asChild: !0, children: /* @__PURE__ */ x.jsx(
                    "button",
                    {
                      onClick: M,
                      type: "button",
                      className: "scxl:flex scxl:items-center scxl:cursor-pointer scxl:justify-center scxl:p-1.5 scxl:rounded-full scxl:transition-colors scxl:duration-200",
                      children: u === "liked" ? /* @__PURE__ */ x.jsx(ea, { className: "scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" }) : /* @__PURE__ */ x.jsx(jC, { className: "scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" })
                    }
                  ) }),
                  /* @__PURE__ */ x.jsx(yr, { children: /* @__PURE__ */ x.jsx("p", { children: u === "liked" ? "Liked" : "Like" }) })
                ] }),
                /* @__PURE__ */ x.jsxs(gr, { children: [
                  /* @__PURE__ */ x.jsx(vr, { asChild: !0, children: /* @__PURE__ */ x.jsx(
                    "button",
                    {
                      onClick: C,
                      type: "button",
                      className: "scxl:flex scxl:items-center scxl:cursor-pointer scxl:justify-center scxl:p-1.5 scxl:rounded-full scxl:transition-colors scxl:duration-200",
                      children: u === "disliked" ? /* @__PURE__ */ x.jsx(ea, { className: "scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" }) : /* @__PURE__ */ x.jsx(RC, { className: "scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" })
                    }
                  ) }),
                  /* @__PURE__ */ x.jsx(yr, { children: /* @__PURE__ */ x.jsx("p", { children: u === "disliked" ? "Disliked" : "Dislike" }) })
                ] }),
                /* @__PURE__ */ x.jsxs(gr, { children: [
                  /* @__PURE__ */ x.jsx(vr, { asChild: !0, children: /* @__PURE__ */ x.jsx(
                    "button",
                    {
                      onClick: S,
                      type: "button",
                      className: "scxl:flex scxl:items-center scxl:cursor-pointer scxl:justify-center scxl:p-1.5 scxl:rounded-full scxl:transition-colors scxl:duration-200",
                      children: h === "copied" ? /* @__PURE__ */ x.jsx(ea, { className: "scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" }) : /* @__PURE__ */ x.jsx(EC, { className: "scxl:w-3.5 scxl:h-3.5 scxl:text-indigo-500" })
                    }
                  ) }),
                  /* @__PURE__ */ x.jsx(yr, { children: /* @__PURE__ */ x.jsx("p", { children: h === "copied" ? "Copied" : "Copy" }) })
                ] })
              ] }),
              /* @__PURE__ */ x.jsx("div", { className: "scxl:flex scxl:items-center scxl:gap-2 scxl:text-xs scxl:text-gray-400", children: /* @__PURE__ */ x.jsx("p", { className: "scxl:text-gray-700 scxl:cursor-pointer hover:scxl:opacity-80 scxl:transition-all scxl:duration-200 scxl:ease-in-out", children: new Date(r || Date.now()).toLocaleTimeString() }) })
            ]
          }
        ) })
      ]
    }
  ) });
}, YT = ({
  "aria-label": e = "Loading",
  className: t = "",
  initialDots: n = 1,
  interval: r = 500,
  maxDots: i = 3
}) => {
  const [s, o] = _e(n);
  me(() => {
    const c = setInterval(() => {
      o((l) => l % i + 1);
    }, r);
    return () => clearInterval(c);
  }, [r, i]);
  const a = () => ".".repeat(s);
  return /* @__PURE__ */ x.jsx("span", { className: t, "aria-label": e, children: a() });
}, XT = ({
  classNames: e = {},
  noAutoscroll: t = !1
}) => {
  const n = Ie(null), r = Ie(!0), i = sm();
  me(() => {
    function u(f) {
      n.current?.lenis && n.current.lenis.raf(f.timestamp);
    }
    return ke.update(u, !0), () => {
      Zt(u);
    };
  }, []);
  const s = ce(() => {
    !n.current?.lenis || t || r.current && n.current.lenis.scrollTo("bottom", { duration: 0.8 });
  }, [t]), o = ce(() => {
    if (!n.current?.lenis || t) return;
    const f = n.current.lenis.rootElement;
    f && (r.current = Math.ceil(f.scrollHeight - f.scrollTop) <= Math.ceil(f.clientHeight + 50));
  }, [t]), { messages: a } = $g({
    onMessageAdded: () => {
      t || setTimeout(() => s(), 100);
    }
  });
  me(() => {
    t || setTimeout(() => s(), 100);
  }, [a, s, t]), me(() => {
    const u = n.current?.lenis;
    if (!u) return;
    const f = () => o();
    return u.on("scroll", f), o(), () => {
      u.off("scroll", f);
    };
  }, [o]);
  const c = i === "authenticating" || i === "connecting", l = i === "connected" || i === "ready";
  return a.length > 0 ? /* @__PURE__ */ x.jsx(
    Hi,
    {
      options: {
        autoRaf: !1,
        smoothWheel: !0,
        wheelMultiplier: 2,
        touchMultiplier: 2
      },
      className: Re(
        "scxl:flex-1 scxl:sm:w-3/4 scxl:sm:max-w-4xl chat-scxl scxl:w-full! scxl:sm:p-5 scxl:p-2 scxl:overflow-y-auto",
        e.container
      ),
      ref: n,
      children: /* @__PURE__ */ x.jsx("div", { className: "scxl:w-full scxl:h-full scxl:flex scxl:flex-col scxl:gap-2", children: a.map((u, f) => /* @__PURE__ */ x.jsx(Uc, { children: u.role === "user" ? /* @__PURE__ */ x.jsx("div", { className: "scxl:flex scxl:flex-row scxl:w-full scxl:justify-end", children: /* @__PURE__ */ x.jsx("div", { className: "scxl:max-w-3/4 scxl:text-sm scxl:bg-indigo-500 scxl:p-2 scxl:rounded-tr-xl scxl:rounded-tl-xl scxl:rounded-bl-xl scxl:m-2", children: /* @__PURE__ */ x.jsx("p", { className: "scxl:text-white", children: u.content }) }) }) : /* @__PURE__ */ x.jsx("div", { className: "scxl:flex scxl:flex-row scxl:w-full", children: /* @__PURE__ */ x.jsx("div", { className: "scxl:w-full scxl:text-sm scxl:p-2 scxl:m-2", children: u.content ? /* @__PURE__ */ x.jsx(
        KT,
        {
          rawContent: u.content,
          timeStamp: u.createdAt,
          disableTypewriter: !u.isFresh
        }
      ) : /* @__PURE__ */ x.jsx(YT, { className: e.thinking }) }) }) }, u.id || f)) })
    }
  ) : c ? /* @__PURE__ */ x.jsx(
    Hi,
    {
      options: {
        autoRaf: !1,
        smoothWheel: !0,
        wheelMultiplier: 2,
        touchMultiplier: 2
      },
      className: Re(
        "scxl:flex-1 scxl:sm:w-3/4 scxl:sm:max-w-4xl chat-scxl scxl:w-full! scxl:sm:p-5 scxl:p-2 scxl:overflow-y-auto",
        e.container
      ),
      ref: n,
      children: /* @__PURE__ */ x.jsx("div", { className: "scxl:flex scxl:items-center scxl:justify-center scxl:h-full", children: /* @__PURE__ */ x.jsx("div", { className: "scxl:text-muted-foreground scxl:text-sm", children: "Connecting to agent..." }) })
    }
  ) : l ? /* @__PURE__ */ x.jsx(
    Hi,
    {
      options: {
        autoRaf: !1,
        smoothWheel: !0,
        wheelMultiplier: 2,
        touchMultiplier: 2
      },
      className: Re(
        "scxl:flex-1 scxl:sm:w-3/4 scxl:sm:max-w-4xl chat-scxl scxl:w-full! scxl:sm:p-5 scxl:p-2 scxl:overflow-y-auto",
        e.container
      ),
      ref: n,
      children: /* @__PURE__ */ x.jsx("div", { className: "scxl:flex scxl:items-center scxl:justify-center scxl:h-full", children: /* @__PURE__ */ x.jsx("div", { className: "scxl:text-muted-foreground scxl:text-sm", children: "Waiting for messages..." }) })
    }
  ) : /* @__PURE__ */ x.jsx(
    Hi,
    {
      options: {
        autoRaf: !1,
        smoothWheel: !0,
        wheelMultiplier: 2,
        touchMultiplier: 2
      },
      className: Re(
        "scxl:flex-1 scxl:sm:w-3/4 scxl:sm:max-w-4xl chat-scxl scxl:w-full! scxl:sm:p-5 scxl:p-2 scxl:overflow-y-auto",
        e.container
      ),
      ref: n,
      children: /* @__PURE__ */ x.jsx("div", { className: "scxl:flex scxl:items-center scxl:justify-center scxl:h-full", children: /* @__PURE__ */ x.jsxs("div", { className: "scxl:text-center scxl:p-4", children: [
        /* @__PURE__ */ x.jsx("div", { className: "scxl:text-muted-foreground scxl:mb-2", children: "Not connected to agent" }),
        /* @__PURE__ */ x.jsx("p", { className: "scxl:text-sm scxl:text-muted-foreground scxl:max-w-md", children: "Connect to an agent to see conversation messages in real-time." })
      ] }) })
    }
  );
}, uf = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, df = Ce, Bv = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return df(e, n?.class, n?.className);
  const { variants: i, defaultVariants: s } = t, o = Object.keys(i).map((l) => {
    const u = n?.[l], f = s?.[l];
    if (u === null) return null;
    const h = uf(u) || uf(f);
    return i[l][h];
  }), a = n && Object.entries(n).reduce((l, u) => {
    let [f, h] = u;
    return h === void 0 || (l[f] = h), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: f, className: h, ...p } = u;
    return Object.entries(p).every((g) => {
      let [y, b] = g;
      return Array.isArray(b) ? b.includes({
        ...s,
        ...a
      }[y]) : {
        ...s,
        ...a
      }[y] === b;
    }) ? [
      ...l,
      f,
      h
    ] : l;
  }, []);
  return df(e, o, c, n?.class, n?.className);
}, QT = Bv(
  "scxl:inline-flex scxl:items-center scxl:justify-center scxl:gap-2 scxl:whitespace-nowrap scxl:rounded-md scxl:text-sm scxl:font-medium scxl:transition-all disabled:scxl:pointer-events-none disabled:scxl:opacity-50 [&_svg]:scxl:pointer-events-none [&_svg:not([class*='size-'])]:scxl:size-4 scxl:shrink-0 [&_svg]:scxl:shrink-0 scxl:outline-none focus-visible:scxl:border-ring focus-visible:scxl:ring-ring/50 focus-visible:scxl:ring-[3px] aria-invalid:scxl:ring-destructive/20 dark:aria-invalid:scxl:ring-destructive/40 aria-invalid:scxl:border-destructive",
  {
    variants: {
      variant: {
        default: "scxl:bg-primary scxl:text-primary-foreground scxl:shadow-xs hover:scxl:bg-primary/90",
        destructive: "scxl:bg-destructive scxl:text-white scxl:shadow-xs hover:scxl:bg-destructive/90 focus-visible:scxl:ring-destructive/20 dark:focus-visible:scxl:ring-destructive/40 dark:scxl:bg-destructive/60",
        outline: "scxl:border scxl:bg-background scxl:shadow-xs hover:scxl:bg-accent hover:scxl:text-accent-foreground dark:scxl:bg-input/30 dark:scxl:border-input dark:hover:scxl:bg-input/50",
        secondary: "scxl:bg-secondary scxl:text-secondary-foreground scxl:shadow-xs hover:scxl:bg-secondary/80",
        ghost: "hover:scxl:bg-accent hover:scxl:text-accent-foreground dark:hover:scxl:bg-accent/50",
        link: "scxl:text-primary scxl:underline-offset-4 hover:scxl:underline"
      },
      size: {
        default: "scxl:h-9 scxl:px-4 scxl:py-2 has-[>svg]:scxl:px-3",
        sm: "scxl:h-8 scxl:rounded-md scxl:gap-1.5 scxl:px-3 has-[>svg]:scxl:px-2.5",
        lg: "scxl:h-10 scxl:rounded-md scxl:px-6 has-[>svg]:scxl:px-4",
        icon: "scxl:size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function fc({
  className: e,
  variant: t,
  size: n,
  asChild: r = !1,
  ...i
}) {
  const s = r ? IC : "button";
  return /* @__PURE__ */ x.jsx(
    s,
    {
      "data-slot": "button",
      className: Re(QT({ variant: t, size: n, className: e })),
      ...i
    }
  );
}
const ZT = ({
  className: e,
  trackHasStarted: t,
  onClick: n,
  onConnect: r,
  onDisconnect: i
}) => {
  const [s, o] = We.useState(!1), a = sm();
  We.useEffect(() => {
    (a === "connected" || a === "ready") && o(!1);
  }, [a]);
  const c = () => {
    const g = s || ["initializing", "authenticating", "connecting"].includes(a), y = ["connected", "ready"].includes(a);
    if (!t || (g || !t))
      return {
        children: t ? "Connect" : "Microphone permission not granted",
        variant: "secondary",
        className: "scxl:bg-gray-400 scxl:hover:bg-gray-400 scxl:cursor-not-allowed scxl:px-10 scxl:rounded-full scxl:transition-colors scxl:duration-200 scxl:text-gray-700",
        disabled: !0
      };
    if (g) {
      let w = "Connecting";
      return a === "initializing" ? w = "Initializing" : a === "authenticating" ? w = "Authenticating" : a === "connecting" && (w = "Connecting"), {
        children: /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:items-center scxl:gap-2", children: [
          w,
          /* @__PURE__ */ x.jsx("span", { className: "scxl:w-4 scxl:h-4 scxl:border-2 scxl:border-white scxl:border-t-transparent scxl:rounded-full scxl:animate-spin" })
        ] }),
        variant: "default",
        className: "scxl:bg-indigo-500 scxl:hover:bg-indigo-600 scxl:cursor-not-allowed scxl:px-10 scxl:rounded-full scxl:transition-colors scxl:duration-200",
        disabled: !0
      };
    }
    return y ? {
      children: "Disconnect",
      variant: "destructive",
      className: "scxl:px-10 scxl:rounded-full scxl:transition-colors scxl:duration-200 scxl:bg-red-500 scxl:hover:bg-red-600 scxl:text-white"
    } : {
      children: "Connect",
      variant: "default",
      className: "scxl:bg-indigo-500 scxl:hover:bg-indigo-600 scxl:cursor-pointer scxl:transition-colors scxl:duration-200 scxl:px-10 scxl:rounded-full"
    };
  }, l = () => {
    console.log("Trying to call onClick"), n?.(), ["connected", "ready"].includes(a) ? (console.log("Disconnecting from SmallWebRTC connection"), i?.()) : (console.log("Connecting to SmallWebRTC connection"), o(!0), r?.());
  }, { children: u, className: f, variant: h, disabled: p } = c();
  return /* @__PURE__ */ x.jsx(
    fc,
    {
      className: Re(f, e),
      onClick: l,
      variant: h,
      disabled: p,
      children: u
    }
  );
};
function ff(e, t) {
  if (e == null) return {};
  var n, r, i = function(o, a) {
    if (o == null) return {};
    var c = {};
    for (var l in o) if ({}.hasOwnProperty.call(o, l)) {
      if (a.indexOf(l) !== -1) continue;
      c[l] = o[l];
    }
    return c;
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++) n = s[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
function lt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function he(e) {
  return he = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, he(e);
}
function $v(e) {
  var t = function(n, r) {
    if (he(n) != "object" || !n) return n;
    var i = n[Symbol.toPrimitive];
    if (i !== void 0) {
      var s = i.call(n, r);
      if (he(s) != "object") return s;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(n);
  }(e, "string");
  return he(t) == "symbol" ? t : t + "";
}
function hf(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, $v(r.key), r);
  }
}
function ut(e, t, n) {
  return t && hf(e.prototype, t), n && hf(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function go(e, t) {
  if (t && (he(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return function(n) {
    if (n === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n;
  }(e);
}
function Ot(e) {
  return Ot = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ot(e);
}
function Ti(e, t) {
  return Ti = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Ti(e, t);
}
function vo(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ti(e, t);
}
function Dt(e, t, n) {
  return (t = $v(t)) in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function pf(e, t, n, r, i, s, o) {
  try {
    var a = e[s](o), c = a.value;
  } catch (l) {
    return void n(l);
  }
  a.done ? t(c) : Promise.resolve(c).then(r, i);
}
function re(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, i) {
      var s = e.apply(t, n);
      function o(c) {
        pf(s, r, i, o, a, "next", c);
      }
      function a(c) {
        pf(s, r, i, o, a, "throw", c);
      }
      o(void 0);
    });
  };
}
function mf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function tt(e, t) {
  return function(n) {
    if (Array.isArray(n)) return n;
  }(e) || function(n, r) {
    var i = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (i != null) {
      var s, o, a, c, l = [], u = !0, f = !1;
      try {
        if (a = (i = i.call(n)).next, r === 0) {
          if (Object(i) !== i) return;
          u = !1;
        } else for (; !(u = (s = a.call(i)).done) && (l.push(s.value), l.length !== r); u = !0) ;
      } catch (h) {
        f = !0, o = h;
      } finally {
        try {
          if (!u && i.return != null && (c = i.return(), Object(c) !== c)) return;
        } finally {
          if (f) throw o;
        }
      }
      return l;
    }
  }(e, t) || function(n, r) {
    if (n) {
      if (typeof n == "string") return mf(n, r);
      var i = {}.toString.call(n).slice(8, -1);
      return i === "Object" && n.constructor && (i = n.constructor.name), i === "Map" || i === "Set" ? Array.from(n) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? mf(n, r) : void 0;
    }
  }(e, t) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function eM(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vv, hc = { exports: {} }, br = typeof Reflect == "object" ? Reflect : null, gf = br && typeof br.apply == "function" ? br.apply : function(e, t, n) {
  return Function.prototype.apply.call(e, t, n);
};
Vv = br && typeof br.ownKeys == "function" ? br.ownKeys : Object.getOwnPropertySymbols ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : function(e) {
  return Object.getOwnPropertyNames(e);
};
var vf = Number.isNaN || function(e) {
  return e != e;
};
function ve() {
  ve.init.call(this);
}
hc.exports = ve, hc.exports.once = function(e, t) {
  return new Promise(function(n, r) {
    function i(o) {
      e.removeListener(t, s), r(o);
    }
    function s() {
      typeof e.removeListener == "function" && e.removeListener("error", i), n([].slice.call(arguments));
    }
    _f(e, t, s, { once: !0 }), t !== "error" && function(o, a, c) {
      typeof o.on == "function" && _f(o, "error", a, c);
    }(e, i, { once: !0 });
  });
}, ve.EventEmitter = ve, ve.prototype._events = void 0, ve.prototype._eventsCount = 0, ve.prototype._maxListeners = void 0;
var yf = 10;
function Cs(e) {
  if (typeof e != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
function Uv(e) {
  return e._maxListeners === void 0 ? ve.defaultMaxListeners : e._maxListeners;
}
function bf(e, t, n, r) {
  var i, s, o, a;
  if (Cs(n), (s = e._events) === void 0 ? (s = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (s.newListener !== void 0 && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), o = s[t]), o === void 0) o = s[t] = n, ++e._eventsCount;
  else if (typeof o == "function" ? o = s[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), (i = Uv(e)) > 0 && o.length > i && !o.warned) {
    o.warned = !0;
    var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = o.length, a = c, console && console.warn && console.warn(a);
  }
  return e;
}
function tM() {
  if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function wf(e, t, n) {
  var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n }, i = tM.bind(r);
  return i.listener = n, r.wrapFn = i, i;
}
function xf(e, t, n) {
  var r = e._events;
  if (r === void 0) return [];
  var i = r[t];
  return i === void 0 ? [] : typeof i == "function" ? n ? [i.listener || i] : [i] : n ? function(s) {
    for (var o = new Array(s.length), a = 0; a < o.length; ++a) o[a] = s[a].listener || s[a];
    return o;
  }(i) : zv(i, i.length);
}
function Sf(e) {
  var t = this._events;
  if (t !== void 0) {
    var n = t[e];
    if (typeof n == "function") return 1;
    if (n !== void 0) return n.length;
  }
  return 0;
}
function zv(e, t) {
  for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n;
}
function _f(e, t, n, r) {
  if (typeof e.on == "function") r.once ? e.once(t, n) : e.on(t, n);
  else {
    if (typeof e.addEventListener != "function") throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
    e.addEventListener(t, function i(s) {
      r.once && e.removeEventListener(t, i), n(s);
    });
  }
}
Object.defineProperty(ve, "defaultMaxListeners", { enumerable: !0, get: function() {
  return yf;
}, set: function(e) {
  if (typeof e != "number" || e < 0 || vf(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
  yf = e;
} }), ve.init = function() {
  this._events !== void 0 && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, ve.prototype.setMaxListeners = function(e) {
  if (typeof e != "number" || e < 0 || vf(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this;
}, ve.prototype.getMaxListeners = function() {
  return Uv(this);
}, ve.prototype.emit = function(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
  var r = e === "error", i = this._events;
  if (i !== void 0) r = r && i.error === void 0;
  else if (!r) return !1;
  if (r) {
    var s;
    if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
    var o = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    throw o.context = s, o;
  }
  var a = i[e];
  if (a === void 0) return !1;
  if (typeof a == "function") gf(a, this, t);
  else {
    var c = a.length, l = zv(a, c);
    for (n = 0; n < c; ++n) gf(l[n], this, t);
  }
  return !0;
}, ve.prototype.addListener = function(e, t) {
  return bf(this, e, t, !1);
}, ve.prototype.on = ve.prototype.addListener, ve.prototype.prependListener = function(e, t) {
  return bf(this, e, t, !0);
}, ve.prototype.once = function(e, t) {
  return Cs(t), this.on(e, wf(this, e, t)), this;
}, ve.prototype.prependOnceListener = function(e, t) {
  return Cs(t), this.prependListener(e, wf(this, e, t)), this;
}, ve.prototype.removeListener = function(e, t) {
  var n, r, i, s, o;
  if (Cs(t), (r = this._events) === void 0) return this;
  if ((n = r[e]) === void 0) return this;
  if (n === t || n.listener === t) --this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
  else if (typeof n != "function") {
    for (i = -1, s = n.length - 1; s >= 0; s--) if (n[s] === t || n[s].listener === t) {
      o = n[s].listener, i = s;
      break;
    }
    if (i < 0) return this;
    i === 0 ? n.shift() : function(a, c) {
      for (; c + 1 < a.length; c++) a[c] = a[c + 1];
      a.pop();
    }(n, i), n.length === 1 && (r[e] = n[0]), r.removeListener !== void 0 && this.emit("removeListener", e, o || t);
  }
  return this;
}, ve.prototype.off = ve.prototype.removeListener, ve.prototype.removeAllListeners = function(e) {
  var t, n, r;
  if ((n = this._events) === void 0) return this;
  if (n.removeListener === void 0) return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount == 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[e]), this;
  if (arguments.length === 0) {
    var i, s = Object.keys(n);
    for (r = 0; r < s.length; ++r) (i = s[r]) !== "removeListener" && this.removeAllListeners(i);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (typeof (t = n[e]) == "function") this.removeListener(e, t);
  else if (t !== void 0) for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
  return this;
}, ve.prototype.listeners = function(e) {
  return xf(this, e, !0);
}, ve.prototype.rawListeners = function(e) {
  return xf(this, e, !1);
}, ve.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : Sf.call(e, t);
}, ve.prototype.listenerCount = Sf, ve.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Vv(this._events) : [];
};
var pc = hc.exports, ts = eM(pc), kf = Object.prototype.hasOwnProperty;
function Cf(e, t, n) {
  for (n of e.keys()) if (Qe(n, t)) return n;
}
function Qe(e, t) {
  var n, r, i;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Qe(e[r], t[r]); ) ;
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if ((i = r) && typeof i == "object" && !(i = Cf(t, i)) || !t.has(i)) return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if ((i = r[0]) && typeof i == "object" && !(i = Cf(t, i)) || !Qe(r[1], t.get(i))) return !1;
      return !0;
    }
    if (n === ArrayBuffer) e = new Uint8Array(e), t = new Uint8Array(t);
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e.getInt8(r) === t.getInt8(r); ) ;
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; ) ;
      return r === -1;
    }
    if (!n || typeof e == "object") {
      for (n in r = 0, e)
        if (kf.call(e, n) && ++r && !kf.call(t, n) || !(n in t) || !Qe(e[n], t[n])) return !1;
      return Object.keys(t).length === r;
    }
  }
  return e != e && t != t;
}
const nM = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, Wv = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, Ae = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, Xe = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, dn = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
class B {
  static getFirstMatch(t, n) {
    const r = n.match(t);
    return r && r.length > 0 && r[1] || "";
  }
  static getSecondMatch(t, n) {
    const r = n.match(t);
    return r && r.length > 1 && r[2] || "";
  }
  static matchAndReturnConst(t, n, r) {
    if (t.test(n)) return r;
  }
  static getWindowsVersionName(t) {
    switch (t) {
      case "NT":
        return "NT";
      case "XP":
      case "NT 5.1":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  static getMacOSVersionName(t) {
    const n = t.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), n[0] === 10) switch (n[1]) {
      case 5:
        return "Leopard";
      case 6:
        return "Snow Leopard";
      case 7:
        return "Lion";
      case 8:
        return "Mountain Lion";
      case 9:
        return "Mavericks";
      case 10:
        return "Yosemite";
      case 11:
        return "El Capitan";
      case 12:
        return "Sierra";
      case 13:
        return "High Sierra";
      case 14:
        return "Mojave";
      case 15:
        return "Catalina";
      default:
        return;
    }
  }
  static getAndroidVersionName(t) {
    const n = t.split(".").splice(0, 2).map((r) => parseInt(r, 10) || 0);
    if (n.push(0), !(n[0] === 1 && n[1] < 5)) return n[0] === 1 && n[1] < 6 ? "Cupcake" : n[0] === 1 && n[1] >= 6 ? "Donut" : n[0] === 2 && n[1] < 2 ? "Eclair" : n[0] === 2 && n[1] === 2 ? "Froyo" : n[0] === 2 && n[1] > 2 ? "Gingerbread" : n[0] === 3 ? "Honeycomb" : n[0] === 4 && n[1] < 1 ? "Ice Cream Sandwich" : n[0] === 4 && n[1] < 4 ? "Jelly Bean" : n[0] === 4 && n[1] >= 4 ? "KitKat" : n[0] === 5 ? "Lollipop" : n[0] === 6 ? "Marshmallow" : n[0] === 7 ? "Nougat" : n[0] === 8 ? "Oreo" : n[0] === 9 ? "Pie" : void 0;
  }
  static getVersionPrecision(t) {
    return t.split(".").length;
  }
  static compareVersions(t, n, r = !1) {
    const i = B.getVersionPrecision(t), s = B.getVersionPrecision(n);
    let o = Math.max(i, s), a = 0;
    const c = B.map([t, n], (l) => {
      const u = o - B.getVersionPrecision(l), f = l + new Array(u + 1).join(".0");
      return B.map(f.split("."), (h) => new Array(20 - h.length).join("0") + h).reverse();
    });
    for (r && (a = o - Math.min(i, s)), o -= 1; o >= a; ) {
      if (c[0][o] > c[1][o]) return 1;
      if (c[0][o] === c[1][o]) {
        if (o === a) return 0;
        o -= 1;
      } else if (c[0][o] < c[1][o]) return -1;
    }
  }
  static map(t, n) {
    const r = [];
    let i;
    if (Array.prototype.map) return Array.prototype.map.call(t, n);
    for (i = 0; i < t.length; i += 1) r.push(n(t[i]));
    return r;
  }
  static find(t, n) {
    let r, i;
    if (Array.prototype.find) return Array.prototype.find.call(t, n);
    for (r = 0, i = t.length; r < i; r += 1) {
      const s = t[r];
      if (n(s, r)) return s;
    }
  }
  static assign(t, ...n) {
    const r = t;
    let i, s;
    if (Object.assign) return Object.assign(t, ...n);
    for (i = 0, s = n.length; i < s; i += 1) {
      const o = n[i];
      typeof o == "object" && o !== null && Object.keys(o).forEach((a) => {
        r[a] = o[a];
      });
    }
    return t;
  }
  static getBrowserAlias(t) {
    return nM[t];
  }
  static getBrowserTypeByAlias(t) {
    return Wv[t] || "";
  }
}
const we = /version\/(\d+(\.?_?\d+)+)/i, rM = [{ test: [/googlebot/i], describe(e) {
  const t = { name: "Googlebot" }, n = B.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/opera/i], describe(e) {
  const t = { name: "Opera" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/opr\/|opios/i], describe(e) {
  const t = { name: "Opera" }, n = B.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/SamsungBrowser/i], describe(e) {
  const t = { name: "Samsung Internet for Android" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/Whale/i], describe(e) {
  const t = { name: "NAVER Whale Browser" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/MZBrowser/i], describe(e) {
  const t = { name: "MZ Browser" }, n = B.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/focus/i], describe(e) {
  const t = { name: "Focus" }, n = B.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/swing/i], describe(e) {
  const t = { name: "Swing" }, n = B.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/coast/i], describe(e) {
  const t = { name: "Opera Coast" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe(e) {
  const t = { name: "Opera Touch" }, n = B.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/yabrowser/i], describe(e) {
  const t = { name: "Yandex Browser" }, n = B.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/ucbrowser/i], describe(e) {
  const t = { name: "UC Browser" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/Maxthon|mxios/i], describe(e) {
  const t = { name: "Maxthon" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/epiphany/i], describe(e) {
  const t = { name: "Epiphany" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/puffin/i], describe(e) {
  const t = { name: "Puffin" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/sleipnir/i], describe(e) {
  const t = { name: "Sleipnir" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/k-meleon/i], describe(e) {
  const t = { name: "K-Meleon" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/micromessenger/i], describe(e) {
  const t = { name: "WeChat" }, n = B.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/qqbrowser/i], describe(e) {
  const t = { name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser" }, n = B.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/msie|trident/i], describe(e) {
  const t = { name: "Internet Explorer" }, n = B.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/\sedg\//i], describe(e) {
  const t = { name: "Microsoft Edge" }, n = B.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/edg([ea]|ios)/i], describe(e) {
  const t = { name: "Microsoft Edge" }, n = B.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/vivaldi/i], describe(e) {
  const t = { name: "Vivaldi" }, n = B.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/seamonkey/i], describe(e) {
  const t = { name: "SeaMonkey" }, n = B.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/sailfish/i], describe(e) {
  const t = { name: "Sailfish" }, n = B.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
  return n && (t.version = n), t;
} }, { test: [/silk/i], describe(e) {
  const t = { name: "Amazon Silk" }, n = B.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/phantom/i], describe(e) {
  const t = { name: "PhantomJS" }, n = B.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/slimerjs/i], describe(e) {
  const t = { name: "SlimerJS" }, n = B.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(e) {
  const t = { name: "BlackBerry" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/(web|hpw)[o0]s/i], describe(e) {
  const t = { name: "WebOS Browser" }, n = B.getFirstMatch(we, e) || B.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/bada/i], describe(e) {
  const t = { name: "Bada" }, n = B.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/tizen/i], describe(e) {
  const t = { name: "Tizen" }, n = B.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/qupzilla/i], describe(e) {
  const t = { name: "QupZilla" }, n = B.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/firefox|iceweasel|fxios/i], describe(e) {
  const t = { name: "Firefox" }, n = B.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/electron/i], describe(e) {
  const t = { name: "Electron" }, n = B.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/MiuiBrowser/i], describe(e) {
  const t = { name: "Miui" }, n = B.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/chromium/i], describe(e) {
  const t = { name: "Chromium" }, n = B.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/chrome|crios|crmo/i], describe(e) {
  const t = { name: "Chrome" }, n = B.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/GSA/i], describe(e) {
  const t = { name: "Google Search" }, n = B.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test(e) {
  const t = !e.test(/like android/i), n = e.test(/android/i);
  return t && n;
}, describe(e) {
  const t = { name: "Android Browser" }, n = B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/playstation 4/i], describe(e) {
  const t = { name: "PlayStation 4" }, n = B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/safari|applewebkit/i], describe(e) {
  const t = { name: "Safari" }, n = B.getFirstMatch(we, e);
  return n && (t.version = n), t;
} }, { test: [/.*/i], describe(e) {
  const t = e.search("\\(") !== -1 ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
  return { name: B.getFirstMatch(t, e), version: B.getSecondMatch(t, e) };
} }];
var iM = [{ test: [/Roku\/DVP/], describe(e) {
  const t = B.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
  return { name: Xe.Roku, version: t };
} }, { test: [/windows phone/i], describe(e) {
  const t = B.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
  return { name: Xe.WindowsPhone, version: t };
} }, { test: [/windows /i], describe(e) {
  const t = B.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e), n = B.getWindowsVersionName(t);
  return { name: Xe.Windows, version: t, versionName: n };
} }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe(e) {
  const t = { name: Xe.iOS }, n = B.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
  return n && (t.version = n), t;
} }, { test: [/macintosh/i], describe(e) {
  const t = B.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."), n = B.getMacOSVersionName(t), r = { name: Xe.MacOS, version: t };
  return n && (r.versionName = n), r;
} }, { test: [/(ipod|iphone|ipad)/i], describe(e) {
  const t = B.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
  return { name: Xe.iOS, version: t };
} }, { test(e) {
  const t = !e.test(/like android/i), n = e.test(/android/i);
  return t && n;
}, describe(e) {
  const t = B.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e), n = B.getAndroidVersionName(t), r = { name: Xe.Android, version: t };
  return n && (r.versionName = n), r;
} }, { test: [/(web|hpw)[o0]s/i], describe(e) {
  const t = B.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e), n = { name: Xe.WebOS };
  return t && t.length && (n.version = t), n;
} }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe(e) {
  const t = B.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || B.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || B.getFirstMatch(/\bbb(\d+)/i, e);
  return { name: Xe.BlackBerry, version: t };
} }, { test: [/bada/i], describe(e) {
  const t = B.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
  return { name: Xe.Bada, version: t };
} }, { test: [/tizen/i], describe(e) {
  const t = B.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
  return { name: Xe.Tizen, version: t };
} }, { test: [/linux/i], describe: () => ({ name: Xe.Linux }) }, { test: [/CrOS/], describe: () => ({ name: Xe.ChromeOS }) }, { test: [/PlayStation 4/], describe(e) {
  const t = B.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
  return { name: Xe.PlayStation4, version: t };
} }], sM = [{ test: [/googlebot/i], describe: () => ({ type: "bot", vendor: "Google" }) }, { test: [/huawei/i], describe(e) {
  const t = B.getFirstMatch(/(can-l01)/i, e) && "Nova", n = { type: Ae.mobile, vendor: "Huawei" };
  return t && (n.model = t), n;
} }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: () => ({ type: Ae.tablet, vendor: "Nexus" }) }, { test: [/ipad/i], describe: () => ({ type: Ae.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: () => ({ type: Ae.tablet, vendor: "Apple", model: "iPad" }) }, { test: [/kftt build/i], describe: () => ({ type: Ae.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" }) }, { test: [/silk/i], describe: () => ({ type: Ae.tablet, vendor: "Amazon" }) }, { test: [/tablet(?! pc)/i], describe: () => ({ type: Ae.tablet }) }, { test(e) {
  const t = e.test(/ipod|iphone/i), n = e.test(/like (ipod|iphone)/i);
  return t && !n;
}, describe(e) {
  const t = B.getFirstMatch(/(ipod|iphone)/i, e);
  return { type: Ae.mobile, vendor: "Apple", model: t };
} }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: () => ({ type: Ae.mobile, vendor: "Nexus" }) }, { test: [/[^-]mobi/i], describe: () => ({ type: Ae.mobile }) }, { test: (e) => e.getBrowserName(!0) === "blackberry", describe: () => ({ type: Ae.mobile, vendor: "BlackBerry" }) }, { test: (e) => e.getBrowserName(!0) === "bada", describe: () => ({ type: Ae.mobile }) }, { test: (e) => e.getBrowserName() === "windows phone", describe: () => ({ type: Ae.mobile, vendor: "Microsoft" }) }, { test(e) {
  const t = Number(String(e.getOSVersion()).split(".")[0]);
  return e.getOSName(!0) === "android" && t >= 3;
}, describe: () => ({ type: Ae.tablet }) }, { test: (e) => e.getOSName(!0) === "android", describe: () => ({ type: Ae.mobile }) }, { test: (e) => e.getOSName(!0) === "macos", describe: () => ({ type: Ae.desktop, vendor: "Apple" }) }, { test: (e) => e.getOSName(!0) === "windows", describe: () => ({ type: Ae.desktop }) }, { test: (e) => e.getOSName(!0) === "linux", describe: () => ({ type: Ae.desktop }) }, { test: (e) => e.getOSName(!0) === "playstation 4", describe: () => ({ type: Ae.tv }) }, { test: (e) => e.getOSName(!0) === "roku", describe: () => ({ type: Ae.tv }) }], oM = [{ test: (e) => e.getBrowserName(!0) === "microsoft edge", describe(e) {
  if (/\sedg\//i.test(e)) return { name: dn.Blink };
  const t = B.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
  return { name: dn.EdgeHTML, version: t };
} }, { test: [/trident/i], describe(e) {
  const t = { name: dn.Trident }, n = B.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: (e) => e.test(/presto/i), describe(e) {
  const t = { name: dn.Presto }, n = B.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test(e) {
  const t = e.test(/gecko/i), n = e.test(/like gecko/i);
  return t && !n;
}, describe(e) {
  const t = { name: dn.Gecko }, n = B.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }, { test: [/(apple)?webkit\/537\.36/i], describe: () => ({ name: dn.Blink }) }, { test: [/(apple)?webkit/i], describe(e) {
  const t = { name: dn.WebKit }, n = B.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
  return n && (t.version = n), t;
} }];
class Ef {
  constructor(t, n = !1) {
    if (t == null || t === "") throw new Error("UserAgent parameter can't be empty");
    this._ua = t, this.parsedResult = {}, n !== !0 && this.parse();
  }
  getUA() {
    return this._ua;
  }
  test(t) {
    return t.test(this._ua);
  }
  parseBrowser() {
    this.parsedResult.browser = {};
    const t = B.find(rM, (n) => {
      if (typeof n.test == "function") return n.test(this);
      if (n.test instanceof Array) return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser;
  }
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  getBrowserName(t) {
    return t ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  parseOS() {
    this.parsedResult.os = {};
    const t = B.find(iM, (n) => {
      if (typeof n.test == "function") return n.test(this);
      if (n.test instanceof Array) return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os;
  }
  getOSName(t) {
    const { name: n } = this.getOS();
    return t ? String(n).toLowerCase() || "" : n || "";
  }
  getOSVersion() {
    return this.getOS().version;
  }
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  getPlatformType(t = !1) {
    const { type: n } = this.getPlatform();
    return t ? String(n).toLowerCase() || "" : n || "";
  }
  parsePlatform() {
    this.parsedResult.platform = {};
    const t = B.find(sM, (n) => {
      if (typeof n.test == "function") return n.test(this);
      if (n.test instanceof Array) return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform;
  }
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  getEngineName(t) {
    return t ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  parseEngine() {
    this.parsedResult.engine = {};
    const t = B.find(oM, (n) => {
      if (typeof n.test == "function") return n.test(this);
      if (n.test instanceof Array) return n.test.some((r) => this.test(r));
      throw new Error("Browser's test function is not valid");
    });
    return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine;
  }
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  getResult() {
    return B.assign({}, this.parsedResult);
  }
  satisfies(t) {
    const n = {};
    let r = 0;
    const i = {};
    let s = 0;
    if (Object.keys(t).forEach((o) => {
      const a = t[o];
      typeof a == "string" ? (i[o] = a, s += 1) : typeof a == "object" && (n[o] = a, r += 1);
    }), r > 0) {
      const o = Object.keys(n), a = B.find(o, (l) => this.isOS(l));
      if (a) {
        const l = this.satisfies(n[a]);
        if (l !== void 0) return l;
      }
      const c = B.find(o, (l) => this.isPlatform(l));
      if (c) {
        const l = this.satisfies(n[c]);
        if (l !== void 0) return l;
      }
    }
    if (s > 0) {
      const o = Object.keys(i), a = B.find(o, (c) => this.isBrowser(c, !0));
      if (a !== void 0) return this.compareVersion(i[a]);
    }
  }
  isBrowser(t, n = !1) {
    const r = this.getBrowserName().toLowerCase();
    let i = t.toLowerCase();
    const s = B.getBrowserTypeByAlias(i);
    return n && s && (i = s.toLowerCase()), i === r;
  }
  compareVersion(t) {
    let n = [0], r = t, i = !1;
    const s = this.getBrowserVersion();
    if (typeof s == "string") return t[0] === ">" || t[0] === "<" ? (r = t.substr(1), t[1] === "=" ? (i = !0, r = t.substr(2)) : n = [], t[0] === ">" ? n.push(1) : n.push(-1)) : t[0] === "=" ? r = t.substr(1) : t[0] === "~" && (i = !0, r = t.substr(1)), n.indexOf(B.compareVersions(s, r, i)) > -1;
  }
  isOS(t) {
    return this.getOSName(!0) === String(t).toLowerCase();
  }
  isPlatform(t) {
    return this.getPlatformType(!0) === String(t).toLowerCase();
  }
  isEngine(t) {
    return this.getEngineName(!0) === String(t).toLowerCase();
  }
  is(t, n = !1) {
    return this.isBrowser(t, n) || this.isOS(t) || this.isPlatform(t);
  }
  some(t = []) {
    return t.some((n) => this.is(n));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class aM {
  static getParser(t, n = !1) {
    if (typeof t != "string") throw new Error("UserAgent should be a string");
    return new Ef(t, n);
  }
  static parse(t) {
    return new Ef(t).getResult();
  }
  static get BROWSER_MAP() {
    return Wv;
  }
  static get ENGINE_MAP() {
    return dn;
  }
  static get OS_MAP() {
    return Xe;
  }
  static get PLATFORMS_MAP() {
    return Ae;
  }
}
function yo() {
  return Date.now() + Math.random().toString();
}
function ni() {
  throw new Error("Method must be implemented in subclass");
}
function qv(e, t) {
  return t != null && t.proxyUrl ? t.proxyUrl + (t.proxyUrl.slice(-1) === "/" ? "" : "/") + e.substring(8) : e;
}
function zs(e) {
  return e != null && e.callObjectBundleUrlOverride ? e.callObjectBundleUrlOverride : qv("https://c.daily.co/call-machine/versioned/".concat("0.77.0", "/static/call-machine-object-bundle.js"), e);
}
function Ws(e) {
  try {
    new URL(e);
  } catch {
    return !1;
  }
  return !0;
}
const Se = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, zn = "8.55.0", pe = globalThis;
function qs(e, t, n) {
  const r = pe, i = r.__SENTRY__ = r.__SENTRY__ || {}, s = i[zn] = i[zn] || {};
  return s[e] || (s[e] = t());
}
const er = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, mc = ["debug", "info", "warn", "error", "log", "assert", "trace"], Hs = {};
function Ii(e) {
  if (!("console" in pe)) return e();
  const t = pe.console, n = {}, r = Object.keys(Hs);
  r.forEach((i) => {
    const s = Hs[i];
    n[i] = t[i], t[i] = s;
  });
  try {
    return e();
  } finally {
    r.forEach((i) => {
      t[i] = n[i];
    });
  }
}
const se = qs("logger", function() {
  let e = !1;
  const t = { enable: () => {
    e = !0;
  }, disable: () => {
    e = !1;
  }, isEnabled: () => e };
  return er ? mc.forEach((n) => {
    t[n] = (...r) => {
      e && Ii(() => {
        pe.console[n](`Sentry Logger [${n}]:`, ...r);
      });
    };
  }) : mc.forEach((n) => {
    t[n] = () => {
    };
  }), t;
}), $n = "?", Tf = /\(error: (.*)\)/, Mf = /captureMessage|captureException/;
function ns(e) {
  return e[e.length - 1] || {};
}
const Pf = "<anonymous>";
function wn(e) {
  try {
    return e && typeof e == "function" && e.name || Pf;
  } catch {
    return Pf;
  }
}
function Af(e) {
  const t = e.exception;
  if (t) {
    const n = [];
    try {
      return t.values.forEach((r) => {
        r.stacktrace.frames && n.push(...r.stacktrace.frames);
      }), n;
    } catch {
      return;
    }
  }
}
const Es = {}, Of = {};
function Wn(e, t) {
  Es[e] = Es[e] || [], Es[e].push(t);
}
function qn(e, t) {
  if (!Of[e]) {
    Of[e] = !0;
    try {
      t();
    } catch (n) {
      er && se.error(`Error while instrumenting ${e}`, n);
    }
  }
}
function Mt(e, t) {
  const n = e && Es[e];
  if (n) for (const r of n) try {
    r(t);
  } catch (i) {
    er && se.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${wn(r)}
Error:`, i);
  }
}
let ra = null;
function cM() {
  ra = pe.onerror, pe.onerror = function(e, t, n, r, i) {
    return Mt("error", { column: r, error: i, line: n, msg: e, url: t }), !!ra && ra.apply(this, arguments);
  }, pe.onerror.__SENTRY_INSTRUMENTED__ = !0;
}
let ia = null;
function lM() {
  ia = pe.onunhandledrejection, pe.onunhandledrejection = function(e) {
    return Mt("unhandledrejection", e), !ia || ia.apply(this, arguments);
  }, pe.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
}
function bo() {
  return ql(pe), pe;
}
function ql(e) {
  const t = e.__SENTRY__ = e.__SENTRY__ || {};
  return t.version = t.version || zn, t[zn] = t[zn] || {};
}
const Hv = Object.prototype.toString;
function Hl(e) {
  switch (Hv.call(e)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
    case "[object WebAssembly.Exception]":
      return !0;
    default:
      return Jn(e, Error);
  }
}
function qr(e, t) {
  return Hv.call(e) === `[object ${t}]`;
}
function Gv(e) {
  return qr(e, "ErrorEvent");
}
function Rf(e) {
  return qr(e, "DOMError");
}
function Gt(e) {
  return qr(e, "String");
}
function Gl(e) {
  return typeof e == "object" && e !== null && "__sentry_template_string__" in e && "__sentry_template_values__" in e;
}
function gc(e) {
  return e === null || Gl(e) || typeof e != "object" && typeof e != "function";
}
function Mr(e) {
  return qr(e, "Object");
}
function wo(e) {
  return typeof Event < "u" && Jn(e, Event);
}
function xo(e) {
  return !!(e && e.then && typeof e.then == "function");
}
function Jn(e, t) {
  try {
    return e instanceof t;
  } catch {
    return !1;
  }
}
function Jv(e) {
  return !(typeof e != "object" || e === null || !e.__isVue && !e._isVue);
}
const Jl = pe;
function Kv(e, t = {}) {
  if (!e) return "<unknown>";
  try {
    let n = e;
    const r = 5, i = [];
    let s = 0, o = 0;
    const a = " > ", c = a.length;
    let l;
    const u = Array.isArray(t) ? t : t.keyAttrs, f = !Array.isArray(t) && t.maxStringLength || 80;
    for (; n && s++ < r && (l = uM(n, u), !(l === "html" || s > 1 && o + i.length * c + l.length >= f)); ) i.push(l), o += l.length, n = n.parentNode;
    return i.reverse().join(a);
  } catch {
    return "<unknown>";
  }
}
function uM(e, t) {
  const n = e, r = [];
  if (!n || !n.tagName) return "";
  if (Jl.HTMLElement && n instanceof HTMLElement && n.dataset) {
    if (n.dataset.sentryComponent) return n.dataset.sentryComponent;
    if (n.dataset.sentryElement) return n.dataset.sentryElement;
  }
  r.push(n.tagName.toLowerCase());
  const i = t && t.length ? t.filter((o) => n.getAttribute(o)).map((o) => [o, n.getAttribute(o)]) : null;
  if (i && i.length) i.forEach((o) => {
    r.push(`[${o[0]}="${o[1]}"]`);
  });
  else {
    n.id && r.push(`#${n.id}`);
    const o = n.className;
    if (o && Gt(o)) {
      const a = o.split(/\s+/);
      for (const c of a) r.push(`.${c}`);
    }
  }
  const s = ["aria-label", "type", "name", "title", "alt"];
  for (const o of s) {
    const a = n.getAttribute(o);
    a && r.push(`[${o}="${a}"]`);
  }
  return r.join("");
}
function wr(e, t = 0) {
  return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function Lf(e, t) {
  if (!Array.isArray(e)) return "";
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    try {
      Jv(i) ? n.push("[VueViewModel]") : n.push(String(i));
    } catch {
      n.push("[value cannot be serialized]");
    }
  }
  return n.join(t);
}
function dM(e, t, n = !1) {
  return !!Gt(e) && (qr(t, "RegExp") ? t.test(e) : !!Gt(t) && (n ? e === t : e.includes(t)));
}
function rs(e, t = [], n = !1) {
  return t.some((r) => dM(e, r, n));
}
function st(e, t, n) {
  if (!(t in e)) return;
  const r = e[t], i = n(r);
  typeof i == "function" && Yv(i, r);
  try {
    e[t] = i;
  } catch {
    er && se.log(`Failed to replace method "${t}" in object`, e);
  }
}
function Kn(e, t, n) {
  try {
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
  } catch {
    er && se.log(`Failed to add non-enumerable property "${t}" to object`, e);
  }
}
function Yv(e, t) {
  try {
    const n = t.prototype || {};
    e.prototype = t.prototype = n, Kn(e, "__sentry_original__", t);
  } catch {
  }
}
function Kl(e) {
  return e.__sentry_original__;
}
function Xv(e) {
  if (Hl(e)) return { message: e.message, name: e.name, stack: e.stack, ...Df(e) };
  if (wo(e)) {
    const t = { type: e.type, target: jf(e.target), currentTarget: jf(e.currentTarget), ...Df(e) };
    return typeof CustomEvent < "u" && Jn(e, CustomEvent) && (t.detail = e.detail), t;
  }
  return e;
}
function jf(e) {
  try {
    return t = e, typeof Element < "u" && Jn(t, Element) ? Kv(e) : Object.prototype.toString.call(e);
  } catch {
    return "<unknown>";
  }
  var t;
}
function Df(e) {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  }
  return {};
}
function mt(e) {
  return vc(e, /* @__PURE__ */ new Map());
}
function vc(e, t) {
  if (function(n) {
    if (!Mr(n)) return !1;
    try {
      const r = Object.getPrototypeOf(n).constructor.name;
      return !r || r === "Object";
    } catch {
      return !0;
    }
  }(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const r = {};
    t.set(e, r);
    for (const i of Object.getOwnPropertyNames(e)) e[i] !== void 0 && (r[i] = vc(e[i], t));
    return r;
  }
  if (Array.isArray(e)) {
    const n = t.get(e);
    if (n !== void 0) return n;
    const r = [];
    return t.set(e, r), e.forEach((i) => {
      r.push(vc(i, t));
    }), r;
  }
  return e;
}
function Ni() {
  return Date.now() / 1e3;
}
const Kt = function() {
  const { performance: e } = pe;
  if (!e || !e.now) return Ni;
  const t = Date.now() - e.now(), n = e.timeOrigin == null ? t : e.timeOrigin;
  return () => (n + e.now()) / 1e3;
}();
function vt() {
  const e = pe, t = e.crypto || e.msCrypto;
  let n = () => 16 * Math.random();
  try {
    if (t && t.randomUUID) return t.randomUUID().replace(/-/g, "");
    t && t.getRandomValues && (n = () => {
      const r = new Uint8Array(1);
      return t.getRandomValues(r), r[0];
    });
  } catch {
  }
  return ("10000000100040008000" + 1e11).replace(/[018]/g, (r) => (r ^ (15 & n()) >> r / 4).toString(16));
}
function Qv(e) {
  return e.exception && e.exception.values ? e.exception.values[0] : void 0;
}
function hn(e) {
  const { message: t, event_id: n } = e;
  if (t) return t;
  const r = Qv(e);
  return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>";
}
function yc(e, t, n) {
  const r = e.exception = e.exception || {}, i = r.values = r.values || [], s = i[0] = i[0] || {};
  s.value || (s.value = t || ""), s.type || (s.type = "Error");
}
function Pr(e, t) {
  const n = Qv(e);
  if (!n) return;
  const r = n.mechanism;
  if (n.mechanism = { type: "generic", handled: !0, ...r, ...t }, t && "data" in t) {
    const i = { ...r && r.data, ...t.data };
    n.mechanism.data = i;
  }
}
function If(e) {
  if (function(t) {
    try {
      return t.__sentry_captured__;
    } catch {
    }
  }(e)) return !0;
  try {
    Kn(e, "__sentry_captured__", !0);
  } catch {
  }
  return !1;
}
var qt;
function Yn(e) {
  return new pt((t) => {
    t(e);
  });
}
function Gs(e) {
  return new pt((t, n) => {
    n(e);
  });
}
(() => {
  const { performance: e } = pe;
  !e || !e.now || (e.now(), e.timing && e.timing.navigationStart);
})(), function(e) {
  e[e.PENDING = 0] = "PENDING", e[e.RESOLVED = 1] = "RESOLVED", e[e.REJECTED = 2] = "REJECTED";
}(qt || (qt = {}));
class pt {
  constructor(t) {
    pt.prototype.__init.call(this), pt.prototype.__init2.call(this), pt.prototype.__init3.call(this), pt.prototype.__init4.call(this), this._state = qt.PENDING, this._handlers = [];
    try {
      t(this._resolve, this._reject);
    } catch (n) {
      this._reject(n);
    }
  }
  then(t, n) {
    return new pt((r, i) => {
      this._handlers.push([!1, (s) => {
        if (t) try {
          r(t(s));
        } catch (o) {
          i(o);
        }
        else r(s);
      }, (s) => {
        if (n) try {
          r(n(s));
        } catch (o) {
          i(o);
        }
        else i(s);
      }]), this._executeHandlers();
    });
  }
  catch(t) {
    return this.then((n) => n, t);
  }
  finally(t) {
    return new pt((n, r) => {
      let i, s;
      return this.then((o) => {
        s = !1, i = o, t && t();
      }, (o) => {
        s = !0, i = o, t && t();
      }).then(() => {
        s ? r(i) : n(i);
      });
    });
  }
  __init() {
    this._resolve = (t) => {
      this._setResult(qt.RESOLVED, t);
    };
  }
  __init2() {
    this._reject = (t) => {
      this._setResult(qt.REJECTED, t);
    };
  }
  __init3() {
    this._setResult = (t, n) => {
      this._state === qt.PENDING && (xo(n) ? n.then(this._resolve, this._reject) : (this._state = t, this._value = n, this._executeHandlers()));
    };
  }
  __init4() {
    this._executeHandlers = () => {
      if (this._state === qt.PENDING) return;
      const t = this._handlers.slice();
      this._handlers = [], t.forEach((n) => {
        n[0] || (this._state === qt.RESOLVED && n[1](this._value), this._state === qt.REJECTED && n[2](this._value), n[0] = !0);
      });
    };
  }
}
function fM(e) {
  const t = Kt(), n = { sid: vt(), init: !0, timestamp: t, started: t, duration: 0, status: "ok", errors: 0, ignoreDuration: !1, toJSON: () => function(r) {
    return mt({ sid: `${r.sid}`, init: r.init, started: new Date(1e3 * r.started).toISOString(), timestamp: new Date(1e3 * r.timestamp).toISOString(), status: r.status, errors: r.errors, did: typeof r.did == "number" || typeof r.did == "string" ? `${r.did}` : void 0, duration: r.duration, abnormal_mechanism: r.abnormal_mechanism, attrs: { release: r.release, environment: r.environment, ip_address: r.ipAddress, user_agent: r.userAgent } });
  }(n) };
  return e && Ar(n, e), n;
}
function Ar(e, t = {}) {
  if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || Kt(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : vt()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
  else if (typeof t.duration == "number") e.duration = t.duration;
  else {
    const n = e.timestamp - e.started;
    e.duration = n >= 0 ? n : 0;
  }
  t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function Nf() {
  return vt();
}
function bc() {
  return vt().substring(16);
}
function So(e, t, n = 2) {
  if (!t || typeof t != "object" || n <= 0) return t;
  if (e && t && Object.keys(t).length === 0) return e;
  const r = { ...e };
  for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = So(r[i], t[i], n - 1));
  return r;
}
const wc = "_sentrySpan";
function Ff(e, t) {
  t ? Kn(e, wc, t) : delete e[wc];
}
function Bf(e) {
  return e[wc];
}
class Yl {
  constructor() {
    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = { traceId: Nf(), spanId: bc() };
  }
  clone() {
    const t = new Yl();
    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags }, t._extra = { ...this._extra }, t._contexts = { ...this._contexts }, this._contexts.flags && (t._contexts.flags = { values: [...this._contexts.flags.values] }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata }, t._propagationContext = { ...this._propagationContext }, t._client = this._client, t._lastEventId = this._lastEventId, Ff(t, Bf(this)), t;
  }
  setClient(t) {
    this._client = t;
  }
  setLastEventId(t) {
    this._lastEventId = t;
  }
  getClient() {
    return this._client;
  }
  lastEventId() {
    return this._lastEventId;
  }
  addScopeListener(t) {
    this._scopeListeners.push(t);
  }
  addEventProcessor(t) {
    return this._eventProcessors.push(t), this;
  }
  setUser(t) {
    return this._user = t || { email: void 0, id: void 0, ip_address: void 0, username: void 0 }, this._session && Ar(this._session, { user: t }), this._notifyScopeListeners(), this;
  }
  getUser() {
    return this._user;
  }
  getRequestSession() {
    return this._requestSession;
  }
  setRequestSession(t) {
    return this._requestSession = t, this;
  }
  setTags(t) {
    return this._tags = { ...this._tags, ...t }, this._notifyScopeListeners(), this;
  }
  setTag(t, n) {
    return this._tags = { ...this._tags, [t]: n }, this._notifyScopeListeners(), this;
  }
  setExtras(t) {
    return this._extra = { ...this._extra, ...t }, this._notifyScopeListeners(), this;
  }
  setExtra(t, n) {
    return this._extra = { ...this._extra, [t]: n }, this._notifyScopeListeners(), this;
  }
  setFingerprint(t) {
    return this._fingerprint = t, this._notifyScopeListeners(), this;
  }
  setLevel(t) {
    return this._level = t, this._notifyScopeListeners(), this;
  }
  setTransactionName(t) {
    return this._transactionName = t, this._notifyScopeListeners(), this;
  }
  setContext(t, n) {
    return n === null ? delete this._contexts[t] : this._contexts[t] = n, this._notifyScopeListeners(), this;
  }
  setSession(t) {
    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
  }
  getSession() {
    return this._session;
  }
  update(t) {
    if (!t) return this;
    const n = typeof t == "function" ? t(this) : t, [r, i] = n instanceof xn ? [n.getScopeData(), n.getRequestSession()] : Mr(n) ? [t, t.requestSession] : [], { tags: s, extra: o, user: a, contexts: c, level: l, fingerprint: u = [], propagationContext: f } = r || {};
    return this._tags = { ...this._tags, ...s }, this._extra = { ...this._extra, ...o }, this._contexts = { ...this._contexts, ...c }, a && Object.keys(a).length && (this._user = a), l && (this._level = l), u.length && (this._fingerprint = u), f && (this._propagationContext = f), i && (this._requestSession = i), this;
  }
  clear() {
    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._session = void 0, Ff(this, void 0), this._attachments = [], this.setPropagationContext({ traceId: Nf() }), this._notifyScopeListeners(), this;
  }
  addBreadcrumb(t, n) {
    const r = typeof n == "number" ? n : 100;
    if (r <= 0) return this;
    const i = { timestamp: Ni(), ...t };
    return this._breadcrumbs.push(i), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client && this._client.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
  }
  getLastBreadcrumb() {
    return this._breadcrumbs[this._breadcrumbs.length - 1];
  }
  clearBreadcrumbs() {
    return this._breadcrumbs = [], this._notifyScopeListeners(), this;
  }
  addAttachment(t) {
    return this._attachments.push(t), this;
  }
  clearAttachments() {
    return this._attachments = [], this;
  }
  getScopeData() {
    return { breadcrumbs: this._breadcrumbs, attachments: this._attachments, contexts: this._contexts, tags: this._tags, extra: this._extra, user: this._user, level: this._level, fingerprint: this._fingerprint || [], eventProcessors: this._eventProcessors, propagationContext: this._propagationContext, sdkProcessingMetadata: this._sdkProcessingMetadata, transactionName: this._transactionName, span: Bf(this) };
  }
  setSDKProcessingMetadata(t) {
    return this._sdkProcessingMetadata = So(this._sdkProcessingMetadata, t, 2), this;
  }
  setPropagationContext(t) {
    return this._propagationContext = { spanId: bc(), ...t }, this;
  }
  getPropagationContext() {
    return this._propagationContext;
  }
  captureException(t, n) {
    const r = n && n.event_id ? n.event_id : vt();
    if (!this._client) return se.warn("No client configured on scope - will not capture exception!"), r;
    const i = new Error("Sentry syntheticException");
    return this._client.captureException(t, { originalException: t, syntheticException: i, ...n, event_id: r }, this), r;
  }
  captureMessage(t, n, r) {
    const i = r && r.event_id ? r.event_id : vt();
    if (!this._client) return se.warn("No client configured on scope - will not capture message!"), i;
    const s = new Error(t);
    return this._client.captureMessage(t, n, { originalException: t, syntheticException: s, ...r, event_id: i }, this), i;
  }
  captureEvent(t, n) {
    const r = n && n.event_id ? n.event_id : vt();
    return this._client ? (this._client.captureEvent(t, { ...n, event_id: r }, this), r) : (se.warn("No client configured on scope - will not capture event!"), r);
  }
  _notifyScopeListeners() {
    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t) => {
      t(this);
    }), this._notifyingListeners = !1);
  }
}
const xn = Yl;
class hM {
  constructor(t, n) {
    let r, i;
    r = t || new xn(), i = n || new xn(), this._stack = [{ scope: r }], this._isolationScope = i;
  }
  withScope(t) {
    const n = this._pushScope();
    let r;
    try {
      r = t(n);
    } catch (i) {
      throw this._popScope(), i;
    }
    return xo(r) ? r.then((i) => (this._popScope(), i), (i) => {
      throw this._popScope(), i;
    }) : (this._popScope(), r);
  }
  getClient() {
    return this.getStackTop().client;
  }
  getScope() {
    return this.getStackTop().scope;
  }
  getIsolationScope() {
    return this._isolationScope;
  }
  getStackTop() {
    return this._stack[this._stack.length - 1];
  }
  _pushScope() {
    const t = this.getScope().clone();
    return this._stack.push({ client: this.getClient(), scope: t }), t;
  }
  _popScope() {
    return !(this._stack.length <= 1) && !!this._stack.pop();
  }
}
function Or() {
  const e = ql(bo());
  return e.stack = e.stack || new hM(qs("defaultCurrentScope", () => new xn()), qs("defaultIsolationScope", () => new xn()));
}
function pM(e) {
  return Or().withScope(e);
}
function mM(e, t) {
  const n = Or();
  return n.withScope(() => (n.getStackTop().scope = e, t(e)));
}
function $f(e) {
  return Or().withScope(() => e(Or().getIsolationScope()));
}
function Xl(e) {
  const t = ql(e);
  return t.acs ? t.acs : { withIsolationScope: $f, withScope: pM, withSetScope: mM, withSetIsolationScope: (n, r) => $f(r), getCurrentScope: () => Or().getScope(), getIsolationScope: () => Or().getIsolationScope() };
}
function tr() {
  return Xl(bo()).getCurrentScope();
}
function Fi() {
  return Xl(bo()).getIsolationScope();
}
function He() {
  return tr().getClient();
}
function gM(e) {
  const t = e.getPropagationContext(), { traceId: n, spanId: r, parentSpanId: i } = t;
  return mt({ trace_id: n, span_id: r, parent_span_id: i });
}
function vM(e) {
  const t = e._sentryMetrics;
  if (!t) return;
  const n = {};
  for (const [, [r, i]] of t)
    (n[r] || (n[r] = [])).push(mt(i));
  return n;
}
const yM = /^sentry-/;
function bM(e) {
  const t = function(r) {
    if (!(!r || !Gt(r) && !Array.isArray(r)))
      return Array.isArray(r) ? r.reduce((i, s) => {
        const o = Vf(s);
        return Object.entries(o).forEach(([a, c]) => {
          i[a] = c;
        }), i;
      }, {}) : Vf(r);
  }(e);
  if (!t) return;
  const n = Object.entries(t).reduce((r, [i, s]) => (i.match(yM) && (r[i.slice(7)] = s), r), {});
  return Object.keys(n).length > 0 ? n : void 0;
}
function Vf(e) {
  return e.split(",").map((t) => t.split("=").map((n) => decodeURIComponent(n.trim()))).reduce((t, [n, r]) => (n && r && (t[n] = r), t), {});
}
let Uf = !1;
function wM(e) {
  const { spanId: t, traceId: n, isRemote: r } = e.spanContext();
  return mt({ parent_span_id: r ? t : Ql(e).parent_span_id, span_id: r ? bc() : t, trace_id: n });
}
function zf(e) {
  return typeof e == "number" ? Wf(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? Wf(e.getTime()) : Kt();
}
function Wf(e) {
  return e > 9999999999 ? e / 1e3 : e;
}
function Ql(e) {
  if (function(t) {
    return typeof t.getSpanJSON == "function";
  }(e)) return e.getSpanJSON();
  try {
    const { spanId: t, traceId: n } = e.spanContext();
    if (function(r) {
      const i = r;
      return !!(i.attributes && i.startTime && i.name && i.endTime && i.status);
    }(e)) {
      const { attributes: r, startTime: i, name: s, endTime: o, parentSpanId: a, status: c } = e;
      return mt({ span_id: t, trace_id: n, data: r, description: s, parent_span_id: a, start_timestamp: zf(i), timestamp: zf(o) || void 0, status: xM(c), op: r["sentry.op"], origin: r["sentry.origin"], _metrics_summary: vM(e) });
    }
    return { span_id: t, trace_id: n };
  } catch {
    return {};
  }
}
function xM(e) {
  if (e && e.code !== 0) return e.code === 1 ? "ok" : e.message || "unknown_error";
}
function Zv(e) {
  return e._sentryRootSpan || e;
}
function SM() {
  Uf || (Ii(() => {
    console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
  }), Uf = !0);
}
const Zl = "production";
function ey(e, t) {
  const n = t.getOptions(), { publicKey: r } = t.getDsn() || {}, i = mt({ environment: n.environment || Zl, release: n.release, public_key: r, trace_id: e });
  return t.emit("createDsc", i), i;
}
function _M(e) {
  const t = He();
  if (!t) return {};
  const n = Zv(e), r = n._frozenDsc;
  if (r) return r;
  const i = n.spanContext().traceState, s = i && i.get("sentry.dsc"), o = s && bM(s);
  if (o) return o;
  const a = ey(e.spanContext().traceId, t), c = Ql(n), l = c.data || {}, u = l["sentry.sample_rate"];
  u != null && (a.sample_rate = `${u}`);
  const f = l["sentry.source"], h = c.description;
  return f !== "url" && h && (a.transaction = h), function(p) {
    if (typeof __SENTRY_TRACING__ == "boolean" && !__SENTRY_TRACING__) return !1;
    const g = He(), y = g && g.getOptions();
    return !!y && (y.enableTracing || "tracesSampleRate" in y || "tracesSampler" in y);
  }() && (a.sampled = String(function(p) {
    const { traceFlags: g } = p.spanContext();
    return g === 1;
  }(n))), t.emit("createDsc", a, n), a;
}
const kM = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;
function Js(e, t = !1) {
  const { host: n, path: r, pass: i, port: s, projectId: o, protocol: a, publicKey: c } = e;
  return `${a}://${c}${t && i ? `:${i}` : ""}@${n}${s ? `:${s}` : ""}/${r && `${r}/`}${o}`;
}
function qf(e) {
  return { protocol: e.protocol, publicKey: e.publicKey || "", pass: e.pass || "", host: e.host, port: e.port || "", path: e.path || "", projectId: e.projectId };
}
function CM(e) {
  const t = typeof e == "string" ? function(n) {
    const r = kM.exec(n);
    if (!r) return void Ii(() => {
      console.error(`Invalid Sentry Dsn: ${n}`);
    });
    const [i, s, o = "", a = "", c = "", l = ""] = r.slice(1);
    let u = "", f = l;
    const h = f.split("/");
    if (h.length > 1 && (u = h.slice(0, -1).join("/"), f = h.pop()), f) {
      const p = f.match(/^\d+/);
      p && (f = p[0]);
    }
    return qf({ host: a, pass: o, path: u, projectId: f, port: c, protocol: i, publicKey: s });
  }(e) : qf(e);
  if (t && function(n) {
    if (!er) return !0;
    const { port: r, projectId: i, protocol: s } = n;
    return !(["protocol", "publicKey", "host", "projectId"].find((o) => !n[o] && (se.error(`Invalid Sentry Dsn: ${o} missing`), !0)) || (i.match(/^\d+$/) ? /* @__PURE__ */ function(o) {
      return o === "http" || o === "https";
    }(s) ? r && isNaN(parseInt(r, 10)) && (se.error(`Invalid Sentry Dsn: Invalid port ${r}`), 1) : (se.error(`Invalid Sentry Dsn: Invalid protocol ${s}`), 1) : (se.error(`Invalid Sentry Dsn: Invalid projectId ${i}`), 1)));
  }(t)) return t;
}
function Ht(e, t = 100, n = 1 / 0) {
  try {
    return xc("", e, t, n);
  } catch (r) {
    return { ERROR: `**non-serializable** (${r})` };
  }
}
function ty(e, t = 3, n = 102400) {
  const r = Ht(e, t);
  return i = r, function(s) {
    return ~-encodeURI(s).split(/%..|./).length;
  }(JSON.stringify(i)) > n ? ty(e, t - 1, n) : r;
  var i;
}
function xc(e, t, n = 1 / 0, r = 1 / 0, i = /* @__PURE__ */ function() {
  const s = typeof WeakSet == "function", o = s ? /* @__PURE__ */ new WeakSet() : [];
  return [function(a) {
    if (s) return !!o.has(a) || (o.add(a), !1);
    for (let c = 0; c < o.length; c++) if (o[c] === a) return !0;
    return o.push(a), !1;
  }, function(a) {
    if (s) o.delete(a);
    else for (let c = 0; c < o.length; c++) if (o[c] === a) {
      o.splice(c, 1);
      break;
    }
  }];
}()) {
  const [s, o] = i;
  if (t == null || ["boolean", "string"].includes(typeof t) || typeof t == "number" && Number.isFinite(t)) return t;
  const a = function(p, g) {
    try {
      if (p === "domain" && g && typeof g == "object" && g._events) return "[Domain]";
      if (p === "domainEmitter") return "[DomainEmitter]";
      if (typeof global < "u" && g === global) return "[Global]";
      if (typeof window < "u" && g === window) return "[Window]";
      if (typeof document < "u" && g === document) return "[Document]";
      if (Jv(g)) return "[VueViewModel]";
      if (Mr(y = g) && "nativeEvent" in y && "preventDefault" in y && "stopPropagation" in y) return "[SyntheticEvent]";
      if (typeof g == "number" && !Number.isFinite(g)) return `[${g}]`;
      if (typeof g == "function") return `[Function: ${wn(g)}]`;
      if (typeof g == "symbol") return `[${String(g)}]`;
      if (typeof g == "bigint") return `[BigInt: ${String(g)}]`;
      const b = function(w) {
        const M = Object.getPrototypeOf(w);
        return M ? M.constructor.name : "null prototype";
      }(g);
      return /^HTML(\w*)Element$/.test(b) ? `[HTMLElement: ${b}]` : `[object ${b}]`;
    } catch (b) {
      return `**non-serializable** (${b})`;
    }
    var y;
  }(e, t);
  if (!a.startsWith("[object ")) return a;
  if (t.__sentry_skip_normalization__) return t;
  const c = typeof t.__sentry_override_normalization_depth__ == "number" ? t.__sentry_override_normalization_depth__ : n;
  if (c === 0) return a.replace("object ", "");
  if (s(t)) return "[Circular ~]";
  const l = t;
  if (l && typeof l.toJSON == "function") try {
    return xc("", l.toJSON(), c - 1, r, i);
  } catch {
  }
  const u = Array.isArray(t) ? [] : {};
  let f = 0;
  const h = Xv(t);
  for (const p in h) {
    if (!Object.prototype.hasOwnProperty.call(h, p)) continue;
    if (f >= r) {
      u[p] = "[MaxProperties ~]";
      break;
    }
    const g = h[p];
    u[p] = xc(p, g, c - 1, r, i), f++;
  }
  return o(t), u;
}
function Mi(e, t = []) {
  return [e, t];
}
function EM(e, t) {
  const [n, r] = e;
  return [n, [...r, t]];
}
function Hf(e, t) {
  const n = e[1];
  for (const r of n)
    if (t(r, r[0].type)) return !0;
  return !1;
}
function Sc(e) {
  return pe.__SENTRY__ && pe.__SENTRY__.encodePolyfill ? pe.__SENTRY__.encodePolyfill(e) : new TextEncoder().encode(e);
}
function TM(e) {
  const [t, n] = e;
  let r = JSON.stringify(t);
  function i(s) {
    typeof r == "string" ? r = typeof s == "string" ? r + s : [Sc(r), s] : r.push(typeof s == "string" ? Sc(s) : s);
  }
  for (const s of n) {
    const [o, a] = s;
    if (i(`
${JSON.stringify(o)}
`), typeof a == "string" || a instanceof Uint8Array) i(a);
    else {
      let c;
      try {
        c = JSON.stringify(a);
      } catch {
        c = JSON.stringify(Ht(a));
      }
      i(c);
    }
  }
  return typeof r == "string" ? r : function(s) {
    const o = s.reduce((l, u) => l + u.length, 0), a = new Uint8Array(o);
    let c = 0;
    for (const l of s) a.set(l, c), c += l.length;
    return a;
  }(r);
}
function MM(e) {
  const t = typeof e.data == "string" ? Sc(e.data) : e.data;
  return [mt({ type: "attachment", length: t.length, filename: e.filename, content_type: e.contentType, attachment_type: e.attachmentType }), t];
}
const PM = { session: "session", sessions: "session", attachment: "attachment", transaction: "transaction", event: "error", client_report: "internal", user_report: "default", profile: "profile", profile_chunk: "profile", replay_event: "replay", replay_recording: "replay", check_in: "monitor", feedback: "feedback", span: "span", statsd: "metric_bucket", raw_security: "security" };
function Gf(e) {
  return PM[e];
}
function ny(e) {
  if (!e || !e.sdk) return;
  const { name: t, version: n } = e.sdk;
  return { name: t, version: n };
}
function AM(e, t, n, r) {
  const i = ny(n), s = e.type && e.type !== "replay_event" ? e.type : "event";
  (function(a, c) {
    c && (a.sdk = a.sdk || {}, a.sdk.name = a.sdk.name || c.name, a.sdk.version = a.sdk.version || c.version, a.sdk.integrations = [...a.sdk.integrations || [], ...c.integrations || []], a.sdk.packages = [...a.sdk.packages || [], ...c.packages || []]);
  })(e, n && n.sdk);
  const o = function(a, c, l, u) {
    const f = a.sdkProcessingMetadata && a.sdkProcessingMetadata.dynamicSamplingContext;
    return { event_id: a.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...c && { sdk: c }, ...!!l && u && { dsn: Js(u) }, ...f && { trace: mt({ ...f }) } };
  }(e, i, r, t);
  return delete e.sdkProcessingMetadata, Mi(o, [[{ type: s }, e]]);
}
function _c(e, t, n, r = 0) {
  return new pt((i, s) => {
    const o = e[r];
    if (t === null || typeof o != "function") i(t);
    else {
      const a = o({ ...t }, n);
      Se && o.id && a === null && se.log(`Event processor "${o.id}" dropped event`), xo(a) ? a.then((c) => _c(e, c, n, r + 1).then(i)).then(null, s) : _c(e, a, n, r + 1).then(i).then(null, s);
    }
  });
}
let is, Jf, sa;
function OM(e, t) {
  const { fingerprint: n, span: r, breadcrumbs: i, sdkProcessingMetadata: s } = t;
  (function(o, a) {
    const { extra: c, tags: l, user: u, contexts: f, level: h, transactionName: p } = a, g = mt(c);
    g && Object.keys(g).length && (o.extra = { ...g, ...o.extra });
    const y = mt(l);
    y && Object.keys(y).length && (o.tags = { ...y, ...o.tags });
    const b = mt(u);
    b && Object.keys(b).length && (o.user = { ...b, ...o.user });
    const w = mt(f);
    w && Object.keys(w).length && (o.contexts = { ...w, ...o.contexts }), h && (o.level = h), p && o.type !== "transaction" && (o.transaction = p);
  })(e, t), r && function(o, a) {
    o.contexts = { trace: wM(a), ...o.contexts }, o.sdkProcessingMetadata = { dynamicSamplingContext: _M(a), ...o.sdkProcessingMetadata };
    const c = Zv(a), l = Ql(c).description;
    l && !o.transaction && o.type === "transaction" && (o.transaction = l);
  }(e, r), function(o, a) {
    o.fingerprint = o.fingerprint ? Array.isArray(o.fingerprint) ? o.fingerprint : [o.fingerprint] : [], a && (o.fingerprint = o.fingerprint.concat(a)), o.fingerprint && !o.fingerprint.length && delete o.fingerprint;
  }(e, n), function(o, a) {
    const c = [...o.breadcrumbs || [], ...a];
    o.breadcrumbs = c.length ? c : void 0;
  }(e, i), function(o, a) {
    o.sdkProcessingMetadata = { ...o.sdkProcessingMetadata, ...a };
  }(e, s);
}
function Kf(e, t) {
  const { extra: n, tags: r, user: i, contexts: s, level: o, sdkProcessingMetadata: a, breadcrumbs: c, fingerprint: l, eventProcessors: u, attachments: f, propagationContext: h, transactionName: p, span: g } = t;
  ss(e, "extra", n), ss(e, "tags", r), ss(e, "user", i), ss(e, "contexts", s), e.sdkProcessingMetadata = So(e.sdkProcessingMetadata, a, 2), o && (e.level = o), p && (e.transactionName = p), g && (e.span = g), c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]), l.length && (e.fingerprint = [...e.fingerprint, ...l]), u.length && (e.eventProcessors = [...e.eventProcessors, ...u]), f.length && (e.attachments = [...e.attachments, ...f]), e.propagationContext = { ...e.propagationContext, ...h };
}
function ss(e, t, n) {
  e[t] = So(e[t], n, 1);
}
function RM(e, t, n, r, i, s) {
  const { normalizeDepth: o = 3, normalizeMaxBreadth: a = 1e3 } = e, c = { ...t, event_id: t.event_id || n.event_id || vt(), timestamp: t.timestamp || Ni() }, l = n.integrations || e.integrations.map((g) => g.name);
  (function(g, y) {
    const { environment: b, release: w, dist: M, maxValueLength: C = 250 } = y;
    g.environment = g.environment || b || Zl, !g.release && w && (g.release = w), !g.dist && M && (g.dist = M), g.message && (g.message = wr(g.message, C));
    const S = g.exception && g.exception.values && g.exception.values[0];
    S && S.value && (S.value = wr(S.value, C));
    const _ = g.request;
    _ && _.url && (_.url = wr(_.url, C));
  })(c, e), function(g, y) {
    y.length > 0 && (g.sdk = g.sdk || {}, g.sdk.integrations = [...g.sdk.integrations || [], ...y]);
  }(c, l), i && i.emit("applyFrameMetadata", t), t.type === void 0 && function(g, y) {
    const b = function(w) {
      const M = pe._sentryDebugIds;
      if (!M) return {};
      const C = Object.keys(M);
      return sa && C.length === Jf || (Jf = C.length, sa = C.reduce((S, _) => {
        is || (is = {});
        const O = is[_];
        if (O) S[O[0]] = O[1];
        else {
          const k = w(_);
          for (let P = k.length - 1; P >= 0; P--) {
            const R = k[P], L = R && R.filename, I = M[_];
            if (L && I) {
              S[L] = I, is[_] = [L, I];
              break;
            }
          }
        }
        return S;
      }, {})), sa;
    }(y);
    try {
      g.exception.values.forEach((w) => {
        w.stacktrace.frames.forEach((M) => {
          b && M.filename && (M.debug_id = b[M.filename]);
        });
      });
    } catch {
    }
  }(c, e.stackParser);
  const u = function(g, y) {
    if (!y) return g;
    const b = g ? g.clone() : new xn();
    return b.update(y), b;
  }(r, n.captureContext);
  n.mechanism && Pr(c, n.mechanism);
  const f = i ? i.getEventProcessors() : [], h = qs("globalScope", () => new xn()).getScopeData();
  s && Kf(h, s.getScopeData()), u && Kf(h, u.getScopeData());
  const p = [...n.attachments || [], ...h.attachments];
  return p.length && (n.attachments = p), OM(c, h), _c([...f, ...h.eventProcessors], c, n).then((g) => (g && function(y) {
    const b = {};
    try {
      y.exception.values.forEach((M) => {
        M.stacktrace.frames.forEach((C) => {
          C.debug_id && (C.abs_path ? b[C.abs_path] = C.debug_id : C.filename && (b[C.filename] = C.debug_id), delete C.debug_id);
        });
      });
    } catch {
    }
    if (Object.keys(b).length === 0) return;
    y.debug_meta = y.debug_meta || {}, y.debug_meta.images = y.debug_meta.images || [];
    const w = y.debug_meta.images;
    Object.entries(b).forEach(([M, C]) => {
      w.push({ type: "sourcemap", code_file: M, debug_id: C });
    });
  }(g), typeof o == "number" && o > 0 ? function(y, b, w) {
    if (!y) return null;
    const M = { ...y, ...y.breadcrumbs && { breadcrumbs: y.breadcrumbs.map((C) => ({ ...C, ...C.data && { data: Ht(C.data, b, w) } })) }, ...y.user && { user: Ht(y.user, b, w) }, ...y.contexts && { contexts: Ht(y.contexts, b, w) }, ...y.extra && { extra: Ht(y.extra, b, w) } };
    return y.contexts && y.contexts.trace && M.contexts && (M.contexts.trace = y.contexts.trace, y.contexts.trace.data && (M.contexts.trace.data = Ht(y.contexts.trace.data, b, w))), y.spans && (M.spans = y.spans.map((C) => ({ ...C, ...C.data && { data: Ht(C.data, b, w) } }))), y.contexts && y.contexts.flags && M.contexts && (M.contexts.flags = Ht(y.contexts.flags, 3, w)), M;
  }(g, o, a) : g));
}
function Yf(e, t) {
  return tr().captureEvent(e, t);
}
function Xf(e) {
  const t = He(), n = Fi(), r = tr(), { release: i, environment: s = Zl } = t && t.getOptions() || {}, { userAgent: o } = pe.navigator || {}, a = fM({ release: i, environment: s, user: r.getUser() || n.getUser(), ...o && { userAgent: o }, ...e }), c = n.getSession();
  return c && c.status === "ok" && Ar(c, { status: "exited" }), ry(), n.setSession(a), r.setSession(a), a;
}
function ry() {
  const e = Fi(), t = tr(), n = t.getSession() || e.getSession();
  n && function(r, i) {
    let s = {};
    r.status === "ok" && (s = { status: "exited" }), Ar(r, s);
  }(n), iy(), e.setSession(), t.setSession();
}
function iy() {
  const e = Fi(), t = tr(), n = He(), r = t.getSession() || e.getSession();
  r && n && n.captureSession(r);
}
function Qf(e = !1) {
  e ? ry() : iy();
}
function LM(e, t, n) {
  return t || `${function(r) {
    return `${function(i) {
      const s = i.protocol ? `${i.protocol}:` : "", o = i.port ? `:${i.port}` : "";
      return `${s}//${i.host}${o}${i.path ? `/${i.path}` : ""}/api/`;
    }(r)}${r.projectId}/envelope/`;
  }(e)}?${function(r, i) {
    const s = { sentry_version: "7" };
    return r.publicKey && (s.sentry_key = r.publicKey), i && (s.sentry_client = `${i.name}/${i.version}`), new URLSearchParams(s).toString();
  }(e, n)}`;
}
const Zf = [];
function eh(e, t) {
  for (const n of t) n && n.afterAllSetup && n.afterAllSetup(e);
}
function th(e, t, n) {
  if (n[t.name]) Se && se.log(`Integration skipped because it was already installed: ${t.name}`);
  else {
    if (n[t.name] = t, Zf.indexOf(t.name) === -1 && typeof t.setupOnce == "function" && (t.setupOnce(), Zf.push(t.name)), t.setup && typeof t.setup == "function" && t.setup(e), typeof t.preprocessEvent == "function") {
      const r = t.preprocessEvent.bind(t);
      e.on("preprocessEvent", (i, s) => r(i, s, e));
    }
    if (typeof t.processEvent == "function") {
      const r = t.processEvent.bind(t), i = Object.assign((s, o) => r(s, o, e), { id: t.name });
      e.addEventProcessor(i);
    }
    Se && se.log(`Integration installed: ${t.name}`);
  }
}
class _t extends Error {
  constructor(t, n = "warn") {
    super(t), this.message = t, this.logLevel = n;
  }
}
const nh = "Not capturing exception because it's already been captured.";
class jM {
  constructor(t) {
    if (this._options = t, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], t.dsn ? this._dsn = CM(t.dsn) : Se && se.warn("No DSN provided, client will not send events."), this._dsn) {
      const r = LM(this._dsn, t.tunnel, t._metadata ? t._metadata.sdk : void 0);
      this._transport = t.transport({ tunnel: this._options.tunnel, recordDroppedEvent: this.recordDroppedEvent.bind(this), ...t.transportOptions, url: r });
    }
    const n = ["enableTracing", "tracesSampleRate", "tracesSampler"].find((r) => r in t && t[r] == null);
    n && Ii(() => {
      console.warn(`[Sentry] Deprecation warning: \`${n}\` is set to undefined, which leads to tracing being enabled. In v9, a value of \`undefined\` will result in tracing being disabled.`);
    });
  }
  captureException(t, n, r) {
    const i = vt();
    if (If(t)) return Se && se.log(nh), i;
    const s = { event_id: i, ...n };
    return this._process(this.eventFromException(t, s).then((o) => this._captureEvent(o, s, r))), s.event_id;
  }
  captureMessage(t, n, r, i) {
    const s = { event_id: vt(), ...r }, o = Gl(t) ? t : String(t), a = gc(t) ? this.eventFromMessage(o, n, s) : this.eventFromException(t, s);
    return this._process(a.then((c) => this._captureEvent(c, s, i))), s.event_id;
  }
  captureEvent(t, n, r) {
    const i = vt();
    if (n && n.originalException && If(n.originalException)) return Se && se.log(nh), i;
    const s = { event_id: i, ...n }, o = (t.sdkProcessingMetadata || {}).capturedSpanScope;
    return this._process(this._captureEvent(t, s, o || r)), s.event_id;
  }
  captureSession(t) {
    typeof t.release != "string" ? Se && se.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), Ar(t, { init: !1 }));
  }
  getDsn() {
    return this._dsn;
  }
  getOptions() {
    return this._options;
  }
  getSdkMetadata() {
    return this._options._metadata;
  }
  getTransport() {
    return this._transport;
  }
  flush(t) {
    const n = this._transport;
    return n ? (this.emit("flush"), this._isClientDoneProcessing(t).then((r) => n.flush(t).then((i) => r && i))) : Yn(!0);
  }
  close(t) {
    return this.flush(t).then((n) => (this.getOptions().enabled = !1, this.emit("close"), n));
  }
  getEventProcessors() {
    return this._eventProcessors;
  }
  addEventProcessor(t) {
    this._eventProcessors.push(t);
  }
  init() {
    (this._isEnabled() || this._options.integrations.some(({ name: t }) => t.startsWith("Spotlight"))) && this._setupIntegrations();
  }
  getIntegrationByName(t) {
    return this._integrations[t];
  }
  addIntegration(t) {
    const n = this._integrations[t.name];
    th(this, t, this._integrations), n || eh(this, [t]);
  }
  sendEvent(t, n = {}) {
    this.emit("beforeSendEvent", t, n);
    let r = AM(t, this._dsn, this._options._metadata, this._options.tunnel);
    for (const s of n.attachments || []) r = EM(r, MM(s));
    const i = this.sendEnvelope(r);
    i && i.then((s) => this.emit("afterSendEvent", t, s), null);
  }
  sendSession(t) {
    const n = function(r, i, s, o) {
      const a = ny(s);
      return Mi({ sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...a && { sdk: a }, ...!!o && i && { dsn: Js(i) } }, ["aggregates" in r ? [{ type: "sessions" }, r] : [{ type: "session" }, r.toJSON()]]);
    }(t, this._dsn, this._options._metadata, this._options.tunnel);
    this.sendEnvelope(n);
  }
  recordDroppedEvent(t, n, r) {
    if (this._options.sendClientReports) {
      const i = typeof r == "number" ? r : 1, s = `${t}:${n}`;
      Se && se.log(`Recording outcome: "${s}"${i > 1 ? ` (${i} times)` : ""}`), this._outcomes[s] = (this._outcomes[s] || 0) + i;
    }
  }
  on(t, n) {
    const r = this._hooks[t] = this._hooks[t] || [];
    return r.push(n), () => {
      const i = r.indexOf(n);
      i > -1 && r.splice(i, 1);
    };
  }
  emit(t, ...n) {
    const r = this._hooks[t];
    r && r.forEach((i) => i(...n));
  }
  sendEnvelope(t) {
    return this.emit("beforeEnvelope", t), this._isEnabled() && this._transport ? this._transport.send(t).then(null, (n) => (Se && se.error("Error while sending envelope:", n), n)) : (Se && se.error("Transport disabled"), Yn({}));
  }
  _setupIntegrations() {
    const { integrations: t } = this._options;
    this._integrations = function(n, r) {
      const i = {};
      return r.forEach((s) => {
        s && th(n, s, i);
      }), i;
    }(this, t), eh(this, t);
  }
  _updateSessionFromEvent(t, n) {
    let r = n.level === "fatal", i = !1;
    const s = n.exception && n.exception.values;
    if (s) {
      i = !0;
      for (const a of s) {
        const c = a.mechanism;
        if (c && c.handled === !1) {
          r = !0;
          break;
        }
      }
    }
    const o = t.status === "ok";
    (o && t.errors === 0 || o && r) && (Ar(t, { ...r && { status: "crashed" }, errors: t.errors || Number(i || r) }), this.captureSession(t));
  }
  _isClientDoneProcessing(t) {
    return new pt((n) => {
      let r = 0;
      const i = setInterval(() => {
        this._numProcessing == 0 ? (clearInterval(i), n(!0)) : (r += 1, t && r >= t && (clearInterval(i), n(!1)));
      }, 1);
    });
  }
  _isEnabled() {
    return this.getOptions().enabled !== !1 && this._transport !== void 0;
  }
  _prepareEvent(t, n, r = tr(), i = Fi()) {
    const s = this.getOptions(), o = Object.keys(this._integrations);
    return !n.integrations && o.length > 0 && (n.integrations = o), this.emit("preprocessEvent", t, n), t.type || i.setLastEventId(t.event_id || n.event_id), RM(s, t, n, r, this, i).then((a) => {
      if (a === null) return a;
      a.contexts = { trace: gM(r), ...a.contexts };
      const c = function(l, u) {
        const f = u.getPropagationContext();
        return f.dsc || ey(f.traceId, l);
      }(this, r);
      return a.sdkProcessingMetadata = { dynamicSamplingContext: c, ...a.sdkProcessingMetadata }, a;
    });
  }
  _captureEvent(t, n = {}, r) {
    return this._processEvent(t, n, r).then((i) => i.event_id, (i) => {
      Se && (i instanceof _t && i.logLevel === "log" ? se.log(i.message) : se.warn(i));
    });
  }
  _processEvent(t, n, r) {
    const i = this.getOptions(), { sampleRate: s } = i, o = ih(t), a = rh(t), c = t.type || "error", l = `before send for type \`${c}\``, u = s === void 0 ? void 0 : function(p) {
      if (typeof p == "boolean") return Number(p);
      const g = typeof p == "string" ? parseFloat(p) : p;
      if (!(typeof g != "number" || isNaN(g) || g < 0 || g > 1)) return g;
      Se && se.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(p)} of type ${JSON.stringify(typeof p)}.`);
    }(s);
    if (a && typeof u == "number" && Math.random() > u) return this.recordDroppedEvent("sample_rate", "error", t), Gs(new _t(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
    const f = c === "replay_event" ? "replay" : c, h = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
    return this._prepareEvent(t, n, r, h).then((p) => {
      if (p === null) throw this.recordDroppedEvent("event_processor", f, t), new _t("An event processor returned `null`, will not send event.", "log");
      if (n.data && n.data.__sentry__ === !0) return p;
      const g = function(y, b, w, M) {
        const { beforeSend: C, beforeSendTransaction: S, beforeSendSpan: _ } = b;
        if (rh(w) && C) return C(w, M);
        if (ih(w)) {
          if (w.spans && _) {
            const O = [];
            for (const k of w.spans) {
              const P = _(k);
              P ? O.push(P) : (SM(), y.recordDroppedEvent("before_send", "span"));
            }
            w.spans = O;
          }
          if (S) {
            if (w.spans) {
              const O = w.spans.length;
              w.sdkProcessingMetadata = { ...w.sdkProcessingMetadata, spanCountBeforeProcessing: O };
            }
            return S(w, M);
          }
        }
        return w;
      }(this, i, p, n);
      return function(y, b) {
        const w = `${b} must return \`null\` or a valid event.`;
        if (xo(y)) return y.then((M) => {
          if (!Mr(M) && M !== null) throw new _t(w);
          return M;
        }, (M) => {
          throw new _t(`${b} rejected with ${M}`);
        });
        if (!Mr(y) && y !== null) throw new _t(w);
        return y;
      }(g, l);
    }).then((p) => {
      if (p === null) {
        if (this.recordDroppedEvent("before_send", f, t), o) {
          const b = 1 + (t.spans || []).length;
          this.recordDroppedEvent("before_send", "span", b);
        }
        throw new _t(`${l} returned \`null\`, will not send event.`, "log");
      }
      const g = r && r.getSession();
      if (!o && g && this._updateSessionFromEvent(g, p), o) {
        const b = (p.sdkProcessingMetadata && p.sdkProcessingMetadata.spanCountBeforeProcessing || 0) - (p.spans ? p.spans.length : 0);
        b > 0 && this.recordDroppedEvent("before_send", "span", b);
      }
      const y = p.transaction_info;
      if (o && y && p.transaction !== t.transaction) {
        const b = "custom";
        p.transaction_info = { ...y, source: b };
      }
      return this.sendEvent(p, n), p;
    }).then(null, (p) => {
      throw p instanceof _t ? p : (this.captureException(p, { data: { __sentry__: !0 }, originalException: p }), new _t(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${p}`));
    });
  }
  _process(t) {
    this._numProcessing++, t.then((n) => (this._numProcessing--, n), (n) => (this._numProcessing--, n));
  }
  _clearOutcomes() {
    const t = this._outcomes;
    return this._outcomes = {}, Object.entries(t).map(([n, r]) => {
      const [i, s] = n.split(":");
      return { reason: i, category: s, quantity: r };
    });
  }
  _flushOutcomes() {
    Se && se.log("Flushing outcomes...");
    const t = this._clearOutcomes();
    if (t.length === 0) return void (Se && se.log("No outcomes to send"));
    if (!this._dsn) return void (Se && se.log("No dsn provided, will not send outcomes"));
    Se && se.log("Sending outcomes:", t);
    const n = (r = t, Mi((i = this._options.tunnel && Js(this._dsn)) ? { dsn: i } : {}, [[{ type: "client_report" }, { timestamp: s || Ni(), discarded_events: r }]]));
    var r, i, s;
    this.sendEnvelope(n);
  }
}
function rh(e) {
  return e.type === void 0;
}
function ih(e) {
  return e.type === "transaction";
}
function DM(e) {
  const t = [];
  function n(r) {
    return t.splice(t.indexOf(r), 1)[0] || Promise.resolve(void 0);
  }
  return { $: t, add: function(r) {
    if (!(e === void 0 || t.length < e)) return Gs(new _t("Not adding Promise because buffer limit was reached."));
    const i = r();
    return t.indexOf(i) === -1 && t.push(i), i.then(() => n(i)).then(null, () => n(i).then(null, () => {
    })), i;
  }, drain: function(r) {
    return new pt((i, s) => {
      let o = t.length;
      if (!o) return i(!0);
      const a = setTimeout(() => {
        r && r > 0 && i(!1);
      }, r);
      t.forEach((c) => {
        Yn(c).then(() => {
          --o || (clearTimeout(a), i(!0));
        }, s);
      });
    });
  } };
}
function IM(e, { statusCode: t, headers: n }, r = Date.now()) {
  const i = { ...e }, s = n && n["x-sentry-rate-limits"], o = n && n["retry-after"];
  if (s) for (const a of s.trim().split(",")) {
    const [c, l, , , u] = a.split(":", 5), f = parseInt(c, 10), h = 1e3 * (isNaN(f) ? 60 : f);
    if (l) for (const p of l.split(";")) p === "metric_bucket" && u && !u.split(";").includes("custom") || (i[p] = r + h);
    else i.all = r + h;
  }
  else o ? i.all = r + function(a, c = Date.now()) {
    const l = parseInt(`${a}`, 10);
    if (!isNaN(l)) return 1e3 * l;
    const u = Date.parse(`${a}`);
    return isNaN(u) ? 6e4 : u - c;
  }(o, r) : t === 429 && (i.all = r + 6e4);
  return i;
}
function NM(e, t, n = DM(e.bufferSize || 64)) {
  let r = {};
  return { send: function(i) {
    const s = [];
    if (Hf(i, (c, l) => {
      const u = Gf(l);
      if (function(f, h, p = Date.now()) {
        return function(g, y) {
          return g[y] || g.all || 0;
        }(f, h) > p;
      }(r, u)) {
        const f = sh(c, l);
        e.recordDroppedEvent("ratelimit_backoff", u, f);
      } else s.push(c);
    }), s.length === 0) return Yn({});
    const o = Mi(i[0], s), a = (c) => {
      Hf(o, (l, u) => {
        const f = sh(l, u);
        e.recordDroppedEvent(c, Gf(u), f);
      });
    };
    return n.add(() => t({ body: TM(o) }).then((c) => (c.statusCode !== void 0 && (c.statusCode < 200 || c.statusCode >= 300) && Se && se.warn(`Sentry responded with status code ${c.statusCode} to sent event.`), r = IM(r, c), c), (c) => {
      throw a("network_error"), c;
    })).then((c) => c, (c) => {
      if (c instanceof _t) return Se && se.error("Skipped sending event because buffer is full."), a("queue_overflow"), Yn({});
      throw c;
    });
  }, flush: (i) => n.drain(i) };
}
function sh(e, t) {
  if (t === "event" || t === "transaction") return Array.isArray(e) ? e[1] : void 0;
}
const FM = 100;
function Pn(e, t) {
  const n = He(), r = Fi();
  if (!n) return;
  const { beforeBreadcrumb: i = null, maxBreadcrumbs: s = FM } = n.getOptions();
  if (s <= 0) return;
  const o = { timestamp: Ni(), ...e }, a = i ? Ii(() => i(o, t)) : o;
  a !== null && (n.emit && n.emit("beforeAddBreadcrumb", a, t), r.addBreadcrumb(a, s));
}
let oh;
const ah = /* @__PURE__ */ new WeakMap(), BM = () => ({ name: "FunctionToString", setupOnce() {
  oh = Function.prototype.toString;
  try {
    Function.prototype.toString = function(...e) {
      const t = Kl(this), n = ah.has(He()) && t !== void 0 ? t : this;
      return oh.apply(n, e);
    };
  } catch {
  }
}, setup(e) {
  ah.set(e, !0);
} }), $M = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, "undefined is not an object (evaluating 'a.L')", `can't redefine non-configurable property "solana"`, "vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)", "Can't find variable: _AutofillCallbackHandler", /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/], VM = (e = {}) => ({ name: "InboundFilters", processEvent(t, n, r) {
  const i = r.getOptions(), s = function(o = {}, a = {}) {
    return { allowUrls: [...o.allowUrls || [], ...a.allowUrls || []], denyUrls: [...o.denyUrls || [], ...a.denyUrls || []], ignoreErrors: [...o.ignoreErrors || [], ...a.ignoreErrors || [], ...o.disableErrorDefaults ? [] : $M], ignoreTransactions: [...o.ignoreTransactions || [], ...a.ignoreTransactions || []], ignoreInternal: o.ignoreInternal === void 0 || o.ignoreInternal };
  }(e, i);
  return function(o, a) {
    return a.ignoreInternal && function(c) {
      try {
        return c.exception.values[0].type === "SentryError";
      } catch {
      }
      return !1;
    }(o) ? (Se && se.warn(`Event dropped due to being internal Sentry Error.
Event: ${hn(o)}`), !0) : function(c, l) {
      return c.type || !l || !l.length ? !1 : function(u) {
        const f = [];
        u.message && f.push(u.message);
        let h;
        try {
          h = u.exception.values[u.exception.values.length - 1];
        } catch {
        }
        return h && h.value && (f.push(h.value), h.type && f.push(`${h.type}: ${h.value}`)), f;
      }(c).some((u) => rs(u, l));
    }(o, a.ignoreErrors) ? (Se && se.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${hn(o)}`), !0) : function(c) {
      return c.type || !c.exception || !c.exception.values || c.exception.values.length === 0 ? !1 : !c.message && !c.exception.values.some((l) => l.stacktrace || l.type && l.type !== "Error" || l.value);
    }(o) ? (Se && se.warn(`Event dropped due to not having an error message, error type or stacktrace.
Event: ${hn(o)}`), !0) : function(c, l) {
      if (c.type !== "transaction" || !l || !l.length) return !1;
      const u = c.transaction;
      return !!u && rs(u, l);
    }(o, a.ignoreTransactions) ? (Se && se.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${hn(o)}`), !0) : function(c, l) {
      if (!l || !l.length) return !1;
      const u = os(c);
      return !!u && rs(u, l);
    }(o, a.denyUrls) ? (Se && se.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${hn(o)}.
Url: ${os(o)}`), !0) : function(c, l) {
      if (!l || !l.length) return !0;
      const u = os(c);
      return !u || rs(u, l);
    }(o, a.allowUrls) ? !1 : (Se && se.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${hn(o)}.
Url: ${os(o)}`), !0);
  }(t, s) ? null : t;
} });
function os(e) {
  try {
    let t;
    try {
      t = e.exception.values[0].stacktrace.frames;
    } catch {
    }
    return t ? function(n = []) {
      for (let r = n.length - 1; r >= 0; r--) {
        const i = n[r];
        if (i && i.filename !== "<anonymous>" && i.filename !== "[native code]") return i.filename || null;
      }
      return null;
    }(t) : null;
  } catch {
    return Se && se.error(`Cannot extract url for event ${hn(e)}`), null;
  }
}
function UM(e, t, n = 250, r, i, s, o) {
  if (!(s.exception && s.exception.values && o && Jn(o.originalException, Error))) return;
  const a = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
  var c, l;
  a && (s.exception.values = (c = kc(e, t, i, o.originalException, r, s.exception.values, a, 0), l = n, c.map((u) => (u.value && (u.value = wr(u.value, l)), u))));
}
function kc(e, t, n, r, i, s, o, a) {
  if (s.length >= n + 1) return s;
  let c = [...s];
  if (Jn(r[i], Error)) {
    ch(o, a);
    const l = e(t, r[i]), u = c.length;
    lh(l, i, u, a), c = kc(e, t, n, r[i], i, [l, ...c], l, u);
  }
  return Array.isArray(r.errors) && r.errors.forEach((l, u) => {
    if (Jn(l, Error)) {
      ch(o, a);
      const f = e(t, l), h = c.length;
      lh(f, `errors[${u}]`, h, a), c = kc(e, t, n, l, i, [f, ...c], f, h);
    }
  }), c;
}
function ch(e, t) {
  e.mechanism = e.mechanism || { type: "generic", handled: !0 }, e.mechanism = { ...e.mechanism, ...e.type === "AggregateError" && { is_exception_group: !0 }, exception_id: t };
}
function lh(e, t, n, r) {
  e.mechanism = e.mechanism || { type: "generic", handled: !0 }, e.mechanism = { ...e.mechanism, type: "chained", source: t, exception_id: n, parent_id: r };
}
function oa(e) {
  if (!e) return {};
  const t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!t) return {};
  const n = t[6] || "", r = t[8] || "";
  return { host: t[4], path: t[5], protocol: t[2], search: n, hash: r, relative: t[5] + n + r };
}
function zM() {
  "console" in pe && mc.forEach(function(e) {
    e in pe.console && st(pe.console, e, function(t) {
      return Hs[e] = t, function(...n) {
        Mt("console", { args: n, level: e });
        const r = Hs[e];
        r && r.apply(pe.console, n);
      };
    });
  });
}
function WM(e) {
  return e === "warn" ? "warning" : ["fatal", "error", "warning", "log", "info", "debug"].includes(e) ? e : "log";
}
const qM = () => {
  let e;
  return { name: "Dedupe", processEvent(t) {
    if (t.type) return t;
    try {
      if (function(n, r) {
        return r ? !!(function(i, s) {
          const o = i.message, a = s.message;
          return !(!o && !a || o && !a || !o && a || o !== a || !dh(i, s) || !uh(i, s));
        }(n, r) || function(i, s) {
          const o = fh(s), a = fh(i);
          return !(!o || !a || o.type !== a.type || o.value !== a.value || !dh(i, s) || !uh(i, s));
        }(n, r)) : !1;
      }(t, e)) return Se && se.warn("Event dropped due to being a duplicate of previously captured event."), null;
    } catch {
    }
    return e = t;
  } };
};
function uh(e, t) {
  let n = Af(e), r = Af(t);
  if (!n && !r) return !0;
  if (n && !r || !n && r || r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++) {
    const s = r[i], o = n[i];
    if (s.filename !== o.filename || s.lineno !== o.lineno || s.colno !== o.colno || s.function !== o.function) return !1;
  }
  return !0;
}
function dh(e, t) {
  let n = e.fingerprint, r = t.fingerprint;
  if (!n && !r) return !0;
  if (n && !r || !n && r) return !1;
  try {
    return n.join("") === r.join("");
  } catch {
    return !1;
  }
}
function fh(e) {
  return e.exception && e.exception.values && e.exception.values[0];
}
function hh(e) {
  return e === void 0 ? void 0 : e >= 400 && e < 500 ? "warning" : e >= 500 ? "error" : void 0;
}
const aa = pe;
function Cc(e) {
  return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
}
function HM() {
  if (typeof EdgeRuntime == "string") return !0;
  if (!function() {
    if (!("fetch" in aa)) return !1;
    try {
      return new Headers(), new Request("http://www.example.com"), new Response(), !0;
    } catch {
      return !1;
    }
  }()) return !1;
  if (Cc(aa.fetch)) return !0;
  let e = !1;
  const t = aa.document;
  if (t && typeof t.createElement == "function") try {
    const n = t.createElement("iframe");
    n.hidden = !0, t.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (e = Cc(n.contentWindow.fetch)), t.head.removeChild(n);
  } catch (n) {
    er && se.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n);
  }
  return e;
}
function GM(e, t) {
  const n = "fetch";
  Wn(n, e), qn(n, () => function(r, i = !1) {
    i && !HM() || st(pe, "fetch", function(s) {
      return function(...o) {
        const a = new Error(), { method: c, url: l } = function(f) {
          if (f.length === 0) return { method: "GET", url: "" };
          if (f.length === 2) {
            const [p, g] = f;
            return { url: ph(p), method: Ec(g, "method") ? String(g.method).toUpperCase() : "GET" };
          }
          const h = f[0];
          return { url: ph(h), method: Ec(h, "method") ? String(h.method).toUpperCase() : "GET" };
        }(o), u = { args: o, fetchData: { method: c, url: l }, startTimestamp: 1e3 * Kt(), virtualError: a };
        return r || Mt("fetch", { ...u }), s.apply(pe, o).then(async (f) => (r ? r(f) : Mt("fetch", { ...u, endTimestamp: 1e3 * Kt(), response: f }), f), (f) => {
          throw Mt("fetch", { ...u, endTimestamp: 1e3 * Kt(), error: f }), Hl(f) && f.stack === void 0 && (f.stack = a.stack, Kn(f, "framesToPop", 1)), f;
        });
      };
    });
  }(void 0, t));
}
function Ec(e, t) {
  return !!e && typeof e == "object" && !!e[t];
}
function ph(e) {
  return typeof e == "string" ? e : e ? Ec(e, "url") ? e.url : e.toString ? e.toString() : "" : "";
}
const as = pe, Fe = pe;
let Tc = 0;
function mh() {
  return Tc > 0;
}
function Rr(e, t = {}) {
  if (!/* @__PURE__ */ function(r) {
    return typeof r == "function";
  }(e)) return e;
  try {
    const r = e.__sentry_wrapped__;
    if (r) return typeof r == "function" ? r : e;
    if (Kl(e)) return e;
  } catch {
    return e;
  }
  const n = function(...r) {
    try {
      const i = r.map((s) => Rr(s, t));
      return e.apply(this, i);
    } catch (i) {
      throw Tc++, setTimeout(() => {
        Tc--;
      }), function(...s) {
        const o = Xl(bo());
        if (s.length === 2) {
          const [a, c] = s;
          return a ? o.withSetScope(a, c) : o.withScope(c);
        }
        o.withScope(s[0]);
      }((s) => {
        var o;
        s.addEventProcessor((a) => (t.mechanism && (yc(a, void 0), Pr(a, t.mechanism)), a.extra = { ...a.extra, arguments: r }, a)), o = i, tr().captureException(o, void 0);
      }), i;
    }
  };
  try {
    for (const r in e) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  } catch {
  }
  Yv(n, e), Kn(e, "__sentry_wrapped__", n);
  try {
    Object.getOwnPropertyDescriptor(n, "name").configurable && Object.defineProperty(n, "name", { get: () => e.name });
  } catch {
  }
  return n;
}
const _o = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__;
function eu(e, t) {
  const n = tu(e, t), r = { type: YM(t), value: XM(t) };
  return n.length && (r.stacktrace = { frames: n }), r.type === void 0 && r.value === "" && (r.value = "Unrecoverable error caught"), r;
}
function JM(e, t, n, r) {
  const i = He(), s = i && i.getOptions().normalizeDepth, o = function(l) {
    for (const u in l) if (Object.prototype.hasOwnProperty.call(l, u)) {
      const f = l[u];
      if (f instanceof Error) return f;
    }
  }(t), a = { __serialized__: ty(t, s) };
  if (o) return { exception: { values: [eu(e, o)] }, extra: a };
  const c = { exception: { values: [{ type: wo(t) ? t.constructor.name : r ? "UnhandledRejection" : "Error", value: QM(t, { isUnhandledRejection: r }) }] }, extra: a };
  if (n) {
    const l = tu(e, n);
    l.length && (c.exception.values[0].stacktrace = { frames: l });
  }
  return c;
}
function ca(e, t) {
  return { exception: { values: [eu(e, t)] } };
}
function tu(e, t) {
  const n = t.stacktrace || t.stack || "", r = function(s) {
    return s && KM.test(s.message) ? 1 : 0;
  }(t), i = function(s) {
    return typeof s.framesToPop == "number" ? s.framesToPop : 0;
  }(t);
  try {
    return e(n, r, i);
  } catch {
  }
  return [];
}
const KM = /Minified React error #\d+;/i;
function sy(e) {
  return typeof WebAssembly < "u" && WebAssembly.Exception !== void 0 && e instanceof WebAssembly.Exception;
}
function YM(e) {
  const t = e && e.name;
  return !t && sy(e) ? e.message && Array.isArray(e.message) && e.message.length == 2 ? e.message[0] : "WebAssembly.Exception" : t;
}
function XM(e) {
  const t = e && e.message;
  return t ? t.error && typeof t.error.message == "string" ? t.error.message : sy(e) && Array.isArray(e.message) && e.message.length == 2 ? e.message[1] : t : "No error message";
}
function Mc(e, t, n, r, i) {
  let s;
  if (Gv(t) && t.error)
    return ca(e, t.error);
  if (Rf(t) || qr(t, "DOMException")) {
    const o = t;
    if ("stack" in t) s = ca(e, t);
    else {
      const a = o.name || (Rf(o) ? "DOMError" : "DOMException"), c = o.message ? `${a}: ${o.message}` : a;
      s = Pc(e, c, n, r), yc(s, c);
    }
    return "code" in o && (s.tags = { ...s.tags, "DOMException.code": `${o.code}` }), s;
  }
  return Hl(t) ? ca(e, t) : Mr(t) || wo(t) ? (s = JM(e, t, n, i), Pr(s, { synthetic: !0 }), s) : (s = Pc(e, t, n, r), yc(s, `${t}`), Pr(s, { synthetic: !0 }), s);
}
function Pc(e, t, n, r) {
  const i = {};
  if (r && n) {
    const s = tu(e, n);
    s.length && (i.exception = { values: [{ value: t, stacktrace: { frames: s } }] }), Pr(i, { synthetic: !0 });
  }
  if (Gl(t)) {
    const { __sentry_template_string__: s, __sentry_template_values__: o } = t;
    return i.logentry = { message: s, params: o }, i;
  }
  return i.message = t, i;
}
function QM(e, { isUnhandledRejection: t }) {
  const n = function(i, s = 40) {
    const o = Object.keys(Xv(i));
    o.sort();
    const a = o[0];
    if (!a) return "[object has no keys]";
    if (a.length >= s) return wr(a, s);
    for (let c = o.length; c > 0; c--) {
      const l = o.slice(0, c).join(", ");
      if (!(l.length > s)) return c === o.length ? l : wr(l, s);
    }
    return "";
  }(e), r = t ? "promise rejection" : "exception";
  return Gv(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : wo(e) ? `Event \`${function(i) {
    try {
      const s = Object.getPrototypeOf(i);
      return s ? s.constructor.name : void 0;
    } catch {
    }
  }(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`;
}
class ZM extends jM {
  constructor(t) {
    const n = { parentSpanIsAlwaysRootSpan: !0, ...t };
    (function(r, i, s = [i], o = "npm") {
      const a = r._metadata || {};
      a.sdk || (a.sdk = { name: `sentry.javascript.${i}`, packages: s.map((c) => ({ name: `${o}:@sentry/${c}`, version: zn })), version: zn }), r._metadata = a;
    })(n, "browser", ["browser"], Fe.SENTRY_SDK_SOURCE || "npm"), super(n), n.sendClientReports && Fe.document && Fe.document.addEventListener("visibilitychange", () => {
      Fe.document.visibilityState === "hidden" && this._flushOutcomes();
    });
  }
  eventFromException(t, n) {
    return function(r, i, s, o) {
      const a = Mc(r, i, s && s.syntheticException || void 0, o);
      return Pr(a), a.level = "error", s && s.event_id && (a.event_id = s.event_id), Yn(a);
    }(this._options.stackParser, t, n, this._options.attachStacktrace);
  }
  eventFromMessage(t, n = "info", r) {
    return function(i, s, o = "info", a, c) {
      const l = Pc(i, s, a && a.syntheticException || void 0, c);
      return l.level = o, a && a.event_id && (l.event_id = a.event_id), Yn(l);
    }(this._options.stackParser, t, n, r, this._options.attachStacktrace);
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) return void (_o && se.warn("SDK not enabled, will not capture user feedback."));
    const n = function(r, { metadata: i, tunnel: s, dsn: o }) {
      const a = { event_id: r.event_id, sent_at: (/* @__PURE__ */ new Date()).toISOString(), ...i && i.sdk && { sdk: { name: i.sdk.name, version: i.sdk.version } }, ...!!s && !!o && { dsn: Js(o) } };
      return Mi(a, [/* @__PURE__ */ function(l) {
        return [{ type: "user_report" }, l];
      }(r)]);
    }(t, { metadata: this.getSdkMetadata(), dsn: this.getDsn(), tunnel: this.getOptions().tunnel });
    this.sendEnvelope(n);
  }
  _prepareEvent(t, n, r) {
    return t.platform = t.platform || "javascript", super._prepareEvent(t, n, r);
  }
}
const eP = typeof __SENTRY_DEBUG__ > "u" || __SENTRY_DEBUG__, Ze = pe;
let gh, la, ua, cs;
function tP() {
  if (!Ze.document) return;
  const e = Mt.bind(null, "dom"), t = vh(e, !0);
  Ze.document.addEventListener("click", t, !1), Ze.document.addEventListener("keypress", t, !1), ["EventTarget", "Node"].forEach((n) => {
    const r = Ze[n], i = r && r.prototype;
    i && i.hasOwnProperty && i.hasOwnProperty("addEventListener") && (st(i, "addEventListener", function(s) {
      return function(o, a, c) {
        if (o === "click" || o == "keypress") try {
          const l = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}, u = l[o] = l[o] || { refCount: 0 };
          if (!u.handler) {
            const f = vh(e);
            u.handler = f, s.call(this, o, f, c);
          }
          u.refCount++;
        } catch {
        }
        return s.call(this, o, a, c);
      };
    }), st(i, "removeEventListener", function(s) {
      return function(o, a, c) {
        if (o === "click" || o == "keypress") try {
          const l = this.__sentry_instrumentation_handlers__ || {}, u = l[o];
          u && (u.refCount--, u.refCount <= 0 && (s.call(this, o, u.handler, c), u.handler = void 0, delete l[o]), Object.keys(l).length === 0 && delete this.__sentry_instrumentation_handlers__);
        } catch {
        }
        return s.call(this, o, a, c);
      };
    }));
  });
}
function vh(e, t = !1) {
  return (n) => {
    if (!n || n._sentryCaptured) return;
    const r = function(s) {
      try {
        return s.target;
      } catch {
        return null;
      }
    }(n);
    if (function(s, o) {
      return s === "keypress" && (!o || !o.tagName || o.tagName !== "INPUT" && o.tagName !== "TEXTAREA" && !o.isContentEditable);
    }(n.type, r)) return;
    Kn(n, "_sentryCaptured", !0), r && !r._sentryId && Kn(r, "_sentryId", vt());
    const i = n.type === "keypress" ? "input" : n.type;
    (function(s) {
      if (s.type !== la) return !1;
      try {
        if (!s.target || s.target._sentryId !== ua) return !1;
      } catch {
      }
      return !0;
    })(n) || (e({ event: n, name: i, global: t }), la = n.type, ua = r ? r._sentryId : void 0), clearTimeout(gh), gh = Ze.setTimeout(() => {
      ua = void 0, la = void 0;
    }, 1e3);
  };
}
function oy(e) {
  const t = "history";
  Wn(t, e), qn(t, nP);
}
function nP() {
  if (!function() {
    const n = as.chrome, r = n && n.app && n.app.runtime, i = "history" in as && !!as.history.pushState && !!as.history.replaceState;
    return !r && i;
  }()) return;
  const e = Ze.onpopstate;
  function t(n) {
    return function(...r) {
      const i = r.length > 2 ? r[2] : void 0;
      if (i) {
        const s = cs, o = String(i);
        cs = o, Mt("history", { from: s, to: o });
      }
      return n.apply(this, r);
    };
  }
  Ze.onpopstate = function(...n) {
    const r = Ze.location.href, i = cs;
    if (cs = r, Mt("history", { from: i, to: r }), e) try {
      return e.apply(this, n);
    } catch {
    }
  }, st(Ze.history, "pushState", t), st(Ze.history, "replaceState", t);
}
const Ts = {};
function yh(e) {
  Ts[e] = void 0;
}
const ai = "__sentry_xhr_v3__";
function rP() {
  if (!Ze.XMLHttpRequest) return;
  const e = XMLHttpRequest.prototype;
  e.open = new Proxy(e.open, { apply(t, n, r) {
    const i = new Error(), s = 1e3 * Kt(), o = Gt(r[0]) ? r[0].toUpperCase() : void 0, a = function(l) {
      if (Gt(l)) return l;
      try {
        return l.toString();
      } catch {
      }
    }(r[1]);
    if (!o || !a) return t.apply(n, r);
    n[ai] = { method: o, url: a, request_headers: {} }, o === "POST" && a.match(/sentry_key/) && (n.__sentry_own_request__ = !0);
    const c = () => {
      const l = n[ai];
      if (l && n.readyState === 4) {
        try {
          l.status_code = n.status;
        } catch {
        }
        Mt("xhr", { endTimestamp: 1e3 * Kt(), startTimestamp: s, xhr: n, virtualError: i });
      }
    };
    return "onreadystatechange" in n && typeof n.onreadystatechange == "function" ? n.onreadystatechange = new Proxy(n.onreadystatechange, { apply: (l, u, f) => (c(), l.apply(u, f)) }) : n.addEventListener("readystatechange", c), n.setRequestHeader = new Proxy(n.setRequestHeader, { apply(l, u, f) {
      const [h, p] = f, g = u[ai];
      return g && Gt(h) && Gt(p) && (g.request_headers[h.toLowerCase()] = p), l.apply(u, f);
    } }), t.apply(n, r);
  } }), e.send = new Proxy(e.send, { apply(t, n, r) {
    const i = n[ai];
    return i ? (r[0] !== void 0 && (i.body = r[0]), Mt("xhr", { startTimestamp: 1e3 * Kt(), xhr: n }), t.apply(n, r)) : t.apply(n, r);
  } });
}
function iP(e, t = function(n) {
  const r = Ts[n];
  if (r) return r;
  let i = Ze[n];
  if (Cc(i)) return Ts[n] = i.bind(Ze);
  const s = Ze.document;
  if (s && typeof s.createElement == "function") try {
    const o = s.createElement("iframe");
    o.hidden = !0, s.head.appendChild(o);
    const a = o.contentWindow;
    a && a[n] && (i = a[n]), s.head.removeChild(o);
  } catch (o) {
    eP && se.warn(`Could not create sandbox iframe for ${n} check, bailing to window.${n}: `, o);
  }
  return i && (Ts[n] = i.bind(Ze));
}("fetch")) {
  let n = 0, r = 0;
  return NM(e, function(i) {
    const s = i.body.length;
    n += s, r++;
    const o = { body: i.body, method: "POST", referrerPolicy: "origin", headers: e.headers, keepalive: n <= 6e4 && r < 15, ...e.fetchOptions };
    if (!t) return yh("fetch"), Gs("No fetch implementation available");
    try {
      return t(e.url, o).then((a) => (n -= s, r--, { statusCode: a.status, headers: { "x-sentry-rate-limits": a.headers.get("X-Sentry-Rate-Limits"), "retry-after": a.headers.get("Retry-After") } }));
    } catch (a) {
      return yh("fetch"), n -= s, r--, Gs(a);
    }
  });
}
function da(e, t, n, r) {
  const i = { filename: e, function: t === "<anonymous>" ? $n : t, in_app: !0 };
  return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i;
}
const sP = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i, oP = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, aP = /\((\S*)(?::(\d+))(?::(\d+))\)/, cP = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i, lP = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, uP = function(...e) {
  const t = e.sort((n, r) => n[0] - r[0]).map((n) => n[1]);
  return (n, r = 0, i = 0) => {
    const s = [], o = n.split(`
`);
    for (let a = r; a < o.length; a++) {
      const c = o[a];
      if (c.length > 1024) continue;
      const l = Tf.test(c) ? c.replace(Tf, "$1") : c;
      if (!l.match(/\S*Error: /)) {
        for (const u of t) {
          const f = u(l);
          if (f) {
            s.push(f);
            break;
          }
        }
        if (s.length >= 50 + i) break;
      }
    }
    return function(a) {
      if (!a.length) return [];
      const c = Array.from(a);
      return /sentryWrapped/.test(ns(c).function || "") && c.pop(), c.reverse(), Mf.test(ns(c).function || "") && (c.pop(), Mf.test(ns(c).function || "") && c.pop()), c.slice(0, 50).map((l) => ({ ...l, filename: l.filename || ns(c).filename, function: l.function || $n }));
    }(s.slice(i));
  };
}([30, (e) => {
  const t = sP.exec(e);
  if (t) {
    const [, r, i, s] = t;
    return da(r, $n, +i, +s);
  }
  const n = oP.exec(e);
  if (n) {
    if (n[2] && n[2].indexOf("eval") === 0) {
      const s = aP.exec(n[2]);
      s && (n[2] = s[1], n[3] = s[2], n[4] = s[3]);
    }
    const [r, i] = bh(n[1] || $n, n[2]);
    return da(i, r, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0);
  }
}], [50, (e) => {
  const t = cP.exec(e);
  if (t) {
    if (t[3] && t[3].indexOf(" > eval") > -1) {
      const i = lP.exec(t[3]);
      i && (t[1] = t[1] || "eval", t[3] = i[1], t[4] = i[2], t[5] = "");
    }
    let n = t[3], r = t[1] || $n;
    return [r, n] = bh(r, n), da(n, r, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0);
  }
}]), bh = (e, t) => {
  const n = e.indexOf("safari-extension") !== -1, r = e.indexOf("safari-web-extension") !== -1;
  return n || r ? [e.indexOf("@") !== -1 ? e.split("@")[0] : $n, n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t];
}, wh = 1024, dP = (e = {}) => {
  const t = { console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...e };
  return { name: "Breadcrumbs", setup(n) {
    var r;
    t.console && function(i) {
      const s = "console";
      Wn(s, i), qn(s, zM);
    }(/* @__PURE__ */ function(i) {
      return function(s) {
        if (He() !== i) return;
        const o = { category: "console", data: { arguments: s.args, logger: "console" }, level: WM(s.level), message: Lf(s.args, " ") };
        if (s.level === "assert") {
          if (s.args[0] !== !1) return;
          o.message = `Assertion failed: ${Lf(s.args.slice(1), " ") || "console.assert"}`, o.data.arguments = s.args.slice(1);
        }
        Pn(o, { input: s.args, level: s.level });
      };
    }(n)), t.dom && (r = /* @__PURE__ */ function(i, s) {
      return function(o) {
        if (He() !== i) return;
        let a, c, l = typeof s == "object" ? s.serializeAttribute : void 0, u = typeof s == "object" && typeof s.maxStringLength == "number" ? s.maxStringLength : void 0;
        u && u > wh && (_o && se.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${u} was configured. Sentry will use 1024 instead.`), u = wh), typeof l == "string" && (l = [l]);
        try {
          const h = o.event, p = function(g) {
            return !!g && !!g.target;
          }(h) ? h.target : h;
          a = Kv(p, { keyAttrs: l, maxStringLength: u }), c = function(g) {
            if (!Jl.HTMLElement) return null;
            let y = g;
            for (let b = 0; b < 5; b++) {
              if (!y) return null;
              if (y instanceof HTMLElement) {
                if (y.dataset.sentryComponent) return y.dataset.sentryComponent;
                if (y.dataset.sentryElement) return y.dataset.sentryElement;
              }
              y = y.parentNode;
            }
            return null;
          }(p);
        } catch {
          a = "<unknown>";
        }
        if (a.length === 0) return;
        const f = { category: `ui.${o.name}`, message: a };
        c && (f.data = { "ui.component_name": c }), Pn(f, { event: o.event, name: o.name, global: o.global });
      };
    }(n, t.dom), Wn("dom", r), qn("dom", tP)), t.xhr && function(i) {
      Wn("xhr", i), qn("xhr", rP);
    }(/* @__PURE__ */ function(i) {
      return function(s) {
        if (He() !== i) return;
        const { startTimestamp: o, endTimestamp: a } = s, c = s.xhr[ai];
        if (!o || !a || !c) return;
        const { method: l, url: u, status_code: f, body: h } = c, p = { method: l, url: u, status_code: f }, g = { xhr: s.xhr, input: h, startTimestamp: o, endTimestamp: a };
        Pn({ category: "xhr", data: p, type: "http", level: hh(f) }, g);
      };
    }(n)), t.fetch && GM(/* @__PURE__ */ function(i) {
      return function(s) {
        if (He() !== i) return;
        const { startTimestamp: o, endTimestamp: a } = s;
        if (a && (!s.fetchData.url.match(/sentry_key/) || s.fetchData.method !== "POST")) if (s.error)
          Pn({ category: "fetch", data: s.fetchData, level: "error", type: "http" }, { data: s.error, input: s.args, startTimestamp: o, endTimestamp: a });
        else {
          const c = s.response, l = { ...s.fetchData, status_code: c && c.status }, u = { input: s.args, response: c, startTimestamp: o, endTimestamp: a };
          Pn({ category: "fetch", data: l, type: "http", level: hh(l.status_code) }, u);
        }
      };
    }(n)), t.history && oy(/* @__PURE__ */ function(i) {
      return function(s) {
        if (He() !== i) return;
        let o = s.from, a = s.to;
        const c = oa(Fe.location.href);
        let l = o ? oa(o) : void 0;
        const u = oa(a);
        l && l.path || (l = c), c.protocol === u.protocol && c.host === u.host && (a = u.relative), c.protocol === l.protocol && c.host === l.host && (o = l.relative), Pn({ category: "navigation", data: { from: o, to: a } });
      };
    }(n)), t.sentry && n.on("beforeSendEvent", /* @__PURE__ */ function(i) {
      return function(s) {
        He() === i && Pn({ category: "sentry." + (s.type === "transaction" ? "transaction" : "event"), event_id: s.event_id, level: s.level, message: hn(s) }, { event: s });
      };
    }(n));
  } };
}, fP = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], hP = (e = {}) => {
  const t = { XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0, ...e };
  return { name: "BrowserApiErrors", setupOnce() {
    t.setTimeout && st(Fe, "setTimeout", xh), t.setInterval && st(Fe, "setInterval", xh), t.requestAnimationFrame && st(Fe, "requestAnimationFrame", pP), t.XMLHttpRequest && "XMLHttpRequest" in Fe && st(XMLHttpRequest.prototype, "send", mP);
    const n = t.eventTarget;
    n && (Array.isArray(n) ? n : fP).forEach(gP);
  } };
};
function xh(e) {
  return function(...t) {
    const n = t[0];
    return t[0] = Rr(n, { mechanism: { data: { function: wn(e) }, handled: !1, type: "instrument" } }), e.apply(this, t);
  };
}
function pP(e) {
  return function(t) {
    return e.apply(this, [Rr(t, { mechanism: { data: { function: "requestAnimationFrame", handler: wn(e) }, handled: !1, type: "instrument" } })]);
  };
}
function mP(e) {
  return function(...t) {
    const n = this;
    return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((r) => {
      r in n && typeof n[r] == "function" && st(n, r, function(i) {
        const s = { mechanism: { data: { function: r, handler: wn(i) }, handled: !1, type: "instrument" } }, o = Kl(i);
        return o && (s.mechanism.data.handler = wn(o)), Rr(i, s);
      });
    }), e.apply(this, t);
  };
}
function gP(e) {
  const t = Fe[e], n = t && t.prototype;
  n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (st(n, "addEventListener", function(r) {
    return function(i, s, o) {
      try {
        typeof s.handleEvent == "function" && (s.handleEvent = Rr(s.handleEvent, { mechanism: { data: { function: "handleEvent", handler: wn(s), target: e }, handled: !1, type: "instrument" } }));
      } catch {
      }
      return r.apply(this, [i, Rr(s, { mechanism: { data: { function: "addEventListener", handler: wn(s), target: e }, handled: !1, type: "instrument" } }), o]);
    };
  }), st(n, "removeEventListener", function(r) {
    return function(i, s, o) {
      try {
        const a = s.__sentry_wrapped__;
        a && r.call(this, i, a, o);
      } catch {
      }
      return r.call(this, i, s, o);
    };
  }));
}
const vP = () => ({ name: "BrowserSession", setupOnce() {
  Fe.document !== void 0 ? (Xf({ ignoreDuration: !0 }), Qf(), oy(({ from: e, to: t }) => {
    e !== void 0 && e !== t && (Xf({ ignoreDuration: !0 }), Qf());
  })) : _o && se.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
} }), yP = (e = {}) => {
  const t = { onerror: !0, onunhandledrejection: !0, ...e };
  return { name: "GlobalHandlers", setupOnce() {
    Error.stackTraceLimit = 50;
  }, setup(n) {
    t.onerror && (function(r) {
      (function(i) {
        const s = "error";
        Wn(s, i), qn(s, cM);
      })((i) => {
        const { stackParser: s, attachStacktrace: o } = _h();
        if (He() !== r || mh()) return;
        const { msg: a, url: c, line: l, column: u, error: f } = i, h = function(p, g, y, b) {
          const w = p.exception = p.exception || {}, M = w.values = w.values || [], C = M[0] = M[0] || {}, S = C.stacktrace = C.stacktrace || {}, _ = S.frames = S.frames || [], O = b, k = y, P = Gt(g) && g.length > 0 ? g : function() {
            try {
              return Jl.document.location.href;
            } catch {
              return "";
            }
          }();
          return _.length === 0 && _.push({ colno: O, filename: P, function: $n, in_app: !0, lineno: k }), p;
        }(Mc(s, f || a, void 0, o, !1), c, l, u);
        h.level = "error", Yf(h, { originalException: f, mechanism: { handled: !1, type: "onerror" } });
      });
    }(n), Sh("onerror")), t.onunhandledrejection && (function(r) {
      (function(i) {
        const s = "unhandledrejection";
        Wn(s, i), qn(s, lM);
      })((i) => {
        const { stackParser: s, attachStacktrace: o } = _h();
        if (He() !== r || mh()) return;
        const a = function(l) {
          if (gc(l)) return l;
          try {
            if ("reason" in l) return l.reason;
            if ("detail" in l && "reason" in l.detail) return l.detail.reason;
          } catch {
          }
          return l;
        }(i), c = gc(a) ? { exception: { values: [{ type: "UnhandledRejection", value: `Non-Error promise rejection captured with value: ${String(a)}` }] } } : Mc(s, a, void 0, o, !0);
        c.level = "error", Yf(c, { originalException: a, mechanism: { handled: !1, type: "onunhandledrejection" } });
      });
    }(n), Sh("onunhandledrejection"));
  } };
};
function Sh(e) {
  _o && se.log(`Global Handler attached: ${e}`);
}
function _h() {
  const e = He();
  return e && e.getOptions() || { stackParser: () => [], attachStacktrace: !1 };
}
const bP = () => ({ name: "HttpContext", preprocessEvent(e) {
  if (!Fe.navigator && !Fe.location && !Fe.document) return;
  const t = e.request && e.request.url || Fe.location && Fe.location.href, { referrer: n } = Fe.document || {}, { userAgent: r } = Fe.navigator || {}, i = { ...e.request && e.request.headers, ...n && { Referer: n }, ...r && { "User-Agent": r } }, s = { ...e.request, ...t && { url: t }, headers: i };
  e.request = s;
} }), wP = (e = {}) => {
  const t = e.limit || 5, n = e.key || "cause";
  return { name: "LinkedErrors", preprocessEvent(r, i, s) {
    const o = s.getOptions();
    UM(eu, o.stackParser, o.maxValueLength, n, t, r, i);
  } };
};
var kh = "new", Ch = "loading", Eh = "loaded", Ac = "joining-meeting", Nn = "joined-meeting", An = "left-meeting", on = "error", xP = "playable", fa = "unknown", SP = "full", _P = "base", Th = "no-room", kP = "end-of-life", CP = "connection-error", EP = "iframe-ready-for-launch-config", TP = "iframe-launch-config", MP = "theme-updated", PP = "loading", AP = "load-attempt-failed", Mh = "loaded", OP = "started-camera", RP = "camera-error", LP = "joining-meeting", jP = "joined-meeting", DP = "left-meeting", IP = "participant-joined", NP = "participant-updated", FP = "participant-left", BP = "participant-counts-updated", $P = "access-state-updated", VP = "meeting-session-summary-updated", UP = "meeting-session-state-updated", zP = "waiting-participant-added", WP = "waiting-participant-updated", qP = "waiting-participant-removed", HP = "track-started", GP = "track-stopped", JP = "transcription-started", KP = "transcription-stopped", YP = "transcription-error", Ph = "recording-started", Ah = "recording-stopped", XP = "recording-stats", QP = "recording-error", ZP = "recording-upload-completed", eA = "recording-data", tA = "app-message", nA = "transcription-message", rA = "remote-media-player-started", iA = "remote-media-player-updated", sA = "remote-media-player-stopped", oA = "local-screen-share-started", aA = "local-screen-share-stopped", cA = "local-screen-share-canceled", lA = "active-speaker-change", uA = "active-speaker-mode-change", dA = "network-quality-change", fA = "network-connection", hA = "cpu-load-change", pA = "face-counts-updated", ls = "fullscreen", us = "exited-fullscreen", mA = "live-streaming-started", gA = "live-streaming-updated", vA = "live-streaming-stopped", yA = "live-streaming-error", bA = "lang-updated", wA = "receive-settings-updated", Oh = "input-settings-updated", Rh = "nonfatal-error", Lh = "error", ha = 4096, jh = 102400, pa = "iframe-call-message", Dh = "local-screen-start", Ih = "daily-method-update-live-streaming-endpoints", ds = "transmit-log", Jt = "daily-custom-track", Ms = { NONE: "none", BGBLUR: "background-blur", BGIMAGE: "background-image", FACE_DETECTION: "face-detection" }, ay = { NONE: "none", NOISE_CANCELLATION: "noise-cancellation" }, Oc = { PLAY: "play", PAUSE: "pause" }, ma = ["jpg", "png", "jpeg"], xA = "add-endpoints", SA = "remove-endpoints", Nh = "sip-call-transfer";
function yt() {
  return !de() && typeof window < "u" && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "";
}
function de() {
  return typeof navigator < "u" && navigator.product && navigator.product === "ReactNative";
}
function cy() {
  return navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
}
function _A() {
  return !!(navigator && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) && (function(e, t) {
    if (!e || !t) return !0;
    switch (e) {
      case "Chrome":
        return t.major >= 75;
      case "Safari":
        return RTCRtpTransceiver.prototype.hasOwnProperty("currentDirection") && !(t.major === 13 && t.minor === 0 && t.point === 0);
      case "Firefox":
        return t.major >= 67;
    }
    return !0;
  }(Xn(), Ks()) || de());
}
function Fh() {
  if (de() || !document) return !1;
  var e = document.createElement("iframe");
  return !!e.requestFullscreen || !!e.webkitRequestFullscreen;
}
var kA = function() {
  try {
    var e = document.createElement("canvas"), t = (navigator.webdriver ? e.getContext("webgl2") : e.getContext("webgl2", { failIfMajorPerformanceCaveat: !0 })) != null;
    return e.remove(), t;
  } catch {
    return !1;
  }
}();
function ly() {
  var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
  return !de() && !!kA && (e ? function() {
    return $h() ? !1 : ["Chrome", "Firefox"].includes(Xn());
  }() : function() {
    if ($h()) return !1;
    var t = Xn();
    if (t === "Safari") {
      var n = ru();
      if (n.major < 15 || n.major === 15 && n.minor < 4) return !1;
    }
    return t === "Chrome" ? nu().major >= 77 : t === "Firefox" ? iu().major >= 97 : ["Chrome", "Firefox", "Safari"].includes(t);
  }());
}
function uy() {
  if (de() || dy() || typeof AudioWorkletNode > "u") return !1;
  switch (Xn()) {
    case "Chrome":
    case "Firefox":
      return !0;
    case "Safari":
      var e = Ks();
      return e.major > 17 || e.major === 17 && e.minor >= 4;
  }
  return !1;
}
function Bh() {
  return cy() && !function() {
    var e, t = Xn();
    if (!yt()) return !0;
    switch (t) {
      case "Chrome":
        return (e = nu()).major && e.major > 0 && e.major < 75;
      case "Firefox":
        return (e = iu()).major < 91;
      case "Safari":
        return (e = ru()).major < 13 || e.major === 13 && e.minor < 1;
      default:
        return !0;
    }
  }();
}
function dy() {
  return yt().match(/Linux; Android/);
}
function $h() {
  var e, t = yt(), n = t.match(/Mac/) && (!de() && typeof window < "u" && (e = window) !== null && e !== void 0 && (e = e.navigator) !== null && e !== void 0 && e.maxTouchPoints ? window.navigator.maxTouchPoints : 0) >= 5;
  return !!(t.match(/Mobi/) || t.match(/Android/) || n) || !!yt().match(/DailyAnd\//) || void 0;
}
function Xn() {
  if (typeof window < "u") {
    var e = yt();
    return fy() ? "Safari" : e.indexOf("Edge") > -1 ? "Edge" : e.match(/Chrome\//) ? "Chrome" : e.indexOf("Safari") > -1 || hy() ? "Safari" : e.indexOf("Firefox") > -1 ? "Firefox" : e.indexOf("MSIE") > -1 || e.indexOf(".NET") > -1 ? "IE" : "Unknown Browser";
  }
}
function Ks() {
  switch (Xn()) {
    case "Chrome":
      return nu();
    case "Safari":
      return ru();
    case "Firefox":
      return iu();
    case "Edge":
      return function() {
        var e = 0, t = 0;
        if (typeof window < "u") {
          var n = yt().match(/Edge\/(\d+).(\d+)/);
          if (n) try {
            e = parseInt(n[1]), t = parseInt(n[2]);
          } catch {
          }
        }
        return { major: e, minor: t };
      }();
  }
}
function nu() {
  var e = 0, t = 0, n = 0, r = 0, i = !1;
  if (typeof window < "u") {
    var s = yt(), o = s.match(/Chrome\/(\d+).(\d+).(\d+).(\d+)/);
    if (o) try {
      e = parseInt(o[1]), t = parseInt(o[2]), n = parseInt(o[3]), r = parseInt(o[4]), i = s.indexOf("OPR/") > -1;
    } catch {
    }
  }
  return { major: e, minor: t, build: n, patch: r, opera: i };
}
function fy() {
  return !!yt().match(/iPad|iPhone|iPod/i) && cy();
}
function hy() {
  return yt().indexOf("AppleWebKit/605.1.15") > -1;
}
function ru() {
  var e = 0, t = 0, n = 0;
  if (typeof window < "u") {
    var r = yt().match(/Version\/(\d+).(\d+)(.(\d+))?/);
    if (r) try {
      e = parseInt(r[1]), t = parseInt(r[2]), n = parseInt(r[4]);
    } catch {
    }
    else (fy() || hy()) && (e = 14, t = 0, n = 3);
  }
  return { major: e, minor: t, point: n };
}
function iu() {
  var e = 0, t = 0;
  if (typeof window < "u") {
    var n = yt().match(/Firefox\/(\d+).(\d+)/);
    if (n) try {
      e = parseInt(n[1]), t = parseInt(n[2]);
    } catch {
    }
  }
  return { major: e, minor: t };
}
var py = function() {
  return ut(function e() {
    lt(this, e);
  }, [{ key: "addListenerForMessagesFromCallMachine", value: function(e, t, n) {
    ni();
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(e, t, n) {
    ni();
  } }, { key: "sendMessageToCallMachine", value: function(e, t, n, r) {
    ni();
  } }, { key: "sendMessageToDailyJs", value: function(e, t) {
    ni();
  } }, { key: "removeListener", value: function(e) {
    ni();
  } }]);
}();
function Vh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ga(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vh(Object(n), !0).forEach(function(r) {
      Dt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Vh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function my() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (my = function() {
    return !!e;
  })();
}
var CA = function() {
  function e() {
    var t, n, r, i;
    return lt(this, e), n = this, r = Ot(r = e), (t = go(n, my() ? Reflect.construct(r, [], Ot(n).constructor) : r.apply(n, i)))._wrappedListeners = {}, t._messageCallbacks = {}, t;
  }
  return vo(e, py), ut(e, [{ key: "addListenerForMessagesFromCallMachine", value: function(t, n, r) {
    var i = this, s = function(o) {
      if (o.data && o.data.what === "iframe-call-message" && (!o.data.callClientId || o.data.callClientId === n) && (!o.data.from || o.data.from !== "module")) {
        var a = ga({}, o.data);
        if (delete a.from, a.callbackStamp && i._messageCallbacks[a.callbackStamp]) {
          var c = a.callbackStamp;
          i._messageCallbacks[c].call(r, a), delete i._messageCallbacks[c];
        }
        delete a.what, delete a.callbackStamp, t.call(r, a);
      }
    };
    this._wrappedListeners[t] = s, window.addEventListener("message", s);
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(t, n, r) {
    var i = function(s) {
      var o;
      if (!(!s.data || s.data.what !== pa || !s.data.action || s.data.from && s.data.from !== "module" || s.data.callClientId && n && s.data.callClientId !== n || s != null && (o = s.data) !== null && o !== void 0 && o.callFrameId)) {
        var a = s.data;
        t.call(r, a);
      }
    };
    this._wrappedListeners[t] = i, window.addEventListener("message", i);
  } }, { key: "sendMessageToCallMachine", value: function(t, n, r, i) {
    if (!r) throw new Error("undefined callClientId. Are you trying to use a DailyCall instance previously destroyed?");
    var s = ga({}, t);
    if (s.what = pa, s.from = "module", s.callClientId = r, n) {
      var o = yo();
      this._messageCallbacks[o] = n, s.callbackStamp = o;
    }
    var a = i ? i.contentWindow : window, c = this._callMachineTargetOrigin(i);
    c && a.postMessage(s, c);
  } }, { key: "sendMessageToDailyJs", value: function(t, n) {
    t.what = pa, t.callClientId = n, t.from = "embedded", window.postMessage(t, this._targetOriginFromWindowLocation());
  } }, { key: "removeListener", value: function(t) {
    var n = this._wrappedListeners[t];
    n && (window.removeEventListener("message", n), delete this._wrappedListeners[t]);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(t, n, r) {
    var i = ga({}, t);
    i.callClientId = r;
    var s = n ? n.contentWindow : window, o = this._callMachineTargetOrigin(n);
    o && s.postMessage(i, o);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(t, n) {
    var r = function(i) {
      if (i.data && i.data.what === "iframe-call-message" && (!i.data.callClientId || i.data.callClientId === n) && (!i.data.from || i.data.from !== "module")) {
        var s = i.data;
        t(s);
      }
    };
    return this._wrappedListeners[t] = r, window.addEventListener("message", r), t;
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(t) {
    var n = this._wrappedListeners[t];
    n && (window.removeEventListener("message", n), delete this._wrappedListeners[t]);
  } }, { key: "_callMachineTargetOrigin", value: function(t) {
    return t ? t.src ? new URL(t.src).origin : void 0 : this._targetOriginFromWindowLocation();
  } }, { key: "_targetOriginFromWindowLocation", value: function() {
    return window.location.protocol === "file:" ? "*" : window.location.origin;
  } }]);
}();
function Uh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gy = function() {
    return !!e;
  })();
}
var EA = function() {
  function e() {
    var t, n, r, i;
    return lt(this, e), n = this, r = Ot(r = e), t = go(n, gy() ? Reflect.construct(r, [], Ot(n).constructor) : r.apply(n, i)), global.callMachineToDailyJsEmitter = global.callMachineToDailyJsEmitter || new pc.EventEmitter(), global.dailyJsToCallMachineEmitter = global.dailyJsToCallMachineEmitter || new pc.EventEmitter(), t._wrappedListeners = {}, t._messageCallbacks = {}, t;
  }
  return vo(e, py), ut(e, [{ key: "addListenerForMessagesFromCallMachine", value: function(t, n, r) {
    this._addListener(t, global.callMachineToDailyJsEmitter, n, r, "received call machine message");
  } }, { key: "addListenerForMessagesFromDailyJs", value: function(t, n, r) {
    this._addListener(t, global.dailyJsToCallMachineEmitter, n, r, "received daily-js message");
  } }, { key: "sendMessageToCallMachine", value: function(t, n, r) {
    this._sendMessage(t, global.dailyJsToCallMachineEmitter, r, n, "sending message to call machine");
  } }, { key: "sendMessageToDailyJs", value: function(t, n) {
    this._sendMessage(t, global.callMachineToDailyJsEmitter, n, null, "sending message to daily-js");
  } }, { key: "removeListener", value: function(t) {
    var n = this._wrappedListeners[t];
    n && (global.callMachineToDailyJsEmitter.removeListener("message", n), global.dailyJsToCallMachineEmitter.removeListener("message", n), delete this._wrappedListeners[t]);
  } }, { key: "_addListener", value: function(t, n, r, i, s) {
    var o = this, a = function(c) {
      if (c.callClientId === r) {
        if (c.callbackStamp && o._messageCallbacks[c.callbackStamp]) {
          var l = c.callbackStamp;
          o._messageCallbacks[l].call(i, c), delete o._messageCallbacks[l];
        }
        t.call(i, c);
      }
    };
    this._wrappedListeners[t] = a, n.addListener("message", a);
  } }, { key: "_sendMessage", value: function(t, n, r, i, s) {
    var o = function(c) {
      for (var l = 1; l < arguments.length; l++) {
        var u = arguments[l] != null ? arguments[l] : {};
        l % 2 ? Uh(Object(u), !0).forEach(function(f) {
          Dt(c, f, u[f]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(c, Object.getOwnPropertyDescriptors(u)) : Uh(Object(u)).forEach(function(f) {
          Object.defineProperty(c, f, Object.getOwnPropertyDescriptor(u, f));
        });
      }
      return c;
    }({}, t);
    if (o.callClientId = r, i) {
      var a = yo();
      this._messageCallbacks[a] = i, o.callbackStamp = a;
    }
    n.emit("message", o);
  } }]);
}(), Rc = "replace", Lc = "shallow-merge", zh = [Rc, Lc], TA = function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.data, r = t.mergeStrategy, i = r === void 0 ? Rc : r;
    lt(this, e), e._validateMergeStrategy(i), e._validateData(n, i), this.mergeStrategy = i, this.data = n;
  }
  return ut(e, [{ key: "isNoOp", value: function() {
    return e.isNoOpUpdate(this.data, this.mergeStrategy);
  } }], [{ key: "isNoOpUpdate", value: function(t, n) {
    return Object.keys(t).length === 0 && n === Lc;
  } }, { key: "_validateMergeStrategy", value: function(t) {
    if (!zh.includes(t)) throw Error("Unrecognized mergeStrategy provided. Options are: [".concat(zh, "]"));
  } }, { key: "_validateData", value: function(t, n) {
    if (!function(a) {
      if (a == null || he(a) !== "object") return !1;
      var c = Object.getPrototypeOf(a);
      return c == null || c === Object.prototype;
    }(t)) throw Error("Meeting session data must be a plain (map-like) object");
    var r;
    try {
      if (r = JSON.stringify(t), n === Rc) {
        var i = JSON.parse(r);
        Qe(i, t) || console.warn("The meeting session data provided will be modified when serialized.", i, t);
      } else if (n === Lc) {
        for (var s in t) if (Object.hasOwnProperty.call(t, s) && t[s] !== void 0) {
          var o = JSON.parse(JSON.stringify(t[s]));
          Qe(t[s], o) || console.warn("At least one key in the meeting session data provided will be modified when serialized.", o, t[s]);
        }
      }
    } catch (a) {
      throw Error("Meeting session data must be serializable to JSON: ".concat(a));
    }
    if (r.length > jh) throw Error("Meeting session data is too large (".concat(r.length, " characters). Maximum size suppported is ").concat(jh, "."));
  } }]);
}();
function vy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vy = function() {
    return !!e;
  })();
}
function jc(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return jc = function(n) {
    if (n === null || !function(i) {
      try {
        return Function.toString.call(i).indexOf("[native code]") !== -1;
      } catch {
        return typeof i == "function";
      }
    }(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, r);
    }
    function r() {
      return function(i, s, o) {
        if (vy()) return Reflect.construct.apply(null, arguments);
        var a = [null];
        a.push.apply(a, s);
        var c = new (i.bind.apply(i, a))();
        return o && Ti(c, o.prototype), c;
      }(n, arguments, Ot(this).constructor);
    }
    return r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), Ti(r, n);
  }, jc(e);
}
function yy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yy = function() {
    return !!e;
  })();
}
function Wh(e) {
  var t, n = (t = window._daily) === null || t === void 0 ? void 0 : t.pendings;
  if (n) {
    var r = n.indexOf(e);
    r !== -1 && n.splice(r, 1);
  }
}
var MA = function() {
  return ut(function e(t) {
    lt(this, e), this._currentLoad = null, this._callClientId = t;
  }, [{ key: "load", value: function() {
    var e, t = this, n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0, i = arguments.length > 2 ? arguments[2] : void 0;
    if (this.loaded) return window._daily.instances[this._callClientId].callMachine.reset(), void r(!0);
    e = this._callClientId, window._daily.pendings.push(e), this._currentLoad && this._currentLoad.cancel(), this._currentLoad = new PA(n, function() {
      r(!1);
    }, function(s, o) {
      o || Wh(t._callClientId), i(s, o);
    }), this._currentLoad.start();
  } }, { key: "cancel", value: function() {
    this._currentLoad && this._currentLoad.cancel(), Wh(this._callClientId);
  } }, { key: "loaded", get: function() {
    return this._currentLoad && this._currentLoad.succeeded;
  } }]);
}(), PA = function() {
  return ut(function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
    lt(this, e), this._attemptsRemaining = 3, this._currentAttempt = null, this._dailyConfig = t, this._successCallback = n, this._failureCallback = r;
  }, [{ key: "start", value: function() {
    var e = this;
    if (!this._currentAttempt) {
      var t = function(n) {
        e._currentAttempt.cancelled || (e._attemptsRemaining--, e._failureCallback(n, e._attemptsRemaining > 0), e._attemptsRemaining <= 0 || setTimeout(function() {
          e._currentAttempt.cancelled || (e._currentAttempt = new qh(e._dailyConfig, e._successCallback, t), e._currentAttempt.start());
        }, 3e3));
      };
      this._currentAttempt = new qh(this._dailyConfig, this._successCallback, t), this._currentAttempt.start();
    }
  } }, { key: "cancel", value: function() {
    this._currentAttempt && this._currentAttempt.cancel();
  } }, { key: "cancelled", get: function() {
    return this._currentAttempt && this._currentAttempt.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._currentAttempt && this._currentAttempt.succeeded;
  } }]);
}(), va = function() {
  function e() {
    return lt(this, e), t = this, r = arguments, n = Ot(n = e), go(t, yy() ? Reflect.construct(n, r || [], Ot(t).constructor) : n.apply(t, r));
    var t, n, r;
  }
  return vo(e, jc(Error)), ut(e);
}(), Ys = 2e4, qh = function() {
  return ut(function t(n, r, i) {
    lt(this, t), this._loadAttemptImpl = de() || !n.avoidEval ? new AA(n, r, i) : new OA(n, r, i);
  }, [{ key: "start", value: (e = re(function* () {
    return this._loadAttemptImpl.start();
  }), function() {
    return e.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    this._loadAttemptImpl.cancel();
  } }, { key: "cancelled", get: function() {
    return this._loadAttemptImpl.cancelled;
  } }, { key: "succeeded", get: function() {
    return this._loadAttemptImpl.succeeded;
  } }]);
  var e;
}(), AA = function() {
  return ut(function i(s, o, a) {
    lt(this, i), this.cancelled = !1, this.succeeded = !1, this._networkTimedOut = !1, this._networkTimeout = null, this._iosCache = typeof iOSCallObjectBundleCache < "u" && iOSCallObjectBundleCache, this._refetchHeaders = null, this._dailyConfig = s, this._successCallback = o, this._failureCallback = a;
  }, [{ key: "start", value: (r = re(function* () {
    var i = zs(this._dailyConfig);
    !(yield this._tryLoadFromIOSCache(i)) && this._loadFromNetwork(i);
  }), function() {
    return r.apply(this, arguments);
  }) }, { key: "cancel", value: function() {
    clearTimeout(this._networkTimeout), this.cancelled = !0;
  } }, { key: "_tryLoadFromIOSCache", value: (n = re(function* (i) {
    if (!this._iosCache) return !1;
    try {
      var s = yield this._iosCache.get(i);
      return !!this.cancelled || !!s && (s.code ? (Function('"use strict";' + s.code)(), this.succeeded = !0, this._successCallback(), !0) : (this._refetchHeaders = s.refetchHeaders, !1));
    } catch {
      return !1;
    }
  }), function(i) {
    return n.apply(this, arguments);
  }) }, { key: "_loadFromNetwork", value: (t = re(function* (i) {
    var s = this;
    this._networkTimeout = setTimeout(function() {
      s._networkTimedOut = !0, s._failureCallback({ msg: "Timed out (>".concat(Ys, " ms) when loading call object bundle ").concat(i), type: "timeout" });
    }, Ys);
    try {
      var o = this._refetchHeaders ? { headers: this._refetchHeaders } : {}, a = yield fetch(i, o);
      if (clearTimeout(this._networkTimeout), this.cancelled || this._networkTimedOut) throw new va();
      var c = yield this._getBundleCodeFromResponse(i, a);
      if (this.cancelled) throw new va();
      Function('"use strict";' + c)(), this._iosCache && this._iosCache.set(i, c, a.headers), this.succeeded = !0, this._successCallback();
    } catch (l) {
      if (clearTimeout(this._networkTimeout), l instanceof va || this.cancelled || this._networkTimedOut) return;
      this._failureCallback({ msg: "Failed to load call object bundle ".concat(i, ": ").concat(l), type: l.message });
    }
  }), function(i) {
    return t.apply(this, arguments);
  }) }, { key: "_getBundleCodeFromResponse", value: (e = re(function* (i, s) {
    if (s.ok) return yield s.text();
    if (this._iosCache && s.status === 304) return (yield this._iosCache.renew(i, s.headers)).code;
    throw new Error("Received ".concat(s.status, " response"));
  }), function(i, s) {
    return e.apply(this, arguments);
  }) }]);
  var e, t, n, r;
}(), OA = function() {
  return ut(function e(t, n, r) {
    lt(this, e), this.cancelled = !1, this.succeeded = !1, this._dailyConfig = t, this._successCallback = n, this._failureCallback = r, this._attemptId = yo(), this._networkTimeout = null, this._scriptElement = null;
  }, [{ key: "start", value: function() {
    window._dailyCallMachineLoadWaitlist || (window._dailyCallMachineLoadWaitlist = /* @__PURE__ */ new Set());
    var e = zs(this._dailyConfig);
    (typeof document > "u" ? "undefined" : he(document)) === "object" ? this._startLoading(e) : this._failureCallback({ msg: "Call object bundle must be loaded in a DOM/web context", type: "missing context" });
  } }, { key: "cancel", value: function() {
    this._stopLoading(), this.cancelled = !0;
  } }, { key: "_startLoading", value: function(e) {
    var t = this;
    this._signUpForCallMachineLoadWaitlist(), this._networkTimeout = setTimeout(function() {
      t._stopLoading(), t._failureCallback({ msg: "Timed out (>".concat(Ys, " ms) when loading call object bundle ").concat(e), type: "timeout" });
    }, Ys);
    var n = document.getElementsByTagName("head")[0], r = document.createElement("script");
    this._scriptElement = r, r.onload = function() {
      t._stopLoading(), t.succeeded = !0, t._successCallback();
    }, r.onerror = function(i) {
      t._stopLoading(), t._failureCallback({ msg: "Failed to load call object bundle ".concat(i.target.src), type: i.message });
    }, r.src = e, n.appendChild(r);
  } }, { key: "_stopLoading", value: function() {
    this._withdrawFromCallMachineLoadWaitlist(), clearTimeout(this._networkTimeout), this._scriptElement && (this._scriptElement.onload = null, this._scriptElement.onerror = null);
  } }, { key: "_signUpForCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.add(this._attemptId);
  } }, { key: "_withdrawFromCallMachineLoadWaitlist", value: function() {
    window._dailyCallMachineLoadWaitlist.delete(this._attemptId);
  } }]);
}(), fs = function(e, t, n) {
  return LA(e.local, t, n) === !0;
}, RA = function(e, t, n) {
  return e.local.streams && e.local.streams[t] && e.local.streams[t].stream && e.local.streams[t].stream["get".concat(n === "video" ? "Video" : "Audio", "Tracks")]()[0];
}, pr = function(e, t, n, r) {
  var i = jA(e, t, n, r);
  return i && i.pendingTrack;
}, LA = function(e, t, n) {
  if (!e) return !1;
  var r = function(s) {
    switch (s) {
      case "avatar":
        return !0;
      case "staged":
        return s;
      default:
        return !!s;
    }
  }, i = e.public.subscribedTracks;
  return i && i[t] ? ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo"].indexOf(n) === -1 && i[t].custom ? [!0, "staged"].includes(i[t].custom) ? r(i[t].custom) : r(i[t].custom[n]) : r(i[t][n]) : !i || r(i.ALL);
}, jA = function(e, t, n, r) {
  var i = Object.values(e.streams || {}).filter(function(s) {
    return s.participantId === t && s.type === n && s.pendingTrack && s.pendingTrack.kind === r;
  }).sort(function(s, o) {
    return new Date(o.starttime) - new Date(s.starttime);
  });
  return i && i[0];
}, DA = function(e, t) {
  var n = e.local.public.customTracks;
  if (n && n[t]) return n[t].track;
};
function Hh(e, t) {
  for (var n = t.getState(), r = 0, i = ["cam", "screen"]; r < i.length; r++) for (var s = i[r], o = 0, a = ["video", "audio"]; o < a.length; o++) {
    var c = a[o], l = s === "cam" ? c : "screen".concat(c.charAt(0).toUpperCase() + c.slice(1)), u = e.tracks[l];
    if (u) {
      var f = e.local ? RA(n, s, c) : pr(n, e.session_id, s, c);
      u.state === "playable" && (u.track = f), u.persistentTrack = f;
    }
  }
}
function Gh(e, t) {
  try {
    var n = t.getState();
    for (var r in e.tracks) if (!IA(r)) {
      var i = e.tracks[r].kind;
      if (i) {
        var s = e.tracks[r];
        if (s) {
          var o = e.local ? DA(n, r) : pr(n, e.session_id, r, i);
          s.state === "playable" && (e.tracks[r].track = o), s.persistentTrack = o;
        }
      } else console.error("unknown type for custom track");
    }
  } catch (a) {
    console.error(a);
  }
}
function IA(e) {
  return ["video", "audio", "screenVideo", "screenAudio"].includes(e);
}
function Jh(e, t, n) {
  var r = n.getState();
  if (e.local) {
    if (e.audio) try {
      e.audioTrack = r.local.streams.cam.stream.getAudioTracks()[0], e.audioTrack || (e.audio = !1);
    } catch {
    }
    if (e.video) try {
      e.videoTrack = r.local.streams.cam.stream.getVideoTracks()[0], e.videoTrack || (e.video = !1);
    } catch {
    }
    if (e.screen) try {
      e.screenVideoTrack = r.local.streams.screen.stream.getVideoTracks()[0], e.screenAudioTrack = r.local.streams.screen.stream.getAudioTracks()[0], e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
    } catch {
    }
  } else {
    var i = !0;
    try {
      var s = r.participants[e.session_id];
      s && s.public && s.public.rtcType && s.public.rtcType.impl === "peer-to-peer" && s.private && !["connected", "completed"].includes(s.private.peeringState) && (i = !1);
    } catch (u) {
      console.error(u);
    }
    if (!i) return e.audio = !1, e.audioTrack = !1, e.video = !1, e.videoTrack = !1, e.screen = !1, void (e.screenTrack = !1);
    try {
      if (r.streams, e.audio && fs(r, e.session_id, "cam-audio")) {
        var o = pr(r, e.session_id, "cam", "audio");
        o && (t && t.audioTrack && t.audioTrack.id === o.id ? e.audioTrack = o : o.muted || (e.audioTrack = o)), e.audioTrack || (e.audio = !1);
      }
      if (e.video && fs(r, e.session_id, "cam-video")) {
        var a = pr(r, e.session_id, "cam", "video");
        a && (t && t.videoTrack && t.videoTrack.id === a.id ? e.videoTrack = a : a.muted || (e.videoTrack = a)), e.videoTrack || (e.video = !1);
      }
      if (e.screen && fs(r, e.session_id, "screen-audio")) {
        var c = pr(r, e.session_id, "screen", "audio");
        c && (t && t.screenAudioTrack && t.screenAudioTrack.id === c.id ? e.screenAudioTrack = c : c.muted || (e.screenAudioTrack = c));
      }
      if (e.screen && fs(r, e.session_id, "screen-video")) {
        var l = pr(r, e.session_id, "screen", "video");
        l && (t && t.screenVideoTrack && t.screenVideoTrack.id === l.id ? e.screenVideoTrack = l : l.muted || (e.screenVideoTrack = l));
      }
      e.screenVideoTrack || e.screenAudioTrack || (e.screen = !1);
    } catch (u) {
      console.error("unexpected error matching up tracks", u);
    }
  }
}
function NA(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = function(c, l) {
      if (c) {
        if (typeof c == "string") return Kh(c, l);
        var u = {}.toString.call(c).slice(8, -1);
        return u === "Object" && c.constructor && (u = c.constructor.name), u === "Map" || u === "Set" ? Array.from(c) : u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? Kh(c, l) : void 0;
      }
    }(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, o = !0, a = !1;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var c = n.next();
    return o = c.done, c;
  }, e: function(c) {
    a = !0, s = c;
  }, f: function() {
    try {
      o || n.return == null || n.return();
    } finally {
      if (a) throw s;
    }
  } };
}
function Kh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var Lt = /* @__PURE__ */ new Map(), xr = null;
function FA(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = function(c, l) {
      if (c) {
        if (typeof c == "string") return Yh(c, l);
        var u = {}.toString.call(c).slice(8, -1);
        return u === "Object" && c.constructor && (u = c.constructor.name), u === "Map" || u === "Set" ? Array.from(c) : u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? Yh(c, l) : void 0;
      }
    }(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, o = !0, a = !1;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var c = n.next();
    return o = c.done, c;
  }, e: function(c) {
    a = !0, s = c;
  }, f: function() {
    try {
      o || n.return == null || n.return();
    } finally {
      if (a) throw s;
    }
  } };
}
function Yh(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var jt = /* @__PURE__ */ new Map(), hi = null;
function BA(e) {
  by() ? function(t) {
    Lt.has(t) || (Lt.set(t, {}), navigator.mediaDevices.enumerateDevices().then(function(n) {
      Lt.has(t) && (Lt.get(t).lastDevicesString = JSON.stringify(n), xr || (xr = function() {
        var r = re(function* () {
          var i, s = yield navigator.mediaDevices.enumerateDevices(), o = NA(Lt.keys());
          try {
            for (o.s(); !(i = o.n()).done; ) {
              var a = i.value, c = JSON.stringify(s);
              c !== Lt.get(a).lastDevicesString && (Lt.get(a).lastDevicesString = c, a(s));
            }
          } catch (l) {
            o.e(l);
          } finally {
            o.f();
          }
        });
        return function() {
          return r.apply(this, arguments);
        };
      }(), navigator.mediaDevices.addEventListener("devicechange", xr)));
    }).catch(function() {
    }));
  }(e) : function(t) {
    jt.has(t) || (jt.set(t, {}), navigator.mediaDevices.enumerateDevices().then(function(n) {
      jt.has(t) && (jt.get(t).lastDevicesString = JSON.stringify(n), hi || (hi = setInterval(re(function* () {
        var r, i = yield navigator.mediaDevices.enumerateDevices(), s = FA(jt.keys());
        try {
          for (s.s(); !(r = s.n()).done; ) {
            var o = r.value, a = JSON.stringify(i);
            a !== jt.get(o).lastDevicesString && (jt.get(o).lastDevicesString = a, o(i));
          }
        } catch (c) {
          s.e(c);
        } finally {
          s.f();
        }
      }), 3e3)));
    }));
  }(e);
}
function $A(e) {
  by() ? function(t) {
    Lt.has(t) && (Lt.delete(t), Lt.size === 0 && xr && (navigator.mediaDevices.removeEventListener("devicechange", xr), xr = null));
  }(e) : function(t) {
    jt.has(t) && (jt.delete(t), jt.size === 0 && hi && (clearInterval(hi), hi = null));
  }(e);
}
function by() {
  var e;
  return de() || ((e = navigator.mediaDevices) === null || e === void 0 ? void 0 : e.ondevicechange) !== void 0;
}
var VA = /* @__PURE__ */ new Set();
function UA(e, t) {
  return e && e.readyState === "live" && !function(n, r) {
    return n.muted && !VA.has(n.id);
  }(e);
}
function Xh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function an(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xh(Object(n), !0).forEach(function(r) {
      Dt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xh(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var ci = Object.freeze({ VIDEO: "video", AUDIO: "audio", SCREEN_VIDEO: "screenVideo", SCREEN_AUDIO: "screenAudio", CUSTOM_VIDEO: "customVideo", CUSTOM_AUDIO: "customAudio" }), zA = Object.freeze({ PARTICIPANTS: "participants", STREAMING: "streaming", TRANSCRIPTION: "transcription" }), pi = Object.values(ci), Qh = ["v", "a", "sv", "sa", "cv", "ca"];
Object.freeze(pi.reduce(function(e, t, n) {
  return e[t] = Qh[n], e;
}, {})), Object.freeze(Qh.reduce(function(e, t, n) {
  return e[t] = pi[n], e;
}, {}));
var WA = [ci.VIDEO, ci.AUDIO, ci.SCREEN_VIDEO, ci.SCREEN_AUDIO], Zh = Object.values(zA), ep = ["p", "s", "t"];
Object.freeze(Zh.reduce(function(e, t, n) {
  return e[t] = ep[n], e;
}, {})), Object.freeze(ep.reduce(function(e, t, n) {
  return e[t] = Zh[n], e;
}, {}));
var qA = function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.base, r = t.byUserId, i = t.byParticipantId;
    lt(this, e), this.base = n, this.byUserId = r, this.byParticipantId = i;
  }
  return ut(e, [{ key: "clone", value: function() {
    var t = new e();
    if (this.base instanceof Ve ? t.base = this.base.clone() : t.base = this.base, this.byUserId !== void 0) for (var n in t.byUserId = {}, this.byUserId) {
      var r = this.byUserId[n];
      t.byUserId[n] = r instanceof Ve ? r.clone() : r;
    }
    if (this.byParticipantId !== void 0) for (var i in t.byParticipantId = {}, this.byParticipantId) {
      var s = this.byParticipantId[i];
      t.byParticipantId[i] = s instanceof Ve ? s.clone() : s;
    }
    return t;
  } }, { key: "toJSONObject", value: function() {
    var t = {};
    if (typeof this.base == "boolean" ? t.base = this.base : this.base instanceof Ve && (t.base = this.base.toJSONObject()), this.byUserId !== void 0) for (var n in t.byUserId = {}, this.byUserId) {
      var r = this.byUserId[n];
      t.byUserId[n] = r instanceof Ve ? r.toJSONObject() : r;
    }
    if (this.byParticipantId !== void 0) for (var i in t.byParticipantId = {}, this.byParticipantId) {
      var s = this.byParticipantId[i];
      t.byParticipantId[i] = s instanceof Ve ? s.toJSONObject() : s;
    }
    return t;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var t = {};
    if (this.base !== void 0 && (typeof this.base == "boolean" ? t.b = this.base : t.b = this.base.toMinifiedJSONObject()), this.byUserId !== void 0) for (var n in t.u = {}, this.byUserId) {
      var r = this.byUserId[n];
      t.u[n] = typeof r == "boolean" ? r : r.toMinifiedJSONObject();
    }
    if (this.byParticipantId !== void 0) for (var i in t.p = {}, this.byParticipantId) {
      var s = this.byParticipantId[i];
      t.p[i] = typeof s == "boolean" ? s : s.toMinifiedJSONObject();
    }
    return t;
  } }, { key: "normalize", value: function() {
    return this.base instanceof Ve && (this.base = this.base.normalize()), this.byUserId && (this.byUserId = Object.fromEntries(Object.entries(this.byUserId).map(function(t) {
      var n = tt(t, 2), r = n[0], i = n[1];
      return [r, i instanceof Ve ? i.normalize() : i];
    }))), this.byParticipantId && (this.byParticipantId = Object.fromEntries(Object.entries(this.byParticipantId).map(function(t) {
      var n = tt(t, 2), r = n[0], i = n[1];
      return [r, i instanceof Ve ? i.normalize() : i];
    }))), this;
  } }], [{ key: "fromJSONObject", value: function(t) {
    var n, r, i;
    if (t.base !== void 0 && (n = typeof t.base == "boolean" ? t.base : Ve.fromJSONObject(t.base)), t.byUserId !== void 0) for (var s in r = {}, t.byUserId) {
      var o = t.byUserId[s];
      r[s] = typeof o == "boolean" ? o : Ve.fromJSONObject(o);
    }
    if (t.byParticipantId !== void 0) for (var a in i = {}, t.byParticipantId) {
      var c = t.byParticipantId[a];
      i[a] = typeof c == "boolean" ? c : Ve.fromJSONObject(c);
    }
    return new e({ base: n, byUserId: r, byParticipantId: i });
  } }, { key: "fromMinifiedJSONObject", value: function(t) {
    var n, r, i;
    if (t.b !== void 0 && (n = typeof t.b == "boolean" ? t.b : Ve.fromMinifiedJSONObject(t.b)), t.u !== void 0) for (var s in r = {}, t.u) {
      var o = t.u[s];
      r[s] = typeof o == "boolean" ? o : Ve.fromMinifiedJSONObject(o);
    }
    if (t.p !== void 0) for (var a in i = {}, t.p) {
      var c = t.p[a];
      i[a] = typeof c == "boolean" ? c : Ve.fromMinifiedJSONObject(c);
    }
    return new e({ base: n, byUserId: r, byParticipantId: i });
  } }, { key: "validateJSONObject", value: function(t) {
    if (he(t) !== "object") return [!1, "canReceive must be an object"];
    for (var n = ["base", "byUserId", "byParticipantId"], r = 0, i = Object.keys(t); r < i.length; r++) {
      var s = i[r];
      if (!n.includes(s)) return [!1, "canReceive can only contain keys (".concat(n.join(", "), ")")];
      if (s === "base") {
        var o = tt(Ve.validateJSONObject(t.base, !0), 2), a = o[0], c = o[1];
        if (!a) return [!1, c];
      } else {
        if (he(t[s]) !== "object") return [!1, "invalid (non-object) value for field '".concat(s, "' in canReceive")];
        for (var l = 0, u = Object.values(t[s]); l < u.length; l++) {
          var f = u[l], h = tt(Ve.validateJSONObject(f), 2), p = h[0], g = h[1];
          if (!p) return [!1, g];
        }
      }
    }
    return [!0];
  } }]);
}(), Ve = function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.video, r = t.audio, i = t.screenVideo, s = t.screenAudio, o = t.customVideo, a = t.customAudio;
    lt(this, e), this.video = n, this.audio = r, this.screenVideo = i, this.screenAudio = s, this.customVideo = o, this.customAudio = a;
  }
  return ut(e, [{ key: "clone", value: function() {
    var t = new e();
    return this.video !== void 0 && (t.video = this.video), this.audio !== void 0 && (t.audio = this.audio), this.screenVideo !== void 0 && (t.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (t.screenAudio = this.screenAudio), this.customVideo !== void 0 && (t.customVideo = an({}, this.customVideo)), this.customAudio !== void 0 && (t.customAudio = an({}, this.customAudio)), t;
  } }, { key: "toJSONObject", value: function() {
    var t = {};
    return this.video !== void 0 && (t.video = this.video), this.audio !== void 0 && (t.audio = this.audio), this.screenVideo !== void 0 && (t.screenVideo = this.screenVideo), this.screenAudio !== void 0 && (t.screenAudio = this.screenAudio), this.customVideo !== void 0 && (t.customVideo = an({}, this.customVideo)), this.customAudio !== void 0 && (t.customAudio = an({}, this.customAudio)), t;
  } }, { key: "toMinifiedJSONObject", value: function() {
    var t = {};
    return this.video !== void 0 && (t.v = this.video), this.audio !== void 0 && (t.a = this.audio), this.screenVideo !== void 0 && (t.sv = this.screenVideo), this.screenAudio !== void 0 && (t.sa = this.screenAudio), this.customVideo !== void 0 && (t.cv = an({}, this.customVideo)), this.customAudio !== void 0 && (t.ca = an({}, this.customAudio)), t;
  } }, { key: "normalize", value: function() {
    function t(n, r) {
      return n && Object.keys(n).length === 1 && n["*"] === r;
    }
    return !(this.video !== !0 || this.audio !== !0 || this.screenVideo !== !0 || this.screenAudio !== !0 || !t(this.customVideo, !0) || !t(this.customAudio, !0)) || (this.video !== !1 || this.audio !== !1 || this.screenVideo !== !1 || this.screenAudio !== !1 || !t(this.customVideo, !1) || !t(this.customAudio, !1)) && this;
  } }], [{ key: "fromBoolean", value: function(t) {
    return new e({ video: t, audio: t, screenVideo: t, screenAudio: t, customVideo: { "*": t }, customAudio: { "*": t } });
  } }, { key: "fromJSONObject", value: function(t) {
    return new e({ video: t.video, audio: t.audio, screenVideo: t.screenVideo, screenAudio: t.screenAudio, customVideo: t.customVideo !== void 0 ? an({}, t.customVideo) : void 0, customAudio: t.customAudio !== void 0 ? an({}, t.customAudio) : void 0 });
  } }, { key: "fromMinifiedJSONObject", value: function(t) {
    return new e({ video: t.v, audio: t.a, screenVideo: t.sv, screenAudio: t.sa, customVideo: t.cv, customAudio: t.ca });
  } }, { key: "validateJSONObject", value: function(t, n) {
    if (typeof t == "boolean") return [!0];
    if (he(t) !== "object") return [!1, "invalid (non-object, non-boolean) value in canReceive"];
    for (var r = Object.keys(t), i = 0, s = r; i < s.length; i++) {
      var o = s[i];
      if (!pi.includes(o)) return [!1, "invalid media type '".concat(o, "' in canReceive")];
      if (WA.includes(o)) {
        if (typeof t[o] != "boolean") return [!1, "invalid (non-boolean) value for media type '".concat(o, "' in canReceive")];
      } else {
        if (he(t[o]) !== "object") return [!1, "invalid (non-object) value for media type '".concat(o, "' in canReceive")];
        for (var a = 0, c = Object.values(t[o]); a < c.length; a++)
          if (typeof c[a] != "boolean") return [!1, "invalid (non-boolean) value for entry within '".concat(o, "' in canReceive")];
        if (n && t[o]["*"] === void 0) return [!1, `canReceive "base" permission must specify "*" as an entry within '`.concat(o, "'")];
      }
    }
    return n && r.length !== pi.length ? [!1, 'canReceive "base" permission must specify all media types: '.concat(pi.join(", "), " (or be set to a boolean shorthand)")] : [!0];
  } }]);
}(), HA = ["result"], GA = ["preserveIframe"];
function tp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tp(Object(n), !0).forEach(function(r) {
      Dt(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wy() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wy = function() {
    return !!e;
  })();
}
function np(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = function(c, l) {
      if (c) {
        if (typeof c == "string") return rp(c, l);
        var u = {}.toString.call(c).slice(8, -1);
        return u === "Object" && c.constructor && (u = c.constructor.name), u === "Map" || u === "Set" ? Array.from(c) : u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u) ? rp(c, l) : void 0;
      }
    }(e)) || t) {
      n && (e = n);
      var r = 0, i = function() {
      };
      return { s: i, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(c) {
        throw c;
      }, f: i };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s, o = !0, a = !1;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var c = n.next();
    return o = c.done, c;
  }, e: function(c) {
    a = !0, s = c;
  }, f: function() {
    try {
      o || n.return == null || n.return();
    } finally {
      if (a) throw s;
    }
  } };
}
function rp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var On = {}, ip = "video", JA = "voice", sp = de() ? { data: {} } : { data: {}, topology: "none" }, op = { present: 0, hidden: 0 }, xy = { maxBitrate: { min: 1e5, max: 25e5 }, maxFramerate: { min: 1, max: 30 }, scaleResolutionDownBy: { min: 1, max: 8 } }, ya = Object.keys(xy), ap = ["state", "volume", "simulcastEncodings"], cp = { androidInCallNotification: { title: "string", subtitle: "string", iconName: "string", disableForCustomOverride: "boolean" }, disableAutoDeviceManagement: { audio: "boolean", video: "boolean" } }, Xs = { id: { iconPath: "string", iconPathDarkMode: "string", label: "string", tooltip: "string", visualState: "'default' | 'sidebar-open' | 'active'" } }, Dc = { id: { allow: "string", controlledBy: "'*' | 'owners' | string[]", csp: "string", iconURL: "string", label: "string", loading: "'eager' | 'lazy'", location: "'main' | 'sidebar'", name: "string", referrerPolicy: "string", sandbox: "string", src: "string", srcdoc: "string", shared: "string[] | 'owners' | boolean" } }, Rn = { customIntegrations: { validate: Py, help: Ty() }, customTrayButtons: { validate: My, help: "customTrayButtons should be a dictionary of the type ".concat(JSON.stringify(Xs)) }, url: { validate: function(e) {
  return typeof e == "string";
}, help: "url should be a string" }, baseUrl: { validate: function(e) {
  return typeof e == "string";
}, help: "baseUrl should be a string" }, token: { validate: function(e) {
  return typeof e == "string";
}, help: "token should be a string", queryString: "t" }, dailyConfig: { validate: function(e, t) {
  try {
    return t.validateDailyConfig(e), !0;
  } catch (n) {
    console.error("Failed to validate dailyConfig", n);
  }
  return !1;
}, help: "Unsupported dailyConfig. Check error logs for detailed info." }, reactNativeConfig: { validate: function(e) {
  return Ay(e, cp);
}, help: "reactNativeConfig should look like ".concat(JSON.stringify(cp), ", all fields optional") }, lang: { validate: function(e) {
  return ["da", "de", "en-us", "en", "es", "fi", "fr", "it", "jp", "ka", "nl", "no", "pl", "pt", "pt-BR", "ru", "sv", "tr", "user"].includes(e);
}, help: "language not supported. Options are: da, de, en-us, en, es, fi, fr, it, jp, ka, nl, no, pl, pt, pt-BR, ru, sv, tr, user" }, userName: !0, userData: { validate: function(e) {
  try {
    return Sy(e), !0;
  } catch (t) {
    return console.error(t), !1;
  }
}, help: "invalid userData type provided" }, startVideoOff: !0, startAudioOff: !0, allowLocalVideo: !0, allowLocalAudio: !0, activeSpeakerMode: !0, showLeaveButton: !0, showLocalVideo: !0, showParticipantsBar: !0, showFullscreenButton: !0, showUserNameChangeUI: !0, iframeStyle: !0, customLayout: !0, cssFile: !0, cssText: !0, bodyClass: !0, videoSource: { validate: function(e, t) {
  if (typeof e == "boolean") return t._preloadCache.allowLocalVideo = e, !0;
  var n;
  if (e instanceof MediaStreamTrack) t._sharedTracks.videoTrack = e, n = { customTrack: Jt };
  else {
    if (delete t._sharedTracks.videoTrack, typeof e != "string") return console.error("videoSource must be a MediaStreamTrack, boolean, or a string"), !1;
    n = { deviceId: e };
  }
  return t._updatePreloadCacheInputSettings({ video: { settings: n } }, !1), !0;
} }, audioSource: { validate: function(e, t) {
  if (typeof e == "boolean") return t._preloadCache.allowLocalAudio = e, !0;
  var n;
  if (e instanceof MediaStreamTrack) t._sharedTracks.audioTrack = e, n = { customTrack: Jt };
  else {
    if (delete t._sharedTracks.audioTrack, typeof e != "string") return console.error("audioSource must be a MediaStreamTrack, boolean, or a string"), !1;
    n = { deviceId: e };
  }
  return t._updatePreloadCacheInputSettings({ audio: { settings: n } }, !1), !0;
} }, subscribeToTracksAutomatically: { validate: function(e, t) {
  return t._preloadCache.subscribeToTracksAutomatically = e, !0;
} }, theme: { validate: function(e) {
  var t = ["accent", "accentText", "background", "backgroundAccent", "baseText", "border", "mainAreaBg", "mainAreaBgAccent", "mainAreaText", "supportiveText"], n = function(r) {
    for (var i = 0, s = Object.keys(r); i < s.length; i++) {
      var o = s[i];
      if (!t.includes(o)) return console.error('unsupported color "'.concat(o, '". Valid colors: ').concat(t.join(", "))), !1;
      if (!r[o].match(/^#[0-9a-f]{6}|#[0-9a-f]{3}$/i)) return console.error("".concat(o, ' theme color should be provided in valid hex color format. Received: "').concat(r[o], '"')), !1;
    }
    return !0;
  };
  return he(e) === "object" && ("light" in e && "dark" in e || "colors" in e) ? "light" in e && "dark" in e ? "colors" in e.light ? "colors" in e.dark ? n(e.light.colors) && n(e.dark.colors) : (console.error('Dark theme is missing "colors" property.', e), !1) : (console.error('Light theme is missing "colors" property.', e), !1) : n(e.colors) : (console.error('Theme must contain either both "light" and "dark" properties, or "colors".', e), !1);
}, help: "unsupported theme configuration. Check error logs for detailed info." }, layoutConfig: { validate: function(e) {
  if ("grid" in e) {
    var t = e.grid;
    if ("maxTilesPerPage" in t) {
      if (!Number.isInteger(t.maxTilesPerPage)) return console.error("grid.maxTilesPerPage should be an integer. You passed ".concat(t.maxTilesPerPage, ".")), !1;
      if (t.maxTilesPerPage > 49) return console.error("grid.maxTilesPerPage can't be larger than 49 without sacrificing browser performance. Please contact us at https://www.daily.co/contact to talk about your use case."), !1;
    }
    if ("minTilesPerPage" in t) {
      if (!Number.isInteger(t.minTilesPerPage)) return console.error("grid.minTilesPerPage should be an integer. You passed ".concat(t.minTilesPerPage, ".")), !1;
      if (t.minTilesPerPage < 1) return console.error("grid.minTilesPerPage can't be lower than 1."), !1;
      if ("maxTilesPerPage" in t && t.minTilesPerPage > t.maxTilesPerPage) return console.error("grid.minTilesPerPage can't be higher than grid.maxTilesPerPage."), !1;
    }
  }
  return !0;
}, help: "unsupported layoutConfig. Check error logs for detailed info." }, receiveSettings: { validate: function(e) {
  return _y(e, { allowAllParticipantsKey: !1 });
}, help: Ey({ allowAllParticipantsKey: !1 }) }, sendSettings: { validate: function(e, t) {
  return !!function(n, r) {
    try {
      return r.validateUpdateSendSettings(n), !0;
    } catch (i) {
      return console.error("Failed to validate send settings", i), !1;
    }
  }(e, t) && (t._preloadCache.sendSettings = e, !0);
}, help: "Invalid sendSettings provided. Check error logs for detailed info." }, inputSettings: { validate: function(e, t) {
  var n;
  return !!ky(e) && (t._inputSettings || (t._inputSettings = {}), Cy(e, (n = t.properties) === null || n === void 0 ? void 0 : n.dailyConfig, t._sharedTracks), t._updatePreloadCacheInputSettings(e, !0), !0);
}, help: Ic() }, layout: { validate: function(e) {
  return e === "custom-v1" || e === "browser" || e === "none";
}, help: 'layout may only be set to "custom-v1"', queryString: "layout" }, emb: { queryString: "emb" }, embHref: { queryString: "embHref" }, dailyJsVersion: { queryString: "dailyJsVersion" }, proxy: { queryString: "proxy" }, strictMode: !0, allowMultipleCallInstances: !0 }, hs = { styles: { validate: function(e) {
  for (var t in e) if (t !== "cam" && t !== "screen") return !1;
  if (e.cam) {
    for (var n in e.cam) if (n !== "div" && n !== "video") return !1;
  }
  if (e.screen) {
    for (var r in e.screen) if (r !== "div" && r !== "video") return !1;
  }
  return !0;
}, help: "styles format should be a subset of: { cam: {div: {}, video: {}}, screen: {div: {}, video: {}} }" }, setSubscribedTracks: { validate: function(e, t) {
  if (t._preloadCache.subscribeToTracksAutomatically) return !1;
  var n = [!0, !1, "staged"];
  if (n.includes(e) || !de() && e === "avatar") return !0;
  var r = ["audio", "video", "screenAudio", "screenVideo", "rmpAudio", "rmpVideo"], i = function(s) {
    var o = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
    for (var a in s) if (a === "custom") {
      if (!n.includes(s[a]) && !i(s[a], !0)) return !1;
    } else {
      var c = !o && !r.includes(a), l = !n.includes(s[a]);
      if (c || l) return !1;
    }
    return !0;
  };
  return i(e);
}, help: "setSubscribedTracks cannot be used when setSubscribeToTracksAutomatically is enabled, and should be of the form: " + "true".concat(de() ? "" : " | 'avatar'", " | false | 'staged' | { [audio: true|false|'staged'], [video: true|false|'staged'], [screenAudio: true|false|'staged'], [screenVideo: true|false|'staged'] }") }, setAudio: !0, setVideo: !0, setScreenShare: { validate: function(e) {
  return e === !1;
}, help: "setScreenShare must be false, as it's only meant for stopping remote participants' screen shares" }, eject: !0, updatePermissions: { validate: function(e) {
  for (var t = 0, n = Object.entries(e); t < n.length; t++) {
    var r = tt(n[t], 2), i = r[0], s = r[1];
    switch (i) {
      case "hasPresence":
        if (typeof s != "boolean") return !1;
        break;
      case "canSend":
        if (s instanceof Set || s instanceof Array || Array.isArray(s)) {
          var o, a = ["video", "audio", "screenVideo", "screenAudio", "customVideo", "customAudio"], c = np(s);
          try {
            for (c.s(); !(o = c.n()).done; ) {
              var l = o.value;
              if (!a.includes(l)) return !1;
            }
          } catch (w) {
            c.e(w);
          } finally {
            c.f();
          }
        } else if (typeof s != "boolean") return !1;
        (s instanceof Array || Array.isArray(s)) && (e.canSend = new Set(s));
        break;
      case "canReceive":
        var u = tt(qA.validateJSONObject(s), 2), f = u[0], h = u[1];
        if (!f) return console.error(h), !1;
        break;
      case "canAdmin":
        if (s instanceof Set || s instanceof Array || Array.isArray(s)) {
          var p, g = ["participants", "streaming", "transcription"], y = np(s);
          try {
            for (y.s(); !(p = y.n()).done; ) {
              var b = p.value;
              if (!g.includes(b)) return !1;
            }
          } catch (w) {
            y.e(w);
          } finally {
            y.f();
          }
        } else if (typeof s != "boolean") return !1;
        (s instanceof Array || Array.isArray(s)) && (e.canAdmin = new Set(s));
        break;
      default:
        return !1;
    }
  }
  return !0;
}, help: "updatePermissions can take hasPresence, canSend, canReceive, and canAdmin permissions. hasPresence must be a boolean. canSend can be a boolean or an Array or Set of media types (video, audio, screenVideo, screenAudio, customVideo, customAudio). canReceive must be an object specifying base, byUserId, and/or byParticipantId fields (see documentation for more details). canAdmin can be a boolean or an Array or Set of admin types (participants, streaming, transcription)." } };
Promise.any || (Promise.any = function() {
  var e = re(function* (t) {
    return new Promise(function(n, r) {
      var i = [];
      t.forEach(function(s) {
        return Promise.resolve(s).then(function(o) {
          n(o);
        }).catch(function(o) {
          i.push(o), i.length === t.length && r(i);
        });
      });
    });
  });
  return function(t) {
    return e.apply(this, arguments);
  };
}());
var lp = function() {
  function e(d) {
    var v, m, E, T, j, U, z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (lt(this, e), E = this, T = Ot(T = e), Dt(m = go(E, wy() ? Reflect.construct(T, [], Ot(E).constructor) : T.apply(E, j)), "startListeningForDeviceChanges", function() {
      BA(m.handleDeviceChange);
    }), Dt(m, "stopListeningForDeviceChanges", function() {
      $A(m.handleDeviceChange);
    }), Dt(m, "handleDeviceChange", function(ie) {
      ie = ie.map(function(oe) {
        return JSON.parse(JSON.stringify(oe));
      }), m.emitDailyJSEvent({ action: "available-devices-updated", availableDevices: ie });
    }), Dt(m, "handleNativeAppStateChange", function() {
      var ie = re(function* (oe) {
        if (oe === "destroyed") return console.warn("App has been destroyed before leaving the meeting. Cleaning up all the resources!"), void (yield m.destroy());
        var Rt = oe === "active";
        m.disableReactNativeAutoDeviceManagement("video") || (Rt ? m.camUnmutedBeforeLosingNativeActiveState && m.setLocalVideo(!0) : (m.camUnmutedBeforeLosingNativeActiveState = m.localVideo(), m.camUnmutedBeforeLosingNativeActiveState && m.setLocalVideo(!1)));
      });
      return function(oe) {
        return ie.apply(this, arguments);
      };
    }()), Dt(m, "handleNativeAudioFocusChange", function(ie) {
      m.disableReactNativeAutoDeviceManagement("audio") || (m._hasNativeAudioFocus = ie, m.toggleParticipantAudioBasedOnNativeAudioFocus(), m._hasNativeAudioFocus ? m.micUnmutedBeforeLosingNativeAudioFocus && m.setLocalAudio(!0) : (m.micUnmutedBeforeLosingNativeAudioFocus = m.localAudio(), m.setLocalAudio(!1)));
    }), Dt(m, "handleNativeSystemScreenCaptureStop", function() {
      m.stopScreenShare();
    }), m.strictMode = z.strictMode === void 0 || z.strictMode, m.allowMultipleCallInstances = (v = z.allowMultipleCallInstances) !== null && v !== void 0 && v, Object.keys(On).length && (m._logDuplicateInstanceAttempt(), !m.allowMultipleCallInstances)) {
      if (m.strictMode) throw new Error("Duplicate DailyIframe instances are not allowed");
      console.warn("Using strictMode: false to allow multiple call instances is now deprecated. Set `allowMultipleCallInstances: true`");
    }
    if (window._daily || (window._daily = { pendings: [], instances: {} }), m.callClientId = yo(), On[(U = m).callClientId] = U, window._daily.instances[m.callClientId] = {}, m._sharedTracks = {}, window._daily.instances[m.callClientId].tracks = m._sharedTracks, z.dailyJsVersion = e.version(), m._iframe = d, m._callObjectMode = z.layout === "none" && !m._iframe, m._preloadCache = { subscribeToTracksAutomatically: !0, outputDeviceId: null, inputSettings: null, sendSettings: null, videoTrackForNetworkConnectivityTest: null, videoTrackForConnectionQualityTest: null }, z.showLocalVideo !== void 0 ? m._callObjectMode ? console.error("showLocalVideo is not available in call object mode") : m._showLocalVideo = !!z.showLocalVideo : m._showLocalVideo = !0, z.showParticipantsBar !== void 0 ? m._callObjectMode ? console.error("showParticipantsBar is not available in call object mode") : m._showParticipantsBar = !!z.showParticipantsBar : m._showParticipantsBar = !0, z.customIntegrations !== void 0 ? m._callObjectMode ? console.error("customIntegrations is not available in call object mode") : m._customIntegrations = z.customIntegrations : m._customIntegrations = {}, z.customTrayButtons !== void 0 ? m._callObjectMode ? console.error("customTrayButtons is not available in call object mode") : m._customTrayButtons = z.customTrayButtons : m._customTrayButtons = {}, z.activeSpeakerMode !== void 0 ? m._callObjectMode ? console.error("activeSpeakerMode is not available in call object mode") : m._activeSpeakerMode = !!z.activeSpeakerMode : m._activeSpeakerMode = !1, z.receiveSettings ? m._callObjectMode ? m._receiveSettings = z.receiveSettings : console.error("receiveSettings is only available in call object mode") : m._receiveSettings = {}, m.validateProperties(z), m.properties = Q({}, z), m._inputSettings || (m._inputSettings = {}), m._callObjectLoader = m._callObjectMode ? new MA(m.callClientId) : null, m._callState = kh, m._isPreparingToJoin = !1, m._accessState = { access: fa }, m._meetingSessionSummary = {}, m._finalSummaryOfPrevSession = {}, m._meetingSessionState = xa(sp, m._callObjectMode), m._nativeInCallAudioMode = ip, m._participants = {}, m._isScreenSharing = !1, m._participantCounts = op, m._rmpPlayerState = {}, m._waitingParticipants = {}, m._network = { threshold: "good", quality: 100, networkState: "unknown", stats: {} }, m._activeSpeaker = {}, m._localAudioLevel = 0, m._isLocalAudioLevelObserverRunning = !1, m._remoteParticipantsAudioLevel = {}, m._isRemoteParticipantsAudioLevelObserverRunning = !1, m._maxAppMessageSize = ha, m._messageChannel = de() ? new EA() : new CA(), m._iframe && (m._iframe.requestFullscreen ? m._iframe.addEventListener("fullscreenchange", function() {
      document.fullscreenElement === m._iframe ? (m.emitDailyJSEvent({ action: ls }), m.sendMessageToCallMachine({ action: ls })) : (m.emitDailyJSEvent({ action: us }), m.sendMessageToCallMachine({ action: us }));
    }) : m._iframe.webkitRequestFullscreen && m._iframe.addEventListener("webkitfullscreenchange", function() {
      document.webkitFullscreenElement === m._iframe ? (m.emitDailyJSEvent({ action: ls }), m.sendMessageToCallMachine({ action: ls })) : (m.emitDailyJSEvent({ action: us }), m.sendMessageToCallMachine({ action: us }));
    })), de()) {
      var G = m.nativeUtils();
      G.addAudioFocusChangeListener && G.removeAudioFocusChangeListener && G.addAppStateChangeListener && G.removeAppStateChangeListener && G.addSystemScreenCaptureStopListener && G.removeSystemScreenCaptureStopListener || console.warn("expected (add|remove)(AudioFocusChange|AppActiveStateChange|SystemScreenCaptureStop)Listener to be available in React Native"), m._hasNativeAudioFocus = !0, G.addAudioFocusChangeListener(m.handleNativeAudioFocusChange), G.addAppStateChangeListener(m.handleNativeAppStateChange), G.addSystemScreenCaptureStopListener(m.handleNativeSystemScreenCaptureStop);
    }
    return m._callObjectMode && m.startListeningForDeviceChanges(), m._messageChannel.addListenerForMessagesFromCallMachine(m.handleMessageFromCallMachine, m.callClientId, m), m;
  }
  return vo(e, ts), ut(e, [{ key: "destroy", value: (fe = re(function* () {
    var d;
    try {
      yield this.leave();
    } catch {
    }
    var v = this._iframe;
    if (v) {
      var m = v.parentElement;
      m && m.removeChild(v);
    }
    if (this._messageChannel.removeListener(this.handleMessageFromCallMachine), de()) {
      var E = this.nativeUtils();
      E.removeAudioFocusChangeListener(this.handleNativeAudioFocusChange), E.removeAppStateChangeListener(this.handleNativeAppStateChange), E.removeSystemScreenCaptureStopListener(this.handleNativeSystemScreenCaptureStop);
    }
    this._callObjectMode && this.stopListeningForDeviceChanges(), this.resetMeetingDependentVars(), this._destroyed = !0, this.emitDailyJSEvent({ action: "call-instance-destroyed" }), delete On[this.callClientId], !((d = window) === null || d === void 0 || (d = d._daily) === null || d === void 0) && d.instances && delete window._daily.instances[this.callClientId], this.strictMode && (this.callClientId = void 0);
  }), function() {
    return fe.apply(this, arguments);
  }) }, { key: "isDestroyed", value: function() {
    return !!this._destroyed;
  } }, { key: "loadCss", value: function(d) {
    var v = d.bodyClass, m = d.cssFile, E = d.cssText;
    return le(), this.sendMessageToCallMachine({ action: "load-css", cssFile: this.absoluteUrl(m), bodyClass: v, cssText: E }), this;
  } }, { key: "iframe", value: function() {
    return le(), this._iframe;
  } }, { key: "meetingState", value: function() {
    return this._callState;
  } }, { key: "accessState", value: function() {
    return bt(this._callObjectMode, "accessState()"), this._accessState;
  } }, { key: "participants", value: function() {
    return this._participants;
  } }, { key: "participantCounts", value: function() {
    return this._participantCounts;
  } }, { key: "waitingParticipants", value: function() {
    return bt(this._callObjectMode, "waitingParticipants()"), this._waitingParticipants;
  } }, { key: "validateParticipantProperties", value: function(d, v) {
    for (var m in v) {
      if (!hs[m]) throw new Error("unrecognized updateParticipant property ".concat(m));
      if (hs[m].validate && !hs[m].validate(v[m], this, this._participants[d])) throw new Error(hs[m].help);
    }
  } }, { key: "updateParticipant", value: function(d, v) {
    return this._participants.local && this._participants.local.session_id === d && (d = "local"), d && v && (this.validateParticipantProperties(d, v), this.sendMessageToCallMachine({ action: "update-participant", id: d, properties: v })), this;
  } }, { key: "updateParticipants", value: function(d) {
    var v = this._participants.local && this._participants.local.session_id;
    for (var m in d) m === v && (m = "local"), m && d[m] && this.validateParticipantProperties(m, d[m]);
    return this.sendMessageToCallMachine({ action: "update-participants", participants: d }), this;
  } }, { key: "updateWaitingParticipant", value: (ee = re(function* () {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (bt(this._callObjectMode, "updateWaitingParticipant()"), xe(this._callState, "updateWaitingParticipant()"), typeof v != "string" || he(m) !== "object") throw new Error("updateWaitingParticipant() must take an id string and a updates object");
    return new Promise(function(E, T) {
      d.sendMessageToCallMachine({ action: "daily-method-update-waiting-participant", id: v, updates: m }, function(j) {
        j.error && T(j.error), j.id || T(new Error("unknown error in updateWaitingParticipant()")), E({ id: j.id });
      });
    });
  }), function() {
    return ee.apply(this, arguments);
  }) }, { key: "updateWaitingParticipants", value: (N = re(function* () {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (bt(this._callObjectMode, "updateWaitingParticipants()"), xe(this._callState, "updateWaitingParticipants()"), he(v) !== "object") throw new Error("updateWaitingParticipants() must take a mapping between ids and update objects");
    return new Promise(function(m, E) {
      d.sendMessageToCallMachine({ action: "daily-method-update-waiting-participants", updatesById: v }, function(T) {
        T.error && E(T.error), T.ids || E(new Error("unknown error in updateWaitingParticipants()")), m({ ids: T.ids });
      });
    });
  }), function() {
    return N.apply(this, arguments);
  }) }, { key: "requestAccess", value: (te = re(function* () {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = v.access, E = m === void 0 ? { level: SP } : m, T = v.name, j = T === void 0 ? "" : T;
    return bt(this._callObjectMode, "requestAccess()"), xe(this._callState, "requestAccess()"), new Promise(function(U, z) {
      d.sendMessageToCallMachine({ action: "daily-method-request-access", access: E, name: j }, function(G) {
        G.error && z(G.error), G.access || z(new Error("unknown error in requestAccess()")), U({ access: G.access, granted: G.granted });
      });
    });
  }), function() {
    return te.apply(this, arguments);
  }) }, { key: "localAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.audio.state) : null;
  } }, { key: "localVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.video.state) : null;
  } }, { key: "setLocalAudio", value: function(d) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return "forceDiscardTrack" in v && (de() ? (console.warn("forceDiscardTrack option not supported in React Native; ignoring"), v = {}) : d && (console.warn("forceDiscardTrack option only supported when calling setLocalAudio(false); ignoring"), v = {})), this.sendMessageToCallMachine({ action: "local-audio", state: d, options: v }), this;
  } }, { key: "localScreenAudio", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenAudio.state) : null;
  } }, { key: "localScreenVideo", value: function() {
    return this._participants.local ? !["blocked", "off"].includes(this._participants.local.tracks.screenVideo.state) : null;
  } }, { key: "updateScreenShare", value: function(d) {
    if (this._isScreenSharing) return this.sendMessageToCallMachine({ action: "local-screen-update", options: d }), this;
    console.warn("There is no screen share in progress. Try calling startScreenShare first.");
  } }, { key: "setLocalVideo", value: function(d) {
    return this.sendMessageToCallMachine({ action: "local-video", state: d }), this;
  } }, { key: "_setAllowLocalAudio", value: function(d) {
    if (this._preloadCache.allowLocalAudio = d, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-audio", state: d }), this;
  } }, { key: "_setAllowLocalVideo", value: function(d) {
    if (this._preloadCache.allowLocalVideo = d, this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-allow-local-video", state: d }), this;
  } }, { key: "getReceiveSettings", value: (D = re(function* (d) {
    var v = this, m = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}).showInheritedValues, E = m !== void 0 && m;
    if (bt(this._callObjectMode, "getReceiveSettings()"), !this._callMachineInitialized) return this._receiveSettings;
    switch (he(d)) {
      case "string":
        return new Promise(function(T) {
          v.sendMessageToCallMachine({ action: "get-single-participant-receive-settings", id: d, showInheritedValues: E }, function(j) {
            T(j.receiveSettings);
          });
        });
      case "undefined":
        return this._receiveSettings;
      default:
        throw new Error('first argument to getReceiveSettings() must be a participant id (or "base"), or there should be no arguments');
    }
  }), function(d) {
    return D.apply(this, arguments);
  }) }, { key: "updateReceiveSettings", value: (W = re(function* (d) {
    var v = this;
    if (bt(this._callObjectMode, "updateReceiveSettings()"), !_y(d, { allowAllParticipantsKey: !0 })) throw new Error(Ey({ allowAllParticipantsKey: !0 }));
    return xe(this._callState, "updateReceiveSettings()", "To specify receive settings earlier, use the receiveSettings config property."), new Promise(function(m) {
      v.sendMessageToCallMachine({ action: "update-receive-settings", receiveSettings: d }, function(E) {
        m({ receiveSettings: E.receiveSettings });
      });
    });
  }), function(d) {
    return W.apply(this, arguments);
  }) }, { key: "_prepInputSettingsForSharing", value: function(d, v) {
    if (d) {
      var m = {};
      if (d.audio) {
        var E, T, j;
        d.audio.settings && (!Object.keys(d.audio.settings).length && v || (m.audio = { settings: Q({}, d.audio.settings) })), v && (E = m.audio) !== null && E !== void 0 && (E = E.settings) !== null && E !== void 0 && E.customTrack && (m.audio.settings = { customTrack: this._sharedTracks.audioTrack });
        var U = ((T = d.audio.processor) === null || T === void 0 ? void 0 : T.type) === "none" && ((j = d.audio.processor) === null || j === void 0 ? void 0 : j._isDefaultWhenNone);
        if (d.audio.processor && !U) {
          var z = Q({}, d.audio.processor);
          delete z._isDefaultWhenNone, m.audio = Q(Q({}, m.audio), {}, { processor: z });
        }
      }
      if (d.video) {
        var G, ie, oe;
        d.video.settings && (!Object.keys(d.video.settings).length && v || (m.video = { settings: Q({}, d.video.settings) })), v && (G = m.video) !== null && G !== void 0 && (G = G.settings) !== null && G !== void 0 && G.customTrack && (m.video.settings = { customTrack: this._sharedTracks.videoTrack });
        var Rt = ((ie = d.video.processor) === null || ie === void 0 ? void 0 : ie.type) === "none" && ((oe = d.video.processor) === null || oe === void 0 ? void 0 : oe._isDefaultWhenNone);
        if (d.video.processor && !Rt) {
          var Cn = Q({}, d.video.processor);
          delete Cn._isDefaultWhenNone, m.video = Q(Q({}, m.video), {}, { processor: Cn });
        }
      }
      return m;
    }
  } }, { key: "getInputSettings", value: function() {
    var d = this;
    return le(), new Promise(function(v) {
      v(d._getInputSettings());
    });
  } }, { key: "_getInputSettings", value: function() {
    var d, v, m, E, T, j, U = { processor: { type: "none", _isDefaultWhenNone: !0 } };
    this._inputSettings ? (d = ((m = this._inputSettings) === null || m === void 0 ? void 0 : m.video) || U, v = ((E = this._inputSettings) === null || E === void 0 ? void 0 : E.audio) || U) : (d = ((T = this._preloadCache) === null || T === void 0 || (T = T.inputSettings) === null || T === void 0 ? void 0 : T.video) || U, v = ((j = this._preloadCache) === null || j === void 0 || (j = j.inputSettings) === null || j === void 0 ? void 0 : j.audio) || U);
    var z = { audio: v, video: d };
    return this._prepInputSettingsForSharing(z, !0);
  } }, { key: "_updatePreloadCacheInputSettings", value: function(d, v) {
    var m = this._inputSettings || {}, E = {};
    if (d.video) {
      var T, j, U;
      E.video = {}, d.video.settings ? (E.video.settings = {}, v || d.video.settings.customTrack || (U = m.video) === null || U === void 0 || !U.settings ? E.video.settings = d.video.settings : E.video.settings = Q(Q({}, m.video.settings), d.video.settings), Object.keys(E.video.settings).length || delete E.video.settings) : (T = m.video) !== null && T !== void 0 && T.settings && (E.video.settings = m.video.settings), d.video.processor ? E.video.processor = d.video.processor : (j = m.video) !== null && j !== void 0 && j.processor && (E.video.processor = m.video.processor);
    } else m.video && (E.video = m.video);
    if (d.audio) {
      var z, G, ie;
      E.audio = {}, d.audio.settings ? (E.audio.settings = {}, v || d.audio.settings.customTrack || (ie = m.audio) === null || ie === void 0 || !ie.settings ? E.audio.settings = d.audio.settings : E.audio.settings = Q(Q({}, m.audio.settings), d.audio.settings), Object.keys(E.audio.settings).length || delete E.audio.settings) : (z = m.audio) !== null && z !== void 0 && z.settings && (E.audio.settings = m.audio.settings), d.audio.processor ? E.audio.processor = d.audio.processor : (G = m.audio) !== null && G !== void 0 && G.processor && (E.audio.processor = m.audio.processor);
    } else m.audio && (E.audio = m.audio);
    this._maybeUpdateInputSettings(E);
  } }, { key: "_devicesFromInputSettings", value: function(d) {
    var v, m, E = (d == null || (v = d.video) === null || v === void 0 || (v = v.settings) === null || v === void 0 ? void 0 : v.deviceId) || null, T = (d == null || (m = d.audio) === null || m === void 0 || (m = m.settings) === null || m === void 0 ? void 0 : m.deviceId) || null, j = this._preloadCache.outputDeviceId || null;
    return { camera: E ? { deviceId: E } : {}, mic: T ? { deviceId: T } : {}, speaker: j ? { deviceId: j } : {} };
  } }, { key: "updateInputSettings", value: (Y = re(function* (d) {
    var v = this;
    return le(), ky(d) ? d.video || d.audio ? (Cy(d, this.properties.dailyConfig, this._sharedTracks), this._callObjectMode && !this._callMachineInitialized ? (this._updatePreloadCacheInputSettings(d, !0), this._getInputSettings()) : new Promise(function(m, E) {
      v.sendMessageToCallMachine({ action: "update-input-settings", inputSettings: d }, function(T) {
        if (T.error) E(T.error);
        else {
          if (T.returnPreloadCache) return v._updatePreloadCacheInputSettings(d, !0), void m(v._getInputSettings());
          v._maybeUpdateInputSettings(T.inputSettings), m(v._prepInputSettingsForSharing(T.inputSettings, !0));
        }
      });
    })) : this._getInputSettings() : (console.error(Ic()), Promise.reject(Ic()));
  }), function(d) {
    return Y.apply(this, arguments);
  }) }, { key: "setBandwidth", value: function(d) {
    var v = d.kbs, m = d.trackConstraints;
    if (le(), this._callMachineInitialized) return this.sendMessageToCallMachine({ action: "set-bandwidth", kbs: v, trackConstraints: m }), this;
  } }, { key: "getDailyLang", value: function() {
    var d = this;
    if (le(), this._callMachineInitialized) return new Promise(function(v) {
      d.sendMessageToCallMachine({ action: "get-daily-lang" }, function(m) {
        delete m.action, delete m.callbackStamp, v(m);
      });
    });
  } }, { key: "setDailyLang", value: function(d) {
    return le(), this.sendMessageToCallMachine({ action: "set-daily-lang", lang: d }), this;
  } }, { key: "setProxyUrl", value: function(d) {
    return this.sendMessageToCallMachine({ action: "set-proxy-url", proxyUrl: d }), this;
  } }, { key: "setIceConfig", value: function(d) {
    return this.sendMessageToCallMachine({ action: "set-ice-config", iceConfig: d }), this;
  } }, { key: "meetingSessionSummary", value: function() {
    return [An, on].includes(this._callState) ? this._finalSummaryOfPrevSession : this._meetingSessionSummary;
  } }, { key: "getMeetingSession", value: (H = re(function* () {
    var d = this;
    return console.warn("getMeetingSession() is deprecated: use meetingSessionSummary(), which will return immediately"), xe(this._callState, "getMeetingSession()"), new Promise(function(v) {
      d.sendMessageToCallMachine({ action: "get-meeting-session" }, function(m) {
        delete m.action, delete m.callbackStamp, v(m);
      });
    });
  }), function() {
    return H.apply(this, arguments);
  }) }, { key: "meetingSessionState", value: function() {
    return xe(this._callState, "meetingSessionState"), this._meetingSessionState;
  } }, { key: "setMeetingSessionData", value: function(d) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "replace";
    bt(this._callObjectMode, "setMeetingSessionData()"), xe(this._callState, "setMeetingSessionData");
    try {
      (function(m, E) {
        new TA({ data: m, mergeStrategy: E });
      })(d, v);
    } catch (m) {
      throw console.error(m), m;
    }
    try {
      this.sendMessageToCallMachine({ action: "set-session-data", data: d, mergeStrategy: v });
    } catch (m) {
      throw new Error("Error setting meeting session data: ".concat(m));
    }
  } }, { key: "setUserName", value: function(d, v) {
    var m = this;
    return this.properties.userName = d, new Promise(function(E) {
      m.sendMessageToCallMachine({ action: "set-user-name", name: d ?? "", thisMeetingOnly: de() || !!v && !!v.thisMeetingOnly }, function(T) {
        delete T.action, delete T.callbackStamp, E(T);
      });
    });
  } }, { key: "setUserData", value: ($ = re(function* (d) {
    var v = this;
    try {
      Sy(d);
    } catch (m) {
      throw console.error(m), m;
    }
    if (this.properties.userData = d, this._callMachineInitialized) return new Promise(function(m) {
      try {
        v.sendMessageToCallMachine({ action: "set-user-data", userData: d }, function(E) {
          delete E.action, delete E.callbackStamp, m(E);
        });
      } catch (E) {
        throw new Error("Error setting user data: ".concat(E));
      }
    });
  }), function(d) {
    return $.apply(this, arguments);
  }) }, { key: "validateAudioLevelInterval", value: function(d) {
    if (d && (d < 100 || typeof d != "number")) throw new Error("The interval must be a number greater than or equal to 100 milliseconds.");
  } }, { key: "startLocalAudioLevelObserver", value: function(d) {
    var v = this;
    if (typeof AudioWorkletNode > "u" && !de()) throw new Error("startLocalAudioLevelObserver() is not supported on this browser");
    if (this.validateAudioLevelInterval(d), this._callMachineInitialized) return this._isLocalAudioLevelObserverRunning = !0, new Promise(function(m, E) {
      v.sendMessageToCallMachine({ action: "start-local-audio-level-observer", interval: d }, function(T) {
        v._isLocalAudioLevelObserverRunning = !T.error, T.error ? E({ error: T.error }) : m();
      });
    });
    this._preloadCache.localAudioLevelObserver = { enabled: !0, interval: d };
  } }, { key: "isLocalAudioLevelObserverRunning", value: function() {
    return this._isLocalAudioLevelObserverRunning;
  } }, { key: "stopLocalAudioLevelObserver", value: function() {
    this._preloadCache.localAudioLevelObserver = null, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-local-audio-level-observer" });
  } }, { key: "startRemoteParticipantsAudioLevelObserver", value: function(d) {
    var v = this;
    if (this.validateAudioLevelInterval(d), this._callMachineInitialized) return this._isRemoteParticipantsAudioLevelObserverRunning = !0, new Promise(function(m, E) {
      v.sendMessageToCallMachine({ action: "start-remote-participants-audio-level-observer", interval: d }, function(T) {
        v._isRemoteParticipantsAudioLevelObserverRunning = !T.error, T.error ? E({ error: T.error }) : m();
      });
    });
    this._preloadCache.remoteParticipantsAudioLevelObserver = { enabled: !0, interval: d };
  } }, { key: "isRemoteParticipantsAudioLevelObserverRunning", value: function() {
    return this._isRemoteParticipantsAudioLevelObserverRunning;
  } }, { key: "stopRemoteParticipantsAudioLevelObserver", value: function() {
    this._preloadCache.remoteParticipantsAudioLevelObserver = null, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this.sendMessageToCallMachine({ action: "stop-remote-participants-audio-level-observer" });
  } }, { key: "startCamera", value: (q = re(function* () {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (bt(this._callObjectMode, "startCamera()"), ba(this._callState, this._isPreparingToJoin, "startCamera()", "Did you mean to use setLocalAudio() and/or setLocalVideo() instead?"), this.needsLoad()) try {
      yield this.load(v);
    } catch (m) {
      return Promise.reject(m);
    }
    else {
      if (this._didPreAuth) {
        if (v.url && v.url !== this.properties.url) return console.error("url in startCamera() is different than the one used in preAuth()"), Promise.reject();
        if (v.token && v.token !== this.properties.token) return console.error("token in startCamera() is different than the one used in preAuth()"), Promise.reject();
      }
      this.validateProperties(v), this.properties = Q(Q({}, this.properties), v);
    }
    return new Promise(function(m) {
      d._preloadCache.inputSettings = d._prepInputSettingsForSharing(d._inputSettings, !1), d.sendMessageToCallMachine({ action: "start-camera", properties: rr(d.properties, d.callClientId), preloadCache: rr(d._preloadCache, d.callClientId) }, function(E) {
        m({ camera: E.camera, mic: E.mic, speaker: E.speaker });
      });
    });
  }), function() {
    return q.apply(this, arguments);
  }) }, { key: "validateCustomTrack", value: function(d, v, m) {
    if (m && m.length > 50) throw new Error("Custom track `trackName` must not be more than 50 characters");
    if (v && v !== "music" && v !== "speech" && !(v instanceof Object)) throw new Error("Custom track `mode` must be either `music` | `speech` | `DailyMicAudioModeSettings` or `undefined`");
    if (m && ["cam-audio", "cam-video", "screen-video", "screen-audio", "rmpAudio", "rmpVideo", "customVideoDefaults"].includes(m)) throw new Error("Custom track `trackName` must not match a track name already used by daily: cam-audio, cam-video, customVideoDefaults, screen-video, screen-audio, rmpAudio, rmpVideo");
    if (!(d instanceof MediaStreamTrack)) throw new Error("Custom tracks provided must be instances of MediaStreamTrack");
  } }, { key: "startCustomTrack", value: function() {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { track, mode, trackName };
    return le(), xe(this._callState, "startCustomTrack()"), this.validateCustomTrack(v.track, v.mode, v.trackName), new Promise(function(m, E) {
      d._sharedTracks.customTrack = v.track, v.track = Jt, d.sendMessageToCallMachine({ action: "start-custom-track", properties: v }, function(T) {
        T.error ? E({ error: T.error }) : m(T.mediaTag);
      });
    });
  } }, { key: "stopCustomTrack", value: function(d) {
    var v = this;
    return le(), xe(this._callState, "stopCustomTrack()"), new Promise(function(m) {
      v.sendMessageToCallMachine({ action: "stop-custom-track", mediaTag: d }, function(E) {
        m(E.mediaTag);
      });
    });
  } }, { key: "setCamera", value: function(d) {
    var v = this;
    return ri(), ps(this._callMachineInitialized, "setCamera()"), new Promise(function(m) {
      v.sendMessageToCallMachine({ action: "set-camera", cameraDeviceId: d }, function(E) {
        m({ device: E.device });
      });
    });
  } }, { key: "setAudioDevice", value: (V = re(function* (d) {
    return ri(), this.nativeUtils().setAudioDevice(d), { deviceId: yield this.nativeUtils().getAudioDevice() };
  }), function(d) {
    return V.apply(this, arguments);
  }) }, { key: "cycleCamera", value: function() {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new Promise(function(m) {
      d.sendMessageToCallMachine({ action: "cycle-camera", properties: v }, function(E) {
        m({ device: E.device });
      });
    });
  } }, { key: "cycleMic", value: function() {
    var d = this;
    return le(), new Promise(function(v) {
      d.sendMessageToCallMachine({ action: "cycle-mic" }, function(m) {
        v({ device: m.device });
      });
    });
  } }, { key: "getCameraFacingMode", value: function() {
    var d = this;
    return ri(), new Promise(function(v) {
      d.sendMessageToCallMachine({ action: "get-camera-facing-mode" }, function(m) {
        v(m.facingMode);
      });
    });
  } }, { key: "setInputDevicesAsync", value: (I = re(function* (d) {
    var v = this, m = d.audioDeviceId, E = d.videoDeviceId, T = d.audioSource, j = d.videoSource;
    if (le(), T !== void 0 && (m = T), j !== void 0 && (E = j), typeof m == "boolean" && (this._setAllowLocalAudio(m), m = void 0), typeof E == "boolean" && (this._setAllowLocalVideo(E), E = void 0), !m && !E) return yield this.getInputDevices();
    var U = {};
    return m && (m instanceof MediaStreamTrack ? (this._sharedTracks.audioTrack = m, m = Jt, U.audio = { settings: { customTrack: m } }) : (delete this._sharedTracks.audioTrack, U.audio = { settings: { deviceId: m } })), E && (E instanceof MediaStreamTrack ? (this._sharedTracks.videoTrack = E, E = Jt, U.video = { settings: { customTrack: E } }) : (delete this._sharedTracks.videoTrack, U.video = { settings: { deviceId: E } })), this._callObjectMode && this.needsLoad() ? (this._updatePreloadCacheInputSettings(U, !1), this._devicesFromInputSettings(this._inputSettings)) : new Promise(function(z) {
      v.sendMessageToCallMachine({ action: "set-input-devices", audioDeviceId: m, videoDeviceId: E }, function(G) {
        if (delete G.action, delete G.callbackStamp, G.returnPreloadCache) return v._updatePreloadCacheInputSettings(U, !1), void z(v._devicesFromInputSettings(v._inputSettings));
        z(G);
      });
    });
  }), function(d) {
    return I.apply(this, arguments);
  }) }, { key: "setOutputDeviceAsync", value: (L = re(function* (d) {
    var v = this, m = d.outputDeviceId;
    return le(), m && (this._preloadCache.outputDeviceId = m), this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(E) {
      v.sendMessageToCallMachine({ action: "set-output-device", outputDeviceId: m }, function(T) {
        delete T.action, delete T.callbackStamp, T.returnPreloadCache ? E(v._devicesFromInputSettings(v._inputSettings)) : E(T);
      });
    });
  }), function(d) {
    return L.apply(this, arguments);
  }) }, { key: "getInputDevices", value: (R = re(function* () {
    var d = this;
    return this._callObjectMode && this.needsLoad() ? this._devicesFromInputSettings(this._inputSettings) : new Promise(function(v) {
      d.sendMessageToCallMachine({ action: "get-input-devices" }, function(m) {
        m.returnPreloadCache ? v(d._devicesFromInputSettings(d._inputSettings)) : v({ camera: m.camera, mic: m.mic, speaker: m.speaker });
      });
    });
  }), function() {
    return R.apply(this, arguments);
  }) }, { key: "nativeInCallAudioMode", value: function() {
    return ri(), this._nativeInCallAudioMode;
  } }, { key: "setNativeInCallAudioMode", value: function(d) {
    if (ri(), [ip, JA].includes(d)) {
      if (d !== this._nativeInCallAudioMode) return this._nativeInCallAudioMode = d, !this.disableReactNativeAutoDeviceManagement("audio") && Ps(this._callState, this._isPreparingToJoin) && this.nativeUtils().setAudioMode(this._nativeInCallAudioMode), this;
    } else console.error("invalid in-call audio mode specified: ", d);
  } }, { key: "preAuth", value: (P = re(function* () {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (bt(this._callObjectMode, "preAuth()"), ba(this._callState, this._isPreparingToJoin, "preAuth()"), this.needsLoad() && (yield this.load(v)), !v.url) throw new Error("preAuth() requires at least a url to be provided");
    return this.validateProperties(v), this.properties = Q(Q({}, this.properties), v), new Promise(function(m, E) {
      d._preloadCache.inputSettings = d._prepInputSettingsForSharing(d._inputSettings, !1), d.sendMessageToCallMachine({ action: "daily-method-preauth", properties: rr(d.properties, d.callClientId), preloadCache: rr(d._preloadCache, d.callClientId) }, function(T) {
        return T.error ? E(T.error) : T.access ? (d._didPreAuth = !0, void m({ access: T.access })) : E(new Error("unknown error in preAuth()"));
      });
    });
  }), function() {
    return P.apply(this, arguments);
  }) }, { key: "load", value: (k = re(function* (d) {
    var v = this;
    if (this.needsLoad()) {
      if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
      if (d && (this.validateProperties(d), this.properties = Q(Q({}, this.properties), d)), !this._callObjectMode && !this.properties.url) throw new Error("can't load iframe meeting because url property isn't set");
      return this._updateCallState(Ch), this.emitDailyJSEvent({ action: PP }), this._callObjectMode ? new Promise(function(m, E) {
        v._callObjectLoader.cancel();
        var T = Date.now();
        v._callObjectLoader.load(v.properties.dailyConfig, function(j) {
          v._bundleLoadTime = j ? "no-op" : Date.now() - T, v._updateCallState(Eh), j && v.emitDailyJSEvent({ action: Mh }), m();
        }, function(j, U) {
          if (v.emitDailyJSEvent({ action: AP }), !U) {
            v._updateCallState(on), v.resetMeetingDependentVars();
            var z = { action: Lh, errorMsg: j.msg, error: { type: "connection-error", msg: "Failed to load call object bundle.", details: { on: "load", sourceError: j, bundleUrl: zs(v.properties.dailyConfig) } } };
            v._maybeSendToSentry(z), v.emitDailyJSEvent(z), E(j.msg);
          }
        });
      }) : (this._iframe.src = qv(this.assembleMeetingUrl(), this.properties.dailyConfig), new Promise(function(m, E) {
        v._loadedCallback = function(T) {
          v._callState !== on ? (v._updateCallState(Eh), (v.properties.cssFile || v.properties.cssText) && v.loadCss(v.properties), m()) : E(T);
        };
      }));
    }
  }), function(d) {
    return k.apply(this, arguments);
  }) }, { key: "join", value: (O = re(function* () {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this._testCallInProgress && this.stopTestCallQuality();
    var m = !1;
    if (this.needsLoad()) {
      this.updateIsPreparingToJoin(!0);
      try {
        yield this.load(v);
      } catch (E) {
        return this.updateIsPreparingToJoin(!1), Promise.reject(E);
      }
    } else {
      if (m = !(!this.properties.cssFile && !this.properties.cssText), this._didPreAuth) {
        if (v.url && v.url !== this.properties.url) return console.error("url in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
        if (v.token && v.token !== this.properties.token) return console.error("token in join() is different than the one used in preAuth()"), this.updateIsPreparingToJoin(!1), Promise.reject();
      }
      if (v.url && !this._callObjectMode && v.url && v.url !== this.properties.url) return console.error("url in join() is different than the one used in load() (".concat(this.properties.url, " -> ").concat(v.url, ")")), this.updateIsPreparingToJoin(!1), Promise.reject();
      this.validateProperties(v), this.properties = Q(Q({}, this.properties), v);
    }
    return v.showLocalVideo !== void 0 && (this._callObjectMode ? console.error("showLocalVideo is not available in callObject mode") : this._showLocalVideo = !!v.showLocalVideo), v.showParticipantsBar !== void 0 && (this._callObjectMode ? console.error("showParticipantsBar is not available in callObject mode") : this._showParticipantsBar = !!v.showParticipantsBar), this._callState === Nn || this._callState === Ac ? (console.warn("already joined meeting, call leave() before joining again"), void this.updateIsPreparingToJoin(!1)) : (this._updateCallState(Ac, !1), this.emitDailyJSEvent({ action: LP }), this._preloadCache.inputSettings = this._prepInputSettingsForSharing(this._inputSettings || {}, !1), this.sendMessageToCallMachine({ action: "join-meeting", properties: rr(this.properties, this.callClientId), preloadCache: rr(this._preloadCache, this.callClientId) }), new Promise(function(E, T) {
      d._joinedCallback = function(j, U) {
        if (d._callState !== on) {
          if (d._updateCallState(Nn), j) for (var z in j) {
            if (d._callObjectMode) {
              var G = d._callMachine().store;
              Hh(j[z], G), Gh(j[z], G), Jh(j[z], d._participants[z], G);
            }
            d._participants[z] = Q({}, j[z]), d.toggleParticipantAudioBasedOnNativeAudioFocus();
          }
          m && d.loadCss(d.properties), E(j);
        } else T(U);
      };
    }));
  }), function() {
    return O.apply(this, arguments);
  }) }, { key: "leave", value: (_ = re(function* () {
    var d = this;
    return this._testCallInProgress && this.stopTestCallQuality(), new Promise(function(v) {
      d._callState === An || d._callState === on ? v() : d._callObjectLoader && !d._callObjectLoader.loaded ? (d._callObjectLoader.cancel(), d._updateCallState(An), d.resetMeetingDependentVars(), d.emitDailyJSEvent({ action: An }), v()) : (d._resolveLeave = v, d.sendMessageToCallMachine({ action: "leave-meeting" }));
    });
  }), function() {
    return _.apply(this, arguments);
  }) }, { key: "startScreenShare", value: (S = re(function* () {
    var d = this, v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (ps(this._callMachineInitialized, "startScreenShare()"), v.screenVideoSendSettings && this._validateVideoSendSettings("screenVideo", v.screenVideoSendSettings), v.mediaStream && (this._sharedTracks.screenMediaStream = v.mediaStream, v.mediaStream = Jt), typeof DailyNativeUtils < "u" && DailyNativeUtils.isIOS !== void 0 && DailyNativeUtils.isIOS) {
      var m = this.nativeUtils();
      if (yield m.isScreenBeingCaptured()) return void this.emitDailyJSEvent({ action: Rh, type: "screen-share-error", errorMsg: "Could not start the screen sharing. The screen is already been captured!" });
      m.setSystemScreenCaptureStartCallback(function() {
        m.setSystemScreenCaptureStartCallback(null), d.sendMessageToCallMachine({ action: Dh, captureOptions: v });
      }), m.presentSystemScreenCapturePrompt();
    } else this.sendMessageToCallMachine({ action: Dh, captureOptions: v });
  }), function() {
    return S.apply(this, arguments);
  }) }, { key: "stopScreenShare", value: function() {
    ps(this._callMachineInitialized, "stopScreenShare()"), this.sendMessageToCallMachine({ action: "local-screen-stop" });
  } }, { key: "startRecording", value: function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, v = d.type;
    if (v && v !== "cloud" && v !== "raw-tracks" && v !== "local") throw new Error("invalid type: ".concat(v, ", allowed values 'cloud', 'raw-tracks', or 'local'"));
    this.sendMessageToCallMachine(Q({ action: "local-recording-start" }, d));
  } }, { key: "updateRecording", value: function(d) {
    var v = d.layout, m = v === void 0 ? { preset: "default" } : v, E = d.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-recording", layout: m, instanceId: E });
  } }, { key: "stopRecording", value: function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(Q({ action: "local-recording-stop" }, d));
  } }, { key: "startLiveStreaming", value: function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(Q({ action: "daily-method-start-live-streaming" }, d));
  } }, { key: "updateLiveStreaming", value: function(d) {
    var v = d.layout, m = v === void 0 ? { preset: "default" } : v, E = d.instanceId;
    this.sendMessageToCallMachine({ action: "daily-method-update-live-streaming", layout: m, instanceId: E });
  } }, { key: "addLiveStreamingEndpoints", value: function(d) {
    var v = d.endpoints, m = d.instanceId;
    this.sendMessageToCallMachine({ action: Ih, endpointsOp: xA, endpoints: v, instanceId: m });
  } }, { key: "removeLiveStreamingEndpoints", value: function(d) {
    var v = d.endpoints, m = d.instanceId;
    this.sendMessageToCallMachine({ action: Ih, endpointsOp: SA, endpoints: v, instanceId: m });
  } }, { key: "stopLiveStreaming", value: function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.sendMessageToCallMachine(Q({ action: "daily-method-stop-live-streaming" }, d));
  } }, { key: "validateDailyConfig", value: function(d) {
    d.camSimulcastEncodings && (console.warn("camSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide camera simulcast settings."), this.validateSimulcastEncodings(d.camSimulcastEncodings)), d.screenSimulcastEncodings && console.warn("screenSimulcastEncodings is deprecated. Use sendSettings, found in DailyCallOptions, to provide screen simulcast settings."), dy() && d.noAutoDefaultDeviceChange && console.warn("noAutoDefaultDeviceChange is not supported on Android, and will be ignored.");
  } }, { key: "validateSimulcastEncodings", value: function(d) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, m = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (d) {
      if (!(d instanceof Array || Array.isArray(d))) throw new Error("encodings must be an Array");
      if (!hp(d.length, 1, 3)) throw new Error("encodings must be an Array with between 1 to ".concat(3, " layers"));
      for (var E = 0; E < d.length; E++) {
        var T = d[E];
        for (var j in this._validateEncodingLayerHasValidProperties(T), T) if (ya.includes(j)) {
          if (typeof T[j] != "number") throw new Error("".concat(j, " must be a number"));
          if (v) {
            var U = v[j], z = U.min, G = U.max;
            if (!hp(T[j], z, G)) throw new Error("".concat(j, " value not in range. valid range: ").concat(z, " to ").concat(G));
          }
        } else if (!["active", "scalabilityMode"].includes(j)) throw new Error("Invalid key ".concat(j, ", valid keys are:") + Object.values(ya));
        if (m && !T.hasOwnProperty("maxBitrate")) throw new Error("maxBitrate is not specified");
      }
    }
  } }, { key: "startRemoteMediaPlayer", value: (C = re(function* (d) {
    var v = this, m = d.url, E = d.settings, T = E === void 0 ? { state: Oc.PLAY } : E;
    try {
      (function(j) {
        if (typeof j != "string") throw new Error('url parameter must be "string" type');
      })(m), fp(T), function(j) {
        for (var U in j) if (!ap.includes(U)) throw new Error("Invalid key ".concat(U, ", valid keys are: ").concat(ap));
        j.simulcastEncodings && this.validateSimulcastEncodings(j.simulcastEncodings, xy, !0);
      }(T);
    } catch (j) {
      throw console.error("invalid argument Error: ".concat(j)), console.error(`startRemoteMediaPlayer arguments must be of the form:
  { url: "playback url",
  settings?:
  {state: "play"|"pause", simulcastEncodings?: [{}] } }`), j;
    }
    return new Promise(function(j, U) {
      v.sendMessageToCallMachine({ action: "daily-method-start-remote-media-player", url: m, settings: T }, function(z) {
        z.error ? U({ error: z.error, errorMsg: z.errorMsg }) : j({ session_id: z.session_id, remoteMediaPlayerState: { state: z.state, settings: z.settings } });
      });
    });
  }), function(d) {
    return C.apply(this, arguments);
  }) }, { key: "stopRemoteMediaPlayer", value: (M = re(function* (d) {
    var v = this;
    if (typeof d != "string") throw new Error(" remotePlayerID must be of type string");
    return new Promise(function(m, E) {
      v.sendMessageToCallMachine({ action: "daily-method-stop-remote-media-player", session_id: d }, function(T) {
        T.error ? E({ error: T.error, errorMsg: T.errorMsg }) : m();
      });
    });
  }), function(d) {
    return M.apply(this, arguments);
  }) }, { key: "updateRemoteMediaPlayer", value: (w = re(function* (d) {
    var v = this, m = d.session_id, E = d.settings;
    try {
      fp(E);
    } catch (T) {
      throw console.error("invalid argument Error: ".concat(T)), console.error(`updateRemoteMediaPlayer arguments must be of the form:
  session_id: "participant session",
  { settings?: {state: "play"|"pause"} }`), T;
    }
    return new Promise(function(T, j) {
      v.sendMessageToCallMachine({ action: "daily-method-update-remote-media-player", session_id: m, settings: E }, function(U) {
        U.error ? j({ error: U.error, errorMsg: U.errorMsg }) : T({ session_id: U.session_id, remoteMediaPlayerState: { state: U.state, settings: U.settings } });
      });
    });
  }), function(d) {
    return w.apply(this, arguments);
  }) }, { key: "startTranscription", value: function(d) {
    xe(this._callState, "startTranscription()"), this.sendMessageToCallMachine(Q({ action: "daily-method-start-transcription" }, d));
  } }, { key: "updateTranscription", value: function(d) {
    if (xe(this._callState, "updateTranscription()"), !d) throw new Error("updateTranscription Error: options is mandatory");
    if (he(d) !== "object") throw new Error("updateTranscription Error: options must be object type");
    if (d.participants && !Array.isArray(d.participants)) throw new Error("updateTranscription Error: participants must be an array");
    this.sendMessageToCallMachine(Q({ action: "daily-method-update-transcription" }, d));
  } }, { key: "stopTranscription", value: function(d) {
    if (xe(this._callState, "stopTranscription()"), d && he(d) !== "object") throw new Error("stopTranscription Error: options must be object type");
    if (d && !d.instanceId) throw new Error('"instanceId" not provided');
    this.sendMessageToCallMachine(Q({ action: "daily-method-stop-transcription" }, d));
  } }, { key: "startDialOut", value: (b = re(function* (d) {
    var v = this;
    xe(this._callState, "startDialOut()");
    var m = function(E) {
      if (E) {
        if (!Array.isArray(E)) throw new Error("Error starting dial out: audio codec must be an array");
        if (E.length <= 0) throw new Error("Error starting dial out: audio codec array specified but empty");
        E.forEach(function(T) {
          if (typeof T != "string") throw new Error("Error starting dial out: audio codec must be a string");
          if (T !== "OPUS" && T !== "PCMU" && T !== "PCMA" && T !== "G722") throw new Error("Error starting dial out: audio codec must be one of OPUS, PCMU, PCMA, G722");
        });
      }
    };
    if (!d.sipUri && !d.phoneNumber) throw new Error("Error starting dial out: either a sip uri or phone number must be provided");
    if (d.sipUri && d.phoneNumber) throw new Error("Error starting dial out: only one of sip uri or phone number must be provided");
    if (d.sipUri) {
      if (typeof d.sipUri != "string") throw new Error("Error starting dial out: sipUri must be a string");
      if (!d.sipUri.startsWith("sip:")) throw new Error("Error starting dial out: Invalid SIP URI, must start with 'sip:'");
      if (d.video && typeof d.video != "boolean") throw new Error("Error starting dial out: video must be a boolean value");
      (function(E) {
        if (E && (m(E.audio), E.video)) {
          if (!Array.isArray(E.video)) throw new Error("Error starting dial out: video codec must be an array");
          if (E.video.length <= 0) throw new Error("Error starting dial out: video codec array specified but empty");
          E.video.forEach(function(T) {
            if (typeof T != "string") throw new Error("Error starting dial out: video codec must be a string");
            if (T !== "H264" && T !== "VP8") throw new Error("Error starting dial out: video codec must be H264 or VP8");
          });
        }
      })(d.codecs);
    }
    if (d.phoneNumber) {
      if (typeof d.phoneNumber != "string") throw new Error("Error starting dial out: phoneNumber must be a string");
      if (!/^\+\d{1,}$/.test(d.phoneNumber)) throw new Error("Error starting dial out: Invalid phone number, must be valid phone number as per E.164");
      d.codecs && m(d.codecs.audio);
    }
    if (d.callerId) {
      if (typeof d.callerId != "string") throw new Error("Error starting dial out: callerId must be a string");
      if (d.sipUri) throw new Error("Error starting dial out: callerId not allowed with sipUri");
    }
    if (d.displayName) {
      if (typeof d.displayName != "string") throw new Error("Error starting dial out: displayName must be a string");
      if (d.displayName.length >= 200) throw new Error("Error starting dial out: displayName length must be less than 200");
    }
    if (d.userId) {
      if (typeof d.userId != "string") throw new Error("Error starting dial out: userId must be a string");
      if (d.userId.length > 36) throw new Error("Error starting dial out: userId length must be less than or equal to 36");
    }
    return new Promise(function(E, T) {
      v.sendMessageToCallMachine(Q({ action: "dialout-start" }, d), function(j) {
        j.error ? T(j.error) : E(j);
      });
    });
  }), function(d) {
    return b.apply(this, arguments);
  }) }, { key: "stopDialOut", value: function(d) {
    var v = this;
    return xe(this._callState, "stopDialOut()"), new Promise(function(m, E) {
      v.sendMessageToCallMachine(Q({ action: "dialout-stop" }, d), function(T) {
        T.error ? E(T.error) : m(T);
      });
    });
  } }, { key: "sipCallTransfer", value: (y = re(function* (d) {
    var v = this;
    if (xe(this._callState, "sipCallTransfer()"), !d) throw new Error("sipCallTransfer() requires a sessionId and toEndPoint");
    return d.useSipRefer = !1, dp(d, "sipCallTransfer"), new Promise(function(m, E) {
      v.sendMessageToCallMachine(Q({ action: Nh }, d), function(T) {
        T.error ? E(T.error) : m(T);
      });
    });
  }), function(d) {
    return y.apply(this, arguments);
  }) }, { key: "sipRefer", value: (g = re(function* (d) {
    var v = this;
    if (xe(this._callState, "sipRefer()"), !d) throw new Error("sessionId and toEndPoint are mandatory parameter");
    return d.useSipRefer = !0, dp(d, "sipRefer"), new Promise(function(m, E) {
      v.sendMessageToCallMachine(Q({ action: Nh }, d), function(T) {
        T.error ? E(T.error) : m(T);
      });
    });
  }), function(d) {
    return g.apply(this, arguments);
  }) }, { key: "sendDTMF", value: (p = re(function* (d) {
    var v = this;
    return xe(this._callState, "sendDTMF()"), function(m) {
      var E = m.sessionId, T = m.tones;
      if (!E || !T) throw new Error("sessionId and tones are mandatory parameter");
      if (typeof E != "string" || typeof T != "string") throw new Error("sessionId and tones should be of string type");
      if (T.length > 20) throw new Error("tones string must be upto 20 characters");
      var j = /[^0-9A-D*#]/g, U = T.match(j);
      if (U && U[0]) throw new Error("".concat(U[0], " is not valid DTMF tone"));
    }(d), new Promise(function(m, E) {
      v.sendMessageToCallMachine(Q({ action: "send-dtmf" }, d), function(T) {
        T.error ? E(T.error) : m(T);
      });
    });
  }), function(d) {
    return p.apply(this, arguments);
  }) }, { key: "getNetworkStats", value: function() {
    var d = this;
    return this._callState !== Nn ? Promise.resolve(Q({ stats: { latest: {} } }, this._network)) : new Promise(function(v) {
      d.sendMessageToCallMachine({ action: "get-calc-stats" }, function(m) {
        v(Q(Q({}, d._network), {}, { stats: m.stats }));
      });
    });
  } }, { key: "testWebsocketConnectivity", value: (h = re(function* () {
    var d = this;
    if (wa(this._testCallInProgress, "testWebsocketConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (v) {
      return Promise.reject(v);
    }
    return new Promise(function(v, m) {
      d.sendMessageToCallMachine({ action: "test-websocket-connectivity" }, function(E) {
        E.error ? m(E.error) : v(E.results);
      });
    });
  }), function() {
    return h.apply(this, arguments);
  }) }, { key: "abortTestWebsocketConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-websocket-connectivity" });
  } }, { key: "_validateVideoTrackForNetworkTests", value: function(d) {
    return d ? d instanceof MediaStreamTrack ? !!UA(d) || (console.error("Video track is not playable. This test needs a live video track."), !1) : (console.error("Video track needs to be of type `MediaStreamTrack`."), !1) : (console.error("Missing video track. You must provide a video track in order to run this test."), !1);
  } }, { key: "testCallQuality", value: (f = re(function* () {
    var d = this;
    le(), bt(this._callObjectMode, "testCallQuality()"), ps(this._callMachineInitialized, "testCallQuality()", null, !0), ba(this._callState, this._isPreparingToJoin, "testCallQuality()");
    var v = this._testCallAlreadyInProgress, m = function(T) {
      v || (d._testCallInProgress = T);
    };
    if (m(!0), this.needsLoad()) try {
      var E = this._callState;
      yield this.load(), this._callState = E;
    } catch (T) {
      return m(!1), Promise.reject(T);
    }
    return new Promise(function(T) {
      d.sendMessageToCallMachine({ action: "test-call-quality", dailyJsVersion: d.properties.dailyJsVersion }, function(j) {
        var U = j.results, z = U.result, G = ff(U, HA);
        if (z === "failed") {
          var ie, oe = Q({}, G);
          (ie = G.error) !== null && ie !== void 0 && ie.details ? (G.error.details = JSON.parse(G.error.details), oe.error = Q(Q({}, oe.error), {}, { details: Q({}, oe.error.details) }), oe.error.details.duringTest = "testCallQuality") : (oe.error = oe.error ? Q({}, oe.error) : {}, oe.error.details = { duringTest: "testCallQuality" }), d._maybeSendToSentry(oe);
        }
        m(!1), T(Q({ result: z }, G));
      });
    });
  }), function() {
    return f.apply(this, arguments);
  }) }, { key: "stopTestCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-call-quality" });
  } }, { key: "testConnectionQuality", value: (u = re(function* (d) {
    var v;
    de() ? (console.warn("testConnectionQuality() is deprecated: use testPeerToPeerCallQuality() instead"), v = yield this.testPeerToPeerCallQuality(d)) : (console.warn("testConnectionQuality() is deprecated: use testCallQuality() instead"), v = yield this.testCallQuality());
    var m = { result: v.result, secondsElapsed: v.secondsElapsed };
    return v.data && (m.data = { maxRTT: v.data.maxRoundTripTime, packetLoss: v.data.avgRecvPacketLoss }), m;
  }), function(d) {
    return u.apply(this, arguments);
  }) }, { key: "testPeerToPeerCallQuality", value: (l = re(function* (d) {
    var v = this;
    if (wa(this._testCallInProgress, "testPeerToPeerCallQuality()"), this.needsLoad()) try {
      yield this.load();
    } catch (T) {
      return Promise.reject(T);
    }
    var m = d.videoTrack, E = d.duration;
    if (!this._validateVideoTrackForNetworkTests(m)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForConnectionQualityTest = m, new Promise(function(T, j) {
      v.sendMessageToCallMachine({ action: "test-p2p-call-quality", duration: E }, function(U) {
        U.error ? j(U.error) : T(U.results);
      });
    });
  }), function(d) {
    return l.apply(this, arguments);
  }) }, { key: "stopTestConnectionQuality", value: function() {
    de() ? (console.warn("stopTestConnectionQuality() is deprecated: use testPeerToPeerCallQuality() and stopTestPeerToPeerCallQuality() instead"), this.stopTestPeerToPeerCallQuality()) : (console.warn("stopTestConnectionQuality() is deprecated: use testCallQuality() and stopTestCallQuality() instead"), this.stopTestCallQuality());
  } }, { key: "stopTestPeerToPeerCallQuality", value: function() {
    this.sendMessageToCallMachine({ action: "stop-test-p2p-call-quality" });
  } }, { key: "testNetworkConnectivity", value: (c = re(function* (d) {
    var v = this;
    if (wa(this._testCallInProgress, "testNetworkConnectivity()"), this.needsLoad()) try {
      yield this.load();
    } catch (m) {
      return Promise.reject(m);
    }
    if (!this._validateVideoTrackForNetworkTests(d)) throw new Error("Video track error");
    return this._sharedTracks.videoTrackForNetworkConnectivityTest = d, new Promise(function(m, E) {
      v.sendMessageToCallMachine({ action: "test-network-connectivity" }, function(T) {
        T.error ? E(T.error) : m(T.results);
      });
    });
  }), function(d) {
    return c.apply(this, arguments);
  }) }, { key: "abortTestNetworkConnectivity", value: function() {
    this.sendMessageToCallMachine({ action: "abort-test-network-connectivity" });
  } }, { key: "getCpuLoadStats", value: function() {
    var d = this;
    return new Promise(function(v) {
      d._callState === Nn ? d.sendMessageToCallMachine({ action: "get-cpu-load-stats" }, function(m) {
        v(m.cpuStats);
      }) : v({ cpuLoadState: void 0, cpuLoadStateReason: void 0, stats: {} });
    });
  } }, { key: "_validateEncodingLayerHasValidProperties", value: function(d) {
    var v;
    if (!(((v = Object.keys(d)) === null || v === void 0 ? void 0 : v.length) > 0)) throw new Error("Empty encoding is not allowed. At least one of these valid keys should be specified:" + Object.values(ya));
  } }, { key: "_validateVideoSendSettings", value: function(d, v) {
    var m = d === "screenVideo" ? ["default-screen-video", "detail-optimized", "motion-optimized", "motion-and-detail-balanced"] : ["default-video", "bandwidth-optimized", "bandwidth-and-quality-balanced", "quality-optimized", "adaptive-2-layers", "adaptive-3-layers"], E = "Video send settings should be either an object or one of the supported presets: ".concat(m.join());
    if (typeof v == "string") {
      if (!m.includes(v)) throw new Error(E);
    } else {
      if (he(v) !== "object") throw new Error(E);
      if (!v.maxQuality && !v.encodings && v.allowAdaptiveLayers === void 0) throw new Error("Video send settings must contain at least maxQuality, allowAdaptiveLayers or encodings attribute");
      if (v.maxQuality && ["low", "medium", "high"].indexOf(v.maxQuality) === -1) throw new Error("maxQuality must be either low, medium or high");
      if (v.encodings) {
        var T = !1;
        switch (Object.keys(v.encodings).length) {
          case 1:
            T = !v.encodings.low;
            break;
          case 2:
            T = !v.encodings.low || !v.encodings.medium;
            break;
          case 3:
            T = !v.encodings.low || !v.encodings.medium || !v.encodings.high;
            break;
          default:
            T = !0;
        }
        if (T) throw new Error("Encodings must be defined as: low, low and medium, or low, medium and high.");
        v.encodings.low && this._validateEncodingLayerHasValidProperties(v.encodings.low), v.encodings.medium && this._validateEncodingLayerHasValidProperties(v.encodings.medium), v.encodings.high && this._validateEncodingLayerHasValidProperties(v.encodings.high);
      }
    }
  } }, { key: "validateUpdateSendSettings", value: function(d) {
    var v = this;
    if (!d || Object.keys(d).length === 0) throw new Error("Send settings must contain at least information for one track!");
    Object.entries(d).forEach(function(m) {
      var E = tt(m, 2), T = E[0], j = E[1];
      v._validateVideoSendSettings(T, j);
    });
  } }, { key: "updateSendSettings", value: function(d) {
    var v = this;
    return this.validateUpdateSendSettings(d), this.needsLoad() ? (this._preloadCache.sendSettings = d, { sendSettings: this._preloadCache.sendSettings }) : new Promise(function(m, E) {
      v.sendMessageToCallMachine({ action: "update-send-settings", sendSettings: d }, function(T) {
        T.error ? E(T.error) : m(T.sendSettings);
      });
    });
  } }, { key: "getSendSettings", value: function() {
    return this._sendSettings || this._preloadCache.sendSettings;
  } }, { key: "getLocalAudioLevel", value: function() {
    return this._localAudioLevel;
  } }, { key: "getRemoteParticipantsAudioLevel", value: function() {
    return this._remoteParticipantsAudioLevel;
  } }, { key: "getActiveSpeaker", value: function() {
    return le(), this._activeSpeaker;
  } }, { key: "setActiveSpeakerMode", value: function(d) {
    return le(), this.sendMessageToCallMachine({ action: "set-active-speaker-mode", enabled: d }), this;
  } }, { key: "activeSpeakerMode", value: function() {
    return le(), this._activeSpeakerMode;
  } }, { key: "subscribeToTracksAutomatically", value: function() {
    return this._preloadCache.subscribeToTracksAutomatically;
  } }, { key: "setSubscribeToTracksAutomatically", value: function(d) {
    return xe(this._callState, "setSubscribeToTracksAutomatically()", "Use the subscribeToTracksAutomatically configuration property."), this._preloadCache.subscribeToTracksAutomatically = d, this.sendMessageToCallMachine({ action: "daily-method-subscribe-to-tracks-automatically", enabled: d }), this;
  } }, { key: "enumerateDevices", value: (a = re(function* () {
    var d = this;
    if (this._callObjectMode) {
      var v = yield navigator.mediaDevices.enumerateDevices();
      return Xn() === "Firefox" && Ks().major > 115 && Ks().major < 123 && (v = v.filter(function(m) {
        return m.kind !== "audiooutput";
      })), { devices: v.map(function(m) {
        var E = JSON.parse(JSON.stringify(m));
        if (!de() && m.kind === "videoinput" && m.getCapabilities) {
          var T, j = m.getCapabilities();
          E.facing = (j == null || (T = j.facingMode) === null || T === void 0 ? void 0 : T.length) >= 1 ? j.facingMode[0] : void 0;
        }
        return E;
      }) };
    }
    return new Promise(function(m) {
      d.sendMessageToCallMachine({ action: "enumerate-devices" }, function(E) {
        m({ devices: E.devices });
      });
    });
  }), function() {
    return a.apply(this, arguments);
  }) }, { key: "sendAppMessage", value: function(d) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    if (xe(this._callState, "sendAppMessage()"), JSON.stringify(d).length > this._maxAppMessageSize) throw new Error("Message data too large. Max size is " + this._maxAppMessageSize);
    return this.sendMessageToCallMachine({ action: "app-msg", data: d, to: v }), this;
  } }, { key: "addFakeParticipant", value: function(d) {
    return le(), xe(this._callState, "addFakeParticipant()"), this.sendMessageToCallMachine(Q({ action: "add-fake-participant" }, d)), this;
  } }, { key: "setShowNamesMode", value: function(d) {
    return rt(this._callObjectMode, "setShowNamesMode()"), le(), d && d !== "always" && d !== "never" ? (console.error('setShowNamesMode argument should be "always", "never", or false'), this) : (this.sendMessageToCallMachine({ action: "set-show-names", mode: d }), this);
  } }, { key: "setShowLocalVideo", value: function() {
    var d = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return rt(this._callObjectMode, "setShowLocalVideo()"), le(), xe(this._callState, "setShowLocalVideo()"), typeof d != "boolean" ? (console.error("setShowLocalVideo only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-local-video", show: d }), this._showLocalVideo = d, this);
  } }, { key: "showLocalVideo", value: function() {
    return rt(this._callObjectMode, "showLocalVideo()"), le(), this._showLocalVideo;
  } }, { key: "setShowParticipantsBar", value: function() {
    var d = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
    return rt(this._callObjectMode, "setShowParticipantsBar()"), le(), xe(this._callState, "setShowParticipantsBar()"), typeof d != "boolean" ? (console.error("setShowParticipantsBar only accepts a boolean value"), this) : (this.sendMessageToCallMachine({ action: "set-show-participants-bar", show: d }), this._showParticipantsBar = d, this);
  } }, { key: "showParticipantsBar", value: function() {
    return rt(this._callObjectMode, "showParticipantsBar()"), le(), this._showParticipantsBar;
  } }, { key: "customIntegrations", value: function() {
    return le(), rt(this._callObjectMode, "customIntegrations()"), this._customIntegrations;
  } }, { key: "setCustomIntegrations", value: function(d) {
    return le(), rt(this._callObjectMode, "setCustomIntegrations()"), xe(this._callState, "setCustomIntegrations()"), Py(d) ? (this.sendMessageToCallMachine({ action: "set-custom-integrations", integrations: d }), this._customIntegrations = d, this) : this;
  } }, { key: "startCustomIntegrations", value: function(d) {
    var v = this;
    if (le(), rt(this._callObjectMode, "startCustomIntegrations()"), xe(this._callState, "startCustomIntegrations()"), Array.isArray(d) && d.some(function(T) {
      return typeof T != "string";
    }) || !Array.isArray(d) && typeof d != "string") return console.error("startCustomIntegrations() only accepts string | string[]"), this;
    var m = typeof d == "string" ? [d] : d, E = m.filter(function(T) {
      return !(T in v._customIntegrations);
    });
    return E.length ? (console.error(`Can't find custom integration(s): "`.concat(E.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "start-custom-integrations", ids: m }), this);
  } }, { key: "stopCustomIntegrations", value: function(d) {
    var v = this;
    if (le(), rt(this._callObjectMode, "stopCustomIntegrations()"), xe(this._callState, "stopCustomIntegrations()"), Array.isArray(d) && d.some(function(T) {
      return typeof T != "string";
    }) || !Array.isArray(d) && typeof d != "string") return console.error("stopCustomIntegrations() only accepts string | string[]"), this;
    var m = typeof d == "string" ? [d] : d, E = m.filter(function(T) {
      return !(T in v._customIntegrations);
    });
    return E.length ? (console.error(`Can't find custom integration(s): "`.concat(E.join(", "), '"')), this) : (this.sendMessageToCallMachine({ action: "stop-custom-integrations", ids: m }), this);
  } }, { key: "customTrayButtons", value: function() {
    return rt(this._callObjectMode, "customTrayButtons()"), le(), this._customTrayButtons;
  } }, { key: "updateCustomTrayButtons", value: function(d) {
    return rt(this._callObjectMode, "updateCustomTrayButtons()"), le(), xe(this._callState, "updateCustomTrayButtons()"), My(d) ? (this.sendMessageToCallMachine({ action: "update-custom-tray-buttons", btns: d }), this._customTrayButtons = d, this) : (console.error("updateCustomTrayButtons only accepts a dictionary of the type ".concat(JSON.stringify(Xs))), this);
  } }, { key: "theme", value: function() {
    return rt(this._callObjectMode, "theme()"), this.properties.theme;
  } }, { key: "setTheme", value: function(d) {
    var v = this;
    return rt(this._callObjectMode, "setTheme()"), new Promise(function(m, E) {
      try {
        v.validateProperties({ theme: d }), v.properties.theme = Q({}, d), v.sendMessageToCallMachine({ action: "set-theme", theme: v.properties.theme });
        try {
          v.emitDailyJSEvent({ action: MP, theme: v.properties.theme });
        } catch (T) {
          console.log("could not emit 'theme-updated'", T);
        }
        m(v.properties.theme);
      } catch (T) {
        E(T);
      }
    });
  } }, { key: "requestFullscreen", value: (o = re(function* () {
    if (le(), this._iframe && !document.fullscreenElement && Fh()) try {
      (yield this._iframe.requestFullscreen) ? this._iframe.requestFullscreen() : this._iframe.webkitRequestFullscreen();
    } catch (d) {
      console.log("could not make video call fullscreen", d);
    }
  }), function() {
    return o.apply(this, arguments);
  }) }, { key: "exitFullscreen", value: function() {
    le(), document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement && document.webkitExitFullscreen();
  } }, { key: "getSidebarView", value: (s = re(function* () {
    var d = this;
    return this._callObjectMode ? (console.error("getSidebarView is not available in callObject mode"), Promise.resolve(null)) : new Promise(function(v) {
      d.sendMessageToCallMachine({ action: "get-sidebar-view" }, function(m) {
        v(m.view);
      });
    });
  }), function() {
    return s.apply(this, arguments);
  }) }, { key: "setSidebarView", value: function(d) {
    return this._callObjectMode ? (console.error("setSidebarView is not available in callObject mode"), this) : (this.sendMessageToCallMachine({ action: "set-sidebar-view", view: d }), this);
  } }, { key: "room", value: (i = re(function* () {
    var d = this, v = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).includeRoomConfigDefaults, m = v === void 0 || v;
    return this._accessState.access === fa || this.needsLoad() ? this.properties.url ? { roomUrlPendingJoin: this.properties.url } : null : new Promise(function(E) {
      d.sendMessageToCallMachine({ action: "lib-room-info", includeRoomConfigDefaults: m }, function(T) {
        delete T.action, delete T.callbackStamp, E(T);
      });
    });
  }), function() {
    return i.apply(this, arguments);
  }) }, { key: "geo", value: (r = re(function* () {
    try {
      var d = yield fetch("https://gs.daily.co/_ks_/x-swsl/:");
      return { current: (yield d.json()).geo };
    } catch (v) {
      return console.error("geo lookup failed", v), { current: "" };
    }
  }), function() {
    return r.apply(this, arguments);
  }) }, { key: "setNetworkTopology", value: (n = re(function* (d) {
    var v = this;
    return le(), xe(this._callState, "setNetworkTopology()"), new Promise(function(m, E) {
      v.sendMessageToCallMachine({ action: "set-network-topology", opts: d }, function(T) {
        T.error ? E({ error: T.error }) : m({ workerId: T.workerId });
      });
    });
  }), function(d) {
    return n.apply(this, arguments);
  }) }, { key: "getNetworkTopology", value: (t = re(function* () {
    var d = this;
    return new Promise(function(v, m) {
      d.needsLoad() && v({ topology: "none" }), d.sendMessageToCallMachine({ action: "get-network-topology" }, function(E) {
        E.error ? m({ error: E.error }) : v({ topology: E.topology });
      });
    });
  }), function() {
    return t.apply(this, arguments);
  }) }, { key: "setPlayNewParticipantSound", value: function(d) {
    if (le(), typeof d != "number" && d !== !0 && d !== !1) throw new Error("argument to setShouldPlayNewParticipantSound should be true, false, or a number, but is ".concat(d));
    this.sendMessageToCallMachine({ action: "daily-method-set-play-ding", arg: d });
  } }, { key: "on", value: function(d, v) {
    return ts.prototype.on.call(this, d, v);
  } }, { key: "once", value: function(d, v) {
    return ts.prototype.once.call(this, d, v);
  } }, { key: "off", value: function(d, v) {
    return ts.prototype.off.call(this, d, v);
  } }, { key: "validateProperties", value: function(d) {
    var v, m;
    if (d != null && (v = d.dailyConfig) !== null && v !== void 0 && v.userMediaAudioConstraints) {
      var E, T;
      de() || console.warn("userMediaAudioConstraints is deprecated. You can override constraints with inputSettings.audio.settings, found in DailyCallOptions.");
      var j = d.inputSettings || {};
      j.audio = ((E = d.inputSettings) === null || E === void 0 ? void 0 : E.audio) || {}, j.audio.settings = ((T = d.inputSettings) === null || T === void 0 || (T = T.audio) === null || T === void 0 ? void 0 : T.settings) || {}, j.audio.settings = Q(Q({}, j.audio.settings), d.dailyConfig.userMediaAudioConstraints), d.inputSettings = j, delete d.dailyConfig.userMediaAudioConstraints;
    }
    if (d != null && (m = d.dailyConfig) !== null && m !== void 0 && m.userMediaVideoConstraints) {
      var U, z;
      de() || console.warn("userMediaVideoConstraints is deprecated. You can override constraints with inputSettings.video.settings, found in DailyCallOptions.");
      var G = d.inputSettings || {};
      G.video = ((U = d.inputSettings) === null || U === void 0 ? void 0 : U.video) || {}, G.video.settings = ((z = d.inputSettings) === null || z === void 0 || (z = z.video) === null || z === void 0 ? void 0 : z.settings) || {}, G.video.settings = Q(Q({}, G.video.settings), d.dailyConfig.userMediaVideoConstraints), d.inputSettings = G, delete d.dailyConfig.userMediaVideoConstraints;
    }
    for (var ie in d) {
      if (!Rn[ie]) throw new Error("unrecognized property '".concat(ie, "'"));
      if (Rn[ie].validate && !Rn[ie].validate(d[ie], this)) throw new Error("property '".concat(ie, "': ").concat(Rn[ie].help));
    }
  } }, { key: "assembleMeetingUrl", value: function() {
    var d, v, m = Q(Q({}, this.properties), {}, { emb: this.callClientId, embHref: encodeURIComponent(window.location.href), proxy: (d = this.properties.dailyConfig) !== null && d !== void 0 && d.proxyUrl ? encodeURIComponent((v = this.properties.dailyConfig) === null || v === void 0 ? void 0 : v.proxyUrl) : void 0 }), E = m.url.match(/\?/) ? "&" : "?";
    return m.url + E + Object.keys(Rn).filter(function(T) {
      return Rn[T].queryString && m[T] !== void 0;
    }).map(function(T) {
      return "".concat(Rn[T].queryString, "=").concat(m[T]);
    }).join("&");
  } }, { key: "needsLoad", value: function() {
    return [kh, Ch, An, on].includes(this._callState);
  } }, { key: "sendMessageToCallMachine", value: function(d, v) {
    if (this._destroyed && (this._logUseAfterDestroy(), this.strictMode)) throw new Error("Use after destroy");
    this._messageChannel.sendMessageToCallMachine(d, v, this.callClientId, this._iframe);
  } }, { key: "forwardPackagedMessageToCallMachine", value: function(d) {
    this._messageChannel.forwardPackagedMessageToCallMachine(d, this._iframe, this.callClientId);
  } }, { key: "addListenerForPackagedMessagesFromCallMachine", value: function(d) {
    return this._messageChannel.addListenerForPackagedMessagesFromCallMachine(d, this.callClientId);
  } }, { key: "removeListenerForPackagedMessagesFromCallMachine", value: function(d) {
    this._messageChannel.removeListenerForPackagedMessagesFromCallMachine(d);
  } }, { key: "handleMessageFromCallMachine", value: function(d) {
    switch (d.action) {
      case EP:
        this.sendMessageToCallMachine(Q({ action: TP }, this.properties));
        break;
      case "call-machine-initialized":
        this._callMachineInitialized = !0;
        var v = { action: ds, level: "log", code: 1011, stats: { event: "bundle load", time: this._bundleLoadTime === "no-op" ? 0 : this._bundleLoadTime, preLoaded: this._bundleLoadTime === "no-op", url: zs(this.properties.dailyConfig) } };
        this.sendMessageToCallMachine(v), this._delayDuplicateInstanceLog && this._logDuplicateInstanceAttempt();
        break;
      case Mh:
        this._loadedCallback && (this._loadedCallback(), this._loadedCallback = null), this.emitDailyJSEvent(d);
        break;
      case jP:
        var m, E = Q({}, d);
        delete E.internal, this._maxAppMessageSize = ((m = d.internal) === null || m === void 0 ? void 0 : m._maxAppMessageSize) || ha, this._joinedCallback && (this._joinedCallback(d.participants), this._joinedCallback = null), this.emitDailyJSEvent(E);
        break;
      case IP:
      case NP:
        if (this._callState === An) return;
        if (d.participant && d.participant.session_id) {
          var T = d.participant.local ? "local" : d.participant.session_id;
          if (this._callObjectMode) {
            var j = this._callMachine().store;
            Hh(d.participant, j), Gh(d.participant, j), Jh(d.participant, this._participants[T], j);
          }
          try {
            this.maybeParticipantTracksStopped(this._participants[T], d.participant), this.maybeParticipantTracksStarted(this._participants[T], d.participant), this.maybeEventRecordingStopped(this._participants[T], d.participant), this.maybeEventRecordingStarted(this._participants[T], d.participant);
          } catch (kb) {
            console.error("track events error", kb);
          }
          this.compareEqualForParticipantUpdateEvent(d.participant, this._participants[T]) || (this._participants[T] = Q({}, d.participant), this.toggleParticipantAudioBasedOnNativeAudioFocus(), this.emitDailyJSEvent(d));
        }
        break;
      case FP:
        if (d.participant && d.participant.session_id) {
          var U = this._participants[d.participant.session_id];
          U && this.maybeParticipantTracksStopped(U, null), delete this._participants[d.participant.session_id], this.emitDailyJSEvent(d);
        }
        break;
      case BP:
        Qe(this._participantCounts, d.participantCounts) || (this._participantCounts = d.participantCounts, this.emitDailyJSEvent(d));
        break;
      case $P:
        var z = { access: d.access };
        d.awaitingAccess && (z.awaitingAccess = d.awaitingAccess), Qe(this._accessState, z) || (this._accessState = z, this.emitDailyJSEvent(d));
        break;
      case VP:
        if (d.meetingSession) {
          this._meetingSessionSummary = d.meetingSession, this.emitDailyJSEvent(d);
          var G = Q(Q({}, d), {}, { action: "meeting-session-updated" });
          this.emitDailyJSEvent(G);
        }
        break;
      case Lh:
        var ie;
        this._iframe && !d.preserveIframe && (this._iframe.src = ""), this._updateCallState(on), this.resetMeetingDependentVars(), this._loadedCallback && (this._loadedCallback(d.errorMsg), this._loadedCallback = null), d.preserveIframe;
        var oe = ff(d, GA);
        oe != null && (ie = oe.error) !== null && ie !== void 0 && ie.details && (oe.error.details = JSON.parse(oe.error.details)), this._maybeSendToSentry(d), this._joinedCallback && (this._joinedCallback(null, oe), this._joinedCallback = null), this.emitDailyJSEvent(oe);
        break;
      case DP:
        this._callState !== on && this._updateCallState(An), this.resetMeetingDependentVars(), this._resolveLeave && (this._resolveLeave(), this._resolveLeave = null), this.emitDailyJSEvent(d);
        break;
      case "selected-devices-updated":
        d.devices && this.emitDailyJSEvent(d);
        break;
      case dA:
        var Rt = d.state, Cn = d.threshold, Gr = d.quality, Ne = Rt.state, dt = Rt.reasons;
        Ne === this._network.networkState && Qe(dt, this._network.networkStateReasons) && Cn === this._network.threshold && Gr === this._network.quality || (this._network.networkState = Ne, this._network.networkStateReasons = dt, this._network.quality = Gr, this._network.threshold = Cn, d.networkState = Ne, dt.length && (d.networkStateReasons = dt), delete d.state, this.emitDailyJSEvent(d));
        break;
      case hA:
        d && d.cpuLoadState && this.emitDailyJSEvent(d);
        break;
      case pA:
        d && d.faceCounts !== void 0 && this.emitDailyJSEvent(d);
        break;
      case lA:
        var En = d.activeSpeaker;
        this._activeSpeaker.peerId !== En.peerId && (this._activeSpeaker.peerId = En.peerId, this.emitDailyJSEvent({ action: d.action, activeSpeaker: this._activeSpeaker }));
        break;
      case "show-local-video-changed":
        if (this._callObjectMode) return;
        var Jr = d.show;
        this._showLocalVideo = Jr, this.emitDailyJSEvent({ action: d.action, show: Jr });
        break;
      case uA:
        var Vi = d.enabled;
        this._activeSpeakerMode !== Vi && (this._activeSpeakerMode = Vi, this.emitDailyJSEvent({ action: d.action, enabled: this._activeSpeakerMode }));
        break;
      case zP:
      case WP:
      case qP:
        this._waitingParticipants = d.allWaitingParticipants, this.emitDailyJSEvent({ action: d.action, participant: d.participant });
        break;
      case wA:
        Qe(this._receiveSettings, d.receiveSettings) || (this._receiveSettings = d.receiveSettings, this.emitDailyJSEvent({ action: d.action, receiveSettings: d.receiveSettings }));
        break;
      case Oh:
        this._maybeUpdateInputSettings(d.inputSettings);
        break;
      case "send-settings-updated":
        Qe(this._sendSettings, d.sendSettings) || (this._sendSettings = d.sendSettings, this._preloadCache.sendSettings = null, this.emitDailyJSEvent({ action: d.action, sendSettings: d.sendSettings }));
        break;
      case "local-audio-level":
        this._localAudioLevel = d.audioLevel, this._preloadCache.localAudioLevelObserver = null, this.emitDailyJSEvent(d);
        break;
      case "remote-participants-audio-level":
        this._remoteParticipantsAudioLevel = d.participantsAudioLevel, this._preloadCache.remoteParticipantsAudioLevelObserver = null, this.emitDailyJSEvent(d);
        break;
      case rA:
        var Kr = d.session_id;
        this._rmpPlayerState[Kr] = d.playerState, this.emitDailyJSEvent(d);
        break;
      case sA:
        delete this._rmpPlayerState[d.session_id], this.emitDailyJSEvent(d);
        break;
      case iA:
        var Yr = d.session_id, du = this._rmpPlayerState[Yr];
        du && this.compareEqualForRMPUpdateEvent(du, d.remoteMediaPlayerState) || (this._rmpPlayerState[Yr] = d.remoteMediaPlayerState, this.emitDailyJSEvent(d));
        break;
      case "custom-button-click":
      case "sidebar-view-changed":
        this.emitDailyJSEvent(d);
        break;
      case UP:
        var _b = this._meetingSessionState.topology !== (d.meetingSessionState && d.meetingSessionState.topology);
        this._meetingSessionState = xa(d.meetingSessionState, this._callObjectMode), (this._callObjectMode || _b) && this.emitDailyJSEvent(d);
        break;
      case oA:
        this._isScreenSharing = !0, this.emitDailyJSEvent(d);
        break;
      case aA:
      case cA:
        this._isScreenSharing = !1, this.emitDailyJSEvent(d);
        break;
      case Ph:
      case Ah:
      case XP:
      case QP:
      case ZP:
      case JP:
      case KP:
      case YP:
      case OP:
      case RP:
      case tA:
      case nA:
      case "test-completed":
      case fA:
      case eA:
      case mA:
      case gA:
      case vA:
      case yA:
      case Rh:
      case bA:
      case "dialin-ready":
      case "dialin-connected":
      case "dialin-error":
      case "dialin-stopped":
      case "dialin-warning":
      case "dialout-connected":
      case "dialout-answered":
      case "dialout-error":
      case "dialout-stopped":
      case "dialout-warning":
        this.emitDailyJSEvent(d);
        break;
      case "request-fullscreen":
        this.requestFullscreen();
        break;
      case "request-exit-fullscreen":
        this.exitFullscreen();
    }
  } }, { key: "maybeEventRecordingStopped", value: function(d, v) {
    var m = "record";
    d && (v.local || v[m] !== !1 || d[m] === v[m] || this.emitDailyJSEvent({ action: Ah }));
  } }, { key: "maybeEventRecordingStarted", value: function(d, v) {
    var m = "record";
    d && (v.local || v[m] !== !0 || d[m] === v[m] || this.emitDailyJSEvent({ action: Ph }));
  } }, { key: "_trackStatePlayable", value: function(d) {
    return !(!d || d.state !== xP);
  } }, { key: "_trackChanged", value: function(d, v) {
    return d?.id !== v?.id;
  } }, { key: "maybeEventTrackStopped", value: function(d, v, m) {
    var E, T, j = (E = v?.tracks[d]) !== null && E !== void 0 ? E : null, U = (T = m?.tracks[d]) !== null && T !== void 0 ? T : null, z = j?.track;
    if (z) {
      var G = this._trackStatePlayable(j), ie = this._trackStatePlayable(U), oe = this._trackChanged(z, U?.track);
      G && (ie && !oe || this.emitDailyJSEvent({ action: GP, track: z, participant: m ?? v, type: d }));
    }
  } }, { key: "maybeEventTrackStarted", value: function(d, v, m) {
    var E, T, j = (E = v?.tracks[d]) !== null && E !== void 0 ? E : null, U = (T = m?.tracks[d]) !== null && T !== void 0 ? T : null, z = U?.track;
    if (z) {
      var G = this._trackStatePlayable(j), ie = this._trackStatePlayable(U), oe = this._trackChanged(j?.track, z);
      ie && (G && !oe || this.emitDailyJSEvent({ action: HP, track: z, participant: m, type: d }));
    }
  } }, { key: "maybeParticipantTracksStopped", value: function(d, v) {
    if (d) for (var m in d.tracks) this.maybeEventTrackStopped(m, d, v);
  } }, { key: "maybeParticipantTracksStarted", value: function(d, v) {
    if (v) for (var m in v.tracks) this.maybeEventTrackStarted(m, d, v);
  } }, { key: "compareEqualForRMPUpdateEvent", value: function(d, v) {
    var m, E;
    return d.state === v.state && ((m = d.settings) === null || m === void 0 ? void 0 : m.volume) === ((E = v.settings) === null || E === void 0 ? void 0 : E.volume);
  } }, { key: "emitDailyJSEvent", value: function(d) {
    try {
      d.callClientId = this.callClientId, this.emit(d.action, d);
    } catch (v) {
      console.log("could not emit", d, v);
    }
  } }, { key: "compareEqualForParticipantUpdateEvent", value: function(d, v) {
    return !!Qe(d, v) && (!d.videoTrack || !v.videoTrack || d.videoTrack.id === v.videoTrack.id && d.videoTrack.muted === v.videoTrack.muted && d.videoTrack.enabled === v.videoTrack.enabled) && (!d.audioTrack || !v.audioTrack || d.audioTrack.id === v.audioTrack.id && d.audioTrack.muted === v.audioTrack.muted && d.audioTrack.enabled === v.audioTrack.enabled);
  } }, { key: "nativeUtils", value: function() {
    return de() ? typeof DailyNativeUtils > "u" ? (console.warn("in React Native, DailyNativeUtils is expected to be available"), null) : DailyNativeUtils : null;
  } }, { key: "updateIsPreparingToJoin", value: function(d) {
    this._updateCallState(this._callState, d);
  } }, { key: "_updateCallState", value: function(d) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._isPreparingToJoin;
    if (d !== this._callState || v !== this._isPreparingToJoin) {
      var m = this._callState, E = this._isPreparingToJoin;
      this._callState = d, this._isPreparingToJoin = v;
      var T = this._callState === Nn;
      this.updateShowAndroidOngoingMeetingNotification(T);
      var j = Ps(m, E), U = Ps(this._callState, this._isPreparingToJoin);
      j !== U && (this.updateKeepDeviceAwake(U), this.updateDeviceAudioMode(U), this.updateNoOpRecordingEnsuringBackgroundContinuity(U));
    }
  } }, { key: "resetMeetingDependentVars", value: function() {
    this._participants = {}, this._participantCounts = op, this._waitingParticipants = {}, this._activeSpeaker = {}, this._activeSpeakerMode = !1, this._didPreAuth = !1, this._accessState = { access: fa }, this._finalSummaryOfPrevSession = this._meetingSessionSummary, this._meetingSessionSummary = {}, this._meetingSessionState = xa(sp, this._callObjectMode), this._isScreenSharing = !1, this._receiveSettings = {}, this._inputSettings = void 0, this._sendSettings = {}, this._localAudioLevel = 0, this._isLocalAudioLevelObserverRunning = !1, this._remoteParticipantsAudioLevel = {}, this._isRemoteParticipantsAudioLevelObserverRunning = !1, this._maxAppMessageSize = ha, this._callMachineInitialized = !1, this._bundleLoadTime = void 0, this._preloadCache;
  } }, { key: "updateKeepDeviceAwake", value: function(d) {
    de() && this.nativeUtils().setKeepDeviceAwake(d, this.callClientId);
  } }, { key: "updateDeviceAudioMode", value: function(d) {
    if (de() && !this.disableReactNativeAutoDeviceManagement("audio")) {
      var v = d ? this._nativeInCallAudioMode : "idle";
      this.nativeUtils().setAudioMode(v);
    }
  } }, { key: "updateShowAndroidOngoingMeetingNotification", value: function(d) {
    if (de() && this.nativeUtils().setShowOngoingMeetingNotification) {
      var v, m, E, T;
      if (this.properties.reactNativeConfig && this.properties.reactNativeConfig.androidInCallNotification) {
        var j = this.properties.reactNativeConfig.androidInCallNotification;
        v = j.title, m = j.subtitle, E = j.iconName, T = j.disableForCustomOverride;
      }
      T && (d = !1), this.nativeUtils().setShowOngoingMeetingNotification(d, v, m, E, this.callClientId);
    }
  } }, { key: "updateNoOpRecordingEnsuringBackgroundContinuity", value: function(d) {
    de() && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity && this.nativeUtils().enableNoOpRecordingEnsuringBackgroundContinuity(d);
  } }, { key: "toggleParticipantAudioBasedOnNativeAudioFocus", value: function() {
    var d;
    if (de()) {
      var v = (d = this._callMachine()) === null || d === void 0 || (d = d.store) === null || d === void 0 ? void 0 : d.getState();
      for (var m in v?.streams) {
        var E = v.streams[m];
        E && E.pendingTrack && E.pendingTrack.kind === "audio" && (E.pendingTrack.enabled = this._hasNativeAudioFocus);
      }
    }
  } }, { key: "disableReactNativeAutoDeviceManagement", value: function(d) {
    return this.properties.reactNativeConfig && this.properties.reactNativeConfig.disableAutoDeviceManagement && this.properties.reactNativeConfig.disableAutoDeviceManagement[d];
  } }, { key: "absoluteUrl", value: function(d) {
    if (d !== void 0) {
      var v = document.createElement("a");
      return v.href = d, v.href;
    }
  } }, { key: "sayHello", value: function() {
    var d = "hello, world.";
    return console.log(d), d;
  } }, { key: "_logUseAfterDestroy", value: function() {
    var d = Object.values(On)[0];
    if (this.needsLoad())
      if (d && !d.needsLoad()) {
        var v = { action: ds, level: "error", code: this.strictMode ? 9995 : 9997 };
        d.sendMessageToCallMachine(v);
      } else this.strictMode || console.error("You are are attempting to use a call instance that was previously destroyed, which is unsupported. Please remove `strictMode: false` from your constructor properties to enable strict mode to track down and fix this unsupported usage.");
    else {
      var m = { action: ds, level: "error", code: this.strictMode ? 9995 : 9997 };
      this._messageChannel.sendMessageToCallMachine(m, null, this.callClientId, this._iframe);
    }
  } }, { key: "_logDuplicateInstanceAttempt", value: function() {
    for (var d = 0, v = Object.values(On); d < v.length; d++) {
      var m = v[d];
      m._callMachineInitialized ? (m.sendMessageToCallMachine({ action: ds, level: "warn", code: this.allowMultipleCallInstances ? 9993 : 9992 }), m._delayDuplicateInstanceLog = !1) : m._delayDuplicateInstanceLog = !0;
    }
  } }, { key: "_maybeSendToSentry", value: function(d) {
    var v, m, E, T;
    if (!((v = d.error) !== null && v !== void 0 && v.type && (![CP, kP, Th].includes(d.error.type) || d.error.type === Th && d.error.msg.includes("deleted")))) {
      var j = (m = this.properties) !== null && m !== void 0 && m.url ? new URL(this.properties.url) : void 0, U = "production";
      j && j.host.includes(".staging.daily") && (U = "staging");
      var z, G, ie, oe, Rt, Cn = function(Kr) {
        const Yr = [VM(), BM(), hP(), dP(), yP(), wP(), qM(), bP()];
        return Kr.autoSessionTracking !== !1 && Yr.push(vP()), Yr;
      }({}).filter(function(Kr) {
        return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(Kr.name);
      }), Gr = new ZM({ dsn: "https://f10f1c81e5d44a4098416c0867a8b740@o77906.ingest.sentry.io/168844", transport: iP, stackParser: uP, integrations: Cn, environment: U }), Ne = new xn();
      if (Ne.setClient(Gr), Gr.init(), this.session_id && Ne.setExtra("sessionId", this.session_id), this.properties) {
        var dt = Q({}, this.properties);
        dt.userName = dt.userName ? "[Filtered]" : void 0, dt.userData = dt.userData ? "[Filtered]" : void 0, dt.token = dt.token ? "[Filtered]" : void 0, Ne.setExtra("properties", dt);
      }
      if (j) {
        var En = j.searchParams.get("domain");
        if (!En) {
          var Jr = j.host.match(/(.*?)\./);
          En = Jr && Jr[1] || "";
        }
        En && Ne.setTag("domain", En);
      }
      d.error && (Ne.setTag("fatalErrorType", d.error.type), Ne.setExtra("errorDetails", d.error.details), !((z = d.error.details) === null || z === void 0) && z.uri && Ne.setTag("serverAddress", d.error.details.uri), !((G = d.error.details) === null || G === void 0) && G.workerGroup && Ne.setTag("workerGroup", d.error.details.workerGroup), !((ie = d.error.details) === null || ie === void 0) && ie.geoGroup && Ne.setTag("geoGroup", d.error.details.geoGroup), !((oe = d.error.details) === null || oe === void 0) && oe.on && Ne.setTag("connectionAttempt", d.error.details.on), (Rt = d.error.details) !== null && Rt !== void 0 && Rt.bundleUrl && (Ne.setTag("bundleUrl", d.error.details.bundleUrl), Ne.setTag("bundleError", d.error.details.sourceError.type))), Ne.setTags({ callMode: this._callObjectMode ? de() ? "reactNative" : (E = this.properties) !== null && E !== void 0 && (E = E.dailyConfig) !== null && E !== void 0 && (E = E.callMode) !== null && E !== void 0 && E.includes("prebuilt") ? this.properties.dailyConfig.callMode : "custom" : "prebuilt-frame", version: e.version() });
      var Vi = ((T = d.error) === null || T === void 0 ? void 0 : T.msg) || d.errorMsg;
      Ne.captureException(new Error(Vi));
    }
  } }, { key: "_callMachine", value: function() {
    var d;
    return (d = window._daily) === null || d === void 0 || (d = d.instances) === null || d === void 0 || (d = d[this.callClientId]) === null || d === void 0 ? void 0 : d.callMachine;
  } }, { key: "_maybeUpdateInputSettings", value: function(d) {
    if (!Qe(this._inputSettings, d)) {
      var v = this._getInputSettings();
      this._inputSettings = d;
      var m = this._getInputSettings();
      Qe(v, m) || this.emitDailyJSEvent({ action: Oh, inputSettings: m });
    }
  } }], [{ key: "supportedBrowser", value: function() {
    if (de()) return { supported: !0, mobile: !0, name: "React Native", version: null, supportsScreenShare: !0, supportsSfu: !0, supportsVideoProcessing: !1, supportsAudioProcessing: !1 };
    var d = aM.getParser(yt());
    return { supported: !!Bh(), mobile: d.getPlatformType() === "mobile", name: d.getBrowserName(), version: d.getBrowserVersion(), supportsFullscreen: !!Fh(), supportsScreenShare: !!_A(), supportsSfu: !!Bh(), supportsVideoProcessing: ly(), supportsAudioProcessing: uy() };
  } }, { key: "version", value: function() {
    return "0.77.0";
  } }, { key: "createCallObject", value: function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return d.layout = "none", new e(null, d);
  } }, { key: "wrap", value: function(d) {
    var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (le(), !d || !d.contentWindow || typeof d.src != "string") throw new Error("DailyIframe::Wrap needs an iframe-like first argument");
    return v.layout || (v.customLayout ? v.layout = "custom-v1" : v.layout = "browser"), new e(d, v);
  } }, { key: "createFrame", value: function(d, v) {
    var m, E;
    le(), d && v ? (m = d, E = v) : d && d.append ? (m = d, E = {}) : (m = document.body, E = d || {});
    var T = E.iframeStyle;
    T || (T = m === document.body ? { position: "fixed", border: "1px solid black", backgroundColor: "white", width: "375px", height: "450px", right: "1em", bottom: "1em" } : { border: 0, width: "100%", height: "100%" });
    var j = document.createElement("iframe");
    window.navigator && window.navigator.userAgent.match(/Chrome\/61\./) ? j.allow = "microphone, camera" : j.allow = "microphone; camera; autoplay; display-capture; screen-wake-lock", j.style.visibility = "hidden", m.appendChild(j), j.style.visibility = null, Object.keys(T).forEach(function(U) {
      return j.style[U] = T[U];
    }), E.layout || (E.customLayout ? E.layout = "custom-v1" : E.layout = "browser");
    try {
      return new e(j, E);
    } catch (U) {
      throw m.removeChild(j), U;
    }
  } }, { key: "createTransparentFrame", value: function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    le();
    var v = document.createElement("iframe");
    return v.allow = "microphone; camera; autoplay", v.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      pointer-events: none;
    `, document.body.appendChild(v), d.layout || (d.layout = "custom-v1"), e.wrap(v, d);
  } }, { key: "getCallInstance", value: function() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    return d ? On[d] : Object.values(On)[0];
  } }]);
  var t, n, r, i, s, o, a, c, l, u, f, h, p, g, y, b, w, M, C, S, _, O, k, P, R, L, I, V, q, $, H, Y, W, D, te, N, ee, fe;
}();
function rr(e, t) {
  var n = {};
  for (var r in e) if (e[r] instanceof MediaStreamTrack) console.warn("MediaStreamTrack found in props or cache.", r), n[r] = Jt;
  else if (r === "dailyConfig") {
    if (e[r].modifyLocalSdpHook) {
      var i = window._daily.instances[t].customCallbacks || {};
      i.modifyLocalSdpHook = e[r].modifyLocalSdpHook, window._daily.instances[t].customCallbacks = i, delete e[r].modifyLocalSdpHook;
    }
    if (e[r].modifyRemoteSdpHook) {
      var s = window._daily.instances[t].customCallbacks || {};
      s.modifyRemoteSdpHook = e[r].modifyRemoteSdpHook, window._daily.instances[t].customCallbacks = s, delete e[r].modifyRemoteSdpHook;
    }
    n[r] = e[r];
  } else n[r] = e[r];
  return n;
}
function xe(e) {
  var t = arguments.length > 2 ? arguments[2] : void 0;
  if (e !== Nn) {
    var n = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " only supported after join.");
    throw t && (n += " ".concat(t)), console.error(n), new Error(n);
  }
}
function Ps(e, t) {
  return [Ac, Nn].includes(e) || t;
}
function ba(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "This daily-js method", r = arguments.length > 3 ? arguments[3] : void 0;
  if (Ps(e, t)) {
    var i = "".concat(n, " not supported after joining a meeting.");
    throw r && (i += " ".concat(r)), console.error(i), new Error(i);
  }
}
function ps(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", n = arguments.length > 2 ? arguments[2] : void 0;
  if (!e) {
    var r = "".concat(t, arguments.length > 3 && arguments[3] !== void 0 && arguments[3] ? " requires preAuth() or startCamera() to initialize call state." : " requires preAuth(), startCamera(), or join() to initialize call state.");
    throw n && (r += " ".concat(n)), console.error(r), new Error(r);
  }
}
function wa(e) {
  if (e) {
    var t = "A pre-call quality test is in progress. Please try ".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " again once testing has completed. Use stopTestCallQuality() to end it early.");
    throw console.error(t), new Error(t);
  }
}
function bt(e) {
  if (!e) {
    var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported on custom callObject instances");
    throw console.error(t), new Error(t);
  }
}
function rt(e) {
  if (e) {
    var t = "".concat(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "This daily-js method", " is only supported as part of Daily's Prebuilt");
    throw console.error(t), new Error(t);
  }
}
function le() {
  if (de()) throw new Error("This daily-js method is not currently supported in React Native");
}
function ri() {
  if (!de()) throw new Error("This daily-js method is only supported in React Native");
}
function Sy(e) {
  if (e === void 0) return !0;
  var t;
  if (typeof e == "string") t = e;
  else try {
    t = JSON.stringify(e), Qe(JSON.parse(t), e) || console.warn("The userData provided will be modified when serialized.");
  } catch (n) {
    throw Error("userData must be serializable to JSON: ".concat(n));
  }
  if (t.length > 4096) throw Error("userData is too large (".concat(t.length, " characters). Maximum size suppported is ").concat(4096, "."));
  return !0;
}
function _y(e, t) {
  for (var n = t.allowAllParticipantsKey, r = function(f) {
    var h = ["local"];
    return n || h.push("*"), f && !h.includes(f);
  }, i = function(f) {
    return !!(f.layer === void 0 || Number.isInteger(f.layer) && f.layer >= 0 || f.layer === "inherit");
  }, s = function(f) {
    return !!f && !(f.video && !i(f.video)) && !(f.screenVideo && !i(f.screenVideo));
  }, o = 0, a = Object.entries(e); o < a.length; o++) {
    var c = tt(a[o], 2), l = c[0], u = c[1];
    if (!r(l) || !s(u)) return !1;
  }
  return !0;
}
function ky(e) {
  if (he(e) !== "object") return !1;
  for (var t = 0, n = Object.entries(e); t < n.length; t++) {
    var r = tt(n[t], 2), i = r[0], s = r[1];
    switch (i) {
      case "video":
        if (he(s) !== "object") return !1;
        for (var o = 0, a = Object.entries(s); o < a.length; o++) {
          var c = tt(a[o], 2), l = c[0], u = c[1];
          switch (l) {
            case "processor":
              if (!YA(u)) return !1;
              break;
            case "settings":
              if (!up(u)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      case "audio":
        if (he(s) !== "object") return !1;
        for (var f = 0, h = Object.entries(s); f < h.length; f++) {
          var p = tt(h[f], 2), g = p[0], y = p[1];
          switch (g) {
            case "processor":
              if (!KA(y)) return !1;
              break;
            case "settings":
              if (!up(y)) return !1;
              break;
            default:
              return !1;
          }
        }
        break;
      default:
        return !1;
    }
  }
  return !0;
}
function Cy(e, t, n) {
  var r, i = [];
  e.video && e.video.processor && (ly((r = t?.useLegacyVideoProcessor) !== null && r !== void 0 && r) || (e.video.settings ? delete e.video.processor : delete e.video, i.push("video"))), e.audio && e.audio.processor && (uy() || (e.audio.settings ? delete e.audio.processor : delete e.audio, i.push("audio"))), i.length > 0 && console.error("Ignoring settings for browser- or platform-unsupported input processor(s): ".concat(i.join(", "))), e.audio && e.audio.settings && (e.audio.settings.customTrack ? (n.audioTrack = e.audio.settings.customTrack, e.audio.settings = { customTrack: Jt }) : delete n.audioTrack), e.video && e.video.settings && (e.video.settings.customTrack ? (n.videoTrack = e.video.settings.customTrack, e.video.settings = { customTrack: Jt }) : delete n.videoTrack);
}
function KA(e) {
  if (de()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var t = ["type"];
  return !!e && he(e) === "object" && (Object.keys(e).filter(function(n) {
    return !t.includes(n);
  }).forEach(function(n) {
    console.warn("invalid key inputSettings -> audio -> processor : ".concat(n)), delete e[n];
  }), !!function(n) {
    return typeof n != "string" ? !1 : Object.values(ay).includes(n) ? !0 : (console.error("inputSettings audio processor type invalid"), !1);
  }(e.type));
}
function YA(e) {
  if (de()) return console.warn("Video processing is not yet supported in React Native"), !1;
  var t = ["type", "config"];
  return !e || he(e) !== "object" || !function(n) {
    return typeof n != "string" ? !1 : Object.values(Ms).includes(n) ? !0 : (console.error("inputSettings video processor type invalid"), !1);
  }(e.type) || e.config && (he(e.config) !== "object" || !function(n, r) {
    var i = Object.keys(r);
    if (i.length === 0) return !0;
    var s = "invalid object in inputSettings -> video -> processor -> config";
    switch (n) {
      case Ms.BGBLUR:
        return i.length > 1 || i[0] !== "strength" ? (console.error(s), !1) : !(typeof r.strength != "number" || r.strength <= 0 || r.strength > 1 || isNaN(r.strength)) || (console.error("".concat(s, "; expected: {0 < strength <= 1}, got: ").concat(r.strength)), !1);
      case Ms.BGIMAGE:
        return !(r.source !== void 0 && !function(o) {
          if (o.source === "default") return o.type = "default", !0;
          if (o.source instanceof ArrayBuffer) return !0;
          if (Ws(o.source)) return o.type = "url", !!function(l) {
            var u = new URL(l), f = u.pathname;
            if (u.protocol === "data:") try {
              var h = f.substring(f.indexOf(":") + 1, f.indexOf(";")).split("/")[1];
              return ma.includes(h);
            } catch (g) {
              return console.error("failed to deduce blob content type", g), !1;
            }
            var p = f.split(".").at(-1).toLowerCase().trim();
            return ma.includes(p);
          }(o.source) || (console.error("invalid image type; supported types: [".concat(ma.join(", "), "]")), !1);
          return a = o.source, c = Number(a), isNaN(c) || !Number.isInteger(c) || c <= 0 || c > 10 ? (console.error("invalid image selection; must be an int, > 0, <= ".concat(10)), !1) : (o.type = "daily-preselect", !0);
          var a, c;
        }(r));
      default:
        return !0;
    }
  }(e.type, e.config)) ? !1 : (Object.keys(e).filter(function(n) {
    return !t.includes(n);
  }).forEach(function(n) {
    console.warn("invalid key inputSettings -> video -> processor : ".concat(n)), delete e[n];
  }), !0);
}
function up(e) {
  return he(e) === "object" && (!e.customTrack || e.customTrack instanceof MediaStreamTrack);
}
function Ic() {
  var e = Object.values(Ms).join(" | "), t = Object.values(ay).join(" | ");
  return "inputSettings must be of the form: { video?: { processor?: { type: [ ".concat(e, " ], config?: {} } }, audio?: { processor: {type: [ ").concat(t, " ] } } }");
}
function Ey(e) {
  var t = e.allowAllParticipantsKey;
  return "receiveSettings must be of the form { [<remote participant id> | ".concat(_P).concat(t ? ' | "'.concat("*", '"') : "", "]: ") + '{ [video: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]], [screenVideo: [{ layer: [<non-negative integer> | "inherit"] } | "inherit"]] }}}';
}
function Ty() {
  return "customIntegrations should be an object of type ".concat(JSON.stringify(Dc), ".");
}
function My(e) {
  if (e && he(e) !== "object" || Array.isArray(e)) return console.error("customTrayButtons should be an Object of the type ".concat(JSON.stringify(Xs), ".")), !1;
  if (e) for (var t = 0, n = Object.entries(e); t < n.length; t++) for (var r = tt(n[t], 1)[0], i = 0, s = Object.entries(e[r]); i < s.length; i++) {
    var o = tt(s[i], 2), a = o[0], c = o[1], l = Xs.id[a];
    if (!l) return console.error("customTrayButton does not support key ".concat(a)), !1;
    switch (a) {
      case "iconPath":
      case "iconPathDarkMode":
        if (!Ws(c)) return console.error("customTrayButton ".concat(a, " should be a url.")), !1;
        break;
      case "visualState":
        if (!["default", "sidebar-open", "active"].includes(c)) return console.error("customTrayButton ".concat(a, " should be ").concat(l, ". Got: ").concat(c)), !1;
        break;
      default:
        if (he(c) !== l) return console.error("customTrayButton ".concat(a, " should be a ").concat(l, ".")), !1;
    }
  }
  return !0;
}
function Py(e) {
  if (!e || e && he(e) !== "object" || Array.isArray(e)) return console.error(Ty()), !1;
  for (var t = function(f) {
    return "".concat(f, " should be ").concat(Dc.id[f]);
  }, n = function(f, h) {
    return console.error("customIntegration ".concat(f, ": ").concat(h));
  }, r = 0, i = Object.entries(e); r < i.length; r++) {
    var s = tt(i[r], 1)[0];
    if (!("label" in e[s])) return n(s, "label is required"), !1;
    if (!("location" in e[s])) return n(s, "location is required"), !1;
    if (!("src" in e[s]) && !("srcdoc" in e[s])) return n(s, "src or srcdoc is required"), !1;
    for (var o = 0, a = Object.entries(e[s]); o < a.length; o++) {
      var c = tt(a[o], 2), l = c[0], u = c[1];
      switch (l) {
        case "allow":
        case "csp":
        case "name":
        case "referrerPolicy":
        case "sandbox":
          if (typeof u != "string") return n(s, t(l)), !1;
          break;
        case "iconURL":
          if (!Ws(u)) return n(s, "".concat(l, " should be a url")), !1;
          break;
        case "src":
          if ("srcdoc" in e[s]) return n(s, "cannot have both src and srcdoc"), !1;
          if (!Ws(u)) return n(s, 'src "'.concat(u, '" is not a valid URL')), !1;
          break;
        case "srcdoc":
          if ("src" in e[s]) return n(s, "cannot have both src and srcdoc"), !1;
          if (typeof u != "string") return n(s, t(l)), !1;
          break;
        case "location":
          if (!["main", "sidebar"].includes(u)) return n(s, t(l)), !1;
          break;
        case "controlledBy":
          if (u !== "*" && u !== "owners" && (!Array.isArray(u) || u.some(function(f) {
            return typeof f != "string";
          }))) return n(s, t(l)), !1;
          break;
        case "shared":
          if ((!Array.isArray(u) || u.some(function(f) {
            return typeof f != "string";
          })) && u !== "owners" && typeof u != "boolean") return n(s, t(l)), !1;
          break;
        default:
          if (!Dc.id[l]) return console.error("customIntegration does not support key ".concat(l)), !1;
      }
    }
  }
  return !0;
}
function Ay(e, t) {
  if (t === void 0) return !1;
  switch (he(t)) {
    case "string":
      return he(e) === t;
    case "object":
      if (he(e) !== "object") return !1;
      for (var n in e) if (!Ay(e[n], t[n])) return !1;
      return !0;
    default:
      return !1;
  }
}
function dp(e, t) {
  var n = e.sessionId, r = e.toEndPoint, i = e.callerId, s = e.useSipRefer;
  if (!n || !r) throw new Error("".concat(t, "() requires a sessionId and toEndPoint"));
  if (typeof n != "string" || typeof r != "string") throw new Error("Invalid paramater: sessionId and toEndPoint must be of type string");
  if (s && !r.startsWith("sip:")) throw new Error('"toEndPoint" must be a "sip" address');
  if (!r.startsWith("sip:") && !r.startsWith("+")) throw new Error("toEndPoint: ".concat(r, ' must starts with either "sip:" or "+"'));
  if (i && typeof i != "string") throw new Error("callerId must be of type string");
  if (i && !r.startsWith("+")) throw new Error("callerId is only valid when transferring to a PSTN number");
}
function fp(e) {
  if (he(e) !== "object") throw new Error('RemoteMediaPlayerSettings: must be "object" type');
  if (e.state && !Object.values(Oc).includes(e.state)) throw new Error("Invalid value for RemoteMediaPlayerSettings.state, valid values are: " + JSON.stringify(Oc));
  if (e.volume) {
    if (typeof e.volume != "number") throw new Error('RemoteMediaPlayerSettings.volume: must be "number" type');
    if (e.volume < 0 || e.volume > 2) throw new Error("RemoteMediaPlayerSettings.volume: must be between 0.0 - 2.0");
  }
}
function hp(e, t, n) {
  return !(typeof e != "number" || e < t || e > n);
}
function xa(e, t) {
  return e && !t && delete e.data, e;
}
function XA(e, t, n, r) {
  Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
}
var QA = {};
XA(QA, "SmallWebRTCTransport", () => au);
class kt {
  /**
  * Converts Float32Array of amplitude data to ArrayBuffer in Int16Array format
  * @param {Float32Array} float32Array
  * @returns {ArrayBuffer}
  */
  static floatTo16BitPCM(t) {
    const n = new ArrayBuffer(t.length * 2), r = new DataView(n);
    let i = 0;
    for (let s = 0; s < t.length; s++, i += 2) {
      let o = Math.max(-1, Math.min(1, t[s]));
      r.setInt16(i, o < 0 ? o * 32768 : o * 32767, !0);
    }
    return n;
  }
  /**
  * Concatenates two ArrayBuffers
  * @param {ArrayBuffer} leftBuffer
  * @param {ArrayBuffer} rightBuffer
  * @returns {ArrayBuffer}
  */
  static mergeBuffers(t, n) {
    const r = new Uint8Array(t.byteLength + n.byteLength);
    return r.set(new Uint8Array(t), 0), r.set(new Uint8Array(n), t.byteLength), r.buffer;
  }
  /**
  * Packs data into an Int16 format
  * @private
  * @param {number} size 0 = 1x Int16, 1 = 2x Int16
  * @param {number} arg value to pack
  * @returns
  */
  _packData(t, n) {
    return [
      new Uint8Array([
        n,
        n >> 8
      ]),
      new Uint8Array([
        n,
        n >> 8,
        n >> 16,
        n >> 24
      ])
    ][t];
  }
  /**
  * Packs audio into "audio/wav" Blob
  * @param {number} sampleRate
  * @param {{bitsPerSample: number, channels: Array<Float32Array>, data: Int16Array}} audio
  * @returns {WavPackerAudioType}
  */
  pack(t, n) {
    if (n?.bitsPerSample) if (n?.channels) {
      if (!n?.data) throw new Error('Missing "data"');
    } else throw new Error('Missing "channels"');
    else throw new Error('Missing "bitsPerSample"');
    const { bitsPerSample: r, channels: i, data: s } = n, o = [
      // Header
      "RIFF",
      this._packData(1, 52),
      "WAVE",
      // chunk 1
      "fmt ",
      this._packData(1, 16),
      this._packData(0, 1),
      this._packData(0, i.length),
      this._packData(1, t),
      this._packData(1, t * i.length * r / 8),
      this._packData(0, i.length * r / 8),
      this._packData(0, r),
      // chunk 2
      "data",
      this._packData(1, i[0].length * i.length * r / 8),
      s
    ], a = new Blob(o, {
      type: "audio/mpeg"
    }), c = URL.createObjectURL(a);
    return {
      blob: a,
      url: c,
      channelCount: i.length,
      sampleRate: t,
      duration: s.byteLength / (i.length * t * 2)
    };
  }
}
globalThis.WavPacker = kt;
const pp = [
  4186.01,
  4434.92,
  4698.63,
  4978.03,
  5274.04,
  5587.65,
  5919.91,
  6271.93,
  6644.88,
  7040,
  7458.62,
  7902.13
], ZA = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
], mn = [], su = [];
for (let e = 1; e <= 8; e++) for (let t = 0; t < pp.length; t++) {
  const n = pp[t];
  mn.push(n / Math.pow(2, 8 - e)), su.push(ZA[t] + e);
}
const Qs = [
  32,
  2e3
], mp = mn.filter((e, t) => mn[t] > Qs[0] && mn[t] < Qs[1]), e1 = su.filter((e, t) => mn[t] > Qs[0] && mn[t] < Qs[1]);
class Hr {
  /**
  * Retrieves frequency domain data from an AnalyserNode adjusted to a decibel range
  * returns human-readable formatting and labels
  * @param {AnalyserNode} analyser
  * @param {number} sampleRate
  * @param {Float32Array} [fftResult]
  * @param {"frequency"|"music"|"voice"} [analysisType]
  * @param {number} [minDecibels] default -100
  * @param {number} [maxDecibels] default -30
  * @returns {AudioAnalysisOutputType}
  */
  static getFrequencies(t, n, r, i = "frequency", s = -100, o = -30) {
    r || (r = new Float32Array(t.frequencyBinCount), t.getFloatFrequencyData(r));
    const a = n / 2, c = 1 / r.length * a;
    let l, u, f;
    if (i === "music" || i === "voice") {
      const g = i === "voice" ? mp : mn, y = Array(g.length).fill(s);
      for (let b = 0; b < r.length; b++) {
        const w = b * c, M = r[b];
        for (let C = g.length - 1; C >= 0; C--) if (w > g[C]) {
          y[C] = Math.max(y[C], M);
          break;
        }
      }
      l = y, u = i === "voice" ? mp : mn, f = i === "voice" ? e1 : su;
    } else
      l = Array.from(r), u = l.map((g, y) => c * y), f = u.map((g) => `${g.toFixed(2)} Hz`);
    const h = l.map((g) => Math.max(0, Math.min((g - s) / (o - s), 1)));
    return {
      values: new Float32Array(h),
      frequencies: u,
      labels: f
    };
  }
  /**
  * Creates a new AudioAnalysis instance for an HTMLAudioElement
  * @param {HTMLAudioElement} audioElement
  * @param {AudioBuffer|null} [audioBuffer] If provided, will cache all frequency domain data from the buffer
  * @returns {AudioAnalysis}
  */
  constructor(t, n = null) {
    if (this.fftResults = [], n) {
      const { length: r, sampleRate: i } = n, s = new OfflineAudioContext({
        length: r,
        sampleRate: i
      }), o = s.createBufferSource();
      o.buffer = n;
      const a = s.createAnalyser();
      a.fftSize = 8192, a.smoothingTimeConstant = 0.1, o.connect(a);
      const c = 1 / 60, l = r / i, u = (f) => {
        const h = c * f;
        h < l && s.suspend(h).then(() => {
          const p = new Float32Array(a.frequencyBinCount);
          a.getFloatFrequencyData(p), this.fftResults.push(p), u(f + 1);
        }), f === 1 ? s.startRendering() : s.resume();
      };
      o.start(0), u(1), this.audio = t, this.context = s, this.analyser = a, this.sampleRate = i, this.audioBuffer = n;
    } else {
      const r = new AudioContext(), i = r.createMediaElementSource(t), s = r.createAnalyser();
      s.fftSize = 8192, s.smoothingTimeConstant = 0.1, i.connect(s), s.connect(r.destination), this.audio = t, this.context = r, this.analyser = s, this.sampleRate = this.context.sampleRate, this.audioBuffer = null;
    }
  }
  /**
  * Gets the current frequency domain data from the playing audio track
  * @param {"frequency"|"music"|"voice"} [analysisType]
  * @param {number} [minDecibels] default -100
  * @param {number} [maxDecibels] default -30
  * @returns {AudioAnalysisOutputType}
  */
  getFrequencies(t = "frequency", n = -100, r = -30) {
    let i = null;
    if (this.audioBuffer && this.fftResults.length) {
      const s = this.audio.currentTime / this.audio.duration, o = Math.min(s * this.fftResults.length | 0, this.fftResults.length - 1);
      i = this.fftResults[o];
    }
    return Hr.getFrequencies(this.analyser, this.sampleRate, i, t, n, r);
  }
  /**
  * Resume the internal AudioContext if it was suspended due to the lack of
  * user interaction when the AudioAnalysis was instantiated.
  * @returns {Promise<true>}
  */
  async resumeIfSuspended() {
    return this.context.state === "suspended" && await this.context.resume(), !0;
  }
}
globalThis.AudioAnalysis = Hr;
const t1 = `
class StreamProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.hasStarted = false;
    this.hasInterrupted = false;
    this.outputBuffers = [];
    this.bufferLength = 128;
    this.write = { buffer: new Float32Array(this.bufferLength), trackId: null };
    this.writeOffset = 0;
    this.trackSampleOffsets = {};
    this.port.onmessage = (event) => {
      if (event.data) {
        const payload = event.data;
        if (payload.event === 'write') {
          const int16Array = payload.buffer;
          const float32Array = new Float32Array(int16Array.length);
          for (let i = 0; i < int16Array.length; i++) {
            float32Array[i] = int16Array[i] / 0x8000; // Convert Int16 to Float32
          }
          this.writeData(float32Array, payload.trackId);
        } else if (
          payload.event === 'offset' ||
          payload.event === 'interrupt'
        ) {
          const requestId = payload.requestId;
          const trackId = this.write.trackId;
          const offset = this.trackSampleOffsets[trackId] || 0;
          this.port.postMessage({
            event: 'offset',
            requestId,
            trackId,
            offset,
          });
          if (payload.event === 'interrupt') {
            this.hasInterrupted = true;
          }
        } else {
          throw new Error(\`Unhandled event "\${payload.event}"\`);
        }
      }
    };
  }

  writeData(float32Array, trackId = null) {
    let { buffer } = this.write;
    let offset = this.writeOffset;
    for (let i = 0; i < float32Array.length; i++) {
      buffer[offset++] = float32Array[i];
      if (offset >= buffer.length) {
        this.outputBuffers.push(this.write);
        this.write = { buffer: new Float32Array(this.bufferLength), trackId };
        buffer = this.write.buffer;
        offset = 0;
      }
    }
    this.writeOffset = offset;
    return true;
  }

  process(inputs, outputs, parameters) {
    const output = outputs[0];
    const outputChannelData = output[0];
    const outputBuffers = this.outputBuffers;
    if (this.hasInterrupted) {
      this.port.postMessage({ event: 'stop' });
      return false;
    } else if (outputBuffers.length) {
      this.hasStarted = true;
      const { buffer, trackId } = outputBuffers.shift();
      for (let i = 0; i < outputChannelData.length; i++) {
        outputChannelData[i] = buffer[i] || 0;
      }
      if (trackId) {
        this.trackSampleOffsets[trackId] =
          this.trackSampleOffsets[trackId] || 0;
        this.trackSampleOffsets[trackId] += buffer.length;
      }
      return true;
    } else if (this.hasStarted) {
      this.port.postMessage({ event: 'stop' });
      return false;
    } else {
      return true;
    }
  }
}

registerProcessor('stream_processor', StreamProcessor);
`, n1 = new Blob([
  t1
], {
  type: "application/javascript"
}), r1 = URL.createObjectURL(n1), i1 = r1;
class ou {
  /**
  * Creates a new WavStreamPlayer instance
  * @param {{sampleRate?: number}} options
  * @returns {WavStreamPlayer}
  */
  constructor({ sampleRate: t = 44100 } = {}) {
    this.scriptSrc = i1, this.sampleRate = t, this.context = null, this.stream = null, this.analyser = null, this.trackSampleOffsets = {}, this.interruptedTrackIds = {};
  }
  /**
  * Connects the audio context and enables output to speakers
  * @returns {Promise<true>}
  */
  async connect() {
    this.context = new AudioContext({
      sampleRate: this.sampleRate
    }), this._speakerID && this.context.setSinkId(this._speakerID), this.context.state === "suspended" && await this.context.resume();
    try {
      await this.context.audioWorklet.addModule(this.scriptSrc);
    } catch (n) {
      throw console.error(n), new Error(`Could not add audioWorklet module: ${this.scriptSrc}`);
    }
    const t = this.context.createAnalyser();
    return t.fftSize = 8192, t.smoothingTimeConstant = 0.1, this.analyser = t, !0;
  }
  /**
  * Gets the current frequency domain data from the playing track
  * @param {"frequency"|"music"|"voice"} [analysisType]
  * @param {number} [minDecibels] default -100
  * @param {number} [maxDecibels] default -30
  * @returns {import('./analysis/audio_analysis.js').AudioAnalysisOutputType}
  */
  getFrequencies(t = "frequency", n = -100, r = -30) {
    if (!this.analyser) throw new Error("Not connected, please call .connect() first");
    return Hr.getFrequencies(this.analyser, this.sampleRate, null, t, n, r);
  }
  /**
  * @param {string} speaker deviceId
  */
  async updateSpeaker(t) {
    const n = this._speakerID;
    if (this._speakerID = t, this.context) try {
      t === "default" ? await this.context.setSinkId() : await this.context.setSinkId(t);
    } catch (r) {
      console.error(`Could not set sinkId to ${t}: ${r}`), this._speakerID = n;
    }
  }
  /**
  * Starts audio streaming
  * @private
  * @returns {Promise<true>}
  */
  _start() {
    const t = new AudioWorkletNode(this.context, "stream_processor");
    return t.connect(this.context.destination), t.port.onmessage = (n) => {
      const { event: r } = n.data;
      if (r === "stop")
        t.disconnect(), this.stream = null;
      else if (r === "offset") {
        const { requestId: i, trackId: s, offset: o } = n.data, a = o / this.sampleRate;
        this.trackSampleOffsets[i] = {
          trackId: s,
          offset: o,
          currentTime: a
        };
      }
    }, this.analyser.disconnect(), t.connect(this.analyser), this.stream = t, !0;
  }
  /**
  * Adds 16BitPCM data to the currently playing audio stream
  * You can add chunks beyond the current play point and they will be queued for play
  * @param {ArrayBuffer|Int16Array} arrayBuffer
  * @param {string} [trackId]
  * @returns {Int16Array}
  */
  add16BitPCM(t, n = "default") {
    if (typeof n != "string") throw new Error("trackId must be a string");
    if (this.interruptedTrackIds[n]) return;
    this.stream || this._start();
    let r;
    if (t instanceof Int16Array) r = t;
    else if (t instanceof ArrayBuffer) r = new Int16Array(t);
    else throw new Error("argument must be Int16Array or ArrayBuffer");
    return this.stream.port.postMessage({
      event: "write",
      buffer: r,
      trackId: n
    }), r;
  }
  /**
  * Gets the offset (sample count) of the currently playing stream
  * @param {boolean} [interrupt]
  * @returns {{trackId: string|null, offset: number, currentTime: number}}
  */
  async getTrackSampleOffset(t = !1) {
    if (!this.stream) return null;
    const n = crypto.randomUUID();
    this.stream.port.postMessage({
      event: t ? "interrupt" : "offset",
      requestId: n
    });
    let r;
    for (; !r; )
      r = this.trackSampleOffsets[n], await new Promise((s) => setTimeout(() => s(), 1));
    const { trackId: i } = r;
    return t && i && (this.interruptedTrackIds[i] = !0), r;
  }
  /**
  * Strips the current stream and returns the sample offset of the audio
  * @param {boolean} [interrupt]
  * @returns {{trackId: string|null, offset: number, currentTime: number}}
  */
  async interrupt() {
    return this.getTrackSampleOffset(!0);
  }
}
globalThis.WavStreamPlayer = ou;
const s1 = `
class AudioProcessor extends AudioWorkletProcessor {

  constructor() {
    super();
    this.port.onmessage = this.receive.bind(this);
    this.initialize();
  }

  initialize() {
    this.foundAudio = false;
    this.recording = false;
    this.chunks = [];
  }

  /**
   * Concatenates sampled chunks into channels
   * Format is chunk[Left[], Right[]]
   */
  readChannelData(chunks, channel = -1, maxChannels = 9) {
    let channelLimit;
    if (channel !== -1) {
      if (chunks[0] && chunks[0].length - 1 < channel) {
        throw new Error(
          \`Channel \${channel} out of range: max \${chunks[0].length}\`
        );
      }
      channelLimit = channel + 1;
    } else {
      channel = 0;
      channelLimit = Math.min(chunks[0] ? chunks[0].length : 1, maxChannels);
    }
    const channels = [];
    for (let n = channel; n < channelLimit; n++) {
      const length = chunks.reduce((sum, chunk) => {
        return sum + chunk[n].length;
      }, 0);
      const buffers = chunks.map((chunk) => chunk[n]);
      const result = new Float32Array(length);
      let offset = 0;
      for (let i = 0; i < buffers.length; i++) {
        result.set(buffers[i], offset);
        offset += buffers[i].length;
      }
      channels[n] = result;
    }
    return channels;
  }

  /**
   * Combines parallel audio data into correct format,
   * channels[Left[], Right[]] to float32Array[LRLRLRLR...]
   */
  formatAudioData(channels) {
    if (channels.length === 1) {
      // Simple case is only one channel
      const float32Array = channels[0].slice();
      const meanValues = channels[0].slice();
      return { float32Array, meanValues };
    } else {
      const float32Array = new Float32Array(
        channels[0].length * channels.length
      );
      const meanValues = new Float32Array(channels[0].length);
      for (let i = 0; i < channels[0].length; i++) {
        const offset = i * channels.length;
        let meanValue = 0;
        for (let n = 0; n < channels.length; n++) {
          float32Array[offset + n] = channels[n][i];
          meanValue += channels[n][i];
        }
        meanValues[i] = meanValue / channels.length;
      }
      return { float32Array, meanValues };
    }
  }

  /**
   * Converts 32-bit float data to 16-bit integers
   */
  floatTo16BitPCM(float32Array) {
    const buffer = new ArrayBuffer(float32Array.length * 2);
    const view = new DataView(buffer);
    let offset = 0;
    for (let i = 0; i < float32Array.length; i++, offset += 2) {
      let s = Math.max(-1, Math.min(1, float32Array[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    }
    return buffer;
  }

  /**
   * Retrieves the most recent amplitude values from the audio stream
   * @param {number} channel
   */
  getValues(channel = -1) {
    const channels = this.readChannelData(this.chunks, channel);
    const { meanValues } = this.formatAudioData(channels);
    return { meanValues, channels };
  }

  /**
   * Exports chunks as an audio/wav file
   */
  export() {
    const channels = this.readChannelData(this.chunks);
    const { float32Array, meanValues } = this.formatAudioData(channels);
    const audioData = this.floatTo16BitPCM(float32Array);
    return {
      meanValues: meanValues,
      audio: {
        bitsPerSample: 16,
        channels: channels,
        data: audioData,
      },
    };
  }

  receive(e) {
    const { event, id } = e.data;
    let receiptData = {};
    switch (event) {
      case 'start':
        this.recording = true;
        break;
      case 'stop':
        this.recording = false;
        break;
      case 'clear':
        this.initialize();
        break;
      case 'export':
        receiptData = this.export();
        break;
      case 'read':
        receiptData = this.getValues();
        break;
      default:
        break;
    }
    // Always send back receipt
    this.port.postMessage({ event: 'receipt', id, data: receiptData });
  }

  sendChunk(chunk) {
    const channels = this.readChannelData([chunk]);
    const { float32Array, meanValues } = this.formatAudioData(channels);
    const rawAudioData = this.floatTo16BitPCM(float32Array);
    const monoAudioData = this.floatTo16BitPCM(meanValues);
    this.port.postMessage({
      event: 'chunk',
      data: {
        mono: monoAudioData,
        raw: rawAudioData,
      },
    });
  }

  process(inputList, outputList, parameters) {
    // Copy input to output (e.g. speakers)
    // Note that this creates choppy sounds with Mac products
    const sourceLimit = Math.min(inputList.length, outputList.length);
    for (let inputNum = 0; inputNum < sourceLimit; inputNum++) {
      const input = inputList[inputNum];
      const output = outputList[inputNum];
      const channelCount = Math.min(input.length, output.length);
      for (let channelNum = 0; channelNum < channelCount; channelNum++) {
        input[channelNum].forEach((sample, i) => {
          output[channelNum][i] = sample;
        });
      }
    }
    const inputs = inputList[0];
    // There's latency at the beginning of a stream before recording starts
    // Make sure we actually receive audio data before we start storing chunks
    let sliceIndex = 0;
    if (!this.foundAudio) {
      for (const channel of inputs) {
        sliceIndex = 0; // reset for each channel
        if (this.foundAudio) {
          break;
        }
        if (channel) {
          for (const value of channel) {
            if (value !== 0) {
              // find only one non-zero entry in any channel
              this.foundAudio = true;
              break;
            } else {
              sliceIndex++;
            }
          }
        }
      }
    }
    if (inputs && inputs[0] && this.foundAudio && this.recording) {
      // We need to copy the TypedArray, because the \`process\`
      // internals will reuse the same buffer to hold each input
      const chunk = inputs.map((input) => input.slice(sliceIndex));
      this.chunks.push(chunk);
      this.sendChunk(chunk);
    }
    return true;
  }
}

registerProcessor('audio_processor', AudioProcessor);
`, o1 = new Blob([
  s1
], {
  type: "application/javascript"
}), a1 = URL.createObjectURL(o1), Oy = a1;
class Ry {
  /**
  * Create a new WavRecorder instance
  * @param {{sampleRate?: number, outputToSpeakers?: boolean, debug?: boolean}} [options]
  * @returns {WavRecorder}
  */
  constructor({ sampleRate: t = 44100, outputToSpeakers: n = !1, debug: r = !1 } = {}) {
    this.scriptSrc = Oy, this.sampleRate = t, this.outputToSpeakers = n, this.debug = !!r, this._deviceChangeCallback = null, this._devices = [], this.deviceSelection = null, this.stream = null, this.processor = null, this.source = null, this.node = null, this.recording = !1, this._lastEventId = 0, this.eventReceipts = {}, this.eventTimeout = 5e3, this._chunkProcessor = () => {
    }, this._chunkProcessorSize = void 0, this._chunkProcessorBuffer = {
      raw: new ArrayBuffer(0),
      mono: new ArrayBuffer(0)
    };
  }
  /**
  * Decodes audio data from multiple formats to a Blob, url, Float32Array and AudioBuffer
  * @param {Blob|Float32Array|Int16Array|ArrayBuffer|number[]} audioData
  * @param {number} sampleRate
  * @param {number} fromSampleRate
  * @returns {Promise<DecodedAudioType>}
  */
  static async decode(t, n = 44100, r = -1) {
    const i = new AudioContext({
      sampleRate: n
    });
    let s, o;
    if (t instanceof Blob) {
      if (r !== -1) throw new Error('Can not specify "fromSampleRate" when reading from Blob');
      o = t, s = await o.arrayBuffer();
    } else if (t instanceof ArrayBuffer) {
      if (r !== -1) throw new Error('Can not specify "fromSampleRate" when reading from ArrayBuffer');
      s = t, o = new Blob([
        s
      ], {
        type: "audio/wav"
      });
    } else {
      let u, f;
      if (t instanceof Int16Array) {
        f = t, u = new Float32Array(t.length);
        for (let y = 0; y < t.length; y++) u[y] = t[y] / 32768;
      } else if (t instanceof Float32Array) u = t;
      else if (t instanceof Array) u = new Float32Array(t);
      else throw new Error('"audioData" must be one of: Blob, Float32Arrray, Int16Array, ArrayBuffer, Array<number>');
      if (r === -1) throw new Error('Must specify "fromSampleRate" when reading from Float32Array, In16Array or Array');
      if (r < 3e3) throw new Error('Minimum "fromSampleRate" is 3000 (3kHz)');
      f || (f = kt.floatTo16BitPCM(u));
      const h = {
        bitsPerSample: 16,
        channels: [
          u
        ],
        data: f
      };
      o = new kt().pack(r, h).blob, s = await o.arrayBuffer();
    }
    const a = await i.decodeAudioData(s), c = a.getChannelData(0), l = URL.createObjectURL(o);
    return {
      blob: o,
      url: l,
      values: c,
      audioBuffer: a
    };
  }
  /**
  * Logs data in debug mode
  * @param {...any} arguments
  * @returns {true}
  */
  log() {
    return this.debug && this.log(...arguments), !0;
  }
  /**
  * Retrieves the current sampleRate for the recorder
  * @returns {number}
  */
  getSampleRate() {
    return this.sampleRate;
  }
  /**
  * Retrieves the current status of the recording
  * @returns {"ended"|"paused"|"recording"}
  */
  getStatus() {
    return this.processor ? this.recording ? "recording" : "paused" : "ended";
  }
  /**
  * Sends an event to the AudioWorklet
  * @private
  * @param {string} name
  * @param {{[key: string]: any}} data
  * @param {AudioWorkletNode} [_processor]
  * @returns {Promise<{[key: string]: any}>}
  */
  async _event(t, n = {}, r = null) {
    if (r = r || this.processor, !r) throw new Error("Can not send events without recording first");
    const i = {
      event: t,
      id: this._lastEventId++,
      data: n
    };
    r.port.postMessage(i);
    const s = (/* @__PURE__ */ new Date()).valueOf();
    for (; !this.eventReceipts[i.id]; ) {
      if ((/* @__PURE__ */ new Date()).valueOf() - s > this.eventTimeout) throw new Error(`Timeout waiting for "${t}" event`);
      await new Promise((a) => setTimeout(() => a(!0), 1));
    }
    const o = this.eventReceipts[i.id];
    return delete this.eventReceipts[i.id], o;
  }
  /**
  * Sets device change callback, remove if callback provided is `null`
  * @param {(Array<MediaDeviceInfo & {default: boolean}>): void|null} callback
  * @returns {true}
  */
  listenForDeviceChange(t) {
    if (t === null && this._deviceChangeCallback)
      navigator.mediaDevices.removeEventListener("devicechange", this._deviceChangeCallback), this._deviceChangeCallback = null;
    else if (t !== null) {
      let n = 0, r = [];
      const i = (o) => o.map((a) => a.deviceId).sort().join(","), s = async () => {
        let o = ++n;
        const a = await this.listDevices();
        o === n && i(r) !== i(a) && (r = a, t(a.slice()));
      };
      navigator.mediaDevices.addEventListener("devicechange", s), s(), this._deviceChangeCallback = s;
    }
    return !0;
  }
  /**
  * Manually request permission to use the microphone
  * @returns {Promise<true>}
  */
  async requestPermission() {
    const t = await navigator.permissions.query({
      name: "microphone"
    });
    if (t.state === "denied") window.alert("You must grant microphone access to use this feature.");
    else if (t.state === "prompt") try {
      (await navigator.mediaDevices.getUserMedia({
        audio: !0
      })).getTracks().forEach((i) => i.stop());
    } catch {
      window.alert("You must grant microphone access to use this feature.");
    }
    return !0;
  }
  /**
  * List all eligible devices for recording, will request permission to use microphone
  * @returns {Promise<Array<MediaDeviceInfo & {default: boolean}>>}
  */
  async listDevices() {
    if (!navigator.mediaDevices || !("enumerateDevices" in navigator.mediaDevices)) throw new Error("Could not request user devices");
    return await this.requestPermission(), (await navigator.mediaDevices.enumerateDevices()).filter((r) => r.kind === "audioinput");
  }
  /**
  * Begins a recording session and requests microphone permissions if not already granted
  * Microphone recording indicator will appear on browser tab but status will be "paused"
  * @param {string} [deviceId] if no device provided, default device will be used
  * @returns {Promise<true>}
  */
  async begin(t) {
    if (this.processor) throw new Error("Already connected: please call .end() to start a new session");
    if (!navigator.mediaDevices || !("getUserMedia" in navigator.mediaDevices)) throw new Error("Could not request user media");
    t = t ?? this.deviceSelection?.deviceId;
    try {
      const a = {
        audio: !0
      };
      t && (a.audio = {
        deviceId: {
          exact: t
        }
      }), this.stream = await navigator.mediaDevices.getUserMedia(a);
    } catch {
      throw new Error("Could not start media stream");
    }
    this.listDevices().then((a) => {
      t = this.stream.getAudioTracks()[0].getSettings().deviceId, console.log("find current device", a, t, this.stream.getAudioTracks()[0].getSettings()), this.deviceSelection = a.find((c) => c.deviceId === t), console.log("current device", this.deviceSelection);
    });
    const n = new AudioContext({
      sampleRate: this.sampleRate
    }), r = n.createMediaStreamSource(this.stream);
    try {
      await n.audioWorklet.addModule(this.scriptSrc);
    } catch (a) {
      throw console.error(a), new Error(`Could not add audioWorklet module: ${this.scriptSrc}`);
    }
    const i = new AudioWorkletNode(n, "audio_processor");
    i.port.onmessage = (a) => {
      const { event: c, id: l, data: u } = a.data;
      if (c === "receipt") this.eventReceipts[l] = u;
      else if (c === "chunk")
        if (this._chunkProcessorSize) {
          const f = this._chunkProcessorBuffer;
          this._chunkProcessorBuffer = {
            raw: kt.mergeBuffers(f.raw, u.raw),
            mono: kt.mergeBuffers(f.mono, u.mono)
          }, this._chunkProcessorBuffer.mono.byteLength >= this._chunkProcessorSize && (this._chunkProcessor(this._chunkProcessorBuffer), this._chunkProcessorBuffer = {
            raw: new ArrayBuffer(0),
            mono: new ArrayBuffer(0)
          });
        } else this._chunkProcessor(u);
    };
    const s = r.connect(i), o = n.createAnalyser();
    return o.fftSize = 8192, o.smoothingTimeConstant = 0.1, s.connect(o), this.outputToSpeakers && (console.warn(`Warning: Output to speakers may affect sound quality,
especially due to system audio feedback preventative measures.
use only for debugging`), o.connect(n.destination)), this.source = r, this.node = s, this.analyser = o, this.processor = i, console.log("begin completed"), !0;
  }
  /**
  * Gets the current frequency domain data from the recording track
  * @param {"frequency"|"music"|"voice"} [analysisType]
  * @param {number} [minDecibels] default -100
  * @param {number} [maxDecibels] default -30
  * @returns {import('./analysis/audio_analysis.js').AudioAnalysisOutputType}
  */
  getFrequencies(t = "frequency", n = -100, r = -30) {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    return Hr.getFrequencies(this.analyser, this.sampleRate, null, t, n, r);
  }
  /**
  * Pauses the recording
  * Keeps microphone stream open but halts storage of audio
  * @returns {Promise<true>}
  */
  async pause() {
    if (this.processor) {
      if (!this.recording) throw new Error("Already paused: please call .record() first");
    } else throw new Error("Session ended: please call .begin() first");
    return this._chunkProcessorBuffer.raw.byteLength && this._chunkProcessor(this._chunkProcessorBuffer), this.log("Pausing ..."), await this._event("stop"), this.recording = !1, !0;
  }
  /**
  * Start recording stream and storing to memory from the connected audio source
  * @param {(data: { mono: Int16Array; raw: Int16Array }) => any} [chunkProcessor]
  * @param {number} [chunkSize] chunkProcessor will not be triggered until this size threshold met in mono audio
  * @returns {Promise<true>}
  */
  async record(t = () => {
  }, n = 8192) {
    if (this.processor) {
      if (this.recording) throw new Error("Already recording: please call .pause() first");
      if (typeof t != "function") throw new Error("chunkProcessor must be a function");
    } else throw new Error("Session ended: please call .begin() first");
    return this._chunkProcessor = t, this._chunkProcessorSize = n, this._chunkProcessorBuffer = {
      raw: new ArrayBuffer(0),
      mono: new ArrayBuffer(0)
    }, this.log("Recording ..."), await this._event("start"), this.recording = !0, !0;
  }
  /**
  * Clears the audio buffer, empties stored recording
  * @returns {Promise<true>}
  */
  async clear() {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    return await this._event("clear"), !0;
  }
  /**
  * Reads the current audio stream data
  * @returns {Promise<{meanValues: Float32Array, channels: Array<Float32Array>}>}
  */
  async read() {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    return this.log("Reading ..."), await this._event("read");
  }
  /**
  * Saves the current audio stream to a file
  * @param {boolean} [force] Force saving while still recording
  * @returns {Promise<import('./wav_packer.js').WavPackerAudioType>}
  */
  async save(t = !1) {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    if (!t && this.recording) throw new Error("Currently recording: please call .pause() first, or call .save(true) to force");
    this.log("Exporting ...");
    const n = await this._event("export");
    return new kt().pack(this.sampleRate, n.audio);
  }
  /**
  * Ends the current recording session and saves the result
  * @returns {Promise<import('./wav_packer.js').WavPackerAudioType>}
  */
  async end() {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    const t = this.processor;
    this.log("Stopping ..."), await this._event("stop"), this.recording = !1, this.stream.getTracks().forEach((o) => o.stop()), this.log("Exporting ...");
    const r = await this._event("export", {}, t);
    return this.processor.disconnect(), this.source.disconnect(), this.node.disconnect(), this.analyser.disconnect(), this.stream = null, this.processor = null, this.source = null, this.node = null, new kt().pack(this.sampleRate, r.audio);
  }
  /**
  * Performs a full cleanup of WavRecorder instance
  * Stops actively listening via microphone and removes existing listeners
  * @returns {Promise<true>}
  */
  async quit() {
    return this.listenForDeviceChange(null), this.deviceSelection = null, this.processor && await this.end(), !0;
  }
}
globalThis.WavRecorder = Ry;
class c1 {
  /**
  * Create a new MediaStreamRecorder instance
  * @param {{sampleRate?: number, outputToSpeakers?: boolean, debug?: boolean}} [options]
  * @returns {MediaStreamRecorder}
  */
  constructor({ sampleRate: t = 44100, outputToSpeakers: n = !1, debug: r = !1 } = {}) {
    this.scriptSrc = Oy, this.sampleRate = t, this.outputToSpeakers = n, this.debug = !!r, this.stream = null, this.processor = null, this.source = null, this.node = null, this.recording = !1, this._lastEventId = 0, this.eventReceipts = {}, this.eventTimeout = 5e3, this._chunkProcessor = () => {
    }, this._chunkProcessorSize = void 0, this._chunkProcessorBuffer = {
      raw: new ArrayBuffer(0),
      mono: new ArrayBuffer(0)
    };
  }
  /**
  * Logs data in debug mode
  * @param {...any} arguments
  * @returns {true}
  */
  log() {
    return this.debug && this.log(...arguments), !0;
  }
  /**
  * Retrieves the current sampleRate for the recorder
  * @returns {number}
  */
  getSampleRate() {
    return this.sampleRate;
  }
  /**
  * Retrieves the current status of the recording
  * @returns {"ended"|"paused"|"recording"}
  */
  getStatus() {
    return this.processor ? this.recording ? "recording" : "paused" : "ended";
  }
  /**
  * Sends an event to the AudioWorklet
  * @private
  * @param {string} name
  * @param {{[key: string]: any}} data
  * @param {AudioWorkletNode} [_processor]
  * @returns {Promise<{[key: string]: any}>}
  */
  async _event(t, n = {}, r = null) {
    if (r = r || this.processor, !r) throw new Error("Can not send events without recording first");
    const i = {
      event: t,
      id: this._lastEventId++,
      data: n
    };
    r.port.postMessage(i);
    const s = (/* @__PURE__ */ new Date()).valueOf();
    for (; !this.eventReceipts[i.id]; ) {
      if ((/* @__PURE__ */ new Date()).valueOf() - s > this.eventTimeout) throw new Error(`Timeout waiting for "${t}" event`);
      await new Promise((a) => setTimeout(() => a(!0), 1));
    }
    const o = this.eventReceipts[i.id];
    return delete this.eventReceipts[i.id], o;
  }
  /**
  * Begins a recording session for the given audioTrack
  * Microphone recording indicator will appear on browser tab but status will be "paused"
  * @param {MediaStreamTrack} [audioTrack] if no device provided, default device will be used
  * @returns {Promise<true>}
  */
  async begin(t) {
    if (this.processor) throw new Error("Already connected: please call .end() to start a new session");
    if (!t || t.kind !== "audio") throw new Error("No audio track provided");
    this.stream = new MediaStream([
      t
    ]);
    const n = new AudioContext({
      sampleRate: this.sampleRate
    }), r = n.createMediaStreamSource(this.stream);
    try {
      await n.audioWorklet.addModule(this.scriptSrc);
    } catch (a) {
      throw console.error(a), new Error(`Could not add audioWorklet module: ${this.scriptSrc}`);
    }
    const i = new AudioWorkletNode(n, "audio_processor");
    i.port.onmessage = (a) => {
      const { event: c, id: l, data: u } = a.data;
      if (c === "receipt") this.eventReceipts[l] = u;
      else if (c === "chunk")
        if (this._chunkProcessorSize) {
          const f = this._chunkProcessorBuffer;
          this._chunkProcessorBuffer = {
            raw: kt.mergeBuffers(f.raw, u.raw),
            mono: kt.mergeBuffers(f.mono, u.mono)
          }, this._chunkProcessorBuffer.mono.byteLength >= this._chunkProcessorSize && (this._chunkProcessor(this._chunkProcessorBuffer), this._chunkProcessorBuffer = {
            raw: new ArrayBuffer(0),
            mono: new ArrayBuffer(0)
          });
        } else this._chunkProcessor(u);
    };
    const s = r.connect(i), o = n.createAnalyser();
    return o.fftSize = 8192, o.smoothingTimeConstant = 0.1, s.connect(o), this.outputToSpeakers && (console.warn(`Warning: Output to speakers may affect sound quality,
especially due to system audio feedback preventative measures.
use only for debugging`), o.connect(n.destination)), this.source = r, this.node = s, this.analyser = o, this.processor = i, !0;
  }
  /**
  * Gets the current frequency domain data from the recording track
  * @param {"frequency"|"music"|"voice"} [analysisType]
  * @param {number} [minDecibels] default -100
  * @param {number} [maxDecibels] default -30
  * @returns {import('./analysis/audio_analysis.js').AudioAnalysisOutputType}
  */
  getFrequencies(t = "frequency", n = -100, r = -30) {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    return Hr.getFrequencies(this.analyser, this.sampleRate, null, t, n, r);
  }
  /**
  * Pauses the recording
  * Keeps microphone stream open but halts storage of audio
  * @returns {Promise<true>}
  */
  async pause() {
    if (this.processor) {
      if (!this.recording) throw new Error("Already paused: please call .record() first");
    } else throw new Error("Session ended: please call .begin() first");
    return this._chunkProcessorBuffer.raw.byteLength && this._chunkProcessor(this._chunkProcessorBuffer), this.log("Pausing ..."), await this._event("stop"), this.recording = !1, !0;
  }
  /**
  * Start recording stream and storing to memory from the connected audio source
  * @param {(data: { mono: Int16Array; raw: Int16Array }) => any} [chunkProcessor]
  * @param {number} [chunkSize] chunkProcessor will not be triggered until this size threshold met in mono audio
  * @returns {Promise<true>}
  */
  async record(t = () => {
  }, n = 8192) {
    if (this.processor) {
      if (this.recording) throw new Error("Already recording: HELLO please call .pause() first");
      if (typeof t != "function") throw new Error("chunkProcessor must be a function");
    } else throw new Error("Session ended: please call .begin() first");
    return this._chunkProcessor = t, this._chunkProcessorSize = n, this._chunkProcessorBuffer = {
      raw: new ArrayBuffer(0),
      mono: new ArrayBuffer(0)
    }, this.log("Recording ..."), await this._event("start"), this.recording = !0, !0;
  }
  /**
  * Clears the audio buffer, empties stored recording
  * @returns {Promise<true>}
  */
  async clear() {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    return await this._event("clear"), !0;
  }
  /**
  * Reads the current audio stream data
  * @returns {Promise<{meanValues: Float32Array, channels: Array<Float32Array>}>}
  */
  async read() {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    return this.log("Reading ..."), await this._event("read");
  }
  /**
  * Saves the current audio stream to a file
  * @param {boolean} [force] Force saving while still recording
  * @returns {Promise<import('./wav_packer.js').WavPackerAudioType>}
  */
  async save(t = !1) {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    if (!t && this.recording) throw new Error("Currently recording: please call .pause() first, or call .save(true) to force");
    this.log("Exporting ...");
    const n = await this._event("export");
    return new kt().pack(this.sampleRate, n.audio);
  }
  /**
  * Ends the current recording session and saves the result
  * @returns {Promise<import('./wav_packer.js').WavPackerAudioType>}
  */
  async end() {
    if (!this.processor) throw new Error("Session ended: please call .begin() first");
    const t = this.processor;
    this.log("Stopping ..."), await this._event("stop"), this.recording = !1, this.log("Exporting ...");
    const n = await this._event("export", {}, t);
    return this.processor.disconnect(), this.source.disconnect(), this.node.disconnect(), this.analyser.disconnect(), this.stream = null, this.processor = null, this.source = null, this.node = null, new kt().pack(this.sampleRate, n.audio);
  }
  /**
  * Performs a full cleanup of WavRecorder instance
  * Stops actively listening via microphone and removes existing listeners
  * @returns {Promise<true>}
  */
  async quit() {
    return this.listenForDeviceChange(null), this.processor && await this.end(), !0;
  }
}
globalThis.WavRecorder = WavRecorder;
var l1 = /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), Ln = function(e, t, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        l(r.next(u));
      } catch (f) {
        o(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        o(f);
      }
    }
    function l(u) {
      u.done ? s(u.value) : i(u.value).then(a, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, jn = function(e, t) {
  var n = {
    label: 0,
    sent: function() {
      if (s[0] & 1) throw s[1];
      return s[1];
    },
    trys: [],
    ops: []
  }, r, i, s, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(u) {
      return c([
        l,
        u
      ]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s;
      switch (i = 0, s && (l = [
        l[0] & 2,
        s.value
      ]), l[0]) {
        case 0:
        case 1:
          s = l;
          break;
        case 4:
          return n.label++, {
            value: l[1],
            done: !1
          };
        case 5:
          n.label++, i = l[1], l = [
            0
          ];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < s[1]) {
            n.label = s[1], s = l;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2], n.ops.push(l);
            break;
          }
          s[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = t.call(e, n);
    } catch (u) {
      l = [
        6,
        u
      ], i = 0;
    } finally {
      r = s = 0;
    }
    if (l[0] & 5) throw l[1];
    return {
      value: l[0] ? l[1] : void 0,
      done: !0
    };
  }
}, Ly = (
  /** @class */
  function() {
    function e() {
      this._callbacks = {}, this._micEnabled = !0, this._camEnabled = !1;
    }
    return e.prototype.setUserAudioCallback = function(t) {
      this._userAudioCallback = t;
    }, e.prototype.setClientOptions = function(t, n) {
      var r, i, s;
      n === void 0 && (n = !1), !(this._options && !n) && (this._options = t, this._callbacks = (r = t.callbacks) !== null && r !== void 0 ? r : {}, this._micEnabled = (i = t.enableMic) !== null && i !== void 0 ? i : !0, this._camEnabled = (s = t.enableCam) !== null && s !== void 0 ? s : !1);
    }, e;
  }()
);
(function(e) {
  l1(t, e);
  function t(n, r) {
    n === void 0 && (n = void 0), r === void 0 && (r = 24e3);
    var i = e.call(this) || this;
    return i._initialized = !1, i._recorderChunkSize = void 0, i._recorderChunkSize = n, i._wavRecorder = new Ry({
      sampleRate: r
    }), i._wavStreamPlayer = new ou({
      sampleRate: 24e3
    }), i;
  }
  return t.prototype.initialize = function() {
    return Ln(this, void 0, Promise, function() {
      return jn(this, function(n) {
        switch (n.label) {
          case 0:
            return [
              4,
              this._wavRecorder.begin()
            ];
          case 1:
            return n.sent(), this._wavRecorder.listenForDeviceChange(null), this._wavRecorder.listenForDeviceChange(this._handleAvailableDevicesUpdated.bind(this)), [
              4,
              this._wavStreamPlayer.connect()
            ];
          case 2:
            return n.sent(), this._initialized = !0, [
              2
              /*return*/
            ];
        }
      });
    });
  }, t.prototype.connect = function() {
    return Ln(this, void 0, Promise, function() {
      var n;
      return jn(this, function(r) {
        switch (r.label) {
          case 0:
            return this._initialized ? [
              3,
              2
            ] : [
              4,
              this.initialize()
            ];
          case 1:
            r.sent(), r.label = 2;
          case 2:
            return n = this._wavRecorder.getStatus() == "recording", this._micEnabled && !n ? [
              4,
              this._startRecording()
            ] : [
              3,
              4
            ];
          case 3:
            r.sent(), r.label = 4;
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, t.prototype.disconnect = function() {
    return Ln(this, void 0, Promise, function() {
      return jn(this, function(n) {
        switch (n.label) {
          case 0:
            return this._initialized ? [
              4,
              this._wavRecorder.end()
            ] : [
              2
              /*return*/
            ];
          case 1:
            return n.sent(), [
              4,
              this._wavStreamPlayer.interrupt()
            ];
          case 2:
            return n.sent(), this._initialized = !1, [
              2
              /*return*/
            ];
        }
      });
    });
  }, t.prototype.userStartedSpeaking = function() {
    return Ln(this, void 0, Promise, function() {
      return jn(this, function(n) {
        return [
          2,
          this._wavStreamPlayer.interrupt()
        ];
      });
    });
  }, t.prototype.bufferBotAudio = function(n, r) {
    return this._wavStreamPlayer.add16BitPCM(n, r);
  }, t.prototype.getAllMics = function() {
    return this._wavRecorder.listDevices();
  }, t.prototype.getAllCams = function() {
    return Promise.resolve([]);
  }, t.prototype.getAllSpeakers = function() {
    return Promise.resolve([]);
  }, t.prototype.updateMic = function(n) {
    return Ln(this, void 0, Promise, function() {
      var r, i, s, o;
      return jn(this, function(a) {
        switch (a.label) {
          case 0:
            return r = this._wavRecorder.deviceSelection, [
              4,
              this._wavRecorder.end()
            ];
          case 1:
            return a.sent(), [
              4,
              this._wavRecorder.begin(n)
            ];
          case 2:
            return a.sent(), this._micEnabled ? [
              4,
              this._startRecording()
            ] : [
              3,
              4
            ];
          case 3:
            a.sent(), a.label = 4;
          case 4:
            return i = this._wavRecorder.deviceSelection, i && r && r.label !== i.label && ((o = (s = this._callbacks).onMicUpdated) === null || o === void 0 || o.call(s, i)), [
              2
              /*return*/
            ];
        }
      });
    });
  }, t.prototype.updateCam = function(n) {
  }, t.prototype.updateSpeaker = function(n) {
  }, Object.defineProperty(t.prototype, "selectedMic", {
    get: function() {
      var n;
      return (n = this._wavRecorder.deviceSelection) !== null && n !== void 0 ? n : {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "selectedCam", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "selectedSpeaker", {
    get: function() {
      return {};
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.enableMic = function(n) {
    return Ln(this, void 0, Promise, function() {
      var r = this;
      return jn(this, function(i) {
        switch (i.label) {
          case 0:
            return this._micEnabled = n, this._wavRecorder.stream ? (this._wavRecorder.stream.getAudioTracks().forEach(function(s) {
              var o, a;
              s.enabled = n, n || (a = (o = r._callbacks).onTrackStopped) === null || a === void 0 || a.call(o, s, gp());
            }), n ? [
              4,
              this._startRecording()
            ] : [
              3,
              2
            ]) : [
              2
              /*return*/
            ];
          case 1:
            return i.sent(), [
              3,
              4
            ];
          case 2:
            return [
              4,
              this._wavRecorder.pause()
            ];
          case 3:
            i.sent(), i.label = 4;
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  }, t.prototype.enableCam = function(n) {
  }, Object.defineProperty(t.prototype, "isCamEnabled", {
    get: function() {
      return !1;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "isMicEnabled", {
    get: function() {
      return this._micEnabled;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.tracks = function() {
    var n, r = (n = this._wavRecorder.stream) === null || n === void 0 ? void 0 : n.getTracks()[0];
    return {
      local: r ? {
        audio: r
      } : {}
    };
  }, t.prototype._startRecording = function() {
    return Ln(this, void 0, void 0, function() {
      var n, r = this, i, s, o;
      return jn(this, function(a) {
        switch (a.label) {
          case 0:
            return [
              4,
              this._wavRecorder.record(function(c) {
                r._userAudioCallback(c.mono);
              }, this._recorderChunkSize)
            ];
          case 1:
            return a.sent(), n = (i = this._wavRecorder.stream) === null || i === void 0 ? void 0 : i.getAudioTracks()[0], n && ((o = (s = this._callbacks).onTrackStarted) === null || o === void 0 || o.call(s, n, gp())), [
              2
              /*return*/
            ];
        }
      });
    });
  }, t.prototype._handleAvailableDevicesUpdated = function(n) {
    var r, i, s, o;
    (i = (r = this._callbacks).onAvailableCamsUpdated) === null || i === void 0 || i.call(r, n.filter(function(l) {
      return l.kind === "videoinput";
    })), (o = (s = this._callbacks).onAvailableMicsUpdated) === null || o === void 0 || o.call(s, n.filter(function(l) {
      return l.kind === "audioinput";
    }));
    var a = n.find(function(l) {
      return l.deviceId === "default";
    }), c = this._wavRecorder.deviceSelection;
    c && (!n.some(function(l) {
      return l.deviceId === c.deviceId;
    }) || c.deviceId === "default" && c.label !== a?.label) && this.updateMic("");
  }, t;
})(Ly);
var gp = function() {
  return {
    id: "local",
    name: "",
    local: !0
  };
}, u1 = /* @__PURE__ */ function() {
  var e = function(t, n) {
    return e = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, e(t, n);
  };
  return function(t, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    e(t, n);
    function r() {
      this.constructor = t;
    }
    t.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), wt = function(e, t, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        l(r.next(u));
      } catch (f) {
        o(f);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (f) {
        o(f);
      }
    }
    function l(u) {
      u.done ? s(u.value) : i(u.value).then(a, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, xt = function(e, t) {
  var n = {
    label: 0,
    sent: function() {
      if (s[0] & 1) throw s[1];
      return s[1];
    },
    trys: [],
    ops: []
  }, r, i, s, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = a(0), o.throw = a(1), o.return = a(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(u) {
      return c([
        l,
        u
      ]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done) return s;
      switch (i = 0, s && (l = [
        l[0] & 2,
        s.value
      ]), l[0]) {
        case 0:
        case 1:
          s = l;
          break;
        case 4:
          return n.label++, {
            value: l[1],
            done: !1
          };
        case 5:
          n.label++, i = l[1], l = [
            0
          ];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < s[1]) {
            n.label = s[1], s = l;
            break;
          }
          if (s && n.label < s[2]) {
            n.label = s[2], n.ops.push(l);
            break;
          }
          s[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = t.call(e, n);
    } catch (u) {
      l = [
        6,
        u
      ], i = 0;
    } finally {
      r = s = 0;
    }
    if (l[0] & 5) throw l[1];
    return {
      value: l[0] ? l[1] : void 0,
      done: !0
    };
  }
}, d1 = (
  /** @class */
  function(e) {
    u1(t, e);
    function t(n, r, i, s, o, a, c) {
      n === void 0 && (n = !0), r === void 0 && (r = !0), o === void 0 && (o = void 0), a === void 0 && (a = 24e3), c === void 0 && (c = 24e3);
      var l, u = e.call(this) || this;
      return u._selectedCam = {}, u._selectedMic = {}, u._selectedSpeaker = {}, u._remoteAudioLevelInterval = null, u._recorderChunkSize = void 0, u._initialized = !1, u._connected = !1, u._currentAudioTrack = null, u._connectResolve = null, u.onTrackStartedCallback = i, u.onTrackStoppedCallback = s, u._recorderChunkSize = o, u._daily = (l = lp.getCallInstance()) !== null && l !== void 0 ? l : lp.createCallObject(), r && (u._mediaStreamRecorder = new c1({
        sampleRate: a
      })), n && (u._wavStreamPlayer = new ou({
        sampleRate: c
      })), u._daily.on("track-started", u.handleTrackStarted.bind(u)), u._daily.on("track-stopped", u.handleTrackStopped.bind(u)), u._daily.on("available-devices-updated", u._handleAvailableDevicesUpdated.bind(u)), u._daily.on("selected-devices-updated", u._handleSelectedDevicesUpdated.bind(u)), u._daily.on("local-audio-level", u._handleLocalAudioLevel.bind(u)), u;
    }
    return t.prototype.initialize = function() {
      return wt(this, void 0, Promise, function() {
        var n, r, i, s, o, a = this, c, l, u, f, h, p, g, y, b, w, M, C;
        return xt(this, function(S) {
          switch (S.label) {
            case 0:
              return this._initialized ? (console.warn("DailyMediaManager already initialized"), [
                2
                /*return*/
              ]) : [
                4,
                this._daily.startCamera({
                  startVideoOff: !this._camEnabled,
                  startAudioOff: !this._micEnabled
                })
              ];
            case 1:
              return n = S.sent(), [
                4,
                this._daily.enumerateDevices()
              ];
            case 2:
              return r = S.sent().devices, i = r.filter(function(_) {
                return _.kind === "videoinput";
              }), s = r.filter(function(_) {
                return _.kind === "audioinput";
              }), o = r.filter(function(_) {
                return _.kind === "audiooutput";
              }), (l = (c = this._callbacks).onAvailableCamsUpdated) === null || l === void 0 || l.call(c, i), (f = (u = this._callbacks).onAvailableMicsUpdated) === null || f === void 0 || f.call(u, s), (p = (h = this._callbacks).onAvailableSpeakersUpdated) === null || p === void 0 || p.call(h, o), this._selectedCam = n.camera, (y = (g = this._callbacks).onCamUpdated) === null || y === void 0 || y.call(g, n.camera), this._selectedMic = n.mic, (w = (b = this._callbacks).onMicUpdated) === null || w === void 0 || w.call(b, n.mic), this._selectedSpeaker = n.speaker, (C = (M = this._callbacks).onSpeakerUpdated) === null || C === void 0 || C.call(M, n.speaker), this._daily.isLocalAudioLevelObserverRunning() ? [
                3,
                4
              ] : [
                4,
                this._daily.startLocalAudioLevelObserver(100)
              ];
            case 3:
              S.sent(), S.label = 4;
            case 4:
              return this._wavStreamPlayer ? [
                4,
                this._wavStreamPlayer.connect()
              ] : [
                3,
                6
              ];
            case 5:
              S.sent(), this._remoteAudioLevelInterval || (this._remoteAudioLevelInterval = setInterval(function() {
                var _, O = a._wavStreamPlayer.getFrequencies(), k = 0;
                !((_ = O.values) === null || _ === void 0) && _.length && (k = O.values.reduce(function(P, R) {
                  return P + R;
                }, 0) / O.values.length), a._handleRemoteAudioLevel(k);
              }, 100)), S.label = 6;
            case 6:
              return this._initialized = !0, [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.connect = function() {
      return wt(this, void 0, Promise, function() {
        var n = this;
        return xt(this, function(r) {
          return this._connected ? (console.warn("DailyMediaManager already connected"), [
            2
            /*return*/
          ]) : (this._connected = !0, this._initialized ? (this._micEnabled && this._startRecording(), [
            2
            /*return*/
          ]) : [
            2,
            new Promise(function(i) {
              (function() {
                return wt(n, void 0, void 0, function() {
                  return xt(this, function(s) {
                    switch (s.label) {
                      case 0:
                        return this._connectResolve = i, [
                          4,
                          this.initialize()
                        ];
                      case 1:
                        return s.sent(), [
                          2
                          /*return*/
                        ];
                    }
                  });
                });
              })();
            })
          ]);
        });
      });
    }, t.prototype.disconnect = function() {
      return wt(this, void 0, Promise, function() {
        var n, r;
        return xt(this, function(i) {
          switch (i.label) {
            case 0:
              return this._remoteAudioLevelInterval && clearInterval(this._remoteAudioLevelInterval), this._remoteAudioLevelInterval = null, this._daily.leave(), this._currentAudioTrack = null, [
                4,
                (n = this._mediaStreamRecorder) === null || n === void 0 ? void 0 : n.end()
              ];
            case 1:
              return i.sent(), (r = this._wavStreamPlayer) === null || r === void 0 || r.interrupt(), this._initialized = !1, this._connected = !1, [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.userStartedSpeaking = function() {
      return wt(this, void 0, Promise, function() {
        var n;
        return xt(this, function(r) {
          return [
            2,
            (n = this._wavStreamPlayer) === null || n === void 0 ? void 0 : n.interrupt()
          ];
        });
      });
    }, t.prototype.bufferBotAudio = function(n, r) {
      var i;
      return (i = this._wavStreamPlayer) === null || i === void 0 ? void 0 : i.add16BitPCM(n, r);
    }, t.prototype.getAllMics = function() {
      return wt(this, void 0, Promise, function() {
        var n;
        return xt(this, function(r) {
          switch (r.label) {
            case 0:
              return [
                4,
                this._daily.enumerateDevices()
              ];
            case 1:
              return n = r.sent().devices, [
                2,
                n.filter(function(i) {
                  return i.kind === "audioinput";
                })
              ];
          }
        });
      });
    }, t.prototype.getAllCams = function() {
      return wt(this, void 0, Promise, function() {
        var n;
        return xt(this, function(r) {
          switch (r.label) {
            case 0:
              return [
                4,
                this._daily.enumerateDevices()
              ];
            case 1:
              return n = r.sent().devices, [
                2,
                n.filter(function(i) {
                  return i.kind === "videoinput";
                })
              ];
          }
        });
      });
    }, t.prototype.getAllSpeakers = function() {
      return wt(this, void 0, Promise, function() {
        var n;
        return xt(this, function(r) {
          switch (r.label) {
            case 0:
              return [
                4,
                this._daily.enumerateDevices()
              ];
            case 1:
              return n = r.sent().devices, [
                2,
                n.filter(function(i) {
                  return i.kind === "audiooutput";
                })
              ];
          }
        });
      });
    }, t.prototype.updateMic = function(n) {
      var r = this;
      this._daily.setInputDevicesAsync({
        audioDeviceId: n
      }).then(function(i) {
        r._selectedMic = i.mic;
      });
    }, t.prototype.updateCam = function(n) {
      var r = this;
      this._daily.setInputDevicesAsync({
        videoDeviceId: n
      }).then(function(i) {
        r._selectedCam = i.camera;
      });
    }, t.prototype.updateSpeaker = function(n) {
      return wt(this, void 0, Promise, function() {
        var r, i, s, o, a = this, c, l;
        return xt(this, function(u) {
          switch (u.label) {
            case 0:
              return n !== "default" && this._selectedSpeaker.deviceId === n ? [
                2
                /*return*/
              ] : (r = n, r !== "default" ? [
                3,
                2
              ] : [
                4,
                this.getAllSpeakers()
              ]);
            case 1:
              if (i = u.sent(), s = i.find(function(f) {
                return f.deviceId === "default";
              }), !s)
                return console.warn("No default speaker found"), [
                  2
                  /*return*/
                ];
              i.splice(i.indexOf(s), 1), o = i.find(function(f) {
                return s.label.includes(f.label);
              }), r = (c = o?.deviceId) !== null && c !== void 0 ? c : n, u.label = 2;
            case 2:
              return (l = this._wavStreamPlayer) === null || l === void 0 || l.updateSpeaker(r).then(function() {
                var f, h;
                a._selectedSpeaker = {
                  deviceId: n
                }, (h = (f = a._callbacks).onSpeakerUpdated) === null || h === void 0 || h.call(f, a._selectedSpeaker);
              }), [
                2
                /*return*/
              ];
          }
        });
      });
    }, Object.defineProperty(t.prototype, "selectedMic", {
      get: function() {
        return this._selectedMic;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "selectedCam", {
      get: function() {
        return this._selectedCam;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "selectedSpeaker", {
      get: function() {
        return this._selectedSpeaker;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.enableMic = function(n) {
      return wt(this, void 0, Promise, function() {
        var r;
        return xt(this, function(i) {
          return this._micEnabled = n, !((r = this._daily.participants()) === null || r === void 0) && r.local ? (this._daily.setLocalAudio(n), this._mediaStreamRecorder && (n ? this._mediaStreamRecorder.getStatus() === "paused" && this._startRecording() : this._mediaStreamRecorder.getStatus() === "recording" && this._mediaStreamRecorder.pause()), [
            2
            /*return*/
          ]) : [
            2
            /*return*/
          ];
        });
      });
    }, t.prototype.enableCam = function(n) {
      this._camEnabled = n, this._daily.setLocalVideo(n);
    }, Object.defineProperty(t.prototype, "isCamEnabled", {
      get: function() {
        return this._daily.localVideo();
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "isMicEnabled", {
      get: function() {
        return this._daily.localAudio();
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.tracks = function() {
      var n, r, i, s, o, a, c = this._daily.participants();
      return {
        local: {
          audio: (i = (r = (n = c?.local) === null || n === void 0 ? void 0 : n.tracks) === null || r === void 0 ? void 0 : r.audio) === null || i === void 0 ? void 0 : i.persistentTrack,
          video: (a = (o = (s = c?.local) === null || s === void 0 ? void 0 : s.tracks) === null || o === void 0 ? void 0 : o.video) === null || a === void 0 ? void 0 : a.persistentTrack
        }
      };
    }, t.prototype._startRecording = function() {
      var n = this;
      if (!(!this._connected || !this._mediaStreamRecorder))
        try {
          this._mediaStreamRecorder.record(function(i) {
            n._userAudioCallback(i.mono);
          }, this._recorderChunkSize);
        } catch (i) {
          var r = i;
          r.message.includes("Already recording") || console.error("Error starting recording", i);
        }
    }, t.prototype._handleAvailableDevicesUpdated = function(n) {
      var r, i, s, o, a, c;
      (i = (r = this._callbacks).onAvailableCamsUpdated) === null || i === void 0 || i.call(r, n.availableDevices.filter(function(l) {
        return l.kind === "videoinput";
      })), (o = (s = this._callbacks).onAvailableMicsUpdated) === null || o === void 0 || o.call(s, n.availableDevices.filter(function(l) {
        return l.kind === "audioinput";
      })), (c = (a = this._callbacks).onAvailableSpeakersUpdated) === null || c === void 0 || c.call(a, n.availableDevices.filter(function(l) {
        return l.kind === "audiooutput";
      })), this._selectedSpeaker.deviceId === "default" && this.updateSpeaker("default");
    }, t.prototype._handleSelectedDevicesUpdated = function(n) {
      var r, i, s, o, a, c;
      ((r = this._selectedCam) === null || r === void 0 ? void 0 : r.deviceId) !== n.devices.camera && (this._selectedCam = n.devices.camera, (s = (i = this._callbacks).onCamUpdated) === null || s === void 0 || s.call(i, n.devices.camera)), ((o = this._selectedMic) === null || o === void 0 ? void 0 : o.deviceId) !== n.devices.mic && (this._selectedMic = n.devices.mic, (c = (a = this._callbacks).onMicUpdated) === null || c === void 0 || c.call(a, n.devices.mic));
    }, t.prototype._handleLocalAudioLevel = function(n) {
      var r, i;
      (i = (r = this._callbacks).onLocalAudioLevel) === null || i === void 0 || i.call(r, n.audioLevel);
    }, t.prototype._handleRemoteAudioLevel = function(n) {
      var r, i;
      (i = (r = this._callbacks).onRemoteAudioLevel) === null || i === void 0 || i.call(r, n, f1());
    }, t.prototype.handleTrackStarted = function(n) {
      return wt(this, void 0, void 0, function() {
        var r, i, s, o, a, c;
        return xt(this, function(l) {
          switch (l.label) {
            case 0:
              if (!(!((s = n.participant) === null || s === void 0) && s.local)) return [
                2
                /*return*/
              ];
              if (n.track.kind !== "audio") return [
                3,
                10
              ];
              if (!this._mediaStreamRecorder) return [
                3,
                9
              ];
              switch (r = this._mediaStreamRecorder.getStatus(), i = r, i) {
                case "ended":
                  return [
                    3,
                    1
                  ];
                case "paused":
                  return [
                    3,
                    3
                  ];
                case "recording":
                  return [
                    3,
                    4
                  ];
              }
              return [
                3,
                4
              ];
            case 1:
              return [
                4,
                this._mediaStreamRecorder.begin(n.track)
              ];
            case 2:
              return l.sent(), this._connected && (this._startRecording(), this._connectResolve && (this._connectResolve(), this._connectResolve = null)), [
                3,
                9
              ];
            case 3:
              return this._startRecording(), [
                3,
                9
              ];
            case 4:
              return this._currentAudioTrack === n.track ? [
                3,
                7
              ] : [
                4,
                this._mediaStreamRecorder.end()
              ];
            case 5:
              return l.sent(), [
                4,
                this._mediaStreamRecorder.begin(n.track)
              ];
            case 6:
              return l.sent(), this._startRecording(), [
                3,
                8
              ];
            case 7:
              console.warn("track-started event received for current track and already recording"), l.label = 8;
            case 8:
              return [
                3,
                9
              ];
            case 9:
              this._currentAudioTrack = n.track, l.label = 10;
            case 10:
              return (a = (o = this._callbacks).onTrackStarted) === null || a === void 0 || a.call(o, n.track, n.participant ? vp(n.participant) : void 0), (c = this.onTrackStartedCallback) === null || c === void 0 || c.call(this, n), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.handleTrackStopped = function(n) {
      var r, i, s, o;
      !((r = n.participant) === null || r === void 0) && r.local && (n.track.kind === "audio" && this._mediaStreamRecorder && this._mediaStreamRecorder.getStatus() === "recording" && this._mediaStreamRecorder.pause(), (s = (i = this._callbacks).onTrackStopped) === null || s === void 0 || s.call(i, n.track, n.participant ? vp(n.participant) : void 0), (o = this.onTrackStoppedCallback) === null || o === void 0 || o.call(this, n));
    }, t;
  }(Ly)
), vp = function(e) {
  return {
    id: e.user_id,
    local: e.local,
    name: e.user_name
  };
}, f1 = function() {
  return {
    id: "bot",
    local: !1,
    name: "Bot"
  };
};
class ms {
  constructor(t, n) {
    this.type = "trackStatus", this.receiver_index = t, this.enabled = n;
  }
}
const h1 = "renegotiate", p1 = "peerLeft", jy = "signalling";
class m1 {
  constructor(t) {
    this.type = jy, this.message = t;
  }
}
const Sa = 0, _a = 1;
class au extends Hp {
  constructor(t = {}) {
    super(), this._connectionUrl = null, this._connectResolved = null, this._connectFailed = null, this.pc = null, this.dc = null, this.audioCodec = null, this.videoCodec = null, this.pc_id = null, this.reconnectionAttempts = 0, this.maxReconnectionAttempts = 3, this.isReconnecting = !1, this.keepAliveInterval = null, this._iceServers = [], this._iceServers = t.iceServers || [], this._waitForICEGathering = t.waitForICEGathering || !1, this._connectionUrl = t.connectionUrl || null, this.audioCodec = t.audioCodec || null, this.videoCodec = t.videoCodec || null, this.mediaManager = new d1(!1, !1, async (n) => {
      this.pc && (n.type == "audio" ? (Z.info("SmallWebRTCMediaManager replacing audio track"), await this.getAudioTransceiver().sender.replaceTrack(n.track)) : n.type == "video" && (Z.info("SmallWebRTCMediaManager replacing video track"), await this.getVideoTransceiver().sender.replaceTrack(n.track)));
    }, (n) => Z.debug("SmallWebRTCMediaManager Track stopped:", n));
  }
  initialize(t, n) {
    this._options = t, this._callbacks = t.callbacks ?? {}, this._onMessage = n, this.mediaManager.setClientOptions(t), this.state = "disconnected", Z.debug("[RTVI Transport] Initialized");
  }
  async initDevices() {
    this.state = "initializing", await this.mediaManager.initialize(), this.state = "initialized";
  }
  setAudioCodec(t) {
    this.audioCodec = t;
  }
  setVideoCodec(t) {
    this.videoCodec = t;
  }
  _validateConnectionParams(t) {
    if (t != null) {
      if (typeof t != "object") throw new Ct("Invalid connection parameters");
      for (const [n, r] of Object.entries(t)) {
        if (n !== "connectionUrl") throw new Ct(`Unrecognized connection parameter: ${n}. Only 'connectionUrl' is allowed.`);
        if (typeof r != "string") throw new Ct(`Invalid type for connectionUrl: expected string, got ${typeof r}`);
      }
      return t;
    }
  }
  async _connect(t) {
    if (!this._abortController?.signal.aborted) {
      if (this.state = "connecting", this._connectionUrl = t?.connectionUrl ?? this._connectionUrl, !this._connectionUrl)
        throw Z.error("No url provided for connection"), this.state = "error", new Bp();
      await this.mediaManager.connect(), await this.startNewPeerConnection(), !this._abortController?.signal.aborted && (await new Promise((n, r) => {
        this._connectResolved = n, this._connectFailed = r;
      }), this.state = "connected", this._callbacks.onConnected?.());
    }
  }
  syncTrackStatus() {
    this.sendSignallingMessage(new ms(Sa, this.mediaManager.isMicEnabled)), this.sendSignallingMessage(new ms(_a, this.mediaManager.isCamEnabled));
  }
  sendReadyMessage() {
    this.state = "ready", this.sendMessage(Et.clientReady());
  }
  sendMessage(t) {
    if (!this.dc || this.dc.readyState !== "open") {
      Z.warn(`Datachannel is not ready. Message not sent: ${t}`);
      return;
    }
    this.dc?.send(JSON.stringify(t));
  }
  sendSignallingMessage(t) {
    if (!this.dc || this.dc.readyState !== "open") {
      Z.warn(`Datachannel is not ready. Message not sent: ${t}`);
      return;
    }
    const n = new m1(t);
    this.dc?.send(JSON.stringify(n));
  }
  async _disconnect() {
    this.state = "disconnecting", await this.stop(), this.state = "disconnected";
  }
  createPeerConnection() {
    const t = {
      iceServers: this._iceServers
    };
    let n = new RTCPeerConnection(t);
    return n.addEventListener("icegatheringstatechange", () => {
      Z.debug(`iceGatheringState: ${this.pc.iceGatheringState}`);
    }), Z.debug(`iceGatheringState: ${n.iceGatheringState}`), n.addEventListener("iceconnectionstatechange", () => this.handleICEConnectionStateChange()), Z.debug(`iceConnectionState: ${n.iceConnectionState}`), n.addEventListener("signalingstatechange", () => {
      Z.debug(`signalingState: ${this.pc.signalingState}`), this.pc.signalingState == "stable" && this.handleReconnectionCompleted();
    }), Z.debug(`signalingState: ${n.signalingState}`), n.addEventListener("track", (r) => {
      Z.debug(`Received new track ${r.track.kind}`), this._callbacks.onTrackStarted?.(r.track);
    }), n;
  }
  handleICEConnectionStateChange() {
    this.pc && (Z.debug(`ICE Connection State: ${this.pc.iceConnectionState}`), this.pc.iceConnectionState === "failed" ? (Z.debug("ICE connection failed, attempting restart."), this.attemptReconnection(!0)) : this.pc.iceConnectionState === "disconnected" && setTimeout(() => {
      this.pc?.iceConnectionState === "disconnected" && (Z.debug("Still disconnected, attempting reconnection."), this.attemptReconnection(!0));
    }, 5e3));
  }
  handleReconnectionCompleted() {
    this.reconnectionAttempts = 0, this.isReconnecting = !1;
  }
  async attemptReconnection(t = !1) {
    if (this.isReconnecting) {
      Z.debug("Reconnection already in progress, skipping.");
      return;
    }
    if (this.reconnectionAttempts >= this.maxReconnectionAttempts) {
      Z.debug("Max reconnection attempts reached. Stopping transport."), await this.stop();
      return;
    }
    if (this.isReconnecting = !0, this.reconnectionAttempts++, Z.debug(`Reconnection attempt ${this.reconnectionAttempts}...`), t) {
      const n = this.pc;
      await this.startNewPeerConnection(t), n && (Z.debug("closing old peer connection"), this.closePeerConnection(n));
    } else await this.negotiate();
  }
  async negotiate(t = !1) {
    if (!this.pc) return Promise.reject("Peer connection is not initialized");
    try {
      const n = await this.pc.createOffer();
      await this.pc.setLocalDescription(n), this._waitForICEGathering && await new Promise((o) => {
        if (this.pc.iceGatheringState === "complete") o();
        else {
          const a = () => {
            this.pc.iceGatheringState === "complete" && (this.pc.removeEventListener("icegatheringstatechange", a), o());
          };
          this.pc.addEventListener("icegatheringstatechange", a);
        }
      });
      let r = this.pc.localDescription;
      this.audioCodec && this.audioCodec !== "default" && (r.sdp = this.sdpFilterCodec("audio", this.audioCodec, r.sdp)), this.videoCodec && this.videoCodec !== "default" && (r.sdp = this.sdpFilterCodec("video", this.videoCodec, r.sdp)), Z.debug(`Will create offer for peerId: ${this.pc_id}`);
      const s = await (await fetch(this._connectionUrl, {
        body: JSON.stringify({
          sdp: r.sdp,
          type: r.type,
          pc_id: this.pc_id,
          restart_pc: t
        }),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })).json();
      this.pc_id = s.pc_id, Z.debug(`Received answer for peer connection id ${s.pc_id}`), await this.pc.setRemoteDescription(s), Z.debug(`Remote candidate supports trickle ice: ${this.pc.canTrickleIceCandidates}`);
    } catch (n) {
      Z.debug(`Reconnection attempt ${this.reconnectionAttempts} failed: ${n}`), this.isReconnecting = !1, setTimeout(() => this.attemptReconnection(!0), 2e3);
    }
  }
  addInitialTransceivers() {
    this.pc.addTransceiver("audio", {
      direction: "sendrecv"
    }), this.pc.addTransceiver("video", {
      direction: "sendrecv"
    });
  }
  getAudioTransceiver() {
    return this.pc.getTransceivers()[Sa];
  }
  getVideoTransceiver() {
    return this.pc.getTransceivers()[_a];
  }
  async startNewPeerConnection(t = !1) {
    this.pc = this.createPeerConnection(), this.addInitialTransceivers(), this.dc = this.createDataChannel("chat", {
      ordered: !0
    }), await this.addUserMedia(), await this.negotiate(t);
  }
  async addUserMedia() {
    Z.debug(`addUserMedia this.tracks(): ${this.tracks()}`);
    let t = this.tracks().local.audio;
    Z.debug(`addUserMedia audioTrack: ${t}`), t && await this.getAudioTransceiver().sender.replaceTrack(t);
    let n = this.tracks().local.video;
    Z.debug(`addUserMedia videoTrack: ${n}`), n && await this.getVideoTransceiver().sender.replaceTrack(n);
  }
  // Method to handle a general message (this can be expanded for other types of messages)
  handleMessage(t) {
    try {
      const n = JSON.parse(t);
      Z.debug("received message:", n), n.type === jy ? this.handleSignallingMessage(n) : n.label === "rtvi-ai" && this._onMessage({
        id: n.id,
        type: n.type,
        data: n.data
      });
    } catch (n) {
      console.error("Failed to parse JSON message:", n);
    }
  }
  // Method to handle signalling messages specifically
  async handleSignallingMessage(t) {
    const n = t;
    switch (n.message.type) {
      case h1:
        this.attemptReconnection(!1);
        break;
      case p1:
        this.disconnect();
        break;
      default:
        console.warn("Unknown signalling message:", n.message);
    }
  }
  createDataChannel(t, n) {
    const r = this.pc.createDataChannel(t, n);
    return r.addEventListener("close", () => {
      Z.debug("datachannel closed"), this.keepAliveInterval && (clearInterval(this.keepAliveInterval), this.keepAliveInterval = null);
    }), r.addEventListener("open", () => {
      Z.debug("datachannel opened"), this._connectResolved && (this.syncTrackStatus(), this._connectResolved(), this._connectResolved = null, this._connectFailed = null), this.keepAliveInterval = setInterval(() => {
        const i = "ping: " + (/* @__PURE__ */ new Date()).getTime();
        r.send(i);
      }, 1e3);
    }), r.addEventListener("message", (i) => {
      let s = i.data;
      this.handleMessage(s);
    }), r;
  }
  closePeerConnection(t) {
    t.getTransceivers().forEach((n) => {
      n.stop && n.stop();
    }), t.getSenders().forEach((n) => {
      n.track?.stop();
    }), t.close();
  }
  async stop() {
    if (!this.pc) {
      Z.debug("Peer connection is already closed or null.");
      return;
    }
    this.dc && this.dc.close(), this.closePeerConnection(this.pc), this.pc = null, await this.mediaManager.disconnect(), this.pc_id = null, this.reconnectionAttempts = 0, this.isReconnecting = !1, this._callbacks.onDisconnected?.(), this._connectFailed && this._connectFailed(), this._connectFailed = null, this._connectResolved = null;
  }
  getAllMics() {
    return this.mediaManager.getAllMics();
  }
  getAllCams() {
    return this.mediaManager.getAllCams();
  }
  getAllSpeakers() {
    return this.mediaManager.getAllSpeakers();
  }
  async updateMic(t) {
    return this.mediaManager.updateMic(t);
  }
  updateCam(t) {
    return this.mediaManager.updateCam(t);
  }
  updateSpeaker(t) {
    return this.mediaManager.updateSpeaker(t);
  }
  get selectedMic() {
    return this.mediaManager.selectedMic;
  }
  get selectedCam() {
    return this.mediaManager.selectedCam;
  }
  get selectedSpeaker() {
    return this.mediaManager.selectedSpeaker;
  }
  set iceServers(t) {
    this._iceServers = t;
  }
  get iceServers() {
    return this._iceServers;
  }
  enableMic(t) {
    this.mediaManager.enableMic(t), this.sendSignallingMessage(new ms(Sa, t));
  }
  enableCam(t) {
    this.mediaManager.enableCam(t), this.sendSignallingMessage(new ms(_a, t));
  }
  get isCamEnabled() {
    return this.mediaManager.isCamEnabled;
  }
  get isMicEnabled() {
    return this.mediaManager.isMicEnabled;
  }
  get state() {
    return this._state;
  }
  set state(t) {
    this._state !== t && (this._state = t, this._callbacks.onTransportStateChanged?.(t));
  }
  tracks() {
    return this.mediaManager.tracks();
  }
  // Not implemented
  enableScreenShare(t) {
    throw Z.error("startScreenShare not implemented for SmallWebRTCTransport"), new Error("Not implemented");
  }
  get isSharingScreen() {
    return Z.error("isSharingScreen not implemented for SmallWebRTCTransport"), !1;
  }
  sdpFilterCodec(t, n, r) {
    const i = [], s = new RegExp("a=fmtp:(\\d+) apt=(\\d+)\\r$"), o = new RegExp("a=rtpmap:([0-9]+) " + this.escapeRegExp(n)), a = new RegExp("(m=" + t + " .*?)( ([0-9]+))*\\s*$"), c = r.split(`
`);
    let l = !1;
    for (let h = 0; h < c.length; h++)
      if (c[h].startsWith("m=" + t + " ") ? l = !0 : c[h].startsWith("m=") && (l = !1), l) {
        const p = c[h].match(o);
        p && i.push(parseInt(p[1]));
        const g = c[h].match(s);
        g && i.includes(parseInt(g[2])) && i.push(parseInt(g[1]));
      }
    const u = "a=(fmtp|rtcp-fb|rtpmap):([0-9]+)";
    let f = "";
    l = !1;
    for (let h = 0; h < c.length; h++)
      if (c[h].startsWith("m=" + t + " ") ? l = !0 : c[h].startsWith("m=") && (l = !1), l) {
        const p = c[h].match(u);
        if (p && !i.includes(parseInt(p[2]))) continue;
        c[h].match(a) ? f += c[h].replace(a, "$1 " + i.join(" ")) + `
` : f += c[h] + `
`;
      } else f += c[h] + `
`;
    return f;
  }
  escapeRegExp(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
}
au.SERVICE_NAME = "small-webrtc-transport";
const g1 = {}, v1 = ({
  audioCodec: e = "default",
  clientOptions: t = g1,
  connectParams: n,
  noUserAudio: r = !1,
  systemPrompt: i = "You are a helpful AI assistant.",
  transportType: s = "smallwebrtc"
}) => {
  const o = Ie(null), [a, c] = _e(""), [l, u] = _e(!1), [f, h] = _e(!1), [p, g] = _e(!1);
  me(() => {
    if (typeof window > "u") return;
    if (!n) {
      console.error("connectParams is required");
      return;
    }
    if (o.current) return;
    let w;
    try {
      w = new au(
        n
      );
    } catch (C) {
      console.error("Failed to create transport:", C);
      return;
    }
    const M = {
      ...t.callbacks ?? {},
      onParticipantJoined: (C) => {
        c(C.id || ""), t?.callbacks?.onParticipantJoined?.(C);
      },
      onTrackStarted: (C, S) => {
        S?.id && S.local && c(S.id), t?.callbacks?.onTrackStarted?.(C, S);
      },
      onConnected: () => {
        u(!0), t?.callbacks?.onConnected?.();
      },
      onDisconnected: () => {
        u(!1), t?.callbacks?.onDisconnected?.();
      },
      onError: (C) => {
        t?.callbacks?.onError?.(C);
      },
      onBotReady: () => {
        t?.callbacks?.onBotReady?.({
          version: "0.1.0"
        }), g(!0);
      },
      onUserStartedSpeaking: () => {
        t?.callbacks?.onUserStartedSpeaking?.();
      },
      onUserStoppedSpeaking: () => {
        t?.callbacks?.onUserStoppedSpeaking?.();
      },
      onBotStartedSpeaking: () => {
        t?.callbacks?.onBotStartedSpeaking?.();
      },
      onBotStoppedSpeaking: () => {
        t?.callbacks?.onBotStoppedSpeaking?.();
      }
    };
    return o.current = new Dr({
      ...t,
      transport: w,
      enableMic: !r,
      callbacks: M
    }), o.current.initDevices().catch((C) => {
      console.error("Failed to initialize devices:", C);
    }), h(!0), () => {
      h(!1), u(!1), o.current?.disconnect().catch((C) => {
        console.error("Failed to disconnect client:", C);
      }), o.current = null, c("");
    };
  }, []), me(() => {
    if (o.current && s === "smallwebrtc" && e) {
      const w = o.current.transport;
      w.setAudioCodec && w.setAudioCodec(e);
    }
  }, [e, s]);
  const y = ce(async () => {
    if (o.current)
      try {
        await o.current.connect(), i && o.current.appendToContext({
          role: "assistant",
          content: i + ". Start this conversation with a greeting like I didn't just tell you anything... starting with hello, hey, hi, etc."
        });
      } catch (w) {
        console.error("Connection failed:", w);
        try {
          await o.current.disconnect();
        } catch {
        }
      }
  }, [i]), b = ce(async () => {
    if (o.current)
      try {
        await o.current.disconnect();
      } catch (w) {
        console.error("Disconnect failed:", w);
      }
  }, []);
  return {
    client: o.current,
    isClientReady: f,
    isBotReady: p,
    isConnected: l,
    participantId: a,
    handleConnect: y,
    handleDisconnect: b
  };
};
function Nc() {
  return Nc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Nc.apply(null, arguments);
}
function y1(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
var b1 = $c, w1 = function(t) {
  var n = We.useRef(t);
  return b1(function() {
    n.current = t;
  }), n;
}, yp = function(t, n) {
  if (typeof t == "function") {
    t(n);
    return;
  }
  t.current = n;
}, x1 = function(t, n) {
  var r = We.useRef();
  return We.useCallback(function(i) {
    t.current = i, r.current && yp(r.current, null), r.current = n, n && yp(n, i);
  }, [n]);
}, bp = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0",
  display: "block"
}, S1 = function(t) {
  Object.keys(bp).forEach(function(n) {
    t.style.setProperty(n, bp[n], "important");
  });
}, wp = S1, Ke = null, xp = function(t, n) {
  var r = t.scrollHeight;
  return n.sizingStyle.boxSizing === "border-box" ? r + n.borderSize : r - n.paddingSize;
};
function _1(e, t, n, r) {
  n === void 0 && (n = 1), r === void 0 && (r = 1 / 0), Ke || (Ke = document.createElement("textarea"), Ke.setAttribute("tabindex", "-1"), Ke.setAttribute("aria-hidden", "true"), wp(Ke)), Ke.parentNode === null && document.body.appendChild(Ke);
  var i = e.paddingSize, s = e.borderSize, o = e.sizingStyle, a = o.boxSizing;
  Object.keys(o).forEach(function(h) {
    var p = h;
    Ke.style[p] = o[p];
  }), wp(Ke), Ke.value = t;
  var c = xp(Ke, e);
  Ke.value = t, c = xp(Ke, e), Ke.value = "x";
  var l = Ke.scrollHeight - i, u = l * n;
  a === "border-box" && (u = u + i + s), c = Math.max(u, c);
  var f = l * r;
  return a === "border-box" && (f = f + i + s), c = Math.min(f, c), [c, l];
}
var Sp = function() {
}, k1 = function(t, n) {
  return t.reduce(function(r, i) {
    return r[i] = n[i], r;
  }, {});
}, C1 = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak",
  "wordSpacing",
  "scrollbarGutter"
], E1 = !!document.documentElement.currentStyle, T1 = function(t) {
  var n = window.getComputedStyle(t);
  if (n === null)
    return null;
  var r = k1(C1, n), i = r.boxSizing;
  if (i === "")
    return null;
  E1 && i === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var s = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), o = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: s,
    borderSize: o
  };
}, M1 = T1;
function cu(e, t, n) {
  var r = w1(n);
  A.useLayoutEffect(function() {
    var i = function(o) {
      return r.current(o);
    };
    if (e)
      return e.addEventListener(t, i), function() {
        return e.removeEventListener(t, i);
      };
  }, []);
}
var P1 = function(t, n) {
  cu(document.body, "reset", function(r) {
    t.current.form === r.target && n(r);
  });
}, A1 = function(t) {
  cu(window, "resize", t);
}, O1 = function(t) {
  cu(document.fonts, "loadingdone", t);
}, R1 = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], L1 = function(t, n) {
  var r = t.cacheMeasurements, i = t.maxRows, s = t.minRows, o = t.onChange, a = o === void 0 ? Sp : o, c = t.onHeightChange, l = c === void 0 ? Sp : c, u = y1(t, R1), f = u.value !== void 0, h = A.useRef(null), p = x1(h, n), g = A.useRef(0), y = A.useRef(), b = function() {
    var C = h.current, S = r && y.current ? y.current : M1(C);
    if (S) {
      y.current = S;
      var _ = _1(S, C.value || C.placeholder || "x", s, i), O = _[0], k = _[1];
      g.current !== O && (g.current = O, C.style.setProperty("height", O + "px", "important"), l(O, {
        rowHeight: k
      }));
    }
  }, w = function(C) {
    f || b(), a(C);
  };
  return A.useLayoutEffect(b), P1(h, function() {
    if (!f) {
      var M = h.current.value;
      requestAnimationFrame(function() {
        var C = h.current;
        C && M !== C.value && b();
      });
    }
  }), A1(b), O1(b), /* @__PURE__ */ A.createElement("textarea", Nc({}, u, {
    onChange: w,
    ref: p
  }));
}, j1 = /* @__PURE__ */ A.forwardRef(L1);
const D1 = Bv(
  "scxl:flex scxl:items-center scxl:*:rounded-none",
  {
    variants: {
      orientation: {
        horizontal: "scxl:flex-row scxl:*:first:rounded-s-md scxl:*:last:rounded-e-md scxl:*:-ml-[1px] scxl:*:first:ml-0",
        vertical: "scxl:flex-col scxl:*:first:rounded-t-md scxl:*:last:rounded-b-md scxl:*:-mt-[1px] scxl:*:first:mt-0"
      }
    },
    defaultVariants: {
      orientation: "horizontal"
    }
  }
), I1 = ({
  className: e,
  orientation: t = "horizontal",
  children: n,
  ...r
}) => /* @__PURE__ */ x.jsx(
  "div",
  {
    className: Re(
      "scxl:flex",
      D1({ orientation: t }),
      e
    ),
    ...r,
    children: n
  }
);
var ka = 0;
function N1() {
  A.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? _p()), document.body.insertAdjacentElement("beforeend", e[1] ?? _p()), ka++, () => {
      ka === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), ka--;
    };
  }, []);
}
function _p() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ca = "focusScope.autoFocusOnMount", Ea = "focusScope.autoFocusOnUnmount", kp = { bubbles: !1, cancelable: !0 }, F1 = "FocusScope", Dy = A.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: s,
    ...o
  } = e, [a, c] = A.useState(null), l = Hn(i), u = Hn(s), f = A.useRef(null), h = Je(t, (y) => c(y)), p = A.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  A.useEffect(() => {
    if (r) {
      let y = function(C) {
        if (p.paused || !a) return;
        const S = C.target;
        a.contains(S) ? f.current = S : fn(f.current, { select: !0 });
      }, b = function(C) {
        if (p.paused || !a) return;
        const S = C.relatedTarget;
        S !== null && (a.contains(S) || fn(f.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const _ of C)
            _.removedNodes.length > 0 && fn(a);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", b);
      const M = new MutationObserver(w);
      return a && M.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", b), M.disconnect();
      };
    }
  }, [r, a, p.paused]), A.useEffect(() => {
    if (a) {
      Ep.add(p);
      const y = document.activeElement;
      if (!a.contains(y)) {
        const w = new CustomEvent(Ca, kp);
        a.addEventListener(Ca, l), a.dispatchEvent(w), w.defaultPrevented || (B1(W1(Iy(a)), { select: !0 }), document.activeElement === y && fn(a));
      }
      return () => {
        a.removeEventListener(Ca, l), setTimeout(() => {
          const w = new CustomEvent(Ea, kp);
          a.addEventListener(Ea, u), a.dispatchEvent(w), w.defaultPrevented || fn(y ?? document.body, { select: !0 }), a.removeEventListener(Ea, u), Ep.remove(p);
        }, 0);
      };
    }
  }, [a, l, u, p]);
  const g = A.useCallback(
    (y) => {
      if (!n && !r || p.paused) return;
      const b = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, w = document.activeElement;
      if (b && w) {
        const M = y.currentTarget, [C, S] = $1(M);
        C && S ? !y.shiftKey && w === S ? (y.preventDefault(), n && fn(C, { select: !0 })) : y.shiftKey && w === C && (y.preventDefault(), n && fn(S, { select: !0 })) : w === M && y.preventDefault();
      }
    },
    [n, r, p.paused]
  );
  return /* @__PURE__ */ x.jsx($e.div, { tabIndex: -1, ...o, ref: h, onKeyDown: g });
});
Dy.displayName = F1;
function B1(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (fn(r, { select: t }), document.activeElement !== n) return;
}
function $1(e) {
  const t = Iy(e), n = Cp(t, e), r = Cp(t.reverse(), e);
  return [n, r];
}
function Iy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Cp(e, t) {
  for (const n of e)
    if (!V1(n, { upTo: t })) return n;
}
function V1(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function U1(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function fn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && U1(e) && t && e.select();
  }
}
var Ep = z1();
function z1() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Tp(e, t), e.unshift(t);
    },
    remove(t) {
      e = Tp(e, t), e[0]?.resume();
    }
  };
}
function Tp(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function W1(e) {
  return e.filter((t) => t.tagName !== "A");
}
var q1 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ir = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), vs = {}, Ta = 0, Ny = function(e) {
  return e && (e.host || Ny(e.parentNode));
}, H1 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ny(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, G1 = function(e, t, n, r) {
  var i = H1(t, Array.isArray(e) ? e : [e]);
  vs[n] || (vs[n] = /* @__PURE__ */ new WeakMap());
  var s = vs[n], o = [], a = /* @__PURE__ */ new Set(), c = new Set(i), l = function(f) {
    !f || a.has(f) || (a.add(f), l(f.parentNode));
  };
  i.forEach(l);
  var u = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (a.has(h))
        u(h);
      else
        try {
          var p = h.getAttribute(r), g = p !== null && p !== "false", y = (ir.get(h) || 0) + 1, b = (s.get(h) || 0) + 1;
          ir.set(h, y), s.set(h, b), o.push(h), y === 1 && g && gs.set(h, !0), b === 1 && h.setAttribute(n, "true"), g || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return u(t), a.clear(), Ta++, function() {
    o.forEach(function(f) {
      var h = ir.get(f) - 1, p = s.get(f) - 1;
      ir.set(f, h), s.set(f, p), h || (gs.has(f) || f.removeAttribute(r), gs.delete(f)), p || f.removeAttribute(n);
    }), Ta--, Ta || (ir = /* @__PURE__ */ new WeakMap(), ir = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), vs = {});
  };
}, J1 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), i = q1(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), G1(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, It = function() {
  return It = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, It.apply(this, arguments);
};
function Fy(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function K1(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, s; r < i; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var As = "right-scroll-bar-position", Os = "width-before-scroll-bar", Y1 = "with-scroll-bars-hidden", X1 = "--removed-body-scroll-bar-size";
function Ma(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Q1(e, t) {
  var n = _e(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var i = n.value;
          i !== r && (n.value = r, n.callback(r, i));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Z1 = typeof window < "u" ? A.useLayoutEffect : A.useEffect, Mp = /* @__PURE__ */ new WeakMap();
function eO(e, t) {
  var n = Q1(null, function(r) {
    return e.forEach(function(i) {
      return Ma(i, r);
    });
  });
  return Z1(function() {
    var r = Mp.get(n);
    if (r) {
      var i = new Set(r), s = new Set(e), o = n.current;
      i.forEach(function(a) {
        s.has(a) || Ma(a, null);
      }), s.forEach(function(a) {
        i.has(a) || Ma(a, o);
      });
    }
    Mp.set(n, e);
  }, [e]), n;
}
function tO(e) {
  return e;
}
function nO(e, t) {
  t === void 0 && (t = tO);
  var n = [], r = !1, i = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var o = t(s, r);
      return n.push(o), function() {
        n = n.filter(function(a) {
          return a !== o;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var o = n;
        n = [], o.forEach(s);
      }
      n = {
        push: function(a) {
          return s(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var o = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(s), o = n;
      }
      var c = function() {
        var u = o;
        o = [], u.forEach(s);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          o.push(u), l();
        },
        filter: function(u) {
          return o = o.filter(u), n;
        }
      };
    }
  };
  return i;
}
function rO(e) {
  e === void 0 && (e = {});
  var t = nO(null);
  return t.options = It({ async: !0, ssr: !1 }, e), t;
}
var By = function(e) {
  var t = e.sideCar, n = Fy(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return A.createElement(r, It({}, n));
};
By.isSideCarExport = !0;
function iO(e, t) {
  return e.useMedium(t), By;
}
var $y = rO(), Pa = function() {
}, ko = A.forwardRef(function(e, t) {
  var n = A.useRef(null), r = A.useState({
    onScrollCapture: Pa,
    onWheelCapture: Pa,
    onTouchMoveCapture: Pa
  }), i = r[0], s = r[1], o = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, f = e.shards, h = e.sideCar, p = e.noRelative, g = e.noIsolation, y = e.inert, b = e.allowPinchZoom, w = e.as, M = w === void 0 ? "div" : w, C = e.gapMode, S = Fy(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = h, O = eO([n, t]), k = It(It({}, S), i);
  return A.createElement(
    A.Fragment,
    null,
    u && A.createElement(_, { sideCar: $y, removeScrollBar: l, shards: f, noRelative: p, noIsolation: g, inert: y, setCallbacks: s, allowPinchZoom: !!b, lockRef: n, gapMode: C }),
    o ? A.cloneElement(A.Children.only(a), It(It({}, k), { ref: O })) : A.createElement(M, It({}, k, { className: c, ref: O }), a)
  );
});
ko.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ko.classNames = {
  fullWidth: Os,
  zeroRight: As
};
var sO = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function oO() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = sO();
  return t && e.setAttribute("nonce", t), e;
}
function aO(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cO(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var lO = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = oO()) && (aO(t, n), cO(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, uO = function() {
  var e = lO();
  return function(t, n) {
    A.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Vy = function() {
  var e = uO(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, dO = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Aa = function(e) {
  return parseInt(e || "", 10) || 0;
}, fO = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Aa(n), Aa(r), Aa(i)];
}, hO = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return dO;
  var t = fO(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, pO = Vy(), Sr = "data-scroll-locked", mO = function(e, t, n, r) {
  var i = e.left, s = e.top, o = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Y1, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Sr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(As, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(Os, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(As, " .").concat(As, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Os, " .").concat(Os, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Sr, `] {
    `).concat(X1, ": ").concat(a, `px;
  }
`);
}, Pp = function() {
  var e = parseInt(document.body.getAttribute(Sr) || "0", 10);
  return isFinite(e) ? e : 0;
}, gO = function() {
  A.useEffect(function() {
    return document.body.setAttribute(Sr, (Pp() + 1).toString()), function() {
      var e = Pp() - 1;
      e <= 0 ? document.body.removeAttribute(Sr) : document.body.setAttribute(Sr, e.toString());
    };
  }, []);
}, vO = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  gO();
  var s = A.useMemo(function() {
    return hO(i);
  }, [i]);
  return A.createElement(pO, { styles: mO(s, !t, i, n ? "" : "!important") });
}, Fc = !1;
if (typeof window < "u")
  try {
    var ys = Object.defineProperty({}, "passive", {
      get: function() {
        return Fc = !0, !0;
      }
    });
    window.addEventListener("test", ys, ys), window.removeEventListener("test", ys, ys);
  } catch {
    Fc = !1;
  }
var sr = Fc ? { passive: !1 } : !1, yO = function(e) {
  return e.tagName === "TEXTAREA";
}, Uy = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !yO(e) && n[t] === "visible")
  );
}, bO = function(e) {
  return Uy(e, "overflowY");
}, wO = function(e) {
  return Uy(e, "overflowX");
}, Ap = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = zy(e, r);
    if (i) {
      var s = Wy(e, r), o = s[1], a = s[2];
      if (o > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, xO = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, SO = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, zy = function(e, t) {
  return e === "v" ? bO(t) : wO(t);
}, Wy = function(e, t) {
  return e === "v" ? xO(t) : SO(t);
}, _O = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kO = function(e, t, n, r, i) {
  var s = _O(e, window.getComputedStyle(t).direction), o = s * r, a = n.target, c = t.contains(a), l = !1, u = o > 0, f = 0, h = 0;
  do {
    if (!a)
      break;
    var p = Wy(e, a), g = p[0], y = p[1], b = p[2], w = y - b - s * g;
    (g || w) && zy(e, a) && (f += w, h += g);
    var M = a.parentNode;
    a = M && M.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? M.host : M;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (u && Math.abs(f) < 1 || !u && Math.abs(h) < 1) && (l = !0), l;
}, bs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Op = function(e) {
  return [e.deltaX, e.deltaY];
}, Rp = function(e) {
  return e && "current" in e ? e.current : e;
}, CO = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, EO = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, TO = 0, or = [];
function MO(e) {
  var t = A.useRef([]), n = A.useRef([0, 0]), r = A.useRef(), i = A.useState(TO++)[0], s = A.useState(Vy)[0], o = A.useRef(e);
  A.useEffect(function() {
    o.current = e;
  }, [e]), A.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = K1([e.lockRef.current], (e.shards || []).map(Rp), !0).filter(Boolean);
      return y.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), y.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = A.useCallback(function(y, b) {
    if ("touches" in y && y.touches.length === 2 || y.type === "wheel" && y.ctrlKey)
      return !o.current.allowPinchZoom;
    var w = bs(y), M = n.current, C = "deltaX" in y ? y.deltaX : M[0] - w[0], S = "deltaY" in y ? y.deltaY : M[1] - w[1], _, O = y.target, k = Math.abs(C) > Math.abs(S) ? "h" : "v";
    if ("touches" in y && k === "h" && O.type === "range")
      return !1;
    var P = Ap(k, O);
    if (!P)
      return !0;
    if (P ? _ = k : (_ = k === "v" ? "h" : "v", P = Ap(k, O)), !P)
      return !1;
    if (!r.current && "changedTouches" in y && (C || S) && (r.current = _), !_)
      return !0;
    var R = r.current || _;
    return kO(R, b, y, R === "h" ? C : S);
  }, []), c = A.useCallback(function(y) {
    var b = y;
    if (!(!or.length || or[or.length - 1] !== s)) {
      var w = "deltaY" in b ? Op(b) : bs(b), M = t.current.filter(function(_) {
        return _.name === b.type && (_.target === b.target || b.target === _.shadowParent) && CO(_.delta, w);
      })[0];
      if (M && M.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!M) {
        var C = (o.current.shards || []).map(Rp).filter(Boolean).filter(function(_) {
          return _.contains(b.target);
        }), S = C.length > 0 ? a(b, C[0]) : !o.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = A.useCallback(function(y, b, w, M) {
    var C = { name: y, delta: b, target: w, should: M, shadowParent: PO(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== C;
      });
    }, 1);
  }, []), u = A.useCallback(function(y) {
    n.current = bs(y), r.current = void 0;
  }, []), f = A.useCallback(function(y) {
    l(y.type, Op(y), y.target, a(y, e.lockRef.current));
  }, []), h = A.useCallback(function(y) {
    l(y.type, bs(y), y.target, a(y, e.lockRef.current));
  }, []);
  A.useEffect(function() {
    return or.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, sr), document.addEventListener("touchmove", c, sr), document.addEventListener("touchstart", u, sr), function() {
      or = or.filter(function(y) {
        return y !== s;
      }), document.removeEventListener("wheel", c, sr), document.removeEventListener("touchmove", c, sr), document.removeEventListener("touchstart", u, sr);
    };
  }, []);
  var p = e.removeScrollBar, g = e.inert;
  return A.createElement(
    A.Fragment,
    null,
    g ? A.createElement(s, { styles: EO(i) }) : null,
    p ? A.createElement(vO, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function PO(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const AO = iO($y, MO);
var qy = A.forwardRef(function(e, t) {
  return A.createElement(ko, It({}, e, { ref: t, sideCar: AO }));
});
qy.classNames = ko.classNames;
var Co = "Popover", [Hy, NR] = Zn(Co, [
  fo
]), Bi = fo(), [OO, kn] = Hy(Co), Gy = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: i,
    onOpenChange: s,
    modal: o = !1
  } = e, a = Bi(t), c = A.useRef(null), [l, u] = A.useState(!1), [f, h] = ho({
    prop: r,
    defaultProp: i ?? !1,
    onChange: s,
    caller: Co
  });
  return /* @__PURE__ */ x.jsx(Cv, { ...a, children: /* @__PURE__ */ x.jsx(
    OO,
    {
      scope: t,
      contentId: Ol(),
      triggerRef: c,
      open: f,
      onOpenChange: h,
      onOpenToggle: A.useCallback(() => h((p) => !p), [h]),
      hasCustomAnchor: l,
      onCustomAnchorAdd: A.useCallback(() => u(!0), []),
      onCustomAnchorRemove: A.useCallback(() => u(!1), []),
      modal: o,
      children: n
    }
  ) });
};
Gy.displayName = Co;
var Jy = "PopoverAnchor", RO = A.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, i = kn(Jy, n), s = Bi(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: a } = i;
    return A.useEffect(() => (o(), () => a()), [o, a]), /* @__PURE__ */ x.jsx(Vl, { ...s, ...r, ref: t });
  }
);
RO.displayName = Jy;
var Ky = "PopoverTrigger", Yy = A.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, i = kn(Ky, n), s = Bi(n), o = Je(t, i.triggerRef), a = /* @__PURE__ */ x.jsx(
      $e.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": tb(i.open),
        ...r,
        ref: o,
        onClick: Te(e.onClick, i.onOpenToggle)
      }
    );
    return i.hasCustomAnchor ? a : /* @__PURE__ */ x.jsx(Vl, { asChild: !0, ...s, children: a });
  }
);
Yy.displayName = Ky;
var lu = "PopoverPortal", [LO, jO] = Hy(lu, {
  forceMount: void 0
}), Xy = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: i } = e, s = kn(lu, t);
  return /* @__PURE__ */ x.jsx(LO, { scope: t, forceMount: n, children: /* @__PURE__ */ x.jsx(Wr, { present: n || s.open, children: /* @__PURE__ */ x.jsx(Ul, { asChild: !0, container: i, children: r }) }) });
};
Xy.displayName = lu;
var Lr = "PopoverContent", Qy = A.forwardRef(
  (e, t) => {
    const n = jO(Lr, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, s = kn(Lr, e.__scopePopover);
    return /* @__PURE__ */ x.jsx(Wr, { present: r || s.open, children: s.modal ? /* @__PURE__ */ x.jsx(IO, { ...i, ref: t }) : /* @__PURE__ */ x.jsx(NO, { ...i, ref: t }) });
  }
);
Qy.displayName = Lr;
var DO = /* @__PURE__ */ _i("PopoverContent.RemoveScroll"), IO = A.forwardRef(
  (e, t) => {
    const n = kn(Lr, e.__scopePopover), r = A.useRef(null), i = Je(t, r), s = A.useRef(!1);
    return A.useEffect(() => {
      const o = r.current;
      if (o) return J1(o);
    }, []), /* @__PURE__ */ x.jsx(qy, { as: DO, allowPinchZoom: !0, children: /* @__PURE__ */ x.jsx(
      Zy,
      {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Te(e.onCloseAutoFocus, (o) => {
          o.preventDefault(), s.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: Te(
          e.onPointerDownOutside,
          (o) => {
            const a = o.detail.originalEvent, c = a.button === 0 && a.ctrlKey === !0, l = a.button === 2 || c;
            s.current = l;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: Te(
          e.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), NO = A.forwardRef(
  (e, t) => {
    const n = kn(Lr, e.__scopePopover), r = A.useRef(!1), i = A.useRef(!1);
    return /* @__PURE__ */ x.jsx(
      Zy,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          e.onCloseAutoFocus?.(s), s.defaultPrevented || (r.current || n.triggerRef.current?.focus(), s.preventDefault()), r.current = !1, i.current = !1;
        },
        onInteractOutside: (s) => {
          e.onInteractOutside?.(s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const o = s.target;
          n.triggerRef.current?.contains(o) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && i.current && s.preventDefault();
        }
      }
    );
  }
), Zy = A.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: i,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: o,
      onEscapeKeyDown: a,
      onPointerDownOutside: c,
      onFocusOutside: l,
      onInteractOutside: u,
      ...f
    } = e, h = kn(Lr, n), p = Bi(n);
    return N1(), /* @__PURE__ */ x.jsx(
      Dy,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: i,
        onUnmountAutoFocus: s,
        children: /* @__PURE__ */ x.jsx(
          Al,
          {
            asChild: !0,
            disableOutsidePointerEvents: o,
            onInteractOutside: u,
            onEscapeKeyDown: a,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ x.jsx(
              Ev,
              {
                "data-state": tb(h.open),
                role: "dialog",
                id: h.contentId,
                ...p,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), eb = "PopoverClose", FO = A.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, i = kn(eb, n);
    return /* @__PURE__ */ x.jsx(
      $e.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Te(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
FO.displayName = eb;
var BO = "PopoverArrow", $O = A.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, i = Bi(n);
    return /* @__PURE__ */ x.jsx(Tv, { ...i, ...r, ref: t });
  }
);
$O.displayName = BO;
function tb(e) {
  return e ? "open" : "closed";
}
var VO = Gy, UO = Yy, zO = Xy, WO = Qy;
function qO({
  ...e
}) {
  return /* @__PURE__ */ x.jsx(VO, { "data-slot": "popover", ...e });
}
function HO({
  ...e
}) {
  return /* @__PURE__ */ x.jsx(UO, { "data-slot": "popover-trigger", ...e });
}
function GO({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ x.jsx(zO, { children: /* @__PURE__ */ x.jsx(
    WO,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: Re(
        "scxl:bg-popover scxl:text-popover-foreground scxl:data-[state=open]:animate-in scxl:data-[state=closed]:animate-out scxl:data-[state=closed]:fade-out-0 scxl:data-[state=open]:fade-in-0 scxl:data-[state=closed]:zoom-out-95 scxl:data-[state=open]:zoom-in-95 scxl:data-[side=bottom]:slide-in-from-top-2 scxl:data-[side=left]:slide-in-from-right-2 scxl:data-[side=right]:slide-in-from-left-2 scxl:data-[side=top]:slide-in-from-bottom-2 scxl:z-50 scxl:w-72 scxl:origin-(--radix-popover-content-transform-origin) scxl:rounded-md scxl:border scxl:p-4 scxl:shadow-md scxl:outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
function JO(e) {
  const t = e + "CollectionProvider", [n, r] = Zn(t), [i, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), o = (y) => {
    const { scope: b, children: w } = y, M = We.useRef(null), C = We.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ x.jsx(i, { scope: b, itemMap: C, collectionRef: M, children: w });
  };
  o.displayName = t;
  const a = e + "CollectionSlot", c = /* @__PURE__ */ _i(a), l = We.forwardRef(
    (y, b) => {
      const { scope: w, children: M } = y, C = s(a, w), S = Je(b, C.collectionRef);
      return /* @__PURE__ */ x.jsx(c, { ref: S, children: M });
    }
  );
  l.displayName = a;
  const u = e + "CollectionItemSlot", f = "data-radix-collection-item", h = /* @__PURE__ */ _i(u), p = We.forwardRef(
    (y, b) => {
      const { scope: w, children: M, ...C } = y, S = We.useRef(null), _ = Je(b, S), O = s(u, w);
      return We.useEffect(() => (O.itemMap.set(S, { ref: S, ...C }), () => void O.itemMap.delete(S))), /* @__PURE__ */ x.jsx(h, { [f]: "", ref: _, children: M });
    }
  );
  p.displayName = u;
  function g(y) {
    const b = s(e + "CollectionConsumer", y);
    return We.useCallback(() => {
      const M = b.collectionRef.current;
      if (!M) return [];
      const C = Array.from(M.querySelectorAll(`[${f}]`));
      return Array.from(b.itemMap.values()).sort(
        (O, k) => C.indexOf(O.ref.current) - C.indexOf(k.ref.current)
      );
    }, [b.collectionRef, b.itemMap]);
  }
  return [
    { Provider: o, Slot: l, ItemSlot: p },
    g,
    r
  ];
}
var KO = A.createContext(void 0);
function nb(e) {
  const t = A.useContext(KO);
  return e || t || "ltr";
}
var Oa = "rovingFocusGroup.onEntryFocus", YO = { bubbles: !1, cancelable: !0 }, $i = "RovingFocusGroup", [Bc, rb, XO] = JO($i), [QO, ib] = Zn(
  $i,
  [XO]
), [ZO, eR] = QO($i), sb = A.forwardRef(
  (e, t) => /* @__PURE__ */ x.jsx(Bc.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ x.jsx(Bc.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ x.jsx(tR, { ...e, ref: t }) }) })
);
sb.displayName = $i;
var tR = A.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: i = !1,
    dir: s,
    currentTabStopId: o,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...f
  } = e, h = A.useRef(null), p = Je(t, h), g = nb(s), [y, b] = ho({
    prop: o,
    defaultProp: a ?? null,
    onChange: c,
    caller: $i
  }), [w, M] = A.useState(!1), C = Hn(l), S = rb(n), _ = A.useRef(!1), [O, k] = A.useState(0);
  return A.useEffect(() => {
    const P = h.current;
    if (P)
      return P.addEventListener(Oa, C), () => P.removeEventListener(Oa, C);
  }, [C]), /* @__PURE__ */ x.jsx(
    ZO,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: i,
      currentTabStopId: y,
      onItemFocus: A.useCallback(
        (P) => b(P),
        [b]
      ),
      onItemShiftTab: A.useCallback(() => M(!0), []),
      onFocusableItemAdd: A.useCallback(
        () => k((P) => P + 1),
        []
      ),
      onFocusableItemRemove: A.useCallback(
        () => k((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ x.jsx(
        $e.div,
        {
          tabIndex: w || O === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: p,
          style: { outline: "none", ...e.style },
          onMouseDown: Te(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: Te(e.onFocus, (P) => {
            const R = !_.current;
            if (P.target === P.currentTarget && R && !w) {
              const L = new CustomEvent(Oa, YO);
              if (P.currentTarget.dispatchEvent(L), !L.defaultPrevented) {
                const I = S().filter((Y) => Y.focusable), V = I.find((Y) => Y.active), q = I.find((Y) => Y.id === y), H = [V, q, ...I].filter(
                  Boolean
                ).map((Y) => Y.ref.current);
                cb(H, u);
              }
            }
            _.current = !1;
          }),
          onBlur: Te(e.onBlur, () => M(!1))
        }
      )
    }
  );
}), ob = "RovingFocusGroupItem", ab = A.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: i = !1,
      tabStopId: s,
      children: o,
      ...a
    } = e, c = Ol(), l = s || c, u = eR(ob, n), f = u.currentTabStopId === l, h = rb(n), { onFocusableItemAdd: p, onFocusableItemRemove: g, currentTabStopId: y } = u;
    return A.useEffect(() => {
      if (r)
        return p(), () => g();
    }, [r, p, g]), /* @__PURE__ */ x.jsx(
      Bc.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: i,
        children: /* @__PURE__ */ x.jsx(
          $e.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation,
            ...a,
            ref: t,
            onMouseDown: Te(e.onMouseDown, (b) => {
              r ? u.onItemFocus(l) : b.preventDefault();
            }),
            onFocus: Te(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: Te(e.onKeyDown, (b) => {
              if (b.key === "Tab" && b.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (b.target !== b.currentTarget) return;
              const w = iR(b, u.orientation, u.dir);
              if (w !== void 0) {
                if (b.metaKey || b.ctrlKey || b.altKey || b.shiftKey) return;
                b.preventDefault();
                let C = h().filter((S) => S.focusable).map((S) => S.ref.current);
                if (w === "last") C.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && C.reverse();
                  const S = C.indexOf(b.currentTarget);
                  C = u.loop ? sR(C, S + 1) : C.slice(S + 1);
                }
                setTimeout(() => cb(C));
              }
            }),
            children: typeof o == "function" ? o({ isCurrentTabStop: f, hasTabStop: y != null }) : o
          }
        )
      }
    );
  }
);
ab.displayName = ob;
var nR = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function rR(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function iR(e, t, n) {
  const r = rR(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return nR[r];
}
function cb(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function sR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var oR = sb, aR = ab;
function cR(e) {
  const t = A.useRef({ value: e, previous: e });
  return A.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var uu = "Radio", [lR, lb] = Zn(uu), [uR, dR] = lR(uu), ub = A.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: i = !1,
      required: s,
      disabled: o,
      value: a = "on",
      onCheck: c,
      form: l,
      ...u
    } = e, [f, h] = A.useState(null), p = Je(t, (b) => h(b)), g = A.useRef(!1), y = f ? l || !!f.closest("form") : !0;
    return /* @__PURE__ */ x.jsxs(uR, { scope: n, checked: i, disabled: o, children: [
      /* @__PURE__ */ x.jsx(
        $e.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": i,
          "data-state": pb(i),
          "data-disabled": o ? "" : void 0,
          disabled: o,
          value: a,
          ...u,
          ref: p,
          onClick: Te(e.onClick, (b) => {
            i || c?.(), y && (g.current = b.isPropagationStopped(), g.current || b.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ x.jsx(
        hb,
        {
          control: f,
          bubbles: !g.current,
          name: r,
          value: a,
          checked: i,
          required: s,
          disabled: o,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
ub.displayName = uu;
var db = "RadioIndicator", fb = A.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...i } = e, s = dR(db, n);
    return /* @__PURE__ */ x.jsx(Wr, { present: r || s.checked, children: /* @__PURE__ */ x.jsx(
      $e.span,
      {
        "data-state": pb(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...i,
        ref: t
      }
    ) });
  }
);
fb.displayName = db;
var fR = "RadioBubbleInput", hb = A.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...i
  }, s) => {
    const o = A.useRef(null), a = Je(o, s), c = cR(n), l = mv(t);
    return A.useEffect(() => {
      const u = o.current;
      if (!u) return;
      const f = window.HTMLInputElement.prototype, p = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (c !== n && p) {
        const g = new Event("click", { bubbles: r });
        p.call(u, n), u.dispatchEvent(g);
      }
    }, [c, n, r]), /* @__PURE__ */ x.jsx(
      $e.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...i,
        tabIndex: -1,
        ref: a,
        style: {
          ...i.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
hb.displayName = fR;
function pb(e) {
  return e ? "checked" : "unchecked";
}
var hR = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Eo = "RadioGroup", [pR, FR] = Zn(Eo, [
  ib,
  lb
]), mb = ib(), gb = lb(), [mR, gR] = pR(Eo), vb = A.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: i,
      value: s,
      required: o = !1,
      disabled: a = !1,
      orientation: c,
      dir: l,
      loop: u = !0,
      onValueChange: f,
      ...h
    } = e, p = mb(n), g = nb(l), [y, b] = ho({
      prop: s,
      defaultProp: i ?? null,
      onChange: f,
      caller: Eo
    });
    return /* @__PURE__ */ x.jsx(
      mR,
      {
        scope: n,
        name: r,
        required: o,
        disabled: a,
        value: y,
        onValueChange: b,
        children: /* @__PURE__ */ x.jsx(
          oR,
          {
            asChild: !0,
            ...p,
            orientation: c,
            dir: g,
            loop: u,
            children: /* @__PURE__ */ x.jsx(
              $e.div,
              {
                role: "radiogroup",
                "aria-required": o,
                "aria-orientation": c,
                "data-disabled": a ? "" : void 0,
                dir: g,
                ...h,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
vb.displayName = Eo;
var yb = "RadioGroupItem", bb = A.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...i } = e, s = gR(yb, n), o = s.disabled || r, a = mb(n), c = gb(n), l = A.useRef(null), u = Je(t, l), f = s.value === i.value, h = A.useRef(!1);
    return A.useEffect(() => {
      const p = (y) => {
        hR.includes(y.key) && (h.current = !0);
      }, g = () => h.current = !1;
      return document.addEventListener("keydown", p), document.addEventListener("keyup", g), () => {
        document.removeEventListener("keydown", p), document.removeEventListener("keyup", g);
      };
    }, []), /* @__PURE__ */ x.jsx(
      aR,
      {
        asChild: !0,
        ...a,
        focusable: !o,
        active: f,
        children: /* @__PURE__ */ x.jsx(
          ub,
          {
            disabled: o,
            required: s.required,
            checked: f,
            ...c,
            ...i,
            name: s.name,
            ref: u,
            onCheck: () => s.onValueChange(i.value),
            onKeyDown: Te((p) => {
              p.key === "Enter" && p.preventDefault();
            }),
            onFocus: Te(i.onFocus, () => {
              h.current && l.current?.click();
            })
          }
        )
      }
    );
  }
);
bb.displayName = yb;
var vR = "RadioGroupIndicator", wb = A.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, i = gb(n);
    return /* @__PURE__ */ x.jsx(fb, { ...i, ...r, ref: t });
  }
);
wb.displayName = vR;
var yR = vb, bR = bb, wR = wb;
function xR({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ x.jsx(
    yR,
    {
      "data-slot": "radio-group",
      className: Re("scxl:grid gap-3", e),
      ...t
    }
  );
}
function SR({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ x.jsx(
    bR,
    {
      "data-slot": "radio-group-item",
      className: Re(
        "scxl:border-input scxl:text-primary scxl:focus-visible:border-ring scxl:focus-visible:ring-ring/50 scxl:aria-invalid:ring-destructive/20 scxl:dark:aria-invalid:ring-destructive/40 scxl:aria-invalid:border-destructive scxl:dark:bg-input/30 scxl:aspect-square scxl:size-4 scxl:shrink-0 scxl:rounded-full scxl:border scxl:shadow-xs scxl:transition-[color,box-shadow] scxl:outline-none scxl:focus-visible:ring-[3px] scxl:disabled:cursor-not-allowed scxl:disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ x.jsx(
        wR,
        {
          "data-slot": "radio-group-indicator",
          className: "scxl:relative scxl:flex scxl:items-center scxl:justify-center",
          children: /* @__PURE__ */ x.jsx(kC, { className: "scxl:fill-white scxl:absolute scxl:top-1/2 scxl:left-1/2 scxl:size-2 scxl:-translate-x-1/2 scxl:-translate-y-1/2" })
        }
      )
    }
  );
}
var _R = "Label", xb = A.forwardRef((e, t) => /* @__PURE__ */ x.jsx(
  $e.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
xb.displayName = _R;
var kR = xb;
function CR({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ x.jsx(
    kR,
    {
      "data-slot": "label",
      className: Re(
        "scxl:flex scxl:items-center scxl:gap-2 scxl:text-sm scxl:leading-none scxl:font-medium scxl:select-none scxl:group-data-[disabled=true]:pointer-events-none scxl:group-data-[disabled=true]:opacity-50 scxl:peer-disabled:cursor-not-allowed scxl:peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const ER = ({
  buttonProps: e = {},
  classNames: t = {},
  dropdownButtonProps: n = {},
  noDevicePicker: r = !1,
  noVisualizer: i = !1,
  visualizerProps: s = {}
}) => {
  const o = ro(), { availableMics: a, selectedMic: c, updateMic: l } = Vw(), u = o?._options?.enableMic;
  me(() => {
    o && ["idle", "disconnected"].includes(o.state) && o.initDevices();
  }, [o]);
  const f = (h) => {
    l(h);
  };
  return u ? /* @__PURE__ */ x.jsx(
    "div",
    {
      className: Re("scxl:flex scxl:flex-col scxl:gap-2 scxl:rounded-full", t.container),
      children: /* @__PURE__ */ x.jsxs(I1, { className: Re("scxl:w-full", t.buttongroup), children: [
        /* @__PURE__ */ x.jsx(Nw, { children: ({ isMicEnabled: h, onClick: p }) => /* @__PURE__ */ x.jsxs(
          fc,
          {
            onClick: p,
            className: Re(
              "scxl:flex-1 scxl:justify-start",
              t.button
            ),
            variant: "secondary",
            ...e,
            children: [
              h ? /* @__PURE__ */ x.jsx(AC, {}) : /* @__PURE__ */ x.jsx(MC, {}),
              !i && /* @__PURE__ */ x.jsx(
                om,
                {
                  participantType: "local",
                  backgroundColor: "transparent",
                  barColor: h ? "#00bc7d" : "#999999",
                  barCount: 10,
                  barGap: 2,
                  barMaxHeight: 20,
                  barOrigin: "center",
                  barWidth: 3,
                  ...s
                }
              )
            ]
          }
        ) }),
        !r && /* @__PURE__ */ x.jsxs(qO, { children: [
          /* @__PURE__ */ x.jsx(HO, { asChild: !0, children: /* @__PURE__ */ x.jsx(
            fc,
            {
              className: Re(
                "scxl:p-2! scxl:flex-none",
                t.popoverTrigger
              ),
              variant: "secondary",
              ...n,
              children: /* @__PURE__ */ x.jsx(SC, {})
            }
          ) }),
          /* @__PURE__ */ x.jsx(
            GO,
            {
              align: "end",
              className: Re("scxl:w-80 scxl:border-none scxl:bg-transparent scxl:shadow-none", t.popoverContent),
              children: /* @__PURE__ */ x.jsxs("div", { className: "scxl:space-y-2", children: [
                /* @__PURE__ */ x.jsx("h4", { className: "scxl:font-medium scxl:leading-none", children: "Select Microphone" }),
                /* @__PURE__ */ x.jsx(
                  xR,
                  {
                    value: c?.deviceId || "",
                    onValueChange: f,
                    className: Re("scxl:space-y-2", t.radioGroup),
                    children: a.map((h) => /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:cursor-pointer scxl:items-center scxl:space-x-2 scxl:bg-black scxl:text-white scxl:rounded-md scxl:p-2", children: [
                      /* @__PURE__ */ x.jsx(
                        SR,
                        {
                          value: h.deviceId,
                          id: h.deviceId,
                          className: Re(t.radioGroupItem)
                        }
                      ),
                      /* @__PURE__ */ x.jsx(
                        CR,
                        {
                          htmlFor: h.deviceId,
                          className: Re(
                            "scxl:text-sm scxl:font-normal scxl:cursor-pointer scxl:flex-1",
                            t.label
                          ),
                          children: h.label || `Mic ${h.deviceId.slice(0, 8)}...`
                        }
                      )
                    ] }, h.deviceId))
                  }
                )
              ] })
            }
          )
        ] })
      ] })
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: Re(
        "scxl:flex scxl:items-center scxl:gap-2 scxl:bg-muted scxl:rounded-md scxl:p-2 scxl:text-muted-foreground scxl:font-mono scxl:text-sm",
        t.container
      ),
      children: "Audio disabled"
    }
  );
}, Lp = {
  MIN_ROWS: 1,
  MAX_ROWS: 10
}, TR = ({
  theme: e,
  size: t,
  labels: n,
  isVoiceMode: r,
  isBotReady: i,
  isTogglingVoice: s,
  showConnectionStatus: o,
  showParticipantId: a,
  enableVoice: c,
  participantId: l,
  isAtMaxHeight: u,
  onTextSend: f,
  onVoiceModeToggle: h,
  onDisconnect: p,
  onHeightChange: g
}) => /* @__PURE__ */ x.jsxs(
  "div",
  {
    className: Ce(
      "scxl:w-full scxl:flex scxl:flex-col scxl:border-[1.5px] scxl:rounded-2xl",
      e.inputBorder,
      e.inputBackground
    ),
    children: [
      r ? /* @__PURE__ */ x.jsx("div", { className: "scxl:p-4 scxl:text-center", children: /* @__PURE__ */ x.jsx("p", { className: Ce(t.text, e.textSecondary), children: "🎤 Voice mode active - Speak to chat" }) }) : /* @__PURE__ */ x.jsx(
        j1,
        {
          name: "user_input",
          title: "User input",
          placeholder: n.inputPlaceholder,
          minRows: Lp.MIN_ROWS,
          maxRows: Lp.MAX_ROWS,
          onHeightChange: g,
          onKeyDown: f,
          className: Ce(
            "scxl:font-medium scxl:outline-none scxl:border-none scxl:w-full scxl:resize-none scxl:transition-all scxl:duration-200 scxl:ease-in-out",
            t.input,
            e.textPrimary,
            u && "scxl:overflow-y-auto"
          )
        }
      ),
      /* @__PURE__ */ x.jsxs("div", { className: "scxl:w-full scxl:flex scxl:items-center scxl:justify-between scxl:px-2 scxl:h-fit", children: [
        o && /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:flex-row scxl:items-center scxl:p-2", children: [
          /* @__PURE__ */ x.jsxs("span", { className: "scxl:relative scxl:flex scxl:size-2 scxl:justify-center scxl:items-center", children: [
            /* @__PURE__ */ x.jsx(
              "span",
              {
                className: Ce(
                  "scxl:absolute scxl:inline-flex scxl:h-full scxl:w-full scxl:animate-ping scxl:rounded-full scxl:opacity-75",
                  i ? e.ready : e.connecting
                )
              }
            ),
            /* @__PURE__ */ x.jsx(
              "span",
              {
                className: Ce(
                  "scxl:relative scxl:inline-flex scxl:size-2 scxl:rounded-full",
                  i ? e.ready : e.connecting
                )
              }
            )
          ] }),
          /* @__PURE__ */ x.jsxs("div", { className: Ce("scxl:ml-2 scxl:text-gray-800 scxl:font-medium scxl:text-sm"), children: [
            i ? n.botReadyText : n.connectedText,
            a && l && /* @__PURE__ */ x.jsxs("span", { className: Ce("scxl:ml-1", e.textMuted), children: [
              "(",
              l.slice(0, 8),
              "...)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:items-center scxl:gap-2 scxl:text-sm", children: [
          c && /* @__PURE__ */ x.jsxs(gr, { children: [
            /* @__PURE__ */ x.jsx(vr, { asChild: !0, children: /* @__PURE__ */ x.jsxs(
              "button",
              {
                title: r ? "Switch to text" : "Switch to voice",
                onClick: h,
                disabled: s,
                className: Ce(
                  "scxl:flex scxl:items-center scxl:justify-center scxl:gap-1.5 scxl:font-medium scxl:p-2 scxl:cursor-pointer hover:scxl:-translate-y-0.5 scxl:transition-all scxl:duration-200 scxl:ease-in-out scxl:rounded",
                  r ? "scxl:bg-blue-100" : "scxl:bg-transparent",
                  s && "scxl:opacity-50 scxl:cursor-not-allowed"
                ),
                type: "button",
                children: [
                  /* @__PURE__ */ x.jsx(
                    "span",
                    {
                      className: Ce(
                        "scxl:text-sm",
                        //   size.text,
                        r ? "scxl:text-blue-600" : e.primary
                      ),
                      children: s ? "Switching..." : r ? "Switch to text" : "Switch to voice"
                    }
                  ),
                  /* @__PURE__ */ x.jsx(Qg, { className: "scxl:size-4" })
                ]
              }
            ) }),
            /* @__PURE__ */ x.jsx(yr, { sideOffset: 5, children: n.voiceTooltip })
          ] }),
          /* @__PURE__ */ x.jsx(
            Sb,
            {
              theme: e,
              size: t,
              label: n.disconnectButton,
              isVoiceMode: r,
              onDisconnect: p
            }
          )
        ] })
      ] })
    ]
  }
), Sb = ({
  theme: e,
  size: t,
  label: n,
  isVoiceMode: r,
  onDisconnect: i
}) => {
  const s = () => {
    i?.();
  }, o = (a) => {
    (a.key === " " || a.key === "Enter") && (a.preventDefault(), s());
  };
  return /* @__PURE__ */ x.jsxs(gr, { children: [
    /* @__PURE__ */ x.jsx(vr, { asChild: !0, children: /* @__PURE__ */ x.jsx(
      "button",
      {
        onClick: s,
        onKeyDown: o,
        className: Ce(
          "scxl:mb-1 scxl:cursor-pointer scxl:px-4 scxl:text-white scxl:p-2 scxl:rounded-full scxl:transition-colors scxl:flex scxl:items-center scxl:gap-1.5 scxl:text-sm",
          t.text,
          e.error,
          "scxl:bg-red-500 hover:scxl:bg-red-700"
        ),
        type: "button",
        children: /* @__PURE__ */ x.jsx("span", { children: n })
      }
    ) }),
    /* @__PURE__ */ x.jsx(yr, { sideOffset: 5, children: r ? "Exit voice mode" : "Disconnect from chat" })
  ] });
}, MR = ({
  theme: e,
  size: t,
  labels: n,
  isVoiceMode: r,
  onVoiceModeToggle: i,
  isTogglingVoice: s,
  handleDisconnect: o
}) => /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:justify-between scxl:items-center scxl:w-full scxl:text-sm", children: [
  /* @__PURE__ */ x.jsx(ER, {}),
  /* @__PURE__ */ x.jsxs(gr, { children: [
    /* @__PURE__ */ x.jsx(vr, { asChild: !0, children: /* @__PURE__ */ x.jsxs(
      "button",
      {
        title: r ? "Switch to text" : "Switch to voice",
        onClick: i,
        disabled: s,
        className: Ce(
          "scxl:flex scxl:items-center scxl:justify-center scxl:gap-1.5 scxl:font-medium scxl:p-2 scxl:border scxl:border-indigo-500 scxl:rounded-full scxl:cursor-pointer hover:scxl:-translate-y-0.5 scxl:transition-all scxl:duration-200 scxl:ease-in-out scxl:bg-transparent",
          s && "scxl:opacity-50 scxl:cursor-not-allowed"
        ),
        type: "button",
        children: [
          /* @__PURE__ */ x.jsx(
            "span",
            {
              className: Ce(
                "scxl:text-sm",
                r ? "scxl:text-indigo-500" : e.primary
              ),
              children: s ? "Switching..." : r ? "Switch to text" : "Switch to voice"
            }
          ),
          /* @__PURE__ */ x.jsx(Qg, { className: "scxl:size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ x.jsx(yr, { sideOffset: 5, children: n.textTooltip })
  ] }),
  /* @__PURE__ */ x.jsx(
    Sb,
    {
      theme: e,
      size: t,
      label: n.disconnectButton,
      isVoiceMode: r,
      onDisconnect: o
    }
  )
] }), PR = ({ theme: e, labels: t, size: n }) => /* @__PURE__ */ x.jsx("div", { className: "scxl:w-full scxl:h-screen scxl:p-5 scxl:font-poppins scxl:flex scxl:justify-center scxl:items-center", children: /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:flex-col scxl:items-center scxl:gap-6", children: [
  /* @__PURE__ */ x.jsxs("div", { className: "scxl:text-center scxl:space-y-2", children: [
    /* @__PURE__ */ x.jsx("h1", { className: Ce(n.title, "scxl:font-bold", e.primary), children: t.title }),
    /* @__PURE__ */ x.jsx("p", { className: e.textSecondary, children: t.loadingText })
  ] }),
  /* @__PURE__ */ x.jsx(
    "div",
    {
      className: Ce(
        "scxl:animate-spin scxl:rounded-full scxl:h-8 scxl:w-8 scxl:border-b-2",
        e.inputBorder
      )
    }
  )
] }) }), AR = ({
  onConnect: e,
  error: t,
  participantId: n,
  theme: r,
  labels: i,
  size: s,
  showParticipantId: o = !0,
  trackHasStarted: a
}) => /* @__PURE__ */ x.jsx("div", { className: "scxl:w-full scxl:h-screen scxl:p-5 scxl:font-poppins scxl:flex scxl:justify-center scxl:items-center", children: /* @__PURE__ */ x.jsxs("div", { className: "scxl:flex scxl:flex-col scxl:items-center scxl:gap-6", children: [
  /* @__PURE__ */ x.jsxs("div", { className: "scxl:text-center scxl:space-y-2", children: [
    /* @__PURE__ */ x.jsx("h1", { className: Ce(s.title, "scxl:font-bold", r.primary), children: i.title }),
    /* @__PURE__ */ x.jsx("p", { className: r.textSecondary, children: i.subtitle })
  ] }),
  t && /* @__PURE__ */ x.jsx(
    "div",
    {
      className: Ce(
        "scxl:border scxl:rounded-lg",
        s.padding,
        r.errorLight,
        r.border
      ),
      children: /* @__PURE__ */ x.jsx("p", { className: Ce(s.text, r.error), children: t })
    }
  ),
  /* @__PURE__ */ x.jsx(ZT, { onConnect: e, trackHasStarted: a }),
  o && n && /* @__PURE__ */ x.jsxs("p", { className: Ce(s.text, r.textMuted), children: [
    "Participant ID: ",
    n
  ] })
] }) }), OR = ({
  isBotReady: e,
  participantId: t,
  onTextSend: n,
  onDisconnect: r,
  theme: i,
  labels: s,
  size: o,
  showParticipantId: a = !0,
  showConnectionStatus: c = !0,
  enableVoice: l = !0,
  client: u
}) => {
  const [f, h] = _e(!1), [p, g] = _e(!1), [y, b] = _e(!1), w = (S) => {
    g(S >= 240);
  }, M = async () => {
    if (!y) {
      console.log("Toggling voice mode to", !f);
      try {
        b(!0);
        const S = !f;
        u?.enableMic?.(S), h(S), u?.sendClientMessage("voice_mode", { isVoiceMode: S }), console.log("Switched to", S ? "voice mode" : "text mode");
      } catch (S) {
        console.error("Failed to toggle voice mode:", S);
      } finally {
        b(!1);
      }
    }
  }, C = () => {
    f ? M() : r && r();
  };
  return /* @__PURE__ */ x.jsx("div", { className: "scxl:w-full scxl:h-screen scxl:p-5 scxl:font-poppins scxl:flex scxl:justify-center scxl:items-center", children: /* @__PURE__ */ x.jsx("div", { className: "scxl:w-full scxl:h-full scxl:flex scxl:flex-1 scxl:flex-col scxl:justify-center scxl:items-center", children: /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: Ce(
        "scxl:w-full scxl:h-full scxl:flex scxl:flex-col scxl:justify-center scxl:items-center",
        o.container
      ),
      children: [
        /* @__PURE__ */ x.jsx(XT, {}),
        f ? /* @__PURE__ */ x.jsx(
          MR,
          {
            theme: i,
            size: o,
            labels: s,
            isVoiceMode: f,
            handleDisconnect: C,
            onVoiceModeToggle: M,
            isTogglingVoice: y
          }
        ) : /* @__PURE__ */ x.jsx(
          TR,
          {
            theme: i,
            size: o,
            labels: s,
            isVoiceMode: f,
            isBotReady: e,
            isTogglingVoice: y,
            showConnectionStatus: c,
            showParticipantId: a,
            enableVoice: l,
            participantId: t,
            isAtMaxHeight: p,
            onTextSend: n,
            onVoiceModeToggle: M,
            onDisconnect: r,
            onHeightChange: w
          }
        )
      ]
    }
  ) }) });
}, BR = ({
  systemPrompt: e = "You are a helpful AI assistant.",
  connectionUrl: t,
  theme: n = {},
  className: r = "",
  callbacks: i = {},
  labels: s = {},
  size: o = "md",
  typewriterSpeed: a = 20,
  enableVoice: c = !0,
  enableTextInput: l = !0,
  enableMicrophone: u = !0,
  showParticipantId: f = !0,
  showConnectionStatus: h = !0,
  autoConnect: p = !1
}) => {
  const [g, y] = _e(null), [b, w] = _e(!1), M = Lb(n), C = jb(o), S = { ...Db, ...s }, _ = Vt(
    () => ({
      enableMic: u,
      callbacks: {
        onParticipantJoined: (D) => {
          console.log("Participant joined:", D), y(null), i.onParticipantJoined?.(D);
        },
        onTrackStarted: (D, te) => {
          console.log("Track started:", {
            kind: D.kind,
            enabled: D.enabled,
            muted: D.muted,
            readyState: D.readyState,
            participant: te
          }), D.enabled = !1, i.onTrackStarted?.(D, te), w(!0);
        },
        onDisconnected: () => {
          console.log("Client disconnected"), i.onDisconnect?.();
        },
        onConnected: () => {
          console.log("Client connected"), i.onConnect?.();
        },
        onError: (D) => {
          console.error("Client error:", D);
          const te = D.label || D.type || "An error occurred";
          y(te), i.onError?.(te);
        },
        onBotReady: () => {
          i.onBotReady?.(), console.log("Bot is ready!");
        },
        onUserStartedSpeaking: () => {
          console.log("User started speaking"), i.onUserStartedSpeaking?.();
        },
        onUserStoppedSpeaking: () => {
          console.log("User stopped speaking"), i.onUserStoppedSpeaking?.();
        },
        onBotStartedSpeaking: () => {
          console.log("Bot started speaking"), i.onBotStartedSpeaking?.();
        },
        onBotStoppedSpeaking: () => {
          console.log("Bot stopped speaking"), i.onBotStoppedSpeaking?.();
        },
        onClientMessage: (D) => {
          console.log("Client message:", D), i.onMessageReceived?.(D);
        }
      }
    }),
    [i, u]
  ), O = Vt(
    () => ({
      connectionUrl: t || "wss://localhost:8765"
      // fallback URL
    }),
    [t]
  ), {
    client: k,
    isConnected: P,
    isClientReady: R,
    isBotReady: L,
    participantId: I,
    handleConnect: V,
    handleDisconnect: q
  } = v1({
    noUserAudio: !u,
    connectParams: O,
    clientOptions: _,
    systemPrompt: e
  }), $ = async () => {
    try {
      y(null), await V();
    } catch (D) {
      console.error("Failed to connect:", D), y(D instanceof Error ? D.message : "Failed to connect");
    }
  }, H = async () => {
    try {
      await q(), y(null);
    } catch (D) {
      console.error("Failed to disconnect:", D), y(D instanceof Error ? D.message : "Failed to disconnect");
    }
  }, { addUserMessage: Y } = $g(), W = (D) => {
    if (D.key === "Enter" && !D.shiftKey) {
      if (D.preventDefault(), !l) return;
      const te = D.target.value.trim();
      if (te && k) {
        console.log("Sending text message:", te), ge.markAllMessagesAsStale(), Y(te), k.sendClientMessage("llm", {
          action: "append_to_messages",
          arguments: {
            messages: [{ role: "user", content: te }],
            run_immediately: !0
          }
        }), D.target.value = "";
        const N = new Event("input", { bubbles: !0 });
        D.target.dispatchEvent(N), i.onMessageSent?.(te);
      }
    }
  };
  return me(() => {
    p && !P && R && $();
  }, [p, P, R]), me(() => () => {
    P && H();
  }, []), t ? /* @__PURE__ */ x.jsx("div", { className: Ce(M.background, r), children: /* @__PURE__ */ x.jsxs(rm, { client: k, children: [
    /* @__PURE__ */ x.jsx(im, {}),
    !R || !k ? /* @__PURE__ */ x.jsx(
      PR,
      {
        theme: M,
        labels: S,
        size: C
      }
    ) : P ? /* @__PURE__ */ x.jsx(
      OR,
      {
        isBotReady: L,
        participantId: I,
        onTextSend: W,
        onDisconnect: H,
        client: k,
        theme: M,
        labels: S,
        size: C,
        showParticipantId: f,
        showConnectionStatus: h,
        enableVoice: c,
        typewriterSpeed: a
      }
    ) : /* @__PURE__ */ x.jsx(
      AR,
      {
        onConnect: $,
        error: g,
        participantId: I,
        theme: M,
        labels: S,
        size: C,
        showParticipantId: f,
        trackHasStarted: b
      }
    )
  ] }) }) : /* @__PURE__ */ x.jsx("div", { className: "scxl:w-full scxl:h-screen scxl:p-5 scxl:font-poppins scxl:flex scxl:justify-center scxl:items-center", children: /* @__PURE__ */ x.jsx(
    "div",
    {
      className: Ce(
        "scxl:border scxl:rounded-lg",
        C.padding,
        M.errorLight,
        M.border
      ),
      children: /* @__PURE__ */ x.jsx("p", { className: Ce(C.text, M.error), children: "Error: connectionUrl prop is required" })
    }
  ) });
};
export {
  BR as ChatUI,
  jR as TypeWriter,
  Db as defaultLabels,
  ye as defaultTheme,
  jb as getSizeClasses,
  Lb as getThemeClasses
};
