import React from 'react'
import styles from './styles.module.css'

export const OpenCageSearch = ({ text }) => {
  return (
    <div className={styles.wrapper}>
      OpenCage Data Geocoder Component: {text}
    </div>
  )
}
