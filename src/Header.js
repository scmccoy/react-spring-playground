import React, { useState } from 'react'
import Nav from "./Nav";
import { useSpring } from 'react-spring';
import Checkout from './Checkout';

import springLogo from './react-puppies.jpg';

const Header = () => {
    
    const [isNavOpen, setNavOpen] = useState(false);
    const [isCheckoutOpen, setCheckoutOpen] = useState(false);
    const navAnimation = useSpring({transform: isNavOpen ? `translate3d(0,0,0) scale(1)` : `translate3d(100%,0,0) scale(0.6)`})

    return (
        <header className="App-header">
          <img src={springLogo} className="logo" alt="logo" />
          {/* button toggles Nav */}
          <button onClick={() => setNavOpen(!isNavOpen)} className="menu-button">Menu</button>
          <button onClick={() => setCheckoutOpen(!isCheckoutOpen)} className="menu-button">Checkout</button>
          {/* pass animation to component to be used inside */}
          <Nav style={navAnimation} />
          <Checkout isOpen={isCheckoutOpen} /> 
        </header>
    )
}

export default Header;