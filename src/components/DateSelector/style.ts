import styled from "styled-components";
import { BOLD_FONT, RowAttrs, RowBoxProps } from "../../styles/const";

export const RowBox = styled.div<RowBoxProps>`
  ${RowAttrs}
`;

export const Date = styled.p`
  ${BOLD_FONT}
`;

type DateSelectorProps = {
  type: "prev" | "next";
};

export const DateSelectorButton = styled.button<DateSelectorProps>`
  ${BOLD_FONT}
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50rem;
  cursor: pointer;
  font-size: 1.2rem;
  border: none;
  outline: none;

  & > span {
    content: ${({ type }) => (type === "prev" ? "◀" : "▶")};
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
