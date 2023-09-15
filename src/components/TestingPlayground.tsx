import { useCallback, useEffect, useState } from "react";

function TestingPlayground() {
  const [count, setCount] = useState(0);

  const name = "word";
  const func = useCallback(() => console.log("function"), []);

  const handleIncrement = () => setCount((prev) => prev + 1);

  useEffect(() => {
    console.log("use Effect ran!");
  }, [func]);

  return (
    <div>
      TestingPlayground
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default TestingPlayground;
