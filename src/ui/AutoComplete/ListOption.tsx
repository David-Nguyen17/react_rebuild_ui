import { useCallback } from "react";
import ItemOption from "./ItemOption";

export interface IProps<T> {
  onClick: (item: T) => void;
  data: T[];
  getOptionKey?: (value: T) => string | number;
  getOptionLabel?: (value: T) => string;
  searchValue: string;
  keyLabel: keyof T;
}
function ListOption<T>(props: IProps<T>) {
  const { onClick, data, getOptionKey, getOptionLabel, searchValue, keyLabel } =
    props;
  const handleTitle = (item: T) => {
    if (getOptionLabel) {
      return item ? getOptionLabel(item) : "";
    }
    return (item?.[keyLabel] ?? "") as string;
  };
  const handleDefaultKey = useCallback(
    (item: T) => {
      if (item && getOptionKey) {
        return getOptionKey(item);
      }
      return item?.[keyLabel] as string;
    },
    [getOptionKey, keyLabel]
  );
  return (
    <div className="list-option">
      {data?.length
        ? data?.map((item) => (
            <ItemOption
              key={handleDefaultKey(item)}
              onClick={() => onClick(item)}
              title={handleTitle(item)}
              searchValue={searchValue}
            />
          ))
        : null}
    </div>
  );
}

export default ListOption;
