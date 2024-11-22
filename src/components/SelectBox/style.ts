import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../styles/const';

export const SelectBox = styled.div`
  width: fit-content;
  min-width: 9rem;
  height: 3rem;
  border-radius: 0.2rem;
  padding: 0.4rem;
  border: 1px solid ${PRIMARY_COLOR};
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
`;

export const OptionListBox = styled.ul`
  width: 100%;
  max-height: 16rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2.8rem;
  left: 0;
  border: 1px solid ${PRIMARY_COLOR};
`;

type OptionListProps = {
  id: string | number;
};

export const OptionList = styled.li<OptionListProps>`
  width: 100%;
  padding: 0.4rem;
  border-bottom: 1px solid ${PRIMARY_COLOR};

  &:last-child {
    border-bottom: none;
  }
`;
