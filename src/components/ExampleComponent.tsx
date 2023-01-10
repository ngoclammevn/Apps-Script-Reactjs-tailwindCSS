import React from 'react';
import { useState } from 'react';
const ExampleComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Count: {count}</div>
      <div>
        <p className="text-3xl font-bold text-red-900 underline">
          Example Document Lan 2
        </p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Up count
        </button>
      </div>
    </>
  );
};
export default ExampleComponent;
