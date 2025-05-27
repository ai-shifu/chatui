"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
var _clsx = _interopRequireDefault(require("clsx"));
var _useMount2 = _interopRequireDefault(require("../../hooks/useMount"));
var _Backdrop = require("../Backdrop");
var _IconButton = require("../IconButton");
var _Button = require("../Button");
var _useNextId = _interopRequireDefault(require("../../hooks/useNextId"));
var _toggleClass = _interopRequireDefault(require("../../utils/toggleClass"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function clearModal() {
  if (!document.querySelector('.Modal') && !document.querySelector('.Popup')) {
    (0, _toggleClass.default)('S--modalOpen', false);
  }
}
var Base = exports.Base = function Base(props) {
  var baseClass = props.baseClass,
    active = props.active,
    className = props.className,
    title = props.title,
    _props$showClose = props.showClose,
    showClose = _props$showClose === void 0 ? true : _props$showClose,
    _props$autoFocus = props.autoFocus,
    autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
    _props$backdrop = props.backdrop,
    backdrop = _props$backdrop === void 0 ? true : _props$backdrop,
    height = props.height,
    overflow = props.overflow,
    actions = props.actions,
    _props$vertical = props.vertical,
    vertical = _props$vertical === void 0 ? true : _props$vertical,
    btnVariant = props.btnVariant,
    bgColor = props.bgColor,
    children = props.children,
    onBackdropClick = props.onBackdropClick,
    onClose = props.onClose;
  var mid = (0, _useNextId.default)('modal-');
  var titleId = props.titleId || mid;
  var wrapper = (0, _react.useRef)(null);
  var _useMount = (0, _useMount2.default)({
      active: active,
      ref: wrapper
    }),
    didMount = _useMount.didMount,
    isShow = _useMount.isShow;
  (0, _react.useEffect)(function () {
    setTimeout(function () {
      if (autoFocus && wrapper.current) {
        wrapper.current.focus();
      }
    });
  }, [autoFocus]);
  (0, _react.useEffect)(function () {
    if (isShow) {
      (0, _toggleClass.default)('S--modalOpen', isShow);
    }
  }, [isShow]);
  (0, _react.useEffect)(function () {
    if (!active && !didMount) {
      clearModal();
    }
  }, [active, didMount]);
  (0, _react.useEffect)(function () {
    return function () {
      clearModal();
    };
  }, []);
  if (!didMount) return null;
  var isPopup = baseClass === 'Popup';
  return /*#__PURE__*/(0, _reactDom.createPortal)(/*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(baseClass, className, {
      active: isShow
    }),
    ref: wrapper,
    tabIndex: -1
  }, backdrop && /*#__PURE__*/_react.default.createElement(_Backdrop.Backdrop, {
    active: isShow,
    onClick: backdrop === true ? onBackdropClick || onClose : undefined
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("".concat(baseClass, "-dialog"), {
      'pb-safe': isPopup && !actions
    }),
    "data-bg-color": bgColor,
    "data-height": isPopup && height ? height : undefined,
    role: "dialog",
    "aria-labelledby": titleId,
    "aria-modal": true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClass, "-content")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClass, "-header")
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "".concat(baseClass, "-title"),
    id: titleId
  }, title), showClose && onClose && /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    className: "".concat(baseClass, "-close"),
    icon: "close",
    size: "lg",
    onClick: onClose,
    "aria-label": "\u5173\u95ED"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)("".concat(baseClass, "-body"), {
      overflow: overflow
    })
  }, children), actions && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(baseClass, "-footer ").concat(baseClass, "-footer--").concat(vertical ? 'v' : 'h'),
    "data-variant": btnVariant || 'round'
  }, actions.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_Button.Button, (0, _extends2.default)({
      size: "lg",
      block: isPopup,
      variant: btnVariant
    }, item, {
      key: item.label
    }));
  }))))), document.body);
};