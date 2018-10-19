"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _index = require("next\\dist\\lib\\router\\index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Learn\\React\\udemy\\19\\udemy\\pages\\index.js?entry";


var indexPage = function indexPage() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "The Main Page"), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Go To ", _react2.default.createElement(_link2.default, { href: "/auth", __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Auth"))), _react2.default.createElement("button", { onClick: function onClick() {
      return _index2.default.push("/auth");
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Go to Auth"));
};

exports.default = indexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJSb3V0ZXIiLCJpbmRleFBhZ2UiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sWUFBWSxTQUFaLEFBQVksWUFBQTt5QkFDaEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0Esa0NBQUEsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQVMsMEJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7Z0JBQVg7a0JBQUEsQUFBbUI7QUFBbkI7cUJBQW1CLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUY5QixBQUVFLEFBQVMsQUFBbUIsQUFDNUIsMkJBQUEsY0FBQSxZQUFRLFNBQVMsbUJBQUE7YUFBTSxnQkFBQSxBQUFPLEtBQWIsQUFBTSxBQUFZO0FBQW5DO2dCQUFBO2tCQUFBO0FBQUE7S0FKYyxBQUNoQixBQUdFO0FBSkosQUFRQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9MZWFybi9SZWFjdC91ZGVteS8xOS91ZGVteSJ9