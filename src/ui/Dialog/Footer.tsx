import { IFooterProps } from "./types";

const Footer = (props: IFooterProps) => {
  const {
    children,
    isShowButtonFooterDefault,
    onPressLeft,
    onPressRight,
    titleActionLeft,
    titleActionRight,
    actionLeftStyle,
    actionRightStyle,
    actionStyle,
  } = props;
  return (
    <div className="footer">
      {isShowButtonFooterDefault ? (
        <div className={`action-footer ${actionStyle}`}>
          <button
            type="button"
            className={`button-action ${actionLeftStyle}`}
            onClick={onPressLeft}
          >
            {titleActionLeft || "No"}
          </button>
          <button
            type="button"
            className={`button-action ${actionRightStyle}`}
            onClick={onPressRight}
          >
            {titleActionRight || "Yes"}
          </button>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Footer;
