import React from 'react'
import cx from 'classnames'
import shortid from 'shortid'
import styles from './Rating.module.scss'

// ASSUMPTION: Rating will never be >5
export const getRatingDisplay = (type, rating) => {
  const MAX_RATING = 5

  const symbol = type === 'star' ? '★' : '●'
  const numFullRating = Math.floor(rating)
  // We add empty stars from the point after each full star and half star has
  // been created
  const emptyRatingIdx = Math.ceil(rating)
  const ratingDisplay = []
  for (let i = 0; i < MAX_RATING; ++i) {
    ratingDisplay.push(
      <span
        key={shortid.generate()}
        className={cx({
          [styles.star]: type === 'star',
          [styles.circle]: type === 'self',
          [styles.full]: i < numFullRating,
          // If there is a gap between full stars and empty stars, it must
          // be filled with a half star
          [styles.half]: i === numFullRating && i < emptyRatingIdx,
        })}
      >
        {symbol}
      </span>
    )
  }

  return <div>{ratingDisplay}</div>
}
