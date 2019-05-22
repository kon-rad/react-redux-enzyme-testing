import React from 'react';

export default ({ note: { text }}) => {
  return (
    <div className="note">
      <p>{text}</p>
    </div>
  )
}