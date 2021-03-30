import "./CategoryDetail.css"

function Flashcard(props) {

  let data = props.card.fields || null;
  console.log(data)

  return data && (
    <div className="flashcard">
      
      {/* <ul>
        <li>
        {data.categories}
        </li>
      </ul> */}
      
      <h2>{data.word}</h2>
      <p>{data.definition}</p>
      
        <h3>Resources:</h3>
      <div>
        <p>{data.firstresource}</p>
        <p>{data.secondresource}</p>
        <p>{ data.thirdresource}</p>
      </div>
      </div>
   
  )
}

export default Flashcard
