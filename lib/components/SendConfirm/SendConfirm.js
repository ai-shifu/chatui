"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendConfirm = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Modal = require("../Modal");
var _Flex = require("../Flex");
var _LocaleProvider = require("../LocaleProvider");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var SendConfirm = exports.SendConfirm = function SendConfirm(props) {
  var file = props.file,
    onCancel = props.onCancel,
    onSend = props.onSend;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    img = _useState2[0],
    setImg = _useState2[1];
  var _useLocale = (0, _LocaleProvider.useLocale)('SendConfirm'),
    trans = _useLocale.trans;
  (0, _react.useEffect)(function () {
    var reader = new FileReader();
    reader.onload = function (e) {
      if (e.target) {
        setImg(e.target.result);
      }
    };
    reader.readAsDataURL(file);
  }, [file]);
  return /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    className: "SendConfirm",
    title: trans('title'),
    active: !!img,
    vertical: false,
    actions: [{
      label: trans('cancel'),
      onClick: onCancel
    }, {
      label: trans('send'),
      color: 'primary',
      onClick: onSend
    }]
  }, /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    className: "SendConfirm-inner",
    center: true
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: img,
    alt: ""
  })));
};