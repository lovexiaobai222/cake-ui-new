function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from "react";
import { Transfer, Tooltip } from "antd";
import PropTypes from "prop-types";

var TransferWrap = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(TransferWrap, _React$Component);

  function TransferWrap(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleChange = function (nextTargetKeys, direction, moveKeys) {
      _this.setState({
        targetKeys: nextTargetKeys
      });

      _this.props.onChange(nextTargetKeys, direction, moveKeys);
    };

    _this.handleSelectChange = function (sourceSelectedKeys, targetSelectedKeys) {
      _this.setState({
        selectedKeys: [].concat(sourceSelectedKeys, targetSelectedKeys),
        sourceSelectedKeys: sourceSelectedKeys,
        targetSelectedKeys: targetSelectedKeys
      });
    };

    _this.dbClick = function (id) {
      if (_this.state.targetKeys.indexOf(id) === -1) {
        if (_this.state.sourceSelectedKeys.length === 0) {
          // 没有选中双击左边一条
          _this.handleChange([id].concat(_this.state.targetKeys), "right", [id]);
        } else {
          // 有选中双击左边
          _this.handleChange([].concat(_this.state.sourceSelectedKeys, _this.state.targetKeys), "right", _this.state.sourceSelectedKeys);

          var arr = _this.state.selectedKeys;

          _this.state.sourceSelectedKeys.map(function (item) {
            return arr.splice(arr.indexOf(item), 1);
          });

          _this.setState({
            selectedKeys: arr
          });
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (_this.state.targetSelectedKeys.length === 0) {
          // 没有选中双击右边一条
          var _arr = _this.state.targetKeys;

          _arr.splice(_arr.indexOf(id), 1);

          _this.handleChange(_arr, "left", [id]);
        } else {
          // 有选中双击右边
          var _arr2 = _this.state.targetKeys;

          _this.state.targetSelectedKeys.map(function (item) {
            return _arr2.splice(_arr2.indexOf(item), 1);
          });

          _this.handleChange(_arr2, "left", _this.state.targetSelectedKeys);

          var selectedArr = _this.state.selectedKeys;

          _this.state.targetSelectedKeys.map(function (item) {
            return selectedArr.splice(selectedArr.indexOf(item), 1);
          });

          _this.setState({
            selectedKeys: selectedArr
          });
        }
      }
    };

    _this.filterOption = function (inputValue, option) {
      return option.label.indexOf(inputValue) > -1;
    };

    _this.state = {
      targetKeys: _this.props.targetKeys,
      selectedKeys: [],
      sourceSelectedKeys: [],
      targetSelectedKeys: []
    };
    _this.totalColSpan = 0;
    _this.json = {}; // 提交时获取的表单值

    _this.formRef = null;
    return _this;
  }

  var _proto = TransferWrap.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        targetKeys = _this$state.targetKeys,
        selectedKeys = _this$state.selectedKeys;
    var _this$props = this.props,
        _this$props$showCheck = _this$props.showCheckbox,
        showCheckbox = _this$props$showCheck === void 0 ? false : _this$props$showCheck,
        _this$props$showSearc = _this$props.showSearch,
        showSearch = _this$props$showSearc === void 0 ? false : _this$props$showSearc,
        titles = _this$props.titles,
        dataSource = _this$props.dataSource,
        disabled = _this$props.disabled,
        onScroll = _this$props.onScroll,
        locale = _this$props.locale,
        listStyle = _this$props.listStyle,
        className = _this$props.className;
    return /*#__PURE__*/React.createElement(Transfer, {
      className: showCheckbox ? "" + className : className + " hide-transfer-checkbox",
      dataSource: dataSource,
      disabled: disabled,
      filterOption: this.filterOption,
      listStyle: listStyle,
      locale: locale,
      onChange: this.handleChange,
      onScroll: onScroll,
      onSelectChange: this.handleSelectChange,
      render: function render(item) {
        return /*#__PURE__*/React.createElement(Tooltip, {
          title: item.description
        }, /*#__PURE__*/React.createElement("span", {
          onDoubleClick: function onDoubleClick() {
            return _this2.dbClick(item.key);
          }
        }, item.label));
      },
      selectedKeys: selectedKeys,
      showSearch: showSearch,
      targetKeys: targetKeys,
      titles: titles
    });
  };

  return TransferWrap;
}(React.Component);

TransferWrap.propTypes = {
  dataSource: PropTypes.array,
  showCheckbox: PropTypes.bool,
  titles: PropTypes.array,
  targetKeys: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onScroll: PropTypes.func,
  locale: PropTypes.object,
  showSearch: PropTypes.bool,
  listStyle: PropTypes.object,
  className: PropTypes.string
};
TransferWrap.defaultProps = {
  dataSource: [],
  showCheckbox: false,
  titles: ["源列表", "目的列表"],
  targetKeys: [],
  disabled: false,
  showSearch: false,
  onChange: function onChange() {},
  onScroll: function onScroll() {},
  locale: {
    itemUnit: "条",
    itemsUnit: "条",
    notFoundContent: "列表为空",
    searchPlaceholder: "请输入搜索内容"
  },
  listStyle: {},
  className: ""
};
export { TransferWrap as default };