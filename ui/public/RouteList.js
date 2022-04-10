"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _ProductList = _interopRequireDefault(require("./ProductList.jsx"));

var _EditProduct = _interopRequireDefault(require("./EditProduct.jsx"));

var _ProductImage = _interopRequireDefault(require("./ProductImage.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return /*#__PURE__*/_react.default.createElement("h1", null, "Page Not Found");
};

var RouteList = function RouteList() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {
    exact: true,
    from: "/",
    to: "/products"
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/products",
    component: _ProductList.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/edit/:id",
    component: _EditProduct.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/img/:id",
    component: _ProductImage.default
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    component: NotFound
  }));
};

var _default = RouteList;
exports.default = _default;