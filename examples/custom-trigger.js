webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(279);


/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _cannerRcColorPicker = __webpack_require__(180);
	
	var _cannerRcColorPicker2 = _interopRequireDefault(_cannerRcColorPicker);
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  { style: { textAlign: 'center' } },
	  _react2['default'].createElement(
	    _cannerRcColorPicker2['default'],
	    {
	      color: '#36c',
	      onChange: changeHandler
	    },
	    _react2['default'].createElement(
	      'span',
	      { className: 'react-custom-trigger' },
	      'choose color'
	    )
	  )
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=custom-trigger.js.map