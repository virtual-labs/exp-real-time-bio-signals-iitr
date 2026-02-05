(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const u of r)
      if (u.type === "childList")
        for (const c of u.addedNodes)
          c.tagName === "LINK" && c.rel === "modulepreload" && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(r) {
    const u = {};
    return (
      r.integrity && (u.integrity = r.integrity),
      r.referrerPolicy && (u.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (u.credentials = "omit")
          : (u.credentials = "same-origin"),
      u
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const u = a(r);
    fetch(r.href, u);
  }
})();
function Av(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var kc = { exports: {} },
  Zl = {};
var Og;
function Tv() {
  if (Og) return Zl;
  Og = 1;
  var i = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function a(s, r, u) {
    var c = null;
    if (
      (u !== void 0 && (c = "" + u),
      r.key !== void 0 && (c = "" + r.key),
      "key" in r)
    ) {
      u = {};
      for (var h in r) h !== "key" && (u[h] = r[h]);
    } else u = r;
    return (
      (r = u.ref),
      { $$typeof: i, type: s, key: c, ref: r !== void 0 ? r : null, props: u }
    );
  }
  return ((Zl.Fragment = n), (Zl.jsx = a), (Zl.jsxs = a), Zl);
}
var Dg;
function Cv() {
  return (Dg || ((Dg = 1), (kc.exports = Tv())), kc.exports);
}
var D = Cv(),
  Lc = { exports: {} },
  bt = {};
var Rg;
function Ov() {
  if (Rg) return bt;
  Rg = 1;
  var i = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    u = Symbol.for("react.consumer"),
    c = Symbol.for("react.context"),
    h = Symbol.for("react.forward_ref"),
    m = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    p = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    x = Symbol.iterator;
  function S(E) {
    return E === null || typeof E != "object"
      ? null
      : ((E = (x && E[x]) || E["@@iterator"]),
        typeof E == "function" ? E : null);
  }
  var T = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    M = Object.assign,
    w = {};
  function N(E, k, F) {
    ((this.props = E),
      (this.context = k),
      (this.refs = w),
      (this.updater = F || T));
  }
  ((N.prototype.isReactComponent = {}),
    (N.prototype.setState = function (E, k) {
      if (typeof E != "object" && typeof E != "function" && E != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, E, k, "setState");
    }),
    (N.prototype.forceUpdate = function (E) {
      this.updater.enqueueForceUpdate(this, E, "forceUpdate");
    }));
  function X() {}
  X.prototype = N.prototype;
  function J(E, k, F) {
    ((this.props = E),
      (this.context = k),
      (this.refs = w),
      (this.updater = F || T));
  }
  var W = (J.prototype = new X());
  ((W.constructor = J), M(W, N.prototype), (W.isPureReactComponent = !0));
  var G = Array.isArray;
  function et() {}
  var z = { H: null, A: null, T: null, S: null },
    _ = Object.prototype.hasOwnProperty;
  function A(E, k, F) {
    var it = F.ref;
    return {
      $$typeof: i,
      type: E,
      key: k,
      ref: it !== void 0 ? it : null,
      props: F,
    };
  }
  function j(E, k) {
    return A(E.type, k, E.props);
  }
  function V(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function K(E) {
    var k = { "=": "=0", ":": "=2" };
    return (
      "$" +
      E.replace(/[=:]/g, function (F) {
        return k[F];
      })
    );
  }
  var at = /\/+/g;
  function tt(E, k) {
    return typeof E == "object" && E !== null && E.key != null
      ? K("" + E.key)
      : k.toString(36);
  }
  function lt(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (
          (typeof E.status == "string"
            ? E.then(et, et)
            : ((E.status = "pending"),
              E.then(
                function (k) {
                  E.status === "pending" &&
                    ((E.status = "fulfilled"), (E.value = k));
                },
                function (k) {
                  E.status === "pending" &&
                    ((E.status = "rejected"), (E.reason = k));
                },
              )),
          E.status)
        ) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function O(E, k, F, it, rt) {
    var ot = typeof E;
    (ot === "undefined" || ot === "boolean") && (E = null);
    var gt = !1;
    if (E === null) gt = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          gt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case n:
              gt = !0;
              break;
            case p:
              return ((gt = E._init), O(gt(E._payload), k, F, it, rt));
          }
      }
    if (gt)
      return (
        (rt = rt(E)),
        (gt = it === "" ? "." + tt(E, 0) : it),
        G(rt)
          ? ((F = ""),
            gt != null && (F = gt.replace(at, "$&/") + "/"),
            O(rt, k, F, "", function (Tt) {
              return Tt;
            }))
          : rt != null &&
            (V(rt) &&
              (rt = j(
                rt,
                F +
                  (rt.key == null || (E && E.key === rt.key)
                    ? ""
                    : ("" + rt.key).replace(at, "$&/") + "/") +
                  gt,
              )),
            k.push(rt)),
        1
      );
    gt = 0;
    var ut = it === "" ? "." : it + ":";
    if (G(E))
      for (var ct = 0; ct < E.length; ct++)
        ((it = E[ct]), (ot = ut + tt(it, ct)), (gt += O(it, k, F, ot, rt)));
    else if (((ct = S(E)), typeof ct == "function"))
      for (E = ct.call(E), ct = 0; !(it = E.next()).done; )
        ((it = it.value),
          (ot = ut + tt(it, ct++)),
          (gt += O(it, k, F, ot, rt)));
    else if (ot === "object") {
      if (typeof E.then == "function") return O(lt(E), k, F, it, rt);
      throw (
        (k = String(E)),
        Error(
          "Objects are not valid as a React child (found: " +
            (k === "[object Object]"
              ? "object with keys {" + Object.keys(E).join(", ") + "}"
              : k) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return gt;
  }
  function Y(E, k, F) {
    if (E == null) return E;
    var it = [],
      rt = 0;
    return (
      O(E, it, "", "", function (ot) {
        return k.call(F, ot, rt++);
      }),
      it
    );
  }
  function Q(E) {
    if (E._status === -1) {
      var k = E._result;
      ((k = k()),
        k.then(
          function (F) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 1), (E._result = F));
          },
          function (F) {
            (E._status === 0 || E._status === -1) &&
              ((E._status = 2), (E._result = F));
          },
        ),
        E._status === -1 && ((E._status = 0), (E._result = k)));
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var nt =
      typeof reportError == "function"
        ? reportError
        : function (E) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var k = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof E == "object" &&
                  E !== null &&
                  typeof E.message == "string"
                    ? String(E.message)
                    : String(E),
                error: E,
              });
              if (!window.dispatchEvent(k)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", E);
              return;
            }
            console.error(E);
          },
    st = {
      map: Y,
      forEach: function (E, k, F) {
        Y(
          E,
          function () {
            k.apply(this, arguments);
          },
          F,
        );
      },
      count: function (E) {
        var k = 0;
        return (
          Y(E, function () {
            k++;
          }),
          k
        );
      },
      toArray: function (E) {
        return (
          Y(E, function (k) {
            return k;
          }) || []
        );
      },
      only: function (E) {
        if (!V(E))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return E;
      },
    };
  return (
    (bt.Activity = b),
    (bt.Children = st),
    (bt.Component = N),
    (bt.Fragment = a),
    (bt.Profiler = r),
    (bt.PureComponent = J),
    (bt.StrictMode = s),
    (bt.Suspense = m),
    (bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z),
    (bt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (E) {
        return z.H.useMemoCache(E);
      },
    }),
    (bt.cache = function (E) {
      return function () {
        return E.apply(null, arguments);
      };
    }),
    (bt.cacheSignal = function () {
      return null;
    }),
    (bt.cloneElement = function (E, k, F) {
      if (E == null)
        throw Error(
          "The argument must be a React element, but you passed " + E + ".",
        );
      var it = M({}, E.props),
        rt = E.key;
      if (k != null)
        for (ot in (k.key !== void 0 && (rt = "" + k.key), k))
          !_.call(k, ot) ||
            ot === "key" ||
            ot === "__self" ||
            ot === "__source" ||
            (ot === "ref" && k.ref === void 0) ||
            (it[ot] = k[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) it.children = F;
      else if (1 < ot) {
        for (var gt = Array(ot), ut = 0; ut < ot; ut++)
          gt[ut] = arguments[ut + 2];
        it.children = gt;
      }
      return A(E.type, rt, it);
    }),
    (bt.createContext = function (E) {
      return (
        (E = {
          $$typeof: c,
          _currentValue: E,
          _currentValue2: E,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (E.Provider = E),
        (E.Consumer = { $$typeof: u, _context: E }),
        E
      );
    }),
    (bt.createElement = function (E, k, F) {
      var it,
        rt = {},
        ot = null;
      if (k != null)
        for (it in (k.key !== void 0 && (ot = "" + k.key), k))
          _.call(k, it) &&
            it !== "key" &&
            it !== "__self" &&
            it !== "__source" &&
            (rt[it] = k[it]);
      var gt = arguments.length - 2;
      if (gt === 1) rt.children = F;
      else if (1 < gt) {
        for (var ut = Array(gt), ct = 0; ct < gt; ct++)
          ut[ct] = arguments[ct + 2];
        rt.children = ut;
      }
      if (E && E.defaultProps)
        for (it in ((gt = E.defaultProps), gt))
          rt[it] === void 0 && (rt[it] = gt[it]);
      return A(E, ot, rt);
    }),
    (bt.createRef = function () {
      return { current: null };
    }),
    (bt.forwardRef = function (E) {
      return { $$typeof: h, render: E };
    }),
    (bt.isValidElement = V),
    (bt.lazy = function (E) {
      return { $$typeof: p, _payload: { _status: -1, _result: E }, _init: Q };
    }),
    (bt.memo = function (E, k) {
      return { $$typeof: g, type: E, compare: k === void 0 ? null : k };
    }),
    (bt.startTransition = function (E) {
      var k = z.T,
        F = {};
      z.T = F;
      try {
        var it = E(),
          rt = z.S;
        (rt !== null && rt(F, it),
          typeof it == "object" &&
            it !== null &&
            typeof it.then == "function" &&
            it.then(et, nt));
      } catch (ot) {
        nt(ot);
      } finally {
        (k !== null && F.types !== null && (k.types = F.types), (z.T = k));
      }
    }),
    (bt.unstable_useCacheRefresh = function () {
      return z.H.useCacheRefresh();
    }),
    (bt.use = function (E) {
      return z.H.use(E);
    }),
    (bt.useActionState = function (E, k, F) {
      return z.H.useActionState(E, k, F);
    }),
    (bt.useCallback = function (E, k) {
      return z.H.useCallback(E, k);
    }),
    (bt.useContext = function (E) {
      return z.H.useContext(E);
    }),
    (bt.useDebugValue = function () {}),
    (bt.useDeferredValue = function (E, k) {
      return z.H.useDeferredValue(E, k);
    }),
    (bt.useEffect = function (E, k) {
      return z.H.useEffect(E, k);
    }),
    (bt.useEffectEvent = function (E) {
      return z.H.useEffectEvent(E);
    }),
    (bt.useId = function () {
      return z.H.useId();
    }),
    (bt.useImperativeHandle = function (E, k, F) {
      return z.H.useImperativeHandle(E, k, F);
    }),
    (bt.useInsertionEffect = function (E, k) {
      return z.H.useInsertionEffect(E, k);
    }),
    (bt.useLayoutEffect = function (E, k) {
      return z.H.useLayoutEffect(E, k);
    }),
    (bt.useMemo = function (E, k) {
      return z.H.useMemo(E, k);
    }),
    (bt.useOptimistic = function (E, k) {
      return z.H.useOptimistic(E, k);
    }),
    (bt.useReducer = function (E, k, F) {
      return z.H.useReducer(E, k, F);
    }),
    (bt.useRef = function (E) {
      return z.H.useRef(E);
    }),
    (bt.useState = function (E) {
      return z.H.useState(E);
    }),
    (bt.useSyncExternalStore = function (E, k, F) {
      return z.H.useSyncExternalStore(E, k, F);
    }),
    (bt.useTransition = function () {
      return z.H.useTransition();
    }),
    (bt.version = "19.2.3"),
    bt
  );
}
var zg;
function cf() {
  return (zg || ((zg = 1), (Lc.exports = Ov())), Lc.exports);
}
var H = cf(),
  Hc = { exports: {} },
  Kl = {},
  Bc = { exports: {} },
  Uc = {};
var Ng;
function Dv() {
  return (
    Ng ||
      ((Ng = 1),
      (function (i) {
        function n(O, Y) {
          var Q = O.length;
          O.push(Y);
          t: for (; 0 < Q; ) {
            var nt = (Q - 1) >>> 1,
              st = O[nt];
            if (0 < r(st, Y)) ((O[nt] = Y), (O[Q] = st), (Q = nt));
            else break t;
          }
        }
        function a(O) {
          return O.length === 0 ? null : O[0];
        }
        function s(O) {
          if (O.length === 0) return null;
          var Y = O[0],
            Q = O.pop();
          if (Q !== Y) {
            O[0] = Q;
            t: for (var nt = 0, st = O.length, E = st >>> 1; nt < E; ) {
              var k = 2 * (nt + 1) - 1,
                F = O[k],
                it = k + 1,
                rt = O[it];
              if (0 > r(F, Q))
                it < st && 0 > r(rt, F)
                  ? ((O[nt] = rt), (O[it] = Q), (nt = it))
                  : ((O[nt] = F), (O[k] = Q), (nt = k));
              else if (it < st && 0 > r(rt, Q))
                ((O[nt] = rt), (O[it] = Q), (nt = it));
              else break t;
            }
          }
          return Y;
        }
        function r(O, Y) {
          var Q = O.sortIndex - Y.sortIndex;
          return Q !== 0 ? Q : O.id - Y.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var u = performance;
          i.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            h = c.now();
          i.unstable_now = function () {
            return c.now() - h;
          };
        }
        var m = [],
          g = [],
          p = 1,
          b = null,
          x = 3,
          S = !1,
          T = !1,
          M = !1,
          w = !1,
          N = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          J = typeof setImmediate < "u" ? setImmediate : null;
        function W(O) {
          for (var Y = a(g); Y !== null; ) {
            if (Y.callback === null) s(g);
            else if (Y.startTime <= O)
              (s(g), (Y.sortIndex = Y.expirationTime), n(m, Y));
            else break;
            Y = a(g);
          }
        }
        function G(O) {
          if (((M = !1), W(O), !T))
            if (a(m) !== null) ((T = !0), et || ((et = !0), K()));
            else {
              var Y = a(g);
              Y !== null && lt(G, Y.startTime - O);
            }
        }
        var et = !1,
          z = -1,
          _ = 5,
          A = -1;
        function j() {
          return w ? !0 : !(i.unstable_now() - A < _);
        }
        function V() {
          if (((w = !1), et)) {
            var O = i.unstable_now();
            A = O;
            var Y = !0;
            try {
              t: {
                ((T = !1), M && ((M = !1), X(z), (z = -1)), (S = !0));
                var Q = x;
                try {
                  e: {
                    for (
                      W(O), b = a(m);
                      b !== null && !(b.expirationTime > O && j());
                    ) {
                      var nt = b.callback;
                      if (typeof nt == "function") {
                        ((b.callback = null), (x = b.priorityLevel));
                        var st = nt(b.expirationTime <= O);
                        if (((O = i.unstable_now()), typeof st == "function")) {
                          ((b.callback = st), W(O), (Y = !0));
                          break e;
                        }
                        (b === a(m) && s(m), W(O));
                      } else s(m);
                      b = a(m);
                    }
                    if (b !== null) Y = !0;
                    else {
                      var E = a(g);
                      (E !== null && lt(G, E.startTime - O), (Y = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (x = Q), (S = !1));
                }
                Y = void 0;
              }
            } finally {
              Y ? K() : (et = !1);
            }
          }
        }
        var K;
        if (typeof J == "function")
          K = function () {
            J(V);
          };
        else if (typeof MessageChannel < "u") {
          var at = new MessageChannel(),
            tt = at.port2;
          ((at.port1.onmessage = V),
            (K = function () {
              tt.postMessage(null);
            }));
        } else
          K = function () {
            N(V, 0);
          };
        function lt(O, Y) {
          z = N(function () {
            O(i.unstable_now());
          }, Y);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (O) {
            O.callback = null;
          }),
          (i.unstable_forceFrameRate = function (O) {
            0 > O || 125 < O
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (_ = 0 < O ? Math.floor(1e3 / O) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (i.unstable_next = function (O) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Y = 3;
                break;
              default:
                Y = x;
            }
            var Q = x;
            x = Y;
            try {
              return O();
            } finally {
              x = Q;
            }
          }),
          (i.unstable_requestPaint = function () {
            w = !0;
          }),
          (i.unstable_runWithPriority = function (O, Y) {
            switch (O) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                O = 3;
            }
            var Q = x;
            x = O;
            try {
              return Y();
            } finally {
              x = Q;
            }
          }),
          (i.unstable_scheduleCallback = function (O, Y, Q) {
            var nt = i.unstable_now();
            switch (
              (typeof Q == "object" && Q !== null
                ? ((Q = Q.delay),
                  (Q = typeof Q == "number" && 0 < Q ? nt + Q : nt))
                : (Q = nt),
              O)
            ) {
              case 1:
                var st = -1;
                break;
              case 2:
                st = 250;
                break;
              case 5:
                st = 1073741823;
                break;
              case 4:
                st = 1e4;
                break;
              default:
                st = 5e3;
            }
            return (
              (st = Q + st),
              (O = {
                id: p++,
                callback: Y,
                priorityLevel: O,
                startTime: Q,
                expirationTime: st,
                sortIndex: -1,
              }),
              Q > nt
                ? ((O.sortIndex = Q),
                  n(g, O),
                  a(m) === null &&
                    O === a(g) &&
                    (M ? (X(z), (z = -1)) : (M = !0), lt(G, Q - nt)))
                : ((O.sortIndex = st),
                  n(m, O),
                  T || S || ((T = !0), et || ((et = !0), K()))),
              O
            );
          }),
          (i.unstable_shouldYield = j),
          (i.unstable_wrapCallback = function (O) {
            var Y = x;
            return function () {
              var Q = x;
              x = Y;
              try {
                return O.apply(this, arguments);
              } finally {
                x = Q;
              }
            };
          }));
      })(Uc)),
    Uc
  );
}
var jg;
function Rv() {
  return (jg || ((jg = 1), (Bc.exports = Dv())), Bc.exports);
}
var qc = { exports: {} },
  Me = {};
var kg;
function zv() {
  if (kg) return Me;
  kg = 1;
  var i = cf();
  function n(m) {
    var g = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        g += "&args[]=" + encodeURIComponent(arguments[p]);
    }
    return (
      "Minified React error #" +
      m +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function a() {}
  var s = {
      d: {
        f: a,
        r: function () {
          throw Error(n(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function u(m, g, p) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: b == null ? null : "" + b,
      children: m,
      containerInfo: g,
      implementation: p,
    };
  }
  var c = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(m, g) {
    if (m === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Me.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Me.createPortal = function (m, g) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(n(299));
      return u(m, g, null, p);
    }),
    (Me.flushSync = function (m) {
      var g = c.T,
        p = s.p;
      try {
        if (((c.T = null), (s.p = 2), m)) return m();
      } finally {
        ((c.T = g), (s.p = p), s.d.f());
      }
    }),
    (Me.preconnect = function (m, g) {
      typeof m == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        s.d.C(m, g));
    }),
    (Me.prefetchDNS = function (m) {
      typeof m == "string" && s.d.D(m);
    }),
    (Me.preinit = function (m, g) {
      if (typeof m == "string" && g && typeof g.as == "string") {
        var p = g.as,
          b = h(p, g.crossOrigin),
          x = typeof g.integrity == "string" ? g.integrity : void 0,
          S = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        p === "style"
          ? s.d.S(m, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: S,
            })
          : p === "script" &&
            s.d.X(m, {
              crossOrigin: b,
              integrity: x,
              fetchPriority: S,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Me.preinitModule = function (m, g) {
      if (typeof m == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var p = h(g.as, g.crossOrigin);
            s.d.M(m, {
              crossOrigin: p,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && s.d.M(m);
    }),
    (Me.preload = function (m, g) {
      if (
        typeof m == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var p = g.as,
          b = h(p, g.crossOrigin);
        s.d.L(m, p, {
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Me.preloadModule = function (m, g) {
      if (typeof m == "string")
        if (g) {
          var p = h(g.as, g.crossOrigin);
          s.d.m(m, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: p,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else s.d.m(m);
    }),
    (Me.requestFormReset = function (m) {
      s.d.r(m);
    }),
    (Me.unstable_batchedUpdates = function (m, g) {
      return m(g);
    }),
    (Me.useFormState = function (m, g, p) {
      return c.H.useFormState(m, g, p);
    }),
    (Me.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (Me.version = "19.2.3"),
    Me
  );
}
var Lg;
function Nv() {
  if (Lg) return qc.exports;
  Lg = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (n) {
        console.error(n);
      }
  }
  return (i(), (qc.exports = zv()), qc.exports);
}
var Hg;
function jv() {
  if (Hg) return Kl;
  Hg = 1;
  var i = Rv(),
    n = cf(),
    a = Nv();
  function s(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function u(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function c(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (u(t) !== t) throw Error(s(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = u(t)), e === null)) throw Error(s(188));
      return e !== t ? null : t;
    }
    for (var l = t, o = e; ; ) {
      var f = l.return;
      if (f === null) break;
      var d = f.alternate;
      if (d === null) {
        if (((o = f.return), o !== null)) {
          l = o;
          continue;
        }
        break;
      }
      if (f.child === d.child) {
        for (d = f.child; d; ) {
          if (d === l) return (m(f), t);
          if (d === o) return (m(f), e);
          d = d.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== o.return) ((l = f), (o = d));
      else {
        for (var y = !1, v = f.child; v; ) {
          if (v === l) {
            ((y = !0), (l = f), (o = d));
            break;
          }
          if (v === o) {
            ((y = !0), (o = f), (l = d));
            break;
          }
          v = v.sibling;
        }
        if (!y) {
          for (v = d.child; v; ) {
            if (v === l) {
              ((y = !0), (l = d), (o = f));
              break;
            }
            if (v === o) {
              ((y = !0), (o = d), (l = f));
              break;
            }
            v = v.sibling;
          }
          if (!y) throw Error(s(189));
        }
      }
      if (l.alternate !== o) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? t : e;
  }
  function p(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = p(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var b = Object.assign,
    x = Symbol.for("react.element"),
    S = Symbol.for("react.transitional.element"),
    T = Symbol.for("react.portal"),
    M = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    N = Symbol.for("react.profiler"),
    X = Symbol.for("react.consumer"),
    J = Symbol.for("react.context"),
    W = Symbol.for("react.forward_ref"),
    G = Symbol.for("react.suspense"),
    et = Symbol.for("react.suspense_list"),
    z = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    A = Symbol.for("react.activity"),
    j = Symbol.for("react.memo_cache_sentinel"),
    V = Symbol.iterator;
  function K(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (V && t[V]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var at = Symbol.for("react.client.reference");
  function tt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === at ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case M:
        return "Fragment";
      case N:
        return "Profiler";
      case w:
        return "StrictMode";
      case G:
        return "Suspense";
      case et:
        return "SuspenseList";
      case A:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case T:
          return "Portal";
        case J:
          return t.displayName || "Context";
        case X:
          return (t._context.displayName || "Context") + ".Consumer";
        case W:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case z:
          return (
            (e = t.displayName || null),
            e !== null ? e : tt(t.type) || "Memo"
          );
        case _:
          ((e = t._payload), (t = t._init));
          try {
            return tt(t(e));
          } catch {}
      }
    return null;
  }
  var lt = Array.isArray,
    O = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = { pending: !1, data: null, method: null, action: null },
    nt = [],
    st = -1;
  function E(t) {
    return { current: t };
  }
  function k(t) {
    0 > st || ((t.current = nt[st]), (nt[st] = null), st--);
  }
  function F(t, e) {
    (st++, (nt[st] = t.current), (t.current = e));
  }
  var it = E(null),
    rt = E(null),
    ot = E(null),
    gt = E(null);
  function ut(t, e) {
    switch ((F(ot, e), F(rt, t), F(it, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? $m(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = $m(e)), (t = Im(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (k(it), F(it, t));
  }
  function ct() {
    (k(it), k(rt), k(ot));
  }
  function Tt(t) {
    t.memoizedState !== null && F(gt, t);
    var e = it.current,
      l = Im(e, t.type);
    e !== l && (F(rt, t), F(it, l));
  }
  function yt(t) {
    (rt.current === t && (k(it), k(rt)),
      gt.current === t && (k(gt), (Xl._currentValue = Q)));
  }
  var _t, Zt;
  function St(t) {
    if (_t === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((_t = (e && e[1]) || ""),
          (Zt =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      _t +
      t +
      Zt
    );
  }
  var Ct = !1;
  function ht(t, e) {
    if (!t || Ct) return "";
    Ct = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var I = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(I.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(I, []);
                } catch (Z) {
                  var q = Z;
                }
                Reflect.construct(t, [], I);
              } else {
                try {
                  I.call();
                } catch (Z) {
                  q = Z;
                }
                t.call(I.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                q = Z;
              }
              (I = t()) &&
                typeof I.catch == "function" &&
                I.catch(function () {});
            }
          } catch (Z) {
            if (Z && q && typeof Z.stack == "string") return [Z.stack, q.stack];
          }
          return [null, null];
        },
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var f = Object.getOwnPropertyDescriptor(
        o.DetermineComponentFrameRoot,
        "name",
      );
      f &&
        f.configurable &&
        Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var d = o.DetermineComponentFrameRoot(),
        y = d[0],
        v = d[1];
      if (y && v) {
        var C = y.split(`
`),
          U = v.split(`
`);
        for (
          f = o = 0;
          o < C.length && !C[o].includes("DetermineComponentFrameRoot");
        )
          o++;
        for (; f < U.length && !U[f].includes("DetermineComponentFrameRoot"); )
          f++;
        if (o === C.length || f === U.length)
          for (
            o = C.length - 1, f = U.length - 1;
            1 <= o && 0 <= f && C[o] !== U[f];
          )
            f--;
        for (; 1 <= o && 0 <= f; o--, f--)
          if (C[o] !== U[f]) {
            if (o !== 1 || f !== 1)
              do
                if ((o--, f--, 0 > f || C[o] !== U[f])) {
                  var P =
                    `
` + C[o].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      P.includes("<anonymous>") &&
                      (P = P.replace("<anonymous>", t.displayName)),
                    P
                  );
                }
              while (1 <= o && 0 <= f);
            break;
          }
      }
    } finally {
      ((Ct = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? St(l) : "";
  }
  function Ht(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return St(t.type);
      case 16:
        return St("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? St("Suspense Fallback")
          : St("Suspense");
      case 19:
        return St("SuspenseList");
      case 0:
      case 15:
        return ht(t.type, !1);
      case 11:
        return ht(t.type.render, !1);
      case 1:
        return ht(t.type, !0);
      case 31:
        return St("Activity");
      default:
        return "";
    }
  }
  function Rt(t) {
    try {
      var e = "",
        l = null;
      do ((e += Ht(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
    } catch (o) {
      return (
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack
      );
    }
  }
  var Yt = Object.prototype.hasOwnProperty,
    It = i.unstable_scheduleCallback,
    yn = i.unstable_cancelCallback,
    Ze = i.unstable_shouldYield,
    Ri = i.unstable_requestPaint,
    Lt = i.unstable_now,
    Ke = i.unstable_getCurrentPriorityLevel,
    ne = i.unstable_ImmediatePriority,
    ge = i.unstable_UserBlockingPriority,
    Te = i.unstable_NormalPriority,
    tl = i.unstable_LowPriority,
    el = i.unstable_IdlePriority,
    $n = i.log,
    We = i.unstable_setDisableYieldValue,
    hn = null,
    Se = null;
  function In(t) {
    if (
      (typeof $n == "function" && We(t),
      Se && typeof Se.setStrictMode == "function")
    )
      try {
        Se.setStrictMode(hn, t);
      } catch {}
  }
  var He = Math.clz32 ? Math.clz32 : hy,
    cy = Math.log,
    fy = Math.LN2;
  function hy(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((cy(t) / fy) | 0)) | 0);
  }
  var Ts = 256,
    Cs = 262144,
    Os = 4194304;
  function zi(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ds(t, e, l) {
    var o = t.pendingLanes;
    if (o === 0) return 0;
    var f = 0,
      d = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var v = o & 134217727;
    return (
      v !== 0
        ? ((o = v & ~d),
          o !== 0
            ? (f = zi(o))
            : ((y &= v),
              y !== 0
                ? (f = zi(y))
                : l || ((l = v & ~t), l !== 0 && (f = zi(l)))))
        : ((v = o & ~d),
          v !== 0
            ? (f = zi(v))
            : y !== 0
              ? (f = zi(y))
              : l || ((l = o & ~t), l !== 0 && (f = zi(l)))),
      f === 0
        ? 0
        : e !== 0 &&
            e !== f &&
            (e & d) === 0 &&
            ((d = f & -f),
            (l = e & -e),
            d >= l || (d === 32 && (l & 4194048) !== 0))
          ? e
          : f
    );
  }
  function nl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function dy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Nf() {
    var t = Os;
    return ((Os <<= 1), (Os & 62914560) === 0 && (Os = 4194304), t);
  }
  function Mr(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function il(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function my(t, e, l, o, f, d) {
    var y = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var v = t.entanglements,
      C = t.expirationTimes,
      U = t.hiddenUpdates;
    for (l = y & ~l; 0 < l; ) {
      var P = 31 - He(l),
        I = 1 << P;
      ((v[P] = 0), (C[P] = -1));
      var q = U[P];
      if (q !== null)
        for (U[P] = null, P = 0; P < q.length; P++) {
          var Z = q[P];
          Z !== null && (Z.lane &= -536870913);
        }
      l &= ~I;
    }
    (o !== 0 && jf(t, o, 0),
      d !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= d & ~(y & ~e)));
  }
  function jf(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var o = 31 - He(e);
    ((t.entangledLanes |= e),
      (t.entanglements[o] = t.entanglements[o] | 1073741824 | (l & 261930)));
  }
  function kf(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var o = 31 - He(l),
        f = 1 << o;
      ((f & e) | (t[o] & e) && (t[o] |= e), (l &= ~f));
    }
  }
  function Lf(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : Er(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function Er(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function wr(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Hf() {
    var t = Y.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Sg(t.type));
  }
  function Bf(t, e) {
    var l = Y.p;
    try {
      return ((Y.p = t), e());
    } finally {
      Y.p = l;
    }
  }
  var ti = Math.random().toString(36).slice(2),
    pe = "__reactFiber$" + ti,
    Ce = "__reactProps$" + ti,
    ra = "__reactContainer$" + ti,
    Ar = "__reactEvents$" + ti,
    gy = "__reactListeners$" + ti,
    py = "__reactHandles$" + ti,
    Uf = "__reactResources$" + ti,
    al = "__reactMarker$" + ti;
  function Tr(t) {
    (delete t[pe], delete t[Ce], delete t[Ar], delete t[gy], delete t[py]);
  }
  function ua(t) {
    var e = t[pe];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[ra] || l[pe])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = sg(t); t !== null; ) {
            if ((l = t[pe])) return l;
            t = sg(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function ca(t) {
    if ((t = t[pe] || t[ra])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function ll(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(s(33));
  }
  function fa(t) {
    var e = t[Uf];
    return (
      e ||
        (e = t[Uf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function fe(t) {
    t[al] = !0;
  }
  var qf = new Set(),
    Yf = {};
  function Ni(t, e) {
    (ha(t, e), ha(t + "Capture", e));
  }
  function ha(t, e) {
    for (Yf[t] = e, t = 0; t < e.length; t++) qf.add(e[t]);
  }
  var yy = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Vf = {},
    Xf = {};
  function by(t) {
    return Yt.call(Xf, t)
      ? !0
      : Yt.call(Vf, t)
        ? !1
        : yy.test(t)
          ? (Xf[t] = !0)
          : ((Vf[t] = !0), !1);
  }
  function Rs(t, e, l) {
    if (by(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var o = e.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function zs(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Cn(t, e, l, o) {
    if (o === null) t.removeAttribute(l);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + o);
    }
  }
  function Je(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Gf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function vy(t, e, l) {
    var o = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof o < "u" &&
      typeof o.get == "function" &&
      typeof o.set == "function"
    ) {
      var f = o.get,
        d = o.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (y) {
            ((l = "" + y), d.call(this, y));
          },
        }),
        Object.defineProperty(t, e, { enumerable: o.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (y) {
            l = "" + y;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Cr(t) {
    if (!t._valueTracker) {
      var e = Gf(t) ? "checked" : "value";
      t._valueTracker = vy(t, e, "" + t[e]);
    }
  }
  function Qf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      o = "";
    return (
      t && (o = Gf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = o),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Ns(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var xy = /[\n"\\]/g;
  function Pe(t) {
    return t.replace(xy, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Or(t, e, l, o, f, d, y, v) {
    ((t.name = ""),
      y != null &&
      typeof y != "function" &&
      typeof y != "symbol" &&
      typeof y != "boolean"
        ? (t.type = y)
        : t.removeAttribute("type"),
      e != null
        ? y === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Je(e))
          : t.value !== "" + Je(e) && (t.value = "" + Je(e))
        : (y !== "submit" && y !== "reset") || t.removeAttribute("value"),
      e != null
        ? Dr(t, y, Je(e))
        : l != null
          ? Dr(t, y, Je(l))
          : o != null && t.removeAttribute("value"),
      f == null && d != null && (t.defaultChecked = !!d),
      f != null &&
        (t.checked = f && typeof f != "function" && typeof f != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Je(v))
        : t.removeAttribute("name"));
  }
  function Ff(t, e, l, o, f, d, y, v) {
    if (
      (d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean" &&
        (t.type = d),
      e != null || l != null)
    ) {
      if (!((d !== "submit" && d !== "reset") || e != null)) {
        Cr(t);
        return;
      }
      ((l = l != null ? "" + Je(l) : ""),
        (e = e != null ? "" + Je(e) : l),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((o = o ?? f),
      (o = typeof o != "function" && typeof o != "symbol" && !!o),
      (t.checked = v ? t.checked : !!o),
      (t.defaultChecked = !!o),
      y != null &&
        typeof y != "function" &&
        typeof y != "symbol" &&
        typeof y != "boolean" &&
        (t.name = y),
      Cr(t));
  }
  function Dr(t, e, l) {
    (e === "number" && Ns(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function da(t, e, l, o) {
    if (((t = t.options), e)) {
      e = {};
      for (var f = 0; f < l.length; f++) e["$" + l[f]] = !0;
      for (l = 0; l < t.length; l++)
        ((f = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== f && (t[l].selected = f),
          f && o && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + Je(l), e = null, f = 0; f < t.length; f++) {
        if (t[f].value === l) {
          ((t[f].selected = !0), o && (t[f].defaultSelected = !0));
          return;
        }
        e !== null || t[f].disabled || (e = t[f]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Zf(t, e, l) {
    if (
      e != null &&
      ((e = "" + Je(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Je(l) : "";
  }
  function Kf(t, e, l, o) {
    if (e == null) {
      if (o != null) {
        if (l != null) throw Error(s(92));
        if (lt(o)) {
          if (1 < o.length) throw Error(s(93));
          o = o[0];
        }
        l = o;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = Je(e)),
      (t.defaultValue = l),
      (o = t.textContent),
      o === l && o !== "" && o !== null && (t.value = o),
      Cr(t));
  }
  function ma(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var _y = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Wf(t, e, l) {
    var o = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? o
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : o
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || _y.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function Jf(t, e, l) {
    if (e != null && typeof e != "object") throw Error(s(62));
    if (((t = t.style), l != null)) {
      for (var o in l)
        !l.hasOwnProperty(o) ||
          (e != null && e.hasOwnProperty(o)) ||
          (o.indexOf("--") === 0
            ? t.setProperty(o, "")
            : o === "float"
              ? (t.cssFloat = "")
              : (t[o] = ""));
      for (var f in e)
        ((o = e[f]), e.hasOwnProperty(f) && l[f] !== o && Wf(t, f, o));
    } else for (var d in e) e.hasOwnProperty(d) && Wf(t, d, e[d]);
  }
  function Rr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Sy = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    My =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function js(t) {
    return My.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function On() {}
  var zr = null;
  function Nr(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var ga = null,
    pa = null;
  function Pf(t) {
    var e = ca(t);
    if (e && (t = e.stateNode)) {
      var l = t[Ce] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Or(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + Pe("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var o = l[e];
              if (o !== t && o.form === t.form) {
                var f = o[Ce] || null;
                if (!f) throw Error(s(90));
                Or(
                  o,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((o = l[e]), o.form === t.form && Qf(o));
          }
          break t;
        case "textarea":
          Zf(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && da(t, !!l.multiple, e, !1));
      }
    }
  }
  var jr = !1;
  function $f(t, e, l) {
    if (jr) return t(e, l);
    jr = !0;
    try {
      var o = t(e);
      return o;
    } finally {
      if (
        ((jr = !1),
        (ga !== null || pa !== null) &&
          (So(), ga && ((e = ga), (t = pa), (pa = ga = null), Pf(e), t)))
      )
        for (e = 0; e < t.length; e++) Pf(t[e]);
    }
  }
  function sl(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var o = l[Ce] || null;
    if (o === null) return null;
    l = o[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((o = !o.disabled) ||
          ((t = t.type),
          (o = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !o));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(s(231, e, typeof l));
    return l;
  }
  var Dn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    kr = !1;
  if (Dn)
    try {
      var ol = {};
      (Object.defineProperty(ol, "passive", {
        get: function () {
          kr = !0;
        },
      }),
        window.addEventListener("test", ol, ol),
        window.removeEventListener("test", ol, ol));
    } catch {
      kr = !1;
    }
  var ei = null,
    Lr = null,
    ks = null;
  function If() {
    if (ks) return ks;
    var t,
      e = Lr,
      l = e.length,
      o,
      f = "value" in ei ? ei.value : ei.textContent,
      d = f.length;
    for (t = 0; t < l && e[t] === f[t]; t++);
    var y = l - t;
    for (o = 1; o <= y && e[l - o] === f[d - o]; o++);
    return (ks = f.slice(t, 1 < o ? 1 - o : void 0));
  }
  function Ls(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Hs() {
    return !0;
  }
  function th() {
    return !1;
  }
  function Oe(t) {
    function e(l, o, f, d, y) {
      ((this._reactName = l),
        (this._targetInst = f),
        (this.type = o),
        (this.nativeEvent = d),
        (this.target = y),
        (this.currentTarget = null));
      for (var v in t)
        t.hasOwnProperty(v) && ((l = t[v]), (this[v] = l ? l(d) : d[v]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? Hs
          : th),
        (this.isPropagationStopped = th),
        this
      );
    }
    return (
      b(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Hs));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Hs));
        },
        persist: function () {},
        isPersistent: Hs,
      }),
      e
    );
  }
  var ji = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bs = Oe(ji),
    rl = b({}, ji, { view: 0, detail: 0 }),
    Ey = Oe(rl),
    Hr,
    Br,
    ul,
    Us = b({}, rl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: qr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== ul &&
              (ul && t.type === "mousemove"
                ? ((Hr = t.screenX - ul.screenX), (Br = t.screenY - ul.screenY))
                : (Br = Hr = 0),
              (ul = t)),
            Hr);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Br;
      },
    }),
    eh = Oe(Us),
    wy = b({}, Us, { dataTransfer: 0 }),
    Ay = Oe(wy),
    Ty = b({}, rl, { relatedTarget: 0 }),
    Ur = Oe(Ty),
    Cy = b({}, ji, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Oy = Oe(Cy),
    Dy = b({}, ji, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Ry = Oe(Dy),
    zy = b({}, ji, { data: 0 }),
    nh = Oe(zy),
    Ny = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    jy = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    ky = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ly(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = ky[t])
        ? !!e[t]
        : !1;
  }
  function qr() {
    return Ly;
  }
  var Hy = b({}, rl, {
      key: function (t) {
        if (t.key) {
          var e = Ny[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Ls(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? jy[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: qr,
      charCode: function (t) {
        return t.type === "keypress" ? Ls(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Ls(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    By = Oe(Hy),
    Uy = b({}, Us, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ih = Oe(Uy),
    qy = b({}, rl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: qr,
    }),
    Yy = Oe(qy),
    Vy = b({}, ji, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xy = Oe(Vy),
    Gy = b({}, Us, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Qy = Oe(Gy),
    Fy = b({}, ji, { newState: 0, oldState: 0 }),
    Zy = Oe(Fy),
    Ky = [9, 13, 27, 32],
    Yr = Dn && "CompositionEvent" in window,
    cl = null;
  Dn && "documentMode" in document && (cl = document.documentMode);
  var Wy = Dn && "TextEvent" in window && !cl,
    ah = Dn && (!Yr || (cl && 8 < cl && 11 >= cl)),
    lh = " ",
    sh = !1;
  function oh(t, e) {
    switch (t) {
      case "keyup":
        return Ky.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rh(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var ya = !1;
  function Jy(t, e) {
    switch (t) {
      case "compositionend":
        return rh(e);
      case "keypress":
        return e.which !== 32 ? null : ((sh = !0), lh);
      case "textInput":
        return ((t = e.data), t === lh && sh ? null : t);
      default:
        return null;
    }
  }
  function Py(t, e) {
    if (ya)
      return t === "compositionend" || (!Yr && oh(t, e))
        ? ((t = If()), (ks = Lr = ei = null), (ya = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return ah && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var $y = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function uh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!$y[t.type] : e === "textarea";
  }
  function ch(t, e, l, o) {
    (ga ? (pa ? pa.push(o) : (pa = [o])) : (ga = o),
      (e = Oo(e, "onChange")),
      0 < e.length &&
        ((l = new Bs("onChange", "change", null, l, o)),
        t.push({ event: l, listeners: e })));
  }
  var fl = null,
    hl = null;
  function Iy(t) {
    Fm(t, 0);
  }
  function qs(t) {
    var e = ll(t);
    if (Qf(e)) return t;
  }
  function fh(t, e) {
    if (t === "change") return e;
  }
  var hh = !1;
  if (Dn) {
    var Vr;
    if (Dn) {
      var Xr = "oninput" in document;
      if (!Xr) {
        var dh = document.createElement("div");
        (dh.setAttribute("oninput", "return;"),
          (Xr = typeof dh.oninput == "function"));
      }
      Vr = Xr;
    } else Vr = !1;
    hh = Vr && (!document.documentMode || 9 < document.documentMode);
  }
  function mh() {
    fl && (fl.detachEvent("onpropertychange", gh), (hl = fl = null));
  }
  function gh(t) {
    if (t.propertyName === "value" && qs(hl)) {
      var e = [];
      (ch(e, hl, t, Nr(t)), $f(Iy, e));
    }
  }
  function tb(t, e, l) {
    t === "focusin"
      ? (mh(), (fl = e), (hl = l), fl.attachEvent("onpropertychange", gh))
      : t === "focusout" && mh();
  }
  function eb(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return qs(hl);
  }
  function nb(t, e) {
    if (t === "click") return qs(e);
  }
  function ib(t, e) {
    if (t === "input" || t === "change") return qs(e);
  }
  function ab(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Be = typeof Object.is == "function" ? Object.is : ab;
  function dl(t, e) {
    if (Be(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      o = Object.keys(e);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var f = l[o];
      if (!Yt.call(e, f) || !Be(t[f], e[f])) return !1;
    }
    return !0;
  }
  function ph(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function yh(t, e) {
    var l = ph(t);
    t = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (((o = t + l.textContent.length), t <= e && o >= e))
          return { node: l, offset: e - t };
        t = o;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ph(l);
    }
  }
  function bh(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? bh(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function vh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ns(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Ns(t.document);
    }
    return e;
  }
  function Gr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var lb = Dn && "documentMode" in document && 11 >= document.documentMode,
    ba = null,
    Qr = null,
    ml = null,
    Fr = !1;
  function xh(t, e, l) {
    var o =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Fr ||
      ba == null ||
      ba !== Ns(o) ||
      ((o = ba),
      "selectionStart" in o && Gr(o)
        ? (o = { start: o.selectionStart, end: o.selectionEnd })
        : ((o = (
            (o.ownerDocument && o.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (o = {
            anchorNode: o.anchorNode,
            anchorOffset: o.anchorOffset,
            focusNode: o.focusNode,
            focusOffset: o.focusOffset,
          })),
      (ml && dl(ml, o)) ||
        ((ml = o),
        (o = Oo(Qr, "onSelect")),
        0 < o.length &&
          ((e = new Bs("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: o }),
          (e.target = ba))));
  }
  function ki(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var va = {
      animationend: ki("Animation", "AnimationEnd"),
      animationiteration: ki("Animation", "AnimationIteration"),
      animationstart: ki("Animation", "AnimationStart"),
      transitionrun: ki("Transition", "TransitionRun"),
      transitionstart: ki("Transition", "TransitionStart"),
      transitioncancel: ki("Transition", "TransitionCancel"),
      transitionend: ki("Transition", "TransitionEnd"),
    },
    Zr = {},
    _h = {};
  Dn &&
    ((_h = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete va.animationend.animation,
      delete va.animationiteration.animation,
      delete va.animationstart.animation),
    "TransitionEvent" in window || delete va.transitionend.transition);
  function Li(t) {
    if (Zr[t]) return Zr[t];
    if (!va[t]) return t;
    var e = va[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in _h) return (Zr[t] = e[l]);
    return t;
  }
  var Sh = Li("animationend"),
    Mh = Li("animationiteration"),
    Eh = Li("animationstart"),
    sb = Li("transitionrun"),
    ob = Li("transitionstart"),
    rb = Li("transitioncancel"),
    wh = Li("transitionend"),
    Ah = new Map(),
    Kr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Kr.push("scrollEnd");
  function dn(t, e) {
    (Ah.set(t, e), Ni(e, [t]));
  }
  var Ys =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    $e = [],
    xa = 0,
    Wr = 0;
  function Vs() {
    for (var t = xa, e = (Wr = xa = 0); e < t; ) {
      var l = $e[e];
      $e[e++] = null;
      var o = $e[e];
      $e[e++] = null;
      var f = $e[e];
      $e[e++] = null;
      var d = $e[e];
      if ((($e[e++] = null), o !== null && f !== null)) {
        var y = o.pending;
        (y === null ? (f.next = f) : ((f.next = y.next), (y.next = f)),
          (o.pending = f));
      }
      d !== 0 && Th(l, f, d);
    }
  }
  function Xs(t, e, l, o) {
    (($e[xa++] = t),
      ($e[xa++] = e),
      ($e[xa++] = l),
      ($e[xa++] = o),
      (Wr |= o),
      (t.lanes |= o),
      (t = t.alternate),
      t !== null && (t.lanes |= o));
  }
  function Jr(t, e, l, o) {
    return (Xs(t, e, l, o), Gs(t));
  }
  function Hi(t, e) {
    return (Xs(t, null, null, e), Gs(t));
  }
  function Th(t, e, l) {
    t.lanes |= l;
    var o = t.alternate;
    o !== null && (o.lanes |= l);
    for (var f = !1, d = t.return; d !== null; )
      ((d.childLanes |= l),
        (o = d.alternate),
        o !== null && (o.childLanes |= l),
        d.tag === 22 &&
          ((t = d.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = d),
        (d = d.return));
    return t.tag === 3
      ? ((d = t.stateNode),
        f &&
          e !== null &&
          ((f = 31 - He(l)),
          (t = d.hiddenUpdates),
          (o = t[f]),
          o === null ? (t[f] = [e]) : o.push(e),
          (e.lane = l | 536870912)),
        d)
      : null;
  }
  function Gs(t) {
    if (50 < Ll) throw ((Ll = 0), (lc = null), Error(s(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var _a = {};
  function ub(t, e, l, o) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = o),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ue(t, e, l, o) {
    return new ub(t, e, l, o);
  }
  function Pr(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function Rn(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = Ue(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Ch(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Qs(t, e, l, o, f, d) {
    var y = 0;
    if (((o = t), typeof t == "function")) Pr(t) && (y = 1);
    else if (typeof t == "string")
      y = mv(t, l, it.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case A:
          return ((t = Ue(31, l, e, f)), (t.elementType = A), (t.lanes = d), t);
        case M:
          return Bi(l.children, f, d, e);
        case w:
          ((y = 8), (f |= 24));
          break;
        case N:
          return (
            (t = Ue(12, l, e, f | 2)),
            (t.elementType = N),
            (t.lanes = d),
            t
          );
        case G:
          return ((t = Ue(13, l, e, f)), (t.elementType = G), (t.lanes = d), t);
        case et:
          return (
            (t = Ue(19, l, e, f)),
            (t.elementType = et),
            (t.lanes = d),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case J:
                y = 10;
                break t;
              case X:
                y = 9;
                break t;
              case W:
                y = 11;
                break t;
              case z:
                y = 14;
                break t;
              case _:
                ((y = 16), (o = null));
                break t;
            }
          ((y = 29),
            (l = Error(s(130, t === null ? "null" : typeof t, ""))),
            (o = null));
      }
    return (
      (e = Ue(y, l, e, f)),
      (e.elementType = t),
      (e.type = o),
      (e.lanes = d),
      e
    );
  }
  function Bi(t, e, l, o) {
    return ((t = Ue(7, t, o, e)), (t.lanes = l), t);
  }
  function $r(t, e, l) {
    return ((t = Ue(6, t, null, e)), (t.lanes = l), t);
  }
  function Oh(t) {
    var e = Ue(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Ir(t, e, l) {
    return (
      (e = Ue(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Dh = new WeakMap();
  function Ie(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Dh.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: Rt(e) }), Dh.set(t, e), e);
    }
    return { value: t, source: e, stack: Rt(e) };
  }
  var Sa = [],
    Ma = 0,
    Fs = null,
    gl = 0,
    tn = [],
    en = 0,
    ni = null,
    bn = 1,
    vn = "";
  function zn(t, e) {
    ((Sa[Ma++] = gl), (Sa[Ma++] = Fs), (Fs = t), (gl = e));
  }
  function Rh(t, e, l) {
    ((tn[en++] = bn), (tn[en++] = vn), (tn[en++] = ni), (ni = t));
    var o = bn;
    t = vn;
    var f = 32 - He(o) - 1;
    ((o &= ~(1 << f)), (l += 1));
    var d = 32 - He(e) + f;
    if (30 < d) {
      var y = f - (f % 5);
      ((d = (o & ((1 << y) - 1)).toString(32)),
        (o >>= y),
        (f -= y),
        (bn = (1 << (32 - He(e) + f)) | (l << f) | o),
        (vn = d + t));
    } else ((bn = (1 << d) | (l << f) | o), (vn = t));
  }
  function tu(t) {
    t.return !== null && (zn(t, 1), Rh(t, 1, 0));
  }
  function eu(t) {
    for (; t === Fs; )
      ((Fs = Sa[--Ma]), (Sa[Ma] = null), (gl = Sa[--Ma]), (Sa[Ma] = null));
    for (; t === ni; )
      ((ni = tn[--en]),
        (tn[en] = null),
        (vn = tn[--en]),
        (tn[en] = null),
        (bn = tn[--en]),
        (tn[en] = null));
  }
  function zh(t, e) {
    ((tn[en++] = bn),
      (tn[en++] = vn),
      (tn[en++] = ni),
      (bn = e.id),
      (vn = e.overflow),
      (ni = t));
  }
  var ye = null,
    Kt = null,
    Ot = !1,
    ii = null,
    nn = !1,
    nu = Error(s(519));
  function ai(t) {
    var e = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (pl(Ie(e, t)), nu);
  }
  function Nh(t) {
    var e = t.stateNode,
      l = t.type,
      o = t.memoizedProps;
    switch (((e[pe] = t), (e[Ce] = o), l)) {
      case "dialog":
        (Et("cancel", e), Et("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Et("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Bl.length; l++) Et(Bl[l], e);
        break;
      case "source":
        Et("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Et("error", e), Et("load", e));
        break;
      case "details":
        Et("toggle", e);
        break;
      case "input":
        (Et("invalid", e),
          Ff(
            e,
            o.value,
            o.defaultValue,
            o.checked,
            o.defaultChecked,
            o.type,
            o.name,
            !0,
          ));
        break;
      case "select":
        Et("invalid", e);
        break;
      case "textarea":
        (Et("invalid", e), Kf(e, o.value, o.defaultValue, o.children));
    }
    ((l = o.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      o.suppressHydrationWarning === !0 ||
      Jm(e.textContent, l)
        ? (o.popover != null && (Et("beforetoggle", e), Et("toggle", e)),
          o.onScroll != null && Et("scroll", e),
          o.onScrollEnd != null && Et("scrollend", e),
          o.onClick != null && (e.onclick = On),
          (e = !0))
        : (e = !1),
      e || ai(t, !0));
  }
  function jh(t) {
    for (ye = t.return; ye; )
      switch (ye.tag) {
        case 5:
        case 31:
        case 13:
          nn = !1;
          return;
        case 27:
        case 3:
          nn = !0;
          return;
        default:
          ye = ye.return;
      }
  }
  function Ea(t) {
    if (t !== ye) return !1;
    if (!Ot) return (jh(t), (Ot = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || xc(t.type, t.memoizedProps))),
        (l = !l)),
      l && Kt && ai(t),
      jh(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      Kt = lg(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      Kt = lg(t);
    } else
      e === 27
        ? ((e = Kt), bi(t.type) ? ((t = wc), (wc = null), (Kt = t)) : (Kt = e))
        : (Kt = ye ? ln(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ui() {
    ((Kt = ye = null), (Ot = !1));
  }
  function iu() {
    var t = ii;
    return (
      t !== null &&
        (Ne === null ? (Ne = t) : Ne.push.apply(Ne, t), (ii = null)),
      t
    );
  }
  function pl(t) {
    ii === null ? (ii = [t]) : ii.push(t);
  }
  var au = E(null),
    qi = null,
    Nn = null;
  function li(t, e, l) {
    (F(au, e._currentValue), (e._currentValue = l));
  }
  function jn(t) {
    ((t._currentValue = au.current), k(au));
  }
  function lu(t, e, l) {
    for (; t !== null; ) {
      var o = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), o !== null && (o.childLanes |= e))
          : o !== null && (o.childLanes & e) !== e && (o.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function su(t, e, l, o) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var d = f.dependencies;
      if (d !== null) {
        var y = f.child;
        d = d.firstContext;
        t: for (; d !== null; ) {
          var v = d;
          d = f;
          for (var C = 0; C < e.length; C++)
            if (v.context === e[C]) {
              ((d.lanes |= l),
                (v = d.alternate),
                v !== null && (v.lanes |= l),
                lu(d.return, l, t),
                o || (y = null));
              break t;
            }
          d = v.next;
        }
      } else if (f.tag === 18) {
        if (((y = f.return), y === null)) throw Error(s(341));
        ((y.lanes |= l),
          (d = y.alternate),
          d !== null && (d.lanes |= l),
          lu(y, l, t),
          (y = null));
      } else y = f.child;
      if (y !== null) y.return = f;
      else
        for (y = f; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((f = y.sibling), f !== null)) {
            ((f.return = y.return), (y = f));
            break;
          }
          y = y.return;
        }
      f = y;
    }
  }
  function wa(t, e, l, o) {
    t = null;
    for (var f = e, d = !1; f !== null; ) {
      if (!d) {
        if ((f.flags & 524288) !== 0) d = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var y = f.alternate;
        if (y === null) throw Error(s(387));
        if (((y = y.memoizedProps), y !== null)) {
          var v = f.type;
          Be(f.pendingProps.value, y.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (f === gt.current) {
        if (((y = f.alternate), y === null)) throw Error(s(387));
        y.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(Xl) : (t = [Xl]));
      }
      f = f.return;
    }
    (t !== null && su(e, t, l, o), (e.flags |= 262144));
  }
  function Zs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Be(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Yi(t) {
    ((qi = t),
      (Nn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function be(t) {
    return kh(qi, t);
  }
  function Ks(t, e) {
    return (qi === null && Yi(t), kh(t, e));
  }
  function kh(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Nn === null)) {
      if (t === null) throw Error(s(308));
      ((Nn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else Nn = Nn.next = e;
    return l;
  }
  var cb =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, o) {
                  t.push(o);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    fb = i.unstable_scheduleCallback,
    hb = i.unstable_NormalPriority,
    se = {
      $$typeof: J,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function ou() {
    return { controller: new cb(), data: new Map(), refCount: 0 };
  }
  function yl(t) {
    (t.refCount--,
      t.refCount === 0 &&
        fb(hb, function () {
          t.controller.abort();
        }));
  }
  var bl = null,
    ru = 0,
    Aa = 0,
    Ta = null;
  function db(t, e) {
    if (bl === null) {
      var l = (bl = []);
      ((ru = 0),
        (Aa = fc()),
        (Ta = {
          status: "pending",
          value: void 0,
          then: function (o) {
            l.push(o);
          },
        }));
    }
    return (ru++, e.then(Lh, Lh), e);
  }
  function Lh() {
    if (--ru === 0 && bl !== null) {
      Ta !== null && (Ta.status = "fulfilled");
      var t = bl;
      ((bl = null), (Aa = 0), (Ta = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function mb(t, e) {
    var l = [],
      o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (f) {
          l.push(f);
        },
      };
    return (
      t.then(
        function () {
          ((o.status = "fulfilled"), (o.value = e));
          for (var f = 0; f < l.length; f++) (0, l[f])(e);
        },
        function (f) {
          for (o.status = "rejected", o.reason = f, f = 0; f < l.length; f++)
            (0, l[f])(void 0);
        },
      ),
      o
    );
  }
  var Hh = O.S;
  O.S = function (t, e) {
    ((xm = Lt()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        db(t, e),
      Hh !== null && Hh(t, e));
  };
  var Vi = E(null);
  function uu() {
    var t = Vi.current;
    return t !== null ? t : Qt.pooledCache;
  }
  function Ws(t, e) {
    e === null ? F(Vi, Vi.current) : F(Vi, e.pool);
  }
  function Bh() {
    var t = uu();
    return t === null ? null : { parent: se._currentValue, pool: t };
  }
  var Ca = Error(s(460)),
    cu = Error(s(474)),
    Js = Error(s(542)),
    Ps = { then: function () {} };
  function Uh(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function qh(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(On, On), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Vh(t), t);
      default:
        if (typeof e.status == "string") e.then(On, On);
        else {
          if (((t = Qt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (o) {
                if (e.status === "pending") {
                  var f = e;
                  ((f.status = "fulfilled"), (f.value = o));
                }
              },
              function (o) {
                if (e.status === "pending") {
                  var f = e;
                  ((f.status = "rejected"), (f.reason = o));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Vh(t), t);
        }
        throw ((Gi = e), Ca);
    }
  }
  function Xi(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((Gi = l), Ca)
        : l;
    }
  }
  var Gi = null;
  function Yh() {
    if (Gi === null) throw Error(s(459));
    var t = Gi;
    return ((Gi = null), t);
  }
  function Vh(t) {
    if (t === Ca || t === Js) throw Error(s(483));
  }
  var Oa = null,
    vl = 0;
  function $s(t) {
    var e = vl;
    return ((vl += 1), Oa === null && (Oa = []), qh(Oa, t, e));
  }
  function xl(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Is(t, e) {
    throw e.$$typeof === x
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          s(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Xh(t) {
    function e(L, R) {
      if (t) {
        var B = L.deletions;
        B === null ? ((L.deletions = [R]), (L.flags |= 16)) : B.push(R);
      }
    }
    function l(L, R) {
      if (!t) return null;
      for (; R !== null; ) (e(L, R), (R = R.sibling));
      return null;
    }
    function o(L) {
      for (var R = new Map(); L !== null; )
        (L.key !== null ? R.set(L.key, L) : R.set(L.index, L), (L = L.sibling));
      return R;
    }
    function f(L, R) {
      return ((L = Rn(L, R)), (L.index = 0), (L.sibling = null), L);
    }
    function d(L, R, B) {
      return (
        (L.index = B),
        t
          ? ((B = L.alternate),
            B !== null
              ? ((B = B.index), B < R ? ((L.flags |= 67108866), R) : B)
              : ((L.flags |= 67108866), R))
          : ((L.flags |= 1048576), R)
      );
    }
    function y(L) {
      return (t && L.alternate === null && (L.flags |= 67108866), L);
    }
    function v(L, R, B, $) {
      return R === null || R.tag !== 6
        ? ((R = $r(B, L.mode, $)), (R.return = L), R)
        : ((R = f(R, B)), (R.return = L), R);
    }
    function C(L, R, B, $) {
      var mt = B.type;
      return mt === M
        ? P(L, R, B.props.children, $, B.key)
        : R !== null &&
            (R.elementType === mt ||
              (typeof mt == "object" &&
                mt !== null &&
                mt.$$typeof === _ &&
                Xi(mt) === R.type))
          ? ((R = f(R, B.props)), xl(R, B), (R.return = L), R)
          : ((R = Qs(B.type, B.key, B.props, null, L.mode, $)),
            xl(R, B),
            (R.return = L),
            R);
    }
    function U(L, R, B, $) {
      return R === null ||
        R.tag !== 4 ||
        R.stateNode.containerInfo !== B.containerInfo ||
        R.stateNode.implementation !== B.implementation
        ? ((R = Ir(B, L.mode, $)), (R.return = L), R)
        : ((R = f(R, B.children || [])), (R.return = L), R);
    }
    function P(L, R, B, $, mt) {
      return R === null || R.tag !== 7
        ? ((R = Bi(B, L.mode, $, mt)), (R.return = L), R)
        : ((R = f(R, B)), (R.return = L), R);
    }
    function I(L, R, B) {
      if (
        (typeof R == "string" && R !== "") ||
        typeof R == "number" ||
        typeof R == "bigint"
      )
        return ((R = $r("" + R, L.mode, B)), (R.return = L), R);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case S:
            return (
              (B = Qs(R.type, R.key, R.props, null, L.mode, B)),
              xl(B, R),
              (B.return = L),
              B
            );
          case T:
            return ((R = Ir(R, L.mode, B)), (R.return = L), R);
          case _:
            return ((R = Xi(R)), I(L, R, B));
        }
        if (lt(R) || K(R))
          return ((R = Bi(R, L.mode, B, null)), (R.return = L), R);
        if (typeof R.then == "function") return I(L, $s(R), B);
        if (R.$$typeof === J) return I(L, Ks(L, R), B);
        Is(L, R);
      }
      return null;
    }
    function q(L, R, B, $) {
      var mt = R !== null ? R.key : null;
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return mt !== null ? null : v(L, R, "" + B, $);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case S:
            return B.key === mt ? C(L, R, B, $) : null;
          case T:
            return B.key === mt ? U(L, R, B, $) : null;
          case _:
            return ((B = Xi(B)), q(L, R, B, $));
        }
        if (lt(B) || K(B)) return mt !== null ? null : P(L, R, B, $, null);
        if (typeof B.then == "function") return q(L, R, $s(B), $);
        if (B.$$typeof === J) return q(L, R, Ks(L, B), $);
        Is(L, B);
      }
      return null;
    }
    function Z(L, R, B, $, mt) {
      if (
        (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
      )
        return ((L = L.get(B) || null), v(R, L, "" + $, mt));
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case S:
            return (
              (L = L.get($.key === null ? B : $.key) || null),
              C(R, L, $, mt)
            );
          case T:
            return (
              (L = L.get($.key === null ? B : $.key) || null),
              U(R, L, $, mt)
            );
          case _:
            return (($ = Xi($)), Z(L, R, B, $, mt));
        }
        if (lt($) || K($))
          return ((L = L.get(B) || null), P(R, L, $, mt, null));
        if (typeof $.then == "function") return Z(L, R, B, $s($), mt);
        if ($.$$typeof === J) return Z(L, R, B, Ks(R, $), mt);
        Is(R, $);
      }
      return null;
    }
    function ft(L, R, B, $) {
      for (
        var mt = null, zt = null, dt = R, xt = (R = 0), At = null;
        dt !== null && xt < B.length;
        xt++
      ) {
        dt.index > xt ? ((At = dt), (dt = null)) : (At = dt.sibling);
        var Nt = q(L, dt, B[xt], $);
        if (Nt === null) {
          dt === null && (dt = At);
          break;
        }
        (t && dt && Nt.alternate === null && e(L, dt),
          (R = d(Nt, R, xt)),
          zt === null ? (mt = Nt) : (zt.sibling = Nt),
          (zt = Nt),
          (dt = At));
      }
      if (xt === B.length) return (l(L, dt), Ot && zn(L, xt), mt);
      if (dt === null) {
        for (; xt < B.length; xt++)
          ((dt = I(L, B[xt], $)),
            dt !== null &&
              ((R = d(dt, R, xt)),
              zt === null ? (mt = dt) : (zt.sibling = dt),
              (zt = dt)));
        return (Ot && zn(L, xt), mt);
      }
      for (dt = o(dt); xt < B.length; xt++)
        ((At = Z(dt, L, xt, B[xt], $)),
          At !== null &&
            (t &&
              At.alternate !== null &&
              dt.delete(At.key === null ? xt : At.key),
            (R = d(At, R, xt)),
            zt === null ? (mt = At) : (zt.sibling = At),
            (zt = At)));
      return (
        t &&
          dt.forEach(function (Mi) {
            return e(L, Mi);
          }),
        Ot && zn(L, xt),
        mt
      );
    }
    function pt(L, R, B, $) {
      if (B == null) throw Error(s(151));
      for (
        var mt = null,
          zt = null,
          dt = R,
          xt = (R = 0),
          At = null,
          Nt = B.next();
        dt !== null && !Nt.done;
        xt++, Nt = B.next()
      ) {
        dt.index > xt ? ((At = dt), (dt = null)) : (At = dt.sibling);
        var Mi = q(L, dt, Nt.value, $);
        if (Mi === null) {
          dt === null && (dt = At);
          break;
        }
        (t && dt && Mi.alternate === null && e(L, dt),
          (R = d(Mi, R, xt)),
          zt === null ? (mt = Mi) : (zt.sibling = Mi),
          (zt = Mi),
          (dt = At));
      }
      if (Nt.done) return (l(L, dt), Ot && zn(L, xt), mt);
      if (dt === null) {
        for (; !Nt.done; xt++, Nt = B.next())
          ((Nt = I(L, Nt.value, $)),
            Nt !== null &&
              ((R = d(Nt, R, xt)),
              zt === null ? (mt = Nt) : (zt.sibling = Nt),
              (zt = Nt)));
        return (Ot && zn(L, xt), mt);
      }
      for (dt = o(dt); !Nt.done; xt++, Nt = B.next())
        ((Nt = Z(dt, L, xt, Nt.value, $)),
          Nt !== null &&
            (t &&
              Nt.alternate !== null &&
              dt.delete(Nt.key === null ? xt : Nt.key),
            (R = d(Nt, R, xt)),
            zt === null ? (mt = Nt) : (zt.sibling = Nt),
            (zt = Nt)));
      return (
        t &&
          dt.forEach(function (wv) {
            return e(L, wv);
          }),
        Ot && zn(L, xt),
        mt
      );
    }
    function Gt(L, R, B, $) {
      if (
        (typeof B == "object" &&
          B !== null &&
          B.type === M &&
          B.key === null &&
          (B = B.props.children),
        typeof B == "object" && B !== null)
      ) {
        switch (B.$$typeof) {
          case S:
            t: {
              for (var mt = B.key; R !== null; ) {
                if (R.key === mt) {
                  if (((mt = B.type), mt === M)) {
                    if (R.tag === 7) {
                      (l(L, R.sibling),
                        ($ = f(R, B.props.children)),
                        ($.return = L),
                        (L = $));
                      break t;
                    }
                  } else if (
                    R.elementType === mt ||
                    (typeof mt == "object" &&
                      mt !== null &&
                      mt.$$typeof === _ &&
                      Xi(mt) === R.type)
                  ) {
                    (l(L, R.sibling),
                      ($ = f(R, B.props)),
                      xl($, B),
                      ($.return = L),
                      (L = $));
                    break t;
                  }
                  l(L, R);
                  break;
                } else e(L, R);
                R = R.sibling;
              }
              B.type === M
                ? (($ = Bi(B.props.children, L.mode, $, B.key)),
                  ($.return = L),
                  (L = $))
                : (($ = Qs(B.type, B.key, B.props, null, L.mode, $)),
                  xl($, B),
                  ($.return = L),
                  (L = $));
            }
            return y(L);
          case T:
            t: {
              for (mt = B.key; R !== null; ) {
                if (R.key === mt)
                  if (
                    R.tag === 4 &&
                    R.stateNode.containerInfo === B.containerInfo &&
                    R.stateNode.implementation === B.implementation
                  ) {
                    (l(L, R.sibling),
                      ($ = f(R, B.children || [])),
                      ($.return = L),
                      (L = $));
                    break t;
                  } else {
                    l(L, R);
                    break;
                  }
                else e(L, R);
                R = R.sibling;
              }
              (($ = Ir(B, L.mode, $)), ($.return = L), (L = $));
            }
            return y(L);
          case _:
            return ((B = Xi(B)), Gt(L, R, B, $));
        }
        if (lt(B)) return ft(L, R, B, $);
        if (K(B)) {
          if (((mt = K(B)), typeof mt != "function")) throw Error(s(150));
          return ((B = mt.call(B)), pt(L, R, B, $));
        }
        if (typeof B.then == "function") return Gt(L, R, $s(B), $);
        if (B.$$typeof === J) return Gt(L, R, Ks(L, B), $);
        Is(L, B);
      }
      return (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
        ? ((B = "" + B),
          R !== null && R.tag === 6
            ? (l(L, R.sibling), ($ = f(R, B)), ($.return = L), (L = $))
            : (l(L, R), ($ = $r(B, L.mode, $)), ($.return = L), (L = $)),
          y(L))
        : l(L, R);
    }
    return function (L, R, B, $) {
      try {
        vl = 0;
        var mt = Gt(L, R, B, $);
        return ((Oa = null), mt);
      } catch (dt) {
        if (dt === Ca || dt === Js) throw dt;
        var zt = Ue(29, dt, null, L.mode);
        return ((zt.lanes = $), (zt.return = L), zt);
      }
    };
  }
  var Qi = Xh(!0),
    Gh = Xh(!1),
    si = !1;
  function fu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function hu(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function oi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ri(t, e, l) {
    var o = t.updateQueue;
    if (o === null) return null;
    if (((o = o.shared), (jt & 2) !== 0)) {
      var f = o.pending;
      return (
        f === null ? (e.next = e) : ((e.next = f.next), (f.next = e)),
        (o.pending = e),
        (e = Gs(t)),
        Th(t, null, l),
        e
      );
    }
    return (Xs(t, o, e, l), Gs(t));
  }
  function _l(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var o = e.lanes;
      ((o &= t.pendingLanes), (l |= o), (e.lanes = l), kf(t, l));
    }
  }
  function du(t, e) {
    var l = t.updateQueue,
      o = t.alternate;
    if (o !== null && ((o = o.updateQueue), l === o)) {
      var f = null,
        d = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var y = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (d === null ? (f = d = y) : (d = d.next = y), (l = l.next));
        } while (l !== null);
        d === null ? (f = d = e) : (d = d.next = e);
      } else f = d = e;
      ((l = {
        baseState: o.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: d,
        shared: o.shared,
        callbacks: o.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var mu = !1;
  function Sl() {
    if (mu) {
      var t = Ta;
      if (t !== null) throw t;
    }
  }
  function Ml(t, e, l, o) {
    mu = !1;
    var f = t.updateQueue;
    si = !1;
    var d = f.firstBaseUpdate,
      y = f.lastBaseUpdate,
      v = f.shared.pending;
    if (v !== null) {
      f.shared.pending = null;
      var C = v,
        U = C.next;
      ((C.next = null), y === null ? (d = U) : (y.next = U), (y = C));
      var P = t.alternate;
      P !== null &&
        ((P = P.updateQueue),
        (v = P.lastBaseUpdate),
        v !== y &&
          (v === null ? (P.firstBaseUpdate = U) : (v.next = U),
          (P.lastBaseUpdate = C)));
    }
    if (d !== null) {
      var I = f.baseState;
      ((y = 0), (P = U = C = null), (v = d));
      do {
        var q = v.lane & -536870913,
          Z = q !== v.lane;
        if (Z ? (wt & q) === q : (o & q) === q) {
          (q !== 0 && q === Aa && (mu = !0),
            P !== null &&
              (P = P.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var ft = t,
              pt = v;
            q = e;
            var Gt = l;
            switch (pt.tag) {
              case 1:
                if (((ft = pt.payload), typeof ft == "function")) {
                  I = ft.call(Gt, I, q);
                  break t;
                }
                I = ft;
                break t;
              case 3:
                ft.flags = (ft.flags & -65537) | 128;
              case 0:
                if (
                  ((ft = pt.payload),
                  (q = typeof ft == "function" ? ft.call(Gt, I, q) : ft),
                  q == null)
                )
                  break t;
                I = b({}, I, q);
                break t;
              case 2:
                si = !0;
            }
          }
          ((q = v.callback),
            q !== null &&
              ((t.flags |= 64),
              Z && (t.flags |= 8192),
              (Z = f.callbacks),
              Z === null ? (f.callbacks = [q]) : Z.push(q)));
        } else
          ((Z = {
            lane: q,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            P === null ? ((U = P = Z), (C = I)) : (P = P.next = Z),
            (y |= q));
        if (((v = v.next), v === null)) {
          if (((v = f.shared.pending), v === null)) break;
          ((Z = v),
            (v = Z.next),
            (Z.next = null),
            (f.lastBaseUpdate = Z),
            (f.shared.pending = null));
        }
      } while (!0);
      (P === null && (C = I),
        (f.baseState = C),
        (f.firstBaseUpdate = U),
        (f.lastBaseUpdate = P),
        d === null && (f.shared.lanes = 0),
        (di |= y),
        (t.lanes = y),
        (t.memoizedState = I));
    }
  }
  function Qh(t, e) {
    if (typeof t != "function") throw Error(s(191, t));
    t.call(e);
  }
  function Fh(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Qh(l[t], e);
  }
  var Da = E(null),
    to = E(0);
  function Zh(t, e) {
    ((t = Xn), F(to, t), F(Da, e), (Xn = t | e.baseLanes));
  }
  function gu() {
    (F(to, Xn), F(Da, Da.current));
  }
  function pu() {
    ((Xn = to.current), k(Da), k(to));
  }
  var qe = E(null),
    an = null;
  function ui(t) {
    var e = t.alternate;
    (F(ie, ie.current & 1),
      F(qe, t),
      an === null &&
        (e === null || Da.current !== null || e.memoizedState !== null) &&
        (an = t));
  }
  function yu(t) {
    (F(ie, ie.current), F(qe, t), an === null && (an = t));
  }
  function Kh(t) {
    t.tag === 22
      ? (F(ie, ie.current), F(qe, t), an === null && (an = t))
      : ci();
  }
  function ci() {
    (F(ie, ie.current), F(qe, qe.current));
  }
  function Ye(t) {
    (k(qe), an === t && (an = null), k(ie));
  }
  var ie = E(0);
  function eo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Mc(l) || Ec(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var kn = 0,
    vt = null,
    Vt = null,
    oe = null,
    no = !1,
    Ra = !1,
    Fi = !1,
    io = 0,
    El = 0,
    za = null,
    gb = 0;
  function te() {
    throw Error(s(321));
  }
  function bu(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Be(t[l], e[l])) return !1;
    return !0;
  }
  function vu(t, e, l, o, f, d) {
    return (
      (kn = d),
      (vt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (O.H = t === null || t.memoizedState === null ? Rd : ju),
      (Fi = !1),
      (d = l(o, f)),
      (Fi = !1),
      Ra && (d = Jh(e, l, o, f)),
      Wh(t),
      d
    );
  }
  function Wh(t) {
    O.H = Tl;
    var e = Vt !== null && Vt.next !== null;
    if (((kn = 0), (oe = Vt = vt = null), (no = !1), (El = 0), (za = null), e))
      throw Error(s(300));
    t === null ||
      re ||
      ((t = t.dependencies), t !== null && Zs(t) && (re = !0));
  }
  function Jh(t, e, l, o) {
    vt = t;
    var f = 0;
    do {
      if ((Ra && (za = null), (El = 0), (Ra = !1), 25 <= f))
        throw Error(s(301));
      if (((f += 1), (oe = Vt = null), t.updateQueue != null)) {
        var d = t.updateQueue;
        ((d.lastEffect = null),
          (d.events = null),
          (d.stores = null),
          d.memoCache != null && (d.memoCache.index = 0));
      }
      ((O.H = zd), (d = e(l, o)));
    } while (Ra);
    return d;
  }
  function pb() {
    var t = O.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? wl(e) : e),
      (t = t.useState()[0]),
      (Vt !== null ? Vt.memoizedState : null) !== t && (vt.flags |= 1024),
      e
    );
  }
  function xu() {
    var t = io !== 0;
    return ((io = 0), t);
  }
  function _u(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function Su(t) {
    if (no) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      no = !1;
    }
    ((kn = 0), (oe = Vt = vt = null), (Ra = !1), (El = io = 0), (za = null));
  }
  function Ae() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (oe === null ? (vt.memoizedState = oe = t) : (oe = oe.next = t), oe);
  }
  function ae() {
    if (Vt === null) {
      var t = vt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Vt.next;
    var e = oe === null ? vt.memoizedState : oe.next;
    if (e !== null) ((oe = e), (Vt = t));
    else {
      if (t === null)
        throw vt.alternate === null ? Error(s(467)) : Error(s(310));
      ((Vt = t),
        (t = {
          memoizedState: Vt.memoizedState,
          baseState: Vt.baseState,
          baseQueue: Vt.baseQueue,
          queue: Vt.queue,
          next: null,
        }),
        oe === null ? (vt.memoizedState = oe = t) : (oe = oe.next = t));
    }
    return oe;
  }
  function ao() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wl(t) {
    var e = El;
    return (
      (El += 1),
      za === null && (za = []),
      (t = qh(za, t, e)),
      (e = vt),
      (oe === null ? e.memoizedState : oe.next) === null &&
        ((e = e.alternate),
        (O.H = e === null || e.memoizedState === null ? Rd : ju)),
      t
    );
  }
  function lo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return wl(t);
      if (t.$$typeof === J) return be(t);
    }
    throw Error(s(438, String(t)));
  }
  function Mu(t) {
    var e = null,
      l = vt.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var o = vt.alternate;
      o !== null &&
        ((o = o.updateQueue),
        o !== null &&
          ((o = o.memoCache),
          o != null &&
            (e = {
              data: o.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = ao()), (vt.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), o = 0; o < t; o++) l[o] = j;
    return (e.index++, l);
  }
  function Ln(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function so(t) {
    var e = ae();
    return Eu(e, Vt, t);
  }
  function Eu(t, e, l) {
    var o = t.queue;
    if (o === null) throw Error(s(311));
    o.lastRenderedReducer = l;
    var f = t.baseQueue,
      d = o.pending;
    if (d !== null) {
      if (f !== null) {
        var y = f.next;
        ((f.next = d.next), (d.next = y));
      }
      ((e.baseQueue = f = d), (o.pending = null));
    }
    if (((d = t.baseState), f === null)) t.memoizedState = d;
    else {
      e = f.next;
      var v = (y = null),
        C = null,
        U = e,
        P = !1;
      do {
        var I = U.lane & -536870913;
        if (I !== U.lane ? (wt & I) === I : (kn & I) === I) {
          var q = U.revertLane;
          if (q === 0)
            (C !== null &&
              (C = C.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: U.action,
                  hasEagerState: U.hasEagerState,
                  eagerState: U.eagerState,
                  next: null,
                }),
              I === Aa && (P = !0));
          else if ((kn & q) === q) {
            ((U = U.next), q === Aa && (P = !0));
            continue;
          } else
            ((I = {
              lane: 0,
              revertLane: U.revertLane,
              gesture: null,
              action: U.action,
              hasEagerState: U.hasEagerState,
              eagerState: U.eagerState,
              next: null,
            }),
              C === null ? ((v = C = I), (y = d)) : (C = C.next = I),
              (vt.lanes |= q),
              (di |= q));
          ((I = U.action),
            Fi && l(d, I),
            (d = U.hasEagerState ? U.eagerState : l(d, I)));
        } else
          ((q = {
            lane: I,
            revertLane: U.revertLane,
            gesture: U.gesture,
            action: U.action,
            hasEagerState: U.hasEagerState,
            eagerState: U.eagerState,
            next: null,
          }),
            C === null ? ((v = C = q), (y = d)) : (C = C.next = q),
            (vt.lanes |= I),
            (di |= I));
        U = U.next;
      } while (U !== null && U !== e);
      if (
        (C === null ? (y = d) : (C.next = v),
        !Be(d, t.memoizedState) && ((re = !0), P && ((l = Ta), l !== null)))
      )
        throw l;
      ((t.memoizedState = d),
        (t.baseState = y),
        (t.baseQueue = C),
        (o.lastRenderedState = d));
    }
    return (f === null && (o.lanes = 0), [t.memoizedState, o.dispatch]);
  }
  function wu(t) {
    var e = ae(),
      l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = t;
    var o = l.dispatch,
      f = l.pending,
      d = e.memoizedState;
    if (f !== null) {
      l.pending = null;
      var y = (f = f.next);
      do ((d = t(d, y.action)), (y = y.next));
      while (y !== f);
      (Be(d, e.memoizedState) || (re = !0),
        (e.memoizedState = d),
        e.baseQueue === null && (e.baseState = d),
        (l.lastRenderedState = d));
    }
    return [d, o];
  }
  function Ph(t, e, l) {
    var o = vt,
      f = ae(),
      d = Ot;
    if (d) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = e();
    var y = !Be((Vt || f).memoizedState, l);
    if (
      (y && ((f.memoizedState = l), (re = !0)),
      (f = f.queue),
      Cu(td.bind(null, o, f, t), [t]),
      f.getSnapshot !== e || y || (oe !== null && oe.memoizedState.tag & 1))
    ) {
      if (
        ((o.flags |= 2048),
        Na(9, { destroy: void 0 }, Ih.bind(null, o, f, l, e), null),
        Qt === null)
      )
        throw Error(s(349));
      d || (kn & 127) !== 0 || $h(o, e, l);
    }
    return l;
  }
  function $h(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = vt.updateQueue),
      e === null
        ? ((e = ao()), (vt.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function Ih(t, e, l, o) {
    ((e.value = l), (e.getSnapshot = o), ed(e) && nd(t));
  }
  function td(t, e, l) {
    return l(function () {
      ed(e) && nd(t);
    });
  }
  function ed(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Be(t, l);
    } catch {
      return !0;
    }
  }
  function nd(t) {
    var e = Hi(t, 2);
    e !== null && je(e, t, 2);
  }
  function Au(t) {
    var e = Ae();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Fi)) {
        In(!0);
        try {
          l();
        } finally {
          In(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: t,
      }),
      e
    );
  }
  function id(t, e, l, o) {
    return ((t.baseState = l), Eu(t, Vt, typeof o == "function" ? o : Ln));
  }
  function yb(t, e, l, o, f) {
    if (uo(t)) throw Error(s(485));
    if (((t = e.action), t !== null)) {
      var d = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          d.listeners.push(y);
        },
      };
      (O.T !== null ? l(!0) : (d.isTransition = !1),
        o(d),
        (l = e.pending),
        l === null
          ? ((d.next = e.pending = d), ad(e, d))
          : ((d.next = l.next), (e.pending = l.next = d)));
    }
  }
  function ad(t, e) {
    var l = e.action,
      o = e.payload,
      f = t.state;
    if (e.isTransition) {
      var d = O.T,
        y = {};
      O.T = y;
      try {
        var v = l(f, o),
          C = O.S;
        (C !== null && C(y, v), ld(t, e, v));
      } catch (U) {
        Tu(t, e, U);
      } finally {
        (d !== null && y.types !== null && (d.types = y.types), (O.T = d));
      }
    } else
      try {
        ((d = l(f, o)), ld(t, e, d));
      } catch (U) {
        Tu(t, e, U);
      }
  }
  function ld(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (o) {
            sd(t, e, o);
          },
          function (o) {
            return Tu(t, e, o);
          },
        )
      : sd(t, e, l);
  }
  function sd(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      od(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), ad(t, l))));
  }
  function Tu(t, e, l) {
    var o = t.pending;
    if (((t.pending = null), o !== null)) {
      o = o.next;
      do ((e.status = "rejected"), (e.reason = l), od(e), (e = e.next));
      while (e !== o);
    }
    t.action = null;
  }
  function od(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function rd(t, e) {
    return e;
  }
  function ud(t, e) {
    if (Ot) {
      var l = Qt.formState;
      if (l !== null) {
        t: {
          var o = vt;
          if (Ot) {
            if (Kt) {
              e: {
                for (var f = Kt, d = nn; f.nodeType !== 8; ) {
                  if (!d) {
                    f = null;
                    break e;
                  }
                  if (((f = ln(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                ((d = f.data), (f = d === "F!" || d === "F" ? f : null));
              }
              if (f) {
                ((Kt = ln(f.nextSibling)), (o = f.data === "F!"));
                break t;
              }
            }
            ai(o);
          }
          o = !1;
        }
        o && (e = l[0]);
      }
    }
    return (
      (l = Ae()),
      (l.memoizedState = l.baseState = e),
      (o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rd,
        lastRenderedState: e,
      }),
      (l.queue = o),
      (l = Cd.bind(null, vt, o)),
      (o.dispatch = l),
      (o = Au(!1)),
      (d = Nu.bind(null, vt, !1, o.queue)),
      (o = Ae()),
      (f = { state: e, dispatch: null, action: t, pending: null }),
      (o.queue = f),
      (l = yb.bind(null, vt, f, d, l)),
      (f.dispatch = l),
      (o.memoizedState = t),
      [e, l, !1]
    );
  }
  function cd(t) {
    var e = ae();
    return fd(e, Vt, t);
  }
  function fd(t, e, l) {
    if (
      ((e = Eu(t, e, rd)[0]),
      (t = so(Ln)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var o = wl(e);
      } catch (y) {
        throw y === Ca ? Js : y;
      }
    else o = e;
    e = ae();
    var f = e.queue,
      d = f.dispatch;
    return (
      l !== e.memoizedState &&
        ((vt.flags |= 2048),
        Na(9, { destroy: void 0 }, bb.bind(null, f, l), null)),
      [o, d, t]
    );
  }
  function bb(t, e) {
    t.action = e;
  }
  function hd(t) {
    var e = ae(),
      l = Vt;
    if (l !== null) return fd(e, l, t);
    (ae(), (e = e.memoizedState), (l = ae()));
    var o = l.queue.dispatch;
    return ((l.memoizedState = t), [e, o, !1]);
  }
  function Na(t, e, l, o) {
    return (
      (t = { tag: t, create: l, deps: o, inst: e, next: null }),
      (e = vt.updateQueue),
      e === null && ((e = ao()), (vt.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((o = l.next), (l.next = t), (t.next = o), (e.lastEffect = t)),
      t
    );
  }
  function dd() {
    return ae().memoizedState;
  }
  function oo(t, e, l, o) {
    var f = Ae();
    ((vt.flags |= t),
      (f.memoizedState = Na(
        1 | e,
        { destroy: void 0 },
        l,
        o === void 0 ? null : o,
      )));
  }
  function ro(t, e, l, o) {
    var f = ae();
    o = o === void 0 ? null : o;
    var d = f.memoizedState.inst;
    Vt !== null && o !== null && bu(o, Vt.memoizedState.deps)
      ? (f.memoizedState = Na(e, d, l, o))
      : ((vt.flags |= t), (f.memoizedState = Na(1 | e, d, l, o)));
  }
  function md(t, e) {
    oo(8390656, 8, t, e);
  }
  function Cu(t, e) {
    ro(2048, 8, t, e);
  }
  function vb(t) {
    vt.flags |= 4;
    var e = vt.updateQueue;
    if (e === null) ((e = ao()), (vt.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function gd(t) {
    var e = ae().memoizedState;
    return (
      vb({ ref: e, nextImpl: t }),
      function () {
        if ((jt & 2) !== 0) throw Error(s(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function pd(t, e) {
    return ro(4, 2, t, e);
  }
  function yd(t, e) {
    return ro(4, 4, t, e);
  }
  function bd(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function vd(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), ro(4, 4, bd.bind(null, e, t), l));
  }
  function Ou() {}
  function xd(t, e) {
    var l = ae();
    e = e === void 0 ? null : e;
    var o = l.memoizedState;
    return e !== null && bu(e, o[1]) ? o[0] : ((l.memoizedState = [t, e]), t);
  }
  function _d(t, e) {
    var l = ae();
    e = e === void 0 ? null : e;
    var o = l.memoizedState;
    if (e !== null && bu(e, o[1])) return o[0];
    if (((o = t()), Fi)) {
      In(!0);
      try {
        t();
      } finally {
        In(!1);
      }
    }
    return ((l.memoizedState = [o, e]), o);
  }
  function Du(t, e, l) {
    return l === void 0 || ((kn & 1073741824) !== 0 && (wt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = Sm()), (vt.lanes |= t), (di |= t), l);
  }
  function Sd(t, e, l, o) {
    return Be(l, e)
      ? l
      : Da.current !== null
        ? ((t = Du(t, l, o)), Be(t, e) || (re = !0), t)
        : (kn & 42) === 0 || ((kn & 1073741824) !== 0 && (wt & 261930) === 0)
          ? ((re = !0), (t.memoizedState = l))
          : ((t = Sm()), (vt.lanes |= t), (di |= t), e);
  }
  function Md(t, e, l, o, f) {
    var d = Y.p;
    Y.p = d !== 0 && 8 > d ? d : 8;
    var y = O.T,
      v = {};
    ((O.T = v), Nu(t, !1, e, l));
    try {
      var C = f(),
        U = O.S;
      if (
        (U !== null && U(v, C),
        C !== null && typeof C == "object" && typeof C.then == "function")
      ) {
        var P = mb(C, o);
        Al(t, e, P, Ge(t));
      } else Al(t, e, o, Ge(t));
    } catch (I) {
      Al(t, e, { then: function () {}, status: "rejected", reason: I }, Ge());
    } finally {
      ((Y.p = d),
        y !== null && v.types !== null && (y.types = v.types),
        (O.T = y));
    }
  }
  function xb() {}
  function Ru(t, e, l, o) {
    if (t.tag !== 5) throw Error(s(476));
    var f = Ed(t).queue;
    Md(
      t,
      f,
      e,
      Q,
      l === null
        ? xb
        : function () {
            return (wd(t), l(o));
          },
    );
  }
  function Ed(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ln,
        lastRenderedState: Q,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ln,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function wd(t) {
    var e = Ed(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Al(t, e.next.queue, {}, Ge()));
  }
  function zu() {
    return be(Xl);
  }
  function Ad() {
    return ae().memoizedState;
  }
  function Td() {
    return ae().memoizedState;
  }
  function _b(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ge();
          t = oi(l);
          var o = ri(e, t, l);
          (o !== null && (je(o, e, l), _l(o, e, l)),
            (e = { cache: ou() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Sb(t, e, l) {
    var o = Ge();
    ((l = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      uo(t)
        ? Od(e, l)
        : ((l = Jr(t, e, l, o)), l !== null && (je(l, t, o), Dd(l, e, o))));
  }
  function Cd(t, e, l) {
    var o = Ge();
    Al(t, e, l, o);
  }
  function Al(t, e, l, o) {
    var f = {
      lane: o,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (uo(t)) Od(e, f);
    else {
      var d = t.alternate;
      if (
        t.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = e.lastRenderedReducer), d !== null)
      )
        try {
          var y = e.lastRenderedState,
            v = d(y, l);
          if (((f.hasEagerState = !0), (f.eagerState = v), Be(v, y)))
            return (Xs(t, e, f, 0), Qt === null && Vs(), !1);
        } catch {}
      if (((l = Jr(t, e, f, o)), l !== null))
        return (je(l, t, o), Dd(l, e, o), !0);
    }
    return !1;
  }
  function Nu(t, e, l, o) {
    if (
      ((o = {
        lane: 2,
        revertLane: fc(),
        gesture: null,
        action: o,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      uo(t))
    ) {
      if (e) throw Error(s(479));
    } else ((e = Jr(t, l, o, 2)), e !== null && je(e, t, 2));
  }
  function uo(t) {
    var e = t.alternate;
    return t === vt || (e !== null && e === vt);
  }
  function Od(t, e) {
    Ra = no = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function Dd(t, e, l) {
    if ((l & 4194048) !== 0) {
      var o = e.lanes;
      ((o &= t.pendingLanes), (l |= o), (e.lanes = l), kf(t, l));
    }
  }
  var Tl = {
    readContext: be,
    use: lo,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useLayoutEffect: te,
    useInsertionEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useSyncExternalStore: te,
    useId: te,
    useHostTransitionStatus: te,
    useFormState: te,
    useActionState: te,
    useOptimistic: te,
    useMemoCache: te,
    useCacheRefresh: te,
  };
  Tl.useEffectEvent = te;
  var Rd = {
      readContext: be,
      use: lo,
      useCallback: function (t, e) {
        return ((Ae().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: be,
      useEffect: md,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          oo(4194308, 4, bd.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return oo(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        oo(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Ae();
        e = e === void 0 ? null : e;
        var o = t();
        if (Fi) {
          In(!0);
          try {
            t();
          } finally {
            In(!1);
          }
        }
        return ((l.memoizedState = [o, e]), o);
      },
      useReducer: function (t, e, l) {
        var o = Ae();
        if (l !== void 0) {
          var f = l(e);
          if (Fi) {
            In(!0);
            try {
              l(e);
            } finally {
              In(!1);
            }
          }
        } else f = e;
        return (
          (o.memoizedState = o.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (o.queue = t),
          (t = t.dispatch = Sb.bind(null, vt, t)),
          [o.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Ae();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Au(t);
        var e = t.queue,
          l = Cd.bind(null, vt, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: Ou,
      useDeferredValue: function (t, e) {
        var l = Ae();
        return Du(l, t, e);
      },
      useTransition: function () {
        var t = Au(!1);
        return (
          (t = Md.bind(null, vt, t.queue, !0, !1)),
          (Ae().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var o = vt,
          f = Ae();
        if (Ot) {
          if (l === void 0) throw Error(s(407));
          l = l();
        } else {
          if (((l = e()), Qt === null)) throw Error(s(349));
          (wt & 127) !== 0 || $h(o, e, l);
        }
        f.memoizedState = l;
        var d = { value: l, getSnapshot: e };
        return (
          (f.queue = d),
          md(td.bind(null, o, d, t), [t]),
          (o.flags |= 2048),
          Na(9, { destroy: void 0 }, Ih.bind(null, o, d, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Ae(),
          e = Qt.identifierPrefix;
        if (Ot) {
          var l = vn,
            o = bn;
          ((l = (o & ~(1 << (32 - He(o) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = io++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_"));
        } else ((l = gb++), (e = "_" + e + "r_" + l.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: zu,
      useFormState: ud,
      useActionState: ud,
      useOptimistic: function (t) {
        var e = Ae();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = Nu.bind(null, vt, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: Mu,
      useCacheRefresh: function () {
        return (Ae().memoizedState = _b.bind(null, vt));
      },
      useEffectEvent: function (t) {
        var e = Ae(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((jt & 2) !== 0) throw Error(s(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ju = {
      readContext: be,
      use: lo,
      useCallback: xd,
      useContext: be,
      useEffect: Cu,
      useImperativeHandle: vd,
      useInsertionEffect: pd,
      useLayoutEffect: yd,
      useMemo: _d,
      useReducer: so,
      useRef: dd,
      useState: function () {
        return so(Ln);
      },
      useDebugValue: Ou,
      useDeferredValue: function (t, e) {
        var l = ae();
        return Sd(l, Vt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = so(Ln)[0],
          e = ae().memoizedState;
        return [typeof t == "boolean" ? t : wl(t), e];
      },
      useSyncExternalStore: Ph,
      useId: Ad,
      useHostTransitionStatus: zu,
      useFormState: cd,
      useActionState: cd,
      useOptimistic: function (t, e) {
        var l = ae();
        return id(l, Vt, t, e);
      },
      useMemoCache: Mu,
      useCacheRefresh: Td,
    };
  ju.useEffectEvent = gd;
  var zd = {
    readContext: be,
    use: lo,
    useCallback: xd,
    useContext: be,
    useEffect: Cu,
    useImperativeHandle: vd,
    useInsertionEffect: pd,
    useLayoutEffect: yd,
    useMemo: _d,
    useReducer: wu,
    useRef: dd,
    useState: function () {
      return wu(Ln);
    },
    useDebugValue: Ou,
    useDeferredValue: function (t, e) {
      var l = ae();
      return Vt === null ? Du(l, t, e) : Sd(l, Vt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = wu(Ln)[0],
        e = ae().memoizedState;
      return [typeof t == "boolean" ? t : wl(t), e];
    },
    useSyncExternalStore: Ph,
    useId: Ad,
    useHostTransitionStatus: zu,
    useFormState: hd,
    useActionState: hd,
    useOptimistic: function (t, e) {
      var l = ae();
      return Vt !== null
        ? id(l, Vt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: Mu,
    useCacheRefresh: Td,
  };
  zd.useEffectEvent = gd;
  function ku(t, e, l, o) {
    ((e = t.memoizedState),
      (l = l(o, e)),
      (l = l == null ? e : b({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Lu = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var o = Ge(),
        f = oi(o);
      ((f.payload = e),
        l != null && (f.callback = l),
        (e = ri(t, f, o)),
        e !== null && (je(e, t, o), _l(e, t, o)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var o = Ge(),
        f = oi(o);
      ((f.tag = 1),
        (f.payload = e),
        l != null && (f.callback = l),
        (e = ri(t, f, o)),
        e !== null && (je(e, t, o), _l(e, t, o)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = Ge(),
        o = oi(l);
      ((o.tag = 2),
        e != null && (o.callback = e),
        (e = ri(t, o, l)),
        e !== null && (je(e, t, l), _l(e, t, l)));
    },
  };
  function Nd(t, e, l, o, f, d, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(o, d, y)
        : e.prototype && e.prototype.isPureReactComponent
          ? !dl(l, o) || !dl(f, d)
          : !0
    );
  }
  function jd(t, e, l, o) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, o),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, o),
      e.state !== t && Lu.enqueueReplaceState(e, e.state, null));
  }
  function Zi(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var o in e) o !== "ref" && (l[o] = e[o]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = b({}, l));
      for (var f in t) l[f] === void 0 && (l[f] = t[f]);
    }
    return l;
  }
  function kd(t) {
    Ys(t);
  }
  function Ld(t) {
    console.error(t);
  }
  function Hd(t) {
    Ys(t);
  }
  function co(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (o) {
      setTimeout(function () {
        throw o;
      });
    }
  }
  function Bd(t, e, l) {
    try {
      var o = t.onCaughtError;
      o(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function Hu(t, e, l) {
    return (
      (l = oi(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        co(t, e);
      }),
      l
    );
  }
  function Ud(t) {
    return ((t = oi(t)), (t.tag = 3), t);
  }
  function qd(t, e, l, o) {
    var f = l.type.getDerivedStateFromError;
    if (typeof f == "function") {
      var d = o.value;
      ((t.payload = function () {
        return f(d);
      }),
        (t.callback = function () {
          Bd(e, l, o);
        }));
    }
    var y = l.stateNode;
    y !== null &&
      typeof y.componentDidCatch == "function" &&
      (t.callback = function () {
        (Bd(e, l, o),
          typeof f != "function" &&
            (mi === null ? (mi = new Set([this])) : mi.add(this)));
        var v = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function Mb(t, e, l, o, f) {
    if (
      ((l.flags |= 32768),
      o !== null && typeof o == "object" && typeof o.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && wa(e, l, f, !0),
        (l = qe.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              an === null ? Mo() : l.alternate === null && ee === 0 && (ee = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = f),
              o === Ps
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([o])) : e.add(o),
                  rc(t, o, f)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              o === Ps
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([o]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([o])) : l.add(o)),
                  rc(t, o, f)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return (rc(t, o, f), Mo(), !1);
    }
    if (Ot)
      return (
        (e = qe.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = f),
            o !== nu && ((t = Error(s(422), { cause: o })), pl(Ie(t, l))))
          : (o !== nu && ((e = Error(s(423), { cause: o })), pl(Ie(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (o = Ie(o, l)),
            (f = Hu(t.stateNode, o, f)),
            du(t, f),
            ee !== 4 && (ee = 2)),
        !1
      );
    var d = Error(s(520), { cause: o });
    if (
      ((d = Ie(d, l)),
      kl === null ? (kl = [d]) : kl.push(d),
      ee !== 4 && (ee = 2),
      e === null)
    )
      return !0;
    ((o = Ie(o, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = f & -f),
            (l.lanes |= t),
            (t = Hu(l.stateNode, o, t)),
            du(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (d = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (d !== null &&
                  typeof d.componentDidCatch == "function" &&
                  (mi === null || !mi.has(d)))))
          )
            return (
              (l.flags |= 65536),
              (f &= -f),
              (l.lanes |= f),
              (f = Ud(f)),
              qd(f, t, l, o),
              du(l, f),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Bu = Error(s(461)),
    re = !1;
  function ve(t, e, l, o) {
    e.child = t === null ? Gh(e, null, l, o) : Qi(e, t.child, l, o);
  }
  function Yd(t, e, l, o, f) {
    l = l.render;
    var d = e.ref;
    if ("ref" in o) {
      var y = {};
      for (var v in o) v !== "ref" && (y[v] = o[v]);
    } else y = o;
    return (
      Yi(e),
      (o = vu(t, e, l, y, d, f)),
      (v = xu()),
      t !== null && !re
        ? (_u(t, e, f), Hn(t, e, f))
        : (Ot && v && tu(e), (e.flags |= 1), ve(t, e, o, f), e.child)
    );
  }
  function Vd(t, e, l, o, f) {
    if (t === null) {
      var d = l.type;
      return typeof d == "function" &&
        !Pr(d) &&
        d.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = d), Xd(t, e, d, o, f))
        : ((t = Qs(l.type, null, o, e, e.mode, f)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((d = t.child), !Fu(t, f))) {
      var y = d.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : dl), l(y, o) && t.ref === e.ref)
      )
        return Hn(t, e, f);
    }
    return (
      (e.flags |= 1),
      (t = Rn(d, o)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Xd(t, e, l, o, f) {
    if (t !== null) {
      var d = t.memoizedProps;
      if (dl(d, o) && t.ref === e.ref)
        if (((re = !1), (e.pendingProps = o = d), Fu(t, f)))
          (t.flags & 131072) !== 0 && (re = !0);
        else return ((e.lanes = t.lanes), Hn(t, e, f));
    }
    return Uu(t, e, l, o, f);
  }
  function Gd(t, e, l, o) {
    var f = o.children,
      d = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      o.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((d = d !== null ? d.baseLanes | l : l), t !== null)) {
          for (o = e.child = t.child, f = 0; o !== null; )
            ((f = f | o.lanes | o.childLanes), (o = o.sibling));
          o = f & ~d;
        } else ((o = 0), (e.child = null));
        return Qd(t, e, d, l, o);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Ws(e, d !== null ? d.cachePool : null),
          d !== null ? Zh(e, d) : gu(),
          Kh(e));
      else
        return (
          (o = e.lanes = 536870912),
          Qd(t, e, d !== null ? d.baseLanes | l : l, l, o)
        );
    } else
      d !== null
        ? (Ws(e, d.cachePool), Zh(e, d), ci(), (e.memoizedState = null))
        : (t !== null && Ws(e, null), gu(), ci());
    return (ve(t, e, f, l), e.child);
  }
  function Cl(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Qd(t, e, l, o, f) {
    var d = uu();
    return (
      (d = d === null ? null : { parent: se._currentValue, pool: d }),
      (e.memoizedState = { baseLanes: l, cachePool: d }),
      t !== null && Ws(e, null),
      gu(),
      Kh(e),
      t !== null && wa(t, e, o, !0),
      (e.childLanes = f),
      null
    );
  }
  function fo(t, e) {
    return (
      (e = mo({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Fd(t, e, l) {
    return (
      Qi(e, t.child, null, l),
      (t = fo(e, e.pendingProps)),
      (t.flags |= 2),
      Ye(e),
      (e.memoizedState = null),
      t
    );
  }
  function Eb(t, e, l) {
    var o = e.pendingProps,
      f = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Ot) {
        if (o.mode === "hidden")
          return ((t = fo(e, o)), (e.lanes = 536870912), Cl(null, t));
        if (
          (yu(e),
          (t = Kt)
            ? ((t = ag(t, nn)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: ni !== null ? { id: bn, overflow: vn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Oh(t)),
                (l.return = e),
                (e.child = l),
                (ye = e),
                (Kt = null)))
            : (t = null),
          t === null)
        )
          throw ai(e);
        return ((e.lanes = 536870912), null);
      }
      return fo(e, o);
    }
    var d = t.memoizedState;
    if (d !== null) {
      var y = d.dehydrated;
      if ((yu(e), f))
        if (e.flags & 256) ((e.flags &= -257), (e = Fd(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(s(558));
      else if (
        (re || wa(t, e, l, !1), (f = (l & t.childLanes) !== 0), re || f)
      ) {
        if (
          ((o = Qt),
          o !== null && ((y = Lf(o, l)), y !== 0 && y !== d.retryLane))
        )
          throw ((d.retryLane = y), Hi(t, y), je(o, t, y), Bu);
        (Mo(), (e = Fd(t, e, l)));
      } else
        ((t = d.treeContext),
          (Kt = ln(y.nextSibling)),
          (ye = e),
          (Ot = !0),
          (ii = null),
          (nn = !1),
          t !== null && zh(e, t),
          (e = fo(e, o)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = Rn(t.child, { mode: o.mode, children: o.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ho(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(s(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Uu(t, e, l, o, f) {
    return (
      Yi(e),
      (l = vu(t, e, l, o, void 0, f)),
      (o = xu()),
      t !== null && !re
        ? (_u(t, e, f), Hn(t, e, f))
        : (Ot && o && tu(e), (e.flags |= 1), ve(t, e, l, f), e.child)
    );
  }
  function Zd(t, e, l, o, f, d) {
    return (
      Yi(e),
      (e.updateQueue = null),
      (l = Jh(e, o, l, f)),
      Wh(t),
      (o = xu()),
      t !== null && !re
        ? (_u(t, e, d), Hn(t, e, d))
        : (Ot && o && tu(e), (e.flags |= 1), ve(t, e, l, d), e.child)
    );
  }
  function Kd(t, e, l, o, f) {
    if ((Yi(e), e.stateNode === null)) {
      var d = _a,
        y = l.contextType;
      (typeof y == "object" && y !== null && (d = be(y)),
        (d = new l(o, d)),
        (e.memoizedState =
          d.state !== null && d.state !== void 0 ? d.state : null),
        (d.updater = Lu),
        (e.stateNode = d),
        (d._reactInternals = e),
        (d = e.stateNode),
        (d.props = o),
        (d.state = e.memoizedState),
        (d.refs = {}),
        fu(e),
        (y = l.contextType),
        (d.context = typeof y == "object" && y !== null ? be(y) : _a),
        (d.state = e.memoizedState),
        (y = l.getDerivedStateFromProps),
        typeof y == "function" && (ku(e, l, y, o), (d.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function" ||
          (typeof d.UNSAFE_componentWillMount != "function" &&
            typeof d.componentWillMount != "function") ||
          ((y = d.state),
          typeof d.componentWillMount == "function" && d.componentWillMount(),
          typeof d.UNSAFE_componentWillMount == "function" &&
            d.UNSAFE_componentWillMount(),
          y !== d.state && Lu.enqueueReplaceState(d, d.state, null),
          Ml(e, o, d, f),
          Sl(),
          (d.state = e.memoizedState)),
        typeof d.componentDidMount == "function" && (e.flags |= 4194308),
        (o = !0));
    } else if (t === null) {
      d = e.stateNode;
      var v = e.memoizedProps,
        C = Zi(l, v);
      d.props = C;
      var U = d.context,
        P = l.contextType;
      ((y = _a), typeof P == "object" && P !== null && (y = be(P)));
      var I = l.getDerivedStateFromProps;
      ((P =
        typeof I == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        P ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((v || U !== y) && jd(e, d, o, y)),
        (si = !1));
      var q = e.memoizedState;
      ((d.state = q),
        Ml(e, o, d, f),
        Sl(),
        (U = e.memoizedState),
        v || q !== U || si
          ? (typeof I == "function" && (ku(e, l, I, o), (U = e.memoizedState)),
            (C = si || Nd(e, l, C, o, q, U, y))
              ? (P ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = o),
                (e.memoizedState = U)),
            (d.props = o),
            (d.state = U),
            (d.context = y),
            (o = C))
          : (typeof d.componentDidMount == "function" && (e.flags |= 4194308),
            (o = !1)));
    } else {
      ((d = e.stateNode),
        hu(t, e),
        (y = e.memoizedProps),
        (P = Zi(l, y)),
        (d.props = P),
        (I = e.pendingProps),
        (q = d.context),
        (U = l.contextType),
        (C = _a),
        typeof U == "object" && U !== null && (C = be(U)),
        (v = l.getDerivedStateFromProps),
        (U =
          typeof v == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function") ||
          (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
            typeof d.componentWillReceiveProps != "function") ||
          ((y !== I || q !== C) && jd(e, d, o, C)),
        (si = !1),
        (q = e.memoizedState),
        (d.state = q),
        Ml(e, o, d, f),
        Sl());
      var Z = e.memoizedState;
      y !== I ||
      q !== Z ||
      si ||
      (t !== null && t.dependencies !== null && Zs(t.dependencies))
        ? (typeof v == "function" && (ku(e, l, v, o), (Z = e.memoizedState)),
          (P =
            si ||
            Nd(e, l, P, o, q, Z, C) ||
            (t !== null && t.dependencies !== null && Zs(t.dependencies)))
            ? (U ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(o, Z, C),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(o, Z, C)),
              typeof d.componentDidUpdate == "function" && (e.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (y === t.memoizedProps && q === t.memoizedState) ||
                (e.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (y === t.memoizedProps && q === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = o),
              (e.memoizedState = Z)),
          (d.props = o),
          (d.state = Z),
          (d.context = C),
          (o = P))
        : (typeof d.componentDidUpdate != "function" ||
            (y === t.memoizedProps && q === t.memoizedState) ||
            (e.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (y === t.memoizedProps && q === t.memoizedState) ||
            (e.flags |= 1024),
          (o = !1));
    }
    return (
      (d = o),
      ho(t, e),
      (o = (e.flags & 128) !== 0),
      d || o
        ? ((d = e.stateNode),
          (l =
            o && typeof l.getDerivedStateFromError != "function"
              ? null
              : d.render()),
          (e.flags |= 1),
          t !== null && o
            ? ((e.child = Qi(e, t.child, null, f)),
              (e.child = Qi(e, null, l, f)))
            : ve(t, e, l, f),
          (e.memoizedState = d.state),
          (t = e.child))
        : (t = Hn(t, e, f)),
      t
    );
  }
  function Wd(t, e, l, o) {
    return (Ui(), (e.flags |= 256), ve(t, e, l, o), e.child);
  }
  var qu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Yu(t) {
    return { baseLanes: t, cachePool: Bh() };
  }
  function Vu(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= Xe), t);
  }
  function Jd(t, e, l) {
    var o = e.pendingProps,
      f = !1,
      d = (e.flags & 128) !== 0,
      y;
    if (
      ((y = d) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (ie.current & 2) !== 0),
      y && ((f = !0), (e.flags &= -129)),
      (y = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ot) {
        if (
          (f ? ui(e) : ci(),
          (t = Kt)
            ? ((t = ag(t, nn)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: ni !== null ? { id: bn, overflow: vn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Oh(t)),
                (l.return = e),
                (e.child = l),
                (ye = e),
                (Kt = null)))
            : (t = null),
          t === null)
        )
          throw ai(e);
        return (Ec(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var v = o.children;
      return (
        (o = o.fallback),
        f
          ? (ci(),
            (f = e.mode),
            (v = mo({ mode: "hidden", children: v }, f)),
            (o = Bi(o, f, l, null)),
            (v.return = e),
            (o.return = e),
            (v.sibling = o),
            (e.child = v),
            (o = e.child),
            (o.memoizedState = Yu(l)),
            (o.childLanes = Vu(t, y, l)),
            (e.memoizedState = qu),
            Cl(null, o))
          : (ui(e), Xu(e, v))
      );
    }
    var C = t.memoizedState;
    if (C !== null && ((v = C.dehydrated), v !== null)) {
      if (d)
        e.flags & 256
          ? (ui(e), (e.flags &= -257), (e = Gu(t, e, l)))
          : e.memoizedState !== null
            ? (ci(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (ci(),
              (v = o.fallback),
              (f = e.mode),
              (o = mo({ mode: "visible", children: o.children }, f)),
              (v = Bi(v, f, l, null)),
              (v.flags |= 2),
              (o.return = e),
              (v.return = e),
              (o.sibling = v),
              (e.child = o),
              Qi(e, t.child, null, l),
              (o = e.child),
              (o.memoizedState = Yu(l)),
              (o.childLanes = Vu(t, y, l)),
              (e.memoizedState = qu),
              (e = Cl(null, o)));
      else if ((ui(e), Ec(v))) {
        if (((y = v.nextSibling && v.nextSibling.dataset), y)) var U = y.dgst;
        ((y = U),
          (o = Error(s(419))),
          (o.stack = ""),
          (o.digest = y),
          pl({ value: o, source: null, stack: null }),
          (e = Gu(t, e, l)));
      } else if (
        (re || wa(t, e, l, !1), (y = (l & t.childLanes) !== 0), re || y)
      ) {
        if (
          ((y = Qt),
          y !== null && ((o = Lf(y, l)), o !== 0 && o !== C.retryLane))
        )
          throw ((C.retryLane = o), Hi(t, o), je(y, t, o), Bu);
        (Mc(v) || Mo(), (e = Gu(t, e, l)));
      } else
        Mc(v)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = C.treeContext),
            (Kt = ln(v.nextSibling)),
            (ye = e),
            (Ot = !0),
            (ii = null),
            (nn = !1),
            t !== null && zh(e, t),
            (e = Xu(e, o.children)),
            (e.flags |= 4096));
      return e;
    }
    return f
      ? (ci(),
        (v = o.fallback),
        (f = e.mode),
        (C = t.child),
        (U = C.sibling),
        (o = Rn(C, { mode: "hidden", children: o.children })),
        (o.subtreeFlags = C.subtreeFlags & 65011712),
        U !== null ? (v = Rn(U, v)) : ((v = Bi(v, f, l, null)), (v.flags |= 2)),
        (v.return = e),
        (o.return = e),
        (o.sibling = v),
        (e.child = o),
        Cl(null, o),
        (o = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Yu(l))
          : ((f = v.cachePool),
            f !== null
              ? ((C = se._currentValue),
                (f = f.parent !== C ? { parent: C, pool: C } : f))
              : (f = Bh()),
            (v = { baseLanes: v.baseLanes | l, cachePool: f })),
        (o.memoizedState = v),
        (o.childLanes = Vu(t, y, l)),
        (e.memoizedState = qu),
        Cl(t.child, o))
      : (ui(e),
        (l = t.child),
        (t = l.sibling),
        (l = Rn(l, { mode: "visible", children: o.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((y = e.deletions),
          y === null ? ((e.deletions = [t]), (e.flags |= 16)) : y.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Xu(t, e) {
    return (
      (e = mo({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function mo(t, e) {
    return ((t = Ue(22, t, null, e)), (t.lanes = 0), t);
  }
  function Gu(t, e, l) {
    return (
      Qi(e, t.child, null, l),
      (t = Xu(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Pd(t, e, l) {
    t.lanes |= e;
    var o = t.alternate;
    (o !== null && (o.lanes |= e), lu(t.return, e, l));
  }
  function Qu(t, e, l, o, f, d) {
    var y = t.memoizedState;
    y === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: o,
          tail: l,
          tailMode: f,
          treeForkCount: d,
        })
      : ((y.isBackwards = e),
        (y.rendering = null),
        (y.renderingStartTime = 0),
        (y.last = o),
        (y.tail = l),
        (y.tailMode = f),
        (y.treeForkCount = d));
  }
  function $d(t, e, l) {
    var o = e.pendingProps,
      f = o.revealOrder,
      d = o.tail;
    o = o.children;
    var y = ie.current,
      v = (y & 2) !== 0;
    if (
      (v ? ((y = (y & 1) | 2), (e.flags |= 128)) : (y &= 1),
      F(ie, y),
      ve(t, e, o, l),
      (o = Ot ? gl : 0),
      !v && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Pd(t, l, e);
        else if (t.tag === 19) Pd(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (f) {
      case "forwards":
        for (l = e.child, f = null; l !== null; )
          ((t = l.alternate),
            t !== null && eo(t) === null && (f = l),
            (l = l.sibling));
        ((l = f),
          l === null
            ? ((f = e.child), (e.child = null))
            : ((f = l.sibling), (l.sibling = null)),
          Qu(e, !1, f, l, d, o));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, f = e.child, e.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && eo(t) === null)) {
            e.child = f;
            break;
          }
          ((t = f.sibling), (f.sibling = l), (l = f), (f = t));
        }
        Qu(e, !0, l, null, d, o);
        break;
      case "together":
        Qu(e, !1, null, null, void 0, o);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Hn(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (di |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((wa(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(s(153));
    if (e.child !== null) {
      for (
        t = e.child, l = Rn(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = Rn(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Fu(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Zs(t)));
  }
  function wb(t, e, l) {
    switch (e.tag) {
      case 3:
        (ut(e, e.stateNode.containerInfo),
          li(e, se, t.memoizedState.cache),
          Ui());
        break;
      case 27:
      case 5:
        Tt(e);
        break;
      case 4:
        ut(e, e.stateNode.containerInfo);
        break;
      case 10:
        li(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), yu(e), null);
        break;
      case 13:
        var o = e.memoizedState;
        if (o !== null)
          return o.dehydrated !== null
            ? (ui(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? Jd(t, e, l)
              : (ui(e), (t = Hn(t, e, l)), t !== null ? t.sibling : null);
        ui(e);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((o = (l & e.childLanes) !== 0),
          o || (wa(t, e, l, !1), (o = (l & e.childLanes) !== 0)),
          f)
        ) {
          if (o) return $d(t, e, l);
          e.flags |= 128;
        }
        if (
          ((f = e.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          F(ie, ie.current),
          o)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Gd(t, e, l, e.pendingProps));
      case 24:
        li(e, se, t.memoizedState.cache);
    }
    return Hn(t, e, l);
  }
  function Id(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) re = !0;
      else {
        if (!Fu(t, l) && (e.flags & 128) === 0) return ((re = !1), wb(t, e, l));
        re = (t.flags & 131072) !== 0;
      }
    else ((re = !1), Ot && (e.flags & 1048576) !== 0 && Rh(e, gl, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var o = e.pendingProps;
          if (((t = Xi(e.elementType)), (e.type = t), typeof t == "function"))
            Pr(t)
              ? ((o = Zi(t, o)), (e.tag = 1), (e = Kd(null, e, t, o, l)))
              : ((e.tag = 0), (e = Uu(null, e, t, o, l)));
          else {
            if (t != null) {
              var f = t.$$typeof;
              if (f === W) {
                ((e.tag = 11), (e = Yd(null, e, t, o, l)));
                break t;
              } else if (f === z) {
                ((e.tag = 14), (e = Vd(null, e, t, o, l)));
                break t;
              }
            }
            throw ((e = tt(t) || t), Error(s(306, e, "")));
          }
        }
        return e;
      case 0:
        return Uu(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((o = e.type), (f = Zi(o, e.pendingProps)), Kd(t, e, o, f, l));
      case 3:
        t: {
          if ((ut(e, e.stateNode.containerInfo), t === null))
            throw Error(s(387));
          o = e.pendingProps;
          var d = e.memoizedState;
          ((f = d.element), hu(t, e), Ml(e, o, null, l));
          var y = e.memoizedState;
          if (
            ((o = y.cache),
            li(e, se, o),
            o !== d.cache && su(e, [se], l, !0),
            Sl(),
            (o = y.element),
            d.isDehydrated)
          )
            if (
              ((d = { element: o, isDehydrated: !1, cache: y.cache }),
              (e.updateQueue.baseState = d),
              (e.memoizedState = d),
              e.flags & 256)
            ) {
              e = Wd(t, e, o, l);
              break t;
            } else if (o !== f) {
              ((f = Ie(Error(s(424)), e)), pl(f), (e = Wd(t, e, o, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Kt = ln(t.firstChild),
                  ye = e,
                  Ot = !0,
                  ii = null,
                  nn = !0,
                  l = Gh(e, null, o, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((Ui(), o === f)) {
              e = Hn(t, e, l);
              break t;
            }
            ve(t, e, o, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ho(t, e),
          t === null
            ? (l = cg(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : Ot ||
                ((l = e.type),
                (t = e.pendingProps),
                (o = Do(ot.current).createElement(l)),
                (o[pe] = e),
                (o[Ce] = t),
                xe(o, l, t),
                fe(o),
                (e.stateNode = o))
            : (e.memoizedState = cg(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Tt(e),
          t === null &&
            Ot &&
            ((o = e.stateNode = og(e.type, e.pendingProps, ot.current)),
            (ye = e),
            (nn = !0),
            (f = Kt),
            bi(e.type) ? ((wc = f), (Kt = ln(o.firstChild))) : (Kt = f)),
          ve(t, e, e.pendingProps.children, l),
          ho(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ot &&
            ((f = o = Kt) &&
              ((o = ev(o, e.type, e.pendingProps, nn)),
              o !== null
                ? ((e.stateNode = o),
                  (ye = e),
                  (Kt = ln(o.firstChild)),
                  (nn = !1),
                  (f = !0))
                : (f = !1)),
            f || ai(e)),
          Tt(e),
          (f = e.type),
          (d = e.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (o = d.children),
          xc(f, d) ? (o = null) : y !== null && xc(f, y) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((f = vu(t, e, pb, null, null, l)), (Xl._currentValue = f)),
          ho(t, e),
          ve(t, e, o, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ot &&
            ((t = l = Kt) &&
              ((l = nv(l, e.pendingProps, nn)),
              l !== null
                ? ((e.stateNode = l), (ye = e), (Kt = null), (t = !0))
                : (t = !1)),
            t || ai(e)),
          null
        );
      case 13:
        return Jd(t, e, l);
      case 4:
        return (
          ut(e, e.stateNode.containerInfo),
          (o = e.pendingProps),
          t === null ? (e.child = Qi(e, null, o, l)) : ve(t, e, o, l),
          e.child
        );
      case 11:
        return Yd(t, e, e.type, e.pendingProps, l);
      case 7:
        return (ve(t, e, e.pendingProps, l), e.child);
      case 8:
        return (ve(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (ve(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (o = e.pendingProps),
          li(e, e.type, o.value),
          ve(t, e, o.children, l),
          e.child
        );
      case 9:
        return (
          (f = e.type._context),
          (o = e.pendingProps.children),
          Yi(e),
          (f = be(f)),
          (o = o(f)),
          (e.flags |= 1),
          ve(t, e, o, l),
          e.child
        );
      case 14:
        return Vd(t, e, e.type, e.pendingProps, l);
      case 15:
        return Xd(t, e, e.type, e.pendingProps, l);
      case 19:
        return $d(t, e, l);
      case 31:
        return Eb(t, e, l);
      case 22:
        return Gd(t, e, l, e.pendingProps);
      case 24:
        return (
          Yi(e),
          (o = be(se)),
          t === null
            ? ((f = uu()),
              f === null &&
                ((f = Qt),
                (d = ou()),
                (f.pooledCache = d),
                d.refCount++,
                d !== null && (f.pooledCacheLanes |= l),
                (f = d)),
              (e.memoizedState = { parent: o, cache: f }),
              fu(e),
              li(e, se, f))
            : ((t.lanes & l) !== 0 && (hu(t, e), Ml(e, null, null, l), Sl()),
              (f = t.memoizedState),
              (d = e.memoizedState),
              f.parent !== o
                ? ((f = { parent: o, cache: o }),
                  (e.memoizedState = f),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = f),
                  li(e, se, o))
                : ((o = d.cache),
                  li(e, se, o),
                  o !== f.cache && su(e, [se], l, !0))),
          ve(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(s(156, e.tag));
  }
  function Bn(t) {
    t.flags |= 4;
  }
  function Zu(t, e, l, o, f) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (f & 335544128) === f))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Am()) t.flags |= 8192;
        else throw ((Gi = Ps), cu);
    } else t.flags &= -16777217;
  }
  function tm(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !gg(e)))
      if (Am()) t.flags |= 8192;
      else throw ((Gi = Ps), cu);
  }
  function go(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Nf() : 536870912), (t.lanes |= e), (Ha |= e)));
  }
  function Ol(t, e) {
    if (!Ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var o = null; l !== null; )
            (l.alternate !== null && (o = l), (l = l.sibling));
          o === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (o.sibling = null);
      }
  }
  function Wt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      o = 0;
    if (e)
      for (var f = t.child; f !== null; )
        ((l |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags & 65011712),
          (o |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling));
    else
      for (f = t.child; f !== null; )
        ((l |= f.lanes | f.childLanes),
          (o |= f.subtreeFlags),
          (o |= f.flags),
          (f.return = t),
          (f = f.sibling));
    return ((t.subtreeFlags |= o), (t.childLanes = l), e);
  }
  function Ab(t, e, l) {
    var o = e.pendingProps;
    switch ((eu(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Wt(e), null);
      case 1:
        return (Wt(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (o = null),
          t !== null && (o = t.memoizedState.cache),
          e.memoizedState.cache !== o && (e.flags |= 2048),
          jn(se),
          ct(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Ea(e)
              ? Bn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), iu())),
          Wt(e),
          null
        );
      case 26:
        var f = e.type,
          d = e.memoizedState;
        return (
          t === null
            ? (Bn(e),
              d !== null ? (Wt(e), tm(e, d)) : (Wt(e), Zu(e, f, null, o, l)))
            : d
              ? d !== t.memoizedState
                ? (Bn(e), Wt(e), tm(e, d))
                : (Wt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== o && Bn(e),
                Wt(e),
                Zu(e, f, t, o, l)),
          null
        );
      case 27:
        if (
          (yt(e),
          (l = ot.current),
          (f = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== o && Bn(e);
        else {
          if (!o) {
            if (e.stateNode === null) throw Error(s(166));
            return (Wt(e), null);
          }
          ((t = it.current),
            Ea(e) ? Nh(e) : ((t = og(f, o, l)), (e.stateNode = t), Bn(e)));
        }
        return (Wt(e), null);
      case 5:
        if ((yt(e), (f = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== o && Bn(e);
        else {
          if (!o) {
            if (e.stateNode === null) throw Error(s(166));
            return (Wt(e), null);
          }
          if (((d = it.current), Ea(e))) Nh(e);
          else {
            var y = Do(ot.current);
            switch (d) {
              case 1:
                d = y.createElementNS("http://www.w3.org/2000/svg", f);
                break;
              case 2:
                d = y.createElementNS("http://www.w3.org/1998/Math/MathML", f);
                break;
              default:
                switch (f) {
                  case "svg":
                    d = y.createElementNS("http://www.w3.org/2000/svg", f);
                    break;
                  case "math":
                    d = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      f,
                    );
                    break;
                  case "script":
                    ((d = y.createElement("div")),
                      (d.innerHTML = "<script><\/script>"),
                      (d = d.removeChild(d.firstChild)));
                    break;
                  case "select":
                    ((d =
                      typeof o.is == "string"
                        ? y.createElement("select", { is: o.is })
                        : y.createElement("select")),
                      o.multiple
                        ? (d.multiple = !0)
                        : o.size && (d.size = o.size));
                    break;
                  default:
                    d =
                      typeof o.is == "string"
                        ? y.createElement(f, { is: o.is })
                        : y.createElement(f);
                }
            }
            ((d[pe] = e), (d[Ce] = o));
            t: for (y = e.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6) d.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                ((y.child.return = y), (y = y.child));
                continue;
              }
              if (y === e) break t;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === e) break t;
                y = y.return;
              }
              ((y.sibling.return = y.return), (y = y.sibling));
            }
            e.stateNode = d;
            t: switch ((xe(d, f, o), f)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                o = !!o.autoFocus;
                break t;
              case "img":
                o = !0;
                break t;
              default:
                o = !1;
            }
            o && Bn(e);
          }
        }
        return (
          Wt(e),
          Zu(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== o && Bn(e);
        else {
          if (typeof o != "string" && e.stateNode === null) throw Error(s(166));
          if (((t = ot.current), Ea(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (o = null),
              (f = ye),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  o = f.memoizedProps;
              }
            ((t[pe] = e),
              (t = !!(
                t.nodeValue === l ||
                (o !== null && o.suppressHydrationWarning === !0) ||
                Jm(t.nodeValue, l)
              )),
              t || ai(e, !0));
          } else
            ((t = Do(t).createTextNode(o)), (t[pe] = e), (e.stateNode = t));
        }
        return (Wt(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((o = Ea(e)), l !== null)) {
            if (t === null) {
              if (!o) throw Error(s(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(s(557));
              t[pe] = e;
            } else
              (Ui(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Wt(e), (t = !1));
          } else
            ((l = iu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (Ye(e), e) : (Ye(e), null);
          if ((e.flags & 128) !== 0) throw Error(s(558));
        }
        return (Wt(e), null);
      case 13:
        if (
          ((o = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = Ea(e)), o !== null && o.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(s(318));
              if (
                ((f = e.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(s(317));
              f[pe] = e;
            } else
              (Ui(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Wt(e), (f = !1));
          } else
            ((f = iu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return e.flags & 256 ? (Ye(e), e) : (Ye(e), null);
        }
        return (
          Ye(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = o !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((o = e.child),
                (f = null),
                o.alternate !== null &&
                  o.alternate.memoizedState !== null &&
                  o.alternate.memoizedState.cachePool !== null &&
                  (f = o.alternate.memoizedState.cachePool.pool),
                (d = null),
                o.memoizedState !== null &&
                  o.memoizedState.cachePool !== null &&
                  (d = o.memoizedState.cachePool.pool),
                d !== f && (o.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              go(e, e.updateQueue),
              Wt(e),
              null)
        );
      case 4:
        return (ct(), t === null && gc(e.stateNode.containerInfo), Wt(e), null);
      case 10:
        return (jn(e.type), Wt(e), null);
      case 19:
        if ((k(ie), (o = e.memoizedState), o === null)) return (Wt(e), null);
        if (((f = (e.flags & 128) !== 0), (d = o.rendering), d === null))
          if (f) Ol(o, !1);
          else {
            if (ee !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((d = eo(t)), d !== null)) {
                  for (
                    e.flags |= 128,
                      Ol(o, !1),
                      t = d.updateQueue,
                      e.updateQueue = t,
                      go(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (Ch(l, t), (l = l.sibling));
                  return (
                    F(ie, (ie.current & 1) | 2),
                    Ot && zn(e, o.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            o.tail !== null &&
              Lt() > xo &&
              ((e.flags |= 128), (f = !0), Ol(o, !1), (e.lanes = 4194304));
          }
        else {
          if (!f)
            if (((t = eo(d)), t !== null)) {
              if (
                ((e.flags |= 128),
                (f = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                go(e, t),
                Ol(o, !0),
                o.tail === null &&
                  o.tailMode === "hidden" &&
                  !d.alternate &&
                  !Ot)
              )
                return (Wt(e), null);
            } else
              2 * Lt() - o.renderingStartTime > xo &&
                l !== 536870912 &&
                ((e.flags |= 128), (f = !0), Ol(o, !1), (e.lanes = 4194304));
          o.isBackwards
            ? ((d.sibling = e.child), (e.child = d))
            : ((t = o.last),
              t !== null ? (t.sibling = d) : (e.child = d),
              (o.last = d));
        }
        return o.tail !== null
          ? ((t = o.tail),
            (o.rendering = t),
            (o.tail = t.sibling),
            (o.renderingStartTime = Lt()),
            (t.sibling = null),
            (l = ie.current),
            F(ie, f ? (l & 1) | 2 : l & 1),
            Ot && zn(e, o.treeForkCount),
            t)
          : (Wt(e), null);
      case 22:
      case 23:
        return (
          Ye(e),
          pu(),
          (o = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== o && (e.flags |= 8192)
            : o && (e.flags |= 8192),
          o
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Wt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Wt(e),
          (l = e.updateQueue),
          l !== null && go(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (o = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (o = e.memoizedState.cachePool.pool),
          o !== l && (e.flags |= 2048),
          t !== null && k(Vi),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          jn(se),
          Wt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, e.tag));
  }
  function Tb(t, e) {
    switch ((eu(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          jn(se),
          ct(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (yt(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Ye(e), e.alternate === null)) throw Error(s(340));
          Ui();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Ye(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(s(340));
          Ui();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (k(ie), null);
      case 4:
        return (ct(), null);
      case 10:
        return (jn(e.type), null);
      case 22:
      case 23:
        return (
          Ye(e),
          pu(),
          t !== null && k(Vi),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (jn(se), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function em(t, e) {
    switch ((eu(e), e.tag)) {
      case 3:
        (jn(se), ct());
        break;
      case 26:
      case 27:
      case 5:
        yt(e);
        break;
      case 4:
        ct();
        break;
      case 31:
        e.memoizedState !== null && Ye(e);
        break;
      case 13:
        Ye(e);
        break;
      case 19:
        k(ie);
        break;
      case 10:
        jn(e.type);
        break;
      case 22:
      case 23:
        (Ye(e), pu(), t !== null && k(Vi));
        break;
      case 24:
        jn(se);
    }
  }
  function Dl(t, e) {
    try {
      var l = e.updateQueue,
        o = l !== null ? l.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        l = f;
        do {
          if ((l.tag & t) === t) {
            o = void 0;
            var d = l.create,
              y = l.inst;
            ((o = d()), (y.destroy = o));
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (v) {
      Ut(e, e.return, v);
    }
  }
  function fi(t, e, l) {
    try {
      var o = e.updateQueue,
        f = o !== null ? o.lastEffect : null;
      if (f !== null) {
        var d = f.next;
        o = d;
        do {
          if ((o.tag & t) === t) {
            var y = o.inst,
              v = y.destroy;
            if (v !== void 0) {
              ((y.destroy = void 0), (f = e));
              var C = l,
                U = v;
              try {
                U();
              } catch (P) {
                Ut(f, C, P);
              }
            }
          }
          o = o.next;
        } while (o !== d);
      }
    } catch (P) {
      Ut(e, e.return, P);
    }
  }
  function nm(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Fh(e, l);
      } catch (o) {
        Ut(t, t.return, o);
      }
    }
  }
  function im(t, e, l) {
    ((l.props = Zi(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (o) {
      Ut(t, e, o);
    }
  }
  function Rl(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(o)) : (l.current = o);
      }
    } catch (f) {
      Ut(t, e, f);
    }
  }
  function xn(t, e) {
    var l = t.ref,
      o = t.refCleanup;
    if (l !== null)
      if (typeof o == "function")
        try {
          o();
        } catch (f) {
          Ut(t, e, f);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (f) {
          Ut(t, e, f);
        }
      else l.current = null;
  }
  function am(t) {
    var e = t.type,
      l = t.memoizedProps,
      o = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && o.focus();
          break t;
        case "img":
          l.src ? (o.src = l.src) : l.srcSet && (o.srcset = l.srcSet);
      }
    } catch (f) {
      Ut(t, t.return, f);
    }
  }
  function Ku(t, e, l) {
    try {
      var o = t.stateNode;
      (Wb(o, t.type, l, e), (o[Ce] = e));
    } catch (f) {
      Ut(t, t.return, f);
    }
  }
  function lm(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && bi(t.type)) ||
      t.tag === 4
    );
  }
  function Wu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || lm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && bi(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Ju(t, e, l) {
    var o = t.tag;
    if (o === 5 || o === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = On)));
    else if (
      o !== 4 &&
      (o === 27 && bi(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (Ju(t, e, l), t = t.sibling; t !== null; )
        (Ju(t, e, l), (t = t.sibling));
  }
  function po(t, e, l) {
    var o = t.tag;
    if (o === 5 || o === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      o !== 4 &&
      (o === 27 && bi(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (po(t, e, l), t = t.sibling; t !== null; )
        (po(t, e, l), (t = t.sibling));
  }
  function sm(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var o = t.type, f = e.attributes; f.length; )
        e.removeAttributeNode(f[0]);
      (xe(e, o, l), (e[pe] = t), (e[Ce] = l));
    } catch (d) {
      Ut(t, t.return, d);
    }
  }
  var Un = !1,
    ue = !1,
    Pu = !1,
    om = typeof WeakSet == "function" ? WeakSet : Set,
    he = null;
  function Cb(t, e) {
    if (((t = t.containerInfo), (bc = Ho), (t = vh(t)), Gr(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var f = o.anchorOffset,
              d = o.focusNode;
            o = o.focusOffset;
            try {
              (l.nodeType, d.nodeType);
            } catch {
              l = null;
              break t;
            }
            var y = 0,
              v = -1,
              C = -1,
              U = 0,
              P = 0,
              I = t,
              q = null;
            e: for (;;) {
              for (
                var Z;
                I !== l || (f !== 0 && I.nodeType !== 3) || (v = y + f),
                  I !== d || (o !== 0 && I.nodeType !== 3) || (C = y + o),
                  I.nodeType === 3 && (y += I.nodeValue.length),
                  (Z = I.firstChild) !== null;
              )
                ((q = I), (I = Z));
              for (;;) {
                if (I === t) break e;
                if (
                  (q === l && ++U === f && (v = y),
                  q === d && ++P === o && (C = y),
                  (Z = I.nextSibling) !== null)
                )
                  break;
                ((I = q), (q = I.parentNode));
              }
              I = Z;
            }
            l = v === -1 || C === -1 ? null : { start: v, end: C };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      vc = { focusedElem: t, selectionRange: l }, Ho = !1, he = e;
      he !== null;
    )
      if (
        ((e = he), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (he = t));
      else
        for (; he !== null; ) {
          switch (((e = he), (d = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  ((f = t[l]), (f.ref.impl = f.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && d !== null) {
                ((t = void 0),
                  (l = e),
                  (f = d.memoizedProps),
                  (d = d.memoizedState),
                  (o = l.stateNode));
                try {
                  var ft = Zi(l.type, f);
                  ((t = o.getSnapshotBeforeUpdate(ft, d)),
                    (o.__reactInternalSnapshotBeforeUpdate = t));
                } catch (pt) {
                  Ut(l, l.return, pt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  Sc(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Sc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (he = t));
            break;
          }
          he = e.return;
        }
  }
  function rm(t, e, l) {
    var o = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Yn(t, l), o & 4 && Dl(5, l));
        break;
      case 1:
        if ((Yn(t, l), o & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (y) {
              Ut(l, l.return, y);
            }
          else {
            var f = Zi(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(f, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              Ut(l, l.return, y);
            }
          }
        (o & 64 && nm(l), o & 512 && Rl(l, l.return));
        break;
      case 3:
        if ((Yn(t, l), o & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Fh(t, e);
          } catch (y) {
            Ut(l, l.return, y);
          }
        }
        break;
      case 27:
        e === null && o & 4 && sm(l);
      case 26:
      case 5:
        (Yn(t, l), e === null && o & 4 && am(l), o & 512 && Rl(l, l.return));
        break;
      case 12:
        Yn(t, l);
        break;
      case 31:
        (Yn(t, l), o & 4 && fm(t, l));
        break;
      case 13:
        (Yn(t, l),
          o & 4 && hm(t, l),
          o & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = Hb.bind(null, l)), iv(t, l)))));
        break;
      case 22:
        if (((o = l.memoizedState !== null || Un), !o)) {
          ((e = (e !== null && e.memoizedState !== null) || ue), (f = Un));
          var d = ue;
          ((Un = o),
            (ue = e) && !d ? Vn(t, l, (l.subtreeFlags & 8772) !== 0) : Yn(t, l),
            (Un = f),
            (ue = d));
        }
        break;
      case 30:
        break;
      default:
        Yn(t, l);
    }
  }
  function um(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), um(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Tr(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Pt = null,
    De = !1;
  function qn(t, e, l) {
    for (l = l.child; l !== null; ) (cm(t, e, l), (l = l.sibling));
  }
  function cm(t, e, l) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(hn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (ue || xn(l, e),
          qn(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        ue || xn(l, e);
        var o = Pt,
          f = De;
        (bi(l.type) && ((Pt = l.stateNode), (De = !1)),
          qn(t, e, l),
          ql(l.stateNode),
          (Pt = o),
          (De = f));
        break;
      case 5:
        ue || xn(l, e);
      case 6:
        if (
          ((o = Pt),
          (f = De),
          (Pt = null),
          qn(t, e, l),
          (Pt = o),
          (De = f),
          Pt !== null)
        )
          if (De)
            try {
              (Pt.nodeType === 9
                ? Pt.body
                : Pt.nodeName === "HTML"
                  ? Pt.ownerDocument.body
                  : Pt
              ).removeChild(l.stateNode);
            } catch (d) {
              Ut(l, e, d);
            }
          else
            try {
              Pt.removeChild(l.stateNode);
            } catch (d) {
              Ut(l, e, d);
            }
        break;
      case 18:
        Pt !== null &&
          (De
            ? ((t = Pt),
              ng(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              Qa(t))
            : ng(Pt, l.stateNode));
        break;
      case 4:
        ((o = Pt),
          (f = De),
          (Pt = l.stateNode.containerInfo),
          (De = !0),
          qn(t, e, l),
          (Pt = o),
          (De = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (fi(2, l, e), ue || fi(4, l, e), qn(t, e, l));
        break;
      case 1:
        (ue ||
          (xn(l, e),
          (o = l.stateNode),
          typeof o.componentWillUnmount == "function" && im(l, e, o)),
          qn(t, e, l));
        break;
      case 21:
        qn(t, e, l);
        break;
      case 22:
        ((ue = (o = ue) || l.memoizedState !== null), qn(t, e, l), (ue = o));
        break;
      default:
        qn(t, e, l);
    }
  }
  function fm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Qa(t);
      } catch (l) {
        Ut(e, e.return, l);
      }
    }
  }
  function hm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Qa(t);
      } catch (l) {
        Ut(e, e.return, l);
      }
  }
  function Ob(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new om()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new om()),
          e
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function yo(t, e) {
    var l = Ob(t);
    e.forEach(function (o) {
      if (!l.has(o)) {
        l.add(o);
        var f = Bb.bind(null, t, o);
        o.then(f, f);
      }
    });
  }
  function Re(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var f = l[o],
          d = t,
          y = e,
          v = y;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (bi(v.type)) {
                ((Pt = v.stateNode), (De = !1));
                break t;
              }
              break;
            case 5:
              ((Pt = v.stateNode), (De = !1));
              break t;
            case 3:
            case 4:
              ((Pt = v.stateNode.containerInfo), (De = !0));
              break t;
          }
          v = v.return;
        }
        if (Pt === null) throw Error(s(160));
        (cm(d, y, f),
          (Pt = null),
          (De = !1),
          (d = f.alternate),
          d !== null && (d.return = null),
          (f.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (dm(e, t), (e = e.sibling));
  }
  var mn = null;
  function dm(t, e) {
    var l = t.alternate,
      o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Re(e, t),
          ze(t),
          o & 4 && (fi(3, t, t.return), Dl(3, t), fi(5, t, t.return)));
        break;
      case 1:
        (Re(e, t),
          ze(t),
          o & 512 && (ue || l === null || xn(l, l.return)),
          o & 64 &&
            Un &&
            ((t = t.updateQueue),
            t !== null &&
              ((o = t.callbacks),
              o !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? o : l.concat(o))))));
        break;
      case 26:
        var f = mn;
        if (
          (Re(e, t),
          ze(t),
          o & 512 && (ue || l === null || xn(l, l.return)),
          o & 4)
        ) {
          var d = l !== null ? l.memoizedState : null;
          if (((o = t.memoizedState), l === null))
            if (o === null)
              if (t.stateNode === null) {
                t: {
                  ((o = t.type),
                    (l = t.memoizedProps),
                    (f = f.ownerDocument || f));
                  e: switch (o) {
                    case "title":
                      ((d = f.getElementsByTagName("title")[0]),
                        (!d ||
                          d[al] ||
                          d[pe] ||
                          d.namespaceURI === "http://www.w3.org/2000/svg" ||
                          d.hasAttribute("itemprop")) &&
                          ((d = f.createElement(o)),
                          f.head.insertBefore(
                            d,
                            f.querySelector("head > title"),
                          )),
                        xe(d, o, l),
                        (d[pe] = t),
                        fe(d),
                        (o = d));
                      break t;
                    case "link":
                      var y = dg("link", "href", f).get(o + (l.href || ""));
                      if (y) {
                        for (var v = 0; v < y.length; v++)
                          if (
                            ((d = y[v]),
                            d.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              d.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              d.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              d.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            y.splice(v, 1);
                            break e;
                          }
                      }
                      ((d = f.createElement(o)),
                        xe(d, o, l),
                        f.head.appendChild(d));
                      break;
                    case "meta":
                      if (
                        (y = dg("meta", "content", f).get(
                          o + (l.content || ""),
                        ))
                      ) {
                        for (v = 0; v < y.length; v++)
                          if (
                            ((d = y[v]),
                            d.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              d.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              d.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              d.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              d.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            y.splice(v, 1);
                            break e;
                          }
                      }
                      ((d = f.createElement(o)),
                        xe(d, o, l),
                        f.head.appendChild(d));
                      break;
                    default:
                      throw Error(s(468, o));
                  }
                  ((d[pe] = t), fe(d), (o = d));
                }
                t.stateNode = o;
              } else mg(f, t.type, t.stateNode);
            else t.stateNode = hg(f, o, t.memoizedProps);
          else
            d !== o
              ? (d === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : d.count--,
                o === null
                  ? mg(f, t.type, t.stateNode)
                  : hg(f, o, t.memoizedProps))
              : o === null &&
                t.stateNode !== null &&
                Ku(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Re(e, t),
          ze(t),
          o & 512 && (ue || l === null || xn(l, l.return)),
          l !== null && o & 4 && Ku(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Re(e, t),
          ze(t),
          o & 512 && (ue || l === null || xn(l, l.return)),
          t.flags & 32)
        ) {
          f = t.stateNode;
          try {
            ma(f, "");
          } catch (ft) {
            Ut(t, t.return, ft);
          }
        }
        (o & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), Ku(t, f, l !== null ? l.memoizedProps : f)),
          o & 1024 && (Pu = !0));
        break;
      case 6:
        if ((Re(e, t), ze(t), o & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          ((o = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = o;
          } catch (ft) {
            Ut(t, t.return, ft);
          }
        }
        break;
      case 3:
        if (
          ((No = null),
          (f = mn),
          (mn = Ro(e.containerInfo)),
          Re(e, t),
          (mn = f),
          ze(t),
          o & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Qa(e.containerInfo);
          } catch (ft) {
            Ut(t, t.return, ft);
          }
        Pu && ((Pu = !1), mm(t));
        break;
      case 4:
        ((o = mn),
          (mn = Ro(t.stateNode.containerInfo)),
          Re(e, t),
          ze(t),
          (mn = o));
        break;
      case 12:
        (Re(e, t), ze(t));
        break;
      case 31:
        (Re(e, t),
          ze(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), yo(t, o))));
        break;
      case 13:
        (Re(e, t),
          ze(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (vo = Lt()),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), yo(t, o))));
        break;
      case 22:
        f = t.memoizedState !== null;
        var C = l !== null && l.memoizedState !== null,
          U = Un,
          P = ue;
        if (
          ((Un = U || f),
          (ue = P || C),
          Re(e, t),
          (ue = P),
          (Un = U),
          ze(t),
          o & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = f ? e._visibility & -2 : e._visibility | 1,
              f && (l === null || C || Un || ue || Ki(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                C = l = e;
                try {
                  if (((d = C.stateNode), f))
                    ((y = d.style),
                      typeof y.setProperty == "function"
                        ? y.setProperty("display", "none", "important")
                        : (y.display = "none"));
                  else {
                    v = C.stateNode;
                    var I = C.memoizedProps.style,
                      q =
                        I != null && I.hasOwnProperty("display")
                          ? I.display
                          : null;
                    v.style.display =
                      q == null || typeof q == "boolean" ? "" : ("" + q).trim();
                  }
                } catch (ft) {
                  Ut(C, C.return, ft);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                C = e;
                try {
                  C.stateNode.nodeValue = f ? "" : C.memoizedProps;
                } catch (ft) {
                  Ut(C, C.return, ft);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                C = e;
                try {
                  var Z = C.stateNode;
                  f ? ig(Z, !0) : ig(C.stateNode, !1);
                } catch (ft) {
                  Ut(C, C.return, ft);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        o & 4 &&
          ((o = t.updateQueue),
          o !== null &&
            ((l = o.retryQueue),
            l !== null && ((o.retryQueue = null), yo(t, l))));
        break;
      case 19:
        (Re(e, t),
          ze(t),
          o & 4 &&
            ((o = t.updateQueue),
            o !== null && ((t.updateQueue = null), yo(t, o))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Re(e, t), ze(t));
    }
  }
  function ze(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, o = t.return; o !== null; ) {
          if (lm(o)) {
            l = o;
            break;
          }
          o = o.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var f = l.stateNode,
              d = Wu(t);
            po(t, d, f);
            break;
          case 5:
            var y = l.stateNode;
            l.flags & 32 && (ma(y, ""), (l.flags &= -33));
            var v = Wu(t);
            po(t, v, y);
            break;
          case 3:
          case 4:
            var C = l.stateNode.containerInfo,
              U = Wu(t);
            Ju(t, U, C);
            break;
          default:
            throw Error(s(161));
        }
      } catch (P) {
        Ut(t, t.return, P);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function mm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (mm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Yn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (rm(t, e.alternate, e), (e = e.sibling));
  }
  function Ki(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (fi(4, e, e.return), Ki(e));
          break;
        case 1:
          xn(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == "function" && im(e, e.return, l),
            Ki(e));
          break;
        case 27:
          ql(e.stateNode);
        case 26:
        case 5:
          (xn(e, e.return), Ki(e));
          break;
        case 22:
          e.memoizedState === null && Ki(e);
          break;
        case 30:
          Ki(e);
          break;
        default:
          Ki(e);
      }
      t = t.sibling;
    }
  }
  function Vn(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var o = e.alternate,
        f = t,
        d = e,
        y = d.flags;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          (Vn(f, d, l), Dl(4, d));
          break;
        case 1:
          if (
            (Vn(f, d, l),
            (o = d),
            (f = o.stateNode),
            typeof f.componentDidMount == "function")
          )
            try {
              f.componentDidMount();
            } catch (U) {
              Ut(o, o.return, U);
            }
          if (((o = d), (f = o.updateQueue), f !== null)) {
            var v = o.stateNode;
            try {
              var C = f.shared.hiddenCallbacks;
              if (C !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < C.length; f++)
                  Qh(C[f], v);
            } catch (U) {
              Ut(o, o.return, U);
            }
          }
          (l && y & 64 && nm(d), Rl(d, d.return));
          break;
        case 27:
          sm(d);
        case 26:
        case 5:
          (Vn(f, d, l), l && o === null && y & 4 && am(d), Rl(d, d.return));
          break;
        case 12:
          Vn(f, d, l);
          break;
        case 31:
          (Vn(f, d, l), l && y & 4 && fm(f, d));
          break;
        case 13:
          (Vn(f, d, l), l && y & 4 && hm(f, d));
          break;
        case 22:
          (d.memoizedState === null && Vn(f, d, l), Rl(d, d.return));
          break;
        case 30:
          break;
        default:
          Vn(f, d, l);
      }
      e = e.sibling;
    }
  }
  function $u(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && yl(l)));
  }
  function Iu(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && yl(t)));
  }
  function gn(t, e, l, o) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (gm(t, e, l, o), (e = e.sibling));
  }
  function gm(t, e, l, o) {
    var f = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (gn(t, e, l, o), f & 2048 && Dl(9, e));
        break;
      case 1:
        gn(t, e, l, o);
        break;
      case 3:
        (gn(t, e, l, o),
          f & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && yl(t))));
        break;
      case 12:
        if (f & 2048) {
          (gn(t, e, l, o), (t = e.stateNode));
          try {
            var d = e.memoizedProps,
              y = d.id,
              v = d.onPostCommit;
            typeof v == "function" &&
              v(
                y,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (C) {
            Ut(e, e.return, C);
          }
        } else gn(t, e, l, o);
        break;
      case 31:
        gn(t, e, l, o);
        break;
      case 13:
        gn(t, e, l, o);
        break;
      case 23:
        break;
      case 22:
        ((d = e.stateNode),
          (y = e.alternate),
          e.memoizedState !== null
            ? d._visibility & 2
              ? gn(t, e, l, o)
              : zl(t, e)
            : d._visibility & 2
              ? gn(t, e, l, o)
              : ((d._visibility |= 2),
                ja(t, e, l, o, (e.subtreeFlags & 10256) !== 0 || !1)),
          f & 2048 && $u(y, e));
        break;
      case 24:
        (gn(t, e, l, o), f & 2048 && Iu(e.alternate, e));
        break;
      default:
        gn(t, e, l, o);
    }
  }
  function ja(t, e, l, o, f) {
    for (
      f = f && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var d = t,
        y = e,
        v = l,
        C = o,
        U = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (ja(d, y, v, C, f), Dl(8, y));
          break;
        case 23:
          break;
        case 22:
          var P = y.stateNode;
          (y.memoizedState !== null
            ? P._visibility & 2
              ? ja(d, y, v, C, f)
              : zl(d, y)
            : ((P._visibility |= 2), ja(d, y, v, C, f)),
            f && U & 2048 && $u(y.alternate, y));
          break;
        case 24:
          (ja(d, y, v, C, f), f && U & 2048 && Iu(y.alternate, y));
          break;
        default:
          ja(d, y, v, C, f);
      }
      e = e.sibling;
    }
  }
  function zl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          o = e,
          f = o.flags;
        switch (o.tag) {
          case 22:
            (zl(l, o), f & 2048 && $u(o.alternate, o));
            break;
          case 24:
            (zl(l, o), f & 2048 && Iu(o.alternate, o));
            break;
          default:
            zl(l, o);
        }
        e = e.sibling;
      }
  }
  var Nl = 8192;
  function ka(t, e, l) {
    if (t.subtreeFlags & Nl)
      for (t = t.child; t !== null; ) (pm(t, e, l), (t = t.sibling));
  }
  function pm(t, e, l) {
    switch (t.tag) {
      case 26:
        (ka(t, e, l),
          t.flags & Nl &&
            t.memoizedState !== null &&
            gv(l, mn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ka(t, e, l);
        break;
      case 3:
      case 4:
        var o = mn;
        ((mn = Ro(t.stateNode.containerInfo)), ka(t, e, l), (mn = o));
        break;
      case 22:
        t.memoizedState === null &&
          ((o = t.alternate),
          o !== null && o.memoizedState !== null
            ? ((o = Nl), (Nl = 16777216), ka(t, e, l), (Nl = o))
            : ka(t, e, l));
        break;
      default:
        ka(t, e, l);
    }
  }
  function ym(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function jl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          ((he = o), vm(o, t));
        }
      ym(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (bm(t), (t = t.sibling));
  }
  function bm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (jl(t), t.flags & 2048 && fi(9, t, t.return));
        break;
      case 3:
        jl(t);
        break;
      case 12:
        jl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), bo(t))
          : jl(t);
        break;
      default:
        jl(t);
    }
  }
  function bo(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          ((he = o), vm(o, t));
        }
      ym(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (fi(8, e, e.return), bo(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), bo(e)));
          break;
        default:
          bo(e);
      }
      t = t.sibling;
    }
  }
  function vm(t, e) {
    for (; he !== null; ) {
      var l = he;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          fi(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var o = l.memoizedState.cachePool.pool;
            o != null && o.refCount++;
          }
          break;
        case 24:
          yl(l.memoizedState.cache);
      }
      if (((o = l.child), o !== null)) ((o.return = l), (he = o));
      else
        t: for (l = t; he !== null; ) {
          o = he;
          var f = o.sibling,
            d = o.return;
          if ((um(o), o === l)) {
            he = null;
            break t;
          }
          if (f !== null) {
            ((f.return = d), (he = f));
            break t;
          }
          he = d;
        }
    }
  }
  var Db = {
      getCacheForType: function (t) {
        var e = be(se),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return be(se).controller.signal;
      },
    },
    Rb = typeof WeakMap == "function" ? WeakMap : Map,
    jt = 0,
    Qt = null,
    Mt = null,
    wt = 0,
    Bt = 0,
    Ve = null,
    hi = !1,
    La = !1,
    tc = !1,
    Xn = 0,
    ee = 0,
    di = 0,
    Wi = 0,
    ec = 0,
    Xe = 0,
    Ha = 0,
    kl = null,
    Ne = null,
    nc = !1,
    vo = 0,
    xm = 0,
    xo = 1 / 0,
    _o = null,
    mi = null,
    ce = 0,
    gi = null,
    Ba = null,
    Gn = 0,
    ic = 0,
    ac = null,
    _m = null,
    Ll = 0,
    lc = null;
  function Ge() {
    return (jt & 2) !== 0 && wt !== 0 ? wt & -wt : O.T !== null ? fc() : Hf();
  }
  function Sm() {
    if (Xe === 0)
      if ((wt & 536870912) === 0 || Ot) {
        var t = Cs;
        ((Cs <<= 1), (Cs & 3932160) === 0 && (Cs = 262144), (Xe = t));
      } else Xe = 536870912;
    return ((t = qe.current), t !== null && (t.flags |= 32), Xe);
  }
  function je(t, e, l) {
    (((t === Qt && (Bt === 2 || Bt === 9)) || t.cancelPendingCommit !== null) &&
      (Ua(t, 0), pi(t, wt, Xe, !1)),
      il(t, l),
      ((jt & 2) === 0 || t !== Qt) &&
        (t === Qt &&
          ((jt & 2) === 0 && (Wi |= l), ee === 4 && pi(t, wt, Xe, !1)),
        _n(t)));
  }
  function Mm(t, e, l) {
    if ((jt & 6) !== 0) throw Error(s(327));
    var o = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || nl(t, e),
      f = o ? jb(t, e) : oc(t, e, !0),
      d = o;
    do {
      if (f === 0) {
        La && !o && pi(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), d && !zb(l))) {
          ((f = oc(t, e, !1)), (d = !1));
          continue;
        }
        if (f === 2) {
          if (((d = e), t.errorRecoveryDisabledLanes & d)) var y = 0;
          else
            ((y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
          if (y !== 0) {
            e = y;
            t: {
              var v = t;
              f = kl;
              var C = v.current.memoizedState.isDehydrated;
              if ((C && (Ua(v, y).flags |= 256), (y = oc(v, y, !1)), y !== 2)) {
                if (tc && !C) {
                  ((v.errorRecoveryDisabledLanes |= d), (Wi |= d), (f = 4));
                  break t;
                }
                ((d = Ne),
                  (Ne = f),
                  d !== null &&
                    (Ne === null ? (Ne = d) : Ne.push.apply(Ne, d)));
              }
              f = y;
            }
            if (((d = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (Ua(t, 0), pi(t, e, 0, !0));
          break;
        }
        t: {
          switch (((o = t), (d = f), d)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              pi(o, e, Xe, !hi);
              break t;
            case 2:
              Ne = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((e & 62914560) === e && ((f = vo + 300 - Lt()), 10 < f)) {
            if ((pi(o, e, Xe, !hi), Ds(o, 0, !0) !== 0)) break t;
            ((Gn = e),
              (o.timeoutHandle = tg(
                Em.bind(
                  null,
                  o,
                  l,
                  Ne,
                  _o,
                  nc,
                  e,
                  Xe,
                  Wi,
                  Ha,
                  hi,
                  d,
                  "Throttled",
                  -0,
                  0,
                ),
                f,
              )));
            break t;
          }
          Em(o, l, Ne, _o, nc, e, Xe, Wi, Ha, hi, d, null, -0, 0);
        }
      }
      break;
    } while (!0);
    _n(t);
  }
  function Em(t, e, l, o, f, d, y, v, C, U, P, I, q, Z) {
    if (
      ((t.timeoutHandle = -1),
      (I = e.subtreeFlags),
      I & 8192 || (I & 16785408) === 16785408)
    ) {
      ((I = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: On,
      }),
        pm(e, d, I));
      var ft =
        (d & 62914560) === d ? vo - Lt() : (d & 4194048) === d ? xm - Lt() : 0;
      if (((ft = pv(I, ft)), ft !== null)) {
        ((Gn = d),
          (t.cancelPendingCommit = ft(
            zm.bind(null, t, e, d, l, o, f, y, v, C, P, I, null, q, Z),
          )),
          pi(t, d, y, !U));
        return;
      }
    }
    zm(t, e, d, l, o, f, y, v, C);
  }
  function zb(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var o = 0; o < l.length; o++) {
          var f = l[o],
            d = f.getSnapshot;
          f = f.value;
          try {
            if (!Be(d(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function pi(t, e, l, o) {
    ((e &= ~ec),
      (e &= ~Wi),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      o && (t.warmLanes |= e),
      (o = t.expirationTimes));
    for (var f = e; 0 < f; ) {
      var d = 31 - He(f),
        y = 1 << d;
      ((o[d] = -1), (f &= ~y));
    }
    l !== 0 && jf(t, l, e);
  }
  function So() {
    return (jt & 6) === 0 ? (Hl(0), !1) : !0;
  }
  function sc() {
    if (Mt !== null) {
      if (Bt === 0) var t = Mt.return;
      else ((t = Mt), (Nn = qi = null), Su(t), (Oa = null), (vl = 0), (t = Mt));
      for (; t !== null; ) (em(t.alternate, t), (t = t.return));
      Mt = null;
    }
  }
  function Ua(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), $b(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (Gn = 0),
      sc(),
      (Qt = t),
      (Mt = l = Rn(t.current, null)),
      (wt = e),
      (Bt = 0),
      (Ve = null),
      (hi = !1),
      (La = nl(t, e)),
      (tc = !1),
      (Ha = Xe = ec = Wi = di = ee = 0),
      (Ne = kl = null),
      (nc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements, o &= e; 0 < o; ) {
        var f = 31 - He(o),
          d = 1 << f;
        ((e |= t[f]), (o &= ~d));
      }
    return ((Xn = e), Vs(), l);
  }
  function wm(t, e) {
    ((vt = null),
      (O.H = Tl),
      e === Ca || e === Js
        ? ((e = Yh()), (Bt = 3))
        : e === cu
          ? ((e = Yh()), (Bt = 4))
          : (Bt =
              e === Bu
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Ve = e),
      Mt === null && ((ee = 1), co(t, Ie(e, t.current))));
  }
  function Am() {
    var t = qe.current;
    return t === null
      ? !0
      : (wt & 4194048) === wt
        ? an === null
        : (wt & 62914560) === wt || (wt & 536870912) !== 0
          ? t === an
          : !1;
  }
  function Tm() {
    var t = O.H;
    return ((O.H = Tl), t === null ? Tl : t);
  }
  function Cm() {
    var t = O.A;
    return ((O.A = Db), t);
  }
  function Mo() {
    ((ee = 4),
      hi || ((wt & 4194048) !== wt && qe.current !== null) || (La = !0),
      ((di & 134217727) === 0 && (Wi & 134217727) === 0) ||
        Qt === null ||
        pi(Qt, wt, Xe, !1));
  }
  function oc(t, e, l) {
    var o = jt;
    jt |= 2;
    var f = Tm(),
      d = Cm();
    ((Qt !== t || wt !== e) && ((_o = null), Ua(t, e)), (e = !1));
    var y = ee;
    t: do
      try {
        if (Bt !== 0 && Mt !== null) {
          var v = Mt,
            C = Ve;
          switch (Bt) {
            case 8:
              (sc(), (y = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              qe.current === null && (e = !0);
              var U = Bt;
              if (((Bt = 0), (Ve = null), qa(t, v, C, U), l && La)) {
                y = 0;
                break t;
              }
              break;
            default:
              ((U = Bt), (Bt = 0), (Ve = null), qa(t, v, C, U));
          }
        }
        (Nb(), (y = ee));
        break;
      } catch (P) {
        wm(t, P);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Nn = qi = null),
      (jt = o),
      (O.H = f),
      (O.A = d),
      Mt === null && ((Qt = null), (wt = 0), Vs()),
      y
    );
  }
  function Nb() {
    for (; Mt !== null; ) Om(Mt);
  }
  function jb(t, e) {
    var l = jt;
    jt |= 2;
    var o = Tm(),
      f = Cm();
    Qt !== t || wt !== e
      ? ((_o = null), (xo = Lt() + 500), Ua(t, e))
      : (La = nl(t, e));
    t: do
      try {
        if (Bt !== 0 && Mt !== null) {
          e = Mt;
          var d = Ve;
          e: switch (Bt) {
            case 1:
              ((Bt = 0), (Ve = null), qa(t, e, d, 1));
              break;
            case 2:
            case 9:
              if (Uh(d)) {
                ((Bt = 0), (Ve = null), Dm(e));
                break;
              }
              ((e = function () {
                ((Bt !== 2 && Bt !== 9) || Qt !== t || (Bt = 7), _n(t));
              }),
                d.then(e, e));
              break t;
            case 3:
              Bt = 7;
              break t;
            case 4:
              Bt = 5;
              break t;
            case 7:
              Uh(d)
                ? ((Bt = 0), (Ve = null), Dm(e))
                : ((Bt = 0), (Ve = null), qa(t, e, d, 7));
              break;
            case 5:
              var y = null;
              switch (Mt.tag) {
                case 26:
                  y = Mt.memoizedState;
                case 5:
                case 27:
                  var v = Mt;
                  if (y ? gg(y) : v.stateNode.complete) {
                    ((Bt = 0), (Ve = null));
                    var C = v.sibling;
                    if (C !== null) Mt = C;
                    else {
                      var U = v.return;
                      U !== null ? ((Mt = U), Eo(U)) : (Mt = null);
                    }
                    break e;
                  }
              }
              ((Bt = 0), (Ve = null), qa(t, e, d, 5));
              break;
            case 6:
              ((Bt = 0), (Ve = null), qa(t, e, d, 6));
              break;
            case 8:
              (sc(), (ee = 6));
              break t;
            default:
              throw Error(s(462));
          }
        }
        kb();
        break;
      } catch (P) {
        wm(t, P);
      }
    while (!0);
    return (
      (Nn = qi = null),
      (O.H = o),
      (O.A = f),
      (jt = l),
      Mt !== null ? 0 : ((Qt = null), (wt = 0), Vs(), ee)
    );
  }
  function kb() {
    for (; Mt !== null && !Ze(); ) Om(Mt);
  }
  function Om(t) {
    var e = Id(t.alternate, t, Xn);
    ((t.memoizedProps = t.pendingProps), e === null ? Eo(t) : (Mt = e));
  }
  function Dm(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Zd(l, e, e.pendingProps, e.type, void 0, wt);
        break;
      case 11:
        e = Zd(l, e, e.pendingProps, e.type.render, e.ref, wt);
        break;
      case 5:
        Su(e);
      default:
        (em(l, e), (e = Mt = Ch(e, Xn)), (e = Id(l, e, Xn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Eo(t) : (Mt = e));
  }
  function qa(t, e, l, o) {
    ((Nn = qi = null), Su(e), (Oa = null), (vl = 0));
    var f = e.return;
    try {
      if (Mb(t, f, e, l, wt)) {
        ((ee = 1), co(t, Ie(l, t.current)), (Mt = null));
        return;
      }
    } catch (d) {
      if (f !== null) throw ((Mt = f), d);
      ((ee = 1), co(t, Ie(l, t.current)), (Mt = null));
      return;
    }
    e.flags & 32768
      ? (Ot || o === 1
          ? (t = !0)
          : La || (wt & 536870912) !== 0
            ? (t = !1)
            : ((hi = t = !0),
              (o === 2 || o === 9 || o === 3 || o === 6) &&
                ((o = qe.current),
                o !== null && o.tag === 13 && (o.flags |= 16384))),
        Rm(e, t))
      : Eo(e);
  }
  function Eo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Rm(e, hi);
        return;
      }
      t = e.return;
      var l = Ab(e.alternate, e, Xn);
      if (l !== null) {
        Mt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Mt = e;
        return;
      }
      Mt = e = t;
    } while (e !== null);
    ee === 0 && (ee = 5);
  }
  function Rm(t, e) {
    do {
      var l = Tb(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (Mt = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Mt = t;
        return;
      }
      Mt = t = l;
    } while (t !== null);
    ((ee = 6), (Mt = null));
  }
  function zm(t, e, l, o, f, d, y, v, C) {
    t.cancelPendingCommit = null;
    do wo();
    while (ce !== 0);
    if ((jt & 6) !== 0) throw Error(s(327));
    if (e !== null) {
      if (e === t.current) throw Error(s(177));
      if (
        ((d = e.lanes | e.childLanes),
        (d |= Wr),
        my(t, l, d, y, v, C),
        t === Qt && ((Mt = Qt = null), (wt = 0)),
        (Ba = e),
        (gi = t),
        (Gn = l),
        (ic = d),
        (ac = f),
        (_m = o),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Ub(Te, function () {
              return (Hm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (o = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || o)
      ) {
        ((o = O.T), (O.T = null), (f = Y.p), (Y.p = 2), (y = jt), (jt |= 4));
        try {
          Cb(t, e, l);
        } finally {
          ((jt = y), (Y.p = f), (O.T = o));
        }
      }
      ((ce = 1), Nm(), jm(), km());
    }
  }
  function Nm() {
    if (ce === 1) {
      ce = 0;
      var t = gi,
        e = Ba,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var o = Y.p;
        Y.p = 2;
        var f = jt;
        jt |= 4;
        try {
          dm(e, t);
          var d = vc,
            y = vh(t.containerInfo),
            v = d.focusedElem,
            C = d.selectionRange;
          if (
            y !== v &&
            v &&
            v.ownerDocument &&
            bh(v.ownerDocument.documentElement, v)
          ) {
            if (C !== null && Gr(v)) {
              var U = C.start,
                P = C.end;
              if ((P === void 0 && (P = U), "selectionStart" in v))
                ((v.selectionStart = U),
                  (v.selectionEnd = Math.min(P, v.value.length)));
              else {
                var I = v.ownerDocument || document,
                  q = (I && I.defaultView) || window;
                if (q.getSelection) {
                  var Z = q.getSelection(),
                    ft = v.textContent.length,
                    pt = Math.min(C.start, ft),
                    Gt = C.end === void 0 ? pt : Math.min(C.end, ft);
                  !Z.extend && pt > Gt && ((y = Gt), (Gt = pt), (pt = y));
                  var L = yh(v, pt),
                    R = yh(v, Gt);
                  if (
                    L &&
                    R &&
                    (Z.rangeCount !== 1 ||
                      Z.anchorNode !== L.node ||
                      Z.anchorOffset !== L.offset ||
                      Z.focusNode !== R.node ||
                      Z.focusOffset !== R.offset)
                  ) {
                    var B = I.createRange();
                    (B.setStart(L.node, L.offset),
                      Z.removeAllRanges(),
                      pt > Gt
                        ? (Z.addRange(B), Z.extend(R.node, R.offset))
                        : (B.setEnd(R.node, R.offset), Z.addRange(B)));
                  }
                }
              }
            }
            for (I = [], Z = v; (Z = Z.parentNode); )
              Z.nodeType === 1 &&
                I.push({ element: Z, left: Z.scrollLeft, top: Z.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < I.length;
              v++
            ) {
              var $ = I[v];
              (($.element.scrollLeft = $.left), ($.element.scrollTop = $.top));
            }
          }
          ((Ho = !!bc), (vc = bc = null));
        } finally {
          ((jt = f), (Y.p = o), (O.T = l));
        }
      }
      ((t.current = e), (ce = 2));
    }
  }
  function jm() {
    if (ce === 2) {
      ce = 0;
      var t = gi,
        e = Ba,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = O.T), (O.T = null));
        var o = Y.p;
        Y.p = 2;
        var f = jt;
        jt |= 4;
        try {
          rm(t, e.alternate, e);
        } finally {
          ((jt = f), (Y.p = o), (O.T = l));
        }
      }
      ce = 3;
    }
  }
  function km() {
    if (ce === 4 || ce === 3) {
      ((ce = 0), Ri());
      var t = gi,
        e = Ba,
        l = Gn,
        o = _m;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (ce = 5)
        : ((ce = 0), (Ba = gi = null), Lm(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (mi = null),
        wr(l),
        (e = e.stateNode),
        Se && typeof Se.onCommitFiberRoot == "function")
      )
        try {
          Se.onCommitFiberRoot(hn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (o !== null) {
        ((e = O.T), (f = Y.p), (Y.p = 2), (O.T = null));
        try {
          for (var d = t.onRecoverableError, y = 0; y < o.length; y++) {
            var v = o[y];
            d(v.value, { componentStack: v.stack });
          }
        } finally {
          ((O.T = e), (Y.p = f));
        }
      }
      ((Gn & 3) !== 0 && wo(),
        _n(t),
        (f = t.pendingLanes),
        (l & 261930) !== 0 && (f & 42) !== 0
          ? t === lc
            ? Ll++
            : ((Ll = 0), (lc = t))
          : (Ll = 0),
        Hl(0));
    }
  }
  function Lm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), yl(e)));
  }
  function wo() {
    return (Nm(), jm(), km(), Hm());
  }
  function Hm() {
    if (ce !== 5) return !1;
    var t = gi,
      e = ic;
    ic = 0;
    var l = wr(Gn),
      o = O.T,
      f = Y.p;
    try {
      ((Y.p = 32 > l ? 32 : l), (O.T = null), (l = ac), (ac = null));
      var d = gi,
        y = Gn;
      if (((ce = 0), (Ba = gi = null), (Gn = 0), (jt & 6) !== 0))
        throw Error(s(331));
      var v = jt;
      if (
        ((jt |= 4),
        bm(d.current),
        gm(d, d.current, y, l),
        (jt = v),
        Hl(0, !1),
        Se && typeof Se.onPostCommitFiberRoot == "function")
      )
        try {
          Se.onPostCommitFiberRoot(hn, d);
        } catch {}
      return !0;
    } finally {
      ((Y.p = f), (O.T = o), Lm(t, e));
    }
  }
  function Bm(t, e, l) {
    ((e = Ie(l, e)),
      (e = Hu(t.stateNode, e, 2)),
      (t = ri(t, e, 2)),
      t !== null && (il(t, 2), _n(t)));
  }
  function Ut(t, e, l) {
    if (t.tag === 3) Bm(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Bm(e, t, l);
          break;
        } else if (e.tag === 1) {
          var o = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof o.componentDidCatch == "function" &&
              (mi === null || !mi.has(o)))
          ) {
            ((t = Ie(l, t)),
              (l = Ud(2)),
              (o = ri(e, l, 2)),
              o !== null && (qd(l, o, e, t), il(o, 2), _n(o)));
            break;
          }
        }
        e = e.return;
      }
  }
  function rc(t, e, l) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new Rb();
      var f = new Set();
      o.set(e, f);
    } else ((f = o.get(e)), f === void 0 && ((f = new Set()), o.set(e, f)));
    f.has(l) ||
      ((tc = !0), f.add(l), (t = Lb.bind(null, t, e, l)), e.then(t, t));
  }
  function Lb(t, e, l) {
    var o = t.pingCache;
    (o !== null && o.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Qt === t &&
        (wt & l) === l &&
        (ee === 4 || (ee === 3 && (wt & 62914560) === wt && 300 > Lt() - vo)
          ? (jt & 2) === 0 && Ua(t, 0)
          : (ec |= l),
        Ha === wt && (Ha = 0)),
      _n(t));
  }
  function Um(t, e) {
    (e === 0 && (e = Nf()), (t = Hi(t, e)), t !== null && (il(t, e), _n(t)));
  }
  function Hb(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), Um(t, l));
  }
  function Bb(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var o = t.stateNode,
          f = t.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (o !== null && o.delete(e), Um(t, l));
  }
  function Ub(t, e) {
    return It(t, e);
  }
  var Ao = null,
    Ya = null,
    uc = !1,
    To = !1,
    cc = !1,
    yi = 0;
  function _n(t) {
    (t !== Ya &&
      t.next === null &&
      (Ya === null ? (Ao = Ya = t) : (Ya = Ya.next = t)),
      (To = !0),
      uc || ((uc = !0), Yb()));
  }
  function Hl(t, e) {
    if (!cc && To) {
      cc = !0;
      do
        for (var l = !1, o = Ao; o !== null; ) {
          if (t !== 0) {
            var f = o.pendingLanes;
            if (f === 0) var d = 0;
            else {
              var y = o.suspendedLanes,
                v = o.pingedLanes;
              ((d = (1 << (31 - He(42 | t) + 1)) - 1),
                (d &= f & ~(y & ~v)),
                (d = d & 201326741 ? (d & 201326741) | 1 : d ? d | 2 : 0));
            }
            d !== 0 && ((l = !0), Xm(o, d));
          } else
            ((d = wt),
              (d = Ds(
                o,
                o === Qt ? d : 0,
                o.cancelPendingCommit !== null || o.timeoutHandle !== -1,
              )),
              (d & 3) === 0 || nl(o, d) || ((l = !0), Xm(o, d)));
          o = o.next;
        }
      while (l);
      cc = !1;
    }
  }
  function qb() {
    qm();
  }
  function qm() {
    To = uc = !1;
    var t = 0;
    yi !== 0 && Pb() && (t = yi);
    for (var e = Lt(), l = null, o = Ao; o !== null; ) {
      var f = o.next,
        d = Ym(o, e);
      (d === 0
        ? ((o.next = null),
          l === null ? (Ao = f) : (l.next = f),
          f === null && (Ya = l))
        : ((l = o), (t !== 0 || (d & 3) !== 0) && (To = !0)),
        (o = f));
    }
    ((ce !== 0 && ce !== 5) || Hl(t), yi !== 0 && (yi = 0));
  }
  function Ym(t, e) {
    for (
      var l = t.suspendedLanes,
        o = t.pingedLanes,
        f = t.expirationTimes,
        d = t.pendingLanes & -62914561;
      0 < d;
    ) {
      var y = 31 - He(d),
        v = 1 << y,
        C = f[y];
      (C === -1
        ? ((v & l) === 0 || (v & o) !== 0) && (f[y] = dy(v, e))
        : C <= e && (t.expiredLanes |= v),
        (d &= ~v));
    }
    if (
      ((e = Qt),
      (l = wt),
      (l = Ds(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (o = t.callbackNode),
      l === 0 ||
        (t === e && (Bt === 2 || Bt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        o !== null && o !== null && yn(o),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || nl(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((o !== null && yn(o), wr(l))) {
        case 2:
        case 8:
          l = ge;
          break;
        case 32:
          l = Te;
          break;
        case 268435456:
          l = el;
          break;
        default:
          l = Te;
      }
      return (
        (o = Vm.bind(null, t)),
        (l = It(l, o)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      o !== null && o !== null && yn(o),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Vm(t, e) {
    if (ce !== 0 && ce !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (wo() && t.callbackNode !== l) return null;
    var o = wt;
    return (
      (o = Ds(
        t,
        t === Qt ? o : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      o === 0
        ? null
        : (Mm(t, o, e),
          Ym(t, Lt()),
          t.callbackNode != null && t.callbackNode === l
            ? Vm.bind(null, t)
            : null)
    );
  }
  function Xm(t, e) {
    if (wo()) return null;
    Mm(t, e, !0);
  }
  function Yb() {
    Ib(function () {
      (jt & 6) !== 0 ? It(ne, qb) : qm();
    });
  }
  function fc() {
    if (yi === 0) {
      var t = Aa;
      (t === 0 && ((t = Ts), (Ts <<= 1), (Ts & 261888) === 0 && (Ts = 256)),
        (yi = t));
    }
    return yi;
  }
  function Gm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : js("" + t);
  }
  function Qm(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function Vb(t, e, l, o, f) {
    if (e === "submit" && l && l.stateNode === f) {
      var d = Gm((f[Ce] || null).action),
        y = o.submitter;
      y &&
        ((e = (e = y[Ce] || null)
          ? Gm(e.formAction)
          : y.getAttribute("formAction")),
        e !== null && ((d = e), (y = null)));
      var v = new Bs("action", "action", null, o, f);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (o.defaultPrevented) {
                if (yi !== 0) {
                  var C = y ? Qm(f, y) : new FormData(f);
                  Ru(
                    l,
                    { pending: !0, data: C, method: f.method, action: d },
                    null,
                    C,
                  );
                }
              } else
                typeof d == "function" &&
                  (v.preventDefault(),
                  (C = y ? Qm(f, y) : new FormData(f)),
                  Ru(
                    l,
                    { pending: !0, data: C, method: f.method, action: d },
                    d,
                    C,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var hc = 0; hc < Kr.length; hc++) {
    var dc = Kr[hc],
      Xb = dc.toLowerCase(),
      Gb = dc[0].toUpperCase() + dc.slice(1);
    dn(Xb, "on" + Gb);
  }
  (dn(Sh, "onAnimationEnd"),
    dn(Mh, "onAnimationIteration"),
    dn(Eh, "onAnimationStart"),
    dn("dblclick", "onDoubleClick"),
    dn("focusin", "onFocus"),
    dn("focusout", "onBlur"),
    dn(sb, "onTransitionRun"),
    dn(ob, "onTransitionStart"),
    dn(rb, "onTransitionCancel"),
    dn(wh, "onTransitionEnd"),
    ha("onMouseEnter", ["mouseout", "mouseover"]),
    ha("onMouseLeave", ["mouseout", "mouseover"]),
    ha("onPointerEnter", ["pointerout", "pointerover"]),
    ha("onPointerLeave", ["pointerout", "pointerover"]),
    Ni(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ni(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ni("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ni(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ni(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ni(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Bl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Qb = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Bl),
    );
  function Fm(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var o = t[l],
        f = o.event;
      o = o.listeners;
      t: {
        var d = void 0;
        if (e)
          for (var y = o.length - 1; 0 <= y; y--) {
            var v = o[y],
              C = v.instance,
              U = v.currentTarget;
            if (((v = v.listener), C !== d && f.isPropagationStopped()))
              break t;
            ((d = v), (f.currentTarget = U));
            try {
              d(f);
            } catch (P) {
              Ys(P);
            }
            ((f.currentTarget = null), (d = C));
          }
        else
          for (y = 0; y < o.length; y++) {
            if (
              ((v = o[y]),
              (C = v.instance),
              (U = v.currentTarget),
              (v = v.listener),
              C !== d && f.isPropagationStopped())
            )
              break t;
            ((d = v), (f.currentTarget = U));
            try {
              d(f);
            } catch (P) {
              Ys(P);
            }
            ((f.currentTarget = null), (d = C));
          }
      }
    }
  }
  function Et(t, e) {
    var l = e[Ar];
    l === void 0 && (l = e[Ar] = new Set());
    var o = t + "__bubble";
    l.has(o) || (Zm(e, t, 2, !1), l.add(o));
  }
  function mc(t, e, l) {
    var o = 0;
    (e && (o |= 4), Zm(l, t, o, e));
  }
  var Co = "_reactListening" + Math.random().toString(36).slice(2);
  function gc(t) {
    if (!t[Co]) {
      ((t[Co] = !0),
        qf.forEach(function (l) {
          l !== "selectionchange" && (Qb.has(l) || mc(l, !1, t), mc(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Co] || ((e[Co] = !0), mc("selectionchange", !1, e));
    }
  }
  function Zm(t, e, l, o) {
    switch (Sg(e)) {
      case 2:
        var f = vv;
        break;
      case 8:
        f = xv;
        break;
      default:
        f = Dc;
    }
    ((l = f.bind(null, e, l, t)),
      (f = void 0),
      !kr ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (f = !0),
      o
        ? f !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: f })
          : t.addEventListener(e, l, !0)
        : f !== void 0
          ? t.addEventListener(e, l, { passive: f })
          : t.addEventListener(e, l, !1));
  }
  function pc(t, e, l, o, f) {
    var d = o;
    if ((e & 1) === 0 && (e & 2) === 0 && o !== null)
      t: for (;;) {
        if (o === null) return;
        var y = o.tag;
        if (y === 3 || y === 4) {
          var v = o.stateNode.containerInfo;
          if (v === f) break;
          if (y === 4)
            for (y = o.return; y !== null; ) {
              var C = y.tag;
              if ((C === 3 || C === 4) && y.stateNode.containerInfo === f)
                return;
              y = y.return;
            }
          for (; v !== null; ) {
            if (((y = ua(v)), y === null)) return;
            if (((C = y.tag), C === 5 || C === 6 || C === 26 || C === 27)) {
              o = d = y;
              continue t;
            }
            v = v.parentNode;
          }
        }
        o = o.return;
      }
    $f(function () {
      var U = d,
        P = Nr(l),
        I = [];
      t: {
        var q = Ah.get(t);
        if (q !== void 0) {
          var Z = Bs,
            ft = t;
          switch (t) {
            case "keypress":
              if (Ls(l) === 0) break t;
            case "keydown":
            case "keyup":
              Z = By;
              break;
            case "focusin":
              ((ft = "focus"), (Z = Ur));
              break;
            case "focusout":
              ((ft = "blur"), (Z = Ur));
              break;
            case "beforeblur":
            case "afterblur":
              Z = Ur;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Z = eh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Z = Ay;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Z = Yy;
              break;
            case Sh:
            case Mh:
            case Eh:
              Z = Oy;
              break;
            case wh:
              Z = Xy;
              break;
            case "scroll":
            case "scrollend":
              Z = Ey;
              break;
            case "wheel":
              Z = Qy;
              break;
            case "copy":
            case "cut":
            case "paste":
              Z = Ry;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Z = ih;
              break;
            case "toggle":
            case "beforetoggle":
              Z = Zy;
          }
          var pt = (e & 4) !== 0,
            Gt = !pt && (t === "scroll" || t === "scrollend"),
            L = pt ? (q !== null ? q + "Capture" : null) : q;
          pt = [];
          for (var R = U, B; R !== null; ) {
            var $ = R;
            if (
              ((B = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                B === null ||
                L === null ||
                (($ = sl(R, L)), $ != null && pt.push(Ul(R, $, B))),
              Gt)
            )
              break;
            R = R.return;
          }
          0 < pt.length &&
            ((q = new Z(q, ft, null, l, P)),
            I.push({ event: q, listeners: pt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((q = t === "mouseover" || t === "pointerover"),
            (Z = t === "mouseout" || t === "pointerout"),
            q &&
              l !== zr &&
              (ft = l.relatedTarget || l.fromElement) &&
              (ua(ft) || ft[ra]))
          )
            break t;
          if (
            (Z || q) &&
            ((q =
              P.window === P
                ? P
                : (q = P.ownerDocument)
                  ? q.defaultView || q.parentWindow
                  : window),
            Z
              ? ((ft = l.relatedTarget || l.toElement),
                (Z = U),
                (ft = ft ? ua(ft) : null),
                ft !== null &&
                  ((Gt = u(ft)),
                  (pt = ft.tag),
                  ft !== Gt || (pt !== 5 && pt !== 27 && pt !== 6)) &&
                  (ft = null))
              : ((Z = null), (ft = U)),
            Z !== ft)
          ) {
            if (
              ((pt = eh),
              ($ = "onMouseLeave"),
              (L = "onMouseEnter"),
              (R = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((pt = ih),
                ($ = "onPointerLeave"),
                (L = "onPointerEnter"),
                (R = "pointer")),
              (Gt = Z == null ? q : ll(Z)),
              (B = ft == null ? q : ll(ft)),
              (q = new pt($, R + "leave", Z, l, P)),
              (q.target = Gt),
              (q.relatedTarget = B),
              ($ = null),
              ua(P) === U &&
                ((pt = new pt(L, R + "enter", ft, l, P)),
                (pt.target = B),
                (pt.relatedTarget = Gt),
                ($ = pt)),
              (Gt = $),
              Z && ft)
            )
              e: {
                for (pt = Fb, L = Z, R = ft, B = 0, $ = L; $; $ = pt($)) B++;
                $ = 0;
                for (var mt = R; mt; mt = pt(mt)) $++;
                for (; 0 < B - $; ) ((L = pt(L)), B--);
                for (; 0 < $ - B; ) ((R = pt(R)), $--);
                for (; B--; ) {
                  if (L === R || (R !== null && L === R.alternate)) {
                    pt = L;
                    break e;
                  }
                  ((L = pt(L)), (R = pt(R)));
                }
                pt = null;
              }
            else pt = null;
            (Z !== null && Km(I, q, Z, pt, !1),
              ft !== null && Gt !== null && Km(I, Gt, ft, pt, !0));
          }
        }
        t: {
          if (
            ((q = U ? ll(U) : window),
            (Z = q.nodeName && q.nodeName.toLowerCase()),
            Z === "select" || (Z === "input" && q.type === "file"))
          )
            var zt = fh;
          else if (uh(q))
            if (hh) zt = ib;
            else {
              zt = eb;
              var dt = tb;
            }
          else
            ((Z = q.nodeName),
              !Z ||
              Z.toLowerCase() !== "input" ||
              (q.type !== "checkbox" && q.type !== "radio")
                ? U && Rr(U.elementType) && (zt = fh)
                : (zt = nb));
          if (zt && (zt = zt(t, U))) {
            ch(I, zt, l, P);
            break t;
          }
          (dt && dt(t, q, U),
            t === "focusout" &&
              U &&
              q.type === "number" &&
              U.memoizedProps.value != null &&
              Dr(q, "number", q.value));
        }
        switch (((dt = U ? ll(U) : window), t)) {
          case "focusin":
            (uh(dt) || dt.contentEditable === "true") &&
              ((ba = dt), (Qr = U), (ml = null));
            break;
          case "focusout":
            ml = Qr = ba = null;
            break;
          case "mousedown":
            Fr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Fr = !1), xh(I, l, P));
            break;
          case "selectionchange":
            if (lb) break;
          case "keydown":
          case "keyup":
            xh(I, l, P);
        }
        var xt;
        if (Yr)
          t: {
            switch (t) {
              case "compositionstart":
                var At = "onCompositionStart";
                break t;
              case "compositionend":
                At = "onCompositionEnd";
                break t;
              case "compositionupdate":
                At = "onCompositionUpdate";
                break t;
            }
            At = void 0;
          }
        else
          ya
            ? oh(t, l) && (At = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (At = "onCompositionStart");
        (At &&
          (ah &&
            l.locale !== "ko" &&
            (ya || At !== "onCompositionStart"
              ? At === "onCompositionEnd" && ya && (xt = If())
              : ((ei = P),
                (Lr = "value" in ei ? ei.value : ei.textContent),
                (ya = !0))),
          (dt = Oo(U, At)),
          0 < dt.length &&
            ((At = new nh(At, t, null, l, P)),
            I.push({ event: At, listeners: dt }),
            xt
              ? (At.data = xt)
              : ((xt = rh(l)), xt !== null && (At.data = xt)))),
          (xt = Wy ? Jy(t, l) : Py(t, l)) &&
            ((At = Oo(U, "onBeforeInput")),
            0 < At.length &&
              ((dt = new nh("onBeforeInput", "beforeinput", null, l, P)),
              I.push({ event: dt, listeners: At }),
              (dt.data = xt))),
          Vb(I, t, U, l, P));
      }
      Fm(I, e);
    });
  }
  function Ul(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function Oo(t, e) {
    for (var l = e + "Capture", o = []; t !== null; ) {
      var f = t,
        d = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          d === null ||
          ((f = sl(t, l)),
          f != null && o.unshift(Ul(t, f, d)),
          (f = sl(t, e)),
          f != null && o.push(Ul(t, f, d))),
        t.tag === 3)
      )
        return o;
      t = t.return;
    }
    return [];
  }
  function Fb(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Km(t, e, l, o, f) {
    for (var d = e._reactName, y = []; l !== null && l !== o; ) {
      var v = l,
        C = v.alternate,
        U = v.stateNode;
      if (((v = v.tag), C !== null && C === o)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        U === null ||
        ((C = U),
        f
          ? ((U = sl(l, d)), U != null && y.unshift(Ul(l, U, C)))
          : f || ((U = sl(l, d)), U != null && y.push(Ul(l, U, C)))),
        (l = l.return));
    }
    y.length !== 0 && t.push({ event: e, listeners: y });
  }
  var Zb = /\r\n?/g,
    Kb = /\u0000|\uFFFD/g;
  function Wm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Zb,
        `
`,
      )
      .replace(Kb, "");
  }
  function Jm(t, e) {
    return ((e = Wm(e)), Wm(t) === e);
  }
  function Xt(t, e, l, o, f, d) {
    switch (l) {
      case "children":
        typeof o == "string"
          ? e === "body" || (e === "textarea" && o === "") || ma(t, o)
          : (typeof o == "number" || typeof o == "bigint") &&
            e !== "body" &&
            ma(t, "" + o);
        break;
      case "className":
        zs(t, "class", o);
        break;
      case "tabIndex":
        zs(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        zs(t, l, o);
        break;
      case "style":
        Jf(t, o, d);
        break;
      case "data":
        if (e !== "object") {
          zs(t, "data", o);
          break;
        }
      case "src":
      case "href":
        if (o === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "symbol" ||
          typeof o == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((o = js("" + o)), t.setAttribute(l, o));
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof d == "function" &&
            (l === "formAction"
              ? (e !== "input" && Xt(t, e, "name", f.name, f, null),
                Xt(t, e, "formEncType", f.formEncType, f, null),
                Xt(t, e, "formMethod", f.formMethod, f, null),
                Xt(t, e, "formTarget", f.formTarget, f, null))
              : (Xt(t, e, "encType", f.encType, f, null),
                Xt(t, e, "method", f.method, f, null),
                Xt(t, e, "target", f.target, f, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((o = js("" + o)), t.setAttribute(l, o));
        break;
      case "onClick":
        o != null && (t.onclick = On);
        break;
      case "onScroll":
        o != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Et("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((l = o.__html), l != null)) {
            if (f.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          o == null ||
          typeof o == "function" ||
          typeof o == "boolean" ||
          typeof o == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = js("" + o)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(l, "" + o)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        o === !0
          ? t.setAttribute(l, "")
          : o !== !1 &&
              o != null &&
              typeof o != "function" &&
              typeof o != "symbol"
            ? t.setAttribute(l, o)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        !isNaN(o) &&
        1 <= o
          ? t.setAttribute(l, o)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o)
          ? t.removeAttribute(l)
          : t.setAttribute(l, o);
        break;
      case "popover":
        (Et("beforetoggle", t), Et("toggle", t), Rs(t, "popover", o));
        break;
      case "xlinkActuate":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        Cn(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        Cn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Rs(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Sy.get(l) || l), Rs(t, l, o));
    }
  }
  function yc(t, e, l, o, f, d) {
    switch (l) {
      case "style":
        Jf(t, o, d);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o)) throw Error(s(61));
          if (((l = o.__html), l != null)) {
            if (f.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof o == "string"
          ? ma(t, o)
          : (typeof o == "number" || typeof o == "bigint") && ma(t, "" + o);
        break;
      case "onScroll":
        o != null && Et("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Et("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = On);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Yf.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((f = l.endsWith("Capture")),
              (e = l.slice(2, f ? l.length - 7 : void 0)),
              (d = t[Ce] || null),
              (d = d != null ? d[l] : null),
              typeof d == "function" && t.removeEventListener(e, d, f),
              typeof o == "function")
            ) {
              (typeof d != "function" &&
                d !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, o, f));
              break t;
            }
            l in t
              ? (t[l] = o)
              : o === !0
                ? t.setAttribute(l, "")
                : Rs(t, l, o);
          }
    }
  }
  function xe(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Et("error", t), Et("load", t));
        var o = !1,
          f = !1,
          d;
        for (d in l)
          if (l.hasOwnProperty(d)) {
            var y = l[d];
            if (y != null)
              switch (d) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  f = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, e));
                default:
                  Xt(t, e, d, y, l, null);
              }
          }
        (f && Xt(t, e, "srcSet", l.srcSet, l, null),
          o && Xt(t, e, "src", l.src, l, null));
        return;
      case "input":
        Et("invalid", t);
        var v = (d = y = f = null),
          C = null,
          U = null;
        for (o in l)
          if (l.hasOwnProperty(o)) {
            var P = l[o];
            if (P != null)
              switch (o) {
                case "name":
                  f = P;
                  break;
                case "type":
                  y = P;
                  break;
                case "checked":
                  C = P;
                  break;
                case "defaultChecked":
                  U = P;
                  break;
                case "value":
                  d = P;
                  break;
                case "defaultValue":
                  v = P;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (P != null) throw Error(s(137, e));
                  break;
                default:
                  Xt(t, e, o, P, l, null);
              }
          }
        Ff(t, d, v, C, U, y, f, !1);
        return;
      case "select":
        (Et("invalid", t), (o = y = d = null));
        for (f in l)
          if (l.hasOwnProperty(f) && ((v = l[f]), v != null))
            switch (f) {
              case "value":
                d = v;
                break;
              case "defaultValue":
                y = v;
                break;
              case "multiple":
                o = v;
              default:
                Xt(t, e, f, v, l, null);
            }
        ((e = d),
          (l = y),
          (t.multiple = !!o),
          e != null ? da(t, !!o, e, !1) : l != null && da(t, !!o, l, !0));
        return;
      case "textarea":
        (Et("invalid", t), (d = f = o = null));
        for (y in l)
          if (l.hasOwnProperty(y) && ((v = l[y]), v != null))
            switch (y) {
              case "value":
                o = v;
                break;
              case "defaultValue":
                f = v;
                break;
              case "children":
                d = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(s(91));
                break;
              default:
                Xt(t, e, y, v, l, null);
            }
        Kf(t, o, f, d);
        return;
      case "option":
        for (C in l)
          l.hasOwnProperty(C) &&
            ((o = l[C]), o != null) &&
            (C === "selected"
              ? (t.selected =
                  o && typeof o != "function" && typeof o != "symbol")
              : Xt(t, e, C, o, l, null));
        return;
      case "dialog":
        (Et("beforetoggle", t),
          Et("toggle", t),
          Et("cancel", t),
          Et("close", t));
        break;
      case "iframe":
      case "object":
        Et("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < Bl.length; o++) Et(Bl[o], t);
        break;
      case "image":
        (Et("error", t), Et("load", t));
        break;
      case "details":
        Et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Et("error", t), Et("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (U in l)
          if (l.hasOwnProperty(U) && ((o = l[U]), o != null))
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, e));
              default:
                Xt(t, e, U, o, l, null);
            }
        return;
      default:
        if (Rr(e)) {
          for (P in l)
            l.hasOwnProperty(P) &&
              ((o = l[P]), o !== void 0 && yc(t, e, P, o, l, void 0));
          return;
        }
    }
    for (v in l)
      l.hasOwnProperty(v) && ((o = l[v]), o != null && Xt(t, e, v, o, l, null));
  }
  function Wb(t, e, l, o) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var f = null,
          d = null,
          y = null,
          v = null,
          C = null,
          U = null,
          P = null;
        for (Z in l) {
          var I = l[Z];
          if (l.hasOwnProperty(Z) && I != null)
            switch (Z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                C = I;
              default:
                o.hasOwnProperty(Z) || Xt(t, e, Z, null, o, I);
            }
        }
        for (var q in o) {
          var Z = o[q];
          if (((I = l[q]), o.hasOwnProperty(q) && (Z != null || I != null)))
            switch (q) {
              case "type":
                d = Z;
                break;
              case "name":
                f = Z;
                break;
              case "checked":
                U = Z;
                break;
              case "defaultChecked":
                P = Z;
                break;
              case "value":
                y = Z;
                break;
              case "defaultValue":
                v = Z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null) throw Error(s(137, e));
                break;
              default:
                Z !== I && Xt(t, e, q, Z, o, I);
            }
        }
        Or(t, y, v, C, U, P, d, f);
        return;
      case "select":
        Z = y = v = q = null;
        for (d in l)
          if (((C = l[d]), l.hasOwnProperty(d) && C != null))
            switch (d) {
              case "value":
                break;
              case "multiple":
                Z = C;
              default:
                o.hasOwnProperty(d) || Xt(t, e, d, null, o, C);
            }
        for (f in o)
          if (
            ((d = o[f]),
            (C = l[f]),
            o.hasOwnProperty(f) && (d != null || C != null))
          )
            switch (f) {
              case "value":
                q = d;
                break;
              case "defaultValue":
                v = d;
                break;
              case "multiple":
                y = d;
              default:
                d !== C && Xt(t, e, f, d, o, C);
            }
        ((e = v),
          (l = y),
          (o = Z),
          q != null
            ? da(t, !!l, q, !1)
            : !!o != !!l &&
              (e != null ? da(t, !!l, e, !0) : da(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        Z = q = null;
        for (v in l)
          if (
            ((f = l[v]),
            l.hasOwnProperty(v) && f != null && !o.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(t, e, v, null, o, f);
            }
        for (y in o)
          if (
            ((f = o[y]),
            (d = l[y]),
            o.hasOwnProperty(y) && (f != null || d != null))
          )
            switch (y) {
              case "value":
                q = f;
                break;
              case "defaultValue":
                Z = f;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                f !== d && Xt(t, e, y, f, o, d);
            }
        Zf(t, q, Z);
        return;
      case "option":
        for (var ft in l)
          ((q = l[ft]),
            l.hasOwnProperty(ft) &&
              q != null &&
              !o.hasOwnProperty(ft) &&
              (ft === "selected"
                ? (t.selected = !1)
                : Xt(t, e, ft, null, o, q)));
        for (C in o)
          ((q = o[C]),
            (Z = l[C]),
            o.hasOwnProperty(C) &&
              q !== Z &&
              (q != null || Z != null) &&
              (C === "selected"
                ? (t.selected =
                    q && typeof q != "function" && typeof q != "symbol")
                : Xt(t, e, C, q, o, Z)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var pt in l)
          ((q = l[pt]),
            l.hasOwnProperty(pt) &&
              q != null &&
              !o.hasOwnProperty(pt) &&
              Xt(t, e, pt, null, o, q));
        for (U in o)
          if (
            ((q = o[U]),
            (Z = l[U]),
            o.hasOwnProperty(U) && q !== Z && (q != null || Z != null))
          )
            switch (U) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (q != null) throw Error(s(137, e));
                break;
              default:
                Xt(t, e, U, q, o, Z);
            }
        return;
      default:
        if (Rr(e)) {
          for (var Gt in l)
            ((q = l[Gt]),
              l.hasOwnProperty(Gt) &&
                q !== void 0 &&
                !o.hasOwnProperty(Gt) &&
                yc(t, e, Gt, void 0, o, q));
          for (P in o)
            ((q = o[P]),
              (Z = l[P]),
              !o.hasOwnProperty(P) ||
                q === Z ||
                (q === void 0 && Z === void 0) ||
                yc(t, e, P, q, o, Z));
          return;
        }
    }
    for (var L in l)
      ((q = l[L]),
        l.hasOwnProperty(L) &&
          q != null &&
          !o.hasOwnProperty(L) &&
          Xt(t, e, L, null, o, q));
    for (I in o)
      ((q = o[I]),
        (Z = l[I]),
        !o.hasOwnProperty(I) ||
          q === Z ||
          (q == null && Z == null) ||
          Xt(t, e, I, q, o, Z));
  }
  function Pm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Jb() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), o = 0;
        o < l.length;
        o++
      ) {
        var f = l[o],
          d = f.transferSize,
          y = f.initiatorType,
          v = f.duration;
        if (d && v && Pm(y)) {
          for (y = 0, v = f.responseEnd, o += 1; o < l.length; o++) {
            var C = l[o],
              U = C.startTime;
            if (U > v) break;
            var P = C.transferSize,
              I = C.initiatorType;
            P &&
              Pm(I) &&
              ((C = C.responseEnd), (y += P * (C < v ? 1 : (v - U) / (C - U))));
          }
          if ((--o, (e += (8 * (d + y)) / (f.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var bc = null,
    vc = null;
  function Do(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function $m(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Im(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function xc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var _c = null;
  function Pb() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === _c
        ? !1
        : ((_c = t), !0)
      : ((_c = null), !1);
  }
  var tg = typeof setTimeout == "function" ? setTimeout : void 0,
    $b = typeof clearTimeout == "function" ? clearTimeout : void 0,
    eg = typeof Promise == "function" ? Promise : void 0,
    Ib =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof eg < "u"
          ? function (t) {
              return eg.resolve(null).then(t).catch(tv);
            }
          : tg;
  function tv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function bi(t) {
    return t === "head";
  }
  function ng(t, e) {
    var l = e,
      o = 0;
    do {
      var f = l.nextSibling;
      if ((t.removeChild(l), f && f.nodeType === 8))
        if (((l = f.data), l === "/$" || l === "/&")) {
          if (o === 0) {
            (t.removeChild(f), Qa(e));
            return;
          }
          o--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          o++;
        else if (l === "html") ql(t.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = t.ownerDocument.head), ql(l));
          for (var d = l.firstChild; d; ) {
            var y = d.nextSibling,
              v = d.nodeName;
            (d[al] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(d),
              (d = y));
          }
        } else l === "body" && ql(t.ownerDocument.body);
      l = f;
    } while (l);
    Qa(e);
  }
  function ig(t, e) {
    var l = t;
    t = 0;
    do {
      var o = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        o && o.nodeType === 8)
      )
        if (((l = o.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = o;
    } while (l);
  }
  function Sc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Sc(l), Tr(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function ev(t, e, l, o) {
    for (; t.nodeType === 1; ) {
      var f = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (o) {
        if (!t[al])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((d = t.getAttribute("rel")),
                d === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                d !== f.rel ||
                t.getAttribute("href") !==
                  (f.href == null || f.href === "" ? null : f.href) ||
                t.getAttribute("crossorigin") !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute("title") !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((d = t.getAttribute("src")),
                (d !== (f.src == null ? null : f.src) ||
                  t.getAttribute("type") !== (f.type == null ? null : f.type) ||
                  t.getAttribute("crossorigin") !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  d &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var d = f.name == null ? null : "" + f.name;
        if (f.type === "hidden" && t.getAttribute("name") === d) return t;
      } else return t;
      if (((t = ln(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function nv(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = ln(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ag(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = ln(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Mc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ec(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function iv(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var o = function () {
        (e(), l.removeEventListener("DOMContentLoaded", o));
      };
      (l.addEventListener("DOMContentLoaded", o), (t._reactRetry = o));
    }
  }
  function ln(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var wc = null;
  function lg(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return ln(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function sg(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function og(t, e, l) {
    switch (((e = Do(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(s(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(s(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function ql(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Tr(t);
  }
  var sn = new Map(),
    rg = new Set();
  function Ro(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Qn = Y.d;
  Y.d = { f: av, r: lv, D: sv, C: ov, L: rv, m: uv, X: fv, S: cv, M: hv };
  function av() {
    var t = Qn.f(),
      e = So();
    return t || e;
  }
  function lv(t) {
    var e = ca(t);
    e !== null && e.tag === 5 && e.type === "form" ? wd(e) : Qn.r(t);
  }
  var Va = typeof document > "u" ? null : document;
  function ug(t, e, l) {
    var o = Va;
    if (o && typeof e == "string" && e) {
      var f = Pe(e);
      ((f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof l == "string" && (f += '[crossorigin="' + l + '"]'),
        rg.has(f) ||
          (rg.add(f),
          (t = { rel: t, crossOrigin: l, href: e }),
          o.querySelector(f) === null &&
            ((e = o.createElement("link")),
            xe(e, "link", t),
            fe(e),
            o.head.appendChild(e))));
    }
  }
  function sv(t) {
    (Qn.D(t), ug("dns-prefetch", t, null));
  }
  function ov(t, e) {
    (Qn.C(t, e), ug("preconnect", t, e));
  }
  function rv(t, e, l) {
    Qn.L(t, e, l);
    var o = Va;
    if (o && t && e) {
      var f = 'link[rel="preload"][as="' + Pe(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((f += '[imagesrcset="' + Pe(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (f += '[imagesizes="' + Pe(l.imageSizes) + '"]'))
        : (f += '[href="' + Pe(t) + '"]');
      var d = f;
      switch (e) {
        case "style":
          d = Xa(t);
          break;
        case "script":
          d = Ga(t);
      }
      sn.has(d) ||
        ((t = b(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        sn.set(d, t),
        o.querySelector(f) !== null ||
          (e === "style" && o.querySelector(Yl(d))) ||
          (e === "script" && o.querySelector(Vl(d))) ||
          ((e = o.createElement("link")),
          xe(e, "link", t),
          fe(e),
          o.head.appendChild(e)));
    }
  }
  function uv(t, e) {
    Qn.m(t, e);
    var l = Va;
    if (l && t) {
      var o = e && typeof e.as == "string" ? e.as : "script",
        f =
          'link[rel="modulepreload"][as="' + Pe(o) + '"][href="' + Pe(t) + '"]',
        d = f;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Ga(t);
      }
      if (
        !sn.has(d) &&
        ((t = b({ rel: "modulepreload", href: t }, e)),
        sn.set(d, t),
        l.querySelector(f) === null)
      ) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Vl(d))) return;
        }
        ((o = l.createElement("link")),
          xe(o, "link", t),
          fe(o),
          l.head.appendChild(o));
      }
    }
  }
  function cv(t, e, l) {
    Qn.S(t, e, l);
    var o = Va;
    if (o && t) {
      var f = fa(o).hoistableStyles,
        d = Xa(t);
      e = e || "default";
      var y = f.get(d);
      if (!y) {
        var v = { loading: 0, preload: null };
        if ((y = o.querySelector(Yl(d)))) v.loading = 5;
        else {
          ((t = b({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = sn.get(d)) && Ac(t, l));
          var C = (y = o.createElement("link"));
          (fe(C),
            xe(C, "link", t),
            (C._p = new Promise(function (U, P) {
              ((C.onload = U), (C.onerror = P));
            })),
            C.addEventListener("load", function () {
              v.loading |= 1;
            }),
            C.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            zo(y, e, o));
        }
        ((y = { type: "stylesheet", instance: y, count: 1, state: v }),
          f.set(d, y));
      }
    }
  }
  function fv(t, e) {
    Qn.X(t, e);
    var l = Va;
    if (l && t) {
      var o = fa(l).hoistableScripts,
        f = Ga(t),
        d = o.get(f);
      d ||
        ((d = l.querySelector(Vl(f))),
        d ||
          ((t = b({ src: t, async: !0 }, e)),
          (e = sn.get(f)) && Tc(t, e),
          (d = l.createElement("script")),
          fe(d),
          xe(d, "link", t),
          l.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(f, d));
    }
  }
  function hv(t, e) {
    Qn.M(t, e);
    var l = Va;
    if (l && t) {
      var o = fa(l).hoistableScripts,
        f = Ga(t),
        d = o.get(f);
      d ||
        ((d = l.querySelector(Vl(f))),
        d ||
          ((t = b({ src: t, async: !0, type: "module" }, e)),
          (e = sn.get(f)) && Tc(t, e),
          (d = l.createElement("script")),
          fe(d),
          xe(d, "link", t),
          l.head.appendChild(d)),
        (d = { type: "script", instance: d, count: 1, state: null }),
        o.set(f, d));
    }
  }
  function cg(t, e, l, o) {
    var f = (f = ot.current) ? Ro(f) : null;
    if (!f) throw Error(s(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Xa(l.href)),
            (l = fa(f).hoistableStyles),
            (o = l.get(e)),
            o ||
              ((o = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, o)),
            o)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Xa(l.href);
          var d = fa(f).hoistableStyles,
            y = d.get(t);
          if (
            (y ||
              ((f = f.ownerDocument || f),
              (y = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              d.set(t, y),
              (d = f.querySelector(Yl(t))) &&
                !d._p &&
                ((y.instance = d), (y.state.loading = 5)),
              sn.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                sn.set(t, l),
                d || dv(f, t, l, y.state))),
            e && o === null)
          )
            throw Error(s(528, ""));
          return y;
        }
        if (e && o !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Ga(l)),
              (l = fa(f).hoistableScripts),
              (o = l.get(e)),
              o ||
                ((o = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, o)),
              o)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function Xa(t) {
    return 'href="' + Pe(t) + '"';
  }
  function Yl(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function fg(t) {
    return b({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function dv(t, e, l, o) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (o.loading = 1)
      : ((e = t.createElement("link")),
        (o.preload = e),
        e.addEventListener("load", function () {
          return (o.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (o.loading |= 2);
        }),
        xe(e, "link", l),
        fe(e),
        t.head.appendChild(e));
  }
  function Ga(t) {
    return '[src="' + Pe(t) + '"]';
  }
  function Vl(t) {
    return "script[async]" + t;
  }
  function hg(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + Pe(l.href) + '"]');
          if (o) return ((e.instance = o), fe(o), o);
          var f = b({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (o = (t.ownerDocument || t).createElement("style")),
            fe(o),
            xe(o, "style", f),
            zo(o, l.precedence, t),
            (e.instance = o)
          );
        case "stylesheet":
          f = Xa(l.href);
          var d = t.querySelector(Yl(f));
          if (d) return ((e.state.loading |= 4), (e.instance = d), fe(d), d);
          ((o = fg(l)),
            (f = sn.get(f)) && Ac(o, f),
            (d = (t.ownerDocument || t).createElement("link")),
            fe(d));
          var y = d;
          return (
            (y._p = new Promise(function (v, C) {
              ((y.onload = v), (y.onerror = C));
            })),
            xe(d, "link", o),
            (e.state.loading |= 4),
            zo(d, l.precedence, t),
            (e.instance = d)
          );
        case "script":
          return (
            (d = Ga(l.src)),
            (f = t.querySelector(Vl(d)))
              ? ((e.instance = f), fe(f), f)
              : ((o = l),
                (f = sn.get(d)) && ((o = b({}, l)), Tc(o, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement("script")),
                fe(f),
                xe(f, "link", o),
                t.head.appendChild(f),
                (e.instance = f))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((o = e.instance), (e.state.loading |= 4), zo(o, l.precedence, t));
    return e.instance;
  }
  function zo(t, e, l) {
    for (
      var o = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = o.length ? o[o.length - 1] : null,
        d = f,
        y = 0;
      y < o.length;
      y++
    ) {
      var v = o[y];
      if (v.dataset.precedence === e) d = v;
      else if (d !== f) break;
    }
    d
      ? d.parentNode.insertBefore(t, d.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function Ac(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Tc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var No = null;
  function dg(t, e, l) {
    if (No === null) {
      var o = new Map(),
        f = (No = new Map());
      f.set(l, o);
    } else ((f = No), (o = f.get(l)), o || ((o = new Map()), f.set(l, o)));
    if (o.has(t)) return o;
    for (
      o.set(t, null), l = l.getElementsByTagName(t), f = 0;
      f < l.length;
      f++
    ) {
      var d = l[f];
      if (
        !(
          d[al] ||
          d[pe] ||
          (t === "link" && d.getAttribute("rel") === "stylesheet")
        ) &&
        d.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var y = d.getAttribute(e) || "";
        y = t + y;
        var v = o.get(y);
        v ? v.push(d) : o.set(y, [d]);
      }
    }
    return o;
  }
  function mg(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function mv(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function gg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function gv(t, e, l, o) {
    if (
      l.type === "stylesheet" &&
      (typeof o.media != "string" || matchMedia(o.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var f = Xa(o.href),
          d = e.querySelector(Yl(f));
        if (d) {
          ((e = d._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = jo.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = d),
            fe(d));
          return;
        }
        ((d = e.ownerDocument || e),
          (o = fg(o)),
          (f = sn.get(f)) && Ac(o, f),
          (d = d.createElement("link")),
          fe(d));
        var y = d;
        ((y._p = new Promise(function (v, C) {
          ((y.onload = v), (y.onerror = C));
        })),
          xe(d, "link", o),
          (l.instance = d));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = jo.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l)));
    }
  }
  var Cc = 0;
  function pv(t, e) {
    return (
      t.stylesheets && t.count === 0 && Lo(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var o = setTimeout(function () {
              if ((t.stylesheets && Lo(t, t.stylesheets), t.unsuspend)) {
                var d = t.unsuspend;
                ((t.unsuspend = null), d());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Cc === 0 && (Cc = 62500 * Jb());
            var f = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Lo(t, t.stylesheets), t.unsuspend))
                ) {
                  var d = t.unsuspend;
                  ((t.unsuspend = null), d());
                }
              },
              (t.imgBytes > Cc ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = l),
              function () {
                ((t.unsuspend = null), clearTimeout(o), clearTimeout(f));
              }
            );
          }
        : null
    );
  }
  function jo() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Lo(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var ko = null;
  function Lo(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (ko = new Map()),
        e.forEach(yv, t),
        (ko = null),
        jo.call(t)));
  }
  function yv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = ko.get(t);
      if (l) var o = l.get(null);
      else {
        ((l = new Map()), ko.set(t, l));
        for (
          var f = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            d = 0;
          d < f.length;
          d++
        ) {
          var y = f[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") &&
            (l.set(y.dataset.precedence, y), (o = y));
        }
        o && l.set(null, o);
      }
      ((f = e.instance),
        (y = f.getAttribute("data-precedence")),
        (d = l.get(y) || o),
        d === o && l.set(null, f),
        l.set(y, f),
        this.count++,
        (o = jo.bind(this)),
        f.addEventListener("load", o),
        f.addEventListener("error", o),
        d
          ? d.parentNode.insertBefore(f, d.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(f, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var Xl = {
    $$typeof: J,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0,
  };
  function bv(t, e, l, o, f, d, y, v, C) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Mr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Mr(0)),
      (this.hiddenUpdates = Mr(null)),
      (this.identifierPrefix = o),
      (this.onUncaughtError = f),
      (this.onCaughtError = d),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = C),
      (this.incompleteTransitions = new Map()));
  }
  function pg(t, e, l, o, f, d, y, v, C, U, P, I) {
    return (
      (t = new bv(t, e, l, y, C, U, P, I, v)),
      (e = 1),
      d === !0 && (e |= 24),
      (d = Ue(3, null, null, e)),
      (t.current = d),
      (d.stateNode = t),
      (e = ou()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (d.memoizedState = { element: o, isDehydrated: l, cache: e }),
      fu(d),
      t
    );
  }
  function yg(t) {
    return t ? ((t = _a), t) : _a;
  }
  function bg(t, e, l, o, f, d) {
    ((f = yg(f)),
      o.context === null ? (o.context = f) : (o.pendingContext = f),
      (o = oi(e)),
      (o.payload = { element: l }),
      (d = d === void 0 ? null : d),
      d !== null && (o.callback = d),
      (l = ri(t, o, e)),
      l !== null && (je(l, t, e), _l(l, t, e)));
  }
  function vg(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Oc(t, e) {
    (vg(t, e), (t = t.alternate) && vg(t, e));
  }
  function xg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Hi(t, 67108864);
      (e !== null && je(e, t, 67108864), Oc(t, 67108864));
    }
  }
  function _g(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ge();
      e = Er(e);
      var l = Hi(t, e);
      (l !== null && je(l, t, e), Oc(t, e));
    }
  }
  var Ho = !0;
  function vv(t, e, l, o) {
    var f = O.T;
    O.T = null;
    var d = Y.p;
    try {
      ((Y.p = 2), Dc(t, e, l, o));
    } finally {
      ((Y.p = d), (O.T = f));
    }
  }
  function xv(t, e, l, o) {
    var f = O.T;
    O.T = null;
    var d = Y.p;
    try {
      ((Y.p = 8), Dc(t, e, l, o));
    } finally {
      ((Y.p = d), (O.T = f));
    }
  }
  function Dc(t, e, l, o) {
    if (Ho) {
      var f = Rc(o);
      if (f === null) (pc(t, e, o, Bo, l), Mg(t, o));
      else if (Sv(f, t, e, l, o)) o.stopPropagation();
      else if ((Mg(t, o), e & 4 && -1 < _v.indexOf(t))) {
        for (; f !== null; ) {
          var d = ca(f);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (((d = d.stateNode), d.current.memoizedState.isDehydrated)) {
                  var y = zi(d.pendingLanes);
                  if (y !== 0) {
                    var v = d;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; y; ) {
                      var C = 1 << (31 - He(y));
                      ((v.entanglements[1] |= C), (y &= ~C));
                    }
                    (_n(d), (jt & 6) === 0 && ((xo = Lt() + 500), Hl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = Hi(d, 2)), v !== null && je(v, d, 2), So(), Oc(d, 2));
            }
          if (((d = Rc(o)), d === null && pc(t, e, o, Bo, l), d === f)) break;
          f = d;
        }
        f !== null && o.stopPropagation();
      } else pc(t, e, o, null, l);
    }
  }
  function Rc(t) {
    return ((t = Nr(t)), zc(t));
  }
  var Bo = null;
  function zc(t) {
    if (((Bo = null), (t = ua(t)), t !== null)) {
      var e = u(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = c(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Bo = t), null);
  }
  function Sg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ke()) {
          case ne:
            return 2;
          case ge:
            return 8;
          case Te:
          case tl:
            return 32;
          case el:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Nc = !1,
    vi = null,
    xi = null,
    _i = null,
    Gl = new Map(),
    Ql = new Map(),
    Si = [],
    _v =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Mg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        vi = null;
        break;
      case "dragenter":
      case "dragleave":
        xi = null;
        break;
      case "mouseover":
      case "mouseout":
        _i = null;
        break;
      case "pointerover":
      case "pointerout":
        Gl.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ql.delete(e.pointerId);
    }
  }
  function Fl(t, e, l, o, f, d) {
    return t === null || t.nativeEvent !== d
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: o,
          nativeEvent: d,
          targetContainers: [f],
        }),
        e !== null && ((e = ca(e)), e !== null && xg(e)),
        t)
      : ((t.eventSystemFlags |= o),
        (e = t.targetContainers),
        f !== null && e.indexOf(f) === -1 && e.push(f),
        t);
  }
  function Sv(t, e, l, o, f) {
    switch (e) {
      case "focusin":
        return ((vi = Fl(vi, t, e, l, o, f)), !0);
      case "dragenter":
        return ((xi = Fl(xi, t, e, l, o, f)), !0);
      case "mouseover":
        return ((_i = Fl(_i, t, e, l, o, f)), !0);
      case "pointerover":
        var d = f.pointerId;
        return (Gl.set(d, Fl(Gl.get(d) || null, t, e, l, o, f)), !0);
      case "gotpointercapture":
        return (
          (d = f.pointerId),
          Ql.set(d, Fl(Ql.get(d) || null, t, e, l, o, f)),
          !0
        );
    }
    return !1;
  }
  function Eg(t) {
    var e = ua(t.target);
    if (e !== null) {
      var l = u(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = c(l)), e !== null)) {
            ((t.blockedOn = e),
              Bf(t.priority, function () {
                _g(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = h(l)), e !== null)) {
            ((t.blockedOn = e),
              Bf(t.priority, function () {
                _g(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Uo(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = Rc(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var o = new l.constructor(l.type, l);
        ((zr = o), l.target.dispatchEvent(o), (zr = null));
      } else return ((e = ca(l)), e !== null && xg(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function wg(t, e, l) {
    Uo(t) && l.delete(e);
  }
  function Mv() {
    ((Nc = !1),
      vi !== null && Uo(vi) && (vi = null),
      xi !== null && Uo(xi) && (xi = null),
      _i !== null && Uo(_i) && (_i = null),
      Gl.forEach(wg),
      Ql.forEach(wg));
  }
  function qo(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Nc ||
        ((Nc = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Mv)));
  }
  var Yo = null;
  function Ag(t) {
    Yo !== t &&
      ((Yo = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        Yo === t && (Yo = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            o = t[e + 1],
            f = t[e + 2];
          if (typeof o != "function") {
            if (zc(o || l) === null) continue;
            break;
          }
          var d = ca(l);
          d !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Ru(d, { pending: !0, data: f, method: l.method, action: o }, o, f));
        }
      }));
  }
  function Qa(t) {
    function e(C) {
      return qo(C, t);
    }
    (vi !== null && qo(vi, t),
      xi !== null && qo(xi, t),
      _i !== null && qo(_i, t),
      Gl.forEach(e),
      Ql.forEach(e));
    for (var l = 0; l < Si.length; l++) {
      var o = Si[l];
      o.blockedOn === t && (o.blockedOn = null);
    }
    for (; 0 < Si.length && ((l = Si[0]), l.blockedOn === null); )
      (Eg(l), l.blockedOn === null && Si.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (o = 0; o < l.length; o += 3) {
        var f = l[o],
          d = l[o + 1],
          y = f[Ce] || null;
        if (typeof d == "function") y || Ag(l);
        else if (y) {
          var v = null;
          if (d && d.hasAttribute("formAction")) {
            if (((f = d), (y = d[Ce] || null))) v = y.formAction;
            else if (zc(f) !== null) continue;
          } else v = y.action;
          (typeof v == "function" ? (l[o + 1] = v) : (l.splice(o, 3), (o -= 3)),
            Ag(l));
        }
      }
  }
  function Tg() {
    function t(d) {
      d.canIntercept &&
        d.info === "react-transition" &&
        d.intercept({
          handler: function () {
            return new Promise(function (y) {
              return (f = y);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (f !== null && (f(), (f = null)), o || setTimeout(l, 20));
    }
    function l() {
      if (!o && !navigation.transition) {
        var d = navigation.currentEntry;
        d &&
          d.url != null &&
          navigation.navigate(d.url, {
            state: d.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var o = !1,
        f = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          ((o = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            f !== null && (f(), (f = null)));
        }
      );
    }
  }
  function jc(t) {
    this._internalRoot = t;
  }
  ((Vo.prototype.render = jc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(s(409));
      var l = e.current,
        o = Ge();
      bg(l, o, t, e, null, null);
    }),
    (Vo.prototype.unmount = jc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (bg(t.current, 2, null, t, null, null), So(), (e[ra] = null));
        }
      }));
  function Vo(t) {
    this._internalRoot = t;
  }
  Vo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Hf();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Si.length && e !== 0 && e < Si[l].priority; l++);
      (Si.splice(l, 0, t), l === 0 && Eg(t));
    }
  };
  var Cg = n.version;
  if (Cg !== "19.2.3") throw Error(s(527, Cg, "19.2.3"));
  Y.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(s(188))
        : ((t = Object.keys(t).join(",")), Error(s(268, t)));
    return (
      (t = g(e)),
      (t = t !== null ? p(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Ev = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: O,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xo.isDisabled && Xo.supportsFiber)
      try {
        ((hn = Xo.inject(Ev)), (Se = Xo));
      } catch {}
  }
  return (
    (Kl.createRoot = function (t, e) {
      if (!r(t)) throw Error(s(299));
      var l = !1,
        o = "",
        f = kd,
        d = Ld,
        y = Hd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (o = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (f = e.onUncaughtError),
          e.onCaughtError !== void 0 && (d = e.onCaughtError),
          e.onRecoverableError !== void 0 && (y = e.onRecoverableError)),
        (e = pg(t, 1, !1, null, null, l, o, null, f, d, y, Tg)),
        (t[ra] = e.current),
        gc(t),
        new jc(e)
      );
    }),
    (Kl.hydrateRoot = function (t, e, l) {
      if (!r(t)) throw Error(s(299));
      var o = !1,
        f = "",
        d = kd,
        y = Ld,
        v = Hd,
        C = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (o = !0),
          l.identifierPrefix !== void 0 && (f = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (d = l.onUncaughtError),
          l.onCaughtError !== void 0 && (y = l.onCaughtError),
          l.onRecoverableError !== void 0 && (v = l.onRecoverableError),
          l.formState !== void 0 && (C = l.formState)),
        (e = pg(t, 1, !0, e, l ?? null, o, f, C, d, y, v, Tg)),
        (e.context = yg(null)),
        (l = e.current),
        (o = Ge()),
        (o = Er(o)),
        (f = oi(o)),
        (f.callback = null),
        ri(l, f, o),
        (l = o),
        (e.current.lanes = l),
        il(e, l),
        _n(e),
        (t[ra] = e.current),
        gc(t),
        new Vo(e)
      );
    }),
    (Kl.version = "19.2.3"),
    Kl
  );
}
var Bg;
function kv() {
  if (Bg) return Hc.exports;
  Bg = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (n) {
        console.error(n);
      }
  }
  return (i(), (Hc.exports = jv()), Hc.exports);
}
var Lv = kv();
var Ug = "popstate";
function Hv(i = {}) {
  function n(r, u) {
    let {
      pathname: c = "/",
      search: h = "",
      hash: m = "",
    } = la(r.location.hash.substring(1));
    return (
      !c.startsWith("/") && !c.startsWith(".") && (c = "/" + c),
      Ic(
        "",
        { pathname: c, search: h, hash: m },
        (u.state && u.state.usr) || null,
        (u.state && u.state.key) || "default",
      )
    );
  }
  function a(r, u) {
    let c = r.document.querySelector("base"),
      h = "";
    if (c && c.getAttribute("href")) {
      let m = r.location.href,
        g = m.indexOf("#");
      h = g === -1 ? m : m.slice(0, g);
    }
    return h + "#" + (typeof u == "string" ? u : fs(u));
  }
  function s(r, u) {
    Qe(
      r.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`,
    );
  }
  return Uv(n, a, s, i);
}
function $t(i, n) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(n);
}
function Qe(i, n) {
  if (!i) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {}
  }
}
function Bv() {
  return Math.random().toString(36).substring(2, 10);
}
function qg(i, n) {
  return { usr: i.state, key: i.key, idx: n };
}
function Ic(i, n, a = null, s) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...(typeof n == "string" ? la(n) : n),
    state: a,
    key: (n && n.key) || s || Bv(),
  };
}
function fs({ pathname: i = "/", search: n = "", hash: a = "" }) {
  return (
    n && n !== "?" && (i += n.charAt(0) === "?" ? n : "?" + n),
    a && a !== "#" && (i += a.charAt(0) === "#" ? a : "#" + a),
    i
  );
}
function la(i) {
  let n = {};
  if (i) {
    let a = i.indexOf("#");
    a >= 0 && ((n.hash = i.substring(a)), (i = i.substring(0, a)));
    let s = i.indexOf("?");
    (s >= 0 && ((n.search = i.substring(s)), (i = i.substring(0, s))),
      i && (n.pathname = i));
  }
  return n;
}
function Uv(i, n, a, s = {}) {
  let { window: r = document.defaultView, v5Compat: u = !1 } = s,
    c = r.history,
    h = "POP",
    m = null,
    g = p();
  g == null && ((g = 0), c.replaceState({ ...c.state, idx: g }, ""));
  function p() {
    return (c.state || { idx: null }).idx;
  }
  function b() {
    h = "POP";
    let w = p(),
      N = w == null ? null : w - g;
    ((g = w), m && m({ action: h, location: M.location, delta: N }));
  }
  function x(w, N) {
    h = "PUSH";
    let X = Ic(M.location, w, N);
    (a && a(X, w), (g = p() + 1));
    let J = qg(X, g),
      W = M.createHref(X);
    try {
      c.pushState(J, "", W);
    } catch (G) {
      if (G instanceof DOMException && G.name === "DataCloneError") throw G;
      r.location.assign(W);
    }
    u && m && m({ action: h, location: M.location, delta: 1 });
  }
  function S(w, N) {
    h = "REPLACE";
    let X = Ic(M.location, w, N);
    (a && a(X, w), (g = p()));
    let J = qg(X, g),
      W = M.createHref(X);
    (c.replaceState(J, "", W),
      u && m && m({ action: h, location: M.location, delta: 0 }));
  }
  function T(w) {
    return qv(w);
  }
  let M = {
    get action() {
      return h;
    },
    get location() {
      return i(r, c);
    },
    listen(w) {
      if (m) throw new Error("A history only accepts one active listener");
      return (
        r.addEventListener(Ug, b),
        (m = w),
        () => {
          (r.removeEventListener(Ug, b), (m = null));
        }
      );
    },
    createHref(w) {
      return n(r, w);
    },
    createURL: T,
    encodeLocation(w) {
      let N = T(w);
      return { pathname: N.pathname, search: N.search, hash: N.hash };
    },
    push: x,
    replace: S,
    go(w) {
      return c.go(w);
    },
  };
  return M;
}
function qv(i, n = !1) {
  let a = "http://localhost";
  (typeof window < "u" &&
    (a =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    $t(a, "No window.location.(origin|href) available to create URL"));
  let s = typeof i == "string" ? i : fs(i);
  return (
    (s = s.replace(/ $/, "%20")),
    !n && s.startsWith("//") && (s = a + s),
    new URL(s, a)
  );
}
function a0(i, n, a = "/") {
  return Yv(i, n, a, !1);
}
function Yv(i, n, a, s) {
  let r = typeof n == "string" ? la(n) : n,
    u = Pn(r.pathname || "/", a);
  if (u == null) return null;
  let c = l0(i);
  Vv(c);
  let h = null;
  for (let m = 0; h == null && m < c.length; ++m) {
    let g = Iv(u);
    h = Pv(c[m], g, s);
  }
  return h;
}
function l0(i, n = [], a = [], s = "", r = !1) {
  let u = (c, h, m = r, g) => {
    let p = {
      relativePath: g === void 0 ? c.path || "" : g,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: h,
      route: c,
    };
    if (p.relativePath.startsWith("/")) {
      if (!p.relativePath.startsWith(s) && m) return;
      ($t(
        p.relativePath.startsWith(s),
        `Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (p.relativePath = p.relativePath.slice(s.length)));
    }
    let b = Jn([s, p.relativePath]),
      x = a.concat(p);
    (c.children &&
      c.children.length > 0 &&
      ($t(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`,
      ),
      l0(c.children, n, x, b, m)),
      !(c.path == null && !c.index) &&
        n.push({ path: b, score: Wv(b, c.index), routesMeta: x }));
  };
  return (
    i.forEach((c, h) => {
      if (c.path === "" || !c.path?.includes("?")) u(c, h);
      else for (let m of s0(c.path)) u(c, h, !0, m);
    }),
    n
  );
}
function s0(i) {
  let n = i.split("/");
  if (n.length === 0) return [];
  let [a, ...s] = n,
    r = a.endsWith("?"),
    u = a.replace(/\?$/, "");
  if (s.length === 0) return r ? [u, ""] : [u];
  let c = s0(s.join("/")),
    h = [];
  return (
    h.push(...c.map((m) => (m === "" ? u : [u, m].join("/")))),
    r && h.push(...c),
    h.map((m) => (i.startsWith("/") && m === "" ? "/" : m))
  );
}
function Vv(i) {
  i.sort((n, a) =>
    n.score !== a.score
      ? a.score - n.score
      : Jv(
          n.routesMeta.map((s) => s.childrenIndex),
          a.routesMeta.map((s) => s.childrenIndex),
        ),
  );
}
var Xv = /^:[\w-]+$/,
  Gv = 3,
  Qv = 2,
  Fv = 1,
  Zv = 10,
  Kv = -2,
  Yg = (i) => i === "*";
function Wv(i, n) {
  let a = i.split("/"),
    s = a.length;
  return (
    a.some(Yg) && (s += Kv),
    n && (s += Qv),
    a
      .filter((r) => !Yg(r))
      .reduce((r, u) => r + (Xv.test(u) ? Gv : u === "" ? Fv : Zv), s)
  );
}
function Jv(i, n) {
  return i.length === n.length && i.slice(0, -1).every((s, r) => s === n[r])
    ? i[i.length - 1] - n[n.length - 1]
    : 0;
}
function Pv(i, n, a = !1) {
  let { routesMeta: s } = i,
    r = {},
    u = "/",
    c = [];
  for (let h = 0; h < s.length; ++h) {
    let m = s[h],
      g = h === s.length - 1,
      p = u === "/" ? n : n.slice(u.length) || "/",
      b = ur(
        { path: m.relativePath, caseSensitive: m.caseSensitive, end: g },
        p,
      ),
      x = m.route;
    if (
      (!b &&
        g &&
        a &&
        !s[s.length - 1].route.index &&
        (b = ur(
          { path: m.relativePath, caseSensitive: m.caseSensitive, end: !1 },
          p,
        )),
      !b)
    )
      return null;
    (Object.assign(r, b.params),
      c.push({
        params: r,
        pathname: Jn([u, b.pathname]),
        pathnameBase: ix(Jn([u, b.pathnameBase])),
        route: x,
      }),
      b.pathnameBase !== "/" && (u = Jn([u, b.pathnameBase])));
  }
  return c;
}
function ur(i, n) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, s] = $v(i.path, i.caseSensitive, i.end),
    r = n.match(a);
  if (!r) return null;
  let u = r[0],
    c = u.replace(/(.)\/+$/, "$1"),
    h = r.slice(1);
  return {
    params: s.reduce((g, { paramName: p, isOptional: b }, x) => {
      if (p === "*") {
        let T = h[x] || "";
        c = u.slice(0, u.length - T.length).replace(/(.)\/+$/, "$1");
      }
      const S = h[x];
      return (
        b && !S ? (g[p] = void 0) : (g[p] = (S || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: i,
  };
}
function $v(i, n = !1, a = !0) {
  Qe(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`,
  );
  let s = [],
    r =
      "^" +
      i
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, h, m) => (
            s.push({ paramName: h, isOptional: m != null }),
            m ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    i.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (r += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
        ? (r += "\\/*$")
        : i !== "" && i !== "/" && (r += "(?:(?=\\/|$))"),
    [new RegExp(r, n ? void 0 : "i"), s]
  );
}
function Iv(i) {
  try {
    return i
      .split("/")
      .map((n) => decodeURIComponent(n).replace(/\//g, "%2F"))
      .join("/");
  } catch (n) {
    return (
      Qe(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`,
      ),
      i
    );
  }
}
function Pn(i, n) {
  if (n === "/") return i;
  if (!i.toLowerCase().startsWith(n.toLowerCase())) return null;
  let a = n.endsWith("/") ? n.length - 1 : n.length,
    s = i.charAt(a);
  return s && s !== "/" ? null : i.slice(a) || "/";
}
var o0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  tx = (i) => o0.test(i);
function ex(i, n = "/") {
  let {
      pathname: a,
      search: s = "",
      hash: r = "",
    } = typeof i == "string" ? la(i) : i,
    u;
  if (a)
    if (tx(a)) u = a;
    else {
      if (a.includes("//")) {
        let c = a;
        ((a = a.replace(/\/\/+/g, "/")),
          Qe(
            !1,
            `Pathnames cannot have embedded double slashes - normalizing ${c} -> ${a}`,
          ));
      }
      a.startsWith("/") ? (u = Vg(a.substring(1), "/")) : (u = Vg(a, n));
    }
  else u = n;
  return { pathname: u, search: ax(s), hash: lx(r) };
}
function Vg(i, n) {
  let a = n.replace(/\/+$/, "").split("/");
  return (
    i.split("/").forEach((r) => {
      r === ".." ? a.length > 1 && a.pop() : r !== "." && a.push(r);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Yc(i, n, a, s) {
  return `Cannot include a '${i}' character in a manually specified \`to.${n}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function nx(i) {
  return i.filter(
    (n, a) => a === 0 || (n.route.path && n.route.path.length > 0),
  );
}
function ff(i) {
  let n = nx(i);
  return n.map((a, s) => (s === n.length - 1 ? a.pathname : a.pathnameBase));
}
function hf(i, n, a, s = !1) {
  let r;
  typeof i == "string"
    ? (r = la(i))
    : ((r = { ...i }),
      $t(
        !r.pathname || !r.pathname.includes("?"),
        Yc("?", "pathname", "search", r),
      ),
      $t(
        !r.pathname || !r.pathname.includes("#"),
        Yc("#", "pathname", "hash", r),
      ),
      $t(!r.search || !r.search.includes("#"), Yc("#", "search", "hash", r)));
  let u = i === "" || r.pathname === "",
    c = u ? "/" : r.pathname,
    h;
  if (c == null) h = a;
  else {
    let b = n.length - 1;
    if (!s && c.startsWith("..")) {
      let x = c.split("/");
      for (; x[0] === ".."; ) (x.shift(), (b -= 1));
      r.pathname = x.join("/");
    }
    h = b >= 0 ? n[b] : "/";
  }
  let m = ex(r, h),
    g = c && c !== "/" && c.endsWith("/"),
    p = (u || c === ".") && a.endsWith("/");
  return (!m.pathname.endsWith("/") && (g || p) && (m.pathname += "/"), m);
}
var Jn = (i) => i.join("/").replace(/\/\/+/g, "/"),
  ix = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ax = (i) => (!i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i),
  lx = (i) => (!i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i),
  sx = class {
    constructor(i, n, a, s = !1) {
      ((this.status = i),
        (this.statusText = n || ""),
        (this.internal = s),
        a instanceof Error
          ? ((this.data = a.toString()), (this.error = a))
          : (this.data = a));
    }
  };
function ox(i) {
  return (
    i != null &&
    typeof i.status == "number" &&
    typeof i.statusText == "string" &&
    typeof i.internal == "boolean" &&
    "data" in i
  );
}
function rx(i) {
  return (
    i
      .map((n) => n.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var r0 =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function u0(i, n) {
  let a = i;
  if (typeof a != "string" || !o0.test(a))
    return { absoluteURL: void 0, isExternal: !1, to: a };
  let s = a,
    r = !1;
  if (r0)
    try {
      let u = new URL(window.location.href),
        c = a.startsWith("//") ? new URL(u.protocol + a) : new URL(a),
        h = Pn(c.pathname, n);
      c.origin === u.origin && h != null
        ? (a = h + c.search + c.hash)
        : (r = !0);
    } catch {
      Qe(
        !1,
        `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: s, isExternal: r, to: a };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var c0 = ["POST", "PUT", "PATCH", "DELETE"];
new Set(c0);
var ux = ["GET", ...c0];
new Set(ux);
var Pa = H.createContext(null);
Pa.displayName = "DataRouter";
var yr = H.createContext(null);
yr.displayName = "DataRouterState";
var cx = H.createContext(!1),
  f0 = H.createContext({ isTransitioning: !1 });
f0.displayName = "ViewTransition";
var fx = H.createContext(new Map());
fx.displayName = "Fetchers";
var hx = H.createContext(null);
hx.displayName = "Await";
var Fe = H.createContext(null);
Fe.displayName = "Navigation";
var bs = H.createContext(null);
bs.displayName = "Location";
var Tn = H.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Tn.displayName = "Route";
var df = H.createContext(null);
df.displayName = "RouteError";
var h0 = "REACT_ROUTER_ERROR",
  dx = "REDIRECT",
  mx = "ROUTE_ERROR_RESPONSE";
function gx(i) {
  if (i.startsWith(`${h0}:${dx}:{`))
    try {
      let n = JSON.parse(i.slice(28));
      if (
        typeof n == "object" &&
        n &&
        typeof n.status == "number" &&
        typeof n.statusText == "string" &&
        typeof n.location == "string" &&
        typeof n.reloadDocument == "boolean" &&
        typeof n.replace == "boolean"
      )
        return n;
    } catch {}
}
function px(i) {
  if (i.startsWith(`${h0}:${mx}:{`))
    try {
      let n = JSON.parse(i.slice(40));
      if (
        typeof n == "object" &&
        n &&
        typeof n.status == "number" &&
        typeof n.statusText == "string"
      )
        return new sx(n.status, n.statusText, n.data);
    } catch {}
}
function yx(i, { relative: n } = {}) {
  $t(
    $a(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: a, navigator: s } = H.useContext(Fe),
    { hash: r, pathname: u, search: c } = vs(i, { relative: n }),
    h = u;
  return (
    a !== "/" && (h = u === "/" ? a : Jn([a, u])),
    s.createHref({ pathname: h, search: c, hash: r })
  );
}
function $a() {
  return H.useContext(bs) != null;
}
function Oi() {
  return (
    $t(
      $a(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    H.useContext(bs).location
  );
}
var d0 =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function m0(i) {
  H.useContext(Fe).static || H.useLayoutEffect(i);
}
function br() {
  let { isDataRoute: i } = H.useContext(Tn);
  return i ? Dx() : bx();
}
function bx() {
  $t(
    $a(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let i = H.useContext(Pa),
    { basename: n, navigator: a } = H.useContext(Fe),
    { matches: s } = H.useContext(Tn),
    { pathname: r } = Oi(),
    u = JSON.stringify(ff(s)),
    c = H.useRef(!1);
  return (
    m0(() => {
      c.current = !0;
    }),
    H.useCallback(
      (m, g = {}) => {
        if ((Qe(c.current, d0), !c.current)) return;
        if (typeof m == "number") {
          a.go(m);
          return;
        }
        let p = hf(m, JSON.parse(u), r, g.relative === "path");
        (i == null &&
          n !== "/" &&
          (p.pathname = p.pathname === "/" ? n : Jn([n, p.pathname])),
          (g.replace ? a.replace : a.push)(p, g.state, g));
      },
      [n, a, u, r, i],
    )
  );
}
H.createContext(null);
function vs(i, { relative: n } = {}) {
  let { matches: a } = H.useContext(Tn),
    { pathname: s } = Oi(),
    r = JSON.stringify(ff(a));
  return H.useMemo(() => hf(i, JSON.parse(r), s, n === "path"), [i, r, s, n]);
}
function vx(i, n) {
  return g0(i, n);
}
function g0(i, n, a, s, r) {
  $t(
    $a(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: u } = H.useContext(Fe),
    { matches: c } = H.useContext(Tn),
    h = c[c.length - 1],
    m = h ? h.params : {},
    g = h ? h.pathname : "/",
    p = h ? h.pathnameBase : "/",
    b = h && h.route;
  {
    let X = (b && b.path) || "";
    y0(
      g,
      !b || X.endsWith("*") || X.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X === "/" ? "*" : `${X}/*`}">.`,
    );
  }
  let x = Oi(),
    S;
  if (n) {
    let X = typeof n == "string" ? la(n) : n;
    ($t(
      p === "/" || X.pathname?.startsWith(p),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${X.pathname}" was given in the \`location\` prop.`,
    ),
      (S = X));
  } else S = x;
  let T = S.pathname || "/",
    M = T;
  if (p !== "/") {
    let X = p.replace(/^\//, "").split("/");
    M = "/" + T.replace(/^\//, "").split("/").slice(X.length).join("/");
  }
  let w = a0(i, { pathname: M });
  (Qe(
    b || w != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `,
  ),
    Qe(
      w == null ||
        w[w.length - 1].route.element !== void 0 ||
        w[w.length - 1].route.Component !== void 0 ||
        w[w.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let N = Ex(
    w &&
      w.map((X) =>
        Object.assign({}, X, {
          params: Object.assign({}, m, X.params),
          pathname: Jn([
            p,
            u.encodeLocation
              ? u.encodeLocation(
                  X.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : X.pathname,
          ]),
          pathnameBase:
            X.pathnameBase === "/"
              ? p
              : Jn([
                  p,
                  u.encodeLocation
                    ? u.encodeLocation(
                        X.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : X.pathnameBase,
                ]),
        }),
      ),
    c,
    a,
    s,
    r,
  );
  return n && N
    ? H.createElement(
        bs.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...S,
            },
            navigationType: "POP",
          },
        },
        N,
      )
    : N;
}
function xx() {
  let i = Ox(),
    n = ox(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
        ? i.message
        : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    s = "rgba(200,200,200, 0.5)",
    r = { padding: "0.5rem", backgroundColor: s },
    u = { padding: "2px 4px", backgroundColor: s },
    c = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", i),
    (c = H.createElement(
      H.Fragment,
      null,
      H.createElement("p", null, "💿 Hey developer 👋"),
      H.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        H.createElement("code", { style: u }, "ErrorBoundary"),
        " or",
        " ",
        H.createElement("code", { style: u }, "errorElement"),
        " prop on your route.",
      ),
    )),
    H.createElement(
      H.Fragment,
      null,
      H.createElement("h2", null, "Unexpected Application Error!"),
      H.createElement("h3", { style: { fontStyle: "italic" } }, n),
      a ? H.createElement("pre", { style: r }, a) : null,
      c,
    )
  );
}
var _x = H.createElement(xx, null),
  p0 = class extends H.Component {
    constructor(i) {
      (super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        }));
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, n) {
      return n.location !== i.location ||
        (n.revalidation !== "idle" && i.revalidation === "idle")
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : n.error,
            location: n.location,
            revalidation: i.revalidation || n.revalidation,
          };
    }
    componentDidCatch(i, n) {
      this.props.onError
        ? this.props.onError(i, n)
        : console.error(
            "React Router caught the following error during render",
            i,
          );
    }
    render() {
      let i = this.state.error;
      if (
        this.context &&
        typeof i == "object" &&
        i &&
        "digest" in i &&
        typeof i.digest == "string"
      ) {
        const a = px(i.digest);
        a && (i = a);
      }
      let n =
        i !== void 0
          ? H.createElement(
              Tn.Provider,
              { value: this.props.routeContext },
              H.createElement(df.Provider, {
                value: i,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? H.createElement(Sx, { error: i }, n) : n;
    }
  };
p0.contextType = cx;
var Vc = new WeakMap();
function Sx({ children: i, error: n }) {
  let { basename: a } = H.useContext(Fe);
  if (
    typeof n == "object" &&
    n &&
    "digest" in n &&
    typeof n.digest == "string"
  ) {
    let s = gx(n.digest);
    if (s) {
      let r = Vc.get(n);
      if (r) throw r;
      let u = u0(s.location, a);
      if (r0 && !Vc.get(n))
        if (u.isExternal || s.reloadDocument)
          window.location.href = u.absoluteURL || u.to;
        else {
          const c = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(u.to, {
              replace: s.replace,
            }),
          );
          throw (Vc.set(n, c), c);
        }
      return H.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${u.absoluteURL || u.to}`,
      });
    }
  }
  return i;
}
function Mx({ routeContext: i, match: n, children: a }) {
  let s = H.useContext(Pa);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = n.route.id),
    H.createElement(Tn.Provider, { value: i }, a)
  );
}
function Ex(i, n = [], a = null, s = null, r = null) {
  if (i == null) {
    if (!a) return null;
    if (a.errors) i = a.matches;
    else if (n.length === 0 && !a.initialized && a.matches.length > 0)
      i = a.matches;
    else return null;
  }
  let u = i,
    c = a?.errors;
  if (c != null) {
    let p = u.findIndex((b) => b.route.id && c?.[b.route.id] !== void 0);
    ($t(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`,
    ),
      (u = u.slice(0, Math.min(u.length, p + 1))));
  }
  let h = !1,
    m = -1;
  if (a)
    for (let p = 0; p < u.length; p++) {
      let b = u[p];
      if (
        ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (m = p),
        b.route.id)
      ) {
        let { loaderData: x, errors: S } = a,
          T =
            b.route.loader &&
            !x.hasOwnProperty(b.route.id) &&
            (!S || S[b.route.id] === void 0);
        if (b.route.lazy || T) {
          ((h = !0), m >= 0 ? (u = u.slice(0, m + 1)) : (u = [u[0]]));
          break;
        }
      }
    }
  let g =
    a && s
      ? (p, b) => {
          s(p, {
            location: a.location,
            params: a.matches?.[0]?.params ?? {},
            unstable_pattern: rx(a.matches),
            errorInfo: b,
          });
        }
      : void 0;
  return u.reduceRight((p, b, x) => {
    let S,
      T = !1,
      M = null,
      w = null;
    a &&
      ((S = c && b.route.id ? c[b.route.id] : void 0),
      (M = b.route.errorElement || _x),
      h &&
        (m < 0 && x === 0
          ? (y0(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (T = !0),
            (w = null))
          : m === x &&
            ((T = !0), (w = b.route.hydrateFallbackElement || null))));
    let N = n.concat(u.slice(0, x + 1)),
      X = () => {
        let J;
        return (
          S
            ? (J = M)
            : T
              ? (J = w)
              : b.route.Component
                ? (J = H.createElement(b.route.Component, null))
                : b.route.element
                  ? (J = b.route.element)
                  : (J = p),
          H.createElement(Mx, {
            match: b,
            routeContext: { outlet: p, matches: N, isDataRoute: a != null },
            children: J,
          })
        );
      };
    return a && (b.route.ErrorBoundary || b.route.errorElement || x === 0)
      ? H.createElement(p0, {
          location: a.location,
          revalidation: a.revalidation,
          component: M,
          error: S,
          children: X(),
          routeContext: { outlet: null, matches: N, isDataRoute: !0 },
          onError: g,
        })
      : X();
  }, null);
}
function mf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wx(i) {
  let n = H.useContext(Pa);
  return ($t(n, mf(i)), n);
}
function Ax(i) {
  let n = H.useContext(yr);
  return ($t(n, mf(i)), n);
}
function Tx(i) {
  let n = H.useContext(Tn);
  return ($t(n, mf(i)), n);
}
function gf(i) {
  let n = Tx(i),
    a = n.matches[n.matches.length - 1];
  return (
    $t(
      a.route.id,
      `${i} can only be used on routes that contain a unique "id"`,
    ),
    a.route.id
  );
}
function Cx() {
  return gf("useRouteId");
}
function Ox() {
  let i = H.useContext(df),
    n = Ax("useRouteError"),
    a = gf("useRouteError");
  return i !== void 0 ? i : n.errors?.[a];
}
function Dx() {
  let { router: i } = wx("useNavigate"),
    n = gf("useNavigate"),
    a = H.useRef(!1);
  return (
    m0(() => {
      a.current = !0;
    }),
    H.useCallback(
      async (r, u = {}) => {
        (Qe(a.current, d0),
          a.current &&
            (typeof r == "number"
              ? await i.navigate(r)
              : await i.navigate(r, { fromRouteId: n, ...u })));
      },
      [i, n],
    )
  );
}
var Xg = {};
function y0(i, n, a) {
  !n && !Xg[i] && ((Xg[i] = !0), Qe(!1, a));
}
H.memo(Rx);
function Rx({ routes: i, future: n, state: a, onError: s }) {
  return g0(i, void 0, a, s, n);
}
function zx({ to: i, replace: n, state: a, relative: s }) {
  $t(
    $a(),
    "<Navigate> may be used only in the context of a <Router> component.",
  );
  let { static: r } = H.useContext(Fe);
  Qe(
    !r,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.",
  );
  let { matches: u } = H.useContext(Tn),
    { pathname: c } = Oi(),
    h = br(),
    m = hf(i, ff(u), c, s === "path"),
    g = JSON.stringify(m);
  return (
    H.useEffect(() => {
      h(JSON.parse(g), { replace: n, state: a, relative: s });
    }, [h, g, s, n, a]),
    null
  );
}
function Mn(i) {
  $t(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Nx({
  basename: i = "/",
  children: n = null,
  location: a,
  navigationType: s = "POP",
  navigator: r,
  static: u = !1,
  unstable_useTransitions: c,
}) {
  $t(
    !$a(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let h = i.replace(/^\/*/, "/"),
    m = H.useMemo(
      () => ({
        basename: h,
        navigator: r,
        static: u,
        unstable_useTransitions: c,
        future: {},
      }),
      [h, r, u, c],
    );
  typeof a == "string" && (a = la(a));
  let {
      pathname: g = "/",
      search: p = "",
      hash: b = "",
      state: x = null,
      key: S = "default",
    } = a,
    T = H.useMemo(() => {
      let M = Pn(g, h);
      return M == null
        ? null
        : {
            location: { pathname: M, search: p, hash: b, state: x, key: S },
            navigationType: s,
          };
    }, [h, g, p, b, x, S, s]);
  return (
    Qe(
      T != null,
      `<Router basename="${h}"> is not able to match the URL "${g}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    T == null
      ? null
      : H.createElement(
          Fe.Provider,
          { value: m },
          H.createElement(bs.Provider, { children: n, value: T }),
        )
  );
}
function jx({ children: i, location: n }) {
  return vx(tf(i), n);
}
function tf(i, n = []) {
  let a = [];
  return (
    H.Children.forEach(i, (s, r) => {
      if (!H.isValidElement(s)) return;
      let u = [...n, r];
      if (s.type === H.Fragment) {
        a.push.apply(a, tf(s.props.children, u));
        return;
      }
      ($t(
        s.type === Mn,
        `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        $t(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes.",
        ));
      let c = {
        id: s.props.id || u.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        middleware: s.props.middleware,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      (s.props.children && (c.children = tf(s.props.children, u)), a.push(c));
    }),
    a
  );
}
var ar = "get",
  lr = "application/x-www-form-urlencoded";
function vr(i) {
  return typeof HTMLElement < "u" && i instanceof HTMLElement;
}
function kx(i) {
  return vr(i) && i.tagName.toLowerCase() === "button";
}
function Lx(i) {
  return vr(i) && i.tagName.toLowerCase() === "form";
}
function Hx(i) {
  return vr(i) && i.tagName.toLowerCase() === "input";
}
function Bx(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Ux(i, n) {
  return i.button === 0 && (!n || n === "_self") && !Bx(i);
}
var Go = null;
function qx() {
  if (Go === null)
    try {
      (new FormData(document.createElement("form"), 0), (Go = !1));
    } catch {
      Go = !0;
    }
  return Go;
}
var Yx = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Xc(i) {
  return i != null && !Yx.has(i)
    ? (Qe(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lr}"`,
      ),
      null)
    : i;
}
function Vx(i, n) {
  let a, s, r, u, c;
  if (Lx(i)) {
    let h = i.getAttribute("action");
    ((s = h ? Pn(h, n) : null),
      (a = i.getAttribute("method") || ar),
      (r = Xc(i.getAttribute("enctype")) || lr),
      (u = new FormData(i)));
  } else if (kx(i) || (Hx(i) && (i.type === "submit" || i.type === "image"))) {
    let h = i.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let m = i.getAttribute("formaction") || h.getAttribute("action");
    if (
      ((s = m ? Pn(m, n) : null),
      (a = i.getAttribute("formmethod") || h.getAttribute("method") || ar),
      (r =
        Xc(i.getAttribute("formenctype")) ||
        Xc(h.getAttribute("enctype")) ||
        lr),
      (u = new FormData(h, i)),
      !qx())
    ) {
      let { name: g, type: p, value: b } = i;
      if (p === "image") {
        let x = g ? `${g}.` : "";
        (u.append(`${x}x`, "0"), u.append(`${x}y`, "0"));
      } else g && u.append(g, b);
    }
  } else {
    if (vr(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((a = ar), (s = null), (r = lr), (c = i));
  }
  return (
    u && r === "text/plain" && ((c = u), (u = void 0)),
    { action: s, method: a.toLowerCase(), encType: r, formData: u, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function pf(i, n) {
  if (i === !1 || i === null || typeof i > "u") throw new Error(n);
}
function Xx(i, n, a) {
  let s =
    typeof i == "string"
      ? new URL(
          i,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : i;
  return (
    s.pathname === "/"
      ? (s.pathname = `_root.${a}`)
      : n && Pn(s.pathname, n) === "/"
        ? (s.pathname = `${n.replace(/\/$/, "")}/_root.${a}`)
        : (s.pathname = `${s.pathname.replace(/\/$/, "")}.${a}`),
    s
  );
}
async function Gx(i, n) {
  if (i.id in n) return n[i.id];
  try {
    let a = await import(i.module);
    return ((n[i.id] = a), a);
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`,
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Qx(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === "preload" &&
        typeof i.imageSrcSet == "string" &&
        typeof i.imageSizes == "string"
      : typeof i.rel == "string" && typeof i.href == "string";
}
async function Fx(i, n, a) {
  let s = await Promise.all(
    i.map(async (r) => {
      let u = n.routes[r.route.id];
      if (u) {
        let c = await Gx(u, a);
        return c.links ? c.links() : [];
      }
      return [];
    }),
  );
  return Jx(
    s
      .flat(1)
      .filter(Qx)
      .filter((r) => r.rel === "stylesheet" || r.rel === "preload")
      .map((r) =>
        r.rel === "stylesheet"
          ? { ...r, rel: "prefetch", as: "style" }
          : { ...r, rel: "prefetch" },
      ),
  );
}
function Gg(i, n, a, s, r, u) {
  let c = (m, g) => (a[g] ? m.route.id !== a[g].route.id : !0),
    h = (m, g) =>
      a[g].pathname !== m.pathname ||
      (a[g].route.path?.endsWith("*") && a[g].params["*"] !== m.params["*"]);
  return u === "assets"
    ? n.filter((m, g) => c(m, g) || h(m, g))
    : u === "data"
      ? n.filter((m, g) => {
          let p = s.routes[m.route.id];
          if (!p || !p.hasLoader) return !1;
          if (c(m, g) || h(m, g)) return !0;
          if (m.route.shouldRevalidate) {
            let b = m.route.shouldRevalidate({
              currentUrl: new URL(
                r.pathname + r.search + r.hash,
                window.origin,
              ),
              currentParams: a[0]?.params || {},
              nextUrl: new URL(i, window.origin),
              nextParams: m.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == "boolean") return b;
          }
          return !0;
        })
      : [];
}
function Zx(i, n, { includeHydrateFallback: a } = {}) {
  return Kx(
    i
      .map((s) => {
        let r = n.routes[s.route.id];
        if (!r) return [];
        let u = [r.module];
        return (
          r.clientActionModule && (u = u.concat(r.clientActionModule)),
          r.clientLoaderModule && (u = u.concat(r.clientLoaderModule)),
          a &&
            r.hydrateFallbackModule &&
            (u = u.concat(r.hydrateFallbackModule)),
          r.imports && (u = u.concat(r.imports)),
          u
        );
      })
      .flat(1),
  );
}
function Kx(i) {
  return [...new Set(i)];
}
function Wx(i) {
  let n = {},
    a = Object.keys(i).sort();
  for (let s of a) n[s] = i[s];
  return n;
}
function Jx(i, n) {
  let a = new Set();
  return (
    new Set(n),
    i.reduce((s, r) => {
      let u = JSON.stringify(Wx(r));
      return (a.has(u) || (a.add(u), s.push({ key: u, link: r })), s);
    }, [])
  );
}
function b0() {
  let i = H.useContext(Pa);
  return (
    pf(
      i,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    i
  );
}
function Px() {
  let i = H.useContext(yr);
  return (
    pf(
      i,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    i
  );
}
var yf = H.createContext(void 0);
yf.displayName = "FrameworkContext";
function v0() {
  let i = H.useContext(yf);
  return (
    pf(i, "You must render this element inside a <HydratedRouter> element"),
    i
  );
}
function $x(i, n) {
  let a = H.useContext(yf),
    [s, r] = H.useState(!1),
    [u, c] = H.useState(!1),
    {
      onFocus: h,
      onBlur: m,
      onMouseEnter: g,
      onMouseLeave: p,
      onTouchStart: b,
    } = n,
    x = H.useRef(null);
  (H.useEffect(() => {
    if ((i === "render" && c(!0), i === "viewport")) {
      let M = (N) => {
          N.forEach((X) => {
            c(X.isIntersecting);
          });
        },
        w = new IntersectionObserver(M, { threshold: 0.5 });
      return (
        x.current && w.observe(x.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [i]),
    H.useEffect(() => {
      if (s) {
        let M = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(M);
        };
      }
    }, [s]));
  let S = () => {
      r(!0);
    },
    T = () => {
      (r(!1), c(!1));
    };
  return a
    ? i !== "intent"
      ? [u, x, {}]
      : [
          u,
          x,
          {
            onFocus: Wl(h, S),
            onBlur: Wl(m, T),
            onMouseEnter: Wl(g, S),
            onMouseLeave: Wl(p, T),
            onTouchStart: Wl(b, S),
          },
        ]
    : [!1, x, {}];
}
function Wl(i, n) {
  return (a) => {
    (i && i(a), a.defaultPrevented || n(a));
  };
}
function Ix({ page: i, ...n }) {
  let { router: a } = b0(),
    s = H.useMemo(() => a0(a.routes, i, a.basename), [a.routes, i, a.basename]);
  return s ? H.createElement(e_, { page: i, matches: s, ...n }) : null;
}
function t_(i) {
  let { manifest: n, routeModules: a } = v0(),
    [s, r] = H.useState([]);
  return (
    H.useEffect(() => {
      let u = !1;
      return (
        Fx(i, n, a).then((c) => {
          u || r(c);
        }),
        () => {
          u = !0;
        }
      );
    }, [i, n, a]),
    s
  );
}
function e_({ page: i, matches: n, ...a }) {
  let s = Oi(),
    { manifest: r, routeModules: u } = v0(),
    { basename: c } = b0(),
    { loaderData: h, matches: m } = Px(),
    g = H.useMemo(() => Gg(i, n, m, r, s, "data"), [i, n, m, r, s]),
    p = H.useMemo(() => Gg(i, n, m, r, s, "assets"), [i, n, m, r, s]),
    b = H.useMemo(() => {
      if (i === s.pathname + s.search + s.hash) return [];
      let T = new Set(),
        M = !1;
      if (
        (n.forEach((N) => {
          let X = r.routes[N.route.id];
          !X ||
            !X.hasLoader ||
            ((!g.some((J) => J.route.id === N.route.id) &&
              N.route.id in h &&
              u[N.route.id]?.shouldRevalidate) ||
            X.hasClientLoader
              ? (M = !0)
              : T.add(N.route.id));
        }),
        T.size === 0)
      )
        return [];
      let w = Xx(i, c, "data");
      return (
        M &&
          T.size > 0 &&
          w.searchParams.set(
            "_routes",
            n
              .filter((N) => T.has(N.route.id))
              .map((N) => N.route.id)
              .join(","),
          ),
        [w.pathname + w.search]
      );
    }, [c, h, s, r, g, n, i, u]),
    x = H.useMemo(() => Zx(p, r), [p, r]),
    S = t_(p);
  return H.createElement(
    H.Fragment,
    null,
    b.map((T) =>
      H.createElement("link", {
        key: T,
        rel: "prefetch",
        as: "fetch",
        href: T,
        ...a,
      }),
    ),
    x.map((T) =>
      H.createElement("link", { key: T, rel: "modulepreload", href: T, ...a }),
    ),
    S.map(({ key: T, link: M }) =>
      H.createElement("link", { key: T, nonce: a.nonce, ...M }),
    ),
  );
}
function n_(...i) {
  return (n) => {
    i.forEach((a) => {
      typeof a == "function" ? a(n) : a != null && (a.current = n);
    });
  };
}
var i_ =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  i_ && (window.__reactRouterVersion = "7.11.0");
} catch {}
function a_({
  basename: i,
  children: n,
  unstable_useTransitions: a,
  window: s,
}) {
  let r = H.useRef();
  r.current == null && (r.current = Hv({ window: s, v5Compat: !0 }));
  let u = r.current,
    [c, h] = H.useState({ action: u.action, location: u.location }),
    m = H.useCallback(
      (g) => {
        a === !1 ? h(g) : H.startTransition(() => h(g));
      },
      [a],
    );
  return (
    H.useLayoutEffect(() => u.listen(m), [u, m]),
    H.createElement(Nx, {
      basename: i,
      children: n,
      location: c.location,
      navigationType: c.action,
      navigator: u,
      unstable_useTransitions: a,
    })
  );
}
var x0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ls = H.forwardRef(function (
    {
      onClick: n,
      discover: a = "render",
      prefetch: s = "none",
      relative: r,
      reloadDocument: u,
      replace: c,
      state: h,
      target: m,
      to: g,
      preventScrollReset: p,
      viewTransition: b,
      unstable_defaultShouldRevalidate: x,
      ...S
    },
    T,
  ) {
    let { basename: M, unstable_useTransitions: w } = H.useContext(Fe),
      N = typeof g == "string" && x0.test(g),
      X = u0(g, M);
    g = X.to;
    let J = yx(g, { relative: r }),
      [W, G, et] = $x(s, S),
      z = r_(g, {
        replace: c,
        state: h,
        target: m,
        preventScrollReset: p,
        relative: r,
        viewTransition: b,
        unstable_defaultShouldRevalidate: x,
        unstable_useTransitions: w,
      });
    function _(j) {
      (n && n(j), j.defaultPrevented || z(j));
    }
    let A = H.createElement("a", {
      ...S,
      ...et,
      href: X.absoluteURL || J,
      onClick: X.isExternal || u ? n : _,
      ref: n_(T, G),
      target: m,
      "data-discover": !N && a === "render" ? "true" : void 0,
    });
    return W && !N
      ? H.createElement(H.Fragment, null, A, H.createElement(Ix, { page: J }))
      : A;
  });
ls.displayName = "Link";
var l_ = H.forwardRef(function (
  {
    "aria-current": n = "page",
    caseSensitive: a = !1,
    className: s = "",
    end: r = !1,
    style: u,
    to: c,
    viewTransition: h,
    children: m,
    ...g
  },
  p,
) {
  let b = vs(c, { relative: g.relative }),
    x = Oi(),
    S = H.useContext(yr),
    { navigator: T, basename: M } = H.useContext(Fe),
    w = S != null && d_(b) && h === !0,
    N = T.encodeLocation ? T.encodeLocation(b).pathname : b.pathname,
    X = x.pathname,
    J =
      S && S.navigation && S.navigation.location
        ? S.navigation.location.pathname
        : null;
  (a ||
    ((X = X.toLowerCase()),
    (J = J ? J.toLowerCase() : null),
    (N = N.toLowerCase())),
    J && M && (J = Pn(J, M) || J));
  const W = N !== "/" && N.endsWith("/") ? N.length - 1 : N.length;
  let G = X === N || (!r && X.startsWith(N) && X.charAt(W) === "/"),
    et =
      J != null &&
      (J === N || (!r && J.startsWith(N) && J.charAt(N.length) === "/")),
    z = { isActive: G, isPending: et, isTransitioning: w },
    _ = G ? n : void 0,
    A;
  typeof s == "function"
    ? (A = s(z))
    : (A = [
        s,
        G ? "active" : null,
        et ? "pending" : null,
        w ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let j = typeof u == "function" ? u(z) : u;
  return H.createElement(
    ls,
    {
      ...g,
      "aria-current": _,
      className: A,
      ref: p,
      style: j,
      to: c,
      viewTransition: h,
    },
    typeof m == "function" ? m(z) : m,
  );
});
l_.displayName = "NavLink";
var s_ = H.forwardRef(
  (
    {
      discover: i = "render",
      fetcherKey: n,
      navigate: a,
      reloadDocument: s,
      replace: r,
      state: u,
      method: c = ar,
      action: h,
      onSubmit: m,
      relative: g,
      preventScrollReset: p,
      viewTransition: b,
      unstable_defaultShouldRevalidate: x,
      ...S
    },
    T,
  ) => {
    let { unstable_useTransitions: M } = H.useContext(Fe),
      w = f_(),
      N = h_(h, { relative: g }),
      X = c.toLowerCase() === "get" ? "get" : "post",
      J = typeof h == "string" && x0.test(h),
      W = (G) => {
        if ((m && m(G), G.defaultPrevented)) return;
        G.preventDefault();
        let et = G.nativeEvent.submitter,
          z = et?.getAttribute("formmethod") || c,
          _ = () =>
            w(et || G.currentTarget, {
              fetcherKey: n,
              method: z,
              navigate: a,
              replace: r,
              state: u,
              relative: g,
              preventScrollReset: p,
              viewTransition: b,
              unstable_defaultShouldRevalidate: x,
            });
        M && a !== !1 ? H.startTransition(() => _()) : _();
      };
    return H.createElement("form", {
      ref: T,
      method: X,
      action: N,
      onSubmit: s ? m : W,
      ...S,
      "data-discover": !J && i === "render" ? "true" : void 0,
    });
  },
);
s_.displayName = "Form";
function o_(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function _0(i) {
  let n = H.useContext(Pa);
  return ($t(n, o_(i)), n);
}
function r_(
  i,
  {
    target: n,
    replace: a,
    state: s,
    preventScrollReset: r,
    relative: u,
    viewTransition: c,
    unstable_defaultShouldRevalidate: h,
    unstable_useTransitions: m,
  } = {},
) {
  let g = br(),
    p = Oi(),
    b = vs(i, { relative: u });
  return H.useCallback(
    (x) => {
      if (Ux(x, n)) {
        x.preventDefault();
        let S = a !== void 0 ? a : fs(p) === fs(b),
          T = () =>
            g(i, {
              replace: S,
              state: s,
              preventScrollReset: r,
              relative: u,
              viewTransition: c,
              unstable_defaultShouldRevalidate: h,
            });
        m ? H.startTransition(() => T()) : T();
      }
    },
    [p, g, b, a, s, n, i, r, u, c, h, m],
  );
}
var u_ = 0,
  c_ = () => `__${String(++u_)}__`;
function f_() {
  let { router: i } = _0("useSubmit"),
    { basename: n } = H.useContext(Fe),
    a = Cx(),
    s = i.fetch,
    r = i.navigate;
  return H.useCallback(
    async (u, c = {}) => {
      let { action: h, method: m, encType: g, formData: p, body: b } = Vx(u, n);
      if (c.navigate === !1) {
        let x = c.fetcherKey || c_();
        await s(x, a, c.action || h, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: p,
          body: b,
          formMethod: c.method || m,
          formEncType: c.encType || g,
          flushSync: c.flushSync,
        });
      } else
        await r(c.action || h, {
          unstable_defaultShouldRevalidate: c.unstable_defaultShouldRevalidate,
          preventScrollReset: c.preventScrollReset,
          formData: p,
          body: b,
          formMethod: c.method || m,
          formEncType: c.encType || g,
          replace: c.replace,
          state: c.state,
          fromRouteId: a,
          flushSync: c.flushSync,
          viewTransition: c.viewTransition,
        });
    },
    [s, r, n, a],
  );
}
function h_(i, { relative: n } = {}) {
  let { basename: a } = H.useContext(Fe),
    s = H.useContext(Tn);
  $t(s, "useFormAction must be used inside a RouteContext");
  let [r] = s.matches.slice(-1),
    u = { ...vs(i || ".", { relative: n }) },
    c = Oi();
  if (i == null) {
    u.search = c.search;
    let h = new URLSearchParams(u.search),
      m = h.getAll("index");
    if (m.some((p) => p === "")) {
      (h.delete("index"),
        m.filter((b) => b).forEach((b) => h.append("index", b)));
      let p = h.toString();
      u.search = p ? `?${p}` : "";
    }
  }
  return (
    (!i || i === ".") &&
      r.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (u.pathname = u.pathname === "/" ? a : Jn([a, u.pathname])),
    fs(u)
  );
}
function d_(i, { relative: n } = {}) {
  let a = H.useContext(f0);
  $t(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: s } = _0("useViewTransitionState"),
    r = vs(i, { relative: n });
  if (!a.isTransitioning) return !1;
  let u = Pn(a.currentLocation.pathname, s) || a.currentLocation.pathname,
    c = Pn(a.nextLocation.pathname, s) || a.nextLocation.pathname;
  return ur(r.pathname, c) != null || ur(r.pathname, u) != null;
}
const m_ = () => {
  const i = br();
  return D.jsxs("div", {
    className: "flex flex-col items-center justify-center min-h-screen",
    children: [
      D.jsx("h1", {
        className: "text-4xl font-bold mb-8",
        children: "Adaptive Signal Processing",
      }),
      D.jsxs("div", {
        className: "flex gap-5",
        children: [
          D.jsx("button", {
            className:
              "px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-black font-semibold border-2 border-black",
            onClick: () => i("/lmsst"),
            children: "Non-Stationary LMS",
          }),
          D.jsx("button", {
            className:
              "px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-black font-semibold border-2 border-black",
            onClick: () => i("/rlsst"),
            children: "Non-Stationary RLS",
          }),
        ],
      }),
      D.jsx("h2", {
        className: "p-4 text-xl mt-8",
        children: "Which algorithm you wanna try out",
      }),
    ],
  });
};
function xs(i) {
  return (i + 0.5) | 0;
}
const wi = (i, n, a) => Math.max(Math.min(i, a), n);
function es(i) {
  return wi(xs(i * 2.55), 0, 255);
}
function Ti(i) {
  return wi(xs(i * 255), 0, 255);
}
function Wn(i) {
  return wi(xs(i / 2.55) / 100, 0, 1);
}
function Qg(i) {
  return wi(xs(i * 100), 0, 100);
}
const on = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  ef = [..."0123456789ABCDEF"],
  g_ = (i) => ef[i & 15],
  p_ = (i) => ef[(i & 240) >> 4] + ef[i & 15],
  Qo = (i) => (i & 240) >> 4 === (i & 15),
  y_ = (i) => Qo(i.r) && Qo(i.g) && Qo(i.b) && Qo(i.a);
function b_(i) {
  var n = i.length,
    a;
  return (
    i[0] === "#" &&
      (n === 4 || n === 5
        ? (a = {
            r: 255 & (on[i[1]] * 17),
            g: 255 & (on[i[2]] * 17),
            b: 255 & (on[i[3]] * 17),
            a: n === 5 ? on[i[4]] * 17 : 255,
          })
        : (n === 7 || n === 9) &&
          (a = {
            r: (on[i[1]] << 4) | on[i[2]],
            g: (on[i[3]] << 4) | on[i[4]],
            b: (on[i[5]] << 4) | on[i[6]],
            a: n === 9 ? (on[i[7]] << 4) | on[i[8]] : 255,
          })),
    a
  );
}
const v_ = (i, n) => (i < 255 ? n(i) : "");
function x_(i) {
  var n = y_(i) ? g_ : p_;
  return i ? "#" + n(i.r) + n(i.g) + n(i.b) + v_(i.a, n) : void 0;
}
const __ =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function S0(i, n, a) {
  const s = n * Math.min(a, 1 - a),
    r = (u, c = (u + i / 30) % 12) =>
      a - s * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  return [r(0), r(8), r(4)];
}
function S_(i, n, a) {
  const s = (r, u = (r + i / 60) % 6) =>
    a - a * n * Math.max(Math.min(u, 4 - u, 1), 0);
  return [s(5), s(3), s(1)];
}
function M_(i, n, a) {
  const s = S0(i, 1, 0.5);
  let r;
  for (n + a > 1 && ((r = 1 / (n + a)), (n *= r), (a *= r)), r = 0; r < 3; r++)
    ((s[r] *= 1 - n - a), (s[r] += n));
  return s;
}
function E_(i, n, a, s, r) {
  return i === r
    ? (n - a) / s + (n < a ? 6 : 0)
    : n === r
      ? (a - i) / s + 2
      : (i - n) / s + 4;
}
function bf(i) {
  const a = i.r / 255,
    s = i.g / 255,
    r = i.b / 255,
    u = Math.max(a, s, r),
    c = Math.min(a, s, r),
    h = (u + c) / 2;
  let m, g, p;
  return (
    u !== c &&
      ((p = u - c),
      (g = h > 0.5 ? p / (2 - u - c) : p / (u + c)),
      (m = E_(a, s, r, p, u)),
      (m = m * 60 + 0.5)),
    [m | 0, g || 0, h]
  );
}
function vf(i, n, a, s) {
  return (Array.isArray(n) ? i(n[0], n[1], n[2]) : i(n, a, s)).map(Ti);
}
function xf(i, n, a) {
  return vf(S0, i, n, a);
}
function w_(i, n, a) {
  return vf(M_, i, n, a);
}
function A_(i, n, a) {
  return vf(S_, i, n, a);
}
function M0(i) {
  return ((i % 360) + 360) % 360;
}
function T_(i) {
  const n = __.exec(i);
  let a = 255,
    s;
  if (!n) return;
  n[5] !== s && (a = n[6] ? es(+n[5]) : Ti(+n[5]));
  const r = M0(+n[2]),
    u = +n[3] / 100,
    c = +n[4] / 100;
  return (
    n[1] === "hwb"
      ? (s = w_(r, u, c))
      : n[1] === "hsv"
        ? (s = A_(r, u, c))
        : (s = xf(r, u, c)),
    { r: s[0], g: s[1], b: s[2], a }
  );
}
function C_(i, n) {
  var a = bf(i);
  ((a[0] = M0(a[0] + n)),
    (a = xf(a)),
    (i.r = a[0]),
    (i.g = a[1]),
    (i.b = a[2]));
}
function O_(i) {
  if (!i) return;
  const n = bf(i),
    a = n[0],
    s = Qg(n[1]),
    r = Qg(n[2]);
  return i.a < 255
    ? `hsla(${a}, ${s}%, ${r}%, ${Wn(i.a)})`
    : `hsl(${a}, ${s}%, ${r}%)`;
}
const Fg = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  Zg = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function D_() {
  const i = {},
    n = Object.keys(Zg),
    a = Object.keys(Fg);
  let s, r, u, c, h;
  for (s = 0; s < n.length; s++) {
    for (c = h = n[s], r = 0; r < a.length; r++)
      ((u = a[r]), (h = h.replace(u, Fg[u])));
    ((u = parseInt(Zg[c], 16)),
      (i[h] = [(u >> 16) & 255, (u >> 8) & 255, u & 255]));
  }
  return i;
}
let Fo;
function R_(i) {
  Fo || ((Fo = D_()), (Fo.transparent = [0, 0, 0, 0]));
  const n = Fo[i.toLowerCase()];
  return n && { r: n[0], g: n[1], b: n[2], a: n.length === 4 ? n[3] : 255 };
}
const z_ =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function N_(i) {
  const n = z_.exec(i);
  let a = 255,
    s,
    r,
    u;
  if (n) {
    if (n[7] !== s) {
      const c = +n[7];
      a = n[8] ? es(c) : wi(c * 255, 0, 255);
    }
    return (
      (s = +n[1]),
      (r = +n[3]),
      (u = +n[5]),
      (s = 255 & (n[2] ? es(s) : wi(s, 0, 255))),
      (r = 255 & (n[4] ? es(r) : wi(r, 0, 255))),
      (u = 255 & (n[6] ? es(u) : wi(u, 0, 255))),
      { r: s, g: r, b: u, a }
    );
  }
}
function j_(i) {
  return (
    i &&
    (i.a < 255
      ? `rgba(${i.r}, ${i.g}, ${i.b}, ${Wn(i.a)})`
      : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const Gc = (i) =>
    i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
  Fa = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function k_(i, n, a) {
  const s = Fa(Wn(i.r)),
    r = Fa(Wn(i.g)),
    u = Fa(Wn(i.b));
  return {
    r: Ti(Gc(s + a * (Fa(Wn(n.r)) - s))),
    g: Ti(Gc(r + a * (Fa(Wn(n.g)) - r))),
    b: Ti(Gc(u + a * (Fa(Wn(n.b)) - u))),
    a: i.a + a * (n.a - i.a),
  };
}
function Zo(i, n, a) {
  if (i) {
    let s = bf(i);
    ((s[n] = Math.max(0, Math.min(s[n] + s[n] * a, n === 0 ? 360 : 1))),
      (s = xf(s)),
      (i.r = s[0]),
      (i.g = s[1]),
      (i.b = s[2]));
  }
}
function E0(i, n) {
  return i && Object.assign(n || {}, i);
}
function Kg(i) {
  var n = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((n = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (n.a = Ti(i[3])))
      : ((n = E0(i, { r: 0, g: 0, b: 0, a: 1 })), (n.a = Ti(n.a))),
    n
  );
}
function L_(i) {
  return i.charAt(0) === "r" ? N_(i) : T_(i);
}
class hs {
  constructor(n) {
    if (n instanceof hs) return n;
    const a = typeof n;
    let s;
    (a === "object"
      ? (s = Kg(n))
      : a === "string" && (s = b_(n) || R_(n) || L_(n)),
      (this._rgb = s),
      (this._valid = !!s));
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var n = E0(this._rgb);
    return (n && (n.a = Wn(n.a)), n);
  }
  set rgb(n) {
    this._rgb = Kg(n);
  }
  rgbString() {
    return this._valid ? j_(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? x_(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? O_(this._rgb) : void 0;
  }
  mix(n, a) {
    if (n) {
      const s = this.rgb,
        r = n.rgb;
      let u;
      const c = a === u ? 0.5 : a,
        h = 2 * c - 1,
        m = s.a - r.a,
        g = ((h * m === -1 ? h : (h + m) / (1 + h * m)) + 1) / 2;
      ((u = 1 - g),
        (s.r = 255 & (g * s.r + u * r.r + 0.5)),
        (s.g = 255 & (g * s.g + u * r.g + 0.5)),
        (s.b = 255 & (g * s.b + u * r.b + 0.5)),
        (s.a = c * s.a + (1 - c) * r.a),
        (this.rgb = s));
    }
    return this;
  }
  interpolate(n, a) {
    return (n && (this._rgb = k_(this._rgb, n._rgb, a)), this);
  }
  clone() {
    return new hs(this.rgb);
  }
  alpha(n) {
    return ((this._rgb.a = Ti(n)), this);
  }
  clearer(n) {
    const a = this._rgb;
    return ((a.a *= 1 - n), this);
  }
  greyscale() {
    const n = this._rgb,
      a = xs(n.r * 0.3 + n.g * 0.59 + n.b * 0.11);
    return ((n.r = n.g = n.b = a), this);
  }
  opaquer(n) {
    const a = this._rgb;
    return ((a.a *= 1 + n), this);
  }
  negate() {
    const n = this._rgb;
    return ((n.r = 255 - n.r), (n.g = 255 - n.g), (n.b = 255 - n.b), this);
  }
  lighten(n) {
    return (Zo(this._rgb, 2, n), this);
  }
  darken(n) {
    return (Zo(this._rgb, 2, -n), this);
  }
  saturate(n) {
    return (Zo(this._rgb, 1, n), this);
  }
  desaturate(n) {
    return (Zo(this._rgb, 1, -n), this);
  }
  rotate(n) {
    return (C_(this._rgb, n), this);
  }
}
function Fn() {}
const H_ = (() => {
  let i = 0;
  return () => i++;
})();
function Ft(i) {
  return i == null;
}
function de(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const n = Object.prototype.toString.call(i);
  return n.slice(0, 7) === "[object" && n.slice(-6) === "Array]";
}
function kt(i) {
  return i !== null && Object.prototype.toString.call(i) === "[object Object]";
}
function cn(i) {
  return (typeof i == "number" || i instanceof Number) && isFinite(+i);
}
function Sn(i, n) {
  return cn(i) ? i : n;
}
function Dt(i, n) {
  return typeof i > "u" ? n : i;
}
const B_ = (i, n) =>
  typeof i == "string" && i.endsWith("%") ? (parseFloat(i) / 100) * n : +i;
function Jt(i, n, a) {
  if (i && typeof i.call == "function") return i.apply(a, n);
}
function qt(i, n, a, s) {
  let r, u, c;
  if (de(i)) for (u = i.length, r = 0; r < u; r++) n.call(a, i[r], r);
  else if (kt(i))
    for (c = Object.keys(i), u = c.length, r = 0; r < u; r++)
      n.call(a, i[c[r]], c[r]);
}
function cr(i, n) {
  let a, s, r, u;
  if (!i || !n || i.length !== n.length) return !1;
  for (a = 0, s = i.length; a < s; ++a)
    if (
      ((r = i[a]),
      (u = n[a]),
      r.datasetIndex !== u.datasetIndex || r.index !== u.index)
    )
      return !1;
  return !0;
}
function fr(i) {
  if (de(i)) return i.map(fr);
  if (kt(i)) {
    const n = Object.create(null),
      a = Object.keys(i),
      s = a.length;
    let r = 0;
    for (; r < s; ++r) n[a[r]] = fr(i[a[r]]);
    return n;
  }
  return i;
}
function w0(i) {
  return ["__proto__", "prototype", "constructor"].indexOf(i) === -1;
}
function U_(i, n, a, s) {
  if (!w0(i)) return;
  const r = n[i],
    u = a[i];
  kt(r) && kt(u) ? ds(r, u, s) : (n[i] = fr(u));
}
function ds(i, n, a) {
  const s = de(n) ? n : [n],
    r = s.length;
  if (!kt(i)) return i;
  a = a || {};
  const u = a.merger || U_;
  let c;
  for (let h = 0; h < r; ++h) {
    if (((c = s[h]), !kt(c))) continue;
    const m = Object.keys(c);
    for (let g = 0, p = m.length; g < p; ++g) u(m[g], i, c, a);
  }
  return i;
}
function ss(i, n) {
  return ds(i, n, { merger: q_ });
}
function q_(i, n, a) {
  if (!w0(i)) return;
  const s = n[i],
    r = a[i];
  kt(s) && kt(r)
    ? ss(s, r)
    : Object.prototype.hasOwnProperty.call(n, i) || (n[i] = fr(r));
}
const Wg = { "": (i) => i, x: (i) => i.x, y: (i) => i.y };
function Y_(i) {
  const n = i.split("."),
    a = [];
  let s = "";
  for (const r of n)
    ((s += r),
      s.endsWith("\\") ? (s = s.slice(0, -1) + ".") : (a.push(s), (s = "")));
  return a;
}
function V_(i) {
  const n = Y_(i);
  return (a) => {
    for (const s of n) {
      if (s === "") break;
      a = a && a[s];
    }
    return a;
  };
}
function hr(i, n) {
  return (Wg[n] || (Wg[n] = V_(n)))(i);
}
function _f(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const dr = (i) => typeof i < "u",
  Ci = (i) => typeof i == "function",
  Jg = (i, n) => {
    if (i.size !== n.size) return !1;
    for (const a of i) if (!n.has(a)) return !1;
    return !0;
  };
function X_(i) {
  return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu";
}
const me = Math.PI,
  An = 2 * me,
  G_ = An + me,
  mr = Number.POSITIVE_INFINITY,
  Q_ = me / 180,
  pn = me / 2,
  Ji = me / 4,
  Pg = (me * 2) / 3,
  A0 = Math.log10,
  Ka = Math.sign;
function os(i, n, a) {
  return Math.abs(i - n) < a;
}
function $g(i) {
  const n = Math.round(i);
  i = os(i, n, i / 1e3) ? n : i;
  const a = Math.pow(10, Math.floor(A0(i))),
    s = i / a;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * a;
}
function F_(i) {
  const n = [],
    a = Math.sqrt(i);
  let s;
  for (s = 1; s < a; s++) i % s === 0 && (n.push(s), n.push(i / s));
  return (a === (a | 0) && n.push(a), n.sort((r, u) => r - u).pop(), n);
}
function Z_(i) {
  return (
    typeof i == "symbol" ||
    (typeof i == "object" &&
      i !== null &&
      !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i))
  );
}
function ms(i) {
  return !Z_(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function K_(i, n) {
  const a = Math.round(i);
  return a - n <= i && a + n >= i;
}
function W_(i, n, a) {
  let s, r, u;
  for (s = 0, r = i.length; s < r; s++)
    ((u = i[s][a]),
      isNaN(u) || ((n.min = Math.min(n.min, u)), (n.max = Math.max(n.max, u))));
}
function ea(i) {
  return i * (me / 180);
}
function J_(i) {
  return i * (180 / me);
}
function Ig(i) {
  if (!cn(i)) return;
  let n = 1,
    a = 0;
  for (; Math.round(i * n) / n !== i; ) ((n *= 10), a++);
  return a;
}
function P_(i, n) {
  const a = n.x - i.x,
    s = n.y - i.y,
    r = Math.sqrt(a * a + s * s);
  let u = Math.atan2(s, a);
  return (u < -0.5 * me && (u += An), { angle: u, distance: r });
}
function nf(i, n) {
  return Math.sqrt(Math.pow(n.x - i.x, 2) + Math.pow(n.y - i.y, 2));
}
function $_(i, n) {
  return ((i - n + G_) % An) - me;
}
function Ei(i) {
  return ((i % An) + An) % An;
}
function T0(i, n, a, s) {
  const r = Ei(i),
    u = Ei(n),
    c = Ei(a),
    h = Ei(u - r),
    m = Ei(c - r),
    g = Ei(r - u),
    p = Ei(r - c);
  return r === u || r === c || (s && u === c) || (h > m && g < p);
}
function rn(i, n, a) {
  return Math.max(n, Math.min(a, i));
}
function I_(i) {
  return rn(i, -32768, 32767);
}
function ns(i, n, a, s = 1e-6) {
  return i >= Math.min(n, a) - s && i <= Math.max(n, a) + s;
}
function Sf(i, n, a) {
  a = a || ((c) => i[c] < n);
  let s = i.length - 1,
    r = 0,
    u;
  for (; s - r > 1; ) ((u = (r + s) >> 1), a(u) ? (r = u) : (s = u));
  return { lo: r, hi: s };
}
const na = (i, n, a, s) =>
    Sf(
      i,
      a,
      s
        ? (r) => {
            const u = i[r][n];
            return u < a || (u === a && i[r + 1][n] === a);
          }
        : (r) => i[r][n] < a,
    ),
  t1 = (i, n, a) => Sf(i, a, (s) => i[s][n] >= a);
function e1(i, n, a) {
  let s = 0,
    r = i.length;
  for (; s < r && i[s] < n; ) s++;
  for (; r > s && i[r - 1] > a; ) r--;
  return s > 0 || r < i.length ? i.slice(s, r) : i;
}
const C0 = ["push", "pop", "shift", "splice", "unshift"];
function n1(i, n) {
  if (i._chartjs) {
    i._chartjs.listeners.push(n);
    return;
  }
  (Object.defineProperty(i, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [n] },
  }),
    C0.forEach((a) => {
      const s = "_onData" + _f(a),
        r = i[a];
      Object.defineProperty(i, a, {
        configurable: !0,
        enumerable: !1,
        value(...u) {
          const c = r.apply(this, u);
          return (
            i._chartjs.listeners.forEach((h) => {
              typeof h[s] == "function" && h[s](...u);
            }),
            c
          );
        },
      });
    }));
}
function tp(i, n) {
  const a = i._chartjs;
  if (!a) return;
  const s = a.listeners,
    r = s.indexOf(n);
  (r !== -1 && s.splice(r, 1),
    !(s.length > 0) &&
      (C0.forEach((u) => {
        delete i[u];
      }),
      delete i._chartjs));
}
function i1(i) {
  const n = new Set(i);
  return n.size === i.length ? i : Array.from(n);
}
const O0 = (function () {
  return typeof window > "u"
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function D0(i, n) {
  let a = [],
    s = !1;
  return function (...r) {
    ((a = r),
      s ||
        ((s = !0),
        O0.call(window, () => {
          ((s = !1), i.apply(n, a));
        })));
  };
}
function a1(i, n) {
  let a;
  return function (...s) {
    return (
      n ? (clearTimeout(a), (a = setTimeout(i, n, s))) : i.apply(this, s),
      n
    );
  };
}
const Mf = (i) => (i === "start" ? "left" : i === "end" ? "right" : "center"),
  Ee = (i, n, a) => (i === "start" ? n : i === "end" ? a : (n + a) / 2),
  l1 = (i, n, a, s) =>
    i === (s ? "left" : "right") ? a : i === "center" ? (n + a) / 2 : n;
function s1(i, n, a) {
  const s = n.length;
  let r = 0,
    u = s;
  if (i._sorted) {
    const { iScale: c, vScale: h, _parsed: m } = i,
      g = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null,
      p = c.axis,
      { min: b, max: x, minDefined: S, maxDefined: T } = c.getUserBounds();
    if (S) {
      if (
        ((r = Math.min(
          na(m, p, b).lo,
          a ? s : na(n, p, c.getPixelForValue(b)).lo,
        )),
        g)
      ) {
        const M = m
          .slice(0, r + 1)
          .reverse()
          .findIndex((w) => !Ft(w[h.axis]));
        r -= Math.max(0, M);
      }
      r = rn(r, 0, s - 1);
    }
    if (T) {
      let M = Math.max(
        na(m, c.axis, x, !0).hi + 1,
        a ? 0 : na(n, p, c.getPixelForValue(x), !0).hi + 1,
      );
      if (g) {
        const w = m.slice(M - 1).findIndex((N) => !Ft(N[h.axis]));
        M += Math.max(0, w);
      }
      u = rn(M, r, s) - r;
    } else u = s - r;
  }
  return { start: r, count: u };
}
function o1(i) {
  const { xScale: n, yScale: a, _scaleRanges: s } = i,
    r = { xmin: n.min, xmax: n.max, ymin: a.min, ymax: a.max };
  if (!s) return ((i._scaleRanges = r), !0);
  const u =
    s.xmin !== n.min ||
    s.xmax !== n.max ||
    s.ymin !== a.min ||
    s.ymax !== a.max;
  return (Object.assign(s, r), u);
}
const Ko = (i) => i === 0 || i === 1,
  ep = (i, n, a) =>
    -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - n) * An) / a)),
  np = (i, n, a) => Math.pow(2, -10 * i) * Math.sin(((i - n) * An) / a) + 1,
  rs = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * pn) + 1,
    easeOutSine: (i) => Math.sin(i * pn),
    easeInOutSine: (i) => -0.5 * (Math.cos(me * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      Ko(i)
        ? i
        : i < 0.5
          ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (Ko(i) ? i : ep(i, 0.075, 0.3)),
    easeOutElastic: (i) => (Ko(i) ? i : np(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return Ko(i)
        ? i
        : i < 0.5
          ? 0.5 * ep(i * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * np(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let n = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((n *= 1.525) + 1) * i - n))
        : 0.5 * ((i -= 2) * i * (((n *= 1.525) + 1) * i + n) + 2);
    },
    easeInBounce: (i) => 1 - rs.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
          ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
          : i < 2.5 / 2.75
            ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
            : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? rs.easeInBounce(i * 2) * 0.5
        : rs.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
function Ef(i) {
  if (i && typeof i == "object") {
    const n = i.toString();
    return n === "[object CanvasPattern]" || n === "[object CanvasGradient]";
  }
  return !1;
}
function ip(i) {
  return Ef(i) ? i : new hs(i);
}
function Qc(i) {
  return Ef(i) ? i : new hs(i).saturate(0.5).darken(0.1).hexString();
}
const r1 = ["x", "y", "borderWidth", "radius", "tension"],
  u1 = ["color", "borderColor", "backgroundColor"];
function c1(i) {
  (i.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    i.describe("animation", {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (n) =>
        n !== "onProgress" && n !== "onComplete" && n !== "fn",
    }),
    i.set("animations", {
      colors: { type: "color", properties: u1 },
      numbers: { type: "number", properties: r1 },
    }),
    i.describe("animations", { _fallback: "animation" }),
    i.set("transitions", {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: "transparent" },
          visible: { type: "boolean", duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: "transparent" },
          visible: { type: "boolean", easing: "linear", fn: (n) => n | 0 },
        },
      },
    }));
}
function f1(i) {
  i.set("layout", {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const ap = new Map();
function h1(i, n) {
  n = n || {};
  const a = i + JSON.stringify(n);
  let s = ap.get(a);
  return (s || ((s = new Intl.NumberFormat(i, n)), ap.set(a, s)), s);
}
function R0(i, n, a) {
  return h1(n, a).format(i);
}
const d1 = {
  values(i) {
    return de(i) ? i : "" + i;
  },
  numeric(i, n, a) {
    if (i === 0) return "0";
    const s = this.chart.options.locale;
    let r,
      u = i;
    if (a.length > 1) {
      const g = Math.max(Math.abs(a[0].value), Math.abs(a[a.length - 1].value));
      ((g < 1e-4 || g > 1e15) && (r = "scientific"), (u = m1(i, a)));
    }
    const c = A0(Math.abs(u)),
      h = isNaN(c) ? 1 : Math.max(Math.min(-1 * Math.floor(c), 20), 0),
      m = { notation: r, minimumFractionDigits: h, maximumFractionDigits: h };
    return (Object.assign(m, this.options.ticks.format), R0(i, s, m));
  },
};
function m1(i, n) {
  let a = n.length > 3 ? n[2].value - n[1].value : n[1].value - n[0].value;
  return (
    Math.abs(a) >= 1 && i !== Math.floor(i) && (a = i - Math.floor(i)),
    a
  );
}
var z0 = { formatters: d1 };
function g1(i) {
  (i.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (n, a) => a.lineWidth,
      tickColor: (n, a) => a.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: z0.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2,
    },
  }),
    i.route("scale.ticks", "color", "", "color"),
    i.route("scale.grid", "color", "", "borderColor"),
    i.route("scale.border", "color", "", "borderColor"),
    i.route("scale.title", "color", "", "color"),
    i.describe("scale", {
      _fallback: !1,
      _scriptable: (n) =>
        !n.startsWith("before") &&
        !n.startsWith("after") &&
        n !== "callback" &&
        n !== "parser",
      _indexable: (n) =>
        n !== "borderDash" && n !== "tickBorderDash" && n !== "dash",
    }),
    i.describe("scales", { _fallback: "scale" }),
    i.describe("scale.ticks", {
      _scriptable: (n) => n !== "backdropPadding" && n !== "callback",
      _indexable: (n) => n !== "backdropPadding",
    }));
}
const aa = Object.create(null),
  af = Object.create(null);
function us(i, n) {
  if (!n) return i;
  const a = n.split(".");
  for (let s = 0, r = a.length; s < r; ++s) {
    const u = a[s];
    i = i[u] || (i[u] = Object.create(null));
  }
  return i;
}
function Fc(i, n, a) {
  return typeof n == "string" ? ds(us(i, n), a) : ds(us(i, ""), n);
}
class p1 {
  constructor(n, a) {
    ((this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (s, r) => Qc(r.backgroundColor)),
      (this.hoverBorderColor = (s, r) => Qc(r.borderColor)),
      (this.hoverColor = (s, r) => Qc(r.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(n),
      this.apply(a));
  }
  set(n, a) {
    return Fc(this, n, a);
  }
  get(n) {
    return us(this, n);
  }
  describe(n, a) {
    return Fc(af, n, a);
  }
  override(n, a) {
    return Fc(aa, n, a);
  }
  route(n, a, s, r) {
    const u = us(this, n),
      c = us(this, s),
      h = "_" + a;
    Object.defineProperties(u, {
      [h]: { value: u[a], writable: !0 },
      [a]: {
        enumerable: !0,
        get() {
          const m = this[h],
            g = c[r];
          return kt(m) ? Object.assign({}, g, m) : Dt(m, g);
        },
        set(m) {
          this[h] = m;
        },
      },
    });
  }
  apply(n) {
    n.forEach((a) => a(this));
  }
}
var le = new p1(
  {
    _scriptable: (i) => !i.startsWith("on"),
    _indexable: (i) => i !== "events",
    hover: { _fallback: "interaction" },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [c1, f1, g1],
);
function y1(i) {
  return !i || Ft(i.size) || Ft(i.family)
    ? null
    : (i.style ? i.style + " " : "") +
        (i.weight ? i.weight + " " : "") +
        i.size +
        "px " +
        i.family;
}
function lp(i, n, a, s, r) {
  let u = n[r];
  return (
    u || ((u = n[r] = i.measureText(r).width), a.push(r)),
    u > s && (s = u),
    s
  );
}
function Pi(i, n, a) {
  const s = i.currentDevicePixelRatio,
    r = a !== 0 ? Math.max(a / 2, 0.5) : 0;
  return Math.round((n - r) * s) / s + r;
}
function sp(i, n) {
  (!n && !i) ||
    ((n = n || i.getContext("2d")),
    n.save(),
    n.resetTransform(),
    n.clearRect(0, 0, i.width, i.height),
    n.restore());
}
function lf(i, n, a, s) {
  N0(i, n, a, s, null);
}
function N0(i, n, a, s, r) {
  let u, c, h, m, g, p, b, x;
  const S = n.pointStyle,
    T = n.rotation,
    M = n.radius;
  let w = (T || 0) * Q_;
  if (
    S &&
    typeof S == "object" &&
    ((u = S.toString()),
    u === "[object HTMLImageElement]" || u === "[object HTMLCanvasElement]")
  ) {
    (i.save(),
      i.translate(a, s),
      i.rotate(w),
      i.drawImage(S, -S.width / 2, -S.height / 2, S.width, S.height),
      i.restore());
    return;
  }
  if (!(isNaN(M) || M <= 0)) {
    switch ((i.beginPath(), S)) {
      default:
        (r ? i.ellipse(a, s, r / 2, M, 0, 0, An) : i.arc(a, s, M, 0, An),
          i.closePath());
        break;
      case "triangle":
        ((p = r ? r / 2 : M),
          i.moveTo(a + Math.sin(w) * p, s - Math.cos(w) * M),
          (w += Pg),
          i.lineTo(a + Math.sin(w) * p, s - Math.cos(w) * M),
          (w += Pg),
          i.lineTo(a + Math.sin(w) * p, s - Math.cos(w) * M),
          i.closePath());
        break;
      case "rectRounded":
        ((g = M * 0.516),
          (m = M - g),
          (c = Math.cos(w + Ji) * m),
          (b = Math.cos(w + Ji) * (r ? r / 2 - g : m)),
          (h = Math.sin(w + Ji) * m),
          (x = Math.sin(w + Ji) * (r ? r / 2 - g : m)),
          i.arc(a - b, s - h, g, w - me, w - pn),
          i.arc(a + x, s - c, g, w - pn, w),
          i.arc(a + b, s + h, g, w, w + pn),
          i.arc(a - x, s + c, g, w + pn, w + me),
          i.closePath());
        break;
      case "rect":
        if (!T) {
          ((m = Math.SQRT1_2 * M),
            (p = r ? r / 2 : m),
            i.rect(a - p, s - m, 2 * p, 2 * m));
          break;
        }
        w += Ji;
      case "rectRot":
        ((b = Math.cos(w) * (r ? r / 2 : M)),
          (c = Math.cos(w) * M),
          (h = Math.sin(w) * M),
          (x = Math.sin(w) * (r ? r / 2 : M)),
          i.moveTo(a - b, s - h),
          i.lineTo(a + x, s - c),
          i.lineTo(a + b, s + h),
          i.lineTo(a - x, s + c),
          i.closePath());
        break;
      case "crossRot":
        w += Ji;
      case "cross":
        ((b = Math.cos(w) * (r ? r / 2 : M)),
          (c = Math.cos(w) * M),
          (h = Math.sin(w) * M),
          (x = Math.sin(w) * (r ? r / 2 : M)),
          i.moveTo(a - b, s - h),
          i.lineTo(a + b, s + h),
          i.moveTo(a + x, s - c),
          i.lineTo(a - x, s + c));
        break;
      case "star":
        ((b = Math.cos(w) * (r ? r / 2 : M)),
          (c = Math.cos(w) * M),
          (h = Math.sin(w) * M),
          (x = Math.sin(w) * (r ? r / 2 : M)),
          i.moveTo(a - b, s - h),
          i.lineTo(a + b, s + h),
          i.moveTo(a + x, s - c),
          i.lineTo(a - x, s + c),
          (w += Ji),
          (b = Math.cos(w) * (r ? r / 2 : M)),
          (c = Math.cos(w) * M),
          (h = Math.sin(w) * M),
          (x = Math.sin(w) * (r ? r / 2 : M)),
          i.moveTo(a - b, s - h),
          i.lineTo(a + b, s + h),
          i.moveTo(a + x, s - c),
          i.lineTo(a - x, s + c));
        break;
      case "line":
        ((c = r ? r / 2 : Math.cos(w) * M),
          (h = Math.sin(w) * M),
          i.moveTo(a - c, s - h),
          i.lineTo(a + c, s + h));
        break;
      case "dash":
        (i.moveTo(a, s),
          i.lineTo(a + Math.cos(w) * (r ? r / 2 : M), s + Math.sin(w) * M));
        break;
      case !1:
        i.closePath();
        break;
    }
    (i.fill(), n.borderWidth > 0 && i.stroke());
  }
}
function gs(i, n, a) {
  return (
    (a = a || 0.5),
    !n ||
      (i &&
        i.x > n.left - a &&
        i.x < n.right + a &&
        i.y > n.top - a &&
        i.y < n.bottom + a)
  );
}
function wf(i, n) {
  (i.save(),
    i.beginPath(),
    i.rect(n.left, n.top, n.right - n.left, n.bottom - n.top),
    i.clip());
}
function Af(i) {
  i.restore();
}
function b1(i, n, a, s, r) {
  if (!n) return i.lineTo(a.x, a.y);
  if (r === "middle") {
    const u = (n.x + a.x) / 2;
    (i.lineTo(u, n.y), i.lineTo(u, a.y));
  } else (r === "after") != !!s ? i.lineTo(n.x, a.y) : i.lineTo(a.x, n.y);
  i.lineTo(a.x, a.y);
}
function v1(i, n, a, s) {
  if (!n) return i.lineTo(a.x, a.y);
  i.bezierCurveTo(
    s ? n.cp1x : n.cp2x,
    s ? n.cp1y : n.cp2y,
    s ? a.cp2x : a.cp1x,
    s ? a.cp2y : a.cp1y,
    a.x,
    a.y,
  );
}
function x1(i, n) {
  (n.translation && i.translate(n.translation[0], n.translation[1]),
    Ft(n.rotation) || i.rotate(n.rotation),
    n.color && (i.fillStyle = n.color),
    n.textAlign && (i.textAlign = n.textAlign),
    n.textBaseline && (i.textBaseline = n.textBaseline));
}
function _1(i, n, a, s, r) {
  if (r.strikethrough || r.underline) {
    const u = i.measureText(s),
      c = n - u.actualBoundingBoxLeft,
      h = n + u.actualBoundingBoxRight,
      m = a - u.actualBoundingBoxAscent,
      g = a + u.actualBoundingBoxDescent,
      p = r.strikethrough ? (m + g) / 2 : g;
    ((i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = r.decorationWidth || 2),
      i.moveTo(c, p),
      i.lineTo(h, p),
      i.stroke());
  }
}
function S1(i, n) {
  const a = i.fillStyle;
  ((i.fillStyle = n.color),
    i.fillRect(n.left, n.top, n.width, n.height),
    (i.fillStyle = a));
}
function ps(i, n, a, s, r, u = {}) {
  const c = de(n) ? n : [n],
    h = u.strokeWidth > 0 && u.strokeColor !== "";
  let m, g;
  for (i.save(), i.font = r.string, x1(i, u), m = 0; m < c.length; ++m)
    ((g = c[m]),
      u.backdrop && S1(i, u.backdrop),
      h &&
        (u.strokeColor && (i.strokeStyle = u.strokeColor),
        Ft(u.strokeWidth) || (i.lineWidth = u.strokeWidth),
        i.strokeText(g, a, s, u.maxWidth)),
      i.fillText(g, a, s, u.maxWidth),
      _1(i, a, s, g, u),
      (s += Number(r.lineHeight)));
  i.restore();
}
function sf(i, n) {
  const { x: a, y: s, w: r, h: u, radius: c } = n;
  (i.arc(a + c.topLeft, s + c.topLeft, c.topLeft, 1.5 * me, me, !0),
    i.lineTo(a, s + u - c.bottomLeft),
    i.arc(a + c.bottomLeft, s + u - c.bottomLeft, c.bottomLeft, me, pn, !0),
    i.lineTo(a + r - c.bottomRight, s + u),
    i.arc(
      a + r - c.bottomRight,
      s + u - c.bottomRight,
      c.bottomRight,
      pn,
      0,
      !0,
    ),
    i.lineTo(a + r, s + c.topRight),
    i.arc(a + r - c.topRight, s + c.topRight, c.topRight, 0, -pn, !0),
    i.lineTo(a + c.topLeft, s));
}
const M1 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  E1 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function w1(i, n) {
  const a = ("" + i).match(M1);
  if (!a || a[1] === "normal") return n * 1.2;
  switch (((i = +a[2]), a[3])) {
    case "px":
      return i;
    case "%":
      i /= 100;
      break;
  }
  return n * i;
}
const A1 = (i) => +i || 0;
function j0(i, n) {
  const a = {},
    s = kt(n),
    r = s ? Object.keys(n) : n,
    u = kt(i) ? (s ? (c) => Dt(i[c], i[n[c]]) : (c) => i[c]) : () => i;
  for (const c of r) a[c] = A1(u(c));
  return a;
}
function T1(i) {
  return j0(i, { top: "y", right: "x", bottom: "y", left: "x" });
}
function cs(i) {
  return j0(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function fn(i) {
  const n = T1(i);
  return ((n.width = n.left + n.right), (n.height = n.top + n.bottom), n);
}
function we(i, n) {
  ((i = i || {}), (n = n || le.font));
  let a = Dt(i.size, n.size);
  typeof a == "string" && (a = parseInt(a, 10));
  let s = Dt(i.style, n.style);
  s &&
    !("" + s).match(E1) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
  const r = {
    family: Dt(i.family, n.family),
    lineHeight: w1(Dt(i.lineHeight, n.lineHeight), a),
    size: a,
    style: s,
    weight: Dt(i.weight, n.weight),
    string: "",
  };
  return ((r.string = y1(r)), r);
}
function Wo(i, n, a, s) {
  let r, u, c;
  for (r = 0, u = i.length; r < u; ++r)
    if (((c = i[r]), c !== void 0 && c !== void 0)) return c;
}
function C1(i, n, a) {
  const { min: s, max: r } = i,
    u = B_(n, (r - s) / 2),
    c = (h, m) => (a && h === 0 ? 0 : h + m);
  return { min: c(s, -Math.abs(u)), max: c(r, u) };
}
function sa(i, n) {
  return Object.assign(Object.create(i), n);
}
function Tf(i, n = [""], a, s, r = () => i[0]) {
  const u = a || i;
  typeof s > "u" && (s = B0("_fallback", i));
  const c = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: i,
    _rootScopes: u,
    _fallback: s,
    _getTarget: r,
    override: (h) => Tf([h, ...i], n, u, s),
  };
  return new Proxy(c, {
    deleteProperty(h, m) {
      return (delete h[m], delete h._keys, delete i[0][m], !0);
    },
    get(h, m) {
      return L0(h, m, () => L1(m, n, i, h));
    },
    getOwnPropertyDescriptor(h, m) {
      return Reflect.getOwnPropertyDescriptor(h._scopes[0], m);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(h, m) {
      return rp(h).includes(m);
    },
    ownKeys(h) {
      return rp(h);
    },
    set(h, m, g) {
      const p = h._storage || (h._storage = r());
      return ((h[m] = p[m] = g), delete h._keys, !0);
    },
  });
}
function Wa(i, n, a, s) {
  const r = {
    _cacheable: !1,
    _proxy: i,
    _context: n,
    _subProxy: a,
    _stack: new Set(),
    _descriptors: k0(i, s),
    setContext: (u) => Wa(i, u, a, s),
    override: (u) => Wa(i.override(u), n, a, s),
  };
  return new Proxy(r, {
    deleteProperty(u, c) {
      return (delete u[c], delete i[c], !0);
    },
    get(u, c, h) {
      return L0(u, c, () => D1(u, c, h));
    },
    getOwnPropertyDescriptor(u, c) {
      return u._descriptors.allKeys
        ? Reflect.has(i, c)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, c);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(u, c) {
      return Reflect.has(i, c);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(u, c, h) {
      return ((i[c] = h), delete u[c], !0);
    },
  });
}
function k0(i, n = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: a = n.scriptable,
    _indexable: s = n.indexable,
    _allKeys: r = n.allKeys,
  } = i;
  return {
    allKeys: r,
    scriptable: a,
    indexable: s,
    isScriptable: Ci(a) ? a : () => a,
    isIndexable: Ci(s) ? s : () => s,
  };
}
const O1 = (i, n) => (i ? i + _f(n) : n),
  Cf = (i, n) =>
    kt(n) &&
    i !== "adapters" &&
    (Object.getPrototypeOf(n) === null || n.constructor === Object);
function L0(i, n, a) {
  if (Object.prototype.hasOwnProperty.call(i, n) || n === "constructor")
    return i[n];
  const s = a();
  return ((i[n] = s), s);
}
function D1(i, n, a) {
  const { _proxy: s, _context: r, _subProxy: u, _descriptors: c } = i;
  let h = s[n];
  return (
    Ci(h) && c.isScriptable(n) && (h = R1(n, h, i, a)),
    de(h) && h.length && (h = z1(n, h, i, c.isIndexable)),
    Cf(n, h) && (h = Wa(h, r, u && u[n], c)),
    h
  );
}
function R1(i, n, a, s) {
  const { _proxy: r, _context: u, _subProxy: c, _stack: h } = a;
  if (h.has(i))
    throw new Error(
      "Recursion detected: " + Array.from(h).join("->") + "->" + i,
    );
  h.add(i);
  let m = n(u, c || s);
  return (h.delete(i), Cf(i, m) && (m = Of(r._scopes, r, i, m)), m);
}
function z1(i, n, a, s) {
  const { _proxy: r, _context: u, _subProxy: c, _descriptors: h } = a;
  if (typeof u.index < "u" && s(i)) return n[u.index % n.length];
  if (kt(n[0])) {
    const m = n,
      g = r._scopes.filter((p) => p !== m);
    n = [];
    for (const p of m) {
      const b = Of(g, r, i, p);
      n.push(Wa(b, u, c && c[i], h));
    }
  }
  return n;
}
function H0(i, n, a) {
  return Ci(i) ? i(n, a) : i;
}
const N1 = (i, n) => (i === !0 ? n : typeof i == "string" ? hr(n, i) : void 0);
function j1(i, n, a, s, r) {
  for (const u of n) {
    const c = N1(a, u);
    if (c) {
      i.add(c);
      const h = H0(c._fallback, a, r);
      if (typeof h < "u" && h !== a && h !== s) return h;
    } else if (c === !1 && typeof s < "u" && a !== s) return null;
  }
  return !1;
}
function Of(i, n, a, s) {
  const r = n._rootScopes,
    u = H0(n._fallback, a, s),
    c = [...i, ...r],
    h = new Set();
  h.add(s);
  let m = op(h, c, a, u || a, s);
  return m === null ||
    (typeof u < "u" && u !== a && ((m = op(h, c, u, m, s)), m === null))
    ? !1
    : Tf(Array.from(h), [""], r, u, () => k1(n, a, s));
}
function op(i, n, a, s, r) {
  for (; a; ) a = j1(i, n, a, s, r);
  return a;
}
function k1(i, n, a) {
  const s = i._getTarget();
  n in s || (s[n] = {});
  const r = s[n];
  return de(r) && kt(a) ? a : r || {};
}
function L1(i, n, a, s) {
  let r;
  for (const u of n)
    if (((r = B0(O1(u, i), a)), typeof r < "u"))
      return Cf(i, r) ? Of(a, s, i, r) : r;
}
function B0(i, n) {
  for (const a of n) {
    if (!a) continue;
    const s = a[i];
    if (typeof s < "u") return s;
  }
}
function rp(i) {
  let n = i._keys;
  return (n || (n = i._keys = H1(i._scopes)), n);
}
function H1(i) {
  const n = new Set();
  for (const a of i)
    for (const s of Object.keys(a).filter((r) => !r.startsWith("_"))) n.add(s);
  return Array.from(n);
}
const B1 = Number.EPSILON || 1e-14,
  Ja = (i, n) => n < i.length && !i[n].skip && i[n],
  U0 = (i) => (i === "x" ? "y" : "x");
function U1(i, n, a, s) {
  const r = i.skip ? n : i,
    u = n,
    c = a.skip ? n : a,
    h = nf(u, r),
    m = nf(c, u);
  let g = h / (h + m),
    p = m / (h + m);
  ((g = isNaN(g) ? 0 : g), (p = isNaN(p) ? 0 : p));
  const b = s * g,
    x = s * p;
  return {
    previous: { x: u.x - b * (c.x - r.x), y: u.y - b * (c.y - r.y) },
    next: { x: u.x + x * (c.x - r.x), y: u.y + x * (c.y - r.y) },
  };
}
function q1(i, n, a) {
  const s = i.length;
  let r,
    u,
    c,
    h,
    m,
    g = Ja(i, 0);
  for (let p = 0; p < s - 1; ++p)
    if (((m = g), (g = Ja(i, p + 1)), !(!m || !g))) {
      if (os(n[p], 0, B1)) {
        a[p] = a[p + 1] = 0;
        continue;
      }
      ((r = a[p] / n[p]),
        (u = a[p + 1] / n[p]),
        (h = Math.pow(r, 2) + Math.pow(u, 2)),
        !(h <= 9) &&
          ((c = 3 / Math.sqrt(h)),
          (a[p] = r * c * n[p]),
          (a[p + 1] = u * c * n[p])));
    }
}
function Y1(i, n, a = "x") {
  const s = U0(a),
    r = i.length;
  let u,
    c,
    h,
    m = Ja(i, 0);
  for (let g = 0; g < r; ++g) {
    if (((c = h), (h = m), (m = Ja(i, g + 1)), !h)) continue;
    const p = h[a],
      b = h[s];
    (c &&
      ((u = (p - c[a]) / 3),
      (h[`cp1${a}`] = p - u),
      (h[`cp1${s}`] = b - u * n[g])),
      m &&
        ((u = (m[a] - p) / 3),
        (h[`cp2${a}`] = p + u),
        (h[`cp2${s}`] = b + u * n[g])));
  }
}
function V1(i, n = "x") {
  const a = U0(n),
    s = i.length,
    r = Array(s).fill(0),
    u = Array(s);
  let c,
    h,
    m,
    g = Ja(i, 0);
  for (c = 0; c < s; ++c)
    if (((h = m), (m = g), (g = Ja(i, c + 1)), !!m)) {
      if (g) {
        const p = g[n] - m[n];
        r[c] = p !== 0 ? (g[a] - m[a]) / p : 0;
      }
      u[c] = h
        ? g
          ? Ka(r[c - 1]) !== Ka(r[c])
            ? 0
            : (r[c - 1] + r[c]) / 2
          : r[c - 1]
        : r[c];
    }
  (q1(i, r, u), Y1(i, u, n));
}
function Jo(i, n, a) {
  return Math.max(Math.min(i, a), n);
}
function X1(i, n) {
  let a,
    s,
    r,
    u,
    c,
    h = gs(i[0], n);
  for (a = 0, s = i.length; a < s; ++a)
    ((c = u),
      (u = h),
      (h = a < s - 1 && gs(i[a + 1], n)),
      u &&
        ((r = i[a]),
        c &&
          ((r.cp1x = Jo(r.cp1x, n.left, n.right)),
          (r.cp1y = Jo(r.cp1y, n.top, n.bottom))),
        h &&
          ((r.cp2x = Jo(r.cp2x, n.left, n.right)),
          (r.cp2y = Jo(r.cp2y, n.top, n.bottom)))));
}
function G1(i, n, a, s, r) {
  let u, c, h, m;
  if (
    (n.spanGaps && (i = i.filter((g) => !g.skip)),
    n.cubicInterpolationMode === "monotone")
  )
    V1(i, r);
  else {
    let g = s ? i[i.length - 1] : i[0];
    for (u = 0, c = i.length; u < c; ++u)
      ((h = i[u]),
        (m = U1(g, h, i[Math.min(u + 1, c - (s ? 0 : 1)) % c], n.tension)),
        (h.cp1x = m.previous.x),
        (h.cp1y = m.previous.y),
        (h.cp2x = m.next.x),
        (h.cp2y = m.next.y),
        (g = h));
  }
  n.capBezierPoints && X1(i, a);
}
function Df() {
  return typeof window < "u" && typeof document < "u";
}
function Rf(i) {
  let n = i.parentNode;
  return (n && n.toString() === "[object ShadowRoot]" && (n = n.host), n);
}
function gr(i, n, a) {
  let s;
  return (
    typeof i == "string"
      ? ((s = parseInt(i, 10)),
        i.indexOf("%") !== -1 && (s = (s / 100) * n.parentNode[a]))
      : (s = i),
    s
  );
}
const xr = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function Q1(i, n) {
  return xr(i).getPropertyValue(n);
}
const F1 = ["top", "right", "bottom", "left"];
function ia(i, n, a) {
  const s = {};
  a = a ? "-" + a : "";
  for (let r = 0; r < 4; r++) {
    const u = F1[r];
    s[u] = parseFloat(i[n + "-" + u + a]) || 0;
  }
  return ((s.width = s.left + s.right), (s.height = s.top + s.bottom), s);
}
const Z1 = (i, n, a) => (i > 0 || n > 0) && (!a || !a.shadowRoot);
function K1(i, n) {
  const a = i.touches,
    s = a && a.length ? a[0] : i,
    { offsetX: r, offsetY: u } = s;
  let c = !1,
    h,
    m;
  if (Z1(r, u, i.target)) ((h = r), (m = u));
  else {
    const g = n.getBoundingClientRect();
    ((h = s.clientX - g.left), (m = s.clientY - g.top), (c = !0));
  }
  return { x: h, y: m, box: c };
}
function Ii(i, n) {
  if ("native" in i) return i;
  const { canvas: a, currentDevicePixelRatio: s } = n,
    r = xr(a),
    u = r.boxSizing === "border-box",
    c = ia(r, "padding"),
    h = ia(r, "border", "width"),
    { x: m, y: g, box: p } = K1(i, a),
    b = c.left + (p && h.left),
    x = c.top + (p && h.top);
  let { width: S, height: T } = n;
  return (
    u && ((S -= c.width + h.width), (T -= c.height + h.height)),
    {
      x: Math.round((((m - b) / S) * a.width) / s),
      y: Math.round((((g - x) / T) * a.height) / s),
    }
  );
}
function W1(i, n, a) {
  let s, r;
  if (n === void 0 || a === void 0) {
    const u = i && Rf(i);
    if (!u) ((n = i.clientWidth), (a = i.clientHeight));
    else {
      const c = u.getBoundingClientRect(),
        h = xr(u),
        m = ia(h, "border", "width"),
        g = ia(h, "padding");
      ((n = c.width - g.width - m.width),
        (a = c.height - g.height - m.height),
        (s = gr(h.maxWidth, u, "clientWidth")),
        (r = gr(h.maxHeight, u, "clientHeight")));
    }
  }
  return { width: n, height: a, maxWidth: s || mr, maxHeight: r || mr };
}
const Ai = (i) => Math.round(i * 10) / 10;
function J1(i, n, a, s) {
  const r = xr(i),
    u = ia(r, "margin"),
    c = gr(r.maxWidth, i, "clientWidth") || mr,
    h = gr(r.maxHeight, i, "clientHeight") || mr,
    m = W1(i, n, a);
  let { width: g, height: p } = m;
  if (r.boxSizing === "content-box") {
    const x = ia(r, "border", "width"),
      S = ia(r, "padding");
    ((g -= S.width + x.width), (p -= S.height + x.height));
  }
  return (
    (g = Math.max(0, g - u.width)),
    (p = Math.max(0, s ? g / s : p - u.height)),
    (g = Ai(Math.min(g, c, m.maxWidth))),
    (p = Ai(Math.min(p, h, m.maxHeight))),
    g && !p && (p = Ai(g / 2)),
    (n !== void 0 || a !== void 0) &&
      s &&
      m.height &&
      p > m.height &&
      ((p = m.height), (g = Ai(Math.floor(p * s)))),
    { width: g, height: p }
  );
}
function up(i, n, a) {
  const s = n || 1,
    r = Ai(i.height * s),
    u = Ai(i.width * s);
  ((i.height = Ai(i.height)), (i.width = Ai(i.width)));
  const c = i.canvas;
  return (
    c.style &&
      (a || (!c.style.height && !c.style.width)) &&
      ((c.style.height = `${i.height}px`), (c.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== s || c.height !== r || c.width !== u
      ? ((i.currentDevicePixelRatio = s),
        (c.height = r),
        (c.width = u),
        i.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
      : !1
  );
}
const P1 = (function () {
  let i = !1;
  try {
    const n = {
      get passive() {
        return ((i = !0), !1);
      },
    };
    Df() &&
      (window.addEventListener("test", null, n),
      window.removeEventListener("test", null, n));
  } catch {}
  return i;
})();
function cp(i, n) {
  const a = Q1(i, n),
    s = a && a.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function ta(i, n, a, s) {
  return { x: i.x + a * (n.x - i.x), y: i.y + a * (n.y - i.y) };
}
function $1(i, n, a, s) {
  return {
    x: i.x + a * (n.x - i.x),
    y:
      s === "middle"
        ? a < 0.5
          ? i.y
          : n.y
        : s === "after"
          ? a < 1
            ? i.y
            : n.y
          : a > 0
            ? n.y
            : i.y,
  };
}
function I1(i, n, a, s) {
  const r = { x: i.cp2x, y: i.cp2y },
    u = { x: n.cp1x, y: n.cp1y },
    c = ta(i, r, a),
    h = ta(r, u, a),
    m = ta(u, n, a),
    g = ta(c, h, a),
    p = ta(h, m, a);
  return ta(g, p, a);
}
const tS = function (i, n) {
    return {
      x(a) {
        return i + i + n - a;
      },
      setWidth(a) {
        n = a;
      },
      textAlign(a) {
        return a === "center" ? a : a === "right" ? "left" : "right";
      },
      xPlus(a, s) {
        return a - s;
      },
      leftForLtr(a, s) {
        return a - s;
      },
    };
  },
  eS = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, n) {
        return i + n;
      },
      leftForLtr(i, n) {
        return i;
      },
    };
  };
function Za(i, n, a) {
  return i ? tS(n, a) : eS();
}
function q0(i, n) {
  let a, s;
  (n === "ltr" || n === "rtl") &&
    ((a = i.canvas.style),
    (s = [a.getPropertyValue("direction"), a.getPropertyPriority("direction")]),
    a.setProperty("direction", n, "important"),
    (i.prevTextDirection = s));
}
function Y0(i, n) {
  n !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty("direction", n[0], n[1]));
}
function V0(i) {
  return i === "angle"
    ? { between: T0, compare: $_, normalize: Ei }
    : { between: ns, compare: (n, a) => n - a, normalize: (n) => n };
}
function fp({ start: i, end: n, count: a, loop: s, style: r }) {
  return {
    start: i % a,
    end: n % a,
    loop: s && (n - i + 1) % a === 0,
    style: r,
  };
}
function nS(i, n, a) {
  const { property: s, start: r, end: u } = a,
    { between: c, normalize: h } = V0(s),
    m = n.length;
  let { start: g, end: p, loop: b } = i,
    x,
    S;
  if (b) {
    for (g += m, p += m, x = 0, S = m; x < S && c(h(n[g % m][s]), r, u); ++x)
      (g--, p--);
    ((g %= m), (p %= m));
  }
  return (p < g && (p += m), { start: g, end: p, loop: b, style: i.style });
}
function iS(i, n, a) {
  if (!a) return [i];
  const { property: s, start: r, end: u } = a,
    c = n.length,
    { compare: h, between: m, normalize: g } = V0(s),
    { start: p, end: b, loop: x, style: S } = nS(i, n, a),
    T = [];
  let M = !1,
    w = null,
    N,
    X,
    J;
  const W = () => m(r, J, N) && h(r, J) !== 0,
    G = () => h(u, N) === 0 || m(u, J, N),
    et = () => M || W(),
    z = () => !M || G();
  for (let _ = p, A = p; _ <= b; ++_)
    ((X = n[_ % c]),
      !X.skip &&
        ((N = g(X[s])),
        N !== J &&
          ((M = m(N, r, u)),
          w === null && et() && (w = h(N, r) === 0 ? _ : A),
          w !== null &&
            z() &&
            (T.push(fp({ start: w, end: _, loop: x, count: c, style: S })),
            (w = null)),
          (A = _),
          (J = N))));
  return (
    w !== null && T.push(fp({ start: w, end: b, loop: x, count: c, style: S })),
    T
  );
}
function aS(i, n) {
  const a = [],
    s = i.segments;
  for (let r = 0; r < s.length; r++) {
    const u = iS(s[r], i.points, n);
    u.length && a.push(...u);
  }
  return a;
}
function lS(i, n, a, s) {
  let r = 0,
    u = n - 1;
  if (a && !s) for (; r < n && !i[r].skip; ) r++;
  for (; r < n && i[r].skip; ) r++;
  for (r %= n, a && (u += r); u > r && i[u % n].skip; ) u--;
  return ((u %= n), { start: r, end: u });
}
function sS(i, n, a, s) {
  const r = i.length,
    u = [];
  let c = n,
    h = i[n],
    m;
  for (m = n + 1; m <= a; ++m) {
    const g = i[m % r];
    (g.skip || g.stop
      ? h.skip ||
        ((s = !1),
        u.push({ start: n % r, end: (m - 1) % r, loop: s }),
        (n = c = g.stop ? m : null))
      : ((c = m), h.skip && (n = m)),
      (h = g));
  }
  return (c !== null && u.push({ start: n % r, end: c % r, loop: s }), u);
}
function oS(i, n) {
  const a = i.points,
    s = i.options.spanGaps,
    r = a.length;
  if (!r) return [];
  const u = !!i._loop,
    { start: c, end: h } = lS(a, r, u, s);
  if (s === !0) return hp(i, [{ start: c, end: h, loop: u }], a, n);
  const m = h < c ? h + r : h,
    g = !!i._fullLoop && c === 0 && h === r - 1;
  return hp(i, sS(a, c, m, g), a, n);
}
function hp(i, n, a, s) {
  return !s || !s.setContext || !a ? n : rS(i, n, a, s);
}
function rS(i, n, a, s) {
  const r = i._chart.getContext(),
    u = dp(i.options),
    {
      _datasetIndex: c,
      options: { spanGaps: h },
    } = i,
    m = a.length,
    g = [];
  let p = u,
    b = n[0].start,
    x = b;
  function S(T, M, w, N) {
    const X = h ? -1 : 1;
    if (T !== M) {
      for (T += m; a[T % m].skip; ) T -= X;
      for (; a[M % m].skip; ) M += X;
      T % m !== M % m &&
        (g.push({ start: T % m, end: M % m, loop: w, style: N }),
        (p = N),
        (b = M % m));
    }
  }
  for (const T of n) {
    b = h ? b : T.start;
    let M = a[b % m],
      w;
    for (x = b + 1; x <= T.end; x++) {
      const N = a[x % m];
      ((w = dp(
        s.setContext(
          sa(r, {
            type: "segment",
            p0: M,
            p1: N,
            p0DataIndex: (x - 1) % m,
            p1DataIndex: x % m,
            datasetIndex: c,
          }),
        ),
      )),
        uS(w, p) && S(b, x - 1, T.loop, p),
        (M = N),
        (p = w));
    }
    b < x - 1 && S(b, x - 1, T.loop, p);
  }
  return g;
}
function dp(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function uS(i, n) {
  if (!n) return !1;
  const a = [],
    s = function (r, u) {
      return Ef(u) ? (a.includes(u) || a.push(u), a.indexOf(u)) : u;
    };
  return JSON.stringify(i, s) !== JSON.stringify(n, s);
}
function Po(i, n, a) {
  return i.options.clip ? i[a] : n[a];
}
function cS(i, n) {
  const { xScale: a, yScale: s } = i;
  return a && s
    ? {
        left: Po(a, n, "left"),
        right: Po(a, n, "right"),
        top: Po(s, n, "top"),
        bottom: Po(s, n, "bottom"),
      }
    : n;
}
function fS(i, n) {
  const a = n._clip;
  if (a.disabled) return !1;
  const s = cS(n, i.chartArea);
  return {
    left: a.left === !1 ? 0 : s.left - (a.left === !0 ? 0 : a.left),
    right: a.right === !1 ? i.width : s.right + (a.right === !0 ? 0 : a.right),
    top: a.top === !1 ? 0 : s.top - (a.top === !0 ? 0 : a.top),
    bottom:
      a.bottom === !1 ? i.height : s.bottom + (a.bottom === !0 ? 0 : a.bottom),
  };
}
class hS {
  constructor() {
    ((this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0));
  }
  _notify(n, a, s, r) {
    const u = a.listeners[r],
      c = a.duration;
    u.forEach((h) =>
      h({
        chart: n,
        initial: a.initial,
        numSteps: c,
        currentStep: Math.min(s - a.start, c),
      }),
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = O0.call(window, () => {
        (this._update(),
          (this._request = null),
          this._running && this._refresh());
      })));
  }
  _update(n = Date.now()) {
    let a = 0;
    (this._charts.forEach((s, r) => {
      if (!s.running || !s.items.length) return;
      const u = s.items;
      let c = u.length - 1,
        h = !1,
        m;
      for (; c >= 0; --c)
        ((m = u[c]),
          m._active
            ? (m._total > s.duration && (s.duration = m._total),
              m.tick(n),
              (h = !0))
            : ((u[c] = u[u.length - 1]), u.pop()));
      (h && (r.draw(), this._notify(r, s, n, "progress")),
        u.length ||
          ((s.running = !1),
          this._notify(r, s, n, "complete"),
          (s.initial = !1)),
        (a += u.length));
    }),
      (this._lastDate = n),
      a === 0 && (this._running = !1));
  }
  _getAnims(n) {
    const a = this._charts;
    let s = a.get(n);
    return (
      s ||
        ((s = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        a.set(n, s)),
      s
    );
  }
  listen(n, a, s) {
    this._getAnims(n).listeners[a].push(s);
  }
  add(n, a) {
    !a || !a.length || this._getAnims(n).items.push(...a);
  }
  has(n) {
    return this._getAnims(n).items.length > 0;
  }
  start(n) {
    const a = this._charts.get(n);
    a &&
      ((a.running = !0),
      (a.start = Date.now()),
      (a.duration = a.items.reduce((s, r) => Math.max(s, r._duration), 0)),
      this._refresh());
  }
  running(n) {
    if (!this._running) return !1;
    const a = this._charts.get(n);
    return !(!a || !a.running || !a.items.length);
  }
  stop(n) {
    const a = this._charts.get(n);
    if (!a || !a.items.length) return;
    const s = a.items;
    let r = s.length - 1;
    for (; r >= 0; --r) s[r].cancel();
    ((a.items = []), this._notify(n, a, Date.now(), "complete"));
  }
  remove(n) {
    return this._charts.delete(n);
  }
}
var Zn = new hS();
const mp = "transparent",
  dS = {
    boolean(i, n, a) {
      return a > 0.5 ? n : i;
    },
    color(i, n, a) {
      const s = ip(i || mp),
        r = s.valid && ip(n || mp);
      return r && r.valid ? r.mix(s, a).hexString() : n;
    },
    number(i, n, a) {
      return i + (n - i) * a;
    },
  };
class mS {
  constructor(n, a, s, r) {
    const u = a[s];
    r = Wo([n.to, r, u, n.from]);
    const c = Wo([n.from, u, r]);
    ((this._active = !0),
      (this._fn = n.fn || dS[n.type || typeof c]),
      (this._easing = rs[n.easing] || rs.linear),
      (this._start = Math.floor(Date.now() + (n.delay || 0))),
      (this._duration = this._total = Math.floor(n.duration)),
      (this._loop = !!n.loop),
      (this._target = a),
      (this._prop = s),
      (this._from = c),
      (this._to = r),
      (this._promises = void 0));
  }
  active() {
    return this._active;
  }
  update(n, a, s) {
    if (this._active) {
      this._notify(!1);
      const r = this._target[this._prop],
        u = s - this._start,
        c = this._duration - u;
      ((this._start = s),
        (this._duration = Math.floor(Math.max(c, n.duration))),
        (this._total += u),
        (this._loop = !!n.loop),
        (this._to = Wo([n.to, a, r, n.from])),
        (this._from = Wo([n.from, r, a])));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(n) {
    const a = n - this._start,
      s = this._duration,
      r = this._prop,
      u = this._from,
      c = this._loop,
      h = this._to;
    let m;
    if (((this._active = u !== h && (c || a < s)), !this._active)) {
      ((this._target[r] = h), this._notify(!0));
      return;
    }
    if (a < 0) {
      this._target[r] = u;
      return;
    }
    ((m = (a / s) % 2),
      (m = c && m > 1 ? 2 - m : m),
      (m = this._easing(Math.min(1, Math.max(0, m)))),
      (this._target[r] = this._fn(u, h, m)));
  }
  wait() {
    const n = this._promises || (this._promises = []);
    return new Promise((a, s) => {
      n.push({ res: a, rej: s });
    });
  }
  _notify(n) {
    const a = n ? "res" : "rej",
      s = this._promises || [];
    for (let r = 0; r < s.length; r++) s[r][a]();
  }
}
class X0 {
  constructor(n, a) {
    ((this._chart = n), (this._properties = new Map()), this.configure(a));
  }
  configure(n) {
    if (!kt(n)) return;
    const a = Object.keys(le.animation),
      s = this._properties;
    Object.getOwnPropertyNames(n).forEach((r) => {
      const u = n[r];
      if (!kt(u)) return;
      const c = {};
      for (const h of a) c[h] = u[h];
      ((de(u.properties) && u.properties) || [r]).forEach((h) => {
        (h === r || !s.has(h)) && s.set(h, c);
      });
    });
  }
  _animateOptions(n, a) {
    const s = a.options,
      r = pS(n, s);
    if (!r) return [];
    const u = this._createAnimations(r, s);
    return (
      s.$shared &&
        gS(n.options.$animations, s).then(
          () => {
            n.options = s;
          },
          () => {},
        ),
      u
    );
  }
  _createAnimations(n, a) {
    const s = this._properties,
      r = [],
      u = n.$animations || (n.$animations = {}),
      c = Object.keys(a),
      h = Date.now();
    let m;
    for (m = c.length - 1; m >= 0; --m) {
      const g = c[m];
      if (g.charAt(0) === "$") continue;
      if (g === "options") {
        r.push(...this._animateOptions(n, a));
        continue;
      }
      const p = a[g];
      let b = u[g];
      const x = s.get(g);
      if (b)
        if (x && b.active()) {
          b.update(x, p, h);
          continue;
        } else b.cancel();
      if (!x || !x.duration) {
        n[g] = p;
        continue;
      }
      ((u[g] = b = new mS(x, n, g, p)), r.push(b));
    }
    return r;
  }
  update(n, a) {
    if (this._properties.size === 0) {
      Object.assign(n, a);
      return;
    }
    const s = this._createAnimations(n, a);
    if (s.length) return (Zn.add(this._chart, s), !0);
  }
}
function gS(i, n) {
  const a = [],
    s = Object.keys(n);
  for (let r = 0; r < s.length; r++) {
    const u = i[s[r]];
    u && u.active() && a.push(u.wait());
  }
  return Promise.all(a);
}
function pS(i, n) {
  if (!n) return;
  let a = i.options;
  if (!a) {
    i.options = n;
    return;
  }
  return (
    a.$shared &&
      (i.options = a = Object.assign({}, a, { $shared: !1, $animations: {} })),
    a
  );
}
function gp(i, n) {
  const a = (i && i.options) || {},
    s = a.reverse,
    r = a.min === void 0 ? n : 0,
    u = a.max === void 0 ? n : 0;
  return { start: s ? u : r, end: s ? r : u };
}
function yS(i, n, a) {
  if (a === !1) return !1;
  const s = gp(i, a),
    r = gp(n, a);
  return { top: r.end, right: s.end, bottom: r.start, left: s.start };
}
function bS(i) {
  let n, a, s, r;
  return (
    kt(i)
      ? ((n = i.top), (a = i.right), (s = i.bottom), (r = i.left))
      : (n = a = s = r = i),
    { top: n, right: a, bottom: s, left: r, disabled: i === !1 }
  );
}
function G0(i, n) {
  const a = [],
    s = i._getSortedDatasetMetas(n);
  let r, u;
  for (r = 0, u = s.length; r < u; ++r) a.push(s[r].index);
  return a;
}
function pp(i, n, a, s = {}) {
  const r = i.keys,
    u = s.mode === "single";
  let c, h, m, g;
  if (n === null) return;
  let p = !1;
  for (c = 0, h = r.length; c < h; ++c) {
    if (((m = +r[c]), m === a)) {
      if (((p = !0), s.all)) continue;
      break;
    }
    ((g = i.values[m]), cn(g) && (u || n === 0 || Ka(n) === Ka(g)) && (n += g));
  }
  return !p && !s.all ? 0 : n;
}
function vS(i, n) {
  const { iScale: a, vScale: s } = n,
    r = a.axis === "x" ? "x" : "y",
    u = s.axis === "x" ? "x" : "y",
    c = Object.keys(i),
    h = new Array(c.length);
  let m, g, p;
  for (m = 0, g = c.length; m < g; ++m)
    ((p = c[m]), (h[m] = { [r]: p, [u]: i[p] }));
  return h;
}
function Zc(i, n) {
  const a = i && i.options.stacked;
  return a || (a === void 0 && n.stack !== void 0);
}
function xS(i, n, a) {
  return `${i.id}.${n.id}.${a.stack || a.type}`;
}
function _S(i) {
  const { min: n, max: a, minDefined: s, maxDefined: r } = i.getUserBounds();
  return {
    min: s ? n : Number.NEGATIVE_INFINITY,
    max: r ? a : Number.POSITIVE_INFINITY,
  };
}
function SS(i, n, a) {
  const s = i[n] || (i[n] = {});
  return s[a] || (s[a] = {});
}
function yp(i, n, a, s) {
  for (const r of n.getMatchingVisibleMetas(s).reverse()) {
    const u = i[r.index];
    if ((a && u > 0) || (!a && u < 0)) return r.index;
  }
  return null;
}
function bp(i, n) {
  const { chart: a, _cachedMeta: s } = i,
    r = a._stacks || (a._stacks = {}),
    { iScale: u, vScale: c, index: h } = s,
    m = u.axis,
    g = c.axis,
    p = xS(u, c, s),
    b = n.length;
  let x;
  for (let S = 0; S < b; ++S) {
    const T = n[S],
      { [m]: M, [g]: w } = T,
      N = T._stacks || (T._stacks = {});
    ((x = N[g] = SS(r, p, M)),
      (x[h] = w),
      (x._top = yp(x, c, !0, s.type)),
      (x._bottom = yp(x, c, !1, s.type)));
    const X = x._visualValues || (x._visualValues = {});
    X[h] = w;
  }
}
function Kc(i, n) {
  const a = i.scales;
  return Object.keys(a)
    .filter((s) => a[s].axis === n)
    .shift();
}
function MS(i, n) {
  return sa(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: n,
    index: n,
    mode: "default",
    type: "dataset",
  });
}
function ES(i, n, a) {
  return sa(i, {
    active: !1,
    dataIndex: n,
    parsed: void 0,
    raw: void 0,
    element: a,
    index: n,
    mode: "default",
    type: "data",
  });
}
function Jl(i, n) {
  const a = i.controller.index,
    s = i.vScale && i.vScale.axis;
  if (s) {
    n = n || i._parsed;
    for (const r of n) {
      const u = r._stacks;
      if (!u || u[s] === void 0 || u[s][a] === void 0) return;
      (delete u[s][a],
        u[s]._visualValues !== void 0 &&
          u[s]._visualValues[a] !== void 0 &&
          delete u[s]._visualValues[a]);
    }
  }
}
const Wc = (i) => i === "reset" || i === "none",
  vp = (i, n) => (n ? i : Object.assign({}, i)),
  wS = (i, n, a) =>
    i && !n.hidden && n._stacked && { keys: G0(a, !0), values: null };
class Q0 {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(n, a) {
    ((this.chart = n),
      (this._ctx = n.ctx),
      (this.index = a),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize());
  }
  initialize() {
    const n = this._cachedMeta;
    (this.configure(),
      this.linkScales(),
      (n._stacked = Zc(n.vScale, n)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled("filler") &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options",
        ));
  }
  updateIndex(n) {
    (this.index !== n && Jl(this._cachedMeta), (this.index = n));
  }
  linkScales() {
    const n = this.chart,
      a = this._cachedMeta,
      s = this.getDataset(),
      r = (b, x, S, T) => (b === "x" ? x : b === "r" ? T : S),
      u = (a.xAxisID = Dt(s.xAxisID, Kc(n, "x"))),
      c = (a.yAxisID = Dt(s.yAxisID, Kc(n, "y"))),
      h = (a.rAxisID = Dt(s.rAxisID, Kc(n, "r"))),
      m = a.indexAxis,
      g = (a.iAxisID = r(m, u, c, h)),
      p = (a.vAxisID = r(m, c, u, h));
    ((a.xScale = this.getScaleForId(u)),
      (a.yScale = this.getScaleForId(c)),
      (a.rScale = this.getScaleForId(h)),
      (a.iScale = this.getScaleForId(g)),
      (a.vScale = this.getScaleForId(p)));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(n) {
    return this.chart.scales[n];
  }
  _getOtherScale(n) {
    const a = this._cachedMeta;
    return n === a.iScale ? a.vScale : a.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const n = this._cachedMeta;
    (this._data && tp(this._data, this), n._stacked && Jl(n));
  }
  _dataCheck() {
    const n = this.getDataset(),
      a = n.data || (n.data = []),
      s = this._data;
    if (kt(a)) {
      const r = this._cachedMeta;
      this._data = vS(a, r);
    } else if (s !== a) {
      if (s) {
        tp(s, this);
        const r = this._cachedMeta;
        (Jl(r), (r._parsed = []));
      }
      (a && Object.isExtensible(a) && n1(a, this),
        (this._syncList = []),
        (this._data = a));
    }
  }
  addElements() {
    const n = this._cachedMeta;
    (this._dataCheck(),
      this.datasetElementType && (n.dataset = new this.datasetElementType()));
  }
  buildOrUpdateElements(n) {
    const a = this._cachedMeta,
      s = this.getDataset();
    let r = !1;
    this._dataCheck();
    const u = a._stacked;
    ((a._stacked = Zc(a.vScale, a)),
      a.stack !== s.stack && ((r = !0), Jl(a), (a.stack = s.stack)),
      this._resyncElements(n),
      (r || u !== a._stacked) &&
        (bp(this, a._parsed), (a._stacked = Zc(a.vScale, a))));
  }
  configure() {
    const n = this.chart.config,
      a = n.datasetScopeKeys(this._type),
      s = n.getOptionScopes(this.getDataset(), a, !0);
    ((this.options = n.createResolver(s, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {}));
  }
  parse(n, a) {
    const { _cachedMeta: s, _data: r } = this,
      { iScale: u, _stacked: c } = s,
      h = u.axis;
    let m = n === 0 && a === r.length ? !0 : s._sorted,
      g = n > 0 && s._parsed[n - 1],
      p,
      b,
      x;
    if (this._parsing === !1) ((s._parsed = r), (s._sorted = !0), (x = r));
    else {
      de(r[n])
        ? (x = this.parseArrayData(s, r, n, a))
        : kt(r[n])
          ? (x = this.parseObjectData(s, r, n, a))
          : (x = this.parsePrimitiveData(s, r, n, a));
      const S = () => b[h] === null || (g && b[h] < g[h]);
      for (p = 0; p < a; ++p)
        ((s._parsed[p + n] = b = x[p]), m && (S() && (m = !1), (g = b)));
      s._sorted = m;
    }
    c && bp(this, x);
  }
  parsePrimitiveData(n, a, s, r) {
    const { iScale: u, vScale: c } = n,
      h = u.axis,
      m = c.axis,
      g = u.getLabels(),
      p = u === c,
      b = new Array(r);
    let x, S, T;
    for (x = 0, S = r; x < S; ++x)
      ((T = x + s),
        (b[x] = { [h]: p || u.parse(g[T], T), [m]: c.parse(a[T], T) }));
    return b;
  }
  parseArrayData(n, a, s, r) {
    const { xScale: u, yScale: c } = n,
      h = new Array(r);
    let m, g, p, b;
    for (m = 0, g = r; m < g; ++m)
      ((p = m + s),
        (b = a[p]),
        (h[m] = { x: u.parse(b[0], p), y: c.parse(b[1], p) }));
    return h;
  }
  parseObjectData(n, a, s, r) {
    const { xScale: u, yScale: c } = n,
      { xAxisKey: h = "x", yAxisKey: m = "y" } = this._parsing,
      g = new Array(r);
    let p, b, x, S;
    for (p = 0, b = r; p < b; ++p)
      ((x = p + s),
        (S = a[x]),
        (g[p] = { x: u.parse(hr(S, h), x), y: c.parse(hr(S, m), x) }));
    return g;
  }
  getParsed(n) {
    return this._cachedMeta._parsed[n];
  }
  getDataElement(n) {
    return this._cachedMeta.data[n];
  }
  applyStack(n, a, s) {
    const r = this.chart,
      u = this._cachedMeta,
      c = a[n.axis],
      h = { keys: G0(r, !0), values: a._stacks[n.axis]._visualValues };
    return pp(h, c, u.index, { mode: s });
  }
  updateRangeFromParsed(n, a, s, r) {
    const u = s[a.axis];
    let c = u === null ? NaN : u;
    const h = r && s._stacks[a.axis];
    (r && h && ((r.values = h), (c = pp(r, u, this._cachedMeta.index))),
      (n.min = Math.min(n.min, c)),
      (n.max = Math.max(n.max, c)));
  }
  getMinMax(n, a) {
    const s = this._cachedMeta,
      r = s._parsed,
      u = s._sorted && n === s.iScale,
      c = r.length,
      h = this._getOtherScale(n),
      m = wS(a, s, this.chart),
      g = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: p, max: b } = _S(h);
    let x, S;
    function T() {
      S = r[x];
      const M = S[h.axis];
      return !cn(S[n.axis]) || p > M || b < M;
    }
    for (
      x = 0;
      x < c && !(!T() && (this.updateRangeFromParsed(g, n, S, m), u));
      ++x
    );
    if (u) {
      for (x = c - 1; x >= 0; --x)
        if (!T()) {
          this.updateRangeFromParsed(g, n, S, m);
          break;
        }
    }
    return g;
  }
  getAllParsedValues(n) {
    const a = this._cachedMeta._parsed,
      s = [];
    let r, u, c;
    for (r = 0, u = a.length; r < u; ++r)
      ((c = a[r][n.axis]), cn(c) && s.push(c));
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(n) {
    const a = this._cachedMeta,
      s = a.iScale,
      r = a.vScale,
      u = this.getParsed(n);
    return {
      label: s ? "" + s.getLabelForValue(u[s.axis]) : "",
      value: r ? "" + r.getLabelForValue(u[r.axis]) : "",
    };
  }
  _update(n) {
    const a = this._cachedMeta;
    (this.update(n || "default"),
      (a._clip = bS(
        Dt(this.options.clip, yS(a.xScale, a.yScale, this.getMaxOverflow())),
      )));
  }
  update(n) {}
  draw() {
    const n = this._ctx,
      a = this.chart,
      s = this._cachedMeta,
      r = s.data || [],
      u = a.chartArea,
      c = [],
      h = this._drawStart || 0,
      m = this._drawCount || r.length - h,
      g = this.options.drawActiveElementsOnTop;
    let p;
    for (s.dataset && s.dataset.draw(n, u, h, m), p = h; p < h + m; ++p) {
      const b = r[p];
      b.hidden || (b.active && g ? c.push(b) : b.draw(n, u));
    }
    for (p = 0; p < c.length; ++p) c[p].draw(n, u);
  }
  getStyle(n, a) {
    const s = a ? "active" : "default";
    return n === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(s)
      : this.resolveDataElementOptions(n || 0, s);
  }
  getContext(n, a, s) {
    const r = this.getDataset();
    let u;
    if (n >= 0 && n < this._cachedMeta.data.length) {
      const c = this._cachedMeta.data[n];
      ((u = c.$context || (c.$context = ES(this.getContext(), n, c))),
        (u.parsed = this.getParsed(n)),
        (u.raw = r.data[n]),
        (u.index = u.dataIndex = n));
    } else
      ((u =
        this.$context ||
        (this.$context = MS(this.chart.getContext(), this.index))),
        (u.dataset = r),
        (u.index = u.datasetIndex = this.index));
    return ((u.active = !!a), (u.mode = s), u);
  }
  resolveDatasetElementOptions(n) {
    return this._resolveElementOptions(this.datasetElementType.id, n);
  }
  resolveDataElementOptions(n, a) {
    return this._resolveElementOptions(this.dataElementType.id, a, n);
  }
  _resolveElementOptions(n, a = "default", s) {
    const r = a === "active",
      u = this._cachedDataOpts,
      c = n + "-" + a,
      h = u[c],
      m = this.enableOptionSharing && dr(s);
    if (h) return vp(h, m);
    const g = this.chart.config,
      p = g.datasetElementScopeKeys(this._type, n),
      b = r ? [`${n}Hover`, "hover", n, ""] : [n, ""],
      x = g.getOptionScopes(this.getDataset(), p),
      S = Object.keys(le.elements[n]),
      T = () => this.getContext(s, r, a),
      M = g.resolveNamedOptions(x, S, T, b);
    return (
      M.$shared && ((M.$shared = m), (u[c] = Object.freeze(vp(M, m)))),
      M
    );
  }
  _resolveAnimations(n, a, s) {
    const r = this.chart,
      u = this._cachedDataOpts,
      c = `animation-${a}`,
      h = u[c];
    if (h) return h;
    let m;
    if (r.options.animation !== !1) {
      const p = this.chart.config,
        b = p.datasetAnimationScopeKeys(this._type, a),
        x = p.getOptionScopes(this.getDataset(), b);
      m = p.createResolver(x, this.getContext(n, s, a));
    }
    const g = new X0(r, m && m.animations);
    return (m && m._cacheable && (u[c] = Object.freeze(g)), g);
  }
  getSharedOptions(n) {
    if (n.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, n))
      );
  }
  includeOptions(n, a) {
    return !a || Wc(n) || this.chart._animationsDisabled;
  }
  _getSharedOptions(n, a) {
    const s = this.resolveDataElementOptions(n, a),
      r = this._sharedOptions,
      u = this.getSharedOptions(s),
      c = this.includeOptions(a, u) || u !== r;
    return (
      this.updateSharedOptions(u, a, s),
      { sharedOptions: u, includeOptions: c }
    );
  }
  updateElement(n, a, s, r) {
    Wc(r) ? Object.assign(n, s) : this._resolveAnimations(a, r).update(n, s);
  }
  updateSharedOptions(n, a, s) {
    n && !Wc(a) && this._resolveAnimations(void 0, a).update(n, s);
  }
  _setStyle(n, a, s, r) {
    n.active = r;
    const u = this.getStyle(a, r);
    this._resolveAnimations(a, s, r).update(n, {
      options: (!r && this.getSharedOptions(u)) || u,
    });
  }
  removeHoverStyle(n, a, s) {
    this._setStyle(n, s, "active", !1);
  }
  setHoverStyle(n, a, s) {
    this._setStyle(n, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const n = this._cachedMeta.dataset;
    n && this._setStyle(n, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const n = this._cachedMeta.dataset;
    n && this._setStyle(n, void 0, "active", !0);
  }
  _resyncElements(n) {
    const a = this._data,
      s = this._cachedMeta.data;
    for (const [h, m, g] of this._syncList) this[h](m, g);
    this._syncList = [];
    const r = s.length,
      u = a.length,
      c = Math.min(u, r);
    (c && this.parse(0, c),
      u > r
        ? this._insertElements(r, u - r, n)
        : u < r && this._removeElements(u, r - u));
  }
  _insertElements(n, a, s = !0) {
    const r = this._cachedMeta,
      u = r.data,
      c = n + a;
    let h;
    const m = (g) => {
      for (g.length += a, h = g.length - 1; h >= c; h--) g[h] = g[h - a];
    };
    for (m(u), h = n; h < c; ++h) u[h] = new this.dataElementType();
    (this._parsing && m(r._parsed),
      this.parse(n, a),
      s && this.updateElements(u, n, a, "reset"));
  }
  updateElements(n, a, s, r) {}
  _removeElements(n, a) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const r = s._parsed.splice(n, a);
      s._stacked && Jl(s, r);
    }
    s.data.splice(n, a);
  }
  _sync(n) {
    if (this._parsing) this._syncList.push(n);
    else {
      const [a, s, r] = n;
      this[a](s, r);
    }
    this.chart._dataChanges.push([this.index, ...n]);
  }
  _onDataPush() {
    const n = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - n, n]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(n, a) {
    a && this._sync(["_removeElements", n, a]);
    const s = arguments.length - 2;
    s && this._sync(["_insertElements", n, s]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
class AS extends Q0 {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1,
  };
  static overrides = {
    scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
  };
  initialize() {
    ((this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize());
  }
  update(n) {
    const a = this._cachedMeta,
      { dataset: s, data: r = [], _dataset: u } = a,
      c = this.chart._animationsDisabled;
    let { start: h, count: m } = s1(a, r, c);
    ((this._drawStart = h),
      (this._drawCount = m),
      o1(a) && ((h = 0), (m = r.length)),
      (s._chart = this.chart),
      (s._datasetIndex = this.index),
      (s._decimated = !!u._decimated),
      (s.points = r));
    const g = this.resolveDatasetElementOptions(n);
    (this.options.showLine || (g.borderWidth = 0),
      (g.segment = this.options.segment),
      this.updateElement(s, void 0, { animated: !c, options: g }, n),
      this.updateElements(r, h, m, n));
  }
  updateElements(n, a, s, r) {
    const u = r === "reset",
      { iScale: c, vScale: h, _stacked: m, _dataset: g } = this._cachedMeta,
      { sharedOptions: p, includeOptions: b } = this._getSharedOptions(a, r),
      x = c.axis,
      S = h.axis,
      { spanGaps: T, segment: M } = this.options,
      w = ms(T) ? T : Number.POSITIVE_INFINITY,
      N = this.chart._animationsDisabled || u || r === "none",
      X = a + s,
      J = n.length;
    let W = a > 0 && this.getParsed(a - 1);
    for (let G = 0; G < J; ++G) {
      const et = n[G],
        z = N ? et : {};
      if (G < a || G >= X) {
        z.skip = !0;
        continue;
      }
      const _ = this.getParsed(G),
        A = Ft(_[S]),
        j = (z[x] = c.getPixelForValue(_[x], G)),
        V = (z[S] =
          u || A
            ? h.getBasePixel()
            : h.getPixelForValue(m ? this.applyStack(h, _, m) : _[S], G));
      ((z.skip = isNaN(j) || isNaN(V) || A),
        (z.stop = G > 0 && Math.abs(_[x] - W[x]) > w),
        M && ((z.parsed = _), (z.raw = g.data[G])),
        b &&
          (z.options =
            p || this.resolveDataElementOptions(G, et.active ? "active" : r)),
        N || this.updateElement(et, G, z, r),
        (W = _));
    }
  }
  getMaxOverflow() {
    const n = this._cachedMeta,
      a = n.dataset,
      s = (a.options && a.options.borderWidth) || 0,
      r = n.data || [];
    if (!r.length) return s;
    const u = r[0].size(this.resolveDataElementOptions(0)),
      c = r[r.length - 1].size(this.resolveDataElementOptions(r.length - 1));
    return Math.max(s, u, c) / 2;
  }
  draw() {
    const n = this._cachedMeta;
    (n.dataset.updateControlPoints(this.chart.chartArea, n.iScale.axis),
      super.draw());
  }
}
function $i() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided.",
  );
}
class zf {
  static override(n) {
    Object.assign(zf.prototype, n);
  }
  options;
  constructor(n) {
    this.options = n || {};
  }
  init() {}
  formats() {
    return $i();
  }
  parse() {
    return $i();
  }
  format() {
    return $i();
  }
  add() {
    return $i();
  }
  diff() {
    return $i();
  }
  startOf() {
    return $i();
  }
  endOf() {
    return $i();
  }
}
var TS = { _date: zf };
function CS(i, n, a, s) {
  const { controller: r, data: u, _sorted: c } = i,
    h = r._cachedMeta.iScale,
    m = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (h && n === h.axis && n !== "r" && c && u.length) {
    const g = h._reversePixels ? t1 : na;
    if (s) {
      if (r._sharedOptions) {
        const p = u[0],
          b = typeof p.getRange == "function" && p.getRange(n);
        if (b) {
          const x = g(u, n, a - b),
            S = g(u, n, a + b);
          return { lo: x.lo, hi: S.hi };
        }
      }
    } else {
      const p = g(u, n, a);
      if (m) {
        const { vScale: b } = r._cachedMeta,
          { _parsed: x } = i,
          S = x
            .slice(0, p.lo + 1)
            .reverse()
            .findIndex((M) => !Ft(M[b.axis]));
        p.lo -= Math.max(0, S);
        const T = x.slice(p.hi).findIndex((M) => !Ft(M[b.axis]));
        p.hi += Math.max(0, T);
      }
      return p;
    }
  }
  return { lo: 0, hi: u.length - 1 };
}
function _r(i, n, a, s, r) {
  const u = i.getSortedVisibleDatasetMetas(),
    c = a[n];
  for (let h = 0, m = u.length; h < m; ++h) {
    const { index: g, data: p } = u[h],
      { lo: b, hi: x } = CS(u[h], n, c, r);
    for (let S = b; S <= x; ++S) {
      const T = p[S];
      T.skip || s(T, g, S);
    }
  }
}
function OS(i) {
  const n = i.indexOf("x") !== -1,
    a = i.indexOf("y") !== -1;
  return function (s, r) {
    const u = n ? Math.abs(s.x - r.x) : 0,
      c = a ? Math.abs(s.y - r.y) : 0;
    return Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2));
  };
}
function Jc(i, n, a, s, r) {
  const u = [];
  return (
    (!r && !i.isPointInArea(n)) ||
      _r(
        i,
        a,
        n,
        function (h, m, g) {
          (!r && !gs(h, i.chartArea, 0)) ||
            (h.inRange(n.x, n.y, s) &&
              u.push({ element: h, datasetIndex: m, index: g }));
        },
        !0,
      ),
    u
  );
}
function DS(i, n, a, s) {
  let r = [];
  function u(c, h, m) {
    const { startAngle: g, endAngle: p } = c.getProps(
        ["startAngle", "endAngle"],
        s,
      ),
      { angle: b } = P_(c, { x: n.x, y: n.y });
    T0(b, g, p) && r.push({ element: c, datasetIndex: h, index: m });
  }
  return (_r(i, a, n, u), r);
}
function RS(i, n, a, s, r, u) {
  let c = [];
  const h = OS(a);
  let m = Number.POSITIVE_INFINITY;
  function g(p, b, x) {
    const S = p.inRange(n.x, n.y, r);
    if (s && !S) return;
    const T = p.getCenterPoint(r);
    if (!(!!u || i.isPointInArea(T)) && !S) return;
    const w = h(n, T);
    w < m
      ? ((c = [{ element: p, datasetIndex: b, index: x }]), (m = w))
      : w === m && c.push({ element: p, datasetIndex: b, index: x });
  }
  return (_r(i, a, n, g), c);
}
function Pc(i, n, a, s, r, u) {
  return !u && !i.isPointInArea(n)
    ? []
    : a === "r" && !s
      ? DS(i, n, a, r)
      : RS(i, n, a, s, r, u);
}
function xp(i, n, a, s, r) {
  const u = [],
    c = a === "x" ? "inXRange" : "inYRange";
  let h = !1;
  return (
    _r(i, a, n, (m, g, p) => {
      m[c] &&
        m[c](n[a], r) &&
        (u.push({ element: m, datasetIndex: g, index: p }),
        (h = h || m.inRange(n.x, n.y, r)));
    }),
    s && !h ? [] : u
  );
}
var zS = {
  modes: {
    index(i, n, a, s) {
      const r = Ii(n, i),
        u = a.axis || "x",
        c = a.includeInvisible || !1,
        h = a.intersect ? Jc(i, r, u, s, c) : Pc(i, r, u, !1, s, c),
        m = [];
      return h.length
        ? (i.getSortedVisibleDatasetMetas().forEach((g) => {
            const p = h[0].index,
              b = g.data[p];
            b &&
              !b.skip &&
              m.push({ element: b, datasetIndex: g.index, index: p });
          }),
          m)
        : [];
    },
    dataset(i, n, a, s) {
      const r = Ii(n, i),
        u = a.axis || "xy",
        c = a.includeInvisible || !1;
      let h = a.intersect ? Jc(i, r, u, s, c) : Pc(i, r, u, !1, s, c);
      if (h.length > 0) {
        const m = h[0].datasetIndex,
          g = i.getDatasetMeta(m).data;
        h = [];
        for (let p = 0; p < g.length; ++p)
          h.push({ element: g[p], datasetIndex: m, index: p });
      }
      return h;
    },
    point(i, n, a, s) {
      const r = Ii(n, i),
        u = a.axis || "xy",
        c = a.includeInvisible || !1;
      return Jc(i, r, u, s, c);
    },
    nearest(i, n, a, s) {
      const r = Ii(n, i),
        u = a.axis || "xy",
        c = a.includeInvisible || !1;
      return Pc(i, r, u, a.intersect, s, c);
    },
    x(i, n, a, s) {
      const r = Ii(n, i);
      return xp(i, r, "x", a.intersect, s);
    },
    y(i, n, a, s) {
      const r = Ii(n, i);
      return xp(i, r, "y", a.intersect, s);
    },
  },
};
const F0 = ["left", "top", "right", "bottom"];
function Pl(i, n) {
  return i.filter((a) => a.pos === n);
}
function _p(i, n) {
  return i.filter((a) => F0.indexOf(a.pos) === -1 && a.box.axis === n);
}
function $l(i, n) {
  return i.sort((a, s) => {
    const r = n ? s : a,
      u = n ? a : s;
    return r.weight === u.weight ? r.index - u.index : r.weight - u.weight;
  });
}
function NS(i) {
  const n = [];
  let a, s, r, u, c, h;
  for (a = 0, s = (i || []).length; a < s; ++a)
    ((r = i[a]),
      ({
        position: u,
        options: { stack: c, stackWeight: h = 1 },
      } = r),
      n.push({
        index: a,
        box: r,
        pos: u,
        horizontal: r.isHorizontal(),
        weight: r.weight,
        stack: c && u + c,
        stackWeight: h,
      }));
  return n;
}
function jS(i) {
  const n = {};
  for (const a of i) {
    const { stack: s, pos: r, stackWeight: u } = a;
    if (!s || !F0.includes(r)) continue;
    const c = n[s] || (n[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    (c.count++, (c.weight += u));
  }
  return n;
}
function kS(i, n) {
  const a = jS(i),
    { vBoxMaxWidth: s, hBoxMaxHeight: r } = n;
  let u, c, h;
  for (u = 0, c = i.length; u < c; ++u) {
    h = i[u];
    const { fullSize: m } = h.box,
      g = a[h.stack],
      p = g && h.stackWeight / g.weight;
    h.horizontal
      ? ((h.width = p ? p * s : m && n.availableWidth), (h.height = r))
      : ((h.width = s), (h.height = p ? p * r : m && n.availableHeight));
  }
  return a;
}
function LS(i) {
  const n = NS(i),
    a = $l(
      n.filter((g) => g.box.fullSize),
      !0,
    ),
    s = $l(Pl(n, "left"), !0),
    r = $l(Pl(n, "right")),
    u = $l(Pl(n, "top"), !0),
    c = $l(Pl(n, "bottom")),
    h = _p(n, "x"),
    m = _p(n, "y");
  return {
    fullSize: a,
    leftAndTop: s.concat(u),
    rightAndBottom: r.concat(m).concat(c).concat(h),
    chartArea: Pl(n, "chartArea"),
    vertical: s.concat(r).concat(m),
    horizontal: u.concat(c).concat(h),
  };
}
function Sp(i, n, a, s) {
  return Math.max(i[a], n[a]) + Math.max(i[s], n[s]);
}
function Z0(i, n) {
  ((i.top = Math.max(i.top, n.top)),
    (i.left = Math.max(i.left, n.left)),
    (i.bottom = Math.max(i.bottom, n.bottom)),
    (i.right = Math.max(i.right, n.right)));
}
function HS(i, n, a, s) {
  const { pos: r, box: u } = a,
    c = i.maxPadding;
  if (!kt(r)) {
    a.size && (i[r] -= a.size);
    const b = s[a.stack] || { size: 0, count: 1 };
    ((b.size = Math.max(b.size, a.horizontal ? u.height : u.width)),
      (a.size = b.size / b.count),
      (i[r] += a.size));
  }
  u.getPadding && Z0(c, u.getPadding());
  const h = Math.max(0, n.outerWidth - Sp(c, i, "left", "right")),
    m = Math.max(0, n.outerHeight - Sp(c, i, "top", "bottom")),
    g = h !== i.w,
    p = m !== i.h;
  return (
    (i.w = h),
    (i.h = m),
    a.horizontal ? { same: g, other: p } : { same: p, other: g }
  );
}
function BS(i) {
  const n = i.maxPadding;
  function a(s) {
    const r = Math.max(n[s] - i[s], 0);
    return ((i[s] += r), r);
  }
  ((i.y += a("top")), (i.x += a("left")), a("right"), a("bottom"));
}
function US(i, n) {
  const a = n.maxPadding;
  function s(r) {
    const u = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      r.forEach((c) => {
        u[c] = Math.max(n[c], a[c]);
      }),
      u
    );
  }
  return s(i ? ["left", "right"] : ["top", "bottom"]);
}
function is(i, n, a, s) {
  const r = [];
  let u, c, h, m, g, p;
  for (u = 0, c = i.length, g = 0; u < c; ++u) {
    ((h = i[u]),
      (m = h.box),
      m.update(h.width || n.w, h.height || n.h, US(h.horizontal, n)));
    const { same: b, other: x } = HS(n, a, h, s);
    ((g |= b && r.length), (p = p || x), m.fullSize || r.push(h));
  }
  return (g && is(r, n, a, s)) || p;
}
function $o(i, n, a, s, r) {
  ((i.top = a),
    (i.left = n),
    (i.right = n + s),
    (i.bottom = a + r),
    (i.width = s),
    (i.height = r));
}
function Mp(i, n, a, s) {
  const r = a.padding;
  let { x: u, y: c } = n;
  for (const h of i) {
    const m = h.box,
      g = s[h.stack] || { placed: 0, weight: 1 },
      p = h.stackWeight / g.weight || 1;
    if (h.horizontal) {
      const b = n.w * p,
        x = g.size || m.height;
      (dr(g.start) && (c = g.start),
        m.fullSize
          ? $o(m, r.left, c, a.outerWidth - r.right - r.left, x)
          : $o(m, n.left + g.placed, c, b, x),
        (g.start = c),
        (g.placed += b),
        (c = m.bottom));
    } else {
      const b = n.h * p,
        x = g.size || m.width;
      (dr(g.start) && (u = g.start),
        m.fullSize
          ? $o(m, u, r.top, x, a.outerHeight - r.bottom - r.top)
          : $o(m, u, n.top + g.placed, x, b),
        (g.start = u),
        (g.placed += b),
        (u = m.right));
    }
  }
  ((n.x = u), (n.y = c));
}
var un = {
  addBox(i, n) {
    (i.boxes || (i.boxes = []),
      (n.fullSize = n.fullSize || !1),
      (n.position = n.position || "top"),
      (n.weight = n.weight || 0),
      (n._layers =
        n._layers ||
        function () {
          return [
            {
              z: 0,
              draw(a) {
                n.draw(a);
              },
            },
          ];
        }),
      i.boxes.push(n));
  },
  removeBox(i, n) {
    const a = i.boxes ? i.boxes.indexOf(n) : -1;
    a !== -1 && i.boxes.splice(a, 1);
  },
  configure(i, n, a) {
    ((n.fullSize = a.fullSize),
      (n.position = a.position),
      (n.weight = a.weight));
  },
  update(i, n, a, s) {
    if (!i) return;
    const r = fn(i.options.layout.padding),
      u = Math.max(n - r.width, 0),
      c = Math.max(a - r.height, 0),
      h = LS(i.boxes),
      m = h.vertical,
      g = h.horizontal;
    qt(i.boxes, (M) => {
      typeof M.beforeLayout == "function" && M.beforeLayout();
    });
    const p =
        m.reduce(
          (M, w) => (w.box.options && w.box.options.display === !1 ? M : M + 1),
          0,
        ) || 1,
      b = Object.freeze({
        outerWidth: n,
        outerHeight: a,
        padding: r,
        availableWidth: u,
        availableHeight: c,
        vBoxMaxWidth: u / 2 / p,
        hBoxMaxHeight: c / 2,
      }),
      x = Object.assign({}, r);
    Z0(x, fn(s));
    const S = Object.assign(
        { maxPadding: x, w: u, h: c, x: r.left, y: r.top },
        r,
      ),
      T = kS(m.concat(g), b);
    (is(h.fullSize, S, b, T),
      is(m, S, b, T),
      is(g, S, b, T) && is(m, S, b, T),
      BS(S),
      Mp(h.leftAndTop, S, b, T),
      (S.x += S.w),
      (S.y += S.h),
      Mp(h.rightAndBottom, S, b, T),
      (i.chartArea = {
        left: S.left,
        top: S.top,
        right: S.left + S.w,
        bottom: S.top + S.h,
        height: S.h,
        width: S.w,
      }),
      qt(h.chartArea, (M) => {
        const w = M.box;
        (Object.assign(w, i.chartArea),
          w.update(S.w, S.h, { left: 0, top: 0, right: 0, bottom: 0 }));
      }));
  },
};
class K0 {
  acquireContext(n, a) {}
  releaseContext(n) {
    return !1;
  }
  addEventListener(n, a, s) {}
  removeEventListener(n, a, s) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(n, a, s, r) {
    return (
      (a = Math.max(0, a || n.width)),
      (s = s || n.height),
      { width: a, height: Math.max(0, r ? Math.floor(a / r) : s) }
    );
  }
  isAttached(n) {
    return !0;
  }
  updateConfig(n) {}
}
class qS extends K0 {
  acquireContext(n) {
    return (n && n.getContext && n.getContext("2d")) || null;
  }
  updateConfig(n) {
    n.options.animation = !1;
  }
}
const sr = "$chartjs",
  YS = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  Ep = (i) => i === null || i === "";
function VS(i, n) {
  const a = i.style,
    s = i.getAttribute("height"),
    r = i.getAttribute("width");
  if (
    ((i[sr] = {
      initial: {
        height: s,
        width: r,
        style: { display: a.display, height: a.height, width: a.width },
      },
    }),
    (a.display = a.display || "block"),
    (a.boxSizing = a.boxSizing || "border-box"),
    Ep(r))
  ) {
    const u = cp(i, "width");
    u !== void 0 && (i.width = u);
  }
  if (Ep(s))
    if (i.style.height === "") i.height = i.width / (n || 2);
    else {
      const u = cp(i, "height");
      u !== void 0 && (i.height = u);
    }
  return i;
}
const W0 = P1 ? { passive: !0 } : !1;
function XS(i, n, a) {
  i && i.addEventListener(n, a, W0);
}
function GS(i, n, a) {
  i && i.canvas && i.canvas.removeEventListener(n, a, W0);
}
function QS(i, n) {
  const a = YS[i.type] || i.type,
    { x: s, y: r } = Ii(i, n);
  return {
    type: a,
    chart: n,
    native: i,
    x: s !== void 0 ? s : null,
    y: r !== void 0 ? r : null,
  };
}
function pr(i, n) {
  for (const a of i) if (a === n || a.contains(n)) return !0;
}
function FS(i, n, a) {
  const s = i.canvas,
    r = new MutationObserver((u) => {
      let c = !1;
      for (const h of u)
        ((c = c || pr(h.addedNodes, s)), (c = c && !pr(h.removedNodes, s)));
      c && a();
    });
  return (r.observe(document, { childList: !0, subtree: !0 }), r);
}
function ZS(i, n, a) {
  const s = i.canvas,
    r = new MutationObserver((u) => {
      let c = !1;
      for (const h of u)
        ((c = c || pr(h.removedNodes, s)), (c = c && !pr(h.addedNodes, s)));
      c && a();
    });
  return (r.observe(document, { childList: !0, subtree: !0 }), r);
}
const ys = new Map();
let wp = 0;
function J0() {
  const i = window.devicePixelRatio;
  i !== wp &&
    ((wp = i),
    ys.forEach((n, a) => {
      a.currentDevicePixelRatio !== i && n();
    }));
}
function KS(i, n) {
  (ys.size || window.addEventListener("resize", J0), ys.set(i, n));
}
function WS(i) {
  (ys.delete(i), ys.size || window.removeEventListener("resize", J0));
}
function JS(i, n, a) {
  const s = i.canvas,
    r = s && Rf(s);
  if (!r) return;
  const u = D0((h, m) => {
      const g = r.clientWidth;
      (a(h, m), g < r.clientWidth && a());
    }, window),
    c = new ResizeObserver((h) => {
      const m = h[0],
        g = m.contentRect.width,
        p = m.contentRect.height;
      (g === 0 && p === 0) || u(g, p);
    });
  return (c.observe(r), KS(i, u), c);
}
function $c(i, n, a) {
  (a && a.disconnect(), n === "resize" && WS(i));
}
function PS(i, n, a) {
  const s = i.canvas,
    r = D0((u) => {
      i.ctx !== null && a(QS(u, i));
    }, i);
  return (XS(s, n, r), r);
}
class $S extends K0 {
  acquireContext(n, a) {
    const s = n && n.getContext && n.getContext("2d");
    return s && s.canvas === n ? (VS(n, a), s) : null;
  }
  releaseContext(n) {
    const a = n.canvas;
    if (!a[sr]) return !1;
    const s = a[sr].initial;
    ["height", "width"].forEach((u) => {
      const c = s[u];
      Ft(c) ? a.removeAttribute(u) : a.setAttribute(u, c);
    });
    const r = s.style || {};
    return (
      Object.keys(r).forEach((u) => {
        a.style[u] = r[u];
      }),
      (a.width = a.width),
      delete a[sr],
      !0
    );
  }
  addEventListener(n, a, s) {
    this.removeEventListener(n, a);
    const r = n.$proxies || (n.$proxies = {}),
      c = { attach: FS, detach: ZS, resize: JS }[a] || PS;
    r[a] = c(n, a, s);
  }
  removeEventListener(n, a) {
    const s = n.$proxies || (n.$proxies = {}),
      r = s[a];
    if (!r) return;
    ((({ attach: $c, detach: $c, resize: $c })[a] || GS)(n, a, r),
      (s[a] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(n, a, s, r) {
    return J1(n, a, s, r);
  }
  isAttached(n) {
    const a = n && Rf(n);
    return !!(a && a.isConnected);
  }
}
function IS(i) {
  return !Df() || (typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas)
    ? qS
    : $S;
}
class oa {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(n) {
    const { x: a, y: s } = this.getProps(["x", "y"], n);
    return { x: a, y: s };
  }
  hasValue() {
    return ms(this.x) && ms(this.y);
  }
  getProps(n, a) {
    const s = this.$animations;
    if (!a || !s) return this;
    const r = {};
    return (
      n.forEach((u) => {
        r[u] = s[u] && s[u].active() ? s[u]._to : this[u];
      }),
      r
    );
  }
}
function t2(i, n) {
  const a = i.options.ticks,
    s = e2(i),
    r = Math.min(a.maxTicksLimit || s, s),
    u = a.major.enabled ? i2(n) : [],
    c = u.length,
    h = u[0],
    m = u[c - 1],
    g = [];
  if (c > r) return (a2(n, g, u, c / r), g);
  const p = n2(u, n, r);
  if (c > 0) {
    let b, x;
    const S = c > 1 ? Math.round((m - h) / (c - 1)) : null;
    for (Io(n, g, p, Ft(S) ? 0 : h - S, h), b = 0, x = c - 1; b < x; b++)
      Io(n, g, p, u[b], u[b + 1]);
    return (Io(n, g, p, m, Ft(S) ? n.length : m + S), g);
  }
  return (Io(n, g, p), g);
}
function e2(i) {
  const n = i.options.offset,
    a = i._tickSize(),
    s = i._length / a + (n ? 0 : 1),
    r = i._maxLength / a;
  return Math.floor(Math.min(s, r));
}
function n2(i, n, a) {
  const s = l2(i),
    r = n.length / a;
  if (!s) return Math.max(r, 1);
  const u = F_(s);
  for (let c = 0, h = u.length - 1; c < h; c++) {
    const m = u[c];
    if (m > r) return m;
  }
  return Math.max(r, 1);
}
function i2(i) {
  const n = [];
  let a, s;
  for (a = 0, s = i.length; a < s; a++) i[a].major && n.push(a);
  return n;
}
function a2(i, n, a, s) {
  let r = 0,
    u = a[0],
    c;
  for (s = Math.ceil(s), c = 0; c < i.length; c++)
    c === u && (n.push(i[c]), r++, (u = a[r * s]));
}
function Io(i, n, a, s, r) {
  const u = Dt(s, 0),
    c = Math.min(Dt(r, i.length), i.length);
  let h = 0,
    m,
    g,
    p;
  for (
    a = Math.ceil(a), r && ((m = r - s), (a = m / Math.floor(m / a))), p = u;
    p < 0;
  )
    (h++, (p = Math.round(u + h * a)));
  for (g = Math.max(u, 0); g < c; g++)
    g === p && (n.push(i[g]), h++, (p = Math.round(u + h * a)));
}
function l2(i) {
  const n = i.length;
  let a, s;
  if (n < 2) return !1;
  for (s = i[0], a = 1; a < n; ++a) if (i[a] - i[a - 1] !== s) return !1;
  return s;
}
const s2 = (i) => (i === "left" ? "right" : i === "right" ? "left" : i),
  Ap = (i, n, a) => (n === "top" || n === "left" ? i[n] + a : i[n] - a),
  Tp = (i, n) => Math.min(n || i, i);
function Cp(i, n) {
  const a = [],
    s = i.length / n,
    r = i.length;
  let u = 0;
  for (; u < r; u += s) a.push(i[Math.floor(u)]);
  return a;
}
function o2(i, n, a) {
  const s = i.ticks.length,
    r = Math.min(n, s - 1),
    u = i._startPixel,
    c = i._endPixel,
    h = 1e-6;
  let m = i.getPixelForTick(r),
    g;
  if (
    !(
      a &&
      (s === 1
        ? (g = Math.max(m - u, c - m))
        : n === 0
          ? (g = (i.getPixelForTick(1) - m) / 2)
          : (g = (m - i.getPixelForTick(r - 1)) / 2),
      (m += r < n ? g : -g),
      m < u - h || m > c + h)
    )
  )
    return m;
}
function r2(i, n) {
  qt(i, (a) => {
    const s = a.gc,
      r = s.length / 2;
    let u;
    if (r > n) {
      for (u = 0; u < r; ++u) delete a.data[s[u]];
      s.splice(0, r);
    }
  });
}
function Il(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Op(i, n) {
  if (!i.display) return 0;
  const a = we(i.font, n),
    s = fn(i.padding);
  return (de(i.text) ? i.text.length : 1) * a.lineHeight + s.height;
}
function u2(i, n) {
  return sa(i, { scale: n, type: "scale" });
}
function c2(i, n, a) {
  return sa(i, { tick: a, index: n, type: "tick" });
}
function f2(i, n, a) {
  let s = Mf(i);
  return (((a && n !== "right") || (!a && n === "right")) && (s = s2(s)), s);
}
function h2(i, n, a, s) {
  const { top: r, left: u, bottom: c, right: h, chart: m } = i,
    { chartArea: g, scales: p } = m;
  let b = 0,
    x,
    S,
    T;
  const M = c - r,
    w = h - u;
  if (i.isHorizontal()) {
    if (((S = Ee(s, u, h)), kt(a))) {
      const N = Object.keys(a)[0],
        X = a[N];
      T = p[N].getPixelForValue(X) + M - n;
    } else
      a === "center" ? (T = (g.bottom + g.top) / 2 + M - n) : (T = Ap(i, a, n));
    x = h - u;
  } else {
    if (kt(a)) {
      const N = Object.keys(a)[0],
        X = a[N];
      S = p[N].getPixelForValue(X) - w + n;
    } else
      a === "center" ? (S = (g.left + g.right) / 2 - w + n) : (S = Ap(i, a, n));
    ((T = Ee(s, c, r)), (b = a === "left" ? -pn : pn));
  }
  return { titleX: S, titleY: T, maxWidth: x, rotation: b };
}
class Ia extends oa {
  constructor(n) {
    (super(),
      (this.id = n.id),
      (this.type = n.type),
      (this.options = void 0),
      (this.ctx = n.ctx),
      (this.chart = n.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0));
  }
  init(n) {
    ((this.options = n.setContext(this.getContext())),
      (this.axis = n.axis),
      (this._userMin = this.parse(n.min)),
      (this._userMax = this.parse(n.max)),
      (this._suggestedMin = this.parse(n.suggestedMin)),
      (this._suggestedMax = this.parse(n.suggestedMax)));
  }
  parse(n, a) {
    return n;
  }
  getUserBounds() {
    let { _userMin: n, _userMax: a, _suggestedMin: s, _suggestedMax: r } = this;
    return (
      (n = Sn(n, Number.POSITIVE_INFINITY)),
      (a = Sn(a, Number.NEGATIVE_INFINITY)),
      (s = Sn(s, Number.POSITIVE_INFINITY)),
      (r = Sn(r, Number.NEGATIVE_INFINITY)),
      { min: Sn(n, s), max: Sn(a, r), minDefined: cn(n), maxDefined: cn(a) }
    );
  }
  getMinMax(n) {
    let { min: a, max: s, minDefined: r, maxDefined: u } = this.getUserBounds(),
      c;
    if (r && u) return { min: a, max: s };
    const h = this.getMatchingVisibleMetas();
    for (let m = 0, g = h.length; m < g; ++m)
      ((c = h[m].controller.getMinMax(this, n)),
        r || (a = Math.min(a, c.min)),
        u || (s = Math.max(s, c.max)));
    return (
      (a = u && a > s ? s : a),
      (s = r && a > s ? a : s),
      { min: Sn(a, Sn(s, a)), max: Sn(s, Sn(a, s)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const n = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? n.xLabels : n.yLabels) ||
      n.labels ||
      []
    );
  }
  getLabelItems(n = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(n));
  }
  beforeLayout() {
    ((this._cache = {}), (this._dataLimitsCached = !1));
  }
  beforeUpdate() {
    Jt(this.options.beforeUpdate, [this]);
  }
  update(n, a, s) {
    const { beginAtZero: r, grace: u, ticks: c } = this.options,
      h = c.sampleSize;
    (this.beforeUpdate(),
      (this.maxWidth = n),
      (this.maxHeight = a),
      (this._margins = s =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + s.left + s.right
        : this.height + s.top + s.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = C1(this, u, r)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks());
    const m = h < this.ticks.length;
    (this._convertTicksToLabels(m ? Cp(this.ticks, h) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      c.display &&
        (c.autoSkip || c.source === "auto") &&
        ((this.ticks = t2(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      m && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate());
  }
  configure() {
    let n = this.options.reverse,
      a,
      s;
    (this.isHorizontal()
      ? ((a = this.left), (s = this.right))
      : ((a = this.top), (s = this.bottom), (n = !n)),
      (this._startPixel = a),
      (this._endPixel = s),
      (this._reversePixels = n),
      (this._length = s - a),
      (this._alignToPixels = this.options.alignToPixels));
  }
  afterUpdate() {
    Jt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    Jt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    (this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0));
  }
  afterSetDimensions() {
    Jt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(n) {
    (this.chart.notifyPlugins(n, this.getContext()),
      Jt(this.options[n], [this]));
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    Jt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(n) {
    const a = this.options.ticks;
    let s, r, u;
    for (s = 0, r = n.length; s < r; s++)
      ((u = n[s]), (u.label = Jt(a.callback, [u.value, s, n], this)));
  }
  afterTickToLabelConversion() {
    Jt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    Jt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const n = this.options,
      a = n.ticks,
      s = Tp(this.ticks.length, n.ticks.maxTicksLimit),
      r = a.minRotation || 0,
      u = a.maxRotation;
    let c = r,
      h,
      m,
      g;
    if (
      !this._isVisible() ||
      !a.display ||
      r >= u ||
      s <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = r;
      return;
    }
    const p = this._getLabelSizes(),
      b = p.widest.width,
      x = p.highest.height,
      S = rn(this.chart.width - b, 0, this.maxWidth);
    ((h = n.offset ? this.maxWidth / s : S / (s - 1)),
      b + 6 > h &&
        ((h = S / (s - (n.offset ? 0.5 : 1))),
        (m =
          this.maxHeight -
          Il(n.grid) -
          a.padding -
          Op(n.title, this.chart.options.font)),
        (g = Math.sqrt(b * b + x * x)),
        (c = J_(
          Math.min(
            Math.asin(rn((p.highest.height + 6) / h, -1, 1)),
            Math.asin(rn(m / g, -1, 1)) - Math.asin(rn(x / g, -1, 1)),
          ),
        )),
        (c = Math.max(r, Math.min(u, c)))),
      (this.labelRotation = c));
  }
  afterCalculateLabelRotation() {
    Jt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    Jt(this.options.beforeFit, [this]);
  }
  fit() {
    const n = { width: 0, height: 0 },
      {
        chart: a,
        options: { ticks: s, title: r, grid: u },
      } = this,
      c = this._isVisible(),
      h = this.isHorizontal();
    if (c) {
      const m = Op(r, a.options.font);
      if (
        (h
          ? ((n.width = this.maxWidth), (n.height = Il(u) + m))
          : ((n.height = this.maxHeight), (n.width = Il(u) + m)),
        s.display && this.ticks.length)
      ) {
        const {
            first: g,
            last: p,
            widest: b,
            highest: x,
          } = this._getLabelSizes(),
          S = s.padding * 2,
          T = ea(this.labelRotation),
          M = Math.cos(T),
          w = Math.sin(T);
        if (h) {
          const N = s.mirror ? 0 : w * b.width + M * x.height;
          n.height = Math.min(this.maxHeight, n.height + N + S);
        } else {
          const N = s.mirror ? 0 : M * b.width + w * x.height;
          n.width = Math.min(this.maxWidth, n.width + N + S);
        }
        this._calculatePadding(g, p, w, M);
      }
    }
    (this._handleMargins(),
      h
        ? ((this.width = this._length =
            a.width - this._margins.left - this._margins.right),
          (this.height = n.height))
        : ((this.width = n.width),
          (this.height = this._length =
            a.height - this._margins.top - this._margins.bottom)));
  }
  _calculatePadding(n, a, s, r) {
    const {
        ticks: { align: u, padding: c },
        position: h,
      } = this.options,
      m = this.labelRotation !== 0,
      g = h !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const p = this.getPixelForTick(0) - this.left,
        b = this.right - this.getPixelForTick(this.ticks.length - 1);
      let x = 0,
        S = 0;
      (m
        ? g
          ? ((x = r * n.width), (S = s * a.height))
          : ((x = s * n.height), (S = r * a.width))
        : u === "start"
          ? (S = a.width)
          : u === "end"
            ? (x = n.width)
            : u !== "inner" && ((x = n.width / 2), (S = a.width / 2)),
        (this.paddingLeft = Math.max(
          ((x - p + c) * this.width) / (this.width - p),
          0,
        )),
        (this.paddingRight = Math.max(
          ((S - b + c) * this.width) / (this.width - b),
          0,
        )));
    } else {
      let p = a.height / 2,
        b = n.height / 2;
      (u === "start"
        ? ((p = 0), (b = n.height))
        : u === "end" && ((p = a.height), (b = 0)),
        (this.paddingTop = p + c),
        (this.paddingBottom = b + c));
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom,
      )));
  }
  afterFit() {
    Jt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: n, position: a } = this.options;
    return a === "top" || a === "bottom" || n === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(n) {
    (this.beforeTickToLabelConversion(), this.generateTickLabels(n));
    let a, s;
    for (a = 0, s = n.length; a < s; a++)
      Ft(n[a].label) && (n.splice(a, 1), s--, a--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let n = this._labelSizes;
    if (!n) {
      const a = this.options.ticks.sampleSize;
      let s = this.ticks;
      (a < s.length && (s = Cp(s, a)),
        (this._labelSizes = n =
          this._computeLabelSizes(
            s,
            s.length,
            this.options.ticks.maxTicksLimit,
          )));
    }
    return n;
  }
  _computeLabelSizes(n, a, s) {
    const { ctx: r, _longestTextCache: u } = this,
      c = [],
      h = [],
      m = Math.floor(a / Tp(a, s));
    let g = 0,
      p = 0,
      b,
      x,
      S,
      T,
      M,
      w,
      N,
      X,
      J,
      W,
      G;
    for (b = 0; b < a; b += m) {
      if (
        ((T = n[b].label),
        (M = this._resolveTickFontOptions(b)),
        (r.font = w = M.string),
        (N = u[w] = u[w] || { data: {}, gc: [] }),
        (X = M.lineHeight),
        (J = W = 0),
        !Ft(T) && !de(T))
      )
        ((J = lp(r, N.data, N.gc, J, T)), (W = X));
      else if (de(T))
        for (x = 0, S = T.length; x < S; ++x)
          ((G = T[x]),
            !Ft(G) && !de(G) && ((J = lp(r, N.data, N.gc, J, G)), (W += X)));
      (c.push(J), h.push(W), (g = Math.max(J, g)), (p = Math.max(W, p)));
    }
    r2(u, a);
    const et = c.indexOf(g),
      z = h.indexOf(p),
      _ = (A) => ({ width: c[A] || 0, height: h[A] || 0 });
    return {
      first: _(0),
      last: _(a - 1),
      widest: _(et),
      highest: _(z),
      widths: c,
      heights: h,
    };
  }
  getLabelForValue(n) {
    return n;
  }
  getPixelForValue(n, a) {
    return NaN;
  }
  getValueForPixel(n) {}
  getPixelForTick(n) {
    const a = this.ticks;
    return n < 0 || n > a.length - 1 ? null : this.getPixelForValue(a[n].value);
  }
  getPixelForDecimal(n) {
    this._reversePixels && (n = 1 - n);
    const a = this._startPixel + n * this._length;
    return I_(this._alignToPixels ? Pi(this.chart, a, 0) : a);
  }
  getDecimalForPixel(n) {
    const a = (n - this._startPixel) / this._length;
    return this._reversePixels ? 1 - a : a;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: n, max: a } = this;
    return n < 0 && a < 0 ? a : n > 0 && a > 0 ? n : 0;
  }
  getContext(n) {
    const a = this.ticks || [];
    if (n >= 0 && n < a.length) {
      const s = a[n];
      return s.$context || (s.$context = c2(this.getContext(), n, s));
    }
    return this.$context || (this.$context = u2(this.chart.getContext(), this));
  }
  _tickSize() {
    const n = this.options.ticks,
      a = ea(this.labelRotation),
      s = Math.abs(Math.cos(a)),
      r = Math.abs(Math.sin(a)),
      u = this._getLabelSizes(),
      c = n.autoSkipPadding || 0,
      h = u ? u.widest.width + c : 0,
      m = u ? u.highest.height + c : 0;
    return this.isHorizontal()
      ? m * s > h * r
        ? h / s
        : m / r
      : m * r < h * s
        ? m / s
        : h / r;
  }
  _isVisible() {
    const n = this.options.display;
    return n !== "auto" ? !!n : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(n) {
    const a = this.axis,
      s = this.chart,
      r = this.options,
      { grid: u, position: c, border: h } = r,
      m = u.offset,
      g = this.isHorizontal(),
      b = this.ticks.length + (m ? 1 : 0),
      x = Il(u),
      S = [],
      T = h.setContext(this.getContext()),
      M = T.display ? T.width : 0,
      w = M / 2,
      N = function (O) {
        return Pi(s, O, M);
      };
    let X, J, W, G, et, z, _, A, j, V, K, at;
    if (c === "top")
      ((X = N(this.bottom)),
        (z = this.bottom - x),
        (A = X - w),
        (V = N(n.top) + w),
        (at = n.bottom));
    else if (c === "bottom")
      ((X = N(this.top)),
        (V = n.top),
        (at = N(n.bottom) - w),
        (z = X + w),
        (A = this.top + x));
    else if (c === "left")
      ((X = N(this.right)),
        (et = this.right - x),
        (_ = X - w),
        (j = N(n.left) + w),
        (K = n.right));
    else if (c === "right")
      ((X = N(this.left)),
        (j = n.left),
        (K = N(n.right) - w),
        (et = X + w),
        (_ = this.left + x));
    else if (a === "x") {
      if (c === "center") X = N((n.top + n.bottom) / 2 + 0.5);
      else if (kt(c)) {
        const O = Object.keys(c)[0],
          Y = c[O];
        X = N(this.chart.scales[O].getPixelForValue(Y));
      }
      ((V = n.top), (at = n.bottom), (z = X + w), (A = z + x));
    } else if (a === "y") {
      if (c === "center") X = N((n.left + n.right) / 2);
      else if (kt(c)) {
        const O = Object.keys(c)[0],
          Y = c[O];
        X = N(this.chart.scales[O].getPixelForValue(Y));
      }
      ((et = X - w), (_ = et - x), (j = n.left), (K = n.right));
    }
    const tt = Dt(r.ticks.maxTicksLimit, b),
      lt = Math.max(1, Math.ceil(b / tt));
    for (J = 0; J < b; J += lt) {
      const O = this.getContext(J),
        Y = u.setContext(O),
        Q = h.setContext(O),
        nt = Y.lineWidth,
        st = Y.color,
        E = Q.dash || [],
        k = Q.dashOffset,
        F = Y.tickWidth,
        it = Y.tickColor,
        rt = Y.tickBorderDash || [],
        ot = Y.tickBorderDashOffset;
      ((W = o2(this, J, m)),
        W !== void 0 &&
          ((G = Pi(s, W, nt)),
          g ? (et = _ = j = K = G) : (z = A = V = at = G),
          S.push({
            tx1: et,
            ty1: z,
            tx2: _,
            ty2: A,
            x1: j,
            y1: V,
            x2: K,
            y2: at,
            width: nt,
            color: st,
            borderDash: E,
            borderDashOffset: k,
            tickWidth: F,
            tickColor: it,
            tickBorderDash: rt,
            tickBorderDashOffset: ot,
          })));
    }
    return ((this._ticksLength = b), (this._borderValue = X), S);
  }
  _computeLabelItems(n) {
    const a = this.axis,
      s = this.options,
      { position: r, ticks: u } = s,
      c = this.isHorizontal(),
      h = this.ticks,
      { align: m, crossAlign: g, padding: p, mirror: b } = u,
      x = Il(s.grid),
      S = x + p,
      T = b ? -p : S,
      M = -ea(this.labelRotation),
      w = [];
    let N,
      X,
      J,
      W,
      G,
      et,
      z,
      _,
      A,
      j,
      V,
      K,
      at = "middle";
    if (r === "top")
      ((et = this.bottom - T), (z = this._getXAxisLabelAlignment()));
    else if (r === "bottom")
      ((et = this.top + T), (z = this._getXAxisLabelAlignment()));
    else if (r === "left") {
      const lt = this._getYAxisLabelAlignment(x);
      ((z = lt.textAlign), (G = lt.x));
    } else if (r === "right") {
      const lt = this._getYAxisLabelAlignment(x);
      ((z = lt.textAlign), (G = lt.x));
    } else if (a === "x") {
      if (r === "center") et = (n.top + n.bottom) / 2 + S;
      else if (kt(r)) {
        const lt = Object.keys(r)[0],
          O = r[lt];
        et = this.chart.scales[lt].getPixelForValue(O) + S;
      }
      z = this._getXAxisLabelAlignment();
    } else if (a === "y") {
      if (r === "center") G = (n.left + n.right) / 2 - S;
      else if (kt(r)) {
        const lt = Object.keys(r)[0],
          O = r[lt];
        G = this.chart.scales[lt].getPixelForValue(O);
      }
      z = this._getYAxisLabelAlignment(x).textAlign;
    }
    a === "y" &&
      (m === "start" ? (at = "top") : m === "end" && (at = "bottom"));
    const tt = this._getLabelSizes();
    for (N = 0, X = h.length; N < X; ++N) {
      ((J = h[N]), (W = J.label));
      const lt = u.setContext(this.getContext(N));
      ((_ = this.getPixelForTick(N) + u.labelOffset),
        (A = this._resolveTickFontOptions(N)),
        (j = A.lineHeight),
        (V = de(W) ? W.length : 1));
      const O = V / 2,
        Y = lt.color,
        Q = lt.textStrokeColor,
        nt = lt.textStrokeWidth;
      let st = z;
      c
        ? ((G = _),
          z === "inner" &&
            (N === X - 1
              ? (st = this.options.reverse ? "left" : "right")
              : N === 0
                ? (st = this.options.reverse ? "right" : "left")
                : (st = "center")),
          r === "top"
            ? g === "near" || M !== 0
              ? (K = -V * j + j / 2)
              : g === "center"
                ? (K = -tt.highest.height / 2 - O * j + j)
                : (K = -tt.highest.height + j / 2)
            : g === "near" || M !== 0
              ? (K = j / 2)
              : g === "center"
                ? (K = tt.highest.height / 2 - O * j)
                : (K = tt.highest.height - V * j),
          b && (K *= -1),
          M !== 0 && !lt.showLabelBackdrop && (G += (j / 2) * Math.sin(M)))
        : ((et = _), (K = ((1 - V) * j) / 2));
      let E;
      if (lt.showLabelBackdrop) {
        const k = fn(lt.backdropPadding),
          F = tt.heights[N],
          it = tt.widths[N];
        let rt = K - k.top,
          ot = 0 - k.left;
        switch (at) {
          case "middle":
            rt -= F / 2;
            break;
          case "bottom":
            rt -= F;
            break;
        }
        switch (z) {
          case "center":
            ot -= it / 2;
            break;
          case "right":
            ot -= it;
            break;
          case "inner":
            N === X - 1 ? (ot -= it) : N > 0 && (ot -= it / 2);
            break;
        }
        E = {
          left: ot,
          top: rt,
          width: it + k.width,
          height: F + k.height,
          color: lt.backdropColor,
        };
      }
      w.push({
        label: W,
        font: A,
        textOffset: K,
        options: {
          rotation: M,
          color: Y,
          strokeColor: Q,
          strokeWidth: nt,
          textAlign: st,
          textBaseline: at,
          translation: [G, et],
          backdrop: E,
        },
      });
    }
    return w;
  }
  _getXAxisLabelAlignment() {
    const { position: n, ticks: a } = this.options;
    if (-ea(this.labelRotation)) return n === "top" ? "left" : "right";
    let r = "center";
    return (
      a.align === "start"
        ? (r = "left")
        : a.align === "end"
          ? (r = "right")
          : a.align === "inner" && (r = "inner"),
      r
    );
  }
  _getYAxisLabelAlignment(n) {
    const {
        position: a,
        ticks: { crossAlign: s, mirror: r, padding: u },
      } = this.options,
      c = this._getLabelSizes(),
      h = n + u,
      m = c.widest.width;
    let g, p;
    return (
      a === "left"
        ? r
          ? ((p = this.right + u),
            s === "near"
              ? (g = "left")
              : s === "center"
                ? ((g = "center"), (p += m / 2))
                : ((g = "right"), (p += m)))
          : ((p = this.right - h),
            s === "near"
              ? (g = "right")
              : s === "center"
                ? ((g = "center"), (p -= m / 2))
                : ((g = "left"), (p = this.left)))
        : a === "right"
          ? r
            ? ((p = this.left + u),
              s === "near"
                ? (g = "right")
                : s === "center"
                  ? ((g = "center"), (p -= m / 2))
                  : ((g = "left"), (p -= m)))
            : ((p = this.left + h),
              s === "near"
                ? (g = "left")
                : s === "center"
                  ? ((g = "center"), (p += m / 2))
                  : ((g = "right"), (p = this.right)))
          : (g = "right"),
      { textAlign: g, x: p }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const n = this.chart,
      a = this.options.position;
    if (a === "left" || a === "right")
      return { top: 0, left: this.left, bottom: n.height, right: this.right };
    if (a === "top" || a === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: n.width };
  }
  drawBackground() {
    const {
      ctx: n,
      options: { backgroundColor: a },
      left: s,
      top: r,
      width: u,
      height: c,
    } = this;
    a && (n.save(), (n.fillStyle = a), n.fillRect(s, r, u, c), n.restore());
  }
  getLineWidthForValue(n) {
    const a = this.options.grid;
    if (!this._isVisible() || !a.display) return 0;
    const r = this.ticks.findIndex((u) => u.value === n);
    return r >= 0 ? a.setContext(this.getContext(r)).lineWidth : 0;
  }
  drawGrid(n) {
    const a = this.options.grid,
      s = this.ctx,
      r =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(n));
    let u, c;
    const h = (m, g, p) => {
      !p.width ||
        !p.color ||
        (s.save(),
        (s.lineWidth = p.width),
        (s.strokeStyle = p.color),
        s.setLineDash(p.borderDash || []),
        (s.lineDashOffset = p.borderDashOffset),
        s.beginPath(),
        s.moveTo(m.x, m.y),
        s.lineTo(g.x, g.y),
        s.stroke(),
        s.restore());
    };
    if (a.display)
      for (u = 0, c = r.length; u < c; ++u) {
        const m = r[u];
        (a.drawOnChartArea && h({ x: m.x1, y: m.y1 }, { x: m.x2, y: m.y2 }, m),
          a.drawTicks &&
            h(
              { x: m.tx1, y: m.ty1 },
              { x: m.tx2, y: m.ty2 },
              {
                color: m.tickColor,
                width: m.tickWidth,
                borderDash: m.tickBorderDash,
                borderDashOffset: m.tickBorderDashOffset,
              },
            ));
      }
  }
  drawBorder() {
    const {
        chart: n,
        ctx: a,
        options: { border: s, grid: r },
      } = this,
      u = s.setContext(this.getContext()),
      c = s.display ? u.width : 0;
    if (!c) return;
    const h = r.setContext(this.getContext(0)).lineWidth,
      m = this._borderValue;
    let g, p, b, x;
    (this.isHorizontal()
      ? ((g = Pi(n, this.left, c) - c / 2),
        (p = Pi(n, this.right, h) + h / 2),
        (b = x = m))
      : ((b = Pi(n, this.top, c) - c / 2),
        (x = Pi(n, this.bottom, h) + h / 2),
        (g = p = m)),
      a.save(),
      (a.lineWidth = u.width),
      (a.strokeStyle = u.color),
      a.beginPath(),
      a.moveTo(g, b),
      a.lineTo(p, x),
      a.stroke(),
      a.restore());
  }
  drawLabels(n) {
    if (!this.options.ticks.display) return;
    const s = this.ctx,
      r = this._computeLabelArea();
    r && wf(s, r);
    const u = this.getLabelItems(n);
    for (const c of u) {
      const h = c.options,
        m = c.font,
        g = c.label,
        p = c.textOffset;
      ps(s, g, 0, p, m, h);
    }
    r && Af(s);
  }
  drawTitle() {
    const {
      ctx: n,
      options: { position: a, title: s, reverse: r },
    } = this;
    if (!s.display) return;
    const u = we(s.font),
      c = fn(s.padding),
      h = s.align;
    let m = u.lineHeight / 2;
    a === "bottom" || a === "center" || kt(a)
      ? ((m += c.bottom),
        de(s.text) && (m += u.lineHeight * (s.text.length - 1)))
      : (m += c.top);
    const {
      titleX: g,
      titleY: p,
      maxWidth: b,
      rotation: x,
    } = h2(this, m, a, h);
    ps(n, s.text, 0, 0, u, {
      color: s.color,
      maxWidth: b,
      rotation: x,
      textAlign: f2(h, a, r),
      textBaseline: "middle",
      translation: [g, p],
    });
  }
  draw(n) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(n),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(n));
  }
  _layers() {
    const n = this.options,
      a = (n.ticks && n.ticks.z) || 0,
      s = Dt(n.grid && n.grid.z, -1),
      r = Dt(n.border && n.border.z, 0);
    return !this._isVisible() || this.draw !== Ia.prototype.draw
      ? [
          {
            z: a,
            draw: (u) => {
              this.draw(u);
            },
          },
        ]
      : [
          {
            z: s,
            draw: (u) => {
              (this.drawBackground(), this.drawGrid(u), this.drawTitle());
            },
          },
          {
            z: r,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: a,
            draw: (u) => {
              this.drawLabels(u);
            },
          },
        ];
  }
  getMatchingVisibleMetas(n) {
    const a = this.chart.getSortedVisibleDatasetMetas(),
      s = this.axis + "AxisID",
      r = [];
    let u, c;
    for (u = 0, c = a.length; u < c; ++u) {
      const h = a[u];
      h[s] === this.id && (!n || h.type === n) && r.push(h);
    }
    return r;
  }
  _resolveTickFontOptions(n) {
    const a = this.options.ticks.setContext(this.getContext(n));
    return we(a.font);
  }
  _maxDigits() {
    const n = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / n;
  }
}
class tr {
  constructor(n, a, s) {
    ((this.type = n),
      (this.scope = a),
      (this.override = s),
      (this.items = Object.create(null)));
  }
  isForType(n) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      n.prototype,
    );
  }
  register(n) {
    const a = Object.getPrototypeOf(n);
    let s;
    g2(a) && (s = this.register(a));
    const r = this.items,
      u = n.id,
      c = this.scope + "." + u;
    if (!u) throw new Error("class does not have id: " + n);
    return (
      u in r ||
        ((r[u] = n),
        d2(n, c, s),
        this.override && le.override(n.id, n.overrides)),
      c
    );
  }
  get(n) {
    return this.items[n];
  }
  unregister(n) {
    const a = this.items,
      s = n.id,
      r = this.scope;
    (s in a && delete a[s],
      r && s in le[r] && (delete le[r][s], this.override && delete aa[s]));
  }
}
function d2(i, n, a) {
  const s = ds(Object.create(null), [
    a ? le.get(a) : {},
    le.get(n),
    i.defaults,
  ]);
  (le.set(n, s),
    i.defaultRoutes && m2(n, i.defaultRoutes),
    i.descriptors && le.describe(n, i.descriptors));
}
function m2(i, n) {
  Object.keys(n).forEach((a) => {
    const s = a.split("."),
      r = s.pop(),
      u = [i].concat(s).join("."),
      c = n[a].split("."),
      h = c.pop(),
      m = c.join(".");
    le.route(u, r, m, h);
  });
}
function g2(i) {
  return "id" in i && "defaults" in i;
}
class p2 {
  constructor() {
    ((this.controllers = new tr(Q0, "datasets", !0)),
      (this.elements = new tr(oa, "elements")),
      (this.plugins = new tr(Object, "plugins")),
      (this.scales = new tr(Ia, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]));
  }
  add(...n) {
    this._each("register", n);
  }
  remove(...n) {
    this._each("unregister", n);
  }
  addControllers(...n) {
    this._each("register", n, this.controllers);
  }
  addElements(...n) {
    this._each("register", n, this.elements);
  }
  addPlugins(...n) {
    this._each("register", n, this.plugins);
  }
  addScales(...n) {
    this._each("register", n, this.scales);
  }
  getController(n) {
    return this._get(n, this.controllers, "controller");
  }
  getElement(n) {
    return this._get(n, this.elements, "element");
  }
  getPlugin(n) {
    return this._get(n, this.plugins, "plugin");
  }
  getScale(n) {
    return this._get(n, this.scales, "scale");
  }
  removeControllers(...n) {
    this._each("unregister", n, this.controllers);
  }
  removeElements(...n) {
    this._each("unregister", n, this.elements);
  }
  removePlugins(...n) {
    this._each("unregister", n, this.plugins);
  }
  removeScales(...n) {
    this._each("unregister", n, this.scales);
  }
  _each(n, a, s) {
    [...a].forEach((r) => {
      const u = s || this._getRegistryForType(r);
      s || u.isForType(r) || (u === this.plugins && r.id)
        ? this._exec(n, u, r)
        : qt(r, (c) => {
            const h = s || this._getRegistryForType(c);
            this._exec(n, h, c);
          });
    });
  }
  _exec(n, a, s) {
    const r = _f(n);
    (Jt(s["before" + r], [], s), a[n](s), Jt(s["after" + r], [], s));
  }
  _getRegistryForType(n) {
    for (let a = 0; a < this._typedRegistries.length; a++) {
      const s = this._typedRegistries[a];
      if (s.isForType(n)) return s;
    }
    return this.plugins;
  }
  _get(n, a, s) {
    const r = a.get(n);
    if (r === void 0)
      throw new Error('"' + n + '" is not a registered ' + s + ".");
    return r;
  }
}
var wn = new p2();
class y2 {
  constructor() {
    this._init = void 0;
  }
  notify(n, a, s, r) {
    if (
      (a === "beforeInit" &&
        ((this._init = this._createDescriptors(n, !0)),
        this._notify(this._init, n, "install")),
      this._init === void 0)
    )
      return;
    const u = r ? this._descriptors(n).filter(r) : this._descriptors(n),
      c = this._notify(u, n, a, s);
    return (
      a === "afterDestroy" &&
        (this._notify(u, n, "stop"),
        this._notify(this._init, n, "uninstall"),
        (this._init = void 0)),
      c
    );
  }
  _notify(n, a, s, r) {
    r = r || {};
    for (const u of n) {
      const c = u.plugin,
        h = c[s],
        m = [a, r, u.options];
      if (Jt(h, m, c) === !1 && r.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Ft(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(n) {
    if (this._cache) return this._cache;
    const a = (this._cache = this._createDescriptors(n));
    return (this._notifyStateChanges(n), a);
  }
  _createDescriptors(n, a) {
    const s = n && n.config,
      r = Dt(s.options && s.options.plugins, {}),
      u = b2(s);
    return r === !1 && !a ? [] : x2(n, u, r, a);
  }
  _notifyStateChanges(n) {
    const a = this._oldCache || [],
      s = this._cache,
      r = (u, c) =>
        u.filter((h) => !c.some((m) => h.plugin.id === m.plugin.id));
    (this._notify(r(a, s), n, "stop"), this._notify(r(s, a), n, "start"));
  }
}
function b2(i) {
  const n = {},
    a = [],
    s = Object.keys(wn.plugins.items);
  for (let u = 0; u < s.length; u++) a.push(wn.getPlugin(s[u]));
  const r = i.plugins || [];
  for (let u = 0; u < r.length; u++) {
    const c = r[u];
    a.indexOf(c) === -1 && (a.push(c), (n[c.id] = !0));
  }
  return { plugins: a, localIds: n };
}
function v2(i, n) {
  return !n && i === !1 ? null : i === !0 ? {} : i;
}
function x2(i, { plugins: n, localIds: a }, s, r) {
  const u = [],
    c = i.getContext();
  for (const h of n) {
    const m = h.id,
      g = v2(s[m], r);
    g !== null &&
      u.push({
        plugin: h,
        options: _2(i.config, { plugin: h, local: a[m] }, g, c),
      });
  }
  return u;
}
function _2(i, { plugin: n, local: a }, s, r) {
  const u = i.pluginScopeKeys(n),
    c = i.getOptionScopes(s, u);
  return (
    a && n.defaults && c.push(n.defaults),
    i.createResolver(c, r, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function of(i, n) {
  const a = le.datasets[i] || {};
  return (
    ((n.datasets || {})[i] || {}).indexAxis || n.indexAxis || a.indexAxis || "x"
  );
}
function S2(i, n) {
  let a = i;
  return (
    i === "_index_" ? (a = n) : i === "_value_" && (a = n === "x" ? "y" : "x"),
    a
  );
}
function M2(i, n) {
  return i === n ? "_index_" : "_value_";
}
function Dp(i) {
  if (i === "x" || i === "y" || i === "r") return i;
}
function E2(i) {
  if (i === "top" || i === "bottom") return "x";
  if (i === "left" || i === "right") return "y";
}
function rf(i, ...n) {
  if (Dp(i)) return i;
  for (const a of n) {
    const s =
      a.axis || E2(a.position) || (i.length > 1 && Dp(i[0].toLowerCase()));
    if (s) return s;
  }
  throw new Error(
    `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`,
  );
}
function Rp(i, n, a) {
  if (a[n + "AxisID"] === i) return { axis: n };
}
function w2(i, n) {
  if (n.data && n.data.datasets) {
    const a = n.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (a.length) return Rp(i, "x", a[0]) || Rp(i, "y", a[0]);
  }
  return {};
}
function A2(i, n) {
  const a = aa[i.type] || { scales: {} },
    s = n.scales || {},
    r = of(i.type, n),
    u = Object.create(null);
  return (
    Object.keys(s).forEach((c) => {
      const h = s[c];
      if (!kt(h))
        return console.error(`Invalid scale configuration for scale: ${c}`);
      if (h._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${c}`,
        );
      const m = rf(c, h, w2(c, i), le.scales[h.type]),
        g = M2(m, r),
        p = a.scales || {};
      u[c] = ss(Object.create(null), [{ axis: m }, h, p[m], p[g]]);
    }),
    i.data.datasets.forEach((c) => {
      const h = c.type || i.type,
        m = c.indexAxis || of(h, n),
        p = (aa[h] || {}).scales || {};
      Object.keys(p).forEach((b) => {
        const x = S2(b, m),
          S = c[x + "AxisID"] || x;
        ((u[S] = u[S] || Object.create(null)),
          ss(u[S], [{ axis: x }, s[S], p[b]]));
      });
    }),
    Object.keys(u).forEach((c) => {
      const h = u[c];
      ss(h, [le.scales[h.type], le.scale]);
    }),
    u
  );
}
function P0(i) {
  const n = i.options || (i.options = {});
  ((n.plugins = Dt(n.plugins, {})), (n.scales = A2(i, n)));
}
function $0(i) {
  return (
    (i = i || {}),
    (i.datasets = i.datasets || []),
    (i.labels = i.labels || []),
    i
  );
}
function T2(i) {
  return ((i = i || {}), (i.data = $0(i.data)), P0(i), i);
}
const zp = new Map(),
  I0 = new Set();
function er(i, n) {
  let a = zp.get(i);
  return (a || ((a = n()), zp.set(i, a), I0.add(a)), a);
}
const ts = (i, n, a) => {
  const s = hr(n, a);
  s !== void 0 && i.add(s);
};
class C2 {
  constructor(n) {
    ((this._config = T2(n)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map()));
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(n) {
    this._config.type = n;
  }
  get data() {
    return this._config.data;
  }
  set data(n) {
    this._config.data = $0(n);
  }
  get options() {
    return this._config.options;
  }
  set options(n) {
    this._config.options = n;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const n = this._config;
    (this.clearCache(), P0(n));
  }
  clearCache() {
    (this._scopeCache.clear(), this._resolverCache.clear());
  }
  datasetScopeKeys(n) {
    return er(n, () => [[`datasets.${n}`, ""]]);
  }
  datasetAnimationScopeKeys(n, a) {
    return er(`${n}.transition.${a}`, () => [
      [`datasets.${n}.transitions.${a}`, `transitions.${a}`],
      [`datasets.${n}`, ""],
    ]);
  }
  datasetElementScopeKeys(n, a) {
    return er(`${n}-${a}`, () => [
      [`datasets.${n}.elements.${a}`, `datasets.${n}`, `elements.${a}`, ""],
    ]);
  }
  pluginScopeKeys(n) {
    const a = n.id,
      s = this.type;
    return er(`${s}-plugin-${a}`, () => [
      [`plugins.${a}`, ...(n.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(n, a) {
    const s = this._scopeCache;
    let r = s.get(n);
    return ((!r || a) && ((r = new Map()), s.set(n, r)), r);
  }
  getOptionScopes(n, a, s) {
    const { options: r, type: u } = this,
      c = this._cachedScopes(n, s),
      h = c.get(a);
    if (h) return h;
    const m = new Set();
    a.forEach((p) => {
      (n && (m.add(n), p.forEach((b) => ts(m, n, b))),
        p.forEach((b) => ts(m, r, b)),
        p.forEach((b) => ts(m, aa[u] || {}, b)),
        p.forEach((b) => ts(m, le, b)),
        p.forEach((b) => ts(m, af, b)));
    });
    const g = Array.from(m);
    return (
      g.length === 0 && g.push(Object.create(null)),
      I0.has(a) && c.set(a, g),
      g
    );
  }
  chartOptionScopes() {
    const { options: n, type: a } = this;
    return [n, aa[a] || {}, le.datasets[a] || {}, { type: a }, le, af];
  }
  resolveNamedOptions(n, a, s, r = [""]) {
    const u = { $shared: !0 },
      { resolver: c, subPrefixes: h } = Np(this._resolverCache, n, r);
    let m = c;
    if (D2(c, a)) {
      ((u.$shared = !1), (s = Ci(s) ? s() : s));
      const g = this.createResolver(n, s, h);
      m = Wa(c, s, g);
    }
    for (const g of a) u[g] = m[g];
    return u;
  }
  createResolver(n, a, s = [""], r) {
    const { resolver: u } = Np(this._resolverCache, n, s);
    return kt(a) ? Wa(u, a, void 0, r) : u;
  }
}
function Np(i, n, a) {
  let s = i.get(n);
  s || ((s = new Map()), i.set(n, s));
  const r = a.join();
  let u = s.get(r);
  return (
    u ||
      ((u = {
        resolver: Tf(n, a),
        subPrefixes: a.filter((h) => !h.toLowerCase().includes("hover")),
      }),
      s.set(r, u)),
    u
  );
}
const O2 = (i) => kt(i) && Object.getOwnPropertyNames(i).some((n) => Ci(i[n]));
function D2(i, n) {
  const { isScriptable: a, isIndexable: s } = k0(i);
  for (const r of n) {
    const u = a(r),
      c = s(r),
      h = (c || u) && i[r];
    if ((u && (Ci(h) || O2(h))) || (c && de(h))) return !0;
  }
  return !1;
}
var R2 = "4.5.1";
const z2 = ["top", "bottom", "left", "right", "chartArea"];
function jp(i, n) {
  return i === "top" || i === "bottom" || (z2.indexOf(i) === -1 && n === "x");
}
function kp(i, n) {
  return function (a, s) {
    return a[i] === s[i] ? a[n] - s[n] : a[i] - s[i];
  };
}
function Lp(i) {
  const n = i.chart,
    a = n.options.animation;
  (n.notifyPlugins("afterRender"), Jt(a && a.onComplete, [i], n));
}
function N2(i) {
  const n = i.chart,
    a = n.options.animation;
  Jt(a && a.onProgress, [i], n);
}
function ty(i) {
  return (
    Df() && typeof i == "string"
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const or = {},
  Hp = (i) => {
    const n = ty(i);
    return Object.values(or)
      .filter((a) => a.canvas === n)
      .pop();
  };
function j2(i, n, a) {
  const s = Object.keys(i);
  for (const r of s) {
    const u = +r;
    if (u >= n) {
      const c = i[r];
      (delete i[r], (a > 0 || u > n) && (i[u + a] = c));
    }
  }
}
function k2(i, n, a, s) {
  return !a || i.type === "mouseout" ? null : s ? n : i;
}
let Di = class {
  static defaults = le;
  static instances = or;
  static overrides = aa;
  static registry = wn;
  static version = R2;
  static getChart = Hp;
  static register(...n) {
    (wn.add(...n), Bp());
  }
  static unregister(...n) {
    (wn.remove(...n), Bp());
  }
  constructor(n, a) {
    const s = (this.config = new C2(a)),
      r = ty(n),
      u = Hp(r);
    if (u)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          u.id +
          "' must be destroyed before the canvas with ID '" +
          u.canvas.id +
          "' can be reused.",
      );
    const c = s.createResolver(s.chartOptionScopes(), this.getContext());
    ((this.platform = new (s.platform || IS(r))()),
      this.platform.updateConfig(s));
    const h = this.platform.acquireContext(r, c.aspectRatio),
      m = h && h.canvas,
      g = m && m.height,
      p = m && m.width;
    if (
      ((this.id = H_()),
      (this.ctx = h),
      (this.canvas = m),
      (this.width = p),
      (this.height = g),
      (this._options = c),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new y2()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = a1((b) => this.update(b), c.resizeDelay || 0)),
      (this._dataChanges = []),
      (or[this.id] = this),
      !h || !m)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item",
      );
      return;
    }
    (Zn.listen(this, "complete", Lp),
      Zn.listen(this, "progress", N2),
      this._initialize(),
      this.attached && this.update());
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: n, maintainAspectRatio: a },
      width: s,
      height: r,
      _aspectRatio: u,
    } = this;
    return Ft(n) ? (a && u ? u : r ? s / r : null) : n;
  }
  get data() {
    return this.config.data;
  }
  set data(n) {
    this.config.data = n;
  }
  get options() {
    return this._options;
  }
  set options(n) {
    this.config.options = n;
  }
  get registry() {
    return wn;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : up(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return (sp(this.canvas, this.ctx), this);
  }
  stop() {
    return (Zn.stop(this), this);
  }
  resize(n, a) {
    Zn.running(this)
      ? (this._resizeBeforeDraw = { width: n, height: a })
      : this._resize(n, a);
  }
  _resize(n, a) {
    const s = this.options,
      r = this.canvas,
      u = s.maintainAspectRatio && this.aspectRatio,
      c = this.platform.getMaximumSize(r, n, a, u),
      h = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
      m = this.width ? "resize" : "attach";
    ((this.width = c.width),
      (this.height = c.height),
      (this._aspectRatio = this.aspectRatio),
      up(this, h, !0) &&
        (this.notifyPlugins("resize", { size: c }),
        Jt(s.onResize, [this, c], this),
        this.attached && this._doResize(m) && this.render()));
  }
  ensureScalesHaveIDs() {
    const a = this.options.scales || {};
    qt(a, (s, r) => {
      s.id = r;
    });
  }
  buildOrUpdateScales() {
    const n = this.options,
      a = n.scales,
      s = this.scales,
      r = Object.keys(s).reduce((c, h) => ((c[h] = !1), c), {});
    let u = [];
    (a &&
      (u = u.concat(
        Object.keys(a).map((c) => {
          const h = a[c],
            m = rf(c, h),
            g = m === "r",
            p = m === "x";
          return {
            options: h,
            dposition: g ? "chartArea" : p ? "bottom" : "left",
            dtype: g ? "radialLinear" : p ? "category" : "linear",
          };
        }),
      )),
      qt(u, (c) => {
        const h = c.options,
          m = h.id,
          g = rf(m, h),
          p = Dt(h.type, c.dtype);
        ((h.position === void 0 || jp(h.position, g) !== jp(c.dposition)) &&
          (h.position = c.dposition),
          (r[m] = !0));
        let b = null;
        if (m in s && s[m].type === p) b = s[m];
        else {
          const x = wn.getScale(p);
          ((b = new x({ id: m, type: p, ctx: this.ctx, chart: this })),
            (s[b.id] = b));
        }
        b.init(h, n);
      }),
      qt(r, (c, h) => {
        c || delete s[h];
      }),
      qt(s, (c) => {
        (un.configure(this, c, c.options), un.addBox(this, c));
      }));
  }
  _updateMetasets() {
    const n = this._metasets,
      a = this.data.datasets.length,
      s = n.length;
    if ((n.sort((r, u) => r.index - u.index), s > a)) {
      for (let r = a; r < s; ++r) this._destroyDatasetMeta(r);
      n.splice(a, s - a);
    }
    this._sortedMetasets = n.slice(0).sort(kp("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: n,
      data: { datasets: a },
    } = this;
    (n.length > a.length && delete this._stacks,
      n.forEach((s, r) => {
        a.filter((u) => u === s._dataset).length === 0 &&
          this._destroyDatasetMeta(r);
      }));
  }
  buildOrUpdateControllers() {
    const n = [],
      a = this.data.datasets;
    let s, r;
    for (this._removeUnreferencedMetasets(), s = 0, r = a.length; s < r; s++) {
      const u = a[s];
      let c = this.getDatasetMeta(s);
      const h = u.type || this.config.type;
      if (
        (c.type &&
          c.type !== h &&
          (this._destroyDatasetMeta(s), (c = this.getDatasetMeta(s))),
        (c.type = h),
        (c.indexAxis = u.indexAxis || of(h, this.options)),
        (c.order = u.order || 0),
        (c.index = s),
        (c.label = "" + u.label),
        (c.visible = this.isDatasetVisible(s)),
        c.controller)
      )
        (c.controller.updateIndex(s), c.controller.linkScales());
      else {
        const m = wn.getController(h),
          { datasetElementType: g, dataElementType: p } = le.datasets[h];
        (Object.assign(m, {
          dataElementType: wn.getElement(p),
          datasetElementType: g && wn.getElement(g),
        }),
          (c.controller = new m(this, s)),
          n.push(c.controller));
      }
    }
    return (this._updateMetasets(), n);
  }
  _resetElements() {
    qt(
      this.data.datasets,
      (n, a) => {
        this.getDatasetMeta(a).controller.reset();
      },
      this,
    );
  }
  reset() {
    (this._resetElements(), this.notifyPlugins("reset"));
  }
  update(n) {
    const a = this.config;
    a.update();
    const s = (this._options = a.createResolver(
        a.chartOptionScopes(),
        this.getContext(),
      )),
      r = (this._animationsDisabled = !s.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: n, cancelable: !0 }) === !1)
    )
      return;
    const u = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let c = 0;
    for (let g = 0, p = this.data.datasets.length; g < p; g++) {
      const { controller: b } = this.getDatasetMeta(g),
        x = !r && u.indexOf(b) === -1;
      (b.buildOrUpdateElements(x), (c = Math.max(+b.getMaxOverflow(), c)));
    }
    ((c = this._minPadding = s.layout.autoPadding ? c : 0),
      this._updateLayout(c),
      r ||
        qt(u, (g) => {
          g.reset();
        }),
      this._updateDatasets(n),
      this.notifyPlugins("afterUpdate", { mode: n }),
      this._layers.sort(kp("z", "_idx")));
    const { _active: h, _lastEvent: m } = this;
    (m
      ? this._eventHandler(m, !0)
      : h.length && this._updateHoverStyles(h, h, !0),
      this.render());
  }
  _updateScales() {
    (qt(this.scales, (n) => {
      un.removeBox(this, n);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales());
  }
  _checkEventBindings() {
    const n = this.options,
      a = new Set(Object.keys(this._listeners)),
      s = new Set(n.events);
    (!Jg(a, s) || !!this._responsiveListeners !== n.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: n } = this,
      a = this._getUniformDataChanges() || [];
    for (const { method: s, start: r, count: u } of a) {
      const c = s === "_removeElements" ? -u : u;
      j2(n, r, c);
    }
  }
  _getUniformDataChanges() {
    const n = this._dataChanges;
    if (!n || !n.length) return;
    this._dataChanges = [];
    const a = this.data.datasets.length,
      s = (u) =>
        new Set(
          n
            .filter((c) => c[0] === u)
            .map((c, h) => h + "," + c.splice(1).join(",")),
        ),
      r = s(0);
    for (let u = 1; u < a; u++) if (!Jg(r, s(u))) return;
    return Array.from(r)
      .map((u) => u.split(","))
      .map((u) => ({ method: u[1], start: +u[2], count: +u[3] }));
  }
  _updateLayout(n) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    un.update(this, this.width, this.height, n);
    const a = this.chartArea,
      s = a.width <= 0 || a.height <= 0;
    ((this._layers = []),
      qt(
        this.boxes,
        (r) => {
          (s && r.position === "chartArea") ||
            (r.configure && r.configure(), this._layers.push(...r._layers()));
        },
        this,
      ),
      this._layers.forEach((r, u) => {
        r._idx = u;
      }),
      this.notifyPlugins("afterLayout"));
  }
  _updateDatasets(n) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: n,
        cancelable: !0,
      }) !== !1
    ) {
      for (let a = 0, s = this.data.datasets.length; a < s; ++a)
        this.getDatasetMeta(a).controller.configure();
      for (let a = 0, s = this.data.datasets.length; a < s; ++a)
        this._updateDataset(a, Ci(n) ? n({ datasetIndex: a }) : n);
      this.notifyPlugins("afterDatasetsUpdate", { mode: n });
    }
  }
  _updateDataset(n, a) {
    const s = this.getDatasetMeta(n),
      r = { meta: s, index: n, mode: a, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", r) !== !1 &&
      (s.controller._update(a),
      (r.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", r));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (Zn.has(this)
        ? this.attached && !Zn.running(this) && Zn.start(this)
        : (this.draw(), Lp({ chart: this })));
  }
  draw() {
    let n;
    if (this._resizeBeforeDraw) {
      const { width: s, height: r } = this._resizeBeforeDraw;
      ((this._resizeBeforeDraw = null), this._resize(s, r));
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const a = this._layers;
    for (n = 0; n < a.length && a[n].z <= 0; ++n) a[n].draw(this.chartArea);
    for (this._drawDatasets(); n < a.length; ++n) a[n].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(n) {
    const a = this._sortedMetasets,
      s = [];
    let r, u;
    for (r = 0, u = a.length; r < u; ++r) {
      const c = a[r];
      (!n || c.visible) && s.push(c);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const n = this.getSortedVisibleDatasetMetas();
    for (let a = n.length - 1; a >= 0; --a) this._drawDataset(n[a]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(n) {
    const a = this.ctx,
      s = { meta: n, index: n.index, cancelable: !0 },
      r = fS(this, n);
    this.notifyPlugins("beforeDatasetDraw", s) !== !1 &&
      (r && wf(a, r),
      n.controller.draw(),
      r && Af(a),
      (s.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", s));
  }
  isPointInArea(n) {
    return gs(n, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(n, a, s, r) {
    const u = zS.modes[a];
    return typeof u == "function" ? u(this, n, s, r) : [];
  }
  getDatasetMeta(n) {
    const a = this.data.datasets[n],
      s = this._metasets;
    let r = s.filter((u) => u && u._dataset === a).pop();
    return (
      r ||
        ((r = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (a && a.order) || 0,
          index: n,
          _dataset: a,
          _parsed: [],
          _sorted: !1,
        }),
        s.push(r)),
      r
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = sa(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(n) {
    const a = this.data.datasets[n];
    if (!a) return !1;
    const s = this.getDatasetMeta(n);
    return typeof s.hidden == "boolean" ? !s.hidden : !a.hidden;
  }
  setDatasetVisibility(n, a) {
    const s = this.getDatasetMeta(n);
    s.hidden = !a;
  }
  toggleDataVisibility(n) {
    this._hiddenIndices[n] = !this._hiddenIndices[n];
  }
  getDataVisibility(n) {
    return !this._hiddenIndices[n];
  }
  _updateVisibility(n, a, s) {
    const r = s ? "show" : "hide",
      u = this.getDatasetMeta(n),
      c = u.controller._resolveAnimations(void 0, r);
    dr(a)
      ? ((u.data[a].hidden = !s), this.update())
      : (this.setDatasetVisibility(n, s),
        c.update(u, { visible: s }),
        this.update((h) => (h.datasetIndex === n ? r : void 0)));
  }
  hide(n, a) {
    this._updateVisibility(n, a, !1);
  }
  show(n, a) {
    this._updateVisibility(n, a, !0);
  }
  _destroyDatasetMeta(n) {
    const a = this._metasets[n];
    (a && a.controller && a.controller._destroy(), delete this._metasets[n]);
  }
  _stop() {
    let n, a;
    for (
      this.stop(), Zn.remove(this), n = 0, a = this.data.datasets.length;
      n < a;
      ++n
    )
      this._destroyDatasetMeta(n);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: n, ctx: a } = this;
    (this._stop(),
      this.config.clearCache(),
      n &&
        (this.unbindEvents(),
        sp(n, a),
        this.platform.releaseContext(a),
        (this.canvas = null),
        (this.ctx = null)),
      delete or[this.id],
      this.notifyPlugins("afterDestroy"));
  }
  toBase64Image(...n) {
    return this.canvas.toDataURL(...n);
  }
  bindEvents() {
    (this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0));
  }
  bindUserEvents() {
    const n = this._listeners,
      a = this.platform,
      s = (u, c) => {
        (a.addEventListener(this, u, c), (n[u] = c));
      },
      r = (u, c, h) => {
        ((u.offsetX = c), (u.offsetY = h), this._eventHandler(u));
      };
    qt(this.options.events, (u) => s(u, r));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const n = this._responsiveListeners,
      a = this.platform,
      s = (m, g) => {
        (a.addEventListener(this, m, g), (n[m] = g));
      },
      r = (m, g) => {
        n[m] && (a.removeEventListener(this, m, g), delete n[m]);
      },
      u = (m, g) => {
        this.canvas && this.resize(m, g);
      };
    let c;
    const h = () => {
      (r("attach", h),
        (this.attached = !0),
        this.resize(),
        s("resize", u),
        s("detach", c));
    };
    ((c = () => {
      ((this.attached = !1),
        r("resize", u),
        this._stop(),
        this._resize(0, 0),
        s("attach", h));
    }),
      a.isAttached(this.canvas) ? h() : c());
  }
  unbindEvents() {
    (qt(this._listeners, (n, a) => {
      this.platform.removeEventListener(this, a, n);
    }),
      (this._listeners = {}),
      qt(this._responsiveListeners, (n, a) => {
        this.platform.removeEventListener(this, a, n);
      }),
      (this._responsiveListeners = void 0));
  }
  updateHoverStyle(n, a, s) {
    const r = s ? "set" : "remove";
    let u, c, h, m;
    for (
      a === "dataset" &&
        ((u = this.getDatasetMeta(n[0].datasetIndex)),
        u.controller["_" + r + "DatasetHoverStyle"]()),
        h = 0,
        m = n.length;
      h < m;
      ++h
    ) {
      c = n[h];
      const g = c && this.getDatasetMeta(c.datasetIndex).controller;
      g && g[r + "HoverStyle"](c.element, c.datasetIndex, c.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(n) {
    const a = this._active || [],
      s = n.map(({ datasetIndex: u, index: c }) => {
        const h = this.getDatasetMeta(u);
        if (!h) throw new Error("No dataset found at index " + u);
        return { datasetIndex: u, element: h.data[c], index: c };
      });
    !cr(s, a) &&
      ((this._active = s),
      (this._lastEvent = null),
      this._updateHoverStyles(s, a));
  }
  notifyPlugins(n, a, s) {
    return this._plugins.notify(this, n, a, s);
  }
  isPluginEnabled(n) {
    return this._plugins._cache.filter((a) => a.plugin.id === n).length === 1;
  }
  _updateHoverStyles(n, a, s) {
    const r = this.options.hover,
      u = (m, g) =>
        m.filter(
          (p) =>
            !g.some(
              (b) => p.datasetIndex === b.datasetIndex && p.index === b.index,
            ),
        ),
      c = u(a, n),
      h = s ? n : u(n, a);
    (c.length && this.updateHoverStyle(c, r.mode, !1),
      h.length && r.mode && this.updateHoverStyle(h, r.mode, !0));
  }
  _eventHandler(n, a) {
    const s = {
        event: n,
        replay: a,
        cancelable: !0,
        inChartArea: this.isPointInArea(n),
      },
      r = (c) =>
        (c.options.events || this.options.events).includes(n.native.type);
    if (this.notifyPlugins("beforeEvent", s, r) === !1) return;
    const u = this._handleEvent(n, a, s.inChartArea);
    return (
      (s.cancelable = !1),
      this.notifyPlugins("afterEvent", s, r),
      (u || s.changed) && this.render(),
      this
    );
  }
  _handleEvent(n, a, s) {
    const { _active: r = [], options: u } = this,
      c = a,
      h = this._getActiveElements(n, r, s, c),
      m = X_(n),
      g = k2(n, this._lastEvent, s, m);
    s &&
      ((this._lastEvent = null),
      Jt(u.onHover, [n, h, this], this),
      m && Jt(u.onClick, [n, h, this], this));
    const p = !cr(h, r);
    return (
      (p || a) && ((this._active = h), this._updateHoverStyles(h, r, a)),
      (this._lastEvent = g),
      p
    );
  }
  _getActiveElements(n, a, s, r) {
    if (n.type === "mouseout") return [];
    if (!s) return a;
    const u = this.options.hover;
    return this.getElementsAtEventForMode(n, u.mode, u, r);
  }
};
function Bp() {
  return qt(Di.instances, (i) => i._plugins.invalidate());
}
function ey(i, n, a = n) {
  ((i.lineCap = Dt(a.borderCapStyle, n.borderCapStyle)),
    i.setLineDash(Dt(a.borderDash, n.borderDash)),
    (i.lineDashOffset = Dt(a.borderDashOffset, n.borderDashOffset)),
    (i.lineJoin = Dt(a.borderJoinStyle, n.borderJoinStyle)),
    (i.lineWidth = Dt(a.borderWidth, n.borderWidth)),
    (i.strokeStyle = Dt(a.borderColor, n.borderColor)));
}
function L2(i, n, a) {
  i.lineTo(a.x, a.y);
}
function H2(i) {
  return i.stepped
    ? b1
    : i.tension || i.cubicInterpolationMode === "monotone"
      ? v1
      : L2;
}
function ny(i, n, a = {}) {
  const s = i.length,
    { start: r = 0, end: u = s - 1 } = a,
    { start: c, end: h } = n,
    m = Math.max(r, c),
    g = Math.min(u, h),
    p = (r < c && u < c) || (r > h && u > h);
  return {
    count: s,
    start: m,
    loop: n.loop,
    ilen: g < m && !p ? s + g - m : g - m,
  };
}
function B2(i, n, a, s) {
  const { points: r, options: u } = n,
    { count: c, start: h, loop: m, ilen: g } = ny(r, a, s),
    p = H2(u);
  let { move: b = !0, reverse: x } = s || {},
    S,
    T,
    M;
  for (S = 0; S <= g; ++S)
    ((T = r[(h + (x ? g - S : S)) % c]),
      !T.skip &&
        (b ? (i.moveTo(T.x, T.y), (b = !1)) : p(i, M, T, x, u.stepped),
        (M = T)));
  return (m && ((T = r[(h + (x ? g : 0)) % c]), p(i, M, T, x, u.stepped)), !!m);
}
function U2(i, n, a, s) {
  const r = n.points,
    { count: u, start: c, ilen: h } = ny(r, a, s),
    { move: m = !0, reverse: g } = s || {};
  let p = 0,
    b = 0,
    x,
    S,
    T,
    M,
    w,
    N;
  const X = (W) => (c + (g ? h - W : W)) % u,
    J = () => {
      M !== w && (i.lineTo(p, w), i.lineTo(p, M), i.lineTo(p, N));
    };
  for (m && ((S = r[X(0)]), i.moveTo(S.x, S.y)), x = 0; x <= h; ++x) {
    if (((S = r[X(x)]), S.skip)) continue;
    const W = S.x,
      G = S.y,
      et = W | 0;
    (et === T
      ? (G < M ? (M = G) : G > w && (w = G), (p = (b * p + W) / ++b))
      : (J(), i.lineTo(W, G), (T = et), (b = 0), (M = w = G)),
      (N = G));
  }
  J();
}
function uf(i) {
  const n = i.options,
    a = n.borderDash && n.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !n.tension &&
    n.cubicInterpolationMode !== "monotone" &&
    !n.stepped &&
    !a
    ? U2
    : B2;
}
function q2(i) {
  return i.stepped
    ? $1
    : i.tension || i.cubicInterpolationMode === "monotone"
      ? I1
      : ta;
}
function Y2(i, n, a, s) {
  let r = n._path;
  (r || ((r = n._path = new Path2D()), n.path(r, a, s) && r.closePath()),
    ey(i, n.options),
    i.stroke(r));
}
function V2(i, n, a, s) {
  const { segments: r, options: u } = n,
    c = uf(n);
  for (const h of r)
    (ey(i, u, h.style),
      i.beginPath(),
      c(i, n, h, { start: a, end: a + s - 1 }) && i.closePath(),
      i.stroke());
}
const X2 = typeof Path2D == "function";
function G2(i, n, a, s) {
  X2 && !n.options.segment ? Y2(i, n, a, s) : V2(i, n, a, s);
}
class _s extends oa {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (n) => n !== "borderDash" && n !== "fill",
  };
  constructor(n) {
    (super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      n && Object.assign(this, n));
  }
  updateControlPoints(n, a) {
    const s = this.options;
    if (
      (s.tension || s.cubicInterpolationMode === "monotone") &&
      !s.stepped &&
      !this._pointsUpdated
    ) {
      const r = s.spanGaps ? this._loop : this._fullLoop;
      (G1(this._points, s, n, r, a), (this._pointsUpdated = !0));
    }
  }
  set points(n) {
    ((this._points = n),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1));
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = oS(this, this.options.segment));
  }
  first() {
    const n = this.segments,
      a = this.points;
    return n.length && a[n[0].start];
  }
  last() {
    const n = this.segments,
      a = this.points,
      s = n.length;
    return s && a[n[s - 1].end];
  }
  interpolate(n, a) {
    const s = this.options,
      r = n[a],
      u = this.points,
      c = aS(this, { property: a, start: r, end: r });
    if (!c.length) return;
    const h = [],
      m = q2(s);
    let g, p;
    for (g = 0, p = c.length; g < p; ++g) {
      const { start: b, end: x } = c[g],
        S = u[b],
        T = u[x];
      if (S === T) {
        h.push(S);
        continue;
      }
      const M = Math.abs((r - S[a]) / (T[a] - S[a])),
        w = m(S, T, M, s.stepped);
      ((w[a] = n[a]), h.push(w));
    }
    return h.length === 1 ? h[0] : h;
  }
  pathSegment(n, a, s) {
    return uf(this)(n, this, a, s);
  }
  path(n, a, s) {
    const r = this.segments,
      u = uf(this);
    let c = this._loop;
    ((a = a || 0), (s = s || this.points.length - a));
    for (const h of r) c &= u(n, this, h, { start: a, end: a + s - 1 });
    return !!c;
  }
  draw(n, a, s, r) {
    const u = this.options || {};
    ((this.points || []).length &&
      u.borderWidth &&
      (n.save(), G2(n, this, s, r), n.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0)));
  }
}
function Up(i, n, a, s) {
  const r = i.options,
    { [a]: u } = i.getProps([a], s);
  return Math.abs(n - u) < r.radius + r.hitRadius;
}
class Ss extends oa {
  static id = "point";
  parsed;
  skip;
  stop;
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0,
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor",
  };
  constructor(n) {
    (super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n));
  }
  inRange(n, a, s) {
    const r = this.options,
      { x: u, y: c } = this.getProps(["x", "y"], s);
    return (
      Math.pow(n - u, 2) + Math.pow(a - c, 2) <
      Math.pow(r.hitRadius + r.radius, 2)
    );
  }
  inXRange(n, a) {
    return Up(this, n, "x", a);
  }
  inYRange(n, a) {
    return Up(this, n, "y", a);
  }
  getCenterPoint(n) {
    const { x: a, y: s } = this.getProps(["x", "y"], n);
    return { x: a, y: s };
  }
  size(n) {
    n = n || this.options || {};
    let a = n.radius || 0;
    a = Math.max(a, (a && n.hoverRadius) || 0);
    const s = (a && n.borderWidth) || 0;
    return (a + s) * 2;
  }
  draw(n, a) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !gs(this, a, this.size(s) / 2) ||
      ((n.strokeStyle = s.borderColor),
      (n.lineWidth = s.borderWidth),
      (n.fillStyle = s.backgroundColor),
      lf(n, s, this.x, this.y));
  }
  getRange() {
    const n = this.options || {};
    return n.radius + n.hitRadius;
  }
}
const qp = (i, n) => {
    let { boxHeight: a = n, boxWidth: s = n } = i;
    return (
      i.usePointStyle &&
        ((a = Math.min(a, n)), (s = i.pointStyleWidth || Math.min(s, n))),
      { boxWidth: s, boxHeight: a, itemHeight: Math.max(n, a) }
    );
  },
  Q2 = (i, n) =>
    i !== null &&
    n !== null &&
    i.datasetIndex === n.datasetIndex &&
    i.index === n.index;
class Yp extends oa {
  constructor(n) {
    (super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = n.chart),
      (this.options = n.options),
      (this.ctx = n.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(n, a, s) {
    ((this.maxWidth = n),
      (this.maxHeight = a),
      (this._margins = s),
      this.setDimensions(),
      this.buildLabels(),
      this.fit());
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const n = this.options.labels || {};
    let a = Jt(n.generateLabels, [this.chart], this) || [];
    (n.filter && (a = a.filter((s) => n.filter(s, this.chart.data))),
      n.sort && (a = a.sort((s, r) => n.sort(s, r, this.chart.data))),
      this.options.reverse && a.reverse(),
      (this.legendItems = a));
  }
  fit() {
    const { options: n, ctx: a } = this;
    if (!n.display) {
      this.width = this.height = 0;
      return;
    }
    const s = n.labels,
      r = we(s.font),
      u = r.size,
      c = this._computeTitleHeight(),
      { boxWidth: h, itemHeight: m } = qp(s, u);
    let g, p;
    ((a.font = r.string),
      this.isHorizontal()
        ? ((g = this.maxWidth), (p = this._fitRows(c, u, h, m) + 10))
        : ((p = this.maxHeight), (g = this._fitCols(c, r, h, m) + 10)),
      (this.width = Math.min(g, n.maxWidth || this.maxWidth)),
      (this.height = Math.min(p, n.maxHeight || this.maxHeight)));
  }
  _fitRows(n, a, s, r) {
    const {
        ctx: u,
        maxWidth: c,
        options: {
          labels: { padding: h },
        },
      } = this,
      m = (this.legendHitBoxes = []),
      g = (this.lineWidths = [0]),
      p = r + h;
    let b = n;
    ((u.textAlign = "left"), (u.textBaseline = "middle"));
    let x = -1,
      S = -p;
    return (
      this.legendItems.forEach((T, M) => {
        const w = s + a / 2 + u.measureText(T.text).width;
        ((M === 0 || g[g.length - 1] + w + 2 * h > c) &&
          ((b += p), (g[g.length - (M > 0 ? 0 : 1)] = 0), (S += p), x++),
          (m[M] = { left: 0, top: S, row: x, width: w, height: r }),
          (g[g.length - 1] += w + h));
      }),
      b
    );
  }
  _fitCols(n, a, s, r) {
    const {
        ctx: u,
        maxHeight: c,
        options: {
          labels: { padding: h },
        },
      } = this,
      m = (this.legendHitBoxes = []),
      g = (this.columnSizes = []),
      p = c - n;
    let b = h,
      x = 0,
      S = 0,
      T = 0,
      M = 0;
    return (
      this.legendItems.forEach((w, N) => {
        const { itemWidth: X, itemHeight: J } = F2(s, a, u, w, r);
        (N > 0 &&
          S + J + 2 * h > p &&
          ((b += x + h),
          g.push({ width: x, height: S }),
          (T += x + h),
          M++,
          (x = S = 0)),
          (m[N] = { left: T, top: S, col: M, width: X, height: J }),
          (x = Math.max(x, X)),
          (S += J + h));
      }),
      (b += x),
      g.push({ width: x, height: S }),
      b
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const n = this._computeTitleHeight(),
      {
        legendHitBoxes: a,
        options: {
          align: s,
          labels: { padding: r },
          rtl: u,
        },
      } = this,
      c = Za(u, this.left, this.width);
    if (this.isHorizontal()) {
      let h = 0,
        m = Ee(s, this.left + r, this.right - this.lineWidths[h]);
      for (const g of a)
        (h !== g.row &&
          ((h = g.row),
          (m = Ee(s, this.left + r, this.right - this.lineWidths[h]))),
          (g.top += this.top + n + r),
          (g.left = c.leftForLtr(c.x(m), g.width)),
          (m += g.width + r));
    } else {
      let h = 0,
        m = Ee(s, this.top + n + r, this.bottom - this.columnSizes[h].height);
      for (const g of a)
        (g.col !== h &&
          ((h = g.col),
          (m = Ee(
            s,
            this.top + n + r,
            this.bottom - this.columnSizes[h].height,
          ))),
          (g.top = m),
          (g.left += this.left + r),
          (g.left = c.leftForLtr(c.x(g.left), g.width)),
          (m += g.height + r));
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const n = this.ctx;
      (wf(n, this), this._draw(), Af(n));
    }
  }
  _draw() {
    const { options: n, columnSizes: a, lineWidths: s, ctx: r } = this,
      { align: u, labels: c } = n,
      h = le.color,
      m = Za(n.rtl, this.left, this.width),
      g = we(c.font),
      { padding: p } = c,
      b = g.size,
      x = b / 2;
    let S;
    (this.drawTitle(),
      (r.textAlign = m.textAlign("left")),
      (r.textBaseline = "middle"),
      (r.lineWidth = 0.5),
      (r.font = g.string));
    const { boxWidth: T, boxHeight: M, itemHeight: w } = qp(c, b),
      N = function (et, z, _) {
        if (isNaN(T) || T <= 0 || isNaN(M) || M < 0) return;
        r.save();
        const A = Dt(_.lineWidth, 1);
        if (
          ((r.fillStyle = Dt(_.fillStyle, h)),
          (r.lineCap = Dt(_.lineCap, "butt")),
          (r.lineDashOffset = Dt(_.lineDashOffset, 0)),
          (r.lineJoin = Dt(_.lineJoin, "miter")),
          (r.lineWidth = A),
          (r.strokeStyle = Dt(_.strokeStyle, h)),
          r.setLineDash(Dt(_.lineDash, [])),
          c.usePointStyle)
        ) {
          const j = {
              radius: (M * Math.SQRT2) / 2,
              pointStyle: _.pointStyle,
              rotation: _.rotation,
              borderWidth: A,
            },
            V = m.xPlus(et, T / 2),
            K = z + x;
          N0(r, j, V, K, c.pointStyleWidth && T);
        } else {
          const j = z + Math.max((b - M) / 2, 0),
            V = m.leftForLtr(et, T),
            K = cs(_.borderRadius);
          (r.beginPath(),
            Object.values(K).some((at) => at !== 0)
              ? sf(r, { x: V, y: j, w: T, h: M, radius: K })
              : r.rect(V, j, T, M),
            r.fill(),
            A !== 0 && r.stroke());
        }
        r.restore();
      },
      X = function (et, z, _) {
        ps(r, _.text, et, z + w / 2, g, {
          strikethrough: _.hidden,
          textAlign: m.textAlign(_.textAlign),
        });
      },
      J = this.isHorizontal(),
      W = this._computeTitleHeight();
    (J
      ? (S = {
          x: Ee(u, this.left + p, this.right - s[0]),
          y: this.top + p + W,
          line: 0,
        })
      : (S = {
          x: this.left + p,
          y: Ee(u, this.top + W + p, this.bottom - a[0].height),
          line: 0,
        }),
      q0(this.ctx, n.textDirection));
    const G = w + p;
    (this.legendItems.forEach((et, z) => {
      ((r.strokeStyle = et.fontColor), (r.fillStyle = et.fontColor));
      const _ = r.measureText(et.text).width,
        A = m.textAlign(et.textAlign || (et.textAlign = c.textAlign)),
        j = T + x + _;
      let V = S.x,
        K = S.y;
      (m.setWidth(this.width),
        J
          ? z > 0 &&
            V + j + p > this.right &&
            ((K = S.y += G),
            S.line++,
            (V = S.x = Ee(u, this.left + p, this.right - s[S.line])))
          : z > 0 &&
            K + G > this.bottom &&
            ((V = S.x = V + a[S.line].width + p),
            S.line++,
            (K = S.y =
              Ee(u, this.top + W + p, this.bottom - a[S.line].height))));
      const at = m.x(V);
      if (
        (N(at, K, et),
        (V = l1(A, V + T + x, J ? V + j : this.right, n.rtl)),
        X(m.x(V), K, et),
        J)
      )
        S.x += j + p;
      else if (typeof et.text != "string") {
        const tt = g.lineHeight;
        S.y += iy(et, tt) + p;
      } else S.y += G;
    }),
      Y0(this.ctx, n.textDirection));
  }
  drawTitle() {
    const n = this.options,
      a = n.title,
      s = we(a.font),
      r = fn(a.padding);
    if (!a.display) return;
    const u = Za(n.rtl, this.left, this.width),
      c = this.ctx,
      h = a.position,
      m = s.size / 2,
      g = r.top + m;
    let p,
      b = this.left,
      x = this.width;
    if (this.isHorizontal())
      ((x = Math.max(...this.lineWidths)),
        (p = this.top + g),
        (b = Ee(n.align, b, this.right - x)));
    else {
      const T = this.columnSizes.reduce((M, w) => Math.max(M, w.height), 0);
      p =
        g +
        Ee(
          n.align,
          this.top,
          this.bottom - T - n.labels.padding - this._computeTitleHeight(),
        );
    }
    const S = Ee(h, b, b + x);
    ((c.textAlign = u.textAlign(Mf(h))),
      (c.textBaseline = "middle"),
      (c.strokeStyle = a.color),
      (c.fillStyle = a.color),
      (c.font = s.string),
      ps(c, a.text, S, p, s));
  }
  _computeTitleHeight() {
    const n = this.options.title,
      a = we(n.font),
      s = fn(n.padding);
    return n.display ? a.lineHeight + s.height : 0;
  }
  _getLegendItemAt(n, a) {
    let s, r, u;
    if (ns(n, this.left, this.right) && ns(a, this.top, this.bottom)) {
      for (u = this.legendHitBoxes, s = 0; s < u.length; ++s)
        if (
          ((r = u[s]),
          ns(n, r.left, r.left + r.width) && ns(a, r.top, r.top + r.height))
        )
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(n) {
    const a = this.options;
    if (!W2(n.type, a)) return;
    const s = this._getLegendItemAt(n.x, n.y);
    if (n.type === "mousemove" || n.type === "mouseout") {
      const r = this._hoveredItem,
        u = Q2(r, s);
      (r && !u && Jt(a.onLeave, [n, r, this], this),
        (this._hoveredItem = s),
        s && !u && Jt(a.onHover, [n, s, this], this));
    } else s && Jt(a.onClick, [n, s, this], this);
  }
}
function F2(i, n, a, s, r) {
  const u = Z2(s, i, n, a),
    c = K2(r, s, n.lineHeight);
  return { itemWidth: u, itemHeight: c };
}
function Z2(i, n, a, s) {
  let r = i.text;
  return (
    r &&
      typeof r != "string" &&
      (r = r.reduce((u, c) => (u.length > c.length ? u : c))),
    n + a.size / 2 + s.measureText(r).width
  );
}
function K2(i, n, a) {
  let s = i;
  return (typeof n.text != "string" && (s = iy(n, a)), s);
}
function iy(i, n) {
  const a = i.text ? i.text.length : 0;
  return n * a;
}
function W2(i, n) {
  return !!(
    ((i === "mousemove" || i === "mouseout") && (n.onHover || n.onLeave)) ||
    (n.onClick && (i === "click" || i === "mouseup"))
  );
}
var Ms = {
  id: "legend",
  _element: Yp,
  start(i, n, a) {
    const s = (i.legend = new Yp({ ctx: i.ctx, options: a, chart: i }));
    (un.configure(i, s, a), un.addBox(i, s));
  },
  stop(i) {
    (un.removeBox(i, i.legend), delete i.legend);
  },
  beforeUpdate(i, n, a) {
    const s = i.legend;
    (un.configure(i, s, a), (s.options = a));
  },
  afterUpdate(i) {
    const n = i.legend;
    (n.buildLabels(), n.adjustHitBoxes());
  },
  afterEvent(i, n) {
    n.replay || i.legend.handleEvent(n.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, n, a) {
      const s = n.datasetIndex,
        r = a.chart;
      r.isDatasetVisible(s)
        ? (r.hide(s), (n.hidden = !0))
        : (r.show(s), (n.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const n = i.data.datasets,
          {
            labels: {
              usePointStyle: a,
              pointStyle: s,
              textAlign: r,
              color: u,
              useBorderRadius: c,
              borderRadius: h,
            },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((m) => {
          const g = m.controller.getStyle(a ? 0 : void 0),
            p = fn(g.borderWidth);
          return {
            text: n[m.index].label,
            fillStyle: g.backgroundColor,
            fontColor: u,
            hidden: !m.visible,
            lineCap: g.borderCapStyle,
            lineDash: g.borderDash,
            lineDashOffset: g.borderDashOffset,
            lineJoin: g.borderJoinStyle,
            lineWidth: (p.width + p.height) / 4,
            strokeStyle: g.borderColor,
            pointStyle: s || g.pointStyle,
            rotation: g.rotation,
            textAlign: r || g.textAlign,
            borderRadius: c && (h || g.borderRadius),
            datasetIndex: m.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith("on"),
    labels: {
      _scriptable: (i) => !["generateLabels", "filter", "sort"].includes(i),
    },
  },
};
class ay extends oa {
  constructor(n) {
    (super(),
      (this.chart = n.chart),
      (this.options = n.options),
      (this.ctx = n.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(n, a) {
    const s = this.options;
    if (((this.left = 0), (this.top = 0), !s.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    ((this.width = this.right = n), (this.height = this.bottom = a));
    const r = de(s.text) ? s.text.length : 1;
    this._padding = fn(s.padding);
    const u = r * we(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = u) : (this.width = u);
  }
  isHorizontal() {
    const n = this.options.position;
    return n === "top" || n === "bottom";
  }
  _drawArgs(n) {
    const { top: a, left: s, bottom: r, right: u, options: c } = this,
      h = c.align;
    let m = 0,
      g,
      p,
      b;
    return (
      this.isHorizontal()
        ? ((p = Ee(h, s, u)), (b = a + n), (g = u - s))
        : (c.position === "left"
            ? ((p = s + n), (b = Ee(h, r, a)), (m = me * -0.5))
            : ((p = u - n), (b = Ee(h, a, r)), (m = me * 0.5)),
          (g = r - a)),
      { titleX: p, titleY: b, maxWidth: g, rotation: m }
    );
  }
  draw() {
    const n = this.ctx,
      a = this.options;
    if (!a.display) return;
    const s = we(a.font),
      u = s.lineHeight / 2 + this._padding.top,
      { titleX: c, titleY: h, maxWidth: m, rotation: g } = this._drawArgs(u);
    ps(n, a.text, 0, 0, s, {
      color: a.color,
      maxWidth: m,
      rotation: g,
      textAlign: Mf(a.align),
      textBaseline: "middle",
      translation: [c, h],
    });
  }
}
function J2(i, n) {
  const a = new ay({ ctx: i.ctx, options: n, chart: i });
  (un.configure(i, a, n), un.addBox(i, a), (i.titleBlock = a));
}
var P2 = {
  id: "title",
  _element: ay,
  start(i, n, a) {
    J2(i, a);
  },
  stop(i) {
    const n = i.titleBlock;
    (un.removeBox(i, n), delete i.titleBlock);
  },
  beforeUpdate(i, n, a) {
    const s = i.titleBlock;
    (un.configure(i, s, a), (s.options = a));
  },
  defaults: {
    align: "center",
    display: !1,
    font: { weight: "bold" },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3,
  },
  defaultRoutes: { color: "color" },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const as = {
  average(i) {
    if (!i.length) return !1;
    let n,
      a,
      s = new Set(),
      r = 0,
      u = 0;
    for (n = 0, a = i.length; n < a; ++n) {
      const h = i[n].element;
      if (h && h.hasValue()) {
        const m = h.tooltipPosition();
        (s.add(m.x), (r += m.y), ++u);
      }
    }
    return u === 0 || s.size === 0
      ? !1
      : { x: [...s].reduce((h, m) => h + m) / s.size, y: r / u };
  },
  nearest(i, n) {
    if (!i.length) return !1;
    let a = n.x,
      s = n.y,
      r = Number.POSITIVE_INFINITY,
      u,
      c,
      h;
    for (u = 0, c = i.length; u < c; ++u) {
      const m = i[u].element;
      if (m && m.hasValue()) {
        const g = m.getCenterPoint(),
          p = nf(n, g);
        p < r && ((r = p), (h = m));
      }
    }
    if (h) {
      const m = h.tooltipPosition();
      ((a = m.x), (s = m.y));
    }
    return { x: a, y: s };
  },
};
function En(i, n) {
  return (n && (de(n) ? Array.prototype.push.apply(i, n) : i.push(n)), i);
}
function Kn(i) {
  return (typeof i == "string" || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function $2(i, n) {
  const { element: a, datasetIndex: s, index: r } = n,
    u = i.getDatasetMeta(s).controller,
    { label: c, value: h } = u.getLabelAndValue(r);
  return {
    chart: i,
    label: c,
    parsed: u.getParsed(r),
    raw: i.data.datasets[s].data[r],
    formattedValue: h,
    dataset: u.getDataset(),
    dataIndex: r,
    datasetIndex: s,
    element: a,
  };
}
function Vp(i, n) {
  const a = i.chart.ctx,
    { body: s, footer: r, title: u } = i,
    { boxWidth: c, boxHeight: h } = n,
    m = we(n.bodyFont),
    g = we(n.titleFont),
    p = we(n.footerFont),
    b = u.length,
    x = r.length,
    S = s.length,
    T = fn(n.padding);
  let M = T.height,
    w = 0,
    N = s.reduce(
      (W, G) => W + G.before.length + G.lines.length + G.after.length,
      0,
    );
  if (
    ((N += i.beforeBody.length + i.afterBody.length),
    b &&
      (M += b * g.lineHeight + (b - 1) * n.titleSpacing + n.titleMarginBottom),
    N)
  ) {
    const W = n.displayColors ? Math.max(h, m.lineHeight) : m.lineHeight;
    M += S * W + (N - S) * m.lineHeight + (N - 1) * n.bodySpacing;
  }
  x && (M += n.footerMarginTop + x * p.lineHeight + (x - 1) * n.footerSpacing);
  let X = 0;
  const J = function (W) {
    w = Math.max(w, a.measureText(W).width + X);
  };
  return (
    a.save(),
    (a.font = g.string),
    qt(i.title, J),
    (a.font = m.string),
    qt(i.beforeBody.concat(i.afterBody), J),
    (X = n.displayColors ? c + 2 + n.boxPadding : 0),
    qt(s, (W) => {
      (qt(W.before, J), qt(W.lines, J), qt(W.after, J));
    }),
    (X = 0),
    (a.font = p.string),
    qt(i.footer, J),
    a.restore(),
    (w += T.width),
    { width: w, height: M }
  );
}
function I2(i, n) {
  const { y: a, height: s } = n;
  return a < s / 2 ? "top" : a > i.height - s / 2 ? "bottom" : "center";
}
function tM(i, n, a, s) {
  const { x: r, width: u } = s,
    c = a.caretSize + a.caretPadding;
  if ((i === "left" && r + u + c > n.width) || (i === "right" && r - u - c < 0))
    return !0;
}
function eM(i, n, a, s) {
  const { x: r, width: u } = a,
    {
      width: c,
      chartArea: { left: h, right: m },
    } = i;
  let g = "center";
  return (
    s === "center"
      ? (g = r <= (h + m) / 2 ? "left" : "right")
      : r <= u / 2
        ? (g = "left")
        : r >= c - u / 2 && (g = "right"),
    tM(g, i, n, a) && (g = "center"),
    g
  );
}
function Xp(i, n, a) {
  const s = a.yAlign || n.yAlign || I2(i, a);
  return { xAlign: a.xAlign || n.xAlign || eM(i, n, a, s), yAlign: s };
}
function nM(i, n) {
  let { x: a, width: s } = i;
  return (n === "right" ? (a -= s) : n === "center" && (a -= s / 2), a);
}
function iM(i, n, a) {
  let { y: s, height: r } = i;
  return (
    n === "top" ? (s += a) : n === "bottom" ? (s -= r + a) : (s -= r / 2),
    s
  );
}
function Gp(i, n, a, s) {
  const { caretSize: r, caretPadding: u, cornerRadius: c } = i,
    { xAlign: h, yAlign: m } = a,
    g = r + u,
    { topLeft: p, topRight: b, bottomLeft: x, bottomRight: S } = cs(c);
  let T = nM(n, h);
  const M = iM(n, m, g);
  return (
    m === "center"
      ? h === "left"
        ? (T += g)
        : h === "right" && (T -= g)
      : h === "left"
        ? (T -= Math.max(p, x) + r)
        : h === "right" && (T += Math.max(b, S) + r),
    { x: rn(T, 0, s.width - n.width), y: rn(M, 0, s.height - n.height) }
  );
}
function nr(i, n, a) {
  const s = fn(a.padding);
  return n === "center"
    ? i.x + i.width / 2
    : n === "right"
      ? i.x + i.width - s.right
      : i.x + s.left;
}
function Qp(i) {
  return En([], Kn(i));
}
function aM(i, n, a) {
  return sa(i, { tooltip: n, tooltipItems: a, type: "tooltip" });
}
function Fp(i, n) {
  const a = n && n.dataset && n.dataset.tooltip && n.dataset.tooltip.callbacks;
  return a ? i.override(a) : i;
}
const ly = {
  beforeTitle: Fn,
  title(i) {
    if (i.length > 0) {
      const n = i[0],
        a = n.chart.data.labels,
        s = a ? a.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return n.dataset.label || "";
      if (n.label) return n.label;
      if (s > 0 && n.dataIndex < s) return a[n.dataIndex];
    }
    return "";
  },
  afterTitle: Fn,
  beforeBody: Fn,
  beforeLabel: Fn,
  label(i) {
    if (this && this.options && this.options.mode === "dataset")
      return i.label + ": " + i.formattedValue || i.formattedValue;
    let n = i.dataset.label || "";
    n && (n += ": ");
    const a = i.formattedValue;
    return (Ft(a) || (n += a), n);
  },
  labelColor(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return {
      borderColor: a.borderColor,
      backgroundColor: a.backgroundColor,
      borderWidth: a.borderWidth,
      borderDash: a.borderDash,
      borderDashOffset: a.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return { pointStyle: a.pointStyle, rotation: a.rotation };
  },
  afterLabel: Fn,
  afterBody: Fn,
  beforeFooter: Fn,
  footer: Fn,
  afterFooter: Fn,
};
function ke(i, n, a, s) {
  const r = i[n].call(a, s);
  return typeof r > "u" ? ly[n].call(a, s) : r;
}
class Zp extends oa {
  static positioners = as;
  constructor(n) {
    (super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = n.chart),
      (this.options = n.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0));
  }
  initialize(n) {
    ((this.options = n),
      (this._cachedAnimations = void 0),
      (this.$context = void 0));
  }
  _resolveAnimations() {
    const n = this._cachedAnimations;
    if (n) return n;
    const a = this.chart,
      s = this.options.setContext(this.getContext()),
      r = s.enabled && a.options.animation && s.animations,
      u = new X0(this.chart, r);
    return (r._cacheable && (this._cachedAnimations = Object.freeze(u)), u);
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = aM(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(n, a) {
    const { callbacks: s } = a,
      r = ke(s, "beforeTitle", this, n),
      u = ke(s, "title", this, n),
      c = ke(s, "afterTitle", this, n);
    let h = [];
    return ((h = En(h, Kn(r))), (h = En(h, Kn(u))), (h = En(h, Kn(c))), h);
  }
  getBeforeBody(n, a) {
    return Qp(ke(a.callbacks, "beforeBody", this, n));
  }
  getBody(n, a) {
    const { callbacks: s } = a,
      r = [];
    return (
      qt(n, (u) => {
        const c = { before: [], lines: [], after: [] },
          h = Fp(s, u);
        (En(c.before, Kn(ke(h, "beforeLabel", this, u))),
          En(c.lines, ke(h, "label", this, u)),
          En(c.after, Kn(ke(h, "afterLabel", this, u))),
          r.push(c));
      }),
      r
    );
  }
  getAfterBody(n, a) {
    return Qp(ke(a.callbacks, "afterBody", this, n));
  }
  getFooter(n, a) {
    const { callbacks: s } = a,
      r = ke(s, "beforeFooter", this, n),
      u = ke(s, "footer", this, n),
      c = ke(s, "afterFooter", this, n);
    let h = [];
    return ((h = En(h, Kn(r))), (h = En(h, Kn(u))), (h = En(h, Kn(c))), h);
  }
  _createItems(n) {
    const a = this._active,
      s = this.chart.data,
      r = [],
      u = [],
      c = [];
    let h = [],
      m,
      g;
    for (m = 0, g = a.length; m < g; ++m) h.push($2(this.chart, a[m]));
    return (
      n.filter && (h = h.filter((p, b, x) => n.filter(p, b, x, s))),
      n.itemSort && (h = h.sort((p, b) => n.itemSort(p, b, s))),
      qt(h, (p) => {
        const b = Fp(n.callbacks, p);
        (r.push(ke(b, "labelColor", this, p)),
          u.push(ke(b, "labelPointStyle", this, p)),
          c.push(ke(b, "labelTextColor", this, p)));
      }),
      (this.labelColors = r),
      (this.labelPointStyles = u),
      (this.labelTextColors = c),
      (this.dataPoints = h),
      h
    );
  }
  update(n, a) {
    const s = this.options.setContext(this.getContext()),
      r = this._active;
    let u,
      c = [];
    if (!r.length) this.opacity !== 0 && (u = { opacity: 0 });
    else {
      const h = as[s.position].call(this, r, this._eventPosition);
      ((c = this._createItems(s)),
        (this.title = this.getTitle(c, s)),
        (this.beforeBody = this.getBeforeBody(c, s)),
        (this.body = this.getBody(c, s)),
        (this.afterBody = this.getAfterBody(c, s)),
        (this.footer = this.getFooter(c, s)));
      const m = (this._size = Vp(this, s)),
        g = Object.assign({}, h, m),
        p = Xp(this.chart, s, g),
        b = Gp(s, g, p, this.chart);
      ((this.xAlign = p.xAlign),
        (this.yAlign = p.yAlign),
        (u = {
          opacity: 1,
          x: b.x,
          y: b.y,
          width: m.width,
          height: m.height,
          caretX: h.x,
          caretY: h.y,
        }));
    }
    ((this._tooltipItems = c),
      (this.$context = void 0),
      u && this._resolveAnimations().update(this, u),
      n &&
        s.external &&
        s.external.call(this, { chart: this.chart, tooltip: this, replay: a }));
  }
  drawCaret(n, a, s, r) {
    const u = this.getCaretPosition(n, s, r);
    (a.lineTo(u.x1, u.y1), a.lineTo(u.x2, u.y2), a.lineTo(u.x3, u.y3));
  }
  getCaretPosition(n, a, s) {
    const { xAlign: r, yAlign: u } = this,
      { caretSize: c, cornerRadius: h } = s,
      { topLeft: m, topRight: g, bottomLeft: p, bottomRight: b } = cs(h),
      { x, y: S } = n,
      { width: T, height: M } = a;
    let w, N, X, J, W, G;
    return (
      u === "center"
        ? ((W = S + M / 2),
          r === "left"
            ? ((w = x), (N = w - c), (J = W + c), (G = W - c))
            : ((w = x + T), (N = w + c), (J = W - c), (G = W + c)),
          (X = w))
        : (r === "left"
            ? (N = x + Math.max(m, p) + c)
            : r === "right"
              ? (N = x + T - Math.max(g, b) - c)
              : (N = this.caretX),
          u === "top"
            ? ((J = S), (W = J - c), (w = N - c), (X = N + c))
            : ((J = S + M), (W = J + c), (w = N + c), (X = N - c)),
          (G = J)),
      { x1: w, x2: N, x3: X, y1: J, y2: W, y3: G }
    );
  }
  drawTitle(n, a, s) {
    const r = this.title,
      u = r.length;
    let c, h, m;
    if (u) {
      const g = Za(s.rtl, this.x, this.width);
      for (
        n.x = nr(this, s.titleAlign, s),
          a.textAlign = g.textAlign(s.titleAlign),
          a.textBaseline = "middle",
          c = we(s.titleFont),
          h = s.titleSpacing,
          a.fillStyle = s.titleColor,
          a.font = c.string,
          m = 0;
        m < u;
        ++m
      )
        (a.fillText(r[m], g.x(n.x), n.y + c.lineHeight / 2),
          (n.y += c.lineHeight + h),
          m + 1 === u && (n.y += s.titleMarginBottom - h));
    }
  }
  _drawColorBox(n, a, s, r, u) {
    const c = this.labelColors[s],
      h = this.labelPointStyles[s],
      { boxHeight: m, boxWidth: g } = u,
      p = we(u.bodyFont),
      b = nr(this, "left", u),
      x = r.x(b),
      S = m < p.lineHeight ? (p.lineHeight - m) / 2 : 0,
      T = a.y + S;
    if (u.usePointStyle) {
      const M = {
          radius: Math.min(g, m) / 2,
          pointStyle: h.pointStyle,
          rotation: h.rotation,
          borderWidth: 1,
        },
        w = r.leftForLtr(x, g) + g / 2,
        N = T + m / 2;
      ((n.strokeStyle = u.multiKeyBackground),
        (n.fillStyle = u.multiKeyBackground),
        lf(n, M, w, N),
        (n.strokeStyle = c.borderColor),
        (n.fillStyle = c.backgroundColor),
        lf(n, M, w, N));
    } else {
      ((n.lineWidth = kt(c.borderWidth)
        ? Math.max(...Object.values(c.borderWidth))
        : c.borderWidth || 1),
        (n.strokeStyle = c.borderColor),
        n.setLineDash(c.borderDash || []),
        (n.lineDashOffset = c.borderDashOffset || 0));
      const M = r.leftForLtr(x, g),
        w = r.leftForLtr(r.xPlus(x, 1), g - 2),
        N = cs(c.borderRadius);
      Object.values(N).some((X) => X !== 0)
        ? (n.beginPath(),
          (n.fillStyle = u.multiKeyBackground),
          sf(n, { x: M, y: T, w: g, h: m, radius: N }),
          n.fill(),
          n.stroke(),
          (n.fillStyle = c.backgroundColor),
          n.beginPath(),
          sf(n, { x: w, y: T + 1, w: g - 2, h: m - 2, radius: N }),
          n.fill())
        : ((n.fillStyle = u.multiKeyBackground),
          n.fillRect(M, T, g, m),
          n.strokeRect(M, T, g, m),
          (n.fillStyle = c.backgroundColor),
          n.fillRect(w, T + 1, g - 2, m - 2));
    }
    n.fillStyle = this.labelTextColors[s];
  }
  drawBody(n, a, s) {
    const { body: r } = this,
      {
        bodySpacing: u,
        bodyAlign: c,
        displayColors: h,
        boxHeight: m,
        boxWidth: g,
        boxPadding: p,
      } = s,
      b = we(s.bodyFont);
    let x = b.lineHeight,
      S = 0;
    const T = Za(s.rtl, this.x, this.width),
      M = function (_) {
        (a.fillText(_, T.x(n.x + S), n.y + x / 2), (n.y += x + u));
      },
      w = T.textAlign(c);
    let N, X, J, W, G, et, z;
    for (
      a.textAlign = c,
        a.textBaseline = "middle",
        a.font = b.string,
        n.x = nr(this, w, s),
        a.fillStyle = s.bodyColor,
        qt(this.beforeBody, M),
        S = h && w !== "right" ? (c === "center" ? g / 2 + p : g + 2 + p) : 0,
        W = 0,
        et = r.length;
      W < et;
      ++W
    ) {
      for (
        N = r[W],
          X = this.labelTextColors[W],
          a.fillStyle = X,
          qt(N.before, M),
          J = N.lines,
          h &&
            J.length &&
            (this._drawColorBox(a, n, W, T, s),
            (x = Math.max(b.lineHeight, m))),
          G = 0,
          z = J.length;
        G < z;
        ++G
      )
        (M(J[G]), (x = b.lineHeight));
      qt(N.after, M);
    }
    ((S = 0), (x = b.lineHeight), qt(this.afterBody, M), (n.y -= u));
  }
  drawFooter(n, a, s) {
    const r = this.footer,
      u = r.length;
    let c, h;
    if (u) {
      const m = Za(s.rtl, this.x, this.width);
      for (
        n.x = nr(this, s.footerAlign, s),
          n.y += s.footerMarginTop,
          a.textAlign = m.textAlign(s.footerAlign),
          a.textBaseline = "middle",
          c = we(s.footerFont),
          a.fillStyle = s.footerColor,
          a.font = c.string,
          h = 0;
        h < u;
        ++h
      )
        (a.fillText(r[h], m.x(n.x), n.y + c.lineHeight / 2),
          (n.y += c.lineHeight + s.footerSpacing));
    }
  }
  drawBackground(n, a, s, r) {
    const { xAlign: u, yAlign: c } = this,
      { x: h, y: m } = n,
      { width: g, height: p } = s,
      {
        topLeft: b,
        topRight: x,
        bottomLeft: S,
        bottomRight: T,
      } = cs(r.cornerRadius);
    ((a.fillStyle = r.backgroundColor),
      (a.strokeStyle = r.borderColor),
      (a.lineWidth = r.borderWidth),
      a.beginPath(),
      a.moveTo(h + b, m),
      c === "top" && this.drawCaret(n, a, s, r),
      a.lineTo(h + g - x, m),
      a.quadraticCurveTo(h + g, m, h + g, m + x),
      c === "center" && u === "right" && this.drawCaret(n, a, s, r),
      a.lineTo(h + g, m + p - T),
      a.quadraticCurveTo(h + g, m + p, h + g - T, m + p),
      c === "bottom" && this.drawCaret(n, a, s, r),
      a.lineTo(h + S, m + p),
      a.quadraticCurveTo(h, m + p, h, m + p - S),
      c === "center" && u === "left" && this.drawCaret(n, a, s, r),
      a.lineTo(h, m + b),
      a.quadraticCurveTo(h, m, h + b, m),
      a.closePath(),
      a.fill(),
      r.borderWidth > 0 && a.stroke());
  }
  _updateAnimationTarget(n) {
    const a = this.chart,
      s = this.$animations,
      r = s && s.x,
      u = s && s.y;
    if (r || u) {
      const c = as[n.position].call(this, this._active, this._eventPosition);
      if (!c) return;
      const h = (this._size = Vp(this, n)),
        m = Object.assign({}, c, this._size),
        g = Xp(a, n, m),
        p = Gp(n, m, g, a);
      (r._to !== p.x || u._to !== p.y) &&
        ((this.xAlign = g.xAlign),
        (this.yAlign = g.yAlign),
        (this.width = h.width),
        (this.height = h.height),
        (this.caretX = c.x),
        (this.caretY = c.y),
        this._resolveAnimations().update(this, p));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(n) {
    const a = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s) return;
    this._updateAnimationTarget(a);
    const r = { width: this.width, height: this.height },
      u = { x: this.x, y: this.y };
    s = Math.abs(s) < 0.001 ? 0 : s;
    const c = fn(a.padding),
      h =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    a.enabled &&
      h &&
      (n.save(),
      (n.globalAlpha = s),
      this.drawBackground(u, n, r, a),
      q0(n, a.textDirection),
      (u.y += c.top),
      this.drawTitle(u, n, a),
      this.drawBody(u, n, a),
      this.drawFooter(u, n, a),
      Y0(n, a.textDirection),
      n.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(n, a) {
    const s = this._active,
      r = n.map(({ datasetIndex: h, index: m }) => {
        const g = this.chart.getDatasetMeta(h);
        if (!g) throw new Error("Cannot find a dataset at index " + h);
        return { datasetIndex: h, element: g.data[m], index: m };
      }),
      u = !cr(s, r),
      c = this._positionChanged(r, a);
    (u || c) &&
      ((this._active = r),
      (this._eventPosition = a),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(n, a, s = !0) {
    if (a && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const r = this.options,
      u = this._active || [],
      c = this._getActiveElements(n, u, a, s),
      h = this._positionChanged(c, n),
      m = a || !cr(c, u) || h;
    return (
      m &&
        ((this._active = c),
        (r.enabled || r.external) &&
          ((this._eventPosition = { x: n.x, y: n.y }), this.update(!0, a))),
      m
    );
  }
  _getActiveElements(n, a, s, r) {
    const u = this.options;
    if (n.type === "mouseout") return [];
    if (!r)
      return a.filter(
        (h) =>
          this.chart.data.datasets[h.datasetIndex] &&
          this.chart
            .getDatasetMeta(h.datasetIndex)
            .controller.getParsed(h.index) !== void 0,
      );
    const c = this.chart.getElementsAtEventForMode(n, u.mode, u, s);
    return (u.reverse && c.reverse(), c);
  }
  _positionChanged(n, a) {
    const { caretX: s, caretY: r, options: u } = this,
      c = as[u.position].call(this, n, a);
    return c !== !1 && (s !== c.x || r !== c.y);
  }
}
var Es = {
  id: "tooltip",
  _element: Zp,
  positioners: as,
  afterInit(i, n, a) {
    a && (i.tooltip = new Zp({ chart: i, options: a }));
  },
  beforeUpdate(i, n, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  reset(i, n, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  afterDraw(i) {
    const n = i.tooltip;
    if (n && n._willRender()) {
      const a = { tooltip: n };
      if (i.notifyPlugins("beforeTooltipDraw", { ...a, cancelable: !0 }) === !1)
        return;
      (n.draw(i.ctx), i.notifyPlugins("afterTooltipDraw", a));
    }
  },
  afterEvent(i, n) {
    if (i.tooltip) {
      const a = n.replay;
      i.tooltip.handleEvent(n.event, a, n.inChartArea) && (n.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, n) => n.bodyFont.size,
    boxWidth: (i, n) => n.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: ly,
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (i) => i !== "filter" && i !== "itemSort" && i !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const lM = (i, n, a, s) => (
  typeof n == "string"
    ? ((a = i.push(n) - 1), s.unshift({ index: a, label: n }))
    : isNaN(n) && (a = null),
  a
);
function sM(i, n, a, s) {
  const r = i.indexOf(n);
  if (r === -1) return lM(i, n, a, s);
  const u = i.lastIndexOf(n);
  return r !== u ? a : r;
}
const oM = (i, n) => (i === null ? null : rn(Math.round(i), 0, n));
function Kp(i) {
  const n = this.getLabels();
  return i >= 0 && i < n.length ? n[i] : i;
}
class ws extends Ia {
  static id = "category";
  static defaults = { ticks: { callback: Kp } };
  constructor(n) {
    (super(n),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []));
  }
  init(n) {
    const a = this._addedLabels;
    if (a.length) {
      const s = this.getLabels();
      for (const { index: r, label: u } of a) s[r] === u && s.splice(r, 1);
      this._addedLabels = [];
    }
    super.init(n);
  }
  parse(n, a) {
    if (Ft(n)) return null;
    const s = this.getLabels();
    return (
      (a =
        isFinite(a) && s[a] === n ? a : sM(s, n, Dt(a, n), this._addedLabels)),
      oM(a, s.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: n, maxDefined: a } = this.getUserBounds();
    let { min: s, max: r } = this.getMinMax(!0);
    (this.options.bounds === "ticks" &&
      (n || (s = 0), a || (r = this.getLabels().length - 1)),
      (this.min = s),
      (this.max = r));
  }
  buildTicks() {
    const n = this.min,
      a = this.max,
      s = this.options.offset,
      r = [];
    let u = this.getLabels();
    ((u = n === 0 && a === u.length - 1 ? u : u.slice(n, a + 1)),
      (this._valueRange = Math.max(u.length - (s ? 0 : 1), 1)),
      (this._startValue = this.min - (s ? 0.5 : 0)));
    for (let c = n; c <= a; c++) r.push({ value: c });
    return r;
  }
  getLabelForValue(n) {
    return Kp.call(this, n);
  }
  configure() {
    (super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels));
  }
  getPixelForValue(n) {
    return (
      typeof n != "number" && (n = this.parse(n)),
      n === null
        ? NaN
        : this.getPixelForDecimal((n - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(n) {
    const a = this.ticks;
    return n < 0 || n > a.length - 1 ? null : this.getPixelForValue(a[n].value);
  }
  getValueForPixel(n) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(n) * this._valueRange,
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
function rM(i, n) {
  const a = [],
    {
      bounds: r,
      step: u,
      min: c,
      max: h,
      precision: m,
      count: g,
      maxTicks: p,
      maxDigits: b,
      includeBounds: x,
    } = i,
    S = u || 1,
    T = p - 1,
    { min: M, max: w } = n,
    N = !Ft(c),
    X = !Ft(h),
    J = !Ft(g),
    W = (w - M) / (b + 1);
  let G = $g((w - M) / T / S) * S,
    et,
    z,
    _,
    A;
  if (G < 1e-14 && !N && !X) return [{ value: M }, { value: w }];
  ((A = Math.ceil(w / G) - Math.floor(M / G)),
    A > T && (G = $g((A * G) / T / S) * S),
    Ft(m) || ((et = Math.pow(10, m)), (G = Math.ceil(G * et) / et)),
    r === "ticks"
      ? ((z = Math.floor(M / G) * G), (_ = Math.ceil(w / G) * G))
      : ((z = M), (_ = w)),
    N && X && u && K_((h - c) / u, G / 1e3)
      ? ((A = Math.round(Math.min((h - c) / G, p))),
        (G = (h - c) / A),
        (z = c),
        (_ = h))
      : J
        ? ((z = N ? c : z), (_ = X ? h : _), (A = g - 1), (G = (_ - z) / A))
        : ((A = (_ - z) / G),
          os(A, Math.round(A), G / 1e3)
            ? (A = Math.round(A))
            : (A = Math.ceil(A))));
  const j = Math.max(Ig(G), Ig(z));
  ((et = Math.pow(10, Ft(m) ? j : m)),
    (z = Math.round(z * et) / et),
    (_ = Math.round(_ * et) / et));
  let V = 0;
  for (
    N &&
    (x && z !== c
      ? (a.push({ value: c }),
        z < c && V++,
        os(Math.round((z + V * G) * et) / et, c, Wp(c, W, i)) && V++)
      : z < c && V++);
    V < A;
    ++V
  ) {
    const K = Math.round((z + V * G) * et) / et;
    if (X && K > h) break;
    a.push({ value: K });
  }
  return (
    X && x && _ !== h
      ? a.length && os(a[a.length - 1].value, h, Wp(h, W, i))
        ? (a[a.length - 1].value = h)
        : a.push({ value: h })
      : (!X || _ === h) && a.push({ value: _ }),
    a
  );
}
function Wp(i, n, { horizontal: a, minRotation: s }) {
  const r = ea(s),
    u = (a ? Math.sin(r) : Math.cos(r)) || 0.001,
    c = 0.75 * n * ("" + i).length;
  return Math.min(n / u, c);
}
class uM extends Ia {
  constructor(n) {
    (super(n),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0));
  }
  parse(n, a) {
    return Ft(n) ||
      ((typeof n == "number" || n instanceof Number) && !isFinite(+n))
      ? null
      : +n;
  }
  handleTickRangeOptions() {
    const { beginAtZero: n } = this.options,
      { minDefined: a, maxDefined: s } = this.getUserBounds();
    let { min: r, max: u } = this;
    const c = (m) => (r = a ? r : m),
      h = (m) => (u = s ? u : m);
    if (n) {
      const m = Ka(r),
        g = Ka(u);
      m < 0 && g < 0 ? h(0) : m > 0 && g > 0 && c(0);
    }
    if (r === u) {
      let m = u === 0 ? 1 : Math.abs(u * 0.05);
      (h(u + m), n || c(r - m));
    }
    ((this.min = r), (this.max = u));
  }
  getTickLimit() {
    const n = this.options.ticks;
    let { maxTicksLimit: a, stepSize: s } = n,
      r;
    return (
      s
        ? ((r = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          r > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${r} ticks. Limiting to 1000.`,
            ),
            (r = 1e3)))
        : ((r = this.computeTickLimit()), (a = a || 11)),
      a && (r = Math.min(a, r)),
      r
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const n = this.options,
      a = n.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const r = {
        maxTicks: s,
        bounds: n.bounds,
        min: n.min,
        max: n.max,
        precision: a.precision,
        step: a.stepSize,
        count: a.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: a.minRotation || 0,
        includeBounds: a.includeBounds !== !1,
      },
      u = this._range || this,
      c = rM(r, u);
    return (
      n.bounds === "ticks" && W_(c, this, "value"),
      n.reverse
        ? (c.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      c
    );
  }
  configure() {
    const n = this.ticks;
    let a = this.min,
      s = this.max;
    if ((super.configure(), this.options.offset && n.length)) {
      const r = (s - a) / Math.max(n.length - 1, 1) / 2;
      ((a -= r), (s += r));
    }
    ((this._startValue = a), (this._endValue = s), (this._valueRange = s - a));
  }
  getLabelForValue(n) {
    return R0(n, this.chart.options.locale, this.options.ticks.format);
  }
}
class As extends uM {
  static id = "linear";
  static defaults = { ticks: { callback: z0.formatters.numeric } };
  determineDataLimits() {
    const { min: n, max: a } = this.getMinMax(!0);
    ((this.min = cn(n) ? n : 0),
      (this.max = cn(a) ? a : 1),
      this.handleTickRangeOptions());
  }
  computeTickLimit() {
    const n = this.isHorizontal(),
      a = n ? this.width : this.height,
      s = ea(this.options.ticks.minRotation),
      r = (n ? Math.sin(s) : Math.cos(s)) || 0.001,
      u = this._resolveTickFontOptions(0);
    return Math.ceil(a / Math.min(40, u.lineHeight / r));
  }
  getPixelForValue(n) {
    return n === null
      ? NaN
      : this.getPixelForDecimal((n - this._startValue) / this._valueRange);
  }
  getValueForPixel(n) {
    return this._startValue + this.getDecimalForPixel(n) * this._valueRange;
  }
}
const Sr = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Le = Object.keys(Sr);
function Jp(i, n) {
  return i - n;
}
function Pp(i, n) {
  if (Ft(n)) return null;
  const a = i._adapter,
    { parser: s, round: r, isoWeekday: u } = i._parseOpts;
  let c = n;
  return (
    typeof s == "function" && (c = s(c)),
    cn(c) || (c = typeof s == "string" ? a.parse(c, s) : a.parse(c)),
    c === null
      ? null
      : (r &&
          (c =
            r === "week" && (ms(u) || u === !0)
              ? a.startOf(c, "isoWeek", u)
              : a.startOf(c, r)),
        +c)
  );
}
function $p(i, n, a, s) {
  const r = Le.length;
  for (let u = Le.indexOf(i); u < r - 1; ++u) {
    const c = Sr[Le[u]],
      h = c.steps ? c.steps : Number.MAX_SAFE_INTEGER;
    if (c.common && Math.ceil((a - n) / (h * c.size)) <= s) return Le[u];
  }
  return Le[r - 1];
}
function cM(i, n, a, s, r) {
  for (let u = Le.length - 1; u >= Le.indexOf(a); u--) {
    const c = Le[u];
    if (Sr[c].common && i._adapter.diff(r, s, c) >= n - 1) return c;
  }
  return Le[a ? Le.indexOf(a) : 0];
}
function fM(i) {
  for (let n = Le.indexOf(i) + 1, a = Le.length; n < a; ++n)
    if (Sr[Le[n]].common) return Le[n];
}
function Ip(i, n, a) {
  if (!a) i[n] = !0;
  else if (a.length) {
    const { lo: s, hi: r } = Sf(a, n),
      u = a[s] >= n ? a[s] : a[r];
    i[u] = !0;
  }
}
function hM(i, n, a, s) {
  const r = i._adapter,
    u = +r.startOf(n[0].value, s),
    c = n[n.length - 1].value;
  let h, m;
  for (h = u; h <= c; h = +r.add(h, 1, s))
    ((m = a[h]), m >= 0 && (n[m].major = !0));
  return n;
}
function t0(i, n, a) {
  const s = [],
    r = {},
    u = n.length;
  let c, h;
  for (c = 0; c < u; ++c)
    ((h = n[c]), (r[h] = c), s.push({ value: h, major: !1 }));
  return u === 0 || !a ? s : hM(i, s, r, a);
}
class e0 extends Ia {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
  };
  constructor(n) {
    (super(n),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0));
  }
  init(n, a = {}) {
    const s = n.time || (n.time = {}),
      r = (this._adapter = new TS._date(n.adapters.date));
    (r.init(a),
      ss(s.displayFormats, r.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday,
      }),
      super.init(n),
      (this._normalized = a.normalized));
  }
  parse(n, a) {
    return n === void 0 ? null : Pp(this, n);
  }
  beforeLayout() {
    (super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }));
  }
  determineDataLimits() {
    const n = this.options,
      a = this._adapter,
      s = n.time.unit || "day";
    let { min: r, max: u, minDefined: c, maxDefined: h } = this.getUserBounds();
    function m(g) {
      (!c && !isNaN(g.min) && (r = Math.min(r, g.min)),
        !h && !isNaN(g.max) && (u = Math.max(u, g.max)));
    }
    ((!c || !h) &&
      (m(this._getLabelBounds()),
      (n.bounds !== "ticks" || n.ticks.source !== "labels") &&
        m(this.getMinMax(!1))),
      (r = cn(r) && !isNaN(r) ? r : +a.startOf(Date.now(), s)),
      (u = cn(u) && !isNaN(u) ? u : +a.endOf(Date.now(), s) + 1),
      (this.min = Math.min(r, u - 1)),
      (this.max = Math.max(r + 1, u)));
  }
  _getLabelBounds() {
    const n = this.getLabelTimestamps();
    let a = Number.POSITIVE_INFINITY,
      s = Number.NEGATIVE_INFINITY;
    return (
      n.length && ((a = n[0]), (s = n[n.length - 1])),
      { min: a, max: s }
    );
  }
  buildTicks() {
    const n = this.options,
      a = n.time,
      s = n.ticks,
      r = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    n.bounds === "ticks" &&
      r.length &&
      ((this.min = this._userMin || r[0]),
      (this.max = this._userMax || r[r.length - 1]));
    const u = this.min,
      c = this.max,
      h = e1(r, u, c);
    return (
      (this._unit =
        a.unit ||
        (s.autoSkip
          ? $p(a.minUnit, this.min, this.max, this._getLabelCapacity(u))
          : cM(this, h.length, a.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === "year" ? void 0 : fM(this._unit)),
      this.initOffsets(r),
      n.reverse && h.reverse(),
      t0(this, h, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((n) => +n.value));
  }
  initOffsets(n = []) {
    let a = 0,
      s = 0,
      r,
      u;
    this.options.offset &&
      n.length &&
      ((r = this.getDecimalForValue(n[0])),
      n.length === 1
        ? (a = 1 - r)
        : (a = (this.getDecimalForValue(n[1]) - r) / 2),
      (u = this.getDecimalForValue(n[n.length - 1])),
      n.length === 1
        ? (s = u)
        : (s = (u - this.getDecimalForValue(n[n.length - 2])) / 2));
    const c = n.length < 3 ? 0.5 : 0.25;
    ((a = rn(a, 0, c)),
      (s = rn(s, 0, c)),
      (this._offsets = { start: a, end: s, factor: 1 / (a + 1 + s) }));
  }
  _generate() {
    const n = this._adapter,
      a = this.min,
      s = this.max,
      r = this.options,
      u = r.time,
      c = u.unit || $p(u.minUnit, a, s, this._getLabelCapacity(a)),
      h = Dt(r.ticks.stepSize, 1),
      m = c === "week" ? u.isoWeekday : !1,
      g = ms(m) || m === !0,
      p = {};
    let b = a,
      x,
      S;
    if (
      (g && (b = +n.startOf(b, "isoWeek", m)),
      (b = +n.startOf(b, g ? "day" : c)),
      n.diff(s, a, c) > 1e5 * h)
    )
      throw new Error(
        a + " and " + s + " are too far apart with stepSize of " + h + " " + c,
      );
    const T = r.ticks.source === "data" && this.getDataTimestamps();
    for (x = b, S = 0; x < s; x = +n.add(x, h, c), S++) Ip(p, x, T);
    return (
      (x === s || r.bounds === "ticks" || S === 1) && Ip(p, x, T),
      Object.keys(p)
        .sort(Jp)
        .map((M) => +M)
    );
  }
  getLabelForValue(n) {
    const a = this._adapter,
      s = this.options.time;
    return s.tooltipFormat
      ? a.format(n, s.tooltipFormat)
      : a.format(n, s.displayFormats.datetime);
  }
  format(n, a) {
    const r = this.options.time.displayFormats,
      u = this._unit,
      c = a || r[u];
    return this._adapter.format(n, c);
  }
  _tickFormatFunction(n, a, s, r) {
    const u = this.options,
      c = u.ticks.callback;
    if (c) return Jt(c, [n, a, s], this);
    const h = u.time.displayFormats,
      m = this._unit,
      g = this._majorUnit,
      p = m && h[m],
      b = g && h[g],
      x = s[a],
      S = g && b && x && x.major;
    return this._adapter.format(n, r || (S ? b : p));
  }
  generateTickLabels(n) {
    let a, s, r;
    for (a = 0, s = n.length; a < s; ++a)
      ((r = n[a]), (r.label = this._tickFormatFunction(r.value, a, n)));
  }
  getDecimalForValue(n) {
    return n === null ? NaN : (n - this.min) / (this.max - this.min);
  }
  getPixelForValue(n) {
    const a = this._offsets,
      s = this.getDecimalForValue(n);
    return this.getPixelForDecimal((a.start + s) * a.factor);
  }
  getValueForPixel(n) {
    const a = this._offsets,
      s = this.getDecimalForPixel(n) / a.factor - a.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(n) {
    const a = this.options.ticks,
      s = this.ctx.measureText(n).width,
      r = ea(this.isHorizontal() ? a.maxRotation : a.minRotation),
      u = Math.cos(r),
      c = Math.sin(r),
      h = this._resolveTickFontOptions(0).size;
    return { w: s * u + h * c, h: s * c + h * u };
  }
  _getLabelCapacity(n) {
    const a = this.options.time,
      s = a.displayFormats,
      r = s[a.unit] || s.millisecond,
      u = this._tickFormatFunction(n, 0, t0(this, [n], this._majorUnit), r),
      c = this._getLabelSize(u),
      h =
        Math.floor(this.isHorizontal() ? this.width / c.w : this.height / c.h) -
        1;
    return h > 0 ? h : 1;
  }
  getDataTimestamps() {
    let n = this._cache.data || [],
      a,
      s;
    if (n.length) return n;
    const r = this.getMatchingVisibleMetas();
    if (this._normalized && r.length)
      return (this._cache.data = r[0].controller.getAllParsedValues(this));
    for (a = 0, s = r.length; a < s; ++a)
      n = n.concat(r[a].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(n));
  }
  getLabelTimestamps() {
    const n = this._cache.labels || [];
    let a, s;
    if (n.length) return n;
    const r = this.getLabels();
    for (a = 0, s = r.length; a < s; ++a) n.push(Pp(this, r[a]));
    return (this._cache.labels = this._normalized ? n : this.normalize(n));
  }
  normalize(n) {
    return i1(n.sort(Jp));
  }
}
function ir(i, n, a) {
  let s = 0,
    r = i.length - 1,
    u,
    c,
    h,
    m;
  a
    ? (n >= i[s].pos && n <= i[r].pos && ({ lo: s, hi: r } = na(i, "pos", n)),
      ({ pos: u, time: h } = i[s]),
      ({ pos: c, time: m } = i[r]))
    : (n >= i[s].time &&
        n <= i[r].time &&
        ({ lo: s, hi: r } = na(i, "time", n)),
      ({ time: u, pos: h } = i[s]),
      ({ time: c, pos: m } = i[r]));
  const g = c - u;
  return g ? h + ((m - h) * (n - u)) / g : h;
}
class DM extends e0 {
  static id = "timeseries";
  static defaults = e0.defaults;
  constructor(n) {
    (super(n),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0));
  }
  initOffsets() {
    const n = this._getTimestampsForTable(),
      a = (this._table = this.buildLookupTable(n));
    ((this._minPos = ir(a, this.min)),
      (this._tableRange = ir(a, this.max) - this._minPos),
      super.initOffsets(n));
  }
  buildLookupTable(n) {
    const { min: a, max: s } = this,
      r = [],
      u = [];
    let c, h, m, g, p;
    for (c = 0, h = n.length; c < h; ++c)
      ((g = n[c]), g >= a && g <= s && r.push(g));
    if (r.length < 2)
      return [
        { time: a, pos: 0 },
        { time: s, pos: 1 },
      ];
    for (c = 0, h = r.length; c < h; ++c)
      ((p = r[c + 1]),
        (m = r[c - 1]),
        (g = r[c]),
        Math.round((p + m) / 2) !== g && u.push({ time: g, pos: c / (h - 1) }));
    return u;
  }
  _generate() {
    const n = this.min,
      a = this.max;
    let s = super.getDataTimestamps();
    return (
      (!s.includes(n) || !s.length) && s.splice(0, 0, n),
      (!s.includes(a) || s.length === 1) && s.push(a),
      s.sort((r, u) => r - u)
    );
  }
  _getTimestampsForTable() {
    let n = this._cache.all || [];
    if (n.length) return n;
    const a = this.getDataTimestamps(),
      s = this.getLabelTimestamps();
    return (
      a.length && s.length
        ? (n = this.normalize(a.concat(s)))
        : (n = a.length ? a : s),
      (n = this._cache.all = n),
      n
    );
  }
  getDecimalForValue(n) {
    return (ir(this._table, n) - this._minPos) / this._tableRange;
  }
  getValueForPixel(n) {
    const a = this._offsets,
      s = this.getDecimalForPixel(n) / a.factor - a.end;
    return ir(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const sy = "label";
function n0(i, n) {
  typeof i == "function" ? i(n) : i && (i.current = n);
}
function dM(i, n) {
  const a = i.options;
  a && n && Object.assign(a, n);
}
function oy(i, n) {
  i.labels = n;
}
function ry(i, n, a = sy) {
  const s = [];
  i.datasets = n.map((r) => {
    const u = i.datasets.find((c) => c[a] === r[a]);
    return !u || !r.data || s.includes(u)
      ? { ...r }
      : (s.push(u), Object.assign(u, r), u);
  });
}
function mM(i, n = sy) {
  const a = { labels: [], datasets: [] };
  return (oy(a, i.labels), ry(a, i.datasets, n), a);
}
function gM(i, n) {
  const {
      height: a = 150,
      width: s = 300,
      redraw: r = !1,
      datasetIdKey: u,
      type: c,
      data: h,
      options: m,
      plugins: g = [],
      fallbackContent: p,
      updateMode: b,
      ...x
    } = i,
    S = H.useRef(null),
    T = H.useRef(null),
    M = () => {
      S.current &&
        ((T.current = new Di(S.current, {
          type: c,
          data: mM(h, u),
          options: m && { ...m },
          plugins: g,
        })),
        n0(n, T.current));
    },
    w = () => {
      (n0(n, null), T.current && (T.current.destroy(), (T.current = null)));
    };
  return (
    H.useEffect(() => {
      !r && T.current && m && dM(T.current, m);
    }, [r, m]),
    H.useEffect(() => {
      !r && T.current && oy(T.current.config.data, h.labels);
    }, [r, h.labels]),
    H.useEffect(() => {
      !r && T.current && h.datasets && ry(T.current.config.data, h.datasets, u);
    }, [r, h.datasets]),
    H.useEffect(() => {
      T.current && (r ? (w(), setTimeout(M)) : T.current.update(b));
    }, [r, m, h.labels, h.datasets, b]),
    H.useEffect(() => {
      T.current && (w(), setTimeout(M));
    }, [c]),
    H.useEffect(() => (M(), () => w()), []),
    D.jsx("canvas", {
      ref: S,
      role: "img",
      height: a,
      width: s,
      ...x,
      children: p,
    })
  );
}
const pM = H.forwardRef(gM);
function yM(i, n) {
  return (
    Di.register(n),
    H.forwardRef((a, s) => D.jsx(pM, { ...a, ref: s, type: i }))
  );
}
const _e = yM("line", AS);
Di.register(ws, As, Ss, _s, P2, Es, Ms);
const bM = () => {
    const [i, n] = H.useState([
        {
          id: "n_steps",
          label: "No.of time steps",
          min: 10,
          max: 1e3,
          step: 1,
          value: 500,
        },
        { id: "p", label: "Order", min: 1, max: 20, step: 1, value: 10 },
        {
          id: "sigma",
          label: "Standard deviation",
          min: 0.01,
          max: 1,
          step: 1e-4,
          value: 0.5,
        },
      ]),
      [a, s] = H.useState(new Array(10).fill(0.5)),
      [r, u] = H.useState(""),
      [c, h] = H.useState("Code will be generated here.!"),
      [m, g] = H.useState(null),
      [p, b] = H.useState(!1),
      [x, S] = H.useState(!1);
    H.useEffect(() => {
      const z = i.find((_) => _.id === "p").value;
      s(new Array(z).fill(0.5));
    }, [i]);
    const T = (z, _) => {
        const A = i.find((V) => V.id === z),
          j = Math.min(Math.max(_, A.min), A.max);
        n(i.map((V) => (V.id === z ? { ...V, value: j } : V)));
      },
      M = (z, _) => {
        const A = [...a];
        ((A[z] = parseFloat(_)), s(A));
      },
      w = () => {
        let z = 0,
          _ = 0;
        for (; z === 0; ) z = Math.random();
        for (; _ === 0; ) _ = Math.random();
        return Math.sqrt(-2 * Math.log(z)) * Math.cos(2 * Math.PI * _);
      },
      N = (z, _, A, j) => {
        if (A.length !== _)
          return (
            alert(
              "The number of AR coefficients must match the specified order p",
            ),
            null
          );
        const V = Array(z)
            .fill(0)
            .map(() => j * w()),
          K = new Array(z).fill(0);
        for (let at = 0; at < _; at++) K[at] = V[at];
        for (let at = _; at < z; at++) {
          let tt = 0;
          for (let lt = 0; lt < _; lt++) tt += A[lt] * K[at - 1 - lt];
          K[at] = tt + V[at];
        }
        return { X: K, epsilon: V };
      },
      X = () => {
        const z = `function AR_process(n_steps, p, phi, sigma, uniqueIdentifier)
    % Function to simulate an AR(p) stochastic process
    %
    % Parameters:
    %   n_steps: Number of time steps
    %   p: Order of the AR process
    %   phi: AR coefficients (array)
    %   sigma: Standard deviation of the noise

    % Ensure the number of AR coefficients matches the order
    if length(phi) ~= p
        error('The number of AR coefficients must match the specified order p');
    end

    % Generate white noise using randn
    epsilon = sigma * randn(n_steps, 1);

    % Initialize time series
    X = zeros(n_steps, 1);

    % Start with initial values based on noise
    for t = 1:p
        X(t) = epsilon(t);
    end

    % Simulate AR(p) process
    for t = (p+1):n_steps
        X(t) = sum(phi .* X(t-1:-1:t-p)') + epsilon(t);
    end

    % Plot the time series
    outputDir = 'Outputs';
    if ~exist(outputDir, 'dir')
        mkdir(outputDir);
    end

    figSize = [0, 0, 20, 5]; % inches

    % Plot: Simulated AR(p) Process
    fig = figure('Units', 'inches', 'Position', figSize);
    plot(1:n_steps, X, 'b');
    title(['Simulated AR(', num2str(p), ') Stochastic Process']);
    xlabel('Time');
    ylabel('Value');
    print(fig, fullfile(outputDir, sprintf('ar_process_signal_%s.png', uniqueIdentifier)), '-dpng');
    close(fig);

    % Plot: Generated White Noise
    fig = figure('Units', 'inches', 'Position', figSize);
    plot(1:n_steps, epsilon, 'r');
    title('Generated White Noise');
    xlabel('Time');
    ylabel('Noise Value');
    print(fig, fullfile(outputDir, sprintf('ar_process_noise_%s.png', uniqueIdentifier)), '-dpng');
    close(fig);
end`;
        (u(z), h(`<pre>${z}</pre>`));
      },
      J = () => {
        (b(!0),
          S(!1),
          setTimeout(() => {
            const z = i.find((K) => K.id === "n_steps").value,
              _ = i.find((K) => K.id === "p").value,
              A = i.find((K) => K.id === "sigma").value,
              j = a.slice(0, _),
              V = N(z, _, j, A);
            if (V) {
              const K = Array.from({ length: z }, (lt, O) => O),
                at = {
                  labels: K,
                  datasets: [
                    {
                      label: `Simulated AR(${_}) Stochastic Process`,
                      data: V.X,
                      borderColor: "rgba(0, 114, 189, 0.7)",
                      backgroundColor: "transparent",
                      pointRadius: 0,
                      borderWidth: 1,
                      tension: 0,
                    },
                  ],
                },
                tt = {
                  labels: K,
                  datasets: [
                    {
                      label: "Generated White Noise",
                      data: V.epsilon,
                      borderColor: "rgba(217, 83, 25, 0.7)",
                      backgroundColor: "transparent",
                      pointRadius: 0,
                      borderWidth: 1,
                      tension: 0,
                    },
                  ],
                };
              (g({ process: at, noise: tt }), S(!0));
            }
            b(!1);
          }, 100));
      },
      W = () => {
        const z = document.createElement("a"),
          _ = new Blob([r], { type: "text/plain" });
        ((z.href = URL.createObjectURL(_)),
          (z.download = "AR_process.m"),
          document.body.appendChild(z),
          z.click(),
          document.body.removeChild(z));
      },
      G = () =>
        D.jsx("div", {
          className:
            "flex flex-col fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50",
          children: D.jsx("div", {
            className: "w-20 h-10",
            children: D.jsxs("div", {
              className: "relative w-full h-full overflow-hidden p-2 pl-3",
              children: [
                D.jsx("p", {
                  className: "font-sans text-sm font-semibold",
                  children: "Loading...",
                }),
                D.jsx("div", {
                  className:
                    "absolute inset-0 bg-blue-button rounded-lg animate-pulse opacity-0 text-black",
                }),
              ],
            }),
          }),
        }),
      et = (z, _) => ({
        responsive: !0,
        maintainAspectRatio: !1,
        animation: !1,
        plugins: {
          legend: { display: !1 },
          title: {
            display: !0,
            text: z,
            font: { size: 14, weight: "normal", family: "Arial, sans-serif" },
            color: "#000",
            padding: { top: 10, bottom: 20 },
          },
        },
        scales: {
          x: {
            title: {
              display: !0,
              text: "Time",
              font: { size: 12, family: "Arial, sans-serif" },
              color: "#000",
            },
            grid: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 0.5 },
            ticks: { color: "#000", font: { size: 11 } },
            border: { display: !0, color: "#000", width: 1 },
          },
          y: {
            title: {
              display: !0,
              text: _,
              font: { size: 12, family: "Arial, sans-serif" },
              color: "#000",
            },
            grid: { display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 0.5 },
            ticks: { color: "#000", font: { size: 11 } },
            border: { display: !0, color: "#000", width: 1 },
          },
        },
      });
    return D.jsx("div", {
      className: "w-full max-w-7xl mx-auto p-4",
      children: D.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-5 lg:space-x-5",
        children: [
          D.jsxs("div", {
            className: "flex flex-col space-y-10 flex-1 w-full",
            children: [
              D.jsxs("div", {
                className: "flex flex-col",
                children: [
                  D.jsx("iframe", {
                    srcDoc: c,
                    title: "Generated Code",
                    className:
                      "w-full outline border-4 p-2 rounded-sm border-blue-hover",
                    style: { height: "300px" },
                  }),
                  D.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row justify-between gap-3 text-sm",
                    children: [
                      D.jsx("button", {
                        className:
                          "bg-blue-button rounded-lg px-3 py-2 hover:bg-blue-hover mt-4 sm:mt-8 w-full sm:w-auto text-black border-2 border-black",
                        onClick: W,
                        children: "Download",
                      }),
                      D.jsx("button", {
                        className:
                          "bg-blue-button rounded-lg px-3 py-2 hover:bg-blue-hover mt-4 sm:mt-8 w-full sm:w-auto text-black border-2 border-black",
                        onClick: J,
                        children: "Submit & Run",
                      }),
                    ],
                  }),
                ],
              }),
              p && D.jsx(G, {}),
              !p &&
                x &&
                m &&
                D.jsxs("div", {
                  className: "flex flex-col gap-8",
                  children: [
                    D.jsx("div", {
                      className:
                        "border-4 border-blue-hover rounded-sm p-2 sm:p-4 bg-white",
                      style: { height: "300px", minHeight: "250px" },
                      children: D.jsx(_e, {
                        data: m.process,
                        options: et(
                          `Simulated AR(${i.find((z) => z.id === "p").value}) Stochastic Process`,
                          "Value",
                        ),
                      }),
                    }),
                    D.jsx("div", {
                      className:
                        "border-4 border-blue-hover rounded-sm p-2 sm:p-4 bg-white",
                      style: { height: "300px", minHeight: "250px" },
                      children: D.jsx(_e, {
                        data: m.noise,
                        options: et("Generated White Noise", "Noise Value"),
                      }),
                    }),
                  ],
                }),
            ],
          }),
          D.jsxs("div", {
            className: "text-sm w-full lg:w-auto lg:min-w-[320px]",
            children: [
              D.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  D.jsx("p", {
                    className: "font-semibold",
                    children: "Select the input Parameters",
                  }),
                  D.jsx("div", {
                    className: "bg-blue-hover px-5 py-3 mt-2 rounded-xl w-full",
                    children: i.map((z) =>
                      D.jsxs(
                        "div",
                        {
                          className: "flex flex-col items-center mb-4",
                          children: [
                            D.jsx("label", {
                              htmlFor: z.id,
                              className: "block mb-2",
                              children: D.jsxs("pre", {
                                className: "font-serif text-xs sm:text-sm",
                                children: [
                                  D.jsxs("span", { children: [z.min, " ≤ "] }),
                                  " ",
                                  z.label,
                                  " ",
                                  D.jsxs("span", {
                                    children: [" ≤  ", z.max, " "],
                                  }),
                                ],
                              }),
                            }),
                            D.jsxs("div", {
                              className: "flex flex-row items-center w-full",
                              children: [
                                D.jsx("input", {
                                  type: "number",
                                  id: z.id,
                                  min: z.min,
                                  max: z.max,
                                  step: z.step,
                                  value: z.value,
                                  onChange: (_) =>
                                    T(z.id, parseFloat(_.target.value)),
                                  className:
                                    "w-16 text-center border border-gray-300 rounded-lg py-1 focus:outline-none focus:border-blue-500 flex-shrink-0",
                                }),
                                D.jsx("input", {
                                  type: "range",
                                  min: z.min,
                                  max: z.max,
                                  step: z.step,
                                  value: z.value,
                                  onChange: (_) =>
                                    T(z.id, parseFloat(_.target.value)),
                                  className: "flex-grow ml-2",
                                }),
                              ],
                            }),
                          ],
                        },
                        z.id,
                      ),
                    ),
                  }),
                ],
              }),
              D.jsx("div", {
                className:
                  "bg-blue-hover px-5 py-3 mt-2 rounded-xl w-full max-h-96 overflow-y-auto",
                children: a.map((z, _) =>
                  D.jsxs(
                    "div",
                    {
                      className: "flex flex-col items-center mb-4",
                      children: [
                        D.jsx("label", {
                          htmlFor: `coeff-${_}`,
                          className: "block mb-2",
                          children: D.jsxs("pre", {
                            className: "font-serif text-xs sm:text-sm",
                            children: [
                              D.jsxs("span", { children: [-1, " ≤ "] }),
                              " ",
                              `Coefficient ${_ + 1}`,
                              " ",
                              D.jsxs("span", { children: [" ≤  ", 1, " "] }),
                            ],
                          }),
                        }),
                        D.jsxs("div", {
                          className: "flex flex-row items-center w-full",
                          children: [
                            D.jsx("input", {
                              type: "number",
                              id: `coeff-${_}`,
                              min: -1,
                              max: 1,
                              step: 0.001,
                              value: z,
                              onChange: (A) => M(_, parseFloat(A.target.value)),
                              className:
                                "w-16 text-center border border-gray-300 rounded-lg py-1 focus:outline-none focus:border-blue-500 flex-shrink-0",
                            }),
                            D.jsx("input", {
                              type: "range",
                              min: -1,
                              max: 1,
                              step: 0.001,
                              value: z,
                              onChange: (A) => M(_, parseFloat(A.target.value)),
                              className: "flex-grow ml-2",
                            }),
                          ],
                        }),
                      ],
                    },
                    _,
                  ),
                ),
              }),
              D.jsx("div", {
                className: "flex flex-col w-full",
                children: D.jsx("button", {
                  onClick: X,
                  className:
                    "bg-blue-button rounded-lg px-3 py-2 hover:bg-blue-hover mt-10 w-full text-black border-2 border-black",
                  children: "Generate Code",
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  vM = () => {
    const i = br();
    return D.jsxs("div", {
      className: "flex flex-col items-center justify-center min-h-screen",
      children: [
        D.jsx("h1", {
          className: "text-4xl font-bold mb-8",
          children: "Adaptive Signal Processing",
        }),
        D.jsxs("div", {
          className: "flex gap-5",
          children: [
            D.jsx("button", {
              className:
                "px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-black font-semibold border-2 border-black",
              onClick: () => i("/lms"),
              children: "LMS",
            }),
            D.jsx("button", {
              className:
                "px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-black font-semibold border-2 border-black",
              onClick: () => i("/rls"),
              children: "RLS",
            }),
          ],
        }),
        D.jsx("h2", {
          className: "p-4 text-xl mt-8",
          children: "Which algorithm you wanna try out",
        }),
      ],
    });
  },
  xM = () =>
    D.jsxs("div", {
      className: "min-h-screen flex flex-col items-center p-20",
      children: [
        D.jsx("header", {
          className: "w-full max-w-4xl",
          children: D.jsx("h1", {
            className:
              "text-4xl sm:text-5xl font-extrabold leading-tight text-center text-gray-900 mb-60",
            children: "Adaptive Signal Processing",
          }),
        }),
        D.jsx("main", {
          className: "flex-1 flex items-start justify-center w-full mt-2",
          children: D.jsxs("div", {
            className: "w-full max-w-3xl mx-auto flex gap-5 justify-center",
            children: [
              D.jsx(ls, {
                to: "/simulation/1",
                children: D.jsx("button", {
                  className:
                    "px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-center text-black border-2 border-black min-w-[180px]",
                  children: "Stationary_LMS_RLS",
                }),
              }),
              D.jsx(ls, {
                to: "/simulation/2",
                children: D.jsx("button", {
                  className:
                    "px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-center text-black border-2 border-black min-w-[180px]",
                  children: "AutoRegressive",
                }),
              }),
              D.jsx(ls, {
                to: "/simulation/3",
                children: D.jsx("button", {
                  className:
                    "px-6 py-2 rounded-lg bg-blue-button hover:bg-blue-hover text-center text-black border-2 border-black min-w-[180px]",
                  children: "Non Stationary_LMS_RLS",
                }),
              }),
            ],
          }),
        }),
      ],
    });
Di.register(_s, Ss, As, ws, Es, Ms);
const _M = () => {
  const [i, n] = H.useState([
      {
        id: "n",
        label: "No. of iterations",
        min: 10,
        max: 1e3,
        step: 1,
        value: 500,
      },
      {
        id: "M",
        label: "Order of Filter (M)",
        min: 2,
        max: 100,
        step: 1,
        value: 10,
      },
      {
        id: "mu",
        label: "Step size (μ)",
        min: 0.001,
        max: 1,
        step: 0.001,
        value: 0.05,
      },
    ]),
    [a, s] = H.useState([]),
    [r, u] = H.useState([]),
    [c, h] = H.useState([]),
    [m, g] = H.useState([]),
    [p, b] = H.useState(!1),
    [x, S] = H.useState(""),
    T = (W, G) => {
      n((et) => et.map((z) => (z.id === W ? { ...z, value: Number(G) } : z)));
    },
    M = () => {
      let W = 0,
        G = 0;
      for (; W === 0; ) W = Math.random();
      for (; G === 0; ) G = Math.random();
      return Math.sqrt(-2 * Math.log(W)) * Math.cos(2 * Math.PI * G);
    },
    w = () => {
      if (!x) {
        alert("Please generate the code first.");
        return;
      }
      const W = i.find((tt) => tt.id === "n").value,
        G = i.find((tt) => tt.id === "M").value,
        et = i.find((tt) => tt.id === "mu").value,
        z = Array.from({ length: W }, M),
        _ = Array.from(
          { length: W },
          (tt, lt) => Math.sin(0.01 * (lt + 1)) + 0.5 * M(),
        );
      let A = Array(G).fill(0),
        j = Array(W).fill(0),
        V = Array(W).fill(0),
        K = Array.from({ length: W }, () => Array(G).fill(0));
      for (let tt = G - 1; tt < W; tt++) {
        const lt = [];
        for (let O = 0; O < G; O++) lt.push(z[tt - O]);
        ((j[tt] = A.reduce((O, Y, Q) => O + Y * lt[Q], 0)),
          (V[tt] = _[tt] - j[tt]));
        for (let O = 0; O < G; O++) A[O] = A[O] + et * lt[O] * V[tt];
        K[tt] = [...A];
      }
      const at = K.map((tt) => Math.sqrt(tt.reduce((lt, O) => lt + O * O, 0)));
      (s(_), u(j), h(V), g(at), b(!0));
    },
    N = () => {
      S(`
function randn() {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  }

  function dot(a, b) {
    return a.reduce((sum, val, i) => sum + val * b[i], 0);
  }

  function norm2(vec) {
    return Math.sqrt(vec.reduce((sum, v) => sum + v * v, 0));
  }

  /* ------------------ Signal Generation ------------------ */
  const x = Array.from({ length: n }, () => randn());

  const d = Array.from({ length: n }, (_, i) =>
    Math.sin(0.01 * (i + 1)) + 0.5 * randn()
  );

  /* ------------------ Initialization ------------------ */
  let w = Array(M).fill(0);
  const y = Array(n).fill(0);
  const e = Array(n).fill(0);
  const w_hist = Array.from({ length: n }, () => Array(M).fill(0));

  /* ------------------ LMS Algorithm ------------------ */
  for (let i = M - 1; i < n; i++) {
    const x_vec = [];
    for (let k = 0; k < M; k++) {
      x_vec.push(x[i - k]);
    }

    y[i] = dot(w, x_vec);
    e[i] = d[i] - y[i];

    for (let k = 0; k < M; k++) {
      w[k] = w[k] + mu * x_vec[k] * e[i];
    }

    w_hist[i] = [...w];
  }

  /* ------------------ Weight Norm ------------------ */
  const w_norm = w_hist.map(wi => norm2(wi));

  /* ------------------ Return Plot Data ------------------ */
  return {
    uniqueIdentifier,
    desiredSignal: d,
    lmsOutput: y,
    errorSignal: e,
    weightNorm: w_norm,
  };
}
`);
    },
    X = () => {
      if (!x) {
        alert("Please generate the code first.");
        return;
      }
      const W = new Blob([x], { type: "text/plain" }),
        G = document.createElement("a");
      ((G.href = URL.createObjectURL(W)),
        (G.download = "lms_nonstationary.m"),
        G.click());
    },
    J = (W, G) => ({
      labels: G.map((et, z) => z + 1),
      datasets: [
        {
          label: W,
          data: G,
          borderColor: "#6ec1ff",
          borderWidth: 1.5,
          pointRadius: 0,
        },
      ],
    });
  return D.jsxs("div", {
    className: "flex flex-row gap-6",
    children: [
      D.jsxs("div", {
        className: "flex flex-col space-y-4",
        children: [
          D.jsx("iframe", {
            title: "Generated Code",
            srcDoc: `<pre>${x || "Click Generate Code"}</pre>`,
            width: "800",
            height: "260",
            className: "border-4 rounded border-blue-400 p-2",
          }),
          D.jsxs("div", {
            className:
              "flex flex-col sm:flex-row justify-between gap-3 text-sm",
            children: [
              D.jsx("button", {
                onClick: N,
                className:
                  "bg-blue-button hover:bg-blue-hover text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                children: "Generate Code",
              }),
              D.jsx("button", {
                onClick: X,
                className:
                  "bg-blue-button hover:bg-blue-hover text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                children: "Download",
              }),
              D.jsx("button", {
                onClick: w,
                className:
                  "bg-blue-button hover:bg-blue-hover text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                children: "Submit & Run",
              }),
            ],
          }),
          p &&
            D.jsxs(D.Fragment, {
              children: [
                D.jsx(_e, { data: J("Desired Signal", a) }),
                D.jsx(_e, { data: J("LMS Output", r) }),
                D.jsx(_e, { data: J("Error Signal", c) }),
                D.jsx(_e, { data: J("Norm of Weight Vector", m) }),
              ],
            }),
        ],
      }),
      D.jsx("div", {
        className: "text-sm",
        children: D.jsxs("div", {
          className: "flex flex-col items-center",
          children: [
            D.jsx("p", {
              className: "font-bold",
              children: "Select the input Parameters",
            }),
            D.jsx("div", {
              className: "bg-blue-hover px-5 py-3 mt-2 rounded-xl",
              children: i.map((W) =>
                D.jsxs(
                  "div",
                  {
                    className: "flex flex-col items-center",
                    children: [
                      D.jsx("label", {
                        htmlFor: W.id,
                        className: "block mb-2",
                        children: D.jsxs("pre", {
                          className: "font-serif",
                          children: [
                            D.jsxs("span", { children: [W.min, " ≤ "] }),
                            " ",
                            W.label,
                            " ",
                            D.jsxs("span", { children: [" ≤  ", W.max, " "] }),
                          ],
                        }),
                      }),
                      D.jsxs("div", {
                        className: "flex flex-row items-center",
                        children: [
                          D.jsx("input", {
                            type: "number",
                            id: W.id,
                            min: W.min,
                            max: W.max,
                            step: W.step,
                            value: W.value,
                            onChange: (G) => T(W.id, G.target.value),
                            className:
                              "w-16 text-center border border-gray-300 rounded-lg py-1 focus:outline-none focus:border-blue-500",
                          }),
                          D.jsx("input", {
                            type: "range",
                            min: W.min,
                            max: W.max,
                            step: W.step,
                            value: W.value,
                            onChange: (G) => T(W.id, G.target.value),
                            className: "flex-grow ml-2 ",
                          }),
                        ],
                      }),
                    ],
                  },
                  W.id,
                ),
              ),
            }),
          ],
        }),
      }),
    ],
  });
};
Di.register(_s, Ss, As, ws, Es, Ms);
const SM = () => {
  const [i, n] = H.useState([
      {
        id: "forgetting-factor",
        label: "Forgetting factor (λ)",
        min: 0,
        max: 1,
        step: 1e-4,
        value: 0.99,
      },
      {
        id: "order",
        label: "Order of Filter (M)",
        min: 2,
        max: 100,
        step: 1,
        value: 4,
      },
      {
        id: "experiment",
        label: "No. of iterations",
        min: 10,
        max: 1e3,
        step: 1,
        value: 500,
      },
    ]),
    [a, s] = H.useState(""),
    [r, u] = H.useState("Code will be generated here.!"),
    [c, h] = H.useState(null),
    m = (M, w) => {
      const N = i.find((J) => J.id === M),
        X = Math.min(Math.max(w, N.min), N.max);
      n(i.map((J) => (J.id === M ? { ...J, value: X } : J)));
    },
    g = () => {
      let M = 0,
        w = 0;
      for (; M === 0; ) M = Math.random();
      for (; w === 0; ) w = Math.random();
      return Math.sqrt(-2 * Math.log(M)) * Math.cos(2 * Math.PI * w);
    },
    p = () => {
      if (!a) {
        alert("Please generate the code first.");
        return;
      }
      const M = i.find((j) => j.id === "experiment").value,
        w = i.find((j) => j.id === "forgetting-factor").value,
        N = i.find((j) => j.id === "order").value,
        X = Array.from({ length: M }, g),
        J = Array.from(
          { length: M },
          (j, V) => Math.sin(0.01 * (V + 1)) + 0.5 * g(),
        );
      let W = Array(N).fill(0),
        G = Array.from({ length: N }, (j, V) =>
          Array.from({ length: N }, (K, at) => (V === at ? 1e3 : 0)),
        ),
        et = Array(M).fill(0),
        z = Array(M).fill(0),
        _ = Array.from({ length: M }, () => Array(N).fill(0));
      for (let j = N - 1; j < M; j++) {
        const V = [];
        for (let O = 0; O < N; O++) V.push(X[j - O]);
        const K = G.map((O) => O.reduce((Y, Q, nt) => Y + Q * V[nt], 0)),
          at = w + V.reduce((O, Y, Q) => O + Y * K[Q], 0),
          tt = K.map((O) => O / at);
        ((et[j] = W.reduce((O, Y, Q) => O + Y * V[Q], 0)),
          (z[j] = J[j] - et[j]),
          (W = W.map((O, Y) => O + tt[Y] * z[j])));
        const lt = V.map((O, Y) =>
          G[Y].reduce((Q, nt, st) => Q + nt * V[st], 0),
        );
        ((G = G.map((O, Y) => O.map((Q, nt) => (Q - tt[Y] * lt[nt]) / w))),
          (_[j] = [...W]));
      }
      const A = _.map((j) => Math.sqrt(j.reduce((V, K) => V + K * K, 0)));
      h({ d: J, y: et, e: z, wNorm: A });
    },
    b = () => {
      const M = `function rls_nonstationary(n, lambda, N)

x = randn(n,1);
d = sin(0.01*(1:n)') + 0.5*randn(n,1);

w = zeros(N,1);
P = eye(N)*1000;
y = zeros(n,1);
e = zeros(n,1);
w_hist = zeros(n,N);

for i = N:n
    x_vec = x(i:-1:i-N+1);
    pi = P*x_vec;
    k = pi/(lambda + x_vec'*pi);
    y(i) = w'*x_vec;
    e(i) = d(i) - y(i);
    w = w + k*e(i);
    P = (P - k*x_vec'*P)/lambda;
    w_hist(i,:) = w';
end

figure; plot(d); hold on; plot(y);
figure; plot(e);
figure; plot(vecnorm(w_hist,2,2));
end`;
      (s(M),
        u(
          `<pre style="font-size: 0.75rem; line-height: 1.2; overflow-x: auto;">${M}</pre>`,
        ));
    },
    x = () => {
      if (!a) {
        alert("Please generate the code first.");
        return;
      }
      const M = new Blob([a], { type: "text/plain" }),
        w = document.createElement("a");
      ((w.href = URL.createObjectURL(M)),
        (w.download = "rls_nonstationary.m"),
        w.click());
    },
    S = (M, w) => ({
      labels: w.map((N, X) => X + 1),
      datasets: [
        {
          label: M,
          data: w,
          borderColor: "#6ec1ff",
          borderWidth: 1.5,
          pointRadius: 0,
        },
      ],
    }),
    T = {
      responsive: !0,
      maintainAspectRatio: !0,
      aspectRatio: 2,
      plugins: { legend: { display: !0, position: "top" } },
    };
  return D.jsxs("div", {
    className: "flex flex-col space-y-6 p-4 w-full max-w-7xl mx-auto",
    children: [
      D.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-5 w-full",
        children: [
          D.jsxs("div", {
            className: "flex flex-col flex-1 min-w-0",
            children: [
              D.jsx("iframe", {
                srcDoc: r,
                title: "Generated Code",
                className:
                  "border-4 p-2 rounded border-blue-hover w-full h-48 sm:h-56 md:h-64",
              }),
              D.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row justify-between gap-3 text-sm mt-4",
                children: [
                  D.jsx("button", {
                    className:
                      "bg-blue-button hover:bg-blue-hover text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                    onClick: x,
                    children: "Download",
                  }),
                  D.jsx("button", {
                    className:
                      "bg-blue-button hover:bg-blue-hover text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                    onClick: p,
                    children: "Submit & Run",
                  }),
                ],
              }),
            ],
          }),
          D.jsxs("div", {
            className: "flex flex-col text-sm w-full lg:w-80",
            children: [
              D.jsx("p", {
                className: "font-bold text-center mb-2",
                children: "Select the input Parameters",
              }),
              D.jsx("div", {
                className: "bg-blue-hover px-4 sm:px-5 py-4 rounded-xl",
                children: i.map((M) =>
                  D.jsxs(
                    "div",
                    {
                      className: "flex flex-col mb-4 last:mb-0",
                      children: [
                        D.jsxs("pre", {
                          className: "text-xs sm:text-sm text-center mb-1",
                          children: [M.min, " ≤ ", M.label, " ≤ ", M.max],
                        }),
                        D.jsx("input", {
                          type: "number",
                          value: M.value,
                          min: M.min,
                          max: M.max,
                          step: M.step,
                          onChange: (w) => m(M.id, parseFloat(w.target.value)),
                          className:
                            "w-24 mx-auto text-center border rounded px-2 py-1 mb-2",
                        }),
                        D.jsx("input", {
                          type: "range",
                          value: M.value,
                          min: M.min,
                          max: M.max,
                          step: M.step,
                          onChange: (w) => m(M.id, parseFloat(w.target.value)),
                          className: "w-full",
                        }),
                      ],
                    },
                    M.id,
                  ),
                ),
              }),
              D.jsx("button", {
                onClick: b,
                className:
                  "bg-blue-button px-4 py-2 rounded mt-4 hover:opacity-80 transition-opacity w-full",
                children: "Generate Code",
              }),
            ],
          }),
        ],
      }),
      c &&
        D.jsxs("div", {
          className: "space-y-6 w-full",
          children: [
            D.jsxs("div", {
              className: "bg-white p-4 rounded-lg shadow",
              children: [
                D.jsx("h3", {
                  className: "text-center font-semibold mb-2",
                  children: "Desired vs RLS Output",
                }),
                D.jsx(_e, {
                  data: S("Desired vs RLS Output", c.d),
                  options: T,
                }),
              ],
            }),
            D.jsxs("div", {
              className: "bg-white p-4 rounded-lg shadow",
              children: [
                D.jsx("h3", {
                  className: "text-center font-semibold mb-2",
                  children: "Error Signal",
                }),
                D.jsx(_e, { data: S("Error Signal", c.e), options: T }),
              ],
            }),
            D.jsxs("div", {
              className: "bg-white p-4 rounded-lg shadow",
              children: [
                D.jsx("h3", {
                  className: "text-center font-semibold mb-2",
                  children: "Norm of Weight Vector",
                }),
                D.jsx(_e, {
                  data: S("Norm of Weight Vector", c.wNorm),
                  options: T,
                }),
              ],
            }),
          ],
        }),
    ],
  });
};
var rr = { exports: {} };
var MM = rr.exports,
  i0;
function EM() {
  return (
    i0 ||
      ((i0 = 1),
      (function (i, n) {
        ((a, s) => {
          i.exports = s();
        })(MM, function a() {
          var s =
              typeof self < "u"
                ? self
                : typeof window < "u"
                  ? window
                  : s !== void 0
                    ? s
                    : {},
            r,
            u = !s.document && !!s.postMessage,
            c = s.IS_PAPA_WORKER || !1,
            h = {},
            m = 0,
            g = {};
          function p(_) {
            ((this._handle = null),
              (this._finished = !1),
              (this._completed = !1),
              (this._halted = !1),
              (this._input = null),
              (this._baseIndex = 0),
              (this._partialLine = ""),
              (this._rowCount = 0),
              (this._start = 0),
              (this._nextChunk = null),
              (this.isFirstChunk = !0),
              (this._completeResults = { data: [], errors: [], meta: {} }),
              function (A) {
                var j = G(A);
                ((j.chunkSize = parseInt(j.chunkSize)),
                  A.step || A.chunk || (j.chunkSize = null),
                  (this._handle = new M(j)),
                  ((this._handle.streamer = this)._config = j));
              }.call(this, _),
              (this.parseChunk = function (A, j) {
                var V = parseInt(this._config.skipFirstNLines) || 0;
                if (this.isFirstChunk && 0 < V) {
                  let at = this._config.newline;
                  (at ||
                    ((K = this._config.quoteChar || '"'),
                    (at = this._handle.guessLineEndings(A, K))),
                    (A = [...A.split(at).slice(V)].join(at)));
                }
                (this.isFirstChunk &&
                  z(this._config.beforeFirstChunk) &&
                  (K = this._config.beforeFirstChunk(A)) !== void 0 &&
                  (A = K),
                  (this.isFirstChunk = !1),
                  (this._halted = !1));
                var V = this._partialLine + A,
                  K =
                    ((this._partialLine = ""),
                    this._handle.parse(V, this._baseIndex, !this._finished));
                if (!this._handle.paused() && !this._handle.aborted()) {
                  if (
                    ((A = K.meta.cursor),
                    (V =
                      (this._finished ||
                        ((this._partialLine = V.substring(A - this._baseIndex)),
                        (this._baseIndex = A)),
                      K && K.data && (this._rowCount += K.data.length),
                      this._finished ||
                        (this._config.preview &&
                          this._rowCount >= this._config.preview))),
                    c)
                  )
                    s.postMessage({
                      results: K,
                      workerId: g.WORKER_ID,
                      finished: V,
                    });
                  else if (z(this._config.chunk) && !j) {
                    if (
                      (this._config.chunk(K, this._handle),
                      this._handle.paused() || this._handle.aborted())
                    )
                      return void (this._halted = !0);
                    this._completeResults = K = void 0;
                  }
                  return (
                    this._config.step ||
                      this._config.chunk ||
                      ((this._completeResults.data =
                        this._completeResults.data.concat(K.data)),
                      (this._completeResults.errors =
                        this._completeResults.errors.concat(K.errors)),
                      (this._completeResults.meta = K.meta)),
                    this._completed ||
                      !V ||
                      !z(this._config.complete) ||
                      (K && K.meta.aborted) ||
                      (this._config.complete(
                        this._completeResults,
                        this._input,
                      ),
                      (this._completed = !0)),
                    V || (K && K.meta.paused) || this._nextChunk(),
                    K
                  );
                }
                this._halted = !0;
              }),
              (this._sendError = function (A) {
                z(this._config.error)
                  ? this._config.error(A)
                  : c &&
                    this._config.error &&
                    s.postMessage({
                      workerId: g.WORKER_ID,
                      error: A,
                      finished: !1,
                    });
              }));
          }
          function b(_) {
            var A;
            ((_ = _ || {}).chunkSize || (_.chunkSize = g.RemoteChunkSize),
              p.call(this, _),
              (this._nextChunk = u
                ? function () {
                    (this._readChunk(), this._chunkLoaded());
                  }
                : function () {
                    this._readChunk();
                  }),
              (this.stream = function (j) {
                ((this._input = j), this._nextChunk());
              }),
              (this._readChunk = function () {
                if (this._finished) this._chunkLoaded();
                else {
                  if (
                    ((A = new XMLHttpRequest()),
                    this._config.withCredentials &&
                      (A.withCredentials = this._config.withCredentials),
                    u ||
                      ((A.onload = et(this._chunkLoaded, this)),
                      (A.onerror = et(this._chunkError, this))),
                    A.open(
                      this._config.downloadRequestBody ? "POST" : "GET",
                      this._input,
                      !u,
                    ),
                    this._config.downloadRequestHeaders)
                  ) {
                    var j,
                      V = this._config.downloadRequestHeaders;
                    for (j in V) A.setRequestHeader(j, V[j]);
                  }
                  var K;
                  this._config.chunkSize &&
                    ((K = this._start + this._config.chunkSize - 1),
                    A.setRequestHeader(
                      "Range",
                      "bytes=" + this._start + "-" + K,
                    ));
                  try {
                    A.send(this._config.downloadRequestBody);
                  } catch (at) {
                    this._chunkError(at.message);
                  }
                  u && A.status === 0 && this._chunkError();
                }
              }),
              (this._chunkLoaded = function () {
                A.readyState === 4 &&
                  (A.status < 200 || 400 <= A.status
                    ? this._chunkError()
                    : ((this._start +=
                        this._config.chunkSize || A.responseText.length),
                      (this._finished =
                        !this._config.chunkSize ||
                        this._start >=
                          ((j) =>
                            (j = j.getResponseHeader("Content-Range")) !== null
                              ? parseInt(j.substring(j.lastIndexOf("/") + 1))
                              : -1)(A)),
                      this.parseChunk(A.responseText)));
              }),
              (this._chunkError = function (j) {
                ((j = A.statusText || j), this._sendError(new Error(j)));
              }));
          }
          function x(_) {
            ((_ = _ || {}).chunkSize || (_.chunkSize = g.LocalChunkSize),
              p.call(this, _));
            var A,
              j,
              V = typeof FileReader < "u";
            ((this.stream = function (K) {
              ((this._input = K),
                (j = K.slice || K.webkitSlice || K.mozSlice),
                V
                  ? (((A = new FileReader()).onload = et(
                      this._chunkLoaded,
                      this,
                    )),
                    (A.onerror = et(this._chunkError, this)))
                  : (A = new FileReaderSync()),
                this._nextChunk());
            }),
              (this._nextChunk = function () {
                this._finished ||
                  (this._config.preview &&
                    !(this._rowCount < this._config.preview)) ||
                  this._readChunk();
              }),
              (this._readChunk = function () {
                var K = this._input,
                  at =
                    (this._config.chunkSize &&
                      ((at = Math.min(
                        this._start + this._config.chunkSize,
                        this._input.size,
                      )),
                      (K = j.call(K, this._start, at))),
                    A.readAsText(K, this._config.encoding));
                V || this._chunkLoaded({ target: { result: at } });
              }),
              (this._chunkLoaded = function (K) {
                ((this._start += this._config.chunkSize),
                  (this._finished =
                    !this._config.chunkSize || this._start >= this._input.size),
                  this.parseChunk(K.target.result));
              }),
              (this._chunkError = function () {
                this._sendError(A.error);
              }));
          }
          function S(_) {
            var A;
            (p.call(this, (_ = _ || {})),
              (this.stream = function (j) {
                return ((A = j), this._nextChunk());
              }),
              (this._nextChunk = function () {
                var j, V;
                if (!this._finished)
                  return (
                    (j = this._config.chunkSize),
                    (A = j
                      ? ((V = A.substring(0, j)), A.substring(j))
                      : ((V = A), "")),
                    (this._finished = !A),
                    this.parseChunk(V)
                  );
              }));
          }
          function T(_) {
            p.call(this, (_ = _ || {}));
            var A = [],
              j = !0,
              V = !1;
            ((this.pause = function () {
              (p.prototype.pause.apply(this, arguments), this._input.pause());
            }),
              (this.resume = function () {
                (p.prototype.resume.apply(this, arguments),
                  this._input.resume());
              }),
              (this.stream = function (K) {
                ((this._input = K),
                  this._input.on("data", this._streamData),
                  this._input.on("end", this._streamEnd),
                  this._input.on("error", this._streamError));
              }),
              (this._checkIsFinished = function () {
                V && A.length === 1 && (this._finished = !0);
              }),
              (this._nextChunk = function () {
                (this._checkIsFinished(),
                  A.length ? this.parseChunk(A.shift()) : (j = !0));
              }),
              (this._streamData = et(function (K) {
                try {
                  (A.push(
                    typeof K == "string"
                      ? K
                      : K.toString(this._config.encoding),
                  ),
                    j &&
                      ((j = !1),
                      this._checkIsFinished(),
                      this.parseChunk(A.shift())));
                } catch (at) {
                  this._streamError(at);
                }
              }, this)),
              (this._streamError = et(function (K) {
                (this._streamCleanUp(), this._sendError(K));
              }, this)),
              (this._streamEnd = et(function () {
                (this._streamCleanUp(), (V = !0), this._streamData(""));
              }, this)),
              (this._streamCleanUp = et(function () {
                (this._input.removeListener("data", this._streamData),
                  this._input.removeListener("end", this._streamEnd),
                  this._input.removeListener("error", this._streamError));
              }, this)));
          }
          function M(_) {
            var A,
              j,
              V,
              K,
              at = Math.pow(2, 53),
              tt = -at,
              lt = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
              O =
                /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
              Y = this,
              Q = 0,
              nt = 0,
              st = !1,
              E = !1,
              k = [],
              F = { data: [], errors: [], meta: {} };
            function it(ut) {
              return _.skipEmptyLines === "greedy"
                ? ut.join("").trim() === ""
                : ut.length === 1 && ut[0].length === 0;
            }
            function rt() {
              if (
                (F &&
                  V &&
                  (gt(
                    "Delimiter",
                    "UndetectableDelimiter",
                    "Unable to auto-detect delimiting character; defaulted to '" +
                      g.DefaultDelimiter +
                      "'",
                  ),
                  (V = !1)),
                _.skipEmptyLines &&
                  (F.data = F.data.filter(function (_t) {
                    return !it(_t);
                  })),
                ot())
              ) {
                let _t = function (Zt, St) {
                  (z(_.transformHeader) && (Zt = _.transformHeader(Zt, St)),
                    k.push(Zt));
                };
                var yt = _t;
                if (F)
                  if (Array.isArray(F.data[0])) {
                    for (var ut = 0; ot() && ut < F.data.length; ut++)
                      F.data[ut].forEach(_t);
                    F.data.splice(0, 1);
                  } else F.data.forEach(_t);
              }
              function ct(_t, Zt) {
                for (
                  var St = _.header ? {} : [], Ct = 0;
                  Ct < _t.length;
                  Ct++
                ) {
                  var ht = Ct,
                    Ht = _t[Ct],
                    Ht = ((Rt, Yt) =>
                      ((It) => (
                        _.dynamicTypingFunction &&
                          _.dynamicTyping[It] === void 0 &&
                          (_.dynamicTyping[It] = _.dynamicTypingFunction(It)),
                        (_.dynamicTyping[It] || _.dynamicTyping) === !0
                      ))(Rt)
                        ? Yt === "true" ||
                          Yt === "TRUE" ||
                          (Yt !== "false" &&
                            Yt !== "FALSE" &&
                            (((It) => {
                              if (
                                lt.test(It) &&
                                ((It = parseFloat(It)), tt < It && It < at)
                              )
                                return 1;
                            })(Yt)
                              ? parseFloat(Yt)
                              : O.test(Yt)
                                ? new Date(Yt)
                                : Yt === ""
                                  ? null
                                  : Yt))
                        : Yt)(
                      (ht = _.header
                        ? Ct >= k.length
                          ? "__parsed_extra"
                          : k[Ct]
                        : ht),
                      (Ht = _.transform ? _.transform(Ht, ht) : Ht),
                    );
                  ht === "__parsed_extra"
                    ? ((St[ht] = St[ht] || []), St[ht].push(Ht))
                    : (St[ht] = Ht);
                }
                return (
                  _.header &&
                    (Ct > k.length
                      ? gt(
                          "FieldMismatch",
                          "TooManyFields",
                          "Too many fields: expected " +
                            k.length +
                            " fields but parsed " +
                            Ct,
                          nt + Zt,
                        )
                      : Ct < k.length &&
                        gt(
                          "FieldMismatch",
                          "TooFewFields",
                          "Too few fields: expected " +
                            k.length +
                            " fields but parsed " +
                            Ct,
                          nt + Zt,
                        )),
                  St
                );
              }
              var Tt;
              F &&
                (_.header || _.dynamicTyping || _.transform) &&
                ((Tt = 1),
                !F.data.length || Array.isArray(F.data[0])
                  ? ((F.data = F.data.map(ct)), (Tt = F.data.length))
                  : (F.data = ct(F.data, 0)),
                _.header && F.meta && (F.meta.fields = k),
                (nt += Tt));
            }
            function ot() {
              return _.header && k.length === 0;
            }
            function gt(ut, ct, Tt, yt) {
              ((ut = { type: ut, code: ct, message: Tt }),
                yt !== void 0 && (ut.row = yt),
                F.errors.push(ut));
            }
            (z(_.step) &&
              ((K = _.step),
              (_.step = function (ut) {
                ((F = ut),
                  ot()
                    ? rt()
                    : (rt(),
                      F.data.length !== 0 &&
                        ((Q += ut.data.length),
                        _.preview && Q > _.preview
                          ? j.abort()
                          : ((F.data = F.data[0]), K(F, Y)))));
              })),
              (this.parse = function (ut, ct, Tt) {
                var yt = _.quoteChar || '"',
                  yt =
                    (_.newline || (_.newline = this.guessLineEndings(ut, yt)),
                    (V = !1),
                    _.delimiter
                      ? z(_.delimiter) &&
                        ((_.delimiter = _.delimiter(ut)),
                        (F.meta.delimiter = _.delimiter))
                      : ((yt = ((_t, Zt, St, Ct, ht) => {
                          var Ht, Rt, Yt, It;
                          ht = ht || [
                            ",",
                            "	",
                            "|",
                            ";",
                            g.RECORD_SEP,
                            g.UNIT_SEP,
                          ];
                          for (var yn = 0; yn < ht.length; yn++) {
                            for (
                              var Ze,
                                Ri = ht[yn],
                                Lt = 0,
                                Ke = 0,
                                ne = 0,
                                ge =
                                  ((Yt = void 0),
                                  new N({
                                    comments: Ct,
                                    delimiter: Ri,
                                    newline: Zt,
                                    preview: 10,
                                  }).parse(_t)),
                                Te = 0;
                              Te < ge.data.length;
                              Te++
                            )
                              St && it(ge.data[Te])
                                ? ne++
                                : ((Ze = ge.data[Te].length),
                                  (Ke += Ze),
                                  Yt === void 0
                                    ? (Yt = Ze)
                                    : 0 < Ze &&
                                      ((Lt += Math.abs(Ze - Yt)), (Yt = Ze)));
                            (0 < ge.data.length && (Ke /= ge.data.length - ne),
                              (Rt === void 0 || Lt <= Rt) &&
                                (It === void 0 || It < Ke) &&
                                1.99 < Ke &&
                                ((Rt = Lt), (Ht = Ri), (It = Ke)));
                          }
                          return {
                            successful: !!(_.delimiter = Ht),
                            bestDelimiter: Ht,
                          };
                        })(
                          ut,
                          _.newline,
                          _.skipEmptyLines,
                          _.comments,
                          _.delimitersToGuess,
                        )).successful
                          ? (_.delimiter = yt.bestDelimiter)
                          : ((V = !0), (_.delimiter = g.DefaultDelimiter)),
                        (F.meta.delimiter = _.delimiter)),
                    G(_));
                return (
                  _.preview && _.header && yt.preview++,
                  (A = ut),
                  (j = new N(yt)),
                  (F = j.parse(A, ct, Tt)),
                  rt(),
                  st ? { meta: { paused: !0 } } : F || { meta: { paused: !1 } }
                );
              }),
              (this.paused = function () {
                return st;
              }),
              (this.pause = function () {
                ((st = !0),
                  j.abort(),
                  (A = z(_.chunk) ? "" : A.substring(j.getCharIndex())));
              }),
              (this.resume = function () {
                Y.streamer._halted
                  ? ((st = !1), Y.streamer.parseChunk(A, !0))
                  : setTimeout(Y.resume, 3);
              }),
              (this.aborted = function () {
                return E;
              }),
              (this.abort = function () {
                ((E = !0),
                  j.abort(),
                  (F.meta.aborted = !0),
                  z(_.complete) && _.complete(F),
                  (A = ""));
              }),
              (this.guessLineEndings = function (_t, yt) {
                _t = _t.substring(0, 1048576);
                var yt = new RegExp(w(yt) + "([^]*?)" + w(yt), "gm"),
                  Tt = (_t = _t.replace(yt, "")).split("\r"),
                  yt = _t.split(`
`),
                  _t = 1 < yt.length && yt[0].length < Tt[0].length;
                if (Tt.length === 1 || _t)
                  return `
`;
                for (var Zt = 0, St = 0; St < Tt.length; St++)
                  Tt[St][0] ===
                    `
` && Zt++;
                return Zt >= Tt.length / 2
                  ? `\r
`
                  : "\r";
              }));
          }
          function w(_) {
            return _.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          }
          function N(_) {
            var A = (_ = _ || {}).delimiter,
              j = _.newline,
              V = _.comments,
              K = _.step,
              at = _.preview,
              tt = _.fastMode,
              lt = null,
              O = !1,
              Y = _.quoteChar == null ? '"' : _.quoteChar,
              Q = Y;
            if (
              (_.escapeChar !== void 0 && (Q = _.escapeChar),
              (typeof A != "string" || -1 < g.BAD_DELIMITERS.indexOf(A)) &&
                (A = ","),
              V === A)
            )
              throw new Error("Comment character same as delimiter");
            (V === !0
              ? (V = "#")
              : (typeof V != "string" || -1 < g.BAD_DELIMITERS.indexOf(V)) &&
                (V = !1),
              j !==
                `
` &&
                j !== "\r" &&
                j !==
                  `\r
` &&
                (j = `
`));
            var nt = 0,
              st = !1;
            ((this.parse = function (E, k, F) {
              if (typeof E != "string")
                throw new Error("Input must be a string");
              var it = E.length,
                rt = A.length,
                ot = j.length,
                gt = V.length,
                ut = z(K),
                ct = [],
                Tt = [],
                yt = [],
                _t = (nt = 0);
              if (!E) return Lt();
              if (tt || (tt !== !1 && E.indexOf(Y) === -1)) {
                for (var Zt = E.split(j), St = 0; St < Zt.length; St++) {
                  if (((yt = Zt[St]), (nt += yt.length), St !== Zt.length - 1))
                    nt += j.length;
                  else if (F) return Lt();
                  if (!V || yt.substring(0, gt) !== V) {
                    if (ut) {
                      if (((ct = []), It(yt.split(A)), Ke(), st)) return Lt();
                    } else It(yt.split(A));
                    if (at && at <= St) return ((ct = ct.slice(0, at)), Lt(!0));
                  }
                }
                return Lt();
              }
              for (
                var Ct = E.indexOf(A, nt),
                  ht = E.indexOf(j, nt),
                  Ht = new RegExp(w(Q) + w(Y), "g"),
                  Rt = E.indexOf(Y, nt);
                ;
              )
                if (E[nt] === Y)
                  for (Rt = nt, nt++; ; ) {
                    if ((Rt = E.indexOf(Y, Rt + 1)) === -1)
                      return (
                        F ||
                          Tt.push({
                            type: "Quotes",
                            code: "MissingQuotes",
                            message: "Quoted field unterminated",
                            row: ct.length,
                            index: nt,
                          }),
                        Ze()
                      );
                    if (Rt === it - 1)
                      return Ze(E.substring(nt, Rt).replace(Ht, Y));
                    if (Y === Q && E[Rt + 1] === Q) Rt++;
                    else if (Y === Q || Rt === 0 || E[Rt - 1] !== Q) {
                      Ct !== -1 && Ct < Rt + 1 && (Ct = E.indexOf(A, Rt + 1));
                      var Yt = yn(
                        (ht =
                          ht !== -1 && ht < Rt + 1
                            ? E.indexOf(j, Rt + 1)
                            : ht) === -1
                          ? Ct
                          : Math.min(Ct, ht),
                      );
                      if (E.substr(Rt + 1 + Yt, rt) === A) {
                        (yt.push(E.substring(nt, Rt).replace(Ht, Y)),
                          E[(nt = Rt + 1 + Yt + rt)] !== Y &&
                            (Rt = E.indexOf(Y, nt)),
                          (Ct = E.indexOf(A, nt)),
                          (ht = E.indexOf(j, nt)));
                        break;
                      }
                      if (
                        ((Yt = yn(ht)),
                        E.substring(Rt + 1 + Yt, Rt + 1 + Yt + ot) === j)
                      ) {
                        if (
                          (yt.push(E.substring(nt, Rt).replace(Ht, Y)),
                          Ri(Rt + 1 + Yt + ot),
                          (Ct = E.indexOf(A, nt)),
                          (Rt = E.indexOf(Y, nt)),
                          ut && (Ke(), st))
                        )
                          return Lt();
                        if (at && ct.length >= at) return Lt(!0);
                        break;
                      }
                      (Tt.push({
                        type: "Quotes",
                        code: "InvalidQuotes",
                        message: "Trailing quote on quoted field is malformed",
                        row: ct.length,
                        index: nt,
                      }),
                        Rt++);
                    }
                  }
                else if (
                  V &&
                  yt.length === 0 &&
                  E.substring(nt, nt + gt) === V
                ) {
                  if (ht === -1) return Lt();
                  ((nt = ht + ot),
                    (ht = E.indexOf(j, nt)),
                    (Ct = E.indexOf(A, nt)));
                } else if (Ct !== -1 && (Ct < ht || ht === -1))
                  (yt.push(E.substring(nt, Ct)),
                    (nt = Ct + rt),
                    (Ct = E.indexOf(A, nt)));
                else {
                  if (ht === -1) break;
                  if (
                    (yt.push(E.substring(nt, ht)),
                    Ri(ht + ot),
                    ut && (Ke(), st))
                  )
                    return Lt();
                  if (at && ct.length >= at) return Lt(!0);
                }
              return Ze();
              function It(ne) {
                (ct.push(ne), (_t = nt));
              }
              function yn(ne) {
                var ge = 0;
                return (ge =
                  ne !== -1 &&
                  (ne = E.substring(Rt + 1, ne)) &&
                  ne.trim() === ""
                    ? ne.length
                    : ge);
              }
              function Ze(ne) {
                return (
                  F ||
                    (ne === void 0 && (ne = E.substring(nt)),
                    yt.push(ne),
                    (nt = it),
                    It(yt),
                    ut && Ke()),
                  Lt()
                );
              }
              function Ri(ne) {
                ((nt = ne), It(yt), (yt = []), (ht = E.indexOf(j, nt)));
              }
              function Lt(ne) {
                if (_.header && !k && ct.length && !O) {
                  var ge = ct[0],
                    Te = Object.create(null),
                    tl = new Set(ge);
                  let el = !1;
                  for (let $n = 0; $n < ge.length; $n++) {
                    let We = ge[$n];
                    if (
                      Te[
                        (We = z(_.transformHeader)
                          ? _.transformHeader(We, $n)
                          : We)
                      ]
                    ) {
                      let hn,
                        Se = Te[We];
                      for (; (hn = We + "_" + Se), Se++, tl.has(hn); );
                      (tl.add(hn),
                        (ge[$n] = hn),
                        Te[We]++,
                        (el = !0),
                        ((lt = lt === null ? {} : lt)[hn] = We));
                    } else ((Te[We] = 1), (ge[$n] = We));
                    tl.add(We);
                  }
                  (el && console.warn("Duplicate headers found and renamed."),
                    (O = !0));
                }
                return {
                  data: ct,
                  errors: Tt,
                  meta: {
                    delimiter: A,
                    linebreak: j,
                    aborted: st,
                    truncated: !!ne,
                    cursor: _t + (k || 0),
                    renamedHeaders: lt,
                  },
                };
              }
              function Ke() {
                (K(Lt()), (ct = []), (Tt = []));
              }
            }),
              (this.abort = function () {
                st = !0;
              }),
              (this.getCharIndex = function () {
                return nt;
              }));
          }
          function X(_) {
            var A = _.data,
              j = h[A.workerId],
              V = !1;
            if (A.error) j.userError(A.error, A.file);
            else if (A.results && A.results.data) {
              var K = {
                abort: function () {
                  ((V = !0),
                    J(A.workerId, {
                      data: [],
                      errors: [],
                      meta: { aborted: !0 },
                    }));
                },
                pause: W,
                resume: W,
              };
              if (z(j.userStep)) {
                for (
                  var at = 0;
                  at < A.results.data.length &&
                  (j.userStep(
                    {
                      data: A.results.data[at],
                      errors: A.results.errors,
                      meta: A.results.meta,
                    },
                    K,
                  ),
                  !V);
                  at++
                );
                delete A.results;
              } else
                z(j.userChunk) &&
                  (j.userChunk(A.results, K, A.file), delete A.results);
            }
            A.finished && !V && J(A.workerId, A.results);
          }
          function J(_, A) {
            var j = h[_];
            (z(j.userComplete) && j.userComplete(A),
              j.terminate(),
              delete h[_]);
          }
          function W() {
            throw new Error("Not implemented.");
          }
          function G(_) {
            if (typeof _ != "object" || _ === null) return _;
            var A,
              j = Array.isArray(_) ? [] : {};
            for (A in _) j[A] = G(_[A]);
            return j;
          }
          function et(_, A) {
            return function () {
              _.apply(A, arguments);
            };
          }
          function z(_) {
            return typeof _ == "function";
          }
          return (
            (g.parse = function (_, A) {
              var j = (A = A || {}).dynamicTyping || !1;
              if (
                (z(j) && ((A.dynamicTypingFunction = j), (j = {})),
                (A.dynamicTyping = j),
                (A.transform = !!z(A.transform) && A.transform),
                !A.worker || !g.WORKERS_SUPPORTED)
              )
                return (
                  (j = null),
                  g.NODE_STREAM_INPUT,
                  typeof _ == "string"
                    ? ((_ = ((V) =>
                        V.charCodeAt(0) !== 65279 ? V : V.slice(1))(_)),
                      (j = new (A.download ? b : S)(A)))
                    : _.readable === !0 && z(_.read) && z(_.on)
                      ? (j = new T(A))
                      : ((s.File && _ instanceof File) ||
                          _ instanceof Object) &&
                        (j = new x(A)),
                  j.stream(_)
                );
              (((j = (() => {
                var V;
                return (
                  !!g.WORKERS_SUPPORTED &&
                  ((V = (() => {
                    var K = s.URL || s.webkitURL || null,
                      at = a.toString();
                    return (
                      g.BLOB_URL ||
                      (g.BLOB_URL = K.createObjectURL(
                        new Blob(
                          [
                            "var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
                            "(",
                            at,
                            ")();",
                          ],
                          { type: "text/javascript" },
                        ),
                      ))
                    );
                  })()),
                  ((V = new s.Worker(V)).onmessage = X),
                  (V.id = m++),
                  (h[V.id] = V))
                );
              })()).userStep = A.step),
                (j.userChunk = A.chunk),
                (j.userComplete = A.complete),
                (j.userError = A.error),
                (A.step = z(A.step)),
                (A.chunk = z(A.chunk)),
                (A.complete = z(A.complete)),
                (A.error = z(A.error)),
                delete A.worker,
                j.postMessage({ input: _, config: A, workerId: j.id }));
            }),
            (g.unparse = function (_, A) {
              var j = !1,
                V = !0,
                K = ",",
                at = `\r
`,
                tt = '"',
                lt = tt + tt,
                O = !1,
                Y = null,
                Q = !1,
                nt =
                  ((() => {
                    if (typeof A == "object") {
                      if (
                        (typeof A.delimiter != "string" ||
                          g.BAD_DELIMITERS.filter(function (k) {
                            return A.delimiter.indexOf(k) !== -1;
                          }).length ||
                          (K = A.delimiter),
                        (typeof A.quotes != "boolean" &&
                          typeof A.quotes != "function" &&
                          !Array.isArray(A.quotes)) ||
                          (j = A.quotes),
                        (typeof A.skipEmptyLines != "boolean" &&
                          typeof A.skipEmptyLines != "string") ||
                          (O = A.skipEmptyLines),
                        typeof A.newline == "string" && (at = A.newline),
                        typeof A.quoteChar == "string" && (tt = A.quoteChar),
                        typeof A.header == "boolean" && (V = A.header),
                        Array.isArray(A.columns))
                      ) {
                        if (A.columns.length === 0)
                          throw new Error("Option columns is empty");
                        Y = A.columns;
                      }
                      (A.escapeChar !== void 0 && (lt = A.escapeChar + tt),
                        A.escapeFormulae instanceof RegExp
                          ? (Q = A.escapeFormulae)
                          : typeof A.escapeFormulae == "boolean" &&
                            A.escapeFormulae &&
                            (Q = /^[=+\-@\t\r].*$/));
                    }
                  })(),
                  new RegExp(w(tt), "g"));
              if (
                (typeof _ == "string" && (_ = JSON.parse(_)), Array.isArray(_))
              ) {
                if (!_.length || Array.isArray(_[0])) return st(null, _, O);
                if (typeof _[0] == "object")
                  return st(Y || Object.keys(_[0]), _, O);
              } else if (typeof _ == "object")
                return (
                  typeof _.data == "string" && (_.data = JSON.parse(_.data)),
                  Array.isArray(_.data) &&
                    (_.fields || (_.fields = (_.meta && _.meta.fields) || Y),
                    _.fields ||
                      (_.fields = Array.isArray(_.data[0])
                        ? _.fields
                        : typeof _.data[0] == "object"
                          ? Object.keys(_.data[0])
                          : []),
                    Array.isArray(_.data[0]) ||
                      typeof _.data[0] == "object" ||
                      (_.data = [_.data])),
                  st(_.fields || [], _.data || [], O)
                );
              throw new Error("Unable to serialize unrecognized input");
              function st(k, F, it) {
                var rt = "",
                  ot =
                    (typeof k == "string" && (k = JSON.parse(k)),
                    typeof F == "string" && (F = JSON.parse(F)),
                    Array.isArray(k) && 0 < k.length),
                  gt = !Array.isArray(F[0]);
                if (ot && V) {
                  for (var ut = 0; ut < k.length; ut++)
                    (0 < ut && (rt += K), (rt += E(k[ut], ut)));
                  0 < F.length && (rt += at);
                }
                for (var ct = 0; ct < F.length; ct++) {
                  var Tt = (ot ? k : F[ct]).length,
                    yt = !1,
                    _t = ot
                      ? Object.keys(F[ct]).length === 0
                      : F[ct].length === 0;
                  if (
                    (it &&
                      !ot &&
                      (yt =
                        it === "greedy"
                          ? F[ct].join("").trim() === ""
                          : F[ct].length === 1 && F[ct][0].length === 0),
                    it === "greedy" && ot)
                  ) {
                    for (var Zt = [], St = 0; St < Tt; St++) {
                      var Ct = gt ? k[St] : St;
                      Zt.push(F[ct][Ct]);
                    }
                    yt = Zt.join("").trim() === "";
                  }
                  if (!yt) {
                    for (var ht = 0; ht < Tt; ht++) {
                      0 < ht && !_t && (rt += K);
                      var Ht = ot && gt ? k[ht] : ht;
                      rt += E(F[ct][Ht], ht);
                    }
                    ct < F.length - 1 && (!it || (0 < Tt && !_t)) && (rt += at);
                  }
                }
                return rt;
              }
              function E(k, F) {
                var it, rt;
                return k == null
                  ? ""
                  : k.constructor === Date
                    ? JSON.stringify(k).slice(1, 25)
                    : ((rt = !1),
                      Q &&
                        typeof k == "string" &&
                        Q.test(k) &&
                        ((k = "'" + k), (rt = !0)),
                      (it = k.toString().replace(nt, lt)),
                      (rt =
                        rt ||
                        j === !0 ||
                        (typeof j == "function" && j(k, F)) ||
                        (Array.isArray(j) && j[F]) ||
                        ((ot, gt) => {
                          for (var ut = 0; ut < gt.length; ut++)
                            if (-1 < ot.indexOf(gt[ut])) return !0;
                          return !1;
                        })(it, g.BAD_DELIMITERS) ||
                        -1 < it.indexOf(K) ||
                        it.charAt(0) === " " ||
                        it.charAt(it.length - 1) === " ")
                        ? tt + it + tt
                        : it);
              }
            }),
            (g.RECORD_SEP = ""),
            (g.UNIT_SEP = ""),
            (g.BYTE_ORDER_MARK = "\uFEFF"),
            (g.BAD_DELIMITERS = [
              "\r",
              `
`,
              '"',
              g.BYTE_ORDER_MARK,
            ]),
            (g.WORKERS_SUPPORTED = !u && !!s.Worker),
            (g.NODE_STREAM_INPUT = 1),
            (g.LocalChunkSize = 10485760),
            (g.RemoteChunkSize = 5242880),
            (g.DefaultDelimiter = ","),
            (g.Parser = N),
            (g.ParserHandle = M),
            (g.NetworkStreamer = b),
            (g.FileStreamer = x),
            (g.StringStreamer = S),
            (g.ReadableStreamStreamer = T),
            s.jQuery &&
              ((r = s.jQuery).fn.parse = function (_) {
                var A = _.config || {},
                  j = [];
                return (
                  this.each(function (at) {
                    if (
                      !(
                        r(this).prop("tagName").toUpperCase() === "INPUT" &&
                        r(this).attr("type").toLowerCase() === "file" &&
                        s.FileReader
                      ) ||
                      !this.files ||
                      this.files.length === 0
                    )
                      return !0;
                    for (var tt = 0; tt < this.files.length; tt++)
                      j.push({
                        file: this.files[tt],
                        inputElem: this,
                        instanceConfig: r.extend({}, A),
                      });
                  }),
                  V(),
                  this
                );
                function V() {
                  if (j.length === 0) z(_.complete) && _.complete();
                  else {
                    var at,
                      tt,
                      lt,
                      O,
                      Y = j[0];
                    if (z(_.before)) {
                      var Q = _.before(Y.file, Y.inputElem);
                      if (typeof Q == "object") {
                        if (Q.action === "abort")
                          return (
                            (at = "AbortError"),
                            (tt = Y.file),
                            (lt = Y.inputElem),
                            (O = Q.reason),
                            void (
                              z(_.error) && _.error({ name: at }, tt, lt, O)
                            )
                          );
                        if (Q.action === "skip") return void K();
                        typeof Q.config == "object" &&
                          (Y.instanceConfig = r.extend(
                            Y.instanceConfig,
                            Q.config,
                          ));
                      } else if (Q === "skip") return void K();
                    }
                    var nt = Y.instanceConfig.complete;
                    ((Y.instanceConfig.complete = function (st) {
                      (z(nt) && nt(st, Y.file, Y.inputElem), K());
                    }),
                      g.parse(Y.file, Y.instanceConfig));
                  }
                }
                function K() {
                  (j.splice(0, 1), V());
                }
              }),
            c &&
              (s.onmessage = function (_) {
                ((_ = _.data),
                  g.WORKER_ID === void 0 && _ && (g.WORKER_ID = _.workerId),
                  typeof _.input == "string"
                    ? s.postMessage({
                        workerId: g.WORKER_ID,
                        results: g.parse(_.input, _.config),
                        finished: !0,
                      })
                    : ((s.File && _.input instanceof File) ||
                        _.input instanceof Object) &&
                      (_ = g.parse(_.input, _.config)) &&
                      s.postMessage({
                        workerId: g.WORKER_ID,
                        results: _,
                        finished: !0,
                      }));
              }),
            ((b.prototype = Object.create(p.prototype)).constructor = b),
            ((x.prototype = Object.create(p.prototype)).constructor = x),
            ((S.prototype = Object.create(S.prototype)).constructor = S),
            ((T.prototype = Object.create(p.prototype)).constructor = T),
            g
          );
        });
      })(rr)),
    rr.exports
  );
}
var wM = EM();
const uy = Av(wM);
Di.register(_s, ws, As, Ss, Es, Ms);
function AM() {
  const [i, n] = H.useState([]),
    [a, s] = H.useState([]),
    [r, u] = H.useState([]),
    [c, h] = H.useState([]),
    [m, g] = H.useState(0.01),
    [p, b] = H.useState(10),
    [x, S] = H.useState("real.csv"),
    [T, M] = H.useState(""),
    [w, N] = H.useState("Code will be generated here!"),
    [X, J] = H.useState(!1),
    W = [
      { label: "Real Signal", file: "real.csv" },
      { label: "Simulated 1", file: "simulated1.csv" },
    ],
    G = async (tt) => {
      const O = await (await fetch(tt)).text();
      return uy
        .parse(O, { dynamicTyping: !0 })
        .data.flat()
        .filter((Q) => !isNaN(Q));
    },
    et = (tt, lt, O, Y = 100) => {
      const Q = tt.length,
        nt = () =>
          Math.sqrt(-2 * Math.log(Math.random())) *
          Math.cos(2 * Math.PI * Math.random()),
        st = tt.map((ot) => ot + 0.5 * nt());
      let E = Array(O).fill(0);
      for (let ot = 0; ot < Y; ot++) {
        let gt = Array(O).fill(0),
          ut = Array(O).fill(0);
        for (let ct = 0; ct < Q; ct++) {
          ut = [st[ct], ...ut.slice(0, O - 1)];
          const Tt = gt.reduce((_t, Zt, St) => _t + Zt * ut[St], 0),
            yt = tt[ct] - Tt;
          for (let _t = 0; _t < O; _t++) gt[_t] += lt * yt * ut[_t];
        }
        for (let ct = 0; ct < O; ct++) E[ct] += gt[ct];
      }
      const k = E.map((ot) => ot / Y);
      let F = [],
        it = [],
        rt = Array(O).fill(0);
      for (let ot = 0; ot < Q; ot++) {
        rt = [st[ot], ...rt.slice(0, O - 1)];
        const gt = k.reduce((ut, ct, Tt) => ut + ct * rt[Tt], 0);
        (F.push(gt), it.push(tt[ot] - gt));
      }
      return { A: st, y: F, e: it };
    },
    z = async () => {
      if (!T) {
        alert("Please generate the code first.");
        return;
      }
      J(!0);
      const tt = await G(x),
        { A: lt, y: O, e: Y } = et(tt, m, p);
      (n(tt), s(lt), u(O), h(Y), J(!1));
    },
    _ = () => {
      const tt = `// MATLAB-Equivalent LMS Denoising (Node.js)

function randn() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function lmsDenoise(mu, x, M, experiments = 100) {
  const N = x.length;
  const A = x.map(v => v + 0.5 * randn());

  let wSum = Array(M).fill(0);

  for (let exp = 0; exp < experiments; exp++) {
    let w = Array(M).fill(0);
    let An = Array(M).fill(0);

    for (let n = 0; n < N; n++) {
      An = [A[n], ...An.slice(0, M - 1)];
      const y = w.reduce((s, wi, i) => s + wi * An[i], 0);
      const e = x[n] - y;
      for (let i = 0; i < M; i++) {
        w[i] += mu * e * An[i];
      }
    }

    for (let i = 0; i < M; i++) wSum[i] += w[i];
  }

  return wSum.map(v => v / experiments);
}

module.exports = lmsDenoise;
`;
      (M(tt), N(`<pre style="font-size: 10px; overflow-x: auto;">${tt}</pre>`));
    },
    A = () => {
      if (!T) {
        alert("Please generate the code first.");
        return;
      }
      const tt = document.createElement("a"),
        lt = new Blob([T], { type: "text/plain" });
      ((tt.href = URL.createObjectURL(lt)),
        (tt.download = "lms_denoise.js"),
        document.body.appendChild(tt),
        tt.click());
    },
    j = (tt, lt) => ({
      labels: lt.map((O, Y) => Y),
      datasets: [
        {
          label: tt,
          data: lt,
          borderWidth: 1.5,
          borderColor: "#6ec1ff",
          pointRadius: 0,
          tension: 0.2,
        },
      ],
    }),
    V = { responsive: !0, maintainAspectRatio: !0, aspectRatio: 2 },
    K = [
      {
        id: "mu",
        label: "Step Size ( μ )",
        min: 0.001,
        max: 0.1,
        step: 0.001,
        value: m,
      },
      {
        id: "M",
        label: "Filter Order ( M )",
        min: 2,
        max: 50,
        step: 1,
        value: p,
      },
    ],
    at = (tt, lt) => {
      const O = Number(lt);
      (tt === "mu" && g(O), tt === "M" && b(O));
    };
  return D.jsx("div", {
    className: "min-h-screen w-full p-4 md:p-6 bg-gray-50",
    children: D.jsx("div", {
      className: "max-w-7xl mx-auto",
      children: D.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-6",
        children: [
          D.jsxs("div", {
            className: "flex-1 flex flex-col space-y-4",
            children: [
              D.jsx("div", {
                className: "w-full overflow-hidden",
                children: D.jsx("iframe", {
                  srcDoc: w,
                  title: "Generated Code",
                  className:
                    "w-full h-48 sm:h-60 md:h-64 border-4 rounded border-blue-400 p-2",
                }),
              }),
              D.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between",
                children: [
                  D.jsx("button", {
                    onClick: _,
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                    children: "Generate Code",
                  }),
                  D.jsx("button", {
                    onClick: A,
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                    children: "Download",
                  }),
                  D.jsx("button", {
                    onClick: z,
                    disabled: X,
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded transition-colors w-full sm:w-auto disabled:opacity-50 border-2 border-black",
                    children: X ? "Processing..." : "Submit & Run",
                  }),
                ],
              }),
              !X &&
                i.length > 0 &&
                D.jsxs("div", {
                  className: "grid grid-cols-1 gap-4",
                  children: [
                    D.jsx("div", {
                      className: "bg-white p-4 rounded-lg shadow",
                      children: D.jsx(_e, {
                        data: j("Desired Signal", i),
                        options: V,
                      }),
                    }),
                    D.jsx("div", {
                      className: "bg-white p-4 rounded-lg shadow",
                      children: D.jsx(_e, {
                        data: j("Noisy Signal", a),
                        options: V,
                      }),
                    }),
                    D.jsx("div", {
                      className: "bg-white p-4 rounded-lg shadow",
                      children: D.jsx(_e, {
                        data: j("LMS Output", r),
                        options: V,
                      }),
                    }),
                    D.jsx("div", {
                      className: "bg-white p-4 rounded-lg shadow",
                      children: D.jsx(_e, {
                        data: j("LMS Error", c),
                        options: V,
                      }),
                    }),
                  ],
                }),
            ],
          }),
          D.jsx("div", {
            className: "w-full lg:w-80 xl:w-96",
            children: D.jsx("div", {
              className:
                "bg-white rounded-lg shadow-lg p-4 sm:p-6 sticky top-4",
              children: D.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  D.jsx("h2", {
                    className:
                      "font-bold text-base sm:text-lg mb-4 text-center",
                    children: "Select the Input Parameters",
                  }),
                  D.jsxs("div", {
                    className: "w-full mb-6",
                    children: [
                      D.jsx("label", {
                        className:
                          "block font-semibold mb-2 text-sm sm:text-base text-center",
                        children: "Select CSV file",
                      }),
                      D.jsx("select", {
                        value: x,
                        onChange: (tt) => S(tt.target.value),
                        className:
                          "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                        children: W.map((tt, lt) =>
                          D.jsx(
                            "option",
                            { value: tt.file, children: tt.label },
                            lt,
                          ),
                        ),
                      }),
                    ],
                  }),
                  D.jsx("div", {
                    className:
                      "bg-blue-50 px-4 sm:px-6 py-4 sm:py-5 rounded-xl w-full",
                    children: K.map((tt, lt) =>
                      D.jsxs(
                        "div",
                        {
                          className: `flex flex-col ${lt !== K.length - 1 ? "mb-6" : ""}`,
                          children: [
                            D.jsx("label", {
                              htmlFor: tt.id,
                              className: "block mb-2 text-center",
                              children: D.jsxs("span", {
                                className: "font-serif text-sm sm:text-base",
                                children: [
                                  D.jsxs("span", { children: [tt.min, " ≤ "] }),
                                  tt.label,
                                  D.jsxs("span", { children: [" ≤ ", tt.max] }),
                                ],
                              }),
                            }),
                            D.jsxs("div", {
                              className:
                                "flex flex-row items-center gap-2 sm:gap-3",
                              children: [
                                D.jsx("input", {
                                  type: "number",
                                  id: tt.id,
                                  min: tt.min,
                                  max: tt.max,
                                  step: tt.step,
                                  value: tt.value,
                                  onChange: (O) => at(tt.id, O.target.value),
                                  className:
                                    "w-16 sm:w-20 text-center border border-gray-300 rounded-lg py-1 px-1 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                                }),
                                D.jsx("input", {
                                  type: "range",
                                  min: tt.min,
                                  max: tt.max,
                                  step: tt.step,
                                  value: tt.value,
                                  onChange: (O) => at(tt.id, O.target.value),
                                  className: "flex-grow cursor-pointer",
                                }),
                              ],
                            }),
                          ],
                        },
                        tt.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
Di.register(_s, ws, As, Ss, Es, Ms);
function TM() {
  const [i, n] = H.useState("simulated1.csv"),
    [a, s] = H.useState([
      {
        id: "lambda",
        label: "Forgetting factor",
        min: 0.001,
        max: 1,
        step: 0.001,
        value: 0.98,
      },
      { id: "M", label: "Filter length", min: 2, max: 50, step: 1, value: 5 },
    ]),
    [r, u] = H.useState(""),
    [c, h] = H.useState("Code will be generated here.!"),
    [m, g] = H.useState(!1),
    [p, b] = H.useState(!1),
    [x, S] = H.useState([]),
    [T, M] = H.useState([]),
    [w, N] = H.useState([]),
    [X, J] = H.useState([]),
    W = [
      { name: "simulated.csv", file: "simulated1.csv" },
      { name: "real.csv", file: "real.csv" },
    ],
    G = (Q) => Array.from({ length: Q }, () => Array(Q).fill(0)),
    et = (Q) => Array(Q).fill(0),
    z = (Q, nt) => Q.reduce((st, E, k) => st + E * nt[k], 0),
    _ = (Q, nt) => Q.map((st) => z(st, nt)),
    A = () =>
      Math.sqrt(-2 * Math.log(Math.random())) *
      Math.cos(2 * Math.PI * Math.random()),
    j = async (Q) => {
      const st = await (await fetch(`Inputs/${Q}`)).text();
      return uy
        .parse(st, { dynamicTyping: !0 })
        .data.flat()
        .map(Number)
        .filter((k) => !isNaN(k));
    },
    V = (Q, nt, st) => {
      const k = nt.length,
        F = nt.map((ut) => ut + 0.5 * A());
      let it = G(st);
      for (let ut = 0; ut < st; ut++) it[ut][ut] = 1 / 0.001;
      let rt = et(st);
      const ot = et(k),
        gt = et(k);
      for (let ut = 0; ut < k; ut++) {
        const ct = [];
        for (let ht = 0; ht < st; ht++) ct.push(ut - ht >= 0 ? F[ut - ht] : 0);
        const Tt = _(it, ct),
          yt = Q + z(ct, Tt),
          _t = Tt.map((ht) => ht / yt),
          Zt = z(rt, ct),
          St = nt[ut] - Zt;
        for (let ht = 0; ht < st; ht++) rt[ht] += _t[ht] * St;
        const Ct = Array(st).fill(0);
        for (let ht = 0; ht < st; ht++)
          for (let Ht = 0; Ht < st; Ht++) Ct[ht] += ct[Ht] * it[Ht][ht];
        for (let ht = 0; ht < st; ht++)
          for (let Ht = 0; Ht < st; Ht++)
            it[ht][Ht] = (it[ht][Ht] - _t[ht] * Ct[Ht]) / Q;
        ((ot[ut] = z(rt, ct)), (gt[ut] = St));
      }
      return { desired: nt, noisy: F, output: ot, error: gt };
    },
    K = async () => {
      if (!r) {
        alert("Please generate the code first.");
        return;
      }
      (g(!0), b(!1));
      const Q = await j(i),
        nt = a.find((k) => k.id === "lambda").value,
        st = a.find((k) => k.id === "M").value,
        E = V(nt, Q, st);
      (S(E.desired), M(E.noisy), N(E.output), J(E.error), b(!0), g(!1));
    },
    at = () => {
      const Q = `
import Papa from "papaparse";

export async function rlsDenoise(lambda, inputFile, M) {
  const delta = 1e-3;
  const fs = 100;

  // ===== Read CSV =====
  const csvData = await new Promise((resolve, reject) => {
    Papa.parse(inputFile, {
      dynamicTyping: true,
      complete: (results) => resolve(results.data.flat().filter(v => typeof v === "number")),
      error: reject
    });
  });

  const x = csvData;
  const n = x.length;

  // ===== Initialize =====
  let P = Array.from({ length: M }, (_, i) =>
    Array.from({ length: M }, (_, j) => (i === j ? 1 / delta : 0))
  );

  let w_rls = Array(M).fill(0);
  const D = [...x];
  const A = D.map(v => v + 0.5 * randn());

  const B_rls = Array(n).fill(0);
  const Err_rls = Array(n).fill(0);
  const weights_rls = Array.from({ length: M }, () => Array(n).fill(0));

  const A_padded = Array(M - 1).fill(0).concat(A);
  const t = Array.from({ length: n }, (_, i) => i / fs);

  // ===== RLS Loop =====
  for (let i = M - 1; i < n; i++) {
    const A_i = [];
    for (let k = 0; k < M; k++) {
      A_i.push(A_padded[i + M - 1 - k]);
    }

    const PA = matVecMul(P, A_i);
    const denom = lambda + dot(A_i, PA);
    const k_vec = PA.map(v => v / denom);

    const y_rls = dot(w_rls, A_i);
    Err_rls[i] = D[i] - y_rls;

    w_rls = w_rls.map((w, idx) => w + k_vec[idx] * Err_rls[i]);
    for (let r = 0; r < M; r++) weights_rls[r][i] = w_rls[r];

    const outer = outerProduct(k_vec, A_i);
    P = matScale(matSub(P, matMul(outer, P)), 1 / lambda);

    for (let d = 0; d < M; d++) {
      if (P[d][d] < 1e-10) P[d][d] = 1e-10;
    }

    B_rls[i] = dot(w_rls, A_i);
  }

  return {
    time: t,
    desired: D,
    noisy: A,
    output: B_rls,
    error: Err_rls
  };
}

/* ================= Helper Functions ================= */
function randn() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function dot(a, b) { return a.reduce((sum, v, i) => sum + v * b[i], 0); }
function matVecMul(M, v) { return M.map(row => dot(row, v)); }
function matMul(A, B) { return A.map(row => B[0].map((_, j) => row.reduce((s, v, i) => s + v * B[i][j], 0))); }
function matSub(A, B) { return A.map((row, i) => row.map((v, j) => v - B[i][j])); }
function matScale(A, s) { return A.map(row => row.map(v => v * s)); }
function outerProduct(a, b) { return a.map(ai => b.map(bj => ai * bj)); }
  `;
      (u(Q), h(`<pre style="font-size: 10px; overflow-x: auto;">${Q}</pre>`));
    },
    tt = () => {
      if (!r) {
        alert("Please generate the code first.");
        return;
      }
      const Q = document.createElement("a");
      ((Q.href = URL.createObjectURL(new Blob([r]))),
        (Q.download = "rls.js"),
        Q.click());
    },
    lt = "#43a6ecff",
    O = (Q, nt, st) => ({
      labels: nt.map((E, k) => k),
      datasets: [
        {
          label: Q,
          data: nt,
          borderColor: st,
          borderWidth: 1.5,
          pointRadius: 0,
        },
      ],
    }),
    Y = { responsive: !0, maintainAspectRatio: !0, aspectRatio: 2 };
  return D.jsx("div", {
    className: "min-h-screen w-full p-4 md:p-6 bg-gray-50",
    children: D.jsx("div", {
      className: "max-w-7xl mx-auto",
      children: D.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-6",
        children: [
          D.jsxs("div", {
            className: "flex-1 flex flex-col space-y-4",
            children: [
              D.jsx("div", {
                className: "w-full overflow-hidden",
                children: D.jsx("iframe", {
                  srcDoc: c,
                  title: "Generated Code",
                  className:
                    "w-full h-48 sm:h-60 md:h-64 border-4 rounded border-blue-400 p-2",
                }),
              }),
              D.jsxs("div", {
                className:
                  "flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between",
                children: [
                  D.jsx("button", {
                    onClick: at,
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                    children: "Generate Code",
                  }),
                  D.jsx("button", {
                    onClick: tt,
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded transition-colors w-full sm:w-auto border-2 border-black",
                    children: "Download",
                  }),
                  D.jsx("button", {
                    onClick: K,
                    disabled: m,
                    className:
                      "bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded transition-colors w-full sm:w-auto disabled:opacity-50 border-2 border-black",
                    children: m ? "Processing..." : "Submit & Run",
                  }),
                ],
              }),
              p &&
                D.jsxs("div", {
                  className: "grid grid-cols-1 gap-4",
                  children: [
                    D.jsx("div", {
                      className: "bg-white p-4 rounded-lg shadow",
                      children: D.jsx(_e, {
                        data: O("Desired", x, lt),
                        options: Y,
                      }),
                    }),
                    D.jsx("div", {
                      className: "bg-white p-4 rounded-lg shadow",
                      children: D.jsx(_e, {
                        data: O("Noisy", T, lt),
                        options: Y,
                      }),
                    }),
                    D.jsx("div", {
                      className: "bg-white p-4 rounded-lg shadow",
                      children: D.jsx(_e, {
                        data: O("RLS Output", w, lt),
                        options: Y,
                      }),
                    }),
                    D.jsx("div", {
                      className: "bg-white p-4 rounded-lg shadow",
                      children: D.jsx(_e, {
                        data: O("Error", X, lt),
                        options: Y,
                      }),
                    }),
                  ],
                }),
            ],
          }),
          D.jsx("div", {
            className: "w-full lg:w-80 xl:w-96",
            children: D.jsx("div", {
              className:
                "bg-white rounded-lg shadow-lg p-4 sm:p-6 sticky top-4",
              children: D.jsxs("div", {
                className: "flex flex-col items-center",
                children: [
                  D.jsx("h2", {
                    className:
                      "font-bold text-base sm:text-lg mb-4 text-center",
                    children: "Select the Input Parameters",
                  }),
                  D.jsxs("div", {
                    className: "w-full mb-6",
                    children: [
                      D.jsx("label", {
                        className:
                          "block font-semibold mb-2 text-sm sm:text-base text-center",
                        children: "Select CSV file of Input",
                      }),
                      D.jsx("select", {
                        value: i,
                        onChange: (Q) => n(Q.target.value),
                        className:
                          "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                        children: W.map((Q, nt) =>
                          D.jsx(
                            "option",
                            { value: Q.file, children: Q.name },
                            nt,
                          ),
                        ),
                      }),
                    ],
                  }),
                  D.jsx("div", {
                    className:
                      "bg-blue-50 px-4 sm:px-6 py-4 sm:py-5 rounded-xl w-full",
                    children: a.map((Q, nt) =>
                      D.jsxs(
                        "div",
                        {
                          className: `flex flex-col ${nt !== a.length - 1 ? "mb-6" : ""}`,
                          children: [
                            D.jsx("label", {
                              htmlFor: Q.id,
                              className: "block mb-2 text-center",
                              children: D.jsxs("span", {
                                className: "font-serif text-sm sm:text-base",
                                children: [
                                  D.jsxs("span", { children: [Q.min, " ≤ "] }),
                                  Q.label,
                                  D.jsxs("span", { children: [" ≤ ", Q.max] }),
                                ],
                              }),
                            }),
                            D.jsxs("div", {
                              className:
                                "flex flex-row items-center gap-2 sm:gap-3",
                              children: [
                                D.jsx("input", {
                                  type: "number",
                                  id: Q.id,
                                  min: Q.min,
                                  max: Q.max,
                                  step: Q.step,
                                  value: Q.value,
                                  onChange: (st) =>
                                    s((E) =>
                                      E.map((k) =>
                                        k.id === Q.id
                                          ? { ...k, value: +st.target.value }
                                          : k,
                                      ),
                                    ),
                                  className:
                                    "w-16 sm:w-20 text-center border border-gray-300 rounded-lg py-1 px-1 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
                                }),
                                D.jsx("input", {
                                  type: "range",
                                  min: Q.min,
                                  max: Q.max,
                                  step: Q.step,
                                  value: Q.value,
                                  onChange: (st) =>
                                    s((E) =>
                                      E.map((k) =>
                                        k.id === Q.id
                                          ? { ...k, value: +st.target.value }
                                          : k,
                                      ),
                                    ),
                                  className: "flex-grow cursor-pointer",
                                }),
                              ],
                            }),
                          ],
                        },
                        Q.id,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
const CM = () =>
  D.jsx(a_, {
    children: D.jsxs(jx, {
      children: [
        D.jsx(Mn, { path: "/", element: D.jsx(zx, { to: "/simulation" }) }),
        D.jsx(Mn, { path: "/simulation", element: D.jsx(xM, {}) }),
        D.jsx(Mn, { path: "/simulation/1", element: D.jsx(vM, {}) }),
        D.jsx(Mn, { path: "/simulation/2", element: D.jsx(bM, {}) }),
        D.jsx(Mn, { path: "/simulation/3", element: D.jsx(m_, {}) }),
        D.jsx(Mn, { path: "/lmsst", element: D.jsx(_M, {}) }),
        D.jsx(Mn, { path: "/rlsst", element: D.jsx(SM, {}) }),
        D.jsx(Mn, { path: "/lms", element: D.jsx(AM, {}) }),
        D.jsx(Mn, { path: "/rls", element: D.jsx(TM, {}) }),
      ],
    }),
  });
Lv.createRoot(document.getElementById("root")).render(
  D.jsx(H.StrictMode, { children: D.jsx(CM, {}) }),
);
