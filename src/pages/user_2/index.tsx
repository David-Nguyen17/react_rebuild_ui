import Messages from "@/components/Messages";
import localStore from "@/store";
import MessageViewModel from "@/view_model/MessageViewModel";

const MessagePage = () => {
  const senderTwo = localStore.getValue<string>("senderTwo");
  const { handleRenderContent, onChange, onSendMessage, message } =
    MessageViewModel({ keySubscriber: "messageOne", currentKey: "messageTwo" });
  return (
    <Messages
      value={message}
      onChange={onChange}
      onSendMessage={onSendMessage}
      handleRenderContent={handleRenderContent}
      user={senderTwo}
    />
  );
};

export default MessagePage;
