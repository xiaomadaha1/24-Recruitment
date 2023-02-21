"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "mockjs":
/*!*************************!*\
  !*** external "mockjs" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("mockjs");

/***/ }),

/***/ "(api)/./pages/api/hello.ts":
/*!****************************!*\
  !*** ./pages/api/hello.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mockjs */ \"mockjs\");\n/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);\n/*\n * @Descripttion: \n * @version: \n * @Author: ZhengXiaoRui\n * @email: zheng20010712@163.com\n * @Date: 2023-02-12 20:33:37\n * @LastEditors: ZhengXiaoRui\n * @LastEditTime: 2023-02-18 23:11:53\n */ // Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    res.status(200).json((0,mockjs__WEBPACK_IMPORTED_MODULE_0__.mock)({\n        \"list|1-6\": [\n            {\n                \"id|+1\": 1001,\n                \"business\": \"百度\",\n                \"startTime\": mockjs__WEBPACK_IMPORTED_MODULE_0__.Random.date(\"yyyy-MM-dd\"),\n                \"endTime\": mockjs__WEBPACK_IMPORTED_MODULE_0__.Random.date(\"yyyy-MM-dd\"),\n                \"title\": \"百度暑期实习招聘开始啦！海量HC等你来！\",\n                \"detail\": \"详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情\",\n                \"tdCode\": \"https://image.baidu.com/search/detail?ct=503316480&z=&tn=baiduimagedetail&ipn=d&word=%E7%99%BE%E5%BA%A6&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=-1&hd=undefined&latest=undefined&copyright=undefined&cs=824284446,3997049772&os=2817076151,2701476789&simid=3457749085,447151730&pn=0&rn=1&di=7169026086108397569&ln=1323&fr=&fmq=1676726100839_R&ic=0&s=undefined&se=&sme=&tab=0&width=&height=&face=undefined&is=0,0&istype=2&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=1e&objurl=https%3A%2F%2Fstatic.sensorexpert.com.cn%2Fcaiji%2Fc2a0948024080c76068c2bcd8dcb1366%2F20220427%2F9fc76774-955b-4e24-85f7-e521867a67e0.png&rpstart=0&rpnum=0&adpicid=0&nojc=undefined\",\n                \"pageViews|1-1000\": 1,\n                \"likeNumber|1-1000\": 1,\n                \"type|1-4\": 1\n            }\n        ]\n    }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0NBUUMsR0FDRCw2RUFBNkU7QUFDeEM7QUFPdEIsU0FBU0UsUUFDdEJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNBQSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTiw0Q0FBSUEsQ0FBQztRQUN4QixZQUFZO1lBQ1Y7Z0JBQ0UsU0FBUztnQkFDVCxZQUFZO2dCQUNaLGFBQWFDLCtDQUFXLENBQUM7Z0JBQ3pCLFdBQVdBLCtDQUFXLENBQUM7Z0JBQ3ZCLFNBQVM7Z0JBQ1QsVUFDRTtnQkFDRixVQUNFO2dCQUNGLG9CQUFvQjtnQkFDcEIscUJBQXFCO2dCQUNyQixZQUFZO1lBQ2Q7U0FDRDtJQUNIO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzI0Ly4vcGFnZXMvYXBpL2hlbGxvLnRzPzY1N2IiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBEZXNjcmlwdHRpb246IFxuICogQHZlcnNpb246IFxuICogQEF1dGhvcjogWmhlbmdYaWFvUnVpXG4gKiBAZW1haWw6IHpoZW5nMjAwMTA3MTJAMTYzLmNvbVxuICogQERhdGU6IDIwMjMtMDItMTIgMjA6MzM6MzdcbiAqIEBMYXN0RWRpdG9yczogWmhlbmdYaWFvUnVpXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIzLTAyLTE4IDIzOjExOjUzXG4gKi9cbi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgeyBtb2NrLCBSYW5kb20gfSBmcm9tICdtb2NranMnXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG50eXBlIERhdGEgPSB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxuKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKG1vY2soe1xuICAgIFwibGlzdHwxLTZcIjogW1xuICAgICAge1xuICAgICAgICBcImlkfCsxXCI6IDEwMDEsXG4gICAgICAgIFwiYnVzaW5lc3NcIjogXCLnmb7luqZcIixcbiAgICAgICAgXCJzdGFydFRpbWVcIjogUmFuZG9tLmRhdGUoJ3l5eXktTU0tZGQnKSxcbiAgICAgICAgXCJlbmRUaW1lXCI6IFJhbmRvbS5kYXRlKCd5eXl5LU1NLWRkJyksXG4gICAgICAgIFwidGl0bGVcIjogXCLnmb7luqbmmpHmnJ/lrp7kuaDmi5vogZjlvIDlp4vllabvvIHmtbfph49IQ+etieS9oOadpe+8gVwiLFxuICAgICAgICBcImRldGFpbFwiOlxuICAgICAgICAgIFwi6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOF6K+m5oOFXCIsXG4gICAgICAgIFwidGRDb2RlXCI6XG4gICAgICAgICAgXCJodHRwczovL2ltYWdlLmJhaWR1LmNvbS9zZWFyY2gvZGV0YWlsP2N0PTUwMzMxNjQ4MCZ6PSZ0bj1iYWlkdWltYWdlZGV0YWlsJmlwbj1kJndvcmQ9JUU3JTk5JUJFJUU1JUJBJUE2JnN0ZXBfd29yZD0maWU9dXRmLTgmaW49JmNsPTImbG09LTEmc3Q9LTEmaGQ9dW5kZWZpbmVkJmxhdGVzdD11bmRlZmluZWQmY29weXJpZ2h0PXVuZGVmaW5lZCZjcz04MjQyODQ0NDYsMzk5NzA0OTc3MiZvcz0yODE3MDc2MTUxLDI3MDE0NzY3ODkmc2ltaWQ9MzQ1Nzc0OTA4NSw0NDcxNTE3MzAmcG49MCZybj0xJmRpPTcxNjkwMjYwODYxMDgzOTc1NjkmbG49MTMyMyZmcj0mZm1xPTE2NzY3MjYxMDA4MzlfUiZpYz0wJnM9dW5kZWZpbmVkJnNlPSZzbWU9JnRhYj0wJndpZHRoPSZoZWlnaHQ9JmZhY2U9dW5kZWZpbmVkJmlzPTAsMCZpc3R5cGU9MiZpc3Q9JmppdD0mYmR0eXBlPTAmc3BuPTAmcGk9MCZnc209MWUmb2JqdXJsPWh0dHBzJTNBJTJGJTJGc3RhdGljLnNlbnNvcmV4cGVydC5jb20uY24lMkZjYWlqaSUyRmMyYTA5NDgwMjQwODBjNzYwNjhjMmJjZDhkY2IxMzY2JTJGMjAyMjA0MjclMkY5ZmM3Njc3NC05NTViLTRlMjQtODVmNy1lNTIxODY3YTY3ZTAucG5nJnJwc3RhcnQ9MCZycG51bT0wJmFkcGljaWQ9MCZub2pjPXVuZGVmaW5lZFwiLFxuICAgICAgICBcInBhZ2VWaWV3c3wxLTEwMDBcIjogMSwgXG4gICAgICAgIFwibGlrZU51bWJlcnwxLTEwMDBcIjogMSwgXG4gICAgICAgIFwidHlwZXwxLTRcIjogMSBcbiAgICAgIH1cbiAgICBdXG4gIH0pKVxufVxuIl0sIm5hbWVzIjpbIm1vY2siLCJSYW5kb20iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.ts"));
module.exports = __webpack_exports__;

})();