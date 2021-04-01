import { useState } from "react"
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import Topbar from "./Topbar"
import Resources from "./Resources"
import Word from "./Word"
import Definition from "./Definition"
import "./CategoryDetail.css"

function CategoryDetail({ cards }) {
  const [selectedCard, setSelectedCard] = useState(cards[0] ? cards[0] : {})
  
  return (
<div>

  <div className="topbar-container">
    <Topbar cards={cards} setSelectedCard={setSelectedCard} />
      </div>
      
  <div className="margin-control">
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
      </div>
  <div className="resources-container">
    <Resources card={selectedCard}/>
  </div> 
</div>
  )
}

export default CategoryDetail
