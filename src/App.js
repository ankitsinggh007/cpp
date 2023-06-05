import "./styles.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [Data, setData] = useState(0);

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    console.log(count, "count");
  });
  console.log(Data, "data");
  return (
    <>
      <input type="text" onChange={(e) => setData(Data + 1)}></input>

      <h3> you type {count.current}</h3>
    </>
  );
}
