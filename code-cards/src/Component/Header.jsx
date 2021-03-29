import Button from './Button'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    
    <div>
      <Link to="/">Home</Link>
      <Link to = "/new">Add A Card</Link>
      This is my nav/header
      <Button color='grey' text='Add Cards' />
    </div>
  )
}

export default Header
