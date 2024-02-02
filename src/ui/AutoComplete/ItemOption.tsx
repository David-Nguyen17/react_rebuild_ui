import { v4 as uuidv4 } from "uuid";
import { convertStringArray } from "./function";

export interface IProps {
  onClick: () => void;
  title: string;
  searchValue: string;
}
function ItemOption(props: IProps) {
  const { onClick, title, searchValue } = props;
  const firstIndex = title
    .toLocaleLowerCase()
    .indexOf(searchValue.toLocaleLowerCase());
  if (firstIndex !== -1 && searchValue) {
    const results = convertStringArray(title, searchValue);
    return (
      <div className="item-option">
        {results.map((sub) => {
          const className =
            sub.toLocaleUpperCase() === searchValue.toLocaleUpperCase()
              ? "active"
              : "inactive";
          return (
            <div key={uuidv4()} className={className}>
              {`${sub}`}
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div
      className={searchValue ? "item-option-hide" : "item-option"}
      onClick={onClick}
      aria-hidden
    >
      {title}
    </div>
  );
}

export default ItemOption;
