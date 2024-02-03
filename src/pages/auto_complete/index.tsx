import { Country } from "@/App";
import COUNTRIES from "@/data/country";
import AutoComplete from "@/ui/AutoComplete";
import { useState } from "react";

const AutoCompletePage = () => {
  const [option, setOption] = useState<Country | null>(null);
  const onChangeValue = (value: Country | null) => {
    setOption(value);
  };
  return (
    <div>
      <AutoComplete
        data={COUNTRIES}
        value={option}
        valueChange={onChangeValue}
        keyLabel="label"
      />
    </div>
  );
};

export default AutoCompletePage;
