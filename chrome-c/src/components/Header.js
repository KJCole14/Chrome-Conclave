import React from 'react';
import { Link } from 'react-router-dom'
import Gear from '../assets/Gear-Icon.png'


export default function Header() {
  return (
    <div>
     <header>Chrome Conclave</header>
    <li>
      <Link to='/'
        ><img id="logo" src={Gear} alt="Gear Icon"
      /></Link>
    </li>
    <nav class="navbar">
      <ul>
        <li><Link to='/' className="link">Home</Link></li>
      </ul>

      <ul>
        <li><Link to='/shop' className="link">Shop</Link></li>
      </ul>

      <ul>
        <li><Link to='/contact' className="link">Contact</Link></li>
        </ul>
    </nav>
    </div>
  )
}
