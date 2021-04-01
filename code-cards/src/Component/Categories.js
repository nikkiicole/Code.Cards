import { Link } from 'react-router-dom'
import "./Categories.css"

function Categories() {

  return (
  <div className="div-container">
    <Link className="cat-links" to="/arrays" ><div className="category">Arrays</div></Link>
    <Link className="cat-links" to="/objects"><div className="category">Objects</div></Link>
    <Link className="cat-links" to="/functions"><div className="category">Functions</div></Link>
    <Link className="cat-links" to="/statements"><div className="category">Statements</div></Link>
    <Link className="cat-links" to="/expressions"><div className="category">Expressions and Operators</div></Link>
    <Link className="cat-links" to="/loops"><div className="category">Loops</div></Link>
    <Link className="cat-links" to="/dom"><div className="category">The DOM</div></Link>
    <Link className="cat-links" to="/react"><div className="category">React</div></Link>
    <Link className="cat-links" to="/types"><div className="category">Types, Values, and Variables</div></Link>
  </div>
  )
}

export default Categories
