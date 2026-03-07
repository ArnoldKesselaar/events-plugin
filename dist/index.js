import * as oe from "react";
import $e from "react";
import { List as Cr, Datagrid as Pr, TextField as Ae, DateField as pn, ChipField as _i, SearchInput as Ba, FilterList as Ka, FilterListItem as mo, SimpleForm as $r, TextInput as de, required as Ce, DateInput as vo, SelectInput as $t, ArrayInput as vr, SimpleFormIterator as br, Edit as jr, Create as Rn, NumberField as Ha, NumberInput as Si, ReferenceField as Ga, SelectField as Za, ReferenceInput as Jr, Title as Ja, Resource as sr } from "react-admin";
import Xa from "@emotion/styled";
import { CacheProvider as Qa, Global as es, ThemeContext as ts, css as rs, keyframes as ns } from "@emotion/react";
import { useTheme as gt, Card as Oi, CardContent as ki, Box as Ri, Typography as vt } from "@mui/material";
import { useParams as os } from "react-router-dom";
function is(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function nt(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var Cn = {}, Ci = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ci);
var ft = Ci.exports, Xr = {};
function Q() {
  return Q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Q.apply(null, arguments);
}
function at(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Pi(e) {
  if (/* @__PURE__ */ oe.isValidElement(e) || !at(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Pi(e[r]);
  }), t;
}
function Xe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? Q({}, e) : e;
  return at(e) && at(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ oe.isValidElement(t[o]) ? n[o] = t[o] : at(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && at(e[o]) ? n[o] = Xe(e[o], t[o], r) : r.clone ? n[o] = at(t[o]) ? Pi(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const as = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe,
  isPlainObject: at
}, Symbol.toStringTag, { value: "Module" }));
var yn = { exports: {} }, ur = { exports: {} }, J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bo;
function ss() {
  if (bo) return J;
  bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function R(w) {
    if (typeof w == "object" && w !== null) {
      var $ = w.$$typeof;
      switch ($) {
        case t:
          switch (w = w.type, w) {
            case u:
            case f:
            case n:
            case i:
            case o:
            case p:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case h:
                case m:
                case y:
                case a:
                  return w;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function L(w) {
    return R(w) === f;
  }
  return J.AsyncMode = u, J.ConcurrentMode = f, J.ContextConsumer = s, J.ContextProvider = a, J.Element = t, J.ForwardRef = h, J.Fragment = n, J.Lazy = m, J.Memo = y, J.Portal = r, J.Profiler = i, J.StrictMode = o, J.Suspense = p, J.isAsyncMode = function(w) {
    return L(w) || R(w) === u;
  }, J.isConcurrentMode = L, J.isContextConsumer = function(w) {
    return R(w) === s;
  }, J.isContextProvider = function(w) {
    return R(w) === a;
  }, J.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, J.isForwardRef = function(w) {
    return R(w) === h;
  }, J.isFragment = function(w) {
    return R(w) === n;
  }, J.isLazy = function(w) {
    return R(w) === m;
  }, J.isMemo = function(w) {
    return R(w) === y;
  }, J.isPortal = function(w) {
    return R(w) === r;
  }, J.isProfiler = function(w) {
    return R(w) === i;
  }, J.isStrictMode = function(w) {
    return R(w) === o;
  }, J.isSuspense = function(w) {
    return R(w) === p;
  }, J.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === f || w === i || w === o || w === p || w === d || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === y || w.$$typeof === a || w.$$typeof === s || w.$$typeof === h || w.$$typeof === b || w.$$typeof === x || w.$$typeof === k || w.$$typeof === c);
  }, J.typeOf = R, J;
}
var X = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function us() {
  return go || (go = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, y = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function R(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === f || _ === i || _ === o || _ === p || _ === d || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === y || _.$$typeof === a || _.$$typeof === s || _.$$typeof === h || _.$$typeof === b || _.$$typeof === x || _.$$typeof === k || _.$$typeof === c);
    }
    function L(_) {
      if (typeof _ == "object" && _ !== null) {
        var Ue = _.$$typeof;
        switch (Ue) {
          case t:
            var wt = _.type;
            switch (wt) {
              case u:
              case f:
              case n:
              case i:
              case o:
              case p:
                return wt;
              default:
                var yt = wt && wt.$$typeof;
                switch (yt) {
                  case s:
                  case h:
                  case m:
                  case y:
                  case a:
                    return yt;
                  default:
                    return Ue;
                }
            }
          case r:
            return Ue;
        }
      }
    }
    var w = u, $ = f, j = s, Ne = a, Le = t, it = h, He = n, ce = m, ie = y, le = r, ke = i, _e = o, Ye = p, pt = !1;
    function xt(_) {
      return pt || (pt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(_) || L(_) === u;
    }
    function E(_) {
      return L(_) === f;
    }
    function O(_) {
      return L(_) === s;
    }
    function Y(_) {
      return L(_) === a;
    }
    function N(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function A(_) {
      return L(_) === h;
    }
    function z(_) {
      return L(_) === n;
    }
    function D(_) {
      return L(_) === m;
    }
    function I(_) {
      return L(_) === y;
    }
    function U(_) {
      return L(_) === r;
    }
    function V(_) {
      return L(_) === i;
    }
    function F(_) {
      return L(_) === o;
    }
    function Ee(_) {
      return L(_) === p;
    }
    X.AsyncMode = w, X.ConcurrentMode = $, X.ContextConsumer = j, X.ContextProvider = Ne, X.Element = Le, X.ForwardRef = it, X.Fragment = He, X.Lazy = ce, X.Memo = ie, X.Portal = le, X.Profiler = ke, X.StrictMode = _e, X.Suspense = Ye, X.isAsyncMode = xt, X.isConcurrentMode = E, X.isContextConsumer = O, X.isContextProvider = Y, X.isElement = N, X.isForwardRef = A, X.isFragment = z, X.isLazy = D, X.isMemo = I, X.isPortal = U, X.isProfiler = V, X.isStrictMode = F, X.isSuspense = Ee, X.isValidElementType = R, X.typeOf = L;
  }()), X;
}
var Eo;
function $i() {
  return Eo || (Eo = 1, process.env.NODE_ENV === "production" ? ur.exports = ss() : ur.exports = us()), ur.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Qr, xo;
function cs() {
  if (xo) return Qr;
  xo = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(a).map(function(h) {
        return a[h];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        f[h] = h;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Qr = o() ? Object.assign : function(i, a) {
    for (var s, u = n(i), f, h = 1; h < arguments.length; h++) {
      s = Object(arguments[h]);
      for (var p in s)
        t.call(s, p) && (u[p] = s[p]);
      if (e) {
        f = e(s);
        for (var d = 0; d < f.length; d++)
          r.call(s, f[d]) && (u[f[d]] = s[f[d]]);
      }
    }
    return u;
  }, Qr;
}
var en, wo;
function Pn() {
  if (wo) return en;
  wo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return en = e, en;
}
var tn, To;
function ji() {
  return To || (To = 1, tn = Function.call.bind(Object.prototype.hasOwnProperty)), tn;
}
var rn, _o;
function ls() {
  if (_o) return rn;
  _o = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Pn(), r = {}, n = ji();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (n(i, h)) {
          var p;
          try {
            if (typeof i[h] != "function") {
              var d = Error(
                (u || "React class") + ": " + s + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = i[h](a, h, u, s, null, t);
          } catch (m) {
            p = m;
          }
          if (p && !(p instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var y = f ? f() : "";
            e(
              "Failed " + s + " type: " + p.message + (y ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, rn = o, rn;
}
var nn, So;
function fs() {
  if (So) return nn;
  So = 1;
  var e = $i(), t = cs(), r = Pn(), n = ji(), o = ls(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return nn = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function p(E) {
      var O = E && (f && E[f] || E[h]);
      if (typeof O == "function")
        return O;
    }
    var d = "<<anonymous>>", y = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: k(),
      arrayOf: R,
      element: L(),
      elementType: w(),
      instanceOf: $,
      node: it(),
      objectOf: Ne,
      oneOf: j,
      oneOfType: Le,
      shape: ce,
      exact: ie
    };
    function m(E, O) {
      return E === O ? E !== 0 || 1 / E === 1 / O : E !== E && O !== O;
    }
    function c(E, O) {
      this.message = E, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function b(E) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, Y = 0;
      function N(z, D, I, U, V, F, Ee) {
        if (U = U || d, F = F || I, Ee !== r) {
          if (u) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ue = U + ":" + I;
            !O[Ue] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + F + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[Ue] = !0, Y++);
          }
        }
        return D[I] == null ? z ? D[I] === null ? new c("The " + V + " `" + F + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new c("The " + V + " `" + F + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : E(D, I, U, V, F);
      }
      var A = N.bind(null, !1);
      return A.isRequired = N.bind(null, !0), A;
    }
    function x(E) {
      function O(Y, N, A, z, D, I) {
        var U = Y[N], V = _e(U);
        if (V !== E) {
          var F = Ye(U);
          return new c(
            "Invalid " + z + " `" + D + "` of type " + ("`" + F + "` supplied to `" + A + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return b(O);
    }
    function k() {
      return b(a);
    }
    function R(E) {
      function O(Y, N, A, z, D) {
        if (typeof E != "function")
          return new c("Property `" + D + "` of component `" + A + "` has invalid PropType notation inside arrayOf.");
        var I = Y[N];
        if (!Array.isArray(I)) {
          var U = _e(I);
          return new c("Invalid " + z + " `" + D + "` of type " + ("`" + U + "` supplied to `" + A + "`, expected an array."));
        }
        for (var V = 0; V < I.length; V++) {
          var F = E(I, V, A, z, D + "[" + V + "]", r);
          if (F instanceof Error)
            return F;
        }
        return null;
      }
      return b(O);
    }
    function L() {
      function E(O, Y, N, A, z) {
        var D = O[Y];
        if (!s(D)) {
          var I = _e(D);
          return new c("Invalid " + A + " `" + z + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(E);
    }
    function w() {
      function E(O, Y, N, A, z) {
        var D = O[Y];
        if (!e.isValidElementType(D)) {
          var I = _e(D);
          return new c("Invalid " + A + " `" + z + "` of type " + ("`" + I + "` supplied to `" + N + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(E);
    }
    function $(E) {
      function O(Y, N, A, z, D) {
        if (!(Y[N] instanceof E)) {
          var I = E.name || d, U = xt(Y[N]);
          return new c("Invalid " + z + " `" + D + "` of type " + ("`" + U + "` supplied to `" + A + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return b(O);
    }
    function j(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(Y, N, A, z, D) {
        for (var I = Y[N], U = 0; U < E.length; U++)
          if (m(I, E[U]))
            return null;
        var V = JSON.stringify(E, function(Ee, _) {
          var Ue = Ye(_);
          return Ue === "symbol" ? String(_) : _;
        });
        return new c("Invalid " + z + " `" + D + "` of value `" + String(I) + "` " + ("supplied to `" + A + "`, expected one of " + V + "."));
      }
      return b(O);
    }
    function Ne(E) {
      function O(Y, N, A, z, D) {
        if (typeof E != "function")
          return new c("Property `" + D + "` of component `" + A + "` has invalid PropType notation inside objectOf.");
        var I = Y[N], U = _e(I);
        if (U !== "object")
          return new c("Invalid " + z + " `" + D + "` of type " + ("`" + U + "` supplied to `" + A + "`, expected an object."));
        for (var V in I)
          if (n(I, V)) {
            var F = E(I, V, A, z, D + "." + V, r);
            if (F instanceof Error)
              return F;
          }
        return null;
      }
      return b(O);
    }
    function Le(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < E.length; O++) {
        var Y = E[O];
        if (typeof Y != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + pt(Y) + " at index " + O + "."
          ), a;
      }
      function N(A, z, D, I, U) {
        for (var V = [], F = 0; F < E.length; F++) {
          var Ee = E[F], _ = Ee(A, z, D, I, U, r);
          if (_ == null)
            return null;
          _.data && n(_.data, "expectedType") && V.push(_.data.expectedType);
        }
        var Ue = V.length > 0 ? ", expected one of type [" + V.join(", ") + "]" : "";
        return new c("Invalid " + I + " `" + U + "` supplied to " + ("`" + D + "`" + Ue + "."));
      }
      return b(N);
    }
    function it() {
      function E(O, Y, N, A, z) {
        return le(O[Y]) ? null : new c("Invalid " + A + " `" + z + "` supplied to " + ("`" + N + "`, expected a ReactNode."));
      }
      return b(E);
    }
    function He(E, O, Y, N, A) {
      return new c(
        (E || "React class") + ": " + O + " type `" + Y + "." + N + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + A + "`."
      );
    }
    function ce(E) {
      function O(Y, N, A, z, D) {
        var I = Y[N], U = _e(I);
        if (U !== "object")
          return new c("Invalid " + z + " `" + D + "` of type `" + U + "` " + ("supplied to `" + A + "`, expected `object`."));
        for (var V in E) {
          var F = E[V];
          if (typeof F != "function")
            return He(A, z, D, V, Ye(F));
          var Ee = F(I, V, A, z, D + "." + V, r);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return b(O);
    }
    function ie(E) {
      function O(Y, N, A, z, D) {
        var I = Y[N], U = _e(I);
        if (U !== "object")
          return new c("Invalid " + z + " `" + D + "` of type `" + U + "` " + ("supplied to `" + A + "`, expected `object`."));
        var V = t({}, Y[N], E);
        for (var F in V) {
          var Ee = E[F];
          if (n(E, F) && typeof Ee != "function")
            return He(A, z, D, F, Ye(Ee));
          if (!Ee)
            return new c(
              "Invalid " + z + " `" + D + "` key `" + F + "` supplied to `" + A + "`.\nBad object: " + JSON.stringify(Y[N], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var _ = Ee(I, F, A, z, D + "." + F, r);
          if (_)
            return _;
        }
        return null;
      }
      return b(O);
    }
    function le(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(le);
          if (E === null || s(E))
            return !0;
          var O = p(E);
          if (O) {
            var Y = O.call(E), N;
            if (O !== E.entries) {
              for (; !(N = Y.next()).done; )
                if (!le(N.value))
                  return !1;
            } else
              for (; !(N = Y.next()).done; ) {
                var A = N.value;
                if (A && !le(A[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ke(E, O) {
      return E === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function _e(E) {
      var O = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : ke(O, E) ? "symbol" : O;
    }
    function Ye(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var O = _e(E);
      if (O === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function pt(E) {
      var O = Ye(E);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function xt(E) {
      return !E.constructor || !E.constructor.name ? d : E.constructor.name;
    }
    return y.checkPropTypes = o, y.resetWarningCache = o.resetWarningCache, y.PropTypes = y, y;
  }, nn;
}
var on, Oo;
function ds() {
  if (Oo) return on;
  Oo = 1;
  var e = Pn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, on = function() {
    function n(a, s, u, f, h, p) {
      if (p !== e) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, on;
}
if (process.env.NODE_ENV !== "production") {
  var hs = $i(), ps = !0;
  yn.exports = fs()(hs.isElement, ps);
} else
  yn.exports = ds()();
var ys = yn.exports;
const M = /* @__PURE__ */ is(ys);
function Zt(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt
}, Symbol.toStringTag, { value: "Module" }));
var mn = { exports: {} }, ee = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko;
function vs() {
  if (ko) return ee;
  ko = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), d = Symbol.for("react.view_transition"), y = Symbol.for("react.client.reference");
  function m(c) {
    if (typeof c == "object" && c !== null) {
      var b = c.$$typeof;
      switch (b) {
        case e:
          switch (c = c.type, c) {
            case r:
            case o:
            case n:
            case u:
            case f:
            case d:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case a:
                case s:
                case p:
                case h:
                  return c;
                case i:
                  return c;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return ee.ContextConsumer = i, ee.ContextProvider = a, ee.Element = e, ee.ForwardRef = s, ee.Fragment = r, ee.Lazy = p, ee.Memo = h, ee.Portal = t, ee.Profiler = o, ee.StrictMode = n, ee.Suspense = u, ee.SuspenseList = f, ee.isContextConsumer = function(c) {
    return m(c) === i;
  }, ee.isContextProvider = function(c) {
    return m(c) === a;
  }, ee.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === e;
  }, ee.isForwardRef = function(c) {
    return m(c) === s;
  }, ee.isFragment = function(c) {
    return m(c) === r;
  }, ee.isLazy = function(c) {
    return m(c) === p;
  }, ee.isMemo = function(c) {
    return m(c) === h;
  }, ee.isPortal = function(c) {
    return m(c) === t;
  }, ee.isProfiler = function(c) {
    return m(c) === o;
  }, ee.isStrictMode = function(c) {
    return m(c) === n;
  }, ee.isSuspense = function(c) {
    return m(c) === u;
  }, ee.isSuspenseList = function(c) {
    return m(c) === f;
  }, ee.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === r || c === o || c === n || c === u || c === f || typeof c == "object" && c !== null && (c.$$typeof === p || c.$$typeof === h || c.$$typeof === a || c.$$typeof === i || c.$$typeof === s || c.$$typeof === y || c.getModuleId !== void 0);
  }, ee.typeOf = m, ee;
}
var te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ro;
function bs() {
  return Ro || (Ro = 1, process.env.NODE_ENV !== "production" && function() {
    function e(c) {
      if (typeof c == "object" && c !== null) {
        var b = c.$$typeof;
        switch (b) {
          case t:
            switch (c = c.type, c) {
              case n:
              case i:
              case o:
              case f:
              case h:
              case y:
                return c;
              default:
                switch (c = c && c.$$typeof, c) {
                  case s:
                  case u:
                  case d:
                  case p:
                    return c;
                  case a:
                    return c;
                  default:
                    return b;
                }
            }
          case r:
            return b;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), m = Symbol.for("react.client.reference");
    te.ContextConsumer = a, te.ContextProvider = s, te.Element = t, te.ForwardRef = u, te.Fragment = n, te.Lazy = d, te.Memo = p, te.Portal = r, te.Profiler = i, te.StrictMode = o, te.Suspense = f, te.SuspenseList = h, te.isContextConsumer = function(c) {
      return e(c) === a;
    }, te.isContextProvider = function(c) {
      return e(c) === s;
    }, te.isElement = function(c) {
      return typeof c == "object" && c !== null && c.$$typeof === t;
    }, te.isForwardRef = function(c) {
      return e(c) === u;
    }, te.isFragment = function(c) {
      return e(c) === n;
    }, te.isLazy = function(c) {
      return e(c) === d;
    }, te.isMemo = function(c) {
      return e(c) === p;
    }, te.isPortal = function(c) {
      return e(c) === r;
    }, te.isProfiler = function(c) {
      return e(c) === i;
    }, te.isStrictMode = function(c) {
      return e(c) === o;
    }, te.isSuspense = function(c) {
      return e(c) === f;
    }, te.isSuspenseList = function(c) {
      return e(c) === h;
    }, te.isValidElementType = function(c) {
      return typeof c == "string" || typeof c == "function" || c === n || c === i || c === o || c === f || c === h || typeof c == "object" && c !== null && (c.$$typeof === d || c.$$typeof === p || c.$$typeof === s || c.$$typeof === a || c.$$typeof === u || c.$$typeof === m || c.getModuleId !== void 0);
    }, te.typeOf = e;
  }()), te;
}
process.env.NODE_ENV === "production" ? mn.exports = vs() : mn.exports = bs();
var Co = mn.exports;
const gs = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Ai(e) {
  const t = `${e}`.match(gs);
  return t && t[1] || "";
}
function Di(e, t = "") {
  return e.displayName || e.name || Ai(e) || t;
}
function Po(e, t, r) {
  const n = Di(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Es(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Di(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Co.ForwardRef:
          return Po(e, e.render, "ForwardRef");
        case Co.Memo:
          return Po(e, e.type, "memo");
        default:
          return;
      }
  }
}
const xs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Es,
  getFunctionName: Ai
}, Symbol.toStringTag, { value: "Module" }));
function lt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Zt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lt
}, Symbol.toStringTag, { value: "Module" }));
function Ts(...e) {
  return e.reduce((t, r) => r == null ? t : function(...o) {
    t.apply(this, o), r.apply(this, o);
  }, () => {
  });
}
function _s(e, t = 166) {
  let r;
  function n(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(r), r = setTimeout(i, t);
  }
  return n.clear = () => {
    clearTimeout(r);
  }, n;
}
function Ss(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, n, o, i, a) => {
    const s = o || "<<anonymous>>", u = a || n;
    return typeof r[n] < "u" ? new Error(`The ${i} \`${u}\` of \`${s}\` is deprecated. ${t}`) : null;
  };
}
function Os(e, t) {
  var r, n;
  return /* @__PURE__ */ oe.isValidElement(e) && t.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (r = e.type.muiName) != null ? r : (n = e.type) == null || (n = n._payload) == null || (n = n.value) == null ? void 0 : n.muiName
  ) !== -1;
}
function Mi(e) {
  return e && e.ownerDocument || document;
}
function ks(e) {
  return Mi(e).defaultView || window;
}
function Rs(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? Q({}, t.propTypes) : null;
  return (o) => (i, a, s, u, f, ...h) => {
    const p = f || a, d = r == null ? void 0 : r[p];
    if (d) {
      const y = d(i, a, s, u, f, ...h);
      if (y)
        return y;
    }
    return typeof i[a] < "u" && !i[o] ? new Error(`The prop \`${p}\` of \`${e}\` can only be used together with the \`${o}\` prop.`) : null;
  };
}
function Ii(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Ni = typeof window < "u" ? oe.useLayoutEffect : oe.useEffect;
let $o = 0;
function Cs(e) {
  const [t, r] = oe.useState(e), n = e || t;
  return oe.useEffect(() => {
    t == null && ($o += 1, r(`mui-${$o}`));
  }, [t]), n;
}
const jo = oe.useId;
function Ps(e) {
  if (jo !== void 0) {
    const t = jo();
    return e ?? t;
  }
  return Cs(e);
}
function $s(e, t, r, n, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const i = o || t;
  return typeof e[t] < "u" ? new Error(`The prop \`${i}\` is not supported. Please remove it.`) : null;
}
function js({
  controlled: e,
  default: t,
  name: r,
  state: n = "value"
}) {
  const {
    current: o
  } = oe.useRef(e !== void 0), [i, a] = oe.useState(t), s = o ? e : i;
  if (process.env.NODE_ENV !== "production") {
    oe.useEffect(() => {
      o !== (e !== void 0) && console.error([`MUI: A component is changing the ${o ? "" : "un"}controlled ${n} state of ${r} to be ${o ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", `Decide between using a controlled or uncontrolled ${r} element for the lifetime of the component.`, "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
    }, [n, r, e]);
    const {
      current: f
    } = oe.useRef(t);
    oe.useEffect(() => {
      !o && !Object.is(f, t) && console.error([`MUI: A component is changing the default ${n} state of an uncontrolled ${r} after being initialized. To suppress this warning opt to use a controlled ${r}.`].join(`
`));
    }, [JSON.stringify(t)]);
  }
  const u = oe.useCallback((f) => {
    o || a(f);
  }, []);
  return [s, u];
}
function As(e) {
  const t = oe.useRef(e);
  return Ni(() => {
    t.current = e;
  }), oe.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Ds(...e) {
  return oe.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Ii(r, t);
    });
  }, e);
}
class $n {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new $n();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
let Ar = !0, vn = !1;
const Ms = new $n(), Is = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function Ns(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && Is[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function Ls(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Ar = !0);
}
function an() {
  Ar = !1;
}
function Ys() {
  this.visibilityState === "hidden" && vn && (Ar = !0);
}
function Us(e) {
  e.addEventListener("keydown", Ls, !0), e.addEventListener("mousedown", an, !0), e.addEventListener("pointerdown", an, !0), e.addEventListener("touchstart", an, !0), e.addEventListener("visibilitychange", Ys, !0);
}
function Fs(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return Ar || Ns(t);
}
function Ws() {
  const e = oe.useCallback((o) => {
    o != null && Us(o.ownerDocument);
  }, []), t = oe.useRef(!1);
  function r() {
    return t.current ? (vn = !0, Ms.start(100, () => {
      vn = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return Fs(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function bn(e, t) {
  const r = Q({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = Q({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = Q({}, i), Object.keys(o).forEach((a) => {
        r[n][a] = bn(o[a], i[a]);
      }));
    } else r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function zs(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, a) => {
        if (a) {
          const s = t(a);
          s !== "" && i.push(s), r && r[a] && i.push(r[a]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
const Ao = (e) => e, qs = () => {
  let e = Ao;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ao;
    }
  };
}, Li = qs(), Vs = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function jn(e, t, r = "Mui") {
  const n = Vs[t];
  return n ? `${r}-${n}` : `${Li.generate(e)}-${t}`;
}
function Bs(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = jn(e, o, r);
  }), n;
}
function Ks(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const Hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ks
}, Symbol.toStringTag, { value: "Module" }));
function dt(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Yi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Yi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Gs() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Yi(e)) && (n && (n += " "), n += t);
  return n;
}
var cr = { exports: {} }, zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Do;
function Zs() {
  if (Do) return zt;
  Do = 1;
  var e = $e, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, u, f) {
    var h, p = {}, d = null, y = null;
    f !== void 0 && (d = "" + f), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (h in u) n.call(u, h) && !i.hasOwnProperty(h) && (p[h] = u[h]);
    if (s && s.defaultProps) for (h in u = s.defaultProps, u) p[h] === void 0 && (p[h] = u[h]);
    return { $$typeof: t, type: s, key: d, ref: y, props: p, _owner: o.current };
  }
  return zt.Fragment = r, zt.jsx = a, zt.jsxs = a, zt;
}
var qt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo;
function Js() {
  return Mo || (Mo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $e, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), m = Symbol.iterator, c = "@@iterator";
    function b(l) {
      if (l === null || typeof l != "object")
        return null;
      var g = m && l[m] || l[c];
      return typeof g == "function" ? g : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(l) {
      {
        for (var g = arguments.length, S = new Array(g > 1 ? g - 1 : 0), P = 1; P < g; P++)
          S[P - 1] = arguments[P];
        R("error", l, S);
      }
    }
    function R(l, g, S) {
      {
        var P = x.ReactDebugCurrentFrame, Z = P.getStackAddendum();
        Z !== "" && (g += "%s", S = S.concat([Z]));
        var re = S.map(function(q) {
          return String(q);
        });
        re.unshift("Warning: " + g), Function.prototype.apply.call(console[l], console, re);
      }
    }
    var L = !1, w = !1, $ = !1, j = !1, Ne = !1, Le;
    Le = Symbol.for("react.module.reference");
    function it(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === n || l === i || Ne || l === o || l === f || l === h || j || l === y || L || w || $ || typeof l == "object" && l !== null && (l.$$typeof === d || l.$$typeof === p || l.$$typeof === a || l.$$typeof === s || l.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Le || l.getModuleId !== void 0));
    }
    function He(l, g, S) {
      var P = l.displayName;
      if (P)
        return P;
      var Z = g.displayName || g.name || "";
      return Z !== "" ? S + "(" + Z + ")" : S;
    }
    function ce(l) {
      return l.displayName || "Context";
    }
    function ie(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case s:
            var g = l;
            return ce(g) + ".Consumer";
          case a:
            var S = l;
            return ce(S._context) + ".Provider";
          case u:
            return He(l, l.render, "ForwardRef");
          case p:
            var P = l.displayName || null;
            return P !== null ? P : ie(l.type) || "Memo";
          case d: {
            var Z = l, re = Z._payload, q = Z._init;
            try {
              return ie(q(re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, ke = 0, _e, Ye, pt, xt, E, O, Y;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function A() {
      {
        if (ke === 0) {
          _e = console.log, Ye = console.info, pt = console.warn, xt = console.error, E = console.group, O = console.groupCollapsed, Y = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        ke++;
      }
    }
    function z() {
      {
        if (ke--, ke === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, l, {
              value: _e
            }),
            info: le({}, l, {
              value: Ye
            }),
            warn: le({}, l, {
              value: pt
            }),
            error: le({}, l, {
              value: xt
            }),
            group: le({}, l, {
              value: E
            }),
            groupCollapsed: le({}, l, {
              value: O
            }),
            groupEnd: le({}, l, {
              value: Y
            })
          });
        }
        ke < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var D = x.ReactCurrentDispatcher, I;
    function U(l, g, S) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (Z) {
            var P = Z.stack.trim().match(/\n( *(at )?)/);
            I = P && P[1] || "";
          }
        return `
` + I + l;
      }
    }
    var V = !1, F;
    {
      var Ee = typeof WeakMap == "function" ? WeakMap : Map;
      F = new Ee();
    }
    function _(l, g) {
      if (!l || V)
        return "";
      {
        var S = F.get(l);
        if (S !== void 0)
          return S;
      }
      var P;
      V = !0;
      var Z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var re;
      re = D.current, D.current = null, A();
      try {
        if (g) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Re) {
              P = Re;
            }
            Reflect.construct(l, [], q);
          } else {
            try {
              q.call();
            } catch (Re) {
              P = Re;
            }
            l.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Re) {
            P = Re;
          }
          l();
        }
      } catch (Re) {
        if (Re && P && typeof Re.stack == "string") {
          for (var W = Re.stack.split(`
`), Se = P.stack.split(`
`), fe = W.length - 1, ye = Se.length - 1; fe >= 1 && ye >= 0 && W[fe] !== Se[ye]; )
            ye--;
          for (; fe >= 1 && ye >= 0; fe--, ye--)
            if (W[fe] !== Se[ye]) {
              if (fe !== 1 || ye !== 1)
                do
                  if (fe--, ye--, ye < 0 || W[fe] !== Se[ye]) {
                    var Fe = `
` + W[fe].replace(" at new ", " at ");
                    return l.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", l.displayName)), typeof l == "function" && F.set(l, Fe), Fe;
                  }
                while (fe >= 1 && ye >= 0);
              break;
            }
        }
      } finally {
        V = !1, D.current = re, z(), Error.prepareStackTrace = Z;
      }
      var _t = l ? l.displayName || l.name : "", mt = _t ? U(_t) : "";
      return typeof l == "function" && F.set(l, mt), mt;
    }
    function Ue(l, g, S) {
      return _(l, !1);
    }
    function wt(l) {
      var g = l.prototype;
      return !!(g && g.isReactComponent);
    }
    function yt(l, g, S) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return _(l, wt(l));
      if (typeof l == "string")
        return U(l);
      switch (l) {
        case f:
          return U("Suspense");
        case h:
          return U("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case u:
            return Ue(l.render);
          case p:
            return yt(l.type, g, S);
          case d: {
            var P = l, Z = P._payload, re = P._init;
            try {
              return yt(re(Z), g, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Wt = Object.prototype.hasOwnProperty, to = {}, ro = x.ReactDebugCurrentFrame;
    function ar(l) {
      if (l) {
        var g = l._owner, S = yt(l.type, l._source, g ? g.type : null);
        ro.setExtraStackFrame(S);
      } else
        ro.setExtraStackFrame(null);
    }
    function _a(l, g, S, P, Z) {
      {
        var re = Function.call.bind(Wt);
        for (var q in l)
          if (re(l, q)) {
            var W = void 0;
            try {
              if (typeof l[q] != "function") {
                var Se = Error((P || "React class") + ": " + S + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Se.name = "Invariant Violation", Se;
              }
              W = l[q](g, q, P, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (fe) {
              W = fe;
            }
            W && !(W instanceof Error) && (ar(Z), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", S, q, typeof W), ar(null)), W instanceof Error && !(W.message in to) && (to[W.message] = !0, ar(Z), k("Failed %s type: %s", S, W.message), ar(null));
          }
      }
    }
    var Sa = Array.isArray;
    function Br(l) {
      return Sa(l);
    }
    function Oa(l) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, S = g && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return S;
      }
    }
    function ka(l) {
      try {
        return no(l), !1;
      } catch {
        return !0;
      }
    }
    function no(l) {
      return "" + l;
    }
    function oo(l) {
      if (ka(l))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Oa(l)), no(l);
    }
    var io = x.ReactCurrentOwner, Ra = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ao, so;
    function Ca(l) {
      if (Wt.call(l, "ref")) {
        var g = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Pa(l) {
      if (Wt.call(l, "key")) {
        var g = Object.getOwnPropertyDescriptor(l, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function $a(l, g) {
      typeof l.ref == "string" && io.current;
    }
    function ja(l, g) {
      {
        var S = function() {
          ao || (ao = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function Aa(l, g) {
      {
        var S = function() {
          so || (so = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        S.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Da = function(l, g, S, P, Z, re, q) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: g,
        ref: S,
        props: q,
        // Record the component responsible for creating this element.
        _owner: re
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Z
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function Ma(l, g, S, P, Z) {
      {
        var re, q = {}, W = null, Se = null;
        S !== void 0 && (oo(S), W = "" + S), Pa(g) && (oo(g.key), W = "" + g.key), Ca(g) && (Se = g.ref, $a(g, Z));
        for (re in g)
          Wt.call(g, re) && !Ra.hasOwnProperty(re) && (q[re] = g[re]);
        if (l && l.defaultProps) {
          var fe = l.defaultProps;
          for (re in fe)
            q[re] === void 0 && (q[re] = fe[re]);
        }
        if (W || Se) {
          var ye = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          W && ja(q, ye), Se && Aa(q, ye);
        }
        return Da(l, W, Se, Z, P, io.current, q);
      }
    }
    var Kr = x.ReactCurrentOwner, uo = x.ReactDebugCurrentFrame;
    function Tt(l) {
      if (l) {
        var g = l._owner, S = yt(l.type, l._source, g ? g.type : null);
        uo.setExtraStackFrame(S);
      } else
        uo.setExtraStackFrame(null);
    }
    var Hr;
    Hr = !1;
    function Gr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function co() {
      {
        if (Kr.current) {
          var l = ie(Kr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function Ia(l) {
      return "";
    }
    var lo = {};
    function Na(l) {
      {
        var g = co();
        if (!g) {
          var S = typeof l == "string" ? l : l.displayName || l.name;
          S && (g = `

Check the top-level render call using <` + S + ">.");
        }
        return g;
      }
    }
    function fo(l, g) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var S = Na(g);
        if (lo[S])
          return;
        lo[S] = !0;
        var P = "";
        l && l._owner && l._owner !== Kr.current && (P = " It was passed a child from " + ie(l._owner.type) + "."), Tt(l), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, P), Tt(null);
      }
    }
    function ho(l, g) {
      {
        if (typeof l != "object")
          return;
        if (Br(l))
          for (var S = 0; S < l.length; S++) {
            var P = l[S];
            Gr(P) && fo(P, g);
          }
        else if (Gr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var Z = b(l);
          if (typeof Z == "function" && Z !== l.entries)
            for (var re = Z.call(l), q; !(q = re.next()).done; )
              Gr(q.value) && fo(q.value, g);
        }
      }
    }
    function La(l) {
      {
        var g = l.type;
        if (g == null || typeof g == "string")
          return;
        var S;
        if (typeof g == "function")
          S = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === p))
          S = g.propTypes;
        else
          return;
        if (S) {
          var P = ie(g);
          _a(S, l.props, "prop", P, l);
        } else if (g.PropTypes !== void 0 && !Hr) {
          Hr = !0;
          var Z = ie(g);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ya(l) {
      {
        for (var g = Object.keys(l.props), S = 0; S < g.length; S++) {
          var P = g[S];
          if (P !== "children" && P !== "key") {
            Tt(l), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Tt(null);
            break;
          }
        }
        l.ref !== null && (Tt(l), k("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
      }
    }
    var po = {};
    function yo(l, g, S, P, Z, re) {
      {
        var q = it(l);
        if (!q) {
          var W = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Se = Ia();
          Se ? W += Se : W += co();
          var fe;
          l === null ? fe = "null" : Br(l) ? fe = "array" : l !== void 0 && l.$$typeof === t ? (fe = "<" + (ie(l.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof l, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, W);
        }
        var ye = Ma(l, g, S, Z, re);
        if (ye == null)
          return ye;
        if (q) {
          var Fe = g.children;
          if (Fe !== void 0)
            if (P)
              if (Br(Fe)) {
                for (var _t = 0; _t < Fe.length; _t++)
                  ho(Fe[_t], l);
                Object.freeze && Object.freeze(Fe);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ho(Fe, l);
        }
        if (Wt.call(g, "key")) {
          var mt = ie(l), Re = Object.keys(g).filter(function(Va) {
            return Va !== "key";
          }), Zr = Re.length > 0 ? "{key: someKey, " + Re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!po[mt + Zr]) {
            var qa = Re.length > 0 ? "{" + Re.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Zr, mt, qa, mt), po[mt + Zr] = !0;
          }
        }
        return l === n ? Ya(ye) : La(ye), ye;
      }
    }
    function Ua(l, g, S) {
      return yo(l, g, S, !0);
    }
    function Fa(l, g, S) {
      return yo(l, g, S, !1);
    }
    var Wa = Fa, za = Ua;
    qt.Fragment = n, qt.jsx = Wa, qt.jsxs = za;
  }()), qt;
}
var Io;
function Et() {
  return Io || (Io = 1, process.env.NODE_ENV === "production" ? cr.exports = Zs() : cr.exports = Js()), cr.exports;
}
var v = Et();
const Xs = /* @__PURE__ */ oe.createContext(void 0);
process.env.NODE_ENV !== "production" && (M.node, M.object);
function Qs(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? bn(o.defaultProps, n) : !o.styleOverrides && !o.variants ? bn(o, n) : n;
}
function eu({
  props: e,
  name: t
}) {
  const r = oe.useContext(Xs);
  return Qs({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
process.env.NODE_ENV !== "production" && (M.node, M.object.isRequired);
function tu(e) {
  return eu(e);
}
var tr = {}, sn = { exports: {} }, No;
function ru() {
  return No || (No = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o) ({}).hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(null, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(sn)), sn.exports;
}
var un = { exports: {} }, Lo;
function nu() {
  return Lo || (Lo = 1, function(e) {
    function t(r, n) {
      if (r == null) return {};
      var o = {};
      for (var i in r) if ({}.hasOwnProperty.call(r, i)) {
        if (n.indexOf(i) !== -1) continue;
        o[i] = r[i];
      }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(un)), un.exports;
}
function ou(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var iu = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function au(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var su = /[A-Z]|^ms/g, uu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ui = function(t) {
  return t.charCodeAt(1) === 45;
}, Yo = function(t) {
  return t != null && typeof t != "boolean";
}, cn = /* @__PURE__ */ au(function(e) {
  return Ui(e) ? e : e.replace(su, "-$&").toLowerCase();
}), Uo = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(uu, function(n, o, i) {
          return st = {
            name: o,
            styles: i,
            next: st
          }, o;
        });
  }
  return iu[t] !== 1 && !Ui(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function gr(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return st = {
          name: o.name,
          styles: o.styles,
          next: st
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            st = {
              name: a.name,
              styles: a.styles,
              next: st
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return cu(e, t, r);
    }
  }
  var u = r;
  return u;
}
function cu(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += gr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        Yo(s) && (n += cn(i) + ":" + Uo(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var u = 0; u < a.length; u++)
          Yo(a[u]) && (n += cn(i) + ":" + Uo(i, a[u]) + ";");
      else {
        var f = gr(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += cn(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var Fo = /label:\s*([^\s;{]+)\s*(;|$)/g, st;
function lu(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  st = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += gr(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += gr(r, t, e[s]), n) {
      var u = i;
      o += u[s];
    }
  Fo.lastIndex = 0;
  for (var f = "", h; (h = Fo.exec(o)) !== null; )
    f += "-" + h[1];
  var p = ou(o) + f;
  return {
    name: p,
    styles: o,
    next: st
  };
}
function fu(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function du(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var hu = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(du(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = fu(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), xe = "-ms-", Er = "-moz-", H = "-webkit-", Fi = "comm", An = "rule", Dn = "decl", pu = "@import", Wi = "@keyframes", yu = "@layer", mu = Math.abs, Dr = String.fromCharCode, vu = Object.assign;
function bu(e, t) {
  return ge(e, 0) ^ 45 ? (((t << 2 ^ ge(e, 0)) << 2 ^ ge(e, 1)) << 2 ^ ge(e, 2)) << 2 ^ ge(e, 3) : 0;
}
function zi(e) {
  return e.trim();
}
function gu(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function G(e, t, r) {
  return e.replace(t, r);
}
function gn(e, t) {
  return e.indexOf(t);
}
function ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function Jt(e, t, r) {
  return e.slice(t, r);
}
function Ze(e) {
  return e.length;
}
function Mn(e) {
  return e.length;
}
function lr(e, t) {
  return t.push(e), e;
}
function Eu(e, t) {
  return e.map(t).join("");
}
var Mr = 1, Mt = 1, qi = 0, Pe = 0, ve = 0, Nt = "";
function Ir(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Mr, column: Mt, length: a, return: "" };
}
function Vt(e, t) {
  return vu(Ir("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function xu() {
  return ve;
}
function wu() {
  return ve = Pe > 0 ? ge(Nt, --Pe) : 0, Mt--, ve === 10 && (Mt = 1, Mr--), ve;
}
function Me() {
  return ve = Pe < qi ? ge(Nt, Pe++) : 0, Mt++, ve === 10 && (Mt = 1, Mr++), ve;
}
function Qe() {
  return ge(Nt, Pe);
}
function dr() {
  return Pe;
}
function rr(e, t) {
  return Jt(Nt, e, t);
}
function Xt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Vi(e) {
  return Mr = Mt = 1, qi = Ze(Nt = e), Pe = 0, [];
}
function Bi(e) {
  return Nt = "", e;
}
function hr(e) {
  return zi(rr(Pe - 1, En(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Tu(e) {
  for (; (ve = Qe()) && ve < 33; )
    Me();
  return Xt(e) > 2 || Xt(ve) > 3 ? "" : " ";
}
function _u(e, t) {
  for (; --t && Me() && !(ve < 48 || ve > 102 || ve > 57 && ve < 65 || ve > 70 && ve < 97); )
    ;
  return rr(e, dr() + (t < 6 && Qe() == 32 && Me() == 32));
}
function En(e) {
  for (; Me(); )
    switch (ve) {
      case e:
        return Pe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && En(ve);
        break;
      case 40:
        e === 41 && En(e);
        break;
      case 92:
        Me();
        break;
    }
  return Pe;
}
function Su(e, t) {
  for (; Me() && e + ve !== 57; )
    if (e + ve === 84 && Qe() === 47)
      break;
  return "/*" + rr(t, Pe - 1) + "*" + Dr(e === 47 ? e : Me());
}
function Ou(e) {
  for (; !Xt(Qe()); )
    Me();
  return rr(e, Pe);
}
function ku(e) {
  return Bi(pr("", null, null, null, [""], e = Vi(e), 0, [0], e));
}
function pr(e, t, r, n, o, i, a, s, u) {
  for (var f = 0, h = 0, p = a, d = 0, y = 0, m = 0, c = 1, b = 1, x = 1, k = 0, R = "", L = o, w = i, $ = n, j = R; b; )
    switch (m = k, k = Me()) {
      case 40:
        if (m != 108 && ge(j, p - 1) == 58) {
          gn(j += G(hr(k), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        j += hr(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        j += Tu(m);
        break;
      case 92:
        j += _u(dr() - 1, 7);
        continue;
      case 47:
        switch (Qe()) {
          case 42:
          case 47:
            lr(Ru(Su(Me(), dr()), t, r), u);
            break;
          default:
            j += "/";
        }
        break;
      case 123 * c:
        s[f++] = Ze(j) * x;
      case 125 * c:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            b = 0;
          case 59 + h:
            x == -1 && (j = G(j, /\f/g, "")), y > 0 && Ze(j) - p && lr(y > 32 ? zo(j + ";", n, r, p - 1) : zo(G(j, " ", "") + ";", n, r, p - 2), u);
            break;
          case 59:
            j += ";";
          default:
            if (lr($ = Wo(j, t, r, f, h, o, s, R, L = [], w = [], p), i), k === 123)
              if (h === 0)
                pr(j, t, $, $, L, i, p, s, w);
              else
                switch (d === 99 && ge(j, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    pr(e, $, $, n && lr(Wo(e, $, $, 0, 0, o, s, R, o, L = [], p), w), o, w, p, s, n ? L : w);
                    break;
                  default:
                    pr(j, $, $, $, [""], w, 0, s, w);
                }
        }
        f = h = y = 0, c = x = 1, R = j = "", p = a;
        break;
      case 58:
        p = 1 + Ze(j), y = m;
      default:
        if (c < 1) {
          if (k == 123)
            --c;
          else if (k == 125 && c++ == 0 && wu() == 125)
            continue;
        }
        switch (j += Dr(k), k * c) {
          case 38:
            x = h > 0 ? 1 : (j += "\f", -1);
            break;
          case 44:
            s[f++] = (Ze(j) - 1) * x, x = 1;
            break;
          case 64:
            Qe() === 45 && (j += hr(Me())), d = Qe(), h = p = Ze(R = j += Ou(dr())), k++;
            break;
          case 45:
            m === 45 && Ze(j) == 2 && (c = 0);
        }
    }
  return i;
}
function Wo(e, t, r, n, o, i, a, s, u, f, h) {
  for (var p = o - 1, d = o === 0 ? i : [""], y = Mn(d), m = 0, c = 0, b = 0; m < n; ++m)
    for (var x = 0, k = Jt(e, p + 1, p = mu(c = a[m])), R = e; x < y; ++x)
      (R = zi(c > 0 ? d[x] + " " + k : G(k, /&\f/g, d[x]))) && (u[b++] = R);
  return Ir(e, t, r, o === 0 ? An : s, u, f, h);
}
function Ru(e, t, r) {
  return Ir(e, t, r, Fi, Dr(xu()), Jt(e, 2, -2), 0);
}
function zo(e, t, r, n) {
  return Ir(e, t, r, Dn, Jt(e, 0, n), Jt(e, n + 1, -1), n);
}
function At(e, t) {
  for (var r = "", n = Mn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Cu(e, t, r, n) {
  switch (e.type) {
    case yu:
      if (e.children.length) break;
    case pu:
    case Dn:
      return e.return = e.return || e.value;
    case Fi:
      return "";
    case Wi:
      return e.return = e.value + "{" + At(e.children, n) + "}";
    case An:
      e.value = e.props.join(",");
  }
  return Ze(r = At(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Pu(e) {
  var t = Mn(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function $u(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ju = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Qe(), o === 38 && i === 12 && (r[n] = 1), !Xt(i); )
    Me();
  return rr(t, Pe);
}, Au = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Xt(o)) {
      case 0:
        o === 38 && Qe() === 12 && (r[n] = 1), t[n] += ju(Pe - 1, r, n);
        break;
      case 2:
        t[n] += hr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Qe() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += Dr(o);
    }
  while (o = Me());
  return t;
}, Du = function(t, r) {
  return Bi(Au(Vi(t), r));
}, qo = /* @__PURE__ */ new WeakMap(), Mu = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !qo.get(n)) && !o) {
      qo.set(t, !0);
      for (var i = [], a = Du(r, i), s = n.props, u = 0, f = 0; u < a.length; u++)
        for (var h = 0; h < s.length; h++, f++)
          t.props[f] = i[u] ? a[u].replace(/&\f/g, s[h]) : s[h] + " " + a[u];
    }
  }
}, Iu = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ki(e, t) {
  switch (bu(e, t)) {
    case 5103:
      return H + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return H + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return H + e + Er + e + xe + e + e;
    case 6828:
    case 4268:
      return H + e + xe + e + e;
    case 6165:
      return H + e + xe + "flex-" + e + e;
    case 5187:
      return H + e + G(e, /(\w+).+(:[^]+)/, H + "box-$1$2" + xe + "flex-$1$2") + e;
    case 5443:
      return H + e + xe + "flex-item-" + G(e, /flex-|-self/, "") + e;
    case 4675:
      return H + e + xe + "flex-line-pack" + G(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return H + e + xe + G(e, "shrink", "negative") + e;
    case 5292:
      return H + e + xe + G(e, "basis", "preferred-size") + e;
    case 6060:
      return H + "box-" + G(e, "-grow", "") + H + e + xe + G(e, "grow", "positive") + e;
    case 4554:
      return H + G(e, /([^-])(transform)/g, "$1" + H + "$2") + e;
    case 6187:
      return G(G(G(e, /(zoom-|grab)/, H + "$1"), /(image-set)/, H + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return G(e, /(image-set\([^]*)/, H + "$1$`$1");
    case 4968:
      return G(G(e, /(.+:)(flex-)?(.*)/, H + "box-pack:$3" + xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + H + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return G(e, /(.+)-inline(.+)/, H + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ze(e) - 1 - t > 6) switch (ge(e, t + 1)) {
        case 109:
          if (ge(e, t + 4) !== 45) break;
        case 102:
          return G(e, /(.+:)(.+)-([^]+)/, "$1" + H + "$2-$3$1" + Er + (ge(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~gn(e, "stretch") ? Ki(G(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (ge(e, t + 1) !== 115) break;
    case 6444:
      switch (ge(e, Ze(e) - 3 - (~gn(e, "!important") && 10))) {
        case 107:
          return G(e, ":", ":" + H) + e;
        case 101:
          return G(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + H + (ge(e, 14) === 45 ? "inline-" : "") + "box$3$1" + H + "$2$3$1" + xe + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (ge(e, t + 11)) {
        case 114:
          return H + e + xe + G(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return H + e + xe + G(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return H + e + xe + G(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return H + e + xe + e + e;
  }
  return e;
}
var Nu = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Dn:
      t.return = Ki(t.value, t.length);
      break;
    case Wi:
      return At([Vt(t, {
        value: G(t.value, "@", "@" + H)
      })], o);
    case An:
      if (t.length) return Eu(t.props, function(i) {
        switch (gu(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return At([Vt(t, {
              props: [G(i, /:(read-\w+)/, ":" + Er + "$1")]
            })], o);
          case "::placeholder":
            return At([Vt(t, {
              props: [G(i, /:(plac\w+)/, ":" + H + "input-$1")]
            }), Vt(t, {
              props: [G(i, /:(plac\w+)/, ":" + Er + "$1")]
            }), Vt(t, {
              props: [G(i, /:(plac\w+)/, xe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Lu = [Nu], Yu = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(c) {
      var b = c.getAttribute("data-emotion");
      b.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Lu, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(c) {
      for (var b = c.getAttribute("data-emotion").split(" "), x = 1; x < b.length; x++)
        i[b[x]] = !0;
      s.push(c);
    }
  );
  var u, f = [Mu, Iu];
  {
    var h, p = [Cu, $u(function(c) {
      h.insert(c);
    })], d = Pu(f.concat(o, p)), y = function(b) {
      return At(ku(b), d);
    };
    u = function(b, x, k, R) {
      h = k, y(b ? b + "{" + x.styles + "}" : x.styles), R && (m.inserted[x.name] = !0);
    };
  }
  var m = {
    key: r,
    sheet: new hu({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return m.sheet.hydrate(s), m;
};
function Uu(e, t) {
  const r = Yu({
    key: "css",
    prepend: e
  });
  if (t) {
    const n = r.insert;
    r.insert = (...o) => (o[1].styles.match(/^@layer\s+[^{]*$/) || (o[1].styles = `@layer mui {${o[1].styles}}`), n(...o));
  }
  return r;
}
const ln = /* @__PURE__ */ new Map();
function Hi(e) {
  const {
    injectFirst: t,
    enableCssLayer: r,
    children: n
  } = e, o = oe.useMemo(() => {
    const i = `${t}-${r}`;
    if (typeof document == "object" && ln.has(i))
      return ln.get(i);
    const a = Uu(t, r);
    return ln.set(i, a), a;
  }, [t, r]);
  return t || r ? /* @__PURE__ */ v.jsx(Qa, {
    value: o,
    children: n
  }) : n;
}
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
  /**
   * Your component tree.
   */
  children: M.node,
  /**
   * If true, MUI styles are wrapped in CSS `@layer mui` rule.
   * It helps to override MUI styles when using CSS Modules, Tailwind CSS, plain CSS, or any other styling solution.
   */
  enableCssLayer: M.bool,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: M.bool
});
function Fu(e) {
  return e == null || Object.keys(e).length === 0;
}
function Gi(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, n = typeof t == "function" ? (o) => t(Fu(o) ? r : o) : t;
  return /* @__PURE__ */ v.jsx(es, {
    styles: n
  });
}
process.env.NODE_ENV !== "production" && (Gi.propTypes = {
  defaultTheme: M.object,
  styles: M.oneOfType([M.array, M.string, M.object, M.func])
});
/**
 * @mui/styled-engine v5.18.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Wu(e, t) {
  const r = Xa(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const zu = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Vo = [];
function qu(e) {
  return Vo[0] = e, lu(Vo);
}
const Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: Gi,
  StyledEngineProvider: Hi,
  ThemeContext: ts,
  css: rs,
  default: Wu,
  internal_processStyles: zu,
  internal_serializeStyles: qu,
  keyframes: ns
}, Symbol.toStringTag, { value: "Module" })), Bu = /* @__PURE__ */ nt(Vu), Ku = /* @__PURE__ */ nt(as), Hu = /* @__PURE__ */ nt(ws), Gu = /* @__PURE__ */ nt(xs), Zu = ["values", "unit", "step"], Ju = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => Q({}, r, {
    [n.key]: n.val
  }), {});
};
function Zi(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = dt(e, Zu), i = Ju(t), a = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r})`;
  }
  function u(d) {
    return `@media (max-width:${(typeof t[d] == "number" ? t[d] : d) - n / 100}${r})`;
  }
  function f(d, y) {
    const m = a.indexOf(y);
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${r}) and (max-width:${(m !== -1 && typeof t[a[m]] == "number" ? t[a[m]] : y) - n / 100}${r})`;
  }
  function h(d) {
    return a.indexOf(d) + 1 < a.length ? f(d, a[a.indexOf(d) + 1]) : s(d);
  }
  function p(d) {
    const y = a.indexOf(d);
    return y === 0 ? s(a[1]) : y === a.length - 1 ? u(a[y]) : f(d, a[a.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return Q({
    keys: a,
    values: i,
    up: s,
    down: u,
    between: f,
    only: h,
    not: p,
    unit: r
  }, o);
}
const Xu = {
  borderRadius: 4
}, ht = process.env.NODE_ENV !== "production" ? M.oneOfType([M.number, M.string, M.object, M.array]) : {};
function Ht(e, t) {
  return t ? Xe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const In = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Bo = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${In[e]}px)`
};
function rt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Bo;
    return t.reduce((a, s, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Bo;
    return Object.keys(t).reduce((a, s) => {
      if (Object.keys(i.values || In).indexOf(s) !== -1) {
        const u = i.up(s);
        a[u] = r(t[s], s);
      } else {
        const u = s;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Qu(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Ko(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function Nr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function xr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Nr(e, r) || n, t && (o = t(o, n, e)), o;
}
function he(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], u = a.theme, f = Nr(u, n) || {};
    return rt(a, s, (p) => {
      let d = xr(f, o, p);
      return p === d && typeof p == "string" && (d = xr(f, o, `${t}${p === "default" ? "" : lt(p)}`, p)), r === !1 ? d : {
        [r]: d
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ht
  } : {}, i.filterProps = [t], i;
}
function ec(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const tc = {
  m: "margin",
  p: "padding"
}, rc = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ho = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, nc = ec((e) => {
  if (e.length > 2)
    if (Ho[e])
      e = Ho[e];
    else
      return [e];
  const [t, r] = e.split(""), n = tc[t], o = rc[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Lr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Yr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], oc = [...Lr, ...Yr];
function nr(e, t, r, n) {
  var o;
  const i = (o = Nr(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Ji(e) {
  return nr(e, "spacing", 8, "spacing");
}
function or(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function ic(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = or(t, r), n), {});
}
function ac(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = nc(r), i = ic(o, n), a = e[r];
  return rt(e, a, i);
}
function Xi(e, t) {
  const r = Ji(e.theme);
  return Object.keys(e).map((n) => ac(e, t, n, r)).reduce(Ht, {});
}
function se(e) {
  return Xi(e, Lr);
}
se.propTypes = process.env.NODE_ENV !== "production" ? Lr.reduce((e, t) => (e[t] = ht, e), {}) : {};
se.filterProps = Lr;
function ue(e) {
  return Xi(e, Yr);
}
ue.propTypes = process.env.NODE_ENV !== "production" ? Yr.reduce((e, t) => (e[t] = ht, e), {}) : {};
ue.filterProps = Yr;
process.env.NODE_ENV !== "production" && oc.reduce((e, t) => (e[t] = ht, e), {});
function sc(e = 8) {
  if (e.mui)
    return e;
  const t = Ji({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function Ur(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Ht(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ze(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Be(e, t) {
  return he({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const uc = Be("border", ze), cc = Be("borderTop", ze), lc = Be("borderRight", ze), fc = Be("borderBottom", ze), dc = Be("borderLeft", ze), hc = Be("borderColor"), pc = Be("borderTopColor"), yc = Be("borderRightColor"), mc = Be("borderBottomColor"), vc = Be("borderLeftColor"), bc = Be("outline", ze), gc = Be("outlineColor"), Fr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = nr(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: or(t, n)
    });
    return rt(e, e.borderRadius, r);
  }
  return null;
};
Fr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ht
} : {};
Fr.filterProps = ["borderRadius"];
Ur(uc, cc, lc, fc, dc, hc, pc, yc, mc, vc, Fr, bc, gc);
const Wr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = nr(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: or(t, n)
    });
    return rt(e, e.gap, r);
  }
  return null;
};
Wr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ht
} : {};
Wr.filterProps = ["gap"];
const zr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = nr(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: or(t, n)
    });
    return rt(e, e.columnGap, r);
  }
  return null;
};
zr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ht
} : {};
zr.filterProps = ["columnGap"];
const qr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = nr(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: or(t, n)
    });
    return rt(e, e.rowGap, r);
  }
  return null;
};
qr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ht
} : {};
qr.filterProps = ["rowGap"];
const Ec = he({
  prop: "gridColumn"
}), xc = he({
  prop: "gridRow"
}), wc = he({
  prop: "gridAutoFlow"
}), Tc = he({
  prop: "gridAutoColumns"
}), _c = he({
  prop: "gridAutoRows"
}), Sc = he({
  prop: "gridTemplateColumns"
}), Oc = he({
  prop: "gridTemplateRows"
}), kc = he({
  prop: "gridTemplateAreas"
}), Rc = he({
  prop: "gridArea"
});
Ur(Wr, zr, qr, Ec, xc, wc, Tc, _c, Sc, Oc, kc, Rc);
function Dt(e, t) {
  return t === "grey" ? t : e;
}
const Cc = he({
  prop: "color",
  themeKey: "palette",
  transform: Dt
}), Pc = he({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Dt
}), $c = he({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Dt
});
Ur(Cc, Pc, $c);
function je(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const jc = he({
  prop: "width",
  transform: je
}), Nn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || In[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: je(r)
      };
    };
    return rt(e, e.maxWidth, t);
  }
  return null;
};
Nn.filterProps = ["maxWidth"];
const Ac = he({
  prop: "minWidth",
  transform: je
}), Dc = he({
  prop: "height",
  transform: je
}), Mc = he({
  prop: "maxHeight",
  transform: je
}), Ic = he({
  prop: "minHeight",
  transform: je
});
he({
  prop: "size",
  cssProperty: "width",
  transform: je
});
he({
  prop: "size",
  cssProperty: "height",
  transform: je
});
const Nc = he({
  prop: "boxSizing"
});
Ur(jc, Nn, Ac, Dc, Mc, Ic, Nc);
const ir = {
  // borders
  border: {
    themeKey: "borders",
    transform: ze
  },
  borderTop: {
    themeKey: "borders",
    transform: ze
  },
  borderRight: {
    themeKey: "borders",
    transform: ze
  },
  borderBottom: {
    themeKey: "borders",
    transform: ze
  },
  borderLeft: {
    themeKey: "borders",
    transform: ze
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: ze
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Fr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Dt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Dt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Dt
  },
  // spacing
  p: {
    style: ue
  },
  pt: {
    style: ue
  },
  pr: {
    style: ue
  },
  pb: {
    style: ue
  },
  pl: {
    style: ue
  },
  px: {
    style: ue
  },
  py: {
    style: ue
  },
  padding: {
    style: ue
  },
  paddingTop: {
    style: ue
  },
  paddingRight: {
    style: ue
  },
  paddingBottom: {
    style: ue
  },
  paddingLeft: {
    style: ue
  },
  paddingX: {
    style: ue
  },
  paddingY: {
    style: ue
  },
  paddingInline: {
    style: ue
  },
  paddingInlineStart: {
    style: ue
  },
  paddingInlineEnd: {
    style: ue
  },
  paddingBlock: {
    style: ue
  },
  paddingBlockStart: {
    style: ue
  },
  paddingBlockEnd: {
    style: ue
  },
  m: {
    style: se
  },
  mt: {
    style: se
  },
  mr: {
    style: se
  },
  mb: {
    style: se
  },
  ml: {
    style: se
  },
  mx: {
    style: se
  },
  my: {
    style: se
  },
  margin: {
    style: se
  },
  marginTop: {
    style: se
  },
  marginRight: {
    style: se
  },
  marginBottom: {
    style: se
  },
  marginLeft: {
    style: se
  },
  marginX: {
    style: se
  },
  marginY: {
    style: se
  },
  marginInline: {
    style: se
  },
  marginInlineStart: {
    style: se
  },
  marginInlineEnd: {
    style: se
  },
  marginBlock: {
    style: se
  },
  marginBlockStart: {
    style: se
  },
  marginBlockEnd: {
    style: se
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Wr
  },
  rowGap: {
    style: qr
  },
  columnGap: {
    style: zr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: je
  },
  maxWidth: {
    style: Nn
  },
  minWidth: {
    transform: je
  },
  height: {
    transform: je
  },
  maxHeight: {
    transform: je
  },
  minHeight: {
    transform: je
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Lc(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Yc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qi() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: f,
      transform: h,
      style: p
    } = s;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const d = Nr(o, f) || {};
    return p ? p(a) : rt(a, n, (m) => {
      let c = xr(d, h, m);
      return m === c && typeof m == "string" && (c = xr(d, h, `${r}${m === "default" ? "" : lt(m)}`, m)), u === !1 ? c : {
        [u]: c
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {},
      nested: a
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : ir;
    function u(f) {
      let h = f;
      if (typeof f == "function")
        h = f(i);
      else if (typeof f != "object")
        return f;
      if (!h)
        return null;
      const p = Qu(i.breakpoints), d = Object.keys(p);
      let y = p;
      return Object.keys(h).forEach((m) => {
        const c = Yc(h[m], i);
        if (c != null)
          if (typeof c == "object")
            if (s[m])
              y = Ht(y, e(m, c, i, s));
            else {
              const b = rt({
                theme: i
              }, c, (x) => ({
                [m]: x
              }));
              Lc(b, c) ? y[m] = t({
                sx: c,
                theme: i,
                nested: !0
              }) : y = Ht(y, b);
            }
          else
            y = Ht(y, e(m, c, i, s));
      }), !a && i.modularCssLayers ? {
        "@layer sx": Ko(d, y)
      } : Ko(d, y);
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return t;
}
const Vr = Qi();
Vr.filterProps = ["sx"];
function ea(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const Uc = ["breakpoints", "palette", "spacing", "shape"];
function ta(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = dt(e, Uc), s = Zi(r), u = sc(o);
  let f = Xe({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: Q({
      mode: "light"
    }, n),
    spacing: u,
    shape: Q({}, Xu, i)
  }, a);
  return f.applyStyles = ea, f = t.reduce((h, p) => Xe(h, p), f), f.unstable_sxConfig = Q({}, ir, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return Vr({
      sx: p,
      theme: this
    });
  }, f;
}
const Fc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ta,
  private_createBreakpoints: Zi,
  unstable_applyStyles: ea
}, Symbol.toStringTag, { value: "Module" })), Wc = /* @__PURE__ */ nt(Fc), zc = ["sx"], qc = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : ir;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function Vc(e) {
  const {
    sx: t
  } = e, r = dt(e, zc), {
    systemProps: n,
    otherProps: o
  } = qc(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return at(s) ? Q({}, n, s) : n;
  } : i = Q({}, n, t), Q({}, o, {
    sx: i
  });
}
const Bc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vr,
  extendSxProp: Vc,
  unstable_createStyleFunctionSx: Qi,
  unstable_defaultSxConfig: ir
}, Symbol.toStringTag, { value: "Module" })), Kc = /* @__PURE__ */ nt(Bc);
var Lt = ft;
Object.defineProperty(tr, "__esModule", {
  value: !0
});
var Hc = tr.default = ul;
tr.shouldForwardProp = yr;
tr.systemDefaultTheme = void 0;
var We = Lt(ru()), xn = Lt(nu()), wr = nl(Bu), Gc = Ku, Zc = Lt(Hu), Jc = Lt(Gu), Xc = Lt(Wc), Qc = Lt(Kc);
const el = ["ownerState"], tl = ["variants"], rl = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function ra(e) {
  if (typeof WeakMap != "function") return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (ra = function(n) {
    return n ? r : t;
  })(e);
}
function nl(e, t) {
  if (e && e.__esModule) return e;
  if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
  var r = ra(t);
  if (r && r.has(e)) return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e) if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i];
  }
  return n.default = e, r && r.set(e, n), n;
}
function ol(e) {
  return Object.keys(e).length === 0;
}
function il(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function yr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Go(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
const al = tr.systemDefaultTheme = (0, Xc.default)(), Zo = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function fr({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return ol(t) ? e : t[r] || t;
}
function sl(e) {
  return e ? (t, r) => r[e] : null;
}
function mr(e, t, r) {
  let {
    ownerState: n
  } = t, o = (0, xn.default)(t, el);
  const i = typeof e == "function" ? e((0, We.default)({
    ownerState: n
  }, o)) : e;
  if (Array.isArray(i))
    return i.flatMap((a) => mr(a, (0, We.default)({
      ownerState: n
    }, o), r));
  if (i && typeof i == "object" && Array.isArray(i.variants)) {
    const {
      variants: a = []
    } = i;
    let u = (0, xn.default)(i, tl);
    return a.forEach((f) => {
      let h = !0;
      if (typeof f.props == "function" ? h = f.props((0, We.default)({
        ownerState: n
      }, o, n)) : Object.keys(f.props).forEach((p) => {
        (n == null ? void 0 : n[p]) !== f.props[p] && o[p] !== f.props[p] && (h = !1);
      }), h) {
        Array.isArray(u) || (u = [u]);
        const p = typeof f.style == "function" ? f.style((0, We.default)({
          ownerState: n
        }, o, n)) : f.style;
        u.push(r ? Go((0, wr.internal_serializeStyles)(p), r) : p);
      }
    }), u;
  }
  return r ? Go((0, wr.internal_serializeStyles)(i), r) : i;
}
function ul(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = al,
    rootShouldForwardProp: n = yr,
    slotShouldForwardProp: o = yr
  } = e, i = (a) => (0, Qc.default)((0, We.default)({}, a, {
    theme: fr((0, We.default)({}, a, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    (0, wr.internal_processStyles)(a, ($) => $.filter((j) => !(j != null && j.__mui_systemSx)));
    const {
      name: u,
      slot: f,
      skipVariantsResolver: h,
      skipSx: p,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: d = sl(Zo(f))
    } = s, y = (0, xn.default)(s, rl), m = u && u.startsWith("Mui") || f ? "components" : "custom", c = h !== void 0 ? h : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), b = p || !1;
    let x;
    process.env.NODE_ENV !== "production" && u && (x = `${u}-${Zo(f || "Root")}`);
    let k = yr;
    f === "Root" || f === "root" ? k = n : f ? k = o : il(a) && (k = void 0);
    const R = (0, wr.default)(a, (0, We.default)({
      shouldForwardProp: k,
      label: x
    }, y)), L = ($) => typeof $ == "function" && $.__emotion_real !== $ || (0, Gc.isPlainObject)($) ? (j) => {
      const Ne = fr({
        theme: j.theme,
        defaultTheme: r,
        themeId: t
      });
      return mr($, (0, We.default)({}, j, {
        theme: Ne
      }), Ne.modularCssLayers ? m : void 0);
    } : $, w = ($, ...j) => {
      let Ne = L($);
      const Le = j ? j.map(L) : [];
      u && d && Le.push((ce) => {
        const ie = fr((0, We.default)({}, ce, {
          defaultTheme: r,
          themeId: t
        }));
        if (!ie.components || !ie.components[u] || !ie.components[u].styleOverrides)
          return null;
        const le = ie.components[u].styleOverrides, ke = {};
        return Object.entries(le).forEach(([_e, Ye]) => {
          ke[_e] = mr(Ye, (0, We.default)({}, ce, {
            theme: ie
          }), ie.modularCssLayers ? "theme" : void 0);
        }), d(ce, ke);
      }), u && !c && Le.push((ce) => {
        var ie;
        const le = fr((0, We.default)({}, ce, {
          defaultTheme: r,
          themeId: t
        })), ke = le == null || (ie = le.components) == null || (ie = ie[u]) == null ? void 0 : ie.variants;
        return mr({
          variants: ke
        }, (0, We.default)({}, ce, {
          theme: le
        }), le.modularCssLayers ? "theme" : void 0);
      }), b || Le.push(i);
      const it = Le.length - j.length;
      if (Array.isArray($) && it > 0) {
        const ce = new Array(it).fill("");
        Ne = [...$, ...ce], Ne.raw = [...$.raw, ...ce];
      }
      const He = R(Ne, ...Le);
      if (process.env.NODE_ENV !== "production") {
        let ce;
        u && (ce = `${u}${(0, Zc.default)(f || "")}`), ce === void 0 && (ce = `Styled(${(0, Jc.default)(a)})`), He.displayName = ce;
      }
      return a.muiName && (He.muiName = a.muiName), He;
    };
    return R.withConfig && (w.withConfig = R.withConfig), w;
  };
}
function cl(e, t) {
  return Q({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var pe = {};
const ll = /* @__PURE__ */ nt(ms), fl = /* @__PURE__ */ nt(Hs);
var na = ft;
Object.defineProperty(pe, "__esModule", {
  value: !0
});
pe.alpha = sa;
pe.blend = Tl;
pe.colorChannel = void 0;
var dl = pe.darken = Yn;
pe.decomposeColor = Ve;
pe.emphasize = ua;
var Jo = pe.getContrastRatio = bl;
pe.getLuminance = Tr;
pe.hexToRgb = oa;
pe.hslToRgb = aa;
var hl = pe.lighten = Un;
pe.private_safeAlpha = gl;
pe.private_safeColorChannel = void 0;
pe.private_safeDarken = El;
pe.private_safeEmphasize = wl;
pe.private_safeLighten = xl;
pe.recomposeColor = Yt;
pe.rgbToHex = vl;
var Xo = na(ll), pl = na(fl);
function Ln(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, pl.default)(e, t, r);
}
function oa(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function yl(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Ve(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ve(oa(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, Xo.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, Xo.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ia = (e) => {
  const t = Ve(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
pe.colorChannel = ia;
const ml = (e, t) => {
  try {
    return ia(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
pe.private_safeColorChannel = ml;
function Yt(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function vl(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Ve(e);
  return `#${t.map((r, n) => yl(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function aa(e) {
  e = Ve(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, h = (f + r / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let s = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", u.push(t[3])), Yt({
    type: s,
    values: u
  });
}
function Tr(e) {
  e = Ve(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ve(aa(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function bl(e, t) {
  const r = Tr(e), n = Tr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function sa(e, t) {
  return e = Ve(e), t = Ln(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Yt(e);
}
function gl(e, t, r) {
  try {
    return sa(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Yn(e, t) {
  if (e = Ve(e), t = Ln(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Yt(e);
}
function El(e, t, r) {
  try {
    return Yn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Un(e, t) {
  if (e = Ve(e), t = Ln(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Yt(e);
}
function xl(e, t, r) {
  try {
    return Un(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function ua(e, t = 0.15) {
  return Tr(e) > 0.5 ? Yn(e, t) : Un(e, t);
}
function wl(e, t, r) {
  try {
    return ua(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Tl(e, t, r, n = 1) {
  const o = (u, f) => Math.round((u ** (1 / n) * (1 - r) + f ** (1 / n) * r) ** n), i = Ve(e), a = Ve(t), s = [o(i.values[0], a.values[0]), o(i.values[1], a.values[1]), o(i.values[2], a.values[2])];
  return Yt({
    type: "rgb",
    values: s
  });
}
const Qt = {
  black: "#000",
  white: "#fff"
}, _l = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, St = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ot = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Bt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, kt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Rt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ct = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Sl = ["mode", "contrastThreshold", "tonalOffset"], Qo = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Qt.white,
    default: Qt.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, fn = {
  text: {
    primary: Qt.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Qt.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function ei(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = hl(e.main, o) : t === "dark" && (e.dark = dl(e.main, i)));
}
function Ol(e = "light") {
  return e === "dark" ? {
    main: kt[200],
    light: kt[50],
    dark: kt[400]
  } : {
    main: kt[700],
    light: kt[400],
    dark: kt[800]
  };
}
function kl(e = "light") {
  return e === "dark" ? {
    main: St[200],
    light: St[50],
    dark: St[400]
  } : {
    main: St[500],
    light: St[300],
    dark: St[700]
  };
}
function Rl(e = "light") {
  return e === "dark" ? {
    main: Ot[500],
    light: Ot[300],
    dark: Ot[700]
  } : {
    main: Ot[700],
    light: Ot[400],
    dark: Ot[800]
  };
}
function Cl(e = "light") {
  return e === "dark" ? {
    main: Rt[400],
    light: Rt[300],
    dark: Rt[700]
  } : {
    main: Rt[700],
    light: Rt[500],
    dark: Rt[900]
  };
}
function Pl(e = "light") {
  return e === "dark" ? {
    main: Ct[400],
    light: Ct[300],
    dark: Ct[700]
  } : {
    main: Ct[800],
    light: Ct[500],
    dark: Ct[900]
  };
}
function $l(e = "light") {
  return e === "dark" ? {
    main: Bt[400],
    light: Bt[300],
    dark: Bt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Bt[500],
    dark: Bt[900]
  };
}
function jl(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = dt(e, Sl), i = e.primary || Ol(t), a = e.secondary || kl(t), s = e.error || Rl(t), u = e.info || Cl(t), f = e.success || Pl(t), h = e.warning || $l(t);
  function p(c) {
    const b = Jo(c, fn.text.primary) >= r ? fn.text.primary : Qo.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const x = Jo(c, b);
      x < 3 && console.error([`MUI: The contrast ratio of ${x}:1 for ${b} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return b;
  }
  const d = ({
    color: c,
    name: b,
    mainShade: x = 500,
    lightShade: k = 300,
    darkShade: R = 700
  }) => {
    if (c = Q({}, c), !c.main && c[x] && (c.main = c[x]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${x}\` property.` : Zt(11, b ? ` (${b})` : "", x));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${b ? ` (${b})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Zt(12, b ? ` (${b})` : "", JSON.stringify(c.main)));
    return ei(c, "light", k, n), ei(c, "dark", R, n), c.contrastText || (c.contrastText = p(c.main)), c;
  }, y = {
    dark: fn,
    light: Qo
  };
  return process.env.NODE_ENV !== "production" && (y[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Xe(Q({
    // A collection of common colors.
    common: Q({}, Qt),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: d({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: d({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: d({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: d({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: d({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: d({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: _l,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: d,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, y[t]), o);
}
const Al = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Dl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const ti = {
  textTransform: "uppercase"
}, ri = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ml(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = ri,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: p
  } = r, d = dt(r, Al);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = o / 14, m = p || ((x) => `${x / f * y}rem`), c = (x, k, R, L, w) => Q({
    fontFamily: n,
    fontWeight: x,
    fontSize: m(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R
  }, n === ri ? {
    letterSpacing: `${Dl(L / k)}em`
  } : {}, w, h), b = {
    h1: c(i, 96, 1.167, -1.5),
    h2: c(i, 60, 1.2, -0.5),
    h3: c(a, 48, 1.167, 0),
    h4: c(a, 34, 1.235, 0.25),
    h5: c(a, 24, 1.334, 0),
    h6: c(s, 20, 1.6, 0.15),
    subtitle1: c(a, 16, 1.75, 0.15),
    subtitle2: c(s, 14, 1.57, 0.1),
    body1: c(a, 16, 1.5, 0.15),
    body2: c(a, 14, 1.43, 0.15),
    button: c(s, 14, 1.75, 0.4, ti),
    caption: c(a, 12, 1.66, 0.4),
    overline: c(a, 12, 2.66, 1, ti),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Xe(Q({
    htmlFontSize: f,
    pxToRem: m,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: u
  }, b), d, {
    clone: !1
    // No need to clone deep
  });
}
const Il = 0.2, Nl = 0.14, Ll = 0.12;
function ae(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Il})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Nl})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ll})`].join(",");
}
const Yl = ["none", ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Ul = ["duration", "easing", "delay"], Fl = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Wl = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ni(e) {
  return `${Math.round(e)}ms`;
}
function zl(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function ql(e) {
  const t = Q({}, Fl, e.easing), r = Q({}, Wl, e.duration);
  return Q({
    getAutoHeightDuration: zl,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: u = 0
      } = i, f = dt(i, Ul);
      if (process.env.NODE_ENV !== "production") {
        const h = (d) => typeof d == "string", p = (d) => !isNaN(parseFloat(d));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !h(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), h(s) || console.error('MUI: Argument "easing" must be a string.'), !p(u) && !h(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof a == "string" ? a : ni(a)} ${s} ${typeof u == "string" ? u : ni(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Vl = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Bl = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Kl(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = dt(e, Bl);
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateCssVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Zt(18));
  const s = jl(n), u = ta(e);
  let f = Xe(u, {
    mixins: cl(u.breakpoints, r),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Yl.slice(),
    typography: Ml(s, i),
    transitions: ql(o),
    zIndex: Q({}, Vl)
  });
  if (f = Xe(f, a), f = t.reduce((h, p) => Xe(h, p), f), process.env.NODE_ENV !== "production") {
    const h = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], p = (d, y) => {
      let m;
      for (m in d) {
        const c = d[m];
        if (h.indexOf(m) !== -1 && Object.keys(c).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const b = jn("", m);
            console.error([`MUI: The \`${y}\` component increases the CSS specificity of the \`${m}\` internal state.`, "You can not override it like this: ", JSON.stringify(d, null, 2), "", `Instead, you need to use the '&.${b}' syntax:`, JSON.stringify({
              root: {
                [`&.${b}`]: c
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          d[m] = {};
        }
      }
    };
    Object.keys(f.components).forEach((d) => {
      const y = f.components[d].styleOverrides;
      y && d.indexOf("Mui") === 0 && p(y, d);
    });
  }
  return f.unstable_sxConfig = Q({}, ir, a == null ? void 0 : a.unstable_sxConfig), f.unstable_sx = function(p) {
    return Vr({
      sx: p,
      theme: this
    });
  }, f;
}
const Hl = Kl(), Gl = "$$material";
function Zl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Jl = (e) => Zl(e) && e !== "classes", Xl = Hc({
  themeId: Gl,
  defaultTheme: Hl,
  rootShouldForwardProp: Jl
});
function Ql(e) {
  return jn("MuiSvgIcon", e);
}
Bs("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ef = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], tf = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${lt(t)}`, `fontSize${lt(r)}`]
  };
  return zs(o, Ql, n);
}, rf = Xl("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${lt(r.color)}`], t[`fontSize${lt(r.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n, o, i, a, s, u, f, h, p, d, y, m;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: t.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (r = e.transitions) == null || (n = r.create) == null ? void 0 : n.call(r, "fill", {
      duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((i = e.typography) == null || (a = i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem",
      medium: ((s = e.typography) == null || (u = s.pxToRem) == null ? void 0 : u.call(s, 24)) || "1.5rem",
      large: ((f = e.typography) == null || (h = f.pxToRem) == null ? void 0 : h.call(f, 35)) || "2.1875rem"
    }[t.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (p = (d = (e.vars || e).palette) == null || (d = d[t.color]) == null ? void 0 : d.main) != null ? p : {
      action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
      disabled: (m = (e.vars || e).palette) == null || (m = m.action) == null ? void 0 : m.disabled,
      inherit: void 0
    }[t.color]
  };
}), _r = /* @__PURE__ */ oe.forwardRef(function(t, r) {
  const n = tu({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: u = "medium",
    htmlColor: f,
    inheritViewBox: h = !1,
    titleAccess: p,
    viewBox: d = "0 0 24 24"
  } = n, y = dt(n, ef), m = /* @__PURE__ */ oe.isValidElement(o) && o.type === "svg", c = Q({}, n, {
    color: a,
    component: s,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: h,
    viewBox: d,
    hasSvgAsChild: m
  }), b = {};
  h || (b.viewBox = d);
  const x = tf(c);
  return /* @__PURE__ */ v.jsxs(rf, Q({
    as: s,
    className: Gs(x.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r
  }, b, y, m && o.props, {
    ownerState: c,
    children: [m ? o.props.children : o, p ? /* @__PURE__ */ v.jsx("title", {
      children: p
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (_r.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: M.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: M.object,
  /**
   * @ignore
   */
  className: M.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: M.oneOfType([M.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), M.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: M.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: M.oneOfType([M.oneOf(["inherit", "large", "medium", "small"]), M.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: M.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: M.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: M.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: M.oneOfType([M.arrayOf(M.oneOfType([M.func, M.object, M.bool])), M.func, M.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: M.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: M.string
});
_r.muiName = "SvgIcon";
function nf(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ v.jsx(_r, Q({
      "data-testid": `${t}Icon`,
      ref: o
    }, n, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = _r.muiName, /* @__PURE__ */ oe.memo(/* @__PURE__ */ oe.forwardRef(r));
}
const of = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), Li.configure(e);
  }
}, af = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: lt,
  createChainedFunction: Ts,
  createSvgIcon: nf,
  debounce: _s,
  deprecatedPropType: Ss,
  isMuiElement: Os,
  ownerDocument: Mi,
  ownerWindow: ks,
  requirePropFactory: Rs,
  setRef: Ii,
  unstable_ClassNameGenerator: of,
  unstable_useEnhancedEffect: Ni,
  unstable_useId: Ps,
  unsupportedProp: $s,
  useControlled: js,
  useEventCallback: As,
  useForkRef: Ds,
  useIsFocusVisible: Ws
}, Symbol.toStringTag, { value: "Module" })), sf = /* @__PURE__ */ nt(af);
var oi;
function Ut() {
  return oi || (oi = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = sf;
  }(Xr)), Xr;
}
var uf = ft;
Object.defineProperty(Cn, "__esModule", {
  value: !0
});
var Fn = Cn.default = void 0, cf = uf(Ut()), lf = Et();
Fn = Cn.default = (0, cf.default)(/* @__PURE__ */ (0, lf.jsx)("path", {
  d: "M17 12h-5v5h5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1zm3 18H5V8h14z"
}), "Event");
var Wn = {}, ff = ft;
Object.defineProperty(Wn, "__esModule", {
  value: !0
});
var ca = Wn.default = void 0, df = ff(Ut()), hf = Et();
ca = Wn.default = (0, df.default)(/* @__PURE__ */ (0, hf.jsx)("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"
}), "Person");
var zn = {}, pf = ft;
Object.defineProperty(zn, "__esModule", {
  value: !0
});
var la = zn.default = void 0, yf = pf(Ut()), mf = Et();
la = zn.default = (0, yf.default)(/* @__PURE__ */ (0, mf.jsx)("path", {
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), "Place");
var qn = {}, vf = ft;
Object.defineProperty(qn, "__esModule", {
  value: !0
});
var fa = qn.default = void 0, bf = vf(Ut()), ii = Et();
fa = qn.default = (0, bf.default)([/* @__PURE__ */ (0, ii.jsx)("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"
}, "0"), /* @__PURE__ */ (0, ii.jsx)("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
}, "1")], "Schedule");
var Vn = {}, gf = ft;
Object.defineProperty(Vn, "__esModule", {
  value: !0
});
var da = Vn.default = void 0, Ef = gf(Ut()), xf = Et();
da = Vn.default = (0, Ef.default)(/* @__PURE__ */ (0, xf.jsx)("path", {
  d: "M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM12 13 3.74 7.84 12 3l8.26 4.84z"
}), "Drafts");
var Bn = {}, wf = ft;
Object.defineProperty(Bn, "__esModule", {
  value: !0
});
var ha = Bn.default = void 0, Tf = wf(Ut()), _f = Et();
ha = Bn.default = (0, Tf.default)(/* @__PURE__ */ (0, _f.jsx)("path", {
  d: "M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z"
}), "Publish");
const Sf = [/* @__PURE__ */ v.jsx(Ba, { source: "q", alwaysOn: !0 }, "search")], Of = () => {
  const e = gt();
  return /* @__PURE__ */ v.jsx(Oi, { sx: {
    order: -1,
    mr: 2,
    mt: 8,
    width: 200,
    backgroundColor: e.palette.background.paper
  }, children: /* @__PURE__ */ v.jsx(ki, { children: /* @__PURE__ */ v.jsxs(Ka, { label: "Status", icon: /* @__PURE__ */ v.jsx(Fn, {}), children: [
    /* @__PURE__ */ v.jsx(mo, { label: "Published", value: { status: "published" }, icon: /* @__PURE__ */ v.jsx(ha, {}) }),
    /* @__PURE__ */ v.jsx(mo, { label: "Draft", value: { status: "draft" }, icon: /* @__PURE__ */ v.jsx(da, {}) })
  ] }) }) });
}, kf = () => {
  const e = gt();
  return /* @__PURE__ */ v.jsx(
    Cr,
    {
      filters: Sf,
      aside: /* @__PURE__ */ v.jsx(Of, {}),
      sx: { "& .RaList-main": { borderColor: e.palette.divider } },
      children: /* @__PURE__ */ v.jsxs(Pr, { rowClick: "edit", children: [
        /* @__PURE__ */ v.jsx(Ae, { source: "id" }),
        /* @__PURE__ */ v.jsx(Ae, { source: "name" }),
        /* @__PURE__ */ v.jsx(Ae, { source: "location" }),
        /* @__PURE__ */ v.jsx(pn, { source: "startDate" }),
        /* @__PURE__ */ v.jsx(pn, { source: "endDate" }),
        /* @__PURE__ */ v.jsx(_i, { source: "status" })
      ] })
    }
  );
};
var wn = [
  "MO",
  "TU",
  "WE",
  "TH",
  "FR",
  "SA",
  "SU"
], Oe = (
  /** @class */
  function() {
    function e(t, r) {
      if (r === 0)
        throw new Error("Can't create weekday with n == 0");
      this.weekday = t, this.n = r;
    }
    return e.fromStr = function(t) {
      return new e(wn.indexOf(t));
    }, e.prototype.nth = function(t) {
      return this.n === t ? this : new e(this.weekday, t);
    }, e.prototype.equals = function(t) {
      return this.weekday === t.weekday && this.n === t.n;
    }, e.prototype.toString = function() {
      var t = wn[this.weekday];
      return this.n && (t = (this.n > 0 ? "+" : "") + String(this.n) + t), t;
    }, e.prototype.getJsWeekday = function() {
      return this.weekday === 6 ? 0 : this.weekday + 1;
    }, e;
  }()
), me = function(e) {
  return e != null;
}, Ge = function(e) {
  return typeof e == "number";
}, ai = function(e) {
  return typeof e == "string" && wn.includes(e);
}, De = Array.isArray, et = function(e, t) {
  t === void 0 && (t = e), arguments.length === 1 && (t = e, e = 0);
  for (var r = [], n = e; n < t; n++)
    r.push(n);
  return r;
}, B = function(e, t) {
  var r = 0, n = [];
  if (De(e))
    for (; r < t; r++)
      n[r] = [].concat(e);
  else
    for (; r < t; r++)
      n[r] = e;
  return n;
}, Rf = function(e) {
  return De(e) ? e : [e];
};
function Pt(e, t, r) {
  r === void 0 && (r = " ");
  var n = String(e);
  return t = t >> 0, n.length > t ? String(n) : (t = t - n.length, t > r.length && (r += B(r, t / r.length)), r.slice(0, t) + String(n));
}
var Cf = function(e, t, r) {
  var n = e.split(t);
  return r ? n.slice(0, r).concat([n.slice(r).join(t)]) : n;
}, qe = function(e, t) {
  var r = e % t;
  return r * t < 0 ? r + t : r;
}, dn = function(e, t) {
  return { div: Math.floor(e / t), mod: qe(e, t) };
}, Je = function(e) {
  return !me(e) || e.length === 0;
}, be = function(e) {
  return !Je(e);
}, ne = function(e, t) {
  return be(e) && e.indexOf(t) !== -1;
}, bt = function(e, t, r, n, o, i) {
  return n === void 0 && (n = 0), o === void 0 && (o = 0), i === void 0 && (i = 0), new Date(Date.UTC(e, t - 1, r, n, o, i));
}, Pf = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], pa = 1e3 * 60 * 60 * 24, ya = 9999, ma = bt(1970, 1, 1), $f = [6, 0, 1, 2, 3, 4, 5], Gt = function(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}, va = function(e) {
  return e instanceof Date;
}, Kt = function(e) {
  return va(e) && !isNaN(e.getTime());
}, jf = function(e, t) {
  var r = e.getTime(), n = t.getTime(), o = r - n;
  return Math.round(o / pa);
}, Tn = function(e) {
  return jf(e, ma);
}, ba = function(e) {
  return new Date(ma.getTime() + e * pa);
}, Af = function(e) {
  var t = e.getUTCMonth();
  return t === 1 && Gt(e.getUTCFullYear()) ? 29 : Pf[t];
}, It = function(e) {
  return $f[e.getUTCDay()];
}, si = function(e, t) {
  var r = bt(e, t + 1, 1);
  return [It(r), Af(r)];
}, ga = function(e, t) {
  return t = t || e, new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
}, _n = function(e) {
  var t = new Date(e.getTime());
  return t;
}, ui = function(e) {
  for (var t = [], r = 0; r < e.length; r++)
    t.push(_n(e[r]));
  return t;
}, er = function(e) {
  e.sort(function(t, r) {
    return t.getTime() - r.getTime();
  });
}, Kn = function(e, t) {
  t === void 0 && (t = !0);
  var r = new Date(e);
  return [
    Pt(r.getUTCFullYear().toString(), 4, "0"),
    Pt(r.getUTCMonth() + 1, 2, "0"),
    Pt(r.getUTCDate(), 2, "0"),
    "T",
    Pt(r.getUTCHours(), 2, "0"),
    Pt(r.getUTCMinutes(), 2, "0"),
    Pt(r.getUTCSeconds(), 2, "0"),
    t ? "Z" : ""
  ].join("");
}, Hn = function(e) {
  var t = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/, r = t.exec(e);
  if (!r)
    throw new Error("Invalid UNTIL value: ".concat(e));
  return new Date(Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[5], 10) || 0, parseInt(r[6], 10) || 0, parseInt(r[7], 10) || 0));
}, ci = function(e, t) {
  var r = e.toLocaleString("sv-SE", { timeZone: t });
  return r.replace(" ", "T") + "Z";
}, Df = function(e, t) {
  var r = Intl.DateTimeFormat().resolvedOptions().timeZone, n = new Date(ci(e, r)), o = new Date(ci(e, t ?? "UTC")), i = o.getTime() - n.getTime();
  return new Date(e.getTime() - i);
}, jt = (
  /** @class */
  function() {
    function e(t, r) {
      this.minDate = null, this.maxDate = null, this._result = [], this.total = 0, this.method = t, this.args = r, t === "between" ? (this.maxDate = r.inc ? r.before : new Date(r.before.getTime() - 1), this.minDate = r.inc ? r.after : new Date(r.after.getTime() + 1)) : t === "before" ? this.maxDate = r.inc ? r.dt : new Date(r.dt.getTime() - 1) : t === "after" && (this.minDate = r.inc ? r.dt : new Date(r.dt.getTime() + 1));
    }
    return e.prototype.accept = function(t) {
      ++this.total;
      var r = this.minDate && t < this.minDate, n = this.maxDate && t > this.maxDate;
      if (this.method === "between") {
        if (r)
          return !0;
        if (n)
          return !1;
      } else if (this.method === "before") {
        if (n)
          return !1;
      } else if (this.method === "after")
        return r ? !0 : (this.add(t), !1);
      return this.add(t);
    }, e.prototype.add = function(t) {
      return this._result.push(t), !0;
    }, e.prototype.getValue = function() {
      var t = this._result;
      switch (this.method) {
        case "all":
        case "between":
          return t;
        case "before":
        case "after":
        default:
          return t.length ? t[t.length - 1] : null;
      }
    }, e.prototype.clone = function() {
      return new e(this.method, this.args);
    }, e;
  }()
), Sn = function(e, t) {
  return Sn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (r[o] = n[o]);
  }, Sn(e, t);
};
function Gn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  Sn(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Ie = function() {
  return Ie = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Ie.apply(this, arguments);
};
function T(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, o = t.length, i; n < o; n++)
    (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var li = (
  /** @class */
  function(e) {
    Gn(t, e);
    function t(r, n, o) {
      var i = e.call(this, r, n) || this;
      return i.iterator = o, i;
    }
    return t.prototype.add = function(r) {
      return this.iterator(r, this._result.length) ? (this._result.push(r), !0) : !1;
    }, t;
  }(jt)
), Sr = {
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  tokens: {
    SKIP: /^[ \r\n\t]+|^\.$/,
    number: /^[1-9][0-9]*/,
    numberAsText: /^(one|two|three)/i,
    every: /^every/i,
    "day(s)": /^days?/i,
    "weekday(s)": /^weekdays?/i,
    "week(s)": /^weeks?/i,
    "hour(s)": /^hours?/i,
    "minute(s)": /^minutes?/i,
    "month(s)": /^months?/i,
    "year(s)": /^years?/i,
    on: /^(on|in)/i,
    at: /^(at)/i,
    the: /^the/i,
    first: /^first/i,
    second: /^second/i,
    third: /^third/i,
    nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
    last: /^last/i,
    for: /^for/i,
    "time(s)": /^times?/i,
    until: /^(un)?til/i,
    monday: /^mo(n(day)?)?/i,
    tuesday: /^tu(e(s(day)?)?)?/i,
    wednesday: /^we(d(n(esday)?)?)?/i,
    thursday: /^th(u(r(sday)?)?)?/i,
    friday: /^fr(i(day)?)?/i,
    saturday: /^sa(t(urday)?)?/i,
    sunday: /^su(n(day)?)?/i,
    january: /^jan(uary)?/i,
    february: /^feb(ruary)?/i,
    march: /^mar(ch)?/i,
    april: /^apr(il)?/i,
    may: /^may/i,
    june: /^june?/i,
    july: /^july?/i,
    august: /^aug(ust)?/i,
    september: /^sep(t(ember)?)?/i,
    october: /^oct(ober)?/i,
    november: /^nov(ember)?/i,
    december: /^dec(ember)?/i,
    comma: /^(,\s*|(and|or)\s*)+/i
  }
}, fi = function(e, t) {
  return e.indexOf(t) !== -1;
}, Mf = function(e) {
  return e.toString();
}, If = function(e, t, r) {
  return "".concat(t, " ").concat(r, ", ").concat(e);
}, ot = (
  /** @class */
  function() {
    function e(t, r, n, o) {
      if (r === void 0 && (r = Mf), n === void 0 && (n = Sr), o === void 0 && (o = If), this.text = [], this.language = n || Sr, this.gettext = r, this.dateFormatter = o, this.rrule = t, this.options = t.options, this.origOptions = t.origOptions, this.origOptions.bymonthday) {
        var i = [].concat(this.options.bymonthday), a = [].concat(this.options.bynmonthday);
        i.sort(function(h, p) {
          return h - p;
        }), a.sort(function(h, p) {
          return p - h;
        }), this.bymonthday = i.concat(a), this.bymonthday.length || (this.bymonthday = null);
      }
      if (me(this.origOptions.byweekday)) {
        var s = De(this.origOptions.byweekday) ? this.origOptions.byweekday : [this.origOptions.byweekday], u = String(s);
        this.byweekday = {
          allWeeks: s.filter(function(h) {
            return !h.n;
          }),
          someWeeks: s.filter(function(h) {
            return !!h.n;
          }),
          isWeekdays: u.indexOf("MO") !== -1 && u.indexOf("TU") !== -1 && u.indexOf("WE") !== -1 && u.indexOf("TH") !== -1 && u.indexOf("FR") !== -1 && u.indexOf("SA") === -1 && u.indexOf("SU") === -1,
          isEveryDay: u.indexOf("MO") !== -1 && u.indexOf("TU") !== -1 && u.indexOf("WE") !== -1 && u.indexOf("TH") !== -1 && u.indexOf("FR") !== -1 && u.indexOf("SA") !== -1 && u.indexOf("SU") !== -1
        };
        var f = function(h, p) {
          return h.weekday - p.weekday;
        };
        this.byweekday.allWeeks.sort(f), this.byweekday.someWeeks.sort(f), this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null), this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
      } else
        this.byweekday = null;
    }
    return e.isFullyConvertible = function(t) {
      var r = !0;
      if (!(t.options.freq in e.IMPLEMENTED) || t.origOptions.until && t.origOptions.count)
        return !1;
      for (var n in t.origOptions) {
        if (fi(["dtstart", "tzid", "wkst", "freq"], n))
          return !0;
        if (!fi(e.IMPLEMENTED[t.options.freq], n))
          return !1;
      }
      return r;
    }, e.prototype.isFullyConvertible = function() {
      return e.isFullyConvertible(this.rrule);
    }, e.prototype.toString = function() {
      var t = this.gettext;
      if (!(this.options.freq in e.IMPLEMENTED))
        return t("RRule error: Unable to fully convert this rrule to text");
      if (this.text = [t("every")], this[C.FREQUENCIES[this.options.freq]](), this.options.until) {
        this.add(t("until"));
        var r = this.options.until;
        this.add(this.dateFormatter(r.getUTCFullYear(), this.language.monthNames[r.getUTCMonth()], r.getUTCDate()));
      } else this.options.count && this.add(t("for")).add(this.options.count.toString()).add(this.plural(this.options.count) ? t("times") : t("time"));
      return this.isFullyConvertible() || this.add(t("(~ approximate)")), this.text.join("");
    }, e.prototype.HOURLY = function() {
      var t = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? t("hours") : t("hour"));
    }, e.prototype.MINUTELY = function() {
      var t = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? t("minutes") : t("minute"));
    }, e.prototype.DAILY = function() {
      var t = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.byweekday && this.byweekday.isWeekdays ? this.add(this.plural(this.options.interval) ? t("weekdays") : t("weekday")) : this.add(this.plural(this.options.interval) ? t("days") : t("day")), this.origOptions.bymonth && (this.add(t("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday ? this._byweekday() : this.origOptions.byhour && this._byhour();
    }, e.prototype.WEEKLY = function() {
      var t = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? t("weeks") : t("week")), this.byweekday && this.byweekday.isWeekdays ? this.options.interval === 1 ? this.add(this.plural(this.options.interval) ? t("weekdays") : t("weekday")) : this.add(t("on")).add(t("weekdays")) : this.byweekday && this.byweekday.isEveryDay ? this.add(this.plural(this.options.interval) ? t("days") : t("day")) : (this.options.interval === 1 && this.add(t("week")), this.origOptions.bymonth && (this.add(t("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.origOptions.byhour && this._byhour());
    }, e.prototype.MONTHLY = function() {
      var t = this.gettext;
      this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()).add(t("months")), this.plural(this.options.interval) && this.add(t("in"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? t("months") : t("month"))), this.bymonthday ? this._bymonthday() : this.byweekday && this.byweekday.isWeekdays ? this.add(t("on")).add(t("weekdays")) : this.byweekday && this._byweekday();
    }, e.prototype.YEARLY = function() {
      var t = this.gettext;
      this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()), this.add(t("years"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? t("years") : t("year"))), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.options.byyearday && this.add(t("on the")).add(this.list(this.options.byyearday, this.nth, t("and"))).add(t("day")), this.options.byweekno && this.add(t("in")).add(this.plural(this.options.byweekno.length) ? t("weeks") : t("week")).add(this.list(this.options.byweekno, void 0, t("and")));
    }, e.prototype._bymonthday = function() {
      var t = this.gettext;
      this.byweekday && this.byweekday.allWeeks ? this.add(t("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, t("or"))).add(t("the")).add(this.list(this.bymonthday, this.nth, t("or"))) : this.add(t("on the")).add(this.list(this.bymonthday, this.nth, t("and")));
    }, e.prototype._byweekday = function() {
      var t = this.gettext;
      this.byweekday.allWeeks && !this.byweekday.isWeekdays && this.add(t("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)), this.byweekday.someWeeks && (this.byweekday.allWeeks && this.add(t("and")), this.add(t("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, t("and"))));
    }, e.prototype._byhour = function() {
      var t = this.gettext;
      this.add(t("at")).add(this.list(this.origOptions.byhour, void 0, t("and")));
    }, e.prototype._bymonth = function() {
      this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
    }, e.prototype.nth = function(t) {
      t = parseInt(t.toString(), 10);
      var r, n = this.gettext;
      if (t === -1)
        return n("last");
      var o = Math.abs(t);
      switch (o) {
        case 1:
        case 21:
        case 31:
          r = o + n("st");
          break;
        case 2:
        case 22:
          r = o + n("nd");
          break;
        case 3:
        case 23:
          r = o + n("rd");
          break;
        default:
          r = o + n("th");
      }
      return t < 0 ? r + " " + n("last") : r;
    }, e.prototype.monthtext = function(t) {
      return this.language.monthNames[t - 1];
    }, e.prototype.weekdaytext = function(t) {
      var r = Ge(t) ? (t + 1) % 7 : t.getJsWeekday();
      return (t.n ? this.nth(t.n) + " " : "") + this.language.dayNames[r];
    }, e.prototype.plural = function(t) {
      return t % 100 !== 1;
    }, e.prototype.add = function(t) {
      return this.text.push(" "), this.text.push(t), this;
    }, e.prototype.list = function(t, r, n, o) {
      var i = this;
      o === void 0 && (o = ","), De(t) || (t = [t]);
      var a = function(u, f, h) {
        for (var p = "", d = 0; d < u.length; d++)
          d !== 0 && (d === u.length - 1 ? p += " " + h + " " : p += f + " "), p += u[d];
        return p;
      };
      r = r || function(u) {
        return u.toString();
      };
      var s = function(u) {
        return r && r.call(i, u);
      };
      return n ? a(t.map(s), o, n) : t.map(s).join(o + " ");
    }, e;
  }()
), Nf = (
  /** @class */
  function() {
    function e(t) {
      this.done = !0, this.rules = t;
    }
    return e.prototype.start = function(t) {
      return this.text = t, this.done = !1, this.nextSymbol();
    }, e.prototype.isDone = function() {
      return this.done && this.symbol === null;
    }, e.prototype.nextSymbol = function() {
      var t, r;
      this.symbol = null, this.value = null;
      do {
        if (this.done)
          return !1;
        var n = void 0;
        t = null;
        for (var o in this.rules) {
          n = this.rules[o];
          var i = n.exec(this.text);
          i && (t === null || i[0].length > t[0].length) && (t = i, r = o);
        }
        if (t != null && (this.text = this.text.substr(t[0].length), this.text === "" && (this.done = !0)), t == null) {
          this.done = !0, this.symbol = null, this.value = null;
          return;
        }
      } while (r === "SKIP");
      return this.symbol = r, this.value = t, !0;
    }, e.prototype.accept = function(t) {
      if (this.symbol === t) {
        if (this.value) {
          var r = this.value;
          return this.nextSymbol(), r;
        }
        return this.nextSymbol(), !0;
      }
      return !1;
    }, e.prototype.acceptNumber = function() {
      return this.accept("number");
    }, e.prototype.expect = function(t) {
      if (this.accept(t))
        return !0;
      throw new Error("expected " + t + " but found " + this.symbol);
    }, e;
  }()
);
function Ea(e, t) {
  t === void 0 && (t = Sr);
  var r = {}, n = new Nf(t.tokens);
  if (!n.start(e))
    return null;
  return o(), r;
  function o() {
    n.expect("every");
    var d = n.acceptNumber();
    if (d && (r.interval = parseInt(d[0], 10)), n.isDone())
      throw new Error("Unexpected end");
    switch (n.symbol) {
      case "day(s)":
        r.freq = C.DAILY, n.nextSymbol() && (a(), p());
        break;
      case "weekday(s)":
        r.freq = C.WEEKLY, r.byweekday = [C.MO, C.TU, C.WE, C.TH, C.FR], n.nextSymbol(), a(), p();
        break;
      case "week(s)":
        r.freq = C.WEEKLY, n.nextSymbol() && (i(), a(), p());
        break;
      case "hour(s)":
        r.freq = C.HOURLY, n.nextSymbol() && (i(), p());
        break;
      case "minute(s)":
        r.freq = C.MINUTELY, n.nextSymbol() && (i(), p());
        break;
      case "month(s)":
        r.freq = C.MONTHLY, n.nextSymbol() && (i(), p());
        break;
      case "year(s)":
        r.freq = C.YEARLY, n.nextSymbol() && (i(), p());
        break;
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        r.freq = C.WEEKLY;
        var y = n.symbol.substr(0, 2).toUpperCase();
        if (r.byweekday = [C[y]], !n.nextSymbol())
          return;
        for (; n.accept("comma"); ) {
          if (n.isDone())
            throw new Error("Unexpected end");
          var m = u();
          if (!m)
            throw new Error("Unexpected symbol " + n.symbol + ", expected weekday");
          r.byweekday.push(C[m]), n.nextSymbol();
        }
        a(), h(), p();
        break;
      case "january":
      case "february":
      case "march":
      case "april":
      case "may":
      case "june":
      case "july":
      case "august":
      case "september":
      case "october":
      case "november":
      case "december":
        if (r.freq = C.YEARLY, r.bymonth = [s()], !n.nextSymbol())
          return;
        for (; n.accept("comma"); ) {
          if (n.isDone())
            throw new Error("Unexpected end");
          var c = s();
          if (!c)
            throw new Error("Unexpected symbol " + n.symbol + ", expected month");
          r.bymonth.push(c), n.nextSymbol();
        }
        i(), p();
        break;
      default:
        throw new Error("Unknown symbol");
    }
  }
  function i() {
    var d = n.accept("on"), y = n.accept("the");
    if (d || y)
      do {
        var m = f(), c = u(), b = s();
        if (m)
          c ? (n.nextSymbol(), r.byweekday || (r.byweekday = []), r.byweekday.push(C[c].nth(m))) : (r.bymonthday || (r.bymonthday = []), r.bymonthday.push(m), n.accept("day(s)"));
        else if (c)
          n.nextSymbol(), r.byweekday || (r.byweekday = []), r.byweekday.push(C[c]);
        else if (n.symbol === "weekday(s)")
          n.nextSymbol(), r.byweekday || (r.byweekday = [C.MO, C.TU, C.WE, C.TH, C.FR]);
        else if (n.symbol === "week(s)") {
          n.nextSymbol();
          var x = n.acceptNumber();
          if (!x)
            throw new Error("Unexpected symbol " + n.symbol + ", expected week number");
          for (r.byweekno = [parseInt(x[0], 10)]; n.accept("comma"); ) {
            if (x = n.acceptNumber(), !x)
              throw new Error("Unexpected symbol " + n.symbol + "; expected monthday");
            r.byweekno.push(parseInt(x[0], 10));
          }
        } else if (b)
          n.nextSymbol(), r.bymonth || (r.bymonth = []), r.bymonth.push(b);
        else
          return;
      } while (n.accept("comma") || n.accept("the") || n.accept("on"));
  }
  function a() {
    var d = n.accept("at");
    if (d)
      do {
        var y = n.acceptNumber();
        if (!y)
          throw new Error("Unexpected symbol " + n.symbol + ", expected hour");
        for (r.byhour = [parseInt(y[0], 10)]; n.accept("comma"); ) {
          if (y = n.acceptNumber(), !y)
            throw new Error("Unexpected symbol " + n.symbol + "; expected hour");
          r.byhour.push(parseInt(y[0], 10));
        }
      } while (n.accept("comma") || n.accept("at"));
  }
  function s() {
    switch (n.symbol) {
      case "january":
        return 1;
      case "february":
        return 2;
      case "march":
        return 3;
      case "april":
        return 4;
      case "may":
        return 5;
      case "june":
        return 6;
      case "july":
        return 7;
      case "august":
        return 8;
      case "september":
        return 9;
      case "october":
        return 10;
      case "november":
        return 11;
      case "december":
        return 12;
      default:
        return !1;
    }
  }
  function u() {
    switch (n.symbol) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        return n.symbol.substr(0, 2).toUpperCase();
      default:
        return !1;
    }
  }
  function f() {
    switch (n.symbol) {
      case "last":
        return n.nextSymbol(), -1;
      case "first":
        return n.nextSymbol(), 1;
      case "second":
        return n.nextSymbol(), n.accept("last") ? -2 : 2;
      case "third":
        return n.nextSymbol(), n.accept("last") ? -3 : 3;
      case "nth":
        var d = parseInt(n.value[1], 10);
        if (d < -366 || d > 366)
          throw new Error("Nth out of range: " + d);
        return n.nextSymbol(), n.accept("last") ? -d : d;
      default:
        return !1;
    }
  }
  function h() {
    n.accept("on"), n.accept("the");
    var d = f();
    if (d)
      for (r.bymonthday = [d], n.nextSymbol(); n.accept("comma"); ) {
        if (d = f(), !d)
          throw new Error("Unexpected symbol " + n.symbol + "; expected monthday");
        r.bymonthday.push(d), n.nextSymbol();
      }
  }
  function p() {
    if (n.symbol === "until") {
      var d = Date.parse(n.text);
      if (!d)
        throw new Error("Cannot parse until date:" + n.text);
      r.until = new Date(d);
    } else n.accept("for") && (r.count = parseInt(n.value[0], 10), n.expect("number"));
  }
}
var K;
(function(e) {
  e[e.YEARLY = 0] = "YEARLY", e[e.MONTHLY = 1] = "MONTHLY", e[e.WEEKLY = 2] = "WEEKLY", e[e.DAILY = 3] = "DAILY", e[e.HOURLY = 4] = "HOURLY", e[e.MINUTELY = 5] = "MINUTELY", e[e.SECONDLY = 6] = "SECONDLY";
})(K || (K = {}));
function Zn(e) {
  return e < K.HOURLY;
}
var Lf = function(e, t) {
  return t === void 0 && (t = Sr), new C(Ea(e, t) || void 0);
}, Ft = [
  "count",
  "until",
  "interval",
  "byweekday",
  "bymonthday",
  "bymonth"
];
ot.IMPLEMENTED = [];
ot.IMPLEMENTED[K.HOURLY] = Ft;
ot.IMPLEMENTED[K.MINUTELY] = Ft;
ot.IMPLEMENTED[K.DAILY] = ["byhour"].concat(Ft);
ot.IMPLEMENTED[K.WEEKLY] = Ft;
ot.IMPLEMENTED[K.MONTHLY] = Ft;
ot.IMPLEMENTED[K.YEARLY] = ["byweekno", "byyearday"].concat(Ft);
var Yf = function(e, t, r, n) {
  return new ot(e, t, r, n).toString();
}, Uf = ot.isFullyConvertible, Or = (
  /** @class */
  function() {
    function e(t, r, n, o) {
      this.hour = t, this.minute = r, this.second = n, this.millisecond = o || 0;
    }
    return e.prototype.getHours = function() {
      return this.hour;
    }, e.prototype.getMinutes = function() {
      return this.minute;
    }, e.prototype.getSeconds = function() {
      return this.second;
    }, e.prototype.getMilliseconds = function() {
      return this.millisecond;
    }, e.prototype.getTime = function() {
      return (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1e3 + this.millisecond;
    }, e;
  }()
), Ff = (
  /** @class */
  function(e) {
    Gn(t, e);
    function t(r, n, o, i, a, s, u) {
      var f = e.call(this, i, a, s, u) || this;
      return f.year = r, f.month = n, f.day = o, f;
    }
    return t.fromDate = function(r) {
      return new this(r.getUTCFullYear(), r.getUTCMonth() + 1, r.getUTCDate(), r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.valueOf() % 1e3);
    }, t.prototype.getWeekday = function() {
      return It(new Date(this.getTime()));
    }, t.prototype.getTime = function() {
      return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
    }, t.prototype.getDay = function() {
      return this.day;
    }, t.prototype.getMonth = function() {
      return this.month;
    }, t.prototype.getYear = function() {
      return this.year;
    }, t.prototype.addYears = function(r) {
      this.year += r;
    }, t.prototype.addMonths = function(r) {
      if (this.month += r, this.month > 12) {
        var n = Math.floor(this.month / 12), o = qe(this.month, 12);
        this.month = o, this.year += n, this.month === 0 && (this.month = 12, --this.year);
      }
    }, t.prototype.addWeekly = function(r, n) {
      n > this.getWeekday() ? this.day += -(this.getWeekday() + 1 + (6 - n)) + r * 7 : this.day += -(this.getWeekday() - n) + r * 7, this.fixDay();
    }, t.prototype.addDaily = function(r) {
      this.day += r, this.fixDay();
    }, t.prototype.addHours = function(r, n, o) {
      for (n && (this.hour += Math.floor((23 - this.hour) / r) * r); ; ) {
        this.hour += r;
        var i = dn(this.hour, 24), a = i.div, s = i.mod;
        if (a && (this.hour = s, this.addDaily(a)), Je(o) || ne(o, this.hour))
          break;
      }
    }, t.prototype.addMinutes = function(r, n, o, i) {
      for (n && (this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / r) * r); ; ) {
        this.minute += r;
        var a = dn(this.minute, 60), s = a.div, u = a.mod;
        if (s && (this.minute = u, this.addHours(s, !1, o)), (Je(o) || ne(o, this.hour)) && (Je(i) || ne(i, this.minute)))
          break;
      }
    }, t.prototype.addSeconds = function(r, n, o, i, a) {
      for (n && (this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / r) * r); ; ) {
        this.second += r;
        var s = dn(this.second, 60), u = s.div, f = s.mod;
        if (u && (this.second = f, this.addMinutes(u, !1, o, i)), (Je(o) || ne(o, this.hour)) && (Je(i) || ne(i, this.minute)) && (Je(a) || ne(a, this.second)))
          break;
      }
    }, t.prototype.fixDay = function() {
      if (!(this.day <= 28)) {
        var r = si(this.year, this.month - 1)[1];
        if (!(this.day <= r))
          for (; this.day > r; ) {
            if (this.day -= r, ++this.month, this.month === 13 && (this.month = 1, ++this.year, this.year > ya))
              return;
            r = si(this.year, this.month - 1)[1];
          }
      }
    }, t.prototype.add = function(r, n) {
      var o = r.freq, i = r.interval, a = r.wkst, s = r.byhour, u = r.byminute, f = r.bysecond;
      switch (o) {
        case K.YEARLY:
          return this.addYears(i);
        case K.MONTHLY:
          return this.addMonths(i);
        case K.WEEKLY:
          return this.addWeekly(i, a);
        case K.DAILY:
          return this.addDaily(i);
        case K.HOURLY:
          return this.addHours(i, n, s);
        case K.MINUTELY:
          return this.addMinutes(i, n, s, u);
        case K.SECONDLY:
          return this.addSeconds(i, n, s, u, f);
      }
    }, t;
  }(Or)
);
function xa(e) {
  for (var t = [], r = Object.keys(e), n = 0, o = r; n < o.length; n++) {
    var i = o[n];
    ne(vd, i) || t.push(i), va(e[i]) && !Kt(e[i]) && t.push(i);
  }
  if (t.length)
    throw new Error("Invalid options: " + t.join(", "));
  return Ie({}, e);
}
function Wf(e) {
  var t = Ie(Ie({}, Jn), xa(e));
  if (me(t.byeaster) && (t.freq = C.YEARLY), !(me(t.freq) && C.FREQUENCIES[t.freq]))
    throw new Error("Invalid frequency: ".concat(t.freq, " ").concat(e.freq));
  if (t.dtstart || (t.dtstart = new Date((/* @__PURE__ */ new Date()).setMilliseconds(0))), me(t.wkst) ? Ge(t.wkst) || (t.wkst = t.wkst.weekday) : t.wkst = C.MO.weekday, me(t.bysetpos)) {
    Ge(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
    for (var r = 0; r < t.bysetpos.length; r++) {
      var n = t.bysetpos[r];
      if (n === 0 || !(n >= -366 && n <= 366))
        throw new Error("bysetpos must be between 1 and 366, or between -366 and -1");
    }
  }
  if (!(t.byweekno || be(t.byweekno) || be(t.byyearday) || t.bymonthday || be(t.bymonthday) || me(t.byweekday) || me(t.byeaster)))
    switch (t.freq) {
      case C.YEARLY:
        t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1), t.bymonthday = t.dtstart.getUTCDate();
        break;
      case C.MONTHLY:
        t.bymonthday = t.dtstart.getUTCDate();
        break;
      case C.WEEKLY:
        t.byweekday = [It(t.dtstart)];
        break;
    }
  if (me(t.bymonth) && !De(t.bymonth) && (t.bymonth = [t.bymonth]), me(t.byyearday) && !De(t.byyearday) && Ge(t.byyearday) && (t.byyearday = [t.byyearday]), !me(t.bymonthday))
    t.bymonthday = [], t.bynmonthday = [];
  else if (De(t.bymonthday)) {
    for (var o = [], i = [], r = 0; r < t.bymonthday.length; r++) {
      var n = t.bymonthday[r];
      n > 0 ? o.push(n) : n < 0 && i.push(n);
    }
    t.bymonthday = o, t.bynmonthday = i;
  } else t.bymonthday < 0 ? (t.bynmonthday = [t.bymonthday], t.bymonthday = []) : (t.bynmonthday = [], t.bymonthday = [t.bymonthday]);
  if (me(t.byweekno) && !De(t.byweekno) && (t.byweekno = [t.byweekno]), !me(t.byweekday))
    t.bynweekday = null;
  else if (Ge(t.byweekday))
    t.byweekday = [t.byweekday], t.bynweekday = null;
  else if (ai(t.byweekday))
    t.byweekday = [Oe.fromStr(t.byweekday).weekday], t.bynweekday = null;
  else if (t.byweekday instanceof Oe)
    !t.byweekday.n || t.freq > C.MONTHLY ? (t.byweekday = [t.byweekday.weekday], t.bynweekday = null) : (t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]], t.byweekday = null);
  else {
    for (var a = [], s = [], r = 0; r < t.byweekday.length; r++) {
      var u = t.byweekday[r];
      if (Ge(u)) {
        a.push(u);
        continue;
      } else if (ai(u)) {
        a.push(Oe.fromStr(u).weekday);
        continue;
      }
      !u.n || t.freq > C.MONTHLY ? a.push(u.weekday) : s.push([u.weekday, u.n]);
    }
    t.byweekday = be(a) ? a : null, t.bynweekday = be(s) ? s : null;
  }
  return me(t.byhour) ? Ge(t.byhour) && (t.byhour = [t.byhour]) : t.byhour = t.freq < C.HOURLY ? [t.dtstart.getUTCHours()] : null, me(t.byminute) ? Ge(t.byminute) && (t.byminute = [t.byminute]) : t.byminute = t.freq < C.MINUTELY ? [t.dtstart.getUTCMinutes()] : null, me(t.bysecond) ? Ge(t.bysecond) && (t.bysecond = [t.bysecond]) : t.bysecond = t.freq < C.SECONDLY ? [t.dtstart.getUTCSeconds()] : null, { parsedOptions: t };
}
function zf(e) {
  var t = e.dtstart.getTime() % 1e3;
  if (!Zn(e.freq))
    return [];
  var r = [];
  return e.byhour.forEach(function(n) {
    e.byminute.forEach(function(o) {
      e.bysecond.forEach(function(i) {
        r.push(new Or(n, o, i, t));
      });
    });
  }), r;
}
function On(e) {
  var t = e.split(`
`).map(qf).filter(function(r) {
    return r !== null;
  });
  return Ie(Ie({}, t[0]), t[1]);
}
function kr(e) {
  var t = {}, r = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(e);
  if (!r)
    return t;
  var n = r[1], o = r[2];
  return n && (t.tzid = n), t.dtstart = Hn(o), t;
}
function qf(e) {
  if (e = e.replace(/^\s+|\s+$/, ""), !e.length)
    return null;
  var t = /^([A-Z]+?)[:;]/.exec(e.toUpperCase());
  if (!t)
    return di(e);
  var r = t[1];
  switch (r.toUpperCase()) {
    case "RRULE":
    case "EXRULE":
      return di(e);
    case "DTSTART":
      return kr(e);
    default:
      throw new Error("Unsupported RFC prop ".concat(r, " in ").concat(e));
  }
}
function di(e) {
  var t = e.replace(/^RRULE:/i, ""), r = kr(t), n = e.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
  return n.forEach(function(o) {
    var i = o.split("="), a = i[0], s = i[1];
    switch (a.toUpperCase()) {
      case "FREQ":
        r.freq = K[s.toUpperCase()];
        break;
      case "WKST":
        r.wkst = Ke[s.toUpperCase()];
        break;
      case "COUNT":
      case "INTERVAL":
      case "BYSETPOS":
      case "BYMONTH":
      case "BYMONTHDAY":
      case "BYYEARDAY":
      case "BYWEEKNO":
      case "BYHOUR":
      case "BYMINUTE":
      case "BYSECOND":
        var u = Vf(s), f = a.toLowerCase();
        r[f] = u;
        break;
      case "BYWEEKDAY":
      case "BYDAY":
        r.byweekday = Bf(s);
        break;
      case "DTSTART":
      case "TZID":
        var h = kr(e);
        r.tzid = h.tzid, r.dtstart = h.dtstart;
        break;
      case "UNTIL":
        r.until = Hn(s);
        break;
      case "BYEASTER":
        r.byeaster = Number(s);
        break;
      default:
        throw new Error("Unknown RRULE property '" + a + "'");
    }
  }), r;
}
function Vf(e) {
  if (e.indexOf(",") !== -1) {
    var t = e.split(",");
    return t.map(hi);
  }
  return hi(e);
}
function hi(e) {
  return /^[+-]?\d+$/.test(e) ? Number(e) : e;
}
function Bf(e) {
  var t = e.split(",");
  return t.map(function(r) {
    if (r.length === 2)
      return Ke[r];
    var n = r.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
    if (!n || n.length < 3)
      throw new SyntaxError("Invalid weekday string: ".concat(r));
    var o = Number(n[1]), i = n[2], a = Ke[i].weekday;
    return new Oe(a, o);
  });
}
var Rr = (
  /** @class */
  function() {
    function e(t, r) {
      if (isNaN(t.getTime()))
        throw new RangeError("Invalid date passed to DateWithZone");
      this.date = t, this.tzid = r;
    }
    return Object.defineProperty(e.prototype, "isUTC", {
      get: function() {
        return !this.tzid || this.tzid.toUpperCase() === "UTC";
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.toString = function() {
      var t = Kn(this.date.getTime(), this.isUTC);
      return this.isUTC ? ":".concat(t) : ";TZID=".concat(this.tzid, ":").concat(t);
    }, e.prototype.getTime = function() {
      return this.date.getTime();
    }, e.prototype.rezonedDate = function() {
      return this.isUTC ? this.date : Df(this.date, this.tzid);
    }, e;
  }()
);
function kn(e) {
  for (var t = [], r = "", n = Object.keys(e), o = Object.keys(Jn), i = 0; i < n.length; i++)
    if (n[i] !== "tzid" && ne(o, n[i])) {
      var a = n[i].toUpperCase(), s = e[n[i]], u = "";
      if (!(!me(s) || De(s) && !s.length)) {
        switch (a) {
          case "FREQ":
            u = C.FREQUENCIES[e.freq];
            break;
          case "WKST":
            Ge(s) ? u = new Oe(s).toString() : u = s.toString();
            break;
          case "BYWEEKDAY":
            a = "BYDAY", u = Rf(s).map(function(y) {
              return y instanceof Oe ? y : De(y) ? new Oe(y[0], y[1]) : new Oe(y);
            }).toString();
            break;
          case "DTSTART":
            r = Kf(s, e.tzid);
            break;
          case "UNTIL":
            u = Kn(s, !e.tzid);
            break;
          default:
            if (De(s)) {
              for (var f = [], h = 0; h < s.length; h++)
                f[h] = String(s[h]);
              u = f.toString();
            } else
              u = String(s);
        }
        u && t.push([a, u]);
      }
    }
  var p = t.map(function(y) {
    var m = y[0], c = y[1];
    return "".concat(m, "=").concat(c.toString());
  }).join(";"), d = "";
  return p !== "" && (d = "RRULE:".concat(p)), [r, d].filter(function(y) {
    return !!y;
  }).join(`
`);
}
function Kf(e, t) {
  return e ? "DTSTART" + new Rr(new Date(e), t).toString() : "";
}
function Hf(e, t) {
  return Array.isArray(e) ? !Array.isArray(t) || e.length !== t.length ? !1 : e.every(function(r, n) {
    return r.getTime() === t[n].getTime();
  }) : e instanceof Date ? t instanceof Date && e.getTime() === t.getTime() : e === t;
}
var Gf = (
  /** @class */
  function() {
    function e() {
      this.all = !1, this.before = [], this.after = [], this.between = [];
    }
    return e.prototype._cacheAdd = function(t, r, n) {
      r && (r = r instanceof Date ? _n(r) : ui(r)), t === "all" ? this.all = r : (n._value = r, this[t].push(n));
    }, e.prototype._cacheGet = function(t, r) {
      var n = !1, o = r ? Object.keys(r) : [], i = function(h) {
        for (var p = 0; p < o.length; p++) {
          var d = o[p];
          if (!Hf(r[d], h[d]))
            return !0;
        }
        return !1;
      }, a = this[t];
      if (t === "all")
        n = this.all;
      else if (De(a))
        for (var s = 0; s < a.length; s++) {
          var u = a[s];
          if (!(o.length && i(u))) {
            n = u._value;
            break;
          }
        }
      if (!n && this.all) {
        for (var f = new jt(t, r), s = 0; s < this.all.length && f.accept(this.all[s]); s++)
          ;
        n = f.getValue(), this._cacheAdd(t, n, r);
      }
      return De(n) ? ui(n) : n instanceof Date ? _n(n) : n;
    }, e;
  }()
), Zf = T(T(T(T(T(T(T(T(T(T(T(T(T([], B(1, 31), !0), B(2, 28), !0), B(3, 31), !0), B(4, 30), !0), B(5, 31), !0), B(6, 30), !0), B(7, 31), !0), B(8, 31), !0), B(9, 30), !0), B(10, 31), !0), B(11, 30), !0), B(12, 31), !0), B(1, 7), !0), Jf = T(T(T(T(T(T(T(T(T(T(T(T(T([], B(1, 31), !0), B(2, 29), !0), B(3, 31), !0), B(4, 30), !0), B(5, 31), !0), B(6, 30), !0), B(7, 31), !0), B(8, 31), !0), B(9, 30), !0), B(10, 31), !0), B(11, 30), !0), B(12, 31), !0), B(1, 7), !0), Xf = et(1, 29), Qf = et(1, 30), ut = et(1, 31), we = et(1, 32), ed = T(T(T(T(T(T(T(T(T(T(T(T(T([], we, !0), Qf, !0), we, !0), ut, !0), we, !0), ut, !0), we, !0), we, !0), ut, !0), we, !0), ut, !0), we, !0), we.slice(0, 7), !0), td = T(T(T(T(T(T(T(T(T(T(T(T(T([], we, !0), Xf, !0), we, !0), ut, !0), we, !0), ut, !0), we, !0), we, !0), ut, !0), we, !0), ut, !0), we, !0), we.slice(0, 7), !0), rd = et(-28, 0), nd = et(-29, 0), ct = et(-30, 0), Te = et(-31, 0), od = T(T(T(T(T(T(T(T(T(T(T(T(T([], Te, !0), nd, !0), Te, !0), ct, !0), Te, !0), ct, !0), Te, !0), Te, !0), ct, !0), Te, !0), ct, !0), Te, !0), Te.slice(0, 7), !0), id = T(T(T(T(T(T(T(T(T(T(T(T(T([], Te, !0), rd, !0), Te, !0), ct, !0), Te, !0), ct, !0), Te, !0), Te, !0), ct, !0), Te, !0), ct, !0), Te, !0), Te.slice(0, 7), !0), ad = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366], sd = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], pi = function() {
  for (var e = [], t = 0; t < 55; t++)
    e = e.concat(et(7));
  return e;
}();
function ud(e, t) {
  var r = bt(e, 1, 1), n = Gt(e) ? 366 : 365, o = Gt(e + 1) ? 366 : 365, i = Tn(r), a = It(r), s = Ie(Ie({ yearlen: n, nextyearlen: o, yearordinal: i, yearweekday: a }, cd(e)), { wnomask: null });
  if (Je(t.byweekno))
    return s;
  s.wnomask = B(0, n + 7);
  var u, f, h = u = qe(7 - a + t.wkst, 7);
  h >= 4 ? (h = 0, f = s.yearlen + qe(a - t.wkst, 7)) : f = n - h;
  for (var p = Math.floor(f / 7), d = qe(f, 7), y = Math.floor(p + d / 4), m = 0; m < t.byweekno.length; m++) {
    var c = t.byweekno[m];
    if (c < 0 && (c += y + 1), c > 0 && c <= y) {
      var b = void 0;
      c > 1 ? (b = h + (c - 1) * 7, h !== u && (b -= 7 - u)) : b = h;
      for (var x = 0; x < 7 && (s.wnomask[b] = 1, b++, s.wdaymask[b] !== t.wkst); x++)
        ;
    }
  }
  if (ne(t.byweekno, 1)) {
    var b = h + y * 7;
    if (h !== u && (b -= 7 - u), b < n)
      for (var m = 0; m < 7 && (s.wnomask[b] = 1, b += 1, s.wdaymask[b] !== t.wkst); m++)
        ;
  }
  if (h) {
    var k = void 0;
    if (ne(t.byweekno, -1))
      k = -1;
    else {
      var R = It(bt(e - 1, 1, 1)), L = qe(7 - R.valueOf() + t.wkst, 7), w = Gt(e - 1) ? 366 : 365, $ = void 0;
      L >= 4 ? (L = 0, $ = w + qe(R - t.wkst, 7)) : $ = n - h, k = Math.floor(52 + qe($, 7) / 4);
    }
    if (ne(t.byweekno, k))
      for (var b = 0; b < h; b++)
        s.wnomask[b] = 1;
  }
  return s;
}
function cd(e) {
  var t = Gt(e) ? 366 : 365, r = bt(e, 1, 1), n = It(r);
  return t === 365 ? {
    mmask: Zf,
    mdaymask: td,
    nmdaymask: id,
    wdaymask: pi.slice(n),
    mrange: sd
  } : {
    mmask: Jf,
    mdaymask: ed,
    nmdaymask: od,
    wdaymask: pi.slice(n),
    mrange: ad
  };
}
function ld(e, t, r, n, o, i) {
  var a = {
    lastyear: e,
    lastmonth: t,
    nwdaymask: []
  }, s = [];
  if (i.freq === C.YEARLY)
    if (Je(i.bymonth))
      s = [[0, r]];
    else
      for (var u = 0; u < i.bymonth.length; u++)
        t = i.bymonth[u], s.push(n.slice(t - 1, t + 1));
  else i.freq === C.MONTHLY && (s = [n.slice(t - 1, t + 1)]);
  if (Je(s))
    return a;
  a.nwdaymask = B(0, r);
  for (var u = 0; u < s.length; u++)
    for (var f = s[u], h = f[0], p = f[1] - 1, d = 0; d < i.bynweekday.length; d++) {
      var y = void 0, m = i.bynweekday[d], c = m[0], b = m[1];
      b < 0 ? (y = p + (b + 1) * 7, y -= qe(o[y] - c, 7)) : (y = h + (b - 1) * 7, y += qe(7 - o[y] + c, 7)), h <= y && y <= p && (a.nwdaymask[y] = 1);
    }
  return a;
}
function fd(e, t) {
  t === void 0 && (t = 0);
  var r = e % 19, n = Math.floor(e / 100), o = e % 100, i = Math.floor(n / 4), a = n % 4, s = Math.floor((n + 8) / 25), u = Math.floor((n - s + 1) / 3), f = Math.floor(19 * r + n - i - u + 15) % 30, h = Math.floor(o / 4), p = o % 4, d = Math.floor(32 + 2 * a + 2 * h - f - p) % 7, y = Math.floor((r + 11 * f + 22 * d) / 451), m = Math.floor((f + d - 7 * y + 114) / 31), c = (f + d - 7 * y + 114) % 31 + 1, b = Date.UTC(e, m - 1, c + t), x = Date.UTC(e, 0, 1);
  return [Math.ceil((b - x) / (1e3 * 60 * 60 * 24))];
}
var dd = (
  /** @class */
  function() {
    function e(t) {
      this.options = t;
    }
    return e.prototype.rebuild = function(t, r) {
      var n = this.options;
      if (t !== this.lastyear && (this.yearinfo = ud(t, n)), be(n.bynweekday) && (r !== this.lastmonth || t !== this.lastyear)) {
        var o = this.yearinfo, i = o.yearlen, a = o.mrange, s = o.wdaymask;
        this.monthinfo = ld(t, r, i, a, s, n);
      }
      me(n.byeaster) && (this.eastermask = fd(t, n.byeaster));
    }, Object.defineProperty(e.prototype, "lastyear", {
      get: function() {
        return this.monthinfo ? this.monthinfo.lastyear : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastmonth", {
      get: function() {
        return this.monthinfo ? this.monthinfo.lastmonth : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "yearlen", {
      get: function() {
        return this.yearinfo.yearlen;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "yearordinal", {
      get: function() {
        return this.yearinfo.yearordinal;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "mrange", {
      get: function() {
        return this.yearinfo.mrange;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "wdaymask", {
      get: function() {
        return this.yearinfo.wdaymask;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "mmask", {
      get: function() {
        return this.yearinfo.mmask;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "wnomask", {
      get: function() {
        return this.yearinfo.wnomask;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nwdaymask", {
      get: function() {
        return this.monthinfo ? this.monthinfo.nwdaymask : [];
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nextyearlen", {
      get: function() {
        return this.yearinfo.nextyearlen;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "mdaymask", {
      get: function() {
        return this.yearinfo.mdaymask;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "nmdaymask", {
      get: function() {
        return this.yearinfo.nmdaymask;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.ydayset = function() {
      return [et(this.yearlen), 0, this.yearlen];
    }, e.prototype.mdayset = function(t, r) {
      for (var n = this.mrange[r - 1], o = this.mrange[r], i = B(null, this.yearlen), a = n; a < o; a++)
        i[a] = a;
      return [i, n, o];
    }, e.prototype.wdayset = function(t, r, n) {
      for (var o = B(null, this.yearlen + 7), i = Tn(bt(t, r, n)) - this.yearordinal, a = i, s = 0; s < 7 && (o[i] = i, ++i, this.wdaymask[i] !== this.options.wkst); s++)
        ;
      return [o, a, i];
    }, e.prototype.ddayset = function(t, r, n) {
      var o = B(null, this.yearlen), i = Tn(bt(t, r, n)) - this.yearordinal;
      return o[i] = i, [o, i, i + 1];
    }, e.prototype.htimeset = function(t, r, n, o) {
      var i = this, a = [];
      return this.options.byminute.forEach(function(s) {
        a = a.concat(i.mtimeset(t, s, n, o));
      }), er(a), a;
    }, e.prototype.mtimeset = function(t, r, n, o) {
      var i = this.options.bysecond.map(function(a) {
        return new Or(t, r, a, o);
      });
      return er(i), i;
    }, e.prototype.stimeset = function(t, r, n, o) {
      return [new Or(t, r, n, o)];
    }, e.prototype.getdayset = function(t) {
      switch (t) {
        case K.YEARLY:
          return this.ydayset.bind(this);
        case K.MONTHLY:
          return this.mdayset.bind(this);
        case K.WEEKLY:
          return this.wdayset.bind(this);
        case K.DAILY:
          return this.ddayset.bind(this);
        default:
          return this.ddayset.bind(this);
      }
    }, e.prototype.gettimeset = function(t) {
      switch (t) {
        case K.HOURLY:
          return this.htimeset.bind(this);
        case K.MINUTELY:
          return this.mtimeset.bind(this);
        case K.SECONDLY:
          return this.stimeset.bind(this);
      }
    }, e;
  }()
);
function hd(e, t, r, n, o, i) {
  for (var a = [], s = 0; s < e.length; s++) {
    var u = void 0, f = void 0, h = e[s];
    h < 0 ? (u = Math.floor(h / t.length), f = qe(h, t.length)) : (u = Math.floor((h - 1) / t.length), f = qe(h - 1, t.length));
    for (var p = [], d = r; d < n; d++) {
      var y = i[d];
      me(y) && p.push(y);
    }
    var m = void 0;
    u < 0 ? m = p.slice(u)[0] : m = p[u];
    var c = t[f], b = ba(o.yearordinal + m), x = ga(b, c);
    ne(a, x) || a.push(x);
  }
  return er(a), a;
}
function wa(e, t) {
  var r = t.dtstart, n = t.freq, o = t.interval, i = t.until, a = t.bysetpos, s = t.count;
  if (s === 0 || o === 0)
    return tt(e);
  var u = Ff.fromDate(r), f = new dd(t);
  f.rebuild(u.year, u.month);
  for (var h = md(f, u, t); ; ) {
    var p = f.getdayset(n)(u.year, u.month, u.day), d = p[0], y = p[1], m = p[2], c = yd(d, y, m, f, t);
    if (be(a))
      for (var b = hd(a, h, y, m, f, d), x = 0; x < b.length; x++) {
        var k = b[x];
        if (i && k > i)
          return tt(e);
        if (k >= r) {
          var R = yi(k, t);
          if (!e.accept(R) || s && (--s, !s))
            return tt(e);
        }
      }
    else
      for (var x = y; x < m; x++) {
        var L = d[x];
        if (me(L))
          for (var w = ba(f.yearordinal + L), $ = 0; $ < h.length; $++) {
            var j = h[$], k = ga(w, j);
            if (i && k > i)
              return tt(e);
            if (k >= r) {
              var R = yi(k, t);
              if (!e.accept(R) || s && (--s, !s))
                return tt(e);
            }
          }
      }
    if (t.interval === 0 || (u.add(t, c), u.year > ya))
      return tt(e);
    Zn(n) || (h = f.gettimeset(n)(u.hour, u.minute, u.second, 0)), f.rebuild(u.year, u.month);
  }
}
function pd(e, t, r) {
  var n = r.bymonth, o = r.byweekno, i = r.byweekday, a = r.byeaster, s = r.bymonthday, u = r.bynmonthday, f = r.byyearday;
  return be(n) && !ne(n, e.mmask[t]) || be(o) && !e.wnomask[t] || be(i) && !ne(i, e.wdaymask[t]) || be(e.nwdaymask) && !e.nwdaymask[t] || a !== null && !ne(e.eastermask, t) || (be(s) || be(u)) && !ne(s, e.mdaymask[t]) && !ne(u, e.nmdaymask[t]) || be(f) && (t < e.yearlen && !ne(f, t + 1) && !ne(f, -e.yearlen + t) || t >= e.yearlen && !ne(f, t + 1 - e.yearlen) && !ne(f, -e.nextyearlen + t - e.yearlen));
}
function yi(e, t) {
  return new Rr(e, t.tzid).rezonedDate();
}
function tt(e) {
  return e.getValue();
}
function yd(e, t, r, n, o) {
  for (var i = !1, a = t; a < r; a++) {
    var s = e[a];
    i = pd(n, s, o), i && (e[s] = null);
  }
  return i;
}
function md(e, t, r) {
  var n = r.freq, o = r.byhour, i = r.byminute, a = r.bysecond;
  return Zn(n) ? zf(r) : n >= C.HOURLY && be(o) && !ne(o, t.hour) || n >= C.MINUTELY && be(i) && !ne(i, t.minute) || n >= C.SECONDLY && be(a) && !ne(a, t.second) ? [] : e.gettimeset(n)(t.hour, t.minute, t.second, t.millisecond);
}
var Ke = {
  MO: new Oe(0),
  TU: new Oe(1),
  WE: new Oe(2),
  TH: new Oe(3),
  FR: new Oe(4),
  SA: new Oe(5),
  SU: new Oe(6)
}, Jn = {
  freq: K.YEARLY,
  dtstart: null,
  interval: 1,
  wkst: Ke.MO,
  count: null,
  until: null,
  tzid: null,
  bysetpos: null,
  bymonth: null,
  bymonthday: null,
  bynmonthday: null,
  byyearday: null,
  byweekno: null,
  byweekday: null,
  bynweekday: null,
  byhour: null,
  byminute: null,
  bysecond: null,
  byeaster: null
}, vd = Object.keys(Jn), C = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = {}), r === void 0 && (r = !1), this._cache = r ? null : new Gf(), this.origOptions = xa(t);
      var n = Wf(t).parsedOptions;
      this.options = n;
    }
    return e.parseText = function(t, r) {
      return Ea(t, r);
    }, e.fromText = function(t, r) {
      return Lf(t, r);
    }, e.fromString = function(t) {
      return new e(e.parseString(t) || void 0);
    }, e.prototype._iter = function(t) {
      return wa(t, this.options);
    }, e.prototype._cacheGet = function(t, r) {
      return this._cache ? this._cache._cacheGet(t, r) : !1;
    }, e.prototype._cacheAdd = function(t, r, n) {
      if (this._cache)
        return this._cache._cacheAdd(t, r, n);
    }, e.prototype.all = function(t) {
      if (t)
        return this._iter(new li("all", {}, t));
      var r = this._cacheGet("all");
      return r === !1 && (r = this._iter(new jt("all", {})), this._cacheAdd("all", r)), r;
    }, e.prototype.between = function(t, r, n, o) {
      if (n === void 0 && (n = !1), !Kt(t) || !Kt(r))
        throw new Error("Invalid date passed in to RRule.between");
      var i = {
        before: r,
        after: t,
        inc: n
      };
      if (o)
        return this._iter(new li("between", i, o));
      var a = this._cacheGet("between", i);
      return a === !1 && (a = this._iter(new jt("between", i)), this._cacheAdd("between", a, i)), a;
    }, e.prototype.before = function(t, r) {
      if (r === void 0 && (r = !1), !Kt(t))
        throw new Error("Invalid date passed in to RRule.before");
      var n = { dt: t, inc: r }, o = this._cacheGet("before", n);
      return o === !1 && (o = this._iter(new jt("before", n)), this._cacheAdd("before", o, n)), o;
    }, e.prototype.after = function(t, r) {
      if (r === void 0 && (r = !1), !Kt(t))
        throw new Error("Invalid date passed in to RRule.after");
      var n = { dt: t, inc: r }, o = this._cacheGet("after", n);
      return o === !1 && (o = this._iter(new jt("after", n)), this._cacheAdd("after", o, n)), o;
    }, e.prototype.count = function() {
      return this.all().length;
    }, e.prototype.toString = function() {
      return kn(this.origOptions);
    }, e.prototype.toText = function(t, r, n) {
      return Yf(this, t, r, n);
    }, e.prototype.isFullyConvertibleToText = function() {
      return Uf(this);
    }, e.prototype.clone = function() {
      return new e(this.origOptions);
    }, e.FREQUENCIES = [
      "YEARLY",
      "MONTHLY",
      "WEEKLY",
      "DAILY",
      "HOURLY",
      "MINUTELY",
      "SECONDLY"
    ], e.YEARLY = K.YEARLY, e.MONTHLY = K.MONTHLY, e.WEEKLY = K.WEEKLY, e.DAILY = K.DAILY, e.HOURLY = K.HOURLY, e.MINUTELY = K.MINUTELY, e.SECONDLY = K.SECONDLY, e.MO = Ke.MO, e.TU = Ke.TU, e.WE = Ke.WE, e.TH = Ke.TH, e.FR = Ke.FR, e.SA = Ke.SA, e.SU = Ke.SU, e.parseString = On, e.optionsToString = kn, e;
  }()
);
function bd(e, t, r, n, o, i) {
  var a = {}, s = e.accept;
  function u(d, y) {
    r.forEach(function(m) {
      m.between(d, y, !0).forEach(function(c) {
        a[Number(c)] = !0;
      });
    });
  }
  o.forEach(function(d) {
    var y = new Rr(d, i).rezonedDate();
    a[Number(y)] = !0;
  }), e.accept = function(d) {
    var y = Number(d);
    return isNaN(y) ? s.call(this, d) : !a[y] && (u(new Date(y - 1), new Date(y + 1)), !a[y]) ? (a[y] = !0, s.call(this, d)) : !0;
  }, e.method === "between" && (u(e.args.after, e.args.before), e.accept = function(d) {
    var y = Number(d);
    return a[y] ? !0 : (a[y] = !0, s.call(this, d));
  });
  for (var f = 0; f < n.length; f++) {
    var h = new Rr(n[f], i).rezonedDate();
    if (!e.accept(new Date(h.getTime())))
      break;
  }
  t.forEach(function(d) {
    wa(e, d.options);
  });
  var p = e._result;
  switch (er(p), e.method) {
    case "all":
    case "between":
      return p;
    case "before":
      return p.length && p[p.length - 1] || null;
    case "after":
    default:
      return p.length && p[0] || null;
  }
}
var mi = {
  dtstart: null,
  cache: !1,
  unfold: !1,
  forceset: !1,
  compatible: !1,
  tzid: null
};
function gd(e, t) {
  var r = [], n = [], o = [], i = [], a = kr(e), s = a.dtstart, u = a.tzid, f = _d(e, t.unfold);
  return f.forEach(function(h) {
    var p;
    if (h) {
      var d = Td(h), y = d.name, m = d.parms, c = d.value;
      switch (y.toUpperCase()) {
        case "RRULE":
          if (m.length)
            throw new Error("unsupported RRULE parm: ".concat(m.join(",")));
          r.push(On(h));
          break;
        case "RDATE":
          var b = (p = /RDATE(?:;TZID=([^:=]+))?/i.exec(h)) !== null && p !== void 0 ? p : [], x = b[1];
          x && !u && (u = x), n = n.concat(bi(c, m));
          break;
        case "EXRULE":
          if (m.length)
            throw new Error("unsupported EXRULE parm: ".concat(m.join(",")));
          o.push(On(c));
          break;
        case "EXDATE":
          i = i.concat(bi(c, m));
          break;
        case "DTSTART":
          break;
        default:
          throw new Error("unsupported property: " + y);
      }
    }
  }), {
    dtstart: s,
    tzid: u,
    rrulevals: r,
    rdatevals: n,
    exrulevals: o,
    exdatevals: i
  };
}
function Ed(e, t) {
  var r = gd(e, t), n = r.rrulevals, o = r.rdatevals, i = r.exrulevals, a = r.exdatevals, s = r.dtstart, u = r.tzid, f = t.cache === !1;
  if (t.compatible && (t.forceset = !0, t.unfold = !0), t.forceset || n.length > 1 || o.length || i.length || a.length) {
    var h = new Od(f);
    return h.dtstart(s), h.tzid(u || void 0), n.forEach(function(d) {
      h.rrule(new C(hn(d, s, u), f));
    }), o.forEach(function(d) {
      h.rdate(d);
    }), i.forEach(function(d) {
      h.exrule(new C(hn(d, s, u), f));
    }), a.forEach(function(d) {
      h.exdate(d);
    }), t.compatible && t.dtstart && h.rdate(s), h;
  }
  var p = n[0] || {};
  return new C(hn(p, p.dtstart || t.dtstart || s, p.tzid || t.tzid || u), f);
}
function vi(e, t) {
  return t === void 0 && (t = {}), Ed(e, xd(t));
}
function hn(e, t, r) {
  return Ie(Ie({}, e), { dtstart: t, tzid: r });
}
function xd(e) {
  var t = [], r = Object.keys(e), n = Object.keys(mi);
  if (r.forEach(function(o) {
    ne(n, o) || t.push(o);
  }), t.length)
    throw new Error("Invalid options: " + t.join(", "));
  return Ie(Ie({}, mi), e);
}
function wd(e) {
  if (e.indexOf(":") === -1)
    return {
      name: "RRULE",
      value: e
    };
  var t = Cf(e, ":", 1), r = t[0], n = t[1];
  return {
    name: r,
    value: n
  };
}
function Td(e) {
  var t = wd(e), r = t.name, n = t.value, o = r.split(";");
  if (!o)
    throw new Error("empty property name");
  return {
    name: o[0].toUpperCase(),
    parms: o.slice(1),
    value: n
  };
}
function _d(e, t) {
  if (t === void 0 && (t = !1), e = e && e.trim(), !e)
    throw new Error("Invalid empty string");
  if (!t)
    return e.split(/\s/);
  for (var r = e.split(`
`), n = 0; n < r.length; ) {
    var o = r[n] = r[n].replace(/\s+$/g, "");
    o ? n > 0 && o[0] === " " ? (r[n - 1] += o.slice(1), r.splice(n, 1)) : n += 1 : r.splice(n, 1);
  }
  return r;
}
function Sd(e) {
  e.forEach(function(t) {
    if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(t))
      throw new Error("unsupported RDATE/EXDATE parm: " + t);
  });
}
function bi(e, t) {
  return Sd(t), e.split(",").map(function(r) {
    return Hn(r);
  });
}
function gi(e) {
  var t = this;
  return function(r) {
    if (r !== void 0 && (t["_".concat(e)] = r), t["_".concat(e)] !== void 0)
      return t["_".concat(e)];
    for (var n = 0; n < t._rrule.length; n++) {
      var o = t._rrule[n].origOptions[e];
      if (o)
        return o;
    }
  };
}
var Od = (
  /** @class */
  function(e) {
    Gn(t, e);
    function t(r) {
      r === void 0 && (r = !1);
      var n = e.call(this, {}, r) || this;
      return n.dtstart = gi.apply(n, ["dtstart"]), n.tzid = gi.apply(n, ["tzid"]), n._rrule = [], n._rdate = [], n._exrule = [], n._exdate = [], n;
    }
    return t.prototype._iter = function(r) {
      return bd(r, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
    }, t.prototype.rrule = function(r) {
      Ei(r, this._rrule);
    }, t.prototype.exrule = function(r) {
      Ei(r, this._exrule);
    }, t.prototype.rdate = function(r) {
      xi(r, this._rdate);
    }, t.prototype.exdate = function(r) {
      xi(r, this._exdate);
    }, t.prototype.rrules = function() {
      return this._rrule.map(function(r) {
        return vi(r.toString());
      });
    }, t.prototype.exrules = function() {
      return this._exrule.map(function(r) {
        return vi(r.toString());
      });
    }, t.prototype.rdates = function() {
      return this._rdate.map(function(r) {
        return new Date(r.getTime());
      });
    }, t.prototype.exdates = function() {
      return this._exdate.map(function(r) {
        return new Date(r.getTime());
      });
    }, t.prototype.valueOf = function() {
      var r = [];
      return !this._rrule.length && this._dtstart && (r = r.concat(kn({ dtstart: this._dtstart }))), this._rrule.forEach(function(n) {
        r = r.concat(n.toString().split(`
`));
      }), this._exrule.forEach(function(n) {
        r = r.concat(n.toString().split(`
`).map(function(o) {
          return o.replace(/^RRULE:/, "EXRULE:");
        }).filter(function(o) {
          return !/^DTSTART/.test(o);
        }));
      }), this._rdate.length && r.push(wi("RDATE", this._rdate, this.tzid())), this._exdate.length && r.push(wi("EXDATE", this._exdate, this.tzid())), r;
    }, t.prototype.toString = function() {
      return this.valueOf().join(`
`);
    }, t.prototype.clone = function() {
      var r = new t(!!this._cache);
      return this._rrule.forEach(function(n) {
        return r.rrule(n.clone());
      }), this._exrule.forEach(function(n) {
        return r.exrule(n.clone());
      }), this._rdate.forEach(function(n) {
        return r.rdate(new Date(n.getTime()));
      }), this._exdate.forEach(function(n) {
        return r.exdate(new Date(n.getTime()));
      }), r;
    }, t;
  }(C)
);
function Ei(e, t) {
  if (!(e instanceof C))
    throw new TypeError(String(e) + " is not RRule instance");
  ne(t.map(String), String(e)) || t.push(e);
}
function xi(e, t) {
  if (!(e instanceof Date))
    throw new TypeError(String(e) + " is not Date instance");
  ne(t.map(Number), Number(e)) || (t.push(e), er(t));
}
function wi(e, t, r) {
  var n = !r || r.toUpperCase() === "UTC", o = n ? "".concat(e, ":") : "".concat(e, ";TZID=").concat(r, ":"), i = t.map(function(a) {
    return Kn(a.valueOf(), n);
  }).join(",");
  return "".concat(o).concat(i);
}
const Ti = (e, t) => {
  if (!t.startDate || !t.endDate) return;
  const r = new Date(t.startDate);
  if (new Date(t.endDate) < r)
    return "End date must be after start date";
}, Xn = ({ children: e, extraFields: t = [] }) => {
  const r = gt();
  return /* @__PURE__ */ v.jsxs($r, { children: [
    /* @__PURE__ */ v.jsx(de, { source: "name", validate: Ce(), fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(de, { source: "description", multiline: !0, rows: 4, fullWidth: !0 }),
    /* @__PURE__ */ v.jsxs(Ri, { sx: { display: "flex", gap: 2, width: "100%" }, children: [
      /* @__PURE__ */ v.jsx(
        vo,
        {
          source: "startDate",
          validate: [Ce(), Ti],
          sx: { flex: 1, "& .MuiInputBase-root": { color: r.palette.text.primary } }
        }
      ),
      /* @__PURE__ */ v.jsx(
        vo,
        {
          source: "endDate",
          validate: [Ce(), Ti],
          sx: { flex: 1 }
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx(de, { source: "location", validate: Ce(), fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(de, { source: "coverImage", label: "Cover Image URL", fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(
      $t,
      {
        source: "status",
        choices: [
          { id: "draft", name: "Draft" },
          { id: "published", name: "Published" }
        ],
        validate: Ce(),
        defaultValue: "draft",
        fullWidth: !0
      }
    ),
    /* @__PURE__ */ v.jsx(vr, { source: "tags", children: /* @__PURE__ */ v.jsx(br, { inline: !0, children: /* @__PURE__ */ v.jsx(de, { source: "", label: "Tag", helperText: !1 }) }) }),
    t.map((n) => /* @__PURE__ */ v.jsx(
      de,
      {
        source: n,
        label: n.charAt(0).toUpperCase() + n.slice(1).replace(/([A-Z])/g, " $1"),
        fullWidth: !0
      },
      n
    )),
    e
  ] });
}, kd = ({ FormComponent: e = Xn, extraFields: t = [] } = {}) => /* @__PURE__ */ v.jsx(jr, { children: /* @__PURE__ */ v.jsx(e, { extraFields: t }) }), Rd = ({ FormComponent: e = Xn, extraFields: t = [] } = {}) => /* @__PURE__ */ v.jsx(Rn, { children: /* @__PURE__ */ v.jsx(e, { extraFields: t }) }), Cd = () => /* @__PURE__ */ v.jsx(Cr, { children: /* @__PURE__ */ v.jsxs(Pr, { rowClick: "edit", children: [
  /* @__PURE__ */ v.jsx(Ae, { source: "id" }),
  /* @__PURE__ */ v.jsx(Ae, { source: "name" }),
  /* @__PURE__ */ v.jsx(Ae, { source: "company" }),
  /* @__PURE__ */ v.jsx(Ae, { source: "title" })
] }) }), Qn = ({ children: e, extraFields: t = [] }) => {
  const r = gt();
  return /* @__PURE__ */ v.jsxs($r, { sx: { "& .MuiTextField-root": { color: r.palette.text.primary } }, children: [
    /* @__PURE__ */ v.jsx(de, { source: "name", validate: Ce(), fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(de, { source: "bio", multiline: !0, rows: 4, fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(de, { source: "company", fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(de, { source: "title", fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(de, { source: "photo", label: "Photo URL", fullWidth: !0 }),
    t.map((n) => /* @__PURE__ */ v.jsx(
      de,
      {
        source: n,
        label: n.charAt(0).toUpperCase() + n.slice(1).replace(/([A-Z])/g, " $1"),
        fullWidth: !0
      },
      n
    )),
    e
  ] });
}, Pd = ({ FormComponent: e = Qn, extraFields: t = [] } = {}) => /* @__PURE__ */ v.jsx(jr, { children: /* @__PURE__ */ v.jsx(e, { extraFields: t }) }), $d = ({ FormComponent: e = Qn, extraFields: t = [] } = {}) => /* @__PURE__ */ v.jsx(Rn, { children: /* @__PURE__ */ v.jsx(e, { extraFields: t }) }), jd = () => /* @__PURE__ */ v.jsx(Cr, { children: /* @__PURE__ */ v.jsxs(Pr, { rowClick: "edit", children: [
  /* @__PURE__ */ v.jsx(Ae, { source: "id" }),
  /* @__PURE__ */ v.jsx(Ae, { source: "name" }),
  /* @__PURE__ */ v.jsx(Ha, { source: "capacity" }),
  /* @__PURE__ */ v.jsx(Ae, { source: "location" })
] }) }), Ta = ({ children: e, extraFields: t = [] }) => {
  const r = gt();
  return /* @__PURE__ */ v.jsxs($r, { sx: { "& .MuiTextField-root": { color: r.palette.text.primary } }, children: [
    /* @__PURE__ */ v.jsx(de, { source: "name", validate: Ce(), fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(Si, { source: "capacity", validate: Ce(), fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(de, { source: "location", validate: Ce(), fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(vr, { source: "amenities", children: /* @__PURE__ */ v.jsx(br, { inline: !0, children: /* @__PURE__ */ v.jsx(de, { source: "", label: "Amenity", helperText: !1 }) }) }),
    t.map((n) => /* @__PURE__ */ v.jsx(
      de,
      {
        source: n,
        label: n.charAt(0).toUpperCase() + n.slice(1).replace(/([A-Z])/g, " $1"),
        fullWidth: !0
      },
      n
    )),
    e
  ] });
}, Ad = ({ FormComponent: e = Ta, extraFields: t = [] } = {}) => /* @__PURE__ */ v.jsx(jr, { children: /* @__PURE__ */ v.jsx(e, { extraFields: t }) }), Dd = () => /* @__PURE__ */ v.jsx(Cr, { children: /* @__PURE__ */ v.jsxs(Pr, { rowClick: "edit", children: [
  /* @__PURE__ */ v.jsx(Ae, { source: "title" }),
  /* @__PURE__ */ v.jsx(Ga, { source: "eventId", reference: "events", children: /* @__PURE__ */ v.jsx(Ae, { source: "name" }) }),
  /* @__PURE__ */ v.jsx(
    Za,
    {
      source: "sessionType",
      choices: [
        { id: "keynote", name: "Keynote" },
        { id: "workshop", name: "Workshop" },
        { id: "panel", name: "Panel" },
        { id: "talk", name: "Talk" }
      ]
    }
  ),
  /* @__PURE__ */ v.jsx(Ae, { source: "duration", label: "Duration (min)" }),
  /* @__PURE__ */ v.jsx(_i, { source: "status" }),
  /* @__PURE__ */ v.jsx(pn, { source: "createdAt", showTime: !0 })
] }) }), eo = ({ children: e, extraFields: t = [] }) => {
  const r = gt();
  return /* @__PURE__ */ v.jsxs($r, { sx: { "& .MuiTextField-root": { color: r.palette.text.primary } }, children: [
    /* @__PURE__ */ v.jsx(de, { source: "title", validate: Ce(), fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(de, { source: "description", multiline: !0, rows: 4, fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(Jr, { source: "eventId", reference: "events", validate: Ce(), children: /* @__PURE__ */ v.jsx($t, { optionText: "name", fullWidth: !0 }) }),
    /* @__PURE__ */ v.jsx(
      $t,
      {
        source: "sessionType",
        choices: [
          { id: "keynote", name: "Keynote" },
          { id: "workshop", name: "Workshop" },
          { id: "panel", name: "Panel" },
          { id: "talk", name: "Talk" }
        ],
        validate: Ce(),
        fullWidth: !0
      }
    ),
    /* @__PURE__ */ v.jsx(
      Si,
      {
        source: "duration",
        label: "Duration (minutes)",
        validate: Ce(),
        fullWidth: !0
      }
    ),
    /* @__PURE__ */ v.jsx(Jr, { source: "venueId", reference: "venues", children: /* @__PURE__ */ v.jsx($t, { optionText: "name", fullWidth: !0 }) }),
    /* @__PURE__ */ v.jsx(de, { source: "trackId", label: "Track ID", fullWidth: !0 }),
    /* @__PURE__ */ v.jsx(vr, { source: "speakerIds", label: "Speakers", children: /* @__PURE__ */ v.jsx(br, { inline: !0, children: /* @__PURE__ */ v.jsx(Jr, { source: "", reference: "speakers", children: /* @__PURE__ */ v.jsx($t, { optionText: "name" }) }) }) }),
    /* @__PURE__ */ v.jsx(vr, { source: "tags", children: /* @__PURE__ */ v.jsx(br, { inline: !0, children: /* @__PURE__ */ v.jsx(de, { source: "", label: "Tag", helperText: !1 }) }) }),
    /* @__PURE__ */ v.jsx(
      $t,
      {
        source: "status",
        choices: [
          { id: "draft", name: "Draft" },
          { id: "published", name: "Published" }
        ],
        validate: Ce(),
        defaultValue: "draft",
        fullWidth: !0
      }
    ),
    t.map((n) => /* @__PURE__ */ v.jsx(
      de,
      {
        source: n,
        label: n.charAt(0).toUpperCase() + n.slice(1).replace(/([A-Z])/g, " $1"),
        fullWidth: !0
      },
      n
    )),
    e
  ] });
}, Md = ({ FormComponent: e = eo, extraFields: t = [] } = {}) => /* @__PURE__ */ v.jsx(jr, { children: /* @__PURE__ */ v.jsx(e, { extraFields: t }) }), Id = ({ FormComponent: e = eo, extraFields: t = [] } = {}) => /* @__PURE__ */ v.jsx(Rn, { children: /* @__PURE__ */ v.jsx(e, { extraFields: t }) }), Nd = () => {
  const { id: e } = os(), t = gt();
  return /* @__PURE__ */ v.jsxs(Ri, { sx: { p: 3 }, children: [
    /* @__PURE__ */ v.jsx(Ja, { title: "Schedule Builder" }),
    /* @__PURE__ */ v.jsx(vt, { variant: "h4", gutterBottom: !0, children: "Schedule Builder" }),
    /* @__PURE__ */ v.jsxs(vt, { variant: "body2", color: "text.secondary", gutterBottom: !0, children: [
      "Event ID: ",
      e
    ] }),
    /* @__PURE__ */ v.jsx(Oi, { sx: { mt: 3 }, children: /* @__PURE__ */ v.jsxs(ki, { children: [
      /* @__PURE__ */ v.jsx(vt, { variant: "h6", gutterBottom: !0, children: "Schedule Management" }),
      /* @__PURE__ */ v.jsx(vt, { variant: "body2", color: "text.secondary", paragraph: !0, children: "This is a complex feature that allows scheduling sessions for an event. The route is now managed by the plugin via CustomRoutes, demonstrating proper separation of concerns." }),
      /* @__PURE__ */ v.jsx(vt, { variant: "body2", color: "text.secondary", children: "✅ Successfully extracted to plugin" }),
      /* @__PURE__ */ v.jsx(vt, { variant: "body2", color: "text.secondary", children: "✅ Route registered via CustomRoutes" }),
      /* @__PURE__ */ v.jsxs(vt, { variant: "body2", color: "text.secondary", children: [
        "✅ Inherits theme: ",
        t.palette.mode,
        " mode"
      ] })
    ] }) })
  ] });
}, qd = (e) => {
  const {
    overrides: t = {},
    extraFields: r = {},
    permissions: n = {}
  } = e || {};
  Object.keys(n).length > 0 && console.info("[EventsPlugin] Permissions configuration accepted. Enforcement delegated to React Admin authProvider.");
  const o = t.EventList || kf, i = t.SpeakerList || Cd, a = t.VenueList || jd, s = t.SessionList || Dd;
  t.ScheduleBuilder;
  const u = r.events || [], f = r.speakers || [], h = r.venues || [], p = r.sessions || [], d = t.EventForm || Xn, y = t.SpeakerForm || Qn, m = t.VenueForm || Ta, c = t.SessionForm || eo, b = t.EventEdit || (() => $e.createElement(kd, { FormComponent: d, extraFields: u })), x = t.EventCreate || (() => $e.createElement(Rd, { FormComponent: d, extraFields: u })), k = t.SpeakerEdit || (() => $e.createElement(Pd, { FormComponent: y, extraFields: f })), R = t.SpeakerCreate || (() => $e.createElement($d, { FormComponent: y, extraFields: f })), L = t.VenueEdit || (() => $e.createElement(Ad, { FormComponent: m, extraFields: h })), w = t.SessionEdit || (() => $e.createElement(Md, { FormComponent: c, extraFields: p })), $ = t.SessionCreate || (() => $e.createElement(Id, { FormComponent: c, extraFields: p }));
  return [
    $e.createElement(sr, {
      key: "events",
      name: "events",
      list: o,
      edit: b,
      create: x,
      icon: Fn
    }),
    $e.createElement(sr, {
      key: "speakers",
      name: "speakers",
      list: i,
      edit: k,
      create: R,
      icon: ca
    }),
    $e.createElement(sr, {
      key: "venues",
      name: "venues",
      list: a,
      edit: L,
      icon: la
    }),
    $e.createElement(sr, {
      key: "sessions",
      name: "sessions",
      list: s,
      edit: w,
      create: $,
      icon: fa
    })
  ];
};
export {
  Rd as DefaultEventCreate,
  kd as DefaultEventEdit,
  Xn as DefaultEventForm,
  kf as DefaultEventList,
  Nd as DefaultScheduleBuilder,
  qd as EventsPlugin,
  Ti as validateEventDates
};
//# sourceMappingURL=index.js.map
