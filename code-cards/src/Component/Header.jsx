import Button from './Button'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    
    <div className="topnav">

      {/* /// find a way to on render only display add cards button and when on add cards return home */}

      {/* this will wrap the Logo */}
      <h1><Link to="/"><Button text='Home' /></Link></h1>
      {/* <Link to="/flashcard">Flashcard</Link> */}
      <h1>Code.Cards</h1>
      <Link to = "/new"><Button text='Add Cards' /></Link>
      
    

    </div>
  )
}

export default Header
