import { Link } from 'react-router-dom'
import "./Categories.css"


function Categories() {
  //pass in props 
  //console.log to check state of props
  
  
  return (
    <div className="div-container">

  
      <div className="category"><Link className="cat-links" to="/arrays" >Arrays</Link></div>
      
        <div className="category"><Link className="cat-links" to="/objects">Objects</Link></div>
        <div className="category"><Link className="cat-links" to="/functions">Functions</Link></div>
        <div className="category"><Link className="cat-links" to="/statements">Statements</Link></div>
        <div className="category"><Link className="cat-links" to="/expressions">Expressions and Operators</Link></div>
        <div className="category"><Link className="cat-links" to="/loops">Loops</Link></div>
        <div className="category"><Link className="cat-links" to="/dom">The DOM</Link></div>
        <div className="category"><Link className="cat-links" to="/react">React</Link></div>
        <div className="category"><Link className="cat-links" to="/types">Types, Values, and Variables</Link></div>
  
    </div>
  )
}





export default Categories
