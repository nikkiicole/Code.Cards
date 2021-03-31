import React from 'react'
import "./Flashcard"

function Definition (props) {
  let data = props.card.fields || null;

  return data &&(
    <div className="flashcard">
      <p>{data.definition}</p>
    </div>
  )
}

export default Definition
