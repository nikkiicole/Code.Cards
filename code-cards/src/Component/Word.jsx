import React from 'react'

function Word (props){
  let data = props.card.fields || null;
  return data &&(
    <div className="flashcard">
      <h2>{data.word}</h2>
    </div>
  )
}

export default Word
