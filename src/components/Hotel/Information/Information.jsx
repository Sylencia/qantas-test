import React from 'react'
import PropTypes from 'prop-types'
import styles from './Information.module.scss'
import { getRatingDisplay } from '../../../Utils/Rating'

export const Information = ({ data }) => (
  <div className={styles.information}>
    <div className={styles.heading}>
      <span className={styles.name}>{data.title}</span>
      {getRatingDisplay(data.ratingData.ratingType, data.ratingData.ratingValue)}
    </div>
    <span className={styles.address}>{data.address}</span>
    <div className={styles.roomContainer}>
      {data.offerRoom && (
        <a href="/" className={styles.room}>
          {data.offerRoom}
        </a>
      )}
    </div>
    <div className={styles.cancellationContainer}>
      {data.cancellationType === 'FREE_CANCELLATION' && (
        <span className={styles.cancellation}>Free Cancellation</span>
      )}
    </div>
  </div>
)

Information.propTypes = {
  data: PropTypes.shape().isRequired,
}
