"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageStatus = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _Icon = require("../Icon");
var _IconButton = require("../IconButton");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var MessageStatus = exports.MessageStatus = function MessageStatus(_ref) {
  var status = _ref.status,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 1500 : _ref$delay,
    _ref$maxDelay = _ref.maxDelay,
    maxDelay = _ref$maxDelay === void 0 ? 5000 : _ref$maxDelay,
    onRetry = _ref.onRetry,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    type = _useState2[0],
    setType = _useState2[1];
  var loadingTimerRef = (0, _react.useRef)();
  var failTimerRef = (0, _react.useRef)();
  var doTimeout = (0, _react.useCallback)(function () {
    loadingTimerRef.current = setTimeout(function () {
      setType('loading');
    }, delay);
    failTimerRef.current = setTimeout(function () {
      setType('fail');
    }, maxDelay);
  }, [delay, maxDelay]);
  function clear() {
    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }
    if (failTimerRef.current) {
      clearTimeout(failTimerRef.current);
    }
  }
  (0, _react.useEffect)(function () {
    clear();
    if (status === 'pending') {
      doTimeout();
    } else if (status === 'sent') {
      setType('');
    } else if (status === 'fail') {
      setType('fail');
    }
    return clear;
  }, [status, doTimeout]);
  (0, _react.useEffect)(function () {
    if (onChange) {
      onChange(type);
    }
  }, [onChange, type]);
  function handleRetry() {
    setType('loading');
    doTimeout();
    if (onRetry) {
      onRetry();
    }
  }
  if (type) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "MessageStatus",
      "data-status": type
    }, type === 'fail' ? /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
      icon: "warning-circle-fill",
      onClick: handleRetry
    }) : /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
      type: "spinner",
      spin: true,
      onClick: handleRetry
    }));
  }
  return null;
};