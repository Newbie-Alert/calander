import React, { useState } from 'react';
import { AddInfo } from './type';
import { Props } from './AddEvent';

export default function useAddEvent({ day }: Props) {
  const [addInfo, setAddInfo] = useState<AddInfo>({
    year: day.year,
    month: day.month,
    day: day.day,
    title: '',
    content: '',
    createdAt: ''
  });

  const handleInfoChange = (e: React.MouseEvent<HTMLLIElement>) => {
    const { id, value } = e.target as HTMLLIElement;
    setAddInfo({ ...addInfo, [id]: value });
  };

  // 현재 선택된 년/월 기준으로 선택 가능한 일 수를 반환
  const selectableDay = new Date(addInfo.year, addInfo.month, 0).getDate();

  const yearOptions = Array.from({ length: 100 }, (_, year) => day.year - year);
  const monthOptions = Array.from({ length: 12 }, (_, month) => month + 1);
  const dayOptions = Array.from({ length: selectableDay }, (_, day) => day + 1);
  return { addInfo, handleInfoChange, yearOptions, monthOptions, dayOptions };
}
