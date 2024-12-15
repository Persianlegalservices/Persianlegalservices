import React, { useState, useEffect } from 'react';

interface CounterProps {
  targetNumber: number; // The number the counter will count up to
  duration: number; // Duration in milliseconds to reach the target number
}

const Counter: React.FC<CounterProps> = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = targetNumber / (duration / 10); // Determine the increment value based on the duration
    const interval = setInterval(() => {
      setCount((prev) => {
        const nextCount = prev + increment;
        if (nextCount >= targetNumber) {
          clearInterval(interval); // Stop the interval when the target number is reached
          return targetNumber;
        }
        return nextCount;
      });
    }, 10); // Update every 10ms for smoother animation

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [targetNumber, duration]);

  return <div>{Math.floor(count)}</div>;
};

export default Counter;
