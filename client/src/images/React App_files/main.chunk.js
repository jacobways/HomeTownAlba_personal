(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/mypage.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/pages/mypage.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_kakao_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/kakao.jpeg */ "./src/images/kakao.jpeg");
/* harmony import */ var _images_google_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/google.png */ "./src/images/google.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_kakao_jpeg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_google_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --main: #f3f6fd;\n  --mypage: #fff;\n}\n\nbody {\n  background-color: var(--main);\n}\n\n.main {\n  padding-top: 150px;\n}\n\n.mypage {\n  flex: 2 1;\n  background-color: var(--mypage);\n  border-radius: 32px;\n  padding: 32px 32px 0 32px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 15% 30% 10% 30%;\n  align-items: center;\n}\n.mypage-line {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 32px;\n}\n.mypage-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  color: var(--main-color);\n}\n.mypage-header p {\n  font-size: 24px;\n  line-height: 32px;\n  font-weight: 700;\n  opacity: 0.9;\n  margin: 0;\n  color: var(--main-color);\n}\n.mypage-header .time {\n  font-size: 20px;\n}\n\n.bubbly-button {\n  font-family: \"Helvetica\", \"Arial\", sans-serif;\n  display: inline-block;\n  font-size: 1em;\n  padding: 1em 0em;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #ff0081;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);\n  width: 30%;\n}\n.bubbly-button .left {\n  margin-right: 10px;\n}\n.bubbly-button:focus {\n  outline: 0;\n}\n.bubbly-button:before, .bubbly-button:after {\n  position: absolute;\n  content: \"\";\n  display: block;\n  width: 140%;\n  height: 100%;\n  left: -20%;\n  z-index: -1000;\n  transition: all ease-in-out 0.5s;\n  background-repeat: no-repeat;\n}\n.bubbly-button:before {\n  display: none;\n  top: -75%;\n  background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);\n  background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;\n}\n.bubbly-button:after {\n  display: none;\n  bottom: -75%;\n  background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);\n  background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;\n}\n.bubbly-button:active {\n  transform: scale(0.9);\n  background-color: #e60074;\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);\n}\n.bubbly-button.animate:before {\n  display: block;\n  animation: topBubbles ease-in-out 0.75s forwards;\n}\n.bubbly-button.animate:after {\n  display: block;\n  animation: bottomBubbles ease-in-out 0.75s forwards;\n}\n\n@keyframes topBubbles {\n  0% {\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;\n  }\n  50% {\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;\n  }\n  100% {\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n@keyframes bottomBubbles {\n  0% {\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;\n  }\n  50% {\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;\n  }\n  100% {\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n.header {\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n  color: var(--main-color);\n  font-family: \"DM Sans\", sans-serif;\n}\n\n.profile {\n  float: right;\n  width: 40%;\n  height: 150px;\n}\n\n.profileText {\n  float: left;\n  width: 50%;\n}\n\n.line {\n  float: left;\n  text-align: center;\n}\n.line tbody {\n  display: inline-block;\n  vertical-align: middle;\n  border-color: inherit;\n  width: 100%;\n  align-items: center;\n}\n.line tbody tr {\n  justify-content: center;\n  display: inline-flex;\n  width: 100%;\n}\n.line tbody tr th {\n  display: table-cell;\n  width: 140px;\n  font-size: 16px;\n  color: #494949;\n  font-weight: 700;\n  text-align: left;\n  line-height: 32px;\n  vertical-align: top;\n  letter-spacing: -1px;\n}\n.line tbody tr td {\n  display: table-cell;\n  width: 140px;\n  font-size: 16px;\n  color: #494949;\n  font-weight: 700;\n  text-align: left;\n  line-height: 32px;\n  vertical-align: top;\n  letter-spacing: -1px;\n}\n\n.messageBox {\n  background-color: #f5f5f5;\n  padding: 10px;\n}\n.messageBox li {\n  margin: 10px;\n}\n\n.tag {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  display: flex;\n}\n.tag li {\n  flex: 1 1;\n  padding: 20px 40px 21px 40px;\n  text-align: center;\n  float: left;\n  margin-right: -1px;\n  border: 1px solid #bababa;\n  border-bottom-color: #363d54;\n  background: #fcfcfc;\n}\n.tag a {\n  width: 100%;\n  color: #777;\n  font-size: 15px;\n  line-height: 1;\n  text-align: center;\n  text-decoration: none;\n}\n.tag .on {\n  position: relative;\n  border: 1px solid #363d54;\n  border-bottom: 0;\n  background: #fff;\n}\n\n.bottomButton {\n  text-align: center;\n}\n\n#left {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\n.companyJob {\n  display: block;\n  text-align: left;\n}\n\n.loginSection {\n  width: 100%;\n  display: block;\n}\n.loginSection tbody {\n  width: 100%;\n  display: block;\n}\n.loginSection tbody tr {\n  width: 100%;\n  display: block;\n}\n.loginSection tbody tr td {\n  width: 100%;\n  display: block;\n}\n.loginSection tbody tr td input {\n  width: 100%;\n  font-size: 14px;\n  color: #494949;\n  height: 46px;\n  border: 1px solid;\n  border-color: #fff #fff #e5e7ea;\n  outline: none;\n}\n\n.jobFlow {\n  width: 100%;\n  font-size: 14px;\n  color: #494949;\n  height: 46px;\n  border: 1px solid;\n  border-color: #fff #fff #e5e7ea;\n  outline: none;\n}\n\n.user {\n  float: left;\n  text-align: center;\n  display: flex;\n  border-top: ridge;\n  border-bottom: inset;\n  width: 100%;\n}\n.user button {\n  display: inline;\n}\n.user .new tr {\n  justify-content: center;\n  display: contents;\n  float: left;\n}\n.user .new tr th {\n  display: table-cell;\n  width: 140px;\n  font-size: 16px;\n  color: #494949;\n  font-weight: 700;\n  text-align: left;\n  line-height: 32px;\n  vertical-align: top;\n  letter-spacing: -1px;\n}\n.user .new tr td {\n  display: table-cell;\n  width: 140px;\n  font-size: 16px;\n  color: #494949;\n  font-weight: 700;\n  text-align: left;\n  line-height: 32px;\n  vertical-align: top;\n  letter-spacing: -1px;\n}\n.user tbody {\n  display: inline-block;\n  vertical-align: middle;\n  border-color: inherit;\n  width: 100%;\n  align-items: center;\n}\n.user tbody tr {\n  justify-content: center;\n  display: inline-flex;\n  float: left;\n}\n.user tbody tr th {\n  display: table-cell;\n  width: 140px;\n  font-size: 16px;\n  color: #494949;\n  font-weight: 700;\n  text-align: left;\n  line-height: 32px;\n  vertical-align: top;\n  letter-spacing: -1px;\n}\n.user tbody tr td {\n  display: table-cell;\n  width: 140px;\n  font-size: 16px;\n  color: #494949;\n  font-weight: 700;\n  text-align: left;\n  line-height: 32px;\n  vertical-align: top;\n  letter-spacing: -1px;\n}\n\n.kakaoSns {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  width: 40px;\n  max-width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n}\n\n.googleSns {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  width: 40px;\n  max-width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  border: 1px;\n}\n\n#profile {\n  border-radius: 4px;\n  max-width: 115px;\n  max-height: 150px;\n  position: relative;\n  width: 115px;\n  height: 150px;\n  margin: 9px 0 0 15px;\n  border: 1px solid #ddd;\n  aspect-ratio: auto 140/180;\n}\n\n.header2 {\n  margin: 0px 75% 0px 0px;\n}\n\n.password {\n  border-bottom: inset;\n  width: 100%;\n}\n.home {\n  text-align: center;\n}\n\n.job {\n  padding: 20px 0px 20px 0px;\n  text-align: center;\n  border-bottom: inset;\n  width: 100%;\n}\n.job .careerDiv tbody {\n  float: left;\n  width: 100%;\n  border-right: 4px;\n  text-align: center;\n  border-top: double;\n  padding: 10px 0px 0px 0px;\n  margin-top: 10px;\n}\n.job .careerDiv tbody tr {\n  float: left;\n  border-right: 4px;\n}\n.job .careerDiv tbody div {\n  float: left;\n  text-align: center;\n}\n.job .careerDiv tbody .workCom {\n  width: 30%;\n}\n.job .careerDiv tbody .position {\n  width: 30%;\n}\n.job .careerDiv tbody .month {\n  width: 10%;\n}\n\n.career {\n  width: 100%;\n}\n.career tr {\n  width: 100%;\n  display: flex;\n  border-top: outset;\n  padding-top: 7px;\n}\n.career tr td {\n  float: left;\n  height: 15px;\n}\n.career tr .workCom {\n  width: 30%;\n  border-right: inset;\n}\n.career tr .position {\n  width: 30%;\n  border-right: inset;\n}\n.career tr .month {\n  width: 10%;\n  border-right: inset;\n}\n\n.pinkButton {\n  font-family: \"Helvetica\", \"Arial\", sans-serif;\n  display: inline-block;\n  font-size: 1em;\n  padding: 3px 3px 3px 3px;\n  margin-bottom: 20px;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #ff0081;\n  color: #fff;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);\n  width: 20%;\n}\n\n.careerSection {\n  border-top: ridge;\n  padding: 20px 0px 0px 0px;\n  border-bottom: inherit;\n  width: 100%;\n  text-align: center;\n}\n\n#fixed {\n  width: 100%;\n}\n\n.fixButton {\n  width: 100%;\n}\n\n.job-list-title-wrapper {\n  width: 100%;\n}\n\n.job-list-title {\n  text-align: start;\n  border: none;\n}\n\n.table,\nth,\ntd {\n  border: 1px solid black;\n}", "",{"version":3,"sources":["webpack://src/pages/mypage.scss"],"names":[],"mappings":"AAEA;EACE,eAAA;EACA,cAAA;AAAF;;AAGA;EACE,6BAAA;AAAF;;AAGA;EACE,kBAAA;AAAF;;AAGA;EACE,SAAA;EACA,+BAAA;EACA,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAAF;AAEE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,oBAAA;AAAJ;AAGE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;EACA,wBAAA;AADJ;AAGI;EACE,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,SAAA;EACA,wBAAA;AADN;AAII;EACE,eAAA;AAFN;;AAWA;EACE,6CAAA;EACA,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,wBAAA;EACA,gBAAA;EACA,yBAdQ;EAeR,WAbkB;EAclB,kBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,4DAAA;EACA,6CAAA;EACA,UAAA;AARF;AASE;EACE,kBAAA;AAPJ;AAUE;EACE,UAAA;AARJ;AAWE;EAEE,kBAAA;EACA,WAAA;EACA,cAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;EACA,cAAA;EACA,gCAAA;EACA,4BAAA;AAVJ;AAaE;EACE,aAAA;EACA,SAAA;EACA,iiBAAA;EASA,gGAAA;AAnBJ;AAwBE;EACE,aAAA;EACA,YAAA;EACA,kaAAA;EAOA,8EAAA;AA5BJ;AAiCE;EACE,qBAAA;EACA,yBAAA;EACA,6CAAA;AA/BJ;AAmCI;EACE,cAAA;EACA,gDAAA;AAjCN;AAmCI;EACE,cAAA;EACA,mDAAA;AAjCN;;AAsCA;EACE;IACE,mGAAA;EAnCF;EAsCA;IACE,iGAAA;EApCF;EAuCA;IACE,mGAAA;IAEA,yDAAA;EAtCF;AACF;AAyCA;EACE;IACE,sFAAA;EAvCF;EA0CA;IACE,kFAAA;EAxCF;EA2CA;IACE,mFAAA;IAEA,yDAAA;EA1CF;AACF;AA6CA;EACE,aAAA;EAEA,mBAAA;EACA,mBAAA;EACA,wBAAA;EACA,kCAAA;AA5CF;;AA+CA;EACE,YAAA;EACA,UAAA;EACA,aAAA;AA5CF;;AA8CA;EACE,WAAA;EACA,UAAA;AA3CF;;AA8CA;EACE,WAAA;EACA,kBAAA;AA3CF;AA6CE;EACE,qBAAA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;EACA,mBAAA;AA3CJ;AA4CI;EACE,uBAAA;EACA,oBAAA;EACA,WAAA;AA1CN;AA2CM;EACE,mBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;AAzCR;AA2CM;EACE,mBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;AAzCR;;AA+CA;EACE,yBAAA;EACA,aAAA;AA5CF;AA6CE;EACE,YAAA;AA3CJ;;AA8CA;EACE,UAAA;EACA,SAAA;EACA,WAAA;EACA,aAAA;AA3CF;AA4CE;EACE,SAAA;EACA,4BAAA;EACA,kBAAA;EACA,WAAA;EACA,kBAAA;EACA,yBAAA;EACA,4BAAA;EACA,mBAAA;AA1CJ;AA4CE;EACE,WAAA;EAEA,WAAA;EACA,eAAA;EACA,cAAA;EACA,kBAAA;EACA,qBAAA;AA3CJ;AA6CE;EACE,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,gBAAA;AA3CJ;;AA+CA;EACE,kBAAA;AA5CF;;AA8CA;EACE,kBAAA;EACA,iBAAA;AA3CF;;AA6CA;EACE,cAAA;EACA,gBAAA;AA1CF;;AA6CA;EACE,WAAA;EACA,cAAA;AA1CF;AA2CE;EACE,WAAA;EACA,cAAA;AAzCJ;AA0CI;EACE,WAAA;EACA,cAAA;AAxCN;AAyCM;EACE,WAAA;EACA,cAAA;AAvCR;AAwCQ;EACE,WAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,+BAAA;EACA,aAAA;AAtCV;;AA6CA;EACE,WAAA;EACA,eAAA;EACA,cAAA;EACA,YAAA;EACA,iBAAA;EACA,+BAAA;EACA,aAAA;AA1CF;;AA6CA;EACE,WAAA;EACA,kBAAA;EACA,aAAA;EACA,iBAAA;EACA,oBAAA;EACA,WAAA;AA1CF;AA2CE;EACE,eAAA;AAzCJ;AA4CI;EACE,uBAAA;EACA,iBAAA;EACA,WAAA;AA1CN;AA6CM;EACE,mBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;AA3CR;AA6CM;EACE,mBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;AA3CR;AAgDE;EACE,qBAAA;EACA,sBAAA;EACA,qBAAA;EACA,WAAA;EACA,mBAAA;AA9CJ;AA+CI;EACE,uBAAA;EACA,oBAAA;EACA,WAAA;AA7CN;AAgDM;EACE,mBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;AA9CR;AAgDM;EACE,mBAAA;EACA,YAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;AA9CR;;AAoDA;EACE,mDAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;AAjDF;;AAoDA;EACE,mDAAA;EACA,sBAAA;EACA,WAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,WAAA;AAjDF;;AAoDA;EACE,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,oBAAA;EACA,sBAAA;EACA,0BAAA;AAjDF;;AAmDA;EACE,uBAAA;AAhDF;;AAmDA;EACE,oBAAA;EACA,WAAA;AAhDF;AAqDA;EACE,kBAAA;AAnDF;;AAsDA;EACE,0BAAA;EACA,kBAAA;EAEA,oBAAA;EACA,WAAA;AApDF;AAsDI;EACE,WAAA;EACA,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBAAA;EACA,gBAAA;AApDN;AAqDM;EACE,WAAA;EACA,iBAAA;AAnDR;AAqDM;EACE,WAAA;EACA,kBAAA;AAnDR;AAqDM;EACE,UAAA;AAnDR;AAqDM;EACE,UAAA;AAnDR;AAqDM;EACE,UAAA;AAnDR;;AAwDA;EACE,WAAA;AArDF;AAsDE;EACE,WAAA;EACA,aAAA;EACA,kBAAA;EACA,gBAAA;AApDJ;AAqDI;EACE,WAAA;EACA,YAAA;AAnDN;AAqDI;EACE,UAAA;EACA,mBAAA;AAnDN;AAqDI;EACE,UAAA;EACA,mBAAA;AAnDN;AAqDI;EACE,UAAA;EACA,mBAAA;AAnDN;;AAwDA;EACE,6CAAA;EACA,qBAAA;EACA,cAAA;EACA,wBAAA;EAEA,mBAAA;EACA,wBAAA;EACA,gBAAA;EACA,yBApdQ;EAqdR,WAndkB;EAodlB,kBAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,4DAAA;EACA,6CAAA;EACA,UAAA;AAtDF;;AAyDA;EACE,iBAAA;EACA,yBAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;AAtDF;;AAyDA;EACE,WAAA;AAtDF;;AAyDA;EACE,WAAA;AAtDF;;AAyDA;EACE,WAAA;AAtDF;;AAyDA;EACE,iBAAA;EACA,YAAA;AAtDF;;AAyDA;;;EAGE,uBAAA;AAtDF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap\");\n\n:root {\n  --main: #f3f6fd;\n  --mypage: #fff;\n}\n\nbody {\n  background-color: var(--main);\n}\n\n.main {\n  padding-top: 150px;\n}\n\n.mypage {\n  flex: 2;\n  background-color: var(--mypage);\n  border-radius: 32px;\n  padding: 32px 32px 0 32px;\n  overflow: hidden;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 15% 30% 10% 30%;\n  align-items: center;\n\n  &-line {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 32px;\n  }\n\n  &-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 24px;\n    color: var(--main-color);\n\n    p {\n      font-size: 24px;\n      line-height: 32px;\n      font-weight: 700;\n      opacity: 0.9;\n      margin: 0;\n      color: var(--main-color);\n    }\n\n    .time {\n      font-size: 20px;\n    }\n  }\n}\n$fuschia: #ff0081;\n$button-bg: $fuschia;\n$button-text-color: #fff;\n$baby-blue: #f8faff;\n\n.bubbly-button {\n  font-family: \"Helvetica\", \"Arial\", sans-serif;\n  display: inline-block;\n  font-size: 1em;\n  padding: 1em 0em;\n  margin-top: 10px;\n  margin-bottom: 20px;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: $button-bg;\n  color: $button-text-color;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);\n  width: 30%;\n  .left {\n    margin-right: 10px;\n  }\n\n  &:focus {\n    outline: 0;\n  }\n\n  &:before,\n  &:after {\n    position: absolute;\n    content: \"\";\n    display: block;\n    width: 140%;\n    height: 100%;\n    left: -20%;\n    z-index: -1000;\n    transition: all ease-in-out 0.5s;\n    background-repeat: no-repeat;\n  }\n\n  &:before {\n    display: none;\n    top: -75%;\n    background-image: radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, transparent 20%, $button-bg 20%, transparent 30%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, transparent 10%, $button-bg 15%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%);\n    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,\n      15% 15%, 10% 10%, 18% 18%;\n    //background-position: 0% 80%, -5% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 85% 30%;\n  }\n\n  &:after {\n    display: none;\n    bottom: -75%;\n    background-image: radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, transparent 10%, $button-bg 15%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%),\n      radial-gradient(circle, $button-bg 20%, transparent 20%);\n    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%,\n      20% 20%;\n    //background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;\n  }\n\n  &:active {\n    transform: scale(0.9);\n    background-color: darken($button-bg, 5%);\n    box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);\n  }\n\n  &.animate {\n    &:before {\n      display: block;\n      animation: topBubbles ease-in-out 0.75s forwards;\n    }\n    &:after {\n      display: block;\n      animation: bottomBubbles ease-in-out 0.75s forwards;\n    }\n  }\n}\n\n@keyframes topBubbles {\n  0% {\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,\n      40% 90%, 55% 90%, 70% 90%;\n  }\n  50% {\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,\n      50% 50%, 65% 20%, 90% 30%;\n  }\n  100% {\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,\n      50% 40%, 65% 10%, 90% 20%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n\n@keyframes bottomBubbles {\n  0% {\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,\n      70% -10%, 70% 0%;\n  }\n  50% {\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,\n      105% 0%;\n  }\n  100% {\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,\n      110% 10%;\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\n  }\n}\n\n.header {\n  display: flex;\n  // justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  color: var(--main-color);\n  font-family: \"DM Sans\", sans-serif;\n}\n\n.profile {\n  float: right;\n  width: 40%;\n  height: 150px;\n}\n.profileText {\n  float: left;\n  width: 50%;\n}\n\n.line {\n  float: left;\n  text-align: center;\n\n  tbody {\n    display: inline-block;\n    vertical-align: middle;\n    border-color: inherit;\n    width: 100%;\n    align-items: center;\n    tr {\n      justify-content: center;\n      display: inline-flex;\n      width: 100%;\n      th {\n        display: table-cell;\n        width: 140px;\n        font-size: 16px;\n        color: #494949;\n        font-weight: 700;\n        text-align: left;\n        line-height: 32px;\n        vertical-align: top;\n        letter-spacing: -1px;\n      }\n      td {\n        display: table-cell;\n        width: 140px;\n        font-size: 16px;\n        color: #494949;\n        font-weight: 700;\n        text-align: left;\n        line-height: 32px;\n        vertical-align: top;\n        letter-spacing: -1px;\n      }\n    }\n  }\n}\n\n.messageBox {\n  background-color: #f5f5f5;\n  padding: 10px;\n  li {\n    margin: 10px;\n  }\n}\n.tag {\n  padding: 0;\n  margin: 0;\n  width: 100%;\n  display: flex;\n  li {\n    flex: 1;\n    padding: 20px 40px 21px 40px;\n    text-align: center;\n    float: left;\n    margin-right: -1px;\n    border: 1px solid #bababa;\n    border-bottom-color: #363d54;\n    background: #fcfcfc;\n  }\n  a {\n    width: 100%;\n\n    color: #777;\n    font-size: 15px;\n    line-height: 1;\n    text-align: center;\n    text-decoration: none;\n  }\n  .on {\n    position: relative;\n    border: 1px solid #363d54;\n    border-bottom: 0;\n    background: #fff;\n  }\n}\n\n.bottomButton {\n  text-align: center;\n}\n#left {\n  margin-right: 10px;\n  margin-left: 10px;\n}\n.companyJob {\n  display: block;\n  text-align: left;\n}\n\n.loginSection {\n  width: 100%;\n  display: block;\n  tbody {\n    width: 100%;\n    display: block;\n    tr {\n      width: 100%;\n      display: block;\n      td {\n        width: 100%;\n        display: block;\n        input {\n          width: 100%;\n          font-size: 14px;\n          color: #494949;\n          height: 46px;\n          border: 1px solid;\n          border-color: #fff #fff #e5e7ea;\n          outline: none;\n        }\n      }\n    }\n  }\n}\n\n.jobFlow {\n  width: 100%;\n  font-size: 14px;\n  color: #494949;\n  height: 46px;\n  border: 1px solid;\n  border-color: #fff #fff #e5e7ea;\n  outline: none;\n}\n\n.user {\n  float: left;\n  text-align: center;\n  display: flex;\n  border-top: ridge;\n  border-bottom: inset;\n  width: 100%;\n  button {\n    display: inline;\n  }\n  .new {\n    tr {\n      justify-content: center;\n      display: contents;\n      float: left;\n      button {\n      }\n      th {\n        display: table-cell;\n        width: 140px;\n        font-size: 16px;\n        color: #494949;\n        font-weight: 700;\n        text-align: left;\n        line-height: 32px;\n        vertical-align: top;\n        letter-spacing: -1px;\n      }\n      td {\n        display: table-cell;\n        width: 140px;\n        font-size: 16px;\n        color: #494949;\n        font-weight: 700;\n        text-align: left;\n        line-height: 32px;\n        vertical-align: top;\n        letter-spacing: -1px;\n      }\n    }\n  }\n\n  tbody {\n    display: inline-block;\n    vertical-align: middle;\n    border-color: inherit;\n    width: 100%;\n    align-items: center;\n    tr {\n      justify-content: center;\n      display: inline-flex;\n      float: left;\n      button {\n      }\n      th {\n        display: table-cell;\n        width: 140px;\n        font-size: 16px;\n        color: #494949;\n        font-weight: 700;\n        text-align: left;\n        line-height: 32px;\n        vertical-align: top;\n        letter-spacing: -1px;\n      }\n      td {\n        display: table-cell;\n        width: 140px;\n        font-size: 16px;\n        color: #494949;\n        font-weight: 700;\n        text-align: left;\n        line-height: 32px;\n        vertical-align: top;\n        letter-spacing: -1px;\n      }\n    }\n  }\n}\n\n.kakaoSns {\n  background: url(../images/kakao.jpeg);\n  background-size: cover;\n  width: 40px;\n  max-width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  border: none;\n}\n\n.googleSns {\n  background: url(../images/google.png);\n  background-size: cover;\n  width: 40px;\n  max-width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  border: 1px;\n}\n\n#profile {\n  border-radius: 4px;\n  max-width: 115px;\n  max-height: 150px;\n  position: relative;\n  width: 115px;\n  height: 150px;\n  margin: 9px 0 0 15px;\n  border: 1px solid #ddd;\n  aspect-ratio: auto 140 / 180;\n}\n.header2 {\n  margin: 0px 75% 0px 0px;\n}\n\n.password {\n  border-bottom: inset;\n  width: 100%;\n  button {\n  }\n}\n\n.home {\n  text-align: center;\n}\n\n.job {\n  padding: 20px 0px 20px 0px;\n  text-align: center;\n\n  border-bottom: inset;\n  width: 100%;\n  .careerDiv {\n    tbody {\n      float: left;\n      width: 100%;\n      border-right: 4px;\n      text-align: center;\n      border-top: double;\n      padding: 10px 0px 0px 0px;\n      margin-top: 10px;\n      tr {\n        float: left;\n        border-right: 4px;\n      }\n      div {\n        float: left;\n        text-align: center;\n      }\n      .workCom {\n        width: 30%;\n      }\n      .position {\n        width: 30%;\n      }\n      .month {\n        width: 10%;\n      }\n    }\n  }\n}\n.career {\n  width: 100%;\n  tr {\n    width: 100%;\n    display: flex;\n    border-top: outset;\n    padding-top: 7px;\n    td {\n      float: left;\n      height: 15px;\n    }\n    .workCom {\n      width: 30%;\n      border-right: inset;\n    }\n    .position {\n      width: 30%;\n      border-right: inset;\n    }\n    .month {\n      width: 10%;\n      border-right: inset;\n    }\n  }\n}\n\n.pinkButton {\n  font-family: \"Helvetica\", \"Arial\", sans-serif;\n  display: inline-block;\n  font-size: 1em;\n  padding: 3px 3px 3px 3px;\n  // margin-top: 10px;\n  margin-bottom: 20px;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: $button-bg;\n  color: $button-text-color;\n  border-radius: 4px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;\n  box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);\n  width: 20%;\n}\n\n.careerSection {\n  border-top: ridge;\n  padding: 20px 0px 0px 0px;\n  border-bottom: inherit;\n  width: 100%;\n  text-align: center;\n}\n\n#fixed {\n  width: 100%;\n}\n\n.fixButton {\n  width: 100%;\n}\n\n.job-list-title-wrapper {\n  width: 100%;\n}\n\n.job-list-title {\n  text-align: start;\n  border: none;\n}\n\n.table,\nth,\ntd {\n  border: 1px solid black;\n}\n\n// .table-body {\n//   display: block !important;\n// }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chat.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Chat.css ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-container {\n  background: #a9bdce;\n  flex: 1 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0.5rem;\n}\n.user-container label {\n  font-size: 14px;\n  margin-right: 1rem;\n}\n.user-container input {\n  border-radius: 3px;\n  border: none;\n  height: 100%;\n}\n.display-container {\n  background: #b2c7d9;\n  flex: 12 1;\n  overflow-y: scroll;\n}\n.input-container {\n  flex: 1 1;\n  display: flex;\n  justify-content: stretch;\n  align-items: stretch;\n}\n.input-container span {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0.3rem;\n  width: 100%;\n}\n\n.chatting-input {\n  font-size: 12px;\n  height: 100%;\n  flex: 8 1;\n  border: none;\n}\n.send-button {\n  flex: 1 1;\n  background: #ffeb33;\n  border: none;\n  height: 100%;\n  border-radius: 3px;\n}\n.chatting-list li {\n  width: 90%;\n  padding: 0.3rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  margin-top: 0.5rem;\n}\n.profile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1 1;\n}\n.profile .user {\n  font-size: 12px;\n  margin-bottom: 0.3rem;\n}\n.profile .image {\n  border-radius: 50%;\n  object-fit: cover;\n  width: 50px;\n  height: 50px;\n}\n.message {\n  border-radius: 5px;\n  padding: 0.2rem;\n  font-size: 12px;\n  margin-bottom: 0 5px;\n  flex: 7 1;\n}\n.time {\n  font-size: 14px;\n  margin: 0 5px;\n}\n\n.sent .message {\n  background: #ffeb33;\n}\n.received .message {\n  background: #fff;\n}\n\n.sent {\n  flex-direction: row-reverse;\n  float: right;\n}\n", "",{"version":3,"sources":["webpack://src/components/Chat.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,SAAO;EACP,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;AACA;EACE,mBAAmB;EACnB,UAAQ;EACR,kBAAkB;AACpB;AACA;EACE,SAAO;EACP,aAAa;EACb,wBAAwB;EACxB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,SAAO;EACP,YAAY;AACd;AACA;EACE,SAAO;EACP,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,UAAU;EACV,eAAe;EACf,aAAa;EACb,2BAA2B;EAC3B,qBAAqB;EACrB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAO;AACT;AACA;EACE,eAAe;EACf,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,oBAAoB;EACpB,SAAO;AACT;AACA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;EAC3B,YAAY;AACd","sourcesContent":[".wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.user-container {\n  background: #a9bdce;\n  flex: 1;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0.5rem;\n}\n.user-container label {\n  font-size: 14px;\n  margin-right: 1rem;\n}\n.user-container input {\n  border-radius: 3px;\n  border: none;\n  height: 100%;\n}\n.display-container {\n  background: #b2c7d9;\n  flex: 12;\n  overflow-y: scroll;\n}\n.input-container {\n  flex: 1;\n  display: flex;\n  justify-content: stretch;\n  align-items: stretch;\n}\n.input-container span {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 0.3rem;\n  width: 100%;\n}\n\n.chatting-input {\n  font-size: 12px;\n  height: 100%;\n  flex: 8;\n  border: none;\n}\n.send-button {\n  flex: 1;\n  background: #ffeb33;\n  border: none;\n  height: 100%;\n  border-radius: 3px;\n}\n.chatting-list li {\n  width: 90%;\n  padding: 0.3rem;\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n  margin-top: 0.5rem;\n}\n.profile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.profile .user {\n  font-size: 12px;\n  margin-bottom: 0.3rem;\n}\n.profile .image {\n  border-radius: 50%;\n  object-fit: cover;\n  width: 50px;\n  height: 50px;\n}\n.message {\n  border-radius: 5px;\n  padding: 0.2rem;\n  font-size: 12px;\n  margin-bottom: 0 5px;\n  flex: 7;\n}\n.time {\n  font-size: 14px;\n  margin: 0 5px;\n}\n\n.sent .message {\n  background: #ffeb33;\n}\n.received .message {\n  background: #fff;\n}\n\n.sent {\n  flex-direction: row-reverse;\n  float: right;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loading/Loading.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Loading/Loading.css ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".loading {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n}\n.loading .dot {\n  position: relative;\n  width: 2em;\n  height: 2em;\n  margin: 0.4em;\n  border-radius: 50%;\n}\n.loading .dot::before {\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: inherit;\n  border-radius: inherit;\n  animation: wave 1s ease-out infinite;\n}\n.loading .dot:nth-child(1) {\n  background: #00e4c0;\n}\n.loading .dot:nth-child(1)::before {\n  animation-delay: 0.2s;\n}\n.loading .dot:nth-child(2) {\n  background: #00bfd1;\n}\n.loading .dot:nth-child(2)::before {\n  animation-delay: 0.4s;\n}\n.loading .dot:nth-child(3) {\n  background: #0097dc;\n}\n.loading .dot:nth-child(3)::before {\n  animation-delay: 0.6s;\n}\n.loading .dot:nth-child(4) {\n  background: #006ed5;\n}\n.loading .dot:nth-child(4)::before {\n  animation-delay: 0.8s;\n}\n.loading .dot:nth-child(5) {\n  background: #0042b6;\n}\n.loading .dot:nth-child(5)::before {\n  animation-delay: 1s;\n}\n\n.loading .dot:nth-child(6) {\n  background: #000080;\n}\n.loading .dot:nth-child(6)::before {\n  animation-delay: 1.2s;\n}\n\n@keyframes wave {\n  50%,\n  75% {\n    transform: scale(1.8);\n  }\n  80%,\n  100% {\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/components/Loading/Loading.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sBAAsB;EACtB,oCAAoC;AACtC;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE;;IAEE,qBAAqB;EACvB;EACA;;IAEE,UAAU;EACZ;AACF","sourcesContent":[".loading {\n  display: flex;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  font-size: 16px;\n}\n.loading .dot {\n  position: relative;\n  width: 2em;\n  height: 2em;\n  margin: 0.4em;\n  border-radius: 50%;\n}\n.loading .dot::before {\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  background: inherit;\n  border-radius: inherit;\n  animation: wave 1s ease-out infinite;\n}\n.loading .dot:nth-child(1) {\n  background: #00e4c0;\n}\n.loading .dot:nth-child(1)::before {\n  animation-delay: 0.2s;\n}\n.loading .dot:nth-child(2) {\n  background: #00bfd1;\n}\n.loading .dot:nth-child(2)::before {\n  animation-delay: 0.4s;\n}\n.loading .dot:nth-child(3) {\n  background: #0097dc;\n}\n.loading .dot:nth-child(3)::before {\n  animation-delay: 0.6s;\n}\n.loading .dot:nth-child(4) {\n  background: #006ed5;\n}\n.loading .dot:nth-child(4)::before {\n  animation-delay: 0.8s;\n}\n.loading .dot:nth-child(5) {\n  background: #0042b6;\n}\n.loading .dot:nth-child(5)::before {\n  animation-delay: 1s;\n}\n\n.loading .dot:nth-child(6) {\n  background: #000080;\n}\n.loading .dot:nth-child(6)::before {\n  animation-delay: 1.2s;\n}\n\n@keyframes wave {\n  50%,\n  75% {\n    transform: scale(1.8);\n  }\n  80%,\n  100% {\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: \"Noto Sans KR\", sans-serif;\n}\nbody {\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\n\na {\n  text-decoration: none;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.fas.far.fab {\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Font Awesome 5 Free\";\n  display: inline-block;\n  font-style: normal;\n  font-feature-settings: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n.fas {\n  font-weight: 900;\n}\n\n.far.fab {\n  font-weight: 400;\n}\n\n.fal {\n  font-weight: 300;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,uCAAuC;AACzC;AACA;EACE,SAAS;EACT,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA+EE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,mCAAmC;EACnC,kCAAkC;EAClC,qBAAqB;EACrB,kBAAkB;EAClB,6BAAoB;EAApB,oBAAoB;EACpB,oBAAoB;EACpB,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":["* {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n  font-family: \"Noto Sans KR\", sans-serif;\n}\nbody {\n  margin: 0;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\n\na {\n  text-decoration: none;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.fas.far.fab {\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Font Awesome 5 Free\";\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n.fas {\n  font-weight: 900;\n}\n\n.far.fab {\n  font-weight: 400;\n}\n\n.fal {\n  font-weight: 300;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/ErrorPage.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/ErrorPage.css ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_404_page_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/404-page.svg */ "./src/pages/images/404-page.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_404_page_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".error-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vw;\n  width: 100vw;\n}\n\n.error-wrapper {\n  width: 70%;\n  height: 70%;\n  margin-top: 100px;\n  border-radius: 30px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n}\n\n/* @media screen and (max-width: 1028px) {\n  .error-wrapper {\n    width: 600px;\n    height: 600px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .error-wrapper {\n    width: 400px;\n    height: 400px;\n  }\n} */\n", "",{"version":3,"sources":["webpack://src/pages/ErrorPage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,yDAA4C;EAC5C,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;;;;;;;;;;;;GAYG","sourcesContent":[".error-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70vw;\n  width: 100vw;\n}\n\n.error-wrapper {\n  width: 70%;\n  height: 70%;\n  margin-top: 100px;\n  border-radius: 30px;\n  background-image: url(./images/404-page.svg);\n  background-position: center;\n  background-size: cover;\n}\n\n/* @media screen and (max-width: 1028px) {\n  .error-wrapper {\n    width: 600px;\n    height: 600px;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .error-wrapper {\n    width: 400px;\n    height: 400px;\n  }\n} */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Feature.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/LandingPage_CSS/Feature.css ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_feature_01_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/feature-01.svg */ "./src/pages/images/feature-01.svg");
/* harmony import */ var _images_feature_02_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/feature-02.svg */ "./src/pages/images/feature-02.svg");
/* harmony import */ var _images_feature_03_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/feature-03.svg */ "./src/pages/images/feature-03.svg");
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_feature_01_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_feature_02_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_feature_03_svg__WEBPACK_IMPORTED_MODULE_4__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* 기능 소개 블럭 */\n.feature-container {\n  background-color: #fff;\n  margin-top: 900px;\n  position: relative;\n  padding: 0 20px 0 20px;\n}\n\n.feature-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0;\n}\n.box-contanier {\n  width: 100%;\n  max-width: 70%;\n  margin: auto;\n}\n\n.white_space {\n  width: 100%;\n  height: 300px;\n}\n.boxes {\n  display: flex;\n  width: 100%;\n  height: 500px;\n  margin: 200px 0px;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.4);\n}\n\n.feature-info-01,\n.feature-info-02 {\n  flex: 1 1;\n}\n\n.feature-info-gif-01 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  flex: 1 1;\n  width: 100%;\n  height: 100%;\n}\n\n.feature-info-gif-02 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  flex: 1 1;\n  width: 100%;\n  height: 100%;\n}\n\n.feature-info-gif-02-sub {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  flex: 1 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n.feature-info-02-sub {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: right;\n  display: none;\n}\n\n.feature-info-gif-03 {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  flex: 1 1;\n  width: 100%;\n  height: 100%;\n}\n\n.feature-info-01 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.feature-info-01 h1 {\n  font-size: 2.3rem;\n  font-weight: 600;\n  color: rgb(63, 71, 82);\n}\n\n.feature-info-01 p {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: rgb(124, 129, 136);\n}\n\n.feature-info-02 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.feature-info-02 h1 {\n  font-size: 2.3rem;\n  font-weight: 600;\n  color: rgb(63, 71, 82);\n}\n\n.feature-info-02 p {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: rgb(124, 129, 136);\n}\n\n.feature-info-02-sub h1 {\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.feature-info-02-sub p {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: rgb(124, 129, 136);\n}\n\n@media screen and (max-width: 1028px) {\n  .boxes {\n    display: flex;\n    flex-direction: column;\n    height: 700px;\n  }\n\n  .feature-info-gif-01 {\n    flex: 2 1;\n  }\n\n  .feature-info-01 {\n    flex: 1 1;\n    text-align: center;\n  }\n\n  .feature-info-gif-02-sub {\n    display: block;\n    flex: 2 1;\n  }\n\n  .feature-info-02-sub {\n    display: block;\n    flex: 1 1;\n    text-align: center;\n  }\n\n  .feature-info-gif-02 {\n    display: none;\n  }\n\n  .feature-info-02 {\n    display: none;\n  }\n\n  .feature-info-01 h1 {\n    font-size: 2rem;\n  }\n\n  .feature-info-01 p {\n    font-size: 1.5rem;\n  }\n\n  .feature-info-02-sub h1 {\n    font-size: 2rem;\n    color: rgb(63, 71, 82);\n  }\n\n  .feature-info-02-sub p {\n    font-size: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .boxes {\n    display: flex;\n    flex-direction: column;\n    height: 600px;\n  }\n\n  .feature-info-gif-01 {\n    flex: 2 1;\n  }\n\n  .feature-info-01 {\n    flex: 1 1;\n    text-align: center;\n  }\n\n  .feature-info-gif-02-sub {\n    display: block;\n    flex: 2 1;\n  }\n\n  .feature-info-02-sub {\n    display: block;\n    flex: 1 1;\n    text-align: center;\n  }\n\n  .feature-info-gif-02 {\n    display: none;\n  }\n\n  .feature-info-02 {\n    display: none;\n  }\n\n  .feature-info-01 h1 {\n    font-size: 1.5rem;\n  }\n\n  .feature-info-01 p {\n    font-size: 1.3rem;\n  }\n\n  .feature-info-02-sub h1 {\n    font-size: 1.5rem;\n    color: rgb(63, 71, 82);\n  }\n\n  .feature-info-02-sub p {\n    font-size: 1.3rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/pages/LandingPage_CSS/Feature.css"],"names":[],"mappings":"AAAA,aAAa;AACb;EACE,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,cAAc;EACd,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;AACf;AACA;EACE,aAAa;EACb,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,iDAAiD;AACnD;;AAEA;;EAEE,SAAO;AACT;;AAEA;EACE,yDAA+C;EAC/C,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,SAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yDAA+C;EAC/C,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,SAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yDAA+C;EAC/C,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,SAAO;EACP,WAAW;EACX,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,yDAA+C;EAC/C,2BAA2B;EAC3B,sBAAsB;EACtB,4BAA4B;EAC5B,SAAO;EACP,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,aAAa;EACf;;EAEA;IACE,SAAO;EACT;;EAEA;IACE,SAAO;IACP,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,SAAO;EACT;;EAEA;IACE,cAAc;IACd,SAAO;IACP,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;IACf,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,aAAa;EACf;;EAEA;IACE,SAAO;EACT;;EAEA;IACE,SAAO;IACP,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,SAAO;EACT;;EAEA;IACE,cAAc;IACd,SAAO;IACP,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,sBAAsB;EACxB;;EAEA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["/* 기능 소개 블럭 */\n.feature-container {\n  background-color: #fff;\n  margin-top: 900px;\n  position: relative;\n  padding: 0 20px 0 20px;\n}\n\n.feature-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 0;\n}\n.box-contanier {\n  width: 100%;\n  max-width: 70%;\n  margin: auto;\n}\n\n.white_space {\n  width: 100%;\n  height: 300px;\n}\n.boxes {\n  display: flex;\n  width: 100%;\n  height: 500px;\n  margin: 200px 0px;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.4);\n}\n\n.feature-info-01,\n.feature-info-02 {\n  flex: 1;\n}\n\n.feature-info-gif-01 {\n  background-image: url(../images/feature-01.svg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.feature-info-gif-02 {\n  background-image: url(../images/feature-02.svg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.feature-info-gif-02-sub {\n  background-image: url(../images/feature-02.svg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n\n.feature-info-02-sub {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: right;\n  display: none;\n}\n\n.feature-info-gif-03 {\n  background-image: url(../images/feature-03.svg);\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  flex: 1;\n  width: 100%;\n  height: 100%;\n}\n\n.feature-info-01 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.feature-info-01 h1 {\n  font-size: 2.3rem;\n  font-weight: 600;\n  color: rgb(63, 71, 82);\n}\n\n.feature-info-01 p {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: rgb(124, 129, 136);\n}\n\n.feature-info-02 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n}\n\n.feature-info-02 h1 {\n  font-size: 2.3rem;\n  font-weight: 600;\n  color: rgb(63, 71, 82);\n}\n\n.feature-info-02 p {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: rgb(124, 129, 136);\n}\n\n.feature-info-02-sub h1 {\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.feature-info-02-sub p {\n  font-size: 1.5rem;\n  font-weight: 400;\n  color: rgb(124, 129, 136);\n}\n\n@media screen and (max-width: 1028px) {\n  .boxes {\n    display: flex;\n    flex-direction: column;\n    height: 700px;\n  }\n\n  .feature-info-gif-01 {\n    flex: 2;\n  }\n\n  .feature-info-01 {\n    flex: 1;\n    text-align: center;\n  }\n\n  .feature-info-gif-02-sub {\n    display: block;\n    flex: 2;\n  }\n\n  .feature-info-02-sub {\n    display: block;\n    flex: 1;\n    text-align: center;\n  }\n\n  .feature-info-gif-02 {\n    display: none;\n  }\n\n  .feature-info-02 {\n    display: none;\n  }\n\n  .feature-info-01 h1 {\n    font-size: 2rem;\n  }\n\n  .feature-info-01 p {\n    font-size: 1.5rem;\n  }\n\n  .feature-info-02-sub h1 {\n    font-size: 2rem;\n    color: rgb(63, 71, 82);\n  }\n\n  .feature-info-02-sub p {\n    font-size: 1.5rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .boxes {\n    display: flex;\n    flex-direction: column;\n    height: 600px;\n  }\n\n  .feature-info-gif-01 {\n    flex: 2;\n  }\n\n  .feature-info-01 {\n    flex: 1;\n    text-align: center;\n  }\n\n  .feature-info-gif-02-sub {\n    display: block;\n    flex: 2;\n  }\n\n  .feature-info-02-sub {\n    display: block;\n    flex: 1;\n    text-align: center;\n  }\n\n  .feature-info-gif-02 {\n    display: none;\n  }\n\n  .feature-info-02 {\n    display: none;\n  }\n\n  .feature-info-01 h1 {\n    font-size: 1.5rem;\n  }\n\n  .feature-info-01 p {\n    font-size: 1.3rem;\n  }\n\n  .feature-info-02-sub h1 {\n    font-size: 1.5rem;\n    color: rgb(63, 71, 82);\n  }\n\n  .feature-info-02-sub p {\n    font-size: 1.3rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Footer.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/LandingPage_CSS/Footer.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_hta_footer_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/hta_footer.svg */ "./src/pages/images/hta_footer.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_hta_footer_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".footer-container {\n  width: 100%;\n  position: relative;\n  background: #dcdde1;\n}\n\n.footer-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 40px 60px;\n  text-align: center;\n}\n\n.footer-wrapper p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.footer-logo {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  display: block;\n  height: 80px;\n  width: 240px;\n}\n\n.footer-content {\n  flex: 1 1;\n  margin-top: 12px;\n  line-height: 3rem;\n  color: rgb(63, 71, 82);\n}\n.footer-title {\n  font-size: 2rem;\n  font-weight: 700;\n  padding-bottom: 30px;\n}\n/* 아이콘 */\n.fa-github-square,\n.fa-twitter-square,\n.fa-instagram-square {\n  font-size: 2em;\n  padding-left: 20px;\n  color: rgb(63, 71, 82);\n}\n\n.fa-headset {\n  font-size: 1.3em;\n}\n\n.footer-info-social {\n  text-align: center;\n  padding-bottom: 30px;\n  font-size: 20px;\n}\n\n/* 푸터 인포 */\n.footer-info-container {\n  text-align: center;\n  padding-bottom: 50px;\n  color: rgb(63, 71, 82);\n  font-size: 20px;\n}\n\n@media screen and (max-width: 1028px) {\n  .footer-content.sub {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .footer-content.sub,\n  .footer-content.centacts {\n    display: none;\n  }\n\n  .footer-logo {\n    margin-bottom: 50px;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/pages/LandingPage_CSS/Footer.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,yDAAiD;EACjD,4BAA4B;EAC5B,cAAc;EACd,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,SAAO;EACP,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;AACtB;AACA,QAAQ;AACR;;;EAGE,cAAc;EACd,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;AACjB;;AAEA,UAAU;AACV;EACE,kBAAkB;EAClB,oBAAoB;EACpB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;;IAEE,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":[".footer-container {\n  width: 100%;\n  position: relative;\n  background: #dcdde1;\n}\n\n.footer-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 40px 60px;\n  text-align: center;\n}\n\n.footer-wrapper p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.footer-logo {\n  background-image: url(\"../images/hta_footer.svg\");\n  background-repeat: no-repeat;\n  display: block;\n  height: 80px;\n  width: 240px;\n}\n\n.footer-content {\n  flex: 1;\n  margin-top: 12px;\n  line-height: 3rem;\n  color: rgb(63, 71, 82);\n}\n.footer-title {\n  font-size: 2rem;\n  font-weight: 700;\n  padding-bottom: 30px;\n}\n/* 아이콘 */\n.fa-github-square,\n.fa-twitter-square,\n.fa-instagram-square {\n  font-size: 2em;\n  padding-left: 20px;\n  color: rgb(63, 71, 82);\n}\n\n.fa-headset {\n  font-size: 1.3em;\n}\n\n.footer-info-social {\n  text-align: center;\n  padding-bottom: 30px;\n  font-size: 20px;\n}\n\n/* 푸터 인포 */\n.footer-info-container {\n  text-align: center;\n  padding-bottom: 50px;\n  color: rgb(63, 71, 82);\n  font-size: 20px;\n}\n\n@media screen and (max-width: 1028px) {\n  .footer-content.sub {\n    display: none;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .footer-content.sub,\n  .footer-content.centacts {\n    display: none;\n  }\n\n  .footer-logo {\n    margin-bottom: 50px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/LandingPage.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/LandingPage_CSS/LandingPage.css ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/NavBar.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/LandingPage_CSS/NavBar.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/logo.svg */ "./src/pages/images/logo.svg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* 헤더 */\n.navbar-header-container {\n  display: flex;\n  align-items: center;\n  -webkit-box-align: center;\n  position: fixed;\n  height: 150px;\n  width: 100%;\n  z-index: 100;\n  background: linear-gradient(\n    112deg,\n    rgba(31, 80, 222, 1) 0%,\n    rgba(50, 38, 236, 1) 31%,\n    rgba(51, 46, 195, 1) 71%,\n    rgba(51, 51, 166, 1) 100%\n  );\n  padding: 0px 50px;\n}\n.wrapper {\n  position: fixed;\n}\n.navbar-header-logo {\n  flex: 1 1 auto;\n}\n\n.navbar-header-logo a {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100px;\n  height: 100px;\n  display: block;\n  text-indent: -100em;\n}\n\n.navbar-header-menu {\n  flex-wrap: wrap;\n  list-style: none;\n  display: flex;\n  padding-left: 0;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\n.navbar-header-menu a {\n  padding-left: 20px;\n  text-align: end;\n  color: white;\n}\n\n.navbar-header-menu li:not(:last-of-type):after {\n  content: \"|\";\n  margin-left: 20px;\n  color: white;\n}\n\n.hamburgerBar-container {\n  font-size: 30px;\n  color: #fff;\n}\n\n.hide-hamburgerBar {\n  display: none;\n}\n\n.show-hamburgerBar {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-backdrop-filter: blur(1px);\n          backdrop-filter: blur(1px);\n  display: grid;\n  align-items: center;\n  left: 0px;\n  z-index: 19;\n  animation: 0.4s ease 0s 1 normal none running iAjNNh;\n  opacity: 1;\n  top: 0px;\n}\n\n.hamburgerBar_menu {\n  padding: 10px 0px 0px 10px;\n  position: absolute;\n  color: rgb(255, 255, 255);\n  width: 300px;\n  height: 100%;\n  top: 0px;\n  right: 0px;\n  background: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  z-index: 20;\n}\n\n.hamburgerBar_exitBtn {\n  display: flex;\n  justify-content: end;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  font-size: 40px;\n  color: black;\n  padding: 50px 20px 45px 20px;\n  border-bottom: 1px solid black;\n}\n\n.hamburgerBar_exit_icon:before {\n  content: \"\\f039\";\n}\n\n.hamburgerBar-menu {\n  display: grid;\n  grid-template-rows: repeat(6, 60px);\n  text-align: center;\n  text-decoration: none;\n  list-style: none;\n}\n\n.hamburgerBar-list {\n  display: flex;\n  padding: 20px;\n  align-items: center;\n  justify-content: flex-start;\n  font-size: 20px;\n  font-weight: 500;\n  list-style: none;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.hamburgerBar-list a {\n  color: black;\n}\n\n.hamburger-Btn {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .navbar-header-menu {\n    display: none;\n  }\n\n  .hamburger-Btn {\n    display: block;\n    border: none;\n    color: #fff;\n    font-size: 30px;\n    cursor: pointer;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/pages/LandingPage_CSS/NavBar.css"],"names":[],"mappings":"AAAA,OAAO;AACP;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;EACf,aAAa;EACb,WAAW;EACX,YAAY;EACZ;;;;;;GAMC;EACD,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,yDAA2C;EAC3C,2BAA2B;EAC3B,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kCAA0B;UAA1B,0BAA0B;EAC1B,aAAa;EAEb,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,oDAAoD;EACpD,UAAU;EACV,QAAQ;AACV;;AAEA;EACE,0BAA0B;EAC1B,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,QAAQ;EACR,UAAU;EACV,8BAA8B;EAC9B,aAAa;EACb,sBAAsB;EAEtB,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,eAAe;EACf,YAAY;EACZ,4BAA4B;EAC5B,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mCAAmC;EACnC,kBAAkB;EAClB,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,aAAa;EAEb,mBAAmB;EAEnB,2BAA2B;EAC3B,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,cAAc;IACd,YAAY;IACZ,WAAW;IACX,eAAe;IACf,eAAe;EACjB;AACF","sourcesContent":["/* 헤더 */\n.navbar-header-container {\n  display: flex;\n  align-items: center;\n  -webkit-box-align: center;\n  position: fixed;\n  height: 150px;\n  width: 100%;\n  z-index: 100;\n  background: linear-gradient(\n    112deg,\n    rgba(31, 80, 222, 1) 0%,\n    rgba(50, 38, 236, 1) 31%,\n    rgba(51, 46, 195, 1) 71%,\n    rgba(51, 51, 166, 1) 100%\n  );\n  padding: 0px 50px;\n}\n.wrapper {\n  position: fixed;\n}\n.navbar-header-logo {\n  flex: 1 1 auto;\n}\n\n.navbar-header-logo a {\n  background-image: url(\"../images/logo.svg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 100px;\n  height: 100px;\n  display: block;\n  text-indent: -100em;\n}\n\n.navbar-header-menu {\n  flex-wrap: wrap;\n  list-style: none;\n  display: flex;\n  padding-left: 0;\n  font-weight: 600;\n  font-size: 1.1rem;\n}\n\n.navbar-header-menu a {\n  padding-left: 20px;\n  text-align: end;\n  color: white;\n}\n\n.navbar-header-menu li:not(:last-of-type):after {\n  content: \"|\";\n  margin-left: 20px;\n  color: white;\n}\n\n.hamburgerBar-container {\n  font-size: 30px;\n  color: #fff;\n}\n\n.hide-hamburgerBar {\n  display: none;\n}\n\n.show-hamburgerBar {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(1px);\n  display: grid;\n  -webkit-box-align: center;\n  align-items: center;\n  left: 0px;\n  z-index: 19;\n  animation: 0.4s ease 0s 1 normal none running iAjNNh;\n  opacity: 1;\n  top: 0px;\n}\n\n.hamburgerBar_menu {\n  padding: 10px 0px 0px 10px;\n  position: absolute;\n  color: rgb(255, 255, 255);\n  width: 300px;\n  height: 100%;\n  top: 0px;\n  right: 0px;\n  background: rgb(255, 255, 255);\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  z-index: 20;\n}\n\n.hamburgerBar_exitBtn {\n  display: flex;\n  justify-content: end;\n  background: transparent;\n  cursor: pointer;\n  outline: none;\n  font-size: 40px;\n  color: black;\n  padding: 50px 20px 45px 20px;\n  border-bottom: 1px solid black;\n}\n\n.hamburgerBar_exit_icon:before {\n  content: \"\\f039\";\n}\n\n.hamburgerBar-menu {\n  display: grid;\n  grid-template-rows: repeat(6, 60px);\n  text-align: center;\n  text-decoration: none;\n  list-style: none;\n}\n\n.hamburgerBar-list {\n  display: flex;\n  padding: 20px;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  font-size: 20px;\n  font-weight: 500;\n  list-style: none;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.hamburgerBar-list a {\n  color: black;\n}\n\n.hamburger-Btn {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .navbar-header-menu {\n    display: none;\n  }\n\n  .hamburger-Btn {\n    display: block;\n    border: none;\n    color: #fff;\n    font-size: 30px;\n    cursor: pointer;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Service.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/LandingPage_CSS/Service.css ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_layered_waves_haikei_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/layered-waves-haikei.svg */ "./src/pages/images/layered-waves-haikei.svg");
/* harmony import */ var _images_alba_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/alba.svg */ "./src/pages/images/alba.svg");
/* harmony import */ var _images_bubble_1_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/bubble-1.svg */ "./src/pages/images/bubble-1.svg");
/* harmony import */ var _images_bubble_2_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/bubble-2.svg */ "./src/pages/images/bubble-2.svg");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_layered_waves_haikei_svg__WEBPACK_IMPORTED_MODULE_2__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_alba_svg__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_bubble_1_svg__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_bubble_2_svg__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* 서비스 소개 블럭 */\n.service-container {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  height: 750px;\n  margin-top: 150px;\n  position: fixed;\n  width: 100%;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + "),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") center;\n  background-size: cover, auto, cover, cover;\n  background-repeat: repeat-x, no-repeat, no-repeat, repeat-y;\n  animation: wave-moving 3s linear infinite;\n}\n\n@keyframes wave-moving {\n  0% {\n    background-position: 100% 90%, center 105%, center, center;\n  }\n\n  50% {\n    background-position: 80% 85%, center 105%, center, center;\n  }\n\n  100% {\n    background-position: 100% 90%, center 105%, center, center;\n  }\n}\n\n.service-wrapper {\n  margin-top: 100px;\n  min-width: 60%;\n  animation: showText 0.5s;\n  animation-fill-mode: both;\n}\n\n.service-wrapper > p:nth-child(1) {\n  font-size: 2.5rem;\n  color: rgb(63, 71, 82);\n  font-weight: 600;\n  margin-top: 30px;\n}\n\n.service-wrapper > p:nth-child(2) {\n  font-size: 3rem;\n  padding: 30px;\n  color: rgb(128, 132, 137);\n  font-weight: 600;\n}\n\n.service-wrapper > p:nth-child(3) {\n  font-size: 2.5rem;\n  color: rgb(63, 71, 82);\n  font-weight: 600;\n}\n\n@keyframes showText {\n  from {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n.service-scroll {\n  position: absolute;\n  top: 88%;\n  left: 50%;\n  font-size: 3rem;\n  color: #fff;\n  animation: showText 1s;\n  animation: scroll 1.5s infinite;\n  animation-fill-mode: both;\n}\n\n@keyframes scroll {\n  0% {\n    opacity: 0.4;\n  }\n  50% {\n    opacity: 0.7;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n\n.typing-wrapper {\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  padding: 40px 0px;\n  margin-top: 50px;\n  border-radius: 20px;\n  box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.4);\n  animation: showTyping 0.8s;\n}\n\n.typing-text {\n  font-size: 2rem;\n}\n\n#typing {\n  position: relative;\n}\n\n#typing::after {\n  content: \"|\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: -5px;\n  width: 4px;\n  height: 100%;\n}\n#typing.active::after {\n  display: none;\n}\n\n@keyframes showTyping {\n  from {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .typing-text {\n    font-size: 1.7rem;\n  }\n  .service-wrapper > p:nth-child(1) {\n    font-size: 2rem;\n    color: rgb(63, 71, 82);\n    font-weight: 600;\n    margin-top: 30px;\n  }\n\n  .service-wrapper > p:nth-child(2) {\n    font-size: 2.5rem;\n    padding: 30px;\n    color: rgb(124, 129, 136);\n    font-weight: 600;\n  }\n\n  .service-wrapper > p:nth-child(3) {\n    font-size: 2rem;\n    color: rgb(63, 71, 82);\n    font-weight: 600;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .typing-text {\n    font-size: 1.3rem;\n  }\n\n  .service-wrapper > p:nth-child(1) {\n    font-size: 1.5rem;\n    color: rgb(63, 71, 82);\n    font-weight: 600;\n    margin-top: 30px;\n  }\n\n  .service-wrapper > p:nth-child(2) {\n    font-size: 2rem;\n    padding: 30px;\n    color: rgb(124, 129, 136);\n    font-weight: 600;\n  }\n\n  .service-wrapper > p:nth-child(3) {\n    font-size: 1.5rem;\n    color: rgb(63, 71, 82);\n    font-weight: 600;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/pages/LandingPage_CSS/Service.css"],"names":[],"mappings":"AAAA,cAAc;AACd;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,WAAW;EACX;2FACiE;EACjE,0CAA0C;EAC1C,2DAA2D;EAC3D,yCAAyC;AAC3C;;AAEA;EACE;IACE,0DAA0D;EAC5D;;EAEA;IACE,yDAAyD;EAC3D;;EAEA;IACE,0DAA0D;EAC5D;AACF;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,wBAAwB;EACxB,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,0BAA0B;IAC1B,UAAU;EACZ;AACF;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,eAAe;EACf,WAAW;EACX,sBAAsB;EACtB,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;EACA;IACE,YAAY;EACd;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,iDAAiD;EACjD,0BAA0B;AAC5B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,UAAU;EACV,YAAY;AACd;AACA;EACE,aAAa;AACf;;AAEA;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,0BAA0B;IAC1B,UAAU;EACZ;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;IACf,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,aAAa;IACb,yBAAyB;IACzB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,sBAAsB;IACtB,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,aAAa;IACb,yBAAyB;IACzB,gBAAgB;EAClB;;EAEA;IACE,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;EAClB;AACF","sourcesContent":["/* 서비스 소개 블럭 */\n.service-container {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  height: 750px;\n  margin-top: 150px;\n  position: fixed;\n  width: 100%;\n  background: url(../images/layered-waves-haikei.svg), url(../images/alba.svg),\n    url(../images/bubble-1.svg), url(../images/bubble-2.svg) center;\n  background-size: cover, auto, cover, cover;\n  background-repeat: repeat-x, no-repeat, no-repeat, repeat-y;\n  animation: wave-moving 3s linear infinite;\n}\n\n@keyframes wave-moving {\n  0% {\n    background-position: 100% 90%, center 105%, center, center;\n  }\n\n  50% {\n    background-position: 80% 85%, center 105%, center, center;\n  }\n\n  100% {\n    background-position: 100% 90%, center 105%, center, center;\n  }\n}\n\n.service-wrapper {\n  margin-top: 100px;\n  min-width: 60%;\n  animation: showText 0.5s;\n  animation-fill-mode: both;\n}\n\n.service-wrapper > p:nth-child(1) {\n  font-size: 2.5rem;\n  color: rgb(63, 71, 82);\n  font-weight: 600;\n  margin-top: 30px;\n}\n\n.service-wrapper > p:nth-child(2) {\n  font-size: 3rem;\n  padding: 30px;\n  color: rgb(128, 132, 137);\n  font-weight: 600;\n}\n\n.service-wrapper > p:nth-child(3) {\n  font-size: 2.5rem;\n  color: rgb(63, 71, 82);\n  font-weight: 600;\n}\n\n@keyframes showText {\n  from {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n.service-scroll {\n  position: absolute;\n  top: 88%;\n  left: 50%;\n  font-size: 3rem;\n  color: #fff;\n  animation: showText 1s;\n  animation: scroll 1.5s infinite;\n  animation-fill-mode: both;\n}\n\n@keyframes scroll {\n  0% {\n    opacity: 0.4;\n  }\n  50% {\n    opacity: 0.7;\n  }\n  100% {\n    opacity: 0.4;\n  }\n}\n\n.typing-wrapper {\n  display: flex;\n  justify-content: center;\n  background-color: #fff;\n  padding: 40px 0px;\n  margin-top: 50px;\n  border-radius: 20px;\n  box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.4);\n  animation: showTyping 0.8s;\n}\n\n.typing-text {\n  font-size: 2rem;\n}\n\n#typing {\n  position: relative;\n}\n\n#typing::after {\n  content: \"|\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: -5px;\n  width: 4px;\n  height: 100%;\n}\n#typing.active::after {\n  display: none;\n}\n\n@keyframes showTyping {\n  from {\n    transform: translateY(30px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0px);\n    opacity: 1;\n  }\n}\n\n@media screen and (max-width: 1024px) {\n  .typing-text {\n    font-size: 1.7rem;\n  }\n  .service-wrapper > p:nth-child(1) {\n    font-size: 2rem;\n    color: rgb(63, 71, 82);\n    font-weight: 600;\n    margin-top: 30px;\n  }\n\n  .service-wrapper > p:nth-child(2) {\n    font-size: 2.5rem;\n    padding: 30px;\n    color: rgb(124, 129, 136);\n    font-weight: 600;\n  }\n\n  .service-wrapper > p:nth-child(3) {\n    font-size: 2rem;\n    color: rgb(63, 71, 82);\n    font-weight: 600;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .typing-text {\n    font-size: 1.3rem;\n  }\n\n  .service-wrapper > p:nth-child(1) {\n    font-size: 1.5rem;\n    color: rgb(63, 71, 82);\n    font-weight: 600;\n    margin-top: 30px;\n  }\n\n  .service-wrapper > p:nth-child(2) {\n    font-size: 2rem;\n    padding: 30px;\n    color: rgb(124, 129, 136);\n    font-weight: 600;\n  }\n\n  .service-wrapper > p:nth-child(3) {\n    font-size: 1.5rem;\n    color: rgb(63, 71, 82);\n    font-weight: 600;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/TopBtn.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/LandingPage_CSS/TopBtn.css ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".topBtn {\n  position: fixed;\n  opacity: 0;\n  bottom: 50px;\n  right: 50px;\n  z-index: -10;\n  border-radius: 20%;\n  border: 0 none;\n  background-color: transparent;\n  color: #ffffff;\n  letter-spacing: -0.06em;\n  cursor: pointer;\n  transition: opacity 0.3s ease-in;\n}\n\n.fa-angle-double-up {\n  font-size: 3rem;\n  color: rgb(50, 108, 249);\n}\n.topBtn.active {\n  z-index: 100;\n  opacity: 1;\n}\n\n.fa-angle-double-up:hover {\n  color: #fff;\n}\n\n.topBtn:hover,\n.topBtn:focus,\n.topBtn:active {\n  outline: 0 none;\n}\n\n@media screen and (min-width: 1140px) {\n}\n\n@media screen and (min-width: 768px) {\n}\n", "",{"version":3,"sources":["webpack://src/pages/LandingPage_CSS/TopBtn.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,UAAU;EACV,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,6BAA6B;EAC7B,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,eAAe;EACf,wBAAwB;AAC1B;AACA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;AACA;;AAEA;AACA","sourcesContent":[".topBtn {\n  position: fixed;\n  opacity: 0;\n  bottom: 50px;\n  right: 50px;\n  z-index: -10;\n  border-radius: 20%;\n  border: 0 none;\n  background-color: transparent;\n  color: #ffffff;\n  letter-spacing: -0.06em;\n  cursor: pointer;\n  transition: opacity 0.3s ease-in;\n}\n\n.fa-angle-double-up {\n  font-size: 3rem;\n  color: rgb(50, 108, 249);\n}\n.topBtn.active {\n  z-index: 100;\n  opacity: 1;\n}\n\n.fa-angle-double-up:hover {\n  color: #fff;\n}\n\n.topBtn:hover,\n.topBtn:focus,\n.topBtn:active {\n  outline: 0 none;\n}\n\n@media screen and (min-width: 1140px) {\n}\n\n@media screen and (min-width: 768px) {\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Map.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/Map.css ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".map-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n\n#map {\n  width: 100%;\n  height: calc(100% - 220px);\n}\n\n.search-filter-container {\n  background-color: #fff;\n  border-bottom: 1px solid rgb(205, 205, 205);\n  padding-top: 150px;\n  display: flex;\n  height: 220px;\n}\n\n.search-wrapper {\n  width: 400px;\n  flex-shrink: 0;\n  display: flex;\n  border-right: 1px solid rgb(231, 231, 231);\n  padding: 10px;\n}\n\n.filter-container {\n  flex: 1 1;\n  display: flex;\n  justify-content: space-between;\n}\n\n.filter-item {\n  display: flex;\n  width: 100%;\n  padding: 10px;\n}\n\n.filter-item > select,\n.filter-item > input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgb(205, 205, 205);\n  border-radius: 5px;\n  outline: none;\n  font-size: 1em;\n}\n\n.btn-container {\n  display: none;\n}\n\n.search-input {\n  display: flex;\n  align-self: center;\n  border: none;\n  flex: 1 1;\n  outline: none;\n  background-color: transparent;\n  margin-left: 20px;\n  font-size: 20px;\n}\n\n.search-input::placeholder {\n  font-size: 18px;\n  color: rgb(195, 195, 195);\n}\n\n.search-btn {\n  width: 50px;\n  border: none;\n  border-radius: 4px;\n  background-color: rgb(50, 108, 249);\n  color: #fff;\n  margin-left: 5px;\n  font-size: 1em;\n  cursor: pointer;\n  font-weight: 700;\n}\n\n.fa-search {\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.inputForm {\n  position: fixed;\n  width: 400px;\n  margin-top: 70px;\n  height: 100%;\n  overflow-y: hidden;\n  border-right: 1px solid rgb(231, 231, 231);\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: 2;\n}\n\n.list-container {\n  display: flex;\n  justify-content: space-between;\n  width: 400px;\n  padding: 20px 10px;\n  border-bottom: 1px solid rgb(205, 205, 205);\n}\n\n.list-image {\n  background-color: rgb(205, 205, 205);\n  font-size: 10px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100px;\n  height: 100px;\n}\n\n.list-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 200px;\n  margin-left: 5px;\n}\n\n.list-info > h1 {\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.list-location {\n  font-weight: 400;\n}\n.list-created {\n  font-weight: 100;\n}\n\n.list-btn {\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: rgb(50, 108, 249);\n  color: #fff;\n  border-radius: 4px;\n  align-self: center;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.hide-filter-item {\n  display: none;\n}\n\n.show-filter-item {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .search-wrapper {\n    width: 300px;\n  }\n\n  .search-input {\n    font-size: 18px;\n    width: 150px;\n  }\n\n  .search-input::placeholder {\n    font-size: 16px;\n    color: rgb(48, 45, 45);\n  }\n\n  .search-btn {\n    width: 40px;\n    height: 40px;\n    align-self: center;\n    font-size: 0.9em;\n  }\n\n  .filter-container {\n    display: none;\n  }\n\n  .hide-filter-item {\n    display: none;\n  }\n\n  .show-filter-item {\n    position: absolute;\n    left: 300px;\n    top: 220px;\n    z-index: 2;\n    width: calc(100% - 300px);\n    height: 155px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .filter-item > select {\n    width: 100%;\n    margin: 10px;\n    font-size: 1em;\n    font-weight: 400;\n    outline: none;\n  }\n\n  .inputForm {\n    width: 300px;\n  }\n\n  .list-container {\n    width: 300px;\n  }\n\n  .list-image {\n    display: none;\n  }\n\n  .list-info {\n    flex: 2 1;\n    font-size: 15px;\n  }\n\n  .list-location {\n    font-weight: 400;\n    font-size: 1.2em;\n  }\n  .list-created {\n    font-weight: 100;\n    font-size: 1.2em;\n  }\n\n  .list-btn {\n    width: 40px;\n    height: 40px;\n    margin: 0 0 0 5px;\n  }\n\n  .btn-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .filterBar-btn {\n    border: none;\n    border-radius: 5px;\n    height: 40px;\n    width: 40px;\n    font-size: 20px;\n    color: #fff;\n    background-color: rgb(50, 108, 249);\n  }\n}\n\n.wrap {\n  position: absolute;\n  left: 0;\n  bottom: 40px;\n  width: 288px;\n  height: 132px;\n  margin-left: -144px;\n  text-align: left;\n  overflow: hidden;\n  font-size: 12px;\n  font-family: \"Malgun Gothic\", dotum, \"돋움\", sans-serif;\n  line-height: 1.5;\n}\n.wrap * {\n  padding: 0;\n  margin: 0;\n}\n.wrap .info {\n  width: 286px;\n  height: 120px;\n  border-radius: 5px;\n  border-bottom: 2px solid #ccc;\n  border-right: 1px solid #ccc;\n  overflow: hidden;\n  background: #fff;\n}\n.wrap .info:nth-child(1) {\n  border: 0;\n  box-shadow: 0px 1px 2px #888;\n}\n.info .title {\n  padding: 5px 0 0 10px;\n  height: 30px;\n  background: #eee;\n  border-bottom: 1px solid #ddd;\n  font-size: 18px;\n  font-weight: bold;\n}\n.info .close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #888;\n  width: 17px;\n  height: 17px;\n  background: url(\"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png\");\n}\n.info .close:hover {\n  cursor: pointer;\n}\n.info .body {\n  position: relative;\n  overflow: hidden;\n}\n.info .desc {\n  position: relative;\n  margin: 13px 0 0 90px;\n  height: 75px;\n}\n.desc .ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.desc .jibun {\n  font-size: 11px;\n  color: #888;\n  margin-top: -2px;\n}\n.info .img {\n  position: absolute;\n  top: 6px;\n  left: 5px;\n  width: 73px;\n  height: 71px;\n  border: 1px solid #ddd;\n  color: #888;\n  overflow: hidden;\n}\n.info:after {\n  content: \"\";\n  position: absolute;\n  margin-left: -12px;\n  left: 50%;\n  bottom: 0;\n  width: 22px;\n  height: 12px;\n  background: url(\"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png\");\n}\n.info .link {\n  color: #5085bb;\n}\n", "",{"version":3,"sources":["webpack://src/pages/Map.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,sBAAsB;EACtB,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,0CAA0C;EAC1C,aAAa;AACf;;AAEA;EACE,SAAO;EACP,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,WAAW;EACX,aAAa;AACf;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,YAAY;EACZ,SAAO;EACP,aAAa;EACb,6BAA6B;EAC7B,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mCAAmC;EACnC,WAAW;EACX,gBAAgB;EAChB,cAAc;EACd,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,0CAA0C;EAC1C,0CAA0C;EAC1C,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,kBAAkB;EAClB,2CAA2C;AAC7C;;AAEA;EACE,oCAAoC;EACpC,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mCAAmC;EACnC,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,YAAY;EACd;;EAEA;IACE,eAAe;IACf,YAAY;EACd;;EAEA;IACE,eAAe;IACf,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,UAAU;IACV,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,SAAO;IACP,eAAe;EACjB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;EACA;IACE,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;EACb;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,WAAW;IACX,mCAAmC;EACrC;AACF;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,eAAe;EACf,qDAAqD;EACrD,gBAAgB;AAClB;AACA;EACE,UAAU;EACV,SAAS;AACX;AACA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,6BAA6B;EAC7B,4BAA4B;EAC5B,gBAAgB;EAChB,gBAAgB;AAClB;AACA;EACE,SAAS;EACT,4BAA4B;AAC9B;AACA;EACE,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;EAChB,6BAA6B;EAC7B,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,WAAW;EACX,WAAW;EACX,YAAY;EACZ,6FAA6F;AAC/F;AACA;EACE,eAAe;AACjB;AACA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,WAAW;EACX,YAAY;EACZ,4FAA4F;AAC9F;AACA;EACE,cAAc;AAChB","sourcesContent":[".map-container {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n}\n\n#map {\n  width: 100%;\n  height: calc(100% - 220px);\n}\n\n.search-filter-container {\n  background-color: #fff;\n  border-bottom: 1px solid rgb(205, 205, 205);\n  padding-top: 150px;\n  display: flex;\n  height: 220px;\n}\n\n.search-wrapper {\n  width: 400px;\n  flex-shrink: 0;\n  display: flex;\n  border-right: 1px solid rgb(231, 231, 231);\n  padding: 10px;\n}\n\n.filter-container {\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n}\n\n.filter-item {\n  display: flex;\n  width: 100%;\n  padding: 10px;\n}\n\n.filter-item > select,\n.filter-item > input {\n  width: 100%;\n  height: 100%;\n  border: 1px solid rgb(205, 205, 205);\n  border-radius: 5px;\n  outline: none;\n  font-size: 1em;\n}\n\n.btn-container {\n  display: none;\n}\n\n.search-input {\n  display: flex;\n  align-self: center;\n  border: none;\n  flex: 1;\n  outline: none;\n  background-color: transparent;\n  margin-left: 20px;\n  font-size: 20px;\n}\n\n.search-input::placeholder {\n  font-size: 18px;\n  color: rgb(195, 195, 195);\n}\n\n.search-btn {\n  width: 50px;\n  border: none;\n  border-radius: 4px;\n  background-color: rgb(50, 108, 249);\n  color: #fff;\n  margin-left: 5px;\n  font-size: 1em;\n  cursor: pointer;\n  font-weight: 700;\n}\n\n.fa-search {\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.inputForm {\n  position: fixed;\n  width: 400px;\n  margin-top: 70px;\n  height: 100%;\n  overflow-y: hidden;\n  border-right: 1px solid rgb(231, 231, 231);\n  background-color: rgba(255, 255, 255, 0.7);\n  z-index: 2;\n}\n\n.list-container {\n  display: flex;\n  justify-content: space-between;\n  width: 400px;\n  padding: 20px 10px;\n  border-bottom: 1px solid rgb(205, 205, 205);\n}\n\n.list-image {\n  background-color: rgb(205, 205, 205);\n  font-size: 10px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100px;\n  height: 100px;\n}\n\n.list-info {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 200px;\n  margin-left: 5px;\n}\n\n.list-info > h1 {\n  font-size: 1.4rem;\n  font-weight: bold;\n}\n\n.list-location {\n  font-weight: 400;\n}\n.list-created {\n  font-weight: 100;\n}\n\n.list-btn {\n  width: 50px;\n  height: 50px;\n  border: none;\n  background-color: rgb(50, 108, 249);\n  color: #fff;\n  border-radius: 4px;\n  align-self: center;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.hide-filter-item {\n  display: none;\n}\n\n.show-filter-item {\n  display: none;\n}\n\n@media screen and (max-width: 768px) {\n  .search-wrapper {\n    width: 300px;\n  }\n\n  .search-input {\n    font-size: 18px;\n    width: 150px;\n  }\n\n  .search-input::placeholder {\n    font-size: 16px;\n    color: rgb(48, 45, 45);\n  }\n\n  .search-btn {\n    width: 40px;\n    height: 40px;\n    align-self: center;\n    font-size: 0.9em;\n  }\n\n  .filter-container {\n    display: none;\n  }\n\n  .hide-filter-item {\n    display: none;\n  }\n\n  .show-filter-item {\n    position: absolute;\n    left: 300px;\n    top: 220px;\n    z-index: 2;\n    width: calc(100% - 300px);\n    height: 155px;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .filter-item > select {\n    width: 100%;\n    margin: 10px;\n    font-size: 1em;\n    font-weight: 400;\n    outline: none;\n  }\n\n  .inputForm {\n    width: 300px;\n  }\n\n  .list-container {\n    width: 300px;\n  }\n\n  .list-image {\n    display: none;\n  }\n\n  .list-info {\n    flex: 2;\n    font-size: 15px;\n  }\n\n  .list-location {\n    font-weight: 400;\n    font-size: 1.2em;\n  }\n  .list-created {\n    font-weight: 100;\n    font-size: 1.2em;\n  }\n\n  .list-btn {\n    width: 40px;\n    height: 40px;\n    margin: 0 0 0 5px;\n  }\n\n  .btn-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n\n  .filterBar-btn {\n    border: none;\n    border-radius: 5px;\n    height: 40px;\n    width: 40px;\n    font-size: 20px;\n    color: #fff;\n    background-color: rgb(50, 108, 249);\n  }\n}\n\n.wrap {\n  position: absolute;\n  left: 0;\n  bottom: 40px;\n  width: 288px;\n  height: 132px;\n  margin-left: -144px;\n  text-align: left;\n  overflow: hidden;\n  font-size: 12px;\n  font-family: \"Malgun Gothic\", dotum, \"돋움\", sans-serif;\n  line-height: 1.5;\n}\n.wrap * {\n  padding: 0;\n  margin: 0;\n}\n.wrap .info {\n  width: 286px;\n  height: 120px;\n  border-radius: 5px;\n  border-bottom: 2px solid #ccc;\n  border-right: 1px solid #ccc;\n  overflow: hidden;\n  background: #fff;\n}\n.wrap .info:nth-child(1) {\n  border: 0;\n  box-shadow: 0px 1px 2px #888;\n}\n.info .title {\n  padding: 5px 0 0 10px;\n  height: 30px;\n  background: #eee;\n  border-bottom: 1px solid #ddd;\n  font-size: 18px;\n  font-weight: bold;\n}\n.info .close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #888;\n  width: 17px;\n  height: 17px;\n  background: url(\"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png\");\n}\n.info .close:hover {\n  cursor: pointer;\n}\n.info .body {\n  position: relative;\n  overflow: hidden;\n}\n.info .desc {\n  position: relative;\n  margin: 13px 0 0 90px;\n  height: 75px;\n}\n.desc .ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.desc .jibun {\n  font-size: 11px;\n  color: #888;\n  margin-top: -2px;\n}\n.info .img {\n  position: absolute;\n  top: 6px;\n  left: 5px;\n  width: 73px;\n  height: 71px;\n  border: 1px solid #ddd;\n  color: #888;\n  overflow: hidden;\n}\n.info:after {\n  content: \"\";\n  position: absolute;\n  margin-left: -12px;\n  left: 50%;\n  bottom: 0;\n  width: 22px;\n  height: 12px;\n  background: url(\"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png\");\n}\n.info .link {\n  color: #5085bb;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/RegisterPage.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/RegisterPage.css ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".company-container,\n.jobseeker-container {\n  padding-top: 150px;\n  display: flex;\n  justify-content: center;\n}\n\n.jobseeker-wrapper,\n.company-wrapper {\n  display: flex;\n  width: 100%;\n  position: fixed;\n}\n\n.jobseeker-wrapper button,\n.company-wrapper button {\n  width: 100%;\n  height: 50px;\n  border: none;\n  background: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.jobseeker-wrapper button:hover,\n.company-wrapper button:hover {\n  background: rgb(50, 108, 249);\n  color: #fff;\n  font-weight: 700;\n}\n\n.hover {\n  background-color: blue;\n}\n\n.jobseeker-wrapper > button:nth-child(2),\n.company-wrapper > button:nth-child(2) {\n  border-left: 1px solid rgb(205, 205, 205);\n  border-right: 1px solid rgb(205, 205, 205);\n}\n\n.jobseeker-submit-wrapper,\n.company-submit-wrapper {\n  margin: 100px 0px;\n  width: 60%;\n}\n\n.jobseeker-form,\n.company-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 20px;\n  box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.4);\n  margin: auto;\n}\n\n.jobseeker-submit-form,\n.company-submit-form {\n  width: 250px;\n}\n\n.jobseeker-title,\n.company-title {\n  font-size: 2rem;\n  text-align: center;\n  margin: 20px 0px;\n  font-weight: 800;\n}\n\n.jobseeker-register-wrapper input,\nselect,\n.company-register-wrapper input,\nselect {\n  width: 100%;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid rgb(205, 205, 205);\n  height: 40px;\n  text-align: center;\n  font-size: 1rem;\n}\n\n.jobseeker-register-wrapper input::placeholder,\nselect::placeholder,\n.company-register-wrapper input::placeholder,\nselect::placeholder {\n  font-size: 1rem;\n  color: rgb(173, 173, 173);\n}\n\n.jobseeker-register-wrapper div,\n.company-register-wrapper div {\n  font-weight: 700;\n  margin: 10px;\n  text-align: center;\n  font-size: 1rem;\n  color: rgb(39, 42, 47);\n}\n\n.jobseeker-register-wrapper input[type=\"file\"],\n.company-register-wrapper input[type=\"file\"] {\n  position: absolute;\n  width: 0px;\n  height: 0px;\n  padding: 0;\n  margin: 0px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.jobseeker-register-wrapper label,\n.company-register-wrapper label {\n  display: block;\n  padding: 0.5em 0.75em;\n  color: #fff;\n  font-size: inherit;\n  line-height: normal;\n  text-align: center;\n  border: 1px solid rgb(50, 108, 249);\n  background-color: rgb(50, 108, 249);\n  cursor: pointer;\n  font-weight: 700;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.jobseeker-register-wrapper label:hover,\n.company-register-wrapper label:hover {\n  background-color: #fff;\n  color: black;\n  border: 1px solid rgb(205, 205, 205);\n}\n\n.jobseeker-register-wrapper .upload-name,\n.company-register-wrapper .upload-name {\n  display: inline-block;\n  margin-bottom: 10px;\n  height: 40px;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: normal;\n  vertical-align: middle;\n  background-color: #fff;\n  border: 1px solid rgb(205, 205, 205);\n  border-radius: 5px;\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.jobseeker-register-wrapper button,\n.company-register-wrapper button {\n  width: 100%;\n  height: 35px;\n  padding: 0.5em 0.75em;\n  border-radius: 5px;\n  border: none;\n  margin-top: 10px;\n  font-size: inherit;\n  color: #fff;\n  font-weight: 700;\n  background-color: rgb(50, 108, 249);\n  cursor: pointer;\n}\n.jobseeker-register-wrapper button:hover,\n.company-register-wrapper button:hover {\n  background-color: #fff;\n  color: black;\n  border: 1px solid rgb(205, 205, 205);\n}\n", "",{"version":3,"sources":["webpack://src/pages/RegisterPage.css"],"names":[],"mappings":"AAAA;;EAEE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;AACzB;;AAEA;;EAEE,aAAa;EACb,WAAW;EACX,eAAe;AACjB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,6BAA6B;EAC7B,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,yCAAyC;EACzC,0CAA0C;AAC5C;;AAEA;;EAEE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,iDAAiD;EACjD,YAAY;AACd;;AAEA;;EAEE,YAAY;AACd;;AAEA;;EAEE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;;;EAIE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;;;EAIE,eAAe;EACf,yBAAyB;AAC3B;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,sBAAsB;AACxB;;AAEA;;EAEE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,sBAAsB;EACtB,SAAS;AACX;;AAEA;;EAEE,cAAc;EACd,qBAAqB;EACrB,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,kBAAkB;EAClB,mCAAmC;EACnC,mCAAmC;EACnC,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;;EAEE,sBAAsB;EACtB,YAAY;EACZ,oCAAoC;AACtC;;AAEA;;EAEE,qBAAqB;EACrB,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,sBAAsB;EACtB,sBAAsB;EACtB,oCAAoC;EACpC,kBAAkB;EAClB,wBAAwB;EAExB,gBAAgB;AAClB;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,mCAAmC;EACnC,eAAe;AACjB;AACA;;EAEE,sBAAsB;EACtB,YAAY;EACZ,oCAAoC;AACtC","sourcesContent":[".company-container,\n.jobseeker-container {\n  padding-top: 150px;\n  display: flex;\n  justify-content: center;\n}\n\n.jobseeker-wrapper,\n.company-wrapper {\n  display: flex;\n  width: 100%;\n  position: fixed;\n}\n\n.jobseeker-wrapper button,\n.company-wrapper button {\n  width: 100%;\n  height: 50px;\n  border: none;\n  background: #fff;\n  font-size: 1rem;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.jobseeker-wrapper button:hover,\n.company-wrapper button:hover {\n  background: rgb(50, 108, 249);\n  color: #fff;\n  font-weight: 700;\n}\n\n.hover {\n  background-color: blue;\n}\n\n.jobseeker-wrapper > button:nth-child(2),\n.company-wrapper > button:nth-child(2) {\n  border-left: 1px solid rgb(205, 205, 205);\n  border-right: 1px solid rgb(205, 205, 205);\n}\n\n.jobseeker-submit-wrapper,\n.company-submit-wrapper {\n  margin: 100px 0px;\n  width: 60%;\n}\n\n.jobseeker-form,\n.company-form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  border-radius: 20px;\n  background-color: #fff;\n  padding: 20px;\n  box-shadow: 0px 12px 18px -6px rgba(0, 0, 0, 0.4);\n  margin: auto;\n}\n\n.jobseeker-submit-form,\n.company-submit-form {\n  width: 250px;\n}\n\n.jobseeker-title,\n.company-title {\n  font-size: 2rem;\n  text-align: center;\n  margin: 20px 0px;\n  font-weight: 800;\n}\n\n.jobseeker-register-wrapper input,\nselect,\n.company-register-wrapper input,\nselect {\n  width: 100%;\n  outline: none;\n  border-radius: 5px;\n  border: 1px solid rgb(205, 205, 205);\n  height: 40px;\n  text-align: center;\n  font-size: 1rem;\n}\n\n.jobseeker-register-wrapper input::placeholder,\nselect::placeholder,\n.company-register-wrapper input::placeholder,\nselect::placeholder {\n  font-size: 1rem;\n  color: rgb(173, 173, 173);\n}\n\n.jobseeker-register-wrapper div,\n.company-register-wrapper div {\n  font-weight: 700;\n  margin: 10px;\n  text-align: center;\n  font-size: 1rem;\n  color: rgb(39, 42, 47);\n}\n\n.jobseeker-register-wrapper input[type=\"file\"],\n.company-register-wrapper input[type=\"file\"] {\n  position: absolute;\n  width: 0px;\n  height: 0px;\n  padding: 0;\n  margin: 0px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.jobseeker-register-wrapper label,\n.company-register-wrapper label {\n  display: block;\n  padding: 0.5em 0.75em;\n  color: #fff;\n  font-size: inherit;\n  line-height: normal;\n  text-align: center;\n  border: 1px solid rgb(50, 108, 249);\n  background-color: rgb(50, 108, 249);\n  cursor: pointer;\n  font-weight: 700;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.jobseeker-register-wrapper label:hover,\n.company-register-wrapper label:hover {\n  background-color: #fff;\n  color: black;\n  border: 1px solid rgb(205, 205, 205);\n}\n\n.jobseeker-register-wrapper .upload-name,\n.company-register-wrapper .upload-name {\n  display: inline-block;\n  margin-bottom: 10px;\n  height: 40px;\n  font-size: inherit;\n  font-family: inherit;\n  line-height: normal;\n  vertical-align: middle;\n  background-color: #fff;\n  border: 1px solid rgb(205, 205, 205);\n  border-radius: 5px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n}\n\n.jobseeker-register-wrapper button,\n.company-register-wrapper button {\n  width: 100%;\n  height: 35px;\n  padding: 0.5em 0.75em;\n  border-radius: 5px;\n  border: none;\n  margin-top: 10px;\n  font-size: inherit;\n  color: #fff;\n  font-weight: 700;\n  background-color: rgb(50, 108, 249);\n  cursor: pointer;\n}\n.jobseeker-register-wrapper button:hover,\n.company-register-wrapper button:hover {\n  background-color: #fff;\n  color: black;\n  border: 1px solid rgb(205, 205, 205);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/LoginPage */ "./src/pages/LoginPage.js");
/* harmony import */ var _pages_RegisterPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/RegisterPage */ "./src/pages/RegisterPage.js");
/* harmony import */ var _pages_CompanyMyPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/CompanyMyPage */ "./src/pages/CompanyMyPage.js");
/* harmony import */ var _pages_JobSeekerMyPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/JobSeekerMyPage */ "./src/pages/JobSeekerMyPage.js");
/* harmony import */ var _pages_LandingPage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/LandingPage.js */ "./src/pages/LandingPage.js");
/* harmony import */ var _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/ErrorPage */ "./src/pages/ErrorPage.js");
/* harmony import */ var _components_Loading_Loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Loading/Loading */ "./src/components/Loading/Loading.js");
/* harmony import */ var _pages_Map__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Map */ "./src/pages/Map.js");
/* harmony import */ var _components_AdminPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/AdminPage */ "./src/components/AdminPage.js");
/* harmony import */ var _pages_GuestMyPage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/GuestMyPage */ "./src/pages/GuestMyPage.js");
/* harmony import */ var _pages_MyPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/MyPage */ "./src/pages/MyPage.js");
/* harmony import */ var _components_ChatPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ChatPage */ "./src/components/ChatPage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/App.js",
    _s = __webpack_require__.$Refresh$.signature();


















function App() {
  _s();

  const [guestApplyStatus, setGuestApplyStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const guestApplyStatusHandler = () => {
    setGuestApplyStatus(!guestApplyStatus);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        component: _pages_LandingPage_js__WEBPACK_IMPORTED_MODULE_6__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/mypage",
        component: _pages_MyPage__WEBPACK_IMPORTED_MODULE_12__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/chat",
        component: _components_ChatPage__WEBPACK_IMPORTED_MODULE_13__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/map",
        render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_pages_Map__WEBPACK_IMPORTED_MODULE_9__["default"], {
          guestApplyStatus: guestApplyStatus,
          guestApplyStatusHandler: guestApplyStatusHandler
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/admin",
        component: _components_AdminPage__WEBPACK_IMPORTED_MODULE_10__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/guest/mypage",
        render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(_pages_GuestMyPage__WEBPACK_IMPORTED_MODULE_11__["default"], {
          guestApplyStatus: guestApplyStatus
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/login",
        component: _pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/register",
        component: _pages_RegisterPage__WEBPACK_IMPORTED_MODULE_3__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/chat",
        component: _components_ChatPage__WEBPACK_IMPORTED_MODULE_13__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "*",
        component: _pages_ErrorPage__WEBPACK_IMPORTED_MODULE_7__["default"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(App, "jJgLLprHQ/t99g21+zORV5DJlgU=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/_actions/type.js":
/*!******************************!*\
  !*** ./src/_actions/type.js ***!
  \******************************/
/*! exports provided: LOGIN_JOBSEEKER, LOGIN_COMPANY, AUTH_JOBSEEKER, REGISTER_JOBSEEKER, REGISTER_COMPANY, LOGOUT_JOBSEEKER, GOOGLE_LOGIN_JOBSEEKER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_JOBSEEKER", function() { return LOGIN_JOBSEEKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_COMPANY", function() { return LOGIN_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_JOBSEEKER", function() { return AUTH_JOBSEEKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_JOBSEEKER", function() { return REGISTER_JOBSEEKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_COMPANY", function() { return REGISTER_COMPANY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_JOBSEEKER", function() { return LOGOUT_JOBSEEKER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GOOGLE_LOGIN_JOBSEEKER", function() { return GOOGLE_LOGIN_JOBSEEKER; });
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const LOGIN_JOBSEEKER = "LOGIN_JOBSEEKER";
const LOGIN_COMPANY = "LOGIN_COMPANY";
const AUTH_JOBSEEKER = "AUTH_JOBSEEKER";
const REGISTER_JOBSEEKER = "REGISTER_JOBSEEKER";
const REGISTER_COMPANY = "REGISTER_COMPANY";
const LOGOUT_JOBSEEKER = "LOGOUT_JOBSEEKER";
const GOOGLE_LOGIN_JOBSEEKER = "GOOGLE_LOGIN_JOBSEEKER";

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/_actions/user_action.js":
/*!*************************************!*\
  !*** ./src/_actions/user_action.js ***!
  \*************************************/
/*! exports provided: loginJobSeeker, loginCompany, registerJobSeeker, registerCompany, logoutJobSeeker, authJobSeeker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginJobSeeker", function() { return loginJobSeeker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginCompany", function() { return loginCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerJobSeeker", function() { return registerJobSeeker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerCompany", function() { return registerCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutJobSeeker", function() { return logoutJobSeeker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authJobSeeker", function() { return authJobSeeker; });
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_actions/type */ "./src/_actions/type.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



function loginJobSeeker(submitData) {
  const request = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${"http://localhost:5000"}/jobseeker/login`, submitData, {
    withCredentials: true
  }).then(res => {
    return res.data;
  });
  return {
    type: _actions_type__WEBPACK_IMPORTED_MODULE_0__["LOGIN_JOBSEEKER"],
    payload: request
  };
}
function loginCompany(submitData) {
  const request = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${"http://localhost:5000"}/company/login`, submitData, {
    withCredentials: true
  }).then(res => {
    return res.data;
  });
  return {
    type: _actions_type__WEBPACK_IMPORTED_MODULE_0__["LOGIN_COMPANY"],
    payload: request
  };
}
function registerJobSeeker(submitData) {
  const request = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${"http://localhost:5000"}/jobseeker`, submitData, {
    withCredentials: true
  }).then(res => {
    return res.data;
  });
  return {
    type: _actions_type__WEBPACK_IMPORTED_MODULE_0__["REGISTER_JOBSEEKER"],
    payload: request
  };
}
function registerCompany(submitData) {
  const request = axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${"http://localhost:5000"}/company`, submitData, {
    withCredentials: true
  }).then(res => {
    return res.data;
  });
  return {
    type: _actions_type__WEBPACK_IMPORTED_MODULE_0__["REGISTER_COMPANY"],
    payload: request
  };
}
function logoutJobSeeker() {
  const request = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}/jobseeker/logout`, {
    withCredentials: true
  }).then(res => {
    console.log("로그아웃", res);
    return res.data;
  });
  return {
    type: _actions_type__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_JOBSEEKER"],
    payload: request
  };
}
function authJobSeeker() {
  const request = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}/jobseeker/auth`, {
    withCredentials: true
  }).then(res => {
    return res.data;
  });
  return {
    type: _actions_type__WEBPACK_IMPORTED_MODULE_0__["AUTH_JOBSEEKER"],
    payload: request
  };
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/_reducers/index.js":
/*!********************************!*\
  !*** ./src/_reducers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jobSeeker_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jobSeeker_reducer */ "./src/_reducers/jobSeeker_reducer.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const persistConfig = {
  key: "root",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default())
}; // 추가

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  jobSeeker: _jobSeeker_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistConfig, rootReducer);
/* harmony default export */ __webpack_exports__["default"] = (persistedReducer);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/_reducers/jobSeeker_reducer.js":
/*!********************************************!*\
  !*** ./src/_reducers/jobSeeker_reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobSeeker; });
/* harmony import */ var _actions_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_actions/type */ "./src/_actions/type.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


function JobSeeker(state = {}, action) {
  switch (action.type) {
    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["LOGIN_JOBSEEKER"]:
      return { ...state,
        loginSuccess: action.payload
      };

    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["LOGIN_COMPANY"]:
      return { ...state,
        loginSuccess: action.payload
      };

    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["REGISTER_JOBSEEKER"]:
      return { ...state,
        registerSuccess: action.payload
      };

    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["REGISTER_COMPANY"]:
      return { ...state,
        registerSuccess: action.payload
      };

    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["AUTH_JOBSEEKER"]:
      return { ...state,
        userData: action.payload
      };

    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_JOBSEEKER"]:
      return { ...state,
        loginSuccess: action.payload
      };

    case _actions_type__WEBPACK_IMPORTED_MODULE_0__["GOOGLE_LOGIN_JOBSEEKER"]:
      return { ...state,
        loginSuccess: action.payload
      };

    default:
      return state;
  }
}
_c = JobSeeker;

var _c;

__webpack_require__.$Refresh$.register(_c, "JobSeeker");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/AdminPage.js":
/*!*************************************!*\
  !*** ./src/components/AdminPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_JobSeekerMyPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/JobSeekerMyPage */ "./src/pages/JobSeekerMyPage.js");
/* harmony import */ var _pages_CompanyMyPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/CompanyMyPage */ "./src/pages/CompanyMyPage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/AdminPage.js",
    _s = __webpack_require__.$Refresh$.signature();









function AdminPage(props) {
  _s();

  //   로그인한 유저의 id를 불러오기 위함
  // 지윤님께 제안 드릴 사항 -> MyPage Component 2개를 분기처리로 하고 NavBar는 MyPage하나로만
  const [UserLoginType, setUserLoginType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true,"REACT_APP_SERVER_URL":"http://localhost:5000","REACT_APP_APIKEY":"5d581f63f90c16a3faadb25926217e41"}).REACT_APP_serverURL}`, {
      withCredentials: true
    }).then(res => {
      console.log(res.data.user.type, typeof res.data.user.type);
      setUserLoginType(res.data.user.type); // if (res.data.user.type === "admin") {
      //   console.log("관리자");
      // } else {
      //   props.history.push("/");
      // }
    });
  }, [UserLoginType]);

  if (UserLoginType === null || UserLoginType === "G" || UserLoginType === "K") {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: "\uAD6C\uC9C1\uC790 MyPage - \uC18C\uC15C \uB85C\uADF8\uC778 \uD3EC\uD568"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_pages_JobSeekerMyPage__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: "\uC0AC\uC5C5\uC790 MyPage "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_pages_CompanyMyPage__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }
}

_s(AdminPage, "iiJJqPxzV1dNU33TvMRQFyQJWeM=");

_c = AdminPage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(AdminPage));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "AdminPage");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Chat.css":
/*!*********************************!*\
  !*** ./src/components/Chat.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Chat.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chat.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Chat.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chat.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Chat.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Chat.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/ChatPage.js":
/*!************************************!*\
  !*** ./src/components/ChatPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/build/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Chat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chat.css */ "./src/components/Chat.css");
/* harmony import */ var _Chat_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Chat_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/ChatPage.js",
    _s = __webpack_require__.$Refresh$.signature();







function ChatPage() {
  _s();

  // 실시간 데이터값
  const [Name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Message, setMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Chat, setChat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // 서버 db 고정값

  const [UserName, setUserName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [UserProfile, setUserProfile] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__["default"].connect("http://localhost:5050"); // 로그인한 유저의 아이디 ,정보등을 받아서 name에 각각 넣어주기

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${"http://localhost:5000"}`, {
      withCredentials: true
    }).then(res => {
      console.log(res.data);

      if (res.data.user && res.data.user.name) {
        setUserName(res.data.user.name);
        setUserProfile(res.data.user.image);
        setName(res.data.user.name);
      } else if (res.data.user && res.data.user.companyName) {
        setUserName(res.data.user.companyName);
        setUserProfile(res.data.user.logo);
        setName(res.data.user.companyName);
      }
    });
  }, []); // 로그인한 유저의 아이디 ,정보등을 받아서 name에 각각 넣어주기
  // 엔터키 이벤트 추가

  function enterkey(e) {
    if (e.key == "Enter") {
      // 엔터키가 눌렸을 때
      onMessageSubmit();
    }
  } // 엔터키 이벤트 추가
  // 채팅


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    socket.on("connect", () => {
      console.log(socket.id); //socket이 부여해주는 고유 id
    });
    socket.on("chatting", ({
      name,
      message,
      time
    }) => {
      // 서버에서 emit으로 보낸 데이터를 받는것
      // console.log(name,message,time)
      let newChat = [...Chat];
      newChat.push({
        name,
        message,
        time
      });
      setChat(newChat);
    });
  }, [Chat]);

  const onMessageSubmit = () => {
    const name = Name;
    const message = Message;
    console.log(name, message);
    socket.emit("chatting", {
      name,
      message
    }); // 클라이언트에서 서버로 보내는것

    setMessage("");
  };

  const MessageHandler = e => {
    setMessage(e.target.value);
  }; // 채팅


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "user-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
        for: "nickname",
        children: "\uC0AC\uC6A9\uC790 \uBA85"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        children: UserName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "display-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        children: [UserName, "\uB2D8\uC774 \uC785\uC7A5\uD558\uC168\uC2B5\uB2C8\uB2E4."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, this), Chat.map((data, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
        className: data.name === UserName ? "sent chatting-list" : "chatting-list",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            className: "profile",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
              className: "user",
              children: data.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
              className: "image",
              src: UserProfile,
              alt: "profile"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            className: "message",
            children: data.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            className: "time",
            children: data.time
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "input-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          type: "text",
          className: "chatting-input",
          value: Message,
          onChange: MessageHandler,
          onKeyPress: enterkey
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "send-button",
          type: "button",
          onClick: onMessageSubmit,
          children: "\uC804\uC1A1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, this) //     <div>
  //       <div>
  //         <label>대화명</label>
  //         {UserName}
  //       </div>
  //       <div>
  //         <div></div>
  //       </div>
  //       <div>
  //         <span>
  //           <input
  //             type="text"
  //             className="chatting-input"
  //             value={Message}
  //             onChange={MessageHandler}
  //           />
  //           <button className="send-button" type="submit">
  //             메세지 보내기
  //           </button>
  //         </span>
  //       </div>
  //     </div>
  //   <div>
  //     <h1>채팅 내용</h1>
  //     <div
  //       style={{
  //         margin: "2rem",
  //         padding: "2rem",
  //         width: "30rem",
  //         height: "auto",
  //         backgroundColor: "#677BAC",
  //         color: "white",
  //       }}
  //     >
  //       {Chat.map((a, index) => (
  //         <div
  //           key={index}
  //           style={{
  //             display: "flex",
  //             alignItems: "center",
  //             width: "100%",
  //           }}
  //           className={a.name === UserName ? "sent" : ""}
  //         >
  //           <span>{a.name}</span>
  //           <span>{a.message}</span>
  //           <span>{a.time}</span>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </div>
  ;
}

_s(ChatPage, "V5hWYI0ClAwSkbhvj1AU8CNYclc=");

_c = ChatPage;
/* harmony default export */ __webpack_exports__["default"] = (ChatPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "ChatPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Feature.js":
/*!***********************************!*\
  !*** ./src/components/Feature.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ "./node_modules/aos/dist/aos.css");
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_LandingPage_CSS_Feature_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/LandingPage_CSS/Feature.css */ "./src/pages/LandingPage_CSS/Feature.css");
/* harmony import */ var _pages_LandingPage_CSS_Feature_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_LandingPage_CSS_Feature_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/Feature.js",
    _s = __webpack_require__.$Refresh$.signature();







function Feature() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    aos__WEBPACK_IMPORTED_MODULE_1___default.a.init({
      duration: 3000
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "feature-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "feature-wrapper",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "box-contanier",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "boxes",
          "data-aos": "fade-right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "feature-info-gif-01"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "feature-info-01",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              children: "\uC9C0\uB3C4\uC5D0\uC11C \uC54C\uBC14 \uCC3E\uACE0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              children: "\uBC14\uB85C \uC9C0\uC6D0\uD558\uC138\uC694"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: "\uC9C0\uB3C4\uB97C \uC774\uC6A9\uD55C \uB0B4 \uC8FC\uBCC0 \uC54C\uBC14\uCC3E\uAE30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "boxes",
          "data-aos": "fade-left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "feature-info-02",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              children: "\uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              children: "\uC9C0\uC6D0 \uB0B4\uC5ED\uC744"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              children: "\uC27D\uAC8C \uAD00\uB9AC\uD558\uC138\uC694"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: "\uC9C0\uC6D0\uD55C \uB0B4\uC5ED\uACFC \uACBD\uB825 \uAD00\uB9AC\uAC00 \uC218\uC6D4\uD574\uC694"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "feature-info-gif-02"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "feature-info-gif-02-sub"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "feature-info-02-sub",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              children: "\uB9C8\uC774\uD398\uC774\uC9C0\uC5D0\uC11C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              children: "\uC9C0\uC6D0 \uB0B4\uC5ED\uC744"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
              children: "\uC27D\uAC8C \uAD00\uB9AC\uD558\uC138\uC694"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
              children: "\uC9C0\uC6D0\uD55C \uB0B4\uC5ED\uACFC \uACBD\uB825 \uAD00\uB9AC\uAC00 \uC218\uC6D4\uD574\uC694"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "boxes",
          "data-aos": "fade-up",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "feature-info-gif-03"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

_s(Feature, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Feature;
/* harmony default export */ __webpack_exports__["default"] = (Feature);

var _c;

__webpack_require__.$Refresh$.register(_c, "Feature");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_LandingPage_CSS_Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/LandingPage_CSS/Footer.css */ "./src/pages/LandingPage_CSS/Footer.css");
/* harmony import */ var _pages_LandingPage_CSS_Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_LandingPage_CSS_Footer_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/Footer.js";





function Footer() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("footer", {
      className: "footer-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "footer-wrapper",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "footer-content about-us",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            className: "footer-title",
            children: "About Us"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "HOME"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "WIKI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "footer-content centacts",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            className: "footer-title",
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "\uAE40\uC9C0\uC724"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "\uC7A5\uB3D9\uD601"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "\uAE40\uBA85\uD604"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "\uD64D\uBBFC\uD601"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "footer-content sub",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
            className: "footer-title",
            children: "Customer Service"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
              className: "fas fa-headset"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            children: "1500-1234"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "footer-info-social",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
          className: "fab fa-github-square"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
          className: "fab fa-twitter-square"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
          className: "fab fa-instagram-square"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "footer-info-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          children: "Copyright \xA9 HomeTownAlba"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

__webpack_require__.$Refresh$.register(_c, "Footer");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Loading/Loading.css":
/*!********************************************!*\
  !*** ./src/components/Loading/Loading.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loading/Loading.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loading/Loading.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Loading.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Loading/Loading.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Loading/Loading.js":
/*!*******************************************!*\
  !*** ./src/components/Loading/Loading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loading.css */ "./src/components/Loading/Loading.css");
/* harmony import */ var _Loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/Loading/Loading.js";




function Loading() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "loading",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "dot"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Loading;
/* harmony default export */ __webpack_exports__["default"] = (Loading);

var _c;

__webpack_require__.$Refresh$.register(_c, "Loading");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/LoadingModal.js":
/*!****************************************!*\
  !*** ./src/components/LoadingModal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/LoadingModal.js";




function LoadingModal() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: "\uC778\uC99D\uBA54\uC77C\uC774 \uB3C4\uCC29\uD560\uB54C\uAE4C\uC9C0 \uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_c = LoadingModal;
/* harmony default export */ __webpack_exports__["default"] = (LoadingModal);

var _c;

__webpack_require__.$Refresh$.register(_c, "LoadingModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MyPageModal/Modal_AcceptApply.js":
/*!*********************************************************!*\
  !*** ./src/components/MyPageModal/Modal_AcceptApply.js ***!
  \*********************************************************/
/*! exports provided: ModalBackdrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdrop", function() { return ModalBackdrop; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/MyPageModal/Modal_AcceptApply.js",
    _s = __webpack_require__.$Refresh$.signature();






const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  /* position: fixed; */
  z-index: 999;
  top: 1;
  left: 1;
  bottom: 1;
  right: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
_c = ModalBackdrop;

function AccpetApplyModal({
  idx,
  jobId,
  jobSeekerId,
  AcceptApply
}) {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndAccpetHandler = () => {
    setIsOpen(!isOpen);
    AcceptApply(idx, jobId, jobSeekerId);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      onClick: openModalHandler,
      children: isOpen === false ? "지원승인" : "지원승인중"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this), isOpen === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalBackdrop, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        children: "\uC9C0\uC6D0\uC744 \uC2B9\uC778\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseModalHandler,
        children: "\uC544\uB2C8\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseAndAccpetHandler,
        children: "\uC9C0\uC6D0 \uC2B9\uC778\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }, this) : null]
  }, void 0, true);
}

_s(AccpetApplyModal, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c2 = AccpetApplyModal;
/* harmony default export */ __webpack_exports__["default"] = (AccpetApplyModal);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c2, "AccpetApplyModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MyPageModal/Modal_ApplicantInfo.js":
/*!***********************************************************!*\
  !*** ./src/components/MyPageModal/Modal_ApplicantInfo.js ***!
  \***********************************************************/
/*! exports provided: ModalBackdrop, ModalView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdrop", function() { return ModalBackdrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalView", function() { return ModalView; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/MyPageModal/Modal_ApplicantInfo.js",
    _s = __webpack_require__.$Refresh$.signature();






const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,0.4);
  display: grid;
  place-items: center;
`;
_c = ModalBackdrop;
const ModalView = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
    border-radius: 10px;
    background-color: #ffffff;
    width: 300px;
    height: 400px;
    > div.close_btn {
      margin-top: 5px;
      cursor: pointer;
    }
    > div.desc {
      margin-top: 25px;
      color: #4000c7;
    }
`;
_c2 = ModalView;

function ApplicantInfo({
  jobSeeker
}) {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [careerList, setCareerList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // Career 정보 받기
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${"http://localhost:5000"}/career/${jobSeeker.id}`, {
      withCredentials: true
    }).then(res => {
      setCareerList(res.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      onClick: openModalHandler,
      children: isOpen === false ? '추가정보' : '정보 확인중'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), isOpen === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalBackdrop, {
      onClick: openModalHandler,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalView, {
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          onClick: openModalHandler,
          className: "close-btn",
          children: "\xD7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: jobSeeker.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          children: ["\uC774\uB984 : ", jobSeeker.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          children: ["\uB098\uC774 : ", jobSeeker.age]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
          children: ["\uC131\uBCC4 : ", jobSeeker.gender]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), careerList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          children: "\uACBD\uB825 \uC815\uBCF4\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h4", {
            children: "\uACBD\uB825\uC0AC\uD56D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("th", {
                children: "\uADFC\uBB34 \uD68C\uC0AC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("th", {
                children: "\uD3EC\uC9C0\uC158"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("th", {
                children: "\uAE30\uAC04(\uC6D4)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, this), careerList.map(career => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("td", {
                  children: career.company
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("td", {
                  children: career.position
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("td", {
                  children: career.period
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, this)]
        }, void 0, true)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 28
    }, this) : null]
  }, void 0, true);
}

_s(ApplicantInfo, "hxq0Ddu1+LHC1f2xbOzeUHWhfkc=");

_c3 = ApplicantInfo;
/* harmony default export */ __webpack_exports__["default"] = (ApplicantInfo);

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c2, "ModalView");
__webpack_require__.$Refresh$.register(_c3, "ApplicantInfo");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MyPageModal/Modal_CancelApply.js":
/*!*********************************************************!*\
  !*** ./src/components/MyPageModal/Modal_CancelApply.js ***!
  \*********************************************************/
/*! exports provided: ModalBackdrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdrop", function() { return ModalBackdrop; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/MyPageModal/Modal_CancelApply.js",
    _s = __webpack_require__.$Refresh$.signature();






const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  /* position: fixed; */
  z-index: 999;
  top: 1;
  left: 1;
  bottom: 1;
  right: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
_c = ModalBackdrop;

function CancelApplyModal({
  CancelApply,
  jobId
}) {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    CancelApply(jobId);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      onClick: openModalHandler,
      children: isOpen === false ? "지원 취소" : "지원 취소중"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this), isOpen === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalBackdrop, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        children: "\uC9C0\uC6D0\uC744 \uCDE8\uC18C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseModalHandler,
        children: "\uC544\uB2C8\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseAndDeleteHandler,
        children: "\uB124, \uC9C0\uC6D0\uC744 \uCDE8\uC18C\uD569\uB2C8\uB2E4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }, this) : null]
  }, void 0, true);
}

_s(CancelApplyModal, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c2 = CancelApplyModal;
/* harmony default export */ __webpack_exports__["default"] = (CancelApplyModal);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c2, "CancelApplyModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MyPageModal/Modal_DeleteCareer.js":
/*!**********************************************************!*\
  !*** ./src/components/MyPageModal/Modal_DeleteCareer.js ***!
  \**********************************************************/
/*! exports provided: ModalBackdrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdrop", function() { return ModalBackdrop; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/MyPageModal/Modal_DeleteCareer.js",
    _s = __webpack_require__.$Refresh$.signature();






const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: fixed;
  z-index: 999;
  top: 1;
  left: 1;
  bottom: 1;
  right: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
_c = ModalBackdrop;

function DeleteCareerModal({
  id,
  deleteCareer
}) {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    deleteCareer(id);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      onClick: openModalHandler,
      children: isOpen === false ? "삭제" : "삭제중"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this), isOpen === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalBackdrop, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        children: "\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseModalHandler,
        children: "\uC544\uB2C8\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseAndDeleteHandler,
        children: "\uC0AD\uC81C\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }, this) : null]
  }, void 0, true);
}

_s(DeleteCareerModal, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c2 = DeleteCareerModal;
/* harmony default export */ __webpack_exports__["default"] = (DeleteCareerModal);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c2, "DeleteCareerModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MyPageModal/Modal_DeleteJob.js":
/*!*******************************************************!*\
  !*** ./src/components/MyPageModal/Modal_DeleteJob.js ***!
  \*******************************************************/
/*! exports provided: ModalBackdrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdrop", function() { return ModalBackdrop; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/MyPageModal/Modal_DeleteJob.js",
    _s = __webpack_require__.$Refresh$.signature();






const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  /* position: fixed; */
  z-index: 999;
  top: 1;
  left: 1;
  bottom: 1;
  right: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
_c = ModalBackdrop;

function DeleteJobModal({
  id,
  DeleteJob
}) {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    DeleteJob(id);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      onClick: openModalHandler,
      children: isOpen === false ? "삭제" : "삭제중"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this), isOpen === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalBackdrop, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        children: "\uC0AD\uC81C\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseModalHandler,
        children: "\uC544\uB2C8\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseAndDeleteHandler,
        children: "\uC0AD\uC81C\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }, this) : null]
  }, void 0, true);
}

_s(DeleteJobModal, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c2 = DeleteJobModal;
/* harmony default export */ __webpack_exports__["default"] = (DeleteJobModal);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c2, "DeleteJobModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MyPageModal/Modal_RejectApply.js":
/*!*********************************************************!*\
  !*** ./src/components/MyPageModal/Modal_RejectApply.js ***!
  \*********************************************************/
/*! exports provided: ModalBackdrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdrop", function() { return ModalBackdrop; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/MyPageModal/Modal_RejectApply.js",
    _s = __webpack_require__.$Refresh$.signature();






const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  /* position: fixed; */
  z-index: 999;
  top: 1;
  left: 1;
  bottom: 1;
  right: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
_c = ModalBackdrop;

function RejectApplyModal({
  idx,
  jobId,
  jobSeekerId,
  RejectApply
}) {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    RejectApply(idx, jobId, jobSeekerId);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      onClick: openModalHandler,
      children: isOpen === false ? "지원거절" : "지원거절중"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }, this), isOpen === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalBackdrop, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        children: "\uC9C0\uC6D0\uC744 \uAC70\uC808\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseModalHandler,
        children: "\uC544\uB2C8\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseAndDeleteHandler,
        children: "\uC9C0\uC6D0 \uAC70\uC808\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }, this) : null]
  }, void 0, true);
}

_s(RejectApplyModal, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c2 = RejectApplyModal;
/* harmony default export */ __webpack_exports__["default"] = (RejectApplyModal);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c2, "RejectApplyModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MyPageModal/Modal_WithdrawCompany.js":
/*!*************************************************************!*\
  !*** ./src/components/MyPageModal/Modal_WithdrawCompany.js ***!
  \*************************************************************/
/*! exports provided: ModalBackdrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdrop", function() { return ModalBackdrop; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/MyPageModal/Modal_WithdrawCompany.js",
    _s = __webpack_require__.$Refresh$.signature();






const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  /* position: fixed; */
  z-index: 999;
  top: 1;
  left: 1;
  bottom: 1;
  right: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
_c = ModalBackdrop;

function WithdrawCompany({
  WithdrawCompany
}) {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    WithdrawCompany();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      id: "left",
      className: "bubbly-button",
      onClick: openModalHandler,
      children: isOpen === false ? "회원탈퇴" : "탈퇴중"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), isOpen === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalBackdrop, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        children: "\uC815\uB9D0 \uD0C8\uD1F4\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        id: "left",
        className: "bubbly-button",
        onClick: CloseModalHandler,
        children: "\uC544\uB2C8\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        className: "bubbly-button",
        onClick: CloseAndDeleteHandler,
        children: "\uD0C8\uD1F4\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this) : null]
  }, void 0, true);
}

_s(WithdrawCompany, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c2 = WithdrawCompany;
/* harmony default export */ __webpack_exports__["default"] = (WithdrawCompany);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c2, "WithdrawCompany");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/MyPageModal/Modal_WithdrawJobseeker.js":
/*!***************************************************************!*\
  !*** ./src/components/MyPageModal/Modal_WithdrawJobseeker.js ***!
  \***************************************************************/
/*! exports provided: ModalBackdrop, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBackdrop", function() { return ModalBackdrop; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/MyPageModal/Modal_WithdrawJobseeker.js",
    _s = __webpack_require__.$Refresh$.signature();






const ModalBackdrop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  /* position: fixed; */
  z-index: 999;
  top: 1;
  left: 1;
  bottom: 1;
  right: 1;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
_c = ModalBackdrop;

function WithdrawJobSeeker({
  WithdrawJobseeker
}) {
  _s();

  const [isOpen, setIsOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  const CloseAndDeleteHandler = () => {
    setIsOpen(!isOpen);
    WithdrawJobseeker();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
      id: "left",
      className: "bubbly-button",
      onClick: openModalHandler,
      children: isOpen === false ? "회원탈퇴" : "탈퇴중"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), isOpen === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(ModalBackdrop, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
        children: "\uC815\uB9D0 \uD0C8\uD1F4\uD558\uC2DC\uACA0\uC2B5\uB2C8\uAE4C?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseModalHandler,
        children: "\uC544\uB2C8\uC694"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        onClick: CloseAndDeleteHandler,
        children: "\uD0C8\uD1F4\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, this) : null]
  }, void 0, true);
}

_s(WithdrawJobSeeker, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");

_c2 = WithdrawJobSeeker;
/* harmony default export */ __webpack_exports__["default"] = (WithdrawJobSeeker);

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "ModalBackdrop");
__webpack_require__.$Refresh$.register(_c2, "WithdrawJobSeeker");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_actions/user_action */ "./src/_actions/user_action.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_LandingPage_CSS_NavBar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/LandingPage_CSS/NavBar.css */ "./src/pages/LandingPage_CSS/NavBar.css");
/* harmony import */ var _pages_LandingPage_CSS_NavBar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_LandingPage_CSS_NavBar_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/NavBar.js",
    _s = __webpack_require__.$Refresh$.signature();








const {
  Kakao
} = window;

function NavBar() {
  _s();

  //   Get요청을 위한 Mysql - Id 불러오는 요청 -> jobseeker는 /jobseeker , company는 /company
  const [Login, setLogin] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [UserId, setUserId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); //GET요청에 사용되는 id , 해당 내용 업데이트

  const [isOpenHamburger, setIsOpenHamburger] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggleHamburger = () => {
    setIsOpenHamburger(!isOpenHamburger);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("http://localhost:5000", {
      withCredentials: true
    }).then(res => {
      console.log(res.data);

      if (res.data.user) {
        setUserId(res.data.user.id); //GET요청시에 사용하면 되는 id : mysql에서 생성해주는 id

        console.log("mysql에서 생성해주는id", UserId);
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, [Login]); //   Get요청을 위한 Mysql - Id 불러오는 요청 -> jobseeker는 /jobseeker , company는 /company

  const jobSeeker = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => {
    // console.log("useSelector", state.jobSeeker.loginSuccess);
    // 로그인한 유저의 Id
    return state.jobSeeker.loginSuccess;
  }); // 유저의 토큰을 얻어낼수있음
  // 로그인을 하지 않으면 jobSeeker가 없음
  // console.log(jobSeeker.data);

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  const LogoutHandler = () => {
    setLogin(false);
    dispatch(Object(_actions_user_action__WEBPACK_IMPORTED_MODULE_3__["logoutJobSeeker"])()).then(res => {
      return res.data;
    });
  };

  if (jobSeeker === undefined) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("header", {
      className: "navbar-header-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "navbar-header-logo",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/",
          children: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "menuBar-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "menuBar-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
        className: "navbar-header-menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/guest/mypage",
            children: "\uB9C8\uC774\uD398\uC774\uC9C0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/login",
            children: "\uB85C\uADF8\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/register",
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "hamburger-Btn",
        onClick: toggleHamburger,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
          className: "fas fa-bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("aside", {
        className: isOpenHamburger ? "show-hamburgerBar" : "hide-hamburgerBar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "hamburgerBar_menu",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "hamburgerBar_exitBtn",
            onClick: toggleHamburger,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              className: "fas fa-times"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
            className: "hamburgerBar-menu",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/login",
                children: "\uB85C\uADF8\uC778"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/map",
                children: "\uC54C\uBC14 \uCC3E\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/guest/mypage",
                children: "\uB9C8\uC774\uD398\uC774\uC9C0(\uAC8C\uC2A4\uD2B8)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/register",
                children: "\uD68C\uC6D0\uAC00\uC785"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this);
  }

  if (jobSeeker && jobSeeker.loginSuccess || Login) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("header", {
      className: "navbar-header-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "navbar-header-logo",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/",
          children: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "menuBar-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "menuBar-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
        className: "navbar-header-menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/map",
            children: "\uC54C\uBC14\uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/mypage",
            children: "\uB9C8\uC774\uD398\uC774\uC9C0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/",
            onClick: LogoutHandler,
            children: "\uB85C\uADF8\uC544\uC6C3"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "hamburger-Btn",
        onClick: toggleHamburger,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
          className: "fas fa-bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("aside", {
        className: isOpenHamburger ? "show-hamburgerBar" : "hide-hamburgerBar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "hamburgerBar_menu",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "hamburgerBar_exitBtn",
            onClick: toggleHamburger,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              className: "fas fa-times"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
            className: "hamburgerBar-menu",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/map",
                children: "\uC54C\uBC14 \uCC3E\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/mypage",
                children: "\uB9C8\uC774\uD398\uC774\uC9C0"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/",
                onClick: LogoutHandler,
                children: "\uB85C\uADF8\uC544\uC6C3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("header", {
      className: "navbar-header-container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "navbar-header-logo",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/",
          children: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
        className: "navbar-header-menu",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/map",
            children: "\uC54C\uBC14\uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/guest/mypage",
            children: "\uB9C8\uC774\uD398\uC774\uC9C0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/login",
            children: "\uB85C\uADF8\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/register",
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: "hamburger-Btn",
        onClick: toggleHamburger,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
          className: "fas fa-bars"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("aside", {
        className: isOpenHamburger ? "show-hamburgerBar" : "hide-hamburgerBar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: "hamburgerBar_menu",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            className: "hamburgerBar_exitBtn",
            onClick: toggleHamburger,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("i", {
              className: "fas fa-times"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("ul", {
            className: "hamburgerBar-menu",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/login",
                children: "\uB85C\uADF8\uC778"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/map",
                children: "\uC54C\uBC14 \uCC3E\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/guest/mypage",
                children: "\uB9C8\uC774\uD398\uC774\uC9C0(\uAC8C\uC2A4\uD2B8)"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("li", {
              className: "hamburgerBar-list",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
                to: "/register",
                children: "\uD68C\uC6D0\uAC00\uC785"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this);
  }
}

_s(NavBar, "M3fbw1edDSw3TxHBmlQY4JVg1zQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c = NavBar;
/* harmony default export */ __webpack_exports__["default"] = (NavBar);

var _c;

__webpack_require__.$Refresh$.register(_c, "NavBar");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/Service.js":
/*!***********************************!*\
  !*** ./src/components/Service.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_LandingPage_CSS_Service_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/LandingPage_CSS/Service.css */ "./src/pages/LandingPage_CSS/Service.css");
/* harmony import */ var _pages_LandingPage_CSS_Service_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_LandingPage_CSS_Service_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/Service.js",
    _s = __webpack_require__.$Refresh$.signature();





function Service() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let target = document.querySelector("#typing");

    function randomString() {
      let stringArr = ["하루 종일 알바만 찾다가 지치셨다구요??", "내 주변 알바만 보고 싶으시다구요??", "원하지 않은 배너가 너무 많다구요??", "저희 홈 타운 알바는 필요한 정보만 제공합니다"];
      let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
      let selectStringArr = selectString.split("");
      return selectStringArr;
    }

    function resetTyping() {
      target.textContent = "";
      dynamic(randomString());
    }

    function dynamic(randomArr) {
      if (randomArr.length > 0) {
        target.textContent += randomArr.shift();
        setTimeout(function () {
          dynamic(randomArr);
        }, 100);
      } else {
        setTimeout(resetTyping, 2500);
      }
    }

    dynamic(randomString());

    function blink() {
      target.classList.toggle("active");
    }

    setInterval(blink, 500);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    className: "service-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "service-wrapper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "\uC9C0\uB3C4\uC5D0\uC11C \uC27D\uAC8C \uCC3E\uB294"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "\" \uC6B0\uB9AC \uB3D9\uB124 \""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
        children: "\uC54C\uBC14 \uAD6C\uD558\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: "typing-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            id: "typing",
            className: "typing-text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        className: "service-scroll",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
          className: "fas fa-angle-double-down"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

_s(Service, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Service;
/* harmony default export */ __webpack_exports__["default"] = (Service);

var _c;

__webpack_require__.$Refresh$.register(_c, "Service");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/TopBtn.js":
/*!**********************************!*\
  !*** ./src/components/TopBtn.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_LandingPage_CSS_TopBtn_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/LandingPage_CSS/TopBtn.css */ "./src/pages/LandingPage_CSS/TopBtn.css");
/* harmony import */ var _pages_LandingPage_CSS_TopBtn_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pages_LandingPage_CSS_TopBtn_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/components/TopBtn.js",
    _s = __webpack_require__.$Refresh$.signature();






function TopBtn() {
  _s();

  const [scrollY, setScrollY] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [btnStatus, setBtnStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const btnStatusHandler = () => {
    //y값 초기화
    setScrollY(window.pageYOffset);

    if (scrollY > 704) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const topBtnHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const effector = () => {
      window.addEventListener("scroll", btnStatusHandler);
    };

    effector();
    return () => {
      window.removeEventListener("scroll", btnStatusHandler);
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      className: btnStatus ? "topBtn active" : "topBtn" // 버튼 노출 여부
      ,
      onClick: topBtnHandler // 버튼 클릭시 함수 호출
      ,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("i", {
        className: "fas fa-angle-double-up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

_s(TopBtn, "jHw8ODfnUGuhw3e7NkFRjo2ENtc=");

_c = TopBtn;
/* harmony default export */ __webpack_exports__["default"] = (TopBtn);

var _c;

__webpack_require__.$Refresh$.register(_c, "TopBtn");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/images/google.png":
/*!*******************************!*\
  !*** ./src/images/google.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEX/////Py8AqUwAg/X/vAC1tbUAfvWGuPkAgfUzkvb2+v8ojfb/uQD/PCz/vQAApkMApD4AevT/NyT/9vX/OSj/LRf/Mh7/0s8AqE//6OYApkL/KhH/1tT5/vzu+vT/8fD/amD/y8j/saxoqvgAojYRrlj/RDX/npj/paD/XFH/dWz/TkD/JQj/Y1j/393/VEf/iYH/9d7/WCX/3Yy61/ywzfv//fGQ1KwAqzsAj8gAmZ/Y7d6Y2beBgYH/vrr/fXT/k4z/7N3/0Vr/nAD/sQD/1XL/dR7/kxH/4qT/qAf/xSr/aCD/iRb/8tH/3pb/ykb/WQDP5P2bwvr/6L7/ykxYqiRIm/fjugXe7f24tRt8sTG65M12sPhIrD07uXLOtxSWsylOvXzZtgB3zJpgxIsAkbcAnI/F6NQAo2wAh+UAoH4Ai9eu38LPBbdIAAAIj0lEQVR4nO2d7V/aVhSAMVJLEZIYSIpQRKhAFVS6tuKG065bt87NbnZd3+jSOejcOv//z0sClrfcvJx7bvD6u8+X7UNDz9N77jn3XkIS+/rGNSd2I3bdEYb8Iwz5RxjyjzDkH2HIP8KQf4Qh/whD/hGG/CMM+UcY8o8w5B9hyD/CkH+EIf8IQ/4RhvwjDPlHGPKPMOQfYcg/wpB/hCH/CENcMqsOpUyEf2c0hpk7h/Wj7UatlnVYqDV211uV8moUfzd7w51Kq9YsGIaWtlhwsP8vqxl6QV+vl1mPJ1vDUrm127TcFkhkDV1bv7fDMgaWhuWjmu5hN7I0Nu+xS1hmhqv1rNfgTZI29O0yo0AYGd7ZKhhB9YYjWWhUmExJJobl9UI2lN5gIHUmjgwMd9Z1gJ/jaDQO0cNBNywdNYF+g3HcxS6s2IaVrAb3s8nqj3FTFddwdV0PV1/cMBp3MGNCNaxolAM4IG3UEYNCNMxsFegHcIC+XUILC89wZxdlAAdoNbRMRTMsZylK6CxpDatvYBlWmlgZeqlYuIcTGZJhvYDrZys2cVbjOIYtHV9Qu40SGo4hC0EDSRDFkMkIXqVaWjfwBdFGEMOwcoXnoA214W0GVRRTkNpwNeRSe3TgRv4jxlVaeWc2A69k0vbxYdMWLBR0wyBehzuC1IatYFUmrenN3ValvFPKWJRKtw/rW5r7SQ5mkXGgMzwMNAk1vdZyOfjdqWxqM5KIbWIIlWEpyHGhoW0RDwpX643JeYw8B22oDLf890ua/thzeZk5HHfEnoM2NIaHvp0wW2j5L59HJwPoc9CGwjBT88tRfTPQwVnmaDCM+HPQhsLQb7WWNgLv8A7t7TOLFI3RGK76CIY6iNhpaIwEKQyPvMuMsR3q2DOzrrMRhBt+0/QWPAr7gSzmoA3Y8Mm3XnXGaGEGSQXU8H5K/u4LHgTBhk9TcVn+niS4hRojHUDDPTluIf/gmqnZTdwY6QAaPkvFHcUfXTI1vRDJXSRBARoexwfI8Z9mDHVW38jDgBmepOKXivLP05PwMW6EtMAMH3w2tBwn20a6gRwhLTBDOT6GnBqfjIWrlaNAw5NUfEJxrG1oV6lROIAMn08ajrcNg+kdXBBAhr/Ep7lc4GSv3BCCDPfkGUNrMjpto8Bog0ABxPBkOkmHbSO9kN5FD5AaiOEDN0N7gZM2KugBUgMxfOJuaE3GX/FuoUADYFg8dhe0eOJ/dfImnIfhgwUZ7hGGMB5PPfe/Orm8BGXlbvhgQYauhWZgeN//6uTyIpTEcvhgQYbPiIbHe/5XUxguroQPFmQ4s6L5PIQBpiGd4Zvw0UIMCc3CMnwQ4Goqw9Pw0UIMSc0invotwNU0hkuQYgowJDaL1EmAq6kMH4WPFmLosiodEqCU0hm+CB8tqqEcoJTSGd4MHy3uGF57w+MgV1MZQhY1wtCFOWbpvA3ZV5qIDMmbJ+bdYt6G7Dt+RLV0jqu2iAznt/KOak1D3D0FOcSg21tEtC6d3w44qr3F3E4xItsf7pEEA55EURgmw0eLfJr40v/q5HLCD7Jh+GBhJ8JPSWkq/77me3Hy1S0/SIKRnbWRiqn8WlXakBimeEMaxERU56WEUiO/zUmSBIlhiocrBENQO0T7di0ef2cLql1IEJO8XyJNw6hO9WOxly4Z+octKCkm5PMmsEoRyRByXAoznOn58gdpCP0gnpKSdHEZ0ixghvenDOU/c5eGEvUg3iUlKWjvhHK3idUkRoKSegH6xM8kSYKwVSnKHUOv82OCFv490YsXRMMl0DQEGo6lqfxWmkQ5A33kkCRxFsL6PfjOvdH9Ju9yU4Z0eUqchbDtb4z67sthk5gaxQ7sQy1OiYKwjUWM9g7aD4qLoCRVoVOR3AstgJ8JvQvarjXjTWJyEKvAT31FHkJoksLvZLcE3TL0stoUIR/6glhmoAuaGMWvEZ7+lScKAgvqIw/BxCtooGDDvQ2yn61ohh5FL0HgqtsG/qugXt5bMReyot70EkzA1qQ2cMM1T0GbMH0xeddLELg1dKD4dV5b9TFU+4Ez9XSZXEUdwENIY1is+g2iIgXbSxV7Gx89DVfgQ0j1K9lzv0G0htE89/2Y4kVOkfb/XvRo9tBub0P1S+e+4quoqGfejmsHVecfav+ff8n7JnAhjVEaFn0Fbcd89YC4ijvvS5eJkM99SSg28F5oQ/fEgQB56gS/YbY701WnuHbRz6vjWbD/1ZJrpgI3hkMonxrRC6ZoS+bOegfdzoCLdu+sqqrTSb7/ya2kglekKIYx038qXqIoeVXNK4qiOv9x/Xeo/jejmLhFFyGtoX/fD8f+TNsAL7mRDGOd4IMYTHGqbQDPnxANY92gUzGo4kTbWHpPGx/Ck7AOkBUVZdQ2lignIY5hrO29kQrP/lfDLxETFOtRTMPgPSOw4icnUxOLlFXGBuepgr7bjLA4bSOxCDxemwDpyZDYc9Fy/LiSwBBEe7pnF7lp2G0DIUVjiE9o7VRxHZUq/Fx5Aryn7K6ZmJmqmnRf8IzAfBY0YklVe2hRoT7tuouUqUqoQywfcJ9YvtbHaP6qiTQFHbCfOt/N0aaqoh6gRoT/boS2RJOqitrHKjFDGLz9Ya3nvr0NQpCzuZAweYNHp7cBcVQ2TIQbjqZh9BYWaxzDzkdFZeHH8E06xQsz7/3dzaRetYdZQMdg+TakTq8aKFut4e53kevLCLZvtCp22uaGmidrKoq6Ue2dg74xDgj7t5IVu20zJ6mqMlFhnaNFKWe22Q3ekIjendc5v+j1z0yz6mCaZ2f99sU5o5k3SbRvByyuORRZZuU00RrOA2HIP8KQf4Qh/whD/hGG/CMM+UcY8o8w5B9hyD/CkH+EIf8IQ/4RhvwjDPlHGPKPMOQfYcg/wpB/hCH/CEP+EYb8Iwz5Rxjyz7U3/B/3jvV0zN67GwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/images/kakao.jpeg":
/*!*******************************!*\
  !*** ./src/images/kakao.jpeg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,/9j/4QAWRXhpZgAATU0AKgAAAAgAAAAAAAD/2wCEAAkGBxARERERERIQEREXEREQGBgRFxYQFBESFxMXFxgZGBgZHioiGRsrHBYUJEAkJystMDAwGCJCOzYuOiovMC8BCwsLDw4PHBERHC8nIScvLy8vLy8vMTAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAAAQYHBAUIAwL/xABNEAACAgACBgYDCQ0FCQEAAAAAAQIDBBEFBgcSIUETIjFRYYFCcZEyNHJzgpKhsbIUFyMzUmJ0g5Ois8HDU1TR4eIkQ2Nko8LS0/EW/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAEDAgQFBgf/xAA4EQACAQIDBAkCBQIHAAAAAAAAAQIDEQQFIRIxQVEiMmFxgZGhscET0QY0YnLwM0I1Q1JTosLh/9oADAMBAAIRAxEAPwDSgAfKDrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEkgAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+d98K4udkowglm5SaikvFslK+iB9AUDT20yqtuGErd8uzfnnGryXupfR6yhaY1mxmKz6a+e4/Qh+Dr+au3zzO3hchxNbWfQXbv8vu0VuokbJpLWjA0Zq3EVKS9GL6SfzY5srmM2oYSOaqqvs8Xu1Rftbf0GSpEnapfh7Cx67lLxsvTX1K3VZoVu1W5+4wtS+FZKf1RRxJ7T8dyqwa9cLJf96KQDcWUYFf5S9fvcx25F1htOx/OGEfqhYv6jOZVtUuXu8NTL4M5Q+tMz4EvKMD/ALS9fuNuXM1bB7UsPLLpKL4P8xxtS+y/oLDo/XDR92Shia1J+jbnVJ/Pyz8jCAadX8P4WXUvHxuvXX1JVWR6TT58iTz5onTuKwrX3PdZWvyc86364Ph9Be9BbT4vKGMq3eXSU8Y+uUHxXk36jjYnIMRSV6fTXZo/J/DZYqiZpAOPgcbVdBWUzjZB9jg81/k/BnIOHJOLs95YAAQSAAQAAAAAAAAAAAAAAUzXvXNYROihqWJa4vtVCa7Wucu5eb8djD4apiKip01d+3a+SIcktWdjrXrdRgY7r/C3tZxri+K7nN+ivpfIyHT2sOJxkt6+xuKeca49WuHqjzfi82ddddKcpTnKU5ybk5Sebk3zbPwe5wGVUcIr9af+p/HL3NaU2wQAdMwAAAAAAAAAAAAJBAAOfojS9+Fn0lFkq3zS4xmu6UXwkjWdUdeKcZlValTiOxRz6lvwG+f5r492ZjBKfdwfbw4NM5+Oy2ji49JWlwkt/jzMozaPSYM81C14drjhsVL8JwjXa+HSPlGf53c+fr7dDPDYvCVcLU+nUXc+DXNGzGSluAANQyAAAAAAAAAAB+LrYwjKc2oxjFybfYopZt+wlK4K9rxrKsDT1cniLM41p8csu2bXcs1620YlbbKcpTm3KUm5Ny4uUm822+87HWbTMsZiLL5ZqL6sIv0Kl7levtfrbOrPoOV4BYSjZrpPWXwu5e9zVnLaYIJIOkYAAkAgAAAEkAAAkAgAAAAkAgkgkAGwbOdaniq+gulniK45pvtuqWS3vhLNJ+tPvMfOVozH2Ye6u+t5ThJSXc+9PwazXmaOYYGOLo7H9y6r5P7PiZRlss9FA4misfDEUVX1+4sgprvXen4p5ryOWfO5RcW096NtAAGIAAAAAABS9qmlOhwipi8pXy3P1cetP29VfKLoZBtZxbnjYV59WuiCy7pylKUn7Nz2HVyWgq2MinuXS8t3rYwqStEpQSAPfmqaJg9lk5QjK3EKE2k3GMN5Rb5ZuSzPv96pf3p/s/8AUdfhNqGIhCMZ0U2SSSct6UHLLm1xWZbdSNbrNITvjOqFXRwhJbsm97eclzX5p5XE1c4oxlUnJKK5bP2v568y5KD0R0X3ql/en+z/ANR+LNlTye7ik5ZcN6vJN+LUi067ayTwFVVkK42udvR5Sk45Lo5Sz4LwKbPape093D0p5cG3KSXlwzMMNWzfEQ+pTkmu3YW7vRLUE9SiYqiVU7K58JwnOuXhKEnGX0pl51e2bTvpjdfa6N9KUYRipyUX2OWb4Z8Hl/8ACuatYGWNx9cZdbfulfa++Kbsm363w+UbNp/TNeEhVOeWU76cOuWW/LJvyjvPyN7Ncwr0XToUevJXdvZX5vxsrIxhFPVmM61at24C1Qm1OuScoTislJLtTXKS4e1HSm1bSdF9NgbJJZzpfTx58Ip7/wC637EYqbmU414vD7UustH8PxXqmYzjZnbaraDljsSqIyUFuSslJrPdhFpNpc3nKK8zt9c9Snga4XQtd1bmq3vRUJQk02ux8U8mffZH7/s/Q7v41Bbtq/vD9fV/M08RmFeGZwoRfQ6OllxWpkorYuY6Q2SfmfY/Uz0CKjRMDswnZh4zliNy6UFNQ3N6Ec1moylnn5r6SgXVOEpQlwlGUoPwlF5P6Uei8F+Lq+Lh9lGB4nB2X426muLnZLFXpJfGy4+CXbnyPPZPmFbEVKqrPRa8FbV+luZbOCVrHG0bgLcRbCmmLnZJ5JLsS5tvkl3ln09s+vw2Hlf0tVqglKcYppxXNxb90l5Gh6n6r14GrLhO6SXST7/zY90V9P1VTaRrhGSngqGpL3N01xXB8a4vn4vy7yI5pXxWLVPCroJ6treuLfJcFbV+g2Eo3kZuAQehKjT9kOlM4X4WT9y+nh8GTyml8rdfymaMYbs9xbq0jh+OSm5Uy8VKLy/eUPYbkeGz6gqeL2lukr+O5+xs03eIABxCwAAAAAAGFa/z3tJYrwnCPkqYI3UwzaFU46SxXjKua9Tqh/PM9D+G/wA1P9n/AGiVVdxXiCSD2Zrkmh7G/wAbi/i6ftTM7NE2N/jcX8XT9qZzM5/I1O5e6M6fWOy2xe98N+lf0pmVGq7Yve+G/Sv6UzLK4OTUYrOTaikubbyS9pTkP5KPfL3JqdY0zZDovKF2KkuMn0EPgxac2vXLJfJOu2u6S38RVh0+FcN+WX9pZ2eyKXzjR9AaNWGw1GHXoVxi2vSn2zfnJyfmZVpvVXSmIxF97wsuvbKS61XCPZFe65RUV5HMwOIp18xniqkkkurdpfpX/G/iZyTUbI0zVXSCxWConLKTlX0c0+co9SWfry+kxPTujnhsRdh3n1JuKb5w7Yv5rRqOzTRuLw1d9OIplXBzjbBuUJZya3Zrqt5e5g/NnRbXtF7tlOJiuE4uifwo9aHtTn81GeWVIYfMalCDThK9rO65rXuuiJ6xucDZF7/s/Q7v41Bbtq/vD9fV9Uio7Ivf9n6Hd/GoLdtX94fr6vqkV4v/ABqHfD2Jj/TMcIn2P1MkifY/Uz1y3lB6Qwf4uv4uv7KOo1d1aqwsrrfd322WWSm17mMpuShHuSzXraO4wf4uv4uv7KOjwWt+Gtxk8HFvejnFTfCNlkW9+EfFZeeT7uPzamq0lUVNO2+VuSfE23bQru0bXCdTng8O5QsyXSWZOLjGST3YeLTXW8eHHisuNn2garfdlPS1JfdNcXu5f72Ha4Px7WvH1mMtd/B9nHhkz12RzoSw1qSs11ud+fc+HLzKKl76kEEkHaKzm6Enu4nDSXLE4Z/9aJ6IPPOganPFYWK54nDry6WOf0ZnoY8j+JbfVp/tfuX0tzAAPMlwAAAAAAMj2uYJwxVd3o2UKPy65NP92UDXCpbTNE9PgpTis50Ppl37mWVn7vH5J1MnrqjjIN7no/Hd62MKivExggkg+gGqDRNjf43F/F0/amZ2WzZ5rFTgr7XdvKuyCi5RTnuSi21mo8Wus+zwNDNKU6uEqQgruy08UZwdpFq2xe9sN+lf0plU2aaL+6MbCbWcKYu59292QXtefyTn7R9acPjI004dylCE5Wym4yrTlu7qSUknzlxy7j5bONZcPg5XwvzhGzcanGMp5OO9wkopvLrcl3nOw9HEUsqlCMXtva046vlvvbha5k2nM0/TemaMJUrb5OMHJQW6nJuTTeSS8E/YdF98fRv5d37JlJ2i60VY2dVdDlKmvOW84uG/ZLhwUsnkln2r0mU8owWQ0p0FKupKTvpe1lw4byZVGnobTRtC0dOcYKducpRgs62lnJ5LN8lxOx1y0X91YO+pLOe70kPjIdaPt4rzMEaNf0ZtHwX3PCV85xvUEpQUJy35pcd2SW7k/FoqxuUSw0qdXCRlJp68bNarhu4PgTGd9GVTZE/9vm/+Su/jYcve0LRd+JwnRUQ6Szpq5ZZxj1Vnm85NIzPVPWGGEx0sTOD6OxWwlGGTdcJzjNZLhnk4x8szRfvjaN/tLf2U/wDAyzLD4qOPWIpU3LqtaXV0tzsINbNmzO//AMLpT+7P9pT/AOZ1WmtC4nC5RxFUqnJScc3GSll25OLafqNZ++No3+0t/ZT/AMCm7RNa6MbCqmhTcIydjnNbmbcXFKKfHm+3wN7A43MKlaMa1G0eLtJW82/IxlGKWjNZwX4uv4uH2UeftJ2ShisRKLcZRxV0k1wcZK6TTXmalo/aLgFh4OyVkbo1xTrUJybkll1ZJbuT720ZLi7+ksssayc7J2ZduW9Jyy+k18iwlajVqurFpbtVv1fmrce0mo00rG26layRx2HUpZK+GUbIrv5TS7n2+DzRUtp2q265Y2iPVbXTRXoyf+8S7nz8ePNlL1e0zbg74X18cuEo8rK32xf8nyeRpWmNoGj54W2MHOyydM4KqVc1xlHLKUmt3LjybKp4KvgcaqmGi3CW9LlxT5W3p7t3IbSlHUyQgIHqSks+zfBu3SFD9GtTul6lFqP70om3Gf7I9FblNuKkuNsujh8XB8X5yz+aaAeEz2uquLaW6K2fl+r9DZprogAHGLAAAAAAARKKaaazTWTT5okEgwjXLQTwWJlWk+ilnZU++DfZn3xfD2d50RvWtmr8MdQ6nlGxZyrn+RPLn+a+x/5GF43CWU2Tqti4WQluyT5P+a55+J77KcwWKo2k+nHf28n9+01Zxsz4Egg6pgSCAASQAASQAAAAASCAACSAASQCQAc/QWirMViK6K+2T4v8iC91J+pfTl3nCrg5NRinKTaiklm23wSS5s2rUTVdYKnesSeIsSc327ke1Vp+HPvfqRz8yx6wdHaXWfVXbz7l/wCGcI7TLDgsLCmuuqtZQhCMIrwSy9p9wD543fVm0gACAAAAAAAAAACs656pV46G9HKvERXVm+yS/Inly8eXtTswLqFepQqKpTdmv55PiiGr6HnTSGBtw9kqroSrsi8mn9afNeKOMb9rDq9h8bXuXR6yz3Zx4Trfg+7wfAyLWXU7FYNuTj0tHKytZpL8+PbB/R4nuMBnFHFWjLoz5cH+1/G/vNeUGiugkg6xWAAAAAAAAAAAAASAAfuimc5RhCMpzk1GMYrNyb5JHa6vasYrGy/Awyrzydk+rXHz7ZPwWfka5qvqnh8DHOC6S9rKVs11vFRXox8F288zl47NaOFTXWnyXy9y9+wzjByOr1F1KWEyvvyliWuC7Y0J9z5z73y5d7ugB4fE4mpiKjqVHd+3YuSNhRS0QABrmQAAAAAAAAAAAAAAAIyz4eRJ12sWP6DC4i7nCmco+M8sor5zRnCDm1Fb27eZD0MP1lurni8RKqMYV9NNRUEoxyi93NJcOOWfmdYCD6fCGxFRXBJeWhpgAsGq+qWIxzUoLo6M8nbNdXxUF6b9XDxMatWnSg51GklzJSvuK+Sanbsro9DE3p/nxhL6kjhz2US9HGR86m/6hzY55gX/AH274v4TM/pyM4INHjsonzxkfKl/+w5dWyun08Vc/gRhD68yZZ3gVunfujL5SH05GXBLNpLi3wSXFv1I2bB7OdHV5bytuf8AxZ9vlBRRYcBonDYdZU01VfAiov29pp1fxHQj/Tg332X3ZKpMxnRGpWPxOTVLqg/Sv/BLLwi+s/YXzQWzbDU5Tvk8TYuOT6tSfwVxl5vLwLuDi4nPMVWVk9lfp++/ysWKnFEV1xilGKUYpZJRSiku5JdhIBx3qWAAEAAAAAAAAAAAAAAAAAAAFH2t47cwkKV222xz+BX1n+9uF4Mf2r4/pMZGtPhVVGL8Jz67/d6M62SUfq4yP6el5bvWxhUdolLPpRTOyUYQjKc5PJRit6Un4I7jVrVXEY6X4NblKeUrZ+4Xeo/lS8F5tGvauas4fBRyqjvWNZSsnk5z8/RXgj1OPzajheiulPly738bymMGypaqbOFHdux2Un2qmLzivjJel8FcPFmiwgopRikopZJJZJLuSXYfoHi8Xja2Knt1XfkuC7v5cvjFIAA1TIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAq+kNRcJfi5Yq3pJOTjKVeeVcpJJZvhnlklwzyLQC6jiKtFt05NNq2nIhq5+KqowiowjGMUslGKUYxXckuw/YBU3ckAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-promise */ "./node_modules/redux-promise/lib/index.js");
/* harmony import */ var redux_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_reducers */ "./src/_reducers/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/index.js";











 // const createStoreWithMiddleware = applyMiddleware(
//   promiseMiddleware,
//   ReduxThunk
// )(createStore);


const store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_11__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"])(redux_promise__WEBPACK_IMPORTED_MODULE_7___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_8__["default"]) // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : devtool 제거해야 없는 사람 error 안남
));
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_9__["persistStore"])(store);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_10__["PersistGate"], {
    persistor: persistor,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 31,
  columnNumber: 3
}, undefined), document.getElementById("root"));

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/CompanyMyPage.js":
/*!************************************!*\
  !*** ./src/pages/CompanyMyPage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompanyMyPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_MyPageModal_Modal_DeleteJob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyPageModal/Modal_DeleteJob */ "./src/components/MyPageModal/Modal_DeleteJob.js");
/* harmony import */ var _components_MyPageModal_Modal_RejectApply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyPageModal/Modal_RejectApply */ "./src/components/MyPageModal/Modal_RejectApply.js");
/* harmony import */ var _components_MyPageModal_Modal_AcceptApply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyPageModal/Modal_AcceptApply */ "./src/components/MyPageModal/Modal_AcceptApply.js");
/* harmony import */ var _components_MyPageModal_Modal_ApplicantInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyPageModal/Modal_ApplicantInfo */ "./src/components/MyPageModal/Modal_ApplicantInfo.js");
/* harmony import */ var _components_MyPageModal_Modal_WithdrawCompany__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyPageModal/Modal_WithdrawCompany */ "./src/components/MyPageModal/Modal_WithdrawCompany.js");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-daum-postcode */ "./node_modules/react-daum-postcode/lib/index.js");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_daum_postcode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/CompanyMyPage.js",
    _s = __webpack_require__.$Refresh$.signature();












const {
  kakao
} = window; // 사업자 마이페이지

function CompanyMyPage(props) {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); // company 회원 정보

  const [companyId, setCompanyId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // Company 테이블의 id이자 Job 테이블의 companyId
  // Company 테이블의 나머지 정보

  const [companyName, setCompanyName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [companyLocation, setCompanyLocation] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [businessNumber, setBusinessNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Logo, setLogo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 이미지 수정을 위한 변수 선언

  const BASE_URL = `${"http://localhost:5000"}`;
  const [Content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [FilePath, setFilePath] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 이미지 수정을 위한 변수 선언
  // 사업자위치 state

  const [isOpenCompanyPost, setIsOpenCompanyPost] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [companyZipCode, setCompanyZipCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 회사 우편번호

  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [question, setQuestion] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // company 회원 정보를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)

  const [companyInfoUpdating, setCompanyInfoUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [passwordUpdating, setPasswordUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // 비밀 번호를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)

  const [passwordErrorMessage, setPasswordErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 비밀번호 입력 실패시 메세지
  // job 정보

  const [jobLocation, setJobLocation] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // DB에 등록될 일자리 주소

  const [isOpenJobPost, setIsOpenJobPost] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [jobZipCode, setJobZipCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 우편번호

  const [latitude, setLatitude] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // 일자리의 위치의 위도

  const [longitude, setLongitude] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // 일자리 위치의 경도

  const [day, setDay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [mon, setMon] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [tue, setTue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [wed, setWed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [thu, setThu] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [fri, setFri] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [sat, setSat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [sun, setSun] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [monChecked, setMonChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [tueChecked, setTueChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [wedChecked, setWedChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [thuChecked, setThuChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [friChecked, setFriChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [satChecked, setSatChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sunChecked, setSunChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [startTime, setStartTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [endTime, setEndTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [position, setPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [hourlyWage, setHourlyWage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // jobList, applicantList, showing 상태 등 상태로 관리

  const [jobList, setJobList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [applicantList, setApplicantList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}); // 객체이며 key 는 idx 값

  const [showingApplicantList, setShowingApplicantList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [applyStatusList, setApplyStatusList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [List, setList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [eventStatus, setEventStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // useEffect로 변경사항이 화면에 바로 렌더링되게 도와주는 state

  const [ImgUploadBtn, setImgUploadBtn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // company 회원 정보 수정용

  const companyNameHandler = event => {
    setCompanyName(event.target.value);
  };

  const businessNumberHandler = event => {
    setBusinessNumber(event.target.value);
  };

  const imageHandler = event => {
    setContent(event.target.files[0]);
    setImgUploadBtn(true);
  }; // company 사업자 위치 수정창 오픈


  const OpenCompanyPost = () => {
    setIsOpenCompanyPost(!isOpenCompanyPost);
  };

  const CancelCompanyPost = () => {
    setIsOpenCompanyPost(false);
  }; // 카카오 지도 API 활용하여 주소 선택 후 닫기


  const CompleteCompanyPost = data => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }

      if (data.buildingName !== "") {
        extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setCompanyZipCode(data.zonecode);
    setCompanyLocation(fullAddr);
    setIsOpenCompanyPost(false);
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "400px",
    height: "400px",
    left: "110px"
  }; // 카카오 주소검색 API 활용 공간
  // company 회원정보를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)

  const companyHandler = () => {
    setCompanyInfoUpdating(!companyInfoUpdating);
  };

  const listHandler = () => {
    setList(!List);
  }; // company 업데이트 하기
  // 이미지 업로드용 핸들러 따로 만들기


  const upoadImage = () => {
    const formData = new FormData();
    formData.append("image", Content);
    console.log(formData);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${"http://localhost:5000"}/uploads3`, formData, {
      header: {
        "content-type": "multipart/form-data"
      }
    }).then(res => {
      console.log(res.data);
      setFilePath(res.data.fileName);
    }).catch(error => {
      console.error(error);
    });
  };

  const updateCompany = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${"http://localhost:5000"}/company`, {
      id: companyId,
      name: companyName,
      location: companyLocation,
      businessNumber,
      logo: FilePath
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
      setCompanyInfoUpdating(!companyInfoUpdating);
      setImgUploadBtn(false);
    }).catch(error => {
      console.error(error);
    });
  }; // 비밀번호를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)


  const OpenPasswordUpdate = () => {
    setPasswordUpdating(!passwordUpdating);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

  const questionHandler = event => {
    setQuestion(event.target.value);
  }; // password 업데이트 하기


  const UpdatePassword = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${"http://localhost:5000"}/company/password`, {
      password,
      question
    }, {
      withCredentials: true
    }).then(res => {
      setPasswordUpdating(!passwordUpdating);
      setPassword("");
      setQuestion("");
      setPasswordErrorMessage("");
    }).catch(err => {
      setPasswordErrorMessage("질문의 답이 올바르지 않습니다");
    });
  };

  const CancelUpdatePassword = () => {
    // 비밀번호 업데이트 취소
    setPasswordUpdating(!passwordUpdating);
    setPassword("");
    setQuestion("");
    setPasswordErrorMessage("");
  }; // company 회원 정보 탈퇴 기능 넣기


  const WithdrawCompany = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/company`, {
      withCredentials: true
    }); // company 회원정보 삭제

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/job`, {
      params: {
        companyId
      }
    }, {
      withCredentials: true
    }); // company의 job과 관련 applicant 모두 삭제

    history.push("/map");
  }; // job 정보 생성 및 수정용
  // company 사업자 위치 수정창 오픈


  const OpenJobPost = () => {
    setIsOpenJobPost(!isOpenJobPost);
  };

  const CancelJobPost = () => {
    setIsOpenJobPost(false);
  }; // 카카오 지도 API 활용하여 Job 주소 선택 후 닫기


  const CompleteJobPost = data => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }

      if (data.buildingName !== "") {
        extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setJobZipCode(data.zonecode);
    setJobLocation(fullAddr);
    setIsOpenJobPost(false);
    ChangeLocationToCoordinate(fullAddr);
  }; // 카카오 API를 통해 주소를 위도와 경도로 좌표로 저장하기


  const ChangeLocationToCoordinate = location => {
    // 주소-좌표 변환 객체를 생성합니다
    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(location, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setLatitude(result[0].y);
        setLongitude(result[0].x);
      }
    });
  }; // check된 요일을 day state에 모아주기


  const dayHandler = () => {
    setDay([...mon, ...tue, ...wed, ...thu, ...fri, ...sat, ...sun]);
  };

  const monHandler = () => {
    if (!monChecked) {
      setMon(["월"]);
    } else {
      setMon([]);
    }

    setMonChecked(!monChecked);
  };

  const tueHandler = () => {
    if (!tueChecked) {
      setTue(["화"]);
    } else {
      setTue([]);
    }

    setTueChecked(!tueChecked);
  };

  const wedHandler = () => {
    if (!wedChecked) {
      setWed(["수"]);
    } else {
      setWed([]);
    }

    setWedChecked(!wedChecked);
  };

  const thuHandler = () => {
    if (!thuChecked) {
      setThu(["목"]);
    } else {
      setThu([]);
    }

    setThuChecked(!thuChecked);
  };

  const friHandler = () => {
    if (!friChecked) {
      setFri(["금"]);
    } else {
      setFri([]);
    }

    setFriChecked(!friChecked);
  };

  const satHandler = () => {
    if (!satChecked) {
      setSat(["토"]);
    } else {
      setSat([]);
    }

    setSatChecked(!satChecked);
  };

  const sunHandler = () => {
    if (!sunChecked) {
      setSun(["일"]);
    } else {
      setSun([]);
    }

    setSunChecked(!sunChecked);
  };

  const startTimeHandler = event => {
    setStartTime(event.target.value);
  };

  const endTimeHandler = event => {
    setEndTime(event.target.value);
  };

  const positionHandler = event => {
    setPosition(event.target.value);
  };

  const hourlyWageHandler = event => {
    setHourlyWage(event.target.value);
  }; // state에 저장한 정보를 바탕으로 일자리 생성하기


  const createJob = () => {
    if (!jobLocation || day.length === 0 || !startTime || !endTime || !position || !hourlyWage) {
      alert("모든 항목에 데이터를 입력해주세요");
    } else {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${"http://localhost:5000"}/job`, {
        companyId,
        companyName,
        location: jobLocation,
        latitude,
        longitude,
        day,
        startTime,
        endTime,
        position,
        hourlyWage
      }, {
        withCredentials: true
      }).then(res => {
        setEventStatus(!eventStatus);
      });
    }
  }; // 일자리 삭제하기


  const DeleteJob = jobId => {
    // 일자리에 묶인 지원자들도 삭제하기 + 메일 보내기
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/applicant`, {
      params: {
        jobId
      }
    }, {
      withCredentials: true
    }).then(res => {
      // Applicant를 삭제 후 해당 Job을 삭제하기 (Applicant 메일 발송 시 Job 정보가 필요하기 때문)
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/job/${jobId}`, {
        withCredentials: true
      }).then(res => {
        setEventStatus(!eventStatus);
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err); // 삭제할 applicant가 없을 때 해당 Job을 삭제하기 (Applicant 메일 발송 시 Job 정보가 필요하기 때문)

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/job/${jobId}`, {
        withCredentials: true
      }).then(res => {
        setEventStatus(!eventStatus);
      }).catch(err => {
        console.log(err);
      });
    });
  }; // 각 일자리별 지원자를 applicantList state에 저장
  // applicantList는 객체 형태로 key는 idx(jobList 상태의 요소인 job을 map으로 불러올 때 사용되는 index)
  // 값은 res를 통해 불러온 jobSeeker 정보
  // 지원자가 없는 Job은 해당 key(인덱스)와 값이 applicantList 객체에 저장되지 않음
  // applicantList의 형태 예시 : {0: [jobSeeker1, jobSeeker2, JobSeeker3], 1: [JobSeeker1], 3: [Jobseeker4]}


  const openApplicantList = (idx, jobId) => {
    setShowingApplicantList({ ...showingApplicantList,
      [idx]: true
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}/applicant/jobseeker/${jobId}`, {
      withCredentials: true
    }).then(res => {
      // bracket notation으로는 값이 저장되지 않아 구조분해할당 사용
      console.log("res.data.applyStatus----", res.data.applyStatus);

      if (res.data.data.length !== 0) {
        setApplicantList({ ...applicantList,
          [idx]: res.data.data
        });
        setApplyStatusList({ ...applyStatusList,
          [idx]: res.data.applyStatus
        });
      } else {
        setApplicantList({ ...applicantList,
          [idx]: null
        });
        setApplyStatusList({ ...applyStatusList,
          [idx]: null
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }; // applicantList 닫는 핸들러


  const closeApplicantList = idx => {
    setShowingApplicantList({ ...showingApplicantList,
      [idx]: false
    });
  }; // 자원자에 대해 지원 거절


  const RejectApply = (idx, jobId, jobSeekerId) => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${"http://localhost:5000"}/applicant`, {
      jobId,
      jobSeekerId
    }, {
      withCredentials: true
    }).then(res => {
      openApplicantList(idx, jobId);
    }).catch(err => {
      console.log(err);
    });
  }; // 지원자에 대해 지원 승인


  const AcceptApply = (idx, jobId, jobSeekerId) => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${"http://localhost:5000"}/applicant/status`, {
      jobId,
      jobSeekerId
    }, {
      withCredentials: true
    }).then(res => {
      openApplicantList(idx, jobId);
    }).catch(err => {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // company 정보 불러오기
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}`, {
      withCredentials: true
    }).then(res => {
      let companyInfo = res.data.user;
      setCompanyId(companyInfo.id);
      setCompanyName(companyInfo.companyName);
      setCompanyLocation(companyInfo.location);
      setBusinessNumber(companyInfo.businessNumber);
      setLogo(companyInfo.logo);
    }).catch(err => {
      console.log(err);
    }); // job 정보 받기

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}/job/${companyId}`, {
      withCredentials: true
    }).then(res => {
      setJobList(res.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, [companyId, eventStatus]); // 체크박스로 체크한 요일을 day에 담기 위한 기능

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dayHandler();
  }, [mon, tue, wed, thu, fri, sat, sun]); // 구인내역 클릭하면 지원자 현황 표시됨
  // 리다이렉트 테스트

  const [UserLoginType, setUserLoginType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true,"REACT_APP_SERVER_URL":"http://localhost:5000","REACT_APP_APIKEY":"5d581f63f90c16a3faadb25926217e41"}).REACT_APP_serverURL}`, {
      withCredentials: true
    }).then(res => {
      console.log(res.data.user.type, typeof res.data.user.type);
      setUserLoginType(res.data.user.type);

      if (res.data.user && res.data.user.type) {
        console.log("로그인 된 상태");
      } else {
        props.history.push("/");
      }
    });
  }, [UserLoginType]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      className: "mypage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
        children: "\uC0AC\uC5C5\uC790 \uB9C8\uC774\uD398\uC774\uC9C0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
        className: "header2",
        children: "\uD68C\uC0AC \uC815\uBCF4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 568,
        columnNumber: 9
      }, this), !companyInfoUpdating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "user",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tbody", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("img", {
                  id: "profile",
                  src: Logo,
                  alt: "logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 575,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 574,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 573,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                scope: "row",
                children: "\uD68C\uC0AC\uBA85"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 579,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: companyName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 580,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 578,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                scope: "row",
                children: "\uD68C\uC0AC \uC8FC\uC18C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 583,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: companyLocation
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 584,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 582,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                scope: "row",
                children: "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 587,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                children: businessNumber
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 588,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 586,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 572,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            id: "left",
            className: "bubbly-button",
            onClick: companyHandler,
            children: "\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 591,
            columnNumber: 15
          }, this), !passwordUpdating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
            className: "bubbly-button",
            onClick: OpenPasswordUpdate,
            children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 599,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uCD9C\uC2E0 \uCD08\uB4F1\uD559\uAD50\uB294?",
              name: "question",
              type: "text",
              onChange: questionHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 604,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uC218\uC815\uD560 \uBE44\uBC00\uBC88\uD638",
              name: "password",
              type: "password",
              onChange: passwordHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 612,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
              children: passwordErrorMessage
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 619,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              id: "left",
              className: "bubbly-button",
              onClick: UpdatePassword,
              children: "\uC644\uB8CC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 620,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "bubbly-button",
              onClick: CancelUpdatePassword,
              children: "\uCDE8\uC18C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 627,
              columnNumber: 19
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_MyPageModal_Modal_WithdrawCompany__WEBPACK_IMPORTED_MODULE_7__["default"], {
            WithdrawCompany: WithdrawCompany
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 635,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 571,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 570,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "user",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tbody", {
          className: "new",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
              scope: "row",
              children: "\uD68C\uC0AC\uBA85"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 642,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uD68C\uC0AC\uBA85",
              name: "name",
              type: "text",
              onChange: companyNameHandler,
              value: companyName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 643,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 641,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
              scope: "row",
              children: "\uD68C\uC0AC \uC8FC\uC18C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 653,
              columnNumber: 17
            }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              className: "jobFlow",
              name: "location",
              onClick: OpenJobPost,
              placeholder: companyLocation,
              value: jobLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 656,
              columnNumber: 17
            }, this), isOpenJobPost ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_daum_postcode__WEBPACK_IMPORTED_MODULE_8___default.a, {
                onClick: OpenJobPost,
                style: postCodeStyle,
                autoClose: true,
                onComplete: CompleteJobPost
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 665,
                columnNumber: 21
              }, this)
            }, void 0, false) : null, isOpenCompanyPost ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_daum_postcode__WEBPACK_IMPORTED_MODULE_8___default.a, {
                onClick: OpenCompanyPost,
                style: postCodeStyle,
                autoClose: true,
                onComplete: CompleteCompanyPost
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 675,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                className: "bubbly-button",
                onClick: CancelCompanyPost,
                children: "\uC8FC\uC18C\uCC3D \uB2EB\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 681,
                columnNumber: 21
              }, this)]
            }, void 0, true) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 652,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
              scope: "row",
              children: "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 692,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uC0AC\uC5C5\uC790\uB4F1\uB85D\uBC88\uD638",
              name: "businessNumber",
              type: "text",
              onChange: businessNumberHandler,
              value: businessNumber
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 693,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 691,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
              scope: "row",
              children: "\uC0AC\uC9C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 703,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "image",
              type: "file",
              onChange: imageHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 704,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 702,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
            children: [ImgUploadBtn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              id: "left",
              className: "bubbly-button",
              onClick: upoadImage,
              children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 708,
              columnNumber: 19
            }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "bubbly-button",
              onClick: updateCompany,
              children: "\uC218\uC815 \uC644\uB8CC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 716,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 706,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 721,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 722,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 723,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 726,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h2", {
        className: "header2",
        children: "\uC77C\uC790\uB9AC \uB4F1\uB85D"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 728,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "careerSection",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("form", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            children: [" ", "\uADFC\uBB34 \uC694\uC77C :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "day",
              id: "mon",
              type: "checkbox",
              onClick: monHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 734,
              columnNumber: 15
            }, this), "\uC6D4", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "day",
              id: "tue",
              type: "checkbox",
              onClick: tueHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 736,
              columnNumber: 15
            }, this), "\uD654", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "day",
              id: "wed",
              type: "checkbox",
              onClick: wedHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 738,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
              for: "wed",
              children: "\uC218"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 739,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "day",
              id: "thu",
              type: "checkbox",
              onClick: thuHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 740,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
              for: "thu",
              children: "\uBAA9"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 741,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "day",
              id: "fri",
              type: "checkbox",
              onClick: friHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 742,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
              for: "fri",
              children: "\uAE08"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 743,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "day",
              id: "sat",
              type: "checkbox",
              onClick: satHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 744,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
              for: "sat",
              children: "\uD1A0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 745,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "day",
              id: "sun",
              type: "checkbox",
              onClick: sunHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 746,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
              for: "sun",
              children: "\uC77C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 747,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 731,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 749,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            children: [" ", "\uADFC\uBB34 \uC2DC\uAC04 :", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "startTime",
              type: "time",
              placeholder: "\uC2DC\uC791 \uC2DC\uAC04",
              onChange: startTimeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 753,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              name: "endTime",
              type: "time",
              placeholder: "\uB05D \uC2DC\uAC04",
              onChange: endTimeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 759,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 750,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 766,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              className: "jobFlow",
              name: "location",
              onClick: OpenJobPost,
              placeholder: "\uD074\uB9AD\uD558\uC154\uC11C \uC8FC\uC18C\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694",
              value: jobLocation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 769,
              columnNumber: 15
            }, this), isOpenJobPost ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_daum_postcode__WEBPACK_IMPORTED_MODULE_8___default.a, {
                onClick: OpenJobPost,
                style: postCodeStyle,
                autoClose: true,
                onComplete: CompleteJobPost
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 778,
                columnNumber: 19
              }, this)
            }, void 0, false) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 767,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 787,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uD3EC\uC9C0\uC158",
              name: "position",
              type: "text",
              onChange: positionHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 790,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 788,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 798,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("label", {
            children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uC2DC\uAE09",
              name: "hourlyWage",
              type: "text",
              onChange: hourlyWageHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 801,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 799,
            columnNumber: 13
          }, this), !jobLocation || day.length === 0 || !startTime || !endTime || !position || !hourlyWage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              className: "bubbly-button",
              children: "\uC81C\uCD9C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 817,
              columnNumber: 17
            }, this)
          }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("input", {
            type: "submit",
            value: "\uC81C\uCD9C\x1D",
            onClick: createJob
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 820,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 730,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 823,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("span", {
          children: "\uBAA8\uB4E0 \uD56D\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 824,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "job-list-title-wrapper",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h1", {
          className: "job-list-title",
          children: "\uB4F1\uB85D \uC77C\uC790\uB9AC \uBAA9\uB85D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 827,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 826,
        columnNumber: 9
      }, this), jobList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
        className: "careerSection",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h3", {
          children: "\uC77C\uC790\uB9AC \uC815\uBCF4\uB97C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 832,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 831,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
        children: jobList.map((job, idx) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
            className: "user",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("thead", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                    children: "\uAD6C\uC778 \uC704\uCE58"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 842,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                    children: "\uD3EC\uC9C0\uC158"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 843,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                    children: "\uC2DC\uAE09"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 844,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                    children: "\uC694\uC77C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 845,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                    children: "\uC2DC\uAC04"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 846,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 841,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 840,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tbody", {
                className: "table-body",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                    children: job.startTime
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 851,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                    children: job.location
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 852,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                    children: job.position
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 853,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                    children: job.hourlyWage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 854,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                    children: JSON.parse(job.day)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 855,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 850,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 849,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 839,
              columnNumber: 19
            }, this), !showingApplicantList[idx] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
              onClick: () => {
                openApplicantList(idx, job.id);
              },
              children: "\uC9C0\uC6D0\uC790 \uBCF4\uAE30"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 860,
              columnNumber: 21
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                onClick: () => {
                  closeApplicantList(idx);
                },
                children: "\uC9C0\uC6D0\uC790 \uC228\uAE30\uAE30"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 869,
                columnNumber: 23
              }, this), !applicantList[idx] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("h5", {
                children: "\uC544\uC9C1 \uC9C0\uC6D0\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 877,
                columnNumber: 25
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("table", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                    children: "\uC774\uB984"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 881,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                    children: "\uB098\uC774"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 882,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {
                    children: "\uC131\uBCC4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 883,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 884,
                    columnNumber: 29
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("th", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 885,
                    columnNumber: 29
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 880,
                  columnNumber: 27
                }, this), applicantList[idx].map((jobSeeker, number) => {
                  if (applyStatusList[idx]) {
                    if (applyStatusList[idx][number].status === "waiting") {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                          children: jobSeeker.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 895,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                          children: jobSeeker.age
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 896,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                          children: jobSeeker.gender
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 897,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_MyPageModal_Modal_ApplicantInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
                          jobSeeker: jobSeeker
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 898,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_MyPageModal_Modal_RejectApply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                          RejectApply: RejectApply,
                          idx: idx,
                          jobId: job.id,
                          jobSeekerId: jobSeeker.id
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 899,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_MyPageModal_Modal_AcceptApply__WEBPACK_IMPORTED_MODULE_5__["default"], {
                          AcceptApply: AcceptApply,
                          idx: idx,
                          jobId: job.id,
                          jobSeekerId: jobSeeker.id
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 905,
                          columnNumber: 37
                        }, this)]
                      }, jobSeeker.id, true, {
                        fileName: _jsxFileName,
                        lineNumber: 894,
                        columnNumber: 35
                      }, this);
                    } else if (applyStatusList[idx][number].status === "accepted") {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("tr", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                          children: jobSeeker.name
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 919,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                          children: jobSeeker.age
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 920,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("td", {
                          children: jobSeeker.gender
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 921,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_MyPageModal_Modal_ApplicantInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
                          jobSeeker: jobSeeker
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 922,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_components_MyPageModal_Modal_RejectApply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                          RejectApply: RejectApply,
                          idx: idx,
                          jobId: job.id,
                          jobSeekerId: jobSeeker.id
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 923,
                          columnNumber: 37
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("button", {
                          children: "\uCC44\uD305\uCC3D \uC5F4\uAE30"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 929,
                          columnNumber: 37
                        }, this)]
                      }, jobSeeker.id, true, {
                        fileName: _jsxFileName,
                        lineNumber: 918,
                        columnNumber: 35
                      }, this);
                    }
                  }
                })]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 879,
                columnNumber: 25
              }, this)]
            }, void 0, true)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 838,
            columnNumber: 17
          }, this);
        })
      }, void 0, false)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(CompanyMyPage, "vPZF136AfSdwmhjZ1HQKtHBJgNg=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = CompanyMyPage;

var _c;

__webpack_require__.$Refresh$.register(_c, "CompanyMyPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/ErrorPage.css":
/*!*********************************!*\
  !*** ./src/pages/ErrorPage.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./ErrorPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/ErrorPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./ErrorPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/ErrorPage.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./ErrorPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/ErrorPage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/ErrorPage.js":
/*!********************************!*\
  !*** ./src/pages/ErrorPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _ErrorPage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ErrorPage.css */ "./src/pages/ErrorPage.css");
/* harmony import */ var _ErrorPage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ErrorPage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/ErrorPage.js";






/* harmony default export */ __webpack_exports__["default"] = (function (Error) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "error-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "error-wrapper"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true);
});

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/GuestMyPage.js":
/*!**********************************!*\
  !*** ./src/pages/GuestMyPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyPageModal_Modal_DeleteCareer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyPageModal/Modal_DeleteCareer */ "./src/components/MyPageModal/Modal_DeleteCareer.js");
/* harmony import */ var _components_MyPageModal_Modal_CancelApply__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyPageModal/Modal_CancelApply */ "./src/components/MyPageModal/Modal_CancelApply.js");
/* harmony import */ var _components_MyPageModal_Modal_DeleteJob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyPageModal/Modal_DeleteJob */ "./src/components/MyPageModal/Modal_DeleteJob.js");
/* harmony import */ var _components_MyPageModal_Modal_RejectApply__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MyPageModal/Modal_RejectApply */ "./src/components/MyPageModal/Modal_RejectApply.js");
/* harmony import */ var _components_MyPageModal_Modal_AcceptApply__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyPageModal/Modal_AcceptApply */ "./src/components/MyPageModal/Modal_AcceptApply.js");
/* harmony import */ var _components_MyPageModal_Modal_ApplicantInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyPageModal/Modal_ApplicantInfo */ "./src/components/MyPageModal/Modal_ApplicantInfo.js");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-daum-postcode */ "./node_modules/react-daum-postcode/lib/index.js");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_daum_postcode__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/GuestMyPage.js",
    _s = __webpack_require__.$Refresh$.signature();














const {
  kakao
} = window;

function GuestMyPage({
  guestApplyStatus
}) {
  _s();

  const [GuestStatus, setGuestStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("jobseeker"); // 구직자 사업자 중 선택

  const JobSeekrHandler = e => {
    setGuestStatus("jobseeker");
  };

  const CompanyHandler = e => {
    setGuestStatus("company");
  };

  const [jobSeekerId, setJobSeekerId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [companyId, setCompanyId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [companyName, setCompanyName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('우리동네알바'); // 구직자 마이페이지용 ----------- 

  const [careerList, setCareerList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // career 정보 모두 불러와 배열로 저장
  // career 항목 나머지 개별 정보

  const [careerId, setCareerId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [company, setCompany] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [period, setPeriod] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [careerPosition, setCareerPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 커리어 수정 버튼을 클릭 시, 업데이트 중인 상태를 저장 (키는 idx, 값은 true - 수정중)

  const [careerUpdating, setCareerUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [applyList, setApplyList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // jobSeeker가 지원한 job 목록 보여주기

  const [resultList, setResultList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // 지원 결과가 나온 job 목록 보여주기

  const [statusList, setStatusList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // 지원 결과의 상태 보여주기

  const [eventStatus, setEventStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // useEffect로 변경사항이 화면에 바로 렌더링되게 도와주는 state

  const [eventSetTimeout, setEventSetTimeout] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // 경력 정보 생성 및 수정 핸들러

  const companyHandler = event => {
    setCompany(event.target.value);
  };

  const periodHandler = event => {
    setPeriod(event.target.value);
  };

  const careerPositionHandler = event => {
    setCareerPosition(event.target.value);
  }; // 경력 사항을 등록 하는 핸들러


  const createCareer = () => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${"http://localhost:5000"}/career`, {
      jobSeekerId,
      company,
      period,
      position: careerPosition
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
      setTimeout(() => {
        console.log('res.data.id', res.data.id);
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`${"http://localhost:5000"}/career/${res.data.id}`, {
          withCredentials: true
        }).then(res => {
          setEventSetTimeout(!eventSetTimeout);
        });
      }, 300000);
    }).catch(err => {
      console.log(err);
    });
  }; // 경력 사항 '수정'을 위한 핸들러 (클릭 시 경력 정보 수정 가능)


  const careerHandler = (idx, id) => {
    // 클릭시 update 상태가 true로 바뀌며, 조건부 렌더링 진행
    setCareerUpdating({ ...careerUpdating,
      [idx]: true
    }); // 수정하려는 커리어 해당 항목이 state에 담기기 (id 기반 axios 요청이 있어야 할 듯?)

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"http://localhost:5000"}/career`, {
      params: {
        id
      }
    }, {
      withCredentials: true
    }).then(res => {
      let careerInfo = res.data.data; // 객체로 불러옴

      setCareerId(careerInfo.id);
      setCompany(careerInfo.company);
      setPeriod(careerInfo.period);
      setCareerPosition(careerInfo.position);
    }).catch(err => {
      console.log(err);
    });
  }; // update할 내용이 입력된 후에 shubmit 용 핸들러


  const updateCareer = (idx, id) => {
    // 클릭시 해당 idx의 updating이 false 또는 삭제됨
    setCareerUpdating({ ...careerUpdating,
      [idx]: false
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`${"http://localhost:5000"}/career`, {
      id,
      jobSeekerId,
      company,
      period,
      position: careerPosition
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
    }).catch(err => {
      console.log(err);
    });
  };

  const deleteCareer = id => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`${"http://localhost:5000"}/career/${id}`, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
    }).catch(err => {
      console.log(err);
    });
  }; // 지원 목록에서 지원을 취소하는 핸들러


  const CancelApply = jobId => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`${"http://localhost:5000"}/applicant`, {
      params: {
        jobId,
        jobSeekerId: jobSeekerId
      }
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
    });
  }; // 사업자 마이페이지용 ----------- 
  // job 정보


  const [jobLocation, setJobLocation] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // DB에 등록될 일자리 주소

  const [isOpenJobPost, setIsOpenJobPost] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [jobZipCode, setJobZipCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 우편번호

  const [latitude, setLatitude] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // 일자리의 위치의 위도

  const [longitude, setLongitude] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); // 일자리 위치의 경도

  const [day, setDay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [mon, setMon] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [tue, setTue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [wed, setWed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [thu, setThu] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [fri, setFri] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [sat, setSat] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [sun, setSun] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [monChecked, setMonChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [tueChecked, setTueChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [wedChecked, setWedChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [thuChecked, setThuChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [friChecked, setFriChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [satChecked, setSatChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sunChecked, setSunChecked] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [startTime, setStartTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [endTime, setEndTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [position, setPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [hourlyWage, setHourlyWage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // jobList, applicantList, showing 상태 등 상태로 관리

  const [jobList, setJobList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [applicantList, setApplicantList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}); // 객체이며 key 는 idx 값

  const [showingApplicantList, setShowingApplicantList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [applyStatusList, setApplyStatusList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}); // Job 위치 수정창 오픈

  const OpenJobPost = () => {
    setIsOpenJobPost(!isOpenJobPost);
  };

  const CancelJobPost = () => {
    setIsOpenJobPost(false);
  }; // 카카오 지도 API 활용하여 Job 주소 선택 후 닫기


  const CompleteJobPost = data => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }

      if (data.buildingName !== "") {
        extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setJobZipCode(data.zonecode);
    setJobLocation(fullAddr);
    setIsOpenJobPost(false);
    ChangeLocationToCoordinate(fullAddr);
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "400px",
    height: "400px",
    padding: "7px"
  }; // 카카오 API를 통해 주소를 위도와 경도로 좌표로 저장하기

  const ChangeLocationToCoordinate = location => {
    // 주소-좌표 변환 객체를 생성합니다
    let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(location, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setLatitude(result[0].y);
        setLongitude(result[0].x);
      }
    });
  }; // check된 요일을 day state에 모아주기


  const dayHandler = () => {
    setDay([...mon, ...tue, ...wed, ...thu, ...fri, ...sat, ...sun]);
  };

  const monHandler = () => {
    if (!monChecked) {
      setMon(["월"]);
    } else {
      setMon([]);
    }

    setMonChecked(!monChecked);
  };

  const tueHandler = () => {
    if (!tueChecked) {
      setTue(["화"]);
    } else {
      setTue([]);
    }

    setTueChecked(!tueChecked);
  };

  const wedHandler = () => {
    if (!wedChecked) {
      setWed(["수"]);
    } else {
      setWed([]);
    }

    setWedChecked(!wedChecked);
  };

  const thuHandler = () => {
    if (!thuChecked) {
      setThu(["목"]);
    } else {
      setThu([]);
    }

    setThuChecked(!thuChecked);
  };

  const friHandler = () => {
    if (!friChecked) {
      setFri(["금"]);
    } else {
      setFri([]);
    }

    setFriChecked(!friChecked);
  };

  const satHandler = () => {
    if (!satChecked) {
      setSat(["토"]);
    } else {
      setSat([]);
    }

    setSatChecked(!satChecked);
  };

  const sunHandler = () => {
    if (!sunChecked) {
      setSun(["일"]);
    } else {
      setSun([]);
    }

    setSunChecked(!sunChecked);
  };

  const startTimeHandler = event => {
    setStartTime(event.target.value);
  };

  const endTimeHandler = event => {
    setEndTime(event.target.value);
  };

  const positionHandler = event => {
    setPosition(event.target.value);
  };

  const hourlyWageHandler = event => {
    setHourlyWage(event.target.value);
  }; // state에 저장한 정보를 바탕으로 일자리 생성하기


  const createJob = () => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${"http://localhost:5000"}/job`, {
      companyId,
      companyName,
      location: jobLocation,
      latitude,
      longitude,
      day,
      startTime,
      endTime,
      position,
      hourlyWage
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
      setTimeout(() => {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`${"http://localhost:5000"}/job/${res.data.id}`, {
          withCredentials: true
        }).then(res => {
          setEventSetTimeout(!eventSetTimeout);
        });
      }, 300000);
    });
  }; // 일자리 삭제하기


  const DeleteJob = jobId => {
    // 해당 Job을 삭제하기
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.delete(`${"http://localhost:5000"}/job/${jobId}`, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
    }).catch(err => {
      console.log(err);
    });
  }; // 각 일자리별 지원자를 applicantList state에 저장
  // applicantList는 객체 형태로 key는 idx(jobList 상태의 요소인 job을 map으로 불러올 때 사용되는 index)
  // 값은 res를 통해 불러온 jobSeeker 정보
  // 지원자가 없는 Job은 해당 key(인덱스)와 값이 applicantList 객체에 저장되지 않음
  // applicantList의 형태 예시 : {0: [jobSeeker1, jobSeeker2, JobSeeker3], 1: [JobSeeker1], 3: [Jobseeker4]}


  const openApplicantList = (idx, jobId) => {
    setShowingApplicantList({ ...showingApplicantList,
      [idx]: true
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"http://localhost:5000"}/applicant/jobseeker/nonmember/${jobId}`, {
      withCredentials: true
    }).then(res => {
      // bracket notation으로는 값이 저장되지 않아 구조분해할당 사용
      if (res.data.data.length !== 0) {
        setApplicantList({ ...applicantList,
          [idx]: res.data.data
        });
        setApplyStatusList({ ...applyStatusList,
          [idx]: res.data.applyStatus
        });
      } else {
        setApplicantList({ ...applicantList,
          [idx]: null
        });
        setApplyStatusList({ ...applyStatusList,
          [idx]: null
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }; // applicantList 닫는 핸들러


  const closeApplicantList = idx => {
    setShowingApplicantList({ ...showingApplicantList,
      [idx]: false
    });
  }; // 자원자에 대해 지원 거절


  const RejectApply = (idx, jobId, jobSeekerId) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`${"http://localhost:5000"}/applicant`, {
      jobId,
      jobSeekerId
    }, {
      withCredentials: true
    }).then(res => {
      openApplicantList(idx, jobId);
    }).catch(err => {
      console.log(err);
    });
  }; // 지원자에 대해 지원 승인


  const AcceptApply = (idx, jobId, jobSeekerId) => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.patch(`${"http://localhost:5000"}/applicant/status`, {
      jobId,
      jobSeekerId
    }, {
      withCredentials: true
    }).then(res => {
      openApplicantList(idx, jobId);
    }).catch(err => {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Career 정보 받기
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"http://localhost:5000"}/career/${jobSeekerId}`, {
      withCredentials: true
    }).then(res => {
      setCareerList(res.data.data);
    }).catch(err => {
      console.log(err);
    }); // applicant 테이블 통해 지원한 jobList 받기

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"http://localhost:5000"}/applicant/job/${jobSeekerId}`, {
      withCredentials: true
    }).then(res => {
      setApplyList(res.data.data);
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"http://localhost:5000"}/applicant/job`, {
      params: {
        jobSeekerId
      }
    }, {
      withCredentials: true
    }).then(res => {
      setResultList(res.data.data);
      setStatusList(res.data.applyStatus);
    }); // job 정보 받기

    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${"http://localhost:5000"}/job/${companyId}`, {
      withCredentials: true
    }).then(res => {
      setJobList(res.data.data);
    }).catch(err => {
      console.log(err);
    });
  }, [eventStatus, jobSeekerId, eventSetTimeout, guestApplyStatus]); // 체크박스로 체크한 요일을 day에 담기 위한 기능

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dayHandler();
  }, [mon, tue, wed, thu, fri, sat, sun]);

  if (GuestStatus === "jobseeker") {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        className: "main",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "mypage",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("ul", {
              className: "tag",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
                className: "on",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                  onClick: JobSeekrHandler,
                  children: "\uAD6C\uC9C1\uC790 \uB9C8\uC774\uD398\uC774\uC9C0 (\uBE44\uD68C\uC6D0\uC6A9)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 505,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 503,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                  onClick: CompanyHandler,
                  children: "\uC0AC\uC5C5\uC790 \uB9C8\uC774\uD398\uC774\uC9C0 (\uBE44\uD68C\uC6D0\uC6A9)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 509,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 507,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 502,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
              className: "header",
              children: "\uBE44\uD68C\uC6D0 \uC0C1\uD0DC\uB85C \uAE30\uB2A5\uC744 \uCCB4\uD5D8\uD560 \uC218 \uC788\uC73C\uBA70, \uB4F1\uB85D\uD558\uC2DC\uB294 \uB370\uC774\uD130\uB294 5\uBD84 \uB0B4 \uC790\uB3D9\uC73C\uB85C \uC0AD\uC81C\uB429\uB2C8\uB2E4."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 513,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 514,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "messageBox",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
                  children: "\uD68C\uC6D0\uC815\uBCF4\uB294 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC5D0 \uB530\uB77C \uC548\uC804\uD558\uAC8C \uBCF4\uD638\uB418\uBA70, \uD68C\uC6D0\uB2D8\uC758 \uB3D9\uC758 \uC5C6\uC774 \uACF5\uAC1C \uB610\uB294 \uC81C 3\uC790\uC5D0\uAC8C \uC81C\uACF5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 517,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
                  children: "\uC774\uB984, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4 \uC815\uBCF4\uB294 \uBCF8\uC778\uD655\uC778\uC744 \uD1B5\uD574 \uC218\uC815\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 521,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 516,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 527,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "line",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
                children: "\uD68C\uC6D0 \uC815\uBCF4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 529,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tbody", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC544\uC774\uB514"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 534,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                      children: "HomeTownAlba"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 536,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 535,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 533,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC774\uB984"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 540,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uAE40\uC544\uBB34\uAC1C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 541,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 539,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC0DD\uB144\uC6D4\uC77C/\uC131\uBCC4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 544,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "2021\uB144 11\uC6D4 4\uC77C / \uB0A8\uC790"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 545,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 543,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uD578\uB4DC\uD3F0 \uBC88\uD638"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 548,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "010-1234-5678"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 549,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 547,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC774\uBA54\uC77C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 552,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "hometownalba@hometownalba.com"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 553,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 551,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC8FC\uC18C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 556,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC6B0\uB9AC\uC2DC \uB3D9\uB124\uAD6C \uC54C\uBC14\uB3D9"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 557,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 555,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uBCF8\uC778\uC758 \uCD08\uB4F1\uD559\uAD50\uB294"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 560,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uB9E4\uD0C4\uCD08\uB4F1\uD559\uAD50"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 561,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 559,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 564,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 532,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 567,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 528,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 569,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 570,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
              children: "\uACBD\uB825 \uC0AC\uD56D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 573,
              columnNumber: 15
            }, this), careerList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              children: "\uB4F1\uB85D\uB41C \uACBD\uB825 \uC0AC\uD56D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 575,
              columnNumber: 17
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uADFC\uBB34 \uD68C\uC0AC\uBA85"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 579,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uD3EC\uC9C0\uC158"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 580,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uAE30\uAC04(\uC6D4)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 581,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 582,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 583,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 578,
                columnNumber: 19
              }, this), careerList.map((career, idx) => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
                  children: !careerUpdating[idx] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                      children: career.company
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 590,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                      children: career.position
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 591,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                      children: career.period
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 592,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                      onClick: () => {
                        careerHandler(idx, career.id);
                      },
                      children: "\uC218\uC815"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 593,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_DeleteCareer__WEBPACK_IMPORTED_MODULE_4__["default"], {
                      deleteCareer: deleteCareer,
                      id: career.id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 600,
                      columnNumber: 29
                    }, this)]
                  }, career.id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 589,
                    columnNumber: 27
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                        name: "company",
                        type: "text",
                        onChange: companyHandler,
                        value: company
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 608,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 607,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                        name: "position",
                        type: "text",
                        onChange: careerPositionHandler,
                        value: careerPosition
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 616,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 615,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                        name: "period",
                        type: "text",
                        onChange: periodHandler,
                        value: period
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 624,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 623,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                      onClick: () => {
                        updateCareer(idx, career.id);
                      },
                      children: "\uC218\uC815 \uC644\uB8CC"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 631,
                      columnNumber: 29
                    }, this)]
                  }, career.id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 606,
                    columnNumber: 27
                  }, this)
                }, void 0, false);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 577,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h3", {
              children: "\uACBD\uB825 \uC0AC\uD56D \uB4F1\uB85D"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 647,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("table", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uADFC\uBB34 \uD68C\uC0AC\uBA85"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 650,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uD3EC\uC9C0\uC158"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 651,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uAE30\uAC04(\uC6D4)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 652,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 653,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 654,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 649,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 648,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
              children: "\uADFC\uBB34 \uD68C\uC0AC\uBA85 : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 659,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
              name: "company",
              type: "text",
              onChange: companyHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 660,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
              children: "\uD3EC\uC9C0\uC158 : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 661,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
              name: "position",
              type: "text",
              onChange: careerPositionHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 662,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
              children: "\uADFC\uBB34 \uAE30\uAC04(\uC6D4) : "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 663,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
              name: "period",
              type: "text",
              onChange: periodHandler,
              placeholder: "\uC785\uB825\uC608\uC2DC : 3"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 664,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
              type: "submit",
              value: "\uB4F1\uB85D\x1D",
              onClick: createCareer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 670,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h3", {
              children: "\uC9C0\uC6D0 \uD604\uD669"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 674,
              columnNumber: 15
            }, this), applyList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              children: "\uC9C0\uC6D0 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 676,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uD68C\uC0AC\uBA85"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 680,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uC8FC\uC18C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 681,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uADFC\uBB34\uC694\uC77C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 682,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uADFC\uBB34\uC2DC\uAC04"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 683,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uC2DC\uAE09"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 684,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uC608\uC0C1 \uC6D4\uAE09\uC5EC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 685,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uD3EC\uC9C0\uC158"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 686,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 687,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 679,
                columnNumber: 21
              }, this), applyList.map(job => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: job.companyName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 692,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: job.location
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 693,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: job.day
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 694,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: [job.startTime, "~", job.endTime, " (", job.time, "\uC2DC\uAC04)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 695,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: job.hourlyWage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 698,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: job.monthlyWage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 699,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: job.position
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 700,
                    columnNumber: 27
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_CancelApply__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    CancelApply: CancelApply,
                    jobId: job.id
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 701,
                    columnNumber: 27
                  }, this)]
                }, job.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 691,
                  columnNumber: 25
                }, this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 678,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 707,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h3", {
              children: "\uC9C0\uC6D0 \uACB0\uACFC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 708,
              columnNumber: 17
            }, this), resultList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              children: "\uC9C0\uC6D0 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 710,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("table", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uD68C\uC0AC\uBA85"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 714,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uC8FC\uC18C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 715,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uADFC\uBB34\uC694\uC77C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 716,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uADFC\uBB34\uC2DC\uAC04"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 717,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uC2DC\uAE09"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 718,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uC608\uC0C1 \uC6D4\uAE09\uC5EC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 719,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uD3EC\uC9C0\uC158"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 720,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                  children: "\uACB0\uACFC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 721,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 722,
                  columnNumber: 23
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 713,
                columnNumber: 21
              }, this), resultList.map((job, number) => {
                if (statusList[number]) {
                  if (statusList[number].status === 'rejected') {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.companyName
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 729,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.location
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 730,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.day
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 731,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: [job.startTime, "~", job.endTime, " (", job.time, "\uC2DC\uAC04)"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 732,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.hourlyWage
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 733,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.monthlyWage
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 734,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.position
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 735,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: "\uC9C0\uC6D0 \uAC70\uC808"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 736,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_CancelApply__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        CancelApply: CancelApply,
                        jobId: job.id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 737,
                        columnNumber: 31
                      }, this)]
                    }, job.id, true, {
                      fileName: _jsxFileName,
                      lineNumber: 728,
                      columnNumber: 29
                    }, this);
                  } else if (statusList[number].status === 'accepted') {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.companyName
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 743,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.location
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 744,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.day
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 745,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: [job.startTime, "~", job.endTime, " (", job.time, "\uC2DC\uAC04)"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 746,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.hourlyWage
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 747,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.monthlyWage
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 748,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: job.position
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 749,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                        children: "\uC9C0\uC6D0 \uC2B9\uC778"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 750,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_CancelApply__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        CancelApply: CancelApply,
                        jobId: job.id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 751,
                        columnNumber: 31
                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                        children: "\uCC44\uD305\uCC3D \uC5F4\uAE30"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 752,
                        columnNumber: 31
                      }, this)]
                    }, job.id, true, {
                      fileName: _jsxFileName,
                      lineNumber: 742,
                      columnNumber: 29
                    }, this);
                  }
                }
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 712,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 763,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "bottomButton",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                id: "left",
                className: "bubbly-button",
                children: "\uC218\uC815 \uC644\uB8CC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 765,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                className: "bubbly-button",
                children: "\uD68C\uC6D0\uD0C8\uD1F4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 768,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 764,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 501,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 500,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 773,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 779,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        className: "main",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
          style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
            className: "mypage",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("ul", {
              className: "tag",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                  onClick: JobSeekrHandler,
                  children: "\uAD6C\uC9C1\uC790 \uB9C8\uC774\uD398\uC774\uC9C0 (\uBE44\uD68C\uC6D0\uC6A9)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 793,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 791,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
                className: "on",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("a", {
                  onClick: CompanyHandler,
                  children: "\uC0AC\uC5C5\uC790 \uB9C8\uC774\uD398\uC774\uC9C0 (\uBE44\uD68C\uC6D0\uC6A9)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 797,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 795,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 790,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
              children: "\uBE44\uD68C\uC6D0 \uC0C1\uD0DC\uB85C \uAE30\uB2A5\uC744 \uCCB4\uD5D8\uD560 \uC218 \uC788\uC73C\uBA70, \uB4F1\uB85D\uD558\uC2DC\uB294 \uB370\uC774\uD130\uB294 5\uBD84 \uB0B4 \uC790\uB3D9\uC73C\uB85C \uC0AD\uC81C\uB429\uB2C8\uB2E4."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 801,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "messageBox",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("ul", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
                  children: "\uD68C\uC6D0\uC815\uBCF4\uB294 \uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68\uC5D0 \uB530\uB77C \uC548\uC804\uD558\uAC8C \uBCF4\uD638\uB418\uBA70, \uD68C\uC6D0\uB2D8\uC758 \uB3D9\uC758 \uC5C6\uC774 \uACF5\uAC1C \uB610\uB294 \uC81C 3\uC790\uC5D0\uAC8C \uC81C\uACF5\uB418\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 804,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("li", {
                  children: "\uC774\uB984, \uC0DD\uB144\uC6D4\uC77C, \uC131\uBCC4 \uC815\uBCF4\uB294 \uBCF8\uC778\uD655\uC778\uC744 \uD1B5\uD574 \uC218\uC815\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 808,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 803,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 802,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 814,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
              className: "line",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h2", {
                children: "\uC0AC\uC5C5\uC790 \uC815\uBCF4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 816,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tbody", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uD68C\uC0AC\uBA85"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 819,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "(\uC8FC)\uC6B0\uB9AC\uB3D9\uB124\uC54C\uBC14"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 820,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 818,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC0AC\uC5C5\uC790 \uC704\uCE58"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 823,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC6B0\uB9AC\uC2DC \uB3D9\uB124\uB3D9 \uC54C\uBC14\uAD6C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 824,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 822,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC0AC\uC5C5\uC790 \uBC88\uD638"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 827,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "111-222-3333"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 828,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 826,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC790\uC0AC \uB300\uD45C \uC0C1\uD488"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 831,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "HomeTownAlba"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 832,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 830,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 817,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
                className: "companyJob",
                children: "\uC77C\uC790\uB9AC \uB4F1\uB85D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 836,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tbody", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC8FC\uC18C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 843,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "location",
                      onClick: OpenJobPost,
                      placeholder: "\uD074\uB9AD\uD558\uC154\uC11C \uC8FC\uC18C\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694",
                      value: jobLocation
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 845,
                      columnNumber: 23
                    }, this), isOpenJobPost ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_daum_postcode__WEBPACK_IMPORTED_MODULE_10___default.a, {
                        onClick: OpenJobPost,
                        style: postCodeStyle,
                        autoClose: true,
                        onComplete: CompleteJobPost
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 852,
                        columnNumber: 23
                      }, this)
                    }, void 0, false) : null]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 844,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 842,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uADFC\uBB34\uC694\uC77C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 863,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "day",
                      id: "mon",
                      type: "checkbox",
                      onClick: monHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 865,
                      columnNumber: 23
                    }, this), "\uC6D4", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "day",
                      id: "tue",
                      type: "checkbox",
                      onClick: tueHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 866,
                      columnNumber: 23
                    }, this), "\uD654", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "day",
                      id: "wed",
                      type: "checkbox",
                      onClick: wedHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 867,
                      columnNumber: 23
                    }, this), "\uC218", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "day",
                      id: "thu",
                      type: "checkbox",
                      onClick: thuHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 868,
                      columnNumber: 23
                    }, this), "\uBAA9", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "day",
                      id: "fri",
                      type: "checkbox",
                      onClick: friHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 869,
                      columnNumber: 23
                    }, this), "\uAE08", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "day",
                      id: "sat",
                      type: "checkbox",
                      onClick: satHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 870,
                      columnNumber: 23
                    }, this), "\uD1A0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "day",
                      id: "sun",
                      type: "checkbox",
                      onClick: sunHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 871,
                      columnNumber: 23
                    }, this), "\uC77C"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 864,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 862,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uADFC\uBB34\uC2DC\uAC04"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 875,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "startTime",
                      type: "time",
                      placeholder: "\uC2DC\uC791 \uC2DC\uAC04",
                      onChange: startTimeHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 878,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "endTime",
                      type: "time",
                      placeholder: "\uB05D \uC2DC\uAC04",
                      onChange: endTimeHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 884,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 876,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 874,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uD3EC\uC9C0\uC158"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 893,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "position",
                      type: "text",
                      onChange: positionHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 895,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 894,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 892,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                    children: "\uC2DC\uAE09(\u20A9)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 899,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("input", {
                      name: "hourlyWage",
                      type: "text",
                      onChange: hourlyWageHandler
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 902,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 900,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 898,
                  columnNumber: 19
                }, this), !jobLocation || day.length === 0 || !startTime || !endTime || !position || !hourlyWage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 912,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                    className: "bubbly-button",
                    children: "\uC81C\uCD9C"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 913,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 914,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("span", {
                    children: "\uBAA8\uB4E0 \uD56D\uBAA9\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 915,
                    columnNumber: 23
                  }, this)]
                }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                  className: "bubbly-button",
                  onClick: createJob,
                  children: "\uC81C\uCD9C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 918,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 839,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 977,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h1", {
                children: "\uB4F1\uB85D \uC77C\uC790\uB9AC \uBAA9\uB85D"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 979,
                columnNumber: 17
              }, this), jobList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h3", {
                children: "\uC77C\uC790\uB9AC \uC815\uBCF4\uB97C \uB4F1\uB85D\uD574\uC8FC\uC138\uC694"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 983,
                columnNumber: 19
              }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
                children: jobList.map((job, idx) => {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h4", {
                      children: ["\uC8FC\uC18C : ", job.location, "\uD3EC\uC9C0\uC158 : ", job.position, "\uC2DC\uAE09 : ", job.hourlyWage, "\uC694\uC77C : ", JSON.parse(job.day), "\uC2DC\uAC04 : ", job.startTime, "~", job.endTime, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_DeleteJob__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        DeleteJob: DeleteJob,
                        id: job.id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 995,
                        columnNumber: 29
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 989,
                      columnNumber: 27
                    }, this), !showingApplicantList[idx] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                      onClick: () => {
                        openApplicantList(idx, job.id);
                      },
                      children: "\uC9C0\uC6D0\uC790 \uBCF4\uAE30"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 999,
                      columnNumber: 29
                    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                        onClick: () => {
                          closeApplicantList(idx);
                        },
                        children: "\uC9C0\uC6D0\uC790 \uC228\uAE30\uAE30"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1008,
                        columnNumber: 31
                      }, this), !applicantList[idx] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("h5", {
                        children: "\uC544\uC9C1 \uC9C0\uC6D0\uC790\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1016,
                        columnNumber: 33
                      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("table", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                            children: "\uC774\uB984"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1020,
                            columnNumber: 37
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                            children: "\uB098\uC774"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1021,
                            columnNumber: 37
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {
                            children: "\uC131\uBCC4"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1022,
                            columnNumber: 37
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1023,
                            columnNumber: 37
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("th", {}, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1024,
                            columnNumber: 37
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 1019,
                          columnNumber: 35
                        }, this), applicantList[idx].map((jobSeeker, number) => {
                          if (applyStatusList[idx]) {
                            if (applyStatusList[idx][number].status === "waiting") {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                                  children: jobSeeker.name
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1031,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                                  children: jobSeeker.age
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1032,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                                  children: jobSeeker.gender
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1033,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_ApplicantInfo__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                  jobSeeker: jobSeeker
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1034,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_RejectApply__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                  RejectApply: RejectApply,
                                  idx: idx,
                                  jobId: job.id,
                                  jobSeekerId: jobSeeker.id
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1035,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_AcceptApply__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                  AcceptApply: AcceptApply,
                                  idx: idx,
                                  jobId: job.id,
                                  jobSeekerId: jobSeeker.id
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1041,
                                  columnNumber: 45
                                }, this)]
                              }, jobSeeker.id, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1030,
                                columnNumber: 43
                              }, this);
                            } else if (applyStatusList[idx][number].status === "accepted") {
                              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("tr", {
                                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                                  children: jobSeeker.name
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1052,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                                  children: jobSeeker.age
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1053,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("td", {
                                  children: jobSeeker.gender
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1054,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_ApplicantInfo__WEBPACK_IMPORTED_MODULE_9__["default"], {
                                  jobSeeker: jobSeeker
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1055,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_MyPageModal_Modal_RejectApply__WEBPACK_IMPORTED_MODULE_7__["default"], {
                                  RejectApply: RejectApply,
                                  idx: idx,
                                  jobId: job.id,
                                  jobSeekerId: jobSeeker.id
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1056,
                                  columnNumber: 45
                                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                                  children: "\uCC44\uD305\uCC3D \uC5F4\uAE30"
                                }, void 0, false, {
                                  fileName: _jsxFileName,
                                  lineNumber: 1062,
                                  columnNumber: 45
                                }, this)]
                              }, jobSeeker.id, true, {
                                fileName: _jsxFileName,
                                lineNumber: 1051,
                                columnNumber: 43
                              }, this);
                            }
                          }
                        })]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1018,
                        columnNumber: 33
                      }, this)]
                    }, void 0, true)]
                  }, idx, true, {
                    fileName: _jsxFileName,
                    lineNumber: 988,
                    columnNumber: 25
                  }, this);
                })
              }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1079,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
                className: "bottomButton",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                  id: "left",
                  className: "bubbly-button",
                  children: "\uC218\uC815 \uC644\uB8CC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1089,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("button", {
                  className: "bubbly-button",
                  children: "\uD68C\uC6D0\uD0C8\uD1F4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1092,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1093,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1094,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1095,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1088,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 815,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 789,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 781,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 780,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1101,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }
}

_s(GuestMyPage, "Orr4h5Fbzm6m/KvZLVzt0x2D/+w=");

_c = GuestMyPage;
/* harmony default export */ __webpack_exports__["default"] = (GuestMyPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "GuestMyPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/JobSeekerMyPage.js":
/*!**************************************!*\
  !*** ./src/pages/JobSeekerMyPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobSeekerMyPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_MyPageModal_Modal_DeleteCareer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyPageModal/Modal_DeleteCareer */ "./src/components/MyPageModal/Modal_DeleteCareer.js");
/* harmony import */ var _components_MyPageModal_Modal_CancelApply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyPageModal/Modal_CancelApply */ "./src/components/MyPageModal/Modal_CancelApply.js");
/* harmony import */ var _components_MyPageModal_Modal_WithdrawJobseeker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MyPageModal/Modal_WithdrawJobseeker */ "./src/components/MyPageModal/Modal_WithdrawJobseeker.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/JobSeekerMyPage.js",
    _s = __webpack_require__.$Refresh$.signature();







 // 구직자 마이페이지



function JobSeekerMyPage(props) {
  _s();

  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"])(); // JobSeeker 테이블의 id이자, Career 테이블의 jobSeekerId

  const [jobSeekerId, setJobSeekerId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0); //경력사항 등록 버튼을 위한

  const [click, setClick] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // JobSeeker 테이블의 나머지 정보

  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [age, setAge] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [gender, setGender] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 이미지 수정을 위한 변수 선언

  const BASE_URL = `${"http://localhost:5000"}`;
  const [Content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [FilePath, setFilePath] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 이미지 수정을 위한 변수 선언

  const [password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [question, setQuestion] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [jobSeekerInfoUpdating, setJobSeekerInfoUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // 회원 정보를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)

  const [passwordUpdating, setPasswordUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // 비밀 번호를 수정중인지 아닌지 상태로 관리 (조건부 렌더링용)

  const [passwordErrorMessage, setPasswordErrorMessage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 비밀번호 입력 실패시 메세지

  const [careerList, setCareerList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // career 정보 모두 불러와 배열로 저장
  // career 항목 나머지 개별 정보

  const [careerId, setCareerId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [company, setCompany] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [period, setPeriod] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [position, setPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 커리어 수정 버튼을 클릭 시, 업데이트 중인 상태를 저장 (키는 idx, 값은 true - 수정중)

  const [careerUpdating, setCareerUpdating] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const [applyList, setApplyList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // jobSeeker가 지원한 job 목록 보여주기

  const [resultList, setResultList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // 지원 결과가 나온 job 목록 보여주기

  const [statusList, setStatusList] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // 지원 결과의 상태 보여주기

  console.log("resultList", resultList);
  console.log("statusList", statusList);
  const [eventStatus, setEventStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // useEffect로 변경사항이 화면에 바로 렌더링되게 도와주는 state

  const [ImgUploadBtn, setImgUploadBtn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // jobSeeker 정보 수정용

  const nameHandler = event => {
    setName(event.target.value);
  };

  const ageHandler = event => {
    setAge(event.target.value);
  };

  const genderHandler = event => {
    setGender(event.target.value);
  };

  const imageHandler = event => {
    setContent(event.target.files[0]);
    setImgUploadBtn(true);
  }; //메인페이지 이동


  const home = () => {
    window.location.href = "/";
  }; // 회원정보를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)


  const jobSeekerHandler = () => {
    setJobSeekerInfoUpdating(!jobSeekerInfoUpdating);
  };

  const addCareer = () => {
    setClick(!click);
  }; // jobSeeker 업데이트 하기
  // 이미지 업로드 구분


  const upoadImage = () => {
    const formData = new FormData();
    formData.append("image", Content);
    console.log(formData);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${"http://localhost:5000"}/uploads3`, formData, {
      header: {
        "content-type": "multipart/form-data"
      }
    }).then(res => {
      console.log(res.data);
      setFilePath(res.data.fileName);
    }).catch(error => {
      console.error(error);
    });
  };

  const UpdateJobSeeker = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${"http://localhost:5000"}/jobseeker`, {
      id: jobSeekerId,
      name,
      age,
      gender,
      image: FilePath
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
      setJobSeekerInfoUpdating(!jobSeekerInfoUpdating);
      setImgUploadBtn(false);
    }).catch(error => {
      console.error(error);
    }); // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함
    // 분기처리 안된 이유 : 비동기(axios 2개가 동시에 실행이 되어, 콜백처리 및 분기처리 진행)
  }; // 비밀번호를 수정하기 위한 버튼의 핸들러 (클릭 시 회원정보 수정 가능)


  const OpenPasswordUpdate = () => {
    setPasswordUpdating(!passwordUpdating);
  };

  const passwordHandler = event => {
    setPassword(event.target.value);
  };

  const questionHandler = event => {
    setQuestion(event.target.value);
  }; // password 업데이트 하기


  const UpdatePassword = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${"http://localhost:5000"}/jobseeker/password`, {
      password,
      question
    }, {
      withCredentials: true
    }).then(res => {
      setPasswordUpdating(!passwordUpdating);
      setPassword("");
      setQuestion("");
      setPasswordErrorMessage("");
    }).catch(err => {
      setPasswordErrorMessage("질문의 답이 올바르지 않습니다");
    });
  };

  const CancelUpdatePassword = () => {
    // 비밀번호 업데이트 취소
    setPasswordUpdating(!passwordUpdating);
    setPassword("");
    setQuestion("");
    setPasswordErrorMessage("");
  }; // jobSeeker 회원 정보 탈퇴 기능 넣기


  const WithdrawJobseeker = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/jobseeker`, {
      withCredentials: true
    }); // jobSeeker 정보 삭제

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/career`, {
      params: {
        jobSeekerId
      }
    }, {
      withCredentials: true
    }); // career 정보 삭제

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/applicant`, {
      params: {
        jobSeekerId
      }
    }, {
      withCredentials: true
    }); // applicant 정보 삭제

    history.push("/map");
  }; // 경력 정보 생성 및 수정 핸들러


  const companyHandler = event => {
    setCompany(event.target.value);
  };

  const periodHandler = event => {
    setPeriod(event.target.value);
  };

  const positionHandler = event => {
    setPosition(event.target.value);
  }; // 경력 사항을 등록 하는 핸들러


  const createCareer = () => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`${"http://localhost:5000"}/career`, {
      jobSeekerId,
      company,
      period,
      position
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
    }).catch(err => {
      console.log(err);
    });
  }; // 경력 사항 '수정'을 위한 핸들러 (클릭 시 경력 정보 수정 가능)


  const careerHandler = (idx, id) => {
    // 클릭시 update 상태가 true로 바뀌며, 조건부 렌더링 진행
    setCareerUpdating({ ...careerUpdating,
      [idx]: true
    }); // 수정하려는 커리어 해당 항목이 state에 담기기 (id 기반 axios 요청이 있어야 할 듯?)

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}/career`, {
      params: {
        id
      }
    }, {
      withCredentials: true
    }).then(res => {
      let careerInfo = res.data.data; // 객체로 불러옴

      setCareerId(careerInfo.id);
      setCompany(careerInfo.company);
      setPeriod(careerInfo.period);
      setPosition(careerInfo.position);
    }).catch(err => {
      console.log(err);
    });
  }; // update할 내용이 입력된 후에 shubmit 용 핸들러


  const updateCareer = (idx, id) => {
    // 클릭시 해당 idx의 updating이 false 또는 삭제됨
    setCareerUpdating({ ...careerUpdating,
      [idx]: false
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`${"http://localhost:5000"}/career`, {
      id,
      jobSeekerId,
      company,
      period,
      position
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
    }).catch(err => {
      console.log(err);
    });
  };

  const deleteCareer = id => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/career/${id}`, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
    }).catch(err => {
      console.log(err);
    });
  }; // 지원 목록에서 지원을 취소하는 핸들러


  const CancelApply = jobId => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`${"http://localhost:5000"}/applicant`, {
      params: {
        jobId,
        jobSeekerId: jobSeekerId
      }
    }, {
      withCredentials: true
    }).then(res => {
      setEventStatus(!eventStatus);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // JobSeeker 정보 받기 (동혁님 전달 코드)
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}`, {
      withCredentials: true
    }).then(res => {
      let jobSeekerInfo = res.data.user;
      setJobSeekerId(jobSeekerInfo.id);
      setName(jobSeekerInfo.name);
      setAge(jobSeekerInfo.age);
      setGender(jobSeekerInfo.gender);
      setImage(jobSeekerInfo.image);
      console.log(res.data.user);
    }).catch(err => {
      console.log(err);
    }); // Career 정보 받기

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}/career/${jobSeekerId}`, {
      withCredentials: true
    }).then(res => {
      setCareerList(res.data.data);
    }).catch(err => {
      console.log(err);
    }); // applicant 테이블 통해 지원한 jobList 받기

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}/applicant/job/${jobSeekerId}`, {
      withCredentials: true
    }).then(res => {
      setApplyList(res.data.data);
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}/applicant/job`, {
      params: {
        jobSeekerId
      }
    }, {
      withCredentials: true
    }).then(res => {
      console.log("res----", res);
      setResultList(res.data.data);
      setStatusList(res.data.applyStatus);
    });
  }, [eventStatus, jobSeekerId]);
  const [UserLoginType, setUserLoginType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${Object({"NODE_ENV":"development","PUBLIC_URL":"","WDS_SOCKET_HOST":undefined,"WDS_SOCKET_PATH":undefined,"WDS_SOCKET_PORT":undefined,"FAST_REFRESH":true,"REACT_APP_SERVER_URL":"http://localhost:5000","REACT_APP_APIKEY":"5d581f63f90c16a3faadb25926217e41"}).REACT_APP_serverURL}`, {
      withCredentials: true
    }).then(res => {
      console.log(res.data.user.type, typeof res.data.user.type);
      setUserLoginType(res.data.user.type);

      if (res.data.user && res.data.user.type) {
        console.log("로그인 된 상태");
      } else {
        props.history.push("/");
      }
    });
  }, [UserLoginType]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
      onClick: home,
      className: "home",
      children: "Home Town Alba"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      className: "mypage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h1", {
        children: "\uD68C\uC6D0\uC815\uBCF4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 381,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
        className: "header2",
        children: "\uAC1C\uC778 \uAE30\uBCF8 \uC815\uBCF4"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 9
      }, this), !jobSeekerInfoUpdating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "user",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tbody", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("img", {
                  id: "profile",
                  src: image,
                  alt: "profile"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 393,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 392,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 391,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 396,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                scope: "row",
                children: "\uC774\uB984"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 399,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                children: name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 400,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                scope: "row",
                children: "\uB098\uC774"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                children: age
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 405,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 403,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                scope: "row",
                children: "\uC131\uBCC4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 408,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                children: gender
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 409,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 390,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              id: "left",
              className: "bubbly-button",
              onClick: jobSeekerHandler,
              children: "\uD68C\uC6D0 \uC815\uBCF4 \uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 17
            }, this), !passwordUpdating ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              className: "bubbly-button",
              onClick: OpenPasswordUpdate,
              children: "\uBE44\uBC00\uBC88\uD638 \uBCC0\uACBD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 421,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 429,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                className: "jobFlow",
                placeholder: "\uCD9C\uC2E0 \uCD08\uB4F1\uD559\uAD50\uB294?",
                name: "question",
                type: "text",
                onChange: questionHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 430,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                className: "jobFlow",
                placeholder: "\uC218\uC815\uD560 \uBE44\uBC00\uBC88\uD638",
                name: "password",
                type: "password",
                onChange: passwordHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 437,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("span", {
                children: passwordErrorMessage
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                id: "left",
                className: "bubbly-button",
                onClick: UpdatePassword,
                children: "\uC644\uB8CC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 445,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                className: "bubbly-button",
                onClick: CancelUpdatePassword,
                children: "\uCDE8\uC18C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 452,
                columnNumber: 21
              }, this)]
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_MyPageModal_Modal_WithdrawJobseeker__WEBPACK_IMPORTED_MODULE_5__["default"], {
              WithdrawJobseeker: WithdrawJobseeker
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 460,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 11
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "user",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tbody", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              scope: "row",
              children: "\uC774\uB984"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 468,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              className: "jobFlow",
              name: "name",
              type: "text",
              onChange: nameHandler,
              value: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 469,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 467,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              scope: "row",
              children: "\uB098\uC774"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              className: "jobFlow",
              name: "age",
              type: "text",
              onChange: ageHandler,
              value: age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 479,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              scope: "row",
              children: "\uC131\uBCC4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("select", {
              onChange: genderHandler,
              className: "jobFlow",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                value: "",
                children: "--\uC131\uBCC4\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694--"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 490,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                value: "\uB0A8\uC790",
                children: "\uB0A8\uC790"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 491,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("option", {
                value: "\uC5EC\uC790",
                children: "\uC5EC\uC790"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 492,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 489,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              scope: "row",
              children: "\uC0AC\uC9C4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 496,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              name: "image",
              type: "file",
              onChange: imageHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 497,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 495,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
            children: ImgUploadBtn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
              onClick: upoadImage,
              children: "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 501,
              columnNumber: 19
            }, this) : null
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 499,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            onClick: UpdateJobSeeker,
            children: "\uC218\uC815 \uC644\uB8CC"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 504,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 466,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "job",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          className: "header2",
          children: "\uACBD\uB825 \uC0AC\uD56D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 511,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "careerSection",
          children: [careerList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            children: "\uB4F1\uB85D\uB41C \uACBD\uB825 \uC0AC\uD56D\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 514,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
              className: "careerDiv",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tbody", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "workCom",
                  children: "\uADFC\uBB34 \uD68C\uC0AC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 519,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "position",
                  children: "\uD3EC\uC9C0\uC158"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 520,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
                  className: "month",
                  children: "\uAE30\uAC04(\uC6D4)"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 521,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 518,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 517,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("table", {
              className: "career",
              children: careerList.map((career, idx) => {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
                  children: !careerUpdating[idx] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                      className: "workCom",
                      children: career.company
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 530,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                      className: "position",
                      children: career.position
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 531,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                      className: "month",
                      children: career.period
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 532,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                      id: "left",
                      className: "pinkButton",
                      onClick: () => {
                        careerHandler(idx, career.id);
                      },
                      children: "\uC218\uC815"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 533,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_MyPageModal_Modal_DeleteCareer__WEBPACK_IMPORTED_MODULE_3__["default"], {
                      deleteCareer: deleteCareer,
                      id: career.id
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 542,
                      columnNumber: 29
                    }, this)]
                  }, career.id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 529,
                    columnNumber: 27
                  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                        className: "jobFlow",
                        name: "company",
                        type: "text",
                        onChange: companyHandler,
                        value: company
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 550,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 549,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                        className: "jobFlow",
                        name: "position",
                        type: "text",
                        onChange: positionHandler,
                        value: position
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 559,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 558,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                        className: "jobFlow",
                        name: "period",
                        type: "text",
                        onChange: periodHandler,
                        value: period
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 568,
                        columnNumber: 31
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 567,
                      columnNumber: 29
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                      className: "pinkButton",
                      onClick: () => {
                        updateCareer(idx, career.id);
                      },
                      children: "\uC218\uC815 \uC644\uB8CC"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 576,
                      columnNumber: 29
                    }, this)]
                  }, career.id, true, {
                    fileName: _jsxFileName,
                    lineNumber: 548,
                    columnNumber: 27
                  }, this)
                }, void 0, false);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 524,
              columnNumber: 17
            }, this)]
          }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
            className: "bubbly-button",
            onClick: addCareer,
            children: "\uACBD\uB825 \uC0AC\uD56D \uB4F1\uB85D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 592,
            columnNumber: 13
          }, this), click ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uADFC\uBB34\uD68C\uC0AC\uBA85",
              name: "company",
              type: "text",
              onChange: companyHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 597,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uD3EC\uC9C0\uC158",
              name: "position",
              type: "text",
              onChange: positionHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 604,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              className: "jobFlow",
              placeholder: "\uADFC\uBB34\uAE30\uAC04(\uC6D4) ex) 3",
              name: "period",
              type: "text",
              onChange: periodHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 611,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
              className: "bubbly-button",
              type: "submit",
              value: "\uB4F1\uB85D\x1D",
              onClick: createCareer
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 618,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 596,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 626,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 512,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h2", {
          className: "header2",
          children: "\uC9C0\uC6D0 \uB0B4\uC5ED"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 630,
          columnNumber: 11
        }, this), applyList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "careerSection",
          children: "\uC9C0\uC6D0 \uB0B4\uC5ED\uC774 \uC5C6\uC2B5\uB2C8\uB2E4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 632,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "careerSection",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("table", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                children: "\uD68C\uC0AC\uBA85"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 637,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                children: "\uC8FC\uC18C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 638,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                children: "\uADFC\uBB34\uC694\uC77C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 639,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                children: "\uADFC\uBB34\uC2DC\uAC04"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 640,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                children: "\uC2DC\uAE09"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 641,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                children: "\uC608\uC0C1 \uC6D4\uAE09\uC5EC"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 642,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
                children: "\uD3EC\uC9C0\uC158"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 643,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 644,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 636,
              columnNumber: 17
            }, this), applyList.map(job => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  children: job.companyName
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 649,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  children: job.location
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 650,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  children: job.day
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 651,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  children: [job.startTime, "~", job.endTime, " (", job.time, "\uC2DC\uAC04)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 652,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  children: job.hourlyWage
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 655,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  children: job.monthlyWage
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 656,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                  children: job.position
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 657,
                  columnNumber: 23
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_MyPageModal_Modal_CancelApply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  CancelApply: CancelApply,
                  jobId: job.id
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 658,
                  columnNumber: 23
                }, this)]
              }, job.id, true, {
                fileName: _jsxFileName,
                lineNumber: 648,
                columnNumber: 21
              }, this);
            })]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 635,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 634,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 668,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("h3", {
          children: "\uC9C0\uC6D0 \uACB0\uACFC"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 669,
          columnNumber: 11
        }, this), resultList.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          children: "\uC9C0\uC6D0 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 13
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("table", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              children: "\uD68C\uC0AC\uBA85"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 675,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              children: "\uC8FC\uC18C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 676,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              children: "\uADFC\uBB34\uC694\uC77C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 677,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              children: "\uADFC\uBB34\uC2DC\uAC04"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 678,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              children: "\uC2DC\uAE09"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 679,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              children: "\uC608\uC0C1 \uC6D4\uAE09\uC5EC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 680,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              children: "\uD3EC\uC9C0\uC158"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 681,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {
              children: "\uACB0\uACFC"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 682,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 683,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 674,
            columnNumber: 15
          }, this), resultList.map((job, number) => {
            if (statusList[number]) {
              if (statusList[number].status === "rejected") {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.companyName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 690,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.location
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 691,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.day
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 692,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: [job.startTime, "~", job.endTime, " (", job.time, "\uC2DC\uAC04)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 693,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.hourlyWage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 696,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.monthlyWage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 697,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.position
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 698,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: "\uC9C0\uC6D0 \uAC70\uC808"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 699,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_MyPageModal_Modal_CancelApply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    CancelApply: CancelApply,
                    jobId: job.id
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 700,
                    columnNumber: 25
                  }, this)]
                }, job.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 689,
                  columnNumber: 23
                }, this);
              } else if (statusList[number].status === "accepted") {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.companyName
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 709,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.location
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 710,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.day
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 711,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: [job.startTime, "~", job.endTime, " (", job.time, "\uC2DC\uAC04)"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 712,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.hourlyWage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 715,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.monthlyWage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 716,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: job.position
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 717,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                    children: "\uC9C0\uC6D0 \uC2B9\uC778"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 718,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_MyPageModal_Modal_CancelApply__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    CancelApply: CancelApply,
                    jobId: job.id
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 719,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
                    className: "bubbly-button",
                    children: "\uCC44\uD305\uCC3D \uC5F4\uAE30"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 723,
                    columnNumber: 25
                  }, this)]
                }, job.id, true, {
                  fileName: _jsxFileName,
                  lineNumber: 708,
                  columnNumber: 23
                }, this);
              }
            }
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 673,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 375,
    columnNumber: 5
  }, this);
}

_s(JobSeekerMyPage, "zy8Yo2ozUF0y2HaD3NhZ928458A=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = JobSeekerMyPage;

var _c;

__webpack_require__.$Refresh$.register(_c, "JobSeekerMyPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/LandingPage.js":
/*!**********************************!*\
  !*** ./src/pages/LandingPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Map */ "./src/pages/Map.js");
/* harmony import */ var _LandingPage_CSS_LandingPage_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingPage_CSS/LandingPage.css */ "./src/pages/LandingPage_CSS/LandingPage.css");
/* harmony import */ var _LandingPage_CSS_LandingPage_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LandingPage_CSS_LandingPage_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar.js */ "./src/components/NavBar.js");
/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer.js */ "./src/components/Footer.js");
/* harmony import */ var _components_TopBtn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TopBtn.js */ "./src/components/TopBtn.js");
/* harmony import */ var _components_Feature_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Feature.js */ "./src/components/Feature.js");
/* harmony import */ var _components_Service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Service */ "./src/components/Service.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/LandingPage.js";











function LandingPage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_TopBtn_js__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_NavBar_js__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: {
        overflow: "hidden"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_Service__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_Feature_js__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_Footer_js__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_c = LandingPage;
/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

var _c;

__webpack_require__.$Refresh$.register(_c, "LandingPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/LandingPage_CSS/Feature.css":
/*!***********************************************!*\
  !*** ./src/pages/LandingPage_CSS/Feature.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Feature.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Feature.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Feature.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Feature.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Feature.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Feature.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/LandingPage_CSS/Footer.css":
/*!**********************************************!*\
  !*** ./src/pages/LandingPage_CSS/Footer.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Footer.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Footer.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Footer.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Footer.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/LandingPage_CSS/LandingPage.css":
/*!***************************************************!*\
  !*** ./src/pages/LandingPage_CSS/LandingPage.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/LandingPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/LandingPage.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/LandingPage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/LandingPage_CSS/NavBar.css":
/*!**********************************************!*\
  !*** ./src/pages/LandingPage_CSS/NavBar.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NavBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/NavBar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NavBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/NavBar.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./NavBar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/NavBar.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/LandingPage_CSS/Service.css":
/*!***********************************************!*\
  !*** ./src/pages/LandingPage_CSS/Service.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Service.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Service.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Service.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Service.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./Service.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/Service.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/LandingPage_CSS/TopBtn.css":
/*!**********************************************!*\
  !*** ./src/pages/LandingPage_CSS/TopBtn.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TopBtn.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/TopBtn.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TopBtn.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/TopBtn.css",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../../node_modules/postcss-loader/src??postcss!./TopBtn.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage_CSS/TopBtn.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/LoginPage.js":
/*!********************************!*\
  !*** ./src/pages/LoginPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mypage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mypage.scss */ "./src/pages/mypage.scss");
/* harmony import */ var _mypage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mypage_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_actions/user_action */ "./src/_actions/user_action.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/LoginPage.js",
    _s = __webpack_require__.$Refresh$.signature();









const {
  Kakao
} = window; // Kakao.init(process.env.REACT_APP_APIKEY);

function LoginPage(props) {
  _s();

  const [LoginDisplay, setLoginDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // true : 구직자 , false : 사업자

  const [Id, setId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const [LoginError, setLoginError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const loginURL = `${"http://localhost:5000"}/auth/google`;

  const ChangeJobDisplay = () => {
    setLoginDisplay(true);
  };

  const ChangeCompanyDisplay = () => {
    setLoginDisplay(false);
  };

  const IdHandler = e => {
    setId(e.target.value);
  };

  const PasswordHandler = e => {
    setPassword(e.target.value);
  };

  const JobSeekrSubmitHandler = e => {
    e.preventDefault();
    let submitData = {
      userId: Id,
      password: Password
    }; //   redux

    dispatch(Object(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["loginJobSeeker"])(submitData)).then(res => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    }).catch(err => {
      setLoginError(true);
    });
  };

  const CompanySubmitHandler = e => {
    console.log("사업자 로그인"); // redux

    e.preventDefault();
    let submitData = {
      userId: Id,
      password: Password
    }; //   redux

    dispatch(Object(_actions_user_action__WEBPACK_IMPORTED_MODULE_6__["loginCompany"])(submitData)).then(res => {
      if (res.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("로그인에 실패하였습니다.");
      }
    }).catch(err => {
      setLoginError(true);
    });
  }; // Google Oauth
  // 명현님 카카오 로그인


  let history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  const loginWithKakao = () => {
    const scope = " account_email";
    Kakao.Auth.login({
      scope,
      // success는 인증 정보를 응답(response)으로 받는다.
      success: function (response) {
        //카카오 SDK에 사용자 토큰을 설정한다.
        window.Kakao.Auth.setAccessToken(response.access_token); //console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);

        let ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function ({
            kakao_account
          }) {
            //어떤 정보 넘어오는지 확인
            const {
              email
            } = kakao_account;
            setId(email);
          },
          fail: function (error) {
            console.log(error);
          }
        });
      },
      fail: function (error) {
        console.log(error);
      }
    });
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${"http://localhost:5000"}/jobseeker/kakaoJobLogin`, {
      userId: Id
    }, {
      withCredentials: true
    }).then(res => {
      console.log("id", res.data);

      if (res.data.message) {
        history.push("/company/login");
      } else {
        history.push("/register");
      }
    });
  };

  if (LoginDisplay) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "mypage",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
          className: "tag",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
            className: "on",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              onClick: ChangeJobDisplay,
              children: "\uAC1C\uC778\uD68C\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              onClick: ChangeCompanyDisplay,
              children: "\uAE30\uC5C5\uD68C\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "loginSection",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tbody", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  value: Id,
                  type: "text",
                  onChange: IdHandler,
                  placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  type: "password",
                  value: Password,
                  onChange: PasswordHandler,
                  placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 151,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          className: "bubbly-button",
          type: "button",
          onClick: JobSeekrSubmitHandler,
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          className: "googleSns",
          href: `${"http://localhost:5000"}/auth/google`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
          className: "kakaoSns",
          href: `${"http://localhost:5000"}/auth/kakao`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/register",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "#",
          children: "\uC544\uC774\uB514/\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        className: "mypage",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("ul", {
          className: "tag",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              onClick: ChangeJobDisplay,
              children: "\uAC1C\uC778\uD68C\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 222,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("li", {
            className: "on",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("a", {
              onClick: ChangeCompanyDisplay,
              children: "\uAE30\uC5C5\uD68C\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 225,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          className: "loginSection",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tbody", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  value: Id,
                  type: "text",
                  onChange: IdHandler,
                  placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("tr", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("input", {
                  type: "password",
                  value: Password,
                  onChange: PasswordHandler,
                  placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("button", {
          className: "bubbly-button",
          type: "button",
          onClick: CompanySubmitHandler,
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 11
        }, this), LoginError ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
          style: {
            color: "red"
          },
          children: "\uC544\uC774\uB514\uB098 \uBE44\uBC00\uBC88\uD638\uB97C \uD55C\uBC88 \uB354 \uD655\uC778\uD574\uC8FC\uC138\uC694"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "/register",
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          to: "#",
          children: "\uC544\uC774\uB514/\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 7
    }, this);
  }
}

_s(LoginPage, "v05vtpfTUi621SK4j2SJC6f7UtE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"]];
});

_c = LoginPage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(LoginPage));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "LoginPage");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/Map.css":
/*!***************************!*\
  !*** ./src/pages/Map.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Map.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Map.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Map.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Map.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Map.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Map.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/Map.js":
/*!**************************!*\
  !*** ./src/pages/Map.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Map_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Map.css */ "./src/pages/Map.css");
/* harmony import */ var _Map_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Map_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/Map.js",
    _s = __webpack_require__.$Refresh$.signature();

/*global kakao*/






const {
  kakao
} = window;
function Map({
  guestApplyStatus,
  guestApplyStatusHandler
}) {
  _s();

  const [jobSeekerId, setJobSeekerId] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const [Login, setLogin] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [applyLocation, setApplyLocation] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // 지원시 해당 위치를 지도에 띄우도록 하기 위한 state

  const [startTimeFilter, setStartTimeFilter] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [endTimeFilter, setEndTimeFilter] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [minWageFilter, setMinWageFilter] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [maxWageFilter, setMaxWageFilter] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const [mapLocation, setMapLocation] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([37.5665406708322, 126.97787259165268]); //[위도, 경도]

  const [mapLevel, setMapLevel] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(6);
  const [searchPlace, setSearchPlace] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); // 장소 검색 키워드

  const [searchLocation, setSearchLocation] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""); // 장소 검색 결과 (useEffect 조건으로 사용 위해 searchPlace와 분리)

  const [filteredData, setFilteredData] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // 현재 지도 위치에 따라 필터링 된 데이터 state

  const [isOpenList, setIsOpenList] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isOpenFilterBar, setIsOpenFilterBar] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleFilterBar = () => {
    setIsOpenFilterBar(!isOpenFilterBar);
  }; // 필터에서 시작 시간 입력


  const startTimeFilterHandler = event => {
    setStartTimeFilter(event.target.value);
  }; // 필터에서 끝 시간 입력


  const endTimeFilterHandler = event => {
    setEndTimeFilter(event.target.value);
  }; // 필터에서 최소 월급 입력


  const minWageFilterHandler = event => {
    setMinWageFilter(event.target.value);
  }; // 필터에서 최대 월급 입력


  const maxWageFilterHandler = event => {
    setMaxWageFilter(event.target.value);
  }; // 검색할 장소를 입력하는 핸들러


  const searchPlaceHandler = event => {
    setSearchPlace(event.target.value);
  }; // 검색 키워드 입력 후 검색을 시작하는 핸들러


  const placeSubmitHandler = event => {
    event.preventDefault();
    setSearchLocation(searchPlace); // setSearchPlace(""); 검색 기록을 남기지 않으려면 이 주석을 해제

    setApplyLocation([]);
    mapLocationBySearch(searchPlace); // 일단 초기화 시키고, 검색 장소로 이동 후 값 넣어주기
  }; // 검색된 장소의 위치가 mapLocation State에 저장되도록 하는 핸들러


  const mapLocationBySearch = location => {
    // 카카오맵의 키워드 검색 API
    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(location, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        setMapLocation([parseFloat(data[0].y), parseFloat(data[0].x)]);
      }
    }
  }; // 목록 열고 닫은 핸들러


  const openListHandler = () => {
    setIsOpenList(!isOpenList);
  }; // 목록 클릭 시 그 곳으로 지도 이동


  const clickPlaceOnList = (latitude, longitude) => {
    setApplyLocation([]);
    setSearchLocation("");
    setMapLocation([parseFloat(latitude), parseFloat(longitude)]);
  }; // 숫자에 콤마를 붙이는 함수


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } // 숫자에 콤마 제거 방법 : parseInt('12,345'.replace(/,/g, ""))
  // 시간에서 초를 제외하고 시, 분 만 표시하는 함수


  function simplifyTime(time) {
    //시-분-초 형태로 된 시간 데이터를 시-분으로 간단히 변경하기 위한 함수
    if (!time) return time;
    return time[0] + time[1] + time[2] + time[3] + time[4];
  } //로그인 정보 불러오는 이팩트


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${"http://localhost:5000"}/jobSeeker`, {
      withCredentials: true
    }).then(res => {
      if (res.data.user) {
        setJobSeekerId(res.data.user.id);
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, [Login]); // 지도를 표시하는 useEffect

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${"http://localhost:5000"}/job`, {
      withCredentials: true
    }).then(res => {
      if (mapLevel <= 4) {
        return res.data.data.filter(job => {
          return parseFloat(job.latitude) >= mapLocation[0] - 0.01125 && parseFloat(job.latitude) <= mapLocation[0] + 0.01125 && parseFloat(job.longitude) >= mapLocation[1] - 0.01625 && parseFloat(job.longitude) <= mapLocation[1] + 0.01625;
        });
      } else if (mapLevel === 5) {
        return res.data.data.filter(job => {
          return parseFloat(job.latitude) >= mapLocation[0] - 0.0225 && parseFloat(job.latitude) <= mapLocation[0] + 0.0225 && parseFloat(job.longitude) >= mapLocation[1] - 0.0325 && parseFloat(job.longitude) <= mapLocation[1] + 0.0325;
        });
      } else if (mapLevel === 6) {
        return res.data.data.filter(job => {
          return parseFloat(job.latitude) >= mapLocation[0] - 0.045 && parseFloat(job.latitude) <= mapLocation[0] + 0.045 && parseFloat(job.longitude) >= mapLocation[1] - 0.065 && parseFloat(job.longitude) <= mapLocation[1] + 0.065;
        });
      } else if (mapLevel >= 7) {
        return res.data.data.filter(job => {
          return parseFloat(job.latitude) >= mapLocation[0] - 0.09 && parseFloat(job.latitude) <= mapLocation[0] + 0.09 && parseFloat(job.longitude) >= mapLocation[1] - 0.13 && parseFloat(job.longitude) <= mapLocation[1] + 0.13;
        });
      }
    }).then(res => {
      // 시간 관련 필터기능 입력
      if (startTimeFilter && endTimeFilter) {
        return res.filter(job => {
          return job.startTime >= startTimeFilter && job.endTime <= endTimeFilter;
        });
      } else if (startTimeFilter) {
        return res.filter(job => {
          return job.startTime >= startTimeFilter;
        });
      } else if (endTimeFilter) {
        return res.filter(job => {
          return job.endTime <= endTimeFilter;
        });
      } else {
        return res;
      }
    }).then(res => {
      // 월급 관련 필터기능 입력
      if (minWageFilter && maxWageFilter) {
        return res.filter(job => {
          return minWageFilter <= job.monthlyWage && job.monthlyWage <= maxWageFilter;
        });
      } else if (minWageFilter) {
        return res.filter(job => {
          return minWageFilter <= job.monthlyWage;
        });
      } else if (maxWageFilter) {
        return res.filter(job => {
          return maxWageFilter >= job.monthlyWage;
        });
      } else {
        return res;
      }
    }).then(res => {
      if (jobSeekerId === 0) {
        return res;
      } else {
        return res.filter(job => {
          return job.companyId !== 0;
        });
      }
    }).then(data => {
      setFilteredData(data); //-------------------- 지도 생성 (필수)
      //(필수)지도를 담을 영역의 DOM 레퍼런스

      const container = document.getElementById("map"); //(필수)지도를 생성할 때 필요한 기본 옵션

      const options = {
        center: new kakao.maps.LatLng(37.5, 127.0),
        level: mapLevel //지도의 레벨(확대, 축소 정도)

      }; //(필수)지도 생성 및 객체 리턴

      const map = new kakao.maps.Map(container, options); // --------------- 아래 주석 해제 시 스카이뷰 기능 사용 가능
      // let mapTypeControl = new kakao.maps.MapTypeControl();
      // map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
      // --------------- 지도 확대 레벨을 조정하기 위한 스크롤 생성 및 확대 레벨을 state로 저장

      let zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT); // 지도 확대 레벨 변경 시 실행되는 함수

      kakao.maps.event.addListener(map, "zoom_changed", function () {
        // 지도의 현재 레벨을 얻어옵니다
        let level = map.getLevel(); // 지도 확대 레벨을 state에 저장

        setMapLevel(level);
      }); // --------------- 지도에서 보여줄 위치를 선택하기

      if (!(applyLocation.length === 0)) {
        // 지원 or 지원 취소한 일자리 위치가 state에 있는 경우
        // 지원 또는 지원취소 시 해당 일자리로 지도가 이동하기
        let locPosition = new kakao.maps.LatLng(applyLocation[0], applyLocation[1]);
        map.setCenter(locPosition);
      } else if (searchLocation) {
        // 장소 검색을 한 경우
        // 카카오맵의 키워드 검색 API
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchLocation, placesSearchCB);

        function placesSearchCB(data, status, pagination) {
          if (status === kakao.maps.services.Status.OK) {
            let locPosition = new kakao.maps.LatLng(data[0].y, data[0].x);
            map.setCenter(locPosition);
          }
        }
      } else if (!(mapLocation.length === 0)) {
        // 현재 위치가 state에 있는 경우
        // 지도의 위치를 렌더링 바로 전 위치로 이동시키기 (랜더링 되어도 현재 위치가 변하지 않도록 하기 위함)
        let locPosition = new kakao.maps.LatLng(mapLocation[0], mapLocation[1]);
        map.setCenter(locPosition);
      } // else if (navigator.geolocation) {  //HTML5의 geolocation으로 사용할 수 있는지 확인합니다
      //   // 초기 지도화면 렌더링 시 사용자의 현재 GPS 위치가 제공되는 경우, 해당 위치를 지도에서 보여주기
      //   // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      //   navigator.geolocation.getCurrentPosition(function (position) {
      //     let lat = position.coords.latitude, // 위도
      //       lon = position.coords.longitude; // 경도
      //       setMapLocation([lat, lon])
      //     let locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
      //     // 지도 표시
      //     map.setCenter(locPosition);
      //   });
      // }
      // else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      //   // 초기 지도화면 렌더링 시 현재 GPS 위치가 없는 경우, 서울 중심을 지도에서 보여주기
      //   let locPosition = new kakao.maps.LatLng(
      //     37.5665406708322,
      //     126.97787259165268
      //   );
      //   map.setCenter(locPosition);
      // }
      //------------------------ 마우스 이동 시 지도에서 해당 위치의 중심좌표 얻기
      // 마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다


      kakao.maps.event.addListener(map, "dragend", function () {
        // 지도 중심좌표를 얻어옵니다
        let latlng = map.getCenter();
        setApplyLocation([]);
        setSearchLocation("");
        setMapLocation([latlng.Ma, latlng.La]);
      }); //---------------------주소를 좌표로 변환 후 마커를 뛰우고 마커에 이벤트 등록하기
      // 주소-좌표 변환 객체를 생성합니다

      let geocoder = new kakao.maps.services.Geocoder(); // 주소로 좌표를 검색합니다

      for (let i = 0; i < data.length; i++) {
        geocoder.addressSearch(data[i].location, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면
            let coords = new kakao.maps.LatLng(result[0].y, result[0].x); // 지원 여부에 따라 마커 및 클릭 infowindow를 다르게 표시하기 위해, 지원자에 대한 axios 요청

            axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${"http://localhost:5000"}/applicant`, {
              params: {
                jobId: data[i].id,
                jobSeekerId
              }
            }).then(applicant => {
              // 지원을 취소하는 핸들러 제작
              function CancelApply() {
                axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${"http://localhost:5000"}/applicant`, {
                  params: {
                    jobId: data[i].id,
                    jobSeekerId
                  }
                }, {
                  withCredentials: true
                }).then(res => {
                  setApplyLocation([parseFloat(result[0].y), parseFloat(result[0].x)]);
                  setSearchLocation("");
                  setMapLocation([parseFloat(result[0].y), parseFloat(result[0].x)]);
                }).catch();
              }

              const ChangeGuestApplyStatus = () => {
                guestApplyStatusHandler();
              }; // 지원을 요청하는 핸들러 제작


              function ApplyJob() {
                axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${"http://localhost:5000"}/applicant`, {
                  jobId: data[i].id,
                  jobSeekerId
                }).then(res => {
                  setApplyLocation([parseFloat(result[0].y), parseFloat(result[0].x)]);
                  setSearchLocation("");
                  setMapLocation([parseFloat(result[0].y), parseFloat(result[0].x)]);
                  return res;
                }).then(res => {
                  if (jobSeekerId === 0) {
                    setTimeout(() => {
                      console.log("res.data.id", res.data.id);
                      axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${"http://localhost:5000"}/applicant/${res.data.id}`, {
                        withCredentials: true
                      }).then(res => {
                        ChangeGuestApplyStatus();
                      });
                    }, 300000);
                  }
                }).catch();
              } // 마커에 이벤트를 등록하는 핸들러 제작


              function MakeMarkerEvent(marker, buttonContent, applyHandler) {
                // 마커에 마우스오버 이벤트를 등록합니다
                kakao.maps.event.addListener(marker, "mouseover", function () {
                  // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                  infowindowHover.open(map, marker);
                }); // 마커에 마우스아웃 이벤트를 등록합니다

                kakao.maps.event.addListener(marker, "mouseout", function () {
                  // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                  infowindowHover.close();
                }); // 마커에 Hover 이벤트 등록 : 인포윈도우에 정보 제공

                let infowindowHover = new kakao.maps.InfoWindow({
                  content: `<div style="width:300px;text-align:center;padding:6px 0;line-height:30px;font-size:20px">
                    <div>근무요일 : ${JSON.parse(data[i].day)}</div>
                    <div>근무시간 : ${simplifyTime(data[i].startTime)}~${simplifyTime(data[i].endTime)}</div>
                    <div>월급여 : ${numberWithCommas(data[i].monthlyWage)}원</div>
                    <div>포지션 : ${data[i].position}</div>
                  </div>`
                }); // 마커에 click 이벤트 등록 : 인포윈도우에 정보 제공 및 일자리 지원 가능

                let contentClick = document.createElement("div");
                contentClick.style.cssText = "width: 300px; text-align:center; padding:6px 0; 1px 0; line-height:30px;font-size:20px;";
                let companyName = document.createElement("div");
                companyName.textContent = `회사명 : ${data[i].companyName}`;
                let day = document.createElement("div");
                day.textContent = `근무요일 : ${JSON.parse(data[i].day)}`;
                let time = document.createElement("div");
                time.textContent = `근무시간 : ${simplifyTime(data[i].startTime)}~${simplifyTime(data[i].endTime)}(${data[i].time}시간)`;
                let hourlyWage = document.createElement("div");
                hourlyWage.textContent = `시급 : ${numberWithCommas(data[i].hourlyWage)}원`;
                let monthlyWage = document.createElement("div");
                monthlyWage.textContent = `예상 월급여 : ${numberWithCommas(data[i].monthlyWage)}원`;
                let position = document.createElement("div");
                position.textContent = `포지션 : ${data[i].position}`;
                let btn = document.createElement("button");
                btn.style.cssText = "border:none; width:50px; height:50px ;font-size:20px; border-radius:5px; background-color: rgb(50, 108, 249); color:#fff;";
                btn.textContent = buttonContent;
                btn.onclick = applyHandler;
                contentClick.append(companyName, day, time, hourlyWage, monthlyWage, position, btn);
                let infowindowClick = new kakao.maps.InfoWindow({
                  content: contentClick,
                  removable: true
                }); // 마커에 클릭이벤트를 등록합니다

                kakao.maps.event.addListener(marker, "click", function () {
                  // 마커 위에 인포윈도우를 표시합니다
                  infowindowClick.open(map, marker);
                });
              }

              if (applicant.data.data) {
                // 이미 지원 한 일자리의 경우 마커 생성
                if (applicant.data.data.status === "waiting") {
                  let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
                  let imageSize = new kakao.maps.Size(24, 35);
                  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 결과값으로 받은 위치를 마커로 표시합니다

                  let marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                    clickable: true,
                    // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    image: markerImage // 마커 이미지

                  });
                  MakeMarkerEvent(marker, "지원 취소하기", CancelApply);
                } else if (applicant.data.data.status === "rejected") {
                  let imageSrc = "https://cdn.pixabay.com/photo/2016/12/18/11/04/pointer-1915456_1280.png";
                  let imageSize = new kakao.maps.Size(24, 35);
                  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 결과값으로 받은 위치를 마커로 표시합니다

                  let marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                    clickable: true,
                    // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    image: markerImage // 마커 이미지

                  });
                  MakeMarkerEvent(marker, "지원 거절됨(삭제하기)", CancelApply);
                } else if (applicant.data.data.status === "accepted") {
                  let imageSrc = "https://cdn.pixabay.com/photo/2014/04/02/10/45/location-304467_1280.png";
                  let imageSize = new kakao.maps.Size(24, 35);
                  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); // 결과값으로 받은 위치를 마커로 표시합니다

                  let marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                    clickable: true,
                    // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
                    image: markerImage // 마커 이미지

                  });

                  if (jobSeekerId === 0) {
                    MakeMarkerEvent(marker, "지원 승인됨(회원만 채팅가능)");
                  } else {
                    MakeMarkerEvent(marker, "지원 승인됨(채팅창 열기)");
                  }
                }
              } else {
                // 지원하지 않은 일자리의 경우 마커 생성
                // 결과값으로 받은 위치를 마커로 표시합니다
                let marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                  clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다

                });
                MakeMarkerEvent(marker, "지원", ApplyJob);
              }
            });
          }
        });
      }
    });
  }, [jobSeekerId, mapLocation, mapLevel, startTimeFilter, endTimeFilter, minWageFilter, maxWageFilter, guestApplyStatus]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
    className: "map-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      className: "search-filter-container",
      children: [isOpenList ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
          className: "inputForm",
          onSubmit: placeSubmitHandler,
          children: filteredData.map((job, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "list-container",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "list-image",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                children: "\uC774\uBBF8\uC9C0\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 607,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 606,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "list-info",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
                children: job.companyName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 610,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "list-location",
                children: job.location
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 611,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "list-monthlyWage",
                children: ["\uC608\uC0C1 \uC6D4\uAE09 : ", job.monthlyWage, "\uC6D0"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 612,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                children: ["\uADFC\uBB34 \uC694\uC77C : ", JSON.parse(job.day)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 615,
                columnNumber: 21
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("p", {
                className: "list-created",
                children: ["\uB4F1\uB85D\uC77C : ", job.createdAt.slice(0, 10)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 616,
                columnNumber: 21
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 609,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
              className: "list-btn",
              onClick: () => {
                clickPlaceOnList(job.latitude, job.longitude);
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                className: "fas fa-chevron-circle-right"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 626,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 620,
              columnNumber: 19
            }, this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 605,
            columnNumber: 17
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 603,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
          className: "search-wrapper",
          onSubmit: placeSubmitHandler,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
            className: "fas fa-search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 632,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            className: "search-input",
            placeholder: "\uC8FC\uBCC0 \uB3D9\uB124\uB97C \uAC80\uC0C9\uD558\uC138\uC694",
            onChange: searchPlaceHandler,
            value: searchPlace
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 633,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            className: "search-btn",
            type: "submit",
            children: "\uAC80\uC0C9"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 639,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
            className: "search-btn",
            onClick: openListHandler,
            children: "\uBAA9\uB85D"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 642,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 631,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("form", {
        className: "search-wrapper",
        onSubmit: placeSubmitHandler,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
          className: "fas fa-search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 649,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
          className: "search-input",
          placeholder: "\uC8FC\uBCC0 \uB3D9\uB124\uB97C \uAC80\uC0C9\uD558\uC138\uC694",
          onChange: searchPlaceHandler,
          value: searchPlace
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 650,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "search-btn",
          type: "submit",
          children: "\uAC80\uC0C9"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "search-btn",
          onClick: openListHandler,
          children: "\uBAA9\uB85D"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        className: "filter-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "filter-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
            onChange: minWageFilterHandler,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "",
              children: "\uCD5C\uC18C \uC6D4\uAE09"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 667,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "300000",
              children: "300,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 668,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "600000",
              children: "600,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 669,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "900000",
              children: "900,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 670,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "1200000",
              children: "1,200,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 671,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 666,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 665,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "filter-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
            onChange: maxWageFilterHandler,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "",
              children: "\uCD5C\uB300 \uC6D4\uAE09"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 676,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "300000",
              children: "300,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 677,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "600000",
              children: "600,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 678,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "900000",
              children: "900,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 679,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "1200000",
              children: "1,200,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 680,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "1500000",
              children: "1,500,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 681,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 675,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 674,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "filter-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            id: "timepicker",
            type: "time",
            onChange: startTimeFilterHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 685,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 684,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "filter-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            id: "timepicker",
            type: "time",
            onChange: endTimeFilterHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 692,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 691,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("aside", {
        className: isOpenFilterBar ? "show-filter-item" : "hide-filter-item",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "filter-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
            onChange: minWageFilterHandler,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "",
              children: "\uCD5C\uC18C \uC6D4\uAE09"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 705,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "300000",
              children: "300,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 706,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "600000",
              children: "600,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 707,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "900000",
              children: "900,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 708,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "1200000",
              children: "1,200,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 709,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 704,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 703,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "filter-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("select", {
            onChange: maxWageFilterHandler,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "",
              children: "\uCD5C\uB300 \uC6D4\uAE09"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 714,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "300000",
              children: "300,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 715,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "600000",
              children: "600,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 716,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "900000",
              children: "900,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 717,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "1200000",
              children: "1,200,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 718,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("option", {
              value: "1500000",
              children: "1,500,000\uC6D0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 719,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 713,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 712,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "filter-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            id: "timepicker",
            type: "time",
            onChange: startTimeFilterHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 723,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 722,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("label", {
          className: "filter-item",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("input", {
            id: "timepicker",
            type: "time",
            onChange: endTimeFilterHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 730,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 729,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("aside", {
        className: "btn-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
          className: "filterBar-btn",
          onClick: () => {
            toggleFilterBar();
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
            className: "fas fa-ellipsis-h"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 744,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 738,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      id: "map"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 749,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 598,
    columnNumber: 5
  }, this);
}

_s(Map, "GjfeTwEpZrECu5I/3XDTlhctd0A=");

_c = Map;

var _c;

__webpack_require__.$Refresh$.register(_c, "Map");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/MyPage.js":
/*!*****************************!*\
  !*** ./src/pages/MyPage.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _JobSeekerMyPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobSeekerMyPage */ "./src/pages/JobSeekerMyPage.js");
/* harmony import */ var _CompanyMyPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompanyMyPage */ "./src/pages/CompanyMyPage.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/MyPage.js",
    _s = __webpack_require__.$Refresh$.signature();









function AdminPage(props) {
  _s();

  //   로그인한 유저의 id를 불러오기 위함
  // 지윤님께 제안 드릴 사항 -> MyPage Component 2개를 분기처리로 하고 NavBar는 MyPage하나로만
  const [UserLoginType, setUserLoginType] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${"http://localhost:5000"}`, {
      withCredentials: true
    }).then(res => {
      // console.log(res.data.user.type, typeof res.data.user.type);
      if (res.data.user && res.data.user.type) {
        setUserLoginType(res.data.user.type);
      } else {
        props.history.push("/");
      }
    });
  }, [UserLoginType]);

  if (UserLoginType === "job" || UserLoginType === "G" || UserLoginType === "K") {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_JobSeekerMyPage__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        children: "\uC0AC\uC5C5\uC790 MyPage "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_CompanyMyPage__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }
}

_s(AdminPage, "iiJJqPxzV1dNU33TvMRQFyQJWeM=");

_c = AdminPage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(AdminPage));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "AdminPage");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/RegisterPage.css":
/*!************************************!*\
  !*** ./src/pages/RegisterPage.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./RegisterPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/RegisterPage.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./RegisterPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/RegisterPage.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./RegisterPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/RegisterPage.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/RegisterPage.js":
/*!***********************************!*\
  !*** ./src/pages/RegisterPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_actions/user_action */ "./src/_actions/user_action.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-daum-postcode */ "./node_modules/react-daum-postcode/lib/index.js");
/* harmony import */ var react_daum_postcode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_daum_postcode__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_LoadingModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/LoadingModal */ "./src/components/LoadingModal.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.js");
/* harmony import */ var _RegisterPage_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RegisterPage.css */ "./src/pages/RegisterPage.css");
/* harmony import */ var _RegisterPage_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_RegisterPage_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/hongminhyeog/code states/HomeTownAlba/client/src/pages/RegisterPage.js",
    _s = __webpack_require__.$Refresh$.signature();














function RegisterPage(props) {
  _s();

  const [RegisterDisplay, setRegisterDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("jobseeker"); // true : 구직자 , false : 사업자
  // 카카오 주소검색 API 활용 공간

  const [address, setAddress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 주소

  const [addressDetail, setAddressDetail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); // 상세주소

  const [isOpenPost, setIsOpenPost] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [LoadingStatus, setLoadingStatus] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [fileSelect, setFileSelect] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("파일선택");

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = data => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }

      if (data.buildingName !== "") {
        extraAddr += extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }

      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }

    setAddress(data.zonecode);
    setAddressDetail(fullAddr);
    setIsOpenPost(false);
    console.log("주소", address);
    console.log("상세 주소", addressDetail);
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    right: "70px",
    width: "400px",
    height: "400px"
  }; // 카카오 주소검색 API 활용 공간
  // 구직자

  const [JobSeekerEmailInput, setJobSeekerEmailInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [JobSeekerAuthCode, setJobSeekerAuthCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [JobSeekerInputAuthCode, setJobSeekerInputAuthCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // 사업자

  const [CompanyEmailInput, setCompanyEmailInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [CompanyAuthCode, setCompanyAuthCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [CompanyInputAuthCode, setCompanyInputAuthCode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // 회원가입 입력정보

  const [Id, setId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Password, setPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [ConfirmPassword, setConfirmPassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Age, setAge] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [Email, setEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Gender, setGender] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""); //select

  const [CompanyEmail, setCompanyEmail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [Question, setQuestion] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [CompanyName, setCompanyName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [BusinessNumber, setBusinessNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isOpenJobSeeker, setIsOpenJobSeeker] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // 이미지 업로드 테스트

  const BASE_URL = `${"http://localhost:5000"}`;
  const [Content, setContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [FilePath, setFilePath] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const ImgUploadHandler = e => {
    setContent(e.target.files[0]);
    setFileSelect(e.target.files[0].name);
  }; // 이미지 업로드 테스트


  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  const ChangeJobDisplay = () => {
    setRegisterDisplay("jobseeker");
    setIsOpenJobSeeker(!isOpenJobSeeker);
  };

  const ChangeCompanyDisplay = () => {
    setRegisterDisplay("company");
  };

  const ChangeKaKaoDisplay = () => {
    setRegisterDisplay("kakao");
  };

  const IdHandler = e => {
    setId(e.target.value);
  };

  const PasswordHandler = e => {
    setPassword(e.target.value);
  };

  const ConfirmPasswordHandler = e => {
    setConfirmPassword(e.target.value);
  };

  const NameHandler = e => {
    setName(e.target.value);
  };

  const EmailHandler = e => {
    setEmail(e.target.value);
  };

  const CompanyEmailHandler = e => {
    setCompanyEmail(e.target.value);
  };

  const AgeHandler = e => {
    setAge(e.target.value);
  };

  const genderHandler = e => {
    // console.log(e.target.value);
    setGender(e.target.value);
  };

  const QuestionHandler = e => {
    setQuestion(e.target.value);
  };

  const CompanyNameHandler = e => {
    setCompanyName(e.target.value);
  };

  const BusinessNumberHandler = e => {
    setBusinessNumber(e.target.value);
  }; // 인증번호 입력란


  const InputHandler = e => {
    setJobSeekerInputAuthCode(e.target.value);
  };

  const CompanyInputHandler = e => {
    setCompanyInputAuthCode(e.target.value);
  }; // 구직자 회원가입 처리 로직 : 이메일 인증 -> 최종 회원가입


  const JobSeekrSubmitHandler = e => {
    e.preventDefault();
    setLoadingStatus(true); // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함

    const formData = new FormData();
    formData.append("image", Content);
    console.log(formData);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${"http://localhost:5000"}/upload`, formData, {
      header: {
        "content-type": "multipart/form-data"
      }
    }).then(res => {
      console.log(res.data);
      setFilePath(`${BASE_URL}/img/${res.data.fileName}`);
    }).catch(error => {
      console.error(error);
    }); // 1차로 이미지 업로드 -> 최종 회원가입 눌렀을때 시간 소요 줄이기 위함

    let authEmailData = {
      email: Email //req.body.email로 바꾸어야함 -> post 2번쨰 인자로 요청에도 넣어주어야함

    }; //   redux

    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${"http://localhost:5000"}/mail`, authEmailData, {
      withCredentials: true
    }).then(res => {
      // console.log(res.data);
      setLoadingStatus(false);
      setJobSeekerEmailInput(true);
      setJobSeekerAuthCode(res.data);
    });
  };

  const finalJobSeekerSubmitHandler = e => {
    e.preventDefault();
    let submitData = {
      userId: Id,
      email: Email,
      password: Password,
      name: Name,
      age: Age,
      gender: Gender,
      image: FilePath,
      question: Question
    }; // console.log("AuthCode", typeof AuthCode, AuthCode);
    // console.log("InputAuthCode", typeof InputAuthCode, InputAuthCode);

    if (Password !== ConfirmPassword) {
      console.log("비밀번호와 비밀번호 확인이 서로 같지 않습니다.");
    } else {
      if (JobSeekerAuthCode === parseInt(JobSeekerInputAuthCode)) {
        dispatch(Object(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["registerJobSeeker"])(submitData)).then(res => {
          // console.log(res.payload);
          if (res.payload.registersuccess) {
            props.history.push("/login");
          } else {
            alert("회원가입에 실패하였습니다.");
          }
        });
      } else {
        console.log("인증번호가 다릅니다");
      }
    }
  }; // 사업자 회원가입 처리 로직 : 이메일 인증 -> 최종 회원가입


  const CompanySubmitHandler = e => {
    e.preventDefault(); // 회원가입할때 Db에 type이라는 field를 한개 추가

    setLoadingStatus(true);
    let authEmailData = {
      email: CompanyEmail //req.body.email로 바꾸어야함 -> post 2번쨰 인자로 요청에도 넣어주어야함

    };
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(`${"http://localhost:5000"}/mail`, authEmailData, {
      withCredentials: true
    }).then(res => {
      // console.log(res.data);
      setLoadingStatus(false);
      setCompanyEmailInput(true);
      setCompanyAuthCode(res.data);
    });
  };

  const finalCompanySubmitHandler = e => {
    e.preventDefault();
    let submitData = {
      userId: Id,
      password: Password,
      email: Email,
      companyName: CompanyName,
      location: addressDetail,
      businessNumber: BusinessNumber,
      question: Question
    }; //   redux

    if (Password !== ConfirmPassword) {
      console.log("비밀번호와 비밀번호 확인이 서로 같지 않습니다.");
    } else {
      if (CompanyAuthCode === parseInt(CompanyInputAuthCode)) {
        dispatch(Object(_actions_user_action__WEBPACK_IMPORTED_MODULE_1__["registerCompany"])(submitData)).then(res => {
          // console.log(res.payload);
          if (res.payload.registersuccess) {
            props.history.push("/login");
          } else {
            alert("회원가입에 실패하였습니다.");
          }
        });
      }
    }
  };

  if (RegisterDisplay === "jobseeker") {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "jobseeker-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "jobseeker-wrapper",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
            className: "hover",
            onClick: ChangeJobDisplay,
            children: "\uAD6C\uC9C1\uC790 \uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
            onClick: ChangeCompanyDisplay,
            children: "\uC0AC\uC5C5\uC790 \uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "jobseeker-submit-wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("form", {
            className: "jobseeker-form",
            onSubmit: finalJobSeekerSubmitHandler,
            encType: "multipart/form-data",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "jobseeker-title",
              children: "\uAD6C\uC9C1\uC790 \uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 307,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "jobseeker-submit-form",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC544\uC774\uB514"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 311,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "text",
                  value: Id,
                  onChange: IdHandler,
                  placeholder: "\uC544\uC774\uB514"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uBE44\uBC00\uBC88\uD638"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 321,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "password",
                  value: Password,
                  onChange: PasswordHandler,
                  placeholder: "\uBE44\uBC00\uBC88\uD638"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 322,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 320,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 331,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "password",
                  value: ConfirmPassword,
                  onChange: ConfirmPasswordHandler,
                  placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 332,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 330,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC774\uB984"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 341,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "text",
                  value: Name,
                  onChange: NameHandler,
                  placeholder: "\uC774\uB984"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 343,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uB098\uC774"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "number",
                  value: Age,
                  onChange: AgeHandler,
                  placeholder: "    \uB098\uC774"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 354,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC131\uBCC4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 363,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("select", {
                  onChange: genderHandler,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("option", {
                    value: "",
                    children: "\uC131\uBCC4\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 365,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("option", {
                    value: "\uB0A8\uC790",
                    children: "\uB0A8\uC790"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("option", {
                    value: "\uC5EC\uC790",
                    children: "\uC5EC\uC790"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 364,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 362,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC878\uC5C5\uD55C \uCD08\uB4F1\uD559\uAD50\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 371,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  style: {
                    color: "rgb(63, 71, 82)",
                    fontWeight: "400"
                  },
                  children: "\uBE44\uBC00\uBC88\uD638 \uC218\uC815\uC744 \uC704\uD574 \uC0AC\uC6A9 \uB429\uB2C8\uB2E4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 372,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "text",
                  value: Question,
                  placeholder: "\uC878\uC5C5\uD55C \uCD08\uB4F1\uD559\uAD50\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694",
                  onChange: QuestionHandler
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uD504\uB85C\uD544\uC0AC\uC9C4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  className: "upload-name",
                  value: fileSelect,
                  disabled: "disabled"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 385,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("label", {
                  for: "file-upload",
                  children: "\uC0AC\uC9C4 \uC5C5\uB85C\uB4DC"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 390,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  className: "upload-hidden",
                  id: "file-upload",
                  name: "image",
                  type: "file",
                  placeholder: "\uD504\uB85C\uD544 \uC0AC\uC9C4\uC744 \uB4F1\uB85D\uD558\uC138\uC694",
                  onChange: ImgUploadHandler
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 391,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC774\uBA54\uC77C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 402,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "email",
                  value: Email,
                  onChange: EmailHandler,
                  placeholder: "\uC778\uC99D\uBC88\uD638 \uBC1C\uC1A1\uC744 \uC704\uD55C \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 404,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 401,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "jobseeker-register-wrapper",
                children: [LoadingStatus && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 414,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
                  onClick: JobSeekrSubmitHandler,
                  children: "\uC778\uC99D\uD558\uAE30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 416,
                  columnNumber: 19
                }, this), JobSeekerEmailInput ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
                    children: "\uD68C\uC6D0 \uAC00\uC785\uC744 \uC704\uD55C \uC778\uC99D\uBC88\uD638 \uC785\uB2C8\uB2E4."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 421,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
                    children: "\uC544\uB798 \uC778\uC99D \uBC88\uD638\uB97C \uC785\uB825\uD558\uC5EC \uC778\uC99D\uC744 \uC644\uB8CC\uD574\uC8FC\uC138\uC694."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 422,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                    required: true,
                    type: "text",
                    placeholder: "\uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",
                    value: JobSeekerInputAuthCode,
                    onChange: InputHandler
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 423,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
                    type: "submit",
                    children: "\uD68C\uC6D0\uAC00\uC785"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 430,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 420,
                  columnNumber: 21
                }, this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 412,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 301,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 438,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  } else if (RegisterDisplay === "company") {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 444,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
        className: "company-container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "company-wrapper",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
            onClick: ChangeJobDisplay,
            children: "\uAD6C\uC9C1\uC790 \uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
            className: "hover",
            onClick: ChangeCompanyDisplay,
            children: "\uC0AC\uC5C5\uC790 \uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 446,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
          className: "company-submit-wrapper",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("form", {
            className: "company-form",
            onSubmit: finalCompanySubmitHandler,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "company-title",
              children: "\uC0AC\uC5C5\uC790 \uD68C\uC6D0\uAC00\uC785"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 455,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
              className: "company-submit-form",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC544\uC774\uB514"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 458,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "text",
                  value: Id,
                  onChange: IdHandler,
                  placeholder: "\uC544\uC774\uB514"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 459,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 457,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uBE44\uBC00\uBC88\uD638"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 468,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "password",
                  value: Password,
                  onChange: PasswordHandler,
                  placeholder: "\uBE44\uBC00\uBC88\uD638"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 469,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 467,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 478,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "password",
                  value: ConfirmPassword,
                  onChange: ConfirmPasswordHandler,
                  placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 477,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC0AC\uC5C5\uC790 \uC704\uCE58"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 489,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  type: "text",
                  onClick: onChangeOpenPost,
                  placeholder: "\uD074\uB9AD\uD558\uC154\uC11C \uC0AC\uC5C5\uC790 \uC704\uCE58\uB97C \uAC80\uC0C9\uD574\uC8FC\uC138\uC694",
                  value: addressDetail
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 491,
                  columnNumber: 19
                }, this), isOpenPost ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_daum_postcode__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  style: postCodeStyle,
                  autoClose: true,
                  onComplete: onCompletePost
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 498,
                  columnNumber: 21
                }, this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 488,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC0AC\uC5C5\uC790 \uBC88\uD638"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 507,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "text",
                  value: BusinessNumber,
                  onChange: BusinessNumberHandler,
                  placeholder: "-\uB97C \uC81C\uC678\uD558\uACE0 \uC0AC\uC5C5\uC790\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 509,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 506,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC0AC\uC5C5\uC790\uBA85"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 518,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "text",
                  value: CompanyName,
                  onChange: CompanyNameHandler,
                  placeholder: "\uC0AC\uC5C5\uC790\uBA85"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 520,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 517,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC790\uC0AC \uC0C1\uD488\uC758 \uD575\uC2EC \uC0C1\uD488\uC744 \uC801\uC5B4\uC8FC\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 529,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  style: {
                    color: "rgb(63, 71, 82)",
                    fontWeight: "400"
                  },
                  children: "\uBE44\uBC00\uBC88\uD638 \uC218\uC815\uC744 \uC704\uD574 \uC0AC\uC6A9 \uB429\uB2C8\uB2E4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 530,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "text",
                  value: Question,
                  placeholder: "\uC790\uC0AC \uC0C1\uD488\uC758 \uD575\uC2EC \uC0C1\uD488\uC744 \uC801\uC5B4\uC8FC\uC138\uC694",
                  onChange: QuestionHandler
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 533,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 528,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: "\uC774\uBA54\uC77C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 542,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                  required: true,
                  type: "email",
                  value: CompanyEmail,
                  onChange: CompanyEmailHandler,
                  placeholder: "\uC778\uC99D\uBC88\uD638 \uBC1C\uC1A1\uC744 \uC704\uD55C \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD558\uC138\uC694"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 544,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 541,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                className: "company-register-wrapper",
                children: [LoadingStatus && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_LoadingModal__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 554,
                  columnNumber: 37
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
                  onClick: CompanySubmitHandler,
                  children: "\uC778\uC99D\uD558\uAE30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 557,
                  columnNumber: 19
                }, this), CompanyEmailInput ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
                    children: "\uD68C\uC6D0 \uAC00\uC785\uC744 \uC704\uD55C \uC778\uC99D\uBC88\uD638 \uC785\uB2C8\uB2E4."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 561,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h4", {
                    children: "\uC544\uB798 \uC778\uC99D \uBC88\uD638\uB97C \uC785\uB825\uD558\uC5EC \uC778\uC99D\uC744 \uC644\uB8CC\uD574\uC8FC\uC138\uC694."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 562,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "\uC778\uC99D\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",
                    value: CompanyInputAuthCode,
                    onChange: CompanyInputHandler
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 563,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("button", {
                    type: "submit",
                    children: "\uD68C\uC6D0\uAC00\uC785"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 569,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 560,
                  columnNumber: 21
                }, this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 552,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 456,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 454,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 453,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }
}

_s(RegisterPage, "LD6kESTRwljXH/yJCRtqNnIKcUs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"]];
});

_c = RegisterPage;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(RegisterPage));

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "RegisterPage");
__webpack_require__.$Refresh$.register(_c2, "%default%");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/pages/images/404-page.svg":
/*!***************************************!*\
  !*** ./src/pages/images/404-page.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/404-page.c970a77f.svg");

/***/ }),

/***/ "./src/pages/images/alba.svg":
/*!***********************************!*\
  !*** ./src/pages/images/alba.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/alba.b5781917.svg");

/***/ }),

/***/ "./src/pages/images/bubble-1.svg":
/*!***************************************!*\
  !*** ./src/pages/images/bubble-1.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bubble-1.0464027b.svg");

/***/ }),

/***/ "./src/pages/images/bubble-2.svg":
/*!***************************************!*\
  !*** ./src/pages/images/bubble-2.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/bubble-2.abeb6cbc.svg");

/***/ }),

/***/ "./src/pages/images/feature-01.svg":
/*!*****************************************!*\
  !*** ./src/pages/images/feature-01.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/feature-01.84dfcad6.svg");

/***/ }),

/***/ "./src/pages/images/feature-02.svg":
/*!*****************************************!*\
  !*** ./src/pages/images/feature-02.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/feature-02.9d55d988.svg");

/***/ }),

/***/ "./src/pages/images/feature-03.svg":
/*!*****************************************!*\
  !*** ./src/pages/images/feature-03.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/feature-03.5e93aef5.svg");

/***/ }),

/***/ "./src/pages/images/hta_footer.svg":
/*!*****************************************!*\
  !*** ./src/pages/images/hta_footer.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/hta_footer.f62f5885.svg");

/***/ }),

/***/ "./src/pages/images/layered-waves-haikei.svg":
/*!***************************************************!*\
  !*** ./src/pages/images/layered-waves-haikei.svg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/layered-waves-haikei.558befe7.svg");

/***/ }),

/***/ "./src/pages/images/logo.svg":
/*!***********************************!*\
  !*** ./src/pages/images/logo.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/logo.0bf86a72.svg");

/***/ }),

/***/ "./src/pages/mypage.scss":
/*!*******************************!*\
  !*** ./src/pages/mypage.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./mypage.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/mypage.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./mypage.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/mypage.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./mypage.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/mypage.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/hongminhyeog/code states/HomeTownAlba/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/hongminhyeog/code states/HomeTownAlba/client/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/hongminhyeog/code states/HomeTownAlba/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/hongminhyeog/code states/HomeTownAlba/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map