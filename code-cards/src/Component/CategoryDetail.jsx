import Flashcard from "./Flashcard"
import Sidebar from "./Sidebar"
import Resources from "./Resources"
import Word from "./Word"
import Definition from "./Definition"
import { useState } from "react"
import "./CategoryDetail.css"
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function CategoryDetail({ cards }) {
  const [selectedCard, setSelectedCard] = useState(cards[0] ? cards[0] : {})
  
  return (
    <div>
   
     

        
      <Sidebar cards={cards} setSelectedCard={setSelectedCard} />
      {/* <Flashcard card={selectedCard} /> */}
      {/* {cards.map((card) => {
          console.log(card)
          return <Flashcard card={card}
            key={card.id} />; 
        
        })} */}

      <div className="cards-container">
  <Flippy className="flippy-container"
    flipOnHover={false} // default false
    flipOnClick={true} // default false
            flipDirection="vertical" // horizontal or vertical
            
        >

    <FrontSide>
        <Word card={selectedCard} />
    </FrontSide>
          
    <BackSide>
        <Definition card={selectedCard} />
    </BackSide>
  </Flippy>
     </div>

      <Resources card={selectedCard}/>
    
    </div>
  )
}

export default CategoryDetail
