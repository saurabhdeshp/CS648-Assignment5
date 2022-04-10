"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProductAdd = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductAdd, _React$Component);

  var _super = _createSuper(ProductAdd);

  function ProductAdd() {
    var _this;

    _classCallCheck(this, ProductAdd);

    _this = _super.call(this);
    _this.state = {
      price: '$'
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handlePriceChange = _this.handlePriceChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductAdd, [{
    key: "handlePriceChange",
    value: function handlePriceChange(event) {
      var newPrice = event.target.value.substring(1); // Getting value without '$'

      this.setState({
        price: "$".concat(newPrice)
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      event.preventDefault();
      var _document$forms$produ = document.forms.productAdd,
          name = _document$forms$produ.name,
          price = _document$forms$produ.price,
          category = _document$forms$produ.category,
          url = _document$forms$produ.url;
      var priceWithoutDollar = price.value.substring(1); // Ignore $

      var product = {
        name: name.value,
        price: parseFloat(priceWithoutDollar),
        category: category.value,
        url: url.value
      };
      var addProduct = this.props.addProduct;
      addProduct(product);
      name.value = '';
      category.value = 'Shirts';
      url.value = '';
      this.setState({
        price: '$'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var price = this.state.price;
      return /*#__PURE__*/_react.default.createElement("form", {
        name: "productAdd",
        onSubmit: this.handleSubmit,
        className: "add-product-form"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "form-element-container"
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "category",
        className: "label"
      }, "Category", /*#__PURE__*/_react.default.createElement("select", {
        name: "category",
        className: "add-product-form-select"
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: "Shirts"
      }, "Shirts"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Jeans"
      }, "Jeans"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Jackets"
      }, "Jackets"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Sweaters"
      }, "Sweaters"), /*#__PURE__*/_react.default.createElement("option", {
        value: "Accessories"
      }, "Accessories")))), /*#__PURE__*/_react.default.createElement("div", {
        className: "form-element-container"
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "price",
        className: "label"
      }, "Price Per Unit", /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        name: "price",
        value: price,
        onChange: this.handlePriceChange,
        className: "add-product-form-input"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "form-element-container"
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "name",
        className: "label"
      }, "Product Name", /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        name: "name",
        required: true,
        className: "add-product-form-input"
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "form-element-container"
      }, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "url",
        className: "label"
      }, "Image URL", /*#__PURE__*/_react.default.createElement("input", {
        type: "text",
        name: "url",
        className: "add-product-form-input"
      }))), /*#__PURE__*/_react.default.createElement("button", {
        type: "submit",
        className: "submit-button submit-button-dark"
      }, "Add This Product"));
    }
  }]);

  return ProductAdd;
}(_react.default.Component);

exports.default = ProductAdd;