import { useState } from "react";

function ErrorTest() {
  const [data] = useState([]);

  throw new Error();

  return <div>{JSON.stringify(data)}</div>;
}

export default ErrorTest;
