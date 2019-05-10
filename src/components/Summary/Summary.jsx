import React from 'react'
import styles from './Summary.module.scss'

export const Summary = () => {
  return (
    <div className={styles.container}>
      <div>5 hotels in Sydney</div>
      <div>Sort by filter</div>
    </div>
  )
}
