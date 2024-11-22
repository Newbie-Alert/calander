import styled from "styled-components";
import { PRIMARY_COLOR, RowBoxProps } from "../../styles/const";

type GridRow = {
  row: number;
};

export const CalanderGridWrapper = styled.div<GridRow>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: ${({ row }) => `repeat(${row}, 1fr)`};
  border: 1px solid #eee;
`;

export const CalanderGridCell = styled.div`
  width: 100%;
  aspect-ratio: 2/1.5;
  font-size: 1.6rem;
  border: 1px solid #eee;
  text-align: right;
  padding: 1rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: ${PRIMARY_COLOR}30;
  }
`;

type DayCellTextProps = {
  currentMonth: boolean;
  isToday: boolean;
};

export const DayCellTextBox = styled.div<DayCellTextProps>`
  color: ${({ currentMonth }) => (currentMonth ? "#000" : "#ccc")};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 5rem;
  background-color: ${({ isToday }) =>
    isToday ? `${PRIMARY_COLOR}70` : "transparent"};
  text-align: center;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DayOfWeek = styled.div`
  width: 100%;
  padding: 1rem 0;
  border: 1px solid #eee;
  background-color: #2b2b2b;
  color: #fff;
`;

export const WeekBox = styled.div<RowBoxProps>`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;
