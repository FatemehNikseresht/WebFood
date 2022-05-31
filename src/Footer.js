import React, { Component } from 'react';
import './Footer.css';
 
class Footer extends Component {


  
btnClick() {
        window.open("https://www.jamieoliver.com/");
    }
    btnClickwong() {
        window.open("https://janicewong.online/");
    }
   btnClicksmith(){
     window.open ("https://chefmichaelsmith.com/")
   }
render() {
    return (
      <> 
      <h2 className='HeadText'>My Chef</h2>
      <div className='chefPicture'>
        <img className='chef4' src='img/chef4.jpg' alt='khhhhh'/>
      </div>
      <div className='chefText'>
       <div className='chef4Text'>
          <h1>Michael Smith</h1>
          <p>Michael Dixon Smith CM is an American-born 
            Canadian chef and cookbook writer. He has 
            hosted The Inn Chef, Chef at Home, and judged
            on Chopped: Canada on the Canadian Food Network.
              Smith is Prince Edward Island's Food Ambassador,
              a nutritional activist, and an advocate for sustainable 
              home cooking and farm-to-table cuisine</p>
       </div>
       <button className="button-Smith" onClick={this.btnClicksmith.bind(this)}>Michael Smith </button>
       <div className='chefPicture'>
       <img className='chef5' src='img/chef5.jpg' alt='khhhhh'/>
       </div>
       <div className='chef5Text'>
          <h1>Janice Wong </h1>
          <p>(born 1983)[1][2] is a 
            Singaporean pastry chef who owns 2am
            :dessert bar in Holland Village, 2am:
            lab, in November 2014 she launched her
            eponymous sweet concept brand, Janice
              Wong. The Janice Wong brand has two
              retail outlets and two restaurants in 
              Singapore; a dessert bar and lab in 
              Tokyo, Japan; and a retail and dining
                experience at the MGM Cotai in Macau</p>
       </div>
        <button className="button-wong" onClick={this.btnClickwong.bind(this)}>Janice Wong </button>
       <div className='chefPicture'>
        <img className='chef6' src='img/chef6.jpg' alt='khhhhh'/>
        </div>
       <div className='chef6Text'>
         <h1>James Trevor </h1>
         <p>Oliver MBE OSI (born 27 May 1975)
            is a British chef, restaurateur,
             and cookbook author. He is known 
             for his casual approach to cuisine,
              which has led him to front numerous 
              television shows and open many restaurants</p>
       </div>
       <button className="button-james" onClick={this.btnClick.bind(this)}>James Trevor</button>
          
       </div>
      
      </>        
    );
  }
}

 
export default Footer;