"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Routes = _interopRequireDefault(require("./Routes.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavigationBar = function NavigationBar() {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "nav-bar"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.NavLink, {
    className: "submit-button submit-button-dark",
    exact: true,
    to: "/"
  }, "Go To Homepage"));
};
/* Home component which shows the static Navbar and the Contents */


var Homepage = function Homepage() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(NavigationBar, null), /*#__PURE__*/_react.default.createElement(_Routes.default, null));
};

var _default = Homepage;
exports.default = _default;