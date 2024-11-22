import { useState } from "react";
import { CurrentDateType, Days } from "./type";

export default function useDate() {
  const date = new Date();

  const [currentDate, setCurrentDate] = useState<CurrentDateType>({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  });

  const handleDateChange = (type: "prev" | "next") => {
    switch (type) {
      case "prev":
        setCurrentDate((prev) => ({
          ...prev,
          month: prev.month === 1 ? 12 : prev.month - 1,
          year: prev.month === 1 ? prev.year - 1 : prev.year,
        }));
        break;
      case "next":
        setCurrentDate((prev) => ({
          ...prev,
          month: prev.month === 12 ? 1 : prev.month + 1,
          year: prev.month === 12 ? prev.year + 1 : prev.year,
        }));
        break;
    }
  };

  // 이전 달 마지막일
  const prevMonthLastDate = new Date(
    currentDate.year,
    currentDate.month - 1,
    0
  ).getDate();

  // 현재 월 마지막 날짜
  const lastDayOfMonth = new Date(
    currentDate.year,
    currentDate.month,
    0
  ).getDate();

  // 현재 월의 시작 요일 인덱스 (0: 일요일 ~ 6: 토요일)
  const startDayOfMonth = new Date(
    currentDate.year,
    currentDate.month - 1,
    1
  ).getDay();

  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 총 주차 수
  const totalWeeks = 6;

  // 전체 날짜 cell 수 (현재 설정은 6주 * 7일로 42일 고정)
  const totalCells = totalWeeks * 7; // 전체 칸 수 (42칸으로 고정해놓음 동적으로 그리려면 Math.ceil(totalDays / 7) 하면 됨)

  // 총 날짜 수 계산 (그냥 현재 월의 마지막일로 해두면 되지만)
  // 42칸을 맞추기 위해서 첫 주에 현재 월의 1일 전까지 빈 칸의 수를 더해주는 것입니당.
  // 이렇게 안 해주면 24년 11월 1일의 시작이 금욜이라서 42-30이 되면서 마지막 날 뒤로 12일이 더 그려져욥!
  const totalDays = startDayOfMonth + lastDayOfMonth;

  const createCalendarDays = () => {
    // 날짜 배열
    const days: Days[] = [];

    // 이전 달 날짜 채우기 (당월 시작일의 요일 전까지)
    // 예. 당월 금욜(요일 인덱스 = 5)
    // 시작일이 금욜이라면 이전 달 마지막 주가 일욜부터 목욜까지 있다는 것
    // 그래서 24년 11월 시작일로부터 5일 전까지 for문을 돌려 이전 달의 마지막 날짜를 계산해 채우는 것
    for (let i = startDayOfMonth - 1; i >= 0; i--) {
      days.push({
        year: currentDate.year,
        month: currentDate.month - 1,
        day: prevMonthLastDate - i,
        isToday: false,
        currentMonth: false,
        schedule: [],
      });
    }

    // 현재 달 날짜 채우기
    // 1일부터 ~ Date객체로 구한 현재 월의 마지막 날까지 for문
    for (let i = 1; i <= lastDayOfMonth; i++) {
      days.push({
        year: currentDate.year,
        month: currentDate.month,
        day: i,
        isToday:
          currentDate.month === new Date().getMonth() + 1 &&
          currentDate.day === i,
        currentMonth: true,
        schedule: [],
      });
    }

    // 다음 달 날짜 채우기
    // 전체 칸 수 (6주 * 7일) // 42일
    // 42 칸으로 칸을 고정하려면 '칸'을 기준으로 42개를 카운트 하는 것이기 때문에
    // 현재 월 첫날 전까지 있는 전 달 일수 + 현재 월의 마지막 날짜를 총 칸수 42에서 빼주고 // 24년 11월 기준 5 + 30 = 35
    // 42 - 35 만큼의 칸을 더 그려주는 것
    for (let i = 1; i <= totalCells - totalDays; i++) {
      days.push({
        year: currentDate.year,
        month: currentDate.month + 1,
        day: i,
        isToday: false,
        currentMonth: false,
        schedule: [],
      });
    }

    return days;
  };

  return {
    currentDate,
    handleDateChange,
    totalWeeks,
    dayOfWeek,
    createCalendarDays,
    lastDayOfMonth,
  };
}
