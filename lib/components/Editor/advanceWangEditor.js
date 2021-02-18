"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _wangEditor = _interopRequireDefault(require("./wangEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

// eslint-disable-line
var AdvanceWangEditor = /*#__PURE__*/function (_Component) {
  _inheritsLoose(AdvanceWangEditor, _Component);

  function AdvanceWangEditor(props, context) {
    var _this;

    _this = _Component.call(this, props, context) || this;

    _this.returnHtmlContent = function () {
      if (!_this.editorContent || _this.editorContent == "<p></p>" || _this.editorContent == "<p><br></p>") {
        return "";
      }

      return _this.editorContent;
    };

    _this.state = {};
    _this.editorContent = "";
    _this.editor = {};
    return _this;
  }

  var _proto = AdvanceWangEditor.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var elem = this.refs.editorElem;
    this.editor = new _wangEditor["default"](elem); // 使用 onchange 函数监听内容的变化，并实时更新到 state 中

    this.editor.customConfig = _objectSpread(_objectSpread({}, this.props), {}, {
      onchange: function onchange(html) {
        _this2.editorContent = html; // console.log(html);

        var content = "";

        if (!_this2.editorContent || _this2.editorContent == "<p></p>" || _this2.editorContent == "<p><br></p>") {
          content = "";
        } else {
          content = _this2.editorContent;
        }

        if (_this2.props.onChange) {
          _this2.props.onChange(content);
        }
      },
      menus: this.props.menus || ["head", "bold", "fontSize", "fontName", "italic", "underline", "strikeThrough", "foreColor", "backColor", "link", "list", "justify", "quote", "emoticon", "image", "upFile", "undo", "redo"],
      uploadFileServer: this.props.uploadFileServer || "",
      // 上传文件地址
      uploadFileParams: this.props.uploadFileParams || {},
      // 上传文件参数
      uploadFileHooks: this.props.uploadFileHooks || {},
      // 上传文件回调钩子
      uploadImgServer: this.props.uploadImgServer || "",
      // 上传图片地址
      uploadImgParams: this.props.uploadImgParams || {},
      // 上传图片参数
      uploadImgHooks: this.props.uploadImgHooks || {} // 上传图片回调钩子

    });
    this.editor.create();
    this.editor.txt.html(this.props.value || "");
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value && nextProps.value !== this.editorContent) {
      this.editor.txt.html(nextProps.value || "");
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "App"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      ref: "editorElem",
      style: _objectSpread({
        textAlign: "left",
        width: "100%",
        minWidth: "620px"
      }, this.props.style)
    }));
  };

  return AdvanceWangEditor;
}(_react.Component);

exports["default"] = AdvanceWangEditor;