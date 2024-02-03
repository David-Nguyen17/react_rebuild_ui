import { IBodyProps } from "./types";

const Body = (props: IBodyProps) => {
  const { content, children } = props;
  return (
    <div className="body">
      <div>{content}</div>
      {children}
    </div>
  );
};

export default Body;
