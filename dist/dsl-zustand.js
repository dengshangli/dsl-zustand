import x from "react";
var D = function() {
  return D = Object.assign || function(u) {
    for (var a, d = 1, h = arguments.length; d < h; d++) {
      a = arguments[d];
      for (var l in a)
        Object.prototype.hasOwnProperty.call(a, l) && (u[l] = a[l]);
    }
    return u;
  }, D.apply(this, arguments);
};
var N = { exports: {} }, W = {}, A = { exports: {} }, j = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b;
function k() {
  if (b)
    return j;
  b = 1;
  var e = x;
  function u(t, o) {
    return t === o && (t !== 0 || 1 / t === 1 / o) || t !== t && o !== o;
  }
  var a = typeof Object.is == "function" ? Object.is : u, d = e.useState, h = e.useEffect, l = e.useLayoutEffect, y = e.useDebugValue;
  function L(t, o) {
    var c = o(), v = d({ inst: { value: c, getSnapshot: o } }), s = v[0].inst, S = v[1];
    return l(function() {
      s.value = c, s.getSnapshot = o, g(s) && S({ inst: s });
    }, [t, c, o]), h(function() {
      return g(s) && S({ inst: s }), t(function() {
        g(s) && S({ inst: s });
      });
    }, [t]), y(c), c;
  }
  function g(t) {
    var o = t.getSnapshot;
    t = t.value;
    try {
      var c = o();
      return !a(t, c);
    } catch {
      return !0;
    }
  }
  function O(t, o) {
    return o();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? O : L;
  return j.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f, j;
}
var H = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function P() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = x, u = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function a(i) {
      {
        for (var r = arguments.length, p = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          p[n - 1] = arguments[n];
        d("error", i, p);
      }
    }
    function d(i, r, p) {
      {
        var n = u.ReactDebugCurrentFrame, _ = n.getStackAddendum();
        _ !== "" && (r += "%s", p = p.concat([_]));
        var m = p.map(function(E) {
          return String(E);
        });
        m.unshift("Warning: " + r), Function.prototype.apply.call(console[i], console, m);
      }
    }
    function h(i, r) {
      return i === r && (i !== 0 || 1 / i === 1 / r) || i !== i && r !== r;
    }
    var l = typeof Object.is == "function" ? Object.is : h, y = e.useState, L = e.useEffect, g = e.useLayoutEffect, O = e.useDebugValue, f = !1, t = !1;
    function o(i, r, p) {
      f || e.startTransition !== void 0 && (f = !0, a("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var n = r();
      if (!t) {
        var _ = r();
        l(n, _) || (a("The result of getSnapshot should be cached to avoid an infinite loop"), t = !0);
      }
      var m = y({
        inst: {
          value: n,
          getSnapshot: r
        }
      }), E = m[0].inst, V = m[1];
      return g(function() {
        E.value = n, E.getSnapshot = r, c(E) && V({
          inst: E
        });
      }, [i, n, r]), L(function() {
        c(E) && V({
          inst: E
        });
        var I = function() {
          c(E) && V({
            inst: E
          });
        };
        return i(I);
      }, [i]), O(n), n;
    }
    function c(i) {
      var r = i.getSnapshot, p = i.value;
      try {
        var n = r();
        return !l(p, n);
      } catch {
        return !0;
      }
    }
    function v(i, r, p) {
      return r();
    }
    var s = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", S = !s, R = S ? v : o, T = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : R;
    H.useSyncExternalStore = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), H;
}
var q;
function F() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? A.exports = k() : A.exports = P()), A.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function J() {
  if ($)
    return W;
  $ = 1;
  var e = x, u = F();
  function a(O, f) {
    return O === f && (O !== 0 || 1 / O === 1 / f) || O !== O && f !== f;
  }
  var d = typeof Object.is == "function" ? Object.is : a, h = u.useSyncExternalStore, l = e.useRef, y = e.useEffect, L = e.useMemo, g = e.useDebugValue;
  return W.useSyncExternalStoreWithSelector = function(O, f, t, o, c) {
    var v = l(null);
    if (v.current === null) {
      var s = { hasValue: !1, value: null };
      v.current = s;
    } else
      s = v.current;
    v = L(function() {
      function R(n) {
        if (!T) {
          if (T = !0, i = n, n = o(n), c !== void 0 && s.hasValue) {
            var _ = s.value;
            if (c(_, n))
              return r = _;
          }
          return r = n;
        }
        if (_ = r, d(i, n))
          return _;
        var m = o(n);
        return c !== void 0 && c(_, m) ? _ : (i = n, r = m);
      }
      var T = !1, i, r, p = t === void 0 ? null : t;
      return [function() {
        return R(f());
      }, p === null ? void 0 : function() {
        return R(p());
      }];
    }, [f, t, o, c]);
    var S = h(O, v[0], v[1]);
    return y(function() {
      s.hasValue = !0, s.value = S;
    }, [S]), g(S), S;
  }, W;
}
var K = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z;
function Q() {
  return z || (z = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = x, u = F();
    function a(f, t) {
      return f === t && (f !== 0 || 1 / f === 1 / t) || f !== f && t !== t;
    }
    var d = typeof Object.is == "function" ? Object.is : a, h = u.useSyncExternalStore, l = e.useRef, y = e.useEffect, L = e.useMemo, g = e.useDebugValue;
    function O(f, t, o, c, v) {
      var s = l(null), S;
      s.current === null ? (S = {
        hasValue: !1,
        value: null
      }, s.current = S) : S = s.current;
      var R = L(function() {
        var p = !1, n, _, m = function(w) {
          if (!p) {
            p = !0, n = w;
            var C = c(w);
            if (v !== void 0 && S.hasValue) {
              var G = S.value;
              if (v(G, C))
                return _ = G, G;
            }
            return _ = C, C;
          }
          var Y = n, B = _;
          if (d(Y, w))
            return B;
          var M = c(w);
          return v !== void 0 && v(B, M) ? B : (n = w, _ = M, M);
        }, E = o === void 0 ? null : o, V = function() {
          return m(t());
        }, I = E === null ? void 0 : function() {
          return m(E());
        };
        return [V, I];
      }, [t, o, c, v]), T = R[0], i = R[1], r = h(f, T, i);
      return y(function() {
        S.hasValue = !0, S.value = r;
      }, [r]), g(r), r;
    }
    K.useSyncExternalStoreWithSelector = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), K;
}
process.env.NODE_ENV === "production" ? N.exports = J() : N.exports = Q();
var X = N.exports, te = function() {
  console.log("hello dengshangli");
}, Z = function(e) {
  var u = {}, a = /* @__PURE__ */ new Set(), d = function(l) {
    if (!Object.is(l, u)) {
      var y = u;
      u = D(D({}, u), l), a.forEach(function(L) {
        return L(u, y);
      });
    }
  };
  u = e(d);
  var h = u;
  return {
    getState: function() {
      return u;
    },
    setState: d,
    getInitialState: function() {
      return h;
    },
    subscribe: function(l) {
      return a.add(l), function() {
        return a.delete(l);
      };
    },
    destroy: function() {
      a.clear();
    }
  };
}, ee = function(e, u) {
  var a = X.useSyncExternalStoreWithSelector(e.subscribe, e.getState, e.getInitialState, u);
  return a;
}, ne = function(e) {
  var u = Z(e), a = function(d) {
    return ee(u, d);
  };
  return a;
};
export {
  ne as create,
  te as hello
};
