import React from 'react'
import { animated } from 'react-spring';

const Nav = ({style}) => {
    return (
        <animated.div className="nav-wrapper" style={style} >
            <nav>
                <a href="#">Home</a>
                <a href="#">NWEA</a>
                <a href="#">Front End</a>
                <a href="#">Back End</a>
            </nav>
        </animated.div>
    )
}

export default Nav;