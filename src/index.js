// eslint-disable-next-line no-unused-vars
import React from 'react';
import opencage from 'opencage-api-client';
// import styles from './styles.module.css';

// eslint-disable-next-line import/prefer-default-export
export const OpenCageSearch = ({
  // this is a test API key which always returns "Friedrich-Ebert-Stra\u00dfe 7, 48153 M\u00fcnster, Germany",
  apiKey = '6d0e711d72d74daeb2b0bfd2a5cdfdba',
  disabled,
  error,
  name,
  id,
  placeholder,
  required,
  value,
  label,
  searchOnBlur = true,
  searchOnKeyUp = false,
  className,
}) => {
  const handleSearch = async (e) => {
    // console.log(e)
    const q = e.target.value;
    if (!q) return;
    try {
      const results = await opencage.geocode({ q, key: apiKey });
      console.log(results);
    } catch (err) {
      console.error('error from API', { status: err.status.code });
    }
  };
  return (
    <div class="opencage_geocoder_wrapper">
      {label && <label class="opencage_geocoder_label">{label}</label>}
      <input
        id={id}
        name={name}
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        error={error}
        onBlur={(e) => {
          if (searchOnBlur) handleSearch(e);
        }}
        onKeyUp={(e) => {
          if (searchOnKeyUp && (e.key === 'Enter' || e.keyCode === 13)) {
            handleSearch(e);
          }
        }}
      />
    </div>
  );
};
