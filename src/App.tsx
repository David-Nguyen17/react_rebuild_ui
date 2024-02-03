import { useEffect, useState } from "react";
import COUNTRIES from "./data/country";
import HomePage from "./pages/user_1";
import MessagePage from "./pages/user_2";
import localStore from "./store";
import AutoComplete from "./ui/AutoComplete";

export interface Country {
  code: string;
  label: string;
  phone: string;
}

function App() {
  const [option, setOption] = useState<Country | null>(null);
  const onChangeValue = (value: Country | null) => {
    setOption(value);
  };
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
        <AutoComplete
          data={COUNTRIES}
          value={option}
          valueChange={onChangeValue}
          keyLabel="label"
        />
        <AutoComplete
          data={COUNTRIES}
          value={option}
          valueChange={onChangeValue}
          getOptionKey={(item) => item?.code}
          getOptionLabel={(item) => item?.label}
          keyLabel="label"
        />
      </div>
    </div>
  );
}

export default App;
