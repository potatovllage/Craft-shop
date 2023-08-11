import type { ReactNode } from "react";
import { useOutsideClick } from "../../hooks/useOutSideClick";

interface Props {
  children: ReactNode;
  onOutSideClick: () => void;
}

function OutSideClickHandler({ children, onOutSideClick }: Props) {
  const handleOutsideClick = () => {
    onOutSideClick();
  };

  const ref = useOutsideClick(handleOutsideClick);
  return <div ref={ref}>{children}</div>;
}

export default OutSideClickHandler;
