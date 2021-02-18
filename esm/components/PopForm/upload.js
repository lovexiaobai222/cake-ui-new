function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

import React from "react";
import { Button, Upload } from "antd";
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

var MyUpload = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(MyUpload, _React$Component);

  function MyUpload(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      fileList: [] // 已经上传的文件列表

    };
    return _this;
  }

  var _proto = MyUpload.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.defaultValue) {
      this.setState({
        fileList: this.props.defaultValue
      });
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        uploadType = _this$props.uploadType,
        _onChange = _this$props.onChange,
        _beforeUpload = _this$props.beforeUpload,
        _onRemove = _this$props.onRemove,
        itemInputStyle = _this$props.itemInputStyle,
        itemBtnStyle = _this$props.itemBtnStyle,
        btnText = _this$props.btnText;
    return /*#__PURE__*/React.createElement(Upload, _extends({}, this.props, {
      // 已经上传的文件列表（受控）
      fileList: this.state.fileList // 上传文件改变时的状态
      ,
      onChange: function onChange(info) {
        // file:{
        //     uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
        //     name: 'xx.png'   // 文件名
        //     status: 'done', // 状态有：uploading done error removed
        //     response: '{"status": "success"}', // 服务端响应内容
        //     linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
        // }
        var file = info.file,
            fileList = info.fileList;

        if (uploadType === "single") {
          _this2.setState({
            fileList: [file]
          }, function () {
            _onChange && _onChange([].concat(_this2.state.fileList), _this2.props.form);
          });
        } else {
          _this2.setState({
            fileList: fileList
          }, function () {
            _onChange && _onChange([].concat(_this2.state.fileList), _this2.props.form);
          });
        }
      } // 上传文件之前的钩子: (file) => {return false},返回 false 后变为手动上传文件(不会出现进度条)
      ,
      beforeUpload: function beforeUpload(file, fileList) {
        return _beforeUpload && _beforeUpload(file, fileList, _this2.props.form);
      } // 点击移除文件时的回调：(file) => {return false}//不移除
      ,
      onRemove: function onRemove(file) {
        if (uploadType === "single") {
          _this2.setState({
            fileList: []
          });
        } else {
          _this2.setState({
            fileList: _this2.state.fileList.filter(function (item) {
              return item.uid !== file.uid;
            })
          });
        }

        _onRemove && _onRemove(file, _this2.props.form);
      } // 点击文件链接的回调
      ,
      onPreview: function (_onPreview) {
        function onPreview(_x) {
          return _onPreview.apply(this, arguments);
        }

        onPreview.toString = function () {
          return _onPreview.toString();
        };

        return onPreview;
      }(function (file) {
        onPreview && onPreview(file, _this2.props.form);
      }),
      style: itemInputStyle,
      withCredentials: true
    }), this.props.children || /*#__PURE__*/React.createElement(Button, {
      style: itemBtnStyle
    }, btnText || '上传文件'));
  };

  return MyUpload;
}(React.Component);

MyUpload.defaultProps = {
  uploadType: "single",
  // 上传类型：single：单文件 multi:多文件
  action: "",
  // 上传的地址
  listType: "text",
  // 上传列表的内建样式
  defaultValue: [],
  // {name:""}
  multiple: false,
  // 是否支持多选文件
  showUploadList: false,
  // 是否展示文件列表
  disabled: false,
  onChange: undefined,
  beforeUpload: undefined,
  onRemove: undefined,
  onPreview: undefined,
  itemInputStyle: {},
  itemBtnStyle: {},
  btnText: ""
};
MyUpload.propTypes = {
  uploadType: PropTypes.string,
  // 上传类型：single：单文件 multi:多文件
  action: PropTypes.string,
  // 上传的地址
  listType: PropTypes.string,
  // 上传列表的内建样式
  defaultValue: PropTypes.array,
  multiple: PropTypes.bool,
  // 是否支持多选文件
  showUploadList: PropTypes.bool,
  // 是否展示文件列表
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  beforeUpload: PropTypes.func,
  onRemove: PropTypes.func,
  onPreview: PropTypes.func,
  itemInputStyle: PropTypes.object,
  itemBtnStyle: PropTypes.object,
  btnText: PropTypes.string
};
export default MyUpload;