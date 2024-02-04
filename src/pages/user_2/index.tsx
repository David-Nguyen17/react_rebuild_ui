import Messages from "@/components/Messages";
import localStore from "@/store";
import MessageViewModel from "@/view_model/MessageViewModel";

const MessagePage = () => {
  const senderTwo = localStore.getValue<string>("senderTwo");
  const { handleRenderContent, onChange, onSendMessage, message, onAddTitle } =
    MessageViewModel({
      keySubscriber: "messageOne",
      currentKey: "messageTwo",
    });
  return (
    <div>
      <div>
        <button type="button" onClick={onAddTitle}>
          Add new title
        </button>
      </div>
      <Messages
        value={message}
        onChange={onChange}
        onSendMessage={onSendMessage}
        handleRenderContent={handleRenderContent}
        user={senderTwo}
      />
    </div>
  );
};

export default MessagePage;
