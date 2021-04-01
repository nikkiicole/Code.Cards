import Button from './Button'
import { Link } from 'react-router-dom'
import "./Header.css"
import React from 'react'

const Header = () => {
  return (
    <div className="topnav">
      <Link to="/"><Button text='Home' /></Link>
      <h1>Code.Cards</h1>
      <Link to = "/new"><Button text='Add Cards' /></Link>
    </div>
  )
}

export default Header
