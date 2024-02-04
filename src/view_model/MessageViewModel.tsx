import localStore, { InitState, Message, isJSONString } from "@/store";
import { useEffect, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IProps {
  keySubscriber: keyof InitState;
  currentKey: keyof InitState;
}

const MessageViewModel = (props: IProps) => {
  const { keySubscriber, currentKey } = props;
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState(
    localStore.getValue<string>("title") ?? ""
  );
  const [messages, setMessages] = useState("");
  const onSendMessage = () => {
    if (message?.trim()?.length) {
      const currentMessages = localStore.getValue<Message[]>(currentKey);
      if (Array.isArray(currentMessages)) {
        localStore.addKeyValue<Message[]>(currentKey, [
          ...currentMessages,
          { id: uuidv4(), message },
        ]);
      } else if (currentMessages) {
        localStore.addKeyValue<Message[]>(currentKey, [
          {
            id: uuidv4(),
            message:
              typeof currentMessages === "string"
                ? currentMessages
                : JSON.stringify(currentMessages),
          },
          {
            id: uuidv4(),
            message,
          },
        ]);
      } else {
        localStore.addKeyValue<Message[]>(currentKey, [
          {
            id: uuidv4(),
            message,
          },
        ]);
      }
    }
    setMessage("");
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event?.target?.value);
  };
  const onSubscribeUpdateData = (data: string) => {
    setMessages(data);
  };
  const onSubscribeUpdateDataSend = (data: string) => {
    setTitle(data);
  };
  const listMessages = useMemo(() => {
    if (isJSONString(messages)) {
      return JSON.parse(messages);
    }
    return [];
  }, [messages]);

  const finalTitle = useMemo(() => {
    if (isJSONString(title)) {
      const parseString = JSON.parse(title);
      if (
        typeof parseString !== "function" &&
        typeof parseString !== "object" &&
        typeof parseString !== "symbol"
      ) {
        return parseString;
      }
      return JSON.stringify(parseString);
    }
    return title;
  }, [title]);

  const handleRenderContent = () => {
    if (Array.isArray(listMessages)) {
      return listMessages?.map((item) => (
        <div key={item?.id ?? uuidv4()}>
          {item?.message ?? JSON.stringify(item)}
        </div>
      ));
    }
    if (
      typeof listMessages !== "function" &&
      typeof listMessages !== "object" &&
      typeof listMessages !== "symbol"
    ) {
      return <div>{listMessages}</div>;
    }
    return <div>{JSON.stringify(listMessages)}</div>;
  };
  const onAddTitle = () => {
    localStore.addKeyValue(
      "title",
      `This is random number ${Math.floor(Math.random() * 10000)}`
    );
  };
  useEffect(() => {
    localStore.subscribe(keySubscriber, onSubscribeUpdateData);
    localStore.subscribe("title", onSubscribeUpdateDataSend);
    return () => {
      localStore.removeSubscribe(keySubscriber);
      localStore.removeSubscribe("title");
    };
  }, [keySubscriber]);
  return {
    handleRenderContent,
    onSendMessage,
    onChange,
    message,
    title: finalTitle,
    onAddTitle,
  };
};

export default MessageViewModel;
