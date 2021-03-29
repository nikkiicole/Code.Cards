import {Link} from 'react-router-dom'

function Categories() {
  //pass in props 
  //console.log to check state of props
  
  
  return (
    <div>

      <ul>
        <li><Link to="/arrays">Arrays</Link></li>
        <li><Link to="/objects">Objects</Link></li>
        <li><Link to="/functions">Functions</Link></li>
        <li><Link to="/statements">Statements</Link></li>
        <li><Link to="/expressions">Expressions and Operators</Link></li>
        <li><Link to="/loops">Loops</Link></li>
        <li><Link to="/dom">The DOM</Link></li>
        <li><Link to="/react">React</Link></li>
        <li><Link to="/types">Types, Values, and Variables</Link></li>
      </ul>
    </div>
  )
}

export default Categories
