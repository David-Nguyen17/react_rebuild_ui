import Messages from "@/components/Messages";
import localStore from "@/store";
import MessageViewModel from "@/view_model/MessageViewModel";

const HomePage = () => {
  const senderOne = localStore.getValue<string>("senderOne");
  const { handleRenderContent, onChange, onSendMessage, message } =
    MessageViewModel({ keySubscriber: "messageTwo", currentKey: "messageOne" });
  return (
    <Messages
      value={message}
      onChange={onChange}
      onSendMessage={onSendMessage}
      handleRenderContent={handleRenderContent}
      user={senderOne}
    />
  );
};

export default HomePage;
