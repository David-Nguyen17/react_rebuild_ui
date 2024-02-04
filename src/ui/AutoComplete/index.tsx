import React, { useCallback, useEffect, useRef, useState } from "react";
import IconRight from "./IconRight";
import ListOption from "./ListOption";
import IconClose from "./icons/close-outline.png";
import "./index.css";

export interface IProps<T> {
  data: T[];
  value?: T | null;
  valueChange?: (value: T | null) => void;
  getOptionLabel?: (value: T) => string;
  getOptionKey?: (value: T) => string | number;
  placeholder?: string;
  styleContainer?: string | undefined;
  styleInput?: string | undefined;
  keyLabel: keyof T;
}

function AutoComplete<T>(props: IProps<T>) {
  const {
    data,
    value,
    valueChange = () => {},
    getOptionLabel,
    getOptionKey,
    placeholder,
    styleContainer = "",
    styleInput = "",
    keyLabel,
  } = props;
  const [isShowData, setShowData] = useState(false);
  const refInput = useRef<HTMLInputElement | null>(null);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const isClickedClear = useRef<boolean>(false);
  const handleDefaultTitle = useCallback(() => {
    if (getOptionLabel && value) {
      return getOptionLabel(value);
    }
    return (value ? value?.[keyLabel] : "") as string;
  }, [getOptionLabel, keyLabel, value]);
  const [valueText, setValueText] = useState(handleDefaultTitle());
  const openOption = () => {
    if (!isShowData) {
      setShowData(true);
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      refDiv.current &&
      event?.target instanceof Node &&
      !refDiv.current?.contains(event?.target) &&
      !isClickedClear.current
    ) {
      setShowData(false);
    } else {
      isClickedClear.current = false;
    }
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueText(event?.target?.value);
  };
  const onClear = () => {
    setValueText("");
    valueChange(null);
    isClickedClear.current = true;
  };
  useEffect(() => {
    if (isShowData) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isShowData]);
  const onClickItem = (item: T) => {
    valueChange(item);
    setShowData(false);
  };
  useEffect(() => {
    if (value) {
      setValueText(handleDefaultTitle());
    }
  }, [getOptionLabel, handleDefaultTitle, value]);
  return (
    <div className={`container ${styleContainer}`} aria-hidden ref={refDiv}>
      <div className={`input ${styleInput}`} onClick={openOption} aria-hidden>
        <input
          ref={refInput}
          value={valueText}
          placeholder={placeholder || "Select the country"}
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          onChange={onChangeText}
        />
        {valueText ? (
          <img
            onClick={onClear}
            className="icon"
            aria-hidden
            alt="Close Icon"
            src={IconClose}
          />
        ) : null}
        <IconRight isUp={isShowData} />
      </div>
      {isShowData ? (
        <ListOption
          data={data}
          searchValue={valueText}
          getOptionKey={getOptionKey}
          getOptionLabel={getOptionLabel}
          onClick={onClickItem}
          keyLabel={keyLabel}
        />
      ) : null}
    </div>
  );
}

export default AutoComplete;
