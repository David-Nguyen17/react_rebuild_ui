import { useState } from "react";
import "./App.css";

function App() {
  const [count] = useState(0);
  return (
    <div onClick={() => {}} aria-hidden>
      Hello World! {count}
    </div>
  );
}

export default App;
