"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _form = _interopRequireDefault(require("../PopForm/form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*
* js生成uuid 唯一标志符
* */
var uuid = function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";

  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }

  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010

  s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01

  s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");
  return uuid;
};
/*
 * 可拖动的弹框 组件
 * author：徐静
 * date：2019.02.14
 * */


var DraggableFormModal = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DraggableFormModal, _React$Component);

  function DraggableFormModal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // 表单

    _this.getDragDom = function () {
      setTimeout(function () {
        // 获取唯一标示元素
        var dragDom = document.getElementsByClassName("d_" + _this.id)[0];

        if (dragDom) {
          dragDom.style.left = _this.initLeft + "px";
          dragDom.style.top = _this.initTop + "px";
          _this.dragDom = dragDom;
        }
      });
    };

    _this.onMouseDown = function (e) {
      e.preventDefault();
      _this.dragging = true; // 激活拖拽状态

      /*
       ** 实现点击后，当前浮层在最上面
       ** 将当前所有涉及可拖拽的浮层的 zindex = 1000
       ** 将当前拖拽目标的 zindex = 1001
       * */

      var nodeList = document.getElementsByClassName("drag_modal");

      if (nodeList.length > 0) {
        Array.from(nodeList).forEach(function (item) {
          return item.style.zIndex = 1000;
        });
        _this.dragDom.style.zIndex = 1001;
      }
      /*
       * getBoundingClientRect: 返回一个 DomRect 对象
       *   包含该元素的 top、right、bottom、left 值，对应的是到屏幕上方和左边的距离，单位 px
       * */


      var dragDomRect = _this.dragDom.getBoundingClientRect();
      /*
       * e.clientX、e.clientY
       *   获取鼠标的坐标位置
       * */


      _this.tLeft = e.clientX - dragDomRect.left; // 鼠标按下时和选中元素的坐标偏移:x坐标

      _this.tTop = e.clientY - dragDomRect.top; // 鼠标按下时和选中元素的坐标偏移:y坐标

      _this.onMouseMove(_this.dragDom);
    };

    _this.onMouseUp = function (e) {
      e.preventDefault();
      _this.dragging = false; // 停止移动状态

      document.onmousemove = null; // 停止鼠标移动事件
    };

    _this.onMouseMove = function (node) {
      document.onmousemove = function (e) {
        e.preventDefault();

        if (_this.dragging) {
          node.style.left = e.clientX - _this.tLeft + "px";
          node.style.top = e.clientY - _this.tTop + "px";
        }
      };

      document.onmouseup = function (e) {
        e.preventDefault();
        _this.dragging = false; // 停止移动状态

        document.onmousemove = null; // 停止鼠标移动事件
      };
    };

    _this.state = {
      // 弹出框显示/隐藏
      modalVisible: false
    };
    _this.id = uuid(); // 获得随机id

    _this.initLeft = (window.innerWidth - _this.props.width) / 2; // 初始化水平位置调整

    _this.initTop = _this.props.top; // 初始化垂直位置调整

    _this.dragDom = null; // 拖拽的目标元素

    _this.dragging = false; // 是否拖拽的开关

    _this.tLeft = 0; // ---| 坐标轴x

    _this.tTop = 0; //  ------> 坐标轴y

    return _this;
  }

  var _proto = DraggableFormModal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    // 初始化dragDom初始位置
    this.getDragDom();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    // 若dragDom不存在，初始化dragDom初始位置
    if (!this.dragDom) {
      this.getDragDom();
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!nextProps.modalVisible) {
      this.dragging = false; // 停止移动状态

      document.onmousemove = null; // 停止鼠标移动事件
    }

    if (this.props.modalVisible !== nextProps.modalVisible) {
      // 显示Modal
      this.setState({
        modalVisible: nextProps.modalVisible
      });
    }
  }
  /*
   * 初始渲染时，直接获取 Modal 的 dom 会获取不到。
   * 设置 ref 使用 findDOMNode 也获取不到。
   * 只能在定时器中使用原生方式来获取。
   * */
  ;

  _proto.render = function render() {
    var _this2 = this;

    //表单
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

    return /*#__PURE__*/_react["default"].createElement(_antd.Modal, _extends({}, this.props, {
      afterClose: function afterClose() {
        _this2.props.afterCloseToInitPosition && _this2.getDragDom();
      },
      keyboard: false,
      title: /*#__PURE__*/_react["default"].createElement("div", {
        className: "drag_title",
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        style: {
          cursor: "move"
        }
      }, title),
      visible: this.props.modalVisible,
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
      },
      wrapClassName: "drag_modal_wrap d_" + this.id + " pop-form-modal " + this.props.className
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "pop-form-custom-text"
    }, this.props.children), /*#__PURE__*/_react["default"].createElement(_form["default"], _extends({}, this.props.initData, {
      buttonConfig: _objectSpread({
        className: "action-button-container pop-action-button-container"
      }, buttonConfig),
      ref: function ref(form) {
        return _this2.myform = form;
      }
    })));
  };

  return DraggableFormModal;
}(_react["default"].Component);

exports["default"] = DraggableFormModal;
DraggableFormModal.propTypes = {
  top: _propTypes["default"].number,
  modalVisible: _propTypes["default"].bool,
  // 表单的配置
  initData: _propTypes["default"].shape({
    title: _propTypes["default"].string,
    modalWidth: _propTypes["default"].number,
    closable: _propTypes["default"].bool,
    maskClosable: _propTypes["default"].bool,
    destroyOnClose: _propTypes["default"].bool,
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
  }),
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  afterCloseToInitPosition: _propTypes["default"].bool,
  // 拖动弹框关闭后是否回归初始位置
  getContainer: _propTypes["default"].func
};
DraggableFormModal.defaultProps = {
  top: 100,
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
        span: 20
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
  className: "",
  afterCloseToInitPosition: true,
  //关闭后回到初始位置
  getContainer: function getContainer() {
    return document.body;
  }
};