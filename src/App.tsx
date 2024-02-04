import { useEffect } from "react";
import AutoCompletePage from "./pages/auto_complete";
import DialogPage from "./pages/dialog";
import HomePage from "./pages/user_1";
import MessagePage from "./pages/user_2";
import localStore from "./store";

function App() {
  useEffect(() => {
    localStore.initData();
  }, []);
  return (
    <div>
      <div className="messages">
        <HomePage />
        <MessagePage />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <AutoCompletePage />
        <DialogPage />
      </div>
    </div>
  );
}

export default App;
