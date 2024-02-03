import { ReactNode } from "react";

export type TypeDialog = "dialog" | "modal";

export interface IFooterCommonProps {
  titleActionLeft?: string;
  titleActionRight?: string;
  actionLeftStyle?: string;
  actionRightStyle?: string;
  actionStyle?: string;
}

export interface IDialogProps extends IFooterCommonProps {
  type: TypeDialog;
  title?: string;
  content?: string;
  open?: boolean;
  onClose: () => void;
  renderBody?: ReactNode;
  renderFooter?: ReactNode;
  renderHeader?: ReactNode;
  isShowButtonFooterDefault?: boolean;
  headerStyle?: string;
  bodyStyle?: string;
  footerStyle?: string;
  styleDialog?: string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  isShowFooter?: boolean;
}

export interface IBodyProps {
  content?: string;
  children?: React.ReactNode;
}

export interface IFooterProps extends IFooterCommonProps {
  children?: React.ReactNode;
  isShowButtonFooterDefault?: boolean;
  onPressLeft: () => void;
  onPressRight: () => void;
}

export interface IHeaderProps {
  title?: string;
  isModal: boolean;
  onClose?: () => void;
  children?: ReactNode;
}
