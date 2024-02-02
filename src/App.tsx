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
      <AutoComplete
        data={COUNTRIES}
        value={option}
        onChangeValue={onChangeValue}
        getOptionKey={(item) => item?.code}
        getOptionLabel={(item) => item?.label}
      />
    </div>
  );
}

export default App;
