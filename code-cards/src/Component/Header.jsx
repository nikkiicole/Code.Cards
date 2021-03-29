import Button from './Button'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    
    <div>

      {/* /// find a way to on render only display add cards button and when on add cards return home */}
      {/* this will wrap the Logo */}
      <Link to="/">Home</Link>
      {/* <Link to="/flashcard">Flashcard</Link> */}
      <Link to = "/new"><Button color='grey' text='Add Cards' /></Link>
      This is my nav/header
      
    </div>
  )
}

export default Header
