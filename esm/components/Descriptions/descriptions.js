function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from "react";
import { Descriptions, Tooltip } from "antd";
import PropTypes from 'prop-types';
/*
 * SearchForm 描述详情
 * author：徐静
 * date：2020.06.29
 * */

var DetailDescriptions = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DetailDescriptions, _React$Component);

  function DetailDescriptions(props) {
    return _React$Component.call(this, props) || this;
  }

  var _proto = DetailDescriptions.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$ellipsis = _this$props.ellipsis,
        ellipsis = _this$props$ellipsis === void 0 ? false : _this$props$ellipsis,
        _this$props$items = _this$props.items,
        items = _this$props$items === void 0 ? [// 详情每一项配置
    {
      key: "name",
      label: "任务名称",
      span: 2,
      ellipsis: true
    }] : _this$props$items,
        _this$props$data = _this$props.data,
        data = _this$props$data === void 0 ? {} : _this$props$data;
    return /*#__PURE__*/React.createElement(Descriptions, _extends({}, this.props, {
      className: "detail-layout " + this.props.className
    }), items.map(function (info) {
      var value = info.value || data[info.key];
      return /*#__PURE__*/React.createElement(Descriptions.Item, {
        label: info.label,
        span: info.span
      }, ellipsis && info.ellipsis !== false || info.ellipsis ? /*#__PURE__*/React.createElement("span", {
        className: "descriptions-ellipsis"
      }, /*#__PURE__*/React.createElement(Tooltip, {
        title: value,
        placement: "topLeft"
      }, /*#__PURE__*/React.createElement("span", null, value))) : value);
    }));
  };

  return DetailDescriptions;
}(React.Component);

DetailDescriptions.propTypes = {
  title: PropTypes.node,
  bordered: PropTypes.bool,
  ellipsis: PropTypes.bool,
  column: PropTypes.number,
  size: PropTypes.string,
  layout: PropTypes.string,
  items: PropTypes.array,
  data: PropTypes.object
};
DetailDescriptions.defaultProps = {
  title: "",
  bordered: false,
  ellipsis: false,
  //所有项单行省略
  column: 2,
  //默认两列
  size: "",
  layout: "horizontal",
  //horizontal（默认） | vertical
  items: [],
  data: {}
};
export { DetailDescriptions as default };