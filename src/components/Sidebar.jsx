import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    console.log("Sidebar rendered");
  return (
    <div className="w-10">
    <Link to="/" >Home</Link>
    <br />
    <Link to="/about" >About</Link>
    <br />
    <Link to="/contact" >Contact</Link>
    
    </div>
  )
}

export default Sidebar