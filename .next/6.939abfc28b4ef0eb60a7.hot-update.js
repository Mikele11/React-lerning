webpackHotUpdate(6,{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _User = __webpack_require__(414);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\Learn\\React\\udemy\\19\\udemy\\pages\\auth\\index.js?entry";


var authIndexPage = function authIndexPage() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "The Auth Index Page"), _react2.default.createElement(_User2.default, { name: "Max", age: 28, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};

exports.default = authIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhdXRoXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlVzZXIiLCJhdXRoSW5kZXhQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7Ozs7Ozs7QUFFakIsSUFBTSxnQkFBZ0IsU0FBaEIsQUFBZ0IsZ0JBQUE7eUJBQ3BCLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBREYsQUFDRSxBQUNBLHdDQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXLE9BQU0sS0FBakIsQUFBc0I7Z0JBQXRCO2tCQUhrQixBQUNwQixBQUVFO0FBQUE7O0FBSEosQUFPQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9MZWFybi9SZWFjdC91ZGVteS8xOS91ZGVteSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Learn\\React\\udemy\\19\\udemy\\pages\\auth\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Learn\\React\\udemy\\19\\udemy\\pages\\auth\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/auth\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = __webpack_require__(415);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Learn\\React\\udemy\\19\\udemy\\components\\User.js';


var user = function user(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-2876080547',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement('h1', {
        className: 'jsx-2876080547',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, props.name), _react2.default.createElement('p', {
        className: 'jsx-2876080547',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, 'Age: ', props.age), _react2.default.createElement(_style2.default, {
        styleId: '2876080547',
        css: 'div.jsx-2876080547{border:1px solid #eee;box-shadow:0 2p 3px #ccc;padding:20px;text-align:center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFVzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTW9CLEFBR3VDLHNCQUNHLHlCQUNaLGFBQ0ssa0JBQ3RCIiwiZmlsZSI6ImNvbXBvbmVudHNcXFVzZXIuanMiLCJzb3VyY2VSb290IjoiQzovTGVhcm4vUmVhY3QvdWRlbXkvMTkvdWRlbXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VyID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgxPntwcm9wcy5uYW1lfTwvaDE+XG4gICAgICAgIDxwPkFnZToge3Byb3BzLmFnZX08L3A+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDJwIDNweCAjY2NjO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyOyJdfQ== */\n/*@ sourceURL=components\\User.js */'
    }));
};

exports.default = user;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFVzZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VyIiwicHJvcHMiLCJuYW1lIiwiYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxPQUFPLFNBQVAsQUFBTyxLQUFBLEFBQUMsT0FBRDsyQkFDVCxjQUFBO21CQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGFBREosQUFDSSxBQUFXLEFBQ1gsdUJBQUEsY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BQVMsZUFGYixBQUVJLEFBQWU7aUJBRm5CO2FBRFMsQUFDVDtBQUFBO0FBREosQUFlQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJVc2VyLmpzIiwic291cmNlUm9vdCI6IkM6L0xlYXJuL1JlYWN0L3VkZW15LzE5L3VkZW15In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Learn\\React\\udemy\\19\\udemy\\components\\User.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Learn\\React\\udemy\\19\\udemy\\components\\User.js"); } } })();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(383)


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi45MzlhYmZjMjhiNGVmMGViNjBhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXV0aD80NWVlMmFmIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlci5qcz80NWVlMmFmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L3N0eWxlLmpzPzQ1ZWUyYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyJ1xuXG5jb25zdCBhdXRoSW5kZXhQYWdlID0gKCkgPT4oXG4gIDxkaXY+XG4gICAgPGgxPlRoZSBBdXRoIEluZGV4IFBhZ2U8L2gxPlxuICAgIDxVc2VyIG5hbWU9XCJNYXhcIiBhZ2U9ezI4fSAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhJbmRleFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9hdXRoP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMT57cHJvcHMubmFtZX08L2gxPlxuICAgICAgICA8cD5BZ2U6IHtwcm9wcy5hZ2V9PC9wPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycCAzcHggI2NjYztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1VzZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zdHlsZScpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZWQtanN4L3N0eWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MTVcbi8vIG1vZHVsZSBjaHVua3MgPSA2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7QUNqQkE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=