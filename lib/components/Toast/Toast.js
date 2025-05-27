"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Icon = require("../Icon");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function renderIcon(type) {
  switch (type) {
    case 'success':
      return /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        type: "check-circle"
      });
    case 'error':
      return /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        type: "warning-circle"
      });
    case 'loading':
      return /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
        type: "spinner",
        spin: true
      });
    default:
      return null;
  }
}
var Toast = exports.Toast = function Toast(props) {
  var content = props.content,
    type = props.type,
    duration = props.duration,
    onUnmount = props.onUnmount;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    show = _useState2[0],
    setShow = _useState2[1];
  (0, _react.useEffect)(function () {
    setShow(true);
    if (duration !== -1) {
      setTimeout(function () {
        setShow(false);
      }, duration);
      setTimeout(function () {
        if (onUnmount) {
          onUnmount();
        }
      }, duration + 300);
    }
  }, [duration, onUnmount]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('Toast', {
      show: show
    }),
    "data-type": type,
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Toast-content",
    role: "presentation"
  }, renderIcon(type), /*#__PURE__*/_react.default.createElement("p", {
    className: "Toast-message"
  }, content)));
};