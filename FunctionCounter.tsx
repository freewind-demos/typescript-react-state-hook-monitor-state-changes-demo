import React, {useEffect, useState} from 'react'

export default function FunctionCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    printCount(count)
  });

  return (
    <div>
      <p>You clicked {count} times</p>

      <button onClick={() => {
        setCount(count + 1);
      }}>
        Click me +1
      </button>

      <button onClick={() => {
        setCount(count + 2);
      }}>
        Click me +2
      </button>
    </div>
  );
}

function printCount(count: number) {
  console.log("Count now: ", count)
}
