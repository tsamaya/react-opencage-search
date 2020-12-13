// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from './styles.module.css'
import opencage from 'opencage-api-client'

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
  searchOnKeyUp = false
}) => {
  const handleOnBlur = async (e) => {
    console.log(e)
    const q = e.target.value
    if (!q) return
    try {
      const results = await opencage.geocode({ q, key: apiKey })
      console.log(results)
    } catch (error) {
      console.error('error from API', { status: error.status.code })
    }
  }
  return (
    <div className={styles.wrapper}>
      {label && <label>{label}</label>}
      <input
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        disabled={disabled}
        error={error}
        onBlur={(e) => {
          if (searchOnBlur) handleOnBlur(e)
        }}
        onKeyUp={(e) => {
          if (searchOnKeyUp && (e.key === 'Enter' || e.keyCode === 13)) {
            handleOnBlur(e)
          }
        }}
      />
    </div>
  )
}
