import React from 'react'

function Article({title, date, preview, minutes}) {
  return (
    <>
        <h3>Title: {title}</h3>
        <small>Date: {date || 'January 1, 1970'}</small>
        <p>Read: {preview}</p>
        <p>{`${minutes} minutes`}</p>
    </>
  )
}

export default Article