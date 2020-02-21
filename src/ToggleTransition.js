import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

/* 
    Using Transitions
*/


const ToggleTransition = () => {
    const [isToggled, setToggle ] = useState(false);

    const transition = useTransition(isToggled, isToggled, {
        from: {opacity: 0, position: 'absolute'},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })

    return (
        <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>

            {transition.map(({item, key, props}) => (
                item ?
                <animated.h1 key={key} style={props}>Toggle Transition.</animated.h1>
                :
                <animated.h1 key={key} style={props}>Hello World.</animated.h1>
            ))}
            
            <button onClick={() => setToggle(!isToggled)} type="button">Toggle transition</button>
        </div>
    )
}

export default ToggleTransition;

/* 
    //                              boolean, keys, transition obj. key/values
    const transition = useTransition(isToggled, null, {
        from: {opacity: 0, position: 'absolute'},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })
*/


/*
<div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
{transition.map(({item, key, props}) => (
    item ?
    (<animated.h1 style={props}>Toggle Transition.</animated.h1>)
    :
    (<animated.h1 style={props}>Hello World.</animated.h1>)
))}
<button onClick={() => setToggle(!isToggled)} type="button">Toggle transition</button>
</div>
*/