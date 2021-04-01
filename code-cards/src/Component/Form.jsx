import { useState } from 'react';
import axios from "axios";
import { baseURL, config } from "../services"
import { useHistory } from "react-router-dom";
import "./Form.css"

function Form(props) {
  let [newCard, setNewBook] = useState({
    categories: "",
    word: "",
    definition: "",
    firstresource: "",
    secondresource: "",
    thirdresource: "",
  });
  
  const history = useHistory()

  function handleInput(event) {

    let { id, value } = event.target;
    setNewBook((prevState) => ({ ...prevState, [id]: value }));
}
  async function handleSubmit(event) {
    event.preventDefault()
    
    await axios.post(baseURL, { fields: newCard }, config);
    props.setToggle((prevState)=> !prevState)
    history.push("/")
}
  return (
    <div className="body-color">
      <h2 class="form-title">Submit Your Own Card!</h2>
      <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <p className="p-topic">Topic</p>
        <select className="input-select" id="categories" required onChange={handleInput} value={newCard.categories}>
        <option value = "Types, Values, and Variables" defaultValue>Types, Values, and Variables</option>
        <option value = "Objects">Objects</option>
        <option value="Expressions and Operators">Expressions and Operators</option>
        <option value="Arrays">Arrays </option>
        <option value="Loops">Loops</option>
        <option value="Statements">Statements</option>
        <option value="Functions">Functions</option>
        <option value="React">React</option>
        <option value = "The DOM">The DOM</option>
      </select>
      <label className="label" htmlFor="word">Term </label>
      <input className="input" type="text" id="word" required onChange={handleInput} value={newCard.word} />

      <label className="label"htmlFor="definition">Definition </label>
      <textarea  rows="5" className="input"type="text" id="definition" required onChange={handleInput} value={newCard.definition} />

      <label className="label"htmlFor="firstresource">First Resource </label>
      <input className="input"type="url" id="firstresource"  placeholder="url" required onChange={handleInput} value={newCard.firstresource} />

      <label className="label"htmlFor="secondresource">Second Resource </label>
      <input className="input"type="url" id="secondresource" placeholder="url" required onChange={handleInput} value={newCard.secondresource} />
      <label className="label"htmlFor="thirdresource">Third Resource </label>
      <input className="input"type="url" id="thirdresource" placeholder="url" required onChange={handleInput} value={newCard.thirdresource} />
      <input className="submit" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Form
