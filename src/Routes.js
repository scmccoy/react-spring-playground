import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Toggle from './Toggle';
import Accordion from './Accordion';
import AccordionTransition from './AccordionTransition';
import ToggleTransition from './ToggleTransition';
import Spring from './Spring';

function useRouter() {
  return useContext(__RouterContext);
}

const Routes = () => {
  return (
    <Router>
      <ul className="router-nav">
        <NavLink to="/">Accordion</NavLink>
        <NavLink to="/two">Toggle transition</NavLink>
        <NavLink to="/three">Toggle</NavLink>
        <NavLink to="/five">Spring</NavLink>
      </ul>
      <Main />
    </Router>
  );
};

const Main = () => {
  const { location } = useRouter();
  console.log('Location: ', location)
  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: 'absolute',
      width: '100%',
      transform: 'translate3d(100%, 0, 0)'
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' }
  });
  console.log('tranz: ', transitions, ' what is: ', typeof transitions)

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route exact path="/" component={One} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
        <Route exact path="/acorn" component={Four} />
        <Route exact path="/five" component={Five} />
      </Switch>
    </animated.div>
  ));
};

function NavLink(props) {
  return (
    <li>
      <Link {...props} />
    </li>
  );
}

const One = () => {
  return (
    <div className="page-route3">
      <AccordionTransition />
    </div>
  );
};
const Two = () => {
  return (
    <div className="page-route two">
      <ToggleTransition /> 
    </div>
  );
};
const Three = () => {
  return (
    <div className="page-route million">
      <Toggle /> 
    </div>
  );
};
const Four = () => {
  return (
    <div className="page-route2 two">
      <Accordion /> 
    </div>
  );
};
const Five = () => {
  return (
    <div className="page-route three">
      <Spring /> 
    </div>
  );
};

export default Routes;
