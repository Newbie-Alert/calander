import React from "react";
import { Days } from "../../hooks/date/type";
import * as St from "./style";
import { useGlobalModal } from "../../context/GlobalModalContext";

type Props = {
  days: Days[];
  row: number;
  dayOfWeek: string[];
};

export default function CalanderGrid({ days, row, dayOfWeek }: Props) {
  const { setModal } = useGlobalModal();

  const handleClickDay = (day: Days) => {
    setModal({
      component: <div>test</div>,
      title: "일정 추가",
      text: "test",
    });
  };

  return (
    <div>
      <St.WeekBox>
        {dayOfWeek.map((day) => {
          return (
            <St.DayOfWeek>
              <span>{day}</span>
            </St.DayOfWeek>
          );
        })}
      </St.WeekBox>

      <St.CalanderGridWrapper row={row}>
        {days.map((day) => {
          return (
            <St.CalanderGridCell onClick={() => handleClickDay(day)}>
              <St.DayCellTextBox
                currentMonth={day.currentMonth}
                isToday={day.isToday}>
                {day.day}
              </St.DayCellTextBox>
            </St.CalanderGridCell>
          );
        })}
      </St.CalanderGridWrapper>
    </div>
  );
}
