webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(4);

var _userApi = __webpack_require__(5);

//populate table of users via API call.
(0, _userApi.getUsers)().then(function (result) {
  var usersBody = "";
  result.forEach(function (user) {
    usersBody += '<tr>\n                <td><a href="#" data-id="' + user.id + '" class="deleteUser">Delete</a></td>\n                <td>' + user.id + '</td>\n                <td>' + user.firstName + '</td>\n                <td>' + user.lastName + '</td>\n                <td>' + user.email + '</td>\n                </tr>';
  });
  global.document.getElementById('users').innerHTML = usersBody;

  var deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, function (link) {
    link.onclick = function (event) {
      var element = event.target;
      event.preventDefault();
      (0, _userApi.deleteUser)(element.attributes["data-id"].value);
      var row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUsers = getUsers;
exports.deleteUser = deleteUser;

__webpack_require__(0);

var _baseUrl = __webpack_require__(6);

var _baseUrl2 = _interopRequireDefault(_baseUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = (0, _baseUrl2.default)();

function getUsers() {
  return get('users');
}

function deleteUser(id) {
  return del('users/' + id);
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  var request = new Request(baseUrl + url, {
    method: 'DELETE'
  });
  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getBaseUrl;
function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://pacific-headland-18446.herokuapp.com/';
}

function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/***/ })
],[2]);
//# sourceMappingURL=main.3b8c452a1274788ba1e6.js.map