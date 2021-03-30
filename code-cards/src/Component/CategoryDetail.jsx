import Flashcard from "./Flashcard"
import Sidebar from "./Sidebar"
import {useState} from "react"

function CategoryDetail({ cards }) {
  const [selectedCard, setSelectedCard] = useState(cards[0] ? cards[0] : {})
  
  return (
    <div>
      <Sidebar cards={cards} setSelectedCard={setSelectedCard} />
      <Flashcard card={selectedCard} />
      {/* {cards.map((card) => {
          console.log(card)
          return <Flashcard card={card}
            key={card.id} />; 
        
        })} */}
    </div>
  )
}

export default CategoryDetail
