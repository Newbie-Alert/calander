import styled from "styled-components";
import { RowAttrs, RowBoxProps } from "../../../styles/const";

export const AddEventWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.6rem;
`;

export const CurrentDateBox = styled.div<RowBoxProps>`
  ${RowAttrs};
  font-size: 1.4rem;
`;
