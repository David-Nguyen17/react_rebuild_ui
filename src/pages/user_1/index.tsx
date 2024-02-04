import Messages from "@/components/Messages";
import localStore from "@/store";
import MessageViewModel from "@/view_model/MessageViewModel";

const HomePage = () => {
  const senderOne = localStore.getValue<string>("senderOne");
  const { handleRenderContent, onChange, onSendMessage, message, title } =
    MessageViewModel({ keySubscriber: "messageTwo", currentKey: "messageOne" });
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <Messages
        value={message}
        onChange={onChange}
        onSendMessage={onSendMessage}
        handleRenderContent={handleRenderContent}
        user={senderOne}
      />
    </div>
  );
};

export default HomePage;
