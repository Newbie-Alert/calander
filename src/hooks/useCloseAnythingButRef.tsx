import React, { useRef } from "react";

export default function useCloseExceptRef() {
  // 모달 외부 클릭 시 모달 닫기
  const contentRef = useRef<HTMLDivElement>(null);

  // ref를 달아놓은 요소가 클릭한 노드에 포함되어 있지 않으면 모달이 닫힙니당
  const handleClickOutside = (
    e: MouseEvent | React.MouseEvent,
    onClickOutside: () => void
  ) => {
    const target = e.target as HTMLElement;
    if (!contentRef.current?.contains(target)) {
      onClickOutside();
    }
  };

  return { contentRef, handleClickOutside };
}
