export interface Message {
  id: string;
  message: string;
}

export interface InitState {
  senderOne: string;
  senderTwo: string;
  messageOne: string;
  messageTwo: string;
  title: string;
}
export interface CustomEventDetails {
  key: keyof InitState;
}
declare global {
  interface GlobalEventHandlersEventMap {
    [key: string]: CustomEvent<CustomEventDetails>;
  }
}

export const isJSONString = (value: string) => {
  try {
    JSON.parse(value);
    return true;
  } catch (error) {
    return false;
  }
};

const handleDispatchAction = (key: keyof InitState) => {
  const customEvent = new CustomEvent(key, {
    detail: {
      key,
    },
  });
  window.dispatchEvent(customEvent);
};
export interface LocalStore {
  initState: InitState;
  subscribe: (key: keyof InitState, setValue: (data: string) => void) => void;
  removeSubscribe: (key: keyof InitState) => void;
  addKeyValue: <T>(key: keyof InitState, value: T) => void;
  removeKeyValue: (key: keyof InitState) => void;
  getValue: <T>(key: keyof InitState) => T;
  initData: () => void;
}

const localStore: LocalStore = {
  initState: {
    senderOne: "",
    senderTwo: "",
    messageOne: "",
    messageTwo: "",
    title: "",
  },
  initData() {
    window.localStorage.setItem("senderOne", JSON.stringify("User 1"));
    window.localStorage.setItem("senderTwo", JSON.stringify("User 2"));
    window.localStorage.setItem("messageOne", JSON.stringify([]));
    window.localStorage.setItem("messageTwo", JSON.stringify([]));
    window.localStorage.setItem(
      "title",
      JSON.stringify("React Certification Level 3")
    );
  },
  subscribe(key, setValue) {
    window.addEventListener(key, () => {
      const currentValue = window.localStorage.getItem(key);
      if (currentValue && isJSONString(currentValue)) {
        setValue(currentValue);
      } else {
        setValue(JSON.stringify(currentValue));
      }
    });
  },
  removeSubscribe(key) {
    window.removeEventListener(key, () => {});
  },
  addKeyValue(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
    handleDispatchAction(key);
  },
  removeKeyValue(key) {
    window.localStorage.removeItem(key);
    handleDispatchAction(key);
  },
  getValue(key) {
    const value = window.localStorage.getItem(key);
    if (value && isJSONString(value)) {
      return JSON.parse(`${value}`);
    }
    return value;
  },
};

export default localStore;
