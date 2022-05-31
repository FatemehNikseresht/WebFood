import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Navvbar from './componentnavbar/Navvbar'
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './componentnavbar/pages/Home';
import Services from './componentnavbar/pages/Services';
import Products from './componentnavbar/pages/Products';
import ContactUs from './componentnavbar/pages/ContactUs';
import SignUp from './componentnavbar/pages/SignUp';
import Marketing from './componentnavbar/pages/Marketing';
import Consulting from './componentnavbar/pages/Consulting';
import Icon from './Icon';

function App() {
  return (
    <Router>
      <Navvbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
  
        <Header />
        <Footer />
        <Icon/>        
      </Router>
    );
  }

 
export default App;