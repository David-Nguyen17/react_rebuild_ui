import React, { useEffect, useMemo, useRef } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "./index.css";
import { IDialogProps } from "./types";

const Dialog = React.memo((props: IDialogProps) => {
  const {
    type,
    title,
    open,
    onClose,
    content,
    renderBody,
    renderHeader,
    renderFooter,
    isShowButtonFooterDefault = type === "dialog",
    headerStyle = "",
    bodyStyle = "",
    footerStyle = "",
    onPressRight,
    onPressLeft,
    styleDialog = "",
    isShowFooter = true,
    titleActionLeft,
    titleActionRight,
    actionLeftStyle = "",
    actionRightStyle = "",
    actionStyle = "",
  } = props;
  const refDiv = useRef<HTMLDivElement | null>(null);
  const refCheckDialog = useRef<number>(0);
  const classNameDefault = useMemo(
    () => (type === "dialog" ? "common-dialog" : "common-modal"),
    [type]
  );
  const classNameBodyDefault = useMemo(
    () => (type === "dialog" ? "common-dialog-body" : "common-modal-body"),
    [type]
  );
  const onResetDialog = () => {
    onClose();
    refCheckDialog.current = 0;
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      refDiv.current &&
      event?.target instanceof Node &&
      !refDiv.current?.contains(event?.target)
    ) {
      if (refCheckDialog.current >= 1) {
        onResetDialog();
      } else {
        refCheckDialog.current += 1;
      }
    }
  };
  const onClickRight = () => {
    if (onPressRight) {
      refCheckDialog.current = 0;
      return onPressRight();
    }
    return onResetDialog();
  };
  const onClickLeft = () => {
    if (onPressLeft) {
      refCheckDialog.current = 0;
      return onPressLeft();
    }
    return onResetDialog();
  };
  useEffect(() => {
    if (type === "dialog") {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refDiv]);
  return (
    <div>
      {open ? (
        <div className="dialog-overlay" aria-hidden>
          <div className={`container-dialog ${styleDialog}`} ref={refDiv}>
            <div className={`${classNameDefault} ${headerStyle}`}>
              <Header
                title={title}
                isModal={type === "modal"}
                onClose={onClose}
              >
                {renderHeader}
              </Header>
            </div>
            <div className={`${classNameBodyDefault} ${bodyStyle}`}>
              <Body content={content}>{renderBody}</Body>
            </div>
            {isShowFooter ? (
              <div className={`${classNameDefault} ${footerStyle}`}>
                <Footer
                  isShowButtonFooterDefault={isShowButtonFooterDefault}
                  onPressLeft={onClickLeft}
                  onPressRight={onClickRight}
                  titleActionLeft={titleActionLeft}
                  titleActionRight={titleActionRight}
                  actionLeftStyle={actionLeftStyle}
                  actionStyle={actionStyle}
                  actionRightStyle={actionRightStyle}
                >
                  {renderFooter}
                </Footer>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
});

export default Dialog;
