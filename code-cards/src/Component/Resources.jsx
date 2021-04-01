import React from 'react'
// import "./Flashcard"

function Resources (props) {
  let data = props.card.fields || null;

  return data &&(
    <div >
        <h3 className="resources-header">Resources:</h3>
      <ul className="resources-container">
      <li><a className="resources" target="_blank" rel="noreferrer" href={data.firstresource}>{data.firstresource}</a></li>
        <li><a className="resources" target="_blank" rel="noreferrer" href={data.secondresource}>{data.secondresource}</a></li>
       <li><a className="resources" target="_blank" rel="noreferrer" href={ data.thirdresource}>{ data.thirdresource}</a></li>
      </ul> 
    </div>
  )
}

export default Resources
