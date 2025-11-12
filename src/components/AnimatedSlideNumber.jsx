import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function AnimatedSlideNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isVisible, setIsVisible] = useState(true);
  const prevValueRef = useRef(value);
  const directionRef = useRef(1); // 1 for up, -1 for down

  useEffect(() => {
    if (value !== prevValueRef.current) {
      directionRef.current = value > prevValueRef.current ? 1 : -1;
      setIsVisible(false);
      
      const timer = setTimeout(() => {
        setDisplayValue(value);
        prevValueRef.current = value;
        setIsVisible(true);
      }, 350);
      
      return () => clearTimeout(timer);
    }
  }, [value]);

  return (
    <span 
      className="inline-block"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateY(0) scale(1)' 
          : `translateY(${directionRef.current * 20}px) scale(0.9)`,
        transition: 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {displayValue}
    </span>
  );
}

AnimatedSlideNumber.propTypes = {
  value: PropTypes.number.isRequired,
};

