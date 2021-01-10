import React from 'react';
import opencage from 'opencage-api-client';

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var OpenCageSearch = function OpenCageSearch(_ref) {
  var _ref$apiKey = _ref.apiKey,
      apiKey = _ref$apiKey === void 0 ? '6d0e711d72d74daeb2b0bfd2a5cdfdba' : _ref$apiKey,
      disabled = _ref.disabled,
      error = _ref.error,
      name = _ref.name,
      id = _ref.id,
      placeholder = _ref.placeholder,
      required = _ref.required,
      value = _ref.value,
      label = _ref.label,
      _ref$searchOnBlur = _ref.searchOnBlur,
      searchOnBlur = _ref$searchOnBlur === void 0 ? true : _ref$searchOnBlur,
      _ref$searchOnKeyUp = _ref.searchOnKeyUp,
      searchOnKeyUp = _ref$searchOnKeyUp === void 0 ? false : _ref$searchOnKeyUp,
      className = _ref.className;

  var handleSearch = function handleSearch(e) {
    try {
      var q = e.target.value;
      if (!q) return Promise.resolve();

      var _temp2 = _catch(function () {
        return Promise.resolve(opencage.geocode({
          q: q,
          key: apiKey
        })).then(function (results) {
          console.log(results);
        });
      }, function (err) {
        console.error('error from API', {
          status: err.status.code
        });
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    "class": "opencage_geocoder_wrapper"
  }, label && /*#__PURE__*/React.createElement("label", {
    "class": "opencage_geocoder_label"
  }, label), /*#__PURE__*/React.createElement("input", {
    id: id,
    name: name,
    type: "text",
    className: className,
    placeholder: placeholder,
    value: value,
    required: required,
    disabled: disabled,
    error: error,
    onBlur: function onBlur(e) {
      if (searchOnBlur) handleSearch(e);
    },
    onKeyUp: function onKeyUp(e) {
      if (searchOnKeyUp && (e.key === 'Enter' || e.keyCode === 13)) {
        handleSearch(e);
      }
    }
  }));
};

export { OpenCageSearch };
//# sourceMappingURL=index.modern.js.map
