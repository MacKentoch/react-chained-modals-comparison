webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),u=r(o),a=n(153),l=r(a),i=n(154),c=r(i);n(483),l["default"].render(u["default"].createElement(c["default"],null),root)},154:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(155),s=n(212),p=n(218),d=n(232),E=r(d),h=n(233),y=r(h),_=n(476),m=r(_),b=n(477),O=r(b),v=n(478),S=n(480),g=r(S),C=n(481),D=r(C),P=(0,p.createStore)(g["default"],(0,p.applyMiddleware)(E["default"]));f.hashHistory.listen(function(e){return P.dispatch((0,v.routeChanged)(e))});var R=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props.children;return c["default"].createElement("div",null,c["default"].createElement(O["default"],null),e)}}]),t}(i.Component),w=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){return c["default"].createElement(s.Provider,{store:P},c["default"].createElement(f.Router,{history:f.hashHistory},c["default"].createElement(f.Route,{component:R},c["default"].createElement(f.Route,{path:"/",component:D["default"]},c["default"].createElement(f.Route,{path:"/name",component:y["default"]}),c["default"].createElement(f.Route,{path:"/phone",component:m["default"]}),c["default"].createElement(f.IndexRedirect,{to:"/name"})),c["default"].createElement(f.Route,{path:"/done"}))))}}]),t}(i.Component);t["default"]=w},233:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),p=n(234),d=function(e){function t(e){u(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e)),r=e.formData.name;return n.state={name:r||""},n._handleInputChange=n._handleInputChange.bind(n),n._handleClickNext=n._handleClickNext.bind(n),n}return l(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.step,r=t.requestStatus,u=t.errorMsg,a=o(t,["step","requestStatus","errorMsg"]),l=this.state.name;return s["default"].createElement(p.Modal,a,s["default"].createElement(p.Modal.Header,{closeButton:!0},s["default"].createElement(p.Modal.Title,null,"Step ",n," - Name")),s["default"].createElement(p.Modal.Body,null,"REQUESTING"===r&&s["default"].createElement("p",null,s["default"].createElement("em",null,"Making fake ajax request...")),u&&s["default"].createElement("p",null,s["default"].createElement("em",null,u)),s["default"].createElement(p.Input,i({label:"Enter your name",type:"text",bsSize:"large"},"FAILED"===r?{bsStyle:"error"}:{},{value:l,onChange:this._handleInputChange,ref:function(t){return e._input=t}}))),s["default"].createElement(p.Modal.Footer,null,s["default"].createElement(p.Button,{bsStyle:"primary",onClick:this._handleClickNext},"Next")))}},{key:"componentWillReceiveProps",value:function(e){var t=e.requestStatus,n=e.gotoNext;"SUCCEEDED"===t&&n()}},{key:"_handleInputChange",value:function(){this.setState({name:this._input.getValue()})}},{key:"_handleClickNext",value:function(){var e=this.props.storeName,t=this._input.getValue();e(t)}}]),t}(f.Component);t["default"]=d},476:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),p=n(234),d=function(e){function t(e){u(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e)),r=e.formData.phone;return n.state={phone:r||""},n._handleInputChange=n._handleInputChange.bind(n),n._handleClickNext=n._handleClickNext.bind(n),n}return l(t,e),c(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.step,r=t.requestStatus,u=t.errorMsg,a=o(t,["step","requestStatus","errorMsg"]),l=this.state.phone;return s["default"].createElement(p.Modal,a,s["default"].createElement(p.Modal.Header,{closeButton:!0},s["default"].createElement(p.Modal.Title,null,"Step ",n," - Phone Number")),s["default"].createElement(p.Modal.Body,null,"REQUESTING"===r&&s["default"].createElement("p",null,s["default"].createElement("em",null,"Making fake ajax request...")),u&&s["default"].createElement("p",null,s["default"].createElement("em",null,u)),s["default"].createElement(p.Input,i({label:"Enter your phone number",type:"text",bsSize:"large"},"FAILED"===r?{bsStyle:"error"}:{},{value:l,onChange:this._handleInputChange,ref:function(t){return e._input=t}}))),s["default"].createElement(p.Modal.Footer,null,s["default"].createElement(p.Button,{bsStyle:"primary",onClick:this._handleClickNext},"Next")))}},{key:"componentWillReceiveProps",value:function(e){var t=e.requestStatus,n=e.gotoNext;"SUCCEEDED"===t&&n()}},{key:"_handleInputChange",value:function(){this.setState({phone:this._input.getValue()})}},{key:"_handleClickNext",value:function(){var e=this.props.storePhone,t=this._input.getValue();e(t)}}]),t}(f.Component);t["default"]=d},477:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),c=r(i),f=n(234),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=Array(500).fill().map(function(){return"Background text here."}).join(" ");return c["default"].createElement(f.Grid,null,c["default"].createElement(f.Row,null,c["default"].createElement(f.Col,{md:12},c["default"].createElement("p",null,e))))}}]),t}(i.Component);t["default"]=s},478:function(e,t,n){"use strict";function r(){return{type:_}}function o(e){return{type:m,name:e}}function u(e){return{type:b,errorMsg:e}}function a(){return{type:O}}function l(e){return{type:v,phone:e}}function i(e){return{type:S,errorMsg:e}}function c(e){return{type:y,location:e}}function f(){return function(e,t){var n=t(),r=n.currIndex,o=n.modalList,u=o[r+1];E.hashHistory.push(u)}}function s(){return function(){E.hashHistory.push("/done")}}function p(e){return function(t){return t(r()),(0,h.request)("/api/name",e).then(function(){t(o(e))})["catch"](function(e){t(u(e))})}}function d(e){return function(t){return t(a()),(0,h.request)("/api/phone",e).then(function(){t(l(e))})["catch"](function(e){t(i(e))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.STORE_PHONE_FAILED=t.STORE_PHONE_SUCCEEDED=t.STORE_PHONE_REQUESTED=t.STORE_NAME_FAILED=t.STORE_NAME_SUCCEEDED=t.STORE_NAME_REQUESTED=t.ROUTE_CHANGED=void 0,t.routeChanged=c,t.gotoNext=f,t.gotoDone=s,t.storeName=p,t.storePhone=d;var E=n(155),h=n(479),y=t.ROUTE_CHANGED="ROUTE_CHANGED",_=t.STORE_NAME_REQUESTED="STORE_NAME_REQUESTED",m=t.STORE_NAME_SUCCEEDED="STORE_NAME_SUCCEEDED",b=t.STORE_NAME_FAILED="STORE_NAME_FAILED",O=t.STORE_PHONE_REQUESTED="STORE_PHONE_REQUESTED",v=t.STORE_PHONE_SUCCEEDED="STORE_PHONE_SUCCEEDED",S=t.STORE_PHONE_FAILED="STORE_PHONE_FAILED"},479:function(e,t){"use strict";function n(e,t){return new Promise(function(n,r){setTimeout(function(){switch(e){case"/api/name":t.split(/\s+/).length>=2?n():r("Specify first and last name.");break;case"/api/phone":n();break;default:r("Invalid URL passed to simulated api.")}},1e3)})}Object.defineProperty(t,"__esModule",{value:!0}),t.request=n},480:function(e,t,n){"use strict";function r(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];return a({},o(e,t),{formData:u(e.formData,t)})}function o(e,t){switch(t.type){case l.ROUTE_CHANGED:var n=t.location.pathname,r=e.modalList.findIndex(function(e){return e===n});return a({},e,{requestStatus:null,currIndex:r});case l.STORE_NAME_REQUESTED:case l.STORE_PHONE_REQUESTED:return a({},e,{requestStatus:"REQUESTING",errorMsg:null});case l.STORE_NAME_SUCCEEDED:case l.STORE_PHONE_SUCCEEDED:return a({},e,{requestStatus:"SUCCEEDED",errorMsg:null});case l.STORE_NAME_FAILED:case l.STORE_PHONE_FAILED:return a({},e,{requestStatus:"FAILED",errorMsg:t.errorMsg});default:return e}}function u(e,t){switch(t.type){case l.STORE_NAME_SUCCEEDED:return a({},e,{name:t.name});case l.STORE_PHONE_SUCCEEDED:return a({},e,{phone:t.phone});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(478),i={modalList:["/name","/phone","/done"],currIndex:null,errorMsg:null,requestStatus:null,formData:{name:"Backend",phone:null}};t["default"]=r},481:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),s=r(f),p=n(212),d=n(478),E=n(482),h=r(E),y=function(e){function t(){return u(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.currIndex,r=e.gotoDone,u=o(e,["children","currIndex","gotoDone"]),a=t&&s["default"].cloneElement(t,i({step:n+1,backdrop:!1,show:!0,onHide:r},u));return s["default"].createElement("div",null,s["default"].createElement(h["default"],null),a)}}]),t}(f.Component);t["default"]=(0,p.connect)(function(e){var t=e.currIndex,n=e.modalList,r=e.requestStatus,o=e.errorMsg,u=e.formData;return{currIndex:t,modalList:n,requestStatus:r,errorMsg:o,formData:u}},function(e){return{gotoNext:function(){return e(d.gotoNext.apply(void 0,arguments))},gotoDone:function(){return e(d.gotoDone.apply(void 0,arguments))},storeName:function(){return e(d.storeName.apply(void 0,arguments))},storePhone:function(){return e(d.storePhone.apply(void 0,arguments))}}})(y)},482:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return a["default"].createElement("div",{className:"modal-backdrop in"})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(1),a=r(u)},483:function(e,t){}});
//# sourceMappingURL=app.646fe4ff40b38ad6d0c4.js.map?