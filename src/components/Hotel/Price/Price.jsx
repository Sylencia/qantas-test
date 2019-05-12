import React from 'react'
import PropTypes from 'prop-types'
import styles from './Price.module.scss'

export const Price = ({ data }) => (
  <div className={styles.container}>
    <div className={styles.total}>
      <span className={styles.nights}>1</span> night total ({data.currency})
    </div>
    <div className={styles.price}>
      <span className={styles.currency}>$</span>
      {data.price}
    </div>
    <div className={styles.savings}>{data.savings && `Save $${data.savings}~`}</div>
  </div>
)

Price.propTypes = {
  data: PropTypes.shape().isRequired,
}
