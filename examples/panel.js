webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(280);


/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	/* eslint-disable no-console */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _cannerRcColorPicker = __webpack_require__(180);
	
	function onChange(obj) {
	  console.log(obj);
	}
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  null,
	  _react2['default'].createElement(_cannerRcColorPicker.Panel, { color: '#468890', onChange: onChange, mode: 'HSL' })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=panel.js.map