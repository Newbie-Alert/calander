import React from "react";
import * as St from "./style";
import { useGlobalModal } from "../../context/GlobalModalContext";
import useCloseExceptRef from "../../hooks/useCloseAnythingButRef";

export default function GlobalModal() {
  const { modal, clearModal } = useGlobalModal();
  const { contentRef, handleClickOutside } = useCloseExceptRef();

  if (!modal.component) return null;

  return (
    <React.Fragment>
      <St.GlobalModalWrapper onClick={(e) => handleClickOutside(e, clearModal)}>
        <St.GlobalModalContentBox ref={contentRef}>
          <St.GlobalModalTitle>{modal.title}</St.GlobalModalTitle>
          {modal.component}
          {modal.bottomComponent}
        </St.GlobalModalContentBox>
      </St.GlobalModalWrapper>
      <St.GlobalModalBG onClick={(e) => handleClickOutside(e, clearModal)} />
    </React.Fragment>
  );
}
