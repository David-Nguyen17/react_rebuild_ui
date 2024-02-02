import React from "react";

export interface IProps {
  user: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage: () => void;
  handleRenderContent: () => React.ReactNode;
  value: string | number | readonly string[] | undefined;
}
const Messages = (props: IProps) => {
  const { user, onChange, onSendMessage, handleRenderContent, value } = props;
  return (
    <div>
      <h2>Sent from: {user}</h2>
      <div>
        <input
          placeholder="Enter name"
          onChange={onChange}
          value={value}
          className="input-name"
        />
        <button type="button" onClick={onSendMessage}>
          Send
        </button>
        {handleRenderContent()}
      </div>
    </div>
  );
};

export default Messages;
