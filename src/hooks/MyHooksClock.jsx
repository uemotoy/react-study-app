import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";

const MyHooksClock = () => {
  const [date, setDate] = useState(new Date());

  const [count, setCount] = useState(0);

  const numArray = useMemo(() => calcNum(count), [count]);

  function calcNum(count) {
    console.log("calc");

    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(count * i);
    }

    return array;
  }

  const tick = () => {
    console.log(new Date());
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    console.log("aaaa");
    if (count === 10) {
      alert("10 !!");
    }
  }, [count]);

  return (
    <div>
      <h1>What time is it?</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
      <button onClick={() => setCount(count + 1)}> count + 1 </button>
      <h3>{count}</h3>
      <h3>{numArray.join(",")}</h3>
    </div>
  );
};

export default MyHooksClock;
