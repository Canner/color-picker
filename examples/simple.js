webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(281);


/***/ },

/***/ 281:
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
	
	var _cannerRcColorPicker2 = _interopRequireDefault(_cannerRcColorPicker);
	
	function changeHandler(colors) {
	  console.log(colors);
	}
	
	_reactDom2['default'].render(_react2['default'].createElement(
	  'div',
	  { style: { margin: '20px 20px 20px', textAlign: 'center' } },
	  _react2['default'].createElement(
	    'h4',
	    null,
	    'topLeft'
	  ),
	  _react2['default'].createElement(
	    _cannerRcColorPicker2['default'],
	    {
	      color: '#36c',
	      alpha: 30,
	      onChange: changeHandler,
	      placement: 'topLeft'
	    },
	    _react2['default'].createElement('span', { className: '@canner/rc-color-picker-trigger' })
	  ),
	  _react2['default'].createElement(
	    'h4',
	    null,
	    'topRight'
	  ),
	  _react2['default'].createElement(_cannerRcColorPicker2['default'], {
	    color: '#F10',
	    onChange: changeHandler,
	    placement: 'topRight'
	  }),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'p',
	    null,
	    '-'
	  ),
	  _react2['default'].createElement(
	    'h4',
	    null,
	    'bottomLeft'
	  ),
	  _react2['default'].createElement(_cannerRcColorPicker2['default'], {
	    color: '#0ad',
	    alpha: 50,
	    onChange: changeHandler,
	    placement: 'bottomLeft'
	  }),
	  _react2['default'].createElement(
	    'h4',
	    null,
	    'bottomRight'
	  ),
	  _react2['default'].createElement(_cannerRcColorPicker2['default'], {
	    color: '#0F0',
	    onChange: changeHandler,
	    placement: 'bottomRight'
	  })
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map