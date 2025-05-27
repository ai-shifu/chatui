"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackBottom = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Button = require("../Button");
var _Icon = require("../Icon");
var _LocaleProvider = require("../LocaleProvider");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var BackBottom = exports.BackBottom = function BackBottom(_ref) {
  var count = _ref.count,
    onClick = _ref.onClick,
    onDidMount = _ref.onDidMount;
  var _useLocale = (0, _LocaleProvider.useLocale)('BackBottom'),
    trans = _useLocale.trans;
  var text = trans('bottom');
  if (count) {
    text = trans(count === 1 ? 'newMsgOne' : 'newMsgOther').replace('{n}', count);
  }
  (0, _react.useEffect)(function () {
    if (onDidMount) {
      onDidMount();
    }
  }, [onDidMount]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "BackBottom"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "slide-in-right-item",
    onClick: onClick
  }, text, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    type: "chevron-double-down"
  })));
};