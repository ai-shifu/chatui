"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClickOutside = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _excluded = ["children", "onClick", "mouseEvent"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var doc = document;
var html = doc.documentElement;
var ClickOutside = exports.ClickOutside = function ClickOutside(props) {
  var children = props.children,
    onClick = props.onClick,
    _props$mouseEvent = props.mouseEvent,
    mouseEvent = _props$mouseEvent === void 0 ? 'mouseup' : _props$mouseEvent,
    others = (0, _objectWithoutProperties2.default)(props, _excluded);
  var wrapper = (0, _react.useRef)(null);
  function handleClick(e) {
    if (!wrapper.current) return;
    if (html.contains(e.target) && !wrapper.current.contains(e.target)) {
      onClick(e);
    }
  }
  (0, _react.useEffect)(function () {
    if (mouseEvent) {
      doc.addEventListener(mouseEvent, handleClick);
    }
    return function () {
      doc.removeEventListener(mouseEvent, handleClick);
    };
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: wrapper
  }, others), children);
};