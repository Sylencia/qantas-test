import React from 'react'
import PropTypes from 'prop-types'
import styles from './Summary.module.scss'

export const Summary = ({ numHotels }) => {
  return (
    <div className={styles.container}>
      <div>{numHotels} hotels in Sydney</div>
      <div>Sort by filter</div>
    </div>
  )
}

Summary.propTypes = {
  numHotels: PropTypes.number,
}

Summary.defaultProps = {
  numHotels: 0,
}
