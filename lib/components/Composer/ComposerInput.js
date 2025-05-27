"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposerInput = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Input = require("../Input");
var _SendConfirm = require("../SendConfirm");
var _riseInput = _interopRequireDefault(require("./riseInput"));
var _parseDataTransfer = _interopRequireDefault(require("../../utils/parseDataTransfer"));
var _canUse = _interopRequireDefault(require("../../utils/canUse"));
var _excluded = ["inputRef", "invisible", "onImageSend"];
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var canTouch = (0, _canUse.default)('touch');
var ComposerInput = exports.ComposerInput = function ComposerInput(_ref) {
  var inputRef = _ref.inputRef,
    invisible = _ref.invisible,
    onImageSend = _ref.onImageSend,
    rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    pastedImage = _useState2[0],
    setPastedImage = _useState2[1];
  var wrapRef = (0, _react.useRef)(null);
  var handlePaste = (0, _react.useCallback)(function (e) {
    (0, _parseDataTransfer.default)(e, setPastedImage);
  }, []);
  var handleImageCancel = (0, _react.useCallback)(function () {
    setPastedImage(null);
  }, []);
  var handleImageSend = (0, _react.useCallback)(function () {
    if (onImageSend && pastedImage) {
      Promise.resolve(onImageSend(pastedImage)).then(function () {
        setPastedImage(null);
      });
    }
  }, [onImageSend, pastedImage]);
  (0, _react.useEffect)(function () {
    if (canTouch && inputRef.current && wrapRef.current) {
      (0, _riseInput.default)(inputRef.current, wrapRef.current);
    }
  }, [inputRef]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)({
      'S--invisible': invisible
    }),
    ref: wrapRef
  }, /*#__PURE__*/_react.default.createElement(_Input.Input, (0, _extends2.default)({
    className: "Composer-input",
    rows: 1,
    autoSize: true,
    enterKeyHint: "send",
    onPaste: onImageSend ? handlePaste : undefined,
    ref: inputRef
  }, rest)), pastedImage && /*#__PURE__*/_react.default.createElement(_SendConfirm.SendConfirm, {
    file: pastedImage,
    onCancel: handleImageCancel,
    onSend: handleImageSend
  }));
};