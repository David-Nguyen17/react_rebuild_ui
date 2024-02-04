import COUNTRIES, { Country } from "@/data/country";
import { USERS, User } from "@/data/users";
import AutoComplete from "@/ui/AutoComplete";
import { useState } from "react";

const AutoCompletePage = () => {
  const [country, setCountry] = useState<Country | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const onChangeValueCountry = (value: Country | null) => {
    setCountry(value);
  };
  const onChangeValueUser = (value: User | null) => {
    setUser(value);
  };
  return (
    <div className="auto">
      <AutoComplete
        data={COUNTRIES}
        value={country}
        valueChange={onChangeValueCountry}
        keyLabel="label"
      />
      <AutoComplete
        data={USERS}
        value={user}
        valueChange={onChangeValueUser}
        keyLabel="name"
        getOptionLabel={(item) => item?.phone}
      />
    </div>
  );
};

export default AutoCompletePage;
