import React from "react";
import DateSelector from "../DateSelector";
import useDate from "../../hooks/date/useDate";
import CalanderGrid from "../CalanderGrid";

export default function Calander() {
  const {
    currentDate,
    handleDateChange,
    createCalendarDays,
    totalWeeks,
    dayOfWeek,
  } = useDate();

  return (
    <React.Fragment>
      <DateSelector date={currentDate} onClick={handleDateChange} />
      <CalanderGrid
        row={totalWeeks}
        days={createCalendarDays()}
        dayOfWeek={dayOfWeek}
      />
    </React.Fragment>
  );
}
