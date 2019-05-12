import React from 'react'
import PropTypes from 'prop-types'
import styles from './Summary.module.scss'

export const Summary = ({ numHotels, sortMethod, setSortMethod }) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.bold}>{numHotels}</span>
        <span className={styles.italics}> hotels in </span>
        <span className={styles.bold}>Sydney</span>
      </div>
      <div>
        {'Sort by '}
        <select value={sortMethod} onChange={e => setSortMethod(e.target.value)}>
          <option disabled value="default" />
          <option value="ascending">Price low-high</option>
          <option value="descending">Price high-low</option>
        </select>
      </div>
    </div>
  )
}

Summary.propTypes = {
  numHotels: PropTypes.number,
  sortMethod: PropTypes.string.isRequired,
  setSortMethod: PropTypes.func.isRequired,
}

Summary.defaultProps = {
  numHotels: 0,
}
