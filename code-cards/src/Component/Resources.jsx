import React from 'react'
// import "./Flashcard"

function Resources (props) {
  let data = props.card.fields || null;

  return data &&(
    <div>
        <h3 className="resources">Resources:</h3>
      <div>
        <p className="resources">{data.firstresource}</p>
        <p className="resources">{data.secondresource}</p>
        <p className="resources">{ data.thirdresource}</p>
      </div> 
    </div>
  )
}

export default Resources
