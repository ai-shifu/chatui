"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var observerOptions = {
  threshold: [0, 0.1]
};
var Item = exports.Item = function Item(props) {
  var item = props.item,
    effect = props.effect,
    children = props.children,
    onIntersect = props.onIntersect;
  var itemRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!onIntersect) return undefined;
    var observer = new IntersectionObserver(function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
        entry = _ref2[0];
      if (entry.intersectionRatio > 0) {
        // 根据回调返回值判断是否继续监听
        if (!onIntersect(item, entry)) {
          observer.unobserve(entry.target);
        }
      }
    }, observerOptions);
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return function () {
      observer.disconnect();
    };
  }, [item, onIntersect]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('ScrollView-item', {
      'slide-in-right-item': effect === 'slide',
      'A-fadeIn': effect === 'fade'
    }),
    ref: itemRef
  }, children);
};