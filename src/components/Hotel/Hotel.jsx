import React from 'react'
import styles from './Hotel.module.scss'

import { Information } from './Information'
import { Price } from './Price'

export const Hotel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="https://unsplash.it/145/125/?random" alt="Hotel" />
        <div className={styles.promotion}>Exclusive Deal</div>
      </div>
      <div className={styles.description}>
        <div className={styles.information}>Primus Hotel Sydney</div>
        <Price />
      </div>
    </div>
  )
}
