import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

/* 
    Using interpolation
    This method is available on named properties
*/

const Toggle = () => {
    const [isToggled, setToggle ] = useState(false);
    
    const fade = useSpring({
        opacity: isToggled ? 1 : 0,
        fontSize: isToggled ? '3rem' : '2rem',
    })
    const rotate = useSpring({
        fontSize: isToggled ? '3rem' : '2rem',
        transform: isToggled ? 'rotate(180deg)' : 'rotate(0deg)'
    })

    return (
        <div>
            <animated.h1 style={fade}>Fade using toggle button.</animated.h1>
            <animated.h1 style={rotate}>Rotate Me!</animated.h1>
            <button onClick={() => setToggle(!isToggled)} type="button">Toggle</button>
        </div>
    )
}
// const Toggle = () => {
//     const [isToggled, setToggle ] = useState(false);
//     const {color, changingValue, textDecoration} = useSpring({
//         // opacity: isToggled ? 1 : 0,
//         // fontSize: isToggled ? '3rem' : '2rem',
//         color: isToggled ? 'red' : '#fff',
//         changingValue: isToggled ? 0 : 1,
//         textDecoration: isToggled ? 'wavy' : 'dotted'
//     })

//     return (
//         <div>
//             <animated.h1 style={{
//                 transform: changingValue.interpolate({
//                     // emulating keyframes
//                     range: [0, 0.25, 0.50, 0.75, 1],
//                     output: [0, -25, -50, -100, -50]
//                 }).interpolate(changingValue => `translate3d(0, ${changingValue}px, 0)`),
//                 color,
//                 textDecoration: textDecoration.interpolate(textDecoration => `green ${textDecoration} underline`)
//             }}>Fade using toggle button.</animated.h1>
//             <button onClick={() => setToggle(!isToggled)} type="button">Toggle</button>
//         </div>
//     )
// }

export default Toggle;