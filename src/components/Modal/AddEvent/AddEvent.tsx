import { Days } from "../../../hooks/date/type";
import SelectBox from "../../SelectBox/SelectBox";
import * as St from "./style";
import useAddEvent from "./useAddEvent";

export type Props = {
  day: Days;
};
export default function AddEvent({ day }: Props) {
  const { addInfo, handleInfoChange, yearOptions, monthOptions, dayOptions } =
    useAddEvent({ day });

  return (
    <St.AddEventWrapper>
      <St.CurrentDateBox gap={1}>
        <SelectBox
          id="year"
          value={addInfo.year}
          options={yearOptions}
          onClick={handleInfoChange}
        />
        <SelectBox
          id="month"
          value={addInfo.month}
          options={monthOptions}
          onClick={handleInfoChange}
        />
        <SelectBox
          id="day"
          value={addInfo.day}
          options={dayOptions}
          onClick={handleInfoChange}
        />
      </St.CurrentDateBox>
    </St.AddEventWrapper>
  );
}
