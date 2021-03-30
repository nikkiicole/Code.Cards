import React from 'react'
import "./Categories.css"

function Sidebar(props) {
  return (
  
    <div className="sidebar">
      {props.cards.map(card => {
        const data = card.fields;
        return <div>
          <button className="sidebar-buttons" onClick={() => props.setSelectedCard(card)}>{data.word}</button>
          </div>
      })}
      </div>
  )
}

export default Sidebar
