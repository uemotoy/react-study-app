import React, { useState } from "react";

const MyHooksComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>MyHooksComponent</h1>
      <div>{count}</div>
      <button onClick={handleClick}>PULS 1!</button>
    </div>
  );
};

export default MyHooksComponent;
