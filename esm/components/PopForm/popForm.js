function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { Modal } from "antd";
import PropTypes from "prop-types";
import MyForm from "./form";
/**
 * 弹出框表单组件.
 * User: 王洪瑞/3153981409@qq.com
 * Date: 2019/2/18
 * Time: 16:12
 */

var PopForm = /*#__PURE__*/function (_Component) {
  _inheritsLoose(PopForm, _Component);

  function PopForm(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      // 弹出框显示/隐藏
      modalVisible: false
    };
    return _this;
  }

  var _proto = PopForm.prototype;

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
        _this$props$initData$2 = _this$props$initData.modalWidth,
        modalWidth = _this$props$initData$2 === void 0 ? 560 : _this$props$initData$2,
        _this$props$initData$3 = _this$props$initData.closable,
        closable = _this$props$initData$3 === void 0 ? true : _this$props$initData$3,
        _this$props$initData$4 = _this$props$initData.maskClosable,
        maskClosable = _this$props$initData$4 === void 0 ? false : _this$props$initData$4,
        _this$props$initData$5 = _this$props$initData.destroyOnClose,
        destroyOnClose = _this$props$initData$5 === void 0 ? true : _this$props$initData$5,
        _this$props$initData$6 = _this$props$initData.formLayout,
        formLayout = _this$props$initData$6 === void 0 ? "horizontal" : _this$props$initData$6,
        _this$props$initData$7 = _this$props$initData.formItemLayout,
        formItemLayout = _this$props$initData$7 === void 0 ? {
      labelCol: {
        span: 3
      },
      wrapperCol: {
        span: 21
      }
    } : _this$props$initData$7,
        _this$props$initData$8 = _this$props$initData.hideRequiredMark,
        hideRequiredMark = _this$props$initData$8 === void 0 ? false : _this$props$initData$8,
        _this$props$initData$9 = _this$props$initData.initialValues,
        initialValues = _this$props$initData$9 === void 0 ? {} : _this$props$initData$9,
        _this$props$initData$10 = _this$props$initData.buttonConfig,
        buttonConfig = _this$props$initData$10 === void 0 ? {
      // 若为false则该表单没有按钮
      showCancelBtn: true,
      //是否显示取消按钮
      showOkBtn: true,
      //是否显示确定按钮
      beforeCustomChildren: function beforeCustomChildren() {
        return null;
      },
      //确定按钮之前的自定义按钮
      afterCustomChildren: function afterCustomChildren() {
        return null;
      },
      //确定按钮之后的自定义按钮
      style: {}
    } : _this$props$initData$10,
        _this$props$initData$11 = _this$props$initData.itemList,
        itemList = _this$props$initData$11 === void 0 ? [] : _this$props$initData$11,
        _this$props$initData$12 = _this$props$initData.itemStyle,
        itemStyle = _this$props$initData$12 === void 0 ? {} : _this$props$initData$12,
        _this$props$initData$13 = _this$props$initData.okText,
        okText = _this$props$initData$13 === void 0 ? "确定" : _this$props$initData$13,
        _this$props$initData$14 = _this$props$initData.cancelText,
        cancelText = _this$props$initData$14 === void 0 ? "取消" : _this$props$initData$14,
        _this$props$initData$15 = _this$props$initData.onOk,
        onOk = _this$props$initData$15 === void 0 ? function () {} : _this$props$initData$15,
        _this$props$initData$16 = _this$props$initData.onCancel,
        _onCancel = _this$props$initData$16 === void 0 ? function () {} : _this$props$initData$16;

    return /*#__PURE__*/React.createElement("div", {
      className: "modal-pupModal"
    }, /*#__PURE__*/React.createElement(Modal, _extends({}, this.props.initData, {
      title: title,
      visible: this.state.modalVisible,
      className: "pop-form-modal " + this.props.className,
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
    }), /*#__PURE__*/React.createElement("div", {
      className: "pop-form-custom-text"
    }, this.props.children), /*#__PURE__*/React.createElement(MyForm, _extends({}, this.props.initData, {
      buttonConfig: _objectSpread({
        className: "action-button-container pop-action-button-container"
      }, buttonConfig),
      ref: function ref(form) {
        return _this2.myform = form;
      }
    }))));
  };

  return PopForm;
}(Component);

PopForm.propTypes = {
  modalVisible: PropTypes.bool,
  initData: PropTypes.shape({
    title: PropTypes.string,
    modalWidth: PropTypes.number,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    destroyOnClose: PropTypes.bool,
    formLayout: PropTypes.string,
    formItemLayout: PropTypes.object,
    hideRequiredMark: PropTypes.bool,
    initialValues: PropTypes.object,
    buttonConfig: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    itemList: PropTypes.array,
    itemStyle: PropTypes.object,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
  }),
  children: PropTypes.node,
  className: PropTypes.string,
  getContainer: PropTypes.func
};
PopForm.defaultProps = {
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
    formLayout: "horizontal",
    // horizontal、vertical、inline、double
    formItemLayout: {
      labelCol: {
        span: 3
      },
      wrapperCol: {
        span: 21
      }
    },
    hideRequiredMark: false,
    //隐藏所有表单项的必选标记
    initialValues: {},
    //如果与 FormItem 的 initialValue 冲突则以 Form 为准
    buttonConfig: {
      // 若为false则该表单没有按钮
      showCancelBtn: true,
      //是否显示取消按钮
      showOkBtn: true,
      //是否显示确定按钮
      beforeCustomChildren: function beforeCustomChildren() {
        return null;
      },
      //确定按钮之前的自定义按钮
      afterCustomChildren: function afterCustomChildren() {
        return null;
      },
      //确定按钮之后的自定义按钮
      style: {}
    },
    itemList: [],
    itemStyle: {},
    okText: "确定",
    cancelText: "取消",
    onOk: function onOk() {},
    // 提交表单执行回调
    onCancel: function onCancel() {} // 取消表单执行回调

  },
  children: [],
  className: '',
  getContainer: function getContainer() {
    return document.body;
  } //指定 Modal 挂载的 HTML 节点, false 为挂载在当前 dom

};
export default PopForm;