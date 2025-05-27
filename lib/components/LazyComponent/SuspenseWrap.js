"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SuspenseWrap = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _ErrorBoundary = require("../ErrorBoundary");
var _excluded = ["component", "onError", "fallback"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var SuspenseWrap = exports.SuspenseWrap = function SuspenseWrap(props) {
  var Comp = props.component,
    onError = props.onError,
    fallback = props.fallback,
    rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  return Comp ? /*#__PURE__*/_react.default.createElement(_ErrorBoundary.ErrorBoundary, {
    onError: onError
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: fallback || null
  }, /*#__PURE__*/_react.default.createElement(Comp, rest))) : null;
};