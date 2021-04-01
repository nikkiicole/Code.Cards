import React from 'react'

function Definition (props) {
  let data = props.card.fields || null;

  return data &&(
    <div className="flashcard">
      <p className="definition">{data.definition}</p>
    </div>
  )
}

export default Definition
