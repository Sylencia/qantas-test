import React from 'react'
import styles from './Price.module.scss'

export const Price = () => (
  <div className={styles.container}>
    <div className={styles.total}>
      <span className={styles.nights}>1</span> night total (AUD)
    </div>
    <div className={styles.price}>
      <span className={styles.currency}>$</span>329
    </div>
    <div className={styles.savings}>Save $30~</div>
  </div>
)
