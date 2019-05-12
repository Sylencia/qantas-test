import React from 'react'
import PropTypes from 'prop-types'
import styles from './Hotel.module.scss'

import { Information } from './Information'
import { Price } from './Price'

export const Hotel = ({ data }) => {
  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={data.imageData.url} alt={data.imageData.caption} />
        {data.offerType && <div className={styles.promotion}>{data.offerType}</div>}
      </div>
      <div className={styles.description}>
        <Information data={data} />
        <Price data={data} />
      </div>
    </div>
  )
}

Hotel.propTypes = {
  data: PropTypes.shape().isRequired,
}
