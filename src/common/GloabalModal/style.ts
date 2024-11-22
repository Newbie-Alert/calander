import { PRIMARY_COLOR } from "./../../styles/const";
import styled from "styled-components";

export const GlobalModalBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const GlobalModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 2;
`;

export const GlobalModalContentBox = styled.div`
  width: 100%;
  max-width: 64rem;
  height: 100%;
  max-height: 48rem;
  background-color: #eee;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const GlobalModalTitle = styled.div`
  width: 100%;
  padding: 1.6rem;
  font-size: 2rem;
  font-weight: 700;
  background-color: #e5e5e5;
`;

export const GlobalModalSubTitle = styled.div`
  width: 100%;
  padding: 1.6rem;
  font-size: 2rem;
  font-weight: 700;
  background-color: ${PRIMARY_COLOR}30;
`;
