function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from "react";
import moment from "moment";
import { Form, Row, Col, Input, InputNumber, Select, DatePicker, Button, Switch, Radio, TreeSelect } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import CheckTagGroup from "../CheckTagGroup/checkTagGroup";
var FormItem = Form.Item;
var Option = Select.Option;
var RadioGroup = Radio.Group;
var TreeNode = TreeSelect.TreeNode;
var RangePicker = DatePicker.RangePicker;
/*
 * SearchForm 高级搜索表单
 * author：徐静
 * date：2020.05.08
 * */

var SearchForm = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(SearchForm, _React$Component);

  function SearchForm(_props) {
    var _this;

    _this = _React$Component.call(this, _props) || this;

    _this.initJson = function () {
      _this.formRef && _this.formRef.validateFields().then(function (values) {
        _this.json = values;
      });
    };

    _this.toggle = function () {
      _this.setState({
        expand: !_this.state.expand
      });
    };

    _this.handleSearch = function (values) {
      Object.keys(values).map(function (i) {
        if (!moment.isMoment(values[i])) {
          _this.json[i] = values[i];
        }

        return false;
      });
      Object.keys(_this.json).map(function (i) {
        if (_this.json[i] === undefined) {
          _this.json[i] = "";
        }

        return false;
      }); // console.log(this.json, "this.json",values);
      // 调用父组件

      if (_this.props.search) {
        _this.props.search(_objectSpread({}, _this.json), false);
      }
    };

    _this.handleReset = function () {
      _this.json = {};

      _this.formRef.resetFields(); // 获取全部组件的值


      var json = _this.formRef.getFieldsValue();

      if (_this.props.reset) {
        _this.props.reset(_objectSpread({}, json));
      } // resetType：1:重置后自动查询（默认）  2：重置后不自动查询


      if (_this.props.resetType === 1 && _this.props.search) {
        // true：该查询属于重置查询
        _this.props.search(_objectSpread({}, json), true);
      }
    };

    _this.getField = function (item) {
      if (item === void 0) {
        item = {};
      }

      var _this$props = _this.props,
          buttonConfig = _this$props.buttonConfig,
          buttonsColSpan = _this$props.buttonsColSpan; // 默认折叠时仅留一行展示

      var _buttonConfig$collaps = buttonConfig.collapsedShowRow,
          collapsedShowRow = _buttonConfig$collaps === void 0 ? 1 : _buttonConfig$collaps; // 初始化this.json

      _this.json[item.keyName] = _this.json[item.keyName] || item.defaultValue || "";

      var FormItemContainer = function FormItemContainer(_ref) {
        var props = _extends({}, _ref);

        var item = props.item,
            children = props.children;
        return /*#__PURE__*/React.createElement(Col, {
          key: item.keyName,
          xl: item.colSpan || 4 // ≥1200px
          ,
          lg: item.colSpan || 4 // ≥992px
          ,
          md: item.mdColSpan || 6 // ≥768px
          ,
          sm: item.smColSpan || 8 // ≥576px
          ,
          xs: item.xsColSpan || 12 // <576px
          ,
          style: {
            display: _this.totalColSpan <= 24 * collapsedShowRow - buttonsColSpan || _this.state.expand ? "block" : "none"
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "form-item-container"
        }, /*#__PURE__*/React.createElement(FormItem, _extends({}, item, {
          label: item.name,
          name: item.keyName,
          rules: item.rules ? item.rules : [],
          initialValue: item.defaultValue ? item.defaultValue : "" //如果与 Form 的 initialValues 冲突则以 Form 为准
          ,
          style: item.itemStyle
        }), children)));
      };

      switch (item.type) {
        case "text":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(Input, _extends({}, item, {
            //由于input有很多衍生属性：例如 addonAfter
            disabled: item.disabled,
            onChange: function onChange(e) {
              item.onChange && item.onChange(e, _this.formRef);
            },
            placeholder: item.placeholder,
            style: item.itemInputStyle
          })));

        case "number":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(InputNumber, _extends({}, item, {
            disabled: item.disabled,
            max: item.max,
            min: item.min,
            onChange: function onChange(e) {
              item.onChange && item.onChange(e, _this.formRef);
            },
            placeholder: item.placeholder,
            style: item.itemInputStyle
          })));

        case "switch":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(Switch, _extends({}, item, {
            checkedChildren: "ON",
            unCheckedChildren: "OFF"
          })));

        case "radio":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(RadioGroup, _extends({}, item, {
            buttonStyle: "outline",
            disabled: item.disabled,
            onChange: function onChange(e) {
              item.onChange && item.onChange(e, _this.formRef);
            },
            style: item.itemInputStyle
          }), item.options && item.options.map(function (op) {
            return /*#__PURE__*/React.createElement(Radio, {
              key: op.value,
              disabled: item.disabled,
              value: op.value
            }, op.label);
          })));
        // 定制单选tag（带取消选中效果）

        case "radioTag":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(CheckTagGroup, _extends({}, item, {
            disabled: item.disabled,
            onChange: function onChange(checkedList) {
              if (checkedList && checkedList.length > 0) {
                // 选中某一个tag
                _this.json[item.keyName] = checkedList[0];
              } else {
                // 取消某一个tag
                _this.json[item.keyName] = "";
              }

              item.onChange && item.onChange(checkedList);
            },
            style: _objectSpread({
              display: "flex",
              flexWrap: "nowrap"
            }, item.itemInputStyle),
            tags: item.options,
            tagStyle: {
              width: "100%",
              height: 30,
              lineHeight: "30px",
              textAlign: "center",
              border: "1px solid #ddd"
            },
            tagWrapStyle: {
              width: "30%",
              marginRight: "3%"
            },
            type: "radioWithCancel"
          })));

        case "select":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(Select, _extends({}, item, {
            suffixIcon: /*#__PURE__*/React.createElement(CaretDownOutlined, null),
            key: item.value,
            disabled: item.disabled // 使单选模式可搜索
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
            return /*#__PURE__*/React.createElement(Option, _extends({}, op, {
              key: op.value,
              value: op.value
            }), op.label);
          })));

        case "selectTree":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(TreeSelect, _extends({}, item, {
            allowClear: true,
            dropdownStyle: {
              maxHeight: 300,
              overflow: "auto"
            },
            multiple: true,
            placeholder: "\u8BF7\u9009\u62E9\u5750\u5E2D",
            showSearch: true,
            treeCheckable: true
          }), item.options && item.options.map(function (op) {
            return /*#__PURE__*/React.createElement(TreeNode, {
              key: op.id,
              selectable: false,
              title: op.name,
              value: op.name
            }, op.member && op.member.map(function (subItem) {
              return /*#__PURE__*/React.createElement(TreeNode, {
                key: subItem.id,
                title: subItem.name,
                value: subItem.id
              });
            }));
          })));

        case "date":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(DatePicker, _extends({}, item, {
            disabled: item.disabled,
            disabledDate: item.disabledDate //禁用到 今天：(current)=>{return current && current < moment().endOf('day')}
            //禁用到 今天的前一天：(current)=>{return current && current < moment().subtract(1, 'days')}
            ,
            onChange: function onChange(date, dateString) {
              _this.json[item.keyName] = dateString;
              item.onChange && item.onChange(date, dateString, _this.formRef);
            },
            placeholder: item.placeholder,
            showTime: item.showTime || false // item.showTime:{defaultValue: moment('00:00:00', 'HH:mm:ss'),format: 'HH:mm:ss'}
            ,
            picker: item.picker || "date" // picker:'date' 'week' 'month' 'quarter' 'year'
            ,
            style: item.itemInputStyle
          })));

        case "dateRange":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, /*#__PURE__*/React.createElement(RangePicker, _extends({}, item, {
            disabled: item.disabled,
            disabledDate: item.disabledDate,
            onChange: function onChange(date, dateString) {
              _this.json[item.keyName] = dateString;

              if (item.beginKeyName) {
                _this.json[item.beginKeyName] = dateString[0];
              }

              if (item.endKeyName) {
                _this.json[item.endKeyName] = dateString[1];
              }

              item.onChange && item.onChange(date, dateString, _this.formRef);
            },
            placeholder: item.placeholder || ["开始日期", "结束日期"],
            format: item.format || "YYYY-MM-DD",
            showTime: item.showTime || false // showTime={{defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('23:59:59', 'HH:mm:ss')], format: 'HH:mm:ss'}}
            ,
            picker: item.picker || "date" // picker:'date' 'week' 'month' 'year'
            ,
            style: item.itemInputStyle
          })));

        case "custom":
          return /*#__PURE__*/React.createElement(FormItemContainer, {
            item: item
          }, item.render(_this.formRef));

        default:
          return null;
      }
    };

    _this.state = {
      expand: _this.props.buttonConfig.defaultExpand || true // 当前折叠状态

    };
    _this.totalColSpan = 0;
    _this.json = {}; // 提交时获取的表单值

    _this.formRef = null;
    return _this;
  }

  var _proto = SearchForm.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.initJson();
  } // 初试化Json
  ;

  // 获取所有表单项
  _proto.getFields = function getFields() {
    var config = this.props.config;
    var children = [];
    this.totalColSpan = 0; // 遍历配置列表

    for (var i = 0, len = config.length; i < len; i++) {
      var item = config[i]; // totalColSpan用于计算折叠，仅留一行展示

      this.totalColSpan += item.colSpan ? item.colSpan : 4;
      children.push(this.getField(item));
    }

    return children;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        _this$props2$wrapForm = _this$props2.wrapFormClassName,
        wrapFormClassName = _this$props2$wrapForm === void 0 ? "" : _this$props2$wrapForm,
        _this$props2$initialV = _this$props2.initialValues,
        initialValues = _this$props2$initialV === void 0 ? {} : _this$props2$initialV,
        _this$props2$buttonCo = _this$props2.buttonConfig,
        buttonConfig = _this$props2$buttonCo === void 0 ? {
      span: 4,
      showSearchBtn: true,
      showResetBtn: true,
      customChildren: function customChildren(form) {
        return null;
      },
      collapse: false,
      // 是否允许折叠
      collapsedShowRow: 1,
      // 折叠时展示几行
      defaultExpand: true,
      // 初始默认折叠状态：true:展开
      style: {}
    } : _this$props2$buttonCo;
    return /*#__PURE__*/React.createElement(Form, {
      className: "ant-advanced-search-form " + wrapFormClassName,
      layout: "inline",
      initialValues: initialValues,
      onFinish: function onFinish(e) {
        return _this2.handleSearch(e);
      },
      ref: function ref(ins) {
        return _this2.formRef = ins;
      }
    }, /*#__PURE__*/React.createElement(Row, {
      gutter: 0,
      justify: this.props.justify,
      type: "flex",
      className: "main"
    }, this.getFields(), /*#__PURE__*/React.createElement(Col, _extends({
      span: 4,
      className: "btn-container"
    }, buttonConfig), buttonConfig.showSearchBtn ? /*#__PURE__*/React.createElement(Button, {
      htmlType: "submit",
      type: "primary"
    }, "\u67E5\u8BE2") : null, buttonConfig.showResetBtn ? /*#__PURE__*/React.createElement(Button, {
      onClick: function onClick() {
        return _this2.handleReset();
      },
      style: {
        marginLeft: 8
      }
    }, "\u91CD\u7F6E") : null, buttonConfig.customChildren ? buttonConfig.customChildren(this.formRef) : null, buttonConfig.collapse ? /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: this.toggle,
      style: {
        whiteSpace: "nowrap"
      }
    }, this.state.expand ? "收起" : "展开", this.state.expand ? /*#__PURE__*/React.createElement(CaretUpOutlined, null) : /*#__PURE__*/React.createElement(CaretDownOutlined, null))) : null)));
  };

  return SearchForm;
}(React.Component);

SearchForm.propTypes = {
  buttonConfig: PropTypes.object,
  initialValues: PropTypes.object,
  config: PropTypes.array,
  justify: PropTypes.oneOf(["start", "center", "end"]),
  wrapFormClassName: PropTypes.string,
  search: PropTypes.func,
  reset: PropTypes.func,
  resetType: PropTypes.number
};
SearchForm.defaultProps = {
  buttonConfig: {
    // 搜索按钮配置
    span: 4,
    showSearchBtn: true,
    // 是否显示搜索按钮
    showResetBtn: true,
    // 是否显示重置按钮
    customChildren: function customChildren(form) {
      return null;
    },
    // 配置自定义按钮
    collapse: false,
    // 是否允许折叠
    collapsedShowRow: 1,
    // 折叠时展示几行
    defaultExpand: true,
    // 初始默认折叠状态：true:展开
    style: {}
  },
  initialValues: {},
  //form表单初始值（如果与 FormItem 的 initialValue 冲突则以 Form 为准）
  config: [],
  // 搜索表单项配置
  justify: "start",
  // 对齐方式
  wrapFormClassName: "",
  // 外层form表单类名
  search: function search(json, isReset) {// 搜索回调
  },
  reset: function reset(json) {// 重置回调
  },
  resetType: 1 // 1:重置后自动查询  2：重置后不自动查询

};
export { SearchForm as default };