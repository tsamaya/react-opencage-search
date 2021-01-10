import React from 'react';
import opencage from 'opencage-api-client';

const OpenCageSearch = ({
  apiKey: _apiKey = '6d0e711d72d74daeb2b0bfd2a5cdfdba',
  disabled,
  error,
  name,
  id,
  placeholder,
  required,
  value,
  label,
  searchOnBlur: _searchOnBlur = true,
  searchOnKeyUp: _searchOnKeyUp = false,
  className
}) => {
  const handleSearch = async e => {
    const q = e.target.value;
    if (!q) return;

    try {
      const results = await opencage.geocode({
        q,
        key: _apiKey
      });
      console.log(results);
    } catch (err) {
      console.error('error from API', {
        status: err.status.code
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    class: "opencage_geocoder_wrapper"
  }, label && /*#__PURE__*/React.createElement("label", {
    class: "opencage_geocoder_label"
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
    onBlur: e => {
      if (_searchOnBlur) handleSearch(e);
    },
    onKeyUp: e => {
      if (_searchOnKeyUp && (e.key === 'Enter' || e.keyCode === 13)) {
        handleSearch(e);
      }
    }
  }));
};

export { OpenCageSearch };
//# sourceMappingURL=index.modern.js.map
