"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

var _upload = _interopRequireDefault(require("./upload"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;
var TextArea = _antd.Input.TextArea,
    Search = _antd.Input.Search;
var CheckboxGroup = _antd.Checkbox.Group;
var RadioGroup = _antd.Radio.Group;
var RangePicker = _antd.DatePicker.RangePicker;
/*
 * SearchForm 表单
 * author：徐静
 * date：2020.05.08
 * */

var MyForm = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MyForm, _React$Component);

  function MyForm(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.resizeHeight = function () {
      if (_this.formItemBox) {
        try {
          var formItemBox = _this.formItemBox.current;
          if (!formItemBox) return;
          var documentHeight = document.documentElement.clientHeight || document.body.clientHeight;
          var formItemBoxHeight = formItemBox.offsetHeight;
          var formItemBoxScrollHeight = formItemBox.scrollHeight;

          if (formItemBoxHeight + 200 > documentHeight || formItemBoxScrollHeight > formItemBoxHeight) {
            formItemBox.style.maxHeight = document.documentElement.clientHeight - 220 + "px";
          } else if (formItemBoxScrollHeight <= formItemBoxHeight) {
            formItemBox.style.maxHeight = formItemBoxScrollHeight + "px";
          }
        } catch (e) {
          console.log("重置高度异常：", e);
        }
      }
    };

    _this.handleSubmit = function (values, customFun) {
      // 调用父组件
      if (customFun) {
        customFun(_objectSpread({}, values));
      } else {
        _this.props.onOk(_objectSpread({}, values));
      }
    };

    _this.returnRoles = function (rules) {
      var newRules = [];

      if (rules) {
        rules.map(function (item) {
          var obj = _objectSpread({}, item);

          if (item.validator) {
            obj.validator = function (rule, value, callback) {
              return item.validator(rule, value, callback, _this.props.form);
            };

            newRules.push(_objectSpread({}, obj));
          } else {
            newRules.push(_objectSpread({}, item));
          }

          return false;
        });
      }

      return newRules;
    };

    _this.getField = function (item) {
      switch (item.type) {
        case "text":
          return /*#__PURE__*/_react["default"].createElement(_antd.Input, _extends({}, item, {
            //由于input有很多衍生属性：例如 addonAfter
            disabled: item.disabled,
            onChange: function onChange(e) {
              item.onChange && item.onChange(e, _this.formRef);
            },
            placeholder: item.placeholder,
            style: item.itemInputStyle
          }));

        case "number":
          return /*#__PURE__*/_react["default"].createElement(_antd.InputNumber, _extends({}, item, {
            disabled: item.disabled,
            max: item.max ? item.max : Infinity,
            min: item.min ? item.min : -Infinity,
            onChange: function onChange(value) {
              item.onChange && item.onChange(value, _this.formRef);
            },
            placeholder: item.placeholder,
            style: item.itemInputStyle
          }));

        case "password":
          return /*#__PURE__*/_react["default"].createElement(_antd.Input, _extends({}, item, {
            type: "password",
            autoComplete: "new-password",
            disabled: item.disabled,
            onChange: function onChange(e) {
              item.onChange && item.onChange(e, _this.formRef);
            },
            placeholder: item.placeholder,
            style: item.itemInputStyle
          }));

        /* 发送验证码 */

        case "verify":
          return /*#__PURE__*/_react["default"].createElement(Search, _extends({}, item, {
            className: "verify",
            disabled: false,
            enterButton: _this.state.tipTxt,
            onSearch: function onSearch(value, e) {
              var btn = e.target;

              if (e.target.tagName === "BUTTON") {
                item.onSearch && item.onSearch(value, _this.formRef, function () {
                  // (发送验证码)请求成功回调
                  btn.disabled = true; // 禁用按钮

                  btn.classname = "disabled"; // 显示60s倒计时

                  _this.setState({
                    seconds: 60,
                    tipTxt: "60s"
                  });

                  var timer = setInterval(function () {
                    _this.setState(function (preState) {
                      return {
                        seconds: preState.seconds - 1,
                        tipTxt: _this.state.seconds - 1 + "s"
                      };
                    }, function () {
                      if (_this.state.seconds < 0) {
                        btn.disabled = false; // 恢复按钮

                        btn.classname = "";
                        clearInterval(timer);

                        _this.setState({
                          seconds: 60,
                          tipTxt: "点击发送"
                        });
                      }
                    });
                  }, 1000);
                });
              }
            },
            placeholder: item.placeholder,
            style: item.itemInputStyle
          }));

        case "textarea":
          return /*#__PURE__*/_react["default"].createElement(TextArea, _extends({}, item, {
            autosize: {
              minRows: item.rows || 2,
              maxRows: 6
            },
            disabled: item.disabled,
            onChange: function onChange(e) {
              item.onChange && item.onChange(e, _this.formRef);
            },
            rows: item.rows,
            placeholder: item.placeholder,
            style: item.itemInputStyle
          }));

        /* 单选框 */

        case "radio":
          return /*#__PURE__*/_react["default"].createElement(RadioGroup, _extends({}, item, {
            buttonStyle: "outline",
            onChange: function onChange(e) {
              item.onChange && item.onChange(e, _this.formRef);
            },
            style: item.itemInputStyle
          }), item.options && item.options.map(function (op) {
            return /*#__PURE__*/_react["default"].createElement(_antd.Radio, {
              key: op.value,
              disabled: item.disabled,
              value: op.value
            }, op.label);
          }));

        /* 复选框 */

        case "checkbox":
          return /*#__PURE__*/_react["default"].createElement(CheckboxGroup, _extends({}, item, {
            disabled: item.disabled,
            onChange: function onChange(e) {
              item.onChange && item.onChange(e, _this.formRef);
            },
            options: item.options,
            style: item.itemInputStyle
          }));

        /* 下拉框 */

        case "select":
          return /*#__PURE__*/_react["default"].createElement(_antd.Select, _extends({}, item, {
            //由于select有很多衍生属性：例如 onSearch
            suffixIcon: /*#__PURE__*/_react["default"].createElement(_icons.CaretDownOutlined, null),
            disabled: item.disabled,
            notFoundContent: "\u65E0" // 使单选模式可搜索
            ,
            showSearch: item.showSearch || false //是否根据输入项进行筛选
            ,
            filterOption: function filterOption(input, option) {
              if (item.filterOption) {
                return item.filterOption(input, option);
              }

              return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
            },
            onChange: function onChange(value, option) {
              item.onChange && item.onChange(value, option, _this.formRef);
            },
            placeholder: item.placeholder,
            style: item.itemInputStyle
          }), item.options && item.options.map(function (op) {
            return /*#__PURE__*/_react["default"].createElement(Option, {
              key: op.value,
              value: op.value
            }, op.label);
          }));

        /* 日期 */

        case "date":
          // 注：提交方法传出的date值是moment格式
          return /*#__PURE__*/_react["default"].createElement(_antd.DatePicker, _extends({}, item, {
            disabled: item.disabled,
            disabledDate: item.disabledDate //禁用到 今天：(current)=>{return current && current < moment().endOf('day')}
            //禁用到 今天的前一天：(current)=>{return current && current < moment().subtract(1, 'days')}
            ,
            onChange: function onChange(date, dateString) {
              item.onChange && item.onChange(date, dateString, _this.formRef);
            },
            placeholder: item.placeholder,
            showTime: item.showTime ? item.showTime : false // item.showTime:{defaultValue: moment('00:00:00', 'HH:mm:ss'),format: 'HH:mm:ss'}
            ,
            picker: item.picker || "date" // picker:'date' 'week' 'month' 'quarter' 'year'
            // mode={item.mode||'date'} // mode:'time' 'date' 'month' 'year' 'decade'
            ,
            style: item.itemInputStyle
          }));

        /* 时间范围 */

        case "dateRange":
          return /*#__PURE__*/_react["default"].createElement(RangePicker, _extends({}, item, {
            disabled: item.disabled,
            disabledDate: item.disabledDate,
            onChange: function onChange(date, dateString) {
              item.onChange && item.onChange(date, dateString, _this.formRef);
            },
            placeholder: item.placeholder || ["开始日期", "结束日期"],
            format: item.format || "YYYY-MM-DD",
            showTime: item.showTime || false // showTime={{defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')], format: 'HH:mm:ss'}}
            ,
            picker: item.picker || "date" // picker:'date' 'week' 'month' 'year'
            // mode={item.mode||['date','date']} // mode:'time' 'date' 'month' 'year' 'decade'
            ,
            style: _objectSpread({
              width: "100%"
            }, item.itemInputStyle)
          }));

        /* 上传文件（常用于txt、word、excel、zip） */

        case "file":
          return /*#__PURE__*/_react["default"].createElement(_upload["default"], _extends({}, item, {
            form: _this.formRef
          }));
        // 自定义组件

        case "custom":
          return item.render(_this.formRef);

        default:
          return null;
      }
    };

    _this.state = {
      // 验证码
      seconds: 60,
      tipTxt: "点击发送"
    };
    _this.formRef = null;
    _this.formItemBox = null;
    return _this;
  }
  /* 设置内容高度 */


  var _proto = MyForm.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        _this$props$formLayou = _this$props.formLayout,
        formLayout = _this$props$formLayou === void 0 ? "horizontal" : _this$props$formLayou,
        _this$props$formItemL = _this$props.formItemLayout,
        formItemLayout = _this$props$formItemL === void 0 ? {
      labelCol: {
        span: 3
      },
      wrapperCol: {
        span: 21
      }
    } : _this$props$formItemL,
        _this$props$hideRequi = _this$props.hideRequiredMark,
        hideRequiredMark = _this$props$hideRequi === void 0 ? false : _this$props$hideRequi,
        _this$props$initialVa = _this$props.initialValues,
        initialValues = _this$props$initialVa === void 0 ? {} : _this$props$initialVa,
        _this$props$buttonCon = _this$props.buttonConfig,
        buttonConfig = _this$props$buttonCon === void 0 ? {
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
      style: {} //可控制按钮居中、右对齐（ justify-content: flex-end;）

    } : _this$props$buttonCon,
        _this$props$itemList = _this$props.itemList,
        itemList = _this$props$itemList === void 0 ? [] : _this$props$itemList,
        _this$props$itemStyle = _this$props.itemStyle,
        itemStyle = _this$props$itemStyle === void 0 ? {} : _this$props$itemStyle,
        _this$props$okText = _this$props.okText,
        okText = _this$props$okText === void 0 ? "确定" : _this$props$okText,
        _this$props$cancelTex = _this$props.cancelText,
        cancelText = _this$props$cancelTex === void 0 ? "取消" : _this$props$cancelTex,
        _this$props$onOk = _this$props.onOk,
        onOk = _this$props$onOk === void 0 ? function () {} : _this$props$onOk,
        _this$props$onCancel = _this$props.onCancel,
        onCancel = _this$props$onCancel === void 0 ? function () {} : _this$props$onCancel;
    return /*#__PURE__*/_react["default"].createElement(_antd.Form, {
      layout: formLayout,
      initialValues: initialValues,
      hideRequiredMark: hideRequiredMark,
      onFinish: function onFinish(e) {
        return _this2.handleSubmit(e);
      },
      ref: function ref(ins) {
        return _this2.formRef = ins;
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "form-item-box " + (formLayout === "double" ? "double-layout" : ""),
      ref: function ref(ins) {
        return _this2.formItemBox = ins;
      }
    }, itemList.map(function (item) {
      var display = "flex";

      if (item.visible === false) {
        display = "none";
      } else if (formLayout === "inline") {
        display = "inline-block";
      } else if (formLayout === "double" || formLayout === "vertical") {
        display = "flex";
      }

      return /*#__PURE__*/_react["default"].createElement(FormItem, _extends({}, item, formItemLayout, item.formItemLayout, {
        key: item.keyName // label 标签的文本
        ,
        hasFeedback: item.hasFeedback !== false,
        label: item.name,
        name: item.keyName,
        rules: item.rules ? item.rules : [],
        initialValue: item.defaultValue ? item.defaultValue : "" //如果与 Form 的 initialValues 冲突则以 Form 为准
        ,
        style: _objectSpread(_objectSpread({
          display: display
        }, itemStyle), item.itemStyle)
      }), _this2.getField(item));
    })), /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: "action-button-container"
    }, buttonConfig), buttonConfig && buttonConfig.beforeCustomChildren ? buttonConfig.beforeCustomChildren() : null, buttonConfig && buttonConfig.showCancelBtn ? /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      onClick: function onClick() {
        return onCancel && onCancel();
      }
    }, cancelText || "取消") : null, buttonConfig && buttonConfig.showOkBtn ? /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      htmlType: "submit",
      type: "primary",
      style: {
        marginLeft: 16
      }
    }, okText || "确定") : null, buttonConfig && buttonConfig.afterCustomChildren ? buttonConfig.afterCustomChildren() : null));
  };

  return MyForm;
}(_react["default"].Component);

exports["default"] = MyForm;
MyForm.propTypes = {
  formLayout: _propTypes["default"].string,
  formItemLayout: _propTypes["default"].object,
  hideRequiredMark: _propTypes["default"].bool,
  initialValues: _propTypes["default"].object,
  buttonConfig: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].bool]),
  itemList: _propTypes["default"].array,
  itemStyle: _propTypes["default"].object,
  okText: _propTypes["default"].string,
  cancelText: _propTypes["default"].string,
  onOk: _propTypes["default"].func,
  onCancel: _propTypes["default"].func
};
MyForm.defaultProps = {
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
    style: {} //可控制按钮居中、右对齐（ justify-content: flex-end;）

  },
  itemList: [],
  itemStyle: {},
  okText: "确定",
  cancelText: "取消",
  onOk: function onOk() {},
  // 提交表单执行回调
  onCancel: function onCancel() {} // 取消表单执行回调

};