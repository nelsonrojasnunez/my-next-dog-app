import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Card = ({ children }: Props) => {
  return (
    <div className="card mt-2">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
