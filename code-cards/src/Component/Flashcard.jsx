

function Flashcard(props) {

  let data = props.card.fields || null;
  console.log(data)

  return data && (
    <div>
      
      <ul>
        <li>
        {data.categories}
        </li>
      </ul>
      
      <h2>{data.word}</h2>
      <p>{ data.definition}</p>
        <h3>Resources:</h3>
      <ul>
        <li>{data.firstresource}</li>
        <li>{data.secondresource}</li>
        <li>{ data.thirdresource}</li>
      </ul>
      </div>
   
  )
}

export default Flashcard
