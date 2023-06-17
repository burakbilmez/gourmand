import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "./Home";
import Cuisine from "./Cuisine";
import Results from "./Results";
import Recipe from "./Recipe";

function Pages() {
  const location = useLocation();
  // eslint-disable-next-line
  const [isAnimating, setIsAnimating] = useState(false);

  const onAnimationStart = () => {
    setIsAnimating(true);
  };

  const onAnimationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="page"
        timeout={500} 
        unmountOnExit
        onEnter={onAnimationStart}
        onExited={onAnimationEnd}
      >
        <div className="page">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/cuisine/:type" element={<Cuisine />} />
            <Route path="/results/:search" element={<Results />} />
            <Route path="/recipe/:id" element={<Recipe />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Pages;
