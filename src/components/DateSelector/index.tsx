import { singleDigitFillZero } from "../../util/fillZero";
import * as St from "./style";
import { Props } from "./type";

export default function DateSelector({ date, onClick }: Props) {
  return (
    <St.RowBox gap={4} margin="center">
      <St.DateSelectorButton
        aria-label="이전 달 버튼"
        type="prev"
        onClick={() => onClick("prev")}>
        <span>◀</span>
      </St.DateSelectorButton>
      <St.RowBox gap={2}>
        <St.Date>{date.year}년</St.Date>
        <St.Date>{singleDigitFillZero(date.month)}월</St.Date>
      </St.RowBox>
      <St.DateSelectorButton
        type="next"
        aria-label="다음 달 버튼"
        onClick={() => onClick("next")}>
        <span>▶</span>
      </St.DateSelectorButton>
    </St.RowBox>
  );
}
