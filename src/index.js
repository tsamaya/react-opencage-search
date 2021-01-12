// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import opencage from 'opencage-api-client';
// import styles from './styles.module.css';

// eslint-disable-next-line import/prefer-default-export
export const OpenCageSearch = ({
  // this is a test API key which always returns "Friedrich-Ebert-Stra\u00dfe 7, 48153 M\u00fcnster, Germany",
  apiKey = '6d0e711d72d74daeb2b0bfd2a5cdfdba',
  className,
  disabled,
  error,
  id,
  label,
  name,
  placeholder,
  required,
  searchOnBlur = true,
  searchOnKeyUp = false,
  value = '',
}) => {
  const [search, setSearch] = useState('');
  const [input, setInput] = useState(value);
  const [results, setResults] = useState([]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = async (e) => {
    // console.log(e)
    const q = e.target.value;
    if (!q) return;
    if (q === search) return;
    try {
      const apiResults = await opencage.geocode({ q, key: apiKey });
      setSearch(q);
      setResults(apiResults);
      // console.log(results);
    } catch (err) {
      console.error('Error from API', { status: err.status.code });
    }
  };
  const handleSelect = (a) => {
    setInput(a);
    setResults([]);
  };
  return (
    <div className="opencage_geocoder_wrapper">
      {label && (
        <label className="opencage_geocoder_label">
          {label}
          {required ? ' *' : null}
        </label>
      )}
      <input
        id={id}
        name={name}
        type="text"
        className={className}
        placeholder={placeholder}
        value={input}
        required={required}
        disabled={disabled}
        error={error}
        onBlur={(e) => {
          e.preventDefault();
          if (searchOnBlur) handleSearch(e);
        }}
        onChange={handleChange}
        onKeyUp={(e) => {
          e.preventDefault();
          if (searchOnKeyUp && (e.key === 'Enter' || e.keyCode === 13)) {
            handleSearch(e);
          }
        }}
      />
      {results && results.results && results.results.length > 0 && (
        <ul className="opencage-geocoder-result-list">
          {results.results.map((res, idx) => (
            <li
              key={idx}
              className="opencage-geocoder-result-element"
              onClick={(e) => {
                e.preventDefault();
                handleSelect(res.formatted);
              }}
            >
              {res.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
