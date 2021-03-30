import React from 'react'

function Sidebar(props) {
  return (
  
    <ul>
      {props.cards.map(card => {
        const data = card.fields;
        return <li onClick={()=>props.setSelectedCard(card)}>{data.word}</li>
      })}
      </ul>
  )
}

export default Sidebar
