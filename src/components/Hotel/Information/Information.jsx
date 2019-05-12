import React from 'react'
import styles from './Information.module.scss'
import { getRatingDisplay } from '../../../Utils/Rating'

export const Information = () => (
  <div className={styles.information}>
    <div className={styles.heading}>
      <div className={styles.name}>Primus Hotel Sydney</div>
      {getRatingDisplay('self', 3.5)}
    </div>
    <div className={styles.address}>123 Test St, Sydney</div>
  </div>
)
