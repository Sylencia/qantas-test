import React from 'react'
import styles from './Information.module.scss'
import { getRatingDisplay } from '../../../Utils/Rating'

export const Information = () => (
  <div className={styles.information}>
    <div className={styles.heading}>
      <span className={styles.name}>Primus Hotel Sydney</span>
      {getRatingDisplay('self', 3.5)}
    </div>
    <span className={styles.address}>123 Test St, Sydney</span>
    <div className={styles.roomContainer}>
      <a href="/" className={styles.room}>
        Deluxe King Room
      </a>
    </div>
    <div className={styles.cancellationContainer}>
      <span className={styles.cancellation}>Free Cancellation</span>
    </div>
  </div>
)
