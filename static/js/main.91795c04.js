/*! For license information please see main.91795c04.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      839: function (e) {
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function a(e) {
          if (null === e || void 0 === e)
            throw new TypeError(
              "Object.assign cannot be called with null or undefined"
            );
          return Object(e);
        }
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (a) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, o) {
              for (var l, i, u = a(e), s = 1; s < arguments.length; s++) {
                for (var c in (l = Object(arguments[s])))
                  n.call(l, c) && (u[c] = l[c]);
                if (t) {
                  i = t(l);
                  for (var f = 0; f < i.length; f++)
                    r.call(l, i[f]) && (u[i[f]] = l[i[f]]);
                }
              }
              return u;
            };
      },
      483: function (e, t, n) {
        var r = n(839),
          a = "function" === typeof Symbol && Symbol.for,
          o = a ? Symbol.for("react.element") : 60103,
          l = a ? Symbol.for("react.portal") : 60106,
          i = a ? Symbol.for("react.fragment") : 60107,
          u = a ? Symbol.for("react.strict_mode") : 60108,
          s = a ? Symbol.for("react.profiler") : 60114,
          c = a ? Symbol.for("react.provider") : 60109,
          f = a ? Symbol.for("react.context") : 60110,
          d = a ? Symbol.for("react.forward_ref") : 60112,
          p = a ? Symbol.for("react.suspense") : 60113,
          h = a ? Symbol.for("react.memo") : 60115,
          m = a ? Symbol.for("react.lazy") : 60116,
          v = "function" === typeof Symbol && Symbol.iterator;
        function g(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var y = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          b = {};
        function w(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = b),
            (this.updater = n || y);
        }
        function A() {}
        function k(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = b),
            (this.updater = n || y);
        }
        (w.prototype.isReactComponent = {}),
          (w.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(g(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (w.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (A.prototype = w.prototype);
        var S = (k.prototype = new A());
        (S.constructor = k), r(S, w.prototype), (S.isPureReactComponent = !0);
        var x = { current: null },
          C = Object.prototype.hasOwnProperty,
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(e, t, n) {
          var r,
            a = {},
            l = null,
            i = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              C.call(t, r) && !E.hasOwnProperty(r) && (a[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) a.children = n;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s;
          }
          if (e && e.defaultProps)
            for (r in (u = e.defaultProps)) void 0 === a[r] && (a[r] = u[r]);
          return {
            $$typeof: o,
            type: e,
            key: l,
            ref: i,
            props: a,
            _owner: x.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === o;
        }
        var O = /\/+/g,
          N = [];
        function j(e, t, n, r) {
          if (N.length) {
            var a = N.pop();
            return (
              (a.result = e),
              (a.keyPrefix = t),
              (a.func = n),
              (a.context = r),
              (a.count = 0),
              a
            );
          }
          return { result: e, keyPrefix: t, func: n, context: r, count: 0 };
        }
        function D(e) {
          (e.result = null),
            (e.keyPrefix = null),
            (e.func = null),
            (e.context = null),
            (e.count = 0),
            10 > N.length && N.push(e);
        }
        function z(e, t, n, r) {
          var a = typeof e;
          ("undefined" !== a && "boolean" !== a) || (e = null);
          var i = !1;
          if (null === e) i = !0;
          else
            switch (a) {
              case "string":
              case "number":
                i = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case l:
                    i = !0;
                }
            }
          if (i) return n(r, e, "" === t ? "." + T(e, 0) : t), 1;
          if (((i = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
            for (var u = 0; u < e.length; u++) {
              var s = t + T((a = e[u]), u);
              i += z(a, s, n, r);
            }
          else if (
            (null === e || "object" !== typeof e
              ? (s = null)
              : (s =
                  "function" === typeof (s = (v && e[v]) || e["@@iterator"])
                    ? s
                    : null),
            "function" === typeof s)
          )
            for (e = s.call(e), u = 0; !(a = e.next()).done; )
              i += z((a = a.value), (s = t + T(a, u++)), n, r);
          else if ("object" === a)
            throw (
              ((n = "" + e),
              Error(
                g(
                  31,
                  "[object Object]" === n
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : n,
                  ""
                )
              ))
            );
          return i;
        }
        function R(e, t, n) {
          return null == e ? 0 : z(e, "", t, n);
        }
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  ("" + e).replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })(e.key)
            : t.toString(36);
        }
        function M(e, t) {
          e.func.call(e.context, t, e.count++);
        }
        function B(e, t, n) {
          var r = e.result,
            a = e.keyPrefix;
          (e = e.func.call(e.context, t, e.count++)),
            Array.isArray(e)
              ? I(e, r, n, function (e) {
                  return e;
                })
              : null != e &&
                (P(e) &&
                  (e = (function (e, t) {
                    return {
                      $$typeof: o,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    e,
                    a +
                      (!e.key || (t && t.key === e.key)
                        ? ""
                        : ("" + e.key).replace(O, "$&/") + "/") +
                      n
                  )),
                r.push(e));
        }
        function I(e, t, n, r, a) {
          var o = "";
          null != n && (o = ("" + n).replace(O, "$&/") + "/"),
            R(e, B, (t = j(t, o, r, a))),
            D(t);
        }
        var L = { current: null };
        function F() {
          var e = L.current;
          if (null === e) throw Error(g(321));
          return e;
        }
        var U = {
          ReactCurrentDispatcher: L,
          ReactCurrentBatchConfig: { suspense: null },
          ReactCurrentOwner: x,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: function (e, t, n) {
            if (null == e) return e;
            var r = [];
            return I(e, r, null, t, n), r;
          },
          forEach: function (e, t, n) {
            if (null == e) return e;
            R(e, M, (t = j(null, null, t, n))), D(t);
          },
          count: function (e) {
            return R(
              e,
              function () {
                return null;
              },
              null
            );
          },
          toArray: function (e) {
            var t = [];
            return (
              I(e, t, null, function (e) {
                return e;
              }),
              t
            );
          },
          only: function (e) {
            if (!P(e)) throw Error(g(143));
            return e;
          },
        }),
          (t.Component = w),
          (t.Fragment = i),
          (t.Profiler = s),
          (t.PureComponent = k),
          (t.StrictMode = u),
          (t.Suspense = p),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e) throw Error(g(267, e));
            var a = r({}, e.props),
              l = e.key,
              i = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (u = x.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                C.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
              a.children = s;
            }
            return {
              $$typeof: o,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: u,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: f,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: c, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = _),
          (t.createFactory = function (e) {
            var t = _.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: d, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return { $$typeof: m, _ctor: e, _status: -1, _result: null };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: h, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return F().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return F().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return F().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return F().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return F().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return F().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return F().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return F().useRef(e);
          }),
          (t.useState = function (e) {
            return F().useState(e);
          }),
          (t.version = "16.14.0");
      },
      653: function (e, t, n) {
        e.exports = n(483);
      },
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var l = new Set(),
          i = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (i[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, l) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = l);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = v.hasOwnProperty(t) ? v[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          A = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          x = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          E = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          P = Symbol.for("react.forward_ref"),
          O = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          j = Symbol.for("react.memo"),
          D = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var z = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var R = Symbol.iterator;
        function T(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (R && e[R]) || e["@@iterator"])
            ? e
            : null;
        }
        var M,
          B = Object.assign;
        function I(e) {
          if (void 0 === M)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              M = (t && t[1]) || "";
            }
          return "\n" + M + e;
        }
        var L = !1;
        function F(e, t) {
          if (!e || L) return "";
          L = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  o = r.stack.split("\n"),
                  l = a.length - 1,
                  i = o.length - 1;
                1 <= l && 0 <= i && a[l] !== o[i];

              )
                i--;
              for (; 1 <= l && 0 <= i; l--, i--)
                if (a[l] !== o[i]) {
                  if (1 !== l || 1 !== i)
                    do {
                      if ((l--, 0 > --i || a[l] !== o[i])) {
                        var u = "\n" + a[l].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= l && 0 <= i);
                  break;
                }
            }
          } finally {
            (L = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = F(e.type, !1));
            case 11:
              return (e = F(e.type.render, !1));
            case 1:
              return (e = F(e.type, !0));
            default:
              return "";
          }
        }
        function Q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case x:
              return "StrictMode";
            case O:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case _:
                return (e.displayName || "Context") + ".Consumer";
              case E:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case j:
                return null !== (t = e.displayName || null)
                  ? t
                  : Q(e.type) || "Memo";
              case D:
                (t = e._payload), (e = e._init);
                try {
                  return Q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return Q(t);
            case 8:
              return t === x ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function q(e, t) {
          var n = t.checked;
          return B({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Z(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function $(e, t) {
          Z(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return B({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function oe(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function le(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ie(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ie(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = B(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
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
        var we = null;
        function Ae(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          xe = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = Aa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ee(e) {
          Se ? (xe ? xe.push(e) : (xe = [e])) : (Se = e);
        }
        function _e() {
          if (Se) {
            var e = Se,
              t = xe;
            if (((xe = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function Pe(e, t) {
          return e(t);
        }
        function Oe() {}
        var Ne = !1;
        function je(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return Pe(e, t, n);
          } finally {
            (Ne = !1), (null !== Se || null !== xe) && (Oe(), _e());
          }
        }
        function De(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = Aa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
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
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var ze = !1;
        if (c)
          try {
            var Re = {};
            Object.defineProperty(Re, "passive", {
              get: function () {
                ze = !0;
              },
            }),
              window.addEventListener("test", Re, Re),
              window.removeEventListener("test", Re, Re);
          } catch (ce) {
            ze = !1;
          }
        function Te(e, t, n, r, a, o, l, i, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var Me = !1,
          Be = null,
          Ie = !1,
          Le = null,
          Fe = {
            onError: function (e) {
              (Me = !0), (Be = e);
            },
          };
        function Ue(e, t, n, r, a, o, l, i, u) {
          (Me = !1), (Be = null), Te.apply(Fe, arguments);
        }
        function Qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Qe(e) !== e) throw Error(o(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Qe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var l = a.alternate;
                if (null === l) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === l.child) {
                  for (l = a.child; l; ) {
                    if (l === n) return He(a), e;
                    if (l === r) return He(a), t;
                    l = l.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = l);
                else {
                  for (var i = !1, u = a.child; u; ) {
                    if (u === n) {
                      (i = !0), (n = a), (r = l);
                      break;
                    }
                    if (u === r) {
                      (i = !0), (r = a), (n = l);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!i) {
                    for (u = l.child; u; ) {
                      if (u === n) {
                        (i = !0), (n = l), (r = a);
                        break;
                      }
                      if (u === r) {
                        (i = !0), (r = l), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!i) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Ye(e)
            : null;
        }
        function Ye(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Ye(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ge = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          qe = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ze = a.unstable_now,
          $e = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var lt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((it(e) / ut) | 0)) | 0;
              },
          it = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            l = 268435455 & n;
          if (0 !== l) {
            var i = l & ~a;
            0 !== i ? (r = ft(i)) : 0 !== (o &= l) && (r = ft(o));
          } else 0 !== (l = n & ~a) ? (r = ft(l)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - lt(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
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
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function vt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - lt(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - lt(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var At,
          kt,
          St,
          xt,
          Ct,
          Et = !1,
          _t = [],
          Pt = null,
          Ot = null,
          Nt = null,
          jt = new Map(),
          Dt = new Map(),
          zt = [],
          Rt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Tt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Pt = null;
              break;
            case "dragenter":
            case "dragleave":
              Ot = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              jt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Dt.delete(t.pointerId);
          }
        }
        function Mt(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Bt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Lt(e, t, n) {
          It(e) && n.delete(t);
        }
        function Ft() {
          (Et = !1),
            null !== Pt && It(Pt) && (Pt = null),
            null !== Ot && It(Ot) && (Ot = null),
            null !== Nt && It(Nt) && (Nt = null),
            jt.forEach(Lt),
            Dt.forEach(Lt);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Et ||
              ((Et = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ft)));
        }
        function Qt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < _t.length) {
            Ut(_t[0], e);
            for (var n = 1; n < _t.length; n++) {
              var r = _t[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Pt && Ut(Pt, e),
              null !== Ot && Ut(Ot, e),
              null !== Nt && Ut(Nt, e),
              jt.forEach(t),
              Dt.forEach(t),
              n = 0;
            n < zt.length;
            n++
          )
            (r = zt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < zt.length && null === (n = zt[0]).blockedOn; )
            Bt(n), null === n.blockedOn && zt.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), Gt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function Yt(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), Gt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function Gt(e, t, n, r) {
          if (Ht) {
            var a = qt(e, t, n, r);
            if (null === a) Hr(e, t, r, Kt, n), Tt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Pt = Mt(Pt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Ot = Mt(Ot, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Nt = Mt(Nt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return jt.set(o, Mt(jt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Dt.set(o, Mt(Dt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Tt(e, r), 4 & t && -1 < Rt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && At(o),
                  null === (o = qt(e, t, n, r)) && Hr(e, t, r, Kt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function qt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = Ae(r))))))
            if (null === (t = Qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Xt(e) {
          switch (e) {
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
              return 1;
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
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch ($e()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Zt = null,
          $t = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = $t,
            r = n.length,
            a = "value" in Zt ? Zt.value : Zt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var l = r - e;
          for (t = 1; t <= l && n[r - t] === a[o - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var l in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(l) && ((t = e[l]), (this[l] = t ? t(a) : a[l]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            B(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          ln,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = B({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = B({}, fn, {
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
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((on = e.screenX - un.screenX),
                        (ln = e.screenY - un.screenY))
                      : (ln = on = 0),
                    (un = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : ln;
            },
          }),
          hn = an(pn),
          mn = an(B({}, pn, { dataTransfer: 0 })),
          vn = an(B({}, fn, { relatedTarget: 0 })),
          gn = an(
            B({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = B({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(B({}, sn, { data: 0 })),
          An = {
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
          kn = {
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
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return xn;
        }
        var En = B({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = An[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
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
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          _n = an(En),
          Pn = an(
            B({}, pn, {
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
            })
          ),
          On = an(
            B({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Nn = an(
            B({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          jn = B({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Dn = an(jn),
          zn = [9, 13, 27, 32],
          Rn = c && "CompositionEvent" in window,
          Tn = null;
        c && "documentMode" in document && (Tn = document.documentMode);
        var Mn = c && "TextEvent" in window && !Tn,
          Bn = c && (!Rn || (Tn && 8 < Tn && 11 >= Tn)),
          In = String.fromCharCode(32),
          Ln = !1;
        function Fn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Qn = !1;
        var Vn = {
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
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          Ee(r),
            0 < (t = Yr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          Gn = null;
        function Kn(e) {
          Ir(e, 0);
        }
        function qn(e) {
          if (G(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Zn = !1;
        if (c) {
          var $n;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            $n = Jn;
          } else $n = !1;
          Zn = $n && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Yn && (Yn.detachEvent("onpropertychange", nr), (Gn = Yn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && qn(Gn)) {
            var t = [];
            Wn(t, Gn, e, Ae(e)), je(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Gn = n), (Yn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qn(Gn);
        }
        function or(e, t) {
          if ("click" === e) return qn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return qn(t);
        }
        var ir =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (ir(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !ir(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = cr(n, o));
                var l = cr(n, r);
                a &&
                  l &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== l.node ||
                    e.focusOffset !== l.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(l.node, l.offset))
                    : (t.setEnd(l.node, l.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = c && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == vr ||
            vr !== K(r) ||
            ("selectionStart" in (r = vr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Yr(gr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = vr))));
        }
        function Ar(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: Ar("Animation", "AnimationEnd"),
            animationiteration: Ar("Animation", "AnimationIteration"),
            animationstart: Ar("Animation", "AnimationStart"),
            transitionend: Ar("Transition", "TransitionEnd"),
          },
          Sr = {},
          xr = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in xr) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((xr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Er = Cr("animationend"),
          _r = Cr("animationiteration"),
          Pr = Cr("animationstart"),
          Or = Cr("transitionend"),
          Nr = new Map(),
          jr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Dr(e, t) {
          Nr.set(e, t), u(t, [e]);
        }
        for (var zr = 0; zr < jr.length; zr++) {
          var Rr = jr[zr];
          Dr(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)));
        }
        Dr(Er, "onAnimationEnd"),
          Dr(_r, "onAnimationIteration"),
          Dr(Pr, "onAnimationStart"),
          Dr("dblclick", "onDoubleClick"),
          Dr("focusin", "onFocus"),
          Dr("focusout", "onBlur"),
          Dr(Or, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Tr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Tr)
          );
        function Br(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, l, i, u, s) {
              if ((Ue.apply(this, arguments), Me)) {
                if (!Me) throw Error(o(198));
                var c = Be;
                (Me = !1), (Be = null), Ie || ((Ie = !0), (Le = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                  var i = r[l],
                    u = i.instance,
                    s = i.currentTarget;
                  if (((i = i.listener), u !== o && a.isPropagationStopped()))
                    break e;
                  Br(a, i, s), (o = u);
                }
              else
                for (l = 0; l < r.length; l++) {
                  if (
                    ((u = (i = r[l]).instance),
                    (s = i.currentTarget),
                    (i = i.listener),
                    u !== o && a.isPropagationStopped())
                  )
                    break e;
                  Br(a, i, s), (o = u);
                }
            }
          }
          if (Ie) throw ((e = Le), (Ie = !1), (Le = null), e);
        }
        function Lr(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Fr(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Qr(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              l.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mr.has(t) || Fr(t, !1, e), Fr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), Fr("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Yt;
              break;
            default:
              a = Gt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !ze ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var l = r.tag;
              if (3 === l || 4 === l) {
                var i = r.stateNode.containerInfo;
                if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
                if (4 === l)
                  for (l = r.return; null !== l; ) {
                    var u = l.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = l.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    l = l.return;
                  }
                for (; null !== i; ) {
                  if (null === (l = ya(i))) return;
                  if (5 === (u = l.tag) || 6 === u) {
                    r = o = l;
                    continue e;
                  }
                  i = i.parentNode;
                }
              }
              r = r.return;
            }
          je(function () {
            var r = o,
              a = Ae(n),
              l = [];
            e: {
              var i = Nr.get(e);
              if (void 0 !== i) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = _n;
                    break;
                  case "focusin":
                    (s = "focus"), (u = vn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = On;
                    break;
                  case Er:
                  case _r:
                  case Pr:
                    u = gn;
                    break;
                  case Or:
                    u = Nn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = Dn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Pn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== i ? i + "Capture" : null) : i;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = De(h, d)) &&
                        c.push(Wr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((i = new u(i, s, null, n, a)),
                  l.push({ event: i, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(i = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ha])) &&
                  (u || i) &&
                  ((i =
                    a.window === a
                      ? a
                      : (i = a.ownerDocument)
                      ? i.defaultView || i.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = Qe(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = Pn),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == u ? i : wa(u)),
                  (p = null == s ? i : wa(s)),
                  ((i = new c(m, h + "leave", u, n, a)).target = f),
                  (i.relatedTarget = p),
                  (m = null),
                  ya(a) === r &&
                    (((c = new c(d, h + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (m = c)),
                  (f = m),
                  u && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = u; p; p = Gr(p)) h++;
                    for (p = 0, m = d; m; m = Gr(m)) p++;
                    for (; 0 < h - p; ) (c = Gr(c)), h--;
                    for (; 0 < p - h; ) (d = Gr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Gr(c)), (d = Gr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && Kr(l, i, u, c, !1),
                  null !== s && null !== f && Kr(l, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (i = r ? wa(r) : window).nodeName &&
                    i.nodeName.toLowerCase()) ||
                ("input" === u && "file" === i.type)
              )
                var v = Xn;
              else if (Hn(i))
                if (Zn) v = lr;
                else {
                  v = ar;
                  var g = rr;
                }
              else
                (u = i.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === i.type || "radio" === i.type) &&
                  (v = or);
              switch (
                (v && (v = v(e, r))
                  ? Wn(l, v, n, a)
                  : (g && g(e, i, r),
                    "focusout" === e &&
                      (g = i._wrapperState) &&
                      g.controlled &&
                      "number" === i.type &&
                      ee(i, "number", i.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(g) || "true" === g.contentEditable) &&
                    ((vr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = vr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(l, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(l, n, a);
              }
              var y;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Qn
                  ? Fn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Bn &&
                  "ko" !== n.locale &&
                  (Qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Qn && (y = en())
                    : (($t = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                      (Qn = !0))),
                0 < (g = Yr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  l.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
                (y = Mn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Ln = !0), In);
                        case "textInput":
                          return (e = t.data) === In && Ln ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Qn)
                        return "compositionend" === e || (!Rn && Fn(e, t))
                          ? ((e = en()), (Jt = $t = Zt = null), (Qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Bn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Yr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  l.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ir(l, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Yr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = De(e, n)) && r.unshift(Wr(e, o, a)),
              null != (o = De(e, t)) && r.push(Wr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Gr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var o = t._reactName, l = []; null !== n && n !== r; ) {
            var i = n,
              u = i.alternate,
              s = i.stateNode;
            if (null !== u && u === r) break;
            5 === i.tag &&
              null !== s &&
              ((i = s),
              a
                ? null != (u = De(n, o)) && l.unshift(Wr(n, u, i))
                : a || (null != (u = De(n, o)) && l.push(Wr(n, u, i)))),
              (n = n.return);
          }
          0 !== l.length && e.push({ event: t, listeners: l });
        }
        var qr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Zr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(qr, "\n")
            .replace(Xr, "");
        }
        function $r(e, t, n) {
          if (((t = Zr(t)), Zr(e) !== t && n)) throw Error(o(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          la =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(ia);
                }
              : ra;
        function ia(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Qt(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          va = "__reactListeners$" + fa,
          ga = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function Aa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function xa(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Ea(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var _a = {},
          Pa = xa(_a),
          Oa = xa(!1),
          Na = _a;
        function ja(e, t) {
          var n = e.type.contextTypes;
          if (!n) return _a;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Da(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function za() {
          Ca(Oa), Ca(Pa);
        }
        function Ra(e, t, n) {
          if (Pa.current !== _a) throw Error(o(168));
          Ea(Pa, t), Ea(Oa, n);
        }
        function Ta(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, V(e) || "Unknown", a));
          return B({}, n, r);
        }
        function Ma(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              _a),
            (Na = Pa.current),
            Ea(Pa, e),
            Ea(Oa, Oa.current),
            !0
          );
        }
        function Ba(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = Ta(e, t, Na)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Oa),
              Ca(Pa),
              Ea(Pa, e))
            : Ca(Oa),
            Ea(Oa, n);
        }
        var Ia = null,
          La = !1,
          Fa = !1;
        function Ua(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Qa() {
          if (!Fa && null !== Ia) {
            Fa = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ia;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ia = null), (La = !1);
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), Ge(Je, Qa), a);
            } finally {
              (bt = t), (Fa = !1);
            }
          }
          return null;
        }
        var Va = w.ReactCurrentBatchConfig;
        function Ha(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = B({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Wa = xa(null),
          Ya = null,
          Ga = null,
          Ka = null;
        function qa() {
          Ka = Ga = Ya = null;
        }
        function Xa(e) {
          var t = Wa.current;
          Ca(Wa), (e._currentValue = t);
        }
        function Za(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function $a(e, t) {
          (Ya = e),
            (Ka = Ga = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (Ai = !0), (e.firstContext = null));
        }
        function Ja(e) {
          var t = e._currentValue;
          if (Ka !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Ga)
            ) {
              if (null === Ya) throw Error(o(308));
              (Ga = e), (Ya.dependencies = { lanes: 0, firstContext: e });
            } else Ga = Ga.next = e;
          return t;
        }
        var eo = null,
          to = !1;
        function no(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ro(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ao(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function oo(e, t) {
          var n = e.updateQueue;
          null !== n &&
            ((n = n.shared),
            ts(e)
              ? (null === (e = n.interleaved)
                  ? ((t.next = t), null === eo ? (eo = [n]) : eo.push(n))
                  : ((t.next = e.next), (e.next = t)),
                (n.interleaved = t))
              : (null === (e = n.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (n.pending = t)));
        }
        function lo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function io(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var l = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = l) : (o = o.next = l), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function uo(e, t, n, r) {
          var a = e.updateQueue;
          to = !1;
          var o = a.firstBaseUpdate,
            l = a.lastBaseUpdate,
            i = a.shared.pending;
          if (null !== i) {
            a.shared.pending = null;
            var u = i,
              s = u.next;
            (u.next = null), null === l ? (o = s) : (l.next = s), (l = u);
            var c = e.alternate;
            null !== c &&
              (i = (c = c.updateQueue).lastBaseUpdate) !== l &&
              (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== o) {
            var f = a.baseState;
            for (l = 0, c = s = u = null, i = o; ; ) {
              var d = i.lane,
                p = i.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: i.tag,
                      payload: i.payload,
                      callback: i.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = i;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = B({}, f, d);
                      break e;
                    case 2:
                      to = !0;
                  }
                }
                null !== i.callback &&
                  0 !== i.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [i]) : d.push(i));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (l |= d);
              if (null === (i = i.next)) {
                if (null === (i = a.shared.pending)) break;
                (i = (d = i).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (l |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (zu |= l), (e.lanes = l), (e.memoizedState = f);
          }
        }
        function so(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var co = new r.Component().refs;
        function fo(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : B({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var po = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Zu(),
              a = $u(e),
              o = ao(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              oo(e, o),
              null !== (t = Ju(e, a, r)) && lo(t, e, a);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Zu(),
              a = $u(e),
              o = ao(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              oo(e, o),
              null !== (t = Ju(e, a, r)) && lo(t, e, a);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Zu(),
              r = $u(e),
              a = ao(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              oo(e, a),
              null !== (t = Ju(e, r, n)) && lo(t, e, r);
          },
        };
        function ho(e, t, n, r, a, o, l) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, l)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, o);
        }
        function mo(e, t, n) {
          var r = !1,
            a = _a,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Ja(o))
              : ((a = Da(t) ? Na : Pa.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? ja(e, a)
                  : _a)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = po),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function vo(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && po.enqueueReplaceState(t, t.state, null);
        }
        function go(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = co), no(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Ja(o))
            : ((o = Da(t) ? Na : Pa.current), (a.context = ja(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (fo(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && po.enqueueReplaceState(a, a.state, null),
              uo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        var yo = [],
          bo = 0,
          wo = null,
          Ao = 0,
          ko = [],
          So = 0,
          xo = null,
          Co = 1,
          Eo = "";
        function _o(e, t) {
          (yo[bo++] = Ao), (yo[bo++] = wo), (wo = e), (Ao = t);
        }
        function Po(e, t, n) {
          (ko[So++] = Co), (ko[So++] = Eo), (ko[So++] = xo), (xo = e);
          var r = Co;
          e = Eo;
          var a = 32 - lt(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - lt(t) + a;
          if (30 < o) {
            var l = a - (a % 5);
            (o = (r & ((1 << l) - 1)).toString(32)),
              (r >>= l),
              (a -= l),
              (Co = (1 << (32 - lt(t) + a)) | (n << a) | r),
              (Eo = o + e);
          } else (Co = (1 << o) | (n << a) | r), (Eo = e);
        }
        function Oo(e) {
          null !== e.return && (_o(e, 1), Po(e, 1, 0));
        }
        function No(e) {
          for (; e === wo; )
            (wo = yo[--bo]), (yo[bo] = null), (Ao = yo[--bo]), (yo[bo] = null);
          for (; e === xo; )
            (xo = ko[--So]),
              (ko[So] = null),
              (Eo = ko[--So]),
              (ko[So] = null),
              (Co = ko[--So]),
              (ko[So] = null);
        }
        var jo = null,
          Do = null,
          zo = !1,
          Ro = null;
        function To(e, t) {
          var n = Ns(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function Mo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (jo = e), (Do = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (jo = e), (Do = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== xo ? { id: Co, overflow: Eo } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Ns(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (jo = e),
                (Do = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function Bo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function Io(e) {
          if (zo) {
            var t = Do;
            if (t) {
              var n = t;
              if (!Mo(e, t)) {
                if (Bo(e)) throw Error(o(418));
                t = sa(n.nextSibling);
                var r = jo;
                t && Mo(e, t)
                  ? To(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (zo = !1), (jo = e));
              }
            } else {
              if (Bo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (zo = !1), (jo = e);
            }
          }
        }
        function Lo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          jo = e;
        }
        function Fo(e) {
          if (e !== jo) return !1;
          if (!zo) return Lo(e), (zo = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = Do))
          ) {
            if (Bo(e)) {
              for (e = Do; e; ) e = sa(e.nextSibling);
              throw Error(o(418));
            }
            for (; t; ) To(e, t), (t = sa(t.nextSibling));
          }
          if ((Lo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Do = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Do = null;
            }
          } else Do = jo ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Uo() {
          (Do = jo = null), (zo = !1);
        }
        function Qo(e) {
          null === Ro ? (Ro = [e]) : Ro.push(e);
        }
        function Vo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === co && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  }),
                  (t._stringRef = l),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function Ho(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Wo(e) {
          return (0, e._init)(e._payload);
        }
        function Yo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ds(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ms(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === D &&
                    Wo(o) === t.type))
              ? (((r = a(t, n.props)).ref = Vo(e, t, n)), (r.return = e), r)
              : (((r = zs(n.type, n.key, n.props, null, e.mode, r)).ref = Vo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Bs(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Rs(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Ms("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case A:
                  return (
                    ((n = zs(t.type, t.key, t.props, null, e.mode, n)).ref = Vo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Bs(t, e.mode, n)).return = e), t;
                case D:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || T(t))
                return ((t = Rs(t, e.mode, n, null)).return = e), t;
              Ho(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case A:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case D:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || T(n)) return null !== a ? null : f(e, t, n, r, null);
              Ho(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case A:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case D:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || T(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Ho(t, r);
            }
            return null;
          }
          function m(a, o, i, u) {
            for (
              var s = null, c = null, f = o, m = (o = 0), v = null;
              null !== f && m < i.length;
              m++
            ) {
              f.index > m ? ((v = f), (f = null)) : (v = f.sibling);
              var g = p(a, f, i[m], u);
              if (null === g) {
                null === f && (f = v);
                break;
              }
              e && f && null === g.alternate && t(a, f),
                (o = l(g, o, m)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g),
                (f = v);
            }
            if (m === i.length) return n(a, f), zo && _o(a, m), s;
            if (null === f) {
              for (; m < i.length; m++)
                null !== (f = d(a, i[m], u)) &&
                  ((o = l(f, o, m)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return zo && _o(a, m), s;
            }
            for (f = r(a, f); m < i.length; m++)
              null !== (v = h(f, a, m, i[m], u)) &&
                (e &&
                  null !== v.alternate &&
                  f.delete(null === v.key ? m : v.key),
                (o = l(v, o, m)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              zo && _o(a, m),
              s
            );
          }
          function v(a, i, u, s) {
            var c = T(u);
            if ("function" !== typeof c) throw Error(o(150));
            if (null == (u = c.call(u))) throw Error(o(151));
            for (
              var f = (c = null), m = i, v = (i = 0), g = null, y = u.next();
              null !== m && !y.done;
              v++, y = u.next()
            ) {
              m.index > v ? ((g = m), (m = null)) : (g = m.sibling);
              var b = p(a, m, y.value, s);
              if (null === b) {
                null === m && (m = g);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (i = l(b, i, v)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (m = g);
            }
            if (y.done) return n(a, m), zo && _o(a, v), c;
            if (null === m) {
              for (; !y.done; v++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((i = l(y, i, v)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return zo && _o(a, v), c;
            }
            for (m = r(a, m); !y.done; v++, y = u.next())
              null !== (y = h(m, a, v, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? v : y.key),
                (i = l(y, i, v)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              zo && _o(a, v),
              c
            );
          }
          return function e(r, o, l, u) {
            if (
              ("object" === typeof l &&
                null !== l &&
                l.type === S &&
                null === l.key &&
                (l = l.props.children),
              "object" === typeof l && null !== l)
            ) {
              switch (l.$$typeof) {
                case A:
                  e: {
                    for (var s = l.key, c = o; null !== c; ) {
                      if (c.key === s) {
                        if ((s = l.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((o = a(c, l.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === D &&
                            Wo(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((o = a(c, l.props)).ref = Vo(r, c, l)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    l.type === S
                      ? (((o = Rs(l.props.children, r.mode, u, l.key)).return =
                          r),
                        (r = o))
                      : (((u = zs(
                          l.type,
                          l.key,
                          l.props,
                          null,
                          r.mode,
                          u
                        )).ref = Vo(r, o, l)),
                        (u.return = r),
                        (r = u));
                  }
                  return i(r);
                case k:
                  e: {
                    for (c = l.key; null !== o; ) {
                      if (o.key === c) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === l.containerInfo &&
                          o.stateNode.implementation === l.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, l.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Bs(l, r.mode, u)).return = r), (r = o);
                  }
                  return i(r);
                case D:
                  return e(r, o, (c = l._init)(l._payload), u);
              }
              if (te(l)) return m(r, o, l, u);
              if (T(l)) return v(r, o, l, u);
              Ho(r, l);
            }
            return ("string" === typeof l && "" !== l) || "number" === typeof l
              ? ((l = "" + l),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, l)).return = r), (r = o))
                  : (n(r, o), ((o = Ms(l, r.mode, u)).return = r), (r = o)),
                i(r))
              : n(r, o);
          };
        }
        var Go = Yo(!0),
          Ko = Yo(!1),
          qo = {},
          Xo = xa(qo),
          Zo = xa(qo),
          $o = xa(qo);
        function Jo(e) {
          if (e === qo) throw Error(o(174));
          return e;
        }
        function el(e, t) {
          switch ((Ea($o, t), Ea(Zo, e), Ea(Xo, qo), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Xo), Ea(Xo, t);
        }
        function tl() {
          Ca(Xo), Ca(Zo), Ca($o);
        }
        function nl(e) {
          Jo($o.current);
          var t = Jo(Xo.current),
            n = ue(t, e.type);
          t !== n && (Ea(Zo, e), Ea(Xo, n));
        }
        function rl(e) {
          Zo.current === e && (Ca(Xo), Ca(Zo));
        }
        var al = xa(0);
        function ol(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ll = [];
        function il() {
          for (var e = 0; e < ll.length; e++)
            ll[e]._workInProgressVersionPrimary = null;
          ll.length = 0;
        }
        var ul = w.ReactCurrentDispatcher,
          sl = w.ReactCurrentBatchConfig,
          cl = 0,
          fl = null,
          dl = null,
          pl = null,
          hl = !1,
          ml = !1,
          vl = 0,
          gl = 0;
        function yl() {
          throw Error(o(321));
        }
        function bl(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!ir(e[n], t[n])) return !1;
          return !0;
        }
        function wl(e, t, n, r, a, l) {
          if (
            ((cl = l),
            (fl = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ul.current = null === e || null === e.memoizedState ? ri : ai),
            (e = n(r, a)),
            ml)
          ) {
            l = 0;
            do {
              if (((ml = !1), (vl = 0), 25 <= l)) throw Error(o(301));
              (l += 1),
                (pl = dl = null),
                (t.updateQueue = null),
                (ul.current = oi),
                (e = n(r, a));
            } while (ml);
          }
          if (
            ((ul.current = ni),
            (t = null !== dl && null !== dl.next),
            (cl = 0),
            (pl = dl = fl = null),
            (hl = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function Al() {
          var e = 0 !== vl;
          return (vl = 0), e;
        }
        function kl() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === pl ? (fl.memoizedState = pl = e) : (pl = pl.next = e), pl
          );
        }
        function Sl() {
          if (null === dl) {
            var e = fl.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = dl.next;
          var t = null === pl ? fl.memoizedState : pl.next;
          if (null !== t) (pl = t), (dl = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (dl = e).memoizedState,
              baseState: dl.baseState,
              baseQueue: dl.baseQueue,
              queue: dl.queue,
              next: null,
            }),
              null === pl ? (fl.memoizedState = pl = e) : (pl = pl.next = e);
          }
          return pl;
        }
        function xl(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Cl(e) {
          var t = Sl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = dl,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var u = (i = null),
              s = null,
              c = l;
            do {
              var f = c.lane;
              if ((cl & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (i = r)) : (s = s.next = d),
                  (fl.lanes |= f),
                  (zu |= f);
              }
              c = c.next;
            } while (null !== c && c !== l);
            null === s ? (i = r) : (s.next = u),
              ir(r, t.memoizedState) || (Ai = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (l = a.lane), (fl.lanes |= l), (zu |= l), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function El(e) {
          var t = Sl(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do {
              (l = e(l, i.action)), (i = i.next);
            } while (i !== a);
            ir(l, t.memoizedState) || (Ai = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function _l() {}
        function Pl(e, t) {
          var n = fl,
            r = Sl(),
            a = t(),
            l = !ir(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (Ai = !0)),
            (r = r.queue),
            Ll(jl.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== pl && 1 & pl.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Rl(9, Nl.bind(null, n, r, a, t), void 0, null),
              null === Eu)
            )
              throw Error(o(349));
            0 !== (30 & cl) || Ol(n, t, a);
          }
          return a;
        }
        function Ol(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = fl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (fl.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Nl(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Dl(t) && Ju(e, 1, -1);
        }
        function jl(e, t, n) {
          return n(function () {
            Dl(t) && Ju(e, 1, -1);
          });
        }
        function Dl(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !ir(e, n);
          } catch (r) {
            return !0;
          }
        }
        function zl(e) {
          var t = kl();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: xl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Zl.bind(null, fl, e)),
            [t.memoizedState, e]
          );
        }
        function Rl(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = fl.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (fl.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Tl() {
          return Sl().memoizedState;
        }
        function Ml(e, t, n, r) {
          var a = kl();
          (fl.flags |= e),
            (a.memoizedState = Rl(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bl(e, t, n, r) {
          var a = Sl();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== dl) {
            var l = dl.memoizedState;
            if (((o = l.destroy), null !== r && bl(r, l.deps)))
              return void (a.memoizedState = Rl(t, n, o, r));
          }
          (fl.flags |= e), (a.memoizedState = Rl(1 | t, n, o, r));
        }
        function Il(e, t) {
          return Ml(8390656, 8, e, t);
        }
        function Ll(e, t) {
          return Bl(2048, 8, e, t);
        }
        function Fl(e, t) {
          return Bl(4, 2, e, t);
        }
        function Ul(e, t) {
          return Bl(4, 4, e, t);
        }
        function Ql(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Vl(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bl(4, 4, Ql.bind(null, t, e), n)
          );
        }
        function Hl() {}
        function Wl(e, t) {
          var n = Sl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && bl(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Yl(e, t) {
          var n = Sl();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && bl(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Gl(e, t, n) {
          return 0 === (21 & cl)
            ? (e.baseState && ((e.baseState = !1), (Ai = !0)),
              (e.memoizedState = n))
            : (ir(n, t) ||
                ((n = mt()), (fl.lanes |= n), (zu |= n), (e.baseState = !0)),
              t);
        }
        function Kl(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = sl.transition;
          sl.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (sl.transition = r);
          }
        }
        function ql() {
          return Sl().memoizedState;
        }
        function Xl(e, t, n) {
          var r = $u(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            $l(e)
              ? Jl(t, n)
              : (ei(e, t, n),
                null !== (e = Ju(e, r, (n = Zu()))) && ti(e, t, r));
        }
        function Zl(e, t, n) {
          var r = $u(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if ($l(e)) Jl(t, a);
          else {
            ei(e, t, a);
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var l = t.lastRenderedState,
                  i = o(l, n);
                if (((a.hasEagerState = !0), (a.eagerState = i), ir(i, l)))
                  return;
              } catch (u) {}
            null !== (e = Ju(e, r, (n = Zu()))) && ti(e, t, r);
          }
        }
        function $l(e) {
          var t = e.alternate;
          return e === fl || (null !== t && t === fl);
        }
        function Jl(e, t) {
          ml = hl = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ei(e, t, n) {
          ts(e)
            ? (null === (e = t.interleaved)
                ? ((n.next = n), null === eo ? (eo = [t]) : eo.push(t))
                : ((n.next = e.next), (e.next = n)),
              (t.interleaved = n))
            : (null === (e = t.pending)
                ? (n.next = n)
                : ((n.next = e.next), (e.next = n)),
              (t.pending = n));
        }
        function ti(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var ni = {
            readContext: Ja,
            useCallback: yl,
            useContext: yl,
            useEffect: yl,
            useImperativeHandle: yl,
            useInsertionEffect: yl,
            useLayoutEffect: yl,
            useMemo: yl,
            useReducer: yl,
            useRef: yl,
            useState: yl,
            useDebugValue: yl,
            useDeferredValue: yl,
            useTransition: yl,
            useMutableSource: yl,
            useSyncExternalStore: yl,
            useId: yl,
            unstable_isNewReconciler: !1,
          },
          ri = {
            readContext: Ja,
            useCallback: function (e, t) {
              return (kl().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ja,
            useEffect: Il,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ml(4194308, 4, Ql.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ml(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ml(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = kl();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = kl();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Xl.bind(null, fl, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (kl().memoizedState = e);
            },
            useState: zl,
            useDebugValue: Hl,
            useDeferredValue: function (e) {
              return (kl().memoizedState = e);
            },
            useTransition: function () {
              var e = zl(!1),
                t = e[0];
              return (
                (e = Kl.bind(null, e[1])), (kl().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = fl,
                a = kl();
              if (zo) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === Eu)) throw Error(o(349));
                0 !== (30 & cl) || Ol(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                Il(jl.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                Rl(9, Nl.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = kl(),
                t = Eu.identifierPrefix;
              if (zo) {
                var n = Eo;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Co & ~(1 << (32 - lt(Co) - 1))).toString(32) + n)),
                  0 < (n = vl++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = gl++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ai = {
            readContext: Ja,
            useCallback: Wl,
            useContext: Ja,
            useEffect: Ll,
            useImperativeHandle: Vl,
            useInsertionEffect: Fl,
            useLayoutEffect: Ul,
            useMemo: Yl,
            useReducer: Cl,
            useRef: Tl,
            useState: function () {
              return Cl(xl);
            },
            useDebugValue: Hl,
            useDeferredValue: function (e) {
              return Gl(Sl(), dl.memoizedState, e);
            },
            useTransition: function () {
              return [Cl(xl)[0], Sl().memoizedState];
            },
            useMutableSource: _l,
            useSyncExternalStore: Pl,
            useId: ql,
            unstable_isNewReconciler: !1,
          },
          oi = {
            readContext: Ja,
            useCallback: Wl,
            useContext: Ja,
            useEffect: Ll,
            useImperativeHandle: Vl,
            useInsertionEffect: Fl,
            useLayoutEffect: Ul,
            useMemo: Yl,
            useReducer: El,
            useRef: Tl,
            useState: function () {
              return El(xl);
            },
            useDebugValue: Hl,
            useDeferredValue: function (e) {
              var t = Sl();
              return null === dl
                ? (t.memoizedState = e)
                : Gl(t, dl.memoizedState, e);
            },
            useTransition: function () {
              return [El(xl)[0], Sl().memoizedState];
            },
            useMutableSource: _l,
            useSyncExternalStore: Pl,
            useId: ql,
            unstable_isNewReconciler: !1,
          };
        function li(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function ii(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ui,
          si,
          ci,
          fi = "function" === typeof WeakMap ? WeakMap : Map;
        function di(e, t, n) {
          ((n = ao(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Uu || ((Uu = !0), (Qu = r)), ii(0, t);
            }),
            n
          );
        }
        function pi(e, t, n) {
          (n = ao(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ii(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                ii(0, t),
                  "function" !== typeof r &&
                    (null === Vu ? (Vu = new Set([this])) : Vu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function hi(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new fi();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = xs.bind(null, e, t, n)), t.then(e, e));
        }
        function mi(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function vi(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = ao(-1, 1)).tag = 2), oo(n, t))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        function gi(e, t) {
          if (!zo)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function yi(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function bi(e, t, n) {
          var r = t.pendingProps;
          switch ((No(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return yi(t), null;
            case 1:
            case 17:
              return Da(t.type) && za(), yi(t), null;
            case 3:
              return (
                (r = t.stateNode),
                tl(),
                Ca(Oa),
                Ca(Pa),
                il(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Ro && (os(Ro), (Ro = null)))),
                yi(t),
                null
              );
            case 5:
              rl(t);
              var a = Jo($o.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                si(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return yi(t), null;
                }
                if (((e = Jo(Xo.current)), Fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = l), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Lr("cancel", r), Lr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Lr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Tr.length; a++) Lr(Tr[a], r);
                      break;
                    case "source":
                      Lr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Lr("error", r), Lr("load", r);
                      break;
                    case "details":
                      Lr("toggle", r);
                      break;
                    case "input":
                      X(r, l), Lr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }),
                        Lr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, l), Lr("invalid", r);
                  }
                  for (var u in (ye(n, l), (a = null), l))
                    if (l.hasOwnProperty(u)) {
                      var s = l[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== l.suppressHydrationWarning &&
                              $r(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== l.suppressHydrationWarning &&
                              $r(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : i.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Lr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Y(r), J(r, l, !0);
                      break;
                    case "textarea":
                      Y(r), le(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof l.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ie(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    ui(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Lr("cancel", e), Lr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Lr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Tr.length; a++) Lr(Tr[a], e);
                        a = r;
                        break;
                      case "source":
                        Lr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Lr("error", e), Lr("load", e), (a = r);
                        break;
                      case "details":
                        Lr("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = q(e, r)), Lr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = B({}, r, { value: void 0 })),
                          Lr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Lr("invalid", e);
                    }
                    for (l in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(l)) {
                        var c = s[l];
                        "style" === l
                          ? ve(e, c)
                          : "dangerouslySetInnerHTML" === l
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === l
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== l &&
                            "suppressHydrationWarning" !== l &&
                            "autoFocus" !== l &&
                            (i.hasOwnProperty(l)
                              ? null != c && "onScroll" === l && Lr("scroll", e)
                              : null != c && b(e, l, c, u));
                      }
                    switch (n) {
                      case "input":
                        Y(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Y(e), le(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (l = r.value)
                            ? ne(e, !!r.multiple, l, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return yi(t), null;
            case 6:
              if (e && null != t.stateNode) ci(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Jo($o.current)), Jo(Xo.current), Fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (l = r.nodeValue !== n) && null !== (e = jo))
                  )
                    switch (e.tag) {
                      case 3:
                        $r(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          $r(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  l && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return yi(t), null;
            case 13:
              if (
                (Ca(al),
                (r = t.memoizedState),
                zo &&
                  null !== Do &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags))
              ) {
                for (r = Do; r; ) r = sa(r.nextSibling);
                return Uo(), (t.flags |= 98560), t;
              }
              if (null !== r && null !== r.dehydrated) {
                if (((r = Fo(t)), null === e)) {
                  if (!r) throw Error(o(318));
                  if (
                    !(r = null !== (r = t.memoizedState) ? r.dehydrated : null)
                  )
                    throw Error(o(317));
                  r[da] = t;
                } else
                  Uo(),
                    0 === (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                return yi(t), null;
              }
              return (
                null !== Ro && (os(Ro), (Ro = null)),
                0 !== (128 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? Fo(t) : (n = null !== e.memoizedState),
                    r !== n &&
                      r &&
                      ((t.child.flags |= 8192),
                      0 !== (1 & t.mode) &&
                        (null === e || 0 !== (1 & al.current)
                          ? 0 === ju && (ju = 3)
                          : hs())),
                    null !== t.updateQueue && (t.flags |= 4),
                    yi(t),
                    null)
              );
            case 4:
              return (
                tl(), null === e && Qr(t.stateNode.containerInfo), yi(t), null
              );
            case 10:
              return Xa(t.type._context), yi(t), null;
            case 19:
              if ((Ca(al), null === (l = t.memoizedState))) return yi(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = l.rendering)))
                if (r) gi(l, !1);
                else {
                  if (0 !== ju || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = ol(e))) {
                        for (
                          t.flags |= 128,
                            gi(l, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 14680066),
                            null === (u = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.subtreeFlags = 0),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = u.childLanes),
                                (l.lanes = u.lanes),
                                (l.child = u.child),
                                (l.subtreeFlags = 0),
                                (l.deletions = null),
                                (l.memoizedProps = u.memoizedProps),
                                (l.memoizedState = u.memoizedState),
                                (l.updateQueue = u.updateQueue),
                                (l.type = u.type),
                                (e = u.dependencies),
                                (l.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ea(al, (1 & al.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    Ze() > Lu &&
                    ((t.flags |= 128),
                    (r = !0),
                    gi(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ol(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      gi(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !u.alternate &&
                        !zo)
                    )
                      return yi(t), null;
                  } else
                    2 * Ze() - l.renderingStartTime > Lu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      gi(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = l.last) ? (n.sibling = u) : (t.child = u),
                    (l.last = u));
              }
              return null !== l.tail
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Ze()),
                  (t.sibling = null),
                  (n = al.current),
                  Ea(al, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (yi(t), null);
            case 22:
            case 23:
              return (
                cs(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Ou) &&
                    (yi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : yi(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        (ui = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (si = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Jo(Xo.current);
              var o,
                l = null;
              switch (n) {
                case "input":
                  (a = q(e, a)), (r = q(e, r)), (l = []);
                  break;
                case "select":
                  (a = B({}, a, { value: void 0 })),
                    (r = B({}, r, { value: void 0 })),
                    (l = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (l = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (o in u)
                      u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (i.hasOwnProperty(c)
                        ? l || (l = [])
                        : (l = l || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (o in u)
                        !u.hasOwnProperty(o) ||
                          (s && s.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in s)
                        s.hasOwnProperty(o) &&
                          u[o] !== s[o] &&
                          (n || (n = {}), (n[o] = s[o]));
                    } else n || (l || (l = []), l.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (l = l || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (l = l || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (i.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Lr("scroll", e),
                            l || u === s || (l = []))
                          : (l = l || []).push(c, s));
              }
              n && (l = l || []).push("style", n);
              var c = l;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (ci = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var wi = w.ReactCurrentOwner,
          Ai = !1;
        function ki(e, t, n, r) {
          t.child = null === e ? Ko(t, null, n, r) : Go(t, e.child, n, r);
        }
        function Si(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            $a(t, a),
            (r = wl(e, t, n, r, o, a)),
            (n = Al()),
            null === e || Ai
              ? (zo && n && Oo(t), (t.flags |= 1), ki(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function xi(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              js(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = zs(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ci(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var l = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(l, r) &&
              e.ref === t.ref
            )
              return Hi(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ds(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ci(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (ur(o, r) && e.ref === t.ref) {
              if (((Ai = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Hi(e, t, a);
              0 !== (131072 & e.flags) && (Ai = !0);
            }
          }
          return Pi(e, t, n, r, a);
        }
        function Ei(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ea(Nu, Ou),
                (Ou |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ea(Nu, Ou),
                  (Ou |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Ea(Nu, Ou),
                (Ou |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ea(Nu, Ou),
              (Ou |= r);
          return ki(e, t, a, n), t.child;
        }
        function _i(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Pi(e, t, n, r, a) {
          var o = Da(n) ? Na : Pa.current;
          return (
            (o = ja(t, o)),
            $a(t, a),
            (n = wl(e, t, n, r, o, a)),
            (r = Al()),
            null === e || Ai
              ? (zo && r && Oo(t), (t.flags |= 1), ki(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Hi(e, t, a))
          );
        }
        function Oi(e, t, n, r, a) {
          if (Da(n)) {
            var o = !0;
            Ma(t);
          } else o = !1;
          if (($a(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              mo(t, n, r),
              go(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var l = t.stateNode,
              i = t.memoizedProps;
            l.props = i;
            var u = l.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Ja(s))
              : (s = ja(t, (s = Da(n) ? Na : Pa.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof l.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== r || u !== s) && vo(t, l, r, s)),
              (to = !1);
            var d = t.memoizedState;
            (l.state = d),
              uo(t, r, l, a),
              (u = t.memoizedState),
              i !== r || d !== u || Oa.current || to
                ? ("function" === typeof c &&
                    (fo(t, n, c, r), (u = t.memoizedState)),
                  (i = to || ho(t, n, i, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof l.UNSAFE_componentWillMount &&
                          "function" !== typeof l.componentWillMount) ||
                        ("function" === typeof l.componentWillMount &&
                          l.componentWillMount(),
                        "function" === typeof l.UNSAFE_componentWillMount &&
                          l.UNSAFE_componentWillMount()),
                      "function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof l.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (l.props = r),
                  (l.state = u),
                  (l.context = s),
                  (r = i))
                : ("function" === typeof l.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (l = t.stateNode),
              ro(e, t),
              (i = t.memoizedProps),
              (s = t.type === t.elementType ? i : Ha(t.type, i)),
              (l.props = s),
              (f = t.pendingProps),
              (d = l.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Ja(u))
                : (u = ja(t, (u = Da(n) ? Na : Pa.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof l.getSnapshotBeforeUpdate) ||
              ("function" !== typeof l.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof l.componentWillReceiveProps) ||
              ((i !== f || d !== u) && vo(t, l, r, u)),
              (to = !1),
              (d = t.memoizedState),
              (l.state = d),
              uo(t, r, l, a);
            var h = t.memoizedState;
            i !== f || d !== h || Oa.current || to
              ? ("function" === typeof p &&
                  (fo(t, n, p, r), (h = t.memoizedState)),
                (s = to || ho(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" !== typeof l.UNSAFE_componentWillUpdate &&
                        "function" !== typeof l.componentWillUpdate) ||
                      ("function" === typeof l.componentWillUpdate &&
                        l.componentWillUpdate(r, h, u),
                      "function" === typeof l.UNSAFE_componentWillUpdate &&
                        l.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" === typeof l.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof l.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof l.componentDidUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof l.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (l.props = r),
                (l.state = h),
                (l.context = u),
                (r = s))
              : ("function" !== typeof l.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof l.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Ni(e, t, n, r, o, a);
        }
        function Ni(e, t, n, r, a, o) {
          _i(e, t);
          var l = 0 !== (128 & t.flags);
          if (!r && !l) return a && Ba(t, n, !1), Hi(e, t, o);
          (r = t.stateNode), (wi.current = t);
          var i =
            l && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && l
              ? ((t.child = Go(t, e.child, null, o)),
                (t.child = Go(t, null, i, o)))
              : ki(e, t, i, o),
            (t.memoizedState = r.state),
            a && Ba(t, n, !0),
            t.child
          );
        }
        function ji(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ra(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ra(0, t.context, !1),
            el(e, t.containerInfo);
        }
        function Di(e, t, n, r, a) {
          return Uo(), Qo(a), (t.flags |= 256), ki(e, t, n, r), t.child;
        }
        var zi = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ri(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ti(e, t) {
          return {
            baseLanes: e.baseLanes | t,
            cachePool: null,
            transitions: e.transitions,
          };
        }
        function Mi(e, t, n) {
          var r,
            a = t.pendingProps,
            l = al.current,
            i = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & l)),
            r
              ? ((i = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (l |= 1),
            Ea(al, 1 & l),
            null === e)
          )
            return (
              Io(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  i
                    ? ((a = t.mode),
                      (i = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== i
                        ? ((i.childLanes = 0), (i.pendingProps = l))
                        : (i = Ts(l, a, 0, null)),
                      (e = Rs(e, a, n, null)),
                      (i.return = t),
                      (e.return = t),
                      (i.sibling = e),
                      (t.child = i),
                      (t.child.memoizedState = Ri(n)),
                      (t.memoizedState = zi),
                      e)
                    : Bi(t, l))
            );
          if (null !== (l = e.memoizedState)) {
            if (null !== (r = l.dehydrated)) {
              if (u)
                return 256 & t.flags
                  ? ((t.flags &= -257), Fi(e, t, n, Error(o(422))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = a.fallback),
                    (l = t.mode),
                    (a = Ts(
                      { mode: "visible", children: a.children },
                      l,
                      0,
                      null
                    )),
                    ((i = Rs(i, l, n, null)).flags |= 2),
                    (a.return = t),
                    (i.return = t),
                    (a.sibling = i),
                    (t.child = a),
                    0 !== (1 & t.mode) && Go(t, e.child, null, n),
                    (t.child.memoizedState = Ri(n)),
                    (t.memoizedState = zi),
                    i);
              if (0 === (1 & t.mode)) t = Fi(e, t, n, null);
              else if ("$!" === r.data) t = Fi(e, t, n, Error(o(419)));
              else if (((a = 0 !== (n & e.childLanes)), Ai || a)) {
                if (null !== (a = Eu)) {
                  switch (n & -n) {
                    case 4:
                      i = 2;
                      break;
                    case 16:
                      i = 8;
                      break;
                    case 64:
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
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      i = 32;
                      break;
                    case 536870912:
                      i = 268435456;
                      break;
                    default:
                      i = 0;
                  }
                  0 !== (a = 0 !== (i & (a.suspendedLanes | n)) ? 0 : i) &&
                    a !== l.retryLane &&
                    ((l.retryLane = a), Ju(e, a, -1));
                }
                hs(), (t = Fi(e, t, n, Error(o(421))));
              } else
                "$?" === r.data
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = Es.bind(null, e)),
                    (r._reactRetry = t),
                    (t = null))
                  : ((n = l.treeContext),
                    (Do = sa(r.nextSibling)),
                    (jo = t),
                    (zo = !0),
                    (Ro = null),
                    null !== n &&
                      ((ko[So++] = Co),
                      (ko[So++] = Eo),
                      (ko[So++] = xo),
                      (Co = n.id),
                      (Eo = n.overflow),
                      (xo = t)),
                    ((t = Bi(t, t.pendingProps.children)).flags |= 4096));
              return t;
            }
            return i
              ? ((a = Li(e, t, a.children, a.fallback, n)),
                (i = t.child),
                (l = e.child.memoizedState),
                (i.memoizedState = null === l ? Ri(n) : Ti(l, n)),
                (i.childLanes = e.childLanes & ~n),
                (t.memoizedState = zi),
                a)
              : ((n = Ii(e, t, a.children, n)), (t.memoizedState = null), n);
          }
          return i
            ? ((a = Li(e, t, a.children, a.fallback, n)),
              (i = t.child),
              (l = e.child.memoizedState),
              (i.memoizedState = null === l ? Ri(n) : Ti(l, n)),
              (i.childLanes = e.childLanes & ~n),
              (t.memoizedState = zi),
              a)
            : ((n = Ii(e, t, a.children, n)), (t.memoizedState = null), n);
        }
        function Bi(e, t) {
          return (
            ((t = Ts(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Ii(e, t, n, r) {
          var a = e.child;
          return (
            (e = a.sibling),
            (n = Ds(a, { mode: "visible", children: n })),
            0 === (1 & t.mode) && (n.lanes = r),
            (n.return = t),
            (n.sibling = null),
            null !== e &&
              (null === (r = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : r.push(e)),
            (t.child = n)
          );
        }
        function Li(e, t, n, r, a) {
          var o = t.mode,
            l = (e = e.child).sibling,
            i = { mode: "hidden", children: n };
          return (
            0 === (1 & o) && t.child !== e
              ? (((n = t.child).childLanes = 0),
                (n.pendingProps = i),
                (t.deletions = null))
              : ((n = Ds(e, i)).subtreeFlags = 14680064 & e.subtreeFlags),
            null !== l ? (r = Ds(l, r)) : ((r = Rs(r, o, a, null)).flags |= 2),
            (r.return = t),
            (n.return = t),
            (n.sibling = r),
            (t.child = n),
            r
          );
        }
        function Fi(e, t, n, r) {
          return (
            null !== r && Qo(r),
            Go(t, e.child, null, n),
            ((e = Bi(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ui(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Za(e.return, t, n);
        }
        function Qi(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function Vi(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((ki(e, t, r.children, n), 0 !== (2 & (r = al.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ui(e, n, t);
                else if (19 === e.tag) Ui(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ea(al, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ol(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Qi(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ol(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Qi(t, !0, n, null, o);
                break;
              case "together":
                Qi(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hi(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (zu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ds((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ds(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Wi(e, t) {
          switch ((No(t), t.tag)) {
            case 1:
              return (
                Da(t.type) && za(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                tl(),
                Ca(Oa),
                Ca(Pa),
                il(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return rl(t), null;
            case 13:
              if (
                (Ca(al),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                Uo();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(al), null;
            case 4:
              return tl(), null;
            case 10:
              return Xa(t.type._context), null;
            case 22:
            case 23:
              return cs(), null;
            default:
              return null;
          }
        }
        var Yi = !1,
          Gi = !1,
          Ki = "function" === typeof WeakSet ? WeakSet : Set,
          qi = null;
        function Xi(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Ss(e, t, r);
              }
            else n.current = null;
        }
        function Zi(e, t, n) {
          try {
            n();
          } catch (r) {
            Ss(e, t, r);
          }
        }
        var $i = !1;
        function Ji(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && Zi(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function eu(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function tu(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function nu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), nu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[va],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ru(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function au(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ru(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ou(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (ou(e, t, n), e = e.sibling; null !== e; )
              ou(e, t, n), (e = e.sibling);
        }
        function lu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (lu(e, t, n), e = e.sibling; null !== e; )
              lu(e, t, n), (e = e.sibling);
        }
        var iu = null,
          uu = !1;
        function su(e, t, n) {
          for (n = n.child; null !== n; ) cu(e, t, n), (n = n.sibling);
        }
        function cu(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (i) {}
          switch (n.tag) {
            case 5:
              Gi || Xi(n, t);
            case 6:
              var r = iu,
                a = uu;
              (iu = null),
                su(e, t, n),
                (uu = a),
                null !== (iu = r) &&
                  (uu
                    ? ((e = iu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : iu.removeChild(n.stateNode));
              break;
            case 18:
              null !== iu &&
                (uu
                  ? ((e = iu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Qt(e))
                  : ua(iu, n.stateNode));
              break;
            case 4:
              (r = iu),
                (a = uu),
                (iu = n.stateNode.containerInfo),
                (uu = !0),
                su(e, t, n),
                (iu = r),
                (uu = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Gi &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    l = o.destroy;
                  (o = o.tag),
                    void 0 !== l &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      Zi(n, t, l),
                    (a = a.next);
                } while (a !== r);
              }
              su(e, t, n);
              break;
            case 1:
              if (
                !Gi &&
                (Xi(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (i) {
                  Ss(n, t, i);
                }
              su(e, t, n);
              break;
            case 21:
              su(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Gi = (r = Gi) || null !== n.memoizedState),
                  su(e, t, n),
                  (Gi = r))
                : su(e, t, n);
              break;
            default:
              su(e, t, n);
          }
        }
        function fu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Ki()),
              t.forEach(function (t) {
                var r = _s.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function du(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var l = e,
                  i = t,
                  u = i;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (iu = u.stateNode), (uu = !1);
                      break e;
                    case 3:
                    case 4:
                      (iu = u.stateNode.containerInfo), (uu = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === iu) throw Error(o(160));
                cu(l, i, a), (iu = null), (uu = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Ss(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) pu(t, e), (t = t.sibling);
        }
        function pu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((du(t, e), hu(e), 4 & r)) {
                try {
                  Ji(3, e, e.return), eu(3, e);
                } catch (m) {
                  Ss(e, e.return, m);
                }
                try {
                  Ji(5, e, e.return);
                } catch (m) {
                  Ss(e, e.return, m);
                }
              }
              break;
            case 1:
              du(t, e), hu(e), 512 & r && null !== n && Xi(n, n.return);
              break;
            case 5:
              if (
                (du(t, e),
                hu(e),
                512 & r && null !== n && Xi(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Ss(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var l = e.memoizedProps,
                  i = null !== n ? n.memoizedProps : l,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === l.type &&
                      null != l.name &&
                      Z(a, l),
                      be(u, i);
                    var c = be(u, l);
                    for (i = 0; i < s.length; i += 2) {
                      var f = s[i],
                        d = s[i + 1];
                      "style" === f
                        ? ve(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        $(a, l);
                        break;
                      case "textarea":
                        oe(a, l);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!l.multiple;
                        var h = l.value;
                        null != h
                          ? ne(a, !!l.multiple, h, !1)
                          : p !== !!l.multiple &&
                            (null != l.defaultValue
                              ? ne(a, !!l.multiple, l.defaultValue, !0)
                              : ne(a, !!l.multiple, l.multiple ? [] : "", !1));
                    }
                    a[pa] = l;
                  } catch (m) {
                    Ss(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((du(t, e), hu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (c = e.stateNode), (f = e.memoizedProps);
                try {
                  c.nodeValue = f;
                } catch (m) {
                  Ss(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (du(t, e),
                hu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Qt(t.containerInfo);
                } catch (m) {
                  Ss(e, e.return, m);
                }
              break;
            case 4:
            default:
              du(t, e), hu(e);
              break;
            case 13:
              du(t, e),
                hu(e),
                8192 & (c = e.child).flags &&
                  null !== c.memoizedState &&
                  (null === c.alternate ||
                    null === c.alternate.memoizedState) &&
                  (Iu = Ze()),
                4 & r && fu(e);
              break;
            case 22:
              if (
                ((c = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Gi = (f = Gi) || c), du(t, e), (Gi = f))
                  : du(t, e),
                hu(e),
                8192 & r)
              ) {
                f = null !== e.memoizedState;
                e: for (d = null, p = e; ; ) {
                  if (5 === p.tag) {
                    if (null === d) {
                      d = p;
                      try {
                        (a = p.stateNode),
                          f
                            ? "function" === typeof (l = a.style).setProperty
                              ? l.setProperty("display", "none", "important")
                              : (l.display = "none")
                            : ((u = p.stateNode),
                              (i =
                                void 0 !== (s = p.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = me("display", i)));
                      } catch (m) {
                        Ss(e, e.return, m);
                      }
                    }
                  } else if (6 === p.tag) {
                    if (null === d)
                      try {
                        p.stateNode.nodeValue = f ? "" : p.memoizedProps;
                      } catch (m) {
                        Ss(e, e.return, m);
                      }
                  } else if (
                    ((22 !== p.tag && 23 !== p.tag) ||
                      null === p.memoizedState ||
                      p === e) &&
                    null !== p.child
                  ) {
                    (p.child.return = p), (p = p.child);
                    continue;
                  }
                  if (p === e) break e;
                  for (; null === p.sibling; ) {
                    if (null === p.return || p.return === e) break e;
                    d === p && (d = null), (p = p.return);
                  }
                  d === p && (d = null),
                    (p.sibling.return = p.return),
                    (p = p.sibling);
                }
                if (f && !c && 0 !== (1 & e.mode))
                  for (qi = e, e = e.child; null !== e; ) {
                    for (c = qi = e; null !== qi; ) {
                      switch (((d = (f = qi).child), f.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          Ji(4, f, f.return);
                          break;
                        case 1:
                          if (
                            (Xi(f, f.return),
                            "function" ===
                              typeof (l = f.stateNode).componentWillUnmount)
                          ) {
                            (p = f), (h = f.return);
                            try {
                              (a = p),
                                (l.props = a.memoizedProps),
                                (l.state = a.memoizedState),
                                l.componentWillUnmount();
                            } catch (m) {
                              Ss(p, h, m);
                            }
                          }
                          break;
                        case 5:
                          Xi(f, f.return);
                          break;
                        case 22:
                          if (null !== f.memoizedState) {
                            yu(c);
                            continue;
                          }
                      }
                      null !== d ? ((d.return = f), (qi = d)) : yu(c);
                    }
                    e = e.sibling;
                  }
              }
              break;
            case 19:
              du(t, e), hu(e), 4 & r && fu(e);
            case 21:
          }
        }
        function hu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ru(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    lu(e, au(e), a);
                  break;
                case 3:
                case 4:
                  var l = r.stateNode.containerInfo;
                  ou(e, au(e), l);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (i) {
              Ss(e, e.return, i);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function mu(e, t, n) {
          (qi = e), vu(e, t, n);
        }
        function vu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== qi; ) {
            var a = qi,
              o = a.child;
            if (22 === a.tag && r) {
              var l = null !== a.memoizedState || Yi;
              if (!l) {
                var i = a.alternate,
                  u = (null !== i && null !== i.memoizedState) || Gi;
                i = Yi;
                var s = Gi;
                if (((Yi = l), (Gi = u) && !s))
                  for (qi = a; null !== qi; )
                    (u = (l = qi).child),
                      22 === l.tag && null !== l.memoizedState
                        ? bu(a)
                        : null !== u
                        ? ((u.return = l), (qi = u))
                        : bu(a);
                for (; null !== o; ) (qi = o), vu(o, t, n), (o = o.sibling);
                (qi = a), (Yi = i), (Gi = s);
              }
              gu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (qi = o))
                : gu(e);
          }
        }
        function gu(e) {
          for (; null !== qi; ) {
            var t = qi;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi || eu(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Gi)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : Ha(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var l = t.updateQueue;
                      null !== l && so(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        so(t, i, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Qt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Gi || (512 & t.flags && tu(t));
              } catch (p) {
                Ss(t, t.return, p);
              }
            }
            if (t === e) {
              qi = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (qi = n);
              break;
            }
            qi = t.return;
          }
        }
        function yu(e) {
          for (; null !== qi; ) {
            var t = qi;
            if (t === e) {
              qi = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (qi = n);
              break;
            }
            qi = t.return;
          }
        }
        function bu(e) {
          for (; null !== qi; ) {
            var t = qi;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    eu(4, t);
                  } catch (u) {
                    Ss(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Ss(t, a, u);
                    }
                  }
                  var o = t.return;
                  try {
                    tu(t);
                  } catch (u) {
                    Ss(t, o, u);
                  }
                  break;
                case 5:
                  var l = t.return;
                  try {
                    tu(t);
                  } catch (u) {
                    Ss(t, l, u);
                  }
              }
            } catch (u) {
              Ss(t, t.return, u);
            }
            if (t === e) {
              qi = null;
              break;
            }
            var i = t.sibling;
            if (null !== i) {
              (i.return = t.return), (qi = i);
              break;
            }
            qi = t.return;
          }
        }
        var wu,
          Au = Math.ceil,
          ku = w.ReactCurrentDispatcher,
          Su = w.ReactCurrentOwner,
          xu = w.ReactCurrentBatchConfig,
          Cu = 0,
          Eu = null,
          _u = null,
          Pu = 0,
          Ou = 0,
          Nu = xa(0),
          ju = 0,
          Du = null,
          zu = 0,
          Ru = 0,
          Tu = 0,
          Mu = null,
          Bu = null,
          Iu = 0,
          Lu = 1 / 0,
          Fu = null,
          Uu = !1,
          Qu = null,
          Vu = null,
          Hu = !1,
          Wu = null,
          Yu = 0,
          Gu = 0,
          Ku = null,
          qu = -1,
          Xu = 0;
        function Zu() {
          return 0 !== (6 & Cu) ? Ze() : -1 !== qu ? qu : (qu = Ze());
        }
        function $u(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Cu) && 0 !== Pu
            ? Pu & -Pu
            : null !== Va.transition
            ? (0 === Xu && (Xu = mt()), Xu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function Ju(e, t, n) {
          if (50 < Gu) throw ((Gu = 0), (Ku = null), Error(o(185)));
          var r = es(e, t);
          return null === r
            ? null
            : (gt(r, t, n),
              (0 !== (2 & Cu) && r === Eu) ||
                (r === Eu &&
                  (0 === (2 & Cu) && (Ru |= t), 4 === ju && ls(r, Pu)),
                ns(r, n),
                1 === t &&
                  0 === Cu &&
                  0 === (1 & e.mode) &&
                  ((Lu = Ze() + 500), La && Qa())),
              r);
        }
        function es(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function ts(e) {
          return (
            (null !== Eu || null !== eo) && 0 !== (1 & e.mode) && 0 === (2 & Cu)
          );
        }
        function ns(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var l = 31 - lt(o),
                i = 1 << l,
                u = a[l];
              -1 === u
                ? (0 !== (i & n) && 0 === (i & r)) || (a[l] = pt(i, t))
                : u <= t && (e.expiredLanes |= i),
                (o &= ~i);
            }
          })(e, t);
          var r = dt(e, e === Eu ? Pu : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (La = !0), Ua(e);
                  })(is.bind(null, e))
                : Ua(is.bind(null, e)),
                la(function () {
                  0 === Cu && Qa();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Ps(n, rs.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function rs(e, t) {
          if (((qu = -1), (Xu = 0), 0 !== (6 & Cu))) throw Error(o(327));
          var n = e.callbackNode;
          if (As() && e.callbackNode !== n) return null;
          var r = dt(e, e === Eu ? Pu : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = ms(e, r);
          else {
            t = r;
            var a = Cu;
            Cu |= 2;
            var l = ps();
            for (
              (Eu === e && Pu === t) ||
              ((Fu = null), (Lu = Ze() + 500), fs(e, t));
              ;

            )
              try {
                gs();
                break;
              } catch (u) {
                ds(e, u);
              }
            qa(),
              (ku.current = l),
              (Cu = a),
              null !== _u ? (t = 0) : ((Eu = null), (Pu = 0), (t = ju));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = as(e, a))),
              1 === t)
            )
              throw ((n = Du), fs(e, 0), ls(e, r), ns(e, Ze()), n);
            if (6 === t) ls(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!ir(o(), a)) return !1;
                            } catch (i) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = ms(e, r)) &&
                    0 !== (l = ht(e)) &&
                    ((r = l), (t = as(e, l))),
                  1 === t))
              )
                throw ((n = Du), fs(e, 0), ls(e, r), ns(e, Ze()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  ws(e, Bu, Fu);
                  break;
                case 3:
                  if (
                    (ls(e, r),
                    (130023424 & r) === r && 10 < (t = Iu + 500 - Ze()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      Zu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ws.bind(null, e, Bu, Fu), t);
                    break;
                  }
                  ws(e, Bu, Fu);
                  break;
                case 4:
                  if ((ls(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var i = 31 - lt(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ze() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Au(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ws.bind(null, e, Bu, Fu), r);
                    break;
                  }
                  ws(e, Bu, Fu);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return ns(e, Ze()), e.callbackNode === n ? rs.bind(null, e) : null;
        }
        function as(e, t) {
          var n = Mu;
          return (
            e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256),
            2 !== (e = ms(e, t)) && ((t = Bu), (Bu = n), null !== t && os(t)),
            e
          );
        }
        function os(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function ls(e, t) {
          for (
            t &= ~Tu,
              t &= ~Ru,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - lt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function is(e) {
          if (0 !== (6 & Cu)) throw Error(o(327));
          As();
          var t = dt(e, 0);
          if (0 === (1 & t)) return ns(e, Ze()), null;
          var n = ms(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = as(e, r)));
          }
          if (1 === n) throw ((n = Du), fs(e, 0), ls(e, t), ns(e, Ze()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ws(e, Bu, Fu),
            ns(e, Ze()),
            null
          );
        }
        function us(e, t) {
          var n = Cu;
          Cu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Cu = n) && ((Lu = Ze() + 500), La && Qa());
          }
        }
        function ss(e) {
          null !== Wu && 0 === Wu.tag && 0 === (6 & Cu) && As();
          var t = Cu;
          Cu |= 1;
          var n = xu.transition,
            r = bt;
          try {
            if (((xu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (xu.transition = n), 0 === (6 & (Cu = t)) && Qa();
          }
        }
        function cs() {
          (Ou = Nu.current), Ca(Nu);
        }
        function fs(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== _u))
            for (n = _u.return; null !== n; ) {
              var r = n;
              switch ((No(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    za();
                  break;
                case 3:
                  tl(), Ca(Oa), Ca(Pa), il();
                  break;
                case 5:
                  rl(r);
                  break;
                case 4:
                  tl();
                  break;
                case 13:
                case 19:
                  Ca(al);
                  break;
                case 10:
                  Xa(r.type._context);
                  break;
                case 22:
                case 23:
                  cs();
              }
              n = n.return;
            }
          if (
            ((Eu = e),
            (_u = e = Ds(e.current, null)),
            (Pu = Ou = t),
            (ju = 0),
            (Du = null),
            (Tu = Ru = zu = 0),
            (Bu = Mu = null),
            null !== eo)
          ) {
            for (t = 0; t < eo.length; t++)
              if (null !== (r = (n = eo[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var l = o.next;
                  (o.next = a), (r.next = l);
                }
                n.pending = r;
              }
            eo = null;
          }
          return e;
        }
        function ds(e, t) {
          for (;;) {
            var n = _u;
            try {
              if ((qa(), (ul.current = ni), hl)) {
                for (var r = fl.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                hl = !1;
              }
              if (
                ((cl = 0),
                (pl = dl = fl = null),
                (ml = !1),
                (vl = 0),
                (Su.current = null),
                null === n || null === n.return)
              ) {
                (ju = 1), (Du = t), (_u = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Pu),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = mi(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      vi(h, i, u, 0, t),
                      1 & h.mode && hi(l, c, t),
                      (s = c);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var v = new Set();
                      v.add(s), (t.updateQueue = v);
                    } else m.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hi(l, c, t), hs();
                    break e;
                  }
                  s = Error(o(426));
                } else if (zo && 1 & u.mode) {
                  var g = mi(i);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      vi(g, i, u, 0, t),
                      Qo(s);
                    break e;
                  }
                }
                (l = s),
                  4 !== ju && (ju = 2),
                  null === Mu ? (Mu = [l]) : Mu.push(l),
                  (s = li(s, u)),
                  (u = i);
                do {
                  switch (u.tag) {
                    case 3:
                      (u.flags |= 65536),
                        (t &= -t),
                        (u.lanes |= t),
                        io(u, di(0, s, t));
                      break e;
                    case 1:
                      l = s;
                      var y = u.type,
                        b = u.stateNode;
                      if (
                        0 === (128 & u.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Vu || !Vu.has(b))))
                      ) {
                        (u.flags |= 65536),
                          (t &= -t),
                          (u.lanes |= t),
                          io(u, pi(u, l, t));
                        break e;
                      }
                  }
                  u = u.return;
                } while (null !== u);
              }
              bs(n);
            } catch (w) {
              (t = w), _u === n && null !== n && (_u = n = n.return);
              continue;
            }
            break;
          }
        }
        function ps() {
          var e = ku.current;
          return (ku.current = ni), null === e ? ni : e;
        }
        function hs() {
          (0 !== ju && 3 !== ju && 2 !== ju) || (ju = 4),
            null === Eu ||
              (0 === (268435455 & zu) && 0 === (268435455 & Ru)) ||
              ls(Eu, Pu);
        }
        function ms(e, t) {
          var n = Cu;
          Cu |= 2;
          var r = ps();
          for ((Eu === e && Pu === t) || ((Fu = null), fs(e, t)); ; )
            try {
              vs();
              break;
            } catch (a) {
              ds(e, a);
            }
          if ((qa(), (Cu = n), (ku.current = r), null !== _u))
            throw Error(o(261));
          return (Eu = null), (Pu = 0), ju;
        }
        function vs() {
          for (; null !== _u; ) ys(_u);
        }
        function gs() {
          for (; null !== _u && !qe(); ) ys(_u);
        }
        function ys(e) {
          var t = wu(e.alternate, e, Ou);
          (e.memoizedProps = e.pendingProps),
            null === t ? bs(e) : (_u = t),
            (Su.current = null);
        }
        function bs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = bi(n, t, Ou))) return void (_u = n);
            } else {
              if (null !== (n = Wi(n, t)))
                return (n.flags &= 32767), void (_u = n);
              if (null === e) return (ju = 6), void (_u = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (_u = t);
            _u = t = e;
          } while (null !== t);
          0 === ju && (ju = 5);
        }
        function ws(e, t, n) {
          var r = bt,
            a = xu.transition;
          try {
            (xu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  As();
                } while (null !== Wu);
                if (0 !== (6 & Cu)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var l = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - lt(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, l),
                  e === Eu && ((_u = Eu = null), (Pu = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Hu ||
                    ((Hu = !0),
                    Ps(tt, function () {
                      return As(), null;
                    })),
                  (l = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || l)
                ) {
                  (l = xu.transition), (xu.transition = null);
                  var i = bt;
                  bt = 1;
                  var u = Cu;
                  (Cu |= 4),
                    (Su.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                l = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, l.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var i = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = i + a),
                                    d !== l ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = i + r),
                                    3 === d.nodeType &&
                                      (i += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = i),
                                    p === l && ++f === r && (s = i),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          qi = t;
                        null !== qi;

                      )
                        if (
                          ((e = (t = qi).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (qi = e);
                        else
                          for (; null !== qi; ) {
                            t = qi;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var v = m.memoizedProps,
                                        g = m.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : Ha(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    if (1 === w.nodeType) w.textContent = "";
                                    else if (9 === w.nodeType) {
                                      var A = w.body;
                                      null != A && (A.textContent = "");
                                    }
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (k) {
                              Ss(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (qi = e);
                              break;
                            }
                            qi = t.return;
                          }
                      (m = $i), ($i = !1);
                    })(e, n),
                    pu(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    mu(n, e, a),
                    Xe(),
                    (Cu = u),
                    (bt = i),
                    (xu.transition = l);
                } else e.current = n;
                if (
                  (Hu && ((Hu = !1), (Wu = e), (Yu = a)),
                  0 === (l = e.pendingLanes) && (Vu = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ns(e, Ze()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r(t[n]);
                if (Uu) throw ((Uu = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Yu) && 0 !== e.tag && As(),
                  0 !== (1 & (l = e.pendingLanes))
                    ? e === Ku
                      ? Gu++
                      : ((Gu = 0), (Ku = e))
                    : (Gu = 0),
                  Qa();
              })(e, t, n, r);
          } finally {
            (xu.transition = a), (bt = r);
          }
          return null;
        }
        function As() {
          if (null !== Wu) {
            var e = wt(Yu),
              t = xu.transition,
              n = bt;
            try {
              if (((xu.transition = null), (bt = 16 > e ? 16 : e), null === Wu))
                var r = !1;
              else {
                if (((e = Wu), (Wu = null), (Yu = 0), 0 !== (6 & Cu)))
                  throw Error(o(331));
                var a = Cu;
                for (Cu |= 4, qi = e.current; null !== qi; ) {
                  var l = qi,
                    i = l.child;
                  if (0 !== (16 & qi.flags)) {
                    var u = l.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (qi = c; null !== qi; ) {
                          var f = qi;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Ji(8, f, l);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (qi = d);
                          else
                            for (; null !== qi; ) {
                              var p = (f = qi).sibling,
                                h = f.return;
                              if ((nu(f), f === c)) {
                                qi = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (qi = p);
                                break;
                              }
                              qi = h;
                            }
                        }
                      }
                      var m = l.alternate;
                      if (null !== m) {
                        var v = m.child;
                        if (null !== v) {
                          m.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      qi = l;
                    }
                  }
                  if (0 !== (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (qi = i);
                  else
                    e: for (; null !== qi; ) {
                      if (0 !== (2048 & (l = qi).flags))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Ji(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (qi = y);
                        break e;
                      }
                      qi = l.return;
                    }
                }
                var b = e.current;
                for (qi = b; null !== qi; ) {
                  var w = (i = qi).child;
                  if (0 !== (2064 & i.subtreeFlags) && null !== w)
                    (w.return = i), (qi = w);
                  else
                    e: for (i = b; null !== qi; ) {
                      if (0 !== (2048 & (u = qi).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              eu(9, u);
                          }
                        } catch (k) {
                          Ss(u, u.return, k);
                        }
                      if (u === i) {
                        qi = null;
                        break e;
                      }
                      var A = u.sibling;
                      if (null !== A) {
                        (A.return = u.return), (qi = A);
                        break e;
                      }
                      qi = u.return;
                    }
                }
                if (
                  ((Cu = a),
                  Qa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (xu.transition = t);
            }
          }
          return !1;
        }
        function ks(e, t, n) {
          oo(e, (t = di(0, (t = li(n, t)), 1))),
            (t = Zu()),
            null !== (e = es(e, 1)) && (gt(e, 1, t), ns(e, t));
        }
        function Ss(e, t, n) {
          if (3 === e.tag) ks(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                ks(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Vu || !Vu.has(r)))
                ) {
                  oo(t, (e = pi(t, (e = li(n, e)), 1))),
                    (e = Zu()),
                    null !== (t = es(t, 1)) && (gt(t, 1, e), ns(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function xs(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = Zu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Eu === e &&
              (Pu & n) === n &&
              (4 === ju ||
              (3 === ju && (130023424 & Pu) === Pu && 500 > Ze() - Iu)
                ? fs(e, 0)
                : (Tu |= n)),
            ns(e, t);
        }
        function Cs(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = Zu();
          null !== (e = es(e, t)) && (gt(e, t, n), ns(e, n));
        }
        function Es(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Cs(e, n);
        }
        function _s(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Cs(e, n);
        }
        function Ps(e, t) {
          return Ge(e, t);
        }
        function Os(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Ns(e, t, n, r) {
          return new Os(e, t, n, r);
        }
        function js(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ds(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Ns(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function zs(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" === typeof e)) js(e) && (i = 1);
          else if ("string" === typeof e) i = 5;
          else
            e: switch (e) {
              case S:
                return Rs(n.children, a, l, t);
              case x:
                (i = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Ns(12, n, t, 2 | a)).elementType = C), (e.lanes = l), e
                );
              case O:
                return (
                  ((e = Ns(13, n, t, a)).elementType = O), (e.lanes = l), e
                );
              case N:
                return (
                  ((e = Ns(19, n, t, a)).elementType = N), (e.lanes = l), e
                );
              case z:
                return Ts(n, a, l, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case E:
                      i = 10;
                      break e;
                    case _:
                      i = 9;
                      break e;
                    case P:
                      i = 11;
                      break e;
                    case j:
                      i = 14;
                      break e;
                    case D:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Ns(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function Rs(e, t, n, r) {
          return ((e = Ns(7, e, r, t)).lanes = n), e;
        }
        function Ts(e, t, n, r) {
          return (
            ((e = Ns(22, e, r, t)).elementType = z),
            (e.lanes = n),
            (e.stateNode = {}),
            e
          );
        }
        function Ms(e, t, n) {
          return ((e = Ns(6, e, null, t)).lanes = n), e;
        }
        function Bs(e, t, n) {
          return (
            ((t = Ns(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Is(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = vt(0)),
            (this.expirationTimes = vt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = vt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Ls(e, t, n, r, a, o, l, i, u) {
          return (
            (e = new Is(e, t, n, i, u)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Ns(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            no(o),
            e
          );
        }
        function Fs(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: k,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Us(e) {
          if (!e) return _a;
          e: {
            if (Qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Da(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Da(n)) return Ta(e, n, t);
          }
          return t;
        }
        function Qs(e, t, n, r, a, o, l, i, u) {
          return (
            ((e = Ls(n, r, !0, e, 0, o, 0, i, u)).context = Us(null)),
            (n = e.current),
            ((o = ao((r = Zu()), (a = $u(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            oo(n, o),
            (e.current.lanes = a),
            gt(e, a, r),
            ns(e, r),
            e
          );
        }
        function Vs(e, t, n, r) {
          var a = t.current,
            o = Zu(),
            l = $u(a);
          return (
            (n = Us(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = ao(o, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            oo(a, t),
            null !== (e = Ju(a, l, o)) && lo(e, a, l),
            l
          );
        }
        function Hs(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ws(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Ys(e, t) {
          Ws(e, t), (e = e.alternate) && Ws(e, t);
        }
        wu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Oa.current) Ai = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (Ai = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        ji(t), Uo();
                        break;
                      case 5:
                        nl(t);
                        break;
                      case 1:
                        Da(t.type) && Ma(t);
                        break;
                      case 4:
                        el(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ea(Wa, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ea(al, 1 & al.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Mi(e, t, n)
                            : (Ea(al, 1 & al.current),
                              null !== (e = Hi(e, t, n)) ? e.sibling : null);
                        Ea(al, 1 & al.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vi(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ea(al, al.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ei(e, t, n);
                    }
                    return Hi(e, t, n);
                  })(e, t, n)
                );
              Ai = 0 !== (131072 & e.flags);
            }
          else (Ai = !1), zo && 0 !== (1048576 & t.flags) && Po(t, Ao, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps);
              var a = ja(t, Pa.current);
              $a(t, n), (a = wl(null, t, r, e, a, n));
              var l = Al();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Da(r) ? ((l = !0), Ma(t)) : (l = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    no(t),
                    (a.updater = po),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    go(t, r, e, n),
                    (t = Ni(null, t, r, !0, l, n)))
                  : ((t.tag = 0),
                    zo && l && Oo(t),
                    ki(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return js(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === j) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = Ha(r, e)),
                  a)
                ) {
                  case 0:
                    t = Pi(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Oi(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Si(null, t, r, e, n);
                    break e;
                  case 14:
                    t = xi(null, t, r, Ha(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Pi(e, t, r, (a = t.elementType === r ? a : Ha(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Oi(e, t, r, (a = t.elementType === r ? a : Ha(r, a)), n)
              );
            case 3:
              e: {
                if ((ji(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (l = t.memoizedState).element),
                  ro(e, t),
                  uo(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), l.isDehydrated)) {
                  if (
                    ((l = {
                      element: r,
                      isDehydrated: !1,
                      cache: i.cache,
                      pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                      transitions: i.transitions,
                    }),
                    (t.updateQueue.baseState = l),
                    (t.memoizedState = l),
                    256 & t.flags)
                  ) {
                    t = Di(e, t, r, n, (a = Error(o(423))));
                    break e;
                  }
                  if (r !== a) {
                    t = Di(e, t, r, n, (a = Error(o(424))));
                    break e;
                  }
                  for (
                    Do = sa(t.stateNode.containerInfo.firstChild),
                      jo = t,
                      zo = !0,
                      Ro = null,
                      n = Ko(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((Uo(), r === a)) {
                    t = Hi(e, t, n);
                    break e;
                  }
                  ki(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                nl(t),
                null === e && Io(t),
                (r = t.type),
                (a = t.pendingProps),
                (l = null !== e ? e.memoizedProps : null),
                (i = a.children),
                na(r, a)
                  ? (i = null)
                  : null !== l && na(r, l) && (t.flags |= 32),
                _i(e, t),
                ki(e, t, i, n),
                t.child
              );
            case 6:
              return null === e && Io(t), null;
            case 13:
              return Mi(e, t, n);
            case 4:
              return (
                el(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Go(t, null, r, n)) : ki(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Si(e, t, r, (a = t.elementType === r ? a : Ha(r, a)), n)
              );
            case 7:
              return ki(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ki(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (l = t.memoizedProps),
                  (i = a.value),
                  Ea(Wa, r._currentValue),
                  (r._currentValue = i),
                  null !== l)
                )
                  if (ir(l.value, i)) {
                    if (l.children === a.children && !Oa.current) {
                      t = Hi(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var u = l.dependencies;
                      if (null !== u) {
                        i = l.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === l.tag) {
                              (s = ao(-1, n & -n)).tag = 2;
                              var c = l.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (l.lanes |= n),
                              null !== (s = l.alternate) && (s.lanes |= n),
                              Za(l.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === l.tag)
                        i = l.type === t.type ? null : l.child;
                      else if (18 === l.tag) {
                        if (null === (i = l.return)) throw Error(o(341));
                        (i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Za(i, n, t),
                          (i = l.sibling);
                      } else i = l.child;
                      if (null !== i) i.return = l;
                      else
                        for (i = l; null !== i; ) {
                          if (i === t) {
                            i = null;
                            break;
                          }
                          if (null !== (l = i.sibling)) {
                            (l.return = i.return), (i = l);
                            break;
                          }
                          i = i.return;
                        }
                      l = i;
                    }
                ki(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                $a(t, n),
                (r = r((a = Ja(a)))),
                (t.flags |= 1),
                ki(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = Ha((r = t.type), t.pendingProps)),
                xi(e, t, r, (a = Ha(r.type, a)), n)
              );
            case 15:
              return Ci(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : Ha(r, a)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                Da(r) ? ((e = !0), Ma(t)) : (e = !1),
                $a(t, n),
                mo(t, r, a),
                go(t, r, a, n),
                Ni(null, t, r, !0, e, n)
              );
            case 19:
              return Vi(e, t, n);
            case 22:
              return Ei(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Gs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ks(e) {
          this._internalRoot = e;
        }
        function qs(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function $s() {}
        function Js(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var l = o;
            if ("function" === typeof a) {
              var i = a;
              a = function () {
                var e = Hs(l);
                i.call(e);
              };
            }
            Vs(t, l, e, a);
          } else
            l = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Hs(l);
                    o.call(e);
                  };
                }
                var l = Qs(t, r, e, 0, null, !1, 0, "", $s);
                return (
                  (e._reactRootContainer = l),
                  (e[ha] = l.current),
                  Qr(8 === e.nodeType ? e.parentNode : e),
                  ss(),
                  l
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var i = r;
                r = function () {
                  var e = Hs(u);
                  i.call(e);
                };
              }
              var u = Ls(e, 0, !1, null, 0, !1, 0, "", $s);
              return (
                (e._reactRootContainer = u),
                (e[ha] = u.current),
                Qr(8 === e.nodeType ? e.parentNode : e),
                ss(function () {
                  Vs(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Hs(l);
        }
        (qs.prototype.render = Ks.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Vs(e, t, null, null);
          }),
          (qs.prototype.unmount = Ks.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                ss(function () {
                  Vs(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (qs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < zt.length && 0 !== t && t < zt[n].priority;
                n++
              );
              zt.splice(n, 0, e), 0 === n && Bt(e);
            }
          }),
          (At = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ns(t, Ze()),
                    0 === (6 & Cu) && ((Lu = Ze() + 500), Qa()));
                }
                break;
              case 13:
                var r = Zu();
                ss(function () {
                  return Ju(e, 1, r);
                }),
                  Ys(e, 1);
            }
          }),
          (kt = function (e) {
            13 === e.tag && (Ju(e, 134217728, Zu()), Ys(e, 134217728));
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = Zu(),
                n = $u(e);
              Ju(e, n, t), Ys(e, n);
            }
          }),
          (xt = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if (($(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = Aa(r);
                      if (!a) throw Error(o(90));
                      G(r), $(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Pe = us),
          (Oe = ss);
        var ec = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, Aa, Ee, _e, us],
          },
          tc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.1.0",
            rendererPackageName: "react-dom",
          },
          nc = {
            bundleType: tc.bundleType,
            version: tc.version,
            rendererPackageName: tc.rendererPackageName,
            rendererConfig: tc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!rc.isDisabled && rc.supportsFiber)
            try {
              (at = rc.inject(nc)), (ot = rc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Xs(t)) throw Error(o(200));
            return Fs(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Xs(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Gs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Ls(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Qr(8 === e.nodeType ? e.parentNode : e),
              new Ks(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return ss(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(o(200));
            return Js(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Xs(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              l = "",
              i = Gs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (l = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (i = n.onRecoverableError)),
              (t = Qs(t, null, e, 1, null != n ? n : null, a, 0, l, i)),
              (e[ha] = t.current),
              Qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new qs(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(o(200));
            return Js(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (ss(function () {
                Js(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = us),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Js(e, t, n, !1, r);
          }),
          (t.version = "18.1.0-next-22edb9f77-20220426");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          l = Object.prototype.hasOwnProperty,
          i =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            l.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: i.current,
          };
        }
        (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          l = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), m(w, g.prototype), (w.isPureReactComponent = !0);
        var A = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          x = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            l = null,
            i = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (l = "" + t.key),
            t))
              k.call(t, a) && !x.hasOwnProperty(a) && (o[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) o.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: l,
            ref: i,
            props: o,
            _owner: S.current,
          };
        }
        function E(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var _ = /\/+/g;
        function P(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function O(e, t, a, o, l) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (l = l((u = e))),
              (e = "" === o ? "." + P(u, 0) : o),
              A(l)
                ? ((a = ""),
                  null != e && (a = e.replace(_, "$&/") + "/"),
                  O(l, t, a, "", function (e) {
                    return e;
                  }))
                : null != l &&
                  (E(l) &&
                    (l = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      l,
                      a +
                        (!l.key || (u && u.key === l.key)
                          ? ""
                          : ("" + l.key).replace(_, "$&/") + "/") +
                        e
                    )),
                  t.push(l)),
              1
            );
          if (((u = 0), (o = "" === o ? "." : o + ":"), A(e)))
            for (var s = 0; s < e.length; s++) {
              var c = o + P((i = e[s]), s);
              u += O(i, t, a, c, l);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(i = e.next()).done; )
              u += O((i = i.value), t, a, (c = o + P(i, s++)), l);
          else if ("object" === i)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            O(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function j(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var D = { current: null },
          z = { transition: null },
          R = {
            ReactCurrentDispatcher: D,
            ReactCurrentBatchConfig: z,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = l),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              l = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (i = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !x.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: l,
              props: a,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = z.transition;
            z.transition = {};
            try {
              e();
            } finally {
              z.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return D.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return D.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return D.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return D.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return D.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return D.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return D.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return D.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return D.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return D.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return D.current.useRef(e);
          }),
          (t.useState = function (e) {
            return D.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return D.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return D.current.useTransition();
          }),
          (t.version = "18.1.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, l = a >>> 1; r < l; ) {
              var i = 2 * (r + 1) - 1,
                u = e[i],
                s = i + 1,
                c = e[s];
              if (0 > o(u, n))
                s < a && 0 > o(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[i] = n), (r = i));
              else {
                if (!(s < a && 0 > o(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var l = performance;
          t.unstable_now = function () {
            return l.now();
          };
        } else {
          var i = Date,
            u = i.now();
          t.unstable_now = function () {
            return i.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function A(e) {
          if (((v = !1), w(e), !m))
            if (null !== r(s)) (m = !0), z(k);
            else {
              var t = r(c);
              null !== t && R(A, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), v && ((v = !1), y(E), (E = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !O()));

            ) {
              var l = d.callback;
              if ("function" === typeof l) {
                (d.callback = null), (p = d.priorityLevel);
                var i = l(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof i
                    ? (d.callback = i)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && R(A, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          x = !1,
          C = null,
          E = -1,
          _ = 5,
          P = -1;
        function O() {
          return !(t.unstable_now() - P < _);
        }
        function N() {
          if (null !== C) {
            var e = t.unstable_now();
            P = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((x = !1), (C = null));
            }
          } else x = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var j = new MessageChannel(),
            D = j.port2;
          (j.port1.onmessage = N),
            (S = function () {
              D.postMessage(null);
            });
        } else
          S = function () {
            g(N, 0);
          };
        function z(e) {
          (C = e), x || ((x = !0), S());
        }
        function R(e, n) {
          E = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), z(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (_ = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var l = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? l + o : l)
                : (o = l),
              e)
            ) {
              case 1:
                var i = -1;
                break;
              case 2:
                i = 250;
                break;
              case 5:
                i = 1073741823;
                break;
              case 4:
                i = 1e4;
                break;
              default:
                i = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (i = o + i),
                sortIndex: -1,
              }),
              o > l
                ? ((e.sortIndex = o),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (v ? (y(E), (E = -1)) : (v = !0), R(A, o - l)))
                : ((e.sortIndex = i), n(s, e), m || h || ((m = !0), z(k))),
              e
            );
          }),
          (t.unstable_shouldYield = O),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.g = (function () {
    if ("object" === typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" === typeof window) return window;
    }
  })()),
    (n.p = "/"),
    (function () {
      var e = n(791),
        t = n(250);
      function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                o = [],
                l = !0,
                i = !1;
              try {
                for (
                  n = n.call(e);
                  !(l = (r = n.next()).done) &&
                  (o.push(r.value), !t || o.length !== t);
                  l = !0
                );
              } catch (u) {
                (i = !0), (a = u);
              } finally {
                try {
                  l || null == n.return || n.return();
                } finally {
                  if (i) throw a;
                }
              }
              return o;
            }
          })(e, t) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return r(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var o = n(184);
      function l(e) {
        var t = e.countryName,
          n = e.number,
          r = e.checkAnswer,
          a = e.rightId,
          l = e.wrongId,
          i = "answer__list-item ";
        return (
          (a || l) && (i += " disabled "),
          a === n && (i += "right"),
          l === n && (i += "wrong"),
          (0, o.jsxs)("div", {
            onClick: function () {
              return r(t, n);
            },
            className: i,
            children: [
              (0, o.jsx)("span", {
                className: "answer__item-number",
                children: ["A", "B", "C", "D"][n],
              }),
              t.includes("http")
                ? (0, o.jsx)("span", {
                    className: "answer__item-text",
                    children: (0, o.jsx)("img", {
                      src: t,
                      className: "answer__flag",
                    }),
                  })
                : (0, o.jsx)("span", {
                    className: "answer__item-text",
                    children: t,
                  }),
            ],
          })
        );
      }
      function i(e) {
        var t = e.countryList,
          n = e.checkAnswer,
          r = e.rightId,
          a = e.wrongId,
          i = e.number,
          u = e.flag,
          s = e.country,
          c = e.capital,
          f = t.map(function (e, t) {
            return (0,
            o.jsx)("li", { children: (0, o.jsx)(l, { rightId: r, wrongId: a, countryName: e, number: t, checkAnswer: n }) }, t);
          }),
          d = [
            null,
            "".concat(s, " flag is"),
            " is the flag of",
            "".concat(s, " capital is"),
            "".concat(c, " is capital of "),
          ];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            2 == i
              ? (0, o.jsxs)("span", {
                  className: "playground__question",
                  children: [
                    (0, o.jsx)("img", {
                      className: "playground__flag",
                      src: u,
                    }),
                    d[i],
                  ],
                })
              : (0, o.jsx)("span", {
                  className: "playground__question",
                  children: d[i],
                }),
            (0, o.jsx)("ul", { className: "answer__list", children: f }),
            ,
          ],
        });
      }
      var u =
        n.p +
        "./quizi.github.io/static/media/adventure-man.b06619f08a2aba6240c49186e3aa9dc0.svg";
      var s =
        n.p +
        "./quizi.github.io/static/media/finalImage.3cc505dc5f9d425bb9278584620c594e.svg";
      function c(e) {
        var t = e.startNewGame,
          n = e.finalScore,
          r = e.backToMenu;
        return (0, o.jsxs)("div", {
          className: "result",
          children: [
            (0, o.jsx)("img", { className: "result__message-img", src: s }),
            (0, o.jsx)("span", {
              className: "result__message-title",
              children: "Results",
            }),
            (0, o.jsxs)("span", {
              className: "result__message-text",
              children: [
                "You got ",
                (0, o.jsx)("span", {
                  className: "result__message-score",
                  children: n,
                }),
                " ",
                "correct answers",
              ],
            }),
            (0, o.jsxs)("div", {
              className: "result__btn-container",
              children: [
                (0, o.jsx)("button", {
                  onClick: function () {
                    t();
                  },
                  className: "result__btn",
                  children: "Try Again",
                }),
                (0, o.jsx)("button", {
                  onClick: function () {
                    r();
                  },
                  className: "result__btn",
                  children: "Back To Menu",
                }),
              ],
            }),
          ],
        });
      }
      var f = n(653),
        d =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : {};
      function p(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function h(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var m = "function" == typeof Symbol && Symbol.for,
        v = m ? Symbol.for("react.element") : 60103,
        g = m ? Symbol.for("react.portal") : 60106,
        y = m ? Symbol.for("react.fragment") : 60107,
        b = m ? Symbol.for("react.strict_mode") : 60108,
        w = m ? Symbol.for("react.profiler") : 60114,
        A = m ? Symbol.for("react.provider") : 60109,
        k = m ? Symbol.for("react.context") : 60110,
        S = m ? Symbol.for("react.async_mode") : 60111,
        x = m ? Symbol.for("react.concurrent_mode") : 60111,
        C = m ? Symbol.for("react.forward_ref") : 60112,
        E = m ? Symbol.for("react.suspense") : 60113,
        _ = m ? Symbol.for("react.suspense_list") : 60120,
        P = m ? Symbol.for("react.memo") : 60115,
        O = m ? Symbol.for("react.lazy") : 60116,
        N = m ? Symbol.for("react.block") : 60121,
        j = m ? Symbol.for("react.fundamental") : 60117,
        D = m ? Symbol.for("react.responder") : 60118,
        z = m ? Symbol.for("react.scope") : 60119;
      function R(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case v:
              switch ((e = e.type)) {
                case S:
                case x:
                case y:
                case w:
                case b:
                case E:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case k:
                    case C:
                    case O:
                    case P:
                    case A:
                      return e;
                    default:
                      return t;
                  }
              }
            case g:
              return t;
          }
        }
      }
      function T(e) {
        return R(e) === x;
      }
      var M = {
        AsyncMode: S,
        ConcurrentMode: x,
        ContextConsumer: k,
        ContextProvider: A,
        Element: v,
        ForwardRef: C,
        Fragment: y,
        Lazy: O,
        Memo: P,
        Portal: g,
        Profiler: w,
        StrictMode: b,
        Suspense: E,
        isAsyncMode: function (e) {
          return T(e) || R(e) === S;
        },
        isConcurrentMode: T,
        isContextConsumer: function (e) {
          return R(e) === k;
        },
        isContextProvider: function (e) {
          return R(e) === A;
        },
        isElement: function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === v;
        },
        isForwardRef: function (e) {
          return R(e) === C;
        },
        isFragment: function (e) {
          return R(e) === y;
        },
        isLazy: function (e) {
          return R(e) === O;
        },
        isMemo: function (e) {
          return R(e) === P;
        },
        isPortal: function (e) {
          return R(e) === g;
        },
        isProfiler: function (e) {
          return R(e) === w;
        },
        isStrictMode: function (e) {
          return R(e) === b;
        },
        isSuspense: function (e) {
          return R(e) === E;
        },
        isValidElementType: function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === y ||
            e === x ||
            e === w ||
            e === b ||
            e === E ||
            e === _ ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === O ||
                e.$$typeof === P ||
                e.$$typeof === A ||
                e.$$typeof === k ||
                e.$$typeof === C ||
                e.$$typeof === j ||
                e.$$typeof === D ||
                e.$$typeof === z ||
                e.$$typeof === N))
          );
        },
        typeOf: R,
      };
      h(function (e, t) {}),
        h(function (e) {
          e.exports = M;
        }),
        (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
              Object.keys(Object.assign({}, r)).join("");
          } catch (e) {
            return !1;
          }
        })();
      function B() {}
      function I() {}
      Function.call.bind(Object.prototype.hasOwnProperty),
        (I.resetWarningCache = B);
      var L = h(function (e) {
          e.exports = (function () {
            function e(e, t, n, r, a, o) {
              if ("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED" !== o) {
                var l = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((l.name = "Invariant Violation"), l);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: I,
              resetWarningCache: B,
            };
            return (n.PropTypes = n), n;
          })();
        }),
        F = p(
          h(function (e, t) {
            Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = function (e) {
                return (
                  e.displayName ||
                  e.name ||
                  ("string" == typeof e && e.length > 0 ? e : "Unknown")
                );
              });
          })
        ),
        U = function (e, t) {
          var n = {};
          for (var r in e) -1 === t.indexOf(r) && (n[r] = e[r]);
          return n;
        },
        Q = "__global_unique_id__",
        V = function () {
          return (d[Q] = (d[Q] || 0) + 1);
        },
        H = function () {},
        W = h(function (e, t) {
          t.__esModule = !0;
          var n = a(L),
            r = a(V);
          function a(e) {
            return e && e.__esModule ? e : { default: e };
          }
          function o(e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          }
          function l(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          }
          function i(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          }
          a(H),
            (t.default = function (e, t) {
              var a,
                u,
                s = "__create-react-context-" + (0, r.default)() + "__",
                c = (function (e) {
                  function n() {
                    var t, r, a, i;
                    o(this, n);
                    for (
                      var u = arguments.length, s = Array(u), c = 0;
                      c < u;
                      c++
                    )
                      s[c] = arguments[c];
                    return (
                      (t = r = l(this, e.call.apply(e, [this].concat(s)))),
                      (r.emitter =
                        ((a = r.props.value),
                        (i = []),
                        {
                          on: function (e) {
                            i.push(e);
                          },
                          off: function (e) {
                            i = i.filter(function (t) {
                              return t !== e;
                            });
                          },
                          get: function () {
                            return a;
                          },
                          set: function (e, t) {
                            (a = e),
                              i.forEach(function (e) {
                                return e(a, t);
                              });
                          },
                        })),
                      l(r, t)
                    );
                  }
                  return (
                    i(n, e),
                    (n.prototype.getChildContext = function () {
                      var e;
                      return ((e = {})[s] = this.emitter), e;
                    }),
                    (n.prototype.componentWillReceiveProps = function (e) {
                      if (this.props.value !== e.value) {
                        var n = this.props.value,
                          r = e.value,
                          a = void 0;
                        (
                          (o = n) === (l = r)
                            ? 0 !== o || 1 / o == 1 / l
                            : o != o && l != l
                        )
                          ? (a = 0)
                          : ((a =
                              "function" == typeof t ? t(n, r) : 1073741823),
                            0 != (a |= 0) && this.emitter.set(e.value, a));
                      }
                      var o, l;
                    }),
                    (n.prototype.render = function () {
                      return this.props.children;
                    }),
                    n
                  );
                })(f.Component);
              c.childContextTypes =
                (((a = {})[s] = n.default.object.isRequired), a);
              var d = (function (t) {
                function n() {
                  var e, r;
                  o(this, n);
                  for (
                    var a = arguments.length, i = Array(a), u = 0;
                    u < a;
                    u++
                  )
                    i[u] = arguments[u];
                  return (
                    (e = r = l(this, t.call.apply(t, [this].concat(i)))),
                    (r.state = { value: r.getValue() }),
                    (r.onUpdate = function (e, t) {
                      0 != ((0 | r.observedBits) & t) &&
                        r.setState({ value: r.getValue() });
                    }),
                    l(r, e)
                  );
                }
                return (
                  i(n, t),
                  (n.prototype.componentWillReceiveProps = function (e) {
                    var t = e.observedBits;
                    this.observedBits = null == t ? 1073741823 : t;
                  }),
                  (n.prototype.componentDidMount = function () {
                    this.context[s] && this.context[s].on(this.onUpdate);
                    var e = this.props.observedBits;
                    this.observedBits = null == e ? 1073741823 : e;
                  }),
                  (n.prototype.componentWillUnmount = function () {
                    this.context[s] && this.context[s].off(this.onUpdate);
                  }),
                  (n.prototype.getValue = function () {
                    return this.context[s] ? this.context[s].get() : e;
                  }),
                  (n.prototype.render = function () {
                    return ((e = this.props.children),
                    Array.isArray(e) ? e[0] : e)(this.state.value);
                    var e;
                  }),
                  n
                );
              })(f.Component);
              return (
                (d.contextTypes = (((u = {})[s] = n.default.object), u)),
                { Provider: c, Consumer: d }
              );
            }),
            (e.exports = t.default);
        });
      p(W);
      var Y = p(
          h(function (e, t) {
            t.__esModule = !0;
            var n = a(f),
              r = a(W);
            function a(e) {
              return e && e.__esModule ? e : { default: e };
            }
            (t.default = n.default.createContext || r.default),
              (e.exports = t.default);
          })
        ),
        G = Y(null),
        K = Y(null),
        q = function (e) {
          return function (t) {
            return f.createElement(K.Consumer, null, function (n) {
              return f.createElement(e, Object.assign({}, { parent: n }, t));
            });
          };
        };
      function X(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = []);
        var r = (function (r) {
          function a() {
            r.call(this),
              (this.state = { loading: !0 }),
              (this._isMounted = !1);
          }
          return (
            r && (a.__proto__ = r),
            ((a.prototype = Object.create(r && r.prototype)).constructor = a),
            (a.prototype.componentDidMount = function () {
              var e = this;
              (this._isMounted = !0),
                this.props.ymaps
                  .load()
                  .then(function (t) {
                    return Promise.all(
                      n.concat(e.props.modules).map(t.loadModule)
                    ).then(function () {
                      !0 === e._isMounted &&
                        e.setState({ loading: !1 }, function () {
                          e.props.onLoad(t);
                        });
                    });
                  })
                  .catch(function (t) {
                    !0 === e._isMounted && e.props.onError(t);
                  });
            }),
            (a.prototype.componentWillUnmount = function () {
              this._isMounted = !1;
            }),
            (a.prototype.render = function () {
              var n = this.props.ymaps,
                r = !1 === t || !1 === this.state.loading,
                a = U(this.props, ["onLoad", "onError", "modules", "ymaps"]);
              return (
                r &&
                f.createElement(e, Object.assign({}, { ymaps: n.getApi() }, a))
              );
            }),
            a
          );
        })(f.Component);
        return (
          (r.defaultProps = {
            onLoad: Function.prototype,
            onError: Function.prototype,
            modules: [],
          }),
          (function (e) {
            var t = F(e);
            return function (n) {
              return f.createElement(G.Consumer, null, function (r) {
                if (null === r)
                  throw new Error(
                    "Couldn't find Yandex.Maps API in the context. Make sure that <" +
                      t +
                      " /> is inside <YMaps /> provider"
                  );
                return f.createElement(e, Object.assign({}, { ymaps: r }, n));
              });
            };
          })(r)
        );
      }
      var Z = { lang: "ru_RU", load: "", ns: "", mode: "release" },
        $ = {},
        J = function (e) {
          var t = Date.now().toString(32);
          (this.options = e),
            (this.namespace = e.query.ns || Z.ns),
            (this.onload = "__yandex-maps-api-onload__$$" + t),
            (this.onerror = "__yandex-maps-api-onerror__$$" + t);
        };
      (J.prototype.getApi = function () {
        return "undefined" != typeof window && this.namespace
          ? window[this.namespace]
          : this.api;
      }),
        (J.prototype.setApi = function (e) {
          return (this.api = e);
        }),
        (J.prototype.getPromise = function () {
          return this.namespace ? $[this.namespace] : this.promise;
        }),
        (J.prototype.setPromise = function (e) {
          return this.namespace
            ? ($[this.namespace] = this.promise = e)
            : (this.promise = e);
        }),
        (J.prototype.load = function () {
          var e = this;
          if (this.getApi()) return Promise.resolve(this.setApi(this.getApi()));
          if (this.getPromise()) return this.setPromise(this.getPromise());
          var t = Object.assign(
              { onload: this.onload, onerror: this.onerror },
              Z,
              this.options.query
            ),
            n = Object.keys(t)
              .map(function (e) {
                return e + "=" + t[e];
              })
              .join("&"),
            r = [
              "https://" +
                (this.options.enterprise ? "enterprise." : "") +
                "api-maps.yandex.ru",
              this.options.version,
              "?" + n,
            ].join("/"),
            a = new Promise(function (t, n) {
              (window[e.onload] = function (n) {
                delete window[e.onload],
                  (n.loadModule = e.loadModule.bind(e)),
                  n.ready(function () {
                    return t(e.setApi(n));
                  });
              }),
                (window[e.onerror] = function (t) {
                  delete window[e.onerror], n(t);
                }),
                e.fetchScript(r).catch(window[e.onerror]);
            });
          return this.setPromise(a);
        }),
        (J.prototype.fetchScript = function (e) {
          var t = this;
          return new Promise(function (n, r) {
            (t.script = document.createElement("script")),
              (t.script.type = "text/javascript"),
              (t.script.onload = n),
              (t.script.onerror = r),
              (t.script.src = e),
              (t.script.async = "async"),
              document.head.appendChild(t.script);
          });
        }),
        (J.prototype.loadModule = function (e) {
          var t = this;
          return new Promise(function (n, r) {
            t.getApi().modules.require(
              e,
              function (r) {
                !(function (e, t, n, r) {
                  void 0 === r && (r = !1),
                    (t = "string" == typeof t ? t.split(".") : t.slice());
                  for (var a, o = e; t.length > 1; )
                    o[(a = t.shift())] || (o[a] = {}), (o = o[a]);
                  o[t[0]] = (!0 === r && o[t[0]]) || n;
                })(t.api, e, r, !0),
                  n(r);
              },
              r,
              t.getApi()
            );
          });
        }),
        (J._name = "__react-yandex-maps__");
      var ee = (function (e) {
        function t(t) {
          e.call(this, t), (this.ymaps = new J(t));
        }
        return (
          e && (t.__proto__ = e),
          ((t.prototype = Object.create(e && e.prototype)).constructor = t),
          (t.prototype.componentDidMount = function () {
            !0 === this.props.preload && this.ymaps.load();
          }),
          (t.prototype.render = function () {
            return f.createElement(
              G.Provider,
              { value: this.ymaps },
              this.props.children
            );
          }),
          t
        );
      })(f.Component);
      ee.defaultProps = {
        version: "2.1",
        enterprise: !1,
        query: { lang: "ru_RU", load: "", ns: "" },
        preload: !1,
      };
      var te = /^on(?=[A-Z])/;
      function ne(e) {
        return Object.keys(e).reduce(
          function (t, n) {
            if (te.test(n)) {
              var r = n.replace(te, "").toLowerCase();
              t._events[r] = e[n];
            } else t[n] = e[n];
            return t;
          },
          { _events: {} }
        );
      }
      function re(e, t, n) {
        "function" == typeof n && e.events.add(t, n);
      }
      function ae(e, t, n) {
        "function" == typeof n && e.events.remove(t, n);
      }
      function oe(e, t, n) {
        Object.keys(Object.assign({}, t, n)).forEach(function (r) {
          t[r] !== n[r] && (ae(e, r, t[r]), re(e, r, n[r]));
        });
      }
      var le = function (e) {
        return "default" + e.charAt(0).toUpperCase() + e.slice(1);
      };
      function ie(e, t) {
        return void 0 !== e[t] || void 0 === e[le(t)];
      }
      function ue(e, t, n) {
        return (ie(e, t) ? e[t] : e[le(t)]) || n;
      }
      function se(e, t, n) {
        if ((void 0 === n && (n = null), e !== t)) {
          if (
            (e &&
              (e.hasOwnProperty("current")
                ? (e.current = null)
                : "function" == typeof e && e(null)),
            !t)
          )
            return;
          t.hasOwnProperty("current")
            ? (t.current = n)
            : "function" == typeof t && t(n);
        }
      }
      function ce(e) {
        var t = e.width,
          n = e.height,
          r = e.style,
          a = e.className;
        return void 0 !== r || void 0 !== a
          ? Object.assign({}, r && { style: r }, a && { className: a })
          : { style: { width: t, height: n } };
      }
      var fe = (function (e) {
        function t() {
          var t = this;
          e.call(this),
            (this.state = { instance: null }),
            (this._parentElement = null),
            (this._getRef = function (e) {
              t._parentElement = e;
            });
        }
        return (
          e && (t.__proto__ = e),
          ((t.prototype = Object.create(e && e.prototype)).constructor = t),
          (t.prototype.componentDidMount = function () {
            var e = t.mountObject(
              this._parentElement,
              this.props.ymaps.Map,
              this.props
            );
            this.setState({ instance: e });
          }),
          (t.prototype.componentDidUpdate = function (e) {
            null !== this.state.instance &&
              t.updateObject(this.state.instance, e, this.props);
          }),
          (t.prototype.componentWillUnmount = function () {
            t.unmountObject(this.state.instance, this.props);
          }),
          (t.prototype.render = function () {
            var e = ce(this.props),
              t = ne(this.props),
              n = U(t, [
                "_events",
                "state",
                "defaultState",
                "options",
                "defaultOptions",
                "instanceRef",
                "ymaps",
                "children",
                "width",
                "height",
                "style",
                "className",
              ]);
            return f.createElement(
              K.Provider,
              { value: this.state.instance },
              f.createElement(
                "div",
                Object.assign({}, { ref: this._getRef }, e, n),
                this.props.children
              )
            );
          }),
          (t.mountObject = function (e, t, n) {
            var r = ne(n),
              a = r.instanceRef,
              o = r._events,
              l = new t(e, ue(n, "state"), ue(n, "options"));
            return (
              Object.keys(o).forEach(function (e) {
                return re(l, e, o[e]);
              }),
              se(null, a, l),
              l
            );
          }),
          (t.updateObject = function (e, t, n) {
            var r = ne(n),
              a = r._events,
              o = r.instanceRef,
              l = ne(t),
              i = l._events,
              u = l.instanceRef;
            if (ie(n, "state")) {
              var s = ue(t, "state", {}),
                c = ue(n, "state", {});
              s.type !== c.type && e.setType(c.type),
                s.behaviors !== c.behaviors &&
                  (s.behaviors && e.behaviors.disable(s.behaviors),
                  c.behaviors && e.behaviors.enable(c.behaviors)),
                c.zoom && s.zoom !== c.zoom && e.setZoom(c.zoom),
                c.center && s.center !== c.center && e.setCenter(c.center),
                c.bounds && s.bounds !== c.bounds && e.setBounds(c.bounds);
            }
            if (ie(n, "options")) {
              var f = ue(t, "options"),
                d = ue(n, "options", {});
              f !== d && e.options.set(d);
            }
            (ue(t, "width") === ue(n, "width") &&
              ue(t, "height") === ue(n, "height")) ||
              e.container.fitToViewport(),
              oe(e, i, a),
              se(u, o, e);
          }),
          (t.unmountObject = function (e, t) {
            var n = ne(t),
              r = n.instanceRef,
              a = n._events;
            null !== e &&
              (Object.keys(a).forEach(function (t) {
                return ae(e, t, a[t]);
              }),
              e.destroy(),
              se(r));
          }),
          t
        );
      })(f.Component);
      fe.defaultProps = { width: 320, height: 240 };
      var de = X(fe, !0, ["Map"]),
        pe = (function (e) {
          function t() {
            var t = this;
            e.call(this),
              (this.state = { instance: null }),
              (this._parentElement = null),
              (this._getRef = function (e) {
                t._parentElement = e;
              });
          }
          return (
            e && (t.__proto__ = e),
            ((t.prototype = Object.create(e && e.prototype)).constructor = t),
            (t.prototype.componentDidMount = function () {
              var e = this;
              (this._mounted = !0),
                this.props.ymaps.panorama.isSupported() &&
                  t
                    .mountObject(
                      this._parentElement,
                      this.props.ymaps.panorama,
                      this.props
                    )
                    .then(function (t) {
                      return e._mounted && e.setState({ instance: t });
                    });
            }),
            (t.prototype.componentDidUpdate = function (e) {
              null !== this.state.instance &&
                t.updateObject(this.state.instance, e, this.props);
            }),
            (t.prototype.componentWillUnmount = function () {
              (this._mounted = !1),
                t.unmountObject(this.state.instance, this.props);
            }),
            (t.prototype.render = function () {
              var e = ce(this.props);
              return f.createElement(
                "div",
                Object.assign({}, { ref: this._getRef }, e)
              );
            }),
            (t.mountObject = function (e, t, n) {
              var r = ne(n),
                a = r.instanceRef,
                o = r._events,
                l = ue(n, "point"),
                i = ue(n, "locateOptions"),
                u = ue(n, "options");
              return new Promise(function (n, r) {
                t.locate(l, i).done(function (r) {
                  if (r.length > 0) {
                    var l = new t.Player(e, r[0], u);
                    se(null, a, l),
                      Object.keys(o).forEach(function (e) {
                        return re(l, e, o[e]);
                      }),
                      n(l);
                  }
                }, r);
              });
            }),
            (t.updateObject = function (e, t, n) {
              var r = ne(n),
                a = r._events,
                o = r.instanceRef,
                l = ne(t),
                i = l._events,
                u = l.instanceRef;
              if (ie(n, "options")) {
                var s = ue(t, "options"),
                  c = ue(n, "options");
                s !== c && e.options.set(c);
              }
              if (ie(n, "point")) {
                var f = ue(n, "point"),
                  d = ue(t, "point"),
                  p = ue(n, "locateOptions");
                f !== d && e.moveTo(f, p);
              }
              oe(e, i, a), se(u, o, e);
            }),
            (t.unmountObject = function (e, t) {
              var n = ne(t),
                r = n.instanceRef,
                a = n._events;
              null !== e &&
                (Object.keys(a).forEach(function (t) {
                  return ae(e, t, a[t]);
                }),
                se(r));
            }),
            t
          );
        })(f.Component);
      pe.defaultProps = { width: 320, height: 240 };
      X(pe, !0, [
        "panorama.isSupported",
        "panorama.locate",
        "panorama.createPlayer",
        "panorama.Player",
      ]);
      var he = (function (e) {
          function t() {
            e.call(this), (this.state = { instance: null });
          }
          return (
            e && (t.__proto__ = e),
            ((t.prototype = Object.create(e && e.prototype)).constructor = t),
            (t.prototype.componentDidMount = function () {
              var e = t.mountControl(
                this.props.ymaps.control[this.props.name],
                this.props
              );
              this.setState({ instance: e });
            }),
            (t.prototype.componentDidUpdate = function (e) {
              null !== this.state.instance &&
                t.updateControl(this.state.instance, e, this.props);
            }),
            (t.prototype.componentWillUnmount = function () {
              t.unmountControl(this.state.instance, this.props);
            }),
            (t.prototype.render = function () {
              return f.createElement(
                K.Provider,
                { value: this.state.instance },
                this.props.children
              );
            }),
            (t.mountControl = function (e, t) {
              var n = ne(t),
                r = n.instanceRef,
                a = n.parent,
                o = n.lazy,
                l = n._events,
                i = new e({
                  data: ue(t, "data"),
                  options: ue(t, "options"),
                  state: ue(t, "state"),
                  mapTypes: ue(t, "mapTypes"),
                  lazy: o,
                });
              if (
                (Object.keys(l).forEach(function (e) {
                  return re(i, e, l[e]);
                }),
                a && a.controls && "function" == typeof a.controls.add)
              )
                a.controls.add(i);
              else {
                if (!a || !a.add || "function" != typeof a.add)
                  throw new Error("No parent found to mount " + t.name);
                a.add(i);
              }
              return se(null, r, i), i;
            }),
            (t.updateControl = function (e, t, n) {
              var r = ne(n),
                a = r._events,
                o = r.instanceRef,
                l = ne(t),
                i = l._events,
                u = l.instanceRef;
              if (ie(n, "options")) {
                var s = ue(t, "options"),
                  c = ue(n, "options");
                s !== c && e.options.set(c);
              }
              if (ie(n, "data")) {
                var f = ue(t, "data"),
                  d = ue(n, "data");
                f !== d && e.data.set(d);
              }
              if (ie(n, "state")) {
                var p = ue(t, "state"),
                  h = ue(n, "state");
                p !== h && e.state.set(h);
              }
              if (ie(n, "mapTypes")) {
                var m = ue(t, "mapTypes"),
                  v = ue(n, "mapTypes");
                m !== v &&
                  (e.removeAllMapTypes(),
                  v.forEach(function (t) {
                    return e.addMapType(t);
                  }));
              }
              oe(e, i, a), se(u, o, e);
            }),
            (t.unmountControl = function (e, t) {
              var n = ne(t),
                r = n.instanceRef,
                a = n.parent,
                o = n._events;
              null !== e &&
                (Object.keys(o).forEach(function (t) {
                  return ae(e, t, o[t]);
                }),
                a.controls && "function" == typeof a.controls.remove
                  ? a.controls.remove(e)
                  : a.remove && "function" == typeof a.remove && a.remove(e),
                se(r));
            }),
            t
          );
        })(f.Component),
        me =
          (q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "Button" })
                );
              },
              !0,
              ["control.Button"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "FullscreenControl" })
                );
              },
              !0,
              ["control.FullscreenControl"]
            )
          )),
        ve =
          (q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "GeolocationControl" })
                );
              },
              !0,
              ["control.GeolocationControl"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "ListBox" })
                );
              },
              !0,
              ["control.ListBox"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "ListBoxItem" })
                );
              },
              !0,
              ["control.ListBoxItem"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "RouteButton" })
                );
              },
              !0,
              ["control.RouteButton"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "RouteEditor" })
                );
              },
              !0,
              ["control.RouteEditor"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "RoutePanel" })
                );
              },
              !0,
              ["control.RoutePanel"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "RulerControl" })
                );
              },
              !0,
              ["control.RulerControl"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "SearchControl" })
                );
              },
              !0,
              ["control.SearchControl"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "TrafficControl" })
                );
              },
              !0,
              ["control.TrafficControl"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "TypeSelector" })
                );
              },
              !0,
              ["control.TypeSelector"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  he,
                  Object.assign({}, e, { name: "ZoomControl" })
                );
              },
              !0,
              ["control.ZoomControl"]
            )
          ),
          q(
            X(
              (function (e) {
                function t() {
                  e.call(this), (this.state = { instance: null });
                }
                return (
                  e && (t.__proto__ = e),
                  ((t.prototype = Object.create(e && e.prototype)).constructor =
                    t),
                  (t.prototype.componentDidMount = function () {
                    var e = t.mountObject(
                      this.props.ymaps.Clusterer,
                      this.props
                    );
                    this.setState({ instance: e });
                  }),
                  (t.prototype.componentDidUpdate = function (e) {
                    null !== this.state.instance &&
                      t.updateObject(this.state.instance, e, this.props);
                  }),
                  (t.prototype.componentWillUnmount = function () {
                    t.unmountObject(this.state.instance, this.props);
                  }),
                  (t.prototype.render = function () {
                    return f.createElement(
                      K.Provider,
                      { value: this.state.instance },
                      this.props.children
                    );
                  }),
                  (t.mountObject = function (e, t) {
                    var n = ne(t),
                      r = n.instanceRef,
                      a = n.parent,
                      o = n._events,
                      l = new e(ue(t, "options"));
                    if (
                      (Object.keys(o).forEach(function (e) {
                        return re(l, e, o[e]);
                      }),
                      a.geoObjects && "function" == typeof a.geoObjects.add)
                    )
                      a.geoObjects.add(l);
                    else {
                      if (!a.add || "function" != typeof a.add)
                        throw new Error("No parent found to mount Clusterer");
                      a.add(l);
                    }
                    return se(null, r, l), l;
                  }),
                  (t.updateObject = function (e, t, n) {
                    var r = ne(n),
                      a = r._events,
                      o = r.instanceRef,
                      l = ne(t),
                      i = l._events,
                      u = l.instanceRef;
                    if (ie(n, "options")) {
                      var s = ue(t, "options"),
                        c = ue(n, "options");
                      s !== c && e.options.set(c);
                    }
                    oe(e, i, a), se(u, o, e);
                  }),
                  (t.unmountObject = function (e, t) {
                    var n = ne(t),
                      r = n.instanceRef,
                      a = n.parent,
                      o = n._events;
                    null !== e &&
                      (Object.keys(o).forEach(function (t) {
                        return ae(e, t, o[t]);
                      }),
                      a.geoObjects && "function" == typeof a.geoObjects.remove
                        ? a.geoObjects.remove(e)
                        : a.remove &&
                          "function" == typeof a.remove &&
                          a.remove(e),
                      se(r));
                  }),
                  t
                );
              })(f.Component),
              !0,
              ["Clusterer"]
            )
          ),
          q(
            X(
              (function (e) {
                function t() {
                  e.call(this), (this.state = { instance: null });
                }
                return (
                  e && (t.__proto__ = e),
                  ((t.prototype = Object.create(e && e.prototype)).constructor =
                    t),
                  (t.prototype.componentDidMount = function () {
                    var e = t.mountObject(
                      this.props.ymaps.ObjectManager,
                      this.props
                    );
                    this.setState({ instance: e });
                  }),
                  (t.prototype.componentDidUpdate = function (e) {
                    null !== this.state.instance &&
                      t.updateObject(this.state.instance, e, this.props);
                  }),
                  (t.prototype.componentWillUnmount = function () {
                    t.unmountObject(this.state.instance, this.props);
                  }),
                  (t.prototype.render = function () {
                    return null;
                  }),
                  (t.mountObject = function (e, t) {
                    var n = ne(t),
                      r = n.instanceRef,
                      a = n.parent,
                      o = n._events,
                      l = ue(t, "options", {}),
                      i = ue(t, "features", {}),
                      u = ue(t, "filter", null),
                      s = ue(t, "objects", {}),
                      c = ue(t, "clusters", {}),
                      f = new e(l);
                    if (
                      (f.add(i || []),
                      f.setFilter(u),
                      f.objects.options.set(s),
                      f.clusters.options.set(c),
                      Object.keys(o).forEach(function (e) {
                        return re(f, e, o[e]);
                      }),
                      a.geoObjects && "function" == typeof a.geoObjects.add)
                    )
                      a.geoObjects.add(f);
                    else {
                      if (!a.add || "function" != typeof a.add)
                        throw new Error(
                          "No parent found to mount ObjectManager"
                        );
                      a.add(f);
                    }
                    return se(null, r, f), f;
                  }),
                  (t.updateObject = function (e, t, n) {
                    var r = ne(n),
                      a = r._events,
                      o = r.instanceRef,
                      l = ne(t),
                      i = l._events,
                      u = l.instanceRef;
                    if (ie(n, "options")) {
                      var s = ue(t, "options"),
                        c = ue(n, "options");
                      s !== c && e.options.set(c);
                    }
                    if (ie(n, "objects")) {
                      var f = ue(t, "objects"),
                        d = ue(n, "objects");
                      f !== d && e.objects.options.set(d);
                    }
                    if (ie(n, "clusters")) {
                      var p = ue(t, "clusters"),
                        h = ue(n, "clusters");
                      p !== h && e.clusters.options.set(h);
                    }
                    if (ie(n, "filter")) {
                      var m = ue(t, "filter"),
                        v = ue(n, "filter");
                      m !== v && e.setFilter(v);
                    }
                    if (ie(n, "features")) {
                      var g = ue(t, "features"),
                        y = ue(n, "features");
                      g !== y && (e.remove(g), e.add(y));
                    }
                    oe(e, i, a), se(u, o, e);
                  }),
                  (t.unmountObject = function (e, t) {
                    var n = ne(t),
                      r = n.instanceRef,
                      a = n.parent,
                      o = n._events;
                    null !== e &&
                      (Object.keys(o).forEach(function (t) {
                        return ae(e, t, o[t]);
                      }),
                      a.geoObjects && "function" == typeof a.geoObjects.remove
                        ? a.geoObjects.remove(e)
                        : a.remove &&
                          "function" == typeof a.remove &&
                          a.remove(e),
                      se(r));
                  }),
                  t
                );
              })(f.Component),
              !0,
              ["ObjectManager"]
            )
          ),
          (function (e) {
            function t() {
              e.call(this), (this.state = { instance: null });
            }
            return (
              e && (t.__proto__ = e),
              ((t.prototype = Object.create(e && e.prototype)).constructor = t),
              (t.prototype.componentDidMount = function () {
                var e = this.props,
                  n = e.name,
                  r = e.ymaps,
                  a = e.dangerZone,
                  o = t.mountObject(
                    a && "function" == typeof a.modifyConstructor
                      ? a.modifyConstructor(r[n])
                      : r[n],
                    this.props
                  );
                this.setState({ instance: o });
              }),
              (t.prototype.componentDidUpdate = function (e) {
                null !== this.state.instance &&
                  t.updateObject(this.state.instance, e, this.props);
              }),
              (t.prototype.componentWillUnmount = function () {
                t.unmountObject(this.state.instance, this.props);
              }),
              (t.prototype.render = function () {
                return null;
              }),
              (t.mountObject = function (e, t) {
                var n = ne(t),
                  r = n.instanceRef,
                  a = n.parent,
                  o = n._events,
                  l = new e(
                    ue(t, "geometry"),
                    ue(t, "properties"),
                    ue(t, "options")
                  );
                if (
                  (Object.keys(o).forEach(function (e) {
                    return re(l, e, o[e]);
                  }),
                  a && a.geoObjects && "function" == typeof a.geoObjects.add)
                )
                  a.geoObjects.add(l);
                else {
                  if (!a || !a.add || "function" != typeof a.add)
                    throw new Error("No parent found to mount " + t.name);
                  a.add(l);
                }
                return se(null, r, l), l;
              }),
              (t.updateObject = function (e, t, n) {
                var r = ne(n),
                  a = r._events,
                  o = r.instanceRef,
                  l = ne(t),
                  i = l._events,
                  u = l.instanceRef;
                if (ie(n, "geometry")) {
                  var s = ue(t, "geometry", {}),
                    c = ue(n, "geometry", {});
                  Array.isArray(c) && c !== s
                    ? Array.isArray(c[0]) && "number" == typeof c[1]
                      ? (e.geometry.setCoordinates(c[0]),
                        e.geometry.setRadius(c[1]))
                      : e.geometry.setCoordinates(c)
                    : "object" == typeof c &&
                      (c.coordinates !== s.coordinates &&
                        e.geometry.setCoordinates(c.coordinates),
                      c.radius !== s.radius && e.geometry.setRadius(c.radius));
                }
                if (ie(n, "properties")) {
                  var f = ue(t, "properties"),
                    d = ue(n, "properties");
                  f !== d && e.properties.set(d);
                }
                if (ie(n, "options")) {
                  var p = ue(t, "options"),
                    h = ue(n, "options");
                  p !== h && e.options.set(h);
                }
                oe(e, i, a), se(u, o, e);
              }),
              (t.unmountObject = function (e, t) {
                var n = ne(t),
                  r = n.instanceRef,
                  a = n.parent,
                  o = n._events;
                null !== e &&
                  (Object.keys(o).forEach(function (t) {
                    return ae(e, t, o[t]);
                  }),
                  a.geoObjects && "function" == typeof a.geoObjects.remove
                    ? a.geoObjects.remove(e)
                    : a.remove && "function" == typeof a.remove && a.remove(e),
                  se(r));
              }),
              t
            );
          })(f.Component)),
        ge = {
          modifyConstructor: function (e) {
            function t(t, n, r) {
              e.call(this, { geometry: t, properties: n }, r);
            }
            return (t.prototype = e.prototype), t;
          },
        },
        ye =
          (q(
            X(
              function (e) {
                return f.createElement(
                  ve,
                  Object.assign({}, e, { name: "GeoObject", dangerZone: ge })
                );
              },
              !0,
              ["GeoObject"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  ve,
                  Object.assign({}, e, { name: "Circle" })
                );
              },
              !0,
              ["Circle"]
            )
          ),
          q(
            X(
              function (e) {
                return f.createElement(
                  ve,
                  Object.assign({}, e, { name: "Placemark" })
                );
              },
              !0,
              ["Placemark"]
            )
          ));
      q(
        X(
          function (e) {
            return f.createElement(
              ve,
              Object.assign({}, e, { name: "Polygon" })
            );
          },
          !0,
          ["Polygon"]
        )
      ),
        q(
          X(
            function (e) {
              return f.createElement(
                ve,
                Object.assign({}, e, { name: "Polyline" })
              );
            },
            !0,
            ["Polyline"]
          )
        ),
        q(
          X(
            function (e) {
              return f.createElement(
                ve,
                Object.assign({}, e, { name: "Rectangle" })
              );
            },
            !0,
            ["Rectangle"]
          )
        );
      var be = function (e) {
        var t = e.lat,
          n = e.lng,
          r = { center: [t, n], zoom: 1 };
        return (0, o.jsx)(ee, {
          query: {
            ns: "use-load-option",
            load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
          },
          children: (0, o.jsx)("div", {
            className: "mapik",
            children: (0, o.jsxs)(de, {
              className: "mappp",
              defaultState: r,
              children: [
                (0, o.jsx)(me, { options: { float: "left" } }),
                (0, o.jsx)(ye, { defaultGeometry: [t, n] }),
              ],
            }),
          }),
        });
      };
      function we(e) {
        var t = e.mainCountry,
          n = e.changeInfoWindow;
        return (
          console.log(t),
          (0, o.jsxs)("div", {
            className: "info",
            children: [
              (0, o.jsx)("button", {
                onClick: function () {
                  n();
                },
                className: "info__close-btn",
              }),
              (0, o.jsxs)("div", {
                className: "info__visual",
                children: [
                  (0, o.jsxs)("div", {
                    className: "info__country",
                    children: [
                      (0, o.jsx)("h3", {
                        className: "info__title",
                        children: t.name.common,
                      }),
                      (0, o.jsx)("img", {
                        className: "info__flag-img",
                        src: t.flags.svg,
                      }),
                      (0, o.jsxs)("ul", {
                        className: "info__list",
                        children: [
                          (0, o.jsxs)("li", {
                            className: "info__list-item",
                            children: [
                              "\u0421\u0442\u043e\u043b\u0438\u0446\u0430: ",
                              t.capital,
                            ],
                          }),
                          (0, o.jsxs)("li", {
                            className: "info__list-item",
                            children: [
                              "\u0420\u0435\u0433\u0438\u043e\u043d: ",
                              t.region,
                            ],
                          }),
                          (0, o.jsxs)("li", {
                            className: "info__list-item",
                            children: [
                              "\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435: ",
                              t.population,
                            ],
                          }),
                          (0, o.jsxs)("li", {
                            className: "info__list-item",
                            children: [
                              "\u042f\u0437\u044b\u043a: ",
                              (function (e) {
                                for (var t in e) return "".concat(t, "  ");
                              })(t.languages),
                            ],
                          }),
                          (0, o.jsxs)("li", {
                            className: "info__list-item",
                            children: [
                              "\u0412\u0430\u043b\u044e\u0442\u0430: ",
                              (function (e) {
                                for (var t in e)
                                  return ""
                                    .concat(e[t].name, " , ")
                                    .concat(e[t].symbol);
                              })(t.currencies),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, o.jsx)(be, { lat: t.latlng[0], lng: t.latlng[1] }),
                ],
              }),
              (0, o.jsx)("div", { className: "info__main" }),
            ],
          })
        );
      }
      function Ae(e) {
        var t = e.text,
          n = e.id,
          r = e.createQuestion;
        return (0, o.jsxs)("div", {
          onClick: function () {
            r(n);
          },
          className: "start__type",
          children: [
            (0, o.jsx)("img", {
              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAAlwSFlzAAAN1wAADdcBQiibeAAAAv1QTFRFR3BMA6pwgtnuUsW5K7mXScS1htrxQ8KvhtrxhtrxC614htrxhdrxVcjAGrOGJreRaM/ThtrxCax1EK99fdfoZc7QhtrxB6x0KbiUfNbnT8a7atDWg9nuRMKwhtrxC613htrxFLB/L7qbMryehtrxCKx0hdrxhtrxJ7eTU8i/T8a7ftfphtrxBqtyUce9hNnvRsOyhtrxhtrxedXkhNnwhtrxDa55WMnDCq12BatxA6pvhtrxhtrxWsrGDK14Q8KvSsS2htrxhtrxILWMG7OHKrmWe9bmf9jqhtrxH7SLetblhtrxhtrxXcvJNLygErB/c9PeA6pvhtrxA6pvA6pvhtrxUMa7VMjAA6pvhtrxhtrxhNnvhtrxedXkhtrxhtrxA6pvhtrxhtrxhtrxcNLchtrxhtrxA6pvhtrxA6pvhtrxA6pvA6pvhtrxhtrxDq57htrxFrGChtrxhtrxA6pvhtrxhtrxhtrxhtrxhtrxcdPdddThgNjrOL6ke9bnA6pvA6pvA6pvhtrxA6pvA6pvA6pvhtrxhtrxhtrxKLiUhtrxdtTiA6pvftfpA6pvhtrxA6pvA6pvA6pvhtrxhtrxhtrxA6pvA6pvhtrxeNXjA6pvhtrxA6pvhtrxhtrxhtrxA6pvA6pvhtrxhtrxA6pvHbSKA6pvdNPfTMW4htrxA6pvhtrxhtrxB6xzhtrxhtrxA6pvhtrxA6pvhtrxhtrxhtrxhtrxA6pvhtrxhtrxA6pvA6pvf9jrhtrxhtrxhtrxA6pvhtrxA6pvhtrxhtrxA6pvhtrxA6pvbdHYA6pvY83PA6pvA6twYc3MA6pvhtrxA6pvJLaRhtrxhtrxhtrxhtrxhtrxA6pvhtrxhtrxA6pvhtrxA6pvA6pvA6pvWsrFhtrxA6pvhtrxhtrxA6pvA6pvA6pvhtrxA6pvA6pvA6pvA6pvA6pvA6pvA6pvA6pvgtntA6pvhtrxA6pvhtrxI7aPA6pvA6pvTsW5Yc3NA6pvVMi/GrOGA6pvhtrxYCCOCAAAAP10Uk5TAP7eAdDC/MT+8vH16cDf1MH99OnRwff30dDBwuDD+/Lz5c3L6/bu9tLAwNPx+cDlwgL4zOcI7sDz/OwE5sDww8HQ1djd0M7UyNnN2yi/yufGBhn9A87AwPpLbOOHywu+Kmc53cSYMKHg8XX2FORz7FjiuUKafJsOlTzFyNfIz9XY0BFx4yYhgV7Stskc0lRiORgwP9g2DUoXyuG73KewZPQ8E6rH22DHwUgRLaw0Hltsj4KFFZ+Kd2/TXa3WojSz5k5kUp4IpCHDkMC0lcB8y4rUYMZFcMRFwSXpkU/Nvr94hSMcQVfFVVoKpre7sU3E3agqZwrWHsHAUL9s0FJ5rdAAAB56SURBVHja7Z13fBZV1sdvNmuKQU0EWfIKMSCCkIgmbowQFkgURMmKJAFCjEBCL6GHAK6AiIC8SJEELDRpSxWRLiAdl0XBAogoLgL2tqvu7ttmPu8zTwKkPGXKnVvOPb9/EZy5v+/zO+fOvXOHEHWUMq3swJy8C9O3j9u2Yl+vjrv6FBUN7NMpY1f6yY5nzvZ6Zcm2zcV5m3qM/zkrhaDAKPRS4YGC4nEbznSK1E0ruXXGqLHFM+ZPS8MBlFcvjp+TvyE9SneiiNYdV2zfeSgzCYdTpqgvmzF9cddEnaKS049e6PFaKI6t6Pq1MG/brjDdJUV+OHbn6BdxlMVUz/E792a45n0lFa3YWYa9gVj6uOBoaYzOUE3PbukxBcddCL32wd4inYciSsfOycS2gKuyRozto3NVrW0jMAn4qOTQuAxdBMV8WFyG00TWP/2CUcm6QGp8dNNWdIWVMi90jNCFU8zJ6W+hN64rtDC/VBdWfbasR4tcVNrafq11wZUxPRONckf9NzfWpVD6hWnoFvWub9guXSKdHHYJPaOnlBEzw3TJFPHKV/i8mI4K+yXqUqpW/kV0z6nm/W8nXV5hDDjUxgG5Ie2idJlVKx87QpvK+eJLzdDIiVIT4ImBQxgD1jX0xFStQiFr5A4BXW99oQQdtaQXxgzRKmlkrOQE6Inbs9BV0497f/wfrZrkDwE9eezHaK0p+2c/rfnQyDqyE6DHbMDVIhOd3yTNt0KaSx8Cut7rFFoc0P43J2v+dePz8hOgd/0qB332Z//qRVpAZXdrKrv/EX9eNWkhWu1LXQ4GsR9ACHjsN+7i+xfQ7hqt35sva2aU3aKuxPY/fKWfGTALLa+iy+c1s3owQXb7DQ15bwG6flW9j2sW1LJZsuz2G2r1ehd0vnzB751czZoefEh6+w0tmo3mE3JkxyDNslrekCy9/YZWvoq931TNllbtkd9+Q7ufVdr/uec1u2rZ9pYOv5fA/icfDnwfue8MVdb+Be9ka87Upt51t3SoJbH9hgadOKKm/1/s1+joPkExMGW/oalvKmj/299pdHVfvXZCYWDafkPfqfZgqMuOIZor8mAQLQIGluw36oBaITB3kuaq7mvfLnpiY572P2D5mn+Yp4z968aEaCzECwM79huPBr9WxP+F+zWWGs4YA5v2ex8KqBAC34zReIgVBg7sN0LgC/jVf5HGUcPrOzG3yXM3BdWNDq9wN+zHQl0+z+bpv9bQ0ckiqSwu8RzkFaLe5zW+auEoAG5jc5HfQg2B0GeGcPZfSxA+ALwh8ClI/2d9xtt+ZxWAVQAYGrAOnv+zB3H331kFSGV5pfuh7RzuckwTQAmSBIChY6BeH5j1pQj+O6oAqayv9ntAveBH50TwX+smUQAYWwahvD0QeiJbCP8dVYBUDte7DMYjgXXfiWG/owrAIQAMfQ6gEdj4siD+O6oAqZyu+bj0r4+8niuK/04qAKcA8Giy3LuGc8YIY7+jCpDK77IH/Shz+f9eHP+dVAB+AeBRyAlpP0vz9mSB/HdSAVL5XvluSRuBV1uJ5H/nCDkDwNCkt2X0/+tckfzXmksbAB61+kg+/9/QxFKCvAHgUfYO2RZ/vhXMfwcVIFWIG/hWqvfHhq4UzH8HFUCEADD0pUSt4NuLRPNfe17yAPDovDS7RHrvF85/+xVAlADw6GlJFog3thLOfwcVIFWgu5gkxYsjrw4Sz3/7FUCgAPBokQQvES8cIqD/9itAqlg3skj4R0Jf5Aro/+/ehREAHk0VfHXwYLZ47j81IV4HEgAe7e8tsv87RBuuu57qG6/rOpgA8OicwFsF3wDlvpABYCwMbET/zbj/aN9Ip+96ixgAHg2ai/nPwH1RA8CjZZdF9P8ZYO4LGwAeDRFwefh1YO4LHAAe5Qq3U/BgCDD3RQ4AgwDBXhp5U4D5fxua7nvUYaT9a7n59vD73L3bm/9bJP9ni/D8J5r6iU8PNRtpy/x3H4rT9bh773GRgTvrxwn0BbpPRXj++0CYG6d+7bHGwP3l5lfINQbu+GuMrkf2F8X/j0TwP8S1TwmZZaCq+W4ycGf5YWe1BPkw/QvLROiKGrh5+l9QBgzz/SVQ3CP3DKf+8/eq01YR/P+XEPt/2rh9CKR/Bm571L/5LjDwXKWzDk/25O//ukki+O9CB+iDge4jbZhfoTA6DFz7+Xs1M437/u/PhPDfnQ4wMAMe8/dY+t+GdXDMwHPVjzrdxhuAAUL4H8LwY5JeBiybf5WB64ZT+/l7lY8LgG53gDX1pz0OAids4t8e7Uzn5+9VHk//V4vhfxuO34awp1ovWabA18/fUMxXij8AYNQBukRBbWc/f0PJ87m9ACLIBnBWHaAr+r0pCvz9/L1K/JmP//Omasp1gG5R8J+BKagX+DsHpSU8/M/5t6ZkB8iegoA/f6+W8DhF5piGHSATCuqZ+MxJMXv/vxZla0S0Dk6VKQj+8/dOBdYyXwES5Q0wqTvAQLr7yb/dPtzUz9+7fYnxyuA6Uc7/BNABBsyCGLP/ZXoK0wZQmAMA2+qoch1lCcB7GnaAwonhM+HZGnaA4iluPLMngMs07AAFVOssNv5/I8wJsCHPo+uVdYbN9hBxTgDHDrCaxjHZA65hByisDjFYAmqFHaC4avyi2/6HivMJAOwAfWifMi+BYwfoW0tdXgLIxQ5QbMW7uihwZBJ2gKLrbJKLALyjYQcovAa75/+PGnaA4it5vVv+D22FHaAMSnfrgaBAXwHBDjCQXHpbaKGmegdY/zc2FMf+OmMK3fB/wVTVO8Dutq61O4cr7dMT9gyATwdoz3+t5UMcrrUfff9fDVG8A+xu93IfTOZwtaOpnwMwWfEOsLv96+VRBDJozwQ+V7wDbObggrkUgcFg1wC4dIDNHF0xjyIQf4nqNvCVaneAzRxeM48isBjmIjCXDtCp/3yKAMU+cN4ycQBoLqH/fIoAxT5wgDD233ivlP7zKQLDaPm/UZRHAHf8MVlS/7kUgUha7wl8KYj/T93N4WfUgtLF8ygClPrAr9VNf3r+a1ozDldP5fioI1OVTX+a/nMpAlT6wBPKpj9V//kUAQp94KwhqqY/Zf+5FAEKfeC3qqY/df85FIH4G95x6v/cEEXTn77/niJQl+kN3P3X2lquw+/Nh65UNP3d8J9pEbj7lju9v90BUp8Fwi393fGfWRG44r5H2c86WgWcpGb6u+Q/myJQyX1D/5D2GRC/9Nf1bm7dVDO27hvLp70dBMAiJdPfRf+1lglM3Te02z4Aq5VMfzf9d7EI+Hbf0EbbG0EXqZj+7vrvUhHw775H39kF4BcV01/Xm7t7d/SLQED3Db1qMwCmKpj+uv6S2/fXsPmtzzdh575Hn9kD4HUF09+jPUxus3MjDwaJLNw3dNnWMvB+9dLfUCLD2zUwSEh02X2PvpRlJzDn9C/XcNZ33blRt1sTIl1z39BCGx3AOfXSv1w38Wl9LGBg0X2PzlsH4KCC6V+ucJ6PPzs3avGXwBhYd9/Qp5aXASepmP5e/ZH/DpiGt7f4y0Px1Nz36GnBjwMRJP29mqAJouoY2HbfzrOAz5RMf4bzQKsYOHLf+orAC4zu7q4bH20efa9YZz4mauIppLbTnVnZs8TaCVjufH0hT/sbrkHU55a2Aue67PzjIp/zeBNIAFod4fxVMAmcF2Ee6J5WWzgRbpCazoszD3RD55k/BZbOedHmgZRleiaY4/S7sHc9+Gi36Ecel/U85z1AATC9PbRHbYfOx+hSKxEoALlmZ4Ib1thxvoX8zsOeB5qeCU5JrmP5n75Oh6Q7gQJwrospAAr0mNpqAwB0Hqhpb5oC4Iyur1EbgD9CBcDUTPCiZwTqqA3AY1AB0OaaAGC6ZwQs1wBYAOwBC8C3JnaCDDSGYI3SAESCBSB3XVAA5nuHoI7SAICdB2rawaAAHPaOgNUaAAyAO8ECEPQdkZSKXeprlAagLVgAsucFAWBExRDUURoAsPNATXs9CAAzK4bAYg0ABgDceaC2MrD/WVdX8NaoDMCf4AKgBT42bNjVMYhVGYBIwADsCAjArqtjYK0GAAMA8Dww8Csi/SuNwRqVAbgTcAQEOjRqc6UxiFUZgLaAAXjDv/9ptSqNgaUaAA0AwPNAbVGAvWBVBmGNwgAAngcGOjVsRZVBiFUYAMjzQO09vxWg6gvJVmoANAAgzwO1qaEBFwKvqZ26AECeB/p/QWBLtUGYqDAAz0EGwN9XJE5WGwQLNQAcAJDngdp+3/4vr7Grv526AECeB/p7FjSixihMVBcA0PNA7ZkAe4Hs1QBwAICeB2rHfQJQVHMYTNeARhHAAIgHDcCyHB/+/+xjGMzXgAbQCKgNmgBfE8HTPkbBwjwAGgGg54E+F4Rm+hoGC8+CgBEAeh6o/eRjO3CU7qgGQCMA9jwwd0ENAEb7HAZLa8KgCIA9D9R+rAHAdt/j0E5TlADY80DtWA0A0n2Pw0RNUQJgzwO1SdX93+rHurDhqhIAex6oVX9DaJO/cWinKUpAPdgAVD8sZK+/cZioKUoA7Hlgja+Kt/Y3DmHDFSUA9jyw+pLwev8D0U5TkwDg88BqS8LD/A9EB01NAoDPA6u9JrzE/0CEDVeTAODzwGpNwECdYg0AQgDweWCVdwSnBBqIDpqaBACfB+YeCbAh3GkNAEFAA+A1oPKZgXkBR6JDQxv/fB3pAXj8v24DDcAvlQAYG3goIu+x/s/HQugDo28EDMCYAG8E1NC9DVUEQNcj7n00BCoAlQ4OTqobdCQshwAMADyq3xxoJci9dnh8ppmBsBgCYADQ9SigleCFAK+EOA8BQABArQTXjo3NNzkOVkIAFAAwK8E7gTcEOwwBaAAArAQrA70T5DgE4AEArhIMufJ+0HIrg2A2BPwCkNgoESuBWCvCo62NgbkQ8AdA5PvaH7ASiKHVwTcD2A+BWL/+a9cnYiUQQseC7Qf0HwKdbQJg+K9JHgFwKsFPgV8JcBYCsf79lz4CyivBg9ID0KridLg4OwPwRGfrAETeVPGH8kcAjEqwoMYJ0RaU2MAqAFf9BxEBECpB+TRght3bDxgCsQH8BxIB8leChYFeC3UYArGB/AcTAeWVINvW6LdsyB2A8p3Bix3cvf8QiA3kP6AIKK8E11s1/58tXkqMuPV+zgCUnxrcy8m9+w2B2ID+Q4oAq5XAMD+y/K/d3YgvAP/wAlDq7N79hEBVAOJvqv7noCLAdCVo+c9mV8wvF98QKF8Ocvpb9P1MIDaw/9AiwEQlqGE+/xDwviCY4vzOfT0YjA3sP7wICFgJWr7f7Il4P3+JYwiEGLvCplG4cR8hUAmAeJ+fYAIYAb4rQSDzeYfAsx4ACqnceI0lwtgg/sOMgOqVoOX73QObzzkEPvIAcIjObVcPgdhg/gONgGuVwDA/yuTf4BUCB4O+FWQ7BGKD+Q83AoxK8MjfTJvPMwTe8PGdEEohEBvUf8ARYEdcQmBA8NfC7IZAOQDxAY/c/QPazjkE/m1lS7C1EIgN7j9GAPcQeNkDQFe6N3ElBAwAooIduY0RwDkEcnMCnA/mLARiTfiPEcA9BNaRpDDqN+ENgVgT/mMEcA+Bf5EXXbgHIwRio8wcsYIRwDkEetvdEBY0BF4yd8QORoCvEGC30WwuWevOPfz+/8xdAEaAzxC4g92z4DnuPAw1fcQWRoAvXc8KgNnkAl//MQL4ArCafMLXf4wAvgA8Y+O9MLr+YwRwBeAEOcrZf4wArgC852hTOBX/MQJ4AjCGrODtP0YATwC+JRu4+48RwBGA44G+FMDIf01b9VsnehIBcLIhYB9//x2qcxQCYFtPU90PEsXniP1mCIBtLSKjpPdfu+vvCIBdnSOvSO+/pjVCAOxqiLN3g8XwX9MeQwBsahk5C8B/eH0gMwAGkTMA/Ne07giA3R6gIwT/tbt+gwDY0v7gX4sxpVs1zmqEANjSy5ReC+AOgPZnBMDec4B0IAA0jEIAbGgy2QUEAO0GBMCGJpEMKACA6gMZrgWUQgEAVB/IDIDzpA8YACD1gcwAWEkJgGgRAADUBzLcD9AVTgIA6gOZAfAZpdVAMQC4qz4CYFHfUdoUKgYAcPpAhnsC+0ECAEwfyAyAHygdEiYKAFD6QGYA7Lb8zTixAYDSBzIDYID9D8aICQCQPpAZAMfIAVgAAOkDmQGwg4wHBgCMPpDh+QCZ0AAA0QcOZzVaC8lWaABoqQAA+A9Wg7WRpIEDAEIfWOt3jAbrX84/GSQcACD6QFYRcISQgeAAgNAHMoqAQZ7Dok/CAwBCH8gmAhZ5AHgFHgAQ+kA2EfClwy/HigoAhD6QSQTs9gAwDiAA2u0YAaY0htY3g/oKBoD2JEaAGRkfjTpN42Lr1hYMAAB9IIsIML4fT2c58BbRIiAVI8CEvvAAQGc1SLgIANAHMoiAyx4A6CwGiBcBt2MEBFdv4/PhTWBGAIA+0P0IWGAA8CHQCGjYFCMgiKYa/pPDOtAISMUICKLvvQAM1oFGAIA+0OUIOOYF4IAONQIeuC6omikdAb94AfhYhxoBJtRe6Qi47AUgLQ5sBARXC6W7gHleACgdEiJnBExQuQsYVO4/vU8GSBgBwveJbkbAygoA8nVlI+C2CJUnAgMqAJihKxsB7YX3380I2FEBQJmubAS0EB8AFyPgxwoASnRlI2CCrnIEPFsBAGmtbARIcbagWxGQm3MFgF6qRsD9EbrCETDpiv+UjomRMALa67rCEbD7KgA7dUUjoIUcALgUAW9cBWCtrmgETNBVjoAvrgIwTVc0AmQ5X9qdCHj7KgCksZoRIEcP6FYE7L/mP90vSMsTAe1l8d+VCNhdCYCdupIR0E0aANyIgGcqAdBfVzICJugqR8DcSgAkNVEyAmT6xgj1CBjSpRIAdD8iL0sEyNMDuhEB/67sP6UDYyWLgPa6rnAEfF4FgDJdwQjoJhUAtCPgxyoApMUrGAF9dZUjYGgVAMgoBSPg77rCETC5qv+kWFcuAu6P0RWOgDHVABhP+WLrjsQeUOgIOFgNgJS6tC/38T/f0Og+7AFFjYDe1QAgZ125ZJEp6KsrHAGtQqsDMN296xaUgr/rCkfA8er+k9EuX/vjj3Vv1EYk/2+O0RWOgB01APg1jsENiERBPV1XOAI21gCA1kkxZihoJgIFzWUEgFYETA2tCUA+0zupz52CvrrCETCmpv+kB/ObiTAouB57QA4RsNAHACVxXO7IQ0GLhtgDso2AZV18AEB7OcCCwrEHZBsBu335T+YoBUBzSQGgEgGrfQIwJU4lAPrq6kZA9lCfAPCrAeHYAzKNgJ98+0+WKgSArD0glQjY4QcAbjUgHHtAphHwrB8AuNWAcOwBWUbAZH/+c6sB4dgDsoyA9/wCsDxOFQBuvltXNwJe9QsArxrAHICb6+i6shHQKoeIVgPC0X+GETDAv/+8akA4+s8wAmYHAIBTDQhH/9lFwKBvAgGwFD4AEPx3EgFjAvnPqQaEo//sImBuQADofExeYACA+G8/AiYH9p9PDQhH/5lFwI4gAHCpAeHov3U9ZWsEcucFAYBLDQhH/1kN2g/B/OdSA8LRf1aD9mlQAHomQgUAlv/2Bu1cTlAAyGagAADz396gvRfcf3IxAiQA0Py3N2i9TQBAZkIEAJz/tgZtpRn/6R4eLwgA8Py3NWi/mAIgtBQcAAD9tzNoQxaYAoDkQQMAov92Bm2AOf9JSSQsAED6b2fQLpsEgHwCCgCY/tsYtEWhZgH4OAIQAED9tzForxPTmgkHAKj+Wx+0Vt+YB6AHGADA+m990E6Y95+EdgICAFz/LQ/asnUWAKD8ESFuAAD23/KgHbPiPymJhwAAZP+tDlruLEsAkHEAAADtv9VBG2DNf5IZIT0AsP23OGghvS0CwPQVkXD03+1B+8Gq/0xnguHov9uDNtcyAEmlUgMA3n9rg/YTsa5DMgMA339rg7bQBgDkpLwAKOC/pUGbFGoHgNHSAqCC/5YG7U1iS69ICsAdKvhvZdBezrEHQJmkANyoIwB214GragMCAAGA/d/YBSAzDAEAAMBqYluHEQD5AXg6xz4Al5IRAOkB+Ig40GYEQHYAvnPiP1keiQDIDUB2b0cAuPlBUQSAxaCNceY/KWmMAIipNeZ2As5zCACT3YEIgA1F1aO9Fdi3UgYiAPISMPUbxwCQDxAAeQlY7dx/kpSBAMhKgJNnQCx3hiAALhFwmVDRWQRATgKO0/GffFwXARCWgPbuPQO6pgsIgIwEjKHlP0lLRwDkI6DVUGoAkP5hCIB0BHxNKGo7AiAbAcdp+k9SOiEAchEwaBZVANzdI44A0CfgIKGssQiATAR8Rtt/MqU1AiAyAb+tMgRD3qYOgJtPhBEA2gQ8Q1zQBgRAFgJW5rgBQFYTSQDopitOQG5v4oqWSgHAzRN0XXECThCX1EsCAB6ur+uKE/B0jlsAXGwqPAD31NV1xQnIfYG4psGCA3D/BF1tGQR87p7/JOmk0ACoHP9XCZjcxUUAyPqmAgOgdvxXKHIjcVUfCAuA8vFfrgvEZY0VFACMf69GhboNQEpXIQG4DuPfUOutxHVNayIeABj/5YoZTRjoQIRoAGD8V2g6YaJ8wQDA+K9QryQ2ACSdFQkAjP8rapxFGCmrtTgAPIDxX6GItYSZ5oeJAkA7jP8ryicMNVgMAO5/DH2/ojNpLAEIXSICABj/lZ4AXCJMVdKH4sVH24z/ZPT9iuqWEcbqT7H4NrkD49+hNhHmorlBrC3GvzNtIRxE8SDhBIx/R1oSygOAFIovja+yZv9tGP+Vld6TcNFFeodIRmP821et1wgnvUXtC8OW2kCM/ypKHk+46RQ1K9pi/NvVB4SjRsSwbgNXYfxX1XbCVXms28Ab0PIq2pDEFwBq58lHIwB21CuF8FY/OneSeAcCYF1dS7j7T5IovTbeFgGwrE5biQBKofPOaAICYFWtpxEhVEJnp/gqBMDiw5P1RBBtpXKIXDQCYElNxxNhNI3GJkFzbSACUKG4A0QgrU9k1QYiAOWKmEGE0ngK+0MSEADzGkYE0wEKG4VXIQBmNZgIpzls2kAEQMjfv6FhTNpABMCj00RILXVcBdoiAGa0kwiqQ063ByQgACaUR4TVaKcfG1+FAASd/xUQgfWWw22C0QiA1P57PjHn7FPDwdtAxQGIWEoE1yVnX5ptiwAEUtgcIrymfOhqG6g0AE0PEAnUc5STe3wYAfCrJoVECqUtdrENVBiAgZlEEiWNc68NVBeA9CwijxzsFW6AAPhUrxIik/JsvzGSgAD40oo0IpdGxLnTBioKwOZQIpvWRrnSBioJQMRgIqHKitxoA1UEIOorIqVetPnCQAMEoOr0rz+RVEn5ts6VTkAAqrT/y4m8OmBrt/DDCMA1fZJGZNZFOwcJRSMAV5T8AZFcKdvotoFqAVBURuRXgfWNYg0QAK8+zCIQ9JblTSIJCIChsWkEhqbMtHrr9za4T3kAopYSMAottrw0EPeEbwaUASA9k0DSKRu7RT0MtFEWgE9SCCy91tHOMNRkQA0AGvcg0BSaZnOXSDUGlADglSwCUZvsrg9WZkABAOIuJBGYyrS/YTjuibZtFAGgTxkBq6TBDs6RiHvJYAA8AHtLCGRlOnprwMPAu8Cf/fYgwOUoBOA/+ysh8OUsBCBr4CmihDAEfCpiXE+iijAEfDT/84lCSjodiZZXVszmX4layjqKrlda+Skk6mn+LjS+XE0KkoiKSjudiOZ70n/cFKKqsvai/2f6E5U1Pl1t+4s2EcWVlNdEXfuT83sS1PLNqn4JdN/H6L5Xr22LUdD+s4Xo/FX9vEQ1+0+eQterqLCXSvZnHELHa2htV1Xs7zMjCe32odARnVSwv6ggDb3292xwRgZ4+0+noM+BUuAA6JXijBn46w++SDQKqv1ne4SivWbUf3EYPPcjluC837wu9gP2dDB5bCa6am2hML8xHPsb52eho5aVsukMkAXfTdj429T6cdJvGUkctx59dKCeS6V+PnhyKa73OlbZtqZyuh91+C10j4qm5HWUzv2IswUl6Bw9TSuW6iFx+uBL6Bn1x0PbB8rh/sAtP6Nb7iwUzO8n/MOBxuMK8Xmvi0rrsVdgBor6rcXFHteVVLhFxHeKYj4s7o/msNJrBTOFesU8ccWMregKW/16oF+RGO6Xbh6Nwc/pUXHeilqcze83Atd5+Cqz4GgRmq/6Y6IPDvdh2/FloPmiKatH8RIWT4ridm3LG49LPIJqyuhhRzNc208W13VsQRmu7QuvlLKCzftKqe4pa9Jxb/GI/tjrS/W8aNopChzEd12xZUbhchxOiTkY/1XelsMzuxbFWVjJ73R28ebBm0Zn4oouJBS2rj+1aenp4i2fHF68r1fHjD4D+xjq1KlTaWlp+tl9i/ttLz4956u1hUrZ/v9B+yLpMvmJxwAAAABJRU5ErkJggg==",
              className: "start__type-img",
            }),
            (0, o.jsx)("span", { className: "start__type-title", children: t }),
          ],
        });
      }
      function ke(e) {
        var t = [
          { id: 1, type: "Country by Flag" },
          { id: 2, type: "Flag by Country" },
          { id: 3, type: "Capital by Country" },
          { id: 4, type: "Country by Capital" },
        ].map(function (t) {
          return (0,
          o.jsx)(Ae, { createQuestion: e.createQuestion, text: t.type, id: t.id }, t.id);
        });
        return (0, o.jsxs)("div", {
          className: "start",
          children: [
            (0, o.jsx)("span", {
              className: "start__title",
              children: "Choose The Type Of Game",
            }),
            (0, o.jsx)("div", { className: "start__types-box", children: t }),
          ],
        });
      }
      function Se(t) {
        var n = a((0, e.useState)(!1), 2),
          r = n[0],
          l = n[1],
          s = a((0, e.useState)(!1), 2),
          f = s[0],
          d = s[1],
          p = a((0, e.useState)(!0), 2),
          h = p[0],
          m = p[1],
          v = a((0, e.useState)(!1), 2),
          g = v[0],
          y = v[1],
          b = a((0, e.useState)(0), 2),
          w = b[0],
          A = b[1],
          k = a((0, e.useState)(!1), 2),
          S = k[0],
          x = k[1],
          C = a((0, e.useState)(!1), 2),
          E = C[0],
          _ = C[1],
          P = a((0, e.useState)(), 2),
          O = P[0],
          N = P[1],
          j = a((0, e.useState)(), 2),
          D = j[0],
          z = j[1],
          R = a((0, e.useState)(), 2),
          T = R[0],
          M = R[1],
          B = a((0, e.useState)(), 2),
          I = B[0],
          L = B[1],
          F = a((0, e.useState)(), 2),
          U = F[0],
          Q = F[1],
          V = a((0, e.useState)(), 2),
          H = V[0],
          W = V[1],
          Y = a((0, e.useState)(!1), 2),
          G = Y[0],
          K = Y[1],
          q = a((0, e.useState)(), 2),
          X = q[0],
          Z = q[1];
        function $() {
          return Math.floor(251 * Math.random() + 1);
        }
        function J() {
          ee(X);
        }
        function ee(e) {
          l(!0);
          var n,
            r = $();
          switch ((Z(e), M(t.data[r]), L(t.data[r].name.common), e)) {
            case 1:
              L(t.data[r].name.common),
                (n = [
                  t.data[$()].flags.svg,
                  t.data[$()].flags.svg,
                  t.data[$()].flags.svg,
                  t.data[r].flags.svg,
                ].sort(function () {
                  return Math.random() - 0.5;
                })).forEach(function (e, n) {
                  e === t.data[r].flags.svg && N(n);
                }),
                W(n),
                K(!0);
              break;
            case 2:
              Q(t.data[r].flags.svg),
                (n = [
                  t.data[$()].name.common,
                  t.data[$()].name.common,
                  t.data[$()].name.common,
                  t.data[r].name.common,
                ].sort(function () {
                  return Math.random() - 0.5;
                })).forEach(function (e, n) {
                  e === t.data[r].name.common && N(n);
                }),
                W(n),
                K(!0);
              break;
            case 3:
              L(t.data[r].name.common),
                (n = [
                  t.data[$()].capital,
                  t.data[$()].capital,
                  t.data[$()].capital,
                  t.data[r].capital,
                ].sort(function () {
                  return Math.random() - 0.5;
                })).forEach(function (e, n) {
                  e === t.data[r].capital && N(n);
                }),
                W(n),
                K(!0);
              break;
            case 4:
              z(t.data[r].capital),
                (n = [
                  t.data[$()].name.common,
                  t.data[$()].name.common,
                  t.data[$()].name.common,
                  t.data[r].name.common,
                ].sort(function () {
                  return Math.random() - 0.5;
                })).forEach(function (e, n) {
                  e === t.data[r].name.common && N(n);
                }),
                W(n),
                K(!0);
          }
        }
        var te = function () {
          y(!g);
        };
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: "playground",
            children: [
              (0, o.jsx)("h1", {
                className: "playground__title",
                children: "COUNTRY QUIZ",
              }),
              r ? null : (0, o.jsx)(ke, { createQuestion: ee }),
              f
                ? (0, o.jsx)(c, {
                    startNewGame: function () {
                      m(!0), d(!1), A(0), x(!1), _(!1), J();
                    },
                    backToMenu: function () {
                      l(!1), d(!1), K(!1), x(!1), _(!1), A(0);
                    },
                    finalScore: w,
                  })
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      (0, o.jsx)("img", {
                        className: "playground__image",
                        src: u,
                      }),
                      G
                        ? (0, o.jsx)(i, {
                            rightId: S,
                            wrongId: E,
                            countryList: H,
                            checkAnswer: function (e, t) {
                              t === O ? (x(t), m(!1), A(w + 1)) : (_(t), x(O));
                            },
                            number: X,
                            flag: U,
                            capital: D,
                            country: I,
                          })
                        : null,
                      E >= 0 && !1 !== E
                        ? (0, o.jsxs)("div", {
                            children: [
                              (0, o.jsx)("button", {
                                onClick: function () {
                                  te();
                                },
                                className:
                                  "playground__button playground__button--info",
                                children: "INFO",
                              }),
                              g
                                ? (0, o.jsx)(we, {
                                    changeInfoWindow: te,
                                    mainCountry: T,
                                  })
                                : null,
                              (0, o.jsx)("button", {
                                onClick: function () {
                                  d(!0);
                                },
                                className: "playground__button",
                                children: "RESULT",
                              }),
                            ],
                          })
                        : (0, o.jsx)("button", {
                            disabled: h,
                            onClick: function () {
                              x(!1), _(!1), m(!0), J();
                            },
                            className: "playground__button",
                            children: "NEXT",
                          }),
                    ],
                  }),
            ],
          }),
        });
      }
      function xe() {
        var t = a((0, e.useState)(!1), 2),
          n = t[0],
          r = t[1],
          l = a((0, e.useState)(), 2),
          i = l[0],
          u = l[1];
        return (
          (0, e.useEffect)(function () {
            fetch("https://restcountries.com/v3.1/all")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                u(e);
              })
              .then(function () {
                r(!0);
              });
          }, []),
          (0, o.jsx)("main", {
            className: "app",
            children: n ? (0, o.jsx)(Se, { data: i }) : null,
          })
        );
      }
      t.createRoot(document.getElementById("root")).render((0, o.jsx)(xe, {}));
    })();
})();
//# sourceMappingURL=main.91795c04.js.map
