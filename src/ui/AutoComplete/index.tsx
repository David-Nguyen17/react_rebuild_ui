import {
  Cross2Icon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@radix-ui/react-icons";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import "./index.css";

export interface IProps<T> {
  data: T[];
  value?: T | null;
  onChangeValue?: (value: T | null) => void;
  getOptionLabel: (value: T) => string;
  getOptionKey: (value: T) => string | number;
  placeholder?: string;
}

function AutoComplete<T>(props: IProps<T>) {
  const {
    data,
    value,
    onChangeValue = () => {},
    getOptionLabel,
    getOptionKey,
    placeholder,
  } = props;
  const [isShowData, setShowData] = useState(false);
  const refInput = useRef<HTMLInputElement | null>(null);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const [valueText, setValueText] = useState(
    value ? getOptionLabel(value) : ""
  );
  const onFocus = () => {
    if (!isShowData) {
      setShowData(true);
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      refDiv.current &&
      event?.target instanceof Node &&
      !refDiv.current?.contains(event?.target)
    ) {
      setShowData(false);
    }
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueText(event?.target?.value);
  };
  const onChangeDebounce = debounce(onChangeText, 300);
  const onClear = () => {
    setValueText("");
    onChangeValue(null);
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refDiv]);
  useEffect(() => {
    if (value) {
      setValueText(getOptionLabel(value));
    }
  }, [getOptionLabel, value]);
  // console.log("valueText", valueText, value, refInput?.current?.value);
  return (
    <div className="container" aria-hidden ref={refDiv}>
      <div className="input" onClick={onFocus} aria-hidden>
        <input
          onFocus={onFocus}
          ref={refInput}
          value={valueText}
          placeholder={placeholder || "Select the country"}
          autoCapitalize="off"
          autoCorrect="off"
          onClick={onFocus}
          autoComplete="off"
          onChange={onChangeDebounce}
        />
        {valueText ? <Cross2Icon onClick={onClear} className="icon" /> : null}
        {isShowData ? (
          <TriangleUpIcon width={20} height={20} className="icon" />
        ) : (
          <TriangleDownIcon width={20} height={20} className="icon" />
        )}
      </div>
      {isShowData ? (
        <ul>
          {data?.length
            ? data?.map((item) => (
                <li
                  key={getOptionKey(item)}
                  onClick={() => {
                    if (onChangeValue) {
                      onChangeValue(item);
                      setShowData(false);
                      if (refInput.current) {
                        refInput.current?.focus();
                        refInput.current.selectionStart =
                          getOptionLabel(item)?.length ?? 0;
                        refInput.current.selectionEnd =
                          getOptionLabel(item)?.length ?? 0;
                      }
                    }
                  }}
                  aria-hidden
                >
                  {getOptionLabel(item)}
                </li>
              ))
            : null}
        </ul>
      ) : null}
    </div>
  );
}

export default AutoComplete;
