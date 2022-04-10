"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _graphQLFetch = _interopRequireDefault(require("./graphQLFetch.js"));

var _NumInput = _interopRequireDefault(require("./NumInput.jsx"));

var _TextInput = _interopRequireDefault(require("./TextInput.jsx"));

var _excluded = ["id"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var ProductEdit = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductEdit, _React$Component);

  var _super = _createSuper(ProductEdit);

  function ProductEdit() {
    var _this;

    _classCallCheck(this, ProductEdit);

    _this = _super.call(this);
    _this.state = {
      product: {},
      isLoading: true
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProductEdit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevId = prevProps.match.params.id;
      var id = this.props.match.params.id;

      if (id !== prevId) {
        this.loadData();
      }
    }
  }, {
    key: "onChange",
    value: function onChange(event, naturalValue) {
      var _event$target = event.target,
          name = _event$target.name,
          textValue = _event$target.value;
      var value = naturalValue === undefined ? textValue : naturalValue;
      this.setState(function (prevState) {
        return {
          product: _objectSpread(_objectSpread({}, prevState.product), {}, _defineProperty({}, name, value))
        };
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var product, query, id, changes, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                product = this.state.product;
                query = "mutation updateProduct(\n      $id: Int!\n      $changes: ProductUpdateInputs!\n    ) {\n      updateProduct(\n        id: $id\n        changes: $changes\n      ) {\n        id name category price url\n      }\n    }";
                id = product.id, changes = _objectWithoutProperties(product, _excluded);
                _context.next = 6;
                return (0, _graphQLFetch.default)(query, {
                  id: id,
                  changes: changes
                });

              case 6:
                data = _context.sent;

                if (data) {
                  this.setState({
                    product: data.updateProduct
                  });
                  alert('Updated product successfully'); // eslint-disable-line no-alert
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var query, id, data, product;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "query product($id: Int!) {\n      product(id: $id) {\n        id name category price url\n      }\n    }";
                id = this.props.match.params.id;
                _context2.next = 4;
                return (0, _graphQLFetch.default)(query, {
                  id: parseInt(id, 10)
                });

              case 4:
                data = _context2.sent;

                if (data) {
                  product = data.product;
                  product.name = product.name != null ? product.name : '';
                  product.category = product.category != null ? product.category : '';
                  product.price = product.price != null ? product.price : '';
                  product.url = product.url != null ? product.url : '';
                  this.setState({
                    product: product,
                    isLoading: false
                  });
                } else {
                  this.setState({
                    product: {},
                    isLoading: false
                  });
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          id = _this$state.product.id,
          isLoading = _this$state.isLoading;
      var propsId = this.props.match.params.id;

      if (id == null) {
        if (isLoading) {
          return /*#__PURE__*/_react.default.createElement("h3", null, "Loading Product details...");
        }

        if (propsId != null) {
          return /*#__PURE__*/_react.default.createElement("h3", null, "Product with ID ".concat(propsId, " not found."));
        }

        return null;
      }

      var _this$state$product = this.state.product,
          name = _this$state$product.name,
          category = _this$state$product.category,
          price = _this$state$product.price,
          url = _this$state$product.url;
      return /*#__PURE__*/_react.default.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "edit-form"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Editing product: ".concat(id)), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        className: "padding-right-20"
      }, "Name"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
        name: "name",
        value: name,
        onChange: this.onChange,
        key: id
      }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        className: "padding-right-20"
      }, "Category"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("select", {
        name: "category",
        value: category,
        className: "add-product-form-select",
        onChange: this.onChange
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
      }, "Accessories")))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        className: "padding-right-20"
      }, "Price"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_NumInput.default, {
        name: "price",
        value: price,
        onChange: this.onChange,
        key: id,
        isDecimal: true
      }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", {
        className: "padding-right-20"
      }, "Image Url"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_TextInput.default, {
        name: "url",
        value: url,
        onChange: this.onChange,
        key: id
      }))), /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("button", {
        type: "submit",
        className: "submit-button submit-button-dark"
      }, "Submit"))))));
    }
  }]);

  return ProductEdit;
}(_react.default.Component);

exports.default = ProductEdit;