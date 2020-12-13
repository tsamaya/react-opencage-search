import React from 'react';
import opencage from 'opencage-api-client';

var styles = {"wrapper":"_styles-module__wrapper__1I_qj"};

const OpenCageSearch = ({
  apiKey: _apiKey = '6d0e711d72d74daeb2b0bfd2a5cdfdba',
  disabled,
  error,
  name,
  id,
  placeholder,
  required,
  value,
  searchOnBlur: _searchOnBlur = true,
  searchOnKeyUp: _searchOnKeyUp = false
}) => {
  const handleOnBlur = async e => {
    console.log(e);
    const q = e.target.value;
    if (!q) return;

    try {
      const results = await opencage.geocode({
        q,
        key: _apiKey
      });
      console.log(results);
    } catch (error) {
      console.error('error from API', {
        status: error.status.code
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: styles.wrapper
  }, /*#__PURE__*/React.createElement("input", {
    id: id,
    name: name,
    placeholder: placeholder,
    value: value,
    required: required,
    disabled: disabled,
    error: error,
    onBlur: e => {
      if (_searchOnBlur) handleOnBlur(e);
    },
    onKeyUp: e => {
      if (_searchOnKeyUp && (e.key === 'Enter' || e.keyCode === 13)) {
        handleOnBlur(e);
      }
    }
  }));
};

export { OpenCageSearch };
//# sourceMappingURL=index.modern.js.map
