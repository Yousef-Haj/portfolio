import React from "react";
import {useScrollReveal} from '../../hooks/useScrollReveal'
import Fadein from "./Fadein";
const ScrollRave = (
  children,
  animation ='fadeup',
  delay = 0,
  duration = 700,
) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });
 
  const animationClass = {
    fadeup: 'opacity-0 translate-y-8',
    Fadein: 'opacity-0',
    slideLeft: 'opacity-0 translate-x-12',
    slideRight: 'opacity-0 translate-x-12',
    slideIn: 'opacity-0 scale-90',
  };

  const visibleclasses = 'opacity-100 translate-y-0 translate-x-0 scale-100';
  return (
    <div ref={ref}
  className={'transition-all ease-out ' + (isVisible ? visibleclasses : animationClass[animation])}
  style={{
    transitionDuration: '${duration}ms',
    transitionDelay: '${delay}ms',
  }}
  >
    {children}
  </div>
    );
}
    export default ScrollRave;
