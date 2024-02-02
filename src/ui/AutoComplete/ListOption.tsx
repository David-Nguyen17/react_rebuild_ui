import ItemOption from "./ItemOption";

export interface IProps<T> {
  onClick: (item: T) => void;
  data: T[];
  getOptionKey: (value: T) => string | number;
  getOptionLabel: (value: T) => string;
  searchValue: string;
}
function ListOption<T>(props: IProps<T>) {
  const { onClick, data, getOptionKey, getOptionLabel, searchValue } = props;
  return (
    <div className="list-option">
      {data?.length
        ? data?.map((item) => (
            <ItemOption
              key={getOptionKey(item)}
              onClick={() => onClick(item)}
              title={getOptionLabel(item)}
              searchValue={searchValue}
            />
          ))
        : null}
    </div>
  );
}

export default ListOption;
