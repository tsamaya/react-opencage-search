import React, { useState } from 'react';
import opencage from 'opencage-api-client';

const OpenCageSearch = ({
  apiKey: _apiKey = '6d0e711d72d74daeb2b0bfd2a5cdfdba',
  className,
  disabled,
  error,
  id,
  label,
  name,
  placeholder,
  required,
  searchOnBlur: _searchOnBlur = true,
  searchOnKeyUp: _searchOnKeyUp = false,
  value: _value = ''
}) => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(_value);
  const [results, setResults] = useState([]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSearch = async e => {
    const q = e.target.value;
    if (!q) return;
    if (q === search) return;

    try {
      const apiResults = await opencage.geocode({
        q,
        key: _apiKey
      });
      setSearch(q);
      setResults(apiResults);
    } catch (err) {
      console.error('Error from API', {
        status: err.status.code
      });
    }
  };

  const handleSelect = a => {
    setInput(a);
    setResults([]);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "opencage_geocoder_wrapper"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "opencage_geocoder_label"
  }, label, required ? ' *' : null), /*#__PURE__*/React.createElement("input", {
    id: id,
    name: name,
    type: "text",
    className: className,
    placeholder: placeholder,
    value: input,
    required: required,
    disabled: disabled,
    error: error,
    onBlur: e => {
      e.preventDefault();
      if (_searchOnBlur) handleSearch(e);
    },
    onChange: handleChange,
    onKeyUp: e => {
      e.preventDefault();

      if (_searchOnKeyUp && (e.key === 'Enter' || e.keyCode === 13)) {
        handleSearch(e);
      }
    }
  }), results && results.results && results.results.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "opencage-geocoder-result-list"
  }, results.results.map((res, idx) => /*#__PURE__*/React.createElement("li", {
    key: idx,
    className: "opencage-geocoder-result-element",
    onClick: e => {
      e.preventDefault();
      handleSelect(res.formatted);
    }
  }, res.formatted))));
};

export { OpenCageSearch };
//# sourceMappingURL=index.modern.js.map
