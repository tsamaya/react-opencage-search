function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var opencage = _interopDefault(require('opencage-api-client'));

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
      className = _ref.className,
      disabled = _ref.disabled,
      error = _ref.error,
      id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      placeholder = _ref.placeholder,
      required = _ref.required,
      _ref$searchOnBlur = _ref.searchOnBlur,
      searchOnBlur = _ref$searchOnBlur === void 0 ? true : _ref$searchOnBlur,
      _ref$searchOnKeyUp = _ref.searchOnKeyUp,
      searchOnKeyUp = _ref$searchOnKeyUp === void 0 ? false : _ref$searchOnKeyUp,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;

  var _useState = React.useState(''),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = React.useState(value),
      input = _useState2[0],
      setInput = _useState2[1];

  var _useState3 = React.useState([]),
      results = _useState3[0],
      setResults = _useState3[1];

  var handleChange = function handleChange(e) {
    setInput(e.target.value);
  };

  var handleSearch = function handleSearch(e) {
    try {
      var q = e.target.value;
      if (!q) return Promise.resolve();
      if (q === search) return Promise.resolve();

      var _temp2 = _catch(function () {
        return Promise.resolve(opencage.geocode({
          q: q,
          key: apiKey
        })).then(function (apiResults) {
          setSearch(q);
          setResults(apiResults);
        });
      }, function (err) {
        console.error('Error from API', {
          status: err.status.code
        });
      });

      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var handleSelect = function handleSelect(a) {
    setInput(a);
    setResults([]);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: "opencage_geocoder_wrapper"
  }, label && /*#__PURE__*/React__default.createElement("label", {
    className: "opencage_geocoder_label"
  }, label, required ? ' *' : null), /*#__PURE__*/React__default.createElement("input", {
    id: id,
    name: name,
    type: "text",
    className: className,
    placeholder: placeholder,
    value: input,
    required: required,
    disabled: disabled,
    error: error,
    onBlur: function onBlur(e) {
      e.preventDefault();
      if (searchOnBlur) handleSearch(e);
    },
    onChange: handleChange,
    onKeyUp: function onKeyUp(e) {
      e.preventDefault();

      if (searchOnKeyUp && (e.key === 'Enter' || e.keyCode === 13)) {
        handleSearch(e);
      }
    }
  }), results && results.results && results.results.length > 0 && /*#__PURE__*/React__default.createElement("ul", {
    className: "opencage-geocoder-result-list"
  }, results.results.map(function (res, idx) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: idx,
      className: "opencage-geocoder-result-element",
      onClick: function onClick(e) {
        e.preventDefault();
        handleSelect(res.formatted);
      }
    }, res.formatted);
  })));
};

exports.OpenCageSearch = OpenCageSearch;
//# sourceMappingURL=index.js.map
