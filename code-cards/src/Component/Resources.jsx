import React from 'react'

function Resources (props) {
  let data = props.card.fields || null;

  return data &&(
    <div >
        <h3 className="resources-header">Resources:</h3>
      <ul className="resources-container">
      <li className="resources-m"><a className="resources" target="_blank" rel="noreferrer" href={data.firstresource}>{data.firstresource}</a></li>
        <li className="resources-m"><a className="resources" target="_blank" rel="noreferrer" href={data.secondresource}>{data.secondresource}</a></li>
       <li className="resources-m"><a className="resources" target="_blank" rel="noreferrer" href={ data.thirdresource}>{ data.thirdresource}</a></li>
      </ul> 
    </div>
  )
}

export default Resources
