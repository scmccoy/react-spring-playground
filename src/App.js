import React from 'react';
// import react spring
import { useSpring, animated } from 'react-spring';
import './App.css';
import Header from './Header';

import Routes from './Routes';

const App = () => {
  // useSpring hook
  // create an object full of animation
  const fade = useSpring({from: {opacity: 0}, opacity: 1});
  /* Verbose version */
  // const fade = useSpring({
  //   from: {
  //     opacity: 0
  //   },
  //   to: {
  //     opacity: 1
  //   }
  // })
  console.log('FADE: ', fade)
  /* Logs out this object
  opacity: AnimatedValue
    payload: undefined
    children: [AnimatedStyle]
    animatedStyles: Set(1) {AnimatedProps}
    value: 1
    startPosition: 0
    lastPosition: 1
    lastVelocity: 0.008234943182567081
    startTime: 1582055097898
    lastTime: 1582055098653
    done: true
  */

  /* ANIMATED 
  A wrapper for elements. pulls animation values outside of react view. 
  creates a performance boost. 
  */
    return (
      // using animated on div
      <animated.div className="App" style={fade}>
        <Header />
        <main>
          <Routes /> 
        </main>
      </animated.div>
    );
  }

export default App;
