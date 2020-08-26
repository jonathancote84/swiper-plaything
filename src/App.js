import React, { useState, createContext } from 'react';
import Swipe from "./components/swipe";
import Switch from "./components/switch";
import { CSSTransitionGroup } from 'react-transition-group'
export const SwipeContext = createContext();



function App() {
  const [slide, setSlide] = useState(0);
  return (  
    <SwipeContext.Provider value={{ slide, setSlide }}>
        <CSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <Switch />        
      </CSSTransitionGroup>

      <Swipe />
    </SwipeContext.Provider>   
  );
}

export default App;
