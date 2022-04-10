"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProductTable;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NO_DATA_AVAILABLE = 'No Data Available';

function ProductTableRow(_ref) {
  var product = _ref.product,
      deleteProduct = _ref.deleteProduct,
      index = _ref.index;
  var name = product.name,
      price = product.price,
      category = product.category,
      url = product.url,
      id = product.id;
  return /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, name || NO_DATA_AVAILABLE), /*#__PURE__*/_react.default.createElement("td", null, price ? "$".concat(price) : NO_DATA_AVAILABLE), /*#__PURE__*/_react.default.createElement("td", null, category), /*#__PURE__*/_react.default.createElement("td", null, url ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/img/".concat(id)
  }, "View") : NO_DATA_AVAILABLE), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/edit/".concat(id)
  }, "Edit"), ' | ', /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "small submit-button submit-button-dark small",
    onClick: function onClick() {
      deleteProduct(index);
    }
  }, "Delete")));
}

function ProductTable(_ref2) {
  var headings = _ref2.headings,
      products = _ref2.products,
      loading = _ref2.loading,
      deleteProduct = _ref2.deleteProduct;
  var productTableRows = products.map(function (product, index) {
    return /*#__PURE__*/_react.default.createElement(ProductTableRow, {
      key: product.id,
      product: product,
      deleteProduct: deleteProduct,
      index: index
    });
  });
  var initialTableMessage = loading ? 'Loading products...' : 'No Products added yet';
  return /*#__PURE__*/_react.default.createElement("table", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("thead", {
    className: "text-left bordered-table"
  }, /*#__PURE__*/_react.default.createElement("tr", null, headings.map(function (heading, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      key: index
    }, heading);
  }), /*#__PURE__*/_react.default.createElement("th", null, "Action"))), /*#__PURE__*/_react.default.createElement("tbody", null, products.length > 0 ? productTableRows : /*#__PURE__*/_react.default.createElement("tr", {
    className: "text-center"
  }, /*#__PURE__*/_react.default.createElement("td", {
    colSpan: "5"
  }, initialTableMessage))));
}