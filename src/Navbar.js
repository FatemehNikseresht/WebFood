
import React from 'react';
import './Navbar.css';
 
function Navbar () {
 
    return (
      
          <nav className='app__navbar'>
              <ul className='app__navbar-link'>
                  <li className='app__navbar-item'>Home</li>
                  <li className='app__navbar-item'>About</li>
                  <li className='app__navbar-item'>Menu</li>
                  <li className='app__navbar-item'>Contact</li>
              </ul>
          </nav>
        
    );
  }

 
export default Navbar;