import React, { Component } from 'react';
import './Header.css';
 
class Header extends Component {
  render() {
    return (
      <>
      <div className='app-backhround'>
      <div className='app__header' >
      
          <img className="img-header" src='/img/salad5.jpg' alt='khata'/>
        <div className='app__aboutus-content '>
          <div className='app__aboutus-content_about'>
            <h1 className='h1'>Built for your business, not ours.</h1>
            <p className='p__opensans-about'>We will introduce your restaurant quickly. So you can 
            continue cooking without losing important things.
           </p>
         
           <input className='input' placeholder='Enter your email address:' type="email" />
           <button className='button'><b>Start free trial</b></button> 
          </div>
          
           <div className='app_img-pasta'>
            <img className='pasta1' src='img/pasta1.jpg' alt='kh'/>
            <img className='pasta2' src='img/pasta2.jpg' alt='kh'/>
            <img className='chef2' src='img/chef2.jpg' alt='kh'/>
        
          </div>
        </div>
        </div>
         </div>
      </>
    );
  }
}
 
export default Header;