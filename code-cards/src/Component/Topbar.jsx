import "./CategoryDetail.css"

function Topbar(props) {
  return (
    <div className="topbar">
      {props.cards.map(card => {
        const data = card.fields;
        return <div key={card.id}>
            <button className="topbar-buttons" onClick={() => props.setSelectedCard(card)}>{data.word}</button>
          </div>
      })}
    </div>
  )
}

export default Topbar
