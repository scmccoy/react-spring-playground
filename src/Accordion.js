import React, {useState } from 'react';
import {useSpring, animated } from 'react-spring';
import useMeasure from './useMeasure';

const Accordion = () => {
    const [on, toggle] = useState(false);
    const [bind, {height, top}] = useMeasure();
    console.log('useMeasure: ', height);

    const animation = useSpring({
        overflow: 'hidden',
        height: on ? height + top * 2 : 0,
    })

    return (
        <div>
            <button onClick={() => toggle(!on)}>Toggle</button>
            <animated.div style={animation}>
                <div {...bind} className="accordion">
                    <p>Item 1</p>
                    <p>Item 2</p>
                </div>
            </animated.div>
        </div>
    )
}

export default Accordion;