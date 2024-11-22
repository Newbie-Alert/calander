import React from "react";
import * as St from "./style";
import { useGlobalModal } from "../../context/GlobalModalContext";

export default function GlobalModal() {
  const { modal, contentRef, handleClickOutside } = useGlobalModal();

  if (!modal.component) return null;

  return (
    <React.Fragment>
      <St.GlobalModalWrapper onClick={handleClickOutside}>
        <St.GlobalModalContentBox ref={contentRef}>
          <St.GlobalModalTitle>{modal.title}</St.GlobalModalTitle>
          {modal.component}
          {modal.bottomComponent}
        </St.GlobalModalContentBox>
      </St.GlobalModalWrapper>
      <St.GlobalModalBG onClick={handleClickOutside} />
    </React.Fragment>
  );
}
