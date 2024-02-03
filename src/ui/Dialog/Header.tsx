import { Cross2Icon } from "@radix-ui/react-icons";
import { IHeaderProps } from "./types";

const Header = (props: IHeaderProps) => {
  const { title, isModal, onClose, children } = props;
  const onClick = () => {
    if (onClose) {
      onClose();
    }
  };
  return (
    <div className="header">
      <div className="header-title">
        <div className="title">{title}</div>
        {isModal ? (
          <div className="close-modal" onClick={onClick} aria-hidden>
            <Cross2Icon width={20} height={20} />
          </div>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default Header;
