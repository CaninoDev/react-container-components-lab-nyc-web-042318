// Code MovieReviews Here
import React from 'react'

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (
    <div className='review' key={headline}>
      <p>{headline}</p>
      <a href={link.url}>{headline}</a>
      <p>{byline}</p>
      <p>Summary: {summary_short}</p>
    </div>
  )
}

const MovieReviews = ({reviews}) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
  reviews: []
}
export default MovieReviews
