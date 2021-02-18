"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _descriptions = _interopRequireDefault(require("./descriptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * 弹出框详情组件.
 * User: 徐静
 * Date: 2020/6/30
 */
var PopDetailDescriptions = /*#__PURE__*/function (_Component) {
  _inheritsLoose(PopDetailDescriptions, _Component);

  function PopDetailDescriptions(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      // 弹出框显示/隐藏
      modalVisible: false
    };
    return _this;
  }

  var _proto = PopDetailDescriptions.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.modalVisible !== nextProps.modalVisible) {
      // 显示Modal
      this.setState({
        modalVisible: nextProps.modalVisible
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props$initData = this.props.initData,
        _this$props$initData$ = _this$props$initData.title,
        title = _this$props$initData$ === void 0 ? '' : _this$props$initData$,
        _this$props$initData$2 = _this$props$initData.detailTitle,
        detailTitle = _this$props$initData$2 === void 0 ? '' : _this$props$initData$2,
        _this$props$initData$3 = _this$props$initData.modalWidth,
        modalWidth = _this$props$initData$3 === void 0 ? 560 : _this$props$initData$3,
        _this$props$initData$4 = _this$props$initData.closable,
        closable = _this$props$initData$4 === void 0 ? true : _this$props$initData$4,
        _this$props$initData$5 = _this$props$initData.maskClosable,
        maskClosable = _this$props$initData$5 === void 0 ? false : _this$props$initData$5,
        _this$props$initData$6 = _this$props$initData.destroyOnClose,
        destroyOnClose = _this$props$initData$6 === void 0 ? true : _this$props$initData$6,
        _this$props$initData$7 = _this$props$initData.buttonConfig,
        buttonConfig = _this$props$initData$7 === void 0 ? {
      style: {} //可控制按钮居中、右对齐（ justify-content: flex-end;）

    } : _this$props$initData$7,
        _this$props$initData$8 = _this$props$initData.items,
        items = _this$props$initData$8 === void 0 ? [] : _this$props$initData$8,
        _this$props$initData$9 = _this$props$initData.data,
        data = _this$props$initData$9 === void 0 ? {} : _this$props$initData$9,
        _this$props$initData$10 = _this$props$initData.onCancel,
        _onCancel = _this$props$initData$10 === void 0 ? function () {} : _this$props$initData$10;

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "modal-pupModal"
    }, /*#__PURE__*/_react["default"].createElement(_antd.Modal, _extends({}, this.props.initData, {
      title: title,
      visible: this.state.modalVisible,
      className: "pop-descriptions-modal " + this.props.className,
      width: modalWidth,
      centered: true,
      footer: null,
      closable: closable,
      maskClosable: maskClosable,
      destroyOnClose: destroyOnClose,
      onCancel: function onCancel() {
        _onCancel();
      },
      getContainer: this.props.getContainer,
      ref: function ref(ins) {
        _this2.modalInstance = ins;
      }
    }), /*#__PURE__*/_react["default"].createElement(_descriptions["default"], _extends({}, this.props.initData, {
      className: "pop-descriptions-content " + this.props.initData.className,
      items: items,
      data: data,
      title: detailTitle
    })), buttonConfig ? /*#__PURE__*/_react["default"].createElement("div", _extends({}, buttonConfig, {
      className: "descriptions-action-button-container " + buttonConfig.className
    }), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      type: "primary",
      onClick: function onClick() {
        _onCancel();
      }
    }, "\u77E5\u9053\u5566")) : null));
  };

  return PopDetailDescriptions;
}(_react.Component);

exports["default"] = PopDetailDescriptions;
PopDetailDescriptions.propTypes = {
  modalVisible: _propTypes["default"].bool,
  initData: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    modalWidth: _propTypes["default"].number,
    closable: _propTypes["default"].bool,
    maskClosable: _propTypes["default"].bool,
    destroyOnClose: _propTypes["default"].bool,
    detailTitle: _propTypes["default"].string,
    items: _propTypes["default"].array,
    data: _propTypes["default"].object,
    onCancel: _propTypes["default"].func
  }),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  getContainer: _propTypes["default"].func
};
PopDetailDescriptions.defaultProps = {
  modalVisible: false,
  initData: {
    title: '',
    modalWidth: 560,
    // 弹框宽度
    closable: true,
    // 是否显示右上角的关闭按钮
    maskClosable: false,
    // 点击蒙层是否允许关闭
    destroyOnClose: true,
    // 关闭时销毁 Modal 里的子元素
    detailTitle: '',
    items: [],
    data: {},
    onCancel: function onCancel() {}
  },
  children: [],
  className: '',
  getContainer: function getContainer() {
    return document.body;
  } //指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom

};