import IconCaretDown from "./icons/caret-down-outline.png";
import IconCareUp from "./icons/caret-up-outline.png";

const IconRight = (props: { isUp: boolean }) => {
  const { isUp } = props;
  return isUp ? (
    <img className="icon" aria-hidden alt="Caret Icon" src={IconCareUp} />
  ) : (
    <img className="icon" aria-hidden alt="Caret Icon" src={IconCaretDown} />
  );
};

export default IconRight;
